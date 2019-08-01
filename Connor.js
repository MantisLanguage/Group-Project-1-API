
    $.ajax({
        url: "https://www.gamespot.com/api/games/?api_key=e77ca37b5dab23b4680fd29b5b7ccb994e61db4c",
        method: "GET"
      }).then(function(response) {
        console.log(response);
      });