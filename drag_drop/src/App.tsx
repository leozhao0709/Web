import React from 'react';
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
  const [dragElIndex, setDragElIndex] = React.useState<number | undefined>(
    undefined
  );
  const [endElIndex, setEndElIndex] = React.useState<number | undefined>(
    undefined
  );

  const onMouseMove = (e: MouseEvent) => {
    if (dragElIndex !== undefined) {
      const dragEl = liRefs[dragElIndex].current;
      if (!dragEl) {
        return;
      }
      const moveX = e.pageX - dragStartPosition.pageX!;
      const moveY = e.pageY - dragStartPosition.pageY!;
      dragEl.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;

      const draggableListLength = richestPeople.length;

      if (moveY > 0) {
        // drag from up to down
        let endIndex = draggableListLength;
        // check element after dragEl
        for (let i = dragElIndex + 1; i < draggableListLength; i++) {
          const nextEl = liRefs[i].current;

          // Todo: element height maybe different
          if (
            nextEl &&
            moveY >= (i - dragElIndex - 0.5) * nextEl.clientHeight!
          ) {
            nextEl.style.pointerEvents = 'none';
            nextEl.style.transform = `translate3d(0, ${-nextEl.clientHeight}px, 0)`;
            nextEl.style.transition = 'transform 0.2s';
          } else {
            endIndex = i;
            break;
          }
        }

        setEndElIndex(endIndex);
      } else {
        // drag from down to up
        let endIndex = -1;
        for (let i = dragElIndex - 1; i >= 0; i--) {
          const lastEl = liRefs[i].current;
          // Todo: element height maybe different
          if (
            lastEl &&
            -moveY >= (dragElIndex - i - 0.5) * lastEl.clientHeight
          ) {
            lastEl.style.transform = `translate3d(0, ${lastEl.clientHeight}px, 0)`;
            lastEl.style.transition = `transform 0.2s`;
          } else {
            endIndex = i;
            break;
          }
        }
        setEndElIndex(endIndex);
      }
    }
  };

  const onMouseUp = () => {
    setDragStartPosition({
      pageX: undefined,
      pageY: undefined,
    });

    console.log(dragElIndex, endElIndex);
    if (dragElIndex !== undefined && endElIndex !== undefined) {
      let tempArray = [...richestPeople];
      if (endElIndex > dragElIndex) {
        // drag from up to down
        tempArray = [
          ...richestPeople.slice(0, dragElIndex),
          ...richestPeople.slice(dragElIndex + 1, endElIndex),
          richestPeople[dragElIndex],
          ...richestPeople.slice(endElIndex),
        ];
      } else {
        // drag from down to up
        tempArray = [
          ...richestPeople.slice(0, endElIndex + 1),
          richestPeople[dragElIndex],
          ...richestPeople.slice(endElIndex + 1, dragElIndex),
          ...richestPeople.slice(dragElIndex + 1),
        ];
      }
      console.log(tempArray);
      setRichestPeople(tempArray);
    }

    liRefs.forEach((liRef) => {
      liRef.current?.removeAttribute('style');
    });

    setDragElIndex(undefined);
    setEndElIndex(undefined);
  };

  React.useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragElIndex, endElIndex]);

  const onMouseDown = (e: React.MouseEvent<HTMLLIElement>, index: number) => {
    setDragElIndex(index);
    setDragStartPosition({
      pageX: e.pageX,
      pageY: e.pageY,
    });

    const dragEl = liRefs[index].current;
    if (dragEl) {
      dragEl.style.cursor = 'row-resize';
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
