(this["webpackJsonpmultiplayer-maze-web"]=this["webpackJsonpmultiplayer-maze-web"]||[]).push([[0],{37:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(23),c=n.n(i),o=(n(37),n(20)),s=n(5),u=n(13),l=n(10),d=n.n(l),f=n(15),h=n(11),v=n(14),p=n(3),b=function(e){var t=e.onClick,n=e.stl,r=e.hoverStl,a=e.label;return Object(p.jsx)("button",{className:"p-3 focus:outline-none rounded-lg ".concat(n," ").concat(r),onClick:t,type:"submit",children:a})},m=a.a.forwardRef((function(e,t){var n=e.size,r=e.onKeyUp,a=e.onKeyDown;return Object(p.jsx)("canvas",{onKeyDown:a,onKeyUp:r,ref:t,width:n,height:n,className:"bg-white"})}));m.defaultProps={onKeyDown:function(){return!0},onKeyUp:function(){return!0}};var j,x=m,g=function(e){var t=e.children,n=e.onKeyDown,r=e.onKeyUp;return Object(p.jsx)("div",{tabIndex:0,role:"button",onKeyDown:n,onKeyUp:r,className:"w-full cursor-default min-h-screen bg-gray-700",children:Object(p.jsx)("div",{className:"space-y-4 flex flex-col text-center items-center p-5 text-white",children:t})})},O=function(e){var t=e.value,n=e.onChange,r=e.label;return Object(p.jsxs)("div",{className:"flex flex-col text-black items-center",children:[Object(p.jsx)("p",{className:"inline-block text-white text-lg",children:r}),Object(p.jsx)("input",{className:"w-16 text-center bg-gray-200 focus:bg-white",value:t,onChange:n})]})};!function(e){e[e.TOP=1]="TOP",e[e.RIGHT=2]="RIGHT",e[e.DOWN=4]="DOWN",e[e.LEFT=8]="LEFT"}(j||(j={}));var y={apiKey:"AIzaSyBUWj6-JnzOS1PFfc63EiIWQDMC4bJ7BC4",authDomain:"real-time-maze-web.firebaseapp.com",databaseURL:"https://real-time-maze-web-default-rtdb.firebaseio.com",storageBucket:"real-time-maze-web.appspot.com"},w={position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0},M={ArrowLeft:j.LEFT,a:j.LEFT,A:j.LEFT,ArrowUp:j.TOP,w:j.TOP,W:j.TOP,ArrowRight:j.RIGHT,d:j.RIGHT,D:j.RIGHT,ArrowDown:j.DOWN,s:j.DOWN,S:j.DOWN},S="Control: w,a,s,d or \u2191,\u2190,\u2193,\u2192. Use on-screen joystick on a touch screen device.",P={magnitude:0,angle:0},T="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",C=.15,z={r:.5,c:.5},k="#FBBF24",D=[{name:"Home",url:"https://shuby-mao.web.app/"},{name:"Project Page",url:"https://shuby-mao.web.app/projects/web-multiplayer-maze"},{name:"Multiplayer Maze",url:"/"},{name:"Offline Maze",url:"/offline"},{name:"Generation Demo",url:"/generation-demo"}],R=function(){var e=D;return Object(p.jsx)("div",{className:"flex justify-center flex-wrap space-x-5 space-y-2 text-white",children:e.map((function(e){return"/"===e.url.charAt(0)?Object(p.jsx)(o.b,{className:"hover:text-green-500",to:e.url,children:e.name},e.name):Object(p.jsx)("a",{href:e.url,className:"hover:text-green-500",children:e.name},e.name)}))})},I=n(22),N=n(18),G=n(31),B=[j.TOP,j.RIGHT,j.DOWN,j.LEFT];function F(e){return e===j.TOP?j.DOWN:e===j.RIGHT?j.LEFT:e===j.DOWN?j.TOP:j.RIGHT}function L(e,t){return 0!==(e&t)}function E(e,t){return L(e,t)?e^t:e}function W(e){var t=0,n=0;return L(e,j.TOP)&&(n+=1),L(e,j.DOWN)&&(n-=1),L(e,j.RIGHT)&&(t+=1),L(e,j.LEFT)&&(t-=1),0===n&&0===t?P:{angle:Math.atan2(n,t),magnitude:1}}var U,A,q={r:0,c:0},H=1e9*Math.random();function K(e,t,n){var r=t.r,a=t.c;e[r][a]=E(e[r][a],n)}function Y(e,t){return new Array(e).fill([]).map((function(){return new Array(e).fill(t)}))}function X(e){H=e||1e9*Math.random()}function J(){if(!H)return Math.random();var e=1e5*Math.sin(H);return H++,e-Math.floor(e)}function Q(){var e=[j.TOP,j.RIGHT,j.DOWN,j.LEFT];return function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(J()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}}(e),e}function _(e,t){var n=function(e){return e===j.TOP?[-1,0]:e===j.RIGHT?[0,1]:e===j.DOWN?[1,0]:[0,-1]}(t);if(!n)throw new Error("Delta not found.");return{r:e.r+n[0],c:e.c+n[1]}}function V(e,t){var n=t.r,r=t.c;return n<0||r<0||n>=e.length||r>=e[0].length}function Z(e){var t=e.r,n=e.c;return A[t][n]}function $(e){var t=e.r,n=e.c;A[t][n]=!0}function ee(e,t){return te.apply(this,arguments)}function te(){return(te=Object(f.a)(d.a.mark((function e(t,n){var r,a,i,c,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Q(),$(t),!n){e.next=5;break}return e.next=5,n(U,t);case 5:a=Object(I.a)(r),e.prev=6,a.s();case 8:if((i=a.n()).done){e.next=18;break}if(c=i.value,o=_(t,c),V(U,o)||Z(o)){e.next=16;break}return K(U,t,c),K(U,o,F(c)),e.next=16,ee(o,n);case 16:e.next=8;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),a.e(e.t0);case 23:return e.prev=23,a.f(),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[6,20,23,26]])})))).apply(this,arguments)}function ne(e){var t=Q();$(e);var n,r=Object(I.a)(t);try{for(r.s();!(n=r.n()).done;){var a=n.value,i=_(e,a);V(U,i)||Z(i)||(K(U,e,a),K(U,i,F(a)),ne(i))}}catch(c){r.e(c)}finally{r.f()}}function re(e){return ae.apply(this,arguments)}function ae(){return(ae=Object(f.a)(d.a.mark((function e(t){var n,r,a,i=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},r=n.userSeed,a=n.onUpdate,U=Y(t,15),A=Y(t,!1),X(r),e.next=7,ee(q,a);case 7:return e.abrupt("return",U);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e,t){return U=Y(e,15),A=Y(e,!1),X(t),ne(q),U}function ce(e,t){return e?500:t?350:250}function oe(e){if(!e)throw new Error("Canvas is not defined.");var t=e.height,n=e.width,r=e.getContext("2d");if(!r)throw new Error("Unable to get context.");return{ctx:r,height:t,width:n}}var se=function(e,t){return function(n){var r=M[n.key]||0;0!==r&&n.preventDefault(),e.current=function(e,t){return e|t}(e.current,r),t.current=W(e.current)}},ue=function(e,t){return function(n){var r=M[n.key]||0;0!==r&&n.preventDefault(),e.current=E(e.current,r),t.current=W(e.current)}},le=function(e){return function(t){e.current=t}},de=function(e){return function(){e.current=P}};function fe(e,t){return{id:t||function(e){for(var t=[],n=T.length,r=0;r<e;r++){var a=Math.floor(Math.random()*n);t.push(T.charAt(a))}return t.join("")}(10),location:e}}function he(e){var t=function(e){var t=(16777215&e).toString(16).toUpperCase();return"00000".substring(0,6-t.length)+t}(function(e){for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);return t}(e));return"#".concat(t)}var ve=2*Math.PI;function pe(e){return new Promise((function(t){return setTimeout(t,e)}))}function be(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n=e;return function(){var e=Object(f.a)(d.a.mark((function e(r,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.drawGrid(r),n.drawIndicatorSquare(a),e.next=4,pe(t);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}var me=function(){function e(t){var n=this;Object(N.a)(this,e),this.canvas=void 0,this.ctx=void 0,this.width=void 0,this.height=void 0,this.padX=0,this.padY=0,this.gridSize=-1,this.cellSize=-1,this.playerRadius=-1,this.clearCanvas=function(){n.ctx.clearRect(0,0,n.width,n.height)},this.drawGrid=function(e){if(!e||!function(e){if(!e)return!1;if(0===e.length)return!1;var t=e.length;return-1!==e.reduce((function(e,t){return t&&t.length===e?e:-1}),t)}(e))throw new Error("Grid not valid");n.initDimension(n.width,n.height,e),n.ctx.clearRect(0,0,n.width,n.height),n.drawBoundary();for(var t=0;t<e.length;t++)for(var r=0;r<e[0].length;r++)n.drawCell(e[t][r],{r:t,c:r})},this.drawIndicatorSquare=function(e){n.ctx.fillStyle="#FF0000",n.drawSquare(e),n.ctx.fill()},this.drawStartFinish=function(e){n.ctx.fillStyle="#DC2626",n.drawSquare({r:0,c:0}),n.ctx.fill(),n.ctx.fillStyle="#10B981",n.drawSquare({r:e.length-1,c:e.length-1}),n.ctx.fill()},this.drawPlayer=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k;n.ctx.fillStyle=t,n.ctx.lineWidth=2,n.drawCircle(e,n.playerRadius),n.ctx.fill(),n.ctx.stroke()},this.initDimension=function(e,t,r){n.gridSize=Math.min(e,t)-10,n.cellSize=n.gridSize/r.length,n.playerRadius=n.cellSize*C,n.padY=(t-n.gridSize)/2,n.padX=(e-n.gridSize)/2},this.drawCircle=function(e,t){n.ctx.beginPath();var r=n.cCord(e.c),a=n.rCord(e.r);n.ctx.arc(r,a,t,0,ve),n.ctx.closePath()},this.drawSquare=function(e){var t=e.r,r=e.c;n.ctx.beginPath(),n.ctx.moveTo(n.cCord(r)+1,n.rCord(t)+1),n.ctx.lineTo(n.cCord(r+1)-1,n.rCord(t)+1),n.ctx.lineTo(n.cCord(r+1)-1,n.rCord(t+1)-1),n.ctx.lineTo(n.cCord(r)+1,n.rCord(t+1)-1),n.ctx.closePath()},this.rCord=function(e){return n.padY+e*n.cellSize},this.cCord=function(e){return n.padX+e*n.cellSize},this.drawBoundary=function(){n.gridSize>0&&(n.ctx.lineWidth=1,n.ctx.strokeStyle="#000000",n.ctx.beginPath(),n.ctx.moveTo(n.padX,n.padY),n.ctx.lineTo(n.padX+n.gridSize,n.padY),n.ctx.lineTo(n.padX+n.gridSize,n.padY+n.gridSize),n.ctx.lineTo(n.padX,n.padY+n.gridSize),n.ctx.closePath(),n.ctx.stroke())},this.drawCell=function(e,t){var r,a=Object(I.a)(B);try{for(a.s();!(r=a.n()).done;){var i=r.value;L(e,i)&&n.drawWall(t,i)}}catch(c){a.e(c)}finally{a.f()}},this.drawWall=function(e,t){var r=e.r,a=e.c;n.ctx.beginPath(),t===j.TOP||t===j.LEFT?n.ctx.moveTo(n.cCord(a),n.rCord(r)):n.ctx.moveTo(n.cCord(a+1),n.rCord(r+1)),t===j.TOP||t===j.RIGHT?n.ctx.lineTo(n.cCord(a+1),n.rCord(r)):n.ctx.lineTo(n.cCord(a),n.rCord(r+1)),n.ctx.closePath(),n.ctx.stroke()},this.canvas=t;var r=oe(this.canvas),a=r.ctx,i=r.height,c=r.width;this.ctx=a,this.width=c,this.height=i}return Object(G.a)(e,[{key:"refreshContext",value:function(){var e=oe(this.canvas),t=e.ctx,n=e.height,r=e.width;this.ctx=t,this.width=r,this.height=n}}]),e}();function je(e,t){return function(n){var r=n.target.value;r&&!t(parseInt(r,10))||e(r)}}var xe=function(){var e=Object(r.createRef)(),t=Object(r.useState)("10"),n=Object(h.a)(t,2),a=n[0],i=n[1],c=Object(r.useState)("30"),o=Object(h.a)(c,2),s=o[0],u=o[1],l=Object(r.useState)(Math.floor(1e5*Math.random()).toString()),m=Object(h.a)(l,2),j=m[0],y=m[1],w=Object(r.useState)(!1),M=Object(h.a)(w,2),S=M[0],P=M[1],T=Object(v.useMediaQuery)({query:"(min-width: 550px)"}),C=Object(r.useState)(T?500:250),z=Object(h.a)(C,2),k=z[0],D=z[1];Object(r.useEffect)((function(){D(T?500:200)}),[T]);var I=function(){var t=Object(f.a)(d.a.mark((function t(){var n,r,i,c,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!S){t.next=2;break}return t.abrupt("return");case 2:return P(!0),n=e.current,r=new me(n),i=be(r,parseInt(s,10)),c=parseInt(j,10),t.next=9,re(parseInt(a,10),{onUpdate:i,userSeed:c});case 9:o=t.sent,r.drawGrid(o),P(!1);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=je(i,(function(e){return e<=50})),G=je(u,(function(e){return e<400})),B=je(y,(function(e){return e<1e5}));return Object(p.jsxs)(g,{children:[Object(p.jsx)(R,{}),Object(p.jsx)("h1",{className:"text-4xl",children:"Generation Demo"}),Object(p.jsx)(x,{ref:e,size:k}),Object(p.jsxs)("div",{className:"flex flex-wrap gap-3 items-center place-content-center",children:[Object(p.jsx)(O,{label:"Size",value:a,onChange:N}),Object(p.jsx)(O,{label:"Delay",value:s,onChange:G}),Object(p.jsx)(O,{label:"Seed",value:j,onChange:B}),Object(p.jsx)(b,{onClick:I,label:"Generate",stl:"bg-green-500 hover:bg-green-400"})]})]})},ge=n(32),Oe=n.n(ge),ye={color:"#000000",threshold:.1,position:{top:"50%",left:"50%"},mode:"static",dynamicPage:!0},we=function(e){var t=e.size,n=e.onStick,a=e.offStick,i=Object(r.createRef)(),c=Object(r.useRef)(null),o=Object(r.useCallback)((function(e,r){var a={magnitude:r.distance/t*2,angle:r.angle.radian};n(a)}),[n,t]);return Object(r.useEffect)((function(){var e=ye;return e.zone=i.current,e.size=t,c.current=Oe.a.create(e),c.current.on("move",o),c.current.on("end",a),function(){var e,t,n;a(),null===(e=c.current)||void 0===e||e.off("move",o),null===(t=c.current)||void 0===t||t.off("end",a),null===(n=c.current)||void 0===n||n.destroy()}}),[c,t,o,a,i]),Object(p.jsx)("div",{className:"bg-white relative rounded-full",style:{width:t+5,height:t+5},ref:i})},Me=function e(t,n,r,a){var i=this;Object(N.a)(this,e),this.canvasManager=void 0,this.level=void 0,this.maze=void 0,this.gridSize=void 0,this.player=void 0,this.opPositions=void 0,this.seed=void 0,this.getMaze=function(){return i.maze},this.getMyPlayer=function(){return i.player},this.setOpponentsPos=function(e){i.opPositions=e},this.performMove=function(e){var t=e.magnitude,n=e.angle,r=i.player.location.r,a=i.player.location.c;r+=-.05*t*Math.sin(n),a+=.05*t*Math.cos(n),i.player.location=i.getBoundedCord(r,a)},this.renderGame=function(){var e;i.canvasManager.refreshContext(),i.canvasManager.drawGrid(i.maze),i.canvasManager.drawStartFinish(i.maze),null===(e=i.opPositions)||void 0===e||e.forEach((function(e,t){return i.canvasManager.drawPlayer(e,he(t))}));var t=i.player,n=t.location,r=t.id;i.canvasManager.drawPlayer(n,he(r))},this.checkWin=function(){var e=Math.abs(i.player.location.r-(i.gridSize-.5)),t=Math.abs(i.player.location.c-(i.gridSize-.5));return e<=.5&&t<=.5},this.getBoundedCord=function(e,t){var n=i.player.location,r=n.r,a=n.c,c=[Math.floor(r),Math.floor(a)],o=c[0],s=c[1],u=i.maze[o][s];return L(u,j.TOP)&&(e=Math.max(o+C,e)),L(u,j.DOWN)&&(e=Math.min(o+1-C,e)),L(u,j.LEFT)&&(t=Math.max(s+C,t)),L(u,j.RIGHT)&&(t=Math.min(s+1-C,t)),{r:e,c:t}},this.seed=r,this.level=n,this.gridSize=this.level+5,this.player=fe(z,a),this.maze=ie(this.gridSize,this.seed),this.canvasManager=new me(t)};var Se=function(){var e=Object(r.useState)(1),t=Object(h.a)(e,2),n=t[0],a=t[1],i=Object(r.useRef)(null),c=Object(v.useMediaQuery)({query:"(min-width: 600px)"}),o=Object(v.useMediaQuery)({query:"(min-width: 400px)"}),s=Object(r.useState)(ce(c,o)),l=Object(h.a)(s,2),d=l[0],f=l[1],b=Object(r.useRef)(),m=Object(r.useRef)(0),j=Object(r.useRef)(P),O=Object(r.useRef)(0),y=se(O,j),M=ue(O,j),T=le(j),C=de(j);Object(r.useEffect)((function(){f(ce(c,o))}),[c,o]);var z=Object(r.useCallback)((function(){var e,t,r;null===(e=b.current)||void 0===e||e.performMove(j.current),null===(t=b.current)||void 0===t||t.renderGame(),(null===(r=b.current)||void 0===r?void 0:r.checkWin())&&(u.b.success("Reached Level ".concat(n+1),w),a(n+1)),m.current=requestAnimationFrame(z)}),[j,b,n]);return Object(r.useEffect)((function(){return b.current=new Me(i.current,n),m.current=requestAnimationFrame(z),function(){return cancelAnimationFrame(m.current)}}),[n,z]),Object(p.jsxs)(g,{onKeyDown:y,onKeyUp:M,children:[Object(p.jsx)(R,{}),Object(p.jsxs)("h1",{className:"text-4xl my-4 text-center",children:["Offline Maze Level ",n]}),Object(p.jsx)("p",{children:S}),Object(p.jsx)(x,{ref:i,size:d}),Object(p.jsx)(we,{size:100,offStick:C,onStick:T})]})},Pe=n(19),Te=(n(47),n(51),function e(t,n,r){var a=this;Object(N.a)(this,e),this.isWinner=void 0,this.myUID=void 0,this.lastUpdatedPosition=void 0,this.opPositions=void 0,this.refMap=void 0,this.counter=0,this.game=void 0,this.canvas=void 0,this.realTimeDB=void 0,this.onGameOver=void 0,this.callBack=void 0,this.performMove=function(e){a.game&&(a.counter++,a.game.performMove(e),a.counter>=3&&(a.updateMyLocation(),a.counter=0),a.game.checkWin()&&(a.isWinner=!0,a.setNewSeed()))},this.render=function(){var e;null===(e=a.game)||void 0===e||e.renderGame()},this.cleanUp=function(){a.game&&a.removePlayer(a.game.getMyPlayer()),a.refMap.forEach((function(e){return e.off()}))},this.initFirebaseService=function(){Pe.a.apps.length||Pe.a.initializeApp(y);var e=Pe.a.app();a.realTimeDB=Pe.a.database(e);var t=Pe.a.auth(e);a.signInAndInitListener(t)},this.signInAndInitListener=function(e){e.signInAnonymously().catch((function(){a.callBack&&a.callBack(!1,"Login failed. Please try refresh the page.")})),e.onAuthStateChanged((function(e){e&&(a.callBack&&a.callBack(!0,"Login Success."),a.myUID=e.uid,a.addSeedListener(),a.addPlayersListener())}))},this.addSeedListener=function(){var e="/seed",t=a.realTimeDB.ref(e);t.on("value",(function(e){var t=e.val();a.game&&a.onGameOver&&a.onGameOver(a.isWinner),a.initNewGame(t)})),a.refMap.set(e,t)},this.setNewSeed=function(){var e=Math.floor(1e6*Math.random());a.realTimeDB.ref("/seed").set(e)},this.addPlayersListener=function(){var e="/players",t=a.realTimeDB.ref(e);t.on("child_added",a.onOtherPlayerJoin),a.refMap.set("".concat(e,"-added"),t);var n=a.realTimeDB.ref("/players");n.on("child_removed",a.onOtherPlayerLeave),a.refMap.set("".concat(e,"-removed"),n)},this.onOtherPlayerJoin=function(e){var t,n=e.key;if(n&&n!==(null===(t=a.game)||void 0===t?void 0:t.getMyPlayer().id)){a.opPositions.set(n,e.val());var r="/players/".concat(n),i=a.realTimeDB.ref(r);i.on("value",(function(e){a.opPositions.set(n,e.val())})),a.refMap.set(r,i)}},this.onOtherPlayerLeave=function(e){var t,n=e.key;if(n&&n!==(null===(t=a.game)||void 0===t?void 0:t.getMyPlayer().id)){var r="/players/".concat(n);a.opPositions.delete(n),a.refMap.delete(r),a.realTimeDB.ref(r).off()}},this.registerPlayer=function(e){a.realTimeDB.ref("/players/".concat(e.id)).set(e.location)},this.removePlayer=function(e){a.realTimeDB.ref("/players/".concat(e.id)).remove()},this.updateMyLocation=function(){var e,t=null===(e=a.game)||void 0===e?void 0:e.getMyPlayer();if(t){var n=t.location,r=a.lastUpdatedPosition;r&&n.c===r.c&&n.r===r.r||(a.realTimeDB.ref("/players/".concat(t.id)).update(n),a.lastUpdatedPosition=n)}},this.initNewGame=function(e){a.game=new Me(a.canvas,10,e,a.myUID),a.game.setOpponentsPos(a.opPositions);var t=a.game.getMyPlayer();t&&a.registerPlayer(t),a.isWinner=!1},this.initFirebaseService(),this.isWinner=!1,this.canvas=t,this.opPositions=new Map,this.refMap=new Map,this.onGameOver=n,this.callBack=r}),Ce=function(e){e?u.b.success("Congrats, You won the game \ud83d\ude80",w):u.b.error("Too Slow,  Faster Next Time \ud83d\ude2d",w)},ze=function(e,t){e?u.b.success(t,w):u.b.error(t,w)};var ke=function(){var e=Object(r.useRef)(null),t=Object(v.useMediaQuery)({query:"(min-width: 600px)"}),n=Object(v.useMediaQuery)({query:"(min-width: 400px)"}),a=Object(r.useState)(ce(t,n)),i=Object(h.a)(a,2),c=i[0],o=i[1],s=Object(r.useRef)(),u=Object(r.useRef)(0),l=Object(r.useRef)(P),d=Object(r.useRef)(0),f=se(d,l),b=ue(d,l),m=le(l),j=de(l),O=Object(r.useCallback)((function(){var e,t;null===(e=s.current)||void 0===e||e.performMove(l.current),null===(t=s.current)||void 0===t||t.render(),u.current=requestAnimationFrame(O)}),[]);return Object(r.useEffect)((function(){return s.current=new Te(e.current,Ce,ze),function(e){var t=function(){e()};window.addEventListener("beforeunload",t),window.addEventListener("pagehide",t)}((function(){var e;return null===(e=s.current)||void 0===e?void 0:e.cleanUp()})),function(){var e;null===(e=s.current)||void 0===e||e.cleanUp()}}),[]),Object(r.useEffect)((function(){o(ce(t,n))}),[t,n]),Object(r.useEffect)((function(){return u.current=requestAnimationFrame(O),function(){return cancelAnimationFrame(u.current)}}),[O]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(g,{onKeyDown:f,onKeyUp:b,children:[Object(p.jsx)(R,{}),Object(p.jsx)("h1",{className:"text-4xl my-4",children:"Maze Multiplayer"}),Object(p.jsx)("p",{children:"No one is here? Invite your friend or open another client in incognito or another browser."}),Object(p.jsx)("p",{children:S}),Object(p.jsx)(x,{ref:e,size:c}),Object(p.jsx)(we,{size:100,offStick:j,onStick:m})]})})};var De=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u.a,{}),Object(p.jsxs)(s.c,{children:[Object(p.jsx)(s.a,{exact:!0,path:"/offline",children:Object(p.jsx)(Se,{})}),Object(p.jsx)(s.a,{exact:!0,path:"/generation-demo",children:Object(p.jsx)(xe,{})}),Object(p.jsx)(s.a,{children:Object(p.jsx)(ke,{})})]})]})};c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(o.a,{basename:"/multiplayer-maze-web",children:Object(p.jsx)(De,{})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.76e574c3.chunk.js.map