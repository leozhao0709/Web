# Life Cycle

## 1. Life Cycle (Mounting)

The Life cycle for react mount is `constructor()` => `componentWillMount()` => `render()` => `Render Child Component` => `componentDidMount()`.

![react life cycle](./images/reactLifeCycle.png)

## 2. Life Cycle (Updating)

The life cycle for react update is `componentWillReceiveProps()` => `shouldComponentUpdate()` => `componentWillUpdate()` => `render()` => `componentDidUpdate()`

Note:

- **You cannot use this.setState() in `componentWillUpdate` method. If you need to update state in response to a prop change, use `componentWillReceiveProps` instead.**
