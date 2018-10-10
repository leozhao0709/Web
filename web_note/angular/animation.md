# angular Animation

## 0. unlock angular animations

1.  open **polyfills.ts**, uncommment `import 'web-animations-js';`
2.  `npm install --save web-animations-js @angular/animations`
3.  In `app.module.ts`, import `BrowserAnimationsModule` for your app

## 1. really basic animations

```ts
import { animate, state, style, transition, trigger } from '@angular/animations';

export const animationTrigger = trigger('animationTrigger', [
    state(
        'initialState',
        style({
            backgroundColor: 'orange',
            width: '100px',
            height: '100px'
        })
    ),
    state(
        'endState',
        style({
            backgroundColor: 'lightblue',
            width: '100px',
            height: '100px'
        })
    ),

    transition('initialState <=> endState', [
        animate(
            2000,
            style({
                backgroundColor: 'blue',
                width: '100px',
                height: '100px'
            })
        ),
        animate(
            2000,
            style({
                backgroundColor: 'red',
                width: '100px',
                height: '100px'
            })
        ),
        animate('2s 500ms ease-in') // need this time to reach last state
    ])
]);
```

Note:

-   You can have as many `state` you want.
-   I prefer at least 2 state `initialState` and `endState` unless you `initialState` or `endState` is null. But if you had some null state, then it's better to consider `:enter` or `:leave`. Please check fade animation.
-   In `transition`, you can define any **internal** animation state with `animate`.
-   In template, you need to use syntax `@animationTrigger` to get the animation.

## 2. fade animation

```ts
export const fadeAnimation = trigger('fade', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate(300)
    ]),
    transition(':leave', [
        animate(
            300,
            style({
                opacity: 0
            })
        )
    ])
]);
```

Note:

-   The `style` added part is important here. If it's in transition, then it means **immediately** set the style to. If it's in animation, then it will come together with animation.

## 3. Group animation

```ts
export const addNumberAnimation = trigger('addNumberAni', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        group([
            animate(
                1000,
                style({
                    opacity: 0.5
                })
            ),
            animate(
                1000,
                style({
                    backgroundColor: 'red'
                })
            )
        ]),
        animate(1000)
    ])
]);
```

Note:

-   With `group`, you can write **parallel** animations
