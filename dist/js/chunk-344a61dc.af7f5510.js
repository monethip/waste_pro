(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-344a61dc"],{"0af3":function(t,e,a){"use strict";var i=a("1455");e["a"]=i["a"].extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=i["a"].options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})},1455:function(t,e,a){"use strict";var i=a("59f4"),s=a("c91b"),o=a("385b"),n=a("dd08"),r=a("9c0c");const l=Object(r["a"])(i["a"],Object(s["a"])("windowGroup","v-window-item","v-window"));e["a"]=l.extend().extend().extend({name:"v-window-item",directives:{Touch:o["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(n["h"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(n["h"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}})},1822:function(t,e,a){"use strict";var i=a("07b0");e["a"]=i["a"]},"1d97":function(t,e,a){"use strict";a("558b"),a("fd65");var i=a("b2e9"),s=a("1822"),o=a("2dec"),n=a("4d84"),r=a("b5e5"),l=r["a"].extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return r["a"].options.computed.classes.call(this)}},methods:{genData:r["a"].options.methods.genData}}),c=a("dd08"),d=a("4190");e["a"]=i["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:t=>t>0},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide(){return{parentTheme:this.theme}},data(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical}},isDark(){return this.dark||!this.light},isVertical(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height(t,e){t!==e&&t&&(this.internalHeight=t)},cycle(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created(){this.$attrs.hasOwnProperty("hide-controls")&&Object(d["a"])("hide-controls",':show-arrows="false"',this)},mounted(){this.startTimeout()},methods:{genControlIcons(){return this.isVertical?null:i["a"].options.methods.genControlIcons.call(this)},genDelimiters(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems(){const t=this.items.length,e=[];for(let a=0;a<t;a++){const i=this.$createElement(s["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",a+1,t)},props:{icon:!0,small:!0,value:this.getValue(this.items[a],a)},key:a},[this.$createElement(o["a"],{props:{size:18}},this.delimiterIcon)]);e.push(i)}return this.$createElement(l,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:t=>{this.internalValue=t}}},e)},genProgress(){return this.$createElement(n["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render(t){const e=i["a"].options.render.call(this,t);return e.data.style=`height: ${Object(c["h"])(this.height)};`,this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},"22aa":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"d",(function(){return s})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"f",(function(){return r})),a.d(e,"e",(function(){return l})),a.d(e,"g",(function(){return c})),a.d(e,"h",(function(){return d}));const i=function(t){switch(t){case"created":case"ລໍຖ້າອະນຸມັດ":return"#73b8fd";case"approved":case"ອະນຸມັດແລ້ວ":return"#0080fc";case"canceled":case"ບິນຖືກຍົກເລີກ":return"#eb004c";case"rejected":case"ການຈ່າຍຖືກປະຕິເສດ":return"#740127";case"to_confirm_payment":case"ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ":return"#9c540d";case"success":case"ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ":return"#02a38a"}},s=function(t){switch(t){case"created":return"ລໍຖ້າອະນຸມັດ";case"approved":return"ອະນຸມັດແລ້ວ";case"canceled":return"ບິນຖືກຍົກເລີກ";case"rejected":return"ການຈ່າຍຖືກປະຕິເສດ";case"to_confirm_payment":return"ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ";case"success":return"ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ";case"cash":return"ຊຳລະເງິນສົດ";case"bcel":return"BCEL";default:return t}},o=function(t){switch(t){case"CustomBill":return"ບິນຍ້ອນຫຼັງ";case"NewCollectionEvent":return"ບີນບໍລີການຂີ້ເຫຍື້ອພິເສດ";case"FutureInvoice":return"ບິນບໍລິການລ່ວງໜ້າ";case"NewInvoice":return"ບິນບໍລິການປະຈຳເດືອນ";default:return t}},n=function(t){switch(t){case"requested":return"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ";case"rejected":return"ປະຕິເສດລູກຄ້າແລ້ວ";case"approved":return"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ";case"collected":return"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ";case"collect_confirm":return"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ";case"collect_reject":return"ລູກຄ້າປະຕິເສດການເກັບ";default:return t}},r=[{value:"cash",text:"ເງິນສົດ"},{value:"bcel",text:"ເງິນໂອນ"},{value:"bcel_online",text:"bcel bill payments"}],l=["created","approved","to_confirm_payment","success"],c=["rejected","canceled"],d=["kg","ຖົງ","container","ຄັ້ງ"]},"28e8":function(t,e,a){"use strict";a("558b"),a("c332");var i=a("9c0c"),s=a("078d"),o=a("2dec"),n=a("d799"),r=a("c91b"),l=a("710c"),c=a("9a1f"),d=a("c4d0"),u=a("3562"),h=a("4190");e["a"]=Object(i["a"])(n["a"],u["a"],d["a"],l["a"],Object(r["a"])("chipGroup"),Object(c["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...d["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(d["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(h["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(o["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(s["b"],t)},genClose(){return this.$createElement(o["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:a,data:i}=this.generateRouteLink();i.attrs={...i.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex},i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);const s=this.textColor||this.outlined&&this.color;return t(a,this.setTextColor(s,i),e)}})},"347c":function(t,e,a){t.exports=a.p+"img/pin1.d74f27bd.svg"},"398d":function(t,e,a){"use strict";var i=a("1da9"),s=a("d62f"),o=function(){var t=this,e=t._self._c;return e(s["a"],t._l(t.cards,(function(t,a){return e(i["a"],{key:a},[e("MoneyCard",{attrs:{title:t.status_la||t.title||t.display_type_la,total:t.total,billing_count:t.count_billing,bg_color:t.bg_color,route:t.route,icon:t.icon,icon_color:t.icon_color,unit_count:t.unit_count}})],1)})),1)},n=[],r=a("ca79"),l={components:{MoneyCard:r["a"]},props:["cards"],data(){return{}}},c=l,d=a("4a4e"),u=Object(d["a"])(c,o,n,!1,null,null,null);e["a"]=u.exports},"4f60":function(t,e,a){"use strict";a("7bf7")},"689e":function(t,e,a){},"68f8":function(t,e,a){"use strict";a("558b");var i=a("1455"),s=a("0087"),o=a("9c0c"),n=a("dd08"),r=a("c4d0");const l=Object(o["a"])(i["a"],r["a"]);e["a"]=l.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot(){return[this.$createElement(s["a"],{staticClass:"v-carousel__item",props:{...this.$attrs,height:this.windowGroup.internalHeight},on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(n["s"])(this))]},genWindowItem(){const{tag:t,data:e}=this.generateRouteLink();return e.staticClass="v-window-item",e.directives.push({name:"show",value:this.isActive}),this.$createElement(t,e,this.genDefaultSlot())}}})},"71a0":function(t,e,a){"use strict";a.r(e);var i=a("8447"),s=a("07b0"),o=a("db5a"),n=a("0f35"),r=a("1d97"),l=a("68f8"),c=a("28e8"),d=a("1da9"),u=a("1789"),h=a("d415"),m=a("6733"),p=a("1d7d"),_=a("0087"),v=a("cf5d"),g=a("bf41"),f=a("f836"),b=a("fde7"),y=a("d62f"),C=a("a729"),w=a("cfe2"),x=a("2f5e"),k=a("0af3"),S=a("a151"),$=a("e28e"),T=a("9b44"),B=function(){var t=this,e=t._self._c;return e(u["a"],[e(i["a"],{staticClass:"pt-0",attrs:{large:""}},[e(s["a"],{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[e(p["a"],[t._v("mdi-chevron-left")])],1),t._v(" ລາຍລະອຽດ "),t.$can("update_customer")?e("router-link",{staticClass:"ml-4",attrs:{to:"/edit/customer/"+t.data.id}},[t._v(" ແກ້ໄຂ ")]):t._e()],1),t.$role("kbt")?t._e():e(y["a"],[e(d["a"],[e(o["a"],[e(n["b"],[e(y["a"],[e(d["a"],[e("h3",[t._v("ປະຫັວດການຊຳລະທັງໝົດ")]),e("RowSection",{attrs:{cards:t.allMonthsNoBillMonth}})],1)],1)],1)],1)],1)],1),t.$role("kbt")?t._e():e(y["a"],[e(d["a"],[e(o["a"],[e(n["b"],[e(y["a"],[e(d["a"],[e("h3",[t._v("ປະຫັວດການບໍລິການທັງໝົດ")]),e("RowSection",{attrs:{cards:t.allCollectionNoMonth}})],1)],1)],1)],1)],1)],1),e(y["a"],[e(d["a"],[e(o["a"],[t.data.media&&t.data.media.length?e(r["a"],t._l(t.data.media,(function(a,i){return e(l["a"],{key:i,attrs:{src:a.url,"reverse-transition":"fade-transition",transition:"fade-transition"},on:{click:function(e){return t.showImage(a.url)}}})})),1):t._e(),e(n["b"],[e(S["a"],{attrs:{"background-color":"#49A3DA",dark:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(x["a"],{attrs:{href:"#tab-1"}},[t._v(" ຂໍ້ມູນກ່ຽວກັບ ")]),t.$role("kbt")?t._e():e(x["a"],{attrs:{href:"#tab-2"}},[t._v(" ຂໍ້ມູນການບໍລິການ ")]),t.$role("kbt")?t._e():e(x["a"],{attrs:{href:"#tab-3"}},[t._v(" ຂໍ້ມູນການຊຳລະ ")])],1),e($["a"],{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(k["a"],{attrs:{value:"tab-1"}},[e(u["a"],[e(y["a"],[e(v["a"],[e(f["a"],[e(p["a"],{attrs:{color:"indigo"}},[t._v(" mdi-account-circle-outline ")])],1),e(g["b"],[e(g["d"],[t._v(" "+t._s(t.data.name)+" "+t._s(t.data.surname)+" ")]),e(g["c"],[t._v(" "+t._s(t.data.customer_id)+" ")])],1),e(w["a"]),e(f["a"],[e(p["a"],{staticClass:"mr-6",attrs:{color:"indigo"}},[t._v(" mdi-home ")])],1),e(g["b"],[t.data.user?e(g["d"],[t._v(" ບ້ານເລກທີ "+t._s(t.data.house_number)+" ")]):t._e(),t.data.village?e(g["c"],[t._v(" "+t._s(t.data.village.name)+", "+t._s(t.data.district?t.data.district.name:"")+" ")]):t._e()],1)],1),e(m["a"],{attrs:{inset:""}})],1),e(y["a"],[e(v["a"],[e(f["a"],[e(p["a"],{attrs:{color:"indigo"}},[t._v(" mdi-phone ")])],1),e(g["b"],[t.data.user?e(g["d"],[t._v(" "+t._s(t.data.user.phone)+" ")]):t._e(),e(g["c"],[t._v("ເບີໂທ")])],1),e(w["a"]),e(f["a"],[e(p["a"],{staticClass:"mr-6",attrs:{color:"indigo"}},[t._v(" mdi-email ")])],1),e(g["b"],[t.data.user?e(g["d"],[t._v(" "+t._s(t.data.user.email)+" ")]):t._e(),e(g["c"],[t._v("Email")])],1)],1),e(m["a"],{attrs:{inset:""}}),e(v["a"],[e(f["a"],[e(p["a"],{attrs:{color:"indigo"}},[t._v(" mdi-map-marker ")])],1),e(g["b"],[t.data.village?e(g["d"],[t._v(" "+t._s(t.data.village.name)+" ")]):t._e(),t._l(t.data.village_details,(function(a,i){return e("div",{key:i},[e(g["c"],[t._v(" "+t._s(a.name)+" ")])],1)}))],2),e(w["a"]),e(f["a"],[e(p["a"],{staticClass:"mr-6",attrs:{color:"indigo"}},[t._v(" mdi-toolbox-outline ")])],1),t.data.package?e(g["b"],[e(g["d"],[t._v(" "+t._s(t.data.package.name)+" ")]),e(g["c"],[t._v(" "+t._s(t.data.package.price)+" ")])],1):t._e()],1)],1),e(y["a"],[e(m["a"],{attrs:{inset:""}}),e(v["a"],[e(f["a"],[e(p["a"],{attrs:{color:"indigo"}},[t._v(" mdi-calendar-account ")])],1),e(g["b"],[t.data.customer_activity?e(g["d"],[t._v(" "+t._s(t.data.customer_activity.user?t.data.customer_activity.user.full_name:"")+" ")]):t._e(),e(g["c"],[t._v(" "+t._s(t.data.created_at)+" ")])],1),e(w["a"]),e(f["a"],[e(p["a"],{staticClass:"mr-6",attrs:{color:"indigo"}},[t._v(" mdi-truck ")])],1),t.data.package?e(g["b"],[e(g["d"],[e(c["a"],{attrs:{label:"",color:t.statusColor(t.data.status)}},[t._v(" "+t._s(t.data.status)+" ")]),e(c["a"],{staticClass:"ml-2",attrs:{color:t.data.can_collect?"success":"error"}},[t._v(" "+t._s(t.data.can_collect?"ເກັບໄດ້":"ເກັບບໍ່ໄດ້")+" ")])],1)],1):t._e()],1)],1),e(y["a"],[e(d["a"],{staticClass:"mb-4",attrs:{cols:"12"}},[e("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:t.getCenter().lat>0||t.getCenter().lat<0?t.getCenter():{lat:0,lng:0},"disable-default-u-i":!0,zoom:16}},[e("GmapMarker",{ref:"markers",attrs:{animation:2,draggable:!1,icon:t.markerOptions,position:t.getMarkers(t.data)},on:{click:function(e){t.latlng=t.data}}})],1)],1)],1)],1)],1)],1),t.$role("kbt")?t._e():e($["a"],{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(k["a"],{attrs:{value:"tab-2"}},[e(u["a"],[e(y["a"],[e(d["a"],[e("h3",[t._v("ປະຫັວດການບໍລິການ")]),e(y["a"],[e(d["a"],[e(b["a"],{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:i}){return[e(T["a"],t._g(t._b({attrs:{label:"ເດືອນ",readonly:"",outlined:"",dense:"",clearable:""},model:{value:t.month_collection,callback:function(e){t.month_collection=e},expression:"month_collection"}},"v-text-field",i,!1),a))]}}],null,!1,1479562423),model:{value:t.start_menu_collection,callback:function(e){t.start_menu_collection=e},expression:"start_menu_collection"}},[e(h["a"],{attrs:{type:"month"},model:{value:t.month_collection,callback:function(e){t.month_collection=e},expression:"month_collection"}})],1)],1)],1),e("RowSection",{attrs:{cards:t.allCollection}})],1)],1),e(y["a"],[e(d["a"],[e(C["a"],{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("td",{staticClass:"text-left"},[t._v(" Date ")]),e("td",{staticClass:"text-left"},[t._v(" ຊື່ ")]),e("td",{staticClass:"text-left"},[t._v(" ໄອດີ ")]),e("td",{staticClass:"text-left"},[t._v(" ເບີໂທ ")]),e("td",{staticClass:"text-left"},[t._v(" ແພກເກຈ ")]),e("td",{staticClass:"text-left"},[t._v(" ຈຳນວນ ")]),e("td",{staticClass:"text-left"},[t._v(" Status ")]),e("td",{staticClass:"text-left"},[t._v(" ເວລາລົງເກັບ ")])])]),e("tbody",t._l(t.services,(function(a,i){return e("tr",{key:i},[e("td",[e("a",{attrs:{href:"#"},on:{click:function(e){return t.openRoute(a,"PlanCalendarDetail")}}},[t._v(t._s(t.moment(a.date).format("DD-MM-YYYY"))+" ")])]),e("td",{staticClass:"text-left"},[t._v(" "+t._s(t.data.full_name)+" ")]),e("td",{staticClass:"text-left"},[t._v(" "+t._s(t.data.customer_id)+" ")]),e("td",{staticClass:"text-left"},[t._v(" "+t._s(t.data.user?t.data.user.phone:"")+" ")]),t.data.package?e("td",{staticClass:"text-left"},[t._v(" "+t._s(t.data.package.price)+" ("+t._s(t.data.package.per_week)+"ຖົງ/ອາທິດ) ")]):e("td",{staticClass:"text-left"},[t._v(" - ")]),e("td",[e("a",{attrs:{href:"#"},on:{click:function(e){return t.openRoute(a,"TrashDetail")}}},["bag"===a.collection_type||"infect"===a.collection_type||"32km"===a.collection_type?e("div",[t._v(" "+t._s(a.bag)+" ຖົງ ")]):t._e(),"container"===a.collection_type?e("div",[t._v(" "+t._s(a.container)+" ຄອນເທັນເນີ ")]):"chartered"===a.collection_type?e("div",[t._v(" "+t._s(a.bag)+" ຖົງ(ມອບເໝົາ) ")]):"fix_cost"===a.collection_type?e("div",[t._v(" ບໍລິການເປັນຖ້ຽວ ")]):e("div",[t._v(" "+t._s(a.collection_type)+" ")])])]),e("td",[e(c["a"],{attrs:{color:t.statusColor(a.status),label:""},on:{click:function(e){return t.openRoute(a,"TrashDetail")}}},[t._v(" "+t._s(a.status_la)+" ")])],1),e("td",[t._v(t._s(a.collected_at))])])})),0)]},proxy:!0}],null,!1,1430971726)})],1)],1),e("br"),t.pagination.total_pages>1?e("Pagination",{attrs:{offset:t.offset,pagination:t.pagination},on:{paginate:function(e){return t.customerCollection()}}}):t._e()],1)],1)],1),t.$role("kbt")?t._e():e($["a"],{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(k["a"],{attrs:{value:"tab-3"}},[e(u["a"],[e(y["a"],[e(d["a"],[e("h3",[t._v("ປະຫັວດການຊຳລະ")]),e(y["a"],[e(d["a"],[e(b["a"],{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:i}){return[e(T["a"],t._g(t._b({attrs:{label:"ເດືອນ",readonly:"",outlined:"",dense:"",clearable:""},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}},"v-text-field",i,!1),a))]}}],null,!1,4253332766),model:{value:t.start_menu,callback:function(e){t.start_menu=e},expression:"start_menu"}},[e(h["a"],{attrs:{type:"month"},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}})],1)],1)],1),e("RowSection",{attrs:{cards:t.allMonths}})],1)],1),e(y["a"],[e(d["a"],[e(C["a"],{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v(" ວັນທີບິນ ")]),e("th",{staticClass:"text-left"},[t._v(" ໄອດີ ")]),e("th",{staticClass:"text-left"},[t._v(" ຫົວບິນ ")]),e("th",{staticClass:"text-left"},[t._v(" ຊື່ລູກຄ້າ ")]),e("th",{staticClass:"text-left"},[t._v(" ໄອດີ ")]),e("th",{staticClass:"text-left"},[t._v(" ແພັກເກຈ ")]),e("th",{staticClass:"text-left"},[t._v(" ສະຖານະ ")]),e("th",{staticClass:"text-left"},[t._v(" ເວລາຈ່າຍ ")]),e("th",{staticClass:"text-left"},[t._v(" Payment ")]),e("th",{staticClass:"text-left"},[t._v(" Subtotal ")]),e("th",{staticClass:"text-left"},[t._v(" ສ່ວນຫຼູດ ")]),e("th",{staticClass:"text-left"},[t._v(" Total ")]),e("th",{staticClass:"text-left"},[t._v(" ເບິ່ງລາຍລະອຽດ ")])])]),e("tbody",t._l(t.invoices,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(t.moment(a.date).format("DD-MM-YYYY")))]),e("td",[t._v(t._s(a.billing_display_id))]),e("td",[t._v(t._s(a.content))]),e("td",{staticClass:"text-left"},[t._v(" "+t._s(t.data.full_name)+" ")]),e("td",{staticClass:"text-left"},[t._v(" "+t._s(t.data.customer_id)+" ")]),t.data.package?e("td",{staticClass:"text-left"},[t._v(" "+t._s(t.data.package.price)+" ("+t._s(t.data.package.per_week)+"ຖົງ/ອາທິດ) ")]):e("td",{staticClass:"text-left"},[t._v(" - ")]),e("td",[e(c["a"],{attrs:{color:t.getBgColorFn(a.status),dark:""}},[t._v(" "+t._s(a.status_la)+" ")])],1),e("td",[t._v(t._s(a.paided_at))]),e("td",[e("div",{staticClass:"primary--text"},[t._v(" "+t._s(a.payment_method)+" ")])]),e("td",[t._v(t._s(Intl.NumberFormat().format(a.sub_total)))]),e("td",[t._v(t._s(Intl.NumberFormat().format(a.discount)))]),e("td",[t._v(t._s(Intl.NumberFormat().format(a.total)))]),e("td",[e(s["a"],{staticClass:"btn elevation-0",attrs:{color:"info",small:""},on:{click:function(e){return t.ViewInvoice(a.id)}}},[e(p["a"],{staticClass:"mr-1",attrs:{small:""}},[t._v(" mdi-eye ")])],1)],1)])})),0)]},proxy:!0}],null,!1,2630607718)})],1)],1),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{offset:t.offset,pagination:t.pagination},on:{paginate:function(e){return t.customerInvoice()}}}):t._e()]],2)],1)],1)],1)],1)],1)],1),e("ModalView",[[e(o["a"],[e(_["a"],{attrs:{src:t.imageUrl,alt:"Image",dark:"",height:"auto",width:"auto"}})],1)]],2)],1)},D=[],I=(a("558b"),a("22aa")),O=a("398d"),j={components:{RowSection:O["a"]},data(){return{data:{},loading:!1,server_errors:{},start_menu:!1,start_menu_collection:!1,month:this.$route.query.view_month?this.$route.query.view_month:"",month_collection:this.$route.query.view_month_collection?this.$route.query.view_month_collection:"",provinces:[],districts:[],selectedDistrict:"",villages:[],selectedVillage:"",village_details:[],selectedVillageDetail:[],tab:this.$route.query.view_tab?this.$route.query.view_tab:"tab-1",address:[],preview_list:[],image_list:[],image:[],latlng:{lat:0,lng:0},markers:[],currentPlace:null,markerOptions:{url:a("347c"),size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}},services:[],serviceSummary:{},statusSummary:{},statusSummaryNoMonth:{},invoices:[],invoiceSummary:{},invoiceSummaryNoBillMonth:{},offset:12,pagination:{},per_page:100,imageUrl:""}},computed:{allMonths(){return[{status_la:"ລໍຖ້າອະນຸມັດ",total:this.invoiceSummary.created_total,count_billing:null,bg_color:"#73b8fd"},{status_la:"ອະນຸມັດແລ້ວ",total:this.invoiceSummary.approved_total,count_billing:null,bg_color:"#0080fc"},{status_la:"ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ",total:this.invoiceSummary.to_confirm_payment_total,count_billing:null,bg_color:"#9c540d"},{status_la:"ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ",total:this.invoiceSummary.success_total,count_billing:null,bg_color:"#02a38a"}]},allMonthsNoBillMonth(){return[{status_la:"ລໍຖ້າອະນຸມັດ",total:this.invoiceSummaryNoBillMonth.created_total,count_billing:null,bg_color:"#73b8fd"},{status_la:"ອະນຸມັດແລ້ວ",total:this.invoiceSummaryNoBillMonth.approved_total,count_billing:null,bg_color:"#0080fc"},{status_la:"ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ",total:this.invoiceSummaryNoBillMonth.to_confirm_payment_total,count_billing:null,bg_color:"#9c540d"},{status_la:"ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ",total:this.invoiceSummaryNoBillMonth.success_total,count_billing:null,bg_color:"#02a38a"}]},allCollectionNoMonth(){return[{status_la:"ເກັບແລ້ວ",total:0,unit_count:"ຄັ້ງ",count_billing:this.statusSummaryNoMonth.pending_count,bg_color:"#02a38a"},{status_la:"ລໍຖ້າເກັບ",total:0,unit_count:"ຄັ້ງ",count_billing:this.statusSummaryNoMonth.success_count,bg_color:"#0080fc"}]},allCollection(){return[{status_la:"ເກັບແລ້ວ",total:0,unit_count:"ຄັ້ງ",count_billing:this.statusSummary.pending_count,bg_color:"#02a38a"},{status_la:"ລໍຖ້າເກັບ",total:0,unit_count:"ຄັ້ງ",count_billing:this.statusSummary.success_count,bg_color:"#0080fc"}]}},watch:{tab(){"tab-1"===this.tab?this.fetchData():"tab-2"===this.tab?this.customerCollection():"tab-3"===this.tab&&this.customerInvoice()},month(){this.customerInvoice()},month_collection(){this.customerCollection()}},async created(){this.customerInvoice(!0),this.customerCollection(!0),this.fetchData().then(()=>{"tab-2"==this.tab?this.customerCollection():"tab-3"==this.tab&&this.customerInvoice()}),this.$route.query.tab&&(this.tab=this.$route.query.tab)},methods:{statusColor(t){return"active"==t?"primary":"inactive"==t?"error":"info"},getBgColorFn(t){return Object(I["a"])(t)},openRoute(t,e){const a={};"TrashDetail"==e?(a.plan_calendar=t.plan_calendar_id,a.id=t.id):(a.id=t.plan_calendar_id,a.planMonthId=t.plan_calendar.plan_month_id);const i=this.$router.resolve({name:e,params:a});window.open(i.href)},ViewInvoice(t){const e=this.$router.resolve({name:"billing-detail",params:{id:t}});window.open(e.href,"_blank")},showImage(t){null!=t&&(this.imageUrl=t,this.$store.commit("modalView_State",!0))},fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("customer/"+this.$route.params.id).then(t=>{200===t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.data=t.data.data},300)}).catch(t=>{if(this.$store.commit("Loading_State",!1),t.response&&422===t.response.status){const e=t.response.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}})},customerCollection(t=!1){this.$role("kbt")||(this.$store.commit("Loading_State",!0),this.$axios.get("customer-collection-summary/"+this.$route.params.id,{params:{page:this.pagination.current_page,per_page:this.per_page,bill_month:t?"":this.month_collection}}).then(e=>{200===e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.services=e.data.data.all.data,this.serviceSummary=e.data.data.collect_summary,t?this.statusSummaryNoMonth=e.data.data.status_summary:this.statusSummary=e.data.data.status_summary,this.pagination=e.data.data.details.pagination},300)}).catch(t=>{if(this.$store.commit("Loading_State",!1),this.fetchData(),t.response&&422===t.response.status){const e=t.response.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}}))},customerInvoice(t=!1){this.$role("kbt")||(this.$store.commit("Loading_State",!0),this.$axios.get("customer-invoice-summary/"+this.$route.params.id,{params:{page:this.pagination.current_page,per_page:this.per_page,bill_month:t?"":this.month}}).then(e=>{200===e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.invoices=e.data.data.details.data,t?this.invoiceSummaryNoBillMonth=e.data.data.invoice_summary:this.invoiceSummary=e.data.data.invoice_summary,this.pagination=e.data.data.details.pagination},300)}).catch(t=>{if(this.$store.commit("Loading_State",!1),this.fetchData(),t.response&&422===t.response.status){const e=t.response.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}}))},backPrevios(){this.$router.go(-1)},getCenter(){if(this.data.lat){const t={lat:parseFloat(this.data.lat),lng:parseFloat(this.data.lng)};return t}return this.latlng},getMarkers(t){return{lat:parseFloat(t.lat),lng:parseFloat(t.lng)}},editPage(t){this.$router.push({name:"EditCustomer",params:{id:t}})}}},L=j,M=(a("4f60"),a("4a4e")),E=Object(M["a"])(L,B,D,!1,null,null,null);e["default"]=E.exports},"7bf7":function(t,e,a){},a729:function(t,e,a){"use strict";a("689e");var i=a("dd08"),s=a("710c"),o=a("9c0c");e["a"]=Object(o["a"])(s["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(i["h"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},c332:function(t,e,a){},ca79:function(t,e,a){"use strict";var i=a("db5a"),s=a("0f35"),o=a("28e8"),n=a("1d7d"),r=a("e9ef"),l=function(){var t=this,e=t._self._c;return e(i["a"],{attrs:{outlined:"","min-width":"200px"},on:{click:function(e){return t.openNewTab(t.route)}}},[t.title?t._e():e(r["a"],{staticClass:"mx-auto",attrs:{"max-width":"300",type:"card"}}),e(s["c"],{staticClass:"d-flex justify-between w-full text-wrap",staticStyle:{position:"relative"}},[t.icon?e(o["a"],{staticClass:"text-caption text-wrap",attrs:{color:t.icon_color,dark:""}},[e(n["a"],{attrs:{"x-small":!0}},[t._v(" "+t._s(t.icon)+" ")]),e("div",{staticClass:"ml-1 text-caption",attrs:{color:t.icon_color}},[e("p",{staticClass:"ma-0"},[t._v(" "+t._s(t.title)+" ")])])],1):e(o["a"],{staticClass:"text-caption text-wrap",attrs:{color:t.bg_color,dark:t.isContrastingWithWhite(t.bg_color)}},[e("p",{staticClass:"ma-0"},[t._v(" "+t._s(t.title)+" ")])]),null!=t.billing_count&&""!=t.billing_count&&void 0!=t.billing_count?e(o["a"],{staticClass:"text-caption text-wrap",staticStyle:{position:"absolute",right:"10px"},attrs:{color:t.bg_color,outlined:""}},[e("p",{staticClass:"ma-0"},[t._v(" "+t._s(Intl.NumberFormat().format(t.billing_count))+" "+t._s(t.unit_count?t.unit_count:"ບິນ")+" ")])]):t._e()],1),t.total?e(s["b"],[e("p",{staticClass:"ma-0 text-h4 font-weight-bold"},[t._v(" "+t._s(Intl.NumberFormat().format(t.total))+" "+t._s(t.unit_total?t.unit_total:"k")+" ")])]):t._e()],1)},c=[],d={props:["title","billing_count","total","bg_color","route","icon","icon_color","unit_count","unit_total","loading"],data(){return{}},created(){},beforeUpdate(){this.$store.commit("Loading_State",!0)},updated(){this.$store.commit("Loading_State",!1)},methods:{getColor(t){return"background-color: "+t},openNewTab(t){t&&window.open(t.href,"_blank")},isContrastingWithWhite(t){if(t){const e=t=>{const[e,a,i]=t.match(/\w\w/g).map(t=>parseInt(t,16)/255),s=t=>t<=.03928?t/12.92:((t+.055)/1.055)**2.4;return.2126*s(e)+.7152*s(a)+.0722*s(i)},a=Math.abs(e(t)-e("#ffffff"));return a>=.5}}}},u=d,h=a("4a4e"),m=Object(h["a"])(u,l,c,!1,null,null,null);e["a"]=m.exports},e9ef:function(t,e,a){"use strict";a("558b"),a("ff56");var i=a("18e5"),s=a("c6cf"),o=a("710c"),n=a("9c0c"),r=a("dd08");e["a"]=Object(n["a"])(i["a"],s["a"],o["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},tile:Boolean,transition:String,type:String,types:{type:Object,default:()=>({})}},computed:{attrs(){return this.isLoading?{"aria-busy":!this.boilerplate||void 0,"aria-live":this.boilerplate?void 0:"polite","aria-label":this.boilerplate?void 0:this.$vuetify.lang.t(this.loadingText),role:this.boilerplate?void 0:"alert",...this.$attrs}:this.$attrs},classes(){return{"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile,...this.themeClasses,...this.elevationClasses}},isLoading(){return!("default"in this.$scopedSlots)||this.loading},rootTypes(){return{actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text",...this.types}}},methods:{genBone(t,e){return this.$createElement("div",{staticClass:`v-skeleton-loader__${t} v-skeleton-loader__bone`},e)},genBones(t){const[e,a]=t.split("@"),i=()=>this.genStructure(e);return Array.from({length:a}).map(i)},genStructure(t){let e=[];t=t||this.type||"";const a=this.rootTypes[t]||"";if(t===a);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);a.indexOf(",")>-1?e=this.mapBones(a):a.indexOf("@")>-1?e=this.genBones(a):a&&e.push(this.genStructure(a))}return[this.genBone(t,e)]},genSkeleton(){const t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(r["s"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave(t){t.style.setProperty("display","none","important")},resetStyles(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},fd65:function(t,e,a){},ff56:function(t,e,a){}}]);
//# sourceMappingURL=chunk-344a61dc.af7f5510.js.map