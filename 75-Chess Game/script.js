document.addEventListener("DOMContentLoaded", () => {
    const socket = io();

    const board = document.getElementById("board");

    for (let i = 0; i < 64; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.classList.add(
            (i + Math.floor(i / 8)) % 2 === 0 ? "white" : "black"
        );
        board.appendChild(square);
    }

    // Add chess piece logic here

    // Socket.io logic here
});
