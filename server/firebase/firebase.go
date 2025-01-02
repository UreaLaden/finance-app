package firebase

import (
	"context"
	"log"

	firebase "firebase.google.com/go"
	"firebase.google.com/go/auth"
	"firebase.google.com/go/db"
	"github.com/spf13/viper"	
	"google.golang.org/api/option"
)

func Init(ctx context.Context) (*firebase.App, *auth.Client, *db.Client, error) {
	v := viper.GetViper()
	
	dbUrl := v.GetString("db_url")
	config := &firebase.Config{
		DatabaseURL: dbUrl,
	}

	credentialsPath := v.GetString("firebase_credentials_file")
	opt := option.WithCredentialsFile(credentialsPath)

	app, err := firebase.NewApp(ctx, config, opt)
	if err != nil {
		log.Fatalf("error initializing application sdk: %v\n", err)
		return nil, nil, nil, err
	}
	
	
	authClient, err := app.Auth(ctx)
	if err != nil {
		log.Fatalf("error initializing auth client: %v\n", err)
		return nil, nil, nil, err
	}	
	
	dbClient, err := app.Database(ctx)
	if err != nil {
		log.Fatalf("error initializing database client: %v\n", err)
		return nil, nil, nil, err
	}
	
	log.Println("...Firebase Services initialized")

	return app, authClient, dbClient, nil
}
