const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";

function getWeather() {
    const cityInput = document.getElementById("city-input").value;

    if (cityInput.trim() !== "") {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                displayWeather(data);
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
    } else {
        alert("Please enter a city name.");
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById("weather-info");
    const { name, main, weather } = data;

    weatherInfo.innerHTML = `
                <h2>${name}</h2>
                <p>Temperature: ${main.temp} °C</p>
                <p>Weather: ${weather[0].description}</p>
            `;
}
