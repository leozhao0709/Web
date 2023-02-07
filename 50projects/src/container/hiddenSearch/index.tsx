import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import useDarkBg from '@app/hooks/useDarkBg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface HiddenSearchProps extends React.HTMLAttributes<HTMLDivElement> {}

const HiddenSearch: React.FC<HiddenSearchProps> = (
  props: HiddenSearchProps
) => {
  const { className, ...restProps } = props;
  const [active, setActive] = useState(true);

  useDarkBg();

  return (
    <div {...restProps} className={classNames(styles.HiddenSearch, className)}>
      <input
        type="text"
        className={classNames(styles.searchInput, { [styles.active]: active })}
        placeholder="Search..."
      />
      <button className={styles.icon} onClick={() => setActive(!active)}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

HiddenSearch.defaultProps = {};

export default React.memo(HiddenSearch);
