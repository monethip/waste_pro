(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69261a7a"],{"0c48":function(e,t,s){},"0fdf":function(e,t,s){},"4ee9":function(e,t,s){"use strict";s.r(t);var a=s("a892"),i=s("db5a"),n=s("0f35"),l=s("1da9"),r=s("1789"),o=s("0cb6"),c=s("d415"),d=s("1d7d"),h=s("fde7"),u=s("d62f"),p=s("26bf"),m=s("cfe2"),f=s("9b44"),g=function(){var e=this,t=e._self._c;return t(r["a"],[t(u["a"],{staticClass:"mb-n6"},[t(l["a"],[t(h["a"],{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function({on:s,attrs:a}){return[t(f["a"],e._g(e._b({attrs:{label:"ເລີ່ມວັນທີ",readonly:"",outlined:"",dense:"",clearable:""},model:{value:e.start_date,callback:function(t){e.start_date=t},expression:"start_date"}},"v-text-field",a,!1),s))]}}]),model:{value:e.start_menu,callback:function(t){e.start_menu=t},expression:"start_menu"}},[t(c["a"],{model:{value:e.start_date,callback:function(t){e.start_date=t},expression:"start_date"}})],1)],1),t(l["a"],[t(h["a"],{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function({on:s,attrs:a}){return[t(f["a"],e._g(e._b({attrs:{label:"ຫາວັນທີ",readonly:"",outlined:"",dense:"",clearable:""},model:{value:e.end_date,callback:function(t){e.end_date=t},expression:"end_date"}},"v-text-field",a,!1),s))]}}]),model:{value:e.end_menu,callback:function(t){e.end_menu=t},expression:"end_menu"}},[t(c["a"],{model:{value:e.end_date,callback:function(t){e.end_date=t},expression:"end_date"}})],1)],1),t(l["a"],[t(p["a"],{attrs:{outlined:"",dense:"",items:e.logNames,label:"Log Name",clearable:""},model:{value:e.selectedLogName,callback:function(t){e.selectedLogName=t},expression:"selectedLogName"}})],1),t(l["a"],[t(p["a"],{attrs:{outlined:"",dense:"",items:e.roles,"item-text":"name","item-value":"name",label:"Roles",multiple:"",clearable:""},model:{value:e.selectedRoles,callback:function(t){e.selectedRoles=t},expression:"selectedRoles"}}),t(m["a"])],1),t(l["a"],[t(a["a"],{attrs:{outlined:"",dense:"",items:e.users,"item-text":"name","item-value":"id",label:"Users",multiple:"",clearable:""},model:{value:e.selectedUsers,callback:function(t){e.selectedUsers=t},expression:"selectedUsers"}}),t(m["a"])],1),t(l["a"],[t(p["a"],{attrs:{outlined:"",dense:"",items:e.models,"item-text":"model_name","item-value":"model_name",label:"Model Name",multiple:"",clearable:""},model:{value:e.selectedModel,callback:function(t){e.selectedModel=t},expression:"selectedModel"}})],1)],1),t(u["a"],[t(l["a"],[t(f["a"],{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.fetchData.apply(null,arguments)}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),t(u["a"],[t(i["a"],[t(n["c"],[e._v("ຂໍ້ມູນ Activity Log ("+e._s(e.pagination.total)+")")]),t(n["b"],[t(o["a"],{staticClass:"page__table",attrs:{headers:e.headers,items:e.activities,"disable-pagination":!0,"hide-default-footer":"","item-key":"id","single-expand":e.singleExpand,expanded:e.expanded,"show-expand":""},on:{"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"item.created_at",fn:function({item:s}){return[t("div",[e._v(e._s(e.moment(s.created_at).format("hh:mm:ss DD-MM-YY")))])]}},{key:"expanded-item",fn:function({headers:s,item:a}){return[t("td",{staticClass:"pt-2 pb-2",attrs:{colspan:s.length}},[t("span",{staticStyle:{"font-size":"18px"}},[e._v("Properties")]),e._v(" "+e._s(a.properties.old)+" ")]),t("td",{staticClass:"pt-2 pb-2",attrs:{colspan:s.length}},[t("span",{staticStyle:{"font-size":"18px"}},[e._v("Attributes")]),e._v(" "+e._s(a.properties.attributes)+" ")])]}},{key:"item.attributes",fn:function({item:s}){return[t("pre",{style:"deleted"==s.log_name?{color:"red"}:{color:"green"}},[e._v(e._s(s.properties.attributes))])]}},{key:"item.properties",fn:function({item:s}){return[t("pre",[e._v(e._s(s.properties.old))])]}},{key:"item.changed",fn:function({item:s}){return e._l(s.properties.attributes,(function(a,i){return t("div",{key:i,staticClass:"mb-4"},[s.properties.old&&a!==s.properties.old[i]?t(u["a"],[t("div",{staticStyle:{display:"inline-block",color:"green"}},[t("b",{staticStyle:{color:"blue"}},[e._v(e._s(i)+":")]),e._v(' "'+e._s(a)+'" ')]),s.properties.old[i]?t("span",[t(d["a"],{attrs:{small:"",color:"primary"}},[e._v("mdi-arrow-left-box")]),e._v(' "'+e._s(s.properties.old[i])+'"')],1):t(d["a"],{attrs:{color:"primary",small:""}},[e._v(" mdi-new-box ")])],1):e._e()],1)}))}}])}),t("br"),[e.pagination.total_pages>1?t("Pagination",{attrs:{pagination:e.pagination,offset:e.offset},on:{paginate:function(t){return e.fetchData()}}}):e._e()]],2)],1)],1)],1)},_=[],v=(s("558b"),s("54da")),x={name:"Activity",title(){return"Vientiane Waste Co-Dev|"+this.title},data(){return{title:"Activity Log",logNames:["created","updated","deleted"],start_date:"",end_date:"",start_menu:!1,end_menu:!1,search:"",activities:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:100,start_collect:!1,server_errors:{},models:[],selectedModel:[],selectedRoles:[],selectedLogName:"",roles:[],selectedUsers:[],users:[],expanded:[],singleExpand:!1,headers:[{text:"Log name",value:"log_name",width:"150px"},{text:"ລາຍລະອຽດ",value:"description",width:"150px"},{text:"Model Name",value:"model_name",sortable:!1,width:"150px"},{text:"Subject Type",value:"subject_type",sortable:!1,width:"150px"},{text:"User",value:"user.name",sortable:!1},{text:"Created",value:"created_at",sortable:!1,width:"120px"},{text:"ຂໍ້ມູນທີ່ອັບເດດ",value:"attributes",sortable:!1,width:"350px"},{text:"ຂໍ້ມູນເກົ່າ",value:"properties",sortable:!1,width:"350px"},{text:"ຈຸດຕ່າງ",value:"changed",width:"350px"}]}},watch:{selectedModel(){this.pagination.current_page="",this.fetchData()},selectedLogName(){this.pagination.current_page="",this.fetchData()},start_date(){this.pagination.current_page="",""!=this.end_date&&this.start_date>this.end_date&&(this.start_date=""),this.fetchData()},end_date(){this.pagination.current_page="",this.end_date<this.start_date&&(this.end_date=""),this.fetchData()},selectedRoles(){this.pagination.current_page="",this.fetchData()},selectedUsers(){this.pagination.current_page="",this.fetchData()}},created(){this.fetchData(),this.fetchRole(),this.fetchModels()},methods:{fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("activity",{params:Object(v["a"])([{page:this.pagination.current_page},{per_page:this.per_page},{date_from:this.start_date},{date_end:this.end_date},{model_names:this.selectedModel},{users:this.selectedUsers},{roles:this.selectedRoles},{log_name:this.selectedLogName},{filter:this.search}])}).then(e=>{200==e.data.code&&(this.$store.commit("Loading_State",!1),this.activities=e.data.data.data,this.pagination=e.data.data.pagination)}).catch(e=>{if(this.$store.commit("Loading_State",!1),e.response&&422==e.response.status){const t=e.response.data.errors;for(const[e,s]of Object.entries(t))this.server_errors[e]=s[0]}})},fetchModels(){this.$axios.get("model").then(e=>{200==e.data.code&&(this.models=e.data.data)}).catch(()=>{})},fetchRole(){this.$axios.get("user-setting/role").then(e=>{200==e.data.code&&(this.roles=e.data.data,this.fetchUser())}).catch(()=>{})},fetchUser(){this.$axios.get("user-setting/user",{params:{roles:this.selectedRoles}}).then(e=>{200==e.data.code&&(this.users=e.data.data)}).catch(()=>{this.$store.commit("Loading_State",!1)})},viewPage(e){this.$router.push({name:"ViewCompanyDetail",params:{id:e}})},statusColor(e){return"active"==e?"success":"inactive"==e?"error":"info"}}},b=x,I=(s("5f67"),s("4a4e")),y=Object(I["a"])(b,g,_,!1,null,null,null);t["default"]=y.exports},"54da":function(e,t,s){"use strict";t["a"]=function(e){const t={};if(!e[0]){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(void 0!==e[t]&&null!==e[t]&&""!==e[t]||delete e[t]);return e}for(const s of e)1==Object.keys(s).length&&s[Object.keys(s)]&&(t[Object.keys(s)]=s[Object.keys(s)]);return t}},"5f67":function(e,t,s){"use strict";s("0c48")},a892:function(e,t,s){"use strict";s("0fdf");var a=s("26bf"),i=s("9b44"),n=s("ed44"),l=s("dd08");const r={...a["b"],offsetY:!0,offsetOverflow:!0,transition:!1};t["a"]=a["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:a["a"].options.props.menuProps.type,default:()=>r},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(l["r"])(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=a["a"].options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...r,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=a["a"].options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){if(e!==t){if(!this.autoSelectFirst){const s=t[this.$refs.menu.listIndex];s?this.setMenuIndex(e.findIndex(e=>e===s)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&e.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===l["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===l["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==l["y"].backspace&&e!==l["y"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const a=this.selectedItems.length,i=e!==a-1?e:e-1,n=this.selectedItems[i];n?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=i},clearableCallback(){this.internalSearch=null,a["a"].options.methods.clearableCallback.call(this)},genInput(){const e=i["a"].options.methods.genInput.call(this);return e.data=Object(n["a"])(e.data,{attrs:{"aria-activedescendant":Object(l["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["p"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=a["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?a["a"].options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[l["y"].home,l["y"].end].includes(t)||a["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){a["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){a["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){a["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,s;if(-1===this.selectedIndex)return;const a=this.selectedItems[this.selectedIndex],i=this.getText(a);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",i),null===(s=e.clipboardData)||void 0===s||s.setData("text/vnd.vuetify.autocomplete.item+plain",i),e.preventDefault()}}})}}]);
//# sourceMappingURL=chunk-69261a7a.5f233109.js.map