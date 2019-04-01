import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { interval, Observable, of, timer, throwError } from 'rxjs';
import { createHttpObservable } from '../common/util';
import { map, shareReplay, catchError, finalize, tap, retryWhen, delayWhen, delay } from 'rxjs/operators';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  constructor() {
    const http$ = createHttpObservable('/api/courses');
    const courses$: Observable<Course[]> = http$.pipe(
      map(res => res['payload']),
      shareReplay(),
      retryWhen(errors => errors.pipe(delay(2000)))
    );

    this.beginnerCourses$ = courses$.pipe(map(courses => courses.filter(course => course.category === 'BEGINNER')));

    this.advancedCourses$ = courses$.pipe(map(courses => courses.filter(course => course.category === 'ADVANCED')));
  }

  ngOnInit() {}
}
