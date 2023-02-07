import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import { throttle } from 'lodash-es';

interface ScrollAnimationProps extends React.HTMLAttributes<HTMLDivElement> {}

const ScrollAnimation: React.FC<ScrollAnimationProps> = (
  props: ScrollAnimationProps
) => {
  const { className, ...restProps } = props;
  const [boxes, setBoxes] = useState(
    new Array(5).fill(0).map((_, index) => ({
      content: index,
      active: false,
    }))
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setBoxes(boxes.map((box) => ({ ...box, active: true })));
    });

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = throttle(() => {
      const threadhold = 50;
      if (
        document.documentElement.scrollTop + window.innerHeight >=
        document.documentElement.scrollHeight - threadhold
      ) {
        const newBoxes = [
          ...boxes,
          {
            content: boxes.length,
            active: false,
          },
        ];
        setBoxes(newBoxes);

        setTimeout(() => {
          setBoxes(newBoxes.map((box) => ({ ...box, active: true })));
        }, 200);
      }
    }, 200);
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [boxes]);

  return (
    <div
      {...restProps}
      className={classNames(styles.ScrollAnimation, className)}
    >
      <h1 className={styles.title}>Scroll Animation</h1>
      <div className={styles.container}>
        {boxes.map((box, index) => (
          <div
            key={index}
            className={classNames(styles.box, {
              [styles.even]: index % 2 === 0,
              [styles.odd]: index % 2 === 1,
              [styles.active]: box.active,
            })}
          >
            {box.content}
          </div>
        ))}
      </div>
    </div>
  );
};

ScrollAnimation.defaultProps = {};

export default React.memo(ScrollAnimation);
