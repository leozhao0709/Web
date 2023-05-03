import React from 'react';
import { produce } from 'immer';
import styles from './App.module.scss';
import BarChart from './components/BarChart';
import menuJson from './assets/json/menu.json';
import { BarChartOption } from './charts/barChart';

const App: React.FC = () => {
  const [menuData, setMenuData] = React.useState(
    menuJson.map((menu) => ({ name: menu.name, value: menu.orders }))
  );

  const [barChartOption, setBarChartOption] = React.useState<BarChartOption>(
    {}
  );

  const addVegSoup = () => {
    setMenuData(
      produce(menuData, (data) => {
        // data.pop();
        data[0].value += 100;
        // data.push({ name: `new order ${Math.random() * 100}`, value: 100 });
      })
    );
  };

  const addChartSize = () => {
    setBarChartOption((prev) => ({
      ...prev,
      height: (prev.height ?? 600) + 100,
    }));
  };

  return (
    <div className={styles.App}>
      <BarChart data={menuData} {...barChartOption} />
      <button onClick={addVegSoup}>order plus</button>
      <button onClick={addChartSize}>Add Size</button>
    </div>
  );
};

export default App;
