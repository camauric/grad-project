/**
 * file:sumRowTotals.js
 * author:Candace Maurice
 * date: 4/21/2017
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