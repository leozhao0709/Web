import {Component} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {
  }

  fetchData() {
    this.dataStorageService.fetchData();
  }

  saveData() {
    this.dataStorageService.saveData().subscribe(
      res => console.log(res)
    );
  }

}
