import{j as u,r as l,B as C,R as y,a as c,b as g,c as x}from"./vendor.2d1551c5.js";const L=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}};L();const v="modulepreload",d={},E="/recipes/",a=function(s,i){return!i||i.length===0?s():Promise.all(i.map(n=>{if(n=`${E}${n}`,n in d)return;d[n]=!0;const e=n.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":v,e||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),e)return new Promise((h,_)=>{o.addEventListener("load",h),o.addEventListener("error",_)})})).then(()=>s())},t=u.exports.jsx,p=u.exports.jsxs,S=u.exports.Fragment,f=()=>p("svg",{role:"status",className:"inline mr-2 w-8 h-8 text-cyan-600 animate-spin dark:text-cyan-900 fill-cyan-900",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]});var A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:f});const R=l.exports.lazy(()=>a(()=>import("./Home.9430352c.js"),["assets/Home.9430352c.js","assets/vendor.2d1551c5.js","assets/useFetchHome.7f8346a0.js"])),O=l.exports.lazy(()=>a(()=>import("./RecipeDetail.8942b4ab.js"),["assets/RecipeDetail.8942b4ab.js","assets/vendor.2d1551c5.js","assets/useFetchHome.7f8346a0.js"])),P=l.exports.lazy(()=>a(()=>import("./Login.467047a9.js"),["assets/Login.467047a9.js","assets/vendor.2d1551c5.js","assets/messagesError.defc70a8.js"])),w=l.exports.lazy(()=>a(()=>import("./Page404.77bd6a12.js"),["assets/Page404.77bd6a12.js","assets/vendor.2d1551c5.js"]));function b(){return t(C,{children:t(l.exports.Suspense,{fallback:t(f,{}),children:p(y,{children:[t(c,{path:"/recipes",element:t(R,{})}),t(c,{path:"/recipes/detail/:id",element:t(O,{})}),t(c,{path:"/recipes/login",element:t(P,{})}),t(c,{path:"*",element:t(w,{})})]})})})}g.render(t(x.StrictMode,{children:t(b,{})}),document.getElementById("root"));export{S as F,f as L,a as _,p as a,A as b,t as j};