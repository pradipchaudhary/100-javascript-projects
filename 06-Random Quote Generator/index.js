// DOM Element
const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=happiness`;
const apiKey = "MNemEr9THSVTCxISru9Snw==VJeeHWGzXAbYm3tw";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const getJoke = async () => {
    try {
        quoteEl.innerText = "Loading...";
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        const quote = data[0].quote;
        console.log(quote);
        quoteEl.innerText = quote;
    } catch (error) {
        quoteEl.innerText = "An error happened, try again later.";
        console.log(error);
    }
};
getJoke();

btnEl.addEventListener("click", getJoke);
