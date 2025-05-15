// Sample network data
const networkData = [
    {
        timestamp: new Date(),
        source: "192.168.0.1",
        destination: "192.168.0.2",
        size: 150,
    },
    {
        timestamp: new Date(),
        source: "192.168.0.2",
        destination: "192.168.0.3",
        size: 200,
    },
    // Add more data as needed
];

// Parse timestamps
networkData.forEach((d) => {
    d.timestamp = new Date(d.timestamp);
});

// Sort data by timestamp
networkData.sort((a, b) => a.timestamp - b.timestamp);

// Create a line chart to represent network traffic over time
const margin = { top: 20, right: 20, bottom: 30, left: 40 };
const width = 800 - margin.left - margin.right;
const height = 300 - margin.top - margin.bottom;

const xScale = d3
    .scaleTime()
    .domain(d3.extent(networkData, (d) => d.timestamp))
    .range([0, width]);
const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(networkData, (d) => d.size)])
    .range([height, 0]);

const line = d3
    .line()
    .x((d) => xScale(d.timestamp))
    .y((d) => yScale(d.size));

const svg = d3
    .select("#traffic-chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("path").data([networkData]).attr("class", "line").attr("d", line);

// Display packet information in a list
const packetList = d3
    .select("#packet-list-ul")
    .selectAll("li")
    .data(networkData)
    .enter()
    .append("li")
    .html(
        (d) =>
            `<strong>${d.timestamp.toLocaleTimeString()}</strong>: ${
                d.source
            } to ${d.destination}, Size: ${d.size} bytes`
    );
