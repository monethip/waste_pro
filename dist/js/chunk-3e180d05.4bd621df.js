(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e180d05"],{"4ee9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"mb-n6"},[a("v-col",[a("v-btn",{staticClass:"btn-primary",on:{click:function(e){return t.createPage()}}},[a("v-icon",[t._v("mdi-plus")])],1)],1),a("v-col",[a("v-menu",{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"ເລີ່ມວັນທີ",readonly:"",outlined:"",dense:""},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}},"v-text-field",i,!1),n))]}}]),model:{value:t.start_menu,callback:function(e){t.start_menu=e},expression:"start_menu"}},[a("v-date-picker",{on:{input:function(e){return t.fetchData()}},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}})],1)],1),a("v-col",[a("v-menu",{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"ຫາວັນທີ",readonly:"",outlined:"",dense:""},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}},"v-text-field",i,!1),n))]}}]),model:{value:t.end_menu,callback:function(e){t.end_menu=e},expression:"end_menu"}},[a("v-date-picker",{on:{input:function(e){return t.fetchData()}},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}})],1)],1),a("v-col",[a("v-select",{attrs:{outlined:"",dense:"",items:t.models,"item-text":"model_name","item-value":"model_name",label:"Model Name",multiple:""},model:{value:t.selectedModel,callback:function(e){t.selectedModel=e},expression:"selectedModel"}})],1)],1),a("div",[a("v-card",[a("v-card-title",[t._v(" ຂໍ້ມູນ Activity Log ("+t._s(t.pagination.total)+") ")]),a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.activities,"disable-pagination":!0,"hide-default-footer":""},scopedSlots:t._u([{key:"item.created_at",fn:function(e){var n=e.item;return[a("div",[t._v(t._s(t.moment(n.created_at).format("hh:mm DD-MM-YY")))])]}},{key:"item.actions",fn:function(e){var n=e.item;return[a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-icon",t._g(t._b({staticClass:"mr-2",attrs:{color:"primary",dark:"",medium:""}},"v-icon",i,!1),n),[t._v("mdi-dots-vertical")])]}}],null,!0)},[a("v-list",[a("v-list-item",{attrs:{link:""},on:{click:function(e){return t.viewPage(n.id)}}},[a("v-list-item-title",[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-eye ")]),t._v(" ລາຍລະອຽດ ")],1)],1)],1)],1)]}}])}),a("br"),[t.pagination.total_pages>1?a("Pagination",{attrs:{pagination:t.pagination,offset:t.offset},on:{paginate:function(e){return t.fetchData()}}}):t._e()]],2)],1)],1)],1)},i=[],o=a("3835"),s=(a("4fad"),{name:"Customer",title:function(){return"Vientiane Waste Co-Dev|".concat(this.title)},data:function(){return{start_date:"",end_date:"",start_menu:!1,end_menu:!1,activities:[],loading:!1,customerId:"",offset:12,pagination:{},per_page:15,start_collect:!1,server_errors:{},models:[],selectedModel:[],user:{},item:{},headers:[{text:"Log name",value:"log_name"},{text:"Description",value:"description"},{text:"Model Name",value:"model_name",sortable:!1},{text:"Subject Type",value:"subject_type",sortable:!1},{text:"Created",value:"created_at",sortable:!1},{text:"",value:"actions",sortable:!1}]}},methods:{fetchData:function(){var t=this;this.$store.commit("Loading_State",!0),this.$axios.get("activity",{params:{page:this.pagination.current_page,per_page:this.per_page,date_from:this.start_date,date_end:this.start_date,model_names:this.selectedModel}}).then((function(e){200==e.data.code&&setTimeout((function(){t.$store.commit("Loading_State",!1),t.activities=e.data.data.data,t.pagination=e.data.data.pagination}),300)})).catch((function(e){if(t.$store.commit("Loading_State",!1),t.fetchData(),422==e.response.status)for(var a=e.response.data.errors,n=0,i=Object.entries(a);n<i.length;n++){var s=Object(o["a"])(i[n],2),r=s[0],c=s[1];t.server_errors[r]=c[0]}}))},fetchModels:function(){var t=this;this.$axios.get("model").then((function(e){200==e.data.code&&setTimeout((function(){t.models=e.data.data}),300)})).catch((function(){}))},viewPage:function(t){this.$router.push({name:"ViewCompany",params:{id:t}})},statusColor:function(t){return"active"==t?"success":"inactive"==t?"error":"info"}},watch:{selectedModel:function(){this.fetchData()},date_from:function(){this.fetchData()},date_end:function(){this.fetchData()}},created:function(){this.fetchData(),this.fetchModels()}}),r=s,c=(a("d1dc"),a("2877")),d=a("6544"),l=a.n(d),u=a("8336"),m=a("b0af"),f=a("99d9"),v=a("62ad"),_=a("a523"),p=a("8fea"),h=a("2e4b"),g=a("132d"),b=a("8860"),k=a("da13"),x=a("5d23"),y=a("e449"),V=a("0fd9"),D=a("b974"),w=a("8654"),C=Object(c["a"])(r,n,i,!1,null,null,null);e["default"]=C.exports;l()(C,{VBtn:u["a"],VCard:m["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:v["a"],VContainer:_["a"],VDataTable:p["a"],VDatePicker:h["a"],VIcon:g["a"],VList:b["a"],VListItem:k["a"],VListItemTitle:x["d"],VMenu:y["a"],VRow:V["a"],VSelect:D["a"],VTextField:w["a"]})},"977d":function(t,e,a){},d1dc:function(t,e,a){"use strict";a("977d")}}]);
//# sourceMappingURL=chunk-3e180d05.4bd621df.js.map