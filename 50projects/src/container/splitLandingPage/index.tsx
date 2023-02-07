import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import { NavLink } from 'react-router-dom';

interface SplitLandingPageProps extends React.HTMLAttributes<HTMLDivElement> {}

const SplitLandingPage: React.FC<SplitLandingPageProps> = (
  props: SplitLandingPageProps
) => {
  const { className, ...restProps } = props;

  return (
    <div
      {...restProps}
      className={classNames(styles.SplitLandingPage, className)}
    >
      <div className={classNames(styles.splitContent, styles.left)}>
        <h1>PlayStation 5</h1>
        <NavLink to="/split-landing-page">Buy Now</NavLink>
      </div>
      <div className={classNames(styles.splitContent, styles.right)}>
        <h1>XBox Series X</h1>
        <NavLink to="/split-landing-page">Buy Now</NavLink>
      </div>
    </div>
  );
};

SplitLandingPage.defaultProps = {};

export default React.memo(SplitLandingPage);
