const CACHE_NAME = 'prime-farmers-v2';
const urlsToCache = [
  '/',
  '/about',
  '/gallery',
  '/contact',
  '/membership',
  '/logo.webp',
  '/images/hero.webp',
  '/images/hero0.webp',
  '/images/hero1.webp',
  '/images/hero2.webp',
  '/images/about.webp',
  '/images/farm1.webp',
  '/images/farm2.webp',
  '/images/farm3.webp',
  '/images/farm4.webp',
  '/images/farm5.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});