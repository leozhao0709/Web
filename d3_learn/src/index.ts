import * as d3Array from 'd3-array';
import * as d3Selection from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';
import db from './ts/firebaseSetup';
import * as d3Transition from 'd3-transition';
import * as d3Interpolate from 'd3-interpolate';
// import menuJson from './data/menu.json';

interface Menu {
  name: string;
  orders: number;
  id: string;
}

window.onload = async () => {
  const paddings = {
    top: 10,
    left: 100,
    right: 10,
    bottom: 100,
  };

  const svgWidth = 600;
  const svgHeight = 600;
  const containerHeight = svgHeight - paddings.top - paddings.bottom;
  const containerWidth = svgHeight - paddings.left - paddings.right;

  // scale
  let y = d3Scale.scaleLinear().range([containerHeight, 0]);
  let x = d3Scale.scaleBand().range([0, containerWidth]).paddingInner(0.2).paddingOuter(0.2);

  const container = d3Selection
    .select('body')
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)
    .append('g')
    .attr('transform', `translate(${paddings.left}, ${paddings.top})`);

  // x axis
  const xAxis = d3Axis.axisBottom(x);
  const xAxisGroup = container.append('g');

  xAxisGroup
    .attr('transform', `translate(0, ${containerHeight})`)
    .selectAll('text')
    .attr('x', -10)
    .attr('y', 5)
    .attr('text-anchor', 'end')
    .attr('transform', 'rotate(-40)');

  // y axis
  const yAxis = d3Axis
    .axisLeft(y)
    .ticks(3)
    .tickFormat((d) => `${d} orders`);

  const yAxisGroup = container.append('g');

  // x label
  container
    .append('text')
    .attr('x', containerWidth / 2)
    .attr('y', containerHeight + 100)
    .attr('font-size', '20px')
    .text('This is X label');

  // y label
  container
    .append('text')
    .attr('x', -containerHeight / 2)
    .attr('y', -60)
    .attr('text-anchor', 'middle')
    .attr('transform', 'rotate(-90)')
    .attr('font-size', '20px')
    .text('This is X label');

  const updateData = (menus: Menu[]) => {
    y = y.domain([0, d3Array.max(menus, (d) => d.orders) as number]);
    x = x.domain(menus.map((menu) => menu.name));

    // rects
    const update = container.selectAll<SVGRectElement, Menu>('rect').data(menus);

    update.exit().remove();

    // transition
    // as any is not good, but I don't find a good way to resolve this
    const t = d3Transition.transition().duration(1500) as any;
    const widthTween = (d) => {
      const i = d3Interpolate.interpolate(0, x.bandwidth());
      return function (t) {
        return i(t).toString();
      };
    };

    update
      .enter()
      .append('rect')
      .attr('width', 0)
      .attr('fill', 'orange')
      .attr('x', (d) => x(d.name)!)
      .attr('y', containerHeight)
      .merge(update)
      .transition(t)
      .attrTween('width', widthTween)
      .attr('y', (d) => y(d.orders))
      .attr('height', (d) => containerHeight - y(d.orders));

    // axis
    xAxisGroup.call(xAxis);
    yAxisGroup.call(yAxis);
  };

  let data: Menu[] = [];
  db.collection('dishes').onSnapshot((snapShot) => {
    snapShot.docChanges().forEach((change) => {
      const doc = { ...change.doc.data(), id: change.doc.id } as Menu;

      switch (change.type) {
        case 'added':
          data.push(doc);
          break;
        case 'modified': {
          const index = data.findIndex((item) => item.id == doc.id);
          data[index] = doc;
          break;
        }
        case 'removed':
          data = data.filter((item) => item.id !== doc.id);
          break;
        default:
          break;
      }
    });

    updateData(data);
  });
};
