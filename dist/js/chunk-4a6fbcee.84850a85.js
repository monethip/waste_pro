(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a6fbcee"],{"4fad":function(t,e,o){var a=o("23e7"),n=o("6f53").entries;a({target:"Object",stat:!0},{entries:function(t){return n(t)}})},"5c3a8":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{background:"#eee !important"}},[o("v-container",[o("v-row",{staticClass:"mb-n6"},[o("v-col",[o("h3",[t._v("ຈຳນວນ User")])])],1),o("v-row",[o("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[o("v-card",{attrs:{elevation:"1"}},[o("v-card-text",[o("v-row",[o("v-col",[o("v-icon",{attrs:{large:""},on:{click:function(e){return t.user()}}},[t._v("mdi-account")])],1),o("v-divider",{staticClass:"mx-4",attrs:{vertical:""}}),o("v-col",[t.data.user?o("h3",{staticClass:"primary-color"},[t._v(" "+t._s(t.data.user.all_user)+" ")]):t._e(),o("h3",[t._v("Users")])])],1),o("v-row",[o("v-col",[o("h4",[t.data.user?o("span",{staticClass:"succes-color"},[t._v(t._s(t.data.user.active))]):t._e()]),o("h4",[t._v("Active")])]),o("v-col",[o("h4",[t.data.user?o("span",{staticClass:"red-color"},[t._v(t._s(t.data.user.inactive))]):t._e()]),o("h4",[t._v("Inactive")])])],1)],1)],1)],1),o("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[o("v-card",{attrs:{elevation:"1"}},[o("v-card-text",[o("v-row",[o("v-col",[o("v-icon",{attrs:{large:""},on:{click:function(e){return t.driver()}}},[t._v("mdi-account-tie")])],1),o("v-divider",{staticClass:"mx-4",attrs:{vertical:""}}),o("v-col",[t.data.customer?o("h3",{staticClass:"primary-color"},[t._v(" "+t._s(t.data.customer.all_driver)+" ")]):t._e(),o("h3",[t._v("Driver")])])],1),o("v-row",[o("v-col",[t.data.customer?o("h4",[o("span",{staticClass:"succes-color"},[t._v(t._s(t.data.customer.active))])]):t._e(),o("h4",[t._v("Active")])]),o("v-col",[t.data.customer?o("h4",[o("span",{staticClass:"red-color"},[t._v(t._s(t.data.customer.inactive))])]):t._e(),o("h4",[t._v("Inactive")])])],1)],1)],1)],1),o("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[o("v-card",{attrs:{elevation:"1"}},[o("v-card-text",[o("v-row",[o("v-col",[o("v-icon",{attrs:{large:""},on:{click:function(e){return t.customer()}}},[t._v("mdi-account-multiple")])],1),o("v-divider",{staticClass:"mx-4",attrs:{vertical:""}}),o("v-col",[t.data.customer?o("h3",{staticClass:"primary-color"},[t._v(" "+t._s(t.data.customer.all_driver)+" ")]):t._e(),o("h3",[t._v("Home")])])],1),o("v-row",[o("v-col",[t.data.customer?o("h4",[o("span",{staticClass:"succes-color"},[t._v(" "+t._s(t.data.customer.active))])]):t._e(),o("h4",[t._v("Active")])]),o("v-col",[t.data.customer?o("h4",[o("span",{staticClass:"red-color"},[t._v(" "+t._s(t.data.customer.inactive))])]):t._e(),o("h4",[t._v("Inactive")])])],1)],1)],1)],1),o("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[o("v-card",{attrs:{elevation:"1"}},[o("v-card-text",[o("v-row",[o("v-col",[o("v-icon",{attrs:{large:""},on:{click:function(e){return t.company()}}},[t._v("mdi-office-building")])],1),o("v-divider",{staticClass:"mx-4",attrs:{vertical:""}}),o("v-col",[t.data.company?o("h3",{staticClass:"primary-color"},[t._v(" "+t._s(t.data.company.all_driver)+" ")]):t._e(),o("h3",[t._v("Company")])])],1),o("v-row",[o("v-col",[t.data.company?o("h4",[o("span",{staticClass:"succes-color"},[t._v(t._s(t.data.company.active)+" ")])]):t._e(),o("h4",[t._v("Active")])]),o("v-col",[t.data.company?o("h4",[o("span",{staticClass:"red-color"},[t._v(t._s(t.data.company.inactive))])]):t._e(),o("h4",[t._v("Inactive")])])],1)],1)],1)],1)],1),o("v-row",[o("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[o("v-row",[o("v-col",[o("v-card",{attrs:{elevation:"1"}},[o("v-card-text",[o("h3",{staticClass:"my-2"},[t._v("ຈຳນວນຂີ້ເຫຍື້ອ")]),o("v-row",[o("v-col",[o("v-icon",{attrs:{large:""},on:{click:function(e){return t.reportTrash()}}},[t._v("mdi-package")]),o("v-row",[o("v-col",[t.data.last_month_collection?o("h4",[o("span",{staticClass:"primary-color"},[t._v(t._s(t.data.last_month_collection.bag_amount))])]):t._e(),o("h4",{staticClass:"text-medium"},[t._v("ຖົງ")])]),o("v-col",[t.data.last_month_collection?o("h4",[o("span",{staticClass:"primary-color"},[t._v(t._s(t.data.last_month_collection.container_amount))])]):t._e(),o("h4",{staticClass:"text-medium"},[t._v("Container")])])],1)],1),o("v-divider",{staticClass:"mx-4",attrs:{vertical:""}}),o("v-col",[o("v-row",[o("v-col",[t.data.current_month_collection?o("h4",[o("span",{staticClass:"succes-color"},[t._v(t._s(t.data.current_month_collection.bag_amount))])]):t._e(),o("h4",{staticClass:"text-medium"},[t._v("ຖົງ")])]),o("v-col",[t.data.current_month_collection?o("h4",[o("span",{staticClass:"succes-color"},[t._v(t._s(t.data.current_month_collection.container_amount))])]):t._e(),o("h4",{staticClass:"text-medium"},[t._v("Container")])])],1)],1)],1),o("v-row",[o("v-col",[o("h3",[t._v("ເດືອນຜ່ານມາ")])]),o("v-col",[o("h3",[t._v("ເດືອນນີ້")])])],1)],1)],1)],1)],1)],1),o("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[o("v-row",[o("v-col",[o("v-card",{attrs:{elevation:"1"}},[o("v-card-text",[o("h3",{staticClass:"my-2"},[t._v("ລາຍໄດ້ສະເລ່ຍ")]),o("v-row",[o("v-col",[o("v-icon",{attrs:{large:""},on:{click:function(e){return t.reportTrashInvoice()}}},[t._v("mdi-cash-plus")]),o("v-row",[o("v-col",[t.data.last_month_invoice?o("h4",[o("span",{staticClass:"primary-color"},[t._v(t._s(t.data.last_month_invoice.success_total))])]):t._e(),o("h4",{staticClass:"text-medium"},[t._v("ກີບ")])]),o("v-col",[t.data.last_month_invoice?o("h4",[o("span",{staticClass:"primary-color"},[t._v(t._s(t.data.last_month_invoice.total_invoice))])]):t._e(),o("h4",{staticClass:"text-medium"},[t._v("ບິນ")])])],1)],1),o("v-divider",{staticClass:"mx-4",attrs:{vertical:""}}),o("v-col",[o("v-row",[o("v-col",[t.data.current_month_invoice?o("h4",[o("span",{staticClass:"succes-color"},[t._v(t._s(t.data.current_month_invoice.success_total))])]):t._e(),o("h4",{staticClass:"text-medium"},[t._v("ກີບ")])]),o("v-col",[t.data.current_month_invoice?o("h4",[o("span",{staticClass:"succes-color"},[t._v(t._s(t.data.current_month_invoice.total_invoice))])]):t._e(),o("h4",{staticClass:"text-medium"},[t._v("ບິນ")])])],1)],1)],1),o("v-row",[o("v-col",[o("h3",[t._v("ເດືອນຜ່ານມາ")])]),o("v-col",[o("h3",[t._v("ເດືອນນີ້")])])],1)],1)],1)],1)],1)],1)],1),o("br",{staticClass:"mx-4"}),o("v-card",{attrs:{elevation:"1"}},[o("v-card-text",[o("v-row",[o("v-col",[o("h3",[t._v("ຍອດຈຳນວນເກັບຂີ້ເຫຍື້ອ")])])],1),o("v-row",[o("v-col",[o("trash-chart")],1)],1)],1)],1),o("br",{staticClass:"mx-4"}),o("v-card",{attrs:{elevation:"1"}},[o("v-card-text",[o("v-row",[o("v-col",[o("h3",[t._v("ລາຍໄດ້ສະເລ່ຍແຕ່ລະເດືອນ")])])],1),o("v-row",[o("v-col",[o("income")],1)],1)],1)],1)],1)],1)},n=[],r=o("3835"),c=(o("4fad"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-row",[o("v-col",[o("v-menu",{ref:"menu",attrs:{"close-on-content-click":!0,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{label:"ເລືອກເດືອນ","prepend-icon":"mdi-calendar",readonly:"",outlined:"",dense:""},model:{value:t.month_from,callback:function(e){t.month_from=e},expression:"month_from"}},"v-text-field",n,!1),a))]}}]),model:{value:t.month_from_menu,callback:function(e){t.month_from_menu=e},expression:"month_from_menu"}},[o("v-date-picker",{attrs:{type:"month","no-title":"",scrollable:"",min:"2020-NaN-NaN"},model:{value:t.month_from,callback:function(e){t.month_from=e},expression:"month_from"}})],1)],1),o("v-col",[o("v-menu",{ref:"menu",attrs:{"close-on-content-click":!0,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{label:"ຫາເດືອນ","prepend-icon":"mdi-calendar",readonly:"",outlined:"",dense:""},model:{value:t.month_to,callback:function(e){t.month_to=e},expression:"month_to"}},"v-text-field",n,!1),a))]}}]),model:{value:t.month_to_menu,callback:function(e){t.month_to_menu=e},expression:"month_to_menu"}},[o("v-date-picker",{attrs:{type:"month","no-title":"",scrollable:"",min:"2020-NaN-NaN"},on:{input:function(e){return t.fetchData()}},model:{value:t.month_to,callback:function(e){t.month_to=e},expression:"month_to"}})],1)],1),o("v-col",[o("v-select",{attrs:{outlined:"",dense:"",items:t.collectionType,"item-text":"name","item-value":"value",label:"ປະເພດ"},model:{value:t.selectedCollection,callback:function(e){t.selectedCollection=e},expression:"selectedCollection"}})],1)],1),o("apexchart",{attrs:{options:t.options,series:t.series}})],1)}),s=[],i=o("1da1"),l=(o("96cf"),o("d81d"),o("c740"),o("b0c0"),{data:function(){return{month_from:"",month_to:"",month_from_menu:!1,month_to_menu:!1,modal:!1,homeCollection:[],compnayCollection:[],selectedCollection:"home",collectionType:[{name:"ຄົວເຮືອນ",value:"home"},{name:"ບໍລິສັດ",value:"company"}],series:[],options:{labels:[],noData:{text:"Loading ...",align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:"#00c1d2",fontSize:"14px"}},chart:{type:"bar"},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},title:{text:"ຈຳນວນການເກັບຂີ້ເຫື້ຍອລາຍເດືອນ",align:"center",margin:10,offsetX:0,offsetY:0,floating:!1,style:{fontSize:"14px",fontWeight:"bold",fontFamily:"NotoSanLao, Google Sans, arial, serif, sans-serif !important",color:"#263238"}},xaxis:{title:{text:"Date",style:{colors:[],fontSize:"16px",fontWeight:400}}},yaxis:{title:{text:"ຈຳນວນຂີ້ເຫື້ຍອ",style:{fontSize:"14px",fontWeight:"bold",fontFamily:"NotoSanLao, Google Sans, arial, serif, sans-serif !important",color:"#263238"}}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return""+Intl.NumberFormat().format(t)}},x:{formatter:function(t){return"ເດືອນ "+t}}}}}},methods:{fetchData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o={data:[],labels:[]},o.labels=[],o.data=[],t.$store.commit("Loading_State",!0),a=new FormData,a.append("type",t.selectedCollection),a.append("duration","month"),""!==t.month_from&&""!==t.month_to&&(a.append("month_from",t.moment(t.month_from).format("YYYY-MM")),a.append("month_to",t.moment(t.month_to).format("YYYY-MM"))),e.next=10,t.$axios.post("report-collection",a).then((function(e){200==e.data.code&&(t.$store.commit("Loading_State",!1),t.homeCollection=e.data.data.summary,0==t.homeCollection.length&&(o.labels=[],o.data=[]),t.homeCollection.map((function(e){if("home"==t.selectedCollection){t.options.labels.push(e.month);for(var a=function(){var e=Object(r["a"])(c[n],2),o=e[0],a=e[1],s=t.series.findIndex((function(t){return t.name==o}));-1!=s?t.series[s].data.push(a):t.series.push({name:o,data:[a]})},n=0,c=Object.entries(e.home);n<c.length;n++)a();window.dispatchEvent(new Event("resize"))}else if("company"==t.selectedCollection){o.labels.push(e.month);for(var s=function(){var e=Object(r["a"])(l[i],2),o=e[0],a=e[1];if(t.inArray(o,["success_count","wait_to_confirm_count","reject_count","pending_count"])){var n=t.series.findIndex((function(t){return t.name==o}));-1!=n?t.series[n].data.push(a):t.series.push({name:o,data:[a]})}},i=0,l=Object.entries(e.company);i<l.length;i++)s();window.dispatchEvent(new Event("resize"))}})))})).catch((function(){t.$store.commit("Loading_State",!1)}));case 10:window.dispatchEvent(new Event("resize"));case 11:case"end":return e.stop()}}),e)})))()},inArray:function(t,e){console.log(e);for(var o=e.length,a=0;a<o;a++)if(e[a]==t)return!0;return!1}},watch:{selectedCollection:function(){this.series.name=[],this.series.data=[],this.fetchData()},month_to:function(){this.options.labels=[],this.series=[],this.fetchData()},month_from:function(){this.options.labels=[],this.series=[],this.fetchData()}},created:function(){this.fetchData()}}),m=l,v=o("2877"),u=o("6544"),d=o.n(u),h=o("62ad"),_=o("2e4b"),f=o("e449"),p=o("0fd9"),x=o("b974"),b=o("8654"),y=Object(v["a"])(m,c,s,!1,null,null,null),C=y.exports;d()(y,{VCol:h["a"],VDatePicker:_["a"],VMenu:f["a"],VRow:p["a"],VSelect:x["a"],VTextField:b["a"]});var w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-row",[o("v-col",[o("v-menu",{ref:"menu",attrs:{"close-on-content-click":!0,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{label:"ເລືອກເດືອນ","prepend-icon":"mdi-calendar",readonly:"",outlined:"",dense:""},model:{value:t.month_from,callback:function(e){t.month_from=e},expression:"month_from"}},"v-text-field",n,!1),a))]}}]),model:{value:t.month_from_menu,callback:function(e){t.month_from_menu=e},expression:"month_from_menu"}},[o("v-date-picker",{attrs:{type:"month","no-title":"",scrollable:"",min:"2020-NaN-NaN"},model:{value:t.month_from,callback:function(e){t.month_from=e},expression:"month_from"}})],1)],1),o("v-col",[o("v-menu",{ref:"menu",attrs:{"close-on-content-click":!0,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{label:"ຫາເດືອນ","prepend-icon":"mdi-calendar",readonly:"",outlined:"",dense:""},model:{value:t.month_to,callback:function(e){t.month_to=e},expression:"month_to"}},"v-text-field",n,!1),a))]}}]),model:{value:t.month_to_menu,callback:function(e){t.month_to_menu=e},expression:"month_to_menu"}},[o("v-date-picker",{attrs:{type:"month","no-title":"",scrollable:"",min:"2020-NaN-NaN"},model:{value:t.month_to,callback:function(e){t.month_to=e},expression:"month_to"}})],1)],1),o("v-col",[o("v-select",{attrs:{outlined:"",dense:"",items:t.collectionType,"item-text":"name","item-value":"value",label:"ປະເພດ"},model:{value:t.selectedCollection,callback:function(e){t.selectedCollection=e},expression:"selectedCollection"}})],1)],1),o("apexchart",{attrs:{type:"bar",height:"350",options:t.chartOptions,series:t.series}})],1)},g=[],k={data:function(){return{month_from:"",month_to:"",month_from_menu:!1,month_to_menu:!1,max:"",min:"",modal:!1,homeInvoice:[],compnayInvoice:[],selectedCollection:"home",collectionType:[{name:"ຄົວເຮືອນ",value:"home"},{name:"ບໍລິສັດ",value:"company"}],series:[],chartOptions:{labels:[],noData:{text:"Loading ...",align:"center",verticalAlign:"middle",offsetX:0,offsetY:0},chart:{type:"bar",height:350},plotOptions:{bar:{columnWidth:"100%",endingShape:"rounded"}},xaxis:{title:{text:"Date",style:{colors:[],fontSize:"16px",fontWeight:400}}},yaxis:{title:{text:"ລາຍໄດ້",style:{fontSize:"14px",fontWeight:"bold",fontFamily:"NotoSanLao, Google Sans, arial, serif, sans-serif !important",color:"#263238"}}},fill:{opacity:1},tooltip:{y:{formatter:function(t,e){return Intl.NumberFormat().format(e)+" Kip"}},x:{formatter:function(t){return"ເດືອນ "+t}}}}}},methods:{fetchData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.commit("Loading_State",!0),o=new FormData,o.append("type",t.selectedCollection),o.append("duration","month"),""!==t.month_from&&""!==t.month_to&&(o.append("month_from",t.moment(t.month_from).format("YYYY-MM")),o.append("month_to",t.moment(t.month_to).format("YYYY-MM"))),e.next=7,t.$axios.post("report-invoice",o).then((function(e){200==e.data.code&&(t.$store.commit("Loading_State",!1),t.homeInvoice=e.data.data.summary,t.homeInvoice.map((function(e){if("home"==t.selectedCollection){t.chartOptions.labels.push(e.month);for(var o=function(){var e=Object(r["a"])(n[a],2),o=e[0],c=e[1],s=t.series.findIndex((function(t){return t.name==o}));-1!=s?t.series[s].data.push(c):t.series.push({name:o,data:[c]})},a=0,n=Object.entries(e.home);a<n.length;a++)o()}else if("company"==t.selectedCollection){t.chartOptions.labels.push(e.month);for(var c=function(){var e=Object(r["a"])(i[s],2),o=e[0],a=e[1];if(t.inArray(o,["sum_total","total_approved","total_created","total_rejected","total_success","total_to_confirm_payment"])){var n=t.series.findIndex((function(t){return t.name==o}));-1!=n?t.series[n].data.push(a):t.series.push({name:o,data:[a]})}},s=0,i=Object.entries(e.company);s<i.length;s++)c()}window.dispatchEvent(new Event("resize"))})))})).catch((function(){t.$store.commit("Loading_State",!1)}));case 7:window.dispatchEvent(new Event("resize"));case 8:case"end":return e.stop()}}),e)})))()},inArray:function(t,e){for(var o=e.length,a=0;a<o;a++)if(e[a]==t)return!0;return!1}},watch:{selectedCollection:function(){this.fetchData()},month_to:function(){this.chartOptions.labels=[],this.series[0].data=[],this.fetchData()},month_from:function(){this.chartOptions.labels=[],this.series[0].data=[],this.fetchData()}},created:function(){this.fetchData()}},S=k,D=Object(v["a"])(S,w,g,!1,null,null,null),O=D.exports;d()(D,{VCol:h["a"],VDatePicker:_["a"],VMenu:f["a"],VRow:p["a"],VSelect:x["a"],VTextField:b["a"]});var $={title:function(){return"Vientiane Waste Co-Dev|Dashboard"},components:{Income:O,TrashChart:C},data:function(){return{data:{}}},methods:{fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("dashboard").then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.data=e.data.data}),300)})).catch((function(e){if(t.$store.commit("Loading_State",!1),422==e.response.status)for(var o=e.response.data.errors,a=0,n=Object.entries(o);a<n.length;a++){var c=Object(r["a"])(n[a],2),s=c[0],i=c[1];t.server_errors[s]=i[0]}}))},user:function(){this.$router.push("user")},driver:function(){this.$router.push("driver")},customer:function(){this.$router.push("customer")},company:function(){this.$router.push("company")},reportTrash:function(){this.$router.push("/report/trash")},reportTrashInvoice:function(){this.$router.push("/report/invoice")},package:function(){this.$router.push("package")}},created:function(){this.fetchData()}},N=$,V=(o("99db"),o("b0af")),Y=o("99d9"),j=o("a523"),I=o("ce7e"),L=o("132d"),E=Object(v["a"])(N,a,n,!1,null,null,null);e["default"]=E.exports;d()(E,{VCard:V["a"],VCardText:Y["b"],VCol:h["a"],VContainer:j["a"],VDivider:I["a"],VIcon:L["a"],VRow:p["a"]})},"99db":function(t,e,o){"use strict";o("a03b")},a03b:function(t,e,o){},afdd:function(t,e,o){"use strict";var a=o("8336");e["a"]=a["a"]}}]);
//# sourceMappingURL=chunk-4a6fbcee.84850a85.js.map