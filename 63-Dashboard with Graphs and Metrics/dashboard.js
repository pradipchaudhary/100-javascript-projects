// Sample data for charts and metrics
const data1 = [10, 20, 30, 40, 50];
const data2 = [50, 40, 30, 20, 10];

// Chart 1
const chart1 = d3
    .select("#chart1")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

const xScale1 = d3
    .scaleBand()
    .domain(d3.range(data1.length))
    .range([0, 300])
    .padding(0.1);

const yScale1 = d3
    .scaleLinear()
    .domain([0, d3.max(data1)])
    .range([0, 300]);

chart1
    .selectAll("rect")
    .data(data1)
    .enter()
    .append("rect")
    .attr("x", (d, i) => xScale1(i))
    .attr("y", (d) => 300 - yScale1(d))
    .attr("width", xScale1.bandwidth())
    .attr("height", (d) => yScale1(d))
    .attr("fill", "steelblue");

// Chart 2
const chart2 = d3
    .select("#chart2")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

const xScale2 = d3
    .scaleBand()
    .domain(d3.range(data2.length))
    .range([0, 300])
    .padding(0.1);

const yScale2 = d3
    .scaleLinear()
    .domain([0, d3.max(data2)])
    .range([0, 300]);

chart2
    .selectAll("rect")
    .data(data2)
    .enter()
    .append("rect")
    .attr("x", (d, i) => xScale2(i))
    .attr("y", (d) => 300 - yScale2(d))
    .attr("width", xScale2.bandwidth())
    .attr("height", (d) => yScale2(d))
    .attr("fill", "orange");

// Metric 1
const metric1 = d3.select("#value1").text(d3.mean(data1));

// Metric 2
const metric2 = d3.select("#value2").text(d3.mean(data2));
