(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["forms-quill-editor"],{"0706":function(t,e,i){},"29e9":function(t,e,i){"use strict";i("567b")},"567b":function(t,e,i){},ac54:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("portal",{attrs:{to:"breadcrumb"}},[e("ul",{staticClass:"navbar-nav flex-row"},[e("li",[e("div",{staticClass:"page-header"},[e("nav",{staticClass:"breadcrumb-one",attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("a",{attrs:{href:"javascript:;"}},[t._v("Forms")])]),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e("span",[t._v("Quill Editor")])])])])])])])]),e("div",{staticClass:"container"},[e("div",{staticClass:"nav sidenav"},[e("scrollactive",{staticClass:"sidenav-content",attrs:{tag:"div","active-class":"active",offset:120,modifyUrl:!1,highlightFirstItem:!0}},[e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#basic"}},[t._v("Basic")]),e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#tooltip"}},[t._v("Tooltip")])])],1),e("div",{staticClass:"row layout-top-spacing"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"},[e("svg",{staticClass:"feather feather-bell",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("path",{attrs:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}}),e("path",{attrs:{d:"M13.73 21a2 2 0 0 1-3.46 0"}})]),t._v(" Documentation: "),e("a",{staticClass:"text-info",attrs:{target:"_blank",href:"https://www.npmjs.com/package/vue-quill-editor"}},[t._v(" https://www.npmjs.com/package/vue-quill-editor ")])])])]),e("div",{staticClass:"row layout-spacing layout-top-spacing",attrs:{id:"basic"}},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(0),e("div",{staticClass:"panel-body"},[e("quill-editor",{attrs:{options:t.options1},model:{value:t.content1,callback:function(e){t.content1=e},expression:"content1"}}),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code1")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code1")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v('<quill-editor v-model="content1" :options="options1"></quill-editor>\n')])])],1):t._e()],1)],1)])])]),e("div",{staticClass:"row layout-spacing",attrs:{id:"tooltip"}},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(1),e("div",{staticClass:"panel-body"},[e("quill-editor",{attrs:{options:t.options2},model:{value:t.content2,callback:function(e){t.content2=e},expression:"content2"}},[e("div",{attrs:{slot:"toolbar",id:"toolbar"},slot:"toolbar"},[e("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom",modifiers:{bottom:!0}}],staticClass:"ql-bold",attrs:{type:"button",title:"Bold"}}),e("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom",modifiers:{bottom:!0}}],staticClass:"ql-underline",attrs:{type:"button",title:"Underline"}}),e("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom",modifiers:{bottom:!0}}],staticClass:"ql-italic",attrs:{type:"button",title:"Add italic text <cmd+i>"}}),e("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom",modifiers:{bottom:!0}}],staticClass:"ql-image",attrs:{type:"button",title:"Upload image"}}),e("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom",modifiers:{bottom:!0}}],staticClass:"ql-code-block",attrs:{type:"button",title:"Show code"}})])]),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code2")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code2")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v('<quill-editor v-model="content2" :options="options2">\n    <div id="toolbar" slot="toolbar">\n        <button type="button" v-b-tooltip.bottom class="ql-bold" title="Bold"></button>\n        <button type="button" v-b-tooltip.bottom class="ql-underline" title="Underline"></button>\n        <button type="button" v-b-tooltip.bottom class="ql-italic" title="Add italic text <cmd+i>"></button>\n        <button type="button" v-b-tooltip.bottom class="ql-image" title="Upload image"></button>\n        <button type="button" v-b-tooltip.bottom class="ql-code-block" title="Show code"></button>\n    </div>\n</quill-editor>\n')])])],1):t._e()],1)],1)])])])])],1)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("Basic")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("With Tooltip")])])])])}],o=(i("14d9"),i("2b0e")),l=i("953d"),n=i.n(l),u=(i("a753"),i("8096"),i("14e1"),i("0706"),i("e706"));o["default"].use(n.a);var r={metaInfo:{title:"Quill Editor"},components:{highlight:u["a"]},data(){return{code_arr:[],content1:"\n<h1>This is a heading text...</h1>\n                                        <br/>\n                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui arcu, pellentesque id mattis sed, mattis semper erat. Etiam commodo arcu a mollis consequat. Curabitur pretium auctor tortor, bibendum placerat elit feugiat et. Ut ac turpis nec dui ullamcorper ornare. Vestibulum finibus quis magna at accumsan. Praesent a purus vitae tortor fringilla tempus vel non purus. Suspendisse eleifend nibh porta dolor ullamcorper laoreet. Ut sit amet ipsum vitae lectus pharetra tincidunt. In ipsum quam, iaculis at erat ut, fermentum efficitur ipsum. Nunc odio diam, fringilla in auctor et, scelerisque at lorem. Sed convallis tempor dolor eu dictum. Cras ornare ornare imperdiet. Pellentesque sagittis lacus non libero fringilla faucibus. Aenean ullamcorper enim et metus vestibulum, eu aliquam nunc placerat. Praesent fringilla dolor sit amet leo pulvinar semper. </p>\n                                        <br/>\n                                        <p> Curabitur vel tincidunt dui. Duis vestibulum eget velit sit amet aliquet. Curabitur vitae cursus ex. Aliquam pulvinar vulputate ullamcorper. Maecenas luctus in eros et aliquet. Cras auctor luctus nisl a consectetur. Morbi hendrerit nisi nunc, quis egestas nibh consectetur nec. Aliquam vel lorem enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc placerat, enim quis varius luctus, enim arcu tincidunt purus, in vulputate tortor mi a tortor. Praesent porta ornare fermentum. Praesent sed ligula at ante tempor posuere a at lorem. </p>\n                                        <br/>\n                                        <p> Aliquam diam felis, vehicula ut ipsum eu, consectetur tincidunt ipsum. Vestibulum sed metus ac nisi tincidunt mollis sed non urna. Vivamus lacinia ullamcorper interdum. Sed sed erat vel leo venenatis pretium. Sed aliquet sem nunc, ut iaculis dolor consectetur et. Vivamus ligula sapien, maximus nec pellentesque ut, imperdiet at libero. Vivamus semper nulla lectus, id dapibus nulla convallis id. Quisque elementum lectus ac dui gravida, ut molestie nunc convallis. Pellentesque et odio non dolor convallis commodo sit amet a ante. </p>\n",content2:"\n<h1>This is a heading text...</h1>\n                                            <br/>\n                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui arcu, pellentesque id mattis sed, mattis semper erat. Etiam commodo arcu a mollis consequat. Curabitur pretium auctor tortor, bibendum placerat elit feugiat et. Ut ac turpis nec dui ullamcorper ornare. Vestibulum finibus quis magna at accumsan. Praesent a purus vitae tortor fringilla tempus vel non purus. Suspendisse eleifend nibh porta dolor ullamcorper laoreet. Ut sit amet ipsum vitae lectus pharetra tincidunt. In ipsum quam, iaculis at erat ut, fermentum efficitur ipsum. Nunc odio diam, fringilla in auctor et, scelerisque at lorem. Sed convallis tempor dolor eu dictum. Cras ornare ornare imperdiet. Pellentesque sagittis lacus non libero fringilla faucibus. Aenean ullamcorper enim et metus vestibulum, eu aliquam nunc placerat. Praesent fringilla dolor sit amet leo pulvinar semper. </p>\n                                            <br/>\n                                            <p> Curabitur vel tincidunt dui. Duis vestibulum eget velit sit amet aliquet. Curabitur vitae cursus ex. Aliquam pulvinar vulputate ullamcorper. Maecenas luctus in eros et aliquet. Cras auctor luctus nisl a consectetur. Morbi hendrerit nisi nunc, quis egestas nibh consectetur nec. Aliquam vel lorem enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc placerat, enim quis varius luctus, enim arcu tincidunt purus, in vulputate tortor mi a tortor. Praesent porta ornare fermentum. Praesent sed ligula at ante tempor posuere a at lorem. </p>\n                                            <br/>\n                                            <p>Aliquam diam felis, vehicula ut ipsum eu, consectetur tincidunt ipsum. Vestibulum sed metus ac nisi tincidunt mollis sed non urna. Vivamus lacinia ullamcorper interdum. Sed sed erat vel leo venenatis pretium. Sed aliquet sem nunc, ut iaculis dolor consectetur et. Vivamus ligula sapien, maximus nec pellentesque ut, imperdiet at libero. Vivamus semper nulla lectus, id dapibus nulla convallis id. Quisque elementum lectus ac dui gravida, ut molestie nunc convallis. Pellentesque et odio non dolor convallis commodo sit amet a ante. </p>\n",options1:{modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline"],["image","code-block"]]}},options2:{modules:{toolbar:"#toolbar"}}}},mounted(){},methods:{toggleCode(t){this.code_arr.includes(t)?this.code_arr=this.code_arr.filter(e=>e!=t):this.code_arr.push(t)}}},c=r,d=(i("29e9"),i("2877")),m=Object(d["a"])(c,a,s,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=forms-quill-editor.9c7f8cfc.js.map