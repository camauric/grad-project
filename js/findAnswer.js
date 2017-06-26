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
		console.log("Index of question : " + indexOfQuestion);
                         //answer text from qaData , 				cosinesimilarity,  indexofQuestion,  	  limit flag, 			distanceflag   
		answerArray.push([qaData[indexOfQuestion[1][1]]['answer'], indexOfQuestion[0], indexOfQuestion[1][1], indexOfQuestion[3], indexOfQuestion[4]]);

	});
	console.log("answer Array : " + answerArray);
	answerText = checkAnswerWeights(answerArray);
	return answerText;
};


var checkAnswerWeights = function(answerArray){

	var previousAnswerIndex = [];
	var answerText = '';
	var answerTextArray = [];

	//push top answer index on to previous answer index
	previousAnswerIndex.push(answerArray[0][2]) ;//index of top answer)

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
		if(answerArray[i][4] == true && previousAnswerIndex.indexOf(answerArray[i][2]) === -1){
			answerTextArray.push(answerArray[i][0]);
		}

		previousAnswerIndex .push(answerArray[i][2]);

	}

	//console.log("answer array : " + answerArray);
	
	$.each(answerTextArray,function(index,value){
 		answerText += value;
 	});

	return answerText;
	
};