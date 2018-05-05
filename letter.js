var Letter = function(inputChar, phrase) {
	this.character = inputChar;
	this.phrase = phrase;
	this.correctUserGuessArr = [];
	this.wrongUserGuessArr = [];
	this.loggedPhrase = [];
	this.phraseArr = [];
}

Letter.prototype.displayChar = function(inputChar, phrase) {
	this.loggedPhrase = [];
	this.phraseArr = [];

	for (var i = 0; i < phrase.length; i++) {
		this.phraseArr.push(phrase.charAt(i));
	};

	if ((this.correctUserGuessArr.indexOf(inputChar) > -1) || (this.wrongUserGuessArr.indexOf(inputChar) > -1) ){
		console.log("You already chose this letter!");
	}
	else if( this.phraseArr.indexOf(inputChar) !== -1 ) {
		this.correctUserGuessArr.push(inputChar);
	} else if (this.phraseArr.indexOf(inputChar) == -1) {
		this.wrongUserGuessArr.push(inputChar);
	};
	for( i = 0; i < this.phraseArr.length; i++) {
		if (this.phraseArr[i] === ' '){
			this.loggedPhrase.push(' ')
			this.phraseArr[i]= '';
		}
		else if	(this.correctUserGuessArr.indexOf(this.phraseArr[i]) !== -1 ) {
			this.loggedPhrase.push(this.phraseArr[i]);
		} else {
			this.loggedPhrase.push('_');
		};
	};
	console.log(this.loggedPhrase.join(" ")); 
}; 

module.exports = Letter;
