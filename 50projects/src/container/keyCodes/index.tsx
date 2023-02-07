import React, { useEffect } from 'react';
import classNames from 'classnames';

interface KeyCodesProps extends React.HTMLAttributes<HTMLDivElement> {}

const KeyCodes: React.FC<KeyCodesProps> = (props: KeyCodesProps) => {
  const { className, ...restProps } = props;

  useEffect(() => {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      console.log(`e.key is ${e.key}`); // s
      console.log(`e.code is ${e.code}`); // KeyS
      console.log(`e.keyCode(deprecated) is ${e.keyCode}`); // 83, keyCode is deprecated
    });
  }, []);

  return (
    <div {...restProps} className={classNames(className)}>
      KeyCodes
    </div>
  );
};

KeyCodes.defaultProps = {};

export default React.memo(KeyCodes);
