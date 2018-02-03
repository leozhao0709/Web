# Text

## 1. text-shadow

text-shadow, 可分别设置偏移量, 模糊度, 颜色(可设透明度).

1. 水平偏移量 正值向右 负值向左;
2. 垂直偏移量 正值向下 负值向上;
3. 模糊度是不能为负值

```css
ul>li:nth-child(1) {
  text-shadow: 5px 5px 2px #ccc;
}
```