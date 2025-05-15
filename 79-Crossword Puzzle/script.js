document.addEventListener("DOMContentLoaded", () => {
    const puzzleBoard = document.getElementById("puzzle-board");
    const wordInput = document.getElementById("word");
    const submitButton = document.getElementById("submit-button");
    const messageElement = document.getElementById("message");
    const resetButton = document.getElementById("reset-button");

    const puzzleSize = 10;
    const puzzleWords = ["JAVASCRIPT", "HTML", "CSS", "WEB", "DEVELOPER"];
    let puzzleGrid = createPuzzleGrid();

    // Function to create an empty crossword puzzle grid
    function createPuzzleGrid() {
        return Array.from({ length: puzzleSize }, () =>
            Array(puzzleSize).fill("")
        );
    }

    // Function to render the puzzle grid
    function renderPuzzle() {
        puzzleBoard.innerHTML = "";

        for (let y = 0; y < puzzleSize; y++) {
            for (let x = 0; x < puzzleSize; x++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.textContent = puzzleGrid[y][x];
                cell.addEventListener("click", () => handleCellClick(x, y));
                puzzleBoard.appendChild(cell);
            }
        }
    }

    // Function to handle cell click
    function handleCellClick(x, y) {
        if (wordInput.value.length === 0) return;

        const direction = confirm(
            "Choose direction: Horizontal (OK) or Vertical (Cancel)"
        )
            ? "H"
            : "V";
        const word = wordInput.value.toUpperCase();

        if (checkWordFit(word, x, y, direction)) {
            placeWord(word, x, y, direction);
            wordInput.value = "";
            renderPuzzle();
            checkPuzzleComplete();
        } else {
            alert("Word does not fit in the selected direction. Try again.");
        }
    }

    // Function to check if the word fits in the given direction
    function checkWordFit(word, startX, startY, direction) {
        const maxLength =
            direction === "H" ? puzzleSize - startX : puzzleSize - startY;

        return word.length <= maxLength;
    }

    // Function to place the word in the puzzle grid
    function placeWord(word, startX, startY, direction) {
        for (let i = 0; i < word.length; i++) {
            const x = direction === "H" ? startX + i : startX;
            const y = direction === "V" ? startY + i : startY;
            puzzleGrid[y][x] = word[i];
        }
    }

    // Function to check if the puzzle is complete
    function checkPuzzleComplete() {
        const puzzleComplete = puzzleWords.every((word) => {
            return (
                puzzleGrid.some(
                    (row) =>
                        row.includes(word) ||
                        row.includes(word.split("").reverse().join(""))
                ) ||
                puzzleGrid.some(
                    (col) =>
                        col.includes(word) ||
                        col.includes(word.split("").reverse().join(""))
                )
            );
        });

        if (puzzleComplete) {
            displayMessage("Congratulations! Puzzle Complete!");
        }
    }

    // Function to display a message
    function displayMessage(message) {
        messageElement.textContent = message;
        messageElement.classList.remove("hidden");
    }

    // Function to reset the puzzle
    function resetPuzzle() {
        puzzleGrid = createPuzzleGrid();
        renderPuzzle();
        messageElement.classList.add("hidden");
        wordInput.value = "";
    }

    // Event listener for the submit button
    submitButton.addEventListener("click", () => handleCellClick(0, 0));

    // Event listener for the reset button
    resetButton.addEventListener("click", resetPuzzle);

    // Initial puzzle setup
    renderPuzzle();
});
