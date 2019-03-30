import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, concat, interval, merge, Subscription } from 'rxjs';
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
    this.sub = createHttpObservable('/api/courses').subscribe(val => console.log(val));
    this.sub.unsubscribe();
  }
}
