(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a8d6f306"],{"22aa":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"f",(function(){return c})),a.d(t,"e",(function(){return l})),a.d(t,"g",(function(){return o})),a.d(t,"h",(function(){return d}));const r=function(e){switch(e){case"created":case"ລໍຖ້າອະນຸມັດ":return"#73b8fd";case"approved":case"ອະນຸມັດແລ້ວ":return"#0080fc";case"canceled":case"ບິນຖືກຍົກເລີກ":return"#eb004c";case"rejected":case"ການຈ່າຍຖືກປະຕິເສດ":return"#740127";case"to_confirm_payment":case"ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ":return"#9c540d";case"success":case"ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ":return"#02a38a"}},s=function(e){switch(e){case"created":return"ລໍຖ້າອະນຸມັດ";case"approved":return"ອະນຸມັດແລ້ວ";case"canceled":return"ບິນຖືກຍົກເລີກ";case"rejected":return"ການຈ່າຍຖືກປະຕິເສດ";case"to_confirm_payment":return"ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ";case"success":return"ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ";case"cash":return"ຊຳລະເງິນສົດ";case"bcel":return"BCEL";default:return e}},i=function(e){switch(e){case"CustomBill":return"ບິນຍ້ອນຫຼັງ";case"NewCollectionEvent":return"ບີນບໍລີການຂີ້ເຫຍື້ອພິເສດ";case"FutureInvoice":return"ບິນບໍລິການລ່ວງໜ້າ";case"NewInvoice":return"ບິນບໍລິການປະຈຳເດືອນ";default:return e}},n=function(e){switch(e){case"requested":return"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ";case"rejected":return"ປະຕິເສດລູກຄ້າແລ້ວ";case"approved":return"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ";case"collected":return"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ";case"collect_confirm":return"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ";case"collect_reject":return"ລູກຄ້າປະຕິເສດການເກັບ";default:return e}},c=[{value:"cash",text:"ເງິນສົດ"},{value:"bcel",text:"ເງິນໂອນ"},{value:"bcel_online",text:"bcel bill payments"}],l=["created","approved","to_confirm_payment","success"],o=["rejected","canceled"],d=["kg","ຖົງ","container","ຄັ້ງ"]},"3dc0":function(e,t,a){"use strict";a.r(t);var r=a("c6a6"),s=a("2bc5"),i=a("8336"),n=a("62ad"),c=a("a523"),l=a("2e4b"),o=a("132d"),d=a("e449"),u=a("0fd9"),h=a("8654"),m=a("c964"),f=function(){var e=this,t=e._self._c;return t(c["a"],[t(s["a"],{attrs:{large:""}},[t(i["a"],{staticClass:"text-primary",attrs:{text:""},on:{click:function(t){return e.backPrevios()}}},[t(o["a"],[e._v("mdi-keyboard-backspace")]),e._v(" ເລືອກຄົນຂັບ ")],1)],1),t(u["a"],[t(n["a"],[t(r["a"],{attrs:{items:e.driverWithCar,"item-text":"name","item-value":"id",label:"ພະນັກງານຂັບລົດ",dense:"",outlined:""},model:{value:e.data.driver_id,callback:function(t){e.$set(e.data,"driver_id",t)},expression:"data.driver_id"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.driver_id)+" ")])],1)],1),t(u["a"],[t(n["a"],[t(d["a"],{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:r}){return[t(h["a"],e._g(e._b({attrs:{label:"ເລີ່ມວັນທີ",readonly:"",outlined:"",dense:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-text-field",r,!1),a))]}}]),model:{value:e.start_menu,callback:function(t){e.start_menu=t},expression:"start_menu"}},[t(l["a"],{model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.date)+" ")])],1),t(n["a"],[t(d["a"],{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:r}){return[t(h["a"],e._g(e._b({attrs:{label:"ເວລາ",readonly:"",outlined:"",dense:""},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},"v-text-field",r,!1),a))]}}]),model:{value:e.time_menu,callback:function(t){e.time_menu=t},expression:"time_menu"}},[t(m["a"],{attrs:{type:"time"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1)],1)],1),t(u["a"],[t(n["a"],[t(i["a"],{staticStyle:{width:"100%"},attrs:{color:"blue",dark:""},on:{click:function(t){return e.UpdateData()}}},[e._v(" ບັນທຶກ ")])],1),t(n["a"],[t(i["a"],{staticStyle:{width:"100%"},on:{click:function(t){return e.backPrevios()}}},[e._v(" ປິດ ")])],1)],1)],1)},p=[],v=(a("14d9"),a("22aa")),_=a("7660"),g={data(){return{data:{},loading:!1,server_errors:{},provinces:[],districts:[],selectedDistrict:"",villages:[],selectedVillage:"",driver:[],date:"",collectionStatus:_["f"],start_menu:!1,time:"",time_menu:!1,errormsg:"",latlng:{lat:18.1189434,lng:102.290218},markers:[],currentPlace:null,markerOptions:{url:a("347c"),size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}},preview_list:[],image_list:[],image:[],nameRules:[e=>!!e||"Name is required",e=>e&&e.length>=2||"Name must be less than 2 characters"],statusRule:[e=>!!e||"Status is required"]}},computed:{statusColor(){if(!this.data)return"";const e=this.collectionStatus.find(e=>e.en==this.data.collect_status);return e?e.color:""},driverWithCar(){const e=[];for(const t of this.driver)e.push({id:t.id,name:`${t.name} ${t.surname} (${t.vehicle.car_id})`});return e}},watch:{selectedDistrict(){this.fetchVillage()},"data.name":function(){this.server_errors.name=""},"data.surname":function(){this.server_errors.surname=""},selectedVillage(){this.server_errors.village_id=""},date(){this.server_errors.date=""},driver_id(){this.server_errors.driver_id=""},"data.driver_id":function(){this.server_errors.driver_id=""},"data.sub_total":function(){this.server_errors.sub_total=""},"data.phone":function(){this.server_errors.phone=""},"data.discount":function(){this.server_errors.email=""}},mounted(){this.geolocate()},created(){this.fetchDriver(),this.fetchAddress(),this.fetchCollection()},methods:{filterCollectStatus(e){return Object(v["c"])(e.name)},RemoveItem(e){this.preview_list.splice(this.preview_list.indexOf(e),1)},fetchCollection(){this.$axios.get("v2/collection-event/"+this.$route.params.id).then(e=>{200==e.data.code&&setTimeout(()=>{this.data=e.data.data,this.collect_status=e.data.data.collect_status,this.selectedDistrict=this.data.village.district_id,this.selectedVillage=this.data.village_id,console.log(this.data),this.time=this.moment(e.data.data.date).format("hh:mm"),this.date=this.moment(e.data.data.date).format("YYYY-MM-DD")},300)}).catch({})},fetchDriver(){this.$axios.get("driver").then(e=>{200==e.data.code&&(this.driver=e.data.data)}).catch({})},previewMultiImage(e){const t=e.target;let a=t.files.length,r=0;if(t.files)while(a--){const e=new FileReader;e.onload=e=>{this.preview_list.push(e.target.result)},this.image_list.push(t.files[r]),e.readAsDataURL(t.files[r]),r++}},fetchAddress(){this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then(e=>{200==e.data.code&&(this.address=e.data.data,this.address.map(e=>{this.districts=e.districts,this.selectedDistrict=this.districts[0].id}),this.fetchVillage())}).catch(()=>{})},fetchVillage(){this.$axios.get(`info/district/${this.selectedDistrict}/village`).then(e=>{200==e.data.code&&(this.villages=e.data.data,this.selectedVillage=this.villages[0].id)}).catch(()=>{})},backPrevios(){this.$router.go(-1)},UpdateData(){const e=`${this.date} ${this.time+":00"}`,t=new FormData;this.image_list.map(e=>{t.append("collect_location[]",e)}),t.append("name",this.data.name),t.append("surname",this.data.surname),t.append("village_id",this.data.village_id),t.append("lat",this.data.lat),t.append("lng",this.data.lng),t.append("phone",this.data.phone),t.append("date",this.moment(e).format("y-MM-D hh:mm:ss")),t.append("total",this.data.billing.total),this.data.driver_id&&t.append("driver_id",this.data.driver_id),t.append("collect_status",this.data.collect_status),t.append("_method","PUT"),this.$store.commit("Loading_State",!0),this.$axios.post("v2/collection-event/"+this.$route.params.id,t,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{200==e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message}),this.$router.push({name:"event-invoice"})},300)}).catch(e=>{if(this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message}),e.response&&422==e.response.status){const t=e.response.data.errors;for(const[e,a]of Object.entries(t))this.server_errors[e]=a[0]}this.$store.commit("Loading_State",!1),this.fetchData()})},createNewAddressName(){const e="#CUSTOM ADDRESS:";return this.isCreate?this.currentAddress:`${e} ${this.latlng.lat}, ${this.latlng.lng}`},onLocation(e){this.latlng.lat=e.latLng.lat(),this.latlng.lng=e.latLng.lng(),this.address=this.createNewAddressName()},setPlace(e){this.currentPlace=e,this.placeMarker()},placeMarker(){if(this.markers=[],this.places=[],this.currentPlace){const e={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:e}),this.latlng=e,this.animateMarker()}else{const e={lat:this.latlng.lat,lng:this.latlng.lng};this.markers.push({position:e}),this.animateMarker()}this.$refs.searchInput&&(this.address=this.$refs.searchInput.$el.value),this.onDataChange()},animateMarker(){this.$nextTick(()=>{})},geolocate(){navigator.geolocation.getCurrentPosition(e=>{this.latlng={lat:e.coords.latitude,lng:e.coords.longitude},this.placeMarker()})},onDataChange(){this.$emit("onDataChange",{address:this.address,position:this.latlng})},fetchUnit(){const e=this.addressdetail.filter(({id:e})=>this.village_variation_id.includes(e));e.map(e=>{for(let t=0;t<e.village_details.length;t++)this.units.push(e.village_details[t])})},removeItem(e){const t=this.selectedVillageDetail.indexOf(e.id);t>=0&&this.selectedVillageDetail.splice(t,1)},reset(){this.$refs.form.reset()}}},b=g,k=(a("4797"),a("2877")),x=Object(k["a"])(b,f,p,!1,null,null,null);t["default"]=x.exports},4797:function(e,t,a){"use strict";a("c582")},7660:function(e,t,a){"use strict";a.d(t,"g",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"h",(function(){return i})),a.d(t,"e",(function(){return n})),a.d(t,"f",(function(){return c})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return d}));a("14d9");const r=function(e){switch(e){case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ເປັນຖ້ຽວ";case"chartered":return"ມອບເໝົາ";case"bag":return"ບໍລິມາດ";case"infect":return"ຂີ້ເຫຍື້ອຕິດເຊື້ອ";case"32km":return"ຫຼັກ32";default:return e}},s=[{en:"container",la:"ຄອນເທນເນີ"},{en:"fix_cost",la:"ເປັນຖ້ຽວ"},{en:"chartered",la:"ມອບເໝົາ"},{en:"bag",la:"ບໍລິມາດ"},{en:"infect",la:"ຂີ້ເຫຍື້ອຕິດເຊື້ອ"},{en:"32km",la:"ຫຼັກ32"}],i=function(e){switch(e){case"company":return"ຫົວໜ່ວຍທຸລະກິດ";case"home":return"ຄົວເຮືອນ";default:return e}},n=function(e){switch(e){case"bag":case"chartered":case"32km":case"infect":return"ຖົງ";case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ຖ້ຽວ";default:return e}},c=[{en:"requested",la:"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ",color:"#34495e"},{en:"rejected",la:"ປະຕິເສດລູກຄ້າແລ້ວ",color:"#eff3f5"},{en:"approved",la:"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ",color:"#54a0ff"},{en:"collected",la:"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ",color:"#c1c40f"},{en:"collect_confirm",la:"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ",color:"#30cb83"},{en:"collect_reject",la:"ລູກຄ້າປະຕິເສດການເກັບ",color:"#e74c3c"}],l=[{text:"ວັນທີຈ່າຍບິນ",value:"paided_at"},{text:"ວັນທີສ້າງບິນ",value:"created_at"},{text:"ວັນທີອະນຸມັດບິນ",value:"approved_at"},{text:"ວັນທີກວດສອບບິນສຳເລັດ",value:"confirmed_payment_at"}],o=(e=[])=>{const t=[];for(const a of e)t.push({id:a.id,name:`${a.name} (${Intl.NumberFormat().format(a.price)} ກີບ)`});return t},d=[{value:"",text:"ທັງໝົດ"},{value:"can",text:"ເກັບໄດ້"},{value:"not",text:"ເກັບບໍ່ໄດ້"}]},c582:function(e,t,a){}}]);
//# sourceMappingURL=chunk-a8d6f306.4cea2e9a.js.map