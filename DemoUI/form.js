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
		"name":"SageMaker 1 (AI)",
		"url":"http://ai1:8888"
	},{
		"name":"SageMaker 2 (AI)",
		"url":"http://ai1:9999"
	},{
		"name":"White controller (human)",
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
		"name":"SageMaker 1 (AI)",
		"url":"http://ai1:8888" // https://dsnek.herokuapp.com
	},{
		"name":"SageMaker 2 (AI)",
		"url":"http://ai2:9999", //"https://2s9cg4gzhl.execute-api.us-east-2.amazonaws.com/dev/", // "http://ai1:9999"
	},{
		"name":"White controller (human)",
		"url":"http://human1:8080"
	},{
		"name":"Black controller (human)",
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
