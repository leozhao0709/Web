import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';
import _ from 'lodash';

export interface DraggableListDataSource {
  value: string;
  id?: string;
  [key: string]: any;
}

interface DraggableListProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
  list: (string | DraggableListDataSource)[];
  itemTransform?: (item: string | DraggableListDataSource) => React.ReactNode;
  onDragItemEnd?: (itemOldIndex, itemNewIndex, newList) => void;
}

const DraggableList: React.FC<DraggableListProps> = (
  props: DraggableListProps
) => {
  const { className, list, itemTransform, onDragItemEnd, ...restProps } = props;

  const [listArray, setListArray] = React.useState(list);

  const liRefs = listArray.map(() => React.useRef<HTMLLIElement>(null));

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

      const draggableListLength = listArray.length;

      if (moveY > 0) {
        // drag from up to down
        let endIndex = draggableListLength;
        // check element after dragEl
        for (let i = dragElIndex + 1; i < draggableListLength; i++) {
          const nextEl = liRefs[i].current!;

          // Todo: element height maybe different
          if (moveY >= (i - dragElIndex - 0.5) * nextEl.clientHeight!) {
            nextEl.style.pointerEvents = 'none';
            nextEl.style.transform = `translate3d(0, ${-nextEl.clientHeight}px, 0)`;
            nextEl.style.transition = 'transform 0.2s';
            endIndex = i;
          } else {
            nextEl.style.transform = `translate3d(0, 0, 0)`;
            break;
          }
        }

        setEndElIndex(endIndex);
      } else {
        // drag from down to up
        let endIndex = 0;
        for (let i = dragElIndex - 1; i >= 0; i--) {
          const lastEl = liRefs[i].current!;
          // Todo: element height maybe different
          if (-moveY >= (dragElIndex - i - 0.5) * lastEl.clientHeight) {
            lastEl.style.transform = `translate3d(0, ${lastEl.clientHeight}px, 0)`;
            lastEl.style.transition = `transform 0.2s`;
            endIndex = i;
          } else {
            lastEl.style.transform = `translate3d(0, 0, 0)`;
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

    let newList = [...listArray];
    if (dragElIndex !== undefined && endElIndex !== undefined) {
      if (endElIndex > dragElIndex) {
        // drag from up to down
        newList = [
          ...listArray.slice(0, dragElIndex),
          ...listArray.slice(dragElIndex + 1, endElIndex + 1),
          listArray[dragElIndex],
          ...listArray.slice(endElIndex + 1),
        ];
      } else {
        // drag from down to up
        newList = [
          ...listArray.slice(0, endElIndex),
          listArray[dragElIndex],
          ...listArray.slice(endElIndex, dragElIndex),
          ...listArray.slice(dragElIndex + 1),
        ];
      }
      setListArray(newList);
    }

    liRefs.forEach((liRef) => {
      liRef.current?.removeAttribute('style');
    });

    setDragElIndex(undefined);
    setEndElIndex(undefined);

    onDragItemEnd && onDragItemEnd(dragElIndex, endElIndex, newList);
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
    <ul className={classnames(styles.draggableList, className)} {...restProps}>
      {listArray.map((item, index) => (
        <li
          ref={liRefs[index]}
          key={index}
          className={styles.item}
          onMouseDown={(e) => onMouseDown(e, index)}
        >
          <div className={styles.content}>
            {itemTransform
              ? itemTransform(item)
              : _.isString(item)
              ? item
              : item.value}
          </div>
          <span className="iconfont icon-grip-lines"></span>
        </li>
      ))}
    </ul>
  );
};

DraggableList.defaultProps = {};

export default DraggableList;
