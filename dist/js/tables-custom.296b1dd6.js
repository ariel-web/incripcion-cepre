(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tables-custom"],{"191f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"layout-px-spacing"},[e("portal",{attrs:{to:"breadcrumb"}},[e("ul",{staticClass:"navbar-nav flex-row"},[e("li",[e("div",{staticClass:"page-header"},[e("nav",{staticClass:"breadcrumb-one",attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("a",{attrs:{href:"javascript:;"}},[t._v("DataTables")])]),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e("span",[t._v("Custom")])])])])])])])]),t._m(0),e("div",{staticClass:"row layout-top-spacing"},[e("div",{staticClass:"col-xl-12 col-lg-12 col-sm-12 layout-spacing"},[e("div",{staticClass:"panel p-0"},[e("div",{staticClass:"custom-table"},[e("div",{staticClass:"table-header"},[e("div",{staticClass:"d-flex align-items-center"},[e("span",[t._v("Results :")]),e("span",{staticClass:"ml-2"},[e("b-select",{attrs:{size:"sm"},model:{value:t.table_option.page_size,callback:function(e){t.$set(t.table_option,"page_size",e)},expression:"table_option.page_size"}},[e("b-select-option",{attrs:{value:"5"}},[t._v("5")]),e("b-select-option",{attrs:{value:"10"}},[t._v("10")]),e("b-select-option",{attrs:{value:"20"}},[t._v("20")]),e("b-select-option",{attrs:{value:"50"}},[t._v("50")])],1)],1)]),e("div",{staticClass:"header-search"},[e("b-input",{attrs:{size:"sm",placeholder:"Search..."},model:{value:t.table_option.search_text,callback:function(e){t.$set(t.table_option,"search_text",e)},expression:"table_option.search_text"}}),e("div",{staticClass:"search-image"},[e("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),e("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])],1)]),e("b-table",{ref:"basic_table",attrs:{responsive:"",items:t.items,fields:t.columns,"per-page":t.table_option.page_size,"current-page":t.table_option.current_page,filter:t.table_option.search_text,"sort-by":"first_name","show-empty":!0},on:{filtered:t.on_filtered,"sort-changed":t.clear_selection},scopedSlots:t._u([{key:"head(id)",fn:function(){return[e("b-checkbox",{staticClass:"checkbox-outline-primary",attrs:{variant:"primary"},on:{change:function(e){return t.select_all()}},model:{value:t.is_select_all,callback:function(e){t.is_select_all=e},expression:"is_select_all"}})]},proxy:!0},{key:"cell(id)",fn:function(s){return[e("b-checkbox",{staticClass:"checkbox-outline-primary",attrs:{value:s.value,variant:"primary"},on:{change:t.check_select_all},model:{value:t.selected_rows,callback:function(e){t.selected_rows=e},expression:"selected_rows"}})]}},{key:"cell(thumb)",fn:function(t){return[e("img",{staticClass:"rounded-circle profile-img",attrs:{src:s("7584")("./"+t.item.thumb),alt:"avatar"}})]}},{key:"cell(status)",fn:function(s){return[e("b-badge",{attrs:{variant:s.value.class}},[t._v(t._s(s.value.key))])]}},{key:"cell(action)",fn:function(){return[e("a",{staticClass:"cancel",attrs:{href:"javascript:;"}},[e("svg",{staticClass:"feather feather-x-circle table-cancel",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}},[e("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),e("line",{attrs:{x1:"15",y1:"9",x2:"9",y2:"15"}}),e("line",{attrs:{x1:"9",y1:"9",x2:"15",y2:"15"}})])])]},proxy:!0}])}),e("div",{staticClass:"table-footer"},[e("div",{staticClass:"dataTables_info"},[t._v("Showing "+t._s(t.meta.total_items?t.meta.start_index+1:0)+" to "+t._s(t.meta.end_index+1)+" of "+t._s(t.meta.total_items))]),e("div",{staticClass:"paginating-container pagination-solid flex-column align-items-right"},[e("b-pagination",{staticClass:"rounded",attrs:{"total-rows":t.table_option.total_rows,"per-page":t.table_option.page_size,"prev-text":"Prev","next-text":"Next","first-text":"First","last-text":"Last","first-class":"first","prev-class":"prev","next-class":"next","last-class":"last"},scopedSlots:t._u([{key:"first-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"}})])]},proxy:!0},{key:"prev-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])]},proxy:!0},{key:"next-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])]},proxy:!0},{key:"last-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"}})])]},proxy:!0}]),model:{value:t.table_option.current_page,callback:function(e){t.$set(t.table_option,"current_page",e)},expression:"table_option.current_page"}})],1)])],1)])])]),t._m(1),e("div",{staticClass:"row layout-top-spacing"},[e("div",{staticClass:"col-xl-12 col-lg-12 col-sm-12 layout-spacing"},[e("div",{staticClass:"panel p-0"},[e("div",{staticClass:"custom-table"},[e("div",{staticClass:"table-header"},[e("div",{staticClass:"d-flex align-items-center"},[e("span",[t._v("Results :")]),e("span",{staticClass:"ml-2"},[e("b-select",{staticClass:"h-auto",model:{value:t.table_option1.page_size,callback:function(e){t.$set(t.table_option1,"page_size",e)},expression:"table_option1.page_size"}},[e("b-select-option",{attrs:{value:"5"}},[t._v("5")]),e("b-select-option",{attrs:{value:"10"}},[t._v("10")]),e("b-select-option",{attrs:{value:"20"}},[t._v("20")]),e("b-select-option",{attrs:{value:"50"}},[t._v("50")])],1)],1)]),e("div",{staticClass:"header-search"},[e("b-input",{attrs:{size:"sm",placeholder:"Search..."},model:{value:t.table_option1.search_text,callback:function(e){t.$set(t.table_option1,"search_text",e)},expression:"table_option1.search_text"}}),e("div",{staticClass:"search-image"},[e("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),e("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])],1)]),e("b-table",{ref:"basic_table1",attrs:{responsive:"",hover:"",items:t.items1,fields:t.columns1,"per-page":t.table_option1.page_size,"current-page":t.table_option1.current_page,filter:t.table_option1.search_text,"show-empty":!0},on:{filtered:t.on_filtered1,"sort-changed":t.clear_selection1},scopedSlots:t._u([{key:"head(id)",fn:function(){return[e("b-checkbox",{staticClass:"checkbox-outline-primary",attrs:{variant:"primary"},on:{change:function(e){return t.select_all1()}},model:{value:t.is_select_all1,callback:function(e){t.is_select_all1=e},expression:"is_select_all1"}})]},proxy:!0},{key:"cell(id)",fn:function(s){return[e("b-checkbox",{staticClass:"checkbox-outline-primary",attrs:{value:s.value,variant:"primary"},on:{change:t.check_select_all1},model:{value:t.selected_rows1,callback:function(e){t.selected_rows1=e},expression:"selected_rows1"}})]}},{key:"cell(thumb)",fn:function(t){return[e("img",{staticClass:"rounded-circle profile-img",attrs:{src:s("7584")("./"+t.item.thumb),alt:"avatar"}})]}},{key:"cell(status)",fn:function(s){return[e("b-badge",{attrs:{variant:s.value.class}},[t._v(t._s(s.value.key))])]}},{key:"cell(action)",fn:function(){return[e("b-dropdown",{staticClass:"custom-dropdown",attrs:{right:!0,variant:"icon-only","toggle-tag":"a"},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("svg",{staticClass:"feather feather-more-horizontal",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("circle",{attrs:{cx:"12",cy:"12",r:"1"}}),e("circle",{attrs:{cx:"19",cy:"12",r:"1"}}),e("circle",{attrs:{cx:"5",cy:"12",r:"1"}})])]},proxy:!0}])},[e("b-dropdown-item",[t._v("View")]),e("b-dropdown-item",[t._v("Edit")]),e("b-dropdown-item",[t._v("View Response")]),e("b-dropdown-item",[t._v("Delete")])],1)]},proxy:!0}])}),e("div",{staticClass:"table-footer"},[e("div",{staticClass:"dataTables_info"},[t._v("Showing "+t._s(t.meta1.total_items?t.meta1.start_index+1:0)+" to "+t._s(t.meta1.end_index+1)+" of "+t._s(t.meta1.total_items))]),e("div",{staticClass:"paginating-container pagination-solid flex-column align-items-right"},[e("b-pagination",{staticClass:"rounded",attrs:{"total-rows":t.table_option1.total_rows,"per-page":t.table_option1.page_size,"prev-text":"Prev","next-text":"Next","first-text":"First","last-text":"Last","first-class":"first","prev-class":"prev","next-class":"next","last-class":"last"},scopedSlots:t._u([{key:"first-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"}})])]},proxy:!0},{key:"prev-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])]},proxy:!0},{key:"next-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])]},proxy:!0},{key:"last-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"}})])]},proxy:!0}]),model:{value:t.table_option1.current_page,callback:function(e){t.$set(t.table_option1,"current_page",e)},expression:"table_option1.current_page"}})],1)])],1)])])]),t._m(2),e("div",{staticClass:"row layout-top-spacing"},[e("div",{staticClass:"col-xl-12 col-lg-12 col-sm-12 layout-spacing"},[e("div",{staticClass:"panel p-0"},[e("div",{staticClass:"custom-table table3"},[e("div",{staticClass:"table-header"},[e("div",{staticClass:"d-flex align-items-center"},[e("span",[t._v("Results :")]),e("span",{staticClass:"ml-2"},[e("b-select",{staticClass:"h-auto",model:{value:t.table_option2.page_size,callback:function(e){t.$set(t.table_option2,"page_size",e)},expression:"table_option2.page_size"}},[e("b-select-option",{attrs:{value:"5"}},[t._v("5")]),e("b-select-option",{attrs:{value:"10"}},[t._v("10")]),e("b-select-option",{attrs:{value:"20"}},[t._v("20")]),e("b-select-option",{attrs:{value:"50"}},[t._v("50")])],1)],1)]),e("div",{staticClass:"header-search"},[e("b-input",{attrs:{size:"sm",placeholder:"Search..."},model:{value:t.table_option2.search_text,callback:function(e){t.$set(t.table_option2,"search_text",e)},expression:"table_option2.search_text"}}),e("div",{staticClass:"search-image"},[e("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),e("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])],1)]),e("b-table",{ref:"basic_table2",attrs:{responsive:"",hover:"",items:t.items2,fields:t.columns2,"per-page":t.table_option2.page_size,"current-page":t.table_option2.current_page,filter:t.table_option2.search_text,"sort-by":"id","show-empty":!0},on:{filtered:t.on_filtered,"sort-changed":t.clear_selection},scopedSlots:t._u([{key:"cell(thumb)",fn:function(t){return[e("img",{staticClass:"rounded profile-img",attrs:{src:s("7584")("./"+t.item.thumb),alt:"avatar"}})]}},{key:"cell(status)",fn:function(s){return[e("b-badge",{attrs:{variant:s.value.class}},[t._v(t._s(s.value.key))])]}},{key:"cell(action)",fn:function(){return[e("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip"}],staticClass:"mr-1",attrs:{href:"javascript:void(0);",title:"Edit"}},[e("svg",{staticClass:"feather feather-edit-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}},[e("path",{attrs:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}})])]),e("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip"}],attrs:{href:"javascript:void(0);",title:"Delete"}},[e("svg",{staticClass:"feather feather-trash",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}},[e("polyline",{attrs:{points:"3 6 5 6 21 6"}}),e("path",{attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}})])])]},proxy:!0}])}),e("div",{staticClass:"table-footer"},[e("div",{staticClass:"dataTables_info"},[t._v("Showing "+t._s(t.meta2.total_items?t.meta2.start_index+1:0)+" to "+t._s(t.meta2.end_index+1)+" of "+t._s(t.meta2.total_items))]),e("div",{staticClass:"paginating-container pagination-solid flex-column align-items-right"},[e("b-pagination",{staticClass:"rounded",attrs:{"total-rows":t.table_option2.total_rows,"per-page":t.table_option2.page_size,"prev-text":"Prev","next-text":"Next","first-text":"First","last-text":"Last","first-class":"first","prev-class":"prev","next-class":"next","last-class":"last"},scopedSlots:t._u([{key:"first-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"}})])]},proxy:!0},{key:"prev-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])]},proxy:!0},{key:"next-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])]},proxy:!0},{key:"last-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"}})])]},proxy:!0}]),model:{value:t.table_option2.current_page,callback:function(e){t.$set(t.table_option2,"current_page",e)},expression:"table_option2.current_page"}})],1)])],1)])])])],1)},l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"seperator-header layout-top-spacing"},[e("h4",{},[t._v("Style 1")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"seperator-header layout-top-spacing"},[e("h4",{},[t._v("Style 2")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"seperator-header layout-top-spacing"},[e("h4",{},[t._v("Style 3")])])}],i={metaInfo:{title:"Bootstrap Custom Table"},data(){return{items:[],columns:[],table_option:{total_rows:0,current_page:1,page_size:5,search_text:""},meta:{},is_select_all:!1,selected_rows:[],items1:[],columns1:[],table_option1:{total_rows:0,current_page:1,page_size:5,search_text:""},meta1:{},is_select_all1:!1,selected_rows1:[],items2:[],columns2:[],table_option2:{total_rows:0,current_page:1,page_size:5,search_text:""},meta2:{},is_select_all2:!1,selected_rows2:[]}},watch:{table_option:{handler:function(){this.get_meta(),this.clear_selection()},deep:!0},table_option1:{handler:function(){this.get_meta1(),this.clear_selection1()},deep:!0},table_option2:{handler:function(){this.get_meta2(),this.clear_selection2()},deep:!0}},mounted(){this.bind_data()},methods:{bind_data(){this.columns=[{key:"id",label:"",thClass:"header-checkbox"},{key:"first_name",label:"First Name",sortable:!0},{key:"last_name",label:"Last Name",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"phone",label:"Mobile No.",sortable:!0},{key:"thumb",label:"Profile",class:"text-center w-90"},{key:"status",label:"Status"},{key:"action",label:"Actions",class:"actions text-center"}],this.items=[{id:1,thumb:"profile-9.jpeg",first_name:"Tiger",last_name:"Nixon",email:"tiger@gmail.com",phone:"555-555-5555",status:{key:"Approved",class:"primary"}},{id:2,thumb:"profile-11.jpeg",first_name:"Garrett",last_name:"Winters",email:"garrett@gmail.com",phone:"222-222-2222",status:{key:"Closed",class:"danger"}},{id:3,thumb:"profile-12.jpeg",first_name:"Ashton",last_name:"Cox",email:"ashton@gmail.com",phone:"333-333-3333",status:{key:"Suspended",class:"warning"}},{id:4,thumb:"profile-13.jpeg",first_name:"Cedric",last_name:"Kelly",email:"cedric@gmail.com",phone:"444-444-4444",status:{key:"Suspended",class:"warning"}},{id:5,thumb:"profile-14.jpeg",first_name:"Airi",last_name:"Satou",email:"airi@gmail.com",phone:"555-555-5555",status:{key:"Approved",class:"primary"}},{id:6,thumb:"profile-15.jpeg",first_name:"Brielle",last_name:"Williamson",email:"brielle@gmail.com",phone:"666-666-6666",status:{key:"Closed",class:"danger"}},{id:7,thumb:"profile-16.jpeg",first_name:"Herrod",last_name:"Chandler",email:"herrod@gmail.com",phone:"555-555-5555",status:{key:"Approved",class:"primary"}}],this.table_option.total_rows=this.items.length,this.get_meta(),this.columns1=[{key:"id",label:"",thClass:"header-checkbox"},{key:"thumb",label:"Profile",thClass:"w-90"},{key:"name",label:"Name",tdClass:"text-secondary font-weight-bold",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"phone",label:"Mobile No.",sortable:!0},{key:"status",label:"Status"},{key:"action",label:"Actions",class:"actions text-center"}],this.items1=[{id:1,thumb:"profile-9.jpeg",name:"Tiger Nixon",email:"tiger@gmail.com",phone:"555-555-5555",status:{key:"Approved",class:"primary"}},{id:2,thumb:"profile-11.jpeg",name:"Garrett Winters",email:"garrett@gmail.com",phone:"222-222-2222",status:{key:"Closed",class:"danger"}},{id:3,thumb:"profile-12.jpeg",name:"Ashton Cox",email:"ashton@gmail.com",phone:"333-333-3333",status:{key:"Suspended",class:"warning"}},{id:4,thumb:"profile-13.jpeg",name:"Cedric Kelly",email:"cedric@gmail.com",phone:"444-444-4444",status:{key:"Suspended",class:"warning"}},{id:5,thumb:"profile-14.jpeg",name:"Airi Satou",email:"airi@gmail.com",phone:"555-555-5555",status:{key:"Approved",class:"primary"}},{id:6,thumb:"profile-15.jpeg",name:"Brielle Williamson",email:"brielle@gmail.com",phone:"666-666-6666",status:{key:"Closed",class:"danger"}},{id:7,thumb:"profile-16.jpeg",name:"Herrod Chandler",email:"herrod@gmail.com",phone:"555-555-5555",status:{key:"Approved",class:"primary"}}],this.table_option1.total_rows=this.items1.length,this.get_meta1(),this.columns2=[{key:"id",label:"ID",sortable:!0},{key:"thumb",label:"Profile",thClass:"text-center w-90"},{key:"first_name",label:"First Name",sortable:!0},{key:"last_name",label:"Last Name",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"phone",label:"Mobile No.",sortable:!0},{key:"status",label:"Status"},{key:"action",label:"Actions",class:"actions text-center"}],this.items2=[{id:1,thumb:"profile-9.jpeg",first_name:"Tiger",last_name:"Nixon",email:"tiger@gmail.com",phone:"555-555-5555",status:{key:"Approved",class:"primary"}},{id:2,thumb:"profile-11.jpeg",first_name:"Garrett",last_name:"Winters",email:"garrett@gmail.com",phone:"222-222-2222",status:{key:"Closed",class:"danger"}},{id:3,thumb:"profile-12.jpeg",first_name:"Ashton",last_name:"Cox",email:"ashton@gmail.com",phone:"333-333-3333",status:{key:"Suspended",class:"warning"}},{id:4,thumb:"profile-13.jpeg",first_name:"Cedric",last_name:"Kelly",email:"cedric@gmail.com",phone:"444-444-4444",status:{key:"Suspended",class:"warning"}},{id:5,thumb:"profile-14.jpeg",first_name:"Airi",last_name:"Satou",email:"airi@gmail.com",phone:"555-555-5555",status:{key:"Approved",class:"primary"}},{id:6,thumb:"profile-15.jpeg",first_name:"Brielle",last_name:"Williamson",email:"brielle@gmail.com",phone:"666-666-6666",status:{key:"Closed",class:"danger"}},{id:7,thumb:"profile-16.jpeg",first_name:"Herrod",last_name:"Chandler",email:"herrod@gmail.com",phone:"555-555-5555",status:{key:"Approved",class:"primary"}}],this.table_option2.total_rows=this.items2.length,this.get_meta2()},on_filtered(t){this.refresh_table(t.length)},refresh_table(t){this.table_option.total_rows=t,this.table_option.currentPage=1},get_meta(){this.meta=this.get_common_meta(this.table_option)},get_common_meta(t){var e,s,a=t.page_size<1?1:Math.ceil(t.total_rows/t.page_size);a=Math.max(a||0,1);var l=5,i="undefined"!==typeof l&&l<a;i?(e=Math.max(t.current_page-Math.floor(l/2),1),s=e+l-1,s>a&&(s=a,e=s-l+1)):(e=1,s=a);let r=(t.current_page-1)*t.page_size,o=Math.min(r+t.page_size-1,t.total_rows-1);var n=Array.from(Array(s+1-e).keys()).map(t=>e+t);return{total_items:t.total_rows,current_page:t.current_page,page_size:t.page_size,total_pages:a,start_page:e,end_page:s,start_index:r,end_index:o,pages:n}},select_all(){this.selected_rows=this.$refs.basic_table.paginatedItems.map(t=>t.id),this.is_select_all||this.clear_selection(),this.check_select_all()},check_select_all(){let t=this.$refs.basic_table.paginatedItems.map(t=>t.id);this.is_select_all=!1,t.length==this.selected_rows.length&&(this.is_select_all=!0)},clear_selection(){this.is_select_all=!1,this.selected_rows=[]},on_filtered1(t){this.refresh_table1(t.length)},refresh_table1(t){this.table_option1.total_rows=t,this.table_option1.currentPage=1},get_meta1(){this.meta1=this.get_common_meta(this.table_option1)},select_all1(){this.selected_rows1=this.$refs.basic_table1.paginatedItems.map(t=>t.id),this.is_select_all1||this.clear_selection1(),this.check_select_all1()},check_select_all1(){let t=this.$refs.basic_table1.paginatedItems.map(t=>t.id);this.is_select_all1=!1,t.length==this.selected_rows1.length&&(this.is_select_all1=!0)},clear_selection1(){this.is_select_all1=!1,this.selected_rows1=[]},on_filtered2(t){this.refresh_table2(t.length)},refresh_table2(t){this.table_option2.total_rows=t,this.table_option2.currentPage=1},get_meta2(){this.meta2=this.get_common_meta(this.table_option2)},select_all2(){this.selected_rows2=this.$refs.basic_table2.paginatedItems.map(t=>t.id),this.is_select_all2||this.clear_selection2(),this.check_select_all2()},check_select_all2(){let t=this.$refs.basic_table2.paginatedItems.map(t=>t.id);this.is_select_all2=!1,t.length==this.selected_rows2.length&&(this.is_select_all2=!0)},clear_selection2(){this.is_select_all2=!1,this.selected_rows2=[]}}},r=i,o=(s("44a2"),s("2877")),n=Object(o["a"])(r,a,l,!1,null,null,null);e["default"]=n.exports},"44a2":function(t,e,s){"use strict";s("759d")},"759d":function(t,e,s){}}]);
//# sourceMappingURL=tables-custom.296b1dd6.js.map