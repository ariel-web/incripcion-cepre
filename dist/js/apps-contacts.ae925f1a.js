(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apps-contacts"],{"03f0":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"layout-px-spacing app-contacts"},[a("portal",{attrs:{to:"breadcrumb"}},[a("ul",{staticClass:"navbar-nav flex-row"},[a("li",[a("div",{staticClass:"page-header"},[a("nav",{staticClass:"breadcrumb-one",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"javascript:;"}},[t._v("Apps")])]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[a("span",[t._v("Contacts")])])])])])])])]),a("div",{staticClass:"row layout-spacing layout-top-spacing",attrs:{id:"cancel-row"}},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"panel-body searchable-container",class:[t.grid_type]},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-4 col-lg-5 col-md-5 col-sm-7 filtered-list-search layout-spacing align-self-center"},[a("form",{staticClass:"form-inline my-2 my-lg-0"},[a("div",{},[a("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),a("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})]),a("b-input",{staticClass:"product-search",attrs:{placeholder:"Search Contacts..."},on:{keyup:function(a){return t.search_contacts()}},model:{value:t.search_user,callback:function(a){t.search_user="string"===typeof a?a.trim():a},expression:"search_user"}})],1)])]),a("div",{staticClass:"col-xl-8 col-lg-7 col-md-7 col-sm-5 text-sm-right text-center layout-spacing align-self-center"},[a("div",{staticClass:"d-flex justify-content-sm-end justify-content-center"},[a("a",{attrs:{href:"javascript:;"},on:{click:t.edit_user}},[a("svg",{staticClass:"feather feather-user-plus",attrs:{id:"btn-add-contact",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}}),a("circle",{attrs:{cx:"8.5",cy:"7",r:"4"}}),a("line",{attrs:{x1:"20",y1:"8",x2:"20",y2:"14"}}),a("line",{attrs:{x1:"23",y1:"11",x2:"17",y2:"11"}})])]),a("div",{staticClass:"switch align-self-center"},[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){t.grid_type="list"}}},[a("svg",{staticClass:"feather feather-list view-list mr-1",class:{"active-view":"list"==t.grid_type},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("line",{attrs:{x1:"8",y1:"6",x2:"21",y2:"6"}}),a("line",{attrs:{x1:"8",y1:"12",x2:"21",y2:"12"}}),a("line",{attrs:{x1:"8",y1:"18",x2:"21",y2:"18"}}),a("line",{attrs:{x1:"3",y1:"6",x2:"3",y2:"6"}}),a("line",{attrs:{x1:"3",y1:"12",x2:"3",y2:"12"}}),a("line",{attrs:{x1:"3",y1:"18",x2:"3",y2:"18"}})])]),a("a",{attrs:{href:"javascript:;"},on:{click:function(a){t.grid_type="grid"}}},[a("svg",{staticClass:"feather feather-grid view-grid",class:{"active-view":"grid"==t.grid_type},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("rect",{attrs:{x:"3",y:"3",width:"7",height:"7"}}),a("rect",{attrs:{x:"14",y:"3",width:"7",height:"7"}}),a("rect",{attrs:{x:"14",y:"14",width:"7",height:"7"}}),a("rect",{attrs:{x:"3",y:"14",width:"7",height:"7"}})])])]),a("b-modal",{attrs:{centered:"",id:"addContactModal",static:!0,title:t.params.id?"Update User":"Add User"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[a("b-button",{attrs:{variant:"default","data-dismiss":"modal"},on:{click:function(a){return t.$bvModal.hide("addContactModal")}}},[a("i",{staticClass:"flaticon-cancel-12"}),t._v(" Discard")]),a("b-button",{attrs:{variant:"default",id:"btn-add"},on:{click:function(a){return t.save_user()}}},[t._v(t._s(t.params.id?"Update":"Add"))])]},proxy:!0}])},[a("div",{staticClass:"add-contact-box"},[a("div",{staticClass:"add-contact-content"},[a("b-form",{attrs:{id:"addContactModalTitle"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("b-input",{attrs:{placeholder:"Name"},model:{value:t.params.name,callback:function(a){t.$set(t.params,"name",a)},expression:"params.name"}})],1)]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("b-input",{attrs:{placeholder:"Email"},model:{value:t.params.email,callback:function(a){t.$set(t.params,"email",a)},expression:"params.email"}})],1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("b-input",{attrs:{placeholder:"Occupation"},model:{value:t.params.role,callback:function(a){t.$set(t.params,"role",a)},expression:"params.role"}})],1)]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("b-input",{attrs:{placeholder:"Phone"},model:{value:t.params.phone,callback:function(a){t.$set(t.params,"phone",a)},expression:"params.phone"}})],1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("b-input",{attrs:{placeholder:"Location"},model:{value:t.params.location,callback:function(a){t.$set(t.params,"location",a)},expression:"params.location"}})],1)])])])],1)])])],1)])]),a("div",{staticClass:"searchable-items",class:[t.grid_type]},[a("div",{staticClass:"items items-header-section"},[a("div",{staticClass:"item-content"},[a("div",{},[a("b-checkbox",{staticClass:"checkbox-primary d-inline-block",attrs:{checked:t.check_all_checkbox,variant:"primary"},on:{change:function(a){return t.check_all(a)}}}),a("h4",[t._v("Name")])],1),t._m(0),t._m(1),t._m(2),a("div",{staticClass:"action-btn"},[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"javascript:;",title:"Delete Selected"},on:{click:function(a){return t.delete_selected()}}},[a("svg",{staticClass:"feather feather-trash-2 delete-multiple",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("polyline",{attrs:{points:"3 6 5 6 21 6"}}),a("path",{attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}),a("line",{attrs:{x1:"10",y1:"11",x2:"10",y2:"17"}}),a("line",{attrs:{x1:"14",y1:"11",x2:"14",y2:"17"}})])])])])]),t._l(t.filterd_contacts_list,(function(e,i){return a("div",{key:i,staticClass:"items"},[a("div",{staticClass:"item-content"},[a("div",{staticClass:"user-profile"},[a("b-checkbox",{staticClass:"checkbox-primary d-inline-block",attrs:{variant:"primary",value:e.id},model:{value:t.ids,callback:function(a){t.ids=a},expression:"ids"}}),a("img",{attrs:{src:s("7584")("./"+e.path),alt:"avatar"}}),a("div",{staticClass:"user-meta-info"},[a("p",{staticClass:"user-name"},[t._v(t._s(e.name))]),a("p",{staticClass:"user-work"},[t._v(t._s(e.role))])])],1),a("div",{staticClass:"user-email"},[a("p",{staticClass:"info-title"},[t._v("Email:")]),a("p",{staticClass:"usr-email-addr"},[t._v(t._s(e.email))])]),a("div",{staticClass:"user-location"},[a("p",{staticClass:"info-title"},[t._v("Location:")]),a("p",{staticClass:"usr-location"},[t._v(t._s(e.location))])]),a("div",{staticClass:"user-phone"},[a("p",{staticClass:"info-title"},[t._v("Phone:")]),a("p",{staticClass:"usr-ph-no"},[t._v(t._s(e.phone))])]),a("div",{staticClass:"action-btn"},[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mr-1",attrs:{href:"javascript:;",title:"Edit"},on:{click:function(a){return t.edit_user(e)}}},[a("svg",{staticClass:"feather feather-edit-2 edit",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}})])]),a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"javascript:;",title:"Delete"},on:{click:function(a){return t.delete_user(e)}}},[a("svg",{staticClass:"feather feather-user-minus delete",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}}),a("circle",{attrs:{cx:"8.5",cy:"7",r:"4"}}),a("line",{attrs:{x1:"23",y1:"11",x2:"17",y2:"11"}})])])])])])}))],2)])])])],1)},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"user-email"},[a("h4",[t._v("Email")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"user-location"},[a("h4",{staticStyle:{"margin-left":"0"}},[t._v("Location")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"user-phone"},[a("h4",{staticStyle:{"margin-left":"3px"}},[t._v("Phone")])])}],r=(s("13d5"),s("c6df"),{metaInfo:{title:"Contact Profile"},components:{},computed:{check_all_checkbox(){return!(!this.contacts_list.length||this.ids.length!=this.contacts_list.length)}},data(){return{params:{id:null,name:"",email:"",role:"",phone:"",location:""},contacts_list:[],filterd_contacts_list:[],search_user:"",ids:[],grid_type:"list"}},mounted(){this.bind_contacts()},methods:{bind_contacts(){this.contacts_list=[{id:1,path:"profile-5.jpeg",name:"Alan Green",role:"Web Developer",email:"alan@mail.com",location:"Boston, USA",phone:"+1 (070) 123-4567"},{id:2,path:"profile-11.jpeg",name:"Linda Nelson",role:"Web Designer",email:"linda@mail.com",location:"Sydney, Australia",phone:"+1 (070) 123-4567"},{id:3,path:"profile-12.jpeg",name:"Lila Perry",role:"UX/UI Designer",email:"lila@mail.com",location:"Miami, USA",phone:"+1 (070) 123-4567"},{id:4,path:"profile-3.jpeg",name:"Andy King",role:"Project Lead",email:"andy@mail.com",location:"Tokyo, Japan",phone:"+1 (070) 123-4567"},{id:5,path:"profile-15.jpeg",name:"Jesse Cory",role:"Web Developer",email:"jesse@mail.com",location:"Edinburgh, UK",phone:"+1 (070) 123-4567"},{id:6,path:"profile-7.jpeg",name:"Xavier",role:"UX/UI Designer",email:"xavier@mail.com",location:"New York, USA",phone:"+1 (070) 123-4567"},{id:7,path:"profile-18.jpeg",name:"Susan",role:"Project Manager",email:"susan@mail.com",location:"Miami, USA",phone:"+1 (070) 123-4567"},{id:8,path:"profile-29.jpeg",name:"raci Lopez",role:"Web Developer",email:"traci@mail.com",location:"Edinburgh, UK",phone:"+1 (070) 123-4567"}],this.search_contacts()},search_contacts(){this.filterd_contacts_list=this.contacts_list.filter(t=>t.name.toLowerCase().includes(this.search_user))},edit_user(t){this.params={id:null,name:"",email:"",role:"",phone:"",location:""},t&&(this.params=JSON.parse(JSON.stringify(t))),this.$bvModal.show("addContactModal")},save_user(){if(!this.params.name)return this.$bvToast.toast("Name is required.",{headerClass:"d-none",bodyClass:"toast-danger",toaster:"b-toaster-top-center",autoHideDelay:1e3}),!0;if(!this.params.email)return this.$bvToast.toast("Email is required.",{headerClass:"d-none",bodyClass:"toast-danger",toaster:"b-toaster-top-center",autoHideDelay:1e3}),!0;if(!this.params.phone)return this.$bvToast.toast("Phone is required.",{headerClass:"d-none",bodyClass:"toast-danger",toaster:"b-toaster-top-center",autoHideDelay:1e3}),!0;if(this.params.id){let t=this.contacts_list.find(t=>t.id==this.params.id);t.name=this.params.name,t.email=this.params.email,t.role=this.params.role,t.phone=this.params.phone,t.location=this.params.location}else{let t=this.contacts_list.reduce((t,a)=>a.id>t?a.id:t,this.contacts_list[0].id);t||(t=0);let a={id:t+1,path:"profile-30.png",name:this.params.name,email:this.params.email,role:this.params.role,phone:this.params.phone,location:this.params.location};this.contacts_list.splice(0,0,a),this.search_contacts()}this.$bvModal.hide("addContactModal"),this.$bvToast.toast("User saved successfully.",{headerClass:"d-none",bodyClass:"toast-success",toaster:"b-toaster-top-center",autoHideDelay:1e3})},delete_user(t){this.contacts_list=this.contacts_list.filter(a=>a.id!=t.id),this.ids=this.ids.filter(a=>a!=t.id),this.search_contacts(),this.$bvToast.toast("User deleted successfully.",{headerClass:"d-none",bodyClass:"toast-success",toaster:"b-toaster-top-center",autoHideDelay:1e3})},delete_selected(){if(!this.ids.length)return this.$bvToast.toast("Please select atleast one user.",{headerClass:"d-none",bodyClass:"toast-warning",toaster:"b-toaster-top-center",autoHideDelay:1e3}),!0;this.contacts_list=this.contacts_list.filter(t=>!this.ids.includes(t.id)),this.clear_selection(),this.search_contacts()},check_all(t){t?this.ids=this.contacts_list.map(t=>t.id):this.clear_selection()},clear_selection(){this.ids=[]}}}),o=r,l=(s("ee9b"),s("2877")),n=Object(l["a"])(o,e,i,!1,null,"fda690aa",null);a["default"]=n.exports},c6df:function(t,a,s){},eae3:function(t,a,s){},ee9b:function(t,a,s){"use strict";s("eae3")}}]);
//# sourceMappingURL=apps-contacts.ae925f1a.js.map