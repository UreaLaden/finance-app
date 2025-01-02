package activeServers

import (
	"context"
	"fmt"
	"log"
	"net"
	"os"
	"os/signal"	

	firebase "firebase.google.com/go"
	"github.com/spf13/viper"
	app "github.com/urealaden/cova-cents/server/firebase"
	pb "github.com/urealaden/cova-cents/server/proto"
	"google.golang.org/grpc"

	"firebase.google.com/go/auth"
	"firebase.google.com/go/db"
)

// BudgetServer implements the BudgetServiceServer for handling budget-related gRPC requests
type BudgetServer struct {
	pb.BudgetServiceServer
}

// AppServer centralizes Firebase services and the gRPC Budget Server
type AppServer struct {
	SDK      *firebase.App
	DBClient *db.Client
	Auth     *auth.Client
	Server   BudgetServer
}

func NewAppServer(sdk *firebase.App, dbClient *db.Client, auth *auth.Client) *AppServer {
	return &AppServer{
		SDK:      sdk,
		DBClient: dbClient,
		Auth:     auth,
		Server:   BudgetServer{},
	}
}

func InitializeAppServer(ctx context.Context) (*AppServer, context.CancelFunc, error) {
	ctx, cancel := context.WithCancel(ctx)

	app, authClient, dbClient, err := app.Init(ctx)
	if err != nil {
		cancel()
		return nil, nil, fmt.Errorf("error initializing application sdk: %v", err)
	}

	return NewAppServer(app, dbClient, authClient), cancel, nil
}

func StartGRPCServer(ctx context.Context, appServer *AppServer) error {
	v := viper.GetViper()
	addr := v.GetString("grpc_server_address")

	lis, err := net.Listen("tcp", addr)
	if err != nil {
		return fmt.Errorf("failed to listen: %v", err)
	}

	log.Printf("Listening on %s\n", addr)

	server := grpc.NewServer()
	pb.RegisterBudgetServiceServer(server, appServer.Server)

	// Signal handling for graceful shutdown
	go func() {
		<-ctx.Done()
		log.Println("Received shutdown signal. Stopping gRPC server...")
		server.GracefulStop()
	}()

	// Start the gRPC server
	if err := server.Serve(lis); err != nil {
		return fmt.Errorf("failed to serve: %v", err)
	}

	log.Println("gRPC server stopped gracefully")

	return nil

}

// Main entry point to setup and start the gRPC server
func RunServer() {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	// Handle OS signals
	go handleSignals(cancel)

	// InitializeAppServer
	appServer, appCancel, err := InitializeAppServer(ctx)
	if err != nil {
		log.Fatalf("Error initializing app server: %v", err)
	}

	defer appCancel()

	if err := StartGRPCServer(ctx, appServer); err != nil {
		log.Fatalf("Error starting gRPC server: %v", err)
	}
}

func handleSignals(cancel context.CancelFunc) {
	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, os.Interrupt)

	sig := <-sigCh
	log.Printf("Received signal: %v. Shutting down...\n", sig)

	cancel()
}
