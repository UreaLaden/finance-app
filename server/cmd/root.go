package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
	"github.com/urealaden/cova-cents/server/activeServers"
	"github.com/urealaden/cova-cents/server/common"
	"github.com/urealaden/cova-cents/server/firebase"
	"github.com/urealaden/cova-cents/server/pkg/config"
)

var (	
	rootCmd = &cobra.Command{
		Use:   "cova-cents",
		Short: "Cova Cents is a platform that allows users safely and securtely manage they budgets and expenses",
		Run: func(cmd *cobra.Command, args []string) {
			fmt.Println("Initializing Cova Cents...")
			
		},
	}
)

func Execute() error {
	return rootCmd.Execute()
}

func init() {
	fmt.Println("Initializing root command")
	appServer := &common.AppServer{}

	// Read in the Config
	config.InitConfig()	

	// Initialize the Firebase SDK
	firebase.Init(appServer)
	
	// Setup the routers and servers
	activeServers.Launch(appServer)
}
