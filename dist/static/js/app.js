(function(e){function t(t){for(var r,i,s=t[0],l=t[1],c=t[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-json-translation/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("a450"),n("1bc7"),n("246f"),n("66d9"),n("bdaf");var r=n("53d4"),o=n.n(r),a=(n("8a2c"),n("1107")),i=n.n(a),s=(n("0cd6"),n("0459")),l=n.n(s),c=(n("9fe7"),n("060e")),u=n.n(c),p=(n("1fba"),n("17cd")),f=n.n(p),d=(n("d8f4"),n("2a87")),v=n.n(d),h=(n("2630"),n("3b6b")),b=n.n(h),m=(n("3b70"),n("59de")),y=n.n(m),w=(n("3d21"),n("4434")),g=n.n(w),_=(n("25ba"),n("5f1c"),n("6ba0"),n("b47f"),n("1f37")),k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-wrap",attrs:{id:"app"}},[t("div",{staticClass:"title-line"},[t("h3",[e._v("i18n批量翻译JSON工具 (仅支持一维数列格式)")]),t("el-button",{attrs:{type:"warning",size:"mini",icon:"el-icon-s-tools"},on:{click:function(t){e.showVisible=!0}}},[e._v("配置")])],1),t("el-row",{staticClass:"top",attrs:{type:"flex",justify:"space-between"}},[t("el-col",{attrs:{span:10}},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.oldJsonText,expression:"oldJsonText"}],staticClass:"input-textarea",attrs:{placeholder:"请输入要翻译的JSON数据(可参考右侧格式)"},domProps:{value:e.oldJsonText},on:{input:[function(t){t.target.composing||(e.oldJsonText=t.target.value)},e.onTypeInHandle]}})]),t("el-col",{attrs:{span:2}},[t("p",[t("el-radio",{attrs:{label:"key"},model:{value:e.rSwitch,callback:function(t){e.rSwitch=t},expression:"rSwitch"}},[e._v("翻译key")])],1),t("p",[t("el-radio",{attrs:{label:"value"},model:{value:e.rSwitch,callback:function(t){e.rSwitch=t},expression:"rSwitch"}},[e._v("翻译Value")])],1)]),t("el-col",{attrs:{span:10}},[t("pre",{staticClass:"to-json",domProps:{innerHTML:e._s(e.newJson)}})])],1),t("el-row",{staticClass:"info-alert"},[t("el-alert",{attrs:{"show-icon":"",closable:!1,title:"如果所有单词都未翻译，请检查appid或key配置是否正确，或者查看F12 ->Network定位错误原因"}})],1),t("el-row",{attrs:{gutter:20}},e._l(e.navList,(function(n){return t("el-col",{key:n.code,attrs:{span:3}},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSetTranslateRequest(n.code)}}},[e._v("\n\t\t\t\t"+e._s(n.name)+"\n\t\t\t")])],1)})),1),t("el-dialog",{attrs:{title:"API配置",visible:e.showVisible},on:{"update:visible":function(t){e.showVisible=t}}},[t("el-form",{ref:"formRef",attrs:{model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"appid","label-width":"80px",prop:"appid"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.appid,callback:function(t){e.$set(e.form,"appid",t)},expression:"form.appid"}})],1),t("el-form-item",{attrs:{label:"key","label-width":"80px",prop:"key"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.key,callback:function(t){e.$set(e.form,"key",t)},expression:"form.key"}})],1)],1),t("div",{staticClass:"tips"},[t("p",[e._v("\n\t\t\t\t1、注册百度翻译开放平台账号\n\t\t\t\t"),t("a",{attrs:{href:"https://api.fanyi.baidu.com/",target:"_blank"}},[e._v(" https://api.fanyi.baidu.com/")]),e._v(",并进行实名认证\n\t\t\t")]),t("p",[e._v("2、开通通用翻译API服务 "),t("a",{attrs:{href:"https://fanyi-api.baidu.com/choose",target:"_blank"}},[e._v("开通链接")])]),t("p",[e._v("3、在"),t("a",{attrs:{href:"https://api.fanyi.baidu.com/manage/developer",target:"_blank"}},[e._v("开发者中心")]),e._v(",\n\t\t\t\t设置通用翻译服务信息的服务器地址，填写成"),t("a",{attrs:{href:"https://ip.cn/",target:"_blank"}},[e._v("本机网络IP")])])]),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.showVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.confirmHandle}},[e._v("确 定")])],1)],1)],1)},x=[],J=(n("01c8"),n("34d3")),S=n.n(J),O=n("bdc9"),T=n.n(O),j=(n("fc02"),n("3269"),n("eec3"),n("868d")),P=function(e,t){var n=[];for(var r in t)n.push(e?r:t[r]);return n},C=function(e){if("string"===typeof e)try{var t=JSON.parse(e);return Object(j["a"])("object"===t&&t)||!1}catch(n){return!1}},N=function e(t){var n;if("object"===Object(j["a"])(t))if(Array.isArray(t))for(var r in n=[],t)n.push(e(t[r]));else if(null===t)n=null;else if(t.constructor===RegExp)n=t;else for(var o in n={},t)n[o]=e(t[o]);else n=t;return n},V=function(e){var t=e.split(" ");if(t.length<=1)return e.toLowerCase();var n=t.reduce((function(e,t,n){if(n<=0)e.push(t.toLowerCase());else{var r=t.slice(1,t.length),o=t.charAt(0).toUpperCase();e.push(o+r)}return e}),[]);return n.join("")},q=[{code:"zh",name:"翻译中文"},{code:"en",name:"翻译英文"},{code:"kor",name:"翻译韩语"},{code:"jp",name:"翻译日语"},{code:"ru",name:"翻译俄语"},{code:"th",name:"翻译泰语"},{code:"cht",name:"翻译繁体中文"}],H={name:"app",data:function(){var e={appid:"",key:""},t={appid:[{required:!0,message:"请输入APPID",trigger:"blur"}],key:[{required:!0,message:"请输入KEY",trigger:"blur"}]};return{rSwitch:"key",showVisible:!1,navList:q,oldJson:null,newJson:null,oldJsonText:null,form:e,rules:t}},created:function(){this.newJson={apple:"apple",orange:"橘子",other:""}},methods:{onTypeInHandle:function(){if(!this.oldJsonText)return!1;var e=C(this.oldJsonText)||!1;this.oldJson=e?JSON.parse(this.oldJsonText):"输入的不是JSON数据"},onSetTranslateRequest:function(e){var t=this,n=this.rSwitch,r=this.oldJson,o=this.form,a=o.appid,i=o.key;if(!a||!i)return this.showVisible=!0,!1;if(!r||"{}"===JSON.stringify(r))return this.$message.error("请输入待翻译的JSON"),!1;var s=(new Date).getTime(),l="key"===n,c=P(l,r),u=c.reduce((function(e,t){return e+t+"\n"}),""),p=T()(a+u+s+i),f=S.a.stringify({q:u,from:"auto",to:e,appid:a,salt:s,sign:p}),d=new XMLHttpRequest;d.open("POST","/api/trans/vip/translate",!0),d.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),d.onerror=function(e){t.newJson=e},d.onreadystatechange=function(){if(4===d.readyState&&200===d.status){var e=JSON.parse(d.responseText),n=e.trans_result,r=n.length,o=N(t.oldJson);if(l){for(var a={},i=0;i<r;i++){var s=n[i],c=s.src,u=s.dst,p=V(u);for(var f in o)f!==c||(a[p]=f)}t.newJson=a}else{for(var v=0;v<r;v++){var h=n[v],b=h.src,m=h.dst;for(var y in o)o[y]===b&&(o[y]=V(m))}t.newJson=o}}},d.send(f)},confirmHandle:function(){var e=this;this.$refs.formRef.validate((function(t){if(!t)return!1;e.showVisible=!1}))}}},R=H,A=(n("b5c1"),n("e607")),I=Object(A["a"])(R,k,x,!1,null,null,null),L=I.exports,M=(n("752d"),[g.a,y.a,b.a,v.a,f.a,u.a,l.a,i.a,o.a]);M.forEach((function(e){_["default"].component(e.name,e)})),_["default"].config.productionTip=!1,new _["default"]({render:function(e){return e(L)}}).$mount("#app")},"914b":function(e,t,n){},b5c1:function(e,t,n){"use strict";n("914b")}});