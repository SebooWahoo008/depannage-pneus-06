"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1061],{894:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ClientPageRoot",{enumerable:!0,get:function(){return o}});let n=r(5155);function o(e){let{Component:t,searchParams:o,params:a,promises:i}=e;{let{createRenderSearchParamsFromClient:e}=r(7205),i=e(o),{createRenderParamsFromClient:l}=r(3558),u=l(a);return(0,n.jsx)(t,{params:u,searchParams:i})}}r(9837),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3506:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"attachHydrationErrorState",{enumerable:!0,get:function(){return a}});let n=r(6465),o=r(9771);function a(e){let t={},r=(0,n.testReactHydrationWarning)(e.message),a=(0,n.isHydrationError)(e);if(!(a||r))return;let i=(0,o.getReactHydrationDiffSegments)(e.message);if(i){let l=i[1];t={...e.details,...o.hydrationErrorState,warning:(l&&!r?null:o.hydrationErrorState.warning)||[(0,n.getDefaultHydrationErrorMessage)()],notes:r?"":i[0],reactOutputComponentDiff:l},!o.hydrationErrorState.reactOutputComponentDiff&&l&&(o.hydrationErrorState.reactOutputComponentDiff=l),!l&&a&&o.hydrationErrorState.reactOutputComponentDiff&&(t.reactOutputComponentDiff=o.hydrationErrorState.reactOutputComponentDiff)}else o.hydrationErrorState.warning&&(t={...e.details,...o.hydrationErrorState}),o.hydrationErrorState.reactOutputComponentDiff&&(t.reactOutputComponentDiff=o.hydrationErrorState.reactOutputComponentDiff);e.details=t}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3575:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getReactStitchedError",{enumerable:!0,get:function(){return s}});let n=r(4252),o=n._(r(4232)),a=n._(r(6240)),i=r(8089),l="react-stack-bottom-frame",u=RegExp("(at "+l+" )|("+l+"\\@)");function s(e){let t=(0,a.default)(e),r=t&&e.stack||"",n=t?e.message:"",l=r.split("\n"),s=l.findIndex(e=>u.test(e)),f=s>=0?l.slice(0,s).join("\n"):r,d=Object.defineProperty(Error(n),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return Object.assign(d,e),(0,i.copyNextErrorCode)(e,d),d.stack=f,function(e){if(!o.default.captureOwnerStack)return;let t=e.stack||"",r=o.default.captureOwnerStack();r&&!1===t.endsWith(r)&&(e.stack=t+=r)}(d),d}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3950:(e,t)=>{function r(e,t){let r=e[e.length-1];(!r||r.stack!==t.stack)&&e.push(t)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"enqueueConsecutiveDedupedError",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4970:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ClientSegmentRoot",{enumerable:!0,get:function(){return o}});let n=r(5155);function o(e){let{Component:t,slots:o,params:a,promise:i}=e;{let{createRenderParamsFromClient:e}=r(3558),i=e(a);return(0,n.jsx)(t,{...o,params:i})}}r(9837),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5128:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getReactStitchedError",{enumerable:!0,get:function(){return s}});let n=r(8229),o=n._(r(2115)),a=n._(r(5807)),i=r(9148),l="react-stack-bottom-frame",u=RegExp("(at "+l+" )|("+l+"\\@)");function s(e){let t=(0,a.default)(e),r=t&&e.stack||"",n=t?e.message:"",l=r.split("\n"),s=l.findIndex(e=>u.test(e)),f=s>=0?l.slice(0,s).join("\n"):r,d=Object.defineProperty(Error(n),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return Object.assign(d,e),(0,i.copyNextErrorCode)(e,d),d.stack=f,function(e){if(!o.default.captureOwnerStack)return;let t=e.stack||"",r=o.default.captureOwnerStack();r&&!1===t.endsWith(r)&&(e.stack=t+=r)}(d),d}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5444:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{handleClientError:function(){return b},handleGlobalErrors:function(){return v},useErrorHandler:function(){return m}});let n=r(8229),o=r(2115),a=r(3506),i=r(2858),l=r(9771),u=r(5169),s=n._(r(5807)),f=r(6043),d=r(3950),c=r(5128),p=globalThis.queueMicrotask||(e=>Promise.resolve().then(e)),h=[],g=[],y=[],_=[];function b(e,t,r){let n;if(void 0===r&&(r=!1),e&&(0,s.default)(e))n=r?(0,f.createUnhandledError)(e):e;else{let e=(0,u.formatConsoleArgs)(t),{environmentName:r}=(0,u.parseConsoleArgs)(t);n=(0,f.createUnhandledError)(e,r)}for(let e of(n=(0,c.getReactStitchedError)(n),(0,l.storeHydrationErrorStateFromConsoleArgs)(...t),(0,a.attachHydrationErrorState)(n),(0,d.enqueueConsecutiveDedupedError)(h,n),g))p(()=>{e(n)})}function m(e,t){(0,o.useEffect)(()=>(h.forEach(e),y.forEach(t),g.push(e),_.push(t),()=>{g.splice(g.indexOf(e),1),_.splice(_.indexOf(t),1),h.splice(0,h.length),y.splice(0,y.length)}),[e,t])}function j(e){if((0,i.isNextRouterError)(e.error))return e.preventDefault(),!1;e.error&&b(e.error,[])}function E(e){let t=null==e?void 0:e.reason;if((0,i.isNextRouterError)(t)){e.preventDefault();return}let r=t;for(let e of(r&&!(0,s.default)(r)&&(r=(0,f.createUnhandledError)(r+"")),y.push(r),_))e(r)}function v(){try{Error.stackTraceLimit=50}catch(e){}window.addEventListener("error",j),window.addEventListener("unhandledrejection",E)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6043:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{createUnhandledError:function(){return o},getUnhandledErrorType:function(){return i},isUnhandledConsoleOrRejection:function(){return a}});let r=Symbol.for("next.console.error.digest"),n=Symbol.for("next.console.error.type");function o(e,t){let o="string"==typeof e?Object.defineProperty(Error(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0}):e;return o[r]="NEXT_UNHANDLED_ERROR",o[n]="string"==typeof e?"string":"error",t&&!o.environmentName&&(o.environmentName=t),o}let a=e=>e&&"NEXT_UNHANDLED_ERROR"===e[r],i=e=>e[n];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6614:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ErrorBoundary:function(){return h},ErrorBoundaryHandler:function(){return d},GlobalError:function(){return c},default:function(){return p}});let n=r(8229),o=r(5155),a=n._(r(2115)),i=r(9921),l=r(2858);r(8836);let u=void 0,s={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},text:{fontSize:"14px",fontWeight:400,lineHeight:"28px",margin:"0 8px"}};function f(e){let{error:t}=e;if(u){let e=u.getStore();if((null==e?void 0:e.isRevalidate)||(null==e?void 0:e.isStaticGeneration))throw console.error(t),t}return null}class d extends a.default.Component{static getDerivedStateFromError(e){if((0,l.isNextRouterError)(e))throw e;return{error:e}}static getDerivedStateFromProps(e,t){let{error:r}=t;return e.pathname!==t.previousPathname&&t.error?{error:null,previousPathname:e.pathname}:{error:t.error,previousPathname:e.pathname}}render(){return this.state.error?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f,{error:this.state.error}),this.props.errorStyles,this.props.errorScripts,(0,o.jsx)(this.props.errorComponent,{error:this.state.error,reset:this.reset})]}):this.props.children}constructor(e){super(e),this.reset=()=>{this.setState({error:null})},this.state={error:null,previousPathname:this.props.pathname}}}function c(e){let{error:t}=e,r=null==t?void 0:t.digest;return(0,o.jsxs)("html",{id:"__next_error__",children:[(0,o.jsx)("head",{}),(0,o.jsxs)("body",{children:[(0,o.jsx)(f,{error:t}),(0,o.jsx)("div",{style:s.error,children:(0,o.jsxs)("div",{children:[(0,o.jsxs)("h2",{style:s.text,children:["Application error: a ",r?"server":"client","-side exception has occurred while loading ",window.location.hostname," (see the"," ",r?"server logs":"browser console"," for more information)."]}),r?(0,o.jsx)("p",{style:s.text,children:"Digest: "+r}):null]})})]})]})}let p=c;function h(e){let{errorComponent:t,errorStyles:r,errorScripts:n,children:a}=e,l=(0,i.useUntrackedPathname)();return t?(0,o.jsx)(d,{pathname:l,errorComponent:t,errorStyles:r,errorScripts:n,children:a}):(0,o.jsx)(o.Fragment,{children:a})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9771:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getHydrationWarningType:function(){return l},getReactHydrationDiffSegments:function(){return f},hydrationErrorState:function(){return o},storeHydrationErrorStateFromConsoleArgs:function(){return d}});let n=r(6465),o={},a=new Set(["Warning: In HTML, %s cannot be a child of <%s>.%s\nThis will cause a hydration error.%s","Warning: In HTML, %s cannot be a descendant of <%s>.\nThis will cause a hydration error.%s","Warning: In HTML, text nodes cannot be a child of <%s>.\nThis will cause a hydration error.","Warning: In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.\nThis will cause a hydration error.","Warning: Expected server HTML to contain a matching <%s> in <%s>.%s","Warning: Did not expect server HTML to contain a <%s> in <%s>.%s"]),i=new Set(['Warning: Expected server HTML to contain a matching text node for "%s" in <%s>.%s','Warning: Did not expect server HTML to contain the text node "%s" in <%s>.%s']),l=e=>{if("string"!=typeof e)return"text";let t=e.startsWith("Warning: ")?e:"Warning: "+e;return u(t)?"tag":s(t)?"text-in-tag":"text"},u=e=>a.has(e),s=e=>i.has(e),f=e=>{if(e){let{message:t,diff:r}=(0,n.getHydrationErrorStackInfo)(e);if(t)return[t,r]}};function d(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let[a,i,u,...s]=t;if((0,n.testReactHydrationWarning)(a)){let e=a.startsWith("Warning: ");3===t.length&&(u="");let r=[a,i,u],n=(s[s.length-1]||"").trim();e?o.reactOutputComponentDiff=function(e,t,r,n){let o=-1,a=-1,i=l(e),u=n.split("\n").map((e,n)=>{e=e.trim();let[,i,l]=/at (\w+)( \((.*)\))?/.exec(e)||[];return l||(i===t&&-1===o?o=n:i!==r||-1!==a||(a=n)),l?"":i}).filter(Boolean).reverse(),s="";for(let e=0;e<u.length;e++){let t=u[e],r="tag"===i&&e===u.length-o-1,n="tag"===i&&e===u.length-a-1;r||n?s+="> "+" ".repeat(Math.max(2*e-2,0)+2)+"<"+t+">\n":s+=" ".repeat(2*e+2)+"<"+t+">\n"}if("text"===i){let e=" ".repeat(2*u.length);s+="+ "+e+'"'+t+'"\n'+("- "+e+'"'+r)+'"\n'}else if("text-in-tag"===i){let e=" ".repeat(2*u.length);s+="> "+e+"<"+r+">\n"+(">   "+e+'"'+t)+'"\n'}return s}(a,i,u,n):o.reactOutputComponentDiff=n,o.warning=r,o.serverContent=i,o.clientContent=u}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}}]);