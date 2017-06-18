var getTopThreeQuestions = function(consineTotalsArray, questionsArray){
  var tempArray = consineTotalsArray;
  var topThree = [];
  var max1 = max2 = max3 = max1Index = max2Index = max3Index = -1;

  console.log("COSINE TOTALS ARRAY: " + consineTotalsArray);
    for(var i = 0; i < consineTotalsArray.length; i++){
      if (consineTotalsArray[i] > max1) {
          max3 = max2;
          max3Index = max2Index;
          max2 = max1;
          max2Index = max1Index;
          max1 = consineTotalsArray[i];
          max1Index = i;
      } else if (consineTotalsArray[i] > max2) {
          if (max1 == consineTotalsArray[i]) {
              // Neglect as already present in max1
          } else {
              max3 = max2;
              max3Index = max2Index;
              max2 = consineTotalsArray[i];
              max2Index = i;
          }
      } else if (consineTotalsArray[i] > max3) {
          if (max1 == consineTotalsArray[i] || max2 == consineTotalsArray[i]) {
              // Neglect as already present in max1 OR max2
          } else {
              max3 = consineTotalsArray[i];
              max3Index = i;
          }
      }

  }

  //add topThree to array similarity score of 0 is not a match
  //and -1 is the default value when initialized.
 if(max1 !== 0 && max1 !== -1){
  topThree.push([max1,questionsArray[max1Index], max1Index]);
 }
 if(max2 !== 0 && max2 !== -1){
  topThree.push([max2,questionsArray[max2Index], max2Index]);
 }
 if(max3 !== 0 && max3 !== -1 ){
  topThree.push([max3,questionsArray[max3Index], max3Index]);
 }

 // console.log("Max1 = " + max1 + " , Max2 = " + max2 + " , Max3 = " + max3 + " " + typeof(topThree[2]));

 return topThree;

};

//ouput topthree to console
var logTopThree = function(inputString, topThree){
  console.log("TOP THREE : " + topThree);
  //ouput to console
  var output = 'USER : ' + inputString;
  output += "\n USER PROCESSED without Stopwords : " + getFinalTokens(inputString);
  output += "\n USER PROCESSES with stopwords : " + getFinalTokensWithStopWords(inputString);;
  $.each(topThree, function(i,value){
    if(value){

       output += "\n Q" + (i+1) + ": " + value[1] + " : " + value[0] + " index of question: " + value[2];

    }

  });
  console.log(output);
};
