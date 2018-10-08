# Module

## 0. Usage

Module is used to optimize the code. You can use something like lazy loading or any other feature to optimize the loading time.

## 1. create module

Using `ng g m [module name]` to generate the module.

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [DropdownDirective],
    exports: [DropdownDirective]
})
export class SharedModule {}
```

Note:

-   You need to declare all the things you created in your `declarations`. If you want outside things to use your inner `directive/pipe`, you need to exports the things you want outside to see.

## 2. Lazy loading

Lazy loading always works with router together.

```ts (router.module.ts)
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { HomeComponent } from '../home/home.component';

const appRoutes: Route[] = [
    { path: 'recipes', loadChildren: '../recipes/recipes.module#RecipesModule' },
    { path: '', component: HomeComponent },
    {
        path: 'shoppinglist',
        component: ShoppingListComponent
    },
    { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
```

Note:

-   We won't import `RecipesModule` in `app.module.ts` and we are load child with string `../recipes/recipes.module#RecipesModule`
