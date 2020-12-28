import { EChartsOption } from 'echarts';

const multiTypeOption: EChartsOption = {
  title: {
    text: 'Muti Chart',
    subtext: 'this is subtitle',
    padding: 10,
  },
  // grid: {
  //   right: '10%',
  // },
  dataset: {
    source: [
      ['Q1', 100, 79, 'category1', 50],
      ['Q2', 112, 81, 'category2', 60],
      ['Q3', 96, 88, 'category3', 55],
      ['Q4', 123, 72, 'category4', 70],
    ],
  },
  xAxis: { type: 'category' },
  yAxis: {
    // axisLine: { show: true }
  },
  series: [
    {
      type: 'bar',
      name: 'bar chart',
      label: { show: true, color: '#fff' },
      encode: { x: 0, y: 2 },
    },
    {
      type: 'line',
      name: 'line chart',
      label: { show: true },
      encode: { x: 0, y: 1 },
    },
    {
      type: 'pie',
      name: 'pie chart',
      radius: 35,
      center: ['40%', 80],
      encode: { itemName: 3, value: 4 },
    },
  ],
  legend: {
    data: [
      {
        name: 'pie chart',
        icon: 'circle',
        textStyle: { color: 'red' },
      },
      'line chart',
      'bar chart', // this should match each series name
    ],
  },
  tooltip: {
    renderMode: 'richText',
  },
  dataZoom: {},
  toolbox: {
    feature: {
      saveAsImage: {},
      restore: {},
      dataZoom: { yAxisIndex: false },
    },
    right: '10%',
  },
};

export default multiTypeOption;
