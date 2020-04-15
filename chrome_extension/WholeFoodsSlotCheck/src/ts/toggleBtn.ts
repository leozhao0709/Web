import timer from './timer';
import wholeFoodsUtil from './wholeFoodsUtil';
import {} from './timeSelect';

export const insertToggleBtn = (isCheckingNow = false) => {
  const btnMeta = {
    startLabel: 'start check',
    stopLabel: 'stop check',
  };

  const button = document.createElement('button');
  button.textContent = isCheckingNow ? btnMeta.stopLabel : btnMeta.startLabel;
  button.addEventListener('click', function () {
    isCheckingNow = !isCheckingNow;
    if (isCheckingNow) {
      // start check
      console.log('...start checking slot...');
      timer.start(wholeFoodsUtil.check, wholeFoodsUtil.checkInterval);
      this.textContent = btnMeta.stopLabel;
    } else {
      // stop check
      console.log('...stop checking slot...');
      this.textContent = btnMeta.startLabel;
      timer.stop();
    }
  });
  document.querySelector('#header')!.appendChild(button);
};
