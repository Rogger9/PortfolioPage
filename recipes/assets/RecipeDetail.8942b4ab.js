var y=Object.defineProperty;var u=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var _=(r,s,e)=>s in r?y(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e,h=(r,s)=>{for(var e in s||(s={}))N.call(s,e)&&_(r,e,s[e]);if(u)for(var e of u(s))x.call(s,e)&&_(r,e,s[e]);return r};import{_ as n,j as t,a as l}from"./index.e0302d02.js";import{r as d,u as E}from"./vendor.2d1551c5.js";import{u as I,b as v}from"./useFetchHome.7f8346a0.js";const L=d.exports.lazy(()=>n(()=>import("./Button.56f69f42.js"),["assets/Button.56f69f42.js","assets/vendor.2d1551c5.js","assets/index.e0302d02.js","assets/index.257ab50f.css"])),P=d.exports.lazy(()=>n(()=>import("./RecipesCard.b6b675b6.js"),["assets/RecipesCard.b6b675b6.js","assets/index.e0302d02.js","assets/index.257ab50f.css","assets/vendor.2d1551c5.js"])),R=d.exports.lazy(()=>n(()=>import("./index.e0302d02.js").then(function(r){return r.b}),["assets/index.e0302d02.js","assets/index.257ab50f.css","assets/vendor.2d1551c5.js"])),O=()=>{const{id:r}=E(),s=v(r)+"b54911f91f424e27a7371e51c7bdb5d3",{status:e,info:p}=I([s]);if(e!=="resolved")return t(R,{});if(e==="rejected"||!p[0])return t("h1",{children:"Sorry! data not found"});const{data:m}=p[0],{summary:f,nutrition:a,instructions:g}=m;return l("div",{className:"grid place-items-center min-h-screen h-full py-16 px-2 md:p-8 gap-8",children:[t(L,{value:"Go Home",className:"absolute ",specificStyles:"absolute top-4 left-4",link:"/recipes"}),t(P,h({},m)),t("p",{dangerouslySetInnerHTML:{__html:f}}),l("section",{className:"grid md:grid-cols-2 w-full gap-4",children:[l("ul",{className:"grid grid-cols-2 gap-x-2",children:[t("h1",{className:"font-bold",children:"Ingrediets"}),a==null?void 0:a.ingredients.map(({id:i,name:o,amount:c,unit:b})=>l("li",{children:[o,": ",t("span",{children:c+b})]},i+o))]}),l("ul",{className:"grid grid-cols-2",children:[t("h1",{className:"font-bold",children:"Nutrients"}),a==null?void 0:a.nutrients.map(({name:i,amount:o,unit:c})=>l("li",{children:[i,": ",t("span",{children:o+c})]},i))]})]}),t("p",{dangerouslySetInnerHTML:{__html:g}})]})};export{O as default};