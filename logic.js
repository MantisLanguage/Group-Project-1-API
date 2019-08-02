
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
 