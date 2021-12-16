import{W as V,s as a,j as g,L as l,r as h,l as W,_ as M,a as C,b as S,F as I,R as p,c as m,B as F,d as D,e as N}from"./vendor.39120fe2.js";const Z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}};Z();const U=V`
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
`,X=a.div`
  text-align: center;

  a {
    color: var(--fontColor);
    text-decoration: none;
  }
`,{body:x}=document,B={get(e){return x.getAttribute(e)},set(e,t){return x.setAttribute(e,t)}},y={get(e){return window.localStorage.getItem(e)},set(e,t){window.localStorage.setItem(e,t)}},R=()=>{const e=y.get("theme"),t=e!=null?e:"dark";B.set("theme",t)},z=a.header`
  height: 4rem;
  background: var(--secundary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.4rem;

  a:first-child { height: 100%; }

  @media (max-width: 340px) {
    padding: 0 .8rem;
  }
`,T=a.img`
  height: 100%;
  object-fit: contain;
`,J=a.label`
  width: 2.2rem;
  height: 1.2rem;
  background: var(--contrast);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  input { display: none; }

  span {
    width: 1rem;
    height: 1rem;
    background: var(--secundary);
    border-radius: 50%;
    position: absolute;
    left: 0;
    margin: 0 2px;
    transition: width .2s ease-in-out;
  }

  span:hover {
    box-shadow: inset 0 0 3px var(--contrast);
  }

  input:checked ~ span {
    left: auto;
    right: 0;
  }
`;var j="/ecommerce/assets/LogoCodeAr-Min.c0174e63.avif";const u="/ecommerce",w="/user",A=g.exports.jsx,i=g.exports.jsxs,Q=g.exports.Fragment,O=()=>A(l,{to:u,children:A(T,{src:j,alt:"Logo ecommerce"})}),H=768,f=()=>{const[e,t]=h.exports.useState(0);return h.exports.useEffect(()=>{const r=()=>t(window.innerWidth);return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),{isMobileScreen:e<=H}},P=a.button`
background: #FFF;
  border-radius: .3rem;
  border: 1px solid var(--shadow);
  outline: none;
  padding: .1rem .2rem;
  font-weight: bold;
  cursor: pointer;

  &:active { transform: scale(.9) }

  &:hover {
    background: var(--contrast);
    border: 1px solid var(--contrast)
  }
`,L=({value:e})=>A(P,{children:e});W.add(M,C,S);const c=({iconStyle:e,icon:t,size:o="lg",handleClick:r,classN:n})=>A(I,{icon:[e,t],size:o,onClick:r,className:n}),K=({resetKeyword:e})=>i(Q,{children:[A(c,{iconStyle:"fas",icon:"times",size:"1x",handleClick:e}),A(L,{value:"Buscar"})]}),q=a.form`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  input[type='checkbox'] { display:none; }

  label[for='check'] {
    height: 100%;
    width: 2rem;
    background: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    border-radius: 50%;
    border: 2px solid var(--contrast);
    cursor: pointer;
  }


  label[for='check']:hover {
    box-shadow: 0 0 3px var(--contrast)
  }

  label > svg { color: var(--contrast); }

  input[type='text'] {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    border-radius: 1rem;
    font-size: 1rem;
  }

  input[type='text']:-webkit-autofill,input[type='text']:-webkit-autofill:focus {
    box-shadow:0 0 0 20px #FFF inset;
    -webkit-text-fill-color:#2C2C2C;
    caret-color:#2C2C2C;
    font-size: 1rem;
  }

  input[type='text']:-webkit-autofill:focus { box-shadow:0 0 0 20px #FFF inset,0 0 3px #FFF; }

  input:checked ~ div { width: 24rem; }

  input:checked ~ div > input { padding: 0 7rem 0 2rem; }

  @media (max-width: 768px) {
    margin-right: .6rem;
  }

  @media (max-width: 650px) {
    div {
      opacity: 0;
      visibility: hidden;
      transform: translate(.24rem, 2.36rem);
      transition: opacity .2s ease-in-out;
      z-index: 100;
    }

    input:checked ~ label {
      &::before {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        bottom: -.6rem;
        border-right: .5rem solid transparent;
        border-left: .5rem solid transparent;
        border-bottom: .5rem solid #FFF;
        border-radius: .2rem;
      }
    }

    input:checked ~ div {
      opacity: 1;
      visibility: visible;
      width: 20rem;
    }

    input:checked ~ div > input { padding: 0 5rem 0 2rem; }

    label[for='check'] { z-index: 100; }
  }

  @media (max-width: 580px) {
    div {
      position: fixed;
      height: 2rem;
      transform: translate(-6rem, 2.36rem);
    }
  }

  @media (max-width: 440px) {
    div { transform: translate(-3.4rem, 2.36rem); }
  }

  @media (max-width: 340px) {
    input:checked ~ div { width: 18rem; }
  }
`,_=a.div`
  height: 100%;
  width: 2rem;
  background: #FFF;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  border: 2px solid transparent;
  position: relative;
  transition: width .2s ease-in-out;

  input:focus { box-shadow: 0 0 4px var(--shadow) }

  svg {
    color: var(--black);
    position: absolute;
    left: .6rem;
    cursor: pointer;

    &:hover { color: var(--contrast); }
  }

  button {
    position: absolute;
    right: 2.2rem;
  }

  @media (max-width: 650px) {
    button { right: 1rem; }
  }
`,$=()=>{const[e,t]=h.exports.useState(""),o=e.length>0,r=d=>t(d.target.value),n=()=>o&&t("");return i(q,{onSubmit:d=>{if(d.preventDefault(),!o)return console.error("Inserta tu busqueda");console.log(e)},children:[A("input",{type:"checkbox",name:"check",id:"check"}),i(_,{children:[A("input",{type:"text",name:"keywordSearch",id:"keywordSearch",value:e,onChange:r}),o&&A(K,{resetKeyword:n})]}),A("label",{htmlFor:"check",onClick:n,children:A(c,{iconStyle:"fas",icon:"search",size:"1x"})})]})},AA=(e="theme")=>{const o=B.get(e)==="dark"?"light":"dark";y.set(e,o),B.set(e,o)},eA=()=>i(J,{htmlFor:"switchTheme",onChange:()=>AA(),children:[A("input",{type:"checkbox",name:"switchTheme",id:"switchTheme"}),A("span",{})]}),tA=()=>i(Q,{children:[A(c,{iconStyle:"fas",icon:"heart"}),A(l,{to:u,children:A(c,{iconStyle:"fas",icon:"sign-out-alt"})})]}),oA=a.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
  }

  @media (max-width: 340px) {
    gap: .8rem;
  }
`,nA=a.div`
  display: flex;
  gap: 1.4rem;

  & > svg { cursor: pointer; }
`,rA=()=>i(nA,{children:[A(c,{iconStyle:"fas",icon:"shopping-cart"}),i(p,{children:[A(m,{index:!0,element:A(l,{to:u+w,children:A(c,{iconStyle:"fas",icon:"user"})})}),A(m,{path:w,element:A(tA,{})})]})]}),iA=({value:e,id:t})=>A("li",{id:t,children:e}),aA=a.label`
  padding: 0 .6rem;
  position: relative;
  cursor: pointer;

  input { display: none }

  input:checked ~ ul { display: flex; }
`,cA=a.ul`
  width: 14rem;
  background: var(--secundary);
  padding: 1rem;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2.8rem;
  right: 0;
  border-radius: .2rem;
  box-shadow: 0 0 3px 1px var(--shadow);
  list-style: none;
  line-height: 2.4rem;
  font-weight: bold;
  z-index: 100;

  & > li { width: 100%; }
`,v=({menu:e})=>A(cA,{children:e.map(({id:t,value:o})=>A(iA,{id:t,value:o},t))}),sA=[{id:"login",value:"Iniciar Sesi\xF3n"},{id:"shopping",value:"Carrito"}],lA=[{id:"shopping",value:"Carrito"},{id:"favorites",value:"Favoritos"},{id:"logout",value:"Cerrar Sesi\xF3n"}],dA=()=>i(aA,{htmlFor:"mobileMenu",children:[A(c,{iconStyle:"fas",icon:"ellipsis-v"}),A("input",{type:"checkbox",name:"mobileMenu",id:"mobileMenu"}),i(p,{children:[A(m,{path:u,element:A(v,{menu:sA})}),A(m,{path:w,element:A(v,{menu:lA})})]})]}),hA=()=>{const{isMobileScreen:e}=f();return i(oA,{children:[A($,{}),A(eA,{}),e?A(dA,{}):A(rA,{})]})},mA=()=>i(z,{children:[A(O,{}),A(hA,{})]}),uA=()=>{const{isMobileScreen:e}=f(),[t,o]=h.exports.useState(!0),r=()=>o(n=>!n);return h.exports.useEffect(()=>{r()},[e]),{isNormalSize:t,changeSize:r}},pA=[{name:"Home",icon:"home"},{name:"Categories",icon:"database",subMenu:["Electronics","Smart TV","Cellphones","Clothes","Books","Sports"]},{name:"Trending Products",icon:"chart-bar"},{name:"Brands",icon:"bold"},{name:"Services",icon:"globe-americas"},{name:"About",icon:"info"}],Y=a.ul`
  width: 14rem;
  line-height: 3rem;
  list-style: none;
  font-weight: bold;
  transition: width .2s ease-in-out;

  svg { cursor: pointer; }

  @media (max-width: 768px) {
    width: auto;
    display: flex;
    justify-content: space-evenly;
  }
`,E=a.li`
  position: relative;
  border-radius: .2rem;
  border-bottom: 1px solid var(--contrast);

  div { width: 3rem; }

  a {
    display: flex;
    gap: .6rem;
  }

  svg:nth-child(2) {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
    margin-right: 1rem;
  }

  ul {
    background: var(--secundary);
    display: none;
    position: absolute;
    top: 0;
    left: 100%;
    border-radius: .2rem;
    box-shadow: 0 0 1px 1px var(--shadow);
    z-index: 20;

    li { padding: 0 2rem; }
  }

  &:hover { background: var(--contrast); }

  &:hover > ul { display: block; }

  @media (max-width: 768px) {
    border-bottom: none;

    a { gap: 6rem; }

    ul {
      top: 100%;
      left: auto;
      right: 0;
    }
  }

  @media (max-width: 420px) {
    a { gap: 2rem; }

    ul { left: 0; right: auto; }
  }
`,bA=({subMenu:e})=>A(Y,{children:e.map(t=>A(E,{children:A(l,{to:"#",children:t})},t))}),gA=({name:e,icon:t,subMenu:o,normalSize:r=!0})=>i(E,{children:[i(l,{to:"#",children:[A("div",{children:A(c,{iconStyle:"fas",icon:t})}),r&&e]}),o!==void 0&&A(bA,{subMenu:o})]}),BA=({normalSize:e})=>A(Y,{children:pA.map(({name:t,icon:o,subMenu:r})=>A(gA,{name:t,icon:o,subMenu:r,normalSize:e},t))}),wA=a.label`
  display: flex;
  flex-direction: column;

  svg {
    position: absolute;
    top: 0;
    right: 0;
    margin: .6rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    svg { top: auto; bottom: 0; }
  }
`,QA=a.nav`
  grid-area: nav;
  background: var(--secundary);
  height: calc(100vh - 4rem);
  border-radius: .2rem;
  padding: 2rem 0;
  position: relative;

  input { display: none; }

  input:checked ~ ul { width: auto; }

  @media (max-width: 768px) {
    height: auto;
    padding: 0 2rem 0 0;
    border-radius: 0;

    input:checked ~ ul { flex-direction: column; }
  }
`,xA=()=>{const{isNormalSize:e,changeSize:t}=uA();return i(QA,{children:[A(wA,{htmlFor:"switchNavBar",children:A(c,{iconStyle:"fas",icon:e?"compress-arrows-alt":"expand-arrows-alt",size:"1x",handleClick:t})}),A("input",{type:"checkbox",name:"switchNavBar",id:"switchNavBar"}),A(BA,{normalSize:e})]})},yA=a.footer`
  grid-area: footer;
  width: 100%;
  background: var(--secundary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 2rem;
  padding: .4rem 1rem;

  svg:hover { filter: drop-shadow(0 0 1px var(--shadow)); }

  span { width: 8rem; }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: space-around;
    gap: .4rem 1rem;
  }
`,k=a.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`,fA=()=>i(k,{children:[A(l,{to:"#",children:A(c,{iconStyle:"fab",icon:"whatsapp",size:"1x"})}),A(l,{to:"#",children:A(c,{iconStyle:"fab",icon:"instagram",size:"1x"})}),A(l,{to:"#",children:A(c,{iconStyle:"fab",icon:"facebook-square",size:"1x"})})]}),vA=()=>i(k,{children:[A(l,{to:"#",children:A(c,{iconStyle:"fas",icon:"map-marked-alt",size:"1x"})}),"|",A(l,{to:"#",children:A(c,{iconStyle:"fas",icon:"envelope",size:"1x"})}),"correo@correo.com"]}),YA=()=>i(yA,{children:[A(fA,{}),i("span",{children:["CodeAr ",A("sub",{children:"Inc."})]}),A(vA,{})]}),EA=a.div`
  width: 100%;
  display: grid;
  grid:
    'view' 1fr
    'footer' auto /
    100%
  ;
`,kA=a.div`
  grid-area: view;
`,G={set(e,t){return window.setInterval(e,t)},clear(e){return window.clearInterval(e)}},GA=({inicialState:e,restartState:t})=>{const[o,r]=h.exports.useState(e);return h.exports.useEffect(function(){const n=G.set(()=>{o<t?r(s=>s+1):r(e)},5e3);return()=>G.clear(n)},[o,e,t]),{counter:o,setCounter:r}};var VA="data:image/avif;base64,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",WA="data:image/avif;base64,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",MA="data:image/avif;base64,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",CA="data:image/avif;base64,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";const b=[VA,WA,MA,CA],SA=a.section`
  height: 14rem;
  display: inline-flex;
  justify-content: center;
  margin: .4rem 0;
  position: relative;
  font-size: .88rem;

  img {
    height: 100%;
    object-fit: contain;
    border-radius: .2rem;
  }

  @media ( max-width: 850px ) {
    height: 12rem;
  }

  @media ( max-width: 768px ) {
    height: 10rem;
    font-size: .6rem;
  }

  @media ( max-width: 480px ) {
    height: 8rem;
  }

  @media ( max-width: 380px ) {
    height: 6rem;
  }
`,IA=a.div`
  color: #E0E0E0;
  position: absolute;
  bottom: 0;
  margin: .2rem 0;
  font-size: .7rem;
  cursor: pointer;

  & > * { margin: 0 .2rem; filter: drop-shadow(0 0 1px var(--blackOpacity)); }

  .active {
    opacity: .3;
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    font-size: .5rem;
  }
`,FA=0,DA=b.length-1,NA=()=>{const{counter:e,setCounter:t}=GA({inicialState:FA,restartState:DA}),o=r=>t(r);return i(SA,{title:"slider",children:[A("img",{loading:"lazy",src:b[e],alt:"slider"}),A(IA,{children:b.map((r,n)=>A(c,{iconStyle:"fas",icon:"circle",handleClick:()=>o(n),classN:r===b[e]?"active":void 0},n))})]})},ZA=()=>A(kA,{children:A(p,{children:A(m,{index:!0,element:A(NA,{})})})}),UA=()=>i(EA,{children:[A(ZA,{}),A(YA,{})]}),XA=a.main`
  grid-area: main;
  display: grid;
  grid:
    'nav' 'main' 1fr /
    auto    1fr
  ;
  height: calc(100vh - 4rem);

  @media (max-width: 768px) {
    grid:
      'nav' auto
      'main'  1fr /
      100%
    ;
  }
`,RA=()=>i(XA,{children:[A(xA,{}),A(UA,{})]}),zA=()=>i(Q,{children:[A(mA,{}),A(RA,{})]});function TA(){return R(),i(F,{children:[A(U,{}),A(X,{children:A(p,{children:A(m,{path:u+"/*",element:A(zA,{})})})})]})}D.render(A(N.StrictMode,{children:A(TA,{})}),document.getElementById("root"));
