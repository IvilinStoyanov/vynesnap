module.exports = {
    pwa: {
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        swSrc: 'src/registerServiceWorker.js',
        navigateFallback: '/index.html',
      },
    },
  };