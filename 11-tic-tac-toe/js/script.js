const cells = document.querySelectorAll('[data-cells]'),
      restartBtn = document.querySelector('[data-restart]'),
      declareWinner = document.querySelector('[data-text]');

let currentPlayer = 'X';
let gameState = Array(9).fill(null);


cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (gameState[index] === null) {
            gameState[index] = currentPlayer;
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

            let winner = checkWinner();
            let draw = itsATie();
            if (winner) {
                declareWinner.textContent = `Heeey, player ${winner} has won!`
            } else if (draw) {
                declareWinner.textContent = `It's a tie!`
}
        }
    });
});

const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    let winner = null;

    winningCombo.forEach(combination => {
        const [a, b, c] = combination;

        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            winner = gameState[a];
        }
    });

    return winner;
}

function itsATie() {
    return gameState.every(cell => cell !== null);
}


restartBtn.addEventListener('click', () => {
    cells.forEach(cell => cell.textContent = '');
    gameState.fill(null);
    declareWinner.textContent = '';
});