import basicMain from './basic';
import linearRegression from './linearRegreesion';

linearRegression()
  .then(() => {
    console.log(`finish`);
  })
  .catch((err) => console.log('err', err));
