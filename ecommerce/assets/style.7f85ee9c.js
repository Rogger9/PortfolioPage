import{r as t,s as r}from"./vendor.c609d83d.js";import{G as s,a as d}from"./index.4b0a0dd8.js";import{D as e}from"./index.360d6466.js";const p=()=>{const{products:a,setProducts:o}=t.exports.useContext(s);return{products:a,setProducts:o}},m=r(d)`
  margin: 3rem 0;
  flex-wrap: wrap;
  gap: 4rem;
`,x=r(e)`
  width: 20rem;
  background: var(--contrast);
  color: var(--black);
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-radius: .3rem;
  gap: .6rem;
  transition: transform .2s ease-in;
  box-shadow:
    0 0 5px var(--shadow),
    inset 0 0 6px var(--shadow)
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

    button {
      &:hover { box-shadow: 0 0 2px var(--primary); border: 1px solid transparent; }
    }
  }

  h3 { color: var(--green); }

  &:hover {
    box-shadow:
      inset 0 0 6px var(--secundary)
    ;
  }
`,u=r(e)`
  height: 100%;
  flex-direction: column;
  gap: 2rem;

  h1 {
    background: var(--secundary);
    padding: 1rem 4rem;
    border-radius: 2rem;
    box-shadow: 0 0 4px 1px var(--shadow),
    inset 0 0 12px var(--primary);
  }
`;export{m as S,u as a,x as b,p as u};
