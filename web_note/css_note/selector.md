# Selector

## 1. 属性选择器

其特点是通过属性来选择元素，具体有以下5种形式:

1. E[attr] 表示存在attr属性即可: `div[class]`
2. E[attr=val] 表示属性值完全等于val: `div[class=mydemo]`
3. E[attr*=val] 表示的属性值里包含val字符并且在“任意”位置: `div[class*=mydemo]`
4. E[attr^=val] 表示的属性值里包含val字符并且在“开始”位置: `div[class^=mydemo]`
5. E[attr$=val] 表示的属性值里包含val字符并且在“结束”位置: `div[class$=demos]`

## 2. E:nth-child(n)

以某元素相对于其父元素或兄弟元素的位置来获取元素的结构伪类.

`E:first-child`第一个子元素

`E:last-child`最后一个子元素

`E:nth-child(n)` 第n个子元素，计算方法是E元素的全部兄弟元素;

`E:nth-last-child(n)` 同E:nth-child(n) 相似，只是倒着计算.

```css
div>ul>li:nth-child(3){
  color: deeppink;
}
```

Note: **I suggest use `E:nth-of-type(n)` instead of `E:nth-child(n)`**

## 3. E:nth-of-type(n)

`E:first-of-type`第一个符合type的子元素

`E:last-of-type`最后一个符合type的子元素

`E:nth-of-type(n)` 第n个符合type的元素;

`E:nth-last-of-type(n)` 同E:nth-of-type(n) 相似，只是倒着计算.

```css
div>ul>li:nth-of-type(3){
  color: deeppink;
}
```

## 4. E:not(Element/selector)

选择器匹配**非指定**元素/选择器的每个元素

```css
nav > a:not(:last-of-type) {
  border-right: 1px solid #000;
}
```

## 5. E:target

`E:target` 结合锚点进行使用，处于**当前锚点**的元素会被选中

```html
<style>
h2:target{
    color:red;
}
</style>

<li><a href="#title1">CSS (层叠样式表)</a></li>
<h2 id="title1">CSS (层叠样式表)</h2>
```

## 6. E::before and E::after

- `E::before` and `E::after` **must** have a **content** value.

- `E::before` and `E::after` is a **inline value** by default.

example:

```css
section::after {
    content: "";
    display: block;
    clear: both;
  }
```

## 7. E::first-letter, E::first-line and E::selection

- E::first-letter文本的第一个字母或字

- E::first-line 文本第一行; 常用于文本第一行高亮

- E::selection 可改变选中文本的样式