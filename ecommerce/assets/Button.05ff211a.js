import{s as t}from"./vendor.57fc9f09.js";import{j as e}from"./index.cd3b3ec6.js";const n=t.button`
  background: #FFF;
  border-radius: .3rem;
  border: 1px solid var(--blackOpacity);
  outline: none;
  padding: ${({page:r})=>r?".6rem":".1rem .2rem"};
  font-weight: bold;
  cursor: pointer;

  &:active { transform: scale(.96) }

  &:hover {
    background: ${({page:r})=>r?"var(--primary)":"var(--contrast)"};
    border: 1px solid var(--blackOpacity);
    color: ${({page:r})=>r?"var(--fontColor)":void 0};
  }
`,c=({value:r,label:o,page:a=!1})=>e(n,{"aria-label":o,page:a,children:r});export{c as B};
