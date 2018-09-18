import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private _ingredients: Ingredient[] = [new Ingredient('Apple', 5), new Ingredient('Tomato', 10)];
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() {
  }


  get ingredients(): Ingredient[] {
    return [...this._ingredients];
  }

  addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
    this.ingredientsChanged.emit(this._ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    this._ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this._ingredients);
  }
}
