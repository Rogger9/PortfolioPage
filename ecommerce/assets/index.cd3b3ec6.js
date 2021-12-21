import{W as b,s as u,j as l,r as a,B as x,R as E,a as d,b as S}from"./vendor.57fc9f09.js";const v=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}};v();const O="modulepreload",m={},w="/ecommerce/",f=function(r,i){return!i||i.length===0?r():Promise.all(i.map(s=>{if(s=`${w}${s}`,s in m)return;m[s]=!0;const e=s.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":O,e||(n.as="script",n.crossOrigin=""),n.href=s,document.head.appendChild(n),e)return new Promise((y,C)=>{n.addEventListener("load",y),n.addEventListener("error",C)})})).then(()=>r())},F=b`
  :root {
    --primary: #262D39;
    --fontColor: #FFF;
    --colorSwitch: #262C37;
    --colorBallSwitch: #20242b;
    --secundary: #20262E;
    --shadow: #C4C4C4;
    --contrast: #9BA4B4;
    --black: #2C2C2C;
    --blackOpacity: #2C2C2C99;
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
    scroll-behavior: smooth;
  }
`,R=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,_=u(R)`
  flex-direction: column;
  min-height: 100vh;
  text-align: center;

  a {
    color: var(--fontColor);
    text-decoration: none;
  }
`,{body:h}=document,L={get(t){return h.getAttribute(t)},set(t,r){return h.setAttribute(t,r)}},j={get(t){return window.localStorage.getItem(t)},set(t,r){window.localStorage.setItem(t,r)}},B=()=>{const t=j.get("theme"),r=t!=null?t:"dark";L.set("theme",r)},p="/ecommerce",P="/user",U="/about",$="/accounts",N="/login",T="/register",c=l.exports.jsx,g=l.exports.jsxs,M=l.exports.Fragment,k=a.exports.lazy(()=>f(()=>import("./index.c14e26ae.js").then(function(t){return t.i}),["assets/index.c14e26ae.js","assets/vendor.57fc9f09.js","assets/Button.05ff211a.js","assets/FormFlex.b0e395a3.js"])),A=a.exports.lazy(()=>f(()=>import("./index.e4a79417.js").then(function(t){return t.i}),["assets/index.e4a79417.js","assets/vendor.57fc9f09.js","assets/FormFlex.b0e395a3.js"]));function D(){return B(),c(x,{children:g(a.exports.Suspense,{fallback:null,children:[c(F,{}),c(_,{children:g(E,{children:[c(d,{path:p+"/*",element:c(k,{})}),c(d,{path:p+$+"/*",element:c(A,{})})]})})]})})}S.render(c(a.exports.StrictMode,{children:c(D,{})}),document.getElementById("root"));export{p as $,L as B,R as D,M as F,j as L,f as _,g as a,U as b,N as c,T as d,P as e,$ as f,c as j};
