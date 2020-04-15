import { insertToggleBtn } from './ts/toggleBtn';
import timer from './ts/timer';
import wholeFoodsUtil from './ts/wholeFoodsUtil';
import { insertTimeSelect } from './ts/timeSelect';

window.addEventListener('load', () => {
  chrome.storage.sync.get((items) => {
    const storedInterval = items[wholeFoodsUtil.storedIntervalKey];
    if (storedInterval) {
      wholeFoodsUtil.checkInterval = storedInterval;
    }
    insertTimeSelect();
    insertToggleBtn(true);
    timer.start(wholeFoodsUtil.check, wholeFoodsUtil.checkInterval);
    console.log('...start checking slots...');
  });
});
