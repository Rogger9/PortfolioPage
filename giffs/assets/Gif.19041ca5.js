import{r as o,u as f,L as t}from"./vendor.e9d19354.js";import{j as e,a as m}from"./index.61cbec1b.js";const d=({title:s,url:a,id:r,width:i,height:n})=>{const[c]=f();return e("div",{className:"gifs borderR",children:m(t,{to:`/gif/${r}`,className:"gifLink flex-center",children:[e("img",{loading:"lazy",className:"borderR imgGif",src:a,width:i,height:n,alt:s}),c!==`/gif/${r}`&&e("span",{className:"gifSpan flex-center",children:s})]})})};var p=o.exports.memo(d,(s,a)=>s.id===a.id);export{p as G};
