import{_ as m,j as c,L as x,a as l}from"./index.e0302d02.js";import{r as d}from"./vendor.2d1551c5.js";import{u as E,R as A,a as y}from"./useFetchHome.7f8346a0.js";const S=({recipesVegan:a=[],recipesRandom:o=[]})=>{const e={"Final price":0,"Average preparation time":0,"Average Health Score":0},t=[...a,...o],r=t==null?void 0:t.reduce((n,i)=>(n.price+=i.pricePerServing*i.servings,n.time+=i.readyInMinutes,n.health+=i.healthScore,n),{price:0,time:0,health:0});let s=t.length;return s===0&&(s=1),e["Final price"]=r.price.toFixed(2),e["Average preparation time"]=(r.time/s).toFixed(2),e["Average Health Score"]=(r.health/s).toFixed(2),{dataResume:e}},I=(a,{vegan:o,random:e})=>d.exports.useMemo(()=>a.forEach(({data:{results:t,recipes:r}})=>t&&!r?o(t):e(r)),[a]),L=d.exports.lazy(()=>m(()=>import("./Header.dacbc595.js"),["assets/Header.dacbc595.js","assets/index.e0302d02.js","assets/index.257ab50f.css","assets/vendor.2d1551c5.js","assets/messagesError.defc70a8.js","assets/useFetchHome.7f8346a0.js"])),h=d.exports.lazy(()=>m(()=>import("./ListOfRecipes.16b9acca.js"),["assets/ListOfRecipes.16b9acca.js","assets/RecipesCard.b6b675b6.js","assets/index.e0302d02.js","assets/index.257ab50f.css","assets/vendor.2d1551c5.js"])),b=d.exports.lazy(()=>m(()=>import("./ExtraInformation.8d9ac1dc.js"),["assets/ExtraInformation.8d9ac1dc.js","assets/index.e0302d02.js","assets/index.257ab50f.css","assets/vendor.2d1551c5.js"])),P=A+"b54911f91f424e27a7371e51c7bdb5d3",F=y+"b54911f91f424e27a7371e51c7bdb5d3",H=()=>{const[a,o]=d.exports.useState([]),[e,t]=d.exports.useState([]),{status:r,info:s}=E([P,F]);I(s,{vegan:o,random:t});const n=a==null?void 0:a.length,i=e==null?void 0:e.length,{dataResume:f}=S({recipesVegan:a,recipesRandom:e}),p=(g,_)=>{const u=R=>[...R].filter(v=>v.id!==g);_&&o(u),t(u)};return r!=="resolved"?c(x,{}):r==="rejected"?c("h1",{children:"Sorry! data not found"}):l("div",{className:"bg-cyan-50 grid auto-rows-fr min-h-screen h-full w-full text-center overflow-hidden",children:[c(L,{veganAmount:n,randomAmount:i,setRecipesVegan:o,setRecipesRandom:t}),l("main",{className:"row-span-6 grid lg:grid-cols-5",children:[l("div",{className:"col-span-4 grid place-items-center items-start lg:grid-cols-2 py-4 sm:px-2 gap-8 overflow-y-auto",children:[c(h,{type:"Random",data:e,handleClick:p}),c(h,{type:"Vegan",data:a,handleClick:p})]}),c(b,{data:f})]})]})};export{H as default};