(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa9ab532"],{"565c":function(t,a,e){"use strict";e("558b");var i=e("9c0c"),s=e("68c4"),o=e("944a");a["a"]=Object(i["a"])(s["a"],Object(o["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const a=Object.values(t).includes(!0);this.$emit("input",!a)},deep:!0,immediate:!0}},methods:{watchInput(t){const a=t=>t.$watch("hasError",a=>{this.$set(this.errorBag,t._uid,a)},{immediate:!0}),e={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?e.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(e.valid=a(t)))}):e.valid=a(t),e},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const a=this.inputs.find(a=>a._uid===t._uid);if(!a)return;const e=this.watchers.find(t=>t._uid===a._uid);e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==a._uid),this.inputs=this.inputs.filter(t=>t._uid!==a._uid),this.$delete(this.errorBag,a._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"5b2e":function(t,a,e){},"6c5d":function(t,a,e){"use strict";e("5b2e")},dc41:function(t,a,e){"use strict";e.r(a);var i=e("07b0"),s=e("db5a"),o=e("0f35"),r=e("1da9"),n=e("1789"),l=e("0cb6"),d=e("6733"),c=e("565c"),h=e("1d7d"),m=e("d62f"),u=e("cfe2"),g=e("9b44"),v=function(){var t=this,a=t._self._c;return a(n["a"],[a(m["a"],{staticClass:"mb-n6 text-right"},[a(r["a"],[a(i["a"],{staticClass:"btn-primary",attrs:{dark:"",medium:""},on:{click:function(a){return t.OpenModalAdd()}}},[a(h["a"],{attrs:{color:""}},[t._v(" mdi-plus ")]),t._v("Add ")],1)],1)],1),a(r["a"],{attrs:{justify:"center"}},[a(s["a"],{staticClass:"my-6",attrs:{elevation:"2"}},[a(o["c"],[t._v(" ຂໍ້ມູນລາຍລະອຽດທີ່ຢູ່ "),a(d["a"],{staticClass:"mx-4",attrs:{vertical:""}}),a(u["a"]),a(g["a"],{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1),a(l["a"],{attrs:{headers:t.headers,items:t.villagevariation,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.actions",fn:function({item:e}){return[a(h["a"],{staticClass:"mr-2",attrs:{small:"",color:"green"},on:{click:function(a){return t.OpenModalEdit(e)}}},[t._v(" mdi-pencil ")]),a(h["a"],{attrs:{small:"",color:"red"},on:{click:function(a){return t.deleteItem(e.id)}}},[t._v(" mdi-trash-can-outline ")])]}}],null,!0)}),[t.pagination.total_pages>1?a("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(a){return t.fetchData()}}}):t._e()]],2)],1),a("ModalAdd",[[a(s["a"],[a(o["c"],[a("span",{staticClass:"text-h5"},[t._v("Add Village Variation")]),a(u["a"])],1),a(o["b"],[a(n["a"],[a(c["a"],{ref:"form",attrs:{"lazy-validation":""}},[a(m["a"],[a(r["a"],[a(g["a"],{attrs:{label:"name*",required:"",rules:t.nameRules},model:{value:t.addvillagevariation,callback:function(a){t.addvillagevariation=a},expression:"addvillagevariation"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1)],1)],1)],1),a(o["a"],[a(u["a"]),a(i["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(a){return t.closeAddModal()}}},[t._v(" Close ")]),a(i["a"],{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(a){return t.AddItem()}}},[t._v(" Save ")])],1)],1)],1)]],2),a("ModalEdit",[[a(s["a"],[a(o["c"],[a("h4",[t._v("ແກ້ໄຂຂໍ້ມູນຍ່ອຍຂອງບ້ານ")])]),a(o["b"],[a(n["a"],[a(c["a"],{ref:"form",attrs:{"lazy-validation":""}},[a(m["a"],[a(r["a"],[a(g["a"],{attrs:{label:"name*",required:""},model:{value:t.editVillagevariation.name,callback:function(a){t.$set(t.editVillagevariation,"name",a)},expression:"editVillagevariation.name"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1)],1)],1)],1),a(o["a"],[a(u["a"]),a(i["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(a){return t.closeUpdate()}}},[t._v(" ຍົກເລີກ ")]),a(i["a"],{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(a){return t.updateItem()}}},[t._v(" ບັນທຶກ ")])],1)],1)],1)]],2),a("ModalDelete",[[a(o["a"],[a(u["a"]),a(i["a"],{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v(" Cancel ")]),a(i["a"],{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:t.DeleteItemConfirm}},[t._v(" OK ")]),a(u["a"])],1)]],2)],1)},p=[],_={name:"VillageVariation",title(){return"Vientiane Waste Co-Dev|Address Detail"},data(){return{search:"",villagevariation:[],addvillagevariation:"",addvillagedetail:"",loading:!1,VillageVariation_id:"",editVillagevariation:{},village_variation_id:"",variation:[],edit_villagevariation:{},variationDialog:!1,offset:12,pagination:{},per_page:100,server_errors:{},nameRules:[t=>!!t||"Name is required"],headers:[{text:"name",value:"name"},{text:"actions",value:"actions"}]}},watch:{addvillagevariation(){this.server_errors.name=""},"editVillagevariation.name":function(){this.server_errors.name=""}},created(){this.fetchData()},methods:{reset(){this.$refs.form.reset()},OpenModalAdd(){this.$store.commit("modalAdd_State",!0)},closeAddModal(){this.$store.commit("modalAdd_State",!1)},closeUpdate(){this.reset(),this.editVillagevariation={},this.fetchData(),this.$store.commit("modalEdit_State",!1)},OpenModalEdit(t){this.editVillagevariation=t,this.$store.commit("modalEdit_State",!0)},updateItem(){const t=new FormData;t.append("name",this.editVillagevariation.name),t.append("_method","PUT"),1==this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.post("address/village-variation/"+this.editVillagevariation.id,t).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.closeUpdate(),this.editVillagevariation={},this.reset(),this.fetchData(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})},300)}).catch(t=>{if(this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"}),t.response&&422==t.response.status){const a=t.response.data.errors;for(const[t,e]of Object.entries(a))this.server_errors[t]=e[0]}}))},closeDelete(){this.$store.commit("modalDelete_State",!1)},deleteItem(t){this.VillageVariation_id=t,this.$store.commit("modalDelete_State",!0)},DeleteItemConfirm(){this.$store.commit("Loading_State",!0),this.$axios.delete("address/village-variation/"+this.VillageVariation_id).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message}),this.$store.commit("modalDelete_State",!1),this.fetchData()},300)}).catch(()=>{this.fetchData(),this.$store.commit("modalDelete_State",!1),this.$store.commit("Loading_State",!1)})},AddItem(){1==this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.post("address/village-variation/",{name:this.addvillagevariation}).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.closeAddModal(),this.fetchData(),this.reset(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})},300)}).catch(t=>{if(this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"}),t.response&&422==t.response.status){const a=t.response.data.errors;for(const[t,e]of Object.entries(a))this.server_errors[t]=e[0]}}))},fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("info/village-variation",{params:{page:this.pagination.current_page,per_page:this.per_page,filter:this.search}}).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.villagevariation=t.data.data.data,this.pagination=t.data.data.pagination},300)}).catch(t=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response?t.response.data.message:"Something went wrong"})})}}},f=_,$=(e("6c5d"),e("4a4e")),b=Object($["a"])(f,v,p,!1,null,null,null);a["default"]=b.exports}}]);
//# sourceMappingURL=chunk-aa9ab532.2722807e.js.map