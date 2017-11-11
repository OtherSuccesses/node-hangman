var letter = require('./letter.js');
function Word(newWord) {
    this.newWord = newWord;
    this.letters = [];
    this.guessesLeft = 6;
    this.lettersGuessed = [],
    this.numberRight = 0;
}
Word.prototype.letterFetch = function() {
    var newWordLetters = this.newWord.split('');
    for (var i = 0; i < newWordLetters.length; i++) {
        this.letters.push(new letter(newWordLetters[i]));
    }
};
Word.prototype.displayWord = function() {
    var display = '';
    for(var i = 0; i<this.letters.length; i++) {
        display += this.letters[i].display();
    }
    console.log('Food Item: ',display, "\n");
};

module.exports = foods;
