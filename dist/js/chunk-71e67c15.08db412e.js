(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71e67c15"],{"0899":function(e,t,s){"use strict";s("e34a");var i=s("50f6"),a=s("5fd6"),r=s("1a18");t["a"]=Object(i["a"])(a["a"],Object(r["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",t=>{this.$set(this.errorBag,e._uid,t)},{immediate:!0}),s={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=e.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(e._uid)||(s.valid=t(e)))}):s.valid=t(e),s},validate(){return 0===this.inputs.filter(e=>!e.validate(!0)).length},reset(){this.inputs.forEach(e=>e.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(e=>e.resetValidation()),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find(t=>t._uid===e._uid);if(!t)return;const s=this.watchers.find(e=>e._uid===t._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(e=>e._uid!==t._uid),this.inputs=this.inputs.filter(e=>e._uid!==t._uid),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},"2b3b":function(e,t,s){},"2e94":function(e,t,s){"use strict";s("2b3b");var i=s("dc2c"),a=s("d736"),r=s("727d"),o=s("f0be");const n={...i["b"],offsetY:!0,offsetOverflow:!0,transition:!1};t["a"]=i["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:()=>n},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(o["r"])(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=i["a"].options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...n,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=i["a"].options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){if(e!==t){if(!this.autoSelectFirst){const s=t[this.$refs.menu.listIndex];s?this.setMenuIndex(e.findIndex(e=>e===s)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&e.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===o["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===o["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==o["y"].backspace&&e!==o["y"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=this.selectedItems.length,a=e!==i-1?e:e-1,r=this.selectedItems[a];r?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=a},clearableCallback(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput(){const e=a["a"].options.methods.genInput.call(this);return e.data=Object(r["a"])(e.data,{attrs:{"aria-activedescendant":Object(o["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(o["p"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=i["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[o["y"].home,o["y"].end].includes(t)||i["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){i["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){i["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],a=this.getText(i);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",a),null===(s=e.clipboardData)||void 0===s||s.setData("text/vnd.vuetify.autocomplete.item+plain",a),e.preventDefault()}}})},"2ee4":function(e,t,s){"use strict";s("e148")},"6ece":function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));const i=e=>{""!==e.search?""!==e.oldVal?e.oldVal!==e.search&&(e.oldVal=e.search,e.pagination.current_page=1,e.fetchData()):(""!==e.search&&(e.pagination.current_page=1,e.fetchData()),e.oldVal=e.search):e.oldVal=""}},"7bc2":function(e,t,s){"use strict";s.r(t);var i=s("2e94"),a=s("45f7"),r=s("84ff"),o=s("dff2"),n=s("5929"),l=s("2d66"),c=s("8042"),d=s("2161"),h=s("b4ba"),m=s("2599"),u=s("0899"),p=s("0002"),f=s("7e78"),g=s("fcaa"),v=s("292f"),_=s("8619"),S=s("a972"),I=s("dc2c"),b=s("3675"),x=s("d736"),y=function(){var e=this,t=e._self._c;return t(c["a"],[t(S["a"],[t(l["a"],[t(a["a"],{staticClass:"btn-primary",on:{click:function(t){return e.openAddModal()}}},[t(p["a"],[e._v("mdi-plus")])],1)],1)],1),t(S["a"],{attrs:{justify:"center"}},[t(l["a"],[t(r["a"],{staticClass:"pa-2"},[t(o["c"],[e._v(" ຂໍ້ມູນ Roles "),t(m["a"],{staticClass:"mx-4",attrs:{vertical:""}}),t(b["a"]),t(x["a"],{attrs:{clearable:"","prepend-inner-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),t(d["a"],{attrs:{headers:e.headers,items:e.roles,search:e.search,"disable-pagination":!0,expand:"","hide-default-footer":""},scopedSlots:e._u([{key:"item.name",fn:function({item:s}){return[t("div",{staticClass:"d-flex align-middle"},[s.role_type&&"notify"==s.role_type.type?t(p["a"],{attrs:{"x-small":""}},[e._v(" mdi-email ")]):e._e(),t("p",[e._v(e._s(s.name))])],1)]}},{key:"item.permissions",fn:function({item:s}){return[t("div",e._l(s.permissions,(function(s,i){return t("span",{key:i},[t(n["a"],{staticClass:"mr-1 my-1",attrs:{label:"",color:"success"}},[e._v(e._s(s.name))])],1)})),0)]}},{key:"item.actions",fn:function({item:s}){return[t(_["a"],{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:s,attrs:i}){return[t(p["a"],e._g(e._b({staticClass:"mr-2",attrs:{color:"primary",dark:"",medium:""}},"v-icon",i,!1),s),[e._v(" mdi-dots-vertical ")])]}}],null,!0)},[t(f["a"],[t(g["a"],{attrs:{link:""},on:{click:function(t){return e.openModalPermissionRole(s)}}},[t(v["d"],[t(p["a"],{staticClass:"mr-2",attrs:{medium:""}},[e._v(" mdi-plus ")]),e._v(" ເພີ່ມ Permission ")],1)],1),t(g["a"],{attrs:{link:""},on:{click:function(t){return e.openModalUpdatePermissionRole(s)}}},[t(v["d"],[t(p["a"],{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-key-remove ")]),e._v(" ຖອນ Permission ")],1)],1),t(g["a"],{attrs:{link:""},on:{click:function(t){return e.OpenModalEdit(s)}}},[t(v["d"],[t(p["a"],{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-pencil ")]),e._v("ແກ້ໄຂ ")],1)],1),t(g["a"],{attrs:{link:""},on:{click:function(t){return e.deleteItem(s.id)}}},[t(v["d"],[t(p["a"],{attrs:{small:""}},[e._v(" mdi-delete ")]),e._v(" ລຶບ ")],1)],1)],1)],1)]}}])}),t("br"),[e.pagination.total_pages>1?t("Pagination",{attrs:{pagination:e.pagination,offset:e.offset},on:{paginate:function(t){return e.fetchData()}}}):e._e()]],2)],1)],1),t("ModalAdd",[[t(r["a"],[t(o["c"],[t("span",{staticClass:"headline"},[e._v("Add Role")])]),t(o["b"],[t(c["a"],[t(u["a"],{ref:"form",attrs:{"lazy-validation":""}},[t(S["a"],[t(l["a"],{attrs:{cols:"12"}},[t(x["a"],{attrs:{label:"Name *",required:"",rules:e.nameRules},model:{value:e.role,callback:function(t){e.role=t},expression:"role"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.name)+" ")])],1)],1)],1)],1),t(o["a"],[t(b["a"]),t(a["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.closeAddModal()}}},[e._v(" Close ")]),t(a["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.AddItem()}}},[e._v(" Save ")])],1)],1)],1)]],2),t("ModalEdit",{scopedSlots:e._u([{key:"default",fn:function(){return[t(r["a"],[t(o["c"],[t("span",{staticClass:"headline"},[e._v("Update Role "),t("span",[t("a",[e._v(e._s(e.edit_role.name))])])])]),t(o["b"],[t(c["a"],[t(u["a"],{ref:"form",attrs:{"lazy-validation":""}},[t(S["a"],[t(l["a"],{attrs:{cols:"12"}},[t(x["a"],{attrs:{label:"Name *",required:"",rules:e.nameRules},model:{value:e.edit_role.name,callback:function(t){e.$set(e.edit_role,"name",t)},expression:"edit_role.name"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.name)+" ")])],1)],1)],1)],1),t(o["a"],[t(b["a"]),t(a["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.closeUpdateModal()}}},[e._v(" Close ")]),t(a["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.updateItem()}}},[e._v(" Update ")])],1)],1)],1)]},proxy:!0}])}),t("ModalDelete",[[t(o["a"],[t(b["a"]),t(a["a"],{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v(" Cancel ")]),t(a["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.deleteItemConfirm}},[e._v(" OK ")]),t(b["a"])],1)]],2),t(h["a"],{attrs:{"max-width":"720px",persistent:""},model:{value:e.roleDialog,callback:function(t){e.roleDialog=t},expression:"roleDialog"}},[t(r["a"],[t(o["c"],[t("span",{staticClass:"headline"},[e._v("Add Permission to Role "),t("span",[t("a",[e._v(e._s(e.edit_role.name))])])])]),t(o["b"],[t(c["a"],[t(u["a"],{ref:"form",attrs:{"lazy-validation":""}},[t(S["a"],[t(l["a"],{attrs:{cols:"12"}},[t(i["a"],{attrs:{required:"",items:e.permissions,"item-text":"name","item-value":"name",label:"Permission *",multiple:"",rules:e.rulePermission},scopedSlots:e._u([{key:"selection",fn:function(s){return[t(n["a"],e._b({attrs:{"input-value":s.selected,color:"success"},on:{click:s.select}},"v-chip",s.attrs,!1),[e._v(" "+e._s(s.item.name)+" ")])]}}]),model:{value:e.selectedPermission,callback:function(t){e.selectedPermission=t},expression:"selectedPermission"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.errormsg)+" ")])],1)],1)],1)],1),t(o["a"],[t(b["a"]),t(a["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.roleDialog=!1}}},[e._v(" Close ")]),t(a["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.AddPermissionRole}},[e._v(" Add ")])],1)],1)],1)],1),t(h["a"],{attrs:{"max-width":"720px",persistent:""},model:{value:e.updateRoleDialog,callback:function(t){e.updateRoleDialog=t},expression:"updateRoleDialog"}},[t(r["a"],[t(o["c"],[t("span",{staticClass:"headline"},[e._v("Remove Permission from role "),t("span",[t("a",[e._v(e._s(e.edit_role.name))])])])]),t(o["b"],[t(c["a"],[t(u["a"],{ref:"form",attrs:{"lazy-validation":""}},[t(S["a"],[t(l["a"],{attrs:{cols:"12"}},[t(I["a"],{attrs:{required:"",items:e.revokes,"item-text":"name","item-value":"name",label:"Permission",multiple:"",rules:e.rulePermission},model:{value:e.selectRevokePermission,callback:function(t){e.selectRevokePermission=t},expression:"selectRevokePermission"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.errormsg)+" ")])],1)],1)],1)],1),t(o["a"],[t(b["a"]),t(a["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.updateRoleDialog=!1}}},[e._v(" Close ")]),t(a["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.updatePermissionRole}},[e._v(" Remove ")])],1)],1)],1)],1)],1)},$=[],D=(s("e34a"),s("6ece")),k={name:"Package",data(){return{headers:[{text:"Role Name",value:"name"},{text:"Permission",value:"permissions"},{text:"",value:"actions",sortable:!1,align:"center"}],loading:!1,roleDialog:!1,updateRoleDialog:!1,roles:[],role:"",edit_role:{},roleID:"",server_errors:{},errormsg:"",selectedPermission:"",selectRevokePermission:"",permissions:[],edit_permission:{},revokes:[],offset:12,pagination:{},per_page:100,search:"",oldVal:"",nameRules:[e=>!!e||"Name is required",e=>e&&e.length>=2||"Name must be less than 2 characters"],rulePermission:[e=>!!e||"Permission is required"]}},watch:{role(){this.server_errors.name=""},"edit_role.name":function(){this.server_errors.name=""},selectedPermission(){this.errormsg=""},"edit_role.permissions":function(){this.errormsg=""},search(e){""==e&&this.fetchData()}},created(){this.fetchData()},methods:{openAddModal(){this.$store.commit("modalAdd_State",!0)},AddItem(){1==this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.post("user-setting/role",{name:this.role}).then(e=>{200==e.data.code&&(this.$store.commit("Loading_State",!1),this.closeAddModal(),this.role="",this.fetchData(),this.reset(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message}))}).catch(e=>{if(this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),e.response&&422==e.response.status){const t=e.response.data.errors,s={};for(const[e,i]of Object.entries(t))s[e]=i[0];this.server_errors=s}}))},fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("user-setting/role",{params:{page:this.pagination.current_page,per_page:this.per_page,filter:this.search}}).then(e=>{200==e.data.code&&(this.$store.commit("Loading_State",!1),this.roles=e.data.data.data,this.pagination=e.data.data.pagination)}).catch(e=>{if(this.$store.commit("Loading_State",!1),e.response&&422==e.response.status){const t=e.response.data.errors;for(const[e,s]of Object.entries(t))this.server_errors[e]=s[0]}})},fetchPermission(){const e=[];this.$axios.get("user-setting/permission").then(t=>{200==t.data.code&&(this.$store.commit("Loading_State",!1),this.permissions=t.data.data,this.edit_role.permissions.map(t=>{e.push(t.name),this.selectedPermission=e}),this.revokes=t.data.data.filter(t=>e.includes(t.name)))}).catch(e=>{if(this.$store.commit("Loading_State",!1),e.response&&422==e.response.status){const t=e.response.data.errors;for(const[e,s]of Object.entries(t))this.server_errors[e]=s[0]}})},closeAddModal(){this.$store.commit("modalAdd_State",!1)},OpenModalEdit(e){this.edit_role=e,this.$store.commit("modalEdit_State",!0)},updateItem(){1==this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.put("user-setting/role/"+this.edit_role.id,this.edit_role).then(e=>{200==e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.closeUpdateModal(),this.edit_user={},this.reset(),this.fetchData(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})},300)}).catch(e=>{if(this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),this.fetchData(),e.response&&422==e.response.status){const t=e.response.data.errors;for(const[e,s]of Object.entries(t))this.server_errors[e]=s[0]}}))},closeUpdateModal(){this.$store.commit("modalEdit_State",!1)},closeDelete(){this.$store.commit("modalDelete_State",!1)},deleteItem(e){this.roleID=e,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm(){this.$store.commit("Loading_State",!0),this.$axios.delete("user-setting/role/"+this.roleID).then(e=>{200==e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.$store.commit("modalDelete_State",!1),this.fetchData(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})},300)}).catch(e=>{this.fetchData(),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),this.$store.commit("modalDelete_State",!1),this.$store.commit("Loading_State",!1)})},openModalPermissionRole(e){this.edit_role=e,this.fetchPermission(),this.roleDialog=!0},AddPermissionRole(){1==this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.post(`user-setting/role/${this.edit_role.id}/give-permission`,{permissions:this.selectedPermission}).then(e=>{200==e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.fetchData(),this.selectedPermission="",this.reset(),this.roleDialog=!1,this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})},300)}).catch(e=>{422==e.response.data.code&&(this.errormsg=e.response.data.message),this.fetchData(),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"})}),this.$store.commit("Loading_State",!1))},openModalUpdatePermissionRole(e){this.edit_role=e,this.fetchPermission(),this.updateRoleDialog=!0},updatePermissionRole(){1==this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.post(`user-setting/role/${this.edit_role.id}/revoke-permission`,{permissions:this.selectRevokePermission}).then(e=>{200==e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.selectRevokePermission="",this.fetchData(),this.reset(),this.updateRoleDialog=!1,this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})},300)}).catch(e=>{422==e.response.data.code&&(this.errormsg=e.response.data.message),this.fetchData(),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"})}),this.updateRoleDialog=!1)},removeItem(e){const t=this.selectedPermission.indexOf(e.id);t>=0&&this.selectedPermission.splice(t,1)},reset(){this.$refs.form.reset()},Search(){Object(D["a"])(this)}}},P=k,C=(s("2ee4"),s("d22c")),w=Object(C["a"])(P,y,$,!1,null,null,null);t["default"]=w.exports},8042:function(e,t,s){"use strict";s("3bf8"),s("618a");var i=s("1ed6");function a(e){return i["a"].extend({name:"v-"+e,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:s,data:i,children:a}){i.staticClass=`${e} ${i.staticClass||""}`.trim();const{attrs:r}=i;if(r){i.attrs={};const e=Object.keys(r).filter(e=>{if("slot"===e)return!1;const t=r[e];return e.startsWith("data-")?(i.attrs[e]=t,!1):t||"string"===typeof t});e.length&&(i.staticClass+=" "+e.join(" "))}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),t(s.tag,i,a)}})}var r=s("727d");t["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:t,data:s,children:i}){let a;const{attrs:o}=s;return o&&(s.attrs={},a=Object.keys(o).filter(e=>{if("slot"===e)return!1;const t=o[e];return e.startsWith("data-")?(s.attrs[e]=t,!1):t||"string"===typeof t})),t.id&&(s.domProps=s.domProps||{},s.domProps.id=t.id),e(t.tag,Object(r["a"])(s,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(a||[])}),i)}})},e148:function(e,t,s){}}]);
//# sourceMappingURL=chunk-71e67c15.08db412e.js.map