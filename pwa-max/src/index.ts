import './index.scss';
import axios from 'axios';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => {
      console.log('Service worker registerd!');
    })
    .catch((err) => {
      console.log(err);
    });
}

setTimeout(() => {
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.data)
    .then((data) => console.log(data));
}, 3000);
