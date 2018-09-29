import {Component} from '@angular/core';
import {ServerService} from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = this.serverService.getAppName();
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serverService: ServerService) {
  };

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSaveServers() {
    this.serverService.storeServers(this.servers).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  onGetServers() {
    this.serverService.getServers().subscribe(
      servers => this.servers = servers,
      err => console.log(err)
    );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
