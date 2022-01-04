import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';
import _ from 'lodash';

export interface DragListDataSource {
  value: string;
  id?: string;
  [key: string]: any;
}

interface DragListProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
  list: (string | DragListDataSource)[];
  itemTransform?: (item: string | DragListDataSource) => React.ReactNode;
  onDragItemEnd?: (itemOldIndex, itemNewIndex, newList) => void;
}

const DragList: React.FC<DragListProps> = (props: DragListProps) => {
  const { className, list, itemTransform, onDragItemEnd, ...restProps } = props;

  const [listArray, setListArray] = React.useState(list);

  const onDragStart = (e: React.DragEvent<HTMLLIElement>) => {
    console.log(e);
  };

  return (
    <ul className={classnames(styles.dragList, className)} {...restProps}>
      {listArray.map((item, index) => (
        <li
          key={index}
          className={styles.item}
          draggable
          onDragStart={onDragStart}
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

DragList.defaultProps = {};

export default DragList;
