// tslint:disable:no-console
// import * as styles from './index.css';
import * as d3 from 'd3';

// tslint:disable-next-line:no-var-requires
const jsonArr = require('./data/buildings.json');

const margin = { left: 100, top: 10, right: 10, bottom: 150 };
const height = 400 - margin.top - margin.bottom;
const width = 600 - margin.left - margin.right;

const svg = d3
    .select('#root')
    .append('svg')
    .attr('height', height + margin.top + margin.bottom)
    .attr('width', width + margin.left + margin.right);

const g = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`);

g.append('text')
    .attr('x', width / 2)
    .attr('y', height + 140)
    .attr('font-size', '20px')
    .attr('text-anchor', 'middle')
    .text(`The world's tallest buildings`);

g.append('text')
    .attr('x', -60)
    .attr('y', height / 2)
    .attr('font-size', '20px')
    .attr('text-anchor', 'middle')
    .attr('transform', `rotate(-90, -60, ${height / 2})`)
    .text('Height (m)');

const heightScale = d3
    .scaleLinear()
    .domain([0, +d3.max(jsonArr, (d: any) => d.height)!])
    .range([height, 0]);

const bandScale = d3
    .scaleBand()
    .domain(jsonArr.map((d: any) => d.name))
    .range([0, width])
    .paddingInner(0.3)
    .paddingOuter(0.3);

const xAxisCall = d3.axisBottom(bandScale);
g.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(xAxisCall)
    .selectAll('text')
    .attr('x', -5)
    .attr('y', 10)
    .attr('text-anchor', 'end')
    .attr('transform', 'rotate(-40)');

const yAxisCall = d3
    .axisLeft(heightScale)
    .ticks(10)
    .tickFormat(d => d + 'm');
g.append('g').call(yAxisCall);

g.selectAll('rect')
    .data(jsonArr)
    .enter()
    .append('rect')
    .attr('x', (d: any) => bandScale(d.name)!)
    .attr('y', (d: any) => heightScale(d.height))
    .attr('width', bandScale.bandwidth())
    .attr('height', (d: any) => height - heightScale(d.height))
    .attr('fill', 'grey');
