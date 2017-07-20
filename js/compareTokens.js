/**
 * compare tokens in array to matrix and
 * @param  {[array]} 					tokens 		[array integers 0s and 1s for vector of matched words]
 * @param  {[two-dimensional array]} 	matrix 		[two dimensional array each row represents a question with 0s and 1s for matched words]
 * @return {[array]}  					inputArray  [array of integers with 1s for matched terms]
 */
var compareTokens = function(tokens, matrix){
  var inputArray = fillArray(matrix[0].length);


	//1.compare tokens to matrix first row of words to get 1s and 0s for input
	$.each(tokens,function(i,token){
		var indexOfMatch = matrix[0].indexOf(token)
		if(indexOfMatch > -1){
			inputArray[indexOfMatch] = 1;
		};

	});
   //console.log("input array" + inputArray);
  return inputArray;
};
