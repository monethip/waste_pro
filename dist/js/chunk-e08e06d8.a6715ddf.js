(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e08e06d8"],{"1c29":function(e,t,a){"use strict";a("b7a7")},"22aa":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return r})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return n})),a.d(t,"f",(function(){return o})),a.d(t,"e",(function(){return l})),a.d(t,"g",(function(){return c})),a.d(t,"h",(function(){return u}));const i=function(e){switch(e){case"created":case"ລໍຖ້າອະນຸມັດ":return"#73b8fd";case"approved":case"ອະນຸມັດແລ້ວ":return"#0080fc";case"canceled":case"ບິນຖືກຍົກເລີກ":return"#eb004c";case"rejected":case"ການຈ່າຍຖືກປະຕິເສດ":return"#740127";case"to_confirm_payment":case"ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ":return"#9c540d";case"success":case"ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ":return"#02a38a"}},r=function(e){switch(e){case"created":return"ລໍຖ້າອະນຸມັດ";case"approved":return"ອະນຸມັດແລ້ວ";case"canceled":return"ບິນຖືກຍົກເລີກ";case"rejected":return"ການຈ່າຍຖືກປະຕິເສດ";case"to_confirm_payment":return"ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ";case"success":return"ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ";case"cash":return"ຊຳລະເງິນສົດ";case"bcel":return"BCEL";default:return e}},s=function(e){switch(e){case"CustomBill":return"ບິນຍ້ອນຫຼັງ";case"NewCollectionEvent":return"ບີນບໍລີການຂີ້ເຫຍື້ອພິເສດ";case"FutureInvoice":return"ບິນບໍລິການລ່ວງໜ້າ";case"NewInvoice":return"ບິນບໍລິການປະຈຳເດືອນ";default:return e}},n=function(e){switch(e){case"requested":return"ຮ້ອງຂໍເກັບຂີ້ເຫື້ຍອ";case"rejected":return"ປະຕິເສດເກັບຂີ້ເຫື້ຍອ";case"approved":return"ອະນຸມັດເກັບຂີ້ເຫື້ຍອ";case"collected":return"ເກັບຂີເຫື້ຍອສຳເລັດ";case"collect_confirm":return"ລູກຄ້າຢືນຢັນການເກັບ";case"collect_reject":return"ການເກັບຖືກປະຕິເສດ";default:return e}},o=[{value:"cash",text:"ເງິນສົດ"},{value:"bcel",text:"ເງິນໂອນ"},{value:"bcel_online",text:"bcel bill payments"}],l=["created","approved","to_confirm_payment","success"],c=["rejected","canceled"],u=["kg","ຖົງ","container","ຄັ້ງ"]},"23a7":function(e,t,a){"use strict";a("13d5"),a("14d9"),a("5803");var i=a("2677"),r=a("cc20"),s=a("80d2"),n=a("d9bd"),o=a("d9f7");t["a"]=i["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:e=>"boolean"===typeof e||[1e3,1024].includes(e)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:e=>Object(s["H"])(e).every(e=>null!=e&&"object"===typeof e)}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const e=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,e);const t=this.internalArrayValue.reduce((e,{size:t=0})=>e+t,0);return this.$vuetify.lang.t(this.counterSizeString,e,Object(s["w"])(t,1024===this.base))},internalArrayValue(){return Object(s["H"])(this.internalValue)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map(e=>{const{name:t="",size:a=0}=e,i=this.truncateText(t);return this.showSize?`${i} (${Object(s["w"])(a,1024===this.base)})`:i}):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(e){!0===e&&Object(n["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value(e){const t=this.multiple?e:e?[e]:[];Object(s["k"])(t,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map((e,t)=>this.$createElement(r["a"],{props:{small:this.smallChips},on:{"click:close":()=>{const e=this.internalValue;e.splice(t,1),this.internalValue=e}}},[e])):[]},genControl(){const e=i["a"].options.methods.genControl.call(this);return this.hideInput&&(e.data.style=Object(o["d"])(e.data.style,{display:"none"})),e},genInput(){const e=i["a"].options.methods.genInput.call(this);return e.data.attrs.multiple=this.multiple,delete e.data.domProps.value,delete e.data.on.input,e.data.on.change=this.onInput,[this.genSelections(),e]},genPrependSlot(){if(!this.prependIcon)return null;const e=this.genIcon("prepend",()=>{this.$refs.input.click()});return this.genSlot("prepend","outer",[e])},genSelectionText(){const e=this.text.length;return e<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,e)]},genSelections(){const e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((t,a)=>{this.$scopedSlots.selection&&e.push(this.$scopedSlots.selection({text:this.text[a],file:t,index:a}))}):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot(){const e=i["a"].options.methods.genTextFieldSlot.call(this);return e.data.on={...e.data.on||{},click:e=>{e.target&&"LABEL"===e.target.nodeName||this.$refs.input.click()}},e},onInput(e){const t=[...e.target.files||[]];this.internalValue=this.multiple?t:t[0],this.initialValue=this.internalValue},onKeyDown(e){this.$emit("keydown",e)},truncateText(e){if(e.length<Number(this.truncateLength))return e;const t=Math.floor((Number(this.truncateLength)-1)/2);return`${e.slice(0,t)}…${e.slice(e.length-t)}`}}})},2677:function(e,t,a){"use strict";var i=a("8654");t["a"]=i["a"]},"4bd4":function(e,t,a){"use strict";a("14d9");var i=a("58df"),r=a("7e2b"),s=a("3206");t["a"]=Object(i["a"])(r["a"],Object(s["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",t=>{this.$set(this.errorBag,e._uid,t)},{immediate:!0}),a={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=e.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(e._uid)||(a.valid=t(e)))}):a.valid=t(e),a},validate(){return 0===this.inputs.filter(e=>!e.validate(!0)).length},reset(){this.inputs.forEach(e=>e.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(e=>e.resetValidation()),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find(t=>t._uid===e._uid);if(!t)return;const a=this.watchers.find(e=>e._uid===t._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(e=>e._uid!==t._uid),this.inputs=this.inputs.filter(e=>e._uid!==t._uid),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},"54da":function(e,t,a){"use strict";t["a"]=function(e){const t={};if(!e[0]){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(void 0!==e[t]&&null!==e[t]&&""!==e[t]||delete e[t]);return e}for(const a of e)1==Object.keys(a).length&&a[Object.keys(a)]&&(t[Object.keys(a)]=a[Object.keys(a)]);return t}},5803:function(e,t,a){},"6eceb":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));const i=e=>{""!==e.search?""!==e.oldVal?e.oldVal!==e.search&&(e.oldVal=e.search,e.pagination.current_page=1,e.fetchData()):(""!==e.search&&(e.pagination.current_page=1,e.fetchData()),e.oldVal=e.search):e.oldVal=""}},7660:function(e,t,a){"use strict";a.d(t,"g",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"h",(function(){return s})),a.d(t,"e",(function(){return n})),a.d(t,"f",(function(){return o})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return c})),a.d(t,"d",(function(){return u}));a("14d9");const i=function(e){switch(e){case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ເປັນຖ້ຽວ";case"chartered":return"ມອບເໝົາ";case"bag":return"ບໍລິມາດ";case"infect":return"ຂີ້ເຫຍື້ອຕິດເຊື້ອ";case"32km":return"ຫຼັກ32";default:return e}},r=[{en:"container",la:"ຄອນເທນເນີ"},{en:"fix_cost",la:"ເປັນຖ້ຽວ"},{en:"chartered",la:"ມອບເໝົາ"},{en:"bag",la:"ບໍລິມາດ"},{en:"infect",la:"ຂີ້ເຫຍື້ອຕິດເຊື້ອ"},{en:"32km",la:"ຫຼັກ32"}],s=function(e){switch(e){case"company":return"ຫົວໜ່ວຍທຸລະກິດ";case"home":return"ຄົວເຮືອນ";default:return e}},n=function(e){switch(e){case"bag":case"chartered":case"32km":case"infect":return"ຖົງ";case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ຖ້ຽວ";default:return e}},o=[{en:"requested",la:"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ",color:"#34495e"},{en:"rejected",la:"ປະຕິເສດລູກຄ້າແລ້ວ",color:"#eff3f5"},{en:"approved",la:"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ",color:"#54a0ff"},{en:"collected",la:"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ",color:"#c1c40f"},{en:"collect_confirm",la:"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ",color:"#30cb83"},{en:"collect_reject",la:"ລູກຄ້າປະຕິເສດການເກັບ",color:"#e74c3c"}],l=[{text:"ວັນທີຈ່າຍບິນ",value:"paided_at"},{text:"ວັນທີສ້າງບິນ",value:"created_at"},{text:"ວັນທີອະນຸມັດບິນ",value:"approved_at"},{text:"ວັນທີກວດສອບບິນສຳເລັດ",value:"confirmed_payment_at"}],c=(e=[])=>{const t=[];for(const a of e)t.push({id:a.id,name:`${a.name} (${Intl.NumberFormat().format(a.price)} ກີບ)`});return t},u=[{value:"",text:"ທັງໝົດ"},{value:"can",text:"ເກັບໄດ້"},{value:"not",text:"ເກັບບໍ່ໄດ້"}]},b7a7:function(e,t,a){},fc44:function(e,t,a){"use strict";a.r(t);var i=a("8336"),r=a("b0af"),s=a("99d9"),n=a("cc20"),o=a("62ad"),l=a("a523"),c=a("8fea"),u=a("23a7"),d=a("4bd4"),h=a("132d"),m=a("0fd9"),p=a("b974"),f=a("2fa4"),g=a("8654"),v=function(){var e=this,t=e._self._c;return t(l["a"],[t(m["a"],{staticClass:"mb-n6"},[t(o["a"],[t("p",[e._v("ຈັດການຂໍ້ມູນບິນລ່ວງໜ້າ")])]),t(o["a"],[t(p["a"],{attrs:{outlined:"",dense:"",items:e.paymentStatus,"item-text":e.filterStatusLao,"item-value":"name",label:"ສະຖານະບິນ",clearable:""},model:{value:e.selectedPaymentStatus,callback:function(t){e.selectedPaymentStatus=t},expression:"selectedPaymentStatus"}})],1),t(o["a"],[t(g["a"],{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-account",label:"ຊື່",type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchFunc()}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),t(o["a"],[t(g["a"],{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-account",label:"ໄອດີລູກຄ້າ",type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchFunc()}},model:{value:e.searchCustomerId,callback:function(t){e.searchCustomerId=t},expression:"searchCustomerId"}})],1),t(o["a"],[t(g["a"],{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-phone",label:"ເບີໂທ",type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchFunc()}},model:{value:e.searchPhone,callback:function(t){e.searchPhone=t},expression:"searchPhone"}})],1),t(o["a"],[t(g["a"],{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-note-text-outline",label:"ໄອດີບິນ",type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchFunc()}},model:{value:e.billId,callback:function(t){e.billId=t},expression:"billId"}})],1),t(o["a"],[t(i["a"],{staticClass:"btn-primary mr-4",on:{click:function(t){return e.openAddModal()}}},[t(h["a"],{staticClass:"mr-2"},[e._v(" mdi-upload ")]),e._v(" import ບິນ ")],1)],1),t(o["a"],{staticClass:"align-end"},[t(i["a"],{staticClass:"btn-primary elevation-0",on:{click:function(t){return e.choseCustomer()}}},[t(h["a"],{staticClass:"mr-2"},[e._v(" mdi-plus ")]),e._v(" ສ້າງບິນ ")],1)],1)],1),t(m["a"],[t(o["a"],[t(i["a"],{staticClass:"btn-primary mr-4",attrs:{color:"green"},on:{click:function(t){return e.downloadExample()}}},[t(h["a"],{staticClass:"mr-2"},[e._v(" mdi-download ")]),e._v(" ຕົວຢ່າງ import ")],1)],1)],1),t("div",[t(r["a"],[t(s["b"],[t(c["a"],{attrs:{headers:e.headers,items:e.invoices,search:e.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:e._u([{key:"item.user",fn:function({item:a}){return[a.billing.user.customer?t("div",[(a.billing.user.customer.customer_type="home")?t("div",[e._v(" "+e._s(a.billing.user.name)+" ")]):(a.billing.user.customer.customer_type="company")?t("div",[e._v(" "+e._s(a.billing.user.customer.company_name)+" ")]):e._e()]):t("div",{staticClass:"error--text"},[e._v(" ຍັງບໍ່ທັນສະໝັກບໍລິການ ")])]}},{key:"item.customerType",fn:function({item:a}){return[a.billing.user.customer?t("div",[e._v(" "+e._s(a.billing.user.customer.customer_type_la)+" ")]):e._e()]}},{key:"item.billing.date",fn:function({item:a}){return[t("div",{staticClass:"success--text"},[e._v(" "+e._s(a.billing.date)+" ")])]}},{key:"item.end_month",fn:function({item:a}){return[t("div",{staticClass:"error--text"},[e._v(" "+e._s(a.end_month)+" ")])]}},{key:"item.total",fn:function({item:t}){return[e._v(" "+e._s(Intl.NumberFormat().format(t.billing.total))+" ")]}},{key:"item.discount",fn:function({item:t}){return[e._v(" "+e._s(Intl.NumberFormat().format(t.billing.discount))+" ")]}},{key:"item.status",fn:function({item:a}){return[t(n["a"],{attrs:{color:e.getBgColorFunc(a.billing.status),dark:""}},[e._v(" "+e._s(e.getLaoStatusFunc(a.billing.status))+" ")])]}},{key:"item.actions",fn:function({item:a}){return[t(h["a"],{staticClass:"mr-2",attrs:{color:"success",small:""},on:{click:function(t){return e.ViewInvoice(a.billing.id)}}},[e._v(" mdi-eye ")]),e.canDelete(a.billing.status)?t(h["a"],{staticClass:"mr-2",attrs:{color:"red",small:""},on:{click:function(t){return e.deleteItem(a.id)}}},[e._v(" mdi-delete ")]):e._e()]}}])}),t("br"),[e.pagination.total_pages>1?t("Pagination",{attrs:{pagination:e.pagination,offset:e.offset},on:{paginate:function(t){return e.fetchData()}}}):e._e()]],2)],1)],1),t("ModalAdd",[[t(r["a"],{staticClass:"py-8 px-14"},[t(s["c"],[t("p",[e._v("Import ບິນຂີ້ເຫື້ຍອ")])]),t(s["b"],[e.imported?t(l["a"],[t(m["a"],[t(o["a"],[t(h["a"],{attrs:{color:"green"}},[e._v(" mdi-check-circle ")]),e._v(" ສຳເລັດແລ້ວ "+e._s(e.importSuccess)+" ລາບການ ")],1)],1),e.importErrors?t(m["a"],[t(o["a"],[t(h["a"],{attrs:{color:"red"}},[e._v(" mdi-alert-circle ")]),e._v(" ຜິດພາດ "+e._s(e.importErrors)+" ລາບການ ")],1)],1):e._e()],1):t(l["a"],[t(d["a"],{ref:"form",attrs:{"lazy-validation":""}},[t(m["a"],[t(o["a"],{attrs:{cols:"12"}},[t(u["a"],{attrs:{"show-size":"",label:"File ",accept:"xlsx,xls",outlined:"",dense:""},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.file)+" ")]),e._l(e.errors,(function(a,i){return t("p",{key:i,staticClass:"errors"},[e._v(" "+e._s(a)+" ")])}))],2)],1)],1)],1),t(s["a"],[t(f["a"]),t(i["a"],{staticClass:"elevation-0 btn mr-4 px-12",attrs:{color:"error",medium:""},on:{click:function(t){return e.closeAddModal()}}},[e._v(" ປິດ ")]),e.imported?e._e():t(i["a"],{staticClass:"elevation-0 btn btn-primary px-12",attrs:{medium:"",loading:e.loading,disabled:e.loading},on:{click:e.uploadFile}},[e._v(" Import ")])],1)],1)],1)]],2),t("ModalDelete",[[t(s["a"],[t(f["a"]),t(i["a"],{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v(" Cancel ")]),t(i["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.deleteInvoice}},[e._v(" OK ")]),t(f["a"])],1)]],2)],1)},_=[],b=(a("14d9"),a("6eceb")),y=a("54da"),x=a("22aa"),S=a("7660"),k={name:"Invoice",title(){return"Vientiane Waste Co-Dev|Invoice"},data(){return{billId:null,searchPhone:"",searchCustomerId:"",billingId:"",tab:null,file:null,invoices:[],loading:!1,importSuccess:0,importErrors:null,imported:!1,calendarId:"",offset:12,pagination:{},per_page:100,search:"",oldVal:"",date:(new Date).toISOString().substr(0,7),start_menu:!1,server_errors:{},selectedPaymentStatus:"",paymentStatus:[{id:1,name:"created"},{id:2,name:"approved"},{id:3,name:"to_confirm_payment"},{id:4,name:"rejected"},{id:5,name:"success"}],errors:[],headers:[{text:"ເລກບິນ",value:"billing.billing_display_id",width:"150"},{text:"ຫົວບິນ",value:"billing.content",width:"150"},{text:"ເດືອນ",value:"billing.bill_month",width:"120"},{text:"ລວມທັງໝົດ",value:"total",align:"center"},{text:"ໄອດີລູກຄ້າ",value:"billing.user.customer.customer_id",width:"130"},{text:"ລູກຄ້າ",value:"billing.user.customer.full_name",width:"130"},{text:"ເບີໂທ",value:"billing.user.phone",width:"130"},{text:"ປະເພດລູກຄ້າ",value:"customerType",width:"130"},{text:"ວັນທີສ້າງ",value:"created_at",width:"120"},{text:"ສະຖານະ",value:"status"},{text:"",value:"actions",sortable:!1}]}},watch:{file(){this.errors=[]},selectedPaymentStatus(){this.pagination.current_page="",this.fetchData()}},created(){this.fetchData()},methods:{searchFunc(){this.pagination.current_page="",this.fetchData()},openAddModal(){this.$store.commit("modalAdd_State",!0)},closeAddModal(){this.file="",this.importSuccess=0,this.imported=!1,this.importErrors=null,this.$store.commit("modalAdd_State",!1)},uploadFile(){const e=new FormData;e.append("file",this.file),1==this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.post("import-future-invoice",e).then(e=>{this.imported=!0,this.$store.commit("Loading_State",!1),200==e.data.code&&(e.data.data.errors||e.data.data.exception?(this.importErrors=e.data.data.errors||e.data.data.exception,this.$store.commit("Toast_State",{value:!0,color:"error",msg:this.importErrors})):e.data.data.data?(this.fetchData(),this.$refs.form.reset(),this.importSuccess=e.data.data.data.length,this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})):this.$store.commit("Toast_State",{value:!0,color:"error",msg:"ຂໍ້ມູນບໍ່ສາມາດ import ໄດ້ເລີຍ ກະລຸນາກວດໄຟລຄືນໃໝ່"}))}).catch(e=>{if(this.imported=!0,this.$store.commit("Loading_State",!1),e.response){if(this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),e.response&&422==e.response.status){const t=e.response.data.errors;this.errors=t;for(const[e,a]of Object.entries(t))this.server_errors[e]=a[0]}}else this.$store.commit("Toast_State",{value:!0,color:"error",msg:"ຂໍ້ຜິດພາດທາງລະບົບ ກະລຸນາຕິດຕໍ່ນັກພັດທະນາ "+e})}))},async downloadExample(){const e=await this.$axios.get("import-future-invoice");window.open(e.data.data.download_link)},canDelete(e){const t=["created","approved"];return-1!=t.indexOf(e)},closeDelete(){this.$store.commit("modalDelete_State",!1)},deleteItem(e){this.billingId=e,this.$store.commit("modalDelete_State",!0)},deleteInvoice(){this.$store.commit("Loading_State",!0),this.$axios.delete("future-invoice/"+this.billingId).then(e=>{200==e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.$store.commit("modalDelete_State",!1),this.fetchData(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})},300)}).catch(e=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),this.$store.commit("modalDelete_State",!1)})},getLaoStatusFunc(e){return Object(x["d"])(e)},getBgColorFunc(e){return Object(x["a"])(e)},filterStatusLao(e){return Object(x["d"])(e.name)},getLaoCustomerType(e){return Object(S["h"])(e)},fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("future-invoice",{params:Object(y["a"])([{page:this.pagination.current_page},{per_page:this.per_page},{filter:this.search},{bill_id:this.billId},{phone:this.searchPhone},{customer_id:this.searchCustomerId},{billing_status:this.selectedPaymentStatus},{order_by:"newest"}])}).then(e=>{200==e.data.code&&(this.$store.commit("Loading_State",!1),this.invoices=e.data.data.data,this.pagination=e.data.data.pagination)}).catch(e=>{if(this.$store.commit("Loading_State",!1),e.response&&422==e.response.status){const t=e.response.data.errors;for(const[e,a]of Object.entries(t))this.server_errors[e]=a[0]}})},Search(){Object(b["a"])(this)},choseCustomer(){this.$router.push({name:"chose-customer",query:{redirect:"create-future-customer"}})},ViewInvoice(e){const t=this.$router.resolve({name:"billing-detail",params:{id:e}});window.open(t.href,"_blank")}}},w=k,$=(a("1c29"),a("2877")),C=Object($["a"])(w,v,_,!1,null,null,null);t["default"]=C.exports}}]);
//# sourceMappingURL=chunk-e08e06d8.a6715ddf.js.map