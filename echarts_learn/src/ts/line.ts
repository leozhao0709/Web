import { EChartsOption } from 'echarts';

const lineOption: EChartsOption = {
  title: {
    text: 'Line',
  },
  xAxis: {
    type: 'category',
  },
  yAxis: {},
  series: {
    type: 'line',
    data: [
      ['Q1', 100],
      ['Q2', 122],
      ['Q3', 96],
      ['Q4', 130],
    ],
    label: { show: true },
  },
  tooltip: {
    renderMode: 'richText',
    // axisPointer: {
    //   type: 'cross',
    // },
  },
};

export default lineOption;
