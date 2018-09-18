import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../models/recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  currentSelectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.recipes;
    this.recipeService.selectedRecipeChanged.subscribe(
      (selectRecipe) => this.currentSelectedRecipe = selectRecipe
    );
  }

}
