import React from 'react';
import styles from './App.module.scss';
import Header from './components/header';
import CourseGoals from './components/courseGoals';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header />
      <main>
        <CourseGoals />
      </main>
    </div>
  );
};

export default App;
