# Browser Detection

## 1. browser detection

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