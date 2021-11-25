(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-222fe756"],{"01ce":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-breadcrumbs",{attrs:{large:""}},[a("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[a("v-icon",[t._v("mdi-keyboard-backspace ")])],1),t._v(" View Village Details")],1),a("v-col",{attrs:{justify:"center"}},[a("v-card",{staticClass:"my-6",attrs:{elevation:"2"}},[a("v-card-title",[t._v(" ຂໍ້ມູນລາຍລະອຽດທີ່ຢູ່ "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{attrs:{headers:t.headers,items:t.addressdetail,search:t.search,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.detail",fn:function(e){var i=e.item;return[i.detail.village_details?a("div",t._l(i.detail.village_details,(function(e,i){return a("div",{key:i},[a("span",[t._v(t._s(e.name))])])})),0):t._e()]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"green"},on:{click:function(e){return t.OpenModalEdit(i)}}},[t._v(" mdi-account-edit ")]),a("v-icon",{attrs:{small:"",color:"red"},on:{click:function(e){return t.deleteItem(i.id)}}},[t._v(" mdi-trash-can-outline ")])]}}],null,!0)}),[t.pagination.total_pages>1?a("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("View Village")])]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{label:"district*",required:"",rules:t.nameRules,disabled:""},model:{value:t.showdistrict.name,callback:function(e){t.$set(t.showdistrict,"name",e)},expression:"showdistrict.name"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{label:"village *",required:"",rules:t.nameRules,disabled:""},model:{value:t.data.name,callback:function(e){t.$set(t.data,"name",e)},expression:"data.name"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1),a("v-col",{attrs:{cols:"4"}},[a("v-select",{attrs:{items:t.villagevariate2,"item-text":"name","item-value":"id",label:" ໜ່ວຍ*"},model:{value:t.selectedVillageDetail2,callback:function(e){t.selectedVillageDetail2=e},expression:"selectedVillageDetail2"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.errormsg)+" ")])],1),a("v-col",{attrs:{cols:"4"}},[a("v-select",{attrs:{items:t.villagevariate1,"item-text":"name","item-value":"id",label:"ຮ່ອມ*"},model:{value:t.selectedVillageDetail,callback:function(e){t.selectedVillageDetail=e},expression:"selectedVillageDetail"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.errormsg)+" ")])],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.backPrevios()}}},[t._v(" Back ")])],1)],1)],1)],1)},r=[],s=a("3835"),n=(a("4fad"),a("d81d"),{data:function(){return{data:{},loading:!1,server_errors:{},provinces:[],districts:[],selectedDistrict:"",villages:[],showdistrict:{},selectedVillage:"",nuay:[],villagevariate1:[],village_detail1:[],selectedVillageDetail:[],horm:[],villagevariate2:[],selectedVillageDetail2:[],villagevariation:{},addressdetail:[],paeng:[],errormsg:"",search:"",headers:[{text:"name",value:"name"},{text:"ລາຍລະອຽດ",value:"detail"},{text:"actions",value:"actions"}],offset:12,pagination:{},per_page:15,nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length>=2||"Name must be less than 2 characters"}],ruleVillage:[function(t){return!!t||"Village is required"}],rulesDistrict:[function(t){return!!t||"District is required"}],rules:[function(t){return!!t||"File is required"},function(t){return t&&t.size>0||"File is required"}]}},methods:{fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("info/village/"+this.$route.params.id).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.data=e.data.data,t.showdistrict=e.data.data.district,console.log(t.data)}),300)})).catch((function(e){if(t.$store.commit("Loading_State",!1),t.fetchData(),422==e.response.status)for(var a=e.response.data.errors,i=0,r=Object.entries(a);i<r.length;i++){var n=Object(s["a"])(r[i],2),l=n[0],o=n[1];t.server_errors[l]=o[0]}}))},fetchVillageVariation:function(){var t=this;this.$axios.get("info/village/"+this.$route.params.id+"/village-detail",{params:{page:this.pagination.current_page,per_page:this.per_page,filter:""}}).then((function(e){200==e.data.code&&setTimeout((function(){t.addressdetail=e.data.data.data,console.log(t.addressdetail),t.pagination=e.data.data.pagination,t.horm.map((function(e){t.villagevariate1=e.village_details,t.selectedVillageDetail=t.villagevariate1[0].id}))}),300)})).catch((function(){}))},fetchVillageVariation2:function(){var t=this;this.$axios.get("info/village/"+this.$route.params.id+"/village-detail",{params:{filter:"ໜ່ວຍ"}}).then((function(e){200==e.data.code&&setTimeout((function(){t.nuay=e.data.data,t.nuay.map((function(e){t.villagevariate2=e.village_details,t.selectedVillageDetail=t.villagevariate2[0].id}))}),300)})).catch((function(){}))},fetchVariation:function(){var t=this;this.$axios.get("info/village-variation").then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.variation=e.data.data}),300)})).catch((function(e){if(t.loading=!1,422==e.response.status)for(var a=e.response.data.errors,i=0,r=Object.entries(a);i<r.length;i++){var n=Object(s["a"])(r[i],2),l=n[0],o=n[1];t.server_errors[l]=o[0]}}))},backPrevios:function(){this.$router.go(-1)}},watch:{},created:function(){this.fetchData(),this.fetchVillageVariation(),this.fetchVillageVariation2()}}),l=n,o=(a("3f3e"),a("2877")),c=a("6544"),d=a.n(c),u=a("2bc5"),f=a("8336"),v=a("b0af"),h=a("99d9"),m=a("62ad"),g=a("a523"),p=a("8fea"),b=a("4bd4"),_=a("132d"),V=a("0fd9"),$=a("b974"),x=a("2fa4"),w=a("8654"),k=Object(o["a"])(l,i,r,!1,null,null,null);e["default"]=k.exports;d()(k,{VBreadcrumbs:u["a"],VBtn:f["a"],VCard:v["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:m["a"],VContainer:g["a"],VDataTable:p["a"],VForm:b["a"],VIcon:_["a"],VRow:V["a"],VSelect:$["a"],VSpacer:x["a"],VTextField:w["a"]})},"2bc5":function(t,e,a){"use strict";var i=a("5530"),r=(a("a15b"),a("abd3"),a("ade3")),s=a("1c87"),n=a("58df"),l=Object(n["a"])(s["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(r["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),a=e.tag,r=e.data;return t("li",[t(a,Object(i["a"])(Object(i["a"])({},r),{},{attrs:Object(i["a"])(Object(i["a"])({},r.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),o=a("80d2"),c=Object(o["j"])("v-breadcrumbs__divider","li"),d=a("7560");e["a"]=Object(n["a"])(d["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(i["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(c,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,a=[],i=0;i<this.items.length;i++){var r=this.items[i];a.push(r.text),e?t.push(this.$scopedSlots.item({item:r})):t.push(this.$createElement(l,{key:a.join("."),props:r},[r.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},"3f3e":function(t,e,a){"use strict";a("a73d")},"4bd4":function(t,e,a){"use strict";var i=a("5530"),r=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),s=a("7e2b"),n=a("3206");e["a"]=Object(r["a"])(s["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=a(t)))})):i.valid=a(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"4fad":function(t,e,a){var i=a("23e7"),r=a("6f53").entries;i({target:"Object",stat:!0},{entries:function(t){return r(t)}})},a73d:function(t,e,a){},abd3:function(t,e,a){}}]);
//# sourceMappingURL=chunk-222fe756.ba4478c2.js.map