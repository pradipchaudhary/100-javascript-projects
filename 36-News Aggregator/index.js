// Replace 'YOUR_NEWS_API_KEY' with your actual news API key
const apiKey = "YOUR_NEWS_API_KEY";
const newsApiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

function fetchNews() {
    fetch(newsApiUrl)
        .then((response) => response.json())
        .then((data) => displayNews(data.articles))
        .catch((error) => console.error("Error fetching news:", error));
}

function displayNews(articles) {
    const newsContainer = document.getElementById("news-container");

    articles.forEach((article) => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("article");

        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;

        newsContainer.appendChild(articleElement);
    });
}

// Fetch news when the page loads
document.addEventListener("DOMContentLoaded", fetchNews);
