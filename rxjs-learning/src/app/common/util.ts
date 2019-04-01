import { Observable } from 'rxjs';

export const createHttpObservable = (url: string) => {
  return new Observable<any>(observer => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch(url, { signal })
      .then(res => {
        if (!res.ok) {
          observer.error('Request failed with status code: ' + res.status);
        }
        return res.json();
      })
      .then(body => {
        observer.next(body);
        observer.complete();
      })
      .catch(err => {
        observer.error(err);
      });

    return () => abortController.abort();
  });
};
