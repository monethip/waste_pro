(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-707dac20"],{"0af3":function(t,e,a){"use strict";var i=a("1455");e["a"]=i["a"].extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=i["a"].options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})},1455:function(t,e,a){"use strict";var i=a("59f4"),s=a("c91b"),n=a("385b"),o=a("dd08"),r=a("9c0c");const c=Object(r["a"])(i["a"],Object(s["a"])("windowGroup","v-window-item","v-window"));e["a"]=c.extend().extend().extend({name:"v-window-item",directives:{Touch:n["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(o["h"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(o["h"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}})},"64f2":function(t,e,a){},cf99:function(t,e,a){"use strict";a.r(e);var i=a("db5a"),s=a("1da9"),n=a("1789"),o=a("d62f"),r=a("2f5e"),c=a("0af3"),d=a("a151"),l=a("e28e"),u=function(){var t=this,e=t._self._c;return e(n["a"],[e(o["a"],{staticClass:"mb-n6"},[e(s["a"],[e("p",[t._v("ຂໍ້ມູນບໍລິສັດທີ່ສົ່ງຄຳຂໍເກັບຂີ້ເຫື້ຍອ")])])],1),e(i["a"],[e(d["a"],{attrs:{dark:"","background-color":"tab-color lighten-2"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(r["a"],{attrs:{href:"#tab-1"}},[t._v(" ລໍຖ້າກວດສອບ ")]),e(r["a"],{attrs:{href:"#tab-2"}},[t._v(" ກວດສອບສຳເລັດແລ້ວ ")])],1),e(l["a"],{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(c["a"],{attrs:{value:"tab-1"}},[e("pending")],1)],1),e(l["a"],{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(c["a"],{attrs:{value:"tab-2"}},[e("success")],1)],1)],1)],1)},m=[],h=(a("558b"),a("07b0")),p=a("0f35"),f=a("28e8"),_=a("0cb6"),g=a("1d7d"),v=a("cfe2"),b=function(){var t=this,e=t._self._c;return e(n["a"],[e(_["a"],{attrs:{headers:t.header,items:t.data,"hide-default-footer":""},scopedSlots:t._u([{key:"item.created_at",fn:function({item:a}){return[e("div",[t._v(t._s(t.moment(a.created_at).format("DD-MM-YY hh:mm")))])]}},{key:"item.coordinator",fn:function({item:a}){return[e("div",[t._v(t._s(a.coordinator_name)+" "+t._s(a.coordinator_surname))])]}},{key:"item.status",fn:function({item:a}){return[e(f["a"],{attrs:{color:"success",label:""}},[t._v(" "+t._s(a.status)+" ")])]}},{key:"item.action",fn:function({item:a}){return[e(g["a"],{staticClass:"mr-4",attrs:{small:"",color:"success"},on:{click:function(e){return t.viewPage(a)}}},[t._v(" mdi-eye ")]),e(g["a"],{attrs:{small:"",color:"red"},on:{click:function(e){return t.deleteItem(a.id)}}},[t._v(" mdi-trash-can ")])]}}],null,!0)}),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()],e("ModalDelete",[[e(p["a"],[e(v["a"]),e(h["a"],{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v(" Cancel ")]),e(h["a"],{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:t.deleteItemConfirm}},[t._v(" OK ")]),e(v["a"])],1)]],2)],2)},w=[],$={data(){return{data:[],itemId:"",loading:!1,server_errors:{},offset:12,pagination:{},per_page:100,header:[{text:"ຊື່",value:"name"},{text:"Phone",value:"phone"},{text:"Email",value:"email"},{text:"ຜູ້ຮັບຜິດຊອບ",value:"coordinator"},{text:"Status",value:"status"},{text:"Image",value:"image"},{text:"Created",value:"created_at"},{text:"",value:"action"}]}},watch:{},created(){this.fetchData()},methods:{deleteItem(t){this.itemId=t,this.$store.commit("modalDelete_State",!0)},closeDelete(){this.$store.commit("modalDelete_State",!1)},deleteItemConfirm(){this.$store.commit("Loading_State",!0),this.$axios.delete("request-company/"+this.itemId).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.closeDelete(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message}),this.fetchData()},100)}).catch(()=>{this.$store.commit("modalDelete_State",!1),this.$store.commit("Loading_State",!1)})},fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("request-company",{params:{page:this.pagination.current_page,per_page:this.per_page,statuses:["success"]}}).then(t=>{200==t.data.code&&(this.$store.commit("Loading_State",!1),this.data=t.data.data.data,this.pagination=t.data.data.pagination)}).catch(t=>{if(this.$store.commit("Loading_State",!1),422==t.respones.status){const e=t.respones.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}})},viewPage(t){this.$openRoute({name:"ViewCompanyRequest",params:{id:t.id,status:t.status}})}}},k=$,y=a("4a4e"),S=Object(y["a"])(k,b,w,!1,null,null,null),x=S.exports,C=a("c2f4"),T=a("15e9"),D=a("cf5d"),I=a("bf41"),q=a("fde7"),L=function(){var t=this,e=t._self._c;return e(n["a"],[e(_["a"],{attrs:{headers:t.header,items:t.data,"hide-default-footer":""},scopedSlots:t._u([{key:"item.media",fn:function({item:a}){return t._l(a.media,(function(a,i){return e(C["a"],{key:i,staticClass:"mr-1",attrs:{size:"36px"}},[a.url?e("img",{attrs:{src:a.url}}):t._e()])}))}},{key:"item.created_at",fn:function({item:a}){return[e("div",[t._v(t._s(t.moment(a.created_at).format("DD-MM-YY hh:mm")))])]}},{key:"item.coordinator",fn:function({item:a}){return[e("div",[t._v(t._s(a.coordinator_name)+" "+t._s(a.coordinator_surname))])]}},{key:"item.status",fn:function({item:a}){return[e(f["a"],{attrs:{color:"primary",label:""}},[t._v(" "+t._s(a.status)+" ")])]}},{key:"item.action",fn:function({item:a}){return[e(q["a"],{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:i}){return[e(g["a"],t._g(t._b({staticClass:"mr-2",attrs:{color:"primary",dark:"",medium:""}},"v-icon",i,!1),a),[t._v(" mdi-dots-vertical ")])]}}],null,!0)},[e(T["a"],[e(D["a"],{attrs:{link:""},on:{click:function(e){return t.viewPage(a)}}},[e(I["d"],[e(g["a"],{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-eye ")]),t._v(" ລາຍລະອຽດ ")],1)],1),e(D["a"],{attrs:{link:""},on:{click:function(e){return t.makeSuccess(a)}}},[e(I["d"],[e(g["a"],{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-pencil ")]),t._v(" Make Success ")],1)],1),e(D["a"],{attrs:{link:""},on:{click:function(e){return t.deleteItem(a.id)}}},[e(I["d"],[e(g["a"],{attrs:{small:""}},[t._v(" mdi-delete ")]),t._v(" ລຶບ ")],1)],1)],1)],1)]}}],null,!0)}),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()],e("ModalDelete",[[e(p["a"],[e(v["a"]),e(h["a"],{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v(" Cancel ")]),e(h["a"],{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:t.deleteItemConfirm}},[t._v(" OK ")]),e(v["a"])],1)]],2)],2)},G=[],P={data(){return{data:[],itemId:"",loading:!1,server_errors:{},offset:12,pagination:{},per_page:100,header:[{text:"ຊື່",value:"name"},{text:"Phone",value:"phone"},{text:"Email",value:"email"},{text:"ຜູ້ຮັບຜິດຊອບ",value:"coordinator"},{text:"Status",value:"status"},{text:"Image",value:"media"},{text:"Created",value:"created_at"},{text:"",value:"action"}]}},watch:{},created(){this.fetchData()},methods:{deleteItem(t){this.itemId=t,this.$store.commit("modalDelete_State",!0)},closeDelete(){this.$store.commit("modalDelete_State",!1)},deleteItemConfirm(){this.$store.commit("Loading_State",!0),this.$axios.delete("request-company/"+this.itemId).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.closeDelete(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message}),this.fetchData()},100)}).catch(()=>{this.$store.commit("modalDelete_State",!1),this.$store.commit("Loading_State",!1)})},fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("request-company",{params:{page:this.pagination.current_page,per_page:this.per_page,statuses:["pending"]}}).then(t=>{200==t.data.code&&(this.$store.commit("Loading_State",!1),this.data=t.data.data.data,this.pagination=t.data.data.pagination)}).catch(t=>{if(this.$store.commit("Loading_State",!1),422==t.respones.status){const e=t.respones.data.errors;for(const[t,a]of Object.entries(e))this.server_errors[t]=a[0]}})},makeSuccess(t){this.$store.commit("Loading_State",!0),this.$axios.post("request-company-status/"+t.id,{status:"success"}).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message}),this.fetchData()},100)}).catch(()=>{this.$store.commit("modalDelete_State",!1),this.$store.commit("Loading_State",!1)})},viewPage(t){this.$openRoute({name:"ViewCompanyRequest",params:{id:t.id,status:t.status}})}}},O=P,j=Object(y["a"])(O,L,G,!1,null,null,null),R=j.exports,E={title(){return"Vientiane Waste Co-Dev|Company Request"},components:{Success:x,Pending:R},data(){return{tab:null}},watch:{tab(t){"tab-1"==t?this.$router.push({name:"CompanyRequest",query:{tab:"company-request-pending"}}).catch(()=>{}):"tab-2"==t&&this.$router.push({name:"CompanyRequest",query:{tab:"company-request-success"}}).catch(()=>{})}},created(){"company-request-pending"==this.$route.query.tab?this.tab="tab-1":"company-request-success"==this.$route.query.tab&&(this.tab="tab-2")}},M=E,A=(a("fd52"),Object(y["a"])(M,u,m,!1,null,null,null));e["default"]=A.exports},fd52:function(t,e,a){"use strict";a("64f2")}}]);
//# sourceMappingURL=chunk-707dac20.187a36e6.js.map