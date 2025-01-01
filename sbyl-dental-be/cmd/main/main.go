package main

import (
	"github.com/acgtubio/sbyl-dental/internal/routes"
	"github.com/labstack/echo/v4"
)

func main() {
	// TODO: Custom port env
	serverPort := "8080"
	e := echo.New()

	routes.RegisterRoutes(e)

	e.Logger.Fatal(e.Start(":" + serverPort))
}
