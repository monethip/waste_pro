(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-723787e9"],{"5d4c":function(t,e,a){"use strict";a.r(e);var s=a("86a8"),i=a("a125"),r=a("6a20"),l=a("c1a61"),n=a("f046"),o=a("b325"),d=a("e02b"),c=a("ba9d"),u=a("cf97"),h=a("9b01"),m=a("3bc0"),p=a("e862"),v=a("489f"),_=a("fd5c"),g=a("f7fb"),f=a("cc3d"),b=a("6ab0"),k=function(){var t=this,e=t._self._c;return e(c["a"],[e(r["a"],{attrs:{large:""}},[e(l["a"],{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[e(m["a"],[t._v("mdi-keyboard-backspace ")])],1),t._v(" ແກ້ໄຂຂໍ້ມູນການເກັບຂີ້ເຫື້ຍອພິເສດ ")],1),e(n["a"],[e(o["b"],{staticClass:"px-12"},[e(h["a"],{ref:"form",attrs:{"lazy-validation":""}},[e(v["a"],[e(d["a"],{attrs:{align:"center"}},[e("div",{staticClass:"field"},[e("div",{staticClass:"file is-large is-boxed"},[e("label",{staticClass:"file-label"},[e("input",{staticClass:"file-input input-file-image",attrs:{type:"file",accept:"image/*",multiple:""},on:{change:t.previewMultiImage}}),e("span",{staticClass:"file-cta"},[e("span",{staticClass:"file-icon"},[e(m["a"],{staticClass:"fas fa-cloud-upload",staticStyle:{"font-size":"60px !important",color:"#719aff",cursor:"pointer"}},[t._v("mdi-cloud-upload")])],1),e("span",{staticClass:"file-label",staticStyle:{"margin-top":"10px","text-transform":"uppercase","padding-top":"20px"}},[t._v(" ຮູບສະຖານທີ່ເກັບ ")])])])])])])],1),e(v["a"],t._l(t.preview_list,(function(a,s){return e(d["a"],{key:s,staticClass:"mt-5",attrs:{align:"center"}},[e(i["a"],{staticClass:"avatar rounded mr-2",attrs:{size:"94px"}},[e("img",{attrs:{src:a,alt:"Image"}})]),e("p",{staticClass:"mb-0"},[t._v(" File name: "+t._s(t.image_list[s].name)+" ")]),e("span",[t._v("size: "+t._s(t.image_list[s].size/1024)+"KB")]),e("div",{on:{click:function(e){return t.RemoveItem(a)}}},[e(m["a"],{staticStyle:{cursor:"pointer"}},[t._v(" mdi-delete ")])],1)],1)})),1),e(v["a"],[e(d["a"],[e(f["a"],{attrs:{label:"ຊື່ *",required:"",rules:t.nameRules,outlined:"",dense:""},model:{value:t.data.name,callback:function(e){t.$set(t.data,"name",e)},expression:"data.name"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1),e(d["a"],[e(f["a"],{attrs:{label:"ນາມສະກຸນ",outlined:"",dense:""},model:{value:t.data.surname,callback:function(e){t.$set(t.data,"surname",e)},expression:"data.surname"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.surname)+" ")])],1)],1),e(v["a"],[e(d["a"],[e(f["a"],{staticClass:"input-number",attrs:{label:"ເບີໂທ *",required:"",type:"number",outlined:"",dense:""},model:{value:t.data.phone,callback:function(e){t.$set(t.data,"phone",e)},expression:"data.phone"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.phone)+" ")])],1),e(d["a"],[e(_["a"],{attrs:{outlined:"",dense:"",items:t.collectionStatus,"item-text":"name","item-value":"name",label:"ສະຖານະ",rules:t.statusRule,required:""},model:{value:t.data.collect_status,callback:function(e){t.$set(t.data,"collect_status",e)},expression:"data.collect_status"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.collect_status)+" ")])],1)],1),e(v["a"],[e(d["a"],{attrs:{cols:"6"}},[e(s["a"],{attrs:{required:"",items:t.districts,"item-text":"name","item-value":"id",label:"District *",outlined:"",dense:""},model:{value:t.selectedDistrict,callback:function(e){t.selectedDistrict=e},expression:"selectedDistrict"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.district_id)+" ")])],1),e(d["a"],{attrs:{cols:"6"}},[e(s["a"],{attrs:{required:"",items:t.villages,"item-text":"name","item-value":"id",label:"Village *",outlined:"",dense:""},model:{value:t.data.village_id,callback:function(e){t.$set(t.data,"village_id",e)},expression:"data.village_id"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.village_id)+" ")])],1)],1),e(v["a"],[e(d["a"],{attrs:{cols:"6"}},[e(f["a"],{staticClass:"input-number",attrs:{label:"ລາຄາ *",type:"number",required:"",outlined:"",dense:""},model:{value:t.data.sub_total,callback:function(e){t.$set(t.data,"sub_total",e)},expression:"data.sub_total"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.sub_total)+" ")])],1),e(d["a"],{attrs:{cols:"6"}},[e(f["a"],{staticClass:"input-number",attrs:{label:"ສ່ວນຫຼຸດ *",type:"number",required:"",outlined:"",dense:""},model:{value:t.data.discount,callback:function(e){t.$set(t.data,"discount",e)},expression:"data.discount"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.discount)+" ")])],1)],1),e(v["a"],[e(d["a"],[e(p["a"],{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(f["a"],t._g(t._b({attrs:{label:"ເລີ່ມວັນທີ",readonly:"",outlined:"",dense:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},"v-text-field",s,!1),a))]}}]),model:{value:t.start_menu,callback:function(e){t.start_menu=e},expression:"start_menu"}},[e(u["a"],{model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.date)+" ")])],1),e(d["a"],[e(p["a"],{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(f["a"],t._g(t._b({attrs:{label:"ເວລາ",readonly:"",outlined:"",dense:""},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},"v-text-field",s,!1),a))]}}]),model:{value:t.time_menu,callback:function(e){t.time_menu=e},expression:"time_menu"}},[e(b["a"],{attrs:{type:"time"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)],1),e(d["a"],[e(s["a"],{attrs:{items:t.driver,"item-text":"name","item-value":"id",label:"ພະນັກງານຂັບລົດ",dense:"",outlined:""},model:{value:t.data.driver_id,callback:function(e){t.$set(t.data,"driver_id",e)},expression:"data.driver_id"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.driver_id)+" ")])],1)],1),e(v["a"],[e(d["a"],{attrs:{cols:"6"}},[e(f["a"],{staticClass:"input-number",attrs:{label:"Latitude",type:"number",outlined:"",dense:""},model:{value:t.latlng.lat,callback:function(e){t.$set(t.latlng,"lat",e)},expression:"latlng.lat"}})],1),e(d["a"],{attrs:{cols:"6"}},[e(f["a"],{staticClass:"input-number",attrs:{label:"Longitude",type:"number",outlined:"",dense:""},model:{value:t.latlng.lng,callback:function(e){t.$set(t.latlng,"lng",e)},expression:"latlng.lng"}})],1)],1),e(v["a"],[e(d["a"],{attrs:{cols:"12"}},[e("gmap-autocomplete",{ref:"searchInput",staticClass:"input text-field",attrs:{placeholder:"ຄົ້ນຫາເເຜນທີ່...",label:"Prepend inner","prepend-inner-icon":"mdi-map-marker",options:{fields:["geometry","formatted_address","name"]}},on:{place_changed:t.setPlace}}),e("span",{staticClass:"horizontal-divider"})],1),e(d["a"],{staticClass:"mb-4",attrs:{cols:"12"}},[e("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:t.latlng,zoom:16,"disable-default-u-i":!0}},t._l(t.markers,(function(a,s){return e("GmapMarker",{key:s,ref:"markers",refInFor:!0,attrs:{position:a.position,draggable:!0,icon:t.markerOptions,animation:2},on:{click:function(e){t.latlng=a.position},dragend:t.onLocation}})})),1)],1)],1)],1),e(o["a"],[e(g["a"]),e(l["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.backPrevios()}}},[t._v(" Back ")]),e(l["a"],{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.UpdateData()}}},[t._v(" ແກ້ໄຂ ")])],1)],1)],1)],1)},x=[],$=(a("a047"),{data(){return{data:{},loading:!1,server_errors:{},provinces:[],districts:[],selectedDistrict:"",villages:[],selectedVillage:"",driver:[],date:"",collectionStatus:[{id:1,name:"requested"},{id:2,name:"rejected"},{id:3,name:"approved"},{id:4,name:"collected"},{id:5,name:"collect_confirm"},{id:6,name:"collect_reject"}],start_menu:!1,time:"",time_menu:!1,errormsg:"",latlng:{lat:0,lng:0},markers:[],currentPlace:null,markerOptions:{url:a("347c"),size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}},preview_list:[],image_list:[],image:[],nameRules:[t=>!!t||"Name is required",t=>t&&t.length>=2||"Name must be less than 2 characters"],statusRule:[t=>!!t||"Status is required"]}},watch:{selectedDistrict(){this.fetchVillage()},"data.name":function(){this.server_errors.name=""},"data.surname":function(){this.server_errors.surname=""},selectedVillage(){this.server_errors.village_id=""},date(){this.server_errors.date=""},driver_id(){this.server_errors.driver_id=""},"data.driver_id":function(){this.server_errors.driver_id=""},"data.sub_total":function(){this.server_errors.sub_total=""},"data.phone":function(){this.server_errors.phone=""},"data.discount":function(){this.server_errors.email=""}},mounted(){this.geolocate()},created(){this.fetchDriver(),this.fetchAddress(),this.fetchCollection()},methods:{RemoveItem(t){this.preview_list.splice(this.preview_list.indexOf(t),1)},fetchCollection(){this.$axios.get("collection-event/"+this.$route.params.id).then(t=>{200==t.data.code&&setTimeout(()=>{this.data=t.data.data,this.collect_status=t.data.data.collect_status,this.selectedDistrict=this.data.village.district_id,this.time=this.moment(t.data.data.date).format("hh:mm"),this.date=this.moment(t.data.data.date).format("YYYY-MM-DD")},300)}).catch({})},fetchDriver(){this.$axios.get("driver").then(t=>{200==t.data.code&&(this.driver=t.data.data)}).catch({})},previewMultiImage(t){const e=t.target;let a=e.files.length,s=0;if(e.files)while(a--){const t=new FileReader;t.onload=t=>{this.preview_list.push(t.target.result)},this.image_list.push(e.files[s]),t.readAsDataURL(e.files[s]),s++}},fetchAddress(){this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then(t=>{200==t.data.code&&(this.address=t.data.data,this.address.map(t=>{this.districts=t.districts,this.selectedDistrict=this.districts[0].id}),this.fetchVillage())}).catch(()=>{})},fetchVillage(){this.$axios.get(`info/district/${this.selectedDistrict}/village`).then(t=>{200==t.data.code&&(this.villages=t.data.data,this.selectedVillage=this.villages[0].id)}).catch(()=>{})},backPrevios(){this.$router.go(-1)},UpdateData(){const t=`${this.date} ${this.time+":00"}`,e=new FormData;this.image_list.map(t=>{e.append("collect_location[]",t)}),e.append("name",this.data.name),e.append("surname",this.data.surname),e.append("village_id",this.data.village_id),e.append("lat",this.data.lat),e.append("lng",this.data.lng),e.append("phone",this.data.phone),e.append("date",t),e.append("sub_total",this.data.sub_total),e.append("driver_id",this.data.driver_id),e.append("discount",this.data.discount),e.append("collect_status",this.data.collect_status),e.append("_method","PUT"),1==this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.post("collection-event/"+this.$route.params.id,e,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message}),this.$router.push({name:"Collection"})},300)}).catch(t=>{if(this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"}),t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}this.$store.commit("Loading_State",!1)}))},createNewAddressName(){const t="#CUSTOM ADDRESS:";return this.isCreate?this.currentAddress:`${t} ${this.latlng.lat}, ${this.latlng.lng}`},onLocation(t){this.latlng.lat=t.latLng.lat(),this.latlng.lng=t.latLng.lng(),this.address=this.createNewAddressName()},setPlace(t){this.currentPlace=t,this.placeMarker()},placeMarker(){if(this.markers=[],this.places=[],this.currentPlace){const t={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:t}),this.latlng=t,this.animateMarker()}else{const t={lat:this.latlng.lat,lng:this.latlng.lng};this.markers.push({position:t}),this.animateMarker()}this.$refs.searchInput&&(this.address=this.$refs.searchInput.$el.value),this.onDataChange()},animateMarker(){this.$nextTick(()=>{})},geolocate(){navigator.geolocation.getCurrentPosition(t=>{this.latlng={lat:t.coords.latitude,lng:t.coords.longitude},this.placeMarker()})},onDataChange(){this.$emit("onDataChange",{address:this.address,position:this.latlng})},onSave(){this.$emit("onSave",{address:this.address||this.currentAddress||"Unnamed Location",position:this.latlng,isCreate:this.isCreate})},fetchUnit(){const t=this.addressdetail.filter(({id:t})=>this.village_variation_id.includes(t));t.map(t=>{for(let e=0;e<t.village_details.length;e++)this.units.push(t.village_details[e])})},removeItem(t){const e=this.selectedVillageDetail.indexOf(t.id);e>=0&&this.selectedVillageDetail.splice(e,1)},reset(){this.$refs.form.reset()}}}),C=$,w=(a("d694"),a("4a4e")),y=Object(w["a"])(C,k,x,!1,null,null,null);e["default"]=y.exports},"5d85":function(t,e,a){},"9b01":function(t,e,a){"use strict";a("a047");var s=a("87fc"),i=a("98fa"),r=a("1049");e["a"]=Object(s["a"])(i["a"],Object(r["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))}):a.valid=e(t),a},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const a=this.watchers.find(t=>t._uid===e._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},d694:function(t,e,a){"use strict";a("5d85")}}]);
//# sourceMappingURL=chunk-723787e9.ac7e3672.js.map