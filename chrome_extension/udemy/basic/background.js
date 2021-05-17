chrome.runtime.onInstalled.addListener((details) => {
  // tslint:disable-next-line: no-console
  console.log('...Timer extension installed...', details);
  chrome.contextMenus.create({
    title: 'Test Context Menu',
    id: 'contextMenu1',
    contexts: ['selection'],
  });

  // chrome.contextMenus.create({
  //   title: 'Test Context Menu2',
  //   id: 'contextMenu2',
  //   parentId: 'contextMenu1',
  //   contexts: ['page', 'selection'],
  // });

  // chrome.contextMenus.create({
  //   title: 'Test Context Menu3',
  //   id: 'contextMenu3',
  //   parentId: 'contextMenu1',
  //   contexts: ['page', 'selection'],
  // });
});

chrome.contextMenus.onClicked.addListener((event) => {
  console.log(event); // {editable: false, frameId: 0, menuItemId: "contextMenu3", pageUrl: "chrome://extensions/", parentMenuItemId: "contextMenu1", selectionText: "Chrome World!"}
  // chrome.search.query({
  //   disposition: 'NEW_TAB',
  //   text: event.selectionText,
  // });

  // chrome.tabs.query({ currentWindow: true }, (tabs) => {
  //   console.log(tabs);
  // });

  // chrome.tabs.create({
  //   url: `https://www.google.com/search?q=${event.selectionText}`,
  // });

  chrome.tts.speak('Hello, world.', { lang: 'en-US', rate: 2.0 });
});

// receive message from foreground
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message.msg);
  // send message back to foreground
  sendResponse(`background reply: ${message.msg}`);

  chrome.runtime.sendMessage(sender.id, { msg: '...message from background...' }, (response) => {
    // asynchronous response with the data from the background
    console.log('received foreground reply', response);
  });
});

chrome.alarms.create('alarm1', {
  periodInMinutes: 1 / 60,
});

let timer = 0;
chrome.action.setBadgeText({
  text: timer.toString(),
});
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'alarm1') {
    timer += 1;
    chrome.action.setBadgeText({
      text: timer.toString(),
    });
    if (timer === 5) {
      chrome.alarms.clear('alarm1');
      this.registration.showNotification('Chrome Timer Extension', {
        body: '5 seconds has passed!',
        icon: 'icon.png',
      });
    }
  }
});
