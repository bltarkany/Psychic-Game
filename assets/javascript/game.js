// global variables 

// variables and arrays for storing data
var cookieoptions = ["c", "o", "s", "m", "p", "g", "f", "w"];

var winScore = document.getElementById("wins");
var lossScore = document.getElementById("losses");
var guessesRemain = document.getElementById("guessRemain");
var lettersGuessed = document.getElementById("guessTally");
var cookiePic = document.getElementById("cookieImage");
var cookieChoosen = document.getElementById("cookieChoice");
var monsterPic = document.getElementById("monsterImage")
var monsterAnswer = document.getElementById("monsterReaction");
var gameStatement = document.getElementById("outcome")




// game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 3;
var userGuessed = [];




// functions to be used multiple times throughout the game 

// function startGame() {

//     winScore.textContent = "Wins: " + winCount;
//     lossScore.textContent = "Loses: " + lossCount;
//     guessesRemain.textContent = "Guesses Left: " + guessesLeft;
//     lettersGuessed.textContent = "Cookies Already Guessed: " + userGuessed;


// startGame();




var monsterChoice = cookieoptions[Math.floor(Math.random() * cookieoptions.length)];

console.log(monsterChoice);



document.onkeyup = function (event) {

    var userChoice = event.key.toLowerCase();

    console.log(userChoice);

    if ((userChoice === "c") || (userChoice === "o") || (userChoice === "s") || (userChoice === "m") || (userChoice === "p") || (userChoice === "g") || (userChoice === "f") || (userChoice === "w")) {

        if (userChoice === monsterChoice) {
            winCount++;
            gameStatement.textContent = "You've won! Cookie Monster is Satisfied!";
            console.log(winCount);
        } else {
            guessesLeft--;
            userGuessed.push(userChoice);
            gameStatement.textContent = "Wrong cookie. Try again.";
        }

        if (guessesLeft === 0) {
            lossCount++;
            guessesLeft = 3;
            userGuessed = [];
            gameStatement.textContent = "Uh-oh! You've Lost. Cookie Monster is Officially Hangry!!";
        
        }
    }


    winScore.textContent = "Wins: " + winCount;
    lossScore.textContent = "Loses: " + lossCount;
    guessesRemain.textContent = "Guesses Left: " + guessesLeft;
    lettersGuessed.textContent = "Cookies Already Guessed: " + userGuessed;

}

