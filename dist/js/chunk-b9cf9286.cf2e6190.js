(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b9cf9286"],{"0f2d":function(t,e,a){"use strict";a("2632")},"1e6c":function(t,e,a){"use strict";var n=a("9d65"),o=a("4e82"),i=a("c3f0"),r=a("80d2"),s=a("58df"),c=Object(s["a"])(n["a"],Object(o["a"])("windowGroup","v-window-item","v-window"));e["a"]=c.extend().extend().extend({name:"v-window-item",directives:{Touch:i["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(r["g"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(r["g"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},2173:function(t,e,a){"use strict";a("3c57")},2632:function(t,e,a){},"3c57":function(t,e,a){},"4fad":function(t,e,a){var n=a("23e7"),o=a("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return o(t)}})},"6ad5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-breadcrumbs",{staticClass:"pt-0",attrs:{large:""}},[t._v("ແຜນຈັດເສັ້ນທາງການເກັບຂີ້ເຫື້ຍອ")]),a("v-row",{staticClass:"mb-2"}),a("v-card",{attrs:{elevation:"1"}},[a("v-card-text",[a("v-tabs",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab",{attrs:{href:"#tab-1"}},[t._v(" ຄົວເຮືອນ ")]),a("v-tab",{attrs:{href:"#tab-2"}},[t._v(" ຫົວໜ່ວຍທຸລະກິດ ")])],1),a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab-item",{attrs:{value:"tab-1"}},[a("Home",{attrs:{tab:t.tab}})],1)],1),a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab-item",{attrs:{value:"tab-2"}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("Company",{attrs:{tab:t.tab}})],1)],1)],1)],1)],1)],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("v-btn",{staticClass:"btn-primary mr-6",on:{click:function(e){return t.createPlan()}}},[a("v-icon",[t._v("mdi-plus ")]),t._v(" ເພີ່ມແຜນ (Kmz) ")],1),a("v-btn",{staticClass:"btn-primary mr-6",on:{click:function(e){return t.createPage()}}},[a("v-icon",[t._v("mdi-application-export ")]),t._v(" Export Kmz ຄົວເຮືອນ ")],1),a("v-btn",{staticClass:"btn-primary mr-6",on:{click:function(e){return t.createPlanNomMap()}}},[a("v-icon",[t._v("mdi-plus ")]),t._v(" ເພີ່ມແຜນທີ່ເປັນຄົວເຮືອນ ")],1)],1)],1),a("br"),a("v-card",[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("v-text-field",{attrs:{clearable:"","prepend-inner-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("v-data-table",{attrs:{headers:t.headers,items:t.plans,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.actions",fn:function(e){var n=e.item;return[a("v-icon",{staticClass:"mr-3",attrs:{small:""},on:{click:function(e){return t.viewPage(n.id)}}},[t._v(" mdi-eye ")]),t._l(n.media,(function(e,n){return a("a",{key:n,attrs:{href:e.url}},[a("v-icon",{staticClass:"mr-3",attrs:{small:""}},[t._v(" mdi-download ")])],1)})),a("v-icon",{staticClass:"mr-3",attrs:{small:""},on:{click:function(e){return t.editPage(n.id)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(n.id)}}},[t._v(" mdi-delete ")])]}}])}),a("br"),[t.pagination.total_pages>1?a("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1),a("ModalDelete",[[a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:t.deleteItemConfirm}},[t._v("OK")]),a("v-spacer")],1)]],2)],1)},r=[],s=a("3835"),c=(a("4fad"),{title:function(){return"Vientiane Waste Co-Dev|Route Plan"},name:"Customer",data:function(){return{tab:null,plans:[],plan:{},loading:!1,planId:"",offset:12,pagination:{},per_page:9,search:"",oldVal:"",selectedCustomerType:"",customer_types:[{name:"",display:"ທັງໝົດ"},{name:"company",display:"ບໍລິສັດ"},{name:"home",display:"ຄົວເຮືອນ"}],headers:[{text:"ຊື່",value:"name"},{text:"",value:"actions",sortable:!1}],nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length>=2||"Name must be less than 2 characters"}],server_errors:{}}},methods:{fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("route-plan",{params:{customer_type:"home"}}).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.plans=e.data.data,console.log(t.plans)}),100)})).catch((function(e){if(t.$store.commit("Loading_State",!1),422==e.response.status)for(var a=e.response.data.errors,n=0,o=Object.entries(a);n<o.length;n++){var i=Object(s["a"])(o[n],2),r=i[0],c=i[1];t.server_errors[r]=c[0]}}))},closeDelete:function(){this.$store.commit("modalDelete_State",!1)},deleteItem:function(t){this.planId=t,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm:function(){var t=this;this.loading=!0,this.$axios.delete("route-plan/"+this.planId).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message}),t.$store.commit("modalDelete_State",!1),t.fetchData()}),300)})).catch((function(e){t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message}),t.$store.commit("modalDelete_State",!1),t.loading=!1}))},createPage:function(){this.$router.push({name:"Export-Plan"})},exportCompany:function(){this.$router.push({name:"Export-Plan-Company"})},createPlan:function(){this.$router.push({name:"CreatePlan"})},createPlanNomap:function(){this.$router.push({name:"SelectCustomerRoutePlan"})},createPlanCompany:function(){this.$router.push({name:"SelectCompanyRoutePlan"})},editPage:function(t){this.$router.push({name:"EditPlan",params:{id:t}})},viewPage:function(t){this.$router.push({name:"ViewPlan",params:{id:t}})},download:function(t){window.location.href=t}},created:function(){this.fetchData()},watch:{selectedCustomerType:function(){this.fetchData()}}}),l={title:function(){return"Vientiane Waste Co-Dev|Route Plan"},mixins:[c],name:"Customer",data:function(){return{tab:null,plans:[],plan:{},loading:!1,planId:"",offset:12,pagination:{},per_page:9,search:"",oldVal:"",selectedCustomerType:"",customer_types:[{name:"",display:"ທັງໝົດ"},{name:"company",display:"ບໍລິສັດ"},{name:"home",display:"ຄົວເຮືອນ"}],headers:[{text:"ຊື່ແຜນ",value:"name"},{text:"Description",value:"description",sortable:!1},{text:"ຈັດການຂໍ້ມູນ",value:"actions",sortable:!1,width:"120px"}],nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length>=2||"Name must be less than 2 characters"}],server_errors:{}}},methods:{fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("route-plan",{params:{customer_type:"home"}}).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.plans=e.data.data}),100)})).catch((function(e){if(t.$store.commit("Loading_State",!1),422==e.response.status)for(var a=e.response.data.errors,n=0,o=Object.entries(a);n<o.length;n++){var i=Object(s["a"])(o[n],2),r=i[0],c=i[1];t.server_errors[r]=c[0]}}))},closeDelete:function(){this.$store.commit("modalDelete_State",!1)},deleteItem:function(t){this.planId=t,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm:function(){var t=this;this.loading=!0,this.$axios.delete("route-plan/"+this.planId).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message}),t.$store.commit("modalDelete_State",!1),t.fetchData()}),300)})).catch((function(e){t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message}),t.$store.commit("modalDelete_State",!1),t.loading=!1}))},createPage:function(){this.$router.push({name:"Export-Plan"})},exportCompany:function(){this.$router.push({name:"Export-Plan-Company"})},createPlan:function(){this.$router.push({name:"CreatePlan"})},createPlanNomMap:function(){this.$router.push({name:"SelectHomeRoutePlan"})},createPlanCompany:function(){this.$router.push({name:"SelectCompanyRoutePlan"})},editPage:function(t){this.$router.push({name:"EditPlan",params:{id:t}})},viewPage:function(t){this.$router.push({name:"ViewPlan",params:{id:t}})},download:function(t){window.location.href=t}},created:function(){this.fetchData()},watch:{selectedCustomerType:function(){this.fetchData()}}},u=l,d=(a("c1d1"),a("2877")),m=a("6544"),h=a.n(m),p=a("8336"),f=a("b0af"),v=a("99d9"),b=a("62ad"),g=a("a523"),C=a("8fea"),_=a("132d"),w=a("0fd9"),y=a("2fa4"),$=a("8654"),x=Object(d["a"])(u,i,r,!1,null,null,null),P=x.exports;h()(x,{VBtn:p["a"],VCard:f["a"],VCardActions:v["a"],VCardText:v["b"],VCol:b["a"],VContainer:g["a"],VDataTable:C["a"],VIcon:_["a"],VRow:w["a"],VSpacer:y["a"],VTextField:$["a"]});var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("v-btn",{staticClass:"btn-primary mr-6",on:{click:function(e){return t.createPlan()}}},[a("v-icon",[t._v("mdi-plus ")]),t._v(" ເພີ່ມແຜນ (Kmz) ")],1),a("v-btn",{staticClass:"btn-primary mr-6",on:{click:function(e){return t.exportCompany()}}},[a("v-icon",[t._v("mdi-application-export ")]),t._v(" Export Kmz ຫົວໜ່ວນທຸລະກິດ ")],1),a("v-btn",{staticClass:"btn-primary mr-6",on:{click:function(e){return t.createPlanCompany()}}},[a("v-icon",[t._v("mdi-plus ")]),t._v(" ເພີ່ມແຜນຫົວໜ່ວນທຸລະກິດ ")],1)],1)],1),a("br"),a("v-card",[a("v-card",{attrs:{flat:""}},[a("v-card-title",[a("v-text-field",{attrs:{clearable:"","prepend-inner-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.plans,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.actions",fn:function(e){var n=e.item;return[a("v-icon",{staticClass:"mr-3",attrs:{small:""},on:{click:function(e){return t.viewPage(n.id)}}},[t._v(" mdi-eye ")]),t._l(n.media,(function(e,n){return a("a",{key:n,attrs:{href:e.url}},[a("v-icon",{staticClass:"mr-3",attrs:{small:""}},[t._v(" mdi-download ")])],1)})),a("v-icon",{staticClass:"mr-3",attrs:{small:""},on:{click:function(e){return t.editPage(n.id)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(n.id)}}},[t._v(" mdi-delete ")])]}}])}),a("br"),[t.pagination.total_pages>1?a("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1),a("ModalDelete",[[a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:t.deleteItemConfirm}},[t._v("OK")]),a("v-spacer")],1)]],2)],1)},S=[],k={title:function(){return"Vientiane Waste Co-Dev|Route Plan"},mixins:[c],name:"Customer",data:function(){return{tab:null,plans:[],plan:{},loading:!1,planId:"",offset:12,pagination:{},per_page:9,search:"",oldVal:"",selectedCustomerType:"",customer_types:[{name:"",display:"ທັງໝົດ"},{name:"company",display:"ບໍລິສັດ"},{name:"home",display:"ຄົວເຮືອນ"}],headers:[{text:"ຊື່ແຜນ",value:"name"},{text:"Description",value:"description",sortable:!1},{text:"ຈັດການຂໍ້ມູນ",value:"actions",sortable:!1,width:"120px"}],nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length>=2||"Name must be less than 2 characters"}],server_errors:{}}},methods:{fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("route-plan",{params:{customer_type:"company"}}).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.plans=e.data.data}),100)})).catch((function(e){if(t.$store.commit("Loading_State",!1),422==e.response.status)for(var a=e.response.data.errors,n=0,o=Object.entries(a);n<o.length;n++){var i=Object(s["a"])(o[n],2),r=i[0],c=i[1];t.server_errors[r]=c[0]}}))},closeDelete:function(){this.$store.commit("modalDelete_State",!1)},deleteItem:function(t){this.planId=t,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm:function(){var t=this;this.loading=!0,this.$axios.delete("route-plan/"+this.planId).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message}),t.$store.commit("modalDelete_State",!1),t.fetchData()}),300)})).catch((function(e){t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message}),t.$store.commit("modalDelete_State",!1),t.loading=!1}))},createPage:function(){this.$router.push({name:"Export-Plan"})},exportCompany:function(){this.$router.push({name:"Export-Plan-Company"})},createPlan:function(){this.$router.push({name:"CreatePlan"})},createPlanNomap:function(){this.$router.push({name:"SelectCustomerRoutePlan"})},createPlanCompany:function(){this.$router.push({name:"SelectCompanyRoutePlan"})},editPage:function(t){this.$router.push({name:"EditPlan",params:{id:t}})},viewPage:function(t){this.$router.push({name:"ViewCompanyRoutePlan",params:{id:t}})},download:function(t){window.location.href=t}},created:function(){this.fetchData()},watch:{selectedCustomerType:function(){this.fetchData()}}},D=k,V=(a("0f2d"),Object(d["a"])(D,T,S,!1,null,null,null)),I=V.exports;h()(V,{VBtn:p["a"],VCard:f["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VCol:b["a"],VContainer:g["a"],VDataTable:C["a"],VIcon:_["a"],VRow:w["a"],VSpacer:y["a"],VTextField:$["a"]});var E={title:function(){return"Vientiane Waste Co-Dev|Calendar"},components:{Home:P,Company:I},data:function(){return{tab:null,data:{}}},methods:{backPrevios:function(){this.$router.go(-1)}},created:function(){"home"==this.$route.query.tab?this.tab="tab-1":"company"==this.$route.query.tab&&(this.tab="tab-2")},watch:{tab:function(t){"tab-1"==t?this.$router.push({name:"Plan",query:{tab:"home"}}).catch((function(){})):"tab-2"==t&&this.$router.push({name:"Plan",query:{tab:"company"}}).catch((function(){}))}}},O=E,R=(a("2173"),a("2bc5")),j=a("71a3"),G=a("c671"),L=a("fe57"),N=a("aac8"),B=Object(d["a"])(O,n,o,!1,null,null,null);e["default"]=B.exports;h()(B,{VBreadcrumbs:R["a"],VCard:f["a"],VCardText:v["b"],VContainer:g["a"],VRow:w["a"],VTab:j["a"],VTabItem:G["a"],VTabs:L["a"],VTabsItems:N["a"]})},c1d1:function(t,e,a){"use strict";a("fcc27")},c671:function(t,e,a){"use strict";var n=a("1e6c");e["a"]=n["a"].extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=n["a"].options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})},fcc27:function(t,e,a){}}]);
//# sourceMappingURL=chunk-b9cf9286.cf2e6190.js.map