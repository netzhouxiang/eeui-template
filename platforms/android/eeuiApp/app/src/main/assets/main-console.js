// { "framework": "Vue"}
if(typeof app=="undefined"){app=weex}
!function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,o){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=48)}({48:function(t,e,i){var o,n,r=[];r.push(i(49)),o=i(50);var s=i(51);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="/Users/GAOYI/wwwroot/eeui/eeui-template/src/pages/console.vue",n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-cc4ed5fa",n.style=n.style||{},r.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,r),t.exports=o,t.exports.el="true",new Vue(t.exports)},49:function(t,e){t.exports={app:{width:"750",flex:1},tabs:{flexDirection:"row",alignItems:"center",backgroundColor:"#DDE1E7"},tline:{width:"750",height:"1",backgroundColor:"#cccccc"},"tab-item":{flex:1,height:"68",lineHeight:"68",fontSize:"26",color:"#333333",textAlign:"center"},"tab-item-active":{flex:1,height:"68",lineHeight:"68",fontSize:"26",color:"#333333",textAlign:"center",backgroundColor:"#ffffff"},tismain:{width:"750",flex:1,justifyContent:"center",alignItems:"center"},tisbody:{paddingTop:"24",paddingRight:"24",paddingBottom:"24",paddingLeft:"24"},tisitem:{color:"#bbbbbb",fontSize:"26",paddingTop:"10",paddingBottom:"10"},lists:{width:"750",flex:1},item:{width:"750",paddingTop:"14",paddingRight:"12",paddingBottom:"14",paddingLeft:"12",borderBottomWidth:"1",borderBottomStyle:"solid",borderBottomColor:"#eeeeee"},text:{fontSize:"24"},"text-log":{color:"#333333"},"text-info":{color:"#428bca"},"text-warn":{color:"#ca8d1c"},"text-error":{color:"#ca3420"},"text-debug":{color:"#994dca"},fline:{width:"750",height:"1",backgroundColor:"#dddddd"},foot:{width:"750",height:"86",flexDirection:"row",justifyContent:"center",backgroundColor:"#ffffff"},"foot-item":{flex:1,textAlign:"center",fontSize:"24",lineHeight:"86"},"foot-line":{width:"1",marginTop:"20",height:"46",backgroundColor:"#dddddd"}}},50:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=app.requireModule("eeui"),r=app.requireModule("debug"),s=app.requireModule("dom");e.default={data:function(){return{active:"",lists:[],noConsole:!1,scrollHeight:0,scrollBottom:!0,scrollDiffer:0,scrollInterval:null}},mounted:function(){var t=this;if(!0!==console.open)return void(this.noConsole=!0);this.active="all",r.setLogListener(function(e){if("all"===t.active||e.type===t.active){var i=t.lists.push(e);i>550&&t.lists.splice(0,i-50),t.toBottom(i)}}),setInterval(function(){t.scrollBottom=t.scrollDiffer-t.scrollHeight<10},300)},watch:{active:function(t){var e=this;switch(t){case"all":r.getLogAll(function(t){t.length>550&&t.splice(0,t.length-500),e.lists=t,e.toBottom(e.lists.length)});break;default:r.getLog(t,function(t){t.length>550&&t.splice(0,t.length-500),e.lists=t,e.toBottom(e.lists.length)})}}},methods:{formatLog:function(t){var e=this,i="";return null!=t&&"object"==(void 0===t?"undefined":o(t))?this.each(t,function(t,n){i+=null!=n&&"object"==(void 0===n?"undefined":o(n))?e.jsonStringify(n):n,i+=" "}):i=t,i},addLog:function(t,e){switch(t){case"log":console.log(e,"随机字符："+this.randomString(16));break;case"info":console.info(e,"随机字符："+this.randomString(16));break;case"warn":console.warn(e,"随机字符："+this.randomString(16));break;case"error":console.error(e,"随机字符："+this.randomString(16))}"all"!==this.active&&(this.active=t)},info:function(t){var e=this;n.confirm({title:"日志详情",message:"类型："+t.type+"\n时间："+this.formatDate("Y-m-d H:i:s",t.time)+"\n内容："+this.formatLog(t.text),buttons:["复制","关闭"]},function(i){"click"===i.status&&"复制"===i.title&&(n.copyText(e.jsonStringify(t)),n.toast("复制成功"))})},scroll:function(t){this.scrollDiffer=t.contentSize.height+t.contentOffset.y},scrollend:function(){var t=this;s.getComponentRect(this.$refs.myList,function(e){t.scrollHeight=e.size.height})},toBottom:function(t){var e=this;if(this.scrollBottom){var i=0;clearInterval(this.scrollInterval),this.scrollInterval=setInterval(function(){i++;var o=e.$refs["item"+(t-1)];(o||i>5)&&(clearInterval(e.scrollInterval),e.scrollBottom&&o&&s.scrollToElement(o[0],{}))},300)}},clear:function(){"all"===this.active?(r.clearLogAll(),this.lists=[]):(r.clearLog(this.active),this.lists=[])},close:function(){r.removeLogListener(),r.closeConsole()},isNullOrUndefined:function(t){return void 0===t||null===t},likeArray:function(t){return!this.isNullOrUndefined(t)&&"number"==typeof t.length},each:function(t,e){var i=void 0,o=void 0;if(this.likeArray(t)){if("number"==typeof t.length)for(i=0;i<t.length;i++)if(!1===e.call(t[i],i,t[i]))return t}else for(o in t)if(t.hasOwnProperty(o)&&!1===e.call(t[o],o,t[o]))return t;return t},formatDate:function(t,e){if(""===t&&(t="Y-m-d H:i:s"),void 0===e)e=(new Date).getTime();else if(/^(-)?\d{1,10}$/.test(e))e*=1e3;else if(/^(-)?\d{1,13}$/.test(e))e*=1e3;else if(/^(-)?\d{1,14}$/.test(e))e*=100;else if(/^(-)?\d{1,15}$/.test(e))e*=10;else{if(!/^(-)?\d{1,16}$/.test(e))return e;e*=1}var i=new Date(e);return parseInt(i.getFullYear())+""=="NaN"?e:(t=t.replace(/Y/g,i.getFullYear()),t=t.replace(/m/g,this.zeroFill(i.getMonth()+1,2)),t=t.replace(/d/g,this.zeroFill(i.getDate(),2)),t=t.replace(/H/g,this.zeroFill(i.getHours(),2)),t=t.replace(/i/g,this.zeroFill(i.getMinutes(),2)),t=t.replace(/s/g,this.zeroFill(i.getSeconds(),2)))},zeroFill:function(t,e,i){if(t+="",t.length>=e)return t;for(var o="",n=0;n<e;n++)o+="0";return i||void 0===i?(o+""+t).substr(-1*e):(t+""+o).substr(0,e)},jsonStringify:function(t,e){try{return JSON.stringify(t)}catch(t){return e||""}},randomString:function(t){t=t||32;for(var e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1",i=e.length,o="",n=0;n<t;n++)o+=e.charAt(Math.floor(Math.random()*i));return o}}}},51:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["app"],on:{click:function(t){}}},[i("div",{staticClass:["tabs"]},[i("text",{class:["all"===t.active?"tab-item-active":"tab-item"],on:{click:function(e){t.active="all"}}},[t._v("All")]),i("text",{class:["log"===t.active?"tab-item-active":"tab-item"],on:{click:function(e){t.active="log"}}},[t._v("Log")]),i("text",{class:["info"===t.active?"tab-item-active":"tab-item"],on:{click:function(e){t.active="info"}}},[t._v("Info")]),i("text",{class:["warn"===t.active?"tab-item-active":"tab-item"],on:{click:function(e){t.active="warn"}}},[t._v("Warn")]),i("text",{class:["error"===t.active?"tab-item-active":"tab-item"],on:{click:function(e){t.active="error"}}},[t._v("Error")])]),i("div",{staticClass:["tline"]}),!0===t.noConsole?i("div",{staticClass:["tismain"]},[t._m(0)]):0===t.lists.length?i("div",{staticClass:["tismain"]},[i("div",{staticClass:["tisbody"]},[i("text",{staticClass:["tisitem"]},[t._v("可使用以下方法调试日志：")]),i("text",{staticClass:["tisitem"],on:{click:function(e){t.addLog("log","普通日志")}}},[t._v('console.log("普通日志")')]),i("text",{staticClass:["tisitem"],on:{click:function(e){t.addLog("info","蓝色日志")}}},[t._v('console.info("蓝色日志")')]),i("text",{staticClass:["tisitem"],on:{click:function(e){t.addLog("warn","黄色日志")}}},[t._v('console.warn("黄色日志")')]),i("text",{staticClass:["tisitem"],on:{click:function(e){t.addLog("error","红色日志")}}},[t._v('console.error("红色日志")')])])]):i("scroller",{ref:"myList",staticClass:["lists"],on:{scroll:t.scroll,scrollend:t.scrollend}},t._l(t.lists,function(e,o){return i("div",{key:o,staticClass:["item"],on:{click:function(i){t.info(e)}}},[i("text",{staticClass:["text"],class:["text-"+e.type]},[t._v(t._s(t.formatLog(e.text)))]),i("div",{ref:"item"+o,refInFor:!0})])})),i("div",{staticClass:["fline"]}),i("div",{staticClass:["foot"]},[i("text",{staticClass:["foot-item"],on:{click:t.clear}},[t._v("清除")]),i("div",{staticClass:["foot-line"]}),i("text",{staticClass:["foot-item"],on:{click:t.close}},[t._v("隐藏")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["tisbody"]},[i("text",{staticClass:["tisitem"]},[t._v("当前环境不支持，可能不是开发环境。")])])}]},t.exports.render._withStripped=!0}});