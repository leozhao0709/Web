import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {RecipesComponent} from '../recipes/recipes.component';
import {ShoppingListComponent} from '../shopping-list/shopping-list.component';
import {RecipeDetailComponent} from '../recipes/recipe-detail/recipe-detail.component';
import {RecipeStartComponent} from '../recipes/recipe-start/recipe-start.component';
import {RecipeEditComponent} from '../recipes/recipe-edit/recipe-edit.component';
import {SignUpComponent} from '../auth/sign-up/sign-up.component';
import {SignInComponent} from '../auth/sign-in/sign-in.component';
import {AuthGuard} from '../auth/auth.guard';

const appRoutes: Route[] = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]},
    ]
  },
  {
    path: 'shoppinglist',
    component: ShoppingListComponent,
    children: [
      // {path: 'childpath', component: ChildComponent}
    ]
  },
  {path: 'signup', component: SignUpComponent},
  {path: 'signin', component: SignInComponent},
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
