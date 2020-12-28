import { EChartsOption } from 'echarts';
const areaOption: EChartsOption = {
  xAxis: {
    // no x data
    type: 'category',
    boundaryGap: false, // remove the gap between chart and axis
    show: false,
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      type: 'line',
      // data does not contains x data
      data: [620, 432, 220, 543, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
      areaStyle: { color: 'purple' },
      smooth: true,
      lineStyle: { width: 0 },
      itemStyle: { opacity: 0 },
    },
  ],
  // grid: {
  //   top: 0,
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  // },
};

export default areaOption;
