import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  of,
  concat,
  interval,
  merge,
  Subscription,
  Subject,
  from,
  fromEvent,
  BehaviorSubject,
  AsyncSubject,
  ReplaySubject
} from 'rxjs';
import { map } from 'rxjs/operators';
import { createHttpObservable } from '../common/util';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  sub = new Subscription();

  constructor() {}

  ngOnInit() {
    const subject = new BehaviorSubject(0);
    subject.subscribe(val => console.log('first subscriber ', val));
    subject.next(1);
    subject.next(2);
    subject.next(3);

    subject.complete();
    setTimeout(() => {
      subject.subscribe(val => console.log('second subscriber ', val));
      subject.next(4);
    }, 3000);
  }
}
