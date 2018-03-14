// Data and bar names

const data = [1, 2, 3, 4, 5];
const barNames = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

// We need a little margin outside of our chart.
// Otherwise, the y axis labels will appear off-screen

const margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50,
};

// Initialize SVG and group elements.
// These elements don't yet have a width and height.
// We set that in the function below.

const svg = d3.select('#chart').append('svg');
const chartGroup = svg.append('g');

// Initialize our y and x scale functions, waiting to set the
// range until we know the height of the screen

yScale = d3.scaleLinear().domain([0, d3.max(data)]);

xScale = d3
  .scaleBand()
  .domain(barNames)
  .padding(0.1);

// Initialize our x and y axes, again not setting the
// width and height until we know the dimensions of the page

xAxis = d3.axisBottom(xScale);
yAxis = d3.axisLeft(yScale);

xAxisGroup = chartGroup.append('g');
yAxisGroup = chartGroup.append('g');

// Bind our data to rectangles (bars), waiting to
// set the dimensions and positions below

const bars = chartGroup
  .append('g')
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .classed('bar', true);

// Given a screen width, sets the dimensions and positions
// of each part of the chart accordingly

function renderChart(width) {
  const height = width;
  svg.attr('width', width).attr('height', height);

  const chartWidth = width - margin.left - margin.right;

  // This has the effect of always keeping the ratio between height
  // and width the same
  const chartHeight = height * 0.7;

  chartGroup
    .attr('width', chartWidth)
    .attr('height', chartHeight)
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  yScale.range([chartHeight, 0]);
  xScale.range([0, chartWidth]);

  xAxisGroup.attr('transform', `translate(0, ${chartHeight})`).call(xAxis);

  yAxisGroup.call(yAxis);

  bars
    .attr('width', xScale.bandwidth())
    .attr('height', d => chartHeight - yScale(d))
    .attr('x', (d, i) => xScale(barNames[i]))
    .attr('y', d => yScale(d));
}

// Render chart once, the first time we load the page,
// passing in the width of the browser screen

renderChart(window.innerWidth);

// The "resize" event will not fire for specific elements,
// only when the browser itself is resized. Therefore, we have
// to add an event listener on the global "window" object.
//
// https://developer.mozilla.org/en-US/docs/Web/Events/resize

window.addEventListener('resize', () => {
  renderChart(window.innerWidth, window.innerHeight);
});
