(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f4f59dc"],{"0fdf":function(t,e,s){},1822:function(t,e,s){"use strict";var a=s("07b0");e["a"]=a["a"]},"1fb4":function(t,e,s){"use strict";s.r(e);var a=s("a892"),l=s("07b0"),i=s("db5a"),n=s("0f35"),r=s("28e8"),c=s("1da9"),o=s("1789"),d=s("d415"),h=s("fde7"),u=s("d62f"),_=s("a729"),m=s("9b44"),p=function(){var t=this,e=t._self._c;return e(o["a"],[e(u["a"],{staticClass:"mb-n6"},[e(c["a"],[e(l["a"],{staticClass:"btn-primary",attrs:{loading:t.loading,disabled:t.loading},on:{click:t.exportData}},[t._v(" Export ")])],1),e(c["a"],[e(h["a"],{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e(m["a"],t._g(t._b({attrs:{label:"ເລີ່ມວັນທີ",readonly:"",outlined:"",dense:""},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}},"v-text-field",a,!1),s))]}}]),model:{value:t.start_menu,callback:function(e){t.start_menu=e},expression:"start_menu"}},[e(d["a"],{on:{input:function(e){return t.fetchData()}},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}})],1)],1),e(c["a"],[e(h["a"],{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e(m["a"],t._g(t._b({attrs:{label:"ຫາວັນທີ",readonly:"",outlined:"",dense:""},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}},"v-text-field",a,!1),s))]}}]),model:{value:t.end_menu,callback:function(e){t.end_menu=e},expression:"end_menu"}},[e(d["a"],{on:{input:function(e){return t.fetchData()}},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}})],1)],1),e(c["a"],[e(a["a"],{attrs:{outlined:"",dense:"",items:t.customer_types,"item-text":"display","item-value":"name",label:"ປະເພດລູກການເກັບ"},model:{value:t.selectedCustomerType,callback:function(e){t.selectedCustomerType=e},expression:"selectedCustomerType"}})],1),e(c["a"],[e(m["a"],{attrs:{clearable:"",outlined:"",dense:"","prepend-inner-icon":"mdi-magnify",label:"Car Id","single-line":"","hide-details":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.fetchData()}},model:{value:t.car_id,callback:function(e){t.car_id=e},expression:"car_id"}})],1),e(c["a"],[e(m["a"],{attrs:{clearable:"",outlined:"",dense:"","prepend-inner-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),e("div",[e(i["a"],[e(n["b"],["home"==t.selectedCustomerType?e(_["a"],{attrs:{"fixed-header":""}},[e("thead",[e("tr",[e("th",{staticClass:"text-left text-table-header"},[t._v(" Driver ")]),e("th",{staticClass:"text-left text-table-header"},[t._v(" ບ້ານ ")]),e("th",{staticClass:"text-left text-table-header"},[t._v(" ເມືອງ ")]),e("th",{staticClass:"text-left text-table-header"},[t._v(" ຈຳນວນ ")]),e("th",{staticClass:"text-left text-table-header"},[t._v(" ຖົງ ")]),e("th",{staticClass:"text-center text-table-header"},[t._v(" ລວມຖົງ ")])])]),e("tbody",[t._l(t.customers,(function(s){return t._l(s.data,(function(a,l){return e("tr",{key:l.id},[0===l?e("td",{attrs:{rowspan:s.data.length}},[t._v(" "+t._s(s.driver_name)+" ("+t._s(s.vehicle_car_id)+") ")]):t._e(),e("td",[t._v(" "+t._s(a.village_name)+" ")]),e("td",[t._v(" "+t._s(a.district_name)+" ")]),e("td",[t._v(" "+t._s(a.amount)+" ")]),e("td",[t._v(" "+t._s(a.bags)+" ")]),0===l?e("td",{staticClass:"text-center",attrs:{rowspan:s.data.length}},[e(r["a"],{attrs:{color:"success"}},[t._v(" "+t._s(s.total)+" ")])],1):t._e()])}))}))],2)]):t._e(),"company"==t.selectedCustomerType?e(_["a"],{attrs:{"fixed-header":"",dense:""}},[e("thead",[e("tr",[e("th",{staticClass:"text-left text-table-header"},[t._v(" Driver ")]),e("th",{staticClass:"text-left text-table-header"},[t._v(" ບ້ານ ")]),e("th",{staticClass:"text-left text-table-header"},[t._v(" ເມືອງ ")]),e("th",{staticClass:"text-left text-table-header"},[t._v(" ຈຳນວນຕູ້ຄອນເທນເນີ ")]),e("th",{staticClass:"text-left text-table-header"},[t._v(" ຈຳນວນຕູ້ຄອນເທນເນີທັງໝົດ ")]),e("th",{staticClass:"text-left text-table-header"},[t._v(" ຄັ້ງລົງເກັບ (ປະເພດເປັນຖ້ຽວ) ")]),e("th",{staticClass:"text-left text-table-header"},[t._v(" ຄັ້ງລົງເກັບທັງໝົດ (ປະເພດເປັນຖ້ຽວ) ")]),e("th",{staticClass:"text-left text-table-header"},[t._v(" ຈຳນວນຖົງ (ມອບເໝົາ) ")]),e("th",{staticClass:"text-left text-table-header"},[t._v(" ຈຳນວນຖົງທັງໝົດ (ມອບເໝົາ) ")]),e("th",{staticClass:"text-left text-table-header"},[t._v(" ຈຳນວນຖົງ (ຕິດເຊື້ອ) ")]),e("th",{staticClass:"text-left text-table-header"},[t._v(" ຈຳນວນຖົງທັງໝົດ (ຕິດເຊື້ອ) ")]),e("th",{staticClass:"text-left text-table-header"},[t._v(" ຈຳນວນຖົງ (ຫຼັກ32) ")]),e("th",{staticClass:"text-left text-table-header"},[t._v(" ຈຳນວນຖົງທັງໝົດ (ຫຼັກ32) ")]),e("th",{staticClass:"text-left text-table-header"},[t._v(" ຈຳນວນຖົງ (ບໍລິມາດ) ")]),e("th",{staticClass:"text-center text-table-header"},[t._v(" ຈຳນວນຖົງທັງໝົດ (ບໍລິມາດ) ")]),e("th",{staticClass:"text-center text-table-header"},[t._v(" ຄັ້ງລົງເກັບ (ປະເພດຄອນເທນເນີ) ")]),e("th",{staticClass:"text-center text-table-header"},[t._v(" ຄັ້ງລົງເກັບທັງໝົດ (ປະເພດຄອນເທນເນີ) ")]),e("th",{staticClass:"text-center text-table-header"},[t._v(" ຄັ້ງລົງເກັບ (ປະເພດເປັນຖ້ຽວ) ")]),e("th",{staticClass:"text-center text-table-header"},[t._v(" ຄັ້ງລົງເກັບທັງໝົດ (ປະເພດເປັນຖ້ຽວ) ")]),e("th",{staticClass:"text-center text-table-header"},[t._v(" ຄັ້ງລົງເກັບ (ບໍລິມາດ) ")]),e("th",{staticClass:"text-center text-table-header"},[t._v(" ຄັ້ງລົງເກັບທັງໝົດ (ບໍລິມາດ) ")]),e("th",{staticClass:"text-center text-table-header"},[t._v(" ຄັ້ງລົງເກັບ (ຕິດເຊື້ອ) ")]),e("th",{staticClass:"text-center text-table-header"},[t._v(" ຄັ້ງລົງເກັບທັງໝົດ (ຕິດເຊື້ອ) ")]),e("th",{staticClass:"text-center text-table-header"},[t._v(" ຄັ້ງລົງເກັບ (ຫຼັກ32) ")]),e("th",{staticClass:"text-center text-table-header"},[t._v(" ຄັ້ງລົງເກັບທັງໝົດ (ຫຼັກ32) ")]),e("th",{staticClass:"text-center text-table-header"},[t._v(" ຄັ້ງລົງເກັບທັງໝົດ (ຕາມບ້ານ) ")]),e("th",{staticClass:"text-center text-table-header"},[t._v(" ຄັ້ງລົງເກັບທັງໝົດ ")])])]),e("tbody",[t._l(t.customers,(function(s){return t._l(s.data,(function(a,l){return e("tr",{key:l.id},[0===l?e("td",{staticClass:"text-table-body",attrs:{rowspan:s.data.length}},[t._v(" "+t._s(s.driver_name)+" ("+t._s(s.vehicle_car_id)+") ")]):t._e(),e("td",{staticClass:"text-table-body"},[t._v(" "+t._s(a.village_name)+" ")]),e("td",{staticClass:"text-table-body"},[t._v(" "+t._s(a.district_name)+" ")]),e("td",{staticClass:"text-table-body"},[t._v(" "+t._s(a.subtotal_container)+" ")]),0===l?e("td",{staticClass:"text-center",attrs:{rowspan:s.data.length}},[e(r["a"],{attrs:{color:"success"}},[t._v(" "+t._s(s.total_container)+" ")])],1):t._e(),e("td",{staticClass:"text-table-body"},[t._v(" "+t._s(a.subtotal_bag_chartered)+" ")]),0===l?e("td",{staticClass:"text-center",attrs:{rowspan:s.data.length}},[e(r["a"],{attrs:{color:"success"}},[t._v(" "+t._s(s.total_bag_chartered)+" ")])],1):t._e(),e("td",{staticClass:"text-table-body"},[t._v(" "+t._s(a.subtotal_bag_infect)+" ")]),0===l?e("td",{staticClass:"text-center",attrs:{rowspan:s.data.length}},[e(r["a"],{attrs:{color:"success"}},[t._v(" "+t._s(s.total_bag_infect)+" ")])],1):t._e(),e("td",{staticClass:"text-table-body"},[t._v(" "+t._s(a.subtotal_bag_32km)+" ")]),0===l?e("td",{staticClass:"text-center",attrs:{rowspan:s.data.length}},[e(r["a"],{attrs:{color:"success"}},[t._v(" "+t._s(s.total_bag_32km)+" ")])],1):t._e(),e("td",{staticClass:"text-table-body"},[t._v(" "+t._s(a.subtotal_bag_bag)+" ")]),0===l?e("td",{staticClass:"text-center",attrs:{rowspan:s.data.length}},[e(r["a"],{attrs:{color:"success"}},[t._v(" "+t._s(s.total_bag_bag)+" ")])],1):t._e(),e("td",{staticClass:"text-table-body"},[t._v(" "+t._s(a.container_collect_time)+" ")]),0===l?e("td",{staticClass:"text-center",attrs:{rowspan:s.data.length}},[e(r["a"],{attrs:{color:"success"}},[t._v(" "+t._s(s.total_container_collect_time)+" ")])],1):t._e(),e("td",{staticClass:"text-table-body"},[t._v(" "+t._s(a.fix_cost_collect_time)+" ")]),0===l?e("td",{staticClass:"text-center",attrs:{rowspan:s.data.length}},[e(r["a"],{attrs:{color:"success"}},[t._v(" "+t._s(s.total_fix_cost_collect_time)+" ")])],1):t._e(),e("td",{staticClass:"text-table-body"},[t._v(" "+t._s(a.chartered_collect_time)+" ")]),0===l?e("td",{staticClass:"text-center",attrs:{rowspan:s.data.length}},[e(r["a"],{attrs:{color:"success"}},[t._v(" "+t._s(s.total_chartered_collect_time)+" ")])],1):t._e(),e("td",{staticClass:"text-table-body"},[t._v(" "+t._s(a.bag_collect_time)+" ")]),0===l?e("td",{staticClass:"text-center",attrs:{rowspan:s.data.length}},[e(r["a"],{attrs:{color:"success"}},[t._v(" "+t._s(s.total_bag_collect_time)+" ")])],1):t._e(),e("td",{staticClass:"text-table-body"},[t._v(" "+t._s(a.infect_collect_time)+" ")]),0===l?e("td",{staticClass:"text-center",attrs:{rowspan:s.data.length}},[e(r["a"],{attrs:{color:"success"}},[t._v(" "+t._s(s.total_infect_collect_time)+" ")])],1):t._e(),e("td",{staticClass:"text-table-body"},[t._v(" "+t._s(a._32km_collect_time)+" ")]),0===l?e("td",{staticClass:"text-center",attrs:{rowspan:s.data.length}},[e(r["a"],{attrs:{color:"success"}},[t._v(" "+t._s(s.total_32km_collect_time)+" ")])],1):t._e(),e("td",{staticClass:"text-table-body"},[t._v(" "+t._s(a.subtotal_collect_time)+" ")]),0===l?e("td",{staticClass:"text-center",attrs:{rowspan:s.data.length}},[e(r["a"],{attrs:{color:"success"}},[t._v(" "+t._s(s.total_collect_time)+" ")])],1):t._e()])}))}))],2)]):t._e(),"event"==t.selectedCustomerType?e(_["a"],{attrs:{"fixed-header":"",dense:""}},[e("thead",[e("tr",[e("th",{staticClass:"text-left text-table-header"},[t._v(" Driver ")]),e("th",{staticClass:"text-left text-table-header"},[t._v(" ບ້ານ ")]),e("th",{staticClass:"text-left text-table-header"},[t._v(" ເມືອງ ")]),e("th",{staticClass:"text-left text-table-header"},[t._v(" ຈຳນວນ ")]),e("th",{staticClass:"text-left text-table-header"},[t._v(" ທັງໝົດ ")])])]),e("tbody",[t._l(t.customers,(function(s){return t._l(s.data,(function(a,l){return e("tr",{key:l.id},[0===l?e("td",{staticClass:"text-table-body",attrs:{rowspan:s.data.length}},[t._v(" "+t._s(s.driver_name)+" ("+t._s(s.vehicle_car_id)+") ")]):t._e(),e("td",{staticClass:"text-table-body"},[t._v(" "+t._s(a.village_name)+" ")]),e("td",{staticClass:"text-table-body"},[t._v(" "+t._s(a.district_name)+" ")]),e("td",{staticClass:"text-table-body"},[t._v(" "+t._s(a.amount)+" ")]),0===l?e("td",{staticClass:"text-table-body",attrs:{rowspan:s.data.length}},[e(r["a"],{attrs:{color:"success"}},[t._v(" "+t._s(s.total)+" ")])],1):t._e()])}))}))],2)]):t._e()],1)],1)],1)],1)},x=[],b=s("54da"),v=s("6ece"),f={name:"Customer",title(){return"Vientiane Waste Co-Dev|Report Customer"},data(){return{start_date:"",end_date:"",start_menu:!1,end_menu:!1,customers:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:100,search:"",oldVal:"",car_id:"",selectedCustomerType:"home",customer_types:[{name:"home",display:"ຄົວເຮືອນ"},{name:"company",display:"ຫົວໜ່ວຍທຸລະກິດ"},{name:"event",display:"ຖ້ຽວພິເສດ"}]}},watch:{search(t){""==t&&this.fetchData()},car_id(t){""==t&&this.fetchData()},selectedCustomerType(){this.fetchData()}},created(){this.fetchData()},methods:{fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("report-driver-collection",{params:Object(b["a"])([{date_from:this.start_date},{date_to:this.end_date},{filter:this.search},{car_id:this.car_id},{customer_type:this.selectedCustomerType}])}).then(t=>{200==t.data.code&&(this.$store.commit("Loading_State",!1),this.customers=t.data.data.data)}).catch(()=>{this.$store.commit("Loading_State",!1),this.start_menu=!1,this.end_menu=!1})},exportData(){this.$store.commit("Loading_State",!0),this.$axios.get("report-driver-collection/",{params:Object(b["a"])([{download:"excel"},{customer_type:this.selectedCustomerType}])},{responseType:"blob"}).then(t=>{200==t.status&&(null!=t.data.data.download_link&&window.open(t.data.data.download_link),this.$store.commit("Loading_State",!1))}).catch(()=>{this.$store.commit("modalDelete_State",!1),this.$store.commit("Loading_State",!1)})},Search(){Object(v["a"])(this)}}},g=f,y=(s("71c6"),s("4a4e")),C=Object(y["a"])(g,p,x,!1,null,null,null);e["default"]=C.exports},"54da":function(t,e,s){"use strict";e["a"]=function(t){const e={};if(!t[0]){for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&(void 0!==t[e]&&null!==t[e]&&""!==t[e]||delete t[e]);return t}for(const s of t)1==Object.keys(s).length&&s[Object.keys(s)]&&(e[Object.keys(s)]=s[Object.keys(s)]);return e}},"689e":function(t,e,s){},"6ece":function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));const a=t=>{""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},"71c6":function(t,e,s){"use strict";s("bad8")},a729:function(t,e,s){"use strict";s("689e");var a=s("dd08"),l=s("710c"),i=s("9c0c");e["a"]=Object(i["a"])(l["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(a["h"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},a892:function(t,e,s){"use strict";s("0fdf");var a=s("26bf"),l=s("9b44"),i=s("ed44"),n=s("dd08");const r={...a["b"],offsetY:!0,offsetOverflow:!0,transition:!1};e["a"]=a["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,s)=>s.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:a["a"].options.props.menuProps.type,default:()=>r},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>{const e=Object(n["r"])(t,this.itemText),s=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=a["a"].options.computed.$_menuProps.call(this);return t.contentClass=("v-autocomplete__content "+(t.contentClass||"")).trim(),{...r,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue)))},listData(){const t=a["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){if(t!==e){if(!this.autoSelectFirst){const s=e[this.$refs.menu.listIndex];s?this.setMenuIndex(t.findIndex(t=>t===s)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&t.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===n["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===n["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==n["y"].backspace&&t!==n["y"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const a=this.selectedItems.length,l=t!==a-1?t:t-1,i=this.selectedItems[l];i?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=l},clearableCallback(){this.internalSearch=null,a["a"].options.methods.clearableCallback.call(this)},genInput(){const t=l["a"].options.methods.genInput.call(this);return t.data=Object(i["a"])(t.data,{attrs:{"aria-activedescendant":Object(n["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(n["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=a["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?a["a"].options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,s=e.value;e.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[n["y"].home,n["y"].end].includes(e)||a["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){a["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){a["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){a["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,s;if(-1===this.selectedIndex)return;const a=this.selectedItems[this.selectedIndex],l=this.getText(a);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",l),null===(s=t.clipboardData)||void 0===s||s.setData("text/vnd.vuetify.autocomplete.item+plain",l),t.preventDefault()}}})},bad8:function(t,e,s){}}]);
//# sourceMappingURL=chunk-3f4f59dc.b930dce9.js.map