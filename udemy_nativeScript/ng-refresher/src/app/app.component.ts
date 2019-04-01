import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    console.log('app component init...');
    this.storeService.init();
  }
}
