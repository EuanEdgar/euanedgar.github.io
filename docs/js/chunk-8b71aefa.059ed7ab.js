(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b71aefa"],{"0481":function(t,e,n){"use strict";var i=n("23e7"),a=n("a2bf"),o=n("7b0b"),r=n("50c4"),c=n("a691"),s=n("65f0");i({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=o(this),n=r(e.length),i=s(e,0);return i.length=a(i,e,e,n,0,void 0===t?1:c(t)),i}})},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("6b75");function a(t){if(Array.isArray(t))return Object(i["a"])(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var r=n("06c5");function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return a(t)||o(t)||Object(r["a"])(t)||c()}},"71bb":function(t,e,n){"use strict";n.r(e);var i=n("2909"),a=n("d4ec"),o=n("bee2"),r=n("3835"),c=(n("d81d"),n("99af"),n("cb29"),n("cb36")),s=n("eed3"),u=n("7bbc"),h=["#6b4000","#543506","#845b1e","#442902","#443602","#6d4302"],f=["#ff8c00","#ffffff","#ecab5c","#ec995c","#e87621","#ca6e1d","#eab87b","#bf7c2b","#efb46d","#ffca00","#f9d650","#e0ba28","#ff6b00"],m=[":"],l=[")","(","o","§","D","C","0","P"],b=Object(u["a"])(m,l).map((function(t){var e=Object(r["a"])(t,2),n=e[0],i=e[1];return"".concat(n).concat(i)})),v=[";)"];b.push.apply(b,v);var p=function(){function t(e){var n=e.x,i=e.y,o=e.canvas;Object(a["a"])(this,t),this.x=n,this.y=i,this.size=200,this.momentumX=(o.width/2-n)/1,this.momentumY=(o.height/2-i)/1,this.momentumSpin=.5,this.rotation=0,this.mass=Object(c["a"])(.2,5),this.stemColour=Object(s["a"])(h),this.fleshColour=Object(s["a"])(f),this.face=Object(s["a"])(b),this.canvas=o}return Object(o["a"])(t,[{key:"step",value:function(t){this.applyGravity(t),this.move(t),this.bounce(),this.rotate()}},{key:"applyGravity",value:function(t){var e=this.mass;this.momentumY+=200*e*t}},{key:"move",value:function(t){var e=this.momentumX,n=this.momentumY;this.x+=e*t,this.y+=n*t}},{key:"bounce",value:function(){var t=this.size,e=this.x,n=this.y,i=t/2,a=e-i,o=e+i,r=n-i,c=n+i;(o>=this.canvas.width||a<=0)&&(o>=this.canvas.width?(this.x=this.canvas.width-i,this.momentumSpin+=this.momentumY/10):a<=0&&(this.x=i,this.momentumSpin-=this.momentumY/10),this.momentumX*=-.8,this.momentumY*=.9,this.momentumSpin*=.5),(c>=this.canvas.height||r<=0)&&(c>=this.canvas.height?(this.y=this.canvas.height-i,this.momentumSpin-=this.momentumX/20):r<=0&&(this.y=i,this.momentumSpin+=this.momentumX/20),this.momentumY*=-.8,this.momentumX*=.9,this.momentumSpin*=.5)}},{key:"rotate",value:function(){this.rotation+=this.momentumSpin,this.momentumSpin*=.99}},{key:"draw",value:function(t){var e=this.x,n=this.y,a=this.size,o=this.rotation,r=this.fleshColour,c=this.stemColour,s=this.face,u=a/100;t.lineWidth=2;var h=function(t,i){var a=Math.PI/180*o,r=Math.cos(a),c=Math.sin(a),s=r*(t-e)+c*(i-n)+e,u=r*(i-n)-c*(t-e)+n;return[s,u]},f=function(){t.fillStyle=c,t.beginPath(),t.moveTo.apply(t,Object(i["a"])(h(e-10*u,n-45*u))),t.lineTo.apply(t,Object(i["a"])(h(e-5*u,n-60*u))),t.lineTo.apply(t,Object(i["a"])(h(e+5*u,n-60*u))),t.lineTo.apply(t,Object(i["a"])(h(e+10*u,n-45*u))),t.fill(),t.stroke(),t.closePath()},m=function(){t.fillStyle=r,t.beginPath(),t.arc(e,n,50*u,0,2*Math.PI,!0),t.fill(),t.stroke(),t.closePath()},l=function(){t.textAlign="center",t.fillStyle="#000000",t.font="".concat(30*u,"px Arial"),t.fillText(s,e,n+7*u)};f(),m(),l()}}]),t}();e["default"]=p},"7bbc":function(t,e,n){"use strict";n("0481"),n("d81d");var i=function(t,e){return t.map((function(t){return e.map((function(e){return[t,e]}))})).flat(1)};e["a"]=i},"81d5":function(t,e,n){"use strict";var i=n("7b0b"),a=n("23cb"),o=n("50c4");t.exports=function(t){var e=i(this),n=o(e.length),r=arguments.length,c=a(r>1?arguments[1]:void 0,n),s=r>2?arguments[2]:void 0,u=void 0===s?n:a(s,n);while(u>c)e[c++]=t;return e}},a2bf:function(t,e,n){"use strict";var i=n("e8b5"),a=n("50c4"),o=n("0366"),r=function(t,e,n,c,s,u,h,f){var m,l=s,b=0,v=!!h&&o(h,f,3);while(b<c){if(b in n){if(m=v?v(n[b],b,e):n[b],u>0&&i(m))l=r(t,e,m,a(m.length),l,u-1)-1;else{if(l>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[l]=m}l++}b++}return l};t.exports=r},bee2:function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}n.d(e,"a",(function(){return a}))},cb29:function(t,e,n){var i=n("23e7"),a=n("81d5"),o=n("44d2");i({target:"Array",proto:!0},{fill:a}),o("fill")},cb36:function(t,e,n){"use strict";var i=function(t,e){return Math.random()*(e-t)+t};e["a"]=i},d4ec:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return i}))},eed3:function(t,e,n){"use strict";var i=n("efa9"),a=function(t){return t.length&&t[Object(i["a"])(0,t.length-1)]||void 0};e["a"]=a},efa9:function(t,e,n){"use strict";var i=n("cb36"),a=function(t,e){return Math.floor(Object(i["a"])(t,e+1))};e["a"]=a}}]);
//# sourceMappingURL=chunk-8b71aefa.059ed7ab.js.map