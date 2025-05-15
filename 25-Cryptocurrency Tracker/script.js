const cryptoListElement = document.getElementById("cryptoList");

async function fetchCryptocurrencyData() {
    try {
        const response = await fetch(
            "https://api.coingecko.com/api/v3/coins/markets",
            {
                method: "GET",
                params: {
                    vs_currency: "usd",
                    order: "market_cap_desc",
                    per_page: 10,
                    page: 1,
                    sparkline: false,
                },
            }
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const cryptoData = await response.json();
        displayCryptocurrencies(cryptoData);
    } catch (error) {
        console.error("Error fetching cryptocurrency data:", error.message);
    }
}

function displayCryptocurrencies(data) {
    data.forEach((crypto) => {
        const cryptoElement = document.createElement("div");
        cryptoElement.classList.add("crypto");

        cryptoElement.innerHTML = `
            <h3>${crypto.name} (${crypto.symbol.toUpperCase()})</h3>
            <p>Price: $${crypto.current_price.toFixed(2)}</p>
            <p>Market Cap: $${crypto.market_cap.toLocaleString()}</p>
            <p>24h Change: ${crypto.price_change_percentage_24h.toFixed(2)}%</p>
        `;

        cryptoListElement.appendChild(cryptoElement);
    });
}

// Fetch cryptocurrency data when the page loads
window.onload = fetchCryptocurrencyData;
