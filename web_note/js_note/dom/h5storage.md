# Storage

Html5 provide 2 storage: `window.sessionStorage` and `window.localStorage`.

## 1. sessionStorage

- 生命周期为关闭浏览器窗口
- 在同一个窗口下数据可以共享
- 只能存储字符串, 可以将对象JSON.stringify()编码后存储
- 可存储约5M内容

## 2. localStorage

- 生命周期永久生效, 除非手动删除
- 可以多窗口共享
- **只能存储字符串**, 可以将对象JSON.stringify()编码后存储
- 可存储约20M内容

## 3. 用法

- `setItem(key, value)`: 设置存储内容
- `getItem(key)`: 读取存储内容
- `removeItem(key)`: 删除键值为key的存储内容
- `clear()`: 清空所有存储内容
