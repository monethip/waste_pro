(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VCheckbox/VCheckbox.sass":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-3-1!./node_modules/postcss-loader/src??ref--9-oneOf-3-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-3-3!./node_modules/vuetify/src/components/VCheckbox/VCheckbox.sass ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".v-input--checkbox.v-input--indeterminate.v-input--is-disabled {\\n  opacity: 0.6;\\n}\\n.v-input--checkbox.v-input--dense {\\n  margin-top: 4px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./node_modules/vuetify/src/components/VCheckbox/VCheckbox.sass?./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-3-1!./node_modules/postcss-loader/src??ref--9-oneOf-3-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-3-3");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/styles/components/_selection-controls.sass":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-3-1!./node_modules/postcss-loader/src??ref--9-oneOf-3-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-3-3!./node_modules/vuetify/src/styles/components/_selection-controls.sass ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".v-input--selection-controls {\\n  margin-top: 16px;\\n  padding-top: 4px;\\n}\\n.v-input--selection-controls > .v-input__append-outer,\\n.v-input--selection-controls > .v-input__prepend-outer {\\n  margin-top: 0;\\n  margin-bottom: 0;\\n}\\n.v-input--selection-controls:not(.v-input--hide-details) > .v-input__slot {\\n  margin-bottom: 12px;\\n}\\n.v-input--selection-controls .v-input__slot,\\n.v-input--selection-controls .v-radio {\\n  cursor: pointer;\\n}\\n.v-input--selection-controls .v-input__slot > .v-label,\\n.v-input--selection-controls .v-radio > .v-label {\\n  align-items: center;\\n  display: inline-flex;\\n  flex: 1 1 auto;\\n  height: auto;\\n}\\n.v-input--selection-controls__input {\\n  color: inherit;\\n  display: inline-flex;\\n  flex: 0 0 auto;\\n  height: 24px;\\n  position: relative;\\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\\n  transition-property: transform;\\n  width: 24px;\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n      -ms-user-select: none;\\n          user-select: none;\\n}\\n.v-input--selection-controls__input .v-icon {\\n  width: 100%;\\n}\\n.v-application--is-ltr .v-input--selection-controls__input {\\n  margin-right: 8px;\\n}\\n.v-application--is-rtl .v-input--selection-controls__input {\\n  margin-left: 8px;\\n}\\n.v-input--selection-controls__input input[role=checkbox],\\n.v-input--selection-controls__input input[role=radio],\\n.v-input--selection-controls__input input[role=switch] {\\n  position: absolute;\\n  opacity: 0;\\n  width: 100%;\\n  height: 100%;\\n  cursor: pointer;\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n      -ms-user-select: none;\\n          user-select: none;\\n}\\n.v-input--selection-controls__input + .v-label {\\n  cursor: pointer;\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n      -ms-user-select: none;\\n          user-select: none;\\n}\\n.v-input--selection-controls__ripple {\\n  border-radius: 50%;\\n  cursor: pointer;\\n  height: 34px;\\n  position: absolute;\\n  transition: inherit;\\n  width: 34px;\\n  left: -12px;\\n  top: calc(50% - 24px);\\n  margin: 7px;\\n}\\n.v-input--selection-controls__ripple:before {\\n  border-radius: inherit;\\n  bottom: 0;\\n  content: \\\"\\\";\\n  position: absolute;\\n  opacity: 0.2;\\n  left: 0;\\n  right: 0;\\n  top: 0;\\n  transform-origin: center center;\\n  transform: scale(0.2);\\n  transition: inherit;\\n}\\n.v-input--selection-controls__ripple > .v-ripple__container {\\n  transform: scale(1.2);\\n}\\n.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple {\\n  width: 28px;\\n  height: 28px;\\n  left: -9px;\\n}\\n.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple {\\n  top: calc(50% - 21px);\\n}\\n.v-input--selection-controls.v-input {\\n  flex: 0 1 auto;\\n}\\n.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,\\n.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before {\\n  background: currentColor;\\n  transform: scale(1.2);\\n}\\n.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon {\\n  color: inherit;\\n}\\n\\n.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before {\\n  background: currentColor;\\n  transform: scale(1.2);\\n  transition: none;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./node_modules/vuetify/src/styles/components/_selection-controls.sass?./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-3-1!./node_modules/postcss-loader/src??ref--9-oneOf-3-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-3-3");

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js":
/*!********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Volumes_Xone_web_vientianeWastePro_waste_pro_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _Volumes_Xone_web_vientianeWastePro_waste_pro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/components/VCheckbox/VCheckbox.sass */ \"./node_modules/vuetify/src/components/VCheckbox/VCheckbox.sass\");\n/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/styles/components/_selection-controls.sass */ \"./node_modules/vuetify/src/styles/components/_selection-controls.sass\");\n/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../VIcon */ \"./node_modules/vuetify/lib/components/VIcon/index.js\");\n/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../VInput */ \"./node_modules/vuetify/lib/components/VInput/index.js\");\n/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixins/selectable */ \"./node_modules/vuetify/lib/mixins/selectable/index.js\");\n\n\nvar _excluded = [\"title\"];\n\n\n// Styles\n\n // Components\n\n\n // Mixins\n\n\n/* @vue/component */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_mixins_selectable__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extend({\n  name: 'v-checkbox',\n  props: {\n    indeterminate: Boolean,\n    indeterminateIcon: {\n      type: String,\n      default: '$checkboxIndeterminate'\n    },\n    offIcon: {\n      type: String,\n      default: '$checkboxOff'\n    },\n    onIcon: {\n      type: String,\n      default: '$checkboxOn'\n    }\n  },\n  data: function data() {\n    return {\n      inputIndeterminate: this.indeterminate\n    };\n  },\n  computed: {\n    classes: function classes() {\n      return Object(_Volumes_Xone_web_vientianeWastePro_waste_pro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_Volumes_Xone_web_vientianeWastePro_waste_pro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _VInput__WEBPACK_IMPORTED_MODULE_7__[\"default\"].options.computed.classes.call(this)), {}, {\n        'v-input--selection-controls': true,\n        'v-input--checkbox': true,\n        'v-input--indeterminate': this.inputIndeterminate\n      });\n    },\n    computedIcon: function computedIcon() {\n      if (this.inputIndeterminate) {\n        return this.indeterminateIcon;\n      } else if (this.isActive) {\n        return this.onIcon;\n      } else {\n        return this.offIcon;\n      }\n    },\n    // Do not return undefined if disabled,\n    // according to spec, should still show\n    // a color when disabled and active\n    validationState: function validationState() {\n      if (this.isDisabled && !this.inputIndeterminate) return undefined;\n      if (this.hasError && this.shouldValidate) return 'error';\n      if (this.hasSuccess) return 'success';\n      if (this.hasColor !== null) return this.computedColor;\n      return undefined;\n    }\n  },\n  watch: {\n    indeterminate: function indeterminate(val) {\n      var _this = this;\n\n      // https://github.com/vuetifyjs/vuetify/issues/8270\n      this.$nextTick(function () {\n        return _this.inputIndeterminate = val;\n      });\n    },\n    inputIndeterminate: function inputIndeterminate(val) {\n      this.$emit('update:indeterminate', val);\n    },\n    isActive: function isActive() {\n      if (!this.indeterminate) return;\n      this.inputIndeterminate = false;\n    }\n  },\n  methods: {\n    genCheckbox: function genCheckbox() {\n      var _this$attrs$ = this.attrs$,\n          title = _this$attrs$.title,\n          checkboxAttrs = Object(_Volumes_Xone_web_vientianeWastePro_waste_pro_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this$attrs$, _excluded);\n\n      return this.$createElement('div', {\n        staticClass: 'v-input--selection-controls__input'\n      }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], this.setTextColor(this.validationState, {\n        props: {\n          dense: this.dense,\n          dark: this.dark,\n          light: this.light\n        }\n      }), this.computedIcon), this.genInput('checkbox', Object(_Volumes_Xone_web_vientianeWastePro_waste_pro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_Volumes_Xone_web_vientianeWastePro_waste_pro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, checkboxAttrs), {}, {\n        'aria-checked': this.inputIndeterminate ? 'mixed' : this.isActive.toString()\n      })), this.genRipple(this.setTextColor(this.rippleState))]);\n    },\n    genDefaultSlot: function genDefaultSlot() {\n      return [this.genCheckbox(), this.genLabel()];\n    }\n  }\n}));\n\n//# sourceURL=webpack:///./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js?");

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VCheckbox/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VCheckbox/index.js ***!
  \****************************************************************/
/*! exports provided: VCheckbox, VSimpleCheckbox, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VCheckbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VCheckbox */ \"./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"VCheckbox\", function() { return _VCheckbox__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _VSimpleCheckbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VSimpleCheckbox */ \"./node_modules/vuetify/lib/components/VCheckbox/VSimpleCheckbox.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"VSimpleCheckbox\", function() { return _VSimpleCheckbox__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  $_vuetify_subcomponents: {\n    VCheckbox: _VCheckbox__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    VSimpleCheckbox: _VSimpleCheckbox__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/vuetify/lib/components/VCheckbox/index.js?");

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VForm/VForm.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VForm/VForm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Volumes_Xone_web_vientianeWastePro_waste_pro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ \"./node_modules/core-js/modules/es.object.values.js\");\n/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/mixins */ \"./node_modules/vuetify/lib/util/mixins.js\");\n/* harmony import */ var _mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixins/binds-attrs */ \"./node_modules/vuetify/lib/mixins/binds-attrs/index.js\");\n/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mixins/registrable */ \"./node_modules/vuetify/lib/mixins/registrable/index.js\");\n\n\n\n\n\n\n\n// Mixins\n\n\n\n/* @vue/component */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_8__[\"default\"], Object(_mixins_registrable__WEBPACK_IMPORTED_MODULE_9__[\"provide\"])('form')\n/* @vue/component */\n).extend({\n  name: 'v-form',\n  provide: function provide() {\n    return {\n      form: this\n    };\n  },\n  inheritAttrs: false,\n  props: {\n    disabled: Boolean,\n    lazyValidation: Boolean,\n    readonly: Boolean,\n    value: Boolean\n  },\n  data: function data() {\n    return {\n      inputs: [],\n      watchers: [],\n      errorBag: {}\n    };\n  },\n  watch: {\n    errorBag: {\n      handler: function handler(val) {\n        var errors = Object.values(val).includes(true);\n        this.$emit('input', !errors);\n      },\n      deep: true,\n      immediate: true\n    }\n  },\n  methods: {\n    watchInput: function watchInput(input) {\n      var _this = this;\n\n      var watcher = function watcher(input) {\n        return input.$watch('hasError', function (val) {\n          _this.$set(_this.errorBag, input._uid, val);\n        }, {\n          immediate: true\n        });\n      };\n\n      var watchers = {\n        _uid: input._uid,\n        valid: function valid() {},\n        shouldValidate: function shouldValidate() {}\n      };\n\n      if (this.lazyValidation) {\n        // Only start watching inputs if we need to\n        watchers.shouldValidate = input.$watch('shouldValidate', function (val) {\n          if (!val) return; // Only watch if we're not already doing it\n\n          if (_this.errorBag.hasOwnProperty(input._uid)) return;\n          watchers.valid = watcher(input);\n        });\n      } else {\n        watchers.valid = watcher(input);\n      }\n\n      return watchers;\n    },\n\n    /** @public */\n    validate: function validate() {\n      return this.inputs.filter(function (input) {\n        return !input.validate(true);\n      }).length === 0;\n    },\n\n    /** @public */\n    reset: function reset() {\n      this.inputs.forEach(function (input) {\n        return input.reset();\n      });\n      this.resetErrorBag();\n    },\n    resetErrorBag: function resetErrorBag() {\n      var _this2 = this;\n\n      if (this.lazyValidation) {\n        // Account for timeout in validatable\n        setTimeout(function () {\n          _this2.errorBag = {};\n        }, 0);\n      }\n    },\n\n    /** @public */\n    resetValidation: function resetValidation() {\n      this.inputs.forEach(function (input) {\n        return input.resetValidation();\n      });\n      this.resetErrorBag();\n    },\n    register: function register(input) {\n      this.inputs.push(input);\n      this.watchers.push(this.watchInput(input));\n    },\n    unregister: function unregister(input) {\n      var found = this.inputs.find(function (i) {\n        return i._uid === input._uid;\n      });\n      if (!found) return;\n      var unwatch = this.watchers.find(function (i) {\n        return i._uid === found._uid;\n      });\n\n      if (unwatch) {\n        unwatch.valid();\n        unwatch.shouldValidate();\n      }\n\n      this.watchers = this.watchers.filter(function (i) {\n        return i._uid !== found._uid;\n      });\n      this.inputs = this.inputs.filter(function (i) {\n        return i._uid !== found._uid;\n      });\n      this.$delete(this.errorBag, found._uid);\n    }\n  },\n  render: function render(h) {\n    var _this3 = this;\n\n    return h('form', {\n      staticClass: 'v-form',\n      attrs: Object(_Volumes_Xone_web_vientianeWastePro_waste_pro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        novalidate: true\n      }, this.attrs$),\n      on: {\n        submit: function submit(e) {\n          return _this3.$emit('submit', e);\n        }\n      }\n    }, this.$slots.default);\n  }\n}));\n\n//# sourceURL=webpack:///./node_modules/vuetify/lib/components/VForm/VForm.js?");

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VForm/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VForm/index.js ***!
  \************************************************************/
/*! exports provided: VForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VForm */ \"./node_modules/vuetify/lib/components/VForm/VForm.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"VForm\", function() { return _VForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_VForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./node_modules/vuetify/lib/components/VForm/index.js?");

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSelect/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSelect/index.js ***!
  \**************************************************************/
/*! exports provided: VSelect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VSelect */ \"./node_modules/vuetify/lib/components/VSelect/VSelect.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"VSelect\", function() { return _VSelect__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_VSelect__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./node_modules/vuetify/lib/components/VSelect/index.js?");

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/rippleable/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/rippleable/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _directives_ripple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/ripple */ \"./node_modules/vuetify/lib/directives/ripple/index.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n// Directives\n // Types\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].extend({\n  name: 'rippleable',\n  directives: {\n    ripple: _directives_ripple__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  props: {\n    ripple: {\n      type: [Boolean, Object],\n      default: true\n    }\n  },\n  methods: {\n    genRipple: function genRipple() {\n      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      if (!this.ripple) return null;\n      data.staticClass = 'v-input--selection-controls__ripple';\n      data.directives = data.directives || [];\n      data.directives.push({\n        name: 'ripple',\n        value: {\n          center: true\n        }\n      });\n      return this.$createElement('div', data);\n    }\n  }\n}));\n\n//# sourceURL=webpack:///./node_modules/vuetify/lib/mixins/rippleable/index.js?");

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/selectable/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/selectable/index.js ***!
  \*************************************************************/
/*! exports provided: prevent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prevent\", function() { return prevent; });\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/VInput */ \"./node_modules/vuetify/lib/components/VInput/index.js\");\n/* harmony import */ var _rippleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rippleable */ \"./node_modules/vuetify/lib/mixins/rippleable/index.js\");\n/* harmony import */ var _comparable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comparable */ \"./node_modules/vuetify/lib/mixins/comparable/index.js\");\n/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/mixins */ \"./node_modules/vuetify/lib/util/mixins.js\");\n\n\n\n// Components\n // Mixins\n\n\n // Utilities\n\n\nfunction prevent(e) {\n  e.preventDefault();\n}\n/* @vue/component */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_components_VInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _rippleable__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _comparable__WEBPACK_IMPORTED_MODULE_5__[\"default\"]).extend({\n  name: 'selectable',\n  model: {\n    prop: 'inputValue',\n    event: 'change'\n  },\n  props: {\n    id: String,\n    inputValue: null,\n    falseValue: null,\n    trueValue: null,\n    multiple: {\n      type: Boolean,\n      default: null\n    },\n    label: String\n  },\n  data: function data() {\n    return {\n      hasColor: this.inputValue,\n      lazyValue: this.inputValue\n    };\n  },\n  computed: {\n    computedColor: function computedColor() {\n      if (!this.isActive) return undefined;\n      if (this.color) return this.color;\n      if (this.isDark && !this.appIsDark) return 'white';\n      return 'primary';\n    },\n    isMultiple: function isMultiple() {\n      return this.multiple === true || this.multiple === null && Array.isArray(this.internalValue);\n    },\n    isActive: function isActive() {\n      var _this = this;\n\n      var value = this.value;\n      var input = this.internalValue;\n\n      if (this.isMultiple) {\n        if (!Array.isArray(input)) return false;\n        return input.some(function (item) {\n          return _this.valueComparator(item, value);\n        });\n      }\n\n      if (this.trueValue === undefined || this.falseValue === undefined) {\n        return value ? this.valueComparator(value, input) : Boolean(input);\n      }\n\n      return this.valueComparator(input, this.trueValue);\n    },\n    isDirty: function isDirty() {\n      return this.isActive;\n    },\n    rippleState: function rippleState() {\n      return !this.isDisabled && !this.validationState ? undefined : this.validationState;\n    }\n  },\n  watch: {\n    inputValue: function inputValue(val) {\n      this.lazyValue = val;\n      this.hasColor = val;\n    }\n  },\n  methods: {\n    genLabel: function genLabel() {\n      var label = _components_VInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"].options.methods.genLabel.call(this);\n      if (!label) return label;\n      label.data.on = {\n        // Label shouldn't cause the input to focus\n        click: prevent\n      };\n      return label;\n    },\n    genInput: function genInput(type, attrs) {\n      return this.$createElement('input', {\n        attrs: Object.assign({\n          'aria-checked': this.isActive.toString(),\n          disabled: this.isDisabled,\n          id: this.computedId,\n          role: type,\n          type: type\n        }, attrs),\n        domProps: {\n          value: this.value,\n          checked: this.isActive\n        },\n        on: {\n          blur: this.onBlur,\n          change: this.onChange,\n          focus: this.onFocus,\n          keydown: this.onKeydown,\n          click: prevent\n        },\n        ref: 'input'\n      });\n    },\n    onBlur: function onBlur() {\n      this.isFocused = false;\n    },\n    onClick: function onClick(e) {\n      this.onChange();\n      this.$emit('click', e);\n    },\n    onChange: function onChange() {\n      var _this2 = this;\n\n      if (!this.isInteractive) return;\n      var value = this.value;\n      var input = this.internalValue;\n\n      if (this.isMultiple) {\n        if (!Array.isArray(input)) {\n          input = [];\n        }\n\n        var length = input.length;\n        input = input.filter(function (item) {\n          return !_this2.valueComparator(item, value);\n        });\n\n        if (input.length === length) {\n          input.push(value);\n        }\n      } else if (this.trueValue !== undefined && this.falseValue !== undefined) {\n        input = this.valueComparator(input, this.trueValue) ? this.falseValue : this.trueValue;\n      } else if (value) {\n        input = this.valueComparator(input, value) ? null : value;\n      } else {\n        input = !input;\n      }\n\n      this.validate(true, input);\n      this.internalValue = input;\n      this.hasColor = input;\n    },\n    onFocus: function onFocus() {\n      this.isFocused = true;\n    },\n\n    /** @abstract */\n    onKeydown: function onKeydown(e) {}\n  }\n}));\n\n//# sourceURL=webpack:///./node_modules/vuetify/lib/mixins/selectable/index.js?");

/***/ }),

/***/ "./node_modules/vuetify/src/components/VCheckbox/VCheckbox.sass":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VCheckbox/VCheckbox.sass ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--9-oneOf-3-1!../../../../postcss-loader/src??ref--9-oneOf-3-2!../../../../sass-loader/dist/cjs.js??ref--9-oneOf-3-3!./VCheckbox.sass */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VCheckbox/VCheckbox.sass\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"237f1888\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./node_modules/vuetify/src/components/VCheckbox/VCheckbox.sass?");

/***/ }),

/***/ "./node_modules/vuetify/src/styles/components/_selection-controls.sass":
/*!*****************************************************************************!*\
  !*** ./node_modules/vuetify/src/styles/components/_selection-controls.sass ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--9-oneOf-3-1!../../../../postcss-loader/src??ref--9-oneOf-3-2!../../../../sass-loader/dist/cjs.js??ref--9-oneOf-3-3!./_selection-controls.sass */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/styles/components/_selection-controls.sass\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"3f7368aa\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./node_modules/vuetify/src/styles/components/_selection-controls.sass?");

/***/ })

}]);