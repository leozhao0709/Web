import './index.scss';
import styles from './scss/charts.scss';
import * as echarts from 'echarts';
import barChartOptions from 'app/ts/bar';
import scatterOption from './ts/scatter';
import lineOption from './ts/line';
import pieOption from './ts/pie';
import multiTypeOption from './ts/multiType';
import multiChartOption from './ts/multiChart';
import areaOption from './ts/area';

window.onload = () => {
  const chartsContainer = document.querySelector('#echarts') as HTMLDivElement;
  chartsContainer.classList.add(styles.charts); // the container must have width and height

  const chart = echarts.init(chartsContainer, 'light', { renderer: 'svg' });
  chart.setOption(barChartOptions);
};
