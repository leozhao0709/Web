import * as echarts from 'echarts';

const barChartOptions: echarts.EChartsOption = {
  title: {
    text: 'Simple bar chart',
    padding: 20, // title padding
  },
  xAxis: {
    data: ['food', 'digital', 'close', 'bag'],
  },
  yAxis: {},
  // grid: [{ bottom: '10%' }], // change the graph position
  series: {
    type: 'bar',
    data: [100, 120, 90, 150],
    label: { show: true, color: 'white' },
    barWidth: '60%',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
    renderMode: 'richText',
  },
  dataZoom: {
    show: true,
    // start: 30, // percentage
    // end: 70, // percentage
  },
  toolbox: {
    feature: {
      saveAsImage: {},
      restore: {},
      dataZoom: { yAxisIndex: false },
    },
  },
};

export default barChartOptions;
