import { scaleOrdinal } from 'd3-scale';
import { select, Selection } from 'd3-selection';
import { pie, arc, PieArcDatum } from 'd3-shape';
import { schemeSet3 } from 'd3-scale-chromatic';
import React from 'react';
import { transition } from 'd3-transition';
import { isEqual } from 'lodash-es';
import tippy, { followCursor } from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const defaultOption = {
  width: 600,
  height: 600,
  paddingLeft: 100,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 100,
  innerRadius: 0,
};

export type PieChartDataType = { name: string; value: number }[];
export type PieChartOption = Partial<typeof defaultOption>;

export const usePieChart = (
  ref: React.RefObject<HTMLElement | null>,
  data: PieChartDataType,
  option: PieChartOption = {}
) => {
  const mergedOption = { ...defaultOption, ...option };
  const optionRef = React.useRef(mergedOption);

  const {
    width,
    height,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    innerRadius,
  } = mergedOption;

  const pieSliceRef = React.useRef<Selection<
    SVGGElement,
    unknown,
    null,
    undefined
  > | null>(null);

  const legendGroupRef = React.useRef<Selection<
    SVGGElement,
    any,
    any,
    any
  > | null>(null);

  const legendGroupWidth = 200;
  const pieWidth = width - paddingLeft - paddingRight - legendGroupWidth;
  const pieHeight = height - paddingTop - paddingBottom;
  const outerRadius = Math.min(pieWidth, pieHeight) / 2;

  const reloadSvg = () => {
    if (ref.current === null) {
      return;
    }

    const centerX = paddingLeft + outerRadius;
    const centerY = paddingTop + outerRadius;

    select(ref.current).selectAll('svg').remove();

    const svg = select(ref.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    pieSliceRef.current = svg
      .append('g')
      .attr('transform', `translate(${centerX}, ${centerY})`);

    legendGroupRef.current = svg
      .append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(${centerX + outerRadius + 10}, 30)`);
  };

  const render = () => {
    if (pieSliceRef.current === null || legendGroupRef.current === null) {
      return;
    }
    const pieGen = pie<PieChartDataType[0]>()
      .sort(null)
      .value((d) => d.value);
    const arcPath = arc<PieArcDatum<PieChartDataType[0]>>()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);

    const colorScale = scaleOrdinal(schemeSet3).domain(data.map((d) => d.name));

    const t = transition().duration(300);

    const percentageCal = (d: PieArcDatum<PieChartDataType[0]>) =>
      `${(
        (d.data.value * 100) /
        data.reduce((prev, curr) => prev + curr.value, 0)
      ).toFixed(1)} % `;

    pieSliceRef.current
      .selectAll('g')
      .data(pieGen(data))
      .join(
        function (enter) {
          const group = enter
            .append('g')
            .attr('data-tippy-content', (d) => d.data.name)
            .call((sel) =>
              tippy(sel.nodes(), {
                duration: 0,
                followCursor: true,
                plugins: [followCursor],
                offset: [10, 20],
                trigger: 'mouseenter',
              })
            );

          group
            .append('path')
            .attr('fill', (d) => colorScale(d.data.name))
            .transition(t)
            .attr('d', arcPath);

          group
            .append('text')
            .text(percentageCal)
            .attr('text-anchor', 'middle')
            .attr('font-size', 15)
            .transition(t)
            .attr('transform', (d) => `translate(${arcPath.centroid(d)})`);

          return group;
        },
        (update) => {
          // for update transition
          update
            .selectAll('path')
            .data((d) => {
              return [d];
            })
            .transition(t)
            .attr('d', (d) => arcPath(d));
          update
            .selectAll('text')
            .data((d) => [d])
            .transition(t)
            .text(percentageCal)
            .attr('transform', (d) => `translate(${arcPath.centroid(d)})`);
          return update;
        } // update existing element
        // (exit) => exit.remove()
      );

    legendGroupRef.current
      .selectAll('g')
      .data(data)
      .join(
        (enter) => {
          const group = enter.append('g');
          group
            .append('rect')
            .attr('x', 0)
            .attr('y', (d, i) => i * (20 + 5))
            .attr('width', 30)
            .attr('height', 20)
            .attr('fill', (d) => colorScale(d.name));
          group
            .append('text')
            .attr('x', 35)
            .attr('y', (d, i) => i * (20 + 5) + 13)
            .text((d) => d.name);
          return group;
        },
        (update) => update,
        (exit) => exit.remove()
      );
  };

  React.useEffect(() => {
    reloadSvg();
  }, []);

  React.useEffect(() => {
    if (isEqual(mergedOption, optionRef.current)) {
      return;
    }
    reloadSvg();
    optionRef.current = mergedOption;
  }, [mergedOption]);

  React.useEffect(() => {
    render();
  }, [data, ref, ref.current, mergedOption]);
};
