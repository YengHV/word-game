// require("dotenv").config();
// const apikey = process.env.API_KEY;
// var str = "";
// var arrBlastro = [];
var checklistArr = [];

$(document).ready(function () {
  $("#submitBtn").on("click", function () {
    str = $("#wordguess").val();
    console.log(str);
    alreadyFound();
    // addToCorrectWord();
    wordCheck();
    $("#wordguess").empty();
  })

  $("#clearBtn").on("click", function () {
    $("#wordguess").empty();
  })

  $("#doneBtn").on("click", function () {
    //TODO: change for heroku deployment
    location.href = "http://localhost:8080/done";
  });

  $("#blastro").on("click", function () {
    $("#currentLetterset").empty();
    $("#list").empty();
    $("#charDiv").empty();
    var lettersetOne = $("#currentLetterset");
    var lettersetDiv = $("<span>").text("blastro");
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

    }
    createWordGuess();
      function createWordGuess() {


        $("#btnIdb").on("click", function () {
          console.log("#btnIdb");
          $("#wordguess").append("b");
        })
        $("#btnIdl").on("click", function () {
          console.log("#btnIdl");
          $("#wordguess").append("l");
        })
        $("#btnIda").on("click", function () {
          console.log("#btnIda");
          $("#wordguess").append("a");
        })
        $("#btnIds").on("click", function () {
          console.log("#btnIds");
          $("#wordguess").append("s");
        })
        $("#btnIdt").on("click", function () {
          console.log("#btnIdt");
          $("#wordguess").append("t");
        })
        $("#btnIdr").on("click", function () {
          console.log("#btnIdr");
          $("#wordguess").append("r");
        })
        $("#btnIdo").on("click", function () {
          console.log("#btnIdo");
          $("#wordguess").append("o");
        })

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
    var currentWord = (response[0].meta.id);
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

/* Function order of execution

function validWord({
  add currentWord to div
  display div to wordgame.html using jQuery
  TODO: dynamically create ul, li list of valid words

*/

function addToCorrectWord(){
  var ul = $("#list");
  var li = $("<li>").text(str);
  $(ul).append(li);
};

function alreadyFound(){
//every time you submit a word you check checklistArr the array
if (checklistArr.includes(str) === false) {
checklistArr.push(str);
console.log(checklistArr.includes(str));
addToCorrectWord();
} else {
  return alert("Already found");
};

};