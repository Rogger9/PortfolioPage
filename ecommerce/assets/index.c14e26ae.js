import{s as i,L as d,r as s,R as f,a as p}from"./vendor.57fc9f09.js";import{j as e,$ as w,a as o,F as u,D as x,B as g,L as y,_ as l,b as S}from"./index.cd3b3ec6.js";import{B as k}from"./Button.05ff211a.js";import{I as c,F}from"./FormFlex.b0e395a3.js";const _=i.header`
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
`,z=i.img`
  height: 100%;
  object-fit: contain;
`,j=i.label`
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
`;var L="/ecommerce/assets/LogoCodeAr-Min.c0174e63.avif";const C=()=>e(d,{to:w,children:e(z,{src:L,alt:"Logo ecommerce"})}),N=768,b=()=>{const[t,r]=s.exports.useState(0);return s.exports.useEffect(()=>{const a=()=>r(window.innerWidth);return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),{isMobileScreen:t<=N}},I=({resetKeyword:t})=>o(u,{children:[e(c,{iconStyle:"fas",icon:"times",size:"1x",handleClick:t}),e(k,{label:"search",value:"Buscar"})]}),M=i(F)`
  height: 2rem;
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
`,T=i(x)`
  height: 100%;
  width: 2rem;
  background: #FFF;
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
`,B=()=>{const[t,r]=s.exports.useState(""),n=t.length>0,a=m=>r(m.target.value),h=()=>n&&r("");return o(M,{onSubmit:m=>{if(m.preventDefault(),!n)return console.error("Inserta tu busqueda");console.log(t)},children:[e("input",{type:"checkbox",name:"check",id:"check"}),o(T,{children:[e("input",{type:"text",name:"keywordSearch",id:"keywordSearch",value:t,onChange:a}),n&&e(I,{resetKeyword:h})]}),e("label",{htmlFor:"check",onClick:h,children:e(c,{iconStyle:"fas",icon:"search",size:"1x"})})]})},E=(t="theme")=>{const n=g.get(t)==="dark"?"light":"dark";y.set(t,n),g.set(t,n)},D=()=>o(j,{htmlFor:"switchTheme",onChange:()=>E(),children:[e("input",{type:"checkbox",name:"switchTheme",id:"switchTheme"}),e("span",{})]}),A=i.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
  }

  @media (max-width: 340px) {
    gap: .8rem;
  }
`,be=i(x)`
  gap: 1.4rem;

  & > svg { cursor: pointer; }
`,R=s.exports.lazy(()=>l(()=>import("./index.94ac8af9.js"),["assets/index.94ac8af9.js","assets/index.cd3b3ec6.js","assets/vendor.57fc9f09.js","assets/FormFlex.b0e395a3.js"])),O=s.exports.lazy(()=>l(()=>import("./IconsNav.47619a92.js"),["assets/IconsNav.47619a92.js","assets/index.cd3b3ec6.js","assets/vendor.57fc9f09.js","assets/FormFlex.b0e395a3.js","assets/Button.05ff211a.js"])),V=()=>{const{isMobileScreen:t}=b();return o(A,{children:[e(B,{}),e(D,{}),t?e(R,{}):e(O,{})]})},P=()=>o(_,{children:[e(C,{}),e(V,{})]}),U=()=>{const{isMobileScreen:t}=b(),[r,n]=s.exports.useState(!0),a=()=>n(h=>!h);return s.exports.useEffect(()=>{a()},[t]),{isNormalSize:r,changeSize:a}},H=[{name:"Home",icon:"home"},{name:"Categories",icon:"database",subMenu:["Electronics","Smart TV","Cellphones","Clothes","Books","Sports"]},{name:"Trending Products",icon:"chart-bar"},{name:"Brands",icon:"bold"},{name:"Services",icon:"globe-americas"},{name:"About",icon:"info"}],W=i.ul`
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
`,$=i.li`
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
`,q=s.exports.lazy(()=>l(()=>import("./SubListNav.2723171b.js"),["assets/SubListNav.2723171b.js","assets/vendor.57fc9f09.js","assets/index.cd3b3ec6.js","assets/Button.05ff211a.js","assets/FormFlex.b0e395a3.js"])),K=({name:t,icon:r,subMenu:n,normalSize:a=!0})=>o($,{children:[o(d,{to:"#",children:[e("div",{children:e(c,{iconStyle:"fas",icon:r})}),a&&t]}),n!==void 0&&e(q,{subMenu:n})]}),G=({normalSize:t})=>e(W,{children:H.map(({name:r,icon:n,subMenu:a})=>e(K,{name:r,icon:n,subMenu:a,normalSize:t},r))}),J=i.label`
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
`,Q=i.nav`
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
`,X=()=>{const{isNormalSize:t,changeSize:r}=U();return o(Q,{children:[e(J,{htmlFor:"switchNavBar",children:e(c,{iconStyle:"fas",icon:t?"compress-arrows-alt":"expand-arrows-alt",size:"1x",handleClick:r})}),e("input",{type:"checkbox",name:"switchNavBar",id:"switchNavBar"}),e(G,{normalSize:t})]})},Y=i.section`
  display: flex;
  align-items: center;
  justify-content: center;
`,Z=i.footer`
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
`,v=i(Y)`
  gap: 1rem;
`,ee=()=>o(v,{children:[e(d,{to:"#",children:e(c,{iconStyle:"fab",icon:"whatsapp",size:"1x"})}),e(d,{to:"#",children:e(c,{iconStyle:"fab",icon:"instagram",size:"1x"})}),e(d,{to:"#",children:e(c,{iconStyle:"fab",icon:"facebook-square",size:"1x"})})]}),te=()=>o(v,{children:[e(d,{to:"#",children:e(c,{iconStyle:"fas",icon:"map-marked-alt",size:"1x"})}),"|",e(d,{to:"#",children:e(c,{iconStyle:"fas",icon:"envelope",size:"1x"})}),"correo@correo.com"]}),ie=()=>o(Z,{children:[e(ee,{}),o("span",{children:["CodeAr ",e("sub",{children:"Inc."})]}),e(te,{})]}),oe=i.div`
  width: 100%;
  display: grid;
  grid:
    'view' 1fr
    'footer' auto /
    100%
  ;
`,re=i.div`
  grid-area: view;
`,ne=s.exports.lazy(()=>l(()=>import("./index.69ca2cf6.js"),["assets/index.69ca2cf6.js","assets/index.cd3b3ec6.js","assets/vendor.57fc9f09.js","assets/Button.05ff211a.js","assets/FormFlex.b0e395a3.js"])),ae=s.exports.lazy(()=>l(()=>import("./index.6ea2ccb1.js"),["assets/index.6ea2ccb1.js","assets/vendor.57fc9f09.js","assets/index.cd3b3ec6.js","assets/Button.05ff211a.js","assets/FormFlex.b0e395a3.js"])),se=()=>e(re,{children:o(f,{children:[e(p,{index:!0,element:e(ne,{})}),e(p,{path:S,element:e(ae,{})})]})}),ce=()=>o(oe,{children:[e(se,{}),e(ie,{})]}),de=i.main`
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
`,le=()=>o(de,{children:[e(X,{}),e(ce,{})]}),he=()=>o(u,{children:[e(P,{}),e(le,{})]});var ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:he});export{be as S,Y as a,W as b,$ as c,ve as i};
