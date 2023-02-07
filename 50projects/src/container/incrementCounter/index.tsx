import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

interface IncrementCounterProps extends React.HTMLAttributes<HTMLDivElement> {
  target?: number;
}

const IncrementCounter: React.FC<IncrementCounterProps> = (
  props: IncrementCounterProps
) => {
  const { className, target, ...restProps } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;
    if (target !== undefined && count < target) {
      timer = setTimeout(() => {
        setCount(count + 1);
      }, 0);
    }

    return () => clearTimeout(timer);
  }, [target, count]);

  return (
    <div {...restProps} className={classNames(className)}>
      {count}
    </div>
  );
};

IncrementCounter.defaultProps = {
  target: 7500,
};

export default React.memo(IncrementCounter);
