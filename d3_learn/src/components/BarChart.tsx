import React from 'react';
import classNames from 'classnames';
import {
  BarChartDataType,
  BarChartOption,
  useBarChart,
} from '../charts/barChart';

interface BarChartProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BarChartOption {
  data: BarChartDataType;
}

const BarChart: React.FC<BarChartProps> = (props: BarChartProps) => {
  const { className, data, ...restProps } = props;
  const ref = React.useRef<HTMLDivElement>(null);
  useBarChart(ref, data, restProps);

  return <div ref={ref} className={classNames(className)}></div>;
};

BarChart.defaultProps = {};

export default React.memo(BarChart);
