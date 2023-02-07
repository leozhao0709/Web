import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import useDarkBg from '../../hooks/useDarkBg';
import styles from './index.module.scss';
import axios from 'axios';

interface BlurLoadingProps extends React.HTMLAttributes<HTMLDivElement> {}

const bgUrl =
  'https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80';

const BlurLoading: React.FC<BlurLoadingProps> = (props: BlurLoadingProps) => {
  const { className, ...restProps } = props;
  const [progress, setProgress] = useState(0);

  const [blob, setBlob] = useState<undefined | Blob>(undefined);

  useDarkBg();

  useEffect(() => {
    axios
      .get(bgUrl, {
        responseType: 'blob',
        onDownloadProgress: (e) => {
          if (e.progress !== undefined) {
            setProgress(Math.floor(e.progress * 100));
          }
        },
      })
      .then((res) => res.data)
      .then((blob) => setBlob(blob));
  }, []);

  return (
    <div {...restProps} className={classNames(styles.BlurLoading, className)}>
      <div className={styles.text}>{`${progress}%`}</div>
      {blob && (
        <img className={styles.image} src={window.URL.createObjectURL(blob)} />
      )}
    </div>
  );
};

BlurLoading.defaultProps = {};

export default React.memo(BlurLoading);
