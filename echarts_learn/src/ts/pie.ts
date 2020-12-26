import { EChartsOption } from 'echarts';

const pieOption: EChartsOption = {
  title: {
    text: 'Pie',
    padding: 20,
  },
  series: {
    type: 'pie',
    data: [
      { name: 'category1', value: 60 },
      { name: 'category2', value: 50 },
      { name: 'category3', value: 55 },
      { name: 'category4', value: 70 },
    ],
    label: {
      show: true,
      position: 'inside',
      formatter: '{b}: {d}%', //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比
      align: 'center',
      color: '#333',
    },
  },
  tooltip: { renderMode: 'richText' },
};

export default pieOption;
