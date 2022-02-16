(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-618a6551"],{"6e73":function(t,e,a){"use strict";a("caf2")},caf2:function(t,e,a){},fcfb:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[o("v-card",{staticClass:"elevation-1",staticStyle:{display:"flex",margin:"auto"},attrs:{"max-width":"600"}},[o("v-card-text",{staticClass:"py-16 px-16"},[o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{justify:"center"}},[o("v-img",{staticClass:"logo",attrs:{src:a("de09"),"max-height":"150","max-width":"250",alt:"Logo"}})],1)],1),t.verifyPhone?o("div",[o("h3",{staticClass:"text-center display-5 black--text mb-8 mt-4"},[t._v(" Your phone number ("+t._s(t.showPhone)+") ")]),o("v-text-field",{staticClass:"input-number",attrs:{label:"Phone","single-line":"","prepend-inner-icon":"mdi-phone",solo:"",type:"number",rules:t.phoneRule},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendOtp.apply(null,arguments)}},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),o("p",{staticClass:"errors"},[t._v(" "+t._s(t.error)+" ")]),o("div",{staticClass:"text-center"},[o("v-btn",{staticClass:"login mt-6 py-6",attrs:{block:"",loading:t.loading,disabled:t.loading},on:{click:t.sendOtp}},[t._v("Get OTP ")])],1)],1):t._e(),t.verifyCode?o("div",[o("h2",{staticClass:"text-center display-5 black--text mb-0 mt-4"},[t._v(" Verify Code OTP ")]),o("p",{staticClass:"text-center display-5 black--text mb-8 mt-0"},[t._v("Input Code from SMS")]),o("v-form",{ref:"form",attrs:{"lazy-validation":""}},[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[o("div",{staticStyle:{display:"flex","flex-direction":"row"}},[o("v-otp-input",{ref:"otpInput",staticClass:"otp",attrs:{"input-classes":"otp-input",separator:"","num-inputs":6,"should-auto-focus":!0,"is-input-num":!0},on:{"on-complete":t.handleOnComplete}}),o("v-btn",{staticStyle:{margin:"auto"},attrs:{text:"",small:""},on:{click:function(e){return t.handleClearInput()}}},[t._v("Clear")])],1)])],1),o("div",{staticClass:"text-center"},[o("v-btn",{staticClass:"login mt-6 py-6",attrs:{block:"",loading:t.btnVerify,disabled:t.btnVerify},on:{click:t.verifyOtp}},[t._v("Confirm ")])],1)],1)],1):t._e()],1)],1)],1)],1),o("div",{attrs:{id:"recaptcha-container"}})],1)},n=[],i=a("5530"),r=a("2f62"),s=a("2591"),c=a("a18c"),l={name:"CheckPhone",title:function(){return"Vientiane Waste Co-Dev|Login"},data:function(){return{loading:!1,btnVerify:!1,verifyCode:!1,verifyPhone:!0,phone:"",showPhone:"",code:"",user:{},error:"",phoneRule:[function(t){return!!t||"Phone is required"},function(t){return t&&t.length>=8||"Phone must be more than 8 characters"}],appVerifier:""}},methods:Object(i["a"])(Object(i["a"])({sendOtp:function(){var t=this;8==this.phone.length&&(this.loading=!0,this.$axios.post("auth/check-phone",{credential:this.user.credential,password:this.user.password,phone:this.phone}).then((function(e){if(200===e.data.code){if(console.error(e.data.data.collect),!0===e.data.data.collect){t.loading=!0;var a="+85620",o=a+t.phone,n=t.appVerifier;s["a"].auth().signInWithPhoneNumber(o,n).then((function(e){t.verifyCode=!0,t.verifyPhone=!1,window.confirmationResult=e,t.$store.commit("Toast_State",{value:!0,color:"error",msg:"Success"}),t.loading=!1})).catch((function(){t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"error",msg:"SMS not sent"})}))}else!1===e.data.data.collect?(t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"error",msg:"ເບີບໍ່ຖືກຕ້ອງ"})):(t.loading=!1,t.$store.commit("Toast_State",{value:!0,color:"error",msg:"ມີບາງຢ່າງຜິດພາດ ກະລຸນາລອງໃໝ່"}));t.loading=!1}})).catch((function(){t.loading=!1})))},verifyOtp:function(){var t=this;this.btnVerify=!0;var e=this.code;window.confirmationResult.confirm(e).then((function(e){if(e){t.btnVerify=!1;var a=e.user;localStorage.setItem("id_token",a._lat)}try{t.$store.commit("Loading_State",!0);var o=localStorage.getItem("id_token"),n=Object(i["a"])(Object(i["a"])({},t.user),{},{id_token:o});t.$store.dispatch("auth/confirmLogin",n)}catch(r){t.$store.commit("Toast_State",{value:!0,color:"success",msg:r})}finally{t.$store.commit("Toast_State",{value:!0,color:"success",msg:"Login Success"})}t.$store.commit("Loading_State",!1)})).catch((function(){this.$store.commit("Toast_State",{value:!0,color:"error",msg:"ມີບາງຢ່າງຜິດພາດ ກະລຸນາລອງໃໝ່"})}))}},Object(r["b"])({})),{},{initReCaptcha:function(){var t=this;setTimeout((function(){window.recaptchaVerifier=new s["a"].auth.RecaptchaVerifier("recaptcha-container",{size:"invisible","expired-callback":function(){}}),t.appVerifier=window.recaptchaVerifier}),1e3)},handleOnComplete:function(t){this.code=t},handleClearInput:function(){this.$refs.otpInput.clearInput()}}),created:function(){this.initReCaptcha();var t=localStorage.getItem("confirmAccount");this.showPhone=localStorage.getItem("phone"),this.user=JSON.parse(t),null===this.showPhone&&c["a"].push({name:"Login"})}},u=l,d=(a("6e73"),a("2877")),h=a("6544"),p=a.n(h),f=a("8336"),m=a("b0af"),v=a("99d9"),g=a("62ad"),b=a("a523"),y=a("4bd4"),C=a("adda"),w=a("0fd9"),_=a("8654"),x=Object(d["a"])(u,o,n,!1,null,null,null);e["default"]=x.exports;p()(x,{VBtn:f["a"],VCard:m["a"],VCardText:v["b"],VCol:g["a"],VContainer:b["a"],VForm:y["a"],VImg:C["a"],VRow:w["a"],VTextField:_["a"]})}}]);
//# sourceMappingURL=chunk-618a6551.c2f2457c.js.map