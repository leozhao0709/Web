import React from 'react';
import styles from './App.module.scss';
import { blur$, blurSubject, clickMeSubject } from './utils/customSubject';

const App: React.FC = () => {
  const [formIsValid, setFormIsValid] = React.useState(false);

  React.useEffect(() => {
    const blurSub = blur$.subscribe(() => {
      setFormIsValid(true);
    });

    return () => blurSub.unsubscribe();
  }, []);

  const handleClick = () => {
    clickMeSubject.next();
  };

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    blurSubject.next(e.target.value);
  };

  const handleFocus = () => {
    setFormIsValid(false);
  };

  return (
    <div className={styles.App}>
      <input onBlur={handleBlur} onFocus={handleFocus} />
      <button
        onClick={handleClick}
        // disabled={!formIsValid}
      >
        Click Me
      </button>
    </div>
  );
};

export default App;
