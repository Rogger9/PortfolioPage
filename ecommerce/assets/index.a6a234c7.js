import{s as o}from"./vendor.c609d83d.js";import{D as c,a as s,j as r}from"./index.0b240d60.js";import{b as t}from"./index.0b623121.js";import"./Button.4fe55535.js";import"./Icon.26cab0f1.js";const n=[{title:"Your Orders",description:"Track packages, Edit or cancel orders"},{title:"Digital Services and Device Support",description:"Troubleshoot device issues"},{title:"Your Account",description:"Manage your account preferences"}],a=o(t)`
  flex-direction: column;
  gap: 4rem;
  animation: moveDown .4s ease-in;
`,d=o(c)`
  flex-direction: column;
  border: 1px solid var(--shadow);
  border-radius: .3rem;
  padding: 1.4rem;
  gap: 1rem;
`,l=({title:e,description:i})=>s(d,{children:[r("h3",{children:e}),r("p",{children:i})]}),S=()=>s(a,{children:[r("h1",{children:"Hello. What can we help you with?"}),n.map(({title:e,description:i})=>r(l,{title:e,description:i},e))]});export{S as default};
