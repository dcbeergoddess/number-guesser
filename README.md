# number-guesser

Codecademy project for Full Stack JS Syntax PART 1

## Project Requirements

- In this project, you’ll write four functions in script.js. We’ve provided some additional JavaScript code in game.js that will call your functions based on user interactions, but you don’t need to look at game.js and shouldn’t edit it if you want your project to work as intended. As you complete this project, make sure that all of your functions are named exactly as specified so that they can be called correctly when the game is played.

1. Create a generateTarget() function. This function will be called at the start of each new round in order to generate the new secret target number.

- This function should return a random integer between 0 and 9.

2. Create a compareGuesses() function. This function will be called each round to determine which guess is closest to the target number.

- This function:
  - Has three parameters representing the user (human) guess, a computer guess, and the secret target number to be guessed.
  - Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
  - Return true if the human player wins, and false if the computer player wins.

3. Create an updateScore() function. This function will be used to correctly increase the winner’s score after each round.

- This function:
  - Has a single parameter. This parameter will be a string value representing the winner.
  - Increases the score variable (humanScore or computerScore) by 1 depending on the winner passed in to updateScore. The string passed in will be either 'human' or 'computer'.
  - Does not need to return any value.

4. Create an advanceRound() function. This function will be used to update the round number after each round.

- advanceRound() should increase the value of currentRoundNumber by 1.
- After completing advanceRound(), your Number Guesser game should be fully operational. You should be able to make guesses, see your or the computer score increase correctly, move to the next round, and see the correct round displayed.
