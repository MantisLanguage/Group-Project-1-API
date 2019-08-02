// $("#search").on("click", function(){
//  alert ("test");

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
        var results = response;
        console.log(response);
<<<<<<< HEAD
        var results = response.results
        console.log(results);
         for (var i = 0; i < results.length; i++) {
        var imgURL = results[i].short_screenshots[1].image;
        var ratingRes = results[i].rating;
        console.log(imgURL);
        console.log(ratingRes);
           $("#game-image").attr("src", imgURL);
            $("#ratingText").text(ratingRes);
        //    gameIMG.attr('src', results[1].short_screenshots[1].image);
        //     gameRate.text(results[1].rating)
            // $(".gameImage").prepend(gameIMG)
            // $(".gameRating").prepend(gameRate)
=======
        for (var i = 0; i < results.length; i++) {
            var gameIMG = $('<img>');
            var gameRate = results.ratings;
            var results = results.data;
            gameIMG.attr('src', results[i].short_screenshots[1].url);
            gameRate.attr('src', results[i].ratings.url)
            $(".gameImage").prepend(gameIMG)
            $(".gameRating").prepend(gameRate)
>>>>>>> 4e6fb0ba864cad7c5e77b5ad6cdb457a88876a20
        }});

    // $.ajax({
    //     url: "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/helix/streams?game=" + game,
    //     method: "GET",
    //     headers: {
    //         "Client-ID":
    //             "cdfnz8vncfslalcwt8h9257c540ta1"

    //             // data[""0""].thumbnail_url

    //             // results[1].short_screenshots[1]
    //     },


    // }).then(function (response) {
    //     console.log(response);
    // });

});



 // Twitch Client-ID: "cdfnz8vncfslalcwt8h9257c540ta1"
