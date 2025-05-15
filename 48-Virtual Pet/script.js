let happiness = 50;
let hunger = 50;
let energy = 50;

function updateStatus() {
    const statusElement = document.getElementById("status");
    statusElement.textContent = `Happiness: ${happiness} | Hunger: ${hunger} | Energy: ${energy}`;

    const petElement = document.getElementById("pet");

    if (happiness < 30 || hunger > 70 || energy < 30) {
        petElement.style.backgroundColor = "#ff3300"; // Change color if pet is not happy
    } else {
        petElement.style.backgroundColor = "#ffcc66";
    }
}

function feed() {
    hunger -= 10;
    happiness += 5;
    updateStatus();
}

function play() {
    happiness += 10;
    energy -= 5;
    updateStatus();
}

function sleep() {
    energy += 20;
    happiness -= 10;
    updateStatus();
}

// Initial status update
updateStatus();
