/**
findAnswer.js
author:Candace Maurice
**/
var findAnswer = function(topThree){

	//topThree = [max(consineSimilarity value), question(string), questionIndex(indexofquestion)]
	var answerFound = false;
  	var answer = 0;
  	var answerArray = [ ];
  	var answerText = '';


	$.each(topThree, function(i, indexOfQuestion){

		//get number of questions in row in for answer
	  	var questionTotalsArray = questionsInRow();

	  	answerFound = false;

	  	console.log("TOPTHREE : " + topThree);

	  	answer = indexOfQuestion[2];

		$.each(questionTotalsArray,function(i, value){

			console.log("QUESTION INDEX ANSWER : " + answer + " VALUE : " + value + " ANSWER FOUND : " + answerFound);

			 //console.log('answer value : ' + answer + " value of i : " + i);
		 	//if index of answer is less than or equal to the number
			//of questions in the row then the answer is in that row
			//set answer found to true
			  if( answer <= value && !answerFound){
					answerArray.push([qaData[i]['answer'], indexOfQuestion[0], i]);
					answerFound = true;
				}
			//else subtract the row total from answer an keep comparing
				else if(answer > value && !answerFound){
					answer = answer - value;

				}
				// else{
				// 	answerText = "houston we have a problem!"
				// }
		});
		//console.log("ANSWER TEXT : " + answerText);

	});
	console.log("ANSWER ARRAY : " + answerArray);
	answerText = checkAnswerWeights(answerArray);
	return answerText;

	// //console.log(inputArray);
	// //2.add answer to the matrix (is this necessary?)

	// //3.find question with the highest sum of 1s
	// //traverse matrix to compare values with input string
	// var sum = 0; 													//sum of 1s in question row
	// var largest = 0; 												//value of highest sum of row
	// var answer = 0; 												//index of answer in qaData array aka i value
	// var previous = 0; 												//sum of previous row
 //  	//var questionIndex = 1;
	// var answerText = '';											//answer that gets returned
	// var answerFound = false;										//answer foudn flag
	// var questionRowSum = [matrix[0].length]; 						//array for rowTotals;

	// //console.log("input array : " + JSON.parse("[" + inputArray + "]"));


	// //traverse matrix array to find sum  of row totals
	// for(var i = 1; i < matrix.length; i++){
	// 	sum = 0;
	// 	for(var j = 0; j < matrix[i].length; j++){

	// 			sum += matrix[i][j] * inputArray[j];

	// 	}
	// 	//store largest total as
	// 	if(sum >= largest){
	// 				answer = i;
	// 				largest = sum;
	// 	}
	// 	//console.log("current row sum outside of loop: " + sum);
	// 	questionRowSum[i-1] = sum ;
	// }
	// //if no answer found sum = 0 and largest = 0
	// if(sum === 0 && largest === 0){
	// 	//console.log("NO ANSWER FOUND");
	// 	answerText = "answer not found";
	// 	answerFound = true;
	// }
	// //output question row totals in console
	// console.log("question row totals : " + JSON.parse("[" + questionRowSum + "]"));

	// //4. return corresponding answer via question index#
	// //if answer is an integer then an answer was found
 // if($.isNumeric(answer)){

	// //get number of questions in row in for answer
 //  var questionTotalsArray = questionsInRow();

 //  $.each(questionTotalsArray,function(i, value){
 // 	  //console.log('answer value : ' + answer + " value of i : " + i);
	//  	//if index of answer is less than or equal to the number
	// 	//of questions in the row then the answer is in that row
	// 	//set answer found to true
 // 	  if(answer <= value && !answerFound){
 // 			answerText = qaData[i]['answer'];
 // 			answerFound = true;
	// 		//break;
 // 		}
	// 	//else subtract the row total from answer an keep comparing
 // 		else if(!answerFound && answer > value){
 // 			answer = answer - value;

 // 		}
 //  });

 // }
 // return [answerText, questionRowSum];
};

var checkAnswerWeights = function(answerArray){
	//answerArray = ['answer text', similarity, index of answer]
	var answerTextArray = [];
	var weight = previousWeight = previousAnswerIndex = 0;
	var equal = false;

	$.each(answerArray, function(i, value){

		weight = value[1];

		if((weight === previousWeight) && (value[2] !== previousAnswerIndex)){
			answerText += value[0];
		}
		else if(weight > previousWeight){
			answerText = value[0];
		}

		previousWeight = weight;
		previousAnswerIndex = value[2];

	});

	return answerText;

};
