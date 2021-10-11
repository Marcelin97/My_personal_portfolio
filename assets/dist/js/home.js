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

/***/ "./assets/js/home.js":
/*!***************************!*\
  !*** ./assets/js/home.js ***!
  \***************************/
/***/ (() => {

eval("var words = [\r\n  \"HTML\",\r\n  \"CSS\",\r\n  \"JavaScript\",\r\n  \"Webpack\",\r\n  \"SASS\",\r\n  \"Bootstrap\",\r\n  \"SEO\",\r\n  \"Accessibilité\",\r\n  \"Node\",\r\n  \"Git\",\r\n  \"GitHub\",\r\n  \"MySql\",\r\n  \"Figma\",\r\n];\r\nvar letters = \"abcdefghijklmnopqrstuvwxyz#%&^+=-\",\r\n  speed = 250,\r\n  steps = 4,\r\n  loader = document.querySelector(\"#loader\");\r\n\r\nfunction getRandomWord() {\r\n  var randomWord = words[Math.floor(Math.random() * words.length)];\r\n  return randomWord;\r\n}\r\nfunction getRandomLetter() {\r\n  var randomLetter = letters[Math.floor(Math.random() * letters.length)];\r\n  return randomLetter;\r\n}\r\n\r\nfunction randomWordLoop() {\r\n  var word = getRandomWord();\r\n  var textLength = word.length;\r\n  for (var i = 0; i < textLength; i++) {\r\n    (function (i, word) {\r\n      letterAppear(i, word);\r\n    })(i, word);\r\n  }\r\n\r\n  function letterAppear(i, word) {\r\n    setTimeout(function () {\r\n      randomLetters(i, word);\r\n    }, speed * i);\r\n  }\r\n\r\n  function randomLetters(i, word) {\r\n    for (var j = 0; j <= steps; j++) {\r\n      charsAnim(i, word, j);\r\n    }\r\n  }\r\n\r\n  function charsAnim(i, word, j) {\r\n    setTimeout(function () {\r\n      var count = j;\r\n      if (j < steps) {\r\n        randomChar(i, word, count, j);\r\n      } else {\r\n        goodChar(i, word, count, j);\r\n      }\r\n      /* seems it fails less if I divide j, don't know why */\r\n      /*}, (speed/steps)*(j / 1.8));*/\r\n    }, (speed / steps) * j - speed / steps);\r\n  }\r\n\r\n  function randomChar(i, word, count, j) {\r\n    var letter = getRandomLetter();\r\n    if (j > 0) {\r\n      var oldText = loader.textContent.slice(0, -1);\r\n    } else {\r\n      var oldText = loader.textContent;\r\n    }\r\n    loader.textContent = oldText + letter;\r\n  }\r\n  function goodChar(i, word, count, j) {\r\n    var oldText = loader.textContent.slice(0, -1);\r\n    loader.textContent = oldText + word[i];\r\n    if (i == textLength - 1) {\r\n      removeWord();\r\n    }\r\n  }\r\n\r\n  function removeWord() {\r\n    setTimeout(function () {\r\n      for (var k = 0; k < textLength; k++) {\r\n        removeLetters(k);\r\n      }\r\n    }, speed * 2);\r\n  }\r\n  function removeLetters(k) {\r\n    setTimeout(function () {\r\n      removeLetter(k);\r\n    }, 75 * k);\r\n  }\r\n  function removeLetter(k) {\r\n    var actualText = loader.textContent.slice(0, -1);\r\n    loader.textContent = actualText;\r\n    if (k == textLength - 1) {\r\n      randomWordLoop();\r\n    }\r\n  }\r\n}\r\n\r\nrandomWordLoop();\r\n\r\n\r\n//portfolio\r\n\r\nconst glide = document.querySelector(\".glide\");\r\n      if (glide)\r\n        new Glide(glide, {\r\n          type: \"carousel\",\r\n          startAt: 0,\r\n          perView: 1,\r\n          focusAt: \"center\",\r\n          gap: 30,\r\n          hoverpause: true,\r\n          gap: 0,\r\n          autoplay: 2500,\r\n          animationDuration: 1000,\r\n          animationTimingFunc: \"linear\",\r\n        }).mount();\n\n//# sourceURL=webpack://my_personal_portfolio/./assets/js/home.js?");

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my_personal_portfolio/./assets/js/index.js?");

/***/ }),

/***/ "./assets/scss/home.scss":
/*!*******************************!*\
  !*** ./assets/scss/home.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my_personal_portfolio/./assets/scss/home.scss?");

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
/******/ 	__webpack_modules__["./assets/scss/home.scss"](0, {}, __webpack_require__);
/******/ 	__webpack_modules__["./assets/js/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/home.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;