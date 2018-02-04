# Gradient

## 1. linear gradient

linear-gradient线性渐变指沿着某条直线朝一个方向产生渐变效果.

基本语法:

```css
/*
    linear-gradient:
    方向 to   right  left  top  bottom  / 角度：45deg(度)
    起始颜色 ：yellow
    终止颜色： green
*/

.box1 {
    background-image: linear-gradient(to left, yellow, green);
}

.box2 {
    background-image: linear-gradient(45deg, yellow, green);
}

.box3 {
    background-image: linear-gradient(to right,
    yellow 0%,
    pink 30%,
    blue 60%,
    red 100%);
}

.box4 {
    background-image: linear-gradient(135deg,
    #000 0%,
    #000 25%,
    yellow 25%,
    yellow 50%,
    green 50%,
    green 75%,
    red 75%,
    red 100%);
}
```

## 2. radial gradient

```css
/*
    径向渐变：
    radial-gradient（水平/垂直辐射半径 at 中心的位置，起始颜色，终止颜色）;
    中心点位置：at  left  right  center bottom  top
*/
div:nth-child(1){
    background-image: radial-gradient(at left top,yellow,green);
}

div:nth-child(2){
    background-image: radial-gradient(at 50px 50px,yellow,green);
}

div:nth-child(3){
    background-image: radial-gradient(100px at center,yellow ,green);
}

div:nth-child(4){
    background-image: radial-gradient(100px at center,
    yellow 0% ,
    green 30%,
    blue 60%,
    red 100%);
}

div:nth-child(5){
    background-image: radial-gradient(100px 50px  at center,yellow ,green);
}
``