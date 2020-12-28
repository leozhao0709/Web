import { EChartsOption } from 'echarts';

const pieOption: EChartsOption = {
  title: {
    text: 'Pie',
    padding: 20,
  },
  series: {
    name: '品类分布',
    type: 'pie',
    data: [
      { name: 'category1', value: 60 },
      { name: 'category2', value: 50 },
      { name: 'category3', value: 55 },
      { name: 'category4', value: 70 },
    ],
    clockwise: false,
    center: ['35%', '50%'],
    radius: ['45%', '60%'], // ring
    label: {
      show: true,
      // position: 'inside',
      formatter: '{b}: {d}%', //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比
      align: 'center',
      color: '#333',
    },
    labelLine: {
      length: 5,
      length2: 3,
      smooth: true,
    },
    itemStyle: {
      borderWidth: 4, // gap between each other
      borderColor: '#fff',
    },
  },
  legend: {
    type: 'scroll',
    orient: 'vertical',
    height: 250,
    left: '70%',
    top: 'middle',
    textStyle: {
      color: '#8c8c8c',
    },
  },
  tooltip: {
    renderMode: 'richText',
    formatter: (params) =>
      `
    ${params.seriesName}
    ${params.marker} ${params.data.name}
    percentage：${params.data.value}%
  `,
  },
};

export default pieOption;
