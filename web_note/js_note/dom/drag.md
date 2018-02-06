# Drag

在HTML5的规范中, 我们可以通过为元素增加draggable="true"来设置此元素是否可以进行拖拽操作, 其中图片, 链接默认是开启的

## 1. drag Element (拖拽元素)

页面中设置了`draggable="true"`属性的元素, 除了`a`和`img`, 别的标签都需要设置.

## 2. target Element (拖拽目的地)

页面中设置了draggable="true"属性的元素

## 3. eventListener

drag Element:

- `drag`: 应用于拖拽元素, 整个拖拽过程都会调用
- `dragstart`: 应用于拖拽元素, 当拖拽开始时调用
- `dragleave`: 应用于拖拽元素, 当**鼠标离开拖拽元素**时调用
- `dragend`: 应用于拖拽元素, 当拖拽结束时调用

target Element:

- `dragenter`: 应用于目标元素, 当拖拽元素进入时调用.
- `dragover`: 应用于目标元素, 当停留在目标元素上时调用, **我们需要在此eventListener中添加`e.preventDefault();`来阻止系统默认的取消drop效果**.
- `drop`: 应用于目标元素, 当在目标元素上松开鼠标时调用.
- `dragleave`: 应用于目标元素, 当**鼠标离开目标元素**时调用.

```js
<script>
  const ballQuantity = 9;

  const box1 = document.querySelector('.box1');
  const box2 = document.querySelector('.box2');

  let ballArray = [];

  for (let i = 0; i < ballQuantity; i++) {
    const ballElement = document.createElement('div');
    ballElement.setAttribute('draggable', true);
    const textNode = document.createTextNode(i);
    ballElement.appendChild(textNode);
    box1.appendChild(ballElement);
    ballArray.push(ballElement);
  }

  let temp = null;
  ballArray.forEach((ballElement) => {
    ballElement.addEventListener('dragstart', function () {
      temp = this;
      console.log(temp);
    })
  })

  box2.addEventListener('dragover', (e) => {
    e.preventDefault();
  })

  box2.addEventListener('drop', () => {
    box2.appendChild(temp);
    temp = null;
  })

</script>
```
