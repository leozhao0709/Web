const timeEl = document.querySelector('#time');
const currentTime = new Date().toLocaleTimeString();
timeEl.textContent = `The time is: ${currentTime}`;

chrome.action.setBadgeText(
  {
    text: 'TIME',
  },
  () => {
    // eslint-disable-next-line no-console
    console.log('Finish setting badge text.');
  }
);
