(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71834db0"],{"27b5":function(t,e,a){"use strict";a("879f")},"4bd4":function(t,e,a){"use strict";var n=a("5530"),r=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),o=a("7e2b"),i=a("3206");e["a"]=Object(r["a"])(o["a"],Object(i["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=a(t)))})):n.valid=a(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"5e9a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("v-btn",{staticClass:"btn-primary",on:{click:function(e){return t.AddPlan()}}},[a("v-icon",[t._v("mdi-plus")])],1)],1),a("v-col",[a("p",[t._v("ແຜນຕາຕະລາງວຽກແຕ່ລະເດືອນ")])]),a("v-col",[a("v-text-field",{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຊື່",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),a("div",[a("v-card",[a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.calendars,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.plan",fn:function(e){var n=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{medium:""},on:{click:function(e){return t.gotoPlanCalendar(n.id)}}},[t._v("mdi-map-marker-path")])]}},{key:"item.actions",fn:function(e){var n=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editModal(n)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(n.id)}}},[t._v(" mdi-delete ")])]}}])}),a("br"),[t.pagination.total_pages>1?a("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1),a("ModalAdd",[[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Add Calendar")])]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{rules:t.nameRules,label:"ຊື່",outlined:"",dense:""},model:{value:t.plan.name,callback:function(e){t.$set(t.plan,"name",e)},expression:"plan.name"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-menu",{attrs:{rules:t.monthRules,"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"ເລີ່ມວັນທີ",readonly:"",outlined:"",dense:""},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}},"v-text-field",r,!1),n))]}}]),model:{value:t.start_menu,callback:function(e){t.start_menu=e},expression:"start_menu"}},[a("v-date-picker",{model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}})],1),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.month)+" ")])],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeAddModal()}}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.SubmitPlan()}}},[t._v(" Add ")])],1)],1)],1)]],2),a("ModalEdit",[[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Update Calendar")])]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"ຊື່",outlined:"",dense:"",rules:t.nameRules},model:{value:t.calendarEdit.name,callback:function(e){t.$set(t.calendarEdit,"name",e)},expression:"calendarEdit.name"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"ເລີ່ມວັນທີ",readonly:"",outlined:"",dense:"",rules:t.monthRules},model:{value:t.calendarEdit.month,callback:function(e){t.$set(t.calendarEdit,"month",e)},expression:"calendarEdit.month"}},"v-text-field",r,!1),n))]}}]),model:{value:t.start_menu,callback:function(e){t.start_menu=e},expression:"start_menu"}},[a("v-date-picker",{model:{value:t.calendarEdit.month,callback:function(e){t.$set(t.calendarEdit,"month",e)},expression:"calendarEdit.month"}})],1),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.month)+" ")])],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeEditModal()}}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.UpdatePlan()}}},[t._v(" Update ")])],1)],1)],1)]],2),a("ModalDelete",[[a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:t.deleteItemConfirm}},[t._v("OK")]),a("v-spacer")],1)]],2)],1)},r=[],o=a("3835"),i=(a("4fad"),a("b0c0"),a("6eceb")),s={name:"Customer",data:function(){return{tab:null,calendars:[],loading:!1,calendarId:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",start_date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),start_menu:!1,packages:[],selectedPackage:"",server_errors:{},districts:[],selectedDistrict:"",villages:[],selectedVillage:[],selectedStatus:[],plan:{},calendarEdit:{},headers:[{text:"ຊື່",value:"name"},{text:"ວັນທີ",value:"month"},{text:"ຈຳນວນຮອບ",value:"plan_calendars_count",align:"center",sortable:!1},{text:"ລາຍລະອຽດແຜນ",value:"plan",sortable:!1,align:"center"},{text:"",value:"actions",sortable:!1}],toast:{value:!0,color:"success",msg:""},toast_error:{value:!0,color:"error",msg:"Something when wrong!"},nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length>=2||"Name must be less than 2 characters"}],monthRules:[function(t){return!!t||"Date is required"}]}},methods:{fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("plan-month",{params:{page:this.pagination.current_page,per_page:this.per_page}}).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.calendars=e.data.data.data,t.pagination=e.data.data.pagination}),100)})).catch((function(e){if(t.$store.commit("Loading_State",!1),t.fetchData(),422==e.response.status)for(var a=e.response.data.errors,n=0,r=Object.entries(a);n<r.length;n++){var i=Object(o["a"])(r[n],2),s=i[0],l=i[1];t.server_errors[s]=l[0]}}))},AddPlan:function(){this.$store.commit("modalAdd_State",!0)},closeDelete:function(){this.$store.commit("modalDelete_State",!1)},deleteItem:function(t){this.calendarId=t,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm:function(){var t=this;this.loading=!0,this.$axios.delete("plan-month/"+this.calendarId).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.toast.msg=e.data.message,t.$store.commit("Toast_State",t.toast),t.$store.commit("modalDelete_State",!1),t.fetchData()}),300)})).catch((function(){t.fetchData(),t.$store.commit("Toast_State",t.toast_error),t.$store.commit("modalDelete_State",!1),t.loading=!1}))},SubmitPlan:function(){var t=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("plan-month/",{name:this.plan.name,month:this.start_date}).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.closeAddModal(),t.fetchData(),t.reset(),t.$store.commit("Toast_State",t.toast)}),300)})).catch((function(e){if(t.loading=!1,t.$store.commit("Toast_State",t.toast_error),t.fetchData(),422==e.response.status)for(var a=e.response.data.errors,n=0,r=Object.entries(a);n<r.length;n++){var i=Object(o["a"])(r[n],2),s=i[0],l=i[1];t.server_errors[s]=l[0]}})))},closeAddModal:function(){this.$store.commit("modalAdd_State",!1)},editModal:function(t){this.calendarEdit=t,this.$store.commit("modalEdit_State",!0)},UpdatePlan:function(){var t=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.put("plan-month/"+this.calendarEdit.id,{name:this.calendarEdit.name,month:this.calendarEdit.month}).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.closeEditModal(),t.fetchData(),t.reset(),t.$store.commit("Toast_State",t.toast)}),300)})).catch((function(e){if(t.loading=!1,t.$store.commit("Toast_State",t.toast_error),t.fetchData(),422==e.response.status)for(var a=e.response.data.errors,n=0,r=Object.entries(a);n<r.length;n++){var i=Object(o["a"])(r[n],2),s=i[0],l=i[1];t.server_errors[s]=l[0]}})))},closeEditModal:function(){this.$store.commit("modalEdit_State",!1)},Search:function(){Object(i["a"])(this)},gotoPlanCalendar:function(t){this.$router.push({name:"PlanCalendar",params:{id:t}})},reset:function(){this.$refs.form.reset()}},watch:{search:function(t){""==t&&this.fetchData()},"plan.name":function(){this.server_errors.name=""},start_date:function(){this.server_errors.month=""},"calendarEdit.name":function(){this.server_errors.name=""},"calendarEdit.month":function(){this.server_errors.month=""}},created:function(){this.fetchData()}},l=s,c=(a("27b5"),a("2877")),d=a("6544"),u=a.n(d),m=a("8336"),f=a("b0af"),h=a("99d9"),v=a("62ad"),p=a("a523"),_=a("8fea"),g=a("2e4b"),b=a("4bd4"),k=a("132d"),x=a("e449"),$=a("0fd9"),w=a("2fa4"),E=a("8654"),S=Object(c["a"])(l,n,r,!1,null,null,null);e["default"]=S.exports;u()(S,{VBtn:m["a"],VCard:f["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:v["a"],VContainer:p["a"],VDataTable:_["a"],VDatePicker:g["a"],VForm:b["a"],VIcon:k["a"],VMenu:x["a"],VRow:$["a"],VSpacer:w["a"],VTextField:E["a"]})},"879f":function(t,e,a){}}]);
//# sourceMappingURL=chunk-71834db0.d23bfdbd.js.map