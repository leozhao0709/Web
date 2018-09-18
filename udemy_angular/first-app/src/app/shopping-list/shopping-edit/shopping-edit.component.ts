import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientNameInputEl') ingredientNameElRef: ElementRef;
  @ViewChild('ingredientNumberInputEl') ingredientNumbeElRef: ElementRef;
  @Output() addIngredient = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddIngredient() {
    this.addIngredient.emit(new Ingredient(this.ingredientNameElRef.nativeElement.value, +this.ingredientNumbeElRef.nativeElement.value));
  }
}
