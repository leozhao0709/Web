declare let self: ServiceWorkerGlobalScope;

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installing...', e);
});

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Activating...', e);
  return self.clients.claim();
});

// we can use this fetch event to proxy request
self.addEventListener('fetch', (e) => {
  console.log('[Service Worker] Fetching request ....', e);
  e.respondWith(fetch(e.request));
});

export default null;
