(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c9b69c2"],{"24b6":function(e,t,a){"use strict";var n=a("51cd"),s=a.n(n);s.a},"29fa":function(e,t,a){"use strict";function n(e){for(var t=r(),a=l(t),n=0;n<a.length;n++){var s=a[n];if(s.id==e)return{previous:n>0?a[n-1]:null,next:n<a.length-1?a[n+1]:null}}return null}function s(){return[{id:"home",name:"Home",url:"/",parentId:null},{id:"games",name:"Games",url:"/games",parentId:"home"},{id:"examples",name:"Examples",url:"/examples",parentId:"home"},{id:"help",name:"Help",url:"/help",parentId:"home"},{id:"documentation",name:"Documentation",url:"/docs",parentId:"help"},{id:"introduction",name:"Introduction",url:"/docs/introduction",parentId:"documentation"},{id:"game-properties",name:"Game properties",url:"/docs/game-properties",parentId:"documentation"},{id:"levels",name:"Levels",url:"/docs/levels",parentId:"documentation"},{id:"level-editor",name:"Level editor",url:"/docs/levels/level-editor",parentId:"levels"},{id:"object-types",name:"Object types",url:"/docs/object-types",parentId:"documentation"},{id:"behaviours",name:"Behaviours",url:"/docs/object-types/behaviours",parentId:"object-types"},{id:"animations",name:"Animations",url:"/docs/object-types/animations",parentId:"object-types"},{id:"resources",name:"Resources",url:"/docs/resources",parentId:"documentation"},{id:"images",name:"Images",url:"/docs/resources/images",parentId:"resources"},{id:"audios",name:"Audios",url:"/docs/resources/audios",parentId:"resources"},{id:"physics-engine",name:"Physics engine",url:"/docs/physics-engine",parentId:"documentation"},{id:"matter-js",name:"Matter.js",url:"/docs/physics-engine/matter-js",parentId:"physics-engine"},{id:"matter-js-constraints",name:"Matter.js constraints",url:"/docs/physics-engine/matter-js-constraints",parentId:"physics-engine"},{id:"visual-scripts",name:"Visual scripts",url:"/docs/visual-scripts",parentId:"documentation"},{id:"visual-script-actions",name:"Actions",url:"/docs/visual-scripts/actions",parentId:"visual-scripts"},{id:"visual-script-conditions",name:"Conditions",url:"/docs/visual-scripts/conditions",parentId:"visual-scripts"},{id:"visual-script-loops",name:"Loops",url:"/docs/visual-scripts/loops",parentId:"visual-scripts"},{id:"visual-script-comments",name:"Comments",url:"/docs/visual-scripts/comments",parentId:"visual-scripts"},{id:"expressions",name:"Expressions",url:"/docs/visual-scripts/expressions",parentId:"visual-scripts"},{id:"visual-script-functions",name:"Visual script functions",url:"/docs/visual-scripts/visual-script-functions",parentId:"visual-scripts"},{id:"global-variables",name:"Global variables",url:"/docs/global-variables",parentId:"documentation"},{id:"export",name:"Export",url:"/docs/export",parentId:"documentation"},{id:"import",name:"Import",url:"/docs/import",parentId:"documentation"},{id:"extensions",name:"Extensions",url:"/docs/extensions",parentId:"documentation"},{id:"neuroevolution",name:"Neuroevolution",url:"/docs/extensions/neuroevolution",parentId:"extensions"},{id:"advanced-audio",name:"Advanced audio",url:"/docs/extensions/advanced-audio",parentId:"extensions"},{id:"multiplayer",name:"Multiplayer",url:"/docs/extensions/multiplayer",parentId:"extensions"},{id:"advanced-settings",name:"Advanced settings",url:"/docs/advanced-settings",parentId:"documentation"},{id:"tutorials",name:"Tutorials",url:"/tutorials",parentId:"help"},{id:"how-to-create-a-platform-game",name:"How to create a platform game",url:"/tutorials/how-to-create-a-platform-game",parentId:"tutorials"},{id:"creating-a-top-down-shooter-game",name:"Creating a top down shooter game",url:"/tutorials/creating-a-top-down-shooter-game",parentId:"tutorials"},{id:"how-to-publish-your-game-on-itch-io",name:"How to publish your game on itch.io",url:"/tutorials/how-to-publish-your-game-on-itch-io",parentId:"tutorials"},{id:"online-tools",name:"Online tools",url:"/online-tools",parentId:"home"},{id:"gun-database-manager",name:"GUN database manager",url:"/online-tools/gun-database-manager",parentId:"online-tools"}]}function i(){return o("documentation")}function o(e){for(var t=s(),a=[],n=0;n<t.length;n++){var i=t[n];i.parentId==e&&a.push(i)}return a}function r(){for(var e=s(),t=[],a=0;a<e.length;a++){var n=e[a],i=o(n.id);n.children=i,"documentation"==n.parentId&&t.push(n)}return t}function l(e){for(var t=[],a=0;a<e.length;a++){var n=e[a];t.push(n);var s=n.children;if(null!=s)for(var i=0;i<s.length;i++){var o=s[i];t.push(o)}}return t}t["a"]={listMenuItems:s,listDocumentationMenuItems:i,listDocumentationMenuItemsWithChildren:r,getPreviousAndNextMenuItems:n}},"2fbc":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"div_breadcrumb"},[a("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},e._l(e.items,(function(t){return a("li",{key:t.id,class:t.active?"breadcrumb-item active":"breadcrumb-item"},[t.active?e._e():a("a",{attrs:{href:t.url}},[e._v(e._s(t.name))]),t.active?a("span",[e._v(e._s(t.name))]):e._e()])})),0)])])])},s=[],i=(a("b0c0"),a("ad29")),o=a("92dc"),r=a("29fa"),l={name:"Breadcrumb",components:{},props:{pageId:String},data:function(){return{pages:[]}},mounted:function(){this.pages=r["a"].listMenuItems();for(var e=i["a"].listGames(),t=0;t<e.length;t++){var a=e[t];this.pages.push({id:"example-game-"+a.slug,name:a.name,url:"/games/"+a.slug,parentId:"games"})}for(var n=o["a"].listExamples(),s=0;s<n.length;s++){var l=n[s];this.pages.push({id:"example-"+l.slug,name:l.name,url:"/examples/"+l.slug,parentId:"examples"})}},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(e){for(var t=0;t<this.pages.length;t++){var a=this.pages[t];if(a.id==e)return a}return null},buildItems:function(){var e=[],t=this.getPageById(this.pageId);if(null==t)return[];t.active=!0,e.push(t);var a=t.parentId,n=0;while(null!=a||n>=10){var s=this.getPageById(a);e.unshift(s),a=s.parentId,n++}return e}}},u=l,c=(a("b650"),a("2877")),d=Object(c["a"])(u,n,s,!1,null,"1c7f9e99",null);t["a"]=d.exports},"51cd":function(e,t,a){},7830:function(e,t,a){},"8e14":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("DocumentationLayout",{attrs:{pageId:"matter-js"}},[a("h1",[e._v("Matter.js")]),a("br"),a("div",{staticClass:"documentationContent"},[a("h3",[e._v("What is Matter.js?")]),a("p",[e._v("Matter.js is a 2D physics engine used in EasyGameMaker.")]),a("p",[e._v('When creating object types, you can choose if it will have physics engine of type "Basic" or "Matter.js". This one is a much more powerful and allow you to configure many attributes.')]),a("p",[e._v("The collision detection and response will be done automatically (without the need of "),a("router-link",{attrs:{to:"/docs/visual-scripts"}},[e._v("visual scripts")]),e._v(").")],1),a("h3",[e._v("How to use Matter.js")]),a("p",[e._v('To enable "Matter.js" for an object type, follow steps below:')]),a("ol",[a("li",[e._v('Select the "Object types" tab.')]),a("li",[e._v('Click on the "Edit" button in the desired object type (or create a new object type).')]),a("li",[e._v('Select the "Physics" tab.')]),a("li",[e._v('For the "physics engine" attribute, select option "Matter.js".')]),a("li",[e._v("Choose the remaining attributes as you wish, or use the default values.")]),a("li",[e._v('Click on the button "save changes".')])]),a("p",[e._v("Repeat the process for every "),a("router-link",{attrs:{to:"/docs/object-types"}},[e._v("object type")]),e._v(" that you want. Each object type can have different physics attributes.")],1),a("p",[e._v('To configure the gravity, go to the "Levels" tab, select the desired '),a("router-link",{attrs:{to:"/docs/levels"}},[e._v("level")]),e._v(', select the "Properties" tab, edit the "gravity" attribute and click on the button "save changes".')],1),a("p",[e._v("Finally, you just need to add objects to the levels, at the "),a("router-link",{attrs:{to:"/docs/levels/level-editor"}},[e._v("level editor")]),e._v(". Each object type can have multiple instances of it (multiple objects) at each level. Another option is to add objects using "),a("router-link",{attrs:{to:"/docs/visual-scripts"}},[e._v("visual scripts")]),e._v(".")],1),a("h3",[e._v("Matter.js attributes for objects")]),a("table",{staticClass:"doc_table"},[a("tr",[a("th",[e._v("Attribute")]),a("th",[e._v("Description")])]),a("tr",[a("td",[e._v("static object")]),a("td",[e._v("A static object can never change position or angle and is completely fixed. For example, you can use this option for platforms, walls and static obstacles.")])]),a("tr",[a("td",[e._v("collision shape")]),a("td",[e._v("At the moment, the allowed collision shapes are: rectangle, circle and polygon.")])]),a("tr",[a("td",[e._v("restitution (elasticity)")]),a("td",[e._v("Bounciness of the object. Must be a number between 0 and 1. A value of 0 means collisions will be perfectly inelastic and no bouncing will occur. A value of 0.7 means the object will bounce back with approximately 70% of its kinetic energy.")])]),a("tr",[a("td",[e._v("air friction")]),a("td",[e._v("A number that defines the air friction of the object (air resistance). A value of 0 means the object will never slow as it moves through space. The higher the value, the faster an object slows when moving through space.")])]),a("tr",[a("td",[e._v("friction")]),a("td",[e._v("Must be a number between 0 and 1. A value of 0 means that the object may slide indefinitely. A value of 1 means the object may come to a stop almost instantly after a force is applied.")])]),a("tr",[a("td",[e._v("density")]),a("td",[e._v("A number that defines the density of the object (mass per unit area).")])]),a("tr",[a("td",[e._v("angular velocity")]),a("td",[e._v("A number that defines the initial rotational velocity of the object. This is the initial angular velocity (when level starts) but can be changed at any time with visual scripts. The angular velocity may also change automatically when the object collides with other objects.")])]),a("tr",[a("td",[e._v("is sensor")]),a("td",[e._v("A flag that indicates whether the object is a sensor. Sensor triggers collision events, but doesn't react with colliding objects physically.")])])])])])],1)},s=[],i=a("9ecf"),o={name:"MatterJS",components:{DocumentationLayout:i["a"]}},r=o,l=a("2877"),u=Object(l["a"])(r,n,s,!1,null,"73d76216",null);t["default"]=u.exports},"9ecf":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header",{attrs:{addMargin:!1}}),a("div",{staticClass:"parent"},[a("DocumentationLateralMenu",{attrs:{currentPageId:e.pageId}}),a("div",{staticClass:"documentationDivParent"},[a("Breadcrumb",{attrs:{pageId:e.pageId}}),a("div",[e._t("default"),a("br")],2),a("DocumentationFooter",{attrs:{pageId:e.pageId}}),a("div")],1)],1),a("Footer")],1)},s=[],i=a("0418"),o=a("fd2d"),r=a("2fbc"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"documentatioLateralMenu"},e._l(e.menuItems,(function(t){return a("div",{key:t.id},[a("router-link",{class:t.id==e.currentPageId?"menu-item current-menu-item":"menu-item",attrs:{tag:"a",to:t.url}},[a("span",{staticClass:"menu-link"},[e._v(e._s(t.name))])]),e._l(t.children,(function(t){return a("div",{key:t.id},[a("router-link",{class:t.id==e.currentPageId?"menu-item current-menu-item":"menu-item",attrs:{tag:"a",to:t.url}},[a("span",{staticClass:"menu-link",staticStyle:{"margin-left":"15px"}},[e._v(e._s(t.name))])])],1)}))],2)})),0)},u=[],c=a("29fa"),d={name:"DocumentationLateralMenu",components:{},props:{currentPageId:String},data:function(){return{menuItems:[]}},mounted:function(){this.menuItems=c["a"].listDocumentationMenuItemsWithChildren()},computed:{},methods:{}},m=d,p=(a("24b6"),a("2877")),v=Object(p["a"])(m,l,u,!1,null,"4deb2c60",null),h=v.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[null!=e.previous?a("div",{staticClass:"documentationPreviousAndNext home"},[e._v(" Previous: "),a("router-link",{attrs:{to:e.previous.url}},[e._v(e._s(e.previous.name))])],1):e._e(),null!=e.next?a("div",{staticClass:"documentationPreviousAndNext home"},[e._v(" Next: "),a("router-link",{attrs:{to:e.next.url}},[e._v(e._s(e.next.name))])],1):e._e(),null!=e.next||null!=e.previous?a("br"):e._e(),null!=e.next||null!=e.previous?a("br"):e._e(),a("div",{staticClass:"documentationSeeAlso home"},[e._v(" See also: "),a("br"),a("router-link",{attrs:{to:"/tutorials"}},[e._v("Tutorials")]),a("br"),a("a",{attrs:{target:"_blank",href:"https://www.youtube.com/@easygamemaker"}},[e._v("Video tutorials")]),a("br"),a("router-link",{attrs:{to:"/community"}},[e._v("Community")])],1)])},g=[],f={name:"DocumentationFooter",components:{},props:{pageId:String},data:function(){return{previous:null,next:null}},mounted:function(){var e=c["a"].getPreviousAndNextMenuItems(this.pageId);this.previous=e.previous,this.next=e.next},computed:{},methods:{}},_=f,y=(a("a0c6"),Object(p["a"])(_,b,g,!1,null,"40a41340",null)),I=y.exports,j={name:"Documentation",components:{Header:i["a"],Footer:o["a"],Breadcrumb:r["a"],DocumentationLateralMenu:h,DocumentationFooter:I},props:{pageId:String}},w=j,x=(a("d033"),Object(p["a"])(w,n,s,!1,null,"ce7abb88",null));t["a"]=x.exports},"9edd":function(e,t,a){},a0c6:function(e,t,a){"use strict";var n=a("7830"),s=a.n(n);s.a},b650:function(e,t,a){"use strict";var n=a("9edd"),s=a.n(n);s.a},ce5b:function(e,t,a){},d033:function(e,t,a){"use strict";var n=a("ce5b"),s=a.n(n);s.a}}]);