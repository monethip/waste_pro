(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0781f19b"],{"1f4f":function(t,e,a){"use strict";var n=a("5530"),i=(a("a9e3"),a("8b37"),a("80d2")),s=a("7560"),o=a("58df");e["a"]=Object(o["a"])(s["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(n["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(i["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"2bfd":function(t,e,a){},"398d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",t._l(t.cards,(function(t,e){return a("v-col",{key:e},[a("MoneyCard",{attrs:{title:t.status_la,total:t.total,billing_count:t.count_billing,bg_color:t.bg_color,route:t.route,icon:t.icon,icon_color:t.icon_color}})],1)})),1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticStyle:{height:"100px"},attrs:{outlined:""},on:{click:function(e){return t.openNewTab(t.route)}}},[a("v-card-title",{staticClass:"d-flex justify-between w-full",staticStyle:{position:"relative"}},[t.icon?a("v-chip",{staticClass:"text-caption",attrs:{color:t.icon_color,dark:""}},[a("v-icon",{attrs:{"x-small":!0}},[t._v(t._s(t.icon))]),a("div",{staticClass:"ml-1",attrs:{color:t.icon_color}},[t._v(" "+t._s(t.title)+" ")])],1):a("v-chip",{staticClass:"text-caption",attrs:{color:t.bg_color,dark:""}},[t._v(" "+t._s(t.title)+" ")]),null!=t.billing_count&&""!=t.billing_count&&void 0!=t.billing_count?a("v-chip",{staticStyle:{position:"absolute",right:"10px"},attrs:{color:t.bg_color,outlined:""}},[t._v(t._s(Intl.NumberFormat().format(t.billing_count))+" ບິນ")]):t._e()],1),a("v-card-text",[a("p",{staticClass:"text-h5"},[t._v(t._s(Intl.NumberFormat().format(t.total))+" K")])])],1)},o=[],l={props:["title","billing_count","total","bg_color","route","icon","icon_color"],data:function(){return{}},methods:{getColor:function(t){return"background-color: "+t},openNewTab:function(t){t&&window.open(t.href,"_blank")}},created:function(){console.log(this.billing_count)}},r=l,c=a("2877"),u=a("6544"),d=a.n(u),h=a("b0af"),m=a("99d9"),f=a("cc20"),p=a("132d"),v=Object(c["a"])(r,s,o,!1,null,null,null),_=v.exports;d()(v,{VCard:h["a"],VCardText:m["b"],VCardTitle:m["c"],VChip:f["a"],VIcon:p["a"]});var b={props:["cards"],components:{MoneyCard:_},data:function(){return{}}},g=b,y=a("62ad"),I=a("0fd9"),S=Object(c["a"])(g,n,i,!1,null,null,null);e["a"]=S.exports;d()(S,{VCol:y["a"],VRow:I["a"]})},"4fad":function(t,e,a){var n=a("23e7"),i=a("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return i(t)}})},"54da":function(t,e,a){"use strict";var n=a("b85c");a("b64b");e["a"]=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a={},i=Object(n["a"])(e);try{for(i.s();!(t=i.n()).done;){var s=t.value;1==Object.keys(s).length&&s[Object.keys(s)]&&(a[Object.keys(s)]=s[Object.keys(s)])}}catch(o){i.e(o)}finally{i.f()}return a}},5610:function(t,e,a){},"74dd":function(t,e,a){"use strict";a("5610")},7660:function(t,e,a){"use strict";a.d(e,"f",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"g",(function(){return o})),a.d(e,"d",(function(){return l})),a.d(e,"e",(function(){return r})),a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return u}));var n=a("b85c"),i=(a("99af"),a("b0c0"),function(t){switch(t){case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ເປັນຖ້ຽວ";case"chartered":return"ມອບເໝົາ";case"bag":return"ບໍລິມາດ";default:return t}}),s=[{en:"container",la:"ຄອນເທນເນີ"},{en:"fix_cost",la:"ເປັນຖ້ຽວ"},{en:"chartered",la:"ມອບເໝົາ"},{en:"bag",la:"ບໍລິມາດ"}],o=function(t){switch(t){case"company":return"ຫົວໜ່ວຍທຸລະກິດ";case"home":return"ຄົວເຮືອນ";default:return t}},l=function(t){switch(t){case"bag":case"chartered":return"ຖົງ";case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ຖ້ຽວ";default:return t}},r=[{en:"requested",la:"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ",color:"#34495e"},{en:"rejected",la:"ປະຕິເສດລູກຄ້າແລ້ວ",color:"#eff3f5"},{en:"approved",la:"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ",color:"#54a0ff"},{en:"collected",la:"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ",color:"#c1c40f"},{en:"collect_confirm",la:"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ",color:"#30cb83"},{en:"collect_reject",la:"ລູກຄ້າປະຕິເສດການເກັບ",color:"#e74c3c"}],c=[{text:"ວັນທີຈ່າຍບິນ",value:"paided_at"},{text:"ວັນທີສ້າງບິນ",value:"created_at"},{text:"ວັນທີອະນຸມັດບິນ",value:"approved_at"},{text:"ວັນທີກວດສອບບິນສຳເລັດ",value:"confirmed_payment_at"}],u=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=[],i=Object(n["a"])(e);try{for(i.s();!(t=i.n()).done;){var s=t.value;a.push({id:s.id,name:"".concat(s.name," (").concat(Intl.NumberFormat().format(s.price)," ກີບ)")})}}catch(o){i.e(o)}finally{i.f()}return a}},"841c":function(t,e,a){"use strict";var n=a("d784"),i=a("825a"),s=a("1d80"),o=a("129f"),l=a("577e"),r=a("dc4a"),c=a("14c3");n("search",(function(t,e,a){return[function(e){var a=s(this),n=void 0==e?void 0:r(e,t);return n?n.call(e,a):new RegExp(e)[t](l(a))},function(t){var n=i(this),s=l(t),r=a(e,n,s);if(r.done)return r.value;var u=n.lastIndex;o(u,0)||(n.lastIndex=0);var d=c(n,s);return o(n.lastIndex,u)||(n.lastIndex=u),null===d?-1:d.index}]}))},"8b37":function(t,e,a){},"9d01":function(t,e,a){},"9d4c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-breadcrumbs",{staticClass:"pt-0",attrs:{large:""}},[t._v("ລາຍງານຍອດຂາຍ")]),a("v-col",[a("v-row",[a("v-col",[a("v-autocomplete",{attrs:{items:t.billDates,"item-text":"text","item-value":"value",label:"ເລືອກປະເພດວັນທີ",outlined:""},model:{value:t.selectedBillDate,callback:function(e){t.selectedBillDate=e},expression:"selectedBillDate"}})],1),a("v-col",[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"ເລີ່ມວັນທີ",readonly:"",outlined:"",dense:""},model:{value:t.date_from,callback:function(e){t.date_from=e},expression:"date_from"}},"v-text-field",i,!1),n))]}}]),model:{value:t.start_menu,callback:function(e){t.start_menu=e},expression:"start_menu"}},[a("v-date-picker",{model:{value:t.date_from,callback:function(e){t.date_from=e},expression:"date_from"}})],1)],1),a("v-col",[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"ຫາວັນທີ",readonly:"",outlined:"",dense:""},model:{value:t.date_to,callback:function(e){t.date_to=e},expression:"date_to"}},"v-text-field",i,!1),n))]}}]),model:{value:t.end_menu,callback:function(e){t.end_menu=e},expression:"end_menu"}},[a("v-date-picker",{model:{value:t.date_to,callback:function(e){t.date_to=e},expression:"date_to"}})],1)],1),a("v-col",[a("v-autocomplete",{attrs:{items:t.employees,"item-text":"name","item-value":"id",label:"ເລືອກເຊວທີ່ກ່ຽວຂ້ອງ",outlined:"",dense:""},model:{value:t.selectedSale,callback:function(e){t.selectedSale=e},expression:"selectedSale"}})],1),a("v-col",[a("v-switch",{attrs:{label:t.is_active_only?"sale ທີ່ active":"sale ທັງໝົດ"},model:{value:t.is_active_only,callback:function(e){t.is_active_only=e},expression:"is_active_only"}})],1),a("v-col",[a("v-btn",{attrs:{color:"green",dark:""},on:{click:t.exportData}},[t._v("Export")])],1)],1),a("v-row",[a("v-col",[a("RowSection",{attrs:{cards:t.summaryAll}})],1)],1),a("v-row",[a("v-col",[a("v-simple-table",[a("thead",[a("tr",{staticStyle:{"background-color":"blue",color:"white"}},[a("td",[t._v("ລ/ດ")]),a("td",[t._v("ຊື່")]),a("td",[t._v("ບ້ານ")]),a("td",[t._v("ສັນຍາ")]),a("td",[t._v("ລູກຄ້າ")]),a("td",[t._v("ເງິນສົດ")]),a("td",[t._v("ເງິນໂອນ")]),a("td",[t._v("bcel bill payment")]),a("td",[t._v("ລວມຍອດ")]),a("td",[t._v("ລວມເງິນສົດ")]),a("td",[t._v("ລວມເງິນໂອນ")]),a("td",[t._v("ລວມ bcel bill payment")]),a("td",[t._v("ລວມທັງໝົດ")])])]),t._l(t.summary,(function(e,n){return a("tbody",{key:e.id,style:t.getBodyColor(n)},[a("tr",[a("td",{attrs:{rowspan:e.summary.length}},[t._v(t._s(n+1))]),a("td",{attrs:{rowspan:e.summary.length}},[a("a",{attrs:{href:"#"},on:{click:function(a){return t.openRoute(e.id,null,null)}}},[t._v(" "+t._s(e.emp_name?e.emp_name+" "+e.emp_surname:e.name)+" ")])]),a("td",{on:{click:function(a){return t.openRoute(e.id,e.summary[0].village_id,e.summary[0].district_id)}}},[a("a",{attrs:{href:"#"}},[t._v(" "+t._s(e.summary[0].village_name)+" ")])]),a("td",[t._v(" "+t._s(Intl.NumberFormat().format(e.summary[0].count_bill))+" ")]),a("td",[t._v(" "+t._s(Intl.NumberFormat().format(e.summary[0].count_customer))+" ")]),a("td",[t._v(" "+t._s(t.totalFromMethod(e.summary[0].payment_methods,"cash"))+" ")]),a("td",[t._v(" "+t._s(t.totalFromMethod(e.summary[0].payment_methods,"bcel"))+" ")]),a("td",[t._v(" "+t._s(t.totalFromMethod(e.summary[0].payment_methods,"bcel_online"))+" ")]),a("td",[t._v(" "+t._s(Intl.NumberFormat().format(e.summary[0].total))+" ")]),a("td",{attrs:{rowspan:e.summary.length}},[t._v(" "+t._s(Intl.NumberFormat().format(e.cash_amount))+" ")]),a("td",{attrs:{rowspan:e.summary.length}},[t._v(" "+t._s(Intl.NumberFormat().format(e.bcel_amount))+" ")]),a("td",{attrs:{rowspan:e.summary.length}},[t._v(" "+t._s(Intl.NumberFormat().format(e.bcel_online_amount))+" ")]),a("td",{attrs:{rowspan:e.summary.length}},[t._v(" "+t._s(Intl.NumberFormat().format(e.total))+" ")])]),t._l(e.summary.slice(1),(function(n,i){return a("tr",{key:i},[a("td",[a("a",{attrs:{href:"#"},on:{click:function(a){return t.openRoute(e.id,n.village_id,n.district_id)}}},[t._v(" "+t._s(n.village_name)+" ")])]),a("td",[t._v(" "+t._s(Intl.NumberFormat().format(n.count_bill))+" ")]),a("td",[t._v(" "+t._s(Intl.NumberFormat().format(n.count_customer))+" ")]),a("td",[t._v(" "+t._s(t.totalFromMethod(n.payment_methods,"cash"))+" ")]),a("td",[t._v(" "+t._s(t.totalFromMethod(n.payment_methods,"bcel"))+" ")]),a("td",[t._v(" "+t._s(t.totalFromMethod(n.payment_methods,"bcel_online"))+" ")]),a("td",[t._v(t._s(Intl.NumberFormat().format(n.total)))])])}))],2)}))],2)],1)],1)],1)],1)},i=[],s=a("b85c"),o=a("3835"),l=(a("4fad"),a("d3b7"),a("ac1f"),a("841c"),a("b0c0"),a("54da")),r=a("7660"),c=a("398d"),u={title:function(){return"Vientiane Waste Co-Dev|Calendar"},components:{RowSection:c["a"]},data:function(){return{firstLoad:!0,is_active_only:!0,summary:[],summaryMoney:[],defaultMoney:[{status_la:"ລວມ",total:0,count_billing:0,bg_color:"blue"},{status_la:"ເງິນສົດ",total:0,count_billing:0,bg_color:"blue"},{status_la:"ເງິນໂອນ",total:0,count_billing:0,bg_color:"blue"},{status_la:"bcel online",total:0,count_billing:0,bg_color:"blue"}],pagination:{},start_date:null,salesData:[],selectedSale:"",search:"",date_from:"",date_to:"",start_menu:!1,end_menu:!1,selectedBillDate:"",exportMode:""}},methods:{exportData:function(){this.exportMode="excel",this.fetchData(),this.exportMode=""},fetchSale:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("user-setting/user",{params:Object(l["a"])([{roles:["sale","sale_admin"]},{order_by:"newest"}])}).then((function(e){200===e.data.code&&(t.loading=!1,t.$store.commit("Loading_State",!1),t.salesData=e.data.data)})).catch((function(e){if(t.$store.commit("Loading_State",!1),e.response&&422===e.response.status)for(var a=e.response.data.errors,n=0,i=Object.entries(a);n<i.length;n++){var s=Object(o["a"])(i[n],2),l=s[0],r=s[1];t.server_errors[l]=r[0]}}))},getBodyColor:function(t){return t%2==0?"background-color:#f0eae0":""},totalFromMethod:function(t,e){var a,n=0,i=Object(s["a"])(t);try{for(i.s();!(a=i.n()).done;){var o=a.value;o.payment_method==e&&(n=o.total)}}catch(l){i.e(l)}finally{i.f()}return Intl.NumberFormat().format(n)},fetchData:function(){var t=this;this.start_menu=!1,this.end_menu=!1,this.$store.commit("Loading_State",!0),this.$axios.get("v2/report-billing-for-sale",{params:Object(l["a"])([{filter:this.search},{id:this.selectedSale},{date_from:this.date_from},{date_to:this.date_to},{date_method:this.selectedBillDate},{download:this.exportMode},{sale_active_status:this.is_active_only?"active":null}])}).then((function(e){200==e.data.code&&(t.$store.commit("Loading_State",!1),e.data.data.download_link?window.open(e.data.data.download_link):(t.summary=e.data.data.data,t.summaryMoney=e.data.data.summary))})).catch((function(e){if(t.$store.commit("Loading_State",!1),e.response&&422==e.response.status)for(var a=e.response.data.errors,n=0,i=Object.entries(a);n<i.length;n++){var s=Object(o["a"])(i[n],2),l=s[0],r=s[1];t.server_errors[l]=r[0]}})).finally((function(){t.firstLoad=!1}))},openRoute:function(t,e,a){localStorage.removeItem("lastMonthBill"),localStorage.removeItem("lastMonthBillPaid");var n=this.$router.resolve({name:"Report-Billing-Main",query:Object(l["a"])([{selected_sale:t},{selected_village:e},{selected_district:a},{date_from:this.date_from},{date_to:this.date_to},{date_method:this.selectedBillDate}])});window.open(n.href)},backPrevios:function(){this.$router.go(-1)}},created:function(){this.fetchSale(),this.fetchData()},computed:{summaryAll:function(){return[{status_la:"ລວມ",total:this.summaryMoney.total,bg_color:"blue",icon:"mdi-chart-pie",icon_color:"green"},{status_la:"ເງົນສົດ",total:this.summaryMoney.cash,bg_color:"blue",icon:"mdi-cash-multiple",icon_color:"blue"},{status_la:"ເງິນໂອນ",total:this.summaryMoney.bcel,bg_color:"blue",icon:"mdi-qrcode-scan",icon_color:"purple"},{status_la:"Bcel Online",total:this.summaryMoney.bcel_online,bg_color:"blue",icon:"mdi-cellphone-wireless",icon_color:"red"}]},lastMonthCreated:function(){return this.$store.getters["auth/getLastMonthBill"]},lastMonthBillCreated:function(){return this.$store.getters["auth/getLastMonthBillPaid"]},billDates:function(){return r["a"]},employees:function(){var t,e=[],a=Object(s["a"])(this.salesData);try{for(a.s();!(t=a.n()).done;){var n=t.value,i="";n.name&&(i+=n.name+" "),n.phone&&(i+=n.phone+" "),n.emp_name&&(i+=n.emp_name+" "),n.emp_surname&&(i+=n.emp_surname+" "),n.emp_card_id&&(i+=n.emp_card_id),e.push({name:i,id:n.id})}}catch(o){a.e(o)}finally{a.f()}return e}},watch:{is_active_only:function(){this.firstLoad||this.fetchData()},selectedSale:function(){this.firstLoad||this.fetchData()},date_from:function(){this.firstLoad||this.fetchData()},date_to:function(){this.firstLoad||this.fetchData()},selectedBillDate:function(){(this.date_from||this.date_to)&&this.fetchData()}}},d=u,h=(a("74dd"),a("2877")),m=a("6544"),f=a.n(m),p=a("c6a6"),v=a("2bc5"),_=a("8336"),b=a("62ad"),g=a("a523"),y=a("2e4b"),I=a("e449"),S=a("0fd9"),x=a("1f4f"),w=a("b73d"),C=a("8654"),D=Object(h["a"])(d,n,i,!1,null,null,null);e["default"]=D.exports;f()(D,{VAutocomplete:p["a"],VBreadcrumbs:v["a"],VBtn:_["a"],VCol:b["a"],VContainer:g["a"],VDatePicker:y["a"],VMenu:I["a"],VRow:S["a"],VSimpleTable:x["a"],VSwitch:w["a"],VTextField:C["a"]})},afdd:function(t,e,a){"use strict";var n=a("8336");e["a"]=n["a"]},b73d:function(t,e,a){"use strict";var n=a("15fd"),i=a("5530"),s=(a("0481"),a("ec29"),a("9d01"),a("fe09")),o=a("c37a"),l=a("c3f0"),r=a("0789"),c=a("490a"),u=a("80d2"),d=["title"];e["a"]=s["a"].extend({name:"v-switch",directives:{Touch:l["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(n["a"])(t,d));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(i["a"])(Object(i["a"])({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(r["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(c["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===u["y"].left&&this.isActive||t.keyCode===u["y"].right&&!this.isActive)&&this.onChange()}}})},c6a6:function(t,e,a){"use strict";var n=a("5530"),i=(a("d81d"),a("4de4"),a("498a"),a("7db0"),a("caad"),a("2532"),a("2bfd"),a("b974")),s=a("8654"),o=a("d9f7"),l=a("80d2"),r=Object(n["a"])(Object(n["a"])({},i["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,a){return a.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:function(){return r}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var a=Object(l["r"])(e,t.itemText),n=null!=a?String(a):"";return t.filter(e,String(t.internalSearch),n)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=i["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(n["a"])(Object(n["a"])({},r),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=i["a"].options.computed.listData.call(this);return t.props=Object(n["a"])(Object(n["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var a=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){a.internalSearch&&(1===t.length||a.autoSelectFirst)&&(a.$refs.menu.getTiles(),a.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===l["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===l["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==l["y"].backspace&&t!==l["y"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var a=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===a){var n=this.selectedItems.length,i=t!==n-1?t:t-1,s=this.selectedItems[i];s?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=i}else this.selectedIndex=a}},clearableCallback:function(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return t.data=Object(o["a"])(t.data,{attrs:{"aria-activedescendant":Object(l["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=i["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,a=e.value;e.value&&this.activateMenu(),this.internalSearch=a,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[l["y"].home,l["y"].end].includes(e)||i["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){i["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){i["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,a;if(-1!==this.selectedIndex){var n=this.selectedItems[this.selectedIndex],i=this.getText(n);null==(e=t.clipboardData)||e.setData("text/plain",i),null==(a=t.clipboardData)||a.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}}})},ec29:function(t,e,a){},fe09:function(t,e,a){"use strict";a("d3b7"),a("25f0"),a("4de4");var n=a("c37a"),i=a("5607"),s=a("2b0e"),o=s["a"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),l=a("8547"),r=a("58df");function c(t){t.preventDefault()}e["a"]=Object(r["a"])(n["a"],o,l["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,a=this.internalValue;return this.isMultiple?!!Array.isArray(a)&&a.some((function(a){return t.valueComparator(a,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,a):Boolean(a):this.valueComparator(a,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=n["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:c},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,a=this.internalValue;if(this.isMultiple){Array.isArray(a)||(a=[]);var n=a.length;a=a.filter((function(a){return!t.valueComparator(a,e)})),a.length===n&&a.push(e)}else a=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(a,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(a,e)?null:e:!a;this.validate(!0,a),this.internalValue=a,this.hasColor=a}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-0781f19b.ec315dc2.js.map