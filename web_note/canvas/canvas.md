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
canvasContext.arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
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
