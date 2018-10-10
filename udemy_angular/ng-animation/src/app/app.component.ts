import {Component} from '@angular/core';
import {animationTrigger,} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    animationTrigger,
  ]
})
export class AppComponent {

  animationState = 'initialState';

  changeState() {
    this.animationState = this.animationState === 'initialState' ? 'endState' : 'initialState';
  }
}
