(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51c63ee4"],{"2bfd":function(t,e,a){},"398d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",t._l(t.cards,(function(t,e){return a("v-col",{key:e},[a("MoneyCard",{attrs:{title:t.status_la,total:t.total,billing_count:t.count_billing,bg_color:t.bg_color}})],1)})),1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticStyle:{height:"100px"},attrs:{outlined:""}},[a("v-card-title",{staticClass:"d-flex justify-between w-full",staticStyle:{position:"relative"}},[a("v-chip",{staticClass:"text-caption",attrs:{color:t.bg_color,dark:""}},[t._v(t._s(t.title))]),a("v-chip",{staticStyle:{position:"absolute",right:"10px"},attrs:{color:t.bg_color,outlined:""}},[t._v(t._s(Intl.NumberFormat().format(t.billing_count))+" ບິນ")])],1),a("v-card-text",[a("p",{staticClass:"text-h5"},[t._v(t._s(Intl.NumberFormat().format(t.total))+" K")])])],1)},o=[],l={props:["title","billing_count","total","bg_color"],data:function(){return{}},methods:{getColor:function(t){return"background-color: "+t}},created:function(){console.log(this.billing_count)}},c=l,r=a("2877"),u=a("6544"),d=a.n(u),h=a("b0af"),m=a("99d9"),v=a("cc20"),f=Object(r["a"])(c,s,o,!1,null,null,null),p=f.exports;d()(f,{VCard:h["a"],VCardText:m["b"],VCardTitle:m["c"],VChip:v["a"]});var _={props:["cards"],components:{MoneyCard:p},data:function(){return{}}},g=_,b=a("62ad"),x=a("0fd9"),S=Object(r["a"])(g,n,i,!1,null,null,null);e["a"]=S.exports;d()(S,{VCol:b["a"],VRow:x["a"]})},"3e86":function(t,e,a){"use strict";a("52dc")},"4fad":function(t,e,a){var n=a("23e7"),i=a("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return i(t)}})},"52dc":function(t,e,a){},"54da":function(t,e,a){"use strict";var n=a("b85c");a("b64b");e["a"]=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a={},i=Object(n["a"])(e);try{for(i.s();!(t=i.n()).done;){var s=t.value;1==Object.keys(s).length&&s[Object.keys(s)]&&(a[Object.keys(s)]=s[Object.keys(s)])}}catch(o){i.e(o)}finally{i.f()}return a}},"6eceb":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("ac1f"),a("841c");var n=function(t){""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},a2ba:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"mb-n6"},[a("v-col",[a("v-row",[a("v-col",[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"ເລີ່ມວັນທີ",readonly:"",outlined:"",dense:"",clearable:""},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}},"v-text-field",i,!1),n))]}}]),model:{value:t.start_menu,callback:function(e){t.start_menu=e},expression:"start_menu"}},[a("v-date-picker",{model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}})],1)],1),a("v-col",[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"ຫາວັນທີ",readonly:"",outlined:"",dense:"",clearable:""},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}},"v-text-field",i,!1),n))]}}]),model:{value:t.end_menu,callback:function(e){t.end_menu=e},expression:"end_menu"}},[a("v-date-picker",{model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}})],1)],1),a("v-col",[a("v-autocomplete",{attrs:{outlined:"",dense:"",items:t.districts,"item-text":"name","item-value":"id",label:"ເມືອງ",clearable:""},model:{value:t.selectedDistrict,callback:function(e){t.selectedDistrict=e},expression:"selectedDistrict"}})],1),a("v-col",[a("v-autocomplete",{attrs:{outlined:"",dense:"",items:t.villages,"item-text":"name","item-value":"id",label:"ບ້ານ",multiple:"",clearable:""},model:{value:t.selectedVillage,callback:function(e){t.selectedVillage=e},expression:"selectedVillage"}})],1)],1),a("v-row",[a("v-col",[a("v-select",{attrs:{outlined:"",dense:"",items:t.status,"item-text":"name","item-value":"name",label:"ສະຖານະ",multiple:"",clearable:""},model:{value:t.selectedStatus,callback:function(e){t.selectedStatus=e},expression:"selectedStatus"}})],1),a("v-col",[a("v-select",{attrs:{outlined:"",dense:"",items:t.customerStatus,"item-text":"name","item-value":"value",label:"ສະຖານະແຜນ",multiple:"",clearable:""},model:{value:t.selectedCustomerStatus,callback:function(e){t.selectedCustomerStatus=e},expression:"selectedCustomerStatus"}})],1),a("v-col",[a("v-text-field",{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"Search",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1),a("v-col",{attrs:{cols:"4"}},[a("v-row",[a("v-col",[a("v-card",{attrs:{outlined:"",elevation:"5"}},[a("v-container",{staticClass:"spacing-playground pa-1",attrs:{fluid:""}},[a("v-row",[a("v-col",[a("div",{staticClass:"px-4"},[a("v-chip",{staticClass:"text-caption",attrs:{color:"primary",dark:""}},[a("v-icon",[t._v("mdi-home-circle-outline")]),t._v(" ລວມຄົວເຮືອນ")],1),a("v-divider",{staticClass:"my-4"}),a("p",{staticClass:"text-h5"},[t._v(" "+t._s(Intl.NumberFormat().format(t.pagination.total))+" ")])],1)]),a("v-col",[a("v-btn",{staticClass:"btn-primary",attrs:{color:"green",loading:t.loading,disabled:t.loading,width:"100%",height:"100%"},on:{click:t.exportData}},[t._v("Export ")])],1)],1)],1)],1)],1)],1)],1)],1),a("v-row",[a("v-col",[a("v-card",{attrs:{outlined:""}},[a("v-card-text",[a("v-row",[a("v-col",[a("v-menu",{attrs:{"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"ເດືອນໃນຫົວບິນ",readonly:"",outlined:"",dense:"",color:"cyan","append-icon":"mdi-calendar",clearable:""},model:{value:t.selected_month,callback:function(e){t.selected_month=e},expression:"selected_month"}},"v-text-field",i,!1),n))]}}]),model:{value:t.month_menu,callback:function(e){t.month_menu=e},expression:"month_menu"}},[a("v-date-picker",{attrs:{type:"month"},model:{value:t.selected_month,callback:function(e){t.selected_month=e},expression:"selected_month"}})],1)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"2"}},[a("span",[a("v-chip",{attrs:{outlined:"",color:"cyan lighten-2",dark:""}},[a("v-icon",[t._v("mdi-calendar")]),t._v(" "+t._s(t.pastMonth))],1)],1)]),a("v-col",[a("RowSection",{attrs:{cards:t.pasts}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"2"}},[a("span",[a("v-chip",{attrs:{color:"cyan",dark:""}},[a("v-icon",[t._v("mdi-calendar")]),t._v(" "+t._s(t.selected_month))],1)],1)]),a("v-col",[a("RowSection",{attrs:{cards:t.recents}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"2"}},[a("span",[a("v-chip",{attrs:{outlined:"",color:"cyan darken-2",dark:""}},[a("v-icon",[t._v("mdi-calendar")]),t._v(" "+t._s(t.nextMonth))],1)],1)]),a("v-col",[a("RowSection",{attrs:{cards:t.nexts}})],1)],1)],1)],1)],1)],1),a("v-row",[a("v-col",[a("v-card",[a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.customers,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.media",fn:function(e){var n=e.item;return t._l(n.media,(function(e,n){return a("v-avatar",{key:n,attrs:{size:"36px"}},[e.thumb?a("img",{attrs:{src:e.thumb}}):t._e()])}))}},{key:"item.status",fn:function(e){var n=e.item;return[a("v-chip",{attrs:{label:"",color:t.statusColor(n.status)}},[t._v(t._s(n.status))])]}},{key:"item.roles",fn:function(e){var n=e.item;return[a("div",t._l(n.roles,(function(e,n){return a("span",{key:n},[t._v(" "+t._s(e.name)+", ")])})),0)]}},{key:"item.permissions",fn:function(e){var n=e.item;return[a("div",t._l(n.permissions,(function(e,n){return a("span",{key:n},[a("span",[t._v(t._s(e.name)+", ")])])})),0)]}},{key:"item.actions",fn:function(e){var n=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.viewPage(n.id)}}},[t._v(" mdi-eye ")])]}}])}),a("br"),[t.pagination.total_pages>1?a("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1)],1)],1)},i=[],s=a("3835"),o=(a("4fad"),a("d3b7"),a("d81d"),a("ac1f"),a("841c"),a("6eceb")),l=a("54da"),c=a("398d"),r=a("c1df"),u=a.n(r),d={name:"Customer",title:function(){return"Vientiane Waste Co-Dev|Report Customer"},components:{RowSection:c["a"]},data:function(){return{sumData:{},start_date:"",end_date:"",selected_month:this.$route.query.month||(new Date).toISOString().substr(0,7),month_menu:!1,start_menu:!1,end_menu:!1,customers:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:100,search:"",oldVal:"",districts:[],selectedDistrict:"",villages:[],selectedVillage:[],selectedStatus:[],status:[{id:1,name:"active"},{id:2,name:"inactive"},{id:3,name:"trial"}],selectedCustomerStatus:[],customerStatus:[{id:1,value:"calendar",name:"ຍັງບໍ່ມີແຜນເດີນລົດເກັບ"},{id:2,value:"route_plan",name:"ຍັງບໍ່ມີເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ"}],headers:[{text:"ຊື່",value:"name"},{text:"ນາມສະກຸນ",value:"surname"},{text:"Phone",value:"user.phone",sortable:!1},{text:"ທີ່ຢູ່",value:"district.name",sortable:!1},{text:"ປະເພດບໍລິການ",value:"package.name"},{text:"ວັນທີສະໝັກ",value:"created_at",sortable:!1},{text:"ສະຖານະ",value:"status",sortable:!1},{text:"",value:"actions",sortable:!1}],toast:{value:!0,color:"success",msg:""},toast_error:{value:!0,color:"error",msg:"Something when wrong!"}}},methods:{fetchSum:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("home-billing",{params:this.params}).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.sumData=e.data.data,t.month_menu=!1,t.start_menu=!1,t.end_menu=!1}),300)})).catch((function(e){if(t.$store.commit("Loading_State",!1),t.month_menu=!1,t.start_menu=!1,t.end_menu=!1,e.response&&422==e.response.status)for(var a=e.response.data.errors,n=0,i=Object.entries(a);n<i.length;n++){var o=Object(s["a"])(i[n],2),l=o[0],c=o[1];t.server_errors[l]=c[0]}}))},fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("customer",{params:this.params}).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.customers=e.data.data.data,t.pagination=e.data.data.pagination,t.month_menu=!1,t.start_menu=!1,t.end_menu=!1}),300)})).catch((function(e){if(t.$store.commit("Loading_State",!1),t.month_menu=!1,t.start_menu=!1,t.end_menu=!1,e.response&&422==e.response.status)for(var a=e.response.data.errors,n=0,i=Object.entries(a);n<i.length;n++){var o=Object(s["a"])(i[n],2),l=o[0],c=o[1];t.server_errors[l]=c[0]}})).finally((function(){return t.fetchSum()}))},fetchAddress:function(){var t=this;this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then((function(e){200==e.data.code&&setTimeout((function(){t.address=e.data.data,t.address.map((function(e){t.districts=e.districts}))}),300)})).catch((function(){}))},fetchVillage:function(){var t=this;this.$axios.get("info/district/"+this.selectedDistrict+"/village").then((function(e){200==e.data.code&&setTimeout((function(){t.villages=e.data.data}),300)})).catch((function(){}))},viewPage:function(t){this.$router.push({name:"ViewClient",params:{id:t}})},Search:function(){Object(o["a"])(this)},statusColor:function(t){return"active"==t?"primary":"inactive"==t?"error":"info"},exportData:function(){var t=this;this.loading=!0,this.$axios.post("export-customer/",{params:this.params}).then((function(e){200==e.status&&(null!=e.data.data.download_link&&window.open(e.data.data.download_link),t.loading=!1)})).catch((function(){t.$store.commit("Toast_State",t.toast_error),t.loading=!1}))}},computed:{params:function(){return Object(l["a"])([{page:this.pagination.current_page},{per_page:this.per_page},{filter:this.search},{date_from:this.start_date},{date_end:this.end_date},{villages:this.selectedVillage},{statuses:this.selectedStatus},{without:this.selectedCustomerStatus},{district_id:this.selectedDistrict},{month_bill:this.selected_month}])},pastMonth:function(){return this.selected_month?u()(this.selected_month).subtract(1,"months").format("Y-MM"):null},nextMonth:function(){return this.selected_month?u()(this.selected_month).add(1,"months").format("Y-MM"):null},pasts:function(){var t,e,a,n,i,s,o,l,c,r,u,d;return[{status_la:"ລວມ",total:null===(t=this.sumData.past)||void 0===t||null===(e=t.total)||void 0===e?void 0:e.total,count_billing:null===(a=this.sumData.past)||void 0===a||null===(n=a.total)||void 0===n?void 0:n.count,bg_color:"blue"},{status_la:"ຈ່າຍແລ້ວ",total:null===(i=this.sumData.past)||void 0===i||null===(s=i.paid)||void 0===s?void 0:s.total,count_billing:null===(o=this.sumData.past)||void 0===o||null===(l=o.paid)||void 0===l?void 0:l.count,bg_color:"green"},{status_la:"ຕິດໜີ້",total:null===(c=this.sumData.past)||void 0===c||null===(r=c.unpaid)||void 0===r?void 0:r.total,count_billing:null===(u=this.sumData.past)||void 0===u||null===(d=u.unpaid)||void 0===d?void 0:d.count,bg_color:"orange"}]},recents:function(){var t,e,a,n,i,s,o,l,c,r,u,d;return[{status_la:"ລວມ",total:null===(t=this.sumData.recent)||void 0===t||null===(e=t.total)||void 0===e?void 0:e.total,count_billing:null===(a=this.sumData.recent)||void 0===a||null===(n=a.total)||void 0===n?void 0:n.count,bg_color:"blue"},{status_la:"ຈ່າຍແລ້ວ",total:null===(i=this.sumData.recent)||void 0===i||null===(s=i.paid)||void 0===s?void 0:s.total,count_billing:null===(o=this.sumData.recent)||void 0===o||null===(l=o.paid)||void 0===l?void 0:l.count,bg_color:"green"},{status_la:"ຕິດໜີ້",total:null===(c=this.sumData.recent)||void 0===c||null===(r=c.unpaid)||void 0===r?void 0:r.total,count_billing:null===(u=this.sumData.recent)||void 0===u||null===(d=u.unpaid)||void 0===d?void 0:d.count,bg_color:"orange"}]},nexts:function(){var t,e,a,n,i,s,o,l,c,r,u,d;return[{status_la:"ລວມ",total:null===(t=this.sumData.next)||void 0===t||null===(e=t.total)||void 0===e?void 0:e.total,count_billing:null===(a=this.sumData.next)||void 0===a||null===(n=a.total)||void 0===n?void 0:n.count,bg_color:"blue"},{status_la:"ຈ່າຍແລ້ວ",total:null===(i=this.sumData.next)||void 0===i||null===(s=i.paid)||void 0===s?void 0:s.total,count_billing:null===(o=this.sumData.next)||void 0===o||null===(l=o.paid)||void 0===l?void 0:l.count,bg_color:"green"},{status_la:"ຕິດໜີ້",total:null===(c=this.sumData.next)||void 0===c||null===(r=c.unpaid)||void 0===r?void 0:r.total,count_billing:null===(u=this.sumData.next)||void 0===u||null===(d=u.unpaid)||void 0===d?void 0:d.count,bg_color:"orange"}]}},watch:{selected_month:function(){this.pagination.current_page="",this.fetchSum()},start_date:function(){this.pagination.current_page="",""!==this.end_date&&""!==this.start_date&&this.start_date>this.end_date&&(this.start_date=""),this.fetchData()},end_date:function(){this.pagination.current_page="",""!==this.end_date&&""!==this.start_date&&this.end_date<this.start_date&&(this.end_date=""),this.fetchData()},search:function(t){this.pagination.current_page="",""==t&&this.fetchData()},selectedVillage:function(){this.pagination.current_page="",this.fetchData()},selectedDistrict:function(){this.pagination.current_page="",this.fetchVillage(),this.fetchData()},selectedStatus:function(){this.pagination.current_page="",this.fetchData()},selectedCustomerStatus:function(){this.pagination.current_page="",this.fetchData()}},created:function(){this.fetchData(),this.fetchAddress()}},h=d,m=(a("3e86"),a("2877")),v=a("6544"),f=a.n(v),p=a("c6a6"),_=a("8212"),g=a("8336"),b=a("b0af"),x=a("99d9"),S=a("cc20"),y=a("62ad"),I=a("a523"),D=a("8fea"),k=a("2e4b"),C=a("ce7e"),w=a("132d"),V=a("e449"),O=a("0fd9"),j=a("b974"),$=a("8654"),M=Object(m["a"])(h,n,i,!1,null,null,null);e["default"]=M.exports;f()(M,{VAutocomplete:p["a"],VAvatar:_["a"],VBtn:g["a"],VCard:b["a"],VCardText:x["b"],VChip:S["a"],VCol:y["a"],VContainer:I["a"],VDataTable:D["a"],VDatePicker:k["a"],VDivider:C["a"],VIcon:w["a"],VMenu:V["a"],VRow:O["a"],VSelect:j["a"],VTextField:$["a"]})},c6a6:function(t,e,a){"use strict";var n=a("5530"),i=(a("d81d"),a("4de4"),a("498a"),a("7db0"),a("caad"),a("2532"),a("2bfd"),a("b974")),s=a("8654"),o=a("d9f7"),l=a("80d2"),c=Object(n["a"])(Object(n["a"])({},i["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,a){return a.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:function(){return c}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var a=Object(l["r"])(e,t.itemText),n=null!=a?String(a):"";return t.filter(e,String(t.internalSearch),n)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=i["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(n["a"])(Object(n["a"])({},c),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=i["a"].options.computed.listData.call(this);return t.props=Object(n["a"])(Object(n["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var a=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){a.internalSearch&&(1===t.length||a.autoSelectFirst)&&(a.$refs.menu.getTiles(),a.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===l["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===l["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==l["y"].backspace&&t!==l["y"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var a=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===a){var n=this.selectedItems.length,i=t!==n-1?t:t-1,s=this.selectedItems[i];s?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=i}else this.selectedIndex=a}},clearableCallback:function(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return t.data=Object(o["a"])(t.data,{attrs:{"aria-activedescendant":Object(l["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=i["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,a=e.value;e.value&&this.activateMenu(),this.internalSearch=a,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[l["y"].home,l["y"].end].includes(e)||i["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){i["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){i["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,a;if(-1!==this.selectedIndex){var n=this.selectedItems[this.selectedIndex],i=this.getText(n);null==(e=t.clipboardData)||e.setData("text/plain",i),null==(a=t.clipboardData)||a.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}}})}}]);
//# sourceMappingURL=chunk-51c63ee4.9d7936ce.js.map