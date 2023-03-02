(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["components-sweetalert"],{"0706":function(t,e,s){},"1fd6":function(t,e,s){t.exports=s.p+"img/sweet-bg.cfc41fe8.jpg"},becd:function(t,e,s){t.exports=s.p+"img/thumbs-up.ffd44e60.jpg"},cf53:function(t,e,s){},ea20:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("portal",{attrs:{to:"breadcrumb"}},[e("ul",{staticClass:"navbar-nav flex-row"},[e("li",[e("div",{staticClass:"page-header"},[e("nav",{staticClass:"breadcrumb-one",attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("a",{attrs:{href:"javascript:;"}},[t._v("Components ")])]),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e("span",[t._v("Sweet Alerts")])])])])])])])]),e("div",{staticClass:"container"},[e("div",{staticClass:"nav sidenav",attrs:{id:"navSection"}},[e("scrollactive",{staticClass:"sidenav-content",attrs:{tag:"div","active-class":"active",offset:120,modifyUrl:!1,highlightFirstItem:!0}},[e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#sweetalertbasic"}},[t._v("Basic")]),e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#sweetalertmessage"}},[t._v("Message")]),e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#sweetalertdynamic"}},[t._v("Dynamic")]),e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#sweetalertatitlewithtext"}},[t._v("A title with text")]),e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#sweetalertchainingmodals"}},[t._v("Chaining modals")]),e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#sweetalertanimation"}},[t._v("Animation")]),e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#sweetalertautoclosetimer"}},[t._v("Auto close timer")]),e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#sweetalertcustomimage"}},[t._v("Custom image")]),e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#sweetalertcustomhtml"}},[t._v("Custom HTML")]),e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#sweetalertwarningmessage"}},[t._v("Warning message")]),e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#sweetalertcancel"}},[t._v("Cancel")]),e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#sweetalertcustomstyle"}},[t._v("Custom Style")]),e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#sweetalertfooter"}},[t._v("Footer")]),e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#sweetalertrtl"}},[t._v("RTL")]),e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#sweetalertmixin"}},[t._v("Mixin")])])],1),e("div",{staticClass:"row layout-top-spacing"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"},[e("svg",{staticClass:"feather feather-bell",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("path",{attrs:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}}),e("path",{attrs:{d:"M13.73 21a2 2 0 0 1-3.46 0"}})]),t._v(" Documentation: "),e("a",{staticClass:"text-info",attrs:{target:"_blank",href:"https://www.npmjs.com/package/vue-sweetalert2"}},[t._v(" https://www.npmjs.com/package/vue-sweetalert2 ")])])])]),e("div",{staticClass:"row layout-top-spacing"},[e("div",{staticClass:"col-lg-12 col-12 layout-spacing",attrs:{id:"sweetalertbasic"}},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(0),e("div",{staticClass:"panel-body text-center"},[e("b-button",{staticClass:"mr-2 btn",attrs:{variant:"primary"},on:{click:function(e){return t.showAlert(1)}}},[t._v("Basic message")]),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code1")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code1")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v('<b-button variant="primary" class="mr-2 btn" @click="showAlert(1)">Basic message</b-button>\n\n this.$swal({\n    title: \'Saved succesfully\',\n    padding: \'2em\'\n});\n                                        ')])])],1):t._e()],1)],1)])]),e("div",{staticClass:"col-lg-12 col-12 layout-spacing",attrs:{id:"sweetalertmessage"}},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(1),e("div",{staticClass:"panel-body text-center"},[e("b-button",{staticClass:"mr-2 btn",attrs:{variant:"primary"},on:{click:function(e){return t.showAlert(2)}}},[t._v("Success message!")]),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code2")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code2")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v("<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(2)\">Success message!</b-button>\n\nthis.$swal({\n    icon: 'success',\n    title: 'Good job!',\n    text: 'You clicked the!',\n    padding: '2em'\n});\n                                        ")])])],1):t._e()],1)],1)])]),e("div",{staticClass:"col-lg-12 col-12 layout-spacing",attrs:{id:"sweetalertdynamic"}},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(2),e("div",{staticClass:"panel-body text-center"},[e("b-button",{staticClass:"mr-2 btn",attrs:{variant:"primary"},on:{click:function(e){return t.showAlert(3)}}},[t._v("Dynamic queue")]),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code3")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code3")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v("<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(3)\">Dynamic queue</b-button>\n\nconst ipAPI = 'https://api.ipify.org?format=json';\nthis.$swal({\n    title: 'Your public IP',\n    confirmButtonText: 'Show my public IP',\n    text: 'Your public IP will be received ' + 'via AJAX request',\n    showLoaderOnConfirm: true,\n    preConfirm: () => {\n        return fetch(ipAPI)\n            .then(response => {\n                return response.json();\n            })\n            .then(data => {\n                this.$swal({\n                    title: data.ip\n                });\n            })\n            .catch(() => {\n                this.$swal({\n                    type: 'error',\n                    title: 'Unable to get your public IP'\n                });\n            });\n    }\n});\n                                        ")])])],1):t._e()],1)],1)])]),e("div",{staticClass:"col-lg-12 col-12 layout-spacing",attrs:{id:"sweetalertatitlewithtext"}},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(3),e("div",{staticClass:"panel-body text-center"},[e("b-button",{staticClass:"mr-2 btn",attrs:{variant:"primary"},on:{click:function(e){return t.showAlert(4)}}},[t._v("Title & text")]),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code4")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code4")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v("<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(4)\">Title & text</b-button>\n\nthis.$swal({\n    icon: 'question',\n    title: 'The Internet?',\n    text: 'That thing is still around?',\n    padding: '2em'\n});\n                                        ")])])],1):t._e()],1)],1)])]),e("div",{staticClass:"col-lg-12 col-12 layout-spacing",attrs:{id:"sweetalertchainingmodals"}},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(4),e("div",{staticClass:"panel-body text-center"},[e("b-button",{staticClass:"mr-2 btn",attrs:{variant:"primary"},on:{click:function(e){return t.showAlert(5)}}},[t._v("Chaining modals (queue)")]),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code5")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code5")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v("<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(5)\">Chaining modals (queue)</b-button>\n\nconst steps = ['1', '2', '3'];\nconst swalQueueStep = this.$swal.mixin({\n    confirmButtonText: 'Next →',\n    showCancelButton: true,\n    progressSteps: steps,\n    input: 'text',\n    inputAttributes: {\n        required: true\n    },\n    validationMessage: 'This field is required',\n    padding: '2em'\n});\n\nconst values = [];\nlet currentStep;\n\nfor (currentStep = 0; currentStep < steps.length; ) {\n    const result = await swalQueueStep.fire({\n        title: `Question ${steps[currentStep]}`,\n        text: currentStep == 0 ? 'Chaining swal2 modals is easy.' : '',\n        inputValue: values[currentStep],\n        showCancelButton: currentStep > 0,\n        currentProgressStep: currentStep\n    });\n\n    if (result.value) {\n        values[currentStep] = result.value;\n        currentStep++;\n    } else if (result.dismiss === this.$swal.DismissReason.cancel) {\n        currentStep--;\n    } else {\n        break;\n    }\n}\n\nif (currentStep === steps.length) {\n    this.$swal.fire({\n        title: 'All done!',\n        padding: '2em',\n        html: 'Your answers: <pre>' + JSON.stringify(values) + '</pre>',\n        confirmButtonText: 'Lovely!'\n    });\n}\n                                        ")])])],1):t._e()],1)],1)])]),e("div",{staticClass:"col-lg-12 col-12 layout-spacing",attrs:{id:"sweetalertanimation"}},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(5),e("div",{staticClass:"panel-body text-center"},[e("b-button",{staticClass:"mr-2 btn",attrs:{variant:"primary"},on:{click:function(e){return t.showAlert(6)}}},[t._v("Custom animation")]),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code6")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code6")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v("<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(6)\">Custom animation</b-button>\n\nthis.$swal({\n    title: 'Custom animation with Animate.css',\n    animation: false,\n    customClass: 'animated tada',\n    padding: '2em'\n});\n                                        ")])])],1):t._e()],1)],1)])]),e("div",{staticClass:"col-lg-12 col-12 layout-spacing",attrs:{id:"sweetalertautoclosetimer"}},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(6),e("div",{staticClass:"panel-body text-center"},[e("b-button",{staticClass:"mr-2 btn",attrs:{variant:"primary"},on:{click:function(e){return t.showAlert(7)}}},[t._v("Message timer")]),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code7")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code7")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v("<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(7)\">Message timer</b-button>\n\nlet timerInterval;\n\nthis.$swal({\n    title: 'Auto close alert!',\n    html: 'I will close in <b></b> milliseconds.',\n    timer: 2000,\n    timerProgressBar: true,\n    didOpen: () => {\n        this.$swal.showLoading();\n        const b = this.$swal.getHtmlContainer().querySelector('b');\n        timerInterval = setInterval(() => {\n            b.textContent = this.$swal.getTimerLeft();\n        }, 100);\n    },\n    willClose: () => {\n        clearInterval(timerInterval);\n    }\n}).then(function(result) {\n    if (result.dismiss === this.$swal.DismissReason.timer) {\n        console.log('I was closed by the timer');\n    }\n});\n                                        ")])])],1):t._e()],1)],1)])]),e("div",{staticClass:"col-lg-12 col-12 layout-spacing",attrs:{id:"sweetalertcustomimage"}},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(7),e("div",{staticClass:"panel-body text-center"},[e("b-button",{staticClass:"mr-2 btn",attrs:{variant:"primary"},on:{click:function(e){return t.showAlert(8)}}},[t._v("Message with custom image")]),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code8")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code8")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v("<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(8)\">Message with custom image</b-button>\n\nthis.$swal({\n    title: 'Sweet!',\n    text: 'Modal with a custom image.',\n    imageUrl: require('@/assets/images/thumbs-up.jpg'),\n    imageWidth: 224,\n    imageHeight: 200,\n    imageAlt: 'Custom image',\n    animation: false,\n    padding: '2em'\n});\n                                        ")])])],1):t._e()],1)],1)])]),e("div",{staticClass:"col-lg-12 col-12 layout-spacing",attrs:{id:"sweetalertcustomhtml"}},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(8),e("div",{staticClass:"panel-body text-center"},[e("b-button",{staticClass:"mr-2 btn",attrs:{variant:"primary"},on:{click:function(e){return t.showAlert(9)}}},[t._v("Custom Description & buttons")]),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code9")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code9")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v("<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(9)\">Custom Description & buttons</b-button>\n\nthis.$swal({\n    icon: 'info',\n    title: '<i>HTML</i> <u>example</u>',\n    html: 'You can use <b>bold text</b>, ' + '<a href=\"//github.com\">links</a> ' + 'and other HTML tags',\n    showCloseButton: true,\n    showCancelButton: true,\n    focusConfirm: false,\n    confirmButtonText: '<i class=\"flaticon-checked-1\"></i> Great!',\n    confirmButtonAriaLabel: 'Thumbs up, great!',\n    cancelButtonText: '<i class=\"flaticon-cancel-circle\"></i> Cancel',\n    cancelButtonAriaLabel: 'Thumbs down',\n    padding: '2em'\n});\n                                        ")])])],1):t._e()],1)],1)])]),e("div",{staticClass:"col-lg-12 col-12 layout-spacing",attrs:{id:"sweetalertwarningmessage"}},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(9),e("div",{staticClass:"panel-body text-center"},[e("b-button",{staticClass:"mr-2 btn",attrs:{variant:"primary"},on:{click:function(e){return t.showAlert(10)}}},[t._v("Confirm")]),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code10")}}},[e("span",[t._v("Confirm")])]),t.code_arr.includes("code10")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v("<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(10)\">Confirm</b-button>\n\nthis.$swal({\n    title: 'Are you sure?',\n    text: \"You won't be able to revert this!\",\n    type: 'warning',\n    showCancelButton: true,\n    confirmButtonText: 'Delete',\n    padding: '2em'\n}).then(result => {\n    if (result.value) {\n        this.$swal('Deleted!', 'Your file has been deleted.', 'success');\n    }\n});\n                                        ")])])],1):t._e()],1)],1)])]),e("div",{staticClass:"col-lg-12 col-12 layout-spacing",attrs:{id:"sweetalertcancel"}},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(10),e("div",{staticClass:"panel-body text-center"},[e("b-button",{staticClass:"mr-2 btn",attrs:{variant:"primary"},on:{click:function(e){return t.showAlert(11)}}},[t._v('Addition else for "Cancel".')]),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code11")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code11")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v("<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(11)\">Addition else for \"Cancel\".</b-button>\n\nconst swalWithBootstrapButtons = this.$swal.mixin({\n    confirmButtonClass: 'btn btn-secondary',\n    cancelButtonClass: 'btn btn-dark mr-3',\n    buttonsStyling: false\n});\nswalWithBootstrapButtons\n    .fire({\n        title: 'Are you sure?',\n        text: \"You won't be able to revert this!\",\n        icon: 'warning',\n        showCancelButton: true,\n        confirmButtonText: 'Yes, delete it!',\n        cancelButtonText: 'No, cancel!',\n        reverseButtons: true,\n        padding: '2em'\n    })\n    .then(result => {\n        if (result.value) {\n            swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');\n        } else if (result.dismiss === this.$swal.DismissReason.cancel) {\n            swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');\n        }\n    });\n                                        ")])])],1):t._e()],1)],1)])]),e("div",{staticClass:"col-lg-12 col-12 layout-spacing",attrs:{id:"sweetalertcustomstyle"}},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(11),e("div",{staticClass:"panel-body text-center"},[e("b-button",{staticClass:"mr-2 btn",attrs:{variant:"primary"},on:{click:function(e){return t.showAlert(12)}}},[t._v("Custom Message")]),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code12")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code12")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v("<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(12)\">Custom Message</b-button>\n\nthis.$swal({\n    title: 'Custom width, padding, background.',\n    width: 600,\n    padding: '7em',\n    customClass: 'background-modal',\n    background: '#fff url(' + require('@/assets/images/sweet-bg.jpg') + ') no-repeat 100% 100%'\n});\n                                        ")])])],1):t._e()],1)],1)])]),e("div",{staticClass:"col-lg-12 col-12 layout-spacing",attrs:{id:"sweetalertfooter"}},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(12),e("div",{staticClass:"panel-body text-center"},[e("b-button",{staticClass:"mr-2 btn",attrs:{variant:"primary"},on:{click:function(e){return t.showAlert(13)}}},[t._v("With Footer")]),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code13")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code13")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v("<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(13)\">With Footer</b-button>\n\nthis.$swal({\n    type: 'error',\n    title: 'Oops...',\n    text: 'Something went wrong!',\n    footer: '<a href>Why do I have this issue?</a>',\n    padding: '2em'\n});\n                                        ")])])],1):t._e()],1)],1)])]),e("div",{staticClass:"col-lg-12 col-12 layout-spacing",attrs:{id:"sweetalertrtl"}},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(13),e("div",{staticClass:"panel-body text-center"},[e("b-button",{staticClass:"mr-2 btn",attrs:{variant:"primary"},on:{click:function(e){return t.showAlert(14)}}},[t._v("RTL")]),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code14")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code14")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v("<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(14)\">RTL</b-button>\n\nthis.$swal({\n    title: 'هل تريد الاستمرار؟',\n    confirmButtonText: 'نعم',\n    cancelButtonText: 'لا',\n    showCancelButton: true,\n    showCloseButton: true,\n    padding: '2em',\n    target: document.getElementById('rtl-container')\n});\n                                        ")])])],1):t._e()],1)],1)])]),e("div",{staticClass:"col-lg-12 col-12 layout-spacing",attrs:{id:"sweetalertmixin"}},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(14),e("div",{staticClass:"panel-body text-center"},[e("b-button",{staticClass:"mr-2 btn",attrs:{variant:"primary"},on:{click:function(e){return t.showAlert(15)}}},[t._v("Mixin")]),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code15")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code15")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v("<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(15)\">Mixin</b-button>\n\nconst toast = this.$swal.mixin({\n    toast: true,\n    position: 'top-end',\n    showConfirmButton: false,\n    timer: 3000,\n    padding: '2em'\n});\ntoast.fire({\n    icon: 'success',\n    title: 'Signed in successfully',\n    padding: '2em'\n});\n                                        ")])])],1):t._e()],1)],1)])])])])],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("Basic message")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("Success message")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("Dynamic queue")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("A title with a text under")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("Chaining modals (queue)")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("Custom animation")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("Message with auto close timer")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("Message with custom image")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("Custom HTML description and buttons")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v('Warning message, with "Confirm" button')])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v('Execute something else for "Cancel".')])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("A message with custom width, padding and background")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("With Footer")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("RTL Support")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("Mixin")])])])])}],n=(s("14d9"),s("0706"),s("cf53"),s("e706")),o={metaInfo:{title:"Tabs"},components:{highlight:n["a"]},data(){return{code_arr:[]}},mounted(){},methods:{toggleCode(t){this.code_arr.includes(t)?this.code_arr=this.code_arr.filter(e=>e!=t):this.code_arr.push(t)},async showAlert(t){if(1===t)this.$swal({title:"Saved succesfully",padding:"2em"});else if(2===t)this.$swal({icon:"success",title:"Good job!",text:"You clicked the!",padding:"2em"});else if(3===t){const t="https://api.ipify.org?format=json";this.$swal({title:"Your public IP",confirmButtonText:"Show my public IP",text:"Your public IP will be received via AJAX request",showLoaderOnConfirm:!0,preConfirm:()=>fetch(t).then(t=>t.json()).then(t=>{this.$swal({title:t.ip})}).catch(()=>{this.$swal({type:"error",title:"Unable to get your public IP"})})})}else if(4===t)this.$swal({icon:"question",title:"The Internet?",text:"That thing is still around?",padding:"2em"});else if(5===t){const t=["1","2","3"],e=this.$swal.mixin({confirmButtonText:"Next →",showCancelButton:!0,progressSteps:t,input:"text",inputAttributes:{required:!0},validationMessage:"This field is required",padding:"2em"}),s=[];let a;for(a=0;a<t.length;){const i=await e.fire({title:"Question "+t[a],text:0==a?"Chaining swal2 modals is easy.":"",inputValue:s[a],showCancelButton:a>0,currentProgressStep:a});if(i.value)s[a]=i.value,a++;else{if(i.dismiss!==this.$swal.DismissReason.cancel)break;a--}}a===t.length&&this.$swal.fire({title:"All done!",padding:"2em",html:"Your answers: <pre>"+JSON.stringify(s)+"</pre>",confirmButtonText:"Lovely!"})}else if(6===t)this.$swal({title:"Custom animation with Animate.css",animation:!1,customClass:"animated tada",padding:"2em"});else if(7===t){let t;this.$swal({title:"Auto close alert!",html:"I will close in <b></b> milliseconds.",timer:2e3,timerProgressBar:!0,didOpen:()=>{this.$swal.showLoading();const e=this.$swal.getHtmlContainer().querySelector("b");t=setInterval(()=>{e.textContent=this.$swal.getTimerLeft()},100)},willClose:()=>{clearInterval(t)}}).then((function(t){t.dismiss===this.$swal.DismissReason.timer&&console.log("I was closed by the timer")}))}else if(8===t)this.$swal({title:"Sweet!",text:"Modal with a custom image.",imageUrl:s("becd"),imageWidth:224,imageHeight:200,imageAlt:"Custom image",animation:!1,padding:"2em"});else if(9===t)this.$swal({icon:"info",title:"<i>HTML</i> <u>example</u>",html:'You can use <b>bold text</b>, <a href="//github.com">links</a> and other HTML tags',showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:'<i class="flaticon-checked-1"></i> Great!',confirmButtonAriaLabel:"Thumbs up, great!",cancelButtonText:'<i class="flaticon-cancel-circle"></i> Cancel',cancelButtonAriaLabel:"Thumbs down",padding:"2em"});else if(10===t)this.$swal({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Delete",padding:"2em"}).then(t=>{t.value&&this.$swal("Deleted!","Your file has been deleted.","success")});else if(11===t){const t=this.$swal.mixin({confirmButtonClass:"btn btn-secondary",cancelButtonClass:"btn btn-dark mr-3",buttonsStyling:!1});t.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",reverseButtons:!0,padding:"2em"}).then(e=>{e.value?t.fire("Deleted!","Your file has been deleted.","success"):e.dismiss===this.$swal.DismissReason.cancel&&t.fire("Cancelled","Your imaginary file is safe :)","error")})}else if(12===t)this.$swal({title:"Custom width, padding, background.",width:600,padding:"7em",customClass:"background-modal",background:"#fff url("+s("1fd6")+") no-repeat 100% 100%"});else if(13===t)this.$swal({icon:"error",title:"Oops...",text:"Something went wrong!",footer:"<a href>Why do I have this issue?</a>",padding:"2em"});else if(14===t)this.$swal({title:"هل تريد الاستمرار؟",confirmButtonText:"نعم",cancelButtonText:"لا",showCancelButton:!0,showCloseButton:!0,padding:"2em",target:document.getElementById("rtl-container")});else if(15===t){const t=this.$swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,padding:"2em"});t.fire({icon:"success",title:"Signed in successfully",padding:"2em"})}}}},l=o,c=s("2877"),r=Object(c["a"])(l,a,i,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=components-sweetalert.d0406b15.js.map