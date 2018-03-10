# Video

## 1. responsive video

using these css will make the background video looks good.

```html
<div class="bg-video">
    <video class="bg-video__content" autoplay muted loop>
        <source src="img/video.mp4" type="video/mp4">
        <source src="img/video.webm" type="video/webm"> Your browser is not supported!
    </video>
</div>
```

```scss
.bg-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: .15;
    overflow: hidden;

    &__content {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
```