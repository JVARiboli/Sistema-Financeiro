self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('finaceJV-cache').then((cache) => {
        return cache.addAll([ 
            './',
            './app.js',
            './icon.png',
            './index.html',
            './styles.css',
            './manifest.json',
            './sw.js',
            'https:/cdn.jsdelivr.net/npm/pouchdb@7.2.2/dist/pouchdb.min.js'
        ]);
    }))
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => res || fetch(e.request))
    );
});