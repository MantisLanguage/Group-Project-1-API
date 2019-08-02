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


<<<<<<< HEAD
    $.ajax({
        url: "https://api.rawg.io/api/games?page_size=5&search=yoshi",
        method: "GET"
      }).then(function(response) {
        console.log(response);
      });


      function cardGenerator() {
        imgSrc = "";
        var image = $("<img>").classList.add('gameImg');
        image.addClass("src", imgSrc);

        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
      }
 
=======
>>>>>>> ff6bc34f70af9ad5da3b3a3b24ed7f151192091e
