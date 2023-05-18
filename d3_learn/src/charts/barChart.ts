import { select, Selection } from 'd3-selection';
import { scaleBand, scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { axisBottom, axisLeft } from 'd3-axis';
import { transition } from 'd3-transition';
import React from 'react';
import { isEqual } from 'lodash-es';
import tippy, { followCursor } from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const defaultOption = {
  width: 600,
  height: 600,
  paddingLeft: 200,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 200,
  barColor: 'orange',
};

export type BarChartDataType = { name: string; value: number }[];
export type BarChartOption = Partial<typeof defaultOption>;

export const useBarChart = (
  ref: React.RefObject<HTMLElement | null>,
  data: BarChartDataType,
  option: BarChartOption = {}
) => {
  const mergedOption = { ...defaultOption, ...option };
  const optionRef = React.useRef(mergedOption);
  const barsRef = React.useRef<Selection<
    SVGGElement,
    unknown,
    null,
    undefined
  > | null>(null);
  const xAxisGroupRef = React.useRef<Selection<
    SVGGElement,
    unknown,
    null,
    undefined
  > | null>(null);
  const yAxisGroupRef = React.useRef<Selection<
    SVGGElement,
    unknown,
    null,
    undefined
  > | null>(null);

  const {
    width,
    height,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    barColor,
  } = mergedOption;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  const reloadSvg = () => {
    // static svg part, not related to data
    if (ref.current === null) {
      return;
    }
    select(ref.current).selectAll('svg').remove();
    const svg = select(ref.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const group = svg
      .append('g')
      .attr('transform', `translate(${paddingLeft}, ${paddingTop})`);

    // barsref
    barsRef.current = group.append('g');

    // axis
    xAxisGroupRef.current = group
      .append('g')
      .attr('transform', `translate(0, ${chartHeight})`);

    yAxisGroupRef.current = group.append('g');

    // label
    group
      .append('text')
      .attr('x', chartWidth / 2)
      .attr('y', chartHeight + 50)
      .attr('font-size', '20px')
      .attr('text-anchor', 'middle')
      .text('This is X label');

    group
      .append('text')
      .attr('x', -chartHeight / 2)
      .attr('y', -40)
      .attr('text-anchor', 'middle')
      .attr('transform', 'rotate(-90)')
      .attr('font-size', '20px')
      .text('This is Y label');
  };

  const renderData = () => {
    // related to data
    if (
      ref.current === null ||
      barsRef.current === null ||
      xAxisGroupRef.current === null ||
      yAxisGroupRef.current === null
    ) {
      return;
    }

    const xScale = scaleBand()
      .range([0, chartWidth])
      .paddingInner(0.2)
      .paddingOuter(0.2)
      .domain(data.map((d) => d.name));

    const yScale = scaleLinear()
      .range([0, chartHeight])
      .domain([max(data.map((d) => d.value))!, 0]);

    // transition
    const t = transition().duration(200);

    barsRef.current
      .selectAll('g')
      .data(data)
      .join(
        (enter) => {
          const group = enter
            .append('g')
            .attr('data-tippy-content', (d) => d.name)
            .call((sel) =>
              tippy(sel.nodes(), {
                duration: 0,
                // followCursor: true,
                plugins: [followCursor],
                trigger: 'mouseenter',
              })
            );
          group
            .append('rect')
            .attr('width', xScale.bandwidth())
            .attr('y', chartHeight)
            .attr('x', (d) => xScale(d.name)!)
            .attr('fill', barColor)
            .transition(t)
            .attr('height', (d) => chartHeight - yScale(d.value))
            .attr('y', (d) => {
              return yScale(d.value);
            });
          group
            .append('text')
            .attr('class', 'label')
            .attr('text-anchor', 'middle')
            .attr('x', (d) => xScale(d.name)! + xScale.bandwidth() / 2)
            .attr('y', chartHeight)
            .attr('fill', '#fff')
            .transition(t)
            .attr('y', (d) => yScale(d.value) + 20)
            .text((d) => d.value);

          return group;
        },
        (update) => {
          update
            .selectAll('rect')
            .data((d) => [d]) // update data
            .transition(t)
            .attr('height', (d) => chartHeight - yScale(d.value))
            .attr('y', (d) => {
              return yScale(d.value);
            });

          update
            .selectAll('text')
            .data((d) => [d])
            .transition(t)
            .attr('y', (d) => yScale(d.value) + 20)
            .text((d) => d.value);

          return update;
        }
      );

    // axis
    const xAxis = axisBottom(xScale);
    // .tickSize(-chartHeight); // for grid line
    xAxisGroupRef.current.call(xAxis);
    // .selectAll('line')
    // .style('stroke-dasharray', '3, 3'); // for grid line

    const yAxis = axisLeft(yScale).ticks(3);
    // .tickSize(-chartWidth);
    yAxisGroupRef.current.call(yAxis);
    // .selectAll('line')
    // .style('stroke-dasharray', '3, 3');
  };

  React.useEffect(() => {
    reloadSvg();
  }, [data.length]);

  React.useEffect(() => {
    if (isEqual(mergedOption, optionRef.current)) {
      return;
    }
    reloadSvg();
    optionRef.current = mergedOption;
  }, [mergedOption]);

  React.useEffect(() => {
    renderData();
  }, [data, ref, barsRef, xAxisGroupRef, yAxisGroupRef, mergedOption]);
};
