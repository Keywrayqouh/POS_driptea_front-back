webpackJsonp([3],{

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(69)
}
var normalizeComponent = __webpack_require__(15)
/* script */
var __vue_script__ = __webpack_require__(71)
/* template */
var __vue_template__ = __webpack_require__(72)
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

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
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

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\nspan[data-v-2badb436] {\n  font-size: 12px;\n}\nhr[data-v-2badb436] {\n  border: 1px solid #17D817;\n}\n.termsCondition[data-v-2badb436] {\n  margin-top: 6%;\n  font-size: 15px;\n  text-align: center;\n}\n.form-control[data-v-2badb436] {\n  border: 1px solid #17D817;\n  border-radius: 5px;\n}\n.bRegister[data-v-2badb436] {\n  color: #0A8C0F;\n  cursor: pointer;\n}\np[data-v-2badb436] {\n  font-size: 20px;\n}\n.btnRegister[data-v-2badb436] {\n  margin-top: 2%;\n  margin-bottom: 2%;\n  background-color: #17D817;\n  font-weight: bold;\n  width: 100%;\n}\n@media screen and (max-width: 600px) {\n.containerWidth[data-v-2badb436] {\n    text-align: left;\n    width: 100%;\n}\n.form-group[data-v-2badb436] {\n    width: 100%;\n}\n.containerWidth[data-v-2badb436][data-v-2badb436] {\n    text-align: left;\n    width: 75%;\n}\n}\n@media screen and (max-width: 900px) {\n.containerWidth[data-v-2badb436] {\n    text-align: left;\n    width: 100%;\n}\n.form-group[data-v-2badb436] {\n    width: 100%;\n}\n.containerWidth[data-v-2badb436][data-v-2badb436] {\n    text-align: left;\n    width: 50%;\n}\n}\n.containerWidth[data-v-2badb436] {\n  text-align: left;\n  width: 30%;\n}\n", ""]);

// exports


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_logo_png__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_logo_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__image_logo_png__);
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
    name: "app",
    data: function data() {
        return {
            type: 'user',
            image: __WEBPACK_IMPORTED_MODULE_2__image_logo_png___default.a,
            username: '',
            email: '',
            password: '',
            confirmPass: '',
            successMessage: null,
            errorMessage: null,
            errorMessage2: null,
            errorMessage3: null,
            errorMessage4: null,
            errorMessage5: null,
            errorMessage6: null,
            errorMessage7: null
        };
    },
    mounted: function mounted() {},

    methods: {
        redirect: function redirect(route) {
            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push(route).catch(function () {});
        },
        register: function register() {
            var _this = this;

            this.validate('username');
            this.validate('email');
            this.validate('password');
            this.validate('confirmPass');
            var parameter = {
                account_type: this.type,
                name: this.username,
                email: this.email,
                password: this.password,
                password_confirmation: this.confirmPass
            };
            if (this.errorMessage === null && this.errorMessage2 === null && this.errorMessage3 === null && this.errorMessage4 === null && this.errorMessage5 === null && this.errorMessage6 === null && this.errorMessage7 === null) {
                this.$axios.post(__WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* default */].url + 'register', parameter).then(function (response) {
                    console.log('first', response);
                    __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* default */].authenticate(_this.username, _this.password, response.data.user.id, response.data.user.name, response.data.user.account_type);
                }).catch(function (error) {
                    if (error.response.status === 300) {
                        _this.errorMessage3 = 'Email already exist';
                    }
                });
            } else {
                this.errorMessage = 'Please fill up all fields';
            }
        },
        validate: function validate(input) {
            this.successMessage = null;
            var reqWhiteSpace = /\s/;
            if (input === 'username') {
                this.errorMessage = null;
                if (reqWhiteSpace.test(this.username)) {
                    this.errorMessage = 'Username should not contain a space.';
                } else if (this.username.length < 6) {
                    this.errorMessage2 = 'Username must be atleast 6 characters.';
                } else {
                    this.errorMessage = null;
                    this.errorMessage2 = null;
                }
            } else if (input === 'email') {
                this.errorMessage3 = null;
                if (this.validateEmail(this.email) === false) {
                    this.errorMessage3 = 'You have entered an invalid email address.';
                } else {
                    this.errorMessage3 = null;
                }
            } else if (input === 'password') {
                this.errorMessage4 = null;
                if (this.password.length < 8) {
                    this.errorMessage4 = 'Password must be atleast 8 characters.';
                } else if (/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/.test(this.password)) {
                    this.successMessage = 'Strong password.';
                    this.errorMessage4 = null;
                    this.errorMessage5 = null;
                } else {
                    this.errorMessage5 = 'Password must be alphanumeric characters. It should contain 1 number, 1 special character and 1 capital letter.';
                }
            } else if (input === 'confirmPass') {
                this.errorMessage6 = null;
                this.successMessage = null;
                if (this.password.localeCompare(this.confirmPass) !== 0) {
                    this.errorMessage6 = 'Password did not match.';
                } else {
                    this.errorMessage6 = null;
                }
            } else if (this.username.length >= 6 && this.email !== null && this.password !== null && this.password.length >= 6 && this.password.localeCompare(this.confirmPass) === 0 && this.type !== null && __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* default */].validateEmail(this.email) === true) {
                this.errorMessage = null;
            } else {
                this.errorMessage7 = 'Please fill in all required fields.';
                this.errorMessage7 = null;
            }
        },
        validateEmail: function validateEmail(email) {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/;
            if (reg.test(email) === false) {
                return false;
            } else {
                return true;
            }
        }
    }
});

/***/ }),

/***/ 72:
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