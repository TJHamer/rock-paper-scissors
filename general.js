function computerPlay(){
		//chooses a random option of ROCK/PAPER/SCISSORS

		let number = Math.random();
		let hand = "ROCK";

		if (number<=0.33){
			hand = "PAPER";
		}else if (number <= 0.66){
			hand = "SCISSORS";
		}

		return(hand);
}

function playerInput(){
	//A function to allow the user to pick ROCK/PAPER/SCISSORS

	var tryAgain = false;
	var answer = "";
	var answerUppercase = "";

	//Keep asking for an input until a valid one is given, or the user cancels
	do{

		//give the second answer if an invalid answer is given first
		if(tryAgain){
			answer = prompt("I couldn't recognise what you typed, please choose either rock, paper or scissors:");		
		}else{
			answer = prompt("Choose either rock, paper or scissors:");
		}

		if(answer == undefined){//cancel if the user cancels the input
			
			return("CANCEL");
		}

		//change to uppercase for more flexibility of input answers
		answerUppercase = answer.toUpperCase();
		
		//if the answer is invalid, try again
		if(answerUppercase != "ROCK" && answerUppercase != "PAPER" && answerUppercase != "SCISSORS"){
			tryAgain = true;
		}else{
			tryAgain = false;
		}
		
	//keep looping until a valid answer is given (or the user presses cancel)
	} while(tryAgain == true)

	return(answerUppercase)
}


function rockPaperScissors(playerInput, aiInput){
	//A function comparing the computers and users decision, giving an outcome for the round

	if(playerInput == "CANCEL"){
		return("GAME CANCELLED")
	}

	var combinedSelections = playerInput+aiInput;

	switch(combinedSelections) {

		case "ROCKROCK":
			result = "DRAW"
			break;
		case "ROCKPAPER":
			result = "COMPUTER WINS"
			break;
		case "ROCKSCISSORS":
			result = "HUMAN WINS"
			break;
		case "PAPERROCK":
			result = "HUMAN WINS"
			break;
		case "PAPERPAPER":
			result = "DRAW"
			break;
		case "PAPERSCISSORS":
			result = "COMPUTER WINS"
			break;
		case "SCISSORSROCK":
			result = "COMPUTER WINS"
			break;
		case "SCISSORSPAPER":
			result = "HUMAN WINS"
			break;
		case "SCISSORSSCISSORS":
			result = "DRAW"
			break;
		
	}

	return(result);
	
}
/* commented out as this is no longer required, due to using the UI functionality
function game(rounds = 5){
	//A function to run severl user defined rounds of Rock, Paper, Scissors. Defaults to 5 rounds if no option selected.

	var i = 0;
	var playerResult = "";
	var aiResult = "";
	var finalResult = "";
	var counter = 0;

	for (i;i<rounds;i++){

		playerResult = playerInput();
		aiResult = computerPlay();

		finalResult = rockPaperScissors(playerResult, aiResult);

		if (finalResult == "GAME CANCELLED"){
			return(finalResult);			
		} else if (finalResult == "COMPUTER WINS"){
			counter = counter - 1;
		} else if(finalResult == "HUMAN WINS"){
			counter = counter + 1;
		}

	}

	if(counter>0){
		return("HUMAN WINS BEST OF " + rounds);
	}else if(counter<0){
		return("HUMAN LOSES BEST OF " + rounds);
	}else{
		return("DRAW BEST OF " + rounds);
	}

}*/


//initialise variables
var playerScore = 0;
var aiScore = 0;



window.addEventListener("click", function(e){

	//const player = document.getElementById("playerChoice").value;//assign player value from clicking button
	const player = e.target.id;//assign player value from clicking button
	const ai = computerPlay();//assign ai value from random function
	const result = rockPaperScissors(player, ai)//compare results and output a rounds outcome

	document.getElementById("result").innerHTML = result;//display rounds outcome

	if(result == "HUMAN WINS"){//if human wins round, add one to score and display new score
		playerScore++
		document.getElementById("playerScore").value = playerScore;
	}else if(result == "COMPUTER WINS"){//if ai wins round, add one to score and display new score
		aiScore++
		document.getElementById("aiScore").value = aiScore;
	}



	if (playerScore == 5){
		document.getElementById("game-outcome").innerHTML = "PLAYER WINS BEST OF 5 - GAME OVER";

  		const outcome = Array.from(document.querySelectorAll(".playerChoice"));
		outcome.forEach(outcome => outcome.disabled = true);

	}else if(aiScore == 5){
		document.getElementById("game-outcome").innerHTML = "COMPUTER WINS BEST OF 5 - GAME OVER";
		
  		const outcome = Array.from(document.querySelectorAll(".playerChoice"));
		outcome.forEach(outcome => outcome.disabled = true);
	}


})

