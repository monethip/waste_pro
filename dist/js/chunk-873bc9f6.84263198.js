(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-873bc9f6"],{"0fdf":function(t,e,s){},1789:function(t,e,s){"use strict";s("e5d1"),s("9a62");var i=s("d797");function a(t){return i["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:i,children:a}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:r}=i;if(r){i.attrs={};const t=Object.keys(r).filter(t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(i.staticClass+=" "+t.join(" "))}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),e(s.tag,i,a)}})}var r=s("ed44");e["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:i}){let a;const{attrs:l}=s;return l&&(s.attrs={},a=Object.keys(l).filter(t=>{if("slot"===t)return!1;const e=l[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,Object(r["a"])(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(a||[])}),i)}})},"565c":function(t,e,s){"use strict";s("558b");var i=s("9c0c"),a=s("68c4"),r=s("944a");e["a"]=Object(i["a"])(a["a"],Object(r["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))}):s.valid=e(t),s},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const s=this.watchers.find(t=>t._uid===e._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"6ece":function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));const i=t=>{""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},a892:function(t,e,s){"use strict";s("0fdf");var i=s("26bf"),a=s("9b44"),r=s("ed44"),l=s("dd08");const n={...i["b"],offsetY:!0,offsetOverflow:!0,transition:!1};e["a"]=i["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,s)=>s.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:()=>n},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>{const e=Object(l["r"])(t,this.itemText),s=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=i["a"].options.computed.$_menuProps.call(this);return t.contentClass=("v-autocomplete__content "+(t.contentClass||"")).trim(),{...n,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue)))},listData(){const t=i["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){if(t!==e){if(!this.autoSelectFirst){const s=e[this.$refs.menu.listIndex];s?this.setMenuIndex(t.findIndex(t=>t===s)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&t.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===l["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===l["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==l["y"].backspace&&t!==l["y"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=this.selectedItems.length,a=t!==i-1?t:t-1,r=this.selectedItems[a];r?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=a},clearableCallback(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput(){const t=a["a"].options.methods.genInput.call(this);return t.data=Object(r["a"])(t.data,{attrs:{"aria-activedescendant":Object(l["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=i["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,s=e.value;e.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[l["y"].home,l["y"].end].includes(e)||i["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){i["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){i["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],a=this.getText(i);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",a),null===(s=t.clipboardData)||void 0===s||s.setData("text/vnd.vuetify.autocomplete.item+plain",a),t.preventDefault()}}})},c3d5:function(t,e,s){"use strict";s("fb5d")},e69c:function(t,e,s){"use strict";s.r(e);var i=s("a892"),a=s("07b0"),r=s("db5a"),l=s("0f35"),n=s("1da9"),o=s("1789"),c=s("0cb6"),d=s("565c"),h=s("1d7d"),u=s("d62f"),m=s("cfe2"),p=s("9b44"),g=function(){var t=this,e=t._self._c;return e(o["a"],[e(u["a"],{staticClass:"mb-n6 text-right"},[e(n["a"],{staticClass:"text-left"},[t._v(" ຂໍ້ມູນທີ່ຢູ່ "),e(m["a"])],1),e(n["a"],[e(a["a"],{staticClass:"btn-primary",on:{click:function(e){return t.OpenModalAddVillage()}}}),e(h["a"],{attrs:{color:""}},[t._v(" mdi-plus ")]),t._v("Add Village ")],1)],1),e(r["a"],{staticClass:"mx-auto my-6",attrs:{elevation:"2"}},[e(l["b"],[e(u["a"],[e(n["a"],[e(i["a"],{attrs:{required:"",items:t.districts,"item-text":"name","item-value":"id",label:"ເມືອງ",outlined:"",dense:""},model:{value:t.selectedFilteredDistrict,callback:function(e){t.selectedFilteredDistrict=e},expression:"selectedFilteredDistrict"}})],1),e(n["a"],[e(p["a"],{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"",outlined:"",dense:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),e(c["a"],{attrs:{headers:t.headers,items:t.villages,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.variation",fn:function({item:s}){return[e(h["a"],{staticClass:"mr-2",attrs:{small:"",color:"green"},on:{click:function(e){return t.ViewVillage(s.id)}}},[t._v(" mdi-eye ")])]}},{key:"item.actions",fn:function({item:s}){return[e(h["a"],{staticClass:"mr-2",attrs:{small:"",color:"green"},on:{click:function(e){return t.OpenModalEdit(s)}}},[t._v(" mdi-pencil ")]),e(h["a"],{attrs:{small:"",color:"red"},on:{click:function(e){return t.deleteItem(s.id)}}},[t._v(" mdi-trash-can-outline ")])]}}])}),[t.pagination.total_pages>1?e("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchVillage()}}}):t._e()]],2)],1),e("ModalAdd",[[e(r["a"],[e(l["c"],[e("span",{staticClass:"text-h5"},[t._v("Add Village")]),e(m["a"])],1),e(l["b"],[e(o["a"],[e(d["a"],{ref:"form",attrs:{"lazy-validation":""}},[e(u["a"],[e(n["a"],[e(i["a"],{attrs:{required:"",items:t.districts,"item-text":"name","item-value":"id",label:"District *","rules-district":t.rulesDistrict},model:{value:t.selectedDistrict,callback:function(e){t.selectedDistrict=e},expression:"selectedDistrict"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.district_id)+" ")])],1)],1),e(u["a"],[e(n["a"],[e(p["a"],{attrs:{label:"village*",required:"","prepend-inner-icon":"mdi-home",rules:t.nameRules},model:{value:t.ban,callback:function(e){t.ban=e},expression:"ban"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1)],1)],1)],1),e(l["a"],[e(m["a"]),e(a["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeAddModal()}}},[t._v(" Close ")]),e(a["a"],{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.AddItem()}}},[t._v(" Save ")])],1)],1)],1)]],2),e("ModalEdit",[[e(r["a"],[e(l["c"],[e("span",{staticClass:"headline"},[t._v("ແກ້ໄຂຂໍ້ມູນບ້ານ")])]),e(l["b"],[e(o["a"],[e(d["a"],{ref:"form",attrs:{"lazy-validation":""}},[e(u["a"],[e(n["a"],[e(i["a"],{attrs:{required:"",items:t.districts,"item-text":"name","item-value":"id",label:"District *","rules-district":t.rulesDistrict},model:{value:t.selectedDistrict,callback:function(e){t.selectedDistrict=e},expression:"selectedDistrict"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.district_id)+" ")])],1)],1),e(u["a"],[e(n["a"],[e(p["a"],{attrs:{label:"village",required:"",rules:t.nameRules},model:{value:t.update_village.name,callback:function(e){t.$set(t.update_village,"name",e)},expression:"update_village.name"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1)],1)],1)],1),e(l["a"],[e(m["a"]),e(a["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeUpdateVillage()}}},[t._v(" ຍົກເລີກ ")]),e(a["a"],{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.updateItem()}}},[t._v(" ບັນທຶກ ")])],1)],1)],1)]],2),e("ModalDelete",[[e(l["a"],[e(m["a"]),e(a["a"],{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v(" Cancel ")]),e(a["a"],{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:t.DeleteItemConfirm}},[t._v(" OK ")]),e(m["a"])],1)]],2)],1)},f=[],v=s("6ece"),_={name:"Village",title(){return"Vientiane Waste Co-Dev|Address"},data(){return{loading:!1,districts:[],selectedDistrict:"",selectedFilteredDistrict:"",selectedVillage:"",listVillage:[],village_details:[],getVillage:[],villages:[],ban:"",number:"",errormsg:"",update_village:{},search:"",offset:12,pagination:{},per_page:100,oldVal:"",server_errors:{},rulesDistrict:[t=>!!t||"District is required"],nameRules:[t=>!!t||"Name is required"],headers:[{text:"ລະຫັດ",align:"start",value:"id",sortable:!1},{text:"ບ້ານ",align:"start",value:"name",sortable:!1},{text:"ລາຍລະອຽດທີ່ຢູ່",value:"variation",sortable:!1,align:"center"},{text:"",value:"actions",sortable:!1}]}},watch:{selectedFilteredDistrict(){this.pagination.current_page="",this.fetchVillage(),this.server_errors.district_id=""},search(t){""==t&&(this.pagination.current_page="",this.fetchVillage())},ban(){this.server_errors.name=""}},created(){this.fetchData()},methods:{OpenModalAddVillage(){this.$store.commit("modalAdd_State",!0)},closeDelete(){this.$store.commit("modalDelete_State",!1)},deleteItem(t){this.village_id=t,this.$store.commit("modalDelete_State",!0)},DeleteItemConfirm(){this.$store.commit("Loading_State",!0),this.$axios.delete("address/village/"+this.village_id).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message}),this.$store.commit("modalDelete_State",!1),this.fetchData()},300)}).catch(()=>{this.fetchData(),this.$store.commit("modalDelete_State",!1),this.$store.commit("Loading_State",!1)})},reset(){this.$refs.form.reset()},OpenModalEdit(t){this.update_village=t,this.selectedDistrict=this.update_village.district_id,this.$store.commit("modalEdit_State",!0)},updateItem(){1==this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.put("address/village/"+this.update_village.id,{name:this.update_village.name,district_id:this.selectedDistrict}).then(t=>{this.$store.commit("Loading_State",!1),this.update_village={},this.reset(),this.closeUpdateVillage(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})}).catch(t=>{if(this.$store.commit("Loading_State",!1),this.fetchVillage(),t.response&&422==t.response.status){this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message});const e=t.response.data.errors;for(const[t,s]of Object.entries(e))this.server_errors[t]=s[0]}}))},fetchData(){this.$store.commit("Loading_State",!0),this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then(t=>{200==t.data.code&&(this.getVillage=t.data.data,this.getVillage.map(t=>{this.districts=t.districts,this.selectedFilteredDistrict=this.districts[0].id,this.$store.commit("Loading_State",!1),this.fetchVillage()}))}).catch(()=>{})},fetchVillage(){this.$store.commit("Loading_State",!0),this.$axios.get(`info/district/${this.selectedFilteredDistrict}/village`,{params:{page:this.pagination.current_page,per_page:this.per_page,filter:this.search}}).then(t=>{200==t.data.code&&(this.villages=t.data.data.data,this.pagination=t.data.data.pagination,this.$store.commit("Loading_State",!1))}).catch(()=>{})},closeUpdateVillage(){this.reset(),this.update_village={},this.fetchVillage(),this.$store.commit("modalEdit_State",!1)},closeAddModal(){this.$store.commit("modalAdd_State",!1)},ViewVillage(t){this.$openRoute({name:"ViewVillage",params:{id:t}})},AddItem(){1==this.$refs.form.validate()&&(this.$store.commit("Loading_State",!0),this.$axios.post("address/village",{name:this.ban,district_id:this.selectedDistrict}).then(t=>{200==t.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.closeAddModal(),this.fetchData(),this.reset(),this.$store.commit("Toast_State",{value:!0,color:"success",msg:t.data.message})},300)}).catch(t=>{if(this.$store.commit("Loading_State",!1),t.response&&422==t.response.status){this.$store.commit("Toast_State",{value:!0,color:"error",msg:t.response.data.message});const e=t.response.data.error;for(const[t,s]of Object.entries(e))this.server_errors[t]=s[0]}}))},Search(){Object(v["a"])(this)}}},I=_,S=(s("c3d5"),s("4a4e")),b=Object(S["a"])(I,g,f,!1,null,null,null);e["default"]=b.exports},fb5d:function(t,e,s){}}]);
//# sourceMappingURL=chunk-873bc9f6.84263198.js.map