"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! polished */ \"./node_modules/polished/dist/polished.esm.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/theme-ui.esm.js\");\n/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/image */ \"./src/components/image.js\");\n/* harmony import */ var components_icons_play__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/icons/play */ \"./src/components/icons/play.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var assets_images_banner_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/banner.png */ \"./src/assets/images/banner.png\");\n/* harmony import */ var assets_images_banner_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_images_banner_png__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/rahul/Desktop/mlapi/src/sections/banner.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\n\n\n\n // import ModalVideo from 'react-modal-video';\n// const ModalVideo = dynamic(\n//   () => {\n//     return import('react-modal-video');\n//   },\n//   { ssr: false }\n// );\n\n\n\nvar Banner = function Banner() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      videoOpen = _useState[0],\n      setVideoOpen = _useState[1];\n\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n    setVideoOpen(true);\n  };\n\n  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"section\", {\n    id: \"home\",\n    sx: styles.section,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_5__.Container, {\n    sx: styles.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"div\", {\n    sx: styles.content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n    as: \"h1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, \"Easy to use, Production level Machine Learning API\"), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_5__.Text, {\n    as: \"p\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, \"Stop Wrestling with Data Preparation, Model Training, Model Deployment. Use AI functionality in your App with just few api calls.\"), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n    sx: styles.buttonGroup,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {\n    variant: \"primary\",\n    sx: styles.btnPrimary,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, \"Get Started for Free\")))));\n};\n\n_s(Banner, \"fjrTXSMqqo5cVpzR03nEXJYpFAo=\");\n\n_c = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\nvar styles = {\n  section: {\n    backgroundColor: '#02162D',\n    // pt: [8, null, null, null, 10, 14],\n    // pb: [8, null, null, null, 10, 14],\n    position: 'relative',\n    zIndex: 0,\n    '::before': {\n      backgroundColor: 'white',\n      content: \"''\",\n      position: 'absolute',\n      height: [30, null, null, 70, 85, 120],\n      bottom: 0,\n      width: '100%',\n      zIndex: -1\n    }\n  },\n  container: {\n    minHeight: [null, null, null, null, null, '100vh'],\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'flex-end',\n    flexDirection: 'column'\n  },\n  content: {\n    maxWidth: [null, null, null, 570, 690],\n    textAlign: 'center',\n    marginTop: [18, null, null, 22, 180],\n    h1: {\n      color: 'white',\n      fontSize: [7, null, null, 12, 14],\n      lineHeight: 1.35\n    },\n    p: {\n      color: (0,polished__WEBPACK_IMPORTED_MODULE_6__.rgba)('white', 0.8),\n      fontSize: [1, null, null, 2],\n      marginTop: [3, null, null, 6]\n    }\n  },\n  buttonGroup: {\n    alignItems: 'center',\n    justifyContent: 'center',\n    marginTop: [6, null, null, 8],\n    position: 'relative',\n    zIndex: 2,\n    button: {\n      px: ['12px', null, null, '18px']\n    }\n  },\n  btnPrimary: {},\n  btnOutlined: {\n    borderColor: (0,polished__WEBPACK_IMPORTED_MODULE_6__.rgba)('white', 0.25),\n    color: 'white',\n    ml: 3,\n    svg: {\n      ml: 2\n    }\n  },\n  illustration: {\n    transform: ['scale(1.20)', null, null, 'none'],\n    alignItems: 'center',\n    display: 'flex',\n    marginTop: [2, null, null, -4, -5]\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Banner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUQsRUFBVSxJQUFWLENBRE47QUFFWHNDLElBQUFBLEtBQUssRUFBRSxPQUZJO0FBR1hRLElBQUFBLEVBQUUsRUFBRSxDQUhPO0FBSVhDLElBQUFBLEdBQUcsRUFBRTtBQUNIRCxNQUFBQSxFQUFFLEVBQUU7QUFERDtBQUpNLEdBbERBO0FBMERiRSxFQUFBQSxZQUFZLEVBQUU7QUFDWkMsSUFBQUEsU0FBUyxFQUFFLENBQUMsYUFBRCxFQUFnQixJQUFoQixFQUFzQixJQUF0QixFQUE0QixNQUE1QixDQURDO0FBRVpsQixJQUFBQSxVQUFVLEVBQUUsUUFGQTtBQUdaRCxJQUFBQSxPQUFPLEVBQUUsTUFIRztBQUlaTSxJQUFBQSxTQUFTLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBQyxDQUFqQixFQUFvQixDQUFDLENBQXJCO0FBSkM7QUExREQsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VjdGlvbnMvYmFubmVyLmpzPzQ4NmIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xuaW1wb3J0IHsganN4LCBGbGV4LCBDb250YWluZXIsIEhlYWRpbmcsIFRleHQsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJztcbmltcG9ydCBQbGF5IGZyb20gJ2NvbXBvbmVudHMvaWNvbnMvcGxheSc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuLy8gaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSAncmVhY3QtbW9kYWwtdmlkZW8nO1xuLy8gY29uc3QgTW9kYWxWaWRlbyA9IGR5bmFtaWMoXG4vLyAgICgpID0+IHtcbi8vICAgICByZXR1cm4gaW1wb3J0KCdyZWFjdC1tb2RhbC12aWRlbycpO1xuLy8gICB9LFxuLy8gICB7IHNzcjogZmFsc2UgfVxuLy8gKTtcbmltcG9ydCBiYW5uZXIgZnJvbSAnYXNzZXRzL2ltYWdlcy9iYW5uZXIucG5nJztcblxuY29uc3QgQmFubmVyID0gKCkgPT4ge1xuICBjb25zdCBbdmlkZW9PcGVuLCBzZXRWaWRlb09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFZpZGVvT3Blbih0cnVlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cImhvbWVcIiBzeD17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgc3g9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCI+XG4gICAgICAgICAgRWFzeSB0byB1c2UsIFByb2R1Y3Rpb24gbGV2ZWwgTWFjaGluZSBMZWFybmluZyBBUElcbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPFRleHQgYXM9XCJwXCI+U3RvcCBXcmVzdGxpbmcgd2l0aCBEYXRhIFByZXBhcmF0aW9uLCBNb2RlbCBUcmFpbmluZywgTW9kZWwgRGVwbG95bWVudC4gVXNlIEFJIGZ1bmN0aW9uYWxpdHkgaW4geW91ciBBcHAgd2l0aCBqdXN0IGZldyBhcGkgY2FsbHMuPC9UZXh0PlxuICAgICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHN4PXtzdHlsZXMuYnRuUHJpbWFyeX0+XG4gICAgICAgICAgICBHZXQgU3RhcnRlZCBmb3IgRnJlZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICB7LyogPEJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBzeD17c3R5bGVzLmJ0bk91dGxpbmVkfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRGlzY292ZXIgdmlkZW8gPFBsYXkgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPE1vZGFsVmlkZW9cbiAgICAgICAgICAgICAgY2hhbm5lbD1cInlvdXR1YmVcIlxuICAgICAgICAgICAgICBpc09wZW49e3ZpZGVvT3Blbn1cbiAgICAgICAgICAgICAgdmlkZW9JZD1cIlpOQTlybURzWVZFXCJcbiAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0VmlkZW9PcGVuKGZhbHNlKX1cbiAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBzZWN0aW9uOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAyMTYyRCcsXG4gICAgLy8gcHQ6IFs4LCBudWxsLCBudWxsLCBudWxsLCAxMCwgMTRdLFxuICAgIC8vIHBiOiBbOCwgbnVsbCwgbnVsbCwgbnVsbCwgMTAsIDE0XSxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB6SW5kZXg6IDAsXG4gICAgJzo6YmVmb3JlJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgY29udGVudDogYCcnYCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgaGVpZ2h0OiBbMzAsIG51bGwsIG51bGwsIDcwLCA4NSwgMTIwXSxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB6SW5kZXg6IC0xLFxuICAgIH0sXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIG1pbkhlaWdodDogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcxMDB2aCddLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIG1heFdpZHRoOiBbbnVsbCwgbnVsbCwgbnVsbCwgNTcwLCA2OTBdLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgbWFyZ2luVG9wOiBbMTgsIG51bGwsIG51bGwsIDIyLCAxODBdLFxuICAgIGgxOiB7XG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGZvbnRTaXplOiBbNywgbnVsbCwgbnVsbCwgMTIsIDE0XSxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMzUsXG4gICAgfSxcbiAgICBwOiB7XG4gICAgICBjb2xvcjogcmdiYSgnd2hpdGUnLCAwLjgpLFxuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcbiAgICAgIG1hcmdpblRvcDogWzMsIG51bGwsIG51bGwsIDZdLFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbkdyb3VwOiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG1hcmdpblRvcDogWzYsIG51bGwsIG51bGwsIDhdLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHpJbmRleDogMixcbiAgICBidXR0b246IHtcbiAgICAgIHB4OiBbJzEycHgnLCBudWxsLCBudWxsLCAnMThweCddLFxuICAgIH0sXG4gIH0sXG4gIGJ0blByaW1hcnk6IHt9LFxuICBidG5PdXRsaW5lZDoge1xuICAgIGJvcmRlckNvbG9yOiByZ2JhKCd3aGl0ZScsIDAuMjUpLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIG1sOiAzLFxuICAgIHN2Zzoge1xuICAgICAgbWw6IDIsXG4gICAgfSxcbiAgfSxcbiAgaWxsdXN0cmF0aW9uOiB7XG4gICAgdHJhbnNmb3JtOiBbJ3NjYWxlKDEuMjApJywgbnVsbCwgbnVsbCwgJ25vbmUnXSxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbWFyZ2luVG9wOiBbMiwgbnVsbCwgbnVsbCwgLTQsIC01XSxcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJyZ2JhIiwianN4IiwiRmxleCIsIkNvbnRhaW5lciIsIkhlYWRpbmciLCJUZXh0IiwiQnV0dG9uIiwiSW1hZ2UiLCJQbGF5IiwiZHluYW1pYyIsImJhbm5lciIsIkJhbm5lciIsInZpZGVvT3BlbiIsInNldFZpZGVvT3BlbiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3R5bGVzIiwic2VjdGlvbiIsImNvbnRhaW5lciIsImNvbnRlbnQiLCJidXR0b25Hcm91cCIsImJ0blByaW1hcnkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInpJbmRleCIsImhlaWdodCIsImJvdHRvbSIsIndpZHRoIiwibWluSGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJtYXhXaWR0aCIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsImgxIiwiY29sb3IiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJwIiwiYnV0dG9uIiwicHgiLCJidG5PdXRsaW5lZCIsImJvcmRlckNvbG9yIiwibWwiLCJzdmciLCJpbGx1c3RyYXRpb24iLCJ0cmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sections/banner.js\n");

/***/ })

});