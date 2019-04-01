import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../model/course';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  tap,
  delay,
  map,
  concatMap,
  switchMap,
  withLatestFrom,
  concatAll,
  shareReplay
} from 'rxjs/operators';
import { merge, fromEvent, Observable, concat, forkJoin } from 'rxjs';
import { Lesson } from '../model/lesson';
import { createHttpObservable } from '../common/util';
import { FormControl } from '@angular/forms';
import { RxjsLoggingLevel, debug, setRxjsLoggingLevel } from '../common/debug';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, AfterViewInit {
  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;
  courseId: string;

  @ViewChild('searchInput') input: ElementRef;
  searchInputFormControl = new FormControl();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.params['id'];
    setRxjsLoggingLevel(RxjsLoggingLevel.DEBUG);
    this.course$ = createHttpObservable(`/api/courses/${this.courseId}`).pipe(
      debug(RxjsLoggingLevel.INFO, 'course value')
    );

    this.lessons$ = this.searchInputFormControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(search => this.loadLessons(search)),
      debug(RxjsLoggingLevel.DEBUG, 'lesson value')
    );
  }

  ngAfterViewInit() {}

  loadLessons(search = '') {
    return createHttpObservable(`/api/lessons?courseId=${this.courseId}&pageSize=100&filter=${search}`).pipe(
      map(res => res['payload'])
    );
  }
}
