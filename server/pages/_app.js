"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 470:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Root)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(685);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(444);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1076);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1000);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5547);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1624);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2047);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8534);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6257);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6941);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6486);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _src_Shared_infrastructure_enums__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8098);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _src_Shared_infrastructure_helpers_i18nUtils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6316);
/* harmony import */ var _src_Shared_ui_styles_appTheme__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1461);
/* harmony import */ var _src_Shared_ui_components_Header__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_Shared_infrastructure_helpers_i18nUtils__WEBPACK_IMPORTED_MODULE_16__]);
_src_Shared_infrastructure_helpers_i18nUtils__WEBPACK_IMPORTED_MODULE_16__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function Root(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var DEFAULT_LANGUAGE = 'en';

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      ready = _useState2[0],
      isReady = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(function () {
    (0,_src_Shared_infrastructure_helpers_i18nUtils__WEBPACK_IMPORTED_MODULE_16__/* .configureTranslations */ .l)();
    detectAppLanguage();
  }, []);

  var detectAppLanguage = function detectAppLanguage() {
    var language = window.location.href.split('/')[3] || DEFAULT_LANGUAGE;
    _src_Shared_infrastructure_helpers_i18nUtils__WEBPACK_IMPORTED_MODULE_16__/* ["default"].changeLanguage */ .Z.changeLanguage(language).then(function () {
      isReady(true);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__.ThemeProvider, {
    theme: _src_Shared_ui_styles_appTheme__WEBPACK_IMPORTED_MODULE_17__/* .appTheme */ .yG
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_src_Shared_ui_components_Header__WEBPACK_IMPORTED_MODULE_18__/* .MainAppHeaderComponent */ .N, {
    favico: process.env.FAVICO
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react__WEBPACK_IMPORTED_MODULE_12__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__.CircularProgress, {
      variant: 'indeterminate',
      color: _src_Shared_infrastructure_enums__WEBPACK_IMPORTED_MODULE_14__/* .Color.primary */ .I.primary
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__.Container, {
    maxWidth: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_i18next__WEBPACK_IMPORTED_MODULE_13__.I18nextProvider, {
    i18n: _src_Shared_infrastructure_helpers_i18nUtils__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z
  }, ready && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(Component, pageProps)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  })));
}
;
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* reexport */ Color)
});

;// CONCATENATED MODULE: ./src/Shared/infrastructure/enums/Color.ts
var Color;

(function (Color) {
  Color["primary"] = "primary";
  Color["secondary"] = "secondary";
  Color["tertiary"] = "tertiary";
  Color["info"] = "info";
  Color["error"] = "error";
  Color["warning"] = "warning";
})(Color || (Color = {}));
;// CONCATENATED MODULE: ./src/Shared/infrastructure/enums/index.ts


/***/ }),

/***/ 6316:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "l": () => (/* binding */ configureTranslations)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3114);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2021);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9494);
/* harmony import */ var i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_1__]);
i18next__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




var REMOTE_URL = "".concat(process.env.CDN_URL, "/").concat(process.env.MICRO_FOLDER_NAME, "/").concat(process.env.ASSETS_VERSION);
var LOCAL_URL = "".concat(process.env.ASSETS_PATH);
var backend = {
  loadPath: "".concat(process.env.ASSETS_VERSION ? REMOTE_URL : LOCAL_URL, "/locales/{{lng}}.json")
};
function configureTranslations() {
  i18next__WEBPACK_IMPORTED_MODULE_1__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_2__.initReactI18next).use((i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_3___default())).init({
    backend: backend,
    ns: ['translation'],
    fallbackLng: 'en',
    fallbackNS: 'default',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false //     wait: true,

    },
    returnNull: false
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next__WEBPACK_IMPORTED_MODULE_1__["default"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ MainAppHeaderComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(444);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1076);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5128);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4011);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1000);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5226);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3275);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9270);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



;
function MainAppHeaderComponent(props) {
  var _props = _objectSpread({}, props),
      title = _props.title,
      description = _props.description,
      favico = _props.favico;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_9___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("meta", {
    name: "description",
    content: description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("link", {
    rel: "icon",
    href: favico
  }));
}

/***/ }),

/***/ 1461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "yG": () => (/* binding */ appTheme)
});

// UNUSED EXPORTS: appColors, appPalette, componentsOverrides, typographyColors

// EXTERNAL MODULE: external "core-js/modules/es.object.keys.js"
var es_object_keys_js_ = __webpack_require__(5128);
// EXTERNAL MODULE: external "core-js/modules/es.symbol.js"
var es_symbol_js_ = __webpack_require__(444);
// EXTERNAL MODULE: external "core-js/modules/es.array.filter.js"
var es_array_filter_js_ = __webpack_require__(4011);
// EXTERNAL MODULE: external "core-js/modules/es.object.to-string.js"
var es_object_to_string_js_ = __webpack_require__(1000);
// EXTERNAL MODULE: external "core-js/modules/es.object.get-own-property-descriptor.js"
var es_object_get_own_property_descriptor_js_ = __webpack_require__(5226);
// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each.js"
var web_dom_collections_for_each_js_ = __webpack_require__(3275);
// EXTERNAL MODULE: external "core-js/modules/es.object.get-own-property-descriptors.js"
var es_object_get_own_property_descriptors_js_ = __webpack_require__(9270);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/Shared/ui/styles/colors.ts
/******** PALETTE OF COLORS ********/
// White
var white = '#ffffff'; // Blues

var darkMediumBlue = '#56808e';
var darkBlue = '#0f3e4d';
var darkGreenBlue = '#00222d';
var lightBlue = '#ebf2fa';
var mediumLightBlue = '#92adcc';
var mediumBlue = '#3493e7';
var lightLightBlue = '#f7fafd';
var mediumTurquoise = '#5bc0de'; // Greens

var darkGreen = '#4e7d10';
var mediumGreen = '#8fce3d';
var mediumEmerald = '#20c682';
var lightGreen = '#D1E3BA'; // Grey

var darkerGrey = '#222';
var darkMediumGrey = '#506f78';
var lightGrey = '#d7dee9';
var mediumGrey = '#bbcadd'; // Reds

var lightRed = '#ef6474';
var mediumRed = '#e6112b'; // Yellows

var lightYellow = '#ffdb6c';
var mediumYellow = '#ffce38'; // Pinks

var mediumPink = '#cc0a56';
;// CONCATENATED MODULE: ./src/Shared/ui/styles/typography.ts
var typography = {
  fontFamily: 'Roboto',
  h1: {
    fontSize: 36,
    lineHeight: '46px',
    letterSpacing: 'normal',
    fontWeight: 500
  },
  h2: {
    fontSize: 28,
    lineHeight: '38px',
    letterSpacing: 'normal',
    fontWeight: 500
  },
  h3: {
    fontSize: 24,
    lineHeight: '32px',
    letterSpacing: 'normal',
    fontWeight: 500
  },
  h4: {
    fontSize: 18,
    lineHeight: '26px',
    letterSpacing: 'normal',
    fontWeight: 500
  },
  body1: {
    fontSize: 16,
    lineHeight: '24px',
    letterSpacing: 'normal'
  },
  body2: {
    fontSize: 14,
    lineHeight: '22px',
    letterSpacing: 'normal'
  },
  caption: {
    fontSize: 12,
    lineHeight: '22px',
    letterSpacing: 0.4,
    fontWeight: 'normal'
  }
};
;// CONCATENATED MODULE: ./src/Shared/ui/styles/appTheme.ts








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var appPalette = {
  primary: {
    light: darkMediumBlue,
    main: darkBlue,
    dark: darkGreenBlue
  },
  success: {
    main: mediumGreen,
    dark: darkGreen
  },
  error: {
    main: mediumRed
  },
  info: {
    light: lightLightBlue,
    main: mediumLightBlue,
    dark: mediumBlue
  }
};
var appColors = {
  white: white,
  lightBlue: lightBlue,
  darkerGrey: darkerGrey,
  darkMediumGrey: darkMediumGrey,
  lightGrey: lightGrey
};
var typographyColors = {
  styleOverrides: function styleOverrides(_ref) {
    var ownerState = _ref.ownerState;
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, ownerState.color === 'primary' && {
      color: darkBlue
    }), ownerState.color === 'secondary' && {
      color: white
    }), ownerState.color === 'textPrimary' && {
      color: mediumLightBlue
    }), ownerState.color === 'textSecondary' && {
      color: mediumBlue
    }), ownerState.color === 'error' && {
      color: mediumRed
    });
  }
};
var componentsOverrides = _objectSpread({
  MuiIconButton: {
    styleOverrides: {
      root: {
        padding: '16px',
        '&&.Mui-disabled': {
          color: 'inherit'
        }
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      containedPrimary: {
        color: appColors.white,
        backgroundColor: mediumGreen,
        borderRadius: 4,
        fontSize: 18,
        '&:hover': {
          backgroundColor: darkGreen
        }
      },
      containedSecondary: {
        color: appColors.white,
        backgroundColor: darkBlue,
        borderRadius: 4,
        '&:hover': {
          backgroundColor: mediumLightBlue
        }
      }
    }
  },
  MuiCircularProgress: {
    styleOverrides: {
      colorPrimary: {
        color: mediumGreen
      }
    }
  },
  MuiSnackbar: {
    styleOverrides: {
      root: {
        borderRadius: '8px'
      },
      anchorOriginTopCenter: {
        top: '16px',
        left: '16px',
        right: '16px'
      }
    }
  }
}, typographyColors);
var appTheme = (0,material_.createTheme)({
  palette: appPalette,
  colors: appColors,
  components: componentsOverrides,
  typography: typography
});

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3114:
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.concat.js");

/***/ }),

/***/ 4011:
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.filter.js");

/***/ }),

/***/ 6486:
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.from.js");

/***/ }),

/***/ 1624:
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.iterator.js");

/***/ }),

/***/ 6257:
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.slice.js");

/***/ }),

/***/ 6941:
/***/ ((module) => {

module.exports = require("core-js/modules/es.function.name.js");

/***/ }),

/***/ 5226:
/***/ ((module) => {

module.exports = require("core-js/modules/es.object.get-own-property-descriptor.js");

/***/ }),

/***/ 9270:
/***/ ((module) => {

module.exports = require("core-js/modules/es.object.get-own-property-descriptors.js");

/***/ }),

/***/ 5128:
/***/ ((module) => {

module.exports = require("core-js/modules/es.object.keys.js");

/***/ }),

/***/ 1000:
/***/ ((module) => {

module.exports = require("core-js/modules/es.object.to-string.js");

/***/ }),

/***/ 3524:
/***/ ((module) => {

module.exports = require("core-js/modules/es.regexp.exec.js");

/***/ }),

/***/ 2047:
/***/ ((module) => {

module.exports = require("core-js/modules/es.string.iterator.js");

/***/ }),

/***/ 685:
/***/ ((module) => {

module.exports = require("core-js/modules/es.string.split.js");

/***/ }),

/***/ 1076:
/***/ ((module) => {

module.exports = require("core-js/modules/es.symbol.description.js");

/***/ }),

/***/ 5547:
/***/ ((module) => {

module.exports = require("core-js/modules/es.symbol.iterator.js");

/***/ }),

/***/ 444:
/***/ ((module) => {

module.exports = require("core-js/modules/es.symbol.js");

/***/ }),

/***/ 3275:
/***/ ((module) => {

module.exports = require("core-js/modules/web.dom-collections.for-each.js");

/***/ }),

/***/ 8534:
/***/ ((module) => {

module.exports = require("core-js/modules/web.dom-collections.iterator.js");

/***/ }),

/***/ 9494:
/***/ ((module) => {

module.exports = require("i18next-xhr-backend");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 2021:
/***/ ((module) => {

module.exports = import("i18next");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(470));
module.exports = __webpack_exports__;

})();