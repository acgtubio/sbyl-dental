package routes

import (
	"github.com/acgtubio/sbyl-dental/internal/routes/handlers"
	"github.com/labstack/echo/v4"
)

func RegisterRoutes(e *echo.Echo) {
	e.GET("/hello", handlers.HelloWorldHandler)
}
