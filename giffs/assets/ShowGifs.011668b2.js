import{_ as d,a as v,F as _,j as a}from"./index.61cbec1b.js";import{r as i}from"./vendor.e9d19354.js";import{a as x,u as b,S as R}from"./Spinner.4eb7f0a9.js";var g=h;function h(l,s,c){var r=null,e=null,t=function(){r&&(clearTimeout(r),e=null,r=null)},u=function(){var n=e;t(),n&&n()},o=function(){if(!s)return l.apply(this,arguments);var n=this,f=arguments,p=c&&!r;if(t(),e=function(){l.apply(n,f)},r=setTimeout(function(){if(r=null,!p){var m=e;return e=null,m()}},s),p)return e()};return o.cancel=t,o.flush=u,o}const j=i.exports.lazy(()=>d(()=>import("./ListOfGifs.848acf62.js"),["assets/ListOfGifs.848acf62.js","assets/ListOfGifs.76f91e18.css","assets/Gif.19041ca5.js","assets/Gif.aad898ff.css","assets/vendor.e9d19354.js","assets/index.61cbec1b.js","assets/index.b16f9d60.css"])),E=i.exports.lazy(()=>d(()=>import("./NoResultFound.f612d80c.js"),["assets/NoResultFound.f612d80c.js","assets/index.61cbec1b.js","assets/index.b16f9d60.css","assets/vendor.e9d19354.js"])),N=i.exports.lazy(()=>d(()=>import("./IconArrowUp.826dacb5.js"),["assets/IconArrowUp.826dacb5.js","assets/index.61cbec1b.js","assets/index.b16f9d60.css","assets/vendor.e9d19354.js"])),S=({params:l})=>{const{keyword:s}=l,{loading:c,gifs:r,setPage:e,noResultsFound:t}=x({keyword:s}),u=i.exports.useRef(),{isNearScreen:o}=b({distance:"360px",externalRef:c?null:u,once:!1}),n=i.exports.useCallback(g(()=>e(f=>f+1),200),[e]);return i.exports.useEffect(()=>{o&&n()},[n,o]),v(_,{children:[c?a(R,{}):v(_,{children:[!t&&a("h3",{className:"titlePopularGifs",children:decodeURI(s.replace(/[-]/g," "))}),a(N,{}),a(j,{gifs:r}),a("div",{id:"visor",ref:u})]}),t&&!c&&a(E,{keyword:s})]})};export{S as default};