(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4ca0026"],{"0798":function(t,e,s){"use strict";s("0c18");var a=s("10d2"),i=s("afdd"),n=s("9d26"),r=s("f2e7"),l=s("7560"),o=s("f40d"),c=s("58df"),d=s("d9bd");e["a"]=Object(c["a"])(a["a"],r["a"],o["a"]).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{["v-alert__border--"+this.border]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(i["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(n["a"],{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(n["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...a["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t["v-alert--border-"+this.border]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$"+this.type)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(d["a"])("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,s){},"1e80":function(t,e,s){"use strict";s("f500")},"22aa":function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"d",(function(){return i})),s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return r})),s.d(e,"f",(function(){return l})),s.d(e,"e",(function(){return o})),s.d(e,"g",(function(){return c})),s.d(e,"h",(function(){return d}));const a=function(t){switch(t){case"created":case"ລໍຖ້າອະນຸມັດ":return"#73b8fd";case"approved":case"ອະນຸມັດແລ້ວ":return"#0080fc";case"canceled":case"ບິນຖືກຍົກເລີກ":return"#eb004c";case"rejected":case"ການຈ່າຍຖືກປະຕິເສດ":return"#740127";case"to_confirm_payment":case"ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ":return"#9c540d";case"success":case"ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ":return"#02a38a"}},i=function(t){switch(t){case"created":return"ລໍຖ້າອະນຸມັດ";case"approved":return"ອະນຸມັດແລ້ວ";case"canceled":return"ບິນຖືກຍົກເລີກ";case"rejected":return"ການຈ່າຍຖືກປະຕິເສດ";case"to_confirm_payment":return"ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ";case"success":return"ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ";case"cash":return"ຊຳລະເງິນສົດ";case"bcel":return"BCEL";default:return t}},n=function(t){switch(t){case"CustomBill":return"ບິນຍ້ອນຫຼັງ";case"NewCollectionEvent":return"ບີນບໍລີການຂີ້ເຫຍື້ອພິເສດ";case"FutureInvoice":return"ບິນບໍລິການລ່ວງໜ້າ";case"NewInvoice":return"ບິນບໍລິການປະຈຳເດືອນ";default:return t}},r=function(t){switch(t){case"requested":return"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ";case"rejected":return"ປະຕິເສດລູກຄ້າແລ້ວ";case"approved":return"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ";case"collected":return"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ";case"collect_confirm":return"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ";case"collect_reject":return"ລູກຄ້າປະຕິເສດການເກັບ";default:return t}},l=[{value:"cash",text:"ເງິນສົດ"},{value:"bcel",text:"ເງິນໂອນ"},{value:"bcel_online",text:"bcel bill payments"}],o=["created","approved","to_confirm_payment","success"],c=["rejected","canceled"],d=["kg","ຖົງ","container","ຄັ້ງ"]},"2bfd":function(t,e,s){},"43c9":function(t,e,s){"use strict";s.r(e);var a=s("0798"),i=s("c6a6"),n=s("2bc5"),r=s("8336"),l=s("b0af"),o=s("99d9"),c=s("62ad"),d=s("a523"),u=s("2e4b"),h=s("4bd4"),p=s("132d"),m=s("e449"),v=s("0fd9"),f=s("2fa4"),b=s("8654"),_=function(){var t=this,e=t._self._c;return e(d["a"],[e(v["a"],{staticClass:"mb-4"},[e(c["a"],[e(n["a"],{staticClass:"pa-0",attrs:{large:""}},[e(r["a"],{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[e(p["a"],[t._v("mdi-chevron-left")])],1),t._v(" ສ້າງບິນລ່ວງໜ້າ ")],1)],1)],1),e("div",[e(l["a"],[e(o["b"],{staticClass:"pa-8"},[e(h["a"],{ref:"form",attrs:{"lazy-validation":""}},[e(v["a"],[e(c["a"],{attrs:{cols:"4"}},[e("p",[t._v("ວັນທີບິນ")]),e(u["a"],{attrs:{type:"month",min:t.now},model:{value:t.billDate,callback:function(e){t.billDate=e},expression:"billDate"}})],1),e(c["a"],{attrs:{cols:"8"}},[e(v["a"],[e(c["a"],[e(b["a"],{attrs:{label:"ຊື່ລາຍການ *",required:"",rules:t.totalRules,outlined:"",dense:"",disabled:t.disabledTitle},model:{value:t.data.title,callback:function(e){t.$set(t.data,"title",e)},expression:"data.title"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.title)+" ")])],1),e(c["a"],{attrs:{cols:"2"}},[e(r["a"],{attrs:{color:"primary"},on:{click:function(e){t.disabledTitle=!t.disabledTitle}}},[e(p["a"],[t._v("mdi-pen")])],1)],1)],1),e(v["a"],[e(c["a"],[e(b["a"],{attrs:{label:"ຄຳອະທິບາຍ *",required:"",rules:t.totalRules,outlined:"",dense:"",disabled:t.disabledDescription},model:{value:t.data.description,callback:function(e){t.$set(t.data,"description",e)},expression:"data.description"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.description)+" ")])],1),e(c["a"],{attrs:{cols:"2"}},[e(r["a"],{attrs:{color:"primary"},on:{click:function(e){t.disabledDescription=!t.disabledDescription}}},[e(p["a"],[t._v("mdi-pen")])],1)],1)],1),e(v["a"],[e(c["a"],[e(b["a"],{staticClass:"input-number",attrs:{label:"ລາຄາ *",required:"",rules:t.totalRules,type:"number",outlined:"",dense:""},model:{value:t.data.total,callback:function(e){t.$set(t.data,"total",e)},expression:"data.total"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.total)+" ")])],1)],1),e(v["a"],[e(c["a"],[e(b["a"],{staticClass:"input-number",attrs:{label:t.data.unit?"ຈຳນວນ/"+t.data.unit:"ຈຳນວນ *",required:"",rules:t.totalRules,type:"number",outlined:"",dense:""},model:{value:t.data.quantity,callback:function(e){t.$set(t.data,"quantity",e)},expression:"data.quantity"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.quantity)+" ")])],1),e(c["a"],[e(v["a"],[e(c["a"],{attrs:{cols:"5"}},[e(i["a"],{attrs:{label:"ຫົວໜ່ວຍ",items:t.units,outlined:"",dense:"",disabled:t.disabledUnit},model:{value:t.data.unit,callback:function(e){t.$set(t.data,"unit",e)},expression:"data.unit"}})],1),e(c["a"],[e(r["a"],{attrs:{color:"blue-grey",dark:""},on:{click:function(e){t.disabledUnit=!t.disabledUnit}}},[e(p["a"],{attrs:{left:""}},[t._v(" mdi-pen ")])],1)],1)],1)],1)],1),e(v["a"],[e(c["a"],[t.vat.useVat?t._e():e(r["a"],{staticClass:"indigo",attrs:{dark:""},on:{click:function(e){t.vat.useVat=!0}}},[e(p["a"],[t._v("mdi-percent")]),t._v(" ເພີ່ມ vat ")],1)],1)],1),e(v["a"]),t.vat.useVat?e(v["a"],[e(c["a"],{attrs:{cols:"10"}},[e(a["a"],{attrs:{text:"",outlined:"",color:"indigo darken-1",icon:"mdi-percent"}},[e(v["a"],[e(c["a"],{attrs:{cols:"8"}},[e(b["a"],{staticClass:"input-number",attrs:{label:"percent"==t.vat.selectedVatUnit?"%":"",required:"",type:"number",outlined:"",dense:""},model:{value:t.vat.value,callback:function(e){t.$set(t.vat,"value",e)},expression:"vat.value"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.vat)+" ")])],1),e(c["a"],{attrs:{cols:"4"}},[e(i["a"],{attrs:{label:"ຫົວໜ່ວຍ",items:t.vatUnits,outlined:"",dense:""},model:{value:t.vat.selectedVatUnit,callback:function(e){t.$set(t.vat,"selectedVatUnit",e)},expression:"vat.selectedVatUnit"}})],1)],1),e(c["a"],{attrs:{cols:"12"}},[e(b["a"],{staticClass:"input-number",attrs:{label:"ມູນຄ່າ vat",required:"",type:"number",outlined:"",dense:"",disabled:""},model:{value:t.vat.valueText,callback:function(e){t.$set(t.vat,"valueText",e)},expression:"vat.valueText"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.vat)+" ")])],1)],1)],1),e(c["a"],[e(r["a"],{attrs:{color:"red lighten-3",dark:""},on:{click:function(e){t.vat.useVat=!1}}},[e(p["a"],[t._v(" mdi-minus ")])],1)],1)],1):t._e()],1),e(c["a"],{attrs:{cols:"6"}},[e(m["a"],{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e(b["a"],t._g(t._b({attrs:{label:"ວັນທີເລີ່ມຈ່າຍ",readonly:"",outlined:"",dense:"",clearable:""},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}},"v-text-field",a,!1),s))]}}]),model:{value:t.start_menu,callback:function(e){t.start_menu=e},expression:"start_menu"}},[e(u["a"],{model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}})],1)],1),e(c["a"],{attrs:{cols:"6"}},[e(b["a"],{attrs:{label:"due date",readonly:"",outlined:"",disabled:"",dense:"",clearable:""},model:{value:t.due_date,callback:function(e){t.due_date=e},expression:"due_date"}})],1)],1)],1),e(o["a"],[t.totalFinal?e(a["a"],{attrs:{outlined:"",type:"success",text:""}},[t._v(" "+t._s(Intl.NumberFormat().format(t.totalFinal))+" lak ")]):t._e(),e(f["a"]),e(r["a"],{staticClass:"elevation-0 btn-warning mr-4",on:{click:function(e){return t.backPrevios()}}},[t._v(" ຍ້ອນກັບ ")]),e(r["a"],{staticClass:"elevation-0 btn-primary",attrs:{loading:t.loading,disabled:t.loading},on:{click:function(e){return t.AddData()}}},[t._v(" ສ້າງບິນ ")])],1)],1)],1)],1)],1)},g=[],y=(s("14d9"),s("6eceb")),I=s("22aa"),x=s("c1df"),S=s.n(x),C={name:"Invoice",props:["items"],title(){return"Vientiane Waste Co-Dev|Invoice"},data(){return{tab:null,now:(new Date).toISOString().substr(0,7),billDate:(new Date).toISOString().substr(0,7),start_date:(new Date).toISOString().substr(0,10),due_date:S()(this.start_date).add(7,"days").format("YYYY-MM-DD"),units:I["h"],disabledUnit:!0,start_menu:!1,end_menu:!1,invoices:[],loading:!1,disabledTitle:!0,disabledDescription:!0,is_instantly:0,payment_method:"",paymentType:"",data:{email:""},customer:{},vat:{valueText:0,value:7,useVat:!1,selectedVatUnit:"percent"},vatUnits:[{text:"ຈຳນວນ",value:"flat"},{text:"%",value:"percent"}],calendarId:"",offset:12,pagination:{},per_page:100,search:"",oldVal:"",packages:[],selectedPackage:"",server_errors:{},preview_list:[],image_list:[],image:[],totalRules:[t=>!!t||"Total is required"],paymentTypeRule:[t=>!!t||"Payment is required"]}},watch:{"vat.selectedVatUnit":function(){this.watchAndChangeVat()},"vat.value":function(){this.watchAndChangeVat()},total(){this.watchAndChangeVat()},is_instantly(t){console.log(t)},start_date(t){this.due_date=S()(t).add(7,"days").format("YYYY-MM-DD")},search(t){""==t&&this.fetchData()},billDate(t){this.data.title="ຄ່າບໍລິການປະຈຳເດືອນ "+S()(t).format("MM-YYYY"),this.data.description="ຄ່າບໍລິການປະຈຳເດືອນ "+S()(t).format("MM-YYYY"),this.server_errors.month=""},paymentType(){0==this.paymentType?(this.payment_method="cash",this.image="",this.imageUrl=""):1==this.paymentType&&(this.payment_method="bcel"),this.server_errors.payment_method=""}},computed:{total(){return this.data.total*this.data.quantity},totalFinal(){return this.vat.useVat?this.total+("number"!=typeof this.vat.valueText?parseInt(this.vat.valueText):this.vat.valueText):this.total}},created(){this.fetchData(),this.customer||this.$router.push("/future-invoice")},methods:{watchAndChangeVat(){"percent"==this.vat.selectedVatUnit&&(this.vat.valueText=Math.round(this.total*(this.vat.value/100))),"flat"==this.vat.selectedVatUnit&&(this.vat.valueText=this.vat.value)},RemoveItem(t){this.preview_list.splice(this.preview_list.indexOf(t),1)},previewMultiImage(t){const e=t.target;let s=e.files.length,a=0;if(e.files)while(s--){const t=new FileReader;t.onload=t=>{this.preview_list.push(t.target.result)},this.image_list.push(e.files[a]),t.readAsDataURL(e.files[a]),a++}},fetchData(){console.log(this.items),this.customer=this.items},Search(){Object(y["a"])(this)},backPrevios(){this.$router.go(-1)},AddData(){const t=new FormData;t.append("customer_id",this.customer.customer.id),t.append("title",this.data.title),t.append("description",this.data.description),t.append("start_month",this.billDate),t.append("date",this.billDate),t.append("date_in_bill",this.start_date),t.append("total",this.data.total),t.append("quantity",this.data.quantity),this.vat.useVat&&t.append("vat",this.vat.valueText),this.data.unit&&t.append("unit",this.data.unit),1==this.is_instantly&&(t.append("is_instantly",1),t.append("payment_method",this.payment_method),this.image_list.map(e=>{t.append("image_payments[]",e)})),1==this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.post("future-invoice",t,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{200==t.data.code&&(this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message}),this.$router.push({name:"future-invoice"}))}).catch(t=>{if(this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"}),t.response&&422==t.response.status){const e=t.response.data.errors,s={};for(const[t,a]of Object.entries(e))s[t]=a[0];this.server_errors=s}this.$store.commit("Loading_State",!1)}))}}},w=C,D=(s("1e80"),s("2877")),$=Object(D["a"])(w,_,g,!1,null,null,null);e["default"]=$.exports},"4bd4":function(t,e,s){"use strict";s("14d9");var a=s("58df"),i=s("7e2b"),n=s("3206");e["a"]=Object(a["a"])(i["a"],Object(n["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",a=>{a&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))}):s.valid=e(t),s},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const s=this.watchers.find(t=>t._uid===e._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"6eceb":function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));const a=t=>{""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},afdd:function(t,e,s){"use strict";var a=s("8336");e["a"]=a["a"]},c6a6:function(t,e,s){"use strict";s("2bfd");var a=s("b974"),i=s("8654"),n=s("d9f7"),r=s("80d2");const l={...a["b"],offsetY:!0,offsetOverflow:!0,transition:!1};e["a"]=a["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,s)=>s.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:a["a"].options.props.menuProps.type,default:()=>l},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>{const e=Object(r["r"])(t,this.itemText),s=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=a["a"].options.computed.$_menuProps.call(this);return t.contentClass=("v-autocomplete__content "+(t.contentClass||"")).trim(),{...l,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue)))},listData(){const t=a["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){if(t!==e){if(!this.autoSelectFirst){const s=e[this.$refs.menu.listIndex];s?this.setMenuIndex(t.findIndex(t=>t===s)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&t.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===r["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===r["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==r["y"].backspace&&t!==r["y"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const a=this.selectedItems.length,i=t!==a-1?t:t-1,n=this.selectedItems[i];n?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=i},clearableCallback(){this.internalSearch=null,a["a"].options.methods.clearableCallback.call(this)},genInput(){const t=i["a"].options.methods.genInput.call(this);return t.data=Object(n["a"])(t.data,{attrs:{"aria-activedescendant":Object(r["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(r["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=a["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?a["a"].options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,s=e.value;e.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[r["y"].home,r["y"].end].includes(e)||a["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){a["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){a["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){a["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,s;if(-1===this.selectedIndex)return;const a=this.selectedItems[this.selectedIndex],i=this.getText(a);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",i),null===(s=t.clipboardData)||void 0===s||s.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}})},f500:function(t,e,s){}}]);
//# sourceMappingURL=chunk-f4ca0026.a265dece.js.map