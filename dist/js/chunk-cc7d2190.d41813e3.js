(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc7d2190"],{"1f4f":function(t,e,a){"use strict";var s=a("5530"),n=(a("a9e3"),a("8b37"),a("80d2")),i=a("7560"),l=a("58df");e["a"]=Object(l["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(s["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"2bfd":function(t,e,a){},"4fad":function(t,e,a){var s=a("23e7"),n=a("6f53").entries;s({target:"Object",stat:!0},{entries:function(t){return n(t)}})},"54da":function(t,e,a){"use strict";var s=a("b85c");a("b64b");e["a"]=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a={},n=Object(s["a"])(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;1==Object.keys(i).length&&i[Object.keys(i)]&&(a[Object.keys(i)]=i[Object.keys(i)])}}catch(l){n.e(l)}finally{n.f()}return a}},"6c96":function(t,e,a){"use strict";a("7208")},7208:function(t,e,a){},"7f74":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"mb-n6"},[a("v-col",[a("v-btn",{staticClass:"btn-primary",attrs:{loading:t.loading,disabled:t.loading},on:{click:t.exportData}},[t._v("Export ")])],1),a("v-col",[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"ເລີ່ມວັນທີ",readonly:"",outlined:"",dense:""},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}},"v-text-field",n,!1),s))]}}]),model:{value:t.start_menu,callback:function(e){t.start_menu=e},expression:"start_menu"}},[a("v-date-picker",{on:{input:function(e){return t.fetchData()}},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}})],1)],1),a("v-col",[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"ຫາວັນທີ",readonly:"",outlined:"",dense:""},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}},"v-text-field",n,!1),s))]}}]),model:{value:t.end_menu,callback:function(e){t.end_menu=e},expression:"end_menu"}},[a("v-date-picker",{on:{input:function(e){return t.fetchData()}},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}})],1)],1),a("v-col",[a("v-autocomplete",{attrs:{outlined:"",dense:"",items:t.customer_types,"item-text":"display","item-value":"name",label:"ປະເພດລູກຄ້າ"},model:{value:t.selectedCustomerType,callback:function(e){t.selectedCustomerType=e},expression:"selectedCustomerType"}})],1)],1),a("div",[a("v-card",[a("v-card-text",["home"==t.selectedCustomerType?a("v-simple-table",{attrs:{"fixed-header":""}},[a("thead",[a("tr",[a("th",{staticClass:"text-left text-table-header"},[t._v(" Village ")]),a("th",{staticClass:"text-left text-table-header"},[t._v(" District ")]),a("th",{staticClass:"text-left text-table-header"},[t._v(" Bags ")]),a("th",{staticClass:"text-left text-table-header"},[t._v(" Amount ")])])]),a("tbody",t._l(t.customers,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.village_name)+" ")]),a("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.district_name)+" ")]),a("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.bags)+" ")]),a("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.amount)+" ")])])})),0)]):t._e(),"company"==t.selectedCustomerType?a("v-simple-table",{attrs:{"fixed-header":"",dense:""}},[a("thead",[a("tr",[a("th",{staticClass:"text-left text-table-header"},[t._v(" Village ")]),a("th",{staticClass:"text-left text-table-header"},[t._v(" District ")]),a("th",{staticClass:"text-left text-table-header"},[t._v(" Bags ")]),a("th",{staticClass:"text-left text-table-header"},[t._v(" Amount ")])])]),a("tbody",t._l(t.customers,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.village_name)+" ")]),a("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.district_name)+" ")]),a("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.bags)+" ")]),a("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.amount)+" ")])])})),0)]):t._e()],1)],1)],1)],1)},n=[],i=a("3835"),l=(a("4fad"),a("54da")),o={name:"Customer",title:function(){return"Vientiane Waste Co-Dev|Report Customer"},data:function(){return{start_date:"",end_date:"",start_menu:!1,end_menu:!1,customers:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",selectedCustomerType:"home",customer_types:[{name:"home",display:"ຄົວເຮືອນ"},{name:"company",display:"ບໍລິສັດ"},{name:"event",display:"Event"}],headers:[{text:"ຊື່",value:"driver_name"},{text:"Car ID",value:"vehicle_car_id",sortable:!1},{text:"Total",value:"total"},{text:"Created",value:"created_at",sortable:!1},{text:"",value:"actions",sortable:!1}]}},methods:{fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("report-address-collection",{params:Object(l["a"])([{date_from:this.start_date},{date_end:this.end_date},{customer_type:this.selectedCustomerType}])}).then((function(e){200==e.data.code&&(t.$store.commit("Loading_State",!1),t.customers=e.data.data.data,console.log(t.customers))})).catch((function(e){if(t.$store.commit("Loading_State",!1),t.start_menu=!1,t.end_menu=!1,422==e.response.status)for(var a=e.response.data.errors,s=0,n=Object.entries(a);s<n.length;s++){var l=Object(i["a"])(n[s],2),o=l[0],r=l[1];t.server_errors[o]=r[0]}}))},viewPage:function(t){this.$router.push({name:"ViewCompanyDetail",params:{id:t}})},exportData:function(){var t=this;this.loading=!0,this.$axios.get("report-driver-collection/",{params:Object(l["a"])([{date_from:this.start_date},{date_end:this.end_date},{download:"excel"},{customer_type:this.selectedCustomerType}])},{responseType:"blob"}).then((function(e){200==e.status&&(window.open(e.data.data.download_link),t.loading=!1)})).catch((function(){t.$store.commit("modalDelete_State",!1),t.loading=!1}))}},watch:{selectedCustomerType:function(){this.fetchData()}},created:function(){this.fetchData()}},r=o,c=(a("6c96"),a("2877")),d=a("6544"),u=a.n(d),h=a("c6a6"),m=a("8336"),f=a("b0af"),p=a("99d9"),v=a("62ad"),b=a("a523"),x=a("2e4b"),_=a("e449"),g=a("0fd9"),y=a("1f4f"),I=a("8654"),S=Object(c["a"])(r,s,n,!1,null,null,null);e["default"]=S.exports;u()(S,{VAutocomplete:h["a"],VBtn:m["a"],VCard:f["a"],VCardText:p["b"],VCol:v["a"],VContainer:b["a"],VDatePicker:x["a"],VMenu:_["a"],VRow:g["a"],VSimpleTable:y["a"],VTextField:I["a"]})},"8b37":function(t,e,a){},afdd:function(t,e,a){"use strict";var s=a("8336");e["a"]=s["a"]},c6a6:function(t,e,a){"use strict";var s=a("5530"),n=(a("d81d"),a("4de4"),a("498a"),a("7db0"),a("caad"),a("2532"),a("2bfd"),a("b974")),i=a("8654"),l=a("d9f7"),o=a("80d2"),r=Object(s["a"])(Object(s["a"])({},n["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=n["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,a){return a.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:n["a"].options.props.menuProps.type,default:function(){return r}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var a=Object(o["r"])(e,t.itemText),s=null!=a?String(a):"";return t.filter(e,String(t.internalSearch),s)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=n["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(s["a"])(Object(s["a"])({},r),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=n["a"].options.computed.listData.call(this);return t.props=Object(s["a"])(Object(s["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var a=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){a.internalSearch&&(1===t.length||a.autoSelectFirst)&&(a.$refs.menu.getTiles(),a.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===o["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===o["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==o["y"].backspace&&t!==o["y"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var a=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===a){var s=this.selectedItems.length,n=t!==s-1?t:t-1,i=this.selectedItems[n];i?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=n}else this.selectedIndex=a}},clearableCallback:function(){this.internalSearch=null,n["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.data=Object(l["a"])(t.data,{attrs:{"aria-activedescendant":Object(o["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(o["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=n["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?n["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,a=e.value;e.value&&this.activateMenu(),this.internalSearch=a,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[o["y"].home,o["y"].end].includes(e)||n["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){n["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){n["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){n["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,a;if(-1!==this.selectedIndex){var s=this.selectedItems[this.selectedIndex],n=this.getText(s);null==(e=t.clipboardData)||e.setData("text/plain",n),null==(a=t.clipboardData)||a.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}}})}}]);
//# sourceMappingURL=chunk-cc7d2190.d41813e3.js.map