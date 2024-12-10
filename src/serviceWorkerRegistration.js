// This code is based on the default Create React App service worker code

// The URL for the service worker file
const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      window.location.hostname === '[::1]' ||
      window.location.hostname.indexOf('localhost') !== -1
  );
  
  export function register() {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      // The URL of the service worker file.
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) {
        return;
      }
  
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          checkValidServiceWorker(swUrl);
        } else {
          registerValidSW(swUrl);
        }
      });
    }
  }
  
  function registerValidSW(swUrl) {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        console.log('Service Worker registered: ', registration);
      })
      .catch((error) => {
        console.error('Service Worker registration failed: ', error);
      });
  }
  
  function checkValidServiceWorker(swUrl) {
    fetch(swUrl)
      .then((response) => {
        if (
          response.status === 404 ||
          response.headers.get('content-type').indexOf('javascript') === -1
        ) {
          // No service worker found. Likely a different app.
          navigator.serviceWorker.ready.then((registration) => {
            registration.unregister();
          });
        } else {
          // Service worker found. Proceed with registration.
          registerValidSW(swUrl);
        }
      })
      .catch(() => {
        console.log('No internet connection. App is running in offline mode.');
      });
  }
  