(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25fe60ee"],{"131a":function(e,t,s){"use strict";s.r(t);var a=s("07b0"),r=s("db5a"),o=s("0f35"),i=s("28e8"),n=s("1da9"),l=s("1789"),c=s("0cb6"),d=s("ab58"),u=s("6733"),h=s("565c"),m=s("1d7d"),p=s("15e9"),_=s("cf5d"),f=s("bf41"),g=s("fde7"),v=s("d62f"),b=s("26bf"),w=s("cfe2"),k=s("9b44"),S=function(){var e=this,t=e._self._c;return t(l["a"],[t("div",{staticStyle:{"z-index":"9999"}},[t("div",{attrs:{id:"recaptcha-container"}})]),t(v["a"],{staticClass:"mb-n6"},[t(n["a"],[t(a["a"],{staticClass:"btn-primary",on:{click:e.OpenModalAdd}},[t(m["a"],[e._v("mdi-plus")])],1)],1)],1),t(v["a"],{attrs:{justify:"center"}},[t(n["a"],[t(r["a"],{staticClass:"pa-2"},[t(o["c"],{staticClass:"my-auto"},[e._v(" ທັງໝົດ ("+e._s(e.pagination.total)+") "),t(u["a"],{staticClass:"mx-4",attrs:{vertical:""}}),t(w["a"]),t(v["a"],[t(n["a"],[t(k["a"],{attrs:{clearable:"",dense:"","hide-details":"",label:"Search",outlined:"","prepend-inner-icon":"mdi-magnify","single-line":""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Search()}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),t(n["a"],[t(k["a"],{staticClass:"input-number",attrs:{clearable:"",dense:"","hide-details":"",label:"Phone",outlined:"","prepend-inner-icon":"mdi-magnify","single-line":"",type:"number"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.SearchPhone()}},model:{value:e.searchPhone,callback:function(t){e.searchPhone=t},expression:"searchPhone"}})],1)],1)],1),t(c["a"],{attrs:{"disable-pagination":!0,headers:e.headers,items:e.users,search:e.search,"hide-default-footer":""},scopedSlots:e._u([{key:"item.roles",fn:function({item:s}){return[t("div",e._l(s.roles,(function(s,a){return t("span",{key:a},[t(i["a"],{staticClass:"mr-1 my-1",attrs:{color:"info",label:""}},[e._v(e._s(s.name))])],1)})),0)]}},{key:"item.permissions",fn:function({item:s}){return[t("div",e._l(s.permissions,(function(s,a){return t("span",{key:a},[t(i["a"],{staticClass:"mr-1 my-1",attrs:{color:"success",label:""}},[e._v(" "+e._s(s.name)+" ")])],1)})),0)]}},{key:"item.status",fn:function({item:s}){return[t(i["a"],{staticClass:"mr-2",attrs:{color:e.statusColor(s.status),label:"",small:""},on:{click:function(t){return e.changeStatus(s)}}},[e._v(" "+e._s(s.status)+" ")])]}},{key:"item.actions",fn:function({item:s}){return[t(g["a"],{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:s,attrs:a}){return[t(m["a"],e._g(e._b({staticClass:"mr-2",attrs:{color:"primary",dark:"",medium:""}},"v-icon",a,!1),s),[e._v(" mdi-dots-vertical ")])]}}],null,!0)},[t(p["a"],[t(_["a"],{attrs:{link:""},on:{click:function(t){return e.OpenModalEdit(s)}}},[t(f["d"],[t(m["a"],{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-pencil ")]),e._v(" ແກ້ໄຂ ")],1)],1),t(_["a"],{attrs:{link:""},on:{click:function(t){return e.resetPassword(s)}}},[t(f["d"],[t(m["a"],{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-key ")]),e._v(" Reset Password ")],1)],1),t(_["a"],{attrs:{link:""},on:{click:function(t){return e.deleteItem(s.id)}}},[t(f["d"],[t(m["a"],{attrs:{small:""}},[e._v(" mdi-delete ")]),e._v(" ລຶບ ")],1)],1)],1)],1)]}}])}),t("br"),[e.pagination.total_pages>1?t("Pagination",{attrs:{offset:e.offset,pagination:e.pagination},on:{paginate:function(t){return e.fetchData()}}}):e._e()]],2)],1)],1),t("ModalAdd",[[t(r["a"],[t(o["c"],[t("span",{staticClass:"headline"},[e._v("Add user")])]),t(o["b"],[t(l["a"],[t(h["a"],{ref:"form",attrs:{"lazy-validation":""}},[t(v["a"],[t(n["a"],{attrs:{cols:"12"}},[t(k["a"],{attrs:{rules:e.nameRules,label:"Name "},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.name)+" ")])],1),t(n["a"],{attrs:{cols:"12"}},[t(k["a"],{staticClass:"input-number",attrs:{rules:e.phoneRules,label:"ເບີໂທ *",required:"",type:"number"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}})],1),t(n["a"],{attrs:{cols:"12"}},[t(k["a"],{attrs:{label:"Email",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.email)+" ")])],1),t(n["a"],{attrs:{cols:"12"}},[t(k["a"],{attrs:{rules:e.passwordRules,autocomplete:"",label:"Password Confirm",required:"",type:"password"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.password)+" ")])],1),t(n["a"],{attrs:{cols:"12"}},[t(k["a"],{attrs:{rules:e.passwordRules,autocomplete:"",label:"Password",required:"",type:"password"},model:{value:e.user.password_confirmation,callback:function(t){e.$set(e.user,"password_confirmation",t)},expression:"user.password_confirmation"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.password_confirmation)+" ")])],1)],1)],1)],1)],1),t(o["b"],[t(o["a"],[t(w["a"]),t(a["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.closeAddModal()}}},[e._v(" Close ")]),t(a["a"],{attrs:{disabled:e.loading,loading:e.loading,color:"blue darken-1",text:""},on:{click:function(t){return e.AddItem()}}},[e._v(" Save ")])],1)],1)],1)]],2),t("ModalEdit",{scopedSlots:e._u([{key:"default",fn:function(){return[t(r["a"],[t(o["c"],[t("span",{staticClass:"headline"},[e._v("ແກ້ໄຂ User")])]),t(o["b"],[t(l["a"],[t(h["a"],{ref:"form",attrs:{"lazy-validation":""}},[t(v["a"],[t(n["a"],{attrs:{cols:"12"}},[t(k["a"],{attrs:{rules:e.nameRules,label:"Name *",required:""},model:{value:e.edit_user.name,callback:function(t){e.$set(e.edit_user,"name",t)},expression:"edit_user.name"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.name)+" ")])],1),t(n["a"],{attrs:{cols:"12"}},[t(k["a"],{staticClass:"input-number",attrs:{rules:e.phoneRules,disabled:"",label:"ເບີໂທ *",required:"",type:"number"},model:{value:e.edit_user.phone,callback:function(t){e.$set(e.edit_user,"phone",t)},expression:"edit_user.phone"}})],1),t(n["a"],{attrs:{cols:"12"}},[t(k["a"],{attrs:{label:"Email",required:""},model:{value:e.edit_user.email,callback:function(t){e.$set(e.edit_user,"email",t)},expression:"edit_user.email"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.email)+" ")])],1)],1)],1)],1),t(o["a"],[t(w["a"]),t(a["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.closeUpdateModal()}}},[e._v(" Close ")]),t(a["a"],{attrs:{disabled:e.loading,loading:e.loading,color:"blue darken-1",text:""},on:{click:function(t){return e.updateItem()}}},[e._v(" Update ")])],1)],1)],1)]},proxy:!0}])}),t(d["a"],{attrs:{"max-width":"720px",persistent:""},model:{value:e.changePasswordDialog,callback:function(t){e.changePasswordDialog=t},expression:"changePasswordDialog"}},[t(r["a"],[t(o["c"],[t("span",{staticClass:"headline"},[e._v(" Reset Password "),t("span",[t("a",[e._v(e._s(e.edit_user.name))])])])]),t(o["b"],[t(l["a"],[t(h["a"],{ref:"form",attrs:{"lazy-validation":""}},[t(v["a"],[t(n["a"],{attrs:{cols:"12"}},[t(k["a"],{attrs:{rules:e.passwordRules,label:"Password *",required:"",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.password)+" ")])],1),t(n["a"],{attrs:{cols:"12"}},[t(k["a"],{attrs:{rules:e.passwordConfirmRules,label:"Password Confirm *",required:"",type:"password"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.resetPasswordAction.apply(null,arguments)}},model:{value:e.password_confirm,callback:function(t){e.password_confirm=t},expression:"password_confirm"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.password_confirmation)+" ")])],1)],1)],1)],1),t(o["a"],[t(w["a"]),t(a["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.closeReset()}}},[e._v(" Close ")]),t(a["a"],{attrs:{disabled:e.loading,loading:e.loading,color:"blue darken-1",text:""},on:{click:e.resetPasswordAction}},[e._v(" Reset ")])],1)],1)],1)],1),t(d["a"],{attrs:{"max-width":"720px",persistent:""},model:{value:e.changeStatusDialog,callback:function(t){e.changeStatusDialog=t},expression:"changeStatusDialog"}},[t(r["a"],[t(o["c"],[t("span",{staticClass:"headline"},[e._v(" ປ່ຽນສະຖານະ "),t("span",[t("a",[e._v(e._s(e.edit_user.name))])])])]),t(o["b"],[t(l["a"],[t(h["a"],{ref:"form",attrs:{"lazy-validation":""}},[t(v["a"],[t(n["a"],{attrs:{cols:"12"}},[t(b["a"],{attrs:{items:e.statuses,"item-text":"name","item-value":"name",label:"Status *",required:""},model:{value:e.edit_user.status,callback:function(t){e.$set(e.edit_user,"status",t)},expression:"edit_user.status"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.status)+" ")])],1)],1)],1)],1),t(o["a"],[t(w["a"]),t(a["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.changeStatusDialog=!1}}},[e._v(" Close ")]),t(a["a"],{attrs:{disabled:e.loading,loading:e.loading,color:"blue darken-1",text:""},on:{click:e.switchStatus}},[e._v(" Change ")])],1)],1)],1)],1),t("ModalDelete",[[t(o["a"],[t(w["a"]),t(a["a"],{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v(" Cancel ")]),t(a["a"],{attrs:{disabled:e.loading,loading:e.loading,color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v(" OK ")]),t(w["a"])],1)]],2)],1)},$=[],y=s("6ece"),x=s("54da"),C={title(){return"Vientiane Waste Co-Dev|User"},name:"User",data(){return{headers:[{text:"ຊື່",value:"name",width:"150px"},{text:"Phone",value:"phone",sortable:!1},{text:"Email",value:"email",sortable:!1},{text:"Status",value:"status",sortable:!1,align:"center"},{text:"",value:"actions",sortable:!1}],loading:!1,users:[],user:{},phone:"",edit_user:{},userID:"",server_errors:{email:""},errormsg:"",changePasswordDialog:!1,changeStatusDialog:!1,offset:12,pagination:{},per_page:100,search:"",searchPhone:"",oldVal:"",password:"",password_confirm:"",statuses:[{name:"active"},{name:"inactive"}],status:"",nameRules:[e=>!!e||"Name is required"],passwordRules:[e=>!!e||"Password is required",e=>e&&e.length>=8||"Password must be more than 8 characters"],passwordConfirmRules:[e=>!!e||"Password Confirm is required",e=>e&&e.length>=8||"Password must be more than 8 characters"],phoneRules:[e=>!!e||"Phone is required",e=>e&&e.length>=8&&e.length<=11||"Phone number must be  8 - 11 numbers"]}},watch:{"user.name":function(){this.server_errors.name=""},"user.phone":function(){this.server_errors.phone=""},"user.email":function(){this.server_errors.email=""},"user.password":function(){this.server_errors.password=""},"edit_user.name":function(){this.server_errors.name=""},"edit_user.phone":function(){this.server_errors.phone=""},"edit_user.email":function(){this.server_errors.email=""},password(){this.server_errors.password=""},password_confirmation(){this.password_confirmation=""},search(e){this.pagination.current_page="",""===e&&this.fetchData()},searchPhone(e){this.pagination.current_page="",e.length>4&&this.fetchData()}},created(){this.fetchData()},methods:{AddItem(){!0===this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.post("auth/register-pre-customer",this.user).then(e=>{200===e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.closeAddModal(),this.user={},this.fetchData(),this.reset(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})},300)}).catch(e=>{if(this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),e.response&&422===e.response.status){const t=e.response.data.errors;for(const[e,s]of Object.entries(t))this.server_errors[e]=s[0]}}))},fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("user-setting/user",{params:Object(x["a"])([{page:this.pagination.current_page},{per_page:this.per_page},{filter:this.search},{phone:this.searchPhone},{roles:"pre_customer"}])}).then(e=>{200===e.data.code&&(this.$store.commit("Loading_State",!1),this.$store.commit("Loading_State",!1),this.users=e.data.data.data,this.pagination=e.data.data.pagination)}).catch(e=>{if(this.$store.commit("Loading_State",!1),e.response&&422===e.response.status){const t=e.response.data.errors;for(const[e,s]of Object.entries(t))this.server_errors[e]=s[0]}})},OpenModalAdd(){this.$store.commit("modalAdd_State",!0)},closeAddModal(){this.$store.commit("modalAdd_State",!1)},closeReset(){this.changePasswordDialog=!1,this.password="",this.password_confirmation=""},resetPasswordAction(){!0===this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.put("user-setting/reset-password/"+this.edit_user.id,{password:this.password,password_confirmation:this.password_confirm}).then(e=>{200===e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.edit_user={},this.reset(),this.fetchData(),this.changePasswordDialog=!1,this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})},300)}).catch(e=>{if(this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),e.response&&422===e.response.status){const t=e.response.data.errors;for(const[e,s]of Object.entries(t))this.server_errors[e]=s[0]}}))},OpenModalEdit(e){this.edit_user=e,this.$store.commit("modalEdit_State",!0)},updateItem(){!0===this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.put("user-setting/user/"+this.edit_user.id,this.edit_user).then(e=>{200===e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.closeUpdateModal(),this.edit_user={},this.reset(),this.fetchData(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})},300)}).catch(e=>{if(this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),e.response&&422===e.response.status){const t=e.response.data.errors;for(const[e,s]of Object.entries(t))this.server_errors[e]=s[0]}}))},closeUpdateModal(){this.$store.commit("modalEdit_State",!1)},closeDelete(){this.$store.commit("modalDelete_State",!1)},deleteItem(e){this.userID=e,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm(){this.$store.commit("Loading_State",!0),this.$axios.delete("user-setting/user/"+this.userID).then(e=>{200===e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.$store.commit("modalDelete_State",!1),this.fetchData(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})},300)}).catch(e=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),this.$store.commit("modalDelete_State",!1)})},resetPassword(e){this.changePasswordDialog=!0,this.edit_user=e},changeStatus(e){this.changeStatusDialog=!0,this.edit_user=e},switchStatus(){this.$store.commit("Loading_State",!0),this.$axios.put("user-setting/update-status/"+this.edit_user.id,{status:this.edit_user.status}).then(e=>{200===e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.fetchData(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message}),this.changeStatusDialog=!1},300)}).catch(e=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"})})},statusColor(e){return"active"===e?"primary":"inactive"===e?"error":"info"},reset(){this.$refs.form.reset()},Search(){Object(y["a"])(this)},SearchPhone(){Object(y["a"])(this)},handleOnComplete(e){this.code=e},handleClearInput(){this.$refs.otpInput.clearInput()}}},D=C,P=(s("3050"),s("4a4e")),O=Object(P["a"])(D,S,$,!1,null,null,null);t["default"]=O.exports},3050:function(e,t,s){"use strict";s("5711")},"54da":function(e,t,s){"use strict";t["a"]=function(e){const t={};if(!e[0]){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(void 0!==e[t]&&null!==e[t]&&""!==e[t]||delete e[t]);return e}for(const s of e)1==Object.keys(s).length&&s[Object.keys(s)]&&(t[Object.keys(s)]=s[Object.keys(s)]);return t}},"565c":function(e,t,s){"use strict";s("558b");var a=s("9c0c"),r=s("68c4"),o=s("944a");t["a"]=Object(a["a"])(r["a"],Object(o["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",t=>{this.$set(this.errorBag,e._uid,t)},{immediate:!0}),s={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=e.$watch("shouldValidate",a=>{a&&(this.errorBag.hasOwnProperty(e._uid)||(s.valid=t(e)))}):s.valid=t(e),s},validate(){return 0===this.inputs.filter(e=>!e.validate(!0)).length},reset(){this.inputs.forEach(e=>e.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(e=>e.resetValidation()),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find(t=>t._uid===e._uid);if(!t)return;const s=this.watchers.find(e=>e._uid===t._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(e=>e._uid!==t._uid),this.inputs=this.inputs.filter(e=>e._uid!==t._uid),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},5711:function(e,t,s){},"6ece":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));const a=e=>{""!==e.search?""!==e.oldVal?e.oldVal!==e.search&&(e.oldVal=e.search,e.pagination.current_page=1,e.fetchData()):(""!==e.search&&(e.pagination.current_page=1,e.fetchData()),e.oldVal=e.search):e.oldVal=""}}}]);
//# sourceMappingURL=chunk-25fe60ee.b537f95e.js.map