import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode: boolean;
  recipeForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private recipeService: RecipeService) {
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

    let recipe = new Recipe('', '', '', []);

    if (this.editMode) {
      recipe = this.recipeService.getRecipeById(this.id);
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipe.name),
      'imagePath': new FormControl(recipe.imagePath),
      'desc': new FormControl(recipe.desc),
      'ingredients': new FormArray(
        recipe.ingredients.map(ingredient => {
          return new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.min(1)]),
          });
        }), [Validators.required, Validators.minLength(1)]
      )
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }

    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl('', Validators.required),
        'amount': new FormControl('0', [Validators.required, Validators.min(1)])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}

