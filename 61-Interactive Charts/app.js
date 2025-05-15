// Sample data
const data = [
    { x: 10, y: 20 },
    { x: 30, y: 40 },
    { x: 50, y: 60 },
    { x: 70, y: 80 },
];

// Set up the chart dimensions
const margin = { top: 20, right: 20, bottom: 30, left: 40 };
const width = 800 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;

// Create an SVG container
const svg = d3
    .select("#chart-container")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Create scales for x and y axes
const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.x)])
    .range([0, width]);
const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.y)])
    .range([height, 0]);

// Create x and y axes
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

// Append x and y axes to the SVG container
svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

svg.append("g").attr("class", "y-axis").call(yAxis);

// Create circles for the data points
svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => xScale(d.x))
    .attr("cy", (d) => yScale(d.y))
    .attr("r", 5)
    .attr("fill", "steelblue");

// Add tooltips for data points
svg.selectAll("circle")
    .on("mouseover", function (event, d) {
        const xPos = parseFloat(d3.select(this).attr("cx"));
        const yPos = parseFloat(d3.select(this).attr("cy"));

        svg.append("text")
            .attr("id", "tooltip")
            .attr("x", xPos)
            .attr("y", yPos - 10)
            .attr("text-anchor", "middle")
            .attr("font-family", "sans-serif")
            .attr("font-size", "12px")
            .attr("font-weight", "bold")
            .attr("fill", "black")
            .text(`(${d.x}, ${d.y})`);
    })
    .on("mouseout", function () {
        d3.select("#tooltip").remove();
    });
