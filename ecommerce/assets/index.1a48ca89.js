import{s as o,L as l,r as a,R as _,a as h}from"./vendor.c609d83d.js";import{j as e,$ as p,a as r,F as x,D as g,S as b,_ as c,b as v,c as k,d as z,e as E,f as L,g as T,h as F}from"./index.89b498a4.js";import{B as j}from"./Button.89b80c69.js";import d from"./Icon.82250f91.js";const I=o.header`
  width: 100%;
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
`,C=o.img`
  height: 100%;
  object-fit: contain;
`,P=o.label`
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
    transition: transform .2s ease-in;
  }

  span:hover {
    box-shadow: inset 0 0 3px var(--contrast);
  }

  input:checked ~ span { transform: translateX(.86rem); }
`;var D="/ecommerce/assets/LogoCodeAr-Min.c0174e63.avif";const N=()=>e(l,{to:p,children:e(C,{src:D,alt:"Logo ecommerce"})}),A=768,f=()=>{const[t,i]=a.exports.useState(0);return a.exports.useEffect(()=>{const s=()=>i(window.innerWidth);return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),{isMobileScreen:t<=A}},M=({resetKeyword:t})=>r(x,{children:[e(d,{iconStyle:"fas",icon:"times",size:"1x",handleClick:t}),e(j,{label:"search",value:"Buscar"})]}),R=o.form`
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
`,O=o(g)`
  height: 100%;
  width: 2rem;
  background: #FFF;
  border-radius: 1rem;
  border: 2px solid transparent;
  position: relative;
  transition: width .3s ease-in;

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
`,B=()=>{const[t,i]=a.exports.useState(""),n=t.length>0,s=u=>i(u.target.value),m=()=>n&&i("");return r(R,{onSubmit:u=>{if(u.preventDefault(),!n)return console.error("Inserta tu busqueda");console.log(t)},children:[e("input",{type:"checkbox",name:"check",id:"check"}),r(O,{children:[e("input",{type:"text",name:"keywordSearch",id:"keywordSearch",value:t,onChange:s}),n&&e(M,{resetKeyword:m})]}),e("label",{htmlFor:"check",onClick:m,children:e(d,{iconStyle:"fas",icon:"search",size:"1x"})})]})},V=(t="theme")=>{const n=b.getTheme(t)==="dark"?"light":"dark";b.setLocalStorage(t,n),b.setTheme(t,n)},$=()=>r(P,{htmlFor:"switchTheme",onChange:()=>V(),children:[e("input",{type:"checkbox",name:"switchTheme",id:"switchTheme"}),e("span",{})]}),U=o.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
  }

  @media (max-width: 340px) {
    gap: .8rem;
  }
`,Ie=o(g)`
  gap: 1.4rem;

  & > svg { cursor: pointer; }
`,H=a.exports.lazy(()=>c(()=>import("./index.b87f5689.js"),["assets/index.b87f5689.js","assets/index.89b498a4.js","assets/vendor.c609d83d.js","assets/Icon.82250f91.js"])),W=a.exports.lazy(()=>c(()=>import("./IconsNav.3b9391d2.js"),["assets/IconsNav.3b9391d2.js","assets/index.89b498a4.js","assets/vendor.c609d83d.js","assets/Icon.82250f91.js","assets/Button.89b80c69.js"])),G=()=>{const{isMobileScreen:t}=f();return r(U,{children:[e(B,{}),e($,{}),t?e(H,{}):e(W,{})]})},q=()=>r(I,{children:[e(N,{}),e(G,{})]}),K=()=>{const{isMobileScreen:t}=f(),[i,n]=a.exports.useState(!0),s=()=>n(m=>!m);return a.exports.useEffect(()=>{s()},[t]),{isNormalSize:i,changeSize:s}},X=[{name:"Home",icon:"home"},{name:"Categories",icon:"database",subMenu:["Electronics","Smart TV","Cellphones","Clothes","Books","Sports"]},{name:"Trending Products",icon:"chart-bar"},{name:"Brands",icon:"bold"},{name:"Services",icon:"globe-americas"},{name:"About",icon:"info"}],Y=o.ul`
  width: 14rem;
  line-height: 3rem;
  list-style: none;
  font-weight: bold;
  transition: width .2s ease-in-out;

  svg { cursor: pointer; }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`,J=o.li`
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
    width: auto;
    background: var(--secundary);
    position: absolute;
    top: 0;
    left: 100%;
    border-radius: .2rem;
    box-shadow: 0 0 1px 1px var(--shadow);
    z-index: 20;
    visibility: hidden;
    opacity: 0;
    transition: visibility, opacity, .2s ease-in;

    li { padding: 0 2rem; }
  }

  &:hover { background: var(--contrast); }

  &:hover > ul { visibility: visible; opacity: 1; }

  @media (max-width: 768px) {
    border-bottom: none;

    a { gap: 6rem; }

    ul {
      display: flex;
      flex-direction: column;
      top: 100%;
      left: auto;
      right: 0;
    }
  }

  @media (max-width: 420px) {
    a { gap: 2rem; }

    ul { left: 0; right: auto; }
  }
`,Q=a.exports.lazy(()=>c(()=>import("./SubListNav.f40f1be0.js"),["assets/SubListNav.f40f1be0.js","assets/vendor.c609d83d.js","assets/index.89b498a4.js","assets/Button.89b80c69.js","assets/Icon.82250f91.js"])),Z=t=>{const i=t.toLowerCase().replace(/\s/g,"-");return i==="home"?p:i==="categories"?"#":i==="trending-products"?p+v+"/"+i:p+"/"+i},ee=({name:t,icon:i,subMenu:n,normalSize:s=!0})=>r(J,{children:[r(l,{to:Z(t),children:[e("div",{children:e(d,{iconStyle:"fas",icon:i})}),s&&t]}),n&&e(Q,{subMenu:n})]}),te=({normalSize:t})=>e(Y,{children:X.map(({name:i,icon:n,subMenu:s})=>e(ee,{name:i,icon:n,subMenu:s,normalSize:t},i))}),ie=o.label`
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
`,oe=o.nav`
  grid-area: nav;
  background: var(--secundary);
  min-height: calc(100vh - 4rem);
  border-radius: .2rem;
  padding: 2rem 0;
  position: relative;

  input { display: none; }

  input:checked ~ ul { width: 3rem; }

  @media (max-width: 768px) {
    min-height: auto;
    padding: 0 2rem 0 0;
    border-radius: 0;

    input:checked ~ ul { width: 100%; flex-direction: column; }
  }
`,re=()=>{const{isNormalSize:t,changeSize:i}=K();return r(oe,{children:[e(ie,{htmlFor:"switchNavBar",children:e(d,{iconStyle:"fas",icon:t?"compress-arrows-alt":"expand-arrows-alt",size:"1x",handleClick:i})}),e("input",{type:"checkbox",name:"switchNavBar",id:"switchNavBar"}),e(te,{normalSize:t})]})},y=o.section`
  display: flex;
  align-items: center;
  justify-content: center;
`,ne=o.footer`
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
`,w=o(y)`
  gap: 1rem;
`,ae=()=>r(w,{children:[e(l,{to:"#",children:e(d,{iconStyle:"fab",icon:"whatsapp",size:"1x"})}),e(l,{to:"#",children:e(d,{iconStyle:"fab",icon:"instagram",size:"1x"})}),e(l,{to:"#",children:e(d,{iconStyle:"fab",icon:"facebook-square",size:"1x"})})]}),se=()=>r(w,{children:[e(l,{to:"#",children:e(d,{iconStyle:"fas",icon:"map-marked-alt",size:"1x"})}),"|",e(l,{to:"#",children:e(d,{iconStyle:"fas",icon:"envelope",size:"1x"})}),"correo@correo.com"]}),ce=()=>r(ne,{children:[e(ae,{}),r("span",{children:["CodeAr ",e("sub",{children:"Inc."})]}),e(se,{})]}),de=o(y)`
  height: 100%;
  padding: 1rem;
`,le=o.div`
  width: 100%;
  display: grid;
  grid:
    'view' 1fr
    'footer' auto /
    100%
  ;
`,he=o.div`
  grid-area: view;
`,Ce=o(de)`
`,me=a.exports.createContext({}),pe=({children:t})=>{const[i,n]=a.exports.useState([]);return e(me.Provider,{value:{products:i,setProducts:n},children:t})},ue=a.exports.lazy(()=>c(()=>import("./index.091f7b2a.js"),["assets/index.091f7b2a.js","assets/index.89b498a4.js","assets/vendor.c609d83d.js","assets/Button.89b80c69.js","assets/Icon.82250f91.js"])),S=a.exports.lazy(()=>c(()=>import("./ListOfProducts.50e5e39a.js"),["assets/ListOfProducts.50e5e39a.js","assets/index.89b498a4.js","assets/vendor.c609d83d.js","assets/style.a15d9b53.js","assets/Button.89b80c69.js","assets/Icon.82250f91.js"])),xe=a.exports.lazy(()=>c(()=>import("./index.d178c903.js"),["assets/index.d178c903.js","assets/vendor.c609d83d.js","assets/index.89b498a4.js","assets/Button.89b80c69.js","assets/Icon.82250f91.js"])),be=a.exports.lazy(()=>c(()=>import("./index.45d2c153.js"),["assets/index.45d2c153.js","assets/vendor.c609d83d.js","assets/index.89b498a4.js","assets/Button.89b80c69.js","assets/Icon.82250f91.js"])),ge=a.exports.lazy(()=>c(()=>import("./ProductDetail.d0045447.js"),["assets/ProductDetail.d0045447.js","assets/style.a15d9b53.js","assets/vendor.c609d83d.js","assets/index.89b498a4.js","assets/ProductCard.445f00ec.js","assets/Icon.82250f91.js","assets/Button.89b80c69.js"])),ve=a.exports.lazy(()=>c(()=>import("./index.d8c2c4e2.js"),["assets/index.d8c2c4e2.js","assets/vendor.c609d83d.js","assets/index.89b498a4.js","assets/Button.89b80c69.js","assets/Icon.82250f91.js"])),fe=a.exports.lazy(()=>c(()=>import("./View404.2bb58f9d.js"),["assets/View404.2bb58f9d.js","assets/index.89b498a4.js","assets/vendor.c609d83d.js","assets/Button.89b80c69.js","assets/Icon.82250f91.js"])),ye=()=>r(x,{children:[e(ue,{}),e(S,{})]}),we=()=>e(pe,{children:e(he,{children:r(_,{children:[e(h,{index:!0,element:e(ye,{})}),e(h,{path:k,element:e(xe,{})}),e(h,{path:v+z,element:e(S,{})}),e(h,{path:E,element:e(be,{})}),e(h,{path:L+T,element:e(ge,{})}),e(h,{path:F,element:e(ve,{})}),e(h,{path:"*",element:e(fe,{})})]})})}),Se=()=>r(le,{children:[e(we,{}),e(ce,{})]}),_e=o.main`
  grid-area: main;
  display: grid;
  grid:
    'nav' 'main' 1fr /
    auto    1fr
  ;
  width: 100%;
  height: calc(100vh - 4rem);

  @media (max-width: 768px) {
    grid:
      'nav' auto
      'main'  1fr /
      100%
    ;
  }
`,ke=()=>r(_e,{children:[e(re,{}),e(Se,{})]}),ze=()=>r(x,{children:[e(q,{}),e(ke,{})]});var Pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ze});export{me as G,Ie as S,y as a,de as b,Ce as c,Y as d,J as e,Pe as i};
