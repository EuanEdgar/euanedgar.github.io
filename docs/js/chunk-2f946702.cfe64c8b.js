(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f946702","chunk-2d0d2b54"],{"5a3e":function(e,t){function n(e){return e?"string"===typeof e?e:e.source:null}function i(...e){const t=e.map(e=>n(e)).join("");return t}function r(e){const t=e[e.length-1];return"object"===typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function s(...e){const t=r(e),i="("+(t.capture?"":"?:")+e.map(e=>n(e)).join("|")+")";return i}function o(e){const t=["lcase","month","vartype","instrrev","ubound","setlocale","getobject","rgb","getref","string","weekdayname","rnd","dateadd","monthname","now","day","minute","isarray","cbool","round","formatcurrency","conversions","csng","timevalue","second","year","space","abs","clng","timeserial","fixs","len","asc","isempty","maths","dateserial","atn","timer","isobject","filter","weekday","datevalue","ccur","isdate","instr","datediff","formatdatetime","replace","isnull","right","sgn","array","snumeric","log","cdbl","hex","chr","lbound","msgbox","ucase","getlocale","cos","cdate","cbyte","rtrim","join","hour","oct","typename","trim","strcomp","int","createobject","loadpicture","tan","formatnumber","mid","split","cint","sin","datepart","ltrim","sqr","time","derived","eval","date","formatpercent","exp","inputbox","left","ascw","chrw","regexp","cstr","err"],n=["server","response","request","scriptengine","scriptenginebuildversion","scriptengineminorversion","scriptenginemajorversion"],r={begin:i(s(...t),"\\s*\\("),relevance:0,keywords:{built_in:t}},o=["true","false","null","nothing","empty"],a=["call","class","const","dim","do","loop","erase","execute","executeglobal","exit","for","each","next","function","if","then","else","on","error","option","explicit","new","private","property","let","get","public","randomize","redim","rem","select","case","set","stop","sub","while","wend","with","end","to","elseif","is","or","xor","and","not","class_initialize","class_terminate","default","preserve","in","me","byval","byref","step","resume","goto"];return{name:"VBScript",aliases:["vbs"],case_insensitive:!0,keywords:{keyword:a,built_in:n,literal:o},illegal:"//",contains:[r,e.inherit(e.QUOTE_STRING_MODE,{contains:[{begin:'""'}]}),e.COMMENT(/'/,/$/,{relevance:0}),e.C_NUMBER_MODE]}}e.exports=o},d778:function(e,t,n){function i(){i.warned||(i.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/vbscript" instead of "highlight.js/lib/languages/vbscript.js"'))}i(),e.exports=n("5a3e")}}]);
//# sourceMappingURL=chunk-2f946702.cfe64c8b.js.map