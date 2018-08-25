// import * as styles from './index.css';
import * as d3 from 'd3';

// tslint:disable-next-line:no-var-requires
const jsonArr = require('./data/buildings.json');

// const data = [25, 20, 10, 12, 15];

const svg = d3
    .select('#root')
    .append('svg')
    .attr('height', 400)
    .attr('width', 400);

// const circles = svg.selectAll('circle').data(data);

// circles
//     .enter()
//     .append('circle')
//     .attr('cx', (d, i) => {
//         return i * 50 + 25;
//     })
//     .attr('cy', 25)
//     .attr('r', d => d)
//     .attr('fill', 'red');

// jsonArr.forEach((json: any) => {

// });

jsonArr.forEach((data: any, i: number) => {
    svg.append('rect')
        .attr('x', i * (25 + 10))
        .attr('y', 0)
        .attr('width', 25)
        .attr('height', +data.height)
        .attr('fill', 'grey');
});
