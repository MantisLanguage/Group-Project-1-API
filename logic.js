$("#search").click(function () {
  event.preventDefault();
  $(".mainDiv").empty();
  $(".welcomeDiv").empty();
  var game = $("#searchValue").val()
  console.log(game.length)
  if (game.length === 0) {
    
  } else {
    
    
    $.ajax({
      url: "https://api.rawg.io/api/games?search=" + game,
      method: "GET"
      
    }).then(function (response) {
      var results = response.results;
      console.log(results);
      for (let i = 0; i < results.length; i++) {
        
        
        $.ajax({
          url: "https://cors-anywhere.herokuapp.com/http://www.giantbomb.com/api/search/?api_key=8432d765a7fad2b8c978c0fb766a47031ec3abb5&format=json&query=" + results[i].name + "&resources=game&limit=1",
          method: "GET"
        }).then(function (response) {
          var gameName = results[i].name;
          var imgURL = results[i].short_screenshots[1].image;
          var gameRate = results[i].rating;
          var consoleType = results[i].platforms[0].platform.name;
          var descResults = response.results
          var releaseDate = results[i].released
          console.log(descResults)
          
          var description = descResults[0].deck || "No Description Available";
          
          
          var mainCard = $("<div class='animated slideInRight card mb-3 gameCard' style='max-width: 20rem;'>");
          
          var cardHeader = $("<div class='card-header gameName'>");
          cardHeader.text(gameName);
          mainCard.append(cardHeader);
          
          var thumbImg = $("<img style='height: 200px; width: 100%; display: inline-block;'>");
          thumbImg.attr("src", imgURL);
          
          var cardBody = $("<div class='card-body cardBody'>");
          mainCard.append(cardBody);
          cardBody.append(thumbImg);
          var gameInfo ="<h6 style='color: #05132D'><strong>Release: <br></h6></strong>" + releaseDate + "<br>" + "<h6 style='color: #05132D'><strong>Rating: </h6></strong> " + gameRate + "<br>" + "<h6 style='color: #05132D'><strong>Platform: </h6></strong> " + consoleType + "<br>" + "<h6 style='color: #05132D'><strong>Description: <br></h6></strong>" + description;
          cardBody.append(gameInfo);
          
          $(".mainDiv").append(mainCard);
        });
        
        
      }
    });
    
  }
  });
  
  $(document).ready(function () {
    setTimeout(function(){
        $('#logo').show();
    }, 1000);
});
  
  // $("#search").on("click", function () {
    //   event.preventDefault();
//   var game = $("#searchValue").val();
//   $.ajax({
//     url: "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/kraken/streams?" + game,
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
