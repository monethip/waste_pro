(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9418bd2"],{"2bfd":function(t,e,a){},"32e9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("v-row",[a("v-col",[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"ເລີ່ມວັນທີ",readonly:"",outlined:"",dense:"",clearable:""},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}},"v-text-field",i,!1),n))]}}]),model:{value:t.start_menu,callback:function(e){t.start_menu=e},expression:"start_menu"}},[a("v-date-picker",{model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}})],1)],1),a("v-col",[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"ຫາວັນທີ",readonly:"",outlined:"",dense:"",clearable:""},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}},"v-text-field",i,!1),n))]}}]),model:{value:t.end_menu,callback:function(e){t.end_menu=e},expression:"end_menu"}},[a("v-date-picker",{model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}})],1)],1),a("v-col",[a("v-autocomplete",{attrs:{outlined:"",dense:"",items:t.districts,"item-text":"name","item-value":"id",label:"ເມືອງ",clearable:""},model:{value:t.selectedDistrict,callback:function(e){t.selectedDistrict=e},expression:"selectedDistrict"}})],1),a("v-col",[a("v-autocomplete",{attrs:{outlined:"",dense:"",items:t.villages,"item-text":"name","item-value":"id",label:"ບ້ານ",multiple:"",clearable:""},model:{value:t.selectedVillage,callback:function(e){t.selectedVillage=e},expression:"selectedVillage"}})],1),a("v-col",[a("v-select",{attrs:{outlined:"",dense:"",items:t.status,"item-text":"name","item-value":"name",label:"ສະຖານະ",multiple:"",clearable:""},model:{value:t.selectedStatus,callback:function(e){t.selectedStatus=e},expression:"selectedStatus"}})],1),a("v-col",[a("v-select",{attrs:{outlined:"",dense:"",items:t.can_collects,"item-text":"name","item-value":"value",label:"ເກັບເລີຍໄດ້ບໍ່",clearable:""},model:{value:t.selectedCanCollect,callback:function(e){t.selectedCanCollect=e},expression:"selectedCanCollect"}})],1)],1),a("v-row",{staticClass:"my-n4"},[a("v-col",[a("v-text-field",{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"Search",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-col",[a("v-select",{attrs:{outlined:"",dense:"",items:t.customerStatus,"item-text":"name","item-value":"value",label:"ສະຖານະແຜນ",multiple:"",clearable:""},model:{value:t.selectedCustomerStatus,callback:function(e){t.selectedCustomerStatus=e},expression:"selectedCustomerStatus"}})],1),a("v-col",[a("v-select",{attrs:{outlined:"",dense:"",items:t.costs,"item-text":"name","item-value":"value",label:"ປະເພດບໍລິການ",multiple:"",clearable:""},model:{value:t.selectedCost,callback:function(e){t.selectedCost=e},expression:"selectedCost"}})],1)],1),a("v-row",[a("v-col",[a("SaleAdmin",{attrs:{label:"ເລືອກຜູ້ສ້າງ"},on:{change:function(e){return t.fetchData()}},model:{value:t.selectedSale,callback:function(e){t.selectedSale=e},expression:"selectedSale"}})],1)],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-row",[a("v-col",[a("v-card",{attrs:{outlined:"",elevation:"5"}},[a("v-container",{staticClass:"spacing-playground pa-1",attrs:{fluid:""}},[a("v-row",[a("v-col",[a("div",{staticClass:"px-4"},[a("v-chip",{staticClass:"text-caption",attrs:{color:"primary",dark:""}},[a("v-icon",[t._v("mdi-domain")]),t._v(" ລວມຫົວໜ່ວຍທຸລະກິດ")],1),a("v-divider",{staticClass:"my-4"}),a("div",{staticClass:"text-caption"},[t._v(" ຫົວໜ່ວຍທຸລະກິດ ")]),a("p",{staticClass:"text-h5"},[t._v(" "+t._s(Intl.NumberFormat().format(t.pagination.total))+" ")])],1)]),a("v-col",[a("v-btn",{staticClass:"btn-primary",attrs:{color:"green",loading:t.loading,disabled:t.loading,width:"100%",height:"100%"},on:{click:t.exportData}},[t._v("Export ")])],1)],1)],1)],1)],1)],1)],1)],1),a("v-row",[a("v-row",[a("v-col",[a("v-card",{attrs:{outlined:""}},[a("v-card-text",[a("v-row",[a("v-col",[t._v(" ລວມບິນທັງໝົດ ")])],1),a("v-row",[a("v-col",[a("RowSection",{attrs:{cards:t.allMonths}})],1)],1),a("v-row",[a("v-col",[a("v-menu",{attrs:{"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"ເດືອນໃນຫົວບິນ",readonly:"",outlined:"",dense:"",color:"cyan","append-icon":"mdi-calendar",clearable:""},model:{value:t.selected_month,callback:function(e){t.selected_month=e},expression:"selected_month"}},"v-text-field",i,!1),n))]}}]),model:{value:t.month_menu,callback:function(e){t.month_menu=e},expression:"month_menu"}},[a("v-date-picker",{attrs:{type:"month"},model:{value:t.selected_month,callback:function(e){t.selected_month=e},expression:"selected_month"}})],1)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"2"}},[a("span",[a("v-chip",{attrs:{outlined:"",color:"cyan lighten-2",dark:""}},[a("v-icon",[t._v("mdi-calendar")]),t._v(" "+t._s(t.pastMonth))],1)],1)]),a("v-col",[a("RowSection",{attrs:{cards:t.pasts}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"2"}},[a("span",[a("v-chip",{attrs:{color:"cyan ",dark:""}},[a("v-icon",[t._v("mdi-calendar")]),t._v(" "+t._s(t.selected_month))],1)],1)]),a("v-col",[a("RowSection",{attrs:{cards:t.recents}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"2"}},[a("span",[a("v-chip",{attrs:{outlined:"",color:"cyan darken-2",dark:""}},[a("v-icon",[t._v("mdi-calendar")]),t._v(" "+t._s(t.nextMonth))],1)],1)]),a("v-col",[a("RowSection",{attrs:{cards:t.nexts}})],1)],1)],1)],1)],1)],1)],1),a("v-row",[a("v-col",[a("v-card",[a("v-card",{attrs:{flat:""}},[a("v-card-title",[a("v-switch",{attrs:{label:"ມີບິນເທົ່ານັ້ນ"},on:{change:function(e){return t.fetchData()}},model:{value:t.only_billings,callback:function(e){t.only_billings=e},expression:"only_billings"}})],1),a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.customers,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.media",fn:function(e){var n=e.item;return t._l(n.media,(function(e,n){return a("v-avatar",{key:n,attrs:{size:"36px"}},[e.thumb?a("img",{attrs:{src:e.thumb}}):t._e()])}))}},{key:"item.created_at",fn:function(e){var n=e.item;return[a("div",[t._v(t._s(t.moment(n.created_at).format("DD-MM-YY")))])]}},{key:"item.cost_by",fn:function(e){var n=e.item;return[a("div",[t._v(t._s(t.costBy(n.cost_by)))])]}},{key:"item.status",fn:function(e){var n=e.item;return[a("v-chip",{attrs:{label:"",color:t.statusColor(n.user.status)}},[t._v(t._s(n.user.status))])]}},{key:"item.roles",fn:function(e){var n=e.item;return[a("div",t._l(n.roles,(function(e,n){return a("span",{key:n},[t._v(t._s(e.name)+",")])})),0)]}},{key:"item.permissions",fn:function(e){var n=e.item;return[a("div",t._l(n.permissions,(function(e,n){return a("span",{key:n},[a("span",[t._v(t._s(e.name)+",")])])})),0)]}},{key:"item.actions",fn:function(e){var n=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.viewPage(n.id)}}},[t._v("mdi-eye")]),n.user.billings.length>0?a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.viewCustomerBill(n.id)}}},[t._v(" mdi-receipt-text ")]):t._e()]}}])}),a("br"),[t.pagination.total_pages>1?a("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1)],1)],1)],1)},i=[],s=a("5530"),o=a("3835"),l=(a("d3b7"),a("4fad"),a("d81d"),a("ac1f"),a("841c"),a("6eceb")),c=a("54da"),r=a("398d"),u=a("c1df"),d=a.n(u),h=a("ccd1"),m={name:"Customer",title:function(){return"Vientiane Waste Co-Dev|Report Customer"},components:{RowSection:r["a"],SaleAdmin:h["a"]},data:function(){return{selectedSale:"",only_billings:!1,firstLoad:!0,selected_month:this.$route.query.month||(new Date).toISOString().substr(0,7),start_date:"",end_date:"",month_menu:!1,start_menu:!1,end_menu:!1,customers:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:100,search:"",oldVal:"",districts:[],selectedDistrict:"",villages:[],selectedVillage:[],selectedStatus:[],sumData:{},status:[{id:1,name:"active"},{id:2,name:"inactive"},{id:3,name:"trial"}],selectedCanCollect:"",can_collects:[{id:1,name:"ເກັບໄດ້",value:"1"},{id:2,name:"ເກັບບໍໄດ້",value:"0"}],selectedCustomerStatus:[],customerStatus:[{id:1,value:"calendar",name:"ຍັງບໍ່ມີແຜນເດີນລົດ"},{id:2,value:"route_plan",name:"ຍັງບໍ່ມີເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ"}],selectedCost:[],costs:[{id:1,value:"container",name:"ຄອນເທັນເນີ"},{id:2,value:"fix_cost",name:"ທຸລະກິດເປັນຖ້ຽວ"},{id:3,value:"chartered",name:"ມອບເໝົາ"},{id:4,value:"bag",name:"ບໍລິມາດ"}],headers:[{text:"ໄອດີ",value:"customer_id"},{text:"ຊື່",value:"company_name"},{text:"Phone",value:"user.phone",sortable:!1},{text:"ທີ່ຢູ່",value:"district.name",sortable:!1},{text:"ປະເພດບໍລິການ",value:"cost_by_la"},{text:"ມູນຄ່າສັນຍາ",value:"fix_cost"},{text:"ເລີ່ມບໍລິການ",value:"start_month",sortable:!1},{text:"ຜູ້ສ້າງ",value:"customer_activity.causer.full_name"},{text:"Created",value:"created_at",sortable:!1},{text:"ສະຖານະ",value:"status",sortable:!1},{text:"",value:"actions",sortable:!1}],toast:{value:!0,color:"success",msg:""},toast_error:{value:!0,color:"error",msg:"Something when wrong!"}}},methods:{fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("company",{params:this.params}).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.customers=e.data.data.data,t.pagination=e.data.data.pagination,t.month_menu=!1,t.start_menu=!1,t.end_menu=!1}),300)})).catch((function(e){if(t.$store.commit("Loading_State",!1),t.month_menu=!1,t.start_menu=!1,t.end_menu=!1,e.response&&422==e.response.status)for(var a=e.response.data.errors,n=0,i=Object.entries(a);n<i.length;n++){var s=Object(o["a"])(i[n],2),l=s[0],c=s[1];t.server_errors[l]=c[0]}})).finally((function(){t.firstLoad=!1,t.fetchSum()}))},fetchSum:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("company-billing",{params:this.params}).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.sumData=e.data.data,t.month_menu=!1,t.start_menu=!1,t.end_menu=!1}),300)})).catch((function(e){if(t.$store.commit("Loading_State",!1),t.month_menu=!1,t.start_menu=!1,t.end_menu=!1,e.response&&422==e.response.status)for(var a=e.response.data.errors,n=0,i=Object.entries(a);n<i.length;n++){var s=Object(o["a"])(i[n],2),l=s[0],c=s[1];t.server_errors[l]=c[0]}}))},fetchAddress:function(){var t=this;this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then((function(e){200==e.data.code&&setTimeout((function(){t.address=e.data.data,t.address.map((function(e){t.districts=e.districts}))}),300)})).catch((function(){}))},fetchVillage:function(){var t=this;this.$axios.get("info/district/"+this.selectedDistrict+"/village").then((function(e){200==e.data.code&&setTimeout((function(){t.villages=e.data.data}),300)})).catch((function(){}))},viewPage:function(t){var e={name:"ViewCompanyDetail",params:{id:t}};this.openRoute(e)},viewCustomerBill:function(t){var e={name:"Report-Billing-Customer",query:{customer_id:t,selectedCustomerType:"company"}};this.openRoute(e)},openRoute:function(t){var e=this.$router.resolve(Object(s["a"])({},t));window.open(e.href)},Search:function(){Object(l["a"])(this)},statusColor:function(t){return"active"==t?"primary":"inactive"==t?"error":"info"},exportData:function(){var t=this;this.loading=!0,this.$axios.post("export-company/",{params:this.params}).then((function(e){200==e.status&&(null!=e.data.data.download_link&&window.open(e.data.data.download_link),t.loading=!1)})).catch((function(){t.$store.commit("Toast_State",t.toast_error),t.loading=!1}))},costBy:function(t){return"container"==t?"ຄອນເທັນເນີ":"fix_cost"==t?"ທຸລະກິດເປັນຖ້ຽວ":"chartered"==t?"ມອບເໝົາ":"bag"==t?"ບໍລິມາດ":""}},watch:{selected_month:function(){this.pagination.current_page="",this.fetchSum()},start_date:function(){this.pagination.current_page="",""!==this.end_date&&""!==this.start_date&&this.start_date>this.end_date&&(this.start_date=""),this.fetchData()},end_date:function(){this.pagination.current_page="",""!==this.end_date&&""!==this.start_date&&this.end_date<this.start_date&&(this.end_date=""),this.fetchData()},search:function(t){this.pagination.current_page="",""==t&&this.fetchData()},selectedVillage:function(){this.pagination.current_page="",this.fetchData()},selectedDistrict:function(){this.pagination.current_page="",this.fetchVillage(),this.fetchData()},selectedStatus:function(){this.pagination.current_page="",this.fetchData()},selectedCanCollect:function(){this.pagination.current_page="",this.fetchData()},selectedCustomerStatus:function(){this.pagination.current_page="",this.fetchData()},selectedCost:function(){this.pagination.current_page="",this.fetchData()},selectedSale:function(){this.firstLoad||this.fetchData()}},computed:{params:function(){return Object(c["a"])([{page:this.pagination.current_page},{per_page:this.per_page},{without_month_info:!0},{only_billings:this.only_billings},{with_billings:!0},{with_created_user:!0},{created_by_id:this.selectedSale},{filter:this.search},{date_from:this.start_date},{date_end:this.end_date},{villages:this.selectedVillage},{statuses:this.selectedStatus},{can_collect:this.selectedCanCollect},{cost_by:this.selectedCost},{without:this.selectedCustomerStatus},{district_id:this.selectedDistrict},{month_bill:this.selected_month}])},pastMonth:function(){return this.selected_month?d()(this.selected_month).subtract(1,"months").format("Y-MM"):null},nextMonth:function(){return this.selected_month?d()(this.selected_month).add(1,"months").format("Y-MM"):null},allMonths:function(){var t,e,a,n,i,s,o,l,c,r,u,d;return[{status_la:"ລວມ",total:null===(t=this.sumData.all)||void 0===t||null===(e=t.total)||void 0===e?void 0:e.total,count_billing:null===(a=this.sumData.all)||void 0===a||null===(n=a.total)||void 0===n?void 0:n.count,bg_color:"blue"},{status_la:"ຈ່າຍແລ້ວ",total:null===(i=this.sumData.all)||void 0===i||null===(s=i.paid)||void 0===s?void 0:s.total,count_billing:null===(o=this.sumData.all)||void 0===o||null===(l=o.paid)||void 0===l?void 0:l.count,bg_color:"green"},{status_la:"ຕິດໜີ້",total:null===(c=this.sumData.all)||void 0===c||null===(r=c.unpaid)||void 0===r?void 0:r.total,count_billing:null===(u=this.sumData.all)||void 0===u||null===(d=u.unpaid)||void 0===d?void 0:d.count,bg_color:"orange"}]},pasts:function(){var t,e,a,n,i,s,o,l,c,r,u,d;return[{status_la:"ລວມ",total:null===(t=this.sumData.past)||void 0===t||null===(e=t.total)||void 0===e?void 0:e.total,count_billing:null===(a=this.sumData.past)||void 0===a||null===(n=a.total)||void 0===n?void 0:n.count,bg_color:"blue"},{status_la:"ຈ່າຍແລ້ວ",total:null===(i=this.sumData.past)||void 0===i||null===(s=i.paid)||void 0===s?void 0:s.total,count_billing:null===(o=this.sumData.past)||void 0===o||null===(l=o.paid)||void 0===l?void 0:l.count,bg_color:"green"},{status_la:"ຕິດໜີ້",total:null===(c=this.sumData.past)||void 0===c||null===(r=c.unpaid)||void 0===r?void 0:r.total,count_billing:null===(u=this.sumData.past)||void 0===u||null===(d=u.unpaid)||void 0===d?void 0:d.count,bg_color:"orange"}]},recents:function(){var t,e,a,n,i,s,o,l,c,r,u,d;return[{status_la:"ລວມ",total:null===(t=this.sumData.recent)||void 0===t||null===(e=t.total)||void 0===e?void 0:e.total,count_billing:null===(a=this.sumData.recent)||void 0===a||null===(n=a.total)||void 0===n?void 0:n.count,bg_color:"blue"},{status_la:"ຈ່າຍແລ້ວ",total:null===(i=this.sumData.recent)||void 0===i||null===(s=i.paid)||void 0===s?void 0:s.total,count_billing:null===(o=this.sumData.recent)||void 0===o||null===(l=o.paid)||void 0===l?void 0:l.count,bg_color:"green"},{status_la:"ຕິດໜີ້",total:null===(c=this.sumData.recent)||void 0===c||null===(r=c.unpaid)||void 0===r?void 0:r.total,count_billing:null===(u=this.sumData.recent)||void 0===u||null===(d=u.unpaid)||void 0===d?void 0:d.count,bg_color:"orange"}]},nexts:function(){var t,e,a,n,i,s,o,l,c,r,u,d;return[{status_la:"ລວມ",total:null===(t=this.sumData.next)||void 0===t||null===(e=t.total)||void 0===e?void 0:e.total,count_billing:null===(a=this.sumData.next)||void 0===a||null===(n=a.total)||void 0===n?void 0:n.count,bg_color:"blue"},{status_la:"ຈ່າຍແລ້ວ",total:null===(i=this.sumData.next)||void 0===i||null===(s=i.paid)||void 0===s?void 0:s.total,count_billing:null===(o=this.sumData.next)||void 0===o||null===(l=o.paid)||void 0===l?void 0:l.count,bg_color:"green"},{status_la:"ຕິດໜີ້",total:null===(c=this.sumData.next)||void 0===c||null===(r=c.unpaid)||void 0===r?void 0:r.total,count_billing:null===(u=this.sumData.next)||void 0===u||null===(d=u.unpaid)||void 0===d?void 0:d.count,bg_color:"orange"}]}},mounted:function(){this.fetchData(),this.fetchAddress()}},v=m,p=(a("a4a3"),a("2877")),f=a("6544"),_=a.n(f),g=a("c6a6"),b=a("8212"),y=a("8336"),S=a("b0af"),x=a("99d9"),C=a("cc20"),w=a("62ad"),D=a("a523"),I=a("8fea"),k=a("2e4b"),V=a("ce7e"),O=a("132d"),$=a("e449"),j=a("0fd9"),A=a("b974"),M=a("b73d"),T=a("8654"),L=Object(p["a"])(v,n,i,!1,null,null,null);e["default"]=L.exports;_()(L,{VAutocomplete:g["a"],VAvatar:b["a"],VBtn:y["a"],VCard:S["a"],VCardText:x["b"],VCardTitle:x["c"],VChip:C["a"],VCol:w["a"],VContainer:D["a"],VDataTable:I["a"],VDatePicker:k["a"],VDivider:V["a"],VIcon:O["a"],VMenu:$["a"],VRow:j["a"],VSelect:A["a"],VSwitch:M["a"],VTextField:T["a"]})},"398d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",t._l(t.cards,(function(t,e){return a("v-col",{key:e},[a("MoneyCard",{attrs:{title:t.status_la,total:t.total,billing_count:t.count_billing,bg_color:t.bg_color,route:t.route,icon:t.icon,icon_color:t.icon_color}})],1)})),1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticStyle:{height:"100px"},attrs:{outlined:""},on:{click:function(e){return t.openNewTab(t.route)}}},[a("v-card-title",{staticClass:"d-flex justify-between w-full",staticStyle:{position:"relative"}},[t.icon?a("v-chip",{staticClass:"text-caption",attrs:{color:t.icon_color,dark:""}},[a("v-icon",{attrs:{"x-small":!0}},[t._v(t._s(t.icon))]),a("div",{staticClass:"ml-1",attrs:{color:t.icon_color}},[t._v(" "+t._s(t.title)+" ")])],1):a("v-chip",{staticClass:"text-caption",attrs:{color:t.bg_color,dark:""}},[t._v(" "+t._s(t.title)+" ")]),null!=t.billing_count&&""!=t.billing_count&&void 0!=t.billing_count?a("v-chip",{staticStyle:{position:"absolute",right:"10px"},attrs:{color:t.bg_color,outlined:""}},[t._v(t._s(Intl.NumberFormat().format(t.billing_count))+" ບິນ")]):t._e()],1),a("v-card-text",[a("p",{staticClass:"text-h5"},[t._v(t._s(Intl.NumberFormat().format(t.total))+" K")])])],1)},o=[],l={props:["title","billing_count","total","bg_color","route","icon","icon_color"],data:function(){return{}},methods:{getColor:function(t){return"background-color: "+t},openNewTab:function(t){t&&window.open(t.href,"_blank")}},created:function(){console.log(this.billing_count)}},c=l,r=a("2877"),u=a("6544"),d=a.n(u),h=a("b0af"),m=a("99d9"),v=a("cc20"),p=a("132d"),f=Object(r["a"])(c,s,o,!1,null,null,null),_=f.exports;d()(f,{VCard:h["a"],VCardText:m["b"],VCardTitle:m["c"],VChip:v["a"],VIcon:p["a"]});var g={props:["cards"],components:{MoneyCard:_},data:function(){return{}}},b=g,y=a("62ad"),S=a("0fd9"),x=Object(r["a"])(b,n,i,!1,null,null,null);e["a"]=x.exports;d()(x,{VCol:y["a"],VRow:S["a"]})},"4fad":function(t,e,a){var n=a("23e7"),i=a("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return i(t)}})},"54da":function(t,e,a){"use strict";var n=a("b85c");a("b64b");e["a"]=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a={},i=Object(n["a"])(e);try{for(i.s();!(t=i.n()).done;){var s=t.value;1==Object.keys(s).length&&s[Object.keys(s)]&&(a[Object.keys(s)]=s[Object.keys(s)])}}catch(o){i.e(o)}finally{i.f()}return a}},"6eceb":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("ac1f"),a("841c");var n=function(t){""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},"7f32":function(t,e,a){},"9d01":function(t,e,a){},a4a3:function(t,e,a){"use strict";a("7f32")},b73d:function(t,e,a){"use strict";var n=a("15fd"),i=a("5530"),s=(a("0481"),a("ec29"),a("9d01"),a("fe09")),o=a("c37a"),l=a("c3f0"),c=a("0789"),r=a("490a"),u=a("80d2"),d=["title"];e["a"]=s["a"].extend({name:"v-switch",directives:{Touch:l["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(n["a"])(t,d));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(i["a"])(Object(i["a"])({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(c["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(r["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===u["y"].left&&this.isActive||t.keyCode===u["y"].right&&!this.isActive)&&this.onChange()}}})},c6a6:function(t,e,a){"use strict";var n=a("5530"),i=(a("d81d"),a("4de4"),a("498a"),a("7db0"),a("caad"),a("2532"),a("2bfd"),a("b974")),s=a("8654"),o=a("d9f7"),l=a("80d2"),c=Object(n["a"])(Object(n["a"])({},i["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,a){return a.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:function(){return c}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var a=Object(l["r"])(e,t.itemText),n=null!=a?String(a):"";return t.filter(e,String(t.internalSearch),n)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=i["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(n["a"])(Object(n["a"])({},c),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=i["a"].options.computed.listData.call(this);return t.props=Object(n["a"])(Object(n["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var a=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){a.internalSearch&&(1===t.length||a.autoSelectFirst)&&(a.$refs.menu.getTiles(),a.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===l["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===l["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==l["y"].backspace&&t!==l["y"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var a=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===a){var n=this.selectedItems.length,i=t!==n-1?t:t-1,s=this.selectedItems[i];s?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=i}else this.selectedIndex=a}},clearableCallback:function(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return t.data=Object(o["a"])(t.data,{attrs:{"aria-activedescendant":Object(l["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=i["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,a=e.value;e.value&&this.activateMenu(),this.internalSearch=a,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[l["y"].home,l["y"].end].includes(e)||i["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){i["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){i["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,a;if(-1!==this.selectedIndex){var n=this.selectedItems[this.selectedIndex],i=this.getText(n);null==(e=t.clipboardData)||e.setData("text/plain",i),null==(a=t.clipboardData)||a.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}}})},ccd1:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-autocomplete",{attrs:{items:t.sales,"item-text":"name","item-value":"id",label:t.label,outlined:"",dense:""},model:{value:t.selectedSale,callback:function(e){t.selectedSale=e},expression:"selectedSale"}})},i=[],s=a("b85c"),o=a("1da1"),l=(a("b0c0"),a("96cf"),a("54da")),c={props:{label:{default:"ເລືອກເຊວທີ່ກ່ຽວຂ້ອງ",type:String}},data:function(){return{salesData:[],selectedSale:""}},methods:{fetchSale:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.commit("Loading_State",!0),e.next=3,t.$axios.get("user-setting/user",{params:Object(l["a"])([{roles:["sale","sale_admin"]},{order_by:"newest"}])}).catch((function(e){t.$store.commit("Loading_State",!1),t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"})}));case 3:a=e.sent,t.$store.state.isLoading&&(t.salesData=a.data.data,t.$store.commit("Loading_State",!1));case 5:case"end":return e.stop()}}),e)})))()}},computed:{sales:function(){var t,e=[],a=Object(s["a"])(this.salesData);try{for(a.s();!(t=a.n()).done;){var n=t.value,i="";n.name&&(i+=n.name+" "),n.phone&&(i+=n.phone+" "),n.emp_name&&(i+=n.emp_name+" "),n.emp_surname&&(i+=n.emp_surname+" "),n.emp_card_id&&(i+=n.emp_card_id),e.push({name:i,id:n.id})}}catch(o){a.e(o)}finally{a.f()}return e}},watch:{selectedSale:function(){this.$emit("input",this.selectedSale)}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchSale();case 2:case"end":return e.stop()}}),e)})))()}},r=c,u=a("2877"),d=a("6544"),h=a.n(d),m=a("c6a6"),v=Object(u["a"])(r,n,i,!1,null,null,null);e["a"]=v.exports;h()(v,{VAutocomplete:m["a"]})},ec29:function(t,e,a){},fe09:function(t,e,a){"use strict";a("d3b7"),a("25f0"),a("4de4");var n=a("c37a"),i=a("5607"),s=a("2b0e"),o=s["a"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),l=a("8547"),c=a("58df");function r(t){t.preventDefault()}e["a"]=Object(c["a"])(n["a"],o,l["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,a=this.internalValue;return this.isMultiple?!!Array.isArray(a)&&a.some((function(a){return t.valueComparator(a,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,a):Boolean(a):this.valueComparator(a,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=n["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:r},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:r},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,a=this.internalValue;if(this.isMultiple){Array.isArray(a)||(a=[]);var n=a.length;a=a.filter((function(a){return!t.valueComparator(a,e)})),a.length===n&&a.push(e)}else a=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(a,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(a,e)?null:e:!a;this.validate(!0,a),this.internalValue=a,this.hasColor=a}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-a9418bd2.9e4587cc.js.map