$(document).ready(function(){

	//1.build intial matrix
	var matrix = buildMatrix();
	//build array of all questions with corresponding answer index
	var questionAnswerArray = buildQuestionsArray();
	//console.log(matrix);

  //2.get search string (user question)

  //searchstring variable
	var searchString = answer =  '';


	//1. get question if enter button pressed
	$('#srch_term').keydown(function(e){

		if(e.keyCode === 13){

			$('#search_button').click();
		}
	});

	//2. get question if search button clicked
	$('#search_button').on('click', function(e){

		e.preventDefault();

		searchString = $.trim($('#srch_term').val()).toLowerCase();

		//check for empty string
		if (searchString === ''){

			alert("Please Enter a Question");

			$('#srch_term').focus();

		}else{

      	//tokenize search string
      	var tokens = getFinalTokens(searchString);
      	//console.log("TOKENS input + " + tokens);
	 	//compare input to matrix
		var inputArray = compareTokens(tokens,matrix);

		//check if inputArray has any matches
		var inputArraySum = arraySum(inputArray);
		//console.log("INPUT ARRAY SUM : " + inputArraySum);

		if(inputArraySum > 0){
			var cosineTotalsArray = getCosineTotals(inputArray, matrix);
			if(arraySum(cosineTotalsArray) > 0){
				var questionsArray = buildQuestionsArray();

				var topThree = getTopThreeQuestions(cosineTotalsArray, questionsArray);

				logTopThree(searchString,topThree);

				answer = findAnswer(topThree, questionAnswerArray);

			}else{
				answer = "<h3> Answer not found! Please try again!</h3>";
			}

			

		}else{
			answer = "<h3> Answer not found! Please try again!</h3>";
		}


      	//run through the matrix, find the answer
      	//var returnedValues = findAnswer(inputArray,matrix);

		//var answer = returnedValues[0];

		//var questionsTotals = returnedValues[1];

		//

		//var topThree = topThreeQuestions(searchString,questionsTotals,questionsArray);
        //display the answer
        $('.main_body').html(answer);

		}

	});

});
