# Axios

Axios is an Ajax/http library for node.

## 0. import

```ts
import Axios from 'axios';
```

## 1. Post, Get and Delete

- post:

```js
postDataHandler = () => {
    const data = {
        title: this.state.title,
        body: this.state.content,
        author: this.state.author
    };
    Axios.post('/posts', data)
        .then(response => {
            console.log(response);
        });
}
```

- get:

```js
Axios.get( '/posts' )
    .then( response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
            return {
                ...post,
                author: 'Max'
            }
        });
        this.setState({posts: updatedPosts});
        // console.log( response );
    } )
    .catch(error => {
        // console.log(error);
        this.setState({error: true});
    });
```

- delete:

```js
deletePostHandler = () => {
    Axios.delete('/posts/' + this.props.id)
        .then(response => {
            console.log(response);
        });
}
```

## 2. Default values/headers/baseUrls

Set up these things in **index.js**

```js
Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
Axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
Axios.defaults.headers.post['Content-Type'] = 'application/json';
```

## 3. Interceptors

We can do some global things for request and response using Intercetors.

```js
Axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

Axios.interceptors.response.use(response => {
    console.log(response);
    // Edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});
```

Note:

- make sure we need to return `request` and `response`.
- We can do global catch error here.
- We can also change `request` or `response` in Interceptors.

## 4. axois instance

We can define **our own Axois** Instance. Create a new file called axois.js, then put these contents in that file.

```js
import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;
```

Then we can use this instance in our app.