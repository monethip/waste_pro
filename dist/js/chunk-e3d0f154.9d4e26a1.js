(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3d0f154"],{"2bfd":function(t,e,a){},"4bd4":function(t,e,a){"use strict";var n=a("5530"),i=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),s=a("7e2b"),r=a("3206");e["a"]=Object(i["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=a(t)))})):n.valid=a(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"4fad":function(t,e,a){var n=a("23e7"),i=a("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return i(t)}})},"54da":function(t,e,a){"use strict";var n=a("b85c");a("b64b");e["a"]=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a={},i=Object(n["a"])(e);try{for(i.s();!(t=i.n()).done;){var s=t.value;1==Object.keys(s).length&&s[Object.keys(s)]&&(a[Object.keys(s)]=s[Object.keys(s)])}}catch(r){i.e(r)}finally{i.f()}return a}},"6eceb":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("ac1f"),a("841c");var n=function(t){""!==t.search?""!==t.oldVal?t.oldVal!==t.search&&(t.oldVal=t.search,t.pagination.current_page=1,t.fetchData()):(""!==t.search&&(t.pagination.current_page=1,t.fetchData()),t.oldVal=t.search):t.oldVal=""}},7660:function(t,e,a){"use strict";a.d(e,"e",(function(){return n})),a.d(e,"b",(function(){return i})),a.d(e,"f",(function(){return s})),a.d(e,"c",(function(){return r})),a.d(e,"d",(function(){return c})),a.d(e,"a",(function(){return o}));var n=function(t){switch(t){case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ເປັນຖ້ຽວ";case"chartered":return"ມອບເໝົາ";case"bag":return"ບໍລິມາດ";default:return t}},i=[{en:"container",la:"ຄອນເທນເນີ"},{en:"fix_cost",la:"ເປັນຖ້ຽວ"},{en:"chartered",la:"ມອບເໝົາ"},{en:"bag",la:"ບໍລິມາດ"}],s=function(t){switch(t){case"company":return"ຫົວໜ່ວຍທຸລະກິດ";case"home":return"ຄົວເຮືອນ";default:return t}},r=function(t){switch(t){case"bag":case"chartered":return"ຖົງ";case"container":return"ຄອນເທນເນີ";case"fix_cost":return"ຖ້ຽວ";default:return t}},c=[{en:"requested",la:"ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ",color:"#34495e"},{en:"rejected",la:"ປະຕິເສດລູກຄ້າແລ້ວ",color:"#eff3f5"},{en:"approved",la:"ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ",color:"#54a0ff"},{en:"collected",la:"ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ",color:"#c1c40f"},{en:"collect_confirm",la:"ລູກຄ້າຢືນຢັນການເກັບແລ້ວ",color:"#30cb83"},{en:"collect_reject",la:"ລູກຄ້າປະຕິເສດການເກັບ",color:"#e74c3c"}],o=[{text:"ວັນທີຈ່າຍບິນ",value:"paided_at"},{text:"ວັນທີສ້າງບິນ",value:"created_at"},{text:"ວັນທີອະນຸມັດບິນ",value:"approved_at"},{text:"ວັນທີກວດສອບບິນສຳເລັດ",value:"confirmed_payment_at"}]},"8f8c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"mb-n6"},[a("v-col",[a("v-btn",{staticClass:"btn-primary",on:{click:function(e){return t.createPage()}}},[a("v-icon",[t._v("mdi-plus")])],1)],1),a("v-col",[a("v-menu",{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"ເລີ່ມວັນທີ",readonly:"",outlined:"",dense:"",clearable:""},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}},"v-text-field",i,!1),n))]}}]),model:{value:t.start_menu,callback:function(e){t.start_menu=e},expression:"start_menu"}},[a("v-date-picker",{model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}})],1)],1),a("v-col",[a("v-menu",{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"ຫາວັນທີ",readonly:"",outlined:"",dense:"",clearable:""},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}},"v-text-field",i,!1),n))]}}]),model:{value:t.end_menu,callback:function(e){t.end_menu=e},expression:"end_menu"}},[a("v-date-picker",{model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}})],1)],1),a("v-col",[a("v-autocomplete",{attrs:{outlined:"",dense:"",items:t.districts,"item-text":"name","item-value":"id",label:"ເມືອງ",clearable:""},model:{value:t.selectedDistrict,callback:function(e){t.selectedDistrict=e},expression:"selectedDistrict"}})],1),a("v-col",[a("v-autocomplete",{attrs:{outlined:"",dense:"",items:t.villages,"item-text":"name","item-value":"id",label:"ບ້ານ",multiple:"",clearable:""},model:{value:t.selectedVillage,callback:function(e){t.selectedVillage=e},expression:"selectedVillage"}})],1),a("v-col",[a("v-select",{attrs:{outlined:"",dense:"",items:t.status,"item-text":"name","item-value":"name",label:"ສະຖານະ",multiple:"",clearable:""},model:{value:t.selectedStatus,callback:function(e){t.selectedStatus=e},expression:"selectedStatus"}})],1)],1),a("v-row",[a("v-col",[a("v-select",{attrs:{outlined:"",dense:"",items:t.customerStatus,"item-text":"name","item-value":"value",label:"ສະຖານະແຜນ",multiple:"",clearable:""},model:{value:t.selectedCustomerStatus,callback:function(e){t.selectedCustomerStatus=e},expression:"selectedCustomerStatus"}})],1),a("v-col",[a("v-select",{attrs:{outlined:"",dense:"",items:t.can_collects,"item-text":"name","item-value":"value",label:"ເກັບເລີຍໄດ້ບໍ່",clearable:""},model:{value:t.selectedCanCollect,callback:function(e){t.selectedCanCollect=e},expression:"selectedCanCollect"}})],1),a("v-col",[a("v-select",{attrs:{outlined:"",dense:"",items:t.costs,"item-text":"name","item-value":"value",label:"ປະເພດບໍລິການ",multiple:"",clearable:""},model:{value:t.selectedCost,callback:function(e){t.selectedCost=e},expression:"selectedCost"}})],1),a("v-col",[a("v-select",{attrs:{outlined:"",dense:"",items:t.favorite_dates,"item-text":"name","item-value":"name",label:"ມື້ບໍລິການ",multiple:""},model:{value:t.selectedFavoriteDate,callback:function(e){t.selectedFavoriteDate=e},expression:"selectedFavoriteDate"}})],1),a("v-col",[a("v-text-field",{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຄົ້ນຫາ",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),a("div",[a("v-card",[a("v-card-title",[t._v(" ຂໍ້ມູນຫົວໜ່ວຍທຸລະກິດ ("+t._s(t.pagination.total)+") "),a("v-divider",{staticClass:"mx-4",attrs:{vertical:""}}),a("v-spacer")],1),a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.customers,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.media",fn:function(e){var n=e.item;return t._l(n.media,(function(e,n){return a("v-avatar",{key:n,attrs:{size:"36px"}},[e.url?a("img",{attrs:{src:e.url}}):t._e()])}))}},{key:"item.village_detail",fn:function(e){var n=e.item;return t._l(n.village_details,(function(e,n){return a("div",{key:n},[a("div",[t._v(t._s(e.name))])])}))}},{key:"item.favorite_dates",fn:function(e){var n=e.item;return t._l(n.favorite_dates,(function(e,n){return a("div",{key:n},[a("div",[t._v(t._s(e.name))])])}))}},{key:"item.cost_by",fn:function(e){var n=e.item;return[a("div",[t._v(t._s(t.costBy(n.cost_by)))])]}},{key:"item.price",fn:function(e){var n=e.item;return["bag"!==n.cost_by?a("div",[t._v(t._s(Intl.NumberFormat().format(n.fix_cost)))]):t._e(),"bag"==n.cost_by?a("div",[n.current_bag_price?a("div",[t._v(t._s(Intl.NumberFormat().format(n.current_bag_price.price)))]):t._e()]):t._e()]}},{key:"item.expect_trash",fn:function(e){var n=e.item;return[n.expect_trash?a("v-chip",{attrs:{outlined:"",color:"green"}},[t._v(" "+t._s(Intl.NumberFormat().format(n.expect_trash))+" "+t._s(t.getCustomerUnitFunc(n.cost_by))+" ")]):a("div",[t._v("-")])]}},{key:"item.current_month_info",fn:function(e){var n=e.item;return[n.current_month_info?a("v-chip",{attrs:{outlined:"",color:t.getTrashColor(n,t.getTrash(n.cost_by,n.last_month_info))}},[t._v(t._s(Intl.NumberFormat().format(t.getTrash(n.cost_by,n.current_month_info)))+" "+t._s(t.getCustomerUnitFunc(n.cost_by))+" ")]):a("div",[t._v("-")])]}},{key:"item.last_month_info",fn:function(e){var n=e.item;return[n.last_month_info?a("v-chip",{attrs:{dark:"",color:t.getTrashColor(n,t.getTrash(n.cost_by,n.last_month_info))}},[t._v(t._s(Intl.NumberFormat().format(t.getTrash(n.cost_by,n.last_month_info)))+" "+t._s(t.getCustomerUnitFunc(n.cost_by))+" ")]):a("div",[t._v("-")])]}},{key:"item.can_collect",fn:function(e){var n=e.item;return[a("v-chip",{attrs:{color:t.statusColor(n.can_collect)}},[t._v(t._s(t.CanCollect(n.can_collect))+" ")])]}},{key:"item.actions",fn:function(e){var n=e.item;return[a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-icon",t._g(t._b({staticClass:"mr-2",attrs:{color:"primary",dark:"",medium:""}},"v-icon",i,!1),n),[t._v("mdi-dots-vertical ")])]}}],null,!0)},[a("v-list",[a("v-list-item",{attrs:{link:""},on:{click:function(e){return t.addUser(n)}}},[a("v-list-item-title",[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-plus")]),t._v(" ເພີ່ມຜູ້ປະສານງານ ")],1)],1),a("v-list-item",{attrs:{link:""},on:{click:function(e){return t.viewPage(n.id)}}},[a("v-list-item-title",[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-eye")]),t._v(" ລາຍລະອຽດ ")],1)],1),a("v-list-item",{attrs:{link:""},on:{click:function(e){return t.editPage(n.id)}}},[a("v-list-item-title",[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-pencil")]),t._v(" ແກ້ໄຂ ")],1)],1),a("v-list-item",{attrs:{link:""},on:{click:function(e){return t.deleteItem(n.id)}}},[a("v-list-item-title",[a("v-icon",{attrs:{small:""}},[t._v(" mdi-delete")]),t._v(" ລຶບ ")],1)],1)],1)],1)]}}])}),a("br"),[t.pagination.total_pages>1?a("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1),a("ModalAdd",[[a("v-card",[a("v-card-title",[a("p",[t._v("ເພີ່ມຜູ້ປະສານງານ")])]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Name *",required:""},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Surname *",required:""},model:{value:t.user.surname,callback:function(e){t.$set(t.user,"surname",e)},expression:"user.surname"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.surname)+" ")])],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{staticClass:"input-number",attrs:{label:"ເບີໂທ *",required:"",type:"number"},model:{value:t.user.phone,callback:function(e){t.$set(t.user,"phone",e)},expression:"user.phone"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.phone)+" ")])],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeAddModal()}}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.AddItem()}}},[t._v(" Save ")])],1)],1)],1)]],2),a("ModalDelete",[[a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:t.deleteItemConfirm}},[t._v("OK ")]),a("v-spacer")],1)]],2)],1)},i=[],s=a("3835"),r=(a("ac1f"),a("841c"),a("4fad"),a("d81d"),a("b0c0"),a("6eceb")),c=a("7660"),o=a("54da"),l={name:"Customer",title:function(){return"Vientiane Waste Co-Dev|".concat(this.title)},data:function(){return{title:"Company",start_date:"",end_date:"",start_menu:!1,end_menu:!1,customers:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:100,search:"",oldVal:"",packages:[],selectedPackage:"",start_collect:!1,server_errors:{},districts:[],selectedDistrict:"",villages:[],selectedVillage:[],selectedStatus:[],status:[{id:1,name:"active"},{id:2,name:"inactive"},{id:3,name:"trial"}],selectedCanCollect:"",can_collects:[{id:1,name:"ເກັບໄດ້",value:"1"},{id:2,name:"ເກັບບໍໄດ້",value:"0"}],selectedCustomerStatus:[],customerStatus:[{id:1,value:"calendar",name:"ຍັງບໍ່ມີແຜນເດີນລົດ"},{id:2,value:"route_plan",name:"ຍັງບໍ່ມີເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ"}],selectedCost:[],costs:[{id:1,value:"container",name:"ຄອນເທັນເນີ"},{id:2,value:"fix_cost",name:"ທຸລະກິດເປັນຖ້ຽວ"},{id:3,value:"chartered",name:"ມອບເໝົາ"},{id:4,value:"bag",name:"ບໍລິມາດ"}],user:{},item:{},favorite_dates:[],selectedFavoriteDate:[],headers:[{text:"ລະຫັດ",value:"customer_id",width:"150px"},{text:"ບໍລິສັດ",value:"company_name",width:"150px"},{text:"ເບີໂທ",value:"user.phone",width:"100px"},{text:"ບ້ານ",value:"village.name",sortable:!1,width:"150px"},{text:"ເມືອງ",value:"district.name",sortable:!1,width:"100px"},{text:"ລາຍລະອຽດທີ່ຢູ່",value:"village_detail",sortable:!1,width:"200px"},{text:"ປະເພດບໍລິການ",value:"cost_by_la",width:"200px"},{text:"ມູນຄ່າສັນຍາ",value:"price",width:"150px"},{text:"ຂີ້ເຫຍື້ອຄາດໝາຍ",value:"expect_trash",width:"200px"},{text:"ຂີ້ເຫຍື້ອປັດຈຸບັນ",value:"current_month_info",width:"200px"},{text:"ຂີ້ເຫຍື້ອເດືອນກ່ອນ",value:"last_month_info",width:"200px"},{text:"ສະຖານະເກັບ",value:"can_collect",align:"center",width:"100px"},{text:"ມື້ບໍລິການ",value:"favorite_dates",width:"120px"},{text:"ໝາຍເຫດ",value:"collect_description",sortable:!1,width:"200px"},{text:"",value:"media"},{text:"",value:"actions",sortable:!1}]}},methods:{getTrashColor:function(t,e){return!t.expect_trash||t.expect_trash>e?"blue":t.expect_trash==e?"green":"red"},getCustomerUnitFunc:function(t){return Object(c["c"])(t)},getTrash:function(t,e){if(!e)return 0;switch(t){case"bag":case"chartered":return e.bag_sum;case"container":return e.container_sum;case"fix_cost":return e.count_time;default:return t}},fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("company",{params:Object(o["a"])([{page:this.pagination.current_page},{per_page:this.per_page},{filter:this.search},{date_from:this.start_date},{date_end:this.end_date},{statuses:this.selectedStatus},{without:this.selectedCustomerStatus},{villages:this.selectedVillage},{can_collect:this.selectedCanCollect},{district_id:this.selectedDistrict},{cost_by:this.selectedCost},{favorite_dates:this.selectedFavoriteDate}])}).then((function(e){200==e.data.code&&(t.$store.commit("Loading_State",!1),t.customers=e.data.data.data,t.pagination=e.data.data.pagination)})).catch((function(e){if(t.$store.commit("Loading_State",!1),e.response&&422==e.response.status)for(var a=e.response.data.errors,n=0,i=Object.entries(a);n<i.length;n++){var r=Object(s["a"])(i[n],2),c=r[0],o=r[1];t.server_errors[c]=o[0]}}))},fetchAddress:function(){var t=this;this.$axios.get("info/address",{params:{filter:"ນະຄອນຫລວງວຽງຈັນ"}}).then((function(e){200==e.data.code&&(t.address=e.data.data,t.address.map((function(e){t.districts=e.districts})))})).catch((function(){}))},fetchVillage:function(){var t=this;this.$axios.get("info/district/"+this.selectedDistrict+"/village").then((function(e){200==e.data.code&&(t.villages=e.data.data)})).catch((function(){}))},closeDelete:function(){this.$store.commit("modalDelete_State",!1)},deleteItem:function(t){this.customerId=t,this.$store.commit("modalDelete_State",!0)},deleteItemConfirm:function(){var t=this;this.loading=!0,this.$axios.delete("company/"+this.customerId).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.$store.commit("modalDelete_State",!1),t.fetchData(),t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})}),300)})).catch((function(e){t.fetchData(),t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),t.$store.commit("modalDelete_State",!1),t.loading=!1}))},addUser:function(t){this.item=t,this.$store.commit("modalAdd_State",!0)},closeAddModal:function(){this.$store.commit("modalAdd_State",!1)},AddItem:function(){var t=this;1==this.$refs.form.validate()&&(this.loading=!0,this.$axios.post("company/"+this.item.id+"/coordinator",this.user).then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.closeAddModal(),t.user={},t.fetchData(),t.reset(),t.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})}),300)})).catch((function(e){if(t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),t.fetchData(),e.response&&422==e.response.status)for(var a=e.response.data.errors,n=0,i=Object.entries(a);n<i.length;n++){var r=Object(s["a"])(i[n],2),c=r[0],o=r[1];t.server_errors[c]=o[0]}})))},reset:function(){this.$refs.form.reset()},createPage:function(){this.$router.push({name:"CreateCompany"})},editPage:function(t){this.$router.push({name:"EditCompany",params:{id:t}})},viewPage:function(t){this.$router.push({name:"ViewCompany",params:{id:t}})},Search:function(){Object(r["a"])(this)},statusColor:function(t){return"1"==t?"success":"0"==t?"error":"info"},CanCollect:function(t){return"1"==t?"ເກັບໄດ້":"0"==t?"ເກັບບໍ່ໄດ້":void 0},costBy:function(t){return"container"==t?"ຄອນເທັນເນີ":"fix_cost"==t?"ທຸລະກິດເປັນຖ້ຽວ":"chartered"==t?"ມອບເໝົາ":"bag"==t?"ບໍລິມາດ":""},fetchFavorite:function(){var t=this;this.$axios.get("favorite-date").then((function(e){200==e.data.code&&setTimeout((function(){t.favorite_dates=e.data.data}),100)})).catch((function(){}))}},watch:{selectedFavoriteDate:function(){this.pagination.current_page="",this.fetchData()},start_date:function(){this.server_errors.start_month="",this.pagination.current_page="",""!=this.end_date&&this.start_date>this.end_date&&(this.start_date=""),this.fetchData()},end_date:function(){this.pagination.current_page="",this.end_date<this.start_date&&(this.end_date=""),this.fetchData()},search:function(t){this.pagination.current_page="",""==t&&this.fetchData()},selectedVillage:function(){this.pagination.current_page="",this.fetchData()},selectedDistrict:function(){this.pagination.current_page="",this.fetchVillage(),this.fetchData()},selectedStatus:function(){this.pagination.current_page="",this.fetchData()},selectedPackage:function(){this.server_errors.package_id=""},selectedCustomerStatus:function(){this.pagination.current_page="",this.fetchData()},selectedCost:function(){this.pagination.current_page="",this.fetchData()},selectedCanCollect:function(){this.pagination.current_page="",this.fetchData()},"user.name":function(){this.server_errors.name=""},"user.surname":function(){this.server_errors.name=""},"user.phone":function(){this.server_errors.phone=""}},created:function(){this.fetchData(),this.fetchAddress(),this.fetchFavorite()}},u=l,d=(a("e253"),a("2877")),h=a("6544"),m=a.n(h),f=a("c6a6"),v=a("8212"),p=a("8336"),_=a("b0af"),g=a("99d9"),b=a("cc20"),x=a("62ad"),y=a("a523"),I=a("8fea"),S=a("2e4b"),C=a("ce7e"),k=a("4bd4"),D=a("132d"),w=a("8860"),V=a("da13"),$=a("5d23"),O=a("e449"),F=a("0fd9"),T=a("b974"),j=a("2fa4"),A=a("8654"),B=Object(d["a"])(u,n,i,!1,null,null,null);e["default"]=B.exports;m()(B,{VAutocomplete:f["a"],VAvatar:v["a"],VBtn:p["a"],VCard:_["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VChip:b["a"],VCol:x["a"],VContainer:y["a"],VDataTable:I["a"],VDatePicker:S["a"],VDivider:C["a"],VForm:k["a"],VIcon:D["a"],VList:w["a"],VListItem:V["a"],VListItemTitle:$["d"],VMenu:O["a"],VRow:F["a"],VSelect:T["a"],VSpacer:j["a"],VTextField:A["a"]})},c6a6:function(t,e,a){"use strict";var n=a("5530"),i=(a("d81d"),a("4de4"),a("498a"),a("7db0"),a("caad"),a("2532"),a("2bfd"),a("b974")),s=a("8654"),r=a("d9f7"),c=a("80d2"),o=Object(n["a"])(Object(n["a"])({},i["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,a){return a.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:function(){return o}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var a=Object(c["r"])(e,t.itemText),n=null!=a?String(a):"";return t.filter(e,String(t.internalSearch),n)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=i["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(n["a"])(Object(n["a"])({},o),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=i["a"].options.computed.listData.call(this);return t.props=Object(n["a"])(Object(n["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var a=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){a.internalSearch&&(1===t.length||a.autoSelectFirst)&&(a.$refs.menu.getTiles(),a.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===c["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===c["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==c["y"].backspace&&t!==c["y"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var a=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===a){var n=this.selectedItems.length,i=t!==n-1?t:t-1,s=this.selectedItems[i];s?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=i}else this.selectedIndex=a}},clearableCallback:function(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return t.data=Object(r["a"])(t.data,{attrs:{"aria-activedescendant":Object(c["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(c["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=i["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,a=e.value;e.value&&this.activateMenu(),this.internalSearch=a,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[c["y"].home,c["y"].end].includes(e)||i["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){i["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){i["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,a;if(-1!==this.selectedIndex){var n=this.selectedItems[this.selectedIndex],i=this.getText(n);null==(e=t.clipboardData)||e.setData("text/plain",i),null==(a=t.clipboardData)||a.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}}})},e253:function(t,e,a){"use strict";a("ff9c")},ff9c:function(t,e,a){}}]);
//# sourceMappingURL=chunk-e3d0f154.9d4e26a1.js.map