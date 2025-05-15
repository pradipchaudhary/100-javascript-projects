document.addEventListener("DOMContentLoaded", () => {
    const words = [
        "hangman",
        "javascript",
        "developer",
        "programming",
        "html",
        "css",
        "challenge",
    ];
    let selectedWord = "";
    let guessedWord = [];
    let incorrectGuesses = 0;

    const wordContainer = document.getElementById("word-container");
    const imageContainer = document.getElementById("image-container");
    const lettersContainer = document.getElementById("letters-container");
    const resetButton = document.getElementById("reset-button");

    // Function to reset the game
    const resetGame = () => {
        selectedWord =
            words[Math.floor(Math.random() * words.length)].toUpperCase();
        guessedWord = Array(selectedWord.length).fill("_");
        incorrectGuesses = 0;

        renderWord();
        renderHangmanImage();
        renderLetters();
    };

    // Function to render the word
    const renderWord = () => {
        wordContainer.textContent = guessedWord.join(" ");
    };

    // Function to render the hangman image
    const renderHangmanImage = () => {
        imageContainer.innerHTML = `<img src="images/${incorrectGuesses}.png" alt="Hangman">`;
    };

    // Function to render the available letters
    const renderLetters = () => {
        lettersContainer.innerHTML = "";
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (let letter of alphabet) {
            const button = document.createElement("button");
            button.textContent = letter;
            button.addEventListener("click", () => handleGuess(letter));
            lettersContainer.appendChild(button);
        }
    };

    // Function to handle a guessed letter
    const handleGuess = (letter) => {
        if (selectedWord.includes(letter)) {
            for (let i = 0; i < selectedWord.length; i++) {
                if (selectedWord[i] === letter) {
                    guessedWord[i] = letter;
                }
            }
        } else {
            incorrectGuesses++;
        }

        renderWord();
        renderHangmanImage();
        renderLetters();

        checkGameStatus();
    };

    // Function to check the game status (win/lose)
    const checkGameStatus = () => {
        if (guessedWord.join("") === selectedWord) {
            alert("Congratulations! You won!");
            resetGame();
        } else if (incorrectGuesses === 6) {
            alert(`Sorry, you lost. The correct word was "${selectedWord}".`);
            resetGame();
        }
    };

    // Event listener for the reset button
    resetButton.addEventListener("click", resetGame);

    // Initial game setup
    resetGame();
});
