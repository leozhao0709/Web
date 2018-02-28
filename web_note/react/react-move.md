# react-move

React-move is an animation library for **react**.

## 0. install

`npm install --save react-move d3-ease` and `npm install --save-dev d3-ease`

## 1. Animate

The Animate component allows you to create complex animated transitions in React. If you are looking to run transitions on an array of objects you probably want to use the NodeGroup component. The Animate component is typically used in cases where you have a single child you want to render.

```tsx
import * as React from 'react';
import { StatelessComponent } from 'react';
import Animate from 'react-move/Animate';
import { easeExpInOut } from 'd3-ease';

interface FadeAnimationProps {
    // tslint:disable-next-line:no-any
    children: React.ReactElement<any>;
    show: boolean;
    fadeInTime: number;
    fadeOutTime: number;
}

const FadeAnimation: StatelessComponent<FadeAnimationProps> = (props: FadeAnimationProps) => {

    return (
        <div>
            <Animate
                show={props.show}
                start={{
                    opacity: 0,
                }}

                enter={{
                    opacity: [1],
                    timing: { duration: props.fadeInTime, ease: easeExpInOut }
                }}

                update={{}}

                leave={{
                    opacity: [0],
                    timing: { duration: props.fadeOutTime, ease: easeExpInOut }
                }}
            >
                {({ opacity }: React.CSSProperties) => {
                    return React.cloneElement(props.children, { style: { opacity } });
                }}
            </Animate>
        </div>
    );
};

FadeAnimation.defaultProps = {
};

export default FadeAnimation;
```

Note:

- For `Animate`, there are `show`, `start`, `enter`, `update` and `leave` properties need to define. For both these properties, we need to pass an object.

- For `start`, it needs an normal object, but for other properties, the object need to **pass an string or number array**, like: `opacity: [1]`, `backgroundColor: ['red']`

- **Animate tag always just works with one child**, and we need to create a function for Animate child. Note we are using destructuring for this function parameter. Note the parameter type is `React.CSSProperties`.

- For **Fade** animation, please use `Animate` and do not use `NodeGroup`.

## 2. NodeGroup

The `NodeGroup` component allows you to create complex animated transitions in React. You pass it an array of objects and a key accessor function and it will run your enter, update and leave transitions as the data updates. The idea is similar to transition components like react-transition-group or react-motion's TransitionMotion but you use objects to express how you want your state to transition. Not only can you can have independent duration, delay and easing for entering, updating and leaving but each individual key in your state can define its own timing

```tsx
<NodeGroup
    data={props.datas}
    keyAccessor={(d) => d.id}
    start={(d) => ({
        opacity: 0,
        backgroundColor: d.backgroundColor
    })}

    enter={(d, index) => ({
        opacity: [1],
        // backgroundColor: [d.backgroundColor],
        timing: { delay: index * 500, duration: 500, ease: easeExpInOut }
    })}

    update={(d, index) => ({
        backgroundColor: [d.backgroundColor],
        timing: { delay: index * 500, duration: 500, ease: easeExpInOut }
    })}

    leave={(d, index) => ({
        opacity: [0],
        timing: { delay: (3 - index - 1) * 500, duration: 500, ease: easeExpInOut }
    })}
>

    {(nodes) => (
        <div>
            {nodes.map(({ key, data, state: { opacity, backgroundColor } }) => {
                return (
                    <div
                        key={key}
                        style={{ opacity, backgroundColor }}
                        className={styles[`content${data.id + 1}`]}
                    >
                        <p>{opacity}</p>
                    </div>
                );
            })}
        </div>
    )}
</NodeGroup>
```

Note:

- `NodeGroup` is a data drive group.

- For fade animation, **do not** use this.

- `start`, `enter`, `leave` and `update` are all functions.

- same as `Animate`, except start, others need to **pass an string or number array**, like: `opacity: [1]`, `backgroundColor: ['red']`.
