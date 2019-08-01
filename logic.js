
    $.ajax({
        url: "https://api.rawg.io/api/games?page_size=5&search=gta%20v",
        method: "GET"
      }).then(function(response) {
        console.log(response);
      });