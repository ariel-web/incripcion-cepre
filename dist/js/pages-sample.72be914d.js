(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sample"],{"4b25":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"form auth-boxed"},[a("div",{staticClass:"form-container outer"},[a("div",{staticClass:"form-form"},[a("div",{staticClass:"form-form-wrap"},[a("div",{staticClass:"form-container"},[a("div",{staticClass:"form-content"},[t._m(0),a("h3",{},[t._v("Iniciar Sesión")]),a("b-form",{staticClass:"text-left",on:{submit:function(a){return a.preventDefault(),t.login({email:t.form.email,password:t.form.password})}}},[a("div",{staticClass:"form"},[a("div",{staticClass:"field-wrapper input",attrs:{id:"username-field"}},[a("label",{attrs:{for:"username"}},[t._v("CORREO")]),a("svg",{staticClass:"feather feather-user",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}}),a("circle",{attrs:{cx:"12",cy:"7",r:"4"}})]),a("b-input",{attrs:{placeholder:"e.g jhonar@gmail.com"},model:{value:t.form.email,callback:function(a){t.$set(t.form,"email",a)},expression:"form.email"}})],1),a("div",{staticClass:"field-wrapper input mb-2",attrs:{id:"password-field"}},[a("div",{staticClass:"d-flex justify-content-between"},[a("label",{attrs:{for:"password"}},[t._v("CONTRASEÑA")]),a("router-link",{staticClass:"forgot-pass-link",attrs:{to:"/auth/pass-recovery-boxed"}},[t._v("¿Has olvidado tu contraseña?")])],1),a("svg",{staticClass:"feather feather-lock",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("rect",{attrs:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}}),a("path",{attrs:{d:"M7 11V7a5 5 0 0 1 10 0v4"}})]),a("b-input",{attrs:{type:t.pwd_type,placeholder:"Password"},model:{value:t.form.password,callback:function(a){t.$set(t.form,"password",a)},expression:"form.password"}}),a("svg",{staticClass:"feather feather-eye",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",id:"toggle-password"},on:{click:t.set_pwd_type}},[a("path",{attrs:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}}),a("circle",{attrs:{cx:"12",cy:"12",r:"3"}})])],1),a("div",{staticClass:"d-sm-flex justify-content-between",staticStyle:{"margin-top":"20px","margin-bottom":"50px"}},[a("div",{staticClass:"field-wrapper"},[a("b-button",{attrs:{type:"submit",variant:"dark",value:""}},[t._v("Entrar al Sistema")])],1)])])])],1)])])])])])},r=[function(){var t=this,a=t._self._c;return a("div",{staticStyle:{"margin-top":"30px","margin-bottom":"20px"}},[a("img",{attrs:{src:s("16a4"),width:"100"}})])}],i=s("2f62"),o=(s("ce14"),{metaInfo:{title:"Login"},data(){return{pwd_type:"password",form:{email:"",password:""}}},mounted(){},methods:{...Object(i["b"])(["login"]),submit(){this.$store.commit("login",this.form.email)},set_pwd_type(){"password"==this.pwd_type?this.pwd_type="text":this.pwd_type="password"}}}),l=o,n=s("2877"),c=Object(n["a"])(l,e,r,!1,null,null,null);a["default"]=c.exports},bd74:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"layout-px-spacing"},[a("portal",{attrs:{to:"breadcrumb"}},[a("ul",{staticClass:"navbar-nav flex-row"},[a("li",[a("div",{staticClass:"page-header"},[a("nav",{staticClass:"breadcrumb-one",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"javascript:;"}},[t._v("Pages")])]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[a("span",[t._v("Sample Page")])])])])])])])]),a("div",{staticClass:"row layout-top-spacing"},[t._m(0),a("div",{staticClass:"col-xl-4 col-lg-6 col-md-6 mb-4"},[a("b-card",{staticClass:"b-l-card-1 h-100",attrs:{"img-src":s("fb0e"),"img-alt":"Card image cap"}},[a("strong",{staticClass:"card-category"},[t._v("Trends")]),a("h5",{staticClass:"card-title mt-2"},[t._v("Trending Style")]),a("p",{staticClass:"card-text meta-info meta-time mb-2"},[a("small",{},[t._v("3 mins ago")])]),a("p",{staticClass:"card-text mb-4"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.")]),a("b-button",{staticClass:"mt-2",attrs:{variant:"outline-warning"}},[t._v("Read More")])],1)],1),a("div",{staticClass:"col-xl-8 col-lg-6 col-md-6 col-sm-12 col-12",staticStyle:{"margin-bottom":"24px"}},[a("div",{staticClass:"statbox panel box box-shadow"},[t._m(1),a("div",{staticClass:"panel-body"},[a("b-form",[a("b-form-row",{staticClass:"mb-4"},[a("b-form-group",{staticClass:"col-md-6",attrs:{label:"Email"}},[a("b-input",{attrs:{type:"email",placeholder:"Email"}})],1),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"Password"}},[a("b-input",{attrs:{type:"password",placeholder:"Password"}})],1)],1),a("b-form-group",{staticClass:"mb-4",attrs:{label:"Address"}},[a("b-input",{attrs:{placeholder:"1234 Main St"}})],1),a("b-form-group",{staticClass:"mb-4",attrs:{label:"Address 2"}},[a("b-input",{attrs:{placeholder:"Apartment, studio, or floor"}})],1),a("b-form-row",{staticClass:"mb-4"},[a("b-form-group",{staticClass:"col-md-6",attrs:{label:"City"}},[a("b-input",{attrs:{placeholder:"City"}})],1),a("b-form-group",{staticClass:"col-md-4",attrs:{label:"State"}},[a("b-select",{attrs:{value:""}},[a("b-select-option",{attrs:{value:""}},[t._v("Choose...")]),a("b-select-option",{attrs:{value:"..."}},[t._v("...")])],1)],1),a("b-form-group",{staticClass:"col-md-2",attrs:{label:"Zip"}},[a("b-input",{attrs:{placeholder:"Zip"}})],1)],1),a("b-form-group",[a("b-checkbox",{staticClass:"checkbox-primary",attrs:{variant:"primary"}},[t._v("Check me out")])],1),a("b-button",{staticClass:"mt-3",attrs:{type:"submit",variant:"primary"}},[t._v("Sign in")])],1)],1)])]),a("div",{staticClass:"col-lg-12 col-md-12 layout-spacing"},[a("div",{staticClass:"statbox panel box box-shadow"},[t._m(2),a("div",{staticClass:"panel-body"},[a("b-table-simple",{attrs:{responsive:"",bordered:""}},[a("b-thead",[a("b-tr",[a("b-th",[t._v("Name")]),a("b-th",[t._v("Date")]),a("b-th",[t._v("Sale")]),a("b-th",{staticClass:"text-center"},[t._v("Status")]),a("b-th",{staticClass:"text-center"},[t._v("Action")])],1)],1),a("b-tbody",t._l(t.table_1,(function(s,e){return a("b-tr",{key:e},[a("b-td",[t._v(t._s(s.name))]),a("b-td",[t._v(t._s(s.date))]),a("b-td",[t._v(t._s(s.sale))]),a("b-td",[a("b-badge",{attrs:{variant:t.random_class(e+1)}},[t._v(t._s(s.status))])],1),a("b-td",{staticClass:"text-center"},[a("b-dropdown",{staticClass:"custom-dropdown",attrs:{right:!0,variant:"icon-only","toggle-tag":"a"},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("svg",{staticClass:"feather feather-more-horizontal",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("circle",{attrs:{cx:"12",cy:"12",r:"1"}}),a("circle",{attrs:{cx:"19",cy:"12",r:"1"}}),a("circle",{attrs:{cx:"5",cy:"12",r:"1"}})])]},proxy:!0}],null,!0)},[a("b-dropdown-item",[t._v("Download")]),a("b-dropdown-item",[t._v("Share")]),a("b-dropdown-item",[t._v("Edit")]),a("b-dropdown-item",[t._v("Delete")])],1)],1)],1)})),1)],1)],1)])])])],1)},r=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-12 layout-spacing"},[a("div",{staticClass:"panel br-4"},[a("div",{staticClass:"panel-body"},[a("h6",[t._v("Kick Start you new project with ease!")]),a("p",{staticClass:"mb-0 mt-3"},[t._v(" With CORK starter kit, you can begin your work without any hassle. The starter page is highly optimized which gives you freedom to start with minimal code and add only the desired components and plugins required for your project. ")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"panel-heading"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[a("h4",[t._v("Form controls")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"panel-heading"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[a("h4",[t._v("Table with Footer")])])])])}],i={metaInfo:{title:"Breadcrumbs"},data(){return{table_1:[]}},mounted(){this.init_tables()},methods:{init_tables(){this.table_1=[{thumb:"boy.png",name:"Shaun Park","first name":"John","last name":"Doe",email:"johndoe@yahoo.com",date:"10/08/2020",sale:"320",sales:"29.56",status:"Complete",status_class:"text-success",register:"5 min ago",position:"Developer",office:"London"},{thumb:"girl-1.png",name:"Alma Clarke","first name":"Andy","last name":"King",email:"andyking@gmail.com",date:"11/08/2020",sale:"420",sales:"19.15",status:"Pending",status_class:"text-secondary",register:"10 min ago",position:"Designer",office:"New York"},{thumb:"girl-2.png",name:"Xavier","first name":"Lisa","last name":"Doe",email:"lisadoe@yahoo.com",date:"12/08/2020",sale:"130",sales:"39.00",status:"In progress",status_class:"text-info",register:"1 hour ago",position:"Accountant",office:"Amazon"},{thumb:"boy-2.png",name:"Vincent Carpenter","first name":"Vincent","last name":"Carpenter",email:"vinnyc@yahoo.com",date:"13/08/2020",sale:"260",sales:"88.03",status:"Canceled",status_class:"text-danger",register:"1 day ago",position:"Data Scientist",office:"Canada"},{thumb:"boy.png",name:"Amy Diaz","first name":"Amy","last name":"Diaz",email:"amydiaz@yahoo.com",date:"10/08/2020",sale:"320",sales:"29.56",status:"Complete",status_class:"text-success",register:"5 min ago"},{thumb:"girl-1.png",name:"Nia Hillyer","first name":"Nia","last name":"Hillyer",email:"niahill@gmail.com",date:"11/08/2020",sale:"420",sales:"19.15",status:"Pending",status_class:"text-secondary",register:"10 min ago"},{thumb:"girl-2.png",name:"Marry","first name":"Marry","last name":"McDonald",email:"marryMcD@yahoo.com",date:"12/08/2020",sale:"130",sales:"39.00",status:"In progress",status_class:"text-info",register:"1 hour ago"},{thumb:"boy-2.png",name:"Shaun Park","first name":"Shaun","last name":"Park",email:"park@yahoo.com",date:"13/08/2020",sale:"260",sales:"88.03",status:"Canceled",status_class:"text-danger",register:"1 day ago"}]},random_class(t){return 0==t?"default":1==t?"primary":2==t?"secondary":3==t?"success":4==t?"dark":5==t?"danger":6==t?"info":7==t?"warning":"dark"}}},o=i,l=s("2877"),n=Object(l["a"])(o,e,r,!1,null,null,null);a["default"]=n.exports},ce14:function(t,a,s){},fb0e:function(t,a,s){t.exports=s.p+"img/grid-blog-style-1.e89e50ad.jpg"}}]);
//# sourceMappingURL=pages-sample.72be914d.js.map