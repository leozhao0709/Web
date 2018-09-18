import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../models/recipe.model';
import {Ingredient} from '../models/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class RecipeService {

  public selectedRecipeChanged = new EventEmitter<Recipe>();

  private _selectedRecipes: Recipe;
  private _recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  get recipes(): Recipe[] {
    return [...this._recipes];
  }


  get selectedRecipes(): Recipe {
    return this._selectedRecipes;
  }

  selectRecipe(recipe: Recipe) {
    this._selectedRecipes = recipe;
    this.selectedRecipeChanged.emit(recipe);
  }

  addRecipeIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
