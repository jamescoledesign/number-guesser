let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 9);
} 

function compareGuesses(humanGuess, computerGuess, targetNumber) {
    if (Math.abs(humanGuess - targetNumber) < Math.abs(computerGuess - targetNumber) || humanGuess === computerGuess) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}