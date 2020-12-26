import { EChartsOption } from 'echarts';

const scatterOption: EChartsOption = {
  title: {
    text: 'Scatter',
  },
  xAxis: {},
  yAxis: {},
  series: {
    type: 'scatter',
    data: [
      [13, 44], // x, y data
      [51, 51],
      [51, 34],
      [67, 19],
      [19, 33],
    ],
    label: { show: true, position: 'top' },
    symbolSize: (data) => data[1] / 2, // y data
  },
  // visualMap: [{ inRange: { symbolSize: [10, 70] } }],
  tooltip: {
    renderMode: 'richText',
  },
};

export default scatterOption;
