document
    .getElementById("analyzeButton")
    .addEventListener("click", analyzePerformance);

function analyzePerformance() {
    const startTime = performance.now();

    // Simulate a network request (you can replace this with an actual request)
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((data) => {
            const endTime = performance.now();
            const elapsedTime = endTime - startTime;

            displayResult(elapsedTime);
        })
        .catch((error) => {
            console.error("Error:", error);
            displayResult("Error");
        });
}

function displayResult(time) {
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = `Network request completed in ${time.toFixed(
        2
    )} milliseconds.`;
}
