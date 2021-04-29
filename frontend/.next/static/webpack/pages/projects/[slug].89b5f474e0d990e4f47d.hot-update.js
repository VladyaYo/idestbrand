webpackHotUpdate_N_E("pages/projects/[slug]",{

/***/ "./pages/projects/[slug].js":
/*!**********************************!*\
  !*** ./pages/projects/[slug].js ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/image */ \"./components/image.js\");\n/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/seo */ \"./components/seo.js\");\n/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/text */ \"./components/text.js\");\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/media */ \"./lib/media.js\");\n/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/hero */ \"./components/hero.js\");\n/* harmony import */ var _components_fullScreenVideo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/fullScreenVideo */ \"./components/fullScreenVideo.js\");\n/* harmony import */ var _components_fullscreenImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/fullscreenImage */ \"./components/fullscreenImage.js\");\n/* harmony import */ var _components_containerVideo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/containerVideo */ \"./components/containerVideo.js\");\n/* harmony import */ var _components_containerImage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/containerImage */ \"./components/containerImage.js\");\n/* harmony import */ var _components_breadcrumbs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/breadcrumbs */ \"./components/breadcrumbs.js\");\n/* harmony import */ var _components_moreProjects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/moreProjects */ \"./components/moreProjects.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/vladtishenko/Work/project/idest/frontend/pages/projects/[slug].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Project = function Project(_ref) {\n  var projects = _ref.projects,\n      seo = _ref.seo,\n      project = _ref.project;\n\n  // const imageUrl = getStrapiMedia(projects.image);\n  // const example = Breadcrumbs()\n  // const seo = {\n  //     metaTitle: project.title,\n  //     metaDescription: project.description,\n  //     shareImage: project.image,\n  //     article: true,\n  // };\n  // console.log(params.slug)\n  var renderContent = function renderContent(content) {\n    switch (content.__component) {\n      case 'sections.fullscreen-image':\n        return __jsx(_components_fullscreenImage__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n          key: \"\".concat(content.__component, \" + \").concat(content.id),\n          image: content,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 24\n          }\n        });\n\n      case 'sections.text':\n        return __jsx(_components_text__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          key: \"\".concat(content.__component, \" + \").concat(content.id),\n          text: content,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 24\n          }\n        });\n\n      case 'sections.video':\n        return __jsx(_components_fullScreenVideo__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n          key: \"\".concat(content.__component, \" + \").concat(content.id),\n          video: content,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 24\n          }\n        });\n\n      case 'sections.video-container':\n        return __jsx(_components_containerVideo__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n          key: \"\".concat(content.__component, \" + \").concat(content.id),\n          video: content,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 24\n          }\n        });\n\n      case 'sections.image':\n        return __jsx(_components_containerImage__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n          key: \"\".concat(content.__component, \" + \").concat(content.id),\n          image: content,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 24\n          }\n        });\n\n      default:\n        return null;\n    }\n  };\n\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(_components_seo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    seo: seo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }), __jsx(_components_breadcrumbs__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }), __jsx(_components_hero__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    hero: project.hero,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }), project.contentBlock.map(function (content) {\n    return renderContent(content);\n  }), __jsx(_components_moreProjects__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    articles: projects,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }));\n};\n\n_c = Project;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3NsdWddLmpzPzgxMmUiXSwibmFtZXMiOlsiUHJvamVjdCIsInByb2plY3RzIiwic2VvIiwicHJvamVjdCIsInJlbmRlckNvbnRlbnQiLCJjb250ZW50IiwiX19jb21wb25lbnQiLCJpZCIsImhlcm8iLCJjb250ZW50QmxvY2siLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFpQztBQUFBLE1BQTlCQyxRQUE4QixRQUE5QkEsUUFBOEI7QUFBQSxNQUFwQkMsR0FBb0IsUUFBcEJBLEdBQW9CO0FBQUEsTUFBZkMsT0FBZSxRQUFmQSxPQUFlOztBQUM3QztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0o7QUFHSSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLE9BQU8sRUFBSTtBQUM3QixZQUFRQSxPQUFPLENBQUNDLFdBQWhCO0FBQ0ksV0FBSywyQkFBTDtBQUNJLGVBQU8sTUFBQyxvRUFBRDtBQUFpQixhQUFHLFlBQUtELE9BQU8sQ0FBQ0MsV0FBYixnQkFBOEJELE9BQU8sQ0FBQ0UsRUFBdEMsQ0FBcEI7QUFBZ0UsZUFBSyxFQUFFRixPQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7O0FBQ0osV0FBSyxlQUFMO0FBQ0ksZUFBTyxNQUFDLHdEQUFEO0FBQU0sYUFBRyxZQUFLQSxPQUFPLENBQUNDLFdBQWIsZ0JBQThCRCxPQUFPLENBQUNFLEVBQXRDLENBQVQ7QUFBcUQsY0FBSSxFQUFFRixPQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7O0FBQ0osV0FBSyxnQkFBTDtBQUNJLGVBQU8sTUFBQyxtRUFBRDtBQUFpQixhQUFHLFlBQUtBLE9BQU8sQ0FBQ0MsV0FBYixnQkFBOEJELE9BQU8sQ0FBQ0UsRUFBdEMsQ0FBcEI7QUFBZ0UsZUFBSyxFQUFFRixPQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7O0FBQ0osV0FBSywwQkFBTDtBQUNJLGVBQU8sTUFBQyxtRUFBRDtBQUFnQixhQUFHLFlBQUtBLE9BQU8sQ0FBQ0MsV0FBYixnQkFBOEJELE9BQU8sQ0FBQ0UsRUFBdEMsQ0FBbkI7QUFBK0QsZUFBSyxFQUFFRixPQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7O0FBQ0osV0FBSyxnQkFBTDtBQUNJLGVBQU8sTUFBQyxtRUFBRDtBQUFnQixhQUFHLFlBQUtBLE9BQU8sQ0FBQ0MsV0FBYixnQkFBOEJELE9BQU8sQ0FBQ0UsRUFBdEMsQ0FBbkI7QUFBK0QsZUFBSyxFQUFFRixPQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7O0FBQ0o7QUFDSSxlQUFPLElBQVA7QUFaUjtBQWNILEdBZkQ7O0FBZ0JBLFNBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx1REFBRDtBQUFLLE9BQUcsRUFBRUgsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJLE1BQUMsd0RBQUQ7QUFBTSxRQUFJLEVBQUVDLE9BQU8sQ0FBQ0ssSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUtMLE9BQU8sQ0FBQ00sWUFBUixDQUFxQkMsR0FBckIsQ0FBeUIsVUFBQ0wsT0FBRDtBQUFBLFdBQWFELGFBQWEsQ0FBQ0MsT0FBRCxDQUExQjtBQUFBLEdBQXpCLENBSkwsRUFLSSxNQUFDLGlFQUFEO0FBQWMsWUFBUSxFQUFFSixRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosQ0FESjtBQVdILENBeENEOztLQUFNRCxPOztBQWtFU0Esc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIjtcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW1hZ2VcIjtcbmltcG9ydCBTZW8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VvXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90ZXh0XCI7XG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi8uLi9saWIvbWVkaWFcIjtcbmltcG9ydCBIZXJvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hlcm9cIjtcbmltcG9ydCBGdWxsU2NyZWVuVmlkZW8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZnVsbFNjcmVlblZpZGVvXCI7XG5pbXBvcnQgRnVsbFNjcmVlbkltYWdlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Z1bGxzY3JlZW5JbWFnZVwiO1xuaW1wb3J0IENvbnRhaW5lclZpZGVvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbnRhaW5lclZpZGVvXCJcbmltcG9ydCBDb250YWluZXJJbWFnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb250YWluZXJJbWFnZVwiO1xuaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2JyZWFkY3J1bWJzXCI7XG5pbXBvcnQgTW9yZVByb2plY3RzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vcmVQcm9qZWN0c1wiO1xuY29uc3QgUHJvamVjdCA9ICh7IHByb2plY3RzLCBzZW8sIHByb2plY3QgIH0pID0+IHtcbiAgICAvLyBjb25zdCBpbWFnZVVybCA9IGdldFN0cmFwaU1lZGlhKHByb2plY3RzLmltYWdlKTtcbiAgICAvLyBjb25zdCBleGFtcGxlID0gQnJlYWRjcnVtYnMoKVxuXG4gICAgLy8gY29uc3Qgc2VvID0ge1xuICAgIC8vICAgICBtZXRhVGl0bGU6IHByb2plY3QudGl0bGUsXG4gICAgLy8gICAgIG1ldGFEZXNjcmlwdGlvbjogcHJvamVjdC5kZXNjcmlwdGlvbixcbiAgICAvLyAgICAgc2hhcmVJbWFnZTogcHJvamVjdC5pbWFnZSxcbiAgICAvLyAgICAgYXJ0aWNsZTogdHJ1ZSxcbiAgICAvLyB9O1xuLy8gY29uc29sZS5sb2cocGFyYW1zLnNsdWcpXG5cblxuICAgIGNvbnN0IHJlbmRlckNvbnRlbnQgPSBjb250ZW50ID0+IHtcbiAgICAgICAgc3dpdGNoIChjb250ZW50Ll9fY29tcG9uZW50KSB7XG4gICAgICAgICAgICBjYXNlICdzZWN0aW9ucy5mdWxsc2NyZWVuLWltYWdlJyA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxGdWxsU2NyZWVuSW1hZ2Uga2V5PXtgJHtjb250ZW50Ll9fY29tcG9uZW50fSArICR7Y29udGVudC5pZH1gfSBpbWFnZT17Y29udGVudH0vPlxuICAgICAgICAgICAgY2FzZSAnc2VjdGlvbnMudGV4dCcgOlxuICAgICAgICAgICAgICAgIHJldHVybiA8VGV4dCBrZXk9e2Ake2NvbnRlbnQuX19jb21wb25lbnR9ICsgJHtjb250ZW50LmlkfWB9IHRleHQ9e2NvbnRlbnR9Lz5cbiAgICAgICAgICAgIGNhc2UgJ3NlY3Rpb25zLnZpZGVvJyA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxGdWxsU2NyZWVuVmlkZW8ga2V5PXtgJHtjb250ZW50Ll9fY29tcG9uZW50fSArICR7Y29udGVudC5pZH1gfSB2aWRlbz17Y29udGVudH0vPlxuICAgICAgICAgICAgY2FzZSAnc2VjdGlvbnMudmlkZW8tY29udGFpbmVyJyA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDb250YWluZXJWaWRlbyBrZXk9e2Ake2NvbnRlbnQuX19jb21wb25lbnR9ICsgJHtjb250ZW50LmlkfWB9IHZpZGVvPXtjb250ZW50fS8+XG4gICAgICAgICAgICBjYXNlICdzZWN0aW9ucy5pbWFnZScgOlxuICAgICAgICAgICAgICAgIHJldHVybiA8Q29udGFpbmVySW1hZ2Uga2V5PXtgJHtjb250ZW50Ll9fY29tcG9uZW50fSArICR7Y29udGVudC5pZH1gfSBpbWFnZT17Y29udGVudH0vPlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8U2VvIHNlbz17c2VvfSAvPlxuICAgICAgICAgICAgPEJyZWFkY3J1bWJzLz5cbiAgICAgICAgICAgIDxIZXJvIGhlcm89e3Byb2plY3QuaGVyb30vPlxuICAgICAgICAgICAge3Byb2plY3QuY29udGVudEJsb2NrLm1hcCgoY29udGVudCkgPT4gcmVuZGVyQ29udGVudChjb250ZW50KSl9XG4gICAgICAgICAgICA8TW9yZVByb2plY3RzIGFydGljbGVzPXtwcm9qZWN0c30vPlxuXG5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGF3YWl0IGZldGNoQVBJKFwiL3Byb2plY3RzXCIpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzOiBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+ICh7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBzbHVnOiBwcm9qZWN0LnNsdWcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSksXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICAgIGNvbnN0IHByb2plY3RzID0gYXdhaXQgZmV0Y2hBUEkoXG4gICAgICAgIGAvcHJvamVjdHM/c2x1Zz0ke3BhcmFtcy5zbHVnfWBcbiAgICApO1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyBwcm9qZWN0OiBwcm9qZWN0c1swXSB9LFxuICAgICAgICByZXZhbGlkYXRlOiAxLFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects/[slug].js\n");

/***/ })

})