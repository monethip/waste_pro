(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bb0ce8ac"],{2823:function(e,t,s){"use strict";s.r(t);var a=s("c6a6"),i=s("2bc5"),n=s("8336"),o=s("b0af"),l=s("99d9"),r=s("cc20"),c=s("62ad"),d=s("a523"),u=s("8fea"),h=s("ce7e"),m=s("132d"),p=s("0fd9"),f=s("b974"),g=s("2fa4"),v=s("8654"),_=function(){var e=this,t=e._self._c;return t(d["a"],[t(i["a"],{staticClass:"mt-n4",attrs:{large:""}},[t(n["a"],{staticClass:"text-primary",attrs:{text:""},on:{click:function(t){return e.backPrevios()}}},[t(m["a"],[e._v("mdi-keyboard-backspace")])],1),e._v("ແກ້ໄຂແຜນເສັ້ນທາງ "),t(g["a"]),t("span",{staticClass:"mr-4"},[t(m["a"],{attrs:{color:"red"}},[e._v("mdi-map-marker")]),e._v("ຍັງບໍທັນຢູ່ໃນແຜນ ")],1),t("span",[t(m["a"],{staticStyle:{color:"#49a3da"}},[e._v("mdi-map-marker")]),e._v("ຢູ່ໃນແຜນແລ້ວ ")],1)],1),t(p["a"],[t(c["a"],{staticClass:"mb-4",attrs:{cols:"12"}},[e.customers?t("GmapMap",{staticStyle:{width:"100%",height:"400px"},attrs:{center:e.getCenter().lat>0||e.getCenter().lat<0?e.getCenter():{lat:0,lng:0},zoom:14,"disable-default-u-i":!0}},[t("gmap-info-window",{attrs:{options:e.infoOptions,position:e.infoPosition,opened:e.infoOpened,conent:e.infoContent},on:{closeclick:function(t){e.infoOpened=!1}}},[e._v(" "+e._s(e.infoContent)+" ")]),e._l(e.customers,(function(s,a){return t("GmapMarker",{key:a,attrs:{position:e.getMarkers(s),draggable:!1,icon:e.getSiteIcon(s),animation:2,clickable:!0,label:(a+1).toString()},on:{click:function(t){return e.toggleInfo(s,a)}}})}))],2):e._e()],1)],1),t(p["a"],{staticClass:"mb-n6"},[t(c["a"],{attrs:{cols:"2"}},[t(n["a"],{staticClass:"btn-primary",attrs:{loading:e.loading,disabled:e.loading},on:{click:function(t){return e.updateRoutePlan()}}},[e._v(" ແກ້ໄຂ ")])],1),t(c["a"],{attrs:{cols:"2"}},[e.customers?t("h4",[e._v(" ລວມ "+e._s(e.customers.length)+" ")]):e._e()]),t(c["a"],{attrs:{cols:"6"}},[t(v["a"],{attrs:{label:"Name",required:"",outlined:"",dense:""},model:{value:e.plan.name,callback:function(t){e.$set(e.plan,"name",t)},expression:"plan.name"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.name)+" ")])],1),t(c["a"],{attrs:{cols:"2"}},[t(v["a"],{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຄົ້ນຫາ",type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Search()}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),t("div",[t(o["a"],[t(l["b"],[t(p["a"],[t(c["a"],[t("h4",[e._v("ລູກຄ້າທີ່ມີຢູ່")]),t("main",{staticClass:"page page--table"},[t(u["a"],{staticClass:"page__table",attrs:{headers:e.headers,items:e.customers,search:e.search,"disable-pagination":!0,"hide-default-footer":"","item-key":"id"},scopedSlots:e._u([{key:"body",fn:function(s){return[t("draggable",{attrs:{list:s.items,tag:"tbody"},on:{change:e.afterAdd}},e._l(s.items,(function(s,a){return t("tr",{key:a},[t("td",[t(m["a"],{staticClass:"page__grab-icon",attrs:{small:""}},[e._v(" mdi-arrow-all ")])],1),t("td",[e._v(e._s(s.priority))]),t("td",[e._v(e._s(s.id))]),t("td",[t("div",[e._v(e._s(s.customer.company_name))])]),t("td",{attrs:{contenteditable:""},on:{input:t=>e.onInputRound(t,s)}},[e._v(" "+e._s(e.getRound(s))+" ")]),t("td")])})),0)]}}]),model:{value:e.selectedRows,callback:function(t){e.selectedRows=t},expression:"selectedRows"}})],1)]),t(h["a"],{attrs:{vertical:""}}),t(c["a"],[t(p["a"],{staticClass:"mb-n8"},[t(c["a"],[t("div",{staticClass:"mb-2"},[t(n["a"],{attrs:{text:"",color:"primary"},on:{click:e.addCustomer}},[t(m["a"],{attrs:{medium:""}},[e._v(" mdi-plus ")]),e._v("ເພີ່ມລູກຄ້າ ")],1)],1)]),t(g["a"]),t(c["a"],[t("h4",[e._v("ລູກຄ້າທີ່ເພີ່ມເຂົ້າໃໝ່")])])],1),t("main",{staticClass:"page page--table"},[t(u["a"],{staticClass:"page__table",attrs:{headers:e.newHeaders,items:e.newCustomer,search:e.search,"disable-pagination":!0,"hide-default-footer":"","item-key":"id"},scopedSlots:e._u([{key:"body",fn:function(s){return[t("draggable",{attrs:{list:s.items,tag:"tbody"},on:{change:e.orderCustomer}},e._l(s.items,(function(s,a){return t("tr",{key:a},[t("td",[t(m["a"],{staticClass:"page__grab-icon",attrs:{small:""}},[e._v(" mdi-arrow-all ")])],1),t("td",[e._v(e._s(s.id))]),t("td",[s?t("div",[t("div",[e._v(e._s(s.company_name))])]):e._e()]),t("td",[e._v(e._s(s.district.name))]),t("td",[t(m["a"],{attrs:{small:""},on:{click:function(t){return e.deleteNewCustomer(a)}}},[e._v(" mdi-delete ")])],1)])})),0)]}}]),model:{value:e.selectedRows,callback:function(t){e.selectedRows=t},expression:"selectedRows"}})],1)],1)],1)],1)],1)],1),t("ModalAdd",[[t(o["a"],[t(l["c"],[t("span",{staticClass:"headline"},[e._v("Add customer to route plan")])]),t(l["b"],[t(d["a"],[t(p["a"],{staticClass:"mb-n6"},[t(c["a"],{attrs:{cols:""}},[t(f["a"],{attrs:{outlined:"",dense:"",items:e.favorite_dates,"item-text":"name","item-value":"name",label:"ມື້ບໍລິການ",multiple:""},model:{value:e.selectedFavoriteDate,callback:function(t){e.selectedFavoriteDate=t},expression:"selectedFavoriteDate"}})],1),t(c["a"],[t(a["a"],{attrs:{outlined:"",dense:"",items:e.customerStatus,"item-text":"name","item-value":"value",label:"ສະຖານະລູກຄ້າ",multiple:"",clearable:""},model:{value:e.selectedCustomerStatus,callback:function(t){e.selectedCustomerStatus=t},expression:"selectedCustomerStatus"}})],1),t(c["a"],[t(f["a"],{attrs:{outlined:"",dense:"",items:e.costs,"item-text":"name","item-value":"value",label:"ປະເພດບໍລິການ",multiple:""},model:{value:e.selectedCost,callback:function(t){e.selectedCost=t},expression:"selectedCost"}})],1)],1),t(p["a"],[t(c["a"],[t(a["a"],{attrs:{outlined:"",dense:"",items:e.districts,"item-text":"name","item-value":"id",label:"ເມືອງ",clearable:""},model:{value:e.selectedDistrict,callback:function(t){e.selectedDistrict=t},expression:"selectedDistrict"}})],1)],1),t(p["a"],[t(c["a"],[t(a["a"],{attrs:{items:e.villages,"item-text":"name","item-value":"id",label:"ເລືອກບ້ານ",filled:"",chips:"",color:"blue-grey lighten-2",multiple:""},scopedSlots:e._u([{key:"selection",fn:function(s){return[t(r["a"],e._b({attrs:{"input-value":s.selected,close:""},on:{click:s.select,"click:close":function(t){return e.remove(s.item)}}},"v-chip",s.attrs,!1),[e._v(" "+e._s(s.item.name)+" ")])]}}]),model:{value:e.selectedVillage,callback:function(t){e.selectedVillage=t},expression:"selectedVillage"}})],1)],1),t(u["a"],{staticClass:"page__table",attrs:{headers:e.addheaders,items:e.addCustomers,"disable-pagination":!0,"hide-default-footer":"","item-key":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[t(v["a"],{staticClass:"mx-4",attrs:{label:"Search"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.fetchAddCustomer.apply(null,arguments)}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]},proxy:!0},{key:"body",fn:function(s){return[t("draggable",{attrs:{list:s.items,tag:"tbody"},on:{change:e.afterAdd}},e._l(s.items,(function(s,a){return t("tr",{key:a},[t("td",[e._v(e._s(a+1))]),t("td",[e._v(e._s(s.id))]),t("td",[e._v(e._s(s.company_name))]),t("td",[e._v(e._s(s.user.phone))]),t("td",[e._v(e._s(s.village.name))]),t("td",[e._v(e._s(s.district.name))]),t("td",[t(m["a"],{attrs:{small:""},on:{click:function(t){return e.addItem(e.addCustomers,s)}}},[e._v(" mdi-plus ")])],1)])})),0)]}}]),model:{value:e.selectedRows,callback:function(t){e.selectedRows=t},expression:"selectedRows"}}),t("br"),[e.pagination.total_pages>1?t("Pagination",{attrs:{pagination:e.pagination,offset:e.offset},on:{paginate:function(t){return e.fetchAddCustomer()}}}):e._e()]],2),t(l["a"],[t(g["a"]),t(n["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.closeAddModal()}}},[e._v(" Close ")])],1)],1)],1)]],2),t("ModalDelete",[[t(l["a"],[t(g["a"]),t(n["a"],{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v(" Cancel ")]),t(n["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.deleteNewCustomerConfirm}},[e._v(" OK ")]),t(g["a"])],1)]],2)],1)},b=[],x=(s("14d9"),s("6eceb")),C=s("b76a"),I=s.n(C),y=s("54da"),S={name:"Customer",components:{draggable:I.a},data(){return{customers:[],addCustomers:[],customersId:[],customerRounds:[],countcutomer:0,loading:!1,customerId:"",offset:12,pagination:{},per_page:100,search:"",oldVal:"",selectedVillage:[],selectedCustomer:[],exclude_customers:[],selectedRows:[],newCustomer:[],districts:[],selectedDistrict:"",villages:[],customer:{},customerIndex:"",name:"",server_errors:{},plan:{},selectedCost:[],favorite_dates:[],selectedFavoriteDate:[],costs:[{id:1,value:"container",name:"ຄອນເທັນເນີ"},{id:2,value:"fix_cost",name:"ທຸລະກິດເປັນຖ້ຽວ"},{id:3,value:"chartered",name:"ມອບເໝົາ"},{id:4,value:"bag",name:"ບໍລິມາດ"},{id:5,value:"32km",name:"ຫຼັກ32"},{id:6,value:"infect",name:"ຂີ້ເຫຍື້ອຕິດເຊື້ອ"}],selectedCustomerStatus:[],customerStatus:[{id:1,value:"calendar",name:"ຍັງບໍ່ມີແຜນເດີນລົດ"},{id:2,value:"route_plan",name:"ຍັງບໍ່ມີເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ"}],headers:[{text:"",value:""},{text:"ລຳດັບ",value:""},{text:"Id",value:"id"},{text:"ລູກຄ້າ",value:""},{text:"ຈຳນວນຮອບເລີ່ມຕົ້ນ",value:""},{text:"",value:"actions",sortable:!1}],newHeaders:[{text:"",value:""},{text:"Id",value:"id"},{text:"ລູກຄ້າ",value:""},{text:"ທີ່ຢູ່",value:"address_detail"},{text:"ລາຍລະອຽດການບໍລິການ",value:"collect_description"},{text:"",value:"actions",sortable:!1}],addheaders:[{text:"#",value:""},{text:"Id",value:"id"},{text:"ລູກຄ້າ",value:""},{text:"Phone",value:"user.phone",sortable:!1},{text:"ທີ່ຢູ່",value:"address_detail"},{text:"ລາຍລະອຽດການບໍລິການ",value:"collect_description"},{text:"",value:"actions",sortable:!1}],latlng:{lat:0,lng:0},markers:[],infoPosition:null,infoContent:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35}}}},watch:{selectedFavoriteDate(){this.pagination.current_page="",this.fetchAddCustomer()},selectedCustomerStatus(){this.pagination.current_page="",this.fetchAddCustomer()},search(e){""!=e&&this.fetchAddCustomer()},selectedVillage(){this.fetchAddCustomer()},selectedDistrict(){this.fetchAddCustomer(),this.fetchVillage()},selectedCost(){this.fetchAddCustomer()}},created(){this.fetchData(),this.fetchDetail(),this.fetchFavorite()},methods:{getRound(e){const t=this.customerRounds.find(t=>t.customer_id==e.customer_id);if(t)return t.round},onInputRound(e,t){if(console.log(1,this.customerRounds),e.target.innerText&&!Number.isNaN(e.target.innerText))for(const[s,a]of this.customerRounds.entries())if(a.customer_id==t.customer_id){this.customerRounds[s].round=e.target.innerText;break}console.log(2,this.customerRounds)},afterAdd(e){const{oldIndex:t}=e.moved,{newIndex:s}=e.moved,a=this.customers[t];this.customers.splice(t,1),this.customers.splice(s,0,a)},orderCustomer(e){const{oldIndex:t}=e.moved,{newIndex:s}=e.moved,a=this.newCustomer[t];this.newCustomer.splice(t,1),this.newCustomer.splice(s,0,a)},backPrevios(){this.$router.go(-1)},addCustomer(){this.$store.commit("modalAdd_State",!0),this.fetchAddCustomer(),this.fetchAddress()},fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get(`route-plan/${this.$route.params.id}/route-plan-detail`,{params:{}}).then(e=>{200==e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.customers=e.data.data;const t=[];for(const e of this.customers)t.push({customer_id:e.customer_id,round:e.default_round});this.customerRounds=t,this.getCenter()},100)}).catch(e=>{if(this.$store.commit("Loading_State",!1),e.response&&422==e.response.status){const t=e.response.data.errors;for(const[e,s]of Object.entries(t))this.server_errors[e]=s[0]}})},fetchDetail(){this.$axios.get("route-plan/"+this.$route.params.id).then(e=>{200==e.data.code&&setTimeout(()=>{this.plan=e.data.data},100)}).catch(()=>{})},closeDelete(){this.$store.commit("modalDelete_State",!1)},deleteNewCustomer(e){this.customerIndex=e,this.$store.commit("modalDelete_State",!0)},deleteNewCustomerConfirm(){this.loading=!0,this.newCustomer.splice(this.customerIndex,1),this.$store.commit("Toast_State",{value:!0,color:"success",msg:"ລຶບຂໍ້ມູນສຳເລັດແລ້ວ"}),this.loading=!1,this.$store.commit("modalDelete_State",!1)},addItem(e,t){const s=t.id;let a=!1;for(let i=0;i<e.length;i++)e[i].id===s&&(e[i]=t,a=!0);a&&this.newCustomer.push(t),this.addCustomers.splice(t.index,1)},closeAddModal(){this.$store.commit("modalAdd_State",!1)},updateRoutePlan(){const e=this.customers.map(e=>e.customer_id),t=this.newCustomer.map(e=>e.id),s=e.concat(t),a={name:this.plan.name,customers:s,customer_rounds:this.customerRounds};this.customers.length?(this.loading=!0,this.$axios.put("update-route-plan/"+this.$route.params.id,a).then(e=>{200==e.status&&(setTimeout(()=>{this.loading=!1},300),this.$router.push({name:"ViewCompanyRoutePlan",params:{id:e.data.data.id}}))}).catch(e=>{this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),this.loading=!1})):this.$store.commit("Toast_State",{value:!0,color:"error",msg:"ກາລຸນາເລືອກລູກຄ້າກ່ອນ"})},viewPage(e){this.$router.push({name:"ViewClient",params:{id:e}})},fetchAddCustomer(){this.$store.commit("Loading_State",!0),this.$axios.get("company",{params:Object(y["a"])([{page:this.pagination.current_page},{per_page:this.per_page},{filter:this.search},{villages:this.selectedVillage},{district_id:this.selectedDistrict},{cost_by:this.selectedCost},{favorite_dates:this.selectedFavoriteDate},{without:this.selectedCustomerStatus},{filter:this.search}])}).then(e=>{200==e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.addCustomers=e.data.data.data,this.pagination=e.data.data.pagination},100)}).catch(e=>{if(this.$store.commit("Loading_State",!1),e.response&&422==e.response.status){const t=e.response.data.errors;for(const[e,s]of Object.entries(t))this.server_errors[e]=s[0]}})},fetchAddress(){this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then(e=>{200==e.data.code&&setTimeout(()=>{this.address=e.data.data,this.address.map(e=>{this.districts=e.districts})},300)}).catch(()=>{})},fetchVillage(){this.$axios.get(`info/district/${this.selectedDistrict}/village`).then(e=>{200==e.data.code&&setTimeout(()=>{this.villages=e.data.data},300)}).catch(()=>{})},Search(){Object(x["a"])(this)},getCenter(){if(this.customers.length){if(null==parseFloat(this.customers[0].customer.lat))return this.latlng;const e={lat:parseFloat(this.customers[0].customer.lat),lng:parseFloat(this.customers[0].customer.lng)};return e}return this.latlng},getSiteIcon(e){const t={url:s("347c"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}},a={url:s("f742"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},color:"#000",scaledSize:{width:35,height:55,f:"px",b:"px"}};try{switch(e.route_plan_details_count){case 0:return t;case 1:return a}}catch(i){return t}},getMarkers(e){if(null!==e.customer)return{lat:parseFloat(e.customer.lat),lng:parseFloat(e.customer.lng)}},toggleInfo(e,t){console.log(e),this.infoPosition=this.getMarkers(e),this.infoContent=e.customer.company_name,this.infoCurrentKey==t?this.infoOpened=!this.infoOpened:(this.infoOpened=!0,this.infoCurrentKey=t)},fetchFavorite(){this.$axios.get("favorite-date").then(e=>{200==e.data.code&&setTimeout(()=>{this.favorite_dates=e.data.data},100)}).catch(()=>{})}}},k=S,w=(s("520f"),s("2877")),D=Object(w["a"])(k,_,b,!1,null,null,null);t["default"]=D.exports},"2bfd":function(e,t,s){},"347c":function(e,t,s){e.exports=s.p+"img/pin1.d74f27bd.svg"},"520f":function(e,t,s){"use strict";s("ce7e5")},"54da":function(e,t,s){"use strict";t["a"]=function(e){const t={};if(!e[0]){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(void 0!==e[t]&&null!==e[t]&&""!==e[t]||delete e[t]);return e}for(const s of e)1==Object.keys(s).length&&s[Object.keys(s)]&&(t[Object.keys(s)]=s[Object.keys(s)]);return t}},c6a6:function(e,t,s){"use strict";s("2bfd");var a=s("b974"),i=s("8654"),n=s("d9f7"),o=s("80d2");const l={...a["b"],offsetY:!0,offsetOverflow:!0,transition:!1};t["a"]=a["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:a["a"].options.props.menuProps.type,default:()=>l},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(o["r"])(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=a["a"].options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...l,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=a["a"].options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){if(e!==t){if(!this.autoSelectFirst){const s=t[this.$refs.menu.listIndex];s?this.setMenuIndex(e.findIndex(e=>e===s)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&e.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===o["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===o["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==o["y"].backspace&&e!==o["y"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const a=this.selectedItems.length,i=e!==a-1?e:e-1,n=this.selectedItems[i];n?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=i},clearableCallback(){this.internalSearch=null,a["a"].options.methods.clearableCallback.call(this)},genInput(){const e=i["a"].options.methods.genInput.call(this);return e.data=Object(n["a"])(e.data,{attrs:{"aria-activedescendant":Object(o["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(o["p"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=a["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?a["a"].options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[o["y"].home,o["y"].end].includes(t)||a["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){a["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){a["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){a["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,s;if(-1===this.selectedIndex)return;const a=this.selectedItems[this.selectedIndex],i=this.getText(a);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",i),null===(s=e.clipboardData)||void 0===s||s.setData("text/vnd.vuetify.autocomplete.item+plain",i),e.preventDefault()}}})},ce7e5:function(e,t,s){},f742:function(e,t,s){e.exports=s.p+"img/pin2.b23d8eec.svg"}}]);
//# sourceMappingURL=chunk-bb0ce8ac.9f4c4c86.js.map