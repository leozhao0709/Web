# Directive

## 0. generate directives

`ng g d [directive]`;

## 1. ng-content

`ng-content` is a special directive that like react `props.childeren`. You can use it within the angular html template to refer the component childeren element.

## 2. basic directive (not recommend)

```ts
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private _elementRef: ElementRef) {}

    ngOnInit(): void {
        this._elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
```

Note:

-   you can use `ElementRef` to access the applied dom

## 3. better directive (recommend)

a better directive is using `Renderer2` instead directly use `ElementRef.style`

```ts
import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    @Input()
    defaultColor = 'transparent';
    @Input()
    highlightColor = 'blue';
    @HostBinding('style.backgroundColor')
    backgroundColor = this.defaultColor;

    constructor(private _elRef: ElementRef, private _renderer: Renderer2) {}

    ngOnInit() {
        // this._renderer.setStyle(this._elRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        // this._renderer.setStyle(this._elRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        // this._renderer.setStyle(this._elRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
    }
}
```

```html
<p appBetterHighlight [highlightColor]="'red'" [defaultColor]="'yellow'">Style me with better highlight</p>
```

Note:

-   use `Renderer2` to set different style/attribute or other things
-   using `@HostListener([event])` can bind the event to current directive. And you can setup what you want when the `[event]` occurs
-   You can also use `@HostBinding('style.backgroundColor')` directly to bind a property. And in this way, you don't need to access r`Renderer2` and `ElementRef`.
-   You can also define `@input` to receive some property binding data that can be transfer to this directive.
