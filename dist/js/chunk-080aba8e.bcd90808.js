(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-080aba8e"],{"0fdf":function(t,e,a){},"21ab":function(t,e,a){},3709:function(t,e,a){},"398d":function(t,e,a){"use strict";var s=a("1da9"),i=a("d62f"),n=function(){var t=this,e=t._self._c;return e(i["a"],t._l(t.cards,(function(t,a){return e(s["a"],{key:a},[e("MoneyCard",{attrs:{title:t.status_la||t.title||t.display_type_la,total:t.total,billing_count:t.count_billing,bg_color:t.bg_color,route:t.route,icon:t.icon,icon_color:t.icon_color,unit_count:t.unit_count}})],1)})),1)},l=[],o=a("ca79"),r={components:{MoneyCard:o["a"]},props:["cards"],data(){return{}}},c=r,u=a("4a4e"),d=Object(u["a"])(c,n,l,!1,null,null,null);e["a"]=d.exports},"3a5b":function(t,e,a){},"54da":function(t,e,a){"use strict";e["a"]=function(t){const e={};if(!t[0]){for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&(void 0!==t[e]&&null!==t[e]&&""!==t[e]||delete t[e]);return t}for(const a of t)1==Object.keys(a).length&&a[Object.keys(a)]&&(e[Object.keys(a)]=a[Object.keys(a)]);return e}},"679b":function(t,e,a){"use strict";a("3a5b")},"6ece":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));const s=t=>{""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},a2ba:function(t,e,a){"use strict";a.r(e);var s=a("a892"),i=a("c2f4"),n=a("07b0"),l=a("db5a"),o=a("0f35"),r=a("28e8"),c=a("1da9"),u=a("1789"),d=a("0cb6"),h=a("d415"),m=a("6733"),p=a("1d7d"),g=a("fde7"),_=a("d62f"),f=a("26bf"),v=a("d5cf"),b=a("9b44"),y=function(){var t=this,e=t._self._c;return e(u["a"],[e(_["a"],{staticClass:"mb-n6"},[e(c["a"],[e(_["a"],[e(c["a"],[e(g["a"],{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(b["a"],t._g(t._b({attrs:{label:"ເລີ່ມວັນທີ",readonly:"",outlined:"",dense:"",clearable:""},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}},"v-text-field",s,!1),a))]}}]),model:{value:t.start_menu,callback:function(e){t.start_menu=e},expression:"start_menu"}},[e(h["a"],{model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}})],1)],1),e(c["a"],[e(g["a"],{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(b["a"],t._g(t._b({attrs:{label:"ຫາວັນທີ",readonly:"",outlined:"",dense:"",clearable:""},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}},"v-text-field",s,!1),a))]}}]),model:{value:t.end_menu,callback:function(e){t.end_menu=e},expression:"end_menu"}},[e(h["a"],{model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}})],1)],1),e(c["a"],[e(s["a"],{attrs:{outlined:"",dense:"",items:t.districts,"item-text":"name","item-value":"id",label:"ເມືອງ",clearable:""},model:{value:t.selectedDistrict,callback:function(e){t.selectedDistrict=e},expression:"selectedDistrict"}})],1),e(c["a"],[e(s["a"],{attrs:{outlined:"",dense:"",items:t.villages,"item-text":"name","item-value":"id",label:"ບ້ານ",multiple:"",clearable:""},model:{value:t.selectedVillage,callback:function(e){t.selectedVillage=e},expression:"selectedVillage"}})],1)],1),e(_["a"],[e(c["a"],[e(f["a"],{attrs:{outlined:"",dense:"",items:t.status,"item-text":"name","item-value":"name",label:"ສະຖານະ",multiple:"",clearable:""},model:{value:t.selectedStatus,callback:function(e){t.selectedStatus=e},expression:"selectedStatus"}})],1),e(c["a"],[e(f["a"],{attrs:{outlined:"",dense:"",items:t.customerStatus,"item-text":"name","item-value":"value",label:"ສະຖານະແຜນ",multiple:"",clearable:""},model:{value:t.selectedCustomerStatus,callback:function(e){t.selectedCustomerStatus=e},expression:"selectedCustomerStatus"}})],1),e(c["a"],[e(b["a"],{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"Search",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1),e(c["a"],{attrs:{cols:"6"}},[e(_["a"],[e(c["a"],[e(l["a"],{attrs:{outlined:"",elevation:"5"}},[e(u["a"],{staticClass:"spacing-playground pa-1",attrs:{fluid:""}},[e(_["a"],[e(c["a"],[e("div",{staticClass:"px-4"},[e(r["a"],{staticClass:"text-caption",attrs:{color:"primary",dark:""}},[e(p["a"],[t._v("mdi-home-circle-outline")]),t._v(" ລວມຄົວເຮືອນ ")],1),e(m["a"],{staticClass:"my-4"}),e(_["a"],[e(c["a"],[e("div",{staticClass:"text-caption"},[t._v(" ຄົວເຮືອນ ")]),e("p",[t._v(" "+t._s(Intl.NumberFormat().format(t.pagination.total))+" ")])]),e(m["a"],{staticClass:"my-4",attrs:{vertical:!0}}),e(c["a"],[e("div",{staticClass:"text-caption"},[t._v(" ມູນຄ່າແພັກເກຈ ")]),e("div",{staticClass:"text-h6"},[t._v(" "+t._s(Intl.NumberFormat().format(t.sumData.sum_packages?t.sumData.sum_packages.package_price:0))+" ")])])],1)],1)]),e(c["a"],[e(n["a"],{staticClass:"btn-primary",attrs:{color:"green",loading:t.loading,disabled:t.loading,width:"100%",height:"100%"},on:{click:t.exportData}},[t._v(" Export ")])],1)],1)],1)],1)],1)],1)],1)],1),e(_["a"],[e(c["a"],[e("SaleAdmin",{attrs:{label:"ເລືອກຜູ້ສ້າງ"},on:{change:function(e){return t.fetchData()}},model:{value:t.selectedSale,callback:function(e){t.selectedSale=e},expression:"selectedSale"}})],1)],1),e(_["a"],[e(c["a"],[e(l["a"],{attrs:{outlined:""}},[e(o["b"],[e(_["a"],[e(c["a"],[t._v(" ລວມບິນທັງໝົດ ")])],1),e(_["a"],[e(c["a"],[e("RowSection",{attrs:{cards:t.allMonths}})],1)],1),e(_["a"],[e(c["a"],[e(g["a"],{attrs:{"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(b["a"],t._g(t._b({attrs:{label:"ເດືອນໃນຫົວບິນ",readonly:"",outlined:"",dense:"",color:"cyan","append-icon":"mdi-calendar",clearable:""},model:{value:t.selected_month,callback:function(e){t.selected_month=e},expression:"selected_month"}},"v-text-field",s,!1),a))]}}]),model:{value:t.month_menu,callback:function(e){t.month_menu=e},expression:"month_menu"}},[e(h["a"],{attrs:{type:"month"},model:{value:t.selected_month,callback:function(e){t.selected_month=e},expression:"selected_month"}})],1)],1)],1),t._l(t.sumData.months,(function(a){return e(_["a"],{key:a.month},[e(c["a"],{class:t.selected_month==a.month.substring(0,7)?"teal":"",attrs:{cols:"2"}},[e("span",[e(r["a"],{attrs:{outlined:"",color:"cyan lighten-2",dark:""}},[e(p["a"],[t._v("mdi-calendar")]),t._v(" "+t._s(a.month.substr(0,7)))],1)],1)]),e(c["a"],{class:t.selected_month==a.month.substring(0,7)?"teal":""},[e("RowSection",{attrs:{cards:t.getCardData(a)}})],1)],1)}))],2)],1)],1)],1),e(_["a"],[e(c["a"],[e(l["a"],[e(o["c"],[e(v["a"],{attrs:{label:"ມີບິນເທົ່ານັ້ນ"},on:{change:function(e){return t.fetchData()}},model:{value:t.only_billings,callback:function(e){t.only_billings=e},expression:"only_billings"}})],1),e(o["b"],[e(d["a"],{attrs:{headers:t.headers,items:t.customers,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.media",fn:function({item:a}){return t._l(a.media,(function(a,s){return e(i["a"],{key:s,attrs:{size:"36px"}},[a.thumb?e("img",{attrs:{src:a.thumb}}):t._e()])}))}},{key:"item.status",fn:function({item:a}){return[e(r["a"],{attrs:{label:"",color:t.statusColor(a.status)}},[t._v(" "+t._s(a.status)+" ")])]}},{key:"item.package.price",fn:function({item:e}){return[t._v(" "+t._s(e.package?Intl.NumberFormat().format(e.package.price):0)+" ")]}},{key:"item.roles",fn:function({item:a}){return[e("div",t._l(a.roles,(function(a,s){return e("span",{key:s},[t._v(" "+t._s(a.name)+", ")])})),0)]}},{key:"item.permissions",fn:function({item:a}){return[e("div",t._l(a.permissions,(function(a,s){return e("span",{key:s},[e("span",[t._v(t._s(a.name)+", ")])])})),0)]}},{key:"item.actions",fn:function({item:a}){return[e(p["a"],{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.viewPage(a.id)}}},[t._v(" mdi-eye ")]),a.user&&a.user.billings_count?e(p["a"],{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.viewCustomerBill(a.id)}}},[t._v(" mdi-receipt-text ")]):t._e()]}}])}),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1)],1)],1)},S=[],x=a("6ece"),C=a("54da"),k=a("ccd1"),I=a("398d"),w={name:"Customer",title(){return"Vientiane Waste Co-Dev|Report Customer"},components:{RowSection:I["a"],SaleAdmin:k["a"]},data(){return{sumData:{},selectedSale:"",firstLoad:!0,only_billings:!1,start_date:"",end_date:"",selected_month:this.$route.query.month||(new Date).toISOString().substr(0,7),month_menu:!1,start_menu:!1,end_menu:!1,customers:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:100,search:"",oldVal:"",districts:[],selectedDistrict:"",villages:[],selectedVillage:[],selectedStatus:[],status:[{id:1,name:"active"},{id:2,name:"inactive"},{id:3,name:"trial"}],selectedCustomerStatus:[],customerStatus:[{id:1,value:"no_calendar",name:"ມີແຜນເດີນລົດເກັບ"},{id:2,value:"calendar",name:"ຍັງບໍ່ມີແຜນເດີນລົດເກັບ"},{id:3,value:"no_route_plan",name:"ມີເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ"},{id:4,value:"route_plan",name:"ຍັງບໍ່ມີເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ"}],headers:[{text:"ໄອດີ",value:"customer_id"},{text:"ຊື່",value:"name"},{text:"ນາມສະກຸນ",value:"surname"},{text:"Phone",value:"user.phone",sortable:!1},{text:"ທີ່ຢູ່",value:"district.name",sortable:!1},{text:"ປະເພດບໍລິການ",value:"package.name"},{text:"ບ້ານ",value:"village.name"},{text:"ມູນຄ່າແພັກເກຈ",value:"package.price"},{text:"ຜູ້ສ້າງ",value:"customer_activity.user.full_name"},{text:"ວັນທີສະໝັກ",value:"created_at",sortable:!1},{text:"ສະຖານະ",value:"status",sortable:!1},{text:"",value:"actions",sortable:!1}],toast:{value:!0,color:"success",msg:""},toast_error:{value:!0,color:"error",msg:"Something when wrong!"}}},computed:{params(){return Object(C["a"])([{page:this.pagination.current_page},{per_page:this.per_page},{without_month_info:!0},{without_billing_summary:!0},{only_billings:this.only_billings},{with_billings:!0},{created_by_id:this.selectedSale},{with_created_user:!0},{filter:this.search},{date_from:this.start_date},{date_end:this.end_date},{villages:this.selectedVillage},{statuses:this.selectedStatus},{without:this.selectedCustomerStatus},{district_id:this.selectedDistrict},{month_bill:this.selected_month},{with_count_billing:!0}])},allMonths(){var t,e,a,s,i,n;return[{status_la:"ລວມ",total:null===(t=this.sumData.all)||void 0===t||null===(t=t.total)||void 0===t?void 0:t.total,count_billing:null===(e=this.sumData.all)||void 0===e||null===(e=e.total)||void 0===e?void 0:e.count,bg_color:"blue",route:this.billRoute("","all")},{status_la:"ຈ່າຍແລ້ວ",total:null===(a=this.sumData.all)||void 0===a||null===(a=a.paid)||void 0===a?void 0:a.total,count_billing:null===(s=this.sumData.all)||void 0===s||null===(s=s.paid)||void 0===s?void 0:s.count,bg_color:"green",route:this.billRoute("","paid")},{status_la:"ຕິດໜີ້",total:null===(i=this.sumData.all)||void 0===i||null===(i=i.unpaid)||void 0===i?void 0:i.total,count_billing:null===(n=this.sumData.all)||void 0===n||null===(n=n.unpaid)||void 0===n?void 0:n.count,bg_color:"orange",route:this.billRoute("","unpaid")}]}},watch:{selected_month(){this.pagination.current_page="",this.fetchSum()},start_date(){this.pagination.current_page="",""!==this.end_date&&""!==this.start_date&&this.start_date>this.end_date&&(this.start_date=""),this.fetchData()},end_date(){this.pagination.current_page="",""!==this.end_date&&""!==this.start_date&&this.end_date<this.start_date&&(this.end_date=""),this.fetchData()},search(t){this.pagination.current_page="",""==t&&this.fetchData()},selectedVillage(){this.pagination.current_page="",this.fetchData()},selectedDistrict(){this.pagination.current_page="",this.fetchVillage(),this.fetchData()},selectedStatus(){this.pagination.current_page="",this.fetchData()},selectedCustomerStatus(){this.pagination.current_page="",this.fetchData()},selectedSale(){this.firstLoad||this.fetchData()}},created(){this.fetchData(),this.fetchAddress()},methods:{fetchSum(){this.$store.commit("Loading_State",!0),this.$axios.get("home-billing",{params:this.params}).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.sumData=t.data.data,this.month_menu=!1,this.start_menu=!1,this.end_menu=!1},300)}).catch(t=>{if(this.$store.commit("Loading_State",!1),this.month_menu=!1,this.start_menu=!1,this.end_menu=!1,t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}})},fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("customer",{params:this.params}).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.customers=t.data.data.data,this.pagination=t.data.data.pagination,this.month_menu=!1,this.start_menu=!1,this.end_menu=!1},300)}).catch(t=>{if(this.$store.commit("Loading_State",!1),this.month_menu=!1,this.start_menu=!1,this.end_menu=!1,t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}}).finally(()=>{this.firstLoad=!1,this.fetchSum()})},fetchAddress(){this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then(t=>{200==t.data.code&&setTimeout(()=>{this.address=t.data.data,this.address.map(t=>{this.districts=t.districts})},300)}).catch(()=>{})},fetchVillage(){this.$axios.get(`info/district/${this.selectedDistrict}/village`).then(t=>{200==t.data.code&&setTimeout(()=>{this.villages=t.data.data},300)}).catch(()=>{})},viewPage(t){const e={name:"ViewClient",params:{id:t}};this.openRoute(e)},viewCustomerBill(t){const e={name:"Report-Billing-Customer",query:{customer_id:t,selectedCustomerType:"home"}};this.openRoute(e)},openRoute(t){const e=this.$router.resolve({...t});window.open(e.href)},Search(){Object(x["a"])(this)},statusColor(t){return"active"==t?"primary":"inactive"==t?"error":"info"},exportData(){this.$store.commit("Loading_State",!0),this.$axios.post("export-customer/",this.params).then(t=>{200==t.status&&(null!=t.data.data.download_link&&window.open(t.data.data.download_link),this.$store.commit("Loading_State",!1))}).catch(()=>{this.$store.commit("Toast_State",this.toast_error),this.$store.commit("Loading_State",!1)})},getCardData(t){var e,a,s,i,n,l,o,r;return[{status_la:"ລວມ",total:null===(e=t.status.total)||void 0===e?void 0:e.total,count_billing:null===(a=t.status.total)||void 0===a?void 0:a.count,bg_color:"blue",route:this.billRoute(t.month,"all")},{status_la:"ຈ່າຍແລ້ວ",total:null===(s=t.status.paid)||void 0===s?void 0:s.total,count_billing:null===(i=t.status.paid)||void 0===i?void 0:i.count,bg_color:"green",route:this.billRoute(t.month,"paid")},{status_la:"ຕິດໜີ້",total:null===(n=t.status.unpaid)||void 0===n?void 0:n.total,count_billing:null===(l=t.status.unpaid)||void 0===l?void 0:l.count,bg_color:"orange",route:this.billRoute(t.month,"unpaid")},{status_la:"ບິນຍັງບໍ່ອອກ",total:null===(o=t.no_bill)||void 0===o?void 0:o.package_price,count_billing:null===(r=t.no_bill)||void 0===r?void 0:r.count_customers,bg_color:"red",route:this.billRoute(t.month,"noBill")}]},billRoute(t,e){const a={selectedCustomerType:"home",selectedVillage:this.selectedVillage,selectedDistrict:this.selectedDistrict,selectedDetails:this.selectedDetails,start_date:this.start_date,end_date:this.end_date,created_by:this.selectedSale};t&&(a.billMonth=t),e&&(a.showOne=e);const s=this.$router.resolve({name:"Report-Billing-Customer",query:a});return s}}},D=w,$=(a("679b"),a("4a4e")),V=Object($["a"])(D,y,S,!1,null,null,null);e["default"]=V.exports},a892:function(t,e,a){"use strict";a("0fdf");var s=a("26bf"),i=a("9b44"),n=a("ed44"),l=a("dd08");const o={...s["b"],offsetY:!0,offsetOverflow:!0,transition:!1};e["a"]=s["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,a)=>a.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:s["a"].options.props.menuProps.type,default:()=>o},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>{const e=Object(l["r"])(t,this.itemText),a=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),a)})},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=s["a"].options.computed.$_menuProps.call(this);return t.contentClass=("v-autocomplete__content "+(t.contentClass||"")).trim(),{...o,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue)))},listData(){const t=s["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){if(t!==e){if(!this.autoSelectFirst){const a=e[this.$refs.menu.listIndex];a?this.setMenuIndex(t.findIndex(t=>t===a)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&t.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===l["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===l["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==l["y"].backspace&&t!==l["y"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const a=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==a)return void(this.selectedIndex=a);const s=this.selectedItems.length,i=t!==s-1?t:t-1,n=this.selectedItems[i];n?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=i},clearableCallback(){this.internalSearch=null,s["a"].options.methods.clearableCallback.call(this)},genInput(){const t=i["a"].options.methods.genInput.call(this);return t.data=Object(n["a"])(t.data,{attrs:{"aria-activedescendant":Object(l["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=s["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?s["a"].options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,a=e.value;e.value&&this.activateMenu(),this.multiple||""!==a||this.deleteCurrentItem(),this.internalSearch=a,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[l["y"].home,l["y"].end].includes(e)||s["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){s["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){s["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){s["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,a;if(-1===this.selectedIndex)return;const s=this.selectedItems[this.selectedIndex],i=this.getText(s);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",i),null===(a=t.clipboardData)||void 0===a||a.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}})},bb71:function(t,e,a){"use strict";a("558b");var s=a("9f39"),i=a("ad03"),n=a("d797"),l=n["a"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),o=a("2462"),r=a("9c0c");function c(t){t.preventDefault()}e["a"]=Object(r["a"])(s["a"],l,o["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=s["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:c},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const a=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===a&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}})},ca79:function(t,e,a){"use strict";var s=a("db5a"),i=a("0f35"),n=a("28e8"),l=a("1d7d"),o=(a("558b"),a("ff56"),a("18e5")),r=a("c6cf"),c=a("710c"),u=a("9c0c"),d=a("dd08"),h=Object(u["a"])(o["a"],r["a"],c["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},tile:Boolean,transition:String,type:String,types:{type:Object,default:()=>({})}},computed:{attrs(){return this.isLoading?{"aria-busy":!this.boilerplate||void 0,"aria-live":this.boilerplate?void 0:"polite","aria-label":this.boilerplate?void 0:this.$vuetify.lang.t(this.loadingText),role:this.boilerplate?void 0:"alert",...this.$attrs}:this.$attrs},classes(){return{"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile,...this.themeClasses,...this.elevationClasses}},isLoading(){return!("default"in this.$scopedSlots)||this.loading},rootTypes(){return{actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text",...this.types}}},methods:{genBone(t,e){return this.$createElement("div",{staticClass:`v-skeleton-loader__${t} v-skeleton-loader__bone`},e)},genBones(t){const[e,a]=t.split("@"),s=()=>this.genStructure(e);return Array.from({length:a}).map(s)},genStructure(t){let e=[];t=t||this.type||"";const a=this.rootTypes[t]||"";if(t===a);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);a.indexOf(",")>-1?e=this.mapBones(a):a.indexOf("@")>-1?e=this.genBones(a):a&&e.push(this.genStructure(a))}return[this.genBone(t,e)]},genSkeleton(){const t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(d["s"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave(t){t.style.setProperty("display","none","important")},resetStyles(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}}),m=function(){var t=this,e=t._self._c;return e(s["a"],{attrs:{outlined:"","min-width":"200px"},on:{click:function(e){return t.openNewTab(t.route)}}},[t.title?t._e():e(h,{staticClass:"mx-auto",attrs:{"max-width":"300",type:"card"}}),e(i["c"],{staticClass:"d-flex justify-between w-full text-wrap",staticStyle:{position:"relative"}},[t.icon?e(n["a"],{staticClass:"text-caption text-wrap",attrs:{color:t.icon_color,dark:""}},[e(l["a"],{attrs:{"x-small":!0}},[t._v(" "+t._s(t.icon)+" ")]),e("div",{staticClass:"ml-1 text-caption",attrs:{color:t.icon_color}},[e("p",{staticClass:"ma-0"},[t._v(" "+t._s(t.title)+" ")])])],1):e(n["a"],{staticClass:"text-caption text-wrap",attrs:{color:t.bg_color,dark:t.isContrastingWithWhite(t.bg_color)}},[e("p",{staticClass:"ma-0"},[t._v(" "+t._s(t.title)+" ")])]),null!=t.billing_count&&""!=t.billing_count&&void 0!=t.billing_count?e(n["a"],{staticClass:"text-caption text-wrap",staticStyle:{position:"absolute",right:"10px"},attrs:{color:t.bg_color,outlined:""}},[e("p",{staticClass:"ma-0"},[t._v(" "+t._s(Intl.NumberFormat().format(t.billing_count))+" "+t._s(t.unit_count?t.unit_count:"ບິນ")+" ")])]):t._e()],1),t.total?e(i["b"],[e("p",{staticClass:"ma-0 text-h4 font-weight-bold"},[t._v(" "+t._s(Intl.NumberFormat().format(t.total))+" "+t._s(t.unit_total?t.unit_total:"k")+" ")])]):t._e()],1)},p=[],g={props:["title","billing_count","total","bg_color","route","icon","icon_color","unit_count","unit_total","loading"],data(){return{}},created(){},beforeUpdate(){this.$store.commit("Loading_State",!0)},updated(){this.$store.commit("Loading_State",!1)},methods:{getColor(t){return"background-color: "+t},openNewTab(t){t&&window.open(t.href,"_blank")},isContrastingWithWhite(t){if(t){const e=t=>{const[e,a,s]=t.match(/\w\w/g).map(t=>parseInt(t,16)/255),i=t=>t<=.03928?t/12.92:((t+.055)/1.055)**2.4;return.2126*i(e)+.7152*i(a)+.0722*i(s)},a=Math.abs(e(t)-e("#ffffff"));return a>=.5}}}},_=g,f=a("4a4e"),v=Object(f["a"])(_,m,p,!1,null,null,null);e["a"]=v.exports},ccd1:function(t,e,a){"use strict";var s=a("a892"),i=function(){var t=this,e=t._self._c;return e(s["a"],{attrs:{items:t.sales,label:t.label,dense:"","item-text":"name","item-value":"id",outlined:""},model:{value:t.selectedSale,callback:function(e){t.selectedSale=e},expression:"selectedSale"}})},n=[],l=(a("558b"),a("54da")),o={props:{label:{default:"ເລືອກເຊວທີ່ກ່ຽວຂ້ອງss",type:String},firstSale:{default:""}},data(){return{salesData:[],selectedSale:""}},computed:{sales(){const t=[];for(const e of this.salesData){let a="";e.name&&(a+=e.name+" "),e.phone&&(a+=e.phone+" "),e.emp_name&&(a+=e.emp_name+" "),e.emp_surname&&(a+=e.emp_surname+" "),e.emp_card_id&&(a+=e.emp_card_id),t.push({name:a,id:e.id})}return t}},watch:{selectedSale(){this.$emit("input",this.selectedSale)}},async created(){await this.fetchSale(),this.firstSale&&(this.selectedSale="number"!==typeof this.firstSale?Number.parseInt(this.firstSale):this.selectedSale)},methods:{async fetchSale(){this.$store.commit("Loading_State",!0);const t=await this.$axios.get("user-setting/user",{params:Object(l["a"])([{roles:["sale","sale_admin","sale_register","sale_partner","sale_editor"]},{order_by:"newest"}])}).catch(t=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"})});this.$store.state.isLoading&&(this.salesData=t.data.data,this.$store.commit("Loading_State",!1))}}},r=o,c=a("4a4e"),u=Object(c["a"])(r,i,n,!1,null,null,null);e["a"]=u.exports},d5cf:function(t,e,a){"use strict";a("3709"),a("21ab");var s=a("bb71"),i=a("9f39"),n=a("385b"),l=a("078d"),o=a("a238"),r=a("dd08");e["a"]=s["a"].extend({name:"v-switch",directives:{Touch:n["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...e}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(l["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(o["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(t){(t.keyCode===r["y"].left&&this.isActive||t.keyCode===r["y"].right&&!this.isActive)&&this.onChange()}}})},ff56:function(t,e,a){}}]);
//# sourceMappingURL=chunk-080aba8e.bcd90808.js.map