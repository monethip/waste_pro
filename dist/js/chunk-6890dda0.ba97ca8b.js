(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6890dda0"],{"4bd4":function(t,a,e){"use strict";var n=e("5530"),r=(e("caad"),e("2532"),e("07ac"),e("4de4"),e("159b"),e("7db0"),e("58df")),s=e("7e2b"),i=e("3206");a["a"]=Object(r["a"])(s["a"],Object(i["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var a=Object.values(t).includes(!0);this.$emit("input",!a)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var a=this,e=function(t){return t.$watch("hasError",(function(e){a.$set(a.errorBag,t._uid,e)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(a.errorBag.hasOwnProperty(t._uid)||(n.valid=e(t)))})):n.valid=e(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var a=this.inputs.find((function(a){return a._uid===t._uid}));if(a){var e=this.watchers.find((function(t){return t._uid===a._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==a._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==a._uid})),this.$delete(this.errorBag,a._uid)}}},render:function(t){var a=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return a.$emit("submit",t)}}},this.$slots.default)}})},"4f14":function(t,a,e){},"4fad":function(t,a,e){var n=e("23e7"),r=e("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return r(t)}})},"696a":function(t,a,e){},"6d9e":function(t,a,e){},"6eceb":function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));e("ac1f"),e("841c");var n=function(t){""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},"7c62":function(t,a,e){},a887:function(t,a,e){},b607:function(t,a,e){"use strict";e("696a")},bee6:function(t,a,e){"use strict";e("7c62")},e0f7:function(t,a,e){"use strict";e("6d9e")},e3e4:function(t,a,e){"use strict";e("4f14")},ebfe:function(t,a,e){"use strict";e("a887")},f0ce:function(t,a,e){},f0d1:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-breadcrumbs",{staticClass:"pt-0",attrs:{large:""}},[e("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(a){return t.backPrevios()}}},[e("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" ລາຍລະອຽດແຜນ")],1),e("v-row",[e("v-col",[t.data.plan_month?e("p",[t._v(" "+t._s(t.data.plan_month.name)+" - "+t._s(t.data.route_plan.name)+" - "+t._s(t.data.plan_month.name)+" "),e("span",{staticClass:"primary-color"},[t._v("("+t._s(t.data.driver.name)+"),")]),t._v(" ວັນທີ "+t._s(t.data.date)+" ")]):t._e()])],1),e("v-card",{attrs:{elevation:"1"}},[e("v-card-text",[e("v-tabs",{model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("v-tab",{attrs:{href:"#tab-1"}},[t._v(" ທັງໝົດ ")]),e("v-tab",{attrs:{href:"#tab-2"}},[e("v-badge",{attrs:{color:"info",content:t.summary.pending_count}},[t._v(" ລໍຖ້າເກັບ ")])],1),e("v-tab",{attrs:{href:"#tab-3"}},[e("v-badge",{attrs:{color:"warning",content:t.summary.wait_to_confirm_count}},[t._v(" ລໍຖ້າຢືນຢັນ ")])],1),e("v-tab",{attrs:{href:"#tab-4"}},[e("v-badge",{attrs:{color:"success",content:t.summary.success_count}},[t._v(" ສຳເລັດ ")])],1),e("v-tab",{attrs:{href:"#tab-5"}},[e("v-badge",{attrs:{color:"red",content:t.summary.reject_count}},[t._v(" ປະຕິເສດການເກັບ ")])],1),e("v-tab",{attrs:{href:"#tab-6"}},[e("v-badge",{attrs:{color:"orange",content:t.summary.canceled_count}},[t._v(" ຍົກເລີກການເກັບ ")])],1)],1),e("v-tabs-items",{model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("v-tab-item",{attrs:{value:"tab-1"}},[e("allTrash")],1)],1),e("v-tabs-items",{model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("v-tab-item",{attrs:{value:"tab-2"}},[e("v-card",{attrs:{flat:""}},[e("v-card-text",[e("pendingTrash")],1)],1)],1)],1),e("v-tabs-items",{model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("v-tab-item",{attrs:{value:"tab-3"}},[e("v-card",{attrs:{flat:""}},[e("v-card-text",[e("waitToConfirmTrash")],1)],1)],1)],1),e("v-tabs-items",{model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("v-tab-item",{attrs:{value:"tab-4"}},[e("v-card",{attrs:{flat:""}},[e("v-card-text",[e("successTrash")],1)],1)],1)],1),e("v-tabs-items",{model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("v-tab-item",{attrs:{value:"tab-5"}},[e("v-card",{attrs:{flat:""}},[e("v-card-text",[e("rejectTrash")],1)],1)],1)],1),e("v-tabs-items",{model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("v-tab-item",{attrs:{value:"tab-6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-text",[e("cancel-trash")],1)],1)],1)],1)],1)],1)],1)},r=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",[e("v-col",[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{large:""}},[t._v(" ຂີ້ເຫື້ຍອທັງໝົດ")])],1)],1),e("div",[t.calendars?e("v-data-table",{attrs:{headers:t.headers,items:t.calendars,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.customer",fn:function(a){var n=a.item;return[(n.route_plan_detail.customer.customer_type="company")?e("div",[t._v(" "+t._s(n.route_plan_detail.customer.company_name)+" ")]):t._e(),e("div",[t._v(" "+t._s(n.route_plan_detail.customer.name)+" "+t._s(n.route_plan_detail.customer.surname)+" ")])]}},{key:"item.created_at",fn:function(a){var n=a.item;return[e("div",[t._v(" "+t._s(t.moment(n.created_at).format("hh:mm:ss DD-MM-YY"))+" ")])]}},{key:"item.updated_at",fn:function(a){var n=a.item;return[e("div",[t._v(" "+t._s(t.moment(n.updated_at).format("hh:mm:ss DD-MM-YY"))+" ")])]}},{key:"item.status",fn:function(a){var n=a.item;return[e("v-chip",{attrs:{label:"",color:t.statusColor(n.status)}},[t._v(t._s(n.status))])]}},{key:"item.amount",fn:function(a){var n=a.item;return["bag"==n.collection_type?e("div",[e("v-chip",{attrs:{color:"primary"}},[t._v(t._s(n.bag))]),e("span",[t._v(" "+t._s(t.getUnit(n.collection_type)))])],1):e("div",[e("v-chip",{attrs:{color:"success"}},[t._v(t._s(n.container))]),e("span",[t._v(" "+t._s(t.getUnit(n.collection_type)))])],1)]}},{key:"item.actions",fn:function(a){var n=a.item;return[e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return t.viewPage(n.plan_calendar_id,n.id)}}},[t._v(" mdi-eye ")])]}}],null,!1,2196510553)}):t._e(),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(a){return t.fetchData()}}}):t._e()]],2)],1)},i=[],o=e("6eceb"),c={name:"Customer",data:function(){return{loading:!1,calendarId:"",calendars:[],successes:[],offset:12,pagination:{},per_page:15,search:"",oldVal:"",summary:{},statuses:[],plan_monthId:this.$route.params.id,headers:[{text:"ລຳດັບ",value:"route_plan_detail.priority"},{text:"ຊື່ລູກຄ້າ",value:"customer"},{text:"ເລີ່ມວັນທີ",value:"route_plan_detail.customer.start_month"},{text:"ຈຳນວນຂີ້ເຫື້ຍອ",value:"amount",align:"center",sortable:!1},{text:"ສະຖານະ",value:"status",align:"center",sortable:!1},{text:"",value:"actions",sortable:!1}]}},methods:{fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("plan-calendar/"+this.$route.params.id+"/detail",{params:{page:this.pagination.current_page,per_page:this.per_page,statuses:this.statuses}}).then((function(a){200==a.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.calendars=[],t.pagination=[],t.calendars=a.data.data.data,t.summary=a.data.data.summary,t.pagination=a.data.data.pagination}),100)})).catch((function(a){t.$store.commit("Loading_State",!1),422==a.response.status&&(t.toast.msg=a.message)}))},statusColor:function(t){return"pending"==t?"info":"success"==t?"success":"error"},getUnit:function(t){return"bag"==t?"ຖົງ":"Container"},Search:function(){Object(o["a"])(this)},viewPage:function(t,a){this.$router.push({name:"TrashDetail",params:{plan_calendar:t,id:a}})}},watch:{search:function(t){""==t&&this.fetchData()}},created:function(){this.fetchData()}},u={mixins:[c],name:"Trash",data:function(){return{headers:[{text:"ລຳດັບ",value:"route_plan_detail.priority"},{text:"ລູກຄ້າ",value:"customer"},{text:"ຈຳນວນຂີ້ເຫື້ຍອ",value:"amount",align:"center",sortable:!1},{text:"ສະຖານະ",value:"status",align:"center",sortable:!1},{text:"Created",value:"created_at",align:"center",sortable:!1},{text:"Updated",value:"updated_at",align:"center",sortable:!1},{text:"",value:"actions",sortable:!1}]}},methods:{backPrevios:function(){this.$router.go(-1)}},watch:{},created:function(){}},l=u,d=(e("e0f7"),e("2877")),m=e("6544"),p=e.n(m),f=e("2bc5"),h=e("cc20"),v=e("62ad"),_=e("a523"),g=e("8fea"),b=e("132d"),y=e("0fd9"),x=Object(d["a"])(l,s,i,!1,null,null,null),V=x.exports;p()(x,{VBreadcrumbs:f["a"],VChip:h["a"],VCol:v["a"],VContainer:_["a"],VDataTable:g["a"],VIcon:b["a"],VRow:y["a"]});var $=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",[e("v-col",[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{large:""}},[t._v(" ຂີ້ເຫື້ຍອທີ່ລໍຖ້າເກັບ")])],1)],1),e("div",[t.pending?e("v-data-table",{attrs:{headers:t.headers,items:t.pending,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.customer",fn:function(a){var n=a.item;return[(n.route_plan_detail.customer.customer_type="company")?e("div",[t._v(" "+t._s(n.route_plan_detail.customer.company_name)+" ")]):t._e(),e("div",[t._v(" "+t._s(n.route_plan_detail.customer.name)+" "+t._s(n.route_plan_detail.customer.surname)+" ")])]}},{key:"item.status",fn:function(a){var n=a.item;return[e("v-chip",{attrs:{color:"info"}},[t._v(t._s(n.status))])]}},{key:"item.amount",fn:function(a){var n=a.item;return["bag"==n.collection_type?e("div",[e("v-chip",{attrs:{color:"primary"}},[t._v(t._s(n.bag))]),e("span",[t._v(" "+t._s(t.getUnit(n.collection_type)))])],1):e("div",[e("v-chip",{attrs:{color:"success"}},[t._v(t._s(n.container))]),e("span",[t._v(" "+t._s(t.getUnit(n.collection_type)))])],1)]}},{key:"item.actions",fn:function(a){var n=a.item;return[e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return t.viewPage(n.plan_calendar_id,n.id)}}},[t._v(" mdi-eye ")])]}}],null,!1,1451884960)}):t._e(),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(a){return t.fetchData()}}}):t._e()]],2)],1)},C=[],D={name:"Trash",data:function(){return{pending:[],loading:!1,calendarId:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",statuses:["pending"],headers:[{text:"ລຳດັບ",value:"route_plan_detail.priority"},{text:"ລູກຄ້າ",value:"customer"},{text:"ຈຳນວນຂີ້ເຫື້ຍອ",value:"amount",align:"center",sortable:!1},{text:"ສະຖານະ",value:"status",align:"center",sortable:!1},{text:"",value:"actions",sortable:!1}]}},methods:{backPrevios:function(){this.$router.go(-1)},fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("plan-calendar/"+this.$route.params.id+"/detail",{params:{page:this.pagination.current_page,per_page:this.per_page,statuses:this.statuses}}).then((function(a){200==a.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.pending=a.data.data.data,t.summary=a.data.data.summary,t.pagination=a.data.data.pagination}),100)})).catch((function(a){t.$store.commit("Loading_State",!1),t.fetchData(),422==a.response.status&&(t.toast.msg=a.message)}))},statusColor:function(t){return"pending"==t?"info":"success"==t?"success":"error"},getUnit:function(t){return"bag"==t?"ຖົງ":"Container"},Search:function(){Object(o["a"])(this)},viewPage:function(t,a){this.$router.push({name:"TrashDetail",params:{plan_calendar:t,id:a}})}},watch:{search:function(t){""==t&&this.fetchData()}},created:function(){this.fetchData()}},w=D,k=(e("bee6"),Object(d["a"])(w,$,C,!1,null,null,null)),T=k.exports;p()(k,{VBreadcrumbs:f["a"],VChip:h["a"],VCol:v["a"],VContainer:_["a"],VDataTable:g["a"],VIcon:b["a"],VRow:y["a"]});var S=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",[e("v-col",[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{large:""}},[t._v(" ຂີ້ເຫື້ຍອທີ່ເກັບສຳເລັດແລ້ວ")])],1)],1),e("div",[t.successes?e("v-data-table",{attrs:{headers:t.headers,items:t.successes,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.customer",fn:function(a){var n=a.item;return[(n.route_plan_detail.customer.customer_type="company")?e("div",[t._v(" "+t._s(n.route_plan_detail.customer.company_name)+" ")]):t._e(),e("div",[t._v(" "+t._s(n.route_plan_detail.customer.name)+" "+t._s(n.route_plan_detail.customer.surname)+" ")])]}},{key:"item.created_at",fn:function(a){var n=a.item;return[e("div",[t._v(" "+t._s(t.moment(n.created_at).format("hh:mm:ss DD-MM-YY"))+" ")])]}},{key:"item.updated_at",fn:function(a){var n=a.item;return[e("div",[t._v(" "+t._s(t.moment(n.updated_at).format("hh:mm:ss DD-MM-YY"))+" ")])]}},{key:"item.status",fn:function(a){var n=a.item;return[e("v-chip",{attrs:{label:"",color:"success"}},[t._v(t._s(n.status))])]}},{key:"item.amount",fn:function(a){var n=a.item;return["bag"==n.collection_type?e("div",[e("v-chip",{attrs:{color:"primary"}},[t._v(t._s(n.bag))]),e("span",[t._v(" "+t._s(t.getUnit(n.collection_type)))])],1):e("div",[e("v-chip",{attrs:{color:"success"}},[t._v(t._s(n.container))]),e("span",[t._v(" "+t._s(t.getUnit(n.collection_type)))])],1)]}},{key:"item.actions",fn:function(a){var n=a.item;return[e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return t.viewPage(n.plan_calendar_id,n.id)}}},[t._v(" mdi-eye ")])]}}],null,!1,2106713885)}):t._e(),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(a){return t.fetchData()}}}):t._e()]],2)],1)},P=[],j={name:"Trash",data:function(){return{offset:12,successes:[],pagination:{},per_page:15,search:"",summary:{},statuses:["success"],headers:[{text:"ລຳດັບ",value:"route_plan_detail.priority"},{text:"ລູກຄ້າ",value:"customer"},{text:"ຈຳນວນຂີ້ເຫື້ຍອ",value:"amount",align:"center",sortable:!1},{text:"ສະຖານະ",value:"status",align:"center",sortable:!1},{text:"Created",value:"created_at",align:"center",sortable:!1},{text:"Updated",value:"updated_at",align:"center",sortable:!1},{text:"",value:"actions",sortable:!1}]}},methods:{backPrevios:function(){this.$router.go(-1)},fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("plan-calendar/"+this.$route.params.id+"/detail",{params:{page:this.pagination.current_page,per_page:this.per_page,statuses:this.statuses}}).then((function(a){200==a.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.successes=a.data.data.data,t.summary=a.data.data.summary,t.pagination=a.data.data.pagination}),100)})).catch((function(a){t.$store.commit("Loading_State",!1),t.fetchData(),422==a.response.status&&(t.toast.msg=a.message)}))},statusColor:function(t){return"pending"==t?"info":"success"==t?"success":"error"},getUnit:function(t){return"bag"==t?"ຖົງ":"Container"},Search:function(){Object(o["a"])(this)},viewPage:function(t,a){this.$router.push({name:"TrashDetail",params:{plan_calendar:t,id:a}})}},watch:{search:function(t){""==t&&this.fetchData()}},created:function(){this.fetchData()}},B=j,U=(e("e3e4"),Object(d["a"])(B,S,P,!1,null,null,null)),I=U.exports;p()(U,{VBreadcrumbs:f["a"],VChip:h["a"],VCol:v["a"],VContainer:_["a"],VDataTable:g["a"],VIcon:b["a"],VRow:y["a"]});var O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",[e("v-col",[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{large:""}},[t._v(" ຂີ້ເຫື້ຍອທີ່ລໍຖ້າເກັບ")])],1)],1),e("div",[t.pending?e("v-data-table",{attrs:{headers:t.headers,items:t.pending,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.customer",fn:function(a){var n=a.item;return[(n.route_plan_detail.customer.customer_type="company")?e("div",[t._v(" "+t._s(n.route_plan_detail.customer.company_name)+" ")]):t._e(),e("div",[t._v(" "+t._s(n.route_plan_detail.customer.name)+" "+t._s(n.route_plan_detail.customer.surname)+" ")])]}},{key:"item.status",fn:function(a){var n=a.item;return[e("v-chip",{attrs:{color:"warning",label:""}},[t._v(t._s(n.status))])]}},{key:"item.amount",fn:function(a){var n=a.item;return["bag"==n.collection_type?e("div",[e("v-chip",{attrs:{color:"primary"}},[t._v(t._s(n.bag))]),e("span",[t._v(" "+t._s(t.getUnit(n.collection_type)))])],1):e("div",[e("v-chip",{attrs:{color:"success"}},[t._v(t._s(n.container))]),e("span",[t._v(" "+t._s(t.getUnit(n.collection_type)))])],1)]}},{key:"item.actions",fn:function(a){var n=a.item;return[e("v-icon",{staticClass:"mr-4",attrs:{small:""},on:{click:function(a){return t.viewPage(n.plan_calendar_id,n.id)}}},[t._v(" mdi-eye ")]),e("v-icon",{attrs:{small:""},on:{click:function(a){return t.openUpdate(n)}}},[t._v(" mdi-truck ")])]}}],null,!1,4214079751)}):t._e(),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(a){return t.fetchData()}}}):t._e()]],2),e("v-dialog",{attrs:{"max-width":"620px",persistent:""},model:{value:t.confirmDialog,callback:function(a){t.confirmDialog=a},expression:"confirmDialog"}},[[e("v-card",[e("v-card-text",[e("v-card-title",[e("p",[e("v-icon",{staticClass:"primary-color",attrs:{large:"",color:"success"}},[t._v("mdi-checkbox-marked-circle-outline ")]),t._v(" ຢືນຢັນການເກັບຂີ້ເຫື້ອຍ ")],1)]),e("v-container",[e("v-form",{ref:"form",attrs:{"lazy-validation":""}},[e("div",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-select",{attrs:{label:"ສະຖານະການຊຳລະ",outlined:"",dense:"",items:t.confirm_statues,"item-text":"name","item-value":"value"},model:{value:t.confirm_status,callback:function(a){t.confirm_status=a},expression:"confirm_status"}})],1)],1),"reject"==t.confirm_status?e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{label:"Description",outlined:"",dense:"",type:"text"},model:{value:t.description,callback:function(a){t.description=a},expression:"description"}})],1)],1):t._e(),e("v-row",[e("v-card-actions",[e("v-btn",{staticClass:"white--text px-12 c-btn",attrs:{color:"blue",medium:"",loading:t.loading,disabled:t.loading},on:{click:function(a){return t.confirmStatus()}}},[t._v(" ຢືນຢັນ ")]),e("v-btn",{staticClass:"white--text px-12 c-btn",attrs:{color:"error",medium:"",loading:t.loading,disabled:t.loading},on:{click:function(a){t.confirmDialog=!1}}},[t._v(" Close ")])],1)],1)],1)])],1)],1)],1)]],2)],1)},L=[],E=e("3835"),q=(e("a4d3"),e("e01a"),e("4fad"),{name:"Trash",data:function(){return{pending:[],loading:!1,calendarId:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",statuses:["wait_to_confirm"],confirm_status:"",confirm_statues:[{name:"Success",value:"success"},{name:"Reject",value:"reject"}],confirmDialog:!1,editItem:{},description:"",server_errors:{},headers:[{text:"ລຳດັບ",value:"route_plan_detail.priority"},{text:"ລູກຄ້າ",value:"customer"},{text:"ຈຳນວນຂີ້ເຫື້ຍອ",value:"amount",align:"center",sortable:!1},{text:"ສະຖານະ",value:"status",align:"center",sortable:!1},{text:"",value:"actions",sortable:!1}]}},methods:{backPrevios:function(){this.$router.go(-1)},fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("plan-calendar/"+this.$route.params.id+"/detail",{params:{page:this.pagination.current_page,per_page:this.per_page,statuses:this.statuses}}).then((function(a){200==a.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.pending=a.data.data.data,t.summary=a.data.data.summary,t.pagination=a.data.data.pagination}),100)})).catch((function(a){t.$store.commit("Loading_State",!1),t.fetchData(),422==a.response.status&&(t.toast.msg=a.message)}))},openUpdate:function(t){console.log(t),this.editItem=t,this.confirmDialog=!0},confirmStatus:function(){var t=this;this.loading=!0;var a=new FormData;a.append("status",this.confirm_status),"reject"==this.confirm_status&&a.append("description",this.description),this.$axios.post("admin-collection/"+this.editItem.id+"/status",a).then((function(a){200==a.data.code&&setTimeout((function(){t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"success",msg:a.data.message}),t.fetchData(),t.confirmDialog=!1}),300)})).catch((function(a){if(t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"error",msg:a.response.data.message}),422==a.response.status)for(var e=a.response.data.errors,n=0,r=Object.entries(e);n<r.length;n++){var s=Object(E["a"])(r[n],2),i=s[0],o=s[1];t.server_errors[i]=o[0]}}))},statusColor:function(t){return"pending"==t?"info":"success"==t?"success":"error"},getUnit:function(t){return"bag"==t?"ຖົງ":"Container"},Search:function(){Object(o["a"])(this)},viewPage:function(t,a){this.$router.push({name:"TrashDetail",params:{plan_calendar:t,id:a}})}},watch:{search:function(t){""==t&&this.fetchData()}},created:function(){this.fetchData()}}),M=q,R=(e("b607"),e("8336")),Y=e("b0af"),z=e("99d9"),F=e("169a"),A=e("4bd4"),J=e("b974"),W=e("8654"),G=Object(d["a"])(M,O,L,!1,null,null,null),H=G.exports;p()(G,{VBreadcrumbs:f["a"],VBtn:R["a"],VCard:Y["a"],VCardActions:z["a"],VCardText:z["b"],VCardTitle:z["c"],VChip:h["a"],VCol:v["a"],VContainer:_["a"],VDataTable:g["a"],VDialog:F["a"],VForm:A["a"],VIcon:b["a"],VRow:y["a"],VSelect:J["a"],VTextField:W["a"]});var K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",[e("v-col",[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{large:""}},[t._v(" ຂີ້ເຫື້ຍອທີ່ລໍຖ້າເກັບ")])],1)],1),e("div",[t.pending?e("v-data-table",{attrs:{headers:t.headers,items:t.pending,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.customer",fn:function(a){var n=a.item;return[(n.route_plan_detail.customer.customer_type="company")?e("div",[t._v(" "+t._s(n.route_plan_detail.customer.company_name)+" ")]):t._e(),e("div",[t._v(" "+t._s(n.route_plan_detail.customer.name)+" "+t._s(n.route_plan_detail.customer.surname)+" ")])]}},{key:"item.status",fn:function(a){var n=a.item;return[e("v-chip",{attrs:{color:"error",label:""}},[t._v(t._s(n.status))])]}},{key:"item.amount",fn:function(a){var n=a.item;return["bag"==n.collection_type?e("div",[e("v-chip",{attrs:{color:"primary"}},[t._v(t._s(n.bag))]),e("span",[t._v(" "+t._s(t.getUnit(n.collection_type)))])],1):e("div",[e("v-chip",{attrs:{color:"success"}},[t._v(t._s(n.container))]),e("span",[t._v(" "+t._s(t.getUnit(n.collection_type)))])],1)]}},{key:"item.actions",fn:function(a){var n=a.item;return[e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return t.viewPage(n.plan_calendar_id,n.id)}}},[t._v(" mdi-eye ")])]}}],null,!1,3692996454)}):t._e(),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(a){return t.fetchData()}}}):t._e()]],2)],1)},N=[],Q={name:"Trash",data:function(){return{pending:[],loading:!1,calendarId:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",statuses:["reject"],headers:[{text:"ລຳດັບ",value:"route_plan_detail.priority"},{text:"ລູກຄ້າ",value:"customer"},{text:"ຈຳນວນຂີ້ເຫື້ຍອ",value:"amount",align:"center",sortable:!1},{text:"ສະຖານະ",value:"status",align:"center",sortable:!1},{text:"",value:"actions",sortable:!1}]}},methods:{backPrevios:function(){this.$router.go(-1)},fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("plan-calendar/"+this.$route.params.id+"/detail",{params:{page:this.pagination.current_page,per_page:this.per_page,statuses:this.statuses}}).then((function(a){200==a.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.pending=a.data.data.data,t.summary=a.data.data.summary,t.pagination=a.data.data.pagination}),100)})).catch((function(a){t.$store.commit("Loading_State",!1),t.fetchData(),422==a.response.status&&(t.toast.msg=a.message)}))},statusColor:function(t){return"pending"==t?"info":"success"==t?"success":"error"},getUnit:function(t){return"bag"==t?"ຖົງ":"Container"},Search:function(){Object(o["a"])(this)},viewPage:function(t,a){this.$router.push({name:"TrashDetail",params:{plan_calendar:t,id:a}})}},watch:{search:function(t){""==t&&this.fetchData()}},created:function(){this.fetchData()}},X=Q,Z=(e("ebfe"),Object(d["a"])(X,K,N,!1,null,null,null)),tt=Z.exports;p()(Z,{VBreadcrumbs:f["a"],VChip:h["a"],VCol:v["a"],VContainer:_["a"],VDataTable:g["a"],VIcon:b["a"],VRow:y["a"]});var at=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",[e("v-col",[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{large:""}},[t._v(" ຂີ້ເຫື້ຍອທີ່ຍັກເລີກ")])],1)],1),e("div",[t.pending?e("v-data-table",{attrs:{headers:t.headers,items:t.pending,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.customer",fn:function(a){var n=a.item;return[(n.route_plan_detail.customer.customer_type="company")?e("div",[t._v(" "+t._s(n.route_plan_detail.customer.company_name)+" ")]):t._e(),e("div",[t._v(" "+t._s(n.route_plan_detail.customer.name)+" "+t._s(n.route_plan_detail.customer.surname)+" ")])]}},{key:"item.status",fn:function(a){var n=a.item;return[e("v-chip",{attrs:{color:"orange",label:""}},[t._v(t._s(n.status))])]}},{key:"item.amount",fn:function(a){var n=a.item;return["bag"==n.collection_type?e("div",[e("v-chip",{attrs:{color:"primary"}},[t._v(t._s(n.bag))]),e("span",[t._v(" "+t._s(t.getUnit(n.collection_type)))])],1):e("div",[e("v-chip",{attrs:{color:"success"}},[t._v(t._s(n.container))]),e("span",[t._v(" "+t._s(t.getUnit(n.collection_type)))])],1)]}},{key:"item.actions",fn:function(a){var n=a.item;return[e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return t.viewPage(n.plan_calendar_id,n.id)}}},[t._v(" mdi-eye ")])]}}],null,!1,643951502)}):t._e(),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(a){return t.fetchData()}}}):t._e()]],2)],1)},et=[],nt={name:"Trash",data:function(){return{pending:[],loading:!1,calendarId:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",statuses:["canceled"],headers:[{text:"ລຳດັບ",value:"route_plan_detail.priority"},{text:"ລູກຄ້າ",value:"customer"},{text:"ຈຳນວນຂີ້ເຫື້ຍອ",value:"amount",align:"center",sortable:!1},{text:"ສະຖານະ",value:"status",align:"center",sortable:!1},{text:"",value:"actions",sortable:!1}]}},methods:{backPrevios:function(){this.$router.go(-1)},fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("plan-calendar/"+this.$route.params.id+"/detail",{params:{page:this.pagination.current_page,per_page:this.per_page,statuses:this.statuses}}).then((function(a){200==a.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.pending=a.data.data.data,t.summary=a.data.data.summary,t.pagination=a.data.data.pagination}),100)})).catch((function(a){t.$store.commit("Loading_State",!1),t.fetchData(),422==a.response.status&&(t.toast.msg=a.message)}))},statusColor:function(t){return console.log(t),"pending"==t?"info":"success"==t?"success":"reject"==t?"error":"cancel"==t?"orange":"error"},getUnit:function(t){return"bag"==t?"ຖົງ":"Container"},Search:function(){Object(o["a"])(this)},viewPage:function(t,a){this.$router.push({name:"TrashDetail",params:{plan_calendar:t,id:a}})}},watch:{search:function(t){""==t&&this.fetchData()}},created:function(){this.fetchData()}},rt=nt,st=(e("fedb"),Object(d["a"])(rt,at,et,!1,null,null,null)),it=st.exports;p()(st,{VBreadcrumbs:f["a"],VChip:h["a"],VCol:v["a"],VContainer:_["a"],VDataTable:g["a"],VIcon:b["a"],VRow:y["a"]});var ot={title:function(){return"Vientiane Waste Co-Dev|Calendar"},mixins:[c],props:["plan"],components:{allTrash:V,pendingTrash:T,successTrash:I,waitToConfirmTrash:H,rejectTrash:tt,cancelTrash:it},data:function(){return{tab:null,data:{}}},methods:{backPrevios:function(){this.$router.go(-1)},fetchDataPlanMonth:function(){var t=this;this.$axios.get("plan-month/"+this.$route.params.planMonthId+"/plan-calendar/"+this.$route.params.id).then((function(a){200==a.data.code&&setTimeout((function(){t.data=a.data.data}),100)})).catch((function(){}))}},created:function(){"trash-all"==this.$route.query.tab?this.tab="tab-1":"trash-pending"==this.$route.query.tab?this.tab="tab-2":"wait-to-confirm"==this.$route.query.tab?this.tab="tab-3":"trash-success"==this.$route.query.tab?this.tab="tab-4":"trash-reject"==this.$route.query.tab?this.tab="tab-5":"trash-cancel"==this.$route.query.tab&&(this.tab="tab-6"),this.fetchDataPlanMonth()},watch:{tab:function(t){"tab-1"==t?this.$router.push({name:"PlanCalendarDetail",query:{tab:"trash-all"}}).catch((function(){})):"tab-2"==t?this.$router.push({name:"PlanCalendarDetail",query:{tab:"trash-pending"}}).catch((function(){})):"tab-3"==t?this.$router.push({name:"PlanCalendarDetail",query:{tab:"wait-to-confirm"}}).catch((function(){})):"tab-4"==t?this.$router.push({name:"PlanCalendarDetail",query:{tab:"trash-success"}}).catch((function(){})):"tab-5"==t?this.$router.push({name:"PlanCalendarDetail",query:{tab:"trash-reject"}}).catch((function(){})):"tab-6"==t&&this.$router.push({name:"PlanCalendarDetail",query:{tab:"trash-cancel"}}).catch((function(){}))}}},ct=ot,ut=e("4ca6"),lt=e("71a3"),dt=e("c671"),mt=e("fe57"),pt=e("aac8"),ft=Object(d["a"])(ct,n,r,!1,null,null,null);a["default"]=ft.exports;p()(ft,{VBadge:ut["a"],VBreadcrumbs:f["a"],VBtn:R["a"],VCard:Y["a"],VCardText:z["b"],VCol:v["a"],VContainer:_["a"],VIcon:b["a"],VRow:y["a"],VTab:lt["a"],VTabItem:dt["a"],VTabs:mt["a"],VTabsItems:pt["a"]})},fedb:function(t,a,e){"use strict";e("f0ce")}}]);
//# sourceMappingURL=chunk-6890dda0.ba97ca8b.js.map