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

eval("(function () {\r\n  var slidersContainer = document.querySelector(\".sliders-container\");\r\n\r\n  // Initializing the numbers slider\r\n  var msNumbers = new MomentumSlider({\r\n    el: slidersContainer,\r\n    cssClass: \"ms--numbers\",\r\n    range: [1, 4],\r\n    rangeContent: function (i) {\r\n      return \"0\" + i;\r\n    },\r\n    style: {\r\n      transform: [{ scale: [0.4, 1] }],\r\n      opacity: [0, 1],\r\n    },\r\n    interactive: false,\r\n  });\r\n\r\n  // Initializing the titles slider\r\n  var titles = [\r\n    \"King of the Ring Fight\",\r\n    \"Sound of Streets\",\r\n    \"Urban Fashion\",\r\n    \"Windy Sunset\",\r\n  ];\r\n  var msTitles = new MomentumSlider({\r\n    el: slidersContainer,\r\n    cssClass: \"ms--titles\",\r\n    range: [0, 3],\r\n    rangeContent: function (i) {\r\n      return \"<h3>\" + titles[i] + \"</h3>\";\r\n    },\r\n    vertical: true,\r\n    reverse: true,\r\n    style: {\r\n      opacity: [0, 1],\r\n    },\r\n    interactive: false,\r\n  });\r\n\r\n  // Initializing the links slider\r\n  var msLinks = new MomentumSlider({\r\n    el: slidersContainer,\r\n    cssClass: \"ms--links\",\r\n    range: [0, 3],\r\n    rangeContent: function () {\r\n      return '<a class=\"ms-slide__link\">View Case</a>';\r\n    },\r\n    vertical: true,\r\n    interactive: false,\r\n  });\r\n\r\n  // Get pagination items\r\n  var pagination = document.querySelector(\".pagination\");\r\n  var paginationItems = [].slice.call(pagination.children);\r\n\r\n  // Initializing the images slider\r\n  var msImages = new MomentumSlider({\r\n    // Element to append the slider\r\n    el: slidersContainer,\r\n    // CSS class to reference the slider\r\n    cssClass: \"ms--images\",\r\n    // Generate the 4 slides required\r\n    range: [0, 3],\r\n    rangeContent: function () {\r\n      return '<div class=\"ms-slide__image-container\"><div class=\"ms-slide__image\"></div></div>';\r\n    },\r\n    // Syncronize the other sliders\r\n    sync: [msNumbers, msTitles, msLinks],\r\n    // Styles to interpolate as we move the slider\r\n    style: {\r\n      \".ms-slide__image\": {\r\n        transform: [{ scale: [1.5, 1] }],\r\n      },\r\n    },\r\n    // Update pagination if slider change\r\n    change: function (newIndex, oldIndex) {\r\n      if (typeof oldIndex !== \"undefined\") {\r\n        paginationItems[oldIndex].classList.remove(\"pagination__item--active\");\r\n      }\r\n      paginationItems[newIndex].classList.add(\"pagination__item--active\");\r\n    },\r\n  });\r\n\r\n  // Select corresponding slider item when a pagination button is clicked\r\n  pagination.addEventListener(\"click\", function (e) {\r\n    if (e.target.matches(\".pagination__button\")) {\r\n      var index = paginationItems.indexOf(e.target.parentNode);\r\n      msImages.select(index);\r\n    }\r\n  });\r\n})();\r\n\n\n//# sourceURL=webpack://my_personal_portfolio/./assets/js/realisation.js?");

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