import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.scss']
})
export class NestedComponent implements OnInit {
  title = 'Nested';
  constructor() {}

  ngOnInit() {}
}
