import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../../models/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  ingredientsForm: FormGroup;
  editMode = false;
  editIndex: number;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredientsForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'amount': new FormControl('0', Validators.min(1))
    });
    this.shoppingListService.startEditing.subscribe(
      (index) => {
        const ingredient = this.shoppingListService.getIngredient(index);
        this.ingredientsForm.patchValue({
          'name': ingredient.name,
          'amount': ingredient.amount
        });
        this.editIndex = index;
        this.editMode = true;
      }
    );
  }

  onSubmit() {
    const ingredient = new Ingredient(this.ingredientsForm.get('name').value,
      +this.ingredientsForm.get('amount').value);
    if (!this.editMode) {
      this.shoppingListService.addIngredient(ingredient);
    } else {
      this.shoppingListService.updateIngredient(this.editIndex, ingredient);
    }
    this.onClear();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editIndex);
    this.onClear();
  }

  onClear() {
    this.ingredientsForm.reset({
      'amount': 0
    });
    this.editMode = false;
  }
}
