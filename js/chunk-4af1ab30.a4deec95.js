(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4af1ab30"],{"20ae":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("DocumentationLayout",{attrs:{pageId:"export"}},[n("h1",[e._v("Export")]),n("br"),n("div",{staticClass:"documentationContent"},[n("h2",[e._v("Export game to HTML")]),n("p",[e._v("You can export your games to HTML if you want to download a standalone playable version of your game.")]),n("p",[e._v('To export you game to HTML, click on the button "Export", and then click on the button "Export to HTML".')]),n("p",[e._v("When you export to HTML, a ZIP file will be created. Download the ZIP file and extract its contents.")]),n("p",[e._v('Open the file "index.html" to play the game.')]),n("p",[e._v("The exported game can be played locally or on a server.")]),n("p",[e._v('If you upload your game to a server, include the "resources" folder together with the "index.html" file.')]),n("h2",[e._v("Export game to JSON")]),n("p",[e._v("Export your game to JSON if you want to save your game to continue creating it later.")]),n("p",[e._v('To export to JSON, click on the button "Export" and then, in the "Export to JSON" section, click on the button "Download JSON".')]),n("p",[e._v("Save the JSON file in your machine. When you want to continue creating the game, you can "),n("router-link",{attrs:{to:"/docs/import"}},[e._v("import")]),e._v(" it and continue creating.")],1)])])],1)},o=[],r=n("9ecf"),s={name:"Export",components:{DocumentationLayout:r["a"]}},i=s,u=n("2877"),l=Object(u["a"])(i,a,o,!1,null,"3cedbb1a",null);t["default"]=l.exports},"24b6":function(e,t,n){"use strict";var a=n("51cd"),o=n.n(a);o.a},"29fa":function(e,t,n){"use strict";function a(e){for(var t=i(),n=u(t),a=0;a<n.length;a++){var o=n[a];if(o.id==e)return{previous:a>0?n[a-1]:null,next:a<n.length-1?n[a+1]:null}}return null}function o(){return[{id:"home",name:"Home",url:"/",parentId:null},{id:"games",name:"Games",url:"/games",parentId:"home"},{id:"examples",name:"Examples",url:"/examples",parentId:"home"},{id:"help",name:"Help",url:"/help",parentId:"home"},{id:"documentation",name:"Documentation",url:"/docs",parentId:"help"},{id:"introduction",name:"Introduction",url:"/docs/introduction",parentId:"documentation"},{id:"game-properties",name:"Game properties",url:"/docs/game-properties",parentId:"documentation"},{id:"levels",name:"Levels",url:"/docs/levels",parentId:"documentation"},{id:"level-editor",name:"Level editor",url:"/docs/levels/level-editor",parentId:"levels"},{id:"object-types",name:"Object types",url:"/docs/object-types",parentId:"documentation"},{id:"behaviours",name:"Behaviours",url:"/docs/object-types/behaviours",parentId:"object-types"},{id:"animations",name:"Animations",url:"/docs/object-types/animations",parentId:"object-types"},{id:"resources",name:"Resources",url:"/docs/resources",parentId:"documentation"},{id:"images",name:"Images",url:"/docs/resources/images",parentId:"resources"},{id:"audios",name:"Audios",url:"/docs/resources/audios",parentId:"resources"},{id:"physics-engine",name:"Physics engine",url:"/docs/physics-engine",parentId:"documentation"},{id:"matter-js",name:"Matter.js",url:"/docs/physics-engine/matter-js",parentId:"physics-engine"},{id:"matter-js-constraints",name:"Matter.js constraints",url:"/docs/physics-engine/matter-js-constraints",parentId:"physics-engine"},{id:"visual-scripts",name:"Visual scripts",url:"/docs/visual-scripts",parentId:"documentation"},{id:"visual-script-actions",name:"Actions",url:"/docs/visual-scripts/actions",parentId:"visual-scripts"},{id:"visual-script-conditions",name:"Conditions",url:"/docs/visual-scripts/conditions",parentId:"visual-scripts"},{id:"visual-script-loops",name:"Loops",url:"/docs/visual-scripts/loops",parentId:"visual-scripts"},{id:"visual-script-comments",name:"Comments",url:"/docs/visual-scripts/comments",parentId:"visual-scripts"},{id:"expressions",name:"Expressions",url:"/docs/visual-scripts/expressions",parentId:"visual-scripts"},{id:"visual-script-functions",name:"Visual script functions",url:"/docs/visual-scripts/visual-script-functions",parentId:"visual-scripts"},{id:"global-variables",name:"Global variables",url:"/docs/global-variables",parentId:"documentation"},{id:"export",name:"Export",url:"/docs/export",parentId:"documentation"},{id:"import",name:"Import",url:"/docs/import",parentId:"documentation"},{id:"extensions",name:"Extensions",url:"/docs/extensions",parentId:"documentation"},{id:"neuroevolution",name:"Neuroevolution",url:"/docs/extensions/neuroevolution",parentId:"extensions"},{id:"advanced-settings",name:"Advanced settings",url:"/docs/advanced-settings",parentId:"documentation"},{id:"tutorials",name:"Tutorials",url:"/tutorials",parentId:"help"},{id:"how-to-create-a-platform-game",name:"How to create a platform game",url:"/tutorials/how-to-create-a-platform-game",parentId:"tutorials"},{id:"creating-a-top-down-shooter-game",name:"Creating a top down shooter game",url:"/tutorials/creating-a-top-down-shooter-game",parentId:"tutorials"},{id:"how-to-publish-your-game-on-itch-io",name:"How to publish your game on itch.io",url:"/tutorials/how-to-publish-your-game-on-itch-io",parentId:"tutorials"}]}function r(){return s("documentation")}function s(e){for(var t=o(),n=[],a=0;a<t.length;a++){var r=t[a];r.parentId==e&&n.push(r)}return n}function i(){for(var e=o(),t=[],n=0;n<e.length;n++){var a=e[n],r=s(a.id);a.children=r,"documentation"==a.parentId&&t.push(a)}return t}function u(e){for(var t=[],n=0;n<e.length;n++){var a=e[n];t.push(a);var o=a.children;if(null!=o)for(var r=0;r<o.length;r++){var s=o[r];t.push(s)}}return t}t["a"]={listMenuItems:o,listDocumentationMenuItems:r,listDocumentationMenuItemsWithChildren:i,getPreviousAndNextMenuItems:a}},"2fbc":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"div_breadcrumb"},[n("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb"},e._l(e.items,(function(t){return n("li",{key:t.id,class:t.active?"breadcrumb-item active":"breadcrumb-item"},[t.active?e._e():n("a",{attrs:{href:t.url}},[e._v(e._s(t.name))]),t.active?n("span",[e._v(e._s(t.name))]):e._e()])})),0)])])])},o=[],r=(n("b0c0"),n("ad29")),s=n("92dc"),i=n("29fa"),u={name:"Breadcrumb",components:{},props:{pageId:String},data:function(){return{pages:[]}},mounted:function(){this.pages=i["a"].listMenuItems();for(var e=r["a"].listGames(),t=0;t<e.length;t++){var n=e[t];this.pages.push({id:"example-game-"+n.slug,name:n.name,url:"/games/"+n.slug,parentId:"games"})}for(var a=s["a"].listExamples(),o=0;o<a.length;o++){var u=a[o];this.pages.push({id:"example-"+u.slug,name:u.name,url:"/examples/"+u.slug,parentId:"examples"})}},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(e){for(var t=0;t<this.pages.length;t++){var n=this.pages[t];if(n.id==e)return n}return null},buildItems:function(){var e=[],t=this.getPageById(this.pageId);if(null==t)return[];t.active=!0,e.push(t);var n=t.parentId,a=0;while(null!=n||a>=10){var o=this.getPageById(n);e.unshift(o),n=o.parentId,a++}return e}}},l=u,c=(n("b650"),n("2877")),d=Object(c["a"])(l,a,o,!1,null,"1c7f9e99",null);t["a"]=d.exports},"51cd":function(e,t,n){},7830:function(e,t,n){},"9ecf":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header",{attrs:{addMargin:!1}}),n("div",{staticClass:"parent"},[n("DocumentationLateralMenu",{attrs:{currentPageId:e.pageId}}),n("div",{staticClass:"documentationDivParent"},[n("Breadcrumb",{attrs:{pageId:e.pageId}}),n("div",[e._t("default"),n("br")],2),n("DocumentationFooter",{attrs:{pageId:e.pageId}}),n("div")],1)],1),n("Footer")],1)},o=[],r=n("0418"),s=n("fd2d"),i=n("2fbc"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"documentatioLateralMenu"},e._l(e.menuItems,(function(t){return n("div",{key:t.id},[n("router-link",{class:t.id==e.currentPageId?"menu-item current-menu-item":"menu-item",attrs:{tag:"a",to:t.url}},[n("span",{staticClass:"menu-link"},[e._v(e._s(t.name))])]),e._l(t.children,(function(t){return n("div",{key:t.id},[n("router-link",{class:t.id==e.currentPageId?"menu-item current-menu-item":"menu-item",attrs:{tag:"a",to:t.url}},[n("span",{staticClass:"menu-link",staticStyle:{"margin-left":"15px"}},[e._v(e._s(t.name))])])],1)}))],2)})),0)},l=[],c=n("29fa"),d={name:"DocumentationLateralMenu",components:{},props:{currentPageId:String},data:function(){return{menuItems:[]}},mounted:function(){this.menuItems=c["a"].listDocumentationMenuItemsWithChildren()},computed:{},methods:{}},m=d,p=(n("24b6"),n("2877")),v=Object(p["a"])(m,u,l,!1,null,"4deb2c60",null),h=v.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[null!=e.previous?n("div",{staticClass:"documentationPreviousAndNext home"},[e._v(" Previous: "),n("router-link",{attrs:{to:e.previous.url}},[e._v(e._s(e.previous.name))])],1):e._e(),null!=e.next?n("div",{staticClass:"documentationPreviousAndNext home"},[e._v(" Next: "),n("router-link",{attrs:{to:e.next.url}},[e._v(e._s(e.next.name))])],1):e._e(),null!=e.next||null!=e.previous?n("br"):e._e(),null!=e.next||null!=e.previous?n("br"):e._e(),n("div",{staticClass:"documentationSeeAlso home"},[e._v(" See also: "),n("br"),n("router-link",{attrs:{to:"/tutorials"}},[e._v("Tutorials")]),n("br"),n("a",{attrs:{target:"_blank",href:"https://www.youtube.com/@easygamemaker"}},[e._v("Video tutorials")]),n("br"),n("router-link",{attrs:{to:"/community"}},[e._v("Community")])],1)])},f=[],I={name:"DocumentationFooter",components:{},props:{pageId:String},data:function(){return{previous:null,next:null}},mounted:function(){var e=c["a"].getPreviousAndNextMenuItems(this.pageId);this.previous=e.previous,this.next=e.next},computed:{},methods:{}},b=I,x=(n("a0c6"),Object(p["a"])(b,g,f,!1,null,"40a41340",null)),_=x.exports,y={name:"Documentation",components:{Header:r["a"],Footer:s["a"],Breadcrumb:i["a"],DocumentationLateralMenu:h,DocumentationFooter:_},props:{pageId:String}},w=y,k=(n("d033"),Object(p["a"])(w,a,o,!1,null,"ce7abb88",null));t["a"]=k.exports},"9edd":function(e,t,n){},a0c6:function(e,t,n){"use strict";var a=n("7830"),o=n.n(a);o.a},b650:function(e,t,n){"use strict";var a=n("9edd"),o=n.n(a);o.a},ce5b:function(e,t,n){},d033:function(e,t,n){"use strict";var a=n("ce5b"),o=n.n(a);o.a}}]);