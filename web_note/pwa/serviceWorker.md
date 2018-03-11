# ServiceWorker

## 1. register service worker

add these code in `index.js` to register a service worker.

```js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function () {
            console.log(`service worker registered`);
        })
        ;
}
```

Then in `serviceWorker.js/sw.js`, add these code:

```js
self.addEventListener('install', function (event) {
    console.log(`[Service Worker] Installing Service Worker ... ${event}`);
})

self.addEventListener('activate', function (event) {
    console.log(`[Service Worker] Activating Service Worker ... ${event}`);
    return self.clients.claim();
})
```

Note:

- It's important to know each time when you update code in `serviceWorker.js/sw.js`, you need **close all the related page** and reload that page again.