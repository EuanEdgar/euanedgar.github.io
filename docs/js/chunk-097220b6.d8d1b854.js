(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-097220b6"],{"25f0":function(n,t,e){"use strict";var r=e("6eeb"),c=e("825a"),a=e("d039"),o=e("ad6d"),i="toString",u=RegExp.prototype,f=u[i],l=a((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),d=f.name!=i;(l||d)&&r(RegExp.prototype,i,(function(){var n=c(this),t=String(n.source),e=n.flags,r=String(void 0===e&&n instanceof RegExp&&!("flags"in u)?o.call(n):e);return"/"+t+"/"+r}),{unsafe:!0})},"571e":function(n,t,e){"use strict";e("ba2e")},ba2e:function(n,t,e){},bf93:function(n,t,e){"use strict";var r=e("5530"),c=function(n){var t=n.container,e=n.size;return{x:Math.floor(t.clientWidth/e),y:Math.floor(t.clientHeight/e)}},a=c,o=function(n,t){for(var e=0;e<n;e++)t(e)},i=o,u=function(n){var t=n.x,e=n.y,r=n.container,c=document.createElement("table"),a=document.createElement("tbody");c.appendChild(a);var o=[];return i(e,(function(n){var e=document.createElement("tr");o[n]=[],i(t,(function(t){var r=document.createElement("td");e.appendChild(r),o[n][t]=r})),a.appendChild(e)})),r.appendChild(c),{table:c,grid:o}},f=u;t["a"]=function(n){var t=n.size,e=void 0===t?50:t,c=n.container,o=a({container:c,size:e});return f(Object(r["a"])(Object(r["a"])({},o),{},{container:c}))}},caad:function(n,t,e){"use strict";var r=e("23e7"),c=e("4d64").includes,a=e("44d2");r({target:"Array",proto:!0},{includes:function(n){return c(this,n,arguments.length>1?arguments[1]:void 0)}}),a("includes")},cb36:function(n,t,e){"use strict";var r=function(n,t){return Math.random()*(t-n)+n};t["a"]=r},e295:function(n,t,e){"use strict";e.r(t);var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",attrs:{id:"colour_wave"}})},c=[],a=(e("99af"),e("159b"),e("caad"),e("d3b7"),e("25f0"),e("eed3")),o=e("bf93"),i=function(n){var t=Object(o["a"])({container:n}),e=t.grid,r=Object(a["a"])([function(n,t){return"#".concat(n).concat(t,"00")},function(n,t){return"#".concat(n,"00").concat(t)},function(n,t){return"#00".concat(n).concat(t)}]),c=0,i=function(){e.forEach((function(n,t,e){var a=e.length;n.forEach((function(n,e,o){var i=o.length,f=Math.floor(([0,3].includes(c)?t:a-t)/a*255),l=Math.floor(([0,1].includes(c)?i-e:e)/i*255),d=r(u(f.toString(16),2),u(l.toString(16),2));n.style.backgroundColor=d}))})),c+=1,c>3&&(c=0)};setInterval(i,500)};function u(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;n=n.toString();while(n.length<t)n="0".concat(n);return n}var f=i,l={mounted:function(){f(this.$refs.container)}},d=l,s=(e("571e"),e("2877")),v=Object(s["a"])(d,r,c,!1,null,null,null);t["default"]=v.exports},eed3:function(n,t,e){"use strict";var r=e("efa9"),c=function(n){return n.length&&n[Object(r["a"])(0,n.length-1)]||void 0};t["a"]=c},efa9:function(n,t,e){"use strict";var r=e("cb36"),c=function(n,t){return Math.floor(Object(r["a"])(n,t+1))};t["a"]=c}}]);
//# sourceMappingURL=chunk-097220b6.d8d1b854.js.map