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
                // var vidClip = results[i].clip; 
                var name = $("<div>")
                var img = $("<img>")
                var rate = $("<div>").addClass()
                // var vid = $("<video>") 
            img.attr('src', imgURL);
            // vid.attr('src', vidClip) 
            rate.text(gameRate);
            name.text(gameName)
           $("#temp").append(img);
            $("#temp").append(rate);
            $("#temp").append(name);
            // $("#temp").append(vid); 

            
        

        }});

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/helix/streams?game=" + game,
        method: "GET",
        headers: {
            "Client-ID":
                "cdfnz8vncfslalcwt8h9257c540ta1",
        },


    }).then(function (response) {
        console.log(response);
    });

})
