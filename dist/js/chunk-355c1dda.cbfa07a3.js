(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-355c1dda"],{"0fdf":function(e,t,s){},"347c":function(e,t,s){e.exports=s.p+"img/pin1.d74f27bd.svg"},"54da":function(e,t,s){"use strict";t["a"]=function(e){const t={};if(!e[0]){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(void 0!==e[t]&&null!==e[t]&&""!==e[t]||delete e[t]);return e}for(const s of e)1==Object.keys(s).length&&s[Object.keys(s)]&&(t[Object.keys(s)]=s[Object.keys(s)]);return t}},"6ece":function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));const i=e=>{""!==e.search?""!==e.oldVal?e.oldVal!==e.search&&(e.oldVal=e.search,e.pagination.current_page=1,e.fetchData()):(""!==e.search&&(e.pagination.current_page=1,e.fetchData()),e.oldVal=e.search):e.oldVal=""}},"7e12":function(e,t,s){"use strict";s("7ead")},"7ead":function(e,t,s){},a413:function(e,t,s){"use strict";s.r(t);var i=s("a892"),a=s("8447"),n=s("07b0"),l=s("db5a"),r=s("0f35"),o=s("28e8"),c=s("1da9"),h=s("1789"),d=s("0cb6"),u=s("1d7d"),p=s("d62f"),m=s("cfe2"),f=function(){var e=this,t=e._self._c;return t(h["a"],[t(a["a"],{staticClass:"mt-n4",attrs:{large:""}},[t(n["a"],{staticClass:"text-primary",attrs:{text:""},on:{click:function(t){return e.backPrevios()}}},[t(u["a"],[e._v("mdi-keyboard-backspace")])],1),e._v("ເລືອກບໍລິສັດເຂົ້າແຜນເສັ້ນທາງ "),t(m["a"]),t("span",{staticClass:"mr-4"},[t(u["a"],{attrs:{color:"red"}},[e._v("mdi-map-marker")]),e._v("ຢູ່ໃນແຜນແລ້ວ ")],1),t("span",[t(u["a"],{staticStyle:{color:"#49a3da"}},[e._v("mdi-map-marker")]),e._v("ຍັງບໍທັນຢູ່ໃນແຜນ ")],1)],1),t(p["a"],{staticClass:"my-n4"},[t(c["a"],{staticClass:"mb-4",attrs:{cols:"12"}},[t("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:e.getCenter().lat>0||e.getCenter().lat<0?e.getCenter():{lat:0,lng:0},zoom:14,"disable-default-u-i":!0}},[t("gmap-info-window",{attrs:{options:e.infoOptions,position:e.infoPosition,opened:e.infoOpened,conent:e.infoContent},on:{closeclick:function(t){e.infoOpened=!1}}},[e._v(" "+e._s(e.infoContent)+" ")]),e._l(e.customers,(function(s,i){return t("GmapMarker",{key:i,attrs:{position:e.getMarkers(s),draggable:!1,icon:e.getSiteIcon(s),animation:2,clickable:!0,label:(i+1).toString()},on:{click:function(t){return e.toggleInfo(s,i)}}})}))],2)],1)],1),t(p["a"],{staticClass:"mb-n6"},[t(c["a"],[t(n["a"],{staticClass:"btn-primary",on:{click:function(t){return e.createPage()}}},[e._v(" Next "),t(u["a"],[e._v("mdi-arrow-right-bold-circle-outline")])],1)],1),t(c["a"],[t("h4",[e._v("ລວມລູກຄ້າ "+e._s(e.pagination.total)+" ຄົນ")])]),t(c["a"],[t(i["a"],{attrs:{outlined:"",dense:"",items:e.districts,"item-text":"name","item-value":"id",label:"ເມືອງ",clearable:""},model:{value:e.selectedDistrict,callback:function(t){e.selectedDistrict=t},expression:"selectedDistrict"}})],1)],1),t(p["a"],[t(c["a"],{attrs:{cols:"12"}},[t(i["a"],{attrs:{items:e.villages,"item-text":"name","item-value":"id",label:"ເລືອກບ້ານ",filled:"",chips:"",color:"blue-grey lighten-2",multiple:"",clearable:""},scopedSlots:e._u([{key:"selection",fn:function(s){return[t(o["a"],e._b({attrs:{"input-value":s.selected,close:""},on:{click:s.select,"click:close":function(t){return e.remove(s.item)}}},"v-chip",s.attrs,!1),[e._v(" "+e._s(s.item.name)+" ")])]}}]),model:{value:e.selectedVillage,callback:function(t){e.selectedVillage=t},expression:"selectedVillage"}})],1)],1),t("div",[t(l["a"],[t(l["a"],{attrs:{flat:""}},[t(r["b"],[t(d["a"],{attrs:{headers:e.headers,items:e.customers,search:e.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:e._u([{key:"item.address_detail",fn:function({item:s}){return e._l(s.village_details,(function(s,i){return t("div",{key:i},[t("span",[e._v(e._s(s.name))])])}))}},{key:"item.actions",fn:function({item:s}){return[t(u["a"],{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.viewPage(s.id)}}},[e._v(" mdi-eye ")])]}}])}),t("br"),[e.pagination.total_pages>1?t("Pagination",{attrs:{pagination:e.pagination,offset:e.offset},on:{paginate:function(t){return e.fetchData()}}}):e._e()]],2)],1)],1)],1)],1)},g=[],I=(s("558b"),s("6ece")),v=s("54da"),x={name:"Customer",data(){return{tab:null,customers:[],selectedAllCustomer:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:50,search:"",oldVal:"",districts:[],selectedDistrict:"",villages:[],selectedVillage:[],headers:[{text:"ບໍລິສັດ",value:"company_name"},{text:"Phone",value:"user.phone",sortable:!1},{text:"ລາຍລະອຽດທີ່ຢູ່",value:"address_detail"},{text:"ບ້ານ",value:"village.name",sortable:!0},{text:"ເມືອງ",value:"district.name",sortable:!0},{text:"",value:"actions",sortable:!1}],latlng:{lat:0,lng:0},markers:[],places:[],currentPlace:null,infoPosition:null,infoContent:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35}}}},watch:{search(e){""==e&&this.fetchData()},selectedVillage(){this.fetchData()},selectedDistrict(){this.fetchData(),this.fetchVillage()}},created(){this.fetchData(),this.fetchAddress()},methods:{backPrevios(){this.$router.go(-1)},fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("company",{params:Object(v["a"])([{page:this.pagination.current_page},{per_page:this.per_page},{villages:this.selectedVillage},{district_id:this.selectedDistrict},{without:["route_plan","calendar"]}])}).then(e=>{200==e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.customers=e.data.data.data,this.selectedAllCustomer=e.data.data,this.pagination=e.data.data.pagination},100)}).catch(e=>{if(this.$store.commit("Loading_State",!1),e.response&&422==e.response.status){const t=e.response.data.errors;for(const[e,s]of Object.entries(t))this.server_errors[e]=s[0]}})},fetchAddress(){this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then(e=>{200==e.data.code&&setTimeout(()=>{this.address=e.data.data,this.address.map(e=>{this.districts=e.districts})},300)}).catch(()=>{})},fetchVillage(){this.$axios.get(`info/district/${this.selectedDistrict}/village`).then(e=>{200==e.data.code&&setTimeout(()=>{this.villages=e.data.data},300)}).catch(()=>{})},createPage(){this.customers.length&&this.selectedVillage.length?this.$router.push({name:"CreateExportPlanCompany",params:{items:this.customers,villages:this.selectedVillage}}):this.$store.commit("Toast_State",{value:!0,color:"error",msg:"ກາລຸນາເລືອກບ້ານ ແລະ ລູກຄ້າກ່ອນ"})},viewPage(e){this.$router.push({name:"ViewCompanyDetail",params:{id:e}})},remove(e){const t=this.selectedVillage.indexOf(e.id);t>=0&&this.selectedVillage.splice(t,1)},Search(){Object(I["a"])(this)},getCenter(){if(this.customers.length){if(null==parseFloat(this.customers[0].lat))return this.latlng;const e={lat:parseFloat(this.customers[0].lat),lng:parseFloat(this.customers[0].lng)};return e}return this.latlng},getMarkers(e){if(null!==e.customer)return{lat:parseFloat(e.lat),lng:parseFloat(e.lng)}},getSiteIcon(e){const t={url:s("347c"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}},i={url:s("f742"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}};try{switch(e.route_plan_details_count){case 0:return t;case 1:return i}}catch(a){return t}},toggleInfo(e,t){this.infoPosition=this.getMarkers(e),this.infoContent=e.company_name,this.infoCurrentKey==t?this.infoOpened=!this.infoOpened:(this.infoOpened=!0,this.infoCurrentKey=t)},toggle(){this.$nextTick(()=>{this.selectedAllVillage?this.selectedVillage=[]:setTimeout(()=>{this.selectedVillage=this.villages.slice()},300)})}}},b=x,y=(s("7e12"),s("4a4e")),S=Object(y["a"])(b,f,g,!1,null,null,null);t["default"]=S.exports},a892:function(e,t,s){"use strict";s("0fdf");var i=s("26bf"),a=s("9b44"),n=s("ed44"),l=s("dd08");const r={...i["b"],offsetY:!0,offsetOverflow:!0,transition:!1};t["a"]=i["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:()=>r},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(l["r"])(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=i["a"].options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...r,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=i["a"].options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){if(e!==t){if(!this.autoSelectFirst){const s=t[this.$refs.menu.listIndex];s?this.setMenuIndex(e.findIndex(e=>e===s)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&e.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===l["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===l["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==l["y"].backspace&&e!==l["y"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=this.selectedItems.length,a=e!==i-1?e:e-1,n=this.selectedItems[a];n?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=a},clearableCallback(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput(){const e=a["a"].options.methods.genInput.call(this);return e.data=Object(n["a"])(e.data,{attrs:{"aria-activedescendant":Object(l["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["p"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=i["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[l["y"].home,l["y"].end].includes(t)||i["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){i["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){i["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],a=this.getText(i);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",a),null===(s=e.clipboardData)||void 0===s||s.setData("text/vnd.vuetify.autocomplete.item+plain",a),e.preventDefault()}}})},f742:function(e,t,s){e.exports=s.p+"img/pin2.b23d8eec.svg"}}]);
//# sourceMappingURL=chunk-355c1dda.cbfa07a3.js.map