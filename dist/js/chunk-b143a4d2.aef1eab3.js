(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b143a4d2"],{"00c4":function(t,e,i){},"0c00":function(t,e,i){"use strict";i.r(e);var s=i("8447"),a=i("07b0"),n=i("db5a"),r=i("0f35"),o=i("1d97"),l=i("68f8"),c=i("28e8"),h=i("1da9"),d=i("1789"),u=i("ab58"),p=i("6733"),m=i("1d7d"),v=i("cf5d"),g=i("bf41"),f=i("f836"),_=i("d62f"),w=i("cfe2"),b=function(){var t=this,e=t._self._c;return e(d["a"],[e(s["a"],{staticClass:"pt-0",attrs:{large:""}},[e(a["a"],{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[e(m["a"],[t._v("mdi-chevron-left")])],1),t._v("ລາຍລະອຽດການເກັບຂີ້ເຫື້ຍອຂອງລູກຄ້າ ")],1),e(n["a"],[t.detail.media?e(o["a"],t._l(t.detail.media,(function(i,s){return e(l["a"],{key:s,attrs:{height:"auto",src:i.url,"reverse-transition":"fade-transition",transition:"fade-transition"},on:{click:function(e){return t.viewImage(i.url)}}})})),1):t._e(),e(r["b"],[e(d["a"],[e(_["a"],[e(v["a"],[e(f["a"],[e(m["a"],{attrs:{color:"indigo"}},[t._v(" mdi-account-circle-outline ")])],1),t.detail.route_plan_detail?e(g["b"],[e(g["d"],[t._v(" "+t._s(t.detail.route_plan_detail.customer.full_name)+" ")]),e(g["c"],[e(m["a"],{attrs:{"x-small":""}},[t._v(" mdi-account ")]),t._v(" "+t._s(t.detail.route_plan_detail.customer.customer_id)+" ")],1),e(g["c"],[e(m["a"],{attrs:{"x-small":""}},[t._v(" mdi-phone ")]),t._v(" "+t._s(t.detail.route_plan_detail.customer.user.phone)+" ")],1)],1):t._e(),e(w["a"]),e(f["a"],[e(m["a"],{staticClass:"mr-6",attrs:{color:"indigo"}},[t._v(" mdi-trash-can-outline ")])],1),e(g["b"],["bag"==t.detail.collection_type||"chartered"==t.detail.collection_type||"32km"==t.detail.collection_type||"infect"==t.detail.collection_type?e(g["d"],[t._v(" "+t._s(t.detail.bag)+" ຖົງ ")]):"container"==t.detail.collection_type?e(g["d"],[t._v(" "+t._s(t.detail.container)+" Container ")]):"fix_cost"==t.detail.collection_type?e(g["d"],[t._v(" ມອບເໝົາ ")]):t._e(),e(g["c"],[t._v(t._s(`${t.detail.plan_calendar.driver.name} ${t.detail.plan_calendar.driver.surname} (${t.detail.plan_calendar.driver.vehicle.car_id})`))])],1)],1),e(p["a"],{attrs:{inset:""}})],1),e(_["a"],[e(v["a"],[e(f["a"],[e(m["a"],{attrs:{color:"indigo"}},[t._v(" mdi-calendar-range ")])],1),e(g["b"],[t.detail.route_plan_detail?e(g["d"],[t._v(" "+t._s(t.detail.route_plan_detail.priority)+" ")]):t._e(),e(g["c"],[t._v("ລຳດັບເກັບຂີ້ເຫື້ຍອ")])],1),e(w["a"]),e(f["a"],[e(m["a"],{staticClass:"mr-6",attrs:{color:"indigo"}},[t._v(" mdi-calendar ")])],1),e(g["b"],[t.detail.route_plan_detail?e(g["d"],[t._v(" "+t._s(t.detail.route_plan_detail.customer.start_month)+" ")]):t._e(),e(g["c"],[t._v("ສະໝັກແພັກເກດວັນທີ")])],1)],1),e(p["a"],{attrs:{inset:""}}),e(v["a"],[e(f["a"],[e(m["a"],{attrs:{color:"indigo"}},[t._v(" mdi-home-search ")])],1),e(g["b"],[e(g["d"],[t._v("ເຮືອນເລກທີ")]),e("div",[t.detail.route_plan_detail?e(g["c"],[t._v(" "+t._s(t.detail.route_plan_detail.customer.house_number)+" ")]):t._e()],1)],1),e(w["a"]),e(f["a"],[e(m["a"],{staticClass:"mr-6",attrs:{color:"indigo"}},[t._v(" mdi-home-search ")])],1),e(g["b"],[e(g["d"],[t._v("ສະຖານະ")]),e("div",[e(g["c"],[e(c["a"],{attrs:{label:"",color:"success"}},[t._v(" "+t._s(t.detail.status)+" ")])],1),e(g["c"],[t._v(" "+t._s(t.detail.collected_at)+" ")])],1)],1)],1)],1),e(_["a"],[e(h["a"],[e("p",[t._v(t._s(t.detail.description))])])],1),e(_["a"],[e(h["a"],{staticClass:"mb-4",attrs:{cols:"12"}},[e("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:t.getCenter().lat>0||t.getCenter().lat<0?t.getCenter():{lat:0,lng:0},zoom:16,"disable-default-u-i":!0}},[t.detail.route_plan_detail?e("GmapMarker",{ref:"markers",attrs:{position:t.getMarkers(t.detail.route_plan_detail.customer),draggable:!1,icon:t.markerOptions,animation:2},on:{click:function(e){t.latlng=t.data}}}):t._e()],1)],1)],1)],1),e(r["a"],[e(w["a"]),e(a["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.viewCustomer(t.detail.route_plan_detail.customer.id)}}},[t._v(" ລາຍລະອຽດລູກຄ້າ ")])],1)],1)],1),e(u["a"],{attrs:{"max-width":"1300px"},model:{value:t.fullImage,callback:function(e){t.fullImage=e},expression:"fullImage"}},[e("img",{attrs:{contain:"",src:t.url,width:"auto",height:"auto","max-height":"1200px",zoom:"100"},on:{click:function(e){e.stopPropagation(),t.fullImage=!1}}})])],1)},C=[],y=(i("558b"),{props:["items"],data(){return{fullImage:!1,url:"",detail:{},latlng:{lat:0,lng:0},markers:[],currentPlace:null,markerOptions:{url:i("347c"),size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}}}},watch:{selectedDistrict(){this.fetchVillage()},selectedVillage(){this.fetchVillageDetail()}},created(){this.fetchData()},methods:{fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get(`plan-calendar/${this.$route.params.plan_calendar}/detail/${this.$route.params.id}`).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.detail=t.data.data,console.log(this.detail)},100)}).catch(t=>{this.$store.commit("Loading_State",!1),t.response&&422==t.response.status&&(this.toast.msg=t.message)})},backPrevios(){this.$router.go(-1)},getCenter(){if(this.detail.route_plan_detail){const t={lat:parseFloat(this.detail.route_plan_detail.customer.lat),lng:parseFloat(this.detail.route_plan_detail.customer.lng)};return t}return this.latlng},getMarkers(t){return{lat:parseFloat(t.lat),lng:parseFloat(t.lng)}},viewCustomer(t){this.$router.push({name:"ViewClient",params:{id:t}})},viewImage(t){this.fullImage=!0,this.url=t}}}),x=y,$=(i("91b2"),i("4a4e")),T=Object($["a"])(x,b,C,!1,null,null,null);e["default"]=T.exports},1455:function(t,e,i){"use strict";var s=i("59f4"),a=i("c91b"),n=i("385b"),r=i("dd08"),o=i("9c0c");const l=Object(o["a"])(s["a"],Object(a["a"])("windowGroup","v-window-item","v-window"));e["a"]=l.extend().extend().extend({name:"v-window-item",directives:{Touch:n["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(r["h"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(r["h"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}})},1789:function(t,e,i){"use strict";i("e5d1"),i("9a62");var s=i("d797");function a(t){return s["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:i,data:s,children:a}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:n}=s;if(n){s.attrs={};const t=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(s.staticClass+=" "+t.join(" "))}return i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),e(i.tag,s,a)}})}var n=i("ed44");e["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:s}){let a;const{attrs:r}=i;return r&&(i.attrs={},a=Object.keys(r).filter(t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,Object(n["a"])(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(a||[])}),s)}})},1822:function(t,e,i){"use strict";var s=i("07b0");e["a"]=s["a"]},"1d97":function(t,e,i){"use strict";i("558b"),i("fd65");var s=i("b2e9"),a=i("1822"),n=i("2dec"),r=i("4d84"),o=i("b5e5"),l=o["a"].extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return o["a"].options.computed.classes.call(this)}},methods:{genData:o["a"].options.methods.genData}}),c=i("dd08"),h=i("4190");e["a"]=s["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:t=>t>0},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide(){return{parentTheme:this.theme}},data(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical}},isDark(){return this.dark||!this.light},isVertical(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height(t,e){t!==e&&t&&(this.internalHeight=t)},cycle(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created(){this.$attrs.hasOwnProperty("hide-controls")&&Object(h["a"])("hide-controls",':show-arrows="false"',this)},mounted(){this.startTimeout()},methods:{genControlIcons(){return this.isVertical?null:s["a"].options.methods.genControlIcons.call(this)},genDelimiters(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems(){const t=this.items.length,e=[];for(let i=0;i<t;i++){const s=this.$createElement(a["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,t)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)},key:i},[this.$createElement(n["a"],{props:{size:18}},this.delimiterIcon)]);e.push(s)}return this.$createElement(l,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:t=>{this.internalValue=t}}},e)},genProgress(){return this.$createElement(r["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render(t){const e=s["a"].options.render.call(this,t);return e.data.style=`height: ${Object(c["h"])(this.height)};`,this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},"28e8":function(t,e,i){"use strict";i("558b"),i("c332");var s=i("9c0c"),a=i("078d"),n=i("2dec"),r=i("d799"),o=i("c91b"),l=i("710c"),c=i("9a1f"),h=i("c4d0"),d=i("3562"),u=i("4190");e["a"]=Object(s["a"])(r["a"],d["a"],h["a"],l["a"],Object(o["a"])("chipGroup"),Object(c["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...h["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(u["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(n["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(a["b"],t)},genClose(){return this.$createElement(n["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:i,data:s}=this.generateRouteLink();s.attrs={...s.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex},s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);const a=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(a,s),e)}})},"347c":function(t,e,i){t.exports=i.p+"img/pin1.d74f27bd.svg"},"68f8":function(t,e,i){"use strict";i("558b");var s=i("1455"),a=i("0087"),n=i("9c0c"),r=i("dd08"),o=i("c4d0");const l=Object(n["a"])(s["a"],o["a"]);e["a"]=l.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot(){return[this.$createElement(a["a"],{staticClass:"v-carousel__item",props:{...this.$attrs,height:this.windowGroup.internalHeight},on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(r["s"])(this))]},genWindowItem(){const{tag:t,data:e}=this.generateRouteLink();return e.staticClass="v-window-item",e.directives.push({name:"show",value:this.isActive}),this.$createElement(t,e,this.genDefaultSlot())}}})},"91b2":function(t,e,i){"use strict";i("b123")},b123:function(t,e,i){},b2e9:function(t,e,i){"use strict";i("558b"),i("00c4");var s=i("385b"),a=i("1822"),n=i("2dec"),r=i("b5e5");e["a"]=r["a"].extend({name:"v-window",directives:{Touch:s["a"]},provide(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...r["a"].options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,i=e?"-reverse":"";return`v-window-${t}${i}-transition`},hasActiveItems(){return Boolean(this.items.find(t=>!t.disabled))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex((t,e)=>this.internalValue===this.getValue(t,e))},internalReverse(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex(t,e){this.isReverse=this.updateReverse(t,e)}},mounted(){window.requestAnimationFrame(()=>this.isBooted=!0)},methods:{genDefaultSlot(){return this.$slots.default},genContainer(){const t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,i){var s,r,o;const l={click:t=>{t.stopPropagation(),this.changedByDelimiters=!0,i()}},c={"aria-label":this.$vuetify.lang.t("$vuetify.carousel."+t)},h=null!==(o=null===(r=(s=this.$scopedSlots)[t])||void 0===r?void 0:r.call(s,{on:l,attrs:c}))&&void 0!==o?o:[this.$createElement(a["a"],{props:{icon:!0},attrs:c,on:l},[this.$createElement(n["a"],{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__"+t},h)},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){const i=this.genIcon("prev",e,this.prev);i&&t.push(i)}const i=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&i&&"string"===typeof i){const e=this.genIcon("next",i,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next(){if(!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){const i=this.items.length,s=i-1;return i<=2?t<e:t===s&&0===e||(0!==t||e!==s)&&t<e}},render(t){const e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};e.directives.push({name:"touch",value:t})}return t("div",e,[this.genContainer()])}})},c332:function(t,e,i){},fd65:function(t,e,i){}}]);
//# sourceMappingURL=chunk-b143a4d2.aef1eab3.js.map