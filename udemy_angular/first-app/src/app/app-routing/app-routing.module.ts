import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, Route, RouterModule} from '@angular/router';
import {ShoppingListComponent} from '../shopping-list/shopping-list.component';
import {HomeComponent} from '../home/home.component';

const appRoutes: Route[] = [
  {path: 'recipes', loadChildren: '../recipes/recipes.module#RecipesModule'},
  {path: '', component: HomeComponent},
  {
    path: 'shoppinglist',
    component: ShoppingListComponent,
  },
  {path: '', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {useHash: true, preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
