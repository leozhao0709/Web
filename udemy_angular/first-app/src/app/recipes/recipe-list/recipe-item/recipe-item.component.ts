import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../../models/recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() selected: boolean;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.selectedRecipeChanged.subscribe(
      (selectedRecipe) => this.selected = selectedRecipe === this.recipe
    );
  }

  onSelectRecipe() {
    this.recipeService.selectRecipe(this.recipe);
  }

}
