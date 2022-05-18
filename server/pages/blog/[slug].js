"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 3539:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5301);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1000);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1117);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3133);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5128);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(444);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4011);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5226);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3275);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9270);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_Blog_infrastructure_helpers_markdownToHtml__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8361);
/* harmony import */ var _src_Blog_infrastructure_services_postApiService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7203);
/* harmony import */ var _src_Blog_ui_pages_commons_components_post__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_Blog_infrastructure_helpers_markdownToHtml__WEBPACK_IMPORTED_MODULE_10__]);
_src_Blog_infrastructure_helpers_markdownToHtml__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_Blog_ui_pages_commons_components_post__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z);
function getStaticProps(_x) {
  return _getStaticProps.apply(this, arguments);
}

function _getStaticProps() {
  _getStaticProps = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var params, post, content;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _ref.params;
            post = (0,_src_Blog_infrastructure_services_postApiService__WEBPACK_IMPORTED_MODULE_11__/* .getPostBySlug */ .zQ)(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage']);
            _context.next = 4;
            return (0,_src_Blog_infrastructure_helpers_markdownToHtml__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(post.content || '');

          case 4:
            content = _context.sent;
            return _context.abrupt("return", {
              props: {
                post: _objectSpread(_objectSpread({}, post), {}, {
                  content: content
                })
              }
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getStaticProps.apply(this, arguments);
}

function getStaticPaths() {
  return _getStaticPaths.apply(this, arguments);
}

function _getStaticPaths() {
  _getStaticPaths = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var posts;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            posts = (0,_src_Blog_infrastructure_services_postApiService__WEBPACK_IMPORTED_MODULE_11__/* .getAllPosts */ .Bd)(['slug']);
            return _context2.abrupt("return", {
              paths: posts.map(function (post) {
                return {
                  params: {
                    slug: post.slug
                  }
                };
              }),
              fallback: false
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getStaticPaths.apply(this, arguments);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8361:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ markdownToHtml)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5301);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1000);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1117);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7285);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1774);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_4__, remark_html__WEBPACK_IMPORTED_MODULE_5__]);
([remark__WEBPACK_IMPORTED_MODULE_4__, remark_html__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function markdownToHtml(_x) {
  return _markdownToHtml.apply(this, arguments);
}

function _markdownToHtml() {
  _markdownToHtml = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(markdown) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,remark__WEBPACK_IMPORTED_MODULE_4__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_5__["default"]).process(markdown);

          case 2:
            result = _context.sent;
            return _context.abrupt("return", result.toString());

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _markdownToHtml.apply(this, arguments);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Bd": () => (/* binding */ getAllPosts),
  "zQ": () => (/* binding */ getPostBySlug)
});

// UNUSED EXPORTS: getPostSlugs

// EXTERNAL MODULE: external "core-js/modules/es.regexp.exec.js"
var es_regexp_exec_js_ = __webpack_require__(3524);
// EXTERNAL MODULE: external "core-js/modules/es.string.replace.js"
var es_string_replace_js_ = __webpack_require__(9344);
// EXTERNAL MODULE: external "core-js/modules/es.object.to-string.js"
var es_object_to_string_js_ = __webpack_require__(1000);
// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each.js"
var web_dom_collections_for_each_js_ = __webpack_require__(3275);
;// CONCATENATED MODULE: external "core-js/modules/es.array.sort.js"
const es_array_sort_js_namespaceObject = require("core-js/modules/es.array.sort.js");
// EXTERNAL MODULE: external "core-js/modules/es.array.map.js"
var es_array_map_js_ = __webpack_require__(3133);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
;// CONCATENATED MODULE: external "gray-matter"
const external_gray_matter_namespaceObject = require("gray-matter");
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_namespaceObject);
;// CONCATENATED MODULE: ./src/Blog/infrastructure/services/postApiService.ts









var postsDirectory = (0,external_path_namespaceObject.join)(process.cwd(), 'src/Shared/infrastructure/mocks/_posts');
function getPostSlugs() {
  return external_fs_default().readdirSync(postsDirectory);
}
function getPostBySlug(slug) {
  var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var realSlug = slug.replace(/\.md$/, '');
  var fullPath = (0,external_path_namespaceObject.join)(postsDirectory, "".concat(realSlug, ".md"));
  var fileContents = external_fs_default().readFileSync(fullPath, 'utf8');

  var _matter = external_gray_matter_default()(fileContents),
      data = _matter.data,
      content = _matter.content;

  var items = {};
  fields.forEach(function (field) {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });
  return items;
}
function getAllPosts() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var slugs = getPostSlugs();
  var posts = slugs.map(function (slug) {
    return getPostBySlug(slug, fields);
  }).sort(function (post1, post2) {
    return post1.date > post2.date ? -1 : 1;
  });
  return posts;
}

/***/ }),

/***/ 5563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ post)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "next/error"
const error_namespaceObject = require("next/error");
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
;// CONCATENATED MODULE: ./src/Blog/infrastructure/constants/index.ts
var EXAMPLE_PATH = 'blog-starter-typescript';
var CMS_NAME = 'Markdown';
var HOME_OG_IMAGE_URL = 'https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg';
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/Blog/ui/pages/commons/components/container.tsx



var Container = function Container(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/external_react_default().createElement(material_.Box, {
    className: "container mx-auto px-5"
  }, children);
};

/* harmony default export */ const container = (Container);
;// CONCATENATED MODULE: ./src/Blog/ui/pages/commons/components/alert.tsx





var Alert = function Alert(_ref) {
  var preview = _ref.preview;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: external_classnames_default()('border-b', {
      'bg-neutral-800 border-neutral-800 text-white': preview,
      'bg-neutral-50 border-neutral-200': !preview
    })
  }, /*#__PURE__*/external_react_default().createElement(container, null, /*#__PURE__*/external_react_default().createElement("div", {
    className: "py-2 text-center text-sm"
  }, preview ? /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, "This page is a preview.", ' ', /*#__PURE__*/external_react_default().createElement("a", {
    href: "/api/exit-preview",
    className: "underline hover:text-teal-300 duration-200 transition-colors"
  }, "Click here"), ' ', "to exit preview mode.") : /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, "The source code for this blog is", ' ', /*#__PURE__*/external_react_default().createElement("a", {
    href: "https://github.com/vercel/next.js/tree/canary/examples/".concat(EXAMPLE_PATH),
    className: "underline hover:text-blue-600 duration-200 transition-colors"
  }, "available on GitHub"), "."))));
};

/* harmony default export */ const components_alert = (Alert);
;// CONCATENATED MODULE: ./src/Blog/ui/pages/commons/components/footer.tsx




var Footer = function Footer() {
  return /*#__PURE__*/external_react_default().createElement("footer", {
    className: "bg-neutral-50 border-t border-neutral-200"
  }, /*#__PURE__*/external_react_default().createElement(container, null, /*#__PURE__*/external_react_default().createElement("div", {
    className: "py-28 flex flex-col lg:flex-row items-center"
  }, /*#__PURE__*/external_react_default().createElement("h3", {
    className: "text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2"
  }, "Statically Generated with Next.js."), /*#__PURE__*/external_react_default().createElement("div", {
    className: "flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2"
  }, /*#__PURE__*/external_react_default().createElement("a", {
    href: "https://nextjs.org/docs/basic-features/pages",
    className: "mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
  }, "Read Documentation"), /*#__PURE__*/external_react_default().createElement("a", {
    href: "https://github.com/vercel/next.js/tree/canary/examples/".concat(EXAMPLE_PATH),
    className: "mx-3 font-bold hover:underline"
  }, "View on GitHub")))));
};

/* harmony default export */ const footer = (Footer);
;// CONCATENATED MODULE: ./src/Blog/ui/pages/commons/components/meta.tsx




var Meta = function Meta() {
  return /*#__PURE__*/external_react_default().createElement((head_default()), null, /*#__PURE__*/external_react_default().createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicon/apple-touch-icon.png"
  }), /*#__PURE__*/external_react_default().createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon/favicon-32x32.png"
  }), /*#__PURE__*/external_react_default().createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon/favicon-16x16.png"
  }), /*#__PURE__*/external_react_default().createElement("link", {
    rel: "manifest",
    href: "/favicon/site.webmanifest"
  }), /*#__PURE__*/external_react_default().createElement("link", {
    rel: "mask-icon",
    href: "/favicon/safari-pinned-tab.svg",
    color: "#000000"
  }), /*#__PURE__*/external_react_default().createElement("link", {
    rel: "shortcut icon",
    href: "/favicon/favicon.ico"
  }), /*#__PURE__*/external_react_default().createElement("meta", {
    name: "msapplication-TileColor",
    content: "#000000"
  }), /*#__PURE__*/external_react_default().createElement("meta", {
    name: "msapplication-config",
    content: "/favicon/browserconfig.xml"
  }), /*#__PURE__*/external_react_default().createElement("meta", {
    name: "theme-color",
    content: "#000"
  }), /*#__PURE__*/external_react_default().createElement("link", {
    rel: "alternate",
    type: "application/rss+xml",
    href: "/feed.xml"
  }), /*#__PURE__*/external_react_default().createElement("meta", {
    name: "description",
    content: "A statically generated blog example using Next.js and ".concat(CMS_NAME, ".")
  }), /*#__PURE__*/external_react_default().createElement("meta", {
    property: "og:image",
    content: HOME_OG_IMAGE_URL
  }));
};

/* harmony default export */ const meta = (Meta);
;// CONCATENATED MODULE: ./src/Blog/ui/pages/commons/components/layout.tsx





var Layout = function Layout(_ref) {
  var preview = _ref.preview,
      children = _ref.children;
  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement(meta, null), /*#__PURE__*/external_react_default().createElement("div", {
    className: "min-h-screen"
  }, /*#__PURE__*/external_react_default().createElement(components_alert, {
    preview: preview
  }), /*#__PURE__*/external_react_default().createElement("main", null, children)), /*#__PURE__*/external_react_default().createElement(footer, null));
};

/* harmony default export */ const layout = (Layout);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/Blog/ui/pages/commons/components/header.tsx



var Header = function Header() {
  return /*#__PURE__*/external_react_default().createElement("h2", {
    className: "text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8"
  }, /*#__PURE__*/external_react_default().createElement((link_default()), {
    href: "/"
  }, /*#__PURE__*/external_react_default().createElement("a", {
    className: "hover:underline"
  }, "Blog")), ".");
};

/* harmony default export */ const header = (Header);
;// CONCATENATED MODULE: ./src/Blog/ui/pages/commons/components/post/post-title.tsx


var PostTitle = function PostTitle(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/external_react_default().createElement("h1", {
    className: "text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
  }, children);
};

/* harmony default export */ const post_title = (PostTitle);
// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(6941);
;// CONCATENATED MODULE: ./src/Blog/ui/pages/commons/components/avatar.tsx



var Avatar = function Avatar(_ref) {
  var name = _ref.name,
      picture = _ref.picture;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/external_react_default().createElement("img", {
    src: picture,
    className: "w-12 h-12 rounded-full mr-4",
    alt: name
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "text-xl font-bold"
  }, name));
};

/* harmony default export */ const avatar = (Avatar);
;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
;// CONCATENATED MODULE: ./src/Blog/ui/pages/commons/components/date-formatter.tsx



var DateFormatter = function DateFormatter(_ref) {
  var dateString = _ref.dateString;
  var date = (0,external_date_fns_namespaceObject.parseISO)(dateString);
  return /*#__PURE__*/external_react_default().createElement("time", {
    dateTime: dateString
  }, (0,external_date_fns_namespaceObject.format)(date, 'LLLL	d, yyyy'));
};

/* harmony default export */ const date_formatter = (DateFormatter);
;// CONCATENATED MODULE: ./src/Blog/ui/pages/commons/components/cover-image.tsx




var CoverImage = function CoverImage(_ref) {
  var title = _ref.title,
      src = _ref.src,
      slug = _ref.slug;
  var image = /*#__PURE__*/external_react_default().createElement("img", {
    src: src,
    alt: "Cover Image for ".concat(title),
    className: external_classnames_default()('shadow-sm', {
      'hover:shadow-lg transition-shadow duration-200': slug
    })
  });
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "sm:mx-0"
  }, slug ? /*#__PURE__*/external_react_default().createElement((link_default()), {
    as: "/posts/".concat(slug),
    href: "/posts/[slug]"
  }, /*#__PURE__*/external_react_default().createElement("a", {
    "aria-label": title
  }, image)) : image);
};

/* harmony default export */ const cover_image = (CoverImage);
;// CONCATENATED MODULE: ./src/Blog/ui/pages/commons/components/post/post-header.tsx







var PostHeader = function PostHeader(_ref) {
  var title = _ref.title,
      coverImage = _ref.coverImage,
      date = _ref.date,
      author = _ref.author;
  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement(post_title, null, title), /*#__PURE__*/external_react_default().createElement("div", {
    className: "hidden md:block md:mb-12"
  }, /*#__PURE__*/external_react_default().createElement(avatar, {
    name: author.name,
    picture: author.picture
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "mb-8 md:mb-16 sm:mx-0"
  }, /*#__PURE__*/external_react_default().createElement(cover_image, {
    title: title,
    src: coverImage
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "max-w-2xl mx-auto"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "block md:hidden mb-6"
  }, /*#__PURE__*/external_react_default().createElement(avatar, {
    name: author.name,
    picture: author.picture
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "mb-6 text-lg"
  }, /*#__PURE__*/external_react_default().createElement(date_formatter, {
    dateString: date
  }))));
};

/* harmony default export */ const post_header = (PostHeader);
;// CONCATENATED MODULE: ./src/Blog/ui/pages/commons/components/post/post-body.tsx


var PostBody = function PostBody(_ref) {
  var content = _ref.content;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "max-w-2xl mx-auto"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    dangerouslySetInnerHTML: {
      __html: content
    }
  }));
};

/* harmony default export */ const post_body = (PostBody);
;// CONCATENATED MODULE: ./src/Blog/ui/pages/commons/components/post/index.tsx












var Post = function Post(_ref) {
  var post = _ref.post,
      morePosts = _ref.morePosts,
      preview = _ref.preview;
  var router = (0,router_namespaceObject.useRouter)();

  if (!router.isFallback && !(post !== null && post !== void 0 && post.slug)) {
    return /*#__PURE__*/external_react_default().createElement((error_default()), {
      statusCode: 404
    });
  }

  return /*#__PURE__*/external_react_default().createElement(layout, {
    preview: preview
  }, /*#__PURE__*/external_react_default().createElement(container, null, /*#__PURE__*/external_react_default().createElement(header, null), router.isFallback ? /*#__PURE__*/external_react_default().createElement(post_title, null, "Loading\u2026") : /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement("article", {
    className: "mb-32"
  }, /*#__PURE__*/external_react_default().createElement((head_default()), null, /*#__PURE__*/external_react_default().createElement("title", null, post.title, " | Next.js Blog Example with ", CMS_NAME), /*#__PURE__*/external_react_default().createElement("meta", {
    property: "og:image",
    content: post.ogImage.url
  })), /*#__PURE__*/external_react_default().createElement(post_header, {
    title: post.title,
    coverImage: post.coverImage,
    date: post.date,
    author: post.author
  }), /*#__PURE__*/external_react_default().createElement(post_body, {
    content: post.content
  })))));
};

/* harmony default export */ const post = (Post);

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

/***/ 3015:
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.find-index.js");

/***/ }),

/***/ 6706:
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.find.js");

/***/ }),

/***/ 6486:
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.from.js");

/***/ }),

/***/ 3600:
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.includes.js");

/***/ }),

/***/ 1624:
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.iterator.js");

/***/ }),

/***/ 887:
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.join.js");

/***/ }),

/***/ 3133:
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.map.js");

/***/ }),

/***/ 6257:
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.slice.js");

/***/ }),

/***/ 3794:
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.splice.js");

/***/ }),

/***/ 6941:
/***/ ((module) => {

module.exports = require("core-js/modules/es.function.name.js");

/***/ }),

/***/ 4391:
/***/ ((module) => {

module.exports = require("core-js/modules/es.map.js");

/***/ }),

/***/ 6369:
/***/ ((module) => {

module.exports = require("core-js/modules/es.object.assign.js");

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

/***/ 2202:
/***/ ((module) => {

module.exports = require("core-js/modules/es.promise.finally.js");

/***/ }),

/***/ 1117:
/***/ ((module) => {

module.exports = require("core-js/modules/es.promise.js");

/***/ }),

/***/ 9616:
/***/ ((module) => {

module.exports = require("core-js/modules/es.reflect.construct.js");

/***/ }),

/***/ 3524:
/***/ ((module) => {

module.exports = require("core-js/modules/es.regexp.exec.js");

/***/ }),

/***/ 7285:
/***/ ((module) => {

module.exports = require("core-js/modules/es.regexp.to-string.js");

/***/ }),

/***/ 643:
/***/ ((module) => {

module.exports = require("core-js/modules/es.string.ends-with.js");

/***/ }),

/***/ 6770:
/***/ ((module) => {

module.exports = require("core-js/modules/es.string.includes.js");

/***/ }),

/***/ 2047:
/***/ ((module) => {

module.exports = require("core-js/modules/es.string.iterator.js");

/***/ }),

/***/ 3317:
/***/ ((module) => {

module.exports = require("core-js/modules/es.string.match.js");

/***/ }),

/***/ 7994:
/***/ ((module) => {

module.exports = require("core-js/modules/es.string.repeat.js");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("core-js/modules/es.string.replace.js");

/***/ }),

/***/ 4354:
/***/ ((module) => {

module.exports = require("core-js/modules/es.string.search.js");

/***/ }),

/***/ 685:
/***/ ((module) => {

module.exports = require("core-js/modules/es.string.split.js");

/***/ }),

/***/ 4182:
/***/ ((module) => {

module.exports = require("core-js/modules/es.string.starts-with.js");

/***/ }),

/***/ 2773:
/***/ ((module) => {

module.exports = require("core-js/modules/es.string.sub.js");

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

/***/ 8927:
/***/ ((module) => {

module.exports = require("core-js/modules/web.url-search-params.js");

/***/ }),

/***/ 6955:
/***/ ((module) => {

module.exports = require("core-js/modules/web.url.js");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5301:
/***/ ((module) => {

module.exports = require("regenerator-runtime/runtime.js");

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [932,664], () => (__webpack_exec__(3539)));
module.exports = __webpack_exports__;

})();