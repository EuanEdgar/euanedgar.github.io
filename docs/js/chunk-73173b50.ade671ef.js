(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73173b50","chunk-2d0ceb60"],{"612a":function(e,n){function r(e){return e?"string"===typeof e?e:e.source:null}function a(...e){const n=e.map(e=>r(e)).join("");return n}function t(e){const n={keyword:"in of on if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await import",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Behavior bool color coordinate date double enumeration font geocircle georectangle geoshape int list matrix4x4 parent point quaternion real rect size string url variant vector2d vector3d vector4d Promise"},r="[a-zA-Z_][a-zA-Z0-9\\._]*",t={className:"keyword",begin:"\\bproperty\\b",starts:{className:"string",end:"(:|=|;|,|//|/\\*|$)",returnEnd:!0}},i={className:"keyword",begin:"\\bsignal\\b",starts:{className:"string",end:"(\\(|:|=|;|,|//|/\\*|$)",returnEnd:!0}},s={className:"attribute",begin:"\\bid\\s*:",starts:{className:"string",end:r,returnEnd:!1}},o={begin:r+"\\s*:",returnBegin:!0,contains:[{className:"attribute",begin:r,end:"\\s*:",excludeEnd:!0,relevance:0}],relevance:0},c={begin:a(r,/\s*\{/),end:/\{/,returnBegin:!0,relevance:0,contains:[e.inherit(e.TITLE_MODE,{begin:r})]};return{name:"QML",aliases:["qt"],case_insensitive:!1,keywords:n,contains:[{className:"meta",begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,{className:"subst",begin:"\\$\\{",end:"\\}"}]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{begin:/</,end:/>\s*[);\]]/,relevance:0,subLanguage:"xml"}],relevance:0},i,t,{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/[A-Za-z$_][0-9A-Za-z$_]*/}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]}],illegal:/\[|%/},{begin:"\\."+e.IDENT_RE,relevance:0},s,o,c],illegal:/#/}}e.exports=t},"7ad3":function(e,n,r){function a(){a.warned||(a.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/qml" instead of "highlight.js/lib/languages/qml.js"'))}a(),e.exports=r("612a")}}]);
//# sourceMappingURL=chunk-73173b50.ade671ef.js.map