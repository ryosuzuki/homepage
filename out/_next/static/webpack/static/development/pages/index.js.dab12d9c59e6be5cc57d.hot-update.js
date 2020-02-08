webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/experience.js":
/*!*****************************!*\
  !*** ./pages/experience.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _content_output_experience_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../content/output/experience.json */ "./content/output/experience.json");
var _content_output_experience_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/output/experience.json */ "./content/output/experience.json", 1);









var Experience =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Experience, _React$Component);

  function Experience() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Experience);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Experience).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Experience, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "updates",
        className: "ui relaxed divided list"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Research Experience"), _content_output_experience_json__WEBPACK_IMPORTED_MODULE_7__.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "item",
          style: {
            padding: '20px 0'
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ui mini image"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: "/static/images/".concat(item.logo)
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "middle aligned content"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "header"
        }, item.institute.name, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "description"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: item.lab.url,
          target: "_blank"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, item.lab.name)))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "content"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ui list"
        }, item.advisors.map(function (advisor) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "item"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: advisor.url,
            target: "_blank"
          }, advisor.name));
        }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "extra",
          style: {
            marginLeft: '0px',
            marginTop: '5px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ui label"
        }, item.period)));
      }));
    }
  }]);

  return Experience;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Experience);

/***/ })

})
//# sourceMappingURL=index.js.dab12d9c59e6be5cc57d.hot-update.js.map