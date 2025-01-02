package common

import (
	firebase "firebase.google.com/go"
	"firebase.google.com/go/auth"
	"firebase.google.com/go/db"
)

type AppServer struct {
	SDK *firebase.App
	DBClient *db.Client
	Auth *auth.Client
}
