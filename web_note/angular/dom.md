# Access Dom

## 1. Using `@ViewChild`

Using `@ViewChild('elementRef')` to access an element Ref with `#` in html template.

```html
<div class="row">
    <div class="col-sm-5 form-group">
        <label for="name">Name</label>
        <input type="text" id="name" class="form-control" #ingredientNameInputEl/>
    </div>
    <div class="col-sm-2 form-group">
        <label for="amount">Amount</label>
        <input type="number" id="amount" class="form-control" #ingredientNumberInputEl/>
    </div>
</div>
```

```ts
@ViewChild('ingredientNameInputEl') ingredientNameElRef: ElementRef;
@ViewChild('ingredientNumberInputEl') ingredientNumbeElRef: ElementRef;
@Output() addIngredient = new EventEmitter<Ingredient>();

onAddIngredient() {
    this.addIngredient.emit(new Ingredient(this.ingredientNameElRef.nativeElement.value, +this.ingredientNumbeElRef.nativeElement.value));
  }
```
