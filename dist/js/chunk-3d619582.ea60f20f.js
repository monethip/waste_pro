(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d619582"],{"2bfd":function(e,t,s){},"4bd4":function(e,t,s){"use strict";var i=s("5530"),a=(s("caad"),s("2532"),s("07ac"),s("4de4"),s("159b"),s("7db0"),s("58df")),n=s("7e2b"),o=s("3206");t["a"]=Object(a["a"])(n["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var t=this,s=function(e){return e.$watch("hasError",(function(s){t.$set(t.errorBag,e._uid,s)}),{immediate:!0})},i={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=e.$watch("shouldValidate",(function(a){a&&(t.errorBag.hasOwnProperty(e._uid)||(i.valid=s(e)))})):i.valid=s(e),i},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var t=this.inputs.find((function(t){return t._uid===e._uid}));if(t){var s=this.watchers.find((function(e){return e._uid===t._uid}));s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==t._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},"4fad":function(e,t,s){var i=s("23e7"),a=s("6f53").entries;i({target:"Object",stat:!0},{entries:function(e){return a(e)}})},"5ddc":function(e,t,s){"use strict";s("84ac")},"6eceb":function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));s("ac1f"),s("841c");var i=function(e){""!==e.search?""!==e.oldVal?e.oldVal!==e.search&&(e.oldVal=e.search,e.pagination.current_page=1,e.fetchData()):(""!==e.search&&(e.pagination.current_page=1,e.fetchData()),e.oldVal=e.search):e.oldVal=""}},"7bc2":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-row",[s("v-col",[s("v-btn",{staticClass:"btn-primary",on:{click:function(t){return e.openAddModal()}}},[s("v-icon",[e._v("mdi-plus")])],1)],1)],1),s("v-row",{attrs:{justify:"center"}},[s("v-col",[s("v-card",{staticClass:"pa-2"},[s("v-card-title",[e._v(" ຂໍ້ມູນ Roles "),s("v-divider",{staticClass:"mx-4",attrs:{vertical:""}}),s("v-spacer"),s("v-text-field",{attrs:{clearable:"","prepend-inner-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),s("v-data-table",{attrs:{headers:e.headers,items:e.roles,search:e.search,"disable-pagination":!0,expand:"","hide-default-footer":""},scopedSlots:e._u([{key:"item.permissions",fn:function(t){var i=t.item;return[s("div",e._l(i.permissions,(function(t,i){return s("span",{key:i},[s("v-chip",{staticClass:"mr-1 my-1",attrs:{color:"success"}},[e._v(e._s(t.name))])],1)})),0)]}},{key:"item.actions",fn:function(t){var i=t.item;return[s("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return[s("v-icon",e._g(e._b({staticClass:"mr-2",attrs:{color:"primary",dark:"",medium:""}},"v-icon",a,!1),i),[e._v("mdi-dots-vertical")])]}}],null,!0)},[s("v-list",[s("v-list-item",{attrs:{link:""},on:{click:function(t){return e.openModalPermissionRole(i)}}},[s("v-list-item-title",[s("v-icon",{staticClass:"mr-2",attrs:{medium:""}},[e._v(" mdi-plus ")]),e._v(" ເພີ່ມ Permission ")],1)],1),s("v-list-item",{attrs:{link:""},on:{click:function(t){return e.openModalUpdatePermissionRole(i)}}},[s("v-list-item-title",[s("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-key-remove ")]),e._v(" ຖອນ Permission ")],1)],1),s("v-list-item",{attrs:{link:""},on:{click:function(t){return e.OpenModalEdit(i)}}},[s("v-list-item-title",[s("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-pencil ")]),e._v("ແກ້ໄຂ ")],1)],1),s("v-list-item",{attrs:{link:""},on:{click:function(t){return e.deleteItem(i.id)}}},[s("v-list-item-title",[s("v-icon",{attrs:{small:""}},[e._v(" mdi-delete ")]),e._v(" ລຶບ ")],1)],1)],1)],1)]}}])}),s("br"),[e.pagination.total_pages>1?s("Pagination",{attrs:{pagination:e.pagination,offset:e.offset},on:{paginate:function(t){return e.fetchData()}}}):e._e()]],2)],1)],1),s("ModalAdd",[[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Add Role")])]),s("v-card-text",[s("v-container",[s("v-form",{ref:"form",attrs:{"lazy-validation":""}},[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"Name *",required:"",rules:e.nameRules},model:{value:e.role,callback:function(t){e.role=t},expression:"role"}}),s("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.name)+" ")])],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.closeAddModal()}}},[e._v(" Close ")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.AddItem()}}},[e._v(" Save ")])],1)],1)],1)]],2),s("ModalEdit",{scopedSlots:e._u([{key:"default",fn:function(){return[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Update Role "),s("span",[s("a",[e._v(e._s(e.edit_role.name))])])])]),s("v-card-text",[s("v-container",[s("v-form",{ref:"form",attrs:{"lazy-validation":""}},[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"Name *",required:"",rules:e.nameRules},model:{value:e.edit_role.name,callback:function(t){e.$set(e.edit_role,"name",t)},expression:"edit_role.name"}}),s("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.name)+" ")])],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.closeUpdateModal()}}},[e._v(" Close ")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.updateItem()}}},[e._v(" Update ")])],1)],1)],1)]},proxy:!0}])}),s("ModalDelete",[[s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.deleteItemConfirm}},[e._v("OK")]),s("v-spacer")],1)]],2),s("v-dialog",{attrs:{"max-width":"720px",persistent:""},model:{value:e.roleDialog,callback:function(t){e.roleDialog=t},expression:"roleDialog"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Add Permission to Role "),s("span",[s("a",[e._v(e._s(e.edit_role.name))])])])]),s("v-card-text",[s("v-container",[s("v-form",{ref:"form",attrs:{"lazy-validation":""}},[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-autocomplete",{attrs:{required:"",items:e.permissions,"item-text":"name","item-value":"name",label:"Permission *",multiple:"",rules:e.rulePermission},scopedSlots:e._u([{key:"selection",fn:function(t){return[s("v-chip",e._b({attrs:{"input-value":t.selected,color:"success"},on:{click:t.select}},"v-chip",t.attrs,!1),[e._v(" "+e._s(t.item.name)+" ")])]}}]),model:{value:e.selectedPermission,callback:function(t){e.selectedPermission=t},expression:"selectedPermission"}}),s("p",{staticClass:"errors"},[e._v(" "+e._s(e.errormsg)+" ")])],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.roleDialog=!1}}},[e._v(" Close ")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.AddPermissionRole}},[e._v(" Add ")])],1)],1)],1)],1),s("v-dialog",{attrs:{"max-width":"720px",persistent:""},model:{value:e.updateRoleDialog,callback:function(t){e.updateRoleDialog=t},expression:"updateRoleDialog"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Remove Permission from role "),s("span",[s("a",[e._v(e._s(e.edit_role.name))])])])]),s("v-card-text",[s("v-container",[s("v-form",{ref:"form",attrs:{"lazy-validation":""}},[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-select",{attrs:{required:"",items:e.revokes,"item-text":"name","item-value":"name",label:"Permission",multiple:"",rules:e.rulePermission},model:{value:e.selectRevokePermission,callback:function(t){e.selectRevokePermission=t},expression:"selectRevokePermission"}}),s("p",{staticClass:"errors"},[e._v(" "+e._s(e.errormsg)+" ")])],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.updateRoleDialog=!1}}},[e._v(" Close ")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.updatePermissionRole}},[e._v(" Remove ")])],1)],1)],1)],1)],1)},a=[],n=s("3835"),o=(s("4fad"),s("ac1f"),s("841c"),s("d81d"),s("b0c0"),s("4de4"),s("caad"),s("a434"),s("6eceb")),r={name:"Package",data:function(){return{headers:[{text:"Role Name",value:"name"},{text:"Permission",value:"permissions"},{text:"",value:"actions",sortable:!1,align:"center"}],loading:!1,roleDialog:!1,updateRoleDialog:!1,roles:[],role:"",edit_role:{},roleID:"",server_errors:{},errormsg:"",selectedPermission:"",selectRevokePermission:"",permissions:[],edit_permission:{},revokes:[],offset:12,pagination:{},per_page:12,search:"",oldVal:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length>=2||"Name must be less than 2 characters"}],rulePermission:[function(e){return!!e||"Permission is required"}]}},methods:{openAddModal:function(){this.$store.commit("modalAdd_State",!0)},AddItem:function(){var e=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("user-setting/role",{name:this.role}).then((function(t){200==t.data.code&&setTimeout((function(){e.loading=!1,e.closeAddModal(),e.role="",e.fetchData(),e.reset(),e.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})}),300)})).catch((function(t){if(e.loading=!1,e.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message}),e.fetchData(),422==t.response.status)for(var s=t.response.data.errors,i=0,a=Object.entries(s);i<a.length;i++){var o=Object(n["a"])(a[i],2),r=o[0],l=o[1];e.server_errors[r]=l[0]}})))},fetchData:function(){var e=this;this.$store.commit("Loading_State",!0),this.$axios.get("user-setting/role",{params:{page:this.pagination.current_page,per_page:this.per_page,filter:this.search}}).then((function(t){200==t.data.code&&setTimeout((function(){e.$store.commit("Loading_State",!1),e.roles=t.data.data.data,e.pagination=t.data.data.pagination}),300)})).catch((function(t){if(e.$store.commit("Loading_State",!1),e.fetchData(),422==t.response.status)for(var s=t.response.data.errors,i=0,a=Object.entries(s);i<a.length;i++){var o=Object(n["a"])(a[i],2),r=o[0],l=o[1];e.server_errors[r]=l[0]}}))},fetchPermission:function(){var e=this,t=[];this.$axios.get("user-setting/permission").then((function(s){200==s.data.code&&setTimeout((function(){e.loading=!1,e.permissions=s.data.data,e.edit_role.permissions.map((function(s){t.push(s.name),e.selectedPermission=t})),e.revokes=s.data.data.filter((function(e){return t.includes(e.name)}))}),300)})).catch((function(t){if(e.loading=!1,e.fetchData(),422==t.response.status)for(var s=t.response.data.errors,i=0,a=Object.entries(s);i<a.length;i++){var o=Object(n["a"])(a[i],2),r=o[0],l=o[1];e.server_errors[r]=l[0]}}))},closeAddModal:function(){this.$store.commit("modalAdd_State",!1)},OpenModalEdit:function(e){this.edit_role=e,this.$store.commit("modalEdit_State",!0)},updateItem:function(){var e=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.put("user-setting/role/"+this.edit_role.id,this.edit_role).then((function(t){200==t.data.code&&setTimeout((function(){e.loading=!1,e.closeUpdateModal(),e.edit_user={},e.reset(),e.fetchData(),e.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})}),300)})).catch((function(t){if(e.loading=!1,e.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message}),e.fetchData(),422==t.response.status)for(var s=t.response.data.errors,i=0,a=Object.entries(s);i<a.length;i++){var o=Object(n["a"])(a[i],2),r=o[0],l=o[1];e.server_errors[r]=l[0]}})))},closeUpdateModal:function(){this.$store.commit("modalEdit_State",!1)},closeDelete:function(){this.$store.commit("modalDelete_State",!1)},deleteItem:function(e){this.roleID=e,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm:function(){var e=this;this.loading=!0,this.$axios.delete("user-setting/role/"+this.roleID).then((function(t){200==t.data.code&&setTimeout((function(){e.loading=!1,e.$store.commit("modalDelete_State",!1),e.fetchData(),e.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})}),300)})).catch((function(t){e.fetchData(),e.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message}),e.$store.commit("modalDelete_State",!1),e.loading=!1}))},openModalPermissionRole:function(e){this.edit_role=e,this.fetchPermission(),this.roleDialog=!0},AddPermissionRole:function(){var e=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("user-setting/role/"+this.edit_role.id+"/give-permission",{permissions:this.selectedPermission}).then((function(t){200==t.data.code&&setTimeout((function(){e.loading=!1,e.fetchData(),e.selectedPermission="",e.reset(),e.roleDialog=!1,e.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})}),300)})).catch((function(t){422==t.response.data.code&&(e.errormsg=t.response.data.message),e.fetchData(),e.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message})})),this.loading=!1)},openModalUpdatePermissionRole:function(e){this.edit_role=e,this.fetchPermission(),this.updateRoleDialog=!0},updatePermissionRole:function(){var e=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("user-setting/role/"+this.edit_role.id+"/revoke-permission",{permissions:this.selectRevokePermission}).then((function(t){200==t.data.code&&setTimeout((function(){e.loading=!1,e.selectRevokePermission="",e.fetchData(),e.reset(),e.updateRoleDialog=!1,e.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})}),300)})).catch((function(t){422==t.response.data.code&&(e.errormsg=t.response.data.message),e.fetchData(),e.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message})})),this.updateRoleDialog=!1)},removeItem:function(e){var t=this.selectedPermission.indexOf(e.id);t>=0&&this.selectedPermission.splice(t,1)},reset:function(){this.$refs.form.reset()},Search:function(){Object(o["a"])(this)}},watch:{role:function(){this.server_errors.name=""},"edit_role.name":function(){this.server_errors.name=""},selectedPermission:function(){this.errormsg=""},"edit_role.permissions":function(){this.errormsg=""},search:function(e){""==e&&this.fetchData()}},created:function(){this.fetchData()}},l=r,c=(s("5ddc"),s("2877")),d=s("6544"),u=s.n(d),h=s("c6a6"),m=s("8336"),f=s("b0af"),v=s("99d9"),p=s("cc20"),g=s("62ad"),_=s("a523"),b=s("8fea"),I=s("169a"),S=s("ce7e"),x=s("4bd4"),D=s("132d"),k=s("8860"),y=s("da13"),$=s("5d23"),C=s("e449"),V=s("0fd9"),P=s("b974"),w=s("2fa4"),O=s("8654"),T=Object(c["a"])(l,i,a,!1,null,null,null);t["default"]=T.exports;u()(T,{VAutocomplete:h["a"],VBtn:m["a"],VCard:f["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VChip:p["a"],VCol:g["a"],VContainer:_["a"],VDataTable:b["a"],VDialog:I["a"],VDivider:S["a"],VForm:x["a"],VIcon:D["a"],VList:k["a"],VListItem:y["a"],VListItemTitle:$["d"],VMenu:C["a"],VRow:V["a"],VSelect:P["a"],VSpacer:w["a"],VTextField:O["a"]})},"84ac":function(e,t,s){},c6a6:function(e,t,s){"use strict";var i=s("5530"),a=(s("d81d"),s("4de4"),s("498a"),s("7db0"),s("caad"),s("2532"),s("2bfd"),s("b974")),n=s("8654"),o=s("d9f7"),r=s("80d2"),l=Object(i["a"])(Object(i["a"])({},a["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t["a"]=a["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,s){return s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:a["a"].options.props.menuProps.type,default:function(){return l}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var s=Object(r["s"])(t,e.itemText),i=null!=s?String(s):"";return e.filter(t,String(e.internalSearch),i)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=a["a"].options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),Object(i["a"])(Object(i["a"])({},l),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(t){return e.valueComparator(e.getValue(t),e.getValue(e.internalValue))}))},listData:function(){var e=a["a"].options.computed.listData.call(this);return e.props=Object(i["a"])(Object(i["a"])({},e.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var s=this;e!==t&&(this.setMenuIndex(-1),this.$nextTick((function(){s.internalSearch&&(1===e.length||s.autoSelectFirst)&&(s.$refs.menu.getTiles(),s.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===r["z"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===r["z"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==r["z"].backspace&&e!==r["z"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var s=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===s){var i=this.selectedItems.length,a=e!==i-1?e:e-1,n=this.selectedItems[a];n?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=a}else this.selectedIndex=s}},clearableCallback:function(){this.internalSearch=null,a["a"].options.methods.clearableCallback.call(this)},genInput:function(){var e=n["a"].options.methods.genInput.call(this);return e.data=Object(o["a"])(e.data,{attrs:{"aria-activedescendant":Object(r["q"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(r["q"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot:function(){var e=a["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections:function(){return this.hasSlot||this.multiple?a["a"].options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,s=t.value;t.value&&this.activateMenu(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[r["z"].home,r["z"].end].includes(t)||a["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){a["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){a["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){a["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,s;if(-1!==this.selectedIndex){var i=this.selectedItems[this.selectedIndex],a=this.getText(i);null==(t=e.clipboardData)||t.setData("text/plain",a),null==(s=e.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",a),e.preventDefault()}}}})}}]);
//# sourceMappingURL=chunk-3d619582.ea60f20f.js.map