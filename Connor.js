var queryURL = "https://api.rawg.io/api/games/search?q=" + game + "&limit=10"
var game = $(this).attr("")


    $.ajax({
        url: queryURL,
        method: "GET"

      }).then(function(response) {
        console.log(response);
      });