import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../models/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientNameInputEl') ingredientNameElRef: ElementRef;
  @ViewChild('ingredientNumberInputEl') ingredientNumbeElRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onAddIngredient() {
    const ingredient = new Ingredient(this.ingredientNameElRef.nativeElement.value,
      +this.ingredientNumbeElRef.nativeElement.value);
    this.shoppingListService.addIngredient(ingredient);
  }
}
