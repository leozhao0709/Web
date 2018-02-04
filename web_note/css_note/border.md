# Border

## 1.border-radius

border-radius    每个角可以设置两个值, x 值, y值

```css
/*border-radius: 60px;*/

/*单个属性 : 水平半径 垂直半径*/
/*border-top-left-radius: 60px 120px;*/
/*border-top-right-radius: 60px 120px;*/
/*border-bottom-left-radius: 60px 120px;*/
/*border-bottom-right-radius: 60px 120px;*/

/* border-raduis:水平半径/垂直半径 */
/*border-radius: 60px 60px 60px 60px/ 120px 120px 120px 120px ;*/

/*简化*/
/*border-radius: 60px/120px;*/

/* 四个角的说半径都相同是简写*/
/*border-radius: 60px;*/

/* 赋值顺序 从左上开始，顺时针赋值,如果当前角没有值，取对角的值  */
/*border-radius: 20px 60px 100px 140px;*/
/*border-radius: 20px 60px;*/
```

## 2. border-image

border-image 设置边框的背景图片.

`border-image: url("images/border.png") 27/20px round`

border-image-slice: 该属性规定图像的上、右、下、左侧边缘的向内偏移，图像被分割为九个区域：四个角、四条边以及一个中间区域。除非使用了关键词 fill，否则中间的图像部分会被丢弃。如果省略第四个数值/百分比，则与第二个值相同。如果省略第三个值，则与第一个值相同。如果省略第二个值，则与第一个值相同 (点九图裁剪)

`border-image-slice:27,27,27,27`

border-image-width: 设置边框图片宽度
`border-image-width:20px;`

border-image-repeat: 边框平铺的样式, 有`strech`, `round`, `repeat`三个值. `round`使用比较多.
