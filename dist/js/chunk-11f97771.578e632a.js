(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11f97771"],{"2a7f":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var s=a("71d9"),n=a("80d2");const r=Object(n["j"])("v-toolbar__title"),o=Object(n["j"])("v-toolbar__items");s["a"]},"347c":function(t,e,a){t.exports=a.p+"img/pin1.d74f27bd.svg"},4299:function(t,e,a){"use strict";a("9422")},"6eceb":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));const s=t=>{""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},7142:function(t,e,a){"use strict";a.r(e);var s=a("2bc5"),n=a("8336"),r=a("b0af"),o=a("99d9"),i=a("cc20"),c=a("62ad"),l=a("a523"),u=a("8fea"),d=a("169a"),m=a("132d"),h=a("8860"),p=a("da13"),f=a("5d23"),_=a("e449"),g=a("0fd9"),v=a("8654"),b=a("71d9"),k=a("2a7f"),y=function(){var t=this,e=t._self._c;return e(l["a"],[e(s["a"],{attrs:{large:""}},[e(n["a"],{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[e(m["a"],[t._v("mdi-keyboard-backspace")])],1),t._v(" ລາຍລະອຽດແຜນເສັ້ນທາງ "),e("span",{staticClass:"primary-color ml-2"},[t._v(t._s(t.plan.name))])],1),e(g["a"],[t.switchMap?e(c["a"],{staticClass:"mb-4",attrs:{cols:"12"}},[e("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:t.getCenter().lat>0||t.getCenter().lat<0?t.getCenter():{lat:0,lng:0},"disable-default-u-i":!0,zoom:16}},[e("gmap-info-window",{attrs:{conent:t.infoContent,opened:t.infoOpened,options:t.infoOptions,position:t.infoPosition},on:{closeclick:function(e){t.infoOpened=!1}}},[t._v(" "+t._s(t.infoContent)+" ")]),t._l(t.customers,(function(a,s){return e("GmapMarker",{key:s,attrs:{animation:2,clickable:!0,draggable:!1,icon:t.markerOptions,label:(s+1).toString(),position:t.getMarkers(a)},on:{click:function(e){return t.toggleInfo(a,s)}}})}))],2)],1):t._e(),t.switchMap?t._e():e(c["a"],[e("div",{staticClass:"iframe-container"},[e("iframe",{staticClass:"embed",attrs:{src:t.plan.embed,height:"100%",width:"100%"}})])])],1),e(g["a"],{staticClass:"mb-n6"},[e(c["a"],[e(n["a"],{staticClass:"btn-primary",staticStyle:{width:"100%"},on:{click:function(e){return t.viewMap()}}},[e(m["a"],[t._v("mdi-map")])],1)],1),e(c["a"],[e(n["a"],{staticClass:"btn-primary",staticStyle:{width:"100%"},on:{click:function(e){return t.editCompanyPlan(t.plan.id)}}},[t._v(" Update ")])],1),e(c["a"],[e(n["a"],{staticClass:"teal",staticStyle:{width:"100%"},attrs:{dark:""},on:{click:function(e){t.dialog=!0}}},[t._v(" Update ໃຫ້ແຜນເດີນລົດ ")])],1),e(c["a"],[e("h4",[t._v("ລວມລູກຄ້າ "+t._s(t.pagination.total)+" ຄົນ")]),t.countExpectTrash?e("h4",[t._v(" ຂີ້ເຫຍື້ອຄາດໝາຍ: "+t._s(Intl.NumberFormat().format(t.countExpectTrash.expect_bag)+" "+t.getCustomerUnitFunc(t.countExpectTrash.cost_by))+" ")]):t._e()]),e(c["a"],[e(v["a"],{attrs:{clearable:"",dense:"",label:"ຊື່ລູກຄ້າ",outlined:"","prepend-inner-icon":"mdi-magnify",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),e(d["a"],{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(r["a"],{attrs:{tile:""}},[e(b["a"],{attrs:{flat:"",dark:"",color:"teal"}},[e(n["a"],{attrs:{icon:"",dark:"",height:"50"},on:{click:function(e){t.dialog=!1}}},[e(m["a"],[t._v("mdi-close")])],1),e(k["a"],[t._v("Update ໃຫ້ແຜນເດີນລົດ "),e("strong",[t._v(t._s(t.plan.name))])])],1),e(o["b"],[e(u["a"],{attrs:{"disable-pagination":!0,headers:t.headerCalendars,items:t.planCalendars,search:t.search,"hide-default-footer":""},scopedSlots:t._u([{key:"item.driver",fn:function({item:a}){return[e("div",[t._v(t._s(a.driver.vehicle.car_id)+" ("+t._s(a.driver.name)+")")])]}},{key:"item.date",fn:function({item:a}){return[e(i["a"],{attrs:{dark:"",color:"green"}},[t._v(" "+t._s(a.date)+" ")])]}},{key:"item.created_at",fn:function({item:a}){return[e("div",[t._v(t._s(t.moment(a.created_at).format("hh:mm:ss DD-MM-YY")))])]}},{key:"item.count_success",fn:function({item:a}){return[e("p",{staticStyle:{color:"green"}},[t._v(" "+t._s(a.count_success)+" ")])]}},{key:"item.count_wait_to_confirm",fn:function({item:a}){return[e("p",{staticStyle:{color:"orange"}},[t._v(" "+t._s(a.count_wait_to_confirm)+" ")])]}},{key:"item.count_pause",fn:function({item:a}){return[a.count_pause?e("p",{staticStyle:{color:"orange"}},[t._v(" "+t._s(a.count_pause)+" ")]):e("p",{staticStyle:{color:"green"}},[t._v(" "+t._s(a.count_pause)+" ")])]}},{key:"item.count_unpause",fn:function({item:a}){return[a.count_unpause?e("p",{staticStyle:{color:"orange"}},[t._v(" "+t._s(a.count_unpause)+" ")]):e("p",{staticStyle:{color:"green"}},[t._v(" "+t._s(a.count_unpause)+" ")])]}},{key:"item.actions",fn:function({item:a}){return[e(_["a"],{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(m["a"],t._g(t._b({staticClass:"mr-2",attrs:{color:"primary",dark:"",medium:""}},"v-icon",s,!1),a),[t._v(" mdi-refresh ")])]}}],null,!0)},[e(h["a"],[e(p["a"],{attrs:{link:""},on:{click:function(e){return t.updatePlanCalendar(a)}}},[e(f["d"],[e(m["a"],{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-check ")]),t._v(" ຢືນຢັນ ")],1)],1)],1)],1)]}}])})],1)],1)],1),e("div",[e(r["a"],[e(r["a"],{attrs:{flat:""}},[e(o["b"],[e(u["a"],{attrs:{"disable-pagination":!0,headers:t.headers,items:t.customers,search:t.search,"hide-default-footer":""},scopedSlots:t._u([{key:"item.customer",fn:function({item:a}){return[(a.customer.customer_type="company")?e("div",[t._v(" "+t._s(a.customer.company_name)+" ")]):t._e(),e("div",[t._v(" "+t._s(a.customer.name)+" "+t._s(a.customer.surname)+" ")])]}},{key:"item.customer.can_collect",fn:function({item:a}){return[e(i["a"],{attrs:{color:a.customer.can_collect?"success":"error"}},[t._v(" "+t._s(a.customer.can_collect?"ເກັບໄດ້":"ເກັບບໍ່ໄດ້")+" ")])]}},{key:"item.status",fn:function({item:a}){return[a.customer?e(i["a"],{attrs:{color:t.statusColor(a.customer.status)}},[t._v(" "+t._s(a.customer.status)+" ")]):t._e()]}},{key:"item.customer.package.package_size.bag",fn:function({item:a}){return[a.customer.package&&a.customer.package.package_size?e(i["a"],{attrs:{color:"green",outlined:""}},[t._v(" "+t._s(Intl.NumberFormat().format(a.customer.package.package_size.bag))+" "+t._s(t.getCustomerUnitFunc(a.customer.cost_by))+" ")]):e("div",[t._v(" - ")])]}},{key:"item.actions",fn:function({item:a}){return[e(m["a"],{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.viewPage(a)}}},[t._v(" mdi-eye ")])]}}])}),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{offset:t.offset,pagination:t.pagination},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1)],1)],1)},x=[],C=(a("14d9"),a("6eceb")),w=a("7660"),$={name:"Customer",data(){return{title(){return"Vientiane Waste Co-Dev|View Plan"},tab:null,dialog:!1,customers:[],planCalendars:[],headerCalendars:[{text:"ວັນທີ",value:"date"},{text:"ລົດ",value:"driver"},{text:"ປະເພດລົດ",value:"driver.vehicle.vehicle_type.name"},{text:"ລູກຄ້າ",value:"plan_calendar_details_count",align:"center",sortable:!1},{text:"ທີ່ຕ້ອງເກັບ",value:"count_unpause",align:"center"},{text:"ທີ່ຖືກຢຸດໄວ້",value:"count_pause",align:"center"},{text:"ເກັບຂີເຫື້ຍອສຳເລັດ",value:"count_success",align:"center"},{text:"ລໍຖ້າຢືນຢັນ",value:"count_wait_to_confirm",align:"center"},{text:"ວັນທີສ້າງ",value:"created_at",align:"center"},{text:"",value:"actions",sortable:!1}],loading:!1,switchMap:!0,customerId:"",offset:12,pagination:{},per_page:100,search:"",oldVal:"",districts:[],selectedDistrict:"",villages:[],selectedVillage:[],plan:{},headers:[{text:"ລຳດັບຄວາມສຳຄັນ",value:"priority",sortable:!1,align:"center"},{text:"ໄອດີ",value:"customer.customer_id"},{text:"ລູກຄ້າ",value:"customer.full_name"},{text:"ເບີໂທ",value:"customer.user.phone"},{text:"ຂີ້ເຫຍື້ອຄາດໝາຍ",value:"customer.package.package_size.bag"},{text:"ສະຖານະເກັບ",value:"customer.can_collect"},{text:"ສະຖານະ",value:"status",sortable:!1},{text:"ເຮືອນເລກທີ",value:"customer.house_number",sortable:!1},{text:"",value:"actions",sortable:!1}],latlng:{lat:0,lng:0},markers:[],markerOptions:{url:a("347c"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:28,height:48,f:"px",b:"px"},scaledSize:{width:28,height:48,f:"px",b:"px"}},infoPosition:null,infoContent:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35}},countExpectTrash:{expect_bag:0,cost_by:""}}},watch:{dialog(t){t&&this.fetchPlanCalendar()},search(t){""==t&&(this.fetchData(),this.fetchData(!0))},selectedVillage(){this.fetchData(),this.fetchData(!0)},selectedDistrict(){this.fetchVillage()}},created(){this.fetchData(),this.fetchData(!0),this.fetchDetail(),console.log(this.plan)},methods:{getCustomerUnitFunc(t){return Object(w["e"])(t)},backPrevios(){this.$router.go(-1)},fetchData(t=!1){this.$store.commit("Loading_State",!0),this.$axios.get(`route-plan/${this.$route.params.id}/route-plan-detail`,{params:{page:this.pagination.current_page,per_page:this.per_page,without_month_info:!0,count_expect_trash:t?"1":"0",villages:this.selectedVillage}}).then(e=>{200==e.data.code&&setTimeout(()=>{t?this.countExpectTrash=e.data.data[0]:(this.$store.commit("Loading_State",!1),this.customers=e.data.data.data,this.pagination=e.data.data.pagination,this.getCenter())},100)}).catch(t=>{if(this.$store.commit("Loading_State",!1),t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}})},fetchPlanCalendar(){this.$store.commit("Loading_State",!0),this.$axios.get("plan-calendar",{params:{route_plan_id:this.$route.params.id,date:(new Date).toISOString().substr(0,10),operation:">="}}).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.planCalendars=t.data.data},100)}).catch(t=>{if(this.$store.commit("Loading_State",!1),t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}})},fetchDetail(){this.$axios.get("route-plan/"+this.$route.params.id).then(t=>{200==t.data.code&&setTimeout(()=>{this.plan=t.data.data,console.log(this.plan)},100)}).catch(()=>{})},fetchAddress(){this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then(t=>{200==t.data.code&&setTimeout(()=>{this.address=t.data.data,this.address.map(t=>{this.districts=t.districts})},100)}).catch(()=>{})},fetchVillage(){this.$axios.get(`info/district/${this.selectedDistrict}/village`).then(t=>{200==t.data.code&&setTimeout(()=>{this.villages=t.data.data},100)}).catch(()=>{})},updatePlanCalendar(t){this.$store.commit("Loading_State",!0),this.$axios.post("update-from-route/"+t.id).then(t=>{this.$store.commit("Loading_State",!1),setTimeout(()=>{this.$store.commit("Loading_State",!1),this.$store.commit("modalDelete_State",!1),this.fetchData(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})},300),200==t.data.code&&this.fetchPlanCalendar()}).catch(t=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"})})},createPage(){this.$router.push({name:"CreateExportPlan",params:{items:this.customers,villages:this.selectedVillage}}),this.$emit("create-plan",this.customers,this.selectedVillage)},editCompanyPlan(t){console.log(t),this.$router.push({name:"EditHomeRoutePlanNoMap",params:{id:t}})},viewPage(t){"company"==t.customer.customer_type?this.$router.push({name:"ViewCompanyDetail",params:{id:t.customer_id}}):"home"==t.customer.customer_type&&this.$router.push({name:"ViewClient",params:{id:t.customer_id}})},viewMap(){this.switchMap=!this.switchMap},Search(){Object(C["a"])(this)},getCenter(){if(this.customers.length){const t={lat:parseFloat(this.customers[0].customer.lat),lng:parseFloat(this.customers[0].customer.lng)};return t}return this.latlng},getMarkers(t){if(null!==t.customer)return{lat:parseFloat(t.customer.lat),lng:parseFloat(t.customer.lng)}},toggleInfo(t,e){this.infoPosition=this.getMarkers(t),this.infoContent=`${t.priority} ${t.customer.name} (${t.customer.house_number}) `,this.infoCurrentKey==e?this.infoOpened=!this.infoOpened:(this.infoOpened=!0,this.infoCurrentKey=e)},statusColor(t){return"active"==t?"success":"inactive"==t?"error":"info"}}},S=$,D=(a("4299"),a("2877")),O=Object(D["a"])(S,y,x,!1,null,null,null);e["default"]=O.exports},7660:function(t,e,a){"use strict";a.d(e,"g",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"h",(function(){return r})),a.d(e,"e",(function(){return o})),a.d(e,"f",(function(){return i})),a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return l})),a.d(e,"d",(function(){return u}));a("14d9");const s=function(t){switch(t){case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ເປັນຖ້ຽວ";case"chartered":return"ມອບເໝົາ";case"bag":return"ບໍລິມາດ";case"infect":return"ຂີ້ເຫຍື້ອຕິດເຊື້ອ";case"32km":return"ຫຼັກ32";default:return t}},n=[{en:"container",la:"ຄອນເທນເນີ"},{en:"fix_cost",la:"ເປັນຖ້ຽວ"},{en:"chartered",la:"ມອບເໝົາ"},{en:"bag",la:"ບໍລິມາດ"},{en:"infect",la:"ຂີ້ເຫຍື້ອຕິດເຊື້ອ"},{en:"32km",la:"ຫຼັກ32"}],r=function(t){switch(t){case"company":return"ຫົວໜ່ວຍທຸລະກິດ";case"home":return"ຄົວເຮືອນ";default:return t}},o=function(t){switch(t){case"bag":case"chartered":case"32km":case"infect":return"ຖົງ";case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ຖ້ຽວ";default:return t}},i=[{en:"requested",la:"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ",color:"#34495e"},{en:"rejected",la:"ປະຕິເສດລູກຄ້າແລ້ວ",color:"#eff3f5"},{en:"approved",la:"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ",color:"#54a0ff"},{en:"collected",la:"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ",color:"#c1c40f"},{en:"collect_confirm",la:"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ",color:"#30cb83"},{en:"collect_reject",la:"ລູກຄ້າປະຕິເສດການເກັບ",color:"#e74c3c"}],c=[{text:"ວັນທີຈ່າຍບິນ",value:"paided_at"},{text:"ວັນທີສ້າງບິນ",value:"created_at"},{text:"ວັນທີອະນຸມັດບິນ",value:"approved_at"},{text:"ວັນທີກວດສອບບິນສຳເລັດ",value:"confirmed_payment_at"}],l=(t=[])=>{const e=[];for(const a of t)e.push({id:a.id,name:`${a.name} (${Intl.NumberFormat().format(a.price)} ກີບ)`});return e},u=[{value:"",text:"ທັງໝົດ"},{value:"can",text:"ເກັບໄດ້"},{value:"not",text:"ເກັບບໍ່ໄດ້"}]},9422:function(t,e,a){}}]);
//# sourceMappingURL=chunk-11f97771.578e632a.js.map