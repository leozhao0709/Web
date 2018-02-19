# react-router

## 1. install

1. `npm install --save react-router-dom`

2. Then in `App.js`, Wrap the jsx in `BrowserRouter`

    ```jsx
    class App extends Component {
        render () {
            return (
                <BrowserRouter>
                    <div className="App">
                    <Blog />
                    </div>
                </BrowserRouter>
            );
        }
    }
    ```

## 2. Define Route

```jsx
<Route path="/" exact render={() => <h1>Home</h1>} />
<Route path="/" render={() => <h1>Home 2</h1>} />

// for component
<Route path="/posts" component={Posts} />
```

## 3. use Link instead of a link

```jsx
<header>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
            }}>New Post</Link></li>
        </ul>
    </nav>
</header>
```

## 4. withRouter HOC

If we want to pass the router props down to a nested component, we can use the `withRouter` HOC.

```jsx
import {withRouter} from 'react-router-dom';

const post = (props) => {
    console.log(props);
    return (
        <>
            <h1>{props}</h1>
        </>
    )
}

export default withRouter(post);
```