(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6908bd78"],{"454f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",t._l(t.rows,(function(e,n){return a("b-row",{key:n},t._l(e,(function(e,n){return a("b-col",{key:n,attrs:{cols:t.columnDefs["xs"]||12/t.count,sm:t.columnDefs["sm"],md:t.columnDefs["md"],lg:t.columnDefs["lg"],xl:t.columnDefs["xl"]}},[t._t("default",null,{item:e})],2)})),1)})),1)},r=[],s=(a("a9e3"),function(t,e){return t.reduce((function(t,a,n){return n%e===0&&t.push([]),t[t.length-1].push(a),t}),[])}),o=s,c={props:{items:Array,count:Number,columnDefs:{type:Object,default:function(){return{}}}},computed:{rows:function(){var t=this.items,e=this.count;return o(t,e)}}},u=c,i=a("2877"),l=Object(i["a"])(u,n,r,!1,null,"0edc15fa",null);e["a"]=l.exports},"912c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{class:t.className+"-listing",attrs:{to:t.location}},[a("b-card",{attrs:{title:t.name,"img-src":t.headerImage}})],1)},r=[],s={},o=s,c=(a("e1ad"),a("2877")),u=Object(c["a"])(o,n,r,!1,null,null,null);e["a"]=u.exports},"963a":function(t,e,a){"use strict";a("99af");var n=function(t,e){var a=t.slug;return"/blog/categories/".concat(a,"/assets/").concat(e)};e["a"]=n},a32a:function(t,e,a){},d4a7:function(t,e,a){"use strict";a("99af");var n=function(t,e){var a=t.slug;return"/blog/posts/".concat(a,"/assets/").concat(e)};e["a"]=n},e1ad:function(t,e,a){"use strict";a("a32a")},f6b6:function(t,e,a){"use strict";a.r(e);var n,r,s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("DataLoader",{attrs:{path:t.dataPath},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.data;return[a("CategoryDisplay",{attrs:{category:e}})]}}])})},o=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("CategoryHeading",{attrs:{category:t.category}}),a("PostsList",{attrs:{posts:t.category.posts}})],1)},u=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Grid",{attrs:{items:t.posts,count:3},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.item;return[a("PostListing",{attrs:{post:e}})]}}])})},l=[],f=(a("b0c0"),a("912c")),p=a("d4a7"),m={mixins:[f["a"]],props:{post:Object},data:function(){return{className:"post"}},computed:{headerImage:function(){var t=this.post.headerImage;return t?Object(p["a"])(this.post,t.src):null},location:function(){var t=this.post.location;return t},name:function(){var t=this.post.name;return t}}},g=m,d=a("2877"),h=Object(d["a"])(g,n,r,!1,null,"1188a138",null),b=h.exports,v=a("454f"),y={props:{posts:Array},components:{PostListing:b,Grid:v["a"]}},_=y,O=Object(d["a"])(_,i,l,!1,null,"a5c2ee30",null),j=O.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Nav",{attrs:{text:t.category.name,image:t.image,imageOptions:t.imageOptions}})},D=[],w=a("8c05"),k=a("963a"),I={props:{category:Object},computed:{image:function(){var t=this.headerImage,e=this.category;return Object(k["a"])(e,t.src)},imageOptions:function(){var t=this.headerImage;return t.options},headerImage:function(){var t=this.category,e=t.headerImage;return e}},components:{Nav:w["a"]}},$=I,E=Object(d["a"])($,x,D,!1,null,"478657a2",null),L=E.exports,P={props:{category:Object},components:{CategoryHeading:L,PostsList:j}},N=P,C=Object(d["a"])(N,c,u,!1,null,"458aabf0",null),A=C.exports,G=a("87c3"),H={computed:{slug:function(){var t=this.$router.currentRoute;return t.params.slug},dataPath:function(){var t=this.slug;return"categories/".concat(t,"/category.json")}},components:{CategoryDisplay:A,DataLoader:G["a"]}},J=H,S=Object(d["a"])(J,s,o,!1,null,"26aad0b3",null);e["default"]=S.exports}}]);
//# sourceMappingURL=chunk-6908bd78.afda87be.js.map