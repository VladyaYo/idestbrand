webpackHotUpdate_N_E("pages/allProjects",{

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ \"./components/image.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/vladtishenko/Work/project/idest/frontend/components/card.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Card = function Card(_ref) {\n  var article = _ref.article;\n  var firstImgEl = article.contentBlock.find(function (item) {\n    if (item.image) {\n      return item;\n    }\n  });\n  var firstTxtEl = article.contentBlock.find(function (item) {\n    if (item.about) {\n      return item;\n    }\n  });\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/projects/\".concat(article.slug),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: \"card\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"top\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, firstImgEl ? __jsx(_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    image: firstImgEl.image,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 27\n    }\n  }) : ''), __jsx(\"div\", {\n    className: \"cardBody\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: \"name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, article.projectName), firstTxtEl ? __jsx(\"p\", {\n    className: \"title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 29\n    }\n  }, firstTxtEl.about.substring(0, 140) + '...') : '')));\n};\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkLmpzPzUxZTAiXSwibmFtZXMiOlsiQ2FyZCIsImFydGljbGUiLCJmaXJzdEltZ0VsIiwiY29udGVudEJsb2NrIiwiZmluZCIsIml0ZW0iLCJpbWFnZSIsImZpcnN0VHh0RWwiLCJhYm91dCIsInNsdWciLCJwcm9qZWN0TmFtZSIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFrQjtBQUFBLE1BQWZDLE9BQWUsUUFBZkEsT0FBZTtBQUM3QixNQUFNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQ0UsWUFBUixDQUFxQkMsSUFBckIsQ0FBMEIsVUFBQUMsSUFBSSxFQUFJO0FBQ25ELFFBQUdBLElBQUksQ0FBQ0MsS0FBUixFQUFjO0FBQ1osYUFBT0QsSUFBUDtBQUNEO0FBQ0YsR0FKa0IsQ0FBbkI7QUFLQSxNQUFNRSxVQUFVLEdBQUdOLE9BQU8sQ0FBQ0UsWUFBUixDQUFxQkMsSUFBckIsQ0FBMEIsVUFBQUMsSUFBSSxFQUFJO0FBQ25ELFFBQUdBLElBQUksQ0FBQ0csS0FBUixFQUFjO0FBQ1osYUFBT0gsSUFBUDtBQUNEO0FBQ0YsR0FKa0IsQ0FBbkI7QUFNQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLHNCQUFlSixPQUFPLENBQUNRLElBQXZCLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUCxVQUFVLEdBQUcsTUFBQyw4Q0FBRDtBQUFPLFNBQUssRUFBRUEsVUFBVSxDQUFDSSxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBdUMsRUFEcEQsQ0FESixFQUlJO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTCxPQUFPLENBQUNTLFdBRFgsQ0FERixFQUlLSCxVQUFVLEdBQUc7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCQSxVQUFVLENBQUNDLEtBQVgsQ0FBaUJHLFNBQWpCLENBQTJCLENBQTNCLEVBQTZCLEdBQTdCLElBQW9DLEtBQTFELENBQUgsR0FBMEUsRUFKekYsQ0FKSixDQURGLENBREY7QUFlRCxDQTNCRDs7S0FBTVgsSTtBQTZCU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4vaW1hZ2VcIjtcblxuY29uc3QgQ2FyZCA9ICh7IGFydGljbGUsIH0pID0+IHtcbiAgY29uc3QgZmlyc3RJbWdFbCA9IGFydGljbGUuY29udGVudEJsb2NrLmZpbmQoaXRlbSA9PiB7XG4gICAgaWYoaXRlbS5pbWFnZSl7XG4gICAgICByZXR1cm4gaXRlbVxuICAgIH1cbiAgfSlcbiAgY29uc3QgZmlyc3RUeHRFbCA9IGFydGljbGUuY29udGVudEJsb2NrLmZpbmQoaXRlbSA9PiB7XG4gICAgaWYoaXRlbS5hYm91dCl7XG4gICAgICByZXR1cm4gaXRlbVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e2AvcHJvamVjdHMvJHthcnRpY2xlLnNsdWd9YH0+XG4gICAgICA8YSBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cbiAgICAgICAgICAgIHtmaXJzdEltZ0VsID8gPEltYWdlIGltYWdlPXtmaXJzdEltZ0VsLmltYWdlfSAvPiA6Jyd9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkQm9keVwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmFtZVwiPlxuICAgICAgICAgICAgICB7YXJ0aWNsZS5wcm9qZWN0TmFtZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAge2ZpcnN0VHh0RWwgPyA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPntmaXJzdFR4dEVsLmFib3V0LnN1YnN0cmluZygwLDE0MCkgKyAnLi4uJ308L3A+IDogJyd9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2E+XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/card.js\n");

/***/ })

})