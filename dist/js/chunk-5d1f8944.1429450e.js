(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d1f8944"],{"0798":function(t,e,a){"use strict";a("0c18");var s=a("10d2"),i=a("afdd"),r=a("9d26"),n=a("f2e7"),l=a("7560"),o=a("f40d"),c=a("58df"),d=a("d9bd");e["a"]=Object(c["a"])(s["a"],n["a"],o["a"]).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{["v-alert__border--"+this.border]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(i["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(r["a"],{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(r["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...s["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t["v-alert--border-"+this.border]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$"+this.type)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(d["a"])("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,a){},"1f09":function(t,e,a){},"2bfd":function(t,e,a){},3129:function(t,e,a){"use strict";a("14d9"),a("1f09");var s=a("c995"),i=a("24b2"),r=a("7560"),n=a("58df"),l=a("80d2");e["a"]=Object(n["a"])(s["a"],i["a"],r["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},tile:Boolean,transition:String,type:String,types:{type:Object,default:()=>({})}},computed:{attrs(){return this.isLoading?{"aria-busy":!this.boilerplate||void 0,"aria-live":this.boilerplate?void 0:"polite","aria-label":this.boilerplate?void 0:this.$vuetify.lang.t(this.loadingText),role:this.boilerplate?void 0:"alert",...this.$attrs}:this.$attrs},classes(){return{"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile,...this.themeClasses,...this.elevationClasses}},isLoading(){return!("default"in this.$scopedSlots)||this.loading},rootTypes(){return{actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text",...this.types}}},methods:{genBone(t,e){return this.$createElement("div",{staticClass:`v-skeleton-loader__${t} v-skeleton-loader__bone`},e)},genBones(t){const[e,a]=t.split("@"),s=()=>this.genStructure(e);return Array.from({length:a}).map(s)},genStructure(t){let e=[];t=t||this.type||"";const a=this.rootTypes[t]||"";if(t===a);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);a.indexOf(",")>-1?e=this.mapBones(a):a.indexOf("@")>-1?e=this.genBones(a):a&&e.push(this.genStructure(a))}return[this.genBone(t,e)]},genSkeleton(){const t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(l["s"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave(t){t.style.setProperty("display","none","important")},resetStyles(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},"54da":function(t,e,a){"use strict";e["a"]=function(t){const e={};if(!t[0]){for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&(void 0!==t[e]&&null!==t[e]&&""!==t[e]||delete t[e]);return t}for(const a of t)1==Object.keys(a).length&&a[Object.keys(a)]&&(e[Object.keys(a)]=a[Object.keys(a)]);return e}},7660:function(t,e,a){"use strict";a.d(e,"i",(function(){return s})),a.d(e,"c",(function(){return i})),a.d(e,"j",(function(){return r})),a.d(e,"e",(function(){return n})),a.d(e,"g",(function(){return l})),a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return c})),a.d(e,"d",(function(){return d})),a.d(e,"h",(function(){return u})),a.d(e,"f",(function(){return h}));a("14d9");const s=function(t,e=null){switch(t){case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ເປັນຖ້ຽວ";case"chartered":return"ມອບເໝົາ";case"bag":return"company"==e?"ບໍລິມາດ":"ຄົວເຮືອນ";case"infect":return"ຂີ້ເຫຍື້ອຕິດເຊື້ອ";case"32km":return"ຫຼັກ32";default:return t}},i=[{en:"container",la:"ຄອນເທນເນີ"},{en:"fix_cost",la:"ເປັນຖ້ຽວ"},{en:"chartered",la:"ມອບເໝົາ"},{en:"bag",la:"ບໍລິມາດ"},{en:"infect",la:"ຂີ້ເຫຍື້ອຕິດເຊື້ອ"},{en:"32km",la:"ຫຼັກ32"}],r=function(t){switch(t){case"company":return"ຫົວໜ່ວຍທຸລະກິດ";case"home":return"ຄົວເຮືອນ";default:return t}},n=function(t){switch(t){case"bag":case"chartered":case"32km":case"infect":return"ຖົງ";case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ຖ້ຽວ";default:return t}},l=[{en:"requested",la:"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ",color:"#34495e"},{en:"rejected",la:"ປະຕິເສດລູກຄ້າແລ້ວ",color:"#eff3f5"},{en:"approved",la:"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ",color:"#54a0ff"},{en:"collected",la:"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ",color:"#c1c40f"},{en:"collect_confirm",la:"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ",color:"#30cb83"},{en:"collect_reject",la:"ລູກຄ້າປະຕິເສດການເກັບ",color:"#e74c3c"}],o=[{text:"ວັນທີຈ່າຍບິນ",value:"paided_at"},{text:"ວັນທີສ້າງບິນ",value:"created_at"},{text:"ວັນທີອະນຸມັດບິນ",value:"approved_at"},{text:"ວັນທີກວດສອບບິນສຳເລັດ",value:"confirmed_payment_at"}],c=(t=[])=>{const e=[];for(const a of t)e.push({id:a.id,name:`${a.name} (${Intl.NumberFormat().format(a.price)} ກີບ)`});return e},d=[{value:"",text:"ທັງໝົດ"},{value:"can",text:"ເກັບໄດ້"},{value:"not",text:"ເກັບບໍ່ໄດ້"}],u=function(t,e,a,s){return"company"===s?a:`${t} ${e}`},h=function(t,e){return"company"===t?"COM_"+e:"CUS_"+e}},"8d7f":function(t,e,a){"use strict";a.r(e);var s=a("0798"),i=a("c6a6"),r=a("8336"),n=a("b0af"),l=a("99d9"),o=a("cc20"),c=a("62ad"),d=a("8fea"),u=a("132d"),h=a("0fd9"),p=a("3129"),m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-4"},[e(h["a"],[e(c["a"],{attrs:{cols:"12"}},[e(s["a"],{attrs:{outlined:"",color:"primary"}},[e("div",{staticClass:"text-h6"},[e("span",[e(u["a"],{attrs:{color:"primary"}},[t._v("mdi-magnify")]),t._v(" ຄົ້ນຫາ ")],1)]),e(h["a"],{staticClass:"mt-4"},[e(c["a"],{staticClass:"py-0",attrs:{cols:"12",md:"3",xl:"2"}},[e(i["a"],{attrs:{"item-text":"","item-value":"",label:"ເລີ່ມວັນທີ",outlined:"",dense:"",clearable:""}})],1),e(c["a"],{staticClass:"py-0",attrs:{cols:"12",md:"3",xl:"2"}},[e(i["a"],{attrs:{"item-text":"","item-value":"",label:"ຫາວັນທີ",outlined:"",dense:"",clearable:""}})],1),e(c["a"],{staticClass:"py-0",attrs:{cols:"12",md:"3",xl:"2"}},[e(i["a"],{attrs:{"item-text":"","item-value":"",label:"ເລືອກເມືອງ",outlined:"",dense:"",clearable:""}})],1),e(c["a"],{staticClass:"py-0",attrs:{cols:"12",md:"3",xl:"2"}},[e(i["a"],{attrs:{"item-text":"","item-value":"",label:"ເລືອກບ້ານ",outlined:"",dense:"",clearable:""}})],1),e(c["a"],{staticClass:"py-0",attrs:{cols:"12",md:"3",xl:"2"}},[e(i["a"],{attrs:{"item-text":"","item-value":"",label:"ເລືອກປະເພດລູກຄ້າ",outlined:"",dense:"",clearable:""}})],1),e(c["a"],{staticClass:"py-0",attrs:{cols:"12",md:"3",xl:"2"}},[e(i["a"],{attrs:{"item-text":"","item-value":"",label:"ເລືອກປະເພດບໍລິການ",outlined:"",dense:"",clearable:""}})],1),e(c["a"],{staticClass:"py-0",attrs:{cols:"12",md:"3",xl:"2"}},[e(i["a"],{attrs:{"item-text":"","item-value":"",label:"ເລືອກປະເພດລົດ",outlined:"",dense:"",clearable:""}})],1),e(c["a"],{staticClass:"py-0",attrs:{cols:"12",md:"3",xl:"2"}},[e(i["a"],{attrs:{"item-text":"","item-value":"",label:"ເລືອກລົດ",outlined:"",dense:"",clearable:""}})],1),e(c["a"],{staticClass:"py-0",attrs:{cols:"12",md:"3",xl:"2"}},[e(i["a"],{attrs:{"item-text":"","item-value":"",label:"ເລືອກຄົນຂັບ",outlined:"",dense:"",clearable:""}})],1),e(c["a"],{staticClass:"py-0",attrs:{cols:"12",md:"3",xl:"2"}},[e(r["a"],{staticStyle:{width:"100%"},attrs:{color:"primary",dark:""}},[e(u["a"],{attrs:{left:""}},[t._v(" mdi-magnify ")]),t._v(" ຄົ້ນຫາ ")],1)],1),e(c["a"],{staticClass:"py-0",attrs:{cols:"12",md:"3",xl:"2"}},[e(r["a"],{staticStyle:{width:"100%"},attrs:{color:"green",dark:""}},[e(u["a"],{attrs:{left:""}},[t._v(" mdi-microsoft-excel ")]),t._v(" export ")],1)],1)],1)],1)],1)],1),e(h["a"],[e(c["a"],{attrs:{cols:"12"}},[t.districts.length?e(n["a"],{attrs:{outlined:""}},[e(l["c"],[t._v("ພາບລວມ: "),e("strong",[t._v(t._s(t.total.total_format))])]),e(l["b"],t._l(t.districts,(function(a){return e(h["a"],{key:a.district_id},[e(c["a"],{attrs:{cols:"12"}},[e(n["a"],{attrs:{outlined:""}},[e(l["c"],[t._v(t._s(a.district_name)+": "),e("strong",[t._v(t._s(a.count_plans_format))])]),e(l["b"],t._l(a.villages,(function(s){return e(o["a"],{key:s.village_id,staticClass:"ma-1",attrs:{color:a.color,outlined:""}},[t._v(" "+t._s(s.village_name)+": "),e("strong",[t._v(t._s(s.count_plans_format))])])})),1)],1)],1)],1)})),1)],1):e(p["a"],{attrs:{type:"article"}})],1)],1),e(h["a"],[e(c["a"],{attrs:{cols:"12"}},[t.displayData.length?e(n["a"],{attrs:{outlined:""}},[e(l["c"],[t._v("ລາຍການແຜນ: "),e("strong",[t._v(t._s(t.total.total_format))])]),e(l["b"],[e(h["a"],[e(c["a"],{attrs:{cols:"12"}},[e(d["a"],{attrs:{headers:t.headers,items:t.displayData,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.date",fn:function({item:a}){return[e("a",{attrs:{href:"#"},on:{click:function(e){return t.routeOpen(a.route_plan_calendar_detail)}}},[t._v(t._s(a.date))])]}},{key:"item.display_customer_id",fn:function({item:a}){return[e("a",{attrs:{href:"#"},on:{click:function(e){return t.routeOpen(a.route_customer)}}},[t._v(t._s(a.display_customer_id))])]}},{key:"item.customer_name",fn:function({item:a}){return[e("a",{attrs:{href:"#"},on:{click:function(e){return t.routeOpen(a.route_customer)}}},[t._v(t._s(a.customer_name))])]}},{key:"item.route_plan_name",fn:function({item:a}){return[e("a",{attrs:{href:"#"},on:{click:function(e){return t.routeOpen(a.route_plan_calendar)}}},[t._v(t._s(a.route_plan_name))])]}}],null,!0)})],1)],1),t.paginate.next_page_url||t.paginate.prev_page_url?e(h["a"],[e(c["a"],{attrs:{cols:"4"}},[e(r["a"],{attrs:{color:"primary",outlined:"",disabled:!t.paginate.prev_page_url},on:{click:function(e){return t.fetchData({url:t.paginate.prev_page_url,type:"prev"})}}},[e(u["a"],{attrs:{left:""}},[t._v(" mdi-arrow-left ")]),t._v(" Previous ")],1)],1),e(c["a"],{attrs:{cols:"4",align:"center"}},[t._v(" "+t._s(t.paginate.current_page)+" / "+t._s(t.total.count_pages_format)+" ")]),e(c["a"],{attrs:{cols:"4",align:"right"}},[e(r["a"],{attrs:{color:"primary",dark:"",disabled:!t.paginate.next_page_url},on:{click:function(e){return t.fetchData({url:t.paginate.next_page_url,type:"next"})}}},[t._v(" Next "),e(u["a"],{attrs:{right:""}},[t._v(" mdi-arrow-right ")])],1)],1)],1):t._e()],1)],1):e(p["a"],{attrs:{type:"table"}})],1)],1)],1)},_=[],g=(a("14d9"),a("13d5"),a("54da")),f=a("7660"),v=a("cebc"),y={name:"Customer",title(){return"Vientiane Waste Co-Dev|Report Trash"},data(){return{headers:[{text:"ວັນທີ",value:"date",width:"120px"},{text:"ບ້ານ",value:"village_name",width:"120px"},{text:"ເມືອງ",value:"district_name",width:"120px"},{text:"ໄອດີລູກຄ້າ",value:"display_customer_id"},{text:"ຊື່ລູກຄ້າ",value:"customer_name",width:"120px"},{text:"ປະເພດລູກຄ້າ",value:"customer_cost_by"},{text:"ຄົນຂັບ",value:"driver_name"},{text:"ລົດ",value:"vehicle_car_number",width:"120px"},{text:"ປະເພດລົດ",value:"vehicle_type_name"},{text:"ແຜນ",value:"route_plan_name"}],rawData:[],rawSum:[],startDate:(new Date).toISOString().substr(0,4)+"-07-01",paginate:{next_page_url:null,prev_page_url:null,cursor_paginate:25,current_page:1,total_pages:1}}},watch:{},created(){this.fetchData(),this.fetchSum()},methods:{routeOpen(t){return v["a"].call(this,t)},async fetchData(t=null){this.$store.commit("Loading_State",!0);const e=await this.$axios.get(t&&t.url?t.url:"report-pending-collection",{params:this.params}).catch(t=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"})});try{this.$store.commit("Loading_State",!1),e.data&&!e.data.error&&(this.rawData=e.data.data.data,this.paginate.next_page_url=e.data.data.next_page_url,this.paginate.prev_page_url=e.data.data.prev_page_url,t?"next"==t.type?this.paginate.current_page+=1:this.paginate.current_page-=1:this.paginate.current_page=1)}catch(a){console.log(a)}},async fetchSum(){const t=await this.$axios.get("report-pending-collection-summary",{params:this.params}).catch(t=>{this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"})});t.data&&!t.data.error&&(this.rawSum=t.data.data)},generateHexColor(){const t=Math.floor(256*Math.random()),e=Math.floor(256*Math.random()),a=Math.floor(256*Math.random()),s=1-(t/255*.299+e/255*.587+a/255*.114),i=.4;if(s<i)return this.generateHexColor();const r="#"+(65536*t+256*e+a).toString(16).padStart(6,"0");return r}},computed:{districts(){const t=new Map;for(const e of this.rawSum){t.has(e.district_id)||t.set(e.district_id,{district_id:e.district_id,district_name:e.district_name,count_plans:e.count_plan_calendar_details,count_plans_format:Intl.NumberFormat().format(e.count_plan_calendar_details),color:this.generateHexColor(),villages:[]});const a=t.get(e.district_id);a.count_plans+=e.count_plan_calendar_details,a.count_plans_format=Intl.NumberFormat().format(a.count_plans),a.villages.push({village_id:e.village_id,village_name:e.village_name,count_plans:e.count_plan_calendar_details,count_plans_format:Intl.NumberFormat().format(e.count_plan_calendar_details)});const s=a.villages.reduce((t,e)=>t+e.count_plans,0);a.count_plans=s,a.count_plans_format=Intl.NumberFormat().format(s)}return Array.from(t.values())},displayData(){const t=[];for(const e of this.rawData){const a={...e,customer_name:Object(f["h"])(e.customer_name,e.customer_surname,e.customer_company_name,e.customer_type),customer_cost_by:Object(f["i"])(e.customer_cost_by,e.customer_type),display_customer_id:Object(f["f"])(e.customer_type,e.c_id),driver_name:`${e.driver_name} (${e.driver_card_id})`,route_customer:{name:"company"==e.customer_type?"ViewCompanyDetail":"ViewClient",params:{id:e.c_id},query:{view_tab:"tab-2"}},route_plan_calendar_detail:{name:"TrashDetail",params:{plan_calendar:e.plan_calendar_id,id:e.id},query:{view_tab:"tab-2"}},route_plan_calendar:{name:"PlanCalendarDetail",params:{id:e.plan_calendar_id,planMonthId:e.plan_month_id},query:{view_tab:"tab-2"}}};t.push(a)}return t},total(){const t=this.districts.reduce((t,e)=>t+e.count_plans,0),e=Math.ceil(t/this.paginate.cursor_paginate);return{total:t,total_format:Intl.NumberFormat().format(t),count_pages:e,count_pages_format:Intl.NumberFormat().format(e)}},params(){const t={cursor_paginate:this.paginate.cursor_paginate,start_date:this.startDate,no_append:!0};return Object(g["a"])(t)}}},b=y,x=a("2877"),S=Object(x["a"])(b,m,_,!1,null,null,null);e["default"]=S.exports},c6a6:function(t,e,a){"use strict";a("2bfd");var s=a("b974"),i=a("8654"),r=a("d9f7"),n=a("80d2");const l={...s["b"],offsetY:!0,offsetOverflow:!0,transition:!1};e["a"]=s["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,a)=>a.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:s["a"].options.props.menuProps.type,default:()=>l},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>{const e=Object(n["r"])(t,this.itemText),a=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),a)})},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=s["a"].options.computed.$_menuProps.call(this);return t.contentClass=("v-autocomplete__content "+(t.contentClass||"")).trim(),{...l,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue)))},listData(){const t=s["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){if(t!==e){if(!this.autoSelectFirst){const a=e[this.$refs.menu.listIndex];a?this.setMenuIndex(t.findIndex(t=>t===a)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&t.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===n["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===n["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==n["y"].backspace&&t!==n["y"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const a=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==a)return void(this.selectedIndex=a);const s=this.selectedItems.length,i=t!==s-1?t:t-1,r=this.selectedItems[i];r?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=i},clearableCallback(){this.internalSearch=null,s["a"].options.methods.clearableCallback.call(this)},genInput(){const t=i["a"].options.methods.genInput.call(this);return t.data=Object(r["a"])(t.data,{attrs:{"aria-activedescendant":Object(n["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(n["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=s["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?s["a"].options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,a=e.value;e.value&&this.activateMenu(),this.multiple||""!==a||this.deleteCurrentItem(),this.internalSearch=a,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[n["y"].home,n["y"].end].includes(e)||s["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){s["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){s["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){s["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,a;if(-1===this.selectedIndex)return;const s=this.selectedItems[this.selectedIndex],i=this.getText(s);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",i),null===(a=t.clipboardData)||void 0===a||a.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}})}}]);
//# sourceMappingURL=chunk-5d1f8944.1429450e.js.map