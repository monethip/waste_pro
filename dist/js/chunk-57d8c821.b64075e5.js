(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57d8c821"],{"0af3":function(t,e,a){"use strict";var n=a("1455");e["a"]=n["a"].extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=n["a"].options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})},1455:function(t,e,a){"use strict";var n=a("59f4"),s=a("c91b"),o=a("385b"),i=a("dd08"),r=a("9c0c");const l=Object(r["a"])(n["a"],Object(s["a"])("windowGroup","v-window-item","v-window"));e["a"]=l.extend().extend().extend({name:"v-window-item",directives:{Touch:o["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(i["h"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(i["h"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}})},"275b":function(t,e,a){},"6ad5":function(t,e,a){"use strict";a.r(e);var n=a("8447"),s=a("db5a"),o=a("0f35"),i=a("1789"),r=a("d62f"),l=a("2f5e"),c=a("0af3"),m=a("a151"),u=a("e28e"),d=function(){var t=this,e=t._self._c;return e(i["a"],[e(n["a"],{staticClass:"pt-0",attrs:{large:""}},[t._v(" ແຜນຈັດເສັ້ນທາງການເກັບຂີ້ເຫື້ຍອ ")]),e(r["a"],{staticClass:"mb-2"}),e(s["a"],{attrs:{elevation:"1"}},[e(o["b"],[e(m["a"],{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(l["a"],{attrs:{href:"#tab-1"}},[t._v(" ຄົວເຮືອນ ")]),e(l["a"],{attrs:{href:"#tab-2"}},[t._v(" ຫົວໜ່ວຍທຸລະກິດ ")])],1),e(u["a"],{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(c["a"],{attrs:{value:"tab-1"}},[e("Home",{attrs:{tab:t.tab}})],1)],1),e(u["a"],{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(c["a"],{attrs:{value:"tab-2"}},[e(s["a"],{attrs:{flat:""}},[e(o["b"],[e("Company",{attrs:{tab:t.tab}})],1)],1)],1)],1)],1)],1)],1)},h=[],p=(a("558b"),a("07b0")),f=a("28e8"),_=a("1da9"),g=a("0cb6"),b=a("1d7d"),v=a("cfe2"),y=a("9b44"),w=function(){var t=this,e=t._self._c;return e(i["a"],[e(r["a"],[e(_["a"],[e(p["a"],{staticClass:"btn-primary mr-6",on:{click:function(e){return t.createPlan()}}},[e(b["a"],[t._v("mdi-plus")]),t._v(" ເພີ່ມແຜນ (Kmz) ")],1),e(p["a"],{staticClass:"btn-primary mr-6",on:{click:function(e){return t.createPage()}}},[e(b["a"],[t._v("mdi-application-export")]),t._v(" Export Kmz ຄົວເຮືອນ ")],1),e(p["a"],{staticClass:"btn-primary mr-6",on:{click:function(e){return t.createPlanNomMap()}}},[e(b["a"],[t._v("mdi-plus")]),t._v(" ເພີ່ມແຜນທີ່ເປັນຄົວເຮືອນ ")],1)],1)],1),e("br"),e(s["a"],[e(s["a"],{attrs:{flat:""}},[e(o["b"],[e(y["a"],{attrs:{clearable:"","hide-details":"",label:"Search","prepend-inner-icon":"mdi-magnify","single-line":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.fetchData()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),e(g["a"],{attrs:{"disable-pagination":!0,headers:t.headers,items:t.plans,search:t.search,"hide-default-footer":""},scopedSlots:t._u([{key:"item.actions",fn:function({item:a}){return[e(b["a"],{staticClass:"mr-3",attrs:{small:""},on:{click:function(e){return t.viewPage(a.id)}}},[t._v(" mdi-eye ")]),t._l(a.media,(function(a,n){return e("a",{key:n,attrs:{href:a.url}},[e(b["a"],{staticClass:"mr-3",attrs:{small:""}},[t._v("mdi-download")])],1)})),e(b["a"],{staticClass:"mr-3",attrs:{small:""},on:{click:function(e){return t.editPage(a.id)}}},[t._v(" mdi-pencil ")]),e(b["a"],{attrs:{small:""},on:{click:function(e){return t.deleteItem(a.id)}}},[t._v(" mdi-delete ")])]}},{key:"item.route_plan_details_count",fn:function({item:a}){return[e(f["a"],{attrs:{color:"blue",dark:""}},[t._v(" "+t._s(Intl.NumberFormat().format(a.route_plan_details_count))+" ")])]}},{key:"item.package_bag",fn:function({item:a}){return[e(f["a"],{attrs:{color:"green",outlined:""}},[t._v(" "+t._s(Intl.NumberFormat().format(a.package_bag))+" ")])]}}])}),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{offset:t.offset,pagination:t.pagination},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1),e("ModalDelete",[[e(o["a"],[e(v["a"]),e(p["a"],{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v(" Cancel ")]),e(p["a"],{attrs:{disabled:t.loading,loading:t.loading,color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v(" OK ")]),e(v["a"])],1)]],2)],1)},$=[],C={title(){return"Vientiane Waste Co-Dev|Route Plan"},name:"Customer",data(){return{tab:null,plans:[],plan:{},loading:!1,planId:"",offset:12,pagination:{},per_page:9,search:"",oldVal:"",selectedCustomerType:"",customer_types:[{name:"",display:"ທັງໝົດ"},{name:"company",display:"ບໍລິສັດ"},{name:"home",display:"ຄົວເຮືອນ"}],headers:[{text:"ຊື່",value:"name"},{text:"",value:"actions",sortable:!1}],nameRules:[t=>!!t||"Name is required",t=>t&&t.length>=2||"Name must be less than 2 characters"],server_errors:{}}},methods:{fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("route-plan",{params:{customer_type:"home"}}).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.plans=t.data.data,console.log(this.plans)},100)}).catch(t=>{if(this.$store.commit("Loading_State",!1),422==t.response.status){const e=t.response.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}})},closeDelete(){this.$store.commit("modalDelete_State",!1)},deleteItem(t){this.planId=t,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm(){this.$store.commit("Loading_State",!0),this.$axios.delete("route-plan/"+this.planId).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message}),this.$store.commit("modalDelete_State",!1),this.fetchData()},300)}).catch(t=>{this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message}),this.$store.commit("modalDelete_State",!1),this.$store.commit("Loading_State",!1)})},createPage(){this.$router.push({name:"Export-Plan"})},exportCompany(){this.$router.push({name:"Export-Plan-Company"})},createPlan(){this.$router.push({name:"CreatePlan"})},createPlanNomap(){this.$router.push({name:"SelectCustomerRoutePlan"})},createPlanCompany(){this.$router.push({name:"SelectCompanyRoutePlan"})},editPage(t){this.$router.push({name:"EditPlan",params:{id:t}})},viewPage(t){this.$openRoute({name:"ViewPlan",params:{id:t}})},download(t){window.location.href=t}},created(){this.fetchData()},watch:{selectedCustomerType(){this.fetchData()}}},x={title(){return"Vientiane Waste Co-Dev|Route Plan"},name:"Customer",mixins:[C],data(){return{tab:null,plans:[],plan:{},loading:!1,firstLoad:!0,planId:"",offset:12,pagination:{},per_page:100,search:"",oldVal:"",selectedCustomerType:"",customer_types:[{name:"",display:"ທັງໝົດ"},{name:"company",display:"ບໍລິສັດ"},{name:"home",display:"ຄົວເຮືອນ"}],headers:[{text:"ຊື່ແຜນ",value:"name"},{text:"ຈຳນວນຈຸດ",value:"route_plan_details_count"},{text:"ຂີ້ເຫຍື້ອຄາດໝາຍ (ຖົງ)",value:"package_bag"},{text:"Description",value:"description",sortable:!1},{text:"ຈັດການຂໍ້ມູນ",value:"actions",sortable:!1,width:"120px"}],nameRules:[t=>!!t||"Name is required",t=>t&&t.length>=2||"Name must be less than 2 characters"],server_errors:{}}},watch:{selectedCustomerType(){this.firstLoad||this.fetchData()}},created(){this.fetchData()},methods:{fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("route-plan",{params:{page:this.pagination.current_page,per_page:this.per_page,filter:this.search,customer_type:"home",without_month_info:!0}}).then(t=>{this.firstLoad=!1,200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.plans=t.data.data.data,this.pagination=t.data.data.pagination},100)}).catch(t=>{if(this.firstLoad=!1,this.$store.commit("Loading_State",!1),t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}})},closeDelete(){this.$store.commit("modalDelete_State",!1)},deleteItem(t){this.planId=t,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm(){this.$store.commit("Loading_State",!0),this.$axios.delete("route-plan/"+this.planId).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message}),this.$store.commit("modalDelete_State",!1),this.fetchData()},300)}).catch(t=>{this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"}),this.$store.commit("modalDelete_State",!1),this.$store.commit("Loading_State",!1)})},createPage(){this.$router.push({name:"Export-Plan"})},exportCompany(){this.$router.push({name:"Export-Plan-Company"})},createPlan(){this.$router.push({name:"CreatePlan"})},createPlanNomMap(){this.$router.push({name:"SelectHomeRoutePlan"})},createPlanCompany(){this.$router.push({name:"SelectCompanyRoutePlan"})},editPage(t){this.$router.push({name:"EditPlan",params:{id:t}})},viewPage(t){this.$openRoute({name:"ViewPlan",params:{id:t}})},download(t){window.location.href=t}}},P=x,k=(a("b6b8"),a("4a4e")),S=Object(k["a"])(P,w,$,!1,null,null,null),T=S.exports,D=function(){var t=this,e=t._self._c;return e(i["a"],[e(r["a"],[e(_["a"],[e(p["a"],{staticClass:"btn-primary mr-6",on:{click:function(e){return t.createPlan()}}},[e(b["a"],[t._v("mdi-plus")]),t._v("ເພີ່ມແຜນ (Kmz) ")],1),e(p["a"],{staticClass:"btn-primary mr-6",on:{click:function(e){return t.exportCompany()}}},[e(b["a"],[t._v("mdi-application-export")]),t._v("Export Kmz ຫົວໜ່ວນທຸລະກິດ ")],1),e(p["a"],{staticClass:"btn-primary mr-6",on:{click:function(e){return t.createPlanCompany()}}},[e(b["a"],[t._v("mdi-plus")]),t._v("ເພີ່ມແຜນຫົວໜ່ວນທຸລະກິດ ")],1)],1)],1),e("br"),e(s["a"],[e(s["a"],{attrs:{flat:""}},[e(o["c"],[e(y["a"],{attrs:{clearable:"","prepend-inner-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.fetchData()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e(o["b"],[e(g["a"],{attrs:{headers:t.headers,items:t.plans,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.route_plan_details_count",fn:function({item:a}){return[e(f["a"],{attrs:{dark:"",color:"blue"}},[t._v(" "+t._s(Intl.NumberFormat().format(a.route_plan_details_count))+" ")])]}},{key:"item.sum_expect_trash_bag",fn:function({item:a}){return[e(f["a"],{attrs:{outlined:"",color:"green"}},[t._v(" "+t._s(Intl.NumberFormat().format(a.sum_expect_trash_bag))+" ")])]}},{key:"item.sum_expect_trash_container",fn:function({item:a}){return[e(f["a"],{attrs:{outlined:"",color:"blue"}},[t._v(" "+t._s(Intl.NumberFormat().format(a.sum_expect_trash_container))+" ")])]}},{key:"item.actions",fn:function({item:a}){return[e(b["a"],{staticClass:"mr-3",attrs:{small:""},on:{click:function(e){return t.viewPage(a.id)}}},[t._v(" mdi-eye ")]),t._l(a.media,(function(a,n){return e("a",{key:n,attrs:{href:a.url}},[e(b["a"],{staticClass:"mr-3",attrs:{small:""}},[t._v("mdi-download")])],1)})),e(b["a"],{staticClass:"mr-3",attrs:{small:""},on:{click:function(e){return t.editPage(a.id)}}},[t._v(" mdi-pencil ")]),e(b["a"],{attrs:{small:""},on:{click:function(e){return t.deleteItem(a.id)}}},[t._v(" mdi-delete ")])]}}])}),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1),e("ModalDelete",[[e(o["a"],[e(v["a"]),e(p["a"],{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v(" Cancel ")]),e(p["a"],{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:t.deleteItemConfirm}},[t._v(" OK ")]),e(v["a"])],1)]],2)],1)},I=[],L={title(){return"Vientiane Waste Co-Dev|Route Plan"},name:"Customer",mixins:[C],data(){return{tab:null,plans:[],plan:{},loading:!1,planId:"",offset:12,pagination:{},per_page:100,search:"",oldVal:"",selectedCustomerType:"",customer_types:[{name:"",display:"ທັງໝົດ"},{name:"company",display:"ບໍລິສັດ"},{name:"home",display:"ຄົວເຮືອນ"}],headers:[{text:"ຊື່ແຜນ",value:"name"},{text:"ຈຳນວນຈຸດ",value:"route_plan_details_count"},{text:"ຂີ້ເຫຍື້ອຄາດໝາຍ (ຖົງ)",value:"sum_expect_trash_bag"},{text:"ຂີ້ເຫຍື້ອຄາດໝາຍ (ຄອນເທນເນີ)",value:"sum_expect_trash_container"},{text:"Description",value:"description",sortable:!1},{text:"ຈັດການຂໍ້ມູນ",value:"actions",sortable:!1,width:"120px"}],nameRules:[t=>!!t||"Name is required",t=>t&&t.length>=2||"Name must be less than 2 characters"],server_errors:{}}},watch:{selectedCustomerType(){this.fetchData()}},created(){this.fetchData()},methods:{fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("route-plan",{params:{page:this.pagination.current_page,per_page:this.per_page,filter:this.search,customer_type:"company"}}).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.plans=t.data.data.data,this.pagination=t.data.data.pagination},100)}).catch(t=>{if(this.$store.commit("Loading_State",!1),t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}})},closeDelete(){this.$store.commit("modalDelete_State",!1)},deleteItem(t){this.planId=t,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm(){this.$store.commit("Loading_State",!0),this.$axios.delete("route-plan/"+this.planId).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message}),this.$store.commit("modalDelete_State",!1),this.fetchData()},300)}).catch(t=>{this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"}),this.$store.commit("modalDelete_State",!1),this.$store.commit("Loading_State",!1)})},createPage(){this.$router.push({name:"Export-Plan"})},exportCompany(){this.$router.push({name:"Export-Plan-Company"})},createPlan(){this.$router.push({name:"CreatePlan"})},createPlanNomap(){this.$router.push({name:"SelectCustomerRoutePlan"})},createPlanCompany(){this.$router.push({name:"SelectCompanyRoutePlan"})},editPage(t){this.$router.push({name:"EditPlan",params:{id:t}})},viewPage(t){this.$openRoute({name:"ViewCompanyRoutePlan",params:{id:t}})},download(t){window.location.href=t}}},E=L,R=(a("f7a9"),Object(k["a"])(E,D,I,!1,null,null,null)),N=R.exports,O={title(){return"Vientiane Waste Co-Dev|Calendar"},components:{Home:T,Company:N},data(){return{tab:null,data:{}}},watch:{tab(t){"tab-1"==t?this.$router.push({name:"Plan",query:{tab:"home"}}).catch(()=>{}):"tab-2"==t&&this.$router.push({name:"Plan",query:{tab:"company"}}).catch(()=>{})}},created(){"home"==this.$route.query.tab?this.tab="tab-1":"company"==this.$route.query.tab&&(this.tab="tab-2")},methods:{backPrevios(){this.$router.go(-1)}}},G=O,j=(a("78d6"),Object(k["a"])(G,d,h,!1,null,null,null));e["default"]=j.exports},"78d6":function(t,e,a){"use strict";a("275b")},"9a5c":function(t,e,a){},b6b8:function(t,e,a){"use strict";a("9a5c")},d47b:function(t,e,a){},f7a9:function(t,e,a){"use strict";a("d47b")}}]);
//# sourceMappingURL=chunk-57d8c821.b64075e5.js.map