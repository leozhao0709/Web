import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CanComponentDeactivate} from '../../guard/can-deactivated.guard';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.server = this.serversService.getServer(+params['id']);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });

    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.allowEdit = queryParams['allowEdit'] && queryParams['allowEdit'] === '1';
    });

  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  canDeactivate: () => (Observable<boolean> | Promise<boolean> | boolean) = () => {
    if (!this.allowEdit) return true;
    if (!this.changesSaved) return confirm('are you sure you want to leave without saving changes?');
    return true;
  };

}
