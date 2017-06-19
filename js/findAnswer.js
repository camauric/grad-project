/**
findAnswer.js
author:Candace Maurice
**/
var findAnswer = function(topThree,questionAnswerArray){

	//topThree = [max(consineSimilarity value), question(string), questionIndex(indexofquestion), limitFlag, distanceflag]

	
  	var answer = index = indexOfAnswer = value = 0;
  	var answerArray = [];
  	var answerText = '';


	$.each(topThree, function(i, indexOfQuestion){
                         //answer text from qaData , 				cosinesimilarity,  indexofQuestion,  	  limit flag, 			distanceflag   
		answerArray.push([qaData[indexOfQuestion[1][1]]['answer'], indexOfQuestion[0], indexOfQuestion[1][1], indexOfQuestion[3], indexOfQuestion[4]]);

	});

	answerText = checkAnswerWeights(answerArray);
	return answerText;
};


var checkAnswerWeights = function(answerArray){

	var previousAnswerIndex = answerArray[0][2];//index of top answer
	var answerText = '';
	var answerTextArray = [];

	//check if top answer similarity is above .5
	//false push (extra text)
	if(answerArray[0][3] === false){
	
		answerText += "<h3 style='color:red'>I'm not sure I understand the question, can you please rephrase?</h3><h4><strong>Below are some answers that you may find useful anyway: </strong><h4>";
	}
	//push top answer on to answer Text array
	answerTextArray.push(answerArray[0][0]);

	for(var i = 1; i < answerArray.length; i++){
		//check if other answers are within 0.2 of top answer
		//check if answers are the same
		if(answerArray[i][4] == true && previousAnswerIndex !== answerArray[i][2]){
			answerTextArray.push(answerArray[i][0]);
		}

		previousAnswerIndex = answerArray[i][2];

	}

	$.each(answerTextArray,function(index,value){
 		answerText += value;
 	});

	return answerText;
	
};

// var checkAnswerWeights = function(answerArray){
// 	console.log("ANSWER ARRAY : " +  answerArray);
// 	//answerArray = ['answer text', similarity, index of answer]
// 	var answerTextArray = [];
// 	var weight = previousWeight = previousAnswerIndex = 0;
// 	var equal = false;
// 	var answerText = '';

// 	$.each(answerArray, function(i, value){

// 		weight = value[1];

// 		if((weight === previousWeight) && (value[2] !== previousAnswerIndex)){
// 			answerTextArray.push(value[0]);
// 		}
// 		//else if(weight > previousWeight && answerTextArray !== undefined && previousAnswerIndex !== 0){
// 		else if(value[2] === previousAnswerIndex){
// 			//do nothing
// 		}
// 		else{
// 			//insert answer berfore current answer
// 			answerTextArray.push(value[0]);
// 			//answerText = value[0];
// 		}

// 		previousWeight = weight;
// 		previousAnswerIndex = value[2];

// 	});

	
//  	$.each(answerTextArray,function(index,value){
//  		answerText += value;
//  	});

// 	return answerText;

// };
