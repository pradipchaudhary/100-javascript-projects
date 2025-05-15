// Sample population density data
const populationData = [
    { location: [37.7749, -122.4194], population: 870887 },
    { location: [34.0522, -118.2437], population: 399975 },
    { location: [40.7128, -74.006], population: 8175133 },
    // Add more data as needed
];

// Create a Leaflet map
const map = L.map("map").setView([37.7749, -122.4194], 4);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Add population density circles to the map
populationData.forEach((entry) => {
    const circle = L.circle(entry.location, {
        color: "red",
        fillColor: "red",
        fillOpacity: 0.5,
        radius: Math.sqrt(entry.population) * 100,
    }).addTo(map);

    // Add a popup with population information
    circle.bindPopup(`Population: ${entry.population}`);
});
