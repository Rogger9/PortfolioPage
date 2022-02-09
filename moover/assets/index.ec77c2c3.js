import{D as i,_ as n,j as r,a}from"./index.cfb69ea1.js";import{s as o,r as c}from"./vendor.48299357.js";import{u as d}from"./useFetch.adccd138.js";const l=o(i)`
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 4rem;
`,u=c.exports.lazy(()=>n(()=>import("./index.cfb69ea1.js").then(function(e){return e.i}),["assets/index.cfb69ea1.js","assets/vendor.48299357.js"])),g=()=>{const{data:e,loading:s,error:t}=d({route:"/tracking"});return t?r("h1",{children:"Lo sentimos! Hubo un problema al buscar esta informaci\xF3n"}):s?r(u,{}):a(l,{children:[r("h1",{children:"Tracking"}),r("h3",{children:e==null?void 0:e.message})]})};export{g as default};
