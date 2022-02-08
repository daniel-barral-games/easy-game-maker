(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-427ca621"],{"06e9":function(t,e,o){},"2fbc":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("div",{staticClass:"div_breadcrumb"},[o("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[o("ol",{staticClass:"breadcrumb"},t._l(t.items,(function(e){return o("li",{key:e.id,class:e.active?"breadcrumb-item active":"breadcrumb-item"},[e.active?t._e():o("a",{attrs:{href:e.url}},[t._v(t._s(e.name))]),e.active?o("span",[t._v(t._s(e.name))]):t._e()])})),0)])])])},n=[],r={name:"Breadcrumb",components:{},props:{pageId:String},data:function(){return{pages:[{id:"home",name:"Home",url:"/",parentId:null},{id:"documentation",name:"Documentation",url:"/docs",parentId:"home"},{id:"introduction",name:"Introduction",url:"/docs/introduction",parentId:"documentation"},{id:"levels",name:"Levels",url:"/docs/introduction/levels",parentId:"introduction"},{id:"events",name:"Events",url:"/docs/introduction/events",parentId:"introduction"},{id:"object-types",name:"Object types",url:"/docs/introduction/object-types",parentId:"introduction"},{id:"images",name:"Images",url:"/docs/introduction/images",parentId:"introduction"},{id:"global-variables",name:"Global variables",url:"/docs/introduction/global-variables",parentId:"introduction"},{id:"export",name:"Export",url:"/docs/introduction/export",parentId:"introduction"},{id:"tutorials",name:"Tutorials",url:"/tutorials",parentId:"home"},{id:"how-to-create-a-platform-game",name:"How to create a platform game",url:"/tutorials/how-to-create-a-platform-game",parentId:"tutorials"},{id:"creating-a-top-down-shooter-game",name:"Creating a top down shooter game",url:"/tutorials/creating-a-top-down-shooter-game",parentId:"tutorials"}]}},mounted:function(){},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(t){for(var e=0;e<this.pages.length;e++){var o=this.pages[e];if(o.id==t)return o}return null},buildItems:function(){var t=[],e=this.getPageById(this.pageId);e.active=!0,t.push(e);var o=e.parentId,a=0;while(null!=o||a>=10){var n=this.getPageById(o);t.unshift(n),o=n.parentId,a++}return t}}},i=r,u=(o("e109"),o("2877")),s=Object(u["a"])(i,a,n,!1,null,"3d457c7d",null);e["a"]=s.exports},"50b1":function(t,e,o){"use strict";var a=o("d4d1"),n=o.n(a);n.a},b7ee:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Header"),o("Breadcrumb",{attrs:{pageId:"export"}}),o("h1",[t._v("Export")]),o("br"),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"normalText div_shadow"},[o("h2",[t._v("Export to HTML")]),o("p",[t._v("You can export your games to HTML.")]),o("p",[t._v("Export to HTML if you want to download standalone playable version of your game.")]),o("p",[t._v("When you export to HTML, a ZIP file will be created. Download the ZIP file and extract its contents.")]),o("p",[t._v('Open the file "index.html" to play the game.')]),o("p",[t._v("The exported game can be played locally or on a server.")]),o("p",[t._v('If you upload your game to a server, include the "resources" folder together with the "index.html" file.')]),o("h2",[t._v("Export to JSON")]),o("p",[t._v("Export to JSON if you want to save your game to continue editing it later.")]),o("p",[t._v('Save the JSON to a file in your machine. When you want to continue editing the game, paste the content of the JSON in the textarea at "Import from JSON".')]),o("h2",[t._v("Import from JSON")]),o("p",[t._v("If you previously exported your game to JSON, you can later import it from JSON when you want to continue editing your game.")]),o("p",[t._v('Just paste the contents of the JSON in the textarea at "Import from JSON" and click button "Import".')]),o("h2",[t._v("Generate source code")]),o("p",[t._v("On the Export tab, you can generate the source code of your game. This source code is only for debugging purposes and is relative to the events only.")]),o("p",[t._v("The source code is in Javascript.")])])}],r=o("0418"),i=o("2fbc"),u={name:"Export",components:{Header:r["a"],Breadcrumb:i["a"]}},s=u,c=(o("50b1"),o("2877")),d=Object(c["a"])(s,a,n,!1,null,"7c714b36",null);e["default"]=d.exports},d4d1:function(t,e,o){},e109:function(t,e,o){"use strict";var a=o("06e9"),n=o.n(a);n.a}}]);