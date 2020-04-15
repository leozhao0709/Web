import timer from './timer';
import wholeFoodsUtil from './wholeFoodsUtil';

export const insertTimeSelect = () => {
  const options = [
    { label: '15 seconds', value: '0', interval: 15 * 1000 },
    { label: '30 seconds', value: '1', interval: 30 * 1000 },
    { label: '1 minutes', value: '2', interval: 60 * 1000 },
  ];
  const container = document.createElement('div');
  const timeSelectLabelEl = document.createElement('span');
  timeSelectLabelEl.textContent = 'duration of reload: ';
  const timeSelectEl = document.createElement('select');
  // insert options:
  options.forEach((option) => {
    const optionEl = document.createElement('option');
    optionEl.value = option.value;
    optionEl.textContent = option.label;
    timeSelectEl.appendChild(optionEl);
  });
  timeSelectEl.value = options.findIndex((option) => option.interval === wholeFoodsUtil.checkInterval).toString();

  // timeSelectEl onChange
  timeSelectEl.addEventListener('change', (e) => {
    const target = e.currentTarget as HTMLSelectElement;
    wholeFoodsUtil.checkInterval = options[+target.value].interval;
    chrome.storage.sync.set({ [wholeFoodsUtil.storedIntervalKey]: wholeFoodsUtil.checkInterval });
    console.log(`...select ${wholeFoodsUtil.checkInterval} millseconds to refresh`);
    if (timer.Timer) {
      timer.startNewTimer(wholeFoodsUtil.check, wholeFoodsUtil.checkInterval);
    }
  });

  container.appendChild(timeSelectLabelEl);
  container.appendChild(timeSelectEl);

  document.querySelector('#header')!.appendChild(container);
};
