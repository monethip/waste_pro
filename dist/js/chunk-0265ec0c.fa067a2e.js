(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0265ec0c"],{"4bd4":function(t,e,a){"use strict";var r=a("5530"),i=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),n=a("7e2b"),s=a("3206");e["a"]=Object(i["a"])(n["a"],Object(s["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},r={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(r.valid=a(t)))})):r.valid=a(t),r},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"4fad":function(t,e,a){var r=a("23e7"),i=a("6f53").entries;r({target:"Object",stat:!0},{entries:function(t){return i(t)}})},"6eceb":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("ac1f"),a("841c");var r=function(t){""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},"841c":function(t,e,a){"use strict";var r=a("d784"),i=a("825a"),n=a("1d80"),s=a("129f"),o=a("577e"),c=a("dc4a"),l=a("14c3");r("search",(function(t,e,a){return[function(e){var a=n(this),r=void 0==e?void 0:c(e,t);return r?r.call(e,a):new RegExp(e)[t](o(a))},function(t){var r=i(this),n=o(t),c=a(e,r,n);if(c.done)return c.value;var u=r.lastIndex;s(u,0)||(r.lastIndex=0);var d=l(r,n);return s(r.lastIndex,u)||(r.lastIndex=u),null===d?-1:d.index}]}))},afdd:function(t,e,a){"use strict";var r=a("8336");e["a"]=r["a"]},b7b7:function(t,e,a){"use strict";a("f8eb")},c1bb:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"mb-4"},[a("v-col",[a("v-breadcrumbs",{staticClass:"pa-0",attrs:{large:""}},[a("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[a("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" ສ້າງບິນຢ້ອນຫຼັງ ")],1)],1)],1),a("div",[a("v-card",[a("v-card-text",{staticClass:"pa-8"},[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("p",[t._v("ວັນທີບິນ")]),a("v-date-picker",{attrs:{type:"month",max:t.now},model:{value:t.billDate,callback:function(e){t.billDate=e},expression:"billDate"}})],1),a("v-col",{attrs:{cols:"8"}},[a("v-row",[a("v-col",[a("v-text-field",{attrs:{label:"ຊື່ລາຍການ *",required:"",rules:t.totalRules,outlined:"",dense:""},model:{value:t.data.title,callback:function(e){t.$set(t.data,"title",e)},expression:"data.title"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.title)+" ")])],1)],1),a("v-row",[a("v-col",[a("v-text-field",{attrs:{label:"ຄຳອະທິບາຍ *",required:"",rules:t.totalRules,outlined:"",dense:""},model:{value:t.data.description,callback:function(e){t.$set(t.data,"description",e)},expression:"data.description"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.description)+" ")])],1)],1),a("v-row",[a("v-col",[a("v-text-field",{staticClass:"input-number",attrs:{label:"ລາຄາ *",required:"",rules:t.totalRules,type:"number",outlined:"",dense:""},model:{value:t.data.price,callback:function(e){t.$set(t.data,"price",e)},expression:"data.price"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.price)+" ")])],1)],1),a("v-row",[a("v-col",[a("v-text-field",{staticClass:"input-number",attrs:{label:"ຈຳນວນ *",required:"",rules:t.totalRules,type:"number",outlined:"",dense:""},model:{value:t.data.quantity,callback:function(e){t.$set(t.data,"quantity",e)},expression:"data.quantity"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.quantity)+" ")])],1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"elevation-0 btn-warning mr-4",on:{click:function(e){return t.backPrevios()}}},[t._v(" ຍ້ອນກັບ ")]),a("v-btn",{staticClass:"elevation-0 btn-primary",attrs:{loading:t.loading,disabled:t.loading},on:{click:function(e){return t.AddData()}}},[t._v(" ສ້າງບິນ ")])],1)],1)],1)],1)],1)},i=[],n=a("3835"),s=(a("a4d3"),a("e01a"),a("4fad"),a("b0c0"),a("6eceb")),o={name:"Invoice",props:["items"],title:function(){return"Vientiane Waste Co-Dev|Invoice"},data:function(){return{tab:null,now:(new Date).toISOString().substr(0,7),start_date:(new Date).toISOString().substr(0,7),billDate:(new Date).toISOString().substr(0,7),end_date:"",start_menu:!1,end_menu:!1,invoices:[],loading:!1,is_instantly:0,data:{email:""},user:{},calendarId:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",packages:[],selectedPackage:"",server_errors:{},preview_list:[],image_list:[],image:[],totalRules:[function(t){return!!t||"Total is required"}]}},methods:{fetchData:function(){this.user=this.items},Search:function(){Object(s["a"])(this)},backPrevios:function(){this.$router.go(-1)},AddData:function(){var t=this,e={user_id:this.user.id,title:this.data.title,description:this.data.description,price:this.data.price,date:this.billDate,quantity:this.data.quantity};1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("custom-bill",e).then((function(e){200==e.data.code&&(t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message}),t.$router.push({name:"custom-bill"}))})).catch((function(e){if(t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message}),422==e.response.status)for(var a=e.response.data.errors,r=0,i=Object.entries(a);r<i.length;r++){var s=Object(n["a"])(i[r],2),o=s[0],c=s[1];t.server_errors[o]=c[0]}t.loading=!1})))}},watch:{is_instantly:function(t){console.log(t)},search:function(t){""==t&&this.fetchData()},"plan.name":function(){this.server_errors.name=""},start_date:function(){this.server_errors.month=""},"calendarEdit.name":function(){this.server_errors.name=""},"calendarEdit.month":function(){this.server_errors.month=""}},created:function(){this.fetchData(),console.log("2222",this.items),this.items||this.$router.push("/")}},c=o,l=(a("b7b7"),a("2877")),u=a("6544"),d=a.n(u),f=a("2bc5"),v=a("8336"),h=a("b0af"),p=a("99d9"),b=a("62ad"),m=a("a523"),_=a("2e4b"),g=a("4bd4"),w=a("132d"),V=a("0fd9"),x=a("2fa4"),$=a("8654"),y=Object(l["a"])(c,r,i,!1,null,null,null);e["default"]=y.exports;d()(y,{VBreadcrumbs:f["a"],VBtn:v["a"],VCard:h["a"],VCardActions:p["a"],VCardText:p["b"],VCol:b["a"],VContainer:m["a"],VDatePicker:_["a"],VForm:g["a"],VIcon:w["a"],VRow:V["a"],VSpacer:x["a"],VTextField:$["a"]})},f8eb:function(t,e,a){}}]);
//# sourceMappingURL=chunk-0265ec0c.fa067a2e.js.map