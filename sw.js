if(!self.define){let e,r={};const i=(i,n)=>(i=new URL(i+".js",n).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let c={};const f=e=>i(e,o),a={module:{uri:o},exports:c,require:f};r[o]=Promise.all(n.map((e=>a[e]||f(e)))).then((e=>(s(...e),c)))}}define(["./workbox-9517df1b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-89c44097.js",revision:null},{url:"index.html",revision:"740b2adcd84b4f0d9b3d1c2948a5f273"},{url:"logo.svg",revision:"4386aa054e214856cf8e8bf3e9b2e40f"},{url:"logo192.png",revision:"fcbca72a681f41d6c3f629b51d9074cd"},{url:"logo256.png",revision:"f66c22751907e9d4ae31a97b0bb5a8f6"},{url:"logo384.png",revision:"b94386c4f37166a3274ebde4159f1c6d"},{url:"logo512.png",revision:"b3ae483c08f231e9dddaeb212934ae6e"},{url:"manifest.webmanifest",revision:"7cebcab462902622c00f3952aacffa27"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"screenshots/1.png",revision:"cad4629f9e35c01d26750b8b4e4ce741"},{url:"screenshots/2.png",revision:"37f1a66f8be6fb2369bb7ee2158a26d8"},{url:"screenshots/performance.png",revision:"cd333b203557410a62f29f0d984de069"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"logo192.png",revision:"fcbca72a681f41d6c3f629b51d9074cd"},{url:"logo.svg",revision:"4386aa054e214856cf8e8bf3e9b2e40f"},{url:"logo256.png",revision:"f66c22751907e9d4ae31a97b0bb5a8f6"},{url:"logo384.png",revision:"b94386c4f37166a3274ebde4159f1c6d"},{url:"logo512.png",revision:"b3ae483c08f231e9dddaeb212934ae6e"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"screenshots/1.png",revision:"cad4629f9e35c01d26750b8b4e4ce741"},{url:"screenshots/2.png",revision:"37f1a66f8be6fb2369bb7ee2158a26d8"},{url:"screenshots/performance.png",revision:"cd333b203557410a62f29f0d984de069"},{url:"manifest.webmanifest",revision:"7cebcab462902622c00f3952aacffa27"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
