!function(e){var s={};function n(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}}
;return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=s,n.d=function(e,s,t){
n.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},n.r=function(e){
"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),
Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,s){if(1&s&&(e=n(e)),8&s)return e
;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),
Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var r in e)n.d(t,r,function(s){
return e[s]}.bind(null,r));return t},n.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){
return e};return n.d(s,"a",s),s},n.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},n.p="",n(n.s=0)}({
"./src/scripts/assistant.js":
/*!**********************************!*\
  !*** ./src/scripts/assistant.js ***!
  \**********************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict"
;eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/global */ \"./src/scripts/utils/global.js\");\n\n\n\nconst app = angular.module('chrome-assistant', ['ngRoute']);\n\napp.config([\n  '$routeProvider',\n  function($routeProvider) {\n    $routeProvider\n      .when('/test', {\n        templateUrl: './components/test.html',\n        controller: 'test-contr'\n      })\n      .when('/', {\n        templateUrl: './components/view-assistant-area.html',\n        controller: 'assistant-contr'\n      });\n  }\n]);\n\napp.controller('assistant-contr', [\n  '$scope',\n  function($scope) {\n    console.log('inside assistant controller');\n  }\n]);\n\napp.controller('test-contr', [\n  '$scope',\n  function($scope) {\n    console.warn('inside the test-contr');\n  }\n]);\n\n\n//# sourceURL=webpack:///./src/scripts/assistant.js?")
},"./src/scripts/engine/messages.js":
/*!****************************************!*\
  !*** ./src/scripts/engine/messages.js ***!
  \****************************************/
/*! no static exports found */function(module,exports){
eval("class Messages {\n  constructor() {\n    this.messages = Object.create({});\n  }\n\n  setMessage(key, value) {\n    if (!this.messages[key]) {\n      this.messages[key] = value;\n    } else {\n      throw new Error('[TCA] similar message key already declared');\n    }\n  }\n\n  /**\n   * Used to set multiples messages in a single go.\n   * @param {[Object]} messages - object of messages {key, value}\n   */\n  setMessages(messages) {\n    for (const m of messages) {\n      this.setMessage(m.key, m.value);\n    }\n  }\n\n  getMessage(key) {\n    if (!this.messages[key]) {\n      throw new Error('[TCA] unable to find the message');\n    }\n\n    return this.messages.key;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/scripts/engine/messages.js?")
},"./src/scripts/utils/global.js":
/*!*************************************!*\
  !*** ./src/scripts/utils/global.js ***!
  \*************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict"
;eval("__webpack_require__.r(__webpack_exports__);\nconst GlobalVars = {\n  serviceURL: ''\n};\n\nObject.freeze(GlobalVars);\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalVars);\n\n\n//# sourceURL=webpack:///./src/scripts/utils/global.js?")
},0:
/*!*******************************************************************************************************!*\
  !*** multi ./src/scripts/assistant.js ./src/scripts/engine/messages.js ./src/scripts/utils/global.js ***!
  \*******************************************************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){
eval('__webpack_require__(/*! /home/hsingh/Development/JS/The-Chrome-Assistant/src/scripts/assistant.js */"./src/scripts/assistant.js");\n__webpack_require__(/*! /home/hsingh/Development/JS/The-Chrome-Assistant/src/scripts/engine/messages.js */"./src/scripts/engine/messages.js");\nmodule.exports = __webpack_require__(/*! /home/hsingh/Development/JS/The-Chrome-Assistant/src/scripts/utils/global.js */"./src/scripts/utils/global.js");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/assistant.js_./src/scripts/engine/messages.js_./src/scripts/utils/global.js?')
}});