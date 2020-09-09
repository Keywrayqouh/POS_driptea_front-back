webpackJsonp([2],{

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(80)
}
var normalizeComponent = __webpack_require__(15)
/* script */
var __vue_script__ = __webpack_require__(82)
/* template */
var __vue_template__ = __webpack_require__(83)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bb3af330"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/modules/product/addProduct.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bb3af330", Component.options)
  } else {
    hotAPI.reload("data-v-bb3af330", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(16)("d999b55a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bb3af330\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./addProduct.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bb3af330\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./addProduct.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\nimg[data-v-bb3af330] {\n  width: 250px;\n  height: 250px;\n  margin-top: 2%;\n}\n.fileStyle[data-v-bb3af330] {\n  width: 97px;\n  margin-top: 3%;\n  margin-bottom: 3%;\n}\n.card-header[data-v-bb3af330] {\n  font-weight: bold;\n  font-size: 25px;\n  text-align: center;\n}\n.card[data-v-bb3af330] {\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n.form-control[data-v-bb3af330] {\n  display: inline;\n  margin-top: 2%;\n  width: 300px;\n}\n.productName[data-v-bb3af330] {\n  margin-left: 6%;\n}\n.price[data-v-bb3af330] {\n  margin-left: 4%;\n}\nform[data-v-bb3af330] {\n  margin-top: 3%;\n}\n", ""]);

// exports


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            data: [],
            productName: '',
            image: '',
            imageURL: null,
            price: null,
            productDescription: '',
            output: null,
            success: null
        };
    },
    mounted: function mounted() {},

    methods: {
        edit: function edit(param) {
            this.imageURL = param.image;
            this.productName = param.productName;
            this.price = param.price;
            this.productDescription = param.productDescription;
        },
        onImageChange: function onImageChange(e) {
            this.image = e.target.files[0];
            // this.image = URL.createObjectURL(e.target.files[0])
            this.imageURL = URL.createObjectURL(e.target.files[0]);
        },
        formSubmit: function formSubmit(e) {
            e.preventDefault();
            var currentObj = this;

            var config = {
                headers: { 'content-type': 'multipart/form-data' }
            };

            var formData = new FormData();
            formData.append('image', this.image);
            // formData.append('imageURL', this.imageURL)
            formData.append('productName', this.productName);
            formData.append('price', this.price);
            formData.append('productDescription', this.productDescription);

            axios.post('/formSubmit', formData, config).then(function (response) {
                currentObj.success = response.data.success;
                setTimeout(function () {
                    return __WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */].push('/userDashboard').catch(function () {});
                }, 1000);
                // this.retrieve()
            }).catch(function (error) {
                currentObj.output = error;
            });
        }
    }
});

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("Add Product")]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _vm.success !== null
              ? _c(
                  "div",
                  {
                    staticClass: "alert alert-success",
                    attrs: { role: "alert" }
                  },
                  [
                    _vm._v(
                      "\n                      " +
                        _vm._s(_vm.success) +
                        "\n                    "
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "form",
              {
                attrs: { enctype: "multipart/form-data" },
                on: { submit: _vm.formSubmit, retrieveData: _vm.edit }
              },
              [
                _c("center", [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticStyle: {
                          "font-size": "15px",
                          "font-weight": "bold"
                        },
                        attrs: { for: "pname" }
                      },
                      [_vm._v("Product name:")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.productName,
                          expression: "productName"
                        }
                      ],
                      staticClass: "form-control productName",
                      attrs: { type: "text", required: "" },
                      domProps: { value: _vm.productName },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.productName = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticStyle: {
                          "font-size": "15px",
                          "font-weight": "bold"
                        },
                        attrs: { for: "pname" }
                      },
                      [_vm._v("Product description:")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.productDescription,
                          expression: "productDescription"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", required: "" },
                      domProps: { value: _vm.productDescription },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.productDescription = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticStyle: {
                          "font-size": "15px",
                          "font-weight": "bold"
                        },
                        attrs: { for: "pname" }
                      },
                      [_vm._v("Base price: (Php)")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.price,
                          expression: "price"
                        }
                      ],
                      staticClass: "form-control price",
                      attrs: { type: "number", min: "0", required: "" },
                      domProps: { value: _vm.price },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.price = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("img", { attrs: { src: _vm.imageURL } }),
                  _c("br"),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "fileStyle",
                    attrs: { type: "file", required: "" },
                    on: { change: _vm.onImageChange }
                  }),
                  _c("br"),
                  _vm._v(" "),
                  _c("button", { staticClass: "btn btn-success" }, [
                    _vm._v("Add Product")
                  ])
                ])
              ],
              1
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-bb3af330", module.exports)
  }
}

/***/ })

});