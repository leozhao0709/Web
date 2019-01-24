# Css Tricks

## 1. inline-block element will add a bottom padding!

This is a really common issue for inline block elemnt.

To solve this, use:

`display: block;` or `vertical-align: top;` to solve.


## 2. fix position not working

```
the element with fixed positioning will become relative to the element with the 
transform - not relative to the viewport
```