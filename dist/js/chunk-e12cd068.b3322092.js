(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e12cd068"],{"4bd4":function(e,t,s){"use strict";var a=s("5530"),r=(s("caad"),s("2532"),s("07ac"),s("4de4"),s("159b"),s("7db0"),s("58df")),o=s("7e2b"),i=s("3206");t["a"]=Object(r["a"])(o["a"],Object(i["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var t=this,s=function(e){return e.$watch("hasError",(function(s){t.$set(t.errorBag,e._uid,s)}),{immediate:!0})},a={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=e.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(e._uid)||(a.valid=s(e)))})):a.valid=s(e),a},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var t=this.inputs.find((function(t){return t._uid===e._uid}));if(t){var s=this.watchers.find((function(e){return e._uid===t._uid}));s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==t._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},"4fad":function(e,t,s){var a=s("23e7"),r=s("6f53").entries;a({target:"Object",stat:!0},{entries:function(e){return r(e)}})},"6eceb":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));s("ac1f"),s("841c");var a=function(e){""!==e.search?""!==e.oldVal?e.oldVal!==e.search&&(e.oldVal=e.search,e.pagination.current_page=1,e.fetchData()):(""!==e.search&&(e.pagination.current_page=1,e.fetchData()),e.oldVal=e.search):e.oldVal=""}},"90e2":function(e,t,s){"use strict";s("9dcd")},"9dcd":function(e,t,s){},eeca:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-row",{staticClass:"mb-n6"},[s("v-col",[s("v-btn",{staticClass:"btn-primary",on:{click:function(t){return e.openAddModal()}}},[s("v-icon",[e._v("mdi-plus")])],1)],1)],1),s("v-row",{attrs:{justify:"center"}},[s("v-col",[s("v-card",{staticClass:"pa-2"},[s("v-card-title",{staticClass:"my-auto"},[e._v(" ຂໍ້ມູນ Users ("+e._s(e.pagination.total)+") "),s("v-divider",{staticClass:"mx-4",attrs:{vertical:""}}),s("v-spacer"),s("v-row",[s("v-col",[s("v-select",{attrs:{outlined:"",dense:"",items:e.roles,"item-text":"name","item-value":"name",label:"Roles",multiple:""},on:{input:function(t){return e.fetchData()}},model:{value:e.selectedRoles,callback:function(t){e.selectedRoles=t},expression:"selectedRoles"}}),s("v-spacer")],1),s("v-col",[s("v-text-field",{attrs:{clearable:"","prepend-inner-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":"",outlined:"",dense:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Search()}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1)],1),s("v-data-table",{attrs:{headers:e.headers,items:e.users,search:e.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:e._u([{key:"item.roles",fn:function(t){var a=t.item;return[s("div",e._l(a.roles,(function(t,a){return s("span",{key:a},[s("v-chip",{staticClass:"mr-1 my-1",attrs:{color:"error"}},[e._v(" "+e._s(t.name)+" ")])],1)})),0)]}},{key:"item.permissions",fn:function(t){var a=t.item;return[s("div",e._l(a.permissions,(function(t,a){return s("span",{key:a},[s("v-chip",{staticClass:"mr-1 my-1",attrs:{color:"success"}},[e._v(e._s(t.name))])],1)})),0)]}},{key:"item.status",fn:function(t){var a=t.item;return[s("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.switchStatus(a.id)}}},[e._v(" mdi-account-multiple-remove ")])]}},{key:"item.actions",fn:function(t){var a=t.item;return[s("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[s("v-icon",e._g(e._b({staticClass:"mr-2",attrs:{color:"primary",dark:"",medium:""}},"v-icon",r,!1),a),[e._v("mdi-dots-vertical")])]}}],null,!0)},[s("v-list",[s("v-list-item",{attrs:{link:""},on:{click:function(t){return e.openModalRole(a)}}},[s("v-list-item-title",[s("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-plus ")]),e._v(" ເພີ່ມ Role ")],1)],1),s("v-list-item",{attrs:{link:""},on:{click:function(t){return e.openModalUpdateRole(a)}}},[s("v-list-item-title",[s("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-key-remove ")]),e._v(" ຖອນ Role ")],1)],1),s("v-list-item",{attrs:{link:""},on:{click:function(t){return e.openModalPermission(a)}}},[s("v-list-item-title",[s("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-plus ")]),e._v(" ເພີ່ມ Permission ")],1)],1),s("v-list-item",{attrs:{link:""},on:{click:function(t){return e.openModalUpdatePermissoin(a)}}},[s("v-list-item-title",[s("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-key-remove ")]),e._v(" ຖອນ Permission ")],1)],1),s("v-list-item",{attrs:{link:""},on:{click:function(t){return e.OpenModalEdit(a)}}},[s("v-list-item-title",[s("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-pencil ")]),e._v(" ແກ້ໄຂ ")],1)],1),s("v-list-item",{attrs:{link:""},on:{click:function(t){return e.resetPassword(a)}}},[s("v-list-item-title",[s("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-key ")]),e._v(" Reset Password ")],1)],1),s("v-list-item",{attrs:{link:""},on:{click:function(t){return e.deleteItem(a.id)}}},[s("v-list-item-title",[s("v-icon",{attrs:{small:""}},[e._v(" mdi-delete ")]),e._v(" ລຶບ ")],1)],1)],1)],1)]}}])}),s("br"),[e.pagination.total_pages>1?s("Pagination",{attrs:{pagination:e.pagination,offset:e.offset},on:{paginate:function(t){return e.fetchData()}}}):e._e()]],2)],1)],1),s("ModalAdd",[[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Add User")])]),s("v-card-text",[s("v-container",[s("v-form",{ref:"form",attrs:{"lazy-validation":""}},[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"Name *",required:"",rules:e.nameRules},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),s("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.name)+" ")])],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{staticClass:"input-number",attrs:{label:"ເບີໂທ *",required:"",rules:e.phoneRules,type:"number"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}}),s("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.phone)+" ")])],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"Email *",required:"",rules:e.emailRules},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),s("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.email)+" ")])],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"Password *",type:"password",rules:e.passwordRules,required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),s("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.password)+" ")])],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"Password Confirm *",type:"password",rules:e.passwordConfirmRules,required:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.AddItem.apply(null,arguments)}},model:{value:e.user.password_confirmation,callback:function(t){e.$set(e.user,"password_confirmation",t)},expression:"user.password_confirmation"}}),s("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.password_confirmation)+" ")])],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.closeAddModal()}}},[e._v(" Close ")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.AddItem()}}},[e._v(" Save ")])],1)],1)],1)]],2),s("ModalEdit",{scopedSlots:e._u([{key:"default",fn:function(){return[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Update User")])]),s("v-card-text",[s("v-container",[s("v-form",{ref:"form",attrs:{"lazy-validation":""}},[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"Name *",required:"",rules:e.nameRules},model:{value:e.edit_user.name,callback:function(t){e.$set(e.edit_user,"name",t)},expression:"edit_user.name"}}),s("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.name)+" ")])],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{staticClass:"input-number",attrs:{label:"ເບີໂທ *",required:"",rules:e.phoneRules,type:"number"},model:{value:e.edit_user.phone,callback:function(t){e.$set(e.edit_user,"phone",t)},expression:"edit_user.phone"}}),s("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.phone)+" ")])],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"Email *",required:"",rules:e.emailRules},model:{value:e.edit_user.email,callback:function(t){e.$set(e.edit_user,"email",t)},expression:"edit_user.email"}}),s("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.email)+" ")])],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.closeUpdateModal()}}},[e._v(" Close ")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.updateItem()}}},[e._v(" Update ")])],1)],1)],1)]},proxy:!0}])}),s("v-dialog",{attrs:{"max-width":"720px",persistent:""},model:{value:e.changePasswordDialog,callback:function(t){e.changePasswordDialog=t},expression:"changePasswordDialog"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Reset Password "),s("span",[s("a",[e._v(e._s(e.edit_user.name))])])])]),s("v-card-text",[s("v-container",[s("v-form",{ref:"form",attrs:{"lazy-validation":""}},[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"Password *",type:"password",rules:e.passwordRules,required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),s("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.password)+" ")])],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"Password Confirm *",type:"password",rules:e.passwordConfirmRules,required:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.AddItem.apply(null,arguments)}},model:{value:e.password_confirmation,callback:function(t){e.password_confirmation=t},expression:"password_confirmation"}}),s("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.password_confirmation)+" ")])],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.changePasswordDialog=!1}}},[e._v(" Close ")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.resetPasswordAcion}},[e._v(" Change ")])],1)],1)],1)],1),s("v-dialog",{attrs:{"max-width":"720px",persistent:""},model:{value:e.roleDialog,callback:function(t){e.roleDialog=t},expression:"roleDialog"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Add Role to "),s("span",[s("a",[e._v(e._s(e.edit_user.name))])])])]),s("v-card-text",[s("v-container",[s("v-form",{ref:"form",attrs:{"lazy-validation":""}},[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-select",{attrs:{required:"",items:e.roles,"item-text":"name","item-value":"name",label:"Role",multiple:"",rules:e.rulePermissionRole},model:{value:e.edit_user.roles,callback:function(t){e.$set(e.edit_user,"roles",t)},expression:"edit_user.roles"}}),s("p",{staticClass:"errors"},[e._v(" "+e._s(e.errormsg)+" ")])],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.roleDialog=!1}}},[e._v(" Close ")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.AddRole}},[e._v(" Add ")])],1)],1)],1)],1),s("v-dialog",{attrs:{"max-width":"720px",persistent:""},model:{value:e.updateRoleDialog,callback:function(t){e.updateRoleDialog=t},expression:"updateRoleDialog"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Remove Role from "),s("span",[s("a",[e._v(e._s(e.edit_user.name))])])])]),s("v-card-text",[s("v-container",[s("v-form",{ref:"form",attrs:{"lazy-validation":""}},[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-select",{attrs:{required:"",items:e.revokeRoles,"item-text":"name","item-value":"name",label:"Role",multiple:"",rules:e.rulePermissionRole},model:{value:e.selectedRole,callback:function(t){e.selectedRole=t},expression:"selectedRole"}}),s("p",{staticClass:"errors"},[e._v(" "+e._s(e.errormsg)+" ")])],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.updateRoleDialog=!1}}},[e._v(" Close ")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.UpdateRole}},[e._v(" Remove ")])],1)],1)],1)],1),s("v-dialog",{attrs:{"max-width":"720px",persistent:""},model:{value:e.permissionDialog,callback:function(t){e.permissionDialog=t},expression:"permissionDialog"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Add Permission to "),s("span",[s("a",[e._v(e._s(e.edit_user.name))])])])]),s("v-card-text",[s("v-container",[s("v-form",{ref:"form",attrs:{"lazy-validation":""}},[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-select",{attrs:{required:"",items:e.permissions,"item-text":"name","item-value":"name",label:"Permission *",multiple:"",rules:e.rulePermission},model:{value:e.edit_user.permissions,callback:function(t){e.$set(e.edit_user,"permissions",t)},expression:"edit_user.permissions"}}),s("p",{staticClass:"errors"},[e._v(" "+e._s(e.errormsg)+" ")])],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.permissionDialog=!1}}},[e._v(" Close ")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.AddPermission}},[e._v(" Add ")])],1)],1)],1)],1),s("v-dialog",{attrs:{"max-width":"720px",persistent:""},model:{value:e.updatePermissionDialog,callback:function(t){e.updatePermissionDialog=t},expression:"updatePermissionDialog"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Remove Permission from "),s("span",[s("a",[e._v(e._s(e.edit_user.name))])])])]),s("v-card-text",[s("v-container",[s("v-form",{ref:"form",attrs:{"lazy-validation":""}},[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-select",{attrs:{required:"",items:e.revokes,"item-text":"name","item-value":"name",label:"Permission",multiple:"",rules:e.rulePermission},model:{value:e.selectedPermission,callback:function(t){e.selectedPermission=t},expression:"selectedPermission"}}),s("p",{staticClass:"errors"},[e._v(" "+e._s(e.errormsg)+" ")])],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.updatePermissionDialog=!1}}},[e._v(" Close ")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.UpdatePermission}},[e._v(" Remove ")])],1)],1)],1)],1),s("ModalDelete",[[s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.deleteItemConfirm}},[e._v("OK")]),s("v-spacer")],1)]],2)],1)},r=[],o=s("3835"),i=(s("4fad"),s("d81d"),s("b0c0"),s("4de4"),s("caad"),s("6eceb")),n={title:function(){return"Vientiane Waste Co-Dev|User"},name:"User",data:function(){return{headers:[{text:"User Name",value:"name"},{text:"Phone",value:"phone",sortable:!1},{text:"Email",value:"email",sortable:!1},{text:"Role",value:"roles",sortable:!1},{text:"Permission",value:"permissions",sortable:!1},{text:"Status",value:"status",sortable:!1,align:"center"},{text:"",value:"actions",sortable:!1}],loading:!1,users:[],user:{},edit_user:{},userID:"",server_errors:{email:"",roleId:""},errormsg:"",roleDialog:!1,updateRoleDialog:!1,changePasswordDialog:!1,selectedRole:"",selectedRoles:[],roles:[],revokeRoles:[],permissionDialog:!1,updatePermissionDialog:!1,selectedPermission:"",permissions:[],revokes:[],offset:12,pagination:{},per_page:12,search:"",oldVal:"",password:"",password_confirmation:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"},function(e){return e&&e.length>=8||"Password must be more than 8 characters"}],passwordConfirmRules:[function(e){return!!e||"Password Confirm is required"},function(e){return e&&e.length>=8||"Password must be more than 8 characters"}],nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length>=2||"Name must be less than 2 characters"}],phoneRules:[function(e){return!!e||"Phone is required"},function(e){return e&&e.length>=7&&e.length<=11||"Phone number must be  7 - 11 numbers"}],rulePermission:[function(e){return!!e||"Permission is required"}],rulePermissionRole:[function(e){return!!e||"Role is required"}]}},methods:{openAddModal:function(){this.$store.commit("modalAdd_State",!0)},AddItem:function(){var e=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("user-setting/user",this.user).then((function(t){200==t.data.code&&setTimeout((function(){e.loading=!1,e.closeAddModal(),e.user={},e.fetchData(),e.reset(),e.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})}),300)})).catch((function(t){if(e.loading=!1,e.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message}),e.fetchData(),422==t.response.status)for(var s=t.response.data.errors,a=0,r=Object.entries(s);a<r.length;a++){var i=Object(o["a"])(r[a],2),n=i[0],l=i[1];e.server_errors[n]=l[0]}})))},fetchData:function(){var e=this;this.$store.commit("Loading_State",!0),this.$axios.get("user-setting/user",{params:{page:this.pagination.current_page,per_page:this.per_page,roles:this.selectedRoles}}).then((function(t){200==t.data.code&&setTimeout((function(){e.loading=!1,e.$store.commit("Loading_State",!1),e.users=t.data.data.data,e.pagination=t.data.data.pagination}),300)})).catch((function(t){if(e.$store.commit("Loading_State",!1),e.fetchData(),422==t.response.status)for(var s=t.response.data.errors,a=0,r=Object.entries(s);a<r.length;a++){var i=Object(o["a"])(r[a],2),n=i[0],l=i[1];e.server_errors[n]=l[0]}}))},fetchRole:function(){var e=this,t=[];this.$axios.get("user-setting/role").then((function(s){200==s.data.code&&setTimeout((function(){e.loading=!1,e.roles=s.data.data,e.edit_user.roles.map((function(e){t.push(e.name)})),e.revokeRoles=s.data.data.filter((function(e){return t.includes(e.name)}))}),300)})).catch((function(t){if(e.loading=!1,e.fetchData(),422==t.response.status)for(var s=t.response.data.errors,a=0,r=Object.entries(s);a<r.length;a++){var i=Object(o["a"])(r[a],2),n=i[0],l=i[1];e.server_errors[n]=l[0]}}))},fetchPermission:function(){var e=this,t=[];this.$axios.get("user-setting/permission").then((function(s){200==s.data.code&&setTimeout((function(){e.loading=!1,e.permissions=s.data.data,e.edit_user.permissions.map((function(e){t.push(e.name)})),e.revokes=s.data.data.filter((function(e){return t.includes(e.name)}))}),300)})).catch((function(t){if(e.loading=!1,e.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message}),422==t.response.status)for(var s=t.response.data.errors,a=0,r=Object.entries(s);a<r.length;a++){var i=Object(o["a"])(r[a],2),n=i[0],l=i[1];e.server_errors[n]=l[0]}}))},closeAddModal:function(){this.$store.commit("modalAdd_State",!1)},resetPassword:function(e){this.changePasswordDialog=!0,this.edit_user=e},resetPasswordAcion:function(){var e=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.put("user-setting/reset-password/"+this.edit_user.id,{password:this.password,password_confirmation:this.password_confirmation}).then((function(t){200==t.data.code&&setTimeout((function(){e.loading=!1,e.edit_user={},e.reset(),e.fetchData(),e.changePasswordDialog=!1,e.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})}),300)})).catch((function(t){if(e.loading=!1,e.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message}),422==t.response.status)for(var s=t.response.data.errors,a=0,r=Object.entries(s);a<r.length;a++){var i=Object(o["a"])(r[a],2),n=i[0],l=i[1];e.server_errors[n]=l[0]}})))},OpenModalEdit:function(e){this.edit_user=e,this.$store.commit("modalEdit_State",!0)},updateItem:function(){var e=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.put("user-setting/user/"+this.edit_user.id,this.edit_user).then((function(t){200==t.data.code&&setTimeout((function(){e.loading=!1,e.closeUpdateModal(),e.edit_user={},e.reset(),e.fetchData(),e.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})}),300)})).catch((function(t){if(e.loading=!1,e.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message}),e.fetchData(),422==t.response.status)for(var s=t.response.data.errors,a=0,r=Object.entries(s);a<r.length;a++){var i=Object(o["a"])(r[a],2),n=i[0],l=i[1];e.server_errors[n]=l[0]}})))},closeUpdateModal:function(){this.$store.commit("modalEdit_State",!1)},closeDelete:function(){this.$store.commit("modalDelete_State",!1)},deleteItem:function(e){this.userID=e,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm:function(){var e=this;this.loading=!0,this.$axios.delete("user-setting/user/"+this.userID).then((function(t){200==t.data.code&&setTimeout((function(){e.loading=!1,e.$store.commit("modalDelete_State",!1),e.fetchData(),e.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})}),300)})).catch((function(t){e.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message}),e.$store.commit("modalDelete_State",!1),e.loading=!1}))},openModalRole:function(e){this.userID=e.id,this.edit_user=e,this.fetchRole(),this.roleDialog=!0},AddRole:function(){var e=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("user-setting/user/"+this.userID+"/give-role",{roles:this.edit_user.roles}).then((function(t){200==t.data.code&&setTimeout((function(){e.loading=!1,e.selectedRole="",e.fetchData(),e.reset(),e.roleDialog=!1,e.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})}),300)})).catch((function(t){422==t.response.data.code&&(e.errormsg=t.response.data.message),e.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message})})),this.loading=!1)},openModalUpdateRole:function(e){this.userID=e.id,this.edit_user=e,this.fetchRole(),this.updateRoleDialog=!0},UpdateRole:function(){var e=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("user-setting/user/"+this.userID+"/revoke-role",{roles:this.selectedRole}).then((function(t){200==t.data.code&&setTimeout((function(){e.loading=!1,e.selectedRole="",e.fetchData(),e.reset(),e.updateRoleDialog=!1,e.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})}),300)})).catch((function(t){422==t.response.data.code&&(e.errormsg=t.response.data.message),e.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message}),e.fetchData()})),this.loading=!1,this.updateRoleDialog=!1)},openModalPermission:function(e){this.userID=e.id,this.edit_user=e,this.fetchPermission(),this.permissionDialog=!0},AddPermission:function(){var e=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("user-setting/user/"+this.userID+"/give-permission",{permissions:this.edit_user.permissions}).then((function(t){200==t.data.code&&setTimeout((function(){e.loading=!1,e.fetchData(),e.reset(),e.permissionDialog=!1,e.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})}),300)})).catch((function(t){422==t.response.data.code&&(e.errormsg=t.response.data.message),e.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message}),e.fetchData()})),this.loading=!1,this.permissionDialog=!1)},openModalUpdatePermissoin:function(e){this.userID=e.id,this.edit_user=e,this.fetchPermission(),this.updatePermissionDialog=!0},UpdatePermission:function(){var e=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("user-setting/user/"+this.userID+"/revoke-permission",{permissions:this.selectedPermission}).then((function(t){200==t.data.code&&setTimeout((function(){e.loading=!1,e.fetchData(),e.reset(),e.updatePermissionDialog=!1,e.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})}),300)})).catch((function(t){422==t.response.data.code&&(e.errormsg=t.response.data.message),e.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message}),e.fetchData()})),this.loading=!1,this.updatePermissionDialog=!1)},switchStatus:function(e){var t=this;this.loading=!0,this.$axios.put("user-setting/update-status/"+e,{status:this.status}).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.fetchData(),t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})}),300)})).catch((function(e){t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message})}))},reset:function(){this.$refs.form.reset()},Search:function(){Object(i["a"])(this)}},watch:{"user.name":function(){this.server_errors.name=""},"user.phone":function(){this.server_errors.phone=""},"user.email":function(){this.server_errors.email=""},"user.password":function(){this.server_errors.password=""},"edit_user.name":function(){this.server_errors.name=""},"edit_user.phone":function(){this.server_errors.phone=""},"edit_user.email":function(){this.server_errors.email=""},"edit_user.password":function(){this.server_errors.password=""},search:function(e){""==e&&this.fetchData()}},created:function(){this.fetchRole(),this.fetchData()}},l=n,c=(s("90e2"),s("2877")),d=s("6544"),u=s.n(d),m=s("8336"),v=s("b0af"),f=s("99d9"),p=s("cc20"),h=s("62ad"),g=s("a523"),_=s("8fea"),b=s("169a"),k=s("ce7e"),x=s("4bd4"),w=s("132d"),D=s("8860"),R=s("da13"),$=s("5d23"),C=s("e449"),P=s("0fd9"),y=s("b974"),S=s("2fa4"),T=s("8654"),V=Object(c["a"])(l,a,r,!1,null,null,null);t["default"]=V.exports;u()(V,{VBtn:m["a"],VCard:v["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VChip:p["a"],VCol:h["a"],VContainer:g["a"],VDataTable:_["a"],VDialog:b["a"],VDivider:k["a"],VForm:x["a"],VIcon:w["a"],VList:D["a"],VListItem:R["a"],VListItemTitle:$["d"],VMenu:C["a"],VRow:P["a"],VSelect:y["a"],VSpacer:S["a"],VTextField:T["a"]})}}]);
//# sourceMappingURL=chunk-e12cd068.b3322092.js.map