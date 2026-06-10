// ============================================================
// FORGER SA PAROLE — Service Worker (offline support)
// ============================================================

const CACHE_NAME = 'fsp-v10';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './content.js',
  './manifest.json',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './apple-touch-icon-180.png'
];

// Install : cache each asset individually so one 404 never aborts the whole install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.allSettled(
        ASSETS.map(url =>
          cache.add(url).catch(err => {
            console.warn('SW: asset non mis en cache:', url, err);
          })
        )
      )
    )
  );
  self.skipWaiting();
});

// Activate : clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch : cache-first, fallback réseau puis index.html
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') return response;
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
