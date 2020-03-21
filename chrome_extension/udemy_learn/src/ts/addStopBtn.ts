export const addStopBtn = timer => {
  const button = document.createElement('button');
  button.textContent = 'stop check';
  button.addEventListener('click', () => {
    clearInterval(timer);
  });
  document.querySelector('#header').appendChild(button);
};
