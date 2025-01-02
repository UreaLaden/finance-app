package config

import (
	"fmt"
	"log"
	"os"

	"github.com/go-playground/validator/v10"
	"github.com/spf13/viper"
)

const validateorErrorMsg = `
##############################
# NOTE: Validator error messages are in the format of the Go struct field name.
# These can be transformed in the config key by converting to snake_case and replacing "." with "_".
# Examples:
#   Go struct field name: DBUrl -> config key: db_url
##############################
`

/*
The Config struct is mapped to config.yaml file
*/
type Config struct {
	DBUrl                   string `mapstructure:"db_url" validate:"required"`
	FirebaseCredentialsFile string `mapstructure:"firebase_credentials_file" validate:"required"`
}

func InitConfig() {
	c := &Config{}
	
	viper.SetConfigName("config")
	viper.SetConfigType("yaml")

	viper.AddConfigPath(".")

	if err := viper.ReadInConfig(); err != nil {
		log.Fatalf("Error reading config file, %s", err)
	}
	
	viper.BindEnv("firebase_credentials_file","GOOGLE_APPLICATION_CREDENTIALS")

	credentialsPath := os.Getenv("GOOGLE_APPLICATION_CREDENTIALS")
	if credentialsPath == "" {
		log.Fatalf("`GOOGLE_APPLICATION_CREDENTIALS` environment variable is not set: %s", credentialsPath)
		return
	}

	viper.Set("firebase_credentials_file", credentialsPath)

	viper.AutomaticEnv()

	if err := viper.Unmarshal(c); err != nil {
		log.Fatalf("Error unmarshalling config, %s", err)
	}

	validate := validator.New()
	if err := validate.Struct(c); err != nil {
		fmt.Print(validateorErrorMsg)
		for _, err := range err.(validator.ValidationErrors) {
			fmt.Printf("Validation error on field '%s': %v\n", err.Namespace(), err.Error())
		}
	}		
}
