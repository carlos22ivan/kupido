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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/build/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap-material-design/js/bootstrapMaterialDesign.js":
/*!******************************************************************************!*\
  !*** ./node_modules/bootstrap-material-design/js/bootstrapMaterialDesign.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* globals Popper */\nPopper.Defaults.modifiers.computeStyle.gpuAcceleration = false\n\n/**\n * $.bootstrapMaterialDesign(config) is a macro class to configure the components generally\n *  used in Material Design for Bootstrap.  You may pass overrides to the configurations\n *  which will be passed into each component, or you may omit use of this class and\n *  configure each component separately.\n */\nconst BootstrapMaterialDesign = ($ => {\n  /**\n   * ------------------------------------------------------------------------\n   * Constants\n   * ------------------------------------------------------------------------\n   */\n  const NAME = \"bootstrapMaterialDesign\";\n  const DATA_KEY = `bmd.${NAME}`;\n  const JQUERY_NAME = NAME; // retain this full name since it is long enough not to conflict\n  const JQUERY_NO_CONFLICT = $.fn[JQUERY_NAME];\n\n  /**\n   * Global configuration:\n   *  The global configuration hash will be mixed in to each components' config.\n   *    e.g. calling $.bootstrapMaterialDesign({global: { validate: true } }) would pass `validate:true` to every component\n   *\n   *\n   * Component configuration:\n   *  - selector: may be a string or an array.  Any array will be joined with a comma to generate the selector\n   *  - disable any component by defining it as false with an override. e.g. $.bootstrapMaterialDesign({ autofill: false })\n   *\n   *  @see each individual component for more configuration settings.\n   */\n  const Default = {\n    global: {\n      validate: false,\n      label: {\n        className: \"bmd-label-static\" // default style of label to be used if not specified in the html markup\n      }\n    },\n    autofill: {\n      selector: \"body\"\n    },\n    checkbox: {\n      selector: \".checkbox > label > input[type=checkbox]\"\n    },\n    checkboxInline: {\n      selector: \"label.checkbox-inline > input[type=checkbox]\"\n    },\n    collapseInline: {\n      selector: '.bmd-collapse-inline [data-toggle=\"collapse\"]'\n    },\n    drawer: {\n      selector: \".bmd-layout-drawer\"\n    },\n    file: {\n      selector: \"input[type=file]\"\n    },\n    radio: {\n      selector: \".radio > label > input[type=radio]\"\n    },\n    radioInline: {\n      selector: \"label.radio-inline > input[type=radio]\"\n    },\n    ripples: {\n      //selector: ['.btn:not(.btn-link):not(.ripple-none)'] // testing only\n      selector: [\n        \".btn:not(.btn-link):not(.ripple-none)\",\n        \".card-image:not(.ripple-none)\",\n        \".navbar a:not(.ripple-none)\",\n        \".dropdown-menu a:not(.ripple-none)\",\n        \".nav-tabs a:not(.ripple-none)\",\n        \".pagination li:not(.active):not(.disabled) a:not(.ripple-none)\",\n        \".ripple\" // generic marker class to add ripple to elements\n      ]\n    },\n    select: {\n      selector: [\"select\"]\n    },\n    switch: {\n      selector: \".switch > label > input[type=checkbox]\"\n    },\n    text: {\n      // omit inputs we have specialized components to handle - we need to match text, email, etc.  The easiest way to do this appears to be just omit the ones we don't want to match and let the rest fall through to this.\n      selector: [\n        `input:not([type=hidden]):not([type=checkbox]):not([type=radio]):not([type=file]):not([type=button]):not([type=submit]):not([type=reset])`\n      ]\n    },\n    textarea: {\n      selector: [\"textarea\"]\n    },\n    arrive: true,\n    // create an ordered component list for instantiation\n    instantiation: [\n      \"ripples\",\n      \"checkbox\",\n      \"checkboxInline\",\n      \"collapseInline\",\n      \"drawer\",\n      //'file',\n      \"radio\",\n      \"radioInline\",\n      \"switch\",\n      \"text\",\n      \"textarea\",\n      \"select\",\n      \"autofill\"\n    ]\n  };\n\n  /**\n   * ------------------------------------------------------------------------\n   * Class Definition\n   * ------------------------------------------------------------------------\n   */\n  class BootstrapMaterialDesign {\n    constructor($element, config) {\n      this.$element = $element;\n      this.config = $.extend(true, {}, Default, config);\n      let $document = $(document);\n\n      for (let component of this.config.instantiation) {\n        // the component's config fragment is passed in directly, allowing users to override\n        let componentConfig = this.config[component];\n\n        // check to make sure component config is enabled (not `false`)\n        if (componentConfig) {\n          // assemble the selector as it may be an array\n          let selector = this._resolveSelector(componentConfig);\n\n          // mix in global options\n          componentConfig = $.extend(\n            true,\n            {},\n            this.config.global,\n            componentConfig\n          );\n\n          // create the jquery fn name e.g. 'bmdText' for 'text'\n          let componentName = `${component.charAt(0).toUpperCase() +\n            component.slice(1)}`;\n          let jqueryFn = `bmd${componentName}`;\n\n          try {\n            // safely instantiate component on selector elements with config, report errors and move on.\n            // console.debug(`instantiating: $('${selector}')[${jqueryFn}](${componentConfig})`) // eslint-disable-line no-console\n            $(selector)[jqueryFn](componentConfig);\n\n            // add to arrive if present and enabled\n            if (document.arrive && this.config.arrive) {\n              $document.arrive(selector, function() {\n                // eslint-disable-line no-loop-func\n                $(this)[jqueryFn](componentConfig);\n              });\n            }\n          } catch (e) {\n            let message = `Failed to instantiate component: $('${selector}')[${jqueryFn}](${componentConfig})`;\n            console.error(message, e, `\\nSelected elements: `, $(selector)); // eslint-disable-line no-console\n            throw e;\n          }\n        }\n      }\n    }\n\n    dispose() {\n      this.$element.data(DATA_KEY, null);\n      this.$element = null;\n      this.config = null;\n    }\n\n    // ------------------------------------------------------------------------\n    // private\n\n    _resolveSelector(componentConfig) {\n      let selector = componentConfig.selector;\n      if (Array.isArray(selector)) {\n        selector = selector.join(\", \");\n      }\n\n      return selector;\n    }\n\n    // ------------------------------------------------------------------------\n    // static\n    static _jQueryInterface(config) {\n      return this.each(function() {\n        let $element = $(this);\n        let data = $element.data(DATA_KEY);\n\n        if (!data) {\n          data = new BootstrapMaterialDesign($element, config);\n          $element.data(DATA_KEY, data);\n        }\n      });\n    }\n  }\n\n  /**\n   * ------------------------------------------------------------------------\n   * jQuery\n   * ------------------------------------------------------------------------\n   */\n  $.fn[JQUERY_NAME] = BootstrapMaterialDesign._jQueryInterface;\n  $.fn[JQUERY_NAME].Constructor = BootstrapMaterialDesign;\n  $.fn[JQUERY_NAME].noConflict = () => {\n    $.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;\n    return BootstrapMaterialDesign._jQueryInterface;\n  };\n\n  return BootstrapMaterialDesign;\n})(jQuery);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BootstrapMaterialDesign);\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-material-design/js/bootstrapMaterialDesign.js?");

/***/ }),

/***/ "./src/main/build/bundle.js":
/*!**********************************!*\
  !*** ./src/main/build/bundle.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//      dependencies style\n__webpack_require__(/*! ./scss/main.scss */ \"./src/main/build/scss/main.scss\"); //      dependencies js\n// require('bootstrap/dist/js/bootstrap.bundle')\n// require('jquery/dist/jquery.slim.min')\n// require('popper.js/dist/popper.min')\n\n\n__webpack_require__(/*! bootstrap-material-design/js/bootstrapMaterialDesign */ \"./node_modules/bootstrap-material-design/js/bootstrapMaterialDesign.js\");\n\n//# sourceURL=webpack:///./src/main/build/bundle.js?");

/***/ }),

/***/ "./src/main/build/scss/main.scss":
/*!***************************************!*\
  !*** ./src/main/build/scss/main.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/main/build/scss/main.scss?");

/***/ })

/******/ });