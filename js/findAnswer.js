/**
findAnswer.js
author:Candace Maurice
**/
var findAnswer = function(topThree,questionAnswerArray){

	//topThree = [max(consineSimilarity value), question(string), questionIndex(indexofquestion)]

	
  	var answer = index = indexOfAnswer = value = 0;
  	var answerArray = [];
  	var answerText = '';


	$.each(topThree, function(i, indexOfQuestion){

		answerArray.push([qaData[indexOfQuestion[1][1]]['answer'], indexOfQuestion[0], indexOfQuestion[1][1]]);

	});

	answerText = checkAnswerWeights(answerArray);
	return answerText;
};

var checkAnswerWeights = function(answerArray){
	console.log("ANSWER ARRAY : " +  answerArray);
	//answerArray = ['answer text', similarity, index of answer]
	var answerTextArray = [];
	var weight = previousWeight = previousAnswerIndex = 0;
	var equal = false;
	var answerText = '';

	$.each(answerArray, function(i, value){

		weight = value[1];

		if((weight === previousWeight) && (value[2] !== previousAnswerIndex)){
			answerTextArray.push(value[0]);
		}
		//else if(weight > previousWeight && answerTextArray !== undefined && previousAnswerIndex !== 0){
		else if(value[2] === previousAnswerIndex){
			//do nothing
		}
		else{
			//insert answer berfore current answer
			answerTextArray.push(value[0]);
			//answerText = value[0];
		}

		previousWeight = weight;
		previousAnswerIndex = value[2];

	});

	
 	$.each(answerTextArray,function(index,value){
 		answerText += value;
 	});

	return answerText;

};
