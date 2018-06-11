import * as styles from './index.css';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

window.onload = () => {
    const app = document.querySelector('#root')!;

    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', '500px');
    canvas.setAttribute('height', '600px');
    canvas.classList.add(styles.canvas);
    app.appendChild(canvas);

    const canvasContext = canvas.getContext('2d')!;
    canvasContext.strokeStyle = 'red';
    canvasContext.lineWidth = 10;
    canvasContext.lineCap = 'square';
    canvasContext.lineJoin = 'round';

    canvasContext.shadowColor = 'black';
    canvasContext.shadowOffsetX = 5;
    canvasContext.shadowOffsetY = 10;
    canvasContext.shadowBlur = 5;

    canvasContext.beginPath(); // reset the context state
    canvasContext.moveTo(0, 0); // starting point of (x, y)
    canvasContext.lineTo(500, 100); // end point a line (x, y)
    canvasContext.stroke(); // draw the line

    canvasContext.beginPath();
    canvasContext.strokeStyle = 'blue';
    canvasContext.lineWidth = 10;
    canvasContext.arc(100, 100, 50, 0, Math.PI / 3);
    canvasContext.stroke();

    canvasContext.beginPath();
    canvasContext.strokeStyle = 'blue';
    canvasContext.lineWidth = 10;
    canvasContext.moveTo(0, 100);
    canvasContext.quadraticCurveTo(500, 100, 400, 250);
    canvasContext.stroke();
};
