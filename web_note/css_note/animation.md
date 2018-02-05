# Animation

## 1. Basic

```css
.box{
    width: 200px;
    height: 200px;
    margin:100px ;
    background-color: green;
    /* 调用*/
    /* infinite:无限次*/
    /* animation: 动画名称 持续时间  执行次数  是否反向  运动曲线 延迟执行*/
    /*animation: move 1s infinite alternate linear 3s ;*/

    animation: gun 4s;
}

/* 定义多组动画*/
@keyframes gun {
    0%{
        transform:translateX(0px) translateY(0px);
        background-color: green;
        border-radius: 0px;
    }

    25%{
        transform:translateX(500px) translateY(0px);
    }

    50%{
        transform:translateX(500px) translateY(300px);
        border-radius: 50%;
    }


    75%{
        transform:translateX(0px) translateY(300px);
    }

    100%{
        transform:translateX(0px) translateY(0px);
        background-color: red;
        border-radius: 0;
    }
}
```

## 2. properties detail

1. animation-name设置动画序列名称
2. animation-duration动画持续时间
3. animation-delay动画延时时间
4. animation-timing-function动画执行速度,linear,ease等
5. animation-play-state动画播放状态, running, paused等
6. animation-direction动画逆播, alternate等
7. animation-fill-mode动画执行完毕后状态，forwards, backwards等
8. animation-iteration-count动画执行次数，inifinate等
9. **steps(60)** 表示动画分成60步完成

```css
秒针案例
div{
    width: 3px;
    height: 200px;
    background-color: #000;
    margin:100px auto;
    transform-origin:center bottom;
    animation:rot 60s steps(60) infinite;
}

@keyframes rot {
    0%{
        transform:rotate(0deg);
    }

    100%{
        transform:rotate(360deg);
    }
}
```

Note:

- **animation 同样跟iOS一样, 是个假象, element frame and position不会改变.**
