(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c67be1e"],{"2e3b":function(t,e,a){"use strict";a.r(e);var s=a("2bc5"),o=a("8336"),n=a("b0af"),i=a("99d9"),r=a("cc20"),c=a("62ad"),l=a("a523"),m=a("8fea"),d=a("0fd9"),u=a("b974"),h=function(){var t=this,e=t._self._c;return e("div",[e(l["a"],[e(s["a"],{staticClass:"pt-0",attrs:{large:""}},[t._v(" ລາຍງານຂໍ້ມູນການເກັບຂີ້ເຫື້ຍອພິເສດ ")]),e(d["a"],{staticClass:"mb-n6"},[e(c["a"],[e(o["a"],{staticClass:"btn-primary",attrs:{loading:t.loading,disabled:t.loading},on:{click:function(e){return t.exportData()}}},[t._v(" Export ")])],1),e(c["a"],[e(u["a"],{attrs:{outlined:"",dense:"",items:t.duration,"item-text":"name","item-value":"duration",label:"ຊ່ວງເວລາ"},model:{value:t.selectedDuration,callback:function(e){t.selectedDuration=e},expression:"selectedDuration"}})],1),"year"==t.selectedDuration?e(c["a"],[e("section",[e("date-picker",{staticStyle:{height:"40px"},attrs:{type:"year",format:"YYYY",placeholder:"ເລີ່ມປີ"},model:{value:t.year_from,callback:function(e){t.year_from=e},expression:"year_from"}})],1)]):t._e(),"year"==t.selectedDuration?e(c["a"],[e("section",[e("date-picker",{attrs:{type:"year",format:"YYYY",placeholder:"ຫາປີ"},model:{value:t.year_to,callback:function(e){t.year_to=e},expression:"year_to"}})],1)]):t._e(),"month"==t.selectedDuration?e(c["a"],[e("section",[e("date-picker",{attrs:{type:"month",placeholder:"ເລີ່ມເດືອນ"},on:{input:function(e){return t.fetchData()}},model:{value:t.month_from,callback:function(e){t.month_from=e},expression:"month_from"}})],1)]):t._e(),"month"==t.selectedDuration?e(c["a"],[e("section",[e("date-picker",{attrs:{type:"month",placeholder:"ຫາເດືອນ"},on:{input:function(e){return t.fetchData()}},model:{value:t.month_to,callback:function(e){t.month_to=e},expression:"month_to"}})],1)]):t._e(),"merge"==t.selectedDuration||"date"==t.selectedDuration?e(c["a"],[e("section",[e("date-picker",{staticStyle:{height:"40px"},attrs:{type:"date",placeholder:"ເລີ່ມວັນທີ"},on:{input:function(e){return t.fetchData()}},model:{value:t.date_from,callback:function(e){t.date_from=e},expression:"date_from"}})],1)]):t._e(),"merge"==t.selectedDuration||"date"==t.selectedDuration?e(c["a"],[e("section",[e("date-picker",{staticStyle:{height:"40px"},attrs:{type:"date",placeholder:"ຫາວັນທີ"},on:{input:function(e){return t.fetchData()}},model:{value:t.date_to,callback:function(e){t.date_to=e},expression:"date_to"}})],1)]):t._e()],1),e(d["a"],[e(c["a"],{attrs:{cols:""}},[e(u["a"],{attrs:{outlined:"",dense:"",items:t.collectionStatus,"item-text":"dis_play","item-value":"name",label:"ສະຖານະບໍລິການ",multiple:"",clearable:""},model:{value:t.selectedCollectionStatus,callback:function(e){t.selectedCollectionStatus=e},expression:"selectedCollectionStatus"}})],1),e(c["a"],{attrs:{col:""}},[e(u["a"],{attrs:{outlined:"",dense:"",items:t.paymentStatus,"item-text":"dis_play","item-value":"name",label:"ສະຖານະການຊຳລະ",multiple:"",clearable:""},model:{value:t.selectedPaymentStatus,callback:function(e){t.selectedPaymentStatus=e},expression:"selectedPaymentStatus"}})],1)],1),"merge"==t.selectedDuration?e("div",[t.summaryMerge?e("div",[e(d["a"],[e(c["a"],{staticClass:"sum-total"},[t._v(" ຄຳຂໍຖືກອານຸມັດ: "+t._s(t.summaryMerge.approved_count)+" ")]),e(c["a"],{staticClass:"sum-total"},[t._v(" ລົງເກັບແລະລູກຄ້າຢືຢັນແລ້ວ: "+t._s(t.summaryMerge.collect_confirm_count)+" ")]),e(c["a"],{staticClass:"sum-total"},[t._v(" ລູກຄ້າປະຕິເສດການລົງເກັບ: "+t._s(t.summaryMerge.collect_reject_count)+" ")]),e(c["a"],{staticClass:"sum-total"},[t._v(" ລົງເກັບແລ້ວ(ລໍຖ້າຢືນຢັນ): "+t._s(t.summaryMerge.collected_count)+" ")]),e(c["a"],{staticClass:"sum-total"},[t._v(" ຕ້ອງລົງເກັບທັງໝົດ: "+t._s(t.summaryMerge.number_of_times_to_collect)+" ")]),e(c["a"],{staticClass:"sum-total"},[t._v(" ຄຳຂໍທີ່ປະຕິເສດແລ້ວ: "+t._s(t.summaryMerge.rejected_count)+" ")]),e(c["a"],{staticClass:"sum-total"},[t._v(" ຄຳຂໍລໍຖ້າຢືນຢັນ: "+t._s(t.summaryMerge.requested_count)+" ")])],1)],1):t._e()]):e("div",[t.summary?e("div",t._l(t.summary,(function(a,s){return e(d["a"],{key:s,staticClass:"mb-n6 mt-0"},[e(c["a"],["year"==t.selectedDuration?e("p",[t._v(" ປີ: "+t._s(a.year)+" ")]):t._e(),"month"==t.selectedDuration?e("p",[t._v(" ເດືອນ: "+t._s(a.month)+" ")]):t._e(),"date"==t.selectedDuration?e("p",[t._v(" ວັນທີ: "+t._s(t.moment(a.date_collect).format("DD-MM-YY"))+" ")]):t._e()]),e(c["a"],[e("p",[t._v(" ຄຳຂໍຖືກອານຸມັດ "),e("span",{staticClass:"success--text"},[t._v(t._s(a.approved_count))])])]),e(c["a"],[e("p",[t._v(" ລົງເກັບແລະລູກຄ້າຢືຢັນແລ້ວ "),e("span",{staticClass:"success--text"},[t._v(t._s(a.collect_confirm_count))])])]),e(c["a"],[e("p",[t._v(" ລູກຄ້າປະຕິເສດການລົງເກັບ "),e("span",{staticClass:"success--text"},[t._v(t._s(a.collect_reject_count))])])]),e(c["a"],[e("p",[t._v(" ຕ້ອງລົງເກັບທັງໝົດ "),e("span",{staticClass:"success--text"},[t._v(t._s(a.number_of_times_to_collect))])])]),e(c["a"],[e("p",[t._v(" ຄຳຂໍທີ່ປະຕິເສດແລ້ວ "),e("span",{staticClass:"success--text"},[t._v(t._s(a.rejected_count))])])]),e(c["a"],[e("p",[t._v(" ລົງເກັບແລ້ວ(ລໍຖ້າຢືນຢັນ) "),e("span",{staticClass:"success--text"},[t._v(t._s(a.collected_count))])])]),e(c["a"],[e("p",[t._v(" ຄຳຂໍລໍຖ້າຢືນຢັນ "),e("span",{staticClass:"success--text"},[t._v(t._s(a.requested_count))])])])],1)})),1):t._e()]),e(n["a"],[e(i["b"],[t.homeCollection?e(m["a"],{attrs:{headers:t.headers,items:t.homeCollection,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.status",fn:function({item:a}){return[e(r["a"],{attrs:{label:"",color:"primary"}},[t._v(" "+t._s(t.collectStatus(a.collect_status))+" ")])]}}],null,!1,2051329814)}):t._e()],1)],1),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)},p=[],_=a("6eceb"),f=(a("14d9"),a("c1df")),y=a.n(f),g={title(){return"Vientiane Waste Co-Dev|Report Invoice"},data(){return{tab:"tab-1",customers:[],loading:!1,customerId:"",year_from:"",year_to:"",month_from:new Date,month_to:new Date,date_from:"",date_to:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",collections:[],homeCollection:[],summary:[],summaryMerge:{},selectedDuration:"month",duration:[{name:"ປີ",duration:"year"},{name:"ເດືອນ",duration:"month"},{name:"ວັນທີ",duration:"date"},{name:"ລວມ",duration:"merge"}],collectionType:"home",selectedCollectionStatus:[],collectionStatus:[{id:1,name:"requested",dis_play:"ຮ້ອງຂໍເກັບຂີ້ເຫື້ຍອ"},{id:2,name:"rejected",dis_play:"ປະຕິເສດເກັບຂີ້ເຫື້ຍອ"},{id:3,name:"approved",dis_play:"ອະນຸມັດເກັບຂີ້ເຫື້ຍອ"},{id:4,name:"collected",dis_play:"ເກັບຂີເຫື້ຍອສຳເລັດ"},{id:5,name:"collect_confirm",dis_play:"ລູກຄ້າຢືນຢັນການເກັບ"},{id:5,name:"collect_reject",dis_play:"ການເກັບຖືກປະຕິເສດ"}],selectedPaymentStatus:[],paymentStatus:[{id:1,name:"pending",dis_play:"ລໍຖ້າເກັບເງິນ"},{id:2,name:"to_confirm_payment",dis_play:"ລໍຖ້າຢືນຢັນຊຳລະ"},{id:3,name:"rejected",dis_play:"ປະຕິເສດການຊຳລະ"},{id:4,name:"success",dis_play:"ຊຳລະສຳເລັດ"}]}},methods:{fetchData(){const t=new FormData;t.append("page",this.pagination.current_page),t.append("per_page",this.per_page),t.append("duration",this.selectedDuration),""!==this.year_from&&"year"==this.selectedDuration&&t.append("year_from",this.moment(this.year_from).format("YYYY")),""!==this.year_to&&"year"==this.selectedDuration&&t.append("year_to",this.moment(this.year_to).format("YYYY")),""!==this.month_from&&"month"==this.selectedDuration&&t.append("month_from",this.moment(this.month_from).format("YYYY-MM")),""!==this.month_to&&"month"==this.selectedDuration&&t.append("month_to",this.moment(this.month_to).format("YYYY-MM")),""!==this.date_from&&"date"==this.selectedDuration&&t.append("date_from",this.moment(this.date_from).format("YYYY-MM-DD")),""!==this.date_to&&"date"==this.selectedDuration&&t.append("date_to",this.moment(this.date_to).format("YYYY-MM-DD")),this.selectedCollectionStatus.map(e=>{t.append("collect_statuses[]",e)}),this.selectedPaymentStatus.map(e=>{t.append("payment_statuses[]",e)}),this.$store.commit("Loading_State",!0),this.$axios.post("report-event-collection",t).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.homeCollection=t.data.data.details.data,this.collections=t.data.data.details.data,this.summary=t.data.data.summary,this.summaryMerge=t.data.data.summary,this.pagination=t.data.data.details.pagination},300)}).catch(t=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message})})},exportData(){const t=new FormData;t.set("type",this.collectionType),t.append("duration",this.selectedDuration),t.append("download",1),""!==this.year_from&&""!==this.year_to&&"year"==this.selectedDuration&&(t.append("year_from",this.moment(this.year_from).format("YYYY")),t.append("year_to",this.moment(this.year_to).format("YYYY"))),""!==this.month_from&&""!==this.month_to&&"month"==this.selectedDuration&&(t.append("month_from",this.moment(this.month_from).format("YYYY-MM")),t.append("month_to",this.moment(this.month_to).format("YYYY-MM"))),""!==this.date_from&&""!==this.date_to&&"date"==this.selectedDuration&&(t.append("date_from",this.moment(this.date_from).format("YYYY-MM-DD")),t.append("date_to",this.moment(this.date_to).format("YYYY-MM-DD"))),this.selectedCollectionStatus.map(e=>{t.append("collect_statuses[]",e)}),this.selectedPaymentStatus.map(e=>{t.append("payment_statuses[]",e)}),this.$store.commit("Loading_State",!0),this.$axios.post("report-event-collection",t).then(t=>{200==t.status&&(null!=t.data.data&&window.open(t.data.data.download_link),this.$store.commit("Loading_State",!1))}).catch(t=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message})})},viewPage(t){this.$router.push({name:"InvoiceDetail",params:{id:t}})},Search(){Object(_["a"])(this)}},watch:{selectedPaymentStatus(){this.pagination.current_page="",this.fetchData()},selectedCollectionStatus(){this.pagination.current_page="",this.fetchData()},selectedDuration(){this.pagination.current_page="",this.fetchData()},search(t){this.pagination.current_page="",""==t&&this.fetchData()},year_from(t){const e=y()(t).format("YYYY"),a=y()(this.year_to).format("YYYY");this.pagination.current_page="",""!==e&&""!==a&&e>a&&(this.year_from=""),this.fetchData()},year_to(t){const e=y()(t).format("YYYY"),a=y()(this.year_from).format("YYYY");this.pagination.current_page="",""!==e&&""!==a&&e<a&&(this.year_to=""),this.fetchData()},month_from(t){const e=y()(t).format("YYYY-MM"),a=y()(this.month_to).format("YYYY-MM");""!==e&&""!==a&&e>a&&(this.month_from=""),this.pagination.current_page="",this.fetchData()},month_to(t){const e=y()(this.month_from).format("YYYY-MM"),a=y()(t).format("YYYY-MM");this.pagination.current_page="",""!==e&&""!==a&&a<e&&(this.month_to=""),this.pagination.current_page="",this.fetchData()},date_from(){""!==this.date_from&&""!==this.date_to&&this.date_from>this.date_to&&(this.date_from=""),this.pagination.current_page="",this.fetchData()},date_to(){""!==this.date_from&&""!==this.date_to&&this.date_to<this.date_from&&(this.date_to=""),this.pagination.current_page="",this.fetchData()},tab(){}},created(){"home"==this.$route.query.tab?(this.tab="tab-1",this.collectionType="home",this.fetchData()):"company"==this.$route.query.tab&&(this.tab="tab-2",this.collectionType="company",this.fetchData()),this.pagination=[],this.fetchData()}},Y={name:"HomeInvoice",mixins:[g],title(){return"Vientiane Waste Co-Dev|Report Invoice"},data(){return{customers:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:100,search:"",oldVal:"",headers:[{text:"ວັນທີ",value:"date",sortable:!1},{text:"ລູກຄ້າ",value:"full_name"},{text:"ສະຖານທີ່",value:"name",sortable:!1},{text:"ສະຖານະເກັບ",value:"status",sortable:!1}]}},watch:{tab(){this.tab}},created(){this.pagination=[]},methods:{Search(){Object(_["a"])(this)},statusColor(t){return"success"==t?"success":"pending"==t?"primary":"info"},collectStatus(t){return"requested"==t?"ຮ້ອງຂໍເກັບຂີ້ເຫື້ຍອ":"rejected"==t?"ປະຕິເສດເກັບຂີ້ເຫື້ຍອ":"approved"==t?"ອະນຸມັດເກັບຂີ້ເຫື້ຍອ":"collected"==t?"ເກັບຂີເຫື້ຍອສຳເລັດ":"collect_confirm"==t?"ລູກຄ້າຢືນຢັນການເກັບ":"collect_reject"==t?"ການເກັບຖືກປະຕິເສດ":""},paymentStatusText(t){return"pending"==t?"ລໍຖ້າເກັບເງິນ":"to_confirm_payment"==t?"ລໍຖ້າຢືນຢັນຊຳລະ":"rejected"==t?"ປະຕິເສດການຊຳລະ":"success"==t?"ຊຳລະສຳເລັດ":""}}},v=Y,D=(a("6ed6"),a("2877")),b=Object(D["a"])(v,h,p,!1,null,null,null);e["default"]=b.exports},"6eceb":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));const s=t=>{""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},"6ed6":function(t,e,a){"use strict";a("bf17")},a523:function(t,e,a){"use strict";a("20f6"),a("4b85");var s=a("2b0e");function o(t){return s["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:a,data:s,children:o}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:n}=s;if(n){s.attrs={};const t=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(s.staticClass+=" "+t.join(" "))}return a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),e(a.tag,s,o)}})}var n=a("d9f7");e["a"]=o("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:a,children:s}){let o;const{attrs:i}=a;return i&&(a.attrs={},o=Object.keys(i).filter(t=>{if("slot"===t)return!1;const e=i[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),t(e.tag,Object(n["a"])(a,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(o||[])}),s)}})},bf17:function(t,e,a){}}]);
//# sourceMappingURL=chunk-5c67be1e.ca9f1076.js.map