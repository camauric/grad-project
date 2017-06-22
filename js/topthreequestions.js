var getTopThreeQuestions = function(cosineTotalsArray, questionsArray){
  var tempArray = cosineTotalsArray;
  var topThree = [];
  var max1Arr= new Array(2); 
  var max2Arr = new Array(2); 
  var max3Arr = new Array(2);
  var max1 = max2 = max3 = -1; 
  var max1Index = max2Index = max3Index = -1;
  var limitFlag;

  //console.log("COSINE TOTALS ARRAY: " + cosineTotalsArray);
    for(var i = 0; i < cosineTotalsArray.length; i++){
      if (cosineTotalsArray[i][0] > max1) {
          max3 = max2;
          max3Index = max2Index;
          max2 = max1;
          max2Index = max1Index;
          max1 = cosineTotalsArray[i][0];
          max1Index = i;
          max1Arr[0] = cosineTotalsArray[i][0];
          max1Arr[1] = cosineTotalsArray[i][1];
      } else if (cosineTotalsArray[i][0] > max2) {
          if (max1 === cosineTotalsArray[i][0]) {
              // Neglect as already present in max1
          } else {
              max3 = max2;
              max3Index = max2Index;
              max2 = cosineTotalsArray[i][0];
              max2Index = i;
              max2Arr[0] = cosineTotalsArray[i][0];
              max2Arr[1] = cosineTotalsArray[i][1];
          }
      } else if (cosineTotalsArray[i][0] > max3) {
          if (max1 === cosineTotalsArray[i][0] || max2 === cosineTotalsArray[i][0]) {
              // Neglect as already present in max1 OR max2
          } else {
              max3 = cosineTotalsArray[i][0];
              max3Index = i;
              max3Arr[0] = cosineTotalsArray[i][0];
              max3Arr[1] = cosineTotalsArray[i][1];
          }
      }

  }
  console.log("Max1 Array : "  + max1Arr + "Max2 Array : "  + max2Arr + "Max3 Array : "  + max3Arr);
  //add topThree to array similarity score of 0 is not a match
  //and -1 is the default value when initialized.
   if(max1 !== 0 && max1Index !== -1){
    console.log("here");
    topThree.push([max1Arr[0],questionsArray[max1Index], max1Index, max1Arr[1]]);
   }
   if(max2 !== 0 && max2Index !== -1){
    console.log("there");
    topThree.push([max2Arr[0],questionsArray[max2Index], max2Index, max2Arr[1]]);
   }
   if(max3 !== 0 && max3Index !== -1 ){
    console.log("everywhere");
    topThree.push([max3Arr[0],questionsArray[max3Index], max3Index, max3Arr[1]]);
   }
   console.log("TOP THREE >>>>" + topThree)
   //sort top 3
   topThree = topThree.sort(function(a,b) {
        return a[0] - b[0];
      });
   //sort descending
   topThree.reverse();

   topThree = similarityDistance(topThree);

   return topThree;

};



//ouput topthree to console
var logTopThree = function(inputString, topThree){
  //console.log("TOP THREE : " + topThree);
  //ouput to console
  var output = 'USER : ' + inputString;
  output += "\n USER PROCESSED without Stopwords : " + getFinalTokens(inputString);
  output += "\n USER PROCESSES with stopwords : " + getFinalTokensWithStopWords(inputString);;
  $.each(topThree, function(i,value){
    if(value){

       output += "\n Q" + (i+1) + ": " + value[1] + " : " + value[0] + " index of question: " + value[2] + " limitFlag : " + value[3]+ " distanceFlag : " + value[4];

    }

  });
  console.log(output);
};
