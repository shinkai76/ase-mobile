(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2de5f2f6"],{"12c1":function(e,t,n){"use strict";n("5f8e")},"3f19":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r("div",{staticClass:"wrap"},[r("div",{staticClass:"page_indicator"},[r("router-link",{staticClass:"gobaket",attrs:{to:"/center"}},[e._v(e._s(e.$t("message.2")))]),e._v(" > "+e._s(e.$t("message.100"))+" ")],1),r("div",{staticClass:"page_content"},[r("div",{staticClass:"name"},[e._v("KYC")]),r("img",{staticClass:"KYC_logo",attrs:{src:n("8869"),alt:""}}),r("div",{staticClass:"status"},[e._v(" "+e._s(e.$t("message.242"))+" ")]),r("div",{staticClass:"describe"},[e._v(e._s(e.userInfo.kyc_remark))]),r("div",{staticClass:"again_btn",on:{click:e.againApply}},[e._v(" "+e._s(e.$t("message.243"))+" ")])])])])},s=[],a=n("f284"),o=n("7cd9"),c={name:"",components:{webFoot:a["a"]},data:function(){return{userInfo:{},languageName:this.$languageName}},computed:{},watch:{},methods:{getUserInfo:function(){var e=this,t={code:localStorage.getItem("code")};Object(o["m"])(this.$qs.stringify(t)).then((function(t){0==t.code?e.userInfo=t.data:e.$message.error(t.msg)}))},againApply:function(){this.$router.push({name:"KYCapply",query:{type:1}})}},created:function(){this.getUserInfo()},mounted:function(){}},u=c,i=(n("12c1"),n("2877")),f=Object(i["a"])(u,r,s,!1,null,"6f2fb3af",null);t["default"]=f.exports},"5f8e":function(e,t,n){},"7cd9":function(e,t,n){"use strict";n.d(t,"m",(function(){return f})),n.d(t,"g",(function(){return d})),n.d(t,"k",(function(){return l})),n.d(t,"f",(function(){return g})),n.d(t,"h",(function(){return m})),n.d(t,"i",(function(){return p})),n.d(t,"e",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"b",(function(){return k})),n.d(t,"a",(function(){return _})),n.d(t,"c",(function(){return v})),n.d(t,"l",(function(){return j})),n.d(t,"j",(function(){return O}));var r=n("d354"),s=(n("d3b7"),n("bc3a")),a=n.n(s),o=n("5f72"),c=n("4360"),u=(n("a18c"),a.a.create({baseURL:"https://m.arthurex.com/",timeout:5e4}));u.interceptors.request.use((function(e){return localStorage.getItem("QY_toke")&&(e.headers["token"]=localStorage.getItem("QY_toke")),e}),(function(e){return Promise.reject(e)})),u.interceptors.response.use((function(e){return e.headers["refresh-token"]&&localStorage.setItem("QY_toke",e.headers["refresh-token"]),e.data}),(function(e){console.log("err"+e);if("undefined"!==typeof e.response)if(401===e.response.data.code)setTimeout((function(){c["a"].dispatch("user/resetToken").then((function(){window.location.href="/login?redirect=%2Fdashboard"}))}),500);else{var t=e.response.data.msg;Object(o["Message"])({message:t,type:"error",duration:3e3})}return Promise.reject(e)}));var i="api/v1/",f=function(e){return Object(r["a"])(i+"user/info",e)},d=function(e){return Object(r["a"])(i+"user/pre-sale",e)},l=function(e){return Object(r["a"])(i+"user/pre-sale/book",e)},g=function(e){return Object(r["a"])(i+"user/marketing",e)},m=function(e){return Object(r["a"])(i+"market/pre-sale/records",e)},p=function(e){return Object(r["a"])(i+"market/rebate/records",e)},b=function(e){return Object(r["a"])(i+"user/marketing/record",e)},h=function(e){return Object(r["a"])(i+"user/login/record",e)},k=function(e){return Object(r["a"])(i+"base-info/country/list",e)},_=function(e){return Object(r["a"])(i+"user/kyc",e)},v=function(e){return Object(r["a"])(i+"user/kyc/info",e)},j=function(e){return Object(r["a"])(i+"account/transfer/taft",e)},O=function(e){return Object(r["a"])(i+"account/transfer/records",e)}},8869:function(e,t,n){e.exports=n.p+"assets/img/KYC_logo.77011f4c.png"}}]);