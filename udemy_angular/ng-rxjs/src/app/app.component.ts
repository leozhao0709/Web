import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-rxjs-test-again';

  ngOnInit(): void {
    const subject = new Subject();

    const observable = subject.asObservable()
      .pipe(
        map((val: number) => val * 3),
        filter(val => val % 2 === 0)
      )
      .subscribe(console.log)
    ;


    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);
  }

}
