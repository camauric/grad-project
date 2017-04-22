var topThreeQuestions = function(inputString, questionsTotals, questionsArray){
  var tempArray = questionsTotals;
  var topThree = [];


  for(var i = 1; i < 4; i++){
    var max = getMax(tempArray);
    //console.log("MAX : " + max);
    if(max > 0){
      questionIndex = tempArray.indexOf(max);
      //console.log("questionIndex : " + questionIndex);
      tempArray.splice(questionIndex, 1);

      //need to get question out of QAdata array
      question = questionsArray[questionIndex];

    }
    else{
      question = '';
    }


    topThree.push([max, question]);
    //console.log("TOP THREE ARRAY" + topThree);
  }

 logTopThree(inputString,topThree);
 return topThree;

};
