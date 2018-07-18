# Life Cycle

## 1. Life Cycle (Mounting)

The Life cycle for react mount is `constructor()` => `static getDerivedStateFromProps()` => `componentWillMount() (UNSAFE)` => `render()` => `Render Child Component` => `componentDidMount()`.

![react life cycle](./images/reactLifeCycle.png)

## 2. Life Cycle (Updating)

The life cycle for react update is `componentWillReceiveProps() (UNSAFE)` => `static getDerivedStateFromProps(nextProps, prevState)` => `shouldComponentUpdate()` => `componentWillUpdate() (UNSAFE)` => `render()` => `getSnapshotBeforeUpdate()` => `componentDidUpdate()`

Note:

-   **You cannot use this.setState() in `componentWillUpdate` method. If you need to update state in response to a prop change, use `getDerivedStateFromProps(nextProps, prevState)` instead.**

-   But from react 16.4, if we want to change state each time when out side props change, please consider using `key` property. Check this: [avoid using getDerivedStateFromProps](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key)

## 3. Error handling

Only this one: `componentDidCatch()`
