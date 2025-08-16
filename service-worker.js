self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("ibcv-datashow-cache").then((cache) => {
      return cache.addAll([
        "./index.html",
        "./style.css",
        "./app.js",
        "./datashow.js",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
