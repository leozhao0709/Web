# Transform

## 1. scale

`scale(x, y)` 可以对元素进行水平和垂直方向的缩放, x, y的取值可为小数，不可为负值；

```css
.box .box2:hover{
    /*width: 500px;*/
    /*height: 400px;*/
    background-color: blue;

    /* transform:  css3中用于做变换的属性
        scale：放缩
        取值：大于1 放大  小于1缩小  不能为百分比
        scale(x,y)
        x：水平放缩倍数
        y:垂直方向的放缩倍数
        如果只写一个值就是等比例缩放
    */
    transform:scale(2,0.5);
}
```

## 2. translate(x, y)

translate(x, y) 可以改变元素的位置, x, y可为负值

```css
.box .box2{
    background-color: pink;
    /* 过渡*/
    transition:all 1s;
    /*变换*/
    /* transform:
    translate()
        让盒子发生位移，
        translate(x) ：一个值 水平方向位移，竖直方向不变
        tarnslate(x,y): x:水平方向上的位移，y 竖直方向上的位移
        x，y 可以为正也可以为负
            为正：向下 向右移动
            为负：向上 向左移动

        取值可以为百分比，百分比以自身宽度为参考

    */
    transform:translate(50%);
}
```

## 3. rotate(deg)

rotate(deg) 可以对元素进行旋转, 正值为顺时针, 负值为逆时针, 可以使用`transform-origin`改变旋转点. 类似iOS layer锚点.

```css
/* transform:
    rotate() 旋转
    deg：角度
    正值：顺时针旋转
    负值：逆时针旋转
*/
.box:hover{
    transform:rotate(-45deg);

    /* 变换中心*/
    /*
        transform-origin:
        left top center  right  bottom
        50px 50px
    */
    transform-origin: center bottom;
}
```