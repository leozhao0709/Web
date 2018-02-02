# Video

## 1. basic

```html
<video src="./resource/video/movie.mp4" autoplay controls></video>
```

Note:

- `autoplay` 自动播放
- `controls` 是否显示默认播放控件
- `loop` 循环播放
- `preload` 预加载，同时设置了autoplay，此属性将失效
- `width` 设置播放窗口宽度
- `height` 设置播放窗口的高度
- **video is inline-block element**.

## 2. compatibility

![audio compatibility](./images/videoCompatibility.png)

resolve:

```html
<video controls>
  <source src="./resource/video/movie.ogg" />
  <source src="./resource/video/movie.mp4" />
  <output>浏览器不支持html视频播放</output>
</video>
```