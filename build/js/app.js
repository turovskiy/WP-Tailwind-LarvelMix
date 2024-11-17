/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@lottiefiles/lottie-player/dist/lottie-player.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@lottiefiles/lottie-player/dist/lottie-player.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LottiePlayer: () => (/* binding */ LottiePlayer),
/* harmony export */   PlayMode: () => (/* binding */ PlayMode),
/* harmony export */   PlayerEvents: () => (/* binding */ PlayerEvents),
/* harmony export */   PlayerState: () => (/* binding */ PlayerState),
/* harmony export */   parseSrc: () => (/* binding */ parseSrc)
/* harmony export */ });
function _asyncIterator(t){var e,r,i,s=2;for("undefined"!=typeof Symbol&&(r=Symbol.asyncIterator,i=Symbol.iterator);s--;){if(r&&null!=(e=t[r]))return e.call(t);if(i&&null!=(e=t[i]))return new AsyncFromSyncIterator(e.call(t));r="@@asyncIterator",i="@@iterator"}throw new TypeError("Object is not async iterable")}function AsyncFromSyncIterator(t){function e(t){if(Object(t)!==t)return Promise.reject(new TypeError(t+" is not an object."));var e=t.done;return Promise.resolve(t.value).then((function(t){return{value:t,done:e}}))}return AsyncFromSyncIterator=function(t){this.s=t,this.n=t.next},AsyncFromSyncIterator.prototype={s:null,n:null,next:function(){return e(this.n.apply(this.s,arguments))},return:function(t){var r=this.s.return;return void 0===r?Promise.resolve({value:t,done:!0}):e(r.apply(this.s,arguments))},throw:function(t){var r=this.s.return;return void 0===r?Promise.reject(t):e(r.apply(this.s,arguments))}},new AsyncFromSyncIterator(t)}var REACT_ELEMENT_TYPE;function _jsx(t,e,r,i){REACT_ELEMENT_TYPE||(REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=t&&t.defaultProps,a=arguments.length-3;if(e||0===a||(e={children:void 0}),1===a)e.children=i;else if(a>1){for(var n=new Array(a),o=0;o<a;o++)n[o]=arguments[o+3];e.children=n}if(e&&s)for(var h in s)void 0===e[h]&&(e[h]=s[h]);else e||(e=s||{});return{$$typeof:REACT_ELEMENT_TYPE,type:t,key:void 0===r?null:""+r,ref:null,props:e,_owner:null}}function ownKeys(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function _objectSpread2(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(r),!0).forEach((function(e){_defineProperty(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _wrapRegExp(){_wrapRegExp=function(t,e){return new r(t,void 0,e)};var t=RegExp.prototype,e=new WeakMap;function r(t,i,s){var a=new RegExp(t,i);return e.set(a,s||e.get(t)),_setPrototypeOf(a,r.prototype)}function i(t,r){var i=e.get(r);return Object.keys(i).reduce((function(e,r){return e[r]=t[i[r]],e}),Object.create(null))}return _inherits(r,RegExp),r.prototype.exec=function(e){var r=t.exec.call(this,e);return r&&(r.groups=i(r,this)),r},r.prototype[Symbol.replace]=function(r,s){if("string"==typeof s){var a=e.get(this);return t[Symbol.replace].call(this,r,s.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+a[e]})))}if("function"==typeof s){var n=this;return t[Symbol.replace].call(this,r,(function(){var t=arguments;return"object"!=typeof t[t.length-1]&&(t=[].slice.call(t)).push(i(t,n)),s.apply(this,t)}))}return t[Symbol.replace].call(this,r,s)},_wrapRegExp.apply(this,arguments)}function _AwaitValue(t){this.wrapped=t}function _AsyncGenerator(t){var e,r;function i(e,r){try{var a=t[e](r),n=a.value,o=n instanceof _AwaitValue;Promise.resolve(o?n.wrapped:n).then((function(t){o?i("return"===e?"return":"next",t):s(a.done?"return":"normal",t)}),(function(t){i("throw",t)}))}catch(t){s("throw",t)}}function s(t,s){switch(t){case"return":e.resolve({value:s,done:!0});break;case"throw":e.reject(s);break;default:e.resolve({value:s,done:!1})}(e=e.next)?i(e.key,e.arg):r=null}this._invoke=function(t,s){return new Promise((function(a,n){var o={key:t,arg:s,resolve:a,reject:n,next:null};r?r=r.next=o:(e=r=o,i(t,s))}))},"function"!=typeof t.return&&(this.return=void 0)}function _wrapAsyncGenerator(t){return function(){return new _AsyncGenerator(t.apply(this,arguments))}}function _awaitAsyncGenerator(t){return new _AwaitValue(t)}function _asyncGeneratorDelegate(t,e){var r={},i=!1;function s(r,s){return i=!0,s=new Promise((function(e){e(t[r](s))})),{done:!1,value:e(s)}}return r["undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator"]=function(){return this},r.next=function(t){return i?(i=!1,t):s("next",t)},"function"==typeof t.throw&&(r.throw=function(t){if(i)throw i=!1,t;return s("throw",t)}),"function"==typeof t.return&&(r.return=function(t){return i?(i=!1,t):s("return",t)}),r}function asyncGeneratorStep(t,e,r,i,s,a,n){try{var o=t[a](n),h=o.value}catch(t){return void r(t)}o.done?e(h):Promise.resolve(h).then(i,s)}function _asyncToGenerator(t){return function(){var e=this,r=arguments;return new Promise((function(i,s){var a=t.apply(e,r);function n(t){asyncGeneratorStep(a,i,s,n,o,"next",t)}function o(t){asyncGeneratorStep(a,i,s,n,o,"throw",t)}n(void 0)}))}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _defineEnumerableProperties(t,e){for(var r in e){(a=e[r]).configurable=a.enumerable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,r,a)}if(Object.getOwnPropertySymbols)for(var i=Object.getOwnPropertySymbols(e),s=0;s<i.length;s++){var a,n=i[s];(a=e[n]).configurable=a.enumerable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,n,a)}return t}function _defaults(t,e){for(var r=Object.getOwnPropertyNames(e),i=0;i<r.length;i++){var s=r[i],a=Object.getOwnPropertyDescriptor(e,s);a&&a.configurable&&void 0===t[s]&&Object.defineProperty(t,s,a)}return t}function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _extends(){return _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},_extends.apply(this,arguments)}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&i.push.apply(i,Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),i.forEach((function(e){_defineProperty(t,e,r[e])}))}return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,_setPrototypeOf(t,e)}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function _construct(t,e,r){return _construct=_isNativeReflectConstruct()?Reflect.construct:function(t,e,r){var i=[null];i.push.apply(i,e);var s=new(Function.bind.apply(t,i));return r&&_setPrototypeOf(s,r.prototype),s},_construct.apply(null,arguments)}function _isNativeFunction(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function _wrapNativeSuper(t){var e="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(r,t)},_wrapNativeSuper(t)}function _instanceof(t,e){return null!=e&&"undefined"!=typeof Symbol&&e[Symbol.hasInstance]?!!e[Symbol.hasInstance](t):t instanceof e}function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _getRequireWildcardCache(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(_getRequireWildcardCache=function(t){return t?r:e})(t)}function _interopRequireWildcard(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var r=_getRequireWildcardCache(e);if(r&&r.has(t))return r.get(t);var i={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var n=s?Object.getOwnPropertyDescriptor(t,a):null;n&&(n.get||n.set)?Object.defineProperty(i,a,n):i[a]=t[a]}return i.default=t,r&&r.set(t,i),i}function _newArrowCheck(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}function _objectDestructuringEmpty(t){if(null==t)throw new TypeError("Cannot destructure undefined")}function _objectWithoutPropertiesLoose(t,e){if(null==t)return{};var r,i,s={},a=Object.keys(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(s[r]=t[r]);return s}function _objectWithoutProperties(t,e){if(null==t)return{};var r,i,s=_objectWithoutPropertiesLoose(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(s[r]=t[r])}return s}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _possibleConstructorReturn(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var r,i=_getPrototypeOf(t);if(e){var s=_getPrototypeOf(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var i=_superPropBase(t,e);if(i){var s=Object.getOwnPropertyDescriptor(i,e);return s.get?s.get.call(arguments.length<3?t:r):s.value}},_get.apply(this,arguments)}function set(t,e,r,i){return set="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(t,e,r,i){var s,a=_superPropBase(t,e);if(a){if((s=Object.getOwnPropertyDescriptor(a,e)).set)return s.set.call(i,r),!0;if(!s.writable)return!1}if(s=Object.getOwnPropertyDescriptor(i,e)){if(!s.writable)return!1;s.value=r,Object.defineProperty(i,e,s)}else _defineProperty(i,e,r);return!0},set(t,e,r,i)}function _set(t,e,r,i,s){if(!set(t,e,r,i||t)&&s)throw new Error("failed to set property");return r}function _taggedTemplateLiteral(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function _taggedTemplateLiteralLoose(t,e){return e||(e=t.slice(0)),t.raw=e,t}function _readOnlyError(t){throw new TypeError('"'+t+'" is read-only')}function _writeOnlyError(t){throw new TypeError('"'+t+'" is write-only')}function _classNameTDZError(t){throw new Error('Class "'+t+'" cannot be referenced in computed property keys.')}function _temporalUndefined(){}function _tdz(t){throw new ReferenceError(t+" is not defined - temporal dead zone")}function _temporalRef(t,e){return t===_temporalUndefined?_tdz(e):t}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _slicedToArrayLoose(t,e){return _arrayWithHoles(t)||_iterableToArrayLimitLoose(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _toArray(t){return _arrayWithHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableRest()}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _maybeArrayLike(t,e,r){if(e&&!Array.isArray(e)&&"number"==typeof e.length){var i=e.length;return _arrayLikeToArray(e,void 0!==r&&r<i?r:i)}return t(e,r)}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _iterableToArrayLimit(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var i,s,a=[],n=!0,o=!1;try{for(r=r.call(t);!(n=(i=r.next()).done)&&(a.push(i.value),!e||a.length!==e);n=!0);}catch(t){o=!0,s=t}finally{try{n||null==r.return||r.return()}finally{if(o)throw s}}return a}}function _iterableToArrayLimitLoose(t,e){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var i=[];for(r=r.call(t),_step;!(_step=r.next()).done&&(i.push(_step.value),!e||i.length!==e););return i}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _createForOfIteratorHelper(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,s=function(){};return{s:s,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,n=!0,o=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return n=t.done,t},e:function(t){o=!0,a=t},f:function(){try{n||null==r.return||r.return()}finally{if(o)throw a}}}}function _createForOfIteratorHelperLoose(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _skipFirstGeneratorNext(t){return function(){var e=t.apply(this,arguments);return e.next(),e}}function _toPrimitive(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"==typeof e?e:String(e)}function _initializerWarningHelper(t,e){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}function _initializerDefineProperty(t,e,r,i){r&&Object.defineProperty(t,e,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(i):void 0})}function _applyDecoratedDescriptor(t,e,r,i,s){var a={};return Object.keys(i).forEach((function(t){a[t]=i[t]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce((function(r,i){return i(t,e,r)||r}),a),s&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(s):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(t,e,a),a=null),a}_AsyncGenerator.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},_AsyncGenerator.prototype.next=function(t){return this._invoke("next",t)},_AsyncGenerator.prototype.throw=function(t){return this._invoke("throw",t)},_AsyncGenerator.prototype.return=function(t){return this._invoke("return",t)};var id=0;function _classPrivateFieldLooseKey(t){return"__private_"+id+++"_"+t}function _classPrivateFieldLooseBase(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}function _classPrivateFieldGet(t,e){return _classApplyDescriptorGet(t,_classExtractFieldDescriptor(t,e,"get"))}function _classPrivateFieldSet(t,e,r){return _classApplyDescriptorSet(t,_classExtractFieldDescriptor(t,e,"set"),r),r}function _classPrivateFieldDestructureSet(t,e){return _classApplyDescriptorDestructureSet(t,_classExtractFieldDescriptor(t,e,"set"))}function _classExtractFieldDescriptor(t,e,r){if(!e.has(t))throw new TypeError("attempted to "+r+" private field on non-instance");return e.get(t)}function _classStaticPrivateFieldSpecGet(t,e,r){return _classCheckPrivateStaticAccess(t,e),_classCheckPrivateStaticFieldDescriptor(r,"get"),_classApplyDescriptorGet(t,r)}function _classStaticPrivateFieldSpecSet(t,e,r,i){return _classCheckPrivateStaticAccess(t,e),_classCheckPrivateStaticFieldDescriptor(r,"set"),_classApplyDescriptorSet(t,r,i),i}function _classStaticPrivateMethodGet(t,e,r){return _classCheckPrivateStaticAccess(t,e),r}function _classStaticPrivateMethodSet(){throw new TypeError("attempted to set read only static private field")}function _classApplyDescriptorGet(t,e){return e.get?e.get.call(t):e.value}function _classApplyDescriptorSet(t,e,r){if(e.set)e.set.call(t,r);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=r}}function _classApplyDescriptorDestructureSet(t,e){if(e.set)return"__destrObj"in e||(e.__destrObj={set value(r){e.set.call(t,r)}}),e.__destrObj;if(!e.writable)throw new TypeError("attempted to set read only private field");return e}function _classStaticPrivateFieldDestructureSet(t,e,r){return _classCheckPrivateStaticAccess(t,e),_classCheckPrivateStaticFieldDescriptor(r,"set"),_classApplyDescriptorDestructureSet(t,r)}function _classCheckPrivateStaticAccess(t,e){if(t!==e)throw new TypeError("Private static access of wrong provenance")}function _classCheckPrivateStaticFieldDescriptor(t,e){if(void 0===t)throw new TypeError("attempted to "+e+" private static field before its declaration")}function _decorate(t,e,r,i){var s=_getDecoratorsApi();if(i)for(var a=0;a<i.length;a++)s=i[a](s);var n=e((function(t){s.initializeInstanceElements(t,o.elements)}),r),o=s.decorateClass(_coalesceClassElements(n.d.map(_createElementDescriptor)),t);return s.initializeClassElements(n.F,o.elements),s.runClassFinishers(n.F,o.finishers)}function _getDecoratorsApi(){_getDecoratorsApi=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(r){e.forEach((function(e){e.kind===r&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var r=t.prototype;["method","field"].forEach((function(i){e.forEach((function(e){var s=e.placement;if(e.kind===i&&("static"===s||"prototype"===s)){var a="static"===s?t:r;this.defineClassElement(a,e)}}),this)}),this)},defineClassElement:function(t,e){var r=e.descriptor;if("field"===e.kind){var i=e.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(t)}}Object.defineProperty(t,e.key,r)},decorateClass:function(t,e){var r=[],i=[],s={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,s)}),this),t.forEach((function(t){if(!_hasDecorators(t))return r.push(t);var e=this.decorateElement(t,s);r.push(e.element),r.push.apply(r,e.extras),i.push.apply(i,e.finishers)}),this),!e)return{elements:r,finishers:i};var a=this.decorateConstructor(r,e);return i.push.apply(i,a.finishers),a.finishers=i,a},addElementPlacement:function(t,e,r){var i=e[t.placement];if(!r&&-1!==i.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");i.push(t.key)},decorateElement:function(t,e){for(var r=[],i=[],s=t.decorators,a=s.length-1;a>=0;a--){var n=e[t.placement];n.splice(n.indexOf(t.key),1);var o=this.fromElementDescriptor(t),h=this.toElementFinisherExtras((0,s[a])(o)||o);t=h.element,this.addElementPlacement(t,e),h.finisher&&i.push(h.finisher);var l=h.extras;if(l){for(var p=0;p<l.length;p++)this.addElementPlacement(l[p],e);r.push.apply(r,l)}}return{element:t,finishers:i,extras:r}},decorateConstructor:function(t,e){for(var r=[],i=e.length-1;i>=0;i--){var s=this.fromClassDescriptor(t),a=this.toClassDescriptor((0,e[i])(s)||s);if(void 0!==a.finisher&&r.push(a.finisher),void 0!==a.elements){t=a.elements;for(var n=0;n<t.length-1;n++)for(var o=n+1;o<t.length;o++)if(t[n].key===t[o].key&&t[n].placement===t[o].placement)throw new TypeError("Duplicated element ("+t[n].key+")")}}return{elements:t,finishers:r}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){if(void 0!==t)return _toArray(t).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var r=_toPropertyKey(t.key),i=String(t.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var s=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var a={kind:e,key:r,placement:i,descriptor:Object.assign({},s)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(s,"get","The property descriptor of a field descriptor"),this.disallowProperty(s,"set","The property descriptor of a field descriptor"),this.disallowProperty(s,"value","The property descriptor of a field descriptor"),a.initializer=t.initializer),a},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:_optionalCallableProperty(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var r=_optionalCallableProperty(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:r}},runClassFinishers:function(t,e){for(var r=0;r<e.length;r++){var i=(0,e[r])(t);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");t=i}}return t},disallowProperty:function(t,e,r){if(void 0!==t[e])throw new TypeError(r+" can't have a ."+e+" property.")}};return t}function _createElementDescriptor(t){var e,r=_toPropertyKey(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===t.kind?"field":"method",key:r,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(i.decorators=t.decorators),"field"===t.kind&&(i.initializer=t.value),i}function _coalesceGetterSetter(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function _coalesceClassElements(t){for(var e=[],r=function(t){return"method"===t.kind&&t.key===a.key&&t.placement===a.placement},i=0;i<t.length;i++){var s,a=t[i];if("method"===a.kind&&(s=e.find(r)))if(_isDataDescriptor(a.descriptor)||_isDataDescriptor(s.descriptor)){if(_hasDecorators(a)||_hasDecorators(s))throw new ReferenceError("Duplicated methods ("+a.key+") can't be decorated.");s.descriptor=a.descriptor}else{if(_hasDecorators(a)){if(_hasDecorators(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+a.key+").");s.decorators=a.decorators}_coalesceGetterSetter(a,s)}else e.push(a)}return e}function _hasDecorators(t){return t.decorators&&t.decorators.length}function _isDataDescriptor(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function _optionalCallableProperty(t,e){var r=t[e];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+e+"' to be a function");return r}function _classPrivateMethodGet(t,e,r){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return r}function _checkPrivateRedeclaration(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateFieldInitSpec(t,e,r){_checkPrivateRedeclaration(t,e),e.set(t,r)}function _classPrivateMethodInitSpec(t,e){_checkPrivateRedeclaration(t,e),e.add(t)}function _classPrivateMethodSet(){throw new TypeError("attempted to reassign private method")}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var _extendStatics=function(t,e){return _extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},_extendStatics(t,e)};function __extends(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}_extendStatics(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var _assign=function(){return _assign=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var s in e=arguments[r])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},_assign.apply(this,arguments)};function __rest(t,e){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(r[i[s]]=t[i[s]])}return r}function __decorate(t,e,r,i){var s,a=arguments.length,n=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,i);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(n=(a<3?s(n):a>3?s(e,r,n):s(e,r))||n);return a>3&&n&&Object.defineProperty(e,r,n),n}function __param(t,e){return function(r,i){e(r,i,t)}}function __metadata(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function __awaiter(t,e,r,i){return new(r||(r=Promise))((function(s,a){function n(t){try{h(i.next(t))}catch(t){a(t)}}function o(t){try{h(i.throw(t))}catch(t){a(t)}}function h(t){var e;t.done?s(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(n,o)}h((i=i.apply(t,e||[])).next())}))}function __generator(t,e){var r,i,s,a,n={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=2&a[0]?i.return:a[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,a[1])).done)return s;switch(i=0,s&&(a=[2&a[0],s.value]),a[0]){case 0:case 1:s=a;break;case 4:return n.label++,{value:a[1],done:!1};case 5:n.label++,i=a[1],a=[0];continue;case 7:a=n.ops.pop(),n.trys.pop();continue;default:if(!(s=n.trys,(s=s.length>0&&s[s.length-1])||6!==a[0]&&2!==a[0])){n=0;continue}if(3===a[0]&&(!s||a[1]>s[0]&&a[1]<s[3])){n.label=a[1];break}if(6===a[0]&&n.label<s[1]){n.label=s[1],s=a;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(a);break}s[2]&&n.ops.pop(),n.trys.pop();continue}a=e.call(t,n)}catch(t){a=[6,t],i=0}finally{r=s=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}}var __createBinding=Object.create?function(t,e,r,i){void 0===i&&(i=r),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,i){void 0===i&&(i=r),t[i]=e[r]};function __exportStar(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||__createBinding(e,t,r)}function __values(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],i=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var i,s,a=r.call(t),n=[];try{for(;(void 0===e||e-- >0)&&!(i=a.next()).done;)n.push(i.value)}catch(t){s={error:t}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(s)throw s.error}}return n}function __spread(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(__read(arguments[e]));return t}function __spreadArrays(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var i=Array(t),s=0;for(e=0;e<r;e++)for(var a=arguments[e],n=0,o=a.length;n<o;n++,s++)i[s]=a[n];return i}function __spreadArray(t,e,r){if(r||2===arguments.length)for(var i,s=0,a=e.length;s<a;s++)!i&&s in e||(i||(i=Array.prototype.slice.call(e,0,s)),i[s]=e[s]);return t.concat(i||Array.prototype.slice.call(e))}function __await(t){return this instanceof __await?(this.v=t,this):new __await(t)}function __asyncGenerator(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,s=r.apply(t,e||[]),a=[];return i={},n("next"),n("throw"),n("return"),i[Symbol.asyncIterator]=function(){return this},i;function n(t){s[t]&&(i[t]=function(e){return new Promise((function(r,i){a.push([t,e,r,i])>1||o(t,e)}))})}function o(t,e){try{!function(t){t.value instanceof __await?Promise.resolve(t.value.v).then(h,l):p(a[0][2],t)}(s[t](e))}catch(t){p(a[0][3],t)}}function h(t){o("next",t)}function l(t){o("throw",t)}function p(t,e){t(e),a.shift(),a.length&&o(a[0][0],a[0][1])}}function __asyncDelegator(t){var e,r;return e={},i("next"),i("throw",(function(t){throw t})),i("return"),e[Symbol.iterator]=function(){return this},e;function i(i,s){e[i]=t[i]?function(e){return(r=!r)?{value:__await(t[i](e)),done:"return"===i}:s?s(e):e}:s}}function __asyncValues(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t="function"==typeof __values?__values(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(r){e[r]=t[r]&&function(e){return new Promise((function(i,s){(function(t,e,r,i){Promise.resolve(i).then((function(e){t({value:e,done:r})}),e)})(i,s,(e=t[r](e)).done,e.value)}))}}}function __makeTemplateObject(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var __setModuleDefault=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e};function __importStar(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&__createBinding(e,t,r);return __setModuleDefault(e,t),e}function __importDefault(t){return t&&t.__esModule?t:{default:t}}function __classPrivateFieldGet(t,e,r,i){if("a"===r&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(t):i?i.value:e.get(t)}function __classPrivateFieldSet(t,e,r,i,s){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(t,r):s?s.value=r:e.set(t,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var t$3=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$8=Symbol(),n$5=new Map;class s$3{constructor(t,e){if(this._$cssResult$=!0,e!==e$8)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){var t=n$5.get(this.cssText);return t$3&&void 0===t&&(n$5.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}var o$5=t=>new s$3("string"==typeof t?t:t+"",e$8),r$3=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];var s=1===t.length?t[0]:r.reduce(((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1]),t[0]);return new s$3(s,e$8)},i$3=(t,e)=>{t$3?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{var r=document.createElement("style"),i=window.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=e.cssText,t.appendChild(r)}))},S$1=t$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{var e="";for(var r of t.cssRules)e+=r.cssText;return o$5(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,s$2,e$7=window.trustedTypes,r$2=e$7?e$7.emptyScript:"",h$2=window.reactiveElementPolyfillSupport,o$4={toAttribute(t,e){switch(e){case Boolean:t=t?r$2:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){var r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},n$4=(t,e)=>e!==t&&(e==e||t==t),l$3={attribute:!0,type:String,converter:o$4,reflect:!1,hasChanged:n$4},t$2;class a$1 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();var t=[];return this.elementProperties.forEach(((e,r)=>{var i=this._$Eh(r,e);void 0!==i&&(this._$Eu.set(i,r),t.push(i))})),t}static createProperty(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l$3;if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){var r="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(i){var s=this[t];this[e]=i,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$3}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;var t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){var e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(var i of r)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){var e=[];if(Array.isArray(t)){var r=new Set(t.flat(1/0).reverse());for(var i of r)e.unshift(S$1(i))}else void 0!==t&&e.push(S$1(t));return e}static _$Eh(t,e){var r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t,e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$3(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e){var r,i,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l$3,a=this.constructor._$Eh(t,s);if(void 0!==a&&!0===s.reflect){var n=(null!==(i=null===(r=s.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==i?i:o$4.toAttribute)(e,s.type);this._$Ei=t,null==n?this.removeAttribute(a):this.setAttribute(a,n),this._$Ei=null}}_$AK(t,e){var r,i,s,a=this.constructor,n=a._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){var o=a.getPropertyOptions(n),h=o.converter,l=null!==(s=null!==(i=null===(r=h)||void 0===r?void 0:r.fromAttribute)&&void 0!==i?i:"function"==typeof h?h:null)&&void 0!==s?s:o$4.fromAttribute;this._$Ei=n,this[n]=l(e,o.type),this._$Ei=null}}requestUpdate(t,e,r){var i=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||n$4)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}_$EC(){var t=this;return _asyncToGenerator((function*(){t.isUpdatePending=!0;try{yield t._$Ep}catch(e){Promise.reject(e)}var e=t.scheduleUpdate();return null!=e&&(yield e),!t.isUpdatePending}))()}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(this.isUpdatePending){this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);var e=!1,r=this._$AL;try{(e=this.shouldUpdate(r))?(this.willUpdate(r),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(r)}}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}a$1.finalized=!0,a$1.elementProperties=new Map,a$1.elementStyles=[],a$1.shadowRootOptions={mode:"open"},null==h$2||h$2({ReactiveElement:a$1}),(null!==(s$2=globalThis.reactiveElementVersions)&&void 0!==s$2?s$2:globalThis.reactiveElementVersions=[]).push("1.2.1");var i$2=globalThis.trustedTypes,s$1=i$2?i$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$6="lit$".concat((Math.random()+"").slice(9),"$"),o$3="?"+e$6,n$3="<".concat(o$3,">"),l$2=document,h$1=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return l$2.createComment(t)},r$1=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var e;return d(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea)$/i,p=t=>function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];return{_$litType$:t,strings:e,values:i}},$=p(1),y=p(2),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,e,r)=>{var i,s,a=null!==(i=null==r?void 0:r.renderBefore)&&void 0!==i?i:e,n=a._$litPart$;if(void 0===n){var o=null!==(s=null==r?void 0:r.renderBefore)&&void 0!==s?s:null;a._$litPart$=n=new N(e.insertBefore(h$1(),o),o,void 0,null!=r?r:{})}return n._$AI(t),n},A=l$2.createTreeWalker(l$2,129,null,!1),C=(t,e)=>{for(var r,i=t.length-1,s=[],n=2===e?"<svg>":"",o=c,h=0;h<i;h++){for(var l=t[h],p=void 0,d=void 0,u=-1,y=0;y<l.length&&(o.lastIndex=y,null!==(d=o.exec(l)));)y=o.lastIndex,o===c?"!--"===d[1]?o=v:void 0!==d[1]?o=a:void 0!==d[2]?(g.test(d[2])&&(r=RegExp("</"+d[2],"g")),o=f):void 0!==d[3]&&(o=f):o===f?">"===d[0]?(o=null!=r?r:c,u=-1):void 0===d[1]?u=-2:(u=o.lastIndex-d[2].length,p=d[1],o=void 0===d[3]?f:'"'===d[3]?m:_):o===m||o===_?o=f:o===v||o===a?o=c:(o=f,r=void 0);var b=o===f&&t[h+1].startsWith("/>")?" ":"";n+=o===c?l+n$3:u>=0?(s.push(p),l.slice(0,u)+"$lit$"+l.slice(u)+e$6+b):l+e$6+(-2===u?(s.push(void 0),h):b)}var P=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==s$1?s$1.createHTML(P):P,s]};class E{constructor(t,e){var r,{strings:i,_$litType$:s}=t;this.parts=[];var a=0,n=0,o=i.length-1,h=this.parts,[l,p]=C(i,s);if(this.el=E.createElement(l,e),A.currentNode=this.el.content,2===s){var c=this.el.content,f=c.firstChild;f.remove(),c.append(...f.childNodes)}for(;null!==(r=A.nextNode())&&h.length<o;){if(1===r.nodeType){if(r.hasAttributes()){var d=[];for(var u of r.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(e$6)){var m=p[n++];if(d.push(u),void 0!==m){var y=r.getAttribute(m.toLowerCase()+"$lit$").split(e$6),v=/([.?@])?(.*)/.exec(m);h.push({type:1,index:a,name:v[2],strings:y,ctor:"."===v[1]?M:"?"===v[1]?H:"@"===v[1]?I:S})}else h.push({type:6,index:a})}for(var b of d)r.removeAttribute(b)}if(g.test(r.tagName)){var _=r.textContent.split(e$6),P=_.length-1;if(P>0){r.textContent=i$2?i$2.emptyScript:"";for(var x=0;x<P;x++)r.append(_[x],h$1()),A.nextNode(),h.push({type:2,index:++a});r.append(_[P],h$1())}}}else if(8===r.nodeType)if(r.data===o$3)h.push({type:2,index:a});else for(var w=-1;-1!==(w=r.data.indexOf(e$6,w+1));)h.push({type:7,index:a}),w+=e$6.length-1;a++}}static createElement(t,e){var r=l$2.createElement("template");return r.innerHTML=t,r}}function P(t,e){var r,i,s,a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,o=arguments.length>3?arguments[3]:void 0;if(e===b)return e;var h=void 0!==o?null===(r=n._$Cl)||void 0===r?void 0:r[o]:n._$Cu,l=r$1(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==l&&(null===(i=null==h?void 0:h._$AO)||void 0===i||i.call(h,!1),void 0===l?h=void 0:(h=new l(t))._$AT(t,n,o),void 0!==o?(null!==(s=(a=n)._$Cl)&&void 0!==s?s:a._$Cl=[])[o]=h:n._$Cu=h),void 0!==h&&(e=P(t,h._$AS(t,e.values),h,o)),e}class V{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e,{el:{content:r},parts:i}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:l$2).importNode(r,!0);A.currentNode=s;for(var a=A.nextNode(),n=0,o=0,h=i[0];void 0!==h;){if(n===h.index){var l=void 0;2===h.type?l=new N(a,a.nextSibling,this,t):1===h.type?l=new h.ctor(a,h.name,h.strings,this,t):6===h.type&&(l=new L(a,this,t)),this.v.push(l),h=i[++o]}n!==(null==h?void 0:h.index)&&(a=A.nextNode(),n++)}return s}m(t){var e=0;for(var r of this.v)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class N{constructor(t,e,r,i){var s;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cg=null===(s=null==i?void 0:i.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){var t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=P(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),r$1(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):u(t)?this.A(t):this.$(t)}M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._$AB;return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==w&&r$1(this._$AH)?this._$AA.nextSibling.data=t:this.S(l$2.createTextNode(t)),this._$AH=t}T(t){var e,{values:r,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=E.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(r);else{var a=new V(s,this),n=a.p(this.options);a.m(r),this.S(n),this._$AH=a}}_$AC(t){var e=T.get(t.strings);return void 0===e&&T.set(t.strings,e=new E(t)),e}A(t){d(this._$AH)||(this._$AH=[],this._$AR());var e,r=this._$AH,i=0;for(var s of t)i===r.length?r.push(e=new N(this.M(h$1()),this.M(h$1()),this,this.options)):e=r[i],e._$AI(s),i++;i<r.length&&(this._$AR(e&&e._$AB.nextSibling,i),r.length=i)}_$AR(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,r=arguments.length>1?arguments[1]:void 0;for(null===(t=this._$AP)||void 0===t||t.call(this,!1,!0,r);e&&e!==this._$AB;){var i=e.nextSibling;e.remove(),e=i}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class S{constructor(t,e,r,i,s){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,s=this.strings,a=!1;if(void 0===s)t=P(this,t,e,0),(a=!r$1(t)||t!==this._$AH&&t!==b)&&(this._$AH=t);else{var n,o,h=t;for(t=s[0],n=0;n<s.length-1;n++)(o=P(this,h[r+n],e,n))===b&&(o=this._$AH[n]),a||(a=!r$1(o)||o!==this._$AH[n]),o===w?t=w:t!==w&&(t+=(null!=o?o:"")+s[n+1]),this._$AH[n]=o}a&&!i&&this.k(t)}k(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class M extends S{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===w?void 0:t}}var k=i$2?i$2.emptyScript:"";class H extends S{constructor(){super(...arguments),this.type=4}k(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name)}}class I extends S{constructor(t,e,r,i,s){super(t,e,r,i,s),this.type=5}_$AI(t){var e;if((t=null!==(e=P(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==e?e:w)!==b){var r=this._$AH,i=t===w&&r!==w||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==w&&(r===w||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}var R={P:"$lit$",V:e$6,L:o$3,I:1,N:C,R:V,D:u,j:P,H:N,O:S,F:H,B:I,W:M,Z:L},z=window.litHtmlPolyfillSupport,l$1,o$2;null==z||z(E,N),(null!==(t$2=globalThis.litHtmlVersions)&&void 0!==t$2?t$2:globalThis.litHtmlVersions=[]).push("2.1.2");var r=a$1;class s extends a$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e,r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){var e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return b}}s.finalized=!0,s._$litElement$=!0,null===(l$1=globalThis.litElementHydrateSupport)||void 0===l$1||l$1.call(globalThis,{LitElement:s});var n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});var h={_$AK:(t,e,r)=>{t._$AK(e,r)},_$AL:t=>t._$AL};(null!==(o$2=globalThis.litElementVersions)&&void 0!==o$2?o$2:globalThis.litElementVersions=[]).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var n$1=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{var{kind:r,elements:i}=e;return{kind:r,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,i$1=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?_objectSpread2(_objectSpread2({},e),{},{finisher(r){r.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function e$5(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):i$1(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$1(t){return e$5(_objectSpread2(_objectSpread2({},t),{},{state:!0}))}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var e$4=(t,e,r)=>{Object.defineProperty(e,r,t)},t=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t}),o$1=t=>{var{finisher:e,descriptor:r}=t;return(t,i)=>{var s;if(void 0===i){var a=null!==(s=t.originalKey)&&void 0!==s?s:t.key,n=null!=r?{kind:"method",placement:"prototype",key:a,descriptor:r(t.key)}:_objectSpread2(_objectSpread2({},t),{},{key:a});return null!=e&&(n.finisher=function(t){e(t,a)}),n}var o=t.constructor;void 0!==r&&Object.defineProperty(t,i,r(i)),null==e||e(o,i)}},n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$3(t){return o$1({finisher:(e,r)=>{Object.assign(e.prototype[r],t)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i(t,e){return o$1({descriptor:r=>{var i={get(){var e,r;return null!==(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(e){var s="symbol"==typeof r?Symbol():"__"+r;i.get=function(){var e,r;return void 0===this[s]&&(this[s]=null!==(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==r?r:null),this[s]}}return i}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$2(t){return o$1({descriptor:e=>({get(){var e,r;return null!==(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelectorAll(t))&&void 0!==r?r:[]},enumerable:!0,configurable:!0})})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$1(t){return o$1({descriptor:e=>({get(){var e=this;return _asyncToGenerator((function*(){var r;return yield e.updateComplete,null===(r=e.renderRoot)||void 0===r?void 0:r.querySelector(t)}))()},enumerable:!0,configurable:!0})})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var e=null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function l(t){var{slot:r,selector:i}=null!=t?t:{};return o$1({descriptor:s=>({get(){var s,a="slot"+(r?"[name=".concat(r,"]"):":not([name])"),n=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(a),o=null!=n?e(n,t):[];return i?o.filter((t=>t.matches(i))):o},enumerable:!0,configurable:!0})})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o(t,e,r){var i,s=t;return"object"==typeof t?(s=t.slot,i=t):i={flatten:e},r?l({slot:s,flatten:e,selector:r}):o$1({descriptor:t=>({get(){var t,e,r="slot"+(s?"[name=".concat(s,"]"):":not([name])"),a=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(r);return null!==(e=null==a?void 0:a.assignedNodes(i))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})}var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function getDefaultExportFromNamespaceIfPresent(t){return t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function getDefaultExportFromNamespaceIfNotNamed(t){return t&&Object.prototype.hasOwnProperty.call(t,"default")&&1===Object.keys(t).length?t.default:t}function getAugmentedNamespace(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})})),e}function commonjsRequire(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var lottie$1={exports:{}};(function(module,exports){var factory;"undefined"!=typeof navigator&&(factory=function(){var svgNS="http://www.w3.org/2000/svg",locationHref="",_useWebWorker=!1,initialDefaultFrame=-999999,setWebWorker=function(t){_useWebWorker=!!t},getWebWorker=function(){return _useWebWorker},setLocationHref=function(t){locationHref=t},getLocationHref=function(){return locationHref};function createTag(t){return document.createElement(t)}function extendPrototype(t,e){var r,i,s=t.length;for(r=0;r<s;r+=1)for(var a in i=t[r].prototype)Object.prototype.hasOwnProperty.call(i,a)&&(e.prototype[a]=i[a])}function getDescriptor(t,e){return Object.getOwnPropertyDescriptor(t,e)}function createProxyFunction(t){function e(){}return e.prototype=t,e}var audioControllerFactory=function(){function t(t){this.audios=[],this.audioFactory=t,this._volume=1,this._isMuted=!1}return t.prototype={addAudio:function(t){this.audios.push(t)},pause:function(){var t,e=this.audios.length;for(t=0;t<e;t+=1)this.audios[t].pause()},resume:function(){var t,e=this.audios.length;for(t=0;t<e;t+=1)this.audios[t].resume()},setRate:function(t){var e,r=this.audios.length;for(e=0;e<r;e+=1)this.audios[e].setRate(t)},createAudio:function(t){return this.audioFactory?this.audioFactory(t):window.Howl?new window.Howl({src:[t]}):{isPlaying:!1,play:function(){this.isPlaying=!0},seek:function(){this.isPlaying=!1},playing:function(){},rate:function(){},setVolume:function(){}}},setAudioFactory:function(t){this.audioFactory=t},setVolume:function(t){this._volume=t,this._updateVolume()},mute:function(){this._isMuted=!0,this._updateVolume()},unmute:function(){this._isMuted=!1,this._updateVolume()},getVolume:function(){return this._volume},_updateVolume:function(){var t,e=this.audios.length;for(t=0;t<e;t+=1)this.audios[t].volume(this._volume*(this._isMuted?0:1))}},function(){return new t}}(),createTypedArray=function(){function t(t,e){var r,i=0,s=[];switch(t){case"int16":case"uint8c":r=1;break;default:r=1.1}for(i=0;i<e;i+=1)s.push(r);return s}return"function"==typeof Uint8ClampedArray&&"function"==typeof Float32Array?function(e,r){return"float32"===e?new Float32Array(r):"int16"===e?new Int16Array(r):"uint8c"===e?new Uint8ClampedArray(r):t(e,r)}:t}();function createSizedArray(t){return Array.apply(null,{length:t})}function _typeof$6(t){return _typeof$6="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof$6(t)}var subframeEnabled=!0,expressionsPlugin=null,expressionsInterfaces=null,idPrefix$1="",isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),_shouldRoundValues=!1,bmPow=Math.pow,bmSqrt=Math.sqrt,bmFloor=Math.floor,bmMax=Math.max,bmMin=Math.min,BMMath={};function ProjectInterface$1(){return{}}!function(){var t,e=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],r=e.length;for(t=0;t<r;t+=1)BMMath[e[t]]=Math[e[t]]}(),BMMath.random=Math.random,BMMath.abs=function(t){if("object"===_typeof$6(t)&&t.length){var e,r=createSizedArray(t.length),i=t.length;for(e=0;e<i;e+=1)r[e]=Math.abs(t[e]);return r}return Math.abs(t)};var defaultCurveSegments=150,degToRads=Math.PI/180,roundCorner=.5519;function roundValues(t){_shouldRoundValues=!!t}function bmRnd(t){return _shouldRoundValues?Math.round(t):t}function styleDiv(t){t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.display="block",t.style.transformOrigin="0 0",t.style.webkitTransformOrigin="0 0",t.style.backfaceVisibility="visible",t.style.webkitBackfaceVisibility="visible",t.style.transformStyle="preserve-3d",t.style.webkitTransformStyle="preserve-3d",t.style.mozTransformStyle="preserve-3d"}function BMEnterFrameEvent(t,e,r,i){this.type=t,this.currentTime=e,this.totalTime=r,this.direction=i<0?-1:1}function BMCompleteEvent(t,e){this.type=t,this.direction=e<0?-1:1}function BMCompleteLoopEvent(t,e,r,i){this.type=t,this.currentLoop=r,this.totalLoops=e,this.direction=i<0?-1:1}function BMSegmentStartEvent(t,e,r){this.type=t,this.firstFrame=e,this.totalFrames=r}function BMDestroyEvent(t,e){this.type=t,this.target=e}function BMRenderFrameErrorEvent(t,e){this.type="renderFrameError",this.nativeError=t,this.currentTime=e}function BMConfigErrorEvent(t){this.type="configError",this.nativeError=t}function BMAnimationConfigErrorEvent(t,e){this.type=t,this.nativeError=e}var createElementID=(_count=0,function(){return idPrefix$1+"__lottie_element_"+(_count+=1)}),_count;function HSVtoRGB(t,e,r){var i,s,a,n,o,h,l,p;switch(h=r*(1-e),l=r*(1-(o=6*t-(n=Math.floor(6*t)))*e),p=r*(1-(1-o)*e),n%6){case 0:i=r,s=p,a=h;break;case 1:i=l,s=r,a=h;break;case 2:i=h,s=r,a=p;break;case 3:i=h,s=l,a=r;break;case 4:i=p,s=h,a=r;break;case 5:i=r,s=h,a=l}return[i,s,a]}function RGBtoHSV(t,e,r){var i,s=Math.max(t,e,r),a=Math.min(t,e,r),n=s-a,o=0===s?0:n/s,h=s/255;switch(s){case a:i=0;break;case t:i=e-r+n*(e<r?6:0),i/=6*n;break;case e:i=r-t+2*n,i/=6*n;break;case r:i=t-e+4*n,i/=6*n}return[i,o,h]}function addSaturationToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[1]+=e,r[1]>1?r[1]=1:r[1]<=0&&(r[1]=0),HSVtoRGB(r[0],r[1],r[2])}function addBrightnessToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[2]+=e,r[2]>1?r[2]=1:r[2]<0&&(r[2]=0),HSVtoRGB(r[0],r[1],r[2])}function addHueToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[0]+=e/360,r[0]>1?r[0]-=1:r[0]<0&&(r[0]+=1),HSVtoRGB(r[0],r[1],r[2])}var rgbToHex=function(){var t,e,r=[];for(t=0;t<256;t+=1)e=t.toString(16),r[t]=1===e.length?"0"+e:e;return function(t,e,i){return t<0&&(t=0),e<0&&(e=0),i<0&&(i=0),"#"+r[t]+r[e]+r[i]}}(),setSubframeEnabled=function(t){subframeEnabled=!!t},getSubframeEnabled=function(){return subframeEnabled},setExpressionsPlugin=function(t){expressionsPlugin=t},getExpressionsPlugin=function(){return expressionsPlugin},setExpressionInterfaces=function(t){expressionsInterfaces=t},getExpressionInterfaces=function(){return expressionsInterfaces},setDefaultCurveSegments=function(t){defaultCurveSegments=t},getDefaultCurveSegments=function(){return defaultCurveSegments},setIdPrefix=function(t){idPrefix$1=t},getIdPrefix=function(){return idPrefix$1};function createNS(t){return document.createElementNS(svgNS,t)}function _typeof$5(t){return _typeof$5="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof$5(t)}var dataManager=function(){var t,e,r=1,i=[],s={onmessage:function(){},postMessage:function(e){t({data:e})}},_workerSelf={postMessage:function(t){s.onmessage({data:t})}};function a(){e||(e=function(e){if(window.Worker&&window.Blob&&getWebWorker()){var r=new Blob(["var _workerSelf = self; self.onmessage = ",e.toString()],{type:"text/javascript"}),i=URL.createObjectURL(r);return new Worker(i)}return t=e,s}((function(t){if(_workerSelf.dataManager||(_workerSelf.dataManager=function(){function t(s,a){var n,o,h,l,p,f,d=s.length;for(o=0;o<d;o+=1)if("ks"in(n=s[o])&&!n.completed){if(n.completed=!0,n.hasMask){var u=n.masksProperties;for(l=u.length,h=0;h<l;h+=1)if(u[h].pt.k.i)i(u[h].pt.k);else for(f=u[h].pt.k.length,p=0;p<f;p+=1)u[h].pt.k[p].s&&i(u[h].pt.k[p].s[0]),u[h].pt.k[p].e&&i(u[h].pt.k[p].e[0])}0===n.ty?(n.layers=e(n.refId,a),t(n.layers,a)):4===n.ty?r(n.shapes):5===n.ty&&c(n)}}function e(t,e){var r=function(t,e){for(var r=0,i=e.length;r<i;){if(e[r].id===t)return e[r];r+=1}return null}(t,e);return r?r.layers.__used?JSON.parse(JSON.stringify(r.layers)):(r.layers.__used=!0,r.layers):null}function r(t){var e,s,a;for(e=t.length-1;e>=0;e-=1)if("sh"===t[e].ty)if(t[e].ks.k.i)i(t[e].ks.k);else for(a=t[e].ks.k.length,s=0;s<a;s+=1)t[e].ks.k[s].s&&i(t[e].ks.k[s].s[0]),t[e].ks.k[s].e&&i(t[e].ks.k[s].e[0]);else"gr"===t[e].ty&&r(t[e].it)}function i(t){var e,r=t.i.length;for(e=0;e<r;e+=1)t.i[e][0]+=t.v[e][0],t.i[e][1]+=t.v[e][1],t.o[e][0]+=t.v[e][0],t.o[e][1]+=t.v[e][1]}function s(t,e){var r=e?e.split("."):[100,100,100];return t[0]>r[0]||!(r[0]>t[0])&&(t[1]>r[1]||!(r[1]>t[1])&&(t[2]>r[2]||!(r[2]>t[2])&&null))}var a,n=function(){var t=[4,4,14];function e(t){var e,r,i,s=t.length;for(e=0;e<s;e+=1)5===t[e].ty&&(i=void 0,i=(r=t[e]).t.d,r.t.d={k:[{s:i,t:0}]})}return function(r){if(s(t,r.v)&&(e(r.layers),r.assets)){var i,a=r.assets.length;for(i=0;i<a;i+=1)r.assets[i].layers&&e(r.assets[i].layers)}}}(),o=(a=[4,7,99],function(t){if(t.chars&&!s(a,t.v)){var e,i=t.chars.length;for(e=0;e<i;e+=1){var n=t.chars[e];n.data&&n.data.shapes&&(r(n.data.shapes),n.data.ip=0,n.data.op=99999,n.data.st=0,n.data.sr=1,n.data.ks={p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0}},t.chars[e].t||(n.data.shapes.push({ty:"no"}),n.data.shapes[0].it.push({p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0},sk:{k:0,a:0},sa:{k:0,a:0},ty:"tr"})))}}}),h=function(){var t=[5,7,15];function e(t){var e,r,i=t.length;for(e=0;e<i;e+=1)5===t[e].ty&&(r=void 0,"number"==typeof(r=t[e].t.p).a&&(r.a={a:0,k:r.a}),"number"==typeof r.p&&(r.p={a:0,k:r.p}),"number"==typeof r.r&&(r.r={a:0,k:r.r}))}return function(r){if(s(t,r.v)&&(e(r.layers),r.assets)){var i,a=r.assets.length;for(i=0;i<a;i+=1)r.assets[i].layers&&e(r.assets[i].layers)}}}(),l=function(){var t=[4,1,9];function e(t){var r,i,s,a=t.length;for(r=0;r<a;r+=1)if("gr"===t[r].ty)e(t[r].it);else if("fl"===t[r].ty||"st"===t[r].ty)if(t[r].c.k&&t[r].c.k[0].i)for(s=t[r].c.k.length,i=0;i<s;i+=1)t[r].c.k[i].s&&(t[r].c.k[i].s[0]/=255,t[r].c.k[i].s[1]/=255,t[r].c.k[i].s[2]/=255,t[r].c.k[i].s[3]/=255),t[r].c.k[i].e&&(t[r].c.k[i].e[0]/=255,t[r].c.k[i].e[1]/=255,t[r].c.k[i].e[2]/=255,t[r].c.k[i].e[3]/=255);else t[r].c.k[0]/=255,t[r].c.k[1]/=255,t[r].c.k[2]/=255,t[r].c.k[3]/=255}function r(t){var r,i=t.length;for(r=0;r<i;r+=1)4===t[r].ty&&e(t[r].shapes)}return function(e){if(s(t,e.v)&&(r(e.layers),e.assets)){var i,a=e.assets.length;for(i=0;i<a;i+=1)e.assets[i].layers&&r(e.assets[i].layers)}}}(),p=function(){var t=[4,4,18];function e(t){var r,i,s;for(r=t.length-1;r>=0;r-=1)if("sh"===t[r].ty)if(t[r].ks.k.i)t[r].ks.k.c=t[r].closed;else for(s=t[r].ks.k.length,i=0;i<s;i+=1)t[r].ks.k[i].s&&(t[r].ks.k[i].s[0].c=t[r].closed),t[r].ks.k[i].e&&(t[r].ks.k[i].e[0].c=t[r].closed);else"gr"===t[r].ty&&e(t[r].it)}function r(t){var r,i,s,a,n,o,h=t.length;for(i=0;i<h;i+=1){if((r=t[i]).hasMask){var l=r.masksProperties;for(a=l.length,s=0;s<a;s+=1)if(l[s].pt.k.i)l[s].pt.k.c=l[s].cl;else for(o=l[s].pt.k.length,n=0;n<o;n+=1)l[s].pt.k[n].s&&(l[s].pt.k[n].s[0].c=l[s].cl),l[s].pt.k[n].e&&(l[s].pt.k[n].e[0].c=l[s].cl)}4===r.ty&&e(r.shapes)}}return function(e){if(s(t,e.v)&&(r(e.layers),e.assets)){var i,a=e.assets.length;for(i=0;i<a;i+=1)e.assets[i].layers&&r(e.assets[i].layers)}}}();function c(t){0===t.t.a.length&&t.t.p}var f={completeData:function(r){r.__complete||(l(r),n(r),o(r),h(r),p(r),t(r.layers,r.assets),function(r,i){if(r){var s=0,a=r.length;for(s=0;s<a;s+=1)1===r[s].t&&(r[s].data.layers=e(r[s].data.refId,i),t(r[s].data.layers,i))}}(r.chars,r.assets),r.__complete=!0)}};return f.checkColors=l,f.checkChars=o,f.checkPathProperties=h,f.checkShapes=p,f.completeLayers=t,f}()),_workerSelf.assetLoader||(_workerSelf.assetLoader=function(){function t(t){var e=t.getResponseHeader("content-type");return e&&"json"===t.responseType&&-1!==e.indexOf("json")||t.response&&"object"===_typeof$5(t.response)?t.response:t.response&&"string"==typeof t.response?JSON.parse(t.response):t.responseText?JSON.parse(t.responseText):null}return{load:function(e,r,i,s){var a,n=new XMLHttpRequest;try{n.responseType="json"}catch(t){}n.onreadystatechange=function(){if(4===n.readyState)if(200===n.status)a=t(n),i(a);else try{a=t(n),i(a)}catch(t){s&&s(t)}};try{n.open(["G","E","T"].join(""),e,!0)}catch(t){n.open(["G","E","T"].join(""),r+"/"+e,!0)}n.send()}}}()),"loadAnimation"===t.data.type)_workerSelf.assetLoader.load(t.data.path,t.data.fullPath,(function(e){_workerSelf.dataManager.completeData(e),_workerSelf.postMessage({id:t.data.id,payload:e,status:"success"})}),(function(){_workerSelf.postMessage({id:t.data.id,status:"error"})}));else if("complete"===t.data.type){var e=t.data.animation;_workerSelf.dataManager.completeData(e),_workerSelf.postMessage({id:t.data.id,payload:e,status:"success"})}else"loadData"===t.data.type&&_workerSelf.assetLoader.load(t.data.path,t.data.fullPath,(function(e){_workerSelf.postMessage({id:t.data.id,payload:e,status:"success"})}),(function(){_workerSelf.postMessage({id:t.data.id,status:"error"})}))})),e.onmessage=function(t){var e=t.data,r=e.id,s=i[r];i[r]=null,"success"===e.status?s.onComplete(e.payload):s.onError&&s.onError()})}function n(t,e){var s="processId_"+(r+=1);return i[s]={onComplete:t,onError:e},s}return{loadAnimation:function(t,r,i){a();var s=n(r,i);e.postMessage({type:"loadAnimation",path:t,fullPath:window.location.origin+window.location.pathname,id:s})},loadData:function(t,r,i){a();var s=n(r,i);e.postMessage({type:"loadData",path:t,fullPath:window.location.origin+window.location.pathname,id:s})},completeAnimation:function(t,r,i){a();var s=n(r,i);e.postMessage({type:"complete",animation:t,id:s})}}}(),ImagePreloader=function(){var t=function(){var t=createTag("canvas");t.width=1,t.height=1;var e=t.getContext("2d");return e.fillStyle="rgba(0,0,0,0)",e.fillRect(0,0,1,1),t}();function e(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function r(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function i(t,e,r){var i="";if(t.e)i=t.p;else if(e){var s=t.p;-1!==s.indexOf("images/")&&(s=s.split("/")[1]),i=e+s}else i=r,i+=t.u?t.u:"",i+=t.p;return i}function s(t){var e=0,r=setInterval(function(){(t.getBBox().width||e>500)&&(this._imageLoaded(),clearInterval(r)),e+=1}.bind(this),50)}function a(t){var e={assetData:t},r=i(t,this.assetsPath,this.path);return dataManager.loadData(r,function(t){e.img=t,this._footageLoaded()}.bind(this),function(){e.img={},this._footageLoaded()}.bind(this)),e}function n(){this._imageLoaded=e.bind(this),this._footageLoaded=r.bind(this),this.testImageLoaded=s.bind(this),this.createFootageData=a.bind(this),this.assetsPath="",this.path="",this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}return n.prototype={loadAssets:function(t,e){var r;this.imagesLoadedCb=e;var i=t.length;for(r=0;r<i;r+=1)t[r].layers||(t[r].t&&"seq"!==t[r].t?3===t[r].t&&(this.totalFootages+=1,this.images.push(this.createFootageData(t[r]))):(this.totalImages+=1,this.images.push(this._createImageData(t[r]))))},setAssetsPath:function(t){this.assetsPath=t||""},setPath:function(t){this.path=t||""},loadedImages:function(){return this.totalImages===this.loadedAssets},loadedFootages:function(){return this.totalFootages===this.loadedFootagesCount},destroy:function(){this.imagesLoadedCb=null,this.images.length=0},getAsset:function(t){for(var e=0,r=this.images.length;e<r;){if(this.images[e].assetData===t)return this.images[e].img;e+=1}return null},createImgData:function(e){var r=i(e,this.assetsPath,this.path),s=createTag("img");s.crossOrigin="anonymous",s.addEventListener("load",this._imageLoaded,!1),s.addEventListener("error",function(){a.img=t,this._imageLoaded()}.bind(this),!1),s.src=r;var a={img:s,assetData:e};return a},createImageData:function(e){var r=i(e,this.assetsPath,this.path),s=createNS("image");isSafari?this.testImageLoaded(s):s.addEventListener("load",this._imageLoaded,!1),s.addEventListener("error",function(){a.img=t,this._imageLoaded()}.bind(this),!1),s.setAttributeNS("http://www.w3.org/1999/xlink","href",r),this._elementHelper.append?this._elementHelper.append(s):this._elementHelper.appendChild(s);var a={img:s,assetData:e};return a},imageLoaded:e,footageLoaded:r,setCacheType:function(t,e){"svg"===t?(this._elementHelper=e,this._createImageData=this.createImageData.bind(this)):this._createImageData=this.createImgData.bind(this)}},n}();function BaseEvent(){}BaseEvent.prototype={triggerEvent:function(t,e){if(this._cbs[t])for(var r=this._cbs[t],i=0;i<r.length;i+=1)r[i](e)},addEventListener:function(t,e){return this._cbs[t]||(this._cbs[t]=[]),this._cbs[t].push(e),function(){this.removeEventListener(t,e)}.bind(this)},removeEventListener:function(t,e){if(e){if(this._cbs[t]){for(var r=0,i=this._cbs[t].length;r<i;)this._cbs[t][r]===e&&(this._cbs[t].splice(r,1),r-=1,i-=1),r+=1;this._cbs[t].length||(this._cbs[t]=null)}}else this._cbs[t]=null}};var markerParser=function(){function t(t){for(var e,r=t.split("\r\n"),i={},s=0,a=0;a<r.length;a+=1)2===(e=r[a].split(":")).length&&(i[e[0]]=e[1].trim(),s+=1);if(0===s)throw new Error;return i}return function(e){for(var r=[],i=0;i<e.length;i+=1){var s=e[i],a={time:s.tm,duration:s.dr};try{a.payload=JSON.parse(e[i].cm)}catch(r){try{a.payload=t(e[i].cm)}catch(t){a.payload={name:e[i].cm}}}r.push(a)}return r}}(),ProjectInterface=function(){function t(t){this.compositions.push(t)}return function(){function e(t){for(var e=0,r=this.compositions.length;e<r;){if(this.compositions[e].data&&this.compositions[e].data.nm===t)return this.compositions[e].prepareFrame&&this.compositions[e].data.xt&&this.compositions[e].prepareFrame(this.currentFrame),this.compositions[e].compInterface;e+=1}return null}return e.compositions=[],e.currentFrame=0,e.registerComposition=t,e}}(),renderers={},registerRenderer=function(t,e){renderers[t]=e};function getRenderer(t){return renderers[t]}function _typeof$4(t){return _typeof$4="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof$4(t)}var AnimationItem=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=createElementID(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.isSubframeEnabled=getSubframeEnabled(),this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=ProjectInterface(),this.imagePreloader=new ImagePreloader,this.audioController=audioControllerFactory(),this.markers=[],this.configAnimation=this.configAnimation.bind(this),this.onSetupError=this.onSetupError.bind(this),this.onSegmentComplete=this.onSegmentComplete.bind(this),this.drawnFrameEvent=new BMEnterFrameEvent("drawnFrame",0,0,0)};extendPrototype([BaseEvent],AnimationItem),AnimationItem.prototype.setParams=function(t){(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var e="svg";t.animType?e=t.animType:t.renderer&&(e=t.renderer);var r=getRenderer(e);this.renderer=new r(this,t.rendererSettings),this.imagePreloader.setCacheType(e,this.renderer.globalData.defs),this.renderer.setProjectInterface(this.projectInterface),this.animType=e,""===t.loop||null===t.loop||void 0===t.loop||!0===t.loop?this.loop=!0:!1===t.loop?this.loop=!1:this.loop=parseInt(t.loop,10),this.autoplay=!("autoplay"in t)||t.autoplay,this.name=t.name?t.name:"",this.autoloadSegments=!Object.prototype.hasOwnProperty.call(t,"autoloadSegments")||t.autoloadSegments,this.assetsPath=t.assetsPath,this.initialSegment=t.initialSegment,t.audioFactory&&this.audioController.setAudioFactory(t.audioFactory),t.animationData?this.setupAnimation(t.animationData):t.path&&(-1!==t.path.lastIndexOf("\\")?this.path=t.path.substr(0,t.path.lastIndexOf("\\")+1):this.path=t.path.substr(0,t.path.lastIndexOf("/")+1),this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),dataManager.loadAnimation(t.path,this.configAnimation,this.onSetupError))},AnimationItem.prototype.onSetupError=function(){this.trigger("data_failed")},AnimationItem.prototype.setupAnimation=function(t){dataManager.completeAnimation(t,this.configAnimation)},AnimationItem.prototype.setData=function(t,e){e&&"object"!==_typeof$4(e)&&(e=JSON.parse(e));var r={wrapper:t,animationData:e},i=t.attributes;r.path=i.getNamedItem("data-animation-path")?i.getNamedItem("data-animation-path").value:i.getNamedItem("data-bm-path")?i.getNamedItem("data-bm-path").value:i.getNamedItem("bm-path")?i.getNamedItem("bm-path").value:"",r.animType=i.getNamedItem("data-anim-type")?i.getNamedItem("data-anim-type").value:i.getNamedItem("data-bm-type")?i.getNamedItem("data-bm-type").value:i.getNamedItem("bm-type")?i.getNamedItem("bm-type").value:i.getNamedItem("data-bm-renderer")?i.getNamedItem("data-bm-renderer").value:i.getNamedItem("bm-renderer")?i.getNamedItem("bm-renderer").value:"canvas";var s=i.getNamedItem("data-anim-loop")?i.getNamedItem("data-anim-loop").value:i.getNamedItem("data-bm-loop")?i.getNamedItem("data-bm-loop").value:i.getNamedItem("bm-loop")?i.getNamedItem("bm-loop").value:"";"false"===s?r.loop=!1:"true"===s?r.loop=!0:""!==s&&(r.loop=parseInt(s,10));var a=i.getNamedItem("data-anim-autoplay")?i.getNamedItem("data-anim-autoplay").value:i.getNamedItem("data-bm-autoplay")?i.getNamedItem("data-bm-autoplay").value:!i.getNamedItem("bm-autoplay")||i.getNamedItem("bm-autoplay").value;r.autoplay="false"!==a,r.name=i.getNamedItem("data-name")?i.getNamedItem("data-name").value:i.getNamedItem("data-bm-name")?i.getNamedItem("data-bm-name").value:i.getNamedItem("bm-name")?i.getNamedItem("bm-name").value:"","false"===(i.getNamedItem("data-anim-prerender")?i.getNamedItem("data-anim-prerender").value:i.getNamedItem("data-bm-prerender")?i.getNamedItem("data-bm-prerender").value:i.getNamedItem("bm-prerender")?i.getNamedItem("bm-prerender").value:"")&&(r.prerender=!1),this.setParams(r)},AnimationItem.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip));var e,r,i=this.animationData.layers,s=i.length,a=t.layers,n=a.length;for(r=0;r<n;r+=1)for(e=0;e<s;){if(i[e].id===a[r].id){i[e]=a[r];break}e+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(s=t.assets.length,e=0;e<s;e+=1)this.animationData.assets.push(t.assets[e]);this.animationData.__complete=!1,dataManager.completeAnimation(this.animationData,this.onSegmentComplete)},AnimationItem.prototype.onSegmentComplete=function(t){this.animationData=t;var e=getExpressionsPlugin();e&&e.initExpressions(this),this.loadNextSegment()},AnimationItem.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||0===t.length||!this.autoloadSegments)return this.trigger("data_ready"),void(this.timeCompleted=this.totalFrames);var e=t.shift();this.timeCompleted=e.time*this.frameRate;var r=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,dataManager.loadData(r,this.includeLayers.bind(this),function(){this.trigger("data_failed")}.bind(this))},AnimationItem.prototype.loadSegments=function(){this.animationData.segments||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},AnimationItem.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},AnimationItem.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},AnimationItem.prototype.configAnimation=function(t){if(this.renderer)try{this.animationData=t,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(t),t.assets||(t.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(t.assets),this.markers=markerParser(t.markers||[]),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded(),this.isPaused&&this.audioController.pause()}catch(t){this.triggerConfigError(t)}},AnimationItem.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.isLoaded?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},AnimationItem.prototype.checkLoaded=function(){if(!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loadedImages()||"canvas"!==this.renderer.rendererType)&&this.imagePreloader.loadedFootages()){this.isLoaded=!0;var t=getExpressionsPlugin();t&&t.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.gotoFrame(),this.autoplay&&this.play()}},AnimationItem.prototype.resize=function(t,e){var r="number"==typeof t?t:void 0,i="number"==typeof e?e:void 0;this.renderer.updateContainerSize(r,i)},AnimationItem.prototype.setSubframe=function(t){this.isSubframeEnabled=!!t},AnimationItem.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame(),this.trigger("drawnFrame")},AnimationItem.prototype.renderFrame=function(){if(!1!==this.isLoaded&&this.renderer)try{this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(t){this.triggerRenderFrameError(t)}},AnimationItem.prototype.play=function(t){t&&this.name!==t||!0===this.isPaused&&(this.isPaused=!1,this.trigger("_pause"),this.audioController.resume(),this._idle&&(this._idle=!1,this.trigger("_active")))},AnimationItem.prototype.pause=function(t){t&&this.name!==t||!1===this.isPaused&&(this.isPaused=!0,this.trigger("_play"),this._idle=!0,this.trigger("_idle"),this.audioController.pause())},AnimationItem.prototype.togglePause=function(t){t&&this.name!==t||(!0===this.isPaused?this.play():this.pause())},AnimationItem.prototype.stop=function(t){t&&this.name!==t||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},AnimationItem.prototype.getMarkerData=function(t){for(var e,r=0;r<this.markers.length;r+=1)if((e=this.markers[r]).payload&&e.payload.name===t)return e;return null},AnimationItem.prototype.goToAndStop=function(t,e,r){if(!r||this.name===r){var i=Number(t);if(isNaN(i)){var s=this.getMarkerData(t);s&&this.goToAndStop(s.time,!0)}else e?this.setCurrentRawFrameValue(t):this.setCurrentRawFrameValue(t*this.frameModifier);this.pause()}},AnimationItem.prototype.goToAndPlay=function(t,e,r){if(!r||this.name===r){var i=Number(t);if(isNaN(i)){var s=this.getMarkerData(t);s&&(s.duration?this.playSegments([s.time,s.time+s.duration],!0):this.goToAndStop(s.time,!0))}else this.goToAndStop(i,e,r);this.play()}},AnimationItem.prototype.advanceTime=function(t){if(!0!==this.isPaused&&!1!==this.isLoaded){var e=this.currentRawFrame+t*this.frameModifier,r=!1;e>=this.totalFrames-1&&this.frameModifier>0?this.loop&&this.playCount!==this.loop?e>=this.totalFrames?(this.playCount+=1,this.checkSegments(e%this.totalFrames)||(this.setCurrentRawFrameValue(e%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(e):this.checkSegments(e>this.totalFrames?e%this.totalFrames:0)||(r=!0,e=this.totalFrames-1):e<0?this.checkSegments(e%this.totalFrames)||(!this.loop||this.playCount--<=0&&!0!==this.loop?(r=!0,e=0):(this.setCurrentRawFrameValue(this.totalFrames+e%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0)):this.setCurrentRawFrameValue(e),r&&(this.setCurrentRawFrameValue(e),this.pause(),this.trigger("complete"))}},AnimationItem.prototype.adjustSegment=function(t,e){this.playCount=0,t[1]<t[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=t[0]-t[1],this.timeCompleted=this.totalFrames,this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.001-e)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=t[1]-t[0],this.timeCompleted=this.totalFrames,this.firstFrame=t[0],this.setCurrentRawFrameValue(.001+e)),this.trigger("segmentStart")},AnimationItem.prototype.setSegment=function(t,e){var r=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?r=t:this.currentRawFrame+this.firstFrame>e&&(r=e-t)),this.firstFrame=t,this.totalFrames=e-t,this.timeCompleted=this.totalFrames,-1!==r&&this.goToAndStop(r,!0)},AnimationItem.prototype.playSegments=function(t,e){if(e&&(this.segments.length=0),"object"===_typeof$4(t[0])){var r,i=t.length;for(r=0;r<i;r+=1)this.segments.push(t[r])}else this.segments.push(t);this.segments.length&&e&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},AnimationItem.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),t&&this.checkSegments(0)},AnimationItem.prototype.checkSegments=function(t){return!!this.segments.length&&(this.adjustSegment(this.segments.shift(),t),!0)},AnimationItem.prototype.destroy=function(t){t&&this.name!==t||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=null,this.onLoopComplete=null,this.onComplete=null,this.onSegmentStart=null,this.onDestroy=null,this.renderer=null,this.renderer=null,this.imagePreloader=null,this.projectInterface=null)},AnimationItem.prototype.setCurrentRawFrameValue=function(t){this.currentRawFrame=t,this.gotoFrame()},AnimationItem.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},AnimationItem.prototype.setDirection=function(t){this.playDirection=t<0?-1:1,this.updaFrameModifier()},AnimationItem.prototype.setVolume=function(t,e){e&&this.name!==e||this.audioController.setVolume(t)},AnimationItem.prototype.getVolume=function(){return this.audioController.getVolume()},AnimationItem.prototype.mute=function(t){t&&this.name!==t||this.audioController.mute()},AnimationItem.prototype.unmute=function(t){t&&this.name!==t||this.audioController.unmute()},AnimationItem.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection,this.audioController.setRate(this.playSpeed*this.playDirection)},AnimationItem.prototype.getPath=function(){return this.path},AnimationItem.prototype.getAssetsPath=function(t){var e="";if(t.e)e=t.p;else if(this.assetsPath){var r=t.p;-1!==r.indexOf("images/")&&(r=r.split("/")[1]),e=this.assetsPath+r}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},AnimationItem.prototype.getAssetData=function(t){for(var e=0,r=this.assets.length;e<r;){if(t===this.assets[e].id)return this.assets[e];e+=1}return null},AnimationItem.prototype.hide=function(){this.renderer.hide()},AnimationItem.prototype.show=function(){this.renderer.show()},AnimationItem.prototype.getDuration=function(t){return t?this.totalFrames:this.totalFrames/this.frameRate},AnimationItem.prototype.updateDocumentData=function(t,e,r){try{this.renderer.getElementByPath(t).updateDocumentData(e,r)}catch(t){}},AnimationItem.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":this.triggerEvent(t,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameModifier));break;case"drawnFrame":this.drawnFrameEvent.currentTime=this.currentFrame,this.drawnFrameEvent.totalTime=this.totalFrames,this.drawnFrameEvent.direction=this.frameModifier,this.triggerEvent(t,this.drawnFrameEvent);break;case"loopComplete":this.triggerEvent(t,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new BMCompleteEvent(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new BMDestroyEvent(t,this));break;default:this.triggerEvent(t)}"enterFrame"===t&&this.onEnterFrame&&this.onEnterFrame.call(this,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult)),"loopComplete"===t&&this.onLoopComplete&&this.onLoopComplete.call(this,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult)),"complete"===t&&this.onComplete&&this.onComplete.call(this,new BMCompleteEvent(t,this.frameMult)),"segmentStart"===t&&this.onSegmentStart&&this.onSegmentStart.call(this,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames)),"destroy"===t&&this.onDestroy&&this.onDestroy.call(this,new BMDestroyEvent(t,this))},AnimationItem.prototype.triggerRenderFrameError=function(t){var e=new BMRenderFrameErrorEvent(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)},AnimationItem.prototype.triggerConfigError=function(t){var e=new BMConfigErrorEvent(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)};var animationManager=function(){var t={},e=[],r=0,i=0,s=0,a=!0,n=!1;function o(t){for(var r=0,s=t.target;r<i;)e[r].animation===s&&(e.splice(r,1),r-=1,i-=1,s.isPaused||p()),r+=1}function h(t,r){if(!t)return null;for(var s=0;s<i;){if(e[s].elem===t&&null!==e[s].elem)return e[s].animation;s+=1}var a=new AnimationItem;return c(a,t),a.setData(t,r),a}function l(){s+=1,u()}function p(){s-=1}function c(t,r){t.addEventListener("destroy",o),t.addEventListener("_active",l),t.addEventListener("_idle",p),e.push({elem:r,animation:t}),i+=1}function f(t){var o,h=t-r;for(o=0;o<i;o+=1)e[o].animation.advanceTime(h);r=t,s&&!n?window.requestAnimationFrame(f):a=!0}function d(t){r=t,window.requestAnimationFrame(f)}function u(){!n&&s&&a&&(window.requestAnimationFrame(d),a=!1)}return t.registerAnimation=h,t.loadAnimation=function(t){var e=new AnimationItem;return c(e,null),e.setParams(t),e},t.setSpeed=function(t,r){var s;for(s=0;s<i;s+=1)e[s].animation.setSpeed(t,r)},t.setDirection=function(t,r){var s;for(s=0;s<i;s+=1)e[s].animation.setDirection(t,r)},t.play=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.play(t)},t.pause=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.pause(t)},t.stop=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.stop(t)},t.togglePause=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.togglePause(t)},t.searchAnimations=function(t,e,r){var i,s=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),a=s.length;for(i=0;i<a;i+=1)r&&s[i].setAttribute("data-bm-type",r),h(s[i],t);if(e&&0===a){r||(r="svg");var n=document.getElementsByTagName("body")[0];n.innerText="";var o=createTag("div");o.style.width="100%",o.style.height="100%",o.setAttribute("data-bm-type",r),n.appendChild(o),h(o,t)}},t.resize=function(){var t;for(t=0;t<i;t+=1)e[t].animation.resize()},t.goToAndStop=function(t,r,s){var a;for(a=0;a<i;a+=1)e[a].animation.goToAndStop(t,r,s)},t.destroy=function(t){var r;for(r=i-1;r>=0;r-=1)e[r].animation.destroy(t)},t.freeze=function(){n=!0},t.unfreeze=function(){n=!1,u()},t.setVolume=function(t,r){var s;for(s=0;s<i;s+=1)e[s].animation.setVolume(t,r)},t.mute=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.mute(t)},t.unmute=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.unmute(t)},t.getRegisteredAnimations=function(){var t,r=e.length,i=[];for(t=0;t<r;t+=1)i.push(e[t].animation);return i},t}(),BezierFactory=function(){var t={getBezierEasing:function(t,r,i,s,a){var n=a||("bez_"+t+"_"+r+"_"+i+"_"+s).replace(/\./g,"p");if(e[n])return e[n];var o=new l([t,r,i,s]);return e[n]=o,o}},e={},r=.1,i="function"==typeof Float32Array;function s(t,e){return 1-3*e+3*t}function a(t,e){return 3*e-6*t}function n(t){return 3*t}function o(t,e,r){return((s(e,r)*t+a(e,r))*t+n(e))*t}function h(t,e,r){return 3*s(e,r)*t*t+2*a(e,r)*t+n(e)}function l(t){this._p=t,this._mSampleValues=i?new Float32Array(11):new Array(11),this._precomputed=!1,this.get=this.get.bind(this)}return l.prototype={get:function(t){var e=this._p[0],r=this._p[1],i=this._p[2],s=this._p[3];return this._precomputed||this._precompute(),e===r&&i===s?t:0===t?0:1===t?1:o(this._getTForX(t),r,s)},_precompute:function(){var t=this._p[0],e=this._p[1],r=this._p[2],i=this._p[3];this._precomputed=!0,t===e&&r===i||this._calcSampleValues()},_calcSampleValues:function(){for(var t=this._p[0],e=this._p[2],i=0;i<11;++i)this._mSampleValues[i]=o(i*r,t,e)},_getTForX:function(t){for(var e=this._p[0],i=this._p[2],s=this._mSampleValues,a=0,n=1;10!==n&&s[n]<=t;++n)a+=r;var l=a+(t-s[--n])/(s[n+1]-s[n])*r,p=h(l,e,i);return p>=.001?function(t,e,r,i){for(var s=0;s<4;++s){var a=h(e,r,i);if(0===a)return e;e-=(o(e,r,i)-t)/a}return e}(t,l,e,i):0===p?l:function(t,e,r,i,s){var a,n,h=0;do{(a=o(n=e+(r-e)/2,i,s)-t)>0?r=n:e=n}while(Math.abs(a)>1e-7&&++h<10);return n}(t,a,a+r,e,i)}},t}(),pooling={double:function(t){return t.concat(createSizedArray(t.length))}},poolFactory=function(t,e,r){var i=0,s=t,a=createSizedArray(s);return{newElement:function(){return i?a[i-=1]:e()},release:function(t){i===s&&(a=pooling.double(a),s*=2),r&&r(t),a[i]=t,i+=1}}},bezierLengthPool=poolFactory(8,(function(){return{addedLength:0,percents:createTypedArray("float32",getDefaultCurveSegments()),lengths:createTypedArray("float32",getDefaultCurveSegments())}})),segmentsLengthPool=poolFactory(8,(function(){return{lengths:[],totalLength:0}}),(function(t){var e,r=t.lengths.length;for(e=0;e<r;e+=1)bezierLengthPool.release(t.lengths[e]);t.lengths.length=0}));function bezFunction(){var t=Math;function e(t,e,r,i,s,a){var n=t*i+e*s+r*a-s*i-a*t-r*e;return n>-.001&&n<.001}var r=function(t,e,r,i){var s,a,n,o,h,l,p=getDefaultCurveSegments(),c=0,f=[],d=[],u=bezierLengthPool.newElement();for(n=r.length,s=0;s<p;s+=1){for(h=s/(p-1),l=0,a=0;a<n;a+=1)o=bmPow(1-h,3)*t[a]+3*bmPow(1-h,2)*h*r[a]+3*(1-h)*bmPow(h,2)*i[a]+bmPow(h,3)*e[a],f[a]=o,null!==d[a]&&(l+=bmPow(f[a]-d[a],2)),d[a]=f[a];l&&(c+=l=bmSqrt(l)),u.percents[s]=h,u.lengths[s]=c}return u.addedLength=c,u};function i(t){this.segmentLength=0,this.points=new Array(t)}function s(t,e){this.partialLength=t,this.point=e}var a,n=(a={},function(t,r,n,o){var h=(t[0]+"_"+t[1]+"_"+r[0]+"_"+r[1]+"_"+n[0]+"_"+n[1]+"_"+o[0]+"_"+o[1]).replace(/\./g,"p");if(!a[h]){var l,p,c,f,d,u,m,y=getDefaultCurveSegments(),g=0,v=null;2===t.length&&(t[0]!==r[0]||t[1]!==r[1])&&e(t[0],t[1],r[0],r[1],t[0]+n[0],t[1]+n[1])&&e(t[0],t[1],r[0],r[1],r[0]+o[0],r[1]+o[1])&&(y=2);var b=new i(y);for(c=n.length,l=0;l<y;l+=1){for(m=createSizedArray(c),d=l/(y-1),u=0,p=0;p<c;p+=1)f=bmPow(1-d,3)*t[p]+3*bmPow(1-d,2)*d*(t[p]+n[p])+3*(1-d)*bmPow(d,2)*(r[p]+o[p])+bmPow(d,3)*r[p],m[p]=f,null!==v&&(u+=bmPow(m[p]-v[p],2));g+=u=bmSqrt(u),b.points[l]=new s(u,m),v=m}b.segmentLength=g,a[h]=b}return a[h]});function o(t,e){var r=e.percents,i=e.lengths,s=r.length,a=bmFloor((s-1)*t),n=t*e.addedLength,o=0;if(a===s-1||0===a||n===i[a])return r[a];for(var h=i[a]>n?-1:1,l=!0;l;)if(i[a]<=n&&i[a+1]>n?(o=(n-i[a])/(i[a+1]-i[a]),l=!1):a+=h,a<0||a>=s-1){if(a===s-1)return r[a];l=!1}return r[a]+(r[a+1]-r[a])*o}var h=createTypedArray("float32",8);return{getSegmentsLength:function(t){var e,i=segmentsLengthPool.newElement(),s=t.c,a=t.v,n=t.o,o=t.i,h=t._length,l=i.lengths,p=0;for(e=0;e<h-1;e+=1)l[e]=r(a[e],a[e+1],n[e],o[e+1]),p+=l[e].addedLength;return s&&h&&(l[e]=r(a[e],a[0],n[e],o[0]),p+=l[e].addedLength),i.totalLength=p,i},getNewSegment:function(e,r,i,s,a,n,l){a<0?a=0:a>1&&(a=1);var p,c=o(a,l),f=o(n=n>1?1:n,l),d=e.length,u=1-c,m=1-f,y=u*u*u,g=c*u*u*3,v=c*c*u*3,b=c*c*c,_=u*u*m,P=c*u*m+u*c*m+u*u*f,E=c*c*m+u*c*f+c*u*f,S=c*c*f,x=u*m*m,A=c*m*m+u*f*m+u*m*f,w=c*f*m+u*f*f+c*m*f,C=c*f*f,k=m*m*m,T=f*m*m+m*f*m+m*m*f,D=f*f*m+m*f*f+f*m*f,M=f*f*f;for(p=0;p<d;p+=1)h[4*p]=t.round(1e3*(y*e[p]+g*i[p]+v*s[p]+b*r[p]))/1e3,h[4*p+1]=t.round(1e3*(_*e[p]+P*i[p]+E*s[p]+S*r[p]))/1e3,h[4*p+2]=t.round(1e3*(x*e[p]+A*i[p]+w*s[p]+C*r[p]))/1e3,h[4*p+3]=t.round(1e3*(k*e[p]+T*i[p]+D*s[p]+M*r[p]))/1e3;return h},getPointInSegment:function(e,r,i,s,a,n){var h=o(a,n),l=1-h;return[t.round(1e3*(l*l*l*e[0]+(h*l*l+l*h*l+l*l*h)*i[0]+(h*h*l+l*h*h+h*l*h)*s[0]+h*h*h*r[0]))/1e3,t.round(1e3*(l*l*l*e[1]+(h*l*l+l*h*l+l*l*h)*i[1]+(h*h*l+l*h*h+h*l*h)*s[1]+h*h*h*r[1]))/1e3]},buildBezierData:n,pointOnLine2D:e,pointOnLine3D:function(r,i,s,a,n,o,h,l,p){if(0===s&&0===o&&0===p)return e(r,i,a,n,h,l);var c,f=t.sqrt(t.pow(a-r,2)+t.pow(n-i,2)+t.pow(o-s,2)),d=t.sqrt(t.pow(h-r,2)+t.pow(l-i,2)+t.pow(p-s,2)),u=t.sqrt(t.pow(h-a,2)+t.pow(l-n,2)+t.pow(p-o,2));return(c=f>d?f>u?f-d-u:u-d-f:u>d?u-d-f:d-f-u)>-1e-4&&c<1e-4}}}var bez=bezFunction(),PropertyFactory=function(){var t=initialDefaultFrame,e=Math.abs;function r(t,e){var r,s=this.offsetTime;"multidimensional"===this.propType&&(r=createTypedArray("float32",this.pv.length));for(var a,n,o,h,l,p,c,f,d,u=e.lastIndex,m=u,y=this.keyframes.length-1,g=!0;g;){if(a=this.keyframes[m],n=this.keyframes[m+1],m===y-1&&t>=n.t-s){a.h&&(a=n),u=0;break}if(n.t-s>t){u=m;break}m<y-1?m+=1:(u=0,g=!1)}o=this.keyframesMetadata[m]||{};var v,b,_,P,E,S,x,A,w,C,k=n.t-s,T=a.t-s;if(a.to){o.bezierData||(o.bezierData=bez.buildBezierData(a.s,n.s||a.e,a.to,a.ti));var D=o.bezierData;if(t>=k||t<T){var M=t>=k?D.points.length-1:0;for(l=D.points[M].point.length,h=0;h<l;h+=1)r[h]=D.points[M].point[h]}else{o.__fnct?d=o.__fnct:(d=BezierFactory.getBezierEasing(a.o.x,a.o.y,a.i.x,a.i.y,a.n).get,o.__fnct=d),p=d((t-T)/(k-T));var F,I=D.segmentLength*p,R=e.lastFrame<t&&e._lastKeyframeIndex===m?e._lastAddedLength:0;for(f=e.lastFrame<t&&e._lastKeyframeIndex===m?e._lastPoint:0,g=!0,c=D.points.length;g;){if(R+=D.points[f].partialLength,0===I||0===p||f===D.points.length-1){for(l=D.points[f].point.length,h=0;h<l;h+=1)r[h]=D.points[f].point[h];break}if(I>=R&&I<R+D.points[f+1].partialLength){for(F=(I-R)/D.points[f+1].partialLength,l=D.points[f].point.length,h=0;h<l;h+=1)r[h]=D.points[f].point[h]+(D.points[f+1].point[h]-D.points[f].point[h])*F;break}f<c-1?f+=1:g=!1}e._lastPoint=f,e._lastAddedLength=R-D.points[f].partialLength,e._lastKeyframeIndex=m}}else{var B,V,O,L,$;if(y=a.s.length,v=n.s||a.e,this.sh&&1!==a.h)if(t>=k)r[0]=v[0],r[1]=v[1],r[2]=v[2];else if(t<=T)r[0]=a.s[0],r[1]=a.s[1],r[2]=a.s[2];else{var z=i(a.s),G=i(v);b=r,_=function(t,e,r){var i,s,a,n,o,h=[],l=t[0],p=t[1],c=t[2],f=t[3],d=e[0],u=e[1],m=e[2],y=e[3];return(s=l*d+p*u+c*m+f*y)<0&&(s=-s,d=-d,u=-u,m=-m,y=-y),1-s>1e-6?(i=Math.acos(s),a=Math.sin(i),n=Math.sin((1-r)*i)/a,o=Math.sin(r*i)/a):(n=1-r,o=r),h[0]=n*l+o*d,h[1]=n*p+o*u,h[2]=n*c+o*m,h[3]=n*f+o*y,h}(z,G,(t-T)/(k-T)),P=_[0],E=_[1],S=_[2],x=_[3],A=Math.atan2(2*E*x-2*P*S,1-2*E*E-2*S*S),w=Math.asin(2*P*E+2*S*x),C=Math.atan2(2*P*x-2*E*S,1-2*P*P-2*S*S),b[0]=A/degToRads,b[1]=w/degToRads,b[2]=C/degToRads}else for(m=0;m<y;m+=1)1!==a.h&&(t>=k?p=1:t<T?p=0:(a.o.x.constructor===Array?(o.__fnct||(o.__fnct=[]),o.__fnct[m]?d=o.__fnct[m]:(B=void 0===a.o.x[m]?a.o.x[0]:a.o.x[m],V=void 0===a.o.y[m]?a.o.y[0]:a.o.y[m],O=void 0===a.i.x[m]?a.i.x[0]:a.i.x[m],L=void 0===a.i.y[m]?a.i.y[0]:a.i.y[m],d=BezierFactory.getBezierEasing(B,V,O,L).get,o.__fnct[m]=d)):o.__fnct?d=o.__fnct:(B=a.o.x,V=a.o.y,O=a.i.x,L=a.i.y,d=BezierFactory.getBezierEasing(B,V,O,L).get,a.keyframeMetadata=d),p=d((t-T)/(k-T)))),v=n.s||a.e,$=1===a.h?a.s[m]:a.s[m]+(v[m]-a.s[m])*p,"multidimensional"===this.propType?r[m]=$:r=$}return e.lastIndex=u,r}function i(t){var e=t[0]*degToRads,r=t[1]*degToRads,i=t[2]*degToRads,s=Math.cos(e/2),a=Math.cos(r/2),n=Math.cos(i/2),o=Math.sin(e/2),h=Math.sin(r/2),l=Math.sin(i/2);return[o*h*n+s*a*l,o*a*n+s*h*l,s*h*n-o*a*l,s*a*n-o*h*l]}function s(){var e=this.comp.renderedFrame-this.offsetTime,r=this.keyframes[0].t-this.offsetTime,i=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(e===this._caching.lastFrame||this._caching.lastFrame!==t&&(this._caching.lastFrame>=i&&e>=i||this._caching.lastFrame<r&&e<r))){this._caching.lastFrame>=e&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var s=this.interpolateValue(e,this._caching);this.pv=s}return this._caching.lastFrame=e,this.pv}function a(t){var r;if("unidimensional"===this.propType)r=t*this.mult,e(this.v-r)>1e-5&&(this.v=r,this._mdf=!0);else for(var i=0,s=this.v.length;i<s;)r=t[i]*this.mult,e(this.v[i]-r)>1e-5&&(this.v[i]=r,this._mdf=!0),i+=1}function n(){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length)if(this.lock)this.setVValue(this.pv);else{var t;this.lock=!0,this._mdf=this._isFirstFrame;var e=this.effectsSequence.length,r=this.kf?this.pv:this.data.k;for(t=0;t<e;t+=1)r=this.effectsSequence[t](r);this.setVValue(r),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function o(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function h(t,e,r,i){this.propType="unidimensional",this.mult=r||1,this.data=e,this.v=r?e.k*r:e.k,this.pv=e.k,this._mdf=!1,this.elem=t,this.container=i,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=n,this.setVValue=a,this.addEffect=o}function l(t,e,r,i){var s;this.propType="multidimensional",this.mult=r||1,this.data=e,this._mdf=!1,this.elem=t,this.container=i,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1;var h=e.k.length;for(this.v=createTypedArray("float32",h),this.pv=createTypedArray("float32",h),this.vel=createTypedArray("float32",h),s=0;s<h;s+=1)this.v[s]=e.k[s]*this.mult,this.pv[s]=e.k[s];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=n,this.setVValue=a,this.addEffect=o}function p(e,i,h,l){this.propType="unidimensional",this.keyframes=i.k,this.keyframesMetadata=[],this.offsetTime=e.data.st,this.frameId=-1,this._caching={lastFrame:t,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=i,this.mult=h||1,this.elem=e,this.container=l,this.comp=e.comp,this.v=t,this.pv=t,this._isFirstFrame=!0,this.getValue=n,this.setVValue=a,this.interpolateValue=r,this.effectsSequence=[s.bind(this)],this.addEffect=o}function c(e,i,h,l){var p;this.propType="multidimensional";var c,f,d,u,m=i.k.length;for(p=0;p<m-1;p+=1)i.k[p].to&&i.k[p].s&&i.k[p+1]&&i.k[p+1].s&&(c=i.k[p].s,f=i.k[p+1].s,d=i.k[p].to,u=i.k[p].ti,(2===c.length&&(c[0]!==f[0]||c[1]!==f[1])&&bez.pointOnLine2D(c[0],c[1],f[0],f[1],c[0]+d[0],c[1]+d[1])&&bez.pointOnLine2D(c[0],c[1],f[0],f[1],f[0]+u[0],f[1]+u[1])||3===c.length&&(c[0]!==f[0]||c[1]!==f[1]||c[2]!==f[2])&&bez.pointOnLine3D(c[0],c[1],c[2],f[0],f[1],f[2],c[0]+d[0],c[1]+d[1],c[2]+d[2])&&bez.pointOnLine3D(c[0],c[1],c[2],f[0],f[1],f[2],f[0]+u[0],f[1]+u[1],f[2]+u[2]))&&(i.k[p].to=null,i.k[p].ti=null),c[0]===f[0]&&c[1]===f[1]&&0===d[0]&&0===d[1]&&0===u[0]&&0===u[1]&&(2===c.length||c[2]===f[2]&&0===d[2]&&0===u[2])&&(i.k[p].to=null,i.k[p].ti=null));this.effectsSequence=[s.bind(this)],this.data=i,this.keyframes=i.k,this.keyframesMetadata=[],this.offsetTime=e.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=h||1,this.elem=e,this.container=l,this.comp=e.comp,this.getValue=n,this.setVValue=a,this.interpolateValue=r,this.frameId=-1;var y=i.k[0].s.length;for(this.v=createTypedArray("float32",y),this.pv=createTypedArray("float32",y),p=0;p<y;p+=1)this.v[p]=t,this.pv[p]=t;this._caching={lastFrame:t,lastIndex:0,value:createTypedArray("float32",y)},this.addEffect=o}var f={getProp:function(t,e,r,i,s){var a;if(e.k.length)if("number"==typeof e.k[0])a=new l(t,e,i,s);else switch(r){case 0:a=new p(t,e,i,s);break;case 1:a=new c(t,e,i,s)}else a=new h(t,e,i,s);return a.effectsSequence.length&&s.addDynamicProperty(a),a}};return f}();function DynamicPropertyContainer(){}DynamicPropertyContainer.prototype={addDynamicProperty:function(t){-1===this.dynamicProperties.indexOf(t)&&(this.dynamicProperties.push(t),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){var t;this._mdf=!1;var e=this.dynamicProperties.length;for(t=0;t<e;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(t){this.container=t,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var pointPool=poolFactory(8,(function(){return createTypedArray("float32",2)}));function ShapePath(){this.c=!1,this._length=0,this._maxLength=8,this.v=createSizedArray(this._maxLength),this.o=createSizedArray(this._maxLength),this.i=createSizedArray(this._maxLength)}ShapePath.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var r=0;r<e;)this.v[r]=pointPool.newElement(),this.o[r]=pointPool.newElement(),this.i[r]=pointPool.newElement(),r+=1},ShapePath.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},ShapePath.prototype.doubleArrayLength=function(){this.v=this.v.concat(createSizedArray(this._maxLength)),this.i=this.i.concat(createSizedArray(this._maxLength)),this.o=this.o.concat(createSizedArray(this._maxLength)),this._maxLength*=2},ShapePath.prototype.setXYAt=function(t,e,r,i,s){var a;switch(this._length=Math.max(this._length,i+1),this._length>=this._maxLength&&this.doubleArrayLength(),r){case"v":a=this.v;break;case"i":a=this.i;break;case"o":a=this.o;break;default:a=[]}(!a[i]||a[i]&&!s)&&(a[i]=pointPool.newElement()),a[i][0]=t,a[i][1]=e},ShapePath.prototype.setTripleAt=function(t,e,r,i,s,a,n,o){this.setXYAt(t,e,"v",n,o),this.setXYAt(r,i,"o",n,o),this.setXYAt(s,a,"i",n,o)},ShapePath.prototype.reverse=function(){var t=new ShapePath;t.setPathData(this.c,this._length);var e=this.v,r=this.o,i=this.i,s=0;this.c&&(t.setTripleAt(e[0][0],e[0][1],i[0][0],i[0][1],r[0][0],r[0][1],0,!1),s=1);var a,n=this._length-1,o=this._length;for(a=s;a<o;a+=1)t.setTripleAt(e[n][0],e[n][1],i[n][0],i[n][1],r[n][0],r[n][1],a,!1),n-=1;return t},ShapePath.prototype.length=function(){return this._length};var shapePool=(factory=poolFactory(4,(function(){return new ShapePath}),(function(t){var e,r=t._length;for(e=0;e<r;e+=1)pointPool.release(t.v[e]),pointPool.release(t.i[e]),pointPool.release(t.o[e]),t.v[e]=null,t.i[e]=null,t.o[e]=null;t._length=0,t.c=!1})),factory.clone=function(t){var e,r=factory.newElement(),i=void 0===t._length?t.v.length:t._length;for(r.setLength(i),r.c=t.c,e=0;e<i;e+=1)r.setTripleAt(t.v[e][0],t.v[e][1],t.o[e][0],t.o[e][1],t.i[e][0],t.i[e][1],e);return r},factory),factory;function ShapeCollection(){this._length=0,this._maxLength=4,this.shapes=createSizedArray(this._maxLength)}ShapeCollection.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(createSizedArray(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},ShapeCollection.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)shapePool.release(this.shapes[t]);this._length=0};var shapeCollectionPool=(ob={newShapeCollection:function(){return _length?pool[_length-=1]:new ShapeCollection},release:function(t){var e,r=t._length;for(e=0;e<r;e+=1)shapePool.release(t.shapes[e]);t._length=0,_length===_maxLength&&(pool=pooling.double(pool),_maxLength*=2),pool[_length]=t,_length+=1}},_length=0,_maxLength=4,pool=createSizedArray(_maxLength),ob),ob,_length,_maxLength,pool,ShapePropertyFactory=function(){var t=-999999;function e(t,e,r){var i,s,a,n,o,h,l,p,c,f=r.lastIndex,d=this.keyframes;if(t<d[0].t-this.offsetTime)i=d[0].s[0],a=!0,f=0;else if(t>=d[d.length-1].t-this.offsetTime)i=d[d.length-1].s?d[d.length-1].s[0]:d[d.length-2].e[0],a=!0;else{for(var u,m,y,g=f,v=d.length-1,b=!0;b&&(u=d[g],!((m=d[g+1]).t-this.offsetTime>t));)g<v-1?g+=1:b=!1;if(y=this.keyframesMetadata[g]||{},f=g,!(a=1===u.h)){if(t>=m.t-this.offsetTime)p=1;else if(t<u.t-this.offsetTime)p=0;else{var _;y.__fnct?_=y.__fnct:(_=BezierFactory.getBezierEasing(u.o.x,u.o.y,u.i.x,u.i.y).get,y.__fnct=_),p=_((t-(u.t-this.offsetTime))/(m.t-this.offsetTime-(u.t-this.offsetTime)))}s=m.s?m.s[0]:u.e[0]}i=u.s[0]}for(h=e._length,l=i.i[0].length,r.lastIndex=f,n=0;n<h;n+=1)for(o=0;o<l;o+=1)c=a?i.i[n][o]:i.i[n][o]+(s.i[n][o]-i.i[n][o])*p,e.i[n][o]=c,c=a?i.o[n][o]:i.o[n][o]+(s.o[n][o]-i.o[n][o])*p,e.o[n][o]=c,c=a?i.v[n][o]:i.v[n][o]+(s.v[n][o]-i.v[n][o])*p,e.v[n][o]=c}function r(){var e=this.comp.renderedFrame-this.offsetTime,r=this.keyframes[0].t-this.offsetTime,i=this.keyframes[this.keyframes.length-1].t-this.offsetTime,s=this._caching.lastFrame;return s!==t&&(s<r&&e<r||s>i&&e>i)||(this._caching.lastIndex=s<e?this._caching.lastIndex:0,this.interpolateShape(e,this.pv,this._caching)),this._caching.lastFrame=e,this.pv}function i(){this.paths=this.localShapeCollection}function s(t){(function(t,e){if(t._length!==e._length||t.c!==e.c)return!1;var r,i=t._length;for(r=0;r<i;r+=1)if(t.v[r][0]!==e.v[r][0]||t.v[r][1]!==e.v[r][1]||t.o[r][0]!==e.o[r][0]||t.o[r][1]!==e.o[r][1]||t.i[r][0]!==e.i[r][0]||t.i[r][1]!==e.i[r][1])return!1;return!0})(this.v,t)||(this.v=shapePool.clone(t),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function a(){if(this.elem.globalData.frameId!==this.frameId)if(this.effectsSequence.length)if(this.lock)this.setVValue(this.pv);else{var t,e;this.lock=!0,this._mdf=!1,t=this.kf?this.pv:this.data.ks?this.data.ks.k:this.data.pt.k;var r=this.effectsSequence.length;for(e=0;e<r;e+=1)t=this.effectsSequence[e](t);this.setVValue(t),this.lock=!1,this.frameId=this.elem.globalData.frameId}else this._mdf=!1}function n(t,e,r){this.propType="shape",this.comp=t.comp,this.container=t,this.elem=t,this.data=e,this.k=!1,this.kf=!1,this._mdf=!1;var s=3===r?e.pt.k:e.ks.k;this.v=shapePool.clone(s),this.pv=shapePool.clone(this.v),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=i,this.effectsSequence=[]}function o(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function h(e,s,a){this.propType="shape",this.comp=e.comp,this.elem=e,this.container=e,this.offsetTime=e.data.st,this.keyframes=3===a?s.pt.k:s.ks.k,this.keyframesMetadata=[],this.k=!0,this.kf=!0;var n=this.keyframes[0].s[0].i.length;this.v=shapePool.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,n),this.pv=shapePool.clone(this.v),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=t,this.reset=i,this._caching={lastFrame:t,lastIndex:0},this.effectsSequence=[r.bind(this)]}n.prototype.interpolateShape=e,n.prototype.getValue=a,n.prototype.setVValue=s,n.prototype.addEffect=o,h.prototype.getValue=a,h.prototype.interpolateShape=e,h.prototype.setVValue=s,h.prototype.addEffect=o;var l=function(){var t=roundCorner;function e(t,e){this.v=shapePool.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=e.d,this.elem=t,this.comp=t.comp,this.frameId=-1,this.initDynamicPropertyContainer(t),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.s=PropertyFactory.getProp(t,e.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return e.prototype={reset:i,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var e=this.p.v[0],r=this.p.v[1],i=this.s.v[0]/2,s=this.s.v[1]/2,a=3!==this.d,n=this.v;n.v[0][0]=e,n.v[0][1]=r-s,n.v[1][0]=a?e+i:e-i,n.v[1][1]=r,n.v[2][0]=e,n.v[2][1]=r+s,n.v[3][0]=a?e-i:e+i,n.v[3][1]=r,n.i[0][0]=a?e-i*t:e+i*t,n.i[0][1]=r-s,n.i[1][0]=a?e+i:e-i,n.i[1][1]=r-s*t,n.i[2][0]=a?e+i*t:e-i*t,n.i[2][1]=r+s,n.i[3][0]=a?e-i:e+i,n.i[3][1]=r+s*t,n.o[0][0]=a?e+i*t:e-i*t,n.o[0][1]=r-s,n.o[1][0]=a?e+i:e-i,n.o[1][1]=r+s*t,n.o[2][0]=a?e-i*t:e+i*t,n.o[2][1]=r+s,n.o[3][0]=a?e-i:e+i,n.o[3][1]=r-s*t}},extendPrototype([DynamicPropertyContainer],e),e}(),p=function(){function t(t,e){this.v=shapePool.newElement(),this.v.setPathData(!0,0),this.elem=t,this.comp=t.comp,this.data=e,this.frameId=-1,this.d=e.d,this.initDynamicPropertyContainer(t),1===e.sy?(this.ir=PropertyFactory.getProp(t,e.ir,0,0,this),this.is=PropertyFactory.getProp(t,e.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=PropertyFactory.getProp(t,e.pt,0,0,this),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.r=PropertyFactory.getProp(t,e.r,0,degToRads,this),this.or=PropertyFactory.getProp(t,e.or,0,0,this),this.os=PropertyFactory.getProp(t,e.os,0,.01,this),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return t.prototype={reset:i,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var t,e,r,i,s=2*Math.floor(this.pt.v),a=2*Math.PI/s,n=!0,o=this.or.v,h=this.ir.v,l=this.os.v,p=this.is.v,c=2*Math.PI*o/(2*s),f=2*Math.PI*h/(2*s),d=-Math.PI/2;d+=this.r.v;var u=3===this.data.d?-1:1;for(this.v._length=0,t=0;t<s;t+=1){r=n?l:p,i=n?c:f;var m=(e=n?o:h)*Math.cos(d),y=e*Math.sin(d),g=0===m&&0===y?0:y/Math.sqrt(m*m+y*y),v=0===m&&0===y?0:-m/Math.sqrt(m*m+y*y);m+=+this.p.v[0],y+=+this.p.v[1],this.v.setTripleAt(m,y,m-g*i*r*u,y-v*i*r*u,m+g*i*r*u,y+v*i*r*u,t,!0),n=!n,d+=a*u}},convertPolygonToPath:function(){var t,e=Math.floor(this.pt.v),r=2*Math.PI/e,i=this.or.v,s=this.os.v,a=2*Math.PI*i/(4*e),n=.5*-Math.PI,o=3===this.data.d?-1:1;for(n+=this.r.v,this.v._length=0,t=0;t<e;t+=1){var h=i*Math.cos(n),l=i*Math.sin(n),p=0===h&&0===l?0:l/Math.sqrt(h*h+l*l),c=0===h&&0===l?0:-h/Math.sqrt(h*h+l*l);h+=+this.p.v[0],l+=+this.p.v[1],this.v.setTripleAt(h,l,h-p*a*s*o,l-c*a*s*o,h+p*a*s*o,l+c*a*s*o,t,!0),n+=r*o}this.paths.length=0,this.paths[0]=this.v}},extendPrototype([DynamicPropertyContainer],t),t}(),c=function(){function t(t,e){this.v=shapePool.newElement(),this.v.c=!0,this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=t,this.comp=t.comp,this.frameId=-1,this.d=e.d,this.initDynamicPropertyContainer(t),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.s=PropertyFactory.getProp(t,e.s,1,0,this),this.r=PropertyFactory.getProp(t,e.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return t.prototype={convertRectToPath:function(){var t=this.p.v[0],e=this.p.v[1],r=this.s.v[0]/2,i=this.s.v[1]/2,s=bmMin(r,i,this.r.v),a=s*(1-roundCorner);this.v._length=0,2===this.d||1===this.d?(this.v.setTripleAt(t+r,e-i+s,t+r,e-i+s,t+r,e-i+a,0,!0),this.v.setTripleAt(t+r,e+i-s,t+r,e+i-a,t+r,e+i-s,1,!0),0!==s?(this.v.setTripleAt(t+r-s,e+i,t+r-s,e+i,t+r-a,e+i,2,!0),this.v.setTripleAt(t-r+s,e+i,t-r+a,e+i,t-r+s,e+i,3,!0),this.v.setTripleAt(t-r,e+i-s,t-r,e+i-s,t-r,e+i-a,4,!0),this.v.setTripleAt(t-r,e-i+s,t-r,e-i+a,t-r,e-i+s,5,!0),this.v.setTripleAt(t-r+s,e-i,t-r+s,e-i,t-r+a,e-i,6,!0),this.v.setTripleAt(t+r-s,e-i,t+r-a,e-i,t+r-s,e-i,7,!0)):(this.v.setTripleAt(t-r,e+i,t-r+a,e+i,t-r,e+i,2),this.v.setTripleAt(t-r,e-i,t-r,e-i+a,t-r,e-i,3))):(this.v.setTripleAt(t+r,e-i+s,t+r,e-i+a,t+r,e-i+s,0,!0),0!==s?(this.v.setTripleAt(t+r-s,e-i,t+r-s,e-i,t+r-a,e-i,1,!0),this.v.setTripleAt(t-r+s,e-i,t-r+a,e-i,t-r+s,e-i,2,!0),this.v.setTripleAt(t-r,e-i+s,t-r,e-i+s,t-r,e-i+a,3,!0),this.v.setTripleAt(t-r,e+i-s,t-r,e+i-a,t-r,e+i-s,4,!0),this.v.setTripleAt(t-r+s,e+i,t-r+s,e+i,t-r+a,e+i,5,!0),this.v.setTripleAt(t+r-s,e+i,t+r-a,e+i,t+r-s,e+i,6,!0),this.v.setTripleAt(t+r,e+i-s,t+r,e+i-s,t+r,e+i-a,7,!0)):(this.v.setTripleAt(t-r,e-i,t-r+a,e-i,t-r,e-i,1,!0),this.v.setTripleAt(t-r,e+i,t-r,e+i-a,t-r,e+i,2,!0),this.v.setTripleAt(t+r,e+i,t+r-a,e+i,t+r,e+i,3,!0)))},getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:i},extendPrototype([DynamicPropertyContainer],t),t}(),f={getShapeProp:function(t,e,r){var i;return 3===r||4===r?i=(3===r?e.pt:e.ks).k.length?new h(t,e,r):new n(t,e,r):5===r?i=new c(t,e):6===r?i=new l(t,e):7===r&&(i=new p(t,e)),i.k&&t.addDynamicProperty(i),i},getConstructorFunction:function(){return n},getKeyframedConstructorFunction:function(){return h}};return f}(),Matrix=function(){var t=Math.cos,e=Math.sin,r=Math.tan,i=Math.round;function s(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function a(r){if(0===r)return this;var i=t(r),s=e(r);return this._t(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1)}function n(r){if(0===r)return this;var i=t(r),s=e(r);return this._t(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1)}function o(r){if(0===r)return this;var i=t(r),s=e(r);return this._t(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1)}function h(r){if(0===r)return this;var i=t(r),s=e(r);return this._t(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1)}function l(t,e){return this._t(1,e,t,1,0,0)}function p(t,e){return this.shear(r(t),r(e))}function c(i,s){var a=t(s),n=e(s);return this._t(a,n,0,0,-n,a,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,r(i),1,0,0,0,0,1,0,0,0,0,1)._t(a,-n,0,0,n,a,0,0,0,0,1,0,0,0,0,1)}function f(t,e,r){return r||0===r||(r=1),1===t&&1===e&&1===r?this:this._t(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1)}function d(t,e,r,i,s,a,n,o,h,l,p,c,f,d,u,m){return this.props[0]=t,this.props[1]=e,this.props[2]=r,this.props[3]=i,this.props[4]=s,this.props[5]=a,this.props[6]=n,this.props[7]=o,this.props[8]=h,this.props[9]=l,this.props[10]=p,this.props[11]=c,this.props[12]=f,this.props[13]=d,this.props[14]=u,this.props[15]=m,this}function u(t,e,r){return r=r||0,0!==t||0!==e||0!==r?this._t(1,0,0,0,0,1,0,0,0,0,1,0,t,e,r,1):this}function m(t,e,r,i,s,a,n,o,h,l,p,c,f,d,u,m){var y=this.props;if(1===t&&0===e&&0===r&&0===i&&0===s&&1===a&&0===n&&0===o&&0===h&&0===l&&1===p&&0===c)return y[12]=y[12]*t+y[15]*f,y[13]=y[13]*a+y[15]*d,y[14]=y[14]*p+y[15]*u,y[15]*=m,this._identityCalculated=!1,this;var g=y[0],v=y[1],b=y[2],_=y[3],P=y[4],E=y[5],S=y[6],x=y[7],A=y[8],w=y[9],C=y[10],k=y[11],T=y[12],D=y[13],M=y[14],F=y[15];return y[0]=g*t+v*s+b*h+_*f,y[1]=g*e+v*a+b*l+_*d,y[2]=g*r+v*n+b*p+_*u,y[3]=g*i+v*o+b*c+_*m,y[4]=P*t+E*s+S*h+x*f,y[5]=P*e+E*a+S*l+x*d,y[6]=P*r+E*n+S*p+x*u,y[7]=P*i+E*o+S*c+x*m,y[8]=A*t+w*s+C*h+k*f,y[9]=A*e+w*a+C*l+k*d,y[10]=A*r+w*n+C*p+k*u,y[11]=A*i+w*o+C*c+k*m,y[12]=T*t+D*s+M*h+F*f,y[13]=T*e+D*a+M*l+F*d,y[14]=T*r+D*n+M*p+F*u,y[15]=T*i+D*o+M*c+F*m,this._identityCalculated=!1,this}function y(){return this._identityCalculated||(this._identity=!(1!==this.props[0]||0!==this.props[1]||0!==this.props[2]||0!==this.props[3]||0!==this.props[4]||1!==this.props[5]||0!==this.props[6]||0!==this.props[7]||0!==this.props[8]||0!==this.props[9]||1!==this.props[10]||0!==this.props[11]||0!==this.props[12]||0!==this.props[13]||0!==this.props[14]||1!==this.props[15]),this._identityCalculated=!0),this._identity}function g(t){for(var e=0;e<16;){if(t.props[e]!==this.props[e])return!1;e+=1}return!0}function v(t){var e;for(e=0;e<16;e+=1)t.props[e]=this.props[e];return t}function b(t){var e;for(e=0;e<16;e+=1)this.props[e]=t[e]}function _(t,e,r){return{x:t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12],y:t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13],z:t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]}}function P(t,e,r){return t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12]}function E(t,e,r){return t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13]}function S(t,e,r){return t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]}function x(){var t=this.props[0]*this.props[5]-this.props[1]*this.props[4],e=this.props[5]/t,r=-this.props[1]/t,i=-this.props[4]/t,s=this.props[0]/t,a=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/t,n=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/t,o=new Matrix;return o.props[0]=e,o.props[1]=r,o.props[4]=i,o.props[5]=s,o.props[12]=a,o.props[13]=n,o}function A(t){return this.getInverseMatrix().applyToPointArray(t[0],t[1],t[2]||0)}function w(t){var e,r=t.length,i=[];for(e=0;e<r;e+=1)i[e]=A(t[e]);return i}function C(t,e,r){var i=createTypedArray("float32",6);if(this.isIdentity())i[0]=t[0],i[1]=t[1],i[2]=e[0],i[3]=e[1],i[4]=r[0],i[5]=r[1];else{var s=this.props[0],a=this.props[1],n=this.props[4],o=this.props[5],h=this.props[12],l=this.props[13];i[0]=t[0]*s+t[1]*n+h,i[1]=t[0]*a+t[1]*o+l,i[2]=e[0]*s+e[1]*n+h,i[3]=e[0]*a+e[1]*o+l,i[4]=r[0]*s+r[1]*n+h,i[5]=r[0]*a+r[1]*o+l}return i}function k(t,e,r){return this.isIdentity()?[t,e,r]:[t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12],t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13],t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]]}function T(t,e){if(this.isIdentity())return t+","+e;var r=this.props;return Math.round(100*(t*r[0]+e*r[4]+r[12]))/100+","+Math.round(100*(t*r[1]+e*r[5]+r[13]))/100}function D(){for(var t=0,e=this.props,r="matrix3d(";t<16;)r+=i(1e4*e[t])/1e4,r+=15===t?")":",",t+=1;return r}function M(t){return t<1e-6&&t>0||t>-1e-6&&t<0?i(1e4*t)/1e4:t}function F(){var t=this.props;return"matrix("+M(t[0])+","+M(t[1])+","+M(t[4])+","+M(t[5])+","+M(t[12])+","+M(t[13])+")"}return function(){this.reset=s,this.rotate=a,this.rotateX=n,this.rotateY=o,this.rotateZ=h,this.skew=p,this.skewFromAxis=c,this.shear=l,this.scale=f,this.setTransform=d,this.translate=u,this.transform=m,this.applyToPoint=_,this.applyToX=P,this.applyToY=E,this.applyToZ=S,this.applyToPointArray=k,this.applyToTriplePoints=C,this.applyToPointStringified=T,this.toCSS=D,this.to2dCSS=F,this.clone=v,this.cloneFromProps=b,this.equals=g,this.inversePoints=w,this.inversePoint=A,this.getInverseMatrix=x,this._t=this.transform,this.isIdentity=y,this._identity=!0,this._identityCalculated=!1,this.props=createTypedArray("float32",16),this.reset()}}();function _typeof$3(t){return _typeof$3="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof$3(t)}var lottie={},standalone="__[STANDALONE]__",animationData="__[ANIMATIONDATA]__",renderer="";function setLocation(t){setLocationHref(t)}function searchAnimations(){!0===standalone?animationManager.searchAnimations(animationData,standalone,renderer):animationManager.searchAnimations()}function setSubframeRendering(t){setSubframeEnabled(t)}function setPrefix(t){setIdPrefix(t)}function loadAnimation(t){return!0===standalone&&(t.animationData=JSON.parse(animationData)),animationManager.loadAnimation(t)}function setQuality(t){if("string"==typeof t)switch(t){case"high":setDefaultCurveSegments(200);break;default:case"medium":setDefaultCurveSegments(50);break;case"low":setDefaultCurveSegments(10)}else!isNaN(t)&&t>1&&setDefaultCurveSegments(t);getDefaultCurveSegments()>=50?roundValues(!1):roundValues(!0)}function inBrowser(){return"undefined"!=typeof navigator}function installPlugin(t,e){"expressions"===t&&setExpressionsPlugin(e)}function getFactory(t){switch(t){case"propertyFactory":return PropertyFactory;case"shapePropertyFactory":return ShapePropertyFactory;case"matrix":return Matrix;default:return null}}function checkReady(){"complete"===document.readyState&&(clearInterval(readyStateCheckInterval),searchAnimations())}function getQueryVariable(t){for(var e=queryString.split("&"),r=0;r<e.length;r+=1){var i=e[r].split("=");if(decodeURIComponent(i[0])==t)return decodeURIComponent(i[1])}return null}lottie.play=animationManager.play,lottie.pause=animationManager.pause,lottie.setLocationHref=setLocation,lottie.togglePause=animationManager.togglePause,lottie.setSpeed=animationManager.setSpeed,lottie.setDirection=animationManager.setDirection,lottie.stop=animationManager.stop,lottie.searchAnimations=searchAnimations,lottie.registerAnimation=animationManager.registerAnimation,lottie.loadAnimation=loadAnimation,lottie.setSubframeRendering=setSubframeRendering,lottie.resize=animationManager.resize,lottie.goToAndStop=animationManager.goToAndStop,lottie.destroy=animationManager.destroy,lottie.setQuality=setQuality,lottie.inBrowser=inBrowser,lottie.installPlugin=installPlugin,lottie.freeze=animationManager.freeze,lottie.unfreeze=animationManager.unfreeze,lottie.setVolume=animationManager.setVolume,lottie.mute=animationManager.mute,lottie.unmute=animationManager.unmute,lottie.getRegisteredAnimations=animationManager.getRegisteredAnimations,lottie.useWebWorker=setWebWorker,lottie.setIDPrefix=setPrefix,lottie.__getFactory=getFactory,lottie.version="5.10.0";var queryString="";if(standalone){var scripts=document.getElementsByTagName("script"),index=scripts.length-1,myScript=scripts[index]||{src:""};queryString=myScript.src?myScript.src.replace(/^[^\?]+\??/,""):"",renderer=getQueryVariable("renderer")}var readyStateCheckInterval=setInterval(checkReady,100);try{"object"!==_typeof$3(exports)&&(window.bodymovin=lottie)}catch(t){}var ShapeModifiers=function(){var t={},e={};return t.registerModifier=function(t,r){e[t]||(e[t]=r)},t.getModifier=function(t,r,i){return new e[t](r,i)},t}();function ShapeModifier(){}function TrimModifier(){}function PuckerAndBloatModifier(){}ShapeModifier.prototype.initModifierProperties=function(){},ShapeModifier.prototype.addShapeToModifier=function(){},ShapeModifier.prototype.addShape=function(t){if(!this.closed){t.sh.container.addDynamicProperty(t.sh);var e={shape:t.sh,data:t,localShapeCollection:shapeCollectionPool.newShapeCollection()};this.shapes.push(e),this.addShapeToModifier(e),this._isAnimated&&t.setAsAnimated()}},ShapeModifier.prototype.init=function(t,e){this.shapes=[],this.elem=t,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e),this.frameId=initialDefaultFrame,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},ShapeModifier.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},extendPrototype([DynamicPropertyContainer],ShapeModifier),extendPrototype([ShapeModifier],TrimModifier),TrimModifier.prototype.initModifierProperties=function(t,e){this.s=PropertyFactory.getProp(t,e.s,0,.01,this),this.e=PropertyFactory.getProp(t,e.e,0,.01,this),this.o=PropertyFactory.getProp(t,e.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=e.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},TrimModifier.prototype.addShapeToModifier=function(t){t.pathsData=[]},TrimModifier.prototype.calculateShapeEdges=function(t,e,r,i,s){var a=[];e<=1?a.push({s:t,e:e}):t>=1?a.push({s:t-1,e:e-1}):(a.push({s:t,e:1}),a.push({s:0,e:e-1}));var n,o,h=[],l=a.length;for(n=0;n<l;n+=1){var p,c;(o=a[n]).e*s<i||o.s*s>i+r||(p=o.s*s<=i?0:(o.s*s-i)/r,c=o.e*s>=i+r?1:(o.e*s-i)/r,h.push([p,c]))}return h.length||h.push([0,0]),h},TrimModifier.prototype.releasePathsData=function(t){var e,r=t.length;for(e=0;e<r;e+=1)segmentsLengthPool.release(t[e]);return t.length=0,t},TrimModifier.prototype.processShapes=function(t){var e,r,i,s;if(this._mdf||t){var a=this.o.v%360/360;if(a<0&&(a+=1),(e=this.s.v>1?1+a:this.s.v<0?0+a:this.s.v+a)>(r=this.e.v>1?1+a:this.e.v<0?0+a:this.e.v+a)){var n=e;e=r,r=n}e=1e-4*Math.round(1e4*e),r=1e-4*Math.round(1e4*r),this.sValue=e,this.eValue=r}else e=this.sValue,r=this.eValue;var o,h,l,p,c,f=this.shapes.length,d=0;if(r===e)for(s=0;s<f;s+=1)this.shapes[s].localShapeCollection.releaseShapes(),this.shapes[s].shape._mdf=!0,this.shapes[s].shape.paths=this.shapes[s].localShapeCollection,this._mdf&&(this.shapes[s].pathsData.length=0);else if(1===r&&0===e||0===r&&1===e){if(this._mdf)for(s=0;s<f;s+=1)this.shapes[s].pathsData.length=0,this.shapes[s].shape._mdf=!0}else{var u,m,y=[];for(s=0;s<f;s+=1)if((u=this.shapes[s]).shape._mdf||this._mdf||t||2===this.m){if(h=(i=u.shape.paths)._length,c=0,!u.shape._mdf&&u.pathsData.length)c=u.totalShapeLength;else{for(l=this.releasePathsData(u.pathsData),o=0;o<h;o+=1)p=bez.getSegmentsLength(i.shapes[o]),l.push(p),c+=p.totalLength;u.totalShapeLength=c,u.pathsData=l}d+=c,u.shape._mdf=!0}else u.shape.paths=u.localShapeCollection;var g,v=e,b=r,_=0;for(s=f-1;s>=0;s-=1)if((u=this.shapes[s]).shape._mdf){for((m=u.localShapeCollection).releaseShapes(),2===this.m&&f>1?(g=this.calculateShapeEdges(e,r,u.totalShapeLength,_,d),_+=u.totalShapeLength):g=[[v,b]],h=g.length,o=0;o<h;o+=1){v=g[o][0],b=g[o][1],y.length=0,b<=1?y.push({s:u.totalShapeLength*v,e:u.totalShapeLength*b}):v>=1?y.push({s:u.totalShapeLength*(v-1),e:u.totalShapeLength*(b-1)}):(y.push({s:u.totalShapeLength*v,e:u.totalShapeLength}),y.push({s:0,e:u.totalShapeLength*(b-1)}));var P=this.addShapes(u,y[0]);if(y[0].s!==y[0].e){if(y.length>1)if(u.shape.paths.shapes[u.shape.paths._length-1].c){var E=P.pop();this.addPaths(P,m),P=this.addShapes(u,y[1],E)}else this.addPaths(P,m),P=this.addShapes(u,y[1]);this.addPaths(P,m)}}u.shape.paths=m}}},TrimModifier.prototype.addPaths=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)e.addShape(t[r])},TrimModifier.prototype.addSegment=function(t,e,r,i,s,a,n){s.setXYAt(e[0],e[1],"o",a),s.setXYAt(r[0],r[1],"i",a+1),n&&s.setXYAt(t[0],t[1],"v",a),s.setXYAt(i[0],i[1],"v",a+1)},TrimModifier.prototype.addSegmentFromArray=function(t,e,r,i){e.setXYAt(t[1],t[5],"o",r),e.setXYAt(t[2],t[6],"i",r+1),i&&e.setXYAt(t[0],t[4],"v",r),e.setXYAt(t[3],t[7],"v",r+1)},TrimModifier.prototype.addShapes=function(t,e,r){var i,s,a,n,o,h,l,p,c=t.pathsData,f=t.shape.paths.shapes,d=t.shape.paths._length,u=0,m=[],y=!0;for(r?(o=r._length,p=r._length):(r=shapePool.newElement(),o=0,p=0),m.push(r),i=0;i<d;i+=1){for(h=c[i].lengths,r.c=f[i].c,a=f[i].c?h.length:h.length+1,s=1;s<a;s+=1)if(u+(n=h[s-1]).addedLength<e.s)u+=n.addedLength,r.c=!1;else{if(u>e.e){r.c=!1;break}e.s<=u&&e.e>=u+n.addedLength?(this.addSegment(f[i].v[s-1],f[i].o[s-1],f[i].i[s],f[i].v[s],r,o,y),y=!1):(l=bez.getNewSegment(f[i].v[s-1],f[i].v[s],f[i].o[s-1],f[i].i[s],(e.s-u)/n.addedLength,(e.e-u)/n.addedLength,h[s-1]),this.addSegmentFromArray(l,r,o,y),y=!1,r.c=!1),u+=n.addedLength,o+=1}if(f[i].c&&h.length){if(n=h[s-1],u<=e.e){var g=h[s-1].addedLength;e.s<=u&&e.e>=u+g?(this.addSegment(f[i].v[s-1],f[i].o[s-1],f[i].i[0],f[i].v[0],r,o,y),y=!1):(l=bez.getNewSegment(f[i].v[s-1],f[i].v[0],f[i].o[s-1],f[i].i[0],(e.s-u)/g,(e.e-u)/g,h[s-1]),this.addSegmentFromArray(l,r,o,y),y=!1,r.c=!1)}else r.c=!1;u+=n.addedLength,o+=1}if(r._length&&(r.setXYAt(r.v[p][0],r.v[p][1],"i",p),r.setXYAt(r.v[r._length-1][0],r.v[r._length-1][1],"o",r._length-1)),u>e.e)break;i<d-1&&(r=shapePool.newElement(),y=!0,m.push(r),o=0)}return m},extendPrototype([ShapeModifier],PuckerAndBloatModifier),PuckerAndBloatModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=PropertyFactory.getProp(t,e.a,0,null,this),this._isAnimated=!!this.amount.effectsSequence.length},PuckerAndBloatModifier.prototype.processPath=function(t,e){var r=e/100,i=[0,0],s=t._length,a=0;for(a=0;a<s;a+=1)i[0]+=t.v[a][0],i[1]+=t.v[a][1];i[0]/=s,i[1]/=s;var n,o,h,l,p,c,f=shapePool.newElement();for(f.c=t.c,a=0;a<s;a+=1)n=t.v[a][0]+(i[0]-t.v[a][0])*r,o=t.v[a][1]+(i[1]-t.v[a][1])*r,h=t.o[a][0]+(i[0]-t.o[a][0])*-r,l=t.o[a][1]+(i[1]-t.o[a][1])*-r,p=t.i[a][0]+(i[0]-t.i[a][0])*-r,c=t.i[a][1]+(i[1]-t.i[a][1])*-r,f.setTripleAt(n,o,h,l,p,c,a);return f},PuckerAndBloatModifier.prototype.processShapes=function(t){var e,r,i,s,a,n,o=this.shapes.length,h=this.amount.v;if(0!==h)for(r=0;r<o;r+=1){if(n=(a=this.shapes[r]).localShapeCollection,a.shape._mdf||this._mdf||t)for(n.releaseShapes(),a.shape._mdf=!0,e=a.shape.paths.shapes,s=a.shape.paths._length,i=0;i<s;i+=1)n.addShape(this.processPath(e[i],h));a.shape.paths=a.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)};var TransformPropertyFactory=function(){var t=[0,0];function e(t,e,r){if(this.elem=t,this.frameId=-1,this.propType="transform",this.data=e,this.v=new Matrix,this.pre=new Matrix,this.appliedTransformations=0,this.initDynamicPropertyContainer(r||t),e.p&&e.p.s?(this.px=PropertyFactory.getProp(t,e.p.x,0,0,this),this.py=PropertyFactory.getProp(t,e.p.y,0,0,this),e.p.z&&(this.pz=PropertyFactory.getProp(t,e.p.z,0,0,this))):this.p=PropertyFactory.getProp(t,e.p||{k:[0,0,0]},1,0,this),e.rx){if(this.rx=PropertyFactory.getProp(t,e.rx,0,degToRads,this),this.ry=PropertyFactory.getProp(t,e.ry,0,degToRads,this),this.rz=PropertyFactory.getProp(t,e.rz,0,degToRads,this),e.or.k[0].ti){var i,s=e.or.k.length;for(i=0;i<s;i+=1)e.or.k[i].to=null,e.or.k[i].ti=null}this.or=PropertyFactory.getProp(t,e.or,1,degToRads,this),this.or.sh=!0}else this.r=PropertyFactory.getProp(t,e.r||{k:0},0,degToRads,this);e.sk&&(this.sk=PropertyFactory.getProp(t,e.sk,0,degToRads,this),this.sa=PropertyFactory.getProp(t,e.sa,0,degToRads,this)),this.a=PropertyFactory.getProp(t,e.a||{k:[0,0,0]},1,0,this),this.s=PropertyFactory.getProp(t,e.s||{k:[100,100,100]},1,.01,this),e.o?this.o=PropertyFactory.getProp(t,e.o,0,.01,t):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}return e.prototype={applyToMatrix:function(t){var e=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||e,this.a&&t.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&t.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&t.skewFromAxis(-this.sk.v,this.sa.v),this.r?t.rotate(-this.r.v):t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?t.translate(this.px.v,this.py.v,-this.pz.v):t.translate(this.px.v,this.py.v,0):t.translate(this.p.v[0],this.p.v[1],-this.p.v[2])},getValue:function(e){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||e){var r;if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var i,s;if(r=this.elem.globalData.frameRate,this.p&&this.p.keyframes&&this.p.getValueAtTime)this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(i=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/r,0),s=this.p.getValueAtTime(this.p.keyframes[0].t/r,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(i=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/r,0),s=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/r,0)):(i=this.p.pv,s=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/r,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){i=[],s=[];var a=this.px,n=this.py;a._caching.lastFrame+a.offsetTime<=a.keyframes[0].t?(i[0]=a.getValueAtTime((a.keyframes[0].t+.01)/r,0),i[1]=n.getValueAtTime((n.keyframes[0].t+.01)/r,0),s[0]=a.getValueAtTime(a.keyframes[0].t/r,0),s[1]=n.getValueAtTime(n.keyframes[0].t/r,0)):a._caching.lastFrame+a.offsetTime>=a.keyframes[a.keyframes.length-1].t?(i[0]=a.getValueAtTime(a.keyframes[a.keyframes.length-1].t/r,0),i[1]=n.getValueAtTime(n.keyframes[n.keyframes.length-1].t/r,0),s[0]=a.getValueAtTime((a.keyframes[a.keyframes.length-1].t-.01)/r,0),s[1]=n.getValueAtTime((n.keyframes[n.keyframes.length-1].t-.01)/r,0)):(i=[a.pv,n.pv],s[0]=a.getValueAtTime((a._caching.lastFrame+a.offsetTime-.01)/r,a.offsetTime),s[1]=n.getValueAtTime((n._caching.lastFrame+n.offsetTime-.01)/r,n.offsetTime))}else i=s=t;this.v.rotate(-Math.atan2(i[1]-s[1],i[0]-s[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}},precalculateMatrix:function(){if(!this.a.k&&(this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1,!this.s.effectsSequence.length)){if(this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2,this.sk){if(this.sk.effectsSequence.length||this.sa.effectsSequence.length)return;this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3}this.r?this.r.effectsSequence.length||(this.pre.rotate(-this.r.v),this.appliedTransformations=4):this.rz.effectsSequence.length||this.ry.effectsSequence.length||this.rx.effectsSequence.length||this.or.effectsSequence.length||(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}},autoOrient:function(){}},extendPrototype([DynamicPropertyContainer],e),e.prototype.addDynamicProperty=function(t){this._addDynamicProperty(t),this.elem.addDynamicProperty(t),this._isDirty=!0},e.prototype._addDynamicProperty=DynamicPropertyContainer.prototype.addDynamicProperty,{getTransformProperty:function(t,r,i){return new e(t,r,i)}}}();function RepeaterModifier(){}function RoundCornersModifier(){}function floatEqual(t,e){return 1e5*Math.abs(t-e)<=Math.min(Math.abs(t),Math.abs(e))}function floatZero(t){return Math.abs(t)<=1e-5}function lerp(t,e,r){return t*(1-r)+e*r}function lerpPoint(t,e,r){return[lerp(t[0],e[0],r),lerp(t[1],e[1],r)]}function quadRoots(t,e,r){if(0===t)return[];var i=e*e-4*t*r;if(i<0)return[];var s=-e/(2*t);if(0===i)return[s];var a=Math.sqrt(i)/(2*t);return[s-a,s+a]}function polynomialCoefficients(t,e,r,i){return[3*e-t-3*r+i,3*t-6*e+3*r,-3*t+3*e,t]}function singlePoint(t){return new PolynomialBezier(t,t,t,t,!1)}function PolynomialBezier(t,e,r,i,s){s&&pointEqual(t,e)&&(e=lerpPoint(t,i,1/3)),s&&pointEqual(r,i)&&(r=lerpPoint(t,i,2/3));var a=polynomialCoefficients(t[0],e[0],r[0],i[0]),n=polynomialCoefficients(t[1],e[1],r[1],i[1]);this.a=[a[0],n[0]],this.b=[a[1],n[1]],this.c=[a[2],n[2]],this.d=[a[3],n[3]],this.points=[t,e,r,i]}function extrema(t,e){var r=t.points[0][e],i=t.points[t.points.length-1][e];if(r>i){var s=i;i=r,r=s}for(var a=quadRoots(3*t.a[e],2*t.b[e],t.c[e]),n=0;n<a.length;n+=1)if(a[n]>0&&a[n]<1){var o=t.point(a[n])[e];o<r?r=o:o>i&&(i=o)}return{min:r,max:i}}function intersectData(t,e,r){var i=t.boundingBox();return{cx:i.cx,cy:i.cy,width:i.width,height:i.height,bez:t,t:(e+r)/2,t1:e,t2:r}}function splitData(t){var e=t.bez.split(.5);return[intersectData(e[0],t.t1,t.t),intersectData(e[1],t.t,t.t2)]}function boxIntersect(t,e){return 2*Math.abs(t.cx-e.cx)<t.width+e.width&&2*Math.abs(t.cy-e.cy)<t.height+e.height}function intersectsImpl(t,e,r,i,s,a){if(boxIntersect(t,e))if(r>=a||t.width<=i&&t.height<=i&&e.width<=i&&e.height<=i)s.push([t.t,e.t]);else{var n=splitData(t),o=splitData(e);intersectsImpl(n[0],o[0],r+1,i,s,a),intersectsImpl(n[0],o[1],r+1,i,s,a),intersectsImpl(n[1],o[0],r+1,i,s,a),intersectsImpl(n[1],o[1],r+1,i,s,a)}}function crossProduct(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function lineIntersection(t,e,r,i){var s=[t[0],t[1],1],a=[e[0],e[1],1],n=[r[0],r[1],1],o=[i[0],i[1],1],h=crossProduct(crossProduct(s,a),crossProduct(n,o));return floatZero(h[2])?null:[h[0]/h[2],h[1]/h[2]]}function polarOffset(t,e,r){return[t[0]+Math.cos(e)*r,t[1]-Math.sin(e)*r]}function pointDistance(t,e){return Math.hypot(t[0]-e[0],t[1]-e[1])}function pointEqual(t,e){return floatEqual(t[0],e[0])&&floatEqual(t[1],e[1])}function ZigZagModifier(){}function setPoint(t,e,r,i,s,a,n){var o=r-Math.PI/2,h=r+Math.PI/2,l=e[0]+Math.cos(r)*i*s,p=e[1]-Math.sin(r)*i*s;t.setTripleAt(l,p,l+Math.cos(o)*a,p-Math.sin(o)*a,l+Math.cos(h)*n,p-Math.sin(h)*n,t.length())}function getPerpendicularVector(t,e){var r=[e[0]-t[0],e[1]-t[1]],i=.5*-Math.PI;return[Math.cos(i)*r[0]-Math.sin(i)*r[1],Math.sin(i)*r[0]+Math.cos(i)*r[1]]}function getProjectingAngle(t,e){var r=0===e?t.length()-1:e-1,i=(e+1)%t.length(),s=getPerpendicularVector(t.v[r],t.v[i]);return Math.atan2(0,1)-Math.atan2(s[1],s[0])}function zigZagCorner(t,e,r,i,s,a,n){var o=getProjectingAngle(e,r),h=e.v[r%e._length],l=e.v[0===r?e._length-1:r-1],p=e.v[(r+1)%e._length],c=2===a?Math.sqrt(Math.pow(h[0]-l[0],2)+Math.pow(h[1]-l[1],2)):0,f=2===a?Math.sqrt(Math.pow(h[0]-p[0],2)+Math.pow(h[1]-p[1],2)):0;setPoint(t,e.v[r%e._length],o,n,i,f/(2*(s+1)),c/(2*(s+1)),a)}function zigZagSegment(t,e,r,i,s,a){for(var n=0;n<i;n+=1){var o=(n+1)/(i+1),h=2===s?Math.sqrt(Math.pow(e.points[3][0]-e.points[0][0],2)+Math.pow(e.points[3][1]-e.points[0][1],2)):0,l=e.normalAngle(o);setPoint(t,e.point(o),l,a,r,h/(2*(i+1)),h/(2*(i+1)),s),a=-a}return a}function linearOffset(t,e,r){var i=Math.atan2(e[0]-t[0],e[1]-t[1]);return[polarOffset(t,i,r),polarOffset(e,i,r)]}function offsetSegment(t,e){var r,i,s,a,n,o,h;r=(h=linearOffset(t.points[0],t.points[1],e))[0],i=h[1],s=(h=linearOffset(t.points[1],t.points[2],e))[0],a=h[1],n=(h=linearOffset(t.points[2],t.points[3],e))[0],o=h[1];var l=lineIntersection(r,i,s,a);null===l&&(l=i);var p=lineIntersection(n,o,s,a);return null===p&&(p=n),new PolynomialBezier(r,l,p,o)}function joinLines(t,e,r,i,s){var a=e.points[3],n=r.points[0];if(3===i)return a;if(pointEqual(a,n))return a;if(2===i){var o=-e.tangentAngle(1),h=-r.tangentAngle(0)+Math.PI,l=lineIntersection(a,polarOffset(a,o+Math.PI/2,100),n,polarOffset(n,o+Math.PI/2,100)),p=l?pointDistance(l,a):pointDistance(a,n)/2,c=polarOffset(a,o,2*p*roundCorner);return t.setXYAt(c[0],c[1],"o",t.length()-1),c=polarOffset(n,h,2*p*roundCorner),t.setTripleAt(n[0],n[1],n[0],n[1],c[0],c[1],t.length()),n}var f=lineIntersection(pointEqual(a,e.points[2])?e.points[0]:e.points[2],a,n,pointEqual(n,r.points[1])?r.points[3]:r.points[1]);return f&&pointDistance(f,a)<s?(t.setTripleAt(f[0],f[1],f[0],f[1],f[0],f[1],t.length()),f):a}function getIntersection(t,e){var r=t.intersections(e);return r.length&&floatEqual(r[0][0],1)&&r.shift(),r.length?r[0]:null}function pruneSegmentIntersection(t,e){var r=t.slice(),i=e.slice(),s=getIntersection(t[t.length-1],e[0]);return s&&(r[t.length-1]=t[t.length-1].split(s[0])[0],i[0]=e[0].split(s[1])[1]),t.length>1&&e.length>1&&(s=getIntersection(t[0],e[e.length-1]))?[[t[0].split(s[0])[0]],[e[e.length-1].split(s[1])[1]]]:[r,i]}function pruneIntersections(t){for(var e,r=1;r<t.length;r+=1)e=pruneSegmentIntersection(t[r-1],t[r]),t[r-1]=e[0],t[r]=e[1];return t.length>1&&(e=pruneSegmentIntersection(t[t.length-1],t[0]),t[t.length-1]=e[0],t[0]=e[1]),t}function offsetSegmentSplit(t,e){var r,i,s,a,n=t.inflectionPoints();if(0===n.length)return[offsetSegment(t,e)];if(1===n.length||floatEqual(n[1],1))return r=(s=t.split(n[0]))[0],i=s[1],[offsetSegment(r,e),offsetSegment(i,e)];r=(s=t.split(n[0]))[0];var o=(n[1]-n[0])/(1-n[0]);return a=(s=s[1].split(o))[0],i=s[1],[offsetSegment(r,e),offsetSegment(a,e),offsetSegment(i,e)]}function OffsetPathModifier(){}function getFontProperties(t){for(var e=t.fStyle?t.fStyle.split(" "):[],r="normal",i="normal",s=e.length,a=0;a<s;a+=1)switch(e[a].toLowerCase()){case"italic":i="italic";break;case"bold":r="700";break;case"black":r="900";break;case"medium":r="500";break;case"regular":case"normal":r="400";break;case"light":case"thin":r="200"}return{style:i,weight:t.fWeight||r}}extendPrototype([ShapeModifier],RepeaterModifier),RepeaterModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=PropertyFactory.getProp(t,e.c,0,null,this),this.o=PropertyFactory.getProp(t,e.o,0,null,this),this.tr=TransformPropertyFactory.getTransformProperty(t,e.tr,this),this.so=PropertyFactory.getProp(t,e.tr.so,0,.01,this),this.eo=PropertyFactory.getProp(t,e.tr.eo,0,.01,this),this.data=e,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new Matrix,this.rMatrix=new Matrix,this.sMatrix=new Matrix,this.tMatrix=new Matrix,this.matrix=new Matrix},RepeaterModifier.prototype.applyTransforms=function(t,e,r,i,s,a){var n=a?-1:1,o=i.s.v[0]+(1-i.s.v[0])*(1-s),h=i.s.v[1]+(1-i.s.v[1])*(1-s);t.translate(i.p.v[0]*n*s,i.p.v[1]*n*s,i.p.v[2]),e.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),e.rotate(-i.r.v*n*s),e.translate(i.a.v[0],i.a.v[1],i.a.v[2]),r.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),r.scale(a?1/o:o,a?1/h:h),r.translate(i.a.v[0],i.a.v[1],i.a.v[2])},RepeaterModifier.prototype.init=function(t,e,r,i){for(this.elem=t,this.arr=e,this.pos=r,this.elemsData=i,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e[r]);r>0;)r-=1,this._elements.unshift(e[r]);this.dynamicProperties.length?this.k=!0:this.getValue(!0)},RepeaterModifier.prototype.resetElements=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e]._processed=!1,"gr"===t[e].ty&&this.resetElements(t[e].it)},RepeaterModifier.prototype.cloneElements=function(t){var e=JSON.parse(JSON.stringify(t));return this.resetElements(e),e},RepeaterModifier.prototype.changeGroupRender=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)t[r]._render=e,"gr"===t[r].ty&&this.changeGroupRender(t[r].it,e)},RepeaterModifier.prototype.processShapes=function(t){var e,r,i,s,a,n=!1;if(this._mdf||t){var o,h=Math.ceil(this.c.v);if(this._groups.length<h){for(;this._groups.length<h;){var l={it:this.cloneElements(this._elements),ty:"gr"};l.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,l),this._groups.splice(0,0,l),this._currentCopies+=1}this.elem.reloadShapes(),n=!0}for(a=0,i=0;i<=this._groups.length-1;i+=1){if(o=a<h,this._groups[i]._render=o,this.changeGroupRender(this._groups[i].it,o),!o){var p=this.elemsData[i].it,c=p[p.length-1];0!==c.transform.op.v?(c.transform.op._mdf=!0,c.transform.op.v=0):c.transform.op._mdf=!1}a+=1}this._currentCopies=h;var f=this.o.v,d=f%1,u=f>0?Math.floor(f):Math.ceil(f),m=this.pMatrix.props,y=this.rMatrix.props,g=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var v,b,_=0;if(f>0){for(;_<u;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),_+=1;d&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,d,!1),_+=d)}else if(f<0){for(;_>u;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),_-=1;d&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-d,!0),_-=d)}for(i=1===this.data.m?0:this._currentCopies-1,s=1===this.data.m?1:-1,a=this._currentCopies;a;){if(b=(r=(e=this.elemsData[i].it)[e.length-1].transform.mProps.v.props).length,e[e.length-1].transform.mProps._mdf=!0,e[e.length-1].transform.op._mdf=!0,e[e.length-1].transform.op.v=1===this._currentCopies?this.so.v:this.so.v+(this.eo.v-this.so.v)*(i/(this._currentCopies-1)),0!==_){for((0!==i&&1===s||i!==this._currentCopies-1&&-1===s)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8],y[9],y[10],y[11],y[12],y[13],y[14],y[15]),this.matrix.transform(g[0],g[1],g[2],g[3],g[4],g[5],g[6],g[7],g[8],g[9],g[10],g[11],g[12],g[13],g[14],g[15]),this.matrix.transform(m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15]),v=0;v<b;v+=1)r[v]=this.matrix.props[v];this.matrix.reset()}else for(this.matrix.reset(),v=0;v<b;v+=1)r[v]=this.matrix.props[v];_+=1,a-=1,i+=s}}else for(a=this._currentCopies,i=0,s=1;a;)r=(e=this.elemsData[i].it)[e.length-1].transform.mProps.v.props,e[e.length-1].transform.mProps._mdf=!1,e[e.length-1].transform.op._mdf=!1,a-=1,i+=s;return n},RepeaterModifier.prototype.addShape=function(){},extendPrototype([ShapeModifier],RoundCornersModifier),RoundCornersModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=PropertyFactory.getProp(t,e.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},RoundCornersModifier.prototype.processPath=function(t,e){var r,i=shapePool.newElement();i.c=t.c;var s,a,n,o,h,l,p,c,f,d,u,m,y=t._length,g=0;for(r=0;r<y;r+=1)s=t.v[r],n=t.o[r],a=t.i[r],s[0]===n[0]&&s[1]===n[1]&&s[0]===a[0]&&s[1]===a[1]?0!==r&&r!==y-1||t.c?(o=0===r?t.v[y-1]:t.v[r-1],l=(h=Math.sqrt(Math.pow(s[0]-o[0],2)+Math.pow(s[1]-o[1],2)))?Math.min(h/2,e)/h:0,p=u=s[0]+(o[0]-s[0])*l,c=m=s[1]-(s[1]-o[1])*l,f=p-(p-s[0])*roundCorner,d=c-(c-s[1])*roundCorner,i.setTripleAt(p,c,f,d,u,m,g),g+=1,o=r===y-1?t.v[0]:t.v[r+1],l=(h=Math.sqrt(Math.pow(s[0]-o[0],2)+Math.pow(s[1]-o[1],2)))?Math.min(h/2,e)/h:0,p=f=s[0]+(o[0]-s[0])*l,c=d=s[1]+(o[1]-s[1])*l,u=p-(p-s[0])*roundCorner,m=c-(c-s[1])*roundCorner,i.setTripleAt(p,c,f,d,u,m,g),g+=1):(i.setTripleAt(s[0],s[1],n[0],n[1],a[0],a[1],g),g+=1):(i.setTripleAt(t.v[r][0],t.v[r][1],t.o[r][0],t.o[r][1],t.i[r][0],t.i[r][1],g),g+=1);return i},RoundCornersModifier.prototype.processShapes=function(t){var e,r,i,s,a,n,o=this.shapes.length,h=this.rd.v;if(0!==h)for(r=0;r<o;r+=1){if(n=(a=this.shapes[r]).localShapeCollection,a.shape._mdf||this._mdf||t)for(n.releaseShapes(),a.shape._mdf=!0,e=a.shape.paths.shapes,s=a.shape.paths._length,i=0;i<s;i+=1)n.addShape(this.processPath(e[i],h));a.shape.paths=a.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)},PolynomialBezier.prototype.point=function(t){return[((this.a[0]*t+this.b[0])*t+this.c[0])*t+this.d[0],((this.a[1]*t+this.b[1])*t+this.c[1])*t+this.d[1]]},PolynomialBezier.prototype.derivative=function(t){return[(3*t*this.a[0]+2*this.b[0])*t+this.c[0],(3*t*this.a[1]+2*this.b[1])*t+this.c[1]]},PolynomialBezier.prototype.tangentAngle=function(t){var e=this.derivative(t);return Math.atan2(e[1],e[0])},PolynomialBezier.prototype.normalAngle=function(t){var e=this.derivative(t);return Math.atan2(e[0],e[1])},PolynomialBezier.prototype.inflectionPoints=function(){var t=this.a[1]*this.b[0]-this.a[0]*this.b[1];if(floatZero(t))return[];var e=-.5*(this.a[1]*this.c[0]-this.a[0]*this.c[1])/t,r=e*e-1/3*(this.b[1]*this.c[0]-this.b[0]*this.c[1])/t;if(r<0)return[];var i=Math.sqrt(r);return floatZero(i)?i>0&&i<1?[e]:[]:[e-i,e+i].filter((function(t){return t>0&&t<1}))},PolynomialBezier.prototype.split=function(t){if(t<=0)return[singlePoint(this.points[0]),this];if(t>=1)return[this,singlePoint(this.points[this.points.length-1])];var e=lerpPoint(this.points[0],this.points[1],t),r=lerpPoint(this.points[1],this.points[2],t),i=lerpPoint(this.points[2],this.points[3],t),s=lerpPoint(e,r,t),a=lerpPoint(r,i,t),n=lerpPoint(s,a,t);return[new PolynomialBezier(this.points[0],e,s,n,!0),new PolynomialBezier(n,a,i,this.points[3],!0)]},PolynomialBezier.prototype.bounds=function(){return{x:extrema(this,0),y:extrema(this,1)}},PolynomialBezier.prototype.boundingBox=function(){var t=this.bounds();return{left:t.x.min,right:t.x.max,top:t.y.min,bottom:t.y.max,width:t.x.max-t.x.min,height:t.y.max-t.y.min,cx:(t.x.max+t.x.min)/2,cy:(t.y.max+t.y.min)/2}},PolynomialBezier.prototype.intersections=function(t,e,r){void 0===e&&(e=2),void 0===r&&(r=7);var i=[];return intersectsImpl(intersectData(this,0,1),intersectData(t,0,1),0,e,i,r),i},PolynomialBezier.shapeSegment=function(t,e){var r=(e+1)%t.length();return new PolynomialBezier(t.v[e],t.o[e],t.i[r],t.v[r],!0)},PolynomialBezier.shapeSegmentInverted=function(t,e){var r=(e+1)%t.length();return new PolynomialBezier(t.v[r],t.i[r],t.o[e],t.v[e],!0)},extendPrototype([ShapeModifier],ZigZagModifier),ZigZagModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amplitude=PropertyFactory.getProp(t,e.s,0,null,this),this.frequency=PropertyFactory.getProp(t,e.r,0,null,this),this.pointsType=PropertyFactory.getProp(t,e.pt,0,null,this),this._isAnimated=0!==this.amplitude.effectsSequence.length||0!==this.frequency.effectsSequence.length||0!==this.pointsType.effectsSequence.length},ZigZagModifier.prototype.processPath=function(t,e,r,i){var s=t._length,a=shapePool.newElement();if(a.c=t.c,t.c||(s-=1),0===s)return a;var n=-1,o=PolynomialBezier.shapeSegment(t,0);zigZagCorner(a,t,0,e,r,i,n);for(var h=0;h<s;h+=1)n=zigZagSegment(a,o,e,r,i,-n),o=h!==s-1||t.c?PolynomialBezier.shapeSegment(t,(h+1)%s):null,zigZagCorner(a,t,h+1,e,r,i,n);return a},ZigZagModifier.prototype.processShapes=function(t){var e,r,i,s,a,n,o=this.shapes.length,h=this.amplitude.v,l=Math.max(0,Math.round(this.frequency.v)),p=this.pointsType.v;if(0!==h)for(r=0;r<o;r+=1){if(n=(a=this.shapes[r]).localShapeCollection,a.shape._mdf||this._mdf||t)for(n.releaseShapes(),a.shape._mdf=!0,e=a.shape.paths.shapes,s=a.shape.paths._length,i=0;i<s;i+=1)n.addShape(this.processPath(e[i],h,l,p));a.shape.paths=a.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)},extendPrototype([ShapeModifier],OffsetPathModifier),OffsetPathModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=PropertyFactory.getProp(t,e.a,0,null,this),this.miterLimit=PropertyFactory.getProp(t,e.ml,0,null,this),this.lineJoin=e.lj,this._isAnimated=0!==this.amount.effectsSequence.length},OffsetPathModifier.prototype.processPath=function(t,e,r,i){var s=shapePool.newElement();s.c=t.c;var a,n,o,h=t.length();t.c||(h-=1);var l=[];for(a=0;a<h;a+=1)o=PolynomialBezier.shapeSegment(t,a),l.push(offsetSegmentSplit(o,e));if(!t.c)for(a=h-1;a>=0;a-=1)o=PolynomialBezier.shapeSegmentInverted(t,a),l.push(offsetSegmentSplit(o,e));l=pruneIntersections(l);var p=null,c=null;for(a=0;a<l.length;a+=1){var f=l[a];for(c&&(p=joinLines(s,c,f[0],r,i)),c=f[f.length-1],n=0;n<f.length;n+=1)o=f[n],p&&pointEqual(o.points[0],p)?s.setXYAt(o.points[1][0],o.points[1][1],"o",s.length()-1):s.setTripleAt(o.points[0][0],o.points[0][1],o.points[1][0],o.points[1][1],o.points[0][0],o.points[0][1],s.length()),s.setTripleAt(o.points[3][0],o.points[3][1],o.points[3][0],o.points[3][1],o.points[2][0],o.points[2][1],s.length()),p=o.points[3]}return l.length&&joinLines(s,c,l[0][0],r,i),s},OffsetPathModifier.prototype.processShapes=function(t){var e,r,i,s,a,n,o=this.shapes.length,h=this.amount.v,l=this.miterLimit.v,p=this.lineJoin;if(0!==h)for(r=0;r<o;r+=1){if(n=(a=this.shapes[r]).localShapeCollection,a.shape._mdf||this._mdf||t)for(n.releaseShapes(),a.shape._mdf=!0,e=a.shape.paths.shapes,s=a.shape.paths._length,i=0;i<s;i+=1)n.addShape(this.processPath(e[i],h,p,l));a.shape.paths=a.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)};var FontManager=function(){var t={w:0,size:0,shapes:[],data:{shapes:[]}},e=[];e=e.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var r=["d83cdffb","d83cdffc","d83cdffd","d83cdffe","d83cdfff"],i=[65039,8205];function s(t,e){var r=createTag("span");r.setAttribute("aria-hidden",!0),r.style.fontFamily=e;var i=createTag("span");i.innerText="giItT1WQy@!-/#",r.style.position="absolute",r.style.left="-10000px",r.style.top="-10000px",r.style.fontSize="300px",r.style.fontVariant="normal",r.style.fontStyle="normal",r.style.fontWeight="normal",r.style.letterSpacing="0",r.appendChild(i),document.body.appendChild(r);var s=i.offsetWidth;return i.style.fontFamily=function(t){var e,r=t.split(","),i=r.length,s=[];for(e=0;e<i;e+=1)"sans-serif"!==r[e]&&"monospace"!==r[e]&&s.push(r[e]);return s.join(",")}(t)+", "+e,{node:i,w:s,parent:r}}function a(t,e){var r,i=document.body&&e?"svg":"canvas",s=getFontProperties(t);if("svg"===i){var a=createNS("text");a.style.fontSize="100px",a.setAttribute("font-family",t.fFamily),a.setAttribute("font-style",s.style),a.setAttribute("font-weight",s.weight),a.textContent="1",t.fClass?(a.style.fontFamily="inherit",a.setAttribute("class",t.fClass)):a.style.fontFamily=t.fFamily,e.appendChild(a),r=a}else{var n=new OffscreenCanvas(500,500).getContext("2d");n.font=s.style+" "+s.weight+" 100px "+t.fFamily,r=n}return{measureText:function(t){return"svg"===i?(r.textContent=t,r.getComputedTextLength()):r.measureText(t).width}}}var n=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)};n.isModifier=function(t,e){var i=t.toString(16)+e.toString(16);return-1!==r.indexOf(i)},n.isZeroWidthJoiner=function(t,e){return e?t===i[0]&&e===i[1]:t===i[1]},n.isCombinedCharacter=function(t){return-1!==e.indexOf(t)};var o={addChars:function(t){if(t){var e;this.chars||(this.chars=[]);var r,i,s=t.length,a=this.chars.length;for(e=0;e<s;e+=1){for(r=0,i=!1;r<a;)this.chars[r].style===t[e].style&&this.chars[r].fFamily===t[e].fFamily&&this.chars[r].ch===t[e].ch&&(i=!0),r+=1;i||(this.chars.push(t[e]),a+=1)}}},addFonts:function(t,e){if(t){if(this.chars)return this.isLoaded=!0,void(this.fonts=t.list);if(!document.body)return this.isLoaded=!0,t.list.forEach((function(t){t.helper=a(t),t.cache={}})),void(this.fonts=t.list);var r,i=t.list,n=i.length,o=n;for(r=0;r<n;r+=1){var h,l,p=!0;if(i[r].loaded=!1,i[r].monoCase=s(i[r].fFamily,"monospace"),i[r].sansCase=s(i[r].fFamily,"sans-serif"),i[r].fPath){if("p"===i[r].fOrigin||3===i[r].origin){if((h=document.querySelectorAll('style[f-forigin="p"][f-family="'+i[r].fFamily+'"], style[f-origin="3"][f-family="'+i[r].fFamily+'"]')).length>0&&(p=!1),p){var c=createTag("style");c.setAttribute("f-forigin",i[r].fOrigin),c.setAttribute("f-origin",i[r].origin),c.setAttribute("f-family",i[r].fFamily),c.type="text/css",c.innerText="@font-face {font-family: "+i[r].fFamily+"; font-style: normal; src: url('"+i[r].fPath+"');}",e.appendChild(c)}}else if("g"===i[r].fOrigin||1===i[r].origin){for(h=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),l=0;l<h.length;l+=1)-1!==h[l].href.indexOf(i[r].fPath)&&(p=!1);if(p){var f=createTag("link");f.setAttribute("f-forigin",i[r].fOrigin),f.setAttribute("f-origin",i[r].origin),f.type="text/css",f.rel="stylesheet",f.href=i[r].fPath,document.body.appendChild(f)}}else if("t"===i[r].fOrigin||2===i[r].origin){for(h=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),l=0;l<h.length;l+=1)i[r].fPath===h[l].src&&(p=!1);if(p){var d=createTag("link");d.setAttribute("f-forigin",i[r].fOrigin),d.setAttribute("f-origin",i[r].origin),d.setAttribute("rel","stylesheet"),d.setAttribute("href",i[r].fPath),e.appendChild(d)}}}else i[r].loaded=!0,o-=1;i[r].helper=a(i[r],e),i[r].cache={},this.fonts.push(i[r])}0===o?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}else this.isLoaded=!0},getCharData:function(e,r,i){for(var s=0,a=this.chars.length;s<a;){if(this.chars[s].ch===e&&this.chars[s].style===r&&this.chars[s].fFamily===i)return this.chars[s];s+=1}return("string"==typeof e&&13!==e.charCodeAt(0)||!e)&&console&&console.warn&&!this._warned&&(this._warned=!0,console.warn("Missing character from exported characters list: ",e,r,i)),t},getFontByName:function(t){for(var e=0,r=this.fonts.length;e<r;){if(this.fonts[e].fName===t)return this.fonts[e];e+=1}return this.fonts[0]},measureText:function(t,e,r){var i=this.getFontByName(e),s=t.charCodeAt(0);if(!i.cache[s+1]){var a=i.helper;if(" "===t){var n=a.measureText("|"+t+"|"),o=a.measureText("||");i.cache[s+1]=(n-o)/100}else i.cache[s+1]=a.measureText(t)/100}return i.cache[s+1]*r},checkLoadedFonts:function(){var t,e,r,i=this.fonts.length,s=i;for(t=0;t<i;t+=1)this.fonts[t].loaded?s-=1:"n"===this.fonts[t].fOrigin||0===this.fonts[t].origin?this.fonts[t].loaded=!0:(e=this.fonts[t].monoCase.node,r=this.fonts[t].monoCase.w,e.offsetWidth!==r?(s-=1,this.fonts[t].loaded=!0):(e=this.fonts[t].sansCase.node,r=this.fonts[t].sansCase.w,e.offsetWidth!==r&&(s-=1,this.fonts[t].loaded=!0)),this.fonts[t].loaded&&(this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent),this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));0!==s&&Date.now()-this.initTime<5e3?setTimeout(this.checkLoadedFontsBinded,20):setTimeout(this.setIsLoadedBinded,10)},setIsLoaded:function(){this.isLoaded=!0}};return n.prototype=o,n}();function RenderableElement(){}RenderableElement.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(t){-1===this.renderableComponents.indexOf(t)&&this.renderableComponents.push(t)},removeRenderableComponent:function(t){-1!==this.renderableComponents.indexOf(t)&&this.renderableComponents.splice(this.renderableComponents.indexOf(t),1)},prepareRenderableFrame:function(t){this.checkLayerLimits(t)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(t){this.data.ip-this.data.st<=t&&this.data.op-this.data.st>t?!0!==this.isInRange&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):!1!==this.isInRange&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var t,e=this.renderableComponents.length;for(t=0;t<e;t+=1)this.renderableComponents[t].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return 5===this.data.ty?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}};var getBlendMode=(blendModeEnums={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"},function(t){return blendModeEnums[t]||""}),blendModeEnums;function SliderEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function AngleEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function ColorEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,1,0,r)}function PointEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,1,0,r)}function LayerIndexEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function MaskIndexEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function CheckboxEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function NoValueEffect(){this.p={}}function EffectsManager(t,e){var r,i=t.ef||[];this.effectElements=[];var s,a=i.length;for(r=0;r<a;r+=1)s=new GroupEffect(i[r],e),this.effectElements.push(s)}function GroupEffect(t,e){this.init(t,e)}function BaseElement(){}function FrameElement(){}function FootageElement(t,e,r){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.footageData=e.imageLoader.getAsset(this.assetData),this.initBaseData(t,e,r)}function AudioElement(t,e,r){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.initBaseData(t,e,r),this._isPlaying=!1,this._canPlay=!1;var i=this.globalData.getAssetsPath(this.assetData);this.audio=this.globalData.audioController.createAudio(i),this._currentTime=0,this.globalData.audioController.addAudio(this),this._volumeMultiplier=1,this._volume=1,this._previousVolume=null,this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0},this.lv=PropertyFactory.getProp(this,t.au&&t.au.lv?t.au.lv:{k:[100]},1,.01,this)}function BaseRenderer(){}function TransformElement(){}function MaskElement(t,e,r){this.data=t,this.element=e,this.globalData=r,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var i,s,a=this.globalData.defs,n=this.masksProperties?this.masksProperties.length:0;this.viewData=createSizedArray(n),this.solidPath="";var o,h,l,p,c,f,d=this.masksProperties,u=0,m=[],y=createElementID(),g="clipPath",v="clip-path";for(i=0;i<n;i+=1)if(("a"!==d[i].mode&&"n"!==d[i].mode||d[i].inv||100!==d[i].o.k||d[i].o.x)&&(g="mask",v="mask"),"s"!==d[i].mode&&"i"!==d[i].mode||0!==u?l=null:((l=createNS("rect")).setAttribute("fill","#ffffff"),l.setAttribute("width",this.element.comp.data.w||0),l.setAttribute("height",this.element.comp.data.h||0),m.push(l)),s=createNS("path"),"n"===d[i].mode)this.viewData[i]={op:PropertyFactory.getProp(this.element,d[i].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,d[i],3),elem:s,lastPath:""},a.appendChild(s);else{var b;if(u+=1,s.setAttribute("fill","s"===d[i].mode?"#000000":"#ffffff"),s.setAttribute("clip-rule","nonzero"),0!==d[i].x.k?(g="mask",v="mask",f=PropertyFactory.getProp(this.element,d[i].x,0,null,this.element),b=createElementID(),(p=createNS("filter")).setAttribute("id",b),(c=createNS("feMorphology")).setAttribute("operator","erode"),c.setAttribute("in","SourceGraphic"),c.setAttribute("radius","0"),p.appendChild(c),a.appendChild(p),s.setAttribute("stroke","s"===d[i].mode?"#000000":"#ffffff")):(c=null,f=null),this.storedData[i]={elem:s,x:f,expan:c,lastPath:"",lastOperator:"",filterId:b,lastRadius:0},"i"===d[i].mode){h=m.length;var _=createNS("g");for(o=0;o<h;o+=1)_.appendChild(m[o]);var P=createNS("mask");P.setAttribute("mask-type","alpha"),P.setAttribute("id",y+"_"+u),P.appendChild(s),a.appendChild(P),_.setAttribute("mask","url("+getLocationHref()+"#"+y+"_"+u+")"),m.length=0,m.push(_)}else m.push(s);d[i].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[i]={elem:s,lastPath:"",op:PropertyFactory.getProp(this.element,d[i].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,d[i],3),invRect:l},this.viewData[i].prop.k||this.drawPath(d[i],this.viewData[i].prop.v,this.viewData[i])}for(this.maskElement=createNS(g),n=m.length,i=0;i<n;i+=1)this.maskElement.appendChild(m[i]);u>0&&(this.maskElement.setAttribute("id",y),this.element.maskedElement.setAttribute(v,"url("+getLocationHref()+"#"+y+")"),a.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}extendPrototype([DynamicPropertyContainer],GroupEffect),GroupEffect.prototype.getValue=GroupEffect.prototype.iterateDynamicProperties,GroupEffect.prototype.init=function(t,e){var r;this.data=t,this.effectElements=[],this.initDynamicPropertyContainer(e);var i,s=this.data.ef.length,a=this.data.ef;for(r=0;r<s;r+=1){switch(i=null,a[r].ty){case 0:i=new SliderEffect(a[r],e,this);break;case 1:i=new AngleEffect(a[r],e,this);break;case 2:i=new ColorEffect(a[r],e,this);break;case 3:i=new PointEffect(a[r],e,this);break;case 4:case 7:i=new CheckboxEffect(a[r],e,this);break;case 10:i=new LayerIndexEffect(a[r],e,this);break;case 11:i=new MaskIndexEffect(a[r],e,this);break;case 5:i=new EffectsManager(a[r],e,this);break;default:i=new NoValueEffect(a[r],e,this)}i&&this.effectElements.push(i)}},BaseElement.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var t=0,e=this.data.masksProperties.length;t<e;){if("n"!==this.data.masksProperties[t].mode&&!1!==this.data.masksProperties[t].cl)return!0;t+=1}return!1},initExpressions:function(){var t=getExpressionInterfaces();if(t){var e=t("layer"),r=t("effects"),i=t("shape"),s=t("text"),a=t("comp");this.layerInterface=e(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var n=r.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(n),0===this.data.ty||this.data.xt?this.compInterface=a(this):4===this.data.ty?(this.layerInterface.shapeInterface=i(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):5===this.data.ty&&(this.layerInterface.textInterface=s(this),this.layerInterface.text=this.layerInterface.textInterface)}},setBlendMode:function(){var t=getBlendMode(this.data.bm);(this.baseElement||this.layerElement).style["mix-blend-mode"]=t},initBaseData:function(t,e,r){this.globalData=e,this.comp=r,this.data=t,this.layerId=createElementID(),this.data.sr||(this.data.sr=1),this.effectsManager=new EffectsManager(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}},FrameElement.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(t,e){var r,i=this.dynamicProperties.length;for(r=0;r<i;r+=1)(e||this._isParent&&"transform"===this.dynamicProperties[r].propType)&&(this.dynamicProperties[r].getValue(),this.dynamicProperties[r]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(t){-1===this.dynamicProperties.indexOf(t)&&this.dynamicProperties.push(t)}},FootageElement.prototype.prepareFrame=function(){},extendPrototype([RenderableElement,BaseElement,FrameElement],FootageElement),FootageElement.prototype.getBaseElement=function(){return null},FootageElement.prototype.renderFrame=function(){},FootageElement.prototype.destroy=function(){},FootageElement.prototype.initExpressions=function(){var t=getExpressionInterfaces();if(t){var e=t("footage");this.layerInterface=e(this)}},FootageElement.prototype.getFootageData=function(){return this.footageData},AudioElement.prototype.prepareFrame=function(t){if(this.prepareRenderableFrame(t,!0),this.prepareProperties(t,!0),this.tm._placeholder)this._currentTime=t/this.data.sr;else{var e=this.tm.v;this._currentTime=e}this._volume=this.lv.v[0];var r=this._volume*this._volumeMultiplier;this._previousVolume!==r&&(this._previousVolume=r,this.audio.volume(r))},extendPrototype([RenderableElement,BaseElement,FrameElement],AudioElement),AudioElement.prototype.renderFrame=function(){this.isInRange&&this._canPlay&&(this._isPlaying?(!this.audio.playing()||Math.abs(this._currentTime/this.globalData.frameRate-this.audio.seek())>.1)&&this.audio.seek(this._currentTime/this.globalData.frameRate):(this.audio.play(),this.audio.seek(this._currentTime/this.globalData.frameRate),this._isPlaying=!0))},AudioElement.prototype.show=function(){},AudioElement.prototype.hide=function(){this.audio.pause(),this._isPlaying=!1},AudioElement.prototype.pause=function(){this.audio.pause(),this._isPlaying=!1,this._canPlay=!1},AudioElement.prototype.resume=function(){this._canPlay=!0},AudioElement.prototype.setRate=function(t){this.audio.rate(t)},AudioElement.prototype.volume=function(t){this._volumeMultiplier=t,this._previousVolume=t*this._volume,this.audio.volume(this._previousVolume)},AudioElement.prototype.getBaseElement=function(){return null},AudioElement.prototype.destroy=function(){},AudioElement.prototype.sourceRectAtTime=function(){},AudioElement.prototype.initExpressions=function(){},BaseRenderer.prototype.checkLayers=function(t){var e,r,i=this.layers.length;for(this.completeLayers=!0,e=i-1;e>=0;e-=1)this.elements[e]||(r=this.layers[e]).ip-r.st<=t-this.layers[e].st&&r.op-r.st>t-this.layers[e].st&&this.buildItem(e),this.completeLayers=!!this.elements[e]&&this.completeLayers;this.checkPendingElements()},BaseRenderer.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 3:default:return this.createNull(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 6:return this.createAudio(t);case 13:return this.createCamera(t);case 15:return this.createFootage(t)}},BaseRenderer.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},BaseRenderer.prototype.createAudio=function(t){return new AudioElement(t,this.globalData,this)},BaseRenderer.prototype.createFootage=function(t){return new FootageElement(t,this.globalData,this)},BaseRenderer.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.buildItem(t);this.checkPendingElements()},BaseRenderer.prototype.includeLayers=function(t){var e;this.completeLayers=!1;var r,i=t.length,s=this.layers.length;for(e=0;e<i;e+=1)for(r=0;r<s;){if(this.layers[r].id===t[e].id){this.layers[r]=t[e];break}r+=1}},BaseRenderer.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},BaseRenderer.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},BaseRenderer.prototype.buildElementParenting=function(t,e,r){for(var i=this.elements,s=this.layers,a=0,n=s.length;a<n;)s[a].ind==e&&(i[a]&&!0!==i[a]?(r.push(i[a]),i[a].setAsParent(),void 0!==s[a].parent?this.buildElementParenting(t,s[a].parent,r):t.setHierarchy(r)):(this.buildItem(a),this.addPendingElement(t))),a+=1},BaseRenderer.prototype.addPendingElement=function(t){this.pendingElements.push(t)},BaseRenderer.prototype.searchExtraCompositions=function(t){var e,r=t.length;for(e=0;e<r;e+=1)if(t[e].xt){var i=this.createComp(t[e]);i.initExpressions(),this.globalData.projectInterface.registerComposition(i)}},BaseRenderer.prototype.getElementByPath=function(t){var e,r=t.shift();if("number"==typeof r)e=this.elements[r];else{var i,s=this.elements.length;for(i=0;i<s;i+=1)if(this.elements[i].data.nm===r){e=this.elements[i];break}}return 0===t.length?e:e.getElementByPath(t)},BaseRenderer.prototype.setupGlobalData=function(t,e){this.globalData.fontManager=new FontManager,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.audioController=this.animationItem.audioController,this.globalData.frameId=0,this.globalData.frameRate=t.fr,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h}},TransformElement.prototype={initTransform:function(){this.finalTransform={mProp:this.data.ks?TransformPropertyFactory.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_opMdf:!1,mat:new Matrix},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var t,e=this.finalTransform.mat,r=0,i=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;r<i;){if(this.hierarchy[r].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}r+=1}if(this.finalTransform._matMdf)for(t=this.finalTransform.mProp.v.props,e.cloneFromProps(t),r=0;r<i;r+=1)t=this.hierarchy[r].finalTransform.mProp.v.props,e.transform(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}},globalToLocal:function(t){var e=[];e.push(this.finalTransform);for(var r,i=!0,s=this.comp;i;)s.finalTransform?(s.data.hasMask&&e.splice(0,0,s.finalTransform),s=s.comp):i=!1;var a,n=e.length;for(r=0;r<n;r+=1)a=e[r].mat.applyToPointArray(0,0,0),t=[t[0]-a[0],t[1]-a[1],0];return t},mHelper:new Matrix},MaskElement.prototype.getMaskProperty=function(t){return this.viewData[t].prop},MaskElement.prototype.renderFrame=function(t){var e,r=this.element.finalTransform.mat,i=this.masksProperties.length;for(e=0;e<i;e+=1)if((this.viewData[e].prop._mdf||t)&&this.drawPath(this.masksProperties[e],this.viewData[e].prop.v,this.viewData[e]),(this.viewData[e].op._mdf||t)&&this.viewData[e].elem.setAttribute("fill-opacity",this.viewData[e].op.v),"n"!==this.masksProperties[e].mode&&(this.viewData[e].invRect&&(this.element.finalTransform.mProp._mdf||t)&&this.viewData[e].invRect.setAttribute("transform",r.getInverseMatrix().to2dCSS()),this.storedData[e].x&&(this.storedData[e].x._mdf||t))){var s=this.storedData[e].expan;this.storedData[e].x.v<0?("erode"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="erode",this.storedData[e].elem.setAttribute("filter","url("+getLocationHref()+"#"+this.storedData[e].filterId+")")),s.setAttribute("radius",-this.storedData[e].x.v)):("dilate"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="dilate",this.storedData[e].elem.setAttribute("filter",null)),this.storedData[e].elem.setAttribute("stroke-width",2*this.storedData[e].x.v))}},MaskElement.prototype.getMaskelement=function(){return this.maskElement},MaskElement.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" "},MaskElement.prototype.drawPath=function(t,e,r){var i,s,a=" M"+e.v[0][0]+","+e.v[0][1];for(s=e._length,i=1;i<s;i+=1)a+=" C"+e.o[i-1][0]+","+e.o[i-1][1]+" "+e.i[i][0]+","+e.i[i][1]+" "+e.v[i][0]+","+e.v[i][1];if(e.c&&s>1&&(a+=" C"+e.o[i-1][0]+","+e.o[i-1][1]+" "+e.i[0][0]+","+e.i[0][1]+" "+e.v[0][0]+","+e.v[0][1]),r.lastPath!==a){var n="";r.elem&&(e.c&&(n=t.inv?this.solidPath+a:a),r.elem.setAttribute("d",n)),r.lastPath=a}},MaskElement.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null};var filtersFactory=function(){var t={createFilter:function(t,e){var r=createNS("filter");return r.setAttribute("id",t),!0!==e&&(r.setAttribute("filterUnits","objectBoundingBox"),r.setAttribute("x","0%"),r.setAttribute("y","0%"),r.setAttribute("width","100%"),r.setAttribute("height","100%")),r},createAlphaToLuminanceFilter:function(){var t=createNS("feColorMatrix");return t.setAttribute("type","matrix"),t.setAttribute("color-interpolation-filters","sRGB"),t.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),t}};return t}(),featureSupport=function(){var t={maskType:!0};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(t.maskType=!1),t}(),registeredEffects={},idPrefix="filter_result_";function SVGEffects(t){var e,r,i="SourceGraphic",s=t.data.ef?t.data.ef.length:0,a=createElementID(),n=filtersFactory.createFilter(a,!0),o=0;for(this.filters=[],e=0;e<s;e+=1){r=null;var h=t.data.ef[e].ty;registeredEffects[h]&&(r=new(0,registeredEffects[h].effect)(n,t.effectsManager.effectElements[e],t,idPrefix+o,i),i=idPrefix+o,registeredEffects[h].countsAsEffect&&(o+=1)),r&&this.filters.push(r)}o&&(t.globalData.defs.appendChild(n),t.layerElement.setAttribute("filter","url("+getLocationHref()+"#"+a+")")),this.filters.length&&t.addRenderableComponent(this)}function registerEffect(t,e,r){registeredEffects[t]={effect:e,countsAsEffect:r}}function SVGBaseElement(){}function HierarchyElement(){}function RenderableDOMElement(){}function IImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.initElement(t,e,r),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}function ProcessedElement(t,e){this.elem=t,this.pos=e}function IShapeElement(){}SVGEffects.prototype.renderFrame=function(t){var e,r=this.filters.length;for(e=0;e<r;e+=1)this.filters[e].renderFrame(t)},SVGBaseElement.prototype={initRendererElement:function(){this.layerElement=createNS("g")},createContainerElements:function(){this.matteElement=createNS("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var t=null;if(this.data.td){this.matteMasks={};var e=createNS("symbol");e.setAttribute("id",this.layerId);var r=createNS("g");r.appendChild(this.layerElement),e.appendChild(r),t=r,this.globalData.defs.appendChild(e)}else this.data.tt?(this.matteElement.appendChild(this.layerElement),t=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),0===this.data.ty&&!this.data.hd){var i=createNS("clipPath"),s=createNS("path");s.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var a=createElementID();if(i.setAttribute("id",a),i.appendChild(s),this.globalData.defs.appendChild(i),this.checkMasks()){var n=createNS("g");n.setAttribute("clip-path","url("+getLocationHref()+"#"+a+")"),n.appendChild(this.layerElement),this.transformedElement=n,t?t.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+getLocationHref()+"#"+a+")")}0!==this.data.bm&&this.setBlendMode()},renderElement:function(){this.finalTransform._matMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.mat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.mProp.o.v)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new MaskElement(this.data,this,this.globalData),this.renderableEffectsManager=new SVGEffects(this)},getMatte:function(t){if(!this.matteMasks[t]){var e,r,i,s,a=this.layerId+"_"+t;if(1===t||3===t){var n=createNS("mask");n.setAttribute("id",a),n.setAttribute("mask-type",3===t?"luminance":"alpha"),(i=createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),n.appendChild(i),this.globalData.defs.appendChild(n),featureSupport.maskType||1!==t||(n.setAttribute("mask-type","luminance"),e=createElementID(),r=filtersFactory.createFilter(e),this.globalData.defs.appendChild(r),r.appendChild(filtersFactory.createAlphaToLuminanceFilter()),(s=createNS("g")).appendChild(i),n.appendChild(s),s.setAttribute("filter","url("+getLocationHref()+"#"+e+")"))}else if(2===t){var o=createNS("mask");o.setAttribute("id",a),o.setAttribute("mask-type","alpha");var h=createNS("g");o.appendChild(h),e=createElementID(),r=filtersFactory.createFilter(e);var l=createNS("feComponentTransfer");l.setAttribute("in","SourceGraphic"),r.appendChild(l);var p=createNS("feFuncA");p.setAttribute("type","table"),p.setAttribute("tableValues","1.0 0.0"),l.appendChild(p),this.globalData.defs.appendChild(r);var c=createNS("rect");c.setAttribute("width",this.comp.data.w),c.setAttribute("height",this.comp.data.h),c.setAttribute("x","0"),c.setAttribute("y","0"),c.setAttribute("fill","#ffffff"),c.setAttribute("opacity","0"),h.setAttribute("filter","url("+getLocationHref()+"#"+e+")"),h.appendChild(c),(i=createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),h.appendChild(i),featureSupport.maskType||(o.setAttribute("mask-type","luminance"),r.appendChild(filtersFactory.createAlphaToLuminanceFilter()),s=createNS("g"),h.appendChild(c),s.appendChild(this.layerElement),h.appendChild(s)),this.globalData.defs.appendChild(o)}this.matteMasks[t]=a}return this.matteMasks[t]},setMatte:function(t){this.matteElement&&this.matteElement.setAttribute("mask","url("+getLocationHref()+"#"+t+")")}},HierarchyElement.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(t){this.hierarchy=t},setAsParent:function(){this._isParent=!0},checkParenting:function(){void 0!==this.data.parent&&this.comp.buildElementParenting(this,this.data.parent,[])}},extendPrototype([RenderableElement,createProxyFunction({initElement:function(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initTransform(t,e,r),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){this.hidden||this.isInRange&&!this.isTransparent||((this.baseElement||this.layerElement).style.display="none",this.hidden=!0)},show:function(){this.isInRange&&!this.isTransparent&&(this.data.hd||((this.baseElement||this.layerElement).style.display="block"),this.hidden=!1,this._isFirstFrame=!0)},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}})],RenderableDOMElement),extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],IImageElement),IImageElement.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData);this.innerElem=createNS("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.innerElem)},IImageElement.prototype.sourceRectAtTime=function(){return this.sourceRect},IShapeElement.prototype={addShapeToModifiers:function(t){var e,r=this.shapeModifiers.length;for(e=0;e<r;e+=1)this.shapeModifiers[e].addShape(t)},isShapeInAnimatedModifiers:function(t){for(var e=this.shapeModifiers.length;0<e;)if(this.shapeModifiers[0].isAnimatedWithShape(t))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var t,e=this.shapes.length;for(t=0;t<e;t+=1)this.shapes[t].sh.reset();for(t=(e=this.shapeModifiers.length)-1;t>=0&&!this.shapeModifiers[t].processShapes(this._isFirstFrame);t-=1);}},searchProcessedElement:function(t){for(var e=this.processedElements,r=0,i=e.length;r<i;){if(e[r].elem===t)return e[r].pos;r+=1}return 0},addProcessedElement:function(t,e){for(var r=this.processedElements,i=r.length;i;)if(r[i-=1].elem===t)return void(r[i].pos=e);r.push(new ProcessedElement(t,e))},prepareFrame:function(t){this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange)}};var lineCapEnum={1:"butt",2:"round",3:"square"},lineJoinEnum={1:"miter",2:"round",3:"bevel"};function SVGShapeData(t,e,r){this.caches=[],this.styles=[],this.transformers=t,this.lStr="",this.sh=r,this.lvl=e,this._isAnimated=!!r.k;for(var i=0,s=t.length;i<s;){if(t[i].mProps.dynamicProperties.length){this._isAnimated=!0;break}i+=1}}function SVGStyleData(t,e){this.data=t,this.type=t.ty,this.d="",this.lvl=e,this._mdf=!1,this.closed=!0===t.hd,this.pElem=createNS("path"),this.msElem=null}function DashProperty(t,e,r,i){var s;this.elem=t,this.frameId=-1,this.dataProps=createSizedArray(e.length),this.renderer=r,this.k=!1,this.dashStr="",this.dashArray=createTypedArray("float32",e.length?e.length-1:0),this.dashoffset=createTypedArray("float32",1),this.initDynamicPropertyContainer(i);var a,n=e.length||0;for(s=0;s<n;s+=1)a=PropertyFactory.getProp(t,e[s].v,0,0,this),this.k=a.k||this.k,this.dataProps[s]={n:e[s].n,p:a};this.k||this.getValue(!0),this._isAnimated=this.k}function SVGStrokeStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.w=PropertyFactory.getProp(t,e.w,0,null,this),this.d=new DashProperty(t,e.d||{},"svg",this),this.c=PropertyFactory.getProp(t,e.c,1,255,this),this.style=r,this._isAnimated=!!this._isAnimated}function SVGFillStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.c=PropertyFactory.getProp(t,e.c,1,255,this),this.style=r}function SVGNoStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.style=r}function GradientProperty(t,e,r){this.data=e,this.c=createTypedArray("uint8c",4*e.p);var i=e.k.k[0].s?e.k.k[0].s.length-4*e.p:e.k.k.length-4*e.p;this.o=createTypedArray("float32",i),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=i,this.initDynamicPropertyContainer(r),this.prop=PropertyFactory.getProp(t,e.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}function SVGGradientFillStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.initGradientData(t,e,r)}function SVGGradientStrokeStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.w=PropertyFactory.getProp(t,e.w,0,null,this),this.d=new DashProperty(t,e.d||{},"svg",this),this.initGradientData(t,e,r),this._isAnimated=!!this._isAnimated}function ShapeGroupData(){this.it=[],this.prevViewData=[],this.gr=createNS("g")}function SVGTransformData(t,e,r){this.transform={mProps:t,op:e,container:r},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}SVGShapeData.prototype.setAsAnimated=function(){this._isAnimated=!0},SVGStyleData.prototype.reset=function(){this.d="",this._mdf=!1},DashProperty.prototype.getValue=function(t){if((this.elem.globalData.frameId!==this.frameId||t)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||t,this._mdf)){var e=0,r=this.dataProps.length;for("svg"===this.renderer&&(this.dashStr=""),e=0;e<r;e+=1)"o"!==this.dataProps[e].n?"svg"===this.renderer?this.dashStr+=" "+this.dataProps[e].p.v:this.dashArray[e]=this.dataProps[e].p.v:this.dashoffset[0]=this.dataProps[e].p.v}},extendPrototype([DynamicPropertyContainer],DashProperty),extendPrototype([DynamicPropertyContainer],SVGStrokeStyleData),extendPrototype([DynamicPropertyContainer],SVGFillStyleData),extendPrototype([DynamicPropertyContainer],SVGNoStyleData),GradientProperty.prototype.comparePoints=function(t,e){for(var r=0,i=this.o.length/2;r<i;){if(Math.abs(t[4*r]-t[4*e+2*r])>.01)return!1;r+=1}return!0},GradientProperty.prototype.checkCollapsable=function(){if(this.o.length/2!=this.c.length/4)return!1;if(this.data.k.k[0].s)for(var t=0,e=this.data.k.k.length;t<e;){if(!this.comparePoints(this.data.k.k[t].s,this.data.p))return!1;t+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},GradientProperty.prototype.getValue=function(t){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||t){var e,r,i,s=4*this.data.p;for(e=0;e<s;e+=1)r=e%4==0?100:255,i=Math.round(this.prop.v[e]*r),this.c[e]!==i&&(this.c[e]=i,this._cmdf=!t);if(this.o.length)for(s=this.prop.v.length,e=4*this.data.p;e<s;e+=1)r=e%2==0?100:1,i=e%2==0?Math.round(100*this.prop.v[e]):this.prop.v[e],this.o[e-4*this.data.p]!==i&&(this.o[e-4*this.data.p]=i,this._omdf=!t);this._mdf=!t}},extendPrototype([DynamicPropertyContainer],GradientProperty),SVGGradientFillStyleData.prototype.initGradientData=function(t,e,r){this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.s=PropertyFactory.getProp(t,e.s,1,null,this),this.e=PropertyFactory.getProp(t,e.e,1,null,this),this.h=PropertyFactory.getProp(t,e.h||{k:0},0,.01,this),this.a=PropertyFactory.getProp(t,e.a||{k:0},0,degToRads,this),this.g=new GradientProperty(t,e.g,this),this.style=r,this.stops=[],this.setGradientData(r.pElem,e),this.setGradientOpacity(e,r),this._isAnimated=!!this._isAnimated},SVGGradientFillStyleData.prototype.setGradientData=function(t,e){var r=createElementID(),i=createNS(1===e.t?"linearGradient":"radialGradient");i.setAttribute("id",r),i.setAttribute("spreadMethod","pad"),i.setAttribute("gradientUnits","userSpaceOnUse");var s,a,n,o=[];for(n=4*e.g.p,a=0;a<n;a+=4)s=createNS("stop"),i.appendChild(s),o.push(s);t.setAttribute("gf"===e.ty?"fill":"stroke","url("+getLocationHref()+"#"+r+")"),this.gf=i,this.cst=o},SVGGradientFillStyleData.prototype.setGradientOpacity=function(t,e){if(this.g._hasOpacity&&!this.g._collapsable){var r,i,s,a=createNS("mask"),n=createNS("path");a.appendChild(n);var o=createElementID(),h=createElementID();a.setAttribute("id",h);var l=createNS(1===t.t?"linearGradient":"radialGradient");l.setAttribute("id",o),l.setAttribute("spreadMethod","pad"),l.setAttribute("gradientUnits","userSpaceOnUse"),s=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var p=this.stops;for(i=4*t.g.p;i<s;i+=2)(r=createNS("stop")).setAttribute("stop-color","rgb(255,255,255)"),l.appendChild(r),p.push(r);n.setAttribute("gf"===t.ty?"fill":"stroke","url("+getLocationHref()+"#"+o+")"),"gs"===t.ty&&(n.setAttribute("stroke-linecap",lineCapEnum[t.lc||2]),n.setAttribute("stroke-linejoin",lineJoinEnum[t.lj||2]),1===t.lj&&n.setAttribute("stroke-miterlimit",t.ml)),this.of=l,this.ms=a,this.ost=p,this.maskId=h,e.msElem=n}},extendPrototype([DynamicPropertyContainer],SVGGradientFillStyleData),extendPrototype([SVGGradientFillStyleData,DynamicPropertyContainer],SVGGradientStrokeStyleData);var buildShapeString=function(t,e,r,i){if(0===e)return"";var s,a=t.o,n=t.i,o=t.v,h=" M"+i.applyToPointStringified(o[0][0],o[0][1]);for(s=1;s<e;s+=1)h+=" C"+i.applyToPointStringified(a[s-1][0],a[s-1][1])+" "+i.applyToPointStringified(n[s][0],n[s][1])+" "+i.applyToPointStringified(o[s][0],o[s][1]);return r&&e&&(h+=" C"+i.applyToPointStringified(a[s-1][0],a[s-1][1])+" "+i.applyToPointStringified(n[0][0],n[0][1])+" "+i.applyToPointStringified(o[0][0],o[0][1]),h+="z"),h},SVGElementsRenderer=function(){var t=new Matrix,e=new Matrix;function r(t,e,r){(r||e.transform.op._mdf)&&e.transform.container.setAttribute("opacity",e.transform.op.v),(r||e.transform.mProps._mdf)&&e.transform.container.setAttribute("transform",e.transform.mProps.v.to2dCSS())}function i(){}function s(r,i,s){var a,n,o,h,l,p,c,f,d,u,m,y=i.styles.length,g=i.lvl;for(p=0;p<y;p+=1){if(h=i.sh._mdf||s,i.styles[p].lvl<g){for(f=e.reset(),u=g-i.styles[p].lvl,m=i.transformers.length-1;!h&&u>0;)h=i.transformers[m].mProps._mdf||h,u-=1,m-=1;if(h)for(u=g-i.styles[p].lvl,m=i.transformers.length-1;u>0;)d=i.transformers[m].mProps.v.props,f.transform(d[0],d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8],d[9],d[10],d[11],d[12],d[13],d[14],d[15]),u-=1,m-=1}else f=t;if(n=(c=i.sh.paths)._length,h){for(o="",a=0;a<n;a+=1)(l=c.shapes[a])&&l._length&&(o+=buildShapeString(l,l._length,l.c,f));i.caches[p]=o}else o=i.caches[p];i.styles[p].d+=!0===r.hd?"":o,i.styles[p]._mdf=h||i.styles[p]._mdf}}function a(t,e,r){var i=e.style;(e.c._mdf||r)&&i.pElem.setAttribute("fill","rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||r)&&i.pElem.setAttribute("fill-opacity",e.o.v)}function n(t,e,r){o(t,e,r),h(0,e,r)}function o(t,e,r){var i,s,a,n,o,h=e.gf,l=e.g._hasOpacity,p=e.s.v,c=e.e.v;if(e.o._mdf||r){var f="gf"===t.ty?"fill-opacity":"stroke-opacity";e.style.pElem.setAttribute(f,e.o.v)}if(e.s._mdf||r){var d=1===t.t?"x1":"cx",u="x1"===d?"y1":"cy";h.setAttribute(d,p[0]),h.setAttribute(u,p[1]),l&&!e.g._collapsable&&(e.of.setAttribute(d,p[0]),e.of.setAttribute(u,p[1]))}if(e.g._cmdf||r){i=e.cst;var m=e.g.c;for(a=i.length,s=0;s<a;s+=1)(n=i[s]).setAttribute("offset",m[4*s]+"%"),n.setAttribute("stop-color","rgb("+m[4*s+1]+","+m[4*s+2]+","+m[4*s+3]+")")}if(l&&(e.g._omdf||r)){var y=e.g.o;for(a=(i=e.g._collapsable?e.cst:e.ost).length,s=0;s<a;s+=1)n=i[s],e.g._collapsable||n.setAttribute("offset",y[2*s]+"%"),n.setAttribute("stop-opacity",y[2*s+1])}if(1===t.t)(e.e._mdf||r)&&(h.setAttribute("x2",c[0]),h.setAttribute("y2",c[1]),l&&!e.g._collapsable&&(e.of.setAttribute("x2",c[0]),e.of.setAttribute("y2",c[1])));else if((e.s._mdf||e.e._mdf||r)&&(o=Math.sqrt(Math.pow(p[0]-c[0],2)+Math.pow(p[1]-c[1],2)),h.setAttribute("r",o),l&&!e.g._collapsable&&e.of.setAttribute("r",o)),e.e._mdf||e.h._mdf||e.a._mdf||r){o||(o=Math.sqrt(Math.pow(p[0]-c[0],2)+Math.pow(p[1]-c[1],2)));var g=Math.atan2(c[1]-p[1],c[0]-p[0]),v=e.h.v;v>=1?v=.99:v<=-1&&(v=-.99);var b=o*v,_=Math.cos(g+e.a.v)*b+p[0],P=Math.sin(g+e.a.v)*b+p[1];h.setAttribute("fx",_),h.setAttribute("fy",P),l&&!e.g._collapsable&&(e.of.setAttribute("fx",_),e.of.setAttribute("fy",P))}}function h(t,e,r){var i=e.style,s=e.d;s&&(s._mdf||r)&&s.dashStr&&(i.pElem.setAttribute("stroke-dasharray",s.dashStr),i.pElem.setAttribute("stroke-dashoffset",s.dashoffset[0])),e.c&&(e.c._mdf||r)&&i.pElem.setAttribute("stroke","rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||r)&&i.pElem.setAttribute("stroke-opacity",e.o.v),(e.w._mdf||r)&&(i.pElem.setAttribute("stroke-width",e.w.v),i.msElem&&i.msElem.setAttribute("stroke-width",e.w.v))}return{createRenderFunction:function(t){switch(t.ty){case"fl":return a;case"gf":return o;case"gs":return n;case"st":return h;case"sh":case"el":case"rc":case"sr":return s;case"tr":return r;case"no":return i;default:return null}}}}();function SVGShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(t,e,r),this.prevViewData=[]}function LetterProps(t,e,r,i,s,a){this.o=t,this.sw=e,this.sc=r,this.fc=i,this.m=s,this.p=a,this._mdf={o:!0,sw:!!e,sc:!!r,fc:!!i,m:!0,p:!0}}function TextProperty(t,e){this._frameId=initialDefaultFrame,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,this.data=e,this.elem=t,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}extendPrototype([BaseElement,TransformElement,SVGBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableDOMElement],SVGShapeElement),SVGShapeElement.prototype.initSecondaryElement=function(){},SVGShapeElement.prototype.identityMatrix=new Matrix,SVGShapeElement.prototype.buildExpressionInterface=function(){},SVGShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},SVGShapeElement.prototype.filterUniqueShapes=function(){var t,e,r,i,s=this.shapes.length,a=this.stylesList.length,n=[],o=!1;for(r=0;r<a;r+=1){for(i=this.stylesList[r],o=!1,n.length=0,t=0;t<s;t+=1)-1!==(e=this.shapes[t]).styles.indexOf(i)&&(n.push(e),o=e._isAnimated||o);n.length>1&&o&&this.setShapesAsAnimated(n)}},SVGShapeElement.prototype.setShapesAsAnimated=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e].setAsAnimated()},SVGShapeElement.prototype.createStyleElement=function(t,e){var r,i=new SVGStyleData(t,e),s=i.pElem;return"st"===t.ty?r=new SVGStrokeStyleData(this,t,i):"fl"===t.ty?r=new SVGFillStyleData(this,t,i):"gf"===t.ty||"gs"===t.ty?(r=new("gf"===t.ty?SVGGradientFillStyleData:SVGGradientStrokeStyleData)(this,t,i),this.globalData.defs.appendChild(r.gf),r.maskId&&(this.globalData.defs.appendChild(r.ms),this.globalData.defs.appendChild(r.of),s.setAttribute("mask","url("+getLocationHref()+"#"+r.maskId+")"))):"no"===t.ty&&(r=new SVGNoStyleData(this,t,i)),"st"!==t.ty&&"gs"!==t.ty||(s.setAttribute("stroke-linecap",lineCapEnum[t.lc||2]),s.setAttribute("stroke-linejoin",lineJoinEnum[t.lj||2]),s.setAttribute("fill-opacity","0"),1===t.lj&&s.setAttribute("stroke-miterlimit",t.ml)),2===t.r&&s.setAttribute("fill-rule","evenodd"),t.ln&&s.setAttribute("id",t.ln),t.cl&&s.setAttribute("class",t.cl),t.bm&&(s.style["mix-blend-mode"]=getBlendMode(t.bm)),this.stylesList.push(i),this.addToAnimatedContents(t,r),r},SVGShapeElement.prototype.createGroupElement=function(t){var e=new ShapeGroupData;return t.ln&&e.gr.setAttribute("id",t.ln),t.cl&&e.gr.setAttribute("class",t.cl),t.bm&&(e.gr.style["mix-blend-mode"]=getBlendMode(t.bm)),e},SVGShapeElement.prototype.createTransformElement=function(t,e){var r=TransformPropertyFactory.getTransformProperty(this,t,this),i=new SVGTransformData(r,r.o,e);return this.addToAnimatedContents(t,i),i},SVGShapeElement.prototype.createShapeElement=function(t,e,r){var i=4;"rc"===t.ty?i=5:"el"===t.ty?i=6:"sr"===t.ty&&(i=7);var s=new SVGShapeData(e,r,ShapePropertyFactory.getShapeProp(this,t,i,this));return this.shapes.push(s),this.addShapeToModifiers(s),this.addToAnimatedContents(t,s),s},SVGShapeElement.prototype.addToAnimatedContents=function(t,e){for(var r=0,i=this.animatedContents.length;r<i;){if(this.animatedContents[r].element===e)return;r+=1}this.animatedContents.push({fn:SVGElementsRenderer.createRenderFunction(t),element:e,data:t})},SVGShapeElement.prototype.setElementStyles=function(t){var e,r=t.styles,i=this.stylesList.length;for(e=0;e<i;e+=1)this.stylesList[e].closed||r.push(this.stylesList[e])},SVGShapeElement.prototype.reloadShapes=function(){var t;this._isFirstFrame=!0;var e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},SVGShapeElement.prototype.searchShapes=function(t,e,r,i,s,a,n){var o,h,l,p,c,f,d=[].concat(a),u=t.length-1,m=[],y=[];for(o=u;o>=0;o-=1){if((f=this.searchProcessedElement(t[o]))?e[o]=r[f-1]:t[o]._render=n,"fl"===t[o].ty||"st"===t[o].ty||"gf"===t[o].ty||"gs"===t[o].ty||"no"===t[o].ty)f?e[o].style.closed=!1:e[o]=this.createStyleElement(t[o],s),t[o]._render&&e[o].style.pElem.parentNode!==i&&i.appendChild(e[o].style.pElem),m.push(e[o].style);else if("gr"===t[o].ty){if(f)for(l=e[o].it.length,h=0;h<l;h+=1)e[o].prevViewData[h]=e[o].it[h];else e[o]=this.createGroupElement(t[o]);this.searchShapes(t[o].it,e[o].it,e[o].prevViewData,e[o].gr,s+1,d,n),t[o]._render&&e[o].gr.parentNode!==i&&i.appendChild(e[o].gr)}else"tr"===t[o].ty?(f||(e[o]=this.createTransformElement(t[o],i)),p=e[o].transform,d.push(p)):"sh"===t[o].ty||"rc"===t[o].ty||"el"===t[o].ty||"sr"===t[o].ty?(f||(e[o]=this.createShapeElement(t[o],d,s)),this.setElementStyles(e[o])):"tm"===t[o].ty||"rd"===t[o].ty||"ms"===t[o].ty||"pb"===t[o].ty||"zz"===t[o].ty||"op"===t[o].ty?(f?(c=e[o]).closed=!1:((c=ShapeModifiers.getModifier(t[o].ty)).init(this,t[o]),e[o]=c,this.shapeModifiers.push(c)),y.push(c)):"rp"===t[o].ty&&(f?(c=e[o]).closed=!0:(c=ShapeModifiers.getModifier(t[o].ty),e[o]=c,c.init(this,t,o,e),this.shapeModifiers.push(c),n=!1),y.push(c));this.addProcessedElement(t[o],o+1)}for(u=m.length,o=0;o<u;o+=1)m[o].closed=!0;for(u=y.length,o=0;o<u;o+=1)y[o].closed=!0},SVGShapeElement.prototype.renderInnerContent=function(){var t;this.renderModifiers();var e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].reset();for(this.renderShape(),t=0;t<e;t+=1)(this.stylesList[t]._mdf||this._isFirstFrame)&&(this.stylesList[t].msElem&&(this.stylesList[t].msElem.setAttribute("d",this.stylesList[t].d),this.stylesList[t].d="M0 0"+this.stylesList[t].d),this.stylesList[t].pElem.setAttribute("d",this.stylesList[t].d||"M0 0"))},SVGShapeElement.prototype.renderShape=function(){var t,e,r=this.animatedContents.length;for(t=0;t<r;t+=1)e=this.animatedContents[t],(this._isFirstFrame||e.element._isAnimated)&&!0!==e.data&&e.fn(e.data,e.element,this._isFirstFrame)},SVGShapeElement.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null},LetterProps.prototype.update=function(t,e,r,i,s,a){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var n=!1;return this.o!==t&&(this.o=t,this._mdf.o=!0,n=!0),this.sw!==e&&(this.sw=e,this._mdf.sw=!0,n=!0),this.sc!==r&&(this.sc=r,this._mdf.sc=!0,n=!0),this.fc!==i&&(this.fc=i,this._mdf.fc=!0,n=!0),this.m!==s&&(this.m=s,this._mdf.m=!0,n=!0),!a.length||this.p[0]===a[0]&&this.p[1]===a[1]&&this.p[4]===a[4]&&this.p[5]===a[5]&&this.p[12]===a[12]&&this.p[13]===a[13]||(this.p=a,this._mdf.p=!0,n=!0),n},TextProperty.prototype.defaultBoxWidth=[0,0],TextProperty.prototype.copyData=function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},TextProperty.prototype.setCurrentData=function(t){t.__complete||this.completeTextData(t),this.currentData=t,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},TextProperty.prototype.searchProperty=function(){return this.searchKeyframes()},TextProperty.prototype.searchKeyframes=function(){return this.kf=this.data.d.k.length>1,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},TextProperty.prototype.addEffect=function(t){this.effectsSequence.push(t),this.elem.addDynamicProperty(this)},TextProperty.prototype.getValue=function(t){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length||t){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var e=this.currentData,r=this.keysIndex;if(this.lock)this.setCurrentData(this.currentData);else{var i;this.lock=!0,this._mdf=!1;var s=this.effectsSequence.length,a=t||this.data.d.k[this.keysIndex].s;for(i=0;i<s;i+=1)a=r!==this.keysIndex?this.effectsSequence[i](a,a.t):this.effectsSequence[i](this.currentData,a.t);e!==a&&this.setCurrentData(a),this.v=this.currentData,this.pv=this.v,this.lock=!1,this.frameId=this.elem.globalData.frameId}}},TextProperty.prototype.getKeyframeValue=function(){for(var t=this.data.d.k,e=this.elem.comp.renderedFrame,r=0,i=t.length;r<=i-1&&!(r===i-1||t[r+1].t>e);)r+=1;return this.keysIndex!==r&&(this.keysIndex=r),this.data.d.k[this.keysIndex].s},TextProperty.prototype.buildFinalText=function(t){for(var e,r,i=[],s=0,a=t.length,n=!1;s<a;)e=t.charCodeAt(s),FontManager.isCombinedCharacter(e)?i[i.length-1]+=t.charAt(s):e>=55296&&e<=56319?(r=t.charCodeAt(s+1))>=56320&&r<=57343?(n||FontManager.isModifier(e,r)?(i[i.length-1]+=t.substr(s,2),n=!1):i.push(t.substr(s,2)),s+=1):i.push(t.charAt(s)):e>56319?(r=t.charCodeAt(s+1),FontManager.isZeroWidthJoiner(e,r)?(n=!0,i[i.length-1]+=t.substr(s,2),s+=1):i.push(t.charAt(s))):FontManager.isZeroWidthJoiner(e)?(i[i.length-1]+=t.charAt(s),n=!0):i.push(t.charAt(s)),s+=1;return i},TextProperty.prototype.completeTextData=function(t){t.__complete=!0;var e,r,i,s,a,n,o,h=this.elem.globalData.fontManager,l=this.data,p=[],c=0,f=l.m.g,d=0,u=0,m=0,y=[],g=0,v=0,b=h.getFontByName(t.f),_=0,P=getFontProperties(b);t.fWeight=P.weight,t.fStyle=P.style,t.finalSize=t.s,t.finalText=this.buildFinalText(t.t),r=t.finalText.length,t.finalLineHeight=t.lh;var E,S=t.tr/1e3*t.finalSize;if(t.sz)for(var x,A,w=!0,C=t.sz[0],k=t.sz[1];w;){x=0,g=0,r=(A=this.buildFinalText(t.t)).length,S=t.tr/1e3*t.finalSize;var T=-1;for(e=0;e<r;e+=1)E=A[e].charCodeAt(0),i=!1," "===A[e]?T=e:13!==E&&3!==E||(g=0,i=!0,x+=t.finalLineHeight||1.2*t.finalSize),h.chars?(o=h.getCharData(A[e],b.fStyle,b.fFamily),_=i?0:o.w*t.finalSize/100):_=h.measureText(A[e],t.f,t.finalSize),g+_>C&&" "!==A[e]?(-1===T?r+=1:e=T,x+=t.finalLineHeight||1.2*t.finalSize,A.splice(e,T===e?1:0,"\r"),T=-1,g=0):(g+=_,g+=S);x+=b.ascent*t.finalSize/100,this.canResize&&t.finalSize>this.minimumFontSize&&k<x?(t.finalSize-=1,t.finalLineHeight=t.finalSize*t.lh/t.s):(t.finalText=A,r=t.finalText.length,w=!1)}g=-S,_=0;var D,M=0;for(e=0;e<r;e+=1)if(i=!1,13===(E=(D=t.finalText[e]).charCodeAt(0))||3===E?(M=0,y.push(g),v=g>v?g:v,g=-2*S,s="",i=!0,m+=1):s=D,h.chars?(o=h.getCharData(D,b.fStyle,h.getFontByName(t.f).fFamily),_=i?0:o.w*t.finalSize/100):_=h.measureText(s,t.f,t.finalSize)," "===D?M+=_+S:(g+=_+S+M,M=0),p.push({l:_,an:_,add:d,n:i,anIndexes:[],val:s,line:m,animatorJustifyOffset:0}),2==f){if(d+=_,""===s||" "===s||e===r-1){for(""!==s&&" "!==s||(d-=_);u<=e;)p[u].an=d,p[u].ind=c,p[u].extra=_,u+=1;c+=1,d=0}}else if(3==f){if(d+=_,""===s||e===r-1){for(""===s&&(d-=_);u<=e;)p[u].an=d,p[u].ind=c,p[u].extra=_,u+=1;d=0,c+=1}}else p[c].ind=c,p[c].extra=0,c+=1;if(t.l=p,v=g>v?g:v,y.push(g),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=v,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=y;var F,I,R,B,V=l.a;n=V.length;var O=[];for(a=0;a<n;a+=1){for((F=V[a]).a.sc&&(t.strokeColorAnim=!0),F.a.sw&&(t.strokeWidthAnim=!0),(F.a.fc||F.a.fh||F.a.fs||F.a.fb)&&(t.fillColorAnim=!0),B=0,R=F.s.b,e=0;e<r;e+=1)(I=p[e]).anIndexes[a]=B,(1==R&&""!==I.val||2==R&&""!==I.val&&" "!==I.val||3==R&&(I.n||" "==I.val||e==r-1)||4==R&&(I.n||e==r-1))&&(1===F.s.rn&&O.push(B),B+=1);l.a[a].s.totalChars=B;var L,$=-1;if(1===F.s.rn)for(e=0;e<r;e+=1)$!=(I=p[e]).anIndexes[a]&&($=I.anIndexes[a],L=O.splice(Math.floor(Math.random()*O.length),1)[0]),I.anIndexes[a]=L}t.yOffset=t.finalLineHeight||1.2*t.finalSize,t.ls=t.ls||0,t.ascent=b.ascent*t.finalSize/100},TextProperty.prototype.updateDocumentData=function(t,e){e=void 0===e?this.keysIndex:e;var r=this.copyData({},this.data.d.k[e].s);r=this.copyData(r,t),this.data.d.k[e].s=r,this.recalculate(e),this.elem.addDynamicProperty(this)},TextProperty.prototype.recalculate=function(t){var e=this.data.d.k[t].s;e.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(e)},TextProperty.prototype.canResizeFont=function(t){this.canResize=t,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},TextProperty.prototype.setMinimumFontSize=function(t){this.minimumFontSize=Math.floor(t)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var TextSelectorProp=function(){var t=Math.max,e=Math.min,r=Math.floor;function i(t,e){this._currentTextLength=-1,this.k=!1,this.data=e,this.elem=t,this.comp=t.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(t),this.s=PropertyFactory.getProp(t,e.s||{k:0},0,0,this),this.e="e"in e?PropertyFactory.getProp(t,e.e,0,0,this):{v:100},this.o=PropertyFactory.getProp(t,e.o||{k:0},0,0,this),this.xe=PropertyFactory.getProp(t,e.xe||{k:0},0,0,this),this.ne=PropertyFactory.getProp(t,e.ne||{k:0},0,0,this),this.sm=PropertyFactory.getProp(t,e.sm||{k:100},0,0,this),this.a=PropertyFactory.getProp(t,e.a,0,.01,this),this.dynamicProperties.length||this.getValue()}return i.prototype={getMult:function(i){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var s=0,a=0,n=1,o=1;this.ne.v>0?s=this.ne.v/100:a=-this.ne.v/100,this.xe.v>0?n=1-this.xe.v/100:o=1+this.xe.v/100;var h=BezierFactory.getBezierEasing(s,a,n,o).get,l=0,p=this.finalS,c=this.finalE,f=this.data.sh;if(2===f)l=h(l=c===p?i>=c?1:0:t(0,e(.5/(c-p)+(i-p)/(c-p),1)));else if(3===f)l=h(l=c===p?i>=c?0:1:1-t(0,e(.5/(c-p)+(i-p)/(c-p),1)));else if(4===f)c===p?l=0:(l=t(0,e(.5/(c-p)+(i-p)/(c-p),1)))<.5?l*=2:l=1-2*(l-.5),l=h(l);else if(5===f){if(c===p)l=0;else{var d=c-p,u=-d/2+(i=e(t(0,i+.5-p),c-p)),m=d/2;l=Math.sqrt(1-u*u/(m*m))}l=h(l)}else 6===f?(c===p?l=0:(i=e(t(0,i+.5-p),c-p),l=(1+Math.cos(Math.PI+2*Math.PI*i/(c-p)))/2),l=h(l)):(i>=r(p)&&(l=t(0,e(i-p<0?e(c,1)-(p-i):c-i,1))),l=h(l));if(100!==this.sm.v){var y=.01*this.sm.v;0===y&&(y=1e-8);var g=.5-.5*y;l<g?l=0:(l=(l-g)/y)>1&&(l=1)}return l*this.a.v},getValue:function(t){this.iterateDynamicProperties(),this._mdf=t||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,t&&2===this.data.r&&(this.e.v=this._currentTextLength);var e=2===this.data.r?1:100/this.data.totalChars,r=this.o.v/e,i=this.s.v/e+r,s=this.e.v/e+r;if(i>s){var a=i;i=s,s=a}this.finalS=i,this.finalE=s}},extendPrototype([DynamicPropertyContainer],i),{getTextSelectorProp:function(t,e,r){return new i(t,e,r)}}}();function TextAnimatorDataProperty(t,e,r){var i={propType:!1},s=PropertyFactory.getProp,a=e.a;this.a={r:a.r?s(t,a.r,0,degToRads,r):i,rx:a.rx?s(t,a.rx,0,degToRads,r):i,ry:a.ry?s(t,a.ry,0,degToRads,r):i,sk:a.sk?s(t,a.sk,0,degToRads,r):i,sa:a.sa?s(t,a.sa,0,degToRads,r):i,s:a.s?s(t,a.s,1,.01,r):i,a:a.a?s(t,a.a,1,0,r):i,o:a.o?s(t,a.o,0,.01,r):i,p:a.p?s(t,a.p,1,0,r):i,sw:a.sw?s(t,a.sw,0,0,r):i,sc:a.sc?s(t,a.sc,1,0,r):i,fc:a.fc?s(t,a.fc,1,0,r):i,fh:a.fh?s(t,a.fh,0,0,r):i,fs:a.fs?s(t,a.fs,0,.01,r):i,fb:a.fb?s(t,a.fb,0,.01,r):i,t:a.t?s(t,a.t,0,0,r):i},this.s=TextSelectorProp.getTextSelectorProp(t,e.s,r),this.s.t=e.s.t}function TextAnimatorProperty(t,e,r){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=t,this._renderType=e,this._elem=r,this._animatorsData=createSizedArray(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(r)}function ITextElement(){}TextAnimatorProperty.prototype.searchProperties=function(){var t,e,r=this._textData.a.length,i=PropertyFactory.getProp;for(t=0;t<r;t+=1)e=this._textData.a[t],this._animatorsData[t]=new TextAnimatorDataProperty(this._elem,e,this);this._textData.p&&"m"in this._textData.p?(this._pathData={a:i(this._elem,this._textData.p.a,0,0,this),f:i(this._elem,this._textData.p.f,0,0,this),l:i(this._elem,this._textData.p.l,0,0,this),r:i(this._elem,this._textData.p.r,0,0,this),p:i(this._elem,this._textData.p.p,0,0,this),m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=i(this._elem,this._textData.m.a,1,0,this)},TextAnimatorProperty.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,this._mdf||this._isFirstFrame||e||this._hasMaskedPath&&this._pathData.m._mdf){this._isFirstFrame=!1;var r,i,s,a,n,o,h,l,p,c,f,d,u,m,y,g,v,b,_,P=this._moreOptions.alignment.v,E=this._animatorsData,S=this._textData,x=this.mHelper,A=this._renderType,w=this.renderedLetters.length,C=t.l;if(this._hasMaskedPath){if(_=this._pathData.m,!this._pathData.n||this._pathData._mdf){var k,T=_.v;for(this._pathData.r.v&&(T=T.reverse()),n={tLength:0,segments:[]},a=T._length-1,g=0,s=0;s<a;s+=1)k=bez.buildBezierData(T.v[s],T.v[s+1],[T.o[s][0]-T.v[s][0],T.o[s][1]-T.v[s][1]],[T.i[s+1][0]-T.v[s+1][0],T.i[s+1][1]-T.v[s+1][1]]),n.tLength+=k.segmentLength,n.segments.push(k),g+=k.segmentLength;s=a,_.v.c&&(k=bez.buildBezierData(T.v[s],T.v[0],[T.o[s][0]-T.v[s][0],T.o[s][1]-T.v[s][1]],[T.i[0][0]-T.v[0][0],T.i[0][1]-T.v[0][1]]),n.tLength+=k.segmentLength,n.segments.push(k),g+=k.segmentLength),this._pathData.pi=n}if(n=this._pathData.pi,o=this._pathData.f.v,f=0,c=1,l=0,p=!0,m=n.segments,o<0&&_.v.c)for(n.tLength<Math.abs(o)&&(o=-Math.abs(o)%n.tLength),c=(u=m[f=m.length-1].points).length-1;o<0;)o+=u[c].partialLength,(c-=1)<0&&(c=(u=m[f-=1].points).length-1);d=(u=m[f].points)[c-1],y=(h=u[c]).partialLength}a=C.length,r=0,i=0;var D,M,F,I,R,B=1.2*t.finalSize*.714,V=!0;F=E.length;var O,L,$,z,G,N,j,H,q,W,U,Y,X=-1,Z=o,K=f,J=c,Q=-1,tt="",et=this.defaultPropsArray;if(2===t.j||1===t.j){var rt=0,it=0,st=2===t.j?-.5:-1,at=0,nt=!0;for(s=0;s<a;s+=1)if(C[s].n){for(rt&&(rt+=it);at<s;)C[at].animatorJustifyOffset=rt,at+=1;rt=0,nt=!0}else{for(M=0;M<F;M+=1)(D=E[M].a).t.propType&&(nt&&2===t.j&&(it+=D.t.v*st),(R=E[M].s.getMult(C[s].anIndexes[M],S.a[M].s.totalChars)).length?rt+=D.t.v*R[0]*st:rt+=D.t.v*R*st);nt=!1}for(rt&&(rt+=it);at<s;)C[at].animatorJustifyOffset=rt,at+=1}for(s=0;s<a;s+=1){if(x.reset(),z=1,C[s].n)r=0,i+=t.yOffset,i+=V?1:0,o=Z,V=!1,this._hasMaskedPath&&(c=J,d=(u=m[f=K].points)[c-1],y=(h=u[c]).partialLength,l=0),tt="",U="",q="",Y="",et=this.defaultPropsArray;else{if(this._hasMaskedPath){if(Q!==C[s].line){switch(t.j){case 1:o+=g-t.lineWidths[C[s].line];break;case 2:o+=(g-t.lineWidths[C[s].line])/2}Q=C[s].line}X!==C[s].ind&&(C[X]&&(o+=C[X].extra),o+=C[s].an/2,X=C[s].ind),o+=P[0]*C[s].an*.005;var ot=0;for(M=0;M<F;M+=1)(D=E[M].a).p.propType&&((R=E[M].s.getMult(C[s].anIndexes[M],S.a[M].s.totalChars)).length?ot+=D.p.v[0]*R[0]:ot+=D.p.v[0]*R),D.a.propType&&((R=E[M].s.getMult(C[s].anIndexes[M],S.a[M].s.totalChars)).length?ot+=D.a.v[0]*R[0]:ot+=D.a.v[0]*R);for(p=!0,this._pathData.a.v&&(o=.5*C[0].an+(g-this._pathData.f.v-.5*C[0].an-.5*C[C.length-1].an)*X/(a-1),o+=this._pathData.f.v);p;)l+y>=o+ot||!u?(v=(o+ot-l)/h.partialLength,L=d.point[0]+(h.point[0]-d.point[0])*v,$=d.point[1]+(h.point[1]-d.point[1])*v,x.translate(-P[0]*C[s].an*.005,-P[1]*B*.01),p=!1):u&&(l+=h.partialLength,(c+=1)>=u.length&&(c=0,m[f+=1]?u=m[f].points:_.v.c?(c=0,u=m[f=0].points):(l-=h.partialLength,u=null)),u&&(d=h,y=(h=u[c]).partialLength));O=C[s].an/2-C[s].add,x.translate(-O,0,0)}else O=C[s].an/2-C[s].add,x.translate(-O,0,0),x.translate(-P[0]*C[s].an*.005,-P[1]*B*.01,0);for(M=0;M<F;M+=1)(D=E[M].a).t.propType&&(R=E[M].s.getMult(C[s].anIndexes[M],S.a[M].s.totalChars),0===r&&0===t.j||(this._hasMaskedPath?R.length?o+=D.t.v*R[0]:o+=D.t.v*R:R.length?r+=D.t.v*R[0]:r+=D.t.v*R));for(t.strokeWidthAnim&&(N=t.sw||0),t.strokeColorAnim&&(G=t.sc?[t.sc[0],t.sc[1],t.sc[2]]:[0,0,0]),t.fillColorAnim&&t.fc&&(j=[t.fc[0],t.fc[1],t.fc[2]]),M=0;M<F;M+=1)(D=E[M].a).a.propType&&((R=E[M].s.getMult(C[s].anIndexes[M],S.a[M].s.totalChars)).length?x.translate(-D.a.v[0]*R[0],-D.a.v[1]*R[1],D.a.v[2]*R[2]):x.translate(-D.a.v[0]*R,-D.a.v[1]*R,D.a.v[2]*R));for(M=0;M<F;M+=1)(D=E[M].a).s.propType&&((R=E[M].s.getMult(C[s].anIndexes[M],S.a[M].s.totalChars)).length?x.scale(1+(D.s.v[0]-1)*R[0],1+(D.s.v[1]-1)*R[1],1):x.scale(1+(D.s.v[0]-1)*R,1+(D.s.v[1]-1)*R,1));for(M=0;M<F;M+=1){if(D=E[M].a,R=E[M].s.getMult(C[s].anIndexes[M],S.a[M].s.totalChars),D.sk.propType&&(R.length?x.skewFromAxis(-D.sk.v*R[0],D.sa.v*R[1]):x.skewFromAxis(-D.sk.v*R,D.sa.v*R)),D.r.propType&&(R.length?x.rotateZ(-D.r.v*R[2]):x.rotateZ(-D.r.v*R)),D.ry.propType&&(R.length?x.rotateY(D.ry.v*R[1]):x.rotateY(D.ry.v*R)),D.rx.propType&&(R.length?x.rotateX(D.rx.v*R[0]):x.rotateX(D.rx.v*R)),D.o.propType&&(R.length?z+=(D.o.v*R[0]-z)*R[0]:z+=(D.o.v*R-z)*R),t.strokeWidthAnim&&D.sw.propType&&(R.length?N+=D.sw.v*R[0]:N+=D.sw.v*R),t.strokeColorAnim&&D.sc.propType)for(H=0;H<3;H+=1)R.length?G[H]+=(D.sc.v[H]-G[H])*R[0]:G[H]+=(D.sc.v[H]-G[H])*R;if(t.fillColorAnim&&t.fc){if(D.fc.propType)for(H=0;H<3;H+=1)R.length?j[H]+=(D.fc.v[H]-j[H])*R[0]:j[H]+=(D.fc.v[H]-j[H])*R;D.fh.propType&&(j=R.length?addHueToRGB(j,D.fh.v*R[0]):addHueToRGB(j,D.fh.v*R)),D.fs.propType&&(j=R.length?addSaturationToRGB(j,D.fs.v*R[0]):addSaturationToRGB(j,D.fs.v*R)),D.fb.propType&&(j=R.length?addBrightnessToRGB(j,D.fb.v*R[0]):addBrightnessToRGB(j,D.fb.v*R))}}for(M=0;M<F;M+=1)(D=E[M].a).p.propType&&(R=E[M].s.getMult(C[s].anIndexes[M],S.a[M].s.totalChars),this._hasMaskedPath?R.length?x.translate(0,D.p.v[1]*R[0],-D.p.v[2]*R[1]):x.translate(0,D.p.v[1]*R,-D.p.v[2]*R):R.length?x.translate(D.p.v[0]*R[0],D.p.v[1]*R[1],-D.p.v[2]*R[2]):x.translate(D.p.v[0]*R,D.p.v[1]*R,-D.p.v[2]*R));if(t.strokeWidthAnim&&(q=N<0?0:N),t.strokeColorAnim&&(W="rgb("+Math.round(255*G[0])+","+Math.round(255*G[1])+","+Math.round(255*G[2])+")"),t.fillColorAnim&&t.fc&&(U="rgb("+Math.round(255*j[0])+","+Math.round(255*j[1])+","+Math.round(255*j[2])+")"),this._hasMaskedPath){if(x.translate(0,-t.ls),x.translate(0,P[1]*B*.01+i,0),this._pathData.p.v){b=(h.point[1]-d.point[1])/(h.point[0]-d.point[0]);var ht=180*Math.atan(b)/Math.PI;h.point[0]<d.point[0]&&(ht+=180),x.rotate(-ht*Math.PI/180)}x.translate(L,$,0),o-=P[0]*C[s].an*.005,C[s+1]&&X!==C[s+1].ind&&(o+=C[s].an/2,o+=.001*t.tr*t.finalSize)}else{switch(x.translate(r,i,0),t.ps&&x.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:x.translate(C[s].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[C[s].line]),0,0);break;case 2:x.translate(C[s].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[C[s].line])/2,0,0)}x.translate(0,-t.ls),x.translate(O,0,0),x.translate(P[0]*C[s].an*.005,P[1]*B*.01,0),r+=C[s].l+.001*t.tr*t.finalSize}"html"===A?tt=x.toCSS():"svg"===A?tt=x.to2dCSS():et=[x.props[0],x.props[1],x.props[2],x.props[3],x.props[4],x.props[5],x.props[6],x.props[7],x.props[8],x.props[9],x.props[10],x.props[11],x.props[12],x.props[13],x.props[14],x.props[15]],Y=z}w<=s?(I=new LetterProps(Y,q,W,U,tt,et),this.renderedLetters.push(I),w+=1,this.lettersChangedFlag=!0):(I=this.renderedLetters[s],this.lettersChangedFlag=I.update(Y,q,W,U,tt,et)||this.lettersChangedFlag)}}},TextAnimatorProperty.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},TextAnimatorProperty.prototype.mHelper=new Matrix,TextAnimatorProperty.prototype.defaultPropsArray=[],extendPrototype([DynamicPropertyContainer],TextAnimatorProperty),ITextElement.prototype.initElement=function(t,e,r){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(t,e,r),this.textProperty=new TextProperty(this,t.t,this.dynamicProperties),this.textAnimator=new TextAnimatorProperty(t.t,this.renderType,this),this.initTransform(t,e,r),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},ITextElement.prototype.prepareFrame=function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)},ITextElement.prototype.createPathShape=function(t,e){var r,i,s=e.length,a="";for(r=0;r<s;r+=1)"sh"===e[r].ty&&(i=e[r].ks.k,a+=buildShapeString(i,i.i.length,!0,t));return a},ITextElement.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},ITextElement.prototype.canResizeFont=function(t){this.textProperty.canResizeFont(t)},ITextElement.prototype.setMinimumFontSize=function(t){this.textProperty.setMinimumFontSize(t)},ITextElement.prototype.applyTextPropertiesToMatrix=function(t,e,r,i,s){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[r]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[r])/2,0,0)}e.translate(i,s,0)},ITextElement.prototype.buildColor=function(t){return"rgb("+Math.round(255*t[0])+","+Math.round(255*t[1])+","+Math.round(255*t[2])+")"},ITextElement.prototype.emptyProp=new LetterProps,ITextElement.prototype.destroy=function(){};var emptyShapeData={shapes:[]};function SVGTextLottieElement(t,e,r){this.textSpans=[],this.renderType="svg",this.initElement(t,e,r)}function ISolidElement(t,e,r){this.initElement(t,e,r)}function NullElement(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initFrame(),this.initTransform(t,e,r),this.initHierarchy()}function SVGRendererBase(){}function ICompElement(){}function SVGCompElement(t,e,r){this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function SVGRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.svgElement=createNS("svg");var r="";if(e&&e.title){var i=createNS("title"),s=createElementID();i.setAttribute("id",s),i.textContent=e.title,this.svgElement.appendChild(i),r+=s}if(e&&e.description){var a=createNS("desc"),n=createElementID();a.setAttribute("id",n),a.textContent=e.description,this.svgElement.appendChild(a),r+=" "+n}r&&this.svgElement.setAttribute("aria-labelledby",r);var o=createNS("defs");this.svgElement.appendChild(o);var h=createNS("g");this.svgElement.appendChild(h),this.layerElement=h,this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:e&&e.contentVisibility||"visible",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:!(e&&!1===e.hideOnTransparent),viewBoxOnly:e&&e.viewBoxOnly||!1,viewBoxSize:e&&e.viewBoxSize||!1,className:e&&e.className||"",id:e&&e.id||"",focusable:e&&e.focusable,filterSize:{width:e&&e.filterSize&&e.filterSize.width||"100%",height:e&&e.filterSize&&e.filterSize.height||"100%",x:e&&e.filterSize&&e.filterSize.x||"0%",y:e&&e.filterSize&&e.filterSize.y||"0%"},width:e&&e.width,height:e&&e.height,runExpressions:!e||void 0===e.runExpressions||e.runExpressions},this.globalData={_mdf:!1,frameNum:-1,defs:o,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}function CVContextData(){var t;for(this.saved=[],this.cArrPos=0,this.cTr=new Matrix,this.cO=1,this.savedOp=createTypedArray("float32",15),t=0;t<15;t+=1)this.saved[t]=createTypedArray("float32",16);this._length=15}function ShapeTransformManager(){this.sequences={},this.sequenceList=[],this.transform_key_count=0}function CVEffects(){}function CVMaskElement(t,e){var r;this.data=t,this.element=e,this.masksProperties=this.data.masksProperties||[],this.viewData=createSizedArray(this.masksProperties.length);var i=this.masksProperties.length,s=!1;for(r=0;r<i;r+=1)"n"!==this.masksProperties[r].mode&&(s=!0),this.viewData[r]=ShapePropertyFactory.getShapeProp(this.element,this.masksProperties[r],3);this.hasMasks=s,s&&this.element.addRenderableComponent(this)}function CVBaseElement(){}function CVShapeData(t,e,r,i){this.styledShapes=[],this.tr=[0,0,0,0,0,0];var s,a=4;"rc"===e.ty?a=5:"el"===e.ty?a=6:"sr"===e.ty&&(a=7),this.sh=ShapePropertyFactory.getShapeProp(t,e,a,t);var n,o=r.length;for(s=0;s<o;s+=1)r[s].closed||(n={transforms:i.addTransformSequence(r[s].transforms),trNodes:[]},this.styledShapes.push(n),r[s].elements.push(n))}function CVShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.itemsData=[],this.prevViewData=[],this.shapeModifiers=[],this.processedElements=[],this.transformsManager=new ShapeTransformManager,this.initElement(t,e,r)}function CVTextElement(t,e,r){this.textSpans=[],this.yOffset=0,this.fillColorAnim=!1,this.strokeColorAnim=!1,this.strokeWidthAnim=!1,this.stroke=!1,this.fill=!1,this.justifyOffset=0,this.currentRender=null,this.renderType="canvas",this.values={fill:"rgba(0,0,0,0)",stroke:"rgba(0,0,0,0)",sWidth:0,fValue:""},this.initElement(t,e,r)}function CVImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.img=e.imageLoader.getAsset(this.assetData),this.initElement(t,e,r)}function CVSolidElement(t,e,r){this.initElement(t,e,r)}function CanvasRendererBase(t,e){this.animationItem=t,this.renderConfig={clearCanvas:!e||void 0===e.clearCanvas||e.clearCanvas,context:e&&e.context||null,progressiveLoad:e&&e.progressiveLoad||!1,preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:e&&e.contentVisibility||"visible",className:e&&e.className||"",id:e&&e.id||""},this.renderConfig.dpr=e&&e.dpr||1,this.animationItem.wrapper&&(this.renderConfig.dpr=e&&e.dpr||window.devicePixelRatio||1),this.renderedFrame=-1,this.globalData={frameNum:-1,_mdf:!1,renderConfig:this.renderConfig,currentGlobalAlpha:-1},this.contextData=new CVContextData,this.elements=[],this.pendingElements=[],this.transformMat=new Matrix,this.completeLayers=!1,this.rendererType="canvas"}function CVCompElement(t,e,r){this.completeLayers=!1,this.layers=t.layers,this.pendingElements=[],this.elements=createSizedArray(this.layers.length),this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function CanvasRenderer(t,e){this.animationItem=t,this.renderConfig={clearCanvas:!e||void 0===e.clearCanvas||e.clearCanvas,context:e&&e.context||null,progressiveLoad:e&&e.progressiveLoad||!1,preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:e&&e.contentVisibility||"visible",className:e&&e.className||"",id:e&&e.id||"",runExpressions:!e||void 0===e.runExpressions||e.runExpressions},this.renderConfig.dpr=e&&e.dpr||1,this.animationItem.wrapper&&(this.renderConfig.dpr=e&&e.dpr||window.devicePixelRatio||1),this.renderedFrame=-1,this.globalData={frameNum:-1,_mdf:!1,renderConfig:this.renderConfig,currentGlobalAlpha:-1},this.contextData=new CVContextData,this.elements=[],this.pendingElements=[],this.transformMat=new Matrix,this.completeLayers=!1,this.rendererType="canvas"}function HBaseElement(){}function HSolidElement(t,e,r){this.initElement(t,e,r)}function HShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.shapesContainer=createNS("g"),this.initElement(t,e,r),this.prevViewData=[],this.currentBBox={x:999999,y:-999999,h:0,w:0}}function HTextElement(t,e,r){this.textSpans=[],this.textPaths=[],this.currentBBox={x:999999,y:-999999,h:0,w:0},this.renderType="svg",this.isMasked=!1,this.initElement(t,e,r)}function HCameraElement(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initHierarchy();var i=PropertyFactory.getProp;if(this.pe=i(this,t.pe,0,0,this),t.ks.p.s?(this.px=i(this,t.ks.p.x,1,0,this),this.py=i(this,t.ks.p.y,1,0,this),this.pz=i(this,t.ks.p.z,1,0,this)):this.p=i(this,t.ks.p,1,0,this),t.ks.a&&(this.a=i(this,t.ks.a,1,0,this)),t.ks.or.k.length&&t.ks.or.k[0].to){var s,a=t.ks.or.k.length;for(s=0;s<a;s+=1)t.ks.or.k[s].to=null,t.ks.or.k[s].ti=null}this.or=i(this,t.ks.or,1,degToRads,this),this.or.sh=!0,this.rx=i(this,t.ks.rx,0,degToRads,this),this.ry=i(this,t.ks.ry,0,degToRads,this),this.rz=i(this,t.ks.rz,0,degToRads,this),this.mat=new Matrix,this._prevMat=new Matrix,this._isFirstFrame=!0,this.finalTransform={mProp:this}}function HImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.initElement(t,e,r)}function HybridRendererBase(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.renderConfig={className:e&&e.className||"",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",hideOnTransparent:!(e&&!1===e.hideOnTransparent),filterSize:{width:e&&e.filterSize&&e.filterSize.width||"400%",height:e&&e.filterSize&&e.filterSize.height||"400%",x:e&&e.filterSize&&e.filterSize.x||"-100%",y:e&&e.filterSize&&e.filterSize.y||"-100%"}},this.globalData={_mdf:!1,frameNum:-1,renderConfig:this.renderConfig},this.pendingElements=[],this.elements=[],this.threeDElements=[],this.destroyed=!1,this.camera=null,this.supports3d=!0,this.rendererType="html"}function HCompElement(t,e,r){this.layers=t.layers,this.supports3d=!t.hasMask,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function HybridRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.renderConfig={className:e&&e.className||"",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",hideOnTransparent:!(e&&!1===e.hideOnTransparent),filterSize:{width:e&&e.filterSize&&e.filterSize.width||"400%",height:e&&e.filterSize&&e.filterSize.height||"400%",x:e&&e.filterSize&&e.filterSize.x||"-100%",y:e&&e.filterSize&&e.filterSize.y||"-100%"},runExpressions:!e||void 0===e.runExpressions||e.runExpressions},this.globalData={_mdf:!1,frameNum:-1,renderConfig:this.renderConfig},this.pendingElements=[],this.elements=[],this.threeDElements=[],this.destroyed=!1,this.camera=null,this.supports3d=!0,this.rendererType="html"}extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],SVGTextLottieElement),SVGTextLottieElement.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=createNS("text"))},SVGTextLottieElement.prototype.buildTextContents=function(t){for(var e=0,r=t.length,i=[],s="";e<r;)t[e]===String.fromCharCode(13)||t[e]===String.fromCharCode(3)?(i.push(s),s=""):s+=t[e],e+=1;return i.push(s),i},SVGTextLottieElement.prototype.buildShapeData=function(t,e){if(t.shapes&&t.shapes.length){var r=t.shapes[0];if(r.it){var i=r.it[r.it.length-1];i.s&&(i.s.k[0]=e,i.s.k[1]=e)}}return t},SVGTextLottieElement.prototype.buildNewText=function(){var t,e;this.addDynamicProperty(this);var r=this.textProperty.currentData;this.renderedLetters=createSizedArray(r?r.l.length:0),r.fc?this.layerElement.setAttribute("fill",this.buildColor(r.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),r.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(r.sc)),this.layerElement.setAttribute("stroke-width",r.sw)),this.layerElement.setAttribute("font-size",r.finalSize);var i=this.globalData.fontManager.getFontByName(r.f);if(i.fClass)this.layerElement.setAttribute("class",i.fClass);else{this.layerElement.setAttribute("font-family",i.fFamily);var s=r.fWeight,a=r.fStyle;this.layerElement.setAttribute("font-style",a),this.layerElement.setAttribute("font-weight",s)}this.layerElement.setAttribute("aria-label",r.t);var n,o=r.l||[],h=!!this.globalData.fontManager.chars;e=o.length;var l=this.mHelper,p=this.data.singleShape,c=0,f=0,d=!0,u=.001*r.tr*r.finalSize;if(!p||h||r.sz){var m,y=this.textSpans.length;for(t=0;t<e;t+=1){if(this.textSpans[t]||(this.textSpans[t]={span:null,childSpan:null,glyph:null}),!h||!p||0===t){if(n=y>t?this.textSpans[t].span:createNS(h?"g":"text"),y<=t){if(n.setAttribute("stroke-linecap","butt"),n.setAttribute("stroke-linejoin","round"),n.setAttribute("stroke-miterlimit","4"),this.textSpans[t].span=n,h){var g=createNS("g");n.appendChild(g),this.textSpans[t].childSpan=g}this.textSpans[t].span=n,this.layerElement.appendChild(n)}n.style.display="inherit"}if(l.reset(),p&&(o[t].n&&(c=-u,f+=r.yOffset,f+=d?1:0,d=!1),this.applyTextPropertiesToMatrix(r,l,o[t].line,c,f),c+=o[t].l||0,c+=u),h){var v;if(1===(m=this.globalData.fontManager.getCharData(r.finalText[t],i.fStyle,this.globalData.fontManager.getFontByName(r.f).fFamily)).t)v=new SVGCompElement(m.data,this.globalData,this);else{var b=emptyShapeData;m.data&&m.data.shapes&&(b=this.buildShapeData(m.data,r.finalSize)),v=new SVGShapeElement(b,this.globalData,this)}if(this.textSpans[t].glyph){var _=this.textSpans[t].glyph;this.textSpans[t].childSpan.removeChild(_.layerElement),_.destroy()}this.textSpans[t].glyph=v,v._debug=!0,v.prepareFrame(0),v.renderFrame(),this.textSpans[t].childSpan.appendChild(v.layerElement),1===m.t&&this.textSpans[t].childSpan.setAttribute("transform","scale("+r.finalSize/100+","+r.finalSize/100+")")}else p&&n.setAttribute("transform","translate("+l.props[12]+","+l.props[13]+")"),n.textContent=o[t].val,n.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve")}p&&n&&n.setAttribute("d","")}else{var P=this.textContainer,E="start";switch(r.j){case 1:E="end";break;case 2:E="middle";break;default:E="start"}P.setAttribute("text-anchor",E),P.setAttribute("letter-spacing",u);var S=this.buildTextContents(r.finalText);for(e=S.length,f=r.ps?r.ps[1]+r.ascent:0,t=0;t<e;t+=1)(n=this.textSpans[t].span||createNS("tspan")).textContent=S[t],n.setAttribute("x",0),n.setAttribute("y",f),n.style.display="inherit",P.appendChild(n),this.textSpans[t]||(this.textSpans[t]={span:null,glyph:null}),this.textSpans[t].span=n,f+=r.finalLineHeight;this.layerElement.appendChild(P)}for(;t<this.textSpans.length;)this.textSpans[t].span.style.display="none",t+=1;this._sizeChanged=!0},SVGTextLottieElement.prototype.sourceRectAtTime=function(){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var t=this.layerElement.getBBox();this.bbox={top:t.y,left:t.x,width:t.width,height:t.height}}return this.bbox},SVGTextLottieElement.prototype.getValue=function(){var t,e,r=this.textSpans.length;for(this.renderedFrame=this.comp.renderedFrame,t=0;t<r;t+=1)(e=this.textSpans[t].glyph)&&(e.prepareFrame(this.comp.renderedFrame-this.data.st),e._mdf&&(this._mdf=!0))},SVGTextLottieElement.prototype.renderInnerContent=function(){if((!this.data.singleShape||this._mdf)&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){var t,e;this._sizeChanged=!0;var r,i,s,a=this.textAnimator.renderedLetters,n=this.textProperty.currentData.l;for(e=n.length,t=0;t<e;t+=1)n[t].n||(r=a[t],i=this.textSpans[t].span,(s=this.textSpans[t].glyph)&&s.renderFrame(),r._mdf.m&&i.setAttribute("transform",r.m),r._mdf.o&&i.setAttribute("opacity",r.o),r._mdf.sw&&i.setAttribute("stroke-width",r.sw),r._mdf.sc&&i.setAttribute("stroke",r.sc),r._mdf.fc&&i.setAttribute("fill",r.fc))}},extendPrototype([IImageElement],ISolidElement),ISolidElement.prototype.createContent=function(){var t=createNS("rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t)},NullElement.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},NullElement.prototype.renderFrame=function(){},NullElement.prototype.getBaseElement=function(){return null},NullElement.prototype.destroy=function(){},NullElement.prototype.sourceRectAtTime=function(){},NullElement.prototype.hide=function(){},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement],NullElement),extendPrototype([BaseRenderer],SVGRendererBase),SVGRendererBase.prototype.createNull=function(t){return new NullElement(t,this.globalData,this)},SVGRendererBase.prototype.createShape=function(t){return new SVGShapeElement(t,this.globalData,this)},SVGRendererBase.prototype.createText=function(t){return new SVGTextLottieElement(t,this.globalData,this)},SVGRendererBase.prototype.createImage=function(t){return new IImageElement(t,this.globalData,this)},SVGRendererBase.prototype.createSolid=function(t){return new ISolidElement(t,this.globalData,this)},SVGRendererBase.prototype.configAnimation=function(t){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.svgElement.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",t.w),this.svgElement.setAttribute("height",t.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)",this.svgElement.style.contentVisibility=this.renderConfig.contentVisibility),this.renderConfig.width&&this.svgElement.setAttribute("width",this.renderConfig.width),this.renderConfig.height&&this.svgElement.setAttribute("height",this.renderConfig.height),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),void 0!==this.renderConfig.focusable&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var e=this.globalData.defs;this.setupGlobalData(t,e),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=t;var r=createNS("clipPath"),i=createNS("rect");i.setAttribute("width",t.w),i.setAttribute("height",t.h),i.setAttribute("x",0),i.setAttribute("y",0);var s=createElementID();r.setAttribute("id",s),r.appendChild(i),this.layerElement.setAttribute("clip-path","url("+getLocationHref()+"#"+s+")"),e.appendChild(r),this.layers=t.layers,this.elements=createSizedArray(t.layers.length)},SVGRendererBase.prototype.destroy=function(){var t;this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.layerElement=null,this.globalData.defs=null;var e=this.layers?this.layers.length:0;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},SVGRendererBase.prototype.updateContainerSize=function(){},SVGRendererBase.prototype.findIndexByInd=function(t){var e=0,r=this.layers.length;for(e=0;e<r;e+=1)if(this.layers[e].ind===t)return e;return-1},SVGRendererBase.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!==this.layers[t].ty){e[t]=!0;var r=this.createItem(this.layers[t]);if(e[t]=r,getExpressionsPlugin()&&(0===this.layers[t].ty&&this.globalData.projectInterface.registerComposition(r),r.initExpressions()),this.appendElementInPos(r,t),this.layers[t].tt){var i="tp"in this.layers[t]?this.findIndexByInd(this.layers[t].tp):t-1;if(-1===i)return;if(this.elements[i]&&!0!==this.elements[i]){var s=e[i].getMatte(this.layers[t].tt);r.setMatte(s)}else this.buildItem(i),this.addPendingElement(r)}}},SVGRendererBase.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,r=this.elements.length;e<r;){if(this.elements[e]===t){var i="tp"in t.data?this.findIndexByInd(t.data.tp):e-1,s=this.elements[i].getMatte(this.layers[e].tt);t.setMatte(s);break}e+=1}}},SVGRendererBase.prototype.renderFrame=function(t){if(this.renderedFrame!==t&&!this.destroyed){var e;null===t?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.globalData._mdf=!1;var r=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=r-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);if(this.globalData._mdf)for(e=0;e<r;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},SVGRendererBase.prototype.appendElementInPos=function(t,e){var r=t.getBaseElement();if(r){for(var i,s=0;s<e;)this.elements[s]&&!0!==this.elements[s]&&this.elements[s].getBaseElement()&&(i=this.elements[s].getBaseElement()),s+=1;i?this.layerElement.insertBefore(r,i):this.layerElement.appendChild(r)}},SVGRendererBase.prototype.hide=function(){this.layerElement.style.display="none"},SVGRendererBase.prototype.show=function(){this.layerElement.style.display="block"},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement,RenderableDOMElement],ICompElement),ICompElement.prototype.initElement=function(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initTransform(t,e,r),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),!this.data.xt&&e.progressiveLoad||this.buildAllItems(),this.hide()},ICompElement.prototype.prepareFrame=function(t){if(this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),this.isInRange||this.data.xt){if(this.tm._placeholder)this.renderedFrame=t/this.data.sr;else{var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}var r,i=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),r=i-1;r>=0;r-=1)(this.completeLayers||this.elements[r])&&(this.elements[r].prepareFrame(this.renderedFrame-this.layers[r].st),this.elements[r]._mdf&&(this._mdf=!0))}},ICompElement.prototype.renderInnerContent=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},ICompElement.prototype.setElements=function(t){this.elements=t},ICompElement.prototype.getElements=function(){return this.elements},ICompElement.prototype.destroyElements=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy()},ICompElement.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()},extendPrototype([SVGRendererBase,ICompElement,SVGBaseElement],SVGCompElement),SVGCompElement.prototype.createComp=function(t){return new SVGCompElement(t,this.globalData,this)},extendPrototype([SVGRendererBase],SVGRenderer),SVGRenderer.prototype.createComp=function(t){return new SVGCompElement(t,this.globalData,this)},CVContextData.prototype.duplicate=function(){var t=2*this._length,e=this.savedOp;this.savedOp=createTypedArray("float32",t),this.savedOp.set(e);var r=0;for(r=this._length;r<t;r+=1)this.saved[r]=createTypedArray("float32",16);this._length=t},CVContextData.prototype.reset=function(){this.cArrPos=0,this.cTr.reset(),this.cO=1},ShapeTransformManager.prototype={addTransformSequence:function(t){var e,r=t.length,i="_";for(e=0;e<r;e+=1)i+=t[e].transform.key+"_";var s=this.sequences[i];return s||(s={transforms:[].concat(t),finalTransform:new Matrix,_mdf:!1},this.sequences[i]=s,this.sequenceList.push(s)),s},processSequence:function(t,e){for(var r,i=0,s=t.transforms.length,a=e;i<s&&!e;){if(t.transforms[i].transform.mProps._mdf){a=!0;break}i+=1}if(a)for(t.finalTransform.reset(),i=s-1;i>=0;i-=1)r=t.transforms[i].transform.mProps.v.props,t.finalTransform.transform(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15]);t._mdf=a},processSequences:function(t){var e,r=this.sequenceList.length;for(e=0;e<r;e+=1)this.processSequence(this.sequenceList[e],t)},getNewKey:function(){return this.transform_key_count+=1,"_"+this.transform_key_count}},CVEffects.prototype.renderFrame=function(){},CVMaskElement.prototype.renderFrame=function(){if(this.hasMasks){var t,e,r,i,s=this.element.finalTransform.mat,a=this.element.canvasContext,n=this.masksProperties.length;for(a.beginPath(),t=0;t<n;t+=1)if("n"!==this.masksProperties[t].mode){var o;this.masksProperties[t].inv&&(a.moveTo(0,0),a.lineTo(this.element.globalData.compSize.w,0),a.lineTo(this.element.globalData.compSize.w,this.element.globalData.compSize.h),a.lineTo(0,this.element.globalData.compSize.h),a.lineTo(0,0)),i=this.viewData[t].v,e=s.applyToPointArray(i.v[0][0],i.v[0][1],0),a.moveTo(e[0],e[1]);var h=i._length;for(o=1;o<h;o+=1)r=s.applyToTriplePoints(i.o[o-1],i.i[o],i.v[o]),a.bezierCurveTo(r[0],r[1],r[2],r[3],r[4],r[5]);r=s.applyToTriplePoints(i.o[o-1],i.i[0],i.v[0]),a.bezierCurveTo(r[0],r[1],r[2],r[3],r[4],r[5])}this.element.globalData.renderer.save(!0),a.clip()}},CVMaskElement.prototype.getMaskProperty=MaskElement.prototype.getMaskProperty,CVMaskElement.prototype.destroy=function(){this.element=null},CVBaseElement.prototype={createElements:function(){},initRendererElement:function(){},createContainerElements:function(){this.canvasContext=this.globalData.canvasContext,this.renderableEffectsManager=new CVEffects(this)},createContent:function(){},setBlendMode:function(){var t=this.globalData;if(t.blendMode!==this.data.bm){t.blendMode=this.data.bm;var e=getBlendMode(this.data.bm);t.canvasContext.globalCompositeOperation=e}},createRenderableComponents:function(){this.maskManager=new CVMaskElement(this.data,this)},hideElement:function(){this.hidden||this.isInRange&&!this.isTransparent||(this.hidden=!0)},showElement:function(){this.isInRange&&!this.isTransparent&&(this.hidden=!1,this._isFirstFrame=!0,this.maskManager._isFirstFrame=!0)},renderFrame:function(){if(!this.hidden&&!this.data.hd){this.renderTransform(),this.renderRenderable(),this.setBlendMode();var t=0===this.data.ty;this.globalData.renderer.save(t),this.globalData.renderer.ctxTransform(this.finalTransform.mat.props),this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v),this.renderInnerContent(),this.globalData.renderer.restore(t),this.maskManager.hasMasks&&this.globalData.renderer.restore(!0),this._isFirstFrame&&(this._isFirstFrame=!1)}},destroy:function(){this.canvasContext=null,this.data=null,this.globalData=null,this.maskManager.destroy()},mHelper:new Matrix},CVBaseElement.prototype.hide=CVBaseElement.prototype.hideElement,CVBaseElement.prototype.show=CVBaseElement.prototype.showElement,CVShapeData.prototype.setAsAnimated=SVGShapeData.prototype.setAsAnimated,extendPrototype([BaseElement,TransformElement,CVBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableElement],CVShapeElement),CVShapeElement.prototype.initElement=RenderableDOMElement.prototype.initElement,CVShapeElement.prototype.transformHelper={opacity:1,_opMdf:!1},CVShapeElement.prototype.dashResetter=[],CVShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0,[])},CVShapeElement.prototype.createStyleElement=function(t,e){var r={data:t,type:t.ty,preTransforms:this.transformsManager.addTransformSequence(e),transforms:[],elements:[],closed:!0===t.hd},i={};if("fl"===t.ty||"st"===t.ty?(i.c=PropertyFactory.getProp(this,t.c,1,255,this),i.c.k||(r.co="rgb("+bmFloor(i.c.v[0])+","+bmFloor(i.c.v[1])+","+bmFloor(i.c.v[2])+")")):"gf"!==t.ty&&"gs"!==t.ty||(i.s=PropertyFactory.getProp(this,t.s,1,null,this),i.e=PropertyFactory.getProp(this,t.e,1,null,this),i.h=PropertyFactory.getProp(this,t.h||{k:0},0,.01,this),i.a=PropertyFactory.getProp(this,t.a||{k:0},0,degToRads,this),i.g=new GradientProperty(this,t.g,this)),i.o=PropertyFactory.getProp(this,t.o,0,.01,this),"st"===t.ty||"gs"===t.ty){if(r.lc=lineCapEnum[t.lc||2],r.lj=lineJoinEnum[t.lj||2],1==t.lj&&(r.ml=t.ml),i.w=PropertyFactory.getProp(this,t.w,0,null,this),i.w.k||(r.wi=i.w.v),t.d){var s=new DashProperty(this,t.d,"canvas",this);i.d=s,i.d.k||(r.da=i.d.dashArray,r.do=i.d.dashoffset[0])}}else r.r=2===t.r?"evenodd":"nonzero";return this.stylesList.push(r),i.style=r,i},CVShapeElement.prototype.createGroupElement=function(){return{it:[],prevViewData:[]}},CVShapeElement.prototype.createTransformElement=function(t){return{transform:{opacity:1,_opMdf:!1,key:this.transformsManager.getNewKey(),op:PropertyFactory.getProp(this,t.o,0,.01,this),mProps:TransformPropertyFactory.getTransformProperty(this,t,this)}}},CVShapeElement.prototype.createShapeElement=function(t){var e=new CVShapeData(this,t,this.stylesList,this.transformsManager);return this.shapes.push(e),this.addShapeToModifiers(e),e},CVShapeElement.prototype.reloadShapes=function(){var t;this._isFirstFrame=!0;var e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0,[]),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers(),this.transformsManager.processSequences(this._isFirstFrame)},CVShapeElement.prototype.addTransformToStyleList=function(t){var e,r=this.stylesList.length;for(e=0;e<r;e+=1)this.stylesList[e].closed||this.stylesList[e].transforms.push(t)},CVShapeElement.prototype.removeTransformFromStyleList=function(){var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].closed||this.stylesList[t].transforms.pop()},CVShapeElement.prototype.closeStyles=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e].closed=!0},CVShapeElement.prototype.searchShapes=function(t,e,r,i,s){var a,n,o,h,l,p,c=t.length-1,f=[],d=[],u=[].concat(s);for(a=c;a>=0;a-=1){if((h=this.searchProcessedElement(t[a]))?e[a]=r[h-1]:t[a]._shouldRender=i,"fl"===t[a].ty||"st"===t[a].ty||"gf"===t[a].ty||"gs"===t[a].ty)h?e[a].style.closed=!1:e[a]=this.createStyleElement(t[a],u),f.push(e[a].style);else if("gr"===t[a].ty){if(h)for(o=e[a].it.length,n=0;n<o;n+=1)e[a].prevViewData[n]=e[a].it[n];else e[a]=this.createGroupElement(t[a]);this.searchShapes(t[a].it,e[a].it,e[a].prevViewData,i,u)}else"tr"===t[a].ty?(h||(p=this.createTransformElement(t[a]),e[a]=p),u.push(e[a]),this.addTransformToStyleList(e[a])):"sh"===t[a].ty||"rc"===t[a].ty||"el"===t[a].ty||"sr"===t[a].ty?h||(e[a]=this.createShapeElement(t[a])):"tm"===t[a].ty||"rd"===t[a].ty||"pb"===t[a].ty||"zz"===t[a].ty||"op"===t[a].ty?(h?(l=e[a]).closed=!1:((l=ShapeModifiers.getModifier(t[a].ty)).init(this,t[a]),e[a]=l,this.shapeModifiers.push(l)),d.push(l)):"rp"===t[a].ty&&(h?(l=e[a]).closed=!0:(l=ShapeModifiers.getModifier(t[a].ty),e[a]=l,l.init(this,t,a,e),this.shapeModifiers.push(l),i=!1),d.push(l));this.addProcessedElement(t[a],a+1)}for(this.removeTransformFromStyleList(),this.closeStyles(f),c=d.length,a=0;a<c;a+=1)d[a].closed=!0},CVShapeElement.prototype.renderInnerContent=function(){this.transformHelper.opacity=1,this.transformHelper._opMdf=!1,this.renderModifiers(),this.transformsManager.processSequences(this._isFirstFrame),this.renderShape(this.transformHelper,this.shapesData,this.itemsData,!0)},CVShapeElement.prototype.renderShapeTransform=function(t,e){(t._opMdf||e.op._mdf||this._isFirstFrame)&&(e.opacity=t.opacity,e.opacity*=e.op.v,e._opMdf=!0)},CVShapeElement.prototype.drawLayer=function(){var t,e,r,i,s,a,n,o,h,l=this.stylesList.length,p=this.globalData.renderer,c=this.globalData.canvasContext;for(t=0;t<l;t+=1)if(("st"!==(o=(h=this.stylesList[t]).type)&&"gs"!==o||0!==h.wi)&&h.data._shouldRender&&0!==h.coOp&&0!==this.globalData.currentGlobalAlpha){for(p.save(),a=h.elements,"st"===o||"gs"===o?(c.strokeStyle="st"===o?h.co:h.grd,c.lineWidth=h.wi,c.lineCap=h.lc,c.lineJoin=h.lj,c.miterLimit=h.ml||0):c.fillStyle="fl"===o?h.co:h.grd,p.ctxOpacity(h.coOp),"st"!==o&&"gs"!==o&&c.beginPath(),p.ctxTransform(h.preTransforms.finalTransform.props),r=a.length,e=0;e<r;e+=1){for("st"!==o&&"gs"!==o||(c.beginPath(),h.da&&(c.setLineDash(h.da),c.lineDashOffset=h.do)),s=(n=a[e].trNodes).length,i=0;i<s;i+=1)"m"===n[i].t?c.moveTo(n[i].p[0],n[i].p[1]):"c"===n[i].t?c.bezierCurveTo(n[i].pts[0],n[i].pts[1],n[i].pts[2],n[i].pts[3],n[i].pts[4],n[i].pts[5]):c.closePath();"st"!==o&&"gs"!==o||(c.stroke(),h.da&&c.setLineDash(this.dashResetter))}"st"!==o&&"gs"!==o&&c.fill(h.r),p.restore()}},CVShapeElement.prototype.renderShape=function(t,e,r,i){var s,a;for(a=t,s=e.length-1;s>=0;s-=1)"tr"===e[s].ty?(a=r[s].transform,this.renderShapeTransform(t,a)):"sh"===e[s].ty||"el"===e[s].ty||"rc"===e[s].ty||"sr"===e[s].ty?this.renderPath(e[s],r[s]):"fl"===e[s].ty?this.renderFill(e[s],r[s],a):"st"===e[s].ty?this.renderStroke(e[s],r[s],a):"gf"===e[s].ty||"gs"===e[s].ty?this.renderGradientFill(e[s],r[s],a):"gr"===e[s].ty?this.renderShape(a,e[s].it,r[s].it):e[s].ty;i&&this.drawLayer()},CVShapeElement.prototype.renderStyledShape=function(t,e){if(this._isFirstFrame||e._mdf||t.transforms._mdf){var r,i,s,a=t.trNodes,n=e.paths,o=n._length;a.length=0;var h=t.transforms.finalTransform;for(s=0;s<o;s+=1){var l=n.shapes[s];if(l&&l.v){for(i=l._length,r=1;r<i;r+=1)1===r&&a.push({t:"m",p:h.applyToPointArray(l.v[0][0],l.v[0][1],0)}),a.push({t:"c",pts:h.applyToTriplePoints(l.o[r-1],l.i[r],l.v[r])});1===i&&a.push({t:"m",p:h.applyToPointArray(l.v[0][0],l.v[0][1],0)}),l.c&&i&&(a.push({t:"c",pts:h.applyToTriplePoints(l.o[r-1],l.i[0],l.v[0])}),a.push({t:"z"}))}}t.trNodes=a}},CVShapeElement.prototype.renderPath=function(t,e){if(!0!==t.hd&&t._shouldRender){var r,i=e.styledShapes.length;for(r=0;r<i;r+=1)this.renderStyledShape(e.styledShapes[r],e.sh)}},CVShapeElement.prototype.renderFill=function(t,e,r){var i=e.style;(e.c._mdf||this._isFirstFrame)&&(i.co="rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||r._opMdf||this._isFirstFrame)&&(i.coOp=e.o.v*r.opacity)},CVShapeElement.prototype.renderGradientFill=function(t,e,r){var i,s=e.style;if(!s.grd||e.g._mdf||e.s._mdf||e.e._mdf||1!==t.t&&(e.h._mdf||e.a._mdf)){var a,n=this.globalData.canvasContext,o=e.s.v,h=e.e.v;if(1===t.t)i=n.createLinearGradient(o[0],o[1],h[0],h[1]);else{var l=Math.sqrt(Math.pow(o[0]-h[0],2)+Math.pow(o[1]-h[1],2)),p=Math.atan2(h[1]-o[1],h[0]-o[0]),c=e.h.v;c>=1?c=.99:c<=-1&&(c=-.99);var f=l*c,d=Math.cos(p+e.a.v)*f+o[0],u=Math.sin(p+e.a.v)*f+o[1];i=n.createRadialGradient(d,u,0,o[0],o[1],l)}var m=t.g.p,y=e.g.c,g=1;for(a=0;a<m;a+=1)e.g._hasOpacity&&e.g._collapsable&&(g=e.g.o[2*a+1]),i.addColorStop(y[4*a]/100,"rgba("+y[4*a+1]+","+y[4*a+2]+","+y[4*a+3]+","+g+")");s.grd=i}s.coOp=e.o.v*r.opacity},CVShapeElement.prototype.renderStroke=function(t,e,r){var i=e.style,s=e.d;s&&(s._mdf||this._isFirstFrame)&&(i.da=s.dashArray,i.do=s.dashoffset[0]),(e.c._mdf||this._isFirstFrame)&&(i.co="rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||r._opMdf||this._isFirstFrame)&&(i.coOp=e.o.v*r.opacity),(e.w._mdf||this._isFirstFrame)&&(i.wi=e.w.v)},CVShapeElement.prototype.destroy=function(){this.shapesData=null,this.globalData=null,this.canvasContext=null,this.stylesList.length=0,this.itemsData.length=0},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement,ITextElement],CVTextElement),CVTextElement.prototype.tHelper=createTag("canvas").getContext("2d"),CVTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=createSizedArray(t.l?t.l.length:0);var e=!1;t.fc?(e=!0,this.values.fill=this.buildColor(t.fc)):this.values.fill="rgba(0,0,0,0)",this.fill=e;var r=!1;t.sc&&(r=!0,this.values.stroke=this.buildColor(t.sc),this.values.sWidth=t.sw);var i,s,a,n,o,h,l,p,c,f,d,u,m=this.globalData.fontManager.getFontByName(t.f),y=t.l,g=this.mHelper;this.stroke=r,this.values.fValue=t.finalSize+"px "+this.globalData.fontManager.getFontByName(t.f).fFamily,s=t.finalText.length;var v=this.data.singleShape,b=.001*t.tr*t.finalSize,_=0,P=0,E=!0,S=0;for(i=0;i<s;i+=1){n=(a=this.globalData.fontManager.getCharData(t.finalText[i],m.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily))&&a.data||{},g.reset(),v&&y[i].n&&(_=-b,P+=t.yOffset,P+=E?1:0,E=!1),c=(l=n.shapes?n.shapes[0].it:[]).length,g.scale(t.finalSize/100,t.finalSize/100),v&&this.applyTextPropertiesToMatrix(t,g,y[i].line,_,P),d=createSizedArray(c-1);var x=0;for(p=0;p<c;p+=1)if("sh"===l[p].ty){for(h=l[p].ks.k.i.length,f=l[p].ks.k,u=[],o=1;o<h;o+=1)1===o&&u.push(g.applyToX(f.v[0][0],f.v[0][1],0),g.applyToY(f.v[0][0],f.v[0][1],0)),u.push(g.applyToX(f.o[o-1][0],f.o[o-1][1],0),g.applyToY(f.o[o-1][0],f.o[o-1][1],0),g.applyToX(f.i[o][0],f.i[o][1],0),g.applyToY(f.i[o][0],f.i[o][1],0),g.applyToX(f.v[o][0],f.v[o][1],0),g.applyToY(f.v[o][0],f.v[o][1],0));u.push(g.applyToX(f.o[o-1][0],f.o[o-1][1],0),g.applyToY(f.o[o-1][0],f.o[o-1][1],0),g.applyToX(f.i[0][0],f.i[0][1],0),g.applyToY(f.i[0][0],f.i[0][1],0),g.applyToX(f.v[0][0],f.v[0][1],0),g.applyToY(f.v[0][0],f.v[0][1],0)),d[x]=u,x+=1}v&&(_+=y[i].l,_+=b),this.textSpans[S]?this.textSpans[S].elem=d:this.textSpans[S]={elem:d},S+=1}},CVTextElement.prototype.renderInnerContent=function(){var t,e,r,i,s,a,n=this.canvasContext;n.font=this.values.fValue,n.lineCap="butt",n.lineJoin="miter",n.miterLimit=4,this.data.singleShape||this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag);var o,h=this.textAnimator.renderedLetters,l=this.textProperty.currentData.l;e=l.length;var p,c,f=null,d=null,u=null;for(t=0;t<e;t+=1)if(!l[t].n){if((o=h[t])&&(this.globalData.renderer.save(),this.globalData.renderer.ctxTransform(o.p),this.globalData.renderer.ctxOpacity(o.o)),this.fill){for(o&&o.fc?f!==o.fc&&(f=o.fc,n.fillStyle=o.fc):f!==this.values.fill&&(f=this.values.fill,n.fillStyle=this.values.fill),i=(p=this.textSpans[t].elem).length,this.globalData.canvasContext.beginPath(),r=0;r<i;r+=1)for(a=(c=p[r]).length,this.globalData.canvasContext.moveTo(c[0],c[1]),s=2;s<a;s+=6)this.globalData.canvasContext.bezierCurveTo(c[s],c[s+1],c[s+2],c[s+3],c[s+4],c[s+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.fill()}if(this.stroke){for(o&&o.sw?u!==o.sw&&(u=o.sw,n.lineWidth=o.sw):u!==this.values.sWidth&&(u=this.values.sWidth,n.lineWidth=this.values.sWidth),o&&o.sc?d!==o.sc&&(d=o.sc,n.strokeStyle=o.sc):d!==this.values.stroke&&(d=this.values.stroke,n.strokeStyle=this.values.stroke),i=(p=this.textSpans[t].elem).length,this.globalData.canvasContext.beginPath(),r=0;r<i;r+=1)for(a=(c=p[r]).length,this.globalData.canvasContext.moveTo(c[0],c[1]),s=2;s<a;s+=6)this.globalData.canvasContext.bezierCurveTo(c[s],c[s+1],c[s+2],c[s+3],c[s+4],c[s+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.stroke()}o&&this.globalData.renderer.restore()}},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVImageElement),CVImageElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVImageElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVImageElement.prototype.createContent=function(){if(this.img.width&&(this.assetData.w!==this.img.width||this.assetData.h!==this.img.height)){var t=createTag("canvas");t.width=this.assetData.w,t.height=this.assetData.h;var e,r,i=t.getContext("2d"),s=this.img.width,a=this.img.height,n=s/a,o=this.assetData.w/this.assetData.h,h=this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio;n>o&&"xMidYMid slice"===h||n<o&&"xMidYMid slice"!==h?e=(r=a)*o:r=(e=s)/o,i.drawImage(this.img,(s-e)/2,(a-r)/2,e,r,0,0,this.assetData.w,this.assetData.h),this.img=t}},CVImageElement.prototype.renderInnerContent=function(){this.canvasContext.drawImage(this.img,0,0)},CVImageElement.prototype.destroy=function(){this.img=null},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVSolidElement),CVSolidElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVSolidElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVSolidElement.prototype.renderInnerContent=function(){var t=this.canvasContext;t.fillStyle=this.data.sc,t.fillRect(0,0,this.data.sw,this.data.sh)},extendPrototype([BaseRenderer],CanvasRendererBase),CanvasRendererBase.prototype.createShape=function(t){return new CVShapeElement(t,this.globalData,this)},CanvasRendererBase.prototype.createText=function(t){return new CVTextElement(t,this.globalData,this)},CanvasRendererBase.prototype.createImage=function(t){return new CVImageElement(t,this.globalData,this)},CanvasRendererBase.prototype.createSolid=function(t){return new CVSolidElement(t,this.globalData,this)},CanvasRendererBase.prototype.createNull=SVGRenderer.prototype.createNull,CanvasRendererBase.prototype.ctxTransform=function(t){if(1!==t[0]||0!==t[1]||0!==t[4]||1!==t[5]||0!==t[12]||0!==t[13])if(this.renderConfig.clearCanvas){this.transformMat.cloneFromProps(t);var e=this.contextData.cTr.props;this.transformMat.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]),this.contextData.cTr.cloneFromProps(this.transformMat.props);var r=this.contextData.cTr.props;this.canvasContext.setTransform(r[0],r[1],r[4],r[5],r[12],r[13])}else this.canvasContext.transform(t[0],t[1],t[4],t[5],t[12],t[13])},CanvasRendererBase.prototype.ctxOpacity=function(t){if(!this.renderConfig.clearCanvas)return this.canvasContext.globalAlpha*=t<0?0:t,void(this.globalData.currentGlobalAlpha=this.contextData.cO);this.contextData.cO*=t<0?0:t,this.globalData.currentGlobalAlpha!==this.contextData.cO&&(this.canvasContext.globalAlpha=this.contextData.cO,this.globalData.currentGlobalAlpha=this.contextData.cO)},CanvasRendererBase.prototype.reset=function(){this.renderConfig.clearCanvas?this.contextData.reset():this.canvasContext.restore()},CanvasRendererBase.prototype.save=function(t){if(this.renderConfig.clearCanvas){t&&this.canvasContext.save();var e,r=this.contextData.cTr.props;this.contextData._length<=this.contextData.cArrPos&&this.contextData.duplicate();var i=this.contextData.saved[this.contextData.cArrPos];for(e=0;e<16;e+=1)i[e]=r[e];this.contextData.savedOp[this.contextData.cArrPos]=this.contextData.cO,this.contextData.cArrPos+=1}else this.canvasContext.save()},CanvasRendererBase.prototype.restore=function(t){if(this.renderConfig.clearCanvas){t&&(this.canvasContext.restore(),this.globalData.blendMode="source-over"),this.contextData.cArrPos-=1;var e,r=this.contextData.saved[this.contextData.cArrPos],i=this.contextData.cTr.props;for(e=0;e<16;e+=1)i[e]=r[e];this.canvasContext.setTransform(r[0],r[1],r[4],r[5],r[12],r[13]),r=this.contextData.savedOp[this.contextData.cArrPos],this.contextData.cO=r,this.globalData.currentGlobalAlpha!==r&&(this.canvasContext.globalAlpha=r,this.globalData.currentGlobalAlpha=r)}else this.canvasContext.restore()},CanvasRendererBase.prototype.configAnimation=function(t){if(this.animationItem.wrapper){this.animationItem.container=createTag("canvas");var e=this.animationItem.container.style;e.width="100%",e.height="100%";var r="0px 0px 0px";e.transformOrigin=r,e.mozTransformOrigin=r,e.webkitTransformOrigin=r,e["-webkit-transform"]=r,e.contentVisibility=this.renderConfig.contentVisibility,this.animationItem.wrapper.appendChild(this.animationItem.container),this.canvasContext=this.animationItem.container.getContext("2d"),this.renderConfig.className&&this.animationItem.container.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.animationItem.container.setAttribute("id",this.renderConfig.id)}else this.canvasContext=this.renderConfig.context;this.data=t,this.layers=t.layers,this.transformCanvas={w:t.w,h:t.h,sx:0,sy:0,tx:0,ty:0},this.setupGlobalData(t,document.body),this.globalData.canvasContext=this.canvasContext,this.globalData.renderer=this,this.globalData.isDashed=!1,this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.globalData.transformCanvas=this.transformCanvas,this.elements=createSizedArray(t.layers.length),this.updateContainerSize()},CanvasRendererBase.prototype.updateContainerSize=function(t,e){var r,i,s,a;if(this.reset(),t?(r=t,i=e,this.canvasContext.canvas.width=r,this.canvasContext.canvas.height=i):(this.animationItem.wrapper&&this.animationItem.container?(r=this.animationItem.wrapper.offsetWidth,i=this.animationItem.wrapper.offsetHeight):(r=this.canvasContext.canvas.width,i=this.canvasContext.canvas.height),this.canvasContext.canvas.width=r*this.renderConfig.dpr,this.canvasContext.canvas.height=i*this.renderConfig.dpr),-1!==this.renderConfig.preserveAspectRatio.indexOf("meet")||-1!==this.renderConfig.preserveAspectRatio.indexOf("slice")){var n=this.renderConfig.preserveAspectRatio.split(" "),o=n[1]||"meet",h=n[0]||"xMidYMid",l=h.substr(0,4),p=h.substr(4);s=r/i,(a=this.transformCanvas.w/this.transformCanvas.h)>s&&"meet"===o||a<s&&"slice"===o?(this.transformCanvas.sx=r/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=r/(this.transformCanvas.w/this.renderConfig.dpr)):(this.transformCanvas.sx=i/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.sy=i/(this.transformCanvas.h/this.renderConfig.dpr)),this.transformCanvas.tx="xMid"===l&&(a<s&&"meet"===o||a>s&&"slice"===o)?(r-this.transformCanvas.w*(i/this.transformCanvas.h))/2*this.renderConfig.dpr:"xMax"===l&&(a<s&&"meet"===o||a>s&&"slice"===o)?(r-this.transformCanvas.w*(i/this.transformCanvas.h))*this.renderConfig.dpr:0,this.transformCanvas.ty="YMid"===p&&(a>s&&"meet"===o||a<s&&"slice"===o)?(i-this.transformCanvas.h*(r/this.transformCanvas.w))/2*this.renderConfig.dpr:"YMax"===p&&(a>s&&"meet"===o||a<s&&"slice"===o)?(i-this.transformCanvas.h*(r/this.transformCanvas.w))*this.renderConfig.dpr:0}else"none"===this.renderConfig.preserveAspectRatio?(this.transformCanvas.sx=r/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=i/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.tx=0,this.transformCanvas.ty=0):(this.transformCanvas.sx=this.renderConfig.dpr,this.transformCanvas.sy=this.renderConfig.dpr,this.transformCanvas.tx=0,this.transformCanvas.ty=0);this.transformCanvas.props=[this.transformCanvas.sx,0,0,0,0,this.transformCanvas.sy,0,0,0,0,1,0,this.transformCanvas.tx,this.transformCanvas.ty,0,1],this.ctxTransform(this.transformCanvas.props),this.canvasContext.beginPath(),this.canvasContext.rect(0,0,this.transformCanvas.w,this.transformCanvas.h),this.canvasContext.closePath(),this.canvasContext.clip(),this.renderFrame(this.renderedFrame,!0)},CanvasRendererBase.prototype.destroy=function(){var t;for(this.renderConfig.clearCanvas&&this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),t=(this.layers?this.layers.length:0)-1;t>=0;t-=1)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.globalData.canvasContext=null,this.animationItem.container=null,this.destroyed=!0},CanvasRendererBase.prototype.renderFrame=function(t,e){if((this.renderedFrame!==t||!0!==this.renderConfig.clearCanvas||e)&&!this.destroyed&&-1!==t){var r;this.renderedFrame=t,this.globalData.frameNum=t-this.animationItem._isFirstFrame,this.globalData.frameId+=1,this.globalData._mdf=!this.renderConfig.clearCanvas||e,this.globalData.projectInterface.currentFrame=t;var i=this.layers.length;for(this.completeLayers||this.checkLayers(t),r=0;r<i;r+=1)(this.completeLayers||this.elements[r])&&this.elements[r].prepareFrame(t-this.layers[r].st);if(this.globalData._mdf){for(!0===this.renderConfig.clearCanvas?this.canvasContext.clearRect(0,0,this.transformCanvas.w,this.transformCanvas.h):this.save(),r=i-1;r>=0;r-=1)(this.completeLayers||this.elements[r])&&this.elements[r].renderFrame();!0!==this.renderConfig.clearCanvas&&this.restore()}}},CanvasRendererBase.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!==this.layers[t].ty){var r=this.createItem(this.layers[t],this,this.globalData);e[t]=r,r.initExpressions()}},CanvasRendererBase.prototype.checkPendingElements=function(){for(;this.pendingElements.length;)this.pendingElements.pop().checkParenting()},CanvasRendererBase.prototype.hide=function(){this.animationItem.container.style.display="none"},CanvasRendererBase.prototype.show=function(){this.animationItem.container.style.display="block"},extendPrototype([CanvasRendererBase,ICompElement,CVBaseElement],CVCompElement),CVCompElement.prototype.renderInnerContent=function(){var t,e=this.canvasContext;for(e.beginPath(),e.moveTo(0,0),e.lineTo(this.data.w,0),e.lineTo(this.data.w,this.data.h),e.lineTo(0,this.data.h),e.lineTo(0,0),e.clip(),t=this.layers.length-1;t>=0;t-=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},CVCompElement.prototype.destroy=function(){var t;for(t=this.layers.length-1;t>=0;t-=1)this.elements[t]&&this.elements[t].destroy();this.layers=null,this.elements=null},CVCompElement.prototype.createComp=function(t){return new CVCompElement(t,this.globalData,this)},extendPrototype([CanvasRendererBase],CanvasRenderer),CanvasRenderer.prototype.createComp=function(t){return new CVCompElement(t,this.globalData,this)},HBaseElement.prototype={checkBlendMode:function(){},initRendererElement:function(){this.baseElement=createTag(this.data.tg||"div"),this.data.hasMask?(this.svgElement=createNS("svg"),this.layerElement=createNS("g"),this.maskedElement=this.layerElement,this.svgElement.appendChild(this.layerElement),this.baseElement.appendChild(this.svgElement)):this.layerElement=this.baseElement,styleDiv(this.baseElement)},createContainerElements:function(){this.renderableEffectsManager=new CVEffects(this),this.transformedElement=this.baseElement,this.maskedElement=this.layerElement,this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),0!==this.data.bm&&this.setBlendMode()},renderElement:function(){var t=this.transformedElement?this.transformedElement.style:{};if(this.finalTransform._matMdf){var e=this.finalTransform.mat.toCSS();t.transform=e,t.webkitTransform=e}this.finalTransform._opMdf&&(t.opacity=this.finalTransform.mProp.o.v)},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},destroy:function(){this.layerElement=null,this.transformedElement=null,this.matteElement&&(this.matteElement=null),this.maskManager&&(this.maskManager.destroy(),this.maskManager=null)},createRenderableComponents:function(){this.maskManager=new MaskElement(this.data,this,this.globalData)},addEffects:function(){},setMatte:function(){}},HBaseElement.prototype.getBaseElement=SVGBaseElement.prototype.getBaseElement,HBaseElement.prototype.destroyBaseElement=HBaseElement.prototype.destroy,HBaseElement.prototype.buildElementParenting=BaseRenderer.prototype.buildElementParenting,extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],HSolidElement),HSolidElement.prototype.createContent=function(){var t;this.data.hasMask?((t=createNS("rect")).setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.svgElement.setAttribute("width",this.data.sw),this.svgElement.setAttribute("height",this.data.sh)):((t=createTag("div")).style.width=this.data.sw+"px",t.style.height=this.data.sh+"px",t.style.backgroundColor=this.data.sc),this.layerElement.appendChild(t)},extendPrototype([BaseElement,TransformElement,HSolidElement,SVGShapeElement,HBaseElement,HierarchyElement,FrameElement,RenderableElement],HShapeElement),HShapeElement.prototype._renderShapeFrame=HShapeElement.prototype.renderInnerContent,HShapeElement.prototype.createContent=function(){var t;if(this.baseElement.style.fontSize=0,this.data.hasMask)this.layerElement.appendChild(this.shapesContainer),t=this.svgElement;else{t=createNS("svg");var e=this.comp.data?this.comp.data:this.globalData.compSize;t.setAttribute("width",e.w),t.setAttribute("height",e.h),t.appendChild(this.shapesContainer),this.layerElement.appendChild(t)}this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.shapesContainer,0,[],!0),this.filterUniqueShapes(),this.shapeCont=t},HShapeElement.prototype.getTransformedPoint=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)e=t[r].mProps.v.applyToPointArray(e[0],e[1],0);return e},HShapeElement.prototype.calculateShapeBoundingBox=function(t,e){var r,i,s,a,n,o=t.sh.v,h=t.transformers,l=o._length;if(!(l<=1)){for(r=0;r<l-1;r+=1)i=this.getTransformedPoint(h,o.v[r]),s=this.getTransformedPoint(h,o.o[r]),a=this.getTransformedPoint(h,o.i[r+1]),n=this.getTransformedPoint(h,o.v[r+1]),this.checkBounds(i,s,a,n,e);o.c&&(i=this.getTransformedPoint(h,o.v[r]),s=this.getTransformedPoint(h,o.o[r]),a=this.getTransformedPoint(h,o.i[0]),n=this.getTransformedPoint(h,o.v[0]),this.checkBounds(i,s,a,n,e))}},HShapeElement.prototype.checkBounds=function(t,e,r,i,s){this.getBoundsOfCurve(t,e,r,i);var a=this.shapeBoundingBox;s.x=bmMin(a.left,s.x),s.xMax=bmMax(a.right,s.xMax),s.y=bmMin(a.top,s.y),s.yMax=bmMax(a.bottom,s.yMax)},HShapeElement.prototype.shapeBoundingBox={left:0,right:0,top:0,bottom:0},HShapeElement.prototype.tempBoundingBox={x:0,xMax:0,y:0,yMax:0,width:0,height:0},HShapeElement.prototype.getBoundsOfCurve=function(t,e,r,i){for(var s,a,n,o,h,l,p,c=[[t[0],i[0]],[t[1],i[1]]],f=0;f<2;++f)a=6*t[f]-12*e[f]+6*r[f],s=-3*t[f]+9*e[f]-9*r[f]+3*i[f],n=3*e[f]-3*t[f],a|=0,n|=0,0==(s|=0)&&0===a||(0===s?(o=-n/a)>0&&o<1&&c[f].push(this.calculateF(o,t,e,r,i,f)):(h=a*a-4*n*s)>=0&&((l=(-a+bmSqrt(h))/(2*s))>0&&l<1&&c[f].push(this.calculateF(l,t,e,r,i,f)),(p=(-a-bmSqrt(h))/(2*s))>0&&p<1&&c[f].push(this.calculateF(p,t,e,r,i,f))));this.shapeBoundingBox.left=bmMin.apply(null,c[0]),this.shapeBoundingBox.top=bmMin.apply(null,c[1]),this.shapeBoundingBox.right=bmMax.apply(null,c[0]),this.shapeBoundingBox.bottom=bmMax.apply(null,c[1])},HShapeElement.prototype.calculateF=function(t,e,r,i,s,a){return bmPow(1-t,3)*e[a]+3*bmPow(1-t,2)*t*r[a]+3*(1-t)*bmPow(t,2)*i[a]+bmPow(t,3)*s[a]},HShapeElement.prototype.calculateBoundingBox=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)t[r]&&t[r].sh?this.calculateShapeBoundingBox(t[r],e):t[r]&&t[r].it?this.calculateBoundingBox(t[r].it,e):t[r]&&t[r].style&&t[r].w&&this.expandStrokeBoundingBox(t[r].w,e)},HShapeElement.prototype.expandStrokeBoundingBox=function(t,e){var r=0;if(t.keyframes){for(var i=0;i<t.keyframes.length;i+=1){var s=t.keyframes[i].s;s>r&&(r=s)}r*=t.mult}else r=t.v*t.mult;e.x-=r,e.xMax+=r,e.y-=r,e.yMax+=r},HShapeElement.prototype.currentBoxContains=function(t){return this.currentBBox.x<=t.x&&this.currentBBox.y<=t.y&&this.currentBBox.width+this.currentBBox.x>=t.x+t.width&&this.currentBBox.height+this.currentBBox.y>=t.y+t.height},HShapeElement.prototype.renderInnerContent=function(){if(this._renderShapeFrame(),!this.hidden&&(this._isFirstFrame||this._mdf)){var t=this.tempBoundingBox,e=999999;if(t.x=e,t.xMax=-e,t.y=e,t.yMax=-e,this.calculateBoundingBox(this.itemsData,t),t.width=t.xMax<t.x?0:t.xMax-t.x,t.height=t.yMax<t.y?0:t.yMax-t.y,this.currentBoxContains(t))return;var r=!1;if(this.currentBBox.w!==t.width&&(this.currentBBox.w=t.width,this.shapeCont.setAttribute("width",t.width),r=!0),this.currentBBox.h!==t.height&&(this.currentBBox.h=t.height,this.shapeCont.setAttribute("height",t.height),r=!0),r||this.currentBBox.x!==t.x||this.currentBBox.y!==t.y){this.currentBBox.w=t.width,this.currentBBox.h=t.height,this.currentBBox.x=t.x,this.currentBBox.y=t.y,this.shapeCont.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h);var i=this.shapeCont.style,s="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)";i.transform=s,i.webkitTransform=s}}},extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],HTextElement),HTextElement.prototype.createContent=function(){if(this.isMasked=this.checkMasks(),this.isMasked){this.renderType="svg",this.compW=this.comp.data.w,this.compH=this.comp.data.h,this.svgElement.setAttribute("width",this.compW),this.svgElement.setAttribute("height",this.compH);var t=createNS("g");this.maskedElement.appendChild(t),this.innerElem=t}else this.renderType="html",this.innerElem=this.layerElement;this.checkParenting()},HTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=createSizedArray(t.l?t.l.length:0);var e=this.innerElem.style,r=t.fc?this.buildColor(t.fc):"rgba(0,0,0,0)";e.fill=r,e.color=r,t.sc&&(e.stroke=this.buildColor(t.sc),e.strokeWidth=t.sw+"px");var i,s,a=this.globalData.fontManager.getFontByName(t.f);if(!this.globalData.fontManager.chars)if(e.fontSize=t.finalSize+"px",e.lineHeight=t.finalSize+"px",a.fClass)this.innerElem.className=a.fClass;else{e.fontFamily=a.fFamily;var n=t.fWeight,o=t.fStyle;e.fontStyle=o,e.fontWeight=n}var h,l,p,c=t.l;s=c.length;var f,d=this.mHelper,u="",m=0;for(i=0;i<s;i+=1){if(this.globalData.fontManager.chars?(this.textPaths[m]?h=this.textPaths[m]:((h=createNS("path")).setAttribute("stroke-linecap",lineCapEnum[1]),h.setAttribute("stroke-linejoin",lineJoinEnum[2]),h.setAttribute("stroke-miterlimit","4")),this.isMasked||(this.textSpans[m]?p=(l=this.textSpans[m]).children[0]:((l=createTag("div")).style.lineHeight=0,(p=createNS("svg")).appendChild(h),styleDiv(l)))):this.isMasked?h=this.textPaths[m]?this.textPaths[m]:createNS("text"):this.textSpans[m]?(l=this.textSpans[m],h=this.textPaths[m]):(styleDiv(l=createTag("span")),styleDiv(h=createTag("span")),l.appendChild(h)),this.globalData.fontManager.chars){var y,g=this.globalData.fontManager.getCharData(t.finalText[i],a.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily);if(y=g?g.data:null,d.reset(),y&&y.shapes&&y.shapes.length&&(f=y.shapes[0].it,d.scale(t.finalSize/100,t.finalSize/100),u=this.createPathShape(d,f),h.setAttribute("d",u)),this.isMasked)this.innerElem.appendChild(h);else{if(this.innerElem.appendChild(l),y&&y.shapes){document.body.appendChild(p);var v=p.getBBox();p.setAttribute("width",v.width+2),p.setAttribute("height",v.height+2),p.setAttribute("viewBox",v.x-1+" "+(v.y-1)+" "+(v.width+2)+" "+(v.height+2));var b=p.style,_="translate("+(v.x-1)+"px,"+(v.y-1)+"px)";b.transform=_,b.webkitTransform=_,c[i].yOffset=v.y-1}else p.setAttribute("width",1),p.setAttribute("height",1);l.appendChild(p)}}else if(h.textContent=c[i].val,h.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),this.isMasked)this.innerElem.appendChild(h);else{this.innerElem.appendChild(l);var P=h.style,E="translate3d(0,"+-t.finalSize/1.2+"px,0)";P.transform=E,P.webkitTransform=E}this.isMasked?this.textSpans[m]=h:this.textSpans[m]=l,this.textSpans[m].style.display="block",this.textPaths[m]=h,m+=1}for(;m<this.textSpans.length;)this.textSpans[m].style.display="none",m+=1},HTextElement.prototype.renderInnerContent=function(){var t;if(this.data.singleShape){if(!this._isFirstFrame&&!this.lettersChangedFlag)return;if(this.isMasked&&this.finalTransform._matMdf){this.svgElement.setAttribute("viewBox",-this.finalTransform.mProp.p.v[0]+" "+-this.finalTransform.mProp.p.v[1]+" "+this.compW+" "+this.compH),t=this.svgElement.style;var e="translate("+-this.finalTransform.mProp.p.v[0]+"px,"+-this.finalTransform.mProp.p.v[1]+"px)";t.transform=e,t.webkitTransform=e}}if(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag){var r,i,s,a,n,o=0,h=this.textAnimator.renderedLetters,l=this.textProperty.currentData.l;for(i=l.length,r=0;r<i;r+=1)l[r].n?o+=1:(a=this.textSpans[r],n=this.textPaths[r],s=h[o],o+=1,s._mdf.m&&(this.isMasked?a.setAttribute("transform",s.m):(a.style.webkitTransform=s.m,a.style.transform=s.m)),a.style.opacity=s.o,s.sw&&s._mdf.sw&&n.setAttribute("stroke-width",s.sw),s.sc&&s._mdf.sc&&n.setAttribute("stroke",s.sc),s.fc&&s._mdf.fc&&(n.setAttribute("fill",s.fc),n.style.color=s.fc));if(this.innerElem.getBBox&&!this.hidden&&(this._isFirstFrame||this._mdf)){var p=this.innerElem.getBBox();if(this.currentBBox.w!==p.width&&(this.currentBBox.w=p.width,this.svgElement.setAttribute("width",p.width)),this.currentBBox.h!==p.height&&(this.currentBBox.h=p.height,this.svgElement.setAttribute("height",p.height)),this.currentBBox.w!==p.width+2||this.currentBBox.h!==p.height+2||this.currentBBox.x!==p.x-1||this.currentBBox.y!==p.y-1){this.currentBBox.w=p.width+2,this.currentBBox.h=p.height+2,this.currentBBox.x=p.x-1,this.currentBBox.y=p.y-1,this.svgElement.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h),t=this.svgElement.style;var c="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)";t.transform=c,t.webkitTransform=c}}}},extendPrototype([BaseElement,FrameElement,HierarchyElement],HCameraElement),HCameraElement.prototype.setup=function(){var t,e,r,i,s=this.comp.threeDElements.length;for(t=0;t<s;t+=1)if("3d"===(e=this.comp.threeDElements[t]).type){r=e.perspectiveElem.style,i=e.container.style;var a=this.pe.v+"px",n="0px 0px 0px",o="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";r.perspective=a,r.webkitPerspective=a,i.transformOrigin=n,i.mozTransformOrigin=n,i.webkitTransformOrigin=n,r.transform=o,r.webkitTransform=o}},HCameraElement.prototype.createElements=function(){},HCameraElement.prototype.hide=function(){},HCameraElement.prototype.renderFrame=function(){var t,e,r=this._isFirstFrame;if(this.hierarchy)for(e=this.hierarchy.length,t=0;t<e;t+=1)r=this.hierarchy[t].finalTransform.mProp._mdf||r;if(r||this.pe._mdf||this.p&&this.p._mdf||this.px&&(this.px._mdf||this.py._mdf||this.pz._mdf)||this.rx._mdf||this.ry._mdf||this.rz._mdf||this.or._mdf||this.a&&this.a._mdf){if(this.mat.reset(),this.hierarchy)for(t=e=this.hierarchy.length-1;t>=0;t-=1){var i=this.hierarchy[t].finalTransform.mProp;this.mat.translate(-i.p.v[0],-i.p.v[1],i.p.v[2]),this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]),this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v),this.mat.scale(1/i.s.v[0],1/i.s.v[1],1/i.s.v[2]),this.mat.translate(i.a.v[0],i.a.v[1],i.a.v[2])}if(this.p?this.mat.translate(-this.p.v[0],-this.p.v[1],this.p.v[2]):this.mat.translate(-this.px.v,-this.py.v,this.pz.v),this.a){var s;s=this.p?[this.p.v[0]-this.a.v[0],this.p.v[1]-this.a.v[1],this.p.v[2]-this.a.v[2]]:[this.px.v-this.a.v[0],this.py.v-this.a.v[1],this.pz.v-this.a.v[2]];var a=Math.sqrt(Math.pow(s[0],2)+Math.pow(s[1],2)+Math.pow(s[2],2)),n=[s[0]/a,s[1]/a,s[2]/a],o=Math.sqrt(n[2]*n[2]+n[0]*n[0]),h=Math.atan2(n[1],o),l=Math.atan2(n[0],-n[2]);this.mat.rotateY(l).rotateX(-h)}this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),this.mat.translate(this.globalData.compSize.w/2,this.globalData.compSize.h/2,0),this.mat.translate(0,0,this.pe.v);var p=!this._prevMat.equals(this.mat);if((p||this.pe._mdf)&&this.comp.threeDElements){var c,f,d;for(e=this.comp.threeDElements.length,t=0;t<e;t+=1)if("3d"===(c=this.comp.threeDElements[t]).type){if(p){var u=this.mat.toCSS();(d=c.container.style).transform=u,d.webkitTransform=u}this.pe._mdf&&((f=c.perspectiveElem.style).perspective=this.pe.v+"px",f.webkitPerspective=this.pe.v+"px")}this.mat.clone(this._prevMat)}}this._isFirstFrame=!1},HCameraElement.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},HCameraElement.prototype.destroy=function(){},HCameraElement.prototype.getBaseElement=function(){return null},extendPrototype([BaseElement,TransformElement,HBaseElement,HSolidElement,HierarchyElement,FrameElement,RenderableElement],HImageElement),HImageElement.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData),e=new Image;this.data.hasMask?(this.imageElem=createNS("image"),this.imageElem.setAttribute("width",this.assetData.w+"px"),this.imageElem.setAttribute("height",this.assetData.h+"px"),this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.imageElem),this.baseElement.setAttribute("width",this.assetData.w),this.baseElement.setAttribute("height",this.assetData.h)):this.layerElement.appendChild(e),e.crossOrigin="anonymous",e.src=t,this.data.ln&&this.baseElement.setAttribute("id",this.data.ln)},extendPrototype([BaseRenderer],HybridRendererBase),HybridRendererBase.prototype.buildItem=SVGRenderer.prototype.buildItem,HybridRendererBase.prototype.checkPendingElements=function(){for(;this.pendingElements.length;)this.pendingElements.pop().checkParenting()},HybridRendererBase.prototype.appendElementInPos=function(t,e){var r=t.getBaseElement();if(r){var i=this.layers[e];if(i.ddd&&this.supports3d)this.addTo3dContainer(r,e);else if(this.threeDElements)this.addTo3dContainer(r,e);else{for(var s,a,n=0;n<e;)this.elements[n]&&!0!==this.elements[n]&&this.elements[n].getBaseElement&&(a=this.elements[n],s=(this.layers[n].ddd?this.getThreeDContainerByPos(n):a.getBaseElement())||s),n+=1;s?i.ddd&&this.supports3d||this.layerElement.insertBefore(r,s):i.ddd&&this.supports3d||this.layerElement.appendChild(r)}}},HybridRendererBase.prototype.createShape=function(t){return this.supports3d?new HShapeElement(t,this.globalData,this):new SVGShapeElement(t,this.globalData,this)},HybridRendererBase.prototype.createText=function(t){return this.supports3d?new HTextElement(t,this.globalData,this):new SVGTextLottieElement(t,this.globalData,this)},HybridRendererBase.prototype.createCamera=function(t){return this.camera=new HCameraElement(t,this.globalData,this),this.camera},HybridRendererBase.prototype.createImage=function(t){return this.supports3d?new HImageElement(t,this.globalData,this):new IImageElement(t,this.globalData,this)},HybridRendererBase.prototype.createSolid=function(t){return this.supports3d?new HSolidElement(t,this.globalData,this):new ISolidElement(t,this.globalData,this)},HybridRendererBase.prototype.createNull=SVGRenderer.prototype.createNull,HybridRendererBase.prototype.getThreeDContainerByPos=function(t){for(var e=0,r=this.threeDElements.length;e<r;){if(this.threeDElements[e].startPos<=t&&this.threeDElements[e].endPos>=t)return this.threeDElements[e].perspectiveElem;e+=1}return null},HybridRendererBase.prototype.createThreeDContainer=function(t,e){var r,i,s=createTag("div");styleDiv(s);var a=createTag("div");if(styleDiv(a),"3d"===e){(r=s.style).width=this.globalData.compSize.w+"px",r.height=this.globalData.compSize.h+"px";var n="50% 50%";r.webkitTransformOrigin=n,r.mozTransformOrigin=n,r.transformOrigin=n;var o="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";(i=a.style).transform=o,i.webkitTransform=o}s.appendChild(a);var h={container:a,perspectiveElem:s,startPos:t,endPos:t,type:e};return this.threeDElements.push(h),h},HybridRendererBase.prototype.build3dContainers=function(){var t,e,r=this.layers.length,i="";for(t=0;t<r;t+=1)this.layers[t].ddd&&3!==this.layers[t].ty?("3d"!==i&&(i="3d",e=this.createThreeDContainer(t,"3d")),e.endPos=Math.max(e.endPos,t)):("2d"!==i&&(i="2d",e=this.createThreeDContainer(t,"2d")),e.endPos=Math.max(e.endPos,t));for(t=(r=this.threeDElements.length)-1;t>=0;t-=1)this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)},HybridRendererBase.prototype.addTo3dContainer=function(t,e){for(var r=0,i=this.threeDElements.length;r<i;){if(e<=this.threeDElements[r].endPos){for(var s,a=this.threeDElements[r].startPos;a<e;)this.elements[a]&&this.elements[a].getBaseElement&&(s=this.elements[a].getBaseElement()),a+=1;s?this.threeDElements[r].container.insertBefore(t,s):this.threeDElements[r].container.appendChild(t);break}r+=1}},HybridRendererBase.prototype.configAnimation=function(t){var e=createTag("div"),r=this.animationItem.wrapper,i=e.style;i.width=t.w+"px",i.height=t.h+"px",this.resizerElem=e,styleDiv(e),i.transformStyle="flat",i.mozTransformStyle="flat",i.webkitTransformStyle="flat",this.renderConfig.className&&e.setAttribute("class",this.renderConfig.className),r.appendChild(e),i.overflow="hidden";var s=createNS("svg");s.setAttribute("width","1"),s.setAttribute("height","1"),styleDiv(s),this.resizerElem.appendChild(s);var a=createNS("defs");s.appendChild(a),this.data=t,this.setupGlobalData(t,s),this.globalData.defs=a,this.layers=t.layers,this.layerElement=this.resizerElem,this.build3dContainers(),this.updateContainerSize()},HybridRendererBase.prototype.destroy=function(){var t;this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.animationItem.container=null,this.globalData.defs=null;var e=this.layers?this.layers.length:0;for(t=0;t<e;t+=1)this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},HybridRendererBase.prototype.updateContainerSize=function(){var t,e,r,i,s=this.animationItem.wrapper.offsetWidth,a=this.animationItem.wrapper.offsetHeight,n=s/a;this.globalData.compSize.w/this.globalData.compSize.h>n?(t=s/this.globalData.compSize.w,e=s/this.globalData.compSize.w,r=0,i=(a-this.globalData.compSize.h*(s/this.globalData.compSize.w))/2):(t=a/this.globalData.compSize.h,e=a/this.globalData.compSize.h,r=(s-this.globalData.compSize.w*(a/this.globalData.compSize.h))/2,i=0);var o=this.resizerElem.style;o.webkitTransform="matrix3d("+t+",0,0,0,0,"+e+",0,0,0,0,1,0,"+r+","+i+",0,1)",o.transform=o.webkitTransform},HybridRendererBase.prototype.renderFrame=SVGRenderer.prototype.renderFrame,HybridRendererBase.prototype.hide=function(){this.resizerElem.style.display="none"},HybridRendererBase.prototype.show=function(){this.resizerElem.style.display="block"},HybridRendererBase.prototype.initItems=function(){if(this.buildAllItems(),this.camera)this.camera.setup();else{var t,e=this.globalData.compSize.w,r=this.globalData.compSize.h,i=this.threeDElements.length;for(t=0;t<i;t+=1){var s=this.threeDElements[t].perspectiveElem.style;s.webkitPerspective=Math.sqrt(Math.pow(e,2)+Math.pow(r,2))+"px",s.perspective=s.webkitPerspective}}},HybridRendererBase.prototype.searchExtraCompositions=function(t){var e,r=t.length,i=createTag("div");for(e=0;e<r;e+=1)if(t[e].xt){var s=this.createComp(t[e],i,this.globalData.comp,null);s.initExpressions(),this.globalData.projectInterface.registerComposition(s)}},extendPrototype([HybridRendererBase,ICompElement,HBaseElement],HCompElement),HCompElement.prototype._createBaseContainerElements=HCompElement.prototype.createContainerElements,HCompElement.prototype.createContainerElements=function(){this._createBaseContainerElements(),this.data.hasMask?(this.svgElement.setAttribute("width",this.data.w),this.svgElement.setAttribute("height",this.data.h),this.transformedElement=this.baseElement):this.transformedElement=this.layerElement},HCompElement.prototype.addTo3dContainer=function(t,e){for(var r,i=0;i<e;)this.elements[i]&&this.elements[i].getBaseElement&&(r=this.elements[i].getBaseElement()),i+=1;r?this.layerElement.insertBefore(t,r):this.layerElement.appendChild(t)},HCompElement.prototype.createComp=function(t){return this.supports3d?new HCompElement(t,this.globalData,this):new SVGCompElement(t,this.globalData,this)},extendPrototype([HybridRendererBase],HybridRenderer),HybridRenderer.prototype.createComp=function(t){return this.supports3d?new HCompElement(t,this.globalData,this):new SVGCompElement(t,this.globalData,this)};var CompExpressionInterface=function(t){function e(e){for(var r=0,i=t.layers.length;r<i;){if(t.layers[r].nm===e||t.layers[r].ind===e)return t.elements[r].layerInterface;r+=1}return null}return Object.defineProperty(e,"_name",{value:t.data.nm}),e.layer=e,e.pixelAspect=1,e.height=t.data.h||t.globalData.compSize.h,e.width=t.data.w||t.globalData.compSize.w,e.pixelAspect=1,e.frameDuration=1/t.globalData.frameRate,e.displayStartTime=0,e.numLayers=t.layers.length,e},Expressions=function(){var t={initExpressions:function(t){var e=0,r=[];t.renderer.compInterface=CompExpressionInterface(t.renderer),t.renderer.globalData.projectInterface.registerComposition(t.renderer),t.renderer.globalData.pushExpression=function(){e+=1},t.renderer.globalData.popExpression=function(){0==(e-=1)&&function(){var t,e=r.length;for(t=0;t<e;t+=1)r[t].release();r.length=0}()},t.renderer.globalData.registerExpressionProperty=function(t){-1===r.indexOf(t)&&r.push(t)}}};return t}(),MaskManagerInterface=function(){function t(t,e){this._mask=t,this._data=e}return Object.defineProperty(t.prototype,"maskPath",{get:function(){return this._mask.prop.k&&this._mask.prop.getValue(),this._mask.prop}}),Object.defineProperty(t.prototype,"maskOpacity",{get:function(){return this._mask.op.k&&this._mask.op.getValue(),100*this._mask.op.v}}),function(e){var r,i=createSizedArray(e.viewData.length),s=e.viewData.length;for(r=0;r<s;r+=1)i[r]=new t(e.viewData[r],e.masksProperties[r]);return function(t){for(r=0;r<s;){if(e.masksProperties[r].nm===t)return i[r];r+=1}return null}}}(),ExpressionPropertyInterface=function(){var t={pv:0,v:0,mult:1},e={pv:[0,0,0],v:[0,0,0],mult:1};function r(t,e,r){Object.defineProperty(t,"velocity",{get:function(){return e.getVelocityAtTime(e.comp.currentFrame)}}),t.numKeys=e.keyframes?e.keyframes.length:0,t.key=function(i){if(!t.numKeys)return 0;var s="";s="s"in e.keyframes[i-1]?e.keyframes[i-1].s:"e"in e.keyframes[i-2]?e.keyframes[i-2].e:e.keyframes[i-2].s;var a="unidimensional"===r?new Number(s):Object.assign({},s);return a.time=e.keyframes[i-1].t/e.elem.comp.globalData.frameRate,a.value="unidimensional"===r?s[0]:s,a},t.valueAtTime=e.getValueAtTime,t.speedAtTime=e.getSpeedAtTime,t.velocityAtTime=e.getVelocityAtTime,t.propertyGroup=e.propertyGroup}function i(){return t}return function(s){return s?"unidimensional"===s.propType?function(e){e&&"pv"in e||(e=t);var i=1/e.mult,s=e.pv*i,a=new Number(s);return a.value=s,r(a,e,"unidimensional"),function(){return e.k&&e.getValue(),s=e.v*i,a.value!==s&&((a=new Number(s)).value=s,r(a,e,"unidimensional")),a}}(s):function(t){t&&"pv"in t||(t=e);var i=1/t.mult,s=t.data&&t.data.l||t.pv.length,a=createTypedArray("float32",s),n=createTypedArray("float32",s);return a.value=n,r(a,t,"multidimensional"),function(){t.k&&t.getValue();for(var e=0;e<s;e+=1)n[e]=t.v[e]*i,a[e]=n[e];return a}}(s):i}}(),TransformExpressionInterface=function(t){function e(t){switch(t){case"scale":case"Scale":case"ADBE Scale":case 6:return e.scale;case"rotation":case"Rotation":case"ADBE Rotation":case"ADBE Rotate Z":case 10:return e.rotation;case"ADBE Rotate X":return e.xRotation;case"ADBE Rotate Y":return e.yRotation;case"position":case"Position":case"ADBE Position":case 2:return e.position;case"ADBE Position_0":return e.xPosition;case"ADBE Position_1":return e.yPosition;case"ADBE Position_2":return e.zPosition;case"anchorPoint":case"AnchorPoint":case"Anchor Point":case"ADBE AnchorPoint":case 1:return e.anchorPoint;case"opacity":case"Opacity":case 11:return e.opacity;default:return null}}var r,i,s,a;return Object.defineProperty(e,"rotation",{get:ExpressionPropertyInterface(t.r||t.rz)}),Object.defineProperty(e,"zRotation",{get:ExpressionPropertyInterface(t.rz||t.r)}),Object.defineProperty(e,"xRotation",{get:ExpressionPropertyInterface(t.rx)}),Object.defineProperty(e,"yRotation",{get:ExpressionPropertyInterface(t.ry)}),Object.defineProperty(e,"scale",{get:ExpressionPropertyInterface(t.s)}),t.p?a=ExpressionPropertyInterface(t.p):(r=ExpressionPropertyInterface(t.px),i=ExpressionPropertyInterface(t.py),t.pz&&(s=ExpressionPropertyInterface(t.pz))),Object.defineProperty(e,"position",{get:function(){return t.p?a():[r(),i(),s?s():0]}}),Object.defineProperty(e,"xPosition",{get:ExpressionPropertyInterface(t.px)}),Object.defineProperty(e,"yPosition",{get:ExpressionPropertyInterface(t.py)}),Object.defineProperty(e,"zPosition",{get:ExpressionPropertyInterface(t.pz)}),Object.defineProperty(e,"anchorPoint",{get:ExpressionPropertyInterface(t.a)}),Object.defineProperty(e,"opacity",{get:ExpressionPropertyInterface(t.o)}),Object.defineProperty(e,"skew",{get:ExpressionPropertyInterface(t.sk)}),Object.defineProperty(e,"skewAxis",{get:ExpressionPropertyInterface(t.sa)}),Object.defineProperty(e,"orientation",{get:ExpressionPropertyInterface(t.or)}),e},LayerExpressionInterface=function(){function t(t){var e=new Matrix;return void 0!==t?this._elem.finalTransform.mProp.getValueAtTime(t).clone(e):this._elem.finalTransform.mProp.applyToMatrix(e),e}function e(t,e){var r=this.getMatrix(e);return r.props[12]=0,r.props[13]=0,r.props[14]=0,this.applyPoint(r,t)}function r(t,e){var r=this.getMatrix(e);return this.applyPoint(r,t)}function i(t,e){var r=this.getMatrix(e);return r.props[12]=0,r.props[13]=0,r.props[14]=0,this.invertPoint(r,t)}function s(t,e){var r=this.getMatrix(e);return this.invertPoint(r,t)}function a(t,e){if(this._elem.hierarchy&&this._elem.hierarchy.length){var r,i=this._elem.hierarchy.length;for(r=0;r<i;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)}return t.applyToPointArray(e[0],e[1],e[2]||0)}function n(t,e){if(this._elem.hierarchy&&this._elem.hierarchy.length){var r,i=this._elem.hierarchy.length;for(r=0;r<i;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)}return t.inversePoint(e)}function o(t){var e=new Matrix;if(e.reset(),this._elem.finalTransform.mProp.applyToMatrix(e),this._elem.hierarchy&&this._elem.hierarchy.length){var r,i=this._elem.hierarchy.length;for(r=0;r<i;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);return e.inversePoint(t)}return e.inversePoint(t)}function h(){return[1,1,1,1]}return function(l){var p;function c(t){switch(t){case"ADBE Root Vectors Group":case"Contents":case 2:return c.shapeInterface;case 1:case 6:case"Transform":case"transform":case"ADBE Transform Group":return p;case 4:case"ADBE Effect Parade":case"effects":case"Effects":return c.effect;case"ADBE Text Properties":return c.textInterface;default:return null}}c.getMatrix=t,c.invertPoint=n,c.applyPoint=a,c.toWorld=r,c.toWorldVec=e,c.fromWorld=s,c.fromWorldVec=i,c.toComp=r,c.fromComp=o,c.sampleImage=h,c.sourceRectAtTime=l.sourceRectAtTime.bind(l),c._elem=l;var f=getDescriptor(p=TransformExpressionInterface(l.finalTransform.mProp),"anchorPoint");return Object.defineProperties(c,{hasParent:{get:function(){return l.hierarchy.length}},parent:{get:function(){return l.hierarchy[0].layerInterface}},rotation:getDescriptor(p,"rotation"),scale:getDescriptor(p,"scale"),position:getDescriptor(p,"position"),opacity:getDescriptor(p,"opacity"),anchorPoint:f,anchor_point:f,transform:{get:function(){return p}},active:{get:function(){return l.isInRange}}}),c.startTime=l.data.st,c.index=l.data.ind,c.source=l.data.refId,c.height=0===l.data.ty?l.data.h:100,c.width=0===l.data.ty?l.data.w:100,c.inPoint=l.data.ip/l.comp.globalData.frameRate,c.outPoint=l.data.op/l.comp.globalData.frameRate,c._name=l.data.nm,c.registerMaskInterface=function(t){c.mask=new MaskManagerInterface(t,l)},c.registerEffectsInterface=function(t){c.effect=t},c}}(),propertyGroupFactory=function(t,e){return function(r){return(r=void 0===r?1:r)<=0?t:e(r-1)}},PropertyInterface=function(t,e){var r={_name:t};return function(t){return(t=void 0===t?1:t)<=0?r:e(t-1)}},EffectsExpressionInterface=function(){var t={createEffectsInterface:function(t,r){if(t.effectsManager){var i,s=[],a=t.data.ef,n=t.effectsManager.effectElements.length;for(i=0;i<n;i+=1)s.push(e(a[i],t.effectsManager.effectElements[i],r,t));var o=t.data.ef||[],h=function(t){for(i=0,n=o.length;i<n;){if(t===o[i].nm||t===o[i].mn||t===o[i].ix)return s[i];i+=1}return null};return Object.defineProperty(h,"numProperties",{get:function(){return o.length}}),h}return null}};function e(t,i,s,a){function n(e){for(var r=t.ef,i=0,s=r.length;i<s;){if(e===r[i].nm||e===r[i].mn||e===r[i].ix)return 5===r[i].ty?l[i]:l[i]();i+=1}throw new Error}var o,h=propertyGroupFactory(n,s),l=[],p=t.ef.length;for(o=0;o<p;o+=1)5===t.ef[o].ty?l.push(e(t.ef[o],i.effectElements[o],i.effectElements[o].propertyGroup,a)):l.push(r(i.effectElements[o],t.ef[o].ty,a,h));return"ADBE Color Control"===t.mn&&Object.defineProperty(n,"color",{get:function(){return l[0]()}}),Object.defineProperties(n,{numProperties:{get:function(){return t.np}},_name:{value:t.nm},propertyGroup:{value:h}}),n.enabled=0!==t.en,n.active=n.enabled,n}function r(t,e,r,i){var s=ExpressionPropertyInterface(t.p);return t.p.setGroupProperty&&t.p.setGroupProperty(PropertyInterface("",i)),function(){return 10===e?r.comp.compInterface(t.p.v):s()}}return t}(),ShapePathInterface=function(t,e,r){var i=e.sh;function s(t){return"Shape"===t||"shape"===t||"Path"===t||"path"===t||"ADBE Vector Shape"===t||2===t?s.path:null}var a=propertyGroupFactory(s,r);return i.setGroupProperty(PropertyInterface("Path",a)),Object.defineProperties(s,{path:{get:function(){return i.k&&i.getValue(),i}},shape:{get:function(){return i.k&&i.getValue(),i}},_name:{value:t.nm},ix:{value:t.ix},propertyIndex:{value:t.ix},mn:{value:t.mn},propertyGroup:{value:r}}),s},ShapeExpressionInterface=function(){function t(t,n,f){var d,u=[],m=t?t.length:0;for(d=0;d<m;d+=1)"gr"===t[d].ty?u.push(e(t[d],n[d],f)):"fl"===t[d].ty?u.push(r(t[d],n[d],f)):"st"===t[d].ty?u.push(s(t[d],n[d],f)):"tm"===t[d].ty?u.push(a(t[d],n[d],f)):"tr"===t[d].ty||("el"===t[d].ty?u.push(o(t[d],n[d],f)):"sr"===t[d].ty?u.push(h(t[d],n[d],f)):"sh"===t[d].ty?u.push(ShapePathInterface(t[d],n[d],f)):"rc"===t[d].ty?u.push(l(t[d],n[d],f)):"rd"===t[d].ty?u.push(p(t[d],n[d],f)):"rp"===t[d].ty?u.push(c(t[d],n[d],f)):"gf"===t[d].ty?u.push(i(t[d],n[d],f)):u.push((t[d],n[d],function(){return null})));return u}function e(e,r,i){var s=function(t){switch(t){case"ADBE Vectors Group":case"Contents":case 2:return s.content;default:return s.transform}};s.propertyGroup=propertyGroupFactory(s,i);var a=function(e,r,i){var s,a=function(t){for(var e=0,r=s.length;e<r;){if(s[e]._name===t||s[e].mn===t||s[e].propertyIndex===t||s[e].ix===t||s[e].ind===t)return s[e];e+=1}return"number"==typeof t?s[t-1]:null};a.propertyGroup=propertyGroupFactory(a,i),s=t(e.it,r.it,a.propertyGroup),a.numProperties=s.length;var o=n(e.it[e.it.length-1],r.it[r.it.length-1],a.propertyGroup);return a.transform=o,a.propertyIndex=e.cix,a._name=e.nm,a}(e,r,s.propertyGroup),o=n(e.it[e.it.length-1],r.it[r.it.length-1],s.propertyGroup);return s.content=a,s.transform=o,Object.defineProperty(s,"_name",{get:function(){return e.nm}}),s.numProperties=e.np,s.propertyIndex=e.ix,s.nm=e.nm,s.mn=e.mn,s}function r(t,e,r){function i(t){return"Color"===t||"color"===t?i.color:"Opacity"===t||"opacity"===t?i.opacity:null}return Object.defineProperties(i,{color:{get:ExpressionPropertyInterface(e.c)},opacity:{get:ExpressionPropertyInterface(e.o)},_name:{value:t.nm},mn:{value:t.mn}}),e.c.setGroupProperty(PropertyInterface("Color",r)),e.o.setGroupProperty(PropertyInterface("Opacity",r)),i}function i(t,e,r){function i(t){return"Start Point"===t||"start point"===t?i.startPoint:"End Point"===t||"end point"===t?i.endPoint:"Opacity"===t||"opacity"===t?i.opacity:null}return Object.defineProperties(i,{startPoint:{get:ExpressionPropertyInterface(e.s)},endPoint:{get:ExpressionPropertyInterface(e.e)},opacity:{get:ExpressionPropertyInterface(e.o)},type:{get:function(){return"a"}},_name:{value:t.nm},mn:{value:t.mn}}),e.s.setGroupProperty(PropertyInterface("Start Point",r)),e.e.setGroupProperty(PropertyInterface("End Point",r)),e.o.setGroupProperty(PropertyInterface("Opacity",r)),i}function s(t,e,r){var i,s=propertyGroupFactory(l,r),a=propertyGroupFactory(h,s);function n(r){Object.defineProperty(h,t.d[r].nm,{get:ExpressionPropertyInterface(e.d.dataProps[r].p)})}var o=t.d?t.d.length:0,h={};for(i=0;i<o;i+=1)n(i),e.d.dataProps[i].p.setGroupProperty(a);function l(t){return"Color"===t||"color"===t?l.color:"Opacity"===t||"opacity"===t?l.opacity:"Stroke Width"===t||"stroke width"===t?l.strokeWidth:null}return Object.defineProperties(l,{color:{get:ExpressionPropertyInterface(e.c)},opacity:{get:ExpressionPropertyInterface(e.o)},strokeWidth:{get:ExpressionPropertyInterface(e.w)},dash:{get:function(){return h}},_name:{value:t.nm},mn:{value:t.mn}}),e.c.setGroupProperty(PropertyInterface("Color",s)),e.o.setGroupProperty(PropertyInterface("Opacity",s)),e.w.setGroupProperty(PropertyInterface("Stroke Width",s)),l}function a(t,e,r){function i(e){return e===t.e.ix||"End"===e||"end"===e?i.end:e===t.s.ix?i.start:e===t.o.ix?i.offset:null}var s=propertyGroupFactory(i,r);return i.propertyIndex=t.ix,e.s.setGroupProperty(PropertyInterface("Start",s)),e.e.setGroupProperty(PropertyInterface("End",s)),e.o.setGroupProperty(PropertyInterface("Offset",s)),i.propertyIndex=t.ix,i.propertyGroup=r,Object.defineProperties(i,{start:{get:ExpressionPropertyInterface(e.s)},end:{get:ExpressionPropertyInterface(e.e)},offset:{get:ExpressionPropertyInterface(e.o)},_name:{value:t.nm}}),i.mn=t.mn,i}function n(t,e,r){function i(e){return t.a.ix===e||"Anchor Point"===e?i.anchorPoint:t.o.ix===e||"Opacity"===e?i.opacity:t.p.ix===e||"Position"===e?i.position:t.r.ix===e||"Rotation"===e||"ADBE Vector Rotation"===e?i.rotation:t.s.ix===e||"Scale"===e?i.scale:t.sk&&t.sk.ix===e||"Skew"===e?i.skew:t.sa&&t.sa.ix===e||"Skew Axis"===e?i.skewAxis:null}var s=propertyGroupFactory(i,r);return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity",s)),e.transform.mProps.p.setGroupProperty(PropertyInterface("Position",s)),e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point",s)),e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale",s)),e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation",s)),e.transform.mProps.sk&&(e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew",s)),e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle",s))),e.transform.op.setGroupProperty(PropertyInterface("Opacity",s)),Object.defineProperties(i,{opacity:{get:ExpressionPropertyInterface(e.transform.mProps.o)},position:{get:ExpressionPropertyInterface(e.transform.mProps.p)},anchorPoint:{get:ExpressionPropertyInterface(e.transform.mProps.a)},scale:{get:ExpressionPropertyInterface(e.transform.mProps.s)},rotation:{get:ExpressionPropertyInterface(e.transform.mProps.r)},skew:{get:ExpressionPropertyInterface(e.transform.mProps.sk)},skewAxis:{get:ExpressionPropertyInterface(e.transform.mProps.sa)},_name:{value:t.nm}}),i.ty="tr",i.mn=t.mn,i.propertyGroup=r,i}function o(t,e,r){function i(e){return t.p.ix===e?i.position:t.s.ix===e?i.size:null}var s=propertyGroupFactory(i,r);i.propertyIndex=t.ix;var a="tm"===e.sh.ty?e.sh.prop:e.sh;return a.s.setGroupProperty(PropertyInterface("Size",s)),a.p.setGroupProperty(PropertyInterface("Position",s)),Object.defineProperties(i,{size:{get:ExpressionPropertyInterface(a.s)},position:{get:ExpressionPropertyInterface(a.p)},_name:{value:t.nm}}),i.mn=t.mn,i}function h(t,e,r){function i(e){return t.p.ix===e?i.position:t.r.ix===e?i.rotation:t.pt.ix===e?i.points:t.or.ix===e||"ADBE Vector Star Outer Radius"===e?i.outerRadius:t.os.ix===e?i.outerRoundness:!t.ir||t.ir.ix!==e&&"ADBE Vector Star Inner Radius"!==e?t.is&&t.is.ix===e?i.innerRoundness:null:i.innerRadius}var s=propertyGroupFactory(i,r),a="tm"===e.sh.ty?e.sh.prop:e.sh;return i.propertyIndex=t.ix,a.or.setGroupProperty(PropertyInterface("Outer Radius",s)),a.os.setGroupProperty(PropertyInterface("Outer Roundness",s)),a.pt.setGroupProperty(PropertyInterface("Points",s)),a.p.setGroupProperty(PropertyInterface("Position",s)),a.r.setGroupProperty(PropertyInterface("Rotation",s)),t.ir&&(a.ir.setGroupProperty(PropertyInterface("Inner Radius",s)),a.is.setGroupProperty(PropertyInterface("Inner Roundness",s))),Object.defineProperties(i,{position:{get:ExpressionPropertyInterface(a.p)},rotation:{get:ExpressionPropertyInterface(a.r)},points:{get:ExpressionPropertyInterface(a.pt)},outerRadius:{get:ExpressionPropertyInterface(a.or)},outerRoundness:{get:ExpressionPropertyInterface(a.os)},innerRadius:{get:ExpressionPropertyInterface(a.ir)},innerRoundness:{get:ExpressionPropertyInterface(a.is)},_name:{value:t.nm}}),i.mn=t.mn,i}function l(t,e,r){function i(e){return t.p.ix===e?i.position:t.r.ix===e?i.roundness:t.s.ix===e||"Size"===e||"ADBE Vector Rect Size"===e?i.size:null}var s=propertyGroupFactory(i,r),a="tm"===e.sh.ty?e.sh.prop:e.sh;return i.propertyIndex=t.ix,a.p.setGroupProperty(PropertyInterface("Position",s)),a.s.setGroupProperty(PropertyInterface("Size",s)),a.r.setGroupProperty(PropertyInterface("Rotation",s)),Object.defineProperties(i,{position:{get:ExpressionPropertyInterface(a.p)},roundness:{get:ExpressionPropertyInterface(a.r)},size:{get:ExpressionPropertyInterface(a.s)},_name:{value:t.nm}}),i.mn=t.mn,i}function p(t,e,r){function i(e){return t.r.ix===e||"Round Corners 1"===e?i.radius:null}var s=propertyGroupFactory(i,r),a=e;return i.propertyIndex=t.ix,a.rd.setGroupProperty(PropertyInterface("Radius",s)),Object.defineProperties(i,{radius:{get:ExpressionPropertyInterface(a.rd)},_name:{value:t.nm}}),i.mn=t.mn,i}function c(t,e,r){function i(e){return t.c.ix===e||"Copies"===e?i.copies:t.o.ix===e||"Offset"===e?i.offset:null}var s=propertyGroupFactory(i,r),a=e;return i.propertyIndex=t.ix,a.c.setGroupProperty(PropertyInterface("Copies",s)),a.o.setGroupProperty(PropertyInterface("Offset",s)),Object.defineProperties(i,{copies:{get:ExpressionPropertyInterface(a.c)},offset:{get:ExpressionPropertyInterface(a.o)},_name:{value:t.nm}}),i.mn=t.mn,i}return function(e,r,i){var s;function a(t){if("number"==typeof t)return 0===(t=void 0===t?1:t)?i:s[t-1];for(var e=0,r=s.length;e<r;){if(s[e]._name===t)return s[e];e+=1}return null}return a.propertyGroup=propertyGroupFactory(a,(function(){return i})),s=t(e,r,a.propertyGroup),a.numProperties=s.length,a._name="Contents",a}}(),TextExpressionInterface=function(t){var e,r;function i(t){return"ADBE Text Document"===t?i.sourceText:null}return Object.defineProperty(i,"sourceText",{get:function(){t.textProperty.getValue();var i=t.textProperty.currentData.t;return i!==e&&(t.textProperty.currentData.t=e,(r=new String(i)).value=i||new String(i)),r}}),i};function _typeof$2(t){return _typeof$2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof$2(t)}var FootageInterface=(dataInterfaceFactory=function(t){function e(t){return"Outline"===t?e.outlineInterface():null}return e._name="Outline",e.outlineInterface=function(t){var e="",r=t.getFootageData();function i(t){if(r[t])return e=t,"object"===_typeof$2(r=r[t])?i:r;var s=t.indexOf(e);if(-1!==s){var a=parseInt(t.substr(s+e.length),10);return"object"===_typeof$2(r=r[a])?i:r}return""}return function(){return e="",r=t.getFootageData(),i}}(t),e},function(t){function e(t){return"Data"===t?e.dataInterface:null}return e._name="Data",e.dataInterface=dataInterfaceFactory(t),e}),dataInterfaceFactory,interfaces={layer:LayerExpressionInterface,effects:EffectsExpressionInterface,comp:CompExpressionInterface,shape:ShapeExpressionInterface,text:TextExpressionInterface,footage:FootageInterface};function getInterface(t){return interfaces[t]||null}function _typeof$1(t){return _typeof$1="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof$1(t)}function seedRandom(t,e){var r=this,i=256,s=e.pow(i,6),a=e.pow(2,52),n=2*a,o=255;function h(t){var e,r=t.length,s=this,a=0,n=s.i=s.j=0,h=s.S=[];for(r||(t=[r++]);a<i;)h[a]=a++;for(a=0;a<i;a++)h[a]=h[n=o&n+t[a%r]+(e=h[a])],h[n]=e;s.g=function(t){for(var e,r=0,a=s.i,n=s.j,h=s.S;t--;)e=h[a=o&a+1],r=r*i+h[o&(h[a]=h[n=o&n+e])+(h[n]=e)];return s.i=a,s.j=n,r}}function l(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function p(t,e){var r,i=[],s=_typeof$1(t);if(e&&"object"==s)for(r in t)try{i.push(p(t[r],e-1))}catch(t){}return i.length?i:"string"==s?t:t+"\0"}function c(t,e){for(var r,i=t+"",s=0;s<i.length;)e[o&s]=o&(r^=19*e[o&s])+i.charCodeAt(s++);return f(e)}function f(t){return String.fromCharCode.apply(0,t)}e.seedrandom=function(o,d,u){var m=[],y=c(p((d=!0===d?{entropy:!0}:d||{}).entropy?[o,f(t)]:null===o?function(){try{var e=new Uint8Array(i);return(r.crypto||r.msCrypto).getRandomValues(e),f(e)}catch(e){var s=r.navigator,a=s&&s.plugins;return[+new Date,r,a,r.screen,f(t)]}}():o,3),m),g=new h(m),v=function(){for(var t=g.g(6),e=s,r=0;t<a;)t=(t+r)*i,e*=i,r=g.g(1);for(;t>=n;)t/=2,e/=2,r>>>=1;return(t+r)/e};return v.int32=function(){return 0|g.g(4)},v.quick=function(){return g.g(4)/4294967296},v.double=v,c(f(g.S),t),(d.pass||u||function(t,r,i,s){return s&&(s.S&&l(s,g),t.state=function(){return l(g,{})}),i?(e.random=t,r):t})(v,y,"global"in d?d.global:this==e,d.state)},c(e.random(),t)}function initialize$2(t){seedRandom([],t)}var propTypes={SHAPE:"shape"};function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}var ExpressionManager=function(){var ob={},Math=BMMath,window=null,document=null,XMLHttpRequest=null,fetch=null,frames=null;function $bm_isInstanceOfArray(t){return t.constructor===Array||t.constructor===Float32Array}function isNumerable(t,e){return"number"===t||"boolean"===t||"string"===t||e instanceof Number}function $bm_neg(t){var e=_typeof(t);if("number"===e||"boolean"===e||t instanceof Number)return-t;if($bm_isInstanceOfArray(t)){var r,i=t.length,s=[];for(r=0;r<i;r+=1)s[r]=-t[r];return s}return t.propType?t.v:-t}initialize$2(BMMath);var easeInBez=BezierFactory.getBezierEasing(.333,0,.833,.833,"easeIn").get,easeOutBez=BezierFactory.getBezierEasing(.167,.167,.667,1,"easeOut").get,easeInOutBez=BezierFactory.getBezierEasing(.33,0,.667,1,"easeInOut").get;function sum(t,e){var r=_typeof(t),i=_typeof(e);if("string"===r||"string"===i)return t+e;if(isNumerable(r,t)&&isNumerable(i,e))return t+e;if($bm_isInstanceOfArray(t)&&isNumerable(i,e))return(t=t.slice(0))[0]+=e,t;if(isNumerable(r,t)&&$bm_isInstanceOfArray(e))return(e=e.slice(0))[0]=t+e[0],e;if($bm_isInstanceOfArray(t)&&$bm_isInstanceOfArray(e)){for(var s=0,a=t.length,n=e.length,o=[];s<a||s<n;)("number"==typeof t[s]||t[s]instanceof Number)&&("number"==typeof e[s]||e[s]instanceof Number)?o[s]=t[s]+e[s]:o[s]=void 0===e[s]?t[s]:t[s]||e[s],s+=1;return o}return 0}var add=sum;function sub(t,e){var r=_typeof(t),i=_typeof(e);if(isNumerable(r,t)&&isNumerable(i,e))return"string"===r&&(t=parseInt(t,10)),"string"===i&&(e=parseInt(e,10)),t-e;if($bm_isInstanceOfArray(t)&&isNumerable(i,e))return(t=t.slice(0))[0]-=e,t;if(isNumerable(r,t)&&$bm_isInstanceOfArray(e))return(e=e.slice(0))[0]=t-e[0],e;if($bm_isInstanceOfArray(t)&&$bm_isInstanceOfArray(e)){for(var s=0,a=t.length,n=e.length,o=[];s<a||s<n;)("number"==typeof t[s]||t[s]instanceof Number)&&("number"==typeof e[s]||e[s]instanceof Number)?o[s]=t[s]-e[s]:o[s]=void 0===e[s]?t[s]:t[s]||e[s],s+=1;return o}return 0}function mul(t,e){var r,i,s,a=_typeof(t),n=_typeof(e);if(isNumerable(a,t)&&isNumerable(n,e))return t*e;if($bm_isInstanceOfArray(t)&&isNumerable(n,e)){for(s=t.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t[i]*e;return r}if(isNumerable(a,t)&&$bm_isInstanceOfArray(e)){for(s=e.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t*e[i];return r}return 0}function div(t,e){var r,i,s,a=_typeof(t),n=_typeof(e);if(isNumerable(a,t)&&isNumerable(n,e))return t/e;if($bm_isInstanceOfArray(t)&&isNumerable(n,e)){for(s=t.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t[i]/e;return r}if(isNumerable(a,t)&&$bm_isInstanceOfArray(e)){for(s=e.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t/e[i];return r}return 0}function mod(t,e){return"string"==typeof t&&(t=parseInt(t,10)),"string"==typeof e&&(e=parseInt(e,10)),t%e}var $bm_sum=sum,$bm_sub=sub,$bm_mul=mul,$bm_div=div,$bm_mod=mod;function clamp(t,e,r){if(e>r){var i=r;r=e,e=i}return Math.min(Math.max(t,e),r)}function radiansToDegrees(t){return t/degToRads}var radians_to_degrees=radiansToDegrees;function degreesToRadians(t){return t*degToRads}var degrees_to_radians=radiansToDegrees,helperLengthArray=[0,0,0,0,0,0];function length(t,e){if("number"==typeof t||t instanceof Number)return e=e||0,Math.abs(t-e);var r;e||(e=helperLengthArray);var i=Math.min(t.length,e.length),s=0;for(r=0;r<i;r+=1)s+=Math.pow(e[r]-t[r],2);return Math.sqrt(s)}function normalize(t){return div(t,length(t))}function rgbToHsl(t){var e,r,i=t[0],s=t[1],a=t[2],n=Math.max(i,s,a),o=Math.min(i,s,a),h=(n+o)/2;if(n===o)e=0,r=0;else{var l=n-o;switch(r=h>.5?l/(2-n-o):l/(n+o),n){case i:e=(s-a)/l+(s<a?6:0);break;case s:e=(a-i)/l+2;break;case a:e=(i-s)/l+4}e/=6}return[e,r,h,t[3]]}function hue2rgb(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function hslToRgb(t){var e,r,i,s=t[0],a=t[1],n=t[2];if(0===a)e=n,i=n,r=n;else{var o=n<.5?n*(1+a):n+a-n*a,h=2*n-o;e=hue2rgb(h,o,s+1/3),r=hue2rgb(h,o,s),i=hue2rgb(h,o,s-1/3)}return[e,r,i,t[3]]}function linear(t,e,r,i,s){if(void 0!==i&&void 0!==s||(i=e,s=r,e=0,r=1),r<e){var a=r;r=e,e=a}if(t<=e)return i;if(t>=r)return s;var n,o=r===e?0:(t-e)/(r-e);if(!i.length)return i+(s-i)*o;var h=i.length,l=createTypedArray("float32",h);for(n=0;n<h;n+=1)l[n]=i[n]+(s[n]-i[n])*o;return l}function random(t,e){if(void 0===e&&(void 0===t?(t=0,e=1):(e=t,t=void 0)),e.length){var r,i=e.length;t||(t=createTypedArray("float32",i));var s=createTypedArray("float32",i),a=BMMath.random();for(r=0;r<i;r+=1)s[r]=t[r]+a*(e[r]-t[r]);return s}return void 0===t&&(t=0),t+BMMath.random()*(e-t)}function createPath(t,e,r,i){var s,a=t.length,n=shapePool.newElement();n.setPathData(!!i,a);var o,h,l=[0,0];for(s=0;s<a;s+=1)o=e&&e[s]?e[s]:l,h=r&&r[s]?r[s]:l,n.setTripleAt(t[s][0],t[s][1],h[0]+t[s][0],h[1]+t[s][1],o[0]+t[s][0],o[1]+t[s][1],s,!0);return n}function initiateExpression(elem,data,property){function noOp(t){return t}if(!elem.globalData.renderConfig.runExpressions)return noOp;var val=data.x,needsVelocity=/velocity(?![\w\d])/.test(val),_needsRandom=-1!==val.indexOf("random"),elemType=elem.data.ty,transform,$bm_transform,content,effect,thisProperty=property;thisProperty.valueAtTime=thisProperty.getValueAtTime,Object.defineProperty(thisProperty,"value",{get:function(){return thisProperty.v}}),elem.comp.frameDuration=1/elem.comp.globalData.frameRate,elem.comp.displayStartTime=0;var inPoint=elem.data.ip/elem.comp.globalData.frameRate,outPoint=elem.data.op/elem.comp.globalData.frameRate,width=elem.data.sw?elem.data.sw:0,height=elem.data.sh?elem.data.sh:0,name=elem.data.nm,loopIn,loop_in,loopOut,loop_out,smooth,toWorld,fromWorld,fromComp,toComp,fromCompToSurface,position,rotation,anchorPoint,scale,thisLayer,thisComp,mask,valueAtTime,velocityAtTime,scoped_bm_rt,expression_function=eval("[function _expression_function(){"+val+";scoped_bm_rt=$bm_rt}]")[0],numKeys=property.kf?data.k.length:0,active=!this.data||!0!==this.data.hd,wiggle=function(t,e){var r,i,s=this.pv.length?this.pv.length:1,a=createTypedArray("float32",s),n=Math.floor(5*time);for(r=0,i=0;r<n;){for(i=0;i<s;i+=1)a[i]+=-e+2*e*BMMath.random();r+=1}var o=5*time,h=o-Math.floor(o),l=createTypedArray("float32",s);if(s>1){for(i=0;i<s;i+=1)l[i]=this.pv[i]+a[i]+(-e+2*e*BMMath.random())*h;return l}return this.pv+a[0]+(-e+2*e*BMMath.random())*h}.bind(this);function loopInDuration(t,e){return loopIn(t,e,!0)}function loopOutDuration(t,e){return loopOut(t,e,!0)}thisProperty.loopIn&&(loopIn=thisProperty.loopIn.bind(thisProperty),loop_in=loopIn),thisProperty.loopOut&&(loopOut=thisProperty.loopOut.bind(thisProperty),loop_out=loopOut),thisProperty.smooth&&(smooth=thisProperty.smooth.bind(thisProperty)),this.getValueAtTime&&(valueAtTime=this.getValueAtTime.bind(this)),this.getVelocityAtTime&&(velocityAtTime=this.getVelocityAtTime.bind(this));var comp=elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),time,velocity,value,text,textIndex,textTotal,selectorValue;function lookAt(t,e){var r=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],i=Math.atan2(r[0],Math.sqrt(r[1]*r[1]+r[2]*r[2]))/degToRads;return[-Math.atan2(r[1],r[2])/degToRads,i,0]}function easeOut(t,e,r,i,s){return applyEase(easeOutBez,t,e,r,i,s)}function easeIn(t,e,r,i,s){return applyEase(easeInBez,t,e,r,i,s)}function ease(t,e,r,i,s){return applyEase(easeInOutBez,t,e,r,i,s)}function applyEase(t,e,r,i,s,a){void 0===s?(s=r,a=i):e=(e-r)/(i-r),e>1?e=1:e<0&&(e=0);var n=t(e);if($bm_isInstanceOfArray(s)){var o,h=s.length,l=createTypedArray("float32",h);for(o=0;o<h;o+=1)l[o]=(a[o]-s[o])*n+s[o];return l}return(a-s)*n+s}function nearestKey(t){var e,r,i,s=data.k.length;if(data.k.length&&"number"!=typeof data.k[0])if(r=-1,(t*=elem.comp.globalData.frameRate)<data.k[0].t)r=1,i=data.k[0].t;else{for(e=0;e<s-1;e+=1){if(t===data.k[e].t){r=e+1,i=data.k[e].t;break}if(t>data.k[e].t&&t<data.k[e+1].t){t-data.k[e].t>data.k[e+1].t-t?(r=e+2,i=data.k[e+1].t):(r=e+1,i=data.k[e].t);break}}-1===r&&(r=e+1,i=data.k[e].t)}else r=0,i=0;var a={};return a.index=r,a.time=i/elem.comp.globalData.frameRate,a}function key(t){var e,r,i;if(!data.k.length||"number"==typeof data.k[0])throw new Error("The property has no keyframe at index "+t);t-=1,e={time:data.k[t].t/elem.comp.globalData.frameRate,value:[]};var s=Object.prototype.hasOwnProperty.call(data.k[t],"s")?data.k[t].s:data.k[t-1].e;for(i=s.length,r=0;r<i;r+=1)e[r]=s[r],e.value[r]=s[r];return e}function framesToTime(t,e){return e||(e=elem.comp.globalData.frameRate),t/e}function timeToFrames(t,e){return t||0===t||(t=time),e||(e=elem.comp.globalData.frameRate),t*e}function seedRandom(t){BMMath.seedrandom(randSeed+t)}function sourceRectAtTime(){return elem.sourceRectAtTime()}function substring(t,e){return"string"==typeof value?void 0===e?value.substring(t):value.substring(t,e):""}function substr(t,e){return"string"==typeof value?void 0===e?value.substr(t):value.substr(t,e):""}function posterizeTime(t){time=0===t?0:Math.floor(time*t)/t,value=valueAtTime(time)}var index=elem.data.ind,hasParent=!(!elem.hierarchy||!elem.hierarchy.length),parent,randSeed=Math.floor(1e6*Math.random()),globalData=elem.globalData;function executeExpression(t){return value=t,this.frameExpressionId===elem.globalData.frameId&&"textSelector"!==this.propType?value:("textSelector"===this.propType&&(textIndex=this.textIndex,textTotal=this.textTotal,selectorValue=this.selectorValue),thisLayer||(text=elem.layerInterface.text,thisLayer=elem.layerInterface,thisComp=elem.comp.compInterface,toWorld=thisLayer.toWorld.bind(thisLayer),fromWorld=thisLayer.fromWorld.bind(thisLayer),fromComp=thisLayer.fromComp.bind(thisLayer),toComp=thisLayer.toComp.bind(thisLayer),mask=thisLayer.mask?thisLayer.mask.bind(thisLayer):null,fromCompToSurface=fromComp),transform||(transform=elem.layerInterface("ADBE Transform Group"),$bm_transform=transform,transform&&(anchorPoint=transform.anchorPoint)),4!==elemType||content||(content=thisLayer("ADBE Root Vectors Group")),effect||(effect=thisLayer(4)),(hasParent=!(!elem.hierarchy||!elem.hierarchy.length))&&!parent&&(parent=elem.hierarchy[0].layerInterface),time=this.comp.renderedFrame/this.comp.globalData.frameRate,_needsRandom&&seedRandom(randSeed+time),needsVelocity&&(velocity=velocityAtTime(time)),expression_function(),this.frameExpressionId=elem.globalData.frameId,scoped_bm_rt=scoped_bm_rt.propType===propTypes.SHAPE?scoped_bm_rt.v:scoped_bm_rt)}return executeExpression.__preventDeadCodeRemoval=[$bm_transform,anchorPoint,time,velocity,inPoint,outPoint,width,height,name,loop_in,loop_out,smooth,toComp,fromCompToSurface,toWorld,fromWorld,mask,position,rotation,scale,thisComp,numKeys,active,wiggle,loopInDuration,loopOutDuration,comp,lookAt,easeOut,easeIn,ease,nearestKey,key,text,textIndex,textTotal,selectorValue,framesToTime,timeToFrames,sourceRectAtTime,substring,substr,posterizeTime,index,globalData],executeExpression}return ob.initiateExpression=initiateExpression,ob.__preventDeadCodeRemoval=[window,document,XMLHttpRequest,fetch,frames,$bm_neg,add,$bm_sum,$bm_sub,$bm_mul,$bm_div,$bm_mod,clamp,radians_to_degrees,degreesToRadians,degrees_to_radians,normalize,rgbToHsl,hslToRgb,linear,random,createPath],ob}(),expressionHelpers={searchExpressions:function(t,e,r){e.x&&(r.k=!0,r.x=!0,r.initiateExpression=ExpressionManager.initiateExpression,r.effectsSequence.push(r.initiateExpression(t,e,r).bind(r)))},getSpeedAtTime:function(t){var e=this.getValueAtTime(t),r=this.getValueAtTime(t+-.01),i=0;if(e.length){var s;for(s=0;s<e.length;s+=1)i+=Math.pow(r[s]-e[s],2);i=100*Math.sqrt(i)}else i=0;return i},getVelocityAtTime:function(t){if(void 0!==this.vel)return this.vel;var e,r,i=-.001,s=this.getValueAtTime(t),a=this.getValueAtTime(t+i);if(s.length)for(e=createTypedArray("float32",s.length),r=0;r<s.length;r+=1)e[r]=(a[r]-s[r])/i;else e=(a-s)/i;return e},getValueAtTime:function(t){return t*=this.elem.globalData.frameRate,(t-=this.offsetTime)!==this._cachingAtTime.lastFrame&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastFrame<t?this._cachingAtTime.lastIndex:0,this._cachingAtTime.value=this.interpolateValue(t,this._cachingAtTime),this._cachingAtTime.lastFrame=t),this._cachingAtTime.value},getStaticValueAtTime:function(){return this.pv},setGroupProperty:function(t){this.propertyGroup=t}};function addPropertyDecorator(){function t(t,e,r){if(!this.k||!this.keyframes)return this.pv;t=t?t.toLowerCase():"";var i,s,a,n,o,h=this.comp.renderedFrame,l=this.keyframes,p=l[l.length-1].t;if(h<=p)return this.pv;if(r?s=p-(i=e?Math.abs(p-this.elem.comp.globalData.frameRate*e):Math.max(0,p-this.elem.data.ip)):((!e||e>l.length-1)&&(e=l.length-1),i=p-(s=l[l.length-1-e].t)),"pingpong"===t){if(Math.floor((h-s)/i)%2!=0)return this.getValueAtTime((i-(h-s)%i+s)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var c=this.getValueAtTime(s/this.comp.globalData.frameRate,0),f=this.getValueAtTime(p/this.comp.globalData.frameRate,0),d=this.getValueAtTime(((h-s)%i+s)/this.comp.globalData.frameRate,0),u=Math.floor((h-s)/i);if(this.pv.length){for(n=(o=new Array(c.length)).length,a=0;a<n;a+=1)o[a]=(f[a]-c[a])*u+d[a];return o}return(f-c)*u+d}if("continue"===t){var m=this.getValueAtTime(p/this.comp.globalData.frameRate,0),y=this.getValueAtTime((p-.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(n=(o=new Array(m.length)).length,a=0;a<n;a+=1)o[a]=m[a]+(m[a]-y[a])*((h-p)/this.comp.globalData.frameRate)/5e-4;return o}return m+(h-p)/.001*(m-y)}}return this.getValueAtTime(((h-s)%i+s)/this.comp.globalData.frameRate,0)}function e(t,e,r){if(!this.k)return this.pv;t=t?t.toLowerCase():"";var i,s,a,n,o,h=this.comp.renderedFrame,l=this.keyframes,p=l[0].t;if(h>=p)return this.pv;if(r?s=p+(i=e?Math.abs(this.elem.comp.globalData.frameRate*e):Math.max(0,this.elem.data.op-p)):((!e||e>l.length-1)&&(e=l.length-1),i=(s=l[e].t)-p),"pingpong"===t){if(Math.floor((p-h)/i)%2==0)return this.getValueAtTime(((p-h)%i+p)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var c=this.getValueAtTime(p/this.comp.globalData.frameRate,0),f=this.getValueAtTime(s/this.comp.globalData.frameRate,0),d=this.getValueAtTime((i-(p-h)%i+p)/this.comp.globalData.frameRate,0),u=Math.floor((p-h)/i)+1;if(this.pv.length){for(n=(o=new Array(c.length)).length,a=0;a<n;a+=1)o[a]=d[a]-(f[a]-c[a])*u;return o}return d-(f-c)*u}if("continue"===t){var m=this.getValueAtTime(p/this.comp.globalData.frameRate,0),y=this.getValueAtTime((p+.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(n=(o=new Array(m.length)).length,a=0;a<n;a+=1)o[a]=m[a]+(m[a]-y[a])*(p-h)/.001;return o}return m+(m-y)*(p-h)/.001}}return this.getValueAtTime((i-((p-h)%i+p))/this.comp.globalData.frameRate,0)}function r(t,e){if(!this.k)return this.pv;if(t=.5*(t||.4),(e=Math.floor(e||5))<=1)return this.pv;var r,i,s=this.comp.renderedFrame/this.comp.globalData.frameRate,a=s-t,n=e>1?(s+t-a)/(e-1):1,o=0,h=0;for(r=this.pv.length?createTypedArray("float32",this.pv.length):0;o<e;){if(i=this.getValueAtTime(a+o*n),this.pv.length)for(h=0;h<this.pv.length;h+=1)r[h]+=i[h];else r+=i;o+=1}if(this.pv.length)for(h=0;h<this.pv.length;h+=1)r[h]/=e;else r/=e;return r}function i(t){this._transformCachingAtTime||(this._transformCachingAtTime={v:new Matrix});var e=this._transformCachingAtTime.v;if(e.cloneFromProps(this.pre.props),this.appliedTransformations<1){var r=this.a.getValueAtTime(t);e.translate(-r[0]*this.a.mult,-r[1]*this.a.mult,r[2]*this.a.mult)}if(this.appliedTransformations<2){var i=this.s.getValueAtTime(t);e.scale(i[0]*this.s.mult,i[1]*this.s.mult,i[2]*this.s.mult)}if(this.sk&&this.appliedTransformations<3){var s=this.sk.getValueAtTime(t),a=this.sa.getValueAtTime(t);e.skewFromAxis(-s*this.sk.mult,a*this.sa.mult)}if(this.r&&this.appliedTransformations<4){var n=this.r.getValueAtTime(t);e.rotate(-n*this.r.mult)}else if(!this.r&&this.appliedTransformations<4){var o=this.rz.getValueAtTime(t),h=this.ry.getValueAtTime(t),l=this.rx.getValueAtTime(t),p=this.or.getValueAtTime(t);e.rotateZ(-o*this.rz.mult).rotateY(h*this.ry.mult).rotateX(l*this.rx.mult).rotateZ(-p[2]*this.or.mult).rotateY(p[1]*this.or.mult).rotateX(p[0]*this.or.mult)}if(this.data.p&&this.data.p.s){var c=this.px.getValueAtTime(t),f=this.py.getValueAtTime(t);if(this.data.p.z){var d=this.pz.getValueAtTime(t);e.translate(c*this.px.mult,f*this.py.mult,-d*this.pz.mult)}else e.translate(c*this.px.mult,f*this.py.mult,0)}else{var u=this.p.getValueAtTime(t);e.translate(u[0]*this.p.mult,u[1]*this.p.mult,-u[2]*this.p.mult)}return e}function s(){return this.v.clone(new Matrix)}var a=TransformPropertyFactory.getTransformProperty;TransformPropertyFactory.getTransformProperty=function(t,e,r){var n=a(t,e,r);return n.dynamicProperties.length?n.getValueAtTime=i.bind(n):n.getValueAtTime=s.bind(n),n.setGroupProperty=expressionHelpers.setGroupProperty,n};var n=PropertyFactory.getProp;PropertyFactory.getProp=function(i,s,a,o,h){var l=n(i,s,a,o,h);l.kf?l.getValueAtTime=expressionHelpers.getValueAtTime.bind(l):l.getValueAtTime=expressionHelpers.getStaticValueAtTime.bind(l),l.setGroupProperty=expressionHelpers.setGroupProperty,l.loopOut=t,l.loopIn=e,l.smooth=r,l.getVelocityAtTime=expressionHelpers.getVelocityAtTime.bind(l),l.getSpeedAtTime=expressionHelpers.getSpeedAtTime.bind(l),l.numKeys=1===s.a?s.k.length:0,l.propertyIndex=s.ix;var p=0;return 0!==a&&(p=createTypedArray("float32",1===s.a?s.k[0].s.length:s.k.length)),l._cachingAtTime={lastFrame:initialDefaultFrame,lastIndex:0,value:p},expressionHelpers.searchExpressions(i,s,l),l.k&&h.addDynamicProperty(l),l};var o=ShapePropertyFactory.getConstructorFunction(),h=ShapePropertyFactory.getKeyframedConstructorFunction();function l(){}l.prototype={vertices:function(t,e){this.k&&this.getValue();var r,i=this.v;void 0!==e&&(i=this.getValueAtTime(e,0));var s=i._length,a=i[t],n=i.v,o=createSizedArray(s);for(r=0;r<s;r+=1)o[r]="i"===t||"o"===t?[a[r][0]-n[r][0],a[r][1]-n[r][1]]:[a[r][0],a[r][1]];return o},points:function(t){return this.vertices("v",t)},inTangents:function(t){return this.vertices("i",t)},outTangents:function(t){return this.vertices("o",t)},isClosed:function(){return this.v.c},pointOnPath:function(t,e){var r=this.v;void 0!==e&&(r=this.getValueAtTime(e,0)),this._segmentsLength||(this._segmentsLength=bez.getSegmentsLength(r));for(var i,s=this._segmentsLength,a=s.lengths,n=s.totalLength*t,o=0,h=a.length,l=0;o<h;){if(l+a[o].addedLength>n){var p=o,c=r.c&&o===h-1?0:o+1,f=(n-l)/a[o].addedLength;i=bez.getPointInSegment(r.v[p],r.v[c],r.o[p],r.i[c],f,a[o]);break}l+=a[o].addedLength,o+=1}return i||(i=r.c?[r.v[0][0],r.v[0][1]]:[r.v[r._length-1][0],r.v[r._length-1][1]]),i},vectorOnPath:function(t,e,r){1==t?t=this.v.c:0==t&&(t=.999);var i=this.pointOnPath(t,e),s=this.pointOnPath(t+.001,e),a=s[0]-i[0],n=s[1]-i[1],o=Math.sqrt(Math.pow(a,2)+Math.pow(n,2));return 0===o?[0,0]:"tangent"===r?[a/o,n/o]:[-n/o,a/o]},tangentOnPath:function(t,e){return this.vectorOnPath(t,e,"tangent")},normalOnPath:function(t,e){return this.vectorOnPath(t,e,"normal")},setGroupProperty:expressionHelpers.setGroupProperty,getValueAtTime:expressionHelpers.getStaticValueAtTime},extendPrototype([l],o),extendPrototype([l],h),h.prototype.getValueAtTime=function(t){return this._cachingAtTime||(this._cachingAtTime={shapeValue:shapePool.clone(this.pv),lastIndex:0,lastTime:initialDefaultFrame}),t*=this.elem.globalData.frameRate,(t-=this.offsetTime)!==this._cachingAtTime.lastTime&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastTime<t?this._caching.lastIndex:0,this._cachingAtTime.lastTime=t,this.interpolateShape(t,this._cachingAtTime.shapeValue,this._cachingAtTime)),this._cachingAtTime.shapeValue},h.prototype.initiateExpression=ExpressionManager.initiateExpression;var p=ShapePropertyFactory.getShapeProp;ShapePropertyFactory.getShapeProp=function(t,e,r,i,s){var a=p(t,e,r,i,s);return a.propertyIndex=e.ix,a.lock=!1,3===r?expressionHelpers.searchExpressions(t,e.pt,a):4===r&&expressionHelpers.searchExpressions(t,e.ks,a),a.k&&t.addDynamicProperty(a),a}}function initialize$1(){addPropertyDecorator()}function addDecorator(){TextProperty.prototype.getExpressionValue=function(t,e){var r=this.calculateExpression(e);if(t.t!==r){var i={};return this.copyData(i,t),i.t=r.toString(),i.__complete=!1,i}return t},TextProperty.prototype.searchProperty=function(){var t=this.searchKeyframes(),e=this.searchExpressions();return this.kf=t||e,this.kf},TextProperty.prototype.searchExpressions=function(){return this.data.d.x?(this.calculateExpression=ExpressionManager.initiateExpression.bind(this)(this.elem,this.data.d,this),this.addEffect(this.getExpressionValue.bind(this)),!0):null}}function initialize(){addDecorator()}function SVGComposableEffect(){}function SVGTintFilter(t,e,r,i,s){this.filterManager=e;var a=createNS("feColorMatrix");a.setAttribute("type","matrix"),a.setAttribute("color-interpolation-filters","linearRGB"),a.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),a.setAttribute("result",i+"_tint_1"),t.appendChild(a),(a=createNS("feColorMatrix")).setAttribute("type","matrix"),a.setAttribute("color-interpolation-filters","sRGB"),a.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),a.setAttribute("result",i+"_tint_2"),t.appendChild(a),this.matrixFilter=a;var n=this.createMergeNode(i,[s,i+"_tint_1",i+"_tint_2"]);t.appendChild(n)}function SVGFillFilter(t,e,r,i){this.filterManager=e;var s=createNS("feColorMatrix");s.setAttribute("type","matrix"),s.setAttribute("color-interpolation-filters","sRGB"),s.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),s.setAttribute("result",i),t.appendChild(s),this.matrixFilter=s}function SVGStrokeEffect(t,e,r){this.initialized=!1,this.filterManager=e,this.elem=r,this.paths=[]}function SVGTritoneFilter(t,e,r,i){this.filterManager=e;var s=createNS("feColorMatrix");s.setAttribute("type","matrix"),s.setAttribute("color-interpolation-filters","linearRGB"),s.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),t.appendChild(s);var a=createNS("feComponentTransfer");a.setAttribute("color-interpolation-filters","sRGB"),a.setAttribute("result",i),this.matrixFilter=a;var n=createNS("feFuncR");n.setAttribute("type","table"),a.appendChild(n),this.feFuncR=n;var o=createNS("feFuncG");o.setAttribute("type","table"),a.appendChild(o),this.feFuncG=o;var h=createNS("feFuncB");h.setAttribute("type","table"),a.appendChild(h),this.feFuncB=h,t.appendChild(a)}function SVGProLevelsFilter(t,e,r,i){this.filterManager=e;var s=this.filterManager.effectElements,a=createNS("feComponentTransfer");(s[10].p.k||0!==s[10].p.v||s[11].p.k||1!==s[11].p.v||s[12].p.k||1!==s[12].p.v||s[13].p.k||0!==s[13].p.v||s[14].p.k||1!==s[14].p.v)&&(this.feFuncR=this.createFeFunc("feFuncR",a)),(s[17].p.k||0!==s[17].p.v||s[18].p.k||1!==s[18].p.v||s[19].p.k||1!==s[19].p.v||s[20].p.k||0!==s[20].p.v||s[21].p.k||1!==s[21].p.v)&&(this.feFuncG=this.createFeFunc("feFuncG",a)),(s[24].p.k||0!==s[24].p.v||s[25].p.k||1!==s[25].p.v||s[26].p.k||1!==s[26].p.v||s[27].p.k||0!==s[27].p.v||s[28].p.k||1!==s[28].p.v)&&(this.feFuncB=this.createFeFunc("feFuncB",a)),(s[31].p.k||0!==s[31].p.v||s[32].p.k||1!==s[32].p.v||s[33].p.k||1!==s[33].p.v||s[34].p.k||0!==s[34].p.v||s[35].p.k||1!==s[35].p.v)&&(this.feFuncA=this.createFeFunc("feFuncA",a)),(this.feFuncR||this.feFuncG||this.feFuncB||this.feFuncA)&&(a.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(a)),(s[3].p.k||0!==s[3].p.v||s[4].p.k||1!==s[4].p.v||s[5].p.k||1!==s[5].p.v||s[6].p.k||0!==s[6].p.v||s[7].p.k||1!==s[7].p.v)&&((a=createNS("feComponentTransfer")).setAttribute("color-interpolation-filters","sRGB"),a.setAttribute("result",i),t.appendChild(a),this.feFuncRComposed=this.createFeFunc("feFuncR",a),this.feFuncGComposed=this.createFeFunc("feFuncG",a),this.feFuncBComposed=this.createFeFunc("feFuncB",a))}function SVGDropShadowEffect(t,e,r,i,s){var a=e.container.globalData.renderConfig.filterSize,n=e.data.fs||a;t.setAttribute("x",n.x||a.x),t.setAttribute("y",n.y||a.y),t.setAttribute("width",n.width||a.width),t.setAttribute("height",n.height||a.height),this.filterManager=e;var o=createNS("feGaussianBlur");o.setAttribute("in","SourceAlpha"),o.setAttribute("result",i+"_drop_shadow_1"),o.setAttribute("stdDeviation","0"),this.feGaussianBlur=o,t.appendChild(o);var h=createNS("feOffset");h.setAttribute("dx","25"),h.setAttribute("dy","0"),h.setAttribute("in",i+"_drop_shadow_1"),h.setAttribute("result",i+"_drop_shadow_2"),this.feOffset=h,t.appendChild(h);var l=createNS("feFlood");l.setAttribute("flood-color","#00ff00"),l.setAttribute("flood-opacity","1"),l.setAttribute("result",i+"_drop_shadow_3"),this.feFlood=l,t.appendChild(l);var p=createNS("feComposite");p.setAttribute("in",i+"_drop_shadow_3"),p.setAttribute("in2",i+"_drop_shadow_2"),p.setAttribute("operator","in"),p.setAttribute("result",i+"_drop_shadow_4"),t.appendChild(p);var c=this.createMergeNode(i,[i+"_drop_shadow_4",s]);t.appendChild(c)}SVGComposableEffect.prototype={createMergeNode:function(t,e){var r,i,s=createNS("feMerge");for(s.setAttribute("result",t),i=0;i<e.length;i+=1)(r=createNS("feMergeNode")).setAttribute("in",e[i]),s.appendChild(r),s.appendChild(r);return s}},extendPrototype([SVGComposableEffect],SVGTintFilter),SVGTintFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v/100;this.matrixFilter.setAttribute("values",r[0]-e[0]+" 0 0 0 "+e[0]+" "+(r[1]-e[1])+" 0 0 0 "+e[1]+" "+(r[2]-e[2])+" 0 0 0 "+e[2]+" 0 0 0 "+i+" 0")}},SVGFillFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[2].p.v,r=this.filterManager.effectElements[6].p.v;this.matrixFilter.setAttribute("values","0 0 0 0 "+e[0]+" 0 0 0 0 "+e[1]+" 0 0 0 0 "+e[2]+" 0 0 0 "+r+" 0")}},SVGStrokeEffect.prototype.initialize=function(){var t,e,r,i,s=this.elem.layerElement.children||this.elem.layerElement.childNodes;for(1===this.filterManager.effectElements[1].p.v?(i=this.elem.maskManager.masksProperties.length,r=0):i=1+(r=this.filterManager.effectElements[0].p.v-1),(e=createNS("g")).setAttribute("fill","none"),e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-dashoffset",1);r<i;r+=1)t=createNS("path"),e.appendChild(t),this.paths.push({p:t,m:r});if(3===this.filterManager.effectElements[10].p.v){var a=createNS("mask"),n=createElementID();a.setAttribute("id",n),a.setAttribute("mask-type","alpha"),a.appendChild(e),this.elem.globalData.defs.appendChild(a);var o=createNS("g");for(o.setAttribute("mask","url("+getLocationHref()+"#"+n+")");s[0];)o.appendChild(s[0]);this.elem.layerElement.appendChild(o),this.masker=a,e.setAttribute("stroke","#fff")}else if(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v){if(2===this.filterManager.effectElements[10].p.v)for(s=this.elem.layerElement.children||this.elem.layerElement.childNodes;s.length;)this.elem.layerElement.removeChild(s[0]);this.elem.layerElement.appendChild(e),this.elem.layerElement.removeAttribute("mask"),e.setAttribute("stroke","#fff")}this.initialized=!0,this.pathMasker=e},SVGStrokeEffect.prototype.renderFrame=function(t){var e;this.initialized||this.initialize();var r,i,s=this.paths.length;for(e=0;e<s;e+=1)if(-1!==this.paths[e].m&&(r=this.elem.maskManager.viewData[this.paths[e].m],i=this.paths[e].p,(t||this.filterManager._mdf||r.prop._mdf)&&i.setAttribute("d",r.lastPath),t||this.filterManager.effectElements[9].p._mdf||this.filterManager.effectElements[4].p._mdf||this.filterManager.effectElements[7].p._mdf||this.filterManager.effectElements[8].p._mdf||r.prop._mdf)){var a;if(0!==this.filterManager.effectElements[7].p.v||100!==this.filterManager.effectElements[8].p.v){var n=.01*Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v),o=.01*Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v),h=i.getTotalLength();a="0 0 0 "+h*n+" ";var l,p=h*(o-n),c=1+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v*.01,f=Math.floor(p/c);for(l=0;l<f;l+=1)a+="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v*.01+" ";a+="0 "+10*h+" 0 0"}else a="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v*.01;i.setAttribute("stroke-dasharray",a)}if((t||this.filterManager.effectElements[4].p._mdf)&&this.pathMasker.setAttribute("stroke-width",2*this.filterManager.effectElements[4].p.v),(t||this.filterManager.effectElements[6].p._mdf)&&this.pathMasker.setAttribute("opacity",this.filterManager.effectElements[6].p.v),(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v)&&(t||this.filterManager.effectElements[3].p._mdf)){var d=this.filterManager.effectElements[3].p.v;this.pathMasker.setAttribute("stroke","rgb("+bmFloor(255*d[0])+","+bmFloor(255*d[1])+","+bmFloor(255*d[2])+")")}},SVGTritoneFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v,s=i[0]+" "+r[0]+" "+e[0],a=i[1]+" "+r[1]+" "+e[1],n=i[2]+" "+r[2]+" "+e[2];this.feFuncR.setAttribute("tableValues",s),this.feFuncG.setAttribute("tableValues",a),this.feFuncB.setAttribute("tableValues",n)}},SVGProLevelsFilter.prototype.createFeFunc=function(t,e){var r=createNS(t);return r.setAttribute("type","table"),e.appendChild(r),r},SVGProLevelsFilter.prototype.getTableValue=function(t,e,r,i,s){for(var a,n,o=0,h=Math.min(t,e),l=Math.max(t,e),p=Array.call(null,{length:256}),c=0,f=s-i,d=e-t;o<=256;)n=(a=o/256)<=h?d<0?s:i:a>=l?d<0?i:s:i+f*Math.pow((a-t)/d,1/r),p[c]=n,c+=1,o+=256/255;return p.join(" ")},SVGProLevelsFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e,r=this.filterManager.effectElements;this.feFuncRComposed&&(t||r[3].p._mdf||r[4].p._mdf||r[5].p._mdf||r[6].p._mdf||r[7].p._mdf)&&(e=this.getTableValue(r[3].p.v,r[4].p.v,r[5].p.v,r[6].p.v,r[7].p.v),this.feFuncRComposed.setAttribute("tableValues",e),this.feFuncGComposed.setAttribute("tableValues",e),this.feFuncBComposed.setAttribute("tableValues",e)),this.feFuncR&&(t||r[10].p._mdf||r[11].p._mdf||r[12].p._mdf||r[13].p._mdf||r[14].p._mdf)&&(e=this.getTableValue(r[10].p.v,r[11].p.v,r[12].p.v,r[13].p.v,r[14].p.v),this.feFuncR.setAttribute("tableValues",e)),this.feFuncG&&(t||r[17].p._mdf||r[18].p._mdf||r[19].p._mdf||r[20].p._mdf||r[21].p._mdf)&&(e=this.getTableValue(r[17].p.v,r[18].p.v,r[19].p.v,r[20].p.v,r[21].p.v),this.feFuncG.setAttribute("tableValues",e)),this.feFuncB&&(t||r[24].p._mdf||r[25].p._mdf||r[26].p._mdf||r[27].p._mdf||r[28].p._mdf)&&(e=this.getTableValue(r[24].p.v,r[25].p.v,r[26].p.v,r[27].p.v,r[28].p.v),this.feFuncB.setAttribute("tableValues",e)),this.feFuncA&&(t||r[31].p._mdf||r[32].p._mdf||r[33].p._mdf||r[34].p._mdf||r[35].p._mdf)&&(e=this.getTableValue(r[31].p.v,r[32].p.v,r[33].p.v,r[34].p.v,r[35].p.v),this.feFuncA.setAttribute("tableValues",e))}},extendPrototype([SVGComposableEffect],SVGDropShadowEffect),SVGDropShadowEffect.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){if((t||this.filterManager.effectElements[4].p._mdf)&&this.feGaussianBlur.setAttribute("stdDeviation",this.filterManager.effectElements[4].p.v/4),t||this.filterManager.effectElements[0].p._mdf){var e=this.filterManager.effectElements[0].p.v;this.feFlood.setAttribute("flood-color",rgbToHex(Math.round(255*e[0]),Math.round(255*e[1]),Math.round(255*e[2])))}if((t||this.filterManager.effectElements[1].p._mdf)&&this.feFlood.setAttribute("flood-opacity",this.filterManager.effectElements[1].p.v/255),t||this.filterManager.effectElements[2].p._mdf||this.filterManager.effectElements[3].p._mdf){var r=this.filterManager.effectElements[3].p.v,i=(this.filterManager.effectElements[2].p.v-90)*degToRads,s=r*Math.cos(i),a=r*Math.sin(i);this.feOffset.setAttribute("dx",s),this.feOffset.setAttribute("dy",a)}}};var _svgMatteSymbols=[];function SVGMatte3Effect(t,e,r){this.initialized=!1,this.filterManager=e,this.filterElem=t,this.elem=r,r.matteElement=createNS("g"),r.matteElement.appendChild(r.layerElement),r.matteElement.appendChild(r.transformedElement),r.baseElement=r.matteElement}function SVGGaussianBlurEffect(t,e,r,i){t.setAttribute("x","-100%"),t.setAttribute("y","-100%"),t.setAttribute("width","300%"),t.setAttribute("height","300%"),this.filterManager=e;var s=createNS("feGaussianBlur");s.setAttribute("result",i),t.appendChild(s),this.feGaussianBlur=s}return SVGMatte3Effect.prototype.findSymbol=function(t){for(var e=0,r=_svgMatteSymbols.length;e<r;){if(_svgMatteSymbols[e]===t)return _svgMatteSymbols[e];e+=1}return null},SVGMatte3Effect.prototype.replaceInParent=function(t,e){var r=t.layerElement.parentNode;if(r){for(var i,s=r.children,a=0,n=s.length;a<n&&s[a]!==t.layerElement;)a+=1;a<=n-2&&(i=s[a+1]);var o=createNS("use");o.setAttribute("href","#"+e),i?r.insertBefore(o,i):r.appendChild(o)}},SVGMatte3Effect.prototype.setElementAsMask=function(t,e){if(!this.findSymbol(e)){var r=createElementID(),i=createNS("mask");i.setAttribute("id",e.layerId),i.setAttribute("mask-type","alpha"),_svgMatteSymbols.push(e);var s=t.globalData.defs;s.appendChild(i);var a=createNS("symbol");a.setAttribute("id",r),this.replaceInParent(e,r),a.appendChild(e.layerElement),s.appendChild(a);var n=createNS("use");n.setAttribute("href","#"+r),i.appendChild(n),e.data.hd=!1,e.show()}t.setMatte(e.layerId)},SVGMatte3Effect.prototype.initialize=function(){for(var t=this.filterManager.effectElements[0].p.v,e=this.elem.comp.elements,r=0,i=e.length;r<i;)e[r]&&e[r].data.ind===t&&this.setElementAsMask(this.elem,e[r]),r+=1;this.initialized=!0},SVGMatte3Effect.prototype.renderFrame=function(){this.initialized||this.initialize()},SVGGaussianBlurEffect.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=.3*this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=3==r?0:e,s=2==r?0:e;this.feGaussianBlur.setAttribute("stdDeviation",i+" "+s);var a=1==this.filterManager.effectElements[2].p.v?"wrap":"duplicate";this.feGaussianBlur.setAttribute("edgeMode",a)}},registerRenderer("canvas",CanvasRenderer),registerRenderer("html",HybridRenderer),registerRenderer("svg",SVGRenderer),ShapeModifiers.registerModifier("tm",TrimModifier),ShapeModifiers.registerModifier("pb",PuckerAndBloatModifier),ShapeModifiers.registerModifier("rp",RepeaterModifier),ShapeModifiers.registerModifier("rd",RoundCornersModifier),ShapeModifiers.registerModifier("zz",ZigZagModifier),ShapeModifiers.registerModifier("op",OffsetPathModifier),setExpressionsPlugin(Expressions),setExpressionInterfaces(getInterface),initialize$1(),initialize(),registerEffect(20,SVGTintFilter,!0),registerEffect(21,SVGFillFilter,!0),registerEffect(22,SVGStrokeEffect,!1),registerEffect(23,SVGTritoneFilter,!0),registerEffect(24,SVGProLevelsFilter,!0),registerEffect(25,SVGDropShadowEffect,!0),registerEffect(28,SVGMatte3Effect,!1),registerEffect(29,SVGGaussianBlurEffect,!0),lottie},module.exports=factory())})(lottie$1,lottie$1.exports);var lottie=lottie$1.exports,_templateObject$1,styles=r$3(_templateObject$1||(_templateObject$1=_taggedTemplateLiteral(["\n  * {\n    box-sizing: border-box;\n  }\n\n  :host {\n    --lottie-player-toolbar-height: 35px;\n    --lottie-player-toolbar-background-color: transparent;\n    --lottie-player-toolbar-icon-color: #999;\n    --lottie-player-toolbar-icon-hover-color: #222;\n    --lottie-player-toolbar-icon-active-color: #555;\n    --lottie-player-seeker-track-color: #ccc;\n    --lottie-player-seeker-thumb-color: rgba(0, 107, 120, 0.8);\n    --lottie-player-seeker-display: block;\n\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n\n  .main {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n  }\n\n  .animation {\n    width: 100%;\n    height: 100%;\n    display: flex;\n  }\n  .animation.controls {\n    height: calc(100% - 35px);\n  }\n\n  .toolbar {\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    background-color: var(--lottie-player-toolbar-background-color);\n    margin: 0 5px;\n    height: 35px;\n  }\n\n  .toolbar button {\n    cursor: pointer;\n    fill: var(--lottie-player-toolbar-icon-color);\n    display: flex;\n    background: none;\n    border: 0;\n    padding: 0;\n    outline: none;\n    height: 100%;\n  }\n\n  .toolbar button:hover {\n    fill: var(--lottie-player-toolbar-icon-hover-color);\n  }\n\n  .toolbar button.active {\n    fill: var(--lottie-player-toolbar-icon-active-color);\n  }\n\n  .toolbar button.active:hover {\n    fill: var(--lottie-player-toolbar-icon-hover-color);\n  }\n\n  .toolbar button:focus {\n    outline: 1px dotted var(--lottie-player-toolbar-icon-active-color);\n  }\n\n  .toolbar button svg {\n  }\n\n  .toolbar button.disabled svg {\n    display: none;\n  }\n\n  .seeker {\n    -webkit-appearance: none;\n    width: 95%;\n    outline: none;\n    background-color: var(--lottie-player-toolbar-background-color);\n    display: var(--lottie-player-seeker-display);\n  }\n\n  .seeker::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-webkit-slider-thumb {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n    -webkit-appearance: none;\n    margin-top: -5px;\n  }\n  .seeker:focus::-webkit-slider-runnable-track {\n    background: #999;\n  }\n  .seeker::-moz-range-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-moz-range-thumb {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n  }\n  .seeker::-ms-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n  .seeker::-ms-fill-lower {\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-ms-fill-upper {\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-ms-thumb {\n    border: 0;\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n  }\n  .seeker:focus::-ms-fill-lower {\n    background: var(--lottie-player-seeker-track-color);\n  }\n  .seeker:focus::-ms-fill-upper {\n    background: var(--lottie-player-seeker-track-color);\n  }\n\n  .error {\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    align-items: center;\n  }\n"]))),LOTTIE_PLAYER_VERSION="1.7.1",LOTTIE_WEB_VERSION="^5.10.0",_templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,PlayerState,PlayMode,PlayerEvents;function parseSrc(t){if("object"==typeof t)return t;try{return JSON.parse(t)}catch(e){return new URL(t,window.location.href).toString()}}function isLottie(t){return["v","ip","op","layers","fr","w","h"].every((e=>Object.prototype.hasOwnProperty.call(t,e)))}function fromURL(t){return _fromURL.apply(this,arguments)}function _fromURL(){return(_fromURL=_asyncToGenerator((function*(t){if("string"!=typeof t)throw new Error("The url value must be a string");var e;try{var r=new URL(t),i=yield fetch(r.toString());e=yield i.json()}catch(t){throw new Error("An error occurred while trying to load the Lottie file from URL")}return e}))).apply(this,arguments)}!function(t){t.Destroyed="destroyed",t.Error="error",t.Frozen="frozen",t.Loading="loading",t.Paused="paused",t.Playing="playing",t.Stopped="stopped"}(PlayerState||(PlayerState={})),function(t){t.Bounce="bounce",t.Normal="normal"}(PlayMode||(PlayMode={})),function(t){t.Complete="complete",t.Destroyed="destroyed",t.Error="error",t.Frame="frame",t.Freeze="freeze",t.Load="load",t.Loop="loop",t.Pause="pause",t.Play="play",t.Ready="ready",t.Rendered="rendered",t.Stop="stop"}(PlayerEvents||(PlayerEvents={}));var LottiePlayer=class extends s{constructor(){super(...arguments),this.autoplay=!1,this.background="transparent",this.controls=!1,this.currentState=PlayerState.Loading,this.description="Lottie animation",this.direction=1,this.disableCheck=!1,this.disableShadowDOM=!1,this.hover=!1,this.intermission=1,this.loop=!1,this.mode=PlayMode.Normal,this.preserveAspectRatio="xMidYMid meet",this.renderer="svg",this.speed=1,this._io=void 0,this._counter=1}load(t){var e=this;return _asyncToGenerator((function*(){var r={container:e.container,loop:!1,autoplay:!1,renderer:e.renderer,rendererSettings:Object.assign({preserveAspectRatio:e.preserveAspectRatio,clearCanvas:!1,progressiveLoad:!0,hideOnTransparent:!0},e.viewBoxSize&&{viewBoxSize:e.viewBoxSize})};try{var i=parseSrc(t),s={},a="string"==typeof i?"path":"animationData";e._lottie&&e._lottie.destroy(),e.webworkers&&lottie$1.exports.useWebWorker(!0),e._lottie=lottie$1.exports.loadAnimation(Object.assign(Object.assign({},r),{[a]:i})),e._attachEventListeners(),e.disableCheck||("path"===a?(s=yield fromURL(i),a="animationData"):s=i,isLottie(s)||(e.currentState=PlayerState.Error,e.dispatchEvent(new CustomEvent(PlayerEvents.Error))))}catch(t){e.currentState=PlayerState.Error,e.dispatchEvent(new CustomEvent(PlayerEvents.Error))}}))()}getLottie(){return this._lottie}getVersions(){return{lottieWebVersion:LOTTIE_WEB_VERSION,lottiePlayerVersion:LOTTIE_PLAYER_VERSION}}play(){this._lottie&&(this._lottie.play(),this.currentState=PlayerState.Playing,this.dispatchEvent(new CustomEvent(PlayerEvents.Play)))}pause(){this._lottie&&(this._lottie.pause(),this.currentState=PlayerState.Paused,this.dispatchEvent(new CustomEvent(PlayerEvents.Pause)))}stop(){this._lottie&&(this._counter=1,this._lottie.stop(),this.currentState=PlayerState.Stopped,this.dispatchEvent(new CustomEvent(PlayerEvents.Stop)))}destroy(){this._lottie&&(this._lottie.destroy(),this._lottie=null,this.currentState=PlayerState.Destroyed,this.dispatchEvent(new CustomEvent(PlayerEvents.Destroyed)),this.remove())}seek(t){if(this._lottie){var e=/^(\d+)(%?)$/.exec(t.toString());if(e){var r="%"===e[2]?this._lottie.totalFrames*Number(e[1])/100:Number(e[1]);this.seeker=r,this.currentState===PlayerState.Playing?this._lottie.goToAndPlay(r,!0):(this._lottie.goToAndStop(r,!0),this._lottie.pause())}}}snapshot(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.shadowRoot){var e=this.shadowRoot.querySelector(".animation svg"),r=(new XMLSerializer).serializeToString(e);if(t){var i=document.createElement("a");i.href="data:image/svg+xml;charset=utf-8,".concat(encodeURIComponent(r)),i.download="download_".concat(this.seeker,".svg"),document.body.appendChild(i),i.click(),document.body.removeChild(i)}return r}}setSpeed(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this._lottie&&this._lottie.setSpeed(t)}setDirection(t){this._lottie&&this._lottie.setDirection(t)}setLooping(t){this._lottie&&(this.loop=t,this._lottie.loop=t)}togglePlay(){return this.currentState===PlayerState.Playing?this.pause():this.play()}toggleLooping(){this.setLooping(!this.loop)}resize(){this._lottie&&this._lottie.resize()}static get styles(){return styles}disconnectedCallback(){this.isConnected||(this._io&&(this._io.disconnect(),this._io=void 0),document.removeEventListener("visibilitychange",(()=>this._onVisibilityChange())),this.destroy())}render(){var t=this.controls?"main controls":"main",e=this.controls?"animation controls":"animation";return $(_templateObject||(_templateObject=_taggedTemplateLiteral([' <div\n      id="animation-container"\n      class=','\n      lang="en"\n      aria-label=','\n      role="img"\n    >\n      <div\n        id="animation"\n        class=','\n        style="background:',';"\n      >\n        ',"\n      </div>\n      ","\n    </div>"])),t,this.description,e,this.background,this.currentState===PlayerState.Error?$(_templateObject2||(_templateObject2=_taggedTemplateLiteral(['<div class="error">⚠️</div>']))):void 0,this.controls&&!this.disableShadowDOM?this.renderControls():void 0)}createRenderRoot(){return this.disableShadowDOM&&(this.style.display="block"),this.disableShadowDOM?this:super.createRenderRoot()}firstUpdated(){"IntersectionObserver"in window&&(this._io=new IntersectionObserver((t=>{t[0].isIntersecting?this.currentState===PlayerState.Frozen&&this.play():this.currentState===PlayerState.Playing&&this.freeze()})),this._io.observe(this.container)),void 0!==document.hidden&&document.addEventListener("visibilitychange",(()=>this._onVisibilityChange())),this.src&&this.load(this.src),this.dispatchEvent(new CustomEvent(PlayerEvents.Rendered))}renderControls(){var t=this.currentState===PlayerState.Playing,e=this.currentState===PlayerState.Paused,r=this.currentState===PlayerState.Stopped;return $(_templateObject3||(_templateObject3=_taggedTemplateLiteral(['\n      <div\n        id="lottie-controls"\n        aria-label="lottie-animation-controls"\n        class="toolbar"\n      >\n        <button\n          id="lottie-play-button"\n          @click=',"\n          class=",'\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="play-pause"\n        >\n          ','\n        </button>\n        <button\n          id="lottie-stop-button"\n          @click=',"\n          class=",'\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="stop"\n        >\n          <svg width="24" height="24" aria-hidden="true" focusable="false">\n            <path d="M6 6h12v12H6V6z" />\n          </svg>\n        </button>\n        <input\n          id="lottie-seeker-input"\n          class="seeker"\n          type="range"\n          min="0"\n          step="1"\n          max="100"\n          .value=',"\n          @input=","\n          @mousedown=","\n          @mouseup=",'\n          aria-valuemin="1"\n          aria-valuemax="100"\n          role="slider"\n          aria-valuenow=','\n          tabindex="0"\n          aria-label="lottie-seek-input"\n        />\n        <button\n          id="lottie-loop-toggle"\n          @click=',"\n          class=",'\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="loop-toggle"\n        >\n          <svg width="24" height="24" aria-hidden="true" focusable="false">\n            <path\n              d="M17.016 17.016v-4.031h1.969v6h-12v3l-3.984-3.984 3.984-3.984v3h10.031zM6.984 6.984v4.031H5.015v-6h12v-3l3.984 3.984-3.984 3.984v-3H6.984z"\n            />\n          </svg>\n        </button>\n      </div>\n    '])),this.togglePlay,t||e?"active":"",$(t?_templateObject4||(_templateObject4=_taggedTemplateLiteral(['<svg\n                width="24"\n                height="24"\n                aria-hidden="true"\n                focusable="false"\n              >\n                <path\n                  d="M14.016 5.016H18v13.969h-3.984V5.016zM6 18.984V5.015h3.984v13.969H6z"\n                />\n              </svg>'])):_templateObject5||(_templateObject5=_taggedTemplateLiteral(['<svg\n                width="24"\n                height="24"\n                aria-hidden="true"\n                focusable="false"\n              >\n                <path d="M8.016 5.016L18.985 12 8.016 18.984V5.015z" />\n              </svg>']))),this.stop,r?"active":"",this.seeker,this._handleSeekChange,(()=>{this._prevState=this.currentState,this.freeze()}),(()=>{this._prevState===PlayerState.Playing&&this.play()}),this.seeker,this.toggleLooping,this.loop?"active":"")}_onVisibilityChange(){!0===document.hidden&&this.currentState===PlayerState.Playing?this.freeze():this.currentState===PlayerState.Frozen&&this.play()}_handleSeekChange(t){if(this._lottie&&!isNaN(t.target.value)){var e=t.target.value/100*this._lottie.totalFrames;this.seek(e)}}_attachEventListeners(){this._lottie.addEventListener("enterFrame",(()=>{this.seeker=this._lottie.currentFrame/this._lottie.totalFrames*100,this.dispatchEvent(new CustomEvent(PlayerEvents.Frame,{detail:{frame:this._lottie.currentFrame,seeker:this.seeker}}))})),this._lottie.addEventListener("complete",(()=>{if(this.currentState===PlayerState.Playing){if(!this.loop||this.count&&this._counter>=this.count){if(this.dispatchEvent(new CustomEvent(PlayerEvents.Complete)),this.mode!==PlayMode.Bounce)return;if(0===this._lottie.currentFrame)return}this.mode===PlayMode.Bounce?(this.count&&(this._counter+=.5),setTimeout((()=>{this.dispatchEvent(new CustomEvent(PlayerEvents.Loop)),this.currentState===PlayerState.Playing&&(this._lottie.setDirection(-1*this._lottie.playDirection),this._lottie.play())}),this.intermission)):(this.count&&(this._counter+=1),window.setTimeout((()=>{this.dispatchEvent(new CustomEvent(PlayerEvents.Loop)),this.currentState===PlayerState.Playing&&(-1===this.direction?(this.seek("99%"),this.play()):(this._lottie.stop(),this._lottie.play()))}),this.intermission))}else this.dispatchEvent(new CustomEvent(PlayerEvents.Complete))})),this._lottie.addEventListener("DOMLoaded",(()=>{this.setSpeed(this.speed),this.setDirection(this.direction),this.autoplay&&(-1===this.direction&&this.seek("100%"),this.play()),this.dispatchEvent(new CustomEvent(PlayerEvents.Ready))})),this._lottie.addEventListener("data_ready",(()=>{this.dispatchEvent(new CustomEvent(PlayerEvents.Load))})),this._lottie.addEventListener("data_failed",(()=>{this.currentState=PlayerState.Error,this.dispatchEvent(new CustomEvent(PlayerEvents.Error))})),this.container.addEventListener("mouseenter",(()=>{this.hover&&this.currentState!==PlayerState.Playing&&this.play()})),this.container.addEventListener("mouseleave",(()=>{this.hover&&this.currentState===PlayerState.Playing&&this.stop()}))}freeze(){this._lottie&&(this._lottie.pause(),this.currentState=PlayerState.Frozen,this.dispatchEvent(new CustomEvent(PlayerEvents.Freeze)))}};__decorate([e$5({type:Boolean})],LottiePlayer.prototype,"autoplay",void 0),__decorate([e$5({type:String,reflect:!0})],LottiePlayer.prototype,"background",void 0),__decorate([e$5({type:Boolean})],LottiePlayer.prototype,"controls",void 0),__decorate([e$5({type:Number})],LottiePlayer.prototype,"count",void 0),__decorate([e$5({type:String})],LottiePlayer.prototype,"currentState",void 0),__decorate([e$5({type:String})],LottiePlayer.prototype,"description",void 0),__decorate([e$5({type:Number})],LottiePlayer.prototype,"direction",void 0),__decorate([e$5({type:Boolean})],LottiePlayer.prototype,"disableCheck",void 0),__decorate([e$5({type:Boolean})],LottiePlayer.prototype,"disableShadowDOM",void 0),__decorate([e$5({type:Boolean})],LottiePlayer.prototype,"hover",void 0),__decorate([e$5()],LottiePlayer.prototype,"intermission",void 0),__decorate([e$5({type:Boolean,reflect:!0})],LottiePlayer.prototype,"loop",void 0),__decorate([e$5()],LottiePlayer.prototype,"mode",void 0),__decorate([e$5({type:String})],LottiePlayer.prototype,"preserveAspectRatio",void 0),__decorate([e$5({type:String})],LottiePlayer.prototype,"renderer",void 0),__decorate([e$5({type:String})],LottiePlayer.prototype,"viewBoxSize",void 0),__decorate([e$5()],LottiePlayer.prototype,"seeker",void 0),__decorate([e$5({type:Number})],LottiePlayer.prototype,"speed",void 0),__decorate([e$5({type:String})],LottiePlayer.prototype,"src",void 0),__decorate([e$5({type:Boolean})],LottiePlayer.prototype,"webworkers",void 0),__decorate([i(".animation")],LottiePlayer.prototype,"container",void 0),LottiePlayer=__decorate([n$1("lottie-player")],LottiePlayer);
//# sourceMappingURL=lottie-player.esm.js.map


/***/ }),

/***/ "./node_modules/alpinejs/dist/module.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/alpinejs/dist/module.esm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ module_default)
/* harmony export */ });
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module) => () => {
  if (!module) {
    module = {exports: {}};
    callback(module.exports, module);
  }
  return module.exports;
};
var __exportStar = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module) => {
  return __exportStar(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
};

// node_modules/@vue/shared/dist/shared.cjs.js
var require_shared_cjs = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {value: true});
  function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(",");
    for (let i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }
  var PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `HYDRATE_EVENTS`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `HOISTED`,
    [-2]: `BAIL`
  };
  var slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
  };
  var GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
  var isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
  var range = 2;
  function generateCodeFrame(source, start2 = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start2) {
        for (let j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length)
            continue;
          const line = j + 1;
          res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
          const lineLength = lines[j].length;
          if (j === i) {
            const pad = start2 - (count - lineLength) + 1;
            const length = Math.max(1, end > count ? lineLength - pad : end - start2);
            res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
          } else if (j > i) {
            if (end > count) {
              const length = Math.max(Math.min(end - count, lineLength), 1);
              res.push(`   |  ` + "^".repeat(length));
            }
            count += lineLength + 1;
          }
        }
        break;
      }
    }
    return res.join("\n");
  }
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
  var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
  var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
  var attrValidationCache = {};
  function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
      return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
      console.error(`unsafe attribute name: ${name}`);
    }
    return attrValidationCache[name] = !isUnsafe;
  }
  var propsToAttrMap = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv"
  };
  var isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
  var isKnownAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
  function normalizeStyle(value) {
    if (isArray(value)) {
      const res = {};
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
        if (normalized) {
          for (const key in normalized) {
            res[key] = normalized[key];
          }
        }
      }
      return res;
    } else if (isObject(value)) {
      return value;
    }
  }
  var listDelimiterRE = /;(?![^(]*\))/g;
  var propertyDelimiterRE = /:(.+)/;
  function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach((item) => {
      if (item) {
        const tmp = item.split(propertyDelimiterRE);
        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return ret;
  }
  function stringifyStyle(styles) {
    let ret = "";
    if (!styles) {
      return ret;
    }
    for (const key in styles) {
      const value = styles[key];
      const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
      if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
        ret += `${normalizedKey}:${value};`;
      }
    }
    return ret;
  }
  function normalizeClass(value) {
    let res = "";
    if (isString(value)) {
      res = value;
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const normalized = normalizeClass(value[i]);
        if (normalized) {
          res += normalized + " ";
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          res += name + " ";
        }
      }
    }
    return res.trim();
  }
  var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
  var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
  var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
  var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
  var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
  var isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
  var escapeRE = /["'&<>]/;
  function escapeHtml(string) {
    const str = "" + string;
    const match = escapeRE.exec(str);
    if (!match) {
      return str;
    }
    let html = "";
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
      switch (str.charCodeAt(index)) {
        case 34:
          escaped = "&quot;";
          break;
        case 38:
          escaped = "&amp;";
          break;
        case 39:
          escaped = "&#39;";
          break;
        case 60:
          escaped = "&lt;";
          break;
        case 62:
          escaped = "&gt;";
          break;
        default:
          continue;
      }
      if (lastIndex !== index) {
        html += str.substring(lastIndex, index);
      }
      lastIndex = index + 1;
      html += escaped;
    }
    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
  }
  var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
  function escapeHtmlComment(src) {
    return src.replace(commentStripRE, "");
  }
  function looseCompareArrays(a, b) {
    if (a.length !== b.length)
      return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
      equal = looseEqual(a[i], b[i]);
    }
    return equal;
  }
  function looseEqual(a, b) {
    if (a === b)
      return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
      if (!aValidType || !bValidType) {
        return false;
      }
      const aKeysCount = Object.keys(a).length;
      const bKeysCount = Object.keys(b).length;
      if (aKeysCount !== bKeysCount) {
        return false;
      }
      for (const key in a) {
        const aHasKey = a.hasOwnProperty(key);
        const bHasKey = b.hasOwnProperty(key);
        if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
          return false;
        }
      }
    }
    return String(a) === String(b);
  }
  function looseIndexOf(arr, val) {
    return arr.findIndex((item) => looseEqual(item, val));
  }
  var toDisplayString = (val) => {
    return val == null ? "" : isObject(val) ? JSON.stringify(val, replacer, 2) : String(val);
  };
  var replacer = (_key, val) => {
    if (isMap(val)) {
      return {
        [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
          entries[`${key} =>`] = val2;
          return entries;
        }, {})
      };
    } else if (isSet(val)) {
      return {
        [`Set(${val.size})`]: [...val.values()]
      };
    } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
      return String(val);
    }
    return val;
  };
  var babelParserDefaultPlugins = [
    "bigInt",
    "optionalChaining",
    "nullishCoalescingOperator"
  ];
  var EMPTY_OBJ = Object.freeze({});
  var EMPTY_ARR = Object.freeze([]);
  var NOOP = () => {
  };
  var NO = () => false;
  var onRE = /^on[^a-z]/;
  var isOn = (key) => onRE.test(key);
  var isModelListener = (key) => key.startsWith("onUpdate:");
  var extend = Object.assign;
  var remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
      arr.splice(i, 1);
    }
  };
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isSet = (val) => toTypeString(val) === "[object Set]";
  var isDate = (val) => val instanceof Date;
  var isFunction = (val) => typeof val === "function";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
  };
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isPlainObject = (val) => toTypeString(val) === "[object Object]";
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var isReservedProp = /* @__PURE__ */ makeMap(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
  var cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
  var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
  var invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
      fns[i](arg);
    }
  };
  var def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      value
    });
  };
  var toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
  };
  var _globalThis;
  var getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : {});
  };
  exports.EMPTY_ARR = EMPTY_ARR;
  exports.EMPTY_OBJ = EMPTY_OBJ;
  exports.NO = NO;
  exports.NOOP = NOOP;
  exports.PatchFlagNames = PatchFlagNames;
  exports.babelParserDefaultPlugins = babelParserDefaultPlugins;
  exports.camelize = camelize;
  exports.capitalize = capitalize;
  exports.def = def;
  exports.escapeHtml = escapeHtml;
  exports.escapeHtmlComment = escapeHtmlComment;
  exports.extend = extend;
  exports.generateCodeFrame = generateCodeFrame;
  exports.getGlobalThis = getGlobalThis;
  exports.hasChanged = hasChanged;
  exports.hasOwn = hasOwn;
  exports.hyphenate = hyphenate;
  exports.invokeArrayFns = invokeArrayFns;
  exports.isArray = isArray;
  exports.isBooleanAttr = isBooleanAttr2;
  exports.isDate = isDate;
  exports.isFunction = isFunction;
  exports.isGloballyWhitelisted = isGloballyWhitelisted;
  exports.isHTMLTag = isHTMLTag;
  exports.isIntegerKey = isIntegerKey;
  exports.isKnownAttr = isKnownAttr;
  exports.isMap = isMap;
  exports.isModelListener = isModelListener;
  exports.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
  exports.isObject = isObject;
  exports.isOn = isOn;
  exports.isPlainObject = isPlainObject;
  exports.isPromise = isPromise;
  exports.isReservedProp = isReservedProp;
  exports.isSSRSafeAttrName = isSSRSafeAttrName;
  exports.isSVGTag = isSVGTag;
  exports.isSet = isSet;
  exports.isSpecialBooleanAttr = isSpecialBooleanAttr;
  exports.isString = isString;
  exports.isSymbol = isSymbol;
  exports.isVoidTag = isVoidTag;
  exports.looseEqual = looseEqual;
  exports.looseIndexOf = looseIndexOf;
  exports.makeMap = makeMap;
  exports.normalizeClass = normalizeClass;
  exports.normalizeStyle = normalizeStyle;
  exports.objectToString = objectToString;
  exports.parseStringStyle = parseStringStyle;
  exports.propsToAttrMap = propsToAttrMap;
  exports.remove = remove;
  exports.slotFlagsText = slotFlagsText;
  exports.stringifyStyle = stringifyStyle;
  exports.toDisplayString = toDisplayString;
  exports.toHandlerKey = toHandlerKey;
  exports.toNumber = toNumber;
  exports.toRawType = toRawType;
  exports.toTypeString = toTypeString;
});

// node_modules/@vue/shared/index.js
var require_shared = __commonJS((exports, module) => {
  "use strict";
  if (false) {} else {
    module.exports = require_shared_cjs();
  }
});

// node_modules/@vue/reactivity/dist/reactivity.cjs.js
var require_reactivity_cjs = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {value: true});
  var shared = require_shared();
  var targetMap = new WeakMap();
  var effectStack = [];
  var activeEffect;
  var ITERATE_KEY = Symbol("iterate");
  var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
  function isEffect(fn) {
    return fn && fn._isEffect === true;
  }
  function effect3(fn, options = shared.EMPTY_OBJ) {
    if (isEffect(fn)) {
      fn = fn.raw;
    }
    const effect4 = createReactiveEffect(fn, options);
    if (!options.lazy) {
      effect4();
    }
    return effect4;
  }
  function stop2(effect4) {
    if (effect4.active) {
      cleanup(effect4);
      if (effect4.options.onStop) {
        effect4.options.onStop();
      }
      effect4.active = false;
    }
  }
  var uid = 0;
  function createReactiveEffect(fn, options) {
    const effect4 = function reactiveEffect() {
      if (!effect4.active) {
        return fn();
      }
      if (!effectStack.includes(effect4)) {
        cleanup(effect4);
        try {
          enableTracking();
          effectStack.push(effect4);
          activeEffect = effect4;
          return fn();
        } finally {
          effectStack.pop();
          resetTracking();
          activeEffect = effectStack[effectStack.length - 1];
        }
      }
    };
    effect4.id = uid++;
    effect4.allowRecurse = !!options.allowRecurse;
    effect4._isEffect = true;
    effect4.active = true;
    effect4.raw = fn;
    effect4.deps = [];
    effect4.options = options;
    return effect4;
  }
  function cleanup(effect4) {
    const {deps} = effect4;
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].delete(effect4);
      }
      deps.length = 0;
    }
  }
  var shouldTrack = true;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) {
      return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = new Set());
    }
    if (!dep.has(activeEffect)) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
      if (activeEffect.options.onTrack) {
        activeEffect.options.onTrack({
          effect: activeEffect,
          target,
          type,
          key
        });
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    const effects = new Set();
    const add2 = (effectsToAdd) => {
      if (effectsToAdd) {
        effectsToAdd.forEach((effect4) => {
          if (effect4 !== activeEffect || effect4.allowRecurse) {
            effects.add(effect4);
          }
        });
      }
    };
    if (type === "clear") {
      depsMap.forEach(add2);
    } else if (key === "length" && shared.isArray(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          add2(dep);
        }
      });
    } else {
      if (key !== void 0) {
        add2(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!shared.isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (shared.isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (shared.isIntegerKey(key)) {
            add2(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!shared.isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (shared.isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (shared.isMap(target)) {
            add2(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    const run = (effect4) => {
      if (effect4.options.onTrigger) {
        effect4.options.onTrigger({
          effect: effect4,
          target,
          key,
          type,
          newValue,
          oldValue,
          oldTarget
        });
      }
      if (effect4.options.scheduler) {
        effect4.options.scheduler(effect4);
      } else {
        effect4();
      }
    };
    effects.forEach(run);
  }
  var isNonTrackableKeys = /* @__PURE__ */ shared.makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(shared.isSymbol));
  var get2 = /* @__PURE__ */ createGetter();
  var shallowGet = /* @__PURE__ */ createGetter(false, true);
  var readonlyGet = /* @__PURE__ */ createGetter(true);
  var shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
  var arrayInstrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function(...args) {
      const arr = toRaw2(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = method.apply(arr, args);
      if (res === -1 || res === false) {
        return method.apply(arr, args.map(toRaw2));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function(...args) {
      pauseTracking();
      const res = method.apply(this, args);
      resetTracking();
      return res;
    };
  });
  function createGetter(isReadonly2 = false, shallow = false) {
    return function get3(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = shared.isArray(target);
      if (!isReadonly2 && targetIsArray && shared.hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (shared.isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly2) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        const shouldUnwrap = !targetIsArray || !shared.isIntegerKey(key);
        return shouldUnwrap ? res.value : res;
      }
      if (shared.isObject(res)) {
        return isReadonly2 ? readonly(res) : reactive3(res);
      }
      return res;
    };
  }
  var set2 = /* @__PURE__ */ createSetter();
  var shallowSet = /* @__PURE__ */ createSetter(true);
  function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
      let oldValue = target[key];
      if (!shallow) {
        value = toRaw2(value);
        oldValue = toRaw2(oldValue);
        if (!shared.isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = shared.isArray(target) && shared.isIntegerKey(key) ? Number(key) < target.length : shared.hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw2(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (shared.hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = shared.hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!shared.isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate", shared.isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
  };
  var readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    },
    deleteProperty(target, key) {
      {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    }
  };
  var shallowReactiveHandlers = shared.extend({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
  });
  var shallowReadonlyHandlers = shared.extend({}, readonlyHandlers, {
    get: shallowReadonlyGet
  });
  var toReactive = (value) => shared.isObject(value) ? reactive3(value) : value;
  var toReadonly = (value) => shared.isObject(value) ? readonly(value) : value;
  var toShallow = (value) => value;
  var getProto = (v) => Reflect.getPrototypeOf(v);
  function get$1(target, key, isReadonly2 = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw2(target);
    const rawKey = toRaw2(key);
    if (key !== rawKey) {
      !isReadonly2 && track(rawTarget, "get", key);
    }
    !isReadonly2 && track(rawTarget, "get", rawKey);
    const {has: has2} = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly2 = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw2(target);
    const rawKey = toRaw2(key);
    if (key !== rawKey) {
      !isReadonly2 && track(rawTarget, "has", key);
    }
    !isReadonly2 && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly2 = false) {
    target = target["__v_raw"];
    !isReadonly2 && track(toRaw2(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw2(value);
    const target = toRaw2(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw2(value);
    const target = toRaw2(this);
    const {has: has2, get: get3} = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw2(key);
      hadKey = has2.call(target, key);
    } else {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (shared.hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw2(this);
    const {has: has2, get: get3} = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw2(key);
      hadKey = has2.call(target, key);
    } else {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw2(this);
    const hadItems = target.size !== 0;
    const oldTarget = shared.isMap(target) ? new Map(target) : new Set(target);
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly2, isShallow) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw2(target);
      const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly2, isShallow) {
    return function(...args) {
      const target = this["__v_raw"];
      const rawTarget = toRaw2(target);
      const targetIsMap = shared.isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        next() {
          const {value, done} = innerIterator.next();
          return done ? {value, done} : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${shared.capitalize(type)} operation ${key}failed: target is readonly.`, toRaw2(this));
      }
      return type === "delete" ? false : this;
    };
  }
  var mutableInstrumentations = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  var shallowInstrumentations = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  var readonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  var shallowReadonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  var iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
  });
  function createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(shared.hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  var mutableCollectionHandlers = {
    get: createInstrumentationGetter(false, false)
  };
  var shallowCollectionHandlers = {
    get: createInstrumentationGetter(false, true)
  };
  var readonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, false)
  };
  var shallowReadonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, true)
  };
  function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw2(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
      const type = shared.toRawType(target);
      console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }
  var reactiveMap = new WeakMap();
  var shallowReactiveMap = new WeakMap();
  var readonlyMap = new WeakMap();
  var shallowReadonlyMap = new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(shared.toRawType(value));
  }
  function reactive3(target) {
    if (target && target["__v_isReadonly"]) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
  }
  function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!shared.isObject(target)) {
      {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function isReactive2(value) {
    if (isReadonly(value)) {
      return isReactive2(value["__v_raw"]);
    }
    return !!(value && value["__v_isReactive"]);
  }
  function isReadonly(value) {
    return !!(value && value["__v_isReadonly"]);
  }
  function isProxy(value) {
    return isReactive2(value) || isReadonly(value);
  }
  function toRaw2(observed) {
    return observed && toRaw2(observed["__v_raw"]) || observed;
  }
  function markRaw(value) {
    shared.def(value, "__v_skip", true);
    return value;
  }
  var convert = (val) => shared.isObject(val) ? reactive3(val) : val;
  function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
  }
  function ref(value) {
    return createRef(value);
  }
  function shallowRef(value) {
    return createRef(value, true);
  }
  var RefImpl = class {
    constructor(_rawValue, _shallow = false) {
      this._rawValue = _rawValue;
      this._shallow = _shallow;
      this.__v_isRef = true;
      this._value = _shallow ? _rawValue : convert(_rawValue);
    }
    get value() {
      track(toRaw2(this), "get", "value");
      return this._value;
    }
    set value(newVal) {
      if (shared.hasChanged(toRaw2(newVal), this._rawValue)) {
        this._rawValue = newVal;
        this._value = this._shallow ? newVal : convert(newVal);
        trigger(toRaw2(this), "set", "value", newVal);
      }
    }
  };
  function createRef(rawValue, shallow = false) {
    if (isRef(rawValue)) {
      return rawValue;
    }
    return new RefImpl(rawValue, shallow);
  }
  function triggerRef(ref2) {
    trigger(toRaw2(ref2), "set", "value", ref2.value);
  }
  function unref(ref2) {
    return isRef(ref2) ? ref2.value : ref2;
  }
  var shallowUnwrapHandlers = {
    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
      const oldValue = target[key];
      if (isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      } else {
        return Reflect.set(target, key, value, receiver);
      }
    }
  };
  function proxyRefs(objectWithRefs) {
    return isReactive2(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
  }
  var CustomRefImpl = class {
    constructor(factory) {
      this.__v_isRef = true;
      const {get: get3, set: set3} = factory(() => track(this, "get", "value"), () => trigger(this, "set", "value"));
      this._get = get3;
      this._set = set3;
    }
    get value() {
      return this._get();
    }
    set value(newVal) {
      this._set(newVal);
    }
  };
  function customRef(factory) {
    return new CustomRefImpl(factory);
  }
  function toRefs(object) {
    if (!isProxy(object)) {
      console.warn(`toRefs() expects a reactive object but received a plain one.`);
    }
    const ret = shared.isArray(object) ? new Array(object.length) : {};
    for (const key in object) {
      ret[key] = toRef(object, key);
    }
    return ret;
  }
  var ObjectRefImpl = class {
    constructor(_object, _key) {
      this._object = _object;
      this._key = _key;
      this.__v_isRef = true;
    }
    get value() {
      return this._object[this._key];
    }
    set value(newVal) {
      this._object[this._key] = newVal;
    }
  };
  function toRef(object, key) {
    return isRef(object[key]) ? object[key] : new ObjectRefImpl(object, key);
  }
  var ComputedRefImpl = class {
    constructor(getter, _setter, isReadonly2) {
      this._setter = _setter;
      this._dirty = true;
      this.__v_isRef = true;
      this.effect = effect3(getter, {
        lazy: true,
        scheduler: () => {
          if (!this._dirty) {
            this._dirty = true;
            trigger(toRaw2(this), "set", "value");
          }
        }
      });
      this["__v_isReadonly"] = isReadonly2;
    }
    get value() {
      const self2 = toRaw2(this);
      if (self2._dirty) {
        self2._value = this.effect();
        self2._dirty = false;
      }
      track(self2, "get", "value");
      return self2._value;
    }
    set value(newValue) {
      this._setter(newValue);
    }
  };
  function computed(getterOrOptions) {
    let getter;
    let setter;
    if (shared.isFunction(getterOrOptions)) {
      getter = getterOrOptions;
      setter = () => {
        console.warn("Write operation failed: computed value is readonly");
      };
    } else {
      getter = getterOrOptions.get;
      setter = getterOrOptions.set;
    }
    return new ComputedRefImpl(getter, setter, shared.isFunction(getterOrOptions) || !getterOrOptions.set);
  }
  exports.ITERATE_KEY = ITERATE_KEY;
  exports.computed = computed;
  exports.customRef = customRef;
  exports.effect = effect3;
  exports.enableTracking = enableTracking;
  exports.isProxy = isProxy;
  exports.isReactive = isReactive2;
  exports.isReadonly = isReadonly;
  exports.isRef = isRef;
  exports.markRaw = markRaw;
  exports.pauseTracking = pauseTracking;
  exports.proxyRefs = proxyRefs;
  exports.reactive = reactive3;
  exports.readonly = readonly;
  exports.ref = ref;
  exports.resetTracking = resetTracking;
  exports.shallowReactive = shallowReactive;
  exports.shallowReadonly = shallowReadonly;
  exports.shallowRef = shallowRef;
  exports.stop = stop2;
  exports.toRaw = toRaw2;
  exports.toRef = toRef;
  exports.toRefs = toRefs;
  exports.track = track;
  exports.trigger = trigger;
  exports.triggerRef = triggerRef;
  exports.unref = unref;
});

// node_modules/@vue/reactivity/index.js
var require_reactivity = __commonJS((exports, module) => {
  "use strict";
  if (false) {} else {
    module.exports = require_reactivity_cjs();
  }
});

// packages/alpinejs/src/scheduler.js
var flushPending = false;
var flushing = false;
var queue = [];
function scheduler(callback) {
  queueJob(callback);
}
function queueJob(job) {
  if (!queue.includes(job))
    queue.push(job);
  queueFlush();
}
function queueFlush() {
  if (!flushing && !flushPending) {
    flushPending = true;
    queueMicrotask(flushJobs);
  }
}
function flushJobs() {
  flushPending = false;
  flushing = true;
  for (let i = 0; i < queue.length; i++) {
    queue[i]();
  }
  queue.length = 0;
  flushing = false;
}

// packages/alpinejs/src/reactivity.js
var reactive;
var effect;
var release;
var raw;
var shouldSchedule = true;
function disableEffectScheduling(callback) {
  shouldSchedule = false;
  callback();
  shouldSchedule = true;
}
function setReactivityEngine(engine) {
  reactive = engine.reactive;
  release = engine.release;
  effect = (callback) => engine.effect(callback, {scheduler: (task) => {
    if (shouldSchedule) {
      scheduler(task);
    } else {
      task();
    }
  }});
  raw = engine.raw;
}
function overrideEffect(override) {
  effect = override;
}
function elementBoundEffect(el) {
  let cleanup = () => {
  };
  let wrappedEffect = (callback) => {
    let effectReference = effect(callback);
    if (!el._x_effects) {
      el._x_effects = new Set();
      el._x_runEffects = () => {
        el._x_effects.forEach((i) => i());
      };
    }
    el._x_effects.add(effectReference);
    cleanup = () => {
      if (effectReference === void 0)
        return;
      el._x_effects.delete(effectReference);
      release(effectReference);
    };
  };
  return [wrappedEffect, () => {
    cleanup();
  }];
}

// packages/alpinejs/src/mutation.js
var onAttributeAddeds = [];
var onElRemoveds = [];
var onElAddeds = [];
function onElAdded(callback) {
  onElAddeds.push(callback);
}
function onElRemoved(callback) {
  onElRemoveds.push(callback);
}
function onAttributesAdded(callback) {
  onAttributeAddeds.push(callback);
}
function onAttributeRemoved(el, name, callback) {
  if (!el._x_attributeCleanups)
    el._x_attributeCleanups = {};
  if (!el._x_attributeCleanups[name])
    el._x_attributeCleanups[name] = [];
  el._x_attributeCleanups[name].push(callback);
}
function cleanupAttributes(el, names) {
  if (!el._x_attributeCleanups)
    return;
  Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
    if (names === void 0 || names.includes(name)) {
      value.forEach((i) => i());
      delete el._x_attributeCleanups[name];
    }
  });
}
var observer = new MutationObserver(onMutate);
var currentlyObserving = false;
function startObservingMutations() {
  observer.observe(document, {subtree: true, childList: true, attributes: true, attributeOldValue: true});
  currentlyObserving = true;
}
function stopObservingMutations() {
  flushObserver();
  observer.disconnect();
  currentlyObserving = false;
}
var recordQueue = [];
var willProcessRecordQueue = false;
function flushObserver() {
  recordQueue = recordQueue.concat(observer.takeRecords());
  if (recordQueue.length && !willProcessRecordQueue) {
    willProcessRecordQueue = true;
    queueMicrotask(() => {
      processRecordQueue();
      willProcessRecordQueue = false;
    });
  }
}
function processRecordQueue() {
  onMutate(recordQueue);
  recordQueue.length = 0;
}
function mutateDom(callback) {
  if (!currentlyObserving)
    return callback();
  stopObservingMutations();
  let result = callback();
  startObservingMutations();
  return result;
}
var isCollecting = false;
var deferredMutations = [];
function deferMutations() {
  isCollecting = true;
}
function flushAndStopDeferringMutations() {
  isCollecting = false;
  onMutate(deferredMutations);
  deferredMutations = [];
}
function onMutate(mutations) {
  if (isCollecting) {
    deferredMutations = deferredMutations.concat(mutations);
    return;
  }
  let addedNodes = [];
  let removedNodes = [];
  let addedAttributes = new Map();
  let removedAttributes = new Map();
  for (let i = 0; i < mutations.length; i++) {
    if (mutations[i].target._x_ignoreMutationObserver)
      continue;
    if (mutations[i].type === "childList") {
      mutations[i].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.push(node));
      mutations[i].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.push(node));
    }
    if (mutations[i].type === "attributes") {
      let el = mutations[i].target;
      let name = mutations[i].attributeName;
      let oldValue = mutations[i].oldValue;
      let add = () => {
        if (!addedAttributes.has(el))
          addedAttributes.set(el, []);
        addedAttributes.get(el).push({name, value: el.getAttribute(name)});
      };
      let remove = () => {
        if (!removedAttributes.has(el))
          removedAttributes.set(el, []);
        removedAttributes.get(el).push(name);
      };
      if (el.hasAttribute(name) && oldValue === null) {
        add();
      } else if (el.hasAttribute(name)) {
        remove();
        add();
      } else {
        remove();
      }
    }
  }
  removedAttributes.forEach((attrs, el) => {
    cleanupAttributes(el, attrs);
  });
  addedAttributes.forEach((attrs, el) => {
    onAttributeAddeds.forEach((i) => i(el, attrs));
  });
  for (let node of addedNodes) {
    if (removedNodes.includes(node))
      continue;
    onElAddeds.forEach((i) => i(node));
  }
  for (let node of removedNodes) {
    if (addedNodes.includes(node))
      continue;
    onElRemoveds.forEach((i) => i(node));
  }
  addedNodes = null;
  removedNodes = null;
  addedAttributes = null;
  removedAttributes = null;
}

// packages/alpinejs/src/scope.js
function addScopeToNode(node, data2, referenceNode) {
  node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
  return () => {
    node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
  };
}
function refreshScope(element, scope) {
  let existingScope = element._x_dataStack[0];
  Object.entries(scope).forEach(([key, value]) => {
    existingScope[key] = value;
  });
}
function closestDataStack(node) {
  if (node._x_dataStack)
    return node._x_dataStack;
  if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
    return closestDataStack(node.host);
  }
  if (!node.parentNode) {
    return [];
  }
  return closestDataStack(node.parentNode);
}
function mergeProxies(objects) {
  let thisProxy = new Proxy({}, {
    ownKeys: () => {
      return Array.from(new Set(objects.flatMap((i) => Object.keys(i))));
    },
    has: (target, name) => {
      return objects.some((obj) => obj.hasOwnProperty(name));
    },
    get: (target, name) => {
      return (objects.find((obj) => {
        if (obj.hasOwnProperty(name)) {
          let descriptor = Object.getOwnPropertyDescriptor(obj, name);
          if (descriptor.get && descriptor.get._x_alreadyBound || descriptor.set && descriptor.set._x_alreadyBound) {
            return true;
          }
          if ((descriptor.get || descriptor.set) && descriptor.enumerable) {
            let getter = descriptor.get;
            let setter = descriptor.set;
            let property = descriptor;
            getter = getter && getter.bind(thisProxy);
            setter = setter && setter.bind(thisProxy);
            if (getter)
              getter._x_alreadyBound = true;
            if (setter)
              setter._x_alreadyBound = true;
            Object.defineProperty(obj, name, {
              ...property,
              get: getter,
              set: setter
            });
          }
          return true;
        }
        return false;
      }) || {})[name];
    },
    set: (target, name, value) => {
      let closestObjectWithKey = objects.find((obj) => obj.hasOwnProperty(name));
      if (closestObjectWithKey) {
        closestObjectWithKey[name] = value;
      } else {
        objects[objects.length - 1][name] = value;
      }
      return true;
    }
  });
  return thisProxy;
}

// packages/alpinejs/src/interceptor.js
function initInterceptors(data2) {
  let isObject = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
  let recurse = (obj, basePath = "") => {
    Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, {value, enumerable}]) => {
      if (enumerable === false || value === void 0)
        return;
      let path = basePath === "" ? key : `${basePath}.${key}`;
      if (typeof value === "object" && value !== null && value._x_interceptor) {
        obj[key] = value.initialize(data2, path, key);
      } else {
        if (isObject(value) && value !== obj && !(value instanceof Element)) {
          recurse(value, path);
        }
      }
    });
  };
  return recurse(data2);
}
function interceptor(callback, mutateObj = () => {
}) {
  let obj = {
    initialValue: void 0,
    _x_interceptor: true,
    initialize(data2, path, key) {
      return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
    }
  };
  mutateObj(obj);
  return (initialValue) => {
    if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
      let initialize = obj.initialize.bind(obj);
      obj.initialize = (data2, path, key) => {
        let innerValue = initialValue.initialize(data2, path, key);
        obj.initialValue = innerValue;
        return initialize(data2, path, key);
      };
    } else {
      obj.initialValue = initialValue;
    }
    return obj;
  };
}
function get(obj, path) {
  return path.split(".").reduce((carry, segment) => carry[segment], obj);
}
function set(obj, path, value) {
  if (typeof path === "string")
    path = path.split(".");
  if (path.length === 1)
    obj[path[0]] = value;
  else if (path.length === 0)
    throw error;
  else {
    if (obj[path[0]])
      return set(obj[path[0]], path.slice(1), value);
    else {
      obj[path[0]] = {};
      return set(obj[path[0]], path.slice(1), value);
    }
  }
}

// packages/alpinejs/src/magics.js
var magics = {};
function magic(name, callback) {
  magics[name] = callback;
}
function injectMagics(obj, el) {
  Object.entries(magics).forEach(([name, callback]) => {
    Object.defineProperty(obj, `$${name}`, {
      get() {
        return callback(el, {Alpine: alpine_default, interceptor});
      },
      enumerable: false
    });
  });
  return obj;
}

// packages/alpinejs/src/utils/error.js
function tryCatch(el, expression, callback, ...args) {
  try {
    return callback(...args);
  } catch (e) {
    handleError(e, el, expression);
  }
}
function handleError(error2, el, expression = void 0) {
  Object.assign(error2, {el, expression});
  console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
  setTimeout(() => {
    throw error2;
  }, 0);
}

// packages/alpinejs/src/evaluator.js
function evaluate(el, expression, extras = {}) {
  let result;
  evaluateLater(el, expression)((value) => result = value, extras);
  return result;
}
function evaluateLater(...args) {
  return theEvaluatorFunction(...args);
}
var theEvaluatorFunction = normalEvaluator;
function setEvaluator(newEvaluator) {
  theEvaluatorFunction = newEvaluator;
}
function normalEvaluator(el, expression) {
  let overriddenMagics = {};
  injectMagics(overriddenMagics, el);
  let dataStack = [overriddenMagics, ...closestDataStack(el)];
  if (typeof expression === "function") {
    return generateEvaluatorFromFunction(dataStack, expression);
  }
  let evaluator = generateEvaluatorFromString(dataStack, expression, el);
  return tryCatch.bind(null, el, expression, evaluator);
}
function generateEvaluatorFromFunction(dataStack, func) {
  return (receiver = () => {
  }, {scope = {}, params = []} = {}) => {
    let result = func.apply(mergeProxies([scope, ...dataStack]), params);
    runIfTypeOfFunction(receiver, result);
  };
}
var evaluatorMemo = {};
function generateFunctionFromString(expression, el) {
  if (evaluatorMemo[expression]) {
    return evaluatorMemo[expression];
  }
  let AsyncFunction = Object.getPrototypeOf(async function() {
  }).constructor;
  let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression) || /^(let|const)\s/.test(expression) ? `(() => { ${expression} })()` : expression;
  const safeAsyncFunction = () => {
    try {
      return new AsyncFunction(["__self", "scope"], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
    } catch (error2) {
      handleError(error2, el, expression);
      return Promise.resolve();
    }
  };
  let func = safeAsyncFunction();
  evaluatorMemo[expression] = func;
  return func;
}
function generateEvaluatorFromString(dataStack, expression, el) {
  let func = generateFunctionFromString(expression, el);
  return (receiver = () => {
  }, {scope = {}, params = []} = {}) => {
    func.result = void 0;
    func.finished = false;
    let completeScope = mergeProxies([scope, ...dataStack]);
    if (typeof func === "function") {
      let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
      if (func.finished) {
        runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
      } else {
        promise.then((result) => {
          runIfTypeOfFunction(receiver, result, completeScope, params, el);
        }).catch((error2) => handleError(error2, el, expression));
      }
    }
  };
}
function runIfTypeOfFunction(receiver, value, scope, params, el) {
  if (typeof value === "function") {
    let result = value.apply(scope, params);
    if (result instanceof Promise) {
      result.then((i) => runIfTypeOfFunction(receiver, i, scope, params)).catch((error2) => handleError(error2, el, value));
    } else {
      receiver(result);
    }
  } else {
    receiver(value);
  }
}

// packages/alpinejs/src/directives.js
var prefixAsString = "x-";
function prefix(subject = "") {
  return prefixAsString + subject;
}
function setPrefix(newPrefix) {
  prefixAsString = newPrefix;
}
var directiveHandlers = {};
function directive(name, callback) {
  directiveHandlers[name] = callback;
}
function directives(el, attributes, originalAttributeOverride) {
  let transformedAttributeMap = {};
  let directives2 = Array.from(attributes).map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
  return directives2.map((directive2) => {
    return getDirectiveHandler(el, directive2);
  });
}
function attributesOnly(attributes) {
  return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
}
var isDeferringHandlers = false;
var directiveHandlerStacks = new Map();
var currentHandlerStackKey = Symbol();
function deferHandlingDirectives(callback) {
  isDeferringHandlers = true;
  let key = Symbol();
  currentHandlerStackKey = key;
  directiveHandlerStacks.set(key, []);
  let flushHandlers = () => {
    while (directiveHandlerStacks.get(key).length)
      directiveHandlerStacks.get(key).shift()();
    directiveHandlerStacks.delete(key);
  };
  let stopDeferring = () => {
    isDeferringHandlers = false;
    flushHandlers();
  };
  callback(flushHandlers);
  stopDeferring();
}
function getDirectiveHandler(el, directive2) {
  let noop = () => {
  };
  let handler3 = directiveHandlers[directive2.type] || noop;
  let cleanups = [];
  let cleanup = (callback) => cleanups.push(callback);
  let [effect3, cleanupEffect] = elementBoundEffect(el);
  cleanups.push(cleanupEffect);
  let utilities = {
    Alpine: alpine_default,
    effect: effect3,
    cleanup,
    evaluateLater: evaluateLater.bind(evaluateLater, el),
    evaluate: evaluate.bind(evaluate, el)
  };
  let doCleanup = () => cleanups.forEach((i) => i());
  onAttributeRemoved(el, directive2.original, doCleanup);
  let fullHandler = () => {
    if (el._x_ignore || el._x_ignoreSelf)
      return;
    handler3.inline && handler3.inline(el, directive2, utilities);
    handler3 = handler3.bind(handler3, el, directive2, utilities);
    isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler3) : handler3();
  };
  fullHandler.runCleanups = doCleanup;
  return fullHandler;
}
var startingWith = (subject, replacement) => ({name, value}) => {
  if (name.startsWith(subject))
    name = name.replace(subject, replacement);
  return {name, value};
};
var into = (i) => i;
function toTransformedAttributes(callback = () => {
}) {
  return ({name, value}) => {
    let {name: newName, value: newValue} = attributeTransformers.reduce((carry, transform) => {
      return transform(carry);
    }, {name, value});
    if (newName !== name)
      callback(newName, name);
    return {name: newName, value: newValue};
  };
}
var attributeTransformers = [];
function mapAttributes(callback) {
  attributeTransformers.push(callback);
}
function outNonAlpineAttributes({name}) {
  return alpineAttributeRegex().test(name);
}
var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
  return ({name, value}) => {
    let typeMatch = name.match(alpineAttributeRegex());
    let valueMatch = name.match(/:([a-zA-Z0-9\-:]+)/);
    let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    let original = originalAttributeOverride || transformedAttributeMap[name] || name;
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map((i) => i.replace(".", "")),
      expression: value,
      original
    };
  };
}
var DEFAULT = "DEFAULT";
var directiveOrder = [
  "ignore",
  "ref",
  "data",
  "bind",
  "init",
  "for",
  "model",
  "transition",
  "show",
  "if",
  DEFAULT,
  "element"
];
function byPriority(a, b) {
  let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
  let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
  return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
}

// packages/alpinejs/src/utils/dispatch.js
function dispatch(el, name, detail = {}) {
  el.dispatchEvent(new CustomEvent(name, {
    detail,
    bubbles: true,
    composed: true,
    cancelable: true
  }));
}

// packages/alpinejs/src/nextTick.js
var tickStack = [];
var isHolding = false;
function nextTick(callback) {
  tickStack.push(callback);
  queueMicrotask(() => {
    isHolding || setTimeout(() => {
      releaseNextTicks();
    });
  });
}
function releaseNextTicks() {
  isHolding = false;
  while (tickStack.length)
    tickStack.shift()();
}
function holdNextTicks() {
  isHolding = true;
}

// packages/alpinejs/src/utils/walk.js
function walk(el, callback) {
  if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
    Array.from(el.children).forEach((el2) => walk(el2, callback));
    return;
  }
  let skip = false;
  callback(el, () => skip = true);
  if (skip)
    return;
  let node = el.firstElementChild;
  while (node) {
    walk(node, callback, false);
    node = node.nextElementSibling;
  }
}

// packages/alpinejs/src/utils/warn.js
function warn(message, ...args) {
  console.warn(`Alpine Warning: ${message}`, ...args);
}

// packages/alpinejs/src/lifecycle.js
function start() {
  if (!document.body)
    warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
  dispatch(document, "alpine:init");
  dispatch(document, "alpine:initializing");
  startObservingMutations();
  onElAdded((el) => initTree(el, walk));
  onElRemoved((el) => nextTick(() => destroyTree(el)));
  onAttributesAdded((el, attrs) => {
    directives(el, attrs).forEach((handle) => handle());
  });
  let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
  Array.from(document.querySelectorAll(allSelectors())).filter(outNestedComponents).forEach((el) => {
    initTree(el);
  });
  dispatch(document, "alpine:initialized");
}
var rootSelectorCallbacks = [];
var initSelectorCallbacks = [];
function rootSelectors() {
  return rootSelectorCallbacks.map((fn) => fn());
}
function allSelectors() {
  return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
}
function addRootSelector(selectorCallback) {
  rootSelectorCallbacks.push(selectorCallback);
}
function addInitSelector(selectorCallback) {
  initSelectorCallbacks.push(selectorCallback);
}
function closestRoot(el, includeInitSelectors = false) {
  if (!el)
    return;
  const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
  if (selectors.some((selector) => el.matches(selector)))
    return el;
  if (!el.parentElement)
    return;
  return closestRoot(el.parentElement, includeInitSelectors);
}
function isRoot(el) {
  return rootSelectors().some((selector) => el.matches(selector));
}
function initTree(el, walker = walk) {
  deferHandlingDirectives(() => {
    walker(el, (el2, skip) => {
      directives(el2, el2.attributes).forEach((handle) => handle());
      el2._x_ignore && skip();
    });
  });
}
function destroyTree(root) {
  walk(root, (el) => cleanupAttributes(el));
}

// packages/alpinejs/src/utils/classes.js
function setClasses(el, value) {
  if (Array.isArray(value)) {
    return setClassesFromString(el, value.join(" "));
  } else if (typeof value === "object" && value !== null) {
    return setClassesFromObject(el, value);
  } else if (typeof value === "function") {
    return setClasses(el, value());
  }
  return setClassesFromString(el, value);
}
function setClassesFromString(el, classString) {
  let split = (classString2) => classString2.split(" ").filter(Boolean);
  let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el.classList.contains(i)).filter(Boolean);
  let addClassesAndReturnUndo = (classes) => {
    el.classList.add(...classes);
    return () => {
      el.classList.remove(...classes);
    };
  };
  classString = classString === true ? classString = "" : classString || "";
  return addClassesAndReturnUndo(missingClasses(classString));
}
function setClassesFromObject(el, classObject) {
  let split = (classString) => classString.split(" ").filter(Boolean);
  let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
  let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
  let added = [];
  let removed = [];
  forRemove.forEach((i) => {
    if (el.classList.contains(i)) {
      el.classList.remove(i);
      removed.push(i);
    }
  });
  forAdd.forEach((i) => {
    if (!el.classList.contains(i)) {
      el.classList.add(i);
      added.push(i);
    }
  });
  return () => {
    removed.forEach((i) => el.classList.add(i));
    added.forEach((i) => el.classList.remove(i));
  };
}

// packages/alpinejs/src/utils/styles.js
function setStyles(el, value) {
  if (typeof value === "object" && value !== null) {
    return setStylesFromObject(el, value);
  }
  return setStylesFromString(el, value);
}
function setStylesFromObject(el, value) {
  let previousStyles = {};
  Object.entries(value).forEach(([key, value2]) => {
    previousStyles[key] = el.style[key];
    el.style.setProperty(kebabCase(key), value2);
  });
  setTimeout(() => {
    if (el.style.length === 0) {
      el.removeAttribute("style");
    }
  });
  return () => {
    setStyles(el, previousStyles);
  };
}
function setStylesFromString(el, value) {
  let cache = el.getAttribute("style", value);
  el.setAttribute("style", value);
  return () => {
    el.setAttribute("style", cache);
  };
}
function kebabCase(subject) {
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

// packages/alpinejs/src/utils/once.js
function once(callback, fallback = () => {
}) {
  let called = false;
  return function() {
    if (!called) {
      called = true;
      callback.apply(this, arguments);
    } else {
      fallback.apply(this, arguments);
    }
  };
}

// packages/alpinejs/src/directives/x-transition.js
directive("transition", (el, {value, modifiers, expression}, {evaluate: evaluate2}) => {
  if (typeof expression === "function")
    expression = evaluate2(expression);
  if (!expression) {
    registerTransitionsFromHelper(el, modifiers, value);
  } else {
    registerTransitionsFromClassString(el, expression, value);
  }
});
function registerTransitionsFromClassString(el, classString, stage) {
  registerTransitionObject(el, setClasses, "");
  let directiveStorageMap = {
    enter: (classes) => {
      el._x_transition.enter.during = classes;
    },
    "enter-start": (classes) => {
      el._x_transition.enter.start = classes;
    },
    "enter-end": (classes) => {
      el._x_transition.enter.end = classes;
    },
    leave: (classes) => {
      el._x_transition.leave.during = classes;
    },
    "leave-start": (classes) => {
      el._x_transition.leave.start = classes;
    },
    "leave-end": (classes) => {
      el._x_transition.leave.end = classes;
    }
  };
  directiveStorageMap[stage](classString);
}
function registerTransitionsFromHelper(el, modifiers, stage) {
  registerTransitionObject(el, setStyles);
  let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
  let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
  let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
  if (modifiers.includes("in") && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
  }
  if (modifiers.includes("out") && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
  }
  let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
  let wantsOpacity = wantsAll || modifiers.includes("opacity");
  let wantsScale = wantsAll || modifiers.includes("scale");
  let opacityValue = wantsOpacity ? 0 : 1;
  let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
  let delay = modifierValue(modifiers, "delay", 0);
  let origin = modifierValue(modifiers, "origin", "center");
  let property = "opacity, transform";
  let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
  let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
  let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
  if (transitioningIn) {
    el._x_transition.enter.during = {
      transformOrigin: origin,
      transitionDelay: delay,
      transitionProperty: property,
      transitionDuration: `${durationIn}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.enter.start = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
    el._x_transition.enter.end = {
      opacity: 1,
      transform: `scale(1)`
    };
  }
  if (transitioningOut) {
    el._x_transition.leave.during = {
      transformOrigin: origin,
      transitionDelay: delay,
      transitionProperty: property,
      transitionDuration: `${durationOut}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.leave.start = {
      opacity: 1,
      transform: `scale(1)`
    };
    el._x_transition.leave.end = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
  }
}
function registerTransitionObject(el, setFunction, defaultValue = {}) {
  if (!el._x_transition)
    el._x_transition = {
      enter: {during: defaultValue, start: defaultValue, end: defaultValue},
      leave: {during: defaultValue, start: defaultValue, end: defaultValue},
      in(before = () => {
      }, after = () => {
      }) {
        transition(el, setFunction, {
          during: this.enter.during,
          start: this.enter.start,
          end: this.enter.end
        }, before, after);
      },
      out(before = () => {
      }, after = () => {
      }) {
        transition(el, setFunction, {
          during: this.leave.during,
          start: this.leave.start,
          end: this.leave.end
        }, before, after);
      }
    };
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
  let clickAwayCompatibleShow = () => {
    document.visibilityState === "visible" ? requestAnimationFrame(show) : setTimeout(show);
  };
  if (value) {
    if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
      el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
    } else {
      el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
    }
    return;
  }
  el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
    el._x_transition.out(() => {
    }, () => resolve(hide));
    el._x_transitioning.beforeCancel(() => reject({isFromCancelledTransition: true}));
  }) : Promise.resolve(hide);
  queueMicrotask(() => {
    let closest = closestHide(el);
    if (closest) {
      if (!closest._x_hideChildren)
        closest._x_hideChildren = [];
      closest._x_hideChildren.push(el);
    } else {
      queueMicrotask(() => {
        let hideAfterChildren = (el2) => {
          let carry = Promise.all([
            el2._x_hidePromise,
            ...(el2._x_hideChildren || []).map(hideAfterChildren)
          ]).then(([i]) => i());
          delete el2._x_hidePromise;
          delete el2._x_hideChildren;
          return carry;
        };
        hideAfterChildren(el).catch((e) => {
          if (!e.isFromCancelledTransition)
            throw e;
        });
      });
    }
  });
};
function closestHide(el) {
  let parent = el.parentNode;
  if (!parent)
    return;
  return parent._x_hidePromise ? parent : closestHide(parent);
}
function transition(el, setFunction, {during, start: start2, end} = {}, before = () => {
}, after = () => {
}) {
  if (el._x_transitioning)
    el._x_transitioning.cancel();
  if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
    before();
    after();
    return;
  }
  let undoStart, undoDuring, undoEnd;
  performTransition(el, {
    start() {
      undoStart = setFunction(el, start2);
    },
    during() {
      undoDuring = setFunction(el, during);
    },
    before,
    end() {
      undoStart();
      undoEnd = setFunction(el, end);
    },
    after,
    cleanup() {
      undoDuring();
      undoEnd();
    }
  });
}
function performTransition(el, stages) {
  let interrupted, reachedBefore, reachedEnd;
  let finish = once(() => {
    mutateDom(() => {
      interrupted = true;
      if (!reachedBefore)
        stages.before();
      if (!reachedEnd) {
        stages.end();
        releaseNextTicks();
      }
      stages.after();
      if (el.isConnected)
        stages.cleanup();
      delete el._x_transitioning;
    });
  });
  el._x_transitioning = {
    beforeCancels: [],
    beforeCancel(callback) {
      this.beforeCancels.push(callback);
    },
    cancel: once(function() {
      while (this.beforeCancels.length) {
        this.beforeCancels.shift()();
      }
      ;
      finish();
    }),
    finish
  };
  mutateDom(() => {
    stages.start();
    stages.during();
  });
  holdNextTicks();
  requestAnimationFrame(() => {
    if (interrupted)
      return;
    let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
    let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
    if (duration === 0)
      duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
    mutateDom(() => {
      stages.before();
    });
    reachedBefore = true;
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      mutateDom(() => {
        stages.end();
      });
      releaseNextTicks();
      setTimeout(el._x_transitioning.finish, duration + delay);
      reachedEnd = true;
    });
  });
}
function modifierValue(modifiers, key, fallback) {
  if (modifiers.indexOf(key) === -1)
    return fallback;
  const rawValue = modifiers[modifiers.indexOf(key) + 1];
  if (!rawValue)
    return fallback;
  if (key === "scale") {
    if (isNaN(rawValue))
      return fallback;
  }
  if (key === "duration") {
    let match = rawValue.match(/([0-9]+)ms/);
    if (match)
      return match[1];
  }
  if (key === "origin") {
    if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
      return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
    }
  }
  return rawValue;
}

// packages/alpinejs/src/utils/debounce.js
function debounce(func, wait) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// packages/alpinejs/src/utils/throttle.js
function throttle(func, limit) {
  let inThrottle;
  return function() {
    let context = this, args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// packages/alpinejs/src/plugin.js
function plugin(callback) {
  callback(alpine_default);
}

// packages/alpinejs/src/store.js
var stores = {};
var isReactive = false;
function store(name, value) {
  if (!isReactive) {
    stores = reactive(stores);
    isReactive = true;
  }
  if (value === void 0) {
    return stores[name];
  }
  stores[name] = value;
  if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
    stores[name].init();
  }
  initInterceptors(stores[name]);
}
function getStores() {
  return stores;
}

// packages/alpinejs/src/clone.js
var isCloning = false;
function skipDuringClone(callback, fallback = () => {
}) {
  return (...args) => isCloning ? fallback(...args) : callback(...args);
}
function clone(oldEl, newEl) {
  newEl._x_dataStack = oldEl._x_dataStack;
  isCloning = true;
  dontRegisterReactiveSideEffects(() => {
    cloneTree(newEl);
  });
  isCloning = false;
}
function cloneTree(el) {
  let hasRunThroughFirstEl = false;
  let shallowWalker = (el2, callback) => {
    walk(el2, (el3, skip) => {
      if (hasRunThroughFirstEl && isRoot(el3))
        return skip();
      hasRunThroughFirstEl = true;
      callback(el3, skip);
    });
  };
  initTree(el, shallowWalker);
}
function dontRegisterReactiveSideEffects(callback) {
  let cache = effect;
  overrideEffect((callback2, el) => {
    let storedEffect = cache(callback2);
    release(storedEffect);
    return () => {
    };
  });
  callback();
  overrideEffect(cache);
}

// packages/alpinejs/src/datas.js
var datas = {};
function data(name, callback) {
  datas[name] = callback;
}
function injectDataProviders(obj, context) {
  Object.entries(datas).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback.bind(context)(...args);
        };
      },
      enumerable: false
    });
  });
  return obj;
}

// packages/alpinejs/src/alpine.js
var Alpine = {
  get reactive() {
    return reactive;
  },
  get release() {
    return release;
  },
  get effect() {
    return effect;
  },
  get raw() {
    return raw;
  },
  version: "3.5.1",
  flushAndStopDeferringMutations,
  disableEffectScheduling,
  setReactivityEngine,
  skipDuringClone,
  addRootSelector,
  deferMutations,
  mapAttributes,
  evaluateLater,
  setEvaluator,
  mergeProxies,
  closestRoot,
  interceptor,
  transition,
  setStyles,
  mutateDom,
  directive,
  throttle,
  debounce,
  evaluate,
  initTree,
  nextTick,
  prefix: setPrefix,
  plugin,
  magic,
  store,
  start,
  clone,
  data
};
var alpine_default = Alpine;

// packages/alpinejs/src/index.js
var import_reactivity9 = __toModule(require_reactivity());

// packages/alpinejs/src/magics/$nextTick.js
magic("nextTick", () => nextTick);

// packages/alpinejs/src/magics/$dispatch.js
magic("dispatch", (el) => dispatch.bind(dispatch, el));

// packages/alpinejs/src/magics/$watch.js
magic("watch", (el) => (key, callback) => {
  let evaluate2 = evaluateLater(el, key);
  let firstTime = true;
  let oldValue;
  effect(() => evaluate2((value) => {
    let div = document.createElement("div");
    div.dataset.throwAway = value;
    if (!firstTime) {
      queueMicrotask(() => {
        callback(value, oldValue);
        oldValue = value;
      });
    } else {
      oldValue = value;
    }
    firstTime = false;
  }));
});

// packages/alpinejs/src/magics/$store.js
magic("store", getStores);

// packages/alpinejs/src/magics/$data.js
magic("data", (el) => {
  return mergeProxies(closestDataStack(el));
});

// packages/alpinejs/src/magics/$root.js
magic("root", (el) => closestRoot(el));

// packages/alpinejs/src/magics/$refs.js
magic("refs", (el) => {
  if (el._x_refs_proxy)
    return el._x_refs_proxy;
  el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
  return el._x_refs_proxy;
});
function getArrayOfRefObject(el) {
  let refObjects = [];
  let currentEl = el;
  while (currentEl) {
    if (currentEl._x_refs)
      refObjects.push(currentEl._x_refs);
    currentEl = currentEl.parentNode;
  }
  return refObjects;
}

// packages/alpinejs/src/magics/$el.js
magic("el", (el) => el);

// packages/alpinejs/src/directives/x-ignore.js
var handler = () => {
};
handler.inline = (el, {modifiers}, {cleanup}) => {
  modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
  cleanup(() => {
    modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
  });
};
directive("ignore", handler);

// packages/alpinejs/src/directives/x-effect.js
directive("effect", (el, {expression}, {effect: effect3}) => effect3(evaluateLater(el, expression)));

// packages/alpinejs/src/utils/bind.js
function bind(el, name, value, modifiers = []) {
  if (!el._x_bindings)
    el._x_bindings = reactive({});
  el._x_bindings[name] = value;
  name = modifiers.includes("camel") ? camelCase(name) : name;
  switch (name) {
    case "value":
      bindInputValue(el, value);
      break;
    case "style":
      bindStyles(el, value);
      break;
    case "class":
      bindClasses(el, value);
      break;
    default:
      bindAttribute(el, name, value);
      break;
  }
}
function bindInputValue(el, value) {
  if (el.type === "radio") {
    if (el.attributes.value === void 0) {
      el.value = value;
    }
    if (window.fromModel) {
      el.checked = checkedAttrLooseCompare(el.value, value);
    }
  } else if (el.type === "checkbox") {
    if (Number.isInteger(value)) {
      el.value = value;
    } else if (!Number.isInteger(value) && !Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
      el.value = String(value);
    } else {
      if (Array.isArray(value)) {
        el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
      } else {
        el.checked = !!value;
      }
    }
  } else if (el.tagName === "SELECT") {
    updateSelect(el, value);
  } else {
    if (el.value === value)
      return;
    el.value = value;
  }
}
function bindClasses(el, value) {
  if (el._x_undoAddedClasses)
    el._x_undoAddedClasses();
  el._x_undoAddedClasses = setClasses(el, value);
}
function bindStyles(el, value) {
  if (el._x_undoAddedStyles)
    el._x_undoAddedStyles();
  el._x_undoAddedStyles = setStyles(el, value);
}
function bindAttribute(el, name, value) {
  if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
    el.removeAttribute(name);
  } else {
    if (isBooleanAttr(name))
      value = name;
    setIfChanged(el, name, value);
  }
}
function setIfChanged(el, attrName, value) {
  if (el.getAttribute(attrName) != value) {
    el.setAttribute(attrName, value);
  }
}
function updateSelect(el, value) {
  const arrayWrappedValue = [].concat(value).map((value2) => {
    return value2 + "";
  });
  Array.from(el.options).forEach((option) => {
    option.selected = arrayWrappedValue.includes(option.value);
  });
}
function camelCase(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}
function checkedAttrLooseCompare(valueA, valueB) {
  return valueA == valueB;
}
function isBooleanAttr(attrName) {
  const booleanAttributes = [
    "disabled",
    "checked",
    "required",
    "readonly",
    "hidden",
    "open",
    "selected",
    "autofocus",
    "itemscope",
    "multiple",
    "novalidate",
    "allowfullscreen",
    "allowpaymentrequest",
    "formnovalidate",
    "autoplay",
    "controls",
    "loop",
    "muted",
    "playsinline",
    "default",
    "ismap",
    "reversed",
    "async",
    "defer",
    "nomodule"
  ];
  return booleanAttributes.includes(attrName);
}
function attributeShouldntBePreservedIfFalsy(name) {
  return !["aria-pressed", "aria-checked", "aria-expanded"].includes(name);
}

// packages/alpinejs/src/utils/on.js
function on(el, event, modifiers, callback) {
  let listenerTarget = el;
  let handler3 = (e) => callback(e);
  let options = {};
  let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
  if (modifiers.includes("dot"))
    event = dotSyntax(event);
  if (modifiers.includes("camel"))
    event = camelCase2(event);
  if (modifiers.includes("passive"))
    options.passive = true;
  if (modifiers.includes("capture"))
    options.capture = true;
  if (modifiers.includes("window"))
    listenerTarget = window;
  if (modifiers.includes("document"))
    listenerTarget = document;
  if (modifiers.includes("prevent"))
    handler3 = wrapHandler(handler3, (next, e) => {
      e.preventDefault();
      next(e);
    });
  if (modifiers.includes("stop"))
    handler3 = wrapHandler(handler3, (next, e) => {
      e.stopPropagation();
      next(e);
    });
  if (modifiers.includes("self"))
    handler3 = wrapHandler(handler3, (next, e) => {
      e.target === el && next(e);
    });
  if (modifiers.includes("away") || modifiers.includes("outside")) {
    listenerTarget = document;
    handler3 = wrapHandler(handler3, (next, e) => {
      if (el.contains(e.target))
        return;
      if (el.offsetWidth < 1 && el.offsetHeight < 1)
        return;
      if (el._x_isShown === false)
        return;
      next(e);
    });
  }
  handler3 = wrapHandler(handler3, (next, e) => {
    if (isKeyEvent(event)) {
      if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
        return;
      }
    }
    next(e);
  });
  if (modifiers.includes("debounce")) {
    let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler3 = debounce(handler3, wait);
  }
  if (modifiers.includes("throttle")) {
    let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler3 = throttle(handler3, wait);
  }
  if (modifiers.includes("once")) {
    handler3 = wrapHandler(handler3, (next, e) => {
      next(e);
      listenerTarget.removeEventListener(event, handler3, options);
    });
  }
  listenerTarget.addEventListener(event, handler3, options);
  return () => {
    listenerTarget.removeEventListener(event, handler3, options);
  };
}
function dotSyntax(subject) {
  return subject.replace(/-/g, ".");
}
function camelCase2(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}
function isNumeric(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function kebabCase2(subject) {
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function isKeyEvent(event) {
  return ["keydown", "keyup"].includes(event);
}
function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
  let keyModifiers = modifiers.filter((i) => {
    return !["window", "document", "prevent", "stop", "once"].includes(i);
  });
  if (keyModifiers.includes("debounce")) {
    let debounceIndex = keyModifiers.indexOf("debounce");
    keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (keyModifiers.length === 0)
    return false;
  if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0]))
    return false;
  const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
  const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
  keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
  if (selectedSystemKeyModifiers.length > 0) {
    const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
      if (modifier === "cmd" || modifier === "super")
        modifier = "meta";
      return e[`${modifier}Key`];
    });
    if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
      if (keyToModifiers(e.key).includes(keyModifiers[0]))
        return false;
    }
  }
  return true;
}
function keyToModifiers(key) {
  if (!key)
    return [];
  key = kebabCase2(key);
  let modifierToKeyMap = {
    ctrl: "control",
    slash: "/",
    space: "-",
    spacebar: "-",
    cmd: "meta",
    esc: "escape",
    up: "arrow-up",
    down: "arrow-down",
    left: "arrow-left",
    right: "arrow-right",
    period: ".",
    equal: "="
  };
  modifierToKeyMap[key] = key;
  return Object.keys(modifierToKeyMap).map((modifier) => {
    if (modifierToKeyMap[modifier] === key)
      return modifier;
  }).filter((modifier) => modifier);
}

// packages/alpinejs/src/directives/x-model.js
directive("model", (el, {modifiers, expression}, {effect: effect3, cleanup}) => {
  let evaluate2 = evaluateLater(el, expression);
  let assignmentExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
  let evaluateAssignment = evaluateLater(el, assignmentExpression);
  var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
  let assigmentFunction = generateAssignmentFunction(el, modifiers, expression);
  let removeListener = on(el, event, modifiers, (e) => {
    evaluateAssignment(() => {
    }, {scope: {
      $event: e,
      rightSideOfExpression: assigmentFunction
    }});
  });
  cleanup(() => removeListener());
  let evaluateSetModel = evaluateLater(el, `${expression} = __placeholder`);
  el._x_model = {
    get() {
      let result;
      evaluate2((value) => result = value);
      return result;
    },
    set(value) {
      evaluateSetModel(() => {
      }, {scope: {__placeholder: value}});
    }
  };
  el._x_forceModelUpdate = () => {
    evaluate2((value) => {
      if (value === void 0 && expression.match(/\./))
        value = "";
      window.fromModel = true;
      mutateDom(() => bind(el, "value", value));
      delete window.fromModel;
    });
  };
  effect3(() => {
    if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
      return;
    el._x_forceModelUpdate();
  });
});
function generateAssignmentFunction(el, modifiers, expression) {
  if (el.type === "radio") {
    mutateDom(() => {
      if (!el.hasAttribute("name"))
        el.setAttribute("name", expression);
    });
  }
  return (event, currentValue) => {
    return mutateDom(() => {
      if (event instanceof CustomEvent && event.detail !== void 0) {
        return event.detail || event.target.value;
      } else if (el.type === "checkbox") {
        if (Array.isArray(currentValue)) {
          let newValue = modifiers.includes("number") ? safeParseNumber(event.target.value) : event.target.value;
          return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
        return modifiers.includes("number") ? Array.from(event.target.selectedOptions).map((option) => {
          let rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        }) : Array.from(event.target.selectedOptions).map((option) => {
          return option.value || option.text;
        });
      } else {
        let rawValue = event.target.value;
        return modifiers.includes("number") ? safeParseNumber(rawValue) : modifiers.includes("trim") ? rawValue.trim() : rawValue;
      }
    });
  };
}
function safeParseNumber(rawValue) {
  let number = rawValue ? parseFloat(rawValue) : null;
  return isNumeric2(number) ? number : rawValue;
}
function checkedAttrLooseCompare2(valueA, valueB) {
  return valueA == valueB;
}
function isNumeric2(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}

// packages/alpinejs/src/directives/x-cloak.js
directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));

// packages/alpinejs/src/directives/x-init.js
addInitSelector(() => `[${prefix("init")}]`);
directive("init", skipDuringClone((el, {expression}) => {
  if (typeof expression === "string") {
    return !!expression.trim() && evaluate(el, expression, {}, false);
  }
  return evaluate(el, expression, {}, false);
}));

// packages/alpinejs/src/directives/x-text.js
directive("text", (el, {expression}, {effect: effect3, evaluateLater: evaluateLater2}) => {
  let evaluate2 = evaluateLater2(expression);
  effect3(() => {
    evaluate2((value) => {
      mutateDom(() => {
        el.textContent = value;
      });
    });
  });
});

// packages/alpinejs/src/directives/x-html.js
directive("html", (el, {expression}, {effect: effect3, evaluateLater: evaluateLater2}) => {
  let evaluate2 = evaluateLater2(expression);
  effect3(() => {
    evaluate2((value) => {
      el.innerHTML = value;
    });
  });
});

// packages/alpinejs/src/directives/x-bind.js
mapAttributes(startingWith(":", into(prefix("bind:"))));
directive("bind", (el, {value, modifiers, expression, original}, {effect: effect3}) => {
  if (!value)
    return applyBindingsObject(el, expression, original, effect3);
  if (value === "key")
    return storeKeyForXFor(el, expression);
  let evaluate2 = evaluateLater(el, expression);
  effect3(() => evaluate2((result) => {
    if (result === void 0 && expression.match(/\./))
      result = "";
    mutateDom(() => bind(el, value, result, modifiers));
  }));
});
function applyBindingsObject(el, expression, original, effect3) {
  let getBindings = evaluateLater(el, expression);
  let cleanupRunners = [];
  effect3(() => {
    while (cleanupRunners.length)
      cleanupRunners.pop()();
    getBindings((bindings) => {
      let attributes = Object.entries(bindings).map(([name, value]) => ({name, value}));
      attributes = attributes.filter((attr) => {
        return !(typeof attr.value === "object" && !Array.isArray(attr.value) && attr.value !== null);
      });
      let staticAttributes = attributesOnly(attributes);
      attributes = attributes.map((attribute) => {
        if (staticAttributes.find((attr) => attr.name === attribute.name)) {
          return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
          };
        }
        return attribute;
      });
      directives(el, attributes, original).map((handle) => {
        cleanupRunners.push(handle.runCleanups);
        handle();
      });
    });
  });
}
function storeKeyForXFor(el, expression) {
  el._x_keyExpression = expression;
}

// packages/alpinejs/src/directives/x-data.js
addRootSelector(() => `[${prefix("data")}]`);
directive("data", skipDuringClone((el, {expression}, {cleanup}) => {
  expression = expression === "" ? "{}" : expression;
  let magicContext = {};
  injectMagics(magicContext, el);
  let dataProviderContext = {};
  injectDataProviders(dataProviderContext, magicContext);
  let data2 = evaluate(el, expression, {scope: dataProviderContext});
  if (data2 === void 0)
    data2 = {};
  injectMagics(data2, el);
  let reactiveData = reactive(data2);
  initInterceptors(reactiveData);
  let undo = addScopeToNode(el, reactiveData);
  reactiveData["init"] && evaluate(el, reactiveData["init"]);
  cleanup(() => {
    undo();
    reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
  });
}));

// packages/alpinejs/src/directives/x-show.js
directive("show", (el, {modifiers, expression}, {effect: effect3}) => {
  let evaluate2 = evaluateLater(el, expression);
  let hide = () => mutateDom(() => {
    el.style.display = "none";
    el._x_isShown = false;
  });
  let show = () => mutateDom(() => {
    if (el.style.length === 1 && el.style.display === "none") {
      el.removeAttribute("style");
    } else {
      el.style.removeProperty("display");
    }
    el._x_isShown = true;
  });
  let clickAwayCompatibleShow = () => setTimeout(show);
  let toggle = once((value) => value ? show() : hide(), (value) => {
    if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
      el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
    } else {
      value ? clickAwayCompatibleShow() : hide();
    }
  });
  let oldValue;
  let firstTime = true;
  effect3(() => evaluate2((value) => {
    if (!firstTime && value === oldValue)
      return;
    if (modifiers.includes("immediate"))
      value ? clickAwayCompatibleShow() : hide();
    toggle(value);
    oldValue = value;
    firstTime = false;
  }));
});

// packages/alpinejs/src/directives/x-for.js
directive("for", (el, {expression}, {effect: effect3, cleanup}) => {
  let iteratorNames = parseForExpression(expression);
  let evaluateItems = evaluateLater(el, iteratorNames.items);
  let evaluateKey = evaluateLater(el, el._x_keyExpression || "index");
  el._x_prevKeys = [];
  el._x_lookup = {};
  effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
  cleanup(() => {
    Object.values(el._x_lookup).forEach((el2) => el2.remove());
    delete el._x_prevKeys;
    delete el._x_lookup;
  });
});
function loop(el, iteratorNames, evaluateItems, evaluateKey) {
  let isObject = (i) => typeof i === "object" && !Array.isArray(i);
  let templateEl = el;
  evaluateItems((items) => {
    if (isNumeric3(items) && items >= 0) {
      items = Array.from(Array(items).keys(), (i) => i + 1);
    }
    if (items === void 0)
      items = [];
    let lookup = el._x_lookup;
    let prevKeys = el._x_prevKeys;
    let scopes = [];
    let keys = [];
    if (isObject(items)) {
      items = Object.entries(items).map(([key, value]) => {
        let scope = getIterationScopeVariables(iteratorNames, value, key, items);
        evaluateKey((value2) => keys.push(value2), {scope: {index: key, ...scope}});
        scopes.push(scope);
      });
    } else {
      for (let i = 0; i < items.length; i++) {
        let scope = getIterationScopeVariables(iteratorNames, items[i], i, items);
        evaluateKey((value) => keys.push(value), {scope: {index: i, ...scope}});
        scopes.push(scope);
      }
    }
    let adds = [];
    let moves = [];
    let removes = [];
    let sames = [];
    for (let i = 0; i < prevKeys.length; i++) {
      let key = prevKeys[i];
      if (keys.indexOf(key) === -1)
        removes.push(key);
    }
    prevKeys = prevKeys.filter((key) => !removes.includes(key));
    let lastKey = "template";
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let prevIndex = prevKeys.indexOf(key);
      if (prevIndex === -1) {
        prevKeys.splice(i, 0, key);
        adds.push([lastKey, i]);
      } else if (prevIndex !== i) {
        let keyInSpot = prevKeys.splice(i, 1)[0];
        let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
        prevKeys.splice(i, 0, keyForSpot);
        prevKeys.splice(prevIndex, 0, keyInSpot);
        moves.push([keyInSpot, keyForSpot]);
      } else {
        sames.push(key);
      }
      lastKey = key;
    }
    for (let i = 0; i < removes.length; i++) {
      let key = removes[i];
      lookup[key].remove();
      lookup[key] = null;
      delete lookup[key];
    }
    for (let i = 0; i < moves.length; i++) {
      let [keyInSpot, keyForSpot] = moves[i];
      let elInSpot = lookup[keyInSpot];
      let elForSpot = lookup[keyForSpot];
      let marker = document.createElement("div");
      mutateDom(() => {
        elForSpot.after(marker);
        elInSpot.after(elForSpot);
        marker.before(elInSpot);
        marker.remove();
      });
      refreshScope(elForSpot, scopes[keys.indexOf(keyForSpot)]);
    }
    for (let i = 0; i < adds.length; i++) {
      let [lastKey2, index] = adds[i];
      let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
      let scope = scopes[index];
      let key = keys[index];
      let clone2 = document.importNode(templateEl.content, true).firstElementChild;
      addScopeToNode(clone2, reactive(scope), templateEl);
      mutateDom(() => {
        lastEl.after(clone2);
        initTree(clone2);
      });
      if (typeof key === "object") {
        warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
      }
      lookup[key] = clone2;
    }
    for (let i = 0; i < sames.length; i++) {
      refreshScope(lookup[sames[i]], scopes[keys.indexOf(sames[i])]);
    }
    templateEl._x_prevKeys = keys;
  });
}
function parseForExpression(expression) {
  let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  let stripParensRE = /^\s*\(|\)\s*$/g;
  let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  let inMatch = expression.match(forAliasRE);
  if (!inMatch)
    return;
  let res = {};
  res.items = inMatch[2].trim();
  let item = inMatch[1].replace(stripParensRE, "").trim();
  let iteratorMatch = item.match(forIteratorRE);
  if (iteratorMatch) {
    res.item = item.replace(forIteratorRE, "").trim();
    res.index = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.collection = iteratorMatch[2].trim();
    }
  } else {
    res.item = item;
  }
  return res;
}
function getIterationScopeVariables(iteratorNames, item, index, items) {
  let scopeVariables = {};
  if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
    let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
    names.forEach((name, i) => {
      scopeVariables[name] = item[i];
    });
  } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
    let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i) => i.trim());
    names.forEach((name) => {
      scopeVariables[name] = item[name];
    });
  } else {
    scopeVariables[iteratorNames.item] = item;
  }
  if (iteratorNames.index)
    scopeVariables[iteratorNames.index] = index;
  if (iteratorNames.collection)
    scopeVariables[iteratorNames.collection] = items;
  return scopeVariables;
}
function isNumeric3(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}

// packages/alpinejs/src/directives/x-ref.js
function handler2() {
}
handler2.inline = (el, {expression}, {cleanup}) => {
  let root = closestRoot(el);
  if (!root._x_refs)
    root._x_refs = {};
  root._x_refs[expression] = el;
  cleanup(() => delete root._x_refs[expression]);
};
directive("ref", handler2);

// packages/alpinejs/src/directives/x-if.js
directive("if", (el, {expression}, {effect: effect3, cleanup}) => {
  let evaluate2 = evaluateLater(el, expression);
  let show = () => {
    if (el._x_currentIfEl)
      return el._x_currentIfEl;
    let clone2 = el.content.cloneNode(true).firstElementChild;
    addScopeToNode(clone2, {}, el);
    mutateDom(() => {
      el.after(clone2);
      initTree(clone2);
    });
    el._x_currentIfEl = clone2;
    el._x_undoIf = () => {
      clone2.remove();
      delete el._x_currentIfEl;
    };
    return clone2;
  };
  let hide = () => {
    if (!el._x_undoIf)
      return;
    el._x_undoIf();
    delete el._x_undoIf;
  };
  effect3(() => evaluate2((value) => {
    value ? show() : hide();
  }));
  cleanup(() => el._x_undoIf && el._x_undoIf());
});

// packages/alpinejs/src/directives/x-on.js
mapAttributes(startingWith("@", into(prefix("on:"))));
directive("on", skipDuringClone((el, {value, modifiers, expression}, {cleanup}) => {
  let evaluate2 = expression ? evaluateLater(el, expression) : () => {
  };
  let removeListener = on(el, value, modifiers, (e) => {
    evaluate2(() => {
    }, {scope: {$event: e}, params: [e]});
  });
  cleanup(() => removeListener());
}));

// packages/alpinejs/src/index.js
alpine_default.setEvaluator(normalEvaluator);
alpine_default.setReactivityEngine({reactive: import_reactivity9.reactive, effect: import_reactivity9.effect, release: import_reactivity9.stop, raw: import_reactivity9.toRaw});
var src_default = alpine_default;

// packages/alpinejs/builds/module.js
var module_default = src_default;



/***/ }),

/***/ "./node_modules/aos/dist/aos.js":
/*!**************************************!*\
  !*** ./node_modules/aos/dist/aos.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():0}(this,function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{},t="Expected a function",n=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,l=u||d||Function("return this")(),f=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return l.Date.now()};function v(e,n,o){var i,a,r,c,s,u,d=0,l=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError(t);function y(t){var n=i,o=a;return i=a=void 0,d=t,c=e.apply(o,n)}function h(e){var t=e-u;return void 0===u||t>=n||t<0||f&&e-d>=r}function k(){var e=b();if(h(e))return x(e);s=setTimeout(k,function(e){var t=n-(e-u);return f?p(t,r-(e-d)):t}(e))}function x(e){return s=void 0,v&&i?y(e):(i=a=void 0,c)}function O(){var e=b(),t=h(e);if(i=arguments,a=this,u=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(k,n),l?y(e):c}(u);if(f)return s=setTimeout(k,n),y(u)}return void 0===s&&(s=setTimeout(k,n)),c}return n=w(n)||0,g(o)&&(l=!!o.leading,r=(f="maxWait"in o)?m(w(o.maxWait)||0,n):r,v="trailing"in o?!!o.trailing:v),O.cancel=function(){void 0!==s&&clearTimeout(s),d=0,i=u=a=s=void 0},O.flush=function(){return void 0===s?c:x(b())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==o}(e))return n;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var u=r.test(e);return u||c.test(e)?s(e.slice(2),u?2:8):a.test(e)?n:+e}var y=function(e,n,o){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(t);return g(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),v(e,n,{leading:i,maxWait:n,trailing:a})},h="Expected a function",k=NaN,x="[object Symbol]",O=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,N=/^0o[0-7]+$/i,z=parseInt,C="object"==typeof e&&e&&e.Object===Object&&e,A="object"==typeof self&&self&&self.Object===Object&&self,q=C||A||Function("return this")(),L=Object.prototype.toString,T=Math.max,M=Math.min,S=function(){return q.Date.now()};function D(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function H(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&L.call(e)==x}(e))return k;if(D(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=D(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(O,"");var n=E.test(e);return n||N.test(e)?z(e.slice(2),n?2:8):j.test(e)?k:+e}var $=function(e,t,n){var o,i,a,r,c,s,u=0,d=!1,l=!1,f=!0;if("function"!=typeof e)throw new TypeError(h);function m(t){var n=o,a=i;return o=i=void 0,u=t,r=e.apply(a,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||l&&e-u>=a}function b(){var e=S();if(p(e))return v(e);c=setTimeout(b,function(e){var n=t-(e-s);return l?M(n,a-(e-u)):n}(e))}function v(e){return c=void 0,f&&o?m(e):(o=i=void 0,r)}function g(){var e=S(),n=p(e);if(o=arguments,i=this,s=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(b,t),d?m(e):r}(s);if(l)return c=setTimeout(b,t),m(s)}return void 0===c&&(c=setTimeout(b,t)),r}return t=H(t)||0,D(n)&&(d=!!n.leading,a=(l="maxWait"in n)?T(H(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=s=i=c=void 0},g.flush=function(){return void 0===c?r:v(S())},g},W=function(){};function P(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1){if((o=t[n]).dataset&&o.dataset.aos)return!0;if(o.children&&e(o.children))return!0}return!1}(t.concat(n)))return W()})}function Y(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var _={isSupported:function(){return!!Y()},ready:function(e,t){var n=window.document,o=new(Y())(P);W=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},K=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,G=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,J=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Q=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function R(){return navigator.userAgent||navigator.vendor||window.opera||""}var U=new(function(){function e(){B(this,e)}return F(e,[{key:"phone",value:function(){var e=R();return!(!K.test(e)&&!G.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=R();return!(!J.test(e)&&!Q.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),V=function(e,t){var n=void 0;return U.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},X=function(e){return e.forEach(function(e,t){return function(e,t){var n=e.options,o=e.position,i=e.node,a=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach(function(t){return e.classList.remove(t)})}(i,n.animatedClassNames),V("aos:out",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!1)});n.mirror&&t>=o.out&&!n.once?a():t>=o.in?e.animated||(function(e,t){t&&t.forEach(function(t){return e.classList.add(t)})}(i,n.animatedClassNames),V("aos:in",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!n.once&&a()}(e,window.pageYOffset)})},Z=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},ee=function(e,t,n){var o=e.getAttribute("data-aos-"+t);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}return o||n},te=function(e,t){return e.forEach(function(e,n){var o=ee(e.node,"mirror",t.mirror),i=ee(e.node,"once",t.once),a=ee(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),c=[t.animatedClassName].concat(r?r.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var o=window.innerHeight,i=ee(e,"anchor"),a=ee(e,"anchor-placement"),r=Number(ee(e,"offset",a?0:t)),c=a||n,s=e;i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]);var u=Z(s).top-o;switch(c){case"top-bottom":break;case"center-bottom":u+=s.offsetHeight/2;break;case"bottom-bottom":u+=s.offsetHeight;break;case"top-center":u+=o/2;break;case"center-center":u+=o/2+s.offsetHeight/2;break;case"bottom-center":u+=o/2+s.offsetHeight;break;case"top-top":u+=o;break;case"bottom-top":u+=o+s.offsetHeight;break;case"center-top":u+=o+s.offsetHeight/2}return u+r}(e.node,t.offset,t.anchorPlacement),out:o&&function(e,t){window.innerHeight;var n=ee(e,"anchor"),o=ee(e,"offset",t),i=e;return n&&document.querySelectorAll(n)&&(i=document.querySelectorAll(n)[0]),Z(i).top+i.offsetHeight-o}(e.node,t.offset)},e.options={once:i,mirror:o,animatedClassNames:c,id:a}}),e},ne=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},oe=[],ie=!1,ae={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},re=function(){return document.all&&!window.atob},ce=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ie=!0),ie&&(oe=te(oe,ae),X(oe),window.addEventListener("scroll",y(function(){X(oe,ae.once)},ae.throttleDelay)))},se=function(){if(oe=ne(),de(ae.disable)||re())return ue();ce()},ue=function(){oe.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),ae.initClassName&&e.node.classList.remove(ae.initClassName),ae.animatedClassName&&e.node.classList.remove(ae.animatedClassName)})},de=function(e){return!0===e||"mobile"===e&&U.mobile()||"phone"===e&&U.phone()||"tablet"===e&&U.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return ae=I(ae,e),oe=ne(),ae.disableMutationObserver||_.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),ae.disableMutationObserver=!0),ae.disableMutationObserver||_.ready("[data-aos]",se),de(ae.disable)||re()?ue():(document.querySelector("body").setAttribute("data-aos-easing",ae.easing),document.querySelector("body").setAttribute("data-aos-duration",ae.duration),document.querySelector("body").setAttribute("data-aos-delay",ae.delay),-1===["DOMContentLoaded","load"].indexOf(ae.startEvent)?document.addEventListener(ae.startEvent,function(){ce(!0)}):window.addEventListener("load",function(){ce(!0)}),"DOMContentLoaded"===ae.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ce(!0),window.addEventListener("resize",$(ce,ae.debounceDelay,!0)),window.addEventListener("orientationchange",$(ce,ae.debounceDelay,!0)),oe)},refresh:ce,refreshHard:se}});


/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_SimpleComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/SimpleComponent */ "./assets/js/components/SimpleComponent.js");
/* harmony import */ var _components_SimpleComponent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_SimpleComponent__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lottiefiles_lottie_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lottiefiles/lottie-player */ "./node_modules/@lottiefiles/lottie-player/dist/lottie-player.esm.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/module.esm.js");
// Ви можете імпортувати модулі з теми lib або навіть з
// NPM packages якщо вони підтримують це ...


// також можете require модулі, якщо вони підтримують це ...
var NullComponent = __webpack_require__(/*! ./components/NullComponent */ "./assets/js/components/NullComponent.js");

// lotties web player


//aos


aos__WEBPACK_IMPORTED_MODULE_2___default().init({
  duration: 1200,
  easing: 'ease-in-out-back'
});

//AlpineJS

window.Alpine = alpinejs__WEBPACK_IMPORTED_MODULE_4__["default"];
alpinejs__WEBPACK_IMPORTED_MODULE_4__["default"].start();

// Ініціалізація наших компонентів d jQuery.ready...
// jQuery(function ($) {
//     SimpleComponent.init();
//     NullComponent.init();
// });

/***/ }),

/***/ "./assets/js/components/NullComponent.js":
/*!***********************************************!*\
  !*** ./assets/js/components/NullComponent.js ***!
  \***********************************************/
/***/ ((module) => {

module.exports = {
  init: function init() {
    // робити щось тут
    //alert('Супер! Код працює....');
  }
};

/***/ }),

/***/ "./assets/js/components/SimpleComponent.js":
/*!*************************************************!*\
  !*** ./assets/js/components/SimpleComponent.js ***!
  \*************************************************/
/***/ (() => {

// const $ = window.jQuery;
// const $window = window.$window || $(window);

// const SimpleComponent = {

//     init() {
//         var $module = $('.SimpleComponent');
//         if (!$module.length)
//             return;

//         $module.each((index, element) => {
//             this.each(element);
//         });
//     },

//     each(element) {

//         let $item = $(element);

// робити щось тут
//alert('Супер! Код працює....');

// }

// };

// export default SimpleComponent;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/aos/dist/aos.css":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/aos/dist/aos.css ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "[data-aos][data-aos][data-aos-duration=\"50\"],body[data-aos-duration=\"50\"] [data-aos]{transition-duration:50ms}[data-aos][data-aos][data-aos-delay=\"50\"],body[data-aos-delay=\"50\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"50\"].aos-animate,body[data-aos-delay=\"50\"] [data-aos].aos-animate{transition-delay:50ms}[data-aos][data-aos][data-aos-duration=\"100\"],body[data-aos-duration=\"100\"] [data-aos]{transition-duration:.1s}[data-aos][data-aos][data-aos-delay=\"100\"],body[data-aos-delay=\"100\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"100\"].aos-animate,body[data-aos-delay=\"100\"] [data-aos].aos-animate{transition-delay:.1s}[data-aos][data-aos][data-aos-duration=\"150\"],body[data-aos-duration=\"150\"] [data-aos]{transition-duration:.15s}[data-aos][data-aos][data-aos-delay=\"150\"],body[data-aos-delay=\"150\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"150\"].aos-animate,body[data-aos-delay=\"150\"] [data-aos].aos-animate{transition-delay:.15s}[data-aos][data-aos][data-aos-duration=\"200\"],body[data-aos-duration=\"200\"] [data-aos]{transition-duration:.2s}[data-aos][data-aos][data-aos-delay=\"200\"],body[data-aos-delay=\"200\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"200\"].aos-animate,body[data-aos-delay=\"200\"] [data-aos].aos-animate{transition-delay:.2s}[data-aos][data-aos][data-aos-duration=\"250\"],body[data-aos-duration=\"250\"] [data-aos]{transition-duration:.25s}[data-aos][data-aos][data-aos-delay=\"250\"],body[data-aos-delay=\"250\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"250\"].aos-animate,body[data-aos-delay=\"250\"] [data-aos].aos-animate{transition-delay:.25s}[data-aos][data-aos][data-aos-duration=\"300\"],body[data-aos-duration=\"300\"] [data-aos]{transition-duration:.3s}[data-aos][data-aos][data-aos-delay=\"300\"],body[data-aos-delay=\"300\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"300\"].aos-animate,body[data-aos-delay=\"300\"] [data-aos].aos-animate{transition-delay:.3s}[data-aos][data-aos][data-aos-duration=\"350\"],body[data-aos-duration=\"350\"] [data-aos]{transition-duration:.35s}[data-aos][data-aos][data-aos-delay=\"350\"],body[data-aos-delay=\"350\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"350\"].aos-animate,body[data-aos-delay=\"350\"] [data-aos].aos-animate{transition-delay:.35s}[data-aos][data-aos][data-aos-duration=\"400\"],body[data-aos-duration=\"400\"] [data-aos]{transition-duration:.4s}[data-aos][data-aos][data-aos-delay=\"400\"],body[data-aos-delay=\"400\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"400\"].aos-animate,body[data-aos-delay=\"400\"] [data-aos].aos-animate{transition-delay:.4s}[data-aos][data-aos][data-aos-duration=\"450\"],body[data-aos-duration=\"450\"] [data-aos]{transition-duration:.45s}[data-aos][data-aos][data-aos-delay=\"450\"],body[data-aos-delay=\"450\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"450\"].aos-animate,body[data-aos-delay=\"450\"] [data-aos].aos-animate{transition-delay:.45s}[data-aos][data-aos][data-aos-duration=\"500\"],body[data-aos-duration=\"500\"] [data-aos]{transition-duration:.5s}[data-aos][data-aos][data-aos-delay=\"500\"],body[data-aos-delay=\"500\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"500\"].aos-animate,body[data-aos-delay=\"500\"] [data-aos].aos-animate{transition-delay:.5s}[data-aos][data-aos][data-aos-duration=\"550\"],body[data-aos-duration=\"550\"] [data-aos]{transition-duration:.55s}[data-aos][data-aos][data-aos-delay=\"550\"],body[data-aos-delay=\"550\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"550\"].aos-animate,body[data-aos-delay=\"550\"] [data-aos].aos-animate{transition-delay:.55s}[data-aos][data-aos][data-aos-duration=\"600\"],body[data-aos-duration=\"600\"] [data-aos]{transition-duration:.6s}[data-aos][data-aos][data-aos-delay=\"600\"],body[data-aos-delay=\"600\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"600\"].aos-animate,body[data-aos-delay=\"600\"] [data-aos].aos-animate{transition-delay:.6s}[data-aos][data-aos][data-aos-duration=\"650\"],body[data-aos-duration=\"650\"] [data-aos]{transition-duration:.65s}[data-aos][data-aos][data-aos-delay=\"650\"],body[data-aos-delay=\"650\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"650\"].aos-animate,body[data-aos-delay=\"650\"] [data-aos].aos-animate{transition-delay:.65s}[data-aos][data-aos][data-aos-duration=\"700\"],body[data-aos-duration=\"700\"] [data-aos]{transition-duration:.7s}[data-aos][data-aos][data-aos-delay=\"700\"],body[data-aos-delay=\"700\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"700\"].aos-animate,body[data-aos-delay=\"700\"] [data-aos].aos-animate{transition-delay:.7s}[data-aos][data-aos][data-aos-duration=\"750\"],body[data-aos-duration=\"750\"] [data-aos]{transition-duration:.75s}[data-aos][data-aos][data-aos-delay=\"750\"],body[data-aos-delay=\"750\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"750\"].aos-animate,body[data-aos-delay=\"750\"] [data-aos].aos-animate{transition-delay:.75s}[data-aos][data-aos][data-aos-duration=\"800\"],body[data-aos-duration=\"800\"] [data-aos]{transition-duration:.8s}[data-aos][data-aos][data-aos-delay=\"800\"],body[data-aos-delay=\"800\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"800\"].aos-animate,body[data-aos-delay=\"800\"] [data-aos].aos-animate{transition-delay:.8s}[data-aos][data-aos][data-aos-duration=\"850\"],body[data-aos-duration=\"850\"] [data-aos]{transition-duration:.85s}[data-aos][data-aos][data-aos-delay=\"850\"],body[data-aos-delay=\"850\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"850\"].aos-animate,body[data-aos-delay=\"850\"] [data-aos].aos-animate{transition-delay:.85s}[data-aos][data-aos][data-aos-duration=\"900\"],body[data-aos-duration=\"900\"] [data-aos]{transition-duration:.9s}[data-aos][data-aos][data-aos-delay=\"900\"],body[data-aos-delay=\"900\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"900\"].aos-animate,body[data-aos-delay=\"900\"] [data-aos].aos-animate{transition-delay:.9s}[data-aos][data-aos][data-aos-duration=\"950\"],body[data-aos-duration=\"950\"] [data-aos]{transition-duration:.95s}[data-aos][data-aos][data-aos-delay=\"950\"],body[data-aos-delay=\"950\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"950\"].aos-animate,body[data-aos-delay=\"950\"] [data-aos].aos-animate{transition-delay:.95s}[data-aos][data-aos][data-aos-duration=\"1000\"],body[data-aos-duration=\"1000\"] [data-aos]{transition-duration:1s}[data-aos][data-aos][data-aos-delay=\"1000\"],body[data-aos-delay=\"1000\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1000\"].aos-animate,body[data-aos-delay=\"1000\"] [data-aos].aos-animate{transition-delay:1s}[data-aos][data-aos][data-aos-duration=\"1050\"],body[data-aos-duration=\"1050\"] [data-aos]{transition-duration:1.05s}[data-aos][data-aos][data-aos-delay=\"1050\"],body[data-aos-delay=\"1050\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1050\"].aos-animate,body[data-aos-delay=\"1050\"] [data-aos].aos-animate{transition-delay:1.05s}[data-aos][data-aos][data-aos-duration=\"1100\"],body[data-aos-duration=\"1100\"] [data-aos]{transition-duration:1.1s}[data-aos][data-aos][data-aos-delay=\"1100\"],body[data-aos-delay=\"1100\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1100\"].aos-animate,body[data-aos-delay=\"1100\"] [data-aos].aos-animate{transition-delay:1.1s}[data-aos][data-aos][data-aos-duration=\"1150\"],body[data-aos-duration=\"1150\"] [data-aos]{transition-duration:1.15s}[data-aos][data-aos][data-aos-delay=\"1150\"],body[data-aos-delay=\"1150\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1150\"].aos-animate,body[data-aos-delay=\"1150\"] [data-aos].aos-animate{transition-delay:1.15s}[data-aos][data-aos][data-aos-duration=\"1200\"],body[data-aos-duration=\"1200\"] [data-aos]{transition-duration:1.2s}[data-aos][data-aos][data-aos-delay=\"1200\"],body[data-aos-delay=\"1200\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1200\"].aos-animate,body[data-aos-delay=\"1200\"] [data-aos].aos-animate{transition-delay:1.2s}[data-aos][data-aos][data-aos-duration=\"1250\"],body[data-aos-duration=\"1250\"] [data-aos]{transition-duration:1.25s}[data-aos][data-aos][data-aos-delay=\"1250\"],body[data-aos-delay=\"1250\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1250\"].aos-animate,body[data-aos-delay=\"1250\"] [data-aos].aos-animate{transition-delay:1.25s}[data-aos][data-aos][data-aos-duration=\"1300\"],body[data-aos-duration=\"1300\"] [data-aos]{transition-duration:1.3s}[data-aos][data-aos][data-aos-delay=\"1300\"],body[data-aos-delay=\"1300\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1300\"].aos-animate,body[data-aos-delay=\"1300\"] [data-aos].aos-animate{transition-delay:1.3s}[data-aos][data-aos][data-aos-duration=\"1350\"],body[data-aos-duration=\"1350\"] [data-aos]{transition-duration:1.35s}[data-aos][data-aos][data-aos-delay=\"1350\"],body[data-aos-delay=\"1350\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1350\"].aos-animate,body[data-aos-delay=\"1350\"] [data-aos].aos-animate{transition-delay:1.35s}[data-aos][data-aos][data-aos-duration=\"1400\"],body[data-aos-duration=\"1400\"] [data-aos]{transition-duration:1.4s}[data-aos][data-aos][data-aos-delay=\"1400\"],body[data-aos-delay=\"1400\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1400\"].aos-animate,body[data-aos-delay=\"1400\"] [data-aos].aos-animate{transition-delay:1.4s}[data-aos][data-aos][data-aos-duration=\"1450\"],body[data-aos-duration=\"1450\"] [data-aos]{transition-duration:1.45s}[data-aos][data-aos][data-aos-delay=\"1450\"],body[data-aos-delay=\"1450\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1450\"].aos-animate,body[data-aos-delay=\"1450\"] [data-aos].aos-animate{transition-delay:1.45s}[data-aos][data-aos][data-aos-duration=\"1500\"],body[data-aos-duration=\"1500\"] [data-aos]{transition-duration:1.5s}[data-aos][data-aos][data-aos-delay=\"1500\"],body[data-aos-delay=\"1500\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1500\"].aos-animate,body[data-aos-delay=\"1500\"] [data-aos].aos-animate{transition-delay:1.5s}[data-aos][data-aos][data-aos-duration=\"1550\"],body[data-aos-duration=\"1550\"] [data-aos]{transition-duration:1.55s}[data-aos][data-aos][data-aos-delay=\"1550\"],body[data-aos-delay=\"1550\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1550\"].aos-animate,body[data-aos-delay=\"1550\"] [data-aos].aos-animate{transition-delay:1.55s}[data-aos][data-aos][data-aos-duration=\"1600\"],body[data-aos-duration=\"1600\"] [data-aos]{transition-duration:1.6s}[data-aos][data-aos][data-aos-delay=\"1600\"],body[data-aos-delay=\"1600\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1600\"].aos-animate,body[data-aos-delay=\"1600\"] [data-aos].aos-animate{transition-delay:1.6s}[data-aos][data-aos][data-aos-duration=\"1650\"],body[data-aos-duration=\"1650\"] [data-aos]{transition-duration:1.65s}[data-aos][data-aos][data-aos-delay=\"1650\"],body[data-aos-delay=\"1650\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1650\"].aos-animate,body[data-aos-delay=\"1650\"] [data-aos].aos-animate{transition-delay:1.65s}[data-aos][data-aos][data-aos-duration=\"1700\"],body[data-aos-duration=\"1700\"] [data-aos]{transition-duration:1.7s}[data-aos][data-aos][data-aos-delay=\"1700\"],body[data-aos-delay=\"1700\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1700\"].aos-animate,body[data-aos-delay=\"1700\"] [data-aos].aos-animate{transition-delay:1.7s}[data-aos][data-aos][data-aos-duration=\"1750\"],body[data-aos-duration=\"1750\"] [data-aos]{transition-duration:1.75s}[data-aos][data-aos][data-aos-delay=\"1750\"],body[data-aos-delay=\"1750\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1750\"].aos-animate,body[data-aos-delay=\"1750\"] [data-aos].aos-animate{transition-delay:1.75s}[data-aos][data-aos][data-aos-duration=\"1800\"],body[data-aos-duration=\"1800\"] [data-aos]{transition-duration:1.8s}[data-aos][data-aos][data-aos-delay=\"1800\"],body[data-aos-delay=\"1800\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1800\"].aos-animate,body[data-aos-delay=\"1800\"] [data-aos].aos-animate{transition-delay:1.8s}[data-aos][data-aos][data-aos-duration=\"1850\"],body[data-aos-duration=\"1850\"] [data-aos]{transition-duration:1.85s}[data-aos][data-aos][data-aos-delay=\"1850\"],body[data-aos-delay=\"1850\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1850\"].aos-animate,body[data-aos-delay=\"1850\"] [data-aos].aos-animate{transition-delay:1.85s}[data-aos][data-aos][data-aos-duration=\"1900\"],body[data-aos-duration=\"1900\"] [data-aos]{transition-duration:1.9s}[data-aos][data-aos][data-aos-delay=\"1900\"],body[data-aos-delay=\"1900\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1900\"].aos-animate,body[data-aos-delay=\"1900\"] [data-aos].aos-animate{transition-delay:1.9s}[data-aos][data-aos][data-aos-duration=\"1950\"],body[data-aos-duration=\"1950\"] [data-aos]{transition-duration:1.95s}[data-aos][data-aos][data-aos-delay=\"1950\"],body[data-aos-delay=\"1950\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1950\"].aos-animate,body[data-aos-delay=\"1950\"] [data-aos].aos-animate{transition-delay:1.95s}[data-aos][data-aos][data-aos-duration=\"2000\"],body[data-aos-duration=\"2000\"] [data-aos]{transition-duration:2s}[data-aos][data-aos][data-aos-delay=\"2000\"],body[data-aos-delay=\"2000\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2000\"].aos-animate,body[data-aos-delay=\"2000\"] [data-aos].aos-animate{transition-delay:2s}[data-aos][data-aos][data-aos-duration=\"2050\"],body[data-aos-duration=\"2050\"] [data-aos]{transition-duration:2.05s}[data-aos][data-aos][data-aos-delay=\"2050\"],body[data-aos-delay=\"2050\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2050\"].aos-animate,body[data-aos-delay=\"2050\"] [data-aos].aos-animate{transition-delay:2.05s}[data-aos][data-aos][data-aos-duration=\"2100\"],body[data-aos-duration=\"2100\"] [data-aos]{transition-duration:2.1s}[data-aos][data-aos][data-aos-delay=\"2100\"],body[data-aos-delay=\"2100\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2100\"].aos-animate,body[data-aos-delay=\"2100\"] [data-aos].aos-animate{transition-delay:2.1s}[data-aos][data-aos][data-aos-duration=\"2150\"],body[data-aos-duration=\"2150\"] [data-aos]{transition-duration:2.15s}[data-aos][data-aos][data-aos-delay=\"2150\"],body[data-aos-delay=\"2150\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2150\"].aos-animate,body[data-aos-delay=\"2150\"] [data-aos].aos-animate{transition-delay:2.15s}[data-aos][data-aos][data-aos-duration=\"2200\"],body[data-aos-duration=\"2200\"] [data-aos]{transition-duration:2.2s}[data-aos][data-aos][data-aos-delay=\"2200\"],body[data-aos-delay=\"2200\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2200\"].aos-animate,body[data-aos-delay=\"2200\"] [data-aos].aos-animate{transition-delay:2.2s}[data-aos][data-aos][data-aos-duration=\"2250\"],body[data-aos-duration=\"2250\"] [data-aos]{transition-duration:2.25s}[data-aos][data-aos][data-aos-delay=\"2250\"],body[data-aos-delay=\"2250\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2250\"].aos-animate,body[data-aos-delay=\"2250\"] [data-aos].aos-animate{transition-delay:2.25s}[data-aos][data-aos][data-aos-duration=\"2300\"],body[data-aos-duration=\"2300\"] [data-aos]{transition-duration:2.3s}[data-aos][data-aos][data-aos-delay=\"2300\"],body[data-aos-delay=\"2300\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2300\"].aos-animate,body[data-aos-delay=\"2300\"] [data-aos].aos-animate{transition-delay:2.3s}[data-aos][data-aos][data-aos-duration=\"2350\"],body[data-aos-duration=\"2350\"] [data-aos]{transition-duration:2.35s}[data-aos][data-aos][data-aos-delay=\"2350\"],body[data-aos-delay=\"2350\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2350\"].aos-animate,body[data-aos-delay=\"2350\"] [data-aos].aos-animate{transition-delay:2.35s}[data-aos][data-aos][data-aos-duration=\"2400\"],body[data-aos-duration=\"2400\"] [data-aos]{transition-duration:2.4s}[data-aos][data-aos][data-aos-delay=\"2400\"],body[data-aos-delay=\"2400\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2400\"].aos-animate,body[data-aos-delay=\"2400\"] [data-aos].aos-animate{transition-delay:2.4s}[data-aos][data-aos][data-aos-duration=\"2450\"],body[data-aos-duration=\"2450\"] [data-aos]{transition-duration:2.45s}[data-aos][data-aos][data-aos-delay=\"2450\"],body[data-aos-delay=\"2450\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2450\"].aos-animate,body[data-aos-delay=\"2450\"] [data-aos].aos-animate{transition-delay:2.45s}[data-aos][data-aos][data-aos-duration=\"2500\"],body[data-aos-duration=\"2500\"] [data-aos]{transition-duration:2.5s}[data-aos][data-aos][data-aos-delay=\"2500\"],body[data-aos-delay=\"2500\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2500\"].aos-animate,body[data-aos-delay=\"2500\"] [data-aos].aos-animate{transition-delay:2.5s}[data-aos][data-aos][data-aos-duration=\"2550\"],body[data-aos-duration=\"2550\"] [data-aos]{transition-duration:2.55s}[data-aos][data-aos][data-aos-delay=\"2550\"],body[data-aos-delay=\"2550\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2550\"].aos-animate,body[data-aos-delay=\"2550\"] [data-aos].aos-animate{transition-delay:2.55s}[data-aos][data-aos][data-aos-duration=\"2600\"],body[data-aos-duration=\"2600\"] [data-aos]{transition-duration:2.6s}[data-aos][data-aos][data-aos-delay=\"2600\"],body[data-aos-delay=\"2600\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2600\"].aos-animate,body[data-aos-delay=\"2600\"] [data-aos].aos-animate{transition-delay:2.6s}[data-aos][data-aos][data-aos-duration=\"2650\"],body[data-aos-duration=\"2650\"] [data-aos]{transition-duration:2.65s}[data-aos][data-aos][data-aos-delay=\"2650\"],body[data-aos-delay=\"2650\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2650\"].aos-animate,body[data-aos-delay=\"2650\"] [data-aos].aos-animate{transition-delay:2.65s}[data-aos][data-aos][data-aos-duration=\"2700\"],body[data-aos-duration=\"2700\"] [data-aos]{transition-duration:2.7s}[data-aos][data-aos][data-aos-delay=\"2700\"],body[data-aos-delay=\"2700\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2700\"].aos-animate,body[data-aos-delay=\"2700\"] [data-aos].aos-animate{transition-delay:2.7s}[data-aos][data-aos][data-aos-duration=\"2750\"],body[data-aos-duration=\"2750\"] [data-aos]{transition-duration:2.75s}[data-aos][data-aos][data-aos-delay=\"2750\"],body[data-aos-delay=\"2750\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2750\"].aos-animate,body[data-aos-delay=\"2750\"] [data-aos].aos-animate{transition-delay:2.75s}[data-aos][data-aos][data-aos-duration=\"2800\"],body[data-aos-duration=\"2800\"] [data-aos]{transition-duration:2.8s}[data-aos][data-aos][data-aos-delay=\"2800\"],body[data-aos-delay=\"2800\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2800\"].aos-animate,body[data-aos-delay=\"2800\"] [data-aos].aos-animate{transition-delay:2.8s}[data-aos][data-aos][data-aos-duration=\"2850\"],body[data-aos-duration=\"2850\"] [data-aos]{transition-duration:2.85s}[data-aos][data-aos][data-aos-delay=\"2850\"],body[data-aos-delay=\"2850\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2850\"].aos-animate,body[data-aos-delay=\"2850\"] [data-aos].aos-animate{transition-delay:2.85s}[data-aos][data-aos][data-aos-duration=\"2900\"],body[data-aos-duration=\"2900\"] [data-aos]{transition-duration:2.9s}[data-aos][data-aos][data-aos-delay=\"2900\"],body[data-aos-delay=\"2900\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2900\"].aos-animate,body[data-aos-delay=\"2900\"] [data-aos].aos-animate{transition-delay:2.9s}[data-aos][data-aos][data-aos-duration=\"2950\"],body[data-aos-duration=\"2950\"] [data-aos]{transition-duration:2.95s}[data-aos][data-aos][data-aos-delay=\"2950\"],body[data-aos-delay=\"2950\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2950\"].aos-animate,body[data-aos-delay=\"2950\"] [data-aos].aos-animate{transition-delay:2.95s}[data-aos][data-aos][data-aos-duration=\"3000\"],body[data-aos-duration=\"3000\"] [data-aos]{transition-duration:3s}[data-aos][data-aos][data-aos-delay=\"3000\"],body[data-aos-delay=\"3000\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"3000\"].aos-animate,body[data-aos-delay=\"3000\"] [data-aos].aos-animate{transition-delay:3s}[data-aos]{pointer-events:none}[data-aos].aos-animate{pointer-events:auto}[data-aos][data-aos][data-aos-easing=linear],body[data-aos-easing=linear] [data-aos]{transition-timing-function:cubic-bezier(.25,.25,.75,.75)}[data-aos][data-aos][data-aos-easing=ease],body[data-aos-easing=ease] [data-aos]{transition-timing-function:ease}[data-aos][data-aos][data-aos-easing=ease-in],body[data-aos-easing=ease-in] [data-aos]{transition-timing-function:ease-in}[data-aos][data-aos][data-aos-easing=ease-out],body[data-aos-easing=ease-out] [data-aos]{transition-timing-function:ease-out}[data-aos][data-aos][data-aos-easing=ease-in-out],body[data-aos-easing=ease-in-out] [data-aos]{transition-timing-function:ease-in-out}[data-aos][data-aos][data-aos-easing=ease-in-back],body[data-aos-easing=ease-in-back] [data-aos]{transition-timing-function:cubic-bezier(.6,-.28,.735,.045)}[data-aos][data-aos][data-aos-easing=ease-out-back],body[data-aos-easing=ease-out-back] [data-aos]{transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}[data-aos][data-aos][data-aos-easing=ease-in-out-back],body[data-aos-easing=ease-in-out-back] [data-aos]{transition-timing-function:cubic-bezier(.68,-.55,.265,1.55)}[data-aos][data-aos][data-aos-easing=ease-in-sine],body[data-aos-easing=ease-in-sine] [data-aos]{transition-timing-function:cubic-bezier(.47,0,.745,.715)}[data-aos][data-aos][data-aos-easing=ease-out-sine],body[data-aos-easing=ease-out-sine] [data-aos]{transition-timing-function:cubic-bezier(.39,.575,.565,1)}[data-aos][data-aos][data-aos-easing=ease-in-out-sine],body[data-aos-easing=ease-in-out-sine] [data-aos]{transition-timing-function:cubic-bezier(.445,.05,.55,.95)}[data-aos][data-aos][data-aos-easing=ease-in-quad],body[data-aos-easing=ease-in-quad] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quad],body[data-aos-easing=ease-out-quad] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quad],body[data-aos-easing=ease-in-out-quad] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-cubic],body[data-aos-easing=ease-in-cubic] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-cubic],body[data-aos-easing=ease-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-cubic],body[data-aos-easing=ease-in-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-quart],body[data-aos-easing=ease-in-quart] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quart],body[data-aos-easing=ease-out-quart] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quart],body[data-aos-easing=ease-in-out-quart] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}@media screen{html:not(.no-js) [data-aos^=fade][data-aos^=fade]{opacity:0;transition-property:opacity,transform}html:not(.no-js) [data-aos^=fade][data-aos^=fade].aos-animate{opacity:1;transform:none}html:not(.no-js) [data-aos=fade-up]{transform:translate3d(0,100px,0)}html:not(.no-js) [data-aos=fade-down]{transform:translate3d(0,-100px,0)}html:not(.no-js) [data-aos=fade-right]{transform:translate3d(-100px,0,0)}html:not(.no-js) [data-aos=fade-left]{transform:translate3d(100px,0,0)}html:not(.no-js) [data-aos=fade-up-right]{transform:translate3d(-100px,100px,0)}html:not(.no-js) [data-aos=fade-up-left]{transform:translate3d(100px,100px,0)}html:not(.no-js) [data-aos=fade-down-right]{transform:translate3d(-100px,-100px,0)}html:not(.no-js) [data-aos=fade-down-left]{transform:translate3d(100px,-100px,0)}html:not(.no-js) [data-aos^=zoom][data-aos^=zoom]{opacity:0;transition-property:opacity,transform}html:not(.no-js) [data-aos^=zoom][data-aos^=zoom].aos-animate{opacity:1;transform:translateZ(0) scale(1)}html:not(.no-js) [data-aos=zoom-in]{transform:scale(.6)}html:not(.no-js) [data-aos=zoom-in-up]{transform:translate3d(0,100px,0) scale(.6)}html:not(.no-js) [data-aos=zoom-in-down]{transform:translate3d(0,-100px,0) scale(.6)}html:not(.no-js) [data-aos=zoom-in-right]{transform:translate3d(-100px,0,0) scale(.6)}html:not(.no-js) [data-aos=zoom-in-left]{transform:translate3d(100px,0,0) scale(.6)}html:not(.no-js) [data-aos=zoom-out]{transform:scale(1.2)}html:not(.no-js) [data-aos=zoom-out-up]{transform:translate3d(0,100px,0) scale(1.2)}html:not(.no-js) [data-aos=zoom-out-down]{transform:translate3d(0,-100px,0) scale(1.2)}html:not(.no-js) [data-aos=zoom-out-right]{transform:translate3d(-100px,0,0) scale(1.2)}html:not(.no-js) [data-aos=zoom-out-left]{transform:translate3d(100px,0,0) scale(1.2)}html:not(.no-js) [data-aos^=slide][data-aos^=slide]{transition-property:transform;visibility:hidden}html:not(.no-js) [data-aos^=slide][data-aos^=slide].aos-animate{visibility:visible;transform:translateZ(0)}html:not(.no-js) [data-aos=slide-up]{transform:translate3d(0,100%,0)}html:not(.no-js) [data-aos=slide-down]{transform:translate3d(0,-100%,0)}html:not(.no-js) [data-aos=slide-right]{transform:translate3d(-100%,0,0)}html:not(.no-js) [data-aos=slide-left]{transform:translate3d(100%,0,0)}html:not(.no-js) [data-aos^=flip][data-aos^=flip]{backface-visibility:hidden;transition-property:transform}html:not(.no-js) [data-aos=flip-left]{transform:perspective(2500px) rotateY(-100deg)}html:not(.no-js) [data-aos=flip-left].aos-animate{transform:perspective(2500px) rotateY(0)}html:not(.no-js) [data-aos=flip-right]{transform:perspective(2500px) rotateY(100deg)}html:not(.no-js) [data-aos=flip-right].aos-animate{transform:perspective(2500px) rotateY(0)}html:not(.no-js) [data-aos=flip-up]{transform:perspective(2500px) rotateX(-100deg)}html:not(.no-js) [data-aos=flip-up].aos-animate{transform:perspective(2500px) rotateX(0)}html:not(.no-js) [data-aos=flip-down]{transform:perspective(2500px) rotateX(100deg)}html:not(.no-js) [data-aos=flip-down].aos-animate{transform:perspective(2500px) rotateX(0)}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/aos/dist/aos.css":
/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_aos_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./aos.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/aos/dist/aos.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_aos_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_aos_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwp_for_steroids"] = self["webpackChunkwp_for_steroids"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
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
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./assets/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./assets/scss/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;