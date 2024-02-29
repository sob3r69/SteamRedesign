package main

import (
	"encoding/json"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/gocolly/colly"
)

func main() {
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:5173"},
		AllowCredentials: true,
	}))

	r.GET("/", SendDefaultMSG)
	r.GET("/app/:id", SendAppData)
	r.GET("/top_sellers", SendTopSellers)

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

func SendTopSellers(c *gin.Context) {
	var topData = getTopSellers()
	c.JSON(200, topData)
}

func getJson(url string, target interface{}) error {
	r, err := http.Get(url)
	if err != nil {
			return err
	}
	defer r.Body.Close()

	return json.NewDecoder(r.Body).Decode(target)
}


func getTopSellers() []string {
	var result = []string{}
	c := colly.NewCollector()

	c.OnHTML("#search_resultsRows .search_result_row", func(e *colly.HTMLElement) {
		result = append(result, (e.Attr("data-ds-appid")))
	})
	c.Visit("https://store.steampowered.com/search/?filter=topsellers")
	return result[0:12]
}