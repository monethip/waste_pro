(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b09d324"],{"047d":function(t,e,a){},"056d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"mb-n6"},[a("v-col",[a("v-btn",{staticClass:"btn-primary",on:{click:function(e){return t.createPage()}}},[a("v-icon",[t._v("mdi-plus")])],1)],1),a("v-col",[a("v-text-field",{attrs:{outlined:"",dense:"",clearables:"","prepend-inner-icon":"mdi-magnify",label:"Name",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),a("div",[a("v-card",[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.data,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.media",fn:function(e){var r=e.item;return t._l(r.media,(function(e,r){return a("v-avatar",{key:r,attrs:{size:"36px"}},[e.thumb?a("img",{attrs:{src:e.thumb}}):t._e()])}))}},{key:"item.actions",fn:function(e){var r=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.viewPage(r.id)}}},[t._v(" mdi-eye ")]),a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editPage(r.id)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(r.id)}}},[t._v(" mdi-delete ")])]}}])}),a("br"),[t.pagination.total_pages>1?a("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1)],1),a("ModalAdd",[[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Add Route Plan")])]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Name *",required:"",rules:t.nameRules},model:{value:t.plan.name,callback:function(e){t.$set(t.plan,"name",e)},expression:"plan.name"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{staticClass:"input-number",attrs:{label:"ລາຍລະອຽດ ",required:"",type:"text"},model:{value:t.plan.description,callback:function(e){t.$set(t.plan,"description",e)},expression:"plan.description"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeAddModal()}}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.AddItem()}}},[t._v(" Save ")])],1)],1)],1)]],2),a("ModalDelete",[[a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:t.deleteItemConfirm}},[t._v("OK")]),a("v-spacer")],1)]],2)],1)},n=[],i=a("3835"),o=(a("ac1f"),a("841c"),a("4fad"),a("6eceb")),s={name:"Customer",data:function(){return{tab:null,customers:[],data:[{name:"Plan A",village:"Hongkhar",district:"Chanthabury",description:"Form Chanthabury to Sykhodthabong",customer:"200",driver:"5"}],plan:{},loading:!1,customerId:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",headers:[{text:"ຊື່",value:"name"},{text:"ບ້ານ",value:"village"},{text:"ເມືອງ",value:"district"},{text:"ລາຍລະອຽດ",value:"description"},{text:"ຈຳນວນລູກຄ້າ",value:"customer",sortable:!1},{text:"ຈຳນວນລົດ",value:"driver",sortable:!1},{text:"",value:"actions",sortable:!1}],nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length>=2||"Name must be less than 2 characters"}],server_errors:{},toast:{value:!0,color:"success",msg:""},toast_error:{value:!0,color:"error",msg:"Something when wrong!"}}},methods:{fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("customer",{params:{page:this.pagination.current_page,per_page:this.per_page,filter:this.search}}).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1)}),300)})).catch((function(e){if(t.$store.commit("Loading_State",!1),t.fetchData(),422==e.response.status)for(var a=e.response.data.errors,r=0,n=Object.entries(a);r<n.length;r++){var o=Object(i["a"])(n[r],2),s=o[0],c=o[1];t.server_errors[s]=c[0]}}))},openAddModal:function(){this.$store.commit("modalAdd_State",!0)},AddItem:function(){var t=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("user-setting/user",this.plan).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.closeAddModal(),t.user={},t.fetchData(),t.reset(),t.$store.commit("Toast_State",t.toast)}),300)})).catch((function(e){if(t.loading=!1,t.$store.commit("Toast_State",t.toast_error),t.fetchData(),422==e.response.status)for(var a=e.response.data.errors,r=0,n=Object.entries(a);r<n.length;r++){var o=Object(i["a"])(n[r],2),s=o[0],c=o[1];t.server_errors[s]=c[0]}})))},closeAddModal:function(){this.$store.commit("modalAdd_State",!1)},closeDelete:function(){this.$store.commit("modalDelete_State",!1)},deleteItem:function(t){this.customerId=t,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm:function(){var t=this;this.loading=!0,this.$axios.delete("customer/"+this.customerId).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.toast.msg=e.data.message,t.$store.commit("Toast_State",t.toast),t.$store.commit("modalDelete_State",!1),t.fetchData()}),300)})).catch((function(){t.fetchData(),t.$store.commit("Toast_State",t.toast_error),t.$store.commit("modalDelete_State",!1),t.loading=!1}))},createPage:function(){this.$router.push({name:"Export-Plan"})},editPage:function(t){this.$router.push({name:"EditCustomer",params:{id:t}})},viewPage:function(t){console.log(t),this.$router.push({name:"ViewCustomer",params:{id:t}})},Search:function(){Object(o["a"])(this)}},watch:{search:function(t){""==t&&this.fetchData()}},created:function(){this.fetchData()}},c=s,l=(a("4a1d"),a("2877")),d=a("6544"),u=a.n(d),f=a("8212"),h=a("8336"),m=a("b0af"),v=a("99d9"),p=a("62ad"),g=a("a523"),b=a("8fea"),_=a("4bd4"),x=a("132d"),$=a("0fd9"),V=a("2fa4"),k=a("8654"),w=Object(l["a"])(c,r,n,!1,null,null,null);e["default"]=w.exports;u()(w,{VAvatar:f["a"],VBtn:h["a"],VCard:m["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VCol:p["a"],VContainer:g["a"],VDataTable:b["a"],VForm:_["a"],VIcon:x["a"],VRow:$["a"],VSpacer:V["a"],VTextField:k["a"]})},"4a1d":function(t,e,a){"use strict";a("047d")},"4bd4":function(t,e,a){"use strict";var r=a("5530"),n=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),i=a("7e2b"),o=a("3206");e["a"]=Object(n["a"])(i["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},r={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(r.valid=a(t)))})):r.valid=a(t),r},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"4fad":function(t,e,a){var r=a("23e7"),n=a("6f53").entries;r({target:"Object",stat:!0},{entries:function(t){return n(t)}})},"6eceb":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("ac1f"),a("841c");var r=function(t){""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}}}]);
//# sourceMappingURL=chunk-3b09d324.e4943b19.js.map