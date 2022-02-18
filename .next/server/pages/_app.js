"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/styles/global */ \"./src/styles/global.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/gabriel.rezende/Documents/Projetos/json-to-csv/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        charset: \"utf-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"%PUBLIC_URL%/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        name: \"theme-color\",\n        content: \"#FF9000\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Convert to json, formatter json, convert json to csv, json to pdf and checker your json files\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        async: true,\n        href: \"https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"title\", {\n        children: \"Convert and formatter json to csv, pdf and diff checker\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"script\", {\n        dangerouslySetInnerHTML: {\n          __html: `\n                        (function (w, d, s, l, i) {\n                          w[l] = w[l] || [];\n                          w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });\n                          var f = d.getElementsByTagName(s)[0],\n                            j = d.createElement(s),\n                            dl = l != 'dataLayer' ? '&l=' + l : '';\n                          j.async = true;\n                          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;\n                          f.parentNode.insertBefore(j, f);\n                        })(window, document, 'script', 'dataLayer', 'GTM-WL2PM76');\n                        `\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {\n      src: \"https://polyfill.io/v3/polyfill.min.js\",\n      strategy: \"beforeInteractive\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_styles_global__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBRUEsU0FBU0ksS0FBVCxDQUFlO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFmLEVBQXlDO0FBQ3JDLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw4QkFFSTtBQUFNLGVBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQUlJO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQUtJO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSixlQU1JO0FBQ0UsWUFBSSxFQUFDLGFBRFA7QUFFRSxlQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosZUFVSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkosZUFXSTtBQUNFLGFBQUssTUFEUDtBQUVFLFlBQUksRUFBQyxnRkFGUDtBQUdFLFdBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYSixlQWlCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCSixlQW1CSTtBQUFRLCtCQUF1QixFQUFFO0FBQ3pCQyxVQUFBQSxNQUFNLEVBQUc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVppRDtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBb0NJLDhEQUFDLG9EQUFEO0FBQVEsU0FBRyxFQUFDLHdDQUFaO0FBQXFELGNBQVEsRUFBQztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcENKLGVBcUNJLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQ0osZUFzQ0ksOERBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdENKO0FBQUEsa0JBREo7QUEwQ0g7O0FBR0QsaUVBQWVGLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbHVyYS1jYXNlcy1kaXZ1bGdhY2FvLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgU2NyaXB0IGZyb20gJ25leHQvc2NyaXB0JztcblxuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gJy4uL3NyYy9zdHlsZXMvZ2xvYmFsJztcbmltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXQgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cblxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIlUFVCTElDX1VSTCUvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNGRjkwMDBcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgY29udGVudD1cIkNvbnZlcnQgdG8ganNvbiwgZm9ybWF0dGVyIGpzb24sIGNvbnZlcnQganNvbiB0byBjc3YsIGpzb24gdG8gcGRmIGFuZCBjaGVja2VyIHlvdXIganNvbiBmaWxlc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgICBhc3luY1xuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK1NsYWI6d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNvbnZlcnQgYW5kIGZvcm1hdHRlciBqc29uIHRvIGNzdiwgcGRmIGFuZCBkaWZmIGNoZWNrZXI8L3RpdGxlPlxuXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKHcsIGQsIHMsIGwsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd1tsXSA9IHdbbF0gfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdbbF0ucHVzaCh7ICdndG0uc3RhcnQnOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSwgZXZlbnQ6ICdndG0uanMnIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaiA9IGQuY3JlYXRlRWxlbWVudChzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbCA9IGwgIT0gJ2RhdGFMYXllcicgPyAnJmw9JyArIGwgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgai5hc3luYyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGouc3JjID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0bS5qcz9pZD0nICsgaSArIGRsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGosIGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkod2luZG93LCBkb2N1bWVudCwgJ3NjcmlwdCcsICdkYXRhTGF5ZXInLCAnR1RNLVdMMlBNNzYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPC9zY3JpcHQ+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8U2NyaXB0IHNyYz1cImh0dHBzOi8vcG9seWZpbGwuaW8vdjMvcG9seWZpbGwubWluLmpzXCIgc3RyYXRlZ3k9XCJiZWZvcmVJbnRlcmFjdGl2ZVwiIC8+XG4gICAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJTY3JpcHQiLCJHbG9iYWxTdHlsZSIsIlNlcnZlclN0eWxlU2hlZXQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/styles/global.ts":
/*!******************************!*\
  !*** ./src/styles/global.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)([\"*{margin:0;padding:0;box-sizing:border-box;outline:0;}body{background:#333;color:#fff;-webkit-font-smoothing:antialiased;}body,input,button{font-family:'Roboto Slab',serif;font-size:16px;}h1,h2,h3,h4,h5,strong{font-weight:500;}button{cursor:pointer;}\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLGlFQUFlQSxvRUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2FsdXJhLWNhc2VzLWRpdnVsZ2FjYW8vLi9zcmMvc3R5bGVzL2dsb2JhbC50cz8wZmUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIH1cblxuICBib2R5LCBpbnB1dCwgYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgaDEsIGgyLCBoMywgaDQsIGg1LCBzdHJvbmcge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICBidXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG5gO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/global.ts\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();