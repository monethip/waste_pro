(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8036582"],{"163f":function(t,e,n){"use strict";n("fcca")},"2bfd":function(t,e,n){},"347c":function(t,e,n){t.exports=n.p+"img/pin1.d74f27bd.svg"},"4fad":function(t,e,n){var i=n("23e7"),a=n("6f53").entries;i({target:"Object",stat:!0},{entries:function(t){return a(t)}})},"54da":function(t,e,n){"use strict";var i=n("b85c");n("b64b");e["a"]=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n={},a=Object(i["a"])(e);try{for(a.s();!(t=a.n()).done;){var s=t.value;1==Object.keys(s).length&&s[Object.keys(s)]&&(n[Object.keys(s)]=s[Object.keys(s)])}}catch(l){a.e(l)}finally{a.f()}return n}},"6eceb":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("ac1f"),n("841c");var i=function(t){""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},a413:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-breadcrumbs",{staticClass:"mt-n4",attrs:{large:""}},[n("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[n("v-icon",[t._v("mdi-keyboard-backspace ")])],1),t._v(" ເລືອກບໍລິສັດເຂົ້າແຜນເສັ້ນທາງ "),n("v-spacer"),n("span",{staticClass:"mr-4"},[n("v-icon",{attrs:{color:"red"}},[t._v("mdi-map-marker")]),t._v("ຢູ່ໃນແຜນແລ້ວ ")],1),n("span",[n("v-icon",{staticStyle:{color:"#49a3da"}},[t._v("mdi-map-marker")]),t._v("ຍັງບໍທັນຢູ່ໃນແຜນ ")],1)],1),n("v-row",{staticClass:"my-n4"},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[n("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:t.getCenter(),zoom:14,disableDefaultUI:!0}},[n("gmap-info-window",{attrs:{options:t.infoOptions,position:t.infoPosition,opened:t.infoOpened,conent:t.infoContent},on:{closeclick:function(e){t.infoOpened=!1}}},[t._v(t._s(t.infoContent)+" ")]),t._l(t.customers,(function(e,i){return n("GmapMarker",{key:i,attrs:{position:t.getMarkers(e),draggable:!1,icon:t.getSiteIcon(e),animation:2,clickable:!0,label:(i+1).toString()},on:{click:function(n){return t.toggleInfo(e,i)}}})}))],2)],1)],1),n("v-row",{staticClass:"mb-n6"},[n("v-col",[n("v-btn",{staticClass:"btn-primary",on:{click:function(e){return t.createPage()}}},[t._v("Next "),n("v-icon",[t._v("mdi-arrow-right-bold-circle-outline")])],1)],1),n("v-col",[n("h4",[t._v("ລວມລູກຄ້າ "+t._s(t.pagination.total)+" ຄົນ")])]),n("v-col",[n("v-autocomplete",{attrs:{outlined:"",dense:"",items:t.districts,"item-text":"name","item-value":"id",label:"ເມືອງ",clearable:""},model:{value:t.selectedDistrict,callback:function(e){t.selectedDistrict=e},expression:"selectedDistrict"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-autocomplete",{attrs:{items:t.villages,"item-text":"name","item-value":"id",label:"ເລືອກບ້ານ",filled:"",chips:"",color:"blue-grey lighten-2",multiple:"",clearable:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[n("v-chip",t._b({attrs:{"input-value":e.selected,close:""},on:{click:e.select,"click:close":function(n){return t.remove(e.item)}}},"v-chip",e.attrs,!1),[t._v(" "+t._s(e.item.name)+" ")])]}}]),model:{value:t.selectedVillage,callback:function(e){t.selectedVillage=e},expression:"selectedVillage"}})],1)],1),n("div",[n("v-card",[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("v-data-table",{attrs:{headers:t.headers,items:t.customers,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.address_detail",fn:function(e){var i=e.item;return t._l(i.village_details,(function(e,i){return n("div",{key:i},[n("span",[t._v(t._s(e.name))])])}))}},{key:"item.actions",fn:function(e){var i=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.viewPage(i.id)}}},[t._v(" mdi-eye ")])]}}])}),n("br"),[t.pagination.total_pages>1?n("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1)],1)],1)},a=[],s=n("3835"),l=(n("4fad"),n("d81d"),n("a434"),n("fb6a"),n("6eceb")),c=n("54da"),o={name:"Customer",data:function(){return{tab:null,customers:[],selectedAllCustomer:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:50,search:"",oldVal:"",districts:[],selectedDistrict:"",villages:[],selectedVillage:[],headers:[{text:"ບໍລິສັດ",value:"company_name"},{text:"Phone",value:"user.phone",sortable:!1},{text:"ລາຍລະອຽດທີ່ຢູ່",value:"address_detail"},{text:"ບ້ານ",value:"village.name",sortable:!0},{text:"ເມືອງ",value:"district.name",sortable:!0},{text:"",value:"actions",sortable:!1}],latlng:{lat:18.1189434,lng:102.290218},markers:[],places:[],currentPlace:null,infoPosition:null,infoContent:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35}}}},methods:{backPrevios:function(){this.$router.go(-1)},fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("company",{params:Object(c["a"])([{page:this.pagination.current_page},{per_page:this.per_page},{villages:this.selectedVillage},{district_id:this.selectedDistrict},{without:["route_plan","calendar"]}])}).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.customers=e.data.data.data,t.selectedAllCustomer=e.data.data,t.pagination=e.data.data.pagination}),100)})).catch((function(e){if(t.$store.commit("Loading_State",!1),t.fetchData(),422==e.response.status)for(var n=e.response.data.errors,i=0,a=Object.entries(n);i<a.length;i++){var l=Object(s["a"])(a[i],2),c=l[0],o=l[1];t.server_errors[c]=o[0]}}))},fetchAddress:function(){var t=this;this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then((function(e){200==e.data.code&&setTimeout((function(){t.address=e.data.data,t.address.map((function(e){t.districts=e.districts}))}),300)})).catch((function(){}))},fetchVillage:function(){var t=this;this.$axios.get("info/district/"+this.selectedDistrict+"/village").then((function(e){200==e.data.code&&setTimeout((function(){t.villages=e.data.data}),300)})).catch((function(){}))},createPage:function(){this.customers.length>0&&this.selectedVillage.length>0?this.$router.push({name:"CreateExportPlanCompany",params:{items:this.customers,villages:this.selectedVillage}}):this.$store.commit("Toast_State",{value:!0,color:"error",msg:"ກາລຸນາເລືອກບ້ານ ແລະ ລູກຄ້າກ່ອນ"})},viewPage:function(t){this.$router.push({name:"ViewCompany",params:{id:t}})},remove:function(t){var e=this.selectedVillage.indexOf(t.id);e>=0&&this.selectedVillage.splice(e,1)},Search:function(){Object(l["a"])(this)},getCenter:function(){if(this.customers.length){if(null==parseFloat(this.customers[0].lat))return this.latlng;var t={lat:parseFloat(this.customers[0].lat),lng:parseFloat(this.customers[0].lng)};return t}return this.latlng},getMarkers:function(t){if(null!==t.customer)return{lat:parseFloat(t.lat),lng:parseFloat(t.lng)}},getSiteIcon:function(t){var e={url:n("347c"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}},i={url:n("f742"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}};try{switch(t.route_plan_details_count){case 0:return e;case 1:return i}}catch(a){return e}},toggleInfo:function(t,e){this.infoPosition=this.getMarkers(t),this.infoContent=t.company_name,this.infoCurrentKey==e?this.infoOpened=!this.infoOpened:(this.infoOpened=!0,this.infoCurrentKey=e)},toggle:function(){var t=this;this.$nextTick((function(){t.selectedAllVillage?t.selectedVillage=[]:setTimeout((function(){t.selectedVillage=t.villages.slice()}),300)}))}},watch:{search:function(t){""==t&&this.fetchData()},selectedVillage:function(){this.fetchData()},selectedDistrict:function(){this.fetchData(),this.fetchVillage()}},created:function(){this.fetchData(),this.fetchAddress()}},r=o,u=(n("163f"),n("2877")),h=n("6544"),d=n.n(h),f=n("c6a6"),p=n("2bc5"),m=n("8336"),g=n("b0af"),v=n("99d9"),b=n("cc20"),I=n("62ad"),y=n("a523"),S=n("8fea"),x=n("132d"),C=n("0fd9"),_=n("2fa4"),D=Object(u["a"])(r,i,a,!1,null,null,null);e["default"]=D.exports;d()(D,{VAutocomplete:f["a"],VBreadcrumbs:p["a"],VBtn:m["a"],VCard:g["a"],VCardText:v["b"],VChip:b["a"],VCol:I["a"],VContainer:y["a"],VDataTable:S["a"],VIcon:x["a"],VRow:C["a"],VSpacer:_["a"]})},c6a6:function(t,e,n){"use strict";var i=n("5530"),a=(n("d81d"),n("4de4"),n("498a"),n("7db0"),n("caad"),n("2532"),n("2bfd"),n("b974")),s=n("8654"),l=n("d9f7"),c=n("80d2"),o=Object(i["a"])(Object(i["a"])({},a["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=a["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:a["a"].options.props.menuProps.type,default:function(){return o}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(c["r"])(e,t.itemText),i=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),i)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=a["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(i["a"])(Object(i["a"])({},o),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=a["a"].options.computed.listData.call(this);return t.props=Object(i["a"])(Object(i["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===c["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===c["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==c["y"].backspace&&t!==c["y"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var i=this.selectedItems.length,a=t!==i-1?t:t-1,s=this.selectedItems[a];s?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=a}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,a["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return t.data=Object(l["a"])(t.data,{attrs:{"aria-activedescendant":Object(c["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(c["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=a["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?a["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[c["y"].home,c["y"].end].includes(e)||a["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){a["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){a["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){a["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var i=this.selectedItems[this.selectedIndex],a=this.getText(i);null==(e=t.clipboardData)||e.setData("text/plain",a),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",a),t.preventDefault()}}}})},f742:function(t,e,n){t.exports=n.p+"img/pin2.b23d8eec.svg"},fcca:function(t,e,n){}}]);
//# sourceMappingURL=chunk-e8036582.6c8f9994.js.map