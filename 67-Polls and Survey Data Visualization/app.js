const surveyData = {
    question: "",
    options: [],
    votes: [],
};

// Function to add an option to the survey
function addOption() {
    const optionInput = prompt("Enter option:");
    if (optionInput) {
        surveyData.options.push(optionInput);
        updateOptionsList();
    }
}

// Function to update the options list in the HTML
function updateOptionsList() {
    const optionsList = document.getElementById("options-list");
    optionsList.innerHTML = "";

    surveyData.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = `${option} (${surveyData.votes[index] || 0} votes)`;
        optionsList.appendChild(li);
    });
}

// Function to submit the survey and visualize results
function submitSurvey() {
    surveyData.question = document.getElementById("question").value;
    if (!surveyData.question || surveyData.options.length < 2) {
        alert("Please enter a valid question and at least two options.");
        return;
    }

    // Reset votes
    surveyData.votes = Array(surveyData.options.length).fill(0);

    // Update options list
    updateOptionsList();

    // Draw chart
    drawChart();
}

// Function to draw the chart using Chart.js
function drawChart() {
    const ctx = document.getElementById("chart").getContext("2d");

    // Clear previous chart
    if (window.myChart) {
        window.myChart.destroy();
    }

    // Create new chart
    window.myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: surveyData.options,
            datasets: [
                {
                    label: "Votes",
                    data: surveyData.votes,
                    backgroundColor: "#2196F3",
                    borderColor: "#2196F3",
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    ticks: {
                        autoSkip: false,
                    },
                },
                y: {
                    beginAtZero: true,
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: surveyData.question,
                },
                legend: {
                    display: false,
                },
            },
        },
    });
}

// Initial load (optional)
// submitSurvey();
