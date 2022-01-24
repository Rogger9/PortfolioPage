import{s as r,L as g,r as B}from"./vendor.c609d83d.js";import{D as c,j as A,$ as p,f as m,a as e}from"./index.0b240d60.js";import s from"./Icon.26cab0f1.js";import{B as n}from"./Button.4fe55535.js";import{a as F,G as b}from"./index.0b623121.js";const E=r(F)`
  margin: 3rem 1rem;
  flex-wrap: wrap;
  gap: 4rem;
`,j=r(c)`
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
`,y=r(c)`
  height: 100%;
  flex-direction: column;
  gap: 2rem;
`;var Q="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAABDFtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgACAAAAAARVAAEAAAAAAAAAHAABAAAAAARxAAEAAAAAAAAH4AAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAADcGlwcnAAAANKaXBjbwAAAqxjb2xycHJvZgAAAqBsY21zBDAAAG1udHJSR0IgWFlaIAfmAAEAEwABABsAM2Fjc3BBUFBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWRlc2MAAAEgAAAAQGNwcnQAAAFgAAAANnd0cHQAAAGYAAAAFGNoYWQAAAGsAAAALHJYWVoAAAHYAAAAFGJYWVoAAAHsAAAAFGdYWVoAAAIAAAAAFHJUUkMAAAIUAAAAIGdUUkMAAAIUAAAAIGJUUkMAAAIUAAAAIGNocm0AAAI0AAAAJGRtbmQAAAJYAAAAJGRtZGQAAAJ8AAAAJG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAJAAAABwARwBJAE0AUAAgAGIAdQBpAGwAdAAtAGkAbgAgAHMAUgBHAEJtbHVjAAAAAAAAAAEAAAAMZW5VUwAAABoAAAAcAFAAdQBiAGwAaQBjACAARABvAG0AYQBpAG4AAFhZWiAAAAAAAAD21gABAAAAANMtc2YzMgAAAAAAAQxCAAAF3v//8yUAAAeTAAD9kP//+6H///2iAAAD3AAAwG5YWVogAAAAAAAAb6AAADj1AAADkFhZWiAAAAAAAAAknwAAD4QAALbEWFlaIAAAAAAAAGKXAAC3hwAAGNlwYXJhAAAAAAADAAAAAmZmAADypwAADVkAABPQAAAKW2Nocm0AAAAAAAMAAAAAo9cAAFR8AABMzQAAmZoAACZnAAAPXG1sdWMAAAAAAAAAAQAAAAxlblVTAAAACAAAABwARwBJAE0AUG1sdWMAAAAAAAAAAQAAAAxlblVTAAAACAAAABwAcwBSAEcAQgAAAAxhdjFDgQAcAAAAABRpc3BlAAAAAAAAAPAAAACgAAAADnBpeGkAAAAAAQgAAAA4YXV4QwAAAAB1cm46bXBlZzptcGVnQjpjaWNwOnN5c3RlbXM6YXV4aWxpYXJ5OmFscGhhAAAAAAxhdjFDgQAMAAAAABRpc3BlAAAAAAAAAPAAAACgAAAAEHBpeGkAAAAAAwgICAAAAB5pcG1hAAAAAAAAAAIAAQSBhgeIAAIEggOEhQAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAIBG1kYXQSAAoGGB3759pUMhASAAAAUAQCmFZGYKhScQQFEgAKChgd++faIEBA0IAyzw8SAAWWKAFHSUC0gbEzEZAp9Dkdox7t+afHiE4oBWnjtM+Monh+hYw8imen7e9pWMZ5oqpjQR6jyHeHGmLAeKK2WjTJ+lrM48wNT3A5LmvNlJGeQlXjiQYdQlkREGfiuIOpdqOj1vi2bOlKvOdOa74xWo20bqKIHLz3WvI30S6RIdtrvdvMEVlSuN5kB0hT29gFRAWaF2wu3v7HpnQM0VQUh2dpJ5WLDAVasYx15NJqeeWZ+kWc0Dd+301uzFoulsqZGTtkOuIV/849U31L1QFuXCV63MGghLRvN3wr7sS+wlkzH/m3UZX32EcsyhNGyM78yLC/i4U0Nc7Lk9snR+RL3XRGuLP9Bauv5PVIrHPg3VfCmSVm7cXFAYDbSFeMWktvCvTbWi0Kqqv+FUmBVq5GGslhtFxudAx63uR62vMq2bdj6av/D3Ele9yHexvKbzq3spYahkcyCI4x+rDhRNPZQ9EkYggBKGuVFBzxKKq/B0d5zvPg74Y8GBL6T136Z2Tk3ZJ+ngGhcBYBTYKqTmhlU+mq/CVEboJ5/gy+3i6rY4j+JVSGbVtn0mGN5Ne0VHBk+9QkObf73VroWSXnSOKIoD7CgBp2p6ZCELJP/ezc8QKA7Q+ORjAoEflxwmN+Q9LCtV7+AwkINHrTNh5BfFvgtYBfyZ6OTy4u2S8LaB6lGpQ1ofAhnD58u5nHiXozQAFzzkkoaNUtsMXOMj2h69uz67XssAG5exalm/cpwxgxEZj6lToFVs3O0ief7QqepAT9tJ4Fe7veTIeVfWlA2G8nwDYwvpD4iGCdCd+ytG0w7mL4EZs96Ysx6YU2ErWM+1EUShwWDx/Ls2FSfl/93++0G5cAscu2r9qG6ru8+xPS+wJ8RhIqU1ZYF2grhcfFPSmp9vLlZpF894LK5NvwPW11hQF0IvDUNIl3ojmgi9EaMFIAO4pBjXd+2zG3XMSaR2o36ia39T7YR1mGqthbFjY5ORLmUx6SyJ8BPKL965+i/8IA5UnbpgKkkOF/2Zr+Ls2niiUr3UxlbShLGwbjvYeigHY2B+T1e5eoaX2sgWsqgc90JeOQAIBgd1YHU0rq07FXP4EZoTubkcL7fD//u3sgORmpvYnYbi1NFo6M+HRYwuFrXQVVov6UJCZVc5gXVW+CghUMAXEx6NvoO3DmjukyxGOYJy8090oXUE9hmj2shqopo7p1Xc4+QPV3p+XQnFBjca4djIBJtveeO+4bw3NTro70zfB+R+bH4GjZtAtZoY1KrHQP6c7BJdJ14PU5NVG4aFmcyZMMoYr0C8PWAauKb01eVQlAtYmDPbWwJCPz/rd+6uyPihmI6iuD+ZNLZxfn+rbywjW9KuvOB0LrJxj8dVbXQHggjXZEfrQnrjL1nElqJwzDDACmiu7YhJW8kV2lfC/AeweLkonyjaE7j+pX0/nYY7sXYQZ5QKIDdWmyFh1RObmlNZgsMeHfTqAZN8duN93auz9XdlolyGaxSYVE2whN5AgsAwU+NYQbtc6sTNJQmyJjXat/5TiO+gTUSCTEP53+ykUWWGC0zVw+ubH/gsZmY6QNh/q7+NJAMme73iaZi9GuqWEW6fU8TcmZoUi1/EQ0EnyYWpnYGwRthdm1jGB7Nckrvvz8FKQJ/HJiC8SCMebhL0kHeXfMNdA6jLMhDyaRC9LMgZxpdXgrTadRs5jqhu6TU7jqfJbt/ag4oHBB9EN+Bj5fBbUW9tgDspFn4/HeA+R9zXupDyr6B2OUPyz9F9gfUokjbcbwnec9teM3wtdjg9+etfHAgq/LPjNI3fpcBHN4s6dndBDgPRGv+2VWrTyD6dmDGvqI6kjC/CdH9apy+T3DCFng3iNEOln79EuFeaTpmcP1R7x7C+EGPPZffeUeqoP1gy9lSPnFdaMPtyMAEK7pGMI00WKgxAVvJCQxq3Q39ihjGEyyKrKcY1No36YOGlobWJ+1O1EdJbB2fDqoSDMwGl85U9tjVAhyFmfxT1WiW0Sd+dW+rSe1VnIeAaPL8jLZZWvvK3ym/DefHEO0a4b5ZJaF5PZlvGJyZ5fFlyOmYKP53x7hlUeozPeHqhOYIwsVoqObnMY71HmUtilfWCo24/8hZV/d2v4vhf1pqGMh3Vq9Jn58CdCj8MBBLy74poKXqQWCj0HhpyL2WvvtcljqdJ0DF8Pf8eQILe4Syy+p/SGfBOiDq5lw6fORJHoCiKqGYhud5EMItr7lhN4g3W1xUlVXr7lvgoklbqxE2zKSWMwEFnAp6ZkEQbr88hvTKKJtC194OQVbDfRtIhmOb/DEKYYt4ooGddajjtcF9XRFDY/14LsaDZF0X/bNYVwuKb0eItqbLq5VAz/rLM9SYr6I60yXZ5Qu/Y6LNNiTH/0s4XZ29dzRBk2vJMF9CaFHA+gqBvrS8EJDYorcATWEdginHcky4FJW+E7kFq84qM2p72VMTRjK4jHepnRc8HirIedugEe6AHxwK7u8QHkjV1EDFjMvL/9jiIe6j+cDDSa0/jo/x3jCys/y6Xr92F7HoZkq4gCVrWDKauivioNmrlQyKWHQVJHneZrt4kAFlbBXuCJ72DXj/oHfOT6MLTUhFKP3wBW6r3HXbO+cvsDnSkfcQ/688kZGye5G7QDQDqNItyFwphAY/8dFnhtGkLV1s80AGeKPXkys";const f=({id:o,name:t,description:d,imageURL:a="",price:i,stock:l,category:h})=>{const G=a!==""?a:Q;return A(g,{to:`${p+m}/${o}`,children:e(j,{children:[e("header",{children:[A("h2",{children:t}),A("p",{children:d})]}),A("img",{src:G,alt:t,width:"240",height:"160"}),e("h3",{children:["$",i]}),e("span",{children:[A("b",{children:"Category:"})," ",h]}),e("footer",{children:[A(n,{label:"iconHeart",page:!0,children:A(s,{iconStyle:"fas",icon:"heart"})}),e("span",{children:["Stock: ",l]}),A(n,{label:"iconShopping",page:!0,children:A(s,{iconStyle:"fas",icon:"shopping-cart"})})]})]})})},M=()=>{const{products:o,setProducts:t}=B.exports.useContext(b);return{products:o,setProducts:t}};export{f as P,E as S,y as a,M as u};
