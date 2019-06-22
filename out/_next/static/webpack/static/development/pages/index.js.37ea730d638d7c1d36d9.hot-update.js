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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);








 // import { Link } from '../routes'
// import $ from 'jquery'
// window.jQuery = $

var ids = ['morphio', 'dynablock', 'tabby', 'reactile', 'pep', 'flux-marker', 'trace-diff', 'mixed-initiative', 'refazer', 'atelier'];
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
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Full Papers"), projects.map(function (project) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project ui vertical segment grid",
          "data-id": project.id
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "four wide column"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/".concat(project.id)
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: "ui rounded images",
          src: "/static/images/".concat(project.image)
        }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "twelve wide column"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
          className: "ui header",
          style: {
            marginBottom: '10px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/".concat(project.id)
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          class: "link"
        }, project.name)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "ui big label"
        }, project.conference.name)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
          style: {
            margin: '5px 0'
          }
        }, project.description), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, project.authors), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: '/publications/' + project.pdf,
          target: "blank",
          style: {
            marginRight: '5px',
            display: project.pdf ? 'inline' : 'none'
          }
        }, "[PDF]"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: project.video,
          target: "blank",
          style: {
            marginRight: '5px',
            display: project.video ? 'inline' : 'none'
          }
        }, "[Video]"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: project['short-video'],
          target: "blank",
          style: {
            marginRight: '5px',
            display: project['short-video'] ? 'inline' : 'none'
          }
        }, "[Short Video]"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: '/publications/' + project.slide,
          target: "blank",
          style: {
            marginRight: '5px',
            display: project.slide ? 'inline' : 'none'
          }
        }, "[Slide]"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: project.github,
          target: "blank",
          style: {
            marginRight: '5px',
            display: project.github ? 'inline' : 'none'
          }
        }, "[GitHub]"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: project['acm-dl'],
          target: "blank",
          style: {
            marginRight: '5px',
            display: project['acm-dl'] ? 'inline' : 'none'
          }
        }, "[ACM DL]"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: project['ieee'],
          target: "blank",
          style: {
            marginRight: '5px',
            display: project['ieee'] ? 'inline' : 'none'
          }
        }, "[IEEE]"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: project['talk'],
          target: "blank",
          style: {
            marginRight: '5px',
            display: project['talk'] ? 'inline' : 'none'
          }
        }, "[Talk]")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          id: project.id,
          className: "ui modal"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "content"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, project.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ui horizontal divider"
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "authors"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Authors"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "authors ui very relaxed horizontal divided list"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "item"
        }, project.authors))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ui horizontal divider"
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "video"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Video Preview"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "video-container"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("iframe", {
          id: "video",
          width: "560",
          height: "300",
          src: "https://www.youtube.com/embed/-JcezIL3UKQ",
          frameBorder: "0",
          allowFullScreen: true
        }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ui horizontal divider"
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "abstract"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Abstract"), project.abstract)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "actions"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ui approve button"
        }, "Approve"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ui button"
        }, "Neutral"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ui cancel button"
        }, "Cancel"))));
      }));
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
/*

/*
<div class="ui items">
  <div class="item">
    <div class="image">
      <img src="/images/wireframe/image.png">
    </div>
    <div class="content">
      <a class="header">Header</a>
      <div class="meta">
        <span>Description</span>
      </div>
      <div class="description">
        <p></p>
      </div>
      <div class="extra">
        Additional Details
      </div>
    </div>
  </div>
  <div class="item">
    <div class="image">
      <img src="/images/wireframe/image.png">
    </div>
    <div class="content">
      <a class="header">Header</a>
      <div class="meta">
        <span>Description</span>
      </div>
      <div class="description">
        <p></p>
      </div>
      <div class="extra">
        Additional Details
      </div>
    </div>
  </div>
</div>

      <div id="projects" className="ui items" >
        <h1>Projects</h1>
        { projects.map((project) => {
          return (
            <div className="project ui item" data-id={ project.id } >
              <div className="image">
                <img className="ui rounded image" src={ `/static/images/${ project.image }` } />
              </div>
              <div className="content">
                <h1 className="ui header" style={{ marginBottom: '10px' }}>
                  <span>{ project.name }</span>
                  <span className="ui large label">{ project.conference.name }</span>
                </h1>
                <h3 style={{ margin: '5px 0' }}>{ project.description }</h3>
                <p>{ project.authors }</p>
                <Link route={ project.id }>
                  <a>Link</a>
                </Link>
              </div>

              <div id={ project.id } className="ui modal">
                <div className="content">
                  <h1>{ project.title }</h1>
                  <div className="ui horizontal divider"></div>
                  <div className="authors">
                    <h3>Authors</h3>
                    <div className="authors ui very relaxed horizontal divided list">
                      <div className="item">
                        { project.authors }
                      </div>
                    </div>
                  </div>
                  <div className="ui horizontal divider"></div>
                  <div className="video">
                    <h3>Video Preview</h3>
                    <div className="video-container">
                      <iframe id="video" width="560" height="300" src="https://www.youtube.com/embed/-JcezIL3UKQ" frameBorder="0" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className="ui horizontal divider"></div>
                  <div className="abstract">
                    <h3>Abstract</h3>
                    { project.abstract }
                  </div>
                </div>
                <div className="actions">
                  <div className="ui approve button">Approve</div>
                  <div className="ui button">Neutral</div>
                  <div className="ui cancel button">Cancel</div>
                </div>
              </div>


            </div>
          )
        })}
      </div>
    )

*/


/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.37ea730d638d7c1d36d9.hot-update.js.map