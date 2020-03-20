export const addStopBtn = (timer: NodeJS.Timeout) => {
  const button = document.createElement('button');
  button.textContent = 'stop check';
  button.addEventListener('click', () => {
    clearInterval(timer);
  });
  document.querySelector('#header').appendChild(button);
  console.log(".....document.querySelector('#header')...");
};
