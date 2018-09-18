import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentFeature = 'recipes';

  selectFeature(feature: string) {
    this.currentFeature = feature;
  }
}
