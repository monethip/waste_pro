(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-344f3869"],{2823:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-breadcrumbs",{staticClass:"mt-n4",attrs:{large:""}},[s("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[s("v-icon",[t._v("mdi-keyboard-backspace")])],1),t._v(" ແກ້ໄຂແຜນເສັ້ນທາງ "),s("v-spacer"),s("span",{staticClass:"mr-4"},[s("v-icon",{attrs:{color:"red"}},[t._v("mdi-map-marker")]),t._v("ຍັງບໍທັນຢູ່ໃນແຜນ ")],1),s("span",[s("v-icon",{staticStyle:{color:"#49a3da"}},[t._v("mdi-map-marker")]),t._v("ຢູ່ໃນແຜນແລ້ວ ")],1)],1),s("v-row",[s("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[t.customers?s("GmapMap",{staticStyle:{width:"100%",height:"400px"},attrs:{center:t.getCenter(),zoom:14,disableDefaultUI:!0}},[s("gmap-info-window",{attrs:{options:t.infoOptions,position:t.infoPosition,opened:t.infoOpened,conent:t.infoContent},on:{closeclick:function(e){t.infoOpened=!1}}},[t._v(t._s(t.infoContent)+" ")]),t._l(t.customers,(function(e,a){return s("GmapMarker",{key:a,attrs:{position:t.getMarkers(e),draggable:!1,icon:t.getSiteIcon(e),animation:2,clickable:!0},on:{click:function(s){return t.toggleInfo(e,a)}}})}))],2):t._e()],1)],1),s("v-row",{staticClass:"mb-n6"},[s("v-col",{attrs:{cols:"2"}},[s("v-btn",{staticClass:"btn-primary",attrs:{loading:t.loading,disabled:t.loading},on:{click:function(e){return t.updateRoutePlan()}}},[t._v(" ແກ້ໄຂ ")])],1),s("v-col",{attrs:{cols:"2"}},[t.customers?s("h4",[t._v("ລວມ "+t._s(t.customers.length))]):t._e()]),s("v-col",{attrs:{cols:"6"}},[s("v-text-field",{attrs:{label:"Name",required:"",outlined:"",dense:""},model:{value:t.plan.name,callback:function(e){t.$set(t.plan,"name",e)},expression:"plan.name"}}),s("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1),s("v-col",{attrs:{cols:"2"}},[s("v-text-field",{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຄົ້ນຫາ",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),s("div",[s("v-card",[s("v-card-text",[s("v-row",[s("v-col",[s("h4",[t._v("ລູກຄ້າທີ່ມີຢູ່")]),s("main",{staticClass:"page page--table"},[s("v-data-table",{staticClass:"page__table",attrs:{headers:t.headers,items:t.customers,search:t.search,"disable-pagination":!0,"hide-default-footer":"","item-key":"id"},scopedSlots:t._u([{key:"body",fn:function(e){return[s("draggable",{attrs:{list:e.items,tag:"tbody"},on:{change:t.afterAdd}},t._l(e.items,(function(e,a){return s("tr",{key:a},[s("td",[s("v-icon",{staticClass:"page__grab-icon",attrs:{small:""}},[t._v(" mdi-arrow-all ")])],1),s("td",[t._v(t._s(e.priority))]),s("td",[t._v(t._s(e.id))]),s("td",[s("div",[t._v(" "+t._s(e.customer.company_name)+" ")])]),s("td",{attrs:{contenteditable:""},on:{input:function(s){return t.onInputRound(s,e)}}},[t._v(t._s(t.getRound(e)))]),s("td")])})),0)]}}]),model:{value:t.selectedRows,callback:function(e){t.selectedRows=e},expression:"selectedRows"}})],1)]),s("v-divider",{attrs:{vertical:""}}),s("v-col",[s("v-row",{staticClass:"mb-n8"},[s("v-col",[s("div",{staticClass:"mb-2"},[s("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.addCustomer}},[s("v-icon",{attrs:{medium:""}},[t._v(" mdi-plus")]),t._v(" ເພີ່ມລູກຄ້າ ")],1)],1)]),s("v-spacer"),s("v-col",[s("h4",[t._v("ລູກຄ້າທີ່ເພີ່ມເຂົ້າໃໝ່")])])],1),s("main",{staticClass:"page page--table"},[s("v-data-table",{staticClass:"page__table",attrs:{headers:t.newHeaders,items:t.newCustomer,search:t.search,"disable-pagination":!0,"hide-default-footer":"","item-key":"id"},scopedSlots:t._u([{key:"body",fn:function(e){return[s("draggable",{attrs:{list:e.items,tag:"tbody"},on:{change:t.orderCustomer}},t._l(e.items,(function(e,a){return s("tr",{key:a},[s("td",[s("v-icon",{staticClass:"page__grab-icon",attrs:{small:""}},[t._v(" mdi-arrow-all ")])],1),s("td",[t._v(t._s(e.id))]),s("td",[e?s("div",[s("div",[t._v(" "+t._s(e.company_name)+" ")])]):t._e()]),s("td",[t._v(t._s(e.district.name))]),s("td",[s("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteNewCustomer(a)}}},[t._v(" mdi-delete ")])],1)])})),0)]}}]),model:{value:t.selectedRows,callback:function(e){t.selectedRows=e},expression:"selectedRows"}})],1)],1)],1)],1)],1)],1),s("ModalAdd",[[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[t._v("Add customer to route plan")])]),s("v-card-text",[s("v-container",[s("v-row",{staticClass:"mb-n6"},[s("v-col",{attrs:{cols:""}},[s("v-select",{attrs:{outlined:"",dense:"",items:t.favorite_dates,"item-text":"name","item-value":"name",label:"ມື້ບໍລິການ",multiple:""},model:{value:t.selectedFavoriteDate,callback:function(e){t.selectedFavoriteDate=e},expression:"selectedFavoriteDate"}})],1),s("v-col",[s("v-autocomplete",{attrs:{outlined:"",dense:"",items:t.customerStatus,"item-text":"name","item-value":"value",label:"ສະຖານະລູກຄ້າ",multiple:"",clearable:""},model:{value:t.selectedCustomerStatus,callback:function(e){t.selectedCustomerStatus=e},expression:"selectedCustomerStatus"}})],1),s("v-col",[s("v-select",{attrs:{outlined:"",dense:"",items:t.costs,"item-text":"name","item-value":"value",label:"ປະເພດບໍລິການ",multiple:""},model:{value:t.selectedCost,callback:function(e){t.selectedCost=e},expression:"selectedCost"}})],1)],1),s("v-row",[s("v-col",[s("v-autocomplete",{attrs:{outlined:"",dense:"",items:t.districts,"item-text":"name","item-value":"id",label:"ເມືອງ",clearable:""},model:{value:t.selectedDistrict,callback:function(e){t.selectedDistrict=e},expression:"selectedDistrict"}})],1)],1),s("v-row",[s("v-col",[s("v-autocomplete",{attrs:{items:t.villages,"item-text":"name","item-value":"id",label:"ເລືອກບ້ານ",filled:"",chips:"",color:"blue-grey lighten-2",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[s("v-chip",t._b({attrs:{"input-value":e.selected,close:""},on:{click:e.select,"click:close":function(s){return t.remove(e.item)}}},"v-chip",e.attrs,!1),[t._v(" "+t._s(e.item.name)+" ")])]}}]),model:{value:t.selectedVillage,callback:function(e){t.selectedVillage=e},expression:"selectedVillage"}})],1)],1),s("v-data-table",{staticClass:"page__table",attrs:{headers:t.addheaders,items:t.addCustomers,search:t.search,"disable-pagination":!0,"hide-default-footer":"","item-key":"id"},scopedSlots:t._u([{key:"body",fn:function(e){return[s("draggable",{attrs:{list:e.items,tag:"tbody"},on:{change:t.afterAdd}},t._l(e.items,(function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(a+1))]),s("td",[t._v(t._s(e.id))]),s("td",[t._v(t._s(e.company_name))]),s("td",[t._v(t._s(e.user.phone))]),s("td",[t._v(t._s(e.village.name))]),s("td",[t._v(t._s(e.district.name))]),s("td",[s("v-icon",{attrs:{small:""},on:{click:function(s){return t.addItem(t.addCustomers,e)}}},[t._v(" mdi-plus")])],1)])})),0)]}}]),model:{value:t.selectedRows,callback:function(e){t.selectedRows=e},expression:"selectedRows"}}),s("br"),[t.pagination.total_pages>1?s("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchAddCustomer()}}}):t._e()]],2),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeAddModal()}}},[t._v(" Close ")])],1)],1)],1)]],2),s("ModalDelete",[[s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:t.deleteNewCustomerConfirm}},[t._v("OK ")]),s("v-spacer")],1)]],2)],1)},n=[],i=s("3835"),o=s("b85c"),r=(s("7db0"),s("d3b7"),s("ddb0"),s("a434"),s("4fad"),s("d81d"),s("99af"),s("b0c0"),s("ac1f"),s("841c"),s("6eceb")),c=s("b76a"),l=s.n(c),d=s("54da"),u={name:"Customer",components:{draggable:l.a},data:function(){return{customers:[],addCustomers:[],customersId:[],customerRounds:[],countcutomer:0,loading:!1,customerId:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",selectedVillage:[],selectedCustomer:[],exclude_customers:[],selectedRows:[],newCustomer:[],districts:[],selectedDistrict:"",villages:[],customer:{},customerIndex:"",name:"",server_errors:{},plan:{},selectedCost:[],favorite_dates:[],selectedFavoriteDate:[],costs:[{id:1,value:"container",name:"ຄອນເທັນເນີ"},{id:2,value:"fix_cost",name:"ທຸລະກິດເປັນຖ້ຽວ"},{id:3,value:"chartered",name:"ມອບເໝົາ"}],selectedCustomerStatus:[],customerStatus:[{id:1,value:"calendar",name:"ຍັງບໍ່ມີແຜນເດີນລົດ"},{id:2,value:"route_plan",name:"ຍັງບໍ່ມີເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ"}],headers:[{text:"",value:""},{text:"ລຳດັບ",value:""},{text:"Id",value:"id"},{text:"ລູກຄ້າ",value:""},{text:"ຈຳນວນຮອບເລີ່ມຕົ້ນ",value:""},{text:"",value:"actions",sortable:!1}],newHeaders:[{text:"",value:""},{text:"Id",value:"id"},{text:"ລູກຄ້າ",value:""},{text:"ທີ່ຢູ່",value:"address_detail"},{text:"ລາຍລະອຽດການບໍລິການ",value:"collect_description"},{text:"",value:"actions",sortable:!1}],addheaders:[{text:"#",value:""},{text:"Id",value:"id"},{text:"ລູກຄ້າ",value:""},{text:"Phone",value:"user.phone",sortable:!1},{text:"ທີ່ຢູ່",value:"address_detail"},{text:"ລາຍລະອຽດການບໍລິການ",value:"collect_description"},{text:"",value:"actions",sortable:!1}],latlng:{lat:18.1189434,lng:102.290218},markers:[],infoPosition:null,infoContent:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35}}}},methods:{getRound:function(t){var e=this.customerRounds.find((function(e){return e.customer_id==t.customer_id}));if(e)return e.round},onInputRound:function(t,e){if(console.log(1,this.customerRounds),t.target.innerText&&!isNaN(t.target.innerText)){var s,a=Object(o["a"])(this.customerRounds.entries());try{for(a.s();!(s=a.n()).done;){var n=Object(i["a"])(s.value,2),r=n[0],c=n[1];if(c.customer_id==e.customer_id){this.customerRounds[r].round=t.target.innerText;break}}}catch(l){a.e(l)}finally{a.f()}}console.log(2,this.customerRounds)},afterAdd:function(t){var e=t.moved.oldIndex,s=t.moved.newIndex,a=this.customers[e];this.customers.splice(e,1),this.customers.splice(s,0,a)},orderCustomer:function(t){var e=t.moved.oldIndex,s=t.moved.newIndex,a=this.newCustomer[e];this.newCustomer.splice(e,1),this.newCustomer.splice(s,0,a)},backPrevios:function(){this.$router.go(-1)},addCustomer:function(){this.$store.commit("modalAdd_State",!0),this.fetchAddCustomer(),this.fetchAddress()},fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("route-plan/"+this.$route.params.id+"/route-plan-detail",{params:{}}).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.customers=e.data.data;var s,a=[],n=Object(o["a"])(t.customers);try{for(n.s();!(s=n.n()).done;){var i=s.value;a.push({customer_id:i.customer_id,round:i.default_round})}}catch(r){n.e(r)}finally{n.f()}t.customerRounds=a,t.getCenter()}),100)})).catch((function(e){if(t.$store.commit("Loading_State",!1),422==e.response.status)for(var s=e.response.data.errors,a=0,n=Object.entries(s);a<n.length;a++){var o=Object(i["a"])(n[a],2),r=o[0],c=o[1];t.server_errors[r]=c[0]}}))},fetchDetail:function(){var t=this;this.$axios.get("route-plan/"+this.$route.params.id).then((function(e){200==e.data.code&&setTimeout((function(){t.plan=e.data.data}),100)})).catch((function(){}))},closeDelete:function(){this.$store.commit("modalDelete_State",!1)},deleteNewCustomer:function(t){this.customerIndex=t,this.$store.commit("modalDelete_State",!0)},deleteNewCustomerConfirm:function(){this.loading=!0,this.newCustomer.splice(this.customerIndex,1),this.$store.commit("Toast_State",{value:!0,color:"success",msg:"ລຶບຂໍ້ມູນສຳເລັດແລ້ວ"}),this.loading=!1,this.$store.commit("modalDelete_State",!1)},addItem:function(t,e){for(var s=e.id,a=!1,n=0;n<t.length;n++)t[n].id===s&&(t[n]=e,a=!0);a&&this.newCustomer.push(e),this.addCustomers.splice(e.index,1)},closeAddModal:function(){this.$store.commit("modalAdd_State",!1)},updateRoutePlan:function(){var t=this,e=this.customers.map((function(t){return t.customer_id})),s=this.newCustomer.map((function(t){return t.id})),a=e.concat(s),n={name:this.plan.name,customers:a,customer_rounds:this.customerRounds};this.customers.length>0?(this.loading=!0,this.$axios.put("update-route-plan/"+this.$route.params.id,n).then((function(e){200==e.status&&(setTimeout((function(){t.loading=!1}),300),t.$router.push({name:"ViewCompanyRoutePlan",params:{id:e.data.data.id}}))})).catch((function(e){t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message}),t.loading=!1}))):this.$store.commit("Toast_State",{value:!0,color:"error",msg:"ກາລຸນາເລືອກລູກຄ້າກ່ອນ"})},viewPage:function(t){this.$router.push({name:"ViewCustomer",params:{id:t}})},fetchAddCustomer:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("company",{params:Object(d["a"])([{page:this.pagination.current_page},{per_page:this.per_page},{filter:this.search},{villages:this.selectedVillage},{district_id:this.selectedDistrict},{cost_by:this.selectedCost},{favorite_dates:this.selectedFavoriteDate},{without:this.selectedCustomerStatus}])}).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.addCustomers=e.data.data.data,t.pagination=e.data.data.pagination}),100)})).catch((function(e){if(t.$store.commit("Loading_State",!1),422==e.response.status)for(var s=e.response.data.errors,a=0,n=Object.entries(s);a<n.length;a++){var o=Object(i["a"])(n[a],2),r=o[0],c=o[1];t.server_errors[r]=c[0]}}))},fetchAddress:function(){var t=this;this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then((function(e){200==e.data.code&&setTimeout((function(){t.address=e.data.data,t.address.map((function(e){t.districts=e.districts}))}),300)})).catch((function(){}))},fetchVillage:function(){var t=this;this.$axios.get("info/district/"+this.selectedDistrict+"/village").then((function(e){200==e.data.code&&setTimeout((function(){t.villages=e.data.data}),300)})).catch((function(){}))},Search:function(){Object(r["a"])(this)},getCenter:function(){if(this.customers.length){if(null==parseFloat(this.customers[0].customer.lat))return this.latlng;var t={lat:parseFloat(this.customers[0].customer.lat),lng:parseFloat(this.customers[0].customer.lng)};return t}return this.latlng},getSiteIcon:function(t){var e={url:s("347c"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}},a={url:s("f742"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},color:"#000",scaledSize:{width:35,height:55,f:"px",b:"px"}};try{switch(t.route_plan_details_count){case 0:return e;case 1:return a}}catch(n){return e}},getMarkers:function(t){if(null!==t.customer)return{lat:parseFloat(t.customer.lat),lng:parseFloat(t.customer.lng)}},toggleInfo:function(t,e){console.log(t),this.infoPosition=this.getMarkers(t),this.infoContent=t.customer.company_name,this.infoCurrentKey==e?this.infoOpened=!this.infoOpened:(this.infoOpened=!0,this.infoCurrentKey=e)},fetchFavorite:function(){var t=this;this.$axios.get("favorite-date").then((function(e){200==e.data.code&&setTimeout((function(){t.favorite_dates=e.data.data}),100)})).catch((function(){}))}},watch:{selectedFavoriteDate:function(){this.pagination.current_page="",this.fetchAddCustomer()},selectedCustomerStatus:function(){this.pagination.current_page="",this.fetchAddCustomer()},search:function(t){""==t&&this.fetchAddCustomer()},selectedVillage:function(){this.fetchAddCustomer()},selectedDistrict:function(){this.fetchAddCustomer(),this.fetchVillage()},selectedCost:function(){this.fetchAddCustomer()}},created:function(){this.fetchData(),this.fetchDetail(),this.fetchFavorite()}},h=u,m=(s("6b56"),s("2877")),f=s("6544"),p=s.n(f),v=s("c6a6"),g=s("2bc5"),b=s("8336"),_=s("b0af"),C=s("99d9"),x=s("cc20"),I=s("62ad"),y=s("a523"),S=s("8fea"),w=s("ce7e"),k=s("132d"),D=s("0fd9"),O=s("b974"),V=s("2fa4"),$=s("8654"),T=Object(m["a"])(h,a,n,!1,null,null,null);e["default"]=T.exports;p()(T,{VAutocomplete:v["a"],VBreadcrumbs:g["a"],VBtn:b["a"],VCard:_["a"],VCardActions:C["a"],VCardText:C["b"],VCardTitle:C["c"],VChip:x["a"],VCol:I["a"],VContainer:y["a"],VDataTable:S["a"],VDivider:w["a"],VIcon:k["a"],VRow:D["a"],VSelect:O["a"],VSpacer:V["a"],VTextField:$["a"]})},"2bfd":function(t,e,s){},"4fad":function(t,e,s){var a=s("23e7"),n=s("6f53").entries;a({target:"Object",stat:!0},{entries:function(t){return n(t)}})},5267:function(t,e,s){},"54da":function(t,e,s){"use strict";var a=s("b85c");s("b64b");e["a"]=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s={},n=Object(a["a"])(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;1==Object.keys(i).length&&i[Object.keys(i)]&&(s[Object.keys(i)]=i[Object.keys(i)])}}catch(o){n.e(o)}finally{n.f()}return s}},"6b56":function(t,e,s){"use strict";s("5267")},c6a6:function(t,e,s){"use strict";var a=s("5530"),n=(s("d81d"),s("4de4"),s("498a"),s("7db0"),s("caad"),s("2532"),s("2bfd"),s("b974")),i=s("8654"),o=s("d9f7"),r=s("80d2"),c=Object(a["a"])(Object(a["a"])({},n["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=n["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,s){return s.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:n["a"].options.props.menuProps.type,default:function(){return c}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var s=Object(r["r"])(e,t.itemText),a=null!=s?String(s):"";return t.filter(e,String(t.internalSearch),a)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=n["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(a["a"])(Object(a["a"])({},c),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=n["a"].options.computed.listData.call(this);return t.props=Object(a["a"])(Object(a["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var s=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){s.internalSearch&&(1===t.length||s.autoSelectFirst)&&(s.$refs.menu.getTiles(),s.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===r["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===r["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==r["y"].backspace&&t!==r["y"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var s=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===s){var a=this.selectedItems.length,n=t!==a-1?t:t-1,i=this.selectedItems[n];i?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=n}else this.selectedIndex=s}},clearableCallback:function(){this.internalSearch=null,n["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.data=Object(o["a"])(t.data,{attrs:{"aria-activedescendant":Object(r["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(r["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=n["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?n["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,s=e.value;e.value&&this.activateMenu(),this.internalSearch=s,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[r["y"].home,r["y"].end].includes(e)||n["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){n["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){n["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){n["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,s;if(-1!==this.selectedIndex){var a=this.selectedItems[this.selectedIndex],n=this.getText(a);null==(e=t.clipboardData)||e.setData("text/plain",n),null==(s=t.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}}})}}]);
//# sourceMappingURL=chunk-344f3869.07b8900f.js.map