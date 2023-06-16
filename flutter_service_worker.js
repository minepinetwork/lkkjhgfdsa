'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2b00042f7481c7b056c4b410d28f33cf",
".git/config": "ff680ceab053dfc462572847e3abddb1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b5cab94ba3d17195462183e033c54b9c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9bf8bfa445f65f2e36e2b914841cc46f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2a424260cb33eeb2fc1515087ee6e3e3",
".git/logs/refs/heads/master": "2a424260cb33eeb2fc1515087ee6e3e3",
".git/logs/refs/remotes/origin/master": "1cb6fb158d7f0f1bc5b2621ac6e8d519",
".git/objects/02/c8c03307c33fe192fe1b9e7ec47799848a18f3": "c9bd17df5da0a5167842091fa6b61f79",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/b3a5b1af130bfe6c4e515584fef56a9de8f8db": "374a2f7f27cffff1874380da28e9bdd1",
".git/objects/0c/4edf9f2875e9af7feace356ad67eddb79c35b8": "0f47e08c1f6e985aa570a1b3fc6c5b3b",
".git/objects/13/cb4006d51cdea35714dbf0be008dfeb1452611": "806f525b6b52be071eb48820367d8909",
".git/objects/15/172e01bf010054a59cc0237107776044adf29f": "764c24b578b802d4bdb64b90eadff8d7",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1e/de7bf771ac99b73d9202917fd1714dba5b84c0": "7c252d17d55969e6820af140e54fc94a",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/28/93958e9a347c1946c11c95f9b3cb9c097d495c": "2576fb732a338385ca75033a85f262e7",
".git/objects/2c/4b4e55101785a9675128a53658cbd152f9c0ea": "ab6f5d4456dc0906511ee98fa77417e4",
".git/objects/30/c49c2f258ae4a31e6a05a20ea15f94a069c6c1": "22c8e6a2d1194f36862c77ffc7472052",
".git/objects/32/0d2f9a1ea38adc2c74f3e185d8518b896dd11a": "c03055ff6a42750293865a5e175e418a",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/60c8f1dfad53a633529e3b5b2a1ffbeb67ea15": "ef87e29325991a82f28225ed573a4a9c",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/24878fc0c22ae229eb998eea3fea1655aaa7bf": "51fe2a897da15ccbbdf25efe9ac9d004",
".git/objects/4d/2058237aec421f24fb6d64946f122a8d6eab57": "309baa42515583ac8113660e9533abec",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/5a/8d058c4b54070813737e8f2bb42a999c01d001": "d0215f5ac540ec89127561755ef290af",
".git/objects/5e/2d6ec3574300889d6093109e35f39ef71d5cc0": "19466c65a8b7307b7888db971953b0c9",
".git/objects/5f/6b108fd97a9f5780da5c55ac829bc706d0589e": "6a956cb05be010a96272689c6fd37a0e",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/04ddf55f1164506a1e9cc11d2e996e42e767f6": "2a918adc58a660c3d1acaf045005a1a7",
".git/objects/77/7adec7cb5496659ff63adc1094627e78dc6836": "12aacb2475ca25d1527300e8e34f70d5",
".git/objects/80/aafc6ce9784af1198dfe78b03f8882b22b2df0": "d25b53cee1e07b69fc39a4f5bbb422fe",
".git/objects/8c/b93c5085f189845d351414b4e4f1515ea66f60": "f30206c803b43a425ea8986f45099e74",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/9d/6e4b3deb77b3bb8730544de9aa1830705c86e3": "862db579449ed66f79002c346bec5e6b",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/ed2199fc5dbde113df1333de7e31de1b069e06": "a5e87c30c3abf113a3396c6dea91c976",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c3/664947f2151925f566f97be638f9329426224f": "229b7fbdf63774dcf534c549ed7f36b9",
".git/objects/c7/476fbeef75048053783ac847a2984960cab3d7": "7cda9c373b11aeec3d3976edf76eae0d",
".git/objects/d1/b1205c3fe5ff4d79d19e563ab973bd60ddcf9e": "4169b9a7d6e6005b6e55daca2685fa99",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/4ae7ddbf6f4c6e2a63966722dbc32e19f004cd": "58ebdf8ccc0ef7322097e2210c22aee0",
".git/objects/e4/fe14b36fdcfd659cd4f1e8d1d1f02316e087e5": "d2e0aad2338ae2ef2696e52f1fe2d324",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fe/4cde76b60c9f5605f1a2ed4bc990bf7f694cd5": "0bc9539e42f3458f0eaec0a9fc3365f1",
".git/objects/pack/pack-e00d22111721b9e05b48cb6faab90cd2addc0c22.idx": "a239881e7ea854a3540dd2d3c92f1194",
".git/objects/pack/pack-e00d22111721b9e05b48cb6faab90cd2addc0c22.pack": "e18f7a61a58225d51f9b03756c7d2073",
".git/objects/pack/tmp_pack_RbcB1W": "2fd616d61ff598acfd1651aeeaf8c6b8",
".git/ORIG_HEAD": "6ad3b1cd8c9430612882c923efaf85ca",
".git/refs/heads/master": "6ad3b1cd8c9430612882c923efaf85ca",
".git/refs/remotes/origin/master": "6ad3b1cd8c9430612882c923efaf85ca",
"assets/asset/icons/chat.png": "eb13764dcc9778b269d6e9d718f1588c",
"assets/asset/icons/pi_icon.png": "4dcdc403eb1400aabc72a9092b5daafb",
"assets/asset/icons/wallet.png": "40641e77e79674618c432bd2ec7c8d1c",
"assets/AssetManifest.bin": "812a2f20908c0bdc2a8df198d2807803",
"assets/AssetManifest.json": "95186d06003ba5fcf590bb04410c3d42",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "02278d778e3bb6216781c9dec057dbdb",
"assets/NOTICES": "ff9fbb7d00f78dc90fb63e06fbe3601d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.ico": "12986af571cc6578df03e29dbebc2125",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "6122d3d16d68ec77dd0fdb4b830a52c1",
"icons/Icon-512.png": "8550d160509d27cac0d1bb1a81943b0d",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "945d7e1d8766adb3dc07f76ad9fac6e7",
"/": "945d7e1d8766adb3dc07f76ad9fac6e7",
"main.dart.js": "eca9c2cdb01aea488a4ac7b7aa002fa2",
"manifest.json": "660f29456619d2c3647f1dc293a0039f",
"version.json": "253fd21253c4e3fc1e83552f63aee975"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
