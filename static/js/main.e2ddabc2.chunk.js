(window["webpackJsonpstar-trader"]=window["webpackJsonpstar-trader"]||[]).push([[0],{69:function(e,t,n){e.exports=n(81)},74:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"TRAVEL",function(){return B});var r=n(0),l=n.n(r),o=n(10),c=n.n(o),i=(n(74),n(19)),u=n(13),m=n(35),s=n(8),f=function(e,t){return e.find(function(e){return e[0]===t})[1]},p=function(e,t){var n=e.prices.find(function(e){return e[0]===t}),a=Object(i.a)(n,3);a[0];return 10*a[1]+a[2]};function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var E=function(e,t){console.log("FROM PRE");var n=t.type,a=t.payload;switch(n){case"TRAVEL":console.log("PRE",{payload:a});var r=a.destination,l=e.planets.find(function(t){return t.name===e.place}).routes.find(function(e){return e[0]===r})[1],o=f(e.inventory,"fuel");return g({},e,l>o?{actionData:{fuel:o,distance:l,valid:!1}}:{actionData:{fuel:o,distance:l,valid:!0}});case"TRADE":var c=t.payload,i=c.amount,u=c.item,m=e.place,s=e.planets,d=e.money,E=e.inventory,y=s.find(function(e){return e.name===m}),v=p(y,u);if(i>0){if(v*i>d)return console.log("Not enough money"),g({},e,{actionData:{valid:!1}})}else if(-i>E.find(function(e){return e[0]===u})[1])return console.log("Don't have enough items."),g({},e,{actionData:{valid:!1}});return g({},e,{actionData:{valid:!0,turns:1}});default:return e}};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var O=function(e,t){console.log("FROM TURN");var n=t.type,a=t.payload;switch(n){case"TRAVEL":console.log("TURN",{payload:a});var r=e.actionData,l=r.valid,o=r.distance;return l?b(o,e):e;case"TRADE":return e.actionData.valid?b(e.actionData.turns||1,e):e;default:return e}},b=function(e,t){for(var n=t.turn,a=t.planets,r=0;r<e;r++)console.log("End of turn ",n),n++,a=a.map(function(e){return v({},e,{prices:h(e.prices)})});return v({},t,{turn:n,planets:a})},h=function(e){return e.map(function(e){return[e[0],e[1],j(e[2])]})},j=function(e){return Math.max(-10,Math.min(10,e+(2-(t=5,Math.random()*t>>0))));var t},w=function(){return Boolean(JSON.parse(localStorage.getItem("starTraderSave")))};function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var S=function(e,t){switch(t.type){case"SAVE":return function(e){localStorage.setItem("starTraderSave",JSON.stringify(e))}(e),T({},e);case"LOAD":return JSON.parse(localStorage.getItem("starTraderSave"));case"RESET":return R;case"INTEREST":return T({},e,{money:e.money*t.rate||1.01});case"RANDOMISE_PRICES":return T({},e,{inventory:T({},e.inventory,{fuel:e.inventory.fuel-10}),prices:t.prices});case"TRADE":var n=t.payload,a=n.amount,r=n.item,l=e.place,o=e.planets,c=e.money,i=e.inventory,u=o.find(function(e){return e.name===l}),m=p(u,r);if(a>0){if(m*a>c)return console.log("Not enough money"),e}else if(-a>i.find(function(e){return e[0]===r})[1])return console.log("Don't have enough items."),e;return T({},e,{money:c-m*a,inventory:i.map(function(e){return e[0]===r?[e[0],e[1]+a]:e})});case"TRAVEL":var s=t.payload.destination,f=e.actionData,d=f.fuel,g=f.distance,E=f.valid;return console.log("ACTION",E,d,g),E?T({},e,{inventory:e.inventory.map(function(e){return"fuel"===e[0]?["fuel",d-g]:e}),place:s}):e;default:return e}},R={money:500,turn:1,place:"Ereb",planets:[{name:"Ereb",prices:[["fuel",5,0],["food",3,-2],["electronics",7,0],["minerals",6,0]],routes:[["Dokav",10],["Inwe",20]]},{name:"Dokav",prices:[["fuel",5,0],["food",7,0],["electronics",4,0],["minerals",6,0]],routes:[["Ereb",10]]},{name:"Inwe",prices:[["fuel",5,0],["food",6,0],["electronics",5,0],["minerals",3,0]],routes:[["Ereb",20]]}],inventory:[["fuel",30],["food",0],["electronics",0],["minerals",20]]},x=null,N=function(){return x||(x=Object(m.b)(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,n){return t.reduce(function(e,t){return t(e,n)},e)}}(E,O,S),R,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),x},P=n(41),A=n(106),k=n(107),C=n(108),I=n(109),L=n(110),M=n(84),_=n(65),V=n(105),B=function(e){var t=e.state,n=e.destination;return!(t.planets.find(function(e){return e.name===t.place}).routes.find(function(e){return e[0]===n})[1]>f(t.inventory,"fuel"))},G=function(e){var t=e.children,n=e.action,r=e.payload,o=e.variant,c=e.color,i=e.disabledLabel,m=Object(u.b)(),s=!a[n]||a[n](r);return l.a.createElement(V.a,{variant:o,color:c,disabled:!s,onClick:function(){m({type:n,payload:r})}},i&&!s?i:t)},J=Object(M.a)(function(e){return console.log({theme:e},e.palette.primary),{root:{flexGrow:1,marginTop:100},flex:{flex:1},menuButton:{marginLeft:-12,marginRight:10},align:{display:"flex",alignItems:"center"},horMar:{marginLeft:10,marginRight:10,display:"flex",alignItems:"center"},topMargin:{marginTop:80},textAlignCenter:{textAlign:"center"},verSpace:{marginTop:"1rem"},selectedRow:{backgroundColor:e.palette.primary.light,"& td":{color:e.palette.getContrastText(e.palette.primary.light)}}}})(function(e){var t=e.classes,n=Object(r.useState)(null),a=Object(i.a)(n,2),o=a[0],c=a[1],m=Object(u.c)(function(e){return e}),s=m.inventory,f=m.place,d=m.planets.find(function(e){return e.name===f}),g=Object(_.a)();return console.log({tt:g}),l.a.createElement("div",{className:t.root},l.a.createElement(P.a,{align:"center",variant:"h6"},"Cargo"),l.a.createElement(A.a,null,l.a.createElement(k.a,null,l.a.createElement(C.a,null,l.a.createElement(I.a,null,"Item"),l.a.createElement(I.a,{align:"right"},"Amount"),l.a.createElement(I.a,{align:"right"},"Local Price"))),l.a.createElement(L.a,null,s.map(function(e,n){var a=Object(i.a)(e,2),r=a[0],u=a[1];return l.a.createElement(C.a,{className:o===r?t.selectedRow:"",onClick:function(){return c(r)},key:r},l.a.createElement(I.a,null,r),l.a.createElement(I.a,{className:"amount",align:"right"},u),l.a.createElement(I.a,{align:"right"},p(d,r)))}))),l.a.createElement("div",{className:t.verSpace},null!=o&&l.a.createElement("div",{className:t.align},l.a.createElement(G,{color:"primary",variant:"contained",action:"TRADE",payload:{item:o,amount:1}},"Buy"),l.a.createElement("div",{className:t.flex+" "+t.textAlignCenter},"Amount: 1"),l.a.createElement(G,{color:"secondary",variant:"contained",action:"TRADE",payload:{item:o,amount:-1}},"Sell"))))}),U=n(124),X=Object(M.a)(function(e){return{root:{flexGrow:1,marginTop:100},flex:{flex:1},menuButton:{marginLeft:-12,marginRight:10},align:{display:"flex",alignItems:"center"},horMar:{marginLeft:10,marginRight:10,display:"flex",alignItems:"center"},topMargin:{marginTop:80},textAlignCenter:{textAlign:"center"},vertMargin:{marginTop:20,marginBottom:10}}})(function(e){var t=e.classes,n=Object(u.c)(function(e){return e}),a=n.planets,r=n.place,o=a.find(function(e){return e.name===r});return l.a.createElement("div",{className:t.vertMargin},l.a.createElement(P.a,{align:"center",variant:"h6"},"Travel"),l.a.createElement(A.a,null,l.a.createElement(k.a,null,l.a.createElement(C.a,null,l.a.createElement(I.a,null,"Destination"),l.a.createElement(I.a,{align:"center"},"Distance"),l.a.createElement(I.a,{align:"right"},l.a.createElement(U.a,{title:"What can you do"},l.a.createElement("span",null,"Action"))))),l.a.createElement(L.a,null,o.routes.map(function(e){var t=Object(i.a)(e,2),a=t[0],r=t[1];return l.a.createElement(C.a,{key:a},l.a.createElement(I.a,null,a),l.a.createElement(I.a,{align:"center"},r),l.a.createElement(I.a,{align:"right"},l.a.createElement(G,{disabledLabel:"Not enough fuel",variant:"contained",action:"TRAVEL",payload:{state:n,destination:a}},"Travel")))}))))}),W=n(112),F=function(){return l.a.createElement("div",null,l.a.createElement(W.a,{maxWidth:"sm"},l.a.createElement(J,null)),l.a.createElement(W.a,{maxWidth:"sm"},l.a.createElement(X,null)))},q=n(113),z=n(114),H=n(115),K=n(45),Q=n.n(K),Y=n(48),Z=n.n(Y),$=n(46),ee=n.n($),te=n(47),ne=n.n(te),ae=n(60),re=n.n(ae),le=Object(M.a)(function(e){return{root:{flexGrow:1,marginTop:100},flex:{flex:1},menuButton:{marginLeft:-12,marginRight:10},align:{display:"flex",alignItems:"center",justifyContent:"center"},horMar:{marginLeft:10,marginRight:10,display:"flex",alignItems:"center"}}})(function(e){var t=e.classes,n=e.toggleTheme,a=e.handleDrawerOpen,r=Object(u.c)(function(e){return e}),o=r.money,c=r.place,i=r.turn;return l.a.createElement(q.a,{position:"fixed"},l.a.createElement(z.a,null,l.a.createElement(H.a,{color:"inherit",className:t.menuButton,onClick:a},l.a.createElement(Q.a,null)),l.a.createElement("div",{className:t.flex+" "+t.align},l.a.createElement("span",{className:t.horMar},l.a.createElement(ee.a,null)," ",i),l.a.createElement("span",{className:t.horMar},l.a.createElement(ne.a,null)," ",o," "),l.a.createElement("span",{className:t.horMar},l.a.createElement(Z.a,null)," ",c)),l.a.createElement(H.a,{onClick:n},l.a.createElement(re.a,null))))}),oe=n(121),ce=n(64),ie=n(125),ue=n(123),me=n(116),se=n(117),fe=n(118),pe=n(119),de=n(120),ge=n(122),Ee=n(61),ye=n.n(Ee),ve=n(63),Oe=n.n(ve),be=n(62),he=n.n(be),je=Object(ge.a)(function(e){return{root:{flexGrow:1,marginTop:100},flex:{flex:1},padded:{padding:"1rem"}}}),we=function(e){var t=je(e),n=Object(u.b)();return console.log("saved",w()),l.a.createElement(ue.a,{open:e.open,onClose:e.handleDrawerClose},l.a.createElement("div",{className:t.padded},l.a.createElement(P.a,{variant:"h6"},"StarTrader"),l.a.createElement(P.a,{variant:"caption"},"v0.1.0"),l.a.createElement(me.a,null),l.a.createElement(se.a,null,l.a.createElement(fe.a,{button:!0,onClick:function(){return n({type:"SAVE"})}},l.a.createElement(pe.a,null,l.a.createElement(ye.a,null)),l.a.createElement(de.a,null,"Save Game")),l.a.createElement(fe.a,{disabled:!w(),button:!0,onClick:function(){e.handleDrawerClose(),n({type:"LOAD"})}},l.a.createElement(pe.a,null,l.a.createElement(he.a,null)),l.a.createElement(de.a,null,"Load Game")),l.a.createElement(fe.a,{button:!0,onClick:function(){return n({type:"RESET"})}},l.a.createElement(pe.a,null,l.a.createElement(Oe.a,null)),l.a.createElement(de.a,null,"Restart")))))},De=N();var Te=function(){var e=Object(r.useState)("dark"),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(!1),c=Object(i.a)(o,2),m=c[0],s=c[1],f=Object(ce.a)({palette:{type:n}});return l.a.createElement(u.a,{store:De},l.a.createElement(oe.a,{theme:f},l.a.createElement(ie.a,null),l.a.createElement("div",{className:"App"},l.a.createElement(le,{handleDrawerOpen:function(){return s(!0)},toggleTheme:function(){return a("dark"===n?"light":"dark")}}),l.a.createElement(we,{handleDrawerClose:function(){return s(!1)},open:m}),l.a.createElement(F,null))))};c.a.render(l.a.createElement(Te,null),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.e2ddabc2.chunk.js.map