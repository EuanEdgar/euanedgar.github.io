(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-472d6858","chunk-8b71aefa","chunk-047dd572"],{"0481":function(t,e,n){"use strict";var i=n("23e7"),r=n("a2bf"),o=n("7b0b"),a=n("50c4"),c=n("a691"),u=n("65f0");i({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=o(this),n=a(e.length),i=u(e,0);return i.length=r(i,e,e,n,0,void 0===t?1:c(t)),i}})},"0538":function(t,e,n){"use strict";var i=n("1c0b"),r=n("861d"),o=[].slice,a={},c=function(t,e,n){if(!(e in a)){for(var i=[],r=0;r<e;r++)i[r]="a["+r+"]";a[e]=Function("C,a","return new C("+i.join(",")+")")}return a[e](t,n)};t.exports=Function.bind||function(t){var e=i(this),n=o.call(arguments,1),a=function(){var i=n.concat(o.call(arguments));return this instanceof a?c(e,i.length,i):e.apply(t,i)};return r(e.prototype)&&(a.prototype=e.prototype),a}},"257e":function(t,e,n){"use strict";function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return i}))},"262e":function(t,e,n){"use strict";function i(t,e){return i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}n.d(e,"a",(function(){return r}))},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("6b75");function r(t){if(Array.isArray(t))return Object(i["a"])(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var a=n("06c5");function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return r(t)||o(t)||Object(a["a"])(t)||c()}},"2caf":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("4ae1"),n("3410");function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var o=n("7037"),a=n.n(o),c=n("257e");function u(t,e){return!e||"object"!==a()(e)&&"function"!==typeof e?Object(c["a"])(t):e}function s(t){var e=r();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}},3410:function(t,e,n){var i=n("23e7"),r=n("d039"),o=n("7b0b"),a=n("e163"),c=n("e177"),u=r((function(){a(1)}));i({target:"Object",stat:!0,forced:u,sham:!c},{getPrototypeOf:function(t){return a(o(t))}})},"4ae1":function(t,e,n){var i=n("23e7"),r=n("d066"),o=n("1c0b"),a=n("825a"),c=n("861d"),u=n("7c73"),s=n("0538"),f=n("d039"),l=r("Reflect","construct"),h=f((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),p=!f((function(){l((function(){}))})),b=h||p;i({target:"Reflect",stat:!0,forced:b,sham:b},{construct:function(t,e){o(t),a(e);var n=arguments.length<3?t:o(arguments[2]);if(p&&!h)return l(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var i=[null];return i.push.apply(i,e),new(s.apply(t,i))}var r=n.prototype,f=u(c(r)?r:Object.prototype),b=Function.apply.call(t,f,e);return c(b)?b:f}})},7037:function(t,e,n){function i(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(t.exports=i=function(t){return typeof t},t.exports["default"]=t.exports,t.exports.__esModule=!0):(t.exports=i=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports["default"]=t.exports,t.exports.__esModule=!0),i(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),t.exports=i,t.exports["default"]=t.exports,t.exports.__esModule=!0},"71bb":function(t,e,n){"use strict";n.r(e);var i=n("2909"),r=n("d4ec"),o=n("bee2"),a=n("3835"),c=(n("d81d"),n("99af"),n("cb29"),n("cb36")),u=n("eed3"),s=n("7bbc"),f=["#6b4000","#543506","#845b1e","#442902","#443602","#6d4302"],l=["#ff8c00","#ffffff","#ecab5c","#ec995c","#e87621","#ca6e1d","#eab87b","#bf7c2b","#efb46d","#ffca00","#f9d650","#e0ba28","#ff6b00"],h=[":"],p=[")","(","o","§","D","C","0","P"],b=Object(s["a"])(h,p).map((function(t){var e=Object(a["a"])(t,2),n=e[0],i=e[1];return"".concat(n).concat(i)})),m=[";)"];b.push.apply(b,m);var d=function(){function t(e){var n=e.x,i=e.y,o=e.canvas;Object(r["a"])(this,t),this.x=n,this.y=i,this.size=200,this.momentumX=(o.width/2-n)/1,this.momentumY=(o.height/2-i)/1,this.momentumSpin=.5,this.rotation=0,this.mass=Object(c["a"])(.2,5),this.stemColour=Object(u["a"])(f),this.fleshColour=Object(u["a"])(l),this.face=Object(u["a"])(b),this.canvas=o}return Object(o["a"])(t,[{key:"step",value:function(t){this.applyGravity(t),this.move(t),this.bounce(),this.rotate()}},{key:"applyGravity",value:function(t){var e=this.mass;this.momentumY+=200*e*t}},{key:"move",value:function(t){var e=this.momentumX,n=this.momentumY;this.x+=e*t,this.y+=n*t}},{key:"bounce",value:function(){var t=this.size,e=this.x,n=this.y,i=t/2,r=e-i,o=e+i,a=n-i,c=n+i;(o>=this.canvas.width||r<=0)&&(o>=this.canvas.width?(this.x=this.canvas.width-i,this.momentumSpin+=this.momentumY/10):r<=0&&(this.x=i,this.momentumSpin-=this.momentumY/10),this.momentumX*=-.8,this.momentumY*=.9,this.momentumSpin*=.5),(c>=this.canvas.height||a<=0)&&(c>=this.canvas.height?(this.y=this.canvas.height-i,this.momentumSpin-=this.momentumX/20):a<=0&&(this.y=i,this.momentumSpin+=this.momentumX/20),this.momentumY*=-.8,this.momentumX*=.9,this.momentumSpin*=.5)}},{key:"rotate",value:function(){this.rotation+=this.momentumSpin,this.momentumSpin*=.99}},{key:"draw",value:function(t){var e=this.x,n=this.y,r=this.size,o=this.rotation,a=this.fleshColour,c=this.stemColour,u=this.face,s=r/100;t.lineWidth=2;var f=function(t,i){var r=Math.PI/180*o,a=Math.cos(r),c=Math.sin(r),u=a*(t-e)+c*(i-n)+e,s=a*(i-n)-c*(t-e)+n;return[u,s]},l=function(){t.fillStyle=c,t.beginPath(),t.moveTo.apply(t,Object(i["a"])(f(e-10*s,n-45*s))),t.lineTo.apply(t,Object(i["a"])(f(e-5*s,n-60*s))),t.lineTo.apply(t,Object(i["a"])(f(e+5*s,n-60*s))),t.lineTo.apply(t,Object(i["a"])(f(e+10*s,n-45*s))),t.fill(),t.stroke(),t.closePath()},h=function(){t.fillStyle=a,t.beginPath(),t.arc(e,n,50*s,0,2*Math.PI,!0),t.fill(),t.stroke(),t.closePath()},p=function(){t.textAlign="center",t.fillStyle="#000000",t.font="".concat(30*s,"px Arial"),t.fillText(u,e,n+7*s)};l(),h(),p()}}]),t}();e["default"]=d},"7bbc":function(t,e,n){"use strict";n("0481"),n("d81d");var i=function(t,e){return t.map((function(t){return e.map((function(e){return[t,e]}))})).flat(1)};e["a"]=i},"81d5":function(t,e,n){"use strict";var i=n("7b0b"),r=n("23cb"),o=n("50c4");t.exports=function(t){var e=i(this),n=o(e.length),a=arguments.length,c=r(a>1?arguments[1]:void 0,n),u=a>2?arguments[2]:void 0,s=void 0===u?n:r(u,n);while(s>c)e[c++]=t;return e}},"8e9b":function(t,e,n){"use strict";n.r(e);var i=n("d4ec"),r=n("bee2"),o=n("262e"),a=n("2caf"),c=(n("159b"),n("bf20")),u=n("71bb"),s="#111111",f=function(t){Object(o["a"])(n,t);var e=Object(a["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(r["a"])(n,[{key:"init",value:function(){var t=this;this.pumpkins=[],this.canvas.addEventListener("click",(function(e){t.spawnPumpkin(e.clientX,e.clientY)}))}},{key:"loop",value:function(){var t=this;this.fillBackground(),this.pumpkins.forEach((function(e){e.step(t.scalar),e.draw(t.context,t.canvas)})),0===this.pumpkins.length&&this.drawInstructions()}},{key:"spawnPumpkin",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math.round(this.canvas.width/2),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Math.round(this.canvas.height/2);this.pumpkins.push(new u["default"]({x:t,y:e,canvas:this.canvas}))}},{key:"fillBackground",value:function(){var t=this.canvas,e=this.context;e.fillStyle=s,e.fillRect(0,0,t.width,t.height)}},{key:"drawInstructions",value:function(){var t=this.context,e=this.canvas;t.fillStyle="#ffffff",t.textAlign="center",t.font="50px sans-serif",t.fillText("Click to place a pumpkin",e.width/2,e.height/2)}}]),n}(c["default"]);e["default"]=f},a2bf:function(t,e,n){"use strict";var i=n("e8b5"),r=n("50c4"),o=n("0366"),a=function(t,e,n,c,u,s,f,l){var h,p=u,b=0,m=!!f&&o(f,l,3);while(b<c){if(b in n){if(h=m?m(n[b],b,e):n[b],s>0&&i(h))p=a(t,e,h,r(h.length),p,s-1)-1;else{if(p>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[p]=h}p++}b++}return p};t.exports=a},bee2:function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}n.d(e,"a",(function(){return r}))},bf20:function(t,e,n){"use strict";n.r(e);var i=n("1da1"),r=n("d4ec"),o=n("bee2"),a=n("ade3"),c=(n("96cf"),n("d3b7"),function(){function t(e){var n=e.canvas,i=e.context;Object(r["a"])(this,t),this.canvas=n,this.context=i}return Object(o["a"])(t,[{key:"init",value:function(){}},{key:"start",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.init();case 2:return t.next=4,new Promise((function(t){return requestAnimationFrame(t)}));case 4:if(i=t.sent,!e){t.next=11;break}return r=i-e,this.scalar=1/r,t.next=10,this.loop();case 10:n=t.sent;case 11:e=i;case 12:if(!n&&!this.haltAnimation){t.next=2;break}case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"stop",value:function(){this.haltAnimation=!0}}]),t}());Object(a["a"])(c,"contextType","2d"),e["default"]=c},cb29:function(t,e,n){var i=n("23e7"),r=n("81d5"),o=n("44d2");i({target:"Array",proto:!0},{fill:r}),o("fill")},cb36:function(t,e,n){"use strict";var i=function(t,e){return Math.random()*(e-t)+t};e["a"]=i},d4ec:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return i}))},eed3:function(t,e,n){"use strict";var i=n("efa9"),r=function(t){return t.length&&t[Object(i["a"])(0,t.length-1)]||void 0};e["a"]=r},efa9:function(t,e,n){"use strict";var i=n("cb36"),r=function(t,e){return Math.floor(Object(i["a"])(t,e+1))};e["a"]=r}}]);
//# sourceMappingURL=chunk-472d6858.e4d0eb15.js.map