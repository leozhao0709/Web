import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import useDarkBg from '@app/hooks/useDarkBg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

interface RotatingNavProps extends React.HTMLAttributes<HTMLDivElement> {}

const RotatingNav: React.FC<RotatingNavProps> = (props: RotatingNavProps) => {
  const { className, ...restProps } = props;
  const [navOpen, setNavOpen] = useState(false);

  useDarkBg();

  return (
    <div
      {...restProps}
      className={classNames(
        styles.RotatingNav,
        { [styles.navOpen]: navOpen },
        className
      )}
    >
      <div className={styles.navControl}>
        <button className={classNames(styles.btn, styles.close)}>
          <FontAwesomeIcon
            icon={faXmark}
            fontSize={30}
            onClick={() => setNavOpen(false)}
          />
        </button>
        <button
          className={classNames(styles.btn, styles.open)}
          onClick={() => setNavOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} fontSize={30} />
        </button>
      </div>
      <div className={classNames(styles.container)}>
        <h1>Amazing Article</h1>
        <small>Florin Pop</small>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quidem
          sunt ut architecto, voluptate molestiae molestias eaque unde
          consequatur necessitatibus eligendi, totam reiciendis temporibus enim?
          Neque aliquid harum dicta tempora.
        </p>
        <h3>My Dog</h3>
        <img
          src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          className={styles.img}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla
          quibusdam eius voluptate vitae doloribus, itaque cupiditate voluptas
          repellendus quidem, repellat aliquam corporis. Dolor perspiciatis
          illum provident reprehenderit totam nemo!
        </p>
      </div>
    </div>
  );
};

RotatingNav.defaultProps = {};

export default React.memo(RotatingNav);
