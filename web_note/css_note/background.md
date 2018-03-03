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

## 6. background-size

background-size设置背景图片的尺寸, 可以设置具体数值, 也可以设置`cover` or `contain`

- cover会自动调整缩放比例, 保证图片始终填充满背景区域, 如有溢出部分则会被隐藏.

- contain会自动调整缩放比例，保证图片始终完整显示在背景区域.

- 也可以使用长度单位或百分比.

## 6. background-origin

所谓的背景原点就是调整背景位置的一个参照点. 调整背景图片定位的参照原点. 有三个值:

- `border-box`以边框做为参考原点
- `padding-box`以内边距做为参考原点 (default value)
- `content-box`以内容区做为参考点

## 7. background-clip

- `border-box`裁切边框以内为背景区域 (default value)
- `padding-box`裁切内边距以内为背景区域
- `content-box`裁切内容区做为背景区域

The following code will apply a linear-graid for the inner text.

```css
.box {
  background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
```

## 8. multiple background image

以逗号分隔可以设置多背景，可用于自适应局

```css
.box {
  background:url(images/bg1.png) no-repeat left top,
            url(images/bg2.png) no-repeat right top,
            url(images/bg4.png) no-repeat left bottom,
            url(images/bg3.png) no-repeat right bottom,
            url(images/bg5.png) no-repeat center center;
}
```