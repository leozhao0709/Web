const timeEl = document.querySelector('#time');
const nameEl = document.querySelector('#name');
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

chrome.storage.sync.get(['name'], (res) => {
  nameEl.textContent = `Your name is: ${res.name ?? 'unknown'}`;
});

chrome.runtime.sendMessage({ msg: '...messgae from frontend...' }, (response) => {
  // asynchronous response with the data from the background
  console.log('received background data', response);
});

// receive message from background initially
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message.msg);
  // send message back to foreground
  sendResponse(`foreground reply: ${message.msg}`);
});
