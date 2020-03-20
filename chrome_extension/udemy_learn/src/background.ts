chrome.runtime.onInstalled.addListener(() => {
  // tslint:disable-next-line: no-console
  console.log('...没有它就饿死了 installed...');
});

chrome.bookmarks.onCreated.addListener(() => {
  alert('...new bookmark....');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  alert(`${message.msg}`);
});
