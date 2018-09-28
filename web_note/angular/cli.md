# CLI

## 1. new project

`ng new [myApp] --style=scss`;

## 2. convert current App to scss

`ng set defaults.styleExt scss`

Note:

-   The Angular CLI will start processing Sass files now. However,it doesn't go through the process of converting your already existing `.css` files to `.scss` files. **You'll have to make the conversion manually.**

## 3. generate component

`ng g c [component]`;

## 4. generate shared component library

check this page: [stories create library](https://github.com/angular/angular-cli/wiki/stories-create-library)

-   `ng generate library my-lib --prefix [prefix]`
-   `ng build my-lib --prod`
-   `cd dist/my-lib`
-   `npm publish` this is used to publish to npm library
