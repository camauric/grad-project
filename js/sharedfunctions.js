//returns array of tokens after removal of stopwords
var removeStopWords = function(tokens){
//console.log("TOKENS BEFORE STOP WORDS" + tokens);
  $.grep(tokens, function(token , i ){

    $.each(stopwords, function(key, stopword){

      //console.log(stopword + " current stop word. This is the current token. " + token);

      if(token === stopword){

        var index = tokens.indexOf(stopword);

        tokens.splice(index, 1);
      }

    });

  });
  //console.log("TOKENS AFTER STOP WORDS" + tokens);
  return tokens;

};

//returns array of tokens that are run through word stemmer
var stemWords = function(tokensNoStopWords){

  $.each(tokensNoStopWords, function(index, token){

    //console.log("Current Token " + token);

    stemmedWord = stemmer(token);

    //console.log ("Current Stemmed Word " + stemmedWord);

    tokensNoStopWords[index]  = stemmedWord;

  });

  return tokensNoStopWords;

};

//returns total number of questions in qaData
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

//split string into tokens with a space as the parser
var getTokens = function(inputString){
  return inputString.split(' ');

};

//removes punctuation from inputString
var removePunctuation = function(inputString){
   //console.log("removed special charaters" + inputString.replace(/[^a-z0-9\s]/gi, ''));
   return inputString.replace(/[^a-z0-9\s]/gi, '');

};

//get tokens that have been run through all preprocessors
//input: string
//removes spaces before and after string
//removes punctuation from string
//splits string into tokens in an array
//removes stopwords from tokens array
//runs tokens through wordstemmer
//returns array of stemmed tokens
var getFinalTokens = function(question){
  //get tokens for current question
  question = $.trim(question);
  //remove punctuation and specila characters
  question = removePunctuation(question);
  //split into array of tokens
  currentTokens = getTokens(question);
  //remove stop words
  tokensNoStopWords = removeStopWords(currentTokens);
  //repalace stemwords
  tokensWordStemmer = stemWords(tokensNoStopWords);

  return tokensWordStemmer;
}

//input: string
//removes spaces before and after string
//removes punctuation from string
//splits string into tokens
//runs tokens through wordstemmer
//returns array of stemmed tokens
var getFinalTokensWithStopWords = function(question){
  //get tokens for current question
  question = $.trim(question);
  //remove punctuation and specila characters
  question = removePunctuation(question);
  //split into array of tokens
  currentTokens = getTokens(question);
  //remove stop words
  //tokensNoStopWords = removeStopWords(currentTokens);
  //repalace stemwords
  tokensWordStemmer = stemWords(currentTokens);

  return tokensWordStemmer;
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

//returns an array with the amount of question for each answer in the data array
var questionsInRow = function(){
  var questionRowTotals = [];
  for(var i = 0; i < qaData.length; i++){

    questionRowTotals.push(qaData[i]['questions'].length);

  }
  //console.log("array of question row totals : " + questionRowTotals);
  return questionRowTotals;

};

//sums the values in an array
var arraySum = function(inputArray){
  for(var i in inputArray) { total += inputArray[i]; }
  return total;

};

//takes in an array and returns the highes value
var getMax = function(inputArray){

   return Math.max.apply(Math, inputArray);
};

//fill array of a set size with 0s
var fillArray = function(size){

  return new Array(size).fill(0);

};

//returns array of all questions
var buildQuestionsArray = function(){
  var questionsArray = [];
  for(var i = 0; i < qaData.length; ++i){

    $.each(qaData[i]['questions'], function(key, value) {
      //console.log('KEY ==> ' + key );

        questionsArray.push(value);

    });
  }
  return questionsArray;
};

//ouput topthree to console
var logTopThree = function(inputString, topThree){
  //ouput to console
  var output = 'USER : ' + inputString;
  output += "\n USER PROCESSED without Stopwords : " + getFinalTokens(inputString);
  output += "\n USER PROCESSES with stopwords : " + getFinalTokensWithStopWords(inputString);;
  $.each(topThree, function(i,value){
    if(value[1] !== ''){

       output += "\n Q" + (i+1) + ": " + value[1] + " : " + value[0];

    }

  });
  console.log(output);
};
