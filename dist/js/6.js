(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VSlideGroup/VSlideGroup.sass":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-3-1!./node_modules/postcss-loader/src??ref--9-oneOf-3-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-3-3!./node_modules/vuetify/src/components/VSlideGroup/VSlideGroup.sass ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".v-slide-group {\\n  display: flex;\\n}\\n.v-slide-group:not(.v-slide-group--has-affixes) > .v-slide-group__prev,\\n.v-slide-group:not(.v-slide-group--has-affixes) > .v-slide-group__next {\\n  display: none;\\n}\\n.v-slide-group.v-item-group > .v-slide-group__next,\\n.v-slide-group.v-item-group > .v-slide-group__prev {\\n  cursor: pointer;\\n}\\n\\n.v-slide-item {\\n  display: inline-flex;\\n  flex: 0 1 auto;\\n}\\n\\n.v-slide-group__next,\\n.v-slide-group__prev {\\n  align-items: center;\\n  display: flex;\\n  flex: 0 1 52px;\\n  justify-content: center;\\n  min-width: 52px;\\n}\\n\\n.v-slide-group__content {\\n  display: flex;\\n  flex: 1 0 auto;\\n  position: relative;\\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\\n  white-space: nowrap;\\n}\\n\\n.v-slide-group__wrapper {\\n  contain: content;\\n  display: flex;\\n  flex: 1 1 auto;\\n  overflow: hidden;\\n}\\n\\n.v-slide-group__next--disabled,\\n.v-slide-group__prev--disabled {\\n  pointer-events: none;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./node_modules/vuetify/src/components/VSlideGroup/VSlideGroup.sass?./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-3-1!./node_modules/postcss-loader/src??ref--9-oneOf-3-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-3-3");

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSlideGroup/VSlideGroup.js":
/*!************************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSlideGroup/VSlideGroup.js ***!
  \************************************************************************/
/*! exports provided: calculateUpdatedOffset, calculateCenteredOffset, BaseSlideGroup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateUpdatedOffset\", function() { return calculateUpdatedOffset; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateCenteredOffset\", function() { return calculateCenteredOffset; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BaseSlideGroup\", function() { return BaseSlideGroup; });\n/* harmony import */ var _Volumes_Xone_web_vientianeWastePro_waste_pro_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var _Volumes_Xone_web_vientianeWastePro_waste_pro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/components/VSlideGroup/VSlideGroup.sass */ \"./node_modules/vuetify/src/components/VSlideGroup/VSlideGroup.sass\");\n/* harmony import */ var _src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../VIcon */ \"./node_modules/vuetify/lib/components/VIcon/index.js\");\n/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transitions */ \"./node_modules/vuetify/lib/components/transitions/index.js\");\n/* harmony import */ var _VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../VItemGroup/VItemGroup */ \"./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js\");\n/* harmony import */ var _mixins_mobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mixins/mobile */ \"./node_modules/vuetify/lib/mixins/mobile/index.js\");\n/* harmony import */ var _directives_resize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directives/resize */ \"./node_modules/vuetify/lib/directives/resize/index.js\");\n/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../directives/touch */ \"./node_modules/vuetify/lib/directives/touch/index.js\");\n/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../util/mixins */ \"./node_modules/vuetify/lib/util/mixins.js\");\n/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../util/helpers */ \"./node_modules/vuetify/lib/util/helpers.js\");\n\n\n\n\n\n// Styles\n // Components\n\n\n // Extensions\n\n // Mixins\n\n // Directives\n\n\n // Utilities\n\n\n\nfunction calculateUpdatedOffset(selectedElement, widths, rtl, currentScrollOffset) {\n  var clientWidth = selectedElement.clientWidth;\n  var offsetLeft = rtl ? widths.content - selectedElement.offsetLeft - clientWidth : selectedElement.offsetLeft;\n\n  if (rtl) {\n    currentScrollOffset = -currentScrollOffset;\n  }\n\n  var totalWidth = widths.wrapper + currentScrollOffset;\n  var itemOffset = clientWidth + offsetLeft;\n  var additionalOffset = clientWidth * 0.4;\n\n  if (offsetLeft <= currentScrollOffset) {\n    currentScrollOffset = Math.max(offsetLeft - additionalOffset, 0);\n  } else if (totalWidth <= itemOffset) {\n    currentScrollOffset = Math.min(currentScrollOffset - (totalWidth - itemOffset - additionalOffset), widths.content - widths.wrapper);\n  }\n\n  return rtl ? -currentScrollOffset : currentScrollOffset;\n}\nfunction calculateCenteredOffset(selectedElement, widths, rtl) {\n  var offsetLeft = selectedElement.offsetLeft,\n      clientWidth = selectedElement.clientWidth;\n\n  if (rtl) {\n    var offsetCentered = widths.content - offsetLeft - clientWidth / 2 - widths.wrapper / 2;\n    return -Math.min(widths.content - widths.wrapper, Math.max(0, offsetCentered));\n  } else {\n    var _offsetCentered = offsetLeft + clientWidth / 2 - widths.wrapper / 2;\n\n    return Math.min(widths.content - widths.wrapper, Math.max(0, _offsetCentered));\n  }\n}\nvar BaseSlideGroup = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_8__[\"BaseItemGroup\"], _mixins_mobile__WEBPACK_IMPORTED_MODULE_9__[\"default\"]).extend({\n  name: 'base-slide-group',\n  directives: {\n    Resize: _directives_resize__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n  },\n  props: {\n    activeClass: {\n      type: String,\n      default: 'v-slide-item--active'\n    },\n    centerActive: Boolean,\n    nextIcon: {\n      type: String,\n      default: '$next'\n    },\n    prevIcon: {\n      type: String,\n      default: '$prev'\n    },\n    showArrows: {\n      type: [Boolean, String],\n      validator: function validator(v) {\n        return typeof v === 'boolean' || ['always', 'desktop', 'mobile'].includes(v);\n      }\n    }\n  },\n  data: function data() {\n    return {\n      internalItemsLength: 0,\n      isOverflowing: false,\n      resizeTimeout: 0,\n      startX: 0,\n      isSwipingHorizontal: false,\n      isSwiping: false,\n      scrollOffset: 0,\n      widths: {\n        content: 0,\n        wrapper: 0\n      }\n    };\n  },\n  computed: {\n    canTouch: function canTouch() {\n      return typeof window !== 'undefined';\n    },\n    __cachedNext: function __cachedNext() {\n      return this.genTransition('next');\n    },\n    __cachedPrev: function __cachedPrev() {\n      return this.genTransition('prev');\n    },\n    classes: function classes() {\n      return Object(_Volumes_Xone_web_vientianeWastePro_waste_pro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_Volumes_Xone_web_vientianeWastePro_waste_pro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_8__[\"BaseItemGroup\"].options.computed.classes.call(this)), {}, {\n        'v-slide-group': true,\n        'v-slide-group--has-affixes': this.hasAffixes,\n        'v-slide-group--is-overflowing': this.isOverflowing\n      });\n    },\n    hasAffixes: function hasAffixes() {\n      switch (this.showArrows) {\n        // Always show arrows on desktop & mobile\n        case 'always':\n          return true;\n        // Always show arrows on desktop\n\n        case 'desktop':\n          return !this.isMobile;\n        // Show arrows on mobile when overflowing.\n        // This matches the default 2.2 behavior\n\n        case true:\n          return this.isOverflowing || Math.abs(this.scrollOffset) > 0;\n        // Always show on mobile\n\n        case 'mobile':\n          return this.isMobile || this.isOverflowing || Math.abs(this.scrollOffset) > 0;\n        // https://material.io/components/tabs#scrollable-tabs\n        // Always show arrows when\n        // overflowed on desktop\n\n        default:\n          return !this.isMobile && (this.isOverflowing || Math.abs(this.scrollOffset) > 0);\n      }\n    },\n    hasNext: function hasNext() {\n      if (!this.hasAffixes) return false;\n      var _this$widths = this.widths,\n          content = _this$widths.content,\n          wrapper = _this$widths.wrapper; // Check one scroll ahead to know the width of right-most item\n\n      return content > Math.abs(this.scrollOffset) + wrapper;\n    },\n    hasPrev: function hasPrev() {\n      return this.hasAffixes && this.scrollOffset !== 0;\n    }\n  },\n  watch: {\n    internalValue: 'setWidths',\n    // When overflow changes, the arrows alter\n    // the widths of the content and wrapper\n    // and need to be recalculated\n    isOverflowing: 'setWidths',\n    scrollOffset: function scrollOffset(val) {\n      this.$refs.content.style.transform = \"translateX(\".concat(-val, \"px)\");\n    }\n  },\n  beforeUpdate: function beforeUpdate() {\n    this.internalItemsLength = (this.$children || []).length;\n  },\n  updated: function updated() {\n    if (this.internalItemsLength === (this.$children || []).length) return;\n    this.setWidths();\n  },\n  methods: {\n    onScroll: function onScroll() {\n      this.$refs.wrapper.scrollLeft = 0;\n    },\n    onFocusin: function onFocusin(e) {\n      if (!this.isOverflowing) return; // Focused element is likely to be the root of an item, so a\n      // breadth-first search will probably find it in the first iteration\n\n      var _iterator = Object(_Volumes_Xone_web_vientianeWastePro_waste_pro_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_13__[\"composedPath\"])(e)),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var el = _step.value;\n\n          var _iterator2 = Object(_Volumes_Xone_web_vientianeWastePro_waste_pro_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.items),\n              _step2;\n\n          try {\n            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n              var vm = _step2.value;\n\n              if (vm.$el === el) {\n                this.scrollOffset = calculateUpdatedOffset(vm.$el, this.widths, this.$vuetify.rtl, this.scrollOffset);\n                return;\n              }\n            }\n          } catch (err) {\n            _iterator2.e(err);\n          } finally {\n            _iterator2.f();\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    },\n    // Always generate next for scrollable hint\n    genNext: function genNext() {\n      var _this = this;\n\n      var slot = this.$scopedSlots.next ? this.$scopedSlots.next({}) : this.$slots.next || this.__cachedNext;\n      return this.$createElement('div', {\n        staticClass: 'v-slide-group__next',\n        class: {\n          'v-slide-group__next--disabled': !this.hasNext\n        },\n        on: {\n          click: function click() {\n            return _this.onAffixClick('next');\n          }\n        },\n        key: 'next'\n      }, [slot]);\n    },\n    genContent: function genContent() {\n      return this.$createElement('div', {\n        staticClass: 'v-slide-group__content',\n        ref: 'content',\n        on: {\n          focusin: this.onFocusin\n        }\n      }, this.$slots.default);\n    },\n    genData: function genData() {\n      return {\n        class: this.classes,\n        directives: [{\n          name: 'resize',\n          value: this.onResize\n        }]\n      };\n    },\n    genIcon: function genIcon(location) {\n      var icon = location;\n\n      if (this.$vuetify.rtl && location === 'prev') {\n        icon = 'next';\n      } else if (this.$vuetify.rtl && location === 'next') {\n        icon = 'prev';\n      }\n\n      var upperLocation = \"\".concat(location[0].toUpperCase()).concat(location.slice(1));\n      var hasAffix = this[\"has\".concat(upperLocation)];\n      if (!this.showArrows && !hasAffix) return null;\n      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        props: {\n          disabled: !hasAffix\n        }\n      }, this[\"\".concat(icon, \"Icon\")]);\n    },\n    // Always generate prev for scrollable hint\n    genPrev: function genPrev() {\n      var _this2 = this;\n\n      var slot = this.$scopedSlots.prev ? this.$scopedSlots.prev({}) : this.$slots.prev || this.__cachedPrev;\n      return this.$createElement('div', {\n        staticClass: 'v-slide-group__prev',\n        class: {\n          'v-slide-group__prev--disabled': !this.hasPrev\n        },\n        on: {\n          click: function click() {\n            return _this2.onAffixClick('prev');\n          }\n        },\n        key: 'prev'\n      }, [slot]);\n    },\n    genTransition: function genTransition(location) {\n      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_7__[\"VFadeTransition\"], [this.genIcon(location)]);\n    },\n    genWrapper: function genWrapper() {\n      var _this3 = this;\n\n      return this.$createElement('div', {\n        staticClass: 'v-slide-group__wrapper',\n        directives: [{\n          name: 'touch',\n          value: {\n            start: function start(e) {\n              return _this3.overflowCheck(e, _this3.onTouchStart);\n            },\n            move: function move(e) {\n              return _this3.overflowCheck(e, _this3.onTouchMove);\n            },\n            end: function end(e) {\n              return _this3.overflowCheck(e, _this3.onTouchEnd);\n            }\n          }\n        }],\n        ref: 'wrapper',\n        on: {\n          scroll: this.onScroll\n        }\n      }, [this.genContent()]);\n    },\n    calculateNewOffset: function calculateNewOffset(direction, widths, rtl, currentScrollOffset) {\n      var sign = rtl ? -1 : 1;\n      var newAbosluteOffset = sign * currentScrollOffset + (direction === 'prev' ? -1 : 1) * widths.wrapper;\n      return sign * Math.max(Math.min(newAbosluteOffset, widths.content - widths.wrapper), 0);\n    },\n    onAffixClick: function onAffixClick(location) {\n      this.$emit(\"click:\".concat(location));\n      this.scrollTo(location);\n    },\n    onResize: function onResize() {\n      /* istanbul ignore next */\n      if (this._isDestroyed) return;\n      this.setWidths();\n    },\n    onTouchStart: function onTouchStart(e) {\n      var content = this.$refs.content;\n      this.startX = this.scrollOffset + e.touchstartX;\n      content.style.setProperty('transition', 'none');\n      content.style.setProperty('willChange', 'transform');\n    },\n    onTouchMove: function onTouchMove(e) {\n      if (!this.canTouch) return;\n\n      if (!this.isSwiping) {\n        // only calculate disableSwipeHorizontal during the first onTouchMove invoke\n        // in order to ensure disableSwipeHorizontal value is consistent between onTouchStart and onTouchEnd\n        var diffX = e.touchmoveX - e.touchstartX;\n        var diffY = e.touchmoveY - e.touchstartY;\n        this.isSwipingHorizontal = Math.abs(diffX) > Math.abs(diffY);\n        this.isSwiping = true;\n      }\n\n      if (this.isSwipingHorizontal) {\n        // sliding horizontally\n        this.scrollOffset = this.startX - e.touchmoveX; // temporarily disable window vertical scrolling\n\n        document.documentElement.style.overflowY = 'hidden';\n      }\n    },\n    onTouchEnd: function onTouchEnd() {\n      if (!this.canTouch) return;\n      var _this$$refs = this.$refs,\n          content = _this$$refs.content,\n          wrapper = _this$$refs.wrapper;\n      var maxScrollOffset = content.clientWidth - wrapper.clientWidth;\n      content.style.setProperty('transition', null);\n      content.style.setProperty('willChange', null);\n\n      if (this.$vuetify.rtl) {\n        /* istanbul ignore else */\n        if (this.scrollOffset > 0 || !this.isOverflowing) {\n          this.scrollOffset = 0;\n        } else if (this.scrollOffset <= -maxScrollOffset) {\n          this.scrollOffset = -maxScrollOffset;\n        }\n      } else {\n        /* istanbul ignore else */\n        if (this.scrollOffset < 0 || !this.isOverflowing) {\n          this.scrollOffset = 0;\n        } else if (this.scrollOffset >= maxScrollOffset) {\n          this.scrollOffset = maxScrollOffset;\n        }\n      }\n\n      this.isSwiping = false; // rollback whole page scrolling to default\n\n      document.documentElement.style.removeProperty('overflow-y');\n    },\n    overflowCheck: function overflowCheck(e, fn) {\n      e.stopPropagation();\n      this.isOverflowing && fn(e);\n    },\n    scrollIntoView\n    /* istanbul ignore next */\n    : function scrollIntoView() {\n      if (!this.selectedItem && this.items.length) {\n        var lastItemPosition = this.items[this.items.length - 1].$el.getBoundingClientRect();\n        var wrapperPosition = this.$refs.wrapper.getBoundingClientRect();\n\n        if (this.$vuetify.rtl && wrapperPosition.right < lastItemPosition.right || !this.$vuetify.rtl && wrapperPosition.left > lastItemPosition.left) {\n          this.scrollTo('prev');\n        }\n      }\n\n      if (!this.selectedItem) {\n        return;\n      }\n\n      if (this.selectedIndex === 0 || !this.centerActive && !this.isOverflowing) {\n        this.scrollOffset = 0;\n      } else if (this.centerActive) {\n        this.scrollOffset = calculateCenteredOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl);\n      } else if (this.isOverflowing) {\n        this.scrollOffset = calculateUpdatedOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl, this.scrollOffset);\n      }\n    },\n    scrollTo\n    /* istanbul ignore next */\n    : function scrollTo(location) {\n      this.scrollOffset = this.calculateNewOffset(location, {\n        // Force reflow\n        content: this.$refs.content ? this.$refs.content.clientWidth : 0,\n        wrapper: this.$refs.wrapper ? this.$refs.wrapper.clientWidth : 0\n      }, this.$vuetify.rtl, this.scrollOffset);\n    },\n    setWidths\n    /* istanbul ignore next */\n    : function setWidths() {\n      var _this4 = this;\n\n      window.requestAnimationFrame(function () {\n        var _this4$$refs = _this4.$refs,\n            content = _this4$$refs.content,\n            wrapper = _this4$$refs.wrapper;\n        _this4.widths = {\n          content: content ? content.clientWidth : 0,\n          wrapper: wrapper ? wrapper.clientWidth : 0\n        }; // https://github.com/vuetifyjs/vuetify/issues/13212\n        // We add +1 to the wrappers width to prevent an issue where the `clientWidth`\n        // gets calculated wrongly by the browser if using a different zoom-level.\n\n        _this4.isOverflowing = _this4.widths.wrapper + 1 < _this4.widths.content;\n\n        _this4.scrollIntoView();\n      });\n    }\n  },\n  render: function render(h) {\n    return h('div', this.genData(), [this.genPrev(), this.genWrapper(), this.genNext()]);\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseSlideGroup.extend({\n  name: 'v-slide-group',\n  provide: function provide() {\n    return {\n      slideGroup: this\n    };\n  }\n}));\n\n//# sourceURL=webpack:///./node_modules/vuetify/lib/components/VSlideGroup/VSlideGroup.js?");

/***/ }),

/***/ "./node_modules/vuetify/src/components/VSlideGroup/VSlideGroup.sass":
/*!**************************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VSlideGroup/VSlideGroup.sass ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--9-oneOf-3-1!../../../../postcss-loader/src??ref--9-oneOf-3-2!../../../../sass-loader/dist/cjs.js??ref--9-oneOf-3-3!./VSlideGroup.sass */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VSlideGroup/VSlideGroup.sass\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"0e7470f1\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./node_modules/vuetify/src/components/VSlideGroup/VSlideGroup.sass?");

/***/ })

}]);