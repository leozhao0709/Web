import React from 'react';
import classNames from 'classnames';
import {
  PieChartDataType,
  PieChartOption,
  usePieChart,
} from '../charts/pieChart';

interface PieChartProps
  extends React.HTMLAttributes<SVGElement>,
    PieChartOption {
  data: PieChartDataType;
}

const PieChart: React.FC<PieChartProps> = (props: PieChartProps) => {
  const { className, data, ...restProps } = props;
  const ref = React.useRef<HTMLDivElement>(null);
  usePieChart(ref, data, restProps);

  return <div ref={ref} className={classNames(className)}></div>;
};

PieChart.defaultProps = {};

export default React.memo(PieChart);
