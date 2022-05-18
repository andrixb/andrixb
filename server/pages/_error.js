"use strict";
(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 9894:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__webpack_require__(1000);

__webpack_require__(9616);

__webpack_require__(444);

__webpack_require__(1076);

__webpack_require__(5547);

__webpack_require__(1624);

__webpack_require__(2047);

__webpack_require__(8534);

__webpack_require__(3114);

__webpack_require__(3064);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(6689));

var _head = _interopRequireDefault(__webpack_require__(4957));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps(_ref) {
  var res = _ref.res,
      err = _ref.err;
  var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
}

var Error = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(Error, _react$default$Compon);

  var _super = _createSuper(Error);

  function Error() {
    _classCallCheck(this, Error);

    return _super.apply(this, arguments);
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      var statusCode = this.props.statusCode;
      var title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
      return /*#__PURE__*/_react.default.createElement("div", {
        style: styles.error
      },  true && /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode ? "".concat(statusCode, ": ").concat(title) : 'Application error: a client-side exception has occurred')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: 'body { margin: 0 }'
        }
      }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
        style: styles.h1
      }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
        style: styles.desc
      }, /*#__PURE__*/_react.default.createElement("h2", {
        style: styles.h2
      }, this.props.title || statusCode ? title : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Application error: a client-side exception has occurred (see the browser console for more information)"), "."))));
    }
  }]);

  return Error;
}(_react.default.Component);

exports["default"] = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
var styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ 3114:
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.concat.js");

/***/ }),

/***/ 1624:
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.iterator.js");

/***/ }),

/***/ 3064:
/***/ ((module) => {

module.exports = require("core-js/modules/es.object.get-prototype-of.js");

/***/ }),

/***/ 1000:
/***/ ((module) => {

module.exports = require("core-js/modules/es.object.to-string.js");

/***/ }),

/***/ 9616:
/***/ ((module) => {

module.exports = require("core-js/modules/es.reflect.construct.js");

/***/ }),

/***/ 2047:
/***/ ((module) => {

module.exports = require("core-js/modules/es.string.iterator.js");

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

/***/ 8534:
/***/ ((module) => {

module.exports = require("core-js/modules/web.dom-collections.iterator.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9894));
module.exports = __webpack_exports__;

})();