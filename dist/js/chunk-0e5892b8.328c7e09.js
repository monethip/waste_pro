(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e5892b8"],{"04c6":function(t,e,a){"use strict";var s=a("c0e9"),n=a("1f45"),r=a("f401"),c=URLSearchParams.prototype,i=n(c.forEach);s&&!("size"in c)&&r(c,"size",{get:function(){var t=0;return i(this,(function(){t++})),t},configurable:!0,enumerable:!0})},"22aa":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"d",(function(){return n})),a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return c})),a.d(e,"f",(function(){return i})),a.d(e,"e",(function(){return o})),a.d(e,"g",(function(){return l})),a.d(e,"h",(function(){return u}));const s=function(t){switch(t){case"created":case"ລໍຖ້າອະນຸມັດ":return"#73b8fd";case"approved":case"ອະນຸມັດແລ້ວ":return"#0080fc";case"canceled":case"ບິນຖືກຍົກເລີກ":return"#eb004c";case"rejected":case"ການຈ່າຍຖືກປະຕິເສດ":return"#740127";case"to_confirm_payment":case"ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ":return"#9c540d";case"success":case"ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ":return"#02a38a"}},n=function(t){switch(t){case"created":return"ລໍຖ້າອະນຸມັດ";case"approved":return"ອະນຸມັດແລ້ວ";case"canceled":return"ບິນຖືກຍົກເລີກ";case"rejected":return"ການຈ່າຍຖືກປະຕິເສດ";case"to_confirm_payment":return"ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ";case"success":return"ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ";case"cash":return"ຊຳລະເງິນສົດ";case"bcel":return"BCEL";default:return t}},r=function(t){switch(t){case"CustomBill":return"ບິນຍ້ອນຫຼັງ";case"NewCollectionEvent":return"ບີນບໍລີການຂີ້ເຫຍື້ອພິເສດ";case"FutureInvoice":return"ບິນບໍລິການລ່ວງໜ້າ";case"NewInvoice":return"ບິນບໍລິການປະຈຳເດືອນ";default:return t}},c=function(t){switch(t){case"requested":return"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ";case"rejected":return"ປະຕິເສດລູກຄ້າແລ້ວ";case"approved":return"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ";case"collected":return"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ";case"collect_confirm":return"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ";case"collect_reject":return"ລູກຄ້າປະຕິເສດການເກັບ";default:return t}},i=[{value:"cash",text:"ເງິນສົດ"},{value:"bcel",text:"ເງິນໂອນ"},{value:"bcel_online",text:"bcel bill payments"}],o=["created","approved","to_confirm_payment","success"],l=["rejected","canceled"],u=["kg","ຖົງ","container","ຄັ້ງ"]},"3e36":function(t,e,a){"use strict";var s=a("c1a61");e["a"]=s["a"]},"42ec":function(t,e,a){},"54da":function(t,e,a){"use strict";e["a"]=function(t){const e={};if(!t[0]){for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&(void 0!==t[e]&&null!==t[e]&&""!==t[e]||delete t[e]);return t}for(const a of t)1==Object.keys(a).length&&a[Object.keys(a)]&&(e[Object.keys(a)]=a[Object.keys(a)]);return e}},"6ece":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));const s=t=>{""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},7660:function(t,e,a){"use strict";a.d(e,"g",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"h",(function(){return r})),a.d(e,"e",(function(){return c})),a.d(e,"f",(function(){return i})),a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return l})),a.d(e,"d",(function(){return u}));a("a047");const s=function(t){switch(t){case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ເປັນຖ້ຽວ";case"chartered":return"ມອບເໝົາ";case"bag":return"ບໍລິມາດ";case"infect":return"ຂີ້ເຫຍື້ອຕິດເຊື້ອ";case"32km":return"ຫຼັກ32";default:return t}},n=[{en:"container",la:"ຄອນເທນເນີ"},{en:"fix_cost",la:"ເປັນຖ້ຽວ"},{en:"chartered",la:"ມອບເໝົາ"},{en:"bag",la:"ບໍລິມາດ"},{en:"infect",la:"ຂີ້ເຫຍື້ອຕິດເຊື້ອ"},{en:"32km",la:"ຫຼັກ32"}],r=function(t){switch(t){case"company":return"ຫົວໜ່ວຍທຸລະກິດ";case"home":return"ຄົວເຮືອນ";default:return t}},c=function(t){switch(t){case"bag":case"chartered":case"32km":case"infect":return"ຖົງ";case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ຖ້ຽວ";default:return t}},i=[{en:"requested",la:"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ",color:"#34495e"},{en:"rejected",la:"ປະຕິເສດລູກຄ້າແລ້ວ",color:"#eff3f5"},{en:"approved",la:"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ",color:"#54a0ff"},{en:"collected",la:"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ",color:"#c1c40f"},{en:"collect_confirm",la:"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ",color:"#30cb83"},{en:"collect_reject",la:"ລູກຄ້າປະຕິເສດການເກັບ",color:"#e74c3c"}],o=[{text:"ວັນທີຈ່າຍບິນ",value:"paided_at"},{text:"ວັນທີສ້າງບິນ",value:"created_at"},{text:"ວັນທີອະນຸມັດບິນ",value:"approved_at"},{text:"ວັນທີກວດສອບບິນສຳເລັດ",value:"confirmed_payment_at"}],l=(t=[])=>{const e=[];for(const a of t)e.push({id:a.id,name:`${a.name} (${Intl.NumberFormat().format(a.price)} ກີບ)`});return e},u=[{value:"",text:"ທັງໝົດ"},{value:"can",text:"ເກັບໄດ້"},{value:"not",text:"ເກັບບໍ່ໄດ້"}]},"875d":function(t,e,a){"use strict";a("42ec")},bffa:function(t,e,a){},de87:function(t,e,a){"use strict";a("bffa");var s=a("741f"),n=a("b83e"),r=a("87fc");e["a"]=Object(r["a"])(n["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(s["h"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},e550:function(t,e,a){"use strict";a.r(e);var s=a("a125"),n=a("642b"),r=a("c1a61"),c=a("f046"),i=a("b325"),o=a("a6a9"),l=a("e02b"),u=a("ba9d"),d=a("cf97"),h=a("e6e5"),m=a("3bc0"),f=a("b502"),p=a("e205"),_=a("8b85"),v=a("e862"),g=a("489f"),b=a("fd5c"),y=a("de87"),x=a("f7fb"),k=a("007b"),S=a("088d"),C=a("cc3d"),D=function(){var t=this,e=t._self._c;return e(u["a"],[e(g["a"],{staticClass:"mb-n6"},[e(l["a"],{attrs:{cols:""}},[e(r["a"],{staticClass:"btn-primary elevation-0",on:{click:t.choseCustomer}},[e(m["a"],[t._v("mdi-plus")]),t._v(" ເພີ່ມໃນແອັບລູກຄ້າ ")],1)],1),e(l["a"],{attrs:{cols:""}},[e(v["a"],{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(C["a"],t._g(t._b({attrs:{label:"ເດືອນ",readonly:"",outlined:"",dense:"",clearable:""},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}},"v-text-field",s,!1),a))]}}]),model:{value:t.start_menu,callback:function(e){t.start_menu=e},expression:"start_menu"}},[e(d["a"],{attrs:{type:"month"},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}})],1)],1),e(l["a"],{attrs:{cols:""}},[e(b["a"],{attrs:{outlined:"",dense:"",items:t.paymentStatus,"item-text":t.getBillingStatus,"item-value":"name",label:"ສະຖານະການຊຳລະ",multiple:"",clearable:""},model:{value:t.selectedPaymentStatus,callback:function(e){t.selectedPaymentStatus=e},expression:"selectedPaymentStatus"}})],1)],1),e(g["a"],[e(l["a"],[e(C["a"],{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-identifier",label:"ໄອດີການເກັບ...",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.fetchSearch()}},model:{value:t.searchID,callback:function(e){t.searchID=e},expression:"searchID"}})],1),e(l["a"],[e(C["a"],{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-identifier",label:"ໄອດີບິນ...",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.fetchSearch()}},model:{value:t.searchIDBill,callback:function(e){t.searchIDBill=e},expression:"searchIDBill"}})],1),e(l["a"],[e(C["a"],{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-account",label:"ຊື່, ນາມສະກຸນ...",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.fetchSearch()}},model:{value:t.searchName,callback:function(e){t.searchName=e},expression:"searchName"}})],1),e(l["a"],[e(C["a"],{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-phone",label:"ເບີໂທ",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.fetchSearch()}},model:{value:t.searchPhone,callback:function(e){t.searchPhone=e},expression:"searchPhone"}})],1)],1),e(g["a"],[e(S["a"],t._l(t.collectStatuses,(function(a){return e(k["a"],{key:a.en,attrs:{color:"red"},on:{click:function(e){t.selectedStatus=a.en}}},[e(n["a"],{attrs:{color:t.getStatusColor(a.en),content:t.getCountByStatus(a.en)}},[t._v(" "+t._s(a.la)+" ")])],1)})),1)],1),e(g["a"],[e(c["a"],[e(i["c"],[t._v(" ເກັບຂີເຫື້ຍອພິເສດ ("+t._s(t.pagination.total)+") "),e(h["a"],{staticClass:"mx-4",attrs:{vertical:""}}),e(x["a"])],1),e(i["b"],[e(y["a"],{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",["requested"==t.selectedStatus?e("th",{staticClass:"text-left"},[t._v(" ອະນຸມັດ ")]):t._e(),e("th",{staticClass:"text-left"},[t._v(" ໄອດີການເກັບ ")]),e("th",{staticClass:"text-left"},[t._v(" ບິນ ")]),e("th",{staticClass:"text-left"},[t._v(" ລູກຄ້າ ")]),e("th",{staticClass:"text-left"},[t._v(" ເບີໂທ ")]),e("th",{staticClass:"text-left"},[t._v(" ເລລາລົງເກັບ ")]),e("th",{staticClass:"text-left"},[t._v(" ຄົນຂັບ ")]),e("th",{staticClass:"text-left"},[t._v(" ສະຖານະບໍລິການ ")]),e("th",{staticClass:"text-left"},[t._v(" ຜູ້ຮ້ອງຂໍ ")]),e("th",{staticClass:"text-left"},[t._v(" ໄອດີບິນ ")]),e("th",{staticClass:"text-left"},[t._v(" ຄ່າບໍລິການ ")]),e("th",{staticClass:"text-left"},[t._v(" ລວມທັງໝົດ ")]),e("th",{staticClass:"text-left",staticStyle:{width:"280px"}},[t._v(" ລາຍລະອຽດ ")]),e("th",{staticClass:"text-left"},[t._v(" ຮູບສະຖານທີ່ ")]),e("th",{staticClass:"text-left"},[t._v(" ຮູບຂີ້ເຫື້ຍອ ")]),e("th",{staticClass:"text-left"})])]),e("tbody",t._l(t.collections,(function(a,n){return e("tr",{key:n},["requested"==t.selectedStatus?e("td",[e(v["a"],{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:n}){return[t.canApproved(a)?e(r["a"],t._g(t._b({attrs:{color:"green",dark:""}},"v-btn",n,!1),s),[t._v(" ອະນຸມັດ ")]):t._e()]}}],null,!0)},[e(f["a"],[e(p["a"],[e(_["d"],{on:{click:function(e){return t.approve(a)}}},[t._v(" ຢືນຢັນການອະນຸມັດ ")])],1)],1)],1)],1):t._e(),e("td",[t._v(" "+t._s(a.display_id)+" ")]),e("td",[a.billing?e("div",[t._v(" "+t._s(a.billing.content)+" ")]):t._e()]),e("td",[t._v(t._s(a.name)+" "+t._s(a.surname))]),e("td",[t._v(t._s(a.phone))]),e("td",[t._v(" "+t._s(a.date)+" ")]),e("td",[a.driver?e(g["a"],[e(l["a"],[e("div",[t._v(t._s(a.driver.name+" "+a.driver.surname+" "+a.driver.vehicle.car_id))])]),e(l["a"],[e(m["a"],{on:{click:function(e){return t.editDriver(a.id)}}},[t._v(" mdi-pencil ")])],1)],1):e(r["a"],{attrs:{color:"blue",dark:""},on:{click:function(e){return t.editDriver(a.id)}}},[t._v(" ເລືອກຄົນຂັບ ")])],1),e("td",[a.collect_status?e("div",[e(o["a"],{attrs:{label:"",color:t.getStatusColor(a.collect_status),dark:""}},[t._v(" "+t._s(t.getCollectStatus(a.collect_status))+" ")])],1):t._e()]),e("td",{staticStyle:{width:"380px"}},[a.requested_by?e("div",[t._v(" "+t._s(a.requested_by.name)+" ")]):t._e()]),e("td",{staticStyle:{width:"380px"}},[t._v(" "+t._s(a.billing?a.billing.billing_display_id:"")+" ")]),e("td",[t._v(t._s(Intl.NumberFormat().format(a.billing?a.billing.sub_total:0)))]),e("td",[t._v(t._s(Intl.NumberFormat().format(a.billing?a.billing.total:0)))]),e("td",{staticStyle:{width:"380px"}},[t._v(" "+t._s(a.description)+" ")]),e("td",{staticStyle:{width:"380px"}},t._l(a.image_collect_locations,(function(a,n){return e(s["a"],{key:n,attrs:{size:"36px"}},[a.url?e("img",{attrs:{src:a.url}}):t._e()])})),1),e("td",{staticStyle:{width:"380px"}},t._l(a.image_collecteds,(function(a,n){return e(s["a"],{key:n,attrs:{size:"36px"}},[a.url?e("img",{attrs:{src:a.url}}):t._e()])})),1),e("td",[e(v["a"],{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(m["a"],t._g(t._b({staticClass:"mr-2",attrs:{color:"primary",dark:"",medium:""}},"v-icon",s,!1),a),[t._v(" mdi-dots-vertical ")])]}}],null,!0)},[e(f["a"],[e(p["a"],{attrs:{link:""},on:{click:function(e){return t.viewPage(a.id)}}},[e(_["d"],[e(m["a"],{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-eye ")]),t._v(" ລາຍລະອຽດ ")],1)],1),e(p["a"],{attrs:{link:""},on:{click:function(e){return t.editPage(a.id)}}},[e(_["d"],[e(m["a"],{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-pencil ")]),t._v(" ແກ້ໄຂ ")],1)],1),e(p["a"],{attrs:{link:""},on:{click:function(e){return t.viewBill(a.billing.id)}}},[e(_["d"],[e(m["a"],{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-cash ")]),t._v(" ບິນ ")],1)],1)],1)],1)],1),t.canDelete(a)?e("td",[e(v["a"],{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(m["a"],t._g(t._b({staticClass:"mr-2",attrs:{color:"red",dark:"",medium:""}},"v-icon",s,!1),a),[t._v(" mdi-delete ")])]}}],null,!0)},[e(f["a"],[e(p["a"],{attrs:{link:""},on:{click:function(e){return t.deleteEvent(a.id)}}},[e(_["d"],[e(m["a"],{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-delete ")]),t._v(" ຢືນຢັນການລືບ ")],1)],1)],1)],1)],1):t._e()])})),0)]},proxy:!0}])}),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1),e("ModalAdd",[[e(c["a"],[e(i["c"],[e("p",[t._v("ຊຳລະຄ່າຂີ້ເຫື້ຍອ "+t._s(t.payment.name)+" "+t._s(t.payment.surname))])]),e(i["b"],[e(i["a"],[e(x["a"]),e(r["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeAddModal()}}},[t._v(" Close ")]),e(r["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.createPage()}}},[t._v(" ເພີ່ມທົ່ວໄປ ")]),e(r["a"],{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.Payment()}}},[t._v(" Pay ")])],1)],1)],1)]],2)],1)},$=[],w=(a("04c6"),a("a047"),a("6ece")),j=a("54da"),E=a("22aa"),O=a("7660"),P={name:"Customer",title(){return"Vientiane Waste Co-Dev|"+this.title},data(){return{title:"Collection",start_menu:!1,collectStatuses:O["f"],selectedStatus:"requested",month:this.$store.getters["auth/getLastMonthEvent"],countStatus:[{collect_status:"requested",count_status:0},{collect_status:"approved",count_status:0},{collect_status:"rejected",count_status:0},{collect_status:"collected",count_status:0},{collect_status:"collect_confirm",count_status:0},{collect_status:"collect_reject",count_status:0}],collections:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:100,search:"",oldVal:"",server_errors:{},selectedCollectionStatus:[],summaryData:{},collectionStatus:[{id:1,name:"requested"},{id:2,name:"rejected"},{id:3,name:"approved"},{id:4,name:"collected"},{id:5,name:"collect_confirm"},{id:5,name:"collect_reject"}],selectedPaymentStatus:[],paymentStatus:[{id:1,name:"created"},{id:2,name:"approved"},{id:3,name:"to_confirm_payment"},{id:4,name:"rejected"},{id:5,name:"success"}],user:{},item:{},searchName:"",searchPhone:"",searchID:"",searchIDBill:"",image:"",imageUrl:"",payment_method:"",paymentType:"",confirmType:"",paymentDialog:!1,rejects:[],reject_reason_id:"",description:"",paymentTypeRule:[t=>!!t||"Name is required"],payment:{},confirm:{},drivers:[],headers:[{text:"ລູກຄ້າ",value:"surname"},{text:"ເບີໂທ",value:"phone",sortable:!1},{text:"ບ້ານ",value:"village.name",sortable:!1},{text:"ສ່ວນຫຼຸດ",value:"discount",sortable:!1},{text:"ຄ່າບໍລິການ",value:"sub_total",align:"center",sortable:!1},{text:"ລວມທັງໝົດ",value:"total",align:"center",sortable:!1},{text:"ຄົນຂັບ",value:"driver",align:"center",sortable:!1},{text:"ສະຖານະການບໍລິການ",value:"collect_status",align:"center"},{text:"ສະຖານະການຊຳລະ",value:"payment_status",align:"center",width:"200px"},{text:"Image",value:"media",width:"350px"},{text:"",value:"actions",sortable:!1},{text:"",value:"delete",sortable:!1}]}},computed:{lastMonthEvent(){return this.$store.getters["auth/getLastMonthEvent"]}},watch:{month(t){this.$store.dispatch("auth/saveLastMonthEvent",t)},lastMonthEvent(){this.fetchData(),this.fetchCountData()},selectedPaymentStatus(){this.pagination.current_page="",this.fetchData(),this.fetchCountData()},selectedCollectionStatus(){this.pagination.current_page="",this.fetchData(),this.fetchCountData()},search(t){this.pagination.current_page="",""==t&&(this.fetchData(),this.fetchCountData())},selectedStatus(){this.pagination.current_page="",this.fetchData(),this.fetchCountData()},start_date(){this.server_errors.start_month=""},image(){this.server_errors.image=""}},created(){this.fetchData(),this.fetchCountData(),this.fetchDriver()},methods:{approve(t){const e=new FormData;e.append("name",t.name),e.append("surname",t.surname),e.append("village_id",t.village_id),e.append("lat",t.lat),e.append("lng",t.lng),e.append("phone",t.phone),e.append("date",t.date),e.append("total",t.billing.total),t.driver_id&&e.append("driver_id",t.driver_id),e.append("collect_status","approved"),e.append("_method","PUT"),this.$store.commit("Loading_State",!0),this.$axios.post("v2/collection-event/"+t.id,e,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message}),this.fetchData(),this.fetchCountData()},300)}).catch(t=>{if(this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message}),t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}this.$store.commit("Loading_State",!1),this.fetchData()})},canApproved(t){return t.billing.total>0&&"requested"==t.collect_status&&t.driver},deleteEvent(t){this.$store.commit("Loading_State",!0),this.$axios.delete("v2/collection-event/"+t).then(t=>{200==t.data.code&&(this.$store.commit("Loading_State",!1),setTimeout(()=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})},300),this.fetchData(),this.fetchCountData())}).catch(t=>{if(this.$store.commit("Loading_State",!1),t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}})},getCountByStatus(t){const e=this.countStatus.find(e=>e.collect_status==t);return e?e.count_status:0},getStatusColor(t){const e=this.collectStatuses.find(e=>e.en==t);return e?e.color:""},canDelete(t){let e=!1;for(const n of JSON.parse(this.$store.getters["auth/roles"]))if("super_admin"==n.name){e=!0;break}const a=["created","approved"],s=["requested","approved"];return e&&-1!=s.indexOf(t.collect_status)&&-1!=a.indexOf(t.billing.status)},getCollectStatus(t){return Object(E["c"])(t)},getFilterCollectStatus(t){return Object(E["c"])(t.name)},getBillingStatus(t){return Object(E["d"])(t.name)},onFileChange(t){const e=t.target,a=t.target.files[0];this.image=e.files[0],this.imageUrl=URL.createObjectURL(a)},fetchData(){const t=this.lastMonthEvent?this.moment(this.lastMonthEvent).format("YYYY-MM"):null;this.$store.commit("Loading_State",!0),this.$axios.get("v2/collection-event",{params:Object(j["a"])([{page:this.pagination.current_page},{per_page:this.per_page},{collect_status:this.selectedStatus},{payment_status:this.selectedPaymentStatus},{filter_name:this.searchName},{filter_phone:this.searchPhone},{filter_id:this.searchID},{filter_id_bill:this.searchIDBill},{month:t},{order_by:"newest"}])}).then(t=>{200==t.data.code&&(this.$store.commit("Loading_State",!1),this.collections=t.data.data.data,this.pagination=t.data.data.pagination)}).catch(t=>{if(this.$store.commit("Loading_State",!1),t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}})},fetchCountData(){const t=this.lastMonthEvent?this.moment(this.lastMonthEvent).format("YYYY-MM"):null;this.$store.commit("Loading_State",!0),this.$axios.get("v2/collection-event-count",{params:Object(j["a"])([{payment_status:this.selectedPaymentStatus},{month:t},{collect_status:this.selectedStatus},{filter_name:this.searchName},{filter_phone:this.searchPhone},{filter_id:this.searchID},{filter_id_bill:this.searchIDBill}])}).then(t=>{200==t.data.code&&(this.$store.commit("Loading_State",!1),this.countStatus=t.data.data)}).catch(t=>{if(this.$store.commit("Loading_State",!1),t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}})},fetchReject(){this.$axios.get("reject-reason").then(t=>{200==t.data.code&&(this.$store.commit("Loading_State",!1),this.rejects=t.data.data)}).catch(()=>{})},fetchDriver(){this.$axios.get("driver").then(t=>{200==t.data.code&&(this.$store.commit("Loading_State",!1),this.drivers=t.data.data)}).catch(t=>{console.log(t)})},closeAddModal(){this.paymentType="",this.$store.commit("modalAdd_State",!1)},createPage(){this.$router.push({name:"CreateCollectionEventInvoice"})},choseCustomer(){this.$router.push({name:"chose-customer",query:{redirect:"CreateCollectionEventInvoice"}})},editPage(t){this.$router.push({name:"EditCollectionEventInvoice",params:{id:t}})},editDriver(t){this.$router.push({name:"EditCollectionEventDriver",params:{id:t}})},viewPage(t){const e=this.$router.resolve({name:"EventInvoiceDetail",params:{id:t}});window.open(e.href,"_blank")},viewBill(t){const e=this.$router.resolve({name:"billing-detail",params:{id:t}});window.open(e.href,"_blank")},paymentConfirmModal(t){this.fetchReject(),this.confirm=t,this.paymentDialog=!0},closeConfirmModal(){this.paymentDialog=!1,this.confirmType=""},Search(){Object(w["a"])(this)},fetchSearch(){this.fetchData(),this.fetchCountData()},statusColor(t){return"active"==t?"success":"inactive"==t?"error":""}}},I=P,L=(a("875d"),a("4a4e")),M=Object(L["a"])(I,D,$,!1,null,null,null);e["default"]=M.exports},f401:function(t,e,a){var s=a("8db5"),n=a("2ab7");t.exports=function(t,e,a){return a.get&&s(a.get,e,{getter:!0}),a.set&&s(a.set,e,{setter:!0}),n.f(t,e,a)}}}]);
//# sourceMappingURL=chunk-0e5892b8.328c7e09.js.map