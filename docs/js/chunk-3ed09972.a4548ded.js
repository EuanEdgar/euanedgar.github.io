(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ed09972","chunk-2d215c36"],{3914:function(n,e,s){function a(){a.warned||(a.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/http" instead of "highlight.js/lib/languages/http.js"'))}a(),n.exports=s("c01d")},c01d:function(n,e){function s(n){return n?"string"===typeof n?n:n.source:null}function a(...n){const e=n.map(n=>s(n)).join("");return e}function t(n){const e="HTTP/(2|1\\.[01])",s=/[A-Za-z][A-Za-z0-9-]*/,t={className:"attribute",begin:a("^",s,"(?=\\:\\s)"),starts:{contains:[{className:"punctuation",begin:/: /,relevance:0,starts:{end:"$",relevance:0}}]}},i=[t,{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}];return{name:"HTTP",aliases:["https"],illegal:/\S/,contains:[{begin:"^(?="+e+" \\d{3})",end:/$/,contains:[{className:"meta",begin:e},{className:"number",begin:"\\b\\d{3}\\b"}],starts:{end:/\b\B/,illegal:/\S/,contains:i}},{begin:"(?=^[A-Z]+ (.*?) "+e+"$)",end:/$/,contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{className:"meta",begin:e},{className:"keyword",begin:"[A-Z]+"}],starts:{end:/\b\B/,illegal:/\S/,contains:i}},n.inherit(t,{relevance:0})]}}n.exports=t}}]);
//# sourceMappingURL=chunk-3ed09972.a4548ded.js.map