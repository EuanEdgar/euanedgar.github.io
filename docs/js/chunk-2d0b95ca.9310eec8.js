(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b95ca"],{"332f":function(e,a){var n="[0-9](_*[0-9])*",s=`\\.(${n})`,t="[0-9a-fA-F](_*[0-9a-fA-F])*",i={className:"number",variants:[{begin:`(\\b(${n})((${s})|\\.)?|(${s}))[eE][+-]?(${n})[fFdD]?\\b`},{begin:`\\b(${n})((${s})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${s})[fFdD]?\\b`},{begin:`\\b(${n})[fFdD]\\b`},{begin:`\\b0[xX]((${t})\\.?|(${t})?\\.(${t}))[pP][+-]?(${n})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${t})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function r(e,a,n){return-1===n?"":e.replace(a,s=>r(e,a,n-1))}function c(e){const a="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",n=a+r("(?:<"+a+"~~~(?:\\s*,\\s*"+a+"~~~)*>)?",/~~~/g,2),s=["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do"],t=["super","this"],c=["false","true","null"],l=["char","boolean","long","float","int","byte","short","double"],o={keyword:s,literal:c,type:l,built_in:t},b={className:"meta",begin:"@"+a,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},_={className:"params",begin:/\(/,end:/\)/,keywords:o,relevance:0,contains:[e.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:o,illegal:/<\/|#/,contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,a],className:{1:"keyword",3:"title.class"}},{begin:[a,/\s+/,a,/\s+/,/=/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,a],className:{1:"keyword",3:"title.class"},contains:[_,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+n+"\\s+)",e.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:o,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:o,relevance:0,contains:[b,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},i,b]}}e.exports=c}}]);
//# sourceMappingURL=chunk-2d0b95ca.9310eec8.js.map