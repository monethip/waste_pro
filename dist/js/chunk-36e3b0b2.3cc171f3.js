(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36e3b0b2"],{"0c49":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-breadcrumbs",{staticClass:"mt-n4",attrs:{large:""}},[i("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[i("v-icon",[t._v("mdi-keyboard-backspace ")])],1),t._v(" ເລືອກລູກຄ້າເຂົ້າແຜນເສັ້ນທາງ "),i("v-spacer"),i("span",{staticClass:"mr-4"},[i("v-icon",{attrs:{color:"red"}},[t._v("mdi-map-marker")]),t._v("ຢູ່ໃນແຜນແລ້ວ")],1),i("span",[i("v-icon",{staticStyle:{color:"#49a3da"}},[t._v("mdi-map-marker")]),t._v("ຍັງບໍທັນຢູ່ໃນແຜນ")],1)],1),i("v-row",{staticClass:"my-n4"},[i("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[i("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:t.getCenter(),zoom:14,disableDefaultUI:!0}},[i("gmap-info-window",{attrs:{options:t.infoOptions,position:t.infoPosition,opened:t.infoOpened,conent:t.infoContent},on:{closeclick:function(e){t.infoOpened=!1}}},[t._v(t._s(t.infoContent)+" ")]),t._l(t.customers,(function(e,n){return i("GmapMarker",{key:n,attrs:{position:t.getMarkers(e),draggable:!1,icon:t.getSiteIcon(e),animation:2,clickable:!0},on:{click:function(i){return t.toggleInfo(e,n)}}})}))],2)],1)],1),i("v-row",{staticClass:"mb-n6"},[i("v-col",[i("v-btn",{staticClass:"btn-primary",on:{click:function(e){return t.createPage()}}},[t._v("Next "),i("v-icon",[t._v("mdi-arrow-right-bold-circle-outline")])],1)],1),i("v-col",[i("h4",[t._v("ເລືອກລູກຄ້າເພື່ອສ້າງແຜນເສັ້ນທາງ "+t._s(t.pagination.total)+" ຄົນ")])]),i("v-col",[i("v-autocomplete",{attrs:{outlined:"",dense:"",items:t.districts,"item-text":"name","item-value":"id",label:"ເມືອງ"},model:{value:t.selectedDistrict,callback:function(e){t.selectedDistrict=e},expression:"selectedDistrict"}})],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-autocomplete",{attrs:{items:t.villages,"item-text":"name","item-value":"id",label:"ເລືອກບ້ານ",filled:"",chips:"",color:"blue-grey lighten-2",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[i("v-chip",t._b({attrs:{"input-value":e.selected,close:""},on:{click:e.select,"click:close":function(i){return t.remove(e.item)}}},"v-chip",e.attrs,!1),[t._v(" "+t._s(e.item.name)+" ")])]}}]),model:{value:t.selectedVillage,callback:function(e){t.selectedVillage=e},expression:"selectedVillage"}})],1)],1),i("div",[i("v-card",[i("v-card",{attrs:{flat:""}},[i("v-card-text",[i("v-data-table",{attrs:{headers:t.headers,items:t.customers,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.address_detail",fn:function(e){var n=e.item;return t._l(n.village_details,(function(e,n){return i("div",{key:n},[i("span",[t._v(t._s(e.name))])])}))}},{key:"item.actions",fn:function(e){var n=e.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.viewPage(n.id)}}},[t._v(" mdi-eye ")])]}}])}),i("br"),[t.pagination.total_pages>1?i("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1)],1)],1)},s=[],a=i("3835"),l=(i("4fad"),i("d81d"),i("a434"),i("b0c0"),i("fb6a"),i("6eceb")),r={name:"Customer",data:function(){return{tab:null,customers:[],selectedAllCustomer:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:50,search:"",oldVal:"",districts:[],selectedDistrict:"",villages:[],selectedVillage:[],headers:[{text:"ບໍລິສັດ",value:"company_name"},{text:"Phone",value:"user.phone",sortable:!1},{text:"ລາຍລະອຽດທີ່ຢູ່",value:"address_detail"},{text:"ບ້ານ",value:"village.name",sortable:!0},{text:"ເມືອງ",value:"district.name",sortable:!0},{text:"",value:"actions",sortable:!1}],latlng:{lat:18.1189434,lng:102.290218},markers:[],places:[],currentPlace:null,infoPosition:null,infoContent:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35}}}},methods:{backPrevios:function(){this.$router.go(-1)},fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("customer",{params:{page:this.pagination.current_page,per_page:this.per_page,villages:this.selectedVillage}}).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.customers=e.data.data.data,t.selectedAllCustomer=e.data.data,t.pagination=e.data.data.pagination}),100)})).catch((function(e){if(t.$store.commit("Loading_State",!1),t.fetchData(),422==e.response.status)for(var i=e.response.data.errors,n=0,s=Object.entries(i);n<s.length;n++){var l=Object(a["a"])(s[n],2),r=l[0],c=l[1];t.server_errors[r]=c[0]}}))},fetchAddress:function(){var t=this;this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then((function(e){200==e.data.code&&setTimeout((function(){t.address=e.data.data,t.address.map((function(e){t.districts=e.districts}))}),300)})).catch((function(){}))},fetchVillage:function(){var t=this;this.$axios.get("info/district/"+this.selectedDistrict+"/village").then((function(e){200==e.data.code&&setTimeout((function(){t.villages=e.data.data}),300)})).catch((function(){}))},createPage:function(){this.customers.length>0&&this.selectedVillage.length>0?this.$router.push({name:"CreateRoutePlanCompany",params:{items:this.customers}}):this.$store.commit("Toast_State",{value:!0,color:"error",msg:"ກາລຸນາເລືອກບ້ານ ແລະ ລູກຄ້າກ່ອນ"})},viewPage:function(t){this.$router.push({name:"ViewCustomer",params:{id:t}})},remove:function(t){var e=this.selectedVillage.indexOf(t.id);e>=0&&this.selectedVillage.splice(e,1)},Search:function(){Object(l["a"])(this)},getCenter:function(){if(this.customers.length){if(null==parseFloat(this.customers[0].lat))return this.latlng;var t={lat:parseFloat(this.customers[0].lat),lng:parseFloat(this.customers[0].lng)};return t}return this.latlng},getMarkers:function(t){if(null!==t.customer)return{lat:parseFloat(t.lat),lng:parseFloat(t.lng)}},getSiteIcon:function(t){var e={url:i("347c"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}},n={url:i("f742"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}};try{switch(t.route_plan_details_count){case 0:return e;case 1:return n}}catch(s){return e}},toggleInfo:function(t,e){this.infoPosition=this.getMarkers(t),this.infoContent=t.name+" ("+t.house_number+") ",this.infoCurrentKey==e?this.infoOpened=!this.infoOpened:(this.infoOpened=!0,this.infoCurrentKey=e)},toggle:function(){var t=this;this.$nextTick((function(){t.selectedAllVillage?t.selectedVillage=[]:setTimeout((function(){t.selectedVillage=t.villages.slice()}),300)}))}},computed:{selectedAllVillage:function(){return this.selectedVillage.length===this.villages.length},selectedSomeVillage:function(){return this.selectedVillage.length>0&&!this.selectedAllVillage},icon:function(){return this.selectedAllVillage?"mdi-close-box":this.selectedSomeVillage?"mdi-minus-box":"mdi-checkbox-blank-outline"}},watch:{search:function(t){""==t&&this.fetchData()},selectedVillage:function(){this.fetchData()},selectedDistrict:function(){this.fetchVillage()}},created:function(){this.fetchData(),this.fetchAddress()}},c=r,o=(i("e9b16"),i("2877")),u=i("6544"),h=i.n(u),d=i("c6a6"),f=i("2bc5"),m=i("8336"),p=i("b0af"),g=i("99d9"),v=i("cc20"),b=i("62ad"),I=i("a523"),S=i("8fea"),x=i("132d"),C=i("0fd9"),y=i("2fa4"),V=Object(o["a"])(c,n,s,!1,null,null,null);e["default"]=V.exports;h()(V,{VAutocomplete:d["a"],VBreadcrumbs:f["a"],VBtn:m["a"],VCard:p["a"],VCardText:g["b"],VChip:v["a"],VCol:b["a"],VContainer:I["a"],VDataTable:S["a"],VIcon:x["a"],VRow:C["a"],VSpacer:y["a"]})},"2bc5":function(t,e,i){"use strict";var n=i("5530"),s=(i("a15b"),i("abd3"),i("ade3")),a=i("1c87"),l=i("58df"),r=Object(l["a"])(a["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(s["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),i=e.tag,s=e.data;return t("li",[t(i,Object(n["a"])(Object(n["a"])({},s),{},{attrs:Object(n["a"])(Object(n["a"])({},s.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),c=i("80d2"),o=Object(c["j"])("v-breadcrumbs__divider","li"),u=i("7560");e["a"]=Object(l["a"])(u["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(n["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(o,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,i=[],n=0;n<this.items.length;n++){var s=this.items[n];i.push(s.text),e?t.push(this.$scopedSlots.item({item:s})):t.push(this.$createElement(r,{key:i.join("."),props:s},[s.text])),n<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},"2bfd":function(t,e,i){},"347c":function(t,e,i){t.exports=i.p+"img/pin1.d74f27bd.svg"},"4fad":function(t,e,i){var n=i("23e7"),s=i("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return s(t)}})},"6eceb":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));i("ac1f"),i("841c");var n=function(t){""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},a656:function(t,e,i){},abd3:function(t,e,i){},c6a6:function(t,e,i){"use strict";var n=i("5530"),s=(i("d81d"),i("4de4"),i("498a"),i("7db0"),i("caad"),i("2532"),i("2bfd"),i("b974")),a=i("8654"),l=i("d9f7"),r=i("80d2"),c=Object(n["a"])(Object(n["a"])({},s["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=s["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,i){return i.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:s["a"].options.props.menuProps.type,default:function(){return c}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var i=Object(r["s"])(e,t.itemText),n=null!=i?String(i):"";return t.filter(e,String(t.internalSearch),n)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=s["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(n["a"])(Object(n["a"])({},c),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=s["a"].options.computed.listData.call(this);return t.props=Object(n["a"])(Object(n["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var i=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){i.internalSearch&&(1===t.length||i.autoSelectFirst)&&(i.$refs.menu.getTiles(),i.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===r["z"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===r["z"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==r["z"].backspace&&t!==r["z"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var i=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===i){var n=this.selectedItems.length,s=t!==n-1?t:t-1,a=this.selectedItems[s];a?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=s}else this.selectedIndex=i}},clearableCallback:function(){this.internalSearch=null,s["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=a["a"].options.methods.genInput.call(this);return t.data=Object(l["a"])(t.data,{attrs:{"aria-activedescendant":Object(r["q"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(r["q"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=s["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?s["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,i=e.value;e.value&&this.activateMenu(),this.internalSearch=i,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[r["z"].home,r["z"].end].includes(e)||s["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){s["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){s["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){s["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,i;if(-1!==this.selectedIndex){var n=this.selectedItems[this.selectedIndex],s=this.getText(n);null==(e=t.clipboardData)||e.setData("text/plain",s),null==(i=t.clipboardData)||i.setData("text/vnd.vuetify.autocomplete.item+plain",s),t.preventDefault()}}}})},e9b16:function(t,e,i){"use strict";i("a656")},f742:function(t,e,i){t.exports=i.p+"img/pin2.b23d8eec.svg"}}]);
//# sourceMappingURL=chunk-36e3b0b2.3cc171f3.js.map