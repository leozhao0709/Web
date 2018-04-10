# react-router

## 0. install

1. `npm install --save react-router-dom`, `npm install --save-dev @types/react-router-dom`

2. Then in `App.js`, Wrap the jsx in `BrowserRouter`

    ```jsx
    class App extends Component {
        render () {
            return (
                <BrowserRouter>
                    <div className="App">
                        Blog />
                    </div>
                </BrowserRouter>
            );
        }
    }
    ```

## 1. tsx props type

```tsx
// for no other customized parameter passed in route
interface HomeProps extends RouteComponentProps<{}> {
  // Add your regular properties here
}

// for other customized parameter passed in route
interface HomeProps extends RouteComponentProps<{title: string}> {
  // Add your regular properties here
}
```

## 2. Define Route

Using `Route` to define the small route.

```jsx
<Route path="/" exact render={() => <h1>Home</h1>} />
<Route path="/" render={() => <h1>Home 2</h1>} />

<Switch>
    {/* for component */}
    <Route exact path="/posts" component={Posts} />
    {/* send params in url */}
    <Route exact path="/:id" component={FullPost} />
    <Redirect from="/" to="/posts" />

    {/* pass pros for a route component */}
    <Route
        path={this.props.match.url + '/contact-data'}
        render={(props) => (<ContactData ingredients={this.state.ingredients}
        {...props}
        />)}
    />

    {/* No other path match, then goes to this page */}
    <Route render={() => <h1>Not found</h1>}/>
    {/* we can also redirect */}
    <Redirect to="/" />
</Switch>
```

Using `<Switch>` for the `<Route>`, then only the first `<Route>` will be matched.

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

If we want to receive `active` class for an `a` link, then please use `NavLink`. Note use `exact` to an exact link. Also to assign an active css, please use `activeClassName` or `activeStyle`

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

## 7. Navigate programmatically

Using `this.props.history.push` or `this.props.history.replace` to change route. Or using `this.props.history.goBack()` to go to previous page.

```jsx
postSelectedHandler = ( id ) => {
    // this.props.history.push({pathname: '/posts/' + id});
    this.props.history.replace( '/posts/' + id );
}
```

## 8. Redirect

Using `Redirect` to redirect an url.

```jsx
<Redirect from="/" to="/posts" />
```

## 9. react-router with redux

Looks like react-router is not working happily with redux. We should use `export default withRouter(connect(mapState, mapDispatch)(Layout) as any);` to make the router works well with redux. 

Here's an example to make it work. 

```tsx
import * as React from 'react';
import Navigation from '../../components/UI/Navigation/Navigation';
import { Dispatch, connect } from 'react-redux';
import { AuthActions } from '../../store/actions/authActions';
import { StoreState } from '../../store/store';
import { withRouter } from 'react-router';

interface LayoutDispatchProps {
    fetchUser: () => void;
}

interface LayoutStateProps {
    user?: { _id: string, email: string } | null;
}

class Layout extends React.Component<LayoutDispatchProps & LayoutStateProps, {}> {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <>
                <Navigation user={this.props.user} />
                {this.props.children}
            </>
        );
    }
}

const mapState = (storeState: StoreState): LayoutStateProps => {
    return {
        user: storeState.auth.user
    };
};

const mapDispatch = (dispatch: Dispatch<StoreState>): LayoutDispatchProps => {
    return {
        fetchUser: () => dispatch(AuthActions.fetch_user())
    };
};

// tslint:disable-next-line:no-any
export default withRouter(connect(mapState, mapDispatch)(Layout) as any);
```