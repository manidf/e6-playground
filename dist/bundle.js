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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

console.group('Aggregate Arrays');

var nums = [];

// ES5
for (var i = 0; i < 11; ++i) {
    nums[i] = i + 1;
}

var samenums = nums;
nums[0] = 400;
console.log(samenums[0]);

/***/ }),
/* 1 */
/***/ (function(module, exports) {


console.group('Arrays');

var nums = [];

// ES5
for (var i = 0; i < 100; ++i) {
    nums[i] = i + 1;
}

console.log(nums);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// foreach takes the first element in the array and passes it to the iterator function.
// the iterator function is the function we passed into the foreach
console.group('foreach');

var color = ['red', 'blue', 'green'];

color.forEach(function (color) {
    console.log(color);
});
console.groupEnd();

// create an array of numbers
// create a variable to hold them
// loop over the array, increment the sum variable
// print the sum variable
console.group('numbers');
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;

function adder(numbers) {
    sum += numbers;
}

numbers.forEach(adder);

/* 
 * with an anonymous function  

numbers.forEach(function(number) {
    sum += number;
});

*/

sum;

console.log(sum);
console.groupEnd();

/* unused harmony default export */ var _unused_webpack_default_export = ({});

/***/ }),
/* 3 */
/***/ (function(module, exports) {


console.group('Map Helper');

var numbers = [1, 2, 3];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] + 2);
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

console.group('user');
var user = {
  name: 'Mannuel',
  secondName: 'Ferreira'
};
console.log(user);
console.groupEnd();

/* unused harmony default export */ var _unused_webpack_default_export = (user);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foreach__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__arrays__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__arrays___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__arrays__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__arrays_aggregate_array_operations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__arrays_aggregate_array_operations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__arrays_aggregate_array_operations__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_helper_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_helper_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__map_helper_js__);






var root = document.querySelector('#app');

// const name = 'Mannuel';
// root.innerHTML = `<p>Hello ${name}</p>`;

/***/ })
/******/ ]);