package handlers

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func HelloWorldHandler(c echo.Context) error {

	return c.JSON(http.StatusOK, "Hello World!")
}
