"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1],{7099:(e,t,s)=>{s.d(t,{default:()=>p});var a=s(5155),i=s(2115),n=s(9911),r=s(808),o=s(760),l=s(6766),c=s(7997),d=s(3554),u=s(9277);let p=()=>{let[e,t]=(0,i.useState)("presentation"),[s,p]=(0,i.useState)("tous"),[g,m]=(0,i.useState)(1),[x]=(0,i.useState)(3),[h,b]=(0,i.useState)(!1),[y,v]=(0,i.useState)(0),[f,j]=(0,i.useState)(!1),[w,N]=(0,i.useState)(null),{t:D}=(0,c.Bd)();(0,i.useEffect)(()=>{let e=()=>{let e=localStorage.getItem("darkMode");null!==e&&j("true"===e)};e();let t=t=>{"darkMode"===t.key&&e()};return window.addEventListener("storage",t),()=>{window.removeEventListener("storage",t)}},[]);let S=[{id:"presentation",name:D("pneusDetails.tabs.presentation","Pr\xe9sentation")},{id:"produits",name:D("pneusDetails.tabs.products","Notre S\xe9lection")},{id:"dimensions",name:D("pneusDetails.tabs.dimensions","Dimensions")},{id:"services",name:D("pneusDetails.tabs.services","Services")}],P=[{id:"tous",name:D("pneusDetails.categories.all","Tous")},{id:"ete",name:D("pneusDetails.categories.summer","Pneus \xc9t\xe9")},{id:"hiver",name:D("pneusDetails.categories.winter","Pneus Hiver")},{id:"4saisons",name:D("pneusDetails.categories.allSeason","Pneus 4 Saisons")},{id:"suv",name:D("pneusDetails.categories.suv","SUV/4x4")}],k=[{id:1,name:D("pneusDetails.products.michelin.name","Michelin Primacy 4"),category:"ete",image:(0,u.O)("/images/tires.png"),description:D("pneusDetails.products.michelin.description","Excellence en tenue de route et long\xe9vit\xe9. Performance optimale sur sol sec et mouill\xe9.")},{id:2,name:D("pneusDetails.products.bridgestone.name","Bridgestone Blizzak LM005"),category:"hiver",image:(0,u.O)("/images/tires.png"),description:D("pneusDetails.products.bridgestone.description","Adh\xe9rence exceptionnelle sur neige et glace. Confort et s\xe9curit\xe9 en conditions hivernales.")},{id:3,name:D("pneusDetails.products.continental.name","Continental AllSeasonContact"),category:"4saisons",image:(0,u.O)("/images/tires.png"),description:D("pneusDetails.products.continental.description","Performance \xe9quilibr\xe9e toute l'ann\xe9e. Id\xe9al pour les climats temp\xe9r\xe9s et variables.")},{id:4,name:D("pneusDetails.products.pirelli.name","Pirelli Scorpion Verde"),category:"suv",image:(0,u.O)("/images/tires.png"),description:D("pneusDetails.products.pirelli.description","Sp\xe9cialement con\xe7u pour les SUV et 4x4. Alliant performance et respect de l'environnement.")},{id:5,name:D("pneusDetails.products.goodyear.name","Goodyear Vector 4Seasons Gen-3"),category:"4saisons",image:(0,u.O)("/images/tires.png"),description:D("pneusDetails.products.goodyear.description","Technologie innovante pour toutes les saisons. Performance constante toute l'ann\xe9e.")},{id:6,name:D("pneusDetails.products.hankook.name","Hankook Ventus Prime3"),category:"ete",image:(0,u.O)("/images/tires.png"),description:D("pneusDetails.products.hankook.description","Excellent rapport qualit\xe9-prix. Confort de conduite et faible niveau sonore.")}],C=[{category:D("pneusDetails.tireSizes.passenger.title","V\xe9hicules particuliers"),sizes:["195/65 R15","205/55 R16","225/45 R17","225/40 R18","235/35 R19"]},{category:D("pneusDetails.tireSizes.suv.title","SUV et 4x4"),sizes:["215/65 R16","225/65 R17","235/60 R18","255/55 R19","275/45 R20"]},{category:D("pneusDetails.tireSizes.commercial.title","Utilitaires"),sizes:["195/70 R15C","215/65 R16C","225/65 R16C","235/65 R16C"]}],z="tous"===s?k:k.filter(e=>e.category===s),q=g*x,R=z.slice(q-x,q),V=Math.ceil(z.length/x),O=e=>{b(!0),v(e>g?1:-1),setTimeout(()=>{m(e),b(!1)},300)},U=e=>{e!==s&&(b(!0),setTimeout(()=>{p(e),m(1),b(!1)},300))},E={hidden:{opacity:0,y:50},visible:e=>({opacity:1,y:0,transition:{delay:.1*e,duration:.5,type:"spring",stiffness:100}}),hover:{scale:1.05,boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",transition:{type:"spring",stiffness:300,damping:20}},tap:{scale:.98}},A=[{id:1,title:D("pneusDetails.services.mounting.title","Montage & \xc9quilibrage"),description:D("pneusDetails.services.mounting.description","Notre \xe9quipe proc\xe8de au montage et \xe0 l'\xe9quilibrage pr\xe9cis de vos pneus, garantissant confort de conduite et s\xe9curit\xe9 optimale."),icon:(0,a.jsx)(n.xdT,{className:"w-8 h-8 text-red-500"})},{id:2,title:D("pneusDetails.services.alignment.title","Parall\xe9lisme"),description:D("pneusDetails.services.alignment.description","Un r\xe9glage pr\xe9cis de la g\xe9om\xe9trie de vos roues pour une tenue de route parfaite et une usure homog\xe8ne de vos pneumatiques."),icon:(0,a.jsx)(n.Ph,{className:"w-8 h-8 text-red-500"})},{id:3,title:D("pneusDetails.services.mobile.title","Service Mobile"),description:D("pneusDetails.services.mobile.description","Notre \xe9quipe se d\xe9place chez vous ou sur votre lieu de travail pour changer vos pneus avec notre atelier mobile enti\xe8rement \xe9quip\xe9."),icon:(0,a.jsx)(n.dv1,{className:"w-8 h-8 text-red-500"})},{id:4,title:D("pneusDetails.services.emergency.title","Assistance 24/7"),description:D("pneusDetails.services.emergency.description","Un pneu crev\xe9 en pleine nuit ? Notre service d'urgence est disponible 24h/24 et 7j/7 pour vous d\xe9panner rapidement."),icon:(0,a.jsx)(n.w_X,{className:"w-8 h-8 text-red-500"})}],M=e=>{N(e)},T=()=>{N(null)},_=e=>{switch(e){case"ete":return D("pneusDetails.categories.summer","Pneus \xc9t\xe9");case"hiver":return D("pneusDetails.categories.winter","Pneus Hiver");case"4saisons":return D("pneusDetails.categories.allSeason","Pneus 4 Saisons");case"suv":return D("pneusDetails.categories.suv","SUV/4x4");default:return e}};return(0,a.jsx)("section",{id:"produits",className:"px-4 py-16 md:py-24 ".concat(f?"bg-[#0a192f] text-white":"bg-emerald-50/30 text-gray-900"),children:(0,a.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,a.jsx)(o.N,{children:w&&(0,a.jsx)(()=>{if(!w)return null;let e={"@context":"https://schema.org","@type":"Product",name:w.name,image:w.image,description:w.description,category:_(w.category),brand:{"@type":"Brand",name:w.name.split(" ")[0]},offers:{"@type":"Offer",availability:"https://schema.org/InStock",price:"Sur devis",priceCurrency:"EUR"}};return(0,a.jsxs)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:T}),(0,a.jsxs)("div",{className:"relative w-full max-w-lg rounded-xl shadow-2xl ".concat(f?"bg-gray-800":"bg-white"," overflow-hidden"),children:[(0,a.jsx)(d.default,{id:"product-schema-".concat(w.id),type:"application/ld+json",children:JSON.stringify(e)}),(0,a.jsx)("div",{className:"aspect-video w-full relative",children:(0,a.jsx)(l.default,{src:w.image,alt:"Pneu ".concat(w.name," - ").concat(D("pneusDetails.categories.".concat(w.category),w.category)),fill:!0,className:"object-cover",sizes:"(max-width: 768px) 100vw, 500px",priority:!0})}),(0,a.jsxs)("div",{className:"p-6",children:[(0,a.jsx)("h3",{className:"text-xl font-bold ".concat(f?"text-white":"text-gray-800"),children:w.name}),(0,a.jsx)("span",{className:"inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ".concat(f?"bg-blue-900/30 text-blue-300":"bg-green-100 text-green-800"),children:_(w.category)}),(0,a.jsx)("p",{className:"mt-4 ".concat(f?"text-gray-300":"text-gray-600"),children:w.description}),(0,a.jsxs)("div",{className:"mt-5 flex justify-end space-x-3",children:[(0,a.jsx)("button",{onClick:T,className:"px-4 py-2 rounded-lg ".concat(f?"bg-gray-700 text-gray-300 hover:bg-gray-600":"bg-gray-200 text-gray-800 hover:bg-gray-300"),children:D("pneusDetails.products.close")}),(0,a.jsx)("a",{href:"tel:0744474444",className:"px-4 py-2 rounded-lg ".concat(f?"bg-blue-600 text-white hover:bg-blue-700":"bg-green-600 text-white hover:bg-green-700"),children:D("pneusDetails.products.contact")})]})]})]})]})},{})}),(0,a.jsxs)("div",{className:"mb-12 text-center",children:[(0,a.jsx)("h2",{className:"text-3xl md:text-4xl font-bold ".concat(f?"text-white":"text-gray-900"," mb-4"),children:D("pneusDetails.title","Nos Pneus et Services")}),(0,a.jsx)("p",{className:"text-lg ".concat(f?"text-gray-300 bg-blue-900/70 border-blue-700/30":"text-gray-700 bg-green-50/90 border-green-200/50"," max-w-3xl mx-auto p-4 rounded-lg backdrop-blur-sm shadow-lg border mb-8"),children:D("pneusDetails.description","Chez D\xe9pannage Pneus 06, nous proposons une large gamme de pneumatiques pour tous types de v\xe9hicules, des voitures particuli\xe8res aux utilitaires. Nous s\xe9lectionnons avec soin chaque pneu pour vous offrir un excellent rapport qualit\xe9-prix.")})]}),(0,a.jsx)("div",{className:"mb-8 overflow-x-auto no-scrollbar",children:(0,a.jsx)("div",{className:"flex space-x-2 md:space-x-4 min-w-max md:justify-center pb-2",children:S.map(s=>(0,a.jsx)("button",{"data-tab":s.id,onClick:()=>t(s.id),className:"px-3 sm:px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300 ".concat(e===s.id?f?"bg-blue-600 text-white shadow-md":"bg-green-600 text-white shadow-md":f?"bg-white/80 text-gray-700 hover:bg-white hover:text-blue-600":"bg-white/80 text-gray-700 hover:bg-white hover:text-green-600"),children:s.name},s.id))})}),(0,a.jsx)("div",{className:"py-6 min-h-[400px]",children:(0,a.jsx)("div",{className:"container mx-auto px-4",children:(0,a.jsxs)(o.N,{mode:"wait",children:["presentation"===e&&(0,a.jsxs)(r.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"grid md:grid-cols-2 gap-8 items-center",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-2xl md:text-3xl font-bold mb-4 ".concat(f?"text-white":"text-gray-800"),children:D("pneusDetails.presentation.title","Sp\xe9cialiste en pneumatiques depuis 15 ans")}),(0,a.jsxs)("div",{className:"space-y-4 text-base md:text-lg ".concat(f?"text-gray-300":"text-gray-600"),children:[(0,a.jsx)("p",{children:D("pneusDetails.presentation.paragraph1","Chez D\xe9pannage Pneus 06, nous sommes passion\xe9s par votre s\xe9curit\xe9 sur la route. Notre \xe9quipe de professionnels qualifi\xe9s s'engage \xe0 vous fournir les meilleurs services de pneumatiques dans la r\xe9gion.")}),(0,a.jsx)("p",{children:D("pneusDetails.presentation.paragraph2","Que vous ayez besoin de pneus \xe9t\xe9, hiver ou toutes saisons, nous avons ce qu'il vous faut. Notre expertise s'\xe9tend des v\xe9hicules particuliers aux utilitaires, en passant par les SUV et 4x4.")}),(0,a.jsx)("p",{children:D("pneusDetails.presentation.paragraph3","Nous travaillons avec les plus grandes marques du march\xe9 pour vous offrir un large choix de pneus adapt\xe9s \xe0 tous les budgets et \xe0 tous les besoins.")})]}),(0,a.jsxs)("div",{className:"mt-6 flex flex-col sm:flex-row items-center gap-4",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 p-3 rounded-lg ".concat(f?"bg-emerald-900/30 text-emerald-400":"bg-emerald-100 text-emerald-700"),children:[(0,a.jsx)(n.gt3,{className:"text-yellow-500"}),(0,a.jsx)("span",{className:"font-medium",children:D("pneusDetails.presentation.rating","4.9/5 - 500+ avis clients")})]}),(0,a.jsxs)("a",{href:"tel:+33612345678",className:"flex items-center gap-2 p-3 rounded-lg ".concat(f?"bg-blue-900/30 text-blue-400":"bg-blue-100 text-blue-700"),children:[(0,a.jsx)(n.Cab,{}),(0,a.jsx)("span",{className:"font-medium",children:D("pneusDetails.presentation.phoneAction","Contactez-nous")})]})]})]}),(0,a.jsx)("div",{className:"relative h-80 w-full overflow-hidden rounded-lg shadow-lg",children:(0,a.jsx)(l.default,{src:(0,u.O)("/images/optimized/punctured-car-tire-1.webp"),alt:D("pneusDetails.presentation.imageAlt","Atelier de pneumatiques D\xe9pannage Pneus 06"),fill:!0,sizes:"(max-width: 768px) 100vw, 50vw",className:"object-cover"})})]}),"services"===e&&(0,a.jsxs)(r.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"py-6",children:[(0,a.jsx)("h3",{className:"text-2xl md:text-3xl font-bold mb-8 text-center ".concat(f?"text-white":"text-gray-800"),children:D("pneusDetails.servicesSection.title","Nos Services Professionnels")}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:A.map(e=>(0,a.jsx)("div",{className:"p-6 rounded-lg shadow-md ".concat(f?"bg-gray-800 hover:bg-gray-700":"bg-white hover:bg-gray-50"," transition-colors duration-300"),children:(0,a.jsxs)("div",{className:"flex items-start",children:[(0,a.jsx)("div",{className:"mr-4",children:(0,a.jsx)("div",{className:"w-16 h-16 rounded-full bg-red-100 flex items-center justify-center",children:e.icon})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"text-xl font-semibold mb-2 ".concat(f?"text-white":"text-gray-800"),children:e.title}),(0,a.jsx)("p",{className:"".concat(f?"text-gray-300":"text-gray-600"),children:e.description})]})]})},e.id))})]}),"produits"===e&&(0,a.jsxs)(r.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},children:[(0,a.jsx)("div",{className:"mb-8 overflow-x-auto no-scrollbar",children:(0,a.jsx)("div",{className:"flex space-x-2 min-w-max md:justify-center pb-2",children:P.map(e=>(0,a.jsx)("button",{onClick:()=>U(e.id),className:"px-3 sm:px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300 ".concat(s===e.id?f?"bg-blue-600 text-white shadow-md":"bg-green-600 text-white shadow-md":"bg-white text-gray-700 hover:bg-gray-100"),children:e.name},e.id))})}),(0,a.jsxs)("div",{className:"relative",children:[h?(0,a.jsx)("div",{className:"flex justify-center items-center h-96",children:(0,a.jsx)(n.hW,{className:"animate-spin text-green-600 h-12 w-12"})}):(0,a.jsx)(o.N,{mode:"wait",custom:y,children:(0,a.jsx)(r.P.div,{custom:y,initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:e=>({x:e>0?300:-300,opacity:0}),visible:{x:0,opacity:1,transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}}},exit:e=>({x:e>0?-300:300,opacity:0,transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}}})},className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",children:R.map((e,t)=>(0,a.jsx)(r.P.div,{custom:t,variants:E,whileHover:"hover",whileTap:"tap",className:"rounded-xl shadow-md overflow-hidden group border ".concat(f?"bg-gray-800 border-blue-900/60":"bg-white border-green-600/30"),style:{transition:"border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",boxShadow:f?"0 8px 25px rgba(0, 0, 0, 0.5)":"0 8px 25px rgba(0, 100, 0, 0.15)"},children:(0,a.jsxs)("div",{className:"flex flex-col h-full",children:[(0,a.jsxs)("div",{className:"relative flex-shrink-0",children:[(0,a.jsx)("div",{className:"absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-semibold ".concat(f?"bg-blue-900/80 text-blue-200":"bg-green-600/90 text-white"),children:_(e.category)}),(0,a.jsxs)("div",{className:"relative h-48 w-full overflow-hidden",children:[(0,a.jsx)("div",{className:"absolute inset-0 ".concat(f?"bg-gradient-to-b from-blue-900/10 to-gray-900/80":"bg-gradient-to-b from-green-50/10 to-green-100/20")}),(0,a.jsx)(l.default,{src:e.image,alt:"Pneu ".concat(e.name," - ").concat(D("pneusDetails.categories.".concat(e.category),e.category)),fill:!0,className:"object-contain",sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",priority:t<3})]})]}),(0,a.jsxs)("div",{className:"p-5 flex-grow flex flex-col ".concat(f?"bg-gray-800":"bg-white"),children:[(0,a.jsx)("h3",{className:"text-lg font-bold mb-2 ".concat(f?"text-white":"text-gray-800"),children:e.name}),(0,a.jsx)("p",{className:"text-sm mb-4 flex-grow ".concat(f?"text-gray-300":"text-gray-600"),children:e.description}),(0,a.jsx)("div",{className:"mt-auto pt-2",children:(0,a.jsx)("div",{className:"flex flex-col gap-2",children:(0,a.jsx)("button",{className:"w-full py-3 rounded-md text-base font-medium transition-colors duration-300 ".concat(f?"bg-blue-600 hover:bg-blue-700 text-white shadow-md":"bg-green-600 hover:bg-green-700 text-white shadow-md"),onClick:()=>M(e),children:D("pneusDetails.product.viewDetails","Voir d\xe9tails")})})})]})]})},e.id))},"page-".concat(g,"-").concat(s))}),V>1&&(0,a.jsxs)("div",{className:"flex justify-center mt-8",children:[(0,a.jsx)("button",{onClick:()=>O(g-1),disabled:1===g||h,className:"px-4 py-2 rounded-l-md ".concat(f?"bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 disabled:bg-gray-900 disabled:text-gray-600":"bg-white text-gray-700 border-gray-300 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400"," border transition-colors disabled:cursor-not-allowed"),children:D("pneusDetails.pagination.previous","Pr\xe9c\xe9dent")}),(0,a.jsxs)("div",{className:"px-4 py-2 ".concat(f?"bg-gray-800 text-gray-300 border-gray-700":"bg-white text-gray-700 border-gray-300"," border-t border-b flex items-center"),children:[D("pneusDetails.pagination.page","Page")," ",g," ",D("pneusDetails.pagination.of","sur")," ",V]}),(0,a.jsx)("button",{onClick:()=>O(g+1),disabled:g===V||h,className:"px-4 py-2 rounded-r-md ".concat(f?"bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 disabled:bg-gray-900 disabled:text-gray-600":"bg-white text-gray-700 border-gray-300 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400"," border transition-colors disabled:cursor-not-allowed"),children:h?D("pneusDetails.product.loading","Chargement..."):D("pneusDetails.pagination.next","Suivant")})]})]})]}),"dimensions"===e&&(0,a.jsxs)(r.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 md:p-8",children:[(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("h3",{className:"text-xl md:text-2xl font-bold mb-4 ".concat(f?"text-white":"text-gray-900"),children:D("pneusDetails.dimensions.title","Dimensions Disponibles")}),(0,a.jsx)("p",{className:"".concat(f?"text-gray-300":"text-gray-700"),children:D("pneusDetails.dimensions.description","Nous disposons d'un large stock de pneus dans toutes les dimensions standards. Si vous ne trouvez pas votre taille, n'h\xe9sitez pas \xe0 nous contacter pour une commande sp\xe9ciale.")})]}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:C.map((e,t)=>(0,a.jsxs)(r.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{delay:.1*t}},className:"rounded-lg p-4 shadow-sm ".concat(f?"bg-gray-700":"bg-gray-50"),children:[(0,a.jsx)("h4",{className:"font-semibold mb-3 pb-2 border-b ".concat(f?"text-white border-gray-600":"text-gray-900 border-gray-200"),children:D("pneusDetails.dimensions.categories.".concat(e.category),e.category)}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2",children:e.sizes.map(e=>(0,a.jsx)("span",{className:"inline-block px-2 py-1 text-sm rounded border transition-colors duration-200 ".concat(f?"bg-gray-800 text-gray-300 border-gray-600 hover:border-blue-500":"bg-white text-gray-700 border-gray-200 hover:border-green-300"),children:e},e))})]},e.category))}),(0,a.jsx)("div",{className:"mt-8 text-center",children:(0,a.jsx)("a",{href:"tel:0744474444",className:"inline-block",children:(0,a.jsxs)("button",{className:"".concat(f?"bg-blue-600 hover:bg-blue-700":"bg-green-600 hover:bg-green-700"," text-white font-medium py-4 px-6 rounded-lg text-base flex items-center justify-center shadow-lg"),children:[(0,a.jsx)(n.Cab,{className:"text-white mr-2"}),D("pneusDetails.dimensions.emergencyService","Service d'urgence : 07 44 47 44 44")]})})})]})]})})})]})})}}}]);