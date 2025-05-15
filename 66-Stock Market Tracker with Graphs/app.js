// Function to fetch stock data from Alpha Vantage API
async function getStockData() {
    const symbolInput = document.getElementById("symbol");
    const symbol = symbolInput.value.toUpperCase();

    if (!symbol) {
        alert("Please enter a stock symbol.");
        return;
    }

    const apiKey = "YOUR_ALPHA_VANTAGE_API_KEY";
    const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data["Time Series (Daily)"]) {
            const stockData = parseStockData(data["Time Series (Daily)"]);
            updateChart(stockData, symbol);
        } else {
            alert("Invalid stock symbol or API error. Please try again.");
        }
    } catch (error) {
        console.error("Error fetching stock data:", error);
    }
}

// Function to parse stock data for Chart.js
function parseStockData(timeSeries) {
    const dates = Object.keys(timeSeries);
    const prices = dates.map((date) =>
        parseFloat(timeSeries[date]["4. close"])
    );

    return { dates, prices };
}

// Function to update Chart.js chart with stock data
function updateChart(stockData, symbol) {
    const ctx = document.getElementById("stockChart").getContext("2d");

    // Clear previous chart
    if (window.stockChart) {
        window.stockChart.destroy();
    }

    // Create new chart
    window.stockChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: stockData.dates,
            datasets: [
                {
                    label: symbol,
                    data: stockData.prices,
                    borderColor: "#2196F3",
                    borderWidth: 2,
                    fill: false,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: "time",
                    time: {
                        unit: "day",
                    },
                },
                y: {
                    beginAtZero: true,
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: "Stock Price Over Time",
                },
                legend: {
                    display: true,
                    position: "bottom",
                },
            },
        },
    });
}

// Initial load (optional)
// getStockData();
