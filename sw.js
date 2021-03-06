let cacheName = 'Eugene Portfolio';
let filesToCache = [
  "index.html",
  "aboutme.txt"
  "contactme.txt",
  "eugene.jpg",
  "logo.jpg",
  "manifest.json",
  "project_1.png",
  "project_2.png",
  "project_3.png",
  "project_4.png",
  "project.txt",
  "readme.txt",
  "registerServiceWorker.js",
  "script.js",
  "style.css",
]

/* 
start the service worker, when the user access
the website online. This will add the all the files 
listed in filesToCache to the browser cache.

*/
self.addEventListener('install', function(e){
  console.log("on install")
  e.waitUntil(
    caches.open(cacheName).then(function(cache){
      console.log("Adding files to cache")
      return cache.addAll(filesToCache)
    })
  )
})

/*
If offline or if the file exists in the cache, then it will fetch the files from cache
*/
self.addEventListener('fetch', function(e){
  e.respondWith(
    caches.match(e.request).then(function(response){
      return response || fetch (e.request)
    })
  )
})