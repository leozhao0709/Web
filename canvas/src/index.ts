import * as styles from './index.css';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

const BALL = {
    changedX: 10,
    changedY: 10,
    radius: 20,
    x: 200,
    y: 100
};

window.onload = () => {
    const app = document.querySelector('#root')!;

    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', '800px');
    canvas.setAttribute('height', '600px');
    canvas.classList.add(styles.canvas);
    app.appendChild(canvas);

    const context = canvas.getContext('2d')!;
    drawBall(context, BALL.x, BALL.y, BALL.radius);
    ballAnimate(context);
};

const ballAnimate = (context: CanvasRenderingContext2D) => {
    setInterval(() => {
        const canvas = context.canvas;

        context.clearRect(0, 0, canvas.width, canvas.height);

        drawBall(context, BALL.x, BALL.y, BALL.radius);

        if (BALL.x + BALL.radius > canvas.width || BALL.x - BALL.radius < 0) {
            BALL.changedX *= -1;
        }

        if (BALL.y + BALL.radius > canvas.height || BALL.y - BALL.radius < 0) {
            BALL.changedY *= -1;
        }

        BALL.x += BALL.changedX;
        BALL.y += BALL.changedY;
    }, 1000 / 60);
};

const drawBall = (context: CanvasRenderingContext2D, x: number, y: number, radius: number) => {
    context.save();

    context.beginPath();
    context.fillStyle = 'orange';
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
    context.restore();
};
