(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41fd7530"],{"2bfd":function(t,e,s){},"32e9":function(t,e,s){"use strict";s.r(e);var a=s("c6a6"),i=s("8212"),n=s("8336"),l=s("b0af"),o=s("99d9"),r=s("cc20"),c=s("62ad"),u=s("a523"),d=s("8fea"),h=s("2e4b"),m=s("ce7e"),p=s("132d"),_=s("e449"),g=s("0fd9"),f=s("b974"),v=s("b73d"),b=s("8654"),S=function(){var t=this,e=t._self._c;return e(u["a"],[e(g["a"],[e(c["a"],[e(g["a"],[e(c["a"],[e(_["a"],{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e(b["a"],t._g(t._b({attrs:{label:"ເລີ່ມວັນທີ",readonly:"",outlined:"",dense:"",clearable:""},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}},"v-text-field",a,!1),s))]}}]),model:{value:t.start_menu,callback:function(e){t.start_menu=e},expression:"start_menu"}},[e(h["a"],{model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}})],1)],1),e(c["a"],[e(_["a"],{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e(b["a"],t._g(t._b({attrs:{label:"ຫາວັນທີ",readonly:"",outlined:"",dense:"",clearable:""},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}},"v-text-field",a,!1),s))]}}]),model:{value:t.end_menu,callback:function(e){t.end_menu=e},expression:"end_menu"}},[e(h["a"],{model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}})],1)],1),e(c["a"],[e(a["a"],{attrs:{outlined:"",dense:"",items:t.districts,"item-text":"name","item-value":"id",label:"ເມືອງ",clearable:""},model:{value:t.selectedDistrict,callback:function(e){t.selectedDistrict=e},expression:"selectedDistrict"}})],1),e(c["a"],[e(a["a"],{attrs:{outlined:"",dense:"",items:t.villages,"item-text":"name","item-value":"id",label:"ບ້ານ",multiple:"",clearable:""},model:{value:t.selectedVillage,callback:function(e){t.selectedVillage=e},expression:"selectedVillage"}})],1),e(c["a"],[e(f["a"],{attrs:{outlined:"",dense:"",items:t.status,"item-text":"name","item-value":"name",label:"ສະຖານະ",multiple:"",clearable:""},model:{value:t.selectedStatus,callback:function(e){t.selectedStatus=e},expression:"selectedStatus"}})],1),e(c["a"],[e(f["a"],{attrs:{outlined:"",dense:"",items:t.can_collects,"item-text":"name","item-value":"value",label:"ເກັບເລີຍໄດ້ບໍ່",clearable:""},model:{value:t.selectedCanCollect,callback:function(e){t.selectedCanCollect=e},expression:"selectedCanCollect"}})],1)],1),e(g["a"],{staticClass:"my-n4"},[e(c["a"],[e(b["a"],{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"Search",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e(c["a"],[e(f["a"],{attrs:{outlined:"",dense:"",items:t.customerStatus,"item-text":"name","item-value":"value",label:"ສະຖານະແຜນ",multiple:"",clearable:""},model:{value:t.selectedCustomerStatus,callback:function(e){t.selectedCustomerStatus=e},expression:"selectedCustomerStatus"}})],1),e(c["a"],[e(f["a"],{attrs:{outlined:"",dense:"",items:t.costs,"item-text":"name","item-value":"value",label:"ປະເພດບໍລິການ",multiple:"",clearable:""},model:{value:t.selectedCost,callback:function(e){t.selectedCost=e},expression:"selectedCost"}})],1)],1),e(g["a"],[e(c["a"],[e("SaleAdmin",{attrs:{label:"ເລືອກຜູ້ສ້າງ"},on:{change:function(e){return t.fetchData()}},model:{value:t.selectedSale,callback:function(e){t.selectedSale=e},expression:"selectedSale"}})],1)],1)],1),e(c["a"],{attrs:{cols:"6"}},[e(g["a"],[e(c["a"],[e(l["a"],{attrs:{outlined:"",elevation:"5"}},[e(u["a"],{staticClass:"spacing-playground pa-1",attrs:{fluid:""}},[e(g["a"],[e(c["a"],[e("div",{staticClass:"px-4"},[e(r["a"],{staticClass:"text-caption",attrs:{color:"primary",dark:""}},[e(p["a"],[t._v("mdi-domain")]),t._v(" ລວມຫົວໜ່ວຍທຸລະກິດ ")],1),e(m["a"],{staticClass:"my-4"}),e("div",{staticClass:"text-caption"},[t._v(" ຫົວໜ່ວຍທຸລະກິດ ")]),e("p",{staticClass:"text-h5"},[t._v(" "+t._s(Intl.NumberFormat().format(t.pagination.total))+" ")])],1)]),e(c["a"],[e(n["a"],{staticClass:"btn-primary",attrs:{color:"green",loading:t.loading,disabled:t.loading,width:"100%",height:"100%"},on:{click:t.exportData}},[t._v(" Export ")])],1)],1)],1)],1)],1)],1)],1)],1),e(g["a"],[e(g["a"],[e(c["a"],[e(l["a"],{attrs:{outlined:""}},[e(o["b"],[e(g["a"],[e(c["a"],[t._v(" ລວມບິນທັງໝົດ ")])],1),e(g["a"],[e(c["a"],[e("RowSection",{attrs:{cards:t.allMonths}})],1)],1),e(g["a"],[e(c["a"],[e(_["a"],{attrs:{"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e(b["a"],t._g(t._b({attrs:{label:"ເດືອນໃນຫົວບິນ",readonly:"",outlined:"",dense:"",color:"cyan","append-icon":"mdi-calendar",clearable:""},model:{value:t.selected_month,callback:function(e){t.selected_month=e},expression:"selected_month"}},"v-text-field",a,!1),s))]}}]),model:{value:t.month_menu,callback:function(e){t.month_menu=e},expression:"month_menu"}},[e(h["a"],{attrs:{type:"month"},model:{value:t.selected_month,callback:function(e){t.selected_month=e},expression:"selected_month"}})],1)],1)],1),t._l(t.sumData.months,(function(s){return e(g["a"],{key:s.month},[e(c["a"],{class:t.selected_month==s.month.substring(0,7)?"teal":"",attrs:{cols:"2"}},[e("span",[e(r["a"],{attrs:{outlined:"",color:"cyan lighten-2",dark:""}},[e(p["a"],[t._v("mdi-calendar")]),t._v(" "+t._s(s.month.substr(0,7)))],1)],1)]),e(c["a"],{class:t.selected_month==s.month.substring(0,7)?"teal":""},[e("RowSection",{attrs:{cards:t.getCardData(s)}})],1)],1)}))],2)],1)],1)],1)],1),e(g["a"],[e(c["a"],[e(l["a"],[e(l["a"],{attrs:{flat:""}},[e(o["c"],[e(v["a"],{attrs:{label:"ມີບິນເທົ່ານັ້ນ"},on:{change:function(e){return t.fetchData()}},model:{value:t.only_billings,callback:function(e){t.only_billings=e},expression:"only_billings"}})],1),e(o["b"],[e(d["a"],{attrs:{headers:t.headers,items:t.customers,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.media",fn:function({item:s}){return t._l(s.media,(function(s,a){return e(i["a"],{key:a,attrs:{size:"36px"}},[s.thumb?e("img",{attrs:{src:s.thumb}}):t._e()])}))}},{key:"item.cost_by",fn:function({item:s}){return[e("div",[t._v(t._s(t.costBy(s.cost_by)))])]}},{key:"item.status",fn:function({item:s}){return[e(r["a"],{attrs:{label:"",color:t.statusColor(s.user.status)}},[t._v(" "+t._s(s.user.status)+" ")])]}},{key:"item.roles",fn:function({item:s}){return[e("div",t._l(s.roles,(function(s,a){return e("span",{key:a},[t._v(t._s(s.name)+",")])})),0)]}},{key:"item.permissions",fn:function({item:s}){return[e("div",t._l(s.permissions,(function(s,a){return e("span",{key:a},[e("span",[t._v(t._s(s.name)+",")])])})),0)]}},{key:"item.actions",fn:function({item:s}){return[e(p["a"],{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.viewPage(s.id)}}},[t._v(" mdi-eye ")]),s.user.billings.length>0?e(p["a"],{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.viewCustomerBill(s.id)}}},[t._v(" mdi-receipt-text ")]):t._e()]}}])}),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1)],1)],1)],1)},y=[],x=s("6eceb"),C=s("54da"),I=s("ccd1"),D=s("398d"),k={name:"Customer",title(){return"Vientiane Waste Co-Dev|Report Customer"},components:{RowSection:D["a"],SaleAdmin:I["a"]},data(){return{selectedSale:"",only_billings:!1,firstLoad:!0,selected_month:this.$route.query.month||(new Date).toISOString().substr(0,7),start_date:"",end_date:"",month_menu:!1,start_menu:!1,end_menu:!1,customers:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:100,search:"",oldVal:"",districts:[],selectedDistrict:"",villages:[],selectedVillage:[],selectedStatus:[],sumData:{},status:[{id:1,name:"active"},{id:2,name:"inactive"},{id:3,name:"trial"}],selectedCanCollect:"",can_collects:[{id:1,name:"ເກັບໄດ້",value:"1"},{id:2,name:"ເກັບບໍໄດ້",value:"0"}],selectedCustomerStatus:[],customerStatus:[{id:1,value:"calendar",name:"ຍັງບໍ່ມີແຜນເດີນລົດ"},{id:2,value:"route_plan",name:"ຍັງບໍ່ມີເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ"}],selectedCost:[],costs:[{id:1,value:"container",name:"ຄອນເທັນເນີ"},{id:2,value:"fix_cost",name:"ທຸລະກິດເປັນຖ້ຽວ"},{id:3,value:"chartered",name:"ມອບເໝົາ"},{id:4,value:"bag",name:"ບໍລິມາດ"},{id:5,value:"32km",name:"ຫຼັກ32"},{id:6,value:"infect",name:"ຂີ້ເຫຍື້ອຕິດເຊື້ອ"}],headers:[{text:"ໄອດີ",value:"customer_id"},{text:"ຊື່",value:"company_name"},{text:"Phone",value:"user.phone",sortable:!1},{text:"ທີ່ຢູ່",value:"district.name",sortable:!1},{text:"ປະເພດບໍລິການ",value:"cost_by_la"},{text:"ມູນຄ່າສັນຍາ",value:"fix_cost"},{text:"ເລີ່ມບໍລິການ",value:"start_month",sortable:!1},{text:"ຜູ້ສ້າງ",value:"customer_activity.causer.full_name"},{text:"Created",value:"created_at",sortable:!1},{text:"ສະຖານະ",value:"status",sortable:!1},{text:"",value:"actions",sortable:!1}],toast:{value:!0,color:"success",msg:""},toast_error:{value:!0,color:"error",msg:"Something when wrong!"}}},computed:{params(){return Object(C["a"])([{page:this.pagination.current_page},{per_page:this.per_page},{without_month_info:!0},{only_billings:this.only_billings},{with_billings:!0},{with_created_user:!0},{created_by_id:this.selectedSale},{filter:this.search},{date_from:this.start_date},{date_end:this.end_date},{villages:this.selectedVillage},{statuses:this.selectedStatus},{can_collect:this.selectedCanCollect},{cost_by:this.selectedCost},{without:this.selectedCustomerStatus},{district_id:this.selectedDistrict},{month_bill:this.selected_month}])},allMonths(){var t,e,s,a,i,n,l,o,r,c,u,d;return[{status_la:"ລວມ",total:null===(t=this.sumData.all)||void 0===t||null===(e=t.total)||void 0===e?void 0:e.total,count_billing:null===(s=this.sumData.all)||void 0===s||null===(a=s.total)||void 0===a?void 0:a.count,bg_color:"blue",route:this.billRoute("","all")},{status_la:"ຈ່າຍແລ້ວ",total:null===(i=this.sumData.all)||void 0===i||null===(n=i.paid)||void 0===n?void 0:n.total,count_billing:null===(l=this.sumData.all)||void 0===l||null===(o=l.paid)||void 0===o?void 0:o.count,bg_color:"green",route:this.billRoute("","paid")},{status_la:"ຕິດໜີ້",total:null===(r=this.sumData.all)||void 0===r||null===(c=r.unpaid)||void 0===c?void 0:c.total,count_billing:null===(u=this.sumData.all)||void 0===u||null===(d=u.unpaid)||void 0===d?void 0:d.count,bg_color:"orange",route:this.billRoute("","unpaid")}]}},watch:{selected_month(){this.pagination.current_page="",this.fetchSum()},start_date(){this.pagination.current_page="",""!==this.end_date&&""!==this.start_date&&this.start_date>this.end_date&&(this.start_date=""),this.fetchData()},end_date(){this.pagination.current_page="",""!==this.end_date&&""!==this.start_date&&this.end_date<this.start_date&&(this.end_date=""),this.fetchData()},search(t){this.pagination.current_page="",""==t&&this.fetchData()},selectedVillage(){this.pagination.current_page="",this.fetchData()},selectedDistrict(){this.pagination.current_page="",this.fetchVillage(),this.fetchData()},selectedStatus(){this.pagination.current_page="",this.fetchData()},selectedCanCollect(){this.pagination.current_page="",this.fetchData()},selectedCustomerStatus(){this.pagination.current_page="",this.fetchData()},selectedCost(){this.pagination.current_page="",this.fetchData()},selectedSale(){this.firstLoad||this.fetchData()}},mounted(){this.fetchData(),this.fetchAddress()},methods:{fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("company",{params:this.params}).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.customers=t.data.data.data,this.pagination=t.data.data.pagination,this.month_menu=!1,this.start_menu=!1,this.end_menu=!1},300)}).catch(t=>{if(this.$store.commit("Loading_State",!1),this.month_menu=!1,this.start_menu=!1,this.end_menu=!1,t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,s]of Object.entries(e))this.server_errors[t]=s[0]}}).finally(()=>{this.firstLoad=!1,this.fetchSum()})},fetchSum(){this.$store.commit("Loading_State",!0),this.$axios.get("company-billing",{params:this.params}).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.sumData=t.data.data,this.month_menu=!1,this.start_menu=!1,this.end_menu=!1},300)}).catch(t=>{if(this.$store.commit("Loading_State",!1),this.month_menu=!1,this.start_menu=!1,this.end_menu=!1,t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,s]of Object.entries(e))this.server_errors[t]=s[0]}})},fetchAddress(){this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then(t=>{200==t.data.code&&setTimeout(()=>{this.address=t.data.data,this.address.map(t=>{this.districts=t.districts})},300)}).catch(()=>{})},fetchVillage(){this.$axios.get(`info/district/${this.selectedDistrict}/village`).then(t=>{200==t.data.code&&setTimeout(()=>{this.villages=t.data.data},300)}).catch(()=>{})},viewPage(t){const e={name:"ViewCompanyDetail",params:{id:t}};this.openRoute(e)},viewCustomerBill(t){const e={name:"Report-Billing-Customer",query:{customer_id:t,selectedCustomerType:"company"}};this.openRoute(e)},openRoute(t){const e=this.$router.resolve({...t});window.open(e.href)},Search(){Object(x["a"])(this)},statusColor(t){return"active"==t?"primary":"inactive"==t?"error":"info"},exportData(){this.loading=!0,this.$axios.post("export-company/",{params:this.params}).then(t=>{200==t.status&&(null!=t.data.data.download_link&&window.open(t.data.data.download_link),this.loading=!1)}).catch(()=>{this.$store.commit("Toast_State",this.toast_error),this.loading=!1})},costBy(t){return"container"==t?"ຄອນເທັນເນີ":"fix_cost"==t?"ທຸລະກິດເປັນຖ້ຽວ":"chartered"==t?"ມອບເໝົາ":"bag"==t?"ບໍລິມາດ":"infect"==t?"ຂີ້ເຫຍື້ອຕິດເຊື້ອ":"32km"==t?"ຫຼັກ32":t},getCardData(t){var e,s,a,i,n,l,o,r;return[{status_la:"ລວມ",total:null===(e=t.status.total)||void 0===e?void 0:e.total,count_billing:null===(s=t.status.total)||void 0===s?void 0:s.count,bg_color:"blue",route:this.billRoute(t.month,"all")},{status_la:"ຈ່າຍແລ້ວ",total:null===(a=t.status.paid)||void 0===a?void 0:a.total,count_billing:null===(i=t.status.paid)||void 0===i?void 0:i.count,bg_color:"green",route:this.billRoute(t.month,"paid")},{status_la:"ຕິດໜີ້",total:null===(n=t.status.unpaid)||void 0===n?void 0:n.total,count_billing:null===(l=t.status.unpaid)||void 0===l?void 0:l.count,bg_color:"orange",route:this.billRoute(t.month,"unpaid")},{status_la:"ບິນຍັງບໍ່ອອກ",total:null===(o=t.no_bill)||void 0===o?void 0:o.package_price,count_billing:null===(r=t.no_bill)||void 0===r?void 0:r.count_customers,bg_color:"red",route:this.billRoute(t.month,"noBill")}]},billRoute(t,e){const s={selectedCustomerType:"company",selectedVillage:this.selectedVillage,selectedDistrict:this.selectedDistrict,selectedDetails:this.selectedDetails,start_date:this.start_date,end_date:this.end_date,created_by:this.selectedSale};t&&(s.billMonth=t),e&&(s.showOne=e);const a=this.$router.resolve({name:"Report-Billing-Customer",query:s});return a}}},w=k,V=(s("5668"),s("2877")),$=Object(V["a"])(w,S,y,!1,null,null,null);e["default"]=$.exports},"398d":function(t,e,s){"use strict";var a=s("62ad"),i=s("0fd9"),n=function(){var t=this,e=t._self._c;return e(i["a"],t._l(t.cards,(function(t,s){return e(a["a"],{key:s},[e("MoneyCard",{attrs:{title:t.status_la,total:t.total,billing_count:t.count_billing,bg_color:t.bg_color,route:t.route,icon:t.icon,icon_color:t.icon_color}})],1)})),1)},l=[],o=s("b0af"),r=s("99d9"),c=s("cc20"),u=s("132d"),d=function(){var t=this,e=t._self._c;return e(o["a"],{staticStyle:{height:"100px"},attrs:{outlined:""},on:{click:function(e){return t.openNewTab(t.route)}}},[e(r["c"],{staticClass:"d-flex justify-between w-full",staticStyle:{position:"relative"}},[t.icon?e(c["a"],{staticClass:"text-caption",attrs:{color:t.icon_color,dark:""}},[e(u["a"],{attrs:{"x-small":!0}},[t._v(" "+t._s(t.icon)+" ")]),e("div",{staticClass:"ml-1",attrs:{color:t.icon_color}},[t._v(" "+t._s(t.title)+" ")])],1):e(c["a"],{staticClass:"text-caption",attrs:{color:t.bg_color,dark:""}},[t._v(" "+t._s(t.title)+" ")]),null!=t.billing_count&&""!=t.billing_count&&void 0!=t.billing_count?e(c["a"],{staticStyle:{position:"absolute",right:"10px"},attrs:{color:t.bg_color,outlined:""}},[t._v(" "+t._s(Intl.NumberFormat().format(t.billing_count))+" ບິນ ")]):t._e()],1),t.total?e(r["b"],[e("p",{staticClass:"text-h5"},[t._v(" "+t._s(Intl.NumberFormat().format(t.total))+" K ")])]):t._e()],1)},h=[],m={props:["title","billing_count","total","bg_color","route","icon","icon_color"],data(){return{}},created(){},beforeUpdate(){this.$store.commit("Loading_State",!0)},updated(){this.$store.commit("Loading_State",!1)},methods:{getColor(t){return"background-color: "+t},openNewTab(t){t&&window.open(t.href,"_blank")}}},p=m,_=s("2877"),g=Object(_["a"])(p,d,h,!1,null,null,null),f=g.exports,v={components:{MoneyCard:f},props:["cards"],data(){return{}}},b=v,S=Object(_["a"])(b,n,l,!1,null,null,null);e["a"]=S.exports},"54da":function(t,e,s){"use strict";e["a"]=function(t=[]){const e={};for(const s of t)1==Object.keys(s).length&&s[Object.keys(s)]&&(e[Object.keys(s)]=s[Object.keys(s)]);return e}},5668:function(t,e,s){"use strict";s("b8b7")},"6eceb":function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));const a=t=>{""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},"9d01":function(t,e,s){},b73d:function(t,e,s){"use strict";s("ec29"),s("9d01");var a=s("fe09"),i=s("c37a"),n=s("c3f0"),l=s("0789"),o=s("490a"),r=s("80d2");e["a"]=a["a"].extend({name:"v-switch",directives:{Touch:n["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...e}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(l["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(o["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(t){(t.keyCode===r["y"].left&&this.isActive||t.keyCode===r["y"].right&&!this.isActive)&&this.onChange()}}})},b8b7:function(t,e,s){},c6a6:function(t,e,s){"use strict";s("2bfd");var a=s("b974"),i=s("8654"),n=s("d9f7"),l=s("80d2");const o={...a["b"],offsetY:!0,offsetOverflow:!0,transition:!1};e["a"]=a["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,s)=>s.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:a["a"].options.props.menuProps.type,default:()=>o},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>{const e=Object(l["r"])(t,this.itemText),s=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=a["a"].options.computed.$_menuProps.call(this);return t.contentClass=("v-autocomplete__content "+(t.contentClass||"")).trim(),{...o,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue)))},listData(){const t=a["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){if(t!==e){if(!this.autoSelectFirst){const s=e[this.$refs.menu.listIndex];s?this.setMenuIndex(t.findIndex(t=>t===s)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&t.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===l["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===l["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==l["y"].backspace&&t!==l["y"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const a=this.selectedItems.length,i=t!==a-1?t:t-1,n=this.selectedItems[i];n?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=i},clearableCallback(){this.internalSearch=null,a["a"].options.methods.clearableCallback.call(this)},genInput(){const t=i["a"].options.methods.genInput.call(this);return t.data=Object(n["a"])(t.data,{attrs:{"aria-activedescendant":Object(l["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=a["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?a["a"].options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,s=e.value;e.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[l["y"].home,l["y"].end].includes(e)||a["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){a["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){a["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){a["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,s;if(-1===this.selectedIndex)return;const a=this.selectedItems[this.selectedIndex],i=this.getText(a);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",i),null===(s=t.clipboardData)||void 0===s||s.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}})},ccd1:function(t,e,s){"use strict";var a=s("c6a6"),i=function(){var t=this,e=t._self._c;return e(a["a"],{attrs:{items:t.sales,label:t.label,dense:"","item-text":"name","item-value":"id",outlined:""},model:{value:t.selectedSale,callback:function(e){t.selectedSale=e},expression:"selectedSale"}})},n=[],l=(s("14d9"),s("54da")),o={props:{label:{default:"ເລືອກເຊວທີ່ກ່ຽວຂ້ອງ",type:String},firstSale:{default:""}},data(){return{salesData:[],selectedSale:""}},computed:{sales(){const t=[];for(const e of this.salesData){let s="";e.name&&(s+=e.name+" "),e.phone&&(s+=e.phone+" "),e.emp_name&&(s+=e.emp_name+" "),e.emp_surname&&(s+=e.emp_surname+" "),e.emp_card_id&&(s+=e.emp_card_id),t.push({name:s,id:e.id})}return t}},watch:{selectedSale(){this.$emit("input",this.selectedSale)}},async created(){await this.fetchSale(),this.firstSale&&(this.selectedSale="number"!==typeof this.firstSale?Number.parseInt(this.firstSale):this.selectedSale)},methods:{async fetchSale(){this.$store.commit("Loading_State",!0);const t=await this.$axios.get("user-setting/user",{params:Object(l["a"])([{roles:["sale","sale_admin","sale_partner","sale_editor"]},{order_by:"newest"}])}).catch(t=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"})});this.$store.state.isLoading&&(this.salesData=t.data.data,this.$store.commit("Loading_State",!1))}}},r=o,c=s("2877"),u=Object(c["a"])(r,i,n,!1,null,null,null);e["a"]=u.exports},ec29:function(t,e,s){},fe09:function(t,e,s){"use strict";s("14d9");var a=s("c37a"),i=s("5607"),n=s("2b0e"),l=n["a"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),o=s("8547"),r=s("58df");function c(t){t.preventDefault()}e["a"]=Object(r["a"])(a["a"],l,o["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=a["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:c},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const s=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===s&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}})}}]);
//# sourceMappingURL=chunk-41fd7530.f2b3bca0.js.map