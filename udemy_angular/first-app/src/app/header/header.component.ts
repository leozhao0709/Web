import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  selectFeatureEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onSelectFeature(feature: string) {
    this.selectFeatureEvent.emit(feature);
  }
}
