# Form Element for React

## 1. Input Element

- For child component:

  ```tsx
  interface PersonProps {
    children?: ReactNode;
    name?: string;
    age?: number;
    change?: (e: React.FormEvent<HTMLInputElement>) => void;
  }

  const Person: StatelessComponent<PersonProps> = (props: PersonProps) => {
    return (
      <div>
        <p>I'm {props.name} and I'm {props.age} </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name} />
      </div>
    );
  };
  ```

  Note:

  - the event handler type should be `(e: React.FormEvent<HTMLInputElement>) => void;`

- For parent component

  ```tsx
  render() {
    return (
      <div className={styles.App} >
        <h1>Hi, This is {this.props.title} App</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        {this.state.persons.map((person, index) => {
          return <Person
            name={person.name}
            age={person.age}
            key={index}
            change={(e) => this.nameChangedHandler(e, index)}
          />;
        })}
      </div>
    );
  }
  ```

  Note:

  - If we want to pass parameters to `nameChangedHandler`, then can use this syntax: `change={(e) => this.nameChangedHandler(e, index)}`
  - If we don't need pass parameters, then we can simply just use this `change=this.nameChangedHandler`

- event.target.value

  If we want to use `event.target.value` in typescript react, we should use `e.currentTarget.value`

## 2. FormEvent

```jsx
private handleAddOption = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const option = (e.currentTarget.elements as any).option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => {
      return {
        error
      };
    });

    if (!error) {
      (e.currentTarget.elements as any).option.value = '';
    }
  }

render() {
    return (
      <div>
        {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption} className='add-option'>
          <input type='text' name='option' className='add-option__input' />
          <button className='button'>Add Option</button>
        </form>
      </div>
    );
  }
```
