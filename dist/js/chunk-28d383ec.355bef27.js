(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28d383ec"],{"2bc5":function(t,e,a){"use strict";var i=a("5530"),s=(a("a15b"),a("abd3"),a("ade3")),n=a("1c87"),r=a("58df"),o=Object(r["a"])(n["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(s["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),a=e.tag,s=e.data;return t("li",[t(a,Object(i["a"])(Object(i["a"])({},s),{},{attrs:Object(i["a"])(Object(i["a"])({},s.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),c=a("80d2"),l=Object(c["j"])("v-breadcrumbs__divider","li"),u=a("7560");e["a"]=Object(r["a"])(u["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(i["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(l,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,a=[],i=0;i<this.items.length;i++){var s=this.items[i];a.push(s.text),e?t.push(this.$scopedSlots.item({item:s})):t.push(this.$createElement(o,{key:a.join("."),props:s},[s.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},"347c":function(t,e,a){t.exports=a.p+"img/pin1.d74f27bd.svg"},4674:function(t,e,a){"use strict";a("ff03")},"4fad":function(t,e,a){var i=a("23e7"),s=a("6f53").entries;i({target:"Object",stat:!0},{entries:function(t){return s(t)}})},"4fb0":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-breadcrumbs",{attrs:{large:""}},[a("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[a("v-icon",[t._v("mdi-keyboard-backspace ")])],1),t._v(" ລາຍລະອຽດແຜນເສັ້ນທາງ "),a("span",{staticClass:"primary-color ml-2"},[t._v(" "+t._s(t.plan.name))])],1),a("v-row",[t.switchMap?a("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[a("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:t.getCenter(),zoom:16,disableDefaultUI:!0}},[a("gmap-info-window",{attrs:{options:t.infoOptions,position:t.infoPosition,opened:t.infoOpened,conent:t.infoContent},on:{closeclick:function(e){t.infoOpened=!1}}},[t._v(t._s(t.infoContent)+" ")]),t._l(t.customers,(function(e,i){return a("GmapMarker",{key:i,attrs:{position:t.getMarkers(e),draggable:!1,icon:t.markerOptions,animation:2,clickable:!0},on:{click:function(a){return t.toggleInfo(e,i)}}})}))],2)],1):t._e(),t.switchMap?t._e():a("v-col",[a("div",{staticClass:"iframe-container"},[a("div",{domProps:{innerHTML:t._s(t.plan.embed)}})])])],1),a("v-row",{staticClass:"mb-n6"},[a("v-col",[a("v-btn",{staticClass:"btn-primary",on:{click:function(e){return t.viewMap()}}},[a("v-icon",[t._v("mdi-map")])],1)],1),a("v-col",[a("h4",[t._v("ລວມລູກຄ້າ "+t._s(t.pagination.total)+" ຄົນ")])]),a("v-col",[a("v-text-field",{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຊື່ລູກຄ້າ",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),a("div",[a("v-card",[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.customers,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.customer",fn:function(e){var i=e.item;return[(i.customer.customer_type="company")?a("div",[t._v(" "+t._s(i.customer.company_name)+" ")]):t._e(),a("div",[t._v(" "+t._s(i.customer.name)+" "+t._s(i.customer.surname)+" ")])]}},{key:"item.status",fn:function(e){var i=e.item;return[i.customer?a("v-chip",{attrs:{color:t.statusColor(i.customer.status)}},[t._v(t._s(i.customer.status))]):t._e()]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.viewPage(i)}}},[t._v(" mdi-eye ")])]}}])}),a("br"),[t.pagination.total_pages>1?a("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1)],1)],1)},s=[],n=a("3835"),r=(a("4fad"),a("d81d"),a("b0c0"),a("6eceb")),o={name:"Customer",data:function(){return{tab:null,customers:[],loading:!1,switchMap:!0,customerId:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",districts:[],selectedDistrict:"",villages:[],selectedVillage:[],plan:{},headers:[{text:"ລຳດັບ",value:"priority",sortable:!1,align:"center"},{text:"ລູກຄ້າ",value:"customer"},{text:"ສະຖານະ",value:"status",sortable:!1},{text:"ເຮືອນເລກທີ",value:"customer.house_number",sortable:!1},{text:"",value:"actions",sortable:!1}],latlng:{lat:18.1189434,lng:102.290218},markers:[],markerOptions:{url:a("347c"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:28,height:48,f:"px",b:"px"},scaledSize:{width:28,height:48,f:"px",b:"px"}},infoPosition:null,infoContent:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35}}}},methods:{backPrevios:function(){this.$router.go(-1)},fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("route-plan/"+this.$route.params.id+"/route-plan-detail",{params:{page:this.pagination.current_page,per_page:this.per_page,villages:this.selectedVillage}}).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.customers=e.data.data.data,t.pagination=e.data.data.pagination,t.getCenter()}),100)})).catch((function(e){if(t.$store.commit("Loading_State",!1),t.fetchData(),422==e.response.status)for(var a=e.response.data.errors,i=0,s=Object.entries(a);i<s.length;i++){var r=Object(n["a"])(s[i],2),o=r[0],c=r[1];t.server_errors[o]=c[0]}}))},fetchDetail:function(){var t=this;this.$axios.get("route-plan/"+this.$route.params.id).then((function(e){200==e.data.code&&setTimeout((function(){t.plan=e.data.data}),100)})).catch((function(){}))},fetchAddress:function(){var t=this;this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then((function(e){200==e.data.code&&setTimeout((function(){t.address=e.data.data,t.address.map((function(e){t.districts=e.districts}))}),100)})).catch((function(){}))},fetchVillage:function(){var t=this;this.$axios.get("info/district/"+this.selectedDistrict+"/village").then((function(e){200==e.data.code&&setTimeout((function(){t.villages=e.data.data}),100)})).catch((function(){}))},createPage:function(){this.$router.push({name:"CreateExportPlan",params:{items:this.customers,villages:this.selectedVillage}}),this.$emit("create-plan",this.customers,this.selectedVillage)},viewPage:function(t){"company"==t.customer.customer_type?this.$router.push({name:"ViewCompany",params:{id:t.customer_id}}):"home"==t.customer.customer_type&&this.$router.push({name:"ViewCustomer",params:{id:t.customer_id}})},viewMap:function(){this.switchMap=!this.switchMap},Search:function(){Object(r["a"])(this)},getCenter:function(){if(this.customers.length){var t={lat:parseFloat(this.customers[0].customer.lat),lng:parseFloat(this.customers[0].customer.lng)};return t}return this.latlng},getMarkers:function(t){if(null!==t.customer)return{lat:parseFloat(t.customer.lat),lng:parseFloat(t.customer.lng)}},toggleInfo:function(t,e){this.infoPosition=this.getMarkers(t),this.infoContent=t.priority+" "+t.customer.name+" ("+t.customer.house_number+") ",this.infoCurrentKey==e?this.infoOpened=!this.infoOpened:(this.infoOpened=!0,this.infoCurrentKey=e)},statusColor:function(t){return"active"==t?"success":"inactive"==t?"error":"info"}},watch:{search:function(t){""==t&&this.fetchData()},selectedVillage:function(){this.fetchData()},selectedDistrict:function(){this.fetchVillage()}},created:function(){this.fetchData(),this.fetchDetail()}},c=o,l=(a("4674"),a("2877")),u=a("6544"),d=a.n(u),f=a("2bc5"),h=a("8336"),m=a("b0af"),p=a("99d9"),v=a("cc20"),g=a("62ad"),b=a("a523"),_=a("8fea"),C=a("132d"),y=a("0fd9"),k=a("8654"),x=Object(l["a"])(c,i,s,!1,null,null,null);e["default"]=x.exports;d()(x,{VBreadcrumbs:f["a"],VBtn:h["a"],VCard:m["a"],VCardText:p["b"],VChip:v["a"],VCol:g["a"],VContainer:b["a"],VDataTable:_["a"],VIcon:C["a"],VRow:y["a"],VTextField:k["a"]})},"6eceb":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("ac1f"),a("841c");var i=function(t){""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},abd3:function(t,e,a){},ff03:function(t,e,a){}}]);
//# sourceMappingURL=chunk-28d383ec.355bef27.js.map