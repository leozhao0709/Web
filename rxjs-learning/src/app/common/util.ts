import { Observable } from 'rxjs';

export const createHttpObservable = (url: string) => {
  return new Observable(observer => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch(url, { signal })
      .then(res => res.json())
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
