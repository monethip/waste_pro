(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-933ae9ca"],{1800:function(t,e,s){},5326:function(t,e,s){"use strict";s.r(e);var a=s("07b0"),i=s("db5a"),r=s("0f35"),o=s("1da9"),n=s("1789"),l=s("565c"),d=s("0087"),u=s("d62f"),c=s("9b44"),h=function(){var t=this,e=t._self._c;return e(n["a"],[e(u["a"],{attrs:{align:"center",justify:"center"}},[e(o["a"],{attrs:{cols:"12",sm:"12",md:"12"}},[e(i["a"],{staticClass:"elevation-1",staticStyle:{display:"flex",margin:"auto"},attrs:{"max-width":"600"}},[e(r["b"],{staticClass:"py-16 px-16"},[e(u["a"],{attrs:{justify:"center"}},[e(o["a"],{attrs:{justify:"center"}},[e(d["a"],{staticClass:"logo",attrs:{src:s("de09"),"max-height":"150","max-width":"250",alt:"Logo"}})],1)],1),e("h3",{staticClass:"text-center display-5 black--text mb-8 mt-4"},[t._v(" Login to Vientaine Waste Pro ")]),e(l["a"],{ref:"form",attrs:{"lazy-validation":""}},[e(c["a"],{attrs:{label:"User name","single-line":"","prepend-inner-icon":"mdi-account",solo:"",type:"text",rules:t.credentialRules},model:{value:t.user.credential,callback:function(e){t.$set(t.user,"credential",e)},expression:"user.credential"}}),e(c["a"],{attrs:{rules:t.passwordRules,solo:"",label:"ລະຫັດຜ່ານ","prepend-inner-icon":"mdi-lock",type:t.show?"text":"password","append-icon":t.show?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(e){t.show=!t.show},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitLogin.apply(null,arguments)}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),e("p",{staticClass:"errors"},[t._v(" "+t._s(t.errors)+" ")]),e("div",{staticClass:"text-center"},[e(a["a"],{staticClass:"login mt-6 py-6",attrs:{block:"",loading:t.loading,disabled:t.loading},on:{click:t.submitLogin}},[t._v(" Login ")])],1)],1)],1)],1)],1)],1)],1)},p=[],m=s("19d6"),f=s("155f"),g={name:"Login",title(){return"Vientiane Waste Co-Dev|Login"},data(){return{loading:!1,show:!1,credentialRules:[t=>!!t||"User name required"],passwordRules:[t=>!!t||"Password is required",t=>t&&t.length>=8||"Password must be more than 8 characters"],user:new f["a"],toast:{value:!0,color:"success",msg:"Login Success"},toast_error:{value:!0,color:"error",msg:"Something when wrong!"}}},methods:{async submitLogin(){if(!0===this.$refs.form.validate())try{this.$store.commit("Loading_State",!0),await this.$store.dispatch("auth/login",this.user)}catch(t){this.$store.commit("Toast_State",this.errors)}finally{this.$store.commit("Loading_State",!1)}}},computed:{...Object(m["c"])({errors:"auth/ShowMsgErrors"})},created(){}},w=g,b=(s("70ea"),s("4a4e")),v=Object(b["a"])(w,h,p,!1,null,null,null);e["default"]=v.exports},"565c":function(t,e,s){"use strict";s("558b");var a=s("9c0c"),i=s("68c4"),r=s("944a");e["a"]=Object(a["a"])(i["a"],Object(r["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",a=>{a&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))}):s.valid=e(t),s},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const s=this.watchers.find(t=>t._uid===e._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"70ea":function(t,e,s){"use strict";s("1800")}}]);
//# sourceMappingURL=chunk-933ae9ca.dbbf0387.js.map