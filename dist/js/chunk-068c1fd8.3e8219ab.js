(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-068c1fd8"],{"13b3":function(t,e,i){},"1e6c":function(t,e,i){"use strict";var n=i("9d65"),a=i("4e82"),s=i("c3f0"),r=i("80d2"),o=i("58df"),l=Object(o["a"])(n["a"],Object(a["a"])("windowGroup","v-window-item","v-window"));e["a"]=l.extend().extend().extend({name:"v-window-item",directives:{Touch:s["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(r["g"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(r["g"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},"1f4f":function(t,e,i){"use strict";var n=i("5530"),a=(i("a9e3"),i("8b37"),i("80d2")),s=i("7560"),r=i("58df");e["a"]=Object(r["a"])(s["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(n["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(a["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"2fcd":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-breadcrumbs",{staticClass:"pt-0",attrs:{large:""}},[i("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[i("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" ລາຍລະອຽດເກັບຂີ້ເຫື້ຍອພິເສດ")],1),i("v-card",[i("v-row",[t.data.image_collect_locations&&t.data.image_collect_locations.length?i("v-col",[t.data.image_collect_locations&&t.data.image_collect_locations.length?i("v-carousel",t._l(t.data.image_collect_locations,(function(e,n){return i("v-carousel-item",{key:n,attrs:{src:e.url,"reverse-transition":"fade-transition",transition:"fade-transition"},on:{click:function(i){return t.showImage(e.url)}}})})),1):t._e(),i("p",{staticClass:"text-center pt-4"},[t._v("ຮູບສະຖານທີ່")])],1):t._e(),t.data.image_collecteds&&t.data.image_collecteds.length?i("v-col",[t.data.image_collecteds&&t.data.image_collecteds.length?i("v-carousel",t._l(t.data.image_collecteds,(function(e,n){return i("v-carousel-item",{key:n,attrs:{src:e.url,"reverse-transition":"fade-transition",transition:"fade-transition"},on:{click:function(i){return t.showImage(e.url)}}})})),1):t._e(),i("p",{staticClass:"text-center pt-4"},[t._v("ຮູບຂີ້ເຫື້ຍອ")])],1):t._e()],1),i("v-card-text",[i("v-container",[i("v-simple-table",[i("tbody",{staticClass:"tb-result"},[i("tr",[i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v("ບິນ:")]),t.data.billing?i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v(" "+t._s(t.data.billing.content)+" ")]):t._e()]),i("tr",[i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v("ລວມເງິນ:")]),t.data.billing?i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v(" "+t._s(Intl.NumberFormat().format(t.data.billing.sub_total))+" ")]):t._e()]),i("tr",[i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v("ສ່ວນຫຼຸດ:")]),t.data.billing?i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v(" "+t._s(Intl.NumberFormat().format(t.data.billing.discount))+" ")]):t._e()]),i("tr",{staticStyle:{"font-size":"20px"}},[i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v("ລວມທັງໝົດ:")]),t.data.billing?i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v(" "+t._s(Intl.NumberFormat().format(t.data.billing.total))+" ")]):t._e()])]),i("br")]),i("h3",[t._v("ຂໍ້ມູນລູກຄ້າ")]),i("br"),i("v-simple-table",[i("tbody",{staticClass:"tb-result"},[i("tr",[i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v("ລຸກຄ້າ:")]),i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v(" "+t._s(t.data.name)+" "+t._s(t.data.surname)+" ")])]),i("tr",[i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v("ເບີໂທ:")]),t.data.billing?i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v(" "+t._s(t.data.phone)+" ")]):t._e()]),i("tr",{staticStyle:{"font-size":"20px"}},[i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v("ວັນທີລົງເກັບ:")]),i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v(" "+t._s(t.data.date)+" ")])]),i("tr",{staticStyle:{"font-size":"20px"}},[i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v("ສະຖານທີ່:")]),t.data.village?i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v(" "+t._s(t.data.village.name)+" ")]):t._e()]),i("tr",{staticStyle:{"font-size":"20px"}},[i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v("ສະຖານະການເກັບ:")]),t.data.village?i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v(" "+t._s(t.data.collect_status)+" ")]):t._e()]),i("tr",{staticStyle:{"font-size":"20px"}},[i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v("ລາຍລະອຽດ:")]),i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v(" "+t._s(t.data.description)+" ")])]),i("tr",{staticStyle:{"font-size":"20px"}},[i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v("ພະນັກງານຂັບລົດ:")]),t.data.driver?i("td",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{colspan:4}},[t._v(" "+t._s(t.data.driver.name)+" "+t._s(t.data.driver.surname)+" ")]):t._e()])]),i("br")]),i("v-row",[i("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[i("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:t.getCenter(),zoom:16,disableDefaultUI:!0}},[i("GmapMarker",{ref:"markers",attrs:{position:t.getMarkers(t.data),draggable:!1,icon:t.markerOptions,animation:2},on:{click:function(e){t.latlng=t.data}}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.editPage(t.data.id)}}},[t._v(" Update ")])],1)],1)],1),i("ModalEdit",[[i("v-card",[i("v-card-title",[i("p",[t._v("ແກ້ໄຂຜູ້ປະສານງານ")])]),i("v-card-text",[i("v-container",[i("v-form",{ref:"form",attrs:{"lazy-validation":""}},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"Name *",required:""},model:{value:t.item.name,callback:function(e){t.$set(t.item,"name",e)},expression:"item.name"}}),i("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"Surname *",required:""},model:{value:t.item.surname,callback:function(e){t.$set(t.item,"surname",e)},expression:"item.surname"}}),i("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.surname)+" ")])],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{staticClass:"input-number",attrs:{label:"ເບີໂທ *",required:"",type:"number"},model:{value:t.item.phone,callback:function(e){t.$set(t.item,"phone",e)},expression:"item.phone"}}),i("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.phone)+" ")])],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeEditModal()}}},[t._v(" Close ")]),i("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.UpdateItem()}}},[t._v(" Update ")])],1)],1)],1)]],2),i("ModalDelete",[[i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:t.deleteItemConfirm}},[t._v("OK")]),i("v-spacer")],1)]],2),i("ModalView",[[i("v-card",[i("v-img",{attrs:{src:t.imageUrl,alt:"Image",width:"auto",height:"auto",dark:""}})],1)]],2)],1)},a=[],s=i("3835"),r=(i("4fad"),i("b0c0"),{data:function(){return{data:{},loading:!1,server_errors:{},village_details:[],errormsg:"",preview_list:[],image_list:[],image:[],latlng:{lat:0,lng:0},markers:[],currentPlace:null,markerOptions:{url:i("347c"),size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}},item:{},imageUrl:""}},methods:{showImage:function(t){null!=t&&(this.imageUrl=t,this.$store.commit("modalView_State",!0))},fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("v2/collection-event/"+this.$route.params.id).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.data=e.data.data,console.log(t.data)}),300)})).catch((function(e){if(t.$store.commit("Loading_State",!1),422==e.response.status)for(var i=e.response.data.errors,n=0,a=Object.entries(i);n<a.length;n++){var r=Object(s["a"])(a[n],2),o=r[0],l=r[1];t.server_errors[o]=l[0]}}))},closeDelete:function(){this.$store.commit("modalDelete_State",!1)},deleteItem:function(t){this.item=t,console.log(this.item),this.$store.commit("modalDelete_State",!0)},deleteItemConfirm:function(){var t=this;this.loading=!0,this.$axios.delete("coordinator/"+this.item.id).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.$store.commit("modalDelete_State",!1),t.fetchData(),t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})}),300)})).catch((function(e){t.fetchData(),t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message}),t.$store.commit("modalDelete_State",!1),t.loading=!1}))},editItem:function(t){this.item=t,this.$store.commit("modalEdit_State",!0)},closeEditModal:function(){this.$store.commit("modalEdit_State",!1)},UpdateItem:function(){var t=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.put("coordinator/"+this.item.id,{name:this.item.name,surname:this.item.surname,phone:this.item.phone}).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.closeEditModal(),t.item={},t.fetchData(),t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})}),300)})).catch((function(e){if(t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message}),t.fetchData(),422==e.response.status)for(var i=e.response.data.errors,n=0,a=Object.entries(i);n<a.length;n++){var r=Object(s["a"])(a[n],2),o=r[0],l=r[1];t.server_errors[o]=l[0]}})))},backPrevios:function(){this.$router.go(-1)},getCenter:function(){if(this.data.lat){var t={lat:parseFloat(this.data.lat),lng:parseFloat(this.data.lng)};return t}return this.latlng},getMarkers:function(t){return{lat:parseFloat(t.lat),lng:parseFloat(t.lng)}},editPage:function(t){this.$router.push({name:"EditCollectionEventInvoice",params:{id:t}})}},watch:{selectedVillage:function(){this.fetchVillageDetail()}},created:function(){this.fetchData()}}),o=r,l=(i("4bea"),i("2877")),c=i("6544"),d=i.n(c),u=i("2bc5"),h=i("8336"),f=i("b0af"),m=i("99d9"),v=i("5e66"),p=i("3e35"),g=i("62ad"),w=i("a523"),_=i("4bd4"),b=i("132d"),x=i("adda"),y=i("0fd9"),$=i("1f4f"),S=i("2fa4"),C=i("8654"),T=Object(l["a"])(o,n,a,!1,null,null,null);e["default"]=T.exports;d()(T,{VBreadcrumbs:u["a"],VBtn:h["a"],VCard:f["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCarousel:v["a"],VCarouselItem:p["a"],VCol:g["a"],VContainer:w["a"],VForm:_["a"],VIcon:b["a"],VImg:x["a"],VRow:y["a"],VSimpleTable:$["a"],VSpacer:S["a"],VTextField:C["a"]})},"347c":function(t,e,i){t.exports=i.p+"img/pin1.d74f27bd.svg"},"3e35":function(t,e,i){"use strict";var n=i("5530"),a=i("1e6c"),s=i("adda"),r=i("58df"),o=i("80d2"),l=i("1c87"),c=Object(r["a"])(a["a"],l["a"]);e["a"]=c.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(s["a"],{staticClass:"v-carousel__item",props:Object(n["a"])(Object(n["a"])({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(o["s"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,i=t.data;return i.staticClass="v-window-item",i.directives.push({name:"show",value:this.isActive}),this.$createElement(e,i,this.genDefaultSlot())}}})},"4bd4":function(t,e,i){"use strict";var n=i("5530"),a=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("159b"),i("7db0"),i("58df")),s=i("7e2b"),r=i("3206");e["a"]=Object(a["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"4bea":function(t,e,i){"use strict";i("a92d")},"4fad":function(t,e,i){var n=i("23e7"),a=i("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return a(t)}})},"5e66":function(t,e,i){"use strict";var n=i("5530"),a=(i("a9e3"),i("63b7"),i("f665")),s=i("afdd"),r=i("9d26"),o=i("37c6"),l=i("604c"),c=l["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return l["a"].options.computed.classes.call(this)}},methods:{genData:l["a"].options.methods.genData}}),d=i("80d2"),u=i("d9bd");e["a"]=a["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(u["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:a["a"].options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,i=[],n=0;n<e;n++){var a=this.$createElement(s["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",n+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[n],n)}},[this.$createElement(r["a"],{props:{size:18}},this.delimiterIcon)]);i.push(a)}return this.$createElement(c,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},i)},genProgress:function(){return this.$createElement(o["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=a["a"].options.render.call(this,t);return e.data.style="height: ".concat(Object(d["g"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},"63b7":function(t,e,i){},"8b37":function(t,e,i){},a92d:function(t,e,i){},afdd:function(t,e,i){"use strict";var n=i("8336");e["a"]=n["a"]},f665:function(t,e,i){"use strict";var n=i("5530"),a=(i("99af"),i("7db0"),i("c740"),i("13b3"),i("c3f0")),s=i("afdd"),r=i("9d26"),o=i("604c");e["a"]=o["a"].extend({name:"v-window",directives:{Touch:a["a"]},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(n["a"])(Object(n["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,i=e?"-reverse":"";return"v-window-".concat(t).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,i){var n,a,o,l=this,c={click:function(t){t.stopPropagation(),l.changedByDelimiters=!0,i()}},d={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},u=null!=(n=null==(a=(o=this.$scopedSlots)[t])?void 0:a.call(o,{on:c,attrs:d}))?n:[this.$createElement(s["a"],{props:{icon:!0},attrs:d,on:c},[this.$createElement(r["a"],{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},u)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"===typeof n){var a=this.genIcon("next",n,this.next);a&&t.push(a)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var i=this.items.length,n=i-1;return i<=2?t<e:t===n&&0===e||(0!==t||e!==n)&&t<e}},render:function(t){var e=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};i.directives.push({name:"touch",value:n})}return t("div",i,[this.genContainer()])}})}}]);
//# sourceMappingURL=chunk-068c1fd8.3e8219ab.js.map