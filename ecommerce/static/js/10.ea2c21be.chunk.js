(this["webpackJsonpecommerce-app"]=this["webpackJsonpecommerce-app"]||[]).push([[10],{63:function(n,r,e){"use strict";e.r(r);var t,o=e(0),a=e(1),i=e(13),c=e(9),s=e(36),d=e(43),l=e(3),m=function(){return Object(l.jsxs)("div",{className:"otherLoginOption",children:[Object(l.jsx)("span",{children:Object(l.jsx)("strong",{children:"Inicia sesi\xf3n con"})}),Object(l.jsx)("a",{href:"https://google.com",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(s.a,{icon:d.c})}),Object(l.jsx)("a",{href:"https://facebook.com",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(s.a,{icon:d.a})})]})},b=e(37),h=e(38),p=e(39).a.div(t||(t=Object(h.a)(["\n  display: grid;\n  grid-column: 1 / -1;\n  grid-row: 1 / -1;\n\n  place-content: center;\n  place-items: center;\n\n  grid: 70% / minmax(28rem, 60%);\n\n  & .boxForm {\n    width: 100%;\n    background: var(--contrast);\n    border-radius: .4rem;\n    box-shadow:\n      0 0 .2rem .08rem var(--contrast),\n      inset 0 0 .1rem .12rem var(--primary)\n    ;\n    position: relative;\n    padding: .2rem .2rem .8rem .2rem;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n\n    & button:first-child {\n      position: absolute;\n      left: 0;\n      background: transparent;\n      border: none;\n      color: var(--fontColor);\n      margin: .2rem .4rem;\n      font-size: 1.2rem;\n      cursor: pointer;\n\n      &:hover {\n        opacity: .9;\n      }\n    }\n\n    & form {\n\n      width: 50%;\n      padding: .4rem;\n\n      & .inputsContainer {\n        position: relative;\n        height: 2.4rem;\n        margin: 1.4rem 0;\n\n        & label {\n          position: absolute;\n          background: var(--contrast);\n          top: -.5rem;\n          left: 1rem;\n          color: var(--primary);\n          font-size: .8rem;\n          padding: 0 .3rem;\n          cursor: text;\n        }\n\n        & input {\n          height: 100%;\n          width: 100%;\n          border-radius: .2rem;\n          border: 2px solid var(--primary);\n          outline: none;\n          background: transparent;\n          /* box-shadow: 0 0 .1rem .1rem var(--primary); */\n          padding: 0 .4rem;\n          color: var(--fontColor);\n\n          &::placeholder {\n            color: var(--fontColor)\n          }\n\n          &:focus {\n            box-shadow: 0 0 4px var(--primary);\n          }\n\n          &:-webkit-autofill, &:-webkit-autofill:focus {\n            box-shadow: 0 0 0 20px var(--contrast) inset;\n            -webkit-text-fill-color: var(--fontColor);\n            color: var(--fontColor);\n            caret-color: var(--fontColor);\n            font-size: .9rem;\n          }\n\n          &:-webkit-autofill:focus {\n            box-shadow:\n              0 0 0 20px var(--contrast) inset,\n              0 0 4px var(--primary)\n            ;\n          }\n        }\n      }\n\n      & button {\n        height: 2.4rem;\n        background: var(--primary);\n        color: var(--fontColor);\n        border-radius: .2rem;\n        border: none;\n        padding: 0 .4rem;\n        cursor: pointer;\n\n        &:hover {\n          background: var(--secundary);\n        }\n\n        &:active {\n          box-shadow: 0 0 .1rem .1rem var(--shadow);\n          opacity: .9;\n        }\n\n      }\n\n      @media ( max-width: 600px ) {\n        width: 80%;\n      }\n    }\n\n    & .textRedirect {\n      display: flex;\n      gap: 1rem;\n      margin: .5rem 0;\n\n      a {\n        color: var(--primary);\n\n        &:hover {\n          color: var(--secundary);\n        }\n      }\n    }\n\n    & .lineDivisor {\n      width: 60%;\n      position: relative;\n      margin: 1rem 0;\n      display: flex;\n      justify-content: center;\n\n      hr {\n        width: 100%;\n      }\n\n      span {\n        position: absolute;\n        top: -.52rem;\n        background: var(--contrast);\n        padding: 0 .4rem;\n      }\n    }\n\n    .otherLoginOption {\n      height: 2rem;\n      display: flex;\n      align-items: center;\n      gap: 1.4rem;\n      margin: 1.6rem 0;\n\n      & > a {\n        height: 2rem;\n        width: 2rem;\n        background: var(--primary);\n        border-radius: .2rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        box-shadow: 0 0 .08rem .08rem var(--shadow);\n\n        &:hover {\n          background: var(--secundary);\n        }\n\n        &:active {\n          box-shadow:\n            0 0 .1rem var(--contrast),\n            inset 0 0 .2rem var(--primary)\n          ;\n          opacity: .9;\n        }\n      }\n    }\n\n    & > a:last-child {\n      color: blue;\n      text-decoration: underline;\n\n      &:visited {\n        color: darkorchid;\n      }\n    }\n  }\n\n  @media (max-width: 380px) {\n    grid: 70% / 24rem\n  }\n\n  @media (max-width: 320px) {\n    grid: 70% / 19rem\n  }\n"]))),j=Object(o.lazy)((function(){return e.e(5).then(e.bind(null,58))})),x=Object(o.lazy)((function(){return e.e(6).then(e.bind(null,59))}));r.default=function(){var n=Object(a.f)();return Object(l.jsx)(p,{children:Object(l.jsxs)("div",{className:"boxForm",children:[Object(l.jsx)("button",{onClick:function(){return n.goBack()},children:Object(l.jsx)(s.a,{icon:b.g})}),Object(l.jsxs)(a.a,{path:c.c,children:[Object(l.jsx)("h2",{children:"Iniciar Sesi\xf3n"}),Object(l.jsx)(j,{}),Object(l.jsxs)("div",{className:"textRedirect",children:[Object(l.jsx)("span",{children:"\xbfYa est\xe1s registrado?"}),Object(l.jsx)(i.b,{to:c.d,children:"Reg\xedstrate"})]})]}),Object(l.jsxs)(a.a,{path:c.d,children:[Object(l.jsx)("h2",{children:"Registrarse"}),Object(l.jsx)(x,{})]}),Object(l.jsxs)("div",{className:"lineDivisor",children:[Object(l.jsx)("hr",{}),Object(l.jsx)("span",{children:Object(l.jsx)("strong",{children:"Or"})})]}),Object(l.jsx)(m,{}),Object(l.jsx)("a",{href:"#",rel:"noopener",children:"politicas de privacidad"})]})})}}}]);
//# sourceMappingURL=10.ea2c21be.chunk.js.map