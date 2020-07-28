webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
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
/* harmony import */ var _content_output_summary_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../content/output/summary.json */ "./content/output/summary.json");
var _content_output_summary_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/output/summary.json */ "./content/output/summary.json", 1);








var ids = ['roomshift', 'lift-tiles', 'shapebots', 'morphio', 'dynablock', 'tabby', 'reactile', 'pep', 'flux-marker', 'trace-diff', 'mixed-initiative', 'refazer', 'atelier'];
var projects = [];

for (var _i = 0, _ids = ids; _i < _ids.length; _i++) {
  var id = _ids[_i];

  var project = __webpack_require__("./content/output/projects sync recursive ^\\.\\/.*\\.json$")("./".concat(id, ".json"));

  projects.push(project);
}

var Projects =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Projects, _React$Component);

  function Projects() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Projects);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Projects).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Projects, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "projects"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "PhD Dissertation"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "project ui vertical segment stackable grid",
        "data-id": ""
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "six wide column"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/phd-thesis"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "ui rounded images",
        src: "/static/images/collective.jpg"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ten wide column"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "phd-thesis"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: "ui header",
        style: {
          marginBottom: '10px'
        }
      }, "Collective Shape-changing Interfaces"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        style: {
          margin: '5px 0'
        }
      }, "Dynamic Shape Construction and Transformation with Collective Elements")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, "Ryo Suzuki")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Full Papers"), projects.map(function (project) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project ui vertical segment stackable grid",
          "data-id": project.id
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "six wide column"
        }, project.image && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: "/".concat(project.id)
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: "ui rounded images",
          src: "/static/images/".concat(project.image)
        })), !project.image && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("video", {
          poster: "/static/posters/".concat(project.id, ".png"),
          autoplay: "",
          loop: "loop",
          muted: "true",
          playsinline: "",
          width: "100%",
          onclick: "this.play()",
          onmouseover: "this.play()"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("source", {
          src: "/static/video/".concat(project.id, ".mp4"),
          type: "video/mp4"
        }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ten wide column"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: "/".concat(project.id)
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
          className: "ui header",
          style: {
            marginBottom: '10px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, project.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "ui big label"
        }, project.conference.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "ui teal large label",
          style: {
            display: ['morphio'].includes(project.id) ? 'inline-block' : 'none'
          }
        }, "Best Paper Award")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
          style: {
            margin: '5px 0'
          }
        }, project.description)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, project.authors.map(function (author) {
          return author.includes('Ryo Suzuki') ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, author) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, author);
        }).reduce(function (prev, curr) {
          return [prev, ', ', curr];
        }), " \xA0 ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          style: {
            color: 'gray'
          }
        }, project.note))));
      }));
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.a1567b772d06b318a7a8.hot-update.js.map