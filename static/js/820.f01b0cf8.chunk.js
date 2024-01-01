"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[820],{29:function(e,r,t){function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}t.d(r,{Z:function(){return b}});var o=t(861),u=t(757),i=t.n(u),s="https://api.themoviedb.org/3";function p(e,r){return l.apply(this,arguments)}function l(){return l=(0,o.Z)(i().mark((function e(r,t){var n,a,o,u,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.timeout,a=void 0===n?8e3:n,o=new AbortController,u=setTimeout((function(){return o.abort()}),a),e.next=5,fetch(r,c(c({},t),{},{signal:o.signal}));case 5:return s=e.sent,clearTimeout(u),e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}var f={timeout:6e3,method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzIzM2M4MGM0Nzc1MTIzOTg3MTdmMjg3NjhlMTgwYSIsInN1YiI6IjY1ODEwOWY1ZDUxOTFmMDhjMGFkZDIxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zbDZtlAsmjePcU-Ywq0sHvtARqCNDqjMXVLE8WCg6_E"}};function h(){return(h=(0,o.Z)(i().mark((function e(r,t){var n,a,c,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n="",e.t0=r,e.next="trending"===e.t0?5:"movie"===e.t0?7:"images"===e.t0?9:"cast"===e.t0?11:"reviews"===e.t0?13:"query"===e.t0?15:17;break;case 5:return n="/trending/movie/day?language=en-US",e.abrupt("break",18);case 7:return n="/movie/".concat(t,"?language=en-US"),e.abrupt("break",18);case 9:return n="/movie/".concat(t,"/images"),e.abrupt("break",18);case 11:return n="/movie/".concat(t,"/credits"),e.abrupt("break",18);case 13:return n="/movie/".concat(t,"/reviews"),e.abrupt("break",18);case 15:return n="/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),e.abrupt("break",18);case 17:return e.abrupt("break",18);case 18:return a="".concat(s,"/").concat(n),e.next=21,p("".concat(a),f);case 21:if((c=e.sent).ok){e.next=24;break}throw new Error("Network response was not OK - HTTP error: ".concat(c.status));case 24:return e.next=26,c.json();case 26:return o=e.sent,e.abrupt("return",o);case 30:e.prev=30,e.t1=e.catch(0),console.error("There has been a problem with your fetch operation:",e.t1.message);case 33:case"end":return e.stop()}}),e,null,[[0,30]])})))).apply(this,arguments)}var b=function(e,r){return h.apply(this,arguments)}},820:function(e,r,t){t.r(r);var n=t(861),a=t(439),c=t(757),o=t.n(c),u=t(791),i=t(87),s=t(29),p=t(184);r.default=function(){var e=(0,u.useState)(),r=(0,a.Z)(e,2),t=r[0],c=r[1],l=(0,u.useState)([]),f=(0,a.Z)(l,2),h=f[0],b=f[1],v=(0,i.lr)(),d=(0,a.Z)(v,2),m=d[0],g=d[1],y=m.get("query");(0,u.useEffect)((function(){y&&j(y)}),[]);function j(e){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Z)("query",r);case 3:t=e.sent,b(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:return e.prev=10,e.abrupt("return",1);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))).apply(this,arguments)}return(0,p.jsxs)("main",{children:[(0,p.jsx)("input",{placeholder:"Enter filter here",onChange:function(e){var r=e.target.value;c(r),g({query:r})}}),(0,p.jsx)("button",{onClick:function(e){e.preventDefault(),j(t)},children:"Search"}),(0,p.jsx)(u.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading page..."}),children:(0,p.jsx)("ul",{children:h.map((function(e){return(0,p.jsx)(i.rU,{to:"/search/movies/".concat(e.id),children:(0,p.jsx)("li",{children:e.title})},e.id)}))})})]})}},861:function(e,r,t){function n(e,r,t,n,a,c,o){try{var u=e[c](o),i=u.value}catch(s){return void t(s)}u.done?r(i):Promise.resolve(i).then(n,a)}function a(e){return function(){var r=this,t=arguments;return new Promise((function(a,c){var o=e.apply(r,t);function u(e){n(o,a,c,u,i,"next",e)}function i(e){n(o,a,c,u,i,"throw",e)}u(void 0)}))}}t.d(r,{Z:function(){return a}})}}]);
//# sourceMappingURL=820.f01b0cf8.chunk.js.map