import { EChartsOption } from 'echarts';

const multiChartOption: EChartsOption = {
  xAxis: [
    { type: 'category', gridIndex: 0 },
    { type: 'category', gridIndex: 1 },
  ],
  yAxis: [
    { min: 0, max: 100, gridIndex: 0 },
    { min: 0, max: 150, gridIndex: 1 },
  ],
  grid: [{ bottom: '55%' }, { top: '55%' }], // must have
  dataset: {
    source: [
      ['product', '2012', '2013', '2014', '2015'],
      ['Matcha', 41.4, 30.4, 65.1, 53.3],
      ['Milk', 86.5, 92.1, 85.7, 83.1],
    ],
  },
  series: [
    { type: 'bar', xAxisIndex: 0, yAxisIndex: 0, seriesLayoutBy: 'row', label: { show: true, color: '#fff' } },
    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1, seriesLayoutBy: 'row', label: { show: true, color: '#fff' } },
  ],
};

export default multiChartOption;
