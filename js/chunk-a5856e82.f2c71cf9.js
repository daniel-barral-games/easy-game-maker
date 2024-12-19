(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5856e82"],{"24b6":function(e,t,n){"use strict";var o=n("51cd"),i=n.n(o);i.a},"29fa":function(e,t,n){"use strict";function o(e){for(var t=r(),n=c(t),o=0;o<n.length;o++){var i=n[o];if(i.id==e)return{previous:o>0?n[o-1]:null,next:o<n.length-1?n[o+1]:null}}return null}function i(){return[{id:"home",name:"Home",url:"/",parentId:null},{id:"games",name:"Games",url:"/games",parentId:"home"},{id:"examples",name:"Examples",url:"/examples",parentId:"home"},{id:"help",name:"Help",url:"/help",parentId:"home"},{id:"documentation",name:"Documentation",url:"/docs",parentId:"help"},{id:"introduction",name:"Introduction",url:"/docs/introduction",parentId:"documentation"},{id:"game-properties",name:"Game properties",url:"/docs/game-properties",parentId:"documentation"},{id:"levels",name:"Levels",url:"/docs/levels",parentId:"documentation"},{id:"level-editor",name:"Level editor",url:"/docs/levels/level-editor",parentId:"levels"},{id:"object-types",name:"Object types",url:"/docs/object-types",parentId:"documentation"},{id:"behaviours",name:"Behaviours",url:"/docs/object-types/behaviours",parentId:"object-types"},{id:"animations",name:"Animations",url:"/docs/object-types/animations",parentId:"object-types"},{id:"resources",name:"Resources",url:"/docs/resources",parentId:"documentation"},{id:"images",name:"Images",url:"/docs/resources/images",parentId:"resources"},{id:"audios",name:"Audios",url:"/docs/resources/audios",parentId:"resources"},{id:"physics-engine",name:"Physics engine",url:"/docs/physics-engine",parentId:"documentation"},{id:"matter-js",name:"Matter.js",url:"/docs/physics-engine/matter-js",parentId:"physics-engine"},{id:"matter-js-constraints",name:"Matter.js constraints",url:"/docs/physics-engine/matter-js-constraints",parentId:"physics-engine"},{id:"visual-scripts",name:"Visual scripts",url:"/docs/visual-scripts",parentId:"documentation"},{id:"visual-script-actions",name:"Actions",url:"/docs/visual-scripts/actions",parentId:"visual-scripts"},{id:"visual-script-conditions",name:"Conditions",url:"/docs/visual-scripts/conditions",parentId:"visual-scripts"},{id:"visual-script-loops",name:"Loops",url:"/docs/visual-scripts/loops",parentId:"visual-scripts"},{id:"visual-script-comments",name:"Comments",url:"/docs/visual-scripts/comments",parentId:"visual-scripts"},{id:"expressions",name:"Expressions",url:"/docs/visual-scripts/expressions",parentId:"visual-scripts"},{id:"visual-script-functions",name:"Visual script functions",url:"/docs/visual-scripts/visual-script-functions",parentId:"visual-scripts"},{id:"global-variables",name:"Global variables",url:"/docs/global-variables",parentId:"documentation"},{id:"export",name:"Export",url:"/docs/export",parentId:"documentation"},{id:"import",name:"Import",url:"/docs/import",parentId:"documentation"},{id:"extensions",name:"Extensions",url:"/docs/extensions",parentId:"documentation"},{id:"neuroevolution",name:"Neuroevolution",url:"/docs/extensions/neuroevolution",parentId:"extensions"},{id:"advanced-audio",name:"Advanced audio",url:"/docs/extensions/advanced-audio",parentId:"extensions"},{id:"multiplayer",name:"Multiplayer",url:"/docs/extensions/multiplayer",parentId:"extensions"},{id:"advanced-settings",name:"Advanced settings",url:"/docs/advanced-settings",parentId:"documentation"},{id:"tutorials",name:"Tutorials",url:"/tutorials",parentId:"help"},{id:"how-to-create-a-platform-game",name:"How to create a platform game",url:"/tutorials/how-to-create-a-platform-game",parentId:"tutorials"},{id:"creating-a-top-down-shooter-game",name:"Creating a top down shooter game",url:"/tutorials/creating-a-top-down-shooter-game",parentId:"tutorials"},{id:"how-to-publish-your-game-on-itch-io",name:"How to publish your game on itch.io",url:"/tutorials/how-to-publish-your-game-on-itch-io",parentId:"tutorials"},{id:"online-tools",name:"Online tools",url:"/online-tools",parentId:"home"},{id:"gun-database-manager",name:"GUN database manager",url:"/online-tools/gun-database-manager",parentId:"online-tools"}]}function a(){return s("documentation")}function s(e){for(var t=i(),n=[],o=0;o<t.length;o++){var a=t[o];a.parentId==e&&n.push(a)}return n}function r(){for(var e=i(),t=[],n=0;n<e.length;n++){var o=e[n],a=s(o.id);o.children=a,"documentation"==o.parentId&&t.push(o)}return t}function c(e){for(var t=[],n=0;n<e.length;n++){var o=e[n];t.push(o);var i=o.children;if(null!=i)for(var a=0;a<i.length;a++){var s=i[a];t.push(s)}}return t}t["a"]={listMenuItems:i,listDocumentationMenuItems:a,listDocumentationMenuItemsWithChildren:r,getPreviousAndNextMenuItems:o}},"2fbc":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"div_breadcrumb"},[n("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb"},e._l(e.items,(function(t){return n("li",{key:t.id,class:t.active?"breadcrumb-item active":"breadcrumb-item"},[t.active?e._e():n("a",{attrs:{href:t.url}},[e._v(e._s(t.name))]),t.active?n("span",[e._v(e._s(t.name))]):e._e()])})),0)])])])},i=[],a=(n("b0c0"),n("ad29")),s=n("92dc"),r=n("29fa"),c={name:"Breadcrumb",components:{},props:{pageId:String},data:function(){return{pages:[]}},mounted:function(){this.pages=r["a"].listMenuItems();for(var e=a["a"].listGames(),t=0;t<e.length;t++){var n=e[t];this.pages.push({id:"example-game-"+n.slug,name:n.name,url:"/games/"+n.slug,parentId:"games"})}for(var o=s["a"].listExamples(),i=0;i<o.length;i++){var c=o[i];this.pages.push({id:"example-"+c.slug,name:c.name,url:"/examples/"+c.slug,parentId:"examples"})}},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(e){for(var t=0;t<this.pages.length;t++){var n=this.pages[t];if(n.id==e)return n}return null},buildItems:function(){var e=[],t=this.getPageById(this.pageId);if(null==t)return[];t.active=!0,e.push(t);var n=t.parentId,o=0;while(null!=n||o>=10){var i=this.getPageById(n);e.unshift(i),n=i.parentId,o++}return e}}},d=c,u=(n("b650"),n("2877")),l=Object(u["a"])(d,o,i,!1,null,"1c7f9e99",null);t["a"]=l.exports},"3b6e":function(e,t,n){e.exports=n.p+"img/condition-block.7fb6bc77.png"},"51cd":function(e,t,n){},7830:function(e,t,n){},"9ecf":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header",{attrs:{addMargin:!1}}),n("div",{staticClass:"parent"},[n("DocumentationLateralMenu",{attrs:{currentPageId:e.pageId}}),n("div",{staticClass:"documentationDivParent"},[n("Breadcrumb",{attrs:{pageId:e.pageId}}),n("div",[e._t("default"),n("br")],2),n("DocumentationFooter",{attrs:{pageId:e.pageId}}),n("div")],1)],1),n("Footer")],1)},i=[],a=n("0418"),s=n("fd2d"),r=n("2fbc"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"documentatioLateralMenu"},e._l(e.menuItems,(function(t){return n("div",{key:t.id},[n("router-link",{class:t.id==e.currentPageId?"menu-item current-menu-item":"menu-item",attrs:{tag:"a",to:t.url}},[n("span",{staticClass:"menu-link"},[e._v(e._s(t.name))])]),e._l(t.children,(function(t){return n("div",{key:t.id},[n("router-link",{class:t.id==e.currentPageId?"menu-item current-menu-item":"menu-item",attrs:{tag:"a",to:t.url}},[n("span",{staticClass:"menu-link",staticStyle:{"margin-left":"15px"}},[e._v(e._s(t.name))])])],1)}))],2)})),0)},d=[],u=n("29fa"),l={name:"DocumentationLateralMenu",components:{},props:{currentPageId:String},data:function(){return{menuItems:[]}},mounted:function(){this.menuItems=u["a"].listDocumentationMenuItemsWithChildren()},computed:{},methods:{}},m=l,p=(n("24b6"),n("2877")),v=Object(p["a"])(m,c,d,!1,null,"4deb2c60",null),g=v.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[null!=e.previous?n("div",{staticClass:"documentationPreviousAndNext home"},[e._v(" Previous: "),n("router-link",{attrs:{to:e.previous.url}},[e._v(e._s(e.previous.name))])],1):e._e(),null!=e.next?n("div",{staticClass:"documentationPreviousAndNext home"},[e._v(" Next: "),n("router-link",{attrs:{to:e.next.url}},[e._v(e._s(e.next.name))])],1):e._e(),null!=e.next||null!=e.previous?n("br"):e._e(),null!=e.next||null!=e.previous?n("br"):e._e(),n("div",{staticClass:"documentationSeeAlso home"},[e._v(" See also: "),n("br"),n("router-link",{attrs:{to:"/tutorials"}},[e._v("Tutorials")]),n("br"),n("a",{attrs:{target:"_blank",href:"https://www.youtube.com/@easygamemaker"}},[e._v("Video tutorials")]),n("br"),n("router-link",{attrs:{to:"/community"}},[e._v("Community")])],1)])},b=[],f={name:"DocumentationFooter",components:{},props:{pageId:String},data:function(){return{previous:null,next:null}},mounted:function(){var e=u["a"].getPreviousAndNextMenuItems(this.pageId);this.previous=e.previous,this.next=e.next},computed:{},methods:{}},_=f,I=(n("a0c6"),Object(p["a"])(_,h,b,!1,null,"40a41340",null)),y=I.exports,C={name:"Documentation",components:{Header:a["a"],Footer:s["a"],Breadcrumb:r["a"],DocumentationLateralMenu:g,DocumentationFooter:y},props:{pageId:String}},x=C,k=(n("d033"),Object(p["a"])(x,o,i,!1,null,"ce7abb88",null));t["a"]=k.exports},"9edd":function(e,t,n){},a0c6:function(e,t,n){"use strict";var o=n("7830"),i=n.n(o);i.a},b650:function(e,t,n){"use strict";var o=n("9edd"),i=n.n(o);i.a},ce5b:function(e,t,n){},d033:function(e,t,n){"use strict";var o=n("ce5b"),i=n.n(o);i.a},d20d:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("DocumentationLayout",{attrs:{pageId:"visual-script-conditions"}},[o("h1",[e._v("Conditions")]),o("br"),o("div",{staticClass:"documentationContent"},[o("h3",[e._v("What are condition blocks?")]),o("p",[e._v("The condition block checks a logical test, and if the test succeeds (the condition evaluates to true), then it will execute the blocks inside. Otherwise the blocks inside will not be executed.")]),o("p",[e._v("The condition blocks can contain one or more blocks inside them.")]),o("p",[e._v("Below is an example of condition block. It checks if spacebar keyboard key is pressed. If true, player shoots a bullet and plays a sound.")]),o("div",{staticClass:"div_shadow"},[o("img",{attrs:{src:n("3b6e")}})]),o("br"),o("br"),o("h3",[e._v("Condition categories")]),o("p",[e._v("Condition categories are groups of condition types.")]),o("p",[e._v("Every condition type belong to one or more categories.")]),o("table",{staticClass:"doc_table"},[o("tr",[o("th",[e._v("Category")]),o("th",[e._v("Description")])]),e._l(e.conditionCategories,(function(t){return o("tr",{key:t.code},[o("td",[e._v(e._s(t.name))]),o("td",["OBJECTS"==t.code?o("div",[e._v("Conditions related to objects.")]):e._e(),"TIME"==t.code?o("div",[e._v("Conditions related to time. For example, every 5 seconds.")]):e._e(),"KEYBOARD"==t.code?o("div",[e._v("Conditions related to keyboard.")]):e._e(),"MOUSE"==t.code?o("div",[e._v("Conditions related to mouse.")]):e._e(),"BUTTON"==t.code?o("div",[e._v("Conditions related to buttons.")]):e._e(),"TOUCH"==t.code?o("div",[e._v("Conditions related to mobile touch.")]):e._e(),"GAMEPAD"==t.code?o("div",[e._v("Conditions related to gamepads / joysticks.")]):e._e(),"EXPRESSION"==t.code?o("div",[e._v("Conditions based on custom expressions, that can involve object attributes, variables and so on.")]):e._e()])])}))],2),o("br"),o("br"),o("h3",{attrs:{id:"CONDITION_TYPES"}},[e._v("Condition types")]),o("p",[e._v("Below you can find the full list of condition types for each category.")]),o("ul",e._l(e.conditionCategories,(function(t){return o("div",{key:t.code},[o("li",[e._v("Category: "+e._s(t.name))]),e._l(e.conditionTypes,(function(n){return o("ul",{key:n.code},e._l(n.categories,(function(i){return o("div",{key:i},[t.code==i?o("div",[o("li",[o("router-link",{attrs:{to:"#"+n.code}},[e._v(e._s(n.name))])],1)]):e._e()])})),0)}))],2)})),0),o("br"),e._l(e.conditionTypesVO,(function(t){return o("div",{key:t.conditionType.code},[o("div",{attrs:{id:t.conditionType.code}},[o("h4",{staticStyle:{"background-color":"#cccccc"}},[e._v(e._s(t.conditionType.name))]),"COLLISION"==t.conditionType.code?o("div",[o("p",[e._v("This condition checks for collision between objects.")])]):e._e(),"ALWAYS"==t.conditionType.code?o("div",[o("p",[e._v("This condition will always return true, so the blocks inside will always be executed.")])]):e._e(),o("div",[e._v("Category: "+e._s(t.category.name))]),o("br")])])}))],2)])],1)},i=[],a=n("9ecf"),s=n("f24e"),r=n("6f75"),c={name:"VisualScriptConditions",components:{DocumentationLayout:a["a"]},data:function(){return{currentVersion:null,vm:null,conditionCategories:[],conditionTypes:[],conditionTypesVO:[]}},mounted:function(){var e=this;this.currentVersion=r["a"].getCurrentVersion().engineVersion,s["a"].loadEngine(this.currentVersion).then((function(){var t=new EasyGameMakerLibrary.ActionTemplateController(null);e.vm=t,e.conditionCategories=t.genericService.getEventConditionCategories(),e.conditionTypes=t.genericService.getEventConditionTypes();for(var n=0;n<e.conditionCategories.length;n++)for(var o=e.conditionCategories[n],i=t.genericService.getEventConditionTypesByCategory(o.code),a=0;a<i.length;a++){var s=i[a],r={conditionType:s,category:o};e.conditionTypesVO.push(r)}}))}},d=c,u=n("2877"),l=Object(u["a"])(d,o,i,!1,null,"3336a68b",null);t["default"]=l.exports}}]);