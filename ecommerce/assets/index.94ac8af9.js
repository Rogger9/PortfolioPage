import{j as e,a as o,$ as r,e as d}from"./index.cd3b3ec6.js";import{I as u}from"./FormFlex.b0e395a3.js";import{s as t,R as c,a as s}from"./vendor.57fc9f09.js";const p=({value:n,id:i})=>e("li",{id:i,children:n}),m=t.label`
  padding: 0 .6rem;
  position: relative;
  cursor: pointer;

  input { display: none }

  input:checked ~ ul { display: flex; }
`,h=t.ul`
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
`,l=({menu:n})=>e(h,{children:n.map(({id:i,value:a})=>e(p,{id:i,value:a},i))}),b=[{id:"login",value:"Iniciar Sesi\xF3n"},{id:"shopping",value:"Carrito"}],x=[{id:"shopping",value:"Carrito"},{id:"favorites",value:"Favoritos"},{id:"logout",value:"Cerrar Sesi\xF3n"}],g=()=>o(m,{htmlFor:"mobileMenu",children:[e(u,{iconStyle:"fas",icon:"ellipsis-v"}),e("input",{type:"checkbox",name:"mobileMenu",id:"mobileMenu"}),o(c,{children:[e(s,{path:r,element:e(l,{menu:b})}),e(s,{path:d,element:e(l,{menu:x})})]})]});export{g as default};
