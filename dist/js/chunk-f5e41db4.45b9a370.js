(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5e41db4"],{"2bc5":function(t,e,n){"use strict";var a=n("5530"),i=(n("a15b"),n("abd3"),n("ade3")),s=n("1c87"),r=n("58df"),o=Object(r["a"])(s["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(i["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),n=e.tag,i=e.data;return t("li",[t(n,Object(a["a"])(Object(a["a"])({},i),{},{attrs:Object(a["a"])(Object(a["a"])({},i.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),l=n("80d2"),c=Object(l["j"])("v-breadcrumbs__divider","li"),d=n("7560");e["a"]=Object(r["a"])(d["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(a["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(c,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,n=[],a=0;a<this.items.length;a++){var i=this.items[a];n.push(i.text),e?t.push(this.$scopedSlots.item({item:i})):t.push(this.$createElement(o,{key:n.join("."),props:i},[i.text])),a<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},"2bfd":function(t,e,n){},"3f84":function(t,e,n){},"4bd4":function(t,e,n){"use strict";var a=n("5530"),i=(n("caad"),n("2532"),n("07ac"),n("4de4"),n("159b"),n("7db0"),n("58df")),s=n("7e2b"),r=n("3206");e["a"]=Object(i["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,n=function(t){return t.$watch("hasError",(function(n){e.$set(e.errorBag,t._uid,n)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=n(t)))})):a.valid=n(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var n=this.watchers.find((function(t){return t._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},abd3:function(t,e,n){},c6a6:function(t,e,n){"use strict";var a=n("5530"),i=(n("d81d"),n("4de4"),n("498a"),n("7db0"),n("caad"),n("2532"),n("2bfd"),n("b974")),s=n("8654"),r=n("d9f7"),o=n("80d2"),l=Object(a["a"])(Object(a["a"])({},i["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:function(){return l}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(o["s"])(e,t.itemText),a=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),a)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=i["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(a["a"])(Object(a["a"])({},l),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=i["a"].options.computed.listData.call(this);return t.props=Object(a["a"])(Object(a["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===o["z"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===o["z"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==o["z"].backspace&&t!==o["z"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var a=this.selectedItems.length,i=t!==a-1?t:t-1,s=this.selectedItems[i];s?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=i}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return t.data=Object(r["a"])(t.data,{attrs:{"aria-activedescendant":Object(o["q"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(o["q"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=i["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[o["z"].home,o["z"].end].includes(e)||i["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){i["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){i["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var a=this.selectedItems[this.selectedIndex],i=this.getText(a);null==(e=t.clipboardData)||e.setData("text/plain",i),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}}})},c7c6:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"my-n6"},[n("v-col",{attrs:{cols:"6"}},[n("v-breadcrumbs",{staticClass:"pa-0",attrs:{large:""}},[n("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[n("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" ລາຍການຈັດເວລາໃຫ້ພະນັກງານເກັບຂີ້ເຫຍື້ຍອ")],1)],1),n("v-col",{attrs:{cols:"1"}},[n("v-btn",{staticClass:"btn-primary",on:{click:function(e){return t.AddPlan()}}},[n("v-icon",[t._v("mdi-plus")])],1)],1),n("v-col",{attrs:{cols:"5"}},[n("v-text-field",{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຊື່",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),n("div",[n("v-card",[n("v-card-text",[t.calendars?n("v-data-table",{attrs:{headers:t.headers,items:t.calendars,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.driver",fn:function(e){var a=e.item;return[n("div",[t._v(" "+t._s(a.driver.name)+" "+t._s(a.driver.surname)+" "),n("span",{staticClass:"primary--text"},[t._v("- "+t._s(a.driver.car_number))])])]}},{key:"item.date",fn:function(e){var a=e.item;return[n("v-chip",{attrs:{color:"success"}},[t._v(t._s(a.date))])]}},{key:"item.detail",fn:function(e){var a=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.gotoPlanCalendar(a.id)}}},[t._v("mdi-eye")])]}},{key:"item.actions",fn:function(e){var a=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editModal(a)}}},[t._v(" mdi-pencil ")]),n("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(a.id)}}},[t._v(" mdi-delete ")])]}},{key:"item.plan",fn:function(e){var a=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editModal(a)}}},[t._v(" mdi-pencil ")])]}}],null,!1,570593876)}):t._e(),n("br"),[t.pagination.total_pages>1?n("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1),n("ModalAdd",[[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Add Plan Calendar")])]),n("v-card-text",[n("v-container",[n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-select",{attrs:{items:t.drivers,"item-text":"name","item-value":"id",label:"ຄົນຂົບລົດ",outlined:"",dense:""},model:{value:t.selectedDriver,callback:function(e){t.selectedDriver=e},expression:"selectedDriver"}}),n("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.driver_id)+" ")])],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-select",{attrs:{items:t.routeplans,"item-text":"name","item-value":"id",label:"ເລືອກແຜນເສັ້ນທາງ",outlined:"",dense:""},model:{value:t.selectedRoutePlan,callback:function(e){t.selectedRoutePlan=e},expression:"selectedRoutePlan"}}),n("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.route_plan_id)+" ")])],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.dates,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){t.dates=e},"update:return-value":function(e){t.dates=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-combobox",t._g(t._b({attrs:{multiple:"",chips:"","small-chips":"",label:"ວັນທີ","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}},"v-combobox",i,!1),a))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-date-picker",{attrs:{multiple:"","no-title":"",scrollable:""},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v(" Cancel ")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.dates)}}},[t._v(" OK ")])],1)],1),n("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.date)+" ")]),n("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.date)+" ")])],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeAddModal()}}},[t._v(" Close ")]),n("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.SubmitPlan()}}},[t._v(" Add ")])],1)],1)],1)]],2),n("ModalEdit",[[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Update Plan Calendar")])]),n("v-card-text",[n("v-container",[n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-select",{attrs:{items:t.drivers,"item-text":"name","item-value":"id",label:"ຄົນຂົບລົດ",outlined:"",dense:""},model:{value:t.calendarEdit.driver_id,callback:function(e){t.$set(t.calendarEdit,"driver_id",e)},expression:"calendarEdit.driver_id"}}),n("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.driver_id)+" ")])],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-select",{attrs:{items:t.routeplans,"item-text":"name","item-value":"id",label:"ເລືອກແຜນເສັ້ນທາງ",outlined:"",dense:""},model:{value:t.calendarEdit.route_plan_id,callback:function(e){t.$set(t.calendarEdit,"route_plan_id",e)},expression:"calendarEdit.route_plan_id"}}),n("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.route_plan_id)+" ")])],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.dates,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){t.dates=e},"update:return-value":function(e){t.dates=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-combobox",t._g(t._b({attrs:{multiple:"",chips:"","small-chips":"",label:"ວັນທີ","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}},"v-combobox",i,!1),a))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-date-picker",{attrs:{multiple:"","no-title":"",scrollable:""},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v(" Cancel ")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.dates)}}},[t._v(" OK ")])],1)],1),n("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.date)+" ")])],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeEditModal()}}},[t._v(" Close ")]),n("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.UpdatePlan()}}},[t._v(" Update ")])],1)],1)],1)]],2),n("ModalDelete",[[n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:t.deleteItemConfirm}},[t._v("OK")]),n("v-spacer")],1)]],2)],1)},i=[],s=n("3835"),r=(n("4fad"),n("6eceb")),o={name:"Customer",data:function(){return{tab:null,calendars:[],loading:!1,calendarId:"",offset:12,pagination:{},per_page:15,search:"",oldVal:"",dates:[],menu:!1,packages:[],selectedPackage:"",server_errors:{},districts:[],selectedDistrict:"",villages:[],selectedVillage:[],selectedStatus:[],plan:{},calendarEdit:{},routeplans:[],selectedRoutePlan:"",drivers:[],selectedDriver:"",headers:[{text:"ວັນທີ",value:"date"},{text:"ຊື່ພະນັກງານ(ທະບຽນລົດ)",value:"driver"},{text:"ເສັ້ນທາງ",value:"route_plan.name",sortable:!0},{text:"ຈຳນວນລູກຄ້າ",value:"plan_calendar_details_count",align:"center",sortable:!1},{text:"ລາຍລະອຽດ",value:"detail",align:"center",sortable:!1},{text:"",value:"actions",sortable:!1}],toast:{value:!0,color:"success",msg:""},toast_error:{value:!0,color:"error",msg:"Something when wrong!"},nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length>=2||"Name must be less than 2 characters"}],monthRules:[function(t){return!!t||"Date is required"}]}},methods:{backPrevios:function(){this.$router.go(-1)},fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("plan-month/"+this.$route.params.id+"/plan-calendar",{params:{page:this.pagination.current_page,per_page:this.per_page}}).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.calendars=e.data.data.data,console.log(t.calendars),t.pagination=e.data.data.pagination}),300)})).catch((function(e){if(t.$store.commit("Loading_State",!1),t.fetchData(),422==e.response.status){t.toast.msg=e.message;for(var n=e.response.data.errors,a=0,i=Object.entries(n);a<i.length;a++){var r=Object(s["a"])(i[a],2),o=r[0],l=r[1];t.server_errors[o]=l[0]}}}))},fetchRoutePlan:function(){var t=this;this.$axios.get("route-plan").then((function(e){200==e.data.code&&setTimeout((function(){t.routeplans=e.data.data}),300)})).catch((function(){}))},fetchDriver:function(){var t=this;this.$axios.get("driver").then((function(e){200==e.data.code&&setTimeout((function(){t.drivers=e.data.data}),300)})).catch((function(){}))},AddPlan:function(){this.fetchRoutePlan(),this.fetchDriver(),this.$store.commit("modalAdd_State",!0)},closeDelete:function(){this.$store.commit("modalDelete_State",!1)},deleteItem:function(t){this.calendarId=t,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm:function(){var t=this;this.loading=!0,this.$axios.delete("plan-month/"+this.$route.params.id+"/plan-calendar"+this.calendarId).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.toast.msg=e.data.message,t.$store.commit("Toast_State",t.toast),t.$store.commit("modalDelete_State",!1),t.fetchData()}),300)})).catch((function(){t.fetchData(),t.$store.commit("Toast_State",t.toast_error),t.$store.commit("modalDelete_State",!1),t.loading=!1}))},SubmitPlan:function(){var t=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("plan-month/"+this.$route.params.id+"/plan-calendar",{driver_id:this.selectedDriver,route_plan_id:this.selectedRoutePlan,date:this.dates}).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.closeAddModal(),t.fetchData(),t.dates=[],t.selectedRoutePlan="",t.selectedDriver="",t.reset(),t.$store.commit("Toast_State",t.toast)}),300)})).catch((function(e){if(t.loading=!1,t.$store.commit("Toast_State",t.toast_error),t.fetchData(),422==e.response.status){var n=e.response.data.errors;console.log(n);for(var a=0,i=Object.entries(n);a<i.length;a++){var r=Object(s["a"])(i[a],2),o=r[0],l=r[1];t.server_errors[o]=l[0],console.log(t.server_errors)}}})))},closeAddModal:function(){this.$store.commit("modalAdd_State",!1)},editModal:function(t){this.fetchRoutePlan(),this.fetchDriver(),this.calendarEdit=t,this.$store.commit("modalEdit_State",!0)},UpdatePlan:function(){var t=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.put("plan-month/"+this.$route.params.id+"/plan-calendar/"+this.calendarEdit.id,{driver_id:this.calendarEdit.driver_id,route_plan_id:this.calendarEdit.route_plan_id,date:this.calendarEdit.date}).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.closeEditModal(),t.fetchData(),t.dates=[],t.reset(),t.$store.commit("Toast_State",t.toast)}),300)})).catch((function(e){if(t.loading=!1,t.$store.commit("Toast_State",t.toast_error),t.fetchData(),422==e.response.status)for(var n=e.response.data.errors,a=0,i=Object.entries(n);a<i.length;a++){var r=Object(s["a"])(i[a],2),o=r[0],l=r[1];t.server_errors[o]=l[0]}})))},closeEditModal:function(){this.$store.commit("modalEdit_State",!1)},Search:function(){Object(r["a"])(this)},gotoPlanCalendar:function(t){this.$router.push({name:"PlanCalendarDetail",params:{id:t}})}},watch:{search:function(t){""==t&&this.fetchData()},selectedDriver:function(){this.server_errors.driver_id=""},selectedRoutePlan:function(){this.server_errors.route_plan_id=""},dates:function(){this.server_errors.date=""}},created:function(){this.fetchData()}},l=o,c=(n("ff04"),n("2877")),d=n("6544"),u=n.n(d),h=n("2bc5"),m=n("8336"),f=n("b0af"),p=n("99d9"),v=n("cc20"),b=n("62ad"),g=n("53ca"),_=n("5530"),I=(n("d3b7"),n("25f0"),n("7db0"),n("8a79"),n("fb6a"),n("b0c0"),n("caad"),n("2532"),n("c740"),n("a434"),n("2bfd"),n("b974")),x=n("c6a6"),S=n("80d2"),y=x["a"].extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return I["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty:function(){return null!=this.internalSearch}},methods:{onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var e=this.delimiters.find((function(e){return t.endsWith(e)}));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var t=x["a"].options.methods.genInput.call(this);return delete t.data.attrs.name,t.data.on.paste=this.onPaste,t},genChipSelection:function(t,e){var n=this,a=I["a"].options.methods.genChipSelection.call(this,t,e);return this.multiple&&(a.componentOptions.listeners=Object(_["a"])(Object(_["a"])({},a.componentOptions.listeners),{},{dblclick:function(){n.editingIndex=e,n.internalSearch=n.getText(t),n.selectedIndex=-1}})),a},onChipInput:function(t){I["a"].options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){t.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged:function(t,e){this.autoSelectFirst&&x["a"].options.methods.onFilteredItemsChanged.call(this,t,e)},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[S["z"].home,S["z"].end].includes(e)||I["a"].options.methods.onKeyDown.call(this,t),this.multiple&&e===S["z"].left&&0===this.$refs.input.selectionStart?this.updateSelf():e===S["z"].enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();x["a"].options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():(x["a"].options.methods.selectItem.call(this,t),this.internalSearch&&this.multiple&&this.getText(t).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(t){I["a"].options.methods.setValue.call(this,null!=t?t:this.internalSearch)},updateEditing:function(){var t=this,e=this.internalValue.slice(),n=this.selectedItems.findIndex((function(e){return t.getText(e)===t.internalSearch}));if(n>-1){var a="object"===Object(g["a"])(e[n])?Object.assign({},e[n]):e[n];e.splice(n,1),e.push(a)}else e[this.editingIndex]=this.internalSearch;this.setValue(e),this.editingIndex=-1,this.internalSearch=null},updateCombobox:function(){if(this.searchIsDirty){this.internalSearch!==this.getText(this.internalValue)&&this.setValue();var t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&(this.internalSearch=null)}},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this,e=this.getMenuIndex();if(!(e<0&&!this.searchIsDirty||!this.internalSearch)){if(this.editingIndex>-1)return this.updateEditing();var n=this.selectedItems.findIndex((function(e){return t.internalSearch===t.getText(e)})),a=n>-1&&"object"===Object(g["a"])(this.selectedItems[n])?Object.assign({},this.selectedItems[n]):this.internalSearch;if(n>-1){var i=this.internalValue.slice();i.splice(n,1),this.setValue(i)}if(e>-1)return this.internalSearch=null;this.selectItem(a),this.internalSearch=null}},onPaste:function(t){var e;if(this.multiple&&!this.searchIsDirty){var n=null==(e=t.clipboardData)?void 0:e.getData("text/vnd.vuetify.autocomplete.item+plain");n&&-1===this.findExistingIndex(n)&&(t.preventDefault(),I["a"].options.methods.selectItem.call(this,n))}},clearableCallback:function(){this.editingIndex=-1,x["a"].options.methods.clearableCallback.call(this)}}}),D=n("a523"),C=n("8fea"),k=n("2e4b"),$=n("4bd4"),V=n("132d"),w=n("e449"),O=n("0fd9"),j=n("2fa4"),T=n("8654"),E=Object(c["a"])(l,a,i,!1,null,null,null);e["default"]=E.exports;u()(E,{VBreadcrumbs:h["a"],VBtn:m["a"],VCard:f["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VChip:v["a"],VCol:b["a"],VCombobox:y,VContainer:D["a"],VDataTable:C["a"],VDatePicker:k["a"],VForm:$["a"],VIcon:V["a"],VMenu:w["a"],VRow:O["a"],VSelect:I["a"],VSpacer:j["a"],VTextField:T["a"]})},ff04:function(t,e,n){"use strict";n("3f84")}}]);
//# sourceMappingURL=chunk-f5e41db4.45b9a370.js.map