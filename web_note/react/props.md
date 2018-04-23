# React Props

## 1. insert Inner HTML to children component

```tsx
interface PersonProp {
  name: string;
  age: number;
}

const Person = (props: PersonProp) => {
  return (
    <div>
      <p>I'm {props.name} and I am {props.age}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
```

Note: We can use `props.children` to insert the parent innerHTML to child component.

## 2. create reusable component

Using the `React.HtmlHTMLAttributes<{}>` to do this reusable component

```tsx
import * as React from 'react';
import * as styles from './Button.css';

interface ButtonProps extends React.HtmlHTMLAttributes<{}> {
    text?: string;
    onClick: () => void;
}

const Button: React.SFC<ButtonProps> = (props: ButtonProps) => {

    return (
        <button
            className={styles.button}
            onClick={props.onClick}
            {...props}
        >
            {props.text}
        </button>
    );
};

Button.defaultProps = {
    text: 'Button',
};

export default Button;
```