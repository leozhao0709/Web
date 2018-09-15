# Data Binding

## 1. String Interpolation

```html
<h1>
    Welcome to {{title}}
</h1>
```

## 2. Property and event Binding

```html
<button
    [disabled]="!abled"
    (click)="onBtnClicked($event)"> Button </button>
```

Note:

-   When you want to pass event, please use `$event`;

## 3. two way binding

Two way binding now needs the `FormsModule` to help.

-   Open `src/app/app.module.ts`
-   `import { FormsModule } from '@angular/forms';`
-   append `FormsModule` to `ngModule imports`.

```html
<input type="text" [(ngModel)]="title" />
```
