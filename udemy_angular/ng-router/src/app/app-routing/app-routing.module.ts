import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {UsersComponent} from '../users/users.component';
import {UserComponent} from '../users/user/user.component';
import {ServersComponent} from '../servers/servers.component';
import {ServerComponent} from '../servers/server/server.component';
import {EditServerComponent} from '../servers/edit-server/edit-server.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {AuthGuard} from '../guard/auth.guard';
import {CanDeactivatedGuard} from '../guard/can-deactivated.guard';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {path: ':id/:name', component: UserComponent}
    ]
  },
  {
    path: 'servers',
    component: ServersComponent,
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivatedGuard]},
    ]
  },
  {path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
