# React Props

## 1. insert Inner HTML to children component

```tsx
interface PersonProp {
  name: string;
  age: number;
  children?: ReactNode;
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