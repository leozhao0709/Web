# transform3D

## 1. 左手法则

左手握住旋转轴, 竖起拇指指向旋转轴正方向, **正向就是其余手指卷曲的方向**.

## 2. rotateX/rotateY/rotateZ

```css
img{
    /* 过渡*/
    transition:transform 2s;
}

.rotateX:hover img{
    transform:rotateX(360deg);
}
```

## 3. translateX/translateY/translateZ

```css
.box{
    width: 250px;
    height: 250px;
    background: green;
    transition:all 1s;
}

.box:hover{
    transform:translateX(300px);
}
```

## 4. perspective (透视, 近大远小)

透视 设置的**用户眼睛和屏幕的距离**, 仅仅只是视觉呈现出3d效果，并**不是正真的3d**. 数值越小, 效果越明显.

```css
.out{
    width: 500px;
    height: 500px;
    border: 1px solid #000;
    background-color: blue;
    margin:100px auto;

    /* 透视*/
    /* 透视 设置的 用户 眼睛和屏幕的距离
    仅仅只是视觉呈现出3d 效果，并不是正真的3d*/
    perspective: 400px;

    transform:rotateY(10deg);
}

.in{
    width: 300px;
    height: 300px;
    background-color: red;
    margin:100px auto;

    /*transition:all 1s;*/
    transform:translateX(200px) rotateY(123deg);
}
```

Note: **perspective有两种写法**

- 作为一个属性, 设置给父元素, 作用于所有3D转换的子元素
- 作为transform属性的一个值, 做用于元素自身

## 5. transform-style (设置3d or 2d展现)

设置内嵌的元素在 3D 空间如何呈现, 这些子元素必须为转换原素.

3D元素构建是指某个图形是由多个元素构成的，可以给这些元素的父元素设置`transform-style: preserve-3d`来使其变成一个真正的3D图形

- flat: 所有子元素在 2D 平面呈现
- preserve-3d: 保留3D空间

## 6. backface-visibility

设置元素背面是否可见

- `visible`: Default value. The backside is visible
- `hidden`: The backside is not visible
