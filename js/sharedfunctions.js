//remove stopwords function uses stopword
var removeStopWords = function(tokens){

  $.grep(tokens, function(token , i ){

    $.each(stopwords, function(key, stopword){

      //console.log(stopword + " current stop word. This is the current token. " + token);

      if(token === stopword){

        var index = tokens.indexOf(stopword);

        tokens.splice(index, 1);
      }

    });

  });

  return tokens;

};
//run tokens through word stemmer
var stemWords = function(tokensNoStopWords){

  $.each(tokensNoStopWords, function(index, token){

    //console.log("Current Token " + token);

    stemmedWord = stemmer(token);

    console.log ("Current Stemmed Word " + stemmedWord);

    tokensNoStopWords[index]  = stemmedWord;

  });

  return tokensNoStopWords;

};

//get total number of questions in qaData
var getNumQuestions = function(){

  var numQuestions = 0;

  for(var i = 0; i < qaData.length; ++i){

    $.each(qaData[i]['questions'], function(key, value) {
      //console.log('KEY ==> ' + key );

        numQuestions++;

    });
  }

  return numQuestions;
};

//split string into tokens
var getTokens = function(inputString){
  return inputString.split(' ');

};
//remove any characters that aren't numbers or letters
var cleanCode = function(input){
  return input.replace(/[^A-Za-z0-9_]/g,"");

};

//get tokens that have been run through all preprocessors
var getFinalTokens = function(question){
  //get tokens for current question
  question = $.trim(question);
  //split into array of tokens
  currentTokens = getTokens(question);
  //remove stop words
  tokensNoStopWords = removeStopWords(currentTokens);
  //repalace stemwords
  //tokensWordStemmer = stemWords(tokensNoStopWords);

  return tokensNoStopWords;
}
//print matrix to console
var logMatrix = function(matrix){
  console.log("MATRIX : ")
  arrText = ' ';
  for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                arrText+=matrix[i][j]+' ';
            }
            console.log(arrText);
            arrText='';
        }

};

var questionsInRow = function(){
  var questionRowTotals = [];
  for(var i = 0; i < qaData.length; i++){

    questionRowTotals.push(qaData[i]['questions'].length);

  }
  //console.log("array of question row totals : " + questionRowTotals);
  return questionRowTotals;

};

var arraySum = function(inputArray){
  for(var i in inputArray) { total += inputArray[i]; }
  return total;

};
