const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars",
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        correctAnswer: "Blue Whale",
    },
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-button");
const resultElement = document.getElementById("result");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.textContent = `${index + 1}. ${option}`;
        optionElement.addEventListener("click", () => selectOption(index));
        optionsElement.appendChild(optionElement);
    });
}

function selectOption(optionIndex) {
    const selectedOption = questions[currentQuestionIndex].options[optionIndex];
    submitButton.disabled = false;
    submitButton.addEventListener("click", () => checkAnswer(selectedOption));
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const isCorrect = selectedOption === correctAnswer;

    resultElement.textContent = isCorrect
        ? "Correct!"
        : `Incorrect! The correct answer is ${correctAnswer}.`;

    currentQuestionIndex++;
    submitButton.disabled = true;

    if (currentQuestionIndex < questions.length) {
        setTimeout(() => {
            resultElement.textContent = "";
            displayQuestion();
        }, 1500);
    } else {
        resultElement.textContent = "Quiz completed! 🎉";
        submitButton.style.display = "none";
    }
}

submitButton.addEventListener("click", () => displayQuestion());

// Initial display of the first question
displayQuestion();
