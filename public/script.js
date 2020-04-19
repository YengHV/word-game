//require("dotenv").config();
//const apikey = process.env.API_KEY;
var str = "";
// var arrBlastro = [];

$(document).ready(function () {
  $("#submitBtn").on("click", function () {
    str = $("#wordguess").val();
    console.log(str);
    wordCheck();
  })

  $("#blastro").on("click", function () {
      $("#currentLetterset").empty();
      var lettersetOne = $("#currentLetterset");
      var lettersetDiv = $("<span>").text("blastro");
      // var btnId = "btnId" + 0;
      $(lettersetOne).append(lettersetDiv);
      // dynamically create Bootstrap buttons using jQuery
      // iterate around the letterset
        var blastro = "blastro";
      for (var i = 0; i < blastro.length; i++) {
        var arrBlastro = blastro[i]; 
        console.log(arrBlastro);
        var charDiv = $("#charDiv");
        var charBtn = $("<button>").attr("id", "btnId" + arrBlastro).attr("type", "button").attr("class", "btn btn-secondary").text(arrBlastro);
        $(charDiv).append(charBtn);

        createWordGuess();
        function createWordGuess(){
          $("#btnId" + arrBlastro[i]).on("click", function () {
            console.log("#btnId" + arrBlastro);
          })
        }
      }
  });
//end of document ready function  
});

function wordCheck() {
  //queryURL="https://dictionaryapi.com/api/v3/references/collegiate/json/" + str + "?key=" + apikey
  queryURL = "https://dictionaryapi.com/api/v3/references/collegiate/json/" + str + "?key=fba3eaa7-5e9a-4a87-9890-15a9eb49b6bc";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    let currentWord = (response[0].meta.id);

    // create .includes function to match the letterset to currentword
    //
    if (currentWord) {
      return alert("Correct!");
      //  validWord();
    }

  }).catch(function (error) {
    return alert("Sorry, " + str + " not in this dictionary.");
  })
}




// function validWord({
//   // add currentWord to div
//   // display div to wordgame.html using jQuery
//   // TODO: dynamically create ul, li list of valid words

// })