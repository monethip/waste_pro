(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-757651d4"],{1681:function(t,e,i){},"2bfd":function(t,e,i){},"3f84":function(t,e,i){},"4bd4":function(t,e,i){"use strict";var a=i("5530"),n=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("159b"),i("7db0"),i("58df")),s=i("7e2b"),r=i("3206");e["a"]=Object(n["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"4fad":function(t,e,i){var a=i("23e7"),n=i("6f53").entries;a({target:"Object",stat:!0},{entries:function(t){return n(t)}})},"54da":function(t,e,i){"use strict";var a=i("b85c");i("b64b");e["a"]=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i={},n=Object(a["a"])(e);try{for(n.s();!(t=n.n()).done;){var s=t.value;1==Object.keys(s).length&&s[Object.keys(s)]&&(i[Object.keys(s)]=s[Object.keys(s)])}}catch(r){n.e(r)}finally{n.f()}return i}},"6ca7":function(t,e,i){},"6eceb":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i("ac1f"),i("841c");var a=function(t){""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},ac7c:function(t,e,i){"use strict";var a=i("15fd"),n=i("5530"),s=(i("d3b7"),i("25f0"),i("6ca7"),i("ec29"),i("9d26")),r=i("c37a"),o=i("fe09"),l=["title"];e["a"]=o["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(a["a"])(t,l));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(n["a"])(Object(n["a"])({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},c6a6:function(t,e,i){"use strict";var a=i("5530"),n=(i("d81d"),i("4de4"),i("498a"),i("7db0"),i("caad"),i("2532"),i("2bfd"),i("b974")),s=i("8654"),r=i("d9f7"),o=i("80d2"),l=Object(a["a"])(Object(a["a"])({},n["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=n["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,i){return i.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:n["a"].options.props.menuProps.type,default:function(){return l}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var i=Object(o["r"])(e,t.itemText),a=null!=i?String(i):"";return t.filter(e,String(t.internalSearch),a)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=n["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(a["a"])(Object(a["a"])({},l),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=n["a"].options.computed.listData.call(this);return t.props=Object(a["a"])(Object(a["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var i=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){i.internalSearch&&(1===t.length||i.autoSelectFirst)&&(i.$refs.menu.getTiles(),i.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===o["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===o["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==o["y"].backspace&&t!==o["y"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var i=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===i){var a=this.selectedItems.length,n=t!==a-1?t:t-1,s=this.selectedItems[n];s?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=n}else this.selectedIndex=i}},clearableCallback:function(){this.internalSearch=null,n["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return t.data=Object(r["a"])(t.data,{attrs:{"aria-activedescendant":Object(o["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(o["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=n["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?n["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,i=e.value;e.value&&this.activateMenu(),this.internalSearch=i,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[o["y"].home,o["y"].end].includes(e)||n["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){n["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){n["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){n["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,i;if(-1!==this.selectedIndex){var a=this.selectedItems[this.selectedIndex],n=this.getText(a);null==(e=t.clipboardData)||e.setData("text/plain",n),null==(i=t.clipboardData)||i.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}}})},c7c6:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"6"}},[i("v-breadcrumbs",{staticClass:"pa-0",attrs:{large:""}},[i("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[i("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" ຈັດການເວລາໃຫ້ພະນັກງານເກັບຂີ້ເຫື້ຍອ "),i("span",{staticClass:"ml-2 primary-color"},[t._v(t._s(t.planmonth.name))])],1)],1),i("v-col",[i("div",{staticClass:"text-end"},[i("v-btn",{staticClass:"btn-primary ",on:{click:function(e){return t.AddPlan()}}},[i("v-icon",[t._v("mdi-plus")])],1)],1)])],1),i("v-row",[i("v-col",[i("v-menu",{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-text-field",t._g(t._b({attrs:{label:"ເລີ່ມວັນທີ",readonly:"",outlined:"",dense:"",clearable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},"v-text-field",n,!1),a))]}}]),model:{value:t.date_menu,callback:function(e){t.date_menu=e},expression:"date_menu"}},[i("v-date-picker",{model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),i("v-col",[i("v-autocomplete",{attrs:{outlined:"",dense:"",items:t.customer_types,"item-text":"display","item-value":"name",label:"ປະເພດແຜນເສັ້ນທາງ",clearable:""},model:{value:t.selectedCustomerType,callback:function(e){t.selectedCustomerType=e},expression:"selectedCustomerType"}})],1),i("v-col",[i("v-autocomplete",{attrs:{items:t.drivers,"item-text":t.getDriver,"item-value":"id",label:"ຄົນຂັບລົດ",outlined:"",clearable:"",dense:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[t._v(" "+t._s(e.item.name)+" ("+t._s(e.item.vehicle.car_id)+") ")]}}]),model:{value:t.selectedDriverId,callback:function(e){t.selectedDriverId=e},expression:"selectedDriverId"}})],1)],1),i("div",[i("v-card",[i("v-card-text",[t.calendars?i("v-data-table",{attrs:{headers:t.headers,items:t.calendars,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.driver",fn:function(e){var a=e.item;return[i("div",[t._v(t._s(a.driver.vehicle.car_id)+" ("+t._s(a.driver.name)+")")])]}},{key:"item.date",fn:function(e){var a=e.item;return[i("v-chip",{attrs:{color:t.getStatus(a.is_cancelled)}},[t._v(t._s(a.date))])]}},{key:"item.created_at",fn:function(e){var a=e.item;return[i("div",[t._v(" "+t._s(t.moment(a.created_at).format("hh:mm:ss DD-MM-YY"))+" ")])]}},{key:"item.actions",fn:function(e){var a=e.item;return[i("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-icon",t._g(t._b({staticClass:"mr-2",attrs:{color:"primary",dark:"",medium:""}},"v-icon",n,!1),a),[t._v("mdi-dots-vertical ")])]}}],null,!0)},[i("v-list",[i("v-list-item",{attrs:{link:""},on:{click:function(e){return t.gotoPlanCalendar(a)}}},[i("v-list-item-title",[i("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-eye")]),t._v(" ລາຍລະອຽດ ")],1)],1),i("v-list-item",{attrs:{link:""},on:{click:function(e){return t.editModal(a)}}},[i("v-list-item-title",[i("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-pencil")]),t._v(" ແກ້ໄຂຂໍ້ມູນ ")],1)],1),i("v-list-item",{attrs:{link:""},on:{click:function(e){return t.deleteItem(a.id)}}},[i("v-list-item-title",[i("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-delete")]),t._v(" ລຶບຂໍ່ມູນ ")],1)],1),i("v-list-item",{attrs:{link:""},on:{click:function(e){return t.confirmCancel(a.id)}}},[i("v-list-item-title",[i("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-close")]),t._v(" ຍົກເລີກ ")],1)],1)],1)],1)]}}],null,!1,3384921318)}):t._e(),i("br"),[t.pagination.total_pages>1?i("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1),i("ModalAdd",[[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("Add Plan Calendar")])]),i("v-card-text",[i("v-container",[i("v-form",{ref:"form",attrs:{"lazy-validation":""}},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-autocomplete",{attrs:{items:t.drivers,"item-text":t.getDriver,"item-value":"id",label:"ຄົນຂັບລົດ",outlined:"",dense:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[t._v(" "+t._s(e.item.name)+" ("+t._s(e.item.vehicle.car_id)+") ")]}}]),model:{value:t.selectedDriver,callback:function(e){t.selectedDriver=e},expression:"selectedDriver"}}),i("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.driver_id)+" ")])],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-autocomplete",{attrs:{items:t.routeplans,"item-text":"name","item-value":"id",label:"ເລືອກແຜນເສັ້ນທາງ",outlined:"",dense:""},model:{value:t.selectedRoutePlan,callback:function(e){t.selectedRoutePlan=e},expression:"selectedRoutePlan"}}),i("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.route_plan_id)+" ")])],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-combobox",t._g(t._b({attrs:{multiple:"",chips:"","small-chips":"",label:"ວັນທີຢູ່ໃນແຜນ","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}},"v-combobox",n,!1),a))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[i("v-date-picker",{attrs:{multiple:"","no-title":"",scrollable:""},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}},[i("v-spacer"),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v(" Cancel ")]),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.dates)}}},[t._v(" OK ")])],1)],1),i("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.date)+" ")])],1)],1),i("v-row",[i("v-col",[i("v-checkbox",{staticClass:"my-auto",scopedSlots:t._u([{key:"label",fn:function(){return[i("div",[t._v("ເພີ່ມຈຳນວນຮອບ")])]},proxy:!0}]),model:{value:t.hasRound,callback:function(e){t.hasRound=e},expression:"hasRound"}})],1)],1),t.hasRound?i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{staticClass:"input-number",attrs:{label:"ຈຳນວນຮອບ",required:"",type:"number",outlined:"",dense:""},model:{value:t.round,callback:function(e){t.round=e},expression:"round"}})],1)],1):t._e()],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeAddModal()}}},[t._v(" Close ")]),i("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.SubmitPlan()}}},[t._v(" Add ")])],1)],1)],1)]],2),i("ModalEdit",[[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("Update Plan Calendar")])]),i("v-card-text",[i("v-container",[i("v-form",{ref:"form",attrs:{"lazy-validation":""}},[i("v-row",[i("v-col",{attrs:{cols:"12"},scopedSlots:t._u([{key:"selection",fn:function(e){return[t._v(" "+t._s(e.item.name)+" ("+t._s(e.item.vehicle.car_id)+") ")]}}])},[i("v-autocomplete",{attrs:{items:t.drivers,"item-text":t.getDriver,"item-value":"id",label:"ຄົນຂົບລົດ",outlined:"",dense:""},model:{value:t.calendarEdit.driver_id,callback:function(e){t.$set(t.calendarEdit,"driver_id",e)},expression:"calendarEdit.driver_id"}}),i("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.driver_id)+" ")])],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-autocomplete",{attrs:{items:t.routeplans,"item-text":"name","item-value":"id",label:"ເລືອກແຜນເສັ້ນທາງ",outlined:"",dense:""},model:{value:t.calendarEdit.route_plan_id,callback:function(e){t.$set(t.calendarEdit,"route_plan_id",e)},expression:"calendarEdit.route_plan_id"}}),i("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.route_plan_id)+" ")])],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-menu",{ref:"edit_menu",attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-text-field",t._g(t._b({attrs:{label:"ວັນທີຢູ່ໃນແຜນ",readonly:"",outlined:"",dense:""},model:{value:t.calendarEdit.date,callback:function(e){t.$set(t.calendarEdit,"date",e)},expression:"calendarEdit.date"}},"v-text-field",n,!1),a))]}}]),model:{value:t.edit_menu,callback:function(e){t.edit_menu=e},expression:"edit_menu"}},[i("v-date-picker",{model:{value:t.calendarEdit.date,callback:function(e){t.$set(t.calendarEdit,"date",e)},expression:"calendarEdit.date"}})],1),i("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.date)+" ")])],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeEditModal()}}},[t._v(" Close ")]),i("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.UpdatePlan()}}},[t._v(" Update ")])],1)],1)],1)]],2),i("ModalDelete",[[i("v-card",{staticClass:"elevation-0"},[i("v-card-text",{staticClass:"pa-4"},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-textarea",{attrs:{label:"ຄຳອະທິບາຍ",required:"",outlined:"",dense:""},model:{value:t.delete_description,callback:function(e){t.delete_description=e},expression:"delete_description"}})],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"elevation-0 btn-warning",on:{click:t.closeDelete}},[t._v("Cancel")]),t.delete_description.length>4?i("v-btn",{staticClass:"btn-primary elevation-0",attrs:{loading:t.loading,disabled:t.loading},on:{click:t.deleteItemConfirm}},[t._v("OK ")]):t._e(),i("v-spacer")],1)],1)]],2),i("v-dialog",{attrs:{"max-width":"520px",persistent:""},model:{value:t.cancelDialog,callback:function(e){t.cancelDialog=e},expression:"cancelDialog"}},[i("v-card",{staticClass:"pa-2"},[i("v-card-text",[i("v-container",{staticClass:"text-center"},[i("h3",{staticClass:"py-2"},[t._v("ຕ້ອງການຍົກເລີກຂໍ້ມູນນີ້ບໍ່ ?")])]),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"elevation-0",attrs:{color:"warning"},on:{click:function(e){t.cancelDialog=!1}}},[t._v(" Close ")]),i("v-btn",{staticClass:"elevation-0",attrs:{color:"success",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.cancelItem()}}},[t._v(" ຢືນຢັນການຍົກເລີກ ")]),i("v-spacer")],1)],1)],1)],1)],1)},n=[],s=i("3835"),r=(i("4fad"),i("b0c0"),i("6eceb")),o=i("54da"),l={name:"Customer",data:function(){return{tab:null,calendars:[],loading:!1,cancelDialog:!1,calendarId:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",dates:[],menu:!1,edit_menu:!1,packages:[],selectedPackage:"",server_errors:{},districts:[],selectedDistrict:"",villages:[],selectedVillage:[],selectedStatus:[],round:"",planmonth:{},calendarEdit:{},plan:[],routeplans:[],selectedRoutePlan:"",drivers:[],selectedDriver:"",selectedDriverId:"",date:"",date_menu:!1,hasRound:!1,delete_description:"",selectedCustomerType:"",customer_types:[{name:"home",display:"ຄົວເຮືອນ"},{name:"company",display:"ຫົວໜ່ວຍທຸລະກິດ"}],headers:[{text:"ວັນທີ",value:"date"},{text:"ລົດ",value:"driver"},{text:"ເສັ້ນທາງ",value:"route_plan.name",sortable:!0},{text:"ລູກຄ້າ",value:"plan_calendar_details_count",align:"center",sortable:!1},{text:"ເກັບຂີເຫື້ຍອສຳເລັດ",value:"count_success",align:"center",sortable:!1},{text:"ວັນທີສ້າງ",value:"created_at",align:"center",sortable:!1},{text:"",value:"actions",sortable:!1}],nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length>=2||"Name must be less than 2 characters"}],monthRules:[function(t){return!!t||"Date is required"}]}},methods:{backPrevios:function(){this.$router.go(-1)},fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("plan-month/"+this.$route.params.id+"/plan-calendar",{params:Object(o["a"])([{page:this.pagination.current_page},{per_page:this.per_page},{date:this.date},{route_plan_type:this.selectedCustomerType},{driver_id:this.selectedDriverId}])}).then((function(e){200==e.data.code&&(t.$store.commit("Loading_State",!1),t.calendars=e.data.data.data,t.pagination=e.data.data.pagination)})).catch((function(e){if(t.$store.commit("Loading_State",!1),t.fetchData(),422==e.response.status){t.toast.msg=e.message;for(var i=e.response.data.errors,a=0,n=Object.entries(i);a<n.length;a++){var r=Object(s["a"])(n[a],2),o=r[0],l=r[1];t.server_errors[o]=l[0]}}}))},fetchPlanMonthDetail:function(){var t=this;this.$axios.get("plan-month/"+this.$route.params.id).then((function(e){200==e.data.code&&setTimeout((function(){t.planmonth=e.data.data}),100)})).catch((function(){}))},fetchRoutePlan:function(){var t=this;this.$axios.get("route-plan").then((function(e){200==e.data.code&&setTimeout((function(){t.routeplans=e.data.data}),100)})).catch((function(){}))},fetchDriver:function(){var t=this;this.$axios.get("driver").then((function(e){200==e.data.code&&setTimeout((function(){t.drivers=e.data.data}),100)})).catch((function(){}))},AddPlan:function(){this.fetchRoutePlan(),this.fetchDriver(),this.$store.commit("modalAdd_State",!0)},closeDelete:function(){this.delete_description="",this.$store.commit("modalDelete_State",!1)},deleteItem:function(t){this.calendarId=t,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm:function(){var t=this;this.loading=!0,this.$axios.delete("plan-month/"+this.$route.params.id+"/plan-calendar/"+this.calendarId,{params:Object(o["a"])([{delete_description:this.delete_description}])}).then((function(e){200==e.data.code&&(t.loading=!1,t.delete_description="",t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message}),t.$store.commit("modalDelete_State",!1),t.fetchData())})).catch((function(e){t.$store.commit("modalDelete_State",!1),t.loading=!1,422==e.response.status&&t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message})}))},SubmitPlan:function(){var t=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("plan-month/"+this.$route.params.id+"/plan-calendar",{driver_id:this.selectedDriver,route_plan_id:this.selectedRoutePlan,date:this.dates,round:this.round}).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.dates=[],t.menu=!1,t.closeAddModal(),t.fetchData(),t.selectedRoutePlan="",t.selectedDriver="",t.reset(),t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})}),100)})).catch((function(e){if(t.loading=!1,t.menu=!1,422==e.response.status){t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message});for(var i=e.response.data.errors,a=0,n=Object.entries(i);a<n.length;a++){var r=Object(s["a"])(n[a],2),o=r[0],l=r[1];t.server_errors[o]=l[0]}}})))},confirmCancel:function(t){this.calendarId=t,this.cancelDialog=!0},cancelItem:function(){var t=this;this.loading=!0,this.$axios.post("plan-calendar/"+this.calendarId+"/cancel").then((function(e){200==e.data.code&&(t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message}),t.$store.commit("modalDelete_State",!1),t.fetchData(),t.calendarId="",t.cancelDialog=!1)})).catch((function(e){t.cancelDialog=!1,t.$store.commit("modalDelete_State",!1),t.loading=!1,422==e.response.status&&t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message})}))},closeAddModal:function(){this.$store.commit("modalAdd_State",!1),this.dates=[],this.selectedDriver="",this.selectedRoutePlan=""},editModal:function(t){this.fetchRoutePlan(),this.fetchDriver(),this.calendarEdit=t,this.$store.commit("modalEdit_State",!0)},UpdatePlan:function(){var t=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.put("plan-month/"+this.$route.params.id+"/plan-calendar/"+this.calendarEdit.id,{driver_id:this.calendarEdit.driver_id,route_plan_id:this.calendarEdit.route_plan_id,date:this.calendarEdit.date}).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.closeEditModal(),t.fetchData(),t.edit_menu=!1,t.reset(),t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})}),300)})).catch((function(e){if(t.loading=!1,t.menu=!1,422==e.response.status){t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message});for(var i=e.response.data.errors,a=0,n=Object.entries(i);a<n.length;a++){var r=Object(s["a"])(n[a],2),o=r[0],l=r[1];t.server_errors[o]=l[0]}}})))},closeEditModal:function(){this.$store.commit("modalEdit_State",!1),this.fetchData()},Search:function(){Object(r["a"])(this)},gotoPlanCalendar:function(t){this.$router.push({name:"PlanCalendarDetail",params:{id:t.id,planMonthId:t.plan_month_id}})},reset:function(){this.$refs.form.reset()},getDriver:function(t){return null!==t.vehicle?t.name+" "+t.vehicle.car_id:t.name+" (ຍັງບໍທັນມີລົດ)"},getStatus:function(t){return console.log(t),"1"==t?"error":"0"==t?"success":void 0}},watch:{search:function(t){this.pagination.current_page="",""==t&&this.fetchData()},selectedDriver:function(){this.server_errors.driver_id=""},"calendarEdit.driver_id":function(t){this.server_errors.driver_id="",t&&this.getDriver(t)},selectedRoutePlan:function(){this.server_errors.route_plan_id=""},dates:function(){this.server_errors.date=""},date:function(){this.pagination.current_page="",this.fetchData()},selectedDriverId:function(){this.pagination.current_page="",this.fetchData()},selectedCustomerType:function(){this.pagination.current_page="",this.fetchData()}},created:function(){this.fetchData(),this.fetchPlanMonthDetail(),this.fetchDriver()}},c=l,u=(i("ff04"),i("2877")),d=i("6544"),h=i.n(d),m=i("c6a6"),p=i("2bc5"),f=i("8336"),v=i("b0af"),g=i("99d9"),b=i("ac7c"),_=i("cc20"),I=i("62ad"),x=i("53ca"),y=i("5530"),S=(i("d3b7"),i("25f0"),i("7db0"),i("8a79"),i("fb6a"),i("caad"),i("2532"),i("c740"),i("a434"),i("2bfd"),i("b974")),D=i("80d2"),C=m["a"].extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return S["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty:function(){return null!=this.internalSearch}},methods:{onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var e=this.delimiters.find((function(e){return t.endsWith(e)}));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var t=m["a"].options.methods.genInput.call(this);return delete t.data.attrs.name,t.data.on.paste=this.onPaste,t},genChipSelection:function(t,e){var i=this,a=S["a"].options.methods.genChipSelection.call(this,t,e);return this.multiple&&(a.componentOptions.listeners=Object(y["a"])(Object(y["a"])({},a.componentOptions.listeners),{},{dblclick:function(){i.editingIndex=e,i.internalSearch=i.getText(t),i.selectedIndex=-1}})),a},onChipInput:function(t){S["a"].options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){t.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged:function(t,e){this.autoSelectFirst&&m["a"].options.methods.onFilteredItemsChanged.call(this,t,e)},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[D["y"].home,D["y"].end].includes(e)||S["a"].options.methods.onKeyDown.call(this,t),this.multiple&&e===D["y"].left&&0===this.$refs.input.selectionStart?this.updateSelf():e===D["y"].enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();m["a"].options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():(m["a"].options.methods.selectItem.call(this,t),this.internalSearch&&this.multiple&&this.getText(t).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(t){S["a"].options.methods.setValue.call(this,null!=t?t:this.internalSearch)},updateEditing:function(){var t=this,e=this.internalValue.slice(),i=this.selectedItems.findIndex((function(e){return t.getText(e)===t.internalSearch}));if(i>-1){var a="object"===Object(x["a"])(e[i])?Object.assign({},e[i]):e[i];e.splice(i,1),e.push(a)}else e[this.editingIndex]=this.internalSearch;this.setValue(e),this.editingIndex=-1,this.internalSearch=null},updateCombobox:function(){if(this.searchIsDirty){this.internalSearch!==this.getText(this.internalValue)&&this.setValue();var t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&(this.internalSearch=null)}},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this,e=this.getMenuIndex();if(!(e<0&&!this.searchIsDirty||!this.internalSearch)){if(this.editingIndex>-1)return this.updateEditing();var i=this.selectedItems.findIndex((function(e){return t.internalSearch===t.getText(e)})),a=i>-1&&"object"===Object(x["a"])(this.selectedItems[i])?Object.assign({},this.selectedItems[i]):this.internalSearch;if(i>-1){var n=this.internalValue.slice();n.splice(i,1),this.setValue(n)}if(e>-1)return this.internalSearch=null;this.selectItem(a),this.internalSearch=null}},onPaste:function(t){var e;if(this.multiple&&!this.searchIsDirty){var i=null==(e=t.clipboardData)?void 0:e.getData("text/vnd.vuetify.autocomplete.item+plain");i&&-1===this.findExistingIndex(i)&&(t.preventDefault(),S["a"].options.methods.selectItem.call(this,i))}},clearableCallback:function(){this.editingIndex=-1,m["a"].options.methods.clearableCallback.call(this)}}}),k=i("a523"),V=i("8fea"),w=i("2e4b"),$=i("169a"),O=i("4bd4"),T=i("132d"),j=i("8860"),E=i("da13"),P=i("5d23"),A=i("e449"),M=i("0fd9"),B=i("2fa4"),F=i("8654"),R=(i("a9e3"),i("1681"),i("58df")),z=Object(R["a"])(F["a"]),L=z.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(y["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},F["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=F["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){F["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),N=Object(u["a"])(c,a,n,!1,null,null,null);e["default"]=N.exports;h()(N,{VAutocomplete:m["a"],VBreadcrumbs:p["a"],VBtn:f["a"],VCard:v["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VCheckbox:b["a"],VChip:_["a"],VCol:I["a"],VCombobox:C,VContainer:k["a"],VDataTable:V["a"],VDatePicker:w["a"],VDialog:$["a"],VForm:O["a"],VIcon:T["a"],VList:j["a"],VListItem:E["a"],VListItemTitle:P["d"],VMenu:A["a"],VRow:M["a"],VSpacer:B["a"],VTextField:F["a"],VTextarea:L})},ec29:function(t,e,i){},fe09:function(t,e,i){"use strict";i("d3b7"),i("25f0"),i("4de4");var a=i("c37a"),n=i("5607"),s=i("2b0e"),r=s["a"].extend({name:"rippleable",directives:{ripple:n["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),o=i("8547"),l=i("58df");function c(t){t.preventDefault()}e["a"]=Object(l["a"])(a["a"],r,o["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=a["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:c},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===a&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})},ff04:function(t,e,i){"use strict";i("3f84")}}]);
//# sourceMappingURL=chunk-757651d4.00e53937.js.map