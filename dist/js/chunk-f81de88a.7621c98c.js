(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f81de88a"],{"2bfd":function(e,t,s){},"4bd4":function(e,t,s){"use strict";s("14d9");var a=s("58df"),i=s("7e2b"),r=s("3206");t["a"]=Object(a["a"])(i["a"],Object(r["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",t=>{this.$set(this.errorBag,e._uid,t)},{immediate:!0}),s={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=e.$watch("shouldValidate",a=>{a&&(this.errorBag.hasOwnProperty(e._uid)||(s.valid=t(e)))}):s.valid=t(e),s},validate(){return 0===this.inputs.filter(e=>!e.validate(!0)).length},reset(){this.inputs.forEach(e=>e.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(e=>e.resetValidation()),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find(t=>t._uid===e._uid);if(!t)return;const s=this.watchers.find(e=>e._uid===t._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(e=>e._uid!==t._uid),this.inputs=this.inputs.filter(e=>e._uid!==t._uid),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},"6eceb":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));const a=e=>{""!==e.search?""!==e.oldVal?e.oldVal!==e.search&&(e.oldVal=e.search,e.pagination.current_page=1,e.fetchData()):(""!==e.search&&(e.pagination.current_page=1,e.fetchData()),e.oldVal=e.search):e.oldVal=""}},"74b5":function(e,t,s){"use strict";s.r(t);var a=s("c6a6"),i=s("8336"),r=s("b0af"),n=s("99d9"),o=s("62ad"),l=s("a523"),d=s("8fea"),c=s("ce7e"),h=s("4bd4"),u=s("132d"),m=s("8860"),p=s("da13"),f=s("5d23"),v=s("e449"),g=s("0fd9"),_=s("2fa4"),I=s("8654"),S=function(){var e=this,t=e._self._c;return t(l["a"],[t(g["a"],{staticClass:"mb-n6"},[t(o["a"],[t(i["a"],{staticClass:"btn-primary",on:{click:function(t){return e.openAddModal()}}},[t(u["a"],[e._v("mdi-plus")])],1)],1)],1),t(g["a"],{attrs:{justify:"center"}},[t(o["a"],[t(r["a"],{staticClass:"pa-2"},[t(n["c"],[e._v(" ຂໍ້ມູນທີມ ("+e._s(e.pagination.total)+") "),t(c["a"],{staticClass:"mx-4",attrs:{vertical:""}}),t(_["a"]),t(I["a"],{attrs:{clearable:"","prepend-inner-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Search()}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),t(d["a"],{attrs:{headers:e.headers,items:e.data,search:e.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:e._u([{key:"item.actions",fn:function({item:s}){return[t(v["a"],{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:s,attrs:a}){return[t(u["a"],e._g(e._b({staticClass:"mr-2",attrs:{color:"primary",dark:"",medium:""}},"v-icon",a,!1),s),[e._v(" mdi-dots-vertical ")])]}}],null,!0)},[t(m["a"],[t(p["a"],{attrs:{link:""},on:{click:function(t){return e.viewPage(s.id)}}},[t(f["d"],[t(u["a"],{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-plus ")]),e._v(" ເພີ່ມສະມາຊິກທີມ ")],1)],1),t(p["a"],{attrs:{link:""},on:{click:function(t){return e.OpenModalEdit(s)}}},[t(f["d"],[t(u["a"],{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-pencil ")]),e._v(" ແກ້ໄຂ ")],1)],1),t(p["a"],{attrs:{link:""},on:{click:function(t){return e.deleteItem(s.id)}}},[t(f["d"],[t(u["a"],{attrs:{small:""}},[e._v(" mdi-delete ")]),e._v(" ລຶບ ")],1)],1)],1)],1)]}}])}),t("br"),[e.pagination.total_pages>1?t("Pagination",{attrs:{pagination:e.pagination,offset:e.offset},on:{paginate:function(t){return e.fetchData()}}}):e._e()]],2)],1)],1),t("ModalAdd",[[t(r["a"],[t(n["c"],[t("p",[e._v("ເພີ່ມທີມ")])]),t(n["b"],[t(l["a"],[t(h["a"],{ref:"form",attrs:{"lazy-validation":""}},[t(g["a"],[t(o["a"],{attrs:{cols:"12"}},[t(I["a"],{attrs:{label:"Name *",required:"",rules:e.teamRules},model:{value:e.teamName,callback:function(t){e.teamName=t},expression:"teamName"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.name)+" ")])],1),t(o["a"],{attrs:{cols:"12"}},[t(a["a"],{attrs:{items:e.driver,"item-text":"name","item-value":"id",label:"ພະນັກງານຂັບລົດ",dense:"",rules:e.driverRules},model:{value:e.selectedDriver,callback:function(t){e.selectedDriver=t},expression:"selectedDriver"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.driver_id)+" ")])],1)],1)],1)],1),t(n["a"],[t(_["a"]),t(i["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.closeAddModal()}}},[e._v(" ຍົກເລີກ ")]),t(i["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.AddItem()}}},[e._v(" ບັນທຶກ ")])],1)],1)],1)]],2),t("ModalEdit",{scopedSlots:e._u([{key:"default",fn:function(){return[t(r["a"],[t(n["c"],[t("p",[e._v("ແກ້ໄຂທີມ")])]),t(n["b"],[t(l["a"],[t(h["a"],{ref:"form",attrs:{"lazy-validation":""}},[t(g["a"],[t(o["a"],{attrs:{cols:"12"}},[t(I["a"],{attrs:{label:"Name *",required:"",rules:e.teamRules},model:{value:e.edit_user.name,callback:function(t){e.$set(e.edit_user,"name",t)},expression:"edit_user.name"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.name)+" ")])],1),t(o["a"],{attrs:{cols:"12"}},[e.edit_user.driver?t(a["a"],{attrs:{items:e.driver,"item-text":"name","item-value":"id",label:"ພະນັກງານຂັບລົດ",dense:"",rules:e.driverRules},model:{value:e.edit_user.driver.id,callback:function(t){e.$set(e.edit_user.driver,"id",t)},expression:"edit_user.driver.id"}}):e._e(),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.driver_id)+" ")])],1)],1)],1)],1),t(n["a"],[t(_["a"]),t(i["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.closeUpdateModal()}}},[e._v(" ຍົກເລີກ ")]),t(i["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.updateItem()}}},[e._v(" ບັນທຶກ ")])],1)],1)],1)]},proxy:!0}])}),t("ModalDelete",[[t(n["a"],[t(_["a"]),t(i["a"],{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v(" Cancel ")]),t(i["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.deleteItemConfirm}},[e._v(" OK ")]),t(_["a"])],1)]],2)],1)},b=[],x=(s("14d9"),s("6eceb")),y={title(){return"Vientiane Waste Co-Dev|Team"},name:"User",data(){return{headers:[{text:"ຊື່ທີມ",value:"name"},{text:"ພະນັກງານຂັບລົດ",value:"driver.name"},{text:"ທະບຽນລົດ",value:"driver.vehicle.car_number"},{text:"ສະຖານະ",value:"driver.status",sortable:!1},{text:"",value:"actions",sortable:!1}],loading:!1,status:!1,data:[],edit_user:{},userID:"",server_errors:{},teamName:"",driver:[],selectedDriver:"",offset:12,pagination:{},per_page:100,search:"",oldVal:"",teamRules:[e=>!!e||"Team name is required"],driverRules:[e=>!!e||"Driver is required"]}},watch:{selectedStatus(){this.fetchData()},teamName(){this.server_errors.name=""},selectedDriver(){this.server_errors.driver_id=""},"edit_user.name":function(){this.server_errors.name=""},"edit_user.driver.id":function(){this.server_errors.driver_id=""},search(e){""==e&&this.fetchData()}},created(){this.fetchData()},methods:{fetchDriver(){this.$axios.get("driver").then(e=>{200==e.data.code&&setTimeout(()=>{this.driver=e.data.data},300)}).catch({})},openAddModal(){this.fetchDriver(),this.$store.commit("modalAdd_State",!0)},AddItem(){1==this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.post("team",{name:this.teamName,driver_id:this.selectedDriver}).then(e=>{200==e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.closeAddModal(),this.teamName="",this.fetchData(),this.reset(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})},300)}).catch(e=>{if(this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),this.fetchData(),e.response&&422==e.response.status){const t=e.response.data.errors,s={};for(const[e,a]of Object.entries(t))s[e]=a[0];this.server_errors=s}}))},fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("team",{params:{page:this.pagination.current_page,per_page:this.per_page,filter:this.search}}).then(e=>{200==e.data.code&&(this.$store.commit("Loading_State",!1),this.$store.commit("Loading_State",!1),this.data=e.data.data.data,this.pagination=e.data.data.pagination)}).catch(e=>{if(this.$store.commit("Loading_State",!1),e.response&&422==e.response.status){const t=e.response.data.errors;for(const[e,s]of Object.entries(t))this.server_errors[e]=s[0]}})},closeAddModal(){this.$store.commit("modalAdd_State",!1)},OpenModalEdit(e){this.fetchDriver(),this.edit_user=e,this.$store.commit("modalEdit_State",!0)},updateItem(){1==this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.put("team/"+this.edit_user.id,{name:this.edit_user.name,driver_id:this.edit_user.driver.id}).then(e=>{200==e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.closeUpdateModal(),this.fetchData(),this.reset(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})},300)}).catch(e=>{if(this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),e.response&&422==e.response.status){const t=e.response.data.errors;for(const[e,s]of Object.entries(t))this.server_errors[e]=s[0]}}))},closeUpdateModal(){this.$store.commit("modalEdit_State",!1)},closeDelete(){this.$store.commit("modalDelete_State",!1)},deleteItem(e){this.userID=e,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm(){this.$store.commit("Loading_State",!0),this.$axios.delete("team/"+this.userID).then(e=>{200==e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.$store.commit("modalDelete_State",!1),this.fetchData(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})},300)}).catch(e=>{this.fetchData(),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),this.$store.commit("modalDelete_State",!1),this.$store.commit("Loading_State",!1)})},viewPage(e){this.$router.push({name:"TeamDetail",params:{id:e}})},reset(){this.$refs.form.reset()},Search(){Object(x["a"])(this)}}},D=y,$=(s("ff51"),s("2877")),k=Object($["a"])(D,S,b,!1,null,null,null);t["default"]=k.exports},a523:function(e,t,s){"use strict";s("20f6"),s("4b85");var a=s("2b0e");function i(e){return a["a"].extend({name:"v-"+e,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:s,data:a,children:i}){a.staticClass=`${e} ${a.staticClass||""}`.trim();const{attrs:r}=a;if(r){a.attrs={};const e=Object.keys(r).filter(e=>{if("slot"===e)return!1;const t=r[e];return e.startsWith("data-")?(a.attrs[e]=t,!1):t||"string"===typeof t});e.length&&(a.staticClass+=" "+e.join(" "))}return s.id&&(a.domProps=a.domProps||{},a.domProps.id=s.id),t(s.tag,a,i)}})}var r=s("d9f7");t["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:t,data:s,children:a}){let i;const{attrs:n}=s;return n&&(s.attrs={},i=Object.keys(n).filter(e=>{if("slot"===e)return!1;const t=n[e];return e.startsWith("data-")?(s.attrs[e]=t,!1):t||"string"===typeof t})),t.id&&(s.domProps=s.domProps||{},s.domProps.id=t.id),e(t.tag,Object(r["a"])(s,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(i||[])}),a)}})},c6a6:function(e,t,s){"use strict";s("2bfd");var a=s("b974"),i=s("8654"),r=s("d9f7"),n=s("80d2");const o={...a["b"],offsetY:!0,offsetOverflow:!0,transition:!1};t["a"]=a["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:a["a"].options.props.menuProps.type,default:()=>o},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(n["r"])(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=a["a"].options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...o,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=a["a"].options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){if(e!==t){if(!this.autoSelectFirst){const s=t[this.$refs.menu.listIndex];s?this.setMenuIndex(e.findIndex(e=>e===s)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&e.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===n["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===n["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==n["y"].backspace&&e!==n["y"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const a=this.selectedItems.length,i=e!==a-1?e:e-1,r=this.selectedItems[i];r?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=i},clearableCallback(){this.internalSearch=null,a["a"].options.methods.clearableCallback.call(this)},genInput(){const e=i["a"].options.methods.genInput.call(this);return e.data=Object(r["a"])(e.data,{attrs:{"aria-activedescendant":Object(n["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(n["p"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=a["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?a["a"].options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[n["y"].home,n["y"].end].includes(t)||a["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){a["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){a["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){a["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,s;if(-1===this.selectedIndex)return;const a=this.selectedItems[this.selectedIndex],i=this.getText(a);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",i),null===(s=e.clipboardData)||void 0===s||s.setData("text/vnd.vuetify.autocomplete.item+plain",i),e.preventDefault()}}})},e2fa:function(e,t,s){},ff51:function(e,t,s){"use strict";s("e2fa")}}]);
//# sourceMappingURL=chunk-f81de88a.7621c98c.js.map