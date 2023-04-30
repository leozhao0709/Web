import { from, defer, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import axios from 'axios';

// export const randomUser$ = ajax.get('https://random-data-api.com/api/v2/users');

export const randomUser$ = new Observable((observer) => {
  const controller = new AbortController();
  axios
    .get('https://random-data-api.com/api/v2/users', {
      signal: controller.signal,
    })
    .then((res) => res.data)
    .then((data) => observer.next(data))
    .catch((err) => observer.error(err))
    .finally(() => observer.complete());

  return () => controller.abort();
});
