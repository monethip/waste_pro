(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f55980a"],{"2bfd":function(e,t,n){},"4ee9":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{staticClass:"mb-n6"},[n("v-col",[n("v-menu",{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,s=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"ເລີ່ມວັນທີ",readonly:"",outlined:"",dense:""},model:{value:e.start_date,callback:function(t){e.start_date=t},expression:"start_date"}},"v-text-field",s,!1),a))]}}]),model:{value:e.start_menu,callback:function(t){e.start_menu=t},expression:"start_menu"}},[n("v-date-picker",{on:{input:function(t){return e.fetchData()}},model:{value:e.start_date,callback:function(t){e.start_date=t},expression:"start_date"}})],1)],1),n("v-col",[n("v-menu",{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,s=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"ຫາວັນທີ",readonly:"",outlined:"",dense:""},model:{value:e.end_date,callback:function(t){e.end_date=t},expression:"end_date"}},"v-text-field",s,!1),a))]}}]),model:{value:e.end_menu,callback:function(t){e.end_menu=t},expression:"end_menu"}},[n("v-date-picker",{on:{input:function(t){return e.fetchData()}},model:{value:e.end_date,callback:function(t){e.end_date=t},expression:"end_date"}})],1)],1),n("v-col",[n("v-select",{attrs:{outlined:"",dense:"",items:e.roles,"item-text":"name","item-value":"name",label:"Roles",multiple:""},on:{input:function(t){return e.fetchData()}},model:{value:e.selectedRoles,callback:function(t){e.selectedRoles=t},expression:"selectedRoles"}}),n("v-spacer")],1),n("v-col",[n("v-autocomplete",{attrs:{outlined:"",dense:"",items:e.users,"item-text":"name","item-value":"id",label:"Users",multiple:""},on:{input:function(t){return e.fetchData()}},model:{value:e.selectedUsers,callback:function(t){e.selectedUsers=t},expression:"selectedUsers"}}),n("v-spacer")],1),n("v-col",[n("v-select",{attrs:{outlined:"",dense:"",items:e.models,"item-text":"model_name","item-value":"model_name",label:"Model Name",multiple:""},model:{value:e.selectedModel,callback:function(t){e.selectedModel=t},expression:"selectedModel"}})],1)],1),n("div",[n("v-card",[n("v-card-title",[e._v(" ຂໍ້ມູນ Activity Log ("+e._s(e.pagination.total)+") ")]),n("v-card-text",[n("v-data-table",{staticClass:"page__table",attrs:{headers:e.headers,items:e.activities,"disable-pagination":!0,"hide-default-footer":"","item-key":"id","single-expand":e.singleExpand,expanded:e.expanded,"show-expand":""},on:{"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"item.created_at",fn:function(t){var a=t.item;return[n("div",[e._v(e._s(e.moment(a.created_at).format("hh:mm DD-MM-YY")))])]}},{key:"expanded-item",fn:function(t){var a=t.headers,s=t.item;return[n("td",{staticClass:"pt-2 pb-2",attrs:{colspan:a.length}},[n("span",{staticStyle:{"font-size":"18px"}},[e._v("Properties")]),e._v(" "+e._s(s.properties.old)+" ")]),n("td",{staticClass:"pt-2 pb-2",attrs:{colspan:a.length}},[n("span",{staticStyle:{"font-size":"18px"}},[e._v("Attributes")]),e._v(" "+e._s(s.properties.attributes)+" ")])]}},{key:"item.properties",fn:function(t){var a=t.item;return[n("div",{domProps:{textContent:e._s(a.properties.old)}})]}},{key:"item.attributes",fn:function(t){var a=t.item;return[n("div",{domProps:{textContent:e._s(a.properties.attributes)}})]}}])}),n("br"),[e.pagination.total_pages>1?n("Pagination",{attrs:{pagination:e.pagination,offset:e.offset},on:{paginate:function(t){return e.fetchData()}}}):e._e()]],2)],1)],1)],1)},s=[],i=n("3835"),o=(n("4fad"),n("54da")),l={name:"Activity",title:function(){return"Vientiane Waste Co-Dev|".concat(this.title)},data:function(){return{title:"Activity Log",start_date:"",end_date:"",start_menu:!1,end_menu:!1,activities:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:15,start_collect:!1,server_errors:{},models:[],selectedModel:[],selectedRoles:[],roles:[],selectedUsers:[],users:[],expanded:[],singleExpand:!1,headers:[{text:"Log name",value:"log_name",width:"150px"},{text:"ລາຍລະອຽດ",value:"description",width:"150px"},{text:"Model Name",value:"model_name",sortable:!1,width:"150px"},{text:"Subject Type",value:"subject_type",sortable:!1,width:"150px"},{text:"User",value:"user.name",sortable:!1},{text:"Created",value:"created_at",sortable:!1},{text:"ຂໍ້ມູນເກົ່າ",value:"properties",sortable:!1,width:"350px"},{text:"ຂໍ້ມູນທີ່ອັບເດດ",value:"attributes",sortable:!1,width:"350px"}]}},methods:{fetchData:function(){var e=this;this.$store.commit("Loading_State",!0),this.$axios.get("activity",{params:Object(o["a"])([{page:this.pagination.current_page},{per_page:this.per_page},{date_from:this.start_date},{date_end:this.end_date},{model_names:this.selectedModel},{users:this.selectedUsers},{roles:this.selectedRoles}])}).then((function(t){200==t.data.code&&(e.$store.commit("Loading_State",!1),e.activities=t.data.data.data,e.pagination=t.data.data.pagination)})).catch((function(t){if(e.$store.commit("Loading_State",!1),422==t.response.status)for(var n=t.response.data.errors,a=0,s=Object.entries(n);a<s.length;a++){var o=Object(i["a"])(s[a],2),l=o[0],r=o[1];e.server_errors[l]=r[0]}}))},fetchModels:function(){var e=this;this.$axios.get("model").then((function(t){200==t.data.code&&(e.models=t.data.data)})).catch((function(){}))},fetchRole:function(){var e=this;this.$axios.get("user-setting/role").then((function(t){200==t.data.code&&(e.roles=t.data.data,e.fetchUser())})).catch((function(){}))},fetchUser:function(){var e=this;this.$axios.get("user-setting/user",{params:{roles:this.selectedRoles}}).then((function(t){200==t.data.code&&(e.users=t.data.data)})).catch((function(){e.$store.commit("Loading_State",!1)}))},viewPage:function(e){this.$router.push({name:"ViewCompany",params:{id:e}})},statusColor:function(e){return"active"==e?"success":"inactive"==e?"error":"info"}},watch:{selectedModel:function(){this.fetchData()},date_from:function(){this.fetchData()},date_end:function(){this.fetchData()}},created:function(){this.fetchData(),this.fetchRole(),this.fetchModels()}},r=l,c=(n("d1dc"),n("2877")),d=n("6544"),u=n.n(d),h=n("c6a6"),f=n("b0af"),p=n("99d9"),m=n("62ad"),v=n("a523"),g=n("8fea"),b=n("2e4b"),x=n("e449"),I=n("0fd9"),_=n("b974"),y=n("2fa4"),S=n("8654"),D=Object(c["a"])(r,a,s,!1,null,null,null);t["default"]=D.exports;u()(D,{VAutocomplete:h["a"],VCard:f["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:m["a"],VContainer:v["a"],VDataTable:g["a"],VDatePicker:b["a"],VMenu:x["a"],VRow:I["a"],VSelect:_["a"],VSpacer:y["a"],VTextField:S["a"]})},"4fad":function(e,t,n){var a=n("23e7"),s=n("6f53").entries;a({target:"Object",stat:!0},{entries:function(e){return s(e)}})},"54da":function(e,t,n){"use strict";var a=n("b85c");n("b64b");t["a"]=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n={},s=Object(a["a"])(t);try{for(s.s();!(e=s.n()).done;){var i=e.value;1==Object.keys(i).length&&i[Object.keys(i)]&&(n[Object.keys(i)]=i[Object.keys(i)])}}catch(o){s.e(o)}finally{s.f()}return n}},"977d":function(e,t,n){},c6a6:function(e,t,n){"use strict";var a=n("5530"),s=(n("d81d"),n("4de4"),n("498a"),n("7db0"),n("caad"),n("2532"),n("2bfd"),n("b974")),i=n("8654"),o=n("d9f7"),l=n("80d2"),r=Object(a["a"])(Object(a["a"])({},s["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t["a"]=s["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:s["a"].options.props.menuProps.type,default:function(){return r}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(l["r"])(t,e.itemText),a=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),a)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=s["a"].options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),Object(a["a"])(Object(a["a"])({},r),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(t){return e.valueComparator(e.getValue(t),e.getValue(e.internalValue))}))},listData:function(){var e=s["a"].options.computed.listData.call(this);return e.props=Object(a["a"])(Object(a["a"])({},e.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;e!==t&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===l["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===l["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==l["y"].backspace&&e!==l["y"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var a=this.selectedItems.length,s=e!==a-1?e:e-1,i=this.selectedItems[s];i?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=s}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,s["a"].options.methods.clearableCallback.call(this)},genInput:function(){var e=i["a"].options.methods.genInput.call(this);return e.data=Object(o["a"])(e.data,{attrs:{"aria-activedescendant":Object(l["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["p"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot:function(){var e=s["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections:function(){return this.hasSlot||this.multiple?s["a"].options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[l["y"].home,l["y"].end].includes(t)||s["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){s["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){s["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){s["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var a=this.selectedItems[this.selectedIndex],s=this.getText(a);null==(t=e.clipboardData)||t.setData("text/plain",s),null==(n=e.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",s),e.preventDefault()}}}})},d1dc:function(e,t,n){"use strict";n("977d")}}]);
//# sourceMappingURL=chunk-6f55980a.885fae72.js.map