(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4beb636a"],{1338:function(t,e,n){"use strict";n("98bc")},"1f4f":function(t,e,n){"use strict";var a=n("5530"),s=(n("a9e3"),n("8b37"),n("80d2")),i=n("7560"),r=n("58df");e["a"]=Object(r["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(a["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(s["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"2bfd":function(t,e,n){},"3c4d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"mb-n6"},[n("v-col",[n("v-btn",{staticClass:"btn-primary",attrs:{loading:t.loading,disabled:t.loading},on:{click:t.exportData}},[t._v("Export ")])],1),n("v-col",[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"ເລີ່ມວັນທີ",readonly:"",outlined:"",dense:""},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}},"v-text-field",s,!1),a))]}}]),model:{value:t.start_menu,callback:function(e){t.start_menu=e},expression:"start_menu"}},[n("v-date-picker",{on:{input:function(e){return t.fetchData()}},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}})],1)],1),n("v-col",[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"ຫາວັນທີ",readonly:"",outlined:"",dense:""},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}},"v-text-field",s,!1),a))]}}]),model:{value:t.end_menu,callback:function(e){t.end_menu=e},expression:"end_menu"}},[n("v-date-picker",{on:{input:function(e){return t.fetchData()}},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}})],1)],1),n("v-col",[n("v-autocomplete",{attrs:{outlined:"",dense:"",items:t.customer_types,"item-text":"display","item-value":"name",label:"ປະເພດການເກັບ"},model:{value:t.selectedCustomerType,callback:function(e){t.selectedCustomerType=e},expression:"selectedCustomerType"}})],1),n("v-col",[n("v-autocomplete",{attrs:{outlined:"",dense:"",items:t.drivers,"item-text":"name","item-value":"id",label:"ເລືອກຄົນຂັບ"},model:{value:t.selectedDriver,callback:function(e){t.selectedDriver=e},expression:"selectedDriver"}})],1)],1),n("v-row",[n("v-col",t._l(t.customers,(function(e){return n("div",{key:e.id,attrs:{"fixed-header":""}},[n("v-row",[n("v-col",[n("v-card",[n("v-simple-table",[n("thead",[n("tr",[n("th",{staticStyle:{"background-color":"cadetblue"},attrs:{colspan:"11"}},[t._v(t._s(e.name))])]),n("tr",[n("th",[t._v("ລົງເກັບທັງໝົດ(ຄັ້ງ)")]),n("th",[t._v("ລົງເກັບຄົວເຮືອນ(ຄັ້ງ)")]),n("th",[t._v("ລົງເກັບຄອນເທນເນີ(ຄັ້ງ)")]),n("th",[t._v("ລົງເກັບເປັນຖ້ຽວ(ຄັ້ງ)")]),n("th",[t._v("ລົງເກັບມອບເໝົາ(ຄັ້ງ)")]),n("th",[t._v("ລົງເກັບບໍລິມາດ(ຄັ້ງ)")]),n("th",[t._v("ລົງເກັບພິເສດ(ຄັ້ງ)")]),n("th",[t._v("ຈຳນວນຄອນເທນເນີ")]),n("th",[t._v("ຈຳນວນຖົງ(ຄົວເຮືອນ)")]),n("th",[t._v("ຈຳນວນຖົງ(ບໍລິມາດ)")]),n("th",[t._v("ຈຳນວນຖົງ(ມອບເໝົາ)")])])]),n("tbody",[n("tr",[n("td",[t._v(t._s(e.time))]),n("td",[t._v(t._s(e.home_bag_time))]),n("td",[t._v(t._s(e.container_time))]),n("td",[t._v(t._s(e.fix_cost))]),n("td",[t._v(t._s(e.chartered_time))]),n("td",[t._v(t._s(e.bag_time))]),n("td",[t._v(t._s(e.events))]),n("td",[t._v(t._s(e.container))]),n("td",[t._v(t._s(e.home_bag))]),n("td",[t._v(t._s(e.bag))]),n("td",[t._v(t._s(e.chartered))])])])])],1)],1)],1),n("v-row",[n("v-col",[n("v-card",t._l(e.collected_villages,(function(e){return n("div",{key:e.id},[n("v-card",[n("v-row",[n("v-col",[n("v-simple-table",[n("thead",[n("tr",[n("th",{staticStyle:{"background-color":"aqua"},attrs:{colspan:"11"}},[t._v(" "+t._s(e.name+" "+e.district_name)+" ")])]),n("tr",[n("th",[t._v("ລົງເກັບທັງໝົດ(ຄັ້ງ)")]),n("th",[t._v("ລົງເກັບຄົວເຮືອນ(ຄັ້ງ)")]),n("th",[t._v("ລົງເກັບຄອນເທນເນີ(ຄັ້ງ)")]),n("th",[t._v("ລົງເກັບເປັນຖ້ຽວ(ຄັ້ງ)")]),n("th",[t._v("ລົງເກັບມອບເໝົາ(ຄັ້ງ)")]),n("th",[t._v("ລົງເກັບບໍລິມາດ(ຄັ້ງ)")]),n("th",[t._v("ລົງເກັບພິເສດ(ຄັ້ງ)")]),n("th",[t._v("ຈຳນວນຄອນເທນເນີ")]),n("th",[t._v("ຈຳນວນຖົງ(ຄົວເຮືອນ)")]),n("th",[t._v("ຈຳນວນຖົງ(ບໍລິມາດ)")]),n("th",[t._v("ຈຳນວນຖົງ(ມອບເໝົາ)")])])]),n("tbody",[n("tr",[n("td",[t._v(t._s(e.time))]),n("td",[t._v(t._s(e.home_bag_time))]),n("td",[t._v(t._s(e.container_time))]),n("td",[t._v(t._s(e.fix_cost))]),n("td",[t._v(t._s(e.chartered_time))]),n("td",[t._v(t._s(e.bag_time))]),n("td",[t._v(t._s(e.events))]),n("td",[t._v(t._s(e.container))]),n("td",[t._v(t._s(e.home_bag))]),n("td",[t._v(t._s(e.bag))]),n("td",[t._v(t._s(e.chartered))])])])])],1)],1),n("v-row",[n("v-col",t._l(e.dates,(function(e){return n("v-simple-table",{key:e.date},[n("thead",[n("tr",[n("th",{staticStyle:{"background-color":"aquamarine"},attrs:{colspan:"11"}},[t._v(t._s(e.date))])]),e.details.length>0?n("tr",[n("th",[t._v("ຊື່ລູກຄ້າ")]),n("th",[t._v("ປະເພດລູກຄ້າ")]),n("th",[t._v("ປະເພດບໍລິການ")]),n("th",[t._v("ຂີ້ເຫຍື້ອຄາດໝາຍ")]),n("th",[t._v("ຈຳນວນຖົງ")]),n("th",[t._v("ຈຳນວນຄອນເທນເນີ")]),n("th",[t._v("ສະຖານະ")]),n("th",[t._v("ເວລາເກັບແລ້ວ")])]):t._e()]),n("tbody",t._l(e.details,(function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s("company"==e.customer.customer_type?e.customer.company_name:e.customer.name+" "+e.customer.surname)+" ")]),n("td",[t._v(t._s(e.customer.customer_type_la))]),n("td",[t._v(t._s("company"==e.customer.customer_type?e.customer.cost_by_la:""))]),n("td",[t._v(t._s(e.customer.expect_trash?e.customer.expect_trash:""))]),n("td",[t._v(t._s(e.bag))]),n("td",[t._v(t._s(e.container))]),n("td",[t._v(t._s(e.status_la))]),n("td",[t._v(t._s(e.collected_at))])])})),0),e.events.length>0?n("v-simple-table",[n("thead",[n("tr",[n("th",{staticStyle:{"background-color":"cornflowerblue"},attrs:{colspan:"11"}},[t._v("ເກັບຂີ້ເຫຍື້ອພິເສດ")])]),n("tr",[n("th",[t._v("ຊື່ລູກຄ້າ")]),n("th",[t._v("ເບີໂທ")]),n("th",[t._v("ສະຖານະ")]),n("th",[t._v("ເວລາເກັບແລ້ວ")])])]),n("tbody",t._l(e.events,(function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e.name+" "+e.surname))]),n("td",[t._v(t._s(e.phone))]),n("td",[t._v(t._s(e.collect_status_la))]),n("td",[t._v(t._s(e.collected_at))])])})),0)]):t._e()],1)})),1)],1)],1)],1)})),0)],1)],1)],1)})),0)],1)],1)},s=[],i=n("b85c"),r=(n("b0c0"),n("54da")),o=n("6eceb"),c={name:"Customer",title:function(){return"Vientiane Waste Co-Dev|Report Customer"},data:function(){return{start_date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),end_date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),start_menu:!1,end_menu:!1,export:"",customers:[],driverLists:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",car_id:"",selectedCustomerType:"home",selectedDriver:"",customer_types:[{name:"home",display:"ຄົວເຮືອນ"},{name:"company",display:"ຫົວໜ່ວຍທຸລະກິດ"},{name:"new_collection_event",display:"ຖ້ຽວພິເສດ"}]}},computed:{drivers:function(){var t,e=[],n=Object(i["a"])(this.driverLists);try{for(n.s();!(t=n.n()).done;){var a=t.value;e.push({id:a.id,name:a.name+" "+a.surname+" ("+a.vehicle.car_id+")"})}}catch(s){n.e(s)}finally{n.f()}return e}},methods:{fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("report-driver-collection",{params:Object(r["a"])([{date_from:this.start_date},{date_to:this.end_date},{driver_id:this.selectedDriver},{type:this.selectedCustomerType},{download:this.export}])}).then((function(e){200==e.data.code&&(t.$store.commit("Loading_State",!1),e.data.data.download_link?(window.open(e.data.data.download_link),t.export=""):t.customers=e.data.data)})).catch((function(){t.$store.commit("Loading_State",!1),t.export="",t.start_menu=!1,t.end_menu=!1}))},fetchDriver:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("driver").then((function(e){200==e.data.code&&(t.$store.commit("Loading_State",!1),t.driverLists=e.data.data)})).catch((function(){t.$store.commit("Loading_State",!1),t.start_menu=!1,t.end_menu=!1}))},exportData:function(){this.export="excel",this.fetchData()},Search:function(){Object(o["a"])(this)}},watch:{search:function(t){""!=t&&this.fetchData()},selectedDriver:function(){this.fetchData()},selectedCustomerType:function(){this.fetchData()}},created:function(){this.fetchData(),this.fetchDriver()}},l=c,d=(n("1338"),n("2877")),u=n("6544"),h=n.n(u),m=n("c6a6"),v=n("8336"),_=n("b0af"),f=n("62ad"),p=n("a523"),b=n("2e4b"),g=n("e449"),y=n("0fd9"),I=n("1f4f"),x=n("8654"),S=Object(d["a"])(l,a,s,!1,null,null,null);e["default"]=S.exports;h()(S,{VAutocomplete:m["a"],VBtn:v["a"],VCard:_["a"],VCol:f["a"],VContainer:p["a"],VDatePicker:b["a"],VMenu:g["a"],VRow:y["a"],VSimpleTable:I["a"],VTextField:x["a"]})},"54da":function(t,e,n){"use strict";var a=n("b85c");n("b64b");e["a"]=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n={},s=Object(a["a"])(e);try{for(s.s();!(t=s.n()).done;){var i=t.value;1==Object.keys(i).length&&i[Object.keys(i)]&&(n[Object.keys(i)]=i[Object.keys(i)])}}catch(r){s.e(r)}finally{s.f()}return n}},"6eceb":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("ac1f"),n("841c");var a=function(t){""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},"841c":function(t,e,n){"use strict";var a=n("d784"),s=n("825a"),i=n("1d80"),r=n("129f"),o=n("577e"),c=n("dc4a"),l=n("14c3");a("search",(function(t,e,n){return[function(e){var n=i(this),a=void 0==e?void 0:c(e,t);return a?a.call(e,n):new RegExp(e)[t](o(n))},function(t){var a=s(this),i=o(t),c=n(e,a,i);if(c.done)return c.value;var d=a.lastIndex;r(d,0)||(a.lastIndex=0);var u=l(a,i);return r(a.lastIndex,d)||(a.lastIndex=d),null===u?-1:u.index}]}))},"8b37":function(t,e,n){},"98bc":function(t,e,n){},afdd:function(t,e,n){"use strict";var a=n("8336");e["a"]=a["a"]},c6a6:function(t,e,n){"use strict";var a=n("5530"),s=(n("d81d"),n("4de4"),n("498a"),n("7db0"),n("caad"),n("2532"),n("2bfd"),n("b974")),i=n("8654"),r=n("d9f7"),o=n("80d2"),c=Object(a["a"])(Object(a["a"])({},s["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=s["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:s["a"].options.props.menuProps.type,default:function(){return c}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(o["r"])(e,t.itemText),a=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),a)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=s["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(a["a"])(Object(a["a"])({},c),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=s["a"].options.computed.listData.call(this);return t.props=Object(a["a"])(Object(a["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===o["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===o["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==o["y"].backspace&&t!==o["y"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var a=this.selectedItems.length,s=t!==a-1?t:t-1,i=this.selectedItems[s];i?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=s}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,s["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.data=Object(r["a"])(t.data,{attrs:{"aria-activedescendant":Object(o["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(o["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=s["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?s["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[o["y"].home,o["y"].end].includes(e)||s["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){s["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){s["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){s["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var a=this.selectedItems[this.selectedIndex],s=this.getText(a);null==(e=t.clipboardData)||e.setData("text/plain",s),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",s),t.preventDefault()}}}})}}]);
//# sourceMappingURL=chunk-4beb636a.6e104bbe.js.map