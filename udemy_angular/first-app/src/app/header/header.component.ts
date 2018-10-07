import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean;

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.authStatusChanged
      .subscribe(
        isAuthenticated => this.isAuthenticated = isAuthenticated
      );
  }

  fetchData() {
    this.dataStorageService.fetchData();
  }

  saveData() {
    this.dataStorageService.saveData().subscribe(
      res => console.log(res)
    );
  }

  onLogout() {
    this.authService.signOut();
  }

}
