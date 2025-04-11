"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5523],{4819:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"restoreReducer",{enumerable:!0,get:function(){return l}});let a=r(1139),n=r(8946);function l(e,t){var r;let{url:l,tree:u}=t,o=(0,a.createHrefFromUrl)(l),c=u||e.tree,i=e.cache;return{canonicalUrl:o,pushRef:{pendingPush:!1,mpaNavigation:!1,preserveCustomHistoryState:!0},focusAndScrollRef:e.focusAndScrollRef,cache:i,prefetchCache:e.prefetchCache,tree:c,nextUrl:null!=(r=(0,n.extractPathFromFlightRouterState)(c))?r:l.pathname}}r(4150),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4908:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{addRefreshMarkerToActiveParallelSegments:function(){return function e(t,r){let[a,n,,u]=t;for(let o in a.includes(l.PAGE_SEGMENT_KEY)&&"refresh"!==u&&(t[2]=r,t[3]="refresh"),n)e(n[o],r)}},refreshInactiveParallelSegments:function(){return u}});let a=r(878),n=r(8586),l=r(8291);async function u(e){let t=new Set;await o({...e,rootTree:e.updatedTree,fetchedSegments:t})}async function o(e){let{state:t,updatedTree:r,updatedCache:l,includeNextUrl:u,fetchedSegments:c,rootTree:i=r,canonicalUrl:f}=e,[,d,s,h]=r,p=[];if(s&&s!==f&&"refresh"===h&&!c.has(s)){c.add(s);let e=(0,n.fetchServerResponse)(new URL(s,location.origin),{flightRouterState:[i[0],i[1],i[2],"refetch"],nextUrl:u?t.nextUrl:null}).then(e=>{let{flightData:t}=e;if("string"!=typeof t)for(let e of t)(0,a.applyFlightData)(l,l,e)});p.push(e)}for(let e in d){let r=o({state:t,updatedTree:d[e],updatedCache:l,includeNextUrl:u,fetchedSegments:c,rootTree:i,canonicalUrl:f});p.push(r)}await Promise.all(p)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5542:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"refreshReducer",{enumerable:!0,get:function(){return p}});let a=r(8586),n=r(1139),l=r(7442),u=r(9234),o=r(3894),c=r(3507),i=r(4758),f=r(6158),d=r(6375),s=r(4108),h=r(4908);function p(e,t){let{origin:r}=t,p={},R=e.canonicalUrl,_=e.tree;p.preserveCustomHistoryState=!1;let E=(0,f.createEmptyCacheNode)(),y=(0,s.hasInterceptionRouteInCurrentTree)(e.tree);return E.lazyData=(0,a.fetchServerResponse)(new URL(R,r),{flightRouterState:[_[0],_[1],_[2],"refetch"],nextUrl:y?e.nextUrl:null}),E.lazyData.then(async r=>{let{flightData:a,canonicalUrl:f}=r;if("string"==typeof a)return(0,o.handleExternalUrl)(e,p,a,e.pushRef.pendingPush);for(let r of(E.lazyData=null,a)){let{tree:a,seedData:c,head:s,isRootRender:g}=r;if(!g)return console.log("REFRESH FAILED"),e;let T=(0,l.applyRouterStatePatchToTree)([""],_,a,e.canonicalUrl);if(null===T)return(0,d.handleSegmentMismatch)(e,t,a);if((0,u.isNavigatingToNewRootLayout)(_,T))return(0,o.handleExternalUrl)(e,p,R,e.pushRef.pendingPush);let v=f?(0,n.createHrefFromUrl)(f):void 0;if(f&&(p.canonicalUrl=v),null!==c){let e=c[1],t=c[3];E.rsc=e,E.prefetchRsc=null,E.loading=t,(0,i.fillLazyItemsTillLeafWithHead)(E,void 0,a,c,s,void 0),p.prefetchCache=new Map}await (0,h.refreshInactiveParallelSegments)({state:e,updatedTree:T,updatedCache:E,includeNextUrl:y,canonicalUrl:p.canonicalUrl||e.canonicalUrl}),p.cache=E,p.patchedTree=T,_=T}return(0,c.handleMutable)(e,p)},()=>e)}r(6005),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7801:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"serverPatchReducer",{enumerable:!0,get:function(){return f}});let a=r(1139),n=r(7442),l=r(9234),u=r(3894),o=r(878),c=r(3507),i=r(6158);function f(e,t){let{serverResponse:{flightData:r,canonicalUrl:f}}=t,d={};if(d.preserveCustomHistoryState=!1,"string"==typeof r)return(0,u.handleExternalUrl)(e,d,r,e.pushRef.pendingPush);let s=e.tree,h=e.cache;for(let t of r){let{segmentPath:r,tree:c}=t,p=(0,n.applyRouterStatePatchToTree)(["",...r],s,c,e.canonicalUrl);if(null===p)return e;if((0,l.isNavigatingToNewRootLayout)(s,p))return(0,u.handleExternalUrl)(e,d,e.canonicalUrl,e.pushRef.pendingPush);let R=f?(0,a.createHrefFromUrl)(f):void 0;R&&(d.canonicalUrl=R);let _=(0,i.createEmptyCacheNode)();(0,o.applyFlightData)(h,_,t),d.patchedTree=p,d.cache=_,h=_,s=p}return(0,c.handleMutable)(e,d)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8709:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"serverActionReducer",{enumerable:!0,get:function(){return N}});let a=r(3806),n=r(1818),l=r(3269),u=r(9818),o=r(1315),c=r(1139),i=r(3894),f=r(7442),d=r(9234),s=r(3507),h=r(4758),p=r(6158),R=r(4108),_=r(6375),E=r(4908),y=r(2561),g=r(6825),T=r(2210),v=r(1518),P=r(4882),O=r(7102),b=r(2816);r(6005);let{createFromFetch:U,createTemporaryReferenceSet:C,encodeReply:m}=r(4979);async function S(e,t,r){let u,c,{actionId:i,actionArgs:f}=r,d=C(),s=(0,b.extractInfoFromServerReferenceId)(i),h="use-cache"===s.type?(0,b.omitUnusedArgs)(f,s):f,p=await m(h,{temporaryReferences:d}),R=await fetch("",{method:"POST",headers:{Accept:l.RSC_CONTENT_TYPE_HEADER,[l.ACTION_HEADER]:i,[l.NEXT_ROUTER_STATE_TREE_HEADER]:encodeURIComponent(JSON.stringify(e.tree)),...t?{[l.NEXT_URL]:t}:{}},body:p}),_=R.headers.get("x-action-redirect"),[E,g]=(null==_?void 0:_.split(";"))||[];switch(g){case"push":u=T.RedirectType.push;break;case"replace":u=T.RedirectType.replace;break;default:u=void 0}let v=!!R.headers.get(l.NEXT_IS_PRERENDER_HEADER);try{let e=JSON.parse(R.headers.get("x-action-revalidated")||"[[],0,0]");c={paths:e[0]||[],tag:!!e[1],cookie:e[2]}}catch(e){c={paths:[],tag:!1,cookie:!1}}let P=E?(0,o.assignLocation)(E,new URL(e.canonicalUrl,window.location.href)):void 0,O=R.headers.get("content-type");if(null==O?void 0:O.startsWith(l.RSC_CONTENT_TYPE_HEADER)){let e=await U(Promise.resolve(R),{callServer:a.callServer,findSourceMapURL:n.findSourceMapURL,temporaryReferences:d});return E?{actionFlightData:(0,y.normalizeFlightData)(e.f),redirectLocation:P,redirectType:u,revalidatedParts:c,isPrerender:v}:{actionResult:e.a,actionFlightData:(0,y.normalizeFlightData)(e.f),redirectLocation:P,redirectType:u,revalidatedParts:c,isPrerender:v}}if(R.status>=400)throw Object.defineProperty(Error("text/plain"===O?await R.text():"An unexpected response was received from the server."),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return{redirectLocation:P,redirectType:u,revalidatedParts:c,isPrerender:v}}function N(e,t){let{resolve:r,reject:a}=t,n={},l=e.tree;n.preserveCustomHistoryState=!1;let o=e.nextUrl&&(0,R.hasInterceptionRouteInCurrentTree)(e.tree)?e.nextUrl:null;return S(e,o,t).then(async R=>{let y,{actionResult:b,actionFlightData:U,redirectLocation:C,redirectType:m,isPrerender:S,revalidatedParts:N}=R;if(C&&(m===T.RedirectType.replace?(e.pushRef.pendingPush=!1,n.pendingPush=!1):(e.pushRef.pendingPush=!0,n.pendingPush=!0),n.canonicalUrl=y=(0,c.createHrefFromUrl)(C,!1)),!U)return(r(b),C)?(0,i.handleExternalUrl)(e,n,C.href,e.pushRef.pendingPush):e;if("string"==typeof U)return r(b),(0,i.handleExternalUrl)(e,n,U,e.pushRef.pendingPush);let A=N.paths.length>0||N.tag||N.cookie;for(let a of U){let{tree:u,seedData:c,head:s,isRootRender:R}=a;if(!R)return console.log("SERVER ACTION APPLY FAILED"),r(b),e;let g=(0,f.applyRouterStatePatchToTree)([""],l,u,y||e.canonicalUrl);if(null===g)return r(b),(0,_.handleSegmentMismatch)(e,t,u);if((0,d.isNavigatingToNewRootLayout)(l,g))return r(b),(0,i.handleExternalUrl)(e,n,y||e.canonicalUrl,e.pushRef.pendingPush);if(null!==c){let t=c[1],r=(0,p.createEmptyCacheNode)();r.rsc=t,r.prefetchRsc=null,r.loading=c[3],(0,h.fillLazyItemsTillLeafWithHead)(r,void 0,u,c,s,void 0),n.cache=r,n.prefetchCache=new Map,A&&await (0,E.refreshInactiveParallelSegments)({state:e,updatedTree:g,updatedCache:r,includeNextUrl:!!o,canonicalUrl:n.canonicalUrl||e.canonicalUrl})}n.patchedTree=g,l=g}return C&&y?(A||((0,v.createSeededPrefetchCacheEntry)({url:C,data:{flightData:U,canonicalUrl:void 0,couldBeIntercepted:!1,prerendered:!1,postponed:!1,staleTime:-1},tree:e.tree,prefetchCache:e.prefetchCache,nextUrl:e.nextUrl,kind:S?u.PrefetchKind.FULL:u.PrefetchKind.AUTO}),n.prefetchCache=e.prefetchCache),a((0,g.getRedirectError)((0,O.hasBasePath)(y)?(0,P.removeBasePath)(y):y,m||T.RedirectType.push))):r(b),(0,s.handleMutable)(e,n)},t=>(a(t),e))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9726:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"reducer",{enumerable:!0,get:function(){return d}});let a=r(9818),n=r(3894),l=r(7801),u=r(4819),o=r(5542),c=r(9154),i=r(3612),f=r(8709),d=function(e,t){switch(t.type){case a.ACTION_NAVIGATE:return(0,n.navigateReducer)(e,t);case a.ACTION_SERVER_PATCH:return(0,l.serverPatchReducer)(e,t);case a.ACTION_RESTORE:return(0,u.restoreReducer)(e,t);case a.ACTION_REFRESH:return(0,o.refreshReducer)(e,t);case a.ACTION_HMR_REFRESH:return(0,i.hmrRefreshReducer)(e,t);case a.ACTION_PREFETCH:return(0,c.prefetchReducer)(e,t);case a.ACTION_SERVER_ACTION:return(0,f.serverActionReducer)(e,t);default:throw Object.defineProperty(Error("Unknown action"),"__NEXT_ERROR_CODE",{value:"E295",enumerable:!1,configurable:!0})}};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9818:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_HMR_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return a},ACTION_PREFETCH:function(){return u},ACTION_REFRESH:function(){return r},ACTION_RESTORE:function(){return n},ACTION_SERVER_ACTION:function(){return c},ACTION_SERVER_PATCH:function(){return l},PrefetchCacheEntryStatus:function(){return f},PrefetchKind:function(){return i}});let r="refresh",a="navigate",n="restore",l="server-patch",u="prefetch",o="hmr-refresh",c="server-action";var i=function(e){return e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary",e}({}),f=function(e){return e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale",e}({});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}}]);