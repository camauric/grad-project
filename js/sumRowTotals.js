/**
 * file:sumRowTotals.js
 * author:Candace Maurice
 * date: 4/21/2017
 */
 
/**
 * traverse matrix array to find sum  of row totals
 * @param  {[array]} 					inputArray 				[array integers 0s and 1s for vector of matched words]
 * @param  {[two-dimensional array]} 	matrix 					[two dimensional array each row represents a question with 0s and 1s for matched words]
 * @return {[array]}  					questionsRowSumTotals  	[array of integers for sum of rows in the matrix]
 */
var sumRowTotals = function(inputArray, matrix){

	questionsRowSumTotals = [];

	//traverse matrix array to find sum  of row totals
	for(var i = 1; i < matrix.length; i++){
		sum = 0;
		for(var j = 0; j < matrix[i].length; j++){

				sum += matrix[i][j] * inputArray[j];

		}

		questionsRowSumTotals.push(sum) ;
	}

	return questionsRowSumTotals;

};