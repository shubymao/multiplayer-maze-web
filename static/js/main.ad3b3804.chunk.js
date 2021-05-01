(this["webpackJsonpmultiplayer-maze-web"]=this["webpackJsonpmultiplayer-maze-web"]||[]).push([[0],{29:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(20),c=n.n(i),o=(n(29),n(23)),u=n(2),s=n(7),l=n.n(s),h=n(9),d=n(8),f=n(12),v=n(1),b=function(e){var t=e.onClick,n=e.color,r=e.label;return Object(v.jsx)("button",{className:"p-3 rounded-lg ".concat(n," bg-opacity-90 hover:bg-opacity-100"),onClick:t,type:"submit",children:r})},x=a.a.forwardRef((function(e,t){var n=e.size,r=e.onKeyUp,a=e.onKeyDown;return Object(v.jsx)("canvas",{onKeyDown:a,onKeyUp:r,ref:t,width:n,height:n,className:"bg-white"})}));x.defaultProps={onKeyDown:function(){return!0},onKeyUp:function(){return!0}};var j,p=x,O=function(e){var t=e.children,n=e.onKeyDown,r=e.onKeyUp;return Object(v.jsx)("div",{tabIndex:0,role:"button",onKeyDown:n,onKeyUp:r,className:"w-full cursor-default min-h-screen bg-gray-700",children:Object(v.jsx)("div",{className:"space-y-3 flex flex-col items-center p-4 text-white",children:t})})},g=function(e){var t=e.value,n=e.onChange,r=e.label;return Object(v.jsxs)("div",{className:"flex flex-col text-black items-center",children:[Object(v.jsx)("p",{className:"inline-block text-white text-lg",children:r}),Object(v.jsx)("input",{className:"w-16 text-center bg-gray-200 focus:bg-white",value:t,onChange:n})]})},m={magnitude:0,angle:0},w=[{name:"Home",url:"https://shuby-mao.web.app/"},{name:"Project Page",url:"https://shuby-mao.web.app/projects/web-multiplayer-maze"},{name:"Multiplayer Maze",url:"online"},{name:"Generator Demo",url:"generator"},{name:"Offline Maze",url:"./"}],y=function(){var e=w;return Object(v.jsx)("div",{className:"flex justify-center flex-wrap gap-4 text-white",children:e.map((function(e){return Object(v.jsx)("a",{href:e.url,className:"hover:text-green-500",children:e.name},e.name)}))})},S=n(13),z=n(14),T=n(21);!function(e){e[e.TOP=1]="TOP",e[e.RIGHT=2]="RIGHT",e[e.DOWN=4]="DOWN",e[e.LEFT=8]="LEFT"}(j||(j={}));var C=[j.TOP,j.RIGHT,j.DOWN,j.LEFT];function M(e){return e===j.TOP?j.DOWN:e===j.RIGHT?j.LEFT:e===j.DOWN?j.TOP:j.RIGHT}function k(e,t){return 0!==(e&t)}function P(e,t){return k(e,t)?e^t:e}function D(e){var t=0,n=0;return k(e,j.TOP)&&(n+=1),k(e,j.DOWN)&&(n-=1),k(e,j.RIGHT)&&(t+=1),k(e,j.LEFT)&&(t-=1),0===n&&0===t?m:{angle:Math.atan2(n,t),magnitude:1}}var R,N,E={r:0,c:0},G=1e9*Math.random();function I(e,t,n){var r=t.r,a=t.c;e[r][a]=P(e[r][a],n)}function F(e,t){return new Array(e).fill([]).map((function(){return new Array(e).fill(t)}))}function H(e){G=e||1e9*Math.random()}function W(){if(!G)return Math.random();var e=1e5*Math.sin(G);return G++,e-Math.floor(e)}function K(){var e=[j.TOP,j.RIGHT,j.DOWN,j.LEFT];return function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(W()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}}(e),e}function L(e,t){var n=function(e){return e===j.TOP?[-1,0]:e===j.RIGHT?[0,1]:e===j.DOWN?[1,0]:[0,-1]}(t);if(!n)throw new Error("Delta not found.");return{r:e.r+n[0],c:e.c+n[1]}}function q(e,t){var n=t.r,r=t.c;return n<0||r<0||n>=e.length||r>=e[0].length}function U(e){var t=e.r,n=e.c;return N[t][n]}function A(e){var t=e.r,n=e.c;N[t][n]=!0}function B(e,t){return X.apply(this,arguments)}function X(){return(X=Object(h.a)(l.a.mark((function e(t,n){var r,a,i,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=K(),A(t),!n){e.next=5;break}return e.next=5,n(R,t);case 5:a=Object(S.a)(r),e.prev=6,a.s();case 8:if((i=a.n()).done){e.next=18;break}if(c=i.value,o=L(t,c),q(R,o)||U(o)){e.next=16;break}return I(R,t,c),I(R,o,M(c)),e.next=16,B(o,n);case 16:e.next=8;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),a.e(e.t0);case 23:return e.prev=23,a.f(),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[6,20,23,26]])})))).apply(this,arguments)}function Y(e){var t=K();A(e);var n,r=Object(S.a)(t);try{for(r.s();!(n=r.n()).done;){var a=n.value,i=L(e,a);q(R,i)||U(i)||(I(R,e,a),I(R,i,M(a)),Y(i))}}catch(c){r.e(c)}finally{r.f()}}function Q(e){return J.apply(this,arguments)}function J(){return(J=Object(h.a)(l.a.mark((function e(t){var n,r,a,i=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},r=n.userSeed,a=n.onUpdate,R=F(t,15),N=F(t,!1),H(r),e.next=7,B(E,a);case 7:return e.abrupt("return",R);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,t){return R=F(e,15),N=F(e,!1),H(t),Y(E),R}var Z="#FBBF24",$=2*Math.PI;function _(e){return new Promise((function(t){return setTimeout(t,e)}))}function ee(e){if(!e)throw new Error("Canvas is not defined.");var t=e.height,n=e.width,r=e.getContext("2d");if(!r)throw new Error("Unable to get context.");return{context:r,height:t,width:n}}function te(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n=e;return function(){var e=Object(h.a)(l.a.mark((function e(r,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.drawGrid(r),n.drawIndicatorSquare(a),e.next=4,_(t);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}var ne=function(){function e(t){var n=this;Object(z.a)(this,e),this.canvas=void 0,this.ctx=void 0,this.width=void 0,this.height=void 0,this.padX=0,this.padY=0,this.gridSize=-1,this.cellSize=-1,this.playerRadius=-1,this.clearCanvas=function(){n.ctx.clearRect(0,0,n.width,n.height)},this.drawGrid=function(e){if(!e||!function(e){if(!e)return!1;if(0===e.length)return!1;var t=e.length;return-1!==e.reduce((function(e,t){return t&&t.length===e?e:-1}),t)}(e))throw new Error("Grid not valid");n.initDimension(n.width,n.height,e),n.ctx.clearRect(0,0,n.width,n.height),n.drawBoundary();for(var t=0;t<e.length;t++)for(var r=0;r<e[0].length;r++)n.drawCell(e[t][r],{r:t,c:r})},this.drawIndicatorSquare=function(e){n.ctx.fillStyle="#FF0000",n.drawSquare(e),n.ctx.fill()},this.drawStartFinish=function(e){n.ctx.fillStyle="#DC2626",n.drawSquare({r:0,c:0}),n.ctx.fill(),n.ctx.fillStyle="#10B981",n.drawSquare({r:e.length-1,c:e.length-1}),n.ctx.fill()},this.drawPlayer=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Z;n.ctx.fillStyle=t,n.ctx.lineWidth=2,n.drawCircle(e,n.playerRadius),n.ctx.fill(),n.ctx.stroke()},this.initDimension=function(e,t,r){n.gridSize=Math.min(e,t)-20,n.cellSize=n.gridSize/r.length,n.playerRadius=.1*n.cellSize,n.padY=(t-n.gridSize)/2,n.padX=(e-n.gridSize)/2},this.drawCircle=function(e,t){n.ctx.beginPath();var r=n.cCord(e.c),a=n.rCord(e.r);n.ctx.arc(r,a,t,0,$),n.ctx.closePath()},this.drawSquare=function(e){var t=e.r,r=e.c;n.ctx.beginPath(),n.ctx.moveTo(n.cCord(r)+1,n.rCord(t)+1),n.ctx.lineTo(n.cCord(r+1)-1,n.rCord(t)+1),n.ctx.lineTo(n.cCord(r+1)-1,n.rCord(t+1)-1),n.ctx.lineTo(n.cCord(r)+1,n.rCord(t+1)-1),n.ctx.closePath()},this.rCord=function(e){return n.padY+e*n.cellSize},this.cCord=function(e){return n.padX+e*n.cellSize},this.drawBoundary=function(){n.gridSize>0&&(n.ctx.lineWidth=1,n.ctx.strokeStyle="#000000",n.ctx.beginPath(),n.ctx.moveTo(n.padX,n.padY),n.ctx.lineTo(n.padX+n.gridSize,n.padY),n.ctx.lineTo(n.padX+n.gridSize,n.padY+n.gridSize),n.ctx.lineTo(n.padX,n.padY+n.gridSize),n.ctx.closePath(),n.ctx.stroke())},this.drawCell=function(e,t){var r,a=Object(S.a)(C);try{for(a.s();!(r=a.n()).done;){var i=r.value;k(e,i)&&n.drawWall(t,i)}}catch(c){a.e(c)}finally{a.f()}},this.drawWall=function(e,t){var r=e.r,a=e.c;n.ctx.beginPath(),t===j.TOP||t===j.LEFT?n.ctx.moveTo(n.cCord(a),n.rCord(r)):n.ctx.moveTo(n.cCord(a+1),n.rCord(r+1)),t===j.TOP||t===j.RIGHT?n.ctx.lineTo(n.cCord(a+1),n.rCord(r)):n.ctx.lineTo(n.cCord(a),n.rCord(r+1)),n.ctx.closePath(),n.ctx.stroke()},this.canvas=t;var r=ee(this.canvas),a=r.context,i=r.height,c=r.width;this.ctx=a,this.width=c,this.height=i}return Object(T.a)(e,[{key:"refreshContext",value:function(){var e=ee(this.canvas),t=e.context,n=e.height,r=e.width;this.ctx=t,this.width=r,this.height=n}}]),e}();function re(e,t){return function(n){var r=n.target.value;r&&!t(parseInt(r,10))||e(r)}}var ae=function(){var e=Object(r.createRef)(),t=Object(r.useState)("10"),n=Object(d.a)(t,2),a=n[0],i=n[1],c=Object(r.useState)("30"),o=Object(d.a)(c,2),u=o[0],s=o[1],x=Object(r.useState)(Math.floor(1e5*Math.random()).toString()),j=Object(d.a)(x,2),m=j[0],w=j[1],S=Object(r.useState)(!1),z=Object(d.a)(S,2),T=z[0],C=z[1],M=Object(f.useMediaQuery)({query:"(min-width: 550px)"}),k=Object(r.useState)(M?500:250),P=Object(d.a)(k,2),D=P[0],R=P[1];Object(r.useEffect)((function(){R(M?500:200)}),[M]);var N=function(){var t=Object(h.a)(l.a.mark((function t(){var n,r,i,c,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!T){t.next=2;break}return t.abrupt("return");case 2:return C(!0),n=e.current,r=new ne(n),i=te(r,parseInt(u,10)),c=parseInt(m,10),t.next=9,Q(parseInt(a,10),{onUpdate:i,userSeed:c});case 9:o=t.sent,r.drawGrid(o),C(!1);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=re(i,(function(e){return e<=50})),G=re(s,(function(e){return e<400})),I=re(w,(function(e){return e<1e5}));return Object(v.jsxs)(O,{children:[Object(v.jsx)("h1",{className:"text-4xl my-4",children:"Generation Demo"}),Object(v.jsx)(y,{}),Object(v.jsx)(p,{ref:e,size:D}),Object(v.jsxs)("div",{className:"flex flex-wrap gap-3 items-center place-content-center",children:[Object(v.jsx)(g,{label:"Size",value:a,onChange:E}),Object(v.jsx)(g,{label:"Delay",value:u,onChange:G}),Object(v.jsx)(g,{label:"Seed",value:m,onChange:I}),Object(v.jsx)(b,{color:"bg-green-500",onClick:N,label:"Generate"})]})]})},ie=n(22),ce=n.n(ie),oe={color:"#000000",threshold:.1,position:{top:"50%",left:"50%"},mode:"static",dynamicPage:!0},ue=function(e){var t=e.size,n=e.onEventHandler,a=e.offEventHandler,i=Object(r.createRef)(),c=Object(r.useRef)(null),o=Object(r.useCallback)((function(e,r){var a={magnitude:r.distance/t*2,angle:r.angle.radian};n(a)}),[n,t]);return Object(r.useEffect)((function(){var e=oe;return e.zone=i.current,e.size=t,c.current=ce.a.create(e),c.current.on("move",o),c.current.on("end",a),function(){var e,t,n;a(),null===(e=c.current)||void 0===e||e.off("move",o),null===(t=c.current)||void 0===t||t.off("end",a),null===(n=c.current)||void 0===n||n.destroy()}}),[c,t,o,a,i]),Object(v.jsx)("div",{className:"bg-white relative rounded-full",style:{width:t+5,height:t+5},ref:i})},se={r:.5,c:.5},le=.1,he=function e(t,n,r){var a=this;Object(z.a)(this,e),this.canvasManager=void 0,this.level=void 0,this.maze=void 0,this.gridSize=void 0,this.position=void 0,this.seed=void 0,this.setLevel=function(e){a.level=e,a.gridSize+=e+5,a.position=se,a.maze=V(a.gridSize,a.seed),a.renderGame()},this.getMaze=function(){return a.maze},this.getPosition=function(){return a.position},this.performMove=function(e){var t=e.magnitude,n=e.angle,r=a.position.r,i=a.position.c;r+=-.05*t*Math.sin(n),i+=.05*t*Math.cos(n),a.position=a.getBoundedCord(r,i)},this.getBoundedCord=function(e,t){var n=a.position,r=n.r,i=n.c,c=[Math.floor(r),Math.floor(i)],o=c[0],u=c[1],s=a.maze[o][u];return k(s,j.TOP)&&(e=Math.max(o+le,e)),k(s,j.DOWN)&&(e=Math.min(o+1-le,e)),k(s,j.LEFT)&&(t=Math.max(u+le,t)),k(s,j.RIGHT)&&(t=Math.min(u+1-le,t)),{r:e,c:t}},this.checkWin=function(){var e=Math.abs(a.position.r-(a.gridSize-.5)),t=Math.abs(a.position.c-(a.gridSize-.5));return e<=.5&&t<=.5},this.renderGame=function(){a.canvasManager.refreshContext(),a.canvasManager.drawGrid(a.maze),a.canvasManager.drawStartFinish(a.maze),a.canvasManager.drawPlayer(a.position)},this.seed=r,this.level=n,this.gridSize=this.level+5,this.position=se,this.maze=V(this.gridSize,this.seed),this.canvasManager=new ne(t)};function de(e,t){return e?500:t?350:250}var fe={ArrowLeft:j.LEFT,ArrowUp:j.TOP,ArrowRight:j.RIGHT,ArrowDown:j.DOWN};var ve=function(){var e=Object(r.useState)(1),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(r.useRef)(null),c=Object(f.useMediaQuery)({query:"(min-width: 600px)"}),o=Object(f.useMediaQuery)({query:"(min-width: 400px)"}),u=Object(r.useState)(de(c,o)),s=Object(d.a)(u,2),l=s[0],h=s[1],b=Object(r.useRef)(),x=Object(r.useRef)(0),j=Object(r.useRef)(m),g=Object(r.useRef)(0),w=Object(r.useCallback)((function(){var e,t,r;null===(e=b.current)||void 0===e||e.performMove(j.current),null===(t=b.current)||void 0===t||t.renderGame(),(null===(r=b.current)||void 0===r?void 0:r.checkWin())&&a(n+1),x.current=requestAnimationFrame(w)}),[j,b,n]);Object(r.useEffect)((function(){h(de(c,o))}),[c,o]),Object(r.useEffect)((function(){return b.current=new he(i.current,n),x.current=requestAnimationFrame(w),function(){return cancelAnimationFrame(x.current)}}),[n,w]);var S=Object(r.useCallback)((function(e){j.current=e}),[]),z=Object(r.useCallback)((function(){j.current=m}),[]);return Object(v.jsxs)(O,{onKeyDown:function(e){var t=fe[e.key]||0;0!==t&&e.preventDefault(),g.current=function(e,t){return e|t}(g.current,t),j.current=D(g.current)},onKeyUp:function(e){var t=fe[e.key]||0;0!==t&&e.preventDefault(),g.current=P(g.current,t),j.current=D(g.current)},children:[Object(v.jsxs)("h1",{className:"text-4xl my-4 text-center",children:["Offline Maze Level ",n]}),Object(v.jsx)(y,{}),Object(v.jsx)(p,{ref:i,size:l}),Object(v.jsx)(ue,{size:120,offEventHandler:z,onEventHandler:S})]})};var be=function(){return Object(v.jsxs)(O,{children:[Object(v.jsx)("h1",{className:"text-4xl my-4",children:"Maze Multiplayer"}),Object(v.jsx)(y,{})]})};var xe=function(){return Object(v.jsx)(o.a,{basename:"/multiplayer-maze-web",children:Object(v.jsxs)(u.c,{children:[Object(v.jsx)(u.a,{path:"/online",children:Object(v.jsx)(be,{})}),Object(v.jsx)(u.a,{path:"/generator",children:Object(v.jsx)(ae,{})}),Object(v.jsx)(u.a,{path:"/",children:Object(v.jsx)(ve,{})})]})})};c.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(xe,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.ad3b3804.chunk.js.map