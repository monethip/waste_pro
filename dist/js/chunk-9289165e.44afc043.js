(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9289165e"],{"0f2a":function(t,e,a){"use strict";a("9220")},"2bc5":function(t,e,a){"use strict";var s=a("5530"),r=(a("a15b"),a("abd3"),a("ade3")),n=a("1c87"),i=a("58df"),o=Object(i["a"])(n["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(r["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),a=e.tag,r=e.data;return t("li",[t(a,Object(s["a"])(Object(s["a"])({},r),{},{attrs:Object(s["a"])(Object(s["a"])({},r.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),c=a("80d2"),l=Object(c["j"])("v-breadcrumbs__divider","li"),u=a("7560");e["a"]=Object(i["a"])(u["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(s["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(l,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,a=[],s=0;s<this.items.length;s++){var r=this.items[s];a.push(r.text),e?t.push(this.$scopedSlots.item({item:r})):t.push(this.$createElement(o,{key:a.join("."),props:r},[r.text])),s<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},"347c":function(t,e,a){t.exports=a.p+"img/pin1.d74f27bd.svg"},"3f24":function(t,e,a){t.exports=a.p+"img/pin3.0a255abf.svg"},"6eceb":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("ac1f"),a("841c");var s=function(t){""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},9220:function(t,e,a){},abd3:function(t,e,a){},adc1:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-breadcrumbs",{attrs:{large:""}},[a("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[a("v-icon",[t._v("mdi-keyboard-backspace ")])],1),t._v(" Export ຂໍ້ມູນລູກຄ້າໃນແຜນເສັ້ນທາງ")],1),a("v-row",[a("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[t.customers?a("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:t.getCenter(),zoom:14,disableDefaultUI:!0}},t._l(t.customers,(function(e,s){return a("GmapMarker",{key:s,ref:"getMarkers()",refInFor:!0,attrs:{position:t.getMarkers(e),draggable:!0,icon:t.markerOptions,animation:2},on:{click:function(a){t.latlng=e}}})})),1):t._e()],1)],1),a("v-row",{staticClass:"mb-n6"},[a("v-col",[a("v-btn",{staticClass:"btn-primary",attrs:{loading:t.loading,disabled:t.loading},on:{click:function(e){return t.exportRoutePlan()}}},[a("v-icon",[t._v("mdi-arrow-right-bold-circle-outline")])],1)],1),a("v-col",[t.customers?a("h4",[t._v("ລວມລູກຄ້າ "+t._s(t.customers.length)+" ຄົນ")]):t._e()]),a("v-col",[a("v-text-field",{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຊື່ລູກຄ້າ",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),a("div",[a("v-card",[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.customers,search:t.search,"items-per-page":25},scopedSlots:t._u([{key:"item.index",fn:function(e){return[a("div",[t._v(t._s(e.index+1))])]}},{key:"item.address",fn:function(e){var s=e.item;return[s.district&&s.village?a("div",[t._v(" "+t._s(s.district.name)+", "+t._s(s.village.name)+" ")]):t._e()]}},{key:"item.actions",fn:function(e){var s=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.viewPage(s.id)}}},[t._v(" mdi-eye ")])]}},{key:"item.delete",fn:function(e){return[a("v-icon",{attrs:{small:""},on:{click:function(a){return t.deleteItem(e.index)}}},[t._v(" mdi-delete ")])]}}])})],1)],1)],1)],1),a("ModalDelete",[[a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:t.deleteItemConfirm}},[t._v("OK")]),a("v-spacer")],1)]],2)],1)},r=[],n=(a("4de4"),a("a434"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("99af"),a("6eceb")),i={name:"Customer",props:["items","villages"],data:function(){return{customers:[],countcutomer:0,loading:!1,customerId:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",selectedVillage:[],selectedCutomer:[],headers:[{text:"",value:"index"},{text:"ຊື່",value:"name"},{text:"ນາມສະກຸນ",value:"surname"},{text:"Phone",value:"user.phone",sortable:!1},{text:"ທີ່ຢູ່",value:"address",sortable:!1},{text:"ເຮືອນເລກທີ",value:"house_number",sortable:!1},{text:"",value:"delete"},{text:"",value:"actions",sortable:!1}],toast:{value:!0,color:"success",msg:""},toast_error:{value:!0,color:"error",msg:"Something when wrong!"},latlng:{lat:18.1189434,lng:102.290218},markers:[],places:[],currentPlace:null,markerOptions:{url:a("347c"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}}}},methods:{backPrevios:function(){this.$router.go(-1)},fetchData:function(){var t=this;this.customers=this.items,this.selectedVillage=this.villages,console.log(this.customers),this.selectedCutomer=[],this.customers&&this.customers.filter((function(e){t.selectedCutomer.push(e.id)}))},closeDelete:function(){this.$store.commit("modalDelete_State",!1)},deleteItem:function(t){this.customerId=t,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm:function(){console.log(this.customerId),this.loading=!0,this.customers.splice(this.customerId,1),this.fetchData(),this.loading=!1,this.$store.commit("modalDelete_State",!1)},exportRoutePlan:function(){var t=this;console.log(this.selectedCutomer),console.log(this.selectedVillage),this.loading=!0,this.$axios.post("export-customer-location/",{},{responseType:"blob"}).then((function(e){200==e.status&&setTimeout((function(){t.loading=!1;var a=window.URL.createObjectURL(new Blob([e.data])),s=document.createElement("a");s.href=a,s.setAttribute("download","customer_location.xlsx"),document.body.appendChild(s),s.click(),document.body.removeChild(s)}),300)})).catch((function(){t.fetchData(),t.$store.commit("Toast_State",t.toast_error),t.$store.commit("modalDelete_State",!1),t.loading=!1}))},viewPage:function(t){this.$router.push({name:"ViewCustomer",params:{id:t}})},Search:function(){Object(n["a"])(this)},createNewAddressName:function(){var t="#CUSTOM ADDRESS:";return this.isCreate?this.currentAddress:"".concat(t," ").concat(this.latlng.lat,", ").concat(this.latlng.lng)},setPlace:function(t){this.currentPlace=t,this.placeMarker()},addMarker:function(){if(this.currentPlace){var t={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:t}),this.latlng=t,this.currentPlace=null}},placeMarker:function(){if(this.markers=[],this.places=[],this.currentPlace){var t={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:t}),this.latlng=t,this.animateMarker()}else{var e={lat:this.latlng.lat,lng:this.latlng.lng};this.markers.push({position:e})}this.$refs.searchInput&&(this.address=this.$refs.searchInput.$el.value),this.onDataChange()},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.latlng={lat:e.coords.latitude,lng:e.coords.longitude},t.placeMarker()}))},onDataChange:function(){this.$emit("onDataChange",{address:this.address,position:this.latlng})},onSave:function(){this.$emit("onSave",{address:this.address||this.currentAddress||"Unnamed Location",position:this.latlng,isCreate:this.isCreate})},getCenter:function(){if(this.customers.length>0){var t={lat:parseFloat(this.customers[0].lat),lng:parseFloat(this.customers[0].lng)};return t}return this.latlng},getMarkers:function(t){return{lat:parseFloat(t.lat),lng:parseFloat(t.lng)}},getSiteIcon:function(t){try{switch(t){case 1:return a("347c");case 2:return a("f742");case 3:return a("3f24");default:return a("347c")}}catch(e){return null}}},watch:{search:function(t){""==t&&this.fetchData()}},mounted:function(){this.geolocate()},created:function(){this.fetchData()}},o=i,c=(a("0f2a"),a("2877")),l=a("6544"),u=a.n(l),d=a("2bc5"),h=a("8336"),m=a("b0af"),f=a("99d9"),g=a("62ad"),p=a("a523"),v=a("8fea"),b=a("132d"),k=a("0fd9"),x=a("2fa4"),C=a("8654"),_=Object(c["a"])(o,s,r,!1,null,null,null);e["default"]=_.exports;u()(_,{VBreadcrumbs:d["a"],VBtn:h["a"],VCard:m["a"],VCardActions:f["a"],VCardText:f["b"],VCol:g["a"],VContainer:p["a"],VDataTable:v["a"],VIcon:b["a"],VRow:k["a"],VSpacer:x["a"],VTextField:C["a"]})},f742:function(t,e,a){t.exports=a.p+"img/pin2.b23d8eec.svg"}}]);
//# sourceMappingURL=chunk-9289165e.44afc043.js.map