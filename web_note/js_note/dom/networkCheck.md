# Network check

我们可以通过window.onLine来检测用户当前的网络状况, 返回一个布尔值

- `window.online` 用户网络连接时被调用
- `window.offline` 用户网络断开时被调用

```js
<script>
    window.addEventListener('online',function(){
       alert('网络连接已建立！');
    });

    window.addEventListener('offline',function(){
        alert('网络连接已断开！');
    })
</script>
```
