import{D as t,a as o,j as r,_ as n,c as l,d as m}from"./index.cd3b3ec6.js";import{s as e,L as a,r as s,u as p,R as h,a as c}from"./vendor.57fc9f09.js";import{F as g,I as i}from"./FormFlex.b0e395a3.js";const v=e(t)`
  width: 70%;
  min-height: 28rem;
  background: var(--contrast);
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
`,O=e(g)`
  width: 66%;
  flex-direction: column;
  gap: 1.2rem;
  padding: .4rem;

  @media ( max-width: 820px ) {
    width: 80%;
  }

  @media ( max-width: 320px ) {
    width: 90%;
  }
`,F=e.div`
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
`,f=e(t)`
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
`,x=e(t)`
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
`,b=()=>o(x,{children:[r("span",{children:"Inicia sesi\xF3n con"}),r(a,{to:"https://google.com",target:"_blank",rel:"noopener noreferrer",children:r(i,{iconStyle:"fab",icon:"google"})}),r(a,{to:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:r(i,{iconStyle:"fab",icon:"facebook-f"})})]}),u=s.exports.lazy(()=>n(()=>import("./index.0cdbcf66.js"),["assets/index.0cdbcf66.js","assets/vendor.57fc9f09.js","assets/index.cd3b3ec6.js","assets/Form.5c60dab5.js","assets/Button.05ff211a.js","assets/FormFlex.b0e395a3.js"])),w=s.exports.lazy(()=>n(()=>import("./index.f3b24ac6.js"),["assets/index.f3b24ac6.js","assets/Form.5c60dab5.js","assets/Button.05ff211a.js","assets/vendor.57fc9f09.js","assets/index.cd3b3ec6.js","assets/FormFlex.b0e395a3.js"])),y=()=>{const d=p();return o(v,{children:[r(i,{iconStyle:"fas",icon:"arrow-alt-circle-left",handleClick:()=>d(-1)}),o(h,{children:[r(c,{path:l,element:r(u,{})}),r(c,{path:m,element:r(w,{})})]}),o(f,{children:[r("hr",{}),r("span",{children:"Or"})]}),r(b,{}),r(a,{to:"#",children:"Pol\xEDticas de privacidad"})]})};var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y});export{F as S,O as a,L as i};
