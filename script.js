let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  let num = Math.floor(Math.random() * 10);
  return num;
};

const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1 - num2);
};

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if (humanGuess < 0 || humanGuess > 9) {
    alert('Pick a number between 0-9');
  }
  if (
    getAbsoluteDistance(humanGuess, targetNumber) ===
    getAbsoluteDistance(computerGuess, targetNumber)
  ) {
    return true;
  } else if (
    getAbsoluteDistance(humanGuess, targetNumber) <
    getAbsoluteDistance(computerGuess, targetNumber)
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

const advanceRound = () => {
  currentRoundNumber += 1;
};
