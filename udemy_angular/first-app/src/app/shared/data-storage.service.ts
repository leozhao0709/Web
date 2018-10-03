import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../models/recipe.model';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private httpClient: HttpClient, private recipeService: RecipeService) {
  }

  saveData() {
    return this.httpClient.put('https://ng-recipe-book-8e62b.firebaseio.com/data.json', this.recipeService.getRecipes());
  }

  fetchData() {
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-8e62b.firebaseio.com/data.json')
      .pipe(
        tap(res => console.log(res))
      )
      .subscribe((recipes: Recipe[]) => this.recipeService.setRecipes(recipes));
  }
}
