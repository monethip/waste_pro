(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-644cb550"],{"0af3":function(t,e,a){"use strict";var i=a("1455");e["a"]=i["a"].extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=i["a"].options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})},1455:function(t,e,a){"use strict";var i=a("59f4"),s=a("c91b"),n=a("385b"),r=a("dd08"),o=a("9c0c");const l=Object(o["a"])(i["a"],Object(s["a"])("windowGroup","v-window-item","v-window"));e["a"]=l.extend().extend().extend({name:"v-window-item",directives:{Touch:n["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(r["h"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(r["h"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}})},"22aa":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"d",(function(){return s})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"f",(function(){return o})),a.d(e,"e",(function(){return l})),a.d(e,"g",(function(){return c})),a.d(e,"h",(function(){return d}));const i=function(t){switch(t){case"created":case"ລໍຖ້າອະນຸມັດ":return"#73b8fd";case"approved":case"ອະນຸມັດແລ້ວ":return"#0080fc";case"canceled":case"ບິນຖືກຍົກເລີກ":return"#eb004c";case"rejected":case"ການຈ່າຍຖືກປະຕິເສດ":return"#740127";case"to_confirm_payment":case"ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ":return"#9c540d";case"success":case"ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ":return"#02a38a"}},s=function(t){switch(t){case"created":return"ລໍຖ້າອະນຸມັດ";case"approved":return"ອະນຸມັດແລ້ວ";case"canceled":return"ບິນຖືກຍົກເລີກ";case"rejected":return"ການຈ່າຍຖືກປະຕິເສດ";case"to_confirm_payment":return"ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ";case"success":return"ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ";case"cash":return"ຊຳລະເງິນສົດ";case"bcel":return"BCEL";default:return t}},n=function(t){switch(t){case"CustomBill":return"ບິນຍ້ອນຫຼັງ";case"NewCollectionEvent":return"ບີນບໍລີການຂີ້ເຫຍື້ອພິເສດ";case"FutureInvoice":return"ບິນບໍລິການລ່ວງໜ້າ";case"NewInvoice":return"ບິນບໍລິການປະຈຳເດືອນ";default:return t}},r=function(t){switch(t){case"requested":return"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ";case"rejected":return"ປະຕິເສດລູກຄ້າແລ້ວ";case"approved":return"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ";case"collected":return"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ";case"collect_confirm":return"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ";case"collect_reject":return"ລູກຄ້າປະຕິເສດການເກັບ";default:return t}},o=[{value:"cash",text:"ເງິນສົດ"},{value:"bcel",text:"ເງິນໂອນ"},{value:"bcel_online",text:"bcel bill payments"}],l=["created","approved","to_confirm_payment","success"],c=["rejected","canceled"],d=["kg","ຖົງ","container","ຄັ້ງ"]},"39fc":function(t,e,a){"use strict";a.r(e);var i=a("07b0"),s=a("db5a"),n=a("0f35"),r=a("28e8"),o=a("1da9"),l=a("1789"),c=a("0cb6"),d=a("ab58"),u=a("6733"),h=a("565c"),m=a("1d7d"),p=a("d62f"),f=a("26bf"),_=a("cfe2"),g=a("2f5e"),v=a("0af3"),b=a("a151"),y=a("e28e"),w=a("9b44"),x=function(){var t=this,e=t._self._c;return e(l["a"],[e(p["a"],{staticClass:"mb-n6"},[e(o["a"],{attrs:{cols:""}},[e(f["a"],{attrs:{outlined:"",dense:"",items:t.plans,"item-text":"name","item-value":"id",label:"ເລືອກແຜນ",clearable:""},model:{value:t.selectedRoutePlan,callback:function(e){t.selectedRoutePlan=e},expression:"selectedRoutePlan"}})],1),e(o["a"],{attrs:{cols:""}},[e(f["a"],{attrs:{outlined:"",dense:"",items:t.billingable_types,"item-text":t.filterBillingType,"item-value":"name",label:"ປະເພດບິນ",clearable:""},model:{value:t.selectedBillingable_type,callback:function(e){t.selectedBillingable_type=e},expression:"selectedBillingable_type"}})],1),e(o["a"],[e(w["a"],{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຊື່ລູກຄ້າ",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e(o["a"],[e(w["a"],{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ເລກບິນ",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.billId,callback:function(e){t.billId=e},expression:"billId"}})],1),e(o["a"],[e(w["a"],{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ເບີໂທ",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)],1),e(p["a"],t._l(t.selected,(function(a){return e(o["a"],{key:a.id},[e(r["a"],{staticClass:"ma-2",staticStyle:{width:"100%"},attrs:{close:"",color:"orange",label:"",outlined:""},on:{"click:close":function(e){return t.removeSelectedItem(a.id)}}},[t._v(" "+t._s(a.billing_display_id)+": "+t._s(`${a.display_customer_name} ${a.date}(${a.total})`)+" ")])],1)})),1),t.selected.length?e(p["a"],[e(o["a"],[e(d["a"],{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(i["a"],t._g(t._b({attrs:{color:"red",dark:""}},"v-btn",s,!1),a),[t._v(" ລຶບບິນທີ່ເລືອກ ")])]}}],null,!1,3323817079),model:{value:t.del_dialog,callback:function(e){t.del_dialog=e},expression:"del_dialog"}},[e(s["a"],[e(n["c"],{staticClass:"text-h5 grey lighten-2"},[t._v(" ຢືນຢັນການລືບ ")]),e(n["b"],[t._v(" ທ່ານຢືນຢັນທີ່ຈະລຶບບິນເຫຼົ່ານີ້ບໍ່ "),e(p["a"],t._l(t.selected,(function(a){return e(o["a"],{key:a.id},[e(r["a"],{staticClass:"ma-2",staticStyle:{width:"100%"},attrs:{color:"orange",label:"",outlined:""}},[t._v(" "+t._s(a.billing_display_id)+": "+t._s(`${a.display_customer_name} ${a.date}(${a.total})`)+" ")])],1)})),1)],1),e(u["a"]),e(n["a"],[e(_["a"]),e(i["a"],{attrs:{color:"primary",text:"",loading:t.loading},on:{click:t.deleteBill}},[t._v(" ຢືນຢັນ ")])],1)],1)],1)],1)],1):t._e(),e(p["a"],[e(o["a"],[e("div",[e(s["a"],[e(b["a"],{attrs:{"background-color":"red red darken-4",dark:"","slider-color":"indigo lighten-5"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(g["a"],{attrs:{href:"#tab-1"}},[e(m["a"],[t._v("mdi-account")]),t._v(" ຂໍ້ມູນບີນ ("+t._s(t.pagination.total)+") ")],1)],1),e(y["a"],{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(v["a"],{attrs:{value:"tab-1"}},[e(s["a"],[e(n["b"],[e(c["a"],{attrs:{headers:t.headers,items:t.invoices,search:t.search,"disable-pagination":!0,"hide-default-footer":"","fixed-header":"","show-select":""},scopedSlots:t._u([{key:"item.user",fn:function({item:a}){return[e("div",[t._v(t._s(t.showUser(a)))])]}},{key:"item.sub_total",fn:function({item:a}){return[e("td",[t._v(t._s(Intl.NumberFormat().format(a.sub_total)))])]}},{key:"item.total",fn:function({item:a}){return[e("td",[t._v(t._s(Intl.NumberFormat().format(a.total)))])]}},{key:"item.status",fn:function({item:a}){return[e("div",[t._v(t._s(t.collectStatus(a.status)))])]}},{key:"item.status_la",fn:function({item:a}){return[e(r["a"],{attrs:{color:t.getBgColorFunc(a.status),dark:""}},[t._v(" "+t._s(a.status_la)+" ")])]}},{key:"item.actions",fn:function({item:a}){return[e(o["a"],[e(i["a"],{staticClass:"btn elevation-0",attrs:{color:"info",small:""},on:{click:function(e){return t.ViewInvoice(a.id)}}},[e(m["a"],{staticClass:"mr-1",attrs:{small:""}},[t._v(" mdi-eye ")])],1)],1),e(o["a"],[e(i["a"],{staticClass:"btn elevation-0",attrs:{color:"info",small:""},on:{click:function(e){return t.EditInvoice(a)}}},[e(m["a"],{staticClass:"mr-1",attrs:{small:""}},[t._v(" mdi-pen ")])],1)],1)]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1)],1)],1)],1)])],1),e("ModalAdd",[[e(s["a"],{staticClass:"py-8 px-14"},[e(n["c"],[e("p",[t._v("ແກ້ໄຂຂໍ້ມູນ "),e("strong",[t._v(t._s(t.formData.billing_display_id)+": "+t._s(`${t.formData.display_customer_name} ${t.formData.date}(${t.formData.total})`))])])]),e(n["b"],[e(l["a"],[e(h["a"],{ref:"form",attrs:{"lazy-validation":""}},t._l(t.formData.billing_details,(function(a){return e(p["a"],{key:a.id},[e(p["a"],[e(o["a"],{attrs:{cols:"12"}},[e("h3",{staticClass:"my-4"},[t._v(" "+t._s(a.content)+" ")])]),e(o["a"],[e(w["a"],{staticClass:"input-number",attrs:{label:"Quantity",outlined:"",dense:"",type:"number"},model:{value:a.quantity,callback:function(e){t.$set(a,"quantity",e)},expression:"detail.quantity"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.qty)+" ")])],1),e(o["a"],[e(w["a"],{staticClass:"input-number",attrs:{label:"Price",outlined:"",dense:"",type:"number"},model:{value:a.price,callback:function(e){t.$set(a,"price",e)},expression:"detail.price"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.price)+" ")])],1),e(o["a"],[e("span",[t._v("ລວມ: "+t._s(t.calculateTotal(a)))])])],1)],1)})),1)],1),e(n["a"],[e(_["a"]),e(i["a"],{staticClass:"elevation-0 btn mr-4 px-12",attrs:{color:"error",medium:""},on:{click:function(e){return t.closeAddModal()}}},[t._v(" ປິດ ")]),e(i["a"],{staticClass:"elevation-0 btn btn-primary px-12",attrs:{medium:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.updateInvoiceDetail()}}},[t._v(" ອັບເດດ ")])],1)],1)],1)]],2)],1)},k=[],C=(a("558b"),a("54da")),$=a("22aa"),B={name:"Customer",title(){return"Vientiane Waste Co-Dev|"+this.title},data(){return{title:"Collection",tab:"tab-1",selected:[],formData:{},lastRemoved:[],del_dialog:!1,sale_mode:"",paymentMethods:$["f"],selectedPaymentMethod:"",month:"",curent_month:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),start_menu:!1,invoices:[],loading:!1,customerId:"",selectedRows:[],plans:[],selectedRoutePlan:"",lastMonthBillPaid:localStorage.getItem("lastMonthBillPaid"),lastMonthBill:localStorage.getItem("lastMonthBill"),selectedCustomerType:"",customerTypes:[{text:"ຄົວເຮືອນ",value:"home"},{text:"ຫົວໜ່ວຍທຸລະກິດ",value:"company"}],offset:12,pagination:{},per_page:100,search:"",phone:"",oldVal:"",server_errors:{},summaryData:{},billId:"",billingable_types:[{id:1,name:"FutureInvoice"},{id:2,name:"NewInvoice"},{id:3,name:"NewCollectionEvent"},{id:4,name:"CustomBill"}],selectedBillingable_type:"",image:"",imageUrl:"",payment_method:"",paymentType:"",confirmType:"",paymentDialog:!1,rejects:[],reject_reason_id:"",description:"",paymentTypeRule:[t=>!!t||"Payment is required"],payment:{},confirm:{},headers:[{text:"ເລກບິນ",value:"billing_display_id"},{text:"ຫົວບິນ",value:"content",width:"150px"},{text:"ເດືອນ",value:"bill_month",width:"180px"},{text:"ສະຖານະ",value:"status_la",width:"150px"},{text:"ລູກຄ້າ",value:"display_customer_name",width:"150px"},{text:"ເບີໂທ",value:"display_customer_phone",sortable:!1},{text:"ຊ່ອງທາງຊຳລະ",value:"payment_method",width:"150px"},{text:"ສ່ວນຫຼຸດ",value:"discount",width:"150px"},{text:"ຄ່າບໍລິການ",value:"sub_total"},{text:"ລວມທັງໝົດ",value:"total",sortable:!1},{text:"ວັນທີສ້າງ",value:"created_at",width:"150px"},{text:"",value:"actions",sortable:!1,width:"150px"}]}},computed:{lastMonthCreated(){return this.$store.getters["auth/getLastMonthBill"]},lastMonthBillCreated(){return this.$store.getters["auth/getLastMonthBillPaid"]}},watch:{selectedCollectionStatus(){this.pagination.current_page="",this.fetchData()},lastMonthBill(t){this.$store.dispatch("auth/saveLastMonthBill",t)},lastMonthBillPaid(t){this.$store.dispatch("auth/saveLastMonthBillPaid",t)},lastMonthCreated(){this.fetchData()},lastMonthBillCreated(){this.fetchData()},selectedBillingable_type(){this.pagination.current_page="",this.fetchData()},selectedRoutePlan(){this.pagination.current_page="",this.fetchData()},selectedCustomerType(){this.pagination.current_page="",this.fetchData()},month(t){""!==t&&(this.pagination.current_page="",this.fetchData())},search(t){this.pagination.current_page="",""==t&&this.fetchData()},selectedStatus(){this.pagination.current_page="",this.fetchData()},selectedPackage(){this.server_errors.package_id=""},start_date(){this.server_errors.start_month=""}},created(){this.month=this.moment(this.curent_month).format("YYYY-MM"),this.fetchData(),this.fetchRoutePlan()},methods:{filterBillingType(t){return Object($["b"])(t.name)},async updateInvoiceDetail(){if(1==this.$refs.form.validate()){this.$store.commit("Loading_State",!0);const t=[];for(const e of this.formData.billing_details)t.push({qty:e.quantity,price:e.price,id:e.id});this.closeAddModal(),await this.$axios.put("super-billing-detail/"+this.formData.id,{items:t}).then(t=>{200==t.data.code&&(this.$store.commit("Loading_State",!1),this.fetchData(),this.formData={},this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message}))}).catch(t=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:t})})}},calculateTotal(t){return t.quantity*t.price},EditInvoice(t){this.formData=t,this.$store.commit("modalAdd_State",!0)},closeAddModal(){this.$store.commit("modalAdd_State",!1)},deleteBill(){const t=[];for(const a of this.selected)t.push(a.id);const e={billing_ids:t};this.$store.commit("Loading_State",!0),this.del_dialog=!1,this.$axios.post("super-billing",e).then(t=>{200==t.data.code&&setTimeout(()=>{this.data={},this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message}),this.lastRemoved=this.selected,this.selected=[],this.fetchData()},300)}).catch(t=>{if(this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"}),t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}this.$store.commit("Loading_State",!1)})},getBgColorFunc(t){return Object($["a"])(t)},fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("billing",{params:Object(C["a"])([{page:this.pagination.current_page},{per_page:this.per_page},{billingable_type:this.selectedBillingable_type},{route_plans:this.selectedRoutePlan},{bill_id:this.billId},{phone:this.phone},{customer_type:this.selectedCustomerType},{filter:this.search},{order_by:"newest"}])}).then(t=>{200==t.data.code&&(this.$store.commit("Loading_State",!1),this.lastRemoved.length?this.invoices=t.data.data.data.filter(t=>!this.lastRemoved.some(e=>e.id===t.id)):this.invoices=t.data.data.data,this.pagination=t.data.data.pagination)}).catch(t=>{if(this.$store.commit("Loading_State",!1),t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}})},fetchRoutePlan(){this.$axios.get("route-plan").then(t=>{200==t.data.code&&(this.plans=t.data.data)}).catch(()=>{})},ViewInvoice(t){const e=this.$router.resolve({name:"billing-detail",params:{id:t}});window.open(e.href,"_blank")},DownloadBill(t){window.open(t.download_pdf_link)},paymentPage(t){this.payment=t,this.$store.commit("modalAdd_State",!0)},Search(){this.fetchData()},statusColor(t){return"active"==t?"success":"inactive"==t?"error":""},collectStatus(t){return"requested"==t?"ຮ້ອງຂໍເກັບຂີ້ເຫື້ຍອ":"rejected"==t?"ປະຕິເສດເກັບຂີ້ເຫື້ຍອ":"approved"==t?"ອະນຸມັດເກັບຂີ້ເຫື້ຍອ":"collected"==t?"ເກັບຂີເຫື້ຍອສຳເລັດ":"collect_confirm"==t?"ລູກຄ້າຢືນຢັນການເກັບ":"collect_reject"==t?"ການເກັບຖືກປະຕິເສດ":""},paymentStatusText(t){return"pending"==t?"ລໍຖ້າເກັບເງິນ":"to_confirm_payment"==t?"ລໍຖ້າຢືນຢັນຊຳລະ":"rejected"==t?"ປະຕິເສດການຊຳລະ":"success"==t?"ຊຳລະສຳເລັດ":""},showUser(t){return"NewCollectionEvent"!==t.display_type?null!=t.user.customer?t.user.customer.name:t.user.name:null!=t.billingable?t.billingable.name:void 0}}},T=B,S=(a("d006"),a("4a4e")),D=Object(S["a"])(T,x,k,!1,null,"68e9f7c8",null);e["default"]=D.exports},"54da":function(t,e,a){"use strict";e["a"]=function(t){const e={};if(!t[0]){for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&(void 0!==t[e]&&null!==t[e]&&""!==t[e]||delete t[e]);return t}for(const a of t)1==Object.keys(a).length&&a[Object.keys(a)]&&(e[Object.keys(a)]=a[Object.keys(a)]);return e}},"565c":function(t,e,a){"use strict";a("558b");var i=a("9c0c"),s=a("68c4"),n=a("944a");e["a"]=Object(i["a"])(s["a"],Object(n["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))}):a.valid=e(t),a},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const a=this.watchers.find(t=>t._uid===e._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"736c":function(t,e,a){},d006:function(t,e,a){"use strict";a("736c")}}]);
//# sourceMappingURL=chunk-644cb550.76f26fb4.js.map