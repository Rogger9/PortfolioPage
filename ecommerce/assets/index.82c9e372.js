import{s as o}from"./vendor.c609d83d.js";import{D as t,a as s,j as r}from"./index.360d6466.js";import{b as c}from"./index.4b0a0dd8.js";import"./Button.59224164.js";import"./Icon.77b6499d.js";const n=[{title:"Your Orders",description:"Track packages, Edit or cancel orders"},{title:"Digital Services and Device Support",description:"Troubleshoot device issues"},{title:"Your Account",description:"Manage your account preferences"}],d=o(c)`
  flex-direction: column;
  gap: 4rem;
  animation: moveDown .4s ease-in;
`,a=o(t)`
  flex-direction: column;
  border: 2px solid var(--shadow);
  border-radius: .3rem;
  padding: 1.4rem;
  gap: 1rem;
`,l=({title:e,description:i})=>s(a,{children:[r("h3",{children:e}),r("p",{children:i})]}),S=()=>s(d,{children:[r("h1",{children:"Hello. What can we help you with?"}),n.map(({title:e,description:i})=>r(l,{title:e,description:i},e))]});export{S as default};
