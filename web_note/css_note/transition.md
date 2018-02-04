# Transition

## 1. basic

```css
.box {
  /* 过渡的属性详解*/
  /* 过渡属性*/
  /* 如果希望所有的属性都发生过渡 使用过all*/
  transition-property: all;
  /* 过渡持续时间*/
  transition-duration:4s;
  /* 运动曲线*/
  /* linear 线性  ease ease-in ease-out  ease-in-out */
  transition-timing-function: ease-in-out;
  /* 过渡延迟*/
  transition-delay: 1s;
  /* 简写*/

  transition:width 4s ease-in-out 0s;
}
```