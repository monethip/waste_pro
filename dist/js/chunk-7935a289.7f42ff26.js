(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7935a289"],{"347c":function(e,t,a){e.exports=a.p+"img/pin1.d74f27bd.svg"},6031:function(e,t,a){"use strict";a.r(t);var s=a("6a20"),r=a("c1a61"),o=a("f046"),n=a("b325"),i=a("e02b"),l=a("ba9d"),c=a("8440"),d=a("9b01"),u=a("3bc0"),h=a("489f"),m=a("f7fb"),f=a("cc3d"),p=function(){var e=this,t=e._self._c;return t("div",{on:{"":e.onLoad}},[t(l["a"],[t(s["a"],{staticClass:"mt-n4",attrs:{large:""}},[t(r["a"],{staticClass:"text-primary",attrs:{text:""},on:{click:function(t){return e.backPrevios()}}},[t(u["a"],[e._v("mdi-keyboard-backspace")])],1),e._v("ເພີ່ມແຜນເສັ້ນທາງ "),t(m["a"]),t("span",{staticClass:"mr-4"},[t(u["a"],{attrs:{color:"red"}},[e._v("mdi-map-marker")]),e._v("ຍັງບໍທັນຢູ່ໃນແຜນ ")],1),t("span",[t(u["a"],{staticStyle:{color:"#49a3da"}},[e._v("mdi-map-marker")]),e._v("ຢູ່ໃນແຜນແລ້ວ ")],1)],1),t(h["a"],[t(i["a"],{staticClass:"mb-4",attrs:{cols:"12"}},[e.customers?t("GmapMap",{staticStyle:{width:"100%",height:"400px"},attrs:{center:e.getCenter().lat>0||e.getCenter().lat<0?e.getCenter():{lat:0,lng:0},zoom:14,"disable-default-u-i":!0}},[t("gmap-info-window",{attrs:{options:e.infoOptions,position:e.infoPosition,opened:e.infoOpened,conent:e.infoContent},on:{closeclick:function(t){e.infoOpened=!1}}},[e._v(" "+e._s(e.infoContent)+" ")]),e._l(e.customers,(function(a,s){return t("GmapMarker",{key:s,attrs:{position:e.getMarkers(a),draggable:!1,icon:e.getSiteIcon(a),animation:2,clickable:!0,label:(s+1).toString()},on:{click:function(t){return e.toggleInfo(a,s)}}})}))],2):e._e()],1)],1),t(h["a"],{staticClass:"mb-n6"},[t(i["a"],[t(r["a"],{staticClass:"btn-primary",attrs:{loading:e.loading,disabled:e.loading},on:{click:function(t){return e.createRoutePlan()}}},[e._v(" ບັນທຶກ "),t(u["a"],[e._v("mdi-content-save")])],1)],1),t(i["a"],[e.customers?t("h4",[e._v(" ຈັດລຽນລຳດັບການເກັບຂີ້ເຫື້ຍອລູກຄ້າ "+e._s(e.customers.length)+" ຄົນ ")]):e._e()]),t(i["a"],[t(f["a"],{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຊື່ລູກຄ້າ",type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Search()}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),t("div",[t(o["a"],[t(n["b"],[t("main",{staticClass:"page page--table"},[t(c["a"],{staticClass:"page__table",attrs:{headers:e.headers,items:e.customers,search:e.search,"disable-pagination":!0,"hide-default-footer":"","item-key":"id"},scopedSlots:e._u([{key:"body",fn:function(a){return[t("draggable",{attrs:{list:a.items,tag:"tbody"},on:{change:e.afterAdd}},e._l(a.items,(function(a,s){return t("tr",{key:s},[t("td",[t(u["a"],{staticClass:"page__grab-icon",attrs:{small:""}},[e._v(" mdi-arrow-all ")])],1),t("td",[e._v(e._s(s+1))]),t("td",[e._v(e._s(a.id))]),t("td",[e._v(e._s(a.name))]),t("td",[e._v(e._s(a.surname))]),t("td",[e._v(e._s(a.user.phone))]),t("td",[e._v(" "+e._s(a.expect_trash?Intl.NumberFormat().format(a.expect_trash)+e.getCustomerUnitFunc(a.cost_by):"-")+" ")]),t("td",[e._v(e._s(a.created_at))]),t("td",[e._v(e._s(a.address_detail))]),t("td",[e._v(e._s(a.village.name))]),t("td",[e._v(e._s(a.district.name))]),t("td",[t(u["a"],{attrs:{small:""},on:{click:function(t){return e.deleteItem(s)}}},[e._v(" mdi-delete ")])],1)])})),0)]}}]),model:{value:e.selectedRows,callback:function(t){e.selectedRows=t},expression:"selectedRows"}})],1)])],1)],1),t("ModalAdd",[[t(o["a"],[t(n["c"],[t("span",{staticClass:"headline"},[e._v("Route Plan Name")])]),t(n["b"],[t(l["a"],[t(d["a"],{ref:"form",attrs:{"lazy-validation":""}},[t(h["a"],[t(i["a"],{attrs:{cols:"12"}},[t(f["a"],{attrs:{label:"Name *",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.name)+" ")])],1)],1)],1)],1),t(n["a"],[t(m["a"]),t(r["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.closeAddModal()}}},[e._v(" Close ")]),t(r["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.saveRoutePlan()}}},[e._v(" Save ")])],1)],1)],1)]],2),t("ModalDelete",[[t(n["a"],[t(m["a"]),t(r["a"],{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v(" Cancel ")]),t(r["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.deleteItemConfirm}},[e._v(" OK ")]),t(m["a"])],1)]],2)],1)],1)},g=[],_=(a("a047"),a("6ece")),v=a("ce7d"),b=a.n(v),x=a("7660"),w={name:"Customer",components:{draggable:b.a},props:["selectedData","villages","items"],data(){return{customers:[],customersId:[],countcutomer:0,loading:!1,customerId:"",search:"",oldVal:"",selectedVillage:[],selectedCustomer:[],exclude_customers:[],selectedRows:[],customer:{},customerIndex:"",name:"",server_errors:{},headers:[{text:"",value:""},{text:"#",value:""},{text:"Id",value:"id"},{text:"ຊື່",value:"name"},{text:"ນາມສະກຸນ",value:"surname"},{text:"Phone",value:"user.phone",sortable:!1},{text:"ຂີ້ເຫຍື້ອຄາດໝາຍ",value:"expect_trash"},{text:"ວັນທີ່ເພີ່ມເຂົ້າ",value:"created_at"},{text:"ລາຍລະອຽດທີ່ຢູ່",value:"address_detail"},{text:"ບ້ານ",value:"village.name",sortable:!0},{text:"ເມືອງ",value:"district.name",sortable:!0},{text:"",value:"actions",sortable:!1}],latlng:{lat:0,lng:0},markers:[],infoPosition:null,infoContent:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35}}}},watch:{search(e){""==e&&this.fetchData()}},created(){this.fetchData()},methods:{afterAdd(e){console.log(e);const{oldIndex:t}=e.moved,{newIndex:a}=e.moved,s=this.customers[t];this.customers.splice(t,1),this.customers.splice(a,0,s)},backPrevios(){this.$router.go(-1)},fetchData(){this.customers=this.items,this.selectedVillage=this.villages},closeDelete(){this.$store.commit("modalDelete_State",!1)},deleteItem(e){this.customerIndex=e,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm(){this.selectedCustomer=[],this.$store.commit("Loading_State",!0),this.customers.splice(this.customerIndex,1),this.selectedCustomer.filter(e=>{this.exclude_customers.push(e.id)}),this.$store.commit("Toast_State",{value:!0,color:"success",msg:"ລຶບຂໍ້ມູນສຳເລັດແລ້ວ"}),this.selectedRows=[],this.fetchData(),this.$store.commit("Loading_State",!1),this.$store.commit("modalDelete_State",!1)},createRoutePlan(){this.$store.commit("modalAdd_State",!0)},getCustomerUnitFunc(e){return Object(x["e"])(e)},closeAddModal(){this.$store.commit("modalAdd_State",!1)},saveRoutePlan(){const e=[];this.customers.map(t=>{e.push(t.id)}),this.customers.length?(this.$store.commit("Loading_State",!0),this.$axios.post("create-route-plan",{name:this.name,customers:e},{responseType:"blob"}).then(e=>{200==e.status&&(setTimeout(()=>{this.$store.commit("Loading_State",!1)},300),this.$router.push({name:"Plan"}))}).catch(e=>{this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),this.$store.commit("Loading_State",!1)})):this.$store.commit("Toast_State",{value:!0,color:"error",msg:"ກາລຸນາເລືອກລູກຄ້າກ່ອນ"})},viewPage(e){this.$router.push({name:"ViewClient",params:{id:e}})},Search(){Object(_["a"])(this)},getCenter(){if(this.customers.length){if(null==parseFloat(this.customers[0].lat))return this.latlng;const e={lat:parseFloat(this.customers[0].lat),lng:parseFloat(this.customers[0].lng)};return e}return this.latlng},getSiteIcon(e){const t={url:a("347c"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}},s={url:a("f742"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}};try{switch(e.route_plan_details_count){case 0:return t;case 1:return s}}catch(r){return t}},getMarkers(e){if(null!==e.customer)return{lat:parseFloat(e.lat),lng:parseFloat(e.lng)}},toggleInfo(e,t){this.infoPosition=this.getMarkers(e),this.infoContent=`${e.name} (${e.house_number}) `,this.infoCurrentKey==t?this.infoOpened=!this.infoOpened:(this.infoOpened=!0,this.infoCurrentKey=t)},rowClicked(e){this.toggleSelection(e.id),console.log(e)},toggleSelection(e){this.selectedRows.includes(e)?this.selectedRows=this.selectedRows.filter(t=>t!==e):this.selectedRows.push(e)},onLoad(){const e=window.location.href,t=sessionStorage.getItem("last_url");null==t||0===t.length||e!==t?(sessionStorage.setItem("last_url",e),alert("New page loaded")):alert("Refreshed Page")}}},C=w,k=(a("e458"),a("4a4e")),y=Object(k["a"])(C,p,g,!1,null,null,null);t["default"]=y.exports},7660:function(e,t,a){"use strict";a.d(t,"g",(function(){return s})),a.d(t,"c",(function(){return r})),a.d(t,"h",(function(){return o})),a.d(t,"e",(function(){return n})),a.d(t,"f",(function(){return i})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return c})),a.d(t,"d",(function(){return d}));a("a047");const s=function(e){switch(e){case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ເປັນຖ້ຽວ";case"chartered":return"ມອບເໝົາ";case"bag":return"ບໍລິມາດ";case"infect":return"ຂີ້ເຫຍື້ອຕິດເຊື້ອ";case"32km":return"ຫຼັກ32";default:return e}},r=[{en:"container",la:"ຄອນເທນເນີ"},{en:"fix_cost",la:"ເປັນຖ້ຽວ"},{en:"chartered",la:"ມອບເໝົາ"},{en:"bag",la:"ບໍລິມາດ"},{en:"infect",la:"ຂີ້ເຫຍື້ອຕິດເຊື້ອ"},{en:"32km",la:"ຫຼັກ32"}],o=function(e){switch(e){case"company":return"ຫົວໜ່ວຍທຸລະກິດ";case"home":return"ຄົວເຮືອນ";default:return e}},n=function(e){switch(e){case"bag":case"chartered":case"32km":case"infect":return"ຖົງ";case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ຖ້ຽວ";default:return e}},i=[{en:"requested",la:"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ",color:"#34495e"},{en:"rejected",la:"ປະຕິເສດລູກຄ້າແລ້ວ",color:"#eff3f5"},{en:"approved",la:"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ",color:"#54a0ff"},{en:"collected",la:"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ",color:"#c1c40f"},{en:"collect_confirm",la:"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ",color:"#30cb83"},{en:"collect_reject",la:"ລູກຄ້າປະຕິເສດການເກັບ",color:"#e74c3c"}],l=[{text:"ວັນທີຈ່າຍບິນ",value:"paided_at"},{text:"ວັນທີສ້າງບິນ",value:"created_at"},{text:"ວັນທີອະນຸມັດບິນ",value:"approved_at"},{text:"ວັນທີກວດສອບບິນສຳເລັດ",value:"confirmed_payment_at"}],c=(e=[])=>{const t=[];for(const a of e)t.push({id:a.id,name:`${a.name} (${Intl.NumberFormat().format(a.price)} ກີບ)`});return t},d=[{value:"",text:"ທັງໝົດ"},{value:"can",text:"ເກັບໄດ້"},{value:"not",text:"ເກັບບໍ່ໄດ້"}]},"7eb1":function(e,t,a){},"9b01":function(e,t,a){"use strict";a("a047");var s=a("87fc"),r=a("98fa"),o=a("1049");t["a"]=Object(s["a"])(r["a"],Object(o["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",t=>{this.$set(this.errorBag,e._uid,t)},{immediate:!0}),a={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=e.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(e._uid)||(a.valid=t(e)))}):a.valid=t(e),a},validate(){return 0===this.inputs.filter(e=>!e.validate(!0)).length},reset(){this.inputs.forEach(e=>e.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(e=>e.resetValidation()),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find(t=>t._uid===e._uid);if(!t)return;const a=this.watchers.find(e=>e._uid===t._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(e=>e._uid!==t._uid),this.inputs=this.inputs.filter(e=>e._uid!==t._uid),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},e458:function(e,t,a){"use strict";a("7eb1")},f742:function(e,t,a){e.exports=a.p+"img/pin2.b23d8eec.svg"}}]);
//# sourceMappingURL=chunk-7935a289.7f42ff26.js.map