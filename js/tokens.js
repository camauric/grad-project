/****
* file: getTokens.js
* author: Candace Maurice
* date: March 20, 2017
*
******/

/**
 * returns array of tokens after removal of stopwords
 * @param  {[array]} tokens 	[array of tokens]
 * @return {[array]} tokens     [array of tokens without stopwords]
 */
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

/**
 * returns array of tokens that are run through word stemmer
 * @param  {[array]} tokensNoStopWords [description]
 * @return {[array]} tokensNoStopWords                 [description]
 */
var stemWords = function(tokensNoStopWords){

	var stemmedTokens = tokensNoStopWords;

  $.each(tokensNoStopWords, function(index, token){

    //console.log("Current Token " + token);

    stemmedWord = stemmer(token);

    //console.log ("Current Stemmed Word " + stemmedWord);

    stemmedTokens[index]  = stemmedWord;

  });

  return stemmedTokens;

};

/**
 * split string into tokens with a space as the parser
 * @param  {[string]} inputString 	[input string]
 * @return {[array]}             	[array of tokens split by empty string]
 */
var getTokens = function(inputString){

  return inputString.split(' ');

};



/**
* get tokens that have been run through all preprocessors
* 1. removes spaces before and after string
* 2. removes punctuation from string
* 3. splits string into tokens in an array
* 4. removes stopwords from tokens array | see file:stopwords.js
* 5. runs tokens through wordstemmer  | see file:wordstemmer.js
*
* @param  {[string]} question 					[question]
* @return {[array]}  tokensWordStemmer       	[array of tokens after being stemmed]
*/
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
  tokens = stemWords(tokensNoStopWords);

  return tokens;
}

/**
* get tokens that have been run through all preprocessors
* 1. removes spaces before and after string
* 2. removes punctuation from string
* 3. splits string into tokens in an array
* 4. runs tokens through wordstemmer  | see file:wordstemmer.js
*
* @param  {[string]} question 					[question]
* @return {[array]}  tokensWordStemmer       	[array of tokens after being stemmed]
*/
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
