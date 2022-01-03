import React, { FormEvent } from 'react';
import styles from './App.module.scss';

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

  const liRefs = richestPeople.map(() => React.useRef<HTMLLIElement>(null));

  const [dragStartPosition, setDragStartPosition] = React.useState<{
    pageX?: number;
    pageY?: number;
  }>({
    pageX: undefined,
    pageY: undefined,
  });
  const [dragElementIndex, setDragElementIndex] = React.useState(-1);

  const onMouseDown = (e: React.MouseEvent<HTMLLIElement>, index: number) => {
    setDragElementIndex(index);
    setDragStartPosition({
      pageX: e.pageX,
      pageY: e.pageY,
    });
  };

  const onMouseMove = (e: React.MouseEvent<HTMLLIElement>, index: number) => {
    if (
      dragElementIndex !== -1 &&
      e.target === liRefs[dragElementIndex]?.current &&
      dragStartPosition.pageX !== undefined &&
      dragStartPosition.pageY !== undefined
    ) {
      const target = e.target as HTMLLIElement;
      const moveX = e.pageX - dragStartPosition.pageX;
      const moveY = e.pageY - dragStartPosition.pageY;
      target.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    }
  };

  const onMouseUp = (e: React.MouseEvent<HTMLLIElement>, index: number) => {
    if (
      dragElementIndex !== -1 &&
      e.target === liRefs[dragElementIndex]?.current
    ) {
      const target = e.target as HTMLLIElement;
      setDragStartPosition({
        pageX: undefined,
        pageY: undefined,
      });
      setDragElementIndex(-1);
    }
  };

  return (
    <div className={styles.App}>
      <h1>10 Richest People</h1>
      <p>Drag and drop the items into their corresponding spots</p>
      <ul className={styles.dragableList}>
        {richestPeople.map((p, index) => (
          <li
            ref={liRefs[index]}
            key={index}
            className={styles.item}
            onMouseDown={(e) => onMouseDown(e, index)}
            onMouseMove={(e) => onMouseMove(e, index)}
            onMouseUp={(e) => onMouseUp(e, index)}
          >
            <div className={styles.name}>{p}</div>
            <span className="iconfont icon-grip-lines"></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
