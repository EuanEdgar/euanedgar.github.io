(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d215c36"],{c01d:function(n,e){function a(n){return n?"string"===typeof n?n:n.source:null}function s(...n){const e=n.map(n=>a(n)).join("");return e}function t(n){const e="HTTP/(2|1\\.[01])",a=/[A-Za-z][A-Za-z0-9-]*/,t={className:"attribute",begin:s("^",a,"(?=\\:\\s)"),starts:{contains:[{className:"punctuation",begin:/: /,relevance:0,starts:{end:"$",relevance:0}}]}},i=[t,{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}];return{name:"HTTP",aliases:["https"],illegal:/\S/,contains:[{begin:"^(?="+e+" \\d{3})",end:/$/,contains:[{className:"meta",begin:e},{className:"number",begin:"\\b\\d{3}\\b"}],starts:{end:/\b\B/,illegal:/\S/,contains:i}},{begin:"(?=^[A-Z]+ (.*?) "+e+"$)",end:/$/,contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{className:"meta",begin:e},{className:"keyword",begin:"[A-Z]+"}],starts:{end:/\b\B/,illegal:/\S/,contains:i}},n.inherit(t,{relevance:0})]}}n.exports=t}}]);
//# sourceMappingURL=chunk-2d215c36.19793fc1.js.map