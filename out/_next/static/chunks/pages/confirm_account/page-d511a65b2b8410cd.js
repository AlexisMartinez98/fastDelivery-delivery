(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[315],{266:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/confirm_account/page",function(){return n(9572)}])},9572:function(e,t,n){"use strict";n.r(t);var s=n(5893),c=n(7294),a=n(6154),r=n(2920);n(8088);var u=n(1163);t.default=()=>{let e=(0,u.useRouter)(),{token:t}=e.query;return(0,c.useEffect)(()=>{let n=async()=>{try{let n=await a.Z.get("http://localhost:4000/api/v1/user/confirm/".concat(t));r.Am.success(n.data.msg),setTimeout(()=>{e.push("/")},2e3)}catch(e){r.Am.error(e.response.data.msg)}};n()},[t]),(0,s.jsxs)("div",{className:"mr-6 ml-6 mt-10 mb-8  rounded-2xl  text-[#3D1DF3] bg-[#C7FFB1]",children:[(0,s.jsx)("div",{className:"h-16 flex items-center justify-center",children:(0,s.jsx)("h1",{className:"m-4 font-black text-lg w-auto",children:"Confirmar cuenta"})}),(0,s.jsx)("div",{}),(0,s.jsx)("h2",{className:"bg-[#ffffff] rounded-xl  top-[-6px] flex justify-center h-20",children:"Su cuenta fue confirmada con exito"}),(0,s.jsx)(r.Ix,{})]})}},8088:function(){}},function(e){e.O(0,[774,141,888,179],function(){return e(e.s=266)}),_N_E=e.O()}]);