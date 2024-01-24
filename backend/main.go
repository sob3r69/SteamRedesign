package main

import (
	"encoding/json"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:5173"},
		AllowCredentials: true,
	}))

	r.GET("/", SendDefaultMSG)
	r.GET("/app/:id", SendAppData)

	r.Run(":3000") 
}

func SendDefaultMSG(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "This is steam API bridge, to use it go to https://localhost:3000/app/{appId}",
	})
}

func SendAppData(c *gin.Context) {
	var data interface{}
	id := c.Param("id")
	getJson("http://store.steampowered.com/api/appdetails?appids=" + id, &data)
	c.JSON(200, data.(map[string]interface{})[id].(map[string]interface{})["data"])
}

func getJson(url string, target interface{}) error {
	r, err := http.Get(url)
	if err != nil {
			return err
	}
	defer r.Body.Close()

	return json.NewDecoder(r.Body).Decode(target)
}
