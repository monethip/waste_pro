(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d1f48cc"],{"4bd4":function(t,e,a){"use strict";a("14d9");var s=a("58df"),r=a("7e2b"),i=a("3206");e["a"]=Object(s["a"])(r["a"],Object(i["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))}):a.valid=e(t),a},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const a=this.watchers.find(t=>t._uid===e._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"54da":function(t,e,a){"use strict";e["a"]=function(t){const e={};if(!t[0]){for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&(void 0!==t[e]&&null!==t[e]&&""!==t[e]||delete t[e]);return t}for(const a of t)1==Object.keys(a).length&&a[Object.keys(a)]&&(e[Object.keys(a)]=a[Object.keys(a)]);return e}},"5e9a":function(t,e,a){"use strict";a.r(e);var s=a("8336"),r=a("b0af"),i=a("99d9"),o=a("cc20"),n=a("62ad"),l=a("a523"),d=a("8fea"),c=a("2e4b"),h=a("4bd4"),u=a("132d"),m=a("e449"),f=a("0fd9"),_=a("2fa4"),p=a("8654"),v=function(){var t=this,e=t._self._c;return e(l["a"],[e(f["a"],[e(n["a"],[e(s["a"],{staticClass:"btn-primary",on:{click:function(e){return t.AddPlan()}}},[e(u["a"],[t._v("mdi-plus")])],1)],1),e(n["a"],[e("p",[t._v("ແຜນຕາຕະລາງວຽກແຕ່ລະເດືອນ")])])],1),e("div",[e(r["a"],[e(i["b"],[e(d["a"],{attrs:{"disable-pagination":!0,headers:t.headers,items:t.calendars,search:t.search,"hide-default-footer":""},scopedSlots:t._u([{key:"item.plan",fn:function({item:a}){return[e(u["a"],{staticClass:"mr-2",attrs:{medium:""},on:{click:function(e){return t.gotoPlanCalendar(a.id,a.month)}}},[t._v(" mdi-map-marker-path ")])]}},{key:"item.has_invoice",fn:function({item:a}){return[e(o["a"],{attrs:{color:t.HasInvoiceColor(a.has_invoice)}},[t._v(" "+t._s(t.HasInvoice(a.has_invoice))+" ")])]}},{key:"item.created_at",fn:function({item:a}){return[e("div",[t._v(" "+t._s(t.moment(a.created_at).format("hh:mm:ss DD-MM-YY"))+" ")])]}},{key:"item.actions",fn:function({item:a}){return[e(u["a"],{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editModal(a)}}},[t._v(" mdi-pencil ")]),e(u["a"],{attrs:{small:""},on:{click:function(e){return t.deleteItem(a.id)}}},[t._v(" mdi-delete ")])]}}])}),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{offset:t.offset,pagination:t.pagination},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1),e("ModalAdd",[[e(r["a"],[e(i["c"],[e("span",{staticClass:"headline"},[t._v("Add Calendar")])]),e(i["b"],[e(l["a"],[e(h["a"],{ref:"form",attrs:{"lazy-validation":""}},[e(f["a"],[e(n["a"],{attrs:{cols:"12"}},[e(p["a"],{attrs:{rules:t.nameRules,dense:"",label:"ຊື່",outlined:""},model:{value:t.plan.name,callback:function(e){t.$set(t.plan,"name",e)},expression:"plan.name"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1)],1),e(f["a"],[e(n["a"],{attrs:{cols:"12"}},[e(m["a"],{attrs:{"close-on-content-click":!0,"nudge-right":40,rules:t.monthRules,"min-width":"auto","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(p["a"],t._g(t._b({attrs:{dense:"",label:"ເລີ່ມວັນທີ",outlined:"",readonly:""},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}},"v-text-field",s,!1),a))]}}]),model:{value:t.start_menu,callback:function(e){t.start_menu=e},expression:"start_menu"}},[e(c["a"],{attrs:{type:"month"},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}})],1),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.month)+" ")])],1)],1)],1)],1),e(i["a"],[e(_["a"]),e(s["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeAddModal()}}},[t._v(" Close ")]),e(s["a"],{attrs:{disabled:t.loading,loading:t.loading,color:"blue darken-1",text:""},on:{click:function(e){return t.SubmitPlan()}}},[t._v(" Add ")])],1)],1)],1)]],2),e("ModalEdit",[[e(r["a"],[e(i["c"],[e("span",{staticClass:"headline"},[t._v("Update Calendar")])]),e(i["b"],[e(l["a"],[e(h["a"],{ref:"form",attrs:{"lazy-validation":""}},[e(f["a"],[e(n["a"],{attrs:{cols:"12"}},[e(p["a"],{attrs:{rules:t.nameRules,dense:"",label:"ຊື່",outlined:""},model:{value:t.calendarEdit.name,callback:function(e){t.$set(t.calendarEdit,"name",e)},expression:"calendarEdit.name"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1)],1),e(f["a"],[e(n["a"],{attrs:{cols:"12"}},[e(m["a"],{attrs:{"close-on-content-click":!0,"nudge-right":40,"min-width":"auto","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(p["a"],t._g(t._b({attrs:{rules:t.monthRules,dense:"",label:"ເລີ່ມວັນທີ",outlined:"",readonly:""},model:{value:t.calendarEdit.month,callback:function(e){t.$set(t.calendarEdit,"month",e)},expression:"calendarEdit.month"}},"v-text-field",s,!1),a))]}}]),model:{value:t.edit_date,callback:function(e){t.edit_date=e},expression:"edit_date"}},[e(c["a"],{attrs:{type:"month"},model:{value:t.calendarEdit.month,callback:function(e){t.$set(t.calendarEdit,"month",e)},expression:"calendarEdit.month"}})],1),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.month)+" ")])],1)],1)],1)],1),e(i["a"],[e(_["a"]),e(s["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeEditModal()}}},[t._v(" Close ")]),e(s["a"],{attrs:{disabled:t.loading,loading:t.loading,color:"blue darken-1",text:""},on:{click:function(e){return t.UpdatePlan()}}},[t._v(" Update ")])],1)],1)],1)]],2),e("ModalDelete",[[e(i["a"],[e(_["a"]),e(s["a"],{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v(" Cancel ")]),e(s["a"],{attrs:{disabled:t.loading,loading:t.loading,color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v(" OK ")]),e(_["a"])],1)]],2)],1)},g=[],b=(a("14d9"),a("6eceb")),k=a("54da"),$={name:"Customer",title(){return"Vientiane Waste Co-Dev|Calendar"},data(){return{calendars:[],loading:!1,calendarId:"",offset:12,pagination:{},per_page:100,search:"",oldVal:"",start_date:(new Date).toISOString().substr(0,7),start_menu:!1,edit_date:!1,packages:[],selectedPackage:"",server_errors:{},districts:[],selectedDistrict:"",villages:[],selectedVillage:[],selectedStatus:[],plan:{},calendarEdit:{},headers:[{text:"ຊື່",value:"name"},{text:"ວັນທີເລີ່ມ",value:"month"},{text:"ມີບິນ",value:"has_invoice",align:"center",sortable:!1},{text:"ຈຳນວນຮອບ",value:"plan_calendars_count",align:"center",sortable:!1},{text:"ລາຍລະອຽດແຜນ",value:"plan",sortable:!1,align:"center"},{text:"ວັນທີສ້າງ",value:"created_at",align:"center",sortable:!1},{text:"",value:"actions",sortable:!1}],toast:{value:!0,color:"success",msg:""},toast_error:{value:!0,color:"error",msg:"Something when wrong!"},nameRules:[t=>!!t||"Name is required",t=>t&&t.length>=2||"Name must be less than 2 characters"],monthRules:[t=>!!t||"Date is required"]}},watch:{search(t){""==t&&this.fetchData()},"plan.name":function(){this.server_errors.name=""},start_date(){this.server_errors.month=""},"calendarEdit.name":function(){this.server_errors.name=""},"calendarEdit.month":function(){this.server_errors.month=""}},created(){this.fetchData()},methods:{allowedDates(t){return t>=(new Date).toISOString().substr(0,10)},fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("plan-month",{params:Object(k["a"])([{page:this.pagination.current_page},{per_page:this.per_page}])}).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.calendars=t.data.data.data,this.pagination=t.data.data.pagination},100)}).catch(t=>{if(this.$store.commit("Loading_State",!1),t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}})},AddPlan(){this.$store.commit("modalAdd_State",!0)},closeDelete(){this.$store.commit("modalDelete_State",!1)},deleteItem(t){this.calendarId=t,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm(){this.loading=!0,this.$axios.delete("plan-month/"+this.calendarId).then(t=>{200==t.data.code&&setTimeout(()=>{this.loading=!1,this.toast.msg=t.data.message,this.$store.commit("Toast_State",this.toast),this.$store.commit("modalDelete_State",!1),this.fetchData()},300)}).catch(()=>{this.fetchData(),this.$store.commit("Toast_State",this.toast_error),this.$store.commit("modalDelete_State",!1),this.loading=!1})},SubmitPlan(){const t=this.moment(this.start_date+" 1").format("YYYY-MM-DD");1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("plan-month/",{name:this.plan.name,month:t}).then(t=>{200==t.data.code&&setTimeout(()=>{this.loading=!1,this.closeAddModal(),this.fetchData(),this.reset(),this.$store.commit("Toast_State",this.toast)},300)}).catch(t=>{if(this.loading=!1,this.$store.commit("Toast_State",this.toast_error),this.fetchData(),t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}}))},closeAddModal(){this.$store.commit("modalAdd_State",!1)},editModal(t){this.calendarEdit=t,this.calendarEdit.month=this.moment(this.calendarEdit.month).format("YYYY-MM"),this.$store.commit("modalEdit_State",!0)},UpdatePlan(){const t=this.moment(this.calendarEdit.month+" 1").format("YYYY-MM-DD");1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.put("plan-month/"+this.calendarEdit.id,{name:this.calendarEdit.name,month:t}).then(t=>{200==t.data.code&&setTimeout(()=>{this.loading=!1,this.closeEditModal(),this.fetchData(),this.reset(),this.$store.commit("Toast_State",this.toast)},300)}).catch(t=>{if(this.loading=!1,this.$store.commit("Toast_State",this.toast_error),t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}}))},closeEditModal(){this.$store.commit("modalEdit_State",!1)},Search(){Object(b["a"])(this)},gotoPlanCalendar(t,e){this.$router.push({name:"PlanCalendar",params:{id:t},query:{month:e}})},reset(){this.$refs.form.reset()},HasInvoiceColor(t){return"1"==t?"success":0==t?"error":void 0},HasInvoice(t){return"1"==t?"ມີບິນ":0==t?"ບໍ່ມີ":void 0}}},D=$,E=(a("eebf"),a("2877")),x=Object(E["a"])(D,v,g,!1,null,null,null);e["default"]=x.exports},"6eceb":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));const s=t=>{""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},ccab:function(t,e,a){},eebf:function(t,e,a){"use strict";a("ccab")}}]);
//# sourceMappingURL=chunk-9d1f48cc.975f5dde.js.map