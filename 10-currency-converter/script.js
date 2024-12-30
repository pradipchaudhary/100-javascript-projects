// Fetch currency options from the API
async function fetchCurrencies() {
   const response = await fetch("https://open.er-api.com/v6/latest");
   const data = await response.json();
   const currencies = Object.keys(data.rates);

   const fromCurrencySelect = document.getElementById("fromCurrency");
   const toCurrencySelect = document.getElementById("toCurrency");

   currencies.forEach((currency) => {
      const option1 = document.createElement("option");
      const option2 = document.createElement("option");

      option1.value = currency;
      option1.text = currency;

      option2.value = currency;
      option2.text = currency;

      fromCurrencySelect.add(option1);
      toCurrencySelect.add(option2);
   });
}

// Conversion function
async function convert() {
   const amount = document.getElementById("amount").value;
   const fromCurrency = document.getElementById("fromCurrency").value;
   const toCurrency = document.getElementById("toCurrency").value;

   const resultDiv = document.getElementById("result");
   const errorDiv = document.getElementById("error");

   try {
      const response = await fetch(`https://open.er-api.com/v6/latest`);
      const data = await response.json();

      const exchangeRate = data.rates[toCurrency] / data.rates[fromCurrency];
      const convertedAmount = (amount * exchangeRate).toFixed(2);

      resultDiv.innerHTML = `${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}`;
      errorDiv.innerHTML = "";
   } catch (error) {
      resultDiv.innerHTML = "";
      errorDiv.innerHTML =
         "Error fetching exchange rates. Please try again later.";
   }
}

// Initialize the app
fetchCurrencies();
