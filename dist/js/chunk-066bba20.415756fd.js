(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-066bba20"],{"2bfd":function(e,t,a){},"2f1a":function(e,t,a){},"347c":function(e,t,a){e.exports=a.p+"img/pin1.d74f27bd.svg"},"4bd4":function(e,t,a){"use strict";a("14d9");var s=a("58df"),i=a("7e2b"),r=a("3206");t["a"]=Object(s["a"])(i["a"],Object(r["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",t=>{this.$set(this.errorBag,e._uid,t)},{immediate:!0}),a={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=e.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(e._uid)||(a.valid=t(e)))}):a.valid=t(e),a},validate(){return 0===this.inputs.filter(e=>!e.validate(!0)).length},reset(){this.inputs.forEach(e=>e.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(e=>e.resetValidation()),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find(t=>t._uid===e._uid);if(!t)return;const a=this.watchers.find(e=>e._uid===t._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(e=>e._uid!==t._uid),this.inputs=this.inputs.filter(e=>e._uid!==t._uid),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},"6ca7":function(e,t,a){},7660:function(e,t,a){"use strict";a.d(t,"i",(function(){return s})),a.d(t,"c",(function(){return i})),a.d(t,"j",(function(){return r})),a.d(t,"e",(function(){return l})),a.d(t,"g",(function(){return n})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return c})),a.d(t,"d",(function(){return d})),a.d(t,"h",(function(){return h})),a.d(t,"f",(function(){return u}));a("14d9");const s=function(e,t=null){switch(e){case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ເປັນຖ້ຽວ";case"chartered":return"ມອບເໝົາ";case"bag":return"company"==t?"ບໍລິມາດ":"ຄົວເຮືອນ";case"infect":return"ຂີ້ເຫຍື້ອຕິດເຊື້ອ";case"32km":return"ຫຼັກ32";default:return e}},i=[{en:"container",la:"ຄອນເທນເນີ"},{en:"fix_cost",la:"ເປັນຖ້ຽວ"},{en:"chartered",la:"ມອບເໝົາ"},{en:"bag",la:"ບໍລິມາດ"},{en:"infect",la:"ຂີ້ເຫຍື້ອຕິດເຊື້ອ"},{en:"32km",la:"ຫຼັກ32"}],r=function(e){switch(e){case"company":return"ຫົວໜ່ວຍທຸລະກິດ";case"home":return"ຄົວເຮືອນ";default:return e}},l=function(e){switch(e){case"bag":case"chartered":case"32km":case"infect":return"ຖົງ";case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ຖ້ຽວ";default:return e}},n=[{en:"requested",la:"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ",color:"#34495e"},{en:"rejected",la:"ປະຕິເສດລູກຄ້າແລ້ວ",color:"#eff3f5"},{en:"approved",la:"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ",color:"#54a0ff"},{en:"collected",la:"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ",color:"#c1c40f"},{en:"collect_confirm",la:"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ",color:"#30cb83"},{en:"collect_reject",la:"ລູກຄ້າປະຕິເສດການເກັບ",color:"#e74c3c"}],o=[{text:"ວັນທີຈ່າຍບິນ",value:"paided_at"},{text:"ວັນທີສ້າງບິນ",value:"created_at"},{text:"ວັນທີອະນຸມັດບິນ",value:"approved_at"},{text:"ວັນທີກວດສອບບິນສຳເລັດ",value:"confirmed_payment_at"}],c=(e=[])=>{const t=[];for(const a of e)t.push({id:a.id,name:`${a.name} (${Intl.NumberFormat().format(a.price)} ກີບ)`});return t},d=[{value:"",text:"ທັງໝົດ"},{value:"can",text:"ເກັບໄດ້"},{value:"not",text:"ເກັບບໍ່ໄດ້"}],h=function(e,t,a,s){return"company"===s?a:`${e} ${t}`},u=function(e,t){return"company"===e?"COM_"+t:"CUS_"+t}},a523:function(e,t,a){"use strict";a("20f6"),a("4b85");var s=a("2b0e");function i(e){return s["a"].extend({name:"v-"+e,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:a,data:s,children:i}){s.staticClass=`${e} ${s.staticClass||""}`.trim();const{attrs:r}=s;if(r){s.attrs={};const e=Object.keys(r).filter(e=>{if("slot"===e)return!1;const t=r[e];return e.startsWith("data-")?(s.attrs[e]=t,!1):t||"string"===typeof t});e.length&&(s.staticClass+=" "+e.join(" "))}return a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),t(a.tag,s,i)}})}var r=a("d9f7");t["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:t,data:a,children:s}){let i;const{attrs:l}=a;return l&&(a.attrs={},i=Object.keys(l).filter(e=>{if("slot"===e)return!1;const t=l[e];return e.startsWith("data-")?(a.attrs[e]=t,!1):t||"string"===typeof t})),t.id&&(a.domProps=a.domProps||{},a.domProps.id=t.id),e(t.tag,Object(r["a"])(a,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(i||[])}),s)}})},ac7c:function(e,t,a){"use strict";a("6ca7"),a("ec29");var s=a("9d26"),i=a("c37a"),r=a("fe09");t["a"]=r["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(e){this.$nextTick(()=>this.inputIndeterminate=e)},inputIndeterminate(e){this.$emit("update:indeterminate",e)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:e,...t}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...t,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},bfa5:function(e,t,a){"use strict";a("2f1a")},c6a6:function(e,t,a){"use strict";a("2bfd");var s=a("b974"),i=a("8654"),r=a("d9f7"),l=a("80d2");const n={...s["b"],offsetY:!0,offsetOverflow:!0,transition:!1};t["a"]=s["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,a)=>a.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:s["a"].options.props.menuProps.type,default:()=>n},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(l["r"])(e,this.itemText),a=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),a)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=s["a"].options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...n,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=s["a"].options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){if(e!==t){if(!this.autoSelectFirst){const a=t[this.$refs.menu.listIndex];a?this.setMenuIndex(e.findIndex(e=>e===a)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&e.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===l["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===l["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==l["y"].backspace&&e!==l["y"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const a=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==a)return void(this.selectedIndex=a);const s=this.selectedItems.length,i=e!==s-1?e:e-1,r=this.selectedItems[i];r?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=i},clearableCallback(){this.internalSearch=null,s["a"].options.methods.clearableCallback.call(this)},genInput(){const e=i["a"].options.methods.genInput.call(this);return e.data=Object(r["a"])(e.data,{attrs:{"aria-activedescendant":Object(l["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["p"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=s["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?s["a"].options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,a=t.value;t.value&&this.activateMenu(),this.multiple||""!==a||this.deleteCurrentItem(),this.internalSearch=a,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[l["y"].home,l["y"].end].includes(t)||s["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){s["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){s["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){s["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,a;if(-1===this.selectedIndex)return;const s=this.selectedItems[this.selectedIndex],i=this.getText(s);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",i),null===(a=e.clipboardData)||void 0===a||a.setData("text/vnd.vuetify.autocomplete.item+plain",i),e.preventDefault()}}})},d3df:function(e,t,a){"use strict";a.r(t);var s=a("c6a6"),i=a("8212"),r=a("2bc5"),l=a("8336"),n=a("b0af"),o=a("99d9"),c=a("ac7c"),d=a("62ad"),h=a("a523"),u=a("169a"),m=a("4bd4"),p=a("132d"),g=a("0fd9"),f=a("b974"),v=a("0789"),_=a("2fa4"),b=a("8654"),x=function(){var e=this,t=e._self._c;return t(h["a"],[t(r["a"],{attrs:{large:""}},[t(l["a"],{staticClass:"text-primary",attrs:{text:""},on:{click:function(t){return e.backPrevios()}}},[t(p["a"],[e._v("mdi-keyboard-backspace")])],1),e._v("ແກ້ໄຂຂໍ້ມູນລູກຄ້າ ")],1),t(n["a"],[t(o["b"],[t(h["a"],[t(m["a"],{ref:"form",attrs:{"lazy-validation":""}},[t(g["a"],[t(d["a"],[t("div",{staticClass:"field"},[t("div",{staticClass:"file is-large is-boxed"},[t("label",{staticClass:"file-label"},[t("input",{staticClass:"file-input input-file-image",attrs:{type:"file",name:"resume",multiple:""},on:{change:e.previewMultiImage}}),t("span",{staticClass:"file-cta"},[t("span",{staticClass:"file-icon"},[t(p["a"],{staticClass:"fas fa-cloud-upload",staticStyle:{"font-size":"60px !important",color:"#719aff",cursor:"pointer"}},[e._v("mdi-cloud-upload")])],1),t("span",{staticClass:"file-label",staticStyle:{"margin-top":"10px","text-transform":"uppercase","padding-top":"20px"}},[e._v("Choose Image")])])])])])])],1),t(g["a"],[e.image_list.length?t("div",{staticStyle:{display:"inline-flex"}},e._l(e.preview_list,(function(a,s){return t(d["a"],{key:s,staticClass:"mt-5 text-center"},[t("div",[t(i["a"],{staticClass:"avatar rounded mr-6",attrs:{size:"94px"}},[t("img",{attrs:{src:a,alt:"Image"}})]),t("p",{staticClass:"mb-0 body-2"},[e._v(" Name: "+e._s(e.image_list[s].name)+" ")]),t("span",{staticClass:"body-2"},[e._v("size: "+e._s(e.image_list[s].size/1024)+"KB")]),t("div",{staticClass:"mt-2",on:{click:function(t){return e.RemoveItem(a)}}},[t(p["a"],{staticStyle:{cursor:"pointer"}},[e._v(" mdi-delete ")])],1)],1)])})),1):t("div",[t(d["a"],{staticClass:"mt-5 text-center"},e._l(e.data.media,(function(e,a){return t(i["a"],{key:a,staticClass:"avatar rounded mr-6",attrs:{size:"94px"}},[t("img",{attrs:{src:e.url,alt:"Image"}})])})),1)],1)]),t(g["a"],[t(d["a"],{attrs:{cols:""}},[t(b["a"],{attrs:{label:"Name *",required:"",rules:e.nameRules,outlined:"",dense:""},model:{value:e.data.name,callback:function(t){e.$set(e.data,"name",t)},expression:"data.name"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.name)+" ")])],1),t(d["a"],{attrs:{cols:""}},[t(b["a"],{attrs:{label:"Surname *",required:"",rules:e.nameRules,outlined:"",dense:""},model:{value:e.data.surname,callback:function(t){e.$set(e.data,"surname",t)},expression:"data.surname"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.surname)+" ")])],1),t(d["a"],{attrs:{cols:""}},[t(b["a"],{staticClass:"input-number",attrs:{label:"ເຮືອນເລກທີ *",rules:e.houseNumberRules,type:"number",outlined:"",dense:""},model:{value:e.data.house_number,callback:function(t){e.$set(e.data,"house_number",t)},expression:"data.house_number"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.house_number)+" ")])],1)],1),t(g["a"],[t(d["a"],{attrs:{cols:""}},[e.data.user?t(b["a"],{staticClass:"input-number",attrs:{label:"ເບີໂທ *",required:"",rules:e.phoneRules,type:"number",outlined:"",dense:""},model:{value:e.data.user.phone,callback:function(t){e.$set(e.data.user,"phone",t)},expression:"data.user.phone"}}):e._e(),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.phone)+" ")])],1),t(d["a"],{attrs:{cols:""}},[e.data.user?t(b["a"],{attrs:{label:"Email",outlined:"",dense:""},model:{value:e.data.user.email,callback:function(t){e.$set(e.data.user,"email",t)},expression:"data.user.email"}}):e._e(),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.email)+" ")])],1),t(d["a"],{attrs:{cols:""}},[t(f["a"],{attrs:{outlined:"",dense:"",items:e.favorite_dates,"item-text":"name","item-value":"name",label:"ມື້ບໍລິການ",multiple:""},model:{value:e.selectedFavoriteDate,callback:function(t){e.selectedFavoriteDate=t},expression:"selectedFavoriteDate"}})],1)],1),t(g["a"],[t(d["a"],{attrs:{cols:""}},[t(c["a"],{scopedSlots:e._u([{key:"label",fn:function(){return[t("div",[e._v("ສາມາດເກັບຂີ້ເຫື້ຍອເລີຍໄດ້ບໍ່ ?")])]},proxy:!0}]),model:{value:e.can_collect,callback:function(t){e.can_collect=t},expression:"can_collect"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.can_collect)+" ")])],1),t(d["a"],{attrs:{cols:""}},[t(s["a"],{attrs:{required:"",items:e.districts,"item-text":"name","item-value":"id",label:"District *","rules-district":e.rulesDistrict,outlined:"",dense:""},model:{value:e.selectedDistrict,callback:function(t){e.selectedDistrict=t},expression:"selectedDistrict"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.errormsg)+" ")])],1),t(d["a"],{attrs:{cols:""}},[t(s["a"],{attrs:{required:"",items:e.villages,"item-text":"name","item-value":"id",label:"Village *",rules:e.ruleVillage,outlined:"",dense:""},model:{value:e.selectedVillage,callback:function(t){e.selectedVillage=t},expression:"selectedVillage"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.errormsg)+" ")])],1)],1),t(g["a"],e._l(e.village_details,(function(a,s){return t(d["a"],{key:s,attrs:{cols:"6"}},[t(f["a"],{attrs:{items:a.village_details,"item-text":"name","item-value":"id",label:a.name,chips:"","deletable-chips":"",multiple:"",outlined:"",dense:""},scopedSlots:e._u([{key:"append-outer",fn:function(){return[t(v["e"],{attrs:{mode:"out-in"}},[t(p["a"],{attrs:{color:"info"},domProps:{textContent:e._s("mdi-plus-circle-outline")},on:{click:function(t){return e.addItem(a)}}})],1)]},proxy:!0}],null,!0),model:{value:e.selectedVillageDetail,callback:function(t){e.selectedVillageDetail=t},expression:"selectedVillageDetail"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.village_details)+" ")])],1)})),1),t(g["a"],[t(d["a"],{attrs:{cols:"4"}},[t(b["a"],{attrs:{label:e.expectTrashLabel,outlined:"",dense:""},model:{value:e.data.expect_trash,callback:function(t){e.$set(e.data,"expect_trash",t)},expression:"data.expect_trash"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.expect_trash)+" ")])],1)],1),t(g["a"],[t(d["a"],{attrs:{cols:"6"}},[t(b["a"],{staticClass:"input-number",attrs:{label:"Latitude",type:"number",outlined:"",dense:""},model:{value:e.data.lat,callback:function(t){e.$set(e.data,"lat",t)},expression:"data.lat"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.lat)+" ")])],1),t(d["a"],{attrs:{cols:"6"}},[t(b["a"],{staticClass:"input-number",attrs:{label:"Longitude",type:"number",outlined:"",dense:""},model:{value:e.data.lng,callback:function(t){e.$set(e.data,"lng",t)},expression:"data.lng"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.lng)+" ")])],1)],1),t(g["a"],[t(d["a"],{attrs:{cols:"12"}},[t("gmap-autocomplete",{ref:"searchInput",staticClass:"input text-field map",attrs:{placeholder:"ຄົ້ນຫາເເຜນທີ່...",options:{fields:["geometry","formatted_address","name"]}},on:{place_changed:e.setPlace}}),t("span",{staticClass:"horizontal-divider"})],1),t(d["a"],{staticClass:"mb-4",attrs:{cols:"12"}},[t("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:e.getCenter().lat>0||e.getCenter().lat<0?e.getCenter():{lat:0,lng:0},zoom:16,"disable-default-u-i":!0}},[t("GmapMarker",{ref:"markers",attrs:{position:e.getMarkers(e.data),draggable:!0,icon:e.markerOptions,animation:2},on:{dragend:e.onLocation}})],1)],1)],1)],1)],1),t(o["a"],[t(_["a"]),t(l["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.backPrevios()}}},[e._v(" Back ")]),t(l["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.UpdateData()}}},[e._v(" Update ")])],1)],1)],1),t(u["a"],{attrs:{"max-width":"720px",persistent:""},model:{value:e.addItemDetail,callback:function(t){e.addItemDetail=t},expression:"addItemDetail"}},[t(n["a"],[t(o["c"],[t("span",{staticClass:"headline"},[e._v(" Add Item "),t("span",[t("a",[e._v(e._s(e.villageDetail.name))])])])]),t(o["b"],[t(h["a"],[t(m["a"],{ref:"form",attrs:{"lazy-validation":""}},[t(g["a"],[t(d["a"],{attrs:{cols:"12"}},[t(b["a"],{attrs:{label:"Name *",type:"text",required:""},model:{value:e.itemDetailValue,callback:function(t){e.itemDetailValue=t},expression:"itemDetailValue"}})],1)],1)],1)],1),t(o["a"],[t(_["a"]),t(l["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.addItemDetail=!1}}},[e._v(" Close ")]),t(l["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.addMoreVillageDetail}},[e._v(" Add ")])],1)],1)],1)],1)],1)},I=[],y=(a("14d9"),a("7660")),S={data(){return{data:{},loading:!1,server_errors:{},provinces:[],districts:[],selectedDistrict:"",villages:[],selectedVillage:"",village_details:[],selectedVillageDetail:[],units:[],can_collect:0,selectItemDetail:"",addItemDetail:!1,itemDetailValue:"",itemDetailValues:[],villageDetail:{},address:[],errormsg:"",preview_list:[],image_list:[],image:[],favorite_dates:[],selectedFavoriteDate:[],latlng:{lat:0,lng:0},markers:[],currentPlace:null,markerOptions:{url:a("347c"),size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}},passwordRules:[e=>!!e||"Password is required",e=>e&&e.length>=8||"Password must be more than 8 characters"],passwordConfirmRules:[e=>!!e||"Password Confirm is required",e=>e&&e.length>=8||"Password must be more than 8 characters"],nameRules:[e=>!!e||"Name is required",e=>e&&e.length>=2||"Name must be less than 2 characters"],phoneRules:[e=>!!e||"Phone is required",e=>e&&e.length>=4&&e.length<=11||"Phone number must be  4 - 11 numbers"],houseNumberRules:[e=>!!e||"House number is required"],ruleVillage:[e=>!!e||"Village is required"],rulesDistrict:[e=>!!e||"District is required"]}},computed:{expectTrashLabel(){const e="ຂີ້ເຫຍື້ອຄາດໝາຍ";return this.data.cost_by?`${e} (${Object(y["e"])(this.data.cost_by)})`:e}},watch:{selectedDistrict(){this.fetchVillage()},selectedVillage(e){console.log(e,this.data.village_id),e!=this.data.village_id&&(this.selectedVillageDetail=[]),this.fetchVillageDetail()},can_collect(){this.server_errors.can_collect=""},"data.name":function(){this.server_errors.name=""},"data.surname":function(){this.server_errors.surname=""},"data.house_number":function(){this.server_errors.house_number=""},"data.phone":function(){this.server_errors.phone="",this.server_errors.email=""},"data.email":function(){this.server_errors.email=""},"data.password":function(){this.server_errors.password=""},"data.password_confirmation":function(){this.server_errors.password=""}},mounted(){this.geolocate()},created(){this.fetchAddress(),this.fetchData(),this.fetchFavorite()},methods:{fetchData(){this.selectedVillageDetail=[],this.$store.commit("Loading_State",!0),this.$axios.get("customer/"+this.$route.params.id).then(e=>{200==e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.data=e.data.data,this.can_collect=e.data.data.can_collect,this.selectedDistrict=e.data.data.district.id,this.selectedVillage=e.data.data.village_id,e.data.data.favorite_dates.map(e=>{this.selectedFavoriteDate.push(e.name)}),e.data.data.village_details.map(e=>{e.village_id==this.selectedVillage&&this.selectedVillageDetail.push(e.id)})},300)}).catch(()=>{this.$store.commit("Loading_State",!1)})},fetchAddress(){this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then(e=>{200==e.data.code&&setTimeout(()=>{this.address=e.data.data,this.address.map(e=>{this.districts=e.districts})},300)}).catch(()=>{})},fetchVillage(){this.$axios.get(`info/district/${this.selectedDistrict}/village`).then(e=>{200==e.data.code&&(this.villages=e.data.data)}).catch(()=>{})},fetchVillageDetail(){this.$axios.get(`info/village/${this.selectedVillage}/village-detail`).then(e=>{200==e.data.code&&setTimeout(()=>{this.village_details=e.data.data},100)}).catch(()=>{})},backPrevios(){this.$router.go(-1)},RemoveItem(e){this.preview_list.splice(this.preview_list.indexOf(e),1)},removeItem(e){const t=this.selectedVillageDetail.indexOf(e.id);t>=0&&this.selectedVillageDetail.splice(t,1)},previewMultiImage(e){const t=e.target;let a=t.files.length,s=0;if(t.files)while(a--){const e=new FileReader;e.onload=e=>{this.preview_list.push(e.target.result)},this.image_list.push(t.files[s]),e.readAsDataURL(t.files[s]),s++}},UpdateData(){const e=new FormData;null==this.data.user.email&&(this.data.user.email=""),this.image_list.map(t=>{e.append("images[]",t)}),this.selectedVillageDetail.map(t=>{e.append("village_details[]",t)}),this.selectedFavoriteDate.map(t=>{e.append("favorite_dates[]",t.name?t.name:t)}),e.append("name",this.data.name),e.append("surname",this.data.surname),e.append("village_id",this.selectedVillage),e.append("house_number",this.data.house_number),e.append("phone",this.data.user.phone),e.append("email",this.data.user.email),e.append("lat",this.data.lat),e.append("lng",this.data.lng),e.append("can_collect",this.can_collect),this.data.expect_trash&&e.append("expect_trash",this.data.expect_trash),1==this.can_collect&&e.append("can_collect",1),0==this.can_collect&&e.append("can_collect",0),e.append("_method","PUT"),1==this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.post("customer/"+this.$route.params.id,e,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{200==e.data.code&&setTimeout(()=>{this.data={},this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message}),this.$router.push({name:"Customer"})},300)}).catch(e=>{if(this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),e.response&&422==e.response.status){const t=e.response.data.errors,a={};for(const[e,s]of Object.entries(t))a[e]=s[0];this.server_errors=a}this.$store.commit("Loading_State",!1)}))},createNewAddressName(){const e="#CUSTOM ADDRESS:";return this.isCreate?this.currentAddress:`${e} ${this.latlng.lat}, ${this.latlng.lng}`},onLocation(e){this.latlng.lat=e.latLng.lat(),this.latlng.lng=e.latLng.lng(),this.address=this.createNewAddressName(),this.data.lat=this.latlng.lat,this.data.lng=this.latlng.lng},setPlace(e){this.currentPlace=e,this.placeMarker()},placeMarker(){if(this.markers=[],this.places=[],this.currentPlace){const e={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:e}),this.latlng=e}else{const e={lat:parseFloat(this.data.lat),lng:parseFloat(this.data.lng)};this.markers.push({position:e})}this.$refs.searchInput&&(this.address=this.$refs.searchInput.$el.value),this.onDataChange()},geolocate(){navigator.geolocation.getCurrentPosition(e=>{this.latlng={lat:e.coords.lat,lng:e.coords.lng},this.placeMarker()})},onDataChange(){this.$emit("onDataChange",{address:this.address,position:this.latlng})},onSave(){this.$emit("onSave",{address:this.address||this.currentAddress||"Unnamed Location",position:this.latlng,isCreate:this.isCreate})},getCenter(){if(this.data.lat){const e={lat:parseFloat(this.data.lat),lng:parseFloat(this.data.lng)};return e}return this.latlng},getMarkers(e){return null!=e.lat?{lat:parseFloat(e.lat),lng:parseFloat(e.lng)}:this.latlng},addItem(e){this.addItemDetail=!0,this.villageDetail=e},addMoreVillageDetail(){""!=this.itemDetailValue&&(this.itemDetailValues.push(this.itemDetailValue),this.$store.commit("Loading_State",!0),this.$axios.post(`address/village/${this.selectedVillage}/village-detail`,{name:this.itemDetailValue,village_variation_id:this.villageDetail.id}).then(e=>{200==e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.addItemDetail=!1,this.selectedDetail="",this.fetchVillageDetail(),this.address={},this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})},300)}).catch(e=>{if(this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),e.response&&422==e.response.status){const t=e.response.data.errors;for(const[e,a]of Object.entries(t))this.server_errors[e]=a[0]}})),this.itemDetailValue="",this.addItemDetail=!1},fetchFavorite(){this.$axios.get("favorite-date").then(e=>{200==e.data.code&&setTimeout(()=>{this.favorite_dates=e.data.data},100)}).catch(()=>{})}}},C=S,D=(a("bfa5"),a("2877")),$=Object(D["a"])(C,x,I,!1,null,null,null);t["default"]=$.exports},ec29:function(e,t,a){},fe09:function(e,t,a){"use strict";a("14d9");var s=a("c37a"),i=a("5607"),r=a("2b0e"),l=r["a"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),n=a("8547"),o=a("58df");function c(e){e.preventDefault()}t["a"]=Object(o["a"])(s["a"],l,n["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const e=this.value,t=this.internalValue;return this.isMultiple?!!Array.isArray(t)&&t.some(t=>this.valueComparator(t,e)):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,t):Boolean(t):this.valueComparator(t,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel(){const e=s["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:c},e):e},genInput(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onClick(e){this.onChange(),this.$emit("click",e)},onChange(){if(!this.isInteractive)return;const e=this.value;let t=this.internalValue;if(this.isMultiple){Array.isArray(t)||(t=[]);const a=t.length;t=t.filter(t=>!this.valueComparator(t,e)),t.length===a&&t.push(e)}else t=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(t,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(t,e)?null:e:!t;this.validate(!0,t),this.internalValue=t,this.hasColor=t},onFocus(e){this.isFocused=!0,this.$emit("focus",e)},onBlur(e){this.isFocused=!1,this.$emit("blur",e)},onKeydown(e){}}})}}]);
//# sourceMappingURL=chunk-066bba20.415756fd.js.map