(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fd68d60"],{"085b":function(t,e,i){},"0af3":function(t,e,i){"use strict";var a=i("1455");e["a"]=a["a"].extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=a["a"].options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})},1455:function(t,e,i){"use strict";var a=i("59f4"),n=i("c91b"),o=i("385b"),s=i("dd08"),r=i("9c0c");const c=Object(r["a"])(a["a"],Object(n["a"])("windowGroup","v-window-item","v-window"));e["a"]=c.extend().extend().extend({name:"v-window-item",directives:{Touch:o["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(s["h"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(s["h"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}})},"468b":function(t,e,i){"use strict";i("085b")},a7c3:function(t,e,i){"use strict";i("b0fd")},b0fd:function(t,e,i){},fc09:function(t,e,i){"use strict";i.r(e);var a=i("db5a"),n=i("0f35"),o=i("1789"),s=i("2f5e"),r=i("0af3"),c=i("a151"),d=i("e28e"),u=function(){var t=this,e=t._self._c;return e(o["a"],[e(a["a"],{attrs:{elevation:"1"}},[e(n["b"],[e(c["a"],{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(s["a"],{attrs:{href:"#tab-1"}},[t._v(" New ")]),e(s["a"],{attrs:{href:"#tab-2"}},[t._v(" Read ")])],1),e(d["a"],{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(r["a"],{attrs:{value:"tab-1"}},[e("allnotification")],1)],1),e(d["a"],{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(r["a"],{attrs:{value:"tab-2"}},[e(a["a"],{attrs:{flat:""}},[e(n["b"],[e("read")],1)],1)],1)],1)],1)],1)],1)},h=[],l=(i("558b"),i("1da9")),p=i("0cb6"),f=i("1d7d"),m=i("d62f"),g=function(){var t=this,e=t._self._c;return e(o["a"],[e(m["a"],[e(l["a"],[e("p",[t._v(" All Notification "),e("span",{staticClass:"primary-color"},[t._v("("+t._s(t.pagination.total)+")")])])])],1),e("div",[e(a["a"],{attrs:{elevation:"0"}},[e(n["b"],[e(p["a"],{attrs:{headers:t.headers,items:t.notifications,"disable-pagination":!0,"hide-default-footer":"","fixed-header":"",height:"100vh"},scopedSlots:t._u([{key:"item.actions",fn:function({item:i}){return[e(f["a"],{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.viewPage(i.id)}}},[t._v(" mdi-eye ")])]}}])}),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1)],1)},v=[],b={name:"Customer",data(){return{loading:!1,offset:12,pagination:{},per_page:20,notifications:[],server_errors:{},selectedStatus:"unread",headers:[{text:"Title",value:"data.name"},{text:"Notification Type",value:"notifiable_type",sortable:!1,align:"center"},{text:"Type",value:"type",sortable:!1},{text:"",value:"actions",sortable:!1}]}},computed:{notiType(){return this.$route.query.types}},watch:{notiType(){this.fetchData()}},created(){this.fetchData()},methods:{backPrevios(){this.$router.go(-1)},fetchData(){this.$store.commit("Loading_State",!0);const t={page:this.pagination.current_page,per_page:this.per_page,status:this.selectedStatus};this.notiType&&(t.types=this.notiType),this.$axios.get("notification",{params:t}).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.notifications=t.data.data.data,this.pagination=t.data.data.pagination},300)}).catch(t=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"})})},viewPage(t){this.$router.push({name:"NotificationView",params:{id:t}})}}},w=b,y=(i("a7c3"),i("4a4e")),T=Object(y["a"])(w,g,v,!1,null,null,null),_=T.exports,$=i("28e8"),x=function(){var t=this,e=t._self._c;return e("div",[e(m["a"],[e(l["a"],[e("p",[t._v(" Read Notification "),e("span",{staticClass:"primary-color"},[t._v("("+t._s(t.pagination.total)+")")])])])],1),e("div",[e(a["a"],{attrs:{elevation:"0"}},[e(n["b"],[e(p["a"],{attrs:{headers:t.headers,items:t.notifications,"disable-pagination":!0,"hide-default-footer":"","fixed-header":"",height:"100vh"},scopedSlots:t._u([{key:"item.read_at",fn:function({item:i}){return[e($["a"],{attrs:{color:"success"}},[t._v(" "+t._s(t.moment(i.read_at).format("mm:hh / DD-MM-YY"))+" ")])]}},{key:"item.actions",fn:function({item:i}){return[e(f["a"],{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.viewPage(i.id)}}},[t._v(" mdi-eye ")])]}}])}),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1)],1)},S=[],C={name:"Notification",data(){return{loading:!1,offset:12,pagination:{},per_page:20,notifications:[],notiType:this.$route.query.types,server_errors:{},selectedStatus:"read",headers:[{text:"Title",value:"data.name"},{text:"Read",value:"read_at",sortable:!1,align:"center"},{text:"Notification Type",value:"notifiable_type",sortable:!1,align:"center"},{text:"Type",value:"type",sortable:!1},{text:"",value:"actions",sortable:!1}]}},watch:{notiType(){this.fetchData()}},created(){this.fetchData()},methods:{backPrevios(){this.$router.go(-1)},fetchData(){this.$store.commit("Loading_State",!0);const t={page:this.pagination.current_page,per_page:this.per_page,status:this.selectedStatus};this.notiType&&(t.types=this.notiType),this.$axios.get("notification/",{params:t}).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.notifications=t.data.data.data,this.pagination=t.data.data.pagination},300)}).catch(t=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"})})},viewPage(t){this.$router.push({name:"NotificationView",params:{id:t}})},readStatus(t){return"created"==t?(this.invoiceStatusColor="primary--text","ສ້າງບິນສຳເລັດ"):"approved"==t?(this.invoiceStatusColor="info--text","ອະນຸມັດແລ້ວ"):void 0}}},k=C,D=(i("468b"),Object(y["a"])(k,x,S,!1,null,null,null)),G=D.exports,q={title(){return"Vientiane Waste Co-Dev|Notification"},components:{allnotification:_,read:G},data(){return{tab:null}},watch:{tab(t){"tab-1"==t?this.$router.push({name:"NotificationTab",query:{tab:"notification-all",types:this.$route.query.types?this.$route.query.types:null}}).catch(()=>{}):"tab-2"==t&&this.$router.push({name:"NotificationTab",query:{tab:"notification-read",types:this.$route.query.types?this.$route.query.types:null}}).catch(()=>{})}},created(){"notification-all"==this.$route.query.tab?this.tab="tab-1":"notification-read"==this.$route.query.tab&&(this.tab="tab-2")}},N=q,P=Object(y["a"])(N,u,h,!1,null,null,null);e["default"]=P.exports}}]);
//# sourceMappingURL=chunk-7fd68d60.85a491aa.js.map