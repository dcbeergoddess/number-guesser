let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  let num = Math.floor(Math.random() * 10);
  return num;
};

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if (
    Math.abs(humanGuess - targetNumber) ===
    Math.abs(computerGuess - targetNumber)
  ) {
    return true;
  } else if (
    Math.abs(humanGuess - targetNumber) < Math.abs(computerGuess - targetNumber)
  ) {
    return true;
  } else {
    return false;
  }
};

const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  } else {
    return 'Error';
  }
};
