(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40a3a151","chunk-2d225834"],{"2f4f":function(e,n,t){function a(){a.warned||(a.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/handlebars" instead of "highlight.js/lib/languages/handlebars.js"'))}a(),e.exports=t("e55c")},e55c:function(e,n){function t(e){return e?"string"===typeof e?e:e.source:null}function a(e){return i("(?:",e,")*")}function s(e){return i("(?:",e,")?")}function i(...e){const n=e.map(e=>t(e)).join("");return n}function r(e){const n=e[e.length-1];return"object"===typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function l(...e){const n=r(e),a="("+(n.capture?"":"?:")+e.map(e=>t(e)).join("|")+")";return a}function o(e){const n={$pattern:/[\w.\/]+/,built_in:["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},t={$pattern:/[\w.\/]+/,literal:["true","false","undefined","null"]},r=/""|"[^"]+"/,o=/''|'[^']+'/,c=/\[\]|\[[^\]]+\]/,u=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,d=/(\.|\/)/,g=l(r,o,c,u),b=i(s(/\.|\.\/|\//),g,a(i(d,g))),m=i("(",c,"|",u,")(?==)"),p={begin:b},h=e.inherit(p,{keywords:t}),w={begin:/\(/,end:/\)/},f={className:"attr",begin:m,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,h,w]}}},N={begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},k={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,N,f,h,w],returnEnd:!0},E=e.inherit(p,{className:"name",keywords:n,starts:e.inherit(k,{end:/\)/})});w.contains=[E];const y=e.inherit(p,{keywords:n,className:"name",starts:e.inherit(k,{end:/\}\}/})}),O=e.inherit(p,{keywords:n,className:"name"}),M=e.inherit(p,{className:"name",keywords:n,starts:e.inherit(k,{end:/\}\}/})}),_={begin:/\\\{\{/,skip:!0},T={begin:/\\\\(?=\{\{)/,skip:!0};return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[_,T,e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[y],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[O]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[y]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[O]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[M]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[M]}]}}e.exports=o}}]);
//# sourceMappingURL=chunk-40a3a151.17829ff7.js.map