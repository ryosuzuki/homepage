webpackHotUpdate("static/development/pages/project.js",{

/***/ "./content/output/projects sync recursive ^\\.\\/.*\\.json$":
/*!*****************************************************!*\
  !*** ./content/output/projects sync ^\.\/.*\.json$ ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./atelier.json": "./content/output/projects/atelier.json",
	"./dynablock.json": "./content/output/projects/dynablock.json",
	"./flux-marker.json": "./content/output/projects/flux-marker.json",
	"./lift-tiles.json": "./content/output/projects/lift-tiles.json",
	"./mixed-initiative.json": "./content/output/projects/mixed-initiative.json",
	"./morphio.json": "./content/output/projects/morphio.json",
	"./pep.json": "./content/output/projects/pep.json",
	"./phd-thesis.json": "./content/output/projects/phd-thesis.json",
	"./reactile.json": "./content/output/projects/reactile.json",
	"./refazer.json": "./content/output/projects/refazer.json",
	"./roomshift.json": "./content/output/projects/roomshift.json",
	"./shapebots.json": "./content/output/projects/shapebots.json",
	"./tabby.json": "./content/output/projects/tabby.json",
	"./trace-diff.json": "./content/output/projects/trace-diff.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./content/output/projects sync recursive ^\\.\\/.*\\.json$";

/***/ }),

/***/ "./content/output/projects/phd-thesis.json":
/*!*************************************************!*\
  !*** ./content/output/projects/phd-thesis.json ***!
  \*************************************************/
/*! exports provided: id, name, description, title, authors, year, booktitle, publisher, pages, doi, conference, pdf, video, embed, acm-dl, slide, pageCount, slideCount, bodyContent, bodyHtml, dir, base, ext, sourceBase, sourceExt, default */
/***/ (function(module) {

module.exports = {"id":"phd-thesis","name":"Collective Shape-changing Interfaces","description":"Dynamic Shape Construction and Transformation with Collective Elements","title":"Dynamic Shape Construction and Transformation with Collective Elements","authors":["Ryo Suzuki"],"year":2020,"booktitle":"The Pacific Conference on Computer Graphics and Applications (Pacific Graphics 2018)","publisher":"The Eurographics Association","pages":"1-4","doi":"https://doi.org/10.2312/pg.20181273","conference":{"name":"Pacific Graphics 2018","fullname":"The Pacific Conference on Computer Graphics and Applications (Pacific Graphics 2018)","url":"http://sweb.cityu.edu.hk/pg2018/"},"pdf":"pg-2018-tabby.pdf","video":"https://www.youtube.com/watch?v=rRgw8lH74CA","embed":"https://www.youtube.com/embed/rRgw8lH74CA","acm-dl":"https://diglib.eg.org/handle/10.2312/pg20181273","slide":"pg-2018-tabby-slide.pdf","pageCount":4,"slideCount":40,"bodyContent":"# Abstract\nThis paper presents **Tabby, an interactive and explorable design tool for 3D printing textures**. Tabby allows texture design with direct manipulation in the following workflow: 1) select a target surface, 2) sketch and manipulate a texture with 2D drawings, and then 3) generate 3D printing textures onto an arbitrary curved surface. To enable efficient texture creation, Tabby leverages an auto-completion approach which automates the tedious, repetitive process of applying texture, while allowing flexible customization. Our user evaluation study with seven participants confirms that Tabby can effectively support the design exploration of different patterns for both novice and experienced users.\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/tabby/top.mp4\" type=\"video/mp4\"></source>\n</video>\n\n<div class=\"figures ui four column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/tabby/figure-1-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/tabby/figure-1-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/tabby/figure-1-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/tabby/figure-1-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/tabby/figure-1-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/tabby/figure-1-3.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/tabby/figure-1-4.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/tabby/figure-1-4.png\" /></a>\n  </div>\n</div>\n\n<div class=\"figures ui four column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/tabby/figure-1-5.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/tabby/figure-1-5.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/tabby/figure-1-6.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/tabby/figure-1-6.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/tabby/figure-1-7.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/tabby/figure-1-7.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/tabby/figure-1-8.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/tabby/figure-1-8.png\" /></a>\n  </div>\n</div>","bodyHtml":"<h1>Abstract</h1>\n<p>This paper presents <strong>Tabby, an interactive and explorable design tool for 3D printing textures</strong>. Tabby allows texture design with direct manipulation in the following workflow: 1) select a target surface, 2) sketch and manipulate a texture with 2D drawings, and then 3) generate 3D printing textures onto an arbitrary curved surface. To enable efficient texture creation, Tabby leverages an auto-completion approach which automates the tedious, repetitive process of applying texture, while allowing flexible customization. Our user evaluation study with seven participants confirms that Tabby can effectively support the design exploration of different patterns for both novice and experienced users.</p>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/tabby/top.mp4\" type=\"video/mp4\"></source>\n</video>\n<div class=\"figures ui four column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/tabby/figure-1-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/tabby/figure-1-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/tabby/figure-1-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/tabby/figure-1-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/tabby/figure-1-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/tabby/figure-1-3.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/tabby/figure-1-4.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/tabby/figure-1-4.png\" /></a>\n  </div>\n</div>\n<div class=\"figures ui four column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/tabby/figure-1-5.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/tabby/figure-1-5.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/tabby/figure-1-6.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/tabby/figure-1-6.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/tabby/figure-1-7.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/tabby/figure-1-7.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/tabby/figure-1-8.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/tabby/figure-1-8.png\" /></a>\n  </div>\n</div>","dir":"content/output/projects","base":"phd-thesis.json","ext":".json","sourceBase":"phd-thesis.md","sourceExt":".md"};

/***/ })

})
//# sourceMappingURL=project.js.03eb816ad4cd946b6e49.hot-update.js.map