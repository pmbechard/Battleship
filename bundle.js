/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domCreation.js":
/*!****************************!*\
  !*** ./src/domCreation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDom\": () => (/* binding */ createDom)\n/* harmony export */ });\n/* harmony import */ var _toastMsg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toastMsg */ \"./src/toastMsg.js\");\n/* harmony import */ var _img_metal_bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/metal-bg.jpg */ \"./src/img/metal-bg.jpg\");\n/* harmony import */ var _img_rotate_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/rotate.png */ \"./src/img/rotate.png\");\n\n\n\nfunction createDom() {\n  var mainContent = document.createElement('div');\n  document.body.appendChild(mainContent);\n  mainContent.classList.add('main-content');\n  mainContent.id = 'main-content';\n  var title = document.createElement('h1');\n  mainContent.appendChild(title);\n  title.textContent = 'Battleship';\n  title.classList.add('title');\n  var gridsContainer = document.createElement('div');\n  mainContent.appendChild(gridsContainer);\n  gridsContainer.style.display = 'flex';\n  gridsContainer.style.justifyContent = 'center';\n  gridsContainer.style.alignItems = 'center';\n  gridsContainer.style.width = '100vw';\n  gridsContainer.id = 'grids-container';\n  var comBoardContainer = document.createElement('div');\n  gridsContainer.appendChild(comBoardContainer);\n  comBoardContainer.classList.add('board-container');\n  var enemyGridTitle = document.createElement('p');\n  comBoardContainer.appendChild(enemyGridTitle);\n  enemyGridTitle.textContent = 'Enemy Waters';\n  enemyGridTitle.style.display = 'none';\n  enemyGridTitle.id = 'enemy-grid-title';\n  var comBoard = document.createElement('div');\n  comBoardContainer.appendChild(comBoard);\n  comBoard.id = 'com-board';\n  comBoard.classList.add('game-board');\n  comBoard.style.display = 'none';\n\n  for (var i = 0; i < 10; i++) {\n    for (var j = 0; j < 10; j++) {\n      var gridPoint = document.createElement('div');\n      comBoard.appendChild(gridPoint);\n      gridPoint.classList.add('grid-point');\n      gridPoint.id = \"com-\".concat(i, \"-\").concat(j);\n    }\n  }\n\n  var userBoardContainer = document.createElement('div');\n  gridsContainer.appendChild(userBoardContainer);\n  userBoardContainer.classList.add('board-container');\n  var userGridTitle = document.createElement('p');\n  userBoardContainer.appendChild(userGridTitle);\n  userGridTitle.textContent = 'Friendly Waters';\n  userGridTitle.style.display = 'none';\n  userGridTitle.id = 'user-grid-title';\n  var userBoard = document.createElement('div');\n  userBoardContainer.appendChild(userBoard);\n  userBoard.id = 'user-board';\n  userBoard.classList.add('game-board');\n\n  for (var _i = 0; _i < 10; _i++) {\n    for (var _j = 0; _j < 10; _j++) {\n      var _gridPoint = document.createElement('div');\n\n      userBoard.appendChild(_gridPoint);\n\n      _gridPoint.classList.add('grid-point');\n\n      _gridPoint.id = \"user-\".concat(_i, \"-\").concat(_j);\n    }\n  }\n\n  var rotateBtn = document.createElement('button');\n  var rotateImg = document.createElement('img');\n  rotateImg.src = _img_rotate_png__WEBPACK_IMPORTED_MODULE_2__;\n  rotateImg.style.height = '30px';\n  rotateBtn.appendChild(rotateImg);\n  userBoardContainer.appendChild(rotateBtn);\n  rotateBtn.classList.add('rotate-btn');\n  rotateBtn.id = 'rotate-btn';\n  var directionTxt = document.createElement('p');\n  userBoardContainer.appendChild(directionTxt);\n  directionTxt.textContent = 'direction: x';\n  directionTxt.id = 'dir-txt';\n  directionTxt.style.display = 'none';\n  var startBtn = document.createElement('button');\n  mainContent.appendChild(startBtn);\n  startBtn.textContent = 'Start';\n  startBtn.classList.add('start-btn');\n  startBtn.addEventListener('click', function () {\n    startBtn.style.display = 'none';\n    userBoard.style.display = 'grid';\n    rotateBtn.style.display = 'block';\n    directionTxt.style.display = 'block';\n    (0,_toastMsg__WEBPACK_IMPORTED_MODULE_0__.setToastMsg)('Place the ships on your grid.'); // toastContainer.classList.add('show'); // FIXME:\n    // setTimeout(function () {\n    //   toastContainer.classList.remove('show'); // FIXME:\n    // }, 5000);\n  });\n  var footer = document.createElement('footer');\n  document.body.appendChild(footer);\n  var footerContent = document.createElement('small');\n  footer.appendChild(footerContent);\n  footerContent.innerHTML = 'Peyton Bechard &copy; 2022';\n}\n\n//# sourceURL=webpack://battleship/./src/domCreation.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Board = /*#__PURE__*/function () {\n  function Board() {\n    _classCallCheck(this, Board);\n\n    this.board = new Array(10).fill(0).map(function () {\n      return new Array(10).fill(0);\n    });\n    this.hits = [];\n    this.misses = [];\n    this.ships = [];\n  }\n\n  _createClass(Board, [{\n    key: \"place\",\n    value: function place(ship, coord, dir) {\n      if (!this.checkValidPlace(ship, coord, dir)) return false;\n      this.ships.push(ship);\n      var pos = new Array();\n\n      if (dir === 'x') {\n        for (var i = 0; i < ship.len; i++) {\n          this.board[coord[0]][coord[1] + i] = ship;\n          pos.push([coord[0], coord[1] + i]);\n        }\n      } else if (dir === 'y') {\n        for (var _i = 0; _i < ship.len; _i++) {\n          this.board[coord[0] - _i][coord[1]] = ship;\n          pos.push([coord[0] - _i, coord[1]]);\n        }\n      }\n\n      ship.setCoords(pos);\n    }\n  }, {\n    key: \"checkValidPlace\",\n    value: function checkValidPlace(ship, coord, dir) {\n      if (coord[0] > 9 || coord[1] > 9) return false;\n      if (dir === 'x' && coord[1] + ship.len - 1 > 9) return false;\n\n      if (dir === 'x') {\n        for (var i = 0; i < ship.len; i++) {\n          if (this.board[coord[0]][coord[1] + i] !== 0) return false;\n        }\n      }\n\n      if (dir === 'y' && coord[0] - ship.len + 1 < 0) return false;\n\n      if (dir === 'y') {\n        for (var _i2 = 0; _i2 < ship.len; _i2++) {\n          if (this.board[coord[0] - _i2][coord[1]] !== 0) return false;\n        }\n      }\n\n      return true;\n    }\n  }, {\n    key: \"receiveAttack\",\n    value: function receiveAttack(coord) {\n      if (this.board[coord[0]][coord[1]] !== 0) {\n        this.hits.push(coord);\n        this.board[coord[0]][coord[1]].hit(coord);\n\n        if (this.board[coord[0]][coord[1]].isSunk()) {\n          if (this.checkAllSunk()) {// TODO: GAME OVER\n          }\n        }\n\n        return true;\n      }\n\n      for (var i = 0; i < this.misses.length; i++) {\n        if (this.misses[i] === coord) return null;\n      }\n\n      this.misses.push(coord);\n      return false;\n    }\n  }, {\n    key: \"checkAllSunk\",\n    value: function checkAllSunk() {\n      return this.ships.filter(function (ship) {\n        return ship.isSunk();\n      }).length === 5;\n    }\n  }]);\n\n  return Board;\n}();\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domCreation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCreation */ \"./src/domCreation.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _toastMsg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastMsg */ \"./src/toastMsg.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n // GAME SETUP\n// createDom()\n// ...global code\n// initializeGameLayout()\n// placeEnemyShips()\n// startGameLoop()\n// restart()\n// FIXME: disallow computer duplicate moves\n// FIXME: refactor index.js functions\n// TODO: add toast messages for each turn\n// TODO: add delay to AI turn\n// TODO: add messages to report sunken ships\n// TODO: add Game Over sequence\n// TODO: add clear function and restart option\n// TODO: make smarter AI\n// TODO: add ship images\n// TODO: add sound effects\n\n(0,_domCreation__WEBPACK_IMPORTED_MODULE_0__.createDom)();\nvar direction = 'x';\nvar rotateBtn = document.getElementById('rotate-btn');\nvar dirTxt = document.getElementById('dir-txt');\nrotateBtn.addEventListener('click', function () {\n  if (direction === 'x') {\n    direction = 'y';\n    dirTxt.textContent = 'direction: y';\n  } else {\n    direction = 'x';\n    dirTxt.textContent = 'direction: x';\n  }\n});\nvar user = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(true);\nvar com = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(false);\nuser.opponent = com;\ncom.opponent = user;\nvar userGrid = document.querySelectorAll('#user-board .grid-point');\nvar allShips = [new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(5), new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(4), new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(3), new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(3), new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(2)];\nuserGrid.forEach(function (point) {\n  point.addEventListener('mouseover', function () {\n    point.classList.add('grid-point-hover');\n    var ship = allShips[user.board.ships.length];\n    var current = point;\n\n    if (direction === 'x') {\n      for (var i = 0; i < ship.len - 1; i++) {\n        if (current.id.charAt(7) === '9') {\n          break;\n        }\n\n        current.nextElementSibling.classList.add('grid-point-hover');\n        current = current.nextElementSibling;\n      }\n    }\n\n    if (direction === 'y') {\n      for (var _i = 0; _i < ship.len; _i++) {\n        current.classList.add('grid-point-hover');\n        var row = Number(current.id.charAt(5)) - 1;\n\n        if (row < 0) {\n          break;\n        }\n\n        var col = current.id.charAt(7);\n        current = document.getElementById(\"user-\".concat(row, \"-\").concat(col));\n      }\n    }\n  });\n  point.addEventListener('mouseleave', function () {\n    userGrid.forEach(function (gridPoint) {\n      gridPoint.classList.remove('grid-point-hover');\n    });\n  });\n  point.addEventListener('click', function () {\n    var coord = point.id.split('-');\n    var ship = allShips[user.board.ships.length];\n    user.board.place(ship, [Number(coord[1]), Number(coord[2])], direction);\n\n    if (ship.location.length > 0) {\n      userGrid.forEach(function (gridPoint) {\n        ship.location.forEach(function (loc) {\n          if (Number(gridPoint.id.split('-')[1]) === loc[0] && Number(gridPoint.id.split('-')[2]) === loc[1]) {\n            gridPoint.style.opacity = '0.7';\n            gridPoint.style.backgroundColor = 'rgb(0, 179, 0)'; // TODO: add ship image\n          }\n        });\n      });\n    }\n\n    if (user.board.ships.length === 5) {\n      var userBoard = document.getElementById('user-board');\n      userBoard.style.display = 'none';\n      initializeGameLayout();\n    }\n  });\n});\n\nfunction initializeGameLayout() {\n  userGrid.forEach(function (point) {\n    point.style.pointerEvents = 'none';\n  });\n  rotateBtn.style.display = 'none';\n  dirTxt.style.display = 'none';\n  var userBoard = document.getElementById('user-board');\n  userBoard.style.display = 'grid';\n  var userGridTitle = document.getElementById('user-grid-title');\n  userGridTitle.style.display = 'grid';\n  var comBoard = document.getElementById('com-board');\n  comBoard.style.display = 'grid';\n  var enemyGridTitle = document.getElementById('enemy-grid-title');\n  enemyGridTitle.style.display = 'grid';\n  placeEnemyShips();\n  userTurn(); //   gameLoop();\n}\n\nfunction placeEnemyShips() {\n  var enemyShips = [new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(5), new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(4), new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(3), new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(3), new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(2)];\n  enemyShips.forEach(function (ship) {\n    var dir;\n    Math.round(Math.random()) === 0 ? dir = 'x' : dir = 'y';\n    var again = false;\n\n    while (again === false) {\n      var xCoord = Math.round(Math.random() * 9);\n      var yCoord = Math.round(Math.random() * 9);\n      again = com.board.place(ship, [xCoord, yCoord], dir);\n    }\n  });\n}\n\nfunction comTurn() {\n  setTimeout(function () {\n    var currentHits = user.board.hits.length;\n    var coord = com.aiAttack();\n    var point = document.getElementById(\"user-\".concat(coord[0], \"-\").concat(coord[1]));\n\n    if (user.board.hits.length > currentHits) {\n      point.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';\n    } else {\n      point.style.backgroundColor = 'rgba(221, 221, 221, 0.7)';\n    }\n\n    if (user.board.checkAllSunk()) {// TODO: Game Over\n    }\n  }, 3000);\n}\n\nfunction userTurn() {\n  // FIXME: user shouldn't be able to select same spots as before\n  (0,_toastMsg__WEBPACK_IMPORTED_MODULE_3__.setToastMsg)('Your turn. Choose a point on the enemy grid to attack.');\n  var comGrid = document.querySelectorAll('#com-board .grid-point');\n  comGrid.forEach(function (point) {\n    point.addEventListener('mouseover', function () {\n      point.classList.add('grid-point-hover');\n    });\n    point.addEventListener('mouseleave', function () {\n      point.classList.remove('grid-point-hover');\n    });\n    point.addEventListener('click', function clicked() {\n      var coord = [Number(point.id.split('-')[1]), Number(point.id.split('-')[2])];\n      var currentHits = com.board.hits.length;\n      var currentMisses = com.board.misses.length;\n      var attack = user.userAttack(coord);\n\n      if (attack) {\n        if (com.board.hits.length > currentHits) {\n          point.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';\n        } else if (com.board.misses.length > currentMisses) {\n          point.style.backgroundColor = 'rgba(221, 221, 221, 0.7)';\n        }\n\n        if (com.board.checkAllSunk()) {// TODO: Game Over\n        } else {\n          if (user.board.hits.length + user.board.misses.length === com.board.hits.length + com.board.misses.length - 1) {\n            point.removeEventListener('click', clicked, false);\n            comTurn();\n          }\n        }\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\nvar Player = /*#__PURE__*/function () {\n  function Player(isUser) {\n    _classCallCheck(this, Player);\n\n    this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Board();\n    this.opponent;\n    this.isUser = isUser;\n  }\n\n  _createClass(Player, [{\n    key: \"aiAttack\",\n    value: function aiAttack() {\n      // FIXME: make smarter\n      var coord = [Math.round(Math.random() * 9), Math.round(Math.random() * 9)];\n      var shot = this.opponent.board.receiveAttack(coord);\n      if (shot !== null) return coord;\n    }\n  }, {\n    key: \"userAttack\",\n    value: function userAttack(coord) {\n      var shot = this.opponent.board.receiveAttack(coord);\n      if (shot === null) return false;\n      return true;\n    }\n  }]);\n\n  return Player;\n}(); // FIXME: user attacks are recording as hits/ misses on both grids??\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Ship = /*#__PURE__*/function () {\n  function Ship(len) {\n    _classCallCheck(this, Ship);\n\n    this.len = len;\n    this.damage = 0;\n    this.location = new Array();\n  }\n\n  _createClass(Ship, [{\n    key: \"hit\",\n    value: function hit(coord) {\n      var _this = this;\n\n      this.location.forEach(function (point) {\n        if (point[0] === coord[0] && point[1] === coord[1]) {\n          _this.damage++;\n          return true;\n        }\n      });\n      return false;\n    }\n  }, {\n    key: \"isSunk\",\n    value: function isSunk() {\n      return this.damage === this.len;\n    }\n  }, {\n    key: \"setCoords\",\n    value: function setCoords(location) {\n      this.location = location;\n    }\n  }]);\n\n  return Ship;\n}();\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/toastMsg.js":
/*!*************************!*\
  !*** ./src/toastMsg.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setToastMsg\": () => (/* binding */ setToastMsg)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, \"throw\" === context.method) { if (delegate.iterator.return && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel; context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, \"constructor\", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar created = false;\nvar storedMsg;\nfunction setToastMsg(_x) {\n  return _setToastMsg.apply(this, arguments);\n}\n\nfunction _setToastMsg() {\n  _setToastMsg = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(msg) {\n    var mainContent, _toastContainer, _toastMsg, toastMsg, toastContainer, newMsg;\n\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!created) {\n              mainContent = document.getElementById('main-content');\n              _toastContainer = document.createElement('div');\n\n              _toastContainer.classList.add('toast-container');\n\n              mainContent.appendChild(_toastContainer);\n              _toastContainer.id = 'toast-container';\n              _toastMsg = document.createElement('div');\n\n              _toastContainer.appendChild(_toastMsg);\n\n              _toastMsg.classList.add('toast');\n\n              _toastMsg.id = 'toast';\n              created = true;\n            }\n\n            toastMsg = document.getElementById('toast');\n            toastContainer = document.getElementById('toast-container'); // FIXME: timer not clearing properly - msgs are a bit jumpy\n\n            clearTimeout(storedMsg);\n            toastContainer.classList.remove('show');\n            setTimeout(function () {\n              toastContainer.classList.add('show');\n              toastMsg.textContent = msg;\n            }, 1000);\n            newMsg = setTimeout(function () {\n              toastContainer.classList.remove('show');\n            }, 5000);\n            storedMsg = newMsg;\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _setToastMsg.apply(this, arguments);\n}\n\n//# sourceURL=webpack://battleship/./src/toastMsg.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/VT323-Regular.ttf */ \"./src/fonts/VT323-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! img/metal-bg.jpg */ \"./src/img/metal-bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: 'VT';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n\\n  font-family: 'VT', monospace;\\n  overflow-y: auto;\\n}\\n\\n.main-content {\\n  width: 100vw;\\n  height: 97vh;\\n  background-color: black;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-size: cover;\\n}\\n\\n.title {\\n  width: 100vw;\\n  text-align: center;\\n  padding: 20px 0;\\n  color: rgb(0, 179, 0);\\n  text-shadow: 1px 1px 1px black;\\n  font-size: min(15vw, 72px);\\n}\\n\\n.board-container {\\n  margin: 0 20px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  gap: 20px;\\n}\\n\\n.game-board {\\n  width: 300px;\\n  height: 300px;\\n  margin: 20px 0;\\n\\n  display: none;\\n  grid-template-columns: repeat(10, 1fr);\\n  /* animation: fadein 0.5s, fadeout 0.5s 4.5s; */\\n}\\n\\n.grid-point {\\n  border: 0.1px solid rgb(0, 179, 0);\\n  background-color: #333;\\n}\\n\\n.grid-point-hover {\\n  opacity: 0.9;\\n  cursor: cell;\\n}\\n\\n.toast-container {\\n  width: 100vw;\\n\\n  display: none;\\n  position: fixed;\\n  z-index: 1;\\n  bottom: 30px;\\n}\\n\\n.toast {\\n  width: max(200px, 30vw);\\n  background-color: #333;\\n  color: rgb(0, 179, 0);\\n  text-align: center;\\n  border-radius: 2px;\\n  padding: 16px;\\n  margin: 0 auto;\\n  font-size: 24px;\\n  border: 1px solid #ddd;\\n  box-shadow: 1px 1px 1px #333;\\n}\\n\\n.toast-container.show {\\n  display: block;\\n  animation: fadein 0.5s, fadeout 0.5s 4.5s;\\n}\\n\\n@keyframes fadein {\\n  from {\\n    bottom: 0;\\n    opacity: 0;\\n  }\\n  to {\\n    bottom: 30px;\\n    opacity: 1;\\n  }\\n}\\n\\n@keyframes fadeout {\\n  from {\\n    bottom: 30px;\\n    opacity: 1;\\n  }\\n  to {\\n    bottom: 0;\\n    opacity: 0;\\n  }\\n}\\n\\n.start-btn {\\n  width: 40vw;\\n  margin: 30vw;\\n  margin-bottom: 0;\\n  font-size: 32px;\\n}\\n\\n.rotate-btn {\\n  display: none;\\n}\\n\\np {\\n  font-size: 20px;\\n}\\n\\n#enemy-grid-title,\\n#user-grid-title {\\n  margin-bottom: -40px;\\n}\\n\\nfooter {\\n  height: 3vh;\\n  width: 100vw;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: #222;\\n  color: #ddd;\\n}\\n\\n@media only screen and (max-width: 700px) {\\n  #grids-container {\\n    flex-direction: column;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/fonts/VT323-Regular.ttf":
/*!*************************************!*\
  !*** ./src/fonts/VT323-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2bc43ad8eb2f60b39f27.ttf\";\n\n//# sourceURL=webpack://battleship/./src/fonts/VT323-Regular.ttf?");

/***/ }),

/***/ "./src/img/metal-bg.jpg":
/*!******************************!*\
  !*** ./src/img/metal-bg.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bb6fb2957b0963a21d7e.jpg\";\n\n//# sourceURL=webpack://battleship/./src/img/metal-bg.jpg?");

/***/ }),

/***/ "./src/img/rotate.png":
/*!****************************!*\
  !*** ./src/img/rotate.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f4b50ac58b89755d00ac.png\";\n\n//# sourceURL=webpack://battleship/./src/img/rotate.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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