// require("dotenv").config();
// const apikey = process.env.API_KEY;
// var str = "";
// var arrBlastro = [];
var checklistArr = [];

$(document).ready(function () {
  $("#submitBtn").on("click", function () {
    str = $("#wordguess").val();
    console.log(str);
    notFound();
    // addToCorrectWord();
    // wordCheck();
    $("#wordguess").empty();
  })

  $("#clearBtn").on("click", function () {
    $("#wordguess").empty();
  })

  $("#doneBtn").on("click", function () {
    //TODO: change for heroku deployment
    // location.href = "http://localhost:8080/done";
    postScore();
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
      return addToCorrectWord();
      //  validWord();
      
    }

  }).catch(function (error) {
    return alert("Sorry, " + str + " not in this dictionary.");
  })
  // .then(addToCorrectWord());

  
}

function addToCorrectWord(){
  var ul = $("#list");
  var li = $("<li>").text(str);
  $(ul).append(li);
  alert("Correct!")
};

function notFound(){
//every time you submit a word you check checklistArr the array
if (checklistArr.includes(str) === false) {
checklistArr.push(str);
console.log(checklistArr);
// addToCorrectWord();
wordCheck();
// addToCorrectWord();

} else {
  return alert("Already found");
};

};

function postScore(){
  $("#currentScore").empty();
  $("#list").empty();
  var scoreCount = checklistArr.length;
  var scoreDiv = $("#currentScore")
  var score = $("<span>").text(scoreCount);

  scoreDiv.append(score)

  console.log("done")
  
  // $.post('/api/score', checklistArr.length)
  // .then(response => {
  //   console.log(response)
  //    req.body = {
  //      score: scoreCount,
  //      LettersetId: 1,
  //      UserId: 1
  //    }
  //   db.Score.create(req.body)
  //   window.location = "/done"
  // })
  // .catch(error => console.log(error))
 };
// array length will be the score count
// post score number will set score for user in our database 
// on click "done" will render the done page
// get score from database to render data on page
// .get Email, Score, and letterset.