(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29db9ece"],{"0fdf":function(e,t,a){},2734:function(e,t,a){},"54da":function(e,t,a){"use strict";t["a"]=function(e){const t={};if(!e[0]){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(void 0!==e[t]&&null!==e[t]&&""!==e[t]||delete e[t]);return e}for(const a of e)1==Object.keys(a).length&&a[Object.keys(a)]&&(t[Object.keys(a)]=a[Object.keys(a)]);return t}},"565c":function(e,t,a){"use strict";a("558b");var s=a("9c0c"),i=a("68c4"),n=a("944a");t["a"]=Object(s["a"])(i["a"],Object(n["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",t=>{this.$set(this.errorBag,e._uid,t)},{immediate:!0}),a={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=e.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(e._uid)||(a.valid=t(e)))}):a.valid=t(e),a},validate(){return 0===this.inputs.filter(e=>!e.validate(!0)).length},reset(){this.inputs.forEach(e=>e.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(e=>e.resetValidation()),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find(t=>t._uid===e._uid);if(!t)return;const a=this.watchers.find(e=>e._uid===t._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(e=>e._uid!==t._uid),this.inputs=this.inputs.filter(e=>e._uid!==t._uid),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},"6ece":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));const s=e=>{""!==e.search?""!==e.oldVal?e.oldVal!==e.search&&(e.oldVal=e.search,e.pagination.current_page=1,e.fetchData()):(""!==e.search&&(e.pagination.current_page=1,e.fetchData()),e.oldVal=e.search):e.oldVal=""}},7660:function(e,t,a){"use strict";a.d(t,"g",(function(){return s})),a.d(t,"c",(function(){return i})),a.d(t,"h",(function(){return n})),a.d(t,"e",(function(){return r})),a.d(t,"f",(function(){return l})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return c})),a.d(t,"d",(function(){return d}));a("558b");const s=function(e){switch(e){case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ເປັນຖ້ຽວ";case"chartered":return"ມອບເໝົາ";case"bag":return"ບໍລິມາດ";case"infect":return"ຂີ້ເຫຍື້ອຕິດເຊື້ອ";case"32km":return"ຫຼັກ32";default:return e}},i=[{en:"container",la:"ຄອນເທນເນີ"},{en:"fix_cost",la:"ເປັນຖ້ຽວ"},{en:"chartered",la:"ມອບເໝົາ"},{en:"bag",la:"ບໍລິມາດ"},{en:"infect",la:"ຂີ້ເຫຍື້ອຕິດເຊື້ອ"},{en:"32km",la:"ຫຼັກ32"}],n=function(e){switch(e){case"company":return"ຫົວໜ່ວຍທຸລະກິດ";case"home":return"ຄົວເຮືອນ";default:return e}},r=function(e){switch(e){case"bag":case"chartered":case"32km":case"infect":return"ຖົງ";case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ຖ້ຽວ";default:return e}},l=[{en:"requested",la:"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ",color:"#34495e"},{en:"rejected",la:"ປະຕິເສດລູກຄ້າແລ້ວ",color:"#eff3f5"},{en:"approved",la:"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ",color:"#54a0ff"},{en:"collected",la:"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ",color:"#c1c40f"},{en:"collect_confirm",la:"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ",color:"#30cb83"},{en:"collect_reject",la:"ລູກຄ້າປະຕິເສດການເກັບ",color:"#e74c3c"}],o=[{text:"ວັນທີຈ່າຍບິນ",value:"paided_at"},{text:"ວັນທີສ້າງບິນ",value:"created_at"},{text:"ວັນທີອະນຸມັດບິນ",value:"approved_at"},{text:"ວັນທີກວດສອບບິນສຳເລັດ",value:"confirmed_payment_at"}],c=(e=[])=>{const t=[];for(const a of e)t.push({id:a.id,name:`${a.name} (${Intl.NumberFormat().format(a.price)} ກີບ)`});return t},d=[{value:"",text:"ທັງໝົດ"},{value:"can",text:"ເກັບໄດ້"},{value:"not",text:"ເກັບບໍ່ໄດ້"}]},"8f8c":function(e,t,a){"use strict";a.r(t);var s=a("a892"),i=a("c2f4"),n=a("07b0"),r=a("db5a"),l=a("0f35"),o=a("28e8"),c=a("1da9"),d=a("1789"),u=a("0cb6"),h=a("d415"),m=a("6733"),p=a("565c"),f=a("1d7d"),_=a("15e9"),v=a("cf5d"),g=a("bf41"),b=a("fde7"),x=a("d62f"),y=a("26bf"),I=a("cfe2"),S=a("9b44"),k=function(){var e=this,t=e._self._c;return t(d["a"],[t(x["a"],{staticClass:"mb-n6"},[t(c["a"],[t(n["a"],{staticClass:"btn-primary",on:{click:function(t){return e.createPage()}}},[t(f["a"],[e._v("mdi-plus")])],1)],1),t(c["a"],[t(b["a"],{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:s}){return[t(S["a"],e._g(e._b({attrs:{label:"ເລີ່ມວັນທີ",readonly:"",outlined:"",dense:"",clearable:""},model:{value:e.start_date,callback:function(t){e.start_date=t},expression:"start_date"}},"v-text-field",s,!1),a))]}}]),model:{value:e.start_menu,callback:function(t){e.start_menu=t},expression:"start_menu"}},[t(h["a"],{model:{value:e.start_date,callback:function(t){e.start_date=t},expression:"start_date"}})],1)],1),t(c["a"],[t(b["a"],{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:s}){return[t(S["a"],e._g(e._b({attrs:{label:"ຫາວັນທີ",readonly:"",outlined:"",dense:"",clearable:""},model:{value:e.end_date,callback:function(t){e.end_date=t},expression:"end_date"}},"v-text-field",s,!1),a))]}}]),model:{value:e.end_menu,callback:function(t){e.end_menu=t},expression:"end_menu"}},[t(h["a"],{model:{value:e.end_date,callback:function(t){e.end_date=t},expression:"end_date"}})],1)],1),t(c["a"],[t(s["a"],{attrs:{outlined:"",dense:"",items:e.districts,"item-text":"name","item-value":"id",label:"ເມືອງ",clearable:""},model:{value:e.selectedDistrict,callback:function(t){e.selectedDistrict=t},expression:"selectedDistrict"}})],1),t(c["a"],[t(s["a"],{attrs:{outlined:"",dense:"",items:e.villages,"item-text":"name","item-value":"id",label:"ບ້ານ",multiple:"",clearable:""},model:{value:e.selectedVillage,callback:function(t){e.selectedVillage=t},expression:"selectedVillage"}})],1),t(c["a"],[t(y["a"],{attrs:{outlined:"",dense:"",items:e.status,"item-text":"name","item-value":"name",label:"ສະຖານະ",multiple:"",clearable:""},model:{value:e.selectedStatus,callback:function(t){e.selectedStatus=t},expression:"selectedStatus"}})],1)],1),t(x["a"],[t(c["a"],[t(y["a"],{attrs:{outlined:"",dense:"",items:e.customerStatus,"item-text":"name","item-value":"value",label:"ສະຖານະແຜນ",multiple:"",clearable:""},model:{value:e.selectedCustomerStatus,callback:function(t){e.selectedCustomerStatus=t},expression:"selectedCustomerStatus"}})],1),t(c["a"],[t(y["a"],{attrs:{outlined:"",dense:"",items:e.can_collects,"item-text":"name","item-value":"value",label:"ເກັບເລີຍໄດ້ບໍ່",clearable:""},model:{value:e.selectedCanCollect,callback:function(t){e.selectedCanCollect=t},expression:"selectedCanCollect"}})],1),t(c["a"],[t(y["a"],{attrs:{outlined:"",dense:"",items:e.costs,"item-text":"name","item-value":"value",label:"ປະເພດບໍລິການ",multiple:"",clearable:""},model:{value:e.selectedCost,callback:function(t){e.selectedCost=t},expression:"selectedCost"}})],1),t(c["a"],[t(y["a"],{attrs:{outlined:"",dense:"",items:e.favorite_dates,"item-text":"name","item-value":"name",label:"ມື້ບໍລິການ",multiple:""},model:{value:e.selectedFavoriteDate,callback:function(t){e.selectedFavoriteDate=t},expression:"selectedFavoriteDate"}})],1),t(c["a"],[t(S["a"],{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຄົ້ນຫາ",type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Search()}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),t("div",[t(r["a"],[t(l["c"],[e._v(" ຂໍ້ມູນຫົວໜ່ວຍທຸລະກິດ ("+e._s(e.pagination.total)+") "),t(m["a"],{staticClass:"mx-4",attrs:{vertical:""}}),t(I["a"])],1),t(l["b"],[t(u["a"],{attrs:{headers:e.headers,items:e.customers,search:e.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:e._u([{key:"item.media",fn:function({item:a}){return e._l(a.media,(function(a,s){return t(i["a"],{key:s,attrs:{size:"36px"}},[a.url?t("img",{attrs:{src:a.url}}):e._e()])}))}},{key:"item.village_detail",fn:function({item:a}){return e._l(a.village_details,(function(a,s){return t("div",{key:s},[t("div",[e._v(e._s(a.name))])])}))}},{key:"item.favorite_dates",fn:function({item:a}){return e._l(a.favorite_dates,(function(a,s){return t("div",{key:s},[t("div",[e._v(e._s(a.name))])])}))}},{key:"item.cost_by",fn:function({item:a}){return[t("div",[e._v(e._s(e.costBy(a.cost_by)))])]}},{key:"item.price",fn:function({item:a}){return["bag"!==a.cost_by?t("div",[e._v(" "+e._s(Intl.NumberFormat().format(a.fix_cost))+" ")]):e._e(),"bag"==a.cost_by?t("div",[a.current_bag_price?t("div",[e._v(" "+e._s(Intl.NumberFormat().format(a.current_bag_price.price))+" ")]):e._e()]):e._e()]}},{key:"item.expect_trash",fn:function({item:a}){return[a.expect_trash?t(o["a"],{attrs:{outlined:"",color:"green"}},[e._v(" "+e._s(Intl.NumberFormat().format(a.expect_trash))+" "+e._s(e.getCustomerUnitFunc(a.cost_by))+" ")]):t("div",[e._v(" - ")])]}},{key:"item.current_month_info",fn:function({item:a}){return[a.current_month_info?t(o["a"],{attrs:{outlined:"",color:e.getTrashColor(a,e.getTrash(a.cost_by,a.last_month_info))}},[e._v(" "+e._s(Intl.NumberFormat().format(e.getTrash(a.cost_by,a.current_month_info)))+" "+e._s(e.getCustomerUnitFunc(a.cost_by))+" ")]):t("div",[e._v(" - ")])]}},{key:"item.last_month_info",fn:function({item:a}){return[a.last_month_info?t(o["a"],{attrs:{dark:"",color:e.getTrashColor(a,e.getTrash(a.cost_by,a.last_month_info))}},[e._v(" "+e._s(Intl.NumberFormat().format(e.getTrash(a.cost_by,a.last_month_info)))+" "+e._s(e.getCustomerUnitFunc(a.cost_by))+" ")]):t("div",[e._v(" - ")])]}},{key:"item.can_collect",fn:function({item:a}){return[t(o["a"],{attrs:{color:e.statusColor(a.can_collect)}},[e._v(" "+e._s(e.CanCollect(a.can_collect))+" ")])]}},{key:"item.actions",fn:function({item:a}){return[t(b["a"],{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:s}){return[t(f["a"],e._g(e._b({staticClass:"mr-2",attrs:{color:"primary",dark:"",medium:""}},"v-icon",s,!1),a),[e._v(" mdi-dots-vertical ")])]}}],null,!0)},[t(_["a"],[t(v["a"],{attrs:{link:""},on:{click:function(t){return e.addUser(a)}}},[t(g["d"],[t(f["a"],{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-plus ")]),e._v("ເພີ່ມຜູ້ປະສານງານ ")],1)],1),t(v["a"],{attrs:{link:""},on:{click:function(t){return e.viewPage(a.id)}}},[t(g["d"],[t(f["a"],{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-eye ")]),e._v("ລາຍລະອຽດ ")],1)],1),t(v["a"],{attrs:{link:""},on:{click:function(t){return e.editPage(a.id)}}},[t(g["d"],[t(f["a"],{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-pencil ")]),e._v("ແກ້ໄຂ ")],1)],1),t(v["a"],{attrs:{link:""},on:{click:function(t){return e.deleteItem(a.id)}}},[t(g["d"],[t(f["a"],{attrs:{small:""}},[e._v(" mdi-delete ")]),e._v("ລຶບ ")],1)],1)],1)],1)]}}])}),t("br"),[e.pagination.total_pages>1?t("Pagination",{attrs:{pagination:e.pagination,offset:e.offset},on:{paginate:function(t){return e.fetchData()}}}):e._e()]],2)],1)],1),t("ModalAdd",[[t(r["a"],[t(l["c"],[t("p",[e._v("ເພີ່ມຜູ້ປະສານງານ")])]),t(l["b"],[t(d["a"],[t(p["a"],{ref:"form",attrs:{"lazy-validation":""}},[t(x["a"],[t(c["a"],{attrs:{cols:"12"}},[t(S["a"],{attrs:{label:"Name *",required:""},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.name)+" ")])],1),t(c["a"],{attrs:{cols:"12"}},[t(S["a"],{attrs:{label:"Surname *",required:""},model:{value:e.user.surname,callback:function(t){e.$set(e.user,"surname",t)},expression:"user.surname"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.surname)+" ")])],1),t(c["a"],{attrs:{cols:"12"}},[t(S["a"],{staticClass:"input-number",attrs:{label:"ເບີໂທ *",required:"",type:"number"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.phone)+" ")])],1)],1)],1)],1),t(l["a"],[t(I["a"]),t(n["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.closeAddModal()}}},[e._v(" Close ")]),t(n["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.AddItem()}}},[e._v(" Save ")])],1)],1)],1)]],2),t("ModalDelete",[[t(l["a"],[t(I["a"]),t(n["a"],{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v(" Cancel ")]),t(n["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.deleteItemConfirm}},[e._v(" OK ")]),t(I["a"])],1)]],2)],1)},C=[],D=(a("558b"),a("6ece")),w=a("7660"),$=a("54da"),V={name:"Customer",title(){return"Vientiane Waste Co-Dev|"+this.title},data(){return{title:"Company",start_date:"",end_date:"",start_menu:!1,end_menu:!1,customers:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:100,search:"",oldVal:"",packages:[],selectedPackage:"",start_collect:!1,server_errors:{},districts:[],selectedDistrict:"",villages:[],selectedVillage:[],selectedStatus:[],status:[{id:1,name:"active"},{id:2,name:"inactive"},{id:3,name:"trial"}],selectedCanCollect:"",can_collects:[{id:1,name:"ເກັບໄດ້",value:"1"},{id:2,name:"ເກັບບໍໄດ້",value:"0"}],selectedCustomerStatus:[],customerStatus:[{id:1,value:"no_calendar",name:"ມີແຜນເດີນລົດເກັບ"},{id:2,value:"calendar",name:"ຍັງບໍ່ມີແຜນເດີນລົດເກັບ"},{id:3,value:"no_route_plan",name:"ມີເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ"},{id:4,value:"route_plan",name:"ຍັງບໍ່ມີເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ"}],selectedCost:[],costs:[{id:1,value:"container",name:"ຄອນເທັນເນີ"},{id:2,value:"fix_cost",name:"ທຸລະກິດເປັນຖ້ຽວ"},{id:3,value:"chartered",name:"ມອບເໝົາ"},{id:4,value:"bag",name:"ບໍລິມາດ"},{id:5,value:"32km",name:"ຫຼັກ32"},{id:6,value:"infect",name:"ຂີ້ເຫຍື້ອຕິດເຊື້ອ"}],user:{},item:{},favorite_dates:[],selectedFavoriteDate:[],headers:[{text:"ລະຫັດ",value:"customer_id",width:"150px"},{text:"ບໍລິສັດ",value:"company_name",width:"150px"},{text:"ເບີໂທ",value:"user.phone",width:"100px"},{text:"ບ້ານ",value:"village.name",sortable:!1,width:"150px"},{text:"ເມືອງ",value:"district.name",sortable:!1,width:"100px"},{text:"ລາຍລະອຽດທີ່ຢູ່",value:"village_detail",sortable:!1,width:"200px"},{text:"ປະເພດບໍລິການ",value:"cost_by_la",width:"200px"},{text:"ມູນຄ່າສັນຍາ",value:"price",width:"150px"},{text:"ຂີ້ເຫຍື້ອຄາດໝາຍ",value:"expect_trash",width:"200px"},{text:"ຂີ້ເຫຍື້ອປັດຈຸບັນ",value:"current_month_info",width:"200px"},{text:"ຂີ້ເຫຍື້ອເດືອນກ່ອນ",value:"last_month_info",width:"200px"},{text:"ສະຖານະເກັບ",value:"can_collect",align:"center",width:"100px"},{text:"ມື້ບໍລິການ",value:"favorite_dates",width:"120px"},{text:"ໝາຍເຫດ",value:"collect_description",sortable:!1,width:"200px"},{text:"",value:"media"},{text:"",value:"actions",sortable:!1}]}},watch:{selectedFavoriteDate(){this.pagination.current_page="",this.fetchData()},start_date(){this.server_errors.start_month="",this.pagination.current_page="",""!=this.end_date&&this.start_date>this.end_date&&(this.start_date=""),this.fetchData()},end_date(){this.pagination.current_page="",this.end_date<this.start_date&&(this.end_date=""),this.fetchData()},search(e){this.pagination.current_page="",""==e&&this.fetchData()},selectedVillage(){this.pagination.current_page="",this.fetchData()},selectedDistrict(){this.pagination.current_page="",this.fetchVillage(),this.fetchData()},selectedStatus(){this.pagination.current_page="",this.fetchData()},selectedPackage(){this.server_errors.package_id=""},selectedCustomerStatus(){this.pagination.current_page="",this.fetchData()},selectedCost(){this.pagination.current_page="",this.fetchData()},selectedCanCollect(){this.pagination.current_page="",this.fetchData()},"user.name":function(){this.server_errors.name=""},"user.surname":function(){this.server_errors.name=""},"user.phone":function(){this.server_errors.phone=""}},created(){this.fetchData(),this.fetchAddress(),this.fetchFavorite()},methods:{getTrashColor(e,t){return!e.expect_trash||e.expect_trash>t?"blue":e.expect_trash==t?"green":"red"},getCustomerUnitFunc(e){return Object(w["e"])(e)},getTrash(e,t){if(!t)return 0;switch(e){case"bag":case"chartered":case"infect":case"32km":return t.bag_sum;case"container":return t.container_sum;case"fix_cost":return t.count_time;default:return e}},fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("company",{params:Object($["a"])([{page:this.pagination.current_page},{per_page:this.per_page},{filter:this.search},{date_from:this.start_date},{date_end:this.end_date},{statuses:this.selectedStatus},{without:this.selectedCustomerStatus},{villages:this.selectedVillage},{can_collect:this.selectedCanCollect},{district_id:this.selectedDistrict},{cost_by:this.selectedCost},{favorite_dates:this.selectedFavoriteDate}])}).then(e=>{200==e.data.code&&(this.$store.commit("Loading_State",!1),this.customers=e.data.data.data,this.pagination=e.data.data.pagination)}).catch(e=>{if(this.$store.commit("Loading_State",!1),e.response&&422==e.response.status){const t=e.response.data.errors;for(const[e,a]of Object.entries(t))this.server_errors[e]=a[0]}})},fetchAddress(){this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then(e=>{200==e.data.code&&(this.address=e.data.data,this.address.map(e=>{this.districts=e.districts}))}).catch(()=>{})},fetchVillage(){this.$axios.get(`info/district/${this.selectedDistrict}/village`).then(e=>{200==e.data.code&&(this.villages=e.data.data)}).catch(()=>{})},closeDelete(){this.$store.commit("modalDelete_State",!1)},deleteItem(e){this.customerId=e,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm(){this.$store.commit("Loading_State",!0),this.$axios.delete("company/"+this.customerId).then(e=>{200==e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.$store.commit("modalDelete_State",!1),this.fetchData(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})},300)}).catch(e=>{this.fetchData(),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),this.$store.commit("modalDelete_State",!1),this.$store.commit("Loading_State",!1)})},addUser(e){this.item=e,this.$store.commit("modalAdd_State",!0)},closeAddModal(){this.$store.commit("modalAdd_State",!1)},AddItem(){1==this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.post(`company/${this.item.id}/coordinator`,this.user).then(e=>{200==e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.closeAddModal(),this.user={},this.fetchData(),this.reset(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})},300)}).catch(e=>{if(this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),this.fetchData(),e.response&&422==e.response.status){const t=e.response.data.errors;for(const[e,a]of Object.entries(t))this.server_errors[e]=a[0]}}))},reset(){this.$refs.form.reset()},createPage(){this.$router.push({name:"CreateCompany"})},editPage(e){this.$router.push({name:"EditCompany",params:{id:e}})},viewPage(e){const t=this.$router.resolve({name:"ViewCompanyDetail",params:{id:e}});window.open(t.href)},Search(){Object(D["a"])(this)},statusColor(e){return"1"==e?"success":"0"==e?"error":"info"},CanCollect(e){return"1"==e?"ເກັບໄດ້":"0"==e?"ເກັບບໍ່ໄດ້":void 0},costBy(e){return"container"==e?"ຄອນເທັນເນີ":"fix_cost"==e?"ທຸລະກິດເປັນຖ້ຽວ":"chartered"==e?"ມອບເໝົາ":"bag"==e?"ບໍລິມາດ":"infect"==e?"ຂີ້ເຫຍື້ອຕິດເຊື້ອ":"32km"==e?"ຫຼັກ32":e},fetchFavorite(){this.$axios.get("favorite-date").then(e=>{200==e.data.code&&setTimeout(()=>{this.favorite_dates=e.data.data},100)}).catch(()=>{})}}},F=V,T=(a("dcb3"),a("4a4e")),O=Object(T["a"])(F,k,C,!1,null,null,null);t["default"]=O.exports},a892:function(e,t,a){"use strict";a("0fdf");var s=a("26bf"),i=a("9b44"),n=a("ed44"),r=a("dd08");const l={...s["b"],offsetY:!0,offsetOverflow:!0,transition:!1};t["a"]=s["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,a)=>a.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:s["a"].options.props.menuProps.type,default:()=>l},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(r["r"])(e,this.itemText),a=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),a)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=s["a"].options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...l,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=s["a"].options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){if(e!==t){if(!this.autoSelectFirst){const a=t[this.$refs.menu.listIndex];a?this.setMenuIndex(e.findIndex(e=>e===a)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&e.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===r["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===r["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==r["y"].backspace&&e!==r["y"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const a=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==a)return void(this.selectedIndex=a);const s=this.selectedItems.length,i=e!==s-1?e:e-1,n=this.selectedItems[i];n?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=i},clearableCallback(){this.internalSearch=null,s["a"].options.methods.clearableCallback.call(this)},genInput(){const e=i["a"].options.methods.genInput.call(this);return e.data=Object(n["a"])(e.data,{attrs:{"aria-activedescendant":Object(r["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(r["p"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=s["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?s["a"].options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,a=t.value;t.value&&this.activateMenu(),this.multiple||""!==a||this.deleteCurrentItem(),this.internalSearch=a,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[r["y"].home,r["y"].end].includes(t)||s["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){s["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){s["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){s["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,a;if(-1===this.selectedIndex)return;const s=this.selectedItems[this.selectedIndex],i=this.getText(s);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",i),null===(a=e.clipboardData)||void 0===a||a.setData("text/vnd.vuetify.autocomplete.item+plain",i),e.preventDefault()}}})},dcb3:function(e,t,a){"use strict";a("2734")}}]);
//# sourceMappingURL=chunk-29db9ece.aafdd0ca.js.map