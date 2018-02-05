# Dom Basic

## 1. createElement | createTextNode and append to Dom

```js
const li = document.createElement('li');
const text = document.createTextNode('Hello World!!!');
li.appendChild(text);
document.querySelector('ul')!.appendChild(li);
```

## 2. event

Using `on` to add event listener

```js
ipcRenderer.on('todo:clear', () => {
  document.querySelector('ul')!.innerHTML = '';
})
```

## 3. add style

```js
document.querySelector(id).style.property = new style
```

## 4. add/remove/toggle/contains Class

Using new html5 api to do this.

1. `document.querySelector(‘div’).classList.add('class')` 添加class.
2. `document.querySelector(‘div’).classList.remove('class')` 移除class
3. `document.querySelector(‘div’).classList.toggle('class')` 切换class，有则移除，无则添加
4. `document.querySelector(‘div’).classList.contains('class')` 检测是否存在class