(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ee1ac5d6"],{"13b3":function(t,e,i){},"1e6c":function(t,e,i){"use strict";var n=i("9d65"),s=i("4e82"),a=i("c3f0"),r=i("80d2"),o=i("58df"),l=Object(o["a"])(n["a"],Object(s["a"])("windowGroup","v-window-item","v-window"));e["a"]=l.extend().extend().extend({name:"v-window-item",directives:{Touch:a["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(r["g"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(r["g"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},"347c":function(t,e,i){t.exports=i.p+"img/pin1.d74f27bd.svg"},"3a8b":function(t,e,i){},"3e35":function(t,e,i){"use strict";var n=i("5530"),s=i("1e6c"),a=i("adda"),r=i("58df"),o=i("80d2"),l=i("1c87"),c=Object(r["a"])(s["a"],l["a"]);e["a"]=c.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(a["a"],{staticClass:"v-carousel__item",props:Object(n["a"])(Object(n["a"])({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(o["s"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,i=t.data;return i.staticClass="v-window-item",i.directives.push({name:"show",value:this.isActive}),this.$createElement(e,i,this.genDefaultSlot())}}})},"4bd4":function(t,e,i){"use strict";var n=i("5530"),s=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("159b"),i("7db0"),i("58df")),a=i("7e2b"),r=i("3206");e["a"]=Object(s["a"])(a["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"4fad":function(t,e,i){var n=i("23e7"),s=i("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return s(t)}})},"5e66":function(t,e,i){"use strict";var n=i("5530"),s=(i("a9e3"),i("63b7"),i("f665")),a=i("afdd"),r=i("9d26"),o=i("37c6"),l=i("604c"),c=l["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return l["a"].options.computed.classes.call(this)}},methods:{genData:l["a"].options.methods.genData}}),u=i("80d2"),d=i("d9bd");e["a"]=s["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(d["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:s["a"].options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,i=[],n=0;n<e;n++){var s=this.$createElement(a["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",n+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[n],n)}},[this.$createElement(r["a"],{props:{size:18}},this.delimiterIcon)]);i.push(s)}return this.$createElement(c,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},i)},genProgress:function(){return this.$createElement(o["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=s["a"].options.render.call(this,t);return e.data.style="height: ".concat(Object(u["g"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},"602f":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-breadcrumbs",{staticClass:"pt-0",attrs:{large:""}},[i("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[i("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" ລາຍລະອຽດເກັບຂີ້ເຫື້ຍອພິເສດ")],1),i("v-card",[t.data.media&&t.data.media.length?i("v-carousel",t._l(t.data.media,(function(e,n){return i("v-carousel-item",{key:n,attrs:{src:e.url,"reverse-transition":"fade-transition",transition:"fade-transition"},on:{click:function(i){return t.showImage(e.url)}}})})),1):t._e(),i("v-card-text",[i("v-container",[i("v-row",[i("v-list-item",[i("v-list-item-icon",[i("v-icon",{attrs:{color:"indigo"}},[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-subtitle",[t._v("ຊື່")]),i("v-list-item-title",[t._v(t._s(t.data.name)+" "+t._s(t.data.surname))])],1),i("v-spacer"),i("v-list-item-icon",[i("v-icon",{staticClass:"mr-6",attrs:{color:"indigo"}},[t._v(" mdi-phone ")])],1),i("v-list-item-content",[i("v-list-item-subtitle",[t._v("ເບີໂທ")]),i("v-list-item-title",[t._v(" "+t._s(t.data.phone))])],1),i("v-spacer"),i("v-list-item-icon",[i("v-icon",{staticClass:"mr-6",attrs:{color:"indigo"}},[t._v("mdi-calendar")])],1),i("v-list-item-content",[i("v-list-item-subtitle",[t._v("ວັນທີ")]),i("v-list-item-title",[t._v(" "+t._s(t.data.date))])],1)],1),i("v-divider",{attrs:{inset:""}})],1),i("v-row",[i("v-list-item",[i("v-list-item-icon",[i("v-icon",{attrs:{color:"indigo"}},[t._v(" mdi-calendar ")])],1),i("v-list-item-content",[i("v-list-item-subtitle",[t._v("ສະຖານະ")]),i("v-list-item-subtitle",[i("span",["active"==t.data.collect_status?i("v-chip",{staticClass:"success",attrs:{label:""}},[t._v(t._s(t.data.collect_status))]):"inactive"==t.data.collect_status?i("v-chip",{staticClass:"error",attrs:{label:""}},[t._v(t._s(t.data.collect_status))]):i("v-chip",{staticClass:"primary",attrs:{label:""}},[t._v(t._s(t.data.collect_status))])],1)])],1),i("v-spacer"),i("v-list-item-icon",[i("v-icon",{staticClass:"mr-6",attrs:{color:"indigo"}},[t._v("mdi-package")])],1),i("v-list-item-content",[i("v-list-item-subtitle",[t._v("ຄ່າບໍລິການ")]),i("v-list-item-title",[t._v("ລວມ: "+t._s(Intl.NumberFormat().format(t.data.total)))]),i("v-list-item-subtitle",[t._v("ສ່ວນຫຼຸດ: "+t._s(Intl.NumberFormat().format(t.data.discount)))])],1)],1),i("v-divider",{attrs:{inset:""}}),i("v-list-item",[i("v-list-item-icon",[i("v-icon",{attrs:{color:"indigo"}},[t._v("mdi-home")])],1),i("v-list-item-content",[i("v-list-item-subtitle",[t._v("ສະຖານທີ່")]),t.data.village?i("v-list-item-title",[t._v(t._s(t.data.village.name))]):t._e(),i("v-list-item-subtitle",[t._v(t._s(t.data.description))])],1)],1)],1),i("v-row",[i("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[i("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:t.getCenter().lat>0||t.getCenter().lat<0?t.getCenter():{lat:0,lng:0},zoom:16,disableDefaultUI:!0}},[i("GmapMarker",{ref:"markers",attrs:{position:t.getMarkers(t.data),draggable:!1,icon:t.markerOptions,animation:2},on:{click:function(e){t.latlng=t.data}}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.editPage(t.data.id)}}},[t._v(" Update ")])],1)],1)],1),i("ModalEdit",[[i("v-card",[i("v-card-title",[i("p",[t._v("ແກ້ໄຂຜູ້ປະສານງານ")])]),i("v-card-text",[i("v-container",[i("v-form",{ref:"form",attrs:{"lazy-validation":""}},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"Name *",required:""},model:{value:t.item.name,callback:function(e){t.$set(t.item,"name",e)},expression:"item.name"}}),i("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"Surname *",required:""},model:{value:t.item.surname,callback:function(e){t.$set(t.item,"surname",e)},expression:"item.surname"}}),i("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.surname)+" ")])],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{staticClass:"input-number",attrs:{label:"ເບີໂທ *",required:"",type:"number"},model:{value:t.item.phone,callback:function(e){t.$set(t.item,"phone",e)},expression:"item.phone"}}),i("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.phone)+" ")])],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeEditModal()}}},[t._v(" Close ")]),i("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.UpdateItem()}}},[t._v(" Update ")])],1)],1)],1)]],2),i("ModalDelete",[[i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:t.deleteItemConfirm}},[t._v("OK")]),i("v-spacer")],1)]],2),i("ModalView",[[i("v-card",[i("v-img",{attrs:{src:t.imageUrl,alt:"Image",width:"auto",height:"auto",dark:""}})],1)]],2)],1)},s=[],a=i("3835"),r=(i("4fad"),i("b0c0"),{data:function(){return{data:{},loading:!1,server_errors:{},village_details:[],errormsg:"",preview_list:[],image_list:[],image:[],latlng:{lat:0,lng:0},markers:[],currentPlace:null,markerOptions:{url:i("347c"),size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}},item:{},imageUrl:""}},methods:{showImage:function(t){null!=t&&(this.imageUrl=t,this.$store.commit("modalView_State",!0))},fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("collection-event/"+this.$route.params.id).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.data=e.data.data,console.log(t.data)}),300)})).catch((function(e){if(t.$store.commit("Loading_State",!1),e.response&&422==e.response.status)for(var i=e.response.data.errors,n=0,s=Object.entries(i);n<s.length;n++){var r=Object(a["a"])(s[n],2),o=r[0],l=r[1];t.server_errors[o]=l[0]}}))},closeDelete:function(){this.$store.commit("modalDelete_State",!1)},deleteItem:function(t){this.item=t,console.log(this.item),this.$store.commit("modalDelete_State",!0)},deleteItemConfirm:function(){var t=this;this.loading=!0,this.$axios.delete("coordinator/"+this.item.id).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.$store.commit("modalDelete_State",!1),t.fetchData(),t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})}),300)})).catch((function(e){t.fetchData(),t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),t.$store.commit("modalDelete_State",!1),t.loading=!1}))},editItem:function(t){this.item=t,this.$store.commit("modalEdit_State",!0)},closeEditModal:function(){this.$store.commit("modalEdit_State",!1)},UpdateItem:function(){var t=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.put("coordinator/"+this.item.id,{name:this.item.name,surname:this.item.surname,phone:this.item.phone}).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.closeEditModal(),t.item={},t.fetchData(),t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})}),300)})).catch((function(e){if(t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),t.fetchData(),e.response&&422==e.response.status)for(var i=e.response.data.errors,n=0,s=Object.entries(i);n<s.length;n++){var r=Object(a["a"])(s[n],2),o=r[0],l=r[1];t.server_errors[o]=l[0]}})))},backPrevios:function(){this.$router.go(-1)},getCenter:function(){if(this.data.lat){var t={lat:parseFloat(this.data.lat),lng:parseFloat(this.data.lng)};return t}return this.latlng},getMarkers:function(t){return{lat:parseFloat(t.lat),lng:parseFloat(t.lng)}},editPage:function(t){this.$router.push({name:"EditCollectionEvent",params:{id:t}})}},watch:{selectedVillage:function(){this.fetchVillageDetail()}},created:function(){this.fetchData()}}),o=r,l=(i("ba19"),i("2877")),c=i("6544"),u=i.n(c),d=i("2bc5"),h=i("8336"),v=i("b0af"),m=i("99d9"),f=i("5e66"),p=i("3e35"),g=i("cc20"),b=i("62ad"),w=i("a523"),_=i("ce7e"),C=i("4bd4"),$=i("132d"),x=i("adda"),I=i("da13"),y=i("5d23"),T=i("34c3"),B=i("0fd9"),k=i("2fa4"),V=i("8654"),S=Object(l["a"])(o,n,s,!1,null,null,null);e["default"]=S.exports;u()(S,{VBreadcrumbs:d["a"],VBtn:h["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCarousel:f["a"],VCarouselItem:p["a"],VChip:g["a"],VCol:b["a"],VContainer:w["a"],VDivider:_["a"],VForm:C["a"],VIcon:$["a"],VImg:x["a"],VListItem:I["a"],VListItemContent:y["b"],VListItemIcon:T["a"],VListItemSubtitle:y["c"],VListItemTitle:y["d"],VRow:B["a"],VSpacer:k["a"],VTextField:V["a"]})},"63b7":function(t,e,i){},"8adc":function(t,e,i){},afdd:function(t,e,i){"use strict";var n=i("8336");e["a"]=n["a"]},ba19:function(t,e,i){"use strict";i("3a8b")},cc20:function(t,e,i){"use strict";var n=i("3835"),s=i("5530"),a=(i("4de4"),i("8adc"),i("58df")),r=i("0789"),o=i("9d26"),l=i("a9ad"),c=i("4e82"),u=i("7560"),d=i("f2e7"),h=i("1c87"),v=i("af2b"),m=i("d9bd");e["a"]=Object(a["a"])(l["a"],v["a"],h["a"],u["a"],Object(c["a"])("chipGroup"),Object(d["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({"v-chip":!0},h["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=Object(n["a"])(e,2),s=i[0],a=i[1];t.$attrs.hasOwnProperty(s)&&Object(m["a"])(s,a,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(o["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(r["b"],t)},genClose:function(){var t=this;return this.$createElement(o["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),n=i.tag,a=i.data;a.attrs=Object(s["a"])(Object(s["a"])({},a.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:a.attrs.tabindex}),a.directives.push({name:"show",value:this.active}),a=this.setBackgroundColor(this.color,a);var r=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(r,a),e)}})},f665:function(t,e,i){"use strict";var n=i("5530"),s=(i("99af"),i("7db0"),i("c740"),i("13b3"),i("c3f0")),a=i("afdd"),r=i("9d26"),o=i("604c");e["a"]=o["a"].extend({name:"v-window",directives:{Touch:s["a"]},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(n["a"])(Object(n["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,i=e?"-reverse":"";return"v-window-".concat(t).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,i){var n,s,o,l=this,c={click:function(t){t.stopPropagation(),l.changedByDelimiters=!0,i()}},u={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},d=null!=(n=null==(s=(o=this.$scopedSlots)[t])?void 0:s.call(o,{on:c,attrs:u}))?n:[this.$createElement(a["a"],{props:{icon:!0},attrs:u,on:c},[this.$createElement(r["a"],{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},d)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"===typeof n){var s=this.genIcon("next",n,this.next);s&&t.push(s)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var i=this.items.length,n=i-1;return i<=2?t<e:t===n&&0===e||(0!==t||e!==n)&&t<e}},render:function(t){var e=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};i.directives.push({name:"touch",value:n})}return t("div",i,[this.genContainer()])}})}}]);
//# sourceMappingURL=chunk-ee1ac5d6.cfd04db9.js.map