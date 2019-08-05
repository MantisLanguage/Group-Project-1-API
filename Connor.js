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

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/kraken/streams?game=" + game,
        method: "GET",
        headers: {
            "Client-ID":
                "cdfnz8vncfslalcwt8h9257c540ta1",
        },


    }).then(function (response) {
        console.log(response);
    });




    // $.ajax({
    //     url: "https://cors-anywhere.herokuapp.com/http://www.giantbomb.com/api/search/?api_key=8432d765a7fad2b8c978c0fb766a47031ec3abb5&format=json&query=" + game + "&resources=game",
    //     method: "GET",


    // }).then(function (response) {
    //     console.log(response)
    //     var results = response.results
    //     for (var i = 0; i < results.length; i++) {
    //         var description = results[i].description
    //         var dScrip = $("<div>")
    //         dScrip.text(description)
    //         $("#temp").append(dScrip)

    //     }
    // });

});
