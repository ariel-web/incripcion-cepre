(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apps-scrumboard"],{"43f5":function(t,s,a){t.exports=a.p+"img/taskboard.cc12c2a6.jpg"},"556f":function(t,s,a){},d974:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"layout-px-spacing"},[s("portal",{attrs:{to:"breadcrumb"}},[s("ul",{staticClass:"navbar-nav flex-row"},[s("li",[s("div",{staticClass:"page-header"},[s("nav",{staticClass:"breadcrumb-one",attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("a",{attrs:{href:"javascript:;"}},[t._v("Apps")])]),s("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[s("span",[t._v("Scrumboard")])])])])])])])]),s("div",{staticClass:"action-btn layout-top-spacing mb-5"},[s("b-button",{attrs:{id:"add-list",variant:"primary"},on:{click:function(s){return t.edit_project()}}},[t._v("Add List")])],1),s("div",{staticClass:"row scrumboard",attrs:{id:"cancel-row"}},[s("div",{staticClass:"col-lg-12 layout-spacing"},[s("div",{staticClass:"task-list-section"},t._l(t.project_list,(function(e){return s("div",{key:e.id,staticClass:"task-list-container"},[s("div",{staticClass:"connect-sorting"},[s("div",{staticClass:"task-container-header"},[s("h6",{staticClass:"s-heading",attrs:{"data-listTitle":"In Progress"}},[t._v(t._s(e.title))]),s("b-dropdown",{attrs:{right:!0,"toggle-tag":"a",variant:"icon-only"},scopedSlots:t._u([{key:"button-content",fn:function(){return[s("svg",{staticClass:"feather feather-more-horizontal",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("circle",{attrs:{cx:"12",cy:"12",r:"1"}}),s("circle",{attrs:{cx:"19",cy:"12",r:"1"}}),s("circle",{attrs:{cx:"5",cy:"12",r:"1"}})])]},proxy:!0}],null,!0)},[s("b-dropdown-item",{attrs:{"link-class":"list-edit"},on:{click:function(s){return t.edit_project(e)}}},[t._v("Edit")]),s("b-dropdown-item",{attrs:{"link-class":"list-delete"},on:{click:function(s){return t.delete_project(e)}}},[t._v("Delete")]),s("b-dropdown-item",{attrs:{"link-class":"list-clear-all"},on:{click:function(s){return t.clear_project(e)}}},[t._v("Clear All")])],1)],1),s("draggable",{staticClass:"connect-sorting-content",attrs:{group:"default","ghost-class":"ui-state-highlight","drag-class":"ui-sortable-helper",animation:200}},t._l(e.tasks,(function(i){return s("div",{key:e.id+""+i.task_id,staticClass:"card task-text-progress cursor-move ui-sortable-handle"},[s("div",{staticClass:"card-body"},[i.image?s("div",{staticClass:"px-2 pt-2"},[s("img",{staticClass:"img-fluid rounded",attrs:{src:a("43f5"),alt:"scrumboard"}})]):t._e(),s("div",{staticClass:"task-header"},[s("h4",[t._v(t._s(i.title))])]),s("div",{staticClass:"task-body"},[i.description?s("div",{staticClass:"task-content"},[s("p",[t._v(t._s(i.description))])]):t._e(),s("div",{staticClass:"task-bottom"},[s("div",{staticClass:"tb-section-1"},[s("span",[s("svg",{staticClass:"feather feather-calendar",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("rect",{attrs:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}}),s("line",{attrs:{x1:"16",y1:"2",x2:"16",y2:"6"}}),s("line",{attrs:{x1:"8",y1:"2",x2:"8",y2:"6"}}),s("line",{attrs:{x1:"3",y1:"10",x2:"21",y2:"10"}})]),t._v(" "+t._s(i.date)+" ")])]),s("div",{staticClass:"tb-section-2"},[s("a",{attrs:{href:"javascript:;"},on:{click:function(s){return t.edit_task(e.id,i)}}},[s("svg",{staticClass:"feather feather-edit-2 s-task-edit",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}})])]),s("a",{attrs:{href:"javascript:;"},on:{click:function(s){return t.delete_confirm(e.id,i)}}},[s("svg",{staticClass:"feather feather-trash-2 s-task-delete",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("polyline",{attrs:{points:"3 6 5 6 21 6"}}),s("path",{attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}),s("line",{attrs:{x1:"10",y1:"11",x2:"10",y2:"17"}}),s("line",{attrs:{x1:"14",y1:"11",x2:"14",y2:"17"}})])])])])])])])})),0),s("div",{staticClass:"add-s-task"},[s("a",{staticClass:"addTask",attrs:{href:"javascript:;"},on:{click:function(s){return t.edit_task(e.id)}}},[s("svg",{staticClass:"feather feather-plus-circle",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),s("line",{attrs:{x1:"12",y1:"8",x2:"12",y2:"16"}}),s("line",{attrs:{x1:"8",y1:"12",x2:"16",y2:"12"}})]),t._v(" Add Task ")])])],1)])})),0)])]),s("b-modal",{attrs:{centered:"",id:"addListModal",title:t.params.id?"Edit List":"Add List"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[s("b-button",{attrs:{variant:"default","data-dismiss":"modal"},on:{click:function(s){return t.$bvModal.hide("addListModal")}}},[s("svg",{staticClass:"feather feather-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("line",{attrs:{x1:"18",y1:"6",x2:"6",y2:"18"}}),s("line",{attrs:{x1:"6",y1:"6",x2:"18",y2:"18"}})]),t._v(" Discard ")]),s("b-button",{staticClass:"add-list",attrs:{variant:"default"},on:{click:function(s){return t.save_project()}}},[t._v(t._s(t.params.id?"Update List":"Add List"))])]},proxy:!0}])},[s("div",{staticClass:"compose-box"},[s("div",{staticClass:"compose-content",attrs:{id:"addListModalTitle"}},[s("form",{attrs:{action:"javascript:void(0);"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"list-title"},[s("svg",{staticClass:"feather feather-list",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("line",{attrs:{x1:"8",y1:"6",x2:"21",y2:"6"}}),s("line",{attrs:{x1:"8",y1:"12",x2:"21",y2:"12"}}),s("line",{attrs:{x1:"8",y1:"18",x2:"21",y2:"18"}}),s("line",{attrs:{x1:"3",y1:"6",x2:"3",y2:"6"}}),s("line",{attrs:{x1:"3",y1:"12",x2:"3",y2:"12"}}),s("line",{attrs:{x1:"3",y1:"18",x2:"3",y2:"18"}})]),s("b-input",{attrs:{placeholder:"List Name"},model:{value:t.params.title,callback:function(s){t.$set(t.params,"title",s)},expression:"params.title"}})],1)])])])])])]),s("b-modal",{attrs:{centered:"",id:"addTaskModal",title:t.params_task.task_id?"Edit Task":"Add Task"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[s("b-button",{attrs:{variant:"default","data-dismiss":"modal"},on:{click:function(s){return t.$bvModal.hide("addTaskModal")}}},[s("svg",{staticClass:"feather feather-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("line",{attrs:{x1:"18",y1:"6",x2:"6",y2:"18"}}),s("line",{attrs:{x1:"6",y1:"6",x2:"18",y2:"18"}})]),t._v(" Discard ")]),s("b-button",{staticClass:"add-tsk",attrs:{variant:"default","data-btnfn":"addTask"},on:{click:function(s){return t.save_task()}}},[t._v(t._s(t.params_task.task_id?"Update Task":"Add Task"))])]},proxy:!0}])},[s("div",{staticClass:"compose-box"},[s("div",{staticClass:"compose-content",attrs:{id:"addTaskModalTitle"}},[s("div",{staticClass:"addTaskAccordion",attrs:{id:"add_task_accordion"}},[s("div",{staticClass:"card task-text-progress"},[s("div",{staticClass:"collapse show",attrs:{id:"collapseTwo","aria-labelledby":"headingTwo","data-parent":"#add_task_accordion"}},[s("div",{staticClass:"card-body"},[s("form",{attrs:{action:"javascript:void(0);"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"task-title mb-4"},[s("svg",{staticClass:"feather feather-edit-3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{d:"M12 20h9"}}),s("path",{attrs:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"}})]),s("b-input",{attrs:{placeholder:"Task"},model:{value:t.params_task.title,callback:function(s){t.$set(t.params_task,"title",s)},expression:"params_task.title"}})],1)])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"task-badge"},[s("svg",{staticClass:"feather feather-star",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("polygon",{attrs:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}})]),s("b-textarea",{attrs:{rows:"5",placeholder:"Task Text"},model:{value:t.params_task.description,callback:function(s){t.$set(t.params_task,"description",s)},expression:"params_task.description"}})],1)])])])])])])])])])]),s("b-modal",{attrs:{centered:"",id:"deleteConformation"},scopedSlots:t._u([{key:"modal-header",fn:function(){return[s("div",{staticClass:"icon"},[s("svg",{staticClass:"feather feather-trash-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("polyline",{attrs:{points:"3 6 5 6 21 6"}}),s("path",{attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}),s("line",{attrs:{x1:"10",y1:"11",x2:"10",y2:"17"}}),s("line",{attrs:{x1:"14",y1:"11",x2:"14",y2:"17"}})])]),s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Delete the task?")]),s("a",{staticClass:"close",attrs:{href:"javascript:;","data-dismiss":"modal"},on:{click:function(s){return t.$bvModal.hide("deleteConformation")}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]},proxy:!0},{key:"modal-footer",fn:function(){return[s("b-button",{attrs:{variant:"default","data-dismiss":"modal"},on:{click:function(s){return t.$bvModal.hide("deleteConformation")}}},[t._v("Cancel")]),s("b-button",{attrs:{variant:"danger","data-remove":"task"},on:{click:function(s){return t.delete_task()}}},[t._v("Delete")])]},proxy:!0}])},[s("p",{},[t._v("If you delete the task it will be gone forever. Are you sure you want to proceed?")])])],1)},i=[],r=(a("13d5"),a("14d9"),a("556f"),a("b76a")),o=a.n(r),l={metaInfo:{title:"Scrum Task Board"},components:{draggable:o.a},data(){return{params:{id:null,title:""},params_task:{project_id:null,task_id:null,title:"",description:""},project_list:[],deleted_task:{project_id:null,task_id:null}}},mounted(){this.bind_project_list()},methods:{bind_project_list(){this.project_list=[{id:1,title:"In Progress",tasks:[{task_id:1,title:"Creating a new Portfolio on Dribble",description:"",image:!0,date:" 08 Aug, 2020"},{task_id:2,title:"Singapore Team Meet",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",date:" 09 Aug, 2020"}]},{id:2,title:"Complete",tasks:[{task_id:1,title:"Dinner with Kelly Young",description:"",date:" 08 Aug, 2020"},{task_id:2,title:"Launch New SEO Wordpress Theme ",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",date:" 09 Aug, 2020"}]},{id:3,title:"New",tasks:[]}]},edit_project(t){this.params={id:null,title:""},t&&(this.params=JSON.parse(JSON.stringify(t))),this.$bvModal.show("addListModal")},save_project(){if(!this.params.title)return this.$bvToast.toast("Title is required.",{headerClass:"d-none",bodyClass:"toast-danger",toaster:"b-toaster-top-center",autoHideDelay:1e3}),!0;if(this.params.id){let t=this.project_list.find(t=>t.id==this.params.id);t.title=this.params.title}else{let t=this.project_list.reduce((t,s)=>s.id>t?s.id:t,this.project_list[0].id);t||(t=0);let s={id:t+1,title:this.params.title,tasks:[]};this.project_list.push(s)}this.$bvModal.hide("addListModal"),this.$bvToast.toast("Project saved successfully.",{headerClass:"d-none",bodyClass:"toast-success",toaster:"b-toaster-top-center",autoHideDelay:1e3})},delete_project(t){this.project_list=this.project_list.filter(s=>s.id!=t.id),this.$bvToast.toast("Project deleted successfully.",{headerClass:"d-none",bodyClass:"toast-success",toaster:"b-toaster-top-center",autoHideDelay:1e3})},clear_project(t){t.tasks=[]},edit_task(t,s){this.params_task={project_id:null,task_id:null,title:"",description:""},s&&(this.params_task=JSON.parse(JSON.stringify(s))),this.params_task["project_id"]=t,this.$bvModal.show("addTaskModal")},save_task(){if(!this.params_task.title)return this.$bvToast.toast("Title is required.",{headerClass:"d-none",bodyClass:"toast-danger",toaster:"b-toaster-top-center",autoHideDelay:1e3}),!0;let t=this.project_list.find(t=>t.id==this.params_task.project_id);if(this.params_task.task_id){let s=t.tasks.find(t=>t.task_id==this.params_task.task_id);s.title=this.params_task.title,s.description=this.params_task.description}else{let r=0;t.tasks.length&&(r=t.tasks.reduce((t,s)=>s.task_id>t?s.task_id:t,t.tasks[0].task_id));let o=new Date;var s=String(o.getDate()).padStart(2,"0"),a=String(o.getMonth()),e=o.getFullYear(),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let l={task_id:r+1,title:this.params_task.title,description:this.params_task.description,date:s+" "+i[a]+", "+e};t.tasks.push(l)}this.$bvModal.hide("addTaskModal"),this.$bvToast.toast("Task saved successfully.",{headerClass:"d-none",bodyClass:"toast-success",toaster:"b-toaster-top-center",autoHideDelay:1e3})},delete_confirm(t,s){this.deleted_task={project_id:t,task_id:s.task_id},this.$bvModal.show("deleteConformation")},delete_task(){let t=this.project_list.find(t=>t.id==this.deleted_task.project_id);t.tasks=t.tasks.filter(t=>t.task_id!=this.deleted_task.task_id),this.$bvToast.toast("Task deleted successfully.",{headerClass:"d-none",bodyClass:"toast-success",toaster:"b-toaster-top-center",autoHideDelay:1e3}),this.$bvModal.hide("deleteConformation")}}},d=l,n=a("2877"),c=Object(n["a"])(d,e,i,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=apps-scrumboard.de0caccd.js.map