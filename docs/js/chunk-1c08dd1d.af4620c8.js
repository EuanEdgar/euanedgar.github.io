(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c08dd1d","chunk-2d0a4208"],{"04b0":function(n,e){function a(n){return n?"string"===typeof n?n:n.source:null}function i(...n){const e=n.map(n=>a(n)).join("");return e}function s(n){const e={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},a={begin:"^[-\\*]{3,}",end:"$"},s={className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},c={className:"bullet",begin:"^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},t={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},o=/[A-Za-z][A-Za-z0-9+.-]*/,g={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:i(/\[.+?\]\(/,o,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}]},d={className:"strong",contains:[],variants:[{begin:/_{2}/,end:/_{2}/},{begin:/\*{2}/,end:/\*{2}/}]},l={className:"emphasis",contains:[],variants:[{begin:/\*(?!\*)/,end:/\*/},{begin:/_(?!_)/,end:/_/,relevance:0}]};d.contains.push(l),l.contains.push(d);let r=[e,g];d.contains=d.contains.concat(r),l.contains=l.contains.concat(r),r=r.concat(d,l);const b={className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:r},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:r}]}]},u={className:"quote",begin:"^>\\s+",contains:r,end:"$"};return{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[b,e,c,d,l,u,s,a,g,t]}}n.exports=s},4109:function(n,e,a){function i(){i.warned||(i.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/markdown" instead of "highlight.js/lib/languages/markdown.js"'))}i(),n.exports=a("04b0")}}]);
//# sourceMappingURL=chunk-1c08dd1d.af4620c8.js.map