(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d36b001"],{"2bc5":function(t,a,e){"use strict";var n=e("5530"),s=(e("a15b"),e("abd3"),e("ade3")),r=e("1c87"),i=e("58df"),o=Object(i["a"])(r["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(s["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var a=this.generateRouteLink(),e=a.tag,s=a.data;return t("li",[t(e,Object(n["a"])(Object(n["a"])({},s),{},{attrs:Object(n["a"])(Object(n["a"])({},s.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),c=e("80d2"),u=Object(c["j"])("v-breadcrumbs__divider","li"),l=e("7560");a["a"]=Object(i["a"])(l["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(n["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(u,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],a=!!this.$scopedSlots.item,e=[],n=0;n<this.items.length;n++){var s=this.items[n];e.push(s.text),a?t.push(this.$scopedSlots.item({item:s})):t.push(this.$createElement(o,{key:e.join("."),props:s},[s.text])),n<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var a=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},a)}})},"4f14":function(t,a,e){},"6d9e":function(t,a,e){},"6eceb":function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));e("ac1f"),e("841c");var n=function(t){""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},"7c62":function(t,a,e){},abd3:function(t,a,e){},bee6:function(t,a,e){"use strict";e("7c62")},e0f7:function(t,a,e){"use strict";e("6d9e")},e3e4:function(t,a,e){"use strict";e("4f14")},f0d1:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-breadcrumbs",{staticClass:"pt-0",attrs:{large:""}},[e("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(a){return t.backPrevios()}}},[e("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" ລາຍລະອຽດແຜນ")],1),e("v-card",{attrs:{elevation:"1"}},[e("v-card-text",[e("v-tabs",{model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("v-tab",{attrs:{href:"#tab-1"}},[t._v(" ທັງໝົດ ")]),e("v-tab",{attrs:{href:"#tab-2"}},[e("v-badge",{attrs:{color:"green",content:t.summary.pending_count}},[t._v(" ລໍຖ້າ ")])],1),e("v-tab",{attrs:{href:"#tab-3"}},[e("v-badge",{attrs:{color:"red",content:t.summary.success_count}},[t._v(" ສຳເລັດ ")])],1)],1),e("v-tabs-items",{model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("v-tab-item",{attrs:{value:"tab-1"}},[e("allTrash")],1)],1),e("v-tabs-items",{model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("v-tab-item",{attrs:{value:"tab-2"}},[e("v-card",{attrs:{flat:""}},[e("v-card-text",[e("pendingTrash")],1)],1)],1)],1),e("v-tabs-items",{model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("v-tab-item",{attrs:{value:"tab-3"}},[e("v-card",{attrs:{flat:""}},[e("v-card-text",[e("successTrash")],1)],1)],1)],1)],1)],1)],1)},s=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",[e("v-col",[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{large:""}},[t._v(" ຂີ້ເຫຍື້ຍອທັງໝົດ")])],1),e("v-col",[e("v-text-field",{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຊື່",type:"text"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1)],1),e("div",[t.calendars?e("v-data-table",{attrs:{headers:t.headers,items:t.calendars,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.customer",fn:function(a){var n=a.item;return[n.route_plan_detail.customer?e("div",[t._v(" "+t._s(n.route_plan_detail.customer.name)+" "+t._s(n.route_plan_detail.customer.surname)+" ")]):t._e()]}},{key:"item.status",fn:function(a){var n=a.item;return[e("v-chip",{attrs:{color:t.statusColor(n.status)}},[t._v(t._s(n.status))])]}},{key:"item.amount",fn:function(a){var n=a.item;return["bag"==n.collection_type?e("div",[e("v-chip",{attrs:{color:"primary"}},[t._v(t._s(n.bag))]),e("span",[t._v(" "+t._s(t.getUnit(n.collection_type)))])],1):e("div",[e("v-chip",{attrs:{color:"success"}},[t._v(t._s(n.container))]),e("span",[t._v(" "+t._s(t.getUnit(n.collection_type)))])],1)]}},{key:"item.actions",fn:function(a){var n=a.item;return[e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return t.viewPage(n.plan_calendar_id,n.id)}}},[t._v(" mdi-eye ")])]}}],null,!1,4265659105)}):t._e(),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(a){return t.fetchData()}}}):t._e()]],2)],1)},i=[],o=e("6eceb"),c={name:"Customer",data:function(){return{loading:!1,calendarId:"",calendars:[],successes:[],offset:12,pagination:{},per_page:15,search:"",oldVal:"",summary:{},statuses:[],headers:[{text:"ລຳດັບ",value:"route_plan_detail.priority"},{text:"ຊື່ລູກຄ້າ",value:"customer"},{text:"ເລີ່ມວັນທີ",value:"route_plan_detail.customer.start_month"},{text:"ຈຳນວນຂີ້ເຫື້ຍອ",value:"amount",align:"center",sortable:!1},{text:"ສະຖານະ",value:"status",align:"center",sortable:!1},{text:"",value:"actions",sortable:!1}]}},methods:{fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("plan-calendar/"+this.$route.params.id+"/detail",{params:{page:this.pagination.current_page,per_page:this.per_page,statuses:this.statuses}}).then((function(a){200==a.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.calendars=[],t.pagination=[],t.calendars=a.data.data.data,console.log(t.calendars),t.summary=a.data.data.summary,t.pagination=a.data.data.pagination}),100)})).catch((function(a){t.$store.commit("Loading_State",!1),t.fetchData(),422==a.response.status&&(t.toast.msg=a.message)}))},statusColor:function(t){return"pending"==t?"info":"success"==t?"success":"error"},getUnit:function(t){return"bag"==t?"ຖົງ":"Container"},Search:function(){Object(o["a"])(this)},viewPage:function(t,a){this.$router.push({name:"TrashDetail",params:{plan_calendar:t,id:a}})}},watch:{search:function(t){""==t&&this.fetchData()}},created:function(){this.fetchData()}},u={mixins:[c],name:"Trash",data:function(){return{headers:[{text:"ລຳດັບ",value:"route_plan_detail.priority"},{text:"ຊື່ລູກຄ້າ",value:"customer"},{text:"ເລີ່ມວັນທີ",value:"route_plan_detail.customer.start_month"},{text:"ຈຳນວນຂີ້ເຫື້ຍອ",value:"amount",align:"center",sortable:!1},{text:"ສະຖານະ",value:"status",align:"center",sortable:!1},{text:"",value:"actions",sortable:!1}]}},methods:{backPrevios:function(){this.$router.go(-1)}},watch:{},created:function(){}},l=u,d=(e("e0f7"),e("2877")),m=e("6544"),p=e.n(m),h=e("2bc5"),f=e("cc20"),v=e("62ad"),_=e("a523"),b=e("8fea"),g=e("132d"),y=e("0fd9"),x=e("8654"),k=Object(d["a"])(l,r,i,!1,null,null,null),V=k.exports;p()(k,{VBreadcrumbs:h["a"],VChip:f["a"],VCol:v["a"],VContainer:_["a"],VDataTable:b["a"],VIcon:g["a"],VRow:y["a"],VTextField:x["a"]});var C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",[e("v-col",[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{large:""}},[t._v(" ຂີ້ເຫຍື້ຍອທີ່ລໍຖ້າເກັບ")])],1),e("v-col",[e("v-text-field",{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຊື່",type:"text"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1)],1),e("div",[t.pending?e("v-data-table",{attrs:{headers:t.headers,items:t.pending,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.customer",fn:function(a){var n=a.item;return[n.route_plan_detail.customer?e("div",[t._v(" "+t._s(n.route_plan_detail.customer.name)+" "+t._s(n.route_plan_detail.customer.surname)+" ")]):t._e()]}},{key:"item.status",fn:function(a){var n=a.item;return[e("v-chip",{attrs:{color:t.statusColor(n.status)}},[t._v(t._s(n.status))])]}},{key:"item.amount",fn:function(a){var n=a.item;return["bag"==n.collection_type?e("div",[e("v-chip",{attrs:{color:"primary"}},[t._v(t._s(n.bag))]),e("span",[t._v(" "+t._s(t.getUnit(n.collection_type)))])],1):e("div",[e("v-chip",{attrs:{color:"success"}},[t._v(t._s(n.container))]),e("span",[t._v(" "+t._s(t.getUnit(n.collection_type)))])],1)]}},{key:"item.actions",fn:function(a){var n=a.item;return[e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return t.viewPage(n.plan_calendar_id,n.id)}}},[t._v(" mdi-eye ")])]}}],null,!1,4265659105)}):t._e(),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(a){return t.fetchData()}}}):t._e()]],2)],1)},$=[],D={name:"Trash",data:function(){return{pending:[],loading:!1,calendarId:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",statuses:["pending"],headers:[{text:"ລຳດັບ",value:"route_plan_detail.priority"},{text:"ຊື່ລູກຄ້າ",value:"customer"},{text:"ເລີ່ມວັນທີ",value:"route_plan_detail.customer.start_month"},{text:"ຈຳນວນຂີ້ເຫື້ຍອ",value:"amount",align:"center",sortable:!1},{text:"ສະຖານະ",value:"status",align:"center",sortable:!1},{text:"",value:"actions",sortable:!1}]}},methods:{backPrevios:function(){this.$router.go(-1)},fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("plan-calendar/"+this.$route.params.id+"/detail",{params:{page:this.pagination.current_page,per_page:this.per_page,statuses:this.statuses}}).then((function(a){200==a.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.pending=a.data.data.data,t.summary=a.data.data.summary,t.pagination=a.data.data.pagination}),100)})).catch((function(a){t.$store.commit("Loading_State",!1),t.fetchData(),422==a.response.status&&(t.toast.msg=a.message)}))},statusColor:function(t){return"pending"==t?"info":"success"==t?"success":"error"},getUnit:function(t){return"bag"==t?"ຖົງ":"Container"},Search:function(){Object(o["a"])(this)},viewPage:function(t,a){this.$router.push({name:"TrashDetail",params:{plan_calendar:t,id:a}})}},watch:{search:function(t){""==t&&this.fetchData()}},created:function(){this.fetchData()}},T=D,w=(e("bee6"),Object(d["a"])(T,C,$,!1,null,null,null)),S=w.exports;p()(w,{VBreadcrumbs:h["a"],VChip:f["a"],VCol:v["a"],VContainer:_["a"],VDataTable:b["a"],VIcon:g["a"],VRow:y["a"],VTextField:x["a"]});var O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",[e("v-col",[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{large:""}},[t._v(" ຂີ້ເຫຍື້ຍອທີ່ເກັບສຳເລັດແລ້ວ")])],1),e("v-col",[e("v-text-field",{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຊື່",type:"text"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1)],1),e("div",[t.successes?e("v-data-table",{attrs:{headers:t.headers,items:t.successes,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.customer",fn:function(a){var n=a.item;return[n.route_plan_detail.customer?e("div",[t._v(" "+t._s(n.route_plan_detail.customer.name)+" "+t._s(n.route_plan_detail.customer.surname)+" ")]):t._e()]}},{key:"item.status",fn:function(a){var n=a.item;return[e("v-chip",{attrs:{color:t.statusColor(n.status)}},[t._v(t._s(n.status))])]}},{key:"item.amount",fn:function(a){var n=a.item;return["bag"==n.collection_type?e("div",[e("v-chip",{attrs:{color:"primary"}},[t._v(t._s(n.bag))]),e("span",[t._v(" "+t._s(t.getUnit(n.collection_type)))])],1):e("div",[e("v-chip",{attrs:{color:"success"}},[t._v(t._s(n.container))]),e("span",[t._v(" "+t._s(t.getUnit(n.collection_type)))])],1)]}},{key:"item.actions",fn:function(a){var n=a.item;return[e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return t.viewPage(n.plan_calendar_id,n.id)}}},[t._v(" mdi-eye ")])]}}],null,!1,4265659105)}):t._e(),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(a){return t.fetchData()}}}):t._e()]],2)],1)},j=[],P={name:"Trash",data:function(){return{offset:12,successes:[],pagination:{},per_page:15,search:"",summary:{},statuses:["success"],headers:[{text:"ລຳດັບ",value:"route_plan_detail.priority"},{text:"ຊື່ລູກຄ້າ",value:"customer"},{text:"ເລີ່ມວັນທີ",value:"route_plan_detail.customer.start_month"},{text:"ຈຳນວນຂີ້ເຫື້ຍອ",value:"amount",align:"center",sortable:!1},{text:"ສະຖານະ",value:"status",align:"center",sortable:!1},{text:"",value:"actions",sortable:!1}]}},methods:{backPrevios:function(){this.$router.go(-1)},fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("plan-calendar/"+this.$route.params.id+"/detail",{params:{page:this.pagination.current_page,per_page:this.per_page,statuses:this.statuses}}).then((function(a){200==a.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.successes=a.data.data.data,t.summary=a.data.data.summary,t.pagination=a.data.data.pagination}),100)})).catch((function(a){t.$store.commit("Loading_State",!1),t.fetchData(),422==a.response.status&&(t.toast.msg=a.message)}))},statusColor:function(t){return"pending"==t?"info":"success"==t?"success":"error"},getUnit:function(t){return console.log(t),"bag"==t?"ຖົງ":"Container"},Search:function(){Object(o["a"])(this)},viewPage:function(t,a){this.$router.push({name:"TrashDetail",params:{plan_calendar:t,id:a}})}},watch:{search:function(t){""==t&&this.fetchData()}},created:function(){this.fetchData()}},L=P,I=(e("e3e4"),Object(d["a"])(L,O,j,!1,null,null,null)),E=I.exports;p()(I,{VBreadcrumbs:h["a"],VChip:f["a"],VCol:v["a"],VContainer:_["a"],VDataTable:b["a"],VIcon:g["a"],VRow:y["a"],VTextField:x["a"]});var U={mixins:[c],components:{allTrash:V,pendingTrash:S,successTrash:E},data:function(){return{tab:null}},methods:{backPrevios:function(){this.$router.go(-2)}},created:function(){"trash-all"==this.$route.query.tab?this.tab="tab-1":"trash-pending"==this.$route.query.tab?this.tab="tab-2":"trash-success"==this.$route.query.tab&&(this.tab="tab-3")},watch:{tab:function(t){"tab-1"==t?this.$router.push({name:"PlanCalendarDetail",query:{tab:"trash-all"}}).catch((function(){})):"tab-2"==t?this.$router.push({name:"PlanCalendarDetail",query:{tab:"trash-pending"}}).catch((function(){})):"tab-3"==t&&this.$router.push({name:"PlanCalendarDetail",query:{tab:"trash-success"}}).catch((function(){}))}}},B=U,q=e("4ca6"),R=e("8336"),F=e("b0af"),A=e("99d9"),J=e("71a3"),z=e("c671"),G=e("fe57"),H=e("aac8"),K=Object(d["a"])(B,n,s,!1,null,null,null);a["default"]=K.exports;p()(K,{VBadge:q["a"],VBreadcrumbs:h["a"],VBtn:R["a"],VCard:F["a"],VCardText:A["b"],VContainer:_["a"],VIcon:g["a"],VTab:J["a"],VTabItem:z["a"],VTabs:G["a"],VTabsItems:H["a"]})}}]);
//# sourceMappingURL=chunk-5d36b001.760c25bd.js.map