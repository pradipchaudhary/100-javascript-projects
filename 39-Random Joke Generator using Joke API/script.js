document.addEventListener("DOMContentLoaded", function () {
    const jokeContainer = document.getElementById("joke-container");
    const jokeText = document.getElementById("joke-text");
    const getJokeBtn = document.getElementById("get-joke-btn");

    getJokeBtn.addEventListener("click", getJoke);

    function getJoke() {
        // Replace 'Any' with other categories if desired (e.g., 'Programming', 'Miscellaneous', etc.)
        const apiUrl = "https://v2.jokeapi.dev/joke/Any";

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    jokeText.textContent =
                        "Failed to fetch joke. Please try again.";
                } else {
                    if (data.type === "twopart") {
                        jokeText.textContent = `${data.setup}\n\n${data.delivery}`;
                    } else {
                        jokeText.textContent = data.joke;
                    }
                }
            })
            .catch((error) => {
                console.error("Error fetching joke:", error);
                jokeText.textContent =
                    "Failed to fetch joke. Please try again.";
            });
    }
});
