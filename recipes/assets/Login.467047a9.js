import{_ as n,j as e,a as m}from"./index.e0302d02.js";import{r as d,N as c}from"./vendor.2d1551c5.js";import{u as p,F as u,v as w,a as h,b as l,E as t,l as g}from"./messagesError.defc70a8.js";const b=d.exports.lazy(()=>n(()=>import("./AlertMessage.64446326.js"),["assets/AlertMessage.64446326.js","assets/index.e0302d02.js","assets/index.257ab50f.css","assets/vendor.2d1551c5.js"])),N=({setAuth:f})=>{const[a,s]=d.exports.useState("idle"),i=({email:o,password:r})=>s("resolved");return p({status:a,setStatus:s}),a==="resolved"?e(c,{to:"/recipes"}):e(u,{initialValues:{email:"",password:""},validate:w,onSubmit:i,children:({errors:{email:o,password:r}})=>m(h,{className:"bg-cyan-500 grid place-items-center w-11/12 sm:w-3/4 max-w-4xl p-8 gap-4 rounded",children:[e("label",{htmlFor:"email",className:"w-full",children:"Email"}),e(l,{type:"email",name:"email",id:"email",placeholder:"correo@correo.com",className:"w-full px-2 rounded leading-10 outline-none focus:shadow-sm focus:shadow-white"}),e(t,{name:"email",component:()=>e("span",{className:"text-red-700",children:o})}),e("label",{htmlFor:"password",className:"w-full",children:"Password"}),e(l,{type:"password",name:"password",id:"password",placeholder:"password",className:"w-full px-2 rounded leading-10 outline-none focus:shadow-sm focus:shadow-white"}),e(t,{name:"password",component:()=>e("span",{className:"text-red-700",children:r})}),e("input",{type:"submit",value:"Send",className:"bg-cyan-200 py-1 px-4 border-2 border-cyan-300 rounded-md cursor-pointer hover:bg-cyan-300 outline-none disabled:opacity-40 disabled:pointer-events-none","aria-label":"Send",disabled:a==="processing"}),a==="rejected"&&e(b,{alert:!0,msg:g[a]})]})})};export{N as default};