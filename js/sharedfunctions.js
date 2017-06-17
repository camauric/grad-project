

/**
 * returns total number of questions in qaData
 * @return {[integer]} [number of total question in data file qs_and_as.json]
 */
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



/**
 * removes punctuation from inputString
 * @param  {[string]} inputString [a string]
 * @return {[string]}             [string without punctuation or special chareacters, only alphanumeric characters]
 */
var removePunctuation = function(inputString){
   //console.log("removed special charaters" + inputString.replace(/[^a-z0-9\s]/gi, ''));
   return inputString.replace(/[^a-z0-9\s]/gi, ' ');


};


/**
 * print matrix to console for developemnt purposes
 * @param  {[two dimensional array]} matrix [description]
 *
 */
var logMatrix = function(matrix){
  //console.log("MATRIX : ")
  arrText = ' ';
  for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                arrText+=matrix[i][j]+' ';
            }
            console.log(arrText);
            arrText='';
        }

};

/**
 * returns an array with the amount of question for each answer in the data array
 * @return {[array]} [array of integers of the number of questions for each answer]
 */
var questionsInRow = function(){
  var questionRowTotals = [];
  for(var i = 0; i < qaData.length; i++){

    questionRowTotals.push([qaData[i]['questions'].length, i]);

  }
  //console.log("array of question row totals : " + questionRowTotals);
  return questionRowTotals;

};

/**
 * sums the values in an array
 * @param  {[array]}    inputArray  [array of values]
 * @return {[integer]}  total       [sum of array values]
 */
var arraySum = function(inputArray){
  var total = 0;
  for(var i in inputArray) { total += inputArray[i]; }
  return total;

};

/**
 * takes in an array and returns the highes value
 * @param  {[array]} inputArray   [array of values]
 * @return {[integer]}            [maximum value in array]
 */
var getMax = function(inputArray){

   return Math.max.apply(Math, inputArray);
};


/**
 * fill array of a set size with 0s
 * @param  {[integer]} size   [size of array to be filled]
 * @return {[array]}          [array of size initialized with 0s]
 */
var fillArray = function(size){

  return new Array(size).fill(0);

};

/**
 * returns array of all questions
 * @return {[array]} questionsArray [array of all questions in qs_and_as.js]
 */
var buildQuestionsArray = function(){
  var questionsArray = [];
  for(var i = 0; i < qaData.length; ++i){

    $.each(qaData[i]['questions'], function(key, value) {
      //console.log('KEY ==> ' + key );

        questionsArray.push([value, i]);

    });
  }
   //console.log("Questions Array : " + questionsArray)
  return questionsArray;
};


