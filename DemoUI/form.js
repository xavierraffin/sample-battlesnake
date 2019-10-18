console.log("loading...")

let gameId;

$(() => {

  $("#reset-game-btn").click(event => {
    console.log("start-game")
    event.preventDefault()
    fetch("http://pi:3005/games", {
      method: "POST",
      body: JSON.stringify({
        "width":15,
        "height":15,
        "food":10,
        "MaxTurnsToNextFoodSpawn":0,
        "snakes": [{
		"name":"snake1",
		"url":"https://dsnek.herokuapp.com"
	},{
		"name":"snake2",
		"url":"https://dsnek.herokuapp.com"
	},{
		"name":"human",
		"url":"http://localhost:8080"
	}]
      })
    }).then(resp => resp.json())
      .then(json => {
        gameId = json.ID
	console.log("Game ID = " + gameId)
	$("#board").attr("src", `http://pi:3009?engine=http://pi:3005&game=${gameId}&autoplay=true`)
      })
      .catch(err => $("#errors").text(err))
  })

  $("#reset-game-btn2").click(event => {
    console.log("start-game two player")
    event.preventDefault()
    fetch("http://pi:3005/games", {
      method: "POST",
      body: JSON.stringify({
        "width":15,
        "height":15,
        "food":10,
        "MaxTurnsToNextFoodSpawn":0,
        "snakes": [{
		"name":"snake1",
		"url":"https://dsnek.herokuapp.com"
	},{
		"name":"snake2",
		"url":"https://dsnek.herokuapp.com"
	},{
		"name":"White controller",
		"url":"http://localhost:8080"
	},{
		"name":"Black controller",
		"url":"http://localhost:8081"
	}
	]
      })
    }).then(resp => resp.json())
      .then(json => {
        gameId = json.ID
	console.log("Game ID = " + gameId)
	$("#board").attr("src", `http://pi:3009?engine=http://pi:3005&game=${gameId}&autoplay=true`)
      })
      .catch(err => $("#errors").text(err))
  })




  $("#start-game-btn").click(event => {
    console.log("start-game")
    event.preventDefault()
        fetch(`http://pi:3005/games/${gameId}/start`, {
          method: "POST"
        }).then(_ => {
          console.log("Game started")
        }).catch(err => $("#errors").text(err))
  })
  console.log("ready!")
})
