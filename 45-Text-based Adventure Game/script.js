const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

function makeChoice(choice) {
    switch (choice) {
        case 1:
            storyElement.textContent = "You explore the room and find a key.";
            displayChoices(["Take the key", "Leave the key"]);
            break;
        case 2:
            storyElement.textContent =
                "You take the key and find a locked door.";
            displayChoices(["Unlock the door", "Ignore the door"]);
            break;
        case 3:
            storyElement.textContent =
                "You unlock the door and discover a new room.";
            displayChoices(["Search the room", "Go back"]);
            break;
        case 4:
            storyElement.textContent = "You find a treasure chest in the room.";
            displayChoices(["Open the chest", "Leave the room"]);
            break;
        case 5:
            storyElement.textContent =
                "Congratulations! You found a valuable item in the chest.";
            displayChoices(["Play again"]);
            break;
        case 6:
            resetGame();
            break;
        default:
            break;
    }
}

function displayChoices(choices) {
    choicesElement.innerHTML = "";
    for (let i = 0; i < choices.length; i++) {
        const button = document.createElement("button");
        button.textContent = choices[i];
        button.onclick = function () {
            makeChoice(i + 2); // Choices start from index 2
        };
        choicesElement.appendChild(button);
    }
}

function resetGame() {
    storyElement.textContent = "You find yourself in a dark room...";
    displayChoices(["Explore"]);
}
