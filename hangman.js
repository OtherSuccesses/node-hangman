var inquirer = require("inquirer");
var fs = require("fs");
var foods = require("./foods.js");

var game = {
	"words": ["Broccoli","Carrots","Cauliflower","Celery","Corn","Cucumbers","Lettuce","Mushrooms","Onions","Peppers","Potatoes","Spinach","Squash","Zucchini","Tomatoes","Apples","Avocados","Bananas","Berries",
	"Cherries","Grapefruit","Grapes","Kiwis","Lemons","Melon","Nectarines","Oranges","Peaches","Pears","Plums","Catfish","Crab","Lobster","Mussels","Oysters","Salmon","Shrimp","Tilapia","Tuna","Basil","Pepper","Cilantro","Cinnamon","Garlic","Ginger",
	"Mint","Oregano","Paprika","Parsley","Limes","Salt","Vanilla","Butter","Cottage cheese","Sausage","Milk","Sour cream","Whipped cream","Yogurt","Bacon","Beef","Chicken","Ground Beef","Pork","Hot dogs","Lunchmeat","Turkey","Ham"],
	"letters": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
	"currentWord": {},
	"wins": 0,

	"start": function(){
		var newWord = game.words[Math.floor(Math.random()*game.words.length)];
		game.currentWord = new foods(newWord);
		game.currentWord.letterFetch(game.currentWord.newWord);
		console.log("It's a grocery hunt. What does your spouse want you to get from the store. Guess the letter to decipher their horrible handwriting.\n");
		game.currentWord.displayWord();
		game.letterInput();
	}

	"letterInput": function(){
		inquirer.prompt(
			[{
				name: "letterGuess",
				type: "input",
				message: "What letter do you think you can read on this chickenscratch document?"
			}])
		.then(function(reply){
				if(game.letters.indexOf(reply.letterGuess !== -1)){
					console.log(reply.letterGuess);
					game.letterProcess(reply.letterGuess);
				}
			})
		}

		"letterProcess": function(userLetter){
			var letter = userLetter.toLowerCase();
			var numberFound = 0;
			if (game.letters.includes(letter) && !game.currentWord.lettersGuessed.includes(letter)){
				for (var i = 0; i < game.currentWord.letters.length; i++) {
					if (game.currentWord.letters[i].character === letter || game.currentWord.letters[i].character === letter.toUpperCase()){
						game.currentWord.letters[i].visible = true;
						game.currentWord.guessed++;
						numberFound++;
					}
				}
				if (numberFound === 0){
					game.currentWord.guessesLeft--;
					if(!game.currentWord.lettersGuessed.includes(letter)){
						game.currentWord.lettersGuessed.push(letter);
					}
					}
				}
			}

		}

		"restart": function() {
			inquirer.prompt(
				[{
					name: "replay",
					type: "confirm",
					message: "Is there another item on the grocery list? (Do you want to play again?)"
				}
			])
			.then(function(result){
				if(result.replay){
					game.start();
				}
			})
		}
	}

}

game.start();
