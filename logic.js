$("#search").click(function () {
  event.preventDefault();
  // alert("test");
  // console.log("test")
  var game = $("#searchValue").val()


  console.log(game)
  $.ajax({
      url: "https://api.rawg.io/api/games?search=" + game,
      method: "GET"

  }).then(function (response) {
      console.log(response);
  });

  $.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/helix/streams?game=" + game,
      method: "GET", 
      headers: {"Client-ID":
      "cdfnz8vncfslalcwt8h9257c540ta1"},
  

  }).then(function (response) {
      console.log(response);
  });

});


