package firebase

import (
	"context"
	"log"

	firebase "firebase.google.com/go"
	"github.com/spf13/viper"
	common "github.com/urealaden/cova-cents/server/common"
	"google.golang.org/api/option"
)

func Init(appServer *common.AppServer) {
	v := viper.GetViper()

	ctx := context.Background()

	dbUrl := v.GetString("db_url")
	config := &firebase.Config{
		DatabaseURL: dbUrl,
	}

	credentialsPath := v.GetString("firebase_credentials_file")
	opt := option.WithCredentialsFile(credentialsPath)

	app, err := firebase.NewApp(ctx, config, opt)
	if err != nil {
		log.Fatalf("error initializing application sdk: %v\n", err)
	}
	appServer.SDK = app

	authClient, err := app.Auth(ctx)
	if err != nil {
		log.Fatalf("error initializing auth client: %v\n", err)
	}
	appServer.Auth = authClient

	dbClient, err := app.Database(ctx)
	if err != nil {
		log.Fatalf("error initializing database client: %v\n", err)
	}
	appServer.DBClient = dbClient
	log.Println("...Firebase Services initialized")
}
