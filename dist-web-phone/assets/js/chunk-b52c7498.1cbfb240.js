(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b52c7498"],{"0fda":function(t,e,a){"use strict";a("a698")},"7cd9":function(t,e,a){"use strict";a.d(e,"m",(function(){return u})),a.d(e,"g",(function(){return d})),a.d(e,"k",(function(){return f})),a.d(e,"f",(function(){return g})),a.d(e,"h",(function(){return _})),a.d(e,"i",(function(){return m})),a.d(e,"e",(function(){return p})),a.d(e,"d",(function(){return h})),a.d(e,"b",(function(){return b})),a.d(e,"a",(function(){return v})),a.d(e,"c",(function(){return y})),a.d(e,"l",(function(){return j})),a.d(e,"j",(function(){return k}));var n=a("d354"),o=(a("d3b7"),a("bc3a")),s=a.n(o),r=a("5f72"),i=a("4360"),c=(a("a18c"),s.a.create({baseURL:"https://m.arthurex.com/",timeout:5e4}));c.interceptors.request.use((function(t){return localStorage.getItem("QY_toke")&&(t.headers["token"]=localStorage.getItem("QY_toke")),t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){return t.headers["refresh-token"]&&localStorage.setItem("QY_toke",t.headers["refresh-token"]),t.data}),(function(t){console.log("err"+t);if("undefined"!==typeof t.response)if(401===t.response.data.code)setTimeout((function(){i["a"].dispatch("user/resetToken").then((function(){window.location.href="/login?redirect=%2Fdashboard"}))}),500);else{var e=t.response.data.msg;Object(r["Message"])({message:e,type:"error",duration:3e3})}return Promise.reject(t)}));var l="api/v1/",u=function(t){return Object(n["a"])(l+"user/info",t)},d=function(t){return Object(n["a"])(l+"user/pre-sale",t)},f=function(t){return Object(n["a"])(l+"user/pre-sale/book",t)},g=function(t){return Object(n["a"])(l+"user/marketing",t)},_=function(t){return Object(n["a"])(l+"market/pre-sale/records",t)},m=function(t){return Object(n["a"])(l+"market/rebate/records",t)},p=function(t){return Object(n["a"])(l+"user/marketing/record",t)},h=function(t){return Object(n["a"])(l+"user/login/record",t)},b=function(t){return Object(n["a"])(l+"base-info/country/list",t)},v=function(t){return Object(n["a"])(l+"user/kyc",t)},y=function(t){return Object(n["a"])(l+"user/kyc/info",t)},j=function(t){return Object(n["a"])(l+"account/transfer/taft",t)},k=function(t){return Object(n["a"])(l+"account/transfer/records",t)}},a698:function(t,e,a){},ac1e:function(t,e,a){"use strict";a("68ef"),a("e3b3")},f281:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t.tableData.length>0?n("div",{staticClass:"page_apply_title"},[n("div",{staticClass:"page_apply_title_name"},[t._v(t._s(t.$t("message.208")))]),n("div",{staticClass:"page_apply_title_line"})]):t._e(),n("div",{staticClass:"wrap"},[n("div",{staticClass:"page_content",class:{marginTop:0==t.tableData.length}},[t.tableData.length>0?n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:"",height:t.tableHeight}},[n("el-table-column",{attrs:{label:t.$t("message.209"),align:"center",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("trimet")(e.row.login_time,t.that)))])]}}],null,!1,1401580352)}),n("el-table-column",{attrs:{prop:"name ",label:t.$t("message.210"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{color:"#104cff"}},[t._v(t._s(e.row.login_ip))])]}}],null,!1,1246157256)}),n("el-table-column",{attrs:{label:t.$t("message.211"),align:"center",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.device_type?n("span",[t._v(t._s(t.$t("message.212")))]):t._e(),1==e.row.device_type?n("span",[t._v("Android")]):t._e(),2==e.row.device_type?n("span",[t._v("Ios")]):t._e(),3==e.row.device_type?n("span",[t._v("Web-Mobile")]):t._e(),4==e.row.device_type?n("span",[t._v("Web-Pc")]):t._e()]}}],null,!1,4160014314)}),n("template",{slot:"empty"},[n("div",{staticClass:"noData"},[t._v(" "+t._s(t.$t("message.136"))+" ")])])],2):t._e()],1),t.tableData.length>0&&t.loading_more?n("div",{staticClass:"loading_more",on:{click:t.onLoad}},[t._v(" "+t._s(t.$t("message.137"))+" ")]):t._e(),t.loadding_last?n("div",{staticClass:"loading_nomore"},[t._v(" "+t._s(t.$t("message.138"))+" ")]):t._e(),t.loading_status?n("div",{staticClass:"van_loading_div"},[n("van-loading",{attrs:{type:"spinner",color:"#1989fa"}},[t._v(t._s(t.$t("message.139")))])],1):t._e(),0==t.tableData.length?n("div",{ref:"page_nodata",staticClass:"page_nodata"},[n("img",{staticClass:"page_nodata_img",attrs:{src:a("54de"),alt:""}}),n("div",{staticClass:"page_nodata_tips"},[t._v(t._s(t.$t("message.136")))])]):t._e()])])},o=[],s=(a("99af"),a("2909")),r=(a("ac1e"),a("543e")),i=(a("2994"),a("2bdd")),c=a("f284"),l=a("7cd9"),u={name:"",components:{webFoot:c["a"],vanList:i["a"],vanLoading:r["a"]},data:function(){return{that:this,loading_more:!1,loading_status:!1,loadding_last:!1,loading:!1,finished:!1,listLoading:!0,tableHeight:700,form:{user_code:"",page_no:1,page_size:14},tableData:[],total:0,languageName:this.$languageName}},computed:{},watch:{},methods:{onLoad:function(){var t=this;this.tableData.length>0&&(console.log("-------"),this.loading_more=!1,this.loading_status=!0,this.form.page_no++,setTimeout((function(){t.get_list()}),1e3))},get_list:function(){var t=this;Object(l["d"])(this.$qs.stringify(this.form)).then((function(e){t.loading_more=!0,t.loading_status=!1,t.loading=!1,t.total=e.data.total,t.tableData.length>=t.total&&(t.finished=!0,t.loadding_last=!0,t.loading_more=!1),t.tableData=[].concat(Object(s["a"])(t.tableData),Object(s["a"])(e.data.records))}))},handleCurrentChange:function(t){this.form.page_no=t,this.getList()},getList:function(){var t=this,e=this.form;Object(l["d"])(this.$qs.stringify(e)).then((function(e){console.log(e),0==e.code?(t.tableData=e.data.records,t.total=e.data.total):t.$message.error(e.msg),setTimeout((function(){t.listLoading=!1,t.loading_more=!0}),1e3)}))}},created:function(){this.form.user_code=localStorage.getItem("code")},mounted:function(){var t=this;this.getList();var e=document.documentElement.offsetHeight||document.body.offsetHeight;document.querySelector(".page_nodata").style.height=e+10+"px",setTimeout((function(){t.tableHeight=e-2*document.querySelector(".navhearder").offsetHeight-29}),1e3)},filters:{trimet:function(t,e){var a=e.$moment(Math.floor(1e3*t)).format("YYYY-MM-DD HH:mm");return a}}},d=u,f=(a("0fda"),a("2877")),g=Object(f["a"])(d,n,o,!1,null,"91184346",null);e["default"]=g.exports}}]);