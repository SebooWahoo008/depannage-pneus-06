"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7502],{2004:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"invalidateCacheByRouterState",{enumerable:!0,get:function(){return n}});let a=l(5637);function n(e,t,l){for(let n in l[1]){let r=l[1][n][0],u=(0,a.createRouterCacheKey)(r),o=t.parallelRoutes.get(n);if(o){let t=new Map(o);t.delete(u),e.parallelRoutes.set(n,t)}}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3118:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{fillCacheWithNewSubTreeData:function(){return c},fillCacheWithNewSubTreeDataButOnlyLoading:function(){return d}});let a=l(2004),n=l(4758),r=l(5637),u=l(8291);function o(e,t,l,o,c){let{segmentPath:d,seedData:i,tree:f,head:s}=l,p=e,h=t;for(let e=0;e<d.length;e+=2){let t=d[e],l=d[e+1],g=e===d.length-2,y=(0,r.createRouterCacheKey)(l),R=h.parallelRoutes.get(t);if(!R)continue;let _=p.parallelRoutes.get(t);_&&_!==R||(_=new Map(R),p.parallelRoutes.set(t,_));let b=R.get(y),v=_.get(y);if(g){if(i&&(!v||!v.lazyData||v===b)){let e=i[0],t=i[1],l=i[3];v={lazyData:null,rsc:c||e!==u.PAGE_SEGMENT_KEY?t:null,prefetchRsc:null,head:null,prefetchHead:null,loading:l,parallelRoutes:c&&b?new Map(b.parallelRoutes):new Map},b&&c&&(0,a.invalidateCacheByRouterState)(v,b,f),c&&(0,n.fillLazyItemsTillLeafWithHead)(v,b,f,i,s,o),_.set(y,v)}continue}v&&b&&(v===b&&(v={lazyData:v.lazyData,rsc:v.rsc,prefetchRsc:v.prefetchRsc,head:v.head,prefetchHead:v.prefetchHead,parallelRoutes:new Map(v.parallelRoutes),loading:v.loading},_.set(y,v)),p=v,h=b)}}function c(e,t,l,a){o(e,t,l,a,!0)}function d(e,t,l,a){o(e,t,l,a,!1)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3507:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"handleMutable",{enumerable:!0,get:function(){return r}});let a=l(8946);function n(e){return void 0!==e}function r(e,t){var l,r;let u=null==(l=t.shouldScroll)||l,o=e.nextUrl;if(n(t.patchedTree)){let l=(0,a.computeChangedPath)(e.tree,t.patchedTree);l?o=l:o||(o=e.canonicalUrl)}return{canonicalUrl:n(t.canonicalUrl)?t.canonicalUrl===e.canonicalUrl?e.canonicalUrl:t.canonicalUrl:e.canonicalUrl,pushRef:{pendingPush:n(t.pendingPush)?t.pendingPush:e.pushRef.pendingPush,mpaNavigation:n(t.mpaNavigation)?t.mpaNavigation:e.pushRef.mpaNavigation,preserveCustomHistoryState:n(t.preserveCustomHistoryState)?t.preserveCustomHistoryState:e.pushRef.preserveCustomHistoryState},focusAndScrollRef:{apply:!!u&&(!!n(null==t?void 0:t.scrollableSegments)||e.focusAndScrollRef.apply),onlyHashChange:t.onlyHashChange||!1,hashFragment:u?t.hashFragment&&""!==t.hashFragment?decodeURIComponent(t.hashFragment.slice(1)):e.focusAndScrollRef.hashFragment:null,segmentPaths:u?null!=(r=null==t?void 0:t.scrollableSegments)?r:e.focusAndScrollRef.segmentPaths:[]},cache:t.cache?t.cache:e.cache,prefetchCache:t.prefetchCache?t.prefetchCache:e.prefetchCache,tree:n(t.patchedTree)?t.patchedTree:e.tree,nextUrl:o}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4466:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"invalidateCacheBelowFlightSegmentPath",{enumerable:!0,get:function(){return function e(t,l,r){let u=r.length<=2,[o,c]=r,d=(0,a.createRouterCacheKey)(c),i=l.parallelRoutes.get(o);if(!i)return;let f=t.parallelRoutes.get(o);if(f&&f!==i||(f=new Map(i),t.parallelRoutes.set(o,f)),u){f.delete(d);return}let s=i.get(d),p=f.get(d);p&&s&&(p===s&&(p={lazyData:p.lazyData,rsc:p.rsc,prefetchRsc:p.prefetchRsc,head:p.head,prefetchHead:p.prefetchHead,parallelRoutes:new Map(p.parallelRoutes)},f.set(d,p)),e(p,s,(0,n.getNextFlightSegmentPath)(r)))}}});let a=l(5637),n=l(2561);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4758:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"fillLazyItemsTillLeafWithHead",{enumerable:!0,get:function(){return function e(t,l,r,u,o,c){if(0===Object.keys(r[1]).length){t.head=o;return}for(let d in r[1]){let i;let f=r[1][d],s=f[0],p=(0,a.createRouterCacheKey)(s),h=null!==u&&void 0!==u[2][d]?u[2][d]:null;if(l){let a=l.parallelRoutes.get(d);if(a){let l;let r=(null==c?void 0:c.kind)==="auto"&&c.status===n.PrefetchCacheEntryStatus.reusable,u=new Map(a),i=u.get(p);l=null!==h?{lazyData:null,rsc:h[1],prefetchRsc:null,head:null,prefetchHead:null,loading:h[3],parallelRoutes:new Map(null==i?void 0:i.parallelRoutes)}:r&&i?{lazyData:i.lazyData,rsc:i.rsc,prefetchRsc:i.prefetchRsc,head:i.head,prefetchHead:i.prefetchHead,parallelRoutes:new Map(i.parallelRoutes),loading:i.loading}:{lazyData:null,rsc:null,prefetchRsc:null,head:null,prefetchHead:null,parallelRoutes:new Map(null==i?void 0:i.parallelRoutes),loading:null},u.set(p,l),e(l,i,f,h||null,o,c),t.parallelRoutes.set(d,u);continue}}if(null!==h){let e=h[1],t=h[3];i={lazyData:null,rsc:e,prefetchRsc:null,head:null,prefetchHead:null,parallelRoutes:new Map,loading:t}}else i={lazyData:null,rsc:null,prefetchRsc:null,head:null,prefetchHead:null,parallelRoutes:new Map,loading:null};let g=t.parallelRoutes.get(d);g?g.set(p,i):t.parallelRoutes.set(d,new Map([[p,i]])),e(i,void 0,f,h,o,c)}}}});let a=l(5637),n=l(9818);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6375:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"handleSegmentMismatch",{enumerable:!0,get:function(){return n}});let a=l(3894);function n(e,t,l){return(0,a.handleExternalUrl)(e,{},e.canonicalUrl,!0)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8586:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{createFetch:function(){return g},createFromNextReadableStream:function(){return y},fetchServerResponse:function(){return h},urlToUrlWithoutFlightMarker:function(){return f}});let a=l(3269),n=l(3806),r=l(1818),u=l(9818),o=l(2561),c=l(5624),d=l(8969),{createFromReadableStream:i}=l(4979);function f(e){let t=new URL(e,location.origin);if(t.searchParams.delete(a.NEXT_RSC_UNION_QUERY),t.pathname.endsWith(".txt")){let{pathname:e}=t,l=e.endsWith("/index.txt")?10:4;t.pathname=e.slice(0,-l)}return t}function s(e){return{flightData:f(e).toString(),canonicalUrl:void 0,couldBeIntercepted:!1,prerendered:!1,postponed:!1,staleTime:-1}}let p=new AbortController;async function h(e,t){let{flightRouterState:l,nextUrl:n,prefetchKind:r}=t,d={[a.RSC_HEADER]:"1",[a.NEXT_ROUTER_STATE_TREE_HEADER]:encodeURIComponent(JSON.stringify(l))};r===u.PrefetchKind.AUTO&&(d[a.NEXT_ROUTER_PREFETCH_HEADER]="1"),n&&(d[a.NEXT_URL]=n);try{var i;let t=r?r===u.PrefetchKind.TEMPORARY?"high":"low":"auto";(e=new URL(e)).pathname.endsWith("/")?e.pathname+="index.txt":e.pathname+=".txt";let l=await g(e,d,t,p.signal),n=f(l.url),h=l.redirected?n:void 0,R=l.headers.get("content-type")||"",_=!!(null==(i=l.headers.get("vary"))?void 0:i.includes(a.NEXT_URL)),b=!!l.headers.get(a.NEXT_DID_POSTPONE_HEADER),v=l.headers.get(a.NEXT_ROUTER_STALE_TIME_HEADER),m=null!==v?parseInt(v,10):-1,M=R.startsWith(a.RSC_CONTENT_TYPE_HEADER);if(M||(M=R.startsWith("text/plain")),!M||!l.ok||!l.body)return e.hash&&(n.hash=e.hash),s(n.toString());let O=b?function(e){let t=e.getReader();return new ReadableStream({async pull(e){for(;;){let{done:l,value:a}=await t.read();if(!l){e.enqueue(a);continue}return}}})}(l.body):l.body,E=await y(O);if((0,c.getAppBuildId)()!==E.b)return s(l.url);return{flightData:(0,o.normalizeFlightData)(E.f),canonicalUrl:h,couldBeIntercepted:_,prerendered:E.S,postponed:b,staleTime:m}}catch(t){return p.signal.aborted||console.error("Failed to fetch RSC payload for "+e+". Falling back to browser navigation.",t),{flightData:e.toString(),canonicalUrl:void 0,couldBeIntercepted:!1,prerendered:!1,postponed:!1,staleTime:-1}}}function g(e,t,l,a){let n=new URL(e);return(0,d.setCacheBustingSearchParam)(n,t),fetch(n,{credentials:"same-origin",headers:t,priority:l||void 0,signal:a})}function y(e){return i(e,{callServer:n.callServer,findSourceMapURL:r.findSourceMapURL})}window.addEventListener("pagehide",()=>{p.abort()}),window.addEventListener("pageshow",()=>{p=new AbortController}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9234:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isNavigatingToNewRootLayout",{enumerable:!0,get:function(){return function e(t,l){let a=t[0],n=l[0];if(Array.isArray(a)&&Array.isArray(n)){if(a[0]!==n[0]||a[2]!==n[2])return!0}else if(a!==n)return!0;if(t[4])return!l[4];if(l[4])return!0;let r=Object.values(t[1])[0],u=Object.values(l[1])[0];return!r||!u||e(r,u)}}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}}]);