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

}


window.addEventListener("click", function(){

	const player = document.getElementById("playerChoice").value;
	const ai = computerPlay();

	const result = rockPaperScissors(player, ai)

	document.getElementById("result").innerHTML = result;



})

