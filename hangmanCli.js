// global vars here
let inquirer = require('inquirer');
let Letter = require('./letter.js');
let Phrase = require('./phrase.js');
let frase = new Phrase();
let lett = new Letter();
let	correctUserGuessArr = [];
let wrongUserGuessArr = [];
let attemptsRemaining = lett.wrongUserGuessArr.length;
var phraseHolder = [];
var j = 0;

// ASCI text welcome message
console.log("");
console.log("\x1b[31m" , "WELCOME TO" , "\x1b[0m");
console.log("\x1b[1m"  , "  PHRASE" , "\x1b[0m");
console.log("\x1b[34m" , " HANGMAN!" , "\x1b[0m");
console.log("");
console.log("\x1b[1m" , "TEST YOUR PHRASE KNOWLEDGE." , "\x1b[0m");

lett.displayChar("", frase.phraseArr[j]);

function initialCondition() {
	if (lett.correctUserGuessArr.length === phraseHolder.length) {
		console.log("Winner Winner Chicken Dinner!!!");
		nextWord();
	} else if(attemptsRemaining === 0 ) {
		console.log("Welcome to HangmanCLI");
		startGame();
	} else if (attemptsRemaining === 9) {
		console.log("One guess Remaining");
		startGame();
	} else if (attemptsRemaining === 10) {
		console.log("Game Over... The guess word was" + frase.phraseArr[i]);
		nextWord();
	} else if (attemptsRemaining > 0 && attemptsRemaining < 10 && lett.correctUserGuessArr.length != frase.phraseArr[j].length) {
		console.log("Guess again");
		startGame();
	};
}

function startGame() {
	inquirer.prompt([
	  {
	  name: 'letter',
	  message: 'Choose a letter',
	  validate: function(str){
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
		}
	}
	]).then(function(res){
		lett.displayChar(res.letter, frase.phraseArr[j]);
		phraseHolder = frase.phraseArr[j];
		phraseHolder = frase.uniqueCharsNoSpaces(phraseHolder);
		attemptsRemaining = lett.wrongUserGuessArr.length;
		initialCondition();
	});
};

function nextWord() {
	inquirer.prompt([
	  {
	  name: 'game',
	  type: 'confirm',
	  message: 'Do you want to play another round?',
	  default: true
	}
	]).then(function(res){
		if (res.game === true){
			j++;
			lett.wrongUserGuessArr = [];
			lett.correctUserGuessArr = [];
			attemptsRemaining = lett.wrongUserGuessArr.length;
			lett.displayChar(res.letter, frase.phraseArr[j]);
			initialCondition();			
			
		} else {
			process.exit();
		};
		
	});
}

startGame();