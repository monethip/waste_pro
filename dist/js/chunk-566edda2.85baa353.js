(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-566edda2"],{"0c51":function(t,e,s){"use strict";s.r(e);var i=s("2e94"),a=s("1957"),n=s("45f7"),l=s("84ff"),r=s("dff2"),o=s("5929"),c=s("2d66"),h=s("8042"),d=s("2161"),u=s("0002"),p=s("a972"),m=s("3675"),f=function(){var t=this,e=t._self._c;return e(h["a"],[e(a["a"],{staticClass:"mt-n4",attrs:{large:""}},[e(n["a"],{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[e(u["a"],[t._v("mdi-keyboard-backspace")])],1),t._v("ເລືອກລູກຄ້າເຂົ້າແຜນເສັ້ນທາງ "),e(m["a"]),e("span",{staticClass:"mr-4"},[e(u["a"],{attrs:{color:"red"}},[t._v("mdi-map-marker")]),t._v("ຍັງບໍທັນຢູ່ໃນແຜນ ")],1),e("span",[e(u["a"],{staticStyle:{color:"#49a3da"}},[t._v("mdi-map-marker")]),t._v("ຢູ່ໃນແຜນແລ້ວ ")],1)],1),e(p["a"],{staticClass:"my-n4"},[e(c["a"],{staticClass:"mb-4",attrs:{cols:"12"}},[e("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:t.getCenter().lat>0||t.getCenter().lat<0?t.getCenter():{lat:0,lng:0},zoom:14,"disable-default-u-i":!0}},[e("gmap-info-window",{attrs:{options:t.infoOptions,position:t.infoPosition,opened:t.infoOpened,conent:t.infoContent},on:{closeclick:function(e){t.infoOpened=!1}}},[t._v(" "+t._s(t.infoContent)+" ")]),t._l(t.customers,(function(s,i){return e("GmapMarker",{key:i,attrs:{position:t.getMarkers(s),draggable:!1,icon:t.getSiteIcon(s),animation:2,clickable:!0,label:(i+1).toString()},on:{click:function(e){return t.toggleInfo(s,i)}}})}))],2)],1)],1),e(p["a"],{staticClass:"mb-n6"},[e(c["a"],[e(n["a"],{staticClass:"btn-primary",on:{click:function(e){return t.createPage()}}},[t._v(" Next "),e(u["a"],[t._v("mdi-arrow-right-bold-circle-outline")])],1)],1),e(c["a"],[e("h4",[t._v("ລວມລູກຄ້າ "+t._s(t.pagination.total)+" ຄົນ")])]),e(c["a"],[e(i["a"],{attrs:{outlined:"",dense:"",items:t.districts,"item-text":"name","item-value":"id",label:"ເມືອງ",clearable:""},model:{value:t.selectedDistrict,callback:function(e){t.selectedDistrict=e},expression:"selectedDistrict"}})],1)],1),e(p["a"],[e(c["a"],{attrs:{cols:"12"}},[e(i["a"],{attrs:{items:t.villages,"item-text":"name","item-value":"id",label:"ເລືອກບ້ານ",filled:"",chips:"",color:"blue-grey lighten-2",multiple:"",clearable:""},scopedSlots:t._u([{key:"selection",fn:function(s){return[e(o["a"],t._b({attrs:{"input-value":s.selected,close:""},on:{click:s.select,"click:close":function(e){return t.remove(s.item)}}},"v-chip",s.attrs,!1),[t._v(" "+t._s(s.item.name)+" ")])]}}]),model:{value:t.selectedVillage,callback:function(e){t.selectedVillage=e},expression:"selectedVillage"}})],1)],1),e("div",[e(l["a"],[e(l["a"],{attrs:{flat:""}},[e(r["b"],[e(d["a"],{attrs:{headers:t.headers,items:t.customers,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.address_detail",fn:function({item:s}){return t._l(s.village_details,(function(s,i){return e("div",{key:i},[e("span",[t._v(t._s(s.name))])])}))}},{key:"item.actions",fn:function({item:s}){return[e(u["a"],{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.viewPage(s.id)}}},[t._v(" mdi-eye ")])]}}])}),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1)],1)],1)},g=[],v=(s("e34a"),s("6ece")),I=s("54da"),b={name:"Customer",data(){return{tab:null,customers:[],selectedAllCustomer:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:50,search:"",oldVal:"",districts:[],selectedDistrict:"",villages:[],selectedVillage:[],headers:[{text:"ຊື່",value:"name"},{text:"ນາມສະກຸນ",value:"surname"},{text:"Phone",value:"user.phone",sortable:!1},{text:"ລາຍລະອຽດທີ່ຢູ່",value:"address_detail"},{text:"ບ້ານ",value:"village.name",sortable:!0},{text:"ເມືອງ",value:"district.name",sortable:!0},{text:"",value:"actions",sortable:!1}],latlng:{lat:0,lng:0},markers:[],places:[],currentPlace:null,infoPosition:null,infoContent:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35}}}},watch:{search(t){""==t&&this.fetchData()},selectedVillage(){this.fetchData()},selectedDistrict(){this.fetchData(),this.fetchVillage()}},created(){this.fetchData(),this.fetchAddress()},methods:{backPrevios(){this.$router.go(-1)},fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("customer",{params:Object(I["a"])([{page:this.pagination.current_page},{per_page:this.per_page},{villages:this.selectedVillage},{district_id:this.selectedDistrict},{without:["route_plan","calendar"]}])}).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.customers=t.data.data.data,this.selectedAllCustomer=t.data.data,this.pagination=t.data.data.pagination},100)}).catch(t=>{if(this.$store.commit("Loading_State",!1),t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,s]of Object.entries(e))this.server_errors[t]=s[0]}})},fetchAddress(){this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then(t=>{200==t.data.code&&setTimeout(()=>{this.address=t.data.data,this.address.map(t=>{this.districts=t.districts})},300)}).catch(()=>{})},fetchVillage(){this.$axios.get(`info/district/${this.selectedDistrict}/village`).then(t=>{200==t.data.code&&setTimeout(()=>{this.villages=t.data.data},300)}).catch(()=>{})},createPage(){this.customers.length&&this.selectedVillage.length?this.$router.push({name:"CreateExportPlan",params:{items:this.customers,villages:this.selectedVillage}}):this.$store.commit("Toast_State",{value:!0,color:"error",msg:"ກາລຸນາເລືອກບ້ານ ແລະ ລູກຄ້າກ່ອນ"})},viewPage(t){this.$router.push({name:"ViewClient",params:{id:t}})},remove(t){const e=this.selectedVillage.indexOf(t.id);e>=0&&this.selectedVillage.splice(e,1)},Search(){Object(v["a"])(this)},getCenter(){if(this.customers.length){if(null==parseFloat(this.customers[0].lat))return this.latlng;const t={lat:parseFloat(this.customers[0].lat),lng:parseFloat(this.customers[0].lng)};return t}return this.latlng},getMarkers(t){if(null!==t.customer)return{lat:parseFloat(t.lat),lng:parseFloat(t.lng)}},getSiteIcon(t){const e={url:s("347c"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}},i={url:s("f742"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}};try{switch(t.route_plan_details_count){case 0:return e;case 1:return i}}catch(a){return e}},toggleInfo(t,e){this.infoPosition=this.getMarkers(t),this.infoContent=`${t.name} (${t.house_number}) `,this.infoCurrentKey==e?this.infoOpened=!this.infoOpened:(this.infoOpened=!0,this.infoCurrentKey=e)},toggle(){this.$nextTick(()=>{this.selectedAllVillage?this.selectedVillage=[]:setTimeout(()=>{this.selectedVillage=this.villages.slice()},300)})}}},x=b,S=(s("8bbb"),s("d22c")),y=Object(S["a"])(x,f,g,!1,null,null,null);e["default"]=y.exports},"2b3b":function(t,e,s){},"2e94":function(t,e,s){"use strict";s("2b3b");var i=s("dc2c"),a=s("d736"),n=s("727d"),l=s("f0be");const r={...i["b"],offsetY:!0,offsetOverflow:!0,transition:!1};e["a"]=i["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,s)=>s.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:()=>r},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>{const e=Object(l["r"])(t,this.itemText),s=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=i["a"].options.computed.$_menuProps.call(this);return t.contentClass=("v-autocomplete__content "+(t.contentClass||"")).trim(),{...r,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue)))},listData(){const t=i["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){if(t!==e){if(!this.autoSelectFirst){const s=e[this.$refs.menu.listIndex];s?this.setMenuIndex(t.findIndex(t=>t===s)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&t.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===l["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===l["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==l["y"].backspace&&t!==l["y"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=this.selectedItems.length,a=t!==i-1?t:t-1,n=this.selectedItems[a];n?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=a},clearableCallback(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput(){const t=a["a"].options.methods.genInput.call(this);return t.data=Object(n["a"])(t.data,{attrs:{"aria-activedescendant":Object(l["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=i["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,s=e.value;e.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[l["y"].home,l["y"].end].includes(e)||i["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){i["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){i["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],a=this.getText(i);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",a),null===(s=t.clipboardData)||void 0===s||s.setData("text/vnd.vuetify.autocomplete.item+plain",a),t.preventDefault()}}})},"347c":function(t,e,s){t.exports=s.p+"img/pin1.d74f27bd.svg"},"54da":function(t,e,s){"use strict";e["a"]=function(t){const e={};if(!t[0]){for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&(void 0!==t[e]&&null!==t[e]&&""!==t[e]||delete t[e]);return t}for(const s of t)1==Object.keys(s).length&&s[Object.keys(s)]&&(e[Object.keys(s)]=s[Object.keys(s)]);return e}},"5bed":function(t,e,s){},"6ece":function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));const i=t=>{""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},8042:function(t,e,s){"use strict";s("3bf8"),s("618a");var i=s("1ed6");function a(t){return i["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:i,children:a}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:n}=i;if(n){i.attrs={};const t=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(i.staticClass+=" "+t.join(" "))}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),e(s.tag,i,a)}})}var n=s("727d");e["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:i}){let a;const{attrs:l}=s;return l&&(s.attrs={},a=Object.keys(l).filter(t=>{if("slot"===t)return!1;const e=l[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,Object(n["a"])(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(a||[])}),i)}})},"8bbb":function(t,e,s){"use strict";s("5bed")},f742:function(t,e,s){t.exports=s.p+"img/pin2.b23d8eec.svg"}}]);
//# sourceMappingURL=chunk-566edda2.85baa353.js.map