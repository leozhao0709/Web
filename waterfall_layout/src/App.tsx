import React from 'react';
import styles from './App.module.scss';
import Waterfall from './components/Waterfall';

const App: React.FC = () => {
  const [imgSrc, setImgSrc] = React.useState(
    new Array(15)
      .fill(undefined)
      .map((_, index) => `https://picsum.photos/360/380?radom=${index}`)
  );

  const loadMore = () => {
    const moreSrc = new Array(15)
      .fill(undefined)
      .map((_, index) => `https://picsum.photos/360/380?radom=${index}`);

    setImgSrc([...imgSrc, ...moreSrc]);
  };

  const getHeight = React.useCallback((index: number) => {
    return (index % 5) * 50 + 200;
  }, []);

  return (
    <div className={styles.App}>
      <Waterfall
        className={styles.waterFall}
        width={1000}
        columnCount={4}
        itemSpacing={5}
        lineSpacing={5}
      >
        {imgSrc.map((src, index) => (
          <div
            className={styles.item}
            key={index}
            style={{
              height: getHeight(index),
            }}
          >
            <img
              src={src}
              style={{ display: 'block', width: '100%', height: '100%' }}
            />
          </div>
        ))}
      </Waterfall>
      <button onClick={loadMore}>Load More</button>
    </div>
  );
};

export default App;
