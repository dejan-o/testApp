(this.webpackJsonpmarvel_app=this.webpackJsonpmarvel_app||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),r=n(11),o=n.n(r),i=n(28),s=n(9);n(36);n(37);var u=function(e){var t=e.onChange;return Object(a.jsx)("input",{className:"search",type:"search",placeholder:"search characters",onChange:t})},l=(n(38),n(39),function(e){var t=e.element,n=e.onBookmarkChange,c=e.isBookmarked,r=t.thumbnail,o=t.name,i=r.path+"."+r.extension;return Object(a.jsxs)("figure",{className:"card",children:[Object(a.jsx)("div",{className:"card__img",children:Object(a.jsx)("img",{src:i,alt:"img"})}),Object(a.jsx)("figcaption",{className:"card__name",children:o}),Object(a.jsx)("button",{className:"card__bookmark ".concat(c?"bookmarked":null),onClick:function(){return n(c,t)},children:"bookmark"})]})}),j=function(e){var t=e.characters,n=e.onBookmarkChange,c=e.isBookmarkedFunction;return Object(a.jsx)("div",{className:"cardList",children:t.map((function(e){var t=c(e);return Object(a.jsx)(l,{element:e,isBookmarked:t,onBookmarkChange:n},e.id)}))})},h=n(62),d=n(64),m=n(65),f=(n(40),Object(h.a)((function(e){return{root:{"& > * + *":{marginTop:e.spacing(2)}}}})));function b(e){var t=e.page,n=e.handleChange,c=e.count,r=f();return Object(a.jsxs)("div",{className:r.root,children:[Object(a.jsxs)(d.a,{children:["Page: ",t]}),Object(a.jsx)(m.a,{count:c,page:t,onChange:n})]})}var O=function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.serialize,r=void 0===a?JSON.stringify:a,o=n.deserialize,i=void 0===o?JSON.parse:o,u=Object(c.useState)((function(){var n=window.localStorage.getItem(e);return n?i(n):"function"===typeof t?t():t})),l=Object(s.a)(u,2),j=l[0],h=l[1],d=Object(c.useRef)(e);return Object(c.useEffect)((function(){var t=d.current;t!==e&&window.localStorage.removeItem(t),d.current=e,window.localStorage.setItem(e,r(j))}),[j,r,e]),[j,h]}("marvel_characters"),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(""),l=Object(s.a)(o,2),h=l[0],d=l[1],m=Object(c.useState)(1),f=Object(s.a)(m,2),O=f[0],g=f[1],v=Object(c.useState)(0),p=Object(s.a)(v,2),k=p[0],x=p[1],C=Object(c.useState)([]),N=Object(s.a)(C,2),S=N[0],_=N[1];Object(c.useEffect)((function(){var e=!0,t=h.trim();if(t){var a=20*(O-1);fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=".concat("fca86e3537b62c5378f812c07e1786fa","&nameStartsWith=").concat(t,"&limit=20&offset=").concat(a)).then((function(e){return e.json()})).then((function(t){e&&(x(Math.ceil(t.data.total/20)),_(t.data.results))})).catch((function(e){_([])}))}else _([]),x(Math.ceil(n.length/20));return function(){return e=!1}}),[h,O]);var w=n.slice(20*(O-1),20*(O-1)+20);return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)("header",{className:"main-header",children:Object(a.jsx)("h1",{className:"main-header__title",children:"MARVEL CHARACTERS"})}),Object(a.jsx)(u,{onChange:function(e){g(1),d(e.target.value)}}),Object(a.jsx)(j,{characters:h?S:w,onBookmarkChange:function(e,t){e?(1===n.length&&x(0),r(n.filter((function(e){return t.id!==e.id})))):r([].concat(Object(i.a)(n),[t]))},isBookmarkedFunction:function(e){return n.some((function(t){return t.id===e.id}))}}),k?Object(a.jsx)(b,{handleChange:function(e,t){g(t)},page:O,count:k}):null]})};o.a.render(Object(a.jsx)(O,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.2ab81beb.chunk.js.map