/**
 * file: app.js
 * author: candace maurice
 * date: March 21, 2017
 * main application file
 */
$(document).ready(function(){

	/**********************************************
	* 1.build intial matrix
	***********************************************/
	var matrix = buildMatrix();
	//build array of all questions with corresponding answer index
	var questionAnswerArray = buildQuestionsArray();
	//console.log(matrix);

   /***********************************************
   * 2.get search string (user question)
   ************************************************/

	//searchstring variable
	var searchString = answer =  '';


	/***********************************************
	3. get question if enter button pressed
	************************************************/
	$('#srch_term').keydown(function(e){

		if(e.keyCode === 13){
		e.preventDefault();
		$('#search_button').click();
		}
	});

	/************************************************
	4. get question if search button  or enter clicked
	************************************************/
	$('#search_button').on('click', function(e){

		e.preventDefault();

		searchString = $.trim($('#srch_term').val()).toLowerCase();

		//check for empty string
		if (searchString === ''){

		alert("Please Enter a Question");

		$('#srch_term').focus();

		}else{

       /********************************************
       * 5. tokenize search string
       ********************************************/
       var tokens = getFinalTokens(searchString);
       //console.log( "Tokens : " + tokens);

		/*******************************************
		* 6. compare input to matrix
		********************************************/
		var inputArray = compareTokens(tokens,matrix);

		/*******************************************
		* 7. check if inputArray has any matches
		********************************************/
		var inputArraySum = arraySum(inputArray);

		/********************************************
		* if matches in input array
		********************************************/
		if(inputArraySum > 0){
		/*****************************************
		* 9. get cosine totals
		*****************************************/
		var cosineTotalsArray = getCosineTotals(inputArray, matrix);

		/*****************************************
		* 10. build array of questions and answer
		******************************************/
		var questionsArray = buildQuestionsArray();

		/****************************************
		* 11. get the top three question answer
		*****************************************/
		var topThree = getTopThreeQuestions(cosineTotalsArray, questionsArray);

		

		/******************************************
		* 13. check if similarity is greater than 0.5
		*******************************************/
		topThree = similarityDistance(topThree);

		/******************************************
		* 12. console log top three answers
		******************************************/
		logTopThree(searchString,topThree);

		/******************************************
		* 14. find answers in questionsAnswerArray for top three
		*******************************************/
		answer = findAnswer(topThree, questionAnswerArray);

		}else{
		/********************************************
		* 14. answer not found
		*********************************************/
		answer = "<h3> Answer not found! Please try again!</h3>";
		}

        /***********************************************
        * 15 .display the answer on the web page
        *************************************************/
        $('.main_body').html(answer);

		}

	});

});