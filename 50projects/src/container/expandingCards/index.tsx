import React, { useId, useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import Card from './card';

interface ExpandingCardsProps extends React.HTMLAttributes<HTMLDivElement> {}

const ExpandingCards: React.FC<ExpandingCardsProps> = (
  props: ExpandingCardsProps
) => {
  const { className, ...restProps } = props;
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const cards: { bgUrl: string; text: string }[] = [
    {
      bgUrl:
        'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      text: 'Explore The World',
    },
    {
      bgUrl:
        'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      text: 'Wild Forest',
    },
    {
      bgUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
      text: 'Sunny Beach',
    },
    {
      bgUrl:
        'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      text: 'City on Winter',
    },
    {
      bgUrl:
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      text: 'Mountains - Clouds',
    },
  ];

  const setActiveCard = (index: number) => {
    setActiveCardIndex(index);
  };

  return (
    <div
      {...restProps}
      className={classNames(styles.ExpandingCards, className)}
    >
      {cards.map((card, index) => (
        <Card
          key={useId()}
          imageUrl={card.bgUrl}
          text={card.text}
          active={index === activeCardIndex}
          onClick={() => setActiveCard(index)}
        />
      ))}
    </div>
  );
};

ExpandingCards.defaultProps = {};

export default React.memo(ExpandingCards);
