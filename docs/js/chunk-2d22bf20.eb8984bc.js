(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22bf20"],{f0aa:function(e,n){function a(e){const n={className:"number",begin:/[$%]\d+/},a={className:"number",begin:/\b\d+/},s={className:"number",begin:/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/},r={className:"number",begin:/:\d{1,5}/};return{name:"Apache config",aliases:["apacheconf"],case_insensitive:!0,contains:[e.HASH_COMMENT_MODE,{className:"section",begin:/<\/?/,end:/>/,contains:[s,r,e.inherit(e.QUOTE_STRING_MODE,{relevance:0})]},{className:"attribute",begin:/\w+/,relevance:0,keywords:{_:["order","deny","allow","setenv","rewriterule","rewriteengine","rewritecond","documentroot","sethandler","errordocument","loadmodule","options","header","listen","serverroot","servername"]},starts:{end:/$/,relevance:0,keywords:{literal:"on off all deny allow"},contains:[{className:"meta",begin:/\s\[/,end:/\]$/},{className:"variable",begin:/[\$%]\{/,end:/\}/,contains:["self",n]},s,a,e.QUOTE_STRING_MODE]}}],illegal:/\S/}}e.exports=a}}]);
//# sourceMappingURL=chunk-2d22bf20.eb8984bc.js.map