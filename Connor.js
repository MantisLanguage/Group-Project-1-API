$("#search").click(function () {
    event.preventDefault();
    var game = $("#searchValue").val();
    var recallName = [];
console.log(recallName)
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
            recallName.push(gameName)
            cType.text(consoleType)
            $(".mainDiv").append(img);
            $(".mainDiv").append(rate);
            $(".mainDiv").append(Gname);
            $(".mainDiv").append(cType)
            console.log(recallName)
            // $("#temp").append(vid); 
            // Pushing into Array:

            // gameName.push(recallName)

            // function(results){
            //     gameName.push(results)
        
        

            // recallName.forEach(function(){
            //     requests.push($.get(gameName));
            // });
        // for (var i = 0; i < recallName.length; i++) {

            $.ajax({
                url: "https://cors-anywhere.herokuapp.com/http://www.giantbomb.com/api/search/?api_key=8432d765a7fad2b8c978c0fb766a47031ec3abb5&format=json&query=" + gameName + "&resources=game&limit=1",
                method: "GET",
        
        
            }).then(function (response) {
                var results = response.results
                console.log(results)
                if(results[0].deck){
                    $(".mainDiv").append(results[0].deck);
                }
               
            });
        // }
 // for (var i = 0; i < results.length; i++) {
                //     var description = results[i].description
                //     var dScrip = $("<div>")
                //     dScrip.text(description)
                //     $("#temp").append(dScrip)
        
                // }




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

});
