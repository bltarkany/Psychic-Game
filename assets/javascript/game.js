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
var guessesLeft = 4;
var userGuessed = [];
var monsterChoice = "";



// functions to be used multiple times throughout the game - global functions

// start new game round
function startGame() {

    guessesLeft = 4;
    userGuessed = [];

    winScore.textContent = "Wins: " + winCount;
    lossScore.textContent = "Losses: " + lossCount;
    guessesRemain.textContent = "Guesses Left: " + guessesLeft;
    lettersGuessed.textContent = "Cookies Already Guessed: " + userGuessed;
}

// restarts game back to zero
function restart() {
    winCount = 0;
    lossCount = 0;
    guessesLeft = 4;
    userGuessed = [];

    cookiePic.setAttribute("src", "assets/images/questionmark.jpg");
    cookieChoosen.textContent = "";
    monsterPic.setAttribute("src", "assets/images/chef-cookie.jpeg");
    monsterAnswer.textContent = "";
    gameStatement.textContent = "";

    winScore.textContent = "Wins: " + winCount;
    lossScore.textContent = "Losses: " + lossCount;
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

        // change statement and pic with each choice
        // if (userChoice === "c") {
        //     cookieChoosen.textContent = "You chose chocolate chip";
        //     cookiePic.setAttribute("src", "assets/images/chocolatechip.jpeg");
        // } else if (userChoice === "o") {
        //     cookieChoosen.textContent = "You chose oatmeal";
        //     cookiePic.setAttribute("src", "assets/images/oatmeal.jpeg");
        // } else if (userChoice === "g") {
        //     cookieChoosen.textContent = "You chose gingerbread";
        //     cookiePic.setAttribute("src", "assets/images/gingerbread.jpeg");
        // } else if (userChoice === "s") {
        //     cookieChoosen.textContent = "You chose snickerdoodle";
        //     cookiePic.setAttribute("src", "assets/images/snickerdoodle.jpeg");
        // } else if (userChoice === "p") {
        //     cookieChoosen.textContent = "You chose peanut butter";
        //     cookiePic.setAttribute("src", "assets/images/pb.jpeg");
        // } else if (userChoice === "f") {
        //     cookieChoosen.textContent = "You chose fortune cookie";
        //     cookiePic.setAttribute("src", "assets/images/fortune.jpeg");
        // } else if (userChoice === "m") {
        //     cookieChoosen.textContent = "You chose monster cookie";
        //     cookiePic.setAttribute("src", "assets/images/monstercookie.jpeg");
        // } else if (userChoice === "w") {
        //     cookieChoosen.textContent = "You chose white chocolate chip";
        //     cookiePic.setAttribute("src", "assets/images/whitechocolate.jpeg");
        // }

        // switch to remove the extensive if/else statements
        switch (userChoice) {
            case "c":
                cookieChoosen.textContent = "You chose chocolate chip";
                cookiePic.setAttribute("src", "assets/images/chocolatechip.jpeg");
                break;
            case "o":
                cookieChoosen.textContent = "You chose oatmeal";
                cookiePic.setAttribute("src", "assets/images/oatmeal.jpeg");
                break;
            case "g":
                cookieChoosen.textContent = "You chose gingerbread";
                cookiePic.setAttribute("src", "assets/images/gingerbread.jpeg");
                break;
            case "s":
                cookieChoosen.textContent = "You chose snickerdoodle";
                cookiePic.setAttribute("src", "assets/images/snickerdoodle.jpeg");
                break;
            case "p":
                cookieChoosen.textContent = "You chose peanut butter";
                cookiePic.setAttribute("src", "assets/images/pb.jpeg");
                break;
            case "f":
                cookieChoosen.textContent = "You chose fortune cookie";
                cookiePic.setAttribute("src", "assets/images/fortune.jpeg");
                break;
            case "m":
                cookieChoosen.textContent = "You chose monster cookie";
                cookiePic.setAttribute("src", "assets/images/monstercookie.jpeg");
                break;
            case "w":
                cookieChoosen.textContent = "You chose white chocolate chip";
                cookiePic.setAttribute("src", "assets/images/whitechocolate.jpeg");
                break;
        }


        if (userChoice === monsterChoice) {
            winCount++;
            monsterPic.setAttribute("src", "assets/images/cookie-suit.jpeg");
            monsterAnswer.textContent = "You found my Cookie!";
            gameStatement.textContent = "You've won! Cookie Monster is Satisfied! Choose Monster's next cookie.";
            console.log(winCount);
            startGame();
            monsterAction();
        } else {
            guessesLeft--;
            userGuessed.push(userChoice);
            monsterAnswer.textContent = "That's not the cookie!";
            monsterPic.setAttribute("src", "assets/images/super-sad.jpeg");
            gameStatement.textContent = "Wrong cookie. Try again.";

        }

        if (guessesLeft === 0) {
            lossCount++;
            monsterPic.setAttribute("src", "assets/images/angrycookie.jpg");
            gameStatement.textContent = "Uh-oh! You've Lost. Cookie Monster is Officially Hangry!! Try again.";

            startGame();
            monsterAction();
        }

        if (lossCount === 10) {
            alert("You have lost 10 times. Cookie Monster says 'No More'! Would you like to play again?");
            restart();
        }
    }


    winScore.textContent = "Wins: " + winCount;
    lossScore.textContent = "Losses: " + lossCount;
    guessesRemain.textContent = "Guesses Left: " + guessesLeft;
    lettersGuessed.textContent = "Cookies Already Guessed: " + userGuessed;

}

monsterAction();
startGame();