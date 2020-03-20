import { addStopBtn } from './ts/addStopBtn';

window.addEventListener('load', () => {
  const timer = setInterval(() => {
    location.reload();
    const today = new Date();
    const year = today.getFullYear();
    const month = `0${today.getMonth() + 1}`.slice(-2);
    const date = `0${today.getDate()}`.slice(-2);
    const containerId = `${year}${month}${date}`;
    const container = document.getElementById(containerId);
    if (container) {
      const group = container.querySelectorAll('.ufss-slotgroup');
      if (group.length > 0) {
        chrome.runtime.sendMessage({ msg: 'please check msg, somgthing is available!' });
      }
    }
  }, 1000 * 5);

  addStopBtn(timer);
});
