import{W as E,s as m,j as l,r as i,B as b,R as F,a as d,b as v}from"./vendor.c609d83d.js";const x=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}};x();const S="modulepreload",f={},D="/ecommerce/",u=function(e,o){return!o||o.length===0?e():Promise.all(o.map(c=>{if(c=`${D}${c}`,c in f)return;f[c]=!0;const t=c.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${r}`))return;const n=document.createElement("link");if(n.rel=t?"stylesheet":S,t||(n.as="script",n.crossOrigin=""),n.href=c,document.head.appendChild(n),t)return new Promise((y,g)=>{n.addEventListener("load",y),n.addEventListener("error",g)})})).then(()=>e())},O=E`
  :root {
    /* --primary: #262D39;
    --fontColor: #FFF;
    --secundary: #20262E;
    --shadow: #C4C4C499;
    --contrast: #9BA4B4;
    --black: #2C2C2C;
    --blackOpacity: #2C2C2C99;
    --green: #3D805F;
    --red: #B74545;
    --white: #FCFCFC; */

    --primary: #3B75A9;
    --secundary: #23649E;
    --contrast: #EEEEEE;
    --fontColor: #FFF;
    --shadow: #3066A74D;
    --white: #FCFCFC;
    --black: #2C2C2C;
    --blackOpacity: #2C2C2C99;
    --green: #3D805F;
    --red: #B74545;
  }

  [theme='light'] {
    /* --primary: #F1F6F9;
    --secundary: #E4E8E9;
    --contrast: #EEEEEE;
    --fontColor: #2C2C2C;
    --shadow: #2C2C2C4D; */

    --primary: #DCECFF;
    --secundary: #CCE3FF;
    /* --contrast: #B5CFF0; */
    --contrast: #A6C7F1;
    --fontColor: #2C2C2C;
    --shadow: #9BBDE74D;
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
`,w=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,R=m(w)`
  flex-direction: column;
  min-height: 100vh;
  text-align: center;

  a {
    color: var(--fontColor);
    text-decoration: none;
  }
`;class p{static getLocalStorage(e){return window.localStorage.getItem(e)}static setLocalStorage(e,o){return window.localStorage.setItem(e,o)}static setInterval(e,o){return window.setInterval(e,o)}static clearInterval(e){return window.clearInterval(e)}static setTheme(e,o){return document.body.setAttribute(e,o)}static getTheme(e){return document.body.getAttribute(e)}static async fetchData(e){return(await fetch(e)).json()}}const A=()=>{const a=p.getLocalStorage("theme"),e=a!=null?a:"dark";p.setTheme("theme",e)},C="/ecommerce",B="/user",j="/about",_="/accounts",P="/login",U="/register",N="/products",z="/productDetail",G="/:idProduct",M="/services",V="/:category",H="/brands",s=l.exports.jsx,h=l.exports.jsxs,W=l.exports.Fragment,I=i.exports.lazy(()=>u(()=>import("./index.4b0a0dd8.js").then(function(a){return a.i}),["assets/index.4b0a0dd8.js","assets/vendor.c609d83d.js","assets/Button.59224164.js","assets/Icon.77b6499d.js"])),$=i.exports.lazy(()=>u(()=>import("./index.14eb1a4b.js").then(function(a){return a.i}),["assets/index.14eb1a4b.js","assets/vendor.c609d83d.js","assets/Icon.77b6499d.js"])),L=i.exports.lazy(()=>u(()=>import("./index.41305455.js"),["assets/index.41305455.js","assets/vendor.c609d83d.js"]));function k(){return A(),s(b,{children:h(i.exports.Suspense,{fallback:null,children:[s(O,{}),s(R,{children:h(F,{children:[s(d,{path:C+"/*",element:s(I,{})}),s(d,{path:C+_+"/*",element:s($,{})}),s(d,{path:"*",element:s(L,{})})]})})]})})}v.render(s(i.exports.StrictMode,{children:s(k,{})}),document.getElementById("root"));export{C as $,w as D,W as F,p as S,u as _,h as a,N as b,j as c,V as d,M as e,z as f,G as g,H as h,P as i,s as j,U as k,_ as l,B as m};
