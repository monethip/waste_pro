(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e81706c"],{"0c81":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{staticClass:"mb-n6"},[n("v-col",[n("v-btn",{staticClass:"btn-primary"},[e._v("Export ")])],1),n("v-col",[n("v-autocomplete",{attrs:{"item-text":"","item-value":"",label:"ເລືອກວັນເລີ່ມ",outlined:"",dense:"",clearable:""}})],1),n("v-col",[n("v-autocomplete",{attrs:{"item-text":"","item-value":"",label:"ວັນທີສີ້ນສຸດ",outlined:"",dense:"",clearable:""}})],1),n("v-col",[n("v-autocomplete",{attrs:{"item-text":"","item-value":"",label:"ເລືອກເມືອງ",outlined:"",dense:"",clearable:""}})],1),n("v-col",[n("v-autocomplete",{attrs:{"item-text":"","item-value":"",label:"ເລືອກບ້ານ",outlined:"",dense:"",clearable:""}})],1),n("v-col",[n("v-text-field",{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຊື່ລູກຄ້າ",type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Search()}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),n("div",[n("v-card",[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("v-data-table",{attrs:{headers:e.headers,items:e.customers,search:e.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:e._u([{key:"item.media",fn:function(t){var a=t.item;return e._l(a.media,(function(t,a){return n("v-avatar",{key:a,attrs:{size:"36px"}},[t.thumb?n("img",{attrs:{src:t.thumb}}):e._e()])}))}},{key:"item.roles",fn:function(t){var a=t.item;return[n("div",e._l(a.roles,(function(t,a){return n("span",{key:a},[e._v(" "+e._s(t.name)+", ")])})),0)]}},{key:"item.permissions",fn:function(t){var a=t.item;return[n("div",e._l(a.permissions,(function(t,a){return n("span",{key:a},[n("span",[e._v(e._s(t.name)+", ")])])})),0)]}},{key:"item.actions",fn:function(t){var a=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.viewPage(a.id)}}},[e._v(" mdi-eye ")]),n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editPage(a.id)}}},[e._v(" mdi-pencil ")]),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(a.id)}}},[e._v(" mdi-delete ")])]}}])}),n("br"),[e.pagination.total_pages>1?n("Pagination",{attrs:{pagination:e.pagination,offset:e.offset},on:{paginate:function(t){return e.fetchData()}}}):e._e()]],2)],1)],1)],1),n("ModalDelete",[[n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.deleteItemConfirm}},[e._v("OK")]),n("v-spacer")],1)]],2)],1)},i=[],s=n("3835"),o=(n("ac1f"),n("841c"),n("4fad"),n("6eceb")),r={name:"Customer",data:function(){return{tab:null,customers:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",headers:[{text:"ຊື່",value:"name"},{text:"Phone",value:"user.phone",sortable:!1},{text:"ບ້ານ",value:"surname"},{text:"ເມືອງ",value:"user.email",sortable:!1},{text:"ເຮືອນເລກທີ",value:"house_number",sortable:!1},{text:"ຮູບພາບ",value:"media"},{text:"ຈຳນວນຖົງ",value:"latitude",sortable:!1},{text:"ວັນທີ",value:"longitude",sortable:!1},{text:"",value:"actions",sortable:!1}],toast:{value:!0,color:"success",msg:""},toast_error:{value:!0,color:"error",msg:"Something when wrong!"}}},methods:{fetchData:function(){var e=this;this.$store.commit("Loading_State",!0),this.$axios.get("customer",{params:{page:this.pagination.current_page,per_page:this.per_page,filter:this.search}}).then((function(t){200==t.data.code&&setTimeout((function(){e.$store.commit("Loading_State",!1)}),300)})).catch((function(t){if(e.$store.commit("Loading_State",!1),e.fetchData(),422==t.response.status)for(var n=t.response.data.errors,a=0,i=Object.entries(n);a<i.length;a++){var o=Object(s["a"])(i[a],2),r=o[0],l=o[1];e.server_errors[r]=l[0]}}))},closeDelete:function(){this.$store.commit("modalDelete_State",!1)},deleteItem:function(e){this.customerId=e,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm:function(){var e=this;this.loading=!0,this.$axios.delete("customer/"+this.customerId).then((function(t){200==t.data.code&&setTimeout((function(){e.loading=!1,e.toast.msg=t.data.message,e.$store.commit("Toast_State",e.toast),e.$store.commit("modalDelete_State",!1),e.fetchData()}),300)})).catch((function(){e.fetchData(),e.$store.commit("Toast_State",e.toast_error),e.$store.commit("modalDelete_State",!1),e.loading=!1}))},createPage:function(){this.$router.push({name:"CreateCustomer"})},editPage:function(e){this.$router.push({name:"EditCustomer",params:{id:e}})},viewPage:function(e){console.log(e),this.$router.push({name:"ViewCustomer",params:{id:e}})},Search:function(){Object(o["a"])(this)}},watch:{search:function(e){""==e&&this.fetchData()}},created:function(){this.fetchData()}},l=r,c=(n("9373"),n("2877")),u=n("6544"),h=n.n(u),d=n("c6a6"),m=n("8212"),f=n("8336"),p=n("b0af"),v=n("99d9"),g=n("62ad"),I=n("a523"),b=n("8fea"),S=n("132d"),x=n("0fd9"),y=n("2fa4"),D=n("8654"),_=Object(c["a"])(l,a,i,!1,null,null,null);t["default"]=_.exports;h()(_,{VAutocomplete:d["a"],VAvatar:m["a"],VBtn:f["a"],VCard:p["a"],VCardActions:v["a"],VCardText:v["b"],VCol:g["a"],VContainer:I["a"],VDataTable:b["a"],VIcon:S["a"],VRow:x["a"],VSpacer:y["a"],VTextField:D["a"]})},"2bd6":function(e,t,n){},"2bfd":function(e,t,n){},"4fad":function(e,t,n){var a=n("23e7"),i=n("6f53").entries;a({target:"Object",stat:!0},{entries:function(e){return i(e)}})},"6eceb":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("ac1f"),n("841c");var a=function(e){""!==e.search?""!==e.oldVal?e.oldVal!==e.search&&(e.oldVal=e.search,e.pagination.current_page=1,e.fetchData()):(""!==e.search&&(e.pagination.current_page=1,e.fetchData()),e.oldVal=e.search):e.oldVal=""}},9373:function(e,t,n){"use strict";n("2bd6")},c6a6:function(e,t,n){"use strict";var a=n("5530"),i=(n("d81d"),n("4de4"),n("498a"),n("7db0"),n("caad"),n("2532"),n("2bfd"),n("b974")),s=n("8654"),o=n("d9f7"),r=n("80d2"),l=Object(a["a"])(Object(a["a"])({},i["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:function(){return l}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(r["s"])(t,e.itemText),a=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),a)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=i["a"].options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),Object(a["a"])(Object(a["a"])({},l),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(t){return e.valueComparator(e.getValue(t),e.getValue(e.internalValue))}))},listData:function(){var e=i["a"].options.computed.listData.call(this);return e.props=Object(a["a"])(Object(a["a"])({},e.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;e!==t&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===r["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===r["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==r["y"].backspace&&e!==r["y"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var a=this.selectedItems.length,i=e!==a-1?e:e-1,s=this.selectedItems[i];s?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=i}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput:function(){var e=s["a"].options.methods.genInput.call(this);return e.data=Object(o["a"])(e.data,{attrs:{"aria-activedescendant":Object(r["q"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(r["q"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot:function(){var e=i["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections:function(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[r["y"].home,r["y"].end].includes(t)||i["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){i["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){i["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var a=this.selectedItems[this.selectedIndex],i=this.getText(a);null==(t=e.clipboardData)||t.setData("text/plain",i),null==(n=e.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",i),e.preventDefault()}}}})}}]);
//# sourceMappingURL=chunk-7e81706c.7d824bde.js.map