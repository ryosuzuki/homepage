webpackHotUpdate("static/development/pages/index.js",{

/***/ "./content/output/press.json":
/*!***********************************!*\
  !*** ./content/output/press.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = [{"date":"2019-11","tag":"shapebots","media":"Bouncy","title":"Swarm Robots that can Change Shape to Visualize Data","url":"https://bouncy.news/53532?fbclid=IwAR0jyfBKo8LJ3aiUidDfZUsQqJ5-oSMxRuiZyJju0g_F6A_hi1tOeboPM4E"},{"date":"2019-10","tag":"shapebots","media":"Hackster.io","title":"ShapeBots Swarming Robots Can Change Their Configuration to Handle Different Tasks","url":"https://www.hackster.io/news/shapebots-swarming-robots-can-change-their-configuration-to-handle-different-tasks-59a5ae926e1d"},{"date":"2019-09","tag":"shapebots","media":"TechXplore","title":"ShapeBots: A Swarm of Shape-shifting Robots that Visually Display Data","url":"https://techxplore.com/news/2019-09-shapebots-swarm-shape-shifting-robots-visually.html"},{"date":"2019-09","tag":"shapebots","media":"Hackaday","title":"Tiny Robots that Grow Taller and Wider","url":"https://hackaday.com/2019/10/04/tiny-robots-that-grow-taller-and-wider/"},{"date":"2019-09","title":"ShapeBots: Shape-changing Swarm Robots","url":"https://www.roboticgizmos.com/shapebots/"},{"date":"2019-09","tag":"shapebots","media":"Gadgetify","title":"ShapeBots: Shape Changing Swarm Robots","url":"http://www.gadgetify.com/shapebots/"}];

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _static_css_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/css/style.css */ "./static/css/style.css");
/* harmony import */ var _static_css_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_css_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _content_output_experience_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../content/output/experience.json */ "./content/output/experience.json");
var _content_output_experience_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/output/experience.json */ "./content/output/experience.json", 1);
/* harmony import */ var _content_output_fellowship_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../content/output/fellowship.json */ "./content/output/fellowship.json");
var _content_output_fellowship_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/output/fellowship.json */ "./content/output/fellowship.json", 1);
/* harmony import */ var _content_output_activities_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../content/output/activities.json */ "./content/output/activities.json");
var _content_output_activities_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/output/activities.json */ "./content/output/activities.json", 1);
/* harmony import */ var _content_output_publications_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../content/output/publications.json */ "./content/output/publications.json");
var _content_output_publications_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/output/publications.json */ "./content/output/publications.json", 1);
/* harmony import */ var _content_output_posters_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../content/output/posters.json */ "./content/output/posters.json");
var _content_output_posters_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/output/posters.json */ "./content/output/posters.json", 1);
/* harmony import */ var _content_output_press_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../content/output/press.json */ "./content/output/press.json");
var _content_output_press_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/output/press.json */ "./content/output/press.json", 1);
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile */ "./pages/profile.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./projects */ "./pages/projects.js");
/* harmony import */ var _experience__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./experience */ "./pages/experience.js");
/* harmony import */ var _timeline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./timeline */ "./pages/timeline.js");



















var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {// $('a').attr('target', 'blank');
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", null, "Ryo Suzuki | University of Colorado Boulder"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ui stackable grid"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "one wide column"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "eleven wide column centered"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_profile__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        id: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_projects__WEBPACK_IMPORTED_MODULE_15__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        class: "ui divider"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "posters"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Posters and Demos"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ui vertical segment"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ui bulleted list"
      }, _content_output_posters_json__WEBPACK_IMPORTED_MODULE_12__.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "item",
          target: "_blank",
          style: {
            lineHeight: '1.8rem'
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "[", item.series, "]"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: '/publications/' + item.pdf
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, item.title)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), item.author, ", ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", null, item.booktitle, " (", item.series, ")"), ". ", item.publisher, ", ", item.address, ", ", item.pages, ".", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: '/publications/' + item.pdf,
          target: "_blank",
          style: {
            marginRight: '5px',
            display: item.pdf ? 'inline' : 'none'
          }
        }, "[PDF]"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: '/publications/' + item.poster,
          target: "_blank",
          style: {
            marginRight: '5px',
            display: item.poster ? 'inline' : 'none'
          }
        }, "[Poster]"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: '/publications/' + item.slide,
          target: "_blank",
          style: {
            marginRight: '5px',
            display: item.slide ? 'inline' : 'none'
          }
        }, "[Slide]"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: item.url,
          target: "_blank",
          style: {
            marginRight: '5px',
            display: item.url ? 'inline' : 'none'
          }
        }, "[DOI]"));
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        class: "ui divider"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "activities"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Professional Activities"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ui vertical segment"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        source: _content_output_activities_json__WEBPACK_IMPORTED_MODULE_10__.bodyContent
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        class: "ui divider"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "fellowship"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Scholarship and Fellowship"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ui vertical segment"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        source: _content_output_fellowship_json__WEBPACK_IMPORTED_MODULE_9__.bodyContent
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        class: "ui divider"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "press"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Selected Press Coverage"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ui vertical segment"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        source: _content_output_fellowship_json__WEBPACK_IMPORTED_MODULE_9__.bodyContent
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "side",
        className: "three wide column centered",
        style: {
          marginTop: '50px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_experience__WEBPACK_IMPORTED_MODULE_16__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_timeline__WEBPACK_IMPORTED_MODULE_17__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        class: "twitter-timeline",
        height: "1500px",
        href: "https://twitter.com/ryosuzk?ref_src=twsrc%5Etfw"
      }, "Tweets by @ryosuzk"), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("script", {
        async: true,
        src: "https://platform.twitter.com/widgets.js",
        charset: "utf-8"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "one wide column"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ui stackable grid"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "sixteen wide column centered"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: {
          textAlign: 'center'
        }
      }))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.6ac7ac299a0123183e16.hot-update.js.map