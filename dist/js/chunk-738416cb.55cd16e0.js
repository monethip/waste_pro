(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-738416cb"],{"0f2a":function(e,t,s){"use strict";s("9220")},"2bc5":function(e,t,s){"use strict";var a=s("5530"),i=(s("a15b"),s("abd3"),s("ade3")),n=s("1c87"),o=s("58df"),r=Object(o["a"])(n["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(i["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),s=t.tag,i=t.data;return e("li",[e(s,Object(a["a"])(Object(a["a"])({},i),{},{attrs:Object(a["a"])(Object(a["a"])({},i.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),l=s("80d2"),c=Object(l["j"])("v-breadcrumbs__divider","li"),d=s("7560");t["a"]=Object(o["a"])(d["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(a["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(c,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,s=[],a=0;a<this.items.length;a++){var i=this.items[a];s.push(i.text),t?e.push(this.$scopedSlots.item({item:i})):e.push(this.$createElement(r,{key:s.join("."),props:i},[i.text])),a<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},"347c":function(e,t,s){e.exports=s.p+"img/pin1.d74f27bd.svg"},"6eceb":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));s("ac1f"),s("841c");var a=function(e){""!==e.search?""!==e.oldVal?e.oldVal!==e.search&&(e.oldVal=e.search,e.pagination.current_page=1,e.fetchData()):(""!==e.search&&(e.pagination.current_page=1,e.fetchData()),e.oldVal=e.search):e.oldVal=""}},9220:function(e,t,s){},abd3:function(e,t,s){},adc1:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-breadcrumbs",{staticClass:"mt-n4",attrs:{large:""}},[s("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(t){return e.backPrevios()}}},[s("v-icon",[e._v("mdi-keyboard-backspace ")])],1),e._v(" Export ຂໍ້ມູນລູກຄ້າໃນແຜນເສັ້ນທາງ")],1),s("v-row",[s("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[e.customers?s("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:e.getCenter(),zoom:14,disableDefaultUI:!0}},[s("gmap-info-window",{attrs:{options:e.infoOptions,position:e.infoPosition,opened:e.infoOpened,conent:e.infoContent},on:{closeclick:function(t){e.infoOpened=!1}}},[e._v(e._s(e.infoContent)+" ")]),e._l(e.customers,(function(t,a){return s("GmapMarker",{key:a,attrs:{position:e.getMarkers(t),draggable:!1,icon:e.markerOptions,animation:2,clickable:!0},on:{click:function(s){return e.toggleInfo(t,a)}}})}))],2):e._e()],1)],1),s("v-row",{staticClass:"mb-n6"},[s("v-col",[s("v-btn",{staticClass:"btn-primary",attrs:{loading:e.loading,disabled:e.loading},on:{click:function(t){return e.exportRoutePlan()}}},[s("v-icon",[e._v("mdi-arrow-right-bold-circle-outline")])],1)],1),s("v-col",[e.customers?s("h4",[e._v("ລວມລູກຄ້າ "+e._s(e.customers.length)+" ຄົນ")]):e._e()]),s("v-col",[s("v-text-field",{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຊື່ລູກຄ້າ",type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Search()}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),s("div",[s("v-card",[s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("div",[s("v-btn",{attrs:{text:"",color:"grey"},on:{click:e.deleteItem}},[s("v-icon",{attrs:{medium:""}},[e._v(" mdi-delete ")])],1)],1),s("v-data-table",{attrs:{headers:e.headers,items:e.customers,search:e.search,"items-per-page":15,"show-select":""},scopedSlots:e._u([{key:"item.index",fn:function(t){return[s("div",[e._v(e._s(t.index+1))])]}},{key:"item.address_detail",fn:function(t){var a=t.item;return e._l(a.village_details,(function(t,a){return s("div",{key:a},[s("span",[e._v(e._s(t.name))])])}))}},{key:"item.address",fn:function(t){var a=t.item;return[a.district&&a.village?s("div",[e._v(" "+e._s(a.district.name)+", "+e._s(a.village.name)+" ")]):e._e()]}},{key:"item.actions",fn:function(t){var a=t.item;return[s("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.viewPage(a.id)}}},[e._v(" mdi-eye ")])]}}]),model:{value:e.selectedRows,callback:function(t){e.selectedRows=t},expression:"selectedRows"}})],1)],1)],1)],1),s("ModalDelete",[[s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.deleteItemConfirm}},[e._v("OK")]),s("v-spacer")],1)]],2)],1)},i=[],n=(s("a434"),s("d3b7"),s("3ca3"),s("ddb0"),s("2b3d"),s("9861"),s("b0c0"),s("6eceb")),o={name:"Customer",props:["items","villages"],data:function(){return{customers:[],countcutomer:0,loading:!1,customerId:"",search:"",oldVal:"",selectedVillage:[],selectedCustomer:[],selectedRows:[],customer:{},headers:[{text:"",value:"index"},{text:"ຊື່",value:"name"},{text:"ນາມສະກຸນ",value:"surname"},{text:"Phone",value:"user.phone",sortable:!1},{text:"ລາຍລະອຽດທີ່ຢູ່",value:"address_detail"},{text:"ບ້ານ",value:"village.name",sortable:!0},{text:"ເມືອງ",value:"district.name",sortable:!0},{text:"",value:"actions",sortable:!1}],toast:{value:!0,color:"success",msg:""},toast_error:{value:!0,color:"error",msg:"Something when wrong!"},latlng:{lat:18.1189434,lng:102.290218},markers:[],places:[],currentPlace:null,markerOptions:{url:s("347c"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}},infoPosition:null,infoContent:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35}}}},methods:{backPrevios:function(){this.$router.go(-1)},fetchData:function(){this.customers=this.items,this.selectedVillage=this.villages},closeDelete:function(){this.$store.commit("modalDelete_State",!1)},deleteItem:function(){this.selectedRows.length>0&&this.$store.commit("modalDelete_State",!0)},deleteItemConfirm:function(){this.loading=!0;for(var e=0;e<this.selectedRows.length;e++){var t=this.customers.indexOf(this.selectedRows[e]);this.customers.splice(t,1),this.fetchData(),console.log("Hei")}this.selectedRows=[],this.fetchData(),this.loading=!1,this.$store.commit("modalDelete_State",!1)},exportRoutePlan:function(){var e=this;this.selectedCustomer.length>0?(this.loading=!0,this.$axios.post("export-customer-location/",{exclude_customers:this.selectedCustomer,villages:this.selectedVillage},{responseType:"blob"}).then((function(t){200==t.status&&setTimeout((function(){e.loading=!1;var s=window.URL.createObjectURL(new Blob([t.data])),a=document.createElement("a");a.href=s,a.setAttribute("download","customer_location.xlsx"),document.body.appendChild(a),a.click(),document.body.removeChild(a)}),300)})).catch((function(){e.$store.commit("Toast_State",e.toast_error),e.loading=!1}))):this.$store.commit("Toast_State",{value:!0,color:"error",msg:"ກາລຸນາເລືອກລູກຄ້າກ່ອນ"})},viewPage:function(e){this.$router.push({name:"ViewCustomer",params:{id:e}})},Search:function(){Object(n["a"])(this)},getCenter:function(){if(this.customers.length>0){var e={lat:parseFloat(this.customers[0].lat),lng:parseFloat(this.customers[0].lng)};return e}return this.latlng},getMarkers:function(e){return{lat:parseFloat(e.lat),lng:parseFloat(e.lng)}},toggleInfo:function(e,t){this.infoPosition=this.getMarkers(e),this.infoContent=e.name+" ("+e.house_number+") ",this.infoCurrentKey==t?this.infoOpened=!this.infoOpened:(this.infoOpened=!0,this.infoCurrentKey=t)}},watch:{search:function(e){""==e&&this.fetchData()}},created:function(){this.fetchData()}},r=o,l=(s("0f2a"),s("2877")),c=s("6544"),d=s.n(c),u=s("2bc5"),m=s("8336"),h=s("b0af"),f=s("99d9"),v=s("62ad"),p=s("a523"),b=s("8fea"),g=s("132d"),_=s("0fd9"),x=s("2fa4"),k=s("8654"),C=Object(l["a"])(r,a,i,!1,null,null,null);t["default"]=C.exports;d()(C,{VBreadcrumbs:u["a"],VBtn:m["a"],VCard:h["a"],VCardActions:f["a"],VCardText:f["b"],VCol:v["a"],VContainer:p["a"],VDataTable:b["a"],VIcon:g["a"],VRow:_["a"],VSpacer:x["a"],VTextField:k["a"]})}}]);
//# sourceMappingURL=chunk-738416cb.55cd16e0.js.map