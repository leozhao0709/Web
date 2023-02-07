import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  text: string;
  active?: boolean;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { className, imageUrl, text, active, ...restProps } = props;

  return (
    <div
      {...restProps}
      className={classNames(
        styles.Card,
        { [styles.active]: active },
        className
      )}
    >
      <img src={imageUrl} alt={text} className={styles.img} />
      <div className={styles.text}>{text}</div>
    </div>
  );
};

Card.defaultProps = {};

export default React.memo(Card);
