let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generates random number 
const generateTarget = () => {
    return Math.floor(Math.random() * 9);
} 

// Compares human and computer guesses
function compareGuesses(humanGuess, computerGuess, targetNumber) {
    if (Math.abs(humanGuess - targetNumber) < Math.abs(computerGuess - targetNumber) || humanGuess === computerGuess) {
        return true;
    } else {
        return false;
    }
}

// Updates winner's score
function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

// Advances round number
function advanceRound() {
    currentRoundNumber += 1;
}