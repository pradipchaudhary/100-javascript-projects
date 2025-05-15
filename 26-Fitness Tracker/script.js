document.addEventListener("DOMContentLoaded", function () {
    // Initialize an empty array to store entries
    let entries = [];

    function addEntry() {
        // Get input values
        const activity = document.getElementById("activity").value;
        const duration = document.getElementById("duration").value;

        // Validate input
        if (activity.trim() === "" || isNaN(duration) || duration <= 0) {
            alert("Please enter valid data.");
            return;
        }

        // Create entry object
        const entry = {
            activity: activity,
            duration: duration,
        };

        // Add entry to the array
        entries.push(entry);

        // Update entries list
        updateEntriesList();

        // Clear input fields
        document.getElementById("activity").value = "";
        document.getElementById("duration").value = "";
    }

    function updateEntriesList() {
        const entriesList = document.getElementById("entries-list");

        // Clear existing entries
        entriesList.innerHTML = "";

        // Loop through entries and create list items
        entries.forEach((entry) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${entry.activity} - ${entry.duration} minutes`;
            entriesList.appendChild(listItem);
        });
    }

    // Attach addEntry function to the button click event
    document.querySelector("button").addEventListener("click", addEntry);
});
