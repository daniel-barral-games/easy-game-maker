(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group-1"],{"04d8":function(t,e,a){},"18c2":function(t,e,a){},"1a21":function(t,e,a){},3272:function(t,e,a){},3961:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("h1",[t._v("Support Us")]),t._m(0),t._m(1),t._m(2),t._m(3),a("br"),a("br"),a("Footer")],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home",staticStyle:{"margin-top":"50px"}},[a("p",[t._v("You can support us on Patreon.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a",{attrs:{href:"https://www.patreon.com/bePatron?u=35546418","data-patreon-widget-type":"become-patron-button",target:"_blank"}},[r("img",{staticStyle:{width:"160px"},attrs:{src:a("71ac")}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home",staticStyle:{"margin-top":"50px"}},[a("p",[t._v("You can also make a one-time donation by clicking the button below.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a",{staticClass:"btn btn-danger",attrs:{href:"https://easygamemaker.itch.io/easy-game-maker/donate",role:"button",target:"_blank"}},[t._v("Donate")])])}],s=a("0418"),o=a("fd2d"),i={name:"SupportUs",components:{Header:s["a"],Footer:o["a"]}},l=i,c=(a("5ab3"),a("2877")),u=Object(c["a"])(l,r,n,!1,null,"310a9458",null);e["default"]=u.exports},4360:function(t,e,a){"use strict";var r=a("04d8"),n=a.n(r);n.a},"43d4":function(t,e,a){},"5ab3":function(t,e,a){"use strict";var r=a("18c2"),n=a.n(r);n.a},"5d44":function(t,e,a){"use strict";var r=a("bb46"),n=a.n(r);n.a},"6c87":function(t,e,a){"use strict";var r=a("1a21"),n=a.n(r);n.a},"6fc9":function(t,e,a){"use strict";var r=a("43d4"),n=a.n(r);n.a},"71ac":function(t,e,a){t.exports=a.p+"img/become_a_patron_button.8b4321f7.png"},9703:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("h3",[t._v("Page Not Found")]),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("p",[t._v("Make sure the address is correct and the page hasn't moved.")])])}],s=a("0418"),o={name:"NotFound",components:{Header:s["a"]}},i=o,l=(a("4360"),a("2877")),c=Object(l["a"])(i,r,n,!1,null,"3f6eac37",null);e["default"]=c.exports},a2e9:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),null!=t.errorMessage?a("div",[a("br"),a("div",{staticClass:"alert alert-danger",staticStyle:{display:"inline-block"},attrs:{role:"alert"}},[t._v(t._s(t.errorMessage))])]):t._e(),a("p",{staticClass:"home"},[t._v("We will publish here the best games created by our users.")]),t.loading?a("div",[a("Spinner")],1):t._e(),a("div",{staticClass:"flex-container-games"},t._l(t.games,(function(e){return a("div",{key:e.id,staticClass:"flex-element-games"},[a("div",{staticClass:"game-title"},[a("router-link",{attrs:{to:"/play/"+e.templateVersion+"/"+e.id}},[t._v(t._s(e.name))])],1),a("div",{staticClass:"game-description"},[t._v(t._s(e.description))])])})),0)],1)},n=[],s=a("bc3a"),o=a.n(s),i=a("0418"),l=a("2375"),c=a("f24e"),u={name:"Game",components:{Header:i["a"],Spinner:l["default"]},methods:{updateGames:function(){this.loading=!0,this.errorMessage=null,this.info=null,this.services=[];var t="https://api.easygamemaker.com/",e=t+"games",a=this,r={headers:{}};o.a.get(e,r).then((function(t){a.info=t,a.games=t.data.Items,a.loading=!1})).catch((function(t){a.loading=!1,a.errorMessage="Error: "+t}))}},data:function(){return{loading:!1,errorMessage:null,info:null,games:[],sessionId:null}},mounted:function(){this.sessionId=Object(c["b"])("sessionId"),this.updateGames()}},m=u,d=(a("6fc9"),a("2877")),v=Object(d["a"])(m,r,n,!1,null,"9337f47c",null);e["default"]=v.exports},ae1c:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("h1",[t._v("Features")]),a("br"),t._m(0),a("br"),a("h4",[t._v("Soon")]),t._m(1),a("br"),a("p",[a("b",[t._v("If you want to suggest new features, fill our "),a("router-link",{attrs:{to:"/contact-us"}},[t._v("contact form")]),t._v(".")],1)]),a("br"),a("Footer")],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("Create games without coding")]),a("li",[t._v("Create games online (no downloads required)")]),a("li",[t._v("Play your games online (HTML5)")]),a("li",[t._v("Hundreds of images ready to use")]),a("li",[t._v("Upload sprites")]),a("li",[t._v("Sounds and music")]),a("li",[t._v("Scrolling")]),a("li",[t._v("Level zoom")]),a("li",[t._v("Level rotate")]),a("li",[t._v("Mobile touch")]),a("li",[t._v("Mobile accelerometer")]),a("li",[t._v("Fullcreen support")]),a("li",[t._v("Custom drawing")]),a("li",[t._v("Custom variables")]),a("li",[t._v("Platformer games")]),a("li",[t._v("Action games")]),a("li",[t._v("Export your games to HTML5")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("Visual programming (with blocks)")]),a("li",[t._v("Animations")]),a("li",[t._v("Array variables")]),a("li",[t._v("And more...")])])}],s=a("0418"),o=a("fd2d"),i={name:"Features",components:{Header:s["a"],Footer:o["a"]}},l=i,c=(a("dbbd"),a("2877")),u=Object(c["a"])(l,r,n,!1,null,"298c64f4",null);e["default"]=u.exports},bb46:function(t,e,a){},c3ef:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("h1",[t._v("Help")]),a("br"),a("div",{staticClass:"home"},[a("p",[t._v("Below you can find links for documentation and tutorials.")]),a("br"),a("p",[a("router-link",{attrs:{to:"/docs/introduction"}},[t._v("Introduction")])],1),a("p",[a("router-link",{attrs:{to:"/docs"}},[t._v("Documentation")])],1),a("p",[a("router-link",{attrs:{to:"/tutorials"}},[t._v("Tutorials")])],1),t._m(0),a("p",[a("router-link",{attrs:{to:"/features"}},[t._v("Features")])],1),a("p",[a("router-link",{attrs:{to:"/community"}},[t._v("Community")])],1)]),a("br"),a("br"),a("Footer")],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("a",{attrs:{target:"_blank",href:"https://www.youtube.com/channel/UCZyU80zuPtOEYfNViTT1c1Q"}},[t._v("Video tutorials")])])}],s=a("0418"),o=a("fd2d"),i={name:"Help",components:{Header:s["a"],Footer:o["a"]}},l=i,c=(a("5d44"),a("2877")),u=Object(c["a"])(l,r,n,!1,null,"347d3248",null);e["default"]=u.exports},dbbd:function(t,e,a){"use strict";var r=a("3272"),n=a.n(r);n.a},e9bb:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("h1",[t._v("Contact Us")]),t._m(0),null!=t.errorMessage?a("div",[a("br"),a("div",{staticClass:"alert alert-danger",staticStyle:{display:"inline-block"},attrs:{role:"alert"}},[t._v(t._s(t.errorMessage))])]):t._e(),1==t.showForm?a("div",{staticClass:"flex-container-form"},[a("div",{staticClass:"flex-element-form"},[a("form",[a("table",[a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("Contact type: ")]),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.type,expression:"form.type"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"type",e.target.multiple?a:a[0])}}},t._l(t.types,(function(e){return a("option",{key:e.value,domProps:{value:e.value}},[t._v(" "+t._s(e.text)+" ")])})),0)])]),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("Subject: ")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.subject,expression:"form.subject"}],staticClass:"textfield",attrs:{type:"text"},domProps:{value:t.form.subject},on:{input:function(e){e.target.composing||t.$set(t.form,"subject",e.target.value)}}})])]),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("Message: ")]),a("td",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"text-area",domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})])]),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("E-mail for response (optional): ")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"textfield",attrs:{type:"text"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])])])]),a("div",{staticStyle:{"text-align":"center","margin-top":"10px"}},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.submit()}}},[t._v("Submit")])]),t.loading?a("div",[a("Spinner")],1):t._e()])]):t._e(),0==t.showForm?a("div",{staticClass:"flex-container"},[t._m(1)]):t._e(),a("br"),a("br"),a("Footer")],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("p",[t._v("Your feedback is very important to us.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"service-box",staticStyle:{"text-align":"center"}},[a("div",[t._v("Your message was sent. Thank you for contacting us.")])])}],s=a("bc3a"),o=a.n(s),i=a("0418"),l=a("fd2d"),c=a("2375"),u={name:"ContactUs",components:{Header:i["a"],Footer:l["a"],Spinner:c["default"]},methods:{submit:function(){this.loading=!0,this.errorMessage=null;var t="https://api.easygamemaker.com/",e=t+"contacts",a=this,r={withCredentials:!0},n={type:this.form.type,email:this.form.email,message:this.form.message,subject:this.form.subject};o.a.post(e,n,r).then((function(t){a.showForm=!1,a.loading=!1})).catch((function(t){a.loading=!1,a.errorMessage=t.response.data.message}))}},data:function(){return{loading:!1,errorMessage:null,form:{type:"",email:"",message:"",subject:""},types:[{value:"SUGGESTION",text:"Suggestion / feature request"},{value:"BUG_REPORT",text:"Bug report"},{value:"FEEDBACK",text:"Feedback"},{value:"SUPPORT",text:"Support / help"},{value:"OTHER",text:"Other"}],showForm:!0}},mounted:function(){}},m=u,d=(a("6c87"),a("2877")),v=Object(d["a"])(m,r,n,!1,null,"45ccbd6f",null);e["default"]=v.exports},f820:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],s=a("2877"),o={},i=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=i.exports}}]);