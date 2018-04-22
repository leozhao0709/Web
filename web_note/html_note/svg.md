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
            transform="rotate(90, 250, 250)"
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

- We can also use `transform="rotate(90, 250, 250)"` to do a rotate. `rotate(deg, cx, cy)`.

- We can also nest `<svg x={50} y={50}></svg>` within an svg. Note the inner svg had a x, y offset. it works like `transform="translate(x, y)"`

## 2. Path shape

`<path d="someCommand" />`

For using path, we need to know some command:

- `"M100 100"/"m100 100"`: move the pen to point (100, 100). `M100 100` means move pen to exactly point(100, 100). While `m100 100` means move pen to relative current point (100, 100). If current point is (50, 50), `m100 100` means move pen to (150, 150), while `M100 100` means move pen to (100, 100).

- `"L200 100"/"l200 100"`: `"L200 100"`, it means drawing line. while `"l200 100"` means draw a line from current point to a point which relative to current point (200, 100). If current point is (100, 100), then `l200 100`, means draw a line from (100, 100) to point(300, 200). while `L200 100` means draw a line from (100, 100) to (200, 100).

- drawing a line must set `stroke-width` and `stroke` properties. BTW, **if you have 2 or more unclosed lines, then `path` will automatically closed**.

- `"A rx ry x-axis-rotation large-arc-flag sweep-flag x y"/"a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy"`. This is used to draw an arc. `sweek-flag` means clockwise or not. example: `<path d="M150 150 A50 50 0 0 0 100 100" />`

```tsx
<svg width={500} height={500}>
    <g
        strokeWidth={5}
        stroke="red"
        fill="none"
    >
        <path
            d="M150 150
                l200 100"
        />
        <path
            d="M150 150
               A50 50 0 0 0 100 100"
        />
    </g>
</svg>
```

## 3. Text SVG

```tsx
<svg width="100%" height="100%" >
    <text
        x={300}
        y={50}
        stroke="black"
        fill="red"
        strokeWidth={2}
        fontSize={45}
        // letterSpacing={5}
        // wordSpacing={15}
        textDecoration="line-through"
        // transform="rotate(25, 50, 100)"
        // writingMode="tb"
        direction="rtl"
        unicodeBidi="bidi-override"
    >
        <tspan x={150} y={100} >This is my text1</tspan>
        <tspan x={150} y={200} >This is my text2</tspan>
    </text>
</svg>
```

Note:

- we can use `letterSpacing` and `wordingSpacing` properties to add letter or word space.

- Using `writingMode`, we can define the text writing direction. `writingMode="tb"` means writing **top to bottom**.

- Using `direction` and `unicodeBidi` properties can flip a text. These 2 properties must be used at same time to flip a text. `direction="rtl"` means direction is `right to left`.

- There is no text-wrapper property for svg text. If we want to change line, then use `<tspan></tspan>`

## 4. a link

The svg `a` link just works like html a link.

```tsx
<svg width="100%" height="{00%" >
    <a href="https://google.com" target="_blank" >
        <rect
            x={100}
            y={100}
            width={50}
            height={50}
            stroke="red"
            fill="yellow"
            strokeWidth={3}
        />
    </a>
</svg>
```

## 5. use `<defs></defs>` to create reusable part (like 宏定义)

```tsx
<svg width="100%" height="100%" >
    <defs>
        <g id="test" >
            <a href="https://google.com" target="_blank" >
                <rect
                    x={50}
                    y={50}
                    width={50}
                    height={50}
                    stroke="red"
                    fill="yellow"
                    strokeWidth={3}
                />
            </a>
        </g>
    </defs>
    <use x={0} y={0} xlinkHref="#test" />
    <use x={50} y={50} xlinkHref="#test" />
</svg>
```

Note:

- we need to use `<use />` tag to call the defined part.

- use `xlinkHref="#test"` to call the `<g id="test"></g>`. That's why we need to define a `g` tag with id in `<defs></defs>`

## 6. symbol

```tsx
<svg width="100%" height="100%" >
    <symbol id="test" >
        <rect
            x={50}
            y={50}
            width={50}
            height={50}
        />
    </symbol>
    <use x={100} y={100} xlinkHref="#test" stroke="red" fill="yellow" strokeWidth={3} />
    <use x={50} y={50} xlinkHref="#test" stroke="black" fill="green" strokeWidth={5} />
</svg>
```

Note:

- We can use symbol to create a symbol and we define an id for this symbol, then using `<use></use>` to call this symbol.

- If we define styles in inner symbol, then the style will **not** work. So when using a symbol, don't do any styles in inner component.

## 7. use sprite svg example

```html
<div class="user-nav__icon-box">
    <svg class="user-nav__icon">
        <use xlink:href="img/sprite.svg#icon-bookmark" />
    </svg>
    <span class="user-nav__notification">7</span>
</div>
```
