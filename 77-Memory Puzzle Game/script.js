document.addEventListener("DOMContentLoaded", () => {
    const symbols = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
    ];
    let shuffledSymbols = [];
    let selectedCards = [];
    let matchedPairs = 0;

    const memoryBoard = document.getElementById("memory-board");
    const messageElement = document.getElementById("message");
    const resetButton = document.getElementById("reset-button");

    // Function to shuffle array using Fisher-Yates algorithm
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    // Function to create the memory cards
    const createMemoryCards = () => {
        shuffledSymbols.forEach((symbol, index) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.symbol = symbol;
            card.dataset.index = index;
            card.addEventListener("click", handleCardClick);
            memoryBoard.appendChild(card);
        });
    };

    // Function to handle card click
    const handleCardClick = (event) => {
        const selectedCard = event.target;

        if (
            selectedCard.classList.contains("matched") ||
            selectedCard.classList.contains("selected")
        ) {
            return;
        }

        selectedCard.textContent = selectedCard.dataset.symbol;
        selectedCard.classList.add("selected");

        selectedCards.push(selectedCard);

        if (selectedCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    };

    // Function to check if the selected cards match
    const checkMatch = () => {
        const [card1, card2] = selectedCards;

        if (card1.dataset.symbol === card2.dataset.symbol) {
            card1.classList.add("matched");
            card2.classList.add("matched");
            matchedPairs++;

            if (matchedPairs === symbols.length / 2) {
                displayMessage("Congratulations! You solved the puzzle!");
            }
        } else {
            card1.textContent = "";
            card2.textContent = "";
            card1.classList.remove("selected");
            card2.classList.remove("selected");
        }

        selectedCards = [];
    };

    // Function to reset the game
    const resetGame = () => {
        shuffledSymbols = [...symbols];
        shuffleArray(shuffledSymbols);

        memoryBoard.innerHTML = "";
        createMemoryCards();

        messageElement.classList.add("hidden");
        matchedPairs = 0;
    };

    // Function to display a message
    const displayMessage = (message) => {
        messageElement.textContent = message;
        messageElement.classList.remove("hidden");
    };

    // Event listener for the reset button
    resetButton.addEventListener("click", resetGame);

    // Initial game setup
    resetGame();
});
