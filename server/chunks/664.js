exports.id = 664;
exports.ids = [664];
exports.modules = {

/***/ 7913:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(444);

__webpack_require__(1076);

__webpack_require__(5547);

__webpack_require__(1624);

__webpack_require__(2047);

__webpack_require__(8534);

__webpack_require__(6257);

__webpack_require__(6941);

__webpack_require__(6486);

__webpack_require__(3114);

__webpack_require__(5128);

__webpack_require__(1000);

__webpack_require__(3275);

__webpack_require__(3524);

__webpack_require__(9344);

__webpack_require__(6369);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(6689));

var _router = __webpack_require__(2199);

var _router1 = __webpack_require__(1587);

var _useIntersection = __webpack_require__(7215);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(function (err) {
    if (false) {}
  });
  var curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  var target = event.currentTarget.target;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  var nodeName = e.currentTarget.nodeName; // anchors inside an svg have a lowercase nodeName

  var isAnchorNodeName = nodeName.toUpperCase() === 'A';

  if (isAnchorNodeName && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); // replace state instead of push if prop is present

  router[replace ? 'replace' : 'push'](href, as, {
    shallow: shallow,
    locale: locale,
    scroll: scroll
  });
}

function Link(props) {
  if (false) { var hasWarned, optionalProps, optionalPropsGuard, requiredProps, requiredPropsGuard; }

  var p = props.prefetch !== false;
  var router = (0, _router1).useRouter();

  var _react$default$useMem = _react.default.useMemo(function () {
    var _resolveHref = (0, _router).resolveHref(router, props.href, true),
        _resolveHref2 = _slicedToArray(_resolveHref, 2),
        resolvedHref = _resolveHref2[0],
        resolvedAs = _resolveHref2[1];

    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]),
      href = _react$default$useMem.href,
      as = _react$default$useMem.as;

  var previousHref = _react.default.useRef(href);

  var previousAs = _react.default.useRef(as);

  var children = props.children,
      replace = props.replace,
      shallow = props.shallow,
      scroll = props.scroll,
      locale = props.locale;

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  var child;

  if (false) {} else {
    child = _react.default.Children.only(children);
  }

  var childRef = child && _typeof(child) === 'object' && child.ref;

  var _useIntersection2 = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  }),
      _useIntersection3 = _slicedToArray(_useIntersection2, 3),
      setIntersectionRef = _useIntersection3[0],
      isVisible = _useIntersection3[1],
      resetVisible = _useIntersection3[2];

  var setRef = _react.default.useCallback(function (el) {
    // Before the link getting observed, check if visible state need to be reset
    if (previousAs.current !== as || previousHref.current !== href) {
      resetVisible();
      previousAs.current = as;
      previousHref.current = href;
    }

    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (_typeof(childRef) === 'object') {
        childRef.current = el;
      }
    }
  }, [as, childRef, href, resetVisible, setIntersectionRef]);

  _react.default.useEffect(function () {
    var shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    var isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  var childProps = {
    ref: setRef,
    onClick: function onClick(e) {
      if (false) {}

      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = function (e) {
    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    if ((0, _router).isLocalURL(href)) {
      prefetch(router, href, as, {
        priority: true
      });
    }
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    var localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports["default"] = _default;

if (typeof exports.default === 'function' || _typeof(exports.default) === 'object' && exports.default !== null) {
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 4979:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(444);

__webpack_require__(1076);

__webpack_require__(1000);

__webpack_require__(5547);

__webpack_require__(1624);

__webpack_require__(2047);

__webpack_require__(8534);

__webpack_require__(643);

__webpack_require__(6257);

__webpack_require__(3524);

__webpack_require__(6369);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

var normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

if (typeof exports.default === 'function' || _typeof(exports.default) === 'object' && exports.default !== null) {
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 6498:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(5547);

__webpack_require__(1000);

__webpack_require__(1117);

__webpack_require__(3114);

__webpack_require__(444);

__webpack_require__(1076);

__webpack_require__(3133);

__webpack_require__(4011);

__webpack_require__(643);

__webpack_require__(1624);

__webpack_require__(4391);

__webpack_require__(2047);

__webpack_require__(8534);

__webpack_require__(2202);

__webpack_require__(6369);

__webpack_require__(3524);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.getMiddlewareManifest = getMiddlewareManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(9565));

var _requestIdleCallback = __webpack_require__(8065);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


var MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  var entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  var resolver;
  var prom = new Promise(function (resolve) {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator() // eslint-disable-next-line no-sequences
  .then(function (value) {
    return resolver(value), value;
  }).catch(function (err) {
    map.delete(key);
    throw err;
  }) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

var canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise(function (res, rej) {
    var selector = "\n      link[rel=\"prefetch\"][href^=\"".concat(href, "\"],\n      link[rel=\"preload\"][href^=\"").concat(href, "\"],\n      script[src^=\"").concat(href, "\"]");

    if (document.querySelector(selector)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = "prefetch";
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

var ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise(function (resolve, reject) {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = function () {
      return reject(markAssetError(new Error("Failed to load script: ".concat(src))));
    }; // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


var devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise(function (resolve, reject) {
    var cancelled = false;
    p.then(function (r) {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (false) {}

    if (true) {
      (0, _requestIdleCallback).requestIdleCallback(function () {
        return setTimeout(function () {
          if (!cancelled) {
            reject(err);
          }
        }, ms);
      });
    }
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  var onBuildManifest = new Promise(function (resolve) {
    // Mandatory because this is not concurrent safe:
    var cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = function () {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getMiddlewareManifest() {
  if (self.__MIDDLEWARE_MANIFEST) {
    return Promise.resolve(self.__MIDDLEWARE_MANIFEST);
  }

  var onMiddlewareManifest = new Promise(function (resolve) {
    var cb = self.__MIDDLEWARE_MANIFEST_CB;

    self.__MIDDLEWARE_MANIFEST_CB = function () {
      resolve(self.__MIDDLEWARE_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onMiddlewareManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client middleware manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(function (manifest) {
    if (!(route in manifest)) {
      throw markAssetError(new Error("Failed to lookup route: ".concat(route)));
    }

    var allFiles = manifest[route].map(function (entry) {
      return assetPrefix + '/_next/' + encodeURI(entry);
    });
    return {
      scripts: allFiles.filter(function (v) {
        return v.endsWith('.js');
      }),
      css: allFiles.filter(function (v) {
        return v.endsWith('.css');
      })
    };
  });
}

function createRouteLoader(assetPrefix) {
  var entrypoints = new Map();
  var loadedScripts = new Map();
  var styleSheets = new Map();
  var routes = new Map();

  function maybeExecuteScript(src) {
    // With HMR we might need to "reload" scripts when they are
    // disposed and readded. Executing scripts twice has no functional
    // differences
    if (true) {
      var prom = loadedScripts.get(src);

      if (prom) {
        return prom;
      } // Skip executing script if it's already in the DOM:


      if (document.querySelector("script[src^=\"".concat(src, "\"]"))) {
        return Promise.resolve();
      }

      loadedScripts.set(src, prom = appendScript(src));
      return prom;
    } else {}
  }

  function fetchStyleSheet(href) {
    var prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(function (res) {
      if (!res.ok) {
        throw new Error("Failed to load stylesheet: ".concat(href));
      }

      return res.text().then(function (text) {
        return {
          href: href,
          content: text
        };
      });
    }).catch(function (err) {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint: function whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },
    onEntrypoint: function onEntrypoint(route, execute) {
      (execute ? Promise.resolve().then(function () {
        return execute();
      }).then(function (exports) {
        return {
          component: exports && exports.default || exports,
          exports: exports
        };
      }, function (err) {
        return {
          error: err
        };
      }) : Promise.resolve(undefined)).then(function (input) {
        var old = entrypoints.get(route);

        if (old && 'resolve' in old) {
          if (input) {
            entrypoints.set(route, input);
            old.resolve(input);
          }
        } else {
          if (input) {
            entrypoints.set(route, input);
          } else {
            entrypoints.delete(route);
          } // when this entrypoint has been resolved before
          // the route is outdated and we want to invalidate
          // this cache entry


          routes.delete(route);
        }
      });
    },
    loadRoute: function loadRoute(route, prefetch) {
      var _this = this;

      return withFuture(route, routes, function () {
        var devBuildPromiseResolve;

        if (false) {}

        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(function (_ref) {
          var scripts = _ref.scripts,
              css = _ref.css;
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(function (res) {
          return _this.whenEntrypoint(route).then(function (entrypoint) {
            return {
              entrypoint: entrypoint,
              styles: res[1]
            };
          });
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error("Route did not complete loading: ".concat(route)))).then(function (_ref2) {
          var entrypoint = _ref2.entrypoint,
              styles = _ref2.styles;
          var res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(function (err) {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        }).finally(function () {
          return devBuildPromiseResolve === null || devBuildPromiseResolve === void 0 ? void 0 : devBuildPromiseResolve();
        });
      });
    },
    prefetch: function prefetch(route) {
      var _this2 = this;

      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      var cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(function (output) {
        return Promise.all(canPrefetch ? output.scripts.map(function (script) {
          return prefetchViaDom(script, 'script');
        }) : []);
      }).then(function () {
        (0, _requestIdleCallback).requestIdleCallback(function () {
          return _this2.loadRoute(route, true).catch(function () {});
        });
      }).catch( // swallow prefetch errors
      function () {});
    }
  };
}

if (typeof exports.default === 'function' || _typeof(exports.default) === 'object' && exports.default !== null) {
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 1587:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(9616);

__webpack_require__(6257);

__webpack_require__(6941);

__webpack_require__(6486);

__webpack_require__(2047);

__webpack_require__(3524);

__webpack_require__(444);

__webpack_require__(1076);

__webpack_require__(5547);

__webpack_require__(1624);

__webpack_require__(8534);

__webpack_require__(1000);

__webpack_require__(3114);

__webpack_require__(3275);

__webpack_require__(6369);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function get() {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function get() {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(6689));

var _router = _interopRequireDefault(__webpack_require__(2199));

var _routerContext = __webpack_require__(4964);

var _isError = _interopRequireDefault(__webpack_require__(676));

var _withRouter = _interopRequireDefault(__webpack_require__(4269));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var singletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router.default.events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error((0, _isError).default(err) ? "".concat(err.message, "\n").concat(err.stack) : err + '');
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports["default"] = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router.default, args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  var scopedRouter = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (_typeof(scopedRouter[property]) === 'object') {
        instance[property] = Object.assign(Array.isArray(scopedRouter[property]) ? [] : {}, scopedRouter[property]) // makes sure query is not stateful
        ;
        continue;
      }

      instance[property] = scopedRouter[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router.default.events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return scopedRouter[field].apply(scopedRouter, arguments);
    };
  });
  return instance;
}

if (typeof exports.default === 'function' || _typeof(exports.default) === 'object' && exports.default !== null) {
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 7215:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(444);

__webpack_require__(1076);

__webpack_require__(5547);

__webpack_require__(6257);

__webpack_require__(6941);

__webpack_require__(6486);

__webpack_require__(3524);

__webpack_require__(3015);

__webpack_require__(3794);

__webpack_require__(1624);

__webpack_require__(4391);

__webpack_require__(1000);

__webpack_require__(2047);

__webpack_require__(8534);

__webpack_require__(6706);

__webpack_require__(3275);

__webpack_require__(6369);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(6689);

var _requestIdleCallback = __webpack_require__(8065);

var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection(_ref) {
  var rootRef = _ref.rootRef,
      rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;
  var unobserve = (0, _react).useRef();

  var _useState = (0, _react).useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = (0, _react).useState(rootRef ? rootRef.current : null),
      _useState4 = _slicedToArray(_useState3, 2),
      root = _useState4[0],
      setRoot = _useState4[1];

  var setRef = (0, _react).useCallback(function (el) {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, function (isVisible) {
        return isVisible && setVisible(isVisible);
      }, {
        root: root,
        rootMargin: rootMargin
      });
    }
  }, [isDisabled, root, rootMargin, visible]);
  var resetVisible = (0, _react).useCallback(function () {
    setVisible(false);
  }, []);
  (0, _react).useEffect(function () {
    if (!hasIntersectionObserver) {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback).requestIdleCallback(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
        };
      }
    }
  }, [visible]);
  (0, _react).useEffect(function () {
    if (rootRef) setRoot(rootRef.current);
  }, [rootRef]);
  return [setRef, visible, resetVisible];
}

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
      var index = idList.findIndex(function (obj) {
        return obj.root === id.root && obj.margin === id.margin;
      });

      if (index > -1) {
        idList.splice(index, 1);
      }
    }
  };
}

var observers = new Map();
var idList = [];

function createObserver(options) {
  var id = {
    root: options.root || null,
    margin: options.rootMargin || ''
  };
  var existing = idList.find(function (obj) {
    return obj.root === id.root && obj.margin === id.margin;
  });
  var instance;

  if (existing) {
    instance = observers.get(existing);
  } else {
    instance = observers.get(id);
    idList.push(id);
  }

  if (instance) {
    return instance;
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id: id,
    observer: observer,
    elements: elements
  });
  return instance;
}

if (typeof exports.default === 'function' || _typeof(exports.default) === 'object' && exports.default !== null) {
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 4269:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(444);

__webpack_require__(1076);

__webpack_require__(1000);

__webpack_require__(5547);

__webpack_require__(1624);

__webpack_require__(2047);

__webpack_require__(8534);

__webpack_require__(6369);

__webpack_require__(6941);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(6689));

var _router = __webpack_require__(1587);

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

if (typeof exports.default === 'function' || _typeof(exports.default) === 'object' && exports.default !== null) {
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 2199:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(5547);

__webpack_require__(6941);

__webpack_require__(6486);

__webpack_require__(9270);

__webpack_require__(5301);

__webpack_require__(5226);

__webpack_require__(6369);

__webpack_require__(4182);

__webpack_require__(3114);

__webpack_require__(6257);

__webpack_require__(1624);

__webpack_require__(1000);

__webpack_require__(2047);

__webpack_require__(8534);

__webpack_require__(6955);

__webpack_require__(8927);

__webpack_require__(5128);

__webpack_require__(7994);

__webpack_require__(3524);

__webpack_require__(9344);

__webpack_require__(887);

__webpack_require__(3133);

__webpack_require__(3275);

__webpack_require__(3600);

__webpack_require__(6770);

__webpack_require__(3317);

__webpack_require__(685);

__webpack_require__(444);

__webpack_require__(1076);

__webpack_require__(1117);

__webpack_require__(2773);

__webpack_require__(4354);

__webpack_require__(4011);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports["default"] = void 0;

var _normalizeTrailingSlash = __webpack_require__(4979);

var _routeLoader = __webpack_require__(6498);

var _isError = _interopRequireWildcard(__webpack_require__(676));

var _denormalizePagePath = __webpack_require__(562);

var _normalizeLocalePath = __webpack_require__(4014);

var _mitt = _interopRequireDefault(__webpack_require__(8020));

var _utils = __webpack_require__(9232);

var _isDynamic = __webpack_require__(1428);

var _parseRelativeUrl = __webpack_require__(1292);

var _querystring = __webpack_require__(979);

var _resolveRewrites = _interopRequireDefault(__webpack_require__(6052));

var _routeMatcher = __webpack_require__(4226);

var _routeRegex = __webpack_require__(5052);

var _getMiddlewareRegex = __webpack_require__(4365);

var _formatUrl = __webpack_require__(3938);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

var detectDomainLocale;

if (false) {}

var basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  if (!path.startsWith('/') || !prefix) {
    return path;
  }

  var pathname = pathNoQueryHash(path);
  return (0, _normalizeTrailingSlash).normalizePathTrailingSlash("".concat(prefix).concat(pathname)) + path.slice(pathname.length);
}

function hasPathPrefix(path, prefix) {
  path = pathNoQueryHash(path);
  return path === prefix || path.startsWith(prefix + '/');
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) { var detectedDomain; } else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) { var localeLower, pathLower, pathname; }

  return path;
}

function delLocale(path, locale) {
  if (false) { var localeLower, pathLower, pathname; }

  return path;
}

function pathNoQueryHash(path) {
  var queryIndex = path.indexOf('?');
  var hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  return hasPathPrefix(path, basePath);
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = "/".concat(path);
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    var locationOrigin = (0, _utils).getLocationOrigin();
    var resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  var interpolatedRoute = '';
  var dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  var dynamicGroups = dynamicRegex.groups;
  var dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  var params = Object.keys(dynamicGroups);

  if (!params.every(function (param) {
    var value = dynamicMatches[param] || '';
    var _dynamicGroups$param = dynamicGroups[param],
        repeat = _dynamicGroups$param.repeat,
        optional = _dynamicGroups$param.optional; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    var replaced = "[".concat(repeat ? '...' : '').concat(param, "]");

    if (optional) {
      replaced = "".concat(!value ? '/' : '', "[").concat(replaced, "]");
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    function (segment) {
      return encodeURIComponent(segment);
    }).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params: params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  var filteredQuery = {};
  Object.keys(query).forEach(function (key) {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  var base;
  var urlAsString = typeof href === 'string' ? href : (0, _formatUrl).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  var urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  var urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
  var urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error("Invalid href passed to next/router: ".concat(urlAsString, ", repeated forward-slashes (//) or backslashes \\ are not valid in the href"));
    var normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    var finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    var interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      var query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);

      var _interpolateAs = interpolateAs(finalUrl.pathname, finalUrl.pathname, query),
          result = _interpolateAs.result,
          params = _interpolateAs.params;

      if (result) {
        interpolatedAs = (0, _formatUrl).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    var resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_1) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  var origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  var _resolveHref = resolveHref(router, url, true),
      _resolveHref2 = _slicedToArray(_resolveHref, 2),
      resolvedHref = _resolveHref2[0],
      resolvedAs = _resolveHref2[1];

  var origin = (0, _utils).getLocationOrigin();
  var hrefHadOrigin = resolvedHref.startsWith(origin);
  var asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  var preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  var preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  var cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(function (page) {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

var manualScrollRestoration = (/* unused pure expression or super */ null && ( false && 0));
var SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts, opts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(function (res) {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1, opts);
      }

      if (res.status === 404) {
        return res.json().then(function (data) {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error("Failed to load static props");
        });
      }

      throw new Error("Failed to load static props");
    }

    return opts.text ? res.text() : res.json();
  });
}

function fetchNextData(dataHref, isServerRender, text, inflightCache, persistCache) {
  var _URL = new URL(dataHref, window.location.href),
      cacheKey = _URL.href;

  if (inflightCache[cacheKey] !== undefined) {
    return inflightCache[cacheKey];
  }

  return inflightCache[cacheKey] = fetchRetry(dataHref, isServerRender ? 3 : 1, {
    text: text
  }).catch(function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  }).then(function (data) {
    if (!persistCache || false) {
      delete inflightCache[cacheKey];
    }

    return data;
  }).catch(function (err) {
    delete inflightCache[cacheKey];
    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname1, query1, as1, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback,
        locale = _ref.locale,
        locales = _ref.locales,
        defaultLocale = _ref.defaultLocale,
        domainLocales = _ref.domainLocales,
        isPreview = _ref.isPreview,
        isRsc = _ref.isRsc;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {}; // In-flight middleware preflight requests

    this.sde = {};
    this._idx = 0;

    this.onPopState = function (e) {
      var state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            query = _this.query;

        _this.changeState('replaceState', (0, _formatUrl).formatWithValidation({
          pathname: addBasePath(_pathname),
          query: query
        }), (0, _utils).getURL());

        return;
      }

      if (!state.__N) {
        return;
      }

      var forcedScroll;
      var url = state.url,
          as = state.as,
          options = state.options,
          idx = state.idx;

      if (false) { var v; }

      _this._idx = idx;

      var _parseRelativeUrl2 = (0, _parseRelativeUrl).parseRelativeUrl(url),
          pathname = _parseRelativeUrl2.pathname; // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (_this.isSsr && as === addBasePath(_this.asPath) && pathname === addBasePath(_this.pathname)) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(state)) {
        return;
      }

      _this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && _this._shallow,
        locale: options.locale || _this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    var route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[route] = {
        Component: Component,
        initial: true,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP,
        __N_RSC: !!isRsc
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    var autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isLocaleDomain = false;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);

    if (false) {}

    this.state = {
      route: route,
      pathname: pathname1,
      query: query1,
      asPath: autoExportDynamic ? pathname1 : as1,
      isPreview: !!isPreview,
      locale:  false ? 0 : undefined,
      isFallback: isFallback
    };

    if (false) { var options; }
  }

  _createClass(Router, [{
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
    * Go back in history
    */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "push",
    value: function push(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (false) {}

      var _prepareUrlAs = prepareUrlAs(this, url, as);

      url = _prepareUrlAs.url;
      as = _prepareUrlAs.as;
      return this.change('pushState', url, as, options);
    }
    /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "replace",
    value: function replace(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _prepareUrlAs2 = prepareUrlAs(this, url, as);

      url = _prepareUrlAs2.url;
      as = _prepareUrlAs2.as;
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function () {
      var _change = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(method, url, as, options, forcedScroll) {
        var shouldResolveHref, nextState, prevLocale, parsedAs, localePathResult, didNavigate, ref, detectedDomain, asNoBasePath, _options$shallow, shallow, _options$scroll, scroll, routeProps, cleanedAs, localeChange, parsed, pathname, query, pages, rewrites, _yield$Promise$all, _yield$Promise$all2, resolvedAs, rewritesResult, effect, route, _parsedAs, asPathname, routeRegex, routeMatch, shouldInterpolate, interpolatedAs, missingParams, ref1, ref2, routeInfo, _routeInfo, error, props, __N_SSG, __N_SSP, destination, parsedHref, _prepareUrlAs3, newUrl, newAs, notFoundRoute, isValidShallowRoute, _scroll, shouldScroll, resetScroll;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (isLocalURL(url)) {
                  _context.next = 3;
                  break;
                }

                window.location.href = url;
                return _context.abrupt("return", false);

              case 3:
                shouldResolveHref = options._h || options._shouldResolveHref || pathNoQueryHash(url) === pathNoQueryHash(as);
                nextState = _objectSpread({}, this.state); // for static pages with query params in the URL we delay
                // marking the router ready until after the query is updated

                if (options._h) {
                  this.isReady = true;
                }

                prevLocale = nextState.locale;

                if (true) {
                  _context.next = 19;
                  break;
                }

                nextState.locale = options.locale === false ? this.defaultLocale : options.locale || nextState.locale;

                if (typeof options.locale === 'undefined') {
                  options.locale = nextState.locale;
                }

                parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(hasBasePath(as) ? delBasePath(as) : as);
                localePathResult = (0, _normalizeLocalePath).normalizeLocalePath(parsedAs.pathname, this.locales);

                if (localePathResult.detectedLocale) {
                  nextState.locale = localePathResult.detectedLocale;
                  parsedAs.pathname = addBasePath(parsedAs.pathname);
                  as = (0, _formatUrl).formatWithValidation(parsedAs);
                  url = addBasePath((0, _normalizeLocalePath).normalizeLocalePath(hasBasePath(url) ? delBasePath(url) : url, this.locales).pathname);
                }

                didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                detectedDomain = detectDomainLocale(this.domainLocales, undefined, nextState.locale); // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                if (!didNavigate) {
                  _context.next = 19;
                  break;
                }

                return _context.abrupt("return", new Promise(function () {}));

              case 19:
                if (!options._h) {
                  this.isSsr = false;
                } // marking route changes as a navigation start entry


                if (_utils.ST) {
                  performance.mark('routeChange');
                }

                _options$shallow = options.shallow, shallow = _options$shallow === void 0 ? false : _options$shallow, _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll;
                routeProps = {
                  shallow: shallow
                };

                if (this._inFlightRoute) {
                  this.abortComponentLoad(this._inFlightRoute, routeProps);
                }

                as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
                cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, nextState.locale);
                this._inFlightRoute = as;
                localeChange = prevLocale !== nextState.locale; // If the url change is only related to a hash change
                // We should not proceed. We should only change the state.
                // WARNING: `_h` is an internal option for handing Next.js client-side
                // hydration. Your app should _never_ use this property. It may change at
                // any time without notice.

                if (!(!options._h && this.onlyAHashChange(cleanedAs) && !localeChange)) {
                  _context.next = 36;
                  break;
                }

                nextState.asPath = cleanedAs;
                Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

                this.changeState(method, url, as, _objectSpread(_objectSpread({}, options), {}, {
                  scroll: false
                }));

                if (scroll) {
                  this.scrollToHash(cleanedAs);
                }

                this.set(nextState, this.components[nextState.route], null);
                Router.events.emit('hashChangeComplete', as, routeProps);
                return _context.abrupt("return", true);

              case 36:
                parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
                pathname = parsed.pathname, query = parsed.query; // The build manifest needs to be loaded before auto-static dynamic pages
                // get their query parameters to allow ensuring they can be parsed properly
                // when rewritten to

                _context.prev = 38;
                _context.next = 41;
                return Promise.all([this.pageLoader.getPageList(), (0, _routeLoader).getClientBuildManifest(), this.pageLoader.getMiddlewareList()]);

              case 41:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                pages = _yield$Promise$all2[0];
                rewrites = _yield$Promise$all2[1].__rewrites;
                _context.next = 51;
                break;

              case 47:
                _context.prev = 47;
                _context.t0 = _context["catch"](38);
                // If we fail to resolve the page list or client-build manifest, we must
                // do a server-side transition:
                window.location.href = as;
                return _context.abrupt("return", false);

              case 51:
                // If asked to change the current URL we should reload the current page
                // (not location.reload() but reload getInitialProps and other Next.js stuffs)
                // We also need to set the method = replaceState always
                // as this should not go into the history (That's how browsers work)
                // We should compare the new asPath to the current asPath, not the url
                if (!this.urlIsNew(cleanedAs) && !localeChange) {
                  method = 'replaceState';
                } // we need to resolve the as value using rewrites for dynamic SSG
                // pages to allow building the data URL correctly


                resolvedAs = as; // url and as should always be prefixed with basePath by this
                // point by either next/link or router.push/replace so strip the
                // basePath from the pathname to match the pages dir 1-to-1

                pathname = pathname ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname)) : pathname;

                if (!(shouldResolveHref && pathname !== '/_error')) {
                  _context.next = 67;
                  break;
                }

                options._shouldResolveHref = true;

                if (true) {
                  _context.next = 65;
                  break;
                }

                rewritesResult = (0, _resolveRewrites).default(addBasePath(addLocale(cleanedAs, nextState.locale)), pages, rewrites, query, function (p) {
                  return resolveDynamicRoute(p, pages);
                }, this.locales);

                if (!rewritesResult.externalDest) {
                  _context.next = 61;
                  break;
                }

                location.href = as;
                return _context.abrupt("return", true);

              case 61:
                resolvedAs = rewritesResult.asPath;

                if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
                  // if this directly matches a page we need to update the href to
                  // allow the correct page chunk to be loaded
                  pathname = rewritesResult.resolvedHref;
                  parsed.pathname = addBasePath(pathname);
                  url = (0, _formatUrl).formatWithValidation(parsed);
                }

                _context.next = 67;
                break;

              case 65:
                parsed.pathname = resolveDynamicRoute(pathname, pages);

                if (parsed.pathname !== pathname) {
                  pathname = parsed.pathname;
                  parsed.pathname = addBasePath(pathname);
                  url = (0, _formatUrl).formatWithValidation(parsed);
                }

              case 67:
                if (isLocalURL(as)) {
                  _context.next = 72;
                  break;
                }

                if (true) {
                  _context.next = 70;
                  break;
                }

                throw new Error("Invalid href: \"".concat(url, "\" and as: \"").concat(as, "\", received relative href and external as") + "\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as");

              case 70:
                window.location.href = as;
                return _context.abrupt("return", false);

              case 72:
                resolvedAs = delLocale(delBasePath(resolvedAs), nextState.locale);
                /**
                * If the route update was triggered for client-side hydration and
                * the rendered route is not dynamic do not check the preflight
                * request as it is not necessary.
                */

                if (!((!options.shallow || options._h === 1) && (options._h !== 1 || (0, _isDynamic).isDynamicRoute((0, _normalizeTrailingSlash).removePathTrailingSlash(pathname))))) {
                  _context.next = 97;
                  break;
                }

                _context.next = 76;
                return this._preflightRequest({
                  as: as,
                  cache: true,
                  pages: pages,
                  pathname: pathname,
                  query: query,
                  locale: nextState.locale,
                  isPreview: nextState.isPreview
                });

              case 76:
                effect = _context.sent;

                if (!(effect.type === 'rewrite')) {
                  _context.next = 85;
                  break;
                }

                query = _objectSpread(_objectSpread({}, query), effect.parsedAs.query);
                resolvedAs = effect.asPath;
                pathname = effect.resolvedHref;
                parsed.pathname = effect.resolvedHref;
                url = (0, _formatUrl).formatWithValidation(parsed);
                _context.next = 97;
                break;

              case 85:
                if (!(effect.type === 'redirect' && effect.newAs)) {
                  _context.next = 89;
                  break;
                }

                return _context.abrupt("return", this.change(method, effect.newUrl, effect.newAs, options));

              case 89:
                if (!(effect.type === 'redirect' && effect.destination)) {
                  _context.next = 94;
                  break;
                }

                window.location.href = effect.destination;
                return _context.abrupt("return", new Promise(function () {}));

              case 94:
                if (!(effect.type === 'refresh' && as !== window.location.pathname)) {
                  _context.next = 97;
                  break;
                }

                window.location.href = as;
                return _context.abrupt("return", new Promise(function () {}));

              case 97:
                route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);

                if (!(0, _isDynamic).isDynamicRoute(route)) {
                  _context.next = 113;
                  break;
                }

                _parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
                asPathname = _parsedAs.pathname;
                routeRegex = (0, _routeRegex).getRouteRegex(route);
                routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
                shouldInterpolate = route === asPathname;
                interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

                if (!(!routeMatch || shouldInterpolate && !interpolatedAs.result)) {
                  _context.next = 112;
                  break;
                }

                missingParams = Object.keys(routeRegex.groups).filter(function (param) {
                  return !query[param];
                });

                if (!(missingParams.length > 0)) {
                  _context.next = 110;
                  break;
                }

                if (false) {}

                throw new Error((shouldInterpolate ? "The provided `href` (".concat(url, ") value is missing query values (").concat(missingParams.join(', '), ") to be interpolated properly. ") : "The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ")) + "Read more: https://nextjs.org/docs/messages/".concat(shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'));

              case 110:
                _context.next = 113;
                break;

              case 112:
                if (shouldInterpolate) {
                  as = (0, _formatUrl).formatWithValidation(Object.assign({}, _parsedAs, {
                    pathname: interpolatedAs.result,
                    query: omitParmsFromQuery(query, interpolatedAs.params)
                  }));
                } else {
                  // Merge params into `query`, overwriting any specified in search
                  Object.assign(query, routeMatch);
                }

              case 113:
                Router.events.emit('routeChangeStart', as, routeProps);
                _context.prev = 114;
                _context.next = 117;
                return this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps, nextState.locale, nextState.isPreview);

              case 117:
                routeInfo = _context.sent;
                _routeInfo = routeInfo, error = _routeInfo.error, props = _routeInfo.props, __N_SSG = _routeInfo.__N_SSG, __N_SSP = _routeInfo.__N_SSP; // handle redirect on client-transition

                if (!((__N_SSG || __N_SSP) && props)) {
                  _context.next = 143;
                  break;
                }

                if (!(props.pageProps && props.pageProps.__N_REDIRECT)) {
                  _context.next = 129;
                  break;
                }

                destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
                // client-navigation if it is falling back to hard navigation if
                // it's not

                if (!(destination.startsWith('/') && props.pageProps.__N_REDIRECT_BASE_PATH !== false)) {
                  _context.next = 127;
                  break;
                }

                parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
                parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
                _prepareUrlAs3 = prepareUrlAs(this, destination, destination), newUrl = _prepareUrlAs3.url, newAs = _prepareUrlAs3.as;
                return _context.abrupt("return", this.change(method, newUrl, newAs, options));

              case 127:
                window.location.href = destination;
                return _context.abrupt("return", new Promise(function () {}));

              case 129:
                nextState.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

                if (!(props.notFound === SSG_DATA_NOT_FOUND)) {
                  _context.next = 143;
                  break;
                }

                _context.prev = 131;
                _context.next = 134;
                return this.fetchComponent('/404');

              case 134:
                notFoundRoute = '/404';
                _context.next = 140;
                break;

              case 137:
                _context.prev = 137;
                _context.t1 = _context["catch"](131);
                notFoundRoute = '/_error';

              case 140:
                _context.next = 142;
                return this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
                  shallow: false
                }, nextState.locale, nextState.isPreview);

              case 142:
                routeInfo = _context.sent;

              case 143:
                Router.events.emit('beforeHistoryChange', as, routeProps);
                this.changeState(method, url, as, options);

                if (options._h && pathname === '/_error' && ((ref1 = self.__NEXT_DATA__.props) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.pageProps) === null || ref2 === void 0 ? void 0 : ref2.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
                  // ensure statusCode is still correct for static 500 page
                  // when updating query information
                  props.pageProps.statusCode = 500;
                } // shallow routing is only allowed for same page URL changes.


                isValidShallowRoute = options.shallow && nextState.route === route;
                shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
                resetScroll = shouldScroll ? {
                  x: 0,
                  y: 0
                } : null;
                _context.next = 151;
                return this.set(_objectSpread(_objectSpread({}, nextState), {}, {
                  route: route,
                  pathname: pathname,
                  query: query,
                  asPath: cleanedAs,
                  isFallback: false
                }), routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(function (e) {
                  if (e.cancelled) error = error || e;else throw e;
                });

              case 151:
                if (!error) {
                  _context.next = 154;
                  break;
                }

                Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
                throw error;

              case 154:
                if (false) {}

                Router.events.emit('routeChangeComplete', as, routeProps);
                return _context.abrupt("return", true);

              case 159:
                _context.prev = 159;
                _context.t2 = _context["catch"](114);

                if (!((0, _isError).default(_context.t2) && _context.t2.cancelled)) {
                  _context.next = 163;
                  break;
                }

                return _context.abrupt("return", false);

              case 163:
                throw _context.t2;

              case 164:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[38, 47], [114, 159], [131, 137]]);
      }));

      function change(_x, _x2, _x3, _x4, _x5) {
        return _change.apply(this, arguments);
      }

      return change;
    }()
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (false) {}

      if (method !== 'pushState' || (0, _utils).getURL() !== as) {
        this._shallow = options.shallow;
        window.history[method]({
          url: url,
          as: as,
          options: options,
          __N: true,
          idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "handleRouteInfoError",
    value: function () {
      var _handleRouteInfoError = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(err, pathname, query, as, routeProps, loadErrorFail) {
        var Component, styleSheets, props, _yield$this$fetchComp, routeInfo;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!err.cancelled) {
                  _context2.next = 2;
                  break;
                }

                throw err;

              case 2:
                if (!((0, _routeLoader).isAssetError(err) || loadErrorFail)) {
                  _context2.next = 6;
                  break;
                }

                Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.

                window.location.href = as; // Changing the URL doesn't block executing the current code path.
                // So let's throw a cancellation error stop the routing logic.

                throw buildCancellationError();

              case 6:
                _context2.prev = 6;

                if (!(typeof Component === 'undefined' || typeof styleSheets === 'undefined')) {
                  _context2.next = 13;
                  break;
                }

                _context2.next = 10;
                return this.fetchComponent('/_error');

              case 10:
                _yield$this$fetchComp = _context2.sent;
                Component = _yield$this$fetchComp.page;
                styleSheets = _yield$this$fetchComp.styleSheets;

              case 13:
                routeInfo = {
                  props: props,
                  Component: Component,
                  styleSheets: styleSheets,
                  err: err,
                  error: err
                };

                if (routeInfo.props) {
                  _context2.next = 25;
                  break;
                }

                _context2.prev = 15;
                _context2.next = 18;
                return this.getInitialProps(Component, {
                  err: err,
                  pathname: pathname,
                  query: query
                });

              case 18:
                routeInfo.props = _context2.sent;
                _context2.next = 25;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2["catch"](15);
                console.error('Error in error page `getInitialProps`: ', _context2.t0);
                routeInfo.props = {};

              case 25:
                return _context2.abrupt("return", routeInfo);

              case 28:
                _context2.prev = 28;
                _context2.t1 = _context2["catch"](6);
                return _context2.abrupt("return", this.handleRouteInfoError((0, _isError).default(_context2.t1) ? _context2.t1 : new Error(_context2.t1 + ''), pathname, query, as, routeProps, true));

              case 31:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 28], [15, 21]]);
      }));

      function handleRouteInfoError(_x6, _x7, _x8, _x9, _x10, _x11) {
        return _handleRouteInfoError.apply(this, arguments);
      }

      return handleRouteInfoError;
    }()
  }, {
    key: "getRouteInfo",
    value: function () {
      var _getRouteInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(route, pathname, query, as, resolvedAs, routeProps, locale, isPreview) {
        var _this2 = this;

        var existingRouteInfo, cachedRouteInfo, routeInfo, Component, __N_SSG, __N_SSP, __N_RSC, _require, isValidElementType, dataHref, useStreamedFlightData, props, _yield$this$_getData, data, __flight__;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                existingRouteInfo = this.components[route];

                if (!(routeProps.shallow && existingRouteInfo && this.route === route)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", existingRouteInfo);

              case 4:
                cachedRouteInfo = undefined; // can only use non-initial route info
                // cannot reuse route info in development since it can change after HMR

                if ( true && existingRouteInfo && !('initial' in existingRouteInfo)) {
                  cachedRouteInfo = existingRouteInfo;
                }

                _context3.t0 = cachedRouteInfo;

                if (_context3.t0) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 10;
                return this.fetchComponent(route).then(function (res) {
                  return {
                    Component: res.page,
                    styleSheets: res.styleSheets,
                    __N_SSG: res.mod.__N_SSG,
                    __N_SSP: res.mod.__N_SSP,
                    __N_RSC: !!res.mod.__next_rsc__
                  };
                });

              case 10:
                _context3.t0 = _context3.sent;

              case 11:
                routeInfo = _context3.t0;
                Component = routeInfo.Component, __N_SSG = routeInfo.__N_SSG, __N_SSP = routeInfo.__N_SSP, __N_RSC = routeInfo.__N_RSC;

                if (true) {
                  _context3.next = 17;
                  break;
                }

                _require = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next/dist/compiled/react-is'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), isValidElementType = _require.isValidElementType;

                if (isValidElementType(Component)) {
                  _context3.next = 17;
                  break;
                }

                throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));

              case 17:
                // For server components, non-SSR pages will have statically optimized
                // flight data in a production build.
                // So only development and SSR pages will always have the real-time
                // generated and streamed flight data.
                useStreamedFlightData = ( false || __N_SSP) && __N_RSC;

                if (__N_SSG || __N_SSP || __N_RSC) {
                  dataHref = this.pageLoader.getDataHref({
                    href: (0, _formatUrl).formatWithValidation({
                      pathname: pathname,
                      query: query
                    }),
                    asPath: resolvedAs,
                    ssg: __N_SSG,
                    flight: useStreamedFlightData,
                    locale: locale
                  });
                }

                _context3.next = 21;
                return this._getData(function () {
                  return (__N_SSG || __N_SSP || __N_RSC) && !useStreamedFlightData ? fetchNextData(dataHref, _this2.isSsr, false, __N_SSG ? _this2.sdc : _this2.sdr, !!__N_SSG && !isPreview) : _this2.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
                  {
                    pathname: pathname,
                    query: query,
                    asPath: as,
                    locale: locale,
                    locales: _this2.locales,
                    defaultLocale: _this2.defaultLocale
                  });
                });

              case 21:
                props = _context3.sent;

                if (!__N_RSC) {
                  _context3.next = 33;
                  break;
                }

                if (!useStreamedFlightData) {
                  _context3.next = 31;
                  break;
                }

                _context3.next = 26;
                return this._getData(function () {
                  return _this2._getFlightData(dataHref);
                });

              case 26:
                _yield$this$_getData = _context3.sent;
                data = _yield$this$_getData.data;
                props.pageProps = Object.assign(props.pageProps, {
                  __flight__: data
                });
                _context3.next = 33;
                break;

              case 31:
                __flight__ = props.__flight__;
                props.pageProps = Object.assign({}, props.pageProps, {
                  __flight__: __flight__
                });

              case 33:
                routeInfo.props = props;
                this.components[route] = routeInfo;
                return _context3.abrupt("return", routeInfo);

              case 38:
                _context3.prev = 38;
                _context3.t1 = _context3["catch"](0);
                return _context3.abrupt("return", this.handleRouteInfoError((0, _isError).getProperError(_context3.t1), pathname, query, as, routeProps));

              case 41:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 38]]);
      }));

      function getRouteInfo(_x12, _x13, _x14, _x15, _x16, _x17, _x18, _x19) {
        return _getRouteInfo.apply(this, arguments);
      }

      return getRouteInfo;
    }()
  }, {
    key: "set",
    value: function set(state, data, resetScroll) {
      this.state = state;
      return this.sub(data, this.components['/_app'].Component, resetScroll);
    }
    /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          _as$split4$ = _as$split4[1],
          hash = _as$split4$ === void 0 ? '' : _as$split4$; // Scroll to top if the hash is just `#` with no value or `#top`
      // To mirror browsers


      if (hash === '' || hash === 'top') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */

  }, {
    key: "prefetch",
    value: function () {
      var _prefetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(url) {
        var _this3 = this;

        var asPath,
            options,
            parsed,
            pathname,
            query,
            parsedAs,
            localePathResult,
            pages,
            resolvedAs,
            rewrites,
            _yield$getClientBuild,
            rewritesResult,
            effects,
            route,
            _args4 = arguments;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                asPath = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : url;
                options = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
                parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
                pathname = parsed.pathname, query = parsed.query;

                if (false) {}

                _context4.next = 7;
                return this.pageLoader.getPageList();

              case 7:
                pages = _context4.sent;
                resolvedAs = asPath;

                if (true) {
                  _context4.next = 21;
                  break;
                }

                _context4.next = 12;
                return (0, _routeLoader).getClientBuildManifest();

              case 12:
                _yield$getClientBuild = _context4.sent;
                rewrites = _yield$getClientBuild.__rewrites;
                rewritesResult = (0, _resolveRewrites).default(addBasePath(addLocale(asPath, this.locale)), pages, rewrites, parsed.query, function (p) {
                  return resolveDynamicRoute(p, pages);
                }, this.locales);

                if (!rewritesResult.externalDest) {
                  _context4.next = 17;
                  break;
                }

                return _context4.abrupt("return");

              case 17:
                resolvedAs = delLocale(delBasePath(rewritesResult.asPath), this.locale);

                if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
                  // if this directly matches a page we need to update the href to
                  // allow the correct page chunk to be loaded
                  pathname = rewritesResult.resolvedHref;
                  parsed.pathname = pathname;
                  url = (0, _formatUrl).formatWithValidation(parsed);
                }

                _context4.next = 23;
                break;

              case 21:
                parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

                if (parsed.pathname !== pathname) {
                  pathname = parsed.pathname;
                  parsed.pathname = pathname;
                  url = (0, _formatUrl).formatWithValidation(parsed);
                }

              case 23:
                if (true) {
                  _context4.next = 25;
                  break;
                }

                return _context4.abrupt("return");

              case 25:
                _context4.next = 27;
                return this._preflightRequest({
                  as: addBasePath(asPath),
                  cache: true,
                  pages: pages,
                  pathname: pathname,
                  query: query,
                  locale: this.locale,
                  isPreview: this.isPreview
                });

              case 27:
                effects = _context4.sent;

                if (effects.type === 'rewrite') {
                  parsed.pathname = effects.resolvedHref;
                  pathname = effects.resolvedHref;
                  query = _objectSpread(_objectSpread({}, query), effects.parsedAs.query);
                  resolvedAs = effects.asPath;
                  url = (0, _formatUrl).formatWithValidation(parsed);
                }

                route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
                _context4.next = 32;
                return Promise.all([this.pageLoader._isSsg(route).then(function (isSsg) {
                  return isSsg ? fetchNextData(_this3.pageLoader.getDataHref({
                    href: url,
                    asPath: resolvedAs,
                    ssg: true,
                    locale: typeof options.locale !== 'undefined' ? options.locale : _this3.locale
                  }), false, false, _this3.sdc, true) : false;
                }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);

              case 32:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function prefetch(_x20) {
        return _prefetch.apply(this, arguments);
      }

      return prefetch;
    }()
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(route) {
        var _this4 = this;

        var cancelled, cancel, handleCancelled, componentResult;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                cancelled = false;

                cancel = this.clc = function () {
                  cancelled = true;
                };

                handleCancelled = function handleCancelled() {
                  if (cancelled) {
                    var error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                    error.cancelled = true;
                    throw error;
                  }

                  if (cancel === _this4.clc) {
                    _this4.clc = null;
                  }
                };

                _context5.prev = 3;
                _context5.next = 6;
                return this.pageLoader.loadPage(route);

              case 6:
                componentResult = _context5.sent;
                handleCancelled();
                return _context5.abrupt("return", componentResult);

              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](3);
                handleCancelled();
                throw _context5.t0;

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[3, 11]]);
      }));

      function fetchComponent(_x21) {
        return _fetchComponent.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "_getFlightData",
    value: function _getFlightData(dataHref) {
      // Do not cache RSC flight response since it's not a static resource
      return fetchNextData(dataHref, true, true, this.sdc, false).then(function (serialized) {
        return {
          data: serialized
        };
      });
    }
  }, {
    key: "_preflightRequest",
    value: function () {
      var _preflightRequest2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(options) {
        var asPathname, cleanedAs, fns, requiresPreflight, preflightHref, preflight, parsed, fsPathname, matchedPage, resolvedHref, cleanRedirect, _prepareUrlAs4, newUrl, newAs;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                asPathname = pathNoQueryHash(options.as);
                cleanedAs = delLocale(hasBasePath(asPathname) ? delBasePath(asPathname) : asPathname, options.locale);
                _context6.next = 4;
                return this.pageLoader.getMiddlewareList();

              case 4:
                fns = _context6.sent;
                requiresPreflight = fns.some(function (_ref2) {
                  var _ref3 = _slicedToArray(_ref2, 2),
                      middleware = _ref3[0],
                      isSSR = _ref3[1];

                  return (0, _routeMatcher).getRouteMatcher((0, _getMiddlewareRegex).getMiddlewareRegex(middleware, !isSSR))(cleanedAs);
                });

                if (requiresPreflight) {
                  _context6.next = 8;
                  break;
                }

                return _context6.abrupt("return", {
                  type: 'next'
                });

              case 8:
                preflightHref = addLocale(options.as, options.locale);
                _context6.prev = 9;
                _context6.next = 12;
                return this._getPreflightData({
                  preflightHref: preflightHref,
                  shouldCache: options.cache,
                  isPreview: options.isPreview
                });

              case 12:
                preflight = _context6.sent;
                _context6.next = 18;
                break;

              case 15:
                _context6.prev = 15;
                _context6.t0 = _context6["catch"](9);
                return _context6.abrupt("return", {
                  type: 'redirect',
                  destination: options.as
                });

              case 18:
                if (!preflight.rewrite) {
                  _context6.next = 25;
                  break;
                }

                if (preflight.rewrite.startsWith('/')) {
                  _context6.next = 21;
                  break;
                }

                return _context6.abrupt("return", {
                  type: 'redirect',
                  destination: options.as
                });

              case 21:
                parsed = (0, _parseRelativeUrl).parseRelativeUrl((0, _normalizeLocalePath).normalizeLocalePath(hasBasePath(preflight.rewrite) ? delBasePath(preflight.rewrite) : preflight.rewrite, this.locales).pathname);
                fsPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash(parsed.pathname);

                if (options.pages.includes(fsPathname)) {
                  matchedPage = true;
                  resolvedHref = fsPathname;
                } else {
                  resolvedHref = resolveDynamicRoute(fsPathname, options.pages);

                  if (resolvedHref !== parsed.pathname && options.pages.includes(resolvedHref)) {
                    matchedPage = true;
                  }
                }

                return _context6.abrupt("return", {
                  type: 'rewrite',
                  asPath: parsed.pathname,
                  parsedAs: parsed,
                  matchedPage: matchedPage,
                  resolvedHref: resolvedHref
                });

              case 25:
                if (!preflight.redirect) {
                  _context6.next = 31;
                  break;
                }

                if (!preflight.redirect.startsWith('/')) {
                  _context6.next = 30;
                  break;
                }

                cleanRedirect = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _normalizeLocalePath).normalizeLocalePath(hasBasePath(preflight.redirect) ? delBasePath(preflight.redirect) : preflight.redirect, this.locales).pathname);
                _prepareUrlAs4 = prepareUrlAs(this, cleanRedirect, cleanRedirect), newUrl = _prepareUrlAs4.url, newAs = _prepareUrlAs4.as;
                return _context6.abrupt("return", {
                  type: 'redirect',
                  newUrl: newUrl,
                  newAs: newAs
                });

              case 30:
                return _context6.abrupt("return", {
                  type: 'redirect',
                  destination: preflight.redirect
                });

              case 31:
                if (!(preflight.refresh && !preflight.ssr)) {
                  _context6.next = 33;
                  break;
                }

                return _context6.abrupt("return", {
                  type: 'refresh'
                });

              case 33:
                return _context6.abrupt("return", {
                  type: 'next'
                });

              case 34:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[9, 15]]);
      }));

      function _preflightRequest(_x22) {
        return _preflightRequest2.apply(this, arguments);
      }

      return _preflightRequest;
    }()
  }, {
    key: "_getPreflightData",
    value: function _getPreflightData(params) {
      var _this6 = this;

      var preflightHref = params.preflightHref,
          _params$shouldCache = params.shouldCache,
          shouldCache = _params$shouldCache === void 0 ? false : _params$shouldCache,
          isPreview = params.isPreview;

      var _URL2 = new URL(preflightHref, window.location.href),
          cacheKey = _URL2.href;

      if ( true && !isPreview && shouldCache && this.sde[cacheKey]) {
        return Promise.resolve(this.sde[cacheKey]);
      }

      return fetch(preflightHref, {
        method: 'HEAD',
        credentials: 'same-origin',
        headers: {
          'x-middleware-preflight': '1'
        }
      }).then(function (res) {
        if (!res.ok) {
          throw new Error("Failed to preflight request");
        }

        return {
          cache: res.headers.get('x-middleware-cache'),
          redirect: res.headers.get('Location'),
          refresh: res.headers.has('x-middleware-refresh'),
          rewrite: res.headers.get('x-middleware-rewrite'),
          ssr: !!res.headers.get('x-middleware-ssr')
        };
      }).then(function (data) {
        if (shouldCache && data.cache !== 'no-cache') {
          _this6.sde[cacheKey] = data;
        }

        return data;
      }).catch(function (err) {
        delete _this6.sde[cacheKey];
        throw err;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return (0, _utils).loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as, routeProps) {
      if (this.clc) {
        Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "route",
    get: function get() {
      return this.state.route;
    }
  }, {
    key: "pathname",
    get: function get() {
      return this.state.pathname;
    }
  }, {
    key: "query",
    get: function get() {
      return this.state.query;
    }
  }, {
    key: "asPath",
    get: function get() {
      return this.state.asPath;
    }
  }, {
    key: "locale",
    get: function get() {
      return this.state.locale;
    }
  }, {
    key: "isFallback",
    get: function get() {
      return this.state.isFallback;
    }
  }, {
    key: "isPreview",
    get: function get() {
      return this.state.isPreview;
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = (0, _mitt).default();

/***/ }),

/***/ 1664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(7913)


/***/ })

};
;