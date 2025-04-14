"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5229],{1315:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"assignLocation",{enumerable:!0,get:function(){return o}});let r=n(5929);function o(e,t){if(e.startsWith(".")){let n=t.origin+t.pathname;return new URL((n.endsWith("/")?n:n+"/")+e)}return new URL((0,r.addBasePath)(e),t.href)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3072:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_HEADER:function(){return r},FLIGHT_HEADERS:function(){return s},NEXT_DID_POSTPONE_HEADER:function(){return f},NEXT_HMR_REFRESH_HEADER:function(){return a},NEXT_IS_PRERENDER_HEADER:function(){return p},NEXT_REWRITTEN_PATH_HEADER:function(){return _},NEXT_REWRITTEN_QUERY_HEADER:function(){return R},NEXT_ROUTER_PREFETCH_HEADER:function(){return u},NEXT_ROUTER_SEGMENT_PREFETCH_HEADER:function(){return l},NEXT_ROUTER_STALE_TIME_HEADER:function(){return E},NEXT_ROUTER_STATE_TREE_HEADER:function(){return o},NEXT_RSC_UNION_QUERY:function(){return c},NEXT_URL:function(){return i},RSC_CONTENT_TYPE_HEADER:function(){return d},RSC_HEADER:function(){return n}});let n="RSC",r="Next-Action",o="Next-Router-State-Tree",u="Next-Router-Prefetch",l="Next-Router-Segment-Prefetch",a="Next-HMR-Refresh",i="Next-Url",d="text/x-component",s=[n,o,u,a,l],c="_rsc",E="x-nextjs-stale-time",f="x-nextjs-postponed",_="x-nextjs-rewritten-path",R="x-nextjs-rewritten-query",p="x-nextjs-prerender";("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3269:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_HEADER:function(){return r},FLIGHT_HEADERS:function(){return s},NEXT_DID_POSTPONE_HEADER:function(){return f},NEXT_HMR_REFRESH_HEADER:function(){return a},NEXT_IS_PRERENDER_HEADER:function(){return p},NEXT_REWRITTEN_PATH_HEADER:function(){return _},NEXT_REWRITTEN_QUERY_HEADER:function(){return R},NEXT_ROUTER_PREFETCH_HEADER:function(){return u},NEXT_ROUTER_SEGMENT_PREFETCH_HEADER:function(){return l},NEXT_ROUTER_STALE_TIME_HEADER:function(){return E},NEXT_ROUTER_STATE_TREE_HEADER:function(){return o},NEXT_RSC_UNION_QUERY:function(){return c},NEXT_URL:function(){return i},RSC_CONTENT_TYPE_HEADER:function(){return d},RSC_HEADER:function(){return n}});let n="RSC",r="Next-Action",o="Next-Router-State-Tree",u="Next-Router-Prefetch",l="Next-Router-Segment-Prefetch",a="Next-HMR-Refresh",i="Next-Url",d="text/x-component",s=[n,o,u,a,l],c="_rsc",E="x-nextjs-stale-time",f="x-nextjs-postponed",_="x-nextjs-rewritten-path",R="x-nextjs-rewritten-query",p="x-nextjs-prerender";("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5415:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),n(5449),(0,n(6188).appBootstrap)(()=>{let{hydrate:e}=n(4486);n(6158),n(7555),e()}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5449:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),n(3668);let r=n(589);{let e=n.u;n.u=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return(0,r.encodeURIPath)(e(...n))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6158:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{createEmptyCacheNode:function(){return O},createPrefetchURL:function(){return b},default:function(){return I}});let r=n(6966),o=n(5155),u=r._(n(2115)),l=n(5227),a=n(9818),i=n(1139),d=n(886),s=n(1365),c=r._(n(6614)),E=n(774),f=n(5929),_=n(7760),R=n(686),p=n(2691),h=n(1822),T=n(4882),w=n(7102),N=n(8946),v=n(8836),y=n(3806);n(6005);let x=n(6825),P=n(2210),A=n(9154);n(4930);let S={};function m(e){return e.origin!==window.location.origin}function b(e){let t;if((0,E.isBot)(window.navigator.userAgent))return null;try{t=new URL((0,f.addBasePath)(e),window.location.href)}catch(t){throw Object.defineProperty(Error("Cannot prefetch '"+e+"' because it cannot be converted to a URL."),"__NEXT_ERROR_CODE",{value:"E234",enumerable:!1,configurable:!0})}return m(t)?null:t}function j(e){let{appRouterState:t}=e;return(0,u.useInsertionEffect)(()=>{let{tree:e,pushRef:n,canonicalUrl:r}=t,o={...n.preserveCustomHistoryState?window.history.state:{},__NA:!0,__PRIVATE_NEXTJS_INTERNALS_TREE:e};n.pendingPush&&(0,i.createHrefFromUrl)(new URL(window.location.href))!==r?(n.pendingPush=!1,window.history.pushState(o,"",r)):window.history.replaceState(o,"",r)},[t]),(0,u.useEffect)(()=>{},[t.nextUrl,t.tree]),null}function O(){return{lazyData:null,rsc:null,prefetchRsc:null,head:null,prefetchHead:null,parallelRoutes:new Map,loading:null}}function g(e){null==e&&(e={});let t=window.history.state,n=null==t?void 0:t.__NA;n&&(e.__NA=n);let r=null==t?void 0:t.__PRIVATE_NEXTJS_INTERNALS_TREE;return r&&(e.__PRIVATE_NEXTJS_INTERNALS_TREE=r),e}function C(e){let{headCacheNode:t}=e,n=null!==t?t.head:null,r=null!==t?t.prefetchHead:null,o=null!==r?r:n;return(0,u.useDeferredValue)(n,o)}function H(e){let t,{actionQueue:n,assetPrefix:r,globalError:i}=e,[E,v]=(0,s.useReducer)(n),{canonicalUrl:O}=(0,s.useUnwrapState)(E),{searchParams:H,pathname:I}=(0,u.useMemo)(()=>{let e=new URL(O,window.location.href);return{searchParams:e.searchParams,pathname:(0,w.hasBasePath)(e.pathname)?(0,T.removeBasePath)(e.pathname):e.pathname}},[O]),L=(0,u.useCallback)(e=>{let{previousTree:t,serverResponse:n}=e;(0,u.startTransition)(()=>{v({type:a.ACTION_SERVER_PATCH,previousTree:t,serverResponse:n})})},[v]),D=(0,u.useCallback)((e,t,n)=>{let r=new URL((0,f.addBasePath)(e),location.href);return v({type:a.ACTION_NAVIGATE,url:r,isExternalUrl:m(r),locationSearch:location.search,shouldScroll:null==n||n,navigateType:t,allowAliasing:!0})},[v]);(0,y.useServerActionDispatcher)(v);let U=(0,u.useMemo)(()=>({back:()=>window.history.back(),forward:()=>window.history.forward(),prefetch:(e,t)=>{let r=b(e);if(null!==r){var o;(0,A.prefetchReducer)(n.state,{type:a.ACTION_PREFETCH,url:r,kind:null!=(o=null==t?void 0:t.kind)?o:a.PrefetchKind.FULL})}},replace:(e,t)=>{void 0===t&&(t={}),(0,u.startTransition)(()=>{var n;D(e,"replace",null==(n=t.scroll)||n)})},push:(e,t)=>{void 0===t&&(t={}),(0,u.startTransition)(()=>{var n;D(e,"push",null==(n=t.scroll)||n)})},refresh:()=>{(0,u.startTransition)(()=>{v({type:a.ACTION_REFRESH,origin:window.location.origin})})},hmrRefresh:()=>{throw Object.defineProperty(Error("hmrRefresh can only be used in development mode. Please use refresh instead."),"__NEXT_ERROR_CODE",{value:"E485",enumerable:!1,configurable:!0})}}),[n,v,D]);(0,u.useEffect)(()=>{window.next&&(window.next.router=U)},[U]),(0,u.useEffect)(()=>{function e(e){var t;e.persisted&&(null==(t=window.history.state)?void 0:t.__PRIVATE_NEXTJS_INTERNALS_TREE)&&(S.pendingMpaPath=void 0,v({type:a.ACTION_RESTORE,url:new URL(window.location.href),tree:window.history.state.__PRIVATE_NEXTJS_INTERNALS_TREE}))}return window.addEventListener("pageshow",e),()=>{window.removeEventListener("pageshow",e)}},[v]),(0,u.useEffect)(()=>{function e(e){let t="reason"in e?e.reason:e.error;if((0,P.isRedirectError)(t)){e.preventDefault();let n=(0,x.getURLFromRedirectError)(t);(0,x.getRedirectTypeFromError)(t)===P.RedirectType.push?U.push(n,{}):U.replace(n,{})}}return window.addEventListener("error",e),window.addEventListener("unhandledrejection",e),()=>{window.removeEventListener("error",e),window.removeEventListener("unhandledrejection",e)}},[U]);let{pushRef:X}=(0,s.useUnwrapState)(E);if(X.mpaNavigation){if(S.pendingMpaPath!==O){let e=window.location;X.pendingPush?e.assign(O):e.replace(O),S.pendingMpaPath=O}(0,u.use)(h.unresolvedThenable)}(0,u.useEffect)(()=>{let e=window.history.pushState.bind(window.history),t=window.history.replaceState.bind(window.history),n=e=>{var t;let n=window.location.href,r=null==(t=window.history.state)?void 0:t.__PRIVATE_NEXTJS_INTERNALS_TREE;(0,u.startTransition)(()=>{v({type:a.ACTION_RESTORE,url:new URL(null!=e?e:n,n),tree:r})})};window.history.pushState=function(t,r,o){return(null==t?void 0:t.__NA)||(null==t?void 0:t._N)||(t=g(t),o&&n(o)),e(t,r,o)},window.history.replaceState=function(e,r,o){return(null==e?void 0:e.__NA)||(null==e?void 0:e._N)||(e=g(e),o&&n(o)),t(e,r,o)};let r=e=>{if(e.state){if(!e.state.__NA){window.location.reload();return}(0,u.startTransition)(()=>{v({type:a.ACTION_RESTORE,url:new URL(window.location.href),tree:e.state.__PRIVATE_NEXTJS_INTERNALS_TREE})})}};return window.addEventListener("popstate",r),()=>{window.history.pushState=e,window.history.replaceState=t,window.removeEventListener("popstate",r)}},[v]);let{cache:F,tree:B,nextUrl:k,focusAndScrollRef:V}=(0,s.useUnwrapState)(E),J=(0,u.useMemo)(()=>(0,p.findHeadInCache)(F,B[1]),[F,B]),Y=(0,u.useMemo)(()=>(0,N.getSelectedParams)(B),[B]),G=(0,u.useMemo)(()=>({parentTree:B,parentCacheNode:F,parentSegmentPath:null,url:O}),[B,F,O]),W=(0,u.useMemo)(()=>({changeByServerResponse:L,tree:B,focusAndScrollRef:V,nextUrl:k}),[L,B,V,k]);if(null!==J){let[e,n]=J;t=(0,o.jsx)(C,{headCacheNode:e},n)}else t=null;let z=(0,o.jsxs)(R.RedirectBoundary,{children:[t,F.rsc,(0,o.jsx)(_.AppRouterAnnouncer,{tree:B})]});return z=(0,o.jsx)(c.ErrorBoundary,{errorComponent:i[0],errorStyles:i[1],children:z}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j,{appRouterState:(0,s.useUnwrapState)(E)}),(0,o.jsx)(M,{}),(0,o.jsx)(d.PathParamsContext.Provider,{value:Y,children:(0,o.jsx)(d.PathnameContext.Provider,{value:I,children:(0,o.jsx)(d.SearchParamsContext.Provider,{value:H,children:(0,o.jsx)(l.GlobalLayoutRouterContext.Provider,{value:W,children:(0,o.jsx)(l.AppRouterContext.Provider,{value:U,children:(0,o.jsx)(l.LayoutRouterContext.Provider,{value:G,children:z})})})})})})]})}function I(e){let{actionQueue:t,globalErrorComponentAndStyles:[n,r],assetPrefix:u}=e;return(0,v.useNavFailureHandler)(),(0,o.jsx)(c.ErrorBoundary,{errorComponent:c.default,children:(0,o.jsx)(H,{actionQueue:t,assetPrefix:u,globalError:[n,r]})})}let L=new Set,D=new Set;function M(){let[,e]=u.default.useState(0),t=L.size;return(0,u.useEffect)(()=>{let n=()=>e(e=>e+1);return D.add(n),t!==L.size&&n(),()=>{D.delete(n)}},[t,e]),[...L].map((e,t)=>(0,o.jsx)("link",{rel:"stylesheet",href:""+e,precedence:"next"},t))}globalThis._N_E_STYLE_LOAD=function(e){let t=L.size;return L.add(e),L.size!==t&&D.forEach(e=>e()),Promise.resolve()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7760:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AppRouterAnnouncer",{enumerable:!0,get:function(){return l}});let r=n(2115),o=n(7650),u="next-route-announcer";function l(e){let{tree:t}=e,[n,l]=(0,r.useState)(null);(0,r.useEffect)(()=>(l(function(){var e;let t=document.getElementsByName(u)[0];if(null==t?void 0:null==(e=t.shadowRoot)?void 0:e.childNodes[0])return t.shadowRoot.childNodes[0];{let e=document.createElement(u);e.style.cssText="position:absolute";let t=document.createElement("div");return t.ariaLive="assertive",t.id="__next-route-announcer__",t.role="alert",t.style.cssText="position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal",e.attachShadow({mode:"open"}).appendChild(t),document.body.appendChild(e),t}}()),()=>{let e=document.getElementsByTagName(u)[0];(null==e?void 0:e.isConnected)&&document.body.removeChild(e)}),[]);let[a,i]=(0,r.useState)(""),d=(0,r.useRef)(void 0);return(0,r.useEffect)(()=>{let e="";if(document.title)e=document.title;else{let t=document.querySelector("h1");t&&(e=t.innerText||t.textContent||"")}void 0!==d.current&&d.current!==e&&i(e),d.current=e},[t]),n?(0,o.createPortal)(a,n):null}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}}]);