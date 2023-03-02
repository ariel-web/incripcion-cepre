(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["elements-pagination"],{"06f2":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("portal",{attrs:{to:"breadcrumb"}},[e("ul",{staticClass:"navbar-nav flex-row"},[e("li",[e("div",{staticClass:"page-header"},[e("nav",{staticClass:"breadcrumb-one",attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("a",{attrs:{href:"javascript:;"}},[t._v("Elements")])]),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e("span",[t._v("Pagination")])])])])])])])]),e("div",{staticClass:"container"},[e("div",{staticClass:"nav sidenav"},[e("scrollactive",{staticClass:"sidenav-content",attrs:{tag:"div","active-class":"active",offset:120,modifyUrl:!1,highlightFirstItem:!0}},[e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#paginationDefault"}},[t._v("Default")]),e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#paginationSolid"}},[t._v("Solid")]),e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#paginationIcons"}},[t._v("Icons")]),e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#paginationNo-spacing"}},[t._v("No Spacing")])])],1),e("div",{staticClass:"row layout-top-spacing"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"},[e("svg",{staticClass:"feather feather-bell",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("path",{attrs:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}}),e("path",{attrs:{d:"M13.73 21a2 2 0 0 1-3.46 0"}})]),t._v(" Documentation: "),e("a",{staticClass:"text-info",attrs:{target:"_blank",href:"https://bootstrap-vue.org/docs/components/pagination"}},[t._v(" https://bootstrap-vue.org/docs/components/pagination ")])])])]),e("div",{staticClass:"row layout-top-spacing",attrs:{id:"cancel-row"}},[e("div",{staticClass:"col-xl-12 col-sm-12 layout-spacing",attrs:{id:"paginationDefault"}},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(0),e("div",{staticClass:"panel-body text-center"},[e("div",{staticClass:"paginating-container pagination-default flex-column align-items-center"},[e("b-pagination",{staticClass:"mb-4",attrs:{value:2,"total-rows":9,"per-page":3,"prev-text":"Prev","next-text":"Next","first-text":"First","last-text":"Last"}}),e("b-pagination",{attrs:{value:2,"total-rows":9,"per-page":3,"prev-text":"Prev","next-text":"Next","first-number":"","last-number":""}})],1),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code1")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code1")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v('<b-pagination :value="2" :total-rows="9" :per-page="3" prev-text="Prev" next-text="Next" first-text="First" last-text="Last" class="mb-4"></b-pagination>\n\n<b-pagination :value="2" :total-rows="9" :per-page="3" prev-text="Prev" next-text="Next" first-number last-number></b-pagination>\n')])])],1):t._e()],1)])])]),e("div",{staticClass:"col-xl-12 col-sm-12 layout-spacing",attrs:{id:"paginationSolid"}},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(1),e("div",{staticClass:"panel-body text-center"},[e("div",{staticClass:"paginating-container pagination-solid flex-column align-items-center"},[e("b-pagination",{staticClass:"mb-4",attrs:{value:2,"total-rows":9,"per-page":3,"prev-text":"Prev","next-text":"Next","first-text":"First","last-text":"Last","first-class":"first","prev-class":"prev","next-class":"next","last-class":"last"}}),e("b-pagination",{attrs:{value:2,"total-rows":9,"per-page":3,"prev-text":"Prev","next-text":"Next","prev-class":"prev","next-class":"next","first-number":"","last-number":""}})],1),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code2")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code2")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v('<b-pagination :value="2" :total-rows="9" :per-page="3" prev-text="Prev" next-text="Next" first-text="First" last-text="Last" first-class="first" prev-class="prev" next-class="next" last-class="last" class="mb-4"></b-pagination>\n                                \n<b-pagination :value="2" :total-rows="9" :per-page="3" prev-text="Prev" next-text="Next" prev-class="prev" next-class="next" first-number last-number></b-pagination>\n')])])],1):t._e()],1)])])]),e("div",{staticClass:"col-xl-12 col-sm-12 layout-spacing",attrs:{id:"paginationIcons"}},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(2),e("div",{staticClass:"panel-body text-center"},[e("div",{staticClass:"paginating-container pagination-solid flex-column align-items-center"},[e("b-pagination",{staticClass:"mb-4",attrs:{value:2,"total-rows":9,"per-page":3,"first-class":"first","prev-class":"prev","next-class":"next","last-class":"last"},scopedSlots:t._u([{key:"first-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"}})])]},proxy:!0},{key:"prev-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])]},proxy:!0},{key:"next-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])]},proxy:!0},{key:"last-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"}})])]},proxy:!0}])}),e("b-pagination",{attrs:{value:2,"total-rows":9,"per-page":3,"prev-class":"prev","next-class":"next","first-number":"","last-number":""},scopedSlots:t._u([{key:"prev-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])]},proxy:!0},{key:"next-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])]},proxy:!0}])})],1),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code3")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code3")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v('<b-pagination :value="2" :total-rows="9" :per-page="3" first-class="first" prev-class="prev" next-class="next" last-class="last" class="mb-4">\n    <template #first-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>\n    </template>\n    <template #prev-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>\n    </template>\n    <template #next-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>\n    </template>\n    <template #last-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>\n    </template>\n</b-pagination>\n                                \n<b-pagination :value="2" :total-rows="9" :per-page="3" prev-class="prev" next-class="next" first-number last-number>\n    <template #prev-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>\n    </template>\n    <template #next-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>\n    </template>\n</b-pagination>\n')])])],1):t._e()],1)])])]),e("div",{staticClass:"col-xl-12 col-sm-12 layout-spacing",attrs:{id:"paginationIconsrounded"}},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(3),e("div",{staticClass:"panel-body text-center"},[e("div",{staticClass:"paginating-container pagination-solid flex-column align-items-center"},[e("b-pagination",{staticClass:"mb-4 rounded",attrs:{value:2,"total-rows":9,"per-page":3,"first-class":"first","prev-class":"prev","next-class":"next","last-class":"last"},scopedSlots:t._u([{key:"first-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"}})])]},proxy:!0},{key:"prev-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])]},proxy:!0},{key:"next-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])]},proxy:!0},{key:"last-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"}})])]},proxy:!0}])}),e("b-pagination",{staticClass:"rounded",attrs:{value:2,"total-rows":9,"per-page":3,"prev-class":"prev","next-class":"next","first-number":"","last-number":""},scopedSlots:t._u([{key:"prev-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])]},proxy:!0},{key:"next-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])]},proxy:!0}])})],1),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code5")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code5")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v('<b-pagination :value="2" :total-rows="9" :per-page="3" first-class="first" prev-class="prev" next-class="next" last-class="last" class="mb-4 rounded">\n    <template #first-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>\n    </template>\n    <template #prev-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>\n    </template>\n    <template #next-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>\n    </template>\n    <template #last-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>\n    </template>\n</b-pagination>\n                                \n<b-pagination :value="2" :total-rows="9" :per-page="3" prev-class="prev" next-class="next" first-number last-number class="rounded">\n    <template #prev-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>\n    </template>\n    <template #next-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>\n    </template>\n</b-pagination>\n')])])],1):t._e()],1)])])]),e("div",{staticClass:"col-xl-12 col-sm-12 layout-spacing",attrs:{id:"paginationNo-spacing"}},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(4),e("div",{staticClass:"panel-body text-center"},[e("div",{staticClass:"paginating-container pagination-no_spacing flex-column align-items-center"},[e("b-pagination",{staticClass:"mb-4",attrs:{value:2,"total-rows":9,"per-page":3,"first-class":"first","prev-class":"prev","next-class":"next","last-class":"last"},scopedSlots:t._u([{key:"first-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"}})])]},proxy:!0},{key:"prev-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])]},proxy:!0},{key:"next-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])]},proxy:!0},{key:"last-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"}})])]},proxy:!0}])}),e("b-pagination",{attrs:{value:2,"total-rows":9,"per-page":3,"prev-class":"prev","next-class":"next","first-number":"","last-number":""},scopedSlots:t._u([{key:"prev-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])]},proxy:!0},{key:"next-text",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])]},proxy:!0}])})],1),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code4")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code4")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v('<b-pagination :value="2" :total-rows="9" :per-page="3" class="mb-4" first-class="first" prev-class="prev" next-class="next" last-class="last">\n    <template #first-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>\n    </template>\n    <template #prev-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>\n    </template>\n    <template #next-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>\n    </template>\n    <template #last-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>\n    </template>\n</b-pagination>\n\n<b-pagination :value="2" :total-rows="9" :per-page="3" prev-class="prev" next-class="next" first-number last-number>\n    <template #prev-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>\n    </template>\n    <template #next-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>\n    </template>\n</b-pagination>\n')])])],1):t._e()],1)])])])])])],1)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("Default")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("Solid")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("With Icons")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("With Icons and Rounded ")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("No Spacing")])])])])}],r=(s("14d9"),s("0706"),s("e706")),a={metaInfo:{title:"Pagination"},components:{highlight:r["a"]},data(){return{code_arr:[],rows:9,perPage:3,currentPage:2}},mounted(){},methods:{toggleCode(t){this.code_arr.includes(t)?this.code_arr=this.code_arr.filter(e=>e!=t):this.code_arr.push(t)}}},i=a,l=s("2877"),c=Object(l["a"])(i,n,o,!1,null,null,null);e["default"]=c.exports},"0706":function(t,e,s){}}]);
//# sourceMappingURL=elements-pagination.af300bdb.js.map