(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a71196c0"],{"2bfd":function(t,e,a){},"347c":function(t,e,a){t.exports=a.p+"img/pin1.d74f27bd.svg"},"4bd4":function(t,e,a){"use strict";var i=a("5530"),s=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),n=a("7e2b"),r=a("3206");e["a"]=Object(s["a"])(n["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=a(t)))})):i.valid=a(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"4fad":function(t,e,a){var i=a("23e7"),s=a("6f53").entries;i({target:"Object",stat:!0},{entries:function(t){return s(t)}})},"5b1b":function(t,e,a){"use strict";a("82ff")},"6ca7":function(t,e,a){},7660:function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return s})),a.d(e,"d",(function(){return n})),a.d(e,"b",(function(){return r}));var i=function(t){switch(t){case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ເປັນຖ້ຽວ";case"chartered":return"ມອບເໝົາ";case"bag":return"ບໍລິມາດ";default:return t}},s=[{en:"container",la:"ຄອນເທນເນີ"},{en:"fix_cost",la:"ເປັນຖ້ຽວ"},{en:"chartered",la:"ມອບເໝົາ"},{en:"bag",la:"ບໍລິມາດ"}],n=function(t){switch(t){case"company":return"ຫົວໜ່ວຍທຸລະກິດ";case"home":return"ຄົວເຮືອນ";default:return t}},r=function(t){switch(t){case"bag":case"chartered":return"ຖົງ";case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ຖ້ຽວ";default:return t}}},"82ff":function(t,e,a){},ac7c:function(t,e,a){"use strict";var i=a("15fd"),s=a("5530"),n=(a("d3b7"),a("25f0"),a("6ca7"),a("ec29"),a("9d26")),r=a("c37a"),l=a("fe09"),o=["title"];e["a"]=l["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(i["a"])(t,o));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(n["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(s["a"])(Object(s["a"])({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},c6a6:function(t,e,a){"use strict";var i=a("5530"),s=(a("d81d"),a("4de4"),a("498a"),a("7db0"),a("caad"),a("2532"),a("2bfd"),a("b974")),n=a("8654"),r=a("d9f7"),l=a("80d2"),o=Object(i["a"])(Object(i["a"])({},s["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=s["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,a){return a.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:s["a"].options.props.menuProps.type,default:function(){return o}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var a=Object(l["r"])(e,t.itemText),i=null!=a?String(a):"";return t.filter(e,String(t.internalSearch),i)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=s["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(i["a"])(Object(i["a"])({},o),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=s["a"].options.computed.listData.call(this);return t.props=Object(i["a"])(Object(i["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var a=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){a.internalSearch&&(1===t.length||a.autoSelectFirst)&&(a.$refs.menu.getTiles(),a.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===l["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===l["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==l["y"].backspace&&t!==l["y"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var a=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===a){var i=this.selectedItems.length,s=t!==i-1?t:t-1,n=this.selectedItems[s];n?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=s}else this.selectedIndex=a}},clearableCallback:function(){this.internalSearch=null,s["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=n["a"].options.methods.genInput.call(this);return t.data=Object(r["a"])(t.data,{attrs:{"aria-activedescendant":Object(l["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=s["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?s["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,a=e.value;e.value&&this.activateMenu(),this.internalSearch=a,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[l["y"].home,l["y"].end].includes(e)||s["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){s["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){s["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){s["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,a;if(-1!==this.selectedIndex){var i=this.selectedItems[this.selectedIndex],s=this.getText(i);null==(e=t.clipboardData)||e.setData("text/plain",s),null==(a=t.clipboardData)||a.setData("text/vnd.vuetify.autocomplete.item+plain",s),t.preventDefault()}}}})},d3df:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-breadcrumbs",{attrs:{large:""}},[a("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[a("v-icon",[t._v("mdi-keyboard-backspace")])],1),t._v("ແກ້ໄຂຂໍ້ມູນລູກຄ້າ ")],1),a("v-card",[a("v-card-text",[a("v-container",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-row",[a("v-col",[a("div",{staticClass:"field"},[a("div",{staticClass:"file is-large is-boxed"},[a("label",{staticClass:"file-label"},[a("input",{staticClass:"file-input input-file-image",attrs:{type:"file",name:"resume",multiple:""},on:{change:t.previewMultiImage}}),a("span",{staticClass:"file-cta"},[a("span",{staticClass:"file-icon"},[a("v-icon",{staticClass:"fas fa-cloud-upload",staticStyle:{"font-size":"60px !important",color:"#719aff",cursor:"pointer"}},[t._v("mdi-cloud-upload")])],1),a("span",{staticClass:"file-label",staticStyle:{"margin-top":"10px","text-transform":"uppercase","padding-top":"20px"}},[t._v("Choose Image")])])])])])])],1),a("v-row",[t.image_list.length>0?a("div",{staticStyle:{display:"inline-flex"}},t._l(t.preview_list,(function(e,i){return a("v-col",{key:i,staticClass:"mt-5 text-center"},[a("div",[a("v-avatar",{staticClass:"avatar rounded mr-6",attrs:{size:"94px"}},[a("img",{attrs:{src:e,alt:"Image"}})]),a("p",{staticClass:"mb-0 body-2"},[t._v("Name: "+t._s(t.image_list[i].name))]),a("span",{staticClass:"body-2"},[t._v("size: "+t._s(t.image_list[i].size/1024)+"KB")]),a("div",{staticClass:"mt-2",on:{click:function(a){return t.RemoveItem(e)}}},[a("v-icon",{staticStyle:{cursor:"pointer"}},[t._v("mdi-delete")])],1)],1)])})),1):a("div",[a("v-col",{staticClass:"mt-5 text-center"},t._l(t.data.media,(function(t,e){return a("v-avatar",{key:e,staticClass:"avatar rounded mr-6",attrs:{size:"94px"}},[a("img",{attrs:{src:t.url,alt:"Image"}})])})),1)],1)]),a("v-row",[a("v-col",{attrs:{cols:""}},[a("v-text-field",{attrs:{label:"Name *",required:"",rules:t.nameRules,outlined:"",dense:""},model:{value:t.data.name,callback:function(e){t.$set(t.data,"name",e)},expression:"data.name"}}),a("p",{staticClass:"errors"},[t._v(t._s(t.server_errors.name))])],1),a("v-col",{attrs:{cols:""}},[a("v-text-field",{attrs:{label:"Surname *",required:"",rules:t.nameRules,outlined:"",dense:""},model:{value:t.data.surname,callback:function(e){t.$set(t.data,"surname",e)},expression:"data.surname"}}),a("p",{staticClass:"errors"},[t._v(t._s(t.server_errors.surname))])],1),a("v-col",{attrs:{cols:""}},[a("v-text-field",{staticClass:"input-number",attrs:{label:"ເຮືອນເລກທີ *",required:"",rules:t.houseNumberRules,type:"number",outlined:"",dense:""},model:{value:t.data.house_number,callback:function(e){t.$set(t.data,"house_number",e)},expression:"data.house_number"}}),a("p",{staticClass:"errors"},[t._v(t._s(t.server_errors.house_number))])],1)],1),a("v-row",[a("v-col",{attrs:{cols:""}},[t.data.user?a("v-text-field",{staticClass:"input-number",attrs:{label:"ເບີໂທ *",required:"",rules:t.phoneRules,type:"number",outlined:"",dense:""},model:{value:t.data.user.phone,callback:function(e){t.$set(t.data.user,"phone",e)},expression:"data.user.phone"}}):t._e(),a("p",{staticClass:"errors"},[t._v(t._s(t.server_errors.phone))])],1),a("v-col",{attrs:{cols:""}},[t.data.user?a("v-text-field",{attrs:{label:"Email",outlined:"",dense:""},model:{value:t.data.user.email,callback:function(e){t.$set(t.data.user,"email",e)},expression:"data.user.email"}}):t._e(),a("p",{staticClass:"errors"},[t._v(t._s(t.server_errors.email))])],1),a("v-col",{attrs:{cols:""}},[a("v-select",{attrs:{outlined:"",dense:"",items:t.favorite_dates,"item-text":"name","item-value":"name",label:"ມື້ບໍລິການ",multiple:""},model:{value:t.selectedFavoriteDate,callback:function(e){t.selectedFavoriteDate=e},expression:"selectedFavoriteDate"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:""}},[a("v-checkbox",{scopedSlots:t._u([{key:"label",fn:function(){return[a("div",[t._v("ສາມາດເກັບຂີ້ເຫື້ຍອເລີຍໄດ້ບໍ່ ?")])]},proxy:!0}]),model:{value:t.can_collect,callback:function(e){t.can_collect=e},expression:"can_collect"}}),a("p",{staticClass:"errors"},[t._v(t._s(t.server_errors.can_collect))])],1),a("v-col",{attrs:{cols:""}},[a("v-autocomplete",{attrs:{required:"",items:t.districts,"item-text":"name","item-value":"id",label:"District *",rulesDistrict:t.rulesDistrict,outlined:"",dense:""},model:{value:t.selectedDistrict,callback:function(e){t.selectedDistrict=e},expression:"selectedDistrict"}}),a("p",{staticClass:"errors"},[t._v(t._s(t.errormsg))])],1),a("v-col",{attrs:{cols:""}},[a("v-autocomplete",{attrs:{required:"",items:t.villages,"item-text":"name","item-value":"id",label:"Village *",rules:t.ruleVillage,outlined:"",dense:""},model:{value:t.selectedVillage,callback:function(e){t.selectedVillage=e},expression:"selectedVillage"}}),a("p",{staticClass:"errors"},[t._v(t._s(t.errormsg))])],1)],1),a("v-row",t._l(t.village_details,(function(e,i){return a("v-col",{key:i,attrs:{cols:"6"}},[a("v-select",{attrs:{items:e.village_details,"item-text":"name","item-value":"id",label:e.name,chips:"","deletable-chips":"",multiple:"",outlined:"",dense:""},scopedSlots:t._u([{key:"append-outer",fn:function(){return[a("v-slide-x-reverse-transition",{attrs:{mode:"out-in"}},[a("v-icon",{attrs:{color:"info"},domProps:{textContent:t._s("mdi-plus-circle-outline")},on:{click:function(a){return t.addItem(e)}}})],1)]},proxy:!0}],null,!0),model:{value:t.selectedVillageDetail,callback:function(e){t.selectedVillageDetail=e},expression:"selectedVillageDetail"}}),a("p",{staticClass:"errors"},[t._v(t._s(t.server_errors.village_details))])],1)})),1),a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-text-field",{attrs:{label:t.expectTrashLabel,outlined:"",dense:""},model:{value:t.data.expect_trash,callback:function(e){t.$set(t.data,"expect_trash",e)},expression:"data.expect_trash"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.expect_trash)+" ")])],1)],1),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{staticClass:"input-number",attrs:{label:"Latitude",type:"number",outlined:"",dense:""},model:{value:t.data.lat,callback:function(e){t.$set(t.data,"lat",e)},expression:"data.lat"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{staticClass:"input-number",attrs:{label:"Longitude",type:"number",outlined:"",dense:""},model:{value:t.data.lng,callback:function(e){t.$set(t.data,"lng",e)},expression:"data.lng"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("gmap-autocomplete",{ref:"searchInput",staticClass:"input text-field map",attrs:{placeholder:"ຄົ້ນຫາເເຜນທີ່...",options:{fields:["geometry","formatted_address","name"]}},on:{place_changed:t.setPlace}}),a("span",{staticClass:"horizontal-divider"})],1),a("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[a("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:t.getCenter(),zoom:16,disableDefaultUI:!0}},[a("GmapMarker",{ref:"markers",attrs:{position:t.getMarkers(t.data),draggable:!0,icon:t.markerOptions,animation:2},on:{dragend:t.onLocation}})],1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.backPrevios()}}},[t._v("Back")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.UpdateData()}}},[t._v("Update")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"720px",persistent:""},model:{value:t.addItemDetail,callback:function(e){t.addItemDetail=e},expression:"addItemDetail"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(" Add Item "),a("span",[a("a",[t._v(t._s(t.villageDetail.name))])])])]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Name *",type:"text",required:""},model:{value:t.itemDetailValue,callback:function(e){t.itemDetailValue=e},expression:"itemDetailValue"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.addItemDetail=!1}}},[t._v("Close")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:t.addMoreVillageDetail}},[t._v("Add ")])],1)],1)],1)],1)],1)},s=[],n=a("3835"),r=(a("d81d"),a("b0c0"),a("a434"),a("4fad"),a("99af"),a("7660")),l={data:function(){return{data:{},loading:!1,server_errors:{},provinces:[],districts:[],selectedDistrict:"",villages:[],selectedVillage:"",village_details:[],selectedVillageDetail:[],units:[],can_collect:0,selectItemDetail:"",addItemDetail:!1,itemDetailValue:"",itemDetailValues:[],villageDetail:{},address:[],errormsg:"",preview_list:[],image_list:[],image:[],favorite_dates:[],selectedFavoriteDate:[],latlng:{lat:18.1189434,lng:102.290218},markers:[],currentPlace:null,markerOptions:{url:a("347c"),size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}},passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=8||"Password must be more than 8 characters"}],passwordConfirmRules:[function(t){return!!t||"Password Confirm is required"},function(t){return t&&t.length>=8||"Password must be more than 8 characters"}],nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length>=2||"Name must be less than 2 characters"}],phoneRules:[function(t){return!!t||"Phone is required"},function(t){return t&&t.length>=4&&t.length<=11||"Phone number must be  4 - 11 numbers"}],houseNumberRules:[function(t){return!!t||"House number is required"}],ruleVillage:[function(t){return!!t||"Village is required"}],rulesDistrict:[function(t){return!!t||"District is required"}]}},computed:{expectTrashLabel:function(){var t="ຂີ້ເຫຍື້ອຄາດໝາຍ";return this.data.cost_by?"".concat(t," (").concat(Object(r["b"])(this.data.cost_by),")"):t}},methods:{fetchData:function(){var t=this;this.selectedVillageDetail=[],this.$store.commit("Loading_State",!0),this.$axios.get("customer/"+this.$route.params.id).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.data=e.data.data,t.can_collect=e.data.data.can_collect,t.selectedDistrict=e.data.data.district.id,t.selectedVillage=e.data.data.village_id,e.data.data.favorite_dates.map((function(e){t.selectedFavoriteDate.push(e.name)})),e.data.data.village_details.map((function(e){t.selectedVillageDetail.push(e.id)}))}),300)})).catch((function(){t.$store.commit("Loading_State",!1)}))},fetchAddress:function(){var t=this;this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then((function(e){200==e.data.code&&setTimeout((function(){t.address=e.data.data,t.address.map((function(e){t.districts=e.districts}))}),300)})).catch((function(){}))},fetchVillage:function(){var t=this;this.$axios.get("info/district/"+this.selectedDistrict+"/village").then((function(e){200==e.data.code&&(t.villages=e.data.data)})).catch((function(){}))},fetchVillageDetail:function(){var t=this;this.$axios.get("info/village/"+this.selectedVillage+"/village-detail").then((function(e){200==e.data.code&&setTimeout((function(){t.village_details=e.data.data}),100)})).catch((function(){}))},backPrevios:function(){this.$router.go(-1)},RemoveItem:function(t){this.preview_list.splice(this.preview_list.indexOf(t),1)},removeItem:function(t){var e=this.selectedVillageDetail.indexOf(t.id);e>=0&&this.selectedVillageDetail.splice(e,1)},previewMultiImage:function(t){var e=this,a=t.target,i=a.files.length,s=0;if(a.files)while(i--){var n=new FileReader;n.onload=function(t){e.preview_list.push(t.target.result)},this.image_list.push(a.files[s]),n.readAsDataURL(a.files[s]),s++}},UpdateData:function(){var t=this,e=new FormData;null==this.data.user.email&&(this.data.user.email=""),this.image_list.map((function(t){e.append("images[]",t)})),this.selectedVillageDetail.map((function(t){e.append("village_details[]",t)})),this.selectedFavoriteDate.map((function(t){e.append("favorite_dates[]",t)})),e.append("name",this.data.name),e.append("surname",this.data.surname),e.append("village_id",this.selectedVillage),e.append("house_number",this.data.house_number),e.append("phone",this.data.user.phone),e.append("email",this.data.user.email),e.append("lat",this.data.lat),e.append("lng",this.data.lng),e.append("can_collect",this.can_collect),this.data.expect_trash&&e.append("expect_trash",this.data.expect_trash),1==this.can_collect&&e.append("can_collect",1),0==this.can_collect&&e.append("can_collect",0),e.append("_method","PUT"),1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("customer/"+this.$route.params.id,e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){200==e.data.code&&setTimeout((function(){t.data={},t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message}),t.$router.push({name:"Customer"})}),300)})).catch((function(e){if(t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message}),422==e.response.status)for(var a=e.response.data.errors,i=0,s=Object.entries(a);i<s.length;i++){var r=Object(n["a"])(s[i],2),l=r[0],o=r[1];t.server_errors[l]=o[0]}t.loading=!1})))},createNewAddressName:function(){var t="#CUSTOM ADDRESS:";return this.isCreate?this.currentAddress:"".concat(t," ").concat(this.latlng.lat,", ").concat(this.latlng.lng)},onLocation:function(t){this.latlng.lat=t.latLng.lat(),this.latlng.lng=t.latLng.lng(),this.address=this.createNewAddressName(),this.data.lat=this.latlng.lat,this.data.lng=this.latlng.lng},setPlace:function(t){this.currentPlace=t,this.placeMarker()},placeMarker:function(){if(this.markers=[],this.places=[],this.currentPlace){var t={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:t}),this.latlng=t}else{var e={lat:parseFloat(this.data.lat),lng:parseFloat(this.data.lng)};this.markers.push({position:e})}this.$refs.searchInput&&(this.address=this.$refs.searchInput.$el.value),this.onDataChange()},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.latlng={lat:e.coords.lat,lng:e.coords.lng},t.placeMarker()}))},onDataChange:function(){this.$emit("onDataChange",{address:this.address,position:this.latlng})},onSave:function(){this.$emit("onSave",{address:this.address||this.currentAddress||"Unnamed Location",position:this.latlng,isCreate:this.isCreate})},getCenter:function(){if(this.data.lat){var t={lat:parseFloat(this.data.lat),lng:parseFloat(this.data.lng)};return t}return this.latlng},getMarkers:function(t){return null!=t.lat?{lat:parseFloat(t.lat),lng:parseFloat(t.lng)}:this.latlng},addItem:function(t){this.addItemDetail=!0,this.villageDetail=t},addMoreVillageDetail:function(){var t=this;""!=this.itemDetailValue&&(this.itemDetailValues.push(this.itemDetailValue),this.loading=!0,this.$axios.post("address/village/"+this.selectedVillage+"/village-detail",{name:this.itemDetailValue,village_variation_id:this.villageDetail.id}).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.addItemDetail=!1,t.selectedDetail="",t.fetchVillageDetail(),t.address={},t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})}),300)})).catch((function(e){if(t.loading=!1,422==e.response.status){t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response.data.message});for(var a=e.response.data.errors,i=0,s=Object.entries(a);i<s.length;i++){var r=Object(n["a"])(s[i],2),l=r[0],o=r[1];t.server_errors[l]=o[0]}}}))),this.itemDetailValue="",this.addItemDetail=!1},fetchFavorite:function(){var t=this;this.$axios.get("favorite-date").then((function(e){200==e.data.code&&setTimeout((function(){t.favorite_dates=e.data.data}),100)})).catch((function(){}))}},watch:{selectedDistrict:function(){this.fetchVillage()},selectedVillage:function(){this.fetchVillageDetail()},can_collect:function(){this.server_errors.can_collect=""},"data.name":function(){this.server_errors.name=""},"data.surname":function(){this.server_errors.surname=""},"data.house_number":function(){this.server_errors.house_number=""},"data.phone":function(){this.server_errors.phone="",this.server_errors.email=""},"data.email":function(){this.server_errors.email=""},"data.password":function(){this.server_errors.password=""},"data.password_confirmation":function(){this.server_errors.password=""}},mounted:function(){this.geolocate()},created:function(){this.fetchAddress(),this.fetchData(),this.fetchFavorite()}},o=l,c=(a("5b1b"),a("2877")),u=a("6544"),d=a.n(u),h=a("c6a6"),p=a("8212"),m=a("2bc5"),f=a("8336"),v=a("b0af"),g=a("99d9"),b=a("ac7c"),_=a("62ad"),x=a("a523"),I=a("169a"),D=a("4bd4"),C=a("132d"),V=a("0fd9"),y=a("b974"),S=a("0789"),k=a("2fa4"),w=a("8654"),$=Object(c["a"])(o,i,s,!1,null,null,null);e["default"]=$.exports;d()($,{VAutocomplete:h["a"],VAvatar:p["a"],VBreadcrumbs:m["a"],VBtn:f["a"],VCard:v["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VCheckbox:b["a"],VCol:_["a"],VContainer:x["a"],VDialog:I["a"],VForm:D["a"],VIcon:C["a"],VRow:V["a"],VSelect:y["a"],VSlideXReverseTransition:S["e"],VSpacer:k["a"],VTextField:w["a"]})},ec29:function(t,e,a){},fe09:function(t,e,a){"use strict";a("d3b7"),a("25f0"),a("4de4");var i=a("c37a"),s=a("5607"),n=a("2b0e"),r=n["a"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),l=a("8547"),o=a("58df");function c(t){t.preventDefault()}e["a"]=Object(o["a"])(i["a"],r,l["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,a=this.internalValue;return this.isMultiple?!!Array.isArray(a)&&a.some((function(a){return t.valueComparator(a,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,a):Boolean(a):this.valueComparator(a,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=i["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:c},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,a=this.internalValue;if(this.isMultiple){Array.isArray(a)||(a=[]);var i=a.length;a=a.filter((function(a){return!t.valueComparator(a,e)})),a.length===i&&a.push(e)}else a=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(a,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(a,e)?null:e:!a;this.validate(!0,a),this.internalValue=a,this.hasColor=a}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-a71196c0.f5527df9.js.map