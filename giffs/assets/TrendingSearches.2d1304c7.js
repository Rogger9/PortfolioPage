import{L as o,r as n}from"./vendor.e9d19354.js";import{A as c,b as i}from"./Spinner.97432b2a.js";import{a as l,F as d,j as r}from"./index.1a3d3a41.js";const m=async()=>{const e=`${c}/trending/searches?api_key=${i}`,s=await(await fetch(e)).json(),{data:t}=s;return t},p=({name:e,options:a=[]})=>l(d,{children:[r("h4",{className:"titlePopularGifs",children:e}),r("ul",{className:"ulHome",children:a.map(s=>r("li",{children:r(o,{to:`/giffs/search/${s.trim().replace(/\s/g,"-")}`,className:"linkHome",children:s})},s))})]}),j=()=>{const[e,a]=n.exports.useState([]);return n.exports.useEffect(async()=>{const s=await m();a(s)},[]),r(p,{name:"Trends",options:e})};export{j as default};