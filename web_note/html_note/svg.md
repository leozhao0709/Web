# SVG

## 1. create a svg file

When we create a svg file, we should use this tag in top. We can also insert `<svg></svg>` tag in html file to create some svg shape.

```xml
<svg xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     width="100%"
     height="100%">
    <!-- <circle cx="100" cy="100" r="50" /> -->
</svg>
```

## 2. basic shape

For jsx, we are use {number} to define properties. But for plain html, please use string.

```jsx
<div className={styles.basicSvg} >
    <svg width={500} height={500} >
        <g
            strokeWidth={3}
            stroke="blue"
            fill="red"
        >
            {/* rectangle */}
            <rect
                x={100}
                y={100}
                width={100}
                height={100}
                rx={10} // 圆角半径
                ry={10} // 圆角半径
            />
            <rect
                x={130}
                y={140}
                width={200}
                height={100}
                rx={10} // 圆角半径
                ry={10} // 圆角半径
                stroke="black"
                fill="blue"
                opacity={0.7}
            />
            <circle
                cx={160}
                cy={230}
                r={50}
                opacity={0.7}
            />
            <ellipse
                cx={200}
                cy={130}
                rx={30}
                ry={50}
                opacity={0.7}
            />
            {/* single line */}
            <line
                x1={250}
                y1={100}
                x2={350}
                y2={250}
                opacity={0.5}
                strokeWidth={5}
            />
            {/* multiple line(triangle) */}
            <polyline
                points="190,130 280,280 180,280 190,130"
                opacity={0.7}
            />
            {/* self close multiple line */}
            <polygon
                opacity={0.7}
                points="250,50 300,50 300,100 350,100 350,150"
            />
        </g>
    </svg>
</div>
```

Note:

- `<g></g>` tag means group, we can set some shared properties here.

- `<line/>` tag is only drawing one line, you need to sepecify 2 points for each x, y, which is not efficient. use `<polyline />` will increase efficiency.

- `<polyline />` needs specify `points` property, you can **only pass string values** for this property. each point is split by comma. **`<polyline />` won't do self close**.

- `<polygon/>` works almost same as `<polyline />`, but **it will do an automatically close**. So if you want a closed shape, then use this tag.