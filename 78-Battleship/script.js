document.addEventListener("DOMContentLoaded", () => {
    const playerBoard = document.getElementById("player-board");
    const computerBoard = document.getElementById("computer-board");
    const messageElement = document.getElementById("message");
    const resetButton = document.getElementById("reset-button");

    const boardSize = 10;
    const shipLengths = [5, 4, 3, 3, 2];
    let playerBoardArray = createEmptyBoard();
    let computerBoardArray = createEmptyBoard();
    let playerShips = placeShips(playerBoardArray);
    let computerShips = placeShips(computerBoardArray);

    // Function to create an empty game board
    function createEmptyBoard() {
        return Array.from({ length: boardSize }, () =>
            Array(boardSize).fill(0)
        );
    }

    // Function to place ships on the board
    function placeShips(board) {
        const ships = [];
        for (const length of shipLengths) {
            let ship;
            do {
                ship = generateRandomShip(length);
            } while (shipCollides(ship, board));

            ships.push(ship);

            for (const { x, y } of ship) {
                board[y][x] = 1;
            }
        }
        return ships;
    }

    // Function to generate a random ship
    function generateRandomShip(length) {
        const isVertical = Math.random() < 0.5;
        const x = Math.floor(
            Math.random() * (boardSize - (isVertical ? 0 : length))
        );
        const y = Math.floor(
            Math.random() * (boardSize - (isVertical ? length : 0))
        );

        return Array.from({ length }, (_, i) => ({
            x: isVertical ? x : x + i,
            y: isVertical ? y + i : y,
        }));
    }

    // Function to check if a ship collides with another ship on the board
    function shipCollides(ship, board) {
        for (const { x, y } of ship) {
            if (board[y][x] === 1) {
                return true;
            }
        }
        return false;
    }

    // Function to handle player's move
    function handlePlayerMove(x, y) {
        if (computerBoardArray[y][x] === 1) {
            computerBoardArray[y][x] = 2; // Mark as hit
            playerBoardArray[y][x] = 2; // Update player's board
            renderBoards();
            checkGameStatus();
        } else {
            playerBoardArray[y][x] = -1; // Mark as miss
            computerMove();
        }
    }

    // Function for the computer's move
    function computerMove() {
        let x, y;
        do {
            x = Math.floor(Math.random() * boardSize);
            y = Math.floor(Math.random() * boardSize);
        } while (playerBoardArray[y][x] === -1 || playerBoardArray[y][x] === 2);

        if (playerBoardArray[y][x] === 1) {
            playerBoardArray[y][x] = 2; // Mark as hit
            computerMove(); // Computer gets another turn after a hit
        } else {
            playerBoardArray[y][x] = -1; // Mark as miss
            renderBoards();
        }

        checkGameStatus();
    }

    // Function to check the game status
    function checkGameStatus() {
        if (allShipsSunk(playerShips)) {
            displayMessage(
                "Congratulations! You sank all the computer's ships!"
            );
        } else if (allShipsSunk(computerShips)) {
            displayMessage("Game over! The computer sank all your ships.");
        }
    }

    // Function to check if all ships are sunk
    function allShipsSunk(ships) {
        return ships.every((ship) =>
            ship.every(({ x, y }) => computerBoardArray[y][x] === 2)
        );
    }

    // Function to render the game boards
    function renderBoards() {
        renderBoard(playerBoard, playerBoardArray, true);
        renderBoard(computerBoard, computerBoardArray, false);
    }

    // Function to render a game board
    function renderBoard(boardElement, boardArray, playerBoard) {
        boardElement.innerHTML = "";

        for (let y = 0; y < boardSize; y++) {
            for (let x = 0; x < boardSize; x++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");

                if (boardArray[y][x] === 1 && playerBoard) {
                    cell.classList.add("ship");
                } else if (boardArray[y][x] === 2) {
                    cell.classList.add("hit");
                } else if (boardArray[y][x] === -1) {
                    cell.textContent = "X";
                }

                if (playerBoard) {
                    cell.addEventListener("click", () =>
                        handlePlayerMove(x, y)
                    );
                }

                boardElement.appendChild(cell);
            }
        }
    }

    // Function to display a message
    function displayMessage(message) {
        messageElement.textContent = message;
        messageElement.classList.remove("hidden");
    }

    // Function to reset the game
    function resetGame() {
        playerBoardArray = createEmptyBoard();
        computerBoardArray = createEmptyBoard();
        playerShips = placeShips(playerBoardArray);
        computerShips = placeShips(computerBoardArray);

        messageElement.classList.add("hidden");

        renderBoards();
    }

    // Event listener for the reset button
    resetButton.addEventListener("click", resetGame);

    // Initial game setup
    renderBoards();
});
