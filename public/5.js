webpackJsonp([5],{

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(72)
}
var normalizeComponent = __webpack_require__(15)
/* script */
var __vue_script__ = __webpack_require__(74)
/* template */
var __vue_template__ = __webpack_require__(77)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4376b304"
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
Component.options.__file = "resources/assets/js/modules/dashboard/userDashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4376b304", Component.options)
  } else {
    hotAPI.reload("data-v-4376b304", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(16)("02f1bf55", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4376b304\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./userDashboard.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4376b304\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./userDashboard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.btnRegister[data-v-4376b304] {\n  background-color: #17D817;\n  font-weight: bold;\n}\n@media screen and (max-width: 600px) {\n.imageSize[data-v-4376b304][data-v-4376b304] {\n    width: 62%;\n    margin-left: 18%;\n}\nh2[data-v-4376b304], h4[data-v-4376b304] {\n    text-align: center;\n}\n}\n.imageSize[data-v-4376b304] {\n  width: 100%;\n}\n.form-control[data-v-4376b304] {\n  display: inline;\n  width: 100px;\n}\n.productDescription[data-v-4376b304] {\n  font-size: 15px;\n  margin-top: 5%;\n}\nh2[data-v-4376b304], h4[data-v-4376b304] {\n  text-align: center;\n}\nh2[data-v-4376b304] {\n  margin-top: 15%;\n}\n.product[data-v-4376b304] {\n  -webkit-box-shadow: 3px 3px #888888;\n          box-shadow: 3px 3px #888888;\n  cursor: pointer;\n}\n.rowMargin[data-v-4376b304] {\n  margin-top: 5%;\n}\nh5[data-v-4376b304] {\n  margin-top: 30%;\n}\n@media screen and (max-width: 800px) {\n.col-md-5[data-v-4376b304] {\n    text-align: center;\n    width: 80%;\n    margin-left: 10%;\n    margin-right: 10%;\n}\nh5[data-v-4376b304], h6[data-v-4376b304] {\n    text-align: center;\n    margin-top: 1%;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_milktea_png__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_milktea_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__image_milktea_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_product1_png__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_product1_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__image_product1_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth__ = __webpack_require__(17);
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
            image: __WEBPACK_IMPORTED_MODULE_1__image_milktea_png___default.a,
            image1: __WEBPACK_IMPORTED_MODULE_2__image_product1_png___default.a,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6],
            product: 'product ni cya',
            price: 'Php150.00',
            quantity: 1
        };
    },

    methods: {}
});

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

module.exports = "/images/milktea.png?ed7f0a489cb86d1225a017d067a6c9bc";

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

module.exports = "/images/product1.png?4fdee291700923c44760f51fc55787e7";

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      { staticClass: "row rowMargin" },
      _vm._l(_vm.data, function(item, index) {
        return _c(
          "div",
          {
            key: index,
            staticClass: "col-md-4",
            staticStyle: { "margin-bottom": "3%" }
          },
          [
            _c(
              "div",
              {
                staticClass: "product",
                attrs: { "data-toggle": "modal", "data-target": "#viewDetails" }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-5" }, [
                    _c("img", {
                      staticStyle: { width: "100%", height: "100%" },
                      attrs: { src: _vm.image1 }
                    })
                  ]),
                  _vm._v(" "),
                  _vm._m(0, true)
                ])
              ]
            )
          ]
        )
      }),
      0
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "viewDetails", role: "dialog" }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("img", {
                    staticClass: "imageSize",
                    attrs: { src: _vm.image1 }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("h2", [_vm._v("Product Name")]),
                  _vm._v(" "),
                  _c("h4", [_vm._v("Price: Php50.00")]),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "text-align": "left",
                        border: "1px solid #17D817"
                      }
                    },
                    [
                      _c("form", [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticStyle: {
                                "font-size": "15px",
                                "font-weight": "bold"
                              },
                              attrs: { for: "quantity" }
                            },
                            [_vm._v("Quantity:")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.quantity,
                                expression: "quantity"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number", min: "1" },
                            domProps: { value: _vm.quantity },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.quantity = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _vm._m(3),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btnRegister",
                            attrs: { type: "submit" },
                            on: { click: _vm.register }
                          },
                          [_vm._v("Add to Cart")]
                        )
                      ])
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _vm._m(4)
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-md-7", staticStyle: { "text-align": "left" } },
      [
        _c("h5", [_vm._v("Product Name")]),
        _vm._v(" "),
        _c("h6", [_vm._v("Price: Php50.00")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("×")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("p", { staticClass: "productDescription" }, [
        _vm._v("The quick brown fox jumps over the lazy dog.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c(
        "label",
        {
          staticStyle: { "font-size": "15px", "font-weight": "bold" },
          attrs: { for: "size" }
        },
        [_vm._v("Size:        ")]
      ),
      _vm._v(" "),
      _c("select", { staticClass: "form-control" }, [
        _c("option", { attrs: { value: "small" } }, [_vm._v("Small")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "medium" } }, [_vm._v("Medium")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "large" } }, [_vm._v("Large")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-danger",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4376b304", module.exports)
  }
}

/***/ })

});