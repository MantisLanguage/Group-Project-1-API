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
                var img = $("<img>")
                var rate = $("<div>")
            console.log(gameRate);
            console.log(imgURL);
            img.attr('src', imgURL);
            rate.text(gameRate);
           $("#temp").append(img);
            $("#temp").append(rate);
            

        }});

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/helix/streams?game=" + game,
        method: "GET",
        headers: {
            "Client-ID":
                "cdfnz8vncfslalcwt8h9257c540ta1",

    //             // data[""0""].thumbnail_url

    //             // results[1].short_screenshots[1]
        },


    }).then(function (response) {
        console.log(response);
    });

})
 // Twitch Client-ID: "cdfnz8vncfslalcwt8h9257c540ta1"
