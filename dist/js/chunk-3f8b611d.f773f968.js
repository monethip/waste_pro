(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f8b611d"],{"0670":function(e,t,a){},"4fad":function(e,t,a){var n=a("23e7"),r=a("6f53").entries;n({target:"Object",stat:!0},{entries:function(e){return r(e)}})},"6eceb":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("ac1f"),a("841c");var n=function(e){""!==e.search?""!==e.oldVal?e.oldVal!==e.search&&(e.oldVal=e.search,e.pagination.current_page=1,e.fetchData()):(""!==e.search&&(e.pagination.current_page=1,e.fetchData()),e.oldVal=e.search):e.oldVal=""}},"987d":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{staticClass:"mb-n6"},[a("v-col",[a("p",[e._v("ເລືອກເດືອນທີ່ອອກໃບບິນເກັບເງິນ")])]),a("v-col",[a("v-text-field",{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຊື່",type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Search()}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),a("div",[a("v-card",[a("v-card-text",[a("v-data-table",{attrs:{headers:e.headers,items:e.calendars,search:e.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:e._u([{key:"item.total",fn:function(t){var a=t.item;return[e._v(" "+e._s(Intl.NumberFormat().format(a.total))+" ")]}},{key:"item.plan",fn:function(t){var n=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{color:"success",small:""},on:{click:function(t){return e.createInvoice(n.plan_month.id)}}},[e._v(" mdi-eye")])]}}])}),a("br"),[e.pagination.total_pages>1?a("Pagination",{attrs:{pagination:e.pagination,offset:e.offset},on:{paginate:function(t){return e.fetchData()}}}):e._e()]],2)],1)],1)],1)},r=[],i=a("3835"),o=(a("4fad"),a("b0c0"),a("6eceb")),c={name:"Customer",data:function(){return{tab:null,calendars:[],loading:!1,calendarId:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",date:(new Date).toISOString().substr(0,7),start_menu:!1,packages:[],selectedPackage:"",server_errors:{},districts:[],selectedDistrict:"",villages:[],selectedVillage:[],selectedStatus:[],plan:{},calendarEdit:{},headers:[{text:"ຊື່",value:"plan_month.name"},{text:"ລວມເງິນ",value:"total",align:"center",sortable:!1},{text:"ຈຳນວນລູກຄ້າ",value:"count_customer",align:"center",sortable:!1},{text:"ຈຳນວນບິນ",value:"plan_month.has_invoice",align:"center",sortable:!1},{text:"ລາຍລະອຽດ",value:"plan",sortable:!1,align:"center"},{text:"",value:"actions",sortable:!1}]}},methods:{fetchData:function(){var e=this;this.$store.commit("Loading_State",!0),this.$axios.get("invoice-summary",{params:{page:this.pagination.current_page,per_page:this.per_page}}).then((function(t){200==t.data.code&&setTimeout((function(){e.$store.commit("Loading_State",!1),e.calendars=t.data.data.data,e.pagination=t.data.data.pagination}),100)})).catch((function(t){if(e.$store.commit("Loading_State",!1),e.fetchData(),422==t.response.status)for(var a=t.response.data.errors,n=0,r=Object.entries(a);n<r.length;n++){var o=Object(i["a"])(r[n],2),c=o[0],s=o[1];e.server_errors[c]=s[0]}}))},Search:function(){Object(o["a"])(this)},createInvoice:function(e){this.$router.push({name:"InvoiceTab",params:{id:e}})}},watch:{search:function(e){""==e&&this.fetchData()},"plan.name":function(){this.server_errors.name=""},start_date:function(){this.server_errors.month=""},"calendarEdit.name":function(){this.server_errors.name=""},"calendarEdit.month":function(){this.server_errors.month=""}},created:function(){this.fetchData()}},s=c,l=(a("ebf8"),a("2877")),d=a("6544"),u=a.n(d),f=a("b0af"),h=a("99d9"),p=a("62ad"),m=a("a523"),v=a("8fea"),g=a("132d"),b=a("0fd9"),_=a("8654"),x=Object(l["a"])(s,n,r,!1,null,null,null);t["default"]=x.exports;u()(x,{VCard:f["a"],VCardText:h["b"],VCol:p["a"],VContainer:m["a"],VDataTable:v["a"],VIcon:g["a"],VRow:b["a"],VTextField:_["a"]})},ebf8:function(e,t,a){"use strict";a("0670")}}]);
//# sourceMappingURL=chunk-3f8b611d.f773f968.js.map