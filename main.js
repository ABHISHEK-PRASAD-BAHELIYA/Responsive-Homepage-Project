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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Cooper-Bold.otf */ \"./src/fonts/Cooper-Bold.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Cooper-Black.otf */ \"./src/fonts/Cooper-Black.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n    font-family: Cooper;\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  }\r\n  \r\n  @font-face {\r\n    font-family: Cooper-Black;\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n  }\r\n  \r\n  :root {\r\n    --header-deco-main2: #6fbffc;\r\n    --header-deco-main: #2b75d6;\r\n    --header-deco-blue: #45d1f7;\r\n    --header-deco-purple: #6d2feb;\r\n    --header-deco-green: #7bed24;\r\n    --header-deco-yellow: #ffee33;\r\n    --header-deco-orange: #fa7020;\r\n    --header-deco-red: #fa2d67;\r\n  }\r\n  \r\n  * {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  p {\r\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    line-height: 1.3em;\r\n    font-size: 20px;\r\n  }\r\n  \r\n  h1, h2, h3, h4, h5, h6 {\r\n    font-family: Cooper;\r\n    letter-spacing: .02em;\r\n    line-height: 1em;\r\n  }\r\n  \r\n  h1 {\r\n    font-family: Cooper-Black;\r\n  }\r\n  \r\n  h2 {\r\n    font-size: 50px;\r\n  }\r\n  \r\n  .header {\r\n    position: relative;\r\n    margin: auto;\r\n  }\r\n  \r\n  .style-wrapper {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n  }\r\n  \r\n  .anim-layer {\r\n    animation: headerAnim 1.5s ease-out forwards;\r\n  }\r\n  \r\n  .style-layer {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    transform-origin: 0;\r\n  }\r\n  \r\n  .skew {\r\n    transform: skewY(-10deg);\r\n  }\r\n  \r\n  .red {\r\n    background-color: var(--header-deco-red);\r\n  }\r\n  \r\n  .orange {\r\n    background-color: var(--header-deco-orange);\r\n  }\r\n  \r\n  .yellow {\r\n    background-color: var(--header-deco-yellow);\r\n  }\r\n  \r\n  .green {\r\n    background-color: var(--header-deco-green);\r\n  }\r\n  \r\n  .purple {\r\n    background-color: var(--header-deco-purple);\r\n  }\r\n  \r\n  .blue {\r\n    background-color: var(--header-deco-blue);\r\n  }\r\n  \r\n  .blue-main {\r\n    background: linear-gradient(var(--header-deco-main2) 5%, var(--header-deco-main));\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .box-shadow {\r\n    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);\r\n  }\r\n  \r\n  .header .wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 50px;\r\n  }\r\n  \r\n  .header .img-wrapper {\r\n    position: relative;\r\n    overflow: hidden;\r\n    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);\r\n    width: min(100% - 20px, 400px);\r\n  }\r\n  \r\n  .header .img-wrapper img {\r\n    width: 100%;\r\n    display: block;\r\n  }\r\n  \r\n  .img-wrapper h1 {\r\n    position: absolute;\r\n    bottom: 10px;\r\n    left: 0;\r\n    width: 100%;\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 40px;\r\n    z-index: 2;\r\n  }\r\n  \r\n  /* vignette for header img because it's too light */\r\n  .header .img-wrapper::after {\r\n    content: \"\";\r\n    display: block;\r\n    width: 150%;\r\n    height: 150%;\r\n    background: radial-gradient(circle, transparent 25%, black);\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: -25%;\r\n    left: -25%;\r\n  }\r\n  \r\n  .about-me {\r\n    width: min(100vw - 40px, 600px);\r\n    padding: 20px;\r\n    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);\r\n    background-color: white;\r\n  }\r\n  \r\n  .about-me h2 {\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .social-icons {\r\n    display: flex;\r\n    gap: 20px;\r\n    justify-content: flex-end;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  a.fa {\r\n    color: black;\r\n    font-size: 32px;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .battle-section .wrapper {\r\n    width: min(100% - 100px, 1400px);\r\n    margin-inline: auto;\r\n    margin-block: 80px;\r\n  }\r\n  \r\n  .battle-section h2 {\r\n    margin-bottom: 35px;\r\n  }\r\n  \r\n  .battles {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(min(100%, 350px), 1fr));\r\n    gap: 40px;\r\n  }\r\n  \r\n  .battle-div img {\r\n    width: 100%;\r\n    height: 250px;\r\n    object-fit: cover;\r\n    display: block;\r\n  }\r\n  \r\n  .battle-info {\r\n    padding: 10px;\r\n    background-color: white;\r\n  }\r\n  \r\n  .battle-info .title {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  .battle-info h3 {\r\n    font-size: 24px;\r\n    margin-bottom: 5px;\r\n  }\r\n  \r\n  .battle-info a {\r\n    font-size: 24px;\r\n  }\r\n  \r\n  .battle-info h4 {\r\n    font-size: 18px;\r\n    color: rgba(0,0,0,0.75);\r\n    text-indent: -1ch;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .battle-info p {\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .footer-style {\r\n    height: 8px;\r\n  }\r\n  \r\n  .footer {\r\n    background: linear-gradient(var(--header-deco-main), var(--header-deco-main2));\r\n    color: white;\r\n  }\r\n  \r\n  .footer .wrapper {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .footer .wrapper>* {\r\n    padding: 60px 40px;\r\n  }\r\n  \r\n  .social-icons.footer-icons {\r\n    color: black;\r\n    justify-content: flex-start;\r\n  }\r\n  \r\n  .contact-info p, .contact-info h2 {\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .footer .img-wrapper {\r\n    width: min(100vw - 20px, 550px);\r\n  }\r\n  \r\n  .footer img {\r\n    display: block;\r\n    width: 100%;\r\n    margin: auto;\r\n    object-fit: cover;\r\n    aspect-ratio: 4 / 3;\r\n  }\r\n  \r\n  @keyframes headerAnim {\r\n    from {\r\n      transform: skewY(0deg);\r\n    }\r\n    to {\r\n      transform: skewY(-10deg);\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 1100px) {\r\n    .img-wrapper h1 {\r\n      font-size: 48px;\r\n      text-align: left;\r\n      left: 15px;\r\n    }\r\n    \r\n    .about-me {\r\n      margin: auto;\r\n    }\r\n    \r\n    .footer .wrapper {\r\n      align-items: center;\r\n      flex-direction: column;\r\n    }\r\n    \r\n    .contact-info {\r\n      text-align: center;\r\n    }\r\n    \r\n    .social-icons.footer-icons {\r\n      justify-content: center;\r\n    }\r\n    \r\n    .footer .img-wrapper {\r\n      width: calc(100vw - 40px);\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 800px) and (max-width: 1100px) {\r\n    .header .wrapper {\r\n      display: block;\r\n    }\r\n    \r\n    .header .img-wrapper {\r\n      width: 350px;\r\n      height: 350px;\r\n      float: left;\r\n      margin-right: 1rem;\r\n    }\r\n    \r\n    .about-me {\r\n      margin-top: 60px;\r\n      width: min(100vw - 40px, 650px);\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 800px) {\r\n    .header .wrapper {\r\n      flex-direction: column;\r\n      gap: 20px;\r\n    }\r\n    \r\n    .about-me {\r\n      margin: 0;\r\n    }\r\n  }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Responsive_Home_Page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://Responsive_Home_Page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://Responsive_Home_Page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Responsive_Home_Page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Responsive_Home_Page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Responsive_Home_Page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Responsive_Home_Page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Responsive_Home_Page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Responsive_Home_Page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Responsive_Home_Page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Responsive_Home_Page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderFooter: () => (/* binding */ renderFooter)\n/* harmony export */ });\n// footer.js\r\nfunction renderFooter() {\r\n    return `\r\n      <footer class=\"footer\">\r\n        <div class=\"red footer-style\"></div>\r\n        <div class=\"orange footer-style\"></div>\r\n        <div class=\"yellow footer-style\"></div>\r\n        <div class=\"green footer-style\"></div>\r\n        <div class=\"blue footer-style\"></div>\r\n        <div class=\"purple footer-style\"></div>\r\n        <div class=\"wrapper\">\r\n          <div class=\"contact-info\">\r\n            <h2>Contact Me</h2>\r\n            <p>Please get in touch if you think our work<br>could be mutually beneficial!</p>\r\n            <p>Green Dolphin St. Prison<br>Port St. Lucie, Florida</p>\r\n            <p><i class=\"fa fa-phone\"></i>&nbsp; 555-555-5555</p>\r\n            <p><i class=\"fa fa-envelope\"></i>&nbsp; yareyaredawa@gmail.com</p>\r\n            <div class=\"social-icons footer-icons\">\r\n              <a href=\"\" class=\"fa fa-github\"></a>\r\n              <a href=\"\" class=\"fa fa-linkedin\"></a>\r\n              <a href=\"\" class=\"fa fa-twitter\"></a>\r\n            </div>\r\n          </div>\r\n          <div class=\"img-wrapper\">\r\n            <img class=\"box-shadow\" src=\"imgs/jolyne-footer.jpg\" alt=\"\">\r\n          </div>\r\n        </div>\r\n      </footer>\r\n    `;\r\n  }\r\n  \n\n//# sourceURL=webpack://Responsive_Home_Page/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHeader: () => (/* binding */ renderHeader)\n/* harmony export */ });\n// header.js\r\nfunction renderHeader() {\r\n    return `\r\n      <header class=\"header\">\r\n        <div class=\"style-wrapper\">\r\n          <div class=\"style-layer red skew box-shadow\">\r\n            <div class=\"style-layer orange anim-layer\">\r\n              <div class=\"style-layer yellow anim-layer\">\r\n                <div class=\"style-layer green anim-layer\">\r\n                  <div class=\"style-layer blue anim-layer\">\r\n                    <div class=\"style-layer purple anim-layer\">\r\n                      <div class=\"style-layer blue-main anim-layer\"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"wrapper\">\r\n          <div class=\"img-wrapper\">\r\n            <img src=\"../dist/assets/profiile_image.jpeg\" alt=\"\">\r\n            <h1>ABHISHEK</h1>\r\n          </div>\r\n          <div class=\"about-me\">\r\n            <h2>About Me</h2>\r\n            <p>Hello! I'm <strong>ABHISHEK PRASAD</strong>, a passionate software engineer currently pursuing a degree in engineering. With a keen interest in web development, I have hands-on experience in creating dynamic and interactive projects using HTML, CSS, JavaScript, and Webpack. I'm always eager to learn and explore new technologies, and currently, I'm expanding my skills in Python programming and Data Structures & Algorithms.</p>\r\n            <div class=\"social-icons\">\r\n              <a href=\"https://github.com/ABHISHEK-PRASAD-BAHELIYA\" class=\"fa fa-github\"></a>\r\n              <a href=\"https://www.linkedin.com/in/abhishek-prasad-baheliya/\" class=\"fa fa-linkedin\"></a>\r\n              <a href=\"https://x.com/74401Abhishek\" class=\"fa fa-twitter\"></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </header>\r\n    `;\r\n  }\r\n  \n\n//# sourceURL=webpack://Responsive_Home_Page/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _mainSection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainSection.js */ \"./src/mainSection.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n// index.js\r\n\r\n\r\n\r\n\r\n\r\n// Get the root element where the content will be injected\r\nconst root = document.getElementById('root');\r\n\r\n// Inject the HTML content\r\nroot.innerHTML = `\r\n  ${(0,_header_js__WEBPACK_IMPORTED_MODULE_0__.renderHeader)()}\r\n  ${(0,_mainSection_js__WEBPACK_IMPORTED_MODULE_1__.renderMainSection)()}\r\n  ${(0,_footer_js__WEBPACK_IMPORTED_MODULE_2__.renderFooter)()}\r\n`;\r\n\n\n//# sourceURL=webpack://Responsive_Home_Page/./src/index.js?");

/***/ }),

/***/ "./src/mainSection.js":
/*!****************************!*\
  !*** ./src/mainSection.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMainSection: () => (/* binding */ renderMainSection)\n/* harmony export */ });\nfunction renderMainSection() {\r\n    return `\r\n      <section class=\"battle-section\">\r\n        <div class=\"wrapper\">\r\n          <h2>My Projects</h2>\r\n          <div class=\"battles\">\r\n            ${renderBattle(\r\n              \"Todo List\",\r\n              \"../dist/assets/todoList.png\",\r\n              \"https://jojowiki.com/SO_Episode_2\",\r\n              \"Goo Goo Dolls\"\r\n            )}\r\n            ${renderBattle(\r\n              \"vs. JOHNGALLI A.\",\r\n              \"imgs/johngallia.jpg\",\r\n              \"https://jojowiki.com/SO_Episode_3\",\r\n              \"Manhattan Transfer\"\r\n            )}\r\n            ${renderBattle(\r\n              \"vs. F.F.\",\r\n              \"imgs/ff.jpg\",\r\n              \"https://jojowiki.com/SO_Episode_8\",\r\n              \"Foo Fighters\"\r\n            )}\r\n            <!-- Add more battles similarly -->\r\n          </div>\r\n        </div>\r\n      </section>\r\n    `;\r\n  }\r\n  \r\n  function renderBattle(title, imgSrc, link, standName) {\r\n    return `\r\n      <div class=\"battle-div box-shadow\">\r\n        <img src=\"${imgSrc}\" alt=\"\">\r\n        <div class=\"battle-info\">\r\n          <div class=\"title\">\r\n            <h3>${title}</h3>\r\n            <a href=\"${link}\" target=\"_blank\" class=\"fa fa-external-link\"></a>\r\n          </div>\r\n          <h4>「${standName}」</h4>\r\n          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>\r\n        </div>\r\n      </div>\r\n    `;\r\n  }\r\n  \n\n//# sourceURL=webpack://Responsive_Home_Page/./src/mainSection.js?");

/***/ }),

/***/ "./src/fonts/Cooper-Black.otf":
/*!************************************!*\
  !*** ./src/fonts/Cooper-Black.otf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aab36ad47ae3ca0f851f.otf\";\n\n//# sourceURL=webpack://Responsive_Home_Page/./src/fonts/Cooper-Black.otf?");

/***/ }),

/***/ "./src/fonts/Cooper-Bold.otf":
/*!***********************************!*\
  !*** ./src/fonts/Cooper-Bold.otf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"223492465c8585615c9a.otf\";\n\n//# sourceURL=webpack://Responsive_Home_Page/./src/fonts/Cooper-Bold.otf?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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