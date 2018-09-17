import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private numbers = [1, 2, 3, 4, 5, 6, 7];
  oddNumbers = this.numbers.filter(number => number % 2 !== 0);
  evenNumbers = this.numbers.filter(number => number % 2 === 0);
  onlyOdd = false;
}
