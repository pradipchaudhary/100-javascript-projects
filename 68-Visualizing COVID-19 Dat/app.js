// Function to fetch COVID-19 data from Covid19API
async function fetchCovidData() {
    const apiUrl =
        "https://api.covid19api.com/dayone/country/{COUNTRY_CODE}/status/confirmed/live";

    try {
        const response = await fetch(
            apiUrl.replace("{COUNTRY_CODE}", "your_country_code")
        );
        const data = await response.json();

        if (data.length > 0) {
            return data;
        } else {
            console.error("Invalid data received from the API.");
            return null;
        }
    } catch (error) {
        console.error("Error fetching COVID-19 data:", error);
        return null;
    }
}

// Function to process and visualize COVID-19 data using Chart.js
async function visualizeCovidData() {
    const covidData = await fetchCovidData();

    if (!covidData) {
        alert("Error fetching COVID-19 data. Please try again later.");
        return;
    }

    const dates = covidData.map((entry) => new Date(entry.Date));
    const cases = covidData.map((entry) => entry.Cases);

    const ctx = document.getElementById("covidChart").getContext("2d");

    // Clear previous chart
    if (window.covidChart) {
        window.covidChart.destroy();
    }

    // Create new chart
    window.covidChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: dates,
            datasets: [
                {
                    label: "Confirmed Cases",
                    data: cases,
                    borderColor: "#2196F3",
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
                    text: "COVID-19 Confirmed Cases Over Time",
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
// visualizeCovidData();
