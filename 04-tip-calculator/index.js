// Select DOM elements
const tipForm = document.getElementById("tip-form");
const billAmountInput = document.getElementById("bill-amount");
const tipPercentageSelect = document.getElementById("tip-percentage");
const tipAmountDisplay = document.getElementById("tip-amount");
const totalAmountDisplay = document.getElementById("total-amount");

// Function to calculate the tip and total
function calculateTip(event) {
    event.preventDefault();

    const billAmount = parseFloat(billAmountInput.value);
    const tipPercentage = parseFloat(tipPercentageSelect.value);

    if (isNaN(billAmount) || billAmount <= 0) {
        alert("Please enter a valid bill amount.");
        return;
    }

    // Calculate tip and total
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    // Display results
    tipAmountDisplay.textContent = tipAmount.toFixed(2);
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
}

// Event listener for form submission
tipForm.addEventListener("submit", calculateTip);
