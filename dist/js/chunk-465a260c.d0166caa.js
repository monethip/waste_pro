(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-465a260c"],{"1f4f":function(t,e,s){"use strict";var a=s("5530"),n=(s("a9e3"),s("8b37"),s("80d2")),i=s("7560"),l=s("58df");e["a"]=Object(l["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(a["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"2bfd":function(t,e,s){},"54da":function(t,e,s){"use strict";var a=s("b85c");s("b64b");e["a"]=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s={},n=Object(a["a"])(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;1==Object.keys(i).length&&i[Object.keys(i)]&&(s[Object.keys(i)]=i[Object.keys(i)])}}catch(l){n.e(l)}finally{n.f()}return s}},"6c96":function(t,e,s){"use strict";s("7208")},7208:function(t,e,s){},"7f74":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-row",{staticClass:"mb-n6"},[s("v-col",[s("v-btn",{staticClass:"btn-primary",attrs:{loading:t.loading,disabled:t.loading},on:{click:t.exportData}},[t._v("Export ")])],1),s("v-col",[s("v-autocomplete",{attrs:{outlined:"",dense:"",items:t.customer_types,"item-text":"display","item-value":"name",label:"ປະເພດລູກຄ້າ"},model:{value:t.selectedCustomerType,callback:function(e){t.selectedCustomerType=e},expression:"selectedCustomerType"}})],1)],1),s("div",[s("v-card",[s("v-card-text",["home"==t.selectedCustomerType?s("v-simple-table",{attrs:{"fixed-header":""}},[s("thead",[s("tr",[s("th",{staticClass:"text-left text-table-header"},[t._v(" ບ້ານ ")]),s("th",{staticClass:"text-left text-table-header"},[t._v(" ເມືອງ ")]),s("th",{staticClass:"text-left text-table-header"},[t._v(" ຈຳນວນຖົງ ")]),s("th",{staticClass:"text-left text-table-header"},[t._v(" ຈຳນວນຖ້ຽວ ")])])]),s("tbody",t._l(t.customers,(function(e,a){return s("tr",{key:a},[s("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.village_name)+" ")]),s("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.district_name)+" ")]),s("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.bags)+" ")]),s("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.amount)+" ")])])})),0)]):t._e(),"company"==t.selectedCustomerType?s("v-simple-table",{attrs:{"fixed-header":"",dense:""}},[s("thead",[s("tr",[s("th",{staticClass:"text-left text-table-header"},[t._v(" ບ້ານ ")]),s("th",{staticClass:"text-left text-table-header"},[t._v(" ເມືອງ ")]),s("th",{staticClass:"text-left text-table-header"},[t._v(" ມອບເໝົາ ")]),s("th",{staticClass:"text-left text-table-header"},[t._v(" ຄອນເທັນເນີ ")]),s("th",{staticClass:"text-left text-table-header"},[t._v(" ທຸລະກິດເປັນຖ້ຽວ ")]),s("th",{staticClass:"text-left text-table-header"},[t._v(" ລວມຈຳນວນຄັ້ງ ")]),s("th",{staticClass:"text-left text-table-header"},[t._v(" ຈຳນວນຄອນເທັນເນີ ")])])]),s("tbody",t._l(t.customers,(function(e,a){return s("tr",{key:a},[s("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.village_name)+" ")]),s("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.district_name)+" ")]),s("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.chartered_collect_time)+" ")]),s("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.container_collect_time)+" ")]),s("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.fix_cost_collect_time)+" ")]),s("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.total_collect_time)+" ")]),s("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.total_container)+" ")])])})),0)]):t._e(),"event"==t.selectedCustomerType?s("v-simple-table",{attrs:{"fixed-header":"",dense:""}},[s("thead",[s("tr",[s("th",{staticClass:"text-left text-table-header"},[t._v(" ບ້ານ ")]),s("th",{staticClass:"text-left text-table-header"},[t._v(" ເມືອງ ")]),s("th",{staticClass:"text-left text-table-header"},[t._v(" ຈຳນວນ ")])])]),s("tbody",t._l(t.customers,(function(e,a){return s("tr",{key:a},[s("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.village_name)+" ")]),s("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.district_name)+" ")]),s("td",{staticClass:"text-table-body"},[t._v(" "+t._s(e.amount)+" ")])])})),0)]):t._e()],1)],1)],1)],1)},n=[],i=s("54da"),l={name:"Customer",title:function(){return"Vientiane Waste Co-Dev|Report Collection"},data:function(){return{start_date:"",end_date:"",start_menu:!1,end_menu:!1,customers:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",selectedCustomerType:"home",customer_types:[{name:"home",display:"ຄົວເຮືອນ"},{name:"company",display:"ຫົວໜ່ວຍທູລະກິດ"},{name:"event",display:"ຖ້ຽວພິເສດ"}]}},methods:{fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("report-address-collection",{params:Object(i["a"])([{customer_type:this.selectedCustomerType}])}).then((function(e){200==e.data.code&&(t.$store.commit("Loading_State",!1),t.customers=e.data.data.data,console.log(t.customers))})).catch((function(){t.$store.commit("Loading_State",!1),t.start_menu=!1,t.end_menu=!1}))},exportData:function(){var t=this;this.loading=!0,this.$axios.get("report-address-collection/",{params:Object(i["a"])([{download:"excel"},{customer_type:this.selectedCustomerType}])},{responseType:"blob"}).then((function(e){200==e.status&&(window.open(e.data.data.download_link),t.loading=!1)})).catch((function(){t.$store.commit("modalDelete_State",!1),t.loading=!1}))}},watch:{selectedCustomerType:function(){this.fetchData()}},created:function(){this.fetchData()}},c=l,o=(s("6c96"),s("2877")),r=s("6544"),h=s.n(r),d=s("c6a6"),u=s("8336"),m=s("b0af"),f=s("99d9"),p=s("62ad"),b=s("a523"),v=s("0fd9"),x=s("1f4f"),y=Object(o["a"])(c,a,n,!1,null,null,null);e["default"]=y.exports;h()(y,{VAutocomplete:d["a"],VBtn:u["a"],VCard:m["a"],VCardText:f["b"],VCol:p["a"],VContainer:b["a"],VRow:v["a"],VSimpleTable:x["a"]})},"8b37":function(t,e,s){},c6a6:function(t,e,s){"use strict";var a=s("5530"),n=(s("d81d"),s("4de4"),s("498a"),s("7db0"),s("caad"),s("2532"),s("2bfd"),s("b974")),i=s("8654"),l=s("d9f7"),c=s("80d2"),o=Object(a["a"])(Object(a["a"])({},n["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=n["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,s){return s.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:n["a"].options.props.menuProps.type,default:function(){return o}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var s=Object(c["r"])(e,t.itemText),a=null!=s?String(s):"";return t.filter(e,String(t.internalSearch),a)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=n["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(a["a"])(Object(a["a"])({},o),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=n["a"].options.computed.listData.call(this);return t.props=Object(a["a"])(Object(a["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var s=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){s.internalSearch&&(1===t.length||s.autoSelectFirst)&&(s.$refs.menu.getTiles(),s.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===c["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===c["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==c["y"].backspace&&t!==c["y"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var s=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===s){var a=this.selectedItems.length,n=t!==a-1?t:t-1,i=this.selectedItems[n];i?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=n}else this.selectedIndex=s}},clearableCallback:function(){this.internalSearch=null,n["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.data=Object(l["a"])(t.data,{attrs:{"aria-activedescendant":Object(c["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(c["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=n["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?n["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,s=e.value;e.value&&this.activateMenu(),this.internalSearch=s,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[c["y"].home,c["y"].end].includes(e)||n["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){n["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){n["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){n["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,s;if(-1!==this.selectedIndex){var a=this.selectedItems[this.selectedIndex],n=this.getText(a);null==(e=t.clipboardData)||e.setData("text/plain",n),null==(s=t.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}}})}}]);
//# sourceMappingURL=chunk-465a260c.d0166caa.js.map