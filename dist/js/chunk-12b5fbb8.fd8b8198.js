(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12b5fbb8"],{"1f4f":function(t,e,i){"use strict";var a=i("5530"),n=(i("a9e3"),i("8b37"),i("80d2")),s=i("7560"),o=i("58df");e["a"]=Object(o["a"])(s["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(a["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"4bd4":function(t,e,i){"use strict";var a=i("5530"),n=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("159b"),i("7db0"),i("58df")),s=i("7e2b"),o=i("3206");e["a"]=Object(n["a"])(s["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"4fad":function(t,e,i){var a=i("23e7"),n=i("6f53").entries;a({target:"Object",stat:!0},{entries:function(t){return n(t)}})},"55ba":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",{staticClass:"mb-4"},[i("v-col",[i("v-breadcrumbs",{staticClass:"pa-0",attrs:{large:""}},[i("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[i("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" ລາຍລະອຽດການອອກບິນຄ່າຂີ້ເຫຍື້ອ ")],1)],1)],1),i("div",[i("v-card",[i("v-card-text",{staticClass:"px-16 py-16"},[i("v-row",{staticClass:"pb-4"},[i("v-col",[i("h2",{staticClass:"text-center"},[t._v("ໃບບິນເກັບເງິນຄ່າຂີ້ເຫື້ຍອ")])])],1),i("v-row",[i("v-col",[i("h3",[t._v("ຂໍ້ມູນບິນ")]),i("h3",[t._v(" ເລກບິນ: "),t.invoice.billing?i("span",[t._v(t._s(t.invoice.billing.billing_display_id))]):t._e()]),i("h3",[t._v(" ລາຍລະອຽດ: "),t.invoice.billing?i("span",[t._v(t._s(t.invoice.billing.content))]):t._e()]),i("h3",[t._v(" ສະຖານະບິນ: "),t.invoice.billing?i("span",{class:t.invoiceStatusColor},[t._v(t._s(t.invoiceStatus(t.invoice.billing.status)))]):t._e()]),t.invoice.billing?i("h3",[t._v("ປະເພດບິນ: "+t._s(t.invoice.billing.display_type))]):t._e(),i("h3",[t._v(" ວັນທີ: "+t._s(t.moment(t.invoice.created_at).format("DD-MM-YY"))+" ")])]),i("v-col",[i("h3",[t._v("ຂໍ້ມູນລູກຄ້າ")]),t.invoice.billing?i("div",[(t.invoice.billing.user.customer.customer_type="company")?i("h3",[t._v(" ລະຫັດລູກຄ້າ: "+t._s(t.invoice.billing.user.customer.customer_id)+" ")]):t._e()]):t._e(),t.invoice.billing?i("div",[(t.invoice.billing.user.customer.customer_type="company")?i("h3",[t._v(" ຊື່: "+t._s(t.invoice.billing.user.customer.company_name)+" "+t._s(t.invoice.billing.user.name)+" ")]):(t.invoice.billing.user.customer.customer_type="home")?i("h3",[t._v(" ຊື່: "+t._s(t.invoice.billing.user.customer.name)+" "+t._s(t.invoice.billing.user.customer.surname)+" ")]):t._e()]):t._e(),t.invoice.billing?i("h3",[t._v(" ວັນທີສະໝັກ: "+t._s(t.invoice.billing.user.customer.start_month)+" ")]):t._e()])],1),i("v-row",{staticClass:"mb-n6"},[i("v-col",[t._v("ລາຍລະອຽດ")])],1),i("v-divider",{staticClass:"my-6 c-divider"}),i("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[i("thead",[i("tr",[i("th",{staticClass:"text-left"},[t._v(" ລຳດັບ ")]),i("th",{staticClass:"text-left"},[t._v(" ລາຍການ ")]),i("th",{staticClass:"text-left"},[t._v(" ລາຍລະອຽດ ")]),i("th",{staticClass:"text-left"},[t._v(" Content ")]),i("th",{staticClass:"text-left"},[t._v(" ຈຳນວນ ")]),i("th",{staticClass:"text-left"},[t._v(" ລາຄາ ")]),i("th",{staticClass:"text-left"},[t._v(" ລວມ ")]),t.invoice.billing?i("div",["created"===t.invoice.billing.status?i("th",{staticClass:"text-left"}):t._e()]):t._e()])]),t.invoice.billing?i("tbody",t._l(t.invoice.billing.billing_details,(function(e,a){return i("tr",{key:a},[i("td",[t._v(t._s(a+1))]),i("td",[t._v(t._s(e.item))]),i("td",[t._v(t._s(e.content))]),i("td",[t._v(t._s(e.item_la))]),i("td",[t._v(t._s(Intl.NumberFormat().format(e.quantity)))]),i("td",[t._v(t._s(Intl.NumberFormat().format(e.price)))]),i("td",[t._v(t._s(Intl.NumberFormat().format(e.total)))]),"created"===t.invoice.billing.status?i("td",[i("v-icon",{staticClass:"mr-2",attrs:{color:"success",small:""},on:{click:function(i){return t.EditInvoice(e)}}},[t._v(" mdi-pen ")])],1):t._e()])})),0):t._e()]},proxy:!0}])}),i("v-divider",{staticClass:"my-6 c-divider total-height bottom"}),i("v-simple-table",[i("tbody",{staticClass:"tb-result"},[i("tr",[i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v("ລວມເງິນ:")]),t.invoice.billing?i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v(" "+t._s(Intl.NumberFormat().format(t.invoice.billing.sub_total))+" ")]):t._e()]),i("tr",[i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v("ສ່ວນຫຼຸດ:")]),t.invoice.billing?i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v(" "+t._s(Intl.NumberFormat().format(t.invoice.billing.discount))+" ")]):t._e()]),i("tr",{staticStyle:{"font-size":"20px"}},[i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v("ລວມທັງໝົດ:")]),t.invoice.billing?i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v(" "+t._s(Intl.NumberFormat().format(t.invoice.billing.total))+" ")]):t._e()])]),i("br")]),i("v-row",[i("v-col",[i("h3",[t._v(" ຊຳລະບໍ່ໃຫ້ກາຍວັນທີ: "+t._s(t.moment(t.invoice.end_month).format("DD-MM-YY"))+" ")]),i("h3",[t._v("ປະເພດຊຳລະ: "+t._s(t.invoice.payment_method))])]),t.invoice.media?i("v-col",t._l(t.invoice.media,(function(t,e){return i("div",{key:e},[i("img",{staticClass:"grey",attrs:{"aspect-ratio":"1",src:t.url}})])})),0):t._e()],1),i("v-card-actions",{staticClass:"mt-6"},[i("v-spacer"),t.invoice.billing?i("div",["success"===t.invoice.billing.status?i("v-btn",{attrs:{color:"info",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.Download(t.invoice)}}},[t._v(" Download ")]):t._e()],1):t._e()],1)],1)],1)],1),i("ModalAdd",[[i("v-card",{staticClass:"py-8 px-14"},[i("v-card-title",[i("p",[t._v("ແກ້ໄຂຂໍ້ມູນ "+t._s(t.formData.content))])]),i("v-card-text",[i("v-container",[i("v-form",{ref:"form",attrs:{"lazy-validation":""}},[i("h3",{staticClass:"my-4"},[t._v("ແກ້ໄຂຂໍ້ມູນ")]),i("v-row",[i("v-col",{attrs:{cols:""}},[i("v-text-field",{staticClass:"input-number",attrs:{label:"Quantity",outlined:"",dense:"",type:"number"},model:{value:t.formData.quantity,callback:function(e){t.$set(t.formData,"quantity",e)},expression:"formData.quantity"}}),i("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.qty)+" ")])],1),i("v-col",{attrs:{cols:""}},[i("v-text-field",{staticClass:"input-number",attrs:{label:"Price",outlined:"",dense:"",type:"number"},model:{value:t.formData.price,callback:function(e){t.$set(t.formData,"price",e)},expression:"formData.price"}}),i("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.price)+" ")])],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"elevation-0 btn mr-4 px-12",attrs:{color:"error",medium:""},on:{click:function(e){return t.closeAddModal()}}},[t._v(" ປິດ ")]),i("v-btn",{staticClass:"elevation-0 btn btn-primary px-12",attrs:{medium:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.updateInvoice()}}},[t._v(" ອັບເດດ ")])],1)],1)],1)]],2)],1)},n=[],s=i("1da1"),o=i("3835"),r=(i("96cf"),i("4fad"),{name:"InvoiceDetail",title:function(){return"Vientiane Waste Co-Dev|Invoice Detail"},data:function(){return{loading:!1,customerId:"",invoice:[],invoiceStatusColor:"",server_errors:{},status:[{id:1,name:"created"},{id:2,name:"approved"},{id:3,name:"to_confirm_payment"},{id:4,name:"rejected"},{id:5,name:"success"}],total:"",formData:{}}},methods:{Download:function(t){null!=t&&window.open(t.billing.download_pdf_link)},backPrevios:function(){this.$router.go(-1)},fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("future-invoice/"+this.$route.params.id).then((function(e){200==e.data.code&&(t.$store.commit("Loading_State",!1),t.invoice=e.data.data)})).catch((function(e){if(t.$store.commit("Loading_State",!1),422==e.response.status)for(var i=e.response.data.errors,a=0,n=Object.entries(i);a<n.length;a++){var s=Object(o["a"])(n[a],2),r=s[0],c=s[1];t.server_errors[r]=c[0]}}))},invoiceStatus:function(t){return"created"==t?(this.invoiceStatusColor="primary--text","ສ້າງບິນສຳເລັດ"):"approved"==t?(this.invoiceStatusColor="info--text","ອະນຸມັດແລ້ວ"):"to_confirm_payment"==t?(this.invoiceStatusColor="warning--text","ລໍຖ້າຢືນຢັນການຊຳລະ"):"rejected"==t?(this.invoiceStatusColor="error--text","ຊຳລະບໍ່ສຳເລັດ"):"success"==t?(this.invoiceStatusColor="success--text","ສຳເລັດການຊຳລະ"):void 0},closeAddModal:function(){this.$store.commit("modalAdd_State",!1)},EditInvoice:function(t){console.log(t),this.formData=t,this.$store.commit("modalAdd_State",!0)},updateInvoice:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(1!=t.$refs.form.validate()){e.next=4;break}return t.loading=!0,e.next=4,t.$axios.put("billing-detail/"+t.formData.id,{qty:t.formData.quantity,price:t.formData.price}).then((function(e){200==e.data.code&&(t.loading=!1,t.fetchData(),t.formData={},t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message}),t.closeAddModal())})).catch((function(e){t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message})}));case 4:case"end":return e.stop()}}),e)})))()}},watch:{},created:function(){this.$route.params.id&&this.fetchData()}}),c=r,l=(i("8ee7"),i("2877")),d=i("6544"),u=i.n(d),v=i("2bc5"),m=i("8336"),f=i("b0af"),h=i("99d9"),_=i("62ad"),b=i("a523"),p=i("ce7e"),g=i("4bd4"),y=i("132d"),x=i("0fd9"),C=i("1f4f"),w=i("2fa4"),$=i("8654"),D=Object(l["a"])(c,a,n,!1,null,null,null);e["default"]=D.exports;u()(D,{VBreadcrumbs:v["a"],VBtn:m["a"],VCard:f["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:_["a"],VContainer:b["a"],VDivider:p["a"],VForm:g["a"],VIcon:y["a"],VRow:x["a"],VSimpleTable:C["a"],VSpacer:w["a"],VTextField:$["a"]})},"8b37":function(t,e,i){},"8ee7":function(t,e,i){"use strict";i("c56b")},c56b:function(t,e,i){}}]);
//# sourceMappingURL=chunk-12b5fbb8.fd8b8198.js.map