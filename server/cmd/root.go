package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
	"github.com/urealaden/cova-cents/server/activeServers"
	"github.com/urealaden/cova-cents/server/pkg/config"
)

var (
	rootCmd = &cobra.Command{
		Use:   "cova-cents",
		Short: "Cova Cents is a platform that allows users safely and securtely manage they budgets and expenses",
		Run: func(cmd *cobra.Command, args []string) {
			fmt.Println("Initializing Cova Cents...")

			activeServers.RunServer()
		},
	}
)

func Execute() error {
	return rootCmd.Execute()
}

func init() {
	fmt.Println("Initializing root command")
	// Read in the Config
	config.InitConfig()


}
