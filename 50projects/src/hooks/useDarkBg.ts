import { useEffect } from 'react';

const useDarkBg = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#1f1f1f';
  }, []);
};

export default useDarkBg;
