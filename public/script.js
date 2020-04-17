//require("dotenv").config();
//const apikey = process.env.API_KEY;
var str = "";
$(document).ready(function () {
  $("#submitBtn").on("click", function () {
    str = $("#wordguess").val();
    console.log(str);
    wordCheck();
  })
  
//end of document ready function  
});

function wordCheck(){
  //queryURL="https://dictionaryapi.com/api/v3/references/collegiate/json/" + str + "?key=" + apikey
  queryURL="https://dictionaryapi.com/api/v3/references/collegiate/json/" + str + "?key=fba3eaa7-5e9a-4a87-9890-15a9eb49b6bc"
  $.ajax ({
    url: queryURL,
    method: "GET",
  }).then(function(response){
    let currentWord= (response[0].meta.id);
    
    // create .includes function to match the letterset to currentword
    //
     if (currentWord){
       return alert("Correct!");
      //  validWord();
     } 
  
  }).catch (function (error){
    return alert("Sorry, "+ str + " not in this dictionary.");
  })
}

// function validWord({
//   // add currentWord to div
//   // display div to wordgame.html using jQuery
//   // TODO: dynamically create ul, li list of valid words

// })