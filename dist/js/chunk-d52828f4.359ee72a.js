(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d52828f4"],{"0fd9":function(t,e,a){"use strict";var n=a("ade3"),r=a("5530"),i=(a("caad"),a("2532"),a("99af"),a("b64b"),a("ac1f"),a("5319"),a("4ec9"),a("d3b7"),a("3ca3"),a("ddb0"),a("159b"),a("4b85"),a("2b0e")),c=a("d9f7"),o=a("80d2"),s=["sm","md","lg","xl"],u=["start","end","center"];function d(t,e){return s.reduce((function(a,n){return a[t+Object(o["G"])(n)]=e(),a}),{})}var l=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},f=d("align",(function(){return{type:String,default:null,validator:l}})),v=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},m=d("justify",(function(){return{type:String,default:null,validator:v}})),b=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},p=d("alignContent",(function(){return{type:String,default:null,validator:b}})),h={align:Object.keys(f),justify:Object.keys(m),alignContent:Object.keys(p)},g={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,a){var n=g[t];if(null!=a){if(e){var r=e.replace(t,"");n+="-".concat(r)}return n+="-".concat(a),n.toLowerCase()}}var y=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:l}},f),{},{justify:{type:String,default:null,validator:v}},m),{},{alignContent:{type:String,default:null,validator:b}},p),render:function(t,e){var a=e.props,r=e.data,i=e.children,o="";for(var s in a)o+=String(a[s]);var u=y.get(o);return u||function(){var t,e;for(e in u=[],h)h[e].forEach((function(t){var n=a[t],r=_(e,t,n);r&&u.push(r)}));u.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(n["a"])(t,"align-".concat(a.align),a.align),Object(n["a"])(t,"justify-".concat(a.justify),a.justify),Object(n["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),y.set(o,u)}(),t(a.tag,Object(c["a"])(r,{staticClass:"row",class:u}),i)}})},"206f":function(t,e,a){"use strict";a("8d79")},"2bc5":function(t,e,a){"use strict";var n=a("5530"),r=(a("a15b"),a("abd3"),a("ade3")),i=a("1c87"),c=a("58df"),o=Object(c["a"])(i["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(r["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),a=e.tag,r=e.data;return t("li",[t(a,Object(n["a"])(Object(n["a"])({},r),{},{attrs:Object(n["a"])(Object(n["a"])({},r.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),s=a("80d2"),u=Object(s["i"])("v-breadcrumbs__divider","li"),d=a("7560");e["a"]=Object(c["a"])(d["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(n["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(u,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,a=[],n=0;n<this.items.length;n++){var r=this.items[n];a.push(r.text),e?t.push(this.$scopedSlots.item({item:r})):t.push(this.$createElement(o,{key:a.join("."),props:r},[r.text])),n<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},"4b85":function(t,e,a){},"4ec9":function(t,e,a){"use strict";var n=a("6d61"),r=a("6566");t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},"4fad":function(t,e,a){var n=a("23e7"),r=a("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return r(t)}})},"62ad":function(t,e,a){"use strict";var n=a("ade3"),r=a("5530"),i=(a("a9e3"),a("b64b"),a("ac1f"),a("5319"),a("4ec9"),a("d3b7"),a("3ca3"),a("ddb0"),a("caad"),a("159b"),a("2ca0"),a("4b85"),a("2b0e")),c=a("d9f7"),o=a("80d2"),s=["sm","md","lg","xl"],u=function(){return s.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),d=function(){return s.reduce((function(t,e){return t["offset"+Object(o["G"])(e)]={type:[String,Number],default:null},t}),{})}(),l=function(){return s.reduce((function(t,e){return t["order"+Object(o["G"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(u),offset:Object.keys(d),order:Object.keys(l)};function v(t,e,a){var n=t;if(null!=a&&!1!==a){if(e){var r=e.replace(t,"");n+="-".concat(r)}return"col"!==t||""!==a&&!0!==a?(n+="-".concat(a),n.toLowerCase()):n.toLowerCase()}}var m=new Map;e["a"]=i["a"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},u),{},{offset:{type:[String,Number],default:null}},d),{},{order:{type:[String,Number],default:null}},l),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var a=e.props,r=e.data,i=e.children,o=(e.parent,"");for(var s in a)o+=String(a[s]);var u=m.get(o);return u||function(){var t,e;for(e in u=[],f)f[e].forEach((function(t){var n=a[t],r=v(e,t,n);r&&u.push(r)}));var r=u.some((function(t){return t.startsWith("col-")}));u.push((t={col:!r||!a.cols},Object(n["a"])(t,"col-".concat(a.cols),a.cols),Object(n["a"])(t,"offset-".concat(a.offset),a.offset),Object(n["a"])(t,"order-".concat(a.order),a.order),Object(n["a"])(t,"align-self-".concat(a.alignSelf),a.alignSelf),t)),m.set(o,u)}(),t(a.tag,Object(c["a"])(r,{class:u}),i)}})},"8d79":function(t,e,a){},a523:function(t,e,a){"use strict";a("4de4"),a("b64b"),a("2ca0"),a("99af"),a("20f6"),a("4b85"),a("498a"),a("a15b");var n=a("2b0e");function r(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var n=a.props,r=a.data,i=a.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var c=r.attrs;if(c){r.attrs={};var o=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(r.staticClass+=" ".concat(o.join(" ")))}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),e(n.tag,r,i)}})}var i=a("d9f7");e["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,n=e.props,r=e.data,c=e.children,o=r.attrs;return o&&(r.attrs={},a=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,Object(i["a"])(r,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(a||[])}),c)}})},abd3:function(t,e,a){},af15:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"mb-4"},[a("v-col",[a("v-breadcrumbs",{staticClass:"pa-0",attrs:{large:""}},[a("v-btn",{staticClass:"text-primary",attrs:{text:""},on:{click:function(e){return t.backPrevios()}}},[a("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" ລາຍລະອຽດການອອກບິນຄ່າຂີ້ເຫຍື້ອ")],1)],1)],1),a("div",[a("v-card",[a("v-card-text",{staticClass:"px-16 py-16"},[a("v-row",{staticClass:"py-4",attrs:{align:"center"}},[a("v-col",[a("h2",[t._v("ໃບບິນເກັບເງິນຄ່າຂີ້ເຫື້ອຍ")])])],1),a("v-row",[a("v-col",[a("p",[t._v("ຂໍ້ມູນບິນ")]),a("h3",[t._v(" ສະຖານະບິນ: "),a("span",{class:t.invoiceStatusColor},[t._v(t._s(t.invoiceStatus(t.invoice.status)))])]),a("h3",[t._v("ປະເພດບິນ: "+t._s(t.invoice.type))]),a("h3",[t._v(" ວັນທີ: "+t._s(t.moment(t.invoice.created_at).format("DD-MM-YY"))+" ")])]),a("v-col",[a("p",[t._v("ຂໍ້ມູນລູກຄ້າ")]),t.invoice.customer?a("h3",[t._v(" ຊື່: "+t._s(t.invoice.customer.name)+" "+t._s(t.invoice.customer.surname)+" ")]):t._e(),t.invoice.customer?a("h3",[t._v(" ວັນທີສະໝັກ: "+t._s(t.invoice.customer.start_month)+" ")]):t._e()])],1),a("v-row",{staticClass:"mb-n6"},[a("v-col",[t._v("ລາຍລະອຽດ")])],1),a("v-divider",{staticClass:"my-6 c-divider"}),a("v-row",{staticClass:"mx-12"},[a("v-col",[a("h3",[t._v("ຈຳນວນຖົງ: "+t._s(t.invoice.total_bag))]),a("h3",[t._v("ຈຳນວນຖົງທີ່ກາຍ: "+t._s(t.invoice.exceed_bag))])]),a("v-col",[a("h3",[t._v("ລວມ: "+t._s(Intl.NumberFormat().format(t.invoice.sub_total)))]),a("h3",[t._v(" ສ່ວນຫຼຸດ: "+t._s(Intl.NumberFormat().format(t.invoice.discount))+" ")]),a("h3",[t._v(" ຈຳນວນເງິນທີ່ກາຍ: "+t._s(Intl.NumberFormat().format(t.invoice.exceed_bag_charge))+" ")]),a("h3",[t._v(" ຈຳນວນເງິນທີ່ໄລ່ເພີມ: "+t._s(Intl.NumberFormat().format(t.invoice.new_exceed_bag_charge))+" ")]),a("v-divider",{staticClass:"my-2"}),a("h3",[t._v(" ລວມທັງໝົດ: "+t._s(Intl.NumberFormat().format(t.invoice.total))+" ")])],1)],1),a("v-divider",{staticClass:"my-6 c-divider bottom"}),a("v-row",{staticClass:"mb-n10"},[a("v-col",[a("p",[t._v("ການຊຳລະ")])])],1),a("v-row",[a("v-col",[a("h3",[t._v(" ວັນທິຊຳລະ: "+t._s(t.moment(t.invoice.updated_at).format("DD-MM-YY"))+" ")]),a("h3",[t._v("ປະເພດຊຳລະ: "+t._s(t.invoice.payment_method))])]),t.invoice.media?a("v-col",t._l(t.invoice.media,(function(t,e){return a("div",{key:e},[a("img",{staticClass:"grey",attrs:{"aspect-ratio":"1",src:t.url}})])})),0):t._e()],1)],1)],1)],1)],1)},r=[],i=a("3835"),c=(a("4fad"),{name:"InvoiceDetail",title:function(){return"Vientiane Waste Co-Dev|Invoice Detail"},data:function(){return{loading:!1,customerId:"",invoice:[],invoiceStatusColor:"",status:[{id:1,name:"created"},{id:2,name:"approved"},{id:3,name:"to_confirm_payment"},{id:4,name:"rejected"},{id:5,name:"success"}]}},methods:{backPrevios:function(){this.$router.go(-1)},fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("invoice/"+this.$route.params.id).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.invoice=e.data.data}),100)})).catch((function(e){if(t.$store.commit("Loading_State",!1),t.fetchData(),422==e.response.status)for(var a=e.response.data.errors,n=0,r=Object.entries(a);n<r.length;n++){var c=Object(i["a"])(r[n],2),o=c[0],s=c[1];t.server_errors[o]=s[0]}}))},invoiceStatus:function(t){return"created"==t?(this.invoiceStatusColor="primary--text","ສ້າງບິນສຳເລັດ"):"approved"==t?(this.invoiceStatusColor="info--text","ອະນຸມັດແລ້ວ"):"to_confirm_payment"==t?(this.invoiceStatusColor="warning--text","ລໍຖ້າຢືນຢັນການຊຳລະ"):"rejected"==t?(this.invoiceStatusColor="error--text","ຊຳລະບໍ່ສຳເລັດ"):"success"==t?(this.invoiceStatusColor="success--text","ສຳເລັດການຊຳລະ"):void 0},editPage:function(t){this.$router.push({name:"EditCustomer",params:{id:t}})}},watch:{},created:function(){this.fetchData()}}),o=c,s=(a("206f"),a("2877")),u=a("6544"),d=a.n(u),l=a("2bc5"),f=a("8336"),v=a("b0af"),m=a("99d9"),b=a("62ad"),p=a("a523"),h=a("ce7e"),g=a("132d"),_=a("0fd9"),y=Object(s["a"])(o,n,r,!1,null,null,null);e["default"]=y.exports;d()(y,{VBreadcrumbs:l["a"],VBtn:f["a"],VCard:v["a"],VCardText:m["b"],VCol:b["a"],VContainer:p["a"],VDivider:h["a"],VIcon:g["a"],VRow:_["a"]})}}]);
//# sourceMappingURL=chunk-d52828f4.359ee72a.js.map