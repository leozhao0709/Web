import React from 'react';
import styles from './App.module.scss';
import DraggableList from './components/DraggableList';
import DragList from './components/DragList';

const App: React.FC = () => {
  const [richestPeople, setRichestPeople] = React.useState([
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page',
  ]);

  const onDragItemEnd = (itemOldIndex, itemNewIndex, newRichestPeople) => {
    console.log(itemOldIndex, itemNewIndex);
    console.log(newRichestPeople);
  };

  return (
    <div className={styles.App}>
      <h1>10 Richest People</h1>
      <p>Drag and drop the items into their corresponding spots</p>
      <DraggableList list={richestPeople} onDragItemEnd={onDragItemEnd} />

      {/* <DragList list={richestPeople} /> */}
    </div>
  );
};

export default App;
