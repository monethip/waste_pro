(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ffb7acac"],{"2e3b":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-breadcrumbs",{staticClass:"pt-0",attrs:{large:""}},[t._v("ລາຍງານຂໍ້ມູນການເກັບຂີ້ເຫື້ອຍພິເສດ")]),a("v-row",{staticClass:"mb-n6"},[a("v-col",[a("v-btn",{staticClass:"btn-primary",attrs:{loading:t.loading,disabled:t.loading},on:{click:function(e){return t.exportData()}}},[t._v("Export ")])],1),a("v-col",[a("v-select",{attrs:{outlined:"",dense:"",items:t.duration,"item-text":"name","item-value":"duration",label:"ຊ່ວງເວລາ"},model:{value:t.selectedDuration,callback:function(e){t.selectedDuration=e},expression:"selectedDuration"}})],1),"year"==t.selectedDuration?a("v-col",[a("section",[a("date-picker",{staticStyle:{height:"40px"},attrs:{type:"year",format:"YYYY",placeholder:"ເລີ່ມປີ"},on:{input:function(e){return t.fetchData()}},model:{value:t.year_from,callback:function(e){t.year_from=e},expression:"year_from"}})],1)]):t._e(),"year"==t.selectedDuration?a("v-col",[a("section",[a("date-picker",{attrs:{type:"year",format:"YYYY",placeholder:"ຫາປີ"},on:{input:function(e){return t.fetchData()}},model:{value:t.year_to,callback:function(e){t.year_to=e},expression:"year_to"}})],1)]):t._e(),"month"==t.selectedDuration?a("v-col",[a("section",[a("date-picker",{attrs:{type:"month",placeholder:"ເລີ່ມເດືອນ"},on:{input:function(e){return t.fetchData()}},model:{value:t.month_from,callback:function(e){t.month_from=e},expression:"month_from"}})],1)]):t._e(),"month"==t.selectedDuration?a("v-col",[a("section",[a("date-picker",{attrs:{type:"month",placeholder:"ຫາເດືອນ"},on:{input:function(e){return t.fetchData()}},model:{value:t.month_to,callback:function(e){t.month_to=e},expression:"month_to"}})],1)]):t._e(),"merge"==t.selectedDuration||"date"==t.selectedDuration?a("v-col",[a("section",[a("date-picker",{staticStyle:{height:"40px"},attrs:{type:"date",placeholder:"ເລີ່ມວັນທີ"},on:{input:function(e){return t.fetchData()}},model:{value:t.date_from,callback:function(e){t.date_from=e},expression:"date_from"}})],1)]):t._e(),"merge"==t.selectedDuration||"date"==t.selectedDuration?a("v-col",[a("section",[a("date-picker",{staticStyle:{height:"40px"},attrs:{type:"date",placeholder:"ຫາວັນທີ"},on:{input:function(e){return t.fetchData()}},model:{value:t.date_to,callback:function(e){t.date_to=e},expression:"date_to"}})],1)]):t._e()],1),a("div",[t.summary?a("div",t._l(t.summary,(function(e,o){return a("v-row",{key:o,staticClass:"mb-n6 mt-0"},[a("v-col",["year"==t.selectedDuration?a("p",[t._v(t._s(e.year))]):t._e(),"month"==t.selectedDuration?a("p",[t._v(t._s(e.month))]):t._e(),"date"==t.selectedDuration?a("p",[t._v(t._s(t.moment(e.date).format("DD-MM-YY")))]):t._e()]),a("v-col",[a("p",[t._v(" ຈຳນວນອະນຸມັດ "),a("span",{staticClass:"success--text"},[t._v(t._s(e.approved_count))])])]),t._v(" "),a("v-col",[a("p",[t._v(" ຈຳນວນເກັບສຳເລັດ "),a("span",{staticClass:"success--text"},[t._v(t._s(e.collect_confirm_count))])])]),a("v-col",[a("p",[t._v(" ຈຳນວນຄັ້ງທີ່ລົງເກັບ "),a("span",{staticClass:"success--text"},[t._v(t._s(e.number_of_times_to_collect))])])]),a("v-col",[a("p",[t._v(" ຈຳນວນເກັບສຳເລັດ "),a("span",{staticClass:"success--text"},[t._v(t._s(e.rejected_count))])])]),a("v-col",[a("p",[t._v(" ຈຳນວນລໍຖ້າເກັບ "),a("span",{staticClass:"success--text"},[t._v(t._s(e.collected_count))])])])],1)})),1):t._e(),a("v-card",[a("v-card-text",[t.homeCollection?a("v-data-table",{attrs:{headers:t.headers,items:t.homeCollection,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.status",fn:function(e){var o=e.item;return[a("div",[t._v(t._s(o.collect_status))])]}}],null,!1,780571426)}):t._e()],1)],1),a("br"),[t.pagination.total_pages>1?a("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)},n=[],i=a("6eceb"),s={title:function(){return"Vientiane Waste Co-Dev|Report Invoice"},data:function(){return{tab:"tab-1",customers:[],loading:!1,customerId:"",year_from:"",year_to:"",month_from:"",month_to:"",date_from:"",date_to:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",collections:[],homeCollection:[],summary:[],selectedDuration:"year",duration:[{name:"ປີ",duration:"year"},{name:"ເດືອນ",duration:"month"},{name:"ວັນທີ",duration:"date"},{name:"Merge",duration:"merge"}],collectionType:"home"}},methods:{fetchData:function(){var t=this,e=new FormData;e.append("page",this.pagination.current_page),e.append("per_page",this.per_page),e.append("duration",this.selectedDuration),""!==this.year_from&&""!==this.year_to&&"year"==this.selectedDuration&&(e.append("year_from",this.moment(this.year_from).format("YYYY")),e.append("year_to",this.moment(this.year_to).format("YYYY"))),""!==this.month_from&&""!==this.month_to&&"month"==this.selectedDuration&&(e.append("month_from",this.moment(this.month_from).format("YYYY-MM")),e.append("month_to",this.moment(this.month_to).format("YYYY-MM"))),""!==this.date_from&&""!==this.date_to&&"date"==this.selectedDuration&&(e.append("date_from",this.moment(this.date_from).format("YYYY-MM-DD")),e.append("date_to",this.moment(this.date_to).format("YYYY-MM-DD"))),this.$store.commit("Loading_State",!0),this.$axios.post("report-event-collection",e).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.homeCollection=e.data.data.details.data,t.collections=e.data.data.details.data,t.summary=e.data.data.summary,t.pagination=e.data.data.details.pagination}),300)})).catch((function(e){t.$store.commit("Loading_State",!1),t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message})}))},exportData:function(){var t=this,e=new FormData;e.set("type",this.collectionType),e.append("duration",this.selectedDuration),e.append("download",1),""!==this.year_from&&""!==this.year_to&&"year"==this.selectedDuration&&(e.append("year_from",this.moment(this.year_from).format("YYYY")),e.append("year_to",this.moment(this.year_to).format("YYYY"))),""!==this.month_from&&""!==this.month_to&&"month"==this.selectedDuration&&(e.append("month_from",this.moment(this.month_from).format("YYYY-MM")),e.append("month_to",this.moment(this.month_to).format("YYYY-MM"))),""!==this.date_from&&""!==this.date_to&&"date"==this.selectedDuration&&(e.append("date_from",this.moment(this.date_from).format("YYYY-MM-DD")),e.append("date_to",this.moment(this.date_to).format("YYYY-MM-DD"))),this.loading=!0,this.$axios.post("report-collection",e).then((function(e){200==e.status&&(window.open(e.data.data.download_link),t.loading=!1)})).catch((function(e){t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message})}))},viewPage:function(t){this.$router.push({name:"InvoiceDetail",params:{id:t}})},Search:function(){Object(i["a"])(this)}},watch:{selectedDuration:function(){this.fetchData()},search:function(t){""==t&&this.fetchData()},tab:function(){}},created:function(){"home"==this.$route.query.tab?(this.tab="tab-1",this.collectionType="home",this.fetchData()):"company"==this.$route.query.tab&&(this.tab="tab-2",this.collectionType="company",this.fetchData()),this.pagination=[],this.fetchData()}},r={mixins:[s],name:"HomeInvoice",title:function(){return"Vientiane Waste Co-Dev|Report Invoice"},data:function(){return{customers:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",headers:[{text:"ວັນທີ",value:"date",sortable:!1},{text:"ລູກຄ້າ",value:"full_name"},{text:"ຈຳນວນຖົງ",value:"bag",sortable:!1,align:"center"},{text:"ສະຖານທີ່",value:"name",sortable:!1},{text:"ສະຖານະ",value:"status",sortable:!1}]}},methods:{Search:function(){Object(i["a"])(this)},statusColor:function(t){return"success"==t?"success":"pending"==t?"primary":"info"}},watch:{tab:function(){this.tab}},created:function(){this.pagination=[]}},c=r,l=(a("ac6b"),a("2877")),d=a("6544"),m=a.n(d),u=a("2bc5"),h=a("8336"),p=a("b0af"),f=a("99d9"),_=a("62ad"),v=a("a523"),Y=a("8fea"),y=a("0fd9"),D=a("b974"),b=Object(l["a"])(c,o,n,!1,null,null,null);e["default"]=b.exports;m()(b,{VBreadcrumbs:u["a"],VBtn:h["a"],VCard:p["a"],VCardText:f["b"],VCol:_["a"],VContainer:v["a"],VDataTable:Y["a"],VRow:y["a"],VSelect:D["a"]})},"6eceb":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));a("ac1f"),a("841c");var o=function(t){""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},ac6b:function(t,e,a){"use strict";a("fe64")},fe64:function(t,e,a){}}]);
//# sourceMappingURL=chunk-ffb7acac.825ea713.js.map