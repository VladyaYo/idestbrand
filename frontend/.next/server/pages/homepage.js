(function() {
var exports = {};
exports.id = 883;
exports.ids = [883,888];
exports.modules = {

/***/ 5978:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const CommercialProposal = ({
  links = []
}) => {
  return links && links.length ? __jsx("section", {
    className: "commercialProposal formsLinks"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "links"
  }, links.map(link => {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
      key: link.id,
      href: link.link
    }, __jsx("a", {
      target: "_blank"
    }, link.nameLink));
  })))) : null;
};

/* harmony default export */ __webpack_exports__["Z"] = (CommercialProposal);

/***/ }),

/***/ 7077:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6495);
/* harmony import */ var _components_articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5109);
/* harmony import */ var _components_columns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6382);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6262);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8655);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6046);
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(922);
/* harmony import */ var _components_fullScreenVideo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9992);
/* harmony import */ var _components_fullscreenImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4978);
/* harmony import */ var _components_numericText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7127);
/* harmony import */ var _components_comercialProposal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5978);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_locales_ru__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4394);
/* harmony import */ var _public_locales_ua__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6737);
/* harmony import */ var _public_locales_en__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5196);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


















const Home = ({
  projects,
  categories,
  homepage
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
  const {
    locale
  } = router;
  let t;

  switch (locale) {
    case "ru-RU":
      t = _public_locales_ru__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z;
      break;

    case "uk-UA":
      t = _public_locales_ua__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z;
      break;

    default:
      t = _public_locales_en__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z;
  }

  ;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    categories: categories,
    pageClass: "mainPage"
  }, __jsx(_components_seo__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    seo: homepage.seo
  }), __jsx(_components_hero__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    hero: homepage.hero
  }), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    text: homepage.textBlock
  }), __jsx(_components_fullScreenVideo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    video: homepage.video
  }), __jsx(_components_columns__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    columns: homepage.columnsBlock
  }), __jsx(_components_fullscreenImage__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    image: homepage.singleImage
  }), __jsx(_components_numericText__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    rows: homepage.numericText
  }), __jsx(_components_articles__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    articles: projects,
    count: 4
  }), __jsx("section", {
    className: "allPostBtn"
  }, __jsx("div", {
    className: "container"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11__.default, {
    href: "/projects"
  }, __jsx("a", null, t.findOutMore)))), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    text: homepage.commercial
  }), __jsx(_components_comercialProposal__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
    links: homepage.commercialLinks
  }));
};

async function getStaticProps({
  locale = "en"
}) {
  // Run API calls in parallel
  const [projects, homepage] = await Promise.all([(0,_lib_api__WEBPACK_IMPORTED_MODULE_16__/* .fetchAPI */ .I)(`/projects?_locale=${locale}`), (0,_lib_api__WEBPACK_IMPORTED_MODULE_16__/* .fetchAPI */ .I)(`/homepage?_locale=${locale}`)]);
  return {
    props: {
      projects,
      homepage
    },
    revalidate: 1
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 953:
/***/ (function(module) {

"use strict";
module.exports = require("antd");;

/***/ }),

/***/ 4058:
/***/ (function(module) {

"use strict";
module.exports = require("classnames");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 8220:
/***/ (function(module) {

"use strict";
module.exports = require("react-showdown");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [544,664,522,463,404,876], function() { return __webpack_exec__(7077); });
module.exports = __webpack_exports__;

})();