(this["webpackJsonpmultiplayer-maze-web"]=this["webpackJsonpmultiplayer-maze-web"]||[]).push([[0],{26:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),i=n(18),o=n.n(i),u=(n(26),n(20)),s=n(2),l=n(7),f=n.n(l),h=n(8),x=n(10),b=n(19),j=n(12);!function(e){e[e.TOP=1]="TOP",e[e.RIGHT=2]="RIGHT",e[e.DOWN=4]="DOWN",e[e.LEFT=8]="LEFT"}(r||(r={}));var v,d,p={r:0,c:0},O=[r.TOP,r.RIGHT,r.DOWN,r.LEFT],m=1e9*Math.random();function g(e){return e===r.TOP?r.DOWN:e===r.RIGHT?r.LEFT:e===r.DOWN?r.TOP:r.RIGHT}function w(e,t){return 0!==(e&t)}function T(e,t,n){var r=t.r,c=t.c;w(e[r][c],n)&&(e[r][c]^=n)}function y(e,t){return new Array(e).fill([]).map((function(){return new Array(e).fill(t)}))}function N(e){m=e||1e9*Math.random()}function k(){if(!m)return Math.random();var e=1e5*Math.sin(m);return m++,e-Math.floor(e)}function P(){var e=[r.TOP,r.RIGHT,r.DOWN,r.LEFT];return function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(k()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}}(e),e}function I(e,t){var n=function(e){return e===r.TOP?[-1,0]:e===r.RIGHT?[0,1]:e===r.DOWN?[1,0]:[0,-1]}(t);if(!n)throw new Error("Delta not found.");return{r:e.r+n[0],c:e.c+n[1]}}function M(e,t){var n=t.r,r=t.c;return n<0||r<0||n>=e.length||r>=e[0].length}function S(e){var t=e.r,n=e.c;return d[t][n]}function E(e){var t=e.r,n=e.c;d[t][n]=!0}function F(e,t){return D.apply(this,arguments)}function D(){return(D=Object(h.a)(f.a.mark((function e(t,n){var r,c,a,i,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=P(),E(t),!n){e.next=5;break}return e.next=5,n(v,t);case 5:c=Object(j.a)(r),e.prev=6,c.s();case 8:if((a=c.n()).done){e.next=18;break}if(i=a.value,o=I(t,i),M(v,o)||S(o)){e.next=16;break}return T(v,t,i),T(v,o,g(i)),e.next=16,F(o,n);case 16:e.next=8;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),c.e(e.t0);case 23:return e.prev=23,c.f(),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[6,20,23,26]])})))).apply(this,arguments)}function G(e){return R.apply(this,arguments)}function R(){return(R=Object(h.a)(f.a.mark((function e(t){var n,r,c,a=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},r=n.userSeed,c=n.onUpdate,v=y(t,15),d=y(t,!1),N(r),e.next=7,F(p,c);case 7:return e.abrupt("return",v);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=0,H=0,L=-1,W=-1;function z(e){return new Promise((function(t){return setTimeout(t,e)}))}function U(e){if(!e)throw new Error("Canvas is not defined.");var t=e.height,n=e.width,r=e.getContext("2d");if(!r)throw new Error("Unable to get context.");return{context:r,height:t,width:n}}function A(e){return H+e*W}function B(e){return C+e*W}function J(e,t,n){var c=t.r,a=t.c;e.beginPath(),e.strokeStyle="#000000",n===r.TOP||n===r.LEFT?e.moveTo(A(c),B(a)):e.moveTo(A(c+1),B(a+1)),n===r.TOP||n===r.RIGHT?e.lineTo(A(c),B(a+1)):e.lineTo(A(c+1),B(a)),e.closePath(),e.stroke()}function q(e,t,n){var r=n.r,c=n.c;e.clearRect(A(r),B(c),L,L);var a,i=Object(j.a)(O);try{for(i.s();!(a=i.n()).done;){var o=a.value;w(t,o)&&J(e,{r:r,c:c},o)}}catch(u){i.e(u)}finally{i.f()}}function Q(e,t){e.beginPath(),e.fillStyle="#FF0000";var n=t.r,r=t.c;e.moveTo(A(n)+1,B(r)+1),e.lineTo(A(n)+1,B(r+1)-1),e.lineTo(A(n+1)-1,B(r+1)-1),e.lineTo(A(n+1)-1,B(r)+1),e.closePath(),e.fill()}function K(e,t){if(!t||!function(e){if(!e)return!1;if(0===e.length)return!1;var t=e.length;return-1!==e.reduce((function(e,t){return t&&t.length===e?e:-1}),t)}(t))throw new Error("Grid not valid");var n=U(e),r=n.context,c=n.height,a=n.width;!function(e,t,n){L=Math.min(e,t)-20,W=L/n.length,H=(t-L)/2,C=(e-L)/2}(a,c,t),r.clearRect(0,0,a,c),function(e){L>0&&(e.beginPath(),e.moveTo(C,H),e.lineTo(C+L,H),e.lineTo(C+L,H+L),e.lineTo(C,H+L),e.closePath(),e.stroke())}(r);for(var i=0;i<t.length;i++)for(var o=0;o<t[0].length;o++)q(r,t[i][o],{r:i,c:o})}function V(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n=U(e),r=n.context;return function(){var n=Object(h.a)(f.a.mark((function n(c,a){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return K(e,c),Q(r,a),n.next=4,z(t);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}var X=n(1);function Y(e,t){return function(n){var r=n.target.value;r&&!t(parseInt(r,10))||e(r)}}var Z=function(){var e=Object(c.useRef)(null),t=Object(c.useState)("10"),n=Object(x.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)("10"),o=Object(x.a)(i,2),u=o[0],s=o[1],l=Object(c.useState)(Math.floor(1e9*Math.random()).toString()),j=Object(x.a)(l,2),v=j[0],d=j[1],p=Object(c.useState)(!1),O=Object(x.a)(p,2),m=O[0],g=O[1],w=Object(b.useMediaQuery)({query:"(min-width: 550px)"}),T=Object(c.useState)(w?500:250),y=Object(x.a)(T,2),N=y[0],k=y[1];Object(c.useEffect)((function(){k(w?500:200)}),[w]);var P=function(){var t=Object(h.a)(f.a.mark((function t(){var n,c,a,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!m){t.next=2;break}return t.abrupt("return");case 2:return g(!0),n=e.current,c=V(n,parseInt(u,10)),a=parseInt(v,10),t.next=8,G(parseInt(r,10),{onUpdate:c,userSeed:a});case 8:i=t.sent,n&&K(n,i),g(!1);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),I=Y(a,(function(e){return e<=50})),M=Y(s,(function(e){return e<400})),S=Y(d,(function(e){return e<1e5}));return Object(X.jsx)("div",{className:"w-full min-h-screen bg-gray-700",children:Object(X.jsxs)("div",{className:"space-y-3 flex flex-col items-center p-4 text-white",children:[Object(X.jsx)("h1",{className:"text-4xl my-4",children:"Generation Demo"}),Object(X.jsx)("canvas",{ref:e,width:N,height:N,className:"bg-white"}),Object(X.jsxs)("div",{className:"flex flex-wrap w-full gap-3 items-center place-content-center text-center text-black",children:[Object(X.jsxs)("div",{className:"flex flex-col items-center",children:[Object(X.jsx)("p",{className:"inline-block text-white text-lg",children:"Size"}),Object(X.jsx)("input",{className:"w-16",value:r,onChange:I})]}),Object(X.jsxs)("div",{className:"flex flex-col items-center",children:[Object(X.jsx)("p",{className:"inline-block text-white text-lg",children:"Delay(ms)"}),Object(X.jsx)("input",{className:"w-16",value:u,onChange:M})]}),Object(X.jsxs)("div",{className:"flex flex-col items-center",children:[Object(X.jsx)("p",{className:"inline-block text-white text-lg",children:"Seed"}),Object(X.jsx)("input",{className:"w-20",value:v,onChange:S})]}),Object(X.jsx)("div",{className:"flex flex-col items-center",children:Object(X.jsx)("button",{className:"p-3 rounded-lg bg-green-500 hover:bg-green-300",onClick:P,type:"submit",children:"Generate Maze"})})]})]})})};var $=function(){return Object(X.jsx)("div",{className:"w-full h-screen flex flex-col space-y-3 text-center items-center",children:Object(X.jsx)("h1",{children:"Maze Multiplayer"})})};var _=function(){return Object(X.jsx)(u.a,{children:Object(X.jsxs)(s.c,{children:[Object(X.jsx)(s.a,{path:"/online",children:Object(X.jsx)($,{})}),Object(X.jsx)(s.a,{path:"/",children:Object(X.jsx)(Z,{})})]})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};o.a.render(Object(X.jsx)(a.a.StrictMode,{children:Object(X.jsx)(_,{})}),document.getElementById("root")),ee()}},[[37,1,2]]]);
//# sourceMappingURL=main.8077bbc5.chunk.js.map