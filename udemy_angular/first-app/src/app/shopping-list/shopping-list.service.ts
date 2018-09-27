import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private _ingredients: Ingredient[] = [new Ingredient('Apple', 5), new Ingredient('Tomato', 10)];
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  startEditing = new EventEmitter<number>();

  constructor() {
  }


  getIngredients(): Ingredient[] {
    return [...this._ingredients];
  }

  getIngredient(index: number) {
    return this._ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]) {
    this._ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.getIngredients());
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this._ingredients[index] = ingredient;
    this.ingredientsChanged.emit(this.getIngredients());
  }

  deleteIngredient(index: number) {
    this._ingredients.splice(index, 1);
    this.ingredientsChanged.emit(this.getIngredients());
  }

}
