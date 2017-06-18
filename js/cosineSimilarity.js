/***
* file:consineSimilarity
* author:Candace Maurice
* date:4/21/17
*/

var cosineSimilarity = function(inputArray, currentQuestionArray){
	var similarity = 0;
	var values = [];
	//console.log( "INPUT ARRAY :  " + inputArray);
	//console.log("currentQuestionArray : " + currentQuestionArray);
	value = getValues(inputArray,currentQuestionArray);
	var numerator = value[0];
	var denominator = value[1];

	if(denominator === 0){
		similarity = 0;
	}
	else{
		similarity = numerator/denominator;
	}

	return similarity;

};

var getValues = function(inputArray, currentQuestionArray){

	var sumA = sumB = answer = numerator = denominator = 0;

	for(var i = 0; i < inputArray.length; i++){

		numerator += inputArray[i] * currentQuestionArray[i];
		sumA += inputArray[i] * inputArray[i];
		sumB += currentQuestionArray[i] * currentQuestionArray[i];

	}

	denominator = Math.sqrt(sumA) * Math.sqrt(sumB);
	//console.log("NUMERATOR SUM : " + sum);
	answer = [numerator, denominator];
	//console.log("COSINE ANSWER : " + answer);
	return [numerator, denominator];
};

var getCosineTotals = function(inputArray, matrix){

	var cosineTotals = [];

	for(var i = 1; i < matrix.length; i++){

			cosineTotals.push(cosineSimilarity(inputArray, matrix[i]));
	}

	return cosineTotals;

};
