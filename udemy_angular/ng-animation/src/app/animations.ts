import {animate, group, keyframes, state, style, transition, trigger} from '@angular/animations';

export const animationTrigger = trigger('animationTrigger', [
  state('initialState', style({
    backgroundColor: 'orange',
    width: '100px',
    height: '100px'
  })),
  state('endState', style({
    backgroundColor: 'lightblue',
    width: '100px',
    height: '100px'
  })),

  transition('initialState <=> endState', [
    animate(2000, style({
      backgroundColor: 'blue',
      width: '100px',
      height: '100px'
    })),
    animate(2000, style({
      backgroundColor: 'red',
      width: '100px',
      height: '100px'
    })),
    animate(2000) // need this time to reach last state
  ])
]);

export const fadeAnimation = trigger('fade', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(1000),
  ]),
  transition(':leave', [
    animate(1000, style({
      opacity: 0
    }))
  ])
]);

export const shrinkAnimation = trigger('shrink', [
  transition('*=>*', [
    animate(400, style({
      width: 0
    })),
    animate(400)
  ])
]);

export const addNumberAnimation = trigger('addNumberAni', [
  transition(':enter', [
     style({
      opacity: 0
    }),
    group([
      animate(1000, style({
        opacity: 0.5,
      })),
      animate(3000, keyframes([
        style({
          backgroundColor: 'white',
          offset: 0
        }),
        style({
          backgroundColor: 'red',
          offset: 0.8
        }),
        style({
          backgroundColor: 'green',
          offset: 1
        })
      ]))
    ]),
    animate(1000)
  ])
]);
