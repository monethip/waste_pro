(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42021f5b"],{"54da":function(t,e,a){"use strict";e["a"]=function(t){const e={};if(!t[0]){for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&(void 0!==t[e]&&null!==t[e]&&""!==t[e]||delete t[e]);return t}for(const a of t)1==Object.keys(a).length&&a[Object.keys(a)]&&(e[Object.keys(a)]=a[Object.keys(a)]);return e}},"6eceb":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));const n=t=>{""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},"8bcf":function(t,e,a){"use strict";a("c768")},"987d":function(t,e,a){"use strict";a.r(e);var n=a("b0af"),r=a("99d9"),s=a("62ad"),i=a("a523"),o=a("8fea"),c=a("132d"),l=a("0fd9"),d=a("8654"),u=function(){var t=this,e=t._self._c;return e(i["a"],[e(l["a"],{staticClass:"mb-n6"},[e(s["a"],[e("p",[t._v("ເລືອກເດືອນທີ່ອອກໃບບິນເກັບເງິນ")])]),e(s["a"],[e(d["a"],{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຊື່",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),e("div",[e(n["a"],[e(r["b"],[e(o["a"],{attrs:{headers:t.headers,items:t.calendars,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.total",fn:function({item:e}){return[t._v(" "+t._s(Intl.NumberFormat().format(e.total))+" ")]}},{key:"item.plan",fn:function({item:a}){return[e(c["a"],{staticClass:"mr-2",attrs:{color:"success",small:""},on:{click:function(e){return t.createInvoice(a.plan_month.id)}}},[t._v(" mdi-eye ")])]}}])}),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1)],1)},f=[],p=(a("14d9"),a("6eceb")),h=a("54da"),m={name:"Invoice",title(){return"Vientiane Waste Co-Dev|Invoice"},data(){return{tab:null,calendars:[],loading:!1,calendarId:"",offset:12,pagination:{},per_page:100,search:"",oldVal:"",date:(new Date).toISOString().substr(0,7),start_menu:!1,packages:[],selectedPackage:"",server_errors:{},districts:[],selectedDistrict:"",villages:[],selectedVillage:[],selectedStatus:[],plan:{},calendarEdit:{},headers:[{text:"ຊື່",value:"plan_month.name"},{text:"ລວມເງິນ",value:"total",align:"center",sortable:!1},{text:"ຈຳນວນບິນ",value:"count_customer",align:"center",sortable:!1},{text:"ລາຍລະອຽດ",value:"plan",sortable:!1,align:"center"},{text:"",value:"actions",sortable:!1}]}},watch:{search(t){""==t&&this.fetchData()},"plan.name":function(){this.server_errors.name=""},start_date(){this.server_errors.month=""},"calendarEdit.name":function(){this.server_errors.name=""},"calendarEdit.month":function(){this.server_errors.month=""}},created(){this.fetchData()},methods:{fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("invoice-summary",{params:Object(h["a"])([{page:this.pagination.current_page},{per_page:this.per_page},{filter:this.search}])}).then(t=>{200==t.data.code&&(this.$store.commit("Loading_State",!1),this.calendars=t.data.data.data,this.pagination=t.data.data.pagination)}).catch(t=>{if(this.$store.commit("Loading_State",!1),t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}})},Search(){Object(p["a"])(this)},createInvoice(t){this.$router.push({name:"InvoiceTab",params:{id:t}})}}},g=m,b=(a("8bcf"),a("2877")),v=Object(b["a"])(g,u,f,!1,null,null,null);e["default"]=v.exports},a523:function(t,e,a){"use strict";a("20f6"),a("4b85");var n=a("2b0e");function r(t){return n["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:a,data:n,children:r}){n.staticClass=`${t} ${n.staticClass||""}`.trim();const{attrs:s}=n;if(s){n.attrs={};const t=Object.keys(s).filter(t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(n.staticClass+=" "+t.join(" "))}return a.id&&(n.domProps=n.domProps||{},n.domProps.id=a.id),e(a.tag,n,r)}})}var s=a("d9f7");e["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:a,children:n}){let r;const{attrs:i}=a;return i&&(a.attrs={},r=Object.keys(i).filter(t=>{if("slot"===t)return!1;const e=i[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),t(e.tag,Object(s["a"])(a,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),n)}})},c768:function(t,e,a){}}]);
//# sourceMappingURL=chunk-42021f5b.cb0edd62.js.map