$(document).on("click", ".meme", twitchGenerator);


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
});

function twitchGenerator() {
  $("#contentDiv").empty();
  var userInput = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=vsgHQJizAi8RDGZOXjtzOMdN0qPsp2oN&limit=10";

  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/helix/streams?game=" + game,
    method: "GET",
    headers: {
      "Client-ID":
        "cdfnz8vncfslalcwt8h9257c540ta1"
    },
  }).then(function (response) {
    console.log(response)
    var results = response.data;
    for (var i = 0; i < results.length; i++) {

      // Creating a div to hold the main body
      var mainDiv = $(".mainDiv").html("<div class="card border-primary mb-3 gameCard" style="max-width: 20rem;"> <div class="card-header gameName">Name of Game</div> <div class="card-body"> <h4 class="card-title"></h4> <div class="card-body">");

      // Storing the rating data
      var rating = response.data[i].rating;

      // Creating an element to have the rating displayed
      var pOne = $("<p>").text("Rating: " + rating).css("display", "inline");

      // Displaying the rating
      mainDiv.append(pOne);

      // Retrieving the URL for the image
      var stillURL = response.data[i].images.original_still.url;
      var animateURL = response.data[i].images.original.url;


      // Creating an element to hold the image
      var image = $("<img>").attr("src", stillURL).css("display", "inline-block").addClass("memeImg");
      image.attr("data-state", "still");
      image.attr("data-still", stillURL);
      image.attr("data-animate", animateURL);
      // Appending the image
      mainDiv.append(image);

      // Putting the entire movie above the previous movies
      $("#contentDiv").append(mainDiv);
    };

  })
};
