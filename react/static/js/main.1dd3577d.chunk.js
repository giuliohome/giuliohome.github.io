(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(4),c=n(0),u=n.n(c),o=n(3),i=n.n(o);n(11),n(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e){var t=e.children;return u.a.createElement("table",{cellSpacing:0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",{style:{width:70}},"ID"),u.a.createElement("th",{style:{width:50}},"Price"),u.a.createElement("th",{style:{width:50}},"Yield"))),u.a.createElement("tbody",null,t))}function d(e){var t=e.data,n=e.change;return u.a.createElement("tr",{className:n||""},u.a.createElement("td",null,t.id),u.a.createElement("td",null,Number(Math.round(t.price+"e2")+"e-2").toFixed(2)),u.a.createElement("td",null,Number(Math.round(t.yield+"e2")+"e-2").toFixed(2)))}var f=function(e){var t=function(e){return Object(c.useContext)(m)[e]}(e.id),n=function(e){var t=Object(c.useRef)([]),n=t.current[1]!==e;return Object(c.useEffect)(function(){n&&(t.current[0]=t.current[1],t.current[1]=e)}),n?t.current[1]:t.current[0]}(t),a=function(e){var t=Object(c.useRef)(),n=t.current!==e;return Object(c.useEffect)(function(){t.current=e}),n}(t),o=function(e){var t=Object(c.useState)(!1),n=Object(r.a)(t,2),a=n[0],u=n[1],o=Object(c.useRef)();function i(){o.current&&window.clearTimeout(o.current)}return Object(c.useEffect)(function(){return i},[]),[a,function(){i(),u(!0),o.current=window.setTimeout(function(){u(!1)},e)}]}(500),i=Object(r.a)(o,2),l=i[0],f=i[1];Object(c.useEffect)(function(){a&&f()});var h=n&&(n.price>t.price?"down":"up");return u.a.createElement(d,{data:t,change:l&&h})};n.d(t,"DataContext",function(){return m});var m=u.a.createContext();function h(e,t,n){return(e=Object(a.a)({},e))[t]={id:t,price:n,yield:n>0?5/n*100:0},e}function s(){return new Array(10).fill().map(function(){return Math.random().toString(36).substring(7)}).reduce(function(e,t){return h(e,t,83+18*Math.random())},{})}function w(){var e=Object(c.useState)(s),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object.keys(n),i=2e3*Math.random();return setTimeout(function(){var e=o.length,t=o[Math.min(Math.floor(Math.random()*e),e-1)];a(h(n,t,function(e){var t=Math.min(1.25,Math.pow(72/e,4));return Math.max(0,e+t*(Math.random()-(e-49)/100+(e>95?.01:-Math.pow(t,3))+(e>0&&Math.random()>e/101?10*(Math.random()-.5):0)))}(n[t].price)))},i),u.a.createElement(m.Provider,{value:n},u.a.createElement(l,null,o.map(function(e){return u.a.createElement(f,{key:e,id:e})})))}t.default=w;i.a.render(u.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.1dd3577d.chunk.js.map