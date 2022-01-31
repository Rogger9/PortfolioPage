import{W as E,s as m,j as l,r as i,B as S,R as v,a as u,b}from"./vendor.c609d83d.js";const x=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}};x();const w="modulepreload",f={},D="/ecommerce/",d=function(e,o){return!o||o.length===0?e():Promise.all(o.map(c=>{if(c=`${D}${c}`,c in f)return;f[c]=!0;const t=c.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${r}`))return;const n=document.createElement("link");if(n.rel=t?"stylesheet":w,t||(n.as="script",n.crossOrigin=""),n.href=c,document.head.appendChild(n),t)return new Promise((g,C)=>{n.addEventListener("load",g),n.addEventListener("error",C)})})).then(()=>e())},O=E`
  :root {
    --primary: #262D39;
    --fontColor: #FFF;
    --colorSwitch: #262C37;
    --colorBallSwitch: #20242b;
    --secundary: #20262E;
    --shadow: #C4C4C499;
    --contrast: #9BA4B4;
    --black: #2C2C2C;
    --blackOpacity: #2C2C2C99;
    --green: #3D805F;
    --red: #B74545;
    --white: #FCFCFC;
  }

  [theme='light'] {
    --primary: #F1F6F9;
    --fontColor: #2C2C2C;
    --colorSwitch: #DDE3E7;
    --colorBallSwitch: #E5E5E6;
    --secundary: #E4E8E9;
    --shadow: #2C2C2C;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    position: relative;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--primary);
    color: var(--fontColor);
    text-align: center;
    scroll-behavior: smooth;
  }

  @keyframes moveDown {
    0% { transform: translate(0, -.3%); opacity: 0; }
    100% { transform: translate(0, 0); opacity: 1; }
  }

  @keyframes moveDelay {
    0% {
      transform: translate(-1%, -2%);
      opacity: 0;
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
      visibility: visible;
    }
  }
`,R=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,_=m(R)`
  flex-direction: column;
  min-height: 100vh;
  text-align: center;

  a {
    color: var(--fontColor);
    text-decoration: none;
  }
`;class h{static getLocalStorage(e){return window.localStorage.getItem(e)}static setLocalStorage(e,o){return window.localStorage.setItem(e,o)}static setInterval(e,o){return window.setInterval(e,o)}static clearInterval(e){return window.clearInterval(e)}static setTheme(e,o){return document.body.setAttribute(e,o)}static getTheme(e){return document.body.getAttribute(e)}static async fetchData(e){return(await fetch(e)).json()}}const F=()=>{const a=h.getLocalStorage("theme"),e=a!=null?a:"dark";h.setTheme("theme",e)},p="/ecommerce",k="/user",P="/about",I="/accounts",B="/login",U="/register",N="/products",z="/productDetail",G="/:idProduct",M="/services",V="/:category",H="/brands",s=l.exports.jsx,y=l.exports.jsxs,W=l.exports.Fragment,$=i.exports.lazy(()=>d(()=>import("./index.1a48ca89.js").then(function(a){return a.i}),["assets/index.1a48ca89.js","assets/vendor.c609d83d.js","assets/Button.89b80c69.js","assets/Icon.82250f91.js"])),L=i.exports.lazy(()=>d(()=>import("./index.e7855c1e.js").then(function(a){return a.i}),["assets/index.e7855c1e.js","assets/vendor.c609d83d.js","assets/Icon.82250f91.js"])),A=i.exports.lazy(()=>d(()=>import("./index.9a2a24f7.js"),["assets/index.9a2a24f7.js","assets/vendor.c609d83d.js"]));function T(){return F(),s(S,{children:y(i.exports.Suspense,{fallback:null,children:[s(O,{}),s(_,{children:y(v,{children:[s(u,{path:p+"/*",element:s($,{})}),s(u,{path:p+I+"/*",element:s(L,{})}),s(u,{path:"*",element:s(A,{})})]})})]})})}b.render(s(i.exports.StrictMode,{children:s(T,{})}),document.getElementById("root"));export{p as $,R as D,W as F,h as S,d as _,y as a,N as b,P as c,V as d,M as e,z as f,G as g,H as h,B as i,s as j,U as k,I as l,k as m};
