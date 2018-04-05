# Browser Detection

## 1. browser detection (javascript only)

```js
$(document).ready(function() {
  var ua = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
  if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
    browser = "msie";
  }
  else {
    browser = ua[1].toLowerCase();
  }
```

## 2. using bowser (npm library)

`npm install --save bowser`, `npm install --save-dev bowser`

```js
console.log(bowser) // {name: "Safari", safari: true, version: "11.0", webkit: true, iphone: true, …}
```