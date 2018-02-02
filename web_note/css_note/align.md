# Align

## 1. 图片和文字垂直居中

vertical-align对inline-block最敏感。默认属性是:`vertical-align:baseline`.

想要垂直居中,可以设置

```css
img {
  vertical-align: middle;
}
```

## 2. normal div 居中 (block element)

Using `margin: 0 auto;`

```css
form {
  width: 100%;
  max-width: 640px;
  min-width: 320px;
  c
}
```

## 3. inline-block element alignment

We can use `text-align` to set up the inline-block element.

```css
div {
  text-align: center;
}
```

Note:

- div not alignment, it only align the content in this div.