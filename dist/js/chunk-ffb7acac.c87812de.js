(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ffb7acac"],{"2e3b":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",[a("v-breadcrumbs",{staticClass:"pt-0",attrs:{large:""}},[t._v("ລາຍງານຂໍ້ມູນການເກັບຂີ້ເຫື້ອຍພິເສດ ")]),a("v-row",{staticClass:"mb-n6"},[a("v-col",[a("v-btn",{staticClass:"btn-primary",attrs:{loading:t.loading,disabled:t.loading},on:{click:function(e){return t.exportData()}}},[t._v("Export ")])],1),a("v-col",[a("v-select",{attrs:{outlined:"",dense:"",items:t.duration,"item-text":"name","item-value":"duration",label:"ຊ່ວງເວລາ"},model:{value:t.selectedDuration,callback:function(e){t.selectedDuration=e},expression:"selectedDuration"}})],1),"year"==t.selectedDuration?a("v-col",[a("section",[a("date-picker",{staticStyle:{height:"40px"},attrs:{type:"year",format:"YYYY",placeholder:"ເລີ່ມປີ"},model:{value:t.year_from,callback:function(e){t.year_from=e},expression:"year_from"}})],1)]):t._e(),"year"==t.selectedDuration?a("v-col",[a("section",[a("date-picker",{attrs:{type:"year",format:"YYYY",placeholder:"ຫາປີ"},model:{value:t.year_to,callback:function(e){t.year_to=e},expression:"year_to"}})],1)]):t._e(),"month"==t.selectedDuration?a("v-col",[a("section",[a("date-picker",{attrs:{type:"month",placeholder:"ເລີ່ມເດືອນ"},on:{input:function(e){return t.fetchData()}},model:{value:t.month_from,callback:function(e){t.month_from=e},expression:"month_from"}})],1)]):t._e(),"month"==t.selectedDuration?a("v-col",[a("section",[a("date-picker",{attrs:{type:"month",placeholder:"ຫາເດືອນ"},on:{input:function(e){return t.fetchData()}},model:{value:t.month_to,callback:function(e){t.month_to=e},expression:"month_to"}})],1)]):t._e(),"merge"==t.selectedDuration||"date"==t.selectedDuration?a("v-col",[a("section",[a("date-picker",{staticStyle:{height:"40px"},attrs:{type:"date",placeholder:"ເລີ່ມວັນທີ"},on:{input:function(e){return t.fetchData()}},model:{value:t.date_from,callback:function(e){t.date_from=e},expression:"date_from"}})],1)]):t._e(),"merge"==t.selectedDuration||"date"==t.selectedDuration?a("v-col",[a("section",[a("date-picker",{staticStyle:{height:"40px"},attrs:{type:"date",placeholder:"ຫາວັນທີ"},on:{input:function(e){return t.fetchData()}},model:{value:t.date_to,callback:function(e){t.date_to=e},expression:"date_to"}})],1)]):t._e()],1),a("v-row",[a("v-col",{attrs:{cols:""}},[a("v-select",{attrs:{outlined:"",dense:"",items:t.collectionStatus,"item-text":"dis_play","item-value":"name",label:"ສະຖານະບໍລິການ",multiple:"",clearable:""},model:{value:t.selectedCollectionStatus,callback:function(e){t.selectedCollectionStatus=e},expression:"selectedCollectionStatus"}})],1),a("v-col",{attrs:{col:""}},[a("v-select",{attrs:{outlined:"",dense:"",items:t.paymentStatus,"item-text":"dis_play","item-value":"name",label:"ສະຖານະການຊຳລະ",multiple:"",clearable:""},model:{value:t.selectedPaymentStatus,callback:function(e){t.selectedPaymentStatus=e},expression:"selectedPaymentStatus"}})],1)],1),"merge"==t.selectedDuration?a("div",[t.summaryMerge?a("div",[a("v-row",[a("v-col",{staticClass:"sum-total"},[t._v(" ຄຳຂໍຖືກອານຸມັດ: "+t._s(t.summaryMerge.approved_count)+" ")]),a("v-col",{staticClass:"sum-total"},[t._v(" ລົງເກັບແລະລູກຄ້າຢືຢັນແລ້ວ: "+t._s(t.summaryMerge.collect_confirm_count)+" ")]),a("v-col",{staticClass:"sum-total"},[t._v(" ລູກຄ້າປະຕິເສດການລົງເກັບ: "+t._s(t.summaryMerge.collect_reject_count)+" ")]),a("v-col",{staticClass:"sum-total"},[t._v(" ລົງເກັບແລ້ວ(ລໍຖ້າຢືນຢັນ): "+t._s(t.summaryMerge.collected_count)+" ")]),a("v-col",{staticClass:"sum-total"},[t._v(" ຕ້ອງລົງເກັບທັງໝົດ: "+t._s(t.summaryMerge.number_of_times_to_collect)+" ")]),a("v-col",{staticClass:"sum-total"},[t._v(" ຄຳຂໍທີ່ປະຕິເສດແລ້ວ: "+t._s(t.summaryMerge.rejected_count)+" ")]),a("v-col",{staticClass:"sum-total"},[t._v(" ຄຳຂໍລໍຖ້າຢືນຢັນ: "+t._s(t.summaryMerge.requested_count)+" ")])],1)],1):t._e()]):a("div",[t.summary?a("div",t._l(t.summary,(function(e,o){return a("v-row",{key:o,staticClass:"mb-n6 mt-0"},[a("v-col",["year"==t.selectedDuration?a("p",[t._v("ປີ: "+t._s(e.year))]):t._e(),"month"==t.selectedDuration?a("p",[t._v("ເດືອນ: "+t._s(e.month))]):t._e(),"date"==t.selectedDuration?a("p",[t._v("ວັນທີ: "+t._s(t.moment(e.date_collect).format("DD-MM-YY")))]):t._e()]),a("v-col",[a("p",[t._v(" ຄຳຂໍຖືກອານຸມັດ "),a("span",{staticClass:"success--text"},[t._v(t._s(e.approved_count))])])]),a("v-col",[a("p",[t._v(" ລົງເກັບແລະລູກຄ້າຢືຢັນແລ້ວ "),a("span",{staticClass:"success--text"},[t._v(t._s(e.collect_confirm_count))])])]),a("v-col",[a("p",[t._v(" ລູກຄ້າປະຕິເສດການລົງເກັບ "),a("span",{staticClass:"success--text"},[t._v(t._s(e.collect_reject_count))])])]),a("v-col",[a("p",[t._v(" ຕ້ອງລົງເກັບທັງໝົດ "),a("span",{staticClass:"success--text"},[t._v(t._s(e.number_of_times_to_collect))])])]),a("v-col",[a("p",[t._v(" ຄຳຂໍທີ່ປະຕິເສດແລ້ວ "),a("span",{staticClass:"success--text"},[t._v(t._s(e.rejected_count))])])]),a("v-col",[a("p",[t._v(" ລົງເກັບແລ້ວ(ລໍຖ້າຢືນຢັນ) "),a("span",{staticClass:"success--text"},[t._v(t._s(e.collected_count))])])]),a("v-col",[a("p",[t._v(" ຄຳຂໍລໍຖ້າຢືນຢັນ "),a("span",{staticClass:"success--text"},[t._v(t._s(e.requested_count))])])])],1)})),1):t._e()]),a("v-card",[a("v-card-text",[t.homeCollection?a("v-data-table",{attrs:{headers:t.headers,items:t.homeCollection,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.status",fn:function(e){var o=e.item;return[a("v-chip",{attrs:{label:"",color:"primary"}},[t._v(t._s(t.collectStatus(o.collect_status)))])]}}],null,!1,2532982)}):t._e()],1)],1),a("br"),[t.pagination.total_pages>1?a("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)},n=[],s=a("6eceb"),i=(a("d81d"),a("c1df")),c=a.n(i),r={title:function(){return"Vientiane Waste Co-Dev|Report Invoice"},data:function(){return{tab:"tab-1",customers:[],loading:!1,customerId:"",year_from:"",year_to:"",month_from:"",month_to:"",date_from:"",date_to:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",collections:[],homeCollection:[],summary:[],summaryMerge:{},selectedDuration:"year",duration:[{name:"ປີ",duration:"year"},{name:"ເດືອນ",duration:"month"},{name:"ວັນທີ",duration:"date"},{name:"ລວມ",duration:"merge"}],collectionType:"home",selectedCollectionStatus:[],collectionStatus:[{id:1,name:"requested",dis_play:"ຮ້ອງຂໍເກັບຂີ້ເຫື້ອຍ"},{id:2,name:"rejected",dis_play:"ປະຕິເສດເກັບຂີ້ເຫື້ອຍ"},{id:3,name:"approved",dis_play:"ອະນຸມັດເກັບຂີ້ເຫື້ອຍ"},{id:4,name:"collected",dis_play:"ເກັບຂີເຫື້ອຍສຳເລັດ"},{id:5,name:"collect_confirm",dis_play:"ລູກຄ້າຢືນຢັນການເກັບ"},{id:5,name:"collect_reject",dis_play:"ການເກັບຖືກປະຕິເສດ"}],selectedPaymentStatus:[],paymentStatus:[{id:1,name:"pending",dis_play:"ລໍຖ້າເກັບເງິນ"},{id:2,name:"to_confirm_payment",dis_play:"ລໍຖ້າຢືນຢັນຊຳລະ"},{id:3,name:"rejected",dis_play:"ປະຕິເສດການຊຳລະ"},{id:4,name:"success",dis_play:"ຊຳລະສຳເລັດ"}]}},methods:{fetchData:function(){var t=this,e=new FormData;e.append("page",this.pagination.current_page),e.append("per_page",this.per_page),e.append("duration",this.selectedDuration),""!==this.year_from&&""!==this.year_to&&"year"==this.selectedDuration&&(e.append("year_from",this.moment(this.year_from).format("YYYY")),e.append("year_to",this.moment(this.year_to).format("YYYY"))),""!==this.month_from&&""!==this.month_to&&"month"==this.selectedDuration&&(e.append("month_from",this.moment(this.month_from).format("YYYY-MM")),e.append("month_to",this.moment(this.month_to).format("YYYY-MM"))),""!==this.date_from&&""!==this.date_to&&"date"==this.selectedDuration&&(e.append("date_from",this.moment(this.date_from).format("YYYY-MM-DD")),e.append("date_to",this.moment(this.date_to).format("YYYY-MM-DD"))),this.selectedCollectionStatus.map((function(t){e.append("collect_statuses[]",t)})),this.selectedPaymentStatus.map((function(t){e.append("payment_statuses[]",t)})),this.$store.commit("Loading_State",!0),this.$axios.post("report-event-collection",e).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.homeCollection=e.data.data.details.data,t.collections=e.data.data.details.data,t.summary=e.data.data.summary,t.summaryMerge=e.data.data.summary,t.pagination=e.data.data.details.pagination}),300)})).catch((function(e){t.$store.commit("Loading_State",!1),t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message})}))},exportData:function(){var t=this,e=new FormData;e.set("type",this.collectionType),e.append("duration",this.selectedDuration),e.append("download",1),""!==this.year_from&&""!==this.year_to&&"year"==this.selectedDuration&&(e.append("year_from",this.moment(this.year_from).format("YYYY")),e.append("year_to",this.moment(this.year_to).format("YYYY"))),""!==this.month_from&&""!==this.month_to&&"month"==this.selectedDuration&&(e.append("month_from",this.moment(this.month_from).format("YYYY-MM")),e.append("month_to",this.moment(this.month_to).format("YYYY-MM"))),""!==this.date_from&&""!==this.date_to&&"date"==this.selectedDuration&&(e.append("date_from",this.moment(this.date_from).format("YYYY-MM-DD")),e.append("date_to",this.moment(this.date_to).format("YYYY-MM-DD"))),this.selectedCollectionStatus.map((function(t){e.append("collect_statuses[]",t)})),this.selectedPaymentStatus.map((function(t){e.append("payment_statuses[]",t)})),this.loading=!0,this.$axios.post("report-event-collection",e).then((function(e){200==e.status&&(null!=e.data.data&&window.open(e.data.data.download_link),t.loading=!1)})).catch((function(e){t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message})}))},viewPage:function(t){this.$router.push({name:"InvoiceDetail",params:{id:t}})},Search:function(){Object(s["a"])(this)}},watch:{selectedPaymentStatus:function(){this.pagination.current_page="",this.fetchData()},selectedCollectionStatus:function(){this.pagination.current_page="",this.fetchData()},selectedDuration:function(){this.pagination.current_page="",this.fetchData()},search:function(t){this.pagination.current_page="",""==t&&this.fetchData()},year_from:function(t){var e=c()(t).format("YYYY"),a=c()(this.year_to).format("YYYY");this.pagination.current_page="",""!==e&&""!==a&&e>a&&(this.year_from=""),this.fetchData()},year_to:function(t){var e=c()(t).format("YYYY"),a=c()(this.year_from).format("YYYY");this.pagination.current_page="",""!==e&&""!==a&&e<a&&(this.year_to=""),this.fetchData()},month_from:function(t){var e=c()(t).format("YYYY-MM"),a=c()(this.month_to).format("YYYY-MM");""!==e&&""!==a&&e>a&&(this.month_from=""),this.pagination.current_page="",this.fetchData()},month_to:function(t){var e=c()(this.month_from).format("YYYY-MM"),a=c()(t).format("YYYY-MM");this.pagination.current_page="",""!==e&&""!==a&&a<e&&(this.month_to=""),this.pagination.current_page="",this.fetchData()},date_from:function(){""!==this.date_from&&""!==this.date_to&&this.date_from>this.date_to&&(this.date_from=""),this.pagination.current_page="",this.fetchData()},date_to:function(){""!==this.date_from&&""!==this.date_to&&this.date_to<this.date_from&&(this.date_to=""),this.pagination.current_page="",this.fetchData()},tab:function(){}},created:function(){"home"==this.$route.query.tab?(this.tab="tab-1",this.collectionType="home",this.fetchData()):"company"==this.$route.query.tab&&(this.tab="tab-2",this.collectionType="company",this.fetchData()),this.pagination=[],this.fetchData()}},l={mixins:[r],name:"HomeInvoice",title:function(){return"Vientiane Waste Co-Dev|Report Invoice"},data:function(){return{customers:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",headers:[{text:"ວັນທີ",value:"date",sortable:!1},{text:"ລູກຄ້າ",value:"full_name"},{text:"ສະຖານທີ່",value:"name",sortable:!1},{text:"ສະຖານະເກັບ",value:"status",sortable:!1}]}},methods:{Search:function(){Object(s["a"])(this)},statusColor:function(t){return"success"==t?"success":"pending"==t?"primary":"info"},collectStatus:function(t){return"requested"==t?"ຮ້ອງຂໍເກັບຂີ້ເຫື້ອຍ":"rejected"==t?"ປະຕິເສດເກັບຂີ້ເຫື້ອຍ":"approved"==t?"ອະນຸມັດເກັບຂີ້ເຫື້ອຍ":"collected"==t?"ເກັບຂີເຫື້ອຍສຳເລັດ":"collect_confirm"==t?"ລູກຄ້າຢືນຢັນການເກັບ":"collect_reject"==t?"ການເກັບຖືກປະຕິເສດ":""},paymentStatusText:function(t){return"pending"==t?"ລໍຖ້າເກັບເງິນ":"to_confirm_payment"==t?"ລໍຖ້າຢືນຢັນຊຳລະ":"rejected"==t?"ປະຕິເສດການຊຳລະ":"success"==t?"ຊຳລະສຳເລັດ":""}},watch:{tab:function(){this.tab}},created:function(){this.pagination=[]}},m=l,d=(a("ac6b"),a("2877")),u=a("6544"),_=a.n(u),h=a("2bc5"),p=a("8336"),f=a("b0af"),v=a("99d9"),y=a("cc20"),Y=a("62ad"),g=a("a523"),D=a("8fea"),b=a("0fd9"),C=a("b974"),x=Object(d["a"])(m,o,n,!1,null,null,null);e["default"]=x.exports;_()(x,{VBreadcrumbs:h["a"],VBtn:p["a"],VCard:f["a"],VCardText:v["b"],VChip:y["a"],VCol:Y["a"],VContainer:g["a"],VDataTable:D["a"],VRow:b["a"],VSelect:C["a"]})},"6eceb":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));a("ac1f"),a("841c");var o=function(t){""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},ac6b:function(t,e,a){"use strict";a("fe64")},fe64:function(t,e,a){}}]);
//# sourceMappingURL=chunk-ffb7acac.c87812de.js.map