var fs = require("fs");
var Letter = require("./letter.js");
// var wordbank = require('./wordbank.js');
var inputLetter = require('./hangmanCli.js')

let Phrase = function() {
  this.phraseArr = [
    "two wrongs dont make a right",
    "the pen is mightier than the sword",
    "when in rome, do as the romans do",
    "the squeaky wheel gets the oil",
    "when the going gets tough, the tough get going",
    "no man is an island",
    "fortune favors the bold",
    "people who live in glass houses should not throw stones",
    "hope for the best, but prepare for the worst",
    "better late than never",
    "birds of a feather flock together",
    "keep your friends close and your enemies closer",
    "a picture is worth a thousand words",
    "there is no such thing as a free lunch",
    "there is no place like home",
    "discretion is the greater part of valor",
    "the early bird catches the worm",
    "never look a gift horse in the mouth",
    "you can't make an omelet without breaking a few eggs",
    "you can't always get what you want",
    "a watched pot never boils",
    "beggars can't be choosers",
    "actions speak louder than words",
    "if it aint broke dont fix it",
    "practice makes perfect",
    "easy come easy go"
  ]
}




Phrase.prototype.uniqueCharsNoSpaces = function(phraseArr){
  phraseArr = Array.from(new Set(phraseArr));
  for (let i = 0; i < phraseArr.length; i++){
    if (phraseArr[i] === ' '){
      let noSpace = phraseArr.splice(i, 1);
      }
  }
  return phraseArr;
}


module.exports = Phrase;