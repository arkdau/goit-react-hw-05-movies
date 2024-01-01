"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[804],{29:function(e,r,t){function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}t.d(r,{Z:function(){return d}});var i=t(861),o=t(757),s=t.n(o),u="https://api.themoviedb.org/3";function l(e,r){return p.apply(this,arguments)}function p(){return p=(0,i.Z)(s().mark((function e(r,t){var n,a,i,o,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.timeout,a=void 0===n?8e3:n,i=new AbortController,o=setTimeout((function(){return i.abort()}),a),e.next=5,fetch(r,c(c({},t),{},{signal:i.signal}));case 5:return u=e.sent,clearTimeout(o),e.abrupt("return",u);case 8:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}var h={timeout:6e3,method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzIzM2M4MGM0Nzc1MTIzOTg3MTdmMjg3NjhlMTgwYSIsInN1YiI6IjY1ODEwOWY1ZDUxOTFmMDhjMGFkZDIxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zbDZtlAsmjePcU-Ywq0sHvtARqCNDqjMXVLE8WCg6_E"}};function f(){return(f=(0,i.Z)(s().mark((function e(r,t){var n,a,c,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n="",e.t0=r,e.next="trending"===e.t0?5:"movie"===e.t0?7:"images"===e.t0?9:"cast"===e.t0?11:"reviews"===e.t0?13:"query"===e.t0?15:17;break;case 5:return n="/trending/movie/day?language=en-US",e.abrupt("break",18);case 7:return n="/movie/".concat(t,"?language=en-US"),e.abrupt("break",18);case 9:return n="/movie/".concat(t,"/images"),e.abrupt("break",18);case 11:return n="/movie/".concat(t,"/credits"),e.abrupt("break",18);case 13:return n="/movie/".concat(t,"/reviews"),e.abrupt("break",18);case 15:return n="/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),e.abrupt("break",18);case 17:return e.abrupt("break",18);case 18:return a="".concat(u,"/").concat(n),e.next=21,l("".concat(a),h);case 21:if((c=e.sent).ok){e.next=24;break}throw new Error("Network response was not OK - HTTP error: ".concat(c.status));case 24:return e.next=26,c.json();case 26:return i=e.sent,e.abrupt("return",i);case 30:e.prev=30,e.t1=e.catch(0),console.error("There has been a problem with your fetch operation:",e.t1.message);case 33:case"end":return e.stop()}}),e,null,[[0,30]])})))).apply(this,arguments)}var d=function(e,r){return f.apply(this,arguments)}},804:function(e,r,t){t.r(r);var n=t(861),a=t(439),c=t(757),i=t.n(c),o=t(689),s=t(87),u=t(791),l=t(29),p=t(454),h=t(184);r.default=function(){var e=(0,o.UO)().movieId,r=(0,u.useState)(null),t=(0,a.Z)(r,2),c=t[0],f=t[1],d=(0,o.s0)();function v(){return b.apply(this,arguments)}function b(){return(b=(0,n.Z)(i().mark((function r(){var t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,l.Z)("movie",e);case 3:t=r.sent,f(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0.message);case 10:return r.prev=10,r.abrupt("return",1);case 13:case"end":return r.stop()}}),r,null,[[0,7,10,13]])})))).apply(this,arguments)}(0,u.useEffect)((function(){v()}),[]),(0,u.useEffect)((function(){v()}),[e]);return(0,h.jsxs)("main",{children:[c&&(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(u.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading page..."}),children:[(0,h.jsx)("button",{onClick:function(){return d(-1)},children:"Go back"}),(0,h.jsxs)(p.W,{children:[(0,h.jsx)(p.E,{src:"https://image.tmdb.org/t/p/w185/".concat(c.poster_path),alt:""}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("h2",{children:["Title: ",c.title," ","(",c.release_date.slice(0,4),")"]}),(0,h.jsxs)("p",{children:["User Score: ",c.vote_average]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:c.overview}),(0,h.jsx)("h4",{children:"Genres"}),(0,h.jsx)("p",{children:c.genres.map((function(e){return(0,h.jsx)("span",{children:e.name},e.id)}))})]})]})]})}),(0,h.jsx)(p.Hr,{}),(0,h.jsx)("p",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(s.rU,{to:"cast",children:"Cast"})},1),(0,h.jsx)("li",{children:(0,h.jsx)(s.rU,{to:"reviews",children:"Reviews"})},2)]}),(0,h.jsx)(p.Hr,{}),(0,h.jsx)(u.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading page..."}),children:(0,h.jsx)(o.j3,{})})]})}},454:function(e,r,t){t.d(r,{E:function(){return s},Hr:function(){return l},W:function(){return u}});var n,a,c,i=t(168),o=t(924),s=o.ZP.img(n||(n=(0,i.Z)(["\n  vertical-align: text-top;\n"]))),u=o.ZP.div(a||(a=(0,i.Z)(["\n   display: flex;\n   align-items: flex-start;\n   justify-content: flex-start;\n   gap: 12px;\n"]))),l=o.ZP.hr(c||(c=(0,i.Z)(["\n border:none;\n  height: 10px;\n \twidth: 100%;\n\theight: 25px;\n\tmargin-top: 0;\n\tborder-bottom: 1px solid #1f1209;\n\tbox-shadow: 0 10px 10px -10px #333;\n"])))},861:function(e,r,t){function n(e,r,t,n,a,c,i){try{var o=e[c](i),s=o.value}catch(u){return void t(u)}o.done?r(s):Promise.resolve(s).then(n,a)}function a(e){return function(){var r=this,t=arguments;return new Promise((function(a,c){var i=e.apply(r,t);function o(e){n(i,a,c,o,s,"next",e)}function s(e){n(i,a,c,o,s,"throw",e)}o(void 0)}))}}t.d(r,{Z:function(){return a}})}}]);
//# sourceMappingURL=804.b6dfb519.chunk.js.map