import{r as o,s as r}from"./vendor.c609d83d.js";import{G as s,a as c}from"./index.1a48ca89.js";import{D as t}from"./index.89b498a4.js";const p=()=>{const{products:a,setProducts:e}=o.exports.useContext(s);return{products:a,setProducts:e}},l=r(c)`
  margin: 3rem 1rem;
  flex-wrap: wrap;
  gap: 4rem;
`,m=r(t)`
  width: 20rem;
  background: var(--contrast);
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-radius: .3rem;
  gap: .6rem;
  transition: transform .2s ease-in-out;
  box-shadow:
    0 0 6px var(--blackOpacity),
    inset 0 0 6px var(--blackOpacity)
  ;

  img {
    border-radius: .2rem;
    object-fit: contain;
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 { color: var(--green); }

  &:hover {
    box-shadow:
    0 0 12px var(--blackOpacity),
    inset 0 0 6px var(--blackOpacity)
  ;
  }
`,x=r(t)`
  height: 100%;
  flex-direction: column;
  gap: 2rem;

  h1 {
    background: var(--contrast);
    color: var(--white);
    padding: 1rem 4rem;
    border-radius: 2rem;
    box-shadow: 0 0 2px 1px var(--contrast),
    inset 0 0 6px var(--blackOpacity);
  }
`;export{l as S,x as a,m as b,p as u};
