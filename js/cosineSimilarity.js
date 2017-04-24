/***
* file:consineSimilarity
* author:Candace Maurice
* date:4/21/17
*/

var cosineSimilarity = function(inputArray, currentQuestionArray){

	console.log( "INPUT ARRAY :  " + inputArray);
	console.log("currentQuestionArray : " + currentQuestionArray);

	var numerator = getNumerator(inputArray, currentQuestionArray);
	var denominator = getDenominator(inputArray, currentQuestionArray);
	var similarity = numerator/denominator;

	return similarity;

};

var getNumerator = function(inputArray, currentQuestionArray){

	var sum = 0;

	for(var i =0; i < inputArray.length; i++){

		sum += inputArray[i] * currentQuestionArray[i];

	}
	console.log("NUMERATOR SUM : " + sum);
	return sum;
};

var getDenominator = function(inputArray, currentQuestionArray){
	console.log( "INPUT ARRAY :  " + inputArray);
	console.log("currentQuestionArray : " + currentQuestionArray);

	var sumA = sumB = answer = 0;

	for(var i = 0; i < inputArray.length; i++){

		sumA += inputArray[i] * inputArray[i];
		sumB += currentQuestionArray[i] * currentQuestionArray[i];

	}
	console.log("SUM A = " + sumA + " SUM B = " + sumB);
	answer = Math.sqrt(sumA) * Math.sqrt(sumB);


	return answer;

};

var getCosineTotals = function(inputArray, matrix){

	var cosineTotals = [];

	for(var i = 1; i < matrix.length; i++){

			cosineTotals.push(cosineSimilarity(inputArray, matrix[i]));
	}

	return cosineTotals;

};