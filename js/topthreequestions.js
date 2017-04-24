var getTopThreeQuestions = function(consineTotalsArray, questionsArray){
  var tempArray = consineTotalsArray;
  var topThree = [];

  //console.log("COSINE TOTALS ARRAY: " + consineTotalsArray);
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


    topThree.push([max, question, questionIndex]);
    //console.log("TOP THREE ARRAY" + topThree);
  }


 return topThree;

};

//ouput topthree to console
var logTopThree = function(inputString, topThree){
  //ouput to console
  var output = 'USER : ' + inputString;
  output += "\n USER PROCESSED without Stopwords : " + getFinalTokens(inputString);
  output += "\n USER PROCESSES with stopwords : " + getFinalTokensWithStopWords(inputString);;
  $.each(topThree, function(i,value){
    if(value[1] !== ''){

       output += "\n Q" + (i+1) + ": " + value[1] + " : " + value[0];

    }

  });
  console.log(output);
};
