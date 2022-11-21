(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0593b492"],{"11e7":function(t,e,a){},4814:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-breadcrumbs",{attrs:{large:""}},[a("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[a("v-icon",[t._v("mdi-keyboard-backspace ")])],1),t._v(" Edit Village Details ")],1),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Edit Village")])]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{label:"district*",required:"",rules:t.nameRules,readonly:""},model:{value:t.showdistrict.name,callback:function(e){t.$set(t.showdistrict,"name",e)},expression:"showdistrict.name"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{label:"village *",required:"",rules:t.nameRules,readonly:""},model:{value:t.data.name,callback:function(e){t.$set(t.data,"name",e)},expression:"data.name"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.server_errors.name)+" ")])],1),a("v-col",{attrs:{cols:"4"}},[a("v-select",{attrs:{items:t.villagevariate2,"item-text":"name","item-value":"id",label:" ໜ່ວຍ*",hint:""+t.selectedVillageDetail2.name,"return-object":""},model:{value:t.selectedVillageDetail2,callback:function(e){t.selectedVillageDetail2=e},expression:"selectedVillageDetail2"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.errormsg)+" ")])],1),a("v-col",{attrs:{cols:"4"}},[a("v-select",{attrs:{items:t.villagevariate1,"item-text":"name","item-value":"id",label:"ຮ່ອມ*",hint:""+t.selectedVillageDetail.name,"return-object":""},model:{value:t.selectedVillageDetail,callback:function(e){t.selectedVillageDetail=e},expression:"selectedVillageDetail"}}),a("p",{staticClass:"errors"},[t._v(" "+t._s(t.errormsg)+" ")])],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.backPrevios()}}},[t._v(" Back ")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.UpdateData()}}},[t._v(" Update ")])],1)],1)],1)],1)},r=[],n=a("3835"),s=(a("4fad"),a("d81d"),{data:function(){return{data:{},loading:!1,server_errors:{},provinces:[],districts:[],selectedDistrict:"",villages:[],showdistrict:{},selectedVillage:"",nuay:[],villagevariate1:[],village_detail1:[],selectedVillageDetail:[],horm:[],villagevariate2:[],selectedVillageDetail2:[],villagevariation:{},errormsg:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length>=2||"Name must be less than 2 characters"}],ruleVillage:[function(t){return!!t||"Village is required"}],rulesDistrict:[function(t){return!!t||"District is required"}],rules:[function(t){return!!t||"File is required"},function(t){return t&&t.size>0||"File is required"}]}},methods:{fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("info/village/"+this.$route.params.id).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.data=e.data.data,t.showdistrict=e.data.data.district}),300)})).catch((function(e){if(t.$store.commit("Loading_State",!1),e.response&&422==e.response.status)for(var a=e.response.data.errors,i=0,r=Object.entries(a);i<r.length;i++){var s=Object(n["a"])(r[i],2),l=s[0],o=s[1];t.server_errors[l]=o[0]}}))},fetchVillageVariation:function(){var t=this;this.$axios.get("info/village/"+this.$route.params.id+"/village-detail",{params:{filter:"ຮ່ອມ"}}).then((function(e){200==e.data.code&&setTimeout((function(){t.horm=e.data.data,t.horm.map((function(e){t.villagevariate1=e.village_details,t.selectedVillageDetail=t.villagevariate[0].id}))}),300)})).catch((function(){}))},fetchVillageVariation2:function(){var t=this;this.$axios.get("info/village/"+this.$route.params.id+"/village-detail",{params:{filter:"ໜ່ວຍ"}}).then((function(e){200==e.data.code&&setTimeout((function(){t.nuay=e.data.data,t.nuay.map((function(e){t.villagevariate2=e.village_details,t.selectedVillageDetail=t.villagevariate2[0].id}))}),300)})).catch((function(){}))},fetchVariation:function(){var t=this;this.$axios.get("info/village-variation").then((function(e){200==e.data.code&&setTimeout((function(){t.loading=!1,t.variation=e.data.data}),300)})).catch((function(e){if(t.loading=!1,t.fetchData(),e.response&&422==e.response.status)for(var a=e.response.data.errors,i=0,r=Object.entries(a);i<r.length;i++){var s=Object(n["a"])(r[i],2),l=s[0],o=s[1];t.server_errors[l]=o[0]}}))},backPrevios:function(){this.$router.go(-1)}},watch:{},created:function(){}}),l=s,o=(a("71a7"),a("2877")),c=a("6544"),u=a.n(c),d=a("2bc5"),f=a("8336"),v=a("b0af"),h=a("99d9"),m=a("62ad"),g=a("a523"),p=a("4bd4"),b=a("132d"),V=a("0fd9"),_=a("b974"),w=a("2fa4"),$=a("8654"),x=Object(o["a"])(l,i,r,!1,null,null,null);e["default"]=x.exports;u()(x,{VBreadcrumbs:d["a"],VBtn:f["a"],VCard:v["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:m["a"],VContainer:g["a"],VForm:p["a"],VIcon:b["a"],VRow:V["a"],VSelect:_["a"],VSpacer:w["a"],VTextField:$["a"]})},"4bd4":function(t,e,a){"use strict";var i=a("5530"),r=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),n=a("7e2b"),s=a("3206");e["a"]=Object(r["a"])(n["a"],Object(s["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=a(t)))})):i.valid=a(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"4fad":function(t,e,a){var i=a("23e7"),r=a("6f53").entries;i({target:"Object",stat:!0},{entries:function(t){return r(t)}})},"71a7":function(t,e,a){"use strict";a("11e7")}}]);
//# sourceMappingURL=chunk-0593b492.7fa8a80a.js.map