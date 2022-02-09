import{D as t,_ as i,j as r,a as n}from"./index.cfb69ea1.js";import{s as a,r as d}from"./vendor.48299357.js";import{u as c}from"./useFetch.adccd138.js";const l=a(t)`
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 4rem;
`,u=d.exports.lazy(()=>i(()=>import("./index.cfb69ea1.js").then(function(e){return e.i}),["assets/index.cfb69ea1.js","assets/vendor.48299357.js"])),x=()=>{const{data:e,loading:s,error:o}=c({route:"/orders"});return o?r("h1",{children:"Lo sentimos! Hubo un problema al buscar esta informaci\xF3n"}):s?r(u,{}):n(l,{children:[r("h1",{children:"Orders"}),r("h3",{children:e==null?void 0:e.message})]})};export{x as default};
