/**
buildMatrix.js
author:Candace Maurice
date:March 21, 2017
**/
var buildMatrix = function(){

  //get qs_and_as array

  //build a matrix of all questions split into tokens
 var allTokens = new Array();
 var currentTokens = [];
 var numQuestions = 0;
 var numTokens = 0;

 //travers data array of questions and answers
 for(var i = 0; i < qaData.length; ++i){
   //traverse array of questions
   $.each(qaData[i]['questions'], function(key, question) {

        numQuestions ++;

        tokens = getFinalTokens(question);

        //push tokens onto array and count number of tokens for use later
        for(var k in tokens){

          allTokens.push(tokens[k]);
        }


    });
  }
  //unique values as tokens
  var uniqueTokens = allTokens.filter(function(elem, pos) {
    return allTokens.indexOf(elem) == pos;
  });
  numTokens = Object.keys(uniqueTokens).length;
  //console.log("UNIQUE TOKENS ++++++>>>>>" + numTokens);
  //console.log(uniqueTokens);
  var numberOfQuestions = getNumQuestions();
  //console.log("Number of Tokens : " + numTokens);
  var matrix = [];
  //push array of tokens on to matrix
  matrix.push(uniqueTokens);

  //intialize array with row for each questions with 0s for all tokens
  while(numberOfQuestions > 0){
   matrix.push(new Array(numTokens).fill(0));
   numberOfQuestions--;
  }

  //TODO:
  //fill matrix with with 1s for questions that match the word in the matrix[0] row
  //need to compare question tokens to all tokens....tokens should be unique
  //traverse data array to populate matix with 1s
   var questionCounter  = 0;
  for(var i = 0; i < qaData.length; i++){
    //loop through each question
    $.each(qaData[i]['questions'], function(key, question) {
         questionCounter++;
        //tokens for current question
        tokens = getFinalTokens(question);

        console.log("tokens for current question" + tokens);

      $.each(tokens, function(k, token){
         var indexOfMatch = matrix[0].indexOf(token)
          if( indexOfMatch > -1){
           //item found
           matrix[questionCounter][indexOfMatch] = 1;
         }
      });

    });

  }
  logMatrix(matrix);

return(matrix);

}; //end document.ready()function