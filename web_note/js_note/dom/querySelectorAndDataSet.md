# h5 new api

## 1. querySelector

document.querySelector('div') 通过CSS选择器获取元素，符合匹配条件的**第1个**元素.

## 2. querySelectorAll

document.querySelectorAll('selector') 通过CSS选择器获取所有满足条件的元素，以类数组形式存在.

## 3. add/remove/toggle/contain class

1. `document.querySelector(‘div’).classList.add('class')` 添加class.
2. `document.querySelector(‘div’).classList.remove('class')` 移除class
3. `document.querySelector(‘div’).classList.toggle('class')` 切换class，有则移除，无则添加
4. `document.querySelector(‘div’).classList.contains('class')` 检测是否存在class

## 4. customize properties

在HTML5中我们可以自定义属性，其格式如下data-*=""，例如
`data-info="我是自定义属性"`，通过`Node.dataset['info']` 我们便可以获取到自定义的属性值。
`Node.dataset`是以类对象形式存在的
当我们如下格式设置时，则需要以驼峰格式才能正确获取
`data-my-name="itcast"`，获取`Node.dataset['myName']`.
