/***
* file:consineSimilarity
* author:Candace Maurice
* date:4/21/17
*/

/**
 * calculates the cosine similarity score of two vectors, user input an current matrix question vector
 * @param  {[array]} 					inpputArray 				user input frequency vector
 * @param  {[array]} 					currentQuestionArray 		current frequency vector of the matrix
 * @return {[array]}  												simlarity score and similarity limitFlag values
 */
var cosineSimilarity = function(inputArray, currentQuestionArray){
	var similarity = 0;
	var limitFlag = false;
	var values = [];
	
	value = getValues(inputArray,currentQuestionArray);
	var numerator = value[0];
	var denominator = value[1];

	if(denominator === 0){
		similarity = 0;
	}
	else{
		similarity = numerator/denominator;
	}

	limitFlag = checkSimilarity(similarity);
	return [similarity, limitFlag];

};

/**
 * calculates the numerator(dot product) and the denominator (magnitude) for the cosine similarity score
 * @param  {[array]} 					inpputArray 				user input frequency vector
 * @param  {[array]} 					currentQuestionArray 		current frequency vector of the matrix
 * @return {[array]}  												dot product and maginitude values
 */
var getValues = function(inputArray, currentQuestionArray){

	var sumA = sumB = answer = numerator = denominator = 0;

	for(var i = 0; i < inputArray.length; i++){

		numerator += inputArray[i] * currentQuestionArray[i];
		sumA += inputArray[i] * inputArray[i];
		sumB += currentQuestionArray[i] * currentQuestionArray[i];

	}

	denominator = Math.sqrt(sumA) * Math.sqrt(sumB);
	return [numerator, denominator];
};
/**
 * calculates the cosine similarity score of two vectors, user input an current matrix question vector
 * @param  {[array]} 					inpputArray 	user input frequency vector
 * @param  {[multidimensional array]} 	matrix	 		multidimensional array of all questions frequency vectors
 * @return {[array]}  									simlarity score and similarity limitFlag values for all questions in matrix
 */
var getCosineTotals = function(inputArray, matrix){

	var cosineTotals = [];

	for(var i = 1; i < matrix.length; i++){

			cosineTotals.push(cosineSimilarity(inputArray, matrix[i]));
	}
	
	return cosineTotals;

};
