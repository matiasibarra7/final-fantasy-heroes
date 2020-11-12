(this["webpackJsonpnahuel-react"]=this["webpackJsonpnahuel-react"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a(16),i=a.n(s),r=(a(23),a(8));a(24);var l=function(){return Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{className:"primary-navbar",children:[Object(n.jsx)(r.c,{exact:!0,to:"/nahuel-react-ff-api",className:"element",children:"Characters List"}),Object(n.jsx)(r.c,{to:"/nahuel-react-ff-api/section-2",className:"element",children:"Details"}),Object(n.jsx)(r.c,{to:"/nahuel-react-ff-api/section-3",className:"element",children:"Section 3"})]})})},j=a(6);a(30),a(31);var d=function(){var e=1;function t(){console.log("cont: ",e);var a=document.querySelectorAll(".banner-element");a.forEach((function(e){e.classList.remove("active")})),console.log("list.length: ",a.length),++e>a.length&&(e=1),a.length&&(a[e-1].classList.add("active"),setTimeout(t,5e3))}return Object(c.useEffect)((function(){console.log("in"),setTimeout(t,5e3)}),[]),Object(n.jsx)("div",{children:Object(n.jsxs)("figure",{className:"figure-banner",children:[Object(n.jsx)("img",{src:"/nahuel-react-ff-api/img/banner/ff-12.jpg",alt:"ff-12",className:"banner-element fade active"}),Object(n.jsx)("img",{src:"/nahuel-react-ff-api/img/banner/dissidia-villains.jpg",alt:"villains",className:"banner-element fade"}),Object(n.jsx)("img",{src:"/nahuel-react-ff-api/img/banner/tactics.jpg",alt:"ff-tactics",className:"banner-element fade"})]})})};var o=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(!1),l=Object(j.a)(i,2),o=l[0],m=l[1],b=Object(c.useState)([]),h=Object(j.a)(b,2),u=h[0],x=h[1],O=Object(c.useState)([]),f=Object(j.a)(O,2),p=f[0],g=f[1];return Object(c.useEffect)((function(){fetch("https://www.moogleapi.com/api/v1/characters").then((function(e){return e.json()})).then((function(e){o||g(e),document.querySelector(".container-zone").classList.remove("section-two"),m(!0),x(e)}),(function(e){m(!0),s(e)}))}),[]),a?Object(n.jsxs)("div",{children:["Error: ",a.message]}):o?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d,{}),Object(n.jsx)("div",{style:{fontWeight:"bold",paddingLeft:"1rem"},children:"*Need to fix filter and search combined"}),Object(n.jsxs)("div",{className:"filter-section",children:[Object(n.jsx)("button",{className:"feature-btn",onClick:function(){document.querySelector(".filter-section").classList.toggle("active")},children:Object(n.jsxs)("div",{className:"section-title",children:[Object(n.jsx)("i",{className:"fas fa-caret-right"}),Object(n.jsx)("i",{className:"fas fa-caret-down"})," Filter"]})}),Object(n.jsxs)("div",{className:"game-filter-container",onChange:function(){var e=Array.from(document.getElementsByName("game-filter")).filter((function(e){return e.checked})).map((function(e){return e.getAttribute("data-game-name")}));if(e.length){e.includes("Final Fantasy IV")&&e.push("Final Fantasy 04");var t=p.filter((function(t){return e.includes(t.origin)}));x(t)}else x(p)},id:"sagaFilter",children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("input",{type:"checkbox",name:"game-filter",id:"","data-game-name":"Final Fantasy"})," FF I"]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("input",{type:"checkbox",name:"game-filter",id:"","data-game-name":"Final Fantasy II"})," FF II"]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("input",{type:"checkbox",name:"game-filter",id:"","data-game-name":"Final Fantasy III"})," FF III"]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("input",{type:"checkbox",name:"game-filter",id:"","data-game-name":"Final Fantasy IV"})," FF IV"]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("input",{type:"checkbox",name:"game-filter",id:"","data-game-name":"Final Fantasy 05"})," FF V"]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("input",{type:"checkbox",name:"game-filter",id:"","data-game-name":"Final Fantasy 06"})," FF VI"]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("input",{type:"checkbox",name:"game-filter",id:"","data-game-name":"Final Fantasy 07"})," FF VII"]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("input",{type:"checkbox",name:"game-filter",id:"","data-game-name":"Final Fantasy 08"})," FF VIII"]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("input",{type:"checkbox",name:"game-filter",id:"","data-game-name":"Final Fantasy 09"})," FF IX"]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("input",{type:"checkbox",name:"game-filter",id:"","data-game-name":"Final Fantasy 10"})," FF X"]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("input",{type:"checkbox",name:"game-filter",id:"","data-game-name":"Final Fantasy 10-2"})," FF X-2"]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("input",{type:"checkbox",name:"game-filter",id:"","data-game-name":"Final Fantasy 12"})," FF XII"]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("input",{type:"checkbox",name:"game-filter",id:"","data-game-name":"Final Fantasy 13"})," FF XIII"]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("input",{type:"checkbox",name:"game-filter",id:"","data-game-name":"Final Fantasy 13-2"})," FF XIII-2"]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("input",{type:"checkbox",name:"game-filter",id:"","data-game-name":"Final Fantasy 15"})," FF XV"]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("input",{type:"checkbox",name:"game-filter",id:"","data-game-name":"Final Fantasy BE"})," FF BE"]})]})]}),Object(n.jsxs)("div",{className:"seeker-section",children:[Object(n.jsx)("button",{className:"feature-btn",onClick:function(){document.querySelector(".seeker-section").classList.toggle("active")},children:Object(n.jsxs)("div",{className:"section-title",children:[Object(n.jsx)("i",{className:"fas fa-search"})," Search"]})}),Object(n.jsx)("input",{className:"hero-seeker",id:"heroSeeker",onKeyUp:function(){var e=document.getElementById("heroSeeker").value.toLowerCase(),t=p.filter((function(t){return t.name.toLowerCase().includes(e)}));x(""!==e?t:p)},placeholder:"Type to search a Hero"})]}),Object(n.jsx)("div",{className:"characters-container",children:u.map((function(e){return Object(n.jsxs)(r.b,{to:"/nahuel-react-ff-api/section-2/".concat(e.id),className:"character-card",children:[Object(n.jsx)("figure",{className:"avatar",children:Object(n.jsx)("img",{src:e.pictures.length?e.pictures[0].url:"/nahuel-react-ff-api/img/no-picture.png",alt:e.name})}),Object(n.jsx)("div",{className:"name",children:e.name}),Object(n.jsx)("div",{className:"saga",children:e.origin})]},e.id)}))})]}):Object(n.jsx)("div",{className:"loader"})};a(32);var m=function(e){var t=Object(c.useState)(null),a=Object(j.a)(t,2),s=a[0],i=a[1],r=Object(c.useState)(!1),l=Object(j.a)(r,2),d=l[0],o=l[1],m=Object(c.useState)([]),b=Object(j.a)(m,2),h=b[0],u=b[1],x=Object(c.useState)([]),O=Object(j.a)(x,2),f=O[0],p=O[1];return Object(c.useEffect)((function(){fetch("https://www.moogleapi.com/api/v1/characters/".concat(e.match.params.id?e.match.params.id:"random")).then((function(e){return e.json()})).then((function(t){u(e.match.params.id?t:[t]),fetch("https://www.moogleapi.com/api/v1/games").then((function(e){return e.json()})).then((function(a){var n=e.match.params.id?t[0].origin:t.origin;n=function(e){switch(e){case"Final Fantasy":return"Final Fantasy 01";case"Final Fantasy II":return"Final Fantasy 02";case"Final Fantasy III":return"Final Fantasy 03";case"Final Fantasy IV":return"Final Fantasy 04";case"Final Fantasy BE":return"Final Fantasy Brave Exvius";default:return e}}(n);var c=a.filter((function(e){return e.title===n}));document.querySelector(".container-zone").classList.add("section-two"),o(!0),p(c)}),(function(e){o(!0),i(e)}))}),(function(e){o(!0),i(e)}))}),[]),s?Object(n.jsxs)("div",{children:["Error: ",s.message]}):d?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"character-container",children:[Object(n.jsx)("h2",{children:"Character's Details"}),e.match.params.id?"":Object(n.jsx)("div",{style:{fontWeight:"bold"},children:"Random character. If you are looking for one in particular, select it from the character list :) "}),h.length?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("figure",{className:"portrait",children:Object(n.jsx)("img",{src:h[0].pictures.length?h[0].pictures[0].url:"../img/no-picture.png",alt:h[0].pictures.length?h[0].name:"not-found"})}),Object(n.jsxs)("div",{className:"character-details",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"attr-title",children:"Name:"})," ",h[0].name]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"attr-title",children:"Description:"})," ",h[0].description?h[0].description:"None"]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"attr-title",children:"Gender:"})," ",h[0].gender]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"attr-title",children:"Job:"})," ",h[0].job]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"attr-title",children:"Origin:"})," ",h[0].origin]})]})]}):Object(n.jsx)("div",{children:"Cargando..."})]}),Object(n.jsx)("div",{className:"game-container",children:f.length?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{children:f[0].title}),Object(n.jsx)("figure",{style:{width:"100",maxWidth:"480px"},children:"Final Fantasy Brave Exvius"===f[0].title?Object(n.jsx)("img",{src:"../img/FF-BE.png",alt:"Final fantasy BE"}):Object(n.jsx)("img",{src:f[0].picture?f[0].picture:"../img/no-picture.png",alt:f[0].picture?f[0].title:"not-found",style:{width:"100%"}})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"attr-title",children:"Platform:"})," ",f[0].platform]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"attr-title",children:"Description:"})," ",f[0].description]})]}):Object(n.jsx)("div",{children:"Cargando..."})})]}):Object(n.jsx)("div",{className:"loader"})};var b=function(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),a=t[0],s=t[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{style:{textAlign:"center"},children:"Under construction..."}),Object(n.jsx)("figure",{style:{maxWidth:"360px",margin:"0 auto"},children:Object(n.jsx)("img",{src:"img/UC-Sign.png",alt:"Under construction...",style:{width:"100%"}})}),Object(n.jsxs)("div",{style:{display:"none"},children:[Object(n.jsxs)("p",{children:["You clicked ",a," times"]}),Object(n.jsx)("button",{onClick:function(){return s(a+1)},children:"Click me"})]})]})},h=a(2);var u=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("h1",{style:{textAlign:"center"},children:"Final Fantasy Heroes"}),Object(n.jsxs)("div",{className:"myGit",children:[Object(n.jsx)("div",{children:Object(n.jsx)("a",{href:"https://github.com/matiasibarra7",target:"_black",children:Object(n.jsx)("i",{className:"fab fa-github",style:{color:"black"}})})}),Object(n.jsx)("div",{children:Object(n.jsx)("a",{href:"https://linkedin.com/in/ibarra-nahuel-matias",target:"_black",children:Object(n.jsx)("i",{className:"fab fa-linkedin",style:{color:"#0e76a8"}})})})]}),Object(n.jsx)(l,{})]}),Object(n.jsx)("main",{className:"container-zone",children:Object(n.jsxs)(h.c,{children:[Object(n.jsx)(h.a,{path:"/nahuel-react-ff-api/section-2/:id",component:m}),Object(n.jsx)(h.a,{path:"/nahuel-react-ff-api/section-2",component:m}),Object(n.jsx)(h.a,{path:"/nahuel-react-ff-api/section-3",component:b}),Object(n.jsx)(h.a,{path:"/nahuel-react-ff-api",component:o})]})})]})};i.a.render(Object(n.jsx)(r.a,{children:Object(n.jsx)(u,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.39dba869.chunk.js.map