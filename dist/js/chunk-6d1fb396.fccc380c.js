(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d1fb396"],{"4bd4":function(e,t,r){"use strict";var a=r("5530"),s=(r("caad"),r("2532"),r("07ac"),r("4de4"),r("159b"),r("7db0"),r("58df")),i=r("7e2b"),n=r("3206");t["a"]=Object(s["a"])(i["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var t=this,r=function(e){return e.$watch("hasError",(function(r){t.$set(t.errorBag,e._uid,r)}),{immediate:!0})},a={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=e.$watch("shouldValidate",(function(s){s&&(t.errorBag.hasOwnProperty(e._uid)||(a.valid=r(e)))})):a.valid=r(e),a},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var t=this.inputs.find((function(t){return t._uid===e._uid}));if(t){var r=this.watchers.find((function(e){return e._uid===t._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==t._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},"4fad":function(e,t,r){var a=r("23e7"),s=r("6f53").entries;a({target:"Object",stat:!0},{entries:function(e){return s(e)}})},"6eceb":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("ac1f"),r("841c");var a=function(e){""!==e.search?""!==e.oldVal?e.oldVal!==e.search&&(e.oldVal=e.search,e.pagination.current_page=1,e.fetchData()):(""!==e.search&&(e.pagination.current_page=1,e.fetchData()),e.oldVal=e.search):e.oldVal=""}},"81fe":function(e,t,r){"use strict";r("d5cf")},"8ba4":function(e,t,r){var a=r("23e7"),s=r("eac5");a({target:"Number",stat:!0},{isInteger:s})},b2ac:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{staticClass:"mb-n6"},[r("v-col",[r("v-btn",{staticClass:"btn-primary",on:{click:function(t){return e.openAddModal()}}},[r("v-icon",[e._v("mdi-plus")])],1)],1)],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",[r("v-card",{staticClass:"pa-2"},[r("v-card-title",[e._v(" ຂໍ້ມູນ Driver "),r("v-spacer"),r("v-text-field",{attrs:{clearable:"","prepend-inner-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Search()}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),r("v-data-table",{attrs:{headers:e.headers,items:e.data,search:e.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:e._u([{key:"item.media",fn:function(t){var a=t.item;return e._l(a.media,(function(t,a){return r("v-avatar",{key:a,attrs:{size:"36px"}},[t.thumb?r("img",{attrs:{src:t.thumb}}):e._e()])}))}},{key:"item.status",fn:function(t){var a=t.item;return[r("v-chip",{attrs:{color:e.statusColor(a.status)},on:{click:function(t){return e.switchStatus(a.id)}}},[e._v(e._s(a.status))])]}},{key:"item.actions",fn:function(t){var a=t.item;return[r("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.OpenModalEdit(a)}}},[e._v(" mdi-pencil ")]),r("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(a.id)}}},[e._v(" mdi-delete ")])]}}])}),r("br"),[e.pagination.total_pages>1?r("Pagination",{attrs:{pagination:e.pagination,offset:e.offset},on:{paginate:function(t){return e.fetchData()}}}):e._e()]],2)],1)],1),r("ModalAdd",[[r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v("Add Driver")])]),r("v-card-text",[r("v-container",[r("v-form",{ref:"form",attrs:{"lazy-validation":""}},[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("div",{staticClass:"field"},[r("div",{staticClass:"file is-large is-boxed"},[r("label",{staticClass:"file-label"},[r("input",{ref:"image",staticClass:"file-input input-file-image",attrs:{type:"file",name:"image",accept:"image/*"},on:{change:e.onFileChange}}),r("span",{staticClass:"file-cta"},[r("span",{staticClass:"file-icon"},[r("v-icon",{staticClass:"fas fa-cloud-upload",staticStyle:{"font-size":"60px !important",color:"#719aff",cursor:"pointer"}},[e._v("mdi-cloud-upload")])],1),r("span",{staticClass:"file-label",staticStyle:{"margin-top":"10px","text-transform":"uppercase","padding-top":"20px"}},[e._v(" Choose Profile ")])])])])])])],1),r("v-row",[e.imageUrl?r("v-col",{staticClass:"mt-5",attrs:{align:"center"}},[r("v-avatar",{staticClass:"avatar rounded",attrs:{size:"94px"}},[r("img",{attrs:{src:e.imageUrl,alt:""}})])],1):e._e()],1),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Name *",required:"",rules:e.nameRules},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),r("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.name)+" ")])],1),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Surname *",required:"",rules:e.nameRules},model:{value:e.user.surname,callback:function(t){e.$set(e.user,"surname",t)},expression:"user.surname"}}),r("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.surname)+" ")])],1),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{staticClass:"input-number",attrs:{label:"ເບີໂທ *",required:"",rules:e.phoneRules,type:"number"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}}),r("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.phone)+" ")])],1),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Email *",required:"",rules:e.emailRules},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),r("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.email)+" ")])],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{staticClass:"input-number",attrs:{label:"ທະບຽນລົດ *",required:"",rules:e.carnumberRules,type:"number"},model:{value:e.user.car_number,callback:function(t){e.$set(e.user,"car_number",t)},expression:"user.car_number"}}),r("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.car_number)+" ")])],1),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Password *",type:"password",rules:e.passwordRules,required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),r("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.password)+" ")])],1),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Password Confirm *",type:"password",rules:e.passwordConfirmRules,required:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.AddItem.apply(null,arguments)}},model:{value:e.user.password_confirmation,callback:function(t){e.$set(e.user,"password_confirmation",t)},expression:"user.password_confirmation"}}),r("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.password_confirmation)+" ")])],1)],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.closeAddModal()}}},[e._v(" Close ")]),r("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.AddItem()}}},[e._v(" Save ")])],1)],1)],1)]],2),r("ModalEdit",{scopedSlots:e._u([{key:"default",fn:function(){return[r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v("Update Driver")])]),r("v-card-text",[r("v-container",[r("v-form",{ref:"form",attrs:{"lazy-validation":""}},[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("div",{staticClass:"field"},[r("div",{staticClass:"file is-large is-boxed"},[r("label",{staticClass:"file-label"},[r("input",{staticClass:"file-input input-file-image",attrs:{type:"file",accept:"image/*"},on:{change:e.onFileChange}}),r("span",{staticClass:"file-cta"},[r("span",{staticClass:"file-icon"},[r("v-icon",{staticClass:"fas fa-cloud-upload",staticStyle:{"font-size":"60px !important",color:"#719aff",cursor:"pointer"}},[e._v("mdi-cloud-upload")])],1),r("span",{staticClass:"file-label",staticStyle:{"margin-top":"10px","text-transform":"uppercase","padding-top":"20px"}},[e._v(" Choose Profile ")])])])])])])],1),r("v-row",[e.imageUrl?r("v-col",{staticClass:"mt-5",attrs:{align:"center"}},[r("v-avatar",{staticClass:"avatar rounded",attrs:{size:"94px"}},[r("img",{attrs:{src:e.imageUrl,alt:""}})])],1):r("v-col",{staticClass:"mt-5",attrs:{align:"center"}},e._l(e.edit_driver.media,(function(e,t){return r("v-avatar",{key:t,staticClass:"avatar rounded mr-6",attrs:{size:"94px"}},[r("img",{attrs:{src:e.thumb}})])})),1)],1),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Name *",required:"",rules:e.nameRules},model:{value:e.edit_driver.name,callback:function(t){e.$set(e.edit_driver,"name",t)},expression:"edit_driver.name"}}),r("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.name)+" ")])],1),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Surname *",required:"",rules:e.nameRules},model:{value:e.edit_driver.surname,callback:function(t){e.$set(e.edit_driver,"surname",t)},expression:"edit_driver.surname"}}),r("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.surname)+" ")])],1),r("v-col",{attrs:{cols:"6"}},[e.edit_driver.user?r("v-text-field",{staticClass:"input-number",attrs:{label:"ເບີໂທ *",required:"",rules:e.phoneRules,type:"number"},model:{value:e.edit_driver.user.phone,callback:function(t){e.$set(e.edit_driver.user,"phone",t)},expression:"edit_driver.user.phone"}}):e._e(),r("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.phone)+" ")])],1),r("v-col",{attrs:{cols:"6"}},[e.edit_driver.user?r("v-text-field",{attrs:{label:"Email *",required:"",rules:e.emailRules},model:{value:e.edit_driver.user.email,callback:function(t){e.$set(e.edit_driver.user,"email",t)},expression:"edit_driver.user.email"}}):e._e(),r("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.email)+" ")])],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{staticClass:"input-number",attrs:{label:"ທະບຽນລົດ *",required:"",rules:e.carnumberRules,type:"number"},model:{value:e.edit_driver.car_number,callback:function(t){e.$set(e.edit_driver,"car_number",t)},expression:"edit_driver.car_number"}}),r("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.car_number)+" ")])],1)],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.closeUpdateModal()}}},[e._v(" Close ")]),r("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.updateItem()}}},[e._v(" Update ")])],1)],1)],1)]},proxy:!0}])}),r("ModalDelete",[[r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),r("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.deleteItemConfirm}},[e._v("OK")]),r("v-spacer")],1)]],2)],1)},s=[],i=r("3835"),n=(r("8ba4"),r("a9e3"),r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("9861"),r("b0c0"),r("4fad"),r("ac1f"),r("841c"),r("d81d"),r("6eceb")),o={name:"User",data:function(){return{headers:[{text:"Name",value:"name"},{text:"Surname Name",value:"surname"},{text:"Car Number",value:"car_number"},{text:"Phone",value:"user.phone",sortable:!1},{text:"Email",value:"user.email",sortable:!1},{text:"Status",value:"status",sortable:!1},{text:"Image",value:"media",sortable:!1},{text:"",value:"actions",sortable:!1}],loading:!1,status:!1,data:[],user:{},edit_driver:{},userID:"",server_errors:{email:"",roleId:""},errormsg:"",image:"",imageUrl:"",offset:12,pagination:{},per_page:12,search:"",oldVal:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"},function(e){return e&&e.length>=8||"Password must be more than 8 characters"}],passwordConfirmRules:[function(e){return!!e||"Password Confirm is required"},function(e){return e&&e.length>=8||"Password must be more than 8 characters"}],nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length>=2||"Name must be less than 2 characters"}],phoneRules:[function(e){return!!e||"Phone is required"},function(e){return e&&e.length>=4&&e.length<=11||"Phone number must be  4 - 11 numbers"}],carnumberRules:[function(e){return!!e||"Car number is required"},function(e){return e&&4==e.length||"Car number must be 4 number"},function(e){return Number.isInteger(Number(e))||"The value must be an integer number"}]}},methods:{onFileChange:function(e){var t=e.target,r=e.target.files[0];this.image=t.files[0],this.imageUrl=URL.createObjectURL(r)},openAddModal:function(){this.$store.commit("modalAdd_State",!0)},AddItem:function(){var e=this,t=new FormData;t.append("name",this.user.name),t.append("surname",this.user.surname),t.append("phone",this.user.phone),t.append("email",this.user.email),t.append("car_number",this.user.car_number),t.append("image",this.image),t.append("password",this.user.password),t.append("password_confirmation",this.user.password_confirmation),1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("driver",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){200==t.data.code&&setTimeout((function(){e.loading=!1,e.closeAddModal(),e.user={},e.imageUrl="",e.imageUrl="",e.fetchData(),e.reset(),e.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})}),300)})).catch((function(t){if(e.loading=!1,e.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message}),e.fetchData(),422==t.response.status)for(var r=t.response.data.errors,a=0,s=Object.entries(r);a<s.length;a++){var n=Object(i["a"])(s[a],2),o=n[0],l=n[1];e.server_errors[o]=l[0]}})))},fetchData:function(){var e=this;this.$store.commit("Loading_State",!0),this.$axios.get("driver",{params:{page:this.pagination.current_page,per_page:this.per_page,filter:this.search}}).then((function(t){200==t.data.code&&setTimeout((function(){e.loading=!1,e.$store.commit("Loading_State",!1),e.data=t.data.data.data,e.pagination=t.data.data.pagination,e.data.map((function(t){"active"==t.status?e.status=!0:e.status=!1}))}),300)})).catch((function(t){if(e.$store.commit("Loading_State",!1),e.fetchData(),422==t.response.status)for(var r=t.response.data.errors,a=0,s=Object.entries(r);a<s.length;a++){var n=Object(i["a"])(s[a],2),o=n[0],l=n[1];e.server_errors[o]=l[0]}}))},closeAddModal:function(){this.$store.commit("modalAdd_State",!1)},OpenModalEdit:function(e){this.edit_driver=e,this.$store.commit("modalEdit_State",!0)},updateItem:function(){var e=this,t=new FormData;t.append("name",this.edit_driver.name),t.append("surname",this.edit_driver.surname),t.append("phone",this.edit_driver.user.phone),t.append("email",this.edit_driver.user.email),t.append("car_number",this.edit_driver.car_number),t.append("image",this.image),t.append("_method","PUT"),1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("driver/"+this.edit_driver.id,t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){200==t.data.code&&setTimeout((function(){e.loading=!1,e.closeUpdateModal(),e.imageUrl="",e.imageUrl="",e.fetchData(),e.reset(),e.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})}),300)})).catch((function(t){if(e.loading=!1,e.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message}),e.fetchData(),422==t.response.status)for(var r=t.response.data.errors,a=0,s=Object.entries(r);a<s.length;a++){var n=Object(i["a"])(s[a],2),o=n[0],l=n[1];e.server_errors[o]=l[0]}})))},closeUpdateModal:function(){this.$store.commit("modalEdit_State",!1)},closeDelete:function(){this.$store.commit("modalDelete_State",!1)},deleteItem:function(e){this.userID=e,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm:function(){var e=this;this.loading=!0,this.$axios.delete("driver/"+this.userID).then((function(t){200==t.data.code&&setTimeout((function(){e.loading=!1,e.$store.commit("modalDelete_State",!1),e.fetchData(),e.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})}),300)})).catch((function(t){e.fetchData(),e.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message}),e.$store.commit("modalDelete_State",!1),e.loading=!1}))},switchStatus:function(e){var t=this;this.loading=!0,this.$axios.post("driver/"+e+"/switch-status").then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.fetchData(),t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})}),300)})).catch((function(e){t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message}),t.fetchData()}))},statusColor:function(e){return"active"==e?"success":"inactive"==e?"error":void 0},reset:function(){this.$refs.form.reset()},Search:function(){Object(n["a"])(this)}},computed:{},watch:{"user.name":function(){this.server_errors.name=""},"user.surname":function(){this.server_errors.surname=""},"user.phone":function(){this.server_errors.phone=""},"user.email":function(){this.server_errors.email=""},"user.car_number":function(){this.server_errors.car_number=""},"user.password":function(){this.server_errors.password=""},"edit_driver.name":function(){this.server_errors.name=""},"edit_driver.surname":function(){this.server_errors.surname=""},"edit_driver.user.phone":function(){this.server_errors.phone=""},"edit_driver.user.email":function(){this.server_errors.email=""},"edit_driver.car_number":function(){this.server_errors.car_number=""},search:function(e){""==e&&this.fetchData()}},created:function(){this.statusColor(),this.fetchData()}},l=o,c=(r("81fe"),r("2877")),u=r("6544"),d=r.n(u),m=r("8212"),f=r("8336"),v=r("b0af"),p=r("99d9"),h=r("cc20"),_=r("62ad"),b=r("a523"),g=r("8fea"),C=r("4bd4"),x=r("132d"),w=r("0fd9"),k=r("2fa4"),$=r("8654"),y=Object(c["a"])(l,a,s,!1,null,null,null);t["default"]=y.exports;d()(y,{VAvatar:m["a"],VBtn:f["a"],VCard:v["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VChip:h["a"],VCol:_["a"],VContainer:b["a"],VDataTable:g["a"],VForm:C["a"],VIcon:x["a"],VRow:w["a"],VSpacer:k["a"],VTextField:$["a"]})},d5cf:function(e,t,r){},eac5:function(e,t,r){var a=r("861d"),s=Math.floor;e.exports=Number.isInteger||function(e){return!a(e)&&isFinite(e)&&s(e)===e}}}]);
//# sourceMappingURL=chunk-6d1fb396.fccc380c.js.map