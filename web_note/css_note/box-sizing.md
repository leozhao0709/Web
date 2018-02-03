# box-sizing

CSS3中可以通过box-sizing 来指定盒模型, 即可指定为content-box, border-box, 这样我们计算盒子大小的方式就发生了改变.

box-sizing 有两个值:`content-box`  `border-box`

可以分成两种情况:

- `content-box`: 对象的实际宽度等于设置的width值和border、padding之和

- `border-box`: 对象的实际宽度就等于设置的width值, 即使定义有border和padding也不会改变对象的实际宽度.