(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-738416cb"],{"0f2a":function(e,t,s){"use strict";s("9220")},"2bc5":function(e,t,s){"use strict";var i=s("5530"),a=(s("a15b"),s("abd3"),s("ade3")),n=s("1c87"),o=s("58df"),r=Object(o["a"])(n["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(a["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),s=t.tag,a=t.data;return e("li",[e(s,Object(i["a"])(Object(i["a"])({},a),{},{attrs:Object(i["a"])(Object(i["a"])({},a.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),l=s("80d2"),c=Object(l["j"])("v-breadcrumbs__divider","li"),d=s("7560");t["a"]=Object(o["a"])(d["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(i["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(c,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,s=[],i=0;i<this.items.length;i++){var a=this.items[i];s.push(a.text),t?e.push(this.$scopedSlots.item({item:a})):e.push(this.$createElement(r,{key:s.join("."),props:a},[a.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},"347c":function(e,t,s){e.exports=s.p+"img/pin1.d74f27bd.svg"},"6eceb":function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));s("ac1f"),s("841c");var i=function(e){""!==e.search?""!==e.oldVal?e.oldVal!==e.search&&(e.oldVal=e.search,e.pagination.current_page=1,e.fetchData()):(""!==e.search&&(e.pagination.current_page=1,e.fetchData()),e.oldVal=e.search):e.oldVal=""}},9220:function(e,t,s){},abd3:function(e,t,s){},adc1:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-breadcrumbs",{staticClass:"mt-n4",attrs:{large:""}},[s("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(t){return e.backPrevios()}}},[s("v-icon",[e._v("mdi-keyboard-backspace ")])],1),e._v(" Export ຂໍ້ມູນລູກຄ້າໃນແຜນເສັ້ນທາງ")],1),s("v-row",[s("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[e.customers?s("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:e.getCenter(),zoom:14,disableDefaultUI:!0}},[s("gmap-info-window",{attrs:{options:e.infoOptions,position:e.infoPosition,opened:e.infoOpened,conent:e.infoContent},on:{closeclick:function(t){e.infoOpened=!1}}},[e._v(e._s(e.infoContent)+" ")]),e._l(e.customers,(function(t,i){return s("GmapMarker",{key:i,attrs:{position:e.getMarkers(t),draggable:!1,icon:e.markerOptions,animation:2,clickable:!0},on:{click:function(s){return e.toggleInfo(t,i)}}})}))],2):e._e()],1)],1),s("v-row",{staticClass:"mb-n6"},[s("v-col",[s("v-btn",{staticClass:"btn-primary",attrs:{loading:e.loading,disabled:e.loading},on:{click:function(t){return e.exportRoutePlan()}}},[s("v-icon",[e._v("mdi-arrow-right-bold-circle-outline")])],1)],1),s("v-col",[e.customers?s("h4",[e._v("ລວມລູກຄ້າ "+e._s(e.customers.length)+" ຄົນ")]):e._e()]),s("v-col",[s("v-text-field",{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຊື່ລູກຄ້າ",type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Search()}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),s("div",[s("v-card",[s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("div",[s("v-btn",{attrs:{text:"",color:"error"},on:{click:e.deleteItem}},[s("v-icon",{attrs:{medium:""}},[e._v(" mdi-delete ")])],1)],1),s("v-data-table",{attrs:{headers:e.headers,items:e.customers,search:e.search,"disable-pagination":!0,"hide-default-footer":"","show-select":""},scopedSlots:e._u([{key:"item.index",fn:function(t){return[s("div",[e._v(e._s(t.index+1))])]}},{key:"item.address_detail",fn:function(t){var i=t.item;return e._l(i.village_details,(function(t,i){return s("div",{key:i},[s("span",[e._v(e._s(t.name))])])}))}},{key:"item.address",fn:function(t){var i=t.item;return[i.district&&i.village?s("div",[e._v(" "+e._s(i.district.name)+", "+e._s(i.village.name)+" ")]):e._e()]}},{key:"item.actions",fn:function(t){var i=t.item;return[s("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.viewPage(i.id)}}},[e._v(" mdi-eye ")])]}}]),model:{value:e.selectedRows,callback:function(t){e.selectedRows=t},expression:"selectedRows"}})],1)],1)],1)],1),s("ModalDelete",[[s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.deleteItemConfirm}},[e._v("OK")]),s("v-spacer")],1)]],2)],1)},a=[],n=(s("a434"),s("4de4"),s("d3b7"),s("3ca3"),s("ddb0"),s("2b3d"),s("9861"),s("b0c0"),s("caad"),s("2532"),s("6eceb")),o={name:"Customer",props:["items","villages"],data:function(){return{customers:[],countcutomer:0,loading:!1,customerId:"",search:"",oldVal:"",selectedVillage:[],selectedCustomer:[],exclude_customers:[],selectedRows:[],customer:{},headers:[{text:"",value:"index"},{text:"ຊື່",value:"name"},{text:"ນາມສະກຸນ",value:"surname"},{text:"Phone",value:"user.phone",sortable:!1},{text:"ລາຍລະອຽດທີ່ຢູ່",value:"address_detail"},{text:"ບ້ານ",value:"village.name",sortable:!0},{text:"ເມືອງ",value:"district.name",sortable:!0},{text:"",value:"actions",sortable:!1}],toast:{value:!0,color:"success",msg:""},toast_error:{value:!0,color:"error",msg:"Something when wrong!"},latlng:{lat:18.1189434,lng:102.290218},markers:[],markerOptions:{url:s("347c"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}},infoPosition:null,infoContent:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35}}}},methods:{backPrevios:function(){this.$router.go(-1)},fetchData:function(){this.customers=this.items,this.selectedVillage=this.villages},closeDelete:function(){this.$store.commit("modalDelete_State",!1)},deleteItem:function(){this.selectedRows.length>0&&this.$store.commit("modalDelete_State",!0)},deleteItemConfirm:function(){var e=this;this.selectedCustomer=[],this.loading=!0;for(var t=0;t<this.selectedRows.length;t++){var s=this.customers.indexOf(this.selectedRows[t]);this.selectedCustomer.push(this.customers[s]),this.customers.splice(s,1)}this.selectedCustomer.filter((function(t){e.exclude_customers.push(t.id)})),this.$store.commit("Toast_State",{value:!0,color:"success",msg:"ລຶບຂໍ້ມູນສຳເລັດແລ້ວ"}),this.selectedRows=[],this.fetchData(),this.loading=!1,this.$store.commit("modalDelete_State",!1)},exportRoutePlan:function(){var e=this;this.customers.length>0?(this.loading=!0,this.$axios.post("export-customer-location/",{exclude_customers:this.exclude_customers,villages:this.selectedVillage},{responseType:"blob"}).then((function(t){200==t.status&&(setTimeout((function(){e.loading=!1;var s=window.URL.createObjectURL(new Blob([t.data])),i=document.createElement("a");i.href=s,i.setAttribute("download","customer_location.xlsx"),document.body.appendChild(i),i.click(),document.body.removeChild(i)}),300),e.$router.push({name:"Plan"}))})).catch((function(t){e.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message}),e.loading=!1}))):this.$store.commit("Toast_State",{value:!0,color:"error",msg:"ກາລຸນາເລືອກລູກຄ້າກ່ອນ"})},viewPage:function(e){this.$router.push({name:"ViewCustomer",params:{id:e}})},Search:function(){Object(n["a"])(this)},getCenter:function(){if(this.customers.length){if(null==parseFloat(this.customers[0].lat))return this.latlng;var e={lat:parseFloat(this.customers[0].lat),lng:parseFloat(this.customers[0].lng)};return e}return this.latlng},getMarkers:function(e){if(null!==e.customer)return{lat:parseFloat(e.lat),lng:parseFloat(e.lng)}},toggleInfo:function(e,t){this.infoPosition=this.getMarkers(e),this.infoContent=e.name+" ("+e.house_number+") ",this.infoCurrentKey==t?this.infoOpened=!this.infoOpened:(this.infoOpened=!0,this.infoCurrentKey=t)},rowClicked:function(e){this.toggleSelection(e.id),console.log(e)},toggleSelection:function(e){this.selectedRows.includes(e)?this.selectedRows=this.selectedRows.filter((function(t){return t!==e})):this.selectedRows.push(e)}},watch:{search:function(e){""==e&&this.fetchData()}},created:function(){this.fetchData()}},r=o,l=(s("0f2a"),s("2877")),c=s("6544"),d=s.n(c),u=s("2bc5"),h=s("8336"),m=s("b0af"),f=s("99d9"),v=s("62ad"),p=s("a523"),g=s("8fea"),b=s("132d"),_=s("0fd9"),x=s("2fa4"),k=s("8654"),C=Object(l["a"])(r,i,a,!1,null,null,null);t["default"]=C.exports;d()(C,{VBreadcrumbs:u["a"],VBtn:h["a"],VCard:m["a"],VCardActions:f["a"],VCardText:f["b"],VCol:v["a"],VContainer:p["a"],VDataTable:g["a"],VIcon:b["a"],VRow:_["a"],VSpacer:x["a"],VTextField:k["a"]})}}]);
//# sourceMappingURL=chunk-738416cb.6c931ab8.js.map