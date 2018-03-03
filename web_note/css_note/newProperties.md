# New Properties

## 1. clip-path

This property will clip an area.

```css
.box {
    clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);
}
```

This will clip an polygon area.

## 2. background-blend-mode

If you have multiple background-image (always a linear-graident with an image), then this property will give a `filter`(滤镜) effect. always use `screen` for this property.

## 3. box-decoration-break

The box-decoration-break property specifies how the background, padding, border, border-image, box-shadow, margin, and clip-path of an element is applied when the box for the element is fragmented.

box-decoration-break: slice|clone|initial|inherit|unset;
