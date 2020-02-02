# Psychic-Game - HTML layout - Javascript DOM modification

### This project was used to solidify Javascript components
  1. documenting to the html.
  2. global variables
  3. global functions
  4. onkeyup functions
  5. setting attributes


### Overview

* Utilizing javascript to modify the DOM
* Using global scope to access game functions and variables
* Introducing Math.random to randomize the computer choice
* Adding switch to alleviate if/else statements
* Solidifying HTML and CSS functions


### Psychic Game 


![Guess the Cookie](https://github.com/bltarkany/Psychic-Game/blob/master/assets/images/gamepic.png)


#### Demo Game

  [Cookie Game](https://bltarkany.github.io/Psychic-Game/)



You're going to make a game that essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:

   * Guess what letter I'm thinking of
   * Wins: (# of times the user has guessed the letter correctly)
   * Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
   * Guesses Left: (# of guesses left. This will update)
   * Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
   * When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
   * When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).


#### Game Design Notes

* Try minimizing if/else statements with `switch` function
