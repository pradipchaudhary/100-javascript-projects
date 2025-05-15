// Function to cache data in localStorage
function cacheData() {
    const dataInput = document.getElementById("dataInput");
    const cachedData =
        localStorage.getItem("cachedData") || "No data cached yet";

    // Get the input value
    const newData = dataInput.value.trim();

    // Update cached data in localStorage
    localStorage.setItem("cachedData", newData);

    // Update the displayed cached data
    document.getElementById(
        "cachedData"
    ).textContent = `Cached Data: ${newData}`;
}

// Initial load: Display cached data if available
window.onload = function () {
    const cachedData =
        localStorage.getItem("cachedData") || "No data cached yet";
    document.getElementById(
        "cachedData"
    ).textContent = `Cached Data: ${cachedData}`;
};
