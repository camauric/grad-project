/**
checkSimilarity.js
author:Candace Maurice
date:June 10, 2017
**/

var checkSimilarity = function(value){

	var LIMIT = 0.5;
	
	return(value >= LIMIT);

};

var similarityDistance = function(topThree){

	var topAnswer = topThree[0][0];
	var newTopThree = [];

	//push top answer
	newTopThree.push([topThree[0][0],topThree[0][1],topThree[0][2],topThree[0][3],true]);

	for(var i = 1; i < topThree.length; i++){
		if((topAnswer - topThree[i][0]) <= 0.2){
			console.log("distance flag = " + true);
			newTopThree.push([topThree[i][0],topThree[i][1],topThree[i][2],topThree[i][3],true]);
		}else{
			console.log("distance flag = " + false);
			newTopThree.push([topThree[i][0],topThree[i][1],topThree[i][2],topThree[i][3],false]);
		}
	}
	//console.log("New Top Three : " + newTopThree);
	return newTopThree;
};