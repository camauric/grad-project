/**
findAnswer.js
author:Candace Maurice
**/
var findAnswer = function(tokens, matrix){
	//console.log("here");
	var inputArray = new Array(matrix[0].length).fill(0);


	//1.compare tokens to matrix first row of words to get 1s and 0s for input
	$.each(tokens,function(i,token){
		var indexOfMatch = matrix[0].indexOf(token)
		if(indexOfMatch > -1){
			inputArray[indexOfMatch] = 1;
		};

	});

	//console.log(inputArray);
	//2.add answer to the matrix (is this necessary?)
	//3.find question with the highest sum of 1s
	//traverse matrix to compare values with input string
	var sum = 0; 			//sum of 1s in question row
	var largest = 0; 	//value of highest sum of row
	var answer = 0; 	//index of answer in qaData array aka i value
	var previous = 0; 		//sum of previous row
  var questionIndex = 1;
	var answerText = '';
	var answerFound = false;
	var questionRowSum = [matrix[0].length]; //array for rowTotals;

	//console.log("input array : " + JSON.parse("[" + inputArray + "]"));
	//traverse matrix array to find sum  of row totals
	for(var i = 1; i < matrix.length; i++){
		sum = 0;
		for(var j = 0; j < matrix[i].length; j++){
			if (matrix[i][j] === inputArray[j]){
				sum += matrix[i][j];

			}


		}
		if(sum >= largest){
					questionIndex = i;
					largest = sum;
					answer = questionIndex;

		}
		//console.log("current row sum outside of loop: " + sum);
		questionRowSum[i-1] = sum ;
	}
	//if no answer found sum = 0 and largest 0
	if(sum === 0 && largest === 0){
		//console.log("NO ANSWER FOUND");
		answerText = "answer not found";
		answerFound = true;
	}
	//4. return corresponding answer via question index#
	//if answer is an integer then an answer was found
//console.log('answer value before loop : ' + answer);
console.log("question row totals : " + JSON.parse("[" + questionRowSum + "]"));
//var inputTotal = arraySum(inputArray);

 if($.isNumeric(answer)){

  var questionTotalsArray = questionsInRow();
  $.each(questionTotalsArray,function(i, value){
 	 //console.log('answer value : ' + answer + " value of i : " + i);

 	  if(answer <= value && !answerFound){
 			answerText = qaData[i]['answer'];
 			answerFound = true;
 		}
 		else if(!answerFound && answer > value){
 			answer = answer - value;

 		}
  });
  //console.log("answer : " + answer);
  //answer = qaData[answer]['answer'];
 }
 return answerText;
};
