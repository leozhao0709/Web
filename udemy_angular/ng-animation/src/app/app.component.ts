import {Component} from '@angular/core';
import {addNumberAnimation, animationTrigger, fadeAnimation, shrinkAnimation,} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    animationTrigger,
    fadeAnimation,
    shrinkAnimation,
    addNumberAnimation
  ]
})
export class AppComponent {

  animationState = 'initialState';
  showParagrah = false;
  paraWidth = 400;
  animateState = 'state1';

  numbers = [];

  changeState() {
    this.animationState = this.animationState === 'initialState' ? 'endState' : 'initialState';
  }

  addNewNumber() {
    this.numbers.push(Math.random());
  }
}
