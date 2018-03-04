# New Properties

## 1. clip-path

This property will clip an area.

```css
.box {
    -webkit-clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);
}
```

This will clip an polygon area.

## 2. background-blend-mode

If you have multiple background-image (always a linear-graident with an image), then this property will give a `filter`(滤镜) effect. always use `screen` for this property.

## 3. box-decoration-break

The box-decoration-break property specifies how the background, padding, border, border-image, box-shadow, margin, and clip-path of an element is applied when the box for the element is fragmented.

box-decoration-break: slice|clone|initial|inherit|unset;

## 4. shape-outside

The `shape-outside` property is specified using the values from the list below, which define the float area for **float** elements. The float area determines the shape around which inline content (float elements) wrap.

```css
.story__shape {
    width: 15rem;
    height: 15rem;
    float: left;
    -webkit-shape-outside: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    transform: translateX(-3rem) skewX(12deg);
    position: relative;
}
```

Then the outside text will have a circle shape of this story__shape class.

## 5. filter (滤镜)

This property can apply some filters, like blur or brightess.

```scss
.story:hover .story__img {
    transform: translateX(-4rem) scale(1);
    filter: blur(3px) brightness(80%);
}
```
