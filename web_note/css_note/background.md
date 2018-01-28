# background

## 1. background-image

```css
background-image: url("");
```

## 2. background-repeat

avaliable values:

repeat(默认)  |  no-repeat |   repeat-x   |  repeat-y 背景平铺

## 3. background-position

avaliable values:

left  |  right  |  center  |  top  | bottom

Note:

- always set up 2 values
- default value is `left top`
- 方位值只写一个的时候，另外一个值默认居中
- 写2个具体值的时候，第一个值代表水平方向，第二个值代表垂直方向。

## 4. background-attachment

avaliable values:

scroll (default) | fixed

Note:

- if we set up scroll, then background image position is based on the original div, and the backrgound image position won't change position when scroll.

- if we set up fixed, then background image position is based on the web browser, and the ackrgound image position will change position when we scroll.

## 5. background 连写

```css
background: #000 url("") no-repeat center center scroll;
```