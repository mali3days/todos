/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/create-card.js":
/*!****************************!*\
  !*** ./src/create-card.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar createCard = exports.createCard = function createCard() {\n    //create wrap-div\n    var wrapper = document.createElement(\"div\");\n    wrapper.className = \"wrapper\";\n    //create title\n    var title = document.createElement(\"h1\");\n    title.className = \"title\";\n    title.innerHTML = \"ПОКУПКИ\";\n\n    //create list\n    var buyList = document.createElement(\"ul\");\n    buyList.className = \"buy-list\";\n    buyList.innerHTML = \"LIST\";\n\n    //create input field\n    var inputField = document.createElement(\"div\");\n    inputField.className = \"input-field\";\n    var input = document.createElement(\"input\");\n    inputField.appendChild(input);\n\n    //add elements\n    wrapper.appendChild(title);\n    wrapper.appendChild(buyList);\n    wrapper.appendChild(inputField);\n\n    // add wrap to body\n    document.body.appendChild(wrapper);\n};\n\n//# sourceURL=webpack:///./src/create-card.js?");

/***/ }),

/***/ "./src/hanler.js":
/*!***********************!*\
  !*** ./src/hanler.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar handler = exports.handler = function handler() {\n    var elem = document.getElementsByClassName(\"wrapper\")[0];\n    elem.addEventListener(\"click\", function (e) {\n        alert(5);\n    });\n};\n\n//# sourceURL=webpack:///./src/hanler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createCard = __webpack_require__(/*! ./create-card */ \"./src/create-card.js\");\n\nvar _hanler = __webpack_require__(/*! ./hanler */ \"./src/hanler.js\");\n\n(function () {\n    (0, _createCard.createCard)();\n    // handler();\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });