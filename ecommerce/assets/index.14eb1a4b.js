import{D as i,a as o,j as e,_ as n,i as l,k as m}from"./index.360d6466.js";import{s as r,L as t,r as s,u as p,R as h,a as c}from"./vendor.c609d83d.js";import a from"./Icon.77b6499d.js";const g=r.form`
  width: 70%;
  min-height: 28rem;
  background: var(--contrast);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: .4rem;
  box-shadow:
    0 0 .2rem .08rem var(--contrast),
    inset 0 0 .1rem .12rem var(--primary)
  ;
  position: relative;
  padding: 1rem;

  & > svg { cursor: pointer; }

  & > svg:first-child {
    position: absolute;
    left: 0;
    top: 0;
    margin: 1rem;

    &:hover {
      opacity: .8;
      filter: drop-shadow(0 0 1px var(--blackOpacity));
    }
  }

  span > * { margin: 0 1rem; }
  span a {
    color: var(--primary);

    &:hover { opacity: .7; text-decoration: underline; }
  }

  @media (max-width: 580px) {
    width: 96%;
  }

  @media (max-width: 380px) {
    padding: .2rem;

    & > svg:first-child { margin: .6rem }

    h2 { font-size: 1.1rem; margin: .4rem 0; }
  }
`,S=r.form`
  width: 66%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.2rem;
  padding: .4rem;

  @media ( max-width: 820px ) {
    width: 80%;
  }

  @media ( max-width: 320px ) {
    width: 90%;
  }
`,O=r.div`
  position: relative;
  width: 90%;
  height: 2.4rem;

  label {
    position: absolute;
    background: var(--contrast);
    top: -.5rem;
    left: 1rem;
    color: var(--primary);
    font-size: .8rem;
    padding: 0 .3rem;
    cursor: text;
  }

  input {
    height: 100%;
    width: 100%;
    border-radius: .3rem;
    border: 1px solid var(--primary);
    outline: none;
    background: transparent;
    padding: 0 .4rem;
    color: var(--fontColor);

    &::placeholder { color: var(--fontColor) }

    &:focus { box-shadow: 0 0 4px var(--blackOpacity); }

    &:-webkit-autofill, &:-webkit-autofill:focus {
      box-shadow: 0 0 0 20px var(--contrast) inset;
      -webkit-text-fill-color: var(--fontColor);
      color: var(--fontColor);
      caret-color: var(--fontColor);
      font-size: .9rem;
    }

    &:-webkit-autofill:focus {
      box-shadow:
        0 0 0 20px var(--contrast) inset,
        0 0 4px var(--blackOpacity)
      ;
    }
  }
`,f=r(i)`
  width: 60%;
  position: relative;
  margin: 1rem 0;

  hr { width: 100%; }

  span {
    position: absolute;
    top: -.52rem;
    background: var(--contrast);
    padding: 0 .4rem;
    font-weight: bold;
  }
`,v=r(i)`
  height: 2rem;
  gap: 2rem;
  margin: 1rem 0;

  a {
    height: 2rem;
    width: 2rem;
    background: var(--primary);
    border-radius: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 .08rem .08rem var(--shadow);

    &:hover { background: var(--secundary); }

    &:active {
      box-shadow:
        0 0 .1rem var(--contrast),
        inset 0 0 .2rem var(--primary)
      ;
      opacity: .9;
    }
  }

  @media (max-width: 380px) {
    gap: 1rem;
  }
`,x=()=>o(v,{children:[e("span",{children:"Inicia sesi\xF3n con"}),e(t,{to:"https://google.com",target:"_blank",rel:"noopener noreferrer",children:e(a,{iconStyle:"fab",icon:"google"})}),e(t,{to:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:e(a,{iconStyle:"fab",icon:"facebook-f"})})]}),u=s.exports.lazy(()=>n(()=>import("./index.2e58fccb.js"),["assets/index.2e58fccb.js","assets/vendor.c609d83d.js","assets/index.360d6466.js","assets/Form.8c7a02f7.js","assets/Button.59224164.js","assets/Icon.77b6499d.js"])),b=s.exports.lazy(()=>n(()=>import("./index.0a5b292a.js"),["assets/index.0a5b292a.js","assets/Form.8c7a02f7.js","assets/Button.59224164.js","assets/vendor.c609d83d.js","assets/index.360d6466.js","assets/Icon.77b6499d.js"])),y=()=>{const d=p();return o(g,{children:[e(a,{iconStyle:"fas",icon:"arrow-alt-circle-left",handleClick:()=>d(-1)}),o(h,{children:[e(c,{path:l,element:e(u,{})}),e(c,{path:m,element:e(b,{})})]}),o(f,{children:[e("hr",{}),e("span",{children:"Or"})]}),e(x,{}),e(t,{to:"#",children:"Pol\xEDticas de privacidad"})]})};var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y});export{O as S,S as a,L as i};
