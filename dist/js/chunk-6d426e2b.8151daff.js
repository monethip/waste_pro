(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d426e2b"],{"2b91":function(e,t,s){"use strict";s("558b");var i=s("2dec"),r=s("d799"),a=s("944a"),n=s("ad03"),o=s("9c0c"),c=s("dd08");const p=Object(o["a"])(r["a"],Object(a["a"])("stepper","v-stepper-step","v-stepper"));t["a"]=p.extend().extend({name:"v-stepper-step",directives:{ripple:n["a"]},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:()=>[]},step:[Number,String]},data(){return{isActive:!1,isInactive:!0}},computed:{classes(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError(){return this.rules.some(e=>!0!==e())}},mounted(){this.stepper&&this.stepper.register(this)},beforeDestroy(){this.stepper&&this.stepper.unregister(this)},methods:{click(e){e.stopPropagation(),this.$emit("click",e),this.editable&&this.stepClick(this.step)},genIcon(e){return this.$createElement(i["a"],e)},genLabel(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep(){const e=!(this.hasError||!this.complete&&!this.isActive)&&this.color;return this.$createElement("span",this.setBackgroundColor(e,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent(){const e=[];return this.hasError?e.push(this.genIcon(this.errorIcon)):this.complete?this.editable?e.push(this.genIcon(this.editIcon)):e.push(this.genIcon(this.completeIcon)):e.push(String(this.step)),e},keyboardClick(e){e.keyCode===c["y"].space&&this.click(e)},toggle(e){this.isActive=e.toString()===this.step.toString(),this.isInactive=Number(e)<Number(this.step)}},render(e){return e("div",{attrs:{tabindex:this.editable?0:-1},staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click,keydown:this.keyboardClick}},[this.genStep(),this.genLabel()])}})},"2f34":function(e,t,s){},"3a2b":function(e,t,s){"use strict";s("2f34")},6711:function(e,t,s){"use strict";var i=s("078d"),r=s("944a"),a=s("dd08"),n=s("9c0c");const o=Object(n["a"])(Object(r["a"])("stepper","v-stepper-content","v-stepper"));t["a"]=o.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition(){const e=this.$vuetify.rtl?!this.isReverse:this.isReverse;return e?i["g"]:i["h"]},styles(){return this.isVertical?{height:Object(a["h"])(this.height)}:{}}},watch:{isActive(e,t){e&&null==t?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition(e){this.isActive&&"height"===e.propertyName&&(this.height="auto")},enter(){let e=0;requestAnimationFrame(()=>{e=this.$refs.wrapper.scrollHeight}),this.height=0,setTimeout(()=>this.isActive&&(this.height=e||"auto"),450)},leave(){this.height=this.$refs.wrapper.clientHeight,setTimeout(()=>this.height=0,10)},toggle(e,t){this.isActive=e.toString()===this.step.toString(),this.isReverse=t}},render(e){const t={staticClass:"v-stepper__content"},s={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(t.directives=[{name:"show",value:this.isActive}]);const i=e("div",s,[this.$slots.default]),r=e("div",t,[i]);return e(this.computedTransition,{on:this.$listeners},[r])}})},ae11:function(e,t,s){"use strict";s.d(t,"a",(function(){return o})),s.d(t,"b",(function(){return c}));var i=s("dd08"),r=s("c2ce"),a=s("2b91"),n=s("6711");const o=Object(i["j"])("v-stepper__header"),c=Object(i["j"])("v-stepper__items");r["a"],n["a"],a["a"]},b343:function(e,t,s){"use strict";s.r(t);var i=s("07b0"),r=s("db5a"),a=s("0f35"),n=s("1da9"),o=s("1789"),c=s("6733"),p=s("565c"),h=s("5af6"),l=s("d62f"),u=s("c2ce"),d=s("6711"),m=s("ae11"),v=s("2b91"),g=s("9b44"),f=function(){var e=this,t=e._self._c;return t(o["a"],[t(r["a"],[t(a["c"],[t("span",{staticClass:"headline"},[e._v("Change Phone - "+e._s(e.user.name))])]),t(a["b"],[t(u["a"],{model:{value:e.stepValue,callback:function(t){e.stepValue=t},expression:"stepValue"}},[t(m["a"],[t(v["a"],{attrs:{complete:e.stepValue>1,step:"1"}},[e._v(" Phone Number ")]),t(c["a"]),t(v["a"],{attrs:{complete:e.stepValue>2,step:"2"}},[e._v(" Verify Code ")]),t(c["a"]),t(v["a"],{attrs:{step:"3"}},[e._v(" Confirm ")])],1),t(m["b"],[t(d["a"],{attrs:{step:"1"}},[t(l["a"],[t(n["a"],{attrs:{cols:"12"}},[t(p["a"],{ref:"phone",attrs:{"lazy-validation":""}},[t(g["a"],{staticClass:"input-number",attrs:{label:"ເບີໂທ *",required:"",rules:e.phoneRules,type:"number"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.phone)+" ")])],1)],1),t(i["a"],{attrs:{color:"primary",loading:e.loading,disabled:e.loading},on:{click:e.verifyPhone}},[e._v(" Continue ")])],1),t(d["a"],{attrs:{step:"2"}},[t(l["a"],[t(n["a"],{attrs:{cols:"12"}},[t("div",{staticStyle:{display:"flex","flex-direction":"row"}},[t(h["a"],{ref:"otpInput",staticClass:"otp",attrs:{"input-classes":"otp-input",separator:"","num-inputs":6,"should-auto-focus":!0,"is-input-num":!0},on:{"on-complete":e.handleOnComplete}}),t(i["a"],{staticClass:"btnClear",attrs:{text:""},on:{click:function(t){return e.handleClearInput()}}},[e._v(" Clear ")])],1)])],1),t(i["a"],{attrs:{color:"primary",loading:e.loading,disabled:e.loading},on:{click:e.verifyOtp}},[e._v(" Continue ")])],1),t(d["a"],{attrs:{step:"3"}},[t(o["a"],[t(p["a"],{ref:"form",attrs:{"lazy-validation":""}},[t(l["a"],[t(n["a"],{attrs:{cols:"12"}},[t(g["a"],{staticClass:"input-number",attrs:{label:"ເບີໂທ *",required:"",rules:e.phoneRules,type:"number",disabled:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),t("p",{staticClass:"errors"},[e._v(" "+e._s(e.server_errors.phone)+" ")])],1)],1)],1)],1),t(i["a"],{attrs:{color:"primary",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.changePhone()}}},[e._v(" Change ")])],1)],1)],1)],1)],1),t("div",{attrs:{id:"recaptcha-container"}})],1)},b=[],_=(s("558b"),s("d8aa")),$={title(){return"Vientiane Waste Co-Dev|User"},name:"User",data(){return{stepValue:1,otp:"",isStepTwo:!1,loading:!1,user:{},phone:"",edit_user:{},userID:"",server_errors:{email:"",roleId:""},errormsg:"",selectedRole:"",selectedRoles:[],roles:[],revokeRoles:[],permissionDialog:!1,updatePermissionDialog:!1,selectedPermission:"",permissions:[],revokes:[],code:"",appVerifier:"",btnVerify:!1,password:"",password_confirm:"",id_token:"",phoneRules:[e=>!!e||"Phone is required",e=>e&&e.length>=8&&e.length<=11||"Phone number must be  8 - 11 numbers"]}},watch:{"user.name":function(){this.server_errors.name=""},"user.phone":function(){this.server_errors.phone=""},"user.email":function(){this.server_errors.email=""},"user.password":function(){this.server_errors.password=""},password(){this.server_errors.password=""},password_confirmation(){this.password_confirmation=""}},created(){this.initReCaptcha(),this.getUser()},methods:{getUser(){this.$store.commit("Loading_State",!0),this.$axios.get("user-setting/user/"+this.$route.params.id).then(e=>{200===e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.user=e.data.data},300)}).catch(()=>{})},changePhone(){this.$store.commit("Loading_State",!0),this.user.id_token=this.id_token,this.$axios.put("user-setting/user/"+this.$route.params.id,this.user).then(e=>{200===e.data.code&&setTimeout(()=>{this.$store.commit("Loading_State",!1),this.edit_user={},this.$router.push({name:"User"}),this.$store.commit("Toast_State",{value:!0,color:"success",msg:e.data.message})},300)}).catch(e=>{if(this.$store.commit("Loading_State",!1),this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),e.response&&422===e.response.status){const t=e.response.data.errors;for(const[e,s]of Object.entries(t))this.server_errors[e]=s[0]}})},verifyPhone(){this.$store.commit("Loading_State",!0),!0===this.$refs.phone.validate()&&this.$axios.post("unique-phone",{phone:this.phone}).then(e=>{200===e.data.code&&(console.error(e.data.data.exists),!1===e.data.data.exists?(this.initReCaptcha(),this.sendOtp(),this.$store.commit("Loading_State",!0)):!0===e.data.data.exists&&(this.btnVerify=!1,this.$store.commit("Toast_State",{value:!0,color:"error",msg:"ເບີນີ້ມີໃນລະບົບແລ້ວ"})),this.$store.commit("Loading_State",!1))}).catch(()=>{this.btnVerify=!1})},sendOtp(){const e="+85620",t=e+this.phone,{appVerifier:s}=this;_["a"].auth().signInWithPhoneNumber(t,s).then(e=>{window.confirmationResult=e,this.stepValue=2}).catch((function(){this.$store.commit("Toast_State",{value:!0,color:"error",msg:"SMS not sent"})}))},verifyOtp(){const{code:e}=this;window.confirmationResult.confirm(e).then(e=>{if(e){const t=e.user;this.id_token=t._lat,console.log(this.id_token),this.stepValue=3}}).catch((function(){this.$store.commit("Toast_State",{value:!0,color:"error",msg:"ມີບາງຢ່າງຜິດພາດ ກະລຸນາລອງໃໝ່"})}))},initReCaptcha(){setTimeout(()=>{window.recaptchaVerifier=new _["a"].auth.RecaptchaVerifier("recaptcha-container",{size:"invisible","expired-callback":function(){}}),this.appVerifier=window.recaptchaVerifier},1e3)},reset(){this.$refs.form.reset()},handleOnComplete(e){this.code=e},handleClearInput(){this.$refs.otpInput.clearInput()}}},y=$,w=(s("3a2b"),s("4a4e")),C=Object(w["a"])(y,f,b,!1,null,null,null);t["default"]=C.exports},c2ce:function(e,t,s){"use strict";s("558b"),s("d9cc");var i=s("8ec7"),r=s("944a"),a=s("456b"),n=s("9c0c"),o=s("4190");const c=Object(n["a"])(i["a"],Object(r["b"])("stepper"),a["a"]);t["a"]=c.extend({name:"v-stepper",provide(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,flat:Boolean,vertical:Boolean},data(){const e={isBooted:!1,steps:[],content:[],isReverse:!1};return e.internalLazyValue=null!=this.value?this.value:(e[0]||{}).step||1,e},computed:{classes(){return{"v-stepper--flat":this.flat,"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear,...i["a"].options.computed.classes.call(this)}},styles(){return{...i["a"].options.computed.styles.call(this)}}},watch:{internalValue(e,t){this.isReverse=Number(e)<Number(t),t&&(this.isBooted=!0),this.updateView()}},created(){this.$listeners.input&&Object(o["a"])("@input","@change",this)},mounted(){this.updateView()},methods:{register(e){"v-stepper-step"===e.$options.name?this.steps.push(e):"v-stepper-content"===e.$options.name&&(e.isVertical=this.vertical,this.content.push(e))},unregister(e){"v-stepper-step"===e.$options.name?this.steps=this.steps.filter(t=>t!==e):"v-stepper-content"===e.$options.name&&(e.isVertical=this.vertical,this.content=this.content.filter(t=>t!==e))},stepClick(e){this.$nextTick(()=>this.internalValue=e)},updateView(){for(let e=this.steps.length;--e>=0;)this.steps[e].toggle(this.internalValue);for(let e=this.content.length;--e>=0;)this.content[e].toggle(this.internalValue,this.isReverse)}},render(e){return e(this.tag,{staticClass:"v-stepper",class:this.classes,style:this.styles},this.$slots.default)}})},d9cc:function(e,t,s){}}]);
//# sourceMappingURL=chunk-6d426e2b.8151daff.js.map