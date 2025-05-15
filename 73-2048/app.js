document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("game-board");
    const cells = [];

    // Initialize the board
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cells.push(cell);
            board.appendChild(cell);
        }
    }

    // Initialize the game
    let gameBoard = Array(16).fill(0);
    placeRandomTile();
    placeRandomTile();
    updateBoard();

    // Handle keyboard input
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowUp") {
            moveUp();
        } else if (event.key === "ArrowDown") {
            moveDown();
        } else if (event.key === "ArrowLeft") {
            moveLeft();
        } else if (event.key === "ArrowRight") {
            moveRight();
        }
    });

    // Function to place a random tile (2 or 4)
    function placeRandomTile() {
        const emptyCells = gameBoard.filter((cell) => cell === 0);
        if (emptyCells.length > 0) {
            const randomIndex = Math.floor(Math.random() * emptyCells.length);
            const value = Math.random() < 0.9 ? 2 : 4;
            gameBoard[emptyCells[randomIndex]] = value;
        }
    }

    // Function to update the game board
    function updateBoard() {
        cells.forEach((cell, index) => {
            cell.textContent = gameBoard[index] !== 0 ? gameBoard[index] : "";
            cell.style.backgroundColor = getTileColor(gameBoard[index]);
        });
    }

    // Function to get the background color for a tile
    function getTileColor(value) {
        const colors = {
            2: "#eee4da",
            4: "#ede0c8",
            8: "#f2b179",
            16: "#f59563",
            32: "#f67c5f",
            64: "#f65e3b",
            128: "#edcf72",
            256: "#edcc61",
            512: "#edc850",
            1024: "#edc53f",
            2048: "#edc22e",
        };
        return colors[value] || "#ccc";
    }

    // Implement game movements
    function moveUp() {
        // Implement the logic for moving tiles up
        // Remember to call placeRandomTile and updateBoard after the move
    }

    function moveDown() {
        // Implement the logic for moving tiles down
        // Remember to call placeRandomTile and updateBoard after the move
    }

    function moveLeft() {
        // Implement the logic for moving tiles left
        // Remember to call placeRandomTile and updateBoard after the move
    }

    function moveRight() {
        // Implement the logic for moving tiles right
        // Remember to call placeRandomTile and updateBoard after the move
    }
});
