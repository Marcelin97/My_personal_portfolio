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

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my_personal_portfolio/./assets/js/index.js?");

/***/ }),

/***/ "./assets/js/realisation.js":
/*!**********************************!*\
  !*** ./assets/js/realisation.js ***!
  \**********************************/
/***/ (() => {

eval("// Cursor\r\n//=============================>>\r\nvar cursor = {\r\n  delay: 8,\r\n  _x: 0,\r\n  _y: 0,\r\n  endX: window.innerWidth / 2,\r\n  endY: window.innerHeight / 2,\r\n  cursorVisible: true,\r\n  cursorEnlarged: false,\r\n  $dot: document.querySelector(\".cursor-dot\"),\r\n  $outline: document.querySelector(\".cursor-dot-outline\"),\r\n\r\n  init: function () {\r\n    // Set up element sizes\r\n    this.dotSize = this.$dot.offsetWidth;\r\n    this.outlineSize = this.$outline.offsetWidth;\r\n\r\n    this.setupEventListeners();\r\n    this.animateDotOutline();\r\n  },\r\n\r\n  setupEventListeners: function () {\r\n    var self = this;\r\n\r\n    // Anchor hovering\r\n    document.querySelectorAll(\"a\").forEach(function (el) {\r\n      el.addEventListener(\"mouseover\", function () {\r\n        self.cursorEnlarged = true;\r\n        self.toggleCursorSize();\r\n      });\r\n      el.addEventListener(\"mouseout\", function () {\r\n        self.cursorEnlarged = false;\r\n        self.toggleCursorSize();\r\n      });\r\n    });\r\n\r\n    // Click events\r\n    document.addEventListener(\"mousedown\", function () {\r\n      self.cursorEnlarged = true;\r\n      self.toggleCursorSize();\r\n    });\r\n    document.addEventListener(\"mouseup\", function () {\r\n      self.cursorEnlarged = false;\r\n      self.toggleCursorSize();\r\n    });\r\n\r\n    document.addEventListener(\"mousemove\", function (e) {\r\n      // Show the cursor\r\n      self.cursorVisible = true;\r\n      self.toggleCursorVisibility();\r\n\r\n      // Position the dot\r\n      self.endX = e.pageX;\r\n      self.endY = e.pageY;\r\n      self.$dot.style.top = self.endY + \"px\";\r\n      self.$dot.style.left = self.endX + \"px\";\r\n    });\r\n\r\n    // Hide/show cursor\r\n    document.addEventListener(\"mouseenter\", function (e) {\r\n      self.cursorVisible = true;\r\n      self.toggleCursorVisibility();\r\n      self.$dot.style.opacity = 1;\r\n      self.$outline.style.opacity = 1;\r\n    });\r\n\r\n    document.addEventListener(\"mouseleave\", function (e) {\r\n      self.cursorVisible = true;\r\n      self.toggleCursorVisibility();\r\n      self.$dot.style.opacity = 0;\r\n      self.$outline.style.opacity = 0;\r\n    });\r\n  },\r\n\r\n  animateDotOutline: function () {\r\n    var self = this;\r\n\r\n    self._x += (self.endX - self._x) / self.delay;\r\n    self._y += (self.endY - self._y) / self.delay;\r\n    self.$outline.style.top = self._y + \"px\";\r\n    self.$outline.style.left = self._x + \"px\";\r\n\r\n    requestAnimationFrame(this.animateDotOutline.bind(self));\r\n  },\r\n\r\n  toggleCursorSize: function () {\r\n    var self = this;\r\n\r\n    if (self.cursorEnlarged) {\r\n      self.$dot.style.transform = \"translate(-50%, -50%) scale(0.75)\";\r\n      self.$outline.style.transform = \"translate(-50%, -50%) scale(1.5)\";\r\n    } else {\r\n      self.$dot.style.transform = \"translate(-50%, -50%) scale(1)\";\r\n      self.$outline.style.transform = \"translate(-50%, -50%) scale(1)\";\r\n    }\r\n  },\r\n\r\n  toggleCursorVisibility: function () {\r\n    var self = this;\r\n\r\n    if (self.cursorVisible) {\r\n      self.$dot.style.opacity = 1;\r\n      self.$outline.style.opacity = 1;\r\n    } else {\r\n      self.$dot.style.opacity = 0;\r\n      self.$outline.style.opacity = 0;\r\n    }\r\n  },\r\n};\r\n\r\ncursor.init();\r\n// Cursor\r\n//=============================>>\r\n\r\n\n\n//# sourceURL=webpack://my_personal_portfolio/./assets/js/realisation.js?");

/***/ }),

/***/ "./assets/scss/realisation.scss":
/*!**************************************!*\
  !*** ./assets/scss/realisation.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my_personal_portfolio/./assets/scss/realisation.scss?");

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
/******/ 	__webpack_modules__["./assets/scss/realisation.scss"](0, {}, __webpack_require__);
/******/ 	__webpack_modules__["./assets/js/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/realisation.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;