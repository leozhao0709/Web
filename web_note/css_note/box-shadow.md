# Box-shadow

## 1. box-shadow

box-shadow  与 text/shadow 用法差不多

- box-shadow: `水平位移 垂直位移  模糊程度 阴影扩展长度 阴影颜色`
- 水平偏移量 正值向右 负值向左
- 垂直偏移量 正值向下 负值向上
- 模糊度是不能为负值
- inset可以设置内阴影；
- 设置边框阴影不会改变盒子的大小, 即不会影响其兄弟元素的布局
- 可以设置多重边框阴影，实现更好的效果，增强立体感

```css
/* box-shadow: 水平位移 垂直位移  模糊程度 阴影扩展长度 阴影颜色 */
/*box-shadow:3px 3px 3px 3px #666 inset;*/
/*box-shadow:3px 3px 3px 3px #666 inset -5px -5px 27px green;*/
```
