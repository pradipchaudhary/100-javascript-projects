document.addEventListener("DOMContentLoaded", function () {
    const ingredientInput = document.getElementById("ingredientInput");
    const searchButton = document.getElementById("searchButton");
    const recipeContainer = document.getElementById("recipeContainer");

    searchButton.addEventListener("click", searchRecipes);

    function searchRecipes() {
        const ingredients = ingredientInput.value.trim();

        if (ingredients === "") {
            alert("Please enter ingredients.");
            return;
        }

        // Replace 'YOUR_API_KEY' with your actual Spoonacular API key
        const apiKey = "YOUR_API_KEY";
        const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                displayRecipes(data);
            })
            .catch((error) => {
                console.error("Error fetching recipes:", error);
                recipeContainer.innerHTML =
                    "Failed to fetch recipes. Please try again.";
            });
    }

    function displayRecipes(recipes) {
        if (recipes.length === 0) {
            recipeContainer.innerHTML = "No recipes found.";
            return;
        }

        let recipeHtml = "<h2>Recipes:</h2>";
        recipeHtml += "<ul>";
        recipes.forEach((recipe) => {
            recipeHtml += `<li><strong>${recipe.title}</strong></li>`;
        });
        recipeHtml += "</ul>";

        recipeContainer.innerHTML = recipeHtml;
    }
});
