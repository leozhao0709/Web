import React from 'react';
import classNames from 'classnames';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { className, ...restProps } = props;

  return (
    <header {...restProps} className={classNames(className)}>
      <img />
      <h1>Getting Started with Cypress</h1>
    </header>
  );
};

Header.defaultProps = {};

export default React.memo(Header);
