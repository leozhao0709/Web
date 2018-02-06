# FullScreen

HTML5规范允许用户自定义网页上**任一元素**全屏显示.

`requestFullscreen()` 开启全屏显示
`cancleFullscreen()` 关闭全屏显示

不同浏览器需要添加前缀如:

- webkitRequestFullScreen
- mozRequestFullScreen
- webkitCancleFullScreen
- mozCancleFullScreen

通过`document.fullScreen`检测当前是否处于全屏, 但是不同浏览器需要添加前缀:

- document.webkitIsFullScreen
- document.mozFullScreen

全屏伪类(css):

- `.box:full-screen{}`
- `.box:-webkit-full-screen{}`
- `.box:moz-full-screen{}`

example:

```js
<script>
    var box=document.querySelector('.box');
    document.querySelector('.box').onclick=function(){
    //box.requestFullscreen();
    //兼容写法
    if(box.requestFullscreen){
        box.requestFullscreen();
    }else if(box.webkitRequestFullScreen){
        box.webkitRequestFullScreen();
    }else if(box.mozRequestFullScreen){
        box.mozRequestFullScreen();
    }
</script>
```