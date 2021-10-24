"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_LinksList_vue"],{

/***/ "./resources/js/views/LinksList.vue":
/*!******************************************!*\
  !*** ./resources/js/views/LinksList.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LinksList_vue_vue_type_template_id_3650a330___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinksList.vue?vue&type=template&id=3650a330& */ "./resources/js/views/LinksList.vue?vue&type=template&id=3650a330&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _LinksList_vue_vue_type_template_id_3650a330___WEBPACK_IMPORTED_MODULE_0__.render,
  _LinksList_vue_vue_type_template_id_3650a330___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/LinksList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/LinksList.vue?vue&type=template&id=3650a330&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/LinksList.vue?vue&type=template&id=3650a330& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LinksList_vue_vue_type_template_id_3650a330___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LinksList_vue_vue_type_template_id_3650a330___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LinksList_vue_vue_type_template_id_3650a330___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LinksList.vue?vue&type=template&id=3650a330& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/LinksList.vue?vue&type=template&id=3650a330&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/LinksList.vue?vue&type=template&id=3650a330&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/LinksList.vue?vue&type=template&id=3650a330& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      {
        staticClass:
          "container is-flex is-flex-direction-column is-align-items-center mt-5"
      },
      [
        _c("h1", [_vm._v("Список  ссылок")]),
        _vm._v(" "),
        _c("table", { staticClass: "table" }, [
          _c("thead", [
            _c("tr", [
              _c("th", [
                _c("abbr", { attrs: { title: "ID Link" } }, [_vm._v("ID")])
              ]),
              _vm._v(" "),
              _c("th", [
                _c("abbr", { attrs: { title: "Short Link" } }, [
                  _vm._v("Короткая ссылка")
                ])
              ]),
              _vm._v(" "),
              _c("th", [
                _c("abbr", { attrs: { title: "Full Link" } }, [
                  _vm._v("Полная ссылка")
                ])
              ]),
              _vm._v(" "),
              _c("th", [
                _c("abbr", { attrs: { title: "Visited" } }, [
                  _vm._v("Кол. переходов")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("tbody", [
            _c("tr", [
              _c("td", [_vm._v("1")]),
              _vm._v(" "),
              _c("td", [_vm._v("asdf asdf")]),
              _vm._v(" "),
              _c("td", [_vm._v("full link")]),
              _vm._v(" "),
              _c("td", [_vm._v("visits")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("1")]),
              _vm._v(" "),
              _c("td", [_vm._v("asdf asdf")]),
              _vm._v(" "),
              _c("td", [_vm._v("full link")]),
              _vm._v(" "),
              _c("td", [_vm._v("visits")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("1")]),
              _vm._v(" "),
              _c("td", [_vm._v("asdf asdf")]),
              _vm._v(" "),
              _c("td", [_vm._v("full link")]),
              _vm._v(" "),
              _c("td", [_vm._v("visits")])
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);