(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{1174:function(e,r,s){Promise.resolve().then(s.bind(s,6163))},6163:function(e,r,s){"use strict";s.r(r);var a=s(7437),l=s(1396),o=s.n(l),t=s(2265),n=s(9222),d=s(4033),i=s(171),c=s(6230),m=s(5691);r.default=()=>{let e=(0,d.useRouter)(),[r,s]=(0,t.useState)(""),[l,h]=(0,t.useState)(!1),[u,x]=(0,t.useState)(!1),p=(0,c.TA)({initialValues:{name:"",last_name:"",email:"",password:"",confirm_password:"",image:""},validationSchema:m.Ry({name:m.Z_().min(2,"Nombre debe tener al menos 2 car\xe1cteres").required("Nombre es requerido"),last_name:m.Z_().min(2,"Apellido debe tener al menos 2 car\xe1cteres").required("Apellido es requerido"),email:m.Z_().email("correo electr\xf3nico inv\xe1lido").required("Correo electronico es requerido"),password:m.Z_().min(8,"Debe tener al menos 8 caracteres").matches(/\d/,"Debe contener al menos un n\xfamero").matches(/[a-z]/,"Debe contener al menos una letra min\xfascula").matches(/[A-Z]/,"Debe contener al menos una letra may\xfascula").required("Password es requerido"),confirm_password:m.Z_().oneOf([m.iH("password"),""],"Confirmaci\xf3n erronea de password").required("Confirmaci\xf3n de password es requerido")}),onSubmit:s=>{n.Z.post("http://localhost:4000/api/v1/user/register",{name:s.name,last_name:s.last_name,email:s.email,password:s.password,confirm_password:s.confirm_password,image:r},{withCredentials:!0}).then(e=>e.data).then(()=>{e.push("/login"),i.Am.success("Creado correctamente, verifique su cuenta ")}).catch(e=>{let r=e.response.data;i.Am.error(r),console.log(e)})}});return(0,a.jsxs)("div",{className:"mr-6 ml-6 mt-10 mb-8  rounded-2xl  text-[#3D1DF3] bg-[#C7FFB1]  ",children:[(0,a.jsxs)("div",{className:"h-16 flex items-center justify-between  ",children:[(0,a.jsx)(o(),{href:"/login",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-8 h-8  mr-8 ml-6 ",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),(0,a.jsx)("h1",{className:"m-4 font-black text-lg ",children:"Cre\xe1 tu cuenta"}),(0,a.jsx)("div",{className:"w-8 h-8  mr-8 ml-6 "})]}),(0,a.jsx)("form",{className:"pt-5 bg-[#ffffff] rounded-xl  top-[-6px]",onSubmit:p.handleSubmit,children:(0,a.jsxs)("div",{className:"p-4 ",children:[(0,a.jsxs)("div",{className:"mb-5 flex justify-center",children:[(0,a.jsx)("input",{type:"file",id:"fileInput",accept:"image/jpeg, image/png",onChange:e=>{let r=e.target.files[0];if(r&&r.size>61440){i.Am.error("El tama\xf1o de la imagen es muy grande");return}let a=new FileReader;a.onload=()=>{let e=a.result;e&&"string"==typeof e?s(e):console.error("Error al cargar la imagen")},a.readAsDataURL(r)},style:{display:"none"}}),(0,a.jsx)("label",{htmlFor:"fileInput",children:(0,a.jsxs)("svg",{width:"95",height:"95",viewBox:"0 0 95 95",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:" rounded-full",children:[(0,a.jsx)("circle",{cx:"47.5",cy:"47.5",r:"47",stroke:"#3D1DF3"}),r?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("image",{xlinkHref:r})}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("circle",{cx:"47.5",cy:"47.5",r:"47",stroke:"#3D1DF3"}),(0,a.jsx)("path",{d:"M53 48H43",stroke:"#3D1DF3",strokeWidth:"2",strokeLinecap:"round"}),(0,a.jsx)("path",{d:"M48 43L48 53",stroke:"#3D1DF3",strokeWidth:"2",strokeLinecap:"round"}),(0,a.jsx)("path",{d:"M57.7333 42.9333H56.2",stroke:"#3D1DF3",strokeWidth:"2",strokeLinecap:"round"}),(0,a.jsx)("path",{d:"M32 49.1212C32 44.3546 32 41.9712 33.161 40.2592C33.6636 39.518 34.3094 38.8816 35.0616 38.3864C36.1781 37.6513 37.5759 37.3886 39.7159 37.2947C40.7371 37.2947 41.6164 36.5322 41.8167 35.5455C42.1171 34.0654 43.436 33 44.9678 33H50.0322C51.564 33 52.8829 34.0654 53.1833 35.5455C53.3836 36.5322 54.2629 37.2947 55.2841 37.2947C57.4241 37.3886 58.8219 37.6513 59.9384 38.3864C60.6906 38.8816 61.3364 39.518 61.839 40.2592C63 41.9712 63 44.3546 63 49.1212C63 53.8879 63 56.2712 61.839 57.9833C61.3364 58.7244 60.6906 59.3608 59.9384 59.856C58.2008 61 55.782 61 50.9444 61H44.0556C39.218 61 36.7992 61 35.0616 59.856C34.3094 59.3608 33.6636 58.7244 33.161 57.9833C32.8331 57.4997 32.5978 56.9626 32.4289 56.3333",stroke:"#3D1DF3",strokeWidth:"2",strokeLinecap:"round"})]})]})})]}),(0,a.jsxs)("div",{className:"relative mb-3",children:[(0,a.jsx)("input",{type:"text",id:"name",className:"w-full h-12 rounded-2xl border-[1px] placeholder-[#3D1DF3] ".concat(p.touched.name&&p.errors.name?"border-[red]":"border-[#3D1DF3]"," bg-transparent pl-5 text-[#3D1DF3]"),placeholder:"Nombre",required:!0,onChange:p.handleChange,value:p.values.name,onBlur:p.handleBlur}),p.touched.name&&p.errors.name&&(0,a.jsx)("p",{style:{color:"red",fontSize:"0.8rem"},children:p.errors.name})]}),(0,a.jsxs)("div",{className:"relative mb-3",children:[(0,a.jsx)("input",{type:"text",className:"w-full h-12 rounded-2xl border-[1px] placeholder-[#3D1DF3] ".concat(p.touched.last_name&&p.errors.last_name?"border-[red]":"border-[#3D1DF3]"," bg-transparent pl-5 text-[#3D1DF3]"),placeholder:"Apellido",id:"last_name",required:!0,onChange:p.handleChange,value:p.values.last_name,onBlur:p.handleBlur}),p.touched.last_name&&p.errors.last_name&&(0,a.jsx)("p",{style:{color:"red",fontSize:"0.8rem"},children:p.errors.last_name})]}),(0,a.jsxs)("div",{className:"relative mb-3",children:[(0,a.jsx)("input",{type:"text",id:"email",className:"w-full h-12 rounded-2xl border-[1px] placeholder-[#3D1DF3] ".concat(p.touched.email&&p.errors.email?"border-[red]":"border-[#3D1DF3]"," bg-transparent pl-5 text-[#3D1DF3]"),placeholder:"Email@contrase\xf1a.com",required:!0,onChange:p.handleChange,value:p.values.email,onBlur:p.handleBlur}),p.touched.email&&p.errors.email&&(0,a.jsx)("p",{style:{color:"red",fontSize:"0.8rem"},children:p.errors.email})]}),(0,a.jsxs)("div",{className:"relative mb-3",children:[(0,a.jsx)("input",{type:l?"text":"password",id:"password",className:"w-full h-12 rounded-2xl border-[1px] placeholder-[#3D1DF3] ".concat(p.touched.password&&p.errors.password?"border-[red]":"border-[#3D1DF3]"," bg-transparent pl-5 text-[#3D1DF3]"),placeholder:"Contrase\xf1a",required:!0,onChange:p.handleChange,value:p.values.password,onBlur:p.handleBlur}),p.touched.password&&p.errors.password&&(0,a.jsx)("p",{style:{color:"red",fontSize:"0.8rem"},children:p.errors.password}),(0,a.jsxs)("svg",{className:"absolute right-2  top-4 h-6 w-12",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:()=>{h(!l)},children:[(0,a.jsx)("path",{d:"M7.99998 6.22981C8.60766 6.08484 9.2736 6 9.99998 6C12.7879 6 14.6853 7.24978 15.8167 8.35217C16.3833 8.90426 16.6666 9.18031 16.6666 10C16.6666 10.8197 16.3833 11.0957 15.8167 11.6478C14.6853 12.7502 12.7879 14 9.99998 14C7.21206 14 5.31462 12.7502 4.18324 11.6478C3.61662 11.0957 3.33331 10.8197 3.33331 10C3.33331 9.18031 3.61662 8.90426 4.18324 8.35217C4.50406 8.03957 4.88647 7.71513 5.33331 7.41069",stroke:"#3D1DF3",strokeLinecap:"round"}),(0,a.jsx)("path",{d:"M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z",stroke:"#3D1DF3"}),(0,a.jsx)("line",{x1:"1.67861",y1:"16.4727",x2:"16.9995",y2:"3.61694",stroke:l?"":"#3D1DF3"})]})]}),(0,a.jsxs)("div",{className:"relative ",children:[(0,a.jsx)("input",{type:u?"text":"password",id:"confirm_password",className:"w-full h-12 rounded-2xl border-[1px] placeholder-[#3D1DF3] ".concat(p.touched.confirm_password&&p.values.confirm_password!==p.values.password?"border-[red]":"border-[#3D1DF3]"," bg-transparent pl-5 text-[#3D1DF3]"),placeholder:"Confirmar contrase\xf1a",required:!0,onChange:p.handleChange,value:p.values.confirm_password,onBlur:p.handleBlur}),p.touched.confirm_password&&p.values.confirm_password!==p.values.password&&(0,a.jsx)("p",{style:{color:"red",fontSize:"0.8rem"},children:p.errors.confirm_password}),(0,a.jsxs)("svg",{className:"absolute right-2  top-4 h-6 w-12",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:()=>{x(!u)},children:[(0,a.jsx)("path",{d:"M7.99998 6.22981C8.60766 6.08484 9.2736 6 9.99998 6C12.7879 6 14.6853 7.24978 15.8167 8.35217C16.3833 8.90426 16.6666 9.18031 16.6666 10C16.6666 10.8197 16.3833 11.0957 15.8167 11.6478C14.6853 12.7502 12.7879 14 9.99998 14C7.21206 14 5.31462 12.7502 4.18324 11.6478C3.61662 11.0957 3.33331 10.8197 3.33331 10C3.33331 9.18031 3.61662 8.90426 4.18324 8.35217C4.50406 8.03957 4.88647 7.71513 5.33331 7.41069",stroke:"#3D1DF3",strokeLinecap:"round"}),(0,a.jsx)("path",{d:"M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z",stroke:"#3D1DF3"}),(0,a.jsx)("line",{x1:"1.67861",y1:"16.4727",x2:"16.9995",y2:"3.61694",stroke:u?"":"#3D1DF3"})]})]}),(0,a.jsx)("button",{type:"submit",className:"bg-[#00EA77] text-[#3D1DF3] rounded-2xl w-full h-9 text-lg mb-2 mt-8 /",children:"Crear"}),(0,a.jsx)("h4",{className:"flex text-[#3D1DF3] text-sm items-center mb-2 justify-center ",children:"\xbfYa ten\xe9s una cuenta?"}),(0,a.jsx)(o(),{href:"/",children:(0,a.jsx)("button",{className:" text-[#3D1DF3] border-[#00EA77] border-[1px]  rounded-2xl w-full h-9 text-md mb-1",children:"Iniciar sesi\xf3n"})})]})})]})}}},function(e){e.O(0,[750,396,81,971,596,744],function(){return e(e.s=1174)}),_N_E=e.O()}]);