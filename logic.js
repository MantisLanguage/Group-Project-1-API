
$("#search").click(function () {
  event.preventDefault();
  var game = $("#searchValue").val()


  console.log(game)
  $.ajax({
    url: "https://api.rawg.io/api/games?search=" + game,
    method: "GET"

  }).then(function (response) {
    var results = response.results
    console.log(results);
    for (var i = 0; i < results.length; i++) {
      var imgURL = results[i].short_screenshots[1].image;
      var gameRate = results[i].rating;
      var gameName = results[i].name;
      var consoleType = results[i].platforms[0].platform.name;

      // var vidClip = results[i].clip; 
      var cType = $("<div>")
      var Gname = $("<div>")
      var img = $("<img>")
      var rate = $("<div>").addClass()
      // var vid = $("<video>") 
      img.attr('src', imgURL);
      // vid.attr('src', vidClip) 
      rate.text(gameRate);
      Gname.text(gameName)
      cType.text(consoleType)
      $("#temp").append(img);
      $("#temp").append(rate);
      $("#temp").append(Gname);
      $("#temp").append(cType)
      // $("#temp").append(vid); 
    }
  });
});


$("#search").on("click", function () {
  event.preventDefault();
  var game = $("#searchValue").val();
  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/helix/streams?game=" + game,
    method: "GET",
    headers: {
      "Client-ID":
        "cdfnz8vncfslalcwt8h9257c540ta1"
    },
  }).then(function (response) {
    var results = response.data
    console.log(results);
    for (var i = 0; i < results.length; i++) {
      // var imgURL = results[i].thumbnail_url
      var streamTitle = results[i].title;
      console.log(streamTitle);
      var streamerName = results[i].user_name;
      console.log(streamerName);
      // var vidClip = results[i].clip; 
      var mainCard = $("<div class='card border-primary mb-3 gameCard1' style='max-width: 20rem;'>");

      var cardHeader = $("<div class='card-header gameName'>");
      cardHeader.text(streamTitle);
      mainCard.append(cardHeader);

      var cardBody = $("<div class='card-body cardBody'>");
      cardBody.text(streamerName);
      mainCard.append(cardBody);

      var img = $("<img style='height:200px; width: 100%; display: inline-block;'>");
      // img.addClass("src", imgURL);
      cardBody.append(img);

      $("body").append(mainCard);
    };
  });
});


// <div class="card border-primary mb-3 gameCard" style="max-width: 20rem;">
// <div class="card-header gameName">Name of Game</div>
// <div class="card-body">
//     <h4 class="card-title"></h4>
//     <div class="card-body">
//         <img style="height: 200px; width: 100%; display: inline-block;"
//             src="#"
//             alt="Card image"
//             class="gameImage">
//         <p class="card-text gameRating"></p>
//         <p class="card-text gameReview"></p>
//         <p class="card-text gamePlatform"></p>
//         <p class="card-text gameReleaseDate"></p>
//         <p class="lead twitchBtn">
//             <a class="btn btn-primary btn-lg" href="#" role="button">Link to twitch</a>
//         </p>
//     </div>
// </div>
// </div>
// </div>