# Basic

## 1. append element using d3

Note using `data()` and `enter()` to collect data.

```js
import * as d3 from 'd3';

const data = [25, 20, 10, 12, 15];

const svg = d3
    .select('#root')
    .append('svg')
    .attr('height', 400)
    .attr('width', 400);

const circles = svg.selectAll('circle').data(data);

circles
    .enter()
    .append('circle')
    .attr('cx', (d, i) => {
        return i * 50 + 25;
    })
    .attr('cy', 25)
    .attr('r', d => d)
    .attr('fill', 'red');
```
