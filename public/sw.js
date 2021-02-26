const version = "0.0.1";
const CACHE_NAME = `jeylso-${version}`;
const urlsToCache = [
  "/404.html",
  "/about.html",
  "/email.html",
  "/index.html",
  "/manifest.json",
  "/portada.jpg",
  "/favicon.ico",
  "/favicons/**",
  "/_next",
  "/sw.js",
];

self.addEventListener("install", (event) => {
  const preLoaded = caches
    .open(CACHE_NAME)
    .then((cache) => cache.addAll(urlsToCache));
  event.waitUntil(preLoaded);
});

self.addEventListener("fetch", (event) => {
  const response = caches
    .match(event.request)
    .then((match) => match || fetch(event.request));
  event.respondWith(response);
});
