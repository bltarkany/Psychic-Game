// global variables 

// variables and arrays for storing data
var cookieoptions = ["c", "o", "s", "m", "p", "g", "f", "w"];

// documentation
var winScore = document.getElementById("wins");
var lossScore = document.getElementById("losses");
var guessesRemain = document.getElementById("guessRemain");
var lettersGuessed = document.getElementById("guessTally");
var cookiePic = document.getElementById("cookieImage");
var cookieChoosen = document.getElementById("cookieChoice");
var monsterPic = document.getElementById("monsterImage");
var monsterAnswer = document.getElementById("monsterReaction");
var gameStatement = document.getElementById("outcome");




// game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 3;
var userGuessed = [];
var monsterChoice = "";



// functions to be used multiple times throughout the game - global functions

// start new game round
function startGame() {

    guessesLeft = 3;
    userGuessed = [];



    winScore.textContent = "Wins: " + winCount;
    lossScore.textContent = "Loses: " + lossCount;
    guessesRemain.textContent = "Guesses Left: " + guessesLeft;
    lettersGuessed.textContent = "Cookies Already Guessed: " + userGuessed;
}

// restarts game back to zero
function restart() {
    winCount = 0;
    lossCount = 0;
    guessesLeft = 3;
    userGuessed = [];

    monsterPic.setAttribute("src", "assets/images/chef-cookie.jpeg");

    winScore.textContent = "Wins: " + winCount;
    lossScore.textContent = "Loses: " + lossCount;
    guessesRemain.textContent = "Guesses Left: " + guessesLeft;
    lettersGuessed.textContent = "Cookies Already Guessed: " + userGuessed;
}

// creates monsters choice
function monsterAction() {

 monsterChoice = cookieoptions[Math.floor(Math.random() * cookieoptions.length)];

console.log(monsterChoice);
}


// user makes guess 
document.onkeyup = function (event) {
    // change user guess to lower case
    var userChoice = event.key.toLowerCase();

    console.log(userChoice);

    // state which user choices to look for 
    if ((userChoice === "c") || (userChoice === "o") || (userChoice === "s") || (userChoice === "m") || (userChoice === "p") || (userChoice === "g") || (userChoice === "f") || (userChoice === "w")) {

        if (userChoice === monsterChoice) {
            winCount++;
            monsterPic.setAttribute("src", "assets/images/cookie-suit.jpeg");
            cookieChoosen.textContent = "You choose " + userChoice;
            monsterAnswer.textContent = "You found my Cookie!";
            gameStatement.textContent = "You've won! Cookie Monster is Satisfied!";
            console.log(winCount);
            startGame();
            monsterAction();
        } else {
            guessesLeft--;
            userGuessed.push(userChoice);
            cookieChoosen.textContent = "You choose " + userChoice;
            monsterAnswer.textContent = "That's not the cookie!";
            monsterPic.setAttribute("src", "assets/images/super-sad.jpeg");
            gameStatement.textContent = "Wrong cookie. Try again.";

        }

        if (guessesLeft === 0) {
            lossCount++;
            // guessesLeft = 3;
            // userGuessed = [];
            monsterPic.setAttribute("src", "assets/images/angrycookie.jpg");

            gameStatement.textContent = "Uh-oh! You've Lost. Cookie Monster is Officially Hangry!!";
            
            startGame();
            monsterAction();
        }

        if (lossCount === 10) {
            alert("You have lost 10 times. Cookie Monster says No More! Would you like to play again?");
            restart();
        }
    }


    winScore.textContent = "Wins: " + winCount;
    lossScore.textContent = "Loses: " + lossCount;
    guessesRemain.textContent = "Guesses Left: " + guessesLeft;
    lettersGuessed.textContent = "Cookies Already Guessed: " + userGuessed;

}

monsterAction();
startGame();
