console.log("loading...")

let gameId;

$(() => {

  $("#full-screen-btn").click(event => {
  var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
    document.getElementById('full-screen-btn').style.display = "none";
  })

  $("#reset-game-btn").click(event => {
    console.log("start-game")
    event.preventDefault()
    fetch("http://engine:3005/games", {
      method: "POST",
      body: JSON.stringify({
        "width":15,
        "height":15,
        "food":10,
        "MaxTurnsToNextFoodSpawn":0,
        "snakes": [{
		"name":"snake1",
		"url":"http://ai1:8888"
	},{
		"name":"snake2",
		"url":"http://ai1:9999"
	},{
		"name":"human",
		"url":"http://human1:8080"
	}]
      })
    }).then(resp => resp.json())
      .then(json => {
        gameId = json.ID
	console.log("Game ID = " + gameId)
	$("#board").attr("src", `http://board:3009?engine=http://engine:3005&game=${gameId}&autoplay=true`)
      })
      .catch(err => $("#errors").text(err))
  })

  $("#reset-game-btn2").click(event => {
    console.log("start-game two player")
    event.preventDefault()
    fetch("http://engine:3005/games", {
      method: "POST",
      body: JSON.stringify({
        "width":15,
        "height":15,
        "food":10,
        "MaxTurnsToNextFoodSpawn":0,
        "snakes": [{
		"name":"snake1",
		"url":"http://ai1:8888" // https://dsnek.herokuapp.com
	},{
		"name":"snake2",
		"url":"http://ai1:9999"
	},{
		"name":"White controller",
		"url":"http://human1:8080"
	},{
		"name":"Black controller",
		"url":"http://human2:8081"
	}
	]
      })
    }).then(resp => resp.json())
      .then(json => {
        gameId = json.ID
	console.log("Game ID = " + gameId)
	$("#board").attr("src", `http://board:3009?engine=http://engine:3005&game=${gameId}&autoplay=true`)
      })
      .catch(err => $("#errors").text(err))
  })




  $("#start-game-btn").click(event => {
    console.log("start-game")
    event.preventDefault()
        fetch(`http://engine:3005/games/${gameId}/start`, {
          method: "POST"
        }).then(_ => {
          console.log("Game started")
        }).catch(err => $("#errors").text(err))
  })
  console.log("ready!")
})
