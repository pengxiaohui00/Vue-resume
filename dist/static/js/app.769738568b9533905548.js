webpackJsonp([1],{"8nOl":function(e,t){},LHgq:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),s={methods:{preview:function(){this.$emit("preview"),console.log("a")}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"topbar"}},[n("div",{staticClass:"logo"},[e._v("\n          VueResumer\n      ")]),e._v(" "),n("div",{staticClass:"action"},[n("el-button",{attrs:{type:"primary"}},[e._v("注册")]),e._v(" "),n("el-button",{attrs:{type:"success"}},[e._v("登入")]),e._v(" "),n("el-button",{attrs:{type:"success"},on:{click:e.preview}},[e._v("预览")])],1)])},staticRenderFns:[]};var o=n("VU/8")(s,i,!1,function(e){n("iBXp")},null,null).exports,a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("个人信息")]),e._v(" "),n("el-form",[n("el-form-item",{attrs:{label:"姓名"}},[n("el-input",{model:{value:e.profile.name,callback:function(t){e.$set(e.profile,"name",t)},expression:"profile.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"城市"}},[n("el-input",{model:{value:e.profile.city,callback:function(t){e.$set(e.profile,"city",t)},expression:"profile.city "}})],1),e._v(" "),n("el-form-item",{attrs:{label:"出生年月"}},[n("el-input",{model:{value:e.profile.birth,callback:function(t){e.$set(e.profile,"birth",t)},expression:"profile.birth"}})],1)],1)],1)},staticRenderFns:[]},l=n("VU/8")({props:["profile"]},a,!1,null,null,null).exports,c=n("fZjL"),u=n.n(c),v={props:["items","labels","title"],computed:{keys:function(){return u()(this.items[0])}},methods:{addWorkHistoty:function(){var e={};this.keys.map(function(t){e[t]=""}),this.items.push({company:"",content:""})},removeWorkHistory:function(e){this.items.splice(e,1)}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.title))]),e._v(" "),n("el-form",[e._l(e.items,function(t,r){return n("div",{key:r,staticClass:"container"},[e._l(e.keys,function(r){return n("el-form-item",{key:r,attrs:{label:e.labels[r]||r}},[n("el-input",{model:{value:t[r],callback:function(n){e.$set(t,r,n)},expression:"work[key]"}})],1)}),e._v(" "),n("i",{staticClass:"el-icon-circle-close",on:{click:function(t){e.removeWorkHistory(r)}}}),e._v(" "),n("hr")],2)}),e._v(" "),n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-plus"},on:{click:function(t){e.addWorkHistoty()}}},[e._v("添加一项")])],2)],1)},staticRenderFns:[]},_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("联系方式")]),e._v(" "),n("el-form",[n("el-form-item",{attrs:{label:"QQ"}},[n("el-input",{model:{value:e.contact.qq,callback:function(t){e.$set(e.contact,"qq",t)},expression:"contact.qq"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"微信"}},[n("el-input",{model:{value:e.contact.wechat,callback:function(t){e.$set(e.contact,"wechat",t)},expression:"contact.wechat "}})],1),e._v(" "),n("el-form-item",{attrs:{label:"邮箱"}},[n("el-input",{model:{value:e.contact.email,callback:function(t){e.$set(e.contact,"email",t)},expression:"contact.email"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"手机"}},[n("el-input",{model:{value:e.contact.phone,callback:function(t){e.$set(e.contact,"phone",t)},expression:"contact.phone"}})],1)],1)],1)},staticRenderFns:[]},m={components:{EditorProfile:l,EditorItems:n("VU/8")(v,p,!1,null,null,null).exports,EditorContact:n("VU/8")({props:["contact"]},_,!1,null,null,null).exports},props:["resume"],data:function(){return{currentTab:0,icons:["shenfen","gongzuo","drxx18","keyanxiangmu","jiangbei","dianhua"]}},methods:{},created:function(){}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"editor"}},[n("nav",[n("ol",e._l([0,1,2,3,4,5],function(t){return n("li",{class:{active:e.currentTab===t},on:{click:function(n){e.currentTab=t}}},[n("svg",{staticClass:"icon"},[n("use",{attrs:{"xlink:href":"#icon-"+e.icons[t]}})])])}))]),e._v(" "),n("ol",{staticClass:"panes"},[n("li",{class:{active:0===e.currentTab}},[n("EditorProfile",{attrs:{profile:e.resume.profile}})],1),e._v(" "),n("li",{class:{active:1===e.currentTab}},[n("EditorItems",{attrs:{items:e.resume.workHistory,labels:{company:"公司",content:"工作内容"},title:"工作经历"}})],1),e._v(" "),n("li",{class:{active:2===e.currentTab}},[n("EditorItems",{attrs:{items:e.resume.studyHistory,labels:{school:"学校",duration:"时间",degree:"学位"},title:"学习经历"}})],1),n("li",{class:{active:3===e.currentTab}},[n("EditorItems",{attrs:{items:e.resume.projects,labels:{name:"项目名称",content:"工作内容"},title:"项目经历"}})],1),e._v(" "),n("li",{class:{active:4===e.currentTab}},[n("EditorItems",{attrs:{items:e.resume.awards,labels:{name:"获奖名称",content:"获奖详情"},title:"获奖经历"}})],1),e._v(" "),n("li",{class:{active:5===e.currentTab}},[n("EditorContact",{attrs:{contact:e.resume.contact}})],1)])])},staticRenderFns:[]};var d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"preview"}},[n("section",[n("h2",[e._v("个人信息")]),e._v(" "),n("p",[e._v("姓名："),n("span",[e._v(e._s(e.resume.profile.name||"请填写您的姓名"))])]),e._v(" "),n("p",[e._v("城市："),n("span",[e._v(e._s(e.resume.profile.city||"请填写您所在城市名称"))])]),e._v(" "),n("p",[e._v("出生年月："),n("span",[e._v(e._s(e.resume.profile.birth||"请填写您的出生年月"))])]),e._v(" "),n("hr")]),e._v(" "),e.filter(e.resume.workHistory).length>0?n("section",[n("h2",[e._v("工作经历")]),e._v(" "),n("ul",e._l(e.filter(e.resume.workHistory),function(t){return n("li",[n("h3",[e._v("公司："),n("span",[e._v(e._s(t.company))])]),e._v(" "),n("p",[e._v("工作内容："),n("span",[e._v(e._s(t.content))])])])})),e._v(" "),n("hr")]):e._e(),e._v(" "),e.filter(e.resume.studyHistory).length>0?n("section",[n("h2",[e._v("教育背景")]),e._v(" "),n("ul",e._l(e.filter(e.resume.studyHistory),function(t){return n("li",[n("p",[e._v("学校："),n("span",[e._v(e._s(t.school))])]),n("p"),n("p",[e._v("在校时间："),n("span",[e._v(e._s(t.duration))])]),e._v(" "),n("p",[e._v("学位："),n("span",[e._v(e._s(t.degree))])])])})),e._v(" "),n("hr")]):e._e(),e._v(" "),e.filter(e.resume.projects).length>0?n("section",[n("h2",[e._v("项目经历")]),e._v(" "),n("ul",e._l(e.filter(e.resume.projects),function(t){return n("li",[n("h3",[e._v("项目名称："),n("span",[e._v(e._s(t.name))])]),e._v(" "),n("p",[e._v("项目内容："),n("span",[e._v(e._s(t.content))])])])})),e._v(" "),n("hr")]):e._e(),e._v(" "),e.filter(e.resume.awards).length>0?n("section",[n("h2",[e._v("获奖情况")]),e._v(" "),n("ul",e._l(e.filter(e.resume.awards),function(t){return n("li",[n("h3",[e._v("获奖名称："),n("span",[e._v(e._s(e.awards.name))])]),e._v(" "),n("p",[e._v("获奖详情："),n("span",[e._v(e._s(e.awards.content))])])])})),e._v(" "),n("hr")]):e._e(),e._v(" "),n("section",[n("h2",[e._v("联系方式")]),e._v(" "),n("p",[e._v("QQ:"),n("span",[e._v(e._s(e.resume.contact.qq||"请填写您的QQ"))])]),e._v(" "),n("p",[e._v("微信："),n("span",[e._v(e._s(e.resume.contact.wechat||"请填写您的微信"))])]),e._v(" "),n("p",[e._v("邮箱："),n("span",[e._v(e._s(e.resume.contact.email||"请填写您的邮箱"))])]),e._v(" "),n("p",[e._v("手机："),n("span",[e._v(e._s(e.resume.contact.phone||"请填写您的手机"))])]),e._v(" "),n("hr")])])},staticRenderFns:[]};var h={data:function(){return{previewMode:!1,resume:{profile:{name:"",city:"",birth:""},contact:{qq:"",wechat:"",email:"",phone:""},workHistory:[{company:"",content:""}],studyHistory:[{school:"",duration:"",degree:""}],projects:[{name:"",content:""}],awards:[{name:"",content:""}]}}},methods:{preview:function(){this.previewMode=!0},exitpreview:function(){this.previewMode=!1}},components:{Topbar:o,Editor:n("VU/8")(m,f,!1,function(e){n("LHgq")},null,null).exports,Preview:n("VU/8")({props:["resume"],methods:{filter:function(e){var t=this;return e.filter(function(e){return!t.isEmpty(e)})},isEmpty:function(e){var t=!0;for(var n in e)if(e[n]){t=!1;break}return t}}},d,!1,function(e){n("8nOl")},null,null).exports}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{previewMode:e.previewMode},attrs:{id:"app"}},[n("Topbar",{staticClass:"topbar",on:{preview:e.preview}}),e._v(" "),n("main",[n("Editor",{staticClass:"editor",attrs:{resume:e.resume}}),e._v(" "),n("Preview",{staticClass:"preview",attrs:{resume:e.resume}})],1),e._v(" "),n("el-button",{attrs:{type:"success",id:"exitpreview"},on:{click:e.exitpreview}},[e._v("退出预览")])],1)},staticRenderFns:[]};var y=n("VU/8")(h,b,!1,function(e){n("snjd")},null,null).exports,w=(n("NcP2"),n("uMhA"),n("zL8q")),k=n.n(w);n("tvR6");r.default.use(k.a),r.default.config.productionTip=!1,new r.default({el:"#app",components:{App:y},template:"<App />"})},NcP2:function(e,t){},iBXp:function(e,t){},snjd:function(e,t){},tvR6:function(e,t){},uMhA:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.769738568b9533905548.js.map