(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8fb7c314"],{"1bef":function(t,e,a){"use strict";a.r(e);var s=a("2bc5"),i=a("8336"),r=a("b0af"),o=a("99d9"),n=a("62ad"),d=a("a523"),c=a("8fea"),l=a("4bd4"),m=a("132d"),h=a("0fd9"),u=a("2fa4"),f=a("8654"),p=function(){var t=this,e=t._self._c;return e(d["a"],[e(h["a"],{staticClass:"my-0"},[e(n["a"],[e(s["a"],{staticClass:"pa-0",attrs:{large:""}},[e(i["a"],{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[e(m["a"],[t._v("mdi-chevron-left")])],1),t._v(" ຂໍ້ມູນເຫດຜົນທີ່ຍົກເລີກໃບບິນ ")],1)],1),e(n["a"],{staticClass:"text-right"},[e(i["a"],{staticClass:"btn-primary",on:{click:function(e){return t.openAddItem()}}},[e(m["a"],[t._v("mdi-plus")])],1)],1)],1),e("div",[e(r["a"],[e(r["a"],{attrs:{flat:""}},[e(o["b"],[e(c["a"],{attrs:{headers:t.headers,items:t.rejects,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.created_at",fn:function({item:a}){return[e("div",[t._v(t._s(t.moment(a.created_at).format("DD-MM-YY")))])]}},{key:"item.actions",fn:function({item:a}){return[e(m["a"],{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editModal(a)}}},[t._v(" mdi-pencil ")]),e(m["a"],{attrs:{small:""},on:{click:function(e){return t.deleteItem(a.id)}}},[t._v(" mdi-delete ")])]}}])}),e("br"),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1)],1),e("ModalAdd",[[e(r["a"],[e(o["c"],[e("span",{staticClass:"headline"},[t._v("Add Rejection")])]),e(o["b"],[e(d["a"],[e(l["a"],{ref:"form",attrs:{"lazy-validation":""}},[e(h["a"],[e(n["a"],{attrs:{cols:"12"}},[e(f["a"],{attrs:{label:"ເຫດຜົນ",outlined:"",dense:""},on:{key:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.AddItem()}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1)],1)],1)],1),e(o["a"],[e(u["a"]),e(i["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeAddModal()}}},[t._v(" Close ")]),e(i["a"],{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.AddItem()}}},[t._v(" Save ")])],1)],1)],1)]],2),e("ModalEdit",[[e(r["a"],[e(o["c"],[e("span",{staticClass:"headline"},[t._v("Update Rejection")])]),e(o["b"],[e(d["a"],[e(l["a"],{ref:"form",attrs:{"lazy-validation":""}},[e(h["a"],[e(n["a"],{attrs:{cols:"12"}},[e(f["a"],{attrs:{label:"ເຫດຜົນ",outlined:"",dense:""},on:{key:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.UpdateItem()}},model:{value:t.editItem.name,callback:function(e){t.$set(t.editItem,"name",e)},expression:"editItem.name"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1)],1)],1)],1),e(o["a"],[e(u["a"]),e(i["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeEditModal()}}},[t._v(" Close ")]),e(i["a"],{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.UpdateItem()}}},[t._v(" Update ")])],1)],1)],1)]],2),e("ModalDelete",[[e(o["a"],[e(u["a"]),e(i["a"],{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v(" Cancel ")]),e(i["a"],{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:t.deleteItemConfirm}},[t._v(" OK ")]),e(u["a"])],1)]],2)],1)},g=[],_={name:"RejectionInfo",data(){return{loading:!1,offset:12,pagination:{},per_page:100,rejects:[],name:"",editItem:{},server_errors:{},headers:[{text:"Reject name",value:"name",sortable:!1},{text:"Created",value:"created_at",sortable:!1},{text:"Action",value:"actions",sortable:!1}]}},watch:{name(){this.server_errors.name=""},"editItem.name":function(){this.server_errors.name=""}},created(){this.fetchData()},methods:{backPrevios(){this.$router.go(-1)},fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("reject-reason",{params:{page:this.pagination.current_page,per_page:this.per_page}}).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.rejects=t.data.data.data,this.pagination=t.data.data.pagination},100)}).catch(()=>{this.$store.commit("Loading_State",!1)})},openAddItem(){this.$store.commit("modalAdd_State",!0)},AddItem(){1==this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.post("reject-reason",{name:this.name}).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.closeAddModal(),this.fetchData(),this.reset(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})},100)}).catch(t=>{if(this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"}),t.response&&422==t.response.status){const e=t.response.data.errors,a={};for(const[t,s]of Object.entries(e))a[t]=s[0];this.server_errors=a}this.fetchData()}))},closeAddModal(){this.name="",this.$store.commit("modalAdd_State",!1)},editModal(t){this.editItem=t,this.$store.commit("modalEdit_State",!0)},UpdateItem(){1==this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.put("reject-reason/"+this.editItem.id,{name:this.editItem.name}).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.closeEditModal(),this.fetchData(),this.reset(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})},100)}).catch(t=>{if(this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"}),t.response&&422==t.response.status){const e=t.response.data.errors,a={};for(const[t,s]of Object.entries(e))a[t]=s[0];this.server_errors=a}this.fetchData()}))},closeEditModal(){this.$store.commit("modalEdit_State",!1)},closeDelete(){this.$store.commit("modalDelete_State",!1)},deleteItem(t){this.editItem=t,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm(){this.$store.commit("Loading_State",!0),this.$axios.delete("reject-reason/"+this.editItem).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message}),this.$store.commit("modalDelete_State",!1),this.fetchData()},300)}).catch(()=>{this.fetchData(),this.$store.commit("modalDelete_State",!1),this.$store.commit("Loading_State",!1)})},reset(){this.$refs.form.reset()}}},v=_,b=(a("5cbf"),a("2877")),$=Object(b["a"])(v,p,g,!1,null,null,null);e["default"]=$.exports},"4bd4":function(t,e,a){"use strict";a("14d9");var s=a("58df"),i=a("7e2b"),r=a("3206");e["a"]=Object(s["a"])(i["a"],Object(r["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))}):a.valid=e(t),a},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const a=this.watchers.find(t=>t._uid===e._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"5cbf":function(t,e,a){"use strict";a("9d96")},"9d96":function(t,e,a){},a523:function(t,e,a){"use strict";a("20f6"),a("4b85");var s=a("2b0e");function i(t){return s["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:a,data:s,children:i}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:r}=s;if(r){s.attrs={};const t=Object.keys(r).filter(t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(s.staticClass+=" "+t.join(" "))}return a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),e(a.tag,s,i)}})}var r=a("d9f7");e["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:a,children:s}){let i;const{attrs:o}=a;return o&&(a.attrs={},i=Object.keys(o).filter(t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),t(e.tag,Object(r["a"])(a,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(i||[])}),s)}})}}]);
//# sourceMappingURL=chunk-8fb7c314.88df305e.js.map