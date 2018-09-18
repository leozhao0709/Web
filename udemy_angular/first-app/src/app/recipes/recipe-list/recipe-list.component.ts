import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'A Simple Test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another Test Recipe', 'A Simple Test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  ];

  currentSelectedRecipe: Recipe;
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelectRecipe(recipe: Recipe) {
    this.currentSelectedRecipe = recipe;
    this.selectedRecipe.emit(recipe);
  }
}
