import{s as n,j as m,L as u,O as x,W as v,r as l,B as S,R as j,a as s,b as O,c as k}from"./vendor.48299357.js";const z=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const A of t)if(A.type==="childList")for(const o of A.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function c(t){const A={};return t.integrity&&(A.integrity=t.integrity),t.referrerpolicy&&(A.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?A.credentials="include":t.crossorigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function r(t){if(t.ep)return;t.ep=!0;const A=c(t);fetch(t.href,A)}};z();const E="modulepreload",p={},H="/moover/",d=function(a,c){return!c||c.length===0?a():Promise.all(c.map(r=>{if(r=`${H}${r}`,r in p)return;p[r]=!0;const t=r.endsWith(".css"),A=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${A}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":E,t||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),t)return new Promise((y,b)=>{o.addEventListener("load",y),o.addEventListener("error",b)})})).then(()=>a())},M=n.footer`
  width: 100%;
  height: 2rem;
  background: var(--secundary);
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 0 4px var(--blackOpacity);
`,e=m.exports.jsx,i=m.exports.jsxs,C=()=>e(M,{children:e("span",{children:"Moover"})});var P="data:image/png;base64,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";const N="/moover",w="pedidos",U="seguimiento",R="contacto",L=()=>e(u,{to:N,children:e("img",{src:P,alt:"Logo",width:"140"})}),q=n.nav`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  input { display: none }

  input:checked ~ ul {
    display: flex
  }

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`,V=n.label`
  width: max-content;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`,F=n.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  font-size: 1.2rem;
  font-weight: bold;

  a {
    padding: .6rem 1.4rem;
    border-radius: .2rem;

    &:hover {
      background: var(--contrast);
      color: var(--bgColor);
      transition: background-color .2s ease-in-out;
    }
  }

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    background: var(--secundary);
    padding: 2rem;
    border: 1px solid var(--blackOpacity);
    border-radius: .2rem;
    position: absolute;
    right: 0;
    top: 100%;
    z-index: 99;
  }
`,D=()=>i(F,{children:[e("li",{children:e(u,{to:w,children:"Pedidos"})}),e("li",{children:e(u,{to:U,children:"Seguimiento"})}),e("li",{children:e(u,{to:R,children:"Contacto"})})]});var T="/moover/assets/menuVertical.e408b47c.svg";const X=()=>i(q,{children:[e("input",{type:"checkbox",name:"iconMenu",id:"iconMenu"}),e(D,{}),e(V,{htmlFor:"iconMenu",children:e("img",{src:T,alt:"iconMenu",width:"34"})})]}),Q=n.header`
  width: 100%;
  height: 4rem;
  background: var(--secundary);
  display: flex;
  padding: 0 1rem;
  box-shadow: 0 0 4px var(--blackOpacity);

  img {
    height: 100%;
    object-fit: contain;
  }
`,Z=()=>i(Q,{children:[e(L,{}),e(X,{})]}),f=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,J=n(f)`
  flex-direction: column;
  min-height: 100vh;
  text-align: center;

  a {
    color: var(--fontColor);
    text-decoration: none;
  }
`,W=n(f)`
  width: 100%;
  height: calc(100vh - 6rem);
  padding: 1rem 2rem;
`,G=()=>i(J,{children:[e(Z,{}),e(W,{children:e(x,{})}),e(C,{})]}),I=n.span`
  width: 48px;
  height: 48px;
  border: 5px solid var(--fontColor);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,g=()=>e(I,{});var oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:g});const B=v`
  :root {
    --bgColor: #EAF2F8;
    --fontColor: #17202A;
    --secundary: #AED6F1;
    --contrast: #2874A6;
    --blackOpacity: #0000004D;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--bgColor);
    color: var(--fontColor);
    text-align: center;
  }
`,K=l.exports.lazy(()=>d(()=>import("./Welcome.c15e3ed3.js"),["assets/Welcome.c15e3ed3.js","assets/vendor.48299357.js"])),Y=l.exports.lazy(()=>d(()=>import("./index.31d41035.js"),["assets/index.31d41035.js","assets/vendor.48299357.js","assets/useFetch.adccd138.js"])),_=l.exports.lazy(()=>d(()=>import("./index.ec77c2c3.js"),["assets/index.ec77c2c3.js","assets/vendor.48299357.js","assets/useFetch.adccd138.js"])),$=l.exports.lazy(()=>d(()=>import("./index.7b845e6d.js"),["assets/index.7b845e6d.js","assets/vendor.48299357.js"])),ee=l.exports.lazy(()=>d(()=>import("./index.21139389.js"),["assets/index.21139389.js","assets/vendor.48299357.js"]));function te(){return i(S,{children:[e(B,{}),e(l.exports.Suspense,{fallback:e(g,{}),children:i(j,{children:[i(s,{path:"/moover",element:e(G,{}),children:[e(s,{index:!0,element:e(K,{})}),e(s,{path:"pedidos",element:e(Y,{})}),e(s,{path:"seguimiento",element:e(_,{})}),e(s,{path:"contacto",element:e($,{})})]}),e(s,{path:"*",element:e(ee,{})})]})})]})}O.render(e(k.StrictMode,{children:e(te,{})}),document.getElementById("root"));export{f as D,N as H,d as _,i as a,oe as i,e as j};
