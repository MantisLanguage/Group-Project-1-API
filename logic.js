$("#search").click(function () {
  event.preventDefault();
  var game = $("#searchValue").val()

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


      var mainCard = $("<div class='card border-primary mb-3 gameCard' style='max-width: 20rem;'>");

      var cardHeader = $("<div class='card-header gameName'>");
      cardHeader.text(gameName);
      mainCard.append(cardHeader);

      var thumbImg = $("<img style='height: 200px; width: 100%; display: inline-block;'>");
      thumbImg.attr("src", imgURL);

      var cardBody = $("<div class='card-body cardBody'>");
      mainCard.append(cardBody);
      cardBody.append(thumbImg);
      var gameInfo = "Rating: " + gameRate + "<br>" + "Platform: " + consoleType;
      cardBody.append(gameInfo);

      $(".mainDiv").append(mainCard); 
    }
  });
});


<<<<<<< HEAD

// $("#search").on("click", function () {
//   event.preventDefault();
//   var game = $("#searchValue").val();
//   $.ajax({
//     url: "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/helix/streams?" + game,
//     method: "GET",
//     headers: {
//       "Client-ID":
//         "cdfnz8vncfslalcwt8h9257c540ta1"
//     },
//   }).then(function (response) {
//     var results = response.data
//     console.log(results);
//     for (var i = 0; i < results.length; i++) {
//       var streamTitle = results[i].title;
//       var streamerName = results[i].user_name;

//       var mainCard = $("<div class='card border-primary mb-3 gameCard' style='max-width: 20rem;'>");

//       var cardHeader = $("<div class='card-header gameName'>");
//       cardHeader.text(streamerName);
//       mainCard.append(cardHeader);

//       var cardBody = $("<div class='card-body cardBody'>");
//       cardBody.text(streamTitle);
//       mainCard.append(cardBody);

//       var thumbImg = $("<img style='height: 200px; width: 100%; display: inline-block;'>");
//       thumbImg.attr("src", "https://static-cdn.jtvnw.net/previews-ttv/live_user_" + streamerName + "-180x100.jpg");
//       cardBody.append(thumbImg);

//       $(".mainDiv").append(mainCard);
//     };
//   });
// });
=======
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
>>>>>>> master
