(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd5955a8"],{1388:function(t,e,s){"use strict";s("d468")},"22aa":function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"d",(function(){return a})),s.d(e,"b",(function(){return r})),s.d(e,"c",(function(){return n})),s.d(e,"f",(function(){return o})),s.d(e,"e",(function(){return l})),s.d(e,"g",(function(){return c})),s.d(e,"h",(function(){return h}));const i=function(t){switch(t){case"created":case"ລໍຖ້າອະນຸມັດ":return"#73b8fd";case"approved":case"ອະນຸມັດແລ້ວ":return"#0080fc";case"canceled":case"ບິນຖືກຍົກເລີກ":return"#eb004c";case"rejected":case"ການຈ່າຍຖືກປະຕິເສດ":return"#740127";case"to_confirm_payment":case"ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ":return"#9c540d";case"success":case"ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ":return"#02a38a"}},a=function(t){switch(t){case"created":return"ລໍຖ້າອະນຸມັດ";case"approved":return"ອະນຸມັດແລ້ວ";case"canceled":return"ບິນຖືກຍົກເລີກ";case"rejected":return"ການຈ່າຍຖືກປະຕິເສດ";case"to_confirm_payment":return"ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ";case"success":return"ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ";case"cash":return"ຊຳລະເງິນສົດ";case"bcel":return"BCEL";default:return t}},r=function(t){switch(t){case"CustomBill":return"ບິນຍ້ອນຫຼັງ";case"NewCollectionEvent":return"ບີນບໍລີການຂີ້ເຫຍື້ອພິເສດ";case"FutureInvoice":return"ບິນບໍລິການລ່ວງໜ້າ";case"NewInvoice":return"ບິນບໍລິການປະຈຳເດືອນ";default:return t}},n=function(t){switch(t){case"requested":return"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ";case"rejected":return"ປະຕິເສດລູກຄ້າແລ້ວ";case"approved":return"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ";case"collected":return"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ";case"collect_confirm":return"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ";case"collect_reject":return"ລູກຄ້າປະຕິເສດການເກັບ";default:return t}},o=[{value:"cash",text:"ເງິນສົດ"},{value:"bcel",text:"ເງິນໂອນ"},{value:"bcel_online",text:"bcel bill payments"}],l=["created","approved","to_confirm_payment","success"],c=["rejected","canceled"],h=["kg","ຖົງ","container","ຄັ້ງ"]},"292a":function(t,e,s){"use strict";s.r(e);var i=s("c2f4"),a=s("07b0"),r=s("db5a"),n=s("0f35"),o=s("28e8"),l=s("9836"),c=s("1da9"),h=s("1789"),d=s("0cb6"),u=s("ab58"),p=s("6733"),m=s("565c"),f=s("1d7d"),v=s("d62f"),g=s("26bf"),_=s("cfe2"),y=s("9b44"),b=function(){var t=this,e=t._self._c;return e(h["a"],[e(v["a"],{staticClass:"mb-n6"},[e(c["a"],{attrs:{cols:""}},[e(g["a"],{attrs:{outlined:"",dense:"",items:t.plans,"item-text":"name","item-value":"id",label:"ເລືອກແຜນ",clearable:""},model:{value:t.selectedRoutePlan,callback:function(e){t.selectedRoutePlan=e},expression:"selectedRoutePlan"}})],1),e(c["a"],{attrs:{cols:""}},[e(g["a"],{attrs:{outlined:"",dense:"",items:t.billingable_types,"item-text":t.filterBillingType,"item-value":"name",label:"ປະເພດບິນ",clearable:""},model:{value:t.selectedBillingable_type,callback:function(e){t.selectedBillingable_type=e},expression:"selectedBillingable_type"}})],1),e(c["a"],[e(y["a"],{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຊື່ລູກຄ້າ",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e(c["a"],[e(y["a"],{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ເລກບິນ",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.billId,callback:function(e){t.billId=e},expression:"billId"}})],1),e(c["a"],[e(y["a"],{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ເບີໂທ",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)],1),e(r["a"],[e(n["c"],[t._v(" ຂໍ້ມູນບີນ ("+t._s(t.pagination.total)+") "),e(p["a"],{staticClass:"mx-4",attrs:{vertical:""}}),e(_["a"])],1),e(n["b"],[e(d["a"],{attrs:{headers:t.headers,items:t.invoices,search:t.search,"disable-pagination":!0,"hide-default-footer":"","fixed-header":""},scopedSlots:t._u([{key:"item.user",fn:function({item:s}){return[e("div",[t._v(t._s(t.showUser(s)))])]}},{key:"item.sub_total",fn:function({item:s}){return[e("td",[t._v(t._s(Intl.NumberFormat().format(s.sub_total)))])]}},{key:"item.total",fn:function({item:s}){return[e("td",[t._v(t._s(Intl.NumberFormat().format(s.total)))])]}},{key:"item.status",fn:function({item:s}){return[e("div",[t._v(t._s(t.collectStatus(s.status)))])]}},{key:"item.status_la",fn:function({item:s}){return[e(o["a"],{attrs:{color:t.getBgColorFunc(s.status),dark:""}},[t._v(" "+t._s(s.status_la)+" ")])]}},{key:"item.actions",fn:function({item:s}){return[e(a["a"],{staticClass:"btn elevation-0",attrs:{color:"info",small:""},on:{click:function(e){return t.ViewInvoice(s.id)}}},[e(f["a"],{staticClass:"mr-1",attrs:{small:""}},[t._v(" mdi-eye ")])],1)]}}])}),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1),e("ModalAdd",[[e(r["a"],{staticClass:"py-8 px-14"},[e(n["c"],[e("p",[t._v("ຊຳລະຄ່າຂີ້ເຫື້ຍອ "+t._s(t.payment.content))])]),e(n["b"],[e(h["a"],[e(m["a"],{ref:"form",attrs:{"lazy-validation":""}},[e("h3",{staticClass:"my-4"},[t._v(" ເລືອກປະເພດການຊຳລະ ")]),e(v["a"],[e(c["a"],{attrs:{cols:"12"}},[e(l["a"],{attrs:{column:"",rules:t.paymentTypeRule,required:""},model:{value:t.paymentType,callback:function(e){t.paymentType=e},expression:"paymentType"}},[e(o["a"],{staticClass:"mr-8",attrs:{large:"",color:"info",label:"",filter:"",outlined:""}},[t._v(" ເງິນສົດ "),e(f["a"],{staticClass:"ml-1",attrs:{left:""}},[t._v(" mdi-currency-usd ")])],1),e(o["a"],{attrs:{large:"",color:"error",label:"",filter:"",outlined:""}},[t._v(" BCEL "),e(f["a"],{staticClass:"ml-1",attrs:{left:""}},[t._v(" mdi-credit-card ")])],1)],1),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.payment_method)+" ")])],1)],1),1==t.paymentType?e("div",[e("h3",{staticClass:"my-4"},[t._v(" ຮູບສຳເລັດການໂອນ ")]),e(v["a"],[e(c["a"],[e("label",{staticClass:"file-label"},[e("input",{ref:"image",staticClass:"file-input input-file-image",attrs:{type:"file",name:"image",accept:"image/*"},on:{change:t.onFileChange}}),e("span",{staticClass:"file-cta"},[e("span",{staticClass:"file-icon"},[e(f["a"],{staticClass:"fas fa-cloud-upload",staticStyle:{"font-size":"60px !important",color:"#719aff",cursor:"pointer"}},[t._v("mdi-file-image")])],1)])])])],1),e(v["a"],[t.imageUrl?e(c["a"],[e(i["a"],{staticClass:"avatar rounded",attrs:{size:"194px"}},[e("img",{attrs:{src:t.imageUrl,alt:""}})])],1):t._e(),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.image)+" ")])],1)],1):t._e()],1)],1),e(n["a"],[e(_["a"]),e(a["a"],{staticClass:"elevation-0 btn mr-4 px-12",attrs:{color:"error",medium:""},on:{click:function(e){return t.closeAddModal()}}},[t._v(" ປິດ ")]),e(a["a"],{staticClass:"elevation-0 btn btn-primary px-12",attrs:{medium:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.Payment()}}},[t._v(" ຊຳລະ ")])],1)],1)],1)]],2),e(u["a"],{attrs:{"max-width":"620px",persistent:""},model:{value:t.paymentDialog,callback:function(e){t.paymentDialog=e},expression:"paymentDialog"}},[[e(r["a"],[e(n["c"],[e("p",[e(f["a"],{staticClass:"primary-color",attrs:{large:"",color:"success"}},[t._v(" mdi-checkbox-marked-circle-outline ")]),t._v(" ຢືນຢັນຊຳລະຄ່າຂີ້ເຫຍື້ອ "),e("span",{staticClass:"primary-color"},[t._v(t._s(t.confirm.name)+" "+t._s(t.confirm.content))])],1)]),e(n["b"],[e(h["a"],[e(m["a"],{ref:"form",attrs:{"lazy-validation":""}},[1==t.confirmType?e("div",[e(v["a"],[e(c["a"],{attrs:{cols:"12"}},[e(g["a"],{attrs:{label:"ເຫດຜົນ",outlined:"",dense:"",items:t.rejects,"item-text":"name","item-value":"id"},model:{value:t.reject_reason_id,callback:function(e){t.reject_reason_id=e},expression:"reject_reason_id"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.reject_reason_id)+" ")])],1)],1),e(v["a"],[e(c["a"],{attrs:{cols:"12"}},[e(y["a"],{attrs:{label:"Description",outlined:"",dense:"",type:"text"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.description)+" ")])],1)],1)],1):t._e()]),e(n["a"],{staticClass:"mt-4"},[e(_["a"]),e(a["a"],{staticClass:"btn mr-4 px-12 elevation-0",attrs:{color:"error",medium:""},on:{click:function(e){t.paymentDialog=!1}}},[t._v(" ປິດ ")]),e(a["a"],{staticClass:"white--text px-12 btn-primary elevation-0",attrs:{color:"info",medium:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.confirmPayment()}}},[t._v(" ຢືນຢັນ ")])],1)],1)],1)],1)]],2)],1)},w=[],x=(s("668c"),s("ae9b"),s("3ec3"),s("558b"),s("54da")),$=s("22aa"),C={name:"Customer",title(){return"Vientiane Waste Co-Dev|"+this.title},data(){return{title:"Collection",sale_mode:"",paymentMethods:$["f"],selectedPaymentMethod:"",month:"",curent_month:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),start_menu:!1,invoices:[],loading:!1,customerId:"",selectedRows:[],plans:[],selectedRoutePlan:"",lastMonthBillPaid:localStorage.getItem("lastMonthBillPaid"),lastMonthBill:localStorage.getItem("lastMonthBill"),selectedCustomerType:"",customerTypes:[{text:"ຄົວເຮືອນ",value:"home"},{text:"ຫົວໜ່ວຍທຸລະກິດ",value:"company"}],offset:12,pagination:{},per_page:100,search:"",phone:"",oldVal:"",server_errors:{},summaryData:{},billId:"",billingable_types:[{id:1,name:"FutureInvoice"},{id:2,name:"NewInvoice"},{id:3,name:"NewCollectionEvent"},{id:4,name:"CustomBill"}],selectedBillingable_type:"",image:"",imageUrl:"",payment_method:"",paymentType:"",confirmType:"",paymentDialog:!1,rejects:[],reject_reason_id:"",description:"",paymentTypeRule:[t=>!!t||"Payment is required"],payment:{},confirm:{},headers:[{text:"ເລກບິນ",value:"billing_display_id"},{text:"ຫົວບິນ",value:"content",width:"150px"},{text:"ເດືອນ",value:"bill_month",width:"180px"},{text:"ສະຖານະ",value:"status_la",width:"150px"},{text:"ລູກຄ້າ",value:"display_customer_name",width:"150px"},{text:"ເບີໂທ",value:"display_customer_phone",sortable:!1},{text:"ຊ່ອງທາງຊຳລະ",value:"payment_method",width:"150px"},{text:"ສ່ວນຫຼຸດ",value:"discount",width:"150px"},{text:"ຄ່າບໍລິການ",value:"sub_total"},{text:"ລວມທັງໝົດ",value:"total",sortable:!1},{text:"ວັນທີສ້າງ",value:"created_at",width:"150px"},{text:"",value:"actions",sortable:!1,width:"150px"}]}},computed:{lastMonthCreated(){return this.$store.getters["auth/getLastMonthBill"]},lastMonthBillCreated(){return this.$store.getters["auth/getLastMonthBillPaid"]}},watch:{selectedCollectionStatus(){this.pagination.current_page="",this.fetchData()},lastMonthBill(t){this.$store.dispatch("auth/saveLastMonthBill",t)},lastMonthBillPaid(t){this.$store.dispatch("auth/saveLastMonthBillPaid",t)},lastMonthCreated(){this.fetchData()},lastMonthBillCreated(){this.fetchData()},selectedBillingable_type(){this.pagination.current_page="",this.fetchData()},selectedRoutePlan(){this.pagination.current_page="",this.fetchData()},selectedCustomerType(){this.pagination.current_page="",this.fetchData()},month(t){""!==t&&(this.pagination.current_page="",this.fetchData())},search(t){this.pagination.current_page="",""==t&&this.fetchData()},selectedStatus(){this.pagination.current_page="",this.fetchData()},selectedPackage(){this.server_errors.package_id=""},start_date(){this.server_errors.start_month=""},paymentType(){0==this.paymentType?(this.payment_method="cash",this.image="",this.imageUrl=""):1==this.paymentType&&(this.payment_method="bcel"),this.server_errors.payment_method=""},image(){this.server_errors.image=""}},created(){this.month=this.moment(this.curent_month).format("YYYY-MM"),this.fetchData(),this.fetchRoutePlan()},methods:{filterBillingType(t){return Object($["b"])(t.name)},getBgColorFunc(t){return Object($["a"])(t)},onFileChange(t){const e=t.target,s=t.target.files[0];this.image=e.files[0],this.imageUrl=URL.createObjectURL(s)},fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("billing",{params:Object(x["a"])([{page:this.pagination.current_page},{per_page:this.per_page},{billingable_type:this.selectedBillingable_type},{route_plans:this.selectedRoutePlan},{bill_id:this.billId},{phone:this.phone},{customer_type:this.selectedCustomerType},{filter:this.search},{order_by:"newest"}])}).then(t=>{200==t.data.code&&(this.$store.commit("Loading_State",!1),this.invoices=t.data.data.data,this.pagination=t.data.data.pagination)}).catch(t=>{if(this.$store.commit("Loading_State",!1),t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,s]of Object.entries(e))this.server_errors[t]=s[0]}})},fetchRoutePlan(){this.$axios.get("route-plan").then(t=>{200==t.data.code&&(this.plans=t.data.data)}).catch(()=>{})},fetchReject(){this.$axios.get("reject-reason").then(t=>{200==t.data.code&&(this.$store.commit("Loading_State",!1),this.rejects=t.data.data)}).catch(()=>{})},closeAddModal(){this.paymentType="",this.$store.commit("modalAdd_State",!1)},createPage(){this.$router.push({name:"CreateCollectionEventInvoice"})},editPage(t){this.$router.push({name:"EditCollectionEventInvoice",params:{id:t}})},ViewInvoice(t){const e=this.$router.resolve({name:"billing-detail",params:{id:t}});window.open(e.href,"_blank")},DownloadBill(t){window.open(t.download_pdf_link)},paymentPage(t){this.payment=t,this.$store.commit("modalAdd_State",!0)},CancelBill(t){this.payment=t,this.$store.commit("modalAdd_State",!0)},Payment(){if(""!==this.paymentType){const t=new FormData;t.append("payment_method",this.payment_method),t.append("image_payments[]",this.image),t.append("_method","PUT"),1==this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.post("pay-billing/"+this.payment.id,t).then(t=>{200==t.data.code&&(this.$store.commit("Loading_State",!1),this.paymentConfirmModal(this.payment),this.closeAddModal(),this.fetchData(),this.$refs.form.reset(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message}))}).catch(t=>{if(this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:t}),t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,s]of Object.entries(e))this.server_errors[t]=s[0]}}))}else this.$store.commit("Toast_State",{value:!0,color:"error",msg:"ກາລຸນາເລືອກປະເພດການຊຳລະກ່ອນ"})},async approveAny(){if(this.selectedRows.length){const t=this.selectedRows.map(t=>t.id);this.$store.commit("Loading_State",!0),await this.$axios.post("approve-billings",{billing_ids:t}).then(t=>{200==t.data.code&&(this.$store.commit("Loading_State",!1),this.fetchData(),this.selectedRows=[],this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message}))}).catch(t=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:t})})}else this.$store.commit("Toast_State",{value:!0,color:"error",msg:"ກາລຸນາເລືອກບິນກ່ອນ"})},async confirmPayment(){if("0"==this.confirmType)this.$store.commit("Loading_State",!0),await this.$axios.put("confirm-billing/"+this.confirm.id).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.fetchData(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message}),this.closeConfirmModal()},300)}).catch(()=>{this.$store.commit("Loading_State",!1),this.closeConfirmModal()});else if("1"==this.confirmType){const t=new FormData;t.append("reject_reason_id",this.reject_reason_id),t.append("description",this.description),t.append("_method","PUT"),this.$store.commit("Loading_State",!0),this.$axios.post("confirm-billing/"+this.confirm.id,t).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.fetchData(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message}),this.closeConfirmModal()},300)}).catch(t=>{if(this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:t}),t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,s]of Object.entries(e))this.server_errors[t]=s[0]}})}else this.confirmType,this.$store.commit("Toast_State",{value:!0,color:"error",msg:"ກາລຸນາເລືອກຂໍ້ມູນກ່ອນ"})},paymentConfirmModal(t){this.fetchReject(),this.confirm=t,this.paymentDialog=!0},closeConfirmModal(){this.paymentDialog=!1,this.confirmType=""},Search(){this.fetchData()},statusColor(t){return"active"==t?"success":"inactive"==t?"error":""},collectStatus(t){return"requested"==t?"ຮ້ອງຂໍເກັບຂີ້ເຫື້ຍອ":"rejected"==t?"ປະຕິເສດເກັບຂີ້ເຫື້ຍອ":"approved"==t?"ອະນຸມັດເກັບຂີ້ເຫື້ຍອ":"collected"==t?"ເກັບຂີເຫື້ຍອສຳເລັດ":"collect_confirm"==t?"ລູກຄ້າຢືນຢັນການເກັບ":"collect_reject"==t?"ການເກັບຖືກປະຕິເສດ":""},paymentStatusText(t){return"pending"==t?"ລໍຖ້າເກັບເງິນ":"to_confirm_payment"==t?"ລໍຖ້າຢືນຢັນຊຳລະ":"rejected"==t?"ປະຕິເສດການຊຳລະ":"success"==t?"ຊຳລະສຳເລັດ":""},showUser(t){return"NewCollectionEvent"!==t.display_type?null!=t.user.customer?t.user.customer.name:t.user.name:null!=t.billingable?t.billingable.name:void 0}}},k=C,O=(s("1388"),s("4a4e")),S=Object(O["a"])(k,b,w,!1,null,"140e5878",null);e["default"]=S.exports},"3ec3":function(t,e,s){"use strict";var i=s("a9c6"),a=s("7d23"),r=s("75ba"),n=URLSearchParams.prototype,o=a(n.forEach);i&&!("size"in n)&&r(n,"size",{get:function(){var t=0;return o(this,(function(){t++})),t},configurable:!0,enumerable:!0})},"54da":function(t,e,s){"use strict";e["a"]=function(t){const e={};if(!t[0]){for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&(void 0!==t[e]&&null!==t[e]&&""!==t[e]||delete t[e]);return t}for(const s of t)1==Object.keys(s).length&&s[Object.keys(s)]&&(e[Object.keys(s)]=s[Object.keys(s)]);return e}},"565c":function(t,e,s){"use strict";s("558b");var i=s("9c0c"),a=s("68c4"),r=s("944a");e["a"]=Object(i["a"])(a["a"],Object(r["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))}):s.valid=e(t),s},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const s=this.watchers.find(t=>t._uid===e._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"605c":function(t,e){var s=TypeError;t.exports=function(t,e){if(t<e)throw s("Not enough arguments");return t}},"668c":function(t,e,s){"use strict";var i=s("1335"),a=s("7d23"),r=s("a152"),n=s("605c"),o=URLSearchParams,l=o.prototype,c=a(l.append),h=a(l["delete"]),d=a(l.forEach),u=a([].push),p=new o("a=1&a=2");p["delete"]("a",1),p+""!=="a=2"&&i(l,"delete",(function(t){var e=arguments.length,s=e<2?void 0:arguments[1];if(e&&void 0===s)return h(this,t);var i=[];d(this,(function(t,e){u(i,{key:e,value:t})})),n(e,1);var a,o=r(t),l=r(s),p=0,m=0,f=!1,v=i.length;while(p<v)a=i[p++],f||a.key===o?(f=!0,h(this,a.key)):m++;while(m<v)a=i[m++],a.key===o&&a.value===l||c(this,a.key,a.value)}),{enumerable:!0,unsafe:!0})},"6d87":function(t,e,s){"use strict";s.d(e,"a",(function(){return m}));s("794a");var i=s("2dec"),a=s("078d"),r=s("b5e5"),n=s("f506"),o=s("3870"),l=s("385b"),c=s("9c0c"),h=s("dd08");function d(t){const e=.501,s=Math.abs(t);return Math.sign(t)*(s/((1/e-2)*(1-s)+1))}function u(t,e,s,i){const a=t.clientWidth,r=s?e.content-t.offsetLeft-a:t.offsetLeft;s&&(i=-i);const n=e.wrapper+i,o=a+r,l=.4*a;return r<=i?i=Math.max(r-l,0):n<=o&&(i=Math.min(i-(n-o-l),e.content-e.wrapper)),s?-i:i}function p(t,e,s){const{offsetLeft:i,clientWidth:a}=t;if(s){const t=e.content-i-a/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,t))}{const t=i+a/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,t))}}const m=Object(c["a"])(r["a"],n["a"]).extend({name:"base-slide-group",directives:{Resize:o["a"],Touch:l["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:t=>"boolean"===typeof t||["always","never","desktop","mobile"].includes(t)}},data:()=>({isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{canTouch(){return"undefined"!==typeof window},__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return{...r["a"].options.computed.classes.call(this),"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing}},hasAffixes(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;case"never":return!1;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext(){if(!this.hasAffixes)return!1;const{content:t,wrapper:e}=this.widths;return t>Math.abs(this.scrollOffset)+e},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(t){this.$vuetify.rtl&&(t=-t);let e=t<=0?d(-t):t>this.widths.content-this.widths.wrapper?-(this.widths.content-this.widths.wrapper)+d(this.widths.content-this.widths.wrapper-t):-t;this.$vuetify.rtl&&(e=-e),this.$refs.content.style.transform=`translateX(${e}px)`}},mounted(){if("undefined"!==typeof ResizeObserver){const t=new ResizeObserver(()=>{this.onResize()});t.observe(this.$el),t.observe(this.$refs.content),this.$on("hook:destroyed",()=>{t.disconnect()})}else{let t=0;this.$on("hook:beforeUpdate",()=>{var e;t=((null===(e=this.$refs.content)||void 0===e?void 0:e.children)||[]).length}),this.$on("hook:updated",()=>{var e;t!==((null===(e=this.$refs.content)||void 0===e?void 0:e.children)||[]).length&&this.setWidths()})}},methods:{onScroll(){this.$refs.wrapper.scrollLeft=0},onFocusin(t){if(this.isOverflowing)for(const e of Object(h["g"])(t))for(const t of this.items)if(t.$el===e)return void(this.scrollOffset=u(t.$el,this.widths,this.$vuetify.rtl,this.scrollOffset))},genNext(){const t=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[t])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content",on:{focusin:this.onFocusin}},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(t){let e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");const s=`${t[0].toUpperCase()}${t.slice(1)}`,a=this["has"+s];return this.showArrows||a?this.$createElement(i["a"],{props:{disabled:!a}},this[e+"Icon"]):null},genPrev(){const t=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[t])},genTransition(t){return this.$createElement(a["d"],[this.genIcon(t)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:t=>this.overflowCheck(t,this.onTouchStart),move:t=>this.overflowCheck(t,this.onTouchMove),end:t=>this.overflowCheck(t,this.onTouchEnd)}}],ref:"wrapper",on:{scroll:this.onScroll}},[this.genContent()])},calculateNewOffset(t,e,s,i){const a=s?-1:1,r=a*i+("prev"===t?-1:1)*e.wrapper;return a*Math.max(Math.min(r,e.content-e.wrapper),0)},onAffixClick(t){this.$emit("click:"+t),this.scrollTo(t)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(t){const{content:e}=this.$refs;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove(t){if(this.canTouch){if(!this.isSwiping){const e=t.touchmoveX-t.touchstartX,s=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(s),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd(){if(!this.canTouch)return;const{content:t,wrapper:e}=this.$refs,s=t.clientWidth-e.clientWidth;t.style.setProperty("transition",null),t.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")},overflowCheck(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView(){if(!this.selectedItem&&this.items.length){const t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=p(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=u(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},scrollTo(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame(()=>{if(this._isDestroyed)return;const{content:t,wrapper:e}=this.$refs;this.widths={content:t?t.clientWidth:0,wrapper:e?e.clientWidth:0},this.isOverflowing=this.widths.wrapper+1<this.widths.content,this.scrollIntoView()})}},render(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});m.extend({name:"v-slide-group",provide(){return{slideGroup:this}}})},"75ba":function(t,e,s){var i=s("cd4c"),a=s("9afd");t.exports=function(t,e,s){return s.get&&i(s.get,e,{getter:!0}),s.set&&i(s.set,e,{setter:!0}),a.f(t,e,s)}},"794a":function(t,e,s){},9836:function(t,e,s){"use strict";s("f593");var i=s("6d87"),a=s("d799"),r=s("9c0c");e["a"]=Object(r["a"])(i["a"],a["a"]).extend({name:"v-chip-group",provide(){return{chipGroup:this}},props:{column:Boolean},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-chip-group":!0,"v-chip-group--column":this.column}}},watch:{column(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData(){return this.setTextColor(this.color,{...i["a"].options.methods.genData.call(this)})}}})},ae9b:function(t,e,s){"use strict";var i=s("1335"),a=s("7d23"),r=s("a152"),n=s("605c"),o=URLSearchParams,l=o.prototype,c=a(l.getAll),h=a(l.has),d=new o("a=1");d.has("a",2)&&i(l,"has",(function(t){var e=arguments.length,s=e<2?void 0:arguments[1];if(e&&void 0===s)return h(this,t);var i=c(this,t);n(e,1);var a=r(s),o=0;while(o<i.length)if(i[o++]===a)return!0;return!1}),{enumerable:!0,unsafe:!0})},d468:function(t,e,s){},f593:function(t,e,s){}}]);
//# sourceMappingURL=chunk-fd5955a8.f7079e6e.js.map