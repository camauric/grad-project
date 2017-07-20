/**
 * find top three consine totals and creat an array with those values
 * @param  {[array]}                  cosineTotalsArray       [array of cosine totals ]
 * @param  {[two-dimensional array]}  questionsArray          [array of questions and corresponding answer index]
 * @return {[array]}                  topThree                [array of top three questions]
 */
var getTopThreeQuestions = function(cosineTotalsArray, questionsArray){
    var cosinesOnly = [];
    //create array of only cosine totals
    $.each(cosineTotalsArray, function(index, cos){
        cosinesOnly.push(cos[0]);
    });
    
    
    var newCosinesOnly = [];
    //sort consine totals
    newCosinesOnly = cosinesOnly.filter(function(x) {
          return true;
      }).sort(function(x,y) {
          return y - x;
      });
      newCosinesOnly = cosinesOnly.map([].pop, newCosinesOnly);

      newCosinesOnly.reverse();

      //console.log("Cosines Only Array REVERSED : " + newCosinesOnly);

      topThreeCosinesOnly = newCosinesOnly.slice(0, 3);

      //console.log("TOP THREE SCORES ONLY : " + topThreeCosinesOnly);
      //console.log("Cosines Only Array : " + cosinesOnly);

      var answerIndicies = [];
      var answerIndex = -1;
      var topThree = [];

      $.each(topThreeCosinesOnly, function(index, value){
          //get index of answer in cosineTotalsArray
          
          answerIndex = cosinesOnly.indexOf(value);
          
          
          //check if index already there accounting for duplicate values
          if(answerIndicies.indexOf(answerIndex) !== -1){
          //if the index is the same then get the next matching index
            answerIndex = cosinesOnly.indexOf(value,(answerIndex + 1));
          }

          //push index onto list of indicies
          answerIndicies.push(answerIndex);
          //console.log(answerIndex);

          //push on to top three
          topThree.push([cosineTotalsArray[answerIndex][0],questionsArray[answerIndex], answerIndex, cosineTotalsArray[answerIndex][1]]);
      });

      //console.log("TOP THREE : " + topThree + " type : " + Array.isArray(topThree));
      return topThree;
    
    
};

//ouput topthree to console
var logTopThree = function(inputString, topThree){
  //console.log("TOP THREE : " + topThree);
  //ouput to console
  var output = 'USER : ' + inputString;
  output += "\n USER PROCESSED without Stopwords : " + getFinalTokens(inputString);
  output += "\n USER PROCESSES with stopwords : " + getFinalTokensWithStopWords(inputString);

  $.each(topThree, function(i,value){
    
    if(value){

       output += "\n Q" + (i+1) + ": " + value[1] + " : " + value[0] + " index of question: " + value[2] + " limitFlag : " + value[3]+ " distanceFlag : " + value[4];

    }

  });
  console.log(output);
};
