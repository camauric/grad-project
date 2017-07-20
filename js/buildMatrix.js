/**
buildMatrix.js
author:Candace Maurice
date:March 21, 2017
**/

/**
 * builds a matrix of frequency vectors for word match
 * @return {[mulitdimensional array]}   matrix of frequency vectors
 */
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

        questTokens = getFinalTokens(question);

        //push tokens onto array
        for(var k in questTokens){

          allTokens.push(questTokens[k]);
        }


    });
      
    // add answers to matrix 
    //uncomment this section to add answers lines 36 -42
     /*answTokens = getFinalTokens(strip(qaData[i]['answer']));

         //push tokens onto array
       for(var k in answTokens){

         allTokens.push(answTokens[k]);
     }*/
    
  }
  //unique values as tokens
  //var uniqueTokens = allTokens.filter(function(elem, pos) {
  //  return allTokens.indexOf(elem) == pos;
  //});
  numTokens = Object.keys(allTokens).length;
  //console.log("UNIQUE TOKENS ++++++>>>>>" + numTokens);
  //console.log(uniqueTokens);
  var numberOfQuestions = getNumQuestions();
  //console.log("Number of Tokens : " + numTokens);
  var matrix = [];
  //push array of tokens on to matrix
  matrix.push(allTokens);

  //intialize array with row for each questions with 0s for all tokens
  while(numberOfQuestions > 0){
   matrix.push(fillArray(numTokens));
   numberOfQuestions--;
  }


   var questionCounter  = 0;
  for(var i = 0; i < qaData.length; i++){
    //loop through each question
    $.each(qaData[i]['questions'], function(key, question) {
         questionCounter++;
        //tokens for current question
        tokens = getFinalTokens(question);

        //console.log("tokens for current question" + tokens);

      $.each(tokens, function(k, token){
         var indexOfMatch = matrix[0].indexOf(token)
          if( indexOfMatch > -1){
           //item found
           matrix[questionCounter][indexOfMatch] = 1;
         }
      });

    });

  }
  //logMatrix(matrix);

return(matrix);

}; 

/**
 *strips html characters from string
 * @param {string} string with html characters
 * @return {string} string without html characters 
 **/
var strip = function(html)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
};