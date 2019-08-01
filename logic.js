
    $.ajax({
        url: "https://api.rawg.io/api/games?page_size=5&search=yoshi",
        method: "GET"
      }).then(function(response) {
        console.log(response);
      });