$(document).ready(function(){

	//1.build intial matrix
	var matrix = buildMatrix();
	//console.log(matrix);

  //2.get search string (user question)

  //searchstring variable
	var searchString = '';

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

			//compare input to matrix
			var inputArray = compareTokens(tokens,matrix);

      //run through the matrix, find the answer
      var returnedValues = findAnswer(inputArray,matrix);

			var answer = returnedValues[0];

			var questionsTotals = returnedValues[1];

			var questionsArray = buildQuestionsArray();

			var topThree = topThreeQuestions(searchString,questionsTotals,questionsArray);
      //display the answer
      $('.main_body').html(answer);

		}

	});

});
