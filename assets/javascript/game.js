// Creates an array that lists out all of the options 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var triesRemaining = 10;
var guessesMade = [];
var userGuess = document.onkeyup;
var computerGuess;

var pickRand = function (event) {

    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

var startGame = function (event) {
    pickRand();
}


// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var triesText = document.getElementById("tries-text");
startGame();
document.onkeyup = function (event) {

    console.log("The computer chose " + computerGuess);

    userGuess = event.key.toLowerCase();
    guessesMade.push(userGuess);
    

//Need to check if userGuess is contained in guesses made, entries are already stored there with push
//if userGuess = any index within guesses made, don't decrease tries remaining
//only run program if userGuess = an index from computer choices
//
if (computerChoices.indexOf(userGuess) == -1) {
    alert("Um..that's not a letter...(sigh)");
}


if (computerChoices.indexOf(userGuess) > -1) {



        if (userGuess === computerGuess) {
            wins++;
            triesRemaining = 10;
            guessesMade = [];
            alert("You Won!");
            pickRand();
        }
    
        if (computerGuess != userGuess) {
            triesRemaining--;
        }
    
        if (triesRemaining === 0) {
            losses++;
            triesRemaining = 10;
            guessesMade = [];
            alert("You Lost!");
            pickRand();
        }
        
    
        userChoiceText.textContent = "You chose: ";
        userChoiceText.append(guessesMade + " ");
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        triesText.textContent = "Tries Remaining: " + triesRemaining;
    

    
}
};
