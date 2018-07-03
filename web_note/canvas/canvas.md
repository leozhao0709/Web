# Canvas

`Canvas` height and width must be set in `Canvas` tag, **not css**!!! or using `setAttribute` to set width and height.

## 1. draw lines

```ts
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
canvasContext.moveTo(30, 30); // starting point of (x, y)
canvasContext.lineTo(80, 80); // end point a line (x, y)
canvasContext.lineTo(130, 30);
canvasContext.stroke(); // draw the line
```

## 2. draw arcs

```ts
canvasContext.beginPath();
canvasContext.arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
canvasContext.fill() // file the arc
```

## 3. draw 抛物线

```ts
canvasContext.beginPath();
canvasContext.strokeStyle = 'blue';
canvasContext.lineWidth = 10;
canvasContext.moveTo(0, 100); // start point
canvasContext.quadraticCurveTo(500, 100, 400, 250); // control point, end point
canvasContext.stroke();
```

## 4. draw rect

```ts
canvasContext.strokeRect(20, 20, 100, 100);
canvasContext.fillRect(20, 20, 100, 100);
canvasContext.clearRect(20, 20, 100, 100);
```

## 5. draw text

```ts
context.font = 'italic bold 45px Inconsolata';

const fText = 'Fill Text on Canvas';
context.fillText(fText, 80, 100); // fillText(text: string, x: number, y: number, maxWidth?: number)

const sText = 'Stroke Text on Canvas';
context.strokeText(sText, 80, 200); // strokeText(text: string, x: number, y: number, maxWidth?: number)
```

## 6. draw image

```ts
drawImage(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap, dstX: number, dstY: number): void;
drawImage(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap, dstX: number, dstY: number, dstW: number, dstH: number): void;
drawImage(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap, srcX: number, srcY: number, srcW: number, srcH: number, dstX: number, dstY: number, dstW: number, dstH: number): void;
```

## 7. save and restore state

Note: `save` and `restore` are working as a stack.

```ts
context.save();
context.restore();
```

## 8. create pattern

```ts
context.createPattern(image, 'repeat'); // 'repeat'|'repeat-x'|'repeat-y'|'no-repeat'
```

## 9. gradient

```ts
// var linearGradient = context.createLinearGradient(240, 40, 660, 680);
// linearGradient.addColorStop(0, "red");
// linearGradient.addColorStop(0.25, "blue");
// linearGradient.addColorStop(0.5, "green");
// linearGradient.addColorStop(0.75, "orange");
// linearGradient.addColorStop(1, "white");

// RADIAL GRADIENT
var radialGradient = context.createRadialGradient(570, 380, 300, 570, 300, 20);
radialGradient.addColorStop(0, 'red');
radialGradient.addColorStop(0.25, 'blue');
radialGradient.addColorStop(0.5, 'green');
radialGradient.addColorStop(0.75, 'orange');
radialGradient.addColorStop(1, 'white');

context.strokeStyle = 'blue';
context.lineWidth = 4;
context.fillStyle = radialGradient;
context.rect(240, 40, 420, 420);
context.stroke();
context.fill();
```

## 10. animation

```ts
const ballAnimate = (context: CanvasRenderingContext2D) => {
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

    window.requestAnimationFrame(() => {
        ballAnimate(context);
    });
};

const drawBall = (context: CanvasRenderingContext2D, x: number, y: number, radius: number) => {
    context.save();

    context.beginPath();
    context.fillStyle = 'orange';
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
    context.restore();
};
```

## 11. transform

important:

-   **All the canvas transform is based on canvas itself!!!**
-   **scale in canvas is not only scale width and height, it also scale x and y**
-   **The rotation center point is always the canvas origin. To change the center point, we will need to move the canvas by using the `translate()` method**

```ts
context.rotate(45 * (Math.PI / 180));
context.scale(0.5, 0.5);
```

## 12. mouse event

Using `canvas.getBoundingClientRect()` to get the canvas bounds!

```ts
const canvasBoundReact = canvas.getBoundingClientRect();
canvas.addEventListener('mousemove', event => {
    // tslint:disable-next-line:no-console
    console.log(event.clientX - canvasBoundReact.left);
    // tslint:disable-next-line:no-console
    console.log(event.clientY - canvasBoundReact.top);
});
```
