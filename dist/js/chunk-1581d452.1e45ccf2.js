(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1581d452"],{"5d4c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-breadcrumbs",{attrs:{large:""}},[a("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[a("v-icon",[t._v("mdi-keyboard-backspace ")])],1),t._v(" ແກ້ໄຂຂໍ້ມູນການເກັບຂີ້ເຫື້ຍອພິເສດ")],1),a("v-card",[a("v-card-text",{staticClass:"px-12"},[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-row",[a("v-col",{attrs:{align:"center"}},[a("div",{staticClass:"field"},[a("div",{staticClass:"file is-large is-boxed"},[a("label",{staticClass:"file-label"},[a("input",{staticClass:"file-input input-file-image",attrs:{type:"file",accept:"image/*",multiple:""},on:{change:t.previewMultiImage}}),a("span",{staticClass:"file-cta"},[a("span",{staticClass:"file-icon"},[a("v-icon",{staticClass:"fas fa-cloud-upload",staticStyle:{"font-size":"60px !important",color:"#719aff",cursor:"pointer"}},[t._v("mdi-cloud-upload")])],1),a("span",{staticClass:"file-label",staticStyle:{"margin-top":"10px","text-transform":"uppercase","padding-top":"20px"}},[t._v(" Choose Image ")])])])])])])],1),a("v-row",t._l(t.preview_list,(function(e,s){return a("v-col",{key:s,staticClass:"mt-5",attrs:{align:"center"}},[a("v-avatar",{staticClass:"avatar rounded mr-2",attrs:{size:"94px"}},[a("img",{attrs:{src:e,alt:"Image"}})]),a("p",{staticClass:"mb-0"},[t._v("File name: "+t._s(t.image_list[s].name))]),a("span",[t._v("size: "+t._s(t.image_list[s].size/1024)+"KB")]),a("div",{on:{click:function(a){return t.RemoveItem(e)}}},[a("v-icon",{staticStyle:{cursor:"pointer"}},[t._v("mdi-delete")])],1)],1)})),1),a("v-row",[a("v-col",[a("v-text-field",{attrs:{label:"ຊື່ *",required:"",rules:t.nameRules,outlined:"",dense:""},model:{value:t.data.name,callback:function(e){t.$set(t.data,"name",e)},expression:"data.name"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1),a("v-col",[a("v-text-field",{attrs:{label:"ນາມສະກຸນ",required:"",outlined:"",dense:""},model:{value:t.data.surname,callback:function(e){t.$set(t.data,"surname",e)},expression:"data.surname"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.surname)+" ")])],1)],1),a("v-row",[a("v-col",[a("v-text-field",{staticClass:"input-number",attrs:{label:"ເບີໂທ *",required:"",type:"number",outlined:"",dense:""},model:{value:t.data.phone,callback:function(e){t.$set(t.data,"phone",e)},expression:"data.phone"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.phone)+" ")])],1),a("v-col",[a("v-select",{attrs:{outlined:"",dense:"",items:t.collectionStatus,"item-text":"name","item-value":"name",label:"ສະຖານະ"},model:{value:t.data.collect_status,callback:function(e){t.$set(t.data,"collect_status",e)},expression:"data.collect_status"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-autocomplete",{attrs:{required:"",items:t.districts,"item-text":"name","item-value":"id",label:"District *",outlined:"",dense:""},model:{value:t.selectedDistrict,callback:function(e){t.selectedDistrict=e},expression:"selectedDistrict"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.district_id)+" ")])],1),a("v-col",{attrs:{cols:"6"}},[a("v-autocomplete",{attrs:{required:"",items:t.villages,"item-text":"name","item-value":"id",label:"Village *",outlined:"",dense:""},model:{value:t.selectedVillage,callback:function(e){t.selectedVillage=e},expression:"selectedVillage"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.village_id)+" ")])],1)],1),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{staticClass:"input-number",attrs:{label:"ລາຄາ *",type:"number",required:"",outlined:"",dense:""},model:{value:t.data.sub_total,callback:function(e){t.$set(t.data,"sub_total",e)},expression:"data.sub_total"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.sub_total)+" ")])],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{staticClass:"input-number",attrs:{label:"ສ່ວນຫຼຸດ *",type:"number",required:"",outlined:"",dense:""},model:{value:t.data.discount,callback:function(e){t.$set(t.data,"discount",e)},expression:"data.discount"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.discount)+" ")])],1)],1),a("v-row",[a("v-col",[a("v-menu",{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"ເລີ່ມວັນທີ",readonly:"",outlined:"",dense:""},model:{value:t.data.date,callback:function(e){t.$set(t.data,"date",e)},expression:"data.date"}},"v-text-field",i,!1),s))]}}]),model:{value:t.start_menu,callback:function(e){t.start_menu=e},expression:"start_menu"}},[a("v-date-picker",{model:{value:t.data.date,callback:function(e){t.$set(t.data,"date",e)},expression:"data.date"}})],1),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.date)+" ")])],1),a("v-col",[a("v-menu",{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"ເວລາ",readonly:"",outlined:"",dense:""},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},"v-text-field",i,!1),s))]}}]),model:{value:t.time_menu,callback:function(e){t.time_menu=e},expression:"time_menu"}},[a("v-time-picker",{attrs:{type:"time"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)],1),a("v-col",[a("v-autocomplete",{attrs:{items:t.driver,"item-text":"name","item-value":"id",label:"ພະນັກງານຂັບລົດ",dense:"",outlined:""},model:{value:t.data.driver_id,callback:function(e){t.$set(t.data,"driver_id",e)},expression:"data.driver_id"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.driver_id)+" ")])],1)],1),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{staticClass:"input-number",attrs:{label:"Latitude",type:"number",outlined:"",dense:""},model:{value:t.latlng.lat,callback:function(e){t.$set(t.latlng,"lat",e)},expression:"latlng.lat"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{staticClass:"input-number",attrs:{label:"Longitude",type:"number",outlined:"",dense:""},model:{value:t.latlng.lng,callback:function(e){t.$set(t.latlng,"lng",e)},expression:"latlng.lng"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("gmap-autocomplete",{ref:"searchInput",staticClass:"input text-field",attrs:{placeholder:"ຄົ້ນຫາເເຜນທີ່...",label:"Prepend inner","prepend-inner-icon":"mdi-map-marker",options:{fields:["geometry","formatted_address","name"]}},on:{place_changed:t.setPlace}}),a("span",{staticClass:"horizontal-divider"})],1),a("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[a("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:t.latlng,zoom:16,disableDefaultUI:!0}},t._l(t.markers,(function(e,s){return a("GmapMarker",{key:s,ref:"markers",refInFor:!0,attrs:{position:e.position,draggable:!0,icon:t.markerOptions,animation:2},on:{click:function(a){t.latlng=e.position},dragend:t.onLocation}})})),1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.backPrevios()}}},[t._v(" Back ")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.UpdateData()}}},[t._v(" ແກ້ໄຂ ")])],1)],1)],1)],1)},i=[],r=a("3835"),n=(a("a434"),a("d81d"),a("99af"),a("b0c0"),a("4fad"),a("4de4"),a("caad"),a("2532"),{data:function(){return{data:{},loading:!1,server_errors:{},provinces:[],districts:[],selectedDistrict:"",villages:[],selectedVillage:"",driver:[],date:"",collectionStatus:[{id:1,name:"rejected"},{id:2,name:"approved"}],start_menu:!1,time:"",time_menu:!1,errormsg:"",latlng:{lat:18.1189434,lng:102.290218},markers:[],currentPlace:null,markerOptions:{url:a("347c"),size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}},preview_list:[],image_list:[],image:[],nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length>=2||"Name must be less than 2 characters"}]}},methods:{RemoveItem:function(t){this.preview_list.splice(this.preview_list.indexOf(t),1)},fetchCollection:function(){var t=this;this.$axios.get("collection-event/"+this.$route.params.id).then((function(e){200==e.data.code&&setTimeout((function(){t.data=e.data.data,console.log(t.data)}),300)})).catch({})},fetchDriver:function(){var t=this;this.$axios.get("driver").then((function(e){200==e.data.code&&setTimeout((function(){t.driver=e.data.data}),300)})).catch({})},previewMultiImage:function(t){var e=this,a=t.target,s=a.files.length,i=0;if(a.files)while(s--){var r=new FileReader;r.onload=function(t){e.preview_list.push(t.target.result)},this.image_list.push(a.files[i]),r.readAsDataURL(a.files[i]),i++}},fetchAddress:function(){var t=this;this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then((function(e){200==e.data.code&&setTimeout((function(){t.address=e.data.data,t.address.map((function(e){t.districts=e.districts,t.selectedDistrict=t.districts[0].id})),t.fetchVillage()}),100)})).catch((function(){}))},fetchVillage:function(){var t=this;this.$axios.get("info/district/"+this.selectedDistrict+"/village").then((function(e){200==e.data.code&&setTimeout((function(){t.villages=e.data.data,t.selectedVillage=t.villages[0].id}),300)})).catch((function(){}))},backPrevios:function(){this.$router.go(-1)},UpdateData:function(){var t=this,e="".concat(this.data.date," ").concat(this.time+":00");console.log(e);var a=new FormData;this.image_list.map((function(t){a.append("collect_location[]",t)})),a.append("name",this.data.name),a.append("surname",this.data.surname),a.append("village_id",this.data.village_id),a.append("lat",this.data.lat),a.append("lng",this.data.lng),a.append("phone",this.data.phone),a.append("date",e),a.append("sub_total",this.data.sub_total),a.append("driver_id",this.data.driver_id),a.append("discount",this.data.discount),a.append("collect_status",this.data.collect_status),a.append("_method","PUT"),1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("collection-event/"+this.$route.params.id,a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message}),t.$router.push({name:"Collection"})}),300)})).catch((function(e){if(t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message}),422==e.response.status)for(var a=e.response.data.errors,s=0,i=Object.entries(a);s<i.length;s++){var n=Object(r["a"])(i[s],2),l=n[0],o=n[1];t.server_errors[l]=o[0]}t.loading=!1,t.fetchData()})))},createNewAddressName:function(){var t="#CUSTOM ADDRESS:";return this.isCreate?this.currentAddress:"".concat(t," ").concat(this.latlng.lat,", ").concat(this.latlng.lng)},onLocation:function(t){this.latlng.lat=t.latLng.lat(),this.latlng.lng=t.latLng.lng(),this.address=this.createNewAddressName()},setPlace:function(t){this.currentPlace=t,this.placeMarker()},placeMarker:function(){if(this.markers=[],this.places=[],this.currentPlace){var t={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:t}),this.latlng=t,this.animateMarker()}else{var e={lat:this.latlng.lat,lng:this.latlng.lng};this.markers.push({position:e}),this.animateMarker()}this.$refs.searchInput&&(this.address=this.$refs.searchInput.$el.value),this.onDataChange()},animateMarker:function(){this.$nextTick((function(){}))},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.latlng={lat:e.coords.latitude,lng:e.coords.longitude},t.placeMarker()}))},onDataChange:function(){this.$emit("onDataChange",{address:this.address,position:this.latlng})},onSave:function(){this.$emit("onSave",{address:this.address||this.currentAddress||"Unnamed Location",position:this.latlng,isCreate:this.isCreate})},fetchUnit:function(){var t=this,e=this.addressdetail.filter((function(e){var a=e.id;return t.village_variation_id.includes(a)}));e.map((function(e){for(var a=0;a<e.village_details.length;a++)t.units.push(e.village_details[a])}))},removeItem:function(t){var e=this.selectedVillageDetail.indexOf(t.id);e>=0&&this.selectedVillageDetail.splice(e,1)},reset:function(){this.$refs.form.reset()}},watch:{selectedDistrict:function(){this.fetchVillage()},"data.name":function(){this.server_errors.name=""},"data.surname":function(){this.server_errors.surname=""},selectedVillage:function(){this.server_errors.village_id=""},date:function(){this.server_errors.date=""},driver_id:function(){this.server_errors.drier_id=""},"data.sub_total":function(){this.server_errors.sub_total=""},"data.phone":function(){this.server_errors.phone=""},"data.discount":function(){this.server_errors.email=""}},mounted:function(){this.geolocate()},created:function(){this.fetchDriver(),this.fetchAddress(),this.fetchCollection()}}),l=n,o=(a("ef81"),a("2877")),c=a("6544"),d=a.n(c),u=a("c6a6"),v=a("8212"),m=a("2bc5"),p=a("8336"),f=a("b0af"),h=a("99d9"),g=a("62ad"),_=a("a523"),b=a("2e4b"),x=a("4bd4"),k=a("132d"),C=a("e449"),w=a("0fd9"),$=a("b974"),V=a("2fa4"),y=a("8654"),D=a("c964"),S=Object(o["a"])(l,s,i,!1,null,null,null);e["default"]=S.exports;d()(S,{VAutocomplete:u["a"],VAvatar:v["a"],VBreadcrumbs:m["a"],VBtn:p["a"],VCard:f["a"],VCardActions:h["a"],VCardText:h["b"],VCol:g["a"],VContainer:_["a"],VDatePicker:b["a"],VForm:x["a"],VIcon:k["a"],VMenu:C["a"],VRow:w["a"],VSelect:$["a"],VSpacer:V["a"],VTextField:y["a"],VTimePicker:D["a"]})},e1ac:function(t,e,a){},ef81:function(t,e,a){"use strict";a("e1ac")}}]);
//# sourceMappingURL=chunk-1581d452.1e45ccf2.js.map