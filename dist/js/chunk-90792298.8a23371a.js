(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90792298"],{"2bc5":function(t,e,a){"use strict";var n=a("5530"),i=(a("a15b"),a("abd3"),a("ade3")),s=a("1c87"),r=a("58df"),o=Object(r["a"])(s["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(i["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),a=e.tag,i=e.data;return t("li",[t(a,Object(n["a"])(Object(n["a"])({},i),{},{attrs:Object(n["a"])(Object(n["a"])({},i.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),l=a("80d2"),c=Object(l["j"])("v-breadcrumbs__divider","li"),d=a("7560");e["a"]=Object(r["a"])(d["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(n["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(c,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,a=[],n=0;n<this.items.length;n++){var i=this.items[n];a.push(i.text),e?t.push(this.$scopedSlots.item({item:i})):t.push(this.$createElement(o,{key:a.join("."),props:i},[i.text])),n<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},"2bfd":function(t,e,a){},"3f84":function(t,e,a){},"4bd4":function(t,e,a){"use strict";var n=a("5530"),i=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),s=a("7e2b"),r=a("3206");e["a"]=Object(i["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=a(t)))})):n.valid=a(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"6eceb":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("ac1f"),a("841c");var n=function(t){""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},abd3:function(t,e,a){},c6a6:function(t,e,a){"use strict";var n=a("5530"),i=(a("d81d"),a("4de4"),a("498a"),a("7db0"),a("caad"),a("2532"),a("2bfd"),a("b974")),s=a("8654"),r=a("d9f7"),o=a("80d2"),l=Object(n["a"])(Object(n["a"])({},i["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,a){return a.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:function(){return l}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var a=Object(o["s"])(e,t.itemText),n=null!=a?String(a):"";return t.filter(e,String(t.internalSearch),n)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=i["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(n["a"])(Object(n["a"])({},l),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=i["a"].options.computed.listData.call(this);return t.props=Object(n["a"])(Object(n["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var a=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){a.internalSearch&&(1===t.length||a.autoSelectFirst)&&(a.$refs.menu.getTiles(),a.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===o["z"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===o["z"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==o["z"].backspace&&t!==o["z"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var a=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===a){var n=this.selectedItems.length,i=t!==n-1?t:t-1,s=this.selectedItems[i];s?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=i}else this.selectedIndex=a}},clearableCallback:function(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return t.data=Object(r["a"])(t.data,{attrs:{"aria-activedescendant":Object(o["q"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(o["q"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=i["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,a=e.value;e.value&&this.activateMenu(),this.internalSearch=a,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[o["z"].home,o["z"].end].includes(e)||i["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){i["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){i["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,a;if(-1!==this.selectedIndex){var n=this.selectedItems[this.selectedIndex],i=this.getText(n);null==(e=t.clipboardData)||e.setData("text/plain",i),null==(a=t.clipboardData)||a.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}}})},c7c6:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-breadcrumbs",{staticClass:"pa-0",attrs:{large:""}},[a("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[a("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" ຈັດການເວລາໃຫ້ພະນັກງານເກັບຂີ້ເຫື້ຍອ "),a("span",{staticClass:"ml-2 primary-color"},[t._v(t._s(t.planmonth.name))])],1)],1),a("v-col",{attrs:{cols:"1"}},[a("v-btn",{staticClass:"btn-primary",on:{click:function(e){return t.AddPlan()}}},[a("v-icon",[t._v("mdi-plus")])],1)],1),a("v-col",{attrs:{cols:"5"}},[a("v-text-field",{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຊື່",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),a("div",[a("v-card",[a("v-card-text",[t.calendars?a("v-data-table",{attrs:{headers:t.headers,items:t.calendars,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.driver",fn:function(e){var n=e.item;return[a("div",[t._v(t._s(n.driver.name)+" "+t._s(n.driver.surname))])]}},{key:"item.date",fn:function(e){var n=e.item;return[a("v-chip",{attrs:{color:"success"}},[t._v(t._s(n.date))])]}},{key:"item.detail",fn:function(e){var n=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.gotoPlanCalendar(n)}}},[t._v("mdi-eye")])]}},{key:"item.actions",fn:function(e){var n=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editModal(n)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(n.id)}}},[t._v(" mdi-delete ")])]}},{key:"item.plan",fn:function(e){var n=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editModal(n)}}},[t._v(" mdi-pencil ")])]}}],null,!1,1580269523)}):t._e(),a("br"),[t.pagination.total_pages>1?a("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1),a("ModalAdd",[[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Add Plan Calendar")])]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-autocomplete",{attrs:{items:t.drivers,"item-text":"name","item-value":"id",label:"ຄົນຂົບລົດ",outlined:"",dense:""},model:{value:t.selectedDriver,callback:function(e){t.selectedDriver=e},expression:"selectedDriver"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.driver_id)+" ")])],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-autocomplete",{attrs:{items:t.routeplans,"item-text":"name","item-value":"id",label:"ເລືອກແຜນເສັ້ນທາງ",outlined:"",dense:""},model:{value:t.selectedRoutePlan,callback:function(e){t.selectedRoutePlan=e},expression:"selectedRoutePlan"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.route_plan_id)+" ")])],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-combobox",t._g(t._b({attrs:{multiple:"",chips:"","small-chips":"",label:"ວັນທີ","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}},"v-combobox",i,!1),n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{multiple:"","no-title":"",scrollable:""},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.dates)}}},[t._v(" OK ")])],1)],1),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.date)+" ")])],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeAddModal()}}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.SubmitPlan()}}},[t._v(" Add ")])],1)],1)],1)]],2),a("ModalEdit",[[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Update Plan Calendar")])]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-autocomplete",{attrs:{items:t.drivers,"item-text":"name","item-value":"id",label:"ຄົນຂົບລົດ",outlined:"",dense:""},model:{value:t.calendarEdit.driver_id,callback:function(e){t.$set(t.calendarEdit,"driver_id",e)},expression:"calendarEdit.driver_id"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.driver_id)+" ")])],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-autocomplete",{attrs:{items:t.routeplans,"item-text":"name","item-value":"id",label:"ເລືອກແຜນເສັ້ນທາງ",outlined:"",dense:""},model:{value:t.calendarEdit.route_plan_id,callback:function(e){t.$set(t.calendarEdit,"route_plan_id",e)},expression:"calendarEdit.route_plan_id"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.route_plan_id)+" ")])],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-menu",{ref:"edit_menu",attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"ວັນທີ",readonly:"",outlined:"",dense:""},model:{value:t.calendarEdit.date,callback:function(e){t.$set(t.calendarEdit,"date",e)},expression:"calendarEdit.date"}},"v-text-field",i,!1),n))]}}]),model:{value:t.edit_menu,callback:function(e){t.edit_menu=e},expression:"edit_menu"}},[a("v-date-picker",{model:{value:t.calendarEdit.date,callback:function(e){t.$set(t.calendarEdit,"date",e)},expression:"calendarEdit.date"}})],1),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.date)+" ")])],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeEditModal()}}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.UpdatePlan()}}},[t._v(" Update ")])],1)],1)],1)]],2),a("ModalDelete",[[a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:t.deleteItemConfirm}},[t._v("OK")]),a("v-spacer")],1)]],2)],1)},i=[],s=a("3835"),r=(a("4fad"),a("6eceb")),o={name:"Customer",data:function(){return{tab:null,calendars:[],loading:!1,calendarId:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",dates:[],menu:!1,edit_menu:!1,packages:[],selectedPackage:"",server_errors:{},districts:[],selectedDistrict:"",villages:[],selectedVillage:[],selectedStatus:[],planmonth:{},calendarEdit:{},plan:[],routeplans:[],selectedRoutePlan:"",drivers:[],selectedDriver:"",headers:[{text:"ວັນທີເກັບຂີ້ເຫື້ຍອ",value:"date"},{text:"ຊື່ພະນັກງານ(ທະບຽນລົດ)",value:"driver"},{text:"ເສັ້ນທາງ",value:"route_plan.name",sortable:!0},{text:"ຈຳນວນລູກຄ້າ",value:"plan_calendar_details_count",align:"center",sortable:!1},{text:"ລາຍລະອຽດ",value:"detail",align:"center",sortable:!1},{text:"",value:"actions",sortable:!1}],nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length>=2||"Name must be less than 2 characters"}],monthRules:[function(t){return!!t||"Date is required"}]}},methods:{backPrevios:function(){this.$router.go(-1)},fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("plan-month/"+this.$route.params.id+"/plan-calendar",{params:{page:this.pagination.current_page,per_page:this.per_page}}).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.calendars=e.data.data.data,t.pagination=e.data.data.pagination}),100)})).catch((function(e){if(t.$store.commit("Loading_State",!1),t.fetchData(),422==e.response.status){t.toast.msg=e.message;for(var a=e.response.data.errors,n=0,i=Object.entries(a);n<i.length;n++){var r=Object(s["a"])(i[n],2),o=r[0],l=r[1];t.server_errors[o]=l[0]}}}))},fetchPlanMonthDetail:function(){var t=this;this.$axios.get("plan-month/"+this.$route.params.id).then((function(e){200==e.data.code&&setTimeout((function(){t.planmonth=e.data.data}),100)})).catch((function(){}))},fetchRoutePlan:function(){var t=this;this.$axios.get("route-plan").then((function(e){200==e.data.code&&setTimeout((function(){t.routeplans=e.data.data}),100)})).catch((function(){}))},fetchDriver:function(){var t=this;this.$axios.get("driver").then((function(e){200==e.data.code&&setTimeout((function(){t.drivers=e.data.data}),100)})).catch((function(){}))},AddPlan:function(){this.fetchRoutePlan(),this.fetchDriver(),this.$store.commit("modalAdd_State",!0)},closeDelete:function(){this.$store.commit("modalDelete_State",!1)},deleteItem:function(t){this.calendarId=t,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm:function(){var t=this;this.loading=!0,this.$axios.delete("plan-month/"+this.$route.params.id+"/plan-calendar/"+this.calendarId).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message}),t.$store.commit("modalDelete_State",!1),t.fetchData()}),100)})).catch((function(e){t.fetchData(),t.$store.commit("modalDelete_State",!1),t.loading=!1,422==e.response.status&&t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message})}))},SubmitPlan:function(){var t=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("plan-month/"+this.$route.params.id+"/plan-calendar",{driver_id:this.selectedDriver,route_plan_id:this.selectedRoutePlan,date:this.dates}).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.dates=[],t.menu=!1,t.closeAddModal(),t.fetchData(),t.selectedRoutePlan="",t.selectedDriver="",t.reset(),t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})}),100)})).catch((function(e){if(t.loading=!1,t.menu=!1,t.fetchData(),422==e.response.status){t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message});for(var a=e.response.data.errors,n=0,i=Object.entries(a);n<i.length;n++){var r=Object(s["a"])(i[n],2),o=r[0],l=r[1];t.server_errors[o]=l[0]}}})))},closeAddModal:function(){this.$store.commit("modalAdd_State",!1),this.dates=[],this.selectedDriver="",this.selectedRoutePlan=""},editModal:function(t){this.fetchRoutePlan(),this.fetchDriver(),this.calendarEdit=t,this.$store.commit("modalEdit_State",!0)},UpdatePlan:function(){var t=this;console.log(this.$route.params.id),console.log(this.calendarEdit.id),1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.put("plan-month/"+this.$route.params.id+"/plan-calendar/"+this.calendarEdit.id,{driver_id:this.calendarEdit.driver_id,route_plan_id:this.calendarEdit.route_plan_id,date:this.calendarEdit.date}).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.closeEditModal(),t.fetchData(),t.edit_menu=!1,t.reset(),t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})}),300)})).catch((function(e){if(t.loading=!1,t.menu=!1,t.fetchData(),422==e.response.status){t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message});for(var a=e.response.data.errors,n=0,i=Object.entries(a);n<i.length;n++){var r=Object(s["a"])(i[n],2),o=r[0],l=r[1];t.server_errors[o]=l[0]}}})))},closeEditModal:function(){this.$store.commit("modalEdit_State",!1),this.fetchData()},Search:function(){Object(r["a"])(this)},gotoPlanCalendar:function(t){this.$router.push({name:"PlanCalendarDetail",params:{id:t.id,planMonthId:t.plan_month_id}})},reset:function(){this.$refs.form.reset()}},watch:{search:function(t){""==t&&this.fetchData()},selectedDriver:function(){this.server_errors.driver_id=""},selectedRoutePlan:function(){this.server_errors.route_plan_id=""},dates:function(){this.server_errors.date=""}},created:function(){this.fetchData(),this.fetchPlanMonthDetail()}},l=o,c=(a("ff04"),a("2877")),d=a("6544"),u=a.n(d),h=a("c6a6"),m=a("2bc5"),f=a("8336"),p=a("b0af"),v=a("99d9"),g=a("cc20"),b=a("62ad"),_=a("53ca"),I=a("5530"),x=(a("d3b7"),a("25f0"),a("7db0"),a("8a79"),a("fb6a"),a("b0c0"),a("caad"),a("2532"),a("c740"),a("a434"),a("2bfd"),a("b974")),S=a("80d2"),D=h["a"].extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return x["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty:function(){return null!=this.internalSearch}},methods:{onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var e=this.delimiters.find((function(e){return t.endsWith(e)}));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var t=h["a"].options.methods.genInput.call(this);return delete t.data.attrs.name,t.data.on.paste=this.onPaste,t},genChipSelection:function(t,e){var a=this,n=x["a"].options.methods.genChipSelection.call(this,t,e);return this.multiple&&(n.componentOptions.listeners=Object(I["a"])(Object(I["a"])({},n.componentOptions.listeners),{},{dblclick:function(){a.editingIndex=e,a.internalSearch=a.getText(t),a.selectedIndex=-1}})),n},onChipInput:function(t){x["a"].options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){t.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged:function(t,e){this.autoSelectFirst&&h["a"].options.methods.onFilteredItemsChanged.call(this,t,e)},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[S["z"].home,S["z"].end].includes(e)||x["a"].options.methods.onKeyDown.call(this,t),this.multiple&&e===S["z"].left&&0===this.$refs.input.selectionStart?this.updateSelf():e===S["z"].enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();h["a"].options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():(h["a"].options.methods.selectItem.call(this,t),this.internalSearch&&this.multiple&&this.getText(t).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(t){x["a"].options.methods.setValue.call(this,null!=t?t:this.internalSearch)},updateEditing:function(){var t=this,e=this.internalValue.slice(),a=this.selectedItems.findIndex((function(e){return t.getText(e)===t.internalSearch}));if(a>-1){var n="object"===Object(_["a"])(e[a])?Object.assign({},e[a]):e[a];e.splice(a,1),e.push(n)}else e[this.editingIndex]=this.internalSearch;this.setValue(e),this.editingIndex=-1,this.internalSearch=null},updateCombobox:function(){if(this.searchIsDirty){this.internalSearch!==this.getText(this.internalValue)&&this.setValue();var t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&(this.internalSearch=null)}},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this,e=this.getMenuIndex();if(!(e<0&&!this.searchIsDirty||!this.internalSearch)){if(this.editingIndex>-1)return this.updateEditing();var a=this.selectedItems.findIndex((function(e){return t.internalSearch===t.getText(e)})),n=a>-1&&"object"===Object(_["a"])(this.selectedItems[a])?Object.assign({},this.selectedItems[a]):this.internalSearch;if(a>-1){var i=this.internalValue.slice();i.splice(a,1),this.setValue(i)}if(e>-1)return this.internalSearch=null;this.selectItem(n),this.internalSearch=null}},onPaste:function(t){var e;if(this.multiple&&!this.searchIsDirty){var a=null==(e=t.clipboardData)?void 0:e.getData("text/vnd.vuetify.autocomplete.item+plain");a&&-1===this.findExistingIndex(a)&&(t.preventDefault(),x["a"].options.methods.selectItem.call(this,a))}},clearableCallback:function(){this.editingIndex=-1,h["a"].options.methods.clearableCallback.call(this)}}}),y=a("a523"),C=a("8fea"),$=a("2e4b"),k=a("4bd4"),V=a("132d"),w=a("e449"),O=a("0fd9"),j=a("2fa4"),E=a("8654"),T=Object(c["a"])(l,n,i,!1,null,null,null);e["default"]=T.exports;u()(T,{VAutocomplete:h["a"],VBreadcrumbs:m["a"],VBtn:f["a"],VCard:p["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VChip:g["a"],VCol:b["a"],VCombobox:D,VContainer:y["a"],VDataTable:C["a"],VDatePicker:$["a"],VForm:k["a"],VIcon:V["a"],VMenu:w["a"],VRow:O["a"],VSpacer:j["a"],VTextField:E["a"]})},ff04:function(t,e,a){"use strict";a("3f84")}}]);
//# sourceMappingURL=chunk-90792298.8a23371a.js.map