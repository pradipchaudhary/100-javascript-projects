// Sample geographical data
const data = [
    { name: "Location 1", lat: 37.7749, lon: -122.4194, value: 25 },
    { name: "Location 2", lat: 34.0522, lon: -118.2437, value: 50 },
    { name: "Location 3", lat: 40.7128, lon: -74.006, value: 75 },
    // Add more data as needed
];

// Initialize the map
const map = L.map("map").setView([37.7749, -122.4194], 4);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Create markers and bind popup with data
data.forEach((d) => {
    const marker = L.marker([d.lat, d.lon]).addTo(map);
    marker
        .bindPopup(`<strong>${d.name}</strong><br>Value: ${d.value}`)
        .openPopup();
});

// Create a legend
const legend = L.control({ position: "bottomright" });

legend.onAdd = function (map) {
    const div = L.DomUtil.create("div", "info legend");
    const grades = [0, 25, 50, 75];
    const colors = ["#FFEDA0", "#FED976", "#FEB24C", "#FD8D3C"];

    for (let i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' +
            colors[i] +
            '"></i> ' +
            grades[i] +
            (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
    }

    return div;
};

legend.addTo(map);
