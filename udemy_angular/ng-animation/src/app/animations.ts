import {animate, state, style, transition, trigger} from '@angular/animations';

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
