(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33114c4c"],{"04c6":function(e,t,s){"use strict";var a=s("c0e9"),i=s("1f45"),r=s("f401"),n=URLSearchParams.prototype,l=i(n.forEach);a&&!("size"in n)&&r(n,"size",{get:function(){var e=0;return l(this,(function(){e++})),e},configurable:!0,enumerable:!0})},"249c":function(e,t,s){},"52b8":function(e,t,s){"use strict";s("249c")},"54da":function(e,t,s){"use strict";t["a"]=function(e){const t={};if(!e[0]){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(void 0!==e[t]&&null!==e[t]&&""!==e[t]||delete e[t]);return e}for(const s of e)1==Object.keys(s).length&&s[Object.keys(s)]&&(t[Object.keys(s)]=s[Object.keys(s)]);return t}},"6ece":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));const a=e=>{""!==e.search?""!==e.oldVal?e.oldVal!==e.search&&(e.oldVal=e.search,e.pagination.current_page=1,e.fetchData()):(""!==e.search&&(e.pagination.current_page=1,e.fetchData()),e.oldVal=e.search):e.oldVal=""}},"86a8":function(e,t,s){"use strict";s("d50c");var a=s("fd5c"),i=s("cc3d"),r=s("33a6"),n=s("741f");const l={...a["b"],offsetY:!0,offsetOverflow:!0,transition:!1};t["a"]=a["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:a["a"].options.props.menuProps.type,default:()=>l},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(n["r"])(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=a["a"].options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...l,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=a["a"].options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){if(e!==t){if(!this.autoSelectFirst){const s=t[this.$refs.menu.listIndex];s?this.setMenuIndex(e.findIndex(e=>e===s)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&e.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===n["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===n["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==n["y"].backspace&&e!==n["y"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const a=this.selectedItems.length,i=e!==a-1?e:e-1,r=this.selectedItems[i];r?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=i},clearableCallback(){this.internalSearch=null,a["a"].options.methods.clearableCallback.call(this)},genInput(){const e=i["a"].options.methods.genInput.call(this);return e.data=Object(r["a"])(e.data,{attrs:{"aria-activedescendant":Object(n["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(n["p"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=a["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?a["a"].options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[n["y"].home,n["y"].end].includes(t)||a["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){a["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){a["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){a["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,s;if(-1===this.selectedIndex)return;const a=this.selectedItems[this.selectedIndex],i=this.getText(a);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",i),null===(s=e.clipboardData)||void 0===s||s.setData("text/vnd.vuetify.autocomplete.item+plain",i),e.preventDefault()}}})},"9b01":function(e,t,s){"use strict";s("a047");var a=s("87fc"),i=s("98fa"),r=s("1049");t["a"]=Object(a["a"])(i["a"],Object(r["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",t=>{this.$set(this.errorBag,e._uid,t)},{immediate:!0}),s={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=e.$watch("shouldValidate",a=>{a&&(this.errorBag.hasOwnProperty(e._uid)||(s.valid=t(e)))}):s.valid=t(e),s},validate(){return 0===this.inputs.filter(e=>!e.validate(!0)).length},reset(){this.inputs.forEach(e=>e.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(e=>e.resetValidation()),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find(t=>t._uid===e._uid);if(!t)return;const s=this.watchers.find(e=>e._uid===t._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(e=>e._uid!==t._uid),this.inputs=this.inputs.filter(e=>e._uid!==t._uid),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},b2ac:function(e,t,s){"use strict";s.r(t);var a=s("86a8"),i=s("a125"),r=s("c1a61"),n=s("f046"),l=s("b325"),o=s("a6a9"),c=s("e02b"),d=s("ba9d"),u=s("8440"),h=s("cf97"),m=s("e6e5"),p=s("9b01"),f=s("3bc0"),v=s("e862"),_=s("489f"),g=s("fd5c"),b=s("f7fb"),S=s("cc3d"),x=function(){var e=this,t=e._self._c;return t(d["a"],[t(_["a"],{staticClass:"mb-n6"},[t(c["a"],[t(r["a"],{staticClass:"btn-primary",on:{click:function(t){return e.openAddModal()}}},[t(f["a"],[e._v("mdi-plus")])],1)],1),t(c["a"],[t(v["a"],{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function({on:s,attrs:a}){return[t(S["a"],e._g(e._b({attrs:{label:"ເລີ່ມວັນທີ",readonly:"",outlined:"",dense:""},model:{value:e.start_date,callback:function(t){e.start_date=t},expression:"start_date"}},"v-text-field",a,!1),s))]}}]),model:{value:e.start_menu,callback:function(t){e.start_menu=t},expression:"start_menu"}},[t(h["a"],{on:{input:function(t){return e.fetchData()}},model:{value:e.start_date,callback:function(t){e.start_date=t},expression:"start_date"}})],1)],1),t(c["a"],[t(v["a"],{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function({on:s,attrs:a}){return[t(S["a"],e._g(e._b({attrs:{label:"ຫາວັນທີ",readonly:"",outlined:"",dense:""},model:{value:e.end_date,callback:function(t){e.end_date=t},expression:"end_date"}},"v-text-field",a,!1),s))]}}]),model:{value:e.end_menu,callback:function(t){e.end_menu=t},expression:"end_menu"}},[t(h["a"],{on:{input:function(t){return e.fetchData()}},model:{value:e.end_date,callback:function(t){e.end_date=t},expression:"end_date"}})],1)],1),t(c["a"],[t(g["a"],{attrs:{outlined:"",dense:"",items:e.statuses,"item-text":"name","item-value":"name",label:"ສະຖານະ"},model:{value:e.selectedStatus,callback:function(t){e.selectedStatus=t},expression:"selectedStatus"}})],1)],1),t(_["a"],{attrs:{justify:"center"}},[t(c["a"],[t(n["a"],{staticClass:"pa-2"},[t(l["c"],[e._v(" ຂໍ້ມູນພະນັກງານຂັບລົດ ("+e._s(e.pagination.total)+") "),t(m["a"],{staticClass:"mx-4",attrs:{vertical:""}}),t(b["a"]),t(S["a"],{attrs:{clearable:"","prepend-inner-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Search()}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),t(u["a"],{attrs:{headers:e.headers,items:e.data,search:e.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:e._u([{key:"item.media",fn:function({item:s}){return e._l(s.media,(function(s,a){return t(i["a"],{key:a,attrs:{size:"36px"}},[s.url?t("img",{attrs:{src:s.url}}):e._e()])}))}},{key:"item.vehicle",fn:function({item:s}){return[s.vehicle?t("div",[e._v(" "+e._s(s.vehicle.car_id)+" ("+e._s(s.vehicle.car_number)+") ")]):e._e()]}},{key:"item.status",fn:function({item:s}){return[t(o["a"],{attrs:{label:"",color:e.statusColor(s.status)},on:{click:function(t){return e.switchStatus(s.id)}}},[e._v(" "+e._s(s.status)+" ")])]}},{key:"item.actions",fn:function({item:s}){return[t(f["a"],{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.OpenModalEdit(s)}}},[e._v(" mdi-pencil ")]),t(f["a"],{attrs:{small:""},on:{click:function(t){return e.deleteItem(s.id)}}},[e._v(" mdi-delete ")])]}}])}),t("br"),[e.pagination.total_pages>1?t("Pagination",{attrs:{pagination:e.pagination,offset:e.offset},on:{paginate:function(t){return e.fetchData()}}}):e._e()]],2)],1)],1),t("ModalAdd",[[t(n["a"],[t(l["c"],[t("p",[e._v("ເພີ່ມພະນັກງານຂັບລົດ")])]),t(l["b"],[t(d["a"],[t(p["a"],{ref:"form",attrs:{"lazy-validation":""}},[t(_["a"],[t(c["a"],[t("div",{staticClass:"field"},[t("div",{staticClass:"file is-large is-boxed"},[t("label",{staticClass:"file-label"},[t("input",{ref:"image",staticClass:"file-input input-file-image",attrs:{type:"file",name:"image",accept:"image/*"},on:{change:e.onFileChange}}),t("span",{staticClass:"file-cta"},[t("span",{staticClass:"file-icon"},[t(f["a"],{staticClass:"fas fa-cloud-upload",staticStyle:{"font-size":"60px !important",color:"#719aff",cursor:"pointer"}},[e._v("mdi-cloud-upload")])],1),t("span",{staticClass:"file-label",staticStyle:{"margin-top":"10px","text-transform":"uppercase","padding-top":"20px"}},[e._v(" Choose Profile ")])])])])])])],1),t(_["a"],[e.imageUrl?t(c["a"],{staticClass:"mt-5"},[t(i["a"],{staticClass:"avatar rounded",attrs:{size:"94px"}},[t("img",{attrs:{src:e.imageUrl,alt:""}})])],1):e._e()],1),t(_["a"],[t(c["a"],{attrs:{cols:"12"}},[t(S["a"],{attrs:{label:"ID *",required:"",rules:e.idRules},model:{value:e.user.card_id,callback:function(t){e.$set(e.user,"card_id",t)},expression:"user.card_id"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.card_id)+" ")])],1)],1),t(_["a"],[t(c["a"],{attrs:{cols:"6"}},[t(S["a"],{attrs:{label:"Name *",required:"",rules:e.nameRules},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.name)+" ")])],1),t(c["a"],{attrs:{cols:"6"}},[t(S["a"],{attrs:{label:"Surname *",required:"",rules:e.nameRules},model:{value:e.user.surname,callback:function(t){e.$set(e.user,"surname",t)},expression:"user.surname"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.surname)+" ")])],1),t(c["a"],{attrs:{cols:"6"}},[t(S["a"],{staticClass:"input-number",attrs:{label:"ເບີໂທ *",required:"",rules:e.phoneRules,type:"number"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.phone)+" ")])],1),t(c["a"],{attrs:{cols:"6"}},[t(S["a"],{attrs:{label:"Email"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.email)+" ")])],1),t(c["a"],{attrs:{cols:"12"}},[t(a["a"],{attrs:{items:e.vehicles,"item-text":e.getVehicle,"item-value":"id",label:"ເລືອກລົດ",dense:"",rules:e.vehicleRules},model:{value:e.selectedVehicle,callback:function(t){e.selectedVehicle=t},expression:"selectedVehicle"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.vehicle_id)+" ")])],1),t(c["a"],{attrs:{cols:"6"}},[t(S["a"],{attrs:{label:"Password *",type:"password",rules:e.passwordRules,required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.password)+" ")])],1),t(c["a"],{attrs:{cols:"6"}},[t(S["a"],{attrs:{label:"Password Confirm *",type:"password",rules:e.passwordConfirmRules,required:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.AddItem.apply(null,arguments)}},model:{value:e.user.password_confirmation,callback:function(t){e.$set(e.user,"password_confirmation",t)},expression:"user.password_confirmation"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.password_confirmation)+" ")])],1)],1)],1)],1),t(l["a"],[t(b["a"]),t(r["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.closeAddModal()}}},[e._v(" ຍົກເລີກ ")]),t(r["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.AddItem()}}},[e._v(" ບັນທຶກ ")])],1)],1)],1)]],2),t("ModalEdit",{scopedSlots:e._u([{key:"default",fn:function(){return[t(n["a"],[t(l["c"],[t("p",[e._v("ແກ້ໄຂພະນັກງານຂັບລົດ")])]),t(l["b"],[t(d["a"],[t(p["a"],{ref:"form",attrs:{"lazy-validation":""}},[t(_["a"],[t(c["a"],[t("div",{staticClass:"field"},[t("div",{staticClass:"file is-large is-boxed"},[t("label",{staticClass:"file-label"},[t("input",{staticClass:"file-input input-file-image",attrs:{type:"file",accept:"image/*"},on:{change:e.onFileChange}}),t("span",{staticClass:"file-cta"},[t("span",{staticClass:"file-icon"},[t(f["a"],{staticClass:"fas fa-cloud-upload",staticStyle:{"font-size":"60px !important",color:"#719aff",cursor:"pointer"}},[e._v("mdi-cloud-upload")])],1),t("span",{staticClass:"file-label",staticStyle:{"margin-top":"10px","text-transform":"uppercase","padding-top":"20px"}},[e._v(" Choose Profile ")])])])])])])],1),t(_["a"],[e.imageUrl?t(c["a"],{staticClass:"mt-5"},[t(i["a"],{staticClass:"avatar rounded",attrs:{size:"94px"}},[t("img",{attrs:{src:e.imageUrl,alt:""}})])],1):t(c["a"],{staticClass:"mt-5"},e._l(e.edit_driver.media,(function(e,s){return t(i["a"],{key:s,staticClass:"avatar rounded mr-6",attrs:{size:"94px"}},[t("img",{attrs:{src:e.url}})])})),1)],1),t(_["a"],[t(c["a"],{attrs:{cols:"12"}},[t(S["a"],{attrs:{label:"ID *",required:"",rules:e.idRules},model:{value:e.edit_driver.card_id,callback:function(t){e.$set(e.edit_driver,"card_id",t)},expression:"edit_driver.card_id"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.card_id)+" ")])],1)],1),t(_["a"],[t(c["a"],{attrs:{cols:"6"}},[t(S["a"],{attrs:{label:"Name *",required:"",rules:e.nameRules},model:{value:e.edit_driver.name,callback:function(t){e.$set(e.edit_driver,"name",t)},expression:"edit_driver.name"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.name)+" ")])],1),t(c["a"],{attrs:{cols:"6"}},[t(S["a"],{attrs:{label:"Surname *",required:"",rules:e.nameRules},model:{value:e.edit_driver.surname,callback:function(t){e.$set(e.edit_driver,"surname",t)},expression:"edit_driver.surname"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.surname)+" ")])],1),t(c["a"],{attrs:{cols:"6"}},[e.edit_driver.user?t(S["a"],{staticClass:"input-number",attrs:{label:"ເບີໂທ *",required:"",rules:e.phoneRules,type:"number"},model:{value:e.edit_driver.user.phone,callback:function(t){e.$set(e.edit_driver.user,"phone",t)},expression:"edit_driver.user.phone"}}):e._e(),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.phone)+" ")])],1),t(c["a"],{attrs:{cols:"6"}},[e.edit_driver.user?t(S["a"],{attrs:{label:"Email *"},model:{value:e.edit_driver.user.email,callback:function(t){e.$set(e.edit_driver.user,"email",t)},expression:"edit_driver.user.email"}}):e._e(),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.email)+" ")])],1),t(c["a"],{attrs:{cols:"12"}},[t(a["a"],{attrs:{items:e.vehicle,"item-text":e.getVehicle,"item-value":"id",label:"ເລືອກລົດ",dense:"",rules:e.vehicleRules},model:{value:e.edit_driver.vehicle_id,callback:function(t){e.$set(e.edit_driver,"vehicle_id",t)},expression:"edit_driver.vehicle_id"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.vehicle_id)+" ")])],1)],1)],1)],1),t(l["a"],[t(b["a"]),t(r["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.closeUpdateModal()}}},[e._v(" Close ")]),t(r["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.updateItem()}}},[e._v(" Update ")])],1)],1)],1)]},proxy:!0}])}),t("ModalDelete",[[t(l["a"],[t(b["a"]),t(r["a"],{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v(" Cancel ")]),t(r["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.deleteItemConfirm}},[e._v(" OK ")]),t(b["a"])],1)]],2)],1)},I=[],y=(s("a047"),s("04c6"),s("6ece")),C=s("54da"),$={name:"User",title(){return"Vientiane Waste Co-Dev|"+this.title},data(){return{title:"Driver",start_date:"",end_date:"",start_menu:!1,end_menu:!1,headers:[{text:"ID",value:"card_id"},{text:"ຊື່",value:"name"},{text:"ນາມສະກຸນ",value:"surname"},{text:"ທະບຽນລົດ",value:"vehicle"},{text:"ເບີໂທ",value:"user.phone",sortable:!1},{text:"Email",value:"user.email",sortable:!1},{text:"Status",value:"status",sortable:!1},{text:"Team",value:"team.name",sortable:!1},{text:"Profile",value:"media",sortable:!1},{text:"",value:"actions",sortable:!1}],loading:!1,status:!1,data:[],user:{email:""},edit_driver:{},userID:"",server_errors:{email:"",roleId:""},errormsg:"",image:"",imageUrl:"",offset:12,pagination:{},per_page:100,search:"",oldVal:"",vehicle:[],vehicles:[],selectedVehicle:"",selectedStatus:"",statuses:[{id:1,name:"active"},{id:1,name:"inactive"}],passwordRules:[e=>!!e||"Password is required",e=>e&&e.length>=8||"Password must be more than 8 characters"],passwordConfirmRules:[e=>!!e||"Password Confirm is required",e=>e&&e.length>=8||"Password must be more than 8 characters"],idRules:[e=>!!e||"Id is required"],nameRules:[e=>!!e||"Name is required",e=>e&&e.length>=2||"Name must be less than 2 characters"],vehicleRules:[e=>!!e||"Vehicle is required"],phoneRules:[e=>!!e||"Phone is required",e=>e&&e.length>=4&&e.length<=11||"Phone number must be  4 - 11 numbers"],carnumberRules:[e=>!!e||"Car number is required",e=>e&&4==e.length||"Car number must be 4 number",e=>Number.isInteger(Number(e))||"The value must be an integer number"]}},watch:{selectedStatus(){this.fetchData()},selectedVehicle(e){this.server_errors.vehicle_id="",e&&this.getVehicle(e)},"edit_driver.vehicle_id":function(e){this.server_errors.vehicle_id="",e&&this.getVehicle(e)},"user.name":function(){this.server_errors.name=""},"user.surname":function(){this.server_errors.surname=""},"user.phone":function(){this.server_errors.phone=""},"user.email":function(){this.server_errors.email=""},"user.vehicle_id":function(){this.server_errors.vehicle_id=""},"user.password":function(){this.server_errors.password=""},"edit_driver.name":function(){this.server_errors.name=""},"edit_driver.surname":function(){this.server_errors.surname=""},"edit_driver.user.phone":function(){this.server_errors.phone=""},"edit_driver.user.email":function(){this.server_errors.email=""},search(e){""==e&&this.fetchData()}},created(){this.fetchData()},methods:{fetchVehicle(){this.$axios.get("vehicle").then(e=>{200==e.data.code&&setTimeout(()=>{this.vehicle=e.data.data,this.vehicle.filter(e=>{null!=e.driver&&""!=e.driver||this.vehicles.push(e)})},300)}).catch({})},onFileChange(e){const t=e.target,s=e.target.files[0];this.image=t.files[0],this.imageUrl=URL.createObjectURL(s)},openAddModal(){this.fetchVehicle(),this.$store.commit("modalAdd_State",!0)},AddItem(){const e=new FormData;e.append("card_id",this.user.card_id),e.append("name",this.user.name),e.append("surname",this.user.surname),e.append("phone",this.user.phone),this.user.email&&e.append("email",this.user.email),e.append("vehicle_id",this.selectedVehicle),e.append("image",this.image),e.append("password",this.user.password),e.append("password_confirmation",this.user.password_confirmation),1==this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.post("driver",e,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{200==e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.closeAddModal(),this.user={},this.imageUrl="",this.imageUrl="",this.fetchData(),this.reset(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})},300)}).catch(e=>{if(this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),e.response&&422==e.response.status){const t=e.response.data.errors;for(const[e,s]of Object.entries(t))this.server_errors[e]=s[0]}}))},fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("driver",{params:Object(C["a"])([{page:this.pagination.current_page},{per_page:this.per_page},{filter:this.search},{date_from:this.start_date},{date_end:this.end_date},{status:this.selectedStatus}])}).then(e=>{200==e.data.code&&(this.$store.commit("Loading_State",!1),this.$store.commit("Loading_State",!1),this.data=e.data.data.data,this.pagination=e.data.data.pagination,this.data.map(e=>{"active"==e.status?this.status=!0:this.status=!1}))}).catch(e=>{if(this.$store.commit("Loading_State",!1),e.response&&422==e.response.status){const t=e.response.data.errors;for(const[e,s]of Object.entries(t))this.server_errors[e]=s[0]}})},closeAddModal(){this.$store.commit("modalAdd_State",!1)},OpenModalEdit(e){this.edit_driver=e,this.fetchVehicle(),this.$store.commit("modalEdit_State",!0)},updateItem(){null==this.edit_driver.user.email&&(this.edit_driver.user.email="");const e=new FormData;e.append("name",this.edit_driver.name),e.append("card_id",this.edit_driver.card_id),e.append("surname",this.edit_driver.surname),e.append("phone",this.edit_driver.user.phone),e.append("email",this.edit_driver.user.email),e.append("vehicle_id",this.edit_driver.vehicle_id),e.append("image",this.image),e.append("_method","PUT"),1==this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.post("driver/"+this.edit_driver.id,e,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{200==e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.closeUpdateModal(),this.imageUrl="",this.imageUrl="",this.fetchData(),this.reset(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})},300)}).catch(e=>{if(this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),e.response&&422==e.response.status){const t=e.response.data.errors;for(const[e,s]of Object.entries(t))this.server_errors[e]=s[0]}}))},closeUpdateModal(){this.$store.commit("modalEdit_State",!1)},closeDelete(){this.$store.commit("modalDelete_State",!1)},deleteItem(e){this.userID=e,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm(){this.$store.commit("Loading_State",!0),this.$axios.delete("driver/"+this.userID).then(e=>{200==e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.$store.commit("modalDelete_State",!1),this.fetchData(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})},300)}).catch(e=>{this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),this.$store.commit("modalDelete_State",!1),this.$store.commit("Loading_State",!1)})},switchStatus(e){this.$store.commit("Loading_State",!0),this.$axios.post(`driver/${e}/switch-status`).then(e=>{200==e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.fetchData(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})},300)}).catch(e=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),this.fetchData()})},statusColor(e){return"active"==e?"primary":"inactive"==e?"error":"info"},reset(){this.$refs.form.reset()},getVehicle(e){return null!==e?e.car_id+" "+`(${e.car_number})`:"(ຍັງບໍທັນມີລົດ)"},Search(){Object(y["a"])(this)}}},k=$,w=(s("52b8"),s("4a4e")),D=Object(w["a"])(k,x,I,!1,null,null,null);t["default"]=D.exports},d50c:function(e,t,s){},f401:function(e,t,s){var a=s("8db5"),i=s("2ab7");e.exports=function(e,t,s){return s.get&&a(s.get,t,{getter:!0}),s.set&&a(s.set,t,{setter:!0}),i.f(e,t,s)}}}]);
//# sourceMappingURL=chunk-33114c4c.7ef96df5.js.map