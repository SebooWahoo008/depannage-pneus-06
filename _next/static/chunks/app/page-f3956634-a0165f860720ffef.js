(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3665],{2838:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,9243,23)),Promise.resolve().then(s.bind(s,5544)),Promise.resolve().then(s.bind(s,6821)),Promise.resolve().then(s.bind(s,5720)),Promise.resolve().then(s.bind(s,5494)),Promise.resolve().then(s.bind(s,7099)),Promise.resolve().then(s.bind(s,2427)),Promise.resolve().then(s.bind(s,1516))},4331:(e,t,s)=>{"use strict";function r(e,t){-1===e.indexOf(t)&&e.push(t)}function a(e,t){let s=e.indexOf(t);s>-1&&e.splice(s,1)}s.d(t,{W9:()=>o,vY:()=>x,Kq:()=>r,V1:()=>l,ph:()=>n,Xu:()=>g,lQ:()=>i,qB:()=>d,Ai:()=>a,fD:()=>h,fj:()=>m,$e:()=>c});let i=e=>e,c=i,l=i,o={skipAnimations:!1,useManualTiming:!1};function n(e){let t;return()=>(void 0===t&&(t=e()),t)}let d=(e,t,s)=>{let r=t-e;return 0===r?1:(s-e)/r};class x{constructor(){this.subscriptions=[]}add(e){return r(this.subscriptions,e),()=>a(this.subscriptions,e)}notify(e,t,s){let r=this.subscriptions.length;if(r){if(1===r)this.subscriptions[0](e,t,s);else for(let a=0;a<r;a++){let r=this.subscriptions[a];r&&r(e,t,s)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}let h=e=>1e3*e,g=e=>e/1e3;function m(e,t){return t?1e3/t*e:0}},5544:(e,t,s)=>{"use strict";s.d(t,{default:()=>o});var r=s(5155),a=s(2115),i=s(7997),c=s(7686),l=s(808);let o=()=>{let[e,t]=(0,a.useState)(!1),{t:s}=(0,i.Bd)();return(0,a.useEffect)(()=>{let e=()=>{let e=localStorage.getItem("darkMode");null!==e&&t("true"===e)};e();let s=t=>{"darkMode"===t.key&&e()};return window.addEventListener("storage",s),()=>{window.removeEventListener("storage",s)}},[]),(0,r.jsx)("section",{id:"contact",className:"py-16 w-full ".concat(e?"bg-gray-900":"bg-gray-100"),children:(0,r.jsxs)(l.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},className:"container mx-auto px-4",children:[(0,r.jsxs)("div",{className:"text-center mb-12",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold mb-4 ".concat(e?"text-white":"text-gray-800"),children:s("contact.title")}),(0,r.jsx)("p",{className:"max-w-2xl mx-auto ".concat(e?"text-gray-300":"text-gray-600"),children:s("contact.subtitle")})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,r.jsxs)("div",{className:"md:col-span-1 space-y-4",children:[(0,r.jsxs)("div",{className:"flex items-start p-6 rounded-xl ".concat(e?"bg-gray-800/50 border border-gray-700":"bg-white shadow-md"),children:[(0,r.jsx)("div",{className:"flex items-center justify-center p-3 rounded-full mr-4 ".concat(e?"bg-blue-600/10 text-blue-500":"bg-green-600/10 text-green-500"),children:(0,r.jsx)(c.SF3,{size:24})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"text-lg font-semibold mb-1 ".concat(e?"text-white":"text-gray-800"),children:s("contact.phone")}),(0,r.jsx)("p",{className:"".concat(e?"text-gray-300":"text-gray-600"),children:"07 44 47 44 44"}),(0,r.jsx)("p",{className:"text-sm ".concat(e?"text-gray-400":"text-gray-500"),children:s("contact.available247")})]})]}),(0,r.jsxs)("div",{className:"flex items-start p-6 rounded-xl ".concat(e?"bg-gray-800/50 border border-gray-700":"bg-white shadow-md"),children:[(0,r.jsx)("div",{className:"flex items-center justify-center p-3 rounded-full mr-4 ".concat(e?"bg-blue-600/10 text-blue-500":"bg-green-600/10 text-green-500"),children:(0,r.jsx)(c._QQ,{size:24})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"text-lg font-semibold mb-1 ".concat(e?"text-white":"text-gray-800"),children:s("contact.whatsapp")}),(0,r.jsx)("p",{className:"".concat(e?"text-gray-300":"text-gray-600"),children:"07 44 47 44 44"}),(0,r.jsx)("p",{className:"text-sm ".concat(e?"text-gray-400":"text-gray-500"),children:s("contact.instantMessaging")})]})]}),(0,r.jsxs)("div",{className:"flex items-start p-6 rounded-xl ".concat(e?"bg-gray-800/50 border border-gray-700":"bg-white shadow-md"),children:[(0,r.jsx)("div",{className:"flex items-center justify-center p-3 rounded-full mr-4 ".concat(e?"bg-blue-600/10 text-blue-500":"bg-green-600/10 text-green-500"),children:(0,r.jsx)(c.ydi,{size:24})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"text-lg font-semibold mb-1 ".concat(e?"text-white":"text-gray-800"),children:s("contact.location")}),(0,r.jsx)("p",{className:"".concat(e?"text-gray-300":"text-gray-600"),children:"Nice, 06000"}),(0,r.jsx)("p",{className:"text-sm ".concat(e?"text-gray-400":"text-gray-500"),children:s("contact.mobileService")})]})]}),(0,r.jsxs)("div",{className:"flex items-start p-6 rounded-xl ".concat(e?"bg-gray-800/50 border border-gray-700":"bg-white shadow-md"),children:[(0,r.jsx)("div",{className:"flex items-center justify-center p-3 rounded-full mr-4 ".concat(e?"bg-blue-600/10 text-blue-500":"bg-green-600/10 text-green-500"),children:(0,r.jsx)(c.Y2n,{size:24})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"text-lg font-semibold mb-1 ".concat(e?"text-white":"text-gray-800"),children:s("contact.email")}),(0,r.jsx)("p",{className:"".concat(e?"text-gray-300":"text-gray-600"),children:"contact@pneus06.fr"}),(0,r.jsx)("p",{className:"text-sm ".concat(e?"text-gray-400":"text-gray-500"),children:s("contact.emailResponseTime")})]})]})]}),(0,r.jsx)("div",{className:"md:col-span-2",children:(0,r.jsxs)("div",{className:"rounded-xl overflow-hidden h-full shadow-lg ".concat(e?"border border-blue-900/50":"border border-green-600/20"),children:[(0,r.jsxs)("h3",{className:"p-4 ".concat(e?"bg-gray-800 text-white":"bg-white text-gray-800"," font-semibold flex items-center"),children:[(0,r.jsx)("span",{className:"mr-2",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ".concat(e?"text-blue-400":"text-green-600"),viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",clipRule:"evenodd"})})}),s("contact.findUs")]}),(0,r.jsx)("div",{className:"h-[450px] w-full relative",children:(0,r.jsx)("iframe",{id:"google-map-iframe",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92300.15811387892!2d7.189335529455576!3d43.70335374752064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd0106a852d31%3A0x40819a5fd979a70!2sNice!5e0!3m2!1sfr!2sfr!4v1680887579884!5m2!1sfr!2sfr&disable_ui=1",width:"100%",height:"100%",style:{border:0},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:s("contact.mapTitle"),className:"z-0"})})]})})]})]})})}},6821:(e,t,s)=>{"use strict";s.d(t,{default:()=>x});var r=s(5155),a=s(2115),i=s(9911),c=s(760),l=s(808),o=s(7997),n=s(6874),d=s.n(n);let x=()=>{let[e,t]=(0,a.useState)(!1),[s,n]=(0,a.useState)(null),{t:x}=(0,o.Bd)();(0,a.useEffect)(()=>{let e=()=>{let e=localStorage.getItem("darkMode");null!==e&&t("true"===e)};e();let s=t=>{"darkMode"===t.key&&e()};return window.addEventListener("storage",s),()=>{window.removeEventListener("storage",s)}},[]),(0,a.useEffect)(()=>{if(s){let e=setTimeout(()=>{n(null)},1500);return()=>clearTimeout(e)}},[s]);let h=new Date().getFullYear();return(0,r.jsxs)("footer",{className:"pt-16 relative ".concat(e?"bg-gray-900":"bg-gray-100"),children:[(0,r.jsxs)("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[(0,r.jsx)("div",{className:"absolute top-0 -left-40 w-96 h-96 rounded-full filter blur-[150px] ".concat(e?"bg-blue-700/20":"bg-green-700/20")}),(0,r.jsx)("div",{className:"absolute bottom-0 right-0 w-80 h-80 rounded-full filter blur-[100px] ".concat(e?"bg-indigo-700/20":"bg-emerald-700/20")})]}),(0,r.jsxs)("div",{className:"container mx-auto px-4 z-10 relative",children:[(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-lg font-bold mb-4 ".concat(e?"text-white":"text-gray-800"),children:x("footer.about")}),(0,r.jsx)("p",{className:"mb-4 ".concat(e?"text-gray-300":"text-gray-600"),children:x("footer.aboutDescription")}),(0,r.jsxs)("div",{className:"flex space-x-4",children:[(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("a",{href:"#",onClick:e=>{e.preventDefault(),n("facebook")},className:"transition-colors duration-300 ".concat(e?"text-gray-400 hover:text-white":"text-gray-600 hover:text-black"),children:(0,r.jsx)(i.iYk,{size:20})}),(0,r.jsx)(c.N,{children:"facebook"===s&&(0,r.jsx)(l.P.div,{className:"absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 px-3 py-1.5 rounded-lg text-xs text-white whitespace-nowrap shadow-lg z-10 border border-white/20 backdrop-blur-md",initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:5},children:"En construction"})})]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("a",{href:"#",onClick:e=>{e.preventDefault(),n("instagram")},className:"transition-colors duration-300 ".concat(e?"text-gray-400 hover:text-white":"text-gray-600 hover:text-black"),children:(0,r.jsx)(i.ao$,{size:20})}),(0,r.jsx)(c.N,{children:"instagram"===s&&(0,r.jsx)(l.P.div,{className:"absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 px-3 py-1.5 rounded-lg text-xs text-white whitespace-nowrap shadow-lg z-10 border border-white/20 backdrop-blur-md",initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:5},children:"En construction"})})]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("a",{href:"#",onClick:e=>{e.preventDefault(),n("twitter")},className:"transition-colors duration-300 ".concat(e?"text-gray-400 hover:text-white":"text-gray-600 hover:text-black"),children:(0,r.jsx)(i.feZ,{size:20})}),(0,r.jsx)(c.N,{children:"twitter"===s&&(0,r.jsx)(l.P.div,{className:"absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 px-3 py-1.5 rounded-lg text-xs text-white whitespace-nowrap shadow-lg z-10 border border-white/20 backdrop-blur-md",initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:5},children:"En construction"})})]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("a",{href:"#",onClick:e=>{e.preventDefault(),n("linkedin")},className:"transition-colors duration-300 ".concat(e?"text-gray-400 hover:text-white":"text-gray-600 hover:text-black"),children:(0,r.jsx)(i.QEs,{size:20})}),(0,r.jsx)(c.N,{children:"linkedin"===s&&(0,r.jsx)(l.P.div,{className:"absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 px-3 py-1.5 rounded-lg text-xs text-white whitespace-nowrap shadow-lg z-10 border border-white/20 backdrop-blur-md",initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:5},children:"En construction"})})]})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-lg font-bold mb-4 ".concat(e?"text-white":"text-gray-800"),children:x("footer.quickLinks")}),(0,r.jsxs)("ul",{className:"space-y-2",children:[(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/",className:"transition-colors duration-300 ".concat(e?"text-gray-400 hover:text-white":"text-gray-600 hover:text-black"),children:x("navbar.home")})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/nos-pneus",className:"transition-colors duration-300 ".concat(e?"text-gray-400 hover:text-white":"text-gray-600 hover:text-black"),children:x("footer.ourProducts")})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/services-et-dimensions",className:"transition-colors duration-300 ".concat(e?"text-gray-400 hover:text-white":"text-gray-600 hover:text-black"),children:x("footer.availableDimensions")})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/contact",className:"transition-colors duration-300 ".concat(e?"text-gray-400 hover:text-white":"text-gray-600 hover:text-black"),children:x("footer.contact")})})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-lg font-bold mb-4 ".concat(e?"text-white":"text-gray-800"),children:x("footer.ourServices")}),(0,r.jsxs)("ul",{className:"space-y-2",children:[(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/nos-pneus",className:"transition-colors duration-300 ".concat(e?"text-gray-400 hover:text-white":"text-gray-600 hover:text-black"),children:x("footer.tireSales")})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/services-et-dimensions",className:"transition-colors duration-300 ".concat(e?"text-gray-400 hover:text-white":"text-gray-600 hover:text-black"),children:x("footer.homeMounting")})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/services-et-dimensions",className:"transition-colors duration-300 ".concat(e?"text-gray-400 hover:text-white":"text-gray-600 hover:text-black"),children:x("footer.repair")})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/services-et-dimensions",className:"transition-colors duration-300 ".concat(e?"text-gray-400 hover:text-white":"text-gray-600 hover:text-black"),children:x("footer.balancing")})})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-lg font-bold mb-4 ".concat(e?"text-white":"text-gray-800"),children:x("footer.contact")}),(0,r.jsxs)("ul",{className:"space-y-2",children:[(0,r.jsx)("li",{className:"".concat(e?"text-gray-400":"text-gray-600"),children:"Nice, 06000"}),(0,r.jsxs)("li",{className:"".concat(e?"text-gray-400":"text-gray-600"),children:[x("contact.phone"),": 07 44 47 44 44"]}),(0,r.jsx)("li",{className:"".concat(e?"text-gray-400":"text-gray-600"),children:x("footer.serviceAvailable")}),(0,r.jsx)("li",{className:"".concat(e?"text-gray-400":"text-gray-600"),children:x("footer.mobileService")})]})]})]}),(0,r.jsx)("div",{className:"flex justify-center pb-8",children:(0,r.jsx)(l.P.button,{className:"p-3 rounded-full shadow-lg transition-colors ".concat(e?"bg-gray-800 text-white hover:bg-gray-700":"bg-white text-gray-800 hover:bg-gray-100"),onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},whileHover:{scale:1.1},whileTap:{scale:.9},"aria-label":x("footer.scrollToTop"),children:(0,r.jsx)(i.Ucs,{size:20})})}),(0,r.jsx)("div",{className:"py-6 border-t ".concat(e?"border-gray-800 text-gray-400":"border-gray-200 text-gray-600"," text-center"),children:(0,r.jsxs)("p",{children:["\xa9 ",h," ",x("footer.copyright")]})})]})]})}}}]);