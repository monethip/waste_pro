(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e14bff8a"],{"1feb":function(e,t,a){},"2bfd":function(e,t,a){},"3dde":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-btn",{staticClass:"text-primary mb-4",attrs:{text:""},on:{click:function(t){return e.backPrevios()}}},[a("v-icon",[e._v("mdi-chevron-left")]),e._v(" Back")],1),a("v-row",{staticClass:"mb-n6"},[a("v-col",[a("v-btn",{staticClass:"btn-primary",on:{click:function(t){return e.openAddModal()}}},[a("v-icon",[e._v("mdi-plus")])],1)],1),a("v-col",[a("h3",[e._v(e._s(e.team.name))])])],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",[a("v-card",{staticClass:"pa-2"},[a("v-card-title",[e._v(" ສະມາຊິກໃນທີມ ("+e._s(e.data.length)+") "),a("v-divider",{staticClass:"mx-4",attrs:{vertical:""}}),e._v(" ຜູ້ຂັບລົດ "),e.team.driver?a("span",{staticClass:"primary-color"},[e._v(" "+e._s(e.team.driver.name)+" ("+e._s(e.team.driver.vehicle.car_number)+")")]):e._e(),a("v-spacer"),a("v-text-field",{attrs:{clearable:"","prepend-inner-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Search()}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{attrs:{headers:e.headers,items:e.data,search:e.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:e._u([{key:"item.created_at",fn:function(t){var n=t.item;return[a("div",[e._v(e._s(e.moment(n.created_at).format("DD-MM-YY")))])]}},{key:"item.actions",fn:function(t){var n=t.item;return[a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(n.id)}}},[e._v(" mdi-delete ")])]}}])}),a("br"),[e.pagination.total_pages>1?a("Pagination",{attrs:{pagination:e.pagination,offset:e.offset},on:{paginate:function(t){return e.fetchData()}}}):e._e()]],2)],1)],1),a("ModalAdd",[[a("v-card",[a("v-card-title",[a("p",[e._v("ເພີ່ມພະນັກງານເຂົ້າທີມ")])]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-autocomplete",{attrs:{items:e.member,"item-text":"name","item-value":"id",label:"ພະນັກງານ",dense:"",rules:e.driverRules,multiple:""},model:{value:e.selectedMember,callback:function(t){e.selectedMember=t},expression:"selectedMember"}}),a("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.employees)+" ")])],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.closeAddModal()}}},[e._v(" ຍົກເລີກ ")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.AddItem()}}},[e._v(" ບັນທຶກ ")])],1)],1)],1)]],2),a("ModalDelete",[[a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.deleteItemConfirm}},[e._v("OK")]),a("v-spacer")],1)]],2)],1)},i=[],s=a("3835"),r=(a("4fad"),a("b0c0"),a("6eceb")),o={name:"User",data:function(){return{headers:[{text:"ຊື່",value:"employee.name"},{text:"Surname",value:"employee.surname"},{text:"Phone",value:"employee.phone"},{text:"Created",value:"created_at",sortable:!1},{text:"",value:"actions",sortable:!1}],loading:!1,status:!1,data:[],edit_user:{},userID:"",server_errors:{},teamName:"",member:[],team:{},selectedMember:[],offset:12,pagination:{},per_page:12,search:"",oldVal:"",teamRules:[function(e){return!!e||"Team name is required"}],driverRules:[function(e){return!!e||"Driver is required"}]}},methods:{backPrevios:function(){this.$router.go(-1)},fetchMember:function(){var e=this;this.$axios.get("employee").then((function(t){200==t.data.code&&(e.member=t.data.data)})).catch({})},fetchTeam:function(){var e=this;this.$axios.get("team/"+this.$route.params.id).then((function(t){200==t.data.code&&(e.team=t.data.data)})).catch({})},fetchData:function(){var e=this;this.$store.commit("Loading_State",!0),this.$axios.get("team/"+this.$route.params.id+"/team_member").then((function(t){200==t.data.code&&(e.loading=!1,e.$store.commit("Loading_State",!1),e.data=t.data.data.members)})).catch((function(t){if(e.$store.commit("Loading_State",!1),422==t.response.status)for(var a=t.response.data.errors,n=0,i=Object.entries(a);n<i.length;n++){var r=Object(s["a"])(i[n],2),o=r[0],c=r[1];e.server_errors[o]=c[0]}}))},openAddModal:function(){this.$store.commit("modalAdd_State",!0)},AddItem:function(){var e=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("team/"+this.$route.params.id+"/team_member",{employees:this.selectedMember}).then((function(t){200==t.data.code&&setTimeout((function(){e.loading=!1,e.closeAddModal(),e.selectedMember="",e.fetchData(),e.reset(),e.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})}),300)})).catch((function(t){if(e.loading=!1,e.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message}),e.fetchData(),422==t.response.status)for(var a=t.response.data.errors,n=0,i=Object.entries(a);n<i.length;n++){var r=Object(s["a"])(i[n],2),o=r[0],c=r[1];e.server_errors[o]=c[0]}})))},closeAddModal:function(){this.$store.commit("modalAdd_State",!1)},closeDelete:function(){this.$store.commit("modalDelete_State",!1)},deleteItem:function(e){this.userID=e,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm:function(){var e=this;this.loading=!0,this.$axios.delete("team/"+this.$route.params.id+"/team_member/"+this.userID).then((function(t){200==t.data.code&&setTimeout((function(){e.loading=!1,e.$store.commit("modalDelete_State",!1),e.fetchData(),e.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})}),300)})).catch((function(t){e.fetchData(),e.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message}),e.$store.commit("modalDelete_State",!1),e.loading=!1}))},reset:function(){this.$refs.form.reset()},Search:function(){Object(r["a"])(this)}},watch:{selectedStatus:function(){this.fetchData()},teamName:function(){this.server_errors.name=""},selectedDriver:function(){this.server_errors.driver_id=""},"edit_user.name":function(){this.server_errors.name=""},"edit_user.driver.id":function(){this.server_errors.driver_id=""},search:function(e){""==e&&this.fetchData()}},created:function(){this.fetchMember(),this.fetchData(),this.fetchTeam()}},c=o,l=(a("f17b"),a("2877")),u=a("6544"),d=a.n(u),h=a("c6a6"),m=a("8336"),f=a("b0af"),p=a("99d9"),v=a("62ad"),g=a("a523"),b=a("8fea"),I=a("ce7e"),_=a("4bd4"),S=a("132d"),y=a("0fd9"),x=a("2fa4"),D=a("8654"),$=Object(l["a"])(c,n,i,!1,null,null,null);t["default"]=$.exports;d()($,{VAutocomplete:h["a"],VBtn:m["a"],VCard:f["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:v["a"],VContainer:g["a"],VDataTable:b["a"],VDivider:I["a"],VForm:_["a"],VIcon:S["a"],VRow:y["a"],VSpacer:x["a"],VTextField:D["a"]})},"4bd4":function(e,t,a){"use strict";var n=a("5530"),i=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),s=a("7e2b"),r=a("3206");t["a"]=Object(i["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var t=this,a=function(e){return e.$watch("hasError",(function(a){t.$set(t.errorBag,e._uid,a)}),{immediate:!0})},n={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=e.$watch("shouldValidate",(function(i){i&&(t.errorBag.hasOwnProperty(e._uid)||(n.valid=a(e)))})):n.valid=a(e),n},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var t=this.inputs.find((function(t){return t._uid===e._uid}));if(t){var a=this.watchers.find((function(e){return e._uid===t._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==t._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},"4fad":function(e,t,a){var n=a("23e7"),i=a("6f53").entries;n({target:"Object",stat:!0},{entries:function(e){return i(e)}})},"6eceb":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("ac1f"),a("841c");var n=function(e){""!==e.search?""!==e.oldVal?e.oldVal!==e.search&&(e.oldVal=e.search,e.pagination.current_page=1,e.fetchData()):(""!==e.search&&(e.pagination.current_page=1,e.fetchData()),e.oldVal=e.search):e.oldVal=""}},c6a6:function(e,t,a){"use strict";var n=a("5530"),i=(a("d81d"),a("4de4"),a("498a"),a("7db0"),a("caad"),a("2532"),a("2bfd"),a("b974")),s=a("8654"),r=a("d9f7"),o=a("80d2"),c=Object(n["a"])(Object(n["a"])({},i["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,a){return a.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:function(){return c}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var a=Object(o["r"])(t,e.itemText),n=null!=a?String(a):"";return e.filter(t,String(e.internalSearch),n)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=i["a"].options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),Object(n["a"])(Object(n["a"])({},c),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(t){return e.valueComparator(e.getValue(t),e.getValue(e.internalValue))}))},listData:function(){var e=i["a"].options.computed.listData.call(this);return e.props=Object(n["a"])(Object(n["a"])({},e.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var a=this;e!==t&&(this.setMenuIndex(-1),this.$nextTick((function(){a.internalSearch&&(1===e.length||a.autoSelectFirst)&&(a.$refs.menu.getTiles(),a.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===o["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===o["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==o["y"].backspace&&e!==o["y"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var a=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===a){var n=this.selectedItems.length,i=e!==n-1?e:e-1,s=this.selectedItems[i];s?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=i}else this.selectedIndex=a}},clearableCallback:function(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput:function(){var e=s["a"].options.methods.genInput.call(this);return e.data=Object(r["a"])(e.data,{attrs:{"aria-activedescendant":Object(o["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(o["p"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot:function(){var e=i["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections:function(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,a=t.value;t.value&&this.activateMenu(),this.internalSearch=a,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[o["y"].home,o["y"].end].includes(t)||i["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){i["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){i["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,a;if(-1!==this.selectedIndex){var n=this.selectedItems[this.selectedIndex],i=this.getText(n);null==(t=e.clipboardData)||t.setData("text/plain",i),null==(a=e.clipboardData)||a.setData("text/vnd.vuetify.autocomplete.item+plain",i),e.preventDefault()}}}})},f17b:function(e,t,a){"use strict";a("1feb")}}]);
//# sourceMappingURL=chunk-e14bff8a.ecb621bb.js.map