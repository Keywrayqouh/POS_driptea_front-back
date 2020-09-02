webpackJsonp([1],{

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(66)
}
var normalizeComponent = __webpack_require__(15)
/* script */
var __vue_script__ = __webpack_require__(68)
/* template */
var __vue_template__ = __webpack_require__(69)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2badb436"
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
Component.options.__file = "resources/assets/js/basic/Register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2badb436", Component.options)
  } else {
    hotAPI.reload("data-v-2badb436", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(16)("f7e4684a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2badb436\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Register.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2badb436\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Register.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\nspan[data-v-2badb436] {\n  font-size: 12px;\n}\nhr[data-v-2badb436] {\n  border: 1px solid #17D817;\n}\n.termsCondition[data-v-2badb436] {\n  margin-top: 6%;\n  font-size: 15px;\n  text-align: center;\n}\n.form-control[data-v-2badb436] {\n  border: 1px solid #17D817;\n  border-radius: 5px;\n}\n.bRegister[data-v-2badb436] {\n  color: #0A8C0F;\n  cursor: pointer;\n}\np[data-v-2badb436] {\n  font-size: 20px;\n}\n.btnRegister[data-v-2badb436] {\n  margin-top: 2%;\n  margin-bottom: 2%;\n  background-color: #17D817;\n  font-weight: bold;\n  width: 100%;\n}\n.containerWidth[data-v-2badb436] {\n  text-align: left;\n  width: 30%;\n}\n", ""]);

// exports


/***/ }),

/***/ 68:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:/Users/2ndyrGroupC/Documents/capstone/POS_driptea_front&back/resources/assets/js/basic/Register.vue: Unterminated regular expression (126:33)\n\n\u001b[0m \u001b[90m 124 | \u001b[39m                    \u001b[33mAUTH\u001b[39m\u001b[33m.\u001b[39mtoken \u001b[33m=\u001b[39m response\u001b[33m.\u001b[39mdata\u001b[33m.\u001b[39mtoken\n \u001b[90m 125 | \u001b[39m                    console\u001b[33m.\u001b[39mlog(\u001b[32m'response'\u001b[39m\u001b[33m,\u001b[39m response\u001b[33m.\u001b[39mdata\u001b[33m.\u001b[39mlength)\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 126 | \u001b[39m                    \u001b[33mROUTER\u001b[39m\u001b[33m.\u001b[39mpush(\u001b[33m/\u001b[39m)\n \u001b[90m     | \u001b[39m                                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 127 | \u001b[39m                    \u001b[90m// if(response.data > 0){\u001b[39m\n \u001b[90m 128 | \u001b[39m                    \u001b[90m// }\u001b[39m\n \u001b[90m 129 | \u001b[39m                    \u001b[90m// AUTH.token = response.data.token\u001b[39m\u001b[0m\n");

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("center", [
        _c("img", {
          staticStyle: { height: "150px", "margin-top": "1%" },
          attrs: { src: _vm.image },
          on: {
            click: function($event) {
              return _vm.redirect("/")
            }
          }
        }),
        _vm._v(" "),
        _c("p", [
          _vm._v("Register to "),
          _c(
            "b",
            {
              staticClass: "bRegister",
              on: {
                click: function($event) {
                  return _vm.redirect("/")
                }
              }
            },
            [_vm._v("Driptea")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("center", [
        _c("div", { staticClass: "containerWidth" }, [
          _c("i", [
            _vm.errorMessage7 !== null
              ? _c("span", { staticClass: "text-danger text-center" }, [
                  _vm._v(_vm._s(_vm.errorMessage7))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("form", [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "username" } }, [
                _vm._v("Username:")
              ]),
              _c("br"),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage2 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage2))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.username,
                    expression: "username"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "username" },
                domProps: { value: _vm.username },
                on: {
                  keyup: function($event) {
                    return _vm.validate("username")
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.username = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "email" } }, [_vm._v("Email:")]),
              _c("br"),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage3 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage3))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.email,
                    expression: "email"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "email", id: "email" },
                domProps: { value: _vm.email },
                on: {
                  keyup: function($event) {
                    return _vm.validate("email")
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.email = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "password" } }, [
                _vm._v("Password:")
              ]),
              _c("br"),
              _vm._v(" "),
              _vm.successMessage !== null
                ? _c("span", { staticClass: "text-success text-center" }, [
                    _vm._v(_vm._s(_vm.successMessage))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage4 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage4))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage5 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage5))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.password,
                    expression: "password"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "password", id: "password" },
                domProps: { value: _vm.password },
                on: {
                  keyup: function($event) {
                    return _vm.validate("password")
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.password = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "confirmPassword" } }, [
                _vm._v("Confirm password:")
              ]),
              _c("br"),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage6 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage6))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.confirmPass,
                    expression: "confirmPass"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "password", id: "confirmPassword" },
                domProps: { value: _vm.confirmPass },
                on: {
                  keyup: function($event) {
                    return _vm.validate("confirmPass")
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.confirmPass = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btnRegister",
                attrs: { type: "submit" },
                on: { click: _vm.register }
              },
              [_vm._v("Register")]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            [
              _c("label", { staticClass: "termsCondition" }, [
                _vm._v("By signing up, you agree to our "),
                _c(
                  "b",
                  {
                    staticClass: "bRegister",
                    on: {
                      click: function($event) {
                        return _vm.redirect("/")
                      }
                    }
                  },
                  [_vm._v("Terms")]
                ),
                _vm._v(" and "),
                _c(
                  "b",
                  {
                    staticClass: "bRegister",
                    on: {
                      click: function($event) {
                        return _vm.redirect("/")
                      }
                    }
                  },
                  [_vm._v("Conditions")]
                )
              ]),
              _c("hr"),
              _vm._v(" "),
              _c("center", [
                _c("label", { staticClass: "termsCondition" }, [
                  _vm._v("Already have an account? "),
                  _c(
                    "b",
                    {
                      staticClass: "bRegister",
                      on: {
                        click: function($event) {
                          return _vm.redirect("/")
                        }
                      }
                    },
                    [_vm._v("Login")]
                  )
                ])
              ])
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2badb436", module.exports)
  }
}

/***/ })

});