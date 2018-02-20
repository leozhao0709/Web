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

Using `Route` to define the small route.

```jsx
<Route path="/" exact render={() => <h1>Home</h1>} />
<Route path="/" render={() => <h1>Home 2</h1>} />

// for component
<Route path="/posts" component={Posts} />

// send params in url
<Route path="/:id" component={FullPost} />
```

## 3. use Link/NavLink instead of an `a` link

Using `Link` to work as an `a` link. **But for css style, please still use `a` link.**

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

If we want to receive `active` class for an `a` link, then please use `NavLink`. Note use `exact` to an exact link.

```jsx
<header>
    <nav>
        <ul>
            <li><NavLink
                to="/posts/"
                exact
                activeClassName="my-active"
                activeStyle={{
                    color: '#fa923f',
                    textDecoration: 'underline'
                }}>Posts</NavLink>
            </li>
            <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
            }}>New Post</NavLink>
            </li>
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

## 5. get Params

1. get url parameters

    easily use `props.match.params` to get url parameters.

    ```jsx
    loadData () {
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
                axios.get( '/posts/' + this.props.match.params.id )
                    .then( response => {
                        // console.log(response);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }
    ```

2. get Fragment

    easily use `props.location.hash` to get Fragment.

    ```jsx
    // localhost:3000/my-path#start-position

    <Link
    to={
        pathname: '/my-path',
        hash: 'start-position'
    }
    >Go to Start
    </Link>
    ```

    Then use `props.location.hash` can get `start-position`

3. get query params

    ```jsx
    // localhost:3000/my-path?start=5

    <Link
    to={
        pathname: '/my-path',
        search: '?start=5'
    }
    >Go to Start</Link>
    ```

    using `props.location.search` can get `?start=5`. We can use some 3rd party library to convert it like using `query-string`

    ```jsx
    const queryString = require('query-string');

    console.log(location.search); //=> '?foo=bar'

    const parsed = queryString.parse(location.search);
    console.log(parsed); //=> {foo: 'bar'}
    ```

## 6. relative and absolute path

By default, if you just enter `<Link to="/some-path">`  or `<Link to="some-path">` , that's an absolute path.

If you want to use relative path, then use `<Link to={props.match.url + '/new'}>`.