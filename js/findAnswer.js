/**
findAnswer.js
author:Candace Maurice
**/

$(document).ready(function(){

	//searchstring value
	var searchString = '';							//variable to hold search box value

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
			//findAnswer(searchString);

			question = new Question(searchString);

			var tokensNoStopWords = question.removeStopWords();
			
			var wordStemmerTokens = question.stemWords(tokensNoStopWords);

			//console.log(wordStemmerTokens);

			question.findAnswer(wordStemmerTokens , question.findArraySize());
		}
		
	});



	/*******************************
	*
	* function Question
	*
	********************************/
	

	var Question = function(question){
		
		this.question = question;

		tokens = this.question.split(" ");

	};


	Question.prototype.findArraySize = function(){

		var numQuestions = 0;

		for(var i = 0; i < qaData.length; ++i){
			
			$.each(qaData[i]['questions'], function(key, value) {
				//console.log('KEY ==> ' + key );
				
					numQuestions++;
				
			});
		}
		
		return numQuestions;
	};


	Question.prototype.removeStopWords = function(question){

		$.grep(tokens, function(token , i ){

			$.each(stopwords, function(key, stopword){

				//console.log(stopword + " current stop word. This is the current token. " + token);
				
				if(token == stopword){

					var index = tokens.indexOf(stopword);

					tokens.splice(index, 1);
				}

			});

		});

		return tokens;

	};


	Question.prototype.stemWords = function(tokensNoStopWords){

		$.each(tokensNoStopWords, function(index, token){

			console.log("Current Token " + token);

			stemmedWord = stemmer(token);

			console.log ("Current Stemmed Word " + stemmedWord);

			tokensNoStopWords[index]  = stemmedWord;

		});

		return tokensNoStopWords;

	};


	Question.prototype.findAnswer = function(tokens_nsw, numQuestions){

		console.log("TOKENS ==> " + tokens_nsw);
		//array of question split into words
		var counter = 0;

		var total_array = Array.apply(null, Array(numQuestions)).map(Number.prototype.valueOf,0);

		var largest = 0;

		var temp = 0;

		var answer = '';

		var resetCounter = false;
		
		$.each(tokens_nsw, function(index, token){
			
			for(var i = 0; i < qaData.length; ++i)
			{
				
				var total = 0;
				var count = 0;
					//largest = 0;
				
				//compare current token with each question
			   $.each(qaData[i], function(key, value) { 
			      if(key === 'questions'){

				      	$.each(value,function(_,question){
				      		//each token compare to question for similarity
				      		if(resetCounter){counter = 0;}

				      		//console.log("counter value '"+ token +"' : " + (counter + 1));

			      			total = total_array[counter];

			      			//console.log("total value '"+ token +"' : " + total_array[counter]);

	      					count = (question.match(new RegExp(token, "gi"))||[]).length;
		      			
							total = total + count;

							total_array[counter] = total;

							//console.log("new total value '"+ token +"' : " + total_array[counter]);

							//console.log(total_array[counter]);

							//return answer of highest value
							//console.log("largest ==> " + largest);
							if(total >= largest){

								largest = total;
								//temp = 0;
								answer = qaData[i]['answer'];
							} 
							//no answer found
							if(total == 0 && largest == 0){

								answer = "answer not found";
							}

							counter++;

							resetCounter = false;

	 				
			      		});	
		      		
	      			}	      	
			      		
			      }); 
			   	  
				}resetCounter = true;
		});

		
		//console.log(total_array.toString());
		$('.main_body').html(answer);


	};
	
	// Question.prototype.similarity = function(){

	// };

});



