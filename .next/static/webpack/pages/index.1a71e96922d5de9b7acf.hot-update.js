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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! polished */ \"./node_modules/polished/dist/polished.esm.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/theme-ui.esm.js\");\n/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme */ \"./src/theme/index.js\");\n/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/image */ \"./src/components/image.js\");\n/* harmony import */ var components_icons_play__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/icons/play */ \"./src/components/icons/play.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var sections_dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sections/dashboard */ \"./src/sections/dashboard.js\");\n/* harmony import */ var assets_images_banner_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/images/banner.png */ \"./src/assets/images/banner.png\");\n/* harmony import */ var assets_images_banner_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_images_banner_png__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/rahul/Desktop/mlapi/src/sections/banner.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\n\n\n\n\n\n\n // import ModalVideo from 'react-modal-video';\n// const ModalVideo = dynamic(\n//   () => {\n//     return import('react-modal-video');\n//   },\n//   { ssr: false }\n// );\n\n\n\nvar Banner = function Banner() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      videoOpen = _useState[0],\n      setVideoOpen = _useState[1];\n\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n    setVideoOpen(true);\n  };\n\n  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"section\", {\n    id: \"home\",\n    sx: styles.section,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_7__.Container, {\n    sx: styles.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"div\", {\n    sx: styles.content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n    as: \"h1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, \"Easy to use, Production level Machine Learning API\"), (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_7__.Text, {\n    as: \"p\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, \"Stop Wrestling with Data Preparation, Model Training, Model Deployment. Use AI functionality in your App with just few api calls.\"), (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n    sx: styles.buttonGroup,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_7__.Button, {\n    variant: \"primary\",\n    sx: styles.btnPrimary,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, \"Get Started for Free\"))), (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {\n    theme: theme__WEBPACK_IMPORTED_MODULE_1__.default,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(Banner, \"fjrTXSMqqo5cVpzR03nEXJYpFAo=\");\n\n_c = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\nvar styles = {\n  section: {\n    backgroundColor: '#02162D',\n    // pt: [8, null, null, null, 10, 14],\n    // pb: [8, null, null, null, 10, 14],\n    position: 'relative',\n    zIndex: 0,\n    '::before': {\n      backgroundColor: 'white',\n      content: \"''\",\n      position: 'absolute',\n      height: [30, null, null, 70, 85, 120],\n      bottom: 0,\n      width: '100%',\n      zIndex: -1\n    }\n  },\n  container: {\n    minHeight: [null, null, null, null, null, '100vh'],\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'flex-end',\n    flexDirection: 'column'\n  },\n  content: {\n    maxWidth: [null, null, null, 570, 690],\n    textAlign: 'center',\n    marginTop: [18, null, null, 22, 180],\n    h1: {\n      color: 'white',\n      fontSize: [7, null, null, 12, 14],\n      lineHeight: 1.35\n    },\n    p: {\n      color: (0,polished__WEBPACK_IMPORTED_MODULE_8__.rgba)('white', 0.8),\n      fontSize: [1, null, null, 2],\n      marginTop: [3, null, null, 6]\n    }\n  },\n  buttonGroup: {\n    alignItems: 'center',\n    justifyContent: 'center',\n    marginTop: [6, null, null, 8],\n    position: 'relative',\n    zIndex: 2,\n    button: {\n      px: ['12px', null, null, '18px']\n    }\n  },\n  btnPrimary: {},\n  btnOutlined: {\n    borderColor: (0,polished__WEBPACK_IMPORTED_MODULE_8__.rgba)('white', 0.25),\n    color: 'white',\n    ml: 3,\n    svg: {\n      ml: 2\n    }\n  },\n  illustration: {\n    transform: ['scale(1.20)', null, null, 'none'],\n    alignItems: 'center',\n    display: 'flex',\n    marginTop: [2, null, null, -4, -5]\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Banner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU5HLEdBdkNBO0FBaURickIsRUFBQUEsVUFBVSxFQUFFLEVBakRDO0FBa0Ric0IsRUFBQUEsV0FBVyxFQUFFO0FBQ1hDLElBQUFBLFdBQVcsRUFBRWhELDhDQUFJLENBQUMsT0FBRCxFQUFVLElBQVYsQ0FETjtBQUVYeUMsSUFBQUEsS0FBSyxFQUFFLE9BRkk7QUFHWFEsSUFBQUEsRUFBRSxFQUFFLENBSE87QUFJWEMsSUFBQUEsR0FBRyxFQUFFO0FBQ0hELE1BQUFBLEVBQUUsRUFBRTtBQUREO0FBSk0sR0FsREE7QUEwRGJFLEVBQUFBLFlBQVksRUFBRTtBQUNaQyxJQUFBQSxTQUFTLEVBQUUsQ0FBQyxhQUFELEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLE1BQTVCLENBREM7QUFFWmxCLElBQUFBLFVBQVUsRUFBRSxRQUZBO0FBR1pELElBQUFBLE9BQU8sRUFBRSxNQUhHO0FBSVpNLElBQUFBLFNBQVMsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixDQUFDLENBQWpCLEVBQW9CLENBQUMsQ0FBckI7QUFKQztBQTFERCxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZWN0aW9ucy9iYW5uZXIuanM/NDg2YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHRoZW1lIGZyb20gJ3RoZW1lJztcbmltcG9ydCB7IGpzeCwgRmxleCwgQ29udGFpbmVyLCBIZWFkaW5nLCBUZXh0LCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tcG9uZW50cy9pbWFnZSc7XG5pbXBvcnQgUGxheSBmcm9tICdjb21wb25lbnRzL2ljb25zL3BsYXknO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnc2VjdGlvbnMvZGFzaGJvYXJkJztcbi8vIGltcG9ydCBNb2RhbFZpZGVvIGZyb20gJ3JlYWN0LW1vZGFsLXZpZGVvJztcbi8vIGNvbnN0IE1vZGFsVmlkZW8gPSBkeW5hbWljKFxuLy8gICAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIGltcG9ydCgncmVhY3QtbW9kYWwtdmlkZW8nKTtcbi8vICAgfSxcbi8vICAgeyBzc3I6IGZhbHNlIH1cbi8vICk7XG5pbXBvcnQgYmFubmVyIGZyb20gJ2Fzc2V0cy9pbWFnZXMvYmFubmVyLnBuZyc7XG5cbmNvbnN0IEJhbm5lciA9ICgpID0+IHtcbiAgY29uc3QgW3ZpZGVvT3Blbiwgc2V0VmlkZW9PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRWaWRlb09wZW4odHJ1ZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJob21lXCIgc3g9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IHN4PXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiPlxuICAgICAgICAgIEVhc3kgdG8gdXNlLCBQcm9kdWN0aW9uIGxldmVsIE1hY2hpbmUgTGVhcm5pbmcgQVBJXG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDxUZXh0IGFzPVwicFwiPlN0b3AgV3Jlc3RsaW5nIHdpdGggRGF0YSBQcmVwYXJhdGlvbiwgTW9kZWwgVHJhaW5pbmcsIE1vZGVsIERlcGxveW1lbnQuIFVzZSBBSSBmdW5jdGlvbmFsaXR5IGluIHlvdXIgQXBwIHdpdGgganVzdCBmZXcgYXBpIGNhbGxzLjwvVGV4dD5cbiAgICAgICAgICA8RmxleCBzeD17c3R5bGVzLmJ1dHRvbkdyb3VwfT5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBzeD17c3R5bGVzLmJ0blByaW1hcnl9PlxuICAgICAgICAgICAgR2V0IFN0YXJ0ZWQgZm9yIEZyZWVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgey8qIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgc3g9e3N0eWxlcy5idG5PdXRsaW5lZH1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIERpc2NvdmVyIHZpZGVvIDxQbGF5IGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxNb2RhbFZpZGVvXG4gICAgICAgICAgICAgIGNoYW5uZWw9XCJ5b3V0dWJlXCJcbiAgICAgICAgICAgICAgaXNPcGVuPXt2aWRlb09wZW59XG4gICAgICAgICAgICAgIHZpZGVvSWQ9XCJaTkE5cm1Ec1lWRVwiXG4gICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFZpZGVvT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPEZsZXggYXM9XCJmaWd1cmVcIiBzeD17c3R5bGVzLmlsbHVzdHJhdGlvbn0+XG4gICAgICAgICAgPEltYWdlIHNyYz17YmFubmVyfSBhbHQ9XCJiYW5uZXJcIiAvPlxuICAgICAgICA8L0ZsZXg+ICovfVxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PjwvVGhlbWVQcm92aWRlcj5cblxuXG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc2VjdGlvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMjE2MkQnLFxuICAgIC8vIHB0OiBbOCwgbnVsbCwgbnVsbCwgbnVsbCwgMTAsIDE0XSxcbiAgICAvLyBwYjogWzgsIG51bGwsIG51bGwsIG51bGwsIDEwLCAxNF0sXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgekluZGV4OiAwLFxuICAgICc6OmJlZm9yZSc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgIGNvbnRlbnQ6IGAnJ2AsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGhlaWdodDogWzMwLCBudWxsLCBudWxsLCA3MCwgODUsIDEyMF0sXG4gICAgICBib3R0b206IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgekluZGV4OiAtMSxcbiAgICB9LFxuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBtaW5IZWlnaHQ6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMTAwdmgnXSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBtYXhXaWR0aDogW251bGwsIG51bGwsIG51bGwsIDU3MCwgNjkwXSxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIG1hcmdpblRvcDogWzE4LCBudWxsLCBudWxsLCAyMiwgMTgwXSxcbiAgICBoMToge1xuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBmb250U2l6ZTogWzcsIG51bGwsIG51bGwsIDEyLCAxNF0sXG4gICAgICBsaW5lSGVpZ2h0OiAxLjM1LFxuICAgIH0sXG4gICAgcDoge1xuICAgICAgY29sb3I6IHJnYmEoJ3doaXRlJywgMC44KSxcbiAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXG4gICAgICBtYXJnaW5Ub3A6IFszLCBudWxsLCBudWxsLCA2XSxcbiAgICB9LFxuICB9LFxuICBidXR0b25Hcm91cDoge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBtYXJnaW5Ub3A6IFs2LCBudWxsLCBudWxsLCA4XSxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB6SW5kZXg6IDIsXG4gICAgYnV0dG9uOiB7XG4gICAgICBweDogWycxMnB4JywgbnVsbCwgbnVsbCwgJzE4cHgnXSxcbiAgICB9LFxuICB9LFxuICBidG5QcmltYXJ5OiB7fSxcbiAgYnRuT3V0bGluZWQ6IHtcbiAgICBib3JkZXJDb2xvcjogcmdiYSgnd2hpdGUnLCAwLjI1KSxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBtbDogMyxcbiAgICBzdmc6IHtcbiAgICAgIG1sOiAyLFxuICAgIH0sXG4gIH0sXG4gIGlsbHVzdHJhdGlvbjoge1xuICAgIHRyYW5zZm9ybTogWydzY2FsZSgxLjIwKScsIG51bGwsIG51bGwsICdub25lJ10sXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG1hcmdpblRvcDogWzIsIG51bGwsIG51bGwsIC00LCAtNV0sXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwicmdiYSIsIlRoZW1lUHJvdmlkZXIiLCJ0aGVtZSIsImpzeCIsIkZsZXgiLCJDb250YWluZXIiLCJIZWFkaW5nIiwiVGV4dCIsIkJ1dHRvbiIsIkltYWdlIiwiUGxheSIsImR5bmFtaWMiLCJEYXNoYm9hcmQiLCJiYW5uZXIiLCJCYW5uZXIiLCJ2aWRlb09wZW4iLCJzZXRWaWRlb09wZW4iLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlcyIsInNlY3Rpb24iLCJjb250YWluZXIiLCJjb250ZW50IiwiYnV0dG9uR3JvdXAiLCJidG5QcmltYXJ5IiwiYmFja2dyb3VuZENvbG9yIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJoZWlnaHQiLCJib3R0b20iLCJ3aWR0aCIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwibWF4V2lkdGgiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJoMSIsImNvbG9yIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwicCIsImJ1dHRvbiIsInB4IiwiYnRuT3V0bGluZWQiLCJib3JkZXJDb2xvciIsIm1sIiwic3ZnIiwiaWxsdXN0cmF0aW9uIiwidHJhbnNmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sections/banner.js\n");

/***/ })

});