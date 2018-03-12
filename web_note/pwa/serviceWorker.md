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
        .catch(function (err) {
            console.log(err);
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

// for fetch using
self.addEventListener('fetch', function (event) {
    // console.log('[Service Worker] Fetching something ....', event);
    event.respondWith(fetch(event.request));
});
```

Note:

- It's important to know each time when you update code in `serviceWorker.js/sw.js`, you need **close all the related page** and reload that page again.

## 2. change default banner(propmt for using to add to screen) show time

The default banner showing time is the 2nd time when user open the page. (each time cannot smaller than 5 minutes)

We can change the banner show time.

In `index.js`, prevent the default banner showing time.

```js
// in app.js, prevent default banner showing time
var deferredPrompt;
window.addEventListener('beforeinstallprompt', function (event) {
    console.log(`before install propmpt fired`);
    event.preventDefault();
    deferredPrompt = event;
    return false;
})
```

Then, in any part you want showing the banner, add these code.

```js
if (deferredPrompt) {
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then(function (choiceResult) {
        console.log(choiceResult.outcome);

        if (choiceResult.outcome == 'dismissed') {
        console.log(`User cancelled installation`);
        } else {
        console.log(`User added to home screen`);
        }
    })

    deferredPrompt = null;
}
```

## 3. Caches file

```js
var CACHE_DYNAMIC_NAME = 'dynamic-v1';
var CACHE_STATIC_NAME = 'static-v1';

self.addEventListener('install', function (event) {
    console.log(`[Service Worker] Installing Service Worker ... ${event}`);
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME)
            .then(function (cache) {
                console.log(`[Service Worker] Precaching App Shell`);
                // static caches
                cache.addAll([
                    '/',
                    '/index.html',
                    '/src/js/material.min.js',
                    '/src/css/app.css',
                    '/src/css/feed.css',
                    '/src/images/main-image.jpg',
                    'https://fonts.googleapis.com/css?family=Roboto:400,700',
                    'https://fonts.googleapis.com/icon?family=Material+Icons',
                    'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css'
                ])
            })
    );
})

self.addEventListener('activate', function (event) {
    console.log(`[Service Worker] Activating Service Worker ... ${event}`);
    event.waitUntil(
        caches.keys()
            .then(function (keyList) {
                return Promise.all(keyList.map(function (key) {
                    if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
                        console.log(`[Service Worker] Removing the old Cahce ${key}`);
                        return caches.delete(key);
                    }
                }))
            })
    )
    return self.clients.claim();
})

self.addEventListener('fetch', function (event) {
    // console.log('[Service Worker] Fetching something ....', event);
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response) {
                    return response;
                } else {
                    return fetch(event.request)
                        .then(function (res) {
                            return caches.open(CACHE_DYNAMIC_NAME)
                                .then(function (cache) {
                                    cache.put(event.request.url, res.clone())
                                    return res;
                                })
                        }).catch(function (err) {

                        })
                        ;
                }
            })
    );
});
```