(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-026e986d"],{"0fdf":function(t,e,s){},1822:function(t,e,s){"use strict";var a=s("07b0");e["a"]=a["a"]},"22aa":function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"d",(function(){return i})),s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return r})),s.d(e,"f",(function(){return l})),s.d(e,"e",(function(){return c})),s.d(e,"g",(function(){return o})),s.d(e,"h",(function(){return d}));const a=function(t){switch(t){case"created":case"ລໍຖ້າອະນຸມັດ":return"#73b8fd";case"approved":case"ອະນຸມັດແລ້ວ":return"#0080fc";case"canceled":case"ບິນຖືກຍົກເລີກ":return"#eb004c";case"rejected":case"ການຈ່າຍຖືກປະຕິເສດ":return"#740127";case"to_confirm_payment":case"ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ":return"#9c540d";case"success":case"ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ":return"#02a38a"}},i=function(t){switch(t){case"created":return"ລໍຖ້າອະນຸມັດ";case"approved":return"ອະນຸມັດແລ້ວ";case"canceled":return"ບິນຖືກຍົກເລີກ";case"rejected":return"ການຈ່າຍຖືກປະຕິເສດ";case"to_confirm_payment":return"ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ";case"success":return"ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ";case"cash":return"ຊຳລະເງິນສົດ";case"bcel":return"BCEL";default:return t}},n=function(t){switch(t){case"CustomBill":return"ບິນຍ້ອນຫຼັງ";case"NewCollectionEvent":return"ບີນບໍລີການຂີ້ເຫຍື້ອພິເສດ";case"FutureInvoice":return"ບິນບໍລິການລ່ວງໜ້າ";case"NewInvoice":return"ບິນບໍລິການປະຈຳເດືອນ";default:return t}},r=function(t){switch(t){case"requested":return"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ";case"rejected":return"ປະຕິເສດລູກຄ້າແລ້ວ";case"approved":return"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ";case"collected":return"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ";case"collect_confirm":return"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ";case"collect_reject":return"ລູກຄ້າປະຕິເສດການເກັບ";default:return t}},l=[{value:"cash",text:"ເງິນສົດ"},{value:"bcel",text:"ເງິນໂອນ"},{value:"bcel_online",text:"bcel bill payments"}],c=["created","approved","to_confirm_payment","success"],o=["rejected","canceled"],d=["kg","ຖົງ","container","ຄັ້ງ"]},"43c9":function(t,e,s){"use strict";s.r(e);var a=s("a892"),i=s("8447"),n=s("07b0"),r=s("db5a"),l=s("0f35"),c=s("1da9"),o=s("1789"),d=s("d415"),h=s("565c"),u=s("1d7d"),p=s("d62f"),m=s("cfe2"),f=s("9b44"),v=function(){var t=this,e=t._self._c;return e(o["a"],[e(p["a"],{staticClass:"mb-4"},[e(c["a"],[e(i["a"],{staticClass:"pa-0",attrs:{large:""}},[e(n["a"],{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[e(u["a"],[t._v("mdi-chevron-left")])],1),t._v(" ສ້າງບິນລ່ວງໜ້າ ")],1)],1)],1),e("div",[e(r["a"],[e(l["b"],{staticClass:"pa-8"},[e(h["a"],{ref:"form",attrs:{"lazy-validation":""}},[e(p["a"],[e(c["a"],{attrs:{cols:"4"}},[e("p",[t._v("ວັນທີບິນ")]),e(d["a"],{attrs:{type:"month",min:t.now},model:{value:t.billDate,callback:function(e){t.billDate=e},expression:"billDate"}})],1),e(c["a"],{attrs:{cols:"8"}},[e(p["a"],[e(c["a"],[e(f["a"],{attrs:{label:"ຊື່ລາຍການ *",required:"",rules:t.totalRules,outlined:"",dense:"",disabled:t.disabledTitle},model:{value:t.data.title,callback:function(e){t.$set(t.data,"title",e)},expression:"data.title"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.title)+" ")])],1),e(c["a"],{attrs:{cols:"2"}},[e(n["a"],{attrs:{color:"primary"},on:{click:function(e){t.disabledTitle=!t.disabledTitle}}},[e(u["a"],[t._v("mdi-pen")])],1)],1)],1),e(p["a"],[e(c["a"],[e(f["a"],{attrs:{label:"ຄຳອະທິບາຍ *",required:"",rules:t.totalRules,outlined:"",dense:"",disabled:t.disabledDescription},model:{value:t.data.description,callback:function(e){t.$set(t.data,"description",e)},expression:"data.description"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.description)+" ")])],1),e(c["a"],{attrs:{cols:"2"}},[e(n["a"],{attrs:{color:"primary"},on:{click:function(e){t.disabledDescription=!t.disabledDescription}}},[e(u["a"],[t._v("mdi-pen")])],1)],1)],1),e(p["a"],[e(c["a"],[e(f["a"],{staticClass:"input-number",attrs:{label:"ລາຄາ *",required:"",rules:t.totalRules,type:"number",outlined:"",dense:""},model:{value:t.data.total,callback:function(e){t.$set(t.data,"total",e)},expression:"data.total"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.total)+" ")])],1)],1),e(p["a"],[e(c["a"],[e(f["a"],{staticClass:"input-number",attrs:{label:t.data.unit?"ຈຳນວນ/"+t.data.unit:"ຈຳນວນ *",required:"",rules:t.totalRules,type:"number",outlined:"",dense:""},model:{value:t.data.quantity,callback:function(e){t.$set(t.data,"quantity",e)},expression:"data.quantity"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.quantity)+" ")])],1),e(c["a"],[e(p["a"],[e(c["a"],{attrs:{cols:"5"}},[e(a["a"],{attrs:{label:"ຫົວໜ່ວຍ",items:t.units,outlined:"",dense:"",disabled:t.disabledUnit},model:{value:t.data.unit,callback:function(e){t.$set(t.data,"unit",e)},expression:"data.unit"}})],1),e(c["a"],[e(n["a"],{attrs:{color:"blue-grey",dark:""},on:{click:function(e){t.disabledUnit=!t.disabledUnit}}},[e(u["a"],{attrs:{left:""}},[t._v(" mdi-pen ")])],1)],1)],1)],1)],1)],1)],1)],1),e(l["a"],[e(m["a"]),e(n["a"],{staticClass:"elevation-0 btn-warning mr-4",on:{click:function(e){return t.backPrevios()}}},[t._v(" ຍ້ອນກັບ ")]),e(n["a"],{staticClass:"elevation-0 btn-primary",attrs:{loading:t.loading,disabled:t.loading},on:{click:function(e){return t.AddData()}}},[t._v(" ສ້າງບິນ ")])],1)],1)],1)],1)],1)},g=[],b=(s("558b"),s("6ece")),I=s("22aa"),y=s("bb03"),_=s.n(y),S={name:"Invoice",props:["items"],title(){return"Vientiane Waste Co-Dev|Invoice"},data(){return{tab:null,now:(new Date).toISOString().substr(0,7),billDate:(new Date).toISOString().substr(0,7),units:I["h"],disabledUnit:!0,start_menu:!1,end_menu:!1,invoices:[],loading:!1,disabledTitle:!0,disabledDescription:!0,is_instantly:0,payment_method:"",paymentType:"",data:{email:""},customer:{},calendarId:"",offset:12,pagination:{},per_page:100,search:"",oldVal:"",packages:[],selectedPackage:"",server_errors:{},preview_list:[],image_list:[],image:[],totalRules:[t=>!!t||"Total is required"],paymentTypeRule:[t=>!!t||"Payment is required"]}},watch:{is_instantly(t){console.log(t)},search(t){""==t&&this.fetchData()},billDate(t){this.data.title="ຄ່າບໍລິການປະຈຳເດືອນ "+_()(t).format("MM-YYYY"),this.data.description="ຄ່າບໍລິການປະຈຳເດືອນ "+_()(t).format("MM-YYYY"),this.server_errors.month=""},paymentType(){0==this.paymentType?(this.payment_method="cash",this.image="",this.imageUrl=""):1==this.paymentType&&(this.payment_method="bcel"),this.server_errors.payment_method=""}},created(){this.fetchData(),this.customer||this.$router.push("/future-invoice")},methods:{RemoveItem(t){this.preview_list.splice(this.preview_list.indexOf(t),1)},previewMultiImage(t){const e=t.target;let s=e.files.length,a=0;if(e.files)while(s--){const t=new FileReader;t.onload=t=>{this.preview_list.push(t.target.result)},this.image_list.push(e.files[a]),t.readAsDataURL(e.files[a]),a++}},fetchData(){console.log(this.items),this.customer=this.items},Search(){Object(b["a"])(this)},backPrevios(){this.$router.go(-1)},AddData(){const t=new FormData;t.append("customer_id",this.customer.customer.id),t.append("title",this.data.title),t.append("description",this.data.description),t.append("start_month",this.billDate),t.append("date",this.billDate),t.append("total",this.data.total),t.append("quantity",this.data.quantity),this.data.unit&&t.append("unit",this.data.unit),1==this.is_instantly&&(t.append("is_instantly",1),t.append("payment_method",this.payment_method),this.image_list.map(e=>{t.append("image_payments[]",e)})),1==this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.post("future-invoice",t,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{200==t.data.code&&(this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message}),this.$router.push({name:"future-invoice"}))}).catch(t=>{if(this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"}),t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,s]of Object.entries(e))this.server_errors[t]=s[0]}this.$store.commit("Loading_State",!1)}))}}},x=S,D=(s("52df"),s("4a4e")),w=Object(D["a"])(x,v,g,!1,null,null,null);e["default"]=w.exports},"52df":function(t,e,s){"use strict";s("c4fc")},"565c":function(t,e,s){"use strict";s("558b");var a=s("9c0c"),i=s("68c4"),n=s("944a");e["a"]=Object(a["a"])(i["a"],Object(n["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",a=>{a&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))}):s.valid=e(t),s},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const s=this.watchers.find(t=>t._uid===e._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"6ece":function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));const a=t=>{""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},a892:function(t,e,s){"use strict";s("0fdf");var a=s("26bf"),i=s("9b44"),n=s("ed44"),r=s("dd08");const l={...a["b"],offsetY:!0,offsetOverflow:!0,transition:!1};e["a"]=a["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,s)=>s.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:a["a"].options.props.menuProps.type,default:()=>l},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>{const e=Object(r["r"])(t,this.itemText),s=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=a["a"].options.computed.$_menuProps.call(this);return t.contentClass=("v-autocomplete__content "+(t.contentClass||"")).trim(),{...l,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue)))},listData(){const t=a["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){if(t!==e){if(!this.autoSelectFirst){const s=e[this.$refs.menu.listIndex];s?this.setMenuIndex(t.findIndex(t=>t===s)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&t.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===r["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===r["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==r["y"].backspace&&t!==r["y"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const a=this.selectedItems.length,i=t!==a-1?t:t-1,n=this.selectedItems[i];n?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=i},clearableCallback(){this.internalSearch=null,a["a"].options.methods.clearableCallback.call(this)},genInput(){const t=i["a"].options.methods.genInput.call(this);return t.data=Object(n["a"])(t.data,{attrs:{"aria-activedescendant":Object(r["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(r["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=a["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?a["a"].options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,s=e.value;e.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[r["y"].home,r["y"].end].includes(e)||a["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){a["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){a["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){a["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,s;if(-1===this.selectedIndex)return;const a=this.selectedItems[this.selectedIndex],i=this.getText(a);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",i),null===(s=t.clipboardData)||void 0===s||s.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}})},c4fc:function(t,e,s){}}]);
//# sourceMappingURL=chunk-026e986d.450d45c8.js.map