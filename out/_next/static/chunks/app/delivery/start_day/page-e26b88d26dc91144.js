(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90],{753:function(e,t,r){Promise.resolve().then(r.bind(r,8171))},8171:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var s=r(7437),n=r(2265),i=r(9222),o=r(1396),a=r.n(o),l=r(171),c=e=>{let{address:t,status:r,itemId:n}=e;return(0,s.jsxs)("div",{className:"flex mx-5 py-3 border-[#3D1DF3] border-[1.5px] rounded-2xl items-center my-3",children:[(0,s.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M33.3125 17.3333C33.2631 15.5852 33.0969 14.4707 32.5368 13.5196C31.7403 12.1669 30.3059 11.4142 27.437 9.90865L24.7703 8.50925C22.4295 7.28083 21.259 6.66663 20 6.66663C18.741 6.66663 17.5706 7.28083 15.2297 8.50925L12.5631 9.90865C9.69419 11.4142 8.25975 12.1669 7.46322 13.5196C6.66669 14.8723 6.66669 16.5555 6.66669 19.922V20.0779C6.66669 23.4444 6.66669 25.1276 7.46322 26.4803C8.25975 27.833 9.69419 28.5857 12.5631 30.0913L15.2297 31.4907C17.5706 32.7191 18.741 33.3333 20 33.3333C21.259 33.3333 22.4295 32.7191 24.7703 31.4907L27.437 30.0913C30.3059 28.5857 31.7403 27.833 32.5368 26.4803C33.0969 25.5292 33.2631 24.4147 33.3125 22.6666",stroke:"#3D1DF3",strokeWidth:"1.5",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M32 14L26.6667 16.6667M20 20L8 14M20 20V32.6667M20 20C20 20 23.6569 18.1716 26 17C26.2604 16.8698 26.6667 16.6667 26.6667 16.6667M26.6667 16.6667V21.3333M26.6667 16.6667L14 10",stroke:"#3D1DF3",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,s.jsx)("svg",{width:"1",height:"70",viewBox:"0 0 1 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("line",{x1:"0.25",y1:"0",x2:"0.249998",y2:"60",stroke:"#3D1DF3",strokeWidth:"0.5",strokeDasharray:"1 1"})}),(0,s.jsxs)("div",{className:"flex flex-col items-start w-64",children:[(0,s.jsxs)("div",{className:"flex justify-between w-full ml-3 items-center",children:[(0,s.jsx)(a(),{href:"/in_progress/".concat(n),children:(0,s.jsxs)("h3",{className:"font-semibold text-sm uppercase",children:["#",n.slice(-5)]})}),(0,s.jsx)("h4",{className:"text-[12px] rounded-2xl text-center px-3 ".concat("ENTREGADO"===r?"bg-[#C7FFB1]":"bg-[#F8E169]"),children:r})]}),(0,s.jsxs)("div",{className:"flex justify-between w-full ml-3 mt-1 items-center",children:[(0,s.jsx)(a(),{href:"/in_progress/".concat(n),children:(0,s.jsxs)("p",{className:"font-light text-sm mb-1",children:[t.split(",")[0],",",(0,s.jsx)("br",{}),t.split(",")[1]]})}),"PENDIENTE"===r?(0,s.jsx)("div",{className:"flex j",children:(0,s.jsx)(a(),{href:"/in_progress/".concat(n),children:(0,s.jsx)("button",{className:"bg-[#00EA77] text-[#3D1DF3] mt-4 rounded-full py-1 w-[110px]",onClick:()=>{i.Z.put("http://localhost:4000/api/v1/delivery/updateStatus/".concat(n),{status:"EN CURSO"}).then(()=>{}).catch(e=>{console.error("Error al actualizar el estado del paquete:",e)})},children:"Iniciar"})})}):(0,s.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-3",onClick:()=>{i.Z.put("http://localhost:4000/api/v1/delivery/cancelPackage/".concat(n)).then(()=>{l.Am.success("paquete cancelado"),window.location.reload()}).catch(e=>{console.error("Error al cancelar el paquete:",e)})},children:[(0,s.jsx)("path",{d:"M8.11377 4.66671C8.38833 3.88991 9.12915 3.33337 9.99997 3.33337C10.8708 3.33337 11.6116 3.88991 11.8862 4.66671",stroke:"#FF062E",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M15.6667 6H4.33328",stroke:"#FF062E",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M14.5556 7.66663L14.2489 12.266C14.1309 14.036 14.0719 14.9209 13.4953 15.4605C12.9186 16 12.0317 16 10.2578 16H9.74223C7.96836 16 7.08142 16 6.50475 15.4605C5.92808 14.9209 5.86908 14.036 5.75109 12.266L5.44446 7.66663",stroke:"#FF062E",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M8.33334 9.33337L8.66668 12.6667",stroke:"#FF062E",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M11.6667 9.33337L11.3333 12.6667",stroke:"#FF062E",strokeLinecap:"round"})]})]})]})]})},d=e=>{let{address:t,status:r,itemId:n}=e;return(0,s.jsxs)("div",{className:"flex mx-5 py-3 border-[#3D1DF3] border-[1.5px] rounded-2xl items-center my-3",children:[(0,s.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M33.3125 17.3333C33.2631 15.5852 33.0969 14.4707 32.5368 13.5196C31.7403 12.1669 30.3059 11.4142 27.437 9.90865L24.7703 8.50925C22.4295 7.28083 21.259 6.66663 20 6.66663C18.741 6.66663 17.5706 7.28083 15.2297 8.50925L12.5631 9.90865C9.69419 11.4142 8.25975 12.1669 7.46322 13.5196C6.66669 14.8723 6.66669 16.5555 6.66669 19.922V20.0779C6.66669 23.4444 6.66669 25.1276 7.46322 26.4803C8.25975 27.833 9.69419 28.5857 12.5631 30.0913L15.2297 31.4907C17.5706 32.7191 18.741 33.3333 20 33.3333C21.259 33.3333 22.4295 32.7191 24.7703 31.4907L27.437 30.0913C30.3059 28.5857 31.7403 27.833 32.5368 26.4803C33.0969 25.5292 33.2631 24.4147 33.3125 22.6666",stroke:"#3D1DF3",strokeWidth:"1.5",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M32 14L26.6667 16.6667M20 20L8 14M20 20V32.6667M20 20C20 20 23.6569 18.1716 26 17C26.2604 16.8698 26.6667 16.6667 26.6667 16.6667M26.6667 16.6667V21.3333M26.6667 16.6667L14 10",stroke:"#3D1DF3",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,s.jsx)("svg",{width:"1",height:"70",viewBox:"0 0 1 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("line",{x1:"0.25",y1:"0",x2:"0.249998",y2:"60",stroke:"#3D1DF3",strokeWidth:"0.5",strokeDasharray:"1 1"})}),(0,s.jsxs)("div",{className:"flex flex-col items-start w-64",children:[(0,s.jsxs)("div",{className:"flex justify-between w-full ml-3 items-center",children:[(0,s.jsxs)("h3",{className:"font-semibold text-sm uppercase",children:["#",n.slice(-5)]}),(0,s.jsx)("h4",{className:"text-[12px] rounded-2xl text-center px-3 ".concat("ENTREGADO"===r?"bg-[#C7FFB1]":"bg-[#F8E169]"),children:r})]}),(0,s.jsx)("div",{className:"flex justify-between w-full ml-3 mt-1 items-center",children:(0,s.jsxs)("p",{className:"font-light text-sm mb-1",children:[t.split(",")[0],",",(0,s.jsx)("br",{}),t.split(",")[1]]})})]})]})},u=r(3198),h=r(7516),p=r.n(h),x=r(4748),m=function(e){let{addressDestination:t}=e,[r,i]=(0,n.useState)(null),[o,a]=(0,n.useState)(null),[l,c]=(0,n.useState)(null),{isLoaded:d,loadError:u}=(0,x.Db)({googleMapsApiKey:"",libraries:["places"]}),h=async(e,t)=>{if(t){let t=new window.google.maps.Geocoder;t.geocode({address:e},(e,t)=>{if("OK"===t){if(e&&e[0]&&e[0].geometry){let t=e[0].geometry.location;a({lat:t.lat(),lng:t.lng()})}else console.error("No se encontraron resultados de geocodificaci\xf3n.")}else console.error("Error al geocodificar la direcci\xf3n:",t)})}};return((0,n.useEffect)(()=>{d&&(window.navigator.geolocation.getCurrentPosition(e=>{let{latitude:t,longitude:r}=e.coords;i({lat:t,lng:r})}),h(t,d))},[d,t]),(0,n.useEffect)(()=>{if(r&&d&&o){let e=new window.google.maps.DirectionsService,t={origin:r,destination:o,travelMode:window.google.maps.TravelMode.DRIVING};e.route(t,(e,t)=>{"OK"===t?c(e):console.error("Error al calcular la ruta:",t)})}},[r,d,o]),u)?(0,s.jsx)("div",{children:"Error al cargar el mapa"}):(0,s.jsx)(s.Fragment,{children:d&&r?(0,s.jsx)(x.b6,{center:r,zoom:12,mapContainerStyle:{objectFit:"contain",height:"100%",borderRadius:"12px"},children:l&&(0,s.jsx)(x.tH,{directions:l})}):(0,s.jsx)("div",{className:"bg-red h-[100%] w-[100%] flex justify-center items-center",children:(0,s.jsx)(p(),{color:"red",loading:!0,cssOverride:{display:"block",margin:"0 auto",borderColor:"#3D1DF3"},size:100,"aria-label":"Loading Spinner","data-testid":"loader"})})})},f=()=>{let{user:e}=(0,u.v9)(e=>e),[t,r]=(0,n.useState)(!0),[o,l]=(0,n.useState)(!0),[h,p]=(0,n.useState)([]),[x,f]=(0,n.useState)([]);return(0,n.useEffect)(()=>{e.id&&i.Z.post("http://localhost:4000/api/v1/delivery/history",{deliveryMan_id:e.id}).then(e=>{f(e.data)}).catch(e=>console.error("Error al obtener historial de entregas:",e)),e.id&&i.Z.post("http://localhost:4000/api/v1/delivery/pendingDeliveries",{deliveryMan_id:e.id}).then(e=>{p(e.data)}).catch(e=>console.error("Error al obtener repartos pendientes:",e))},[e]),(0,s.jsxs)("main",{className:"flex flex-col mr-6 ml-6 mt-4 mb-8 font-poppins",children:[(0,s.jsxs)("div",{className:"pending-orders-block bg-white rounded-2xl text-[#3D1DF3] font-black py-4",children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("h2",{className:"ml-5",children:"Repartos pendientes"}),(0,s.jsx)("div",{onClick:()=>{r(!t)},className:"cursor-pointer mr-5 mt-2",children:(0,s.jsx)("svg",{width:"9",height:"7",viewBox:"0 0 9 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"transform ".concat(t?"rotate-180":""),children:(0,s.jsx)("path",{d:"M5.26799 6.07909C4.86821 6.55848 4.13179 6.55848 3.73201 6.0791L0.238902 1.89046C-0.304217 1.2392 0.158881 0.249999 1.00689 0.249999L7.99311 0.25C8.84112 0.25 9.30422 1.2392 8.7611 1.89046L5.26799 6.07909Z",fill:"#3D1DF3"})})})]}),t&&(0,s.jsx)("div",{className:"h-auto overflow-y-auto relative",children:h.map(e=>(0,s.jsx)(c,{itemId:e._id,address:e.address,status:e.status},e._id))})]}),(0,s.jsx)("div",{className:"rounded-2xl py-4 bg-white mt-4",children:(0,s.jsxs)("div",{className:"delivery-history bg-white rounded-2xl text-[#3D1DF3] font-black",children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("h2",{className:"ml-5",children:"Historial de repartos"}),(0,s.jsx)("div",{onClick:()=>{l(!o)},className:"cursor-pointer mr-5 mt-2",children:(0,s.jsx)("svg",{width:"9",height:"7",viewBox:"0 0 9 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"transform ".concat(o?"rotate-180":""),children:(0,s.jsx)("path",{d:"M5.26799 6.07909C4.86821 6.55848 4.13179 6.55848 3.73201 6.0791L0.238902 1.89046C-0.304217 1.2392 0.158881 0.249999 1.00689 0.249999L7.99311 0.25C8.84112 0.25 9.30422 1.2392 8.7611 1.89046L5.26799 6.07909Z",fill:"#3D1DF3"})})})]}),(0,s.jsxs)("p",{className:"ml-5 font-normal text-xs mt-1",children:[x.length," paquetes entregados"]}),o&&(0,s.jsx)("div",{className:"mt-3 h-[310px] overflow-y-auto relative",children:x.map(e=>(0,s.jsx)(d,{itemId:e._id,address:e.address,status:e.status},e._id))})]})}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(a(),{href:"/delivery/declaration",children:(0,s.jsx)("button",{className:"bg-[#00EA77] text-[#3D1DF3] mt-4 rounded-full py-1 w-[310px]",children:"Obtener Paquetes"})})}),(0,s.jsx)("div",{className:"w-[90%] h-[327px] hidden",children:(0,s.jsx)(m,{addressDestination:""})})]})}},7516:function(e,t,r){"use strict";var s=this&&this.__assign||function(){return(s=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__createBinding||(Object.create?function(e,t,r,s){void 0===s&&(s=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,s,n)}:function(e,t,r,s){void 0===s&&(s=r),e[s]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t},a=this&&this.__rest||function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,s=Object.getOwnPropertySymbols(e);n<s.length;n++)0>t.indexOf(s[n])&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(r[s[n]]=e[s[n]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var l=o(r(2265)),c=r(581),d=(0,r(9981).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");t.default=function(e){var t=e.loading,r=e.color,n=void 0===r?"#000000":r,i=e.speedMultiplier,o=e.cssOverride,u=e.size,h=void 0===u?35:u,p=a(e,["loading","color","speedMultiplier","cssOverride","size"]),x=s({background:"transparent !important",width:(0,c.cssValue)(h),height:(0,c.cssValue)(h),borderRadius:"100%",border:"2px solid",borderTopColor:n,borderBottomColor:"transparent",borderLeftColor:n,borderRightColor:n,display:"inline-block",animation:"".concat(d," ").concat(.75/(void 0===i?1:i),"s 0s infinite linear"),animationFillMode:"both"},void 0===o?{}:o);return void 0===t||t?l.createElement("span",s({style:x},p)):null}},9981:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0,t.createAnimation=function(e,t,r){var s="react-spinners-".concat(e,"-").concat(r);if("undefined"==typeof window||!window.document)return s;var n=document.createElement("style");document.head.appendChild(n);var i=n.sheet,o="\n    @keyframes ".concat(s," {\n      ").concat(t,"\n    }\n  ");return i&&i.insertRule(o,0),s}},581:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var r={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function s(e){if("number"==typeof e)return{value:e,unit:"px"};var t,s=(e.match(/^[0-9.]*/)||"").toString();t=s.includes(".")?parseFloat(s):parseInt(s,10);var n=(e.match(/[^0-9]*$/)||"").toString();return r[n]?{value:t,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=s,t.cssValue=function(e){var t=s(e);return"".concat(t.value).concat(t.unit)}}},function(e){e.O(0,[910,750,396,198,971,596,744],function(){return e(e.s=753)}),_N_E=e.O()}]);