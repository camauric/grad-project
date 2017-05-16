var compareTokens = function(tokens, matrix){
  var inputArray = fillArray(matrix[0].length);


	//1.compare tokens to matrix first row of words to get 1s and 0s for input
	$.each(tokens,function(i,token){
		var indexOfMatch = matrix[0].indexOf(token)
		if(indexOfMatch > -1){
			inputArray[indexOfMatch] = 1;
		};

	});
  return inputArray;
};
