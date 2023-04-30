import { exhaustMap, shareReplay, Subject, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { randomUser$ } from './randomData';

export const blurSubject = new Subject<string>();
export const clickMeSubject = new Subject<void>();

export const blur$ = blurSubject.pipe(
  switchMap((val) =>
    ajax({
      url: 'https://random-data-api.com/api/v2/banks',
      async: false,
    })
  )
);

const clickMe$ = clickMeSubject.pipe(
  switchMap(() => randomUser$),
  shareReplay()
);

clickMe$.subscribe({
  next: (value) => {
    console.log('----clickME---', value);
  },
  error: (err) => console.log(err),
  complete: () => console.log(`------completed---`),
});

clickMe$.subscribe({
  next: (value) => {
    console.log('----clickME2---', value);
  },
  error: (err) => console.log(err),
  complete: () => console.log(`------completed---`),
});
