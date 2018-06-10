import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

const app = document.querySelector('#root')!;

const canvas = document.createElement('canvas');
canvas.setAttribute('width', '800');
canvas.setAttribute('height', '600');

app.appendChild(canvas);

const canvasContext = canvas.getContext('2d')!;
canvasContext.fillStyle = 'black';
canvasContext.fillRect(0, 0, canvas.width, canvas.height);
