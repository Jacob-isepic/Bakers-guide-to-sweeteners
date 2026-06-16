self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("baker-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/engine.html",
        "/monkfruit.html",
        "/allulose.html",
        "/converter.html",
        "/ai.html",
        "/settings.html",
        "/style.css"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});