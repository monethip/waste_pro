(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-238e148e"],{1789:function(e,t,s){"use strict";s("e5d1"),s("9a62");var a=s("d797");function o(e){return a["a"].extend({name:"v-"+e,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:s,data:a,children:o}){a.staticClass=`${e} ${a.staticClass||""}`.trim();const{attrs:r}=a;if(r){a.attrs={};const e=Object.keys(r).filter(e=>{if("slot"===e)return!1;const t=r[e];return e.startsWith("data-")?(a.attrs[e]=t,!1):t||"string"===typeof t});e.length&&(a.staticClass+=" "+e.join(" "))}return s.id&&(a.domProps=a.domProps||{},a.domProps.id=s.id),t(s.tag,a,o)}})}var r=s("ed44");t["a"]=o("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:t,data:s,children:a}){let o;const{attrs:n}=s;return n&&(s.attrs={},o=Object.keys(n).filter(e=>{if("slot"===e)return!1;const t=n[e];return e.startsWith("data-")?(s.attrs[e]=t,!1):t||"string"===typeof t})),t.id&&(s.domProps=s.domProps||{},s.domProps.id=t.id),e(t.tag,Object(r["a"])(s,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(o||[])}),a)}})},"347c":function(e,t,s){e.exports=s.p+"img/pin1.d74f27bd.svg"},"3ec3":function(e,t,s){"use strict";var a=s("a9c6"),o=s("7d23"),r=s("75ba"),n=URLSearchParams.prototype,i=o(n.forEach);a&&!("size"in n)&&r(n,"size",{get:function(){var e=0;return i(this,(function(){e++})),e},configurable:!0,enumerable:!0})},"605c":function(e,t){var s=TypeError;e.exports=function(e,t){if(e<t)throw s("Not enough arguments");return e}},"668c":function(e,t,s){"use strict";var a=s("1335"),o=s("7d23"),r=s("a152"),n=s("605c"),i=URLSearchParams,l=i.prototype,c=o(l.append),d=o(l["delete"]),u=o(l.forEach),h=o([].push),m=new i("a=1&a=2");m["delete"]("a",1),m+""!=="a=2"&&a(l,"delete",(function(e){var t=arguments.length,s=t<2?void 0:arguments[1];if(t&&void 0===s)return d(this,e);var a=[];u(this,(function(e,t){h(a,{key:t,value:e})})),n(t,1);var o,i=r(e),l=r(s),m=0,f=0,p=!1,g=a.length;while(m<g)o=a[m++],p||o.key===i?(p=!0,d(this,o.key)):f++;while(f<g)o=a[f++],o.key===i&&o.value===l||c(this,o.key,o.value)}),{enumerable:!0,unsafe:!0})},"6ece":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));const a=e=>{""!==e.search?""!==e.oldVal?e.oldVal!==e.search&&(e.oldVal=e.search,e.pagination.current_page=1,e.fetchData()):(""!==e.search&&(e.pagination.current_page=1,e.fetchData()),e.oldVal=e.search):e.oldVal=""}},"75ba":function(e,t,s){var a=s("cd4c"),o=s("9afd");e.exports=function(e,t,s){return s.get&&a(s.get,t,{getter:!0}),s.set&&a(s.set,t,{setter:!0}),o.f(e,t,s)}},"9dba":function(e,t,s){},ae9b:function(e,t,s){"use strict";var a=s("1335"),o=s("7d23"),r=s("a152"),n=s("605c"),i=URLSearchParams,l=i.prototype,c=o(l.getAll),d=o(l.has),u=new i("a=1");u.has("a",2)&&a(l,"has",(function(e){var t=arguments.length,s=t<2?void 0:arguments[1];if(t&&void 0===s)return d(this,e);var a=c(this,e);n(t,1);var o=r(s),i=0;while(i<a.length)if(a[i++]===o)return!0;return!1}),{enumerable:!0,unsafe:!0})},ccc9:function(e,t,s){"use strict";s.r(t);var a=s("8447"),o=s("07b0"),r=s("db5a"),n=s("0f35"),i=s("1da9"),l=s("1789"),c=s("0cb6"),d=s("1d7d"),u=s("d62f"),h=s("cfe2"),m=s("9b44"),f=function(){var e=this,t=e._self._c;return t(l["a"],[t(a["a"],{staticClass:"mt-n4",attrs:{large:""}},[t(o["a"],{staticClass:"text-primary",attrs:{text:""},on:{click:function(t){return e.backPrevios()}}},[t(d["a"],[e._v("mdi-keyboard-backspace")])],1),e._v("Export ຂໍ້ມູນລູກຄ້າໃນແຜນເສັ້ນທາງ "),t(h["a"]),t("span",{staticClass:"mr-4"},[t(d["a"],{attrs:{color:"red"}},[e._v("mdi-map-marker")]),e._v("ຍັງບໍທັນຢູ່ໃນແຜນ ")],1),t("span",[t(d["a"],{staticStyle:{color:"#49a3da"}},[e._v("mdi-map-marker")]),e._v("ຢູ່ໃນແຜນແລ້ວ ")],1)],1),t(u["a"],[t(i["a"],{staticClass:"mb-4",attrs:{cols:"12"}},[e.customers?t("GmapMap",{staticStyle:{width:"100%",height:"450px"},attrs:{center:e.getCenter().lat>0||e.getCenter().lat<0?e.getCenter():{lat:0,lng:0},zoom:14,"disable-default-u-i":!0}},[t("gmap-info-window",{attrs:{options:e.infoOptions,position:e.infoPosition,opened:e.infoOpened,conent:e.infoContent},on:{closeclick:function(t){e.infoOpened=!1}}},[e._v(" "+e._s(e.infoContent)+" ")]),e._l(e.customers,(function(s,a){return t("GmapMarker",{key:a,attrs:{position:e.getMarkers(s),draggable:!1,icon:e.getSiteIcon(s),animation:2,clickable:!0,label:(a+1).toString()},on:{click:function(t){return e.toggleInfo(s,a)}}})}))],2):e._e()],1)],1),t(u["a"],{staticClass:"mb-n6"},[t(i["a"],[t(o["a"],{staticClass:"btn-primary",attrs:{loading:e.loading,disabled:e.loading},on:{click:function(t){return e.exportRoutePlan()}}},[t(d["a"],[e._v("mdi-arrow-right-bold-circle-outline")])],1)],1),t(i["a"],[e.customers?t("h4",[e._v(" ລວມລູກຄ້າ "+e._s(e.customers.length)+" ຄົນ ")]):e._e()]),t(i["a"],[t(m["a"],{attrs:{outlined:"",dense:"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"ຊື່ລູກຄ້າ",type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Search()}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),t("div",[t(r["a"],[t(r["a"],{attrs:{flat:""}},[t(n["b"],[t("div",[t(o["a"],{attrs:{text:"",color:"error"},on:{click:e.deleteItem}},[t(d["a"],{attrs:{medium:""}},[e._v(" mdi-delete ")])],1)],1),t(c["a"],{attrs:{headers:e.headers,items:e.customers,search:e.search,"disable-pagination":!0,"hide-default-footer":"","show-select":""},scopedSlots:e._u([{key:"item.index",fn:function(s){return[t("div",[e._v(e._s(s.index+1))])]}},{key:"item.address_detail",fn:function({item:s}){return e._l(s.village_details,(function(s,a){return t("div",{key:a},[t("span",[e._v(e._s(s.name))])])}))}},{key:"item.address",fn:function({item:s}){return[s.district&&s.village?t("div",[e._v(" "+e._s(s.district.name)+", "+e._s(s.village.name)+" ")]):e._e()]}},{key:"item.actions",fn:function({item:s}){return[t(d["a"],{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.viewPage(s.id)}}},[e._v(" mdi-eye ")])]}}]),model:{value:e.selectedRows,callback:function(t){e.selectedRows=t},expression:"selectedRows"}})],1)],1)],1)],1),t("ModalDelete",[[t(n["a"],[t(h["a"]),t(o["a"],{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v(" Cancel ")]),t(o["a"],{attrs:{color:"blue darken-1",text:"",loading:e.loading,disabled:e.loading},on:{click:e.deleteItemConfirm}},[e._v(" OK ")]),t(h["a"])],1)]],2)],1)},p=[],g=(s("558b"),s("668c"),s("ae9b"),s("3ec3"),s("6ece")),v={name:"Customer",props:["items","villages"],data(){return{customers:[],countcutomer:0,loading:!1,customerId:"",search:"",oldVal:"",selectedVillage:[],selectedCustomer:[],exclude_customers:[],selectedRows:[],customer:{},headers:[{text:"",value:"index"},{text:"ຊື່",value:"name"},{text:"ນາມສະກຸນ",value:"surname"},{text:"Phone",value:"user.phone",sortable:!1},{text:"ລາຍລະອຽດທີ່ຢູ່",value:"address_detail"},{text:"ບ້ານ",value:"village.name",sortable:!0},{text:"ເມືອງ",value:"district.name",sortable:!0}],latlng:{lat:0,lng:0},markers:[],infoPosition:null,infoContent:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35}}}},watch:{search(e){""==e&&this.fetchData()}},created(){console.log("ccefsf"),this.fetchData()},methods:{backPrevios(){this.$router.go(-1)},fetchData(){this.customers=this.items,this.selectedVillage=this.villages},closeDelete(){this.$store.commit("modalDelete_State",!1)},deleteItem(){this.selectedRows.length&&this.$store.commit("modalDelete_State",!0)},deleteItemConfirm(){this.selectedCustomer=[],this.$store.commit("Loading_State",!0);for(let e=0;e<this.selectedRows.length;e++){const t=this.customers.indexOf(this.selectedRows[e]);this.selectedCustomer.push(this.customers[t]),this.customers.splice(t,1)}this.selectedCustomer.filter(e=>{this.exclude_customers.push(e.id)}),this.$store.commit("Toast_State",{value:!0,color:"success",msg:"ລຶບຂໍ້ມູນສຳເລັດແລ້ວ"}),this.selectedRows=[],this.fetchData(),this.$store.commit("Loading_State",!1),this.$store.commit("modalDelete_State",!1)},exportRoutePlan(){this.customers.length?(this.$store.commit("Loading_State",!0),this.$axios.post("export-customer-location/",{exclude_customers:this.exclude_customers,villages:this.selectedVillage},{responseType:"blob"}).then(e=>{200==e.status&&(setTimeout(()=>{this.$store.commit("Loading_State",!1);const t=window.URL.createObjectURL(new Blob([e.data])),s=document.createElement("a");s.href=t,s.setAttribute("download","customer_location.xlsx"),document.body.appendChild(s),s.click(),document.body.removeChild(s)},300),this.$router.push({name:"Plan"}))}).catch(e=>{this.$store.commit("Toast_State",{value:!0,color:"error",msg:e.response?e.response.data.message:"Something went wrong"}),this.$store.commit("Loading_State",!1)})):this.$store.commit("Toast_State",{value:!0,color:"error",msg:"ກາລຸນາເລືອກລູກຄ້າກ່ອນ"})},viewPage(e){this.$router.push({name:"ViewClient",params:{id:e}})},Search(){Object(g["a"])(this)},getCenter(){if(this.customers.length){if(null==parseFloat(this.customers[0].lat))return this.latlng;const e={lat:parseFloat(this.customers[0].lat),lng:parseFloat(this.customers[0].lng)};return e}return this.latlng},getSiteIcon(e){const t={url:s("347c"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}},a={url:s("f742"),zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,size:{width:35,height:55,f:"px",b:"px"},scaledSize:{width:35,height:55,f:"px",b:"px"}};try{switch(e.route_plan_details_count){case 0:return t;case 1:return a}}catch(o){return t}},getMarkers(e){if(null!==e.customer)return{lat:parseFloat(e.lat),lng:parseFloat(e.lng)}},toggleInfo(e,t){this.infoPosition=this.getMarkers(e),this.infoContent=`${e.name} (${e.house_number}) `,this.infoCurrentKey==t?this.infoOpened=!this.infoOpened:(this.infoOpened=!0,this.infoCurrentKey=t)}}},b=v,_=(s("e1f6"),s("4a4e")),x=Object(_["a"])(b,f,p,!1,null,null,null);t["default"]=x.exports},e1f6:function(e,t,s){"use strict";s("9dba")},f742:function(e,t,s){e.exports=s.p+"img/pin2.b23d8eec.svg"}}]);
//# sourceMappingURL=chunk-238e148e.2a938f03.js.map