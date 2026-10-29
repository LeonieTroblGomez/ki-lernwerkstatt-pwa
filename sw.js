const CACHE = 'ki-lernwerkstatt-v1';
const ASSETS = ['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('ki-lernwerkstatt-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => { if(event.request.method !== 'GET' || !event.request.url.startsWith(self.registration.scope)) return; event.respondWith(caches.match(event.request,{ignoreSearch:true}).then(hit => hit || fetch(event.request).catch(() => event.request.mode === 'navigate' ? caches.match('./index.html') : Response.error()))); });
