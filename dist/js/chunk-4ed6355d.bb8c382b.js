(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ed6355d"],{"09c8":function(t,e,a){"use strict";a.r(e);var o=a("2bc5"),s=a("8336"),n=a("b0af"),i=a("99d9"),r=a("cc20"),c=a("62ad"),l=a("a523"),m=a("8fea"),u=a("0fd9"),_=a("b974"),d=a("71a3"),h=a("c671"),p=a("fe57"),f=a("aac8"),y=a("8654"),v=function(){var t=this,e=t._self._c;return e(l["a"],[e(o["a"],{staticClass:"pt-0",attrs:{large:""}},[t._v(" ລາຍງານຂໍ້ມູນການເກັບຂີ້ເຫື້ຍອ ")]),e(u["a"],{staticClass:"mb-n6"},[e(c["a"],[e(s["a"],{attrs:{depressed:"",color:"primary",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.exportData()}}},[t._v(" Export ")])],1),e(c["a"],[e(_["a"],{attrs:{outlined:"",dense:"",items:t.duration,"item-text":"name","item-value":"duration",label:"ຊ່ວງເວລາ"},model:{value:t.selectedDuration,callback:function(e){t.selectedDuration=e},expression:"selectedDuration"}})],1),"year"==t.selectedDuration?e(c["a"],[e("section",[e("date-picker",{staticStyle:{height:"40px"},attrs:{type:"year",format:"YYYY",placeholder:"ເລີ່ມປີ"},model:{value:t.year_from,callback:function(e){t.year_from=e},expression:"year_from"}})],1)]):t._e(),"year"==t.selectedDuration?e(c["a"],[e("section",[e("date-picker",{attrs:{type:"year",format:"YYYY",placeholder:"ຫາປີ"},model:{value:t.year_to,callback:function(e){t.year_to=e},expression:"year_to"}})],1)]):t._e(),"month"==t.selectedDuration?e(c["a"],[e("section",[e("date-picker",{attrs:{type:"month",placeholder:"ເລີ່ມເດືອນ"},model:{value:t.month_from,callback:function(e){t.month_from=e},expression:"month_from"}})],1)]):t._e(),"month"==t.selectedDuration?e(c["a"],[e("section",[e("date-picker",{attrs:{type:"month",placeholder:"ຫາເດືອນ"},model:{value:t.month_to,callback:function(e){t.month_to=e},expression:"month_to"}})],1)]):t._e(),"merge"==t.selectedDuration||"date"==t.selectedDuration?e(c["a"],[e("section",[e("date-picker",{staticStyle:{height:"40px"},attrs:{type:"date",placeholder:"ເລີ່ມວັນທີ"},model:{value:t.date_from,callback:function(e){t.date_from=e},expression:"date_from"}})],1)]):t._e(),"merge"==t.selectedDuration||"date"==t.selectedDuration?e(c["a"],[e("section",[e("date-picker",{staticStyle:{height:"40px"},attrs:{type:"date",placeholder:"ຫາວັນທີ"},model:{value:t.date_to,callback:function(e){t.date_to=e},expression:"date_to"}})],1)]):t._e(),e(c["a"],[e(y["a"],{attrs:{clearable:"",outlined:"",dense:"","prepend-inner-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),e(n["a"],{attrs:{elevation:"1"}},[e(i["b"],[e(p["a"],{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(d["a"],{attrs:{href:"#tab-1"}},[t._v(" ຄົວເຮືອນ ")]),e(d["a"],{attrs:{href:"#tab-2"}},[t._v(" ບໍລິສັດ ")])],1),e(f["a"],{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(h["a"],{attrs:{value:"tab-1"}},["home"==t.collectionType?e("div",["merge"==t.selectedDuration?e("div",[t.summaryMerge.home?e("div",[e(u["a"],[e(c["a"],{staticClass:"sum-total"},[t._v(" ຈຳນວນຖົງຂີ້ເຫື້ຍອ: "+t._s(t.summaryMerge.home.total_bag_amount)+" ")]),e(c["a"],{staticClass:"sum-total"},[t._v(" ເກັບທັງໝົດ: "+t._s(t.summaryMerge.home.total_number_of_times_to_collect)+" ")]),e(c["a"],{staticClass:"sum-total"},[t._v(" ລໍຖ້າ: "+t._s(t.summaryMerge.home.total_pending_count)+" ")]),e(c["a"],{staticClass:"sum-total"},[t._v(" ສຳເລັດ: "+t._s(t.summaryMerge.home.total_success_count)+" ")])],1)],1):t._e()]):e("div",[t.summary?e("div",t._l(t.summary,(function(a,o){return e(u["a"],{key:o,staticClass:"mb-n6 mt-0"},[e(c["a"],{staticClass:"sum-title"},["year"==t.selectedDuration?e("p",[t._v(" ປີ: "+t._s(a.year)+" ")]):t._e(),"month"==t.selectedDuration?e("p",[t._v(" ເດືອນ: "+t._s(a.month)+" ")]):t._e(),"date"==t.selectedDuration?e("p",[t._v(" ວັນທີ: "+t._s(t.moment(a.date).format("DD-MM-YY"))+" ")]):t._e()]),e(c["a"],[a.home?e("p",{staticClass:"sum-title"},[t._v(" ຈຳນວນຖົງຂີ້ເຫື້ຍອ "),e("span",{staticClass:"success--text"},[t._v(t._s(a.home.total_bag_amount))])]):t._e()]),e(c["a"],[a.home?e("p",{staticClass:"sum-title"},[t._v(" ຕ້ອງລົງເກັບທັງໝົດ "),e("span",{staticClass:"success--text"},[t._v(t._s(a.home.total_number_of_times_to_collect))])]):t._e()]),e(c["a"],[a.home?e("p",{staticClass:"sum-title"},[t._v(" ຈຳນວນເກັບສຳເລັດ "),e("span",{staticClass:"success--text"},[t._v(t._s(a.home.total_success_count))])]):t._e()]),e(c["a"],[a.home?e("p",{staticClass:"sum-title"},[t._v(" ຈຳນວນລໍຖ້າເກັບ "),e("span",{staticClass:"success--text"},[t._v(t._s(a.home.total_pending_count))])]):t._e()])],1)})),1):t._e()]),t.homeCollection?e(m["a"],{attrs:{headers:t.headers,items:t.homeCollection,search:t.search,"disable-pagination":!0,"item-key":"key","hide-default-footer":""},scopedSlots:t._u([{key:"item.status",fn:function({item:a}){return[e(r["a"],{attrs:{label:"",color:t.homeStatus(a.status)}},[t._v(" "+t._s(t.statusText(a.status))+" ")])]}},{key:"item.date_deleted_at",fn:function({item:a}){return[a.date_deleted_at?e(r["a"],{attrs:{label:"",color:"error"}},[t._v(" "+t._s(a.date_deleted_at)+" ")]):t._e()]}},{key:"item.date",fn:function({item:a}){return[e("a",{attrs:{href:"#"},on:{click:function(e){return t.openRoute(a,"PlanCalendarDetail")}}},[t._v(" "+t._s(a.date)+" ")])]}},{key:"item.customer_id",fn:function({item:a}){return[e("a",{attrs:{href:"#"},on:{click:function(e){return t.viewCustomerDetail(a)}}},[t._v(" "+t._s(a.customer_id)+" ")])]}},{key:"item.bag",fn:function({item:a}){return[a.date_deleted_at||"success"!=a.status?t._e():e("a",{attrs:{href:"#"},on:{click:function(e){return t.openRoute(a,"TrashDetail")}}},[t._v(" "+t._s(a.bag)+" ຖົງ ")])]}},{key:"item.expect_trash",fn:function({item:a}){return[a.package?e(r["a"],{attrs:{outlined:"",color:"green"}},[t._v(" "+t._s(Intl.NumberFormat().format(a.package.package_size.bag))+" "+t._s(t.getCustomerUnitFunc(a.cost_by))+" ")]):a.expect_trash?e(r["a"],{attrs:{outlined:"",color:"green"}},[t._v(" "+t._s(Intl.NumberFormat().format(a.expect_trash))+" "+t._s(t.getCustomerUnitFunc(a.cost_by))+" ")]):e("div",[t._v(" - ")])]}},{key:"item.current_month_info",fn:function({item:a}){return[a.current_month_info?e(r["a"],{attrs:{outlined:"",color:t.getTrashColor(a,t.getTrash(a.cost_by,a.last_month_info))}},[t._v(" "+t._s(Intl.NumberFormat().format(t.getTrash(a.cost_by,a.current_month_info)))+" "+t._s(t.getCustomerUnitFunc(a.cost_by))+" ")]):e("div",[t._v(" - ")])]}},{key:"item.last_month_info",fn:function({item:a}){return[a.last_month_info?e(r["a"],{attrs:{dark:"",color:t.getTrashColor(a,t.getTrash(a.cost_by,a.last_month_info))}},[t._v(" "+t._s(Intl.NumberFormat().format(t.getTrash(a.cost_by,a.last_month_info)))+" "+t._s(t.getCustomerUnitFunc(a.cost_by))+" ")]):e("div",[t._v(" - ")])]}}],null,!1,4292015020)}):t._e(),e("br"),[t.homeCollection.length?e("div",[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()],1):t._e()]],2):t._e()])],1),e(f["a"],{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(h["a"],{attrs:{value:"tab-2"}},[e(n["a"],{attrs:{flat:""}},[e(i["b"],["company"==t.collectionType?e("div",["merge"==t.selectedDuration?e("div",[t.summaryMerge.company?e("div",[e(u["a"],[e(c["a"],{staticClass:"sum-total"},[t._v(" ຈຳນວນຖົງຂີ້ເຫື້ຍອ: "+t._s(t.summaryMerge.company.total_bag_amount)+" ")]),e(c["a"],{staticClass:"sum-total"},[t._v(" ເກັບທັງໝົດ: "+t._s(t.summaryMerge.company.total_number_of_times_to_collect)+" ")]),e(c["a"],{staticClass:"sum-total"},[t._v(" ລໍຖ້າ: "+t._s(t.summaryMerge.company.total_pending_count)+" ")]),e(c["a"],{staticClass:"sum-total"},[t._v(" ສຳເລັດ: "+t._s(t.summaryMerge.company.total_success_count)+" ")])],1)],1):t._e()]):e("div",t._l(t.summary,(function(a,o){return e(u["a"],{key:o,staticClass:"mb-n6 mt-n6"},[e(c["a"],{staticClass:"sum-title"},["year"==t.selectedDuration?e("p",[t._v(" ວັນທີ: "+t._s(a.year)+" ")]):t._e(),"month"==t.selectedDuration?e("p",[t._v(" ເດືອນ: "+t._s(a.month)+" ")]):t._e(),"date"==t.selectedDuration?e("p",[t._v(" ວັນທີ: "+t._s(t.moment(a.date).format("DD-MM-YY"))+" ")]):t._e()]),e(c["a"],[e("p",{staticClass:"sum-title"},[t._v(" Canceled "),a.company?e("span",{staticClass:"success--text"},[t._v(t._s(a.company.canceled_count))]):t._e()])]),e(c["a"],[e("p",{staticClass:"sum-title"},[t._v(" Deleted "),a.company?e("span",{staticClass:"success--text"},[t._v(t._s(a.company.deleted_count))]):t._e()])]),e(c["a"],[e("p",{staticClass:"sum-title"},[t._v(" ຈຳນວນ Container "),a.company?e("span",{staticClass:"success--text"},[t._v(t._s(a.company.container_amount))]):t._e()])]),e(c["a"],[e("p",{staticClass:"sum-title"},[t._v(" Container(ຄັ້ງ) "),a.company?e("span",{staticClass:"success--text"},[t._v(t._s(a.company.number_of_times_to_collect_by_container))]):t._e()])]),e(c["a"],[e("p",{staticClass:"sum-title"},[t._v(" ເກັບເປັນຖ້ຽວ "),a.company?e("span",{staticClass:"success--text"},[t._v(t._s(a.company.number_of_times_to_collect_by_fix_cost))]):t._e()])]),e(c["a"],[e("p",{staticClass:"sum-title"},[t._v(" ປະຕິເສດ "),a.company?e("span",{staticClass:"success--text"},[t._v(t._s(a.company.reject_count))]):t._e()])]),e(c["a"],[e("p",{staticClass:"sum-title"},[t._v(" ລໍຖ້າເກັບ "),a.company?e("span",{staticClass:"success--text"},[t._v(t._s(a.company.pending_count))]):t._e()])]),e(c["a"],[e("p",{staticClass:"sum-title"},[t._v(" ລໍຖ້າຢືນຢັນ "),a.company?e("span",{staticClass:"success--text"},[t._v(t._s(a.company.wait_to_confirm_count))]):t._e()])]),e(c["a"],[e("p",{staticClass:"sum-title"},[t._v(" ສຳເລັດ "),a.company?e("span",{staticClass:"success--text"},[t._v(t._s(a.company.success_count))]):t._e()])])],1)})),1),e(m["a"],{attrs:{headers:t.company,items:t.collections,search:t.search,"disable-pagination":!0,"hide-default-footer":"","item-key":"key"},scopedSlots:t._u([{key:"item.status",fn:function({item:a}){return[e(r["a"],{attrs:{label:"",color:t.companyStatus(a.status)}},[t._v(" "+t._s(t.statusText(a.status))+" ")])]}},{key:"item.date_deleted_at",fn:function({item:a}){return[a.date_deleted_at?e(r["a"],{attrs:{label:"",color:"error"}},[t._v(" "+t._s(a.date_deleted_at)+" ")]):t._e()]}},{key:"item.collection_type",fn:function({item:a}){return[e("div",[t._v(t._s(t.costBy(a.collection_type)))])]}},{key:"item.date",fn:function({item:a}){return[e("a",{attrs:{href:"#"},on:{click:function(e){return t.openRoute(a,"PlanCalendarDetail")}}},[t._v(" "+t._s(a.date)+" ")])]}},{key:"item.customer_id",fn:function({item:a}){return[e("a",{attrs:{href:"#"},on:{click:function(e){return t.viewCustomerDetail(a)}}},[t._v(" "+t._s(a.customer_id)+" ")])]}},{key:"item.trash_amount",fn:function({item:a}){return[a.date_deleted_at||"success"!=a.status?t._e():e("a",{attrs:{href:"#"},on:{click:function(e){return t.openRoute(a,"TrashDetail")}}},["bag"==a.collection_type||"chartered"==a.collection_type||"32km"==a.collection_type||"infect"==a.collection_type?e("div",[t._v(" "+t._s(a.bag)+" "),e("span",[t._v(" "+t._s(t.getUnit(a.collection_type)))])]):"fix_cost"==a.collection_type?e("div",[e("span",[t._v("1 "+t._s(t.getUnit(a.collection_type)))])]):e("div",[t._v(" "+t._s(a.container)+" "),e("span",[t._v(t._s(t.getUnit(a.collection_type)))])])])]}},{key:"item.expect_trash",fn:function({item:a}){return[a.expect_trash?e(r["a"],{attrs:{outlined:"",color:"green"}},[t._v(" "+t._s(Intl.NumberFormat().format(a.expect_trash))+" "+t._s(t.getCustomerUnitFunc(a.cost_by))+" ")]):e("div",[t._v(" - ")])]}},{key:"item.current_month_info",fn:function({item:a}){return[a.current_month_info?e(r["a"],{attrs:{outlined:"",color:t.getTrashColor(a,t.getTrash(a.cost_by,a.last_month_info))}},[t._v(" "+t._s(Intl.NumberFormat().format(t.getTrash(a.cost_by,a.current_month_info)))+" "+t._s(t.getCustomerUnitFunc(a.cost_by))+" ")]):e("div",[t._v(" - ")])]}},{key:"item.last_month_info",fn:function({item:a}){return[a.last_month_info?e(r["a"],{attrs:{dark:"",color:t.getTrashColor(a,t.getTrash(a.cost_by,a.last_month_info))}},[t._v(" "+t._s(Intl.NumberFormat().format(t.getTrash(a.cost_by,a.last_month_info)))+" "+t._s(t.getCustomerUnitFunc(a.cost_by))+" ")]):e("div",[t._v(" - ")])]}}],null,!1,3142419089)}),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2):t._e()])],1)],1)],1)],1)],1)],1)},g=[],b=(a("14d9"),a("6eceb")),x=a("c1df"),Y=a.n(x),C=a("7660"),D=a("54da"),k={title(){return"Vientiane Waste Co-Dev|Report Invoice"},data(){return{tab:"tab-1",customers:[],loading:!1,customerId:"",year_from:"",year_to:"",month_from:"",month_to:"",date_from:"",date_to:"",offset:12,pagination:{},per_page:15,collections:[],homeCollection:[],summary:{},selectedDuration:"year",search:"",summaryMerge:{},duration:[{name:"ປີ",duration:"year"},{name:"ເດືອນ",duration:"month"},{name:"ວັນທີ",duration:"date"},{name:"ລວມ",duration:"merge"}],collectionType:"home",collectionTypes:[{value:"home",text:"ຄົວເຮືອນ"},{value:"company",text:"ບໍລິສັດ"}],headers:[{text:"ວັນທີ",value:"date",sortable:!1},{text:"Id",value:"customer_id",sortable:!1},{text:"ລູກຄ້າ",value:"full_name"},{text:"ຈຳນວນຖົງ",value:"bag",sortable:!1,align:"center"},{text:"ສະຖານທີ່",value:"name",sortable:!1},{text:"ສະຖານະ",value:"status",sortable:!1},{text:"ຂີ້ເຫຍື້ອຄາດໝາຍ",value:"expect_trash",width:"200px"},{text:"ຂີ້ເຫຍື້ອປັດຈຸບັນ",value:"current_month_info",width:"200px"},{text:"ຂີ້ເຫຍື້ອເດືອນກ່ອນ",value:"last_month_info",width:"200px"},{text:"ຄຳອະທິບາຍການລຶບ",value:"deleted_description",sortable:!1},{text:"Deleted",value:"date_deleted_at",sortable:!1}],company:[{text:"ວັນທີ",value:"date",sortable:!1},{text:"Id",value:"customer_id",sortable:!1},{text:"ບໍລິສັດ",value:"company_name"},{text:"ປະເພດບໍລິການ",value:"collection_type"},{text:"ຈຳນວນ",value:"trash_amount",align:"right"},{text:"ສະຖານທີ່",value:"name",sortable:!1},{text:"ສະຖານະ",value:"status",sortable:!1},{text:"ຂີ້ເຫຍື້ອຄາດໝາຍ",value:"expect_trash",width:"200px"},{text:"ຂີ້ເຫຍື້ອປັດຈຸບັນ",value:"current_month_info",width:"200px"},{text:"ຂີ້ເຫຍື້ອເດືອນກ່ອນ",value:"last_month_info",width:"200px"},{text:"ຄຳອະທິບາຍການລຶບ",value:"deleted_description",sortable:!1},{text:"Deleted",value:"date_deleted_at",sortable:!1}]}},methods:{getTrash(t,e){if(!e)return 0;switch(t){case"bag":case"chartered":case"infect":case"32km":return e.bag_sum;case"container":return e.container_sum;case"fix_cost":return e.count_time;default:return t}},getUnit(t){return"bag"==t||"chartered"==t||"32km"==t||"infect"==t?"ຖົງ":"fix_cost"==t?"ຖ້ຽວ":"container"==t?"ຄອນເທັນເນີ":""},getTrashColor(t,e){return!t.expect_trash||t.expect_trash>e?"blue":t.expect_trash==e?"green":"red"},getCustomerUnitFunc(t){return Object(C["e"])(t)},openRoute(t,e){const a={};"TrashDetail"==e?(a.plan_calendar=t.plan_calendar_id,a.id=t.key):(a.id=t.plan_calendar_id,a.planMonthId=t.plan_month_id);const o=this.$router.resolve({name:e,params:a});window.open(o.href)},viewCustomerDetail(t){const e="home"==t.customer_type?"ViewClient":"ViewCompanyDetail",a={name:e,params:Object(D["a"])([{id:t.id}])},o=this.$router.resolve({...a});window.open(o.href)},fetchData(){const t=new FormData;t.set("page",this.pagination.current_page),t.set("per_page",this.per_page),t.set("type",this.collectionType),t.set("duration",this.selectedDuration),t.set("filter",this.search),"year"==this.selectedDuration&&(""!==this.year_from&&""!==this.year_to?(t.set("year_from",this.moment(this.year_from).format("YYYY")),t.set("year_to",this.moment(this.year_to).format("YYYY"))):""!==this.year_from?t.set("year_from",this.moment(this.year_from).format("YYYY")):""!==this.year_to&&t.set("year_to",this.moment(this.year_to).format("YYYY"))),""!==this.month_from&&""!==this.month_to&&"month"==this.selectedDuration&&(t.set("month_from",this.moment(this.month_from).format("YYYY-MM")),t.set("month_to",this.moment(this.month_to).format("YYYY-MM"))),""!==this.date_from&&""!==this.date_to&&"date"==this.selectedDuration&&(t.set("date_from",this.moment(this.date_from).format("YYYY-MM-DD")),t.set("date_to",this.moment(this.date_to).format("YYYY-MM-DD"))),this.$store.commit("Loading_State",!0),this.$axios.post("report-collection",t).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.homeCollection=t.data.data.details.data,this.collections=t.data.data.details.data,this.summary=t.data.data.summary,this.summaryMerge=t.data.data.summary,this.pagination=t.data.data.details.pagination},300)}).catch(t=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message})})},exportData(){const t=new FormData;t.set("type",this.collectionType),t.set("duration",this.selectedDuration),t.set("download",1),""!==this.year_from&&""!==this.year_to&&"year"==this.selectedDuration&&(t.set("year_from",this.moment(this.year_from).format("YYYY")),t.set("year_to",this.moment(this.year_to).format("YYYY"))),""!==this.month_from&&""!==this.month_to&&"month"==this.selectedDuration&&(t.set("month_from",this.moment(this.month_from).format("YYYY-MM")),t.set("month_to",this.moment(this.month_to).format("YYYY-MM"))),""!==this.date_from&&""!==this.date_to&&"date"==this.selectedDuration&&(t.set("date_from",this.moment(this.date_from).format("YYYY-MM-DD")),t.set("date_to",this.moment(this.date_to).format("YYYY-MM-DD"))),this.$store.commit("Loading_State",!0),this.$axios.post("report-collection",t).then(t=>{200==t.status&&(window.open(t.data.data.download_link),this.$store.commit("Loading_State",!1))}).catch(t=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message})})},viewPage(t){this.$router.push({name:"InvoiceDetail",params:{id:t}})},homeStatus(t){return"success"==t?"success":"pending"==t?"primary":"info"},companyStatus(t){return"success"==t?"success":"pending"==t?"primary":"info"},statusText(t){return"pending"==t?"ລໍຖ້າ":"success"==t?"ສຳເລັດ":t},costBy(t){return"container"==t?"ຄອນເທັນເນີ":"fix_cost"==t?"ທຸລະກິດເປັນຖ້ຽວ":"chartered"==t?"ມອບເໝົາ":"infect"==t?"ຂີ້ເຫຍື້ອຕິດເຊື້ອ":"32km"==t?"ຫຼັກ32":t},Search(){Object(b["a"])(this)}},watch:{collectionType(){this.pagination.current_page="",this.fetchData()},selectedDuration(){this.pagination.current_page="",this.year_from="",this.year_to="",this.fetchData()},search(t){this.pagination.current_page="",""==t&&this.fetchData()},year_from(t){const e=Y()(t).format("YYYY"),a=Y()(this.year_to).format("YYYY");this.pagination.current_page="",""!==e&&""!==a&&e>a&&(this.year_from=""),this.fetchData()},year_to(t){const e=Y()(t).format("YYYY"),a=Y()(this.year_from).format("YYYY");this.pagination.current_page="",""!==e&&""!==a&&e<a&&(this.year_to=""),this.fetchData()},month_from(t){const e=Y()(t).format("YYYY-MM"),a=Y()(this.month_to).format("YYYY-MM");""!==e&&""!==a&&e>a&&(this.month_from=""),this.pagination.current_page="",this.fetchData()},month_to(t){const e=Y()(this.month_from).format("YYYY-MM"),a=Y()(t).format("YYYY-MM");this.pagination.current_page="",""!==e&&""!==a&&a<e&&(this.month_to=""),this.pagination.current_page="",this.fetchData()},date_from(){""!==this.date_from&&""!==this.date_to&&this.date_from>this.date_to&&(this.date_from=""),this.pagination.current_page="",this.fetchData()},date_to(){""!==this.date_from&&""!==this.date_to&&this.date_to<this.date_from&&(this.date_to=""),this.pagination.current_page="",this.fetchData()},tab(t){"tab-1"==t?(this.collectionType="home",this.pagination.current_page="",this.pagination=[],this.fetchData(),this.$router.push({name:"Report-Trash",query:{tab:"home"}}).catch(()=>{})):"tab-2"==t&&(this.collectionType="company",this.pagination.current_page="",this.pagination=[],this.fetchData(),this.$router.push({name:"Report-Trash",query:{tab:"company"}}).catch(()=>{}))}},created(){this.fetchData(),this.pagination=[]}},w={title(){return"Vientiane Waste Co-Dev|Calendar"},mixins:[k],methods:{backPrevios(){this.$router.go(-1)}}},T=w,M=(a("585c"),a("2877")),S=Object(M["a"])(T,v,g,!1,null,null,null);e["default"]=S.exports},"1e6c":function(t,e,a){"use strict";var o=a("9d65"),s=a("4e82"),n=a("c3f0"),i=a("80d2"),r=a("58df");const c=Object(r["a"])(o["a"],Object(s["a"])("windowGroup","v-window-item","v-window"));e["a"]=c.extend().extend().extend({name:"v-window-item",directives:{Touch:n["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(i["h"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(i["h"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}})},"54da":function(t,e,a){"use strict";e["a"]=function(t){const e={};if(!t[0]){for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&(void 0!==t[e]&&null!==t[e]&&""!==t[e]||delete t[e]);return t}for(const a of t)1==Object.keys(a).length&&a[Object.keys(a)]&&(e[Object.keys(a)]=a[Object.keys(a)]);return e}},"585c":function(t,e,a){"use strict";a("867a")},"6eceb":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));const o=t=>{""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},7660:function(t,e,a){"use strict";a.d(e,"g",(function(){return o})),a.d(e,"c",(function(){return s})),a.d(e,"h",(function(){return n})),a.d(e,"e",(function(){return i})),a.d(e,"f",(function(){return r})),a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return l})),a.d(e,"d",(function(){return m}));a("14d9");const o=function(t){switch(t){case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ເປັນຖ້ຽວ";case"chartered":return"ມອບເໝົາ";case"bag":return"ບໍລິມາດ";case"infect":return"ຂີ້ເຫຍື້ອຕິດເຊື້ອ";case"32km":return"ຫຼັກ32";default:return t}},s=[{en:"container",la:"ຄອນເທນເນີ"},{en:"fix_cost",la:"ເປັນຖ້ຽວ"},{en:"chartered",la:"ມອບເໝົາ"},{en:"bag",la:"ບໍລິມາດ"},{en:"infect",la:"ຂີ້ເຫຍື້ອຕິດເຊື້ອ"},{en:"32km",la:"ຫຼັກ32"}],n=function(t){switch(t){case"company":return"ຫົວໜ່ວຍທຸລະກິດ";case"home":return"ຄົວເຮືອນ";default:return t}},i=function(t){switch(t){case"bag":case"chartered":case"32km":case"infect":return"ຖົງ";case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ຖ້ຽວ";default:return t}},r=[{en:"requested",la:"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ",color:"#34495e"},{en:"rejected",la:"ປະຕິເສດລູກຄ້າແລ້ວ",color:"#eff3f5"},{en:"approved",la:"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ",color:"#54a0ff"},{en:"collected",la:"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ",color:"#c1c40f"},{en:"collect_confirm",la:"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ",color:"#30cb83"},{en:"collect_reject",la:"ລູກຄ້າປະຕິເສດການເກັບ",color:"#e74c3c"}],c=[{text:"ວັນທີຈ່າຍບິນ",value:"paided_at"},{text:"ວັນທີສ້າງບິນ",value:"created_at"},{text:"ວັນທີອະນຸມັດບິນ",value:"approved_at"},{text:"ວັນທີກວດສອບບິນສຳເລັດ",value:"confirmed_payment_at"}],l=(t=[])=>{const e=[];for(const a of t)e.push({id:a.id,name:`${a.name} (${Intl.NumberFormat().format(a.price)} ກີບ)`});return e},m=[{value:"",text:"ທັງໝົດ"},{value:"can",text:"ເກັບໄດ້"},{value:"not",text:"ເກັບບໍ່ໄດ້"}]},"867a":function(t,e,a){},c671:function(t,e,a){"use strict";var o=a("1e6c");e["a"]=o["a"].extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=o["a"].options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})}}]);
//# sourceMappingURL=chunk-4ed6355d.bb8c382b.js.map