# Angular special selector

## 0. directly using component to do selector

In angular, if your component is using other component, then you can style other compnent directly by using their component selector.

```css
app-quote {
    border: 1px solid red;
}
```

## 1. `:host`

`:host` and `:host(.css-selector)` is a special selector in angular. It's selector for **current component**.

```css
/* current component */
:host {
    display: block;
    border: 1px solid black;
}

/* current component with `someclass` style */
:host(.someclass) {
    border: 1px solid blue;
}
```

Note:

-   default `:host` is using `display: inline` if you do not manully change it.

## 2. `:host-context`

`:host-context(.css-selector)` is different with `:host`. This is a selector that's for current component **within** a `.css-selector`.

```html
<div class="boring">
    <app-quote></app-quote>
</div>
```

Then within `app-quote` component, we can style when app-quote is **within** a `boring` class only

```css
:host-context(.boring) {
    display: block;
    border: 1px solid green;
}
```

Note:

-   use `display: block`
-   the above html code is for a parent component that having `app-quote` component. But the css code is for `app-quote` component itself.

## 3. `/deep/` selector (`>>>` selector)

`/deep/ css-selector` selector is a selector that for current component and all its child style.

```css
:host-context(.boring) /deep/ h1 {
    color: #ccc;
}

:host-context(.boring) >>> h1 {
    color: #ccc;
}
```

-   This means all the `h1` tag that within the selector `:host-context(.boring)` and **all its child `h1` tag**.
-   `>>>` is another syntax for `/deep/`
