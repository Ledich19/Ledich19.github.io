/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/buttonsPanel/buttonsPanel.html":
/*!*******************************************************!*\
  !*** ./src/components/buttonsPanel/buttonsPanel.html ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/icons/volume-high.svg */ "./src/assets/icons/volume-high.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<button data-shuffle class=\"buttonsPanel__shuffle\">Shuffle and start</button>\r\n<button data-stop class=\"buttonsPanel__stop\" disabled>Stop</button>\r\n<button data-save class=\"buttonsPanel__save\">Save</button>\r\n<button data-audio class=\"buttonsPanel__audio\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"/></button>\r\n<button data-results class=\"buttonsPanel__results\">Results</button>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/infoPanel/infoPanel.html":
/*!*************************************************!*\
  !*** ./src/components/infoPanel/infoPanel.html ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"infoPanel__moves\">Moves:<span class=\"infoPanel__moves-value\">0</span></div>\r\n<div class=\"infoPanel__times\">Times:<span class=\"infoPanel__times-value\">00:00</span></div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/sizePanel/sizePanel.html":
/*!*************************************************!*\
  !*** ./src/components/sizePanel/sizePanel.html ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"sizePanel__size\">Frame size: <span>4x4</span></div>\r\n<div class=\"sizePanel__other-size\">\r\n  <a href=\"#\" data-size=\"3\" class=\"sizePanel__btn-size\">3x3</a>\r\n  <a href=\"#\" data-size=\"4\" class=\"sizePanel__btn-size\">4x4</a>\r\n  <a href=\"#\" data-size=\"5\" class=\"sizePanel__btn-size\">5x5</a>\r\n  <a href=\"#\" data-size=\"6\" class=\"sizePanel__btn-size\">6x6</a>\r\n  <a href=\"#\" data-size=\"7\" class=\"sizePanel__btn-size\">7x7</a>\r\n  <a href=\"#\" data-size=\"8\" class=\"sizePanel__btn-size\">8x8</a>\r\n</div>\r\n<div class=\"sizePanel__text\">\r\n  <h3 >Немного объяснений :)</h3>\r\n  <ol>\r\n    <li>Раскладка решаема 100%</li>\r\n    <li>Чтобы начать игру нажать <b>Shuffle and start</b></li>\r\n    <li>Без начала игры будет только сообщение о победе,\r\n      но результат не пойдет в таблицу.\r\n    </li>\r\n    <li></li>\r\n  </ol>\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/components/buttonsPanel/buttonsPanel.scss":
/*!*******************************************************!*\
  !*** ./src/components/buttonsPanel/buttonsPanel.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/container/container.scss":
/*!*************************************************!*\
  !*** ./src/components/container/container.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/field/field.scss":
/*!*****************************************!*\
  !*** ./src/components/field/field.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/infoPanel/infoPanel.scss":
/*!*************************************************!*\
  !*** ./src/components/infoPanel/infoPanel.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/sizePanel/sizePanel.scss":
/*!*************************************************!*\
  !*** ./src/components/sizePanel/sizePanel.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/winList/winList.scss":
/*!*********************************************!*\
  !*** ./src/components/winList/winList.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/buttonsPanel/buttonsPanel.js":
/*!*****************************************************!*\
  !*** ./src/components/buttonsPanel/buttonsPanel.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "handlerStop": () => (/* binding */ handlerStop)
/* harmony export */ });
/* harmony import */ var _buttonsPanel_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonsPanel.scss */ "./src/components/buttonsPanel/buttonsPanel.scss");
/* harmony import */ var _buttonsPanel_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonsPanel.html */ "./src/components/buttonsPanel/buttonsPanel.html");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./src/store.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
/* harmony import */ var _infoPanel_infoPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../infoPanel/infoPanel */ "./src/components/infoPanel/infoPanel.js");
/* harmony import */ var _winList_winList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../winList/winList */ "./src/components/winList/winList.js");







const handleShuffle = () => {
  document.querySelector('.buttonsPanel__stop').disabled = false
  _store__WEBPACK_IMPORTED_MODULE_2__["default"].setField((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.shuffleMatrix)(_store__WEBPACK_IMPORTED_MODULE_2__["default"].getSize()))
  _store__WEBPACK_IMPORTED_MODULE_2__["default"].setTimeStart(Date.now())
  ;(0,_infoPanel_infoPanel__WEBPACK_IMPORTED_MODULE_4__.visibleMoves)(0)
}
const handleSave = () => {
  const rssGemPuzzleSaveObject = {
    dataPosition: _store__WEBPACK_IMPORTED_MODULE_2__["default"].getField(),
    gameTime: _store__WEBPACK_IMPORTED_MODULE_2__["default"].getTimeStart() ? (Date.now() - _store__WEBPACK_IMPORTED_MODULE_2__["default"].getTimeStart()) : null,
    moves: _store__WEBPACK_IMPORTED_MODULE_2__["default"].getMoves(),
    size: _store__WEBPACK_IMPORTED_MODULE_2__["default"].getSize(),
    winField: _store__WEBPACK_IMPORTED_MODULE_2__["default"].getWinField(),
  }
  localStorage.setItem('rssGemPuzzleSaveObject', JSON.stringify(rssGemPuzzleSaveObject))
}
const handleResults = () => {
  ;(0,_winList_winList__WEBPACK_IMPORTED_MODULE_5__.showWinList)()
}
const handleAudio = (e) => {
  if (_store__WEBPACK_IMPORTED_MODULE_2__["default"].getAudio()) {
    _store__WEBPACK_IMPORTED_MODULE_2__["default"].setAudio(false)
    e.style.background = '#e69096'
    e.innerHTML = '<img src="./assets/icons/volume-mute2.svg"/>'
  } else {
    _store__WEBPACK_IMPORTED_MODULE_2__["default"].setAudio(true)
    e.style.background = '#90e690'
    e.innerHTML = '<img src="./assets/icons/volume-high.svg"/>'
  }
}
const handlerStop = () => {
  document.querySelector('.buttonsPanel__stop').disabled = true
  _store__WEBPACK_IMPORTED_MODULE_2__["default"].setTimeStart(null)
  ;(0,_infoPanel_infoPanel__WEBPACK_IMPORTED_MODULE_4__.visibleMoves)(0)
}

const buttonsPanel = () => {
  const div = document.createElement('div')
  div.className = 'buttonsPanel'
  div.innerHTML = _buttonsPanel_html__WEBPACK_IMPORTED_MODULE_1__["default"]
  div.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.dataset.shuffle !== undefined) {
      handleShuffle()
    } else if (e.target.dataset.stop !== undefined) {
      handlerStop()
    } else if (e.target.dataset.save !== undefined) {
      handleSave()
    } else if (e.target.dataset.results !== undefined) {
      handleResults()
    } else if (e.target.closest('button').dataset.audio !== undefined) {
      handleAudio(e.target.closest('button'))
    }
  })

  return div
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonsPanel);


/***/ }),

/***/ "./src/components/container/container.js":
/*!***********************************************!*\
  !*** ./src/components/container/container.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _container_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container.scss */ "./src/components/container/container.scss");
/* harmony import */ var _buttonsPanel_buttonsPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buttonsPanel/buttonsPanel */ "./src/components/buttonsPanel/buttonsPanel.js");
/* harmony import */ var _field_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../field/field */ "./src/components/field/field.js");
/* harmony import */ var _infoPanel_infoPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../infoPanel/infoPanel */ "./src/components/infoPanel/infoPanel.js");
/* harmony import */ var _sizePanel_sizePanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sizePanel/sizePanel */ "./src/components/sizePanel/sizePanel.js");






const container = () => {
  const div = document.createElement('div')
  div.className = 'container'
  div.append((0,_buttonsPanel_buttonsPanel__WEBPACK_IMPORTED_MODULE_1__["default"])())
  div.append((0,_infoPanel_infoPanel__WEBPACK_IMPORTED_MODULE_3__["default"])())
  div.append((0,_field_field__WEBPACK_IMPORTED_MODULE_2__["default"])())
  div.append((0,_sizePanel_sizePanel__WEBPACK_IMPORTED_MODULE_4__["default"])())
  return div
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (container);


/***/ }),

/***/ "./src/components/field/field.js":
/*!***************************************!*\
  !*** ./src/components/field/field.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fieldHandler": () => (/* binding */ fieldHandler)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ "./src/store.js");
/* harmony import */ var _infoPanel_infoPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../infoPanel/infoPanel */ "./src/components/infoPanel/infoPanel.js");
/* harmony import */ var _field_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./field.scss */ "./src/components/field/field.scss");





const renderField = () => {
  const canvas = document.createElement('canvas')
  canvas.id = 'field'
  return canvas
}
function getEmptyCell(item) {
  const dataPosition = _store__WEBPACK_IMPORTED_MODULE_1__["default"].getField()
  if (item) {
    const emptyCell = (dataPosition[item.row]?.[item.col + 1] === 0 && {
      row: item.row,
      col: item.col + 1,
    }) || (dataPosition[item.row]?.[item.col - 1] === 0 && {
      row: item.row,
      col: item.col - 1,
    }) || (dataPosition[item.row - 1]?.[item.col] === 0 && {
      row: item.row - 1,
      col: item.col,
    }) || (dataPosition[item.row + 1]?.[item.col] === 0 && {
      row: item.row + 1,
      col: item.col,
    })
    return emptyCell
  }
  return null
}
function stillOnHovered(clientX, clientY, celSize, hoveredItem) {
  return (
    hoveredItem && clientX > hoveredItem.x
    && clientX < hoveredItem.x + celSize
    && clientY > hoveredItem.y
    && clientY < hoveredItem.y + celSize
  )
}

function getCords(matrix, size) {
  const result = []
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      result.push({
        row: i, col: j, x: j * size, y: i * size,
      })
    }
  }
  return result
}

function fieldHandler() {
  const dataPosition = _store__WEBPACK_IMPORTED_MODULE_1__["default"].getField()
  const canvas = document.getElementById('field')
  const container = document.querySelector('.container')
  const context = canvas.getContext('2d')
  let width = container.clientWidth - 10
  const audio = new Audio('./assets/audio/puzzle-15_audio_move.mp3')

  canvas.width = width
  canvas.height = width

  let hoveredItem = null
  let movedItem = null
  let shiftX = 0
  let shiftY = 0
  let delta = -1

  let celCount = _store__WEBPACK_IMPORTED_MODULE_1__["default"].getSize()
  let celSize = width / celCount
  let coords = getCords(dataPosition, celSize)
  let movement = false
  window.addEventListener('resize', () => {
    width = container.clientWidth - 10
    canvas.width = width
    canvas.height = width
    celSize = width / celCount
  })

  function drawPlayField() {
    const dataField = _store__WEBPACK_IMPORTED_MODULE_1__["default"].getField()
    celCount = _store__WEBPACK_IMPORTED_MODULE_1__["default"].getSize()
    celSize = width / celCount
    coords = getCords(dataField, celSize)

    context.clearRect(0, 0, width, width)

    for (let row = 0; row < dataField.length; row += 1) {
      for (let col = 0; col < dataField[row].length; col += 1) {
        const dx = col * celSize
        const dy = row * celSize

        if (dataField[row][col]) {
          context.beginPath()

          if (hoveredItem && hoveredItem.x === dx && hoveredItem.y === dy) {
            context.fillStyle = 'yellow'
          } else {
            context.fillStyle = 'white'
          }

          if (movedItem && movedItem.x === dx && movedItem.y === dy) {
            shiftX = shiftX ? shiftX + delta : 0
            shiftY = shiftY ? shiftY + delta : 0
            if (shiftX > celSize || shiftY > celSize || shiftX < -celSize || shiftY < -celSize) {
              delta = 0
            }

            context.rect(dx + shiftX, dy + shiftY, celSize, celSize)
            context.fill()
            context.font = `${celSize / 2}px monospace`
            context.fillStyle = 'black'
            context.textAlign = 'left'
            context.textBaseline = 'top'

            const txt = dataField[row][col]
            const measuredText = context.measureText(txt)
            const offset = celSize - measuredText.width

            context.fillText(
              dataField[row][col],
              dx + shiftX + offset / 2,
              dy + shiftY + celSize / 4,
            )
          } else {
            context.rect(dx, dy, celSize, celSize)
            context.fill()
            context.font = `${celSize / 2}px monospace`
            context.fillStyle = 'black'
            context.textAlign = 'left'
            context.textBaseline = 'top'

            const txt = dataField[row][col]
            const measuredText = context.measureText(txt)
            const offset = celSize - measuredText.width

            context.fillText(dataField[row][col], dx + offset / 2, dy + celSize / 4)
          }

          context.strokeStyle = 'red'
          context.lineWidth = 5
          context.stroke()
          context.strokeStyle = 'black'
          context.lineWidth = 1
          context.stroke()
        }
      }
    }
    requestAnimationFrame(drawPlayField)
  }
  drawPlayField()

  function getHoveredItem(clientX, clientY) {
    return coords.find(
      (c) => clientX > c.x && clientX < c.x + celSize && clientY > c.y && clientY < c.y + celSize,
    )
  }
  canvas.addEventListener('mousemove', (e) => {
    const clientX = e.offsetX
    const clientY = e.offsetY
    if (stillOnHovered(clientX, clientY, celSize, hoveredItem)) {
      return
    }
    hoveredItem = getHoveredItem(clientX, clientY)
  })

  canvas.addEventListener('mouseout', () => {
    hoveredItem = null
  })

  function checkWinner() {
    if (_store__WEBPACK_IMPORTED_MODULE_1__["default"].getAudio()) {
      audio.play()
    }

    (0,_infoPanel_infoPanel__WEBPACK_IMPORTED_MODULE_2__.visibleMoves)(1)
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.checkWin)(_store__WEBPACK_IMPORTED_MODULE_1__["default"].getField(), _store__WEBPACK_IMPORTED_MODULE_1__["default"].getWinField())) {
      const winMessage = document.createElement('div')
      winMessage.id = 'winMessage'
      winMessage.innerHTML = `Ура! Вы решили головоломку за ${(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getTimePast)(
        _store__WEBPACK_IMPORTED_MODULE_1__["default"].getTimeStart(),
      )} и ${_store__WEBPACK_IMPORTED_MODULE_1__["default"].getMoves()} ходов!`
      document.body.append(winMessage)
      window.setTimeout(() => {
        if (_store__WEBPACK_IMPORTED_MODULE_1__["default"].getTimeStart()) {
          const name = window.prompt('Write your name?', 'name')
          _store__WEBPACK_IMPORTED_MODULE_1__["default"].addToWinList(name)
        }
        winMessage.remove()
      }, 2000)
    }
  }
  canvas.addEventListener('click', (e) => {
    if (!movement) {
      e.preventDefault()
      movement = true
      const clientX = e.offsetX
      const clientY = e.offsetY

      movedItem = getHoveredItem(clientX, clientY)
      const emptyCell = getEmptyCell(movedItem)
      if (emptyCell) {
        if (emptyCell.row < movedItem.row && emptyCell.col === movedItem.col) {
          shiftY = -1
          shiftX = 0
          delta = -celSize / 6
        }
        if (emptyCell.row === movedItem.row && emptyCell.col > movedItem.col) {
          shiftX = 1
          delta = celSize / 6
          shiftY = 0
        }
        if (emptyCell.row > movedItem.row && emptyCell.col === movedItem.col) {
          shiftY = 1
          shiftX = 0
          delta = celSize / 6
        }
        if (emptyCell.row === movedItem.row && emptyCell.col < movedItem.col) {
          shiftX = -1
          shiftY = 0
          delta = -celSize / 6
        }

        setTimeout(() => {
          shiftX = 0
          shiftY = 0
          delta = 0
          _store__WEBPACK_IMPORTED_MODULE_1__["default"].changeField(emptyCell, movedItem)
          hoveredItem = null
          checkWinner()
          movement = false
        }, celSize)
      }
    }
  })

  canvas.addEventListener('mousedown', (e) => {
    canvas.ondragstart = () => false

    const clientX = e.offsetX
    const clientY = e.offsetY
    movedItem = getHoveredItem(clientX, clientY)
    const emptyCell = getEmptyCell(movedItem)

    function onMouseMove(element) {
      element.preventDefault()
      element.stopPropagation()

      if (emptyCell && emptyCell.row < movedItem.row && emptyCell.col === movedItem.col) {
        shiftY = element.offsetY - clientY
        if (shiftY <= -celSize) {
          shiftY = -celSize
        }
        if (shiftY >= 0) {
          shiftY = 0
        }
      }
      if (emptyCell.row === movedItem.row && emptyCell.col > movedItem.col) {
        shiftX = element.offsetX - clientX
        if (shiftX >= celSize) {
          shiftX = celSize
        }
        if (shiftX <= 0) {
          shiftX = 0
        }
      }
      if (emptyCell.row > movedItem.row && emptyCell.col === movedItem.col) {
        shiftY = element.offsetY - clientY
        if (shiftY >= celSize) {
          shiftY = celSize
        }
        if (shiftY <= 0) {
          shiftY = 0
        }
      }
      if (emptyCell.row === movedItem.row && emptyCell.col < movedItem.col) {
        shiftX = element.offsetX - clientX
        if (shiftX <= -celSize) {
          shiftX = -celSize
        }
        if (shiftX >= 0) {
          shiftX = 0
        }
      }
      if (Math.abs(shiftX) > 5 || Math.abs(shiftY) > 5) {
        setTimeout(() => {
          movement = true
        }, 10)
      }
    }
    document.addEventListener('mousemove', onMouseMove)

    window.onmouseup = () => {
      document.removeEventListener('mousemove', onMouseMove)

      if (Math.abs(shiftX) > celSize / 2 || Math.abs(shiftY) > (celSize / 3) * 2) {
        _store__WEBPACK_IMPORTED_MODULE_1__["default"].changeField(emptyCell, movedItem)
        movedItem = null
        checkWinner()
      }

      setTimeout(() => {
        movement = false
      }, 10)

      shiftX = 0
      shiftY = 0
      movedItem = null
    }
  })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderField);


/***/ }),

/***/ "./src/components/infoPanel/infoPanel.js":
/*!***********************************************!*\
  !*** ./src/components/infoPanel/infoPanel.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "startTimer": () => (/* binding */ startTimer),
/* harmony export */   "visibleMoves": () => (/* binding */ visibleMoves)
/* harmony export */ });
/* harmony import */ var _infoPanel_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infoPanel.scss */ "./src/components/infoPanel/infoPanel.scss");
/* harmony import */ var _infoPanel_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infoPanel.html */ "./src/components/infoPanel/infoPanel.html");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./src/store.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");





const infoPanel = () => {
  const div = document.createElement('div')
  div.className = 'infoPanel'
  div.innerHTML = _infoPanel_html__WEBPACK_IMPORTED_MODULE_1__["default"]
  return div
}

const visibleMoves = (num) => {
  const infoPanelMovesValue = document.querySelector('.infoPanel__moves-value')
  _store__WEBPACK_IMPORTED_MODULE_2__["default"].setMoves(num)
  infoPanelMovesValue.innerHTML = _store__WEBPACK_IMPORTED_MODULE_2__["default"].getMoves()
}

function updateClock() {
  const timesValue = document.querySelector('.infoPanel__times-value')
  const timeStart = _store__WEBPACK_IMPORTED_MODULE_2__["default"].getTimeStart()
  timesValue.innerHTML = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.getTimePast)(timeStart)
}
function startTimer() {
  setInterval(updateClock, 1000)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (infoPanel);


/***/ }),

/***/ "./src/components/sizePanel/sizePanel.js":
/*!***********************************************!*\
  !*** ./src/components/sizePanel/sizePanel.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sizePanel_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sizePanel.scss */ "./src/components/sizePanel/sizePanel.scss");
/* harmony import */ var _sizePanel_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sizePanel.html */ "./src/components/sizePanel/sizePanel.html");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./src/store.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
/* harmony import */ var _infoPanel_infoPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../infoPanel/infoPanel */ "./src/components/infoPanel/infoPanel.js");







const sizePanel = () => {
  const div = document.createElement('div')
  div.className = 'sizePanel'
  div.innerHTML = _sizePanel_html__WEBPACK_IMPORTED_MODULE_1__["default"]

  div.addEventListener('click', (e) => {
    e.preventDefault()
    const { size } = e.target.dataset
    if (size !== undefined) {
      document.querySelector('.sizePanel__size').innerHTML = `${size}X${size}`
      document.querySelector('.buttonsPanel__stop').disabled = true
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].setSize(size)
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].setTimeStart(null)
      ;(0,_infoPanel_infoPanel__WEBPACK_IMPORTED_MODULE_4__.visibleMoves)(0)
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].setField((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.shuffleMatrix)(_store__WEBPACK_IMPORTED_MODULE_2__["default"].getSize()))
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].setWinField((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.createWinFieldArr)(size))
    }
  })

  return div
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sizePanel);


/***/ }),

/***/ "./src/components/winList/winList.js":
/*!*******************************************!*\
  !*** ./src/components/winList/winList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "showWinList": () => (/* binding */ showWinList)
/* harmony export */ });
/* harmony import */ var _winList_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./winList.scss */ "./src/components/winList/winList.scss");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ "./src/store.js");



const renderWinList = () => {
  const size = _store__WEBPACK_IMPORTED_MODULE_1__["default"].getSize()
  const div = document.createElement('div')
  div.className = 'winList'
  div.innerHTML = `
    <div class="winList__panel">
      <div class="winList__close-btn">Close</div>
    </div>
    <div class="winList__title">Win list ${size}x${size}</div>
    <div class="winList__head">
      <div class="winList__item">name</div>
      <div class="winList__item">time</div>
      <div class="winList__item">moves</div>
    </div>`
  const winListSize = _store__WEBPACK_IMPORTED_MODULE_1__["default"].getWinList()
  winListSize.forEach((elem) => {
    const item = document.createElement('div')
    item.className = 'winList__row'
    item.innerHTML = `
      <div class="winList__item">${elem.name}</div>
      <div class="winList__item">${elem.time}</div>
      <div class="winList__item">${elem.moves}</div>
    `
    div.append(item)
  })
  div.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.winList').remove()
  })
  return div
}

function showWinList() {
  document.body.append(renderWinList())
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderWinList);


/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkWin": () => (/* binding */ checkWin),
/* harmony export */   "createWinFieldArr": () => (/* binding */ createWinFieldArr),
/* harmony export */   "getTimePast": () => (/* binding */ getTimePast),
/* harmony export */   "getZero": () => (/* binding */ getZero),
/* harmony export */   "shuffleMatrix": () => (/* binding */ shuffleMatrix),
/* harmony export */   "toMatrix": () => (/* binding */ toMatrix)
/* harmony export */ });
function toArray(matrix) {
  return matrix.flat(1)
}
function toMatrix(arr) {
  const count = Math.sqrt(arr.length)
  const result = []
  for (let i = 0; i < count; i += 1) {
    const elemI = []
    for (let j = 0; j < count; j += 1) {
      elemI.push(arr[i * count + j])
    }
    result.push(elemI)
  }
  return result
}
// * create structure matrix size 2 => [[1,2],[3,0]]
function createWinFieldArr(size) {
  const arrSize = size * size
  const newArr = Array(arrSize).fill('')
  for (let i = 0; i < arrSize; i += 1) {
    newArr[i] = i === arrSize - 1 ? 0 : i + 1
  }
  return newArr
}
// !rename to check winner
function checkWin(fieldMatrix, winArr) {
  const fieldArr = toArray(fieldMatrix)
  for (let i = 0; i < winArr.length; i += 1) {
    if (fieldArr[i] !== winArr[i]) {
      return false
    }
  }
  return true
}
// * shuffle matrix
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}
function getEmptyElement(matrix) {
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      if (matrix[i][j] === 0) {
        return { row: i, col: j }
      }
    }
  }
  return null
}
function shuffleMatrix(size) {
  const matrix = toMatrix(createWinFieldArr(size))
  const times = getRandomInt(100, 10000)

  for (let i = 0; i < times; i += 1) {
    const random = getRandomInt(1, 5)
    const index0 = getEmptyElement(matrix)

    const positions = {
      1: matrix[index0.row - 1]?.[index0.col] && {
        row: index0.row - 1,
        col: index0.col,
      },
      2: matrix[index0.row + 1]?.[index0.col] && {
        row: index0.row + 1,
        col: index0.col,
      },
      3: matrix[index0.row]?.[index0.col - 1] && {
        row: index0.row,
        col: index0.col - 1,
      },
      4: matrix[index0.row]?.[index0.col + 1] && {
        row: index0.row,
        col: index0.col + 1,
      },
    }
    if (positions[random]) {
      const currentN = matrix[positions[random].row][positions[random].col]
      matrix[positions[random].row][positions[random].col] = 0
      matrix[index0.row][index0.col] = currentN
    }
  }
  return matrix
}
// * for time
// * get zero for one number example 1 => 01
function getZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`
  }
  return num
}
function getTimePast(timeStart) {
  if (timeStart && timeStart > 0) {
    const time = new Date(Date.now() - timeStart)
    return `${getZero(time.getMinutes())}:${getZero(time.getSeconds())}`
  }
  return '00:00'
}


/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");


let dataPosition = []
const data = {
  game: null,
  audio: true,
  timeStart: null,
  moves: 0,
  size: 4,
  results: [],
  winField: [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0],
  ],
  winList: {
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
  },
}

const getGame = () => data.game
const setGame = (action) => {
  data.game = action
}
const getMoves = () => data.moves
const getAudio = () => data.audio
const setAudio = (action) => {
  data.audio = action
}
const setMoves = (action) => {
  if (!action) {
    data.moves = 0
  } else {
    data.moves += action
  }
}
const getTimeStart = () => data.timeStart
const setTimeStart = (action) => {
  data.timeStart = action
}

const getField = () => dataPosition
const getSize = () => data.size
const setSize = (n) => {
  data.size = n
}
const getResults = () => data.results
const setField = (matrix) => {
  dataPosition = matrix
}
const changeField = (emptyCell, hoveredItem) => {
  const currentN = dataPosition[hoveredItem.row][hoveredItem.col]
  dataPosition[hoveredItem.row][hoveredItem.col] = 0
  dataPosition[emptyCell.row][emptyCell.col] = currentN
}
const getWinField = () => data.winField
const setWinField = (arr) => {
  data.winField = arr
}
const getWinList = () => data.winList[data.size]

const setWinList = (obj) => {
  data.winList = obj
}
const addToWinList = (name) => {
  if (name) {
    const winListForSize = data.winList[data.size]
    const obj = {
      name,
      timeMs: Date.now() - data.timeStart,
      time: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getTimePast)(data.timeStart),
      moves: data.moves,
    }
    if (winListForSize.length < 10) {
      data.winList[data.size] = winListForSize.concat(obj)
    } else {
      const arrForSort = winListForSize.concat(obj).sort((a, b) => {
        if (a.moves > b.moves) return 1
        if (a.moves < b.moves) return -1
        if (a.timeMs > b.timeMs) return 1
        if (a.timeMs < b.timeMs) return -1
        return 1
      })
      arrForSort.pop()
      data.winList[data.size] = arrForSort
    }
    localStorage.setItem('setWinListSaveObject', JSON.stringify(data.winList))
  }
}

const store = {
  getField,
  getMoves,
  getTimeStart,
  getSize,
  setSize,
  getResults,
  setField,
  setMoves,
  setTimeStart,
  setWinField,
  changeField,
  getWinField,
  getWinList,
  setWinList,
  addToWinList,
  getAudio,
  setAudio,
  getGame,
  setGame,
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);


/***/ }),

/***/ "./src/assets/icons/volume-high.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/volume-high.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e20cd543a829a17d592.svg";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_container_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/container/container */ "./src/components/container/container.js");
/* harmony import */ var _components_field_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/field/field */ "./src/components/field/field.js");
/* harmony import */ var _components_infoPanel_infoPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/infoPanel/infoPanel */ "./src/components/infoPanel/infoPanel.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./src/store.js");






document.body.append((0,_components_container_container__WEBPACK_IMPORTED_MODULE_0__["default"])())
;(0,_components_field_field__WEBPACK_IMPORTED_MODULE_1__.fieldHandler)()
;(0,_components_infoPanel_infoPanel__WEBPACK_IMPORTED_MODULE_2__.startTimer)()
_store__WEBPACK_IMPORTED_MODULE_4__["default"].setTimeStart(null)
_store__WEBPACK_IMPORTED_MODULE_4__["default"].setField((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.shuffleMatrix)(_store__WEBPACK_IMPORTED_MODULE_4__["default"].getSize()))

const save = localStorage.getItem('rssGemPuzzleSaveObject')
if (save) {
  const answer = window.confirm('Хотите продолжить сохраненную игру? При отказе игра будет удалена')
  if (answer) {
    const saveObj = JSON.parse(save)
    _store__WEBPACK_IMPORTED_MODULE_4__["default"].setField(saveObj.dataPosition)

    ;(0,_components_infoPanel_infoPanel__WEBPACK_IMPORTED_MODULE_2__.visibleMoves)(saveObj.moves)
    _store__WEBPACK_IMPORTED_MODULE_4__["default"].setWinField(saveObj.winField)
    _store__WEBPACK_IMPORTED_MODULE_4__["default"].setTimeStart(saveObj.gameTime ? Date.now() - saveObj.gameTime : null)
    _store__WEBPACK_IMPORTED_MODULE_4__["default"].setSize(saveObj.size)
  } else {
    localStorage.removeItem('rssGemPuzzleSaveObject')
  }
}
const winList = localStorage.getItem('setWinListSaveObject')
if (winList) {
  const saveObj = JSON.parse(winList)
  _store__WEBPACK_IMPORTED_MODULE_4__["default"].setWinList(saveObj)
}

})();

/******/ })()
;
//# sourceMappingURL=app.js.map