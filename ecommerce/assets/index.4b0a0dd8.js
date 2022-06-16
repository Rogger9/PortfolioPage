import{s as r,L as l,r as a,u as F,R as T,a as h}from"./vendor.c609d83d.js";import{j as e,$ as m,a as o,F as x,D as S,b,S as g,_ as c,c as C,d as j,e as I,f as P,g as D,h as N}from"./index.360d6466.js";import{B as A}from"./Button.59224164.js";import d from"./Icon.77b6499d.js";const O=r.header`
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
`,R=r.img`
  height: 100%;
  object-fit: contain;
`,B=r.label`
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
`;var M="/ecommerce/assets/LogoCodeAr-Min.c0174e63.avif";const V=()=>e(l,{to:m,children:e(R,{src:M,alt:"Logo ecommerce"})}),$=768,_=()=>{const[t,i]=a.exports.useState(0);return a.exports.useEffect(()=>{const s=()=>i(window.innerWidth);return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),{isMobileScreen:t<=$}},U=({resetKeyword:t})=>o(x,{children:[e(d,{iconStyle:"fas",icon:"times",size:"1x",handleClick:t}),e(A,{label:"search",value:"Buscar"})]}),k=[{name:"Home",icon:"home"},{name:"Categories",icon:"database",subMenu:["Electronics","Smart TV","Cellphones","Clothes","Books","Sports"]},{name:"Trending Products",icon:"chart-bar"},{name:"Brands",icon:"bold"},{name:"Services",icon:"globe-americas"},{name:"About",icon:"info"}],H=r.form`
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
    border: 2px solid var(--black);
    cursor: pointer;
  }


  label[for='check']:hover {
    box-shadow: 0 0 4px var(--contrast);
    border: 2px solid transparent;
  }

  label > svg { color: var(--black); }

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
`,W=r(S)`
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

    &:hover { color: var(--red); }
  }

  button {
    position: absolute;
    right: 2.2rem;
    box-shadow: 0 0 3px var(--blackOpacity);
    border: none;
    font-weight: normal;
    padding: .2rem .4rem .2rem;

    &:hover { background: var(--primary); color: var(--fontColor); border: none; }
  }

  @media (max-width: 650px) {
    button { right: 1rem; }
  }
`,{subMenu:v}=k[1],f=v==null?void 0:v.map(t=>t.toLowerCase().replace(" ","-")),G=()=>{const[t,i]=a.exports.useState(""),n=t.length>0,s=F(),p=u=>i(u.target.value),y=()=>n&&i("");return o(H,{onSubmit:u=>{if(u.preventDefault(),!n)return console.error("Inserta tu busqueda");const w=t.toLowerCase();if(!(f==null?void 0:f.includes(w)))return console.error("B\xFAsqueda no coincide!");s(m+b+`/${w}`)},children:[e("input",{type:"checkbox",name:"check",id:"check"}),o(W,{children:[e("input",{type:"text",name:"keywordSearch",id:"keywordSearch",value:t,onChange:p}),n&&e(U,{resetKeyword:y})]}),e("label",{htmlFor:"check",onClick:y,children:e(d,{iconStyle:"fas",icon:"search",size:"1x"})})]})},q=(t="theme")=>{const n=g.getTheme(t)==="dark"?"light":"dark";g.setLocalStorage(t,n),g.setTheme(t,n)},K=()=>o(B,{htmlFor:"switchTheme",onChange:()=>q(),children:[e("input",{type:"checkbox",name:"switchTheme",id:"switchTheme"}),e("span",{})]}),X=r.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
  }

  @media (max-width: 340px) {
    gap: .8rem;
  }
`,Ae=r(S)`
  gap: 1.4rem;

  & > svg { cursor: pointer; }
`,Y=a.exports.lazy(()=>c(()=>import("./index.181b9bdb.js"),["assets/index.181b9bdb.js","assets/index.360d6466.js","assets/vendor.c609d83d.js","assets/Icon.77b6499d.js"])),J=a.exports.lazy(()=>c(()=>import("./IconsNav.b7d1b89c.js"),["assets/IconsNav.b7d1b89c.js","assets/index.360d6466.js","assets/vendor.c609d83d.js","assets/Icon.77b6499d.js","assets/Button.59224164.js"])),Q=()=>{const{isMobileScreen:t}=_();return o(X,{children:[e(G,{}),e(K,{}),t?e(Y,{}):e(J,{})]})},Z=()=>o(O,{children:[e(V,{}),e(Q,{})]}),ee=()=>{const{isMobileScreen:t}=_(),[i,n]=a.exports.useState(!0),s=()=>n(p=>!p);return a.exports.useEffect(()=>{s()},[t]),{isNormalSize:i,changeSize:s}},te=r.ul`
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
`,ie=r.li`
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

  &:hover { background: var(--primary); }

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
`,re=a.exports.lazy(()=>c(()=>import("./SubListNav.38021623.js"),["assets/SubListNav.38021623.js","assets/vendor.c609d83d.js","assets/index.360d6466.js","assets/Button.59224164.js","assets/Icon.77b6499d.js"])),oe=t=>{const i=t.toLowerCase().replace(/\s/g,"-");return i==="home"?m:i==="categories"?"#":i==="trending-products"?m+b+"/"+i:m+"/"+i},ne=({name:t,icon:i,subMenu:n,normalSize:s=!0})=>o(ie,{children:[o(l,{to:oe(t),children:[e("div",{children:e(d,{iconStyle:"fas",icon:i})}),s&&t]}),n&&e(re,{subMenu:n})]}),ae=({normalSize:t})=>e(te,{children:k.map(({name:i,icon:n,subMenu:s})=>e(ne,{name:i,icon:n,subMenu:s,normalSize:t},i))}),se=r.label`
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
`,ce=r.nav`
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
`,de=()=>{const{isNormalSize:t,changeSize:i}=ee();return o(ce,{children:[e(se,{htmlFor:"switchNavBar",children:e(d,{iconStyle:"fas",icon:t?"compress-arrows-alt":"expand-arrows-alt",size:"1x",handleClick:i})}),e("input",{type:"checkbox",name:"switchNavBar",id:"switchNavBar"}),e(ae,{normalSize:t})]})},z=r.section`
  display: flex;
  align-items: center;
  justify-content: center;
`,le=r.footer`
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
`,L=r(z)`
  gap: 1rem;
`,he=()=>o(L,{children:[e(l,{to:"#",children:e(d,{iconStyle:"fab",icon:"whatsapp",size:"1x"})}),e(l,{to:"#",children:e(d,{iconStyle:"fab",icon:"instagram",size:"1x"})}),e(l,{to:"#",children:e(d,{iconStyle:"fab",icon:"facebook-square",size:"1x"})})]}),me=()=>o(L,{children:[e(l,{to:"#",children:e(d,{iconStyle:"fas",icon:"map-marked-alt",size:"1x"})}),"|",e(l,{to:"#",children:e(d,{iconStyle:"fas",icon:"envelope",size:"1x"})}),"correo@correo.com"]}),pe=()=>o(le,{children:[e(he,{}),o("span",{children:["CodeAr ",e("sub",{children:"Inc."})]}),e(me,{})]}),ue=r(z)`
  height: 100%;
  padding: 1rem;
`,xe=r.div`
  width: 100%;
  display: grid;
  grid:
    'view' 1fr
    'footer' auto /
    100%
  ;
`,be=r.div`
  grid-area: view;
`,Oe=r(ue)`
`,ge=a.exports.createContext({}),ve=({children:t})=>{const[i,n]=a.exports.useState([]);return e(ge.Provider,{value:{products:i,setProducts:n},children:t})},fe=a.exports.lazy(()=>c(()=>import("./index.eac43ef6.js"),["assets/index.eac43ef6.js","assets/index.360d6466.js","assets/vendor.c609d83d.js","assets/Button.59224164.js","assets/Icon.77b6499d.js"])),E=a.exports.lazy(()=>c(()=>import("./ListOfProducts.5af99a9a.js"),["assets/ListOfProducts.5af99a9a.js","assets/index.360d6466.js","assets/vendor.c609d83d.js","assets/style.7f85ee9c.js","assets/Button.59224164.js","assets/Icon.77b6499d.js"])),ye=a.exports.lazy(()=>c(()=>import("./index.1d507181.js"),["assets/index.1d507181.js","assets/vendor.c609d83d.js","assets/index.360d6466.js","assets/Button.59224164.js","assets/Icon.77b6499d.js"])),we=a.exports.lazy(()=>c(()=>import("./index.82c9e372.js"),["assets/index.82c9e372.js","assets/vendor.c609d83d.js","assets/index.360d6466.js","assets/Button.59224164.js","assets/Icon.77b6499d.js"])),Se=a.exports.lazy(()=>c(()=>import("./ProductDetail.866355ba.js"),["assets/ProductDetail.866355ba.js","assets/style.7f85ee9c.js","assets/vendor.c609d83d.js","assets/index.360d6466.js","assets/ProductCard.9490b363.js","assets/Icon.77b6499d.js","assets/Button.59224164.js"])),_e=a.exports.lazy(()=>c(()=>import("./index.68529c0f.js"),["assets/index.68529c0f.js","assets/vendor.c609d83d.js","assets/index.360d6466.js","assets/Button.59224164.js","assets/Icon.77b6499d.js"])),ke=a.exports.lazy(()=>c(()=>import("./View404.1bf3553c.js"),["assets/View404.1bf3553c.js","assets/index.360d6466.js","assets/vendor.c609d83d.js","assets/Button.59224164.js","assets/Icon.77b6499d.js"])),ze=()=>o(x,{children:[e(fe,{}),e(E,{})]}),Le=()=>e(ve,{children:e(be,{children:o(T,{children:[e(h,{index:!0,element:e(ze,{})}),e(h,{path:C,element:e(ye,{})}),e(h,{path:b+j,element:e(E,{})}),e(h,{path:I,element:e(we,{})}),e(h,{path:P+D,element:e(Se,{})}),e(h,{path:N,element:e(_e,{})}),e(h,{path:"*",element:e(ke,{})})]})})}),Ee=()=>o(xe,{children:[e(Le,{}),e(pe,{})]}),Fe=r.main`
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
`,Te=()=>o(Fe,{children:[e(de,{}),e(Ee,{})]}),Ce=()=>o(x,{children:[e(Z,{}),e(Te,{})]});var Re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ce});export{ge as G,Ae as S,z as a,ue as b,Oe as c,te as d,ie as e,Re as i};
