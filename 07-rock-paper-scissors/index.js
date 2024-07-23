'use strict'

// добавила переменные для отслеживания состояния игры
let playerScore = 0;
let computerScore = 0;
let currentRound = 0;

function playRound(playerSelection) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];

    let result = '';

    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        result = 'You win!';
        playerScore++;
    } else {
        result = 'You lose!';
        computerScore++;
    }

    document.querySelector('#playerChoice').textContent = `Player: ${playerSelection}`;
    document.querySelector('#computerChoice').textContent = `Computer: ${computerSelection}`;
    document.querySelector('#result').textContent = result;

    currentRound++;

    // тут проверяем, если три раунда сыграно
    if (currentRound === 3) {
        let finalResult = '';
        if (playerScore > computerScore) {
            finalResult = `You win the game! Final Score: Player ${playerScore} - Computer ${computerScore}`;
        } else if (computerScore > playerScore) {
            finalResult = `You lose the game! Final Score: Player ${playerScore} - Computer ${computerScore}`;
        } else {
            finalResult = `The game is a tie! Final Score: Player ${playerScore} - Computer ${computerScore}`;
        }
        alert(finalResult);
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    currentRound = 0;

    document.querySelector('#playerChoice').textContent = 'Player:';
    document.querySelector('#computerChoice').textContent = 'Computer:';
    document.querySelector('#result').textContent = 'Result:';
}

document.querySelector('#rock').addEventListener('click', () => playRound('rock'));
document.querySelector('#paper').addEventListener('click', () => playRound('paper'));
document.querySelector('#scissors').addEventListener('click', () => playRound('scissors'));