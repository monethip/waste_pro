(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49b4fa8e"],{"4fad":function(t,e,i){var a=i("23e7"),s=i("6f53").entries;a({target:"Object",stat:!0},{entries:function(t){return s(t)}})},"58f7":function(t,e,i){},"991f":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-breadcrumbs",{staticClass:"pt-0",attrs:{large:""}},[i("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[i("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" ລາຍລະອຽດບໍລິສັດ")],1),i("v-card",[t.data.media.length?i("v-carousel",t._l(t.data.media,(function(t,e){return i("v-carousel-item",{key:e,attrs:{src:t.url,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1):t._e(),i("v-card-text",[i("v-container",[i("v-row",[i("v-list-item",[i("v-list-item-icon",[i("v-icon",{attrs:{color:"indigo"}},[t._v("mdi-office-building ")])],1),i("v-list-item-content",[i("v-list-item-subtitle",[t._v("ບໍລິສັດ")]),i("v-list-item-title",[t._v(t._s(t.data.name)+" "+t._s(t.data.company_name))])],1),i("v-spacer"),i("v-list-item-icon",[i("v-icon",{staticClass:"mr-6",attrs:{color:"indigo"}},[t._v(" mdi-phone ")])],1),i("v-list-item-content",[i("v-list-item-subtitle",[t._v("ເບີໂທ")]),t.data.user?i("v-list-item-title",[t._v(" "+t._s(t.data.user.phone))]):t._e()],1),i("v-spacer"),i("v-list-item-icon",[i("v-icon",{staticClass:"mr-6",attrs:{color:"indigo"}},[t._v("mdi-email")])],1),i("v-list-item-content",[i("v-list-item-subtitle",[t._v("Email")]),t.data.user?i("v-list-item-title",[t._v(" "+t._s(t.data.user.email))]):t._e()],1)],1),i("v-divider",{attrs:{inset:""}})],1),i("v-row",[i("v-list-item",[i("v-list-item-icon",[i("v-icon",{attrs:{color:"indigo"}},[t._v("mdi-account-circle")])],1),i("v-list-item-content",[i("v-list-item-subtitle",[t._v("ຜູ້ຮັບຜິດຊອບ")]),t._l(t.data.company_coordinators,(function(e,a){return i("v-list-item-title",{key:a},[t._v(" "+t._s(e.name)+" "+t._s(e.surname)+" ")])}))],2),i("v-spacer"),i("v-list-item-icon",[i("v-icon",{staticClass:"mr-6",attrs:{color:"indigo"}},[t._v("mdi-phone")])],1),i("v-list-item-content",[i("v-list-item-subtitle",[t._v("ເບີໂທ")]),t._l(t.data.company_coordinators,(function(e,a){return i("v-list-item-title",{key:a},[t._v(" "+t._s(e.phone)+" ")])}))],2),i("v-spacer"),i("v-list-item-icon",[i("v-icon",{staticClass:"mr-6",attrs:{color:"indigo"}},[t._v("mdi-email")])],1),i("v-list-item-content",[i("v-list-item-subtitle",[t._v("Email")]),t._l(t.data.company_coordinators,(function(e,a){return i("v-list-item-title",{key:a},[t._v(" "+t._s(e.email)+" ")])}))],2)],1),i("v-divider",{attrs:{inset:""}}),i("v-list-item",[i("v-list-item-icon",[i("v-icon",{attrs:{color:"indigo"}},[t._v(" mdi-map-marker ")])],1),i("v-list-item-content",[t.data.village?i("v-list-item-title",[t._v(t._s(t.data.village.name))]):t._e(),t._l(t.data.village_details,(function(e,a){return i("div",{key:a},[i("v-list-item-subtitle",[t._v(t._s(e.name))])],1)}))],2)],1)],1),i("v-row",[i("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[i("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:t.getCenter(),zoom:16,disableDefaultUI:!0}},[i("GmapMarker",{ref:"markers",attrs:{position:t.getMarkers(t.data),draggable:!1,icon:t.markerOptions,animation:2},on:{click:function(e){t.latlng=t.data}}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.editPage(t.data.id)}}},[t._v(" Update ")])],1)],1)],1)],1)},s=[],n=i("3835"),r=(i("4fad"),{data:function(){return{data:{},loading:!1,server_errors:{},provinces:[],districts:[],selectedDistrict:"",villages:[],selectedVillage:"",village_details:[],selectedVillageDetail:[],address:[],errormsg:"",preview_list:[],image_list:[],image:[],latlng:{lat:0,lng:0},markers:[],currentPlace:null,markerOptions:{url:i("347c"),size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}}}},methods:{fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("company/"+this.$route.params.id).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.data=e.data.data,console.log(t.data)}),300)})).catch((function(e){if(t.$store.commit("Loading_State",!1),t.fetchData(),422==e.response.status)for(var i=e.response.data.errors,a=0,s=Object.entries(i);a<s.length;a++){var r=Object(n["a"])(s[a],2),o=r[0],l=r[1];t.server_errors[o]=l[0]}}))},backPrevios:function(){this.$router.go(-1)},getCenter:function(){if(this.data.lat){var t={lat:parseFloat(this.data.lat),lng:parseFloat(this.data.lng)};return t}return this.latlng},getMarkers:function(t){return{lat:parseFloat(t.lat),lng:parseFloat(t.lng)}},editPage:function(t){this.$router.push({name:"EditCompany",params:{id:t}})}},watch:{selectedDistrict:function(){this.fetchVillage()},selectedVillage:function(){this.fetchVillageDetail()}},created:function(){this.fetchData()}}),o=r,l=(i("c989"),i("2877")),c=i("6544"),d=i.n(c),v=i("2bc5"),m=i("8336"),u=i("b0af"),_=i("99d9"),f=i("5e66"),g=i("3e35"),p=i("62ad"),h=i("a523"),b=i("ce7e"),V=i("132d"),k=i("da13"),C=i("5d23"),w=i("34c3"),y=i("0fd9"),x=i("2fa4"),D=Object(l["a"])(o,a,s,!1,null,null,null);e["default"]=D.exports;d()(D,{VBreadcrumbs:v["a"],VBtn:m["a"],VCard:u["a"],VCardActions:_["a"],VCardText:_["b"],VCarousel:f["a"],VCarouselItem:g["a"],VCol:p["a"],VContainer:h["a"],VDivider:b["a"],VIcon:V["a"],VListItem:k["a"],VListItemContent:C["b"],VListItemIcon:w["a"],VListItemSubtitle:C["c"],VListItemTitle:C["d"],VRow:y["a"],VSpacer:x["a"]})},c989:function(t,e,i){"use strict";i("58f7")}}]);
//# sourceMappingURL=chunk-49b4fa8e.6c673e7b.js.map