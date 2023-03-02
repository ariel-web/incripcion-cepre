(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["elements-dropdown"],{"0706":function(t,o,n){},"3d6e":function(t,o,n){"use strict";n.r(o);var e=function(){var t=this,o=t._self._c;return o("div",{staticClass:"container"},[o("portal",{attrs:{to:"breadcrumb"}},[o("ul",{staticClass:"navbar-nav flex-row"},[o("li",[o("div",{staticClass:"page-header"},[o("nav",{staticClass:"breadcrumb-one",attrs:{"aria-label":"breadcrumb"}},[o("ol",{staticClass:"breadcrumb"},[o("li",{staticClass:"breadcrumb-item"},[o("a",{attrs:{href:"javascript:;"}},[t._v("Elements")])]),o("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[o("span",[t._v("Dropdown")])])])])])])])]),o("div",{staticClass:"container"},[o("div",{staticClass:"nav sidenav"},[o("scrollactive",{staticClass:"sidenav-content",attrs:{tag:"div","active-class":"active",offset:120,modifyUrl:!1,highlightFirstItem:!0}},[o("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#dropdownBasic"}},[t._v("Basic")]),o("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#dropdownDirections"}},[t._v("Directions")]),o("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#dropdownSizes"}},[t._v("Sizes")]),o("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#dropdownGrouped"}},[t._v("Grouped")]),o("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#dropdownSplit"}},[t._v("Split")]),o("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#dropdownCustom"}},[t._v("Custom")])])],1),o("div",{staticClass:"row layout-top-spacing"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"},[o("svg",{staticClass:"feather feather-bell",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("path",{attrs:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}}),o("path",{attrs:{d:"M13.73 21a2 2 0 0 1-3.46 0"}})]),t._v(" Documentation: "),o("a",{staticClass:"text-info",attrs:{target:"_blank",href:"https://bootstrap-vue.org/docs/components/dropdown"}},[t._v(" https://bootstrap-vue.org/docs/components/dropdown ")])])])]),o("div",{staticClass:"row layout-top-spacing"},[o("div",{staticClass:"col-lg-12 layout-spacing",attrs:{id:"dropdownBasic"}},[o("div",{staticClass:"statbox panel box box-shadow"},[t._m(0),o("div",{staticClass:"panel-body text-center split-buttons"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6"},[o("b-dropdown",{staticClass:"mb-4 mr-2 custom-dropdown",attrs:{variant:"primary"},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v(" Action "),o("svg",{staticClass:"feather feather-chevron-down",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("polyline",{attrs:{points:"6 9 12 15 18 9"}})])]},proxy:!0}])},[o("b-dropdown-item",[t._v("Action")]),o("b-dropdown-item",[t._v("Another action")]),o("b-dropdown-item",[t._v("Something else here")]),o("b-dropdown-item",[t._v("Separated link")])],1)],1),o("div",{staticClass:"col-lg-6"},[o("b-dropdown",{staticClass:"mb-4 mr-2 custom-dropdown",attrs:{variant:"outline-primary"},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v(" Action "),o("svg",{staticClass:"feather feather-chevron-down",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("polyline",{attrs:{points:"6 9 12 15 18 9"}})])]},proxy:!0}])},[o("b-dropdown-item",[t._v("Action")]),o("b-dropdown-item",[t._v("Another action")]),o("b-dropdown-item",[t._v("Something else here")]),o("b-dropdown-item",[t._v("Separated link")])],1)],1)])])]),o("div",{staticClass:"code-section-container show-code"},[o("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(o){return t.toggleCode("code1")}}},[o("span",[t._v("Code")])]),t.code_arr.includes("code1")?o("div",{staticClass:"code-section text-left"},[o("highlight",[o("pre",[t._v('<b-dropdown variant="primary" class="mb-4 mr-2">\n    <template #button-content>\n        Action\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>\n    </template>\n    <b-dropdown-item>Action</b-dropdown-item>\n    <b-dropdown-item>Another action</b-dropdown-item>\n    <b-dropdown-item>Something else here</b-dropdown-item>\n    <b-dropdown-item>Separated link</b-dropdown-item>\n</b-dropdown>\n\n<b-dropdown variant="outline-primary" class="mb-4 mr-2">\n    <template #button-content>\n        Action\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>\n    </template>\n    <b-dropdown-item>Action</b-dropdown-item>\n    <b-dropdown-item>Another action</b-dropdown-item>\n    <b-dropdown-item>Something else here</b-dropdown-item>\n    <b-dropdown-item>Separated link</b-dropdown-item>\n</b-dropdown>\n')])])],1):t._e()],1)])])]),o("div",{staticClass:"col-lg-12 layout-spacing",attrs:{id:"dropdownDirections"}},[o("div",{staticClass:"statbox panel box box-shadow"},[t._m(1),o("div",{staticClass:"panel-body text-center split-buttons"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6"},[o("b-dropdown",{staticClass:"mb-4 mr-2 custom-dropdown",attrs:{variant:"info",dropup:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v(" Up "),o("svg",{staticClass:"feather feather-chevron-up",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("polyline",{attrs:{points:"18 15 12 9 6 15"}})])]},proxy:!0}])},[o("b-dropdown-item",[t._v("Action")]),o("b-dropdown-item",[t._v("Another action")]),o("b-dropdown-item",[t._v("Something else here")]),o("b-dropdown-item",[t._v("Separated link")])],1)],1),o("div",{staticClass:"col-lg-6"},[o("b-dropdown",{staticClass:"mb-4 mr-2 custom-dropdown",attrs:{variant:"outline-info",dropup:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v(" Up "),o("svg",{staticClass:"feather feather-chevron-up",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("polyline",{attrs:{points:"18 15 12 9 6 15"}})])]},proxy:!0}])},[o("b-dropdown-item",[t._v("Action")]),o("b-dropdown-item",[t._v("Another action")]),o("b-dropdown-item",[t._v("Something else here")]),o("b-dropdown-item",[t._v("Separated link")])],1)],1)])])])])])]),o("div",{staticClass:"col-lg-12 layout-spacing"},[o("div",{staticClass:"statbox panel box box-shadow"},[t._m(2),o("div",{staticClass:"panel-body text-center split-buttons"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6"},[o("b-dropdown",{staticClass:"mb-4 mr-2 custom-dropdown",attrs:{variant:"warning",dropright:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v(" Right "),o("svg",{staticClass:"feather feather-chevron-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("polyline",{attrs:{points:"9 18 15 12 9 6"}})])]},proxy:!0}])},[o("b-dropdown-item",[t._v("Action")]),o("b-dropdown-item",[t._v("Another action")]),o("b-dropdown-item",[t._v("Something else here")]),o("b-dropdown-item",[t._v("Separated link")])],1)],1),o("div",{staticClass:"col-lg-6"},[o("b-dropdown",{staticClass:"mb-4 mr-2 custom-dropdown",attrs:{variant:"outline-warning",dropright:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v(" Right "),o("svg",{staticClass:"feather feather-chevron-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("polyline",{attrs:{points:"9 18 15 12 9 6"}})])]},proxy:!0}])},[o("b-dropdown-item",[t._v("Action")]),o("b-dropdown-item",[t._v("Another action")]),o("b-dropdown-item",[t._v("Something else here")]),o("b-dropdown-item",[t._v("Separated link")])],1)],1)])])])])])]),o("div",{staticClass:"col-lg-12 layout-spacing"},[o("div",{staticClass:"statbox panel box box-shadow"},[t._m(3),o("div",{staticClass:"panel-body text-center split-buttons"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6"},[o("b-dropdown",{staticClass:"mb-4 mr-2 custom-dropdown",attrs:{variant:"danger",dropleft:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[o("svg",{staticClass:"feather feather-chevron-left",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("polyline",{attrs:{points:"15 18 9 12 15 6"}})]),t._v(" Left ")]},proxy:!0}])},[o("b-dropdown-item",[t._v("Action")]),o("b-dropdown-item",[t._v("Another action")]),o("b-dropdown-item",[t._v("Something else here")]),o("b-dropdown-item",[t._v("Separated link")])],1)],1),o("div",{staticClass:"col-lg-6"},[o("b-dropdown",{staticClass:"mb-4 mr-2 custom-dropdown",attrs:{variant:"outline-danger",dropleft:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[o("svg",{staticClass:"feather feather-chevron-left",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("polyline",{attrs:{points:"15 18 9 12 15 6"}})]),t._v(" Left ")]},proxy:!0}])},[o("b-dropdown-item",[t._v("Action")]),o("b-dropdown-item",[t._v("Another action")]),o("b-dropdown-item",[t._v("Something else here")]),o("b-dropdown-item",[t._v("Separated link")])],1)],1)])])])])])]),o("div",{staticClass:"col-lg-12 layout-spacing",attrs:{id:"dropdownSizes"}},[o("div",{staticClass:"statbox panel box box-shadow"},[t._m(4),o("div",{staticClass:"panel-body text-center split-buttons"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6"},[o("b-dropdown",{staticClass:"mb-4 mr-2 custom-dropdown",attrs:{variant:"dark",size:"sm"},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v(" Small button "),o("svg",{staticClass:"feather feather-chevron-down",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("polyline",{attrs:{points:"6 9 12 15 18 9"}})])]},proxy:!0}])},[o("b-dropdown-item",[t._v("Action")]),o("b-dropdown-item",[t._v("Another action")]),o("b-dropdown-item",[t._v("Something else here")]),o("b-dropdown-item",[t._v("Separated link")])],1)],1),o("div",{staticClass:"col-lg-6"},[o("b-dropdown",{staticClass:"mb-4 mr-2 custom-dropdown",attrs:{variant:"outline-dark",size:"sm"},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v(" Small button "),o("svg",{staticClass:"feather feather-chevron-down",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("polyline",{attrs:{points:"6 9 12 15 18 9"}})])]},proxy:!0}])},[o("b-dropdown-item",[t._v("Action")]),o("b-dropdown-item",[t._v("Another action")]),o("b-dropdown-item",[t._v("Something else here")]),o("b-dropdown-item",[t._v("Separated link")])],1)],1)])])])])])]),o("div",{staticClass:"col-lg-12 layout-spacing"},[o("div",{staticClass:"statbox panel box box-shadow"},[t._m(5),o("div",{staticClass:"panel-body text-center split-buttons"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6"},[o("b-dropdown",{staticClass:"mb-4 mr-2 custom-dropdown",attrs:{variant:"success",size:"lg"},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v(" Large button "),o("svg",{staticClass:"feather feather-chevron-down",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("polyline",{attrs:{points:"6 9 12 15 18 9"}})])]},proxy:!0}])},[o("b-dropdown-item",[t._v("Action")]),o("b-dropdown-item",[t._v("Another action")]),o("b-dropdown-item",[t._v("Something else here")]),o("b-dropdown-item",[t._v("Separated link")])],1)],1),o("div",{staticClass:"col-lg-6"},[o("b-dropdown",{staticClass:"mb-4 mr-2 custom-dropdown",attrs:{variant:"outline-success",size:"lg"},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v(" Large button "),o("svg",{staticClass:"feather feather-chevron-down",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("polyline",{attrs:{points:"6 9 12 15 18 9"}})])]},proxy:!0}])},[o("b-dropdown-item",[t._v("Action")]),o("b-dropdown-item",[t._v("Another action")]),o("b-dropdown-item",[t._v("Something else here")]),o("b-dropdown-item",[t._v("Separated link")])],1)],1)])])])])])]),o("div",{staticClass:"col-lg-12 layout-spacing",attrs:{id:"dropdownGrouped"}},[o("div",{staticClass:"statbox panel box box-shadow"},[t._m(6),o("div",{staticClass:"panel-body text-center split-buttons"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6"},[o("b-button-group",{staticClass:"mb-4 mr-2"},[o("b-button",{attrs:{variant:"secondary"}},[t._v("1")]),o("b-button",{attrs:{variant:"secondary"}},[t._v("2")]),o("b-button-group",[o("b-dropdown",{staticClass:"custom-dropdown",attrs:{variant:"secondary"},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v(" Dropdown "),o("svg",{staticClass:"feather feather-chevron-down",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("polyline",{attrs:{points:"6 9 12 15 18 9"}})])]},proxy:!0}])},[o("b-dropdown-item",{attrs:{href:"#"}},[t._v("Dropdown link")]),o("b-dropdown-item",{attrs:{href:"#"}},[t._v("Dropdown link")])],1)],1)],1)],1),o("div",{staticClass:"col-lg-6"},[o("b-button-group",{staticClass:"mb-4 mr-2"},[o("b-button",{attrs:{variant:"outline-secondary"}},[t._v("1")]),o("b-button",{attrs:{variant:"outline-secondary"}},[t._v("2")]),o("b-button-group",[o("b-dropdown",{staticClass:"custom-dropdown",attrs:{variant:"outline-secondary"},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v(" Dropdown "),o("svg",{staticClass:"feather feather-chevron-down",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("polyline",{attrs:{points:"6 9 12 15 18 9"}})])]},proxy:!0}])},[o("b-dropdown-item",{attrs:{href:"#"}},[t._v("Dropdown link")]),o("b-dropdown-item",{attrs:{href:"#"}},[t._v("Dropdown link")])],1)],1)],1)],1)]),o("div",{staticClass:"code-section-container show-code"},[o("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(o){return t.toggleCode("code2")}}},[o("span",[t._v("Code")])]),t.code_arr.includes("code2")?o("div",{staticClass:"code-section text-left"},[o("highlight",[o("pre",[t._v('<b-button-group class="mb-4 mr-2 custom-dropdown">\n    <b-button variant="secondary">1</b-button>\n    <b-button variant="secondary">2</b-button>\n    <b-button-group>\n        <b-dropdown variant="secondary">\n            <template #button-content>\n                Dropdown\n                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>\n            </template>\n            <b-dropdown-item href="#">Dropdown link</b-dropdown-item>\n            <b-dropdown-item href="#">Dropdown link</b-dropdown-item>\n        </b-dropdown>\n    </b-button-group>\n</b-button-group>\n\n<b-button-group class="mb-4 mr-2 custom-dropdown">\n    <b-button variant="outline-secondary">1</b-button>\n    <b-button variant="outline-secondary">2</b-button>\n    <b-button-group>\n        <b-dropdown variant="outline-secondary">\n            <template #button-content>\n                Dropdown\n                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>\n            </template>\n            <b-dropdown-item href="#">Dropdown link</b-dropdown-item>\n            <b-dropdown-item href="#">Dropdown link</b-dropdown-item>\n        </b-dropdown>\n    </b-button-group>\n</b-button-group>\n')])])],1):t._e()],1)])])])])]),o("div",{staticClass:"col-lg-12 layout-spacing",attrs:{id:"dropdownSplit"}},[o("div",{staticClass:"statbox panel box box-shadow"},[t._m(7),o("div",{staticClass:"panel-body text-center split-buttons"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6"},[o("b-dropdown",{staticClass:"mb-4 mr-2 custom-dropdown",attrs:{variant:"primary",split:!0,text:"Action"}},[o("b-dropdown-item",[t._v("Action")]),o("b-dropdown-item",[t._v("Another action")]),o("b-dropdown-item",[t._v("Something else here")]),o("b-dropdown-item",[t._v("Separated link")])],1)],1),o("div",{staticClass:"col-lg-6"},[o("b-dropdown",{staticClass:"mb-4 mr-2 custom-dropdown",attrs:{variant:"outline-primary",split:!0,text:"Action"}},[o("b-dropdown-item",[t._v("Action")]),o("b-dropdown-item",[t._v("Another action")]),o("b-dropdown-item",[t._v("Something else here")]),o("b-dropdown-item",[t._v("Separated link")])],1)],1)])])]),o("div",{staticClass:"code-section-container show-code"},[o("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(o){return t.toggleCode("code3")}}},[o("span",[t._v("Code")])]),t.code_arr.includes("code3")?o("div",{staticClass:"code-section text-left"},[o("highlight",[o("pre",[t._v('<b-dropdown variant="primary" :split="true" text="Action" class="mb-4 mr-2 custom-dropdown">\n    <b-dropdown-item>Action</b-dropdown-item>\n    <b-dropdown-item>Another action</b-dropdown-item>\n    <b-dropdown-item>Something else here</b-dropdown-item>\n    <b-dropdown-item>Separated link</b-dropdown-item>\n</b-dropdown>\n\n<b-dropdown variant="outline-primary" :split="true" text="Action" class="mb-4 mr-2 custom-dropdown">\n    <b-dropdown-item>Action</b-dropdown-item>\n    <b-dropdown-item>Another action</b-dropdown-item>\n    <b-dropdown-item>Something else here</b-dropdown-item>\n    <b-dropdown-item>Separated link</b-dropdown-item>\n</b-dropdown>\n')])])],1):t._e()],1)])])]),o("div",{staticClass:"col-lg-12 layout-spacing",attrs:{id:"dropdownCustom"}},[o("div",{staticClass:"statbox panel box box-shadow"},[t._m(8),o("div",{staticClass:"panel-body text-center"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-3 col-sm-3 col-3 mb-5"},[o("b-dropdown",{staticClass:"mb-4 mr-2 custom-dropdown",attrs:{variant:"icon-only","toggle-tag":"a"},scopedSlots:t._u([{key:"button-content",fn:function(){return[o("svg",{staticClass:"feather feather-more-vertical",staticStyle:{width:"24px",height:"24px"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("circle",{attrs:{cx:"12",cy:"12",r:"1"}}),o("circle",{attrs:{cx:"12",cy:"5",r:"1"}}),o("circle",{attrs:{cx:"12",cy:"19",r:"1"}})])]},proxy:!0}])},[o("b-dropdown-item",[t._v("Action")]),o("b-dropdown-item",[t._v("Another action")]),o("b-dropdown-item",[t._v("Something else here")]),o("b-dropdown-item",[t._v("Separated link")])],1)],1),o("div",{staticClass:"col-md-3 col-sm-3 col-3 mb-5"},[o("b-dropdown",{staticClass:"mb-4 mr-2 custom-dropdown",attrs:{variant:"icon-only","toggle-tag":"a"},scopedSlots:t._u([{key:"button-content",fn:function(){return[o("svg",{staticClass:"feather feather-more-horizontal",staticStyle:{width:"24px",height:"24px"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("circle",{attrs:{cx:"12",cy:"12",r:"1"}}),o("circle",{attrs:{cx:"19",cy:"12",r:"1"}}),o("circle",{attrs:{cx:"5",cy:"12",r:"1"}})])]},proxy:!0}])},[o("b-dropdown-item",[t._v("Action")]),o("b-dropdown-item",[t._v("Another action")]),o("b-dropdown-item",[t._v("Something else here")]),o("b-dropdown-item",[t._v("Separated link")])],1)],1),o("div",{staticClass:"col-md-3 col-sm-3 col-3 mb-5"},[o("b-dropdown",{staticClass:"mb-4 mr-2 custom-dropdown",attrs:{variant:"icon-only","toggle-tag":"a"},scopedSlots:t._u([{key:"button-content",fn:function(){return[o("svg",{staticClass:"feather feather-more-vertical",staticStyle:{width:"24px",height:"24px"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("circle",{attrs:{cx:"12",cy:"12",r:"1"}}),o("circle",{attrs:{cx:"12",cy:"5",r:"1"}}),o("circle",{attrs:{cx:"12",cy:"19",r:"1"}})])]},proxy:!0}])},[o("b-dropdown-item",[t._v("Action")]),o("b-dropdown-item",[t._v("Another action")]),o("b-dropdown-item",[t._v("Something else here")]),o("b-dropdown-item",[t._v("Separated link")])],1)],1),o("div",{staticClass:"col-md-3 col-sm-3 col-3 mb-5"},[o("b-dropdown",{staticClass:"mb-4 mr-2 custom-dropdown",attrs:{variant:"icon-only","toggle-tag":"a",right:!0},scopedSlots:t._u([{key:"button-content",fn:function(){return[o("svg",{staticClass:"feather feather-more-horizontal",staticStyle:{width:"24px",height:"24px"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("circle",{attrs:{cx:"12",cy:"12",r:"1"}}),o("circle",{attrs:{cx:"19",cy:"12",r:"1"}}),o("circle",{attrs:{cx:"5",cy:"12",r:"1"}})])]},proxy:!0}])},[o("b-dropdown-item",[t._v("Action")]),o("b-dropdown-item",[t._v("Another action")]),o("b-dropdown-item",[t._v("Something else here")]),o("b-dropdown-item",[t._v("Separated link")])],1)],1)]),o("div",{staticClass:"code-section-container show-code"},[o("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(o){return t.toggleCode("code4")}}},[o("span",[t._v("Code")])]),t.code_arr.includes("code4")?o("div",{staticClass:"code-section text-left"},[o("highlight",[o("pre",[t._v('<b-dropdown variant="icon-only" toggle-tag="a" class="mb-4 mr-2 custom-dropdown">\n    <template #button-content>\n        <svg xmlns="http://www.w3.org/2000/svg" style="width:24px;height:24px;" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>\n    </template>\n    <b-dropdown-item>Action</b-dropdown-item>\n    <b-dropdown-item>Another action</b-dropdown-item>\n    <b-dropdown-item>Something else here</b-dropdown-item>\n    <b-dropdown-item>Separated link</b-dropdown-item>\n</b-dropdown>\n')])])],1):t._e()],1)])])])])])],1)},s=[function(){var t=this,o=t._self._c;return o("div",{staticClass:"panel-heading"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",[t._v(" Dropdown ")])])])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"panel-heading"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",[t._v("Dropup ")])])])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"panel-heading"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",[t._v("Dropright ")])])])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"panel-heading"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",[t._v("Dropleft ")])])])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"panel-heading"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",[t._v("Small Button ")])])])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"panel-heading"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",[t._v("Large Button ")])])])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"panel-heading"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",[t._v("Grouped Dropdown Buttons")])])])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"panel-heading"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",[t._v(" Split ")])])])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"panel-heading"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",[t._v("Custom Dropdown")])])])])}],r=(n("14d9"),n("0706"),n("e706")),i={metaInfo:{title:"Dropdown"},components:{highlight:r["a"]},data(){return{code_arr:[]}},mounted(){},methods:{toggleCode(t){this.code_arr.includes(t)?this.code_arr=this.code_arr.filter(o=>o!=t):this.code_arr.push(t)}}},a=i,d=n("2877"),l=Object(d["a"])(a,e,s,!1,null,null,null);o["default"]=l.exports}}]);
//# sourceMappingURL=elements-dropdown.fc768ae7.js.map