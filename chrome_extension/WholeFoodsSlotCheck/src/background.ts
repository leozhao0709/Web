chrome.runtime.onInstalled.addListener(() => {
  // tslint:disable-next-line: no-console
  console.log('...whole food slots check installed...');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  alert(`${message.msg}`);
});
