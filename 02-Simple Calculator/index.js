document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    let currentInput = "";
    let operator = "";
    let previousInput = "";

    buttons.forEach((button) => {
        button.addEventListener("click", handleButtonClick);
    });

    function handleButtonClick(e) {
        const buttonValue = e.target.textContent;

        if (!isNaN(buttonValue) || buttonValue === ".") {
            currentInput += buttonValue;
        } else if (buttonValue === "C") {
            clearCalculator();
        } else if (buttonValue === "=") {
            performCalculation();
        } else {
            handleOperator(buttonValue);
        }

        updateDisplay();
    }

    function handleOperator(op) {
        if (operator && currentInput) {
            performCalculation();
            previousInput = currentInput;
            currentInput = "";
        } else {
            previousInput = currentInput || "0";
            currentInput = "";
        }

        operator = op;
    }

    function performCalculation() {
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);

        if (!isNaN(num1) && !isNaN(num2)) {
            switch (operator) {
                case "+":
                    currentInput = (num1 + num2).toString();
                    break;
                case "-":
                    currentInput = (num1 - num2).toString();
                    break;
                case "*":
                    currentInput = (num1 * num2).toString();
                    break;
                case "/":
                    currentInput = (num1 / num2).toString();
                    break;
                default:
                    break;
            }
        }

        operator = "";
    }

    function clearCalculator() {
        currentInput = "";
        operator = "";
        previousInput = "";
    }

    function updateDisplay() {
        display.textContent = currentInput || "0";
    }
});
