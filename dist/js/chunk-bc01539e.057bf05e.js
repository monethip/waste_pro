(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc01539e"],{"1f4f":function(t,e,s){"use strict";s("8b37");var a=s("80d2"),i=s("7560"),n=s("58df");e["a"]=Object(n["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(a["h"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"2bfd":function(t,e,s){},"398d":function(t,e,s){"use strict";var a=s("62ad"),i=s("0fd9"),n=function(){var t=this,e=t._self._c;return e(i["a"],t._l(t.cards,(function(t,s){return e(a["a"],{key:s},[e("MoneyCard",{attrs:{title:t.status_la,total:t.total,billing_count:t.count_billing,bg_color:t.bg_color,route:t.route,icon:t.icon,icon_color:t.icon_color,unit_count:t.unit_count}})],1)})),1)},o=[],l=s("ca79"),r={components:{MoneyCard:l["a"]},props:["cards"],data(){return{}}},c=r,h=s("2877"),u=Object(h["a"])(c,n,o,!1,null,null,null);e["a"]=u.exports},"4f75":function(t,e,s){},"54da":function(t,e,s){"use strict";e["a"]=function(t){const e={};if(!t[0]){for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&(void 0!==t[e]&&null!==t[e]&&""!==t[e]||delete t[e]);return t}for(const s of t)1==Object.keys(s).length&&s[Object.keys(s)]&&(e[Object.keys(s)]=s[Object.keys(s)]);return e}},7660:function(t,e,s){"use strict";s.d(e,"g",(function(){return a})),s.d(e,"c",(function(){return i})),s.d(e,"h",(function(){return n})),s.d(e,"e",(function(){return o})),s.d(e,"f",(function(){return l})),s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return c})),s.d(e,"d",(function(){return h}));s("14d9");const a=function(t){switch(t){case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ເປັນຖ້ຽວ";case"chartered":return"ມອບເໝົາ";case"bag":return"ບໍລິມາດ";case"infect":return"ຂີ້ເຫຍື້ອຕິດເຊື້ອ";case"32km":return"ຫຼັກ32";default:return t}},i=[{en:"container",la:"ຄອນເທນເນີ"},{en:"fix_cost",la:"ເປັນຖ້ຽວ"},{en:"chartered",la:"ມອບເໝົາ"},{en:"bag",la:"ບໍລິມາດ"},{en:"infect",la:"ຂີ້ເຫຍື້ອຕິດເຊື້ອ"},{en:"32km",la:"ຫຼັກ32"}],n=function(t){switch(t){case"company":return"ຫົວໜ່ວຍທຸລະກິດ";case"home":return"ຄົວເຮືອນ";default:return t}},o=function(t){switch(t){case"bag":case"chartered":case"32km":case"infect":return"ຖົງ";case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ຖ້ຽວ";default:return t}},l=[{en:"requested",la:"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ",color:"#34495e"},{en:"rejected",la:"ປະຕິເສດລູກຄ້າແລ້ວ",color:"#eff3f5"},{en:"approved",la:"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ",color:"#54a0ff"},{en:"collected",la:"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ",color:"#c1c40f"},{en:"collect_confirm",la:"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ",color:"#30cb83"},{en:"collect_reject",la:"ລູກຄ້າປະຕິເສດການເກັບ",color:"#e74c3c"}],r=[{text:"ວັນທີຈ່າຍບິນ",value:"paided_at"},{text:"ວັນທີສ້າງບິນ",value:"created_at"},{text:"ວັນທີອະນຸມັດບິນ",value:"approved_at"},{text:"ວັນທີກວດສອບບິນສຳເລັດ",value:"confirmed_payment_at"}],c=(t=[])=>{const e=[];for(const s of t)e.push({id:s.id,name:`${s.name} (${Intl.NumberFormat().format(s.price)} ກີບ)`});return e},h=[{value:"",text:"ທັງໝົດ"},{value:"can",text:"ເກັບໄດ້"},{value:"not",text:"ເກັບບໍ່ໄດ້"}]},"8b37":function(t,e,s){},"9d01":function(t,e,s){},afdd:function(t,e,s){"use strict";var a=s("8336");e["a"]=a["a"]},b73d:function(t,e,s){"use strict";s("ec29"),s("9d01");var a=s("fe09"),i=s("c37a"),n=s("c3f0"),o=s("0789"),l=s("490a"),r=s("80d2");e["a"]=a["a"].extend({name:"v-switch",directives:{Touch:n["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...e}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(o["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(l["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(t){(t.keyCode===r["y"].left&&this.isActive||t.keyCode===r["y"].right&&!this.isActive)&&this.onChange()}}})},be85:function(t,e,s){"use strict";s("4f75")},c6a6:function(t,e,s){"use strict";s("2bfd");var a=s("b974"),i=s("8654"),n=s("d9f7"),o=s("80d2");const l={...a["b"],offsetY:!0,offsetOverflow:!0,transition:!1};e["a"]=a["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,s)=>s.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:a["a"].options.props.menuProps.type,default:()=>l},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>{const e=Object(o["r"])(t,this.itemText),s=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=a["a"].options.computed.$_menuProps.call(this);return t.contentClass=("v-autocomplete__content "+(t.contentClass||"")).trim(),{...l,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue)))},listData(){const t=a["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){if(t!==e){if(!this.autoSelectFirst){const s=e[this.$refs.menu.listIndex];s?this.setMenuIndex(t.findIndex(t=>t===s)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&t.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===o["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===o["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==o["y"].backspace&&t!==o["y"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const a=this.selectedItems.length,i=t!==a-1?t:t-1,n=this.selectedItems[i];n?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=i},clearableCallback(){this.internalSearch=null,a["a"].options.methods.clearableCallback.call(this)},genInput(){const t=i["a"].options.methods.genInput.call(this);return t.data=Object(n["a"])(t.data,{attrs:{"aria-activedescendant":Object(o["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(o["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=a["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?a["a"].options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,s=e.value;e.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[o["y"].home,o["y"].end].includes(e)||a["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){a["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){a["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){a["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,s;if(-1===this.selectedIndex)return;const a=this.selectedItems[this.selectedIndex],i=this.getText(a);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",i),null===(s=t.clipboardData)||void 0===s||s.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}})},ca79:function(t,e,s){"use strict";var a=s("b0af"),i=s("99d9"),n=s("cc20"),o=s("132d"),l=function(){var t=this,e=t._self._c;return e(a["a"],{staticStyle:{height:"100px"},attrs:{outlined:""},on:{click:function(e){return t.openNewTab(t.route)}}},[e(i["c"],{staticClass:"d-flex justify-between w-full text-wrap",staticStyle:{position:"relative"}},[t.icon?e(n["a"],{staticClass:"text-caption text-wrap",attrs:{color:t.icon_color,dark:""}},[e(o["a"],{attrs:{"x-small":!0}},[t._v(" "+t._s(t.icon)+" ")]),e("div",{staticClass:"ml-1",attrs:{color:t.icon_color}},[t._v(" "+t._s(t.title)+" ")])],1):e(n["a"],{staticClass:"text-caption text-wrap",attrs:{color:t.bg_color,dark:""}},[t._v(" "+t._s(t.title)+" ")]),null!=t.billing_count&&""!=t.billing_count&&void 0!=t.billing_count?e(n["a"],{staticClass:"text-caption text-wrap",staticStyle:{position:"absolute",right:"10px"},attrs:{color:t.bg_color,outlined:""}},[t._v(" "+t._s(Intl.NumberFormat().format(t.billing_count))+" "+t._s(t.unit_count?t.unit_count:"ບິນ")+" ")]):t._e()],1),t.total?e(i["b"],[e("div",{staticClass:"text-h5 text-wrap"},[t._v(" "+t._s(Intl.NumberFormat().format(t.total))+" K ")])]):t._e()],1)},r=[],c={props:["title","billing_count","total","bg_color","route","icon","icon_color","unit_count"],data(){return{}},created(){},beforeUpdate(){this.$store.commit("Loading_State",!0)},updated(){this.$store.commit("Loading_State",!1)},methods:{getColor(t){return"background-color: "+t},openNewTab(t){t&&window.open(t.href,"_blank")}}},h=c,u=s("2877"),d=Object(u["a"])(h,l,r,!1,null,null,null);e["a"]=d.exports},e21c:function(t,e,s){"use strict";s.r(e);var a=s("c6a6"),i=s("2bc5"),n=s("8336"),o=s("62ad"),l=s("a523"),r=s("2e4b"),c=s("e449"),h=s("0fd9"),u=s("1f4f"),d=s("b73d"),m=s("8654"),p=function(){var t=this,e=t._self._c;return e(l["a"],[e(i["a"],{staticClass:"pt-0",attrs:{large:""}},[t._v(" ລາຍງານຂໍ້ມູນເຊວ ")]),e(o["a"],[e(h["a"],[e(o["a"],[e(a["a"],{attrs:{items:t.billDates,"item-text":"text","item-value":"value",label:"ເລືອກປະເພດວັນທີ",outlined:""},model:{value:t.selectedBillDate,callback:function(e){t.selectedBillDate=e},expression:"selectedBillDate"}})],1),e(o["a"],[e(c["a"],{attrs:{"close-on-content-click":!1,"nudge-right":40,"min-width":"auto","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e(m["a"],t._g(t._b({attrs:{dense:"",label:"ເລີ່ມວັນທີ",outlined:"",readonly:""},model:{value:t.date_from,callback:function(e){t.date_from=e},expression:"date_from"}},"v-text-field",a,!1),s))]}}]),model:{value:t.start_menu,callback:function(e){t.start_menu=e},expression:"start_menu"}},[e(r["a"],{model:{value:t.date_from,callback:function(e){t.date_from=e},expression:"date_from"}})],1)],1),e(o["a"],[e(c["a"],{attrs:{"close-on-content-click":!1,"nudge-right":40,"min-width":"auto","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e(m["a"],t._g(t._b({attrs:{dense:"",label:"ຫາວັນທີ",outlined:"",readonly:""},model:{value:t.date_to,callback:function(e){t.date_to=e},expression:"date_to"}},"v-text-field",a,!1),s))]}}]),model:{value:t.end_menu,callback:function(e){t.end_menu=e},expression:"end_menu"}},[e(r["a"],{model:{value:t.date_to,callback:function(e){t.date_to=e},expression:"date_to"}})],1)],1),e(o["a"],[e(a["a"],{attrs:{items:t.roles,dense:"","item-text":"name","item-value":"name",label:"ເລືອກບົດບາດຂອງເຊວ",outlined:""},model:{value:t.selectedRole,callback:function(e){t.selectedRole=e},expression:"selectedRole"}})],1),e(o["a"],[e(a["a"],{attrs:{items:t.employees,dense:"","item-text":"name","item-value":"id",label:"ເລືອກເຊວທີ່ກ່ຽວຂ້ອງ",outlined:""},model:{value:t.selectedSale,callback:function(e){t.selectedSale=e},expression:"selectedSale"}})],1),e(o["a"],[e(d["a"],{attrs:{label:t.is_active_only?"sale ທີ່ active":"sale ທັງໝົດ"},model:{value:t.is_active_only,callback:function(e){t.is_active_only=e},expression:"is_active_only"}})],1),e(o["a"],[e(n["a"],{attrs:{color:"green",dark:""},on:{click:t.exportData}},[t._v(" Export ")])],1)],1),e(h["a"],[e(o["a"],[e("RowSection",{attrs:{cards:t.summaryAll}})],1)],1),e(h["a"],[e(o["a"],[e(u["a"],[e("thead",[e("tr",{staticStyle:{"background-color":"blue",color:"white"}},[e("td",[t._v("ລ/ດ")]),e("td",[t._v("ຊື່")]),e("td",[t._v("ບ້ານ")]),e("td",[t._v("ສັນຍາ")]),e("td",[t._v("ລູກຄ້າ")]),e("td",[t._v("ເງິນສົດ")]),e("td",[t._v("ເງິນໂອນ")]),e("td",[t._v("bcel bill payment")]),e("td",[t._v("ລວມຍອດ")]),e("td",[t._v("ລວມເງິນສົດ")]),e("td",[t._v("ລວມເງິນໂອນ")]),e("td",[t._v("ລວມ bcel bill payment")]),e("td",[t._v("ລວມທັງໝົດ")])])]),t._l(t.summary,(function(s,a){return e("tbody",{key:s.id,style:t.getBodyColor(a)},[e("tr",[e("td",{attrs:{rowspan:s.summary.length}},[t._v(" "+t._s(a+1)+" ")]),e("td",{attrs:{rowspan:s.summary.length}},[e("a",{attrs:{href:"#"},on:{click:function(e){return t.openRoute(s.id,null,null)}}},[t._v(" "+t._s(s.emp_name?s.emp_name+" "+s.emp_surname:s.name)+" ")])]),e("td",{on:{click:function(e){return t.openRoute(s.id,s.summary[0].village_id,s.summary[0].district_id)}}},[e("a",{attrs:{href:"#"}},[t._v(" "+t._s(s.summary[0].village_name)+" ")])]),e("td",[t._v(" "+t._s(Intl.NumberFormat().format(s.summary[0].count_bill))+" ")]),e("td",[t._v(" "+t._s(Intl.NumberFormat().format(s.summary[0].count_customer))+" ")]),e("td",[t._v(" "+t._s(t.totalFromMethod(s.summary[0].payment_methods,"cash"))+" ")]),e("td",[t._v(" "+t._s(t.totalFromMethod(s.summary[0].payment_methods,"bcel"))+" ")]),e("td",[t._v(" "+t._s(t.totalFromMethod(s.summary[0].payment_methods,"bcel_online"))+" ")]),e("td",[t._v(" "+t._s(Intl.NumberFormat().format(s.summary[0].total))+" ")]),e("td",{attrs:{rowspan:s.summary.length}},[t._v(" "+t._s(Intl.NumberFormat().format(s.cash_amount))+" ")]),e("td",{attrs:{rowspan:s.summary.length}},[t._v(" "+t._s(Intl.NumberFormat().format(s.bcel_amount))+" ")]),e("td",{attrs:{rowspan:s.summary.length}},[t._v(" "+t._s(Intl.NumberFormat().format(s.bcel_online_amount))+" ")]),e("td",{attrs:{rowspan:s.summary.length}},[t._v(" "+t._s(Intl.NumberFormat().format(s.total))+" ")])]),t._l(s.summary.slice(1),(function(a,i){return e("tr",{key:i},[e("td",[e("a",{attrs:{href:"#"},on:{click:function(e){return t.openRoute(s.id,a.village_id,a.district_id)}}},[t._v(" "+t._s(a.village_name)+" ")])]),e("td",[t._v(" "+t._s(Intl.NumberFormat().format(a.count_bill))+" ")]),e("td",[t._v(" "+t._s(Intl.NumberFormat().format(a.count_customer))+" ")]),e("td",[t._v(" "+t._s(t.totalFromMethod(a.payment_methods,"cash"))+" ")]),e("td",[t._v(" "+t._s(t.totalFromMethod(a.payment_methods,"bcel"))+" ")]),e("td",[t._v(" "+t._s(t.totalFromMethod(a.payment_methods,"bcel_online"))+" ")]),e("td",[t._v(t._s(Intl.NumberFormat().format(a.total)))])])}))],2)}))],2)],1)],1)],1)],1)},_=[],f=(s("14d9"),s("54da")),v=s("7660"),g=s("398d"),b={title(){return"Vientiane Waste Co-Dev|Calendar"},components:{RowSection:g["a"]},data(){return{firstLoad:!0,is_active_only:!0,summary:[],summaryMoney:[],selectedRole:"",roles:[],defaultMoney:[{status_la:"ລວມ",total:0,count_billing:0,bg_color:"blue"},{status_la:"ເງິນສົດ",total:0,count_billing:0,bg_color:"blue"},{status_la:"ເງິນໂອນ",total:0,count_billing:0,bg_color:"blue"},{status_la:"bcel online",total:0,count_billing:0,bg_color:"blue"}],pagination:{},start_date:null,salesData:[],selectedSale:"",search:"",date_from:this.getLastDateTime(),date_to:"",start_menu:!1,end_menu:!1,selectedBillDate:"paided_at",exportMode:""}},computed:{summaryAll(){return[{status_la:"ລວມ",total:this.summaryMoney.total,bg_color:"blue",icon:"mdi-chart-pie",icon_color:"green"},{status_la:"ເງົນສົດ",total:this.summaryMoney.cash,bg_color:"blue",icon:"mdi-cash-multiple",icon_color:"blue"},{status_la:"ເງິນໂອນ",total:this.summaryMoney.bcel,bg_color:"blue",icon:"mdi-qrcode-scan",icon_color:"purple"},{status_la:"Bcel Online",total:this.summaryMoney.bcel_online,bg_color:"blue",icon:"mdi-cellphone-wireless",icon_color:"red"}]},lastMonthCreated(){return this.$store.getters["auth/getLastMonthBill"]},lastMonthBillCreated(){return this.$store.getters["auth/getLastMonthBillPaid"]},billDates(){return v["a"]},employees(){const t=[];for(const e of this.filteredEmployees){let s="";e.name&&(s+=e.name+" "),e.phone&&(s+=e.phone+" "),e.emp_name&&(s+=e.emp_name+" "),e.emp_surname&&(s+=e.emp_surname+" "),e.emp_card_id&&(s+=e.emp_card_id),t.push({name:s,id:e.id})}return t},filteredEmployees(){return this.selectedRole?this.salesData.filter(t=>t.roles.some(t=>t.name===this.selectedRole)):this.salesData}},watch:{is_active_only(){this.firstLoad||this.fetchData()},selectedSale(){this.firstLoad||this.fetchData()},date_from(){this.firstLoad||this.fetchData()},date_to(){this.firstLoad||this.fetchData()},selectedBillDate(){(this.date_from||this.date_to)&&this.fetchData()},selectedRole(){this.firstLoad||this.fetchData()}},created(){this.fetchRole(),this.fetchSale(),this.fetchData()},methods:{exportData(){this.exportMode="excel",this.fetchData(),this.exportMode=""},getLastDateTime(){const t=new Date;t.setHours(t.getHours()-20);const e=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return`${e}-${s}-${a}`},fetchSale(){this.$store.commit("Loading_State",!0),this.$axios.get("user-setting/user",{params:Object(f["a"])([{roles:["sale","sale_admin","sale_register","sale_partner","sale_editor"]},{order_by:"newest"}])}).then(t=>{200===t.data.code&&(this.$store.commit("Loading_State",!1),this.$store.commit("Loading_State",!1),this.salesData=t.data.data)}).catch(t=>{if(this.$store.commit("Loading_State",!1),t.response&&422===t.response.status){const e=t.response.data.errors;for(const[t,s]of Object.entries(e))this.server_errors[t]=s[0]}})},fetchRole(){this.$store.commit("Loading_State",!0),this.$axios.get("user-setting/role",{params:Object(f["a"])([{only_sale:!0}])}).then(t=>{200===t.data.code&&(this.$store.commit("Loading_State",!1),this.$store.commit("Loading_State",!1),this.roles=t.data.data)}).catch(t=>{if(this.$store.commit("Loading_State",!1),t.response&&422===t.response.status){const e=t.response.data.errors;for(const[t,s]of Object.entries(e))this.server_errors[t]=s[0]}})},getBodyColor(t){return t%2==0?"background-color:#f0eae0":""},totalFromMethod(t,e){let s=0;for(const a of t)a.payment_method==e&&(s=a.total);return Intl.NumberFormat().format(s)},fetchData(){this.start_menu=!1,this.end_menu=!1,this.$store.commit("Loading_State",!0),this.$axios.get("v2/report-billing-for-sale",{params:Object(f["a"])([{filter:this.search},{id:this.selectedSale},{date_from:this.date_from},{date_to:this.date_to},{date_method:this.selectedBillDate},{without_month_info:!0},{without_billing_summary:!0},{download:this.exportMode},{selected_role:this.selectedRole},{sale_active_status:this.is_active_only?"active":null}])}).then(t=>{200==t.data.code&&(this.$store.commit("Loading_State",!1),t.data.data.download_link?window.open(t.data.data.download_link):(this.summary=t.data.data.data,this.summaryMoney=t.data.data.summary))}).catch(t=>{if(this.$store.commit("Loading_State",!1),t.response&&422==t.response.status){const e=t.response.data.errors;for(const[t,s]of Object.entries(e))this.server_errors[t]=s[0]}}).finally(()=>{this.$store.commit("Loading_State",!1),this.firstLoad=!1})},openRoute(t,e,s){localStorage.removeItem("lastMonthBill"),localStorage.removeItem("lastMonthBillPaid");const a=this.$router.resolve({name:"Report-Billing-Main",query:Object(f["a"])([{selected_sale:t},{selected_village:e},{selected_district:s},{date_from:this.date_from},{date_to:this.date_to},{date_method:this.selectedBillDate},{from_sale:!0}])});window.open(a.href)},backPrevios(){this.$router.go(-1)}}},y=b,S=(s("be85"),s("2877")),I=Object(S["a"])(y,p,_,!1,null,null,null);e["default"]=I.exports},ec29:function(t,e,s){},fe09:function(t,e,s){"use strict";s("14d9");var a=s("c37a"),i=s("5607"),n=s("2b0e"),o=n["a"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),l=s("8547"),r=s("58df");function c(t){t.preventDefault()}e["a"]=Object(r["a"])(a["a"],o,l["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=a["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:c},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const s=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===s&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}})}}]);
//# sourceMappingURL=chunk-bc01539e.057bf05e.js.map