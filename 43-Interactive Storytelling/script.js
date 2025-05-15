const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

function makeChoice(choice) {
    if (choice === 1) {
        storyElement.textContent =
            "You chose Choice 1. This is the next part of the story for Choice 1.";
        displayChoices(["Next Option 1", "Next Option 2"]);
    } else if (choice === 2) {
        storyElement.textContent =
            "You chose Choice 2. This is the next part of the story for Choice 2.";
        displayChoices(["Option A", "Option B"]);
    }
}

function displayChoices(choices) {
    choicesElement.innerHTML = "";
    for (let i = 0; i < choices.length; i++) {
        const button = document.createElement("button");
        button.textContent = choices[i];
        button.onclick = function () {
            makeChoice(i + 1);
        };
        choicesElement.appendChild(button);
    }
}
