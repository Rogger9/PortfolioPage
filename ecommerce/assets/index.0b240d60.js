import{W as E,s as m,j as l,r as i,B as S,R as b,a as u,b as x}from"./vendor.c609d83d.js";const v=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}};v();const w="modulepreload",f={},O="/ecommerce/",d=function(e,o){return!o||o.length===0?e():Promise.all(o.map(a=>{if(a=`${O}${a}`,a in f)return;f[a]=!0;const t=a.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${r}`))return;const n=document.createElement("link");if(n.rel=t?"stylesheet":w,t||(n.as="script",n.crossOrigin=""),n.href=a,document.head.appendChild(n),t)return new Promise((y,C)=>{n.addEventListener("load",y),n.addEventListener("error",C)})})).then(()=>e())},R=E`
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
    0% { transform: translate(0, -.3%) }
    100% { transform: translate(0, 0) }
  }
`,D=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,_=m(D)`
  flex-direction: column;
  min-height: 100vh;
  text-align: center;

  a {
    color: var(--fontColor);
    text-decoration: none;
  }
`;class h{static getLocalStorage(e){return window.localStorage.getItem(e)}static setLocalStorage(e,o){return window.localStorage.setItem(e,o)}static setInterval(e,o){return window.setInterval(e,o)}static clearInterval(e){return window.clearInterval(e)}static setTheme(e,o){return document.body.setAttribute(e,o)}static getTheme(e){return document.body.getAttribute(e)}static async fetchData(e){return(await fetch(e)).json()}}const I=()=>{const c=h.getLocalStorage("theme"),e=c!=null?c:"dark";h.setTheme("theme",e)},p="/ecommerce",P="/user",k="/about",$="/accounts",B="/login",U="/register",N="/products",z="/productDetail",G="/:idProduct",M="/services",V="/:category",H="/brands",s=l.exports.jsx,g=l.exports.jsxs,W=l.exports.Fragment,L=i.exports.lazy(()=>d(()=>import("./index.0b623121.js").then(function(c){return c.i}),["assets/index.0b623121.js","assets/vendor.c609d83d.js","assets/Button.4fe55535.js","assets/Icon.26cab0f1.js"])),A=i.exports.lazy(()=>d(()=>import("./index.e29cbcf4.js").then(function(c){return c.i}),["assets/index.e29cbcf4.js","assets/vendor.c609d83d.js","assets/Icon.26cab0f1.js"])),T=i.exports.lazy(()=>d(()=>import("./index.5234ce93.js"),["assets/index.5234ce93.js","assets/vendor.c609d83d.js"]));function F(){return I(),s(S,{children:g(i.exports.Suspense,{fallback:null,children:[s(R,{}),s(_,{children:g(b,{children:[s(u,{path:p+"/*",element:s(L,{})}),s(u,{path:p+$+"/*",element:s(A,{})}),s(u,{path:"*",element:s(T,{})})]})})]})})}x.render(s(i.exports.StrictMode,{children:s(F,{})}),document.getElementById("root"));export{p as $,D,W as F,h as S,d as _,g as a,N as b,k as c,V as d,M as e,z as f,G as g,H as h,B as i,s as j,U as k,$ as l,P as m};
