(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-724a2818"],{"0c49":function(e,t,s){"use strict";s.r(t);var a=s("a892"),i=s("8447"),n=s("07b0"),l=s("db5a"),r=s("0f35"),c=s("28e8"),o=s("1da9"),h=s("1789"),u=s("0cb6"),d=s("1d7d"),m=s("d62f"),p=s("26bf"),g=s("cfe2"),f=s("9b44"),_=function(){var e=this,t=e._self._c;return t(h["a"],[t(i["a"],{staticClass:"mt-n4",attrs:{large:""}},[t(n["a"],{staticClass:"text-primary",attrs:{text:""},on:{click:function(t){return e.backPrevios()}}},[t(d["a"],[e._v("mdi-keyboard-backspace")])],1),e._v(" ເລືອກລູກຄ້າເຂົ້າແຜນເສັ້ນທາງ "),t(g["a"]),t("span",{staticClass:"mr-4"},[t(d["a"],{attrs:{color:"red"}},[e._v("mdi-map-marker")]),e._v("ຍັງບໍທັນຢູ່ໃນແຜນ ")],1),t("span",[t(d["a"],{staticStyle:{color:"#49a3da"}},[e._v("mdi-map-marker")]),e._v("ຢູ່ໃນແຜນແລ້ວ ")],1)],1),t(m["a"],{staticClass:"my-n4"},[t(o["a"],{staticClass:"mb-4",attrs:{cols:"12"}},[t("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:e.getCenter().lat>0||e.getCenter().lat<0?e.getCenter():{lat:0,lng:0},"disable-default-u-i":!0,zoom:14}},[t("gmap-info-window",{attrs:{conent:e.infoContent,opened:e.infoOpened,options:e.infoOptions,position:e.infoPosition},on:{closeclick:function(t){e.infoOpened=!1}}},[e._v(" "+e._s(e.infoContent)+" ")]),e._l(e.customers,(function(s,a){return t("GmapMarker",{key:a,attrs:{animation:2,clickable:!0,draggable:!1,icon:e.getSiteIcon(s),label:s.check_number?s.check_number.toString():null,position:e.getMarkers(s)},on:{click:function(t){return e.toggleInfo(s,a)}}})}))],2)],1)],1),t(m["a"],{staticClass:"mb-n6"},[t(o["a"],[t(n["a"],{staticClass:"btn-primary",on:{click:function(t){return e.createPage()}}},[e._v(" Next "),t(d["a"],[e._v("mdi-arrow-right-bold-circle-outline")])],1)],1),t(o["a"],[e.cursor_paginate?t("h4",[e._v(" ລູກຄ້າທັງໝົດ "+e._s(e.customers.length)+" ຄົນ ")]):t("h4",[e._v(" ລູກຄ້າທັງໝົດ "+e._s(e.pagination.total)+" ຄົນ ")]),e.countExpectTrash?t("h4",[e._v(" ຂີ້ເຫຍື້ອຄາດໝາຍ: "+e._s(Intl.NumberFormat().format(e.countExpectTrash.expect_bag))+" ຖົງ ")]):e._e()]),t(o["a"],[t(a["a"],{attrs:{items:e.districts,clearable:"",dense:"","item-text":"name","item-value":"id",label:"ເມືອງ",outlined:""},model:{value:e.selectedDistrict,callback:function(t){e.selectedDistrict=t},expression:"selectedDistrict"}})],1),t(o["a"],[t(a["a"],{attrs:{items:e.villages,chips:"",clearable:"",dense:"","item-text":"name","item-value":"id",label:"ເລືອກບ້ານ",multiple:"",outlined:""},scopedSlots:e._u([{key:"selection",fn:function(s){return[t(c["a"],e._b({attrs:{"input-value":s.selected,close:""},on:{click:s.select,"click:close":function(t){return e.remove(s.item)}}},"v-chip",s.attrs,!1),[e._v(" "+e._s(s.item.name)+" ")])]}}]),model:{value:e.selectedVillage,callback:function(t){e.selectedVillage=t},expression:"selectedVillage"}})],1)],1),t(m["a"],[t("VillageDetail",{attrs:{"selected-village":e.selectedVillage},model:{value:e.selectedDetails,callback:function(t){e.selectedDetails=t},expression:"selectedDetails"}})],1),t(m["a"],[t(o["a"],{attrs:{cols:""}},[t(p["a"],{attrs:{items:e.favorite_dates,dense:"","item-text":"name","item-value":"name",label:"ມື້ບໍລິການ",multiple:"",outlined:""},model:{value:e.selectedFavoriteDate,callback:function(t){e.selectedFavoriteDate=t},expression:"selectedFavoriteDate"}})],1),t(o["a"],[t(a["a"],{attrs:{items:e.customerStatus,clearable:"",dense:"","item-text":"name","item-value":"value",label:"ສະຖານະລູກຄ້າ",multiple:"",outlined:""},model:{value:e.selectedCustomerStatus,callback:function(t){e.selectedCustomerStatus=t},expression:"selectedCustomerStatus"}})],1),t(o["a"],[t(a["a"],{attrs:{items:e.customerCanCollects,clearable:"",dense:"","item-text":"text","item-value":"value",label:"ສະຖານະໃຫ້ເກັບ",outlined:""},model:{value:e.selectedCustomerCanCollects,callback:function(t){e.selectedCustomerCanCollects=t},expression:"selectedCustomerCanCollects"}})],1),t(o["a"],[t(f["a"],{attrs:{clearable:"",dense:"",label:"ຊື່ລູກຄ້າ",outlined:"","prepend-inner-icon":"mdi-magnify",type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Search()}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),t(o["a"],[t(n["a"],{staticStyle:{width:"100%"},attrs:{color:"green",dark:""},on:{click:e.fetchSearch}},[e._v(" ຄົ້ນຫາ ")])],1)],1),t("div",[t(l["a"],[t(l["a"],{attrs:{flat:""}},[t(r["b"],[e.selectedRows.length?t(m["a"],[t(o["a"],[t("p",[e._v("ລູກຄ້າທີ່ເລືອກ "+e._s(e.selectedRows.length))])]),t(o["a"],[t("p",[e._v(" ຂີ້ເຫຍື້ອຄາດໝາຍ: "+e._s(Intl.NumberFormat().format(e.selectedTrash))+" ຖົງ ")])])],1):e._e(),e.next_page_url?t(n["a"],{staticStyle:{width:"100%"},attrs:{dark:""},on:{click:function(t){return e.fetchData()}}},[e._v(" ກຳລັງໂຫຼດຂໍ້ມູນໃຫ້ທ່ານ ກະລຸນາລໍຖ້າຈົນກ່ວາຂໍ້ຄວາມນິ້ຈະຫາຍໄປ... ")]):e._e(),t(u["a"],{attrs:{"disable-pagination":!0,headers:e.headers,items:e.customers,search:e.search,"hide-default-footer":""},scopedSlots:e._u([{key:"item.address_detail",fn:function({item:s}){return e._l(s.village_details,(function(s,a){return t("div",{key:a},[t("span",[e._v(e._s(s.name))])])}))}},{key:"item.can_collect",fn:function({item:s}){return[t(c["a"],{attrs:{dark:"",color:s.can_collect?"green":"orange"}},[e._v(" "+e._s(s.can_collect?"ເກັບໄດ້":"ເກັບບໍ່ໄດ້")+" ")])]}},{key:"item.actions",fn:function({item:s}){return[t(d["a"],{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.viewPage(s.id)}}},[e._v(" mdi-eye ")])]}},{key:"item.custom_pick",fn:function({item:s}){return[t("div",{staticClass:"main-check",on:{click:function(t){return e.checkHandler(s)}}},[s.check_number?t("div",{staticClass:"check"},[e._v(" "+e._s(s.check_number)+" ")]):t("div",{staticClass:"uncheck"})])]}},{key:"header.custom_pick",fn:function({}){return[t("div",{on:{click:function(t){return e.checkAllToggle()}}},[e.checkAll?t("div",{staticClass:"check"}):t("div",{staticClass:"uncheck"})])]}},{key:"item.package.package_size.bag",fn:function({item:s}){return[s.package&&s.package.package_size?t(c["a"],{attrs:{color:"green",outlined:""}},[e._v(" "+e._s(Intl.NumberFormat().format(s.package.package_size.bag))+" "+e._s(e.getCustomerUnitFunc(s.cost_by))+" ")]):t("div",[e._v(" - ")])]}},{key:"item.village_details",fn:function({item:s}){return e._l(s.village_details,(function(s){return t(c["a"],{key:s.id},[e._v(" "+e._s(`${s.village_variation.name}: ${s.name}`)+" ")])}))}},{key:"item.favorite_dates",fn:function({item:s}){return e._l(s.favorite_dates,(function(s){return t(c["a"],{key:s.name,attrs:{color:"green",dark:""}},[e._v(" "+e._s(s.name)+" ")])}))}}])}),t("br"),[e.pagination&&e.pagination.total_pages>1?t("Pagination",{attrs:{offset:e.offset,pagination:e.pagination},on:{paginate:function(t){return e.fetchData()}}}):e._e(),e.next_page_url?t(n["a"],{staticStyle:{width:"100%"},attrs:{dark:""},on:{click:function(t){return e.fetchData()}}},[e._v(" ກຳລັງໂຫຼດຂໍ້ມູນໃຫ້ທ່ານ ກະລຸນາລໍຖ້າຈົນກ່ວາຂໍ້ຄວາມນິ້ຈະຫາຍໄປ... ")]):e._e()]],2)],1)],1)],1)],1)},v=[],b=(s("558b"),s("6ece")),x=s("54da"),k=s("7660"),y=s("990b"),S={name:"Customer",components:{VillageDetail:y["a"]},data(){return{selectedDetails:[],tab:null,customers:[],selectedAllCustomer:[],customerCanCollects:k["d"],selectedCustomerCanCollects:"",countExpectTrash:{expect_bag:0,cost_by:""},loading:!1,customerId:"",offset:12,pagination:{total:null},per_page:100,cursor_paginate:100,next_page_url:"",search:"",oldVal:"",districts:[],selectedDistrict:"",villages:[],selectedVillage:[],selectedCustomerStatus:[],customerStatus:[{id:1,value:"calendar",name:"ຍັງບໍ່ມີແຜນເດີນລົດ"},{id:2,value:"route_plan",name:"ຍັງບໍ່ມີເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ"}],favorite_dates:[],selectedFavoriteDate:[],selectedRows:[],headers:[{text:"",value:"custom_pick",sortable:!1},{text:"ID",value:"customer_id"},{text:"ຊື່",value:"name"},{text:"ນາມສະກຸນ",value:"surname"},{text:"Phone",value:"user.phone",sortable:!1},{text:"ສະຖານະໃຫ້ເກັບ",value:"can_collect"},{text:"ຂີ້ເຫຍື້ອຄາດໝາຍ",value:"package.package_size.bag"},{text:"ວັນທີ່ສະດວກເກັບ",value:"favorite_dates"},{text:"ວັນທີ່ເພີ່ມເຂົ້າ",value:"created_at"},{text:"ລາຍລະອຽດທີ່ຢູ່",value:"village_details",sortable:!0},{text:"ບ້ານ",value:"village.name",sortable:!0},{text:"ເມືອງ ",value:"district.name",sortable:!0},{text:"",value:"actions",sortable:!1}],latlng:{lat:0,lng:0},markers:[],places:[],currentPlace:null,infoPosition:null,infoContent:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35}},last_check_number:0,checkAll:!1}},computed:{bagTrashed(){let e=0;return this.customers.length&&(e+=this.customers.package?this.customers.package.package_size.bag:0),e},selectedTrash(){let e=0;for(const t of this.selectedRows)e+=t.package&&t.package.package_size?t.package.package_size.bag:0;return e},selectedAllVillage(){return this.selectedVillage.length===this.villages.length},selectedSomeVillage(){return this.selectedVillage.length&&!this.selectedAllVillage},icon(){return this.selectedAllVillage?"mdi-close-box":this.selectedSomeVillage?"mdi-minus-box":"mdi-checkbox-blank-outline"}},watch:{checkAll(e){if(1==e){this.$store.commit("Loading_State",!0);for(const e of this.customers)this.checkHandler(e);this.$store.commit("Loading_State",!1)}else{this.$store.commit("Loading_State",!0),this.selectedRows=[];for(let e=0;e<this.customers.length;e++)this.customers[e].check_number=null,this.customers.splice(e,1,this.customers[e]);this.last_check_number=0,this.$store.commit("Loading_State",!1)}},selectedFavoriteDate(){this.pagination.current_page="",this.fetchData(),this.fetchData(!0)},selectedCustomerCanCollects(){this.pagination.current_page="",this.fetchData(),this.fetchData(!0)},search(e){this.pagination.current_page="",""==e&&(this.fetchData(),this.fetchData(!0))},selectedVillage(){this.pagination.current_page=""},selectedDistrict(){this.pagination.current_page="",this.fetchVillage()},selectedCustomerStatus(){this.pagination.current_page="",this.fetchData(),this.fetchData(!0)}},async created(){this.fetchFavorite(),this.fetchData(),this.fetchData(!0),this.fetchAddress()},methods:{checkAllToggle(){this.checkAll=!this.checkAll},checkHandler(e){const t=this.customers.findIndex(t=>t.id==e.id);-1!=t&&(this.customers[t].check_number?this.customers[t].check_number==this.last_check_number&&(this.last_check_number--,this.customers[t].check_number=null,this.selectedRows.pop()):(this.last_check_number++,this.customers[t].check_number=this.last_check_number,this.selectedRows.push(e)),this.customers.splice(t,1,this.customers[t]))},getCustomerUnitFunc(e){return Object(k["e"])(e)},backPrevios(){this.$router.go(-1)},getLaoCompanyCostByFunc(e){return Object(k["g"])(e)},async fetchData(e=!1){try{this.selectedDistrict?(this.per_page=0,this.cursor_paginate=1500):(this.per_page=100,this.cursor_paginate=0,this.next_page_url="");const t=[{page:this.pagination.current_page},{cursor_paginate:e?"":this.cursor_paginate},{per_page:this.per_page},{without:this.selectedCustomerStatus},{without_month_info:!0},{without_billing_summary:!0},{villages:this.selectedVillage},{district_id:this.selectedDistrict},{filter:this.search},{cost_by:this.selectedCost},{favorite_dates:this.selectedFavoriteDate},{village_details:this.selectedDetails},{customer_can_collect:this.selectedCustomerCanCollects}];e&&t.push({count_expact_trash:"1"}),this.$store.commit("Loading_State",!0);const s=await this.$axios.get(this.next_page_url?this.next_page_url:"customer",{params:Object(x["a"])(t)});200==s.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),!this.next_page_url&&e?this.countExpectTrash=s.data.data[0]:(this.next_page_url?this.customers=this.customers.concat(s.data.data.data):this.customers=s.data.data.data,this.selectedAllCustomer=this.customers,this.cursor_paginate||(this.pagination=s.data.data.pagination),this.next_page_url=s.data.data.next_page_url,this.next_page_url&&setTimeout(async()=>{await this.fetchData()},1e3))},100)}catch(t){if(this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"}),t.response&&422==t.response.status){const e=t.response.data.error;for(const[t,s]of Object.entries(e))this.server_errors[t]=s[0]}if(t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,s]of Object.entries(e))this.server_errors[t]=s[0]}}},fetchAddress(){this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then(e=>{200==e.data.code&&setTimeout(()=>{this.address=e.data.data,this.address.map(e=>{this.districts=e.districts})},300)}).catch(()=>{})},fetchVillage(){this.selectedDistrict&&this.$axios.get(`info/district/${this.selectedDistrict}/village`).then(e=>{200==e.data.code&&setTimeout(()=>{this.villages=e.data.data},300)}).catch(()=>{})},fetchSearch(){this.fetchData(),this.fetchData(!0)},async fetchContinue(){await this.fetchData()},createPage(){this.selectedRows.length?this.$router.push({name:"CreateRoutePlan",params:{items:this.selectedRows}}):this.$store.commit("Toast_State",{value:!0,color:"error",msg:"ກາລຸນາເລືອກບ້ານ ແລະ ລູກຄ້າກ່ອນ"})},viewPage(e){this.$router.push({name:"ViewClient",params:{id:e}})},remove(e){const t=this.selectedVillage.indexOf(e.id);t>=0&&this.selectedVillage.splice(t,1)},Search(){Object(b["a"])(this)},getCenter(){if(this.customers.length){if(null==parseFloat(this.customers[0].lat))return this.latlng;const e={lat:parseFloat(this.customers[0].lat),lng:parseFloat(this.customers[0].lng)};return e}return this.latlng},getMarkers(e){if(null!==e.customer)return{lat:parseFloat(e.lat),lng:parseFloat(e.lng)}},getSiteIcon(e){const t={url:s("347c"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}},a={url:s("f742"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}};try{switch(e.route_plan_details_count){case 0:return t;case 1:return a}}catch(i){return t}},toggleInfo(e,t){this.infoPosition=this.getMarkers(e),this.infoContent=`${e.name} (${e.house_number}) `,this.infoCurrentKey==t?this.infoOpened=!this.infoOpened:(this.infoOpened=!0,this.infoCurrentKey=t),this.checkHandler(e)},toggle(){this.$nextTick(()=>{this.selectedAllVillage?this.selectedVillage=[]:setTimeout(()=>{this.selectedVillage=this.villages.slice()},300)})},fetchFavorite(){this.$axios.get("favorite-date").then(e=>{200==e.data.code&&setTimeout(()=>{this.favorite_dates=e.data.data},100)}).catch(()=>{})}}},I=S,C=(s("d080"),s("4a4e")),D=Object(C["a"])(I,_,v,!1,null,null,null);t["default"]=D.exports},"0fdf":function(e,t,s){},"326a":function(e,t,s){},"347c":function(e,t,s){e.exports=s.p+"img/pin1.d74f27bd.svg"},"54da":function(e,t,s){"use strict";t["a"]=function(e){const t={};if(!e[0]){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(void 0!==e[t]&&null!==e[t]&&""!==e[t]||delete e[t]);return e}for(const s of e)1==Object.keys(s).length&&s[Object.keys(s)]&&(t[Object.keys(s)]=s[Object.keys(s)]);return t}},"6ece":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));const a=e=>{""!==e.search?""!==e.oldVal?e.oldVal!==e.search&&(e.oldVal=e.search,e.pagination.current_page=1,e.fetchData()):(""!==e.search&&(e.pagination.current_page=1,e.fetchData()),e.oldVal=e.search):e.oldVal=""}},7660:function(e,t,s){"use strict";s.d(t,"g",(function(){return a})),s.d(t,"c",(function(){return i})),s.d(t,"h",(function(){return n})),s.d(t,"e",(function(){return l})),s.d(t,"f",(function(){return r})),s.d(t,"a",(function(){return c})),s.d(t,"b",(function(){return o})),s.d(t,"d",(function(){return h}));s("558b");const a=function(e){switch(e){case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ເປັນຖ້ຽວ";case"chartered":return"ມອບເໝົາ";case"bag":return"ບໍລິມາດ";case"infect":return"ຂີ້ເຫຍື້ອຕິດເຊື້ອ";case"32km":return"ຫຼັກ32";default:return e}},i=[{en:"container",la:"ຄອນເທນເນີ"},{en:"fix_cost",la:"ເປັນຖ້ຽວ"},{en:"chartered",la:"ມອບເໝົາ"},{en:"bag",la:"ບໍລິມາດ"},{en:"infect",la:"ຂີ້ເຫຍື້ອຕິດເຊື້ອ"},{en:"32km",la:"ຫຼັກ32"}],n=function(e){switch(e){case"company":return"ຫົວໜ່ວຍທຸລະກິດ";case"home":return"ຄົວເຮືອນ";default:return e}},l=function(e){switch(e){case"bag":case"chartered":case"32km":case"infect":return"ຖົງ";case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ຖ້ຽວ";default:return e}},r=[{en:"requested",la:"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ",color:"#34495e"},{en:"rejected",la:"ປະຕິເສດລູກຄ້າແລ້ວ",color:"#eff3f5"},{en:"approved",la:"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ",color:"#54a0ff"},{en:"collected",la:"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ",color:"#c1c40f"},{en:"collect_confirm",la:"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ",color:"#30cb83"},{en:"collect_reject",la:"ລູກຄ້າປະຕິເສດການເກັບ",color:"#e74c3c"}],c=[{text:"ວັນທີຈ່າຍບິນ",value:"paided_at"},{text:"ວັນທີສ້າງບິນ",value:"created_at"},{text:"ວັນທີອະນຸມັດບິນ",value:"approved_at"},{text:"ວັນທີກວດສອບບິນສຳເລັດ",value:"confirmed_payment_at"}],o=(e=[])=>{const t=[];for(const s of e)t.push({id:s.id,name:`${s.name} (${Intl.NumberFormat().format(s.price)} ກີບ)`});return t},h=[{value:"",text:"ທັງໝົດ"},{value:"can",text:"ເກັບໄດ້"},{value:"not",text:"ເກັບບໍ່ໄດ້"}]},"990b":function(e,t,s){"use strict";var a=s("1da9"),i=s("d62f"),n=s("26bf"),l=function(){var e=this,t=e._self._c;return e.selectedVillage.length?t(i["a"],e._l(e.filteredDetails,(function(s){return t(a["a"],{key:s.variation_id},[t(n["a"],{attrs:{items:s.details,label:s.variation_name,dense:"","item-text":"variation_name","item-value":"variation_id",multiple:"",outlined:""},model:{value:e.selectedDetails[s.variation_name],callback:function(t){e.$set(e.selectedDetails,s.variation_name,t)},expression:"selectedDetails[detail.variation_name]"}})],1)})),1):e._e()},r=[],c=(s("558b"),{props:{selectedVillage:Array},data(){return{villageVariation:[],villageDetail:[],selectedDetails:{}}},computed:{selectedDetailIds(){const e=[];for(const t of Object.values(this.selectedDetails))for(const s of t)e.push(s);return e},filteredDetails(){const e=[];for(const t of this.villageDetail){console.log(t.variation_id);const s=e.findIndex(e=>e.variation_id==t.details.village_variation.id);s>=0?e[s].details.push(t):e.push({variation_id:t.details.village_variation.id,variation_name:t.details.village_variation.name,details:[t]})}return console.log(e,55),e}},watch:{selectedDetailIds(){this.$emit("input",this.selectedDetailIds)},async selectedVillage(){await this.setVillageDetails()}},async created(){await this.fetchVillageVariation(),await this.setVillageDetails()},methods:{async setVillageDetails(){this.villageDetail=[],await this.fetchVillageVariation();const e=await this.fetchVillageDetail(this.selectedVillage,this.villageVariation.map(e=>e.id));this.villageDetail=[],this.selectedDetails=[];for(const t of e)this.villageDetail.push({variation_id:t.id,variation_name:t.name,details:t})},async fetchVillageVariation(){this.$store.commit("Loading_State",!0);const e=await this.$axios.get("info/village-variation").catch(e=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"})});this.$store.state.isLoading&&(this.villageVariation=e.data.data,this.$store.commit("Loading_State",!1))},async fetchVillageDetail(e,t){let s=[];this.$store.commit("Loading_State",!0);const a=await this.$axios.get("info/village-detail",{params:{villages:e,village_variation_ids:t}}).catch(e=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"})});return this.$store.state.isLoading&&(s=a.data.data,this.$store.commit("Loading_State",!1)),s}}}),o=c,h=s("4a4e"),u=Object(h["a"])(o,l,r,!1,null,null,null);t["a"]=u.exports},a892:function(e,t,s){"use strict";s("0fdf");var a=s("26bf"),i=s("9b44"),n=s("ed44"),l=s("dd08");const r={...a["b"],offsetY:!0,offsetOverflow:!0,transition:!1};t["a"]=a["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:a["a"].options.props.menuProps.type,default:()=>r},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(l["r"])(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=a["a"].options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...r,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=a["a"].options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){if(e!==t){if(!this.autoSelectFirst){const s=t[this.$refs.menu.listIndex];s?this.setMenuIndex(e.findIndex(e=>e===s)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&e.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===l["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===l["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==l["y"].backspace&&e!==l["y"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const a=this.selectedItems.length,i=e!==a-1?e:e-1,n=this.selectedItems[i];n?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=i},clearableCallback(){this.internalSearch=null,a["a"].options.methods.clearableCallback.call(this)},genInput(){const e=i["a"].options.methods.genInput.call(this);return e.data=Object(n["a"])(e.data,{attrs:{"aria-activedescendant":Object(l["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["p"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=a["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?a["a"].options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[l["y"].home,l["y"].end].includes(t)||a["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){a["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){a["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){a["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,s;if(-1===this.selectedIndex)return;const a=this.selectedItems[this.selectedIndex],i=this.getText(a);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",i),null===(s=e.clipboardData)||void 0===s||s.setData("text/vnd.vuetify.autocomplete.item+plain",i),e.preventDefault()}}})},d080:function(e,t,s){"use strict";s("326a")},f742:function(e,t,s){e.exports=s.p+"img/pin2.b23d8eec.svg"}}]);
//# sourceMappingURL=chunk-724a2818.461bc0f0.js.map