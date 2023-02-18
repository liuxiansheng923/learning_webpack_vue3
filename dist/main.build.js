/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./handler/handler_1.js":
/*!******************************!*\
  !*** ./handler/handler_1.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Console\": () => (/* binding */ Console)\n/* harmony export */ });\nvar config = {\n  userId: '512923',\n  orgId: '001'\n};\nfunction Console(text) {\n  console.log(text || '---', config.userId);\n}\n\n//# sourceURL=webpack://demo_1/./handler/handler_1.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handler_handler_1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/handler/handler_1.js */ \"./handler/handler_1.js\");\nvar _obj$f;\n\n(function () {\n  console.log('index function');\n  (0,_handler_handler_1_js__WEBPACK_IMPORTED_MODULE_0__.Console)('222');\n})();\nvar obj = {\n  a: 'a',\n  b: 'b',\n  c: {\n    d: 'd'\n  }\n};\nvar root = document.getElementById('app');\nvar div = document.createElement('div');\ndiv.innerHTML = '我是动态添加的文本';\nroot.appendChild(div);\nconsole.log((_obj$f = obj === null || obj === void 0 ? void 0 : obj.f) !== null && _obj$f !== void 0 ? _obj$f : 'hehe');\n\n//# sourceURL=webpack://demo_1/./index.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (() => {

eval("console.log('main.js');\n\n//# sourceURL=webpack://demo_1/./main.js?");

/***/ }),

/***/ "./start.js":
/*!******************!*\
  !*** ./start.js ***!
  \******************/
/***/ (() => {

eval("console.log('start.js');\n\n//# sourceURL=webpack://demo_1/./start.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./index.js");
/******/ 	__webpack_require__("./main.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./start.js");
/******/ 	
/******/ })()
;