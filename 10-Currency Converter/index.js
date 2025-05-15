// Replace 'YOUR_API_KEY' with your Open Exchange Rates API key
const apiKey = "YOUR_API_KEY";
const apiUrl = `https://open.er-api.com/v6/latest/${apiKey}`;

// Fetch currency data and populate dropdowns
fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        const currencies = Object.keys(data.rates);
        const fromCurrencySelect = document.getElementById("fromCurrency");
        const toCurrencySelect = document.getElementById("toCurrency");

        currencies.forEach((currency) => {
            const option1 = document.createElement("option");
            option1.value = currency;
            option1.text = currency;
            fromCurrencySelect.add(option1);

            const option2 = document.createElement("option");
            option2.value = currency;
            option2.text = currency;
            toCurrencySelect.add(option2);
        });
    });

// Function to convert currency
function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (amount === "" || isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    const conversionUrl = `https://open.er-api.com/v6/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}&apikey=${apiKey}`;

    fetch(conversionUrl)
        .then((response) => response.json())
        .then((data) => {
            const result = data.result.toFixed(2);
            document.getElementById(
                "result"
            ).innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
        })
        .catch((error) => {
            console.error("Error converting currency:", error);
            alert("Error converting currency. Please try again later.");
        });
}
