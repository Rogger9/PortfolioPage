import{s as c}from"./vendor.c609d83d.js";import{j as d}from"./index.360d6466.js";const e=c.button`
  background: #FFF;
  border-radius: .3rem;
  border: 1px solid var(--blackOpacity);
  outline: none;
  padding: ${({page:r})=>r?".6rem 1rem":".1rem .2rem"};
  font-weight: bold;
  cursor: pointer;
  color: var(--black);
  box-shadow:
    0 0 2px 1px var(--blackOpacity),
    inset 0 0 2px var(--blackOpacity)
  ;

  &:active { transform: scale(.96) }

  &:hover {
    background: ${({page:r})=>r?"var(--primary)":"var(--contrast)"};
    border: 1px solid var(--blackOpacity);
    color: ${({page:r})=>r?"var(--fontColor)":void 0};
  }
`,s=({value:r,label:o,page:a=!1,children:t})=>d(e,{"aria-label":o,page:a,children:r!=null?r:t});export{s as B};
