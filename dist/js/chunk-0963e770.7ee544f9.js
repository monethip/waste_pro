(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0963e770"],{"2fb7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-breadcrumbs",{attrs:{large:""}},[a("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[a("v-icon",[t._v("mdi-keyboard-backspace")])],1),t._v("ລາຍລະອຽດແຜນເສັ້ນທາງ "),a("span",{staticClass:"primary-color ml-2"},[t._v(t._s(t.plan.name))])],1),a("v-row",[t.switchMap?a("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[a("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:t.getCenter().lat>0||t.getCenter().lat<0?t.getCenter():{lat:0,lng:0},zoom:16,disableDefaultUI:!0}},[a("gmap-info-window",{attrs:{options:t.infoOptions,position:t.infoPosition,opened:t.infoOpened,conent:t.infoContent},on:{closeclick:function(e){t.infoOpened=!1}}},[t._v(t._s(t.infoContent))]),t._l(t.customers,(function(e,n){return a("GmapMarker",{key:n,attrs:{position:t.getMarkers(e),draggable:!1,icon:t.markerOptions,animation:2,label:(n+1).toString(),clickable:!0},on:{click:function(a){return t.toggleInfo(e,n)}}})}))],2)],1):t._e(),t.switchMap?t._e():a("v-col",[a("div",{staticClass:"iframe-container"},[a("iframe",{staticClass:"embed",attrs:{src:t.plan.embed,height:"100%",width:"100%"}})])])],1),a("v-row",{staticClass:"mb-n6"},[a("v-col",[a("v-btn",{staticClass:"btn-primary",on:{click:function(e){return t.viewMap()}}},[a("v-icon",[t._v("mdi-map")])],1)],1),a("v-col",[a("v-btn",{staticClass:"btn-primary",on:{click:function(e){return t.editCompanyPlan(t.plan.id)}}},[t._v("Update")])],1),a("v-col",[a("h4",[t._v("ລວມລູກຄ້າ "+t._s(t.pagination.total)+" ຄົນ")]),t._l(t.countExpectTrash,(function(e){return a("h5",{key:e.cost_by},[t._v(" "+t._s(t.getLaoCompanyCostByFunc(e.cost_by)+": "+Intl.NumberFormat().format(e.expect_trash)+" "+t.getCustomerUnitFunc(e.cost_by))+" ")])}))],2),a("v-col",[a("v-text-field",{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຊື່ລູກຄ້າ",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),a("v-row",[a("v-col",[a("div",[a("v-card",[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.customers,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.customer",fn:function(e){var n=e.item;return[(n.customer.customer_type="company")?a("div",[t._v(t._s(n.customer.company_name))]):t._e(),a("div",[t._v(" "+t._s(n.customer.name)+" "+t._s(n.customer.surname)+" ")])]}},{key:"item.favorite_dates",fn:function(e){var n=e.item;return t._l(n.favorite_dates,(function(e){return a("v-chip",{key:e.name,attrs:{dark:"",color:"green"}},[t._v(t._s(e.name))])}))}},{key:"item.cost_by",fn:function(e){var n=e.item;return[a("div",[t._v(t._s(t.costBy(n.customer.cost_by)))])]}},{key:"item.default_round",fn:function(e){var n=e.item;return[a("div",[t._v(t._s(n.default_round)+" ຮອບ")])]}},{key:"item.status",fn:function(e){var n=e.item;return[n.customer?a("v-chip",{attrs:{color:t.statusColor(n.customer.status)}},[t._v(t._s(n.customer.status))]):t._e()]}},{key:"item.customer.expect_trash",fn:function(e){var n=e.item;return[n.customer.expect_trash?a("v-chip",{attrs:{outlined:"",color:"green"}},[t._v(" "+t._s(Intl.NumberFormat().format(n.customer.expect_trash))+" "+t._s(t.getCustomerUnitFunc(n.customer.cost_by))+" ")]):a("div",[t._v("-")])]}},{key:"item.customer.can_collect",fn:function(e){var n=e.item;return[a("v-chip",{attrs:{color:n.customer.can_collect?"success":"error"}},[t._v(t._s(n.customer.can_collect?"ເກັບໄດ້":"ເກັບບໍ່ໄດ້"))])]}},{key:"item.actions",fn:function(e){var n=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.viewPage(n)}}},[t._v("mdi-eye")])]}}])}),a("br"),[t.pagination.total_pages>1?a("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1)],1)])],1)],1)},r=[],o=a("3835"),i=(a("4fad"),a("d81d"),a("6eceb")),c=a("7660"),s={name:"Customer",data:function(){return{title:function(){return"Vientiane Waste Co-Dev|View Plan"},tab:null,customers:[],loading:!1,switchMap:!0,customerId:"",offset:12,pagination:{},per_page:100,search:"",oldVal:"",districts:[],selectedDistrict:"",villages:[],selectedVillage:[],plan:{},headers:[{text:"ລຳດັບຄວາມສຳຄັນ",value:"priority",sortable:!1,align:"center"},{text:"ລູກຄ້າ",value:"customer"},{text:"ຂີ້ເຫຍື້ອຄາດໝາຍ",value:"customer.expect_trash"},{text:"ສະຖານະເກັບ",value:"customer.can_collect"},{text:"ສະຖານະ",value:"status",sortable:!1},{text:"ປະເພດບໍລິການ",value:"cost_by_la",sortable:!1},{text:"ມື້ບໍລິການ",value:"favorite_dates",width:"120px"},{text:"ຈຳນວນຮອບເລີ່ມຕົ້ນ",value:"default_round",width:"120px"},{text:"ລາຍລະອຽດ",value:"customer.collect_description",sortable:!1},{text:"",value:"actions",sortable:!1}],latlng:{lat:0,lng:0},markers:[],markerOptions:{url:a("347c"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:28,height:48,f:"px",b:"px"},scaledSize:{width:28,height:48,f:"px",b:"px"}},infoPosition:null,infoContent:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35}},countExpectTrash:[]}},methods:{getLaoCompanyCostByFunc:function(t){return Object(c["d"])(t)},getCustomerUnitFunc:function(t){return Object(c["b"])(t)},backPrevios:function(){this.$router.go(-1)},fetchData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$store.commit("Loading_State",!0),this.$axios.get("route-plan/"+this.$route.params.id+"/route-plan-detail",{params:{page:this.pagination.current_page,per_page:this.per_page,count_expect_trash:e?"1":"0",villages:this.selectedVillage}}).then((function(a){200==a.data.code&&setTimeout((function(){e?t.countExpectTrash=a.data.data:(t.$store.commit("Loading_State",!1),t.customers=a.data.data.data,t.pagination=a.data.data.pagination,t.getCenter())}),100)})).catch((function(e){if(t.$store.commit("Loading_State",!1),e.response&&422==e.response.status)for(var a=e.response.data.errors,n=0,r=Object.entries(a);n<r.length;n++){var i=Object(o["a"])(r[n],2),c=i[0],s=i[1];t.server_errors[c]=s[0]}}))},fetchDetail:function(){var t=this;this.$axios.get("route-plan/"+this.$route.params.id).then((function(e){200==e.data.code&&setTimeout((function(){t.plan=e.data.data,console.log(t.plan)}),100)})).catch((function(){}))},fetchAddress:function(){var t=this;this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then((function(e){200==e.data.code&&setTimeout((function(){t.address=e.data.data,t.address.map((function(e){t.districts=e.districts}))}),100)})).catch((function(){}))},fetchVillage:function(){var t=this;this.$axios.get("info/district/"+this.selectedDistrict+"/village").then((function(e){200==e.data.code&&setTimeout((function(){t.villages=e.data.data}),100)})).catch((function(){}))},createPage:function(){this.$router.push({name:"CreateExportPlan",params:{items:this.customers,villages:this.selectedVillage}}),this.$emit("create-plan",this.customers,this.selectedVillage)},editCompanyPlan:function(t){console.log(t),this.$router.push({name:"EditPlanNoMap",params:{id:t}})},viewPage:function(t){"company"==t.customer.customer_type?this.$router.push({name:"ViewCompany",params:{id:t.customer_id}}):"home"==t.customer.customer_type&&this.$router.push({name:"ViewCustomer",params:{id:t.customer_id}})},viewMap:function(){this.switchMap=!this.switchMap},Search:function(){Object(i["a"])(this)},getCenter:function(){if(this.customers.length){var t={lat:parseFloat(this.customers[0].customer.lat),lng:parseFloat(this.customers[0].customer.lng)};return t}return this.latlng},getMarkers:function(t){if(null!==t.customer)return{lat:parseFloat(t.customer.lat),lng:parseFloat(t.customer.lng)}},toggleInfo:function(t,e){this.infoPosition=this.getMarkers(t),this.infoContent=t.priority+" "+t.customer.company_name+" ("+t.customer.customer_id+") ",this.infoCurrentKey==e?this.infoOpened=!this.infoOpened:(this.infoOpened=!0,this.infoCurrentKey=e)},statusColor:function(t){return"active"==t?"success":"inactive"==t?"error":"info"},costBy:function(t){return"container"==t?"ຄອນເທັນເນີ":"fix_cost"==t?"ທຸລະກິດເປັນຖ້ຽວ":"chartered"==t?"ມອບເໝົາ":"bag"==t?"ບໍລິມາດ":""}},watch:{search:function(t){""==t&&(this.fetchData(),this.fetchData(!0))},selectedVillage:function(){this.fetchData(),this.fetchData(!0)},selectedDistrict:function(){this.fetchVillage()}},created:function(){this.fetchData(),this.fetchData(!0),this.fetchDetail(),console.log(this.plan)}},u=s,l=(a("bc29"),a("2877")),f=a("6544"),d=a.n(f),m=a("2bc5"),h=a("8336"),p=a("b0af"),v=a("99d9"),g=a("cc20"),_=a("62ad"),b=a("a523"),y=a("8fea"),C=a("132d"),x=a("0fd9"),k=a("8654"),w=Object(l["a"])(u,n,r,!1,null,null,null);e["default"]=w.exports;d()(w,{VBreadcrumbs:m["a"],VBtn:h["a"],VCard:p["a"],VCardText:v["b"],VChip:g["a"],VCol:_["a"],VContainer:b["a"],VDataTable:y["a"],VIcon:C["a"],VRow:x["a"],VTextField:k["a"]})},"347c":function(t,e,a){t.exports=a.p+"img/pin1.d74f27bd.svg"},"4fad":function(t,e,a){var n=a("23e7"),r=a("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return r(t)}})},"6eceb":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("ac1f"),a("841c");var n=function(t){""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},7660:function(t,e,a){"use strict";a.d(e,"d",(function(){return n})),a.d(e,"a",(function(){return r})),a.d(e,"e",(function(){return o})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return c}));var n=function(t){switch(t){case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ເປັນຖ້ຽວ";case"chartered":return"ມອບເໝົາ";case"bag":return"ບໍລິມາດ";default:return t}},r=[{en:"container",la:"ຄອນເທນເນີ"},{en:"fix_cost",la:"ເປັນຖ້ຽວ"},{en:"chartered",la:"ມອບເໝົາ"},{en:"bag",la:"ບໍລິມາດ"}],o=function(t){switch(t){case"company":return"ຫົວໜ່ວຍທຸລະກິດ";case"home":return"ຄົວເຮືອນ";default:return t}},i=function(t){switch(t){case"bag":case"chartered":return"ຖົງ";case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ຖ້ຽວ";default:return t}},c=[{en:"requested",la:"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ",color:"#34495e"},{en:"rejected",la:"ປະຕິເສດລູກຄ້າແລ້ວ",color:"#eff3f5"},{en:"approved",la:"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ",color:"#54a0ff"},{en:"collected",la:"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ",color:"#c1c40f"},{en:"collect_confirm",la:"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ",color:"#30cb83"},{en:"collect_reject",la:"ລູກຄ້າປະຕິເສດການເກັບ",color:"#e74c3c"}]},bc29:function(t,e,a){"use strict";a("d972")},d972:function(t,e,a){}}]);
//# sourceMappingURL=chunk-0963e770.7ee544f9.js.map