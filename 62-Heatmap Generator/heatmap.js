// Sample data for the heatmap
const data = [
    [0, 10, 20, 30, 40],
    [50, 60, 70, 80, 90],
    [100, 110, 120, 130, 140],
    [150, 160, 170, 180, 190],
    [200, 210, 220, 230, 240],
];

// Set up the heatmap dimensions
const margin = { top: 20, right: 20, bottom: 30, left: 40 };
const width = 800 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;

// Create an SVG container
const svg = d3
    .select("#heatmap-container")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Create color scale
const colorScale = d3
    .scaleSequential(d3.interpolateViridis)
    .domain([d3.min(data, (d) => d3.min(d)), d3.max(data, (d) => d3.max(d))]);

// Create the heatmap rectangles
svg.selectAll("rect")
    .data(data)
    .enter()
    .selectAll("rect")
    .data((d) => d.map((value) => ({ value })))
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * (width / data[0].length))
    .attr("y", (d, i, j) => j * (height / data.length))
    .attr("width", width / data[0].length)
    .attr("height", height / data.length)
    .style("fill", (d) => colorScale(d.value));

// Add labels to the heatmap
svg.selectAll("text")
    .data(data)
    .enter()
    .selectAll("text")
    .data((d, i) => d.map((value) => ({ value, rowIndex: i })))
    .enter()
    .append("text")
    .text((d) => d.value)
    .attr(
        "x",
        (d, i) => i * (width / data[0].length) + width / (2 * data[0].length)
    )
    .attr(
        "y",
        (d, i, j) => j * (height / data.length) + height / (2 * data.length)
    )
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("fill", "white");

// Add a legend
const legend = svg
    .append("g")
    .attr("transform", "translate(" + (width + 10) + "," + 0 + ")");

const legendScale = d3
    .scaleLinear()
    .domain([d3.min(data, (d) => d3.min(d)), d3.max(data, (d) => d3.max(d))])
    .range([height, 0]);

const legendAxis = d3.axisRight(legendScale);

legend.append("g").call(legendAxis);
