(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41b7eda4"],{"13c8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-breadcrumbs",{staticClass:"mt-n4",attrs:{large:""}},[a("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[a("v-icon",[t._v("mdi-keyboard-backspace ")])],1),t._v(" ເພີ່ມແຜນເສັ້ນທາງ "),a("v-spacer"),a("span",{staticClass:"mr-4"},[a("v-icon",{attrs:{color:"red"}},[t._v("mdi-map-marker")]),t._v("ຍັງບໍທັນຢູ່ໃນແຜນ")],1),a("span",[a("v-icon",{staticStyle:{color:"#49a3da"}},[t._v("mdi-map-marker")]),t._v("ຢູ່ໃນແຜນແລ້ວ")],1)],1),a("v-row",[a("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[t.customers?a("GmapMap",{staticStyle:{width:"100%",height:"400px"},attrs:{center:t.getCenter(),zoom:16,disableDefaultUI:!0}},[a("gmap-info-window",{attrs:{options:t.infoOptions,position:t.infoPosition,opened:t.infoOpened,conent:t.infoContent},on:{closeclick:function(e){t.infoOpened=!1}}},[t._v(t._s(t.infoContent)+" ")]),t._l(t.customers,(function(e,n){return a("GmapMarker",{key:n,attrs:{position:t.getMarkers(e),draggable:!1,icon:t.getSiteIcon(e),animation:2,clickable:!0},on:{click:function(a){return t.toggleInfo(e,n)}}})}))],2):t._e()],1)],1),a("v-row",{staticClass:"mb-n6"},[a("v-col",[a("v-btn",{staticClass:"btn-primary",attrs:{loading:t.loading,disabled:t.loading},on:{click:function(e){return t.createRoutePlan()}}},[t._v(" ບັນທຶກ"),a("v-icon",[t._v("mdi-content-save")])],1)],1),a("v-col",[t.customers?a("h4",[t._v(" ຈັດລຽນລຳດັບການເກັບຂີ້ເຫື້ຍອລູກຄ້າ "+t._s(t.customers.length)+" ຄົນ ")]):t._e()]),a("v-col",[a("v-text-field",{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຊື່ລູກຄ້າ",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),a("div",[a("v-card",[a("v-card-text",[a("main",{staticClass:"page page--table"},[a("v-data-table",{staticClass:"page__table",attrs:{headers:t.headers,items:t.customers,search:t.search,"disable-pagination":!0,"hide-default-footer":"","item-key":"id"},scopedSlots:t._u([{key:"body",fn:function(e){return[a("draggable",{attrs:{list:e.items,tag:"tbody"},on:{change:t.afterAdd}},t._l(e.items,(function(e,n){return a("tr",{key:n},[a("td",[a("v-icon",{staticClass:"page__grab-icon",attrs:{small:""}},[t._v(" mdi-arrow-all ")])],1),a("td",[t._v(t._s(n+1))]),a("td",[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.company_name))]),a("td",[t._v(t._s(e.user.phone))]),a("td",[t._v(t._s(e.address_detail))]),a("td",[t._v(t._s(e.village.name))]),a("td",[t._v(t._s(e.district.name))]),a("td",[a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(n)}}},[t._v(" mdi-delete ")])],1)])})),0)]}}]),model:{value:t.selectedRows,callback:function(e){t.selectedRows=e},expression:"selectedRows"}})],1)])],1)],1),a("ModalAdd",[[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Route Plan Name")])]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Name *",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeAddModal()}}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.saveRoutePlan()}}},[t._v(" Save ")])],1)],1)],1)]],2),a("ModalDelete",[[a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:t.deleteItemConfirm}},[t._v("OK")]),a("v-spacer")],1)]],2)],1)},s=[],o=(a("a434"),a("4de4"),a("d81d"),a("b0c0"),a("caad"),a("2532"),a("6eceb")),i=a("b76a"),r=a.n(i),l={name:"Customer",props:["selectedData","villages","items"],components:{draggable:r.a},data:function(){return{customers:[],customersId:[],countcutomer:0,loading:!1,customerId:"",search:"",oldVal:"",selectedVillage:[],selectedCustomer:[],exclude_customers:[],selectedRows:[],customer:{},customerIndex:"",name:"",server_errors:{},headers:[{text:"",value:""},{text:"#",value:""},{text:"Id",value:"id"},{text:"ບໍລິສັດ",value:"company_name"},{text:"Phone",value:"user.phone",sortable:!1},{text:"ລາຍລະອຽດທີ່ຢູ່",value:"address_detail"},{text:"ບ້ານ",value:"village.name",sortable:!0},{text:"ເມືອງ",value:"district.name",sortable:!0},{text:"",value:"actions",sortable:!1}],latlng:{lat:18.1189434,lng:102.290218},markers:[],infoPosition:null,infoContent:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35}}}},methods:{afterAdd:function(t){var e=t.moved.oldIndex,a=t.moved.newIndex,n=this.customers[e];this.customers.splice(e,1),this.customers.splice(a,0,n)},backPrevios:function(){this.$router.go(-1)},fetchData:function(){this.customers=this.items,this.selectedVillage=this.villages},closeDelete:function(){this.$store.commit("modalDelete_State",!1)},deleteItem:function(t){this.customerIndex=t,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm:function(){var t=this;this.selectedCustomer=[],this.loading=!0,this.customers.splice(this.customerIndex,1),this.selectedCustomer.filter((function(e){t.exclude_customers.push(e.id)})),this.$store.commit("Toast_State",{value:!0,color:"success",msg:"ລຶບຂໍ້ມູນສຳເລັດແລ້ວ"}),this.selectedRows=[],this.fetchData(),this.loading=!1,this.$store.commit("modalDelete_State",!1)},createRoutePlan:function(){this.$store.commit("modalAdd_State",!0)},closeAddModal:function(){this.$store.commit("modalAdd_State",!1)},saveRoutePlan:function(){var t=this,e=[];this.customers.map((function(t){e.push(t.id)})),this.customers.length>0?(this.loading=!0,this.$axios.post("create-route-plan",{name:this.name,customers:e},{responseType:"blob"}).then((function(e){200==e.status&&(setTimeout((function(){t.loading=!1}),300),t.$router.push({name:"Plan"}))})).catch((function(e){t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message}),t.loading=!1}))):this.$store.commit("Toast_State",{value:!0,color:"error",msg:"ກາລຸນາເລືອກລູກຄ້າກ່ອນ"})},viewPage:function(t){this.$router.push({name:"ViewCustomer",params:{id:t}})},Search:function(){Object(o["a"])(this)},getCenter:function(){if(this.customers.length){if(null==parseFloat(this.customers[0].lat))return console.log(this.latlng),this.latlng;var t={lat:parseFloat(this.customers[0].lat),lng:parseFloat(this.customers[0].lng)};return t}return this.latlng},getSiteIcon:function(t){var e={url:a("347c"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}},n={url:a("f742"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},color:"#000",scaledSize:{width:35,height:55,f:"px",b:"px"}};try{switch(t.route_plan_details_count){case 0:return e;case 1:return n}}catch(s){return e}},getMarkers:function(t){if(null!==t.customer)return{lat:parseFloat(t.lat),lng:parseFloat(t.lng)}},toggleInfo:function(t,e){this.infoPosition=this.getMarkers(t),this.infoContent=t.company_name+" ("+t.village.name+") ",this.infoCurrentKey==e?this.infoOpened=!this.infoOpened:(this.infoOpened=!0,this.infoCurrentKey=e)},rowClicked:function(t){this.toggleSelection(t.id),console.log(t)},toggleSelection:function(t){this.selectedRows.includes(t)?this.selectedRows=this.selectedRows.filter((function(e){return e!==t})):this.selectedRows.push(t)}},watch:{search:function(t){""==t&&this.fetchData()}},created:function(){this.fetchData()}},c=l,d=(a("5ebb"),a("2877")),u=a("6544"),h=a.n(u),m=a("2bc5"),f=a("8336"),v=a("b0af"),p=a("99d9"),g=a("62ad"),b=a("a523"),_=a("8fea"),C=a("4bd4"),w=a("132d"),x=a("0fd9"),k=a("2fa4"),y=a("8654"),V=Object(d["a"])(c,n,s,!1,null,null,null);e["default"]=V.exports;h()(V,{VBreadcrumbs:m["a"],VBtn:f["a"],VCard:v["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:g["a"],VContainer:b["a"],VDataTable:_["a"],VForm:C["a"],VIcon:w["a"],VRow:x["a"],VSpacer:k["a"],VTextField:y["a"]})},2243:function(t,e,a){},"4bd4":function(t,e,a){"use strict";var n=a("5530"),s=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),o=a("7e2b"),i=a("3206");e["a"]=Object(s["a"])(o["a"],Object(i["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=a(t)))})):n.valid=a(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"5ebb":function(t,e,a){"use strict";a("2243")}}]);
//# sourceMappingURL=chunk-41b7eda4.29a03856.js.map