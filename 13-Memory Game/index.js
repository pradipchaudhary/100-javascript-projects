// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to create a new memory card
function createCard(value) {
    const card = document.createElement("div");
    card.classList.add("memory-card");
    card.textContent = value;
    card.addEventListener("click", flipCard);
    return card;
}

// Function to handle card flipping
function flipCard() {
    this.classList.toggle("flipped");
    checkMatch();
}

// Function to check if the flipped cards match
function checkMatch() {
    const flippedCards = document.querySelectorAll(".flipped");
    if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards;
        if (card1.textContent === card2.textContent) {
            // Cards match
            setTimeout(() => {
                card1.classList.add("matched");
                card2.classList.add("matched");
                checkWin();
            }, 500);
        } else {
            // Cards don't match
            setTimeout(() => {
                card1.classList.remove("flipped");
                card2.classList.remove("flipped");
            }, 500);
        }
    }
}

// Function to check if all pairs are matched
function checkWin() {
    const matchedCards = document.querySelectorAll(".matched");
    if (matchedCards.length === 16) {
        alert("Congratulations! You won!");
    }
}

// Function to initialize the game
function initGame() {
    const values = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
    ];
    shuffleArray(values);

    const memoryGame = document.getElementById("memory-game");
    values.forEach((value) => {
        const card = createCard(value);
        memoryGame.appendChild(card);
    });
}

// Initialize the game when the page loads
window.addEventListener("DOMContentLoaded", initGame);
