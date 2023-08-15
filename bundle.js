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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Sile.ttf */ \"./src/Sile.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/wallpaper.png */ \"./src/images/wallpaper.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: sile;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\nbody {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  background-color: rgba(255, 140, 0, 0.576);\n  background-blend-mode: multiply;\n  background-size: 100%;\n  font-family: sile;\n  margin: 0;\n}\n\n.button-container {\n  display: flex;\n  justify-content: space-around;\n  min-width: 300px;\n  margin: 50px;\n}\nbutton {\n  flex: 1;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  color: rgb(77, 12, 12);\n  font-family: inherit;\n  font-size: 50px;\n  position: relative;\n  cursor: pointer;\n}\nbutton::after {\n  content: '';\n  position: absolute;\n  height: 5px;\n  bottom: 0;\n  left: 50%;\n  transform: scaleX(0);\n  background: rgb(77, 12, 12);\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\nbutton:hover::after, button:focus::after {\n  width: 100%;\n  left: 0;\n  transform: scaleX(1);\n}\n\n.text-container {\n  background-color: rgba(250, 235, 215, 0.8);\n  width: clamp(300px, 80%, 1000px);\n  margin: auto;\n  padding: 20px;\n  border-radius: 20px;\n}\n\nh1, h2, h3 {\n  text-align: center;\n  font-size: 70px;\n  font-weight: lighter;\n  color: rgb(120, 26, 26);\n}\n.title {\n  background-color: rgba(165, 42, 42, 0.9);\n  color: antiquewhite;\n}\nh2 {\n  font-size: 50px;\n}\nh4 {\n  color: brown;\n  margin: 0;\n}\n\n.menu-main, .menu-special, .menu-breakfast, .menu-snack {\n  background-color: rgba(250, 235, 215, 0.9);\n  margin: auto;\n  border-radius: 20px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 0.3fr));\n  margin: 20px;\n  padding: 10px;\n  height: 100%;\n  justify-content: center;\n  gap: 20px;\n}\n.menu-special {\n  grid-template-columns: repeat(auto-fit, minmax(250px, 0.25fr));\n}\n.menu-main img, .menu-special img, .menu-other img {\n  height: 150px;\n}\n.menu-other {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(500px, 0.5fr));\n  justify-content: center;\n}\n.menu-breakfast, .menu-snack {\n  grid-template-columns: repeat(auto-fit, minmax(250px, 0.5fr));\n  height: auto;\n}\n.food {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: rgb(223, 122, 6);\n  font-size: 30px;\n}\n.food:hover {\n  transform: scale(1.1);\n  transition: transform 250ms;\n  cursor: pointer;\n}\n\n.contact-container {\n  margin: auto;\n  display: flex;\n  width: clamp(400px, 50%, 1000px);\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(250, 235, 215, 0.9);\n  border-radius: 20px;\n  color: black;\n}\n.contact-container img {\n  width: clamp(320px, 70%, 1000px);\n  transition: transform 400ms;\n}\n.contact-container img:hover {\n  transform: scale(1.1);\n  transition: transform 250ms;\n}\n.contact-container h3 {\n  font-size: 45px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_contact2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/contact2.png */ \"./src/images/contact2.png\");\n/* harmony import */ var _images_food1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/food1.png */ \"./src/images/food1.png\");\n/* harmony import */ var _images_food2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/food2.png */ \"./src/images/food2.png\");\n/* harmony import */ var _images_food3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/food3.png */ \"./src/images/food3.png\");\n/* harmony import */ var _images_food4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/food4.png */ \"./src/images/food4.png\");\n/* harmony import */ var _images_food5_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/food5.png */ \"./src/images/food5.png\");\n/* harmony import */ var _images_food6_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/food6.png */ \"./src/images/food6.png\");\n/* harmony import */ var _images_food7_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/food7.png */ \"./src/images/food7.png\");\n/* harmony import */ var _images_food8_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/food8.png */ \"./src/images/food8.png\");\n/* harmony import */ var _images_food9_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/food9.png */ \"./src/images/food9.png\");\n/* harmony import */ var _images_food10_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/food10.png */ \"./src/images/food10.png\");\n/* harmony import */ var _images_food11_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/food11.png */ \"./src/images/food11.png\");\n/* harmony import */ var _images_food12_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/food12.png */ \"./src/images/food12.png\");\n/* harmony import */ var _images_food13_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/food13.png */ \"./src/images/food13.png\");\n/* harmony import */ var _images_food14_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/food14.png */ \"./src/images/food14.png\");\n/* harmony import */ var _images_food15_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/food15.png */ \"./src/images/food15.png\");\n/* harmony import */ var _images_food16_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/food16.png */ \"./src/images/food16.png\");\n/* harmony import */ var _images_food17_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/food17.png */ \"./src/images/food17.png\");\n/* harmony import */ var _images_food18_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/food18.png */ \"./src/images/food18.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst container = document.getElementById('content');\nconst buttonContainer = document.createElement('div');\nbuttonContainer.classList.add('button-container');\ndocument.body.appendChild(buttonContainer);\n\nconst home = document.createElement('button');\nhome.classList.add('home-button');\nhome.textContent = 'HOME';\nbuttonContainer.appendChild(home);\n\nconst menu = document.createElement('button');\nmenu.classList.add('menu-button');\nmenu.textContent = 'MENU';\nbuttonContainer.appendChild(menu);\n\nconst contact = document.createElement('button');\ncontact.classList.add('contact-button');\ncontact.textContent = ' CONTACT';\nbuttonContainer.appendChild(contact);\n\nfunction mainPage() {\n  const textContainer = document.createElement('div');\n  textContainer.classList.add('text-container');\n  container.appendChild(textContainer);\n  const headline = document.createElement('h1');\n  headline.textContent = 'A GUDETAMA RESTAURANT';\n  textContainer.appendChild(headline);\n  const welcome = document.createElement('h2');\n  welcome.textContent = 'Welcome to our restaurant! Forget about your boring low-paid job and be lazy like Gudetama while we serve you the best food ever!';\n  textContainer.appendChild(welcome);\n  return container;\n}\n\nfunction menuPage() {\n  const menuTitle = document.createElement('h1');\n  menuTitle.textContent = 'MENU';\n  menuTitle.classList.add('title');\n  container.appendChild(menuTitle);\n  // Main dishes\n  const menuMain = document.createElement('div');\n  menuMain.classList.add('menu-main');\n  const menuMainText = document.createElement('h2');\n  menuMainText.textContent = 'Main Dishes';\n  container.appendChild(menuMainText);\n  container.appendChild(menuMain);\n  const food1 = document.createElement('div');\n  const food1Name = 'Curryegg';\n  const food1Pic = new Image();\n  food1Pic.src = _images_food1_png__WEBPACK_IMPORTED_MODULE_2__;\n  const food1Price = document.createElement('h4');\n  food1Price.textContent = '$10';\n  food1.append(food1Pic, food1Name, food1Price);\n  menuMain.append(food1);\n  const food2 = document.createElement('div');\n  const food2Name = 'Oyster Omlette';\n  const food2Pic = new Image();\n  food2Pic.src = _images_food2_png__WEBPACK_IMPORTED_MODULE_3__;\n  const food2Price = document.createElement('h4');\n  food2Price.textContent = '$12';\n  food2.append(food2Pic, food2Name, food2Price);\n  menuMain.append(food2);\n  const food3 = document.createElement('div');\n  const food3Name = 'Kamatama Udon';\n  const food3Pic = new Image();\n  food3Pic.src = _images_food3_png__WEBPACK_IMPORTED_MODULE_4__;\n  const food3Price = document.createElement('h4');\n  food3Price.textContent = '$13';\n  food3.append(food3Pic, food3Name, food3Price);\n  menuMain.append(food3);\n  const food4 = document.createElement('div');\n  const food4Name = 'Mt. Fujiggly';\n  const food4Pic = new Image();\n  food4Pic.src = _images_food4_png__WEBPACK_IMPORTED_MODULE_5__;\n  const food4Price = document.createElement('h4');\n  food4Price.textContent = '$13';\n  food4.append(food4Pic, food4Name, food4Price);\n  menuMain.append(food4);\n  const food5 = document.createElement('div');\n  const food5Name = 'Gude Tempura Bowl';\n  const food5Pic = new Image();\n  food5Pic.src = _images_food5_png__WEBPACK_IMPORTED_MODULE_6__;\n  const food5Price = document.createElement('h4');\n  food5Price.textContent = '$15';\n  food5.append(food5Pic, food5Name, food5Price);\n  menuMain.append(food5);\n  const food6 = document.createElement('div');\n  const food6Name = 'Foie Gras';\n  const food6Pic = new Image();\n  food6Pic.src = _images_food6_png__WEBPACK_IMPORTED_MODULE_7__;\n  const food6Price = document.createElement('h4');\n  food6Price.textContent = '$20';\n  food6.append(food6Pic, food6Name, food6Price);\n  menuMain.append(food6);\n\n  //Special dishes\n  const menuSpecial = document.createElement('div');\n  menuSpecial.classList.add('menu-special');\n  const menuSpecialText = document.createElement('h2');\n  menuSpecialText.textContent = 'Special Dishes';\n  container.appendChild(menuSpecialText);\n  container.appendChild(menuSpecial);\n  const food7 = document.createElement('div');\n  const food7Name = '1st Anniversary';\n  const food7Pic = new Image();\n  food7Pic.src = _images_food7_png__WEBPACK_IMPORTED_MODULE_8__;\n  const food7Price = document.createElement('h4');\n  food7Price.textContent = '$15';\n  food7.append(food7Pic, food7Name, food7Price);\n  menuSpecial.append(food7);\n  const food8 = document.createElement('div');\n  const food8Name = '2nd Anniversary';\n  const food8Pic = new Image();\n  food8Pic.src = _images_food8_png__WEBPACK_IMPORTED_MODULE_9__;\n  const food8Price = document.createElement('h4');\n  food8Price.textContent = '$12';\n  food8.append(food8Pic, food8Name, food8Price);\n  menuSpecial.append(food8);\n  const food9 = document.createElement('div');\n  const food9Name = '3rd Anniversary';\n  const food9Pic = new Image();\n  food9Pic.src = _images_food9_png__WEBPACK_IMPORTED_MODULE_10__;\n  const food9Price = document.createElement('h4');\n  food9Price.textContent = '$15';\n  food9.append(food9Pic, food9Name, food9Price);\n  menuSpecial.append(food9);\n  const food10 = document.createElement('div');\n  const food10Name = '4th Anniversary';\n  const food10Pic = new Image();\n  food10Pic.src = _images_food10_png__WEBPACK_IMPORTED_MODULE_11__;\n  const food10Price = document.createElement('h4');\n  food10Price.textContent = '$20';\n  food10.append(food10Pic, food10Name, food10Price);\n  menuSpecial.append(food10);\n\n  // Breakfast & snack\n  const menuOther = document.createElement('div');\n  menuOther.classList.add('menu-other');\n  container.appendChild(menuOther);\n\n  const menuBreakfastContainer = document.createElement('div');\n  menuOther.appendChild(menuBreakfastContainer);\n  const menuBreakfastText = document.createElement('h2');\n  menuBreakfastText.textContent = 'Breakfast';\n  menuBreakfastContainer.appendChild(menuBreakfastText);\n  const menuBreakfast = document.createElement('div');\n  menuBreakfast.classList.add('menu-breakfast');\n  menuBreakfastContainer.appendChild(menuBreakfast);\n\n  const menuSnackContainer = document.createElement('div');\n  menuOther.appendChild(menuSnackContainer);\n  const menuSnackText = document.createElement('h2');\n  menuSnackText.textContent = 'Snacks';\n  menuSnackContainer.appendChild(menuSnackText);\n  const menuSnack = document.createElement('div');\n  menuSnack.classList.add('menu-snack');\n  menuSnackContainer.appendChild(menuSnack);\n  \n  const food11 = document.createElement('div');\n  const food11Name = 'Bacon Egg (Layers)';\n  const food11Pic = new Image();\n  food11Pic.src = _images_food11_png__WEBPACK_IMPORTED_MODULE_12__;\n  const food11Price = document.createElement('h4');\n  food11Price.textContent = '$4';\n  food11.append(food11Pic, food11Name, food11Price);\n  menuBreakfast.append(food11);\n  const food12 = document.createElement('div');\n  const food12Name = 'Hot Bun Pillow';\n  const food12Pic = new Image();\n  food12Pic.src = _images_food12_png__WEBPACK_IMPORTED_MODULE_13__;\n  const food12Price = document.createElement('h4');\n  food12Price.textContent = '$4';\n  food12.append(food12Pic, food12Name, food12Price);\n  menuBreakfast.append(food12);\n  const food13 = document.createElement('div');\n  const food13Name = 'Slovenly gudetama';\n  const food13Pic = new Image();\n  food13Pic.src = _images_food13_png__WEBPACK_IMPORTED_MODULE_14__;\n  const food13Price = document.createElement('h4');\n  food13Price.textContent = '$5';\n  food13.append(food13Pic, food13Name, food13Price);\n  menuBreakfast.append(food13);\n  const food14 = document.createElement('div');\n  const food14Name = 'Gude Banh Mi';\n  const food14Pic = new Image();\n  food14Pic.src = _images_food14_png__WEBPACK_IMPORTED_MODULE_15__;\n  const food14Price = document.createElement('h4');\n  food14Price.textContent = '$7';\n  food14.append(food14Pic, food14Name, food14Price);\n  menuBreakfast.append(food14);\n  const food15 = document.createElement('div');\n  const food15Name = 'Gudetama Sailor';\n  const food15Pic = new Image();\n  food15Pic.src = _images_food15_png__WEBPACK_IMPORTED_MODULE_16__;\n  const food15Price = document.createElement('h4');\n  food15Price.textContent = '$7';\n  food15.append(food15Pic, food15Name, food15Price);\n  menuSnack.append(food15);\n  const food16 = document.createElement('div');\n  const food16Name = 'Pudding Shaved Ice';\n  const food16Pic = new Image();\n  food16Pic.src = _images_food16_png__WEBPACK_IMPORTED_MODULE_17__;\n  const food16Price = document.createElement('h4');\n  food16Price.textContent = '$10';\n  food16.append(food16Pic, food16Name, food16Price);\n  menuSnack.append(food16);\n  const food17 = document.createElement('div');\n  const food17Name = 'Rainbow Cake';\n  const food17Pic = new Image();\n  food17Pic.src = _images_food17_png__WEBPACK_IMPORTED_MODULE_18__;\n  const food17Price = document.createElement('h4');\n  food17Price.textContent = '$12';\n  food17.append(food17Pic, food17Name, food17Price);\n  menuSnack.append(food17);\n  const food18 = document.createElement('div');\n  const food18Pic = new Image();\n  food18Pic.src = _images_food18_png__WEBPACK_IMPORTED_MODULE_19__;\n  const food18Name = 'Eleggance';\n  const food18Price = document.createElement('h4');\n  food18Price.textContent = '$18';\n  food18.append(food18Pic, food18Name, food18Price);\n  menuSnack.append(food18);\n\n  for (const food of menuMain.querySelectorAll('div')) {\n    food.classList.add('food');\n  }\n  for (const food of menuSpecial.querySelectorAll('div')) {\n    food.classList.add('food');\n  }\n  for (const food of menuBreakfast.querySelectorAll('div')) {\n    food.classList.add('food');\n  }\n  for (const food of menuSnack.querySelectorAll('div')) {\n    food.classList.add('food');\n  }\n  return container;\n}\n\nfunction contactPage() {\n  const contactTitle = document.createElement('h1');\n  contactTitle.textContent = 'CONTACT';\n  contactTitle.classList.add('title');\n  container.appendChild(contactTitle);\n  const contactContainer = document.createElement('div');\n  contactContainer.classList.add('contact-container');\n  container.appendChild(contactContainer);\n  const contactInfo = document.createElement('h3');\n  contactInfo.textContent = 'gudetama@dontmailme.com';\n  const contactPic = new Image();\n  contactPic.src = _images_contact2_png__WEBPACK_IMPORTED_MODULE_1__;\n  const contactQuote = document.createElement('h3');\n  contactQuote.textContent = 'Yeah I have contacts but I barely pick up my phone cuz I\\'m too lazy.. Meh';\n  contactContainer.append(contactInfo, contactPic, contactQuote);\n  return container;\n}\n\nfunction clear() {\n  container.textContent = '';\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  home.click(); \n});\n\nmenu.addEventListener('click', () => {\n  clear();\n  document.body.appendChild(menuPage());\n  // menuPage().querySelector('.title').style.opacity = '1';\n})\ncontact.addEventListener('click', () => {\n  clear();\n  document.body.appendChild(contactPage());\n  // menuPage().querySelector('.title').style.opacity = '1';\n})\nhome.addEventListener('click', () => {\n  clear();\n  document.body.appendChild(mainPage());\n  // menuPage().querySelector('.text-container').style.opacity = '1';\n})\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/Sile.ttf":
/*!**********************!*\
  !*** ./src/Sile.ttf ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0732749e0d2395209cb3.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/Sile.ttf?");

/***/ }),

/***/ "./src/images/contact2.png":
/*!*********************************!*\
  !*** ./src/images/contact2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e3beee4827400d25e971.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/contact2.png?");

/***/ }),

/***/ "./src/images/food1.png":
/*!******************************!*\
  !*** ./src/images/food1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4d60f15c9d544c3254f6.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food1.png?");

/***/ }),

/***/ "./src/images/food10.png":
/*!*******************************!*\
  !*** ./src/images/food10.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"91c55840d7a7b8641551.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food10.png?");

/***/ }),

/***/ "./src/images/food11.png":
/*!*******************************!*\
  !*** ./src/images/food11.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8acac74593420aba7c04.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food11.png?");

/***/ }),

/***/ "./src/images/food12.png":
/*!*******************************!*\
  !*** ./src/images/food12.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ab0b49ddae303a4f0297.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food12.png?");

/***/ }),

/***/ "./src/images/food13.png":
/*!*******************************!*\
  !*** ./src/images/food13.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fee0dc0ea782fc9daa06.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food13.png?");

/***/ }),

/***/ "./src/images/food14.png":
/*!*******************************!*\
  !*** ./src/images/food14.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3b308167bfc000c52d62.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food14.png?");

/***/ }),

/***/ "./src/images/food15.png":
/*!*******************************!*\
  !*** ./src/images/food15.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fe75e4b0f4e3d9689948.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food15.png?");

/***/ }),

/***/ "./src/images/food16.png":
/*!*******************************!*\
  !*** ./src/images/food16.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aca777f15347eede8933.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food16.png?");

/***/ }),

/***/ "./src/images/food17.png":
/*!*******************************!*\
  !*** ./src/images/food17.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d3ece2daa9c72c1740ad.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food17.png?");

/***/ }),

/***/ "./src/images/food18.png":
/*!*******************************!*\
  !*** ./src/images/food18.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7092a53f83f8f0d5ff59.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food18.png?");

/***/ }),

/***/ "./src/images/food2.png":
/*!******************************!*\
  !*** ./src/images/food2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6cf10283941331f4e023.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food2.png?");

/***/ }),

/***/ "./src/images/food3.png":
/*!******************************!*\
  !*** ./src/images/food3.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c46b9a0c53cdb873946d.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food3.png?");

/***/ }),

/***/ "./src/images/food4.png":
/*!******************************!*\
  !*** ./src/images/food4.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7723057c9f9c84f981dc.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food4.png?");

/***/ }),

/***/ "./src/images/food5.png":
/*!******************************!*\
  !*** ./src/images/food5.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ac7b84d80f5ef392d54d.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food5.png?");

/***/ }),

/***/ "./src/images/food6.png":
/*!******************************!*\
  !*** ./src/images/food6.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8a91332f8b1964d4fb5a.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food6.png?");

/***/ }),

/***/ "./src/images/food7.png":
/*!******************************!*\
  !*** ./src/images/food7.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d18048879b1353546d7e.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food7.png?");

/***/ }),

/***/ "./src/images/food8.png":
/*!******************************!*\
  !*** ./src/images/food8.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5ecb3ec89cb4bde24151.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food8.png?");

/***/ }),

/***/ "./src/images/food9.png":
/*!******************************!*\
  !*** ./src/images/food9.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b81e5ad0de1f8f1d33d8.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food9.png?");

/***/ }),

/***/ "./src/images/wallpaper.png":
/*!**********************************!*\
  !*** ./src/images/wallpaper.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c7e0a3811c461bc5a015.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/wallpaper.png?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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