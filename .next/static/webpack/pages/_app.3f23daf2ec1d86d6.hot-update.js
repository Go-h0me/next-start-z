"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/ThemeSwitch.js":
/*!***********************************!*\
  !*** ./components/ThemeSwitch.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _DarkTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DarkTheme */ \"./components/DarkTheme.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction loadDarkMode() {\n    if (typeof localStorage === 'undefined') {\n        return false;\n    }\n    var value = localStorage.getItem('darkMode');\n    return value === null ? false : JSON.parse(value);\n}\nfunction ThemeSwitch() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), /*#__PURE__*/ darkMode = ref[0], setDarkMode = ref[1];\n    var handleClick = function() {\n        localStorage.setItem('darkMode', JSON.stringify(!darkMode));\n        setDarkMode(!darkMode);\n    };\n    console.log('[ThemeSwitch] darkmode:', darkMode);\n    var text = darkMode ? \"Light Mode\" : \"Dark Mode\";\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                s: true,\n                className: \"jsx-a068ea408899904f\",\n                children: text\n            }, void 0, false, {\n                fileName: \"D:\\\\next-start-z\\\\components\\\\ThemeSwitch.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"a068ea408899904f\",\n                children: \"button.jsx-a068ea408899904f{background:none;\\nborder:none;\\ncolor:inherit;\\ncursor:pointer}\"\n            }, void 0, false, void 0, this),\n            darkMode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DarkTheme__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\next-start-z\\\\components\\\\ThemeSwitch.js\",\n                lineNumber: 39,\n                columnNumber: 34\n            }, this)\n        ]\n    }, void 0, true));\n}\n_s(ThemeSwitch, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = ThemeSwitch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeSwitch);\nvar _c;\n$RefreshReg$(_c, \"ThemeSwitch\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RoZW1lU3dpdGNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ0c7O1NBRzFCRSxZQUFZLEdBQUcsQ0FBQztJQUVyQixFQUFFLEVBQUUsTUFBTSxDQUFDQyxZQUFZLEtBQUssQ0FBVyxZQUFFLENBQUM7UUFDdEMsTUFBTSxDQUFDLEtBQUs7SUFDaEIsQ0FBQztJQUVELEdBQUssQ0FBQ0MsS0FBSyxHQUFLRCxZQUFZLENBQUNFLE9BQU8sQ0FBQyxDQUFVO0lBQy9DLE1BQU0sQ0FBRUQsS0FBSyxLQUFLLElBQUksR0FBSyxLQUFLLEdBQUdFLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxLQUFLO0FBQ3ZELENBQUM7U0FFUUksV0FBVyxHQUFHLENBQUM7O0lBQ3BCLEdBQUssQ0FBMkJSLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLGlCQUF2Q1MsUUFBUSxHQUFpQlQsR0FBZSxLQUE5QlUsV0FBVyxHQUFJVixHQUFlO0lBRS9DLEdBQUssQ0FBQ1csV0FBVyxHQUFHLFFBQVEsR0FBRixDQUFDO1FBQ3ZCUixZQUFZLENBQUNTLE9BQU8sQ0FBQyxDQUFVLFdBQUVOLElBQUksQ0FBQ08sU0FBUyxFQUFFSixRQUFRO1FBQ3pEQyxXQUFXLEVBQUVELFFBQVE7SUFDekIsQ0FBQztJQUVESyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUF5QiwwQkFBRU4sUUFBUTtJQUUvQyxHQUFLLENBQUNPLElBQUksR0FBR1AsUUFBUSxHQUFHLENBQVksY0FBRyxDQUFXO0lBQ2xELE1BQU07O3dGQUVHUSxDQUFNO2dCQUFDQyxPQUFPLEVBQUVQLFdBQVc7Z0JBQUVRLENBQUM7OzBCQUFFSCxJQUFJOzs7Ozs7Ozs7O1lBVzVCUCxRQUFRLGdGQUFLUixrREFBUzs7Ozs7OztBQUszQyxDQUFDO0dBN0JRTyxXQUFXO0tBQVhBLFdBQVc7QUErQnBCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGhlbWVTd2l0Y2guanM/ZmQ5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERhcmtUaGVtZSBmcm9tICcuL0RhcmtUaGVtZSc7XHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZERhcmtNb2RlKCkge1xyXG5cclxuICAgIGlmKCB0eXBlb2YgbG9jYWxTdG9yYWdlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2YWx1ZSA9ICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhcmtNb2RlJyk7XHJcbiAgICByZXR1cm4gKHZhbHVlID09PSBudWxsKSA/ICBmYWxzZSA6IEpTT04ucGFyc2UodmFsdWUpIDtcclxufVxyXG5cclxuZnVuY3Rpb24gVGhlbWVTd2l0Y2goKSB7XHJcbiAgICBjb25zdCBbZGFya01vZGUsIHNldERhcmtNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya01vZGUnLCBKU09OLnN0cmluZ2lmeSghZGFya01vZGUpKTtcclxuICAgICAgICBzZXREYXJrTW9kZSghZGFya01vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdbVGhlbWVTd2l0Y2hdIGRhcmttb2RlOicsIGRhcmtNb2RlKTtcclxuXHJcbiAgICBjb25zdCB0ZXh0ID0gZGFya01vZGUgPyBcIkxpZ2h0IE1vZGVcIiA6IFwiRGFyayBNb2RlXCI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IHM+e3RleHR9PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPntkYXJrTW9kZSAmJiA8RGFya1RoZW1lIC8+fVxyXG5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoZW1lU3dpdGNoXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkRhcmtUaGVtZSIsImxvYWREYXJrTW9kZSIsImxvY2FsU3RvcmFnZSIsInZhbHVlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsIlRoZW1lU3dpdGNoIiwiZGFya01vZGUiLCJzZXREYXJrTW9kZSIsImhhbmRsZUNsaWNrIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiYnV0dG9uIiwib25DbGljayIsInMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ThemeSwitch.js\n");

/***/ })

});