importScripts( '/cache-polyfill.js' );

var filesToCache = [
  // root
  '/',
  '/index.html',
  // css
  '/assets/css/main.css',
  '/assets/css/normalize.css',
  '/assets/css/syntax.css',
  // images
  '/assets/img/octocat.png',
  // pages
  '/add-a-new-page/','/add-a-new-page/make-a-child-page/','/add-images/','/advanced-features/','/example_page/','/github-setup/','/post-your-guide/','/prerequisites/','/update-the-config-file/','/update-the-config-file/understanding-baseurl/','',
  // posts
  
];

self.addEventListener( 'install', function( e ) {
  e.waitUntil(
    caches.open( 'DOCter-v1.1' )
      .then( function( cache ) {
        return cache.addAll( filesToCache );
    })
  );
});

self.addEventListener( 'fetch', function( event ) {
  event.respondWith(
    caches.match( event.request ).then( function( response ) {
      return response || fetch( event.request );
    })
 );
});