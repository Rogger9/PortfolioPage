var d=Object.defineProperty;var a=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var o=(t,s,e)=>s in t?d(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,r=(t,s)=>{for(var e in s||(s={}))l.call(s,e)&&o(t,e,s[e]);if(a)for(var e of a(s))m.call(s,e)&&o(t,e,s[e]);return t};import{r as x}from"./vendor.e9d19354.js";import{G,a as n,F as j,j as g}from"./index.1a3d3a41.js";import{G as p}from"./Gif.54eebb49.js";const u=()=>{const{gifs:t}=x.exports.useContext(G);return t},F=({params:t})=>{const{id:s}=t,i=u().find(c=>c.id===s),{title:f}=i;return n(j,{children:[n("h3",{className:"titleDetail",children:["Name: ",f]}),g(p,r({},i))]})};export{F as default};