/***
* file:consineSimilarity
* author:Candace Maurice
* date:4/21/17
* todo: combine numerator and denominator functions no need to loop through
* the same array twice
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

	return [numerator, denominator];
};

// var getDenominator = function(inputArray, currentQuestionArray){
// 	//console.log( "INPUT ARRAY :  " + inputArray);
// 	//console.log("currentQuestionArray : " + currentQuestionArray);
//
// 	var sumA = sumB = answer = 0;
//
// 	for(var i = 0; i < inputArray.length; i++){
//
// 		sumA += inputArray[i] * inputArray[i];
// 		sumB += currentQuestionArray[i] * currentQuestionArray[i];
//
// 	}
// 	//console.log("SUM A = " + sumA + " SUM B = " + sumB);
// 	answer = Math.sqrt(sumA) * Math.sqrt(sumB);
//
//
// 	return answer;
//
// };

var getCosineTotals = function(inputArray, matrix){

	var cosineTotals = [];

	for(var i = 1; i < matrix.length; i++){

			cosineTotals.push(cosineSimilarity(inputArray, matrix[i]));
	}

	return cosineTotals;

};
