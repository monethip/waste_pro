(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07c85bc2"],{"2a7f8":function(e,t,a){"use strict";a("9701")},"2bfd":function(e,t,a){},"347c":function(e,t,a){e.exports=a.p+"img/pin1.d74f27bd.svg"},"3a5f":function(e,t,a){"use strict";a.r(t);var s=a("c6a6"),i=a("8212"),r=a("2bc5"),l=a("8336"),n=a("b0af"),o=a("99d9"),c=a("ac7c"),d=a("62ad"),h=a("a523"),u=a("2e4b"),p=a("169a"),m=a("4bd4"),f=a("132d"),v=a("e449"),g=a("0fd9"),_=a("b974"),b=a("0789"),x=a("2fa4"),C=a("8654"),I=function(){var e=this,t=e._self._c;return t(h["a"],[t(r["a"],{attrs:{large:""}},[t(l["a"],{staticClass:"text-primary",attrs:{text:""},on:{click:function(t){return e.backPrevios()}}},[t(f["a"],[e._v("mdi-keyboard-backspace")])],1),e._v(" ເພີ່ມຂໍ້ມູນຫົວໜ່ວຍທຸລະກິດ ")],1),t(n["a"],[t(o["b"],{staticClass:"px-12"},[t(m["a"],{ref:"form",attrs:{"lazy-validation":""}},[t(g["a"],[t(d["a"],[t("div",{staticClass:"field"},[t("div",{staticClass:"file is-large is-boxed"},[t("label",{staticClass:"file-label"},[t("input",{staticClass:"file-input input-file-image",attrs:{type:"file",accept:"image/*",multiple:""},on:{change:e.previewMultiImage}}),t("span",{staticClass:"file-cta"},[t("span",{staticClass:"file-icon"},[t(f["a"],{staticClass:"fas fa-cloud-upload",staticStyle:{"font-size":"60px !important",color:"#719aff",cursor:"pointer"}},[e._v("mdi-cloud-upload")])],1),t("span",{staticClass:"file-label",staticStyle:{"margin-top":"10px","text-transform":"uppercase","padding-top":"20px"}},[e._v(" Choose Image ")])])])])])])],1),t(g["a"],[e.image_list.length>0?t("div",{staticStyle:{display:"inline-flex"}},e._l(e.preview_list,(function(a,s){return t(d["a"],{key:s,staticClass:"mt-5 text-center"},[t("div",[t(i["a"],{staticClass:"avatar rounded mr-6",attrs:{size:"94px"}},[t("img",{attrs:{src:a,alt:"Image"}})]),t("p",{staticClass:"mb-0 body-2"},[e._v(" Name: "+e._s(e.image_list[s].name)+" ")]),t("span",{staticClass:"body-2"},[e._v("size: "+e._s(e.image_list[s].size/1024)+"KB")]),t("div",{staticClass:"mt-2",on:{click:function(t){return e.RemoveItem(a)}}},[t(f["a"],{staticStyle:{cursor:"pointer"}},[e._v(" mdi-delete ")])],1)],1)])})),1):e._e()]),t(g["a"],[t(d["a"],{attrs:{cols:"4"}},[t(C["a"],{attrs:{label:"ຊື່ບໍລິສັດ *",required:"",rules:e.nameRules,outlined:"",dense:""},model:{value:e.data.name,callback:function(t){e.$set(e.data,"name",t)},expression:"data.name"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.company_name)+" ")])],1),t(d["a"],{attrs:{cols:"4"}},[t(C["a"],{staticClass:"input-number",attrs:{label:"ເບີໂທບໍລິສັດ *",required:"",type:"number",outlined:"",dense:""},model:{value:e.data.phone,callback:function(t){e.$set(e.data,"phone",t)},expression:"data.phone"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.phone)+" ")])],1),t(d["a"],{attrs:{cols:"4"}},[t(C["a"],{attrs:{label:"Email ບໍລິສັດ",outlined:"",dense:""},model:{value:e.data.email,callback:function(t){e.$set(e.data,"email",t)},expression:"data.email"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.email)+" ")])],1)],1),t(g["a"],[t(d["a"],[t(C["a"],{attrs:{label:"ຊື່ຜູ້ປະສານງານ *",required:"",rules:e.corNameRules,outlined:"",dense:""},model:{value:e.data.coordinator_name,callback:function(t){e.$set(e.data,"coordinator_name",t)},expression:"data.coordinator_name"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.coordinator_name)+" ")])],1),t(d["a"],[t(C["a"],{attrs:{label:"ນາມສະກຸນຜູ້ປະສານງານ *",required:"",rules:e.corSurameRules,outlined:"",dense:""},model:{value:e.data.coordinator_surname,callback:function(t){e.$set(e.data,"coordinator_surname",t)},expression:"data.coordinator_surname"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.coordinator_surname)+" ")])],1)],1),t(g["a"],[t(d["a"],{attrs:{cols:"6"}},[t(C["a"],{staticClass:"input-number",attrs:{label:"ເບີໂທຜູ້ປະສານງານ *",required:"",type:"number",outlined:"",dense:""},model:{value:e.data.coordinator_phone,callback:function(t){e.$set(e.data,"coordinator_phone",t)},expression:"data.coordinator_phone"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.coordinator_phone)+" ")])],1),t(d["a"],{attrs:{cols:"6"}},[t(C["a"],{attrs:{label:"Email ຜູ້ປະສານງານ",outlined:"",dense:""},model:{value:e.data.coordinator_email,callback:function(t){e.$set(e.data,"coordinator_email",t)},expression:"data.coordinator_email"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.coordinator_email)+" ")])],1)],1),t(g["a"],[t(d["a"],{attrs:{cols:"6"}},[t(s["a"],{attrs:{required:"",items:e.districts,"item-text":"name","item-value":"id",label:"District *","rules-district":e.rulesDistrict,outlined:"",dense:""},model:{value:e.selectedDistrict,callback:function(t){e.selectedDistrict=t},expression:"selectedDistrict"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.district_id)+" ")])],1),t(d["a"],{attrs:{cols:"6"}},[t(s["a"],{attrs:{required:"",items:e.villages,"item-text":"name","item-value":"id",label:"Village *",rules:e.ruleVillage,outlined:"",dense:""},model:{value:e.selectedVillage,callback:function(t){e.selectedVillage=t},expression:"selectedVillage"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.village_id)+" ")])],1)],1),t(g["a"],e._l(e.village_details,(function(a,s){return t(d["a"],{key:s,attrs:{cols:"6"}},[t(_["a"],{attrs:{items:a.village_details,"item-text":"name","item-value":"id",label:a.name,chips:"","deletable-chips":"",multiple:""},scopedSlots:e._u([{key:"append-outer",fn:function(){return[t(b["e"],{attrs:{mode:"out-in"}},[t(f["a"],{attrs:{color:"info"},domProps:{textContent:e._s("mdi-plus-circle-outline")},on:{click:function(t){return e.addItem(a)}}})],1)]},proxy:!0}],null,!0),model:{value:e.selectedVillageDetail,callback:function(t){e.selectedVillageDetail=t},expression:"selectedVillageDetail"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.village_details)+" ")])],1)})),1),t(g["a"],[t(d["a"],{attrs:{cols:"6"}},[t(_["a"],{attrs:{outlined:"",dense:"",items:e.costs,"item-text":"name","item-value":"value",label:"ປະເພດບໍລິການ"},model:{value:e.selectedCost,callback:function(t){e.selectedCost=t},expression:"selectedCost"}})],1),e.showFixed?t(d["a"],[t(C["a"],{attrs:{label:"ມູນຄ່າສັນຍາ *",type:"number",required:"",outlined:"",dense:""},model:{value:e.fix_cost,callback:function(t){e.fix_cost=t},expression:"fix_cost"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.cost_by)+" ")])],1):e._e()],1),"fix_cost"==e.selectedCost?t(g["a"],[t(d["a"],[e._l(e.carCounts,(function(a){return t(g["a"],{key:a},[t(d["a"],[t(_["a"],{attrs:{label:"ປະເພດລົດ",items:e.vehicleTypeCut(a-1),"item-text":"name","item-value":"id"},model:{value:e.selectedCar[a-1],callback:function(t){e.$set(e.selectedCar,a-1,t)},expression:"selectedCar[countCar-1]"}})],1),t(d["a"],[t(C["a"],{attrs:{type:"number",label:"ລາຄາ"},model:{value:e.selectedCarPrice[a-1],callback:function(t){e.$set(e.selectedCarPrice,a-1,t)},expression:"selectedCarPrice[countCar-1]"}})],1)],1)})),t(l["a"],{attrs:{color:"blue",dark:"",width:"100%"},on:{click:e.addMoreCar}},[e._v(" ເພີ່ມລາຄາຕາມລົດ ")])],2)],1):e._e(),t(g["a"],[t(d["a"],{attrs:{cols:"4"}},[t(C["a"],{attrs:{label:e.expectTrashLabel,outlined:"",dense:""},model:{value:e.data.expect_trash,callback:function(t){e.$set(e.data,"expect_trash",t)},expression:"data.expect_trash"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.expect_trash)+" ")])],1)],1),t(g["a"],[t(d["a"],[t(v["a"],{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:s}){return[t(C["a"],e._g(e._b({attrs:{label:"ເລີ່ມວັນທີ",readonly:"",outlined:"",dense:""},model:{value:e.start_date,callback:function(t){e.start_date=t},expression:"start_date"}},"v-text-field",s,!1),a))]}}]),model:{value:e.start_menu,callback:function(t){e.start_menu=t},expression:"start_menu"}},[t(u["a"],{model:{value:e.start_date,callback:function(t){e.start_date=t},expression:"start_date"}})],1),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.start_month)+" ")])],1),t(d["a"],[t(c["a"],{staticClass:"my-auto",scopedSlots:e._u([{key:"label",fn:function(){return[t("div",[e._v("ສາມາດເກັບຂີ້ເຫື້ຍອເລີຍໄດ້ບໍ່ ?")])]},proxy:!0}]),model:{value:e.start_collect,callback:function(t){e.start_collect=t},expression:"start_collect"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.can_collect)+" ")])],1)],1),t(g["a"],[t(d["a"],{attrs:{cols:"6"}},[t(C["a"],{attrs:{label:"ໝາຍເຫດ ",type:"text",outlined:"",dense:""},model:{value:e.data.collect_description,callback:function(t){e.$set(e.data,"collect_description",t)},expression:"data.collect_description"}})],1),t(d["a"],{attrs:{cols:"6"}},[t(_["a"],{attrs:{outlined:"",dense:"",items:e.favorite_dates,"item-text":"name","item-value":"name",label:"ມື້ບໍລິການ",multiple:""},model:{value:e.selectedFavoriteDate,callback:function(t){e.selectedFavoriteDate=t},expression:"selectedFavoriteDate"}})],1)],1),t(g["a"],[t(d["a"],{attrs:{cols:"6"}},[t(C["a"],{attrs:{label:"Password *",type:"password",rules:e.passwordRules,required:"",outlined:"",dense:""},model:{value:e.data.password,callback:function(t){e.$set(e.data,"password",t)},expression:"data.password"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.password)+" ")])],1),t(d["a"],{attrs:{cols:"6"}},[t(C["a"],{attrs:{label:"Password Confirm *",type:"password",outlined:"",dense:"",rules:e.passwordConfirmRules,required:""},model:{value:e.data.password_confirmation,callback:function(t){e.$set(e.data,"password_confirmation",t)},expression:"data.password_confirmation"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.password_confirmation)+" ")])],1)],1),t(g["a"],[t(d["a"],{attrs:{cols:"6"}},[t(C["a"],{staticClass:"input-number",attrs:{label:"Latitude",type:"number",outlined:"",dense:""},model:{value:e.latlng.lat,callback:function(t){e.$set(e.latlng,"lat",t)},expression:"latlng.lat"}})],1),t(d["a"],{attrs:{cols:"6"}},[t(C["a"],{staticClass:"input-number",attrs:{label:"Longitude",type:"number",outlined:"",dense:""},model:{value:e.latlng.lng,callback:function(t){e.$set(e.latlng,"lng",t)},expression:"latlng.lng"}})],1)],1),t(g["a"],[t(d["a"],{attrs:{cols:"12"}},[t("gmap-autocomplete",{ref:"searchInput",staticClass:"input text-field",attrs:{placeholder:"ຄົ້ນຫາເເຜນທີ່...",label:"Prepend inner","prepend-inner-icon":"mdi-map-marker",options:{fields:["geometry","formatted_address","name"]}},on:{place_changed:e.setPlace}}),t("span",{staticClass:"horizontal-divider"})],1),t(d["a"],{staticClass:"mb-4",attrs:{cols:"12"}},[t("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:e.latlng,zoom:17,"disable-default-u-i":!0},on:{change:e.changeLat}},[t("GmapMarker",{ref:"markers",attrs:{position:e.latlng,draggable:!0,icon:e.markerOptions,animation:2},on:{click:function(t){e.latlng=e.latlng},dragend:e.onLocation,change:e.changeLat}})],1)],1)],1)],1),t(o["a"],[t(x["a"]),t(l["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.backPrevios()}}},[e._v(" Back ")]),t(l["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.AddData()}}},[e._v(" Save ")])],1)],1)],1),t(p["a"],{attrs:{"max-width":"720px",persistent:""},model:{value:e.addItemDetail,callback:function(t){e.addItemDetail=t},expression:"addItemDetail"}},[t(n["a"],[t(o["c"],[t("span",{staticClass:"headline"},[e._v("Add Item "),t("span",[t("a",[e._v(e._s(e.villageDetail.name))])])])]),t(o["b"],[t(h["a"],[t(m["a"],{ref:"form",attrs:{"lazy-validation":""}},[t(g["a"],[t(d["a"],{attrs:{cols:"12"}},[t(C["a"],{attrs:{label:"Name *",type:"text",required:""},model:{value:e.itemDetailValue,callback:function(t){e.itemDetailValue=t},expression:"itemDetailValue"}})],1)],1)],1)],1),t(o["a"],[t(x["a"]),t(l["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.addItemDetail=!1}}},[e._v(" Close ")]),t(l["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.addMoreVillageDetail}},[e._v(" Add ")])],1)],1)],1)],1)],1)},y=[],k=(a("14d9"),a("7660")),S={props:["items"],data(){return{data:{email:"",coordinator_email:""},addCar:!1,cars:[],selectedCar:[],selectedCarPrice:[],vehicleTypes:[],carCounts:0,loading:!1,server_errors:{},provinces:[],districts:[],selectedDistrict:"",villages:[],selectedVillage:"",village_details:[],village_variation_id:[],selectedVillageDetail:[],addressdetail:[],units:[],addItemDetail:!1,itemDetailValue:"",itemDetailValues:[],villageDetail:{},selectedCost:"",start_date:"",start_menu:!1,start_collect:0,showFixed:!1,fix_cost:"",costs:[{id:1,value:"container",name:"ຄອນເທັນເນີ"},{id:2,value:"fix_cost",name:"ທຸລະກິດເປັນຖ້ຽວ"},{id:3,value:"chartered",name:"ມອບເໝົາ"},{id:4,value:"bag",name:"ບໍລິມາດ"},{id:5,value:"32km",name:"ຫຼັກ32"},{id:6,value:"infect",name:"ຂີ້ເຫຍື້ອຕິດເຊື້ອ"}],favorite_dates:[],selectedFavoriteDate:[],address:[],errormsg:"",latlng:{lat:17.9614,lng:102.6465},markers:[],currentPlace:null,markerOptions:{url:a("347c"),size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}},preview_list:[],image_list:[],image:[],emailRules:[e=>!!e||"E-mail is required",e=>/.+@.+\..+/.test(e)||"E-mail must be valid"],passwordRules:[e=>!!e||"Password is required",e=>e&&e.length>=8||"Password must be more than 8 characters"],passwordConfirmRules:[e=>!!e||"Password Confirm is required",e=>e&&e.length>=8||"Password must be more than 8 characters"],nameRules:[e=>!!e||"Name is required",e=>e&&e.length>=2||"Name must be less than 2 characters"],surNameRules:[e=>!!e||"SurName is required",e=>e&&e.length>=2||"SurName must be less than 2 characters"],corNameRules:[e=>!!e||"Coordinator Name is required"],corSurameRules:[e=>!!e||"Coordinator SurName is required"],phoneRules:[e=>!!e||"Phone is required",e=>e&&e.length>=4&&e.length<=11||"Phone number must be  4 - 11 numbers"],ruleVillage:[e=>!!e||"Village is required"],ruleVariation:[e=>!!e||"Variation is required"],rulesDistrict:[e=>!!e||"District is required"]}},computed:{expectTrashLabel(){const e="ຂີ້ເຫຍື້ອຄາດໝາຍ";return this.data.cost_by?`${e} (${Object(k["e"])(this.data.cost_by)})`:e}},watch:{selectedDistrict(){this.fetchVillage()},selectedVillage(){this.fetchVillageDetail()},"data.company_name":function(){this.server_errors.company_name=""},"data.coordinator_name":function(){this.server_errors.coordinator_name=""},"data.coordinator_surname":function(){this.server_errors.coordinator_surname=""},"data.coordinator_phone":function(){this.server_errors.coordinator_phone=""},"data.coordinator_email":function(){this.server_errors.coordinator_email=""},"data.phone":function(){this.server_errors.phone=""},"data.email":function(){this.server_errors.email=""},"data.password":function(){this.server_errors.password=""},"data.password_confirmation":function(){this.server_errors.password=""},selectedCost(e){"container"===e?(this.fix_cost="",this.showFixed=!0):"bag"===e?(this.fix_cost="",this.showFixed=!1):"fix_cost"===e?(console.log("fixed_cost: "+e),this.fix_cost="",this.showFixed=!0):("chartered"===e||"32km"===e||"infect"===e)&&(this.fix_cost="",this.showFixed=!0)}},mounted(){this.geolocate()},created(){this.fetchAddress(),this.fetchFavorite(),this.getRequest(),this.fetchVehicleType()},methods:{RemoveItem(e){this.preview_list.splice(this.preview_list.indexOf(e),1)},vehicleTypeCut(e){const t=this.selectedCar.slice(0,e);return this.vehicleTypes.filter(e=>!t.includes(e.id))},addMoreCar(){this.carCounts++},fetchVehicleType(){this.selectedVillageDetail=[],this.$store.commit("Loading_State",!0),this.$axios.get("vehicle_type/").then(e=>{200==e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.vehicleTypes=e.data.data},300)}).catch(()=>{this.$store.commit("Loading_State",!1)})},previewMultiImage(e){const t=e.target;let a=t.files.length,s=0;if(t.files)while(a--){const e=new FileReader;e.onload=e=>{this.preview_list.push(e.target.result)},this.image_list.push(t.files[s]),e.readAsDataURL(t.files[s]),s++}},fetchAddress(){this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then(e=>{200==e.data.code&&setTimeout(()=>{this.address=e.data.data,this.address.map(e=>{this.districts=e.districts,this.selectedDistrict=this.districts[0].id}),this.fetchVillage()},100)}).catch(()=>{})},fetchVillage(){this.$axios.get(`info/district/${this.selectedDistrict}/village`).then(e=>{200==e.data.code&&setTimeout(()=>{this.villages=e.data.data,this.selectedVillage=this.villages[0].id,this.fetchVillageDetail()},300)}).catch(()=>{})},fetchVillageDetail(){this.$axios.get(`info/village/${this.selectedVillage}/village-detail`).then(e=>{200==e.data.code&&setTimeout(()=>{this.village_details=e.data.data},100)}).catch(()=>{})},fetchFavorite(){this.$axios.get("favorite-date").then(e=>{200==e.data.code&&setTimeout(()=>{this.favorite_dates=e.data.data},100)}).catch(()=>{})},backPrevios(){this.$router.go(-1)},AddData(){const e=new FormData;this.image_list.map(t=>{e.append("images[]",t)}),this.selectedVillageDetail.map(t=>{e.append("village_details[]",t)}),this.selectedFavoriteDate.map(t=>{e.append("favorite_dates[]",t)}),e.append("company_name",this.data.name),e.append("village_id",this.selectedVillage),e.append("lat",this.latlng.lat),e.append("lng",this.latlng.lng),e.append("phone",this.data.phone),e.append("email",this.data.email),e.append("password",this.data.password),e.append("password_confirmation",this.data.password_confirmation),e.append("coordinator_name",this.data.coordinator_name),e.append("coordinator_surname",this.data.coordinator_surname),e.append("coordinator_phone",this.data.coordinator_phone),e.append("coordinator_email",this.data.coordinator_email),e.append("cost_by",this.selectedCost),this.data.expect_trash&&e.append("expect_trash",this.data.expect_trash),"bag"!==this.selectedCost&&e.append("fix_cost",this.fix_cost),e.append("start_date",this.start_date),e.append("can_collect",this.start_collect),e.append("collect_description",this.data.collect_description);for(const[t,a]of Object.entries(this.selectedCar))this.selectedCarPrice[t]&&(e.append(`vehicle_types[${t}][id]`,a),e.append(`vehicle_types[${t}][price]`,this.selectedCarPrice[t]));1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("company",e,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{200==e.data.code&&setTimeout(()=>{this.loading=!1,this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message}),this.$router.push({name:"Company"})},300)}).catch(e=>{if(this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),e.response&&422==e.response.status){const t=e.response.data.errors;for(const[e,a]of Object.entries(t))this.server_errors[e]=a[0]}this.loading=!1}))},createNewAddressName(){const e="#CUSTOM ADDRESS:";return this.isCreate?this.currentAddress:`${e} ${this.latlng.lat}, ${this.latlng.lng}`},onLocation(e){this.latlng.lat=e.latLng.lat(),this.latlng.lng=e.latLng.lng(),this.address=this.createNewAddressName()},setPlace(e){console.log(e),this.currentPlace=e,this.placeMarker()},placeMarker(){if(this.markers=[],this.places=[],this.data.lat){const e={lat:parseFloat(this.data.lat),lng:parseFloat(this.data.lng)};this.markers.push({position:e}),this.latlng=e}else{if(this.currentPlace){const e={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:e}),this.latlng=e,this.animateMarker()}else{const e={lat:parseFloat(this.latlng.lat),lng:parseFloat(this.latlng.lng)};this.markers.push({position:e}),this.animateMarker()}this.$refs.searchInput&&(this.address=this.$refs.searchInput.$el.value)}this.onDataChange()},animateMarker(){this.$nextTick(()=>{})},geolocate(){navigator.geolocation.getCurrentPosition(e=>{this.latlng={lat:e.coords.latitude,lng:e.coords.longitude},this.placeMarker()})},onDataChange(){this.$emit("onDataChange",{address:this.address,position:this.latlng})},onSave(){this.$emit("onSave",{address:this.address||this.currentAddress||"Unnamed Location",position:this.latlng,isCreate:this.isCreate})},removeItem(e){const t=this.selectedVillageDetail.indexOf(e.id);t>=0&&this.selectedVillageDetail.splice(t,1)},reset(){this.$refs.form.reset()},addItem(e){this.addItemDetail=!0,this.villageDetail=e},addMoreVillageDetail(){""!=this.itemDetailValue&&(this.itemDetailValues.push(this.itemDetailValue),this.loading=!0,this.$axios.post(`address/village/${this.selectedVillage}/village-detail`,{name:this.itemDetailValue,village_variation_id:this.villageDetail.id}).then(e=>{200==e.data.code&&setTimeout(()=>{this.loading=!1,this.addItemDetail=!1,this.selectedDetail="",this.fetchVillageDetail(),this.address={},this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})},300)}).catch(e=>{if(this.loading=!1,this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),e.response&&422==e.response.status){const t=e.response.data.errors;for(const[e,a]of Object.entries(t))this.server_errors[e]=a[0]}})),this.itemDetailValue="",this.addItemDetail=!1},changeLat(){this.placeMarker()},getRequest(){this.items&&(this.data=this.items)}}},D=S,w=(a("2a7f8"),a("2877")),V=Object(w["a"])(D,I,y,!1,null,null,null);t["default"]=V.exports},"4bd4":function(e,t,a){"use strict";a("14d9");var s=a("58df"),i=a("7e2b"),r=a("3206");t["a"]=Object(s["a"])(i["a"],Object(r["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",t=>{this.$set(this.errorBag,e._uid,t)},{immediate:!0}),a={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=e.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(e._uid)||(a.valid=t(e)))}):a.valid=t(e),a},validate(){return 0===this.inputs.filter(e=>!e.validate(!0)).length},reset(){this.inputs.forEach(e=>e.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(e=>e.resetValidation()),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find(t=>t._uid===e._uid);if(!t)return;const a=this.watchers.find(e=>e._uid===t._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(e=>e._uid!==t._uid),this.inputs=this.inputs.filter(e=>e._uid!==t._uid),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},"6ca7":function(e,t,a){},7660:function(e,t,a){"use strict";a.d(t,"g",(function(){return s})),a.d(t,"c",(function(){return i})),a.d(t,"h",(function(){return r})),a.d(t,"e",(function(){return l})),a.d(t,"f",(function(){return n})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return c})),a.d(t,"d",(function(){return d}));a("14d9");const s=function(e){switch(e){case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ເປັນຖ້ຽວ";case"chartered":return"ມອບເໝົາ";case"bag":return"ບໍລິມາດ";case"infect":return"ຂີ້ເຫຍື້ອຕິດເຊື້ອ";case"32km":return"ຫຼັກ32";default:return e}},i=[{en:"container",la:"ຄອນເທນເນີ"},{en:"fix_cost",la:"ເປັນຖ້ຽວ"},{en:"chartered",la:"ມອບເໝົາ"},{en:"bag",la:"ບໍລິມາດ"},{en:"infect",la:"ຂີ້ເຫຍື້ອຕິດເຊື້ອ"},{en:"32km",la:"ຫຼັກ32"}],r=function(e){switch(e){case"company":return"ຫົວໜ່ວຍທຸລະກິດ";case"home":return"ຄົວເຮືອນ";default:return e}},l=function(e){switch(e){case"bag":case"chartered":case"32km":case"infect":return"ຖົງ";case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ຖ້ຽວ";default:return e}},n=[{en:"requested",la:"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ",color:"#34495e"},{en:"rejected",la:"ປະຕິເສດລູກຄ້າແລ້ວ",color:"#eff3f5"},{en:"approved",la:"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ",color:"#54a0ff"},{en:"collected",la:"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ",color:"#c1c40f"},{en:"collect_confirm",la:"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ",color:"#30cb83"},{en:"collect_reject",la:"ລູກຄ້າປະຕິເສດການເກັບ",color:"#e74c3c"}],o=[{text:"ວັນທີຈ່າຍບິນ",value:"paided_at"},{text:"ວັນທີສ້າງບິນ",value:"created_at"},{text:"ວັນທີອະນຸມັດບິນ",value:"approved_at"},{text:"ວັນທີກວດສອບບິນສຳເລັດ",value:"confirmed_payment_at"}],c=(e=[])=>{const t=[];for(const a of e)t.push({id:a.id,name:`${a.name} (${Intl.NumberFormat().format(a.price)} ກີບ)`});return t},d=[{value:"",text:"ທັງໝົດ"},{value:"can",text:"ເກັບໄດ້"},{value:"not",text:"ເກັບບໍ່ໄດ້"}]},9701:function(e,t,a){},ac7c:function(e,t,a){"use strict";a("6ca7"),a("ec29");var s=a("9d26"),i=a("c37a"),r=a("fe09");t["a"]=r["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(e){this.$nextTick(()=>this.inputIndeterminate=e)},inputIndeterminate(e){this.$emit("update:indeterminate",e)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:e,...t}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...t,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},afdd:function(e,t,a){"use strict";var s=a("8336");t["a"]=s["a"]},c6a6:function(e,t,a){"use strict";a("2bfd");var s=a("b974"),i=a("8654"),r=a("d9f7"),l=a("80d2");const n={...s["b"],offsetY:!0,offsetOverflow:!0,transition:!1};t["a"]=s["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,a)=>a.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:s["a"].options.props.menuProps.type,default:()=>n},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(l["r"])(e,this.itemText),a=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),a)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=s["a"].options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...n,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=s["a"].options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){if(e!==t){if(!this.autoSelectFirst){const a=t[this.$refs.menu.listIndex];a?this.setMenuIndex(e.findIndex(e=>e===a)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&e.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===l["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===l["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==l["y"].backspace&&e!==l["y"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const a=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==a)return void(this.selectedIndex=a);const s=this.selectedItems.length,i=e!==s-1?e:e-1,r=this.selectedItems[i];r?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=i},clearableCallback(){this.internalSearch=null,s["a"].options.methods.clearableCallback.call(this)},genInput(){const e=i["a"].options.methods.genInput.call(this);return e.data=Object(r["a"])(e.data,{attrs:{"aria-activedescendant":Object(l["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["p"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=s["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?s["a"].options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,a=t.value;t.value&&this.activateMenu(),this.multiple||""!==a||this.deleteCurrentItem(),this.internalSearch=a,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[l["y"].home,l["y"].end].includes(t)||s["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){s["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){s["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){s["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,a;if(-1===this.selectedIndex)return;const s=this.selectedItems[this.selectedIndex],i=this.getText(s);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",i),null===(a=e.clipboardData)||void 0===a||a.setData("text/vnd.vuetify.autocomplete.item+plain",i),e.preventDefault()}}})},ec29:function(e,t,a){},fe09:function(e,t,a){"use strict";a("14d9");var s=a("c37a"),i=a("5607"),r=a("2b0e"),l=r["a"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),n=a("8547"),o=a("58df");function c(e){e.preventDefault()}t["a"]=Object(o["a"])(s["a"],l,n["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const e=this.value,t=this.internalValue;return this.isMultiple?!!Array.isArray(t)&&t.some(t=>this.valueComparator(t,e)):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,t):Boolean(t):this.valueComparator(t,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel(){const e=s["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:c},e):e},genInput(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onClick(e){this.onChange(),this.$emit("click",e)},onChange(){if(!this.isInteractive)return;const e=this.value;let t=this.internalValue;if(this.isMultiple){Array.isArray(t)||(t=[]);const a=t.length;t=t.filter(t=>!this.valueComparator(t,e)),t.length===a&&t.push(e)}else t=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(t,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(t,e)?null:e:!t;this.validate(!0,t),this.internalValue=t,this.hasColor=t},onFocus(e){this.isFocused=!0,this.$emit("focus",e)},onBlur(e){this.isFocused=!1,this.$emit("blur",e)},onKeydown(e){}}})}}]);
//# sourceMappingURL=chunk-07c85bc2.76152c2f.js.map