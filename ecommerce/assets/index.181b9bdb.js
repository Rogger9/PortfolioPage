import{$ as u,l as m,i as p,j as e,a as s,m as h}from"./index.360d6466.js";import g from"./Icon.77b6499d.js";import{u as b,s as a,R as v,a as l}from"./vendor.c609d83d.js";const x=[{id:"login",value:"Iniciar Sesi\xF3n"},{id:"shopping",value:"Carrito"}],M=[{id:"shopping",value:"Carrito"},{id:"favorites",value:"Favoritos"},{id:"logout",value:"Cerrar Sesi\xF3n"}],y={login:u+m+p},f=({value:n,id:i})=>{const o=b();return e("li",{onClick:d=>{var t;const c=d.target.id;return o((t=y[c])!=null?t:"")},id:i,children:n})},C=a.label`
  padding: 0 .6rem;
  position: relative;
  cursor: pointer;

  input { display: none }

  input:checked ~ ul { display: flex; }
`,j=a.ul`
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
`,r=({menu:n})=>e(j,{children:n.map(({id:i,value:o})=>e(f,{id:i,value:o},i))}),F=()=>s(C,{htmlFor:"mobileMenu",children:[e(g,{iconStyle:"fas",icon:"ellipsis-v"}),e("input",{type:"checkbox",name:"mobileMenu",id:"mobileMenu"}),s(v,{children:[e(l,{index:!0,element:e(r,{menu:x})}),e(l,{path:h,element:e(r,{menu:M})})]})]});export{F as default};
