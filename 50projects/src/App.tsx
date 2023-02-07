import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import styles from './App.module.scss';

const App: React.FC = () => {
  const element = useRoutes(routes);

  return <div className={styles.App}>{element}</div>;
};

export default App;
