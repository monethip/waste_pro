(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00933876"],{"1f4f":function(t,e,a){"use strict";a("8b37");var s=a("80d2"),i=a("7560"),l=a("58df");e["a"]=Object(l["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(s["h"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"22aa":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"d",(function(){return i})),a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return n})),a.d(e,"f",(function(){return r})),a.d(e,"e",(function(){return o})),a.d(e,"g",(function(){return c})),a.d(e,"h",(function(){return d}));const s=function(t){switch(t){case"created":case"ລໍຖ້າອະນຸມັດ":return"#73b8fd";case"approved":case"ອະນຸມັດແລ້ວ":return"#0080fc";case"canceled":case"ບິນຖືກຍົກເລີກ":return"#eb004c";case"rejected":case"ການຈ່າຍຖືກປະຕິເສດ":return"#740127";case"to_confirm_payment":case"ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ":return"#9c540d";case"success":case"ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ":return"#02a38a"}},i=function(t){switch(t){case"created":return"ລໍຖ້າອະນຸມັດ";case"approved":return"ອະນຸມັດແລ້ວ";case"canceled":return"ບິນຖືກຍົກເລີກ";case"rejected":return"ການຈ່າຍຖືກປະຕິເສດ";case"to_confirm_payment":return"ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ";case"success":return"ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ";case"cash":return"ຊຳລະເງິນສົດ";case"bcel":return"BCEL";default:return t}},l=function(t){switch(t){case"CustomBill":return"ບິນຍ້ອນຫຼັງ";case"NewCollectionEvent":return"ບີນບໍລີການຂີ້ເຫຍື້ອພິເສດ";case"FutureInvoice":return"ບິນບໍລິການລ່ວງໜ້າ";case"NewInvoice":return"ບິນບໍລິການປະຈຳເດືອນ";default:return t}},n=function(t){switch(t){case"requested":return"ຮ້ອງຂໍເກັບຂີ້ເຫື້ຍອ";case"rejected":return"ປະຕິເສດເກັບຂີ້ເຫື້ຍອ";case"approved":return"ອະນຸມັດເກັບຂີ້ເຫື້ຍອ";case"collected":return"ເກັບຂີເຫື້ຍອສຳເລັດ";case"collect_confirm":return"ລູກຄ້າຢືນຢັນການເກັບ";case"collect_reject":return"ການເກັບຖືກປະຕິເສດ";default:return t}},r=[{value:"cash",text:"ເງິນສົດ"},{value:"bcel",text:"ເງິນໂອນ"},{value:"bcel_online",text:"bcel bill payments"}],o=["created","approved","to_confirm_payment","success"],c=["rejected","canceled"],d=["kg","ຖົງ","container","ຄັ້ງ"]},"2bfd":function(t,e,a){},"398d":function(t,e,a){"use strict";var s=a("62ad"),i=a("0fd9"),l=function(){var t=this,e=t._self._c;return e(i["a"],t._l(t.cards,(function(t,a){return e(s["a"],{key:a},[e("MoneyCard",{attrs:{title:t.status_la,total:t.total,billing_count:t.count_billing,bg_color:t.bg_color,route:t.route,icon:t.icon,icon_color:t.icon_color}})],1)})),1)},n=[],r=a("b0af"),o=a("99d9"),c=a("cc20"),d=a("132d"),u=function(){var t=this,e=t._self._c;return e(r["a"],{staticStyle:{height:"100px"},attrs:{outlined:""},on:{click:function(e){return t.openNewTab(t.route)}}},[e(o["c"],{staticClass:"d-flex justify-between w-full",staticStyle:{position:"relative"}},[t.icon?e(c["a"],{staticClass:"text-caption",attrs:{color:t.icon_color,dark:""}},[e(d["a"],{attrs:{"x-small":!0}},[t._v(" "+t._s(t.icon)+" ")]),e("div",{staticClass:"ml-1",attrs:{color:t.icon_color}},[t._v(" "+t._s(t.title)+" ")])],1):e(c["a"],{staticClass:"text-caption",attrs:{color:t.bg_color,dark:""}},[t._v(" "+t._s(t.title)+" ")]),null!=t.billing_count&&""!=t.billing_count&&void 0!=t.billing_count?e(c["a"],{staticStyle:{position:"absolute",right:"10px"},attrs:{color:t.bg_color,outlined:""}},[t._v(" "+t._s(Intl.NumberFormat().format(t.billing_count))+" ບິນ ")]):t._e()],1),t.total?e(o["b"],[e("p",{staticClass:"text-h5"},[t._v(" "+t._s(Intl.NumberFormat().format(t.total))+" K ")])]):t._e()],1)},h=[],m={props:["title","billing_count","total","bg_color","route","icon","icon_color"],data(){return{}},created(){},beforeUpdate(){this.$store.commit("Loading_State",!0)},updated(){this.$store.commit("Loading_State",!1)},methods:{getColor(t){return"background-color: "+t},openNewTab(t){t&&window.open(t.href,"_blank")}}},_=m,p=a("2877"),g=Object(p["a"])(_,u,h,!1,null,null,null),f=g.exports,b={components:{MoneyCard:f},props:["cards"],data(){return{}}},v=b,y=Object(p["a"])(v,l,n,!1,null,null,null);e["a"]=y.exports},"3b7c":function(t,e,a){},"54da":function(t,e,a){"use strict";e["a"]=function(t){const e={};if(!t[0]){for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&(void 0!==t[e]&&null!==t[e]&&""!==t[e]||delete t[e]);return t}for(const a of t)1==Object.keys(a).length&&a[Object.keys(a)]&&(e[Object.keys(a)]=a[Object.keys(a)]);return e}},7660:function(t,e,a){"use strict";a.d(e,"g",(function(){return s})),a.d(e,"c",(function(){return i})),a.d(e,"h",(function(){return l})),a.d(e,"e",(function(){return n})),a.d(e,"f",(function(){return r})),a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return c})),a.d(e,"d",(function(){return d}));a("14d9");const s=function(t){switch(t){case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ເປັນຖ້ຽວ";case"chartered":return"ມອບເໝົາ";case"bag":return"ບໍລິມາດ";case"infect":return"ຂີ້ເຫຍື້ອຕິດເຊື້ອ";case"32km":return"ຫຼັກ32";default:return t}},i=[{en:"container",la:"ຄອນເທນເນີ"},{en:"fix_cost",la:"ເປັນຖ້ຽວ"},{en:"chartered",la:"ມອບເໝົາ"},{en:"bag",la:"ບໍລິມາດ"},{en:"infect",la:"ຂີ້ເຫຍື້ອຕິດເຊື້ອ"},{en:"32km",la:"ຫຼັກ32"}],l=function(t){switch(t){case"company":return"ຫົວໜ່ວຍທຸລະກິດ";case"home":return"ຄົວເຮືອນ";default:return t}},n=function(t){switch(t){case"bag":case"chartered":case"32km":case"infect":return"ຖົງ";case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ຖ້ຽວ";default:return t}},r=[{en:"requested",la:"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ",color:"#34495e"},{en:"rejected",la:"ປະຕິເສດລູກຄ້າແລ້ວ",color:"#eff3f5"},{en:"approved",la:"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ",color:"#54a0ff"},{en:"collected",la:"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ",color:"#c1c40f"},{en:"collect_confirm",la:"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ",color:"#30cb83"},{en:"collect_reject",la:"ລູກຄ້າປະຕິເສດການເກັບ",color:"#e74c3c"}],o=[{text:"ວັນທີຈ່າຍບິນ",value:"paided_at"},{text:"ວັນທີສ້າງບິນ",value:"created_at"},{text:"ວັນທີອະນຸມັດບິນ",value:"approved_at"},{text:"ວັນທີກວດສອບບິນສຳເລັດ",value:"confirmed_payment_at"}],c=(t=[])=>{const e=[];for(const a of t)e.push({id:a.id,name:`${a.name} (${Intl.NumberFormat().format(a.price)} ກີບ)`});return e},d=[{value:"",text:"ທັງໝົດ"},{value:"can",text:"ເກັບໄດ້"},{value:"not",text:"ເກັບບໍ່ໄດ້"}]},"8b37":function(t,e,a){},"990b":function(t,e,a){"use strict";var s=a("62ad"),i=a("0fd9"),l=a("b974"),n=function(){var t=this,e=t._self._c;return t.selectedVillage.length>0?e(i["a"],t._l(t.filteredDetails,(function(a){return e(s["a"],{key:a.variation_id},[e(l["a"],{attrs:{items:a.details,label:a.variation_name,dense:"","item-text":"variation_name","item-value":"variation_id",multiple:"",outlined:""},model:{value:t.selectedDetails[a.variation_name],callback:function(e){t.$set(t.selectedDetails,a.variation_name,e)},expression:"selectedDetails[detail.variation_name]"}})],1)})),1):t._e()},r=[],o=(a("14d9"),{props:{selectedVillage:Array},data(){return{villageVariation:[],villageDetail:[],selectedDetails:{}}},computed:{selectedDetailIds(){const t=[];for(const e of Object.values(this.selectedDetails))for(const a of e)t.push(a);return t},filteredDetails(){const t=[];for(const e of this.villageDetail){console.log(e.variation_id);const a=t.findIndex(t=>t.variation_id==e.details.village_variation.id);a>=0?t[a].details.push(e):t.push({variation_id:e.details.village_variation.id,variation_name:e.details.village_variation.name,details:[e]})}return console.log(t,55),t}},watch:{selectedDetailIds(){this.$emit("input",this.selectedDetailIds)},async selectedVillage(){await this.setVillageDetails()}},async created(){await this.fetchVillageVariation(),await this.setVillageDetails()},methods:{async setVillageDetails(){this.villageDetail=[],await this.fetchVillageVariation();const t=await this.fetchVillageDetail(this.selectedVillage,this.villageVariation.map(t=>t.id));this.villageDetail=[],this.selectedDetails=[];for(const e of t)this.villageDetail.push({variation_id:e.id,variation_name:e.name,details:e});console.log("dd",this.villageDetail)},async fetchVillageVariation(){this.$store.commit("Loading_State",!0);const t=await this.$axios.get("info/village-variation").catch(t=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"})});this.$store.state.isLoading&&(this.villageVariation=t.data.data,this.$store.commit("Loading_State",!1))},async fetchVillageDetail(t,e){let a=[];this.$store.commit("Loading_State",!0);const s=await this.$axios.get("info/village-detail",{params:{villages:t,village_variation_ids:e}}).catch(t=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"})});return this.$store.state.isLoading&&(a=s.data.data,this.$store.commit("Loading_State",!1)),a}}}),c=o,d=a("2877"),u=Object(d["a"])(c,n,r,!1,null,null,null);e["a"]=u.exports},"9d4c":function(t,e,a){"use strict";a.r(e);var s=a("c6a6"),i=a("2bc5"),l=a("8336"),n=a("b0af"),r=a("99d9"),o=a("cc20"),c=a("62ad"),d=a("a523"),u=a("2e4b"),h=a("132d"),m=a("8860"),_=a("da13"),p=a("5d23"),g=a("34c3"),f=a("e449"),b=a("0fd9"),v=a("b974"),y=a("1f4f"),x=a("8654"),S=function(){var t=this,e=t._self._c;return e(d["a"],[e(i["a"],{staticClass:"pt-0",attrs:{large:""}},[t._v(" ລາຍງານຍອດຂາຍ ")]),e(b["a"],{staticClass:"mb-n6"},[e(c["a"],[e(b["a"],[e(c["a"],[e(f["a"],{attrs:{"close-on-content-click":!1,"nudge-right":40,"min-width":"auto","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(x["a"],t._g(t._b({attrs:{clearable:"",dense:"",label:"ວັນທີເພີ່ມລູກຄ້າແຕ່",outlined:"",readonly:""},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}},"v-text-field",s,!1),a))]}}]),model:{value:t.start_menu,callback:function(e){t.start_menu=e},expression:"start_menu"}},[e(u["a"],{model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}})],1)],1),e(c["a"],[e(f["a"],{attrs:{"close-on-content-click":!1,"nudge-right":40,"min-width":"auto","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(x["a"],t._g(t._b({attrs:{clearable:"",dense:"",label:"ຫາວັນທີ",outlined:"",readonly:""},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}},"v-text-field",s,!1),a))]}}]),model:{value:t.end_menu,callback:function(e){t.end_menu=e},expression:"end_menu"}},[e(u["a"],{model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}})],1)],1),e(c["a"],[e(s["a"],{attrs:{items:t.districts,clearable:"",dense:"","item-text":"name",label:"ເມືອງ",outlined:"","return-object":""},model:{value:t.selectedDistrict,callback:function(e){t.selectedDistrict=e},expression:"selectedDistrict"}})],1),e(c["a"],[e(s["a"],{attrs:{items:t.selectedDistrict.villages,clearable:"",dense:"","item-text":"name","item-value":"id",label:"ບ້ານ",multiple:"",outlined:""},model:{value:t.selectedVillage,callback:function(e){t.selectedVillage=e},expression:"selectedVillage"}})],1)],1),e(b["a"],[e("VillageDetail",{attrs:{"selected-village":t.selectedVillage},model:{value:t.selectedDetails,callback:function(e){t.selectedDetails=e},expression:"selectedDetails"}})],1),e(b["a"],[e(c["a"],[e(f["a"],{attrs:{"close-on-content-click":!0,"nudge-right":40,"min-width":"auto","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(x["a"],t._g(t._b({attrs:{clearable:"",dense:"",label:"ບິນປະຈຳເດືອນ",outlined:"",readonly:""},model:{value:t.lastMonthBillPaid,callback:function(e){t.lastMonthBillPaid=e},expression:"lastMonthBillPaid"}},"v-text-field",s,!1),a))]}}]),model:{value:t.start_paid_month,callback:function(e){t.start_paid_month=e},expression:"start_paid_month"}},[e(u["a"],{attrs:{type:"month"},model:{value:t.lastMonthBillPaid,callback:function(e){t.lastMonthBillPaid=e},expression:"lastMonthBillPaid"}})],1)],1)],1),e(b["a"],[e(c["a"],[e(v["a"],{attrs:{items:t.customerTypes,clearable:"",dense:"","item-text":"name_la","item-value":"name",label:"ເລືອກປະເພດລູກຄ້າ",outlined:""},model:{value:t.selectedCustomerType,callback:function(e){t.selectedCustomerType=e},expression:"selectedCustomerType"}})],1),"company"==t.selectedCustomerType?e(c["a"],[e(v["a"],{attrs:{items:t.comapnyTypes,clearable:"",dense:"","item-text":"la","item-value":"en",label:"ເລືອກປະເພດບໍລິການ",outlined:""},model:{value:t.selectedCompanyType,callback:function(e){t.selectedCompanyType=e},expression:"selectedCompanyType"}})],1):t._e(),"home"==t.selectedCustomerType?e(c["a"],[e(v["a"],{attrs:{items:t.packageList,dense:"","item-text":"name","item-value":"id",label:"ເລືອກແພັກເກດ",outlined:""},model:{value:t.selectedPackage,callback:function(e){t.selectedPackage=e},expression:"selectedPackage"}})],1):t._e()],1),e(b["a"],[e(c["a"],[e(x["a"],{attrs:{clearable:"",dense:"",label:"ໄອດີລູກຄ້າ",outlined:"","prepend-inner-icon":"mdi-folder-key",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.fetchData()}},model:{value:t.customer_id,callback:function(e){t.customer_id=e},expression:"customer_id"}})],1),e(c["a"],[e(x["a"],{attrs:{clearable:"",dense:"",label:"ໂທລະສັບ",outlined:"","prepend-inner-icon":"mdi-phone",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.fetchData()}},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),e(c["a"],[e(x["a"],{attrs:{clearable:"",dense:"",label:"ຊື່",outlined:"","prepend-inner-icon":"mdi-account",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.fetchData()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e(c["a"],[e("SaleAdmin",{attrs:{"first-sale":t.created_by,label:"ເລືອກຜູ້ສ້າງ"},model:{value:t.created_by,callback:function(e){t.created_by=e},expression:"created_by"}})],1),e(c["a"],[e(l["a"],{staticStyle:{width:"100%"},attrs:{color:"green",dark:""},on:{click:function(e){return t.fetchData()}}},[t._v(" ຄົ້ນຫາ ")])],1)],1)],1)],1),e(b["a"],[e(c["a"],[e(l["a"],{staticStyle:{width:"100%"},attrs:{color:"green",dark:""},on:{click:function(e){return t.fetchData(!0)}}},[t._v(" Export ")])],1)],1),e(b["a"],[e(c["a"],[e("RowSection",{attrs:{cards:t.allMonths}})],1)],1),e(b["a"],[e(c["a"],[e(b["a"],[e(c["a"],[e(n["a"],[t.pagination.total?e(r["c"],[t._v(" "+t._s(Intl.NumberFormat().format(t.pagination.total))+" ລູກຄ້າ ")]):t._e(),e(r["b"],[e(y["a"],{staticStyle:{"white-space":"nowrap"}},[e("thead",[e("tr",t._l(t.headers,(function(a){return e("td",{key:a.text},[t._v(" "+t._s(a.text)+" ")])})),0)]),e("tbody",[t._l(t.customers,(function(a){return[e("tr",{key:a.id},[e("td",{attrs:{rowspan:a.user.billings&&a.user.billings.length?a.user.billings.length:1}},[e(b["a"],[e("a",{staticClass:"font-weight-bold text--accent-3 ml-6",attrs:{href:"#"},on:{click:function(e){return t.viewCustomerDetail(a)}}},[t._v(t._s(a.customer_id))])]),e(b["a"],[a.user.billings_sum_total>0?e("p",{staticClass:"text-large ml-6",style:a.user.billings_sum_total-a.user.billings_paid_sum_total<=0?"color: green":"color: orange"},[t._v(" "+t._s(a.full_name)+" ")]):e("p",{staticClass:"text-large ml-6"},[t._v(" "+t._s(a.full_name)+" ")])]),e(b["a"],[e(h["a"],{staticClass:"ml-8 mr-1",attrs:{small:""}},[t._v(" mdi-map-marker ")]),t._v(" "+t._s(a.village.name)+", "+t._s(a.village.district.name)+" ")],1),e(b["a"],[e(h["a"],{staticClass:"ml-8 mr-1",attrs:{small:""}},[t._v(" mdi-phone ")]),t._v(" "+t._s(a.user.phone)+" ")],1),a.customer_activity?e(b["a"],[a.customer_activity&&a.customer_activity.user?e(c["a"],[t._v(" ຜູ້ສ້າງ: "+t._s(a.customer_activity.user.full_name)+" ")]):t._e()],1):t._e()],1),e("td",{attrs:{rowspan:a.user.billings&&a.user.billings.length?a.user.billings.length:1}},[e(h["a"],[t._v(" "+t._s("home"==a.customer_type?"mdi-account-group":"mdi-office-building")+" ")]),t._v(" "+t._s(a.cost_by_la)+" ")],1),e("td",{attrs:{rowspan:a.user.billings&&a.user.billings.length?a.user.billings.length:1}},[e(m["a"],[e(_["a"],[e(g["a"],[e(o["a"],{attrs:{color:"primary",dark:"",small:""}},[t._v(" ລວມ ")])],1),e(p["b"],{staticClass:"text-large"},[t._v(" "+t._s(Intl.NumberFormat().format(a.user.billings_sum_total))+" ("+t._s(a.user.billings_count)+" ບິນ) ")])],1),e(_["a"],[e(g["a"],[e(o["a"],{attrs:{color:"success",dark:"",small:""}},[t._v(" ຈ່າຍແລ້ວ ")])],1),e(p["b"],{staticClass:"text-large"},[t._v(" "+t._s(Intl.NumberFormat().format(a.user.billings_paid_sum_total))+" ("+t._s(a.user.billings_paid_count)+" ບິນ) ")])],1),e(_["a"],[e(g["a"],[e(o["a"],{attrs:{color:"warning",dark:"",small:""}},[t._v(" ຄົງຄ້າງ ")])],1),e(p["b"],{staticClass:"text-large"},[t._v(" "+t._s(Intl.NumberFormat().format(a.user.billings_unpaid_sum_total))+" ("+t._s(a.user.billings_unpaid_count)+" ບິນ) ")])],1)],1)],1),a.user.billings&&a.user.billings.length>0?[e("td",[e(b["a"],[e("a",{staticClass:"font-weight-bold text--accent-3",attrs:{href:"#"},on:{click:function(e){return t.openBilling(a.user.billings[0].id)}}},[t._v(t._s(a.user.billings[0].billing_display_id))])]),e(b["a"],[e("div",{},[t._v(" "+t._s(a.user.billings[0].content)+" ")])])],1),e("td",[t._v(t._s(Intl.NumberFormat().format(a.user.billings[0].total)))]),e("td",[e(o["a"],{attrs:{color:t.getBgColorFn(a.user.billings[0].status),dark:""}},[t._v(" "+t._s(a.user.billings[0].status_la)+" ")])],1),e("td",[t._v(t._s(a.user.billings[0].payment_method_la))]),e("td",[t._v(" "+t._s(a.user.billings[0].paided_by?a.user.billings[0].paided_by.name:"")+" ")]),e("td",[t._v(t._s(a.user.billings[0].created_at))]),e("td",[t._v(t._s(a.user.billings[0].approved_at))]),e("td",[t._v(t._s(a.user.billings[0].paided_at))]),e("td",[t._v(t._s(a.user.billings[0].confirmed_payment_at))])]:[e("td"),e("td"),e("td"),e("td"),e("td"),e("td"),e("td"),e("td"),e("td")]],2),a.user.billings?t._l(a.user.billings.slice(1),(function(a){return e("tr",{key:a.id},[e("td",[e(b["a"],[e("a",{staticClass:"font-weight-bold text--accent-3",attrs:{href:"#"},on:{click:function(e){return t.openBilling(a.id)}}},[t._v(t._s(a.billing_display_id))])]),e(b["a"],[e("p",[t._v(t._s(a.content))])])],1),e("td",[t._v(t._s(Intl.NumberFormat().format(a.total)))]),e("td",[e(o["a"],{attrs:{color:t.getBgColorFn(a.status),dark:""}},[t._v(" "+t._s(a.status_la)+" ")])],1),e("td",[t._v(t._s(a.payment_method_la))]),e("td",[t._v(t._s(a.paided_by?a.paided_by.name:""))]),e("td",[t._v(t._s(a.created_at))]),e("td",[t._v(t._s(a.approved_at))]),e("td",[t._v(t._s(a.paided_at))]),e("td",[t._v(t._s(a.confirmed_payment_at))])])})):t._e()]}))],2)]),[e("Pagination",{attrs:{offset:t.offset,pagination:t.pagination},on:{paginate:function(e){return t.fetchData()}}})]],2)],1)],1)],1)],1)],1)],1)},D=[],k=a("22aa"),I=a("7660"),w=a("990b"),$=a("ccd1"),C=function(t){return Array.isArray(t)?t:[t]},V=a("398d"),O=a("54da"),T={title(){return"Vientiane Waste Co-Dev|Calendar"},components:{RowSection:V["a"],VillageDetail:w["a"],SaleAdmin:$["a"]},data(){return{firstLoad:!0,sumData:{},hasBillingOnly:"",start_paid_month:!1,lastMonthBillPaid:"",created_by:"",saleData:null,packages:[],selectedPackage:null,selectedCustomerType:"",selectedCompanyType:"",comapnyTypes:I["c"],customerTypes:[{name:"",name_la:"ທັງໝົດ"},{name_la:"ຄົວເຮືອນ",name:"home"},{name_la:"ຫົວໜ່ວຍທຸລະກິດ",name:"company"}],start_date:"",end_date:"",selected_month:this.$route.query.month||(new Date).toISOString().substr(0,7),month_menu:!1,start_menu:!1,end_menu:!1,districts:[],selectedDistrict:"",districtLoaded:!1,villages:[],selectedVillage:[],selectedDetails:[],selectedStatus:[],search:"",phone:"",customer_id:"",loading:!1,customerId:"",pagination:{},per_page:100,offset:12,customers:[],headers:[{text:"ລູກຄ້າ",value:"full_name",align:"center",divider:!0},{text:"ປະເພດບໍລິການ",value:"cost_by_la"},{text:"ຍອດລວມ",value:""},{text:"ໄອດີບິນ",value:"billings_id"},{text:"ຈຳນວນ",value:"billings_total"},{text:"ສະຖານະຈ່າຍ",value:"billings_status"},{text:"ຈ່າຍດ້ວຍ",value:"billings_paymet_method"},{text:"ຜູ້ຈ່າຍບິນ",value:"billings_paid_by"},{text:"ເວລາສ້າງບິນ",value:"billings_created_at"},{text:"ເວລາອະນຸມັດບິນ",value:"billings_approved_at"},{text:"ເວລາຈ່າຍບິນ",value:"billings_paid_at"},{text:"ເວລາຢືນຢັນການຈ່າຍ",value:"billings_confirm_at"}]}},computed:{packageList(){return console.log(this.packages),Object(I["b"])(this.packages)},allMonths(){var t,e,a,s,i,l,n,r,o,c,d,u,h,m,_,p,g,f,b,v,y,x,S,D;return"paid"==this.$route.query.showOne?[{status_la:"ຈ່າຍແລ້ວ",total:null===(_=this.sumData.all)||void 0===_||null===(p=_.paid)||void 0===p?void 0:p.total,count_billing:null===(g=this.sumData.all)||void 0===g||null===(f=g.paid)||void 0===f?void 0:f.count,bg_color:"green"}]:"unpaid"==this.$route.query.showOne?[{status_la:"ຕິດໜີ້",total:null===(b=this.sumData.all)||void 0===b||null===(v=b.unpaid)||void 0===v?void 0:v.total,count_billing:null===(y=this.sumData.all)||void 0===y||null===(x=y.unpaid)||void 0===x?void 0:x.count,bg_color:"orange"}]:"noBill"==this.$route.query.showOne?[{status_la:"ບິນຍັງບໍ່ອອກ",total:null===(S=this.sumData.no_bill)||void 0===S?void 0:S.package_price,count_billing:null===(D=this.sumData.no_bill)||void 0===D?void 0:D.count_customers,bg_color:"red",route:this.billRoute(this.lastMonthBillPaid,"noBill")}]:[{status_la:"ລວມ",total:null===(t=this.sumData.all)||void 0===t||null===(e=t.total)||void 0===e?void 0:e.total,count_billing:null===(a=this.sumData.all)||void 0===a||null===(s=a.total)||void 0===s?void 0:s.count,bg_color:"blue",route:this.billRoute(this.lastMonthBillPaid,"all")},{status_la:"ຈ່າຍແລ້ວ",total:null===(i=this.sumData.all)||void 0===i||null===(l=i.paid)||void 0===l?void 0:l.total,count_billing:null===(n=this.sumData.all)||void 0===n||null===(r=n.paid)||void 0===r?void 0:r.count,bg_color:"green",route:this.billRoute(this.lastMonthBillPaid,"paid")},{status_la:"ຕິດໜີ້",total:null===(o=this.sumData.all)||void 0===o||null===(c=o.unpaid)||void 0===c?void 0:c.total,count_billing:null===(d=this.sumData.all)||void 0===d||null===(u=d.unpaid)||void 0===u?void 0:u.count,bg_color:"orange",route:this.billRoute(this.lastMonthBillPaid,"unpaid")},{status_la:"ບິນຍັງບໍ່ອອກ",total:null===(h=this.sumData.no_bill)||void 0===h?void 0:h.package_price,count_billing:null===(m=this.sumData.no_bill)||void 0===m?void 0:m.count_customers,bg_color:"red",route:this.billRoute(this.lastMonthBillPaid,"noBill")}]},param(){return Object(O["a"])([{order_by:"customers.id"},{without_month_info:!0},{without_billing_summary:!0},{has_billing_only:this.hasBillingOnly},{customer_id:this.customer_id},{phone:this.phone},{customer_type:this.selectedCustomerType},{package_id:this.selectedPackage},{cost_by:this.selectedCompanyType},{villages:this.selectedVillage},{district_id:this.selectedDistrict.id},{village_details:this.selectedDetails},{date_from:this.start_date},{date_end:this.end_date},{filter:this.search},{with_created_user:!0},{created_by_id:this.created_by},{bill_month:this.lastMonthBillPaid},{is_bill_month:!0},{only_user_with_bill:this.$route.query.showOne},{per_page:this.per_page},{page:this.pagination.current_page}])}},watch:{created_by(){this.firstLoad||this.fetchData()},selectedPackage(t){console.log(t,typeof t)}},async created(){await this.fetchAddress(),this.setParam(),await this.fetchPackage(),this.fetchData()},methods:{billRoute(t,e){const a=Object(O["a"])({selectedCustomerType:this.selectedCustomerType,package_id:this.selectedPackage,selectedVillage:this.selectedVillage,selectedDistrict:this.selectedDistrict,selectedDetails:this.selectedDetails,start_date:this.start_date,end_date:this.end_date,created_by:this.selectedSale,selectedCompanyType:this.selectedCompanyType,billMonth:t,showOne:e}),s=this.$router.resolve({name:"Report-Billing-Customer",query:a});return s},viewCustomerDetail(t){const e="home"==t.customer_type?"ViewClient":"ViewCompanyDetail",a={name:e,params:Object(O["a"])([{id:t.id}])};this.openRoute(a)},getBgColorFn(t){return Object(k["a"])(t)},async fetchPackage(){const t=await this.$axios.get("package").catch(()=>{});200==t.data.code&&(this.packages=t.data.data)},async fetchVillage(){const t=await this.$axios.get(`info/district/${this.selectedDistrict.id}/village`).catch(()=>{});200==t.data.code&&(this.villages=t.data.data)},async fetchAddress(){this.districtLoaded=!1;const t=await this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ",with_village:!0}}).catch(()=>{});if(200==t.data.code){this.address=t.data.data;for(const t of this.address)this.districts=t.districts}this.districtLoaded=!0},async fetchData(t=!1){this.$store.commit("Loading_State",!0);const e=await this.$axios.get("v2/report-billing-for-customer",{params:{...this.param,download:t?"excel":null}}).catch(t=>console.log(t));t?(console.log(e.data),window.open(e.data.data.download_link)):(this.customers=e.data.data.data.data,this.pagination=e.data.data.data.pagination,this.sumData=e.data.data.sum),this.$store.commit("Loading_State",!1)},setParam(){if(this.$route.query.customer_id&&(this.customer_id=this.$route.query.customer_id),this.$route.query.phone&&(this.phone=this.$route.query.phone),this.$route.query.selectedCustomerType&&(this.selectedCustomerType=this.$route.query.selectedCustomerType),this.$route.query.package_id&&(this.selectedPackage=parseInt(this.$route.query.package_id)),this.$route.query.selectedCompanyType&&(this.selectedCompanyType=this.$route.query.selectedCompanyType),this.$route.query.selectedDistrict){const t=this.districts.find(t=>t.id==this.$route.query.selectedDistrict);t&&(this.selectedDistrict=t)}this.$route.query.selectedVillage&&(this.selectedVillage=C(this.$route.query.selectedVillage).map(t=>Number(t))),this.$route.query.selectedDetails&&(this.selectedDetails=this.$route.query.selectedDetails),this.$route.query.start_date&&(this.start_date=this.$route.query.start_date),this.$route.query.end_date&&(this.end_date=this.$route.query.end_date),this.$route.query.search&&(this.search=this.$route.query.search),this.$route.query.created_by&&(this.created_by=this.$route.query.created_by),this.$route.query.billMonth&&(this.lastMonthBillPaid=this.$route.query.billMonth),this.$route.query.showOne&&("all"==this.$route.query.showOne?this.hasBillingOnly="":"noBill"==this.$route.query.showOne?this.hasBillingOnly="no_billing":this.hasBillingOnly="has_billing")},created(){this.lastMonthBillPaid||(this.lastMonthBillPaid=(new Date).toISOString().substr(0,7))},openBilling(t){const e={name:"billing-detail",params:Object(O["a"])([{id:t}])};this.openRoute(e)},openRoute(t){const e=this.$router.resolve({...t});window.open(e.href)},backPrevios(){this.$router.go(-1)}}},B=T,q=(a("d005"),a("2877")),M=Object(q["a"])(B,S,D,!1,null,null,null);e["default"]=M.exports},afdd:function(t,e,a){"use strict";var s=a("8336");e["a"]=s["a"]},c6a6:function(t,e,a){"use strict";a("2bfd");var s=a("b974"),i=a("8654"),l=a("d9f7"),n=a("80d2");const r={...s["b"],offsetY:!0,offsetOverflow:!0,transition:!1};e["a"]=s["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,a)=>a.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:s["a"].options.props.menuProps.type,default:()=>r},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>{const e=Object(n["r"])(t,this.itemText),a=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),a)})},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=s["a"].options.computed.$_menuProps.call(this);return t.contentClass=("v-autocomplete__content "+(t.contentClass||"")).trim(),{...r,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue)))},listData(){const t=s["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){if(t!==e){if(!this.autoSelectFirst){const a=e[this.$refs.menu.listIndex];a?this.setMenuIndex(t.findIndex(t=>t===a)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&t.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===n["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===n["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==n["y"].backspace&&t!==n["y"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const a=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==a)return void(this.selectedIndex=a);const s=this.selectedItems.length,i=t!==s-1?t:t-1,l=this.selectedItems[i];l?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=i},clearableCallback(){this.internalSearch=null,s["a"].options.methods.clearableCallback.call(this)},genInput(){const t=i["a"].options.methods.genInput.call(this);return t.data=Object(l["a"])(t.data,{attrs:{"aria-activedescendant":Object(n["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(n["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=s["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?s["a"].options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,a=e.value;e.value&&this.activateMenu(),this.multiple||""!==a||this.deleteCurrentItem(),this.internalSearch=a,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[n["y"].home,n["y"].end].includes(e)||s["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){s["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){s["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){s["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,a;if(-1===this.selectedIndex)return;const s=this.selectedItems[this.selectedIndex],i=this.getText(s);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",i),null===(a=t.clipboardData)||void 0===a||a.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}})},ccd1:function(t,e,a){"use strict";var s=a("c6a6"),i=function(){var t=this,e=t._self._c;return e(s["a"],{attrs:{items:t.sales,label:t.label,dense:"","item-text":"name","item-value":"id",outlined:""},model:{value:t.selectedSale,callback:function(e){t.selectedSale=e},expression:"selectedSale"}})},l=[],n=(a("14d9"),a("54da")),r={props:{label:{default:"ເລືອກເຊວທີ່ກ່ຽວຂ້ອງ",type:String},firstSale:{default:""}},data(){return{salesData:[],selectedSale:""}},computed:{sales(){const t=[];for(const e of this.salesData){let a="";e.name&&(a+=e.name+" "),e.phone&&(a+=e.phone+" "),e.emp_name&&(a+=e.emp_name+" "),e.emp_surname&&(a+=e.emp_surname+" "),e.emp_card_id&&(a+=e.emp_card_id),t.push({name:a,id:e.id})}return t}},watch:{selectedSale(){this.$emit("input",this.selectedSale)}},async created(){await this.fetchSale(),this.firstSale&&(this.selectedSale="number"!==typeof this.firstSale?Number.parseInt(this.firstSale):this.selectedSale)},methods:{async fetchSale(){this.$store.commit("Loading_State",!0);const t=await this.$axios.get("user-setting/user",{params:Object(n["a"])([{roles:["sale","sale_admin","sale_partner","sale_editor"]},{order_by:"newest"}])}).catch(t=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"})});this.$store.state.isLoading&&(this.salesData=t.data.data,this.$store.commit("Loading_State",!1))}}},o=r,c=a("2877"),d=Object(c["a"])(o,i,l,!1,null,null,null);e["a"]=d.exports},d005:function(t,e,a){"use strict";a("3b7c")}}]);
//# sourceMappingURL=chunk-00933876.5ba5a863.js.map