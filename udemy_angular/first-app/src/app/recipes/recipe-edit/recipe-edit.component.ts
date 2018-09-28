import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../../models/recipe.model';
import {Ingredient} from '../../models/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode: boolean;
  recipeForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.editMode = !!params['id'];
        this.id = params['id'];
        this.initRecipeForm();
      }
    );
  }

  initRecipeForm() {

    let recipe = new Recipe('', '', '', [new Ingredient('', 0)]);

    if (this.editMode) {
      recipe = this.recipeService.getRecipeById(this.id);
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipe.name),
      'imagePath': new FormControl(recipe.imagePath),
      'description': new FormControl(recipe.desc)
    });
  }

}

