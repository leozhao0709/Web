import * as styles from './index.css';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

window.onload = () => {
    const app = document.querySelector('#root')!;

    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', '800px');
    canvas.setAttribute('height', '600px');
    canvas.classList.add(styles.canvas);
    app.appendChild(canvas);

    const context = canvas.getContext('2d')!;

    context.font = '45px Inconsolata';

    const fText = 'Fill Text on Canvas';
    context.fillText(fText, 80, 100);

    const sText = 'Stroke Text on Canvas';
    context.strokeText(sText, 80, 200);

    context.save();
    context.restore();
};
