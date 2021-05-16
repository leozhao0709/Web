const nameInput = document.querySelector('#name-input');
const saveBtn = document.querySelector('#save-btn');

saveBtn.addEventListener('click', () => {
  const name = nameInput.value;
  chrome.storage.sync.set({ name }, () => {
    console.log(`Name is set`);
  });
});

// you can get several keys, so the first arg is an array.
chrome.storage.sync.get(['name'], (res) => {
  nameInput.value = res.name ?? 'unknown';
});
