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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/script.js */ \"./src/script.js\");\n/* harmony import */ var _src_script_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_script_js__WEBPACK_IMPORTED_MODULE_0__);\nconsole.log(\"Hello, Webpack!\");\r\n\n\n//# sourceURL=webpack://flying/./src/index.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("\r\n// Canvas setup\r\nconst canvas = document.getElementById('canvas');\r\nconst ctx = canvas.getContext('2d');\r\ncanvas.width = 800;\r\ncanvas.height = 500;\r\n\r\nvar playerHeight = 100;\r\nvar playerWidth = 92;\r\nvar playerX = (canvas.width - playerWidth) / 2;\r\nvar playerY = (canvas.height - playerHeight) / 2;\r\nvar img = new Image();\r\nimg.src = \"img/player.png\";\r\n\r\nvar rightPressed = false;\r\nvar leftPressed = false;\r\nvar upPressed = false;\r\nvar downPressed = false;\r\n\r\n// KEYBOARD\r\ndocument.addEventListener(\"keydown\", keyDownHandler, false);\r\ndocument.addEventListener(\"keyup\", keyUpHandler, false);\r\n\r\nfunction keyDownHandler(e) {\r\n    if (\"code\" in e) {\r\n        switch(e.code) {\r\n            case \"Unidentified\":\r\n                break;\r\n            case \"ArrowRight\":\r\n            case \"Right\":\r\n            case \"KeyD\":\r\n                rightPressed = true;\r\n                return;\r\n            case \"ArrowLeft\":\r\n            case \"Left\":\r\n            case \"KeyA\":\r\n                leftPressed = true;\r\n                return;\r\n            case \"ArrowUp\":\r\n            case \"Up\":\r\n            case \"KeyW\":\r\n                upPressed = true;\r\n                return;\r\n            case \"ArrowDown\":\r\n            case \"Down\":\r\n            case \"KeyS\":\r\n                downPressed = true;\r\n                return;\r\n            default:\r\n                return;\r\n        }\r\n    }\r\n\r\n    if(e.keyCode == 39) {\r\n        rightPressed = true;\r\n    }\r\n    else if(e.keyCode == 37) {\r\n        leftPressed = true;\r\n    }\r\n    if(e.keyCode == 40) {\r\n        downPressed = true;\r\n    }\r\n    else if(e.keyCode == 38) {\r\n        upPressed = true;\r\n    }\r\n}\r\n\r\nfunction keyUpHandler(e) {\r\n    if (\"code\" in e) {\r\n        switch(e.code) {\r\n            case \"Unidentified\":\r\n                break;\r\n            case \"ArrowRight\":\r\n            case \"Right\":\r\n            case \"KeyD\":\r\n                rightPressed = false;\r\n                return;\r\n            case \"ArrowLeft\":\r\n            case \"Left\":\r\n            case \"KeyA\":\r\n                leftPressed = false;\r\n                return;\r\n            case \"ArrowUp\":\r\n            case \"Up\":\r\n            case \"KeyW\":\r\n                upPressed = false;\r\n                return;\r\n            case \"ArrowDown\":\r\n            case \"Down\":\r\n            case \"KeyS\":\r\n                downPressed = false;\r\n                return;\r\n            default:\r\n                return;\r\n        }\r\n    }\r\n\r\n    if(e.keyCode == 39) {\r\n        rightPressed = false;\r\n    }\r\n    else if(e.keyCode == 37) {\r\n        leftPressed = false;\r\n    }\r\n    if(e.keyCode == 40) {\r\n        downPressed = false;\r\n    }\r\n    else if(e.keyCode == 38) {\r\n        upPressed = false;\r\n    }\r\n}\r\n\r\n// MOUSE\r\ndocument.addEventListener(\"mousemove\", mouseMoveHandler);\r\nfunction mouseMoveHandler(e) {\r\n    playerX = e.pageX - canvas.offsetLeft - playerWidth / 2;\r\n    playerY = e.pageY - canvas.offsetTop - playerHeight / 2;\r\n    output.innerHTML = \"Mouse:  <br />\"+ \" x: \" + playerX + \", y: \" + playerY;\r\n}\r\n\r\n// TOUCH\r\ndocument.addEventListener(\"touchstart\", touchHandler);\r\ndocument.addEventListener(\"touchmove\", touchHandler);\r\nfunction touchHandler(e) {\r\n    if(e.touches) {\r\n        playerX = e.touches[0].pageX - canvas.offsetLeft - playerWidth / 2;\r\n        playerY = e.touches[0].pageY - canvas.offsetTop - playerHeight / 2;\r\n        output.innerHTML = \"Touch:  <br />\"+ \" x: \" + playerX + \", y: \" + playerY;\r\n        // e.preventDefault(); \r\n    }\r\n}\r\n\r\n// Bubbles\r\nconst bubblesArray = [];\r\nclass Bubble{\r\n    constructor(){\r\n        this.x = Math.random() * canvas.width - canvas.width;\r\n        this.y = Math.random() * canvas.height;\r\n        this.radius = 30;\r\n        this.speed = Math.random() * 5 + 1;\r\n        this.distance;\r\n    }\r\n    update(){\r\n        this.x += this.speed; \r\n    }\r\n    draw(){\r\n        ctx.fillStyle = 'yellow';\r\n        ctx.beginPath();\r\n        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\r\n        ctx.fill();\r\n        ctx.closePath();\r\n        // ctx.stroke();\r\n    }\r\n}\r\n\r\nlet gameFrame = 0;\r\n\r\nfunction handleBubbles(){\r\n    if(gameFrame % 50 == 0){\r\n        bubblesArray.push(new Bubble());\r\n    }\r\n    bubblesArray.forEach(bubble => {\r\n        bubble.update();\r\n        bubble.draw();\r\n        });\r\n}\r\n\r\n// DRAW\r\nfunction draw() {\r\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n    \r\n    // KEYBOARD\r\n    if(rightPressed) {\r\n        playerX += 5;\r\n    }\r\n    else if(leftPressed) {\r\n        playerX -= 5;\r\n    }\r\n    if(downPressed) {\r\n        playerY += 5;\r\n    }\r\n    else if(upPressed) {\r\n        playerY -= 5;\r\n    }\r\n\r\n    handleBubbles();\r\n    ctx.drawImage(img, playerX, playerY);\r\n    gameFrame++;\r\n    requestAnimationFrame(draw);\r\n}\r\ndraw();\n\n//# sourceURL=webpack://flying/./src/script.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;