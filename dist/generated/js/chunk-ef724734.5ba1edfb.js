(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef724734"],{"4bd4":function(t,e,a){"use strict";var i=a("5530"),n=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),r=a("7e2b"),l=a("3206");e["a"]=Object(n["a"])(r["a"],Object(l["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=a(t)))})):i.valid=a(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},e69c:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"mx-auto my-12",attrs:{elevation:"8","max-width":"1000"}},[a("v-card-title",[t._v(" ທີ່ຢູ່ "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{attrs:{headers:t.headers,items:t.getVillage,search:t.search},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item;return[a("tr",[a("td",[t._v(t._s(i.districts.id))]),a("td",[t._v(t._s(i.name))]),a("td",[t._v(t._s(i.districts))]),a("td",[t._v(t._s(i.name))])])]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"green"},on:{click:function(e){return t.OpenModalEdit(i)}}},[t._v(" mdi-account-edit ")]),a("v-icon",{attrs:{small:"",color:"red"},on:{click:function(e){return t.deleteItem(i.id)}}},[t._v(" mdi-trash-can-outline ")])]}}],null,!0)})],1),a("ModalEdit",[[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("ແກ້ໄຂຂໍ້ມູນບ້ານ")])]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-row",[a("v-col",[a("v-text-field",{attrs:{label:"ບ້ານ",readonly:"","append-icon":"mdi-tree-outline","prepend-inner-icon":"mdi-flower-outline"},model:{value:t.update_village.name,callback:function(e){t.$set(t.update_village,"name",e)},expression:"update_village.name"}})],1)],1),a("v-row",[a("v-col",[a("v-select",{attrs:{items:t.district,"item-text":t.District_Name,"item-value":t.District_id,"prepend-inner-icon":"mdi-flower-tulip",label:"ເມືອງ...",color:"teal"},on:{input:t.test},model:{value:t.update_village.name,callback:function(e){t.$set(t.update_village,"name",e)},expression:"update_village.name"}})],1)],1),a("v-row",[a("v-col",[a("v-select",{attrs:{items:t.district,"item-text":t.District_Name,"item-value":t.District_id,"prepend-inner-icon":"mdi-flower-tulip",label:"ແຂວງ...",color:"teal"},on:{input:t.test},model:{value:t.update_village.name,callback:function(e){t.$set(t.update_village,"name",e)},expression:"update_village.name"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeUpdateVillage()}}},[t._v(" ຍົກເລີກ ")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.updateItem()}}},[t._v(" ບັນທຶກ ")])],1)],1)],1)]],2)],1)},n=[],r={name:"Village",data:function(){return{getAddress:[],getVillage:[],im:[],update_village:{},search:"",headers:[{text:"ລະຫັດ",align:"start",value:"districts.id",sortable:!1},{text:"ບ້ານ",align:"start",value:"villname",sortable:!1},{text:"ເມືອງ",align:"start",value:"districts"},{text:"ແຂວງ",value:"name"},{text:"ແກ້ໄຂ/ລຶບ",value:"actions",sortable:!1}]}},created:function(){this.fetchData()},methods:{reset:function(){this.$refs.form.reset()},fetchData:function(){var t=this;this.$axios.get("info/address").then((function(e){t.im=e.data.data,t.filterVillage=e.data.data[0].districts[0],console.log(t.getVillage)})).catch((function(){console.log("Cannot get data")}))},OpenModalEdit:function(t){this.update_village=t,this.$store.commit("modalEdit_State",!0)},closeUpdateVillage:function(){this.reset(),this.update_village={},this.fetchData(),this.$store.commit("modalEdit_State",!1)}}},l=r,s=a("2877"),o=a("6544"),d=a.n(o),c=a("8336"),u=a("b0af"),f=a("99d9"),v=a("62ad"),h=a("a523"),m=a("8fea"),p=a("4bd4"),g=a("132d"),_=a("0fd9"),b=a("b974"),V=a("2fa4"),w=a("8654"),x=Object(s["a"])(l,i,n,!1,null,null,null);e["default"]=x.exports;d()(x,{VBtn:c["a"],VCard:u["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:v["a"],VContainer:h["a"],VDataTable:m["a"],VForm:p["a"],VIcon:g["a"],VRow:_["a"],VSelect:b["a"],VSpacer:V["a"],VTextField:w["a"]})}}]);
//# sourceMappingURL=chunk-ef724734.5ba1edfb.js.map