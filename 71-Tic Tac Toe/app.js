const board = document.getElementById("game-board");
const message = document.getElementById("message");
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

// Create the game board
for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("data-index", i);
    cell.addEventListener("click", handleCellClick);
    board.appendChild(cell);
}

function handleCellClick(event) {
    const clickedIndex = event.target.getAttribute("data-index");

    if (gameBoard[clickedIndex] === "" && gameActive) {
        gameBoard[clickedIndex] = currentPlayer;
        event.target.textContent = currentPlayer;

        if (checkWin()) {
            displayMessage(`${currentPlayer} wins!`);
            gameActive = false;
        } else if (gameBoard.every((cell) => cell !== "")) {
            displayMessage("It's a draw!");
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    return winConditions.some((condition) => {
        const [a, b, c] = condition;
        return (
            gameBoard[a] !== "" &&
            gameBoard[a] === gameBoard[b] &&
            gameBoard[b] === gameBoard[c]
        );
    });
}

function displayMessage(msg) {
    message.textContent = msg;
}
