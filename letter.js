var letter = function(abc) {
	this.character = abc
	this.visible = false;
	this.display = function() {
		if(this.visible) {
			return this.character + " ";
		} else {
			return "_ ";
		}
	}
}
module.exports = letter;