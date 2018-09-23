import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../models/recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.recipe = this.recipeService.getRecipeById(+params['id']);
      }
    );
  }

  onAddIngredients() {
    this.recipeService.addRecipeIngredients(this.recipe.ingredients);
  }

}
