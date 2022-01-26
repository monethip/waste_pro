(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12190202"],{"1bef":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"my-0"},[a("v-col",[a("v-breadcrumbs",{staticClass:"pa-0",attrs:{large:""}},[a("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[a("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" ຂໍ້ມູນເຫດຜົນທີ່ຍົກເລີກໃບບິນ")],1)],1),a("v-col",{staticClass:"text-right"},[a("v-btn",{staticClass:"btn-primary",on:{click:function(e){return t.openAddItem()}}},[a("v-icon",[t._v("mdi-plus")])],1)],1)],1),a("div",[a("v-card",[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.rejects,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.created_at",fn:function(e){var i=e.item;return[a("div",[t._v(t._s(t.moment(i.created_at).format("DD-MM-YY")))])]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editModal(i)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(i.id)}}},[t._v(" mdi-delete ")])]}}])}),a("br"),[t.pagination.total_pages>1?a("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1)],1),a("ModalAdd",[[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Add Rejection")])]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"ເຫດຜົນ",outlined:"",dense:""},on:{key:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.AddItem()}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeAddModal()}}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.AddItem()}}},[t._v(" Save ")])],1)],1)],1)]],2),a("ModalEdit",[[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Update Rejection")])]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"ເຫດຜົນ",outlined:"",dense:""},on:{key:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.UpdateItem()}},model:{value:t.editItem.name,callback:function(e){t.$set(t.editItem,"name",e)},expression:"editItem.name"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeEditModal()}}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.UpdateItem()}}},[t._v(" Update ")])],1)],1)],1)]],2),a("ModalDelete",[[a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:t.deleteItemConfirm}},[t._v("OK")]),a("v-spacer")],1)]],2)],1)},n=[],r=a("3835"),s=(a("b0c0"),a("4fad"),{name:"RejectionInfo",data:function(){return{loading:!1,offset:12,pagination:{},per_page:15,rejects:[],name:"",editItem:{},server_errors:{},headers:[{text:"Reject name",value:"name",sortable:!1},{text:"Created",value:"created_at",sortable:!1},{text:"Action",value:"actions",sortable:!1}]}},methods:{backPrevios:function(){this.$router.go(-1)},fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("reject-reason",{params:{page:this.pagination.current_page,per_page:this.per_page}}).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.rejects=e.data.data.data,t.pagination=e.data.data.pagination}),100)})).catch((function(){t.$store.commit("Loading_State",!1)}))},openAddItem:function(){this.$store.commit("modalAdd_State",!0)},AddItem:function(){var t=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("reject-reason",{name:this.name}).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.closeAddModal(),t.fetchData(),t.reset(),t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})}),100)})).catch((function(e){if(t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message}),422==e.response.status)for(var a=e.response.data.errors,i=0,n=Object.entries(a);i<n.length;i++){var s=Object(r["a"])(n[i],2),o=s[0],c=s[1];t.server_errors[o]=c[0]}t.fetchData()})))},closeAddModal:function(){this.name="",this.$store.commit("modalAdd_State",!1)},editModal:function(t){this.editItem=t,this.$store.commit("modalEdit_State",!0)},UpdateItem:function(){var t=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.put("reject-reason/"+this.editItem.id,{name:this.editItem.name}).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.closeEditModal(),t.fetchData(),t.reset(),t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})}),100)})).catch((function(e){if(t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message}),422==e.response.status)for(var a=e.response.data.errors,i=0,n=Object.entries(a);i<n.length;i++){var s=Object(r["a"])(n[i],2),o=s[0],c=s[1];t.server_errors[o]=c[0]}t.fetchData()})))},closeEditModal:function(){this.$store.commit("modalEdit_State",!1)},closeDelete:function(){this.$store.commit("modalDelete_State",!1)},deleteItem:function(t){this.editItem=t,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm:function(){var t=this;this.loading=!0,this.$axios.delete("reject-reason/"+this.editItem).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message}),t.$store.commit("modalDelete_State",!1),t.fetchData()}),300)})).catch((function(){t.fetchData(),t.$store.commit("modalDelete_State",!1),t.loading=!1}))},reset:function(){this.$refs.form.reset()}},watch:{name:function(){this.server_errors.name=""},"editItem.name":function(){this.server_errors.name=""}},created:function(){this.fetchData()}}),o=s,c=(a("240d"),a("2877")),d=a("6544"),l=a.n(d),u=a("2bc5"),m=a("8336"),f=a("b0af"),h=a("99d9"),v=a("62ad"),p=a("a523"),b=a("8fea"),g=a("4bd4"),_=a("132d"),$=a("0fd9"),k=a("2fa4"),j=a("8654"),x=Object(c["a"])(o,i,n,!1,null,null,null);e["default"]=x.exports;l()(x,{VBreadcrumbs:u["a"],VBtn:m["a"],VCard:f["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:v["a"],VContainer:p["a"],VDataTable:b["a"],VForm:g["a"],VIcon:_["a"],VRow:$["a"],VSpacer:k["a"],VTextField:j["a"]})},"240d":function(t,e,a){"use strict";a("7e3a")},"2bc5":function(t,e,a){"use strict";var i=a("5530"),n=(a("a15b"),a("abd3"),a("ade3")),r=a("1c87"),s=a("58df"),o=Object(s["a"])(r["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),a=e.tag,n=e.data;return t("li",[t(a,Object(i["a"])(Object(i["a"])({},n),{},{attrs:Object(i["a"])(Object(i["a"])({},n.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),c=a("80d2"),d=Object(c["j"])("v-breadcrumbs__divider","li"),l=a("7560");e["a"]=Object(s["a"])(l["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(i["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(d,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,a=[],i=0;i<this.items.length;i++){var n=this.items[i];a.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(o,{key:a.join("."),props:n},[n.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},"4bd4":function(t,e,a){"use strict";var i=a("5530"),n=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),r=a("7e2b"),s=a("3206");e["a"]=Object(n["a"])(r["a"],Object(s["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=a(t)))})):i.valid=a(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"4fad":function(t,e,a){var i=a("23e7"),n=a("6f53").entries;i({target:"Object",stat:!0},{entries:function(t){return n(t)}})},"7e3a":function(t,e,a){},abd3:function(t,e,a){}}]);
//# sourceMappingURL=chunk-12190202.0f9a576e.js.map