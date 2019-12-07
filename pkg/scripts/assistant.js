!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}}
;return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){
n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){
"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),
Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e
;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),
Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){
return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){
return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({
"./src/scripts/assistant.js":
/*!**********************************!*\
  !*** ./src/scripts/assistant.js ***!
  \**********************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict"
;eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/global */ \"./src/scripts/utils/global.js\");\n\n\n\nconst app = angular.module('chrome-assistant', ['ngRoute']);\n\napp.config([\n  '$routeProvider',\n  function($routeProvider) {\n    $routeProvider\n      .when('/test', {\n        templateUrl: './components/test.html',\n        controller: 'test-contr'\n      })\n      .when('/', {\n        templateUrl: './components/view-assistant-area.html',\n        controller: 'assistant-contr'\n      });\n  }\n]);\n\napp.controller('assistant-contr', [\n  '$scope',\n  function($scope) {\n    console.log('inside assistant controller');\n  }\n]);\n\napp.controller('test-contr', [\n  '$scope',\n  function($scope) {\n    console.warn('inside the test-contr');\n  }\n]);\n\n\n//# sourceURL=webpack:///./src/scripts/assistant.js?")
},"./src/scripts/utils/global.js":
/*!*************************************!*\
  !*** ./src/scripts/utils/global.js ***!
  \*************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict"
;eval("__webpack_require__.r(__webpack_exports__);\nconst GlobalVars = {\n  serviceURL: ''\n};\n\nObject.freeze(GlobalVars);\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalVars);\n\n\n//# sourceURL=webpack:///./src/scripts/utils/global.js?")
},0:
/*!**********************************************************************!*\
  !*** multi ./src/scripts/assistant.js ./src/scripts/utils/global.js ***!
  \**********************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){
eval('__webpack_require__(/*! /home/hsingh/Development/JS/The-Chrome-Assistant/src/scripts/assistant.js */"./src/scripts/assistant.js");\nmodule.exports = __webpack_require__(/*! /home/hsingh/Development/JS/The-Chrome-Assistant/src/scripts/utils/global.js */"./src/scripts/utils/global.js");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/assistant.js_./src/scripts/utils/global.js?')
}});