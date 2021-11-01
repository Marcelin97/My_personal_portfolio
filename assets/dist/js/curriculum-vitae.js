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

/***/ "./assets/js/curriculum-vitae.js":
/*!***************************************!*\
  !*** ./assets/js/curriculum-vitae.js ***!
  \***************************************/
/***/ (() => {

eval("//=============================>>\r\n// MODAL\r\n//=============================>>\r\n\r\n// Get the modal\r\nvar modal = document.getElementById(\"myModal\");\r\n\r\n// Get the button that opens the modal\r\nvar btn = document.getElementById(\"myBtn\");\r\n\r\n// Get the <span> element that closes the modal\r\nvar span = document.getElementsByClassName(\"close\")[0];\r\n\r\n// When the user clicks on the button, open the modal\r\nbtn.onclick = function () {\r\n  modal.style.display = \"block\";\r\n};\r\n\r\n// When the user clicks on <span> (x), close the modal\r\nspan.onclick = function () {\r\n  modal.style.display = \"none\";\r\n};\r\n\r\n// When the user clicks anywhere outside of the modal, close it\r\nwindow.onclick = function (event) {\r\n  if (event.target == modal) {\r\n    modal.style.display = \"none\";\r\n  }\r\n};\r\n//=============================>>\r\n// MODAL\r\n//=============================>>\r\n\n\n//# sourceURL=webpack://my_personal_portfolio/./assets/js/curriculum-vitae.js?");

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my_personal_portfolio/./assets/js/index.js?");

/***/ }),

/***/ "./assets/scss/curriculum-vitae.scss":
/*!*******************************************!*\
  !*** ./assets/scss/curriculum-vitae.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my_personal_portfolio/./assets/scss/curriculum-vitae.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	__webpack_modules__["./assets/scss/curriculum-vitae.scss"](0, {}, __webpack_require__);
/******/ 	__webpack_modules__["./assets/js/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/curriculum-vitae.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;