import { V as Vue } from "./index.cfe88217.js";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var vueSliderComponent_umd$2 = { exports: {} };
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory(Vue);
  })(typeof self !== "undefined" ? self : commonjsGlobal, function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
    return function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, { enumerable: true, get: getter });
        }
      };
      __webpack_require__.r = function(exports2) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
        }
        Object.defineProperty(exports2, "__esModule", { value: true });
      };
      __webpack_require__.t = function(value, mode) {
        if (mode & 1)
          value = __webpack_require__(value);
        if (mode & 8)
          return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule)
          return value;
        var ns = /* @__PURE__ */ Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", { enumerable: true, value });
        if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(ns, key, function(key2) {
              return value[key2];
            }.bind(null, key));
        return ns;
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? function getDefault() {
          return module2["default"];
        } : function getModuleExports() {
          return module2;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      return __webpack_require__(__webpack_require__.s = "fb15");
    }({
      "091b": function(module2, exports2, __webpack_require__) {
        var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
        exports2 = ___CSS_LOADER_API_IMPORT___(false);
        exports2.push([module2.i, ".vue-slider-dot{position:absolute;-webkit-transition:all 0s;transition:all 0s;z-index:5}.vue-slider-dot:focus{outline:none}.vue-slider-dot-tooltip{position:absolute;visibility:hidden}.vue-slider-dot-hover:hover .vue-slider-dot-tooltip{visibility:visible}.vue-slider-dot-tooltip-show{visibility:visible}.vue-slider-dot-tooltip-top{top:-10px;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.vue-slider-dot-tooltip-bottom{bottom:-10px;left:50%;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.vue-slider-dot-tooltip-left{left:-10px;top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.vue-slider-dot-tooltip-right{right:-10px;top:50%;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}", ""]);
        module2.exports = exports2;
      },
      "24fb": function(module2, exports2, __webpack_require__) {
        module2.exports = function(useSourceMap) {
          var list = [];
          list.toString = function toString() {
            return this.map(function(item) {
              var content = cssWithMappingToString(item, useSourceMap);
              if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
              }
              return content;
            }).join("");
          };
          list.i = function(modules, mediaQuery, dedupe) {
            if (typeof modules === "string") {
              modules = [[null, modules, ""]];
            }
            var alreadyImportedModules = {};
            if (dedupe) {
              for (var i = 0; i < this.length; i++) {
                var id = this[i][0];
                if (id != null) {
                  alreadyImportedModules[id] = true;
                }
              }
            }
            for (var _i = 0; _i < modules.length; _i++) {
              var item = [].concat(modules[_i]);
              if (dedupe && alreadyImportedModules[item[0]]) {
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
        function cssWithMappingToString(item, useSourceMap) {
          var content = item[1] || "";
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (useSourceMap && typeof btoa === "function") {
            var sourceMapping = toComment(cssMapping);
            var sourceURLs = cssMapping.sources.map(function(source) {
              return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
            });
            return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        }
        function toComment(sourceMap) {
          var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
          var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
          return "/*# ".concat(data, " */");
        }
      },
      "2638": function(module2, exports2, __webpack_require__) {
        function _extends() {
          return _extends = Object.assign || function(a) {
            for (var b, c = 1; c < arguments.length; c++)
              for (var d in b = arguments[c], b)
                Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
            return a;
          }, _extends.apply(this, arguments);
        }
        var normalMerge = ["attrs", "props", "domProps"], toArrayMerge = ["class", "style", "directives"], functionalMerge = ["on", "nativeOn"], mergeJsxProps = function(a) {
          return a.reduce(function(c, a2) {
            for (var b in a2)
              if (!c[b])
                c[b] = a2[b];
              else if (-1 !== normalMerge.indexOf(b))
                c[b] = _extends({}, c[b], a2[b]);
              else if (-1 !== toArrayMerge.indexOf(b)) {
                var d = c[b] instanceof Array ? c[b] : [c[b]], e = a2[b] instanceof Array ? a2[b] : [a2[b]];
                c[b] = d.concat(e);
              } else if (-1 !== functionalMerge.indexOf(b)) {
                for (var f in a2[b])
                  if (c[b][f]) {
                    var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]], h = a2[b][f] instanceof Array ? a2[b][f] : [a2[b][f]];
                    c[b][f] = g.concat(h);
                  } else
                    c[b][f] = a2[b][f];
              } else if ("hook" == b)
                for (var i in a2[b])
                  c[b][i] = c[b][i] ? mergeFn(c[b][i], a2[b][i]) : a2[b][i];
              else
                c[b] = a2[b];
            return c;
          }, {});
        }, mergeFn = function(a, b) {
          return function() {
            a && a.apply(this, arguments), b && b.apply(this, arguments);
          };
        };
        module2.exports = mergeJsxProps;
      },
      "499e": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return addStylesClient;
        });
        function listToStyles(parentId, list) {
          var styles = [];
          var newStyles = {};
          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = item[0];
            var css = item[1];
            var media = item[2];
            var sourceMap = item[3];
            var part = {
              id: parentId + ":" + i,
              css,
              media,
              sourceMap
            };
            if (!newStyles[id]) {
              styles.push(newStyles[id] = { id, parts: [part] });
            } else {
              newStyles[id].parts.push(part);
            }
          }
          return styles;
        }
        var hasDocument = typeof document !== "undefined";
        if (typeof DEBUG !== "undefined" && DEBUG) {
          if (!hasDocument) {
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
            );
          }
        }
        var stylesInDom = {};
        var head = hasDocument && (document.head || document.getElementsByTagName("head")[0]);
        var singletonElement = null;
        var singletonCounter = 0;
        var isProduction = false;
        var noop = function() {
        };
        var options = null;
        var ssrIdKey = "data-vue-ssr-id";
        var isOldIE = typeof navigator !== "undefined" && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        function addStylesClient(parentId, list, _isProduction, _options) {
          isProduction = _isProduction;
          options = _options || {};
          var styles = listToStyles(parentId, list);
          addStylesToDom(styles);
          return function update(newList) {
            var mayRemove = [];
            for (var i = 0; i < styles.length; i++) {
              var item = styles[i];
              var domStyle = stylesInDom[item.id];
              domStyle.refs--;
              mayRemove.push(domStyle);
            }
            if (newList) {
              styles = listToStyles(parentId, newList);
              addStylesToDom(styles);
            } else {
              styles = [];
            }
            for (var i = 0; i < mayRemove.length; i++) {
              var domStyle = mayRemove[i];
              if (domStyle.refs === 0) {
                for (var j = 0; j < domStyle.parts.length; j++) {
                  domStyle.parts[j]();
                }
                delete stylesInDom[domStyle.id];
              }
            }
          };
        }
        function addStylesToDom(styles) {
          for (var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];
            if (domStyle) {
              domStyle.refs++;
              for (var j = 0; j < domStyle.parts.length; j++) {
                domStyle.parts[j](item.parts[j]);
              }
              for (; j < item.parts.length; j++) {
                domStyle.parts.push(addStyle(item.parts[j]));
              }
              if (domStyle.parts.length > item.parts.length) {
                domStyle.parts.length = item.parts.length;
              }
            } else {
              var parts = [];
              for (var j = 0; j < item.parts.length; j++) {
                parts.push(addStyle(item.parts[j]));
              }
              stylesInDom[item.id] = { id: item.id, refs: 1, parts };
            }
          }
        }
        function createStyleElement() {
          var styleElement = document.createElement("style");
          styleElement.type = "text/css";
          head.appendChild(styleElement);
          return styleElement;
        }
        function addStyle(obj) {
          var update, remove;
          var styleElement = document.querySelector("style[" + ssrIdKey + '~="' + obj.id + '"]');
          if (styleElement) {
            if (isProduction) {
              return noop;
            } else {
              styleElement.parentNode.removeChild(styleElement);
            }
          }
          if (isOldIE) {
            var styleIndex = singletonCounter++;
            styleElement = singletonElement || (singletonElement = createStyleElement());
            update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
            remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
          } else {
            styleElement = createStyleElement();
            update = applyToTag.bind(null, styleElement);
            remove = function() {
              styleElement.parentNode.removeChild(styleElement);
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
        var replaceText = function() {
          var textStore = [];
          return function(index, replacement) {
            textStore[index] = replacement;
            return textStore.filter(Boolean).join("\n");
          };
        }();
        function applyToSingletonTag(styleElement, index, remove, obj) {
          var css = remove ? "" : obj.css;
          if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = replaceText(index, css);
          } else {
            var cssNode = document.createTextNode(css);
            var childNodes = styleElement.childNodes;
            if (childNodes[index])
              styleElement.removeChild(childNodes[index]);
            if (childNodes.length) {
              styleElement.insertBefore(cssNode, childNodes[index]);
            } else {
              styleElement.appendChild(cssNode);
            }
          }
        }
        function applyToTag(styleElement, obj) {
          var css = obj.css;
          var media = obj.media;
          var sourceMap = obj.sourceMap;
          if (media) {
            styleElement.setAttribute("media", media);
          }
          if (options.ssrId) {
            styleElement.setAttribute(ssrIdKey, obj.id);
          }
          if (sourceMap) {
            css += "\n/*# sourceURL=" + sourceMap.sources[0] + " */";
            css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
          }
          if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = css;
          } else {
            while (styleElement.firstChild) {
              styleElement.removeChild(styleElement.firstChild);
            }
            styleElement.appendChild(document.createTextNode(css));
          }
        }
      },
      "4abb": function(module2, exports2, __webpack_require__) {
        var content = __webpack_require__("7a57");
        if (typeof content === "string")
          content = [[module2.i, content, ""]];
        if (content.locals)
          module2.exports = content.locals;
        var add = __webpack_require__("499e").default;
        add("b2af7572", content, true, { "sourceMap": false, "shadowMode": false });
      },
      "4ed8": function(module2, exports2, __webpack_require__) {
        var content = __webpack_require__("091b");
        if (typeof content === "string")
          content = [[module2.i, content, ""]];
        if (content.locals)
          module2.exports = content.locals;
        var add = __webpack_require__("499e").default;
        add("2f6bee1a", content, true, { "sourceMap": false, "shadowMode": false });
      },
      "556c": function(module2, exports2, __webpack_require__) {
        var content = __webpack_require__("eef2");
        if (typeof content === "string")
          content = [[module2.i, content, ""]];
        if (content.locals)
          module2.exports = content.locals;
        var add = __webpack_require__("499e").default;
        add("1209fd47", content, true, { "sourceMap": false, "shadowMode": false });
      },
      "65d9": function(module2, exports2, __webpack_require__) {
        /**
          * vue-class-component v7.0.1
          * (c) 2015-present Evan You
          * @license MIT
          */
        Object.defineProperty(exports2, "__esModule", { value: true });
        function _interopDefault(ex) {
          return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
        }
        var Vue2 = _interopDefault(__webpack_require__("8bbf"));
        var reflectionIsSupported = typeof Reflect !== "undefined" && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
        function copyReflectionMetadata(to, from) {
          forwardMetadata(to, from);
          Object.getOwnPropertyNames(from.prototype).forEach(function(key) {
            forwardMetadata(to.prototype, from.prototype, key);
          });
          Object.getOwnPropertyNames(from).forEach(function(key) {
            forwardMetadata(to, from, key);
          });
        }
        function forwardMetadata(to, from, propertyKey) {
          var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
          metaKeys.forEach(function(metaKey) {
            var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);
            if (propertyKey) {
              Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
            } else {
              Reflect.defineMetadata(metaKey, metadata, to);
            }
          });
        }
        var fakeArray = { __proto__: [] };
        var hasProto = fakeArray instanceof Array;
        function createDecorator(factory) {
          return function(target, key, index) {
            var Ctor = typeof target === "function" ? target : target.constructor;
            if (!Ctor.__decorators__) {
              Ctor.__decorators__ = [];
            }
            if (typeof index !== "number") {
              index = void 0;
            }
            Ctor.__decorators__.push(function(options) {
              return factory(options, key, index);
            });
          };
        }
        function mixins() {
          var Ctors = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            Ctors[_i] = arguments[_i];
          }
          return Vue2.extend({ mixins: Ctors });
        }
        function isPrimitive(value) {
          var type = typeof value;
          return value == null || type !== "object" && type !== "function";
        }
        function collectDataFromConstructor(vm, Component2) {
          var originalInit = Component2.prototype._init;
          Component2.prototype._init = function() {
            var _this = this;
            var keys = Object.getOwnPropertyNames(vm);
            if (vm.$options.props) {
              for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                  keys.push(key);
                }
              }
            }
            keys.forEach(function(key2) {
              if (key2.charAt(0) !== "_") {
                Object.defineProperty(_this, key2, {
                  get: function() {
                    return vm[key2];
                  },
                  set: function(value) {
                    vm[key2] = value;
                  },
                  configurable: true
                });
              }
            });
          };
          var data = new Component2();
          Component2.prototype._init = originalInit;
          var plainData = {};
          Object.keys(data).forEach(function(key) {
            if (data[key] !== void 0) {
              plainData[key] = data[key];
            }
          });
          return plainData;
        }
        var $internalHooks = [
          "data",
          "beforeCreate",
          "created",
          "beforeMount",
          "mounted",
          "beforeDestroy",
          "destroyed",
          "beforeUpdate",
          "updated",
          "activated",
          "deactivated",
          "render",
          "errorCaptured",
          "serverPrefetch"
        ];
        function componentFactory(Component2, options) {
          if (options === void 0) {
            options = {};
          }
          options.name = options.name || Component2._componentTag || Component2.name;
          var proto = Component2.prototype;
          Object.getOwnPropertyNames(proto).forEach(function(key) {
            if (key === "constructor") {
              return;
            }
            if ($internalHooks.indexOf(key) > -1) {
              options[key] = proto[key];
              return;
            }
            var descriptor = Object.getOwnPropertyDescriptor(proto, key);
            if (descriptor.value !== void 0) {
              if (typeof descriptor.value === "function") {
                (options.methods || (options.methods = {}))[key] = descriptor.value;
              } else {
                (options.mixins || (options.mixins = [])).push({
                  data: function() {
                    var _a;
                    return _a = {}, _a[key] = descriptor.value, _a;
                  }
                });
              }
            } else if (descriptor.get || descriptor.set) {
              (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
              };
            }
          });
          (options.mixins || (options.mixins = [])).push({
            data: function() {
              return collectDataFromConstructor(this, Component2);
            }
          });
          var decorators = Component2.__decorators__;
          if (decorators) {
            decorators.forEach(function(fn) {
              return fn(options);
            });
            delete Component2.__decorators__;
          }
          var superProto = Object.getPrototypeOf(Component2.prototype);
          var Super = superProto instanceof Vue2 ? superProto.constructor : Vue2;
          var Extended = Super.extend(options);
          forwardStaticMembers(Extended, Component2, Super);
          if (reflectionIsSupported) {
            copyReflectionMetadata(Extended, Component2);
          }
          return Extended;
        }
        function forwardStaticMembers(Extended, Original, Super) {
          Object.getOwnPropertyNames(Original).forEach(function(key) {
            if (key === "prototype") {
              return;
            }
            var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
            if (extendedDescriptor && !extendedDescriptor.configurable) {
              return;
            }
            var descriptor = Object.getOwnPropertyDescriptor(Original, key);
            if (!hasProto) {
              if (key === "cid") {
                return;
              }
              var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
              if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
                return;
              }
            }
            Object.defineProperty(Extended, key, descriptor);
          });
        }
        function Component(options) {
          if (typeof options === "function") {
            return componentFactory(options);
          }
          return function(Component2) {
            return componentFactory(Component2, options);
          };
        }
        Component.registerHooks = function registerHooks(keys) {
          $internalHooks.push.apply($internalHooks, keys);
        };
        exports2.default = Component;
        exports2.createDecorator = createDecorator;
        exports2.mixins = mixins;
      },
      "7a57": function(module2, exports2, __webpack_require__) {
        var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
        exports2 = ___CSS_LOADER_API_IMPORT___(false);
        exports2.push([module2.i, ".vue-slider{position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0)}.vue-slider-rail{position:relative;width:100%;height:100%;-webkit-transition-property:width,height,left,right,top,bottom;transition-property:width,height,left,right,top,bottom}.vue-slider-process{position:absolute;z-index:1}", ""]);
        module2.exports = exports2;
      },
      "8875": function(module2, exports2, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        (function(root, factory) {
          {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports2, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module2.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          }
        })(typeof self !== "undefined" ? self : this, function() {
          function getCurrentScript() {
            var descriptor = Object.getOwnPropertyDescriptor(document, "currentScript");
            if (!descriptor && "currentScript" in document && document.currentScript) {
              return document.currentScript;
            }
            if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
              return document.currentScript;
            }
            try {
              throw new Error();
            } catch (err) {
              var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig, ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig, stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack), scriptLocation = stackDetails && stackDetails[1] || false, line = stackDetails && stackDetails[2] || false, currentLocation = document.location.href.replace(document.location.hash, ""), pageSource, inlineScriptSourceRegExp, inlineScriptSource, scripts = document.getElementsByTagName("script");
              if (scriptLocation === currentLocation) {
                pageSource = document.documentElement.outerHTML;
                inlineScriptSourceRegExp = new RegExp("(?:[^\\n]+?\\n){0," + (line - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i");
                inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, "$1").trim();
              }
              for (var i = 0; i < scripts.length; i++) {
                if (scripts[i].readyState === "interactive") {
                  return scripts[i];
                }
                if (scripts[i].src === scriptLocation) {
                  return scripts[i];
                }
                if (scriptLocation === currentLocation && scripts[i].innerHTML && scripts[i].innerHTML.trim() === inlineScriptSource) {
                  return scripts[i];
                }
              }
              return null;
            }
          }
          return getCurrentScript;
        });
      },
      "8bbf": function(module2, exports2) {
        module2.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;
      },
      "eef2": function(module2, exports2, __webpack_require__) {
        var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
        exports2 = ___CSS_LOADER_API_IMPORT___(false);
        exports2.push([module2.i, ".vue-slider-marks{position:relative;width:100%;height:100%}.vue-slider-mark{position:absolute;z-index:1}.vue-slider-ltr .vue-slider-mark,.vue-slider-rtl .vue-slider-mark{width:0;height:100%;top:50%}.vue-slider-ltr .vue-slider-mark-step,.vue-slider-rtl .vue-slider-mark-step{top:0}.vue-slider-ltr .vue-slider-mark-label,.vue-slider-rtl .vue-slider-mark-label{top:100%;margin-top:10px}.vue-slider-ltr .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ltr .vue-slider-mark-step{left:0}.vue-slider-ltr .vue-slider-mark-label{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.vue-slider-rtl .vue-slider-mark{-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.vue-slider-rtl .vue-slider-mark-step{right:0}.vue-slider-rtl .vue-slider-mark-label{right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}.vue-slider-btt .vue-slider-mark,.vue-slider-ttb .vue-slider-mark{width:100%;height:0;left:50%}.vue-slider-btt .vue-slider-mark-step,.vue-slider-ttb .vue-slider-mark-step{left:0}.vue-slider-btt .vue-slider-mark-label,.vue-slider-ttb .vue-slider-mark-label{left:100%;margin-left:10px}.vue-slider-btt .vue-slider-mark{-webkit-transform:translate(-50%,50%);transform:translate(-50%,50%)}.vue-slider-btt .vue-slider-mark-step{top:0}.vue-slider-btt .vue-slider-mark-label{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-ttb .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ttb .vue-slider-mark-step{bottom:0}.vue-slider-ttb .vue-slider-mark-label{bottom:50%;-webkit-transform:translateY(50%);transform:translateY(50%)}.vue-slider-mark-label,.vue-slider-mark-step{position:absolute}", ""]);
        module2.exports = exports2;
      },
      "fb15": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "ERROR_TYPE", function() {
          return ERROR_TYPE;
        });
        __webpack_require__.d(__webpack_exports__, "VueSliderMark", function() {
          return vue_slider_mark;
        });
        __webpack_require__.d(__webpack_exports__, "VueSliderDot", function() {
          return vue_slider_dot;
        });
        if (typeof window !== "undefined") {
          var currentScript = window.document.currentScript;
          {
            var getCurrentScript = __webpack_require__("8875");
            currentScript = getCurrentScript();
            if (!("currentScript" in document)) {
              Object.defineProperty(document, "currentScript", { get: getCurrentScript });
            }
          }
          var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
          if (src) {
            __webpack_require__.p = src[1];
          }
        }
        var helper = __webpack_require__("2638");
        var helper_default = /* @__PURE__ */ __webpack_require__.n(helper);
        function __decorate(decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        }
        var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");
        var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_default = /* @__PURE__ */ __webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_);
        var vue_class_component_common = __webpack_require__("65d9");
        var vue_class_component_common_default = /* @__PURE__ */ __webpack_require__.n(vue_class_component_common);
        var reflectMetadataIsSupported = typeof Reflect !== "undefined" && typeof Reflect.getMetadata !== "undefined";
        function applyMetadata(options, target, key) {
          if (reflectMetadataIsSupported) {
            if (!Array.isArray(options) && typeof options !== "function" && typeof options.type === "undefined") {
              options.type = Reflect.getMetadata("design:type", target, key);
            }
          }
        }
        function Model(event, options) {
          if (options === void 0) {
            options = {};
          }
          return function(target, key) {
            applyMetadata(options, target, key);
            Object(vue_class_component_common["createDecorator"])(function(componentOptions, k) {
              (componentOptions.props || (componentOptions.props = {}))[k] = options;
              componentOptions.model = { prop: k, event: event || k };
            })(target, key);
          };
        }
        function Prop(options) {
          if (options === void 0) {
            options = {};
          }
          return function(target, key) {
            applyMetadata(options, target, key);
            Object(vue_class_component_common["createDecorator"])(function(componentOptions, k) {
              (componentOptions.props || (componentOptions.props = {}))[k] = options;
            })(target, key);
          };
        }
        function Watch(path, options) {
          if (options === void 0) {
            options = {};
          }
          var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
          return Object(vue_class_component_common["createDecorator"])(function(componentOptions, handler) {
            if (typeof componentOptions.watch !== "object") {
              componentOptions.watch = /* @__PURE__ */ Object.create(null);
            }
            var watch = componentOptions.watch;
            if (typeof watch[path] === "object" && !Array.isArray(watch[path])) {
              watch[path] = [watch[path]];
            } else if (typeof watch[path] === "undefined") {
              watch[path] = [];
            }
            watch[path].push({ handler, deep, immediate });
          });
        }
        __webpack_require__("4ed8");
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
          if (superClass)
            _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
            o2.__proto__ = p2;
            return o2;
          };
          return _setPrototypeOf(o, p);
        }
        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived), result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
          };
        }
        function _possibleConstructorReturn(self2, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }
          return _assertThisInitialized(self2);
        }
        function _assertThisInitialized(self2) {
          if (self2 === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self2;
        }
        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy === "function")
            return true;
          try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            }));
            return true;
          } catch (e) {
            return false;
          }
        }
        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
            return o2.__proto__ || Object.getPrototypeOf(o2);
          };
          return _getPrototypeOf(o);
        }
        var VueSliderDot = /* @__PURE__ */ function(_Vue) {
          _inherits(VueSliderDot2, _Vue);
          var _super = _createSuper(VueSliderDot2);
          function VueSliderDot2() {
            _classCallCheck(this, VueSliderDot2);
            return _super.apply(this, arguments);
          }
          _createClass(VueSliderDot2, [{
            key: "dragStart",
            value: function dragStart(e) {
              if (this.disabled) {
                return false;
              }
              this.$emit("drag-start");
            }
          }, {
            key: "render",
            value: function render() {
              var h = arguments[0];
              return h("div", {
                "ref": "dot",
                "class": this.dotClasses,
                "attrs": {
                  "aria-valuetext": this.tooltipValue
                },
                "on": {
                  "mousedown": this.dragStart,
                  "touchstart": this.dragStart
                }
              }, [this.$slots.dot || h("div", {
                "class": this.handleClasses,
                "style": this.dotStyle
              }), this.tooltip !== "none" ? h("div", {
                "class": this.tooltipClasses
              }, [this.$slots.tooltip || h("div", {
                "class": this.tooltipInnerClasses,
                "style": this.tooltipStyle
              }, [h("span", {
                "class": "vue-slider-dot-tooltip-text"
              }, [this.tooltipValue])])]) : null]);
            }
          }, {
            key: "dotClasses",
            get: function get() {
              return ["vue-slider-dot", {
                "vue-slider-dot-hover": this.tooltip === "hover" || this.tooltip === "active",
                "vue-slider-dot-disabled": this.disabled,
                "vue-slider-dot-focus": this.focus
              }];
            }
          }, {
            key: "handleClasses",
            get: function get() {
              return ["vue-slider-dot-handle", {
                "vue-slider-dot-handle-disabled": this.disabled,
                "vue-slider-dot-handle-focus": this.focus
              }];
            }
          }, {
            key: "tooltipClasses",
            get: function get() {
              return ["vue-slider-dot-tooltip", ["vue-slider-dot-tooltip-".concat(this.tooltipPlacement)], {
                "vue-slider-dot-tooltip-show": this.showTooltip
              }];
            }
          }, {
            key: "tooltipInnerClasses",
            get: function get() {
              return ["vue-slider-dot-tooltip-inner", ["vue-slider-dot-tooltip-inner-".concat(this.tooltipPlacement)], {
                "vue-slider-dot-tooltip-inner-disabled": this.disabled,
                "vue-slider-dot-tooltip-inner-focus": this.focus
              }];
            }
          }, {
            key: "showTooltip",
            get: function get() {
              switch (this.tooltip) {
                case "always":
                  return true;
                case "none":
                  return false;
                case "focus":
                case "active":
                  return !!this.focus;
                default:
                  return false;
              }
            }
          }, {
            key: "tooltipValue",
            get: function get() {
              if (this.tooltipFormatter) {
                return typeof this.tooltipFormatter === "string" ? this.tooltipFormatter.replace(/\{value\}/, String(this.value)) : this.tooltipFormatter(this.value);
              } else {
                return this.value;
              }
            }
          }]);
          return VueSliderDot2;
        }(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_default.a);
        __decorate([Prop({
          default: 0
        })], VueSliderDot.prototype, "value", void 0);
        __decorate([Prop()], VueSliderDot.prototype, "tooltip", void 0);
        __decorate([Prop()], VueSliderDot.prototype, "dotStyle", void 0);
        __decorate([Prop()], VueSliderDot.prototype, "tooltipStyle", void 0);
        __decorate([Prop({
          type: String,
          validator: function validator(val) {
            return ["top", "right", "bottom", "left"].indexOf(val) > -1;
          },
          required: true
        })], VueSliderDot.prototype, "tooltipPlacement", void 0);
        __decorate([Prop({
          type: [String, Function]
        })], VueSliderDot.prototype, "tooltipFormatter", void 0);
        __decorate([Prop({
          type: Boolean,
          default: false
        })], VueSliderDot.prototype, "focus", void 0);
        __decorate([Prop({
          default: false
        })], VueSliderDot.prototype, "disabled", void 0);
        VueSliderDot = __decorate([vue_class_component_common_default()({
          name: "VueSliderDot"
        })], VueSliderDot);
        var vue_slider_dot = VueSliderDot;
        __webpack_require__("556c");
        function vue_slider_mark_typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            vue_slider_mark_typeof = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            vue_slider_mark_typeof = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return vue_slider_mark_typeof(obj);
        }
        function vue_slider_mark_classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function vue_slider_mark_defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function vue_slider_mark_createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            vue_slider_mark_defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            vue_slider_mark_defineProperties(Constructor, staticProps);
          return Constructor;
        }
        function vue_slider_mark_inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
          if (superClass)
            vue_slider_mark_setPrototypeOf(subClass, superClass);
        }
        function vue_slider_mark_setPrototypeOf(o, p) {
          vue_slider_mark_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
            o2.__proto__ = p2;
            return o2;
          };
          return vue_slider_mark_setPrototypeOf(o, p);
        }
        function vue_slider_mark_createSuper(Derived) {
          var hasNativeReflectConstruct = vue_slider_mark_isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = vue_slider_mark_getPrototypeOf(Derived), result;
            if (hasNativeReflectConstruct) {
              var NewTarget = vue_slider_mark_getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return vue_slider_mark_possibleConstructorReturn(this, result);
          };
        }
        function vue_slider_mark_possibleConstructorReturn(self2, call) {
          if (call && (vue_slider_mark_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }
          return vue_slider_mark_assertThisInitialized(self2);
        }
        function vue_slider_mark_assertThisInitialized(self2) {
          if (self2 === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self2;
        }
        function vue_slider_mark_isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy === "function")
            return true;
          try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            }));
            return true;
          } catch (e) {
            return false;
          }
        }
        function vue_slider_mark_getPrototypeOf(o) {
          vue_slider_mark_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
            return o2.__proto__ || Object.getPrototypeOf(o2);
          };
          return vue_slider_mark_getPrototypeOf(o);
        }
        var VueSlideMark = /* @__PURE__ */ function(_Vue) {
          vue_slider_mark_inherits(VueSlideMark2, _Vue);
          var _super = vue_slider_mark_createSuper(VueSlideMark2);
          function VueSlideMark2() {
            vue_slider_mark_classCallCheck(this, VueSlideMark2);
            return _super.apply(this, arguments);
          }
          vue_slider_mark_createClass(VueSlideMark2, [{
            key: "labelClickHandle",
            value: function labelClickHandle(e) {
              e.stopPropagation();
              this.$emit("pressLabel", this.mark.pos);
            }
          }, {
            key: "render",
            value: function render() {
              var h = arguments[0];
              var mark = this.mark;
              return h("div", {
                "class": this.marksClasses
              }, [this.$slots.step || h("div", {
                "class": this.stepClasses,
                "style": [this.stepStyle, mark.style, mark.active ? this.stepActiveStyle : null, mark.active ? mark.activeStyle : null]
              }), !this.hideLabel ? this.$slots.label || h("div", {
                "class": this.labelClasses,
                "style": [this.labelStyle, mark.labelStyle, mark.active ? this.labelActiveStyle : null, mark.active ? mark.labelActiveStyle : null],
                "on": {
                  "click": this.labelClickHandle
                }
              }, [mark.label]) : null]);
            }
          }, {
            key: "marksClasses",
            get: function get() {
              return ["vue-slider-mark", {
                "vue-slider-mark-active": this.mark.active
              }];
            }
          }, {
            key: "stepClasses",
            get: function get() {
              return ["vue-slider-mark-step", {
                "vue-slider-mark-step-active": this.mark.active
              }];
            }
          }, {
            key: "labelClasses",
            get: function get() {
              return ["vue-slider-mark-label", {
                "vue-slider-mark-label-active": this.mark.active
              }];
            }
          }]);
          return VueSlideMark2;
        }(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_default.a);
        __decorate([Prop({
          required: true
        })], VueSlideMark.prototype, "mark", void 0);
        __decorate([Prop(Boolean)], VueSlideMark.prototype, "hideLabel", void 0);
        __decorate([Prop()], VueSlideMark.prototype, "stepStyle", void 0);
        __decorate([Prop()], VueSlideMark.prototype, "stepActiveStyle", void 0);
        __decorate([Prop()], VueSlideMark.prototype, "labelStyle", void 0);
        __decorate([Prop()], VueSlideMark.prototype, "labelActiveStyle", void 0);
        VueSlideMark = __decorate([vue_class_component_common_default()({
          name: "VueSlideMark"
        })], VueSlideMark);
        var vue_slider_mark = VueSlideMark;
        var getSize = function getSize2(value) {
          return typeof value === "number" ? "".concat(value, "px") : value;
        };
        var getOffset = function getOffset2(elem) {
          var doc = document.documentElement;
          var body = document.body;
          var rect = elem.getBoundingClientRect();
          var offset = {
            y: rect.top + (window.pageYOffset || doc.scrollTop) - (doc.clientTop || body.clientTop || 0),
            x: rect.left + (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || body.clientLeft || 0)
          };
          return offset;
        };
        var getPos = function getPos2(e, elem, isReverse) {
          var zoom = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
          var event = "targetTouches" in e ? e.targetTouches[0] : e;
          var offset = getOffset(elem);
          var posObj = {
            x: event.pageX - offset.x,
            y: event.pageY - offset.y
          };
          return {
            x: isReverse ? elem.offsetWidth * zoom - posObj.x : posObj.x,
            y: isReverse ? elem.offsetHeight * zoom - posObj.y : posObj.y
          };
        };
        var KEY_CODE;
        (function(KEY_CODE2) {
          KEY_CODE2[KEY_CODE2["PAGE_UP"] = 33] = "PAGE_UP";
          KEY_CODE2[KEY_CODE2["PAGE_DOWN"] = 34] = "PAGE_DOWN";
          KEY_CODE2[KEY_CODE2["END"] = 35] = "END";
          KEY_CODE2[KEY_CODE2["HOME"] = 36] = "HOME";
          KEY_CODE2[KEY_CODE2["LEFT"] = 37] = "LEFT";
          KEY_CODE2[KEY_CODE2["UP"] = 38] = "UP";
          KEY_CODE2[KEY_CODE2["RIGHT"] = 39] = "RIGHT";
          KEY_CODE2[KEY_CODE2["DOWN"] = 40] = "DOWN";
        })(KEY_CODE || (KEY_CODE = {}));
        var getKeyboardHandleFunc = function getKeyboardHandleFunc2(e, params) {
          if (params.hook) {
            var result = params.hook(e);
            if (typeof result === "function")
              return result;
            if (!result)
              return null;
          }
          switch (e.keyCode) {
            case KEY_CODE.UP:
              return function(i) {
                return params.direction === "ttb" ? i - 1 : i + 1;
              };
            case KEY_CODE.RIGHT:
              return function(i) {
                return params.direction === "rtl" ? i - 1 : i + 1;
              };
            case KEY_CODE.DOWN:
              return function(i) {
                return params.direction === "ttb" ? i + 1 : i - 1;
              };
            case KEY_CODE.LEFT:
              return function(i) {
                return params.direction === "rtl" ? i + 1 : i - 1;
              };
            case KEY_CODE.END:
              return function() {
                return params.max;
              };
            case KEY_CODE.HOME:
              return function() {
                return params.min;
              };
            case KEY_CODE.PAGE_UP:
              return function(i) {
                return i + 10;
              };
            case KEY_CODE.PAGE_DOWN:
              return function(i) {
                return i - 10;
              };
            default:
              return null;
          }
        };
        function decimal_classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function decimal_defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function decimal_createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            decimal_defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            decimal_defineProperties(Constructor, staticProps);
          return Constructor;
        }
        var Decimal = /* @__PURE__ */ function() {
          function Decimal2(num) {
            decimal_classCallCheck(this, Decimal2);
            this.num = num;
          }
          decimal_createClass(Decimal2, [{
            key: "decimal",
            value: function decimal(num2, operator) {
              var num1 = this.num;
              var len1 = this.getDecimalLen(num1);
              var len2 = this.getDecimalLen(num2);
              var base = 0;
              switch (operator) {
                case "+":
                  base = this.getExponent(len1, len2);
                  this.num = (this.safeRoundUp(num1, base) + this.safeRoundUp(num2, base)) / base;
                  break;
                case "-":
                  base = this.getExponent(len1, len2);
                  this.num = (this.safeRoundUp(num1, base) - this.safeRoundUp(num2, base)) / base;
                  break;
                case "*":
                  this.num = this.safeRoundUp(this.safeRoundUp(num1, this.getExponent(len1)), this.safeRoundUp(num2, this.getExponent(len2))) / this.getExponent(len1 + len2);
                  break;
                case "/":
                  base = this.getExponent(len1, len2);
                  this.num = this.safeRoundUp(num1, base) / this.safeRoundUp(num2, base);
                  break;
                case "%":
                  base = this.getExponent(len1, len2);
                  this.num = this.safeRoundUp(num1, base) % this.safeRoundUp(num2, base) / base;
                  break;
              }
              return this;
            }
          }, {
            key: "plus",
            value: function plus(num2) {
              return this.decimal(num2, "+");
            }
          }, {
            key: "minus",
            value: function minus(num2) {
              return this.decimal(num2, "-");
            }
          }, {
            key: "multiply",
            value: function multiply(num2) {
              return this.decimal(num2, "*");
            }
          }, {
            key: "divide",
            value: function divide(num2) {
              return this.decimal(num2, "/");
            }
          }, {
            key: "remainder",
            value: function remainder(num2) {
              return this.decimal(num2, "%");
            }
          }, {
            key: "toNumber",
            value: function toNumber() {
              return this.num;
            }
          }, {
            key: "getDecimalLen",
            value: function getDecimalLen(num) {
              var strArr = "".concat(num).split("e");
              return ("".concat(strArr[0]).split(".")[1] || "").length - (strArr[1] ? +strArr[1] : 0);
            }
          }, {
            key: "getExponent",
            value: function getExponent(num1, num2) {
              return Math.pow(10, num2 !== void 0 ? Math.max(num1, num2) : num1);
            }
          }, {
            key: "safeRoundUp",
            value: function safeRoundUp(num, exponent) {
              return Math.round(num * exponent);
            }
          }]);
          return Decimal2;
        }();
        var _ERROR_MSG;
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _iterableToArrayLimit(arr, i) {
          if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
            return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = void 0;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function _toConsumableArray(arr) {
          return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }
        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o)
            return;
          if (typeof o === "string")
            return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor)
            n = o.constructor.name;
          if (n === "Map" || n === "Set")
            return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o, minLen);
        }
        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
            return Array.from(iter);
        }
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr))
            return _arrayLikeToArray(arr);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
        function control_classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function control_defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function control_createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            control_defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            control_defineProperties(Constructor, staticProps);
          return Constructor;
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        var ERROR_TYPE;
        (function(ERROR_TYPE2) {
          ERROR_TYPE2[ERROR_TYPE2["VALUE"] = 1] = "VALUE";
          ERROR_TYPE2[ERROR_TYPE2["INTERVAL"] = 2] = "INTERVAL";
          ERROR_TYPE2[ERROR_TYPE2["MIN"] = 3] = "MIN";
          ERROR_TYPE2[ERROR_TYPE2["MAX"] = 4] = "MAX";
          ERROR_TYPE2[ERROR_TYPE2["ORDER"] = 5] = "ORDER";
        })(ERROR_TYPE || (ERROR_TYPE = {}));
        var ERROR_MSG = (_ERROR_MSG = {}, _defineProperty(_ERROR_MSG, ERROR_TYPE.VALUE, 'The type of the "value" is illegal'), _defineProperty(_ERROR_MSG, ERROR_TYPE.INTERVAL, 'The prop "interval" is invalid, "(max - min)" must be divisible by "interval"'), _defineProperty(_ERROR_MSG, ERROR_TYPE.MIN, 'The "value" must be greater than or equal to the "min".'), _defineProperty(_ERROR_MSG, ERROR_TYPE.MAX, 'The "value" must be less than or equal to the "max".'), _defineProperty(_ERROR_MSG, ERROR_TYPE.ORDER, 'When "order" is false, the parameters "minRange", "maxRange", "fixed", "enabled" are invalid.'), _ERROR_MSG);
        var control_Control = /* @__PURE__ */ function() {
          function Control(options) {
            control_classCallCheck(this, Control);
            this.dotsPos = [];
            this.dotsValue = [];
            this.cacheRangeDir = {};
            this.data = options.data;
            this.max = options.max;
            this.min = options.min;
            this.interval = options.interval;
            this.order = options.order;
            this.marks = options.marks;
            this.included = options.included;
            this.process = options.process;
            this.adsorb = options.adsorb;
            this.dotOptions = options.dotOptions;
            this.onError = options.onError;
            if (this.order) {
              this.minRange = options.minRange || 0;
              this.maxRange = options.maxRange || 0;
              this.enableCross = options.enableCross;
              this.fixed = options.fixed;
            } else {
              if (options.minRange || options.maxRange || !options.enableCross || options.fixed) {
                this.emitError(ERROR_TYPE.ORDER);
              }
              this.minRange = 0;
              this.maxRange = 0;
              this.enableCross = true;
              this.fixed = false;
            }
            this.setValue(options.value);
          }
          control_createClass(Control, [{
            key: "setValue",
            value: function setValue(value) {
              var _this = this;
              this.setDotsValue(Array.isArray(value) ? this.order ? _toConsumableArray(value).sort(function(a, b) {
                return _this.getIndexByValue(a) - _this.getIndexByValue(b);
              }) : _toConsumableArray(value) : [value], true);
            }
          }, {
            key: "setDotsValue",
            value: function setDotsValue(value, syncPos) {
              this.dotsValue = value;
              if (syncPos) {
                this.syncDotsPos();
              }
            }
          }, {
            key: "setDotsPos",
            value: function setDotsPos(dotsPos) {
              var _this2 = this;
              var list = this.order ? _toConsumableArray(dotsPos).sort(function(a, b) {
                return a - b;
              }) : dotsPos;
              this.dotsPos = list;
              this.setDotsValue(list.map(function(dotPos) {
                return _this2.getValueByPos(dotPos);
              }), this.adsorb);
            }
          }, {
            key: "getValueByPos",
            value: function getValueByPos(pos) {
              var value = this.parsePos(pos);
              if (this.included) {
                var dir = 100;
                this.markList.forEach(function(mark) {
                  var curDir = Math.abs(mark.pos - pos);
                  if (curDir < dir) {
                    dir = curDir;
                    value = mark.value;
                  }
                });
              }
              return value;
            }
          }, {
            key: "syncDotsPos",
            value: function syncDotsPos() {
              var _this3 = this;
              this.dotsPos = this.dotsValue.map(function(v) {
                return _this3.parseValue(v);
              });
            }
          }, {
            key: "getRecentDot",
            value: function getRecentDot(pos) {
              var _this4 = this;
              var arr = this.dotsPos.filter(function(dotPos, index) {
                return !(_this4.getDotOption(index) && _this4.getDotOption(index).disabled);
              }).map(function(dotPos) {
                return Math.abs(dotPos - pos);
              });
              return arr.indexOf(Math.min.apply(Math, _toConsumableArray(arr)));
            }
          }, {
            key: "getIndexByValue",
            value: function getIndexByValue(value) {
              if (this.data) {
                return this.data.indexOf(value);
              }
              return new Decimal(+value).minus(this.min).divide(this.interval).toNumber();
            }
          }, {
            key: "getValueByIndex",
            value: function getValueByIndex(index) {
              if (index < 0) {
                index = 0;
              } else if (index > this.total) {
                index = this.total;
              }
              return this.data ? this.data[index] : new Decimal(index).multiply(this.interval).plus(this.min).toNumber();
            }
          }, {
            key: "setDotPos",
            value: function setDotPos(pos, index) {
              pos = this.getValidPos(pos, index).pos;
              var changePos = pos - this.dotsPos[index];
              if (!changePos) {
                return;
              }
              var changePosArr = new Array(this.dotsPos.length);
              if (this.fixed) {
                changePosArr = this.getFixedChangePosArr(changePos, index);
              } else if (this.minRange || this.maxRange) {
                changePosArr = this.getLimitRangeChangePosArr(pos, changePos, index);
              } else {
                changePosArr[index] = changePos;
              }
              this.setDotsPos(this.dotsPos.map(function(curPos, i) {
                return curPos + (changePosArr[i] || 0);
              }));
            }
          }, {
            key: "getFixedChangePosArr",
            value: function getFixedChangePosArr(changePos, index) {
              var _this5 = this;
              this.dotsPos.forEach(function(originPos, i) {
                if (i !== index) {
                  var _this5$getValidPos = _this5.getValidPos(originPos + changePos, i), lastPos = _this5$getValidPos.pos, inRange = _this5$getValidPos.inRange;
                  if (!inRange) {
                    changePos = Math.min(Math.abs(lastPos - originPos), Math.abs(changePos)) * (changePos < 0 ? -1 : 1);
                  }
                }
              });
              return this.dotsPos.map(function(_) {
                return changePos;
              });
            }
          }, {
            key: "getLimitRangeChangePosArr",
            value: function getLimitRangeChangePosArr(pos, changePos, index) {
              var _this6 = this;
              var changeDots = [{
                index,
                changePos
              }];
              var newChangePos = changePos;
              [this.minRange, this.maxRange].forEach(function(isLimitRange, rangeIndex) {
                if (!isLimitRange) {
                  return false;
                }
                var isMinRange = rangeIndex === 0;
                var isForward = changePos > 0;
                var next = 0;
                if (isMinRange) {
                  next = isForward ? 1 : -1;
                } else {
                  next = isForward ? -1 : 1;
                }
                var inLimitRange = function inLimitRange2(pos2, pos1) {
                  var diff = Math.abs(pos2 - pos1);
                  return isMinRange ? diff < _this6.minRangeDir : diff > _this6.maxRangeDir;
                };
                var i = index + next;
                var nextPos = _this6.dotsPos[i];
                var curPos = pos;
                while (_this6.isPos(nextPos) && inLimitRange(nextPos, curPos)) {
                  var _this6$getValidPos = _this6.getValidPos(nextPos + newChangePos, i), lastPos = _this6$getValidPos.pos;
                  changeDots.push({
                    index: i,
                    changePos: lastPos - nextPos
                  });
                  i = i + next;
                  curPos = lastPos;
                  nextPos = _this6.dotsPos[i];
                }
              });
              return this.dotsPos.map(function(_, i) {
                var changeDot = changeDots.filter(function(dot) {
                  return dot.index === i;
                });
                return changeDot.length ? changeDot[0].changePos : 0;
              });
            }
          }, {
            key: "isPos",
            value: function isPos(pos) {
              return typeof pos === "number";
            }
          }, {
            key: "getValidPos",
            value: function getValidPos(pos, index) {
              var range = this.valuePosRange[index];
              var inRange = true;
              if (pos < range[0]) {
                pos = range[0];
                inRange = false;
              } else if (pos > range[1]) {
                pos = range[1];
                inRange = false;
              }
              return {
                pos,
                inRange
              };
            }
          }, {
            key: "parseValue",
            value: function parseValue(val) {
              if (this.data) {
                val = this.data.indexOf(val);
              } else if (typeof val === "number" || typeof val === "string") {
                val = +val;
                if (val < this.min) {
                  this.emitError(ERROR_TYPE.MIN);
                  return 0;
                }
                if (val > this.max) {
                  this.emitError(ERROR_TYPE.MAX);
                  return 0;
                }
                if (typeof val !== "number" || val !== val) {
                  this.emitError(ERROR_TYPE.VALUE);
                  return 0;
                }
                val = new Decimal(val).minus(this.min).divide(this.interval).toNumber();
              }
              var pos = new Decimal(val).multiply(this.gap).toNumber();
              return pos < 0 ? 0 : pos > 100 ? 100 : pos;
            }
          }, {
            key: "parsePos",
            value: function parsePos(pos) {
              var index = Math.round(pos / this.gap);
              return this.getValueByIndex(index);
            }
          }, {
            key: "isActiveByPos",
            value: function isActiveByPos(pos) {
              return this.processArray.some(function(_ref) {
                var _ref2 = _slicedToArray(_ref, 2), start = _ref2[0], end = _ref2[1];
                return pos >= start && pos <= end;
              });
            }
          }, {
            key: "getValues",
            value: function getValues() {
              if (this.data) {
                return this.data;
              } else {
                var values = [];
                for (var i = 0; i <= this.total; i++) {
                  values.push(new Decimal(i).multiply(this.interval).plus(this.min).toNumber());
                }
                return values;
              }
            }
          }, {
            key: "getRangeDir",
            value: function getRangeDir(range) {
              return range ? new Decimal(range).divide(new Decimal(this.data ? this.data.length - 1 : this.max).minus(this.data ? 0 : this.min).toNumber()).multiply(100).toNumber() : 100;
            }
          }, {
            key: "emitError",
            value: function emitError(type) {
              if (this.onError) {
                this.onError(type, ERROR_MSG[type]);
              }
            }
          }, {
            key: "getDotOption",
            value: function getDotOption(index) {
              return Array.isArray(this.dotOptions) ? this.dotOptions[index] : this.dotOptions;
            }
          }, {
            key: "getDotRange",
            value: function getDotRange(index, key, defaultValue) {
              if (!this.dotOptions) {
                return defaultValue;
              }
              var option = this.getDotOption(index);
              return option && option[key] !== void 0 ? this.parseValue(option[key]) : defaultValue;
            }
          }, {
            key: "markList",
            get: function get() {
              var _this7 = this;
              if (!this.marks) {
                return [];
              }
              var getMarkByValue = function getMarkByValue2(value, mark) {
                var pos = _this7.parseValue(value);
                return _objectSpread({
                  pos,
                  value,
                  label: value,
                  active: _this7.isActiveByPos(pos)
                }, mark);
              };
              if (this.marks === true) {
                return this.getValues().map(function(value) {
                  return getMarkByValue(value);
                });
              } else if (Object.prototype.toString.call(this.marks) === "[object Object]") {
                return Object.keys(this.marks).sort(function(a, b) {
                  return +a - +b;
                }).map(function(value) {
                  var item = _this7.marks[value];
                  return getMarkByValue(value, typeof item !== "string" ? item : {
                    label: item
                  });
                });
              } else if (Array.isArray(this.marks)) {
                return this.marks.map(function(value) {
                  return getMarkByValue(value);
                });
              } else if (typeof this.marks === "function") {
                return this.getValues().map(function(value) {
                  return {
                    value,
                    result: _this7.marks(value)
                  };
                }).filter(function(_ref3) {
                  var result = _ref3.result;
                  return !!result;
                }).map(function(_ref4) {
                  var value = _ref4.value, result = _ref4.result;
                  return getMarkByValue(value, result);
                });
              } else {
                return [];
              }
            }
          }, {
            key: "processArray",
            get: function get() {
              if (this.process) {
                if (typeof this.process === "function") {
                  return this.process(this.dotsPos);
                } else if (this.dotsPos.length === 1) {
                  return [[0, this.dotsPos[0]]];
                } else if (this.dotsPos.length > 1) {
                  return [[Math.min.apply(Math, _toConsumableArray(this.dotsPos)), Math.max.apply(Math, _toConsumableArray(this.dotsPos))]];
                }
              }
              return [];
            }
          }, {
            key: "total",
            get: function get() {
              var total = 0;
              if (this.data) {
                total = this.data.length - 1;
              } else {
                total = new Decimal(this.max).minus(this.min).divide(this.interval).toNumber();
              }
              if (total - Math.floor(total) !== 0) {
                this.emitError(ERROR_TYPE.INTERVAL);
                return 0;
              }
              return total;
            }
          }, {
            key: "gap",
            get: function get() {
              return 100 / this.total;
            }
          }, {
            key: "minRangeDir",
            get: function get() {
              if (this.cacheRangeDir[this.minRange]) {
                return this.cacheRangeDir[this.minRange];
              }
              return this.cacheRangeDir[this.minRange] = this.getRangeDir(this.minRange);
            }
          }, {
            key: "maxRangeDir",
            get: function get() {
              if (this.cacheRangeDir[this.maxRange])
                return this.cacheRangeDir[this.maxRange];
              return this.cacheRangeDir[this.maxRange] = this.getRangeDir(this.maxRange);
            }
          }, {
            key: "valuePosRange",
            get: function get() {
              var _this8 = this;
              var dotsPos = this.dotsPos;
              var valuePosRange = [];
              dotsPos.forEach(function(pos, i) {
                valuePosRange.push([Math.max(_this8.minRange ? _this8.minRangeDir * i : 0, !_this8.enableCross ? dotsPos[i - 1] || 0 : 0, _this8.getDotRange(i, "min", 0)), Math.min(_this8.minRange ? 100 - _this8.minRangeDir * (dotsPos.length - 1 - i) : 100, !_this8.enableCross ? dotsPos[i + 1] || 100 : 100, _this8.getDotRange(i, "max", 100))]);
              });
              return valuePosRange;
            }
          }, {
            key: "dotsIndex",
            get: function get() {
              var _this9 = this;
              return this.dotsValue.map(function(val) {
                return _this9.getIndexByValue(val);
              });
            }
          }]);
          return Control;
        }();
        function state_classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function state_defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function state_createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            state_defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            state_defineProperties(Constructor, staticProps);
          return Constructor;
        }
        var State = /* @__PURE__ */ function() {
          function State2(map) {
            state_classCallCheck(this, State2);
            this.states = 0;
            this.map = map;
          }
          state_createClass(State2, [{
            key: "add",
            value: function add(state) {
              this.states |= state;
            }
          }, {
            key: "delete",
            value: function _delete(state) {
              this.states &= ~state;
            }
          }, {
            key: "toggle",
            value: function toggle(state) {
              if (this.has(state)) {
                this.delete(state);
              } else {
                this.add(state);
              }
            }
          }, {
            key: "has",
            value: function has(state) {
              return !!(this.states & state);
            }
          }]);
          return State2;
        }();
        __webpack_require__("4abb");
        function vue_slider_slicedToArray(arr, i) {
          return vue_slider_arrayWithHoles(arr) || vue_slider_iterableToArrayLimit(arr, i) || vue_slider_unsupportedIterableToArray(arr, i) || vue_slider_nonIterableRest();
        }
        function vue_slider_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function vue_slider_iterableToArrayLimit(arr, i) {
          if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
            return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = void 0;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function vue_slider_arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function vue_slider_ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function vue_slider_objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              vue_slider_ownKeys(Object(source), true).forEach(function(key) {
                vue_slider_defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              vue_slider_ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        function vue_slider_defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function vue_slider_toConsumableArray(arr) {
          return vue_slider_arrayWithoutHoles(arr) || vue_slider_iterableToArray(arr) || vue_slider_unsupportedIterableToArray(arr) || vue_slider_nonIterableSpread();
        }
        function vue_slider_nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function vue_slider_unsupportedIterableToArray(o, minLen) {
          if (!o)
            return;
          if (typeof o === "string")
            return vue_slider_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor)
            n = o.constructor.name;
          if (n === "Map" || n === "Set")
            return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return vue_slider_arrayLikeToArray(o, minLen);
        }
        function vue_slider_iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
            return Array.from(iter);
        }
        function vue_slider_arrayWithoutHoles(arr) {
          if (Array.isArray(arr))
            return vue_slider_arrayLikeToArray(arr);
        }
        function vue_slider_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
        function vue_slider_typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            vue_slider_typeof = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            vue_slider_typeof = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return vue_slider_typeof(obj);
        }
        function vue_slider_classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function vue_slider_defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function vue_slider_createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            vue_slider_defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            vue_slider_defineProperties(Constructor, staticProps);
          return Constructor;
        }
        function vue_slider_inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
          if (superClass)
            vue_slider_setPrototypeOf(subClass, superClass);
        }
        function vue_slider_setPrototypeOf(o, p) {
          vue_slider_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
            o2.__proto__ = p2;
            return o2;
          };
          return vue_slider_setPrototypeOf(o, p);
        }
        function vue_slider_createSuper(Derived) {
          var hasNativeReflectConstruct = vue_slider_isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = vue_slider_getPrototypeOf(Derived), result;
            if (hasNativeReflectConstruct) {
              var NewTarget = vue_slider_getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return vue_slider_possibleConstructorReturn(this, result);
          };
        }
        function vue_slider_possibleConstructorReturn(self2, call) {
          if (call && (vue_slider_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }
          return vue_slider_assertThisInitialized(self2);
        }
        function vue_slider_assertThisInitialized(self2) {
          if (self2 === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self2;
        }
        function vue_slider_isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy === "function")
            return true;
          try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            }));
            return true;
          } catch (e) {
            return false;
          }
        }
        function vue_slider_getPrototypeOf(o) {
          vue_slider_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
            return o2.__proto__ || Object.getPrototypeOf(o2);
          };
          return vue_slider_getPrototypeOf(o);
        }
        var SliderState = {
          None: 0,
          Drag: 1 << 1,
          Focus: 1 << 2
        };
        var DEFAULT_SLIDER_SIZE = 4;
        var vue_slider_VueSlider = /* @__PURE__ */ function(_Vue) {
          vue_slider_inherits(VueSlider, _Vue);
          var _super = vue_slider_createSuper(VueSlider);
          function VueSlider() {
            var _this;
            vue_slider_classCallCheck(this, VueSlider);
            _this = _super.apply(this, arguments);
            _this.states = new State(SliderState);
            _this.scale = 1;
            _this.focusDotIndex = 0;
            return _this;
          }
          vue_slider_createClass(VueSlider, [{
            key: "isObjectData",
            value: function isObjectData(data) {
              return !!data && Object.prototype.toString.call(data) === "[object Object]";
            }
          }, {
            key: "isObjectArrayData",
            value: function isObjectArrayData(data) {
              return !!data && Array.isArray(data) && data.length > 0 && vue_slider_typeof(data[0]) === "object";
            }
          }, {
            key: "onValueChanged",
            value: function onValueChanged() {
              if (this.control && !this.states.has(SliderState.Drag) && this.isNotSync) {
                this.control.setValue(this.value);
                this.syncValueByPos();
              }
            }
          }, {
            key: "created",
            value: function created() {
              this.initControl();
            }
          }, {
            key: "mounted",
            value: function mounted() {
              this.bindEvent();
            }
          }, {
            key: "beforeDestroy",
            value: function beforeDestroy() {
              this.unbindEvent();
            }
          }, {
            key: "bindEvent",
            value: function bindEvent() {
              document.addEventListener("touchmove", this.dragMove, {
                passive: false
              });
              document.addEventListener("touchend", this.dragEnd, {
                passive: false
              });
              document.addEventListener("mousedown", this.blurHandle);
              document.addEventListener("mousemove", this.dragMove, {
                passive: false
              });
              document.addEventListener("mouseup", this.dragEnd);
              document.addEventListener("mouseleave", this.dragEnd);
              document.addEventListener("keydown", this.keydownHandle);
            }
          }, {
            key: "unbindEvent",
            value: function unbindEvent() {
              document.removeEventListener("touchmove", this.dragMove);
              document.removeEventListener("touchend", this.dragEnd);
              document.removeEventListener("mousedown", this.blurHandle);
              document.removeEventListener("mousemove", this.dragMove);
              document.removeEventListener("mouseup", this.dragEnd);
              document.removeEventListener("mouseleave", this.dragEnd);
              document.removeEventListener("keydown", this.keydownHandle);
            }
          }, {
            key: "setScale",
            value: function setScale() {
              var decimal = new Decimal(Math.floor(this.isHorizontal ? this.$refs.rail.offsetWidth : this.$refs.rail.offsetHeight));
              if (this.zoom !== void 0) {
                decimal.multiply(this.zoom);
              }
              decimal.divide(100);
              this.scale = decimal.toNumber();
            }
          }, {
            key: "initControl",
            value: function initControl() {
              var _this2 = this;
              this.control = new control_Control({
                value: this.value,
                data: this.sliderData,
                enableCross: this.enableCross,
                fixed: this.fixed,
                max: this.max,
                min: this.min,
                interval: this.interval,
                minRange: this.minRange,
                maxRange: this.maxRange,
                order: this.order,
                marks: this.sliderMarks,
                included: this.included,
                process: this.process,
                adsorb: this.adsorb,
                dotOptions: this.dotOptions,
                onError: this.emitError
              });
              this.syncValueByPos();
              ["data", "enableCross", "fixed", "max", "min", "interval", "minRange", "maxRange", "order", "marks", "process", "adsorb", "included", "dotOptions"].forEach(function(name) {
                _this2.$watch(name, function(val) {
                  if (name === "data" && Array.isArray(_this2.control.data) && Array.isArray(val) && _this2.control.data.length === val.length && val.every(function(item, index) {
                    return item === _this2.control.data[index];
                  })) {
                    return false;
                  }
                  switch (name) {
                    case "data":
                    case "dataLabel":
                    case "dataValue":
                      _this2.control.data = _this2.sliderData;
                      break;
                    case "mark":
                      _this2.control.marks = _this2.sliderMarks;
                      break;
                    default:
                      _this2.control[name] = val;
                  }
                  if (["data", "max", "min", "interval"].indexOf(name) > -1) {
                    _this2.control.syncDotsPos();
                  }
                });
              });
            }
          }, {
            key: "syncValueByPos",
            value: function syncValueByPos() {
              var values = this.control.dotsValue;
              if (this.isDiff(values, Array.isArray(this.value) ? this.value : [this.value])) {
                this.$emit("change", values.length === 1 ? values[0] : vue_slider_toConsumableArray(values), this.focusDotIndex);
              }
            }
          }, {
            key: "isDiff",
            value: function isDiff(value1, value2) {
              return value1.length !== value2.length || value1.some(function(val, index) {
                return val !== value2[index];
              });
            }
          }, {
            key: "emitError",
            value: function emitError(type, message) {
              if (!this.silent) {
                console.error("[VueSlider error]: ".concat(message));
              }
              this.$emit("error", type, message);
            }
          }, {
            key: "dragStartOnProcess",
            value: function dragStartOnProcess(e) {
              if (this.dragOnClick) {
                this.setScale();
                var pos = this.getPosByEvent(e);
                var index = this.control.getRecentDot(pos);
                if (this.dots[index].disabled) {
                  return;
                }
                this.dragStart(index);
                this.control.setDotPos(pos, this.focusDotIndex);
                if (!this.lazy) {
                  this.syncValueByPos();
                }
              }
            }
          }, {
            key: "dragStart",
            value: function dragStart(index) {
              this.focusDotIndex = index;
              this.setScale();
              this.states.add(SliderState.Drag);
              this.states.add(SliderState.Focus);
              this.$emit("drag-start", this.focusDotIndex);
            }
          }, {
            key: "dragMove",
            value: function dragMove(e) {
              if (!this.states.has(SliderState.Drag)) {
                return false;
              }
              e.preventDefault();
              var pos = this.getPosByEvent(e);
              this.isCrossDot(pos);
              this.control.setDotPos(pos, this.focusDotIndex);
              if (!this.lazy) {
                this.syncValueByPos();
              }
              var value = this.control.dotsValue;
              this.$emit("dragging", value.length === 1 ? value[0] : vue_slider_toConsumableArray(value), this.focusDotIndex);
            }
          }, {
            key: "isCrossDot",
            value: function isCrossDot(pos) {
              if (this.canSort) {
                var curIndex = this.focusDotIndex;
                var curPos = pos;
                if (curPos > this.dragRange[1]) {
                  curPos = this.dragRange[1];
                  this.focusDotIndex++;
                } else if (curPos < this.dragRange[0]) {
                  curPos = this.dragRange[0];
                  this.focusDotIndex--;
                }
                if (curIndex !== this.focusDotIndex) {
                  var dotVm = this.$refs["dot-".concat(this.focusDotIndex)];
                  if (dotVm && dotVm.$el) {
                    dotVm.$el.focus();
                  }
                  this.control.setDotPos(curPos, curIndex);
                }
              }
            }
          }, {
            key: "dragEnd",
            value: function dragEnd(e) {
              var _this3 = this;
              if (!this.states.has(SliderState.Drag)) {
                return false;
              }
              setTimeout(function() {
                if (_this3.lazy) {
                  _this3.syncValueByPos();
                }
                if (_this3.included && _this3.isNotSync) {
                  _this3.control.setValue(_this3.value);
                } else {
                  _this3.control.syncDotsPos();
                }
                _this3.states.delete(SliderState.Drag);
                if (!_this3.useKeyboard || "targetTouches" in e) {
                  _this3.states.delete(SliderState.Focus);
                }
                _this3.$emit("drag-end", _this3.focusDotIndex);
              });
            }
          }, {
            key: "blurHandle",
            value: function blurHandle(e) {
              if (!this.states.has(SliderState.Focus) || !this.$refs.container || this.$refs.container.contains(e.target)) {
                return false;
              }
              this.states.delete(SliderState.Focus);
            }
          }, {
            key: "clickHandle",
            value: function clickHandle(e) {
              if (!this.clickable || this.disabled) {
                return false;
              }
              if (this.states.has(SliderState.Drag)) {
                return;
              }
              this.setScale();
              var pos = this.getPosByEvent(e);
              this.setValueByPos(pos);
            }
          }, {
            key: "focus",
            value: function focus() {
              var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
              this.states.add(SliderState.Focus);
              this.focusDotIndex = index;
            }
          }, {
            key: "blur",
            value: function blur() {
              this.states.delete(SliderState.Focus);
            }
          }, {
            key: "getValue",
            value: function getValue() {
              var values = this.control.dotsValue;
              return values.length === 1 ? values[0] : values;
            }
          }, {
            key: "getIndex",
            value: function getIndex() {
              var indexes = this.control.dotsIndex;
              return indexes.length === 1 ? indexes[0] : indexes;
            }
          }, {
            key: "setValue",
            value: function setValue(value) {
              this.control.setValue(Array.isArray(value) ? vue_slider_toConsumableArray(value) : [value]);
              this.syncValueByPos();
            }
          }, {
            key: "setIndex",
            value: function setIndex(index) {
              var _this4 = this;
              var value = Array.isArray(index) ? index.map(function(n) {
                return _this4.control.getValueByIndex(n);
              }) : this.control.getValueByIndex(index);
              this.setValue(value);
            }
          }, {
            key: "setValueByPos",
            value: function setValueByPos(pos) {
              var _this5 = this;
              var index = this.control.getRecentDot(pos);
              if (this.disabled || this.dots[index].disabled) {
                return false;
              }
              this.focusDotIndex = index;
              this.control.setDotPos(pos, index);
              this.syncValueByPos();
              if (this.useKeyboard) {
                this.states.add(SliderState.Focus);
              }
              setTimeout(function() {
                if (_this5.included && _this5.isNotSync) {
                  _this5.control.setValue(_this5.value);
                } else {
                  _this5.control.syncDotsPos();
                }
              });
            }
          }, {
            key: "keydownHandle",
            value: function keydownHandle(e) {
              var _this6 = this;
              if (!this.useKeyboard || !this.states.has(SliderState.Focus)) {
                return false;
              }
              var isInclude = this.included && this.marks;
              var handleFunc = getKeyboardHandleFunc(e, {
                direction: this.direction,
                max: isInclude ? this.control.markList.length - 1 : this.control.total,
                min: 0,
                hook: this.keydownHook
              });
              if (handleFunc) {
                e.preventDefault();
                var newIndex = -1;
                var pos = 0;
                if (isInclude) {
                  this.control.markList.some(function(mark, index) {
                    if (mark.value === _this6.control.dotsValue[_this6.focusDotIndex]) {
                      newIndex = handleFunc(index);
                      return true;
                    }
                    return false;
                  });
                  if (newIndex < 0) {
                    newIndex = 0;
                  } else if (newIndex > this.control.markList.length - 1) {
                    newIndex = this.control.markList.length - 1;
                  }
                  pos = this.control.markList[newIndex].pos;
                } else {
                  newIndex = handleFunc(this.control.getIndexByValue(this.control.dotsValue[this.focusDotIndex]));
                  pos = this.control.parseValue(this.control.getValueByIndex(newIndex));
                }
                this.isCrossDot(pos);
                this.control.setDotPos(pos, this.focusDotIndex);
                this.syncValueByPos();
              }
            }
          }, {
            key: "getPosByEvent",
            value: function getPosByEvent(e) {
              return getPos(e, this.$refs.rail, this.isReverse, this.zoom)[this.isHorizontal ? "x" : "y"] / this.scale;
            }
          }, {
            key: "renderSlot",
            value: function renderSlot(name, data, defaultSlot, isDefault) {
              var h = this.$createElement;
              var scopedSlot = this.$scopedSlots[name];
              return scopedSlot ? isDefault ? scopedSlot(data) : h("template", {
                "slot": name
              }, [scopedSlot(data)]) : defaultSlot;
            }
          }, {
            key: "render",
            value: function render() {
              var _this7 = this;
              var h = arguments[0];
              return h("div", helper_default()([{
                "ref": "container",
                "class": this.containerClasses,
                "style": this.containerStyles,
                "on": {
                  "click": this.clickHandle,
                  "touchstart": this.dragStartOnProcess,
                  "mousedown": this.dragStartOnProcess
                }
              }, this.$attrs]), [h("div", {
                "ref": "rail",
                "class": "vue-slider-rail",
                "style": this.railStyle
              }, [this.processArray.map(function(item, index) {
                return _this7.renderSlot("process", item, h("div", {
                  "class": "vue-slider-process",
                  "key": "process-".concat(index),
                  "style": item.style
                }), true);
              }), this.sliderMarks ? h("div", {
                "class": "vue-slider-marks"
              }, [this.control.markList.map(function(mark, index) {
                var _ref;
                return _this7.renderSlot("mark", mark, h("vue-slider-mark", {
                  "key": "mark-".concat(index),
                  "attrs": {
                    "mark": mark,
                    "hideLabel": _this7.hideLabel,
                    "stepStyle": _this7.stepStyle,
                    "stepActiveStyle": _this7.stepActiveStyle,
                    "labelStyle": _this7.labelStyle,
                    "labelActiveStyle": _this7.labelActiveStyle
                  },
                  "style": (_ref = {}, vue_slider_defineProperty(_ref, _this7.isHorizontal ? "height" : "width", "100%"), vue_slider_defineProperty(_ref, _this7.isHorizontal ? "width" : "height", _this7.tailSize), vue_slider_defineProperty(_ref, _this7.mainDirection, "".concat(mark.pos, "%")), _ref),
                  "on": {
                    "pressLabel": function pressLabel(pos) {
                      return _this7.clickable && _this7.setValueByPos(pos);
                    }
                  }
                }, [_this7.renderSlot("step", mark, null), _this7.renderSlot("label", mark, null)]), true);
              })]) : null, this.dots.map(function(dot, index) {
                var _ref2;
                return h("vue-slider-dot", {
                  "ref": "dot-".concat(index),
                  "key": "dot-".concat(index),
                  "attrs": vue_slider_objectSpread({
                    "value": dot.value,
                    "disabled": dot.disabled,
                    "focus": dot.focus,
                    "dot-style": [dot.style, dot.disabled ? dot.disabledStyle : null, dot.focus ? dot.focusStyle : null],
                    "tooltip": dot.tooltip || _this7.tooltip,
                    "tooltip-style": [_this7.tooltipStyle, dot.tooltipStyle, dot.disabled ? dot.tooltipDisabledStyle : null, dot.focus ? dot.tooltipFocusStyle : null],
                    "tooltip-formatter": Array.isArray(_this7.sliderTooltipFormatter) ? _this7.sliderTooltipFormatter[index] : _this7.sliderTooltipFormatter,
                    "tooltip-placement": _this7.tooltipDirections[index],
                    "role": "slider",
                    "aria-valuenow": dot.value,
                    "aria-valuemin": _this7.min,
                    "aria-valuemax": _this7.max,
                    "aria-orientation": _this7.isHorizontal ? "horizontal" : "vertical",
                    "tabindex": "0"
                  }, _this7.dotAttrs),
                  "style": [_this7.dotBaseStyle, (_ref2 = {}, vue_slider_defineProperty(_ref2, _this7.mainDirection, "".concat(dot.pos, "%")), vue_slider_defineProperty(_ref2, "transition", "".concat(_this7.mainDirection, " ").concat(_this7.animateTime, "s")), _ref2)],
                  "on": {
                    "drag-start": function dragStart() {
                      return _this7.dragStart(index);
                    }
                  },
                  "nativeOn": {
                    "focus": function focus() {
                      return !dot.disabled && _this7.focus(index);
                    },
                    "blur": function blur() {
                      return _this7.blur();
                    }
                  }
                }, [_this7.renderSlot("dot", dot, null), _this7.renderSlot("tooltip", dot, null)]);
              }), this.renderSlot("default", {
                value: this.getValue()
              }, null, true)])]);
            }
          }, {
            key: "tailSize",
            get: function get() {
              return getSize((this.isHorizontal ? this.height : this.width) || DEFAULT_SLIDER_SIZE);
            }
          }, {
            key: "containerClasses",
            get: function get() {
              return ["vue-slider", ["vue-slider-".concat(this.direction)], {
                "vue-slider-disabled": this.disabled
              }];
            }
          }, {
            key: "containerStyles",
            get: function get() {
              var _ref3 = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize], _ref4 = vue_slider_slicedToArray(_ref3, 2), dotWidth = _ref4[0], dotHeight = _ref4[1];
              var containerWidth = this.width ? getSize(this.width) : this.isHorizontal ? "auto" : getSize(DEFAULT_SLIDER_SIZE);
              var containerHeight = this.height ? getSize(this.height) : this.isHorizontal ? getSize(DEFAULT_SLIDER_SIZE) : "auto";
              return {
                padding: this.contained ? "".concat(dotHeight / 2, "px ").concat(dotWidth / 2, "px") : this.isHorizontal ? "".concat(dotHeight / 2, "px 0") : "0 ".concat(dotWidth / 2, "px"),
                width: containerWidth,
                height: containerHeight
              };
            }
          }, {
            key: "processArray",
            get: function get() {
              var _this8 = this;
              return this.control.processArray.map(function(_ref5, index) {
                var _objectSpread2;
                var _ref6 = vue_slider_slicedToArray(_ref5, 3), start = _ref6[0], end = _ref6[1], style = _ref6[2];
                if (start > end) {
                  var _ref7 = [end, start];
                  start = _ref7[0];
                  end = _ref7[1];
                }
                var sizeStyleKey = _this8.isHorizontal ? "width" : "height";
                return {
                  start,
                  end,
                  index,
                  style: vue_slider_objectSpread(vue_slider_objectSpread((_objectSpread2 = {}, vue_slider_defineProperty(_objectSpread2, _this8.isHorizontal ? "height" : "width", "100%"), vue_slider_defineProperty(_objectSpread2, _this8.isHorizontal ? "top" : "left", 0), vue_slider_defineProperty(_objectSpread2, _this8.mainDirection, "".concat(start, "%")), vue_slider_defineProperty(_objectSpread2, sizeStyleKey, "".concat(end - start, "%")), vue_slider_defineProperty(_objectSpread2, "transitionProperty", "".concat(sizeStyleKey, ",").concat(_this8.mainDirection)), vue_slider_defineProperty(_objectSpread2, "transitionDuration", "".concat(_this8.animateTime, "s")), _objectSpread2), _this8.processStyle), style)
                };
              });
            }
          }, {
            key: "dotBaseStyle",
            get: function get() {
              var _ref8 = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize], _ref9 = vue_slider_slicedToArray(_ref8, 2), dotWidth = _ref9[0], dotHeight = _ref9[1];
              var dotPos;
              if (this.isHorizontal) {
                dotPos = vue_slider_defineProperty({
                  transform: "translate(".concat(this.isReverse ? "50%" : "-50%", ", -50%)"),
                  "-WebkitTransform": "translate(".concat(this.isReverse ? "50%" : "-50%", ", -50%)"),
                  top: "50%"
                }, this.direction === "ltr" ? "left" : "right", "0");
              } else {
                dotPos = vue_slider_defineProperty({
                  transform: "translate(-50%, ".concat(this.isReverse ? "50%" : "-50%", ")"),
                  "-WebkitTransform": "translate(-50%, ".concat(this.isReverse ? "50%" : "-50%", ")"),
                  left: "50%"
                }, this.direction === "btt" ? "bottom" : "top", "0");
              }
              return vue_slider_objectSpread({
                width: "".concat(dotWidth, "px"),
                height: "".concat(dotHeight, "px")
              }, dotPos);
            }
          }, {
            key: "mainDirection",
            get: function get() {
              switch (this.direction) {
                case "ltr":
                  return "left";
                case "rtl":
                  return "right";
                case "btt":
                  return "bottom";
                case "ttb":
                  return "top";
              }
            }
          }, {
            key: "isHorizontal",
            get: function get() {
              return this.direction === "ltr" || this.direction === "rtl";
            }
          }, {
            key: "isReverse",
            get: function get() {
              return this.direction === "rtl" || this.direction === "btt";
            }
          }, {
            key: "tooltipDirections",
            get: function get() {
              var dir = this.tooltipPlacement || (this.isHorizontal ? "top" : "left");
              if (Array.isArray(dir)) {
                return dir;
              } else {
                return this.dots.map(function() {
                  return dir;
                });
              }
            }
          }, {
            key: "dots",
            get: function get() {
              var _this9 = this;
              return this.control.dotsPos.map(function(pos, index) {
                return vue_slider_objectSpread({
                  pos,
                  index,
                  value: _this9.control.dotsValue[index],
                  focus: _this9.states.has(SliderState.Focus) && _this9.focusDotIndex === index,
                  disabled: _this9.disabled,
                  style: _this9.dotStyle
                }, (Array.isArray(_this9.dotOptions) ? _this9.dotOptions[index] : _this9.dotOptions) || {});
              });
            }
          }, {
            key: "animateTime",
            get: function get() {
              if (this.states.has(SliderState.Drag)) {
                return 0;
              }
              return this.duration;
            }
          }, {
            key: "canSort",
            get: function get() {
              return this.order && !this.minRange && !this.maxRange && !this.fixed && this.enableCross;
            }
          }, {
            key: "sliderData",
            get: function get() {
              var _this10 = this;
              if (this.isObjectArrayData(this.data)) {
                return this.data.map(function(obj) {
                  return obj[_this10.dataValue];
                });
              } else if (this.isObjectData(this.data)) {
                return Object.keys(this.data);
              } else {
                return this.data;
              }
            }
          }, {
            key: "sliderMarks",
            get: function get() {
              var _this11 = this;
              if (this.marks) {
                return this.marks;
              } else if (this.isObjectArrayData(this.data)) {
                return function(val) {
                  var mark = {
                    label: val
                  };
                  _this11.data.some(function(obj) {
                    if (obj[_this11.dataValue] === val) {
                      mark.label = obj[_this11.dataLabel];
                      return true;
                    }
                    return false;
                  });
                  return mark;
                };
              } else if (this.isObjectData(this.data)) {
                return this.data;
              }
            }
          }, {
            key: "sliderTooltipFormatter",
            get: function get() {
              var _this12 = this;
              if (this.tooltipFormatter) {
                return this.tooltipFormatter;
              } else if (this.isObjectArrayData(this.data)) {
                return function(val) {
                  var tooltipText = "" + val;
                  _this12.data.some(function(obj) {
                    if (obj[_this12.dataValue] === val) {
                      tooltipText = obj[_this12.dataLabel];
                      return true;
                    }
                    return false;
                  });
                  return tooltipText;
                };
              } else if (this.isObjectData(this.data)) {
                var data = this.data;
                return function(val) {
                  return data[val];
                };
              }
            }
          }, {
            key: "isNotSync",
            get: function get() {
              var values = this.control.dotsValue;
              return Array.isArray(this.value) ? this.value.length !== values.length || this.value.some(function(val, index) {
                return val !== values[index];
              }) : this.value !== values[0];
            }
          }, {
            key: "dragRange",
            get: function get() {
              var prevDot = this.dots[this.focusDotIndex - 1];
              var nextDot = this.dots[this.focusDotIndex + 1];
              return [prevDot ? prevDot.pos : -Infinity, nextDot ? nextDot.pos : Infinity];
            }
          }]);
          return VueSlider;
        }(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_default.a);
        __decorate([Model("change", {
          default: 0
        })], vue_slider_VueSlider.prototype, "value", void 0);
        __decorate([Prop({
          type: Boolean,
          default: false
        })], vue_slider_VueSlider.prototype, "silent", void 0);
        __decorate([Prop({
          default: "ltr",
          validator: function validator(dir) {
            return ["ltr", "rtl", "ttb", "btt"].indexOf(dir) > -1;
          }
        })], vue_slider_VueSlider.prototype, "direction", void 0);
        __decorate([Prop({
          type: [Number, String]
        })], vue_slider_VueSlider.prototype, "width", void 0);
        __decorate([Prop({
          type: [Number, String]
        })], vue_slider_VueSlider.prototype, "height", void 0);
        __decorate([Prop({
          default: 14
        })], vue_slider_VueSlider.prototype, "dotSize", void 0);
        __decorate([Prop({
          default: false
        })], vue_slider_VueSlider.prototype, "contained", void 0);
        __decorate([Prop({
          type: Number,
          default: 0
        })], vue_slider_VueSlider.prototype, "min", void 0);
        __decorate([Prop({
          type: Number,
          default: 100
        })], vue_slider_VueSlider.prototype, "max", void 0);
        __decorate([Prop({
          type: Number,
          default: 1
        })], vue_slider_VueSlider.prototype, "interval", void 0);
        __decorate([Prop({
          type: Boolean,
          default: false
        })], vue_slider_VueSlider.prototype, "disabled", void 0);
        __decorate([Prop({
          type: Boolean,
          default: true
        })], vue_slider_VueSlider.prototype, "clickable", void 0);
        __decorate([Prop({
          type: Boolean,
          default: false
        })], vue_slider_VueSlider.prototype, "dragOnClick", void 0);
        __decorate([Prop({
          type: Number,
          default: 0.5
        })], vue_slider_VueSlider.prototype, "duration", void 0);
        __decorate([Prop({
          type: [Object, Array]
        })], vue_slider_VueSlider.prototype, "data", void 0);
        __decorate([Prop({
          type: String,
          default: "value"
        })], vue_slider_VueSlider.prototype, "dataValue", void 0);
        __decorate([Prop({
          type: String,
          default: "label"
        })], vue_slider_VueSlider.prototype, "dataLabel", void 0);
        __decorate([Prop({
          type: Boolean,
          default: false
        })], vue_slider_VueSlider.prototype, "lazy", void 0);
        __decorate([Prop({
          type: String,
          validator: function validator(val) {
            return ["none", "always", "focus", "hover", "active"].indexOf(val) > -1;
          },
          default: "active"
        })], vue_slider_VueSlider.prototype, "tooltip", void 0);
        __decorate([Prop({
          type: [String, Array],
          validator: function validator(data) {
            return (Array.isArray(data) ? data : [data]).every(function(val) {
              return ["top", "right", "bottom", "left"].indexOf(val) > -1;
            });
          }
        })], vue_slider_VueSlider.prototype, "tooltipPlacement", void 0);
        __decorate([Prop({
          type: [String, Array, Function]
        })], vue_slider_VueSlider.prototype, "tooltipFormatter", void 0);
        __decorate([Prop({
          type: Boolean,
          default: true
        })], vue_slider_VueSlider.prototype, "useKeyboard", void 0);
        __decorate([Prop(Function)], vue_slider_VueSlider.prototype, "keydownHook", void 0);
        __decorate([Prop({
          type: Boolean,
          default: true
        })], vue_slider_VueSlider.prototype, "enableCross", void 0);
        __decorate([Prop({
          type: Boolean,
          default: false
        })], vue_slider_VueSlider.prototype, "fixed", void 0);
        __decorate([Prop({
          type: Boolean,
          default: true
        })], vue_slider_VueSlider.prototype, "order", void 0);
        __decorate([Prop(Number)], vue_slider_VueSlider.prototype, "minRange", void 0);
        __decorate([Prop(Number)], vue_slider_VueSlider.prototype, "maxRange", void 0);
        __decorate([Prop({
          type: [Boolean, Object, Array, Function],
          default: false
        })], vue_slider_VueSlider.prototype, "marks", void 0);
        __decorate([Prop({
          type: [Boolean, Function],
          default: true
        })], vue_slider_VueSlider.prototype, "process", void 0);
        __decorate([Prop({
          type: [Number]
        })], vue_slider_VueSlider.prototype, "zoom", void 0);
        __decorate([Prop(Boolean)], vue_slider_VueSlider.prototype, "included", void 0);
        __decorate([Prop(Boolean)], vue_slider_VueSlider.prototype, "adsorb", void 0);
        __decorate([Prop(Boolean)], vue_slider_VueSlider.prototype, "hideLabel", void 0);
        __decorate([Prop()], vue_slider_VueSlider.prototype, "dotOptions", void 0);
        __decorate([Prop()], vue_slider_VueSlider.prototype, "dotAttrs", void 0);
        __decorate([Prop()], vue_slider_VueSlider.prototype, "railStyle", void 0);
        __decorate([Prop()], vue_slider_VueSlider.prototype, "processStyle", void 0);
        __decorate([Prop()], vue_slider_VueSlider.prototype, "dotStyle", void 0);
        __decorate([Prop()], vue_slider_VueSlider.prototype, "tooltipStyle", void 0);
        __decorate([Prop()], vue_slider_VueSlider.prototype, "stepStyle", void 0);
        __decorate([Prop()], vue_slider_VueSlider.prototype, "stepActiveStyle", void 0);
        __decorate([Prop()], vue_slider_VueSlider.prototype, "labelStyle", void 0);
        __decorate([Prop()], vue_slider_VueSlider.prototype, "labelActiveStyle", void 0);
        __decorate([Watch("value")], vue_slider_VueSlider.prototype, "onValueChanged", null);
        vue_slider_VueSlider = __decorate([vue_class_component_common_default()({
          name: "VueSlider",
          data: function data() {
            return {
              control: null
            };
          },
          components: {
            VueSliderDot: vue_slider_dot,
            VueSliderMark: vue_slider_mark
          }
        })], vue_slider_VueSlider);
        var vue_slider = vue_slider_VueSlider;
        vue_slider.VueSliderMark = vue_slider_mark;
        vue_slider.VueSliderDot = vue_slider_dot;
        var lib = vue_slider;
        __webpack_exports__["default"] = lib;
      }
    })["default"];
  });
})(vueSliderComponent_umd$2);
const vueSliderComponent_umd = /* @__PURE__ */ getDefaultExportFromCjs(vueSliderComponent_umd$2.exports);
const vueSliderComponent_umd$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: vueSliderComponent_umd
}, [vueSliderComponent_umd$2.exports]);
export {
  vueSliderComponent_umd$1 as v
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLXNsaWRlci1jb21wb25lbnQudW1kLjkzZGFkZDEzLmpzIiwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXNsaWRlci1jb21wb25lbnQvZGlzdC92dWUtc2xpZGVyLWNvbXBvbmVudC51bWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwidnVlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInZ1ZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ2dWUtc2xpZGVyLWNvbXBvbmVudFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInZ1ZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1widnVlLXNsaWRlci1jb21wb25lbnRcIl0gPSBmYWN0b3J5KHJvb3RbXCJWdWVcIl0pO1xufSkoKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKSwgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fOGJiZl9fKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcImZiMTVcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiMDkxYlwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjI0ZmJcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaSwgXCIudnVlLXNsaWRlci1kb3R7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAwczt0cmFuc2l0aW9uOmFsbCAwczt6LWluZGV4OjV9LnZ1ZS1zbGlkZXItZG90OmZvY3Vze291dGxpbmU6bm9uZX0udnVlLXNsaWRlci1kb3QtdG9vbHRpcHtwb3NpdGlvbjphYnNvbHV0ZTt2aXNpYmlsaXR5OmhpZGRlbn0udnVlLXNsaWRlci1kb3QtaG92ZXI6aG92ZXIgLnZ1ZS1zbGlkZXItZG90LXRvb2x0aXB7dmlzaWJpbGl0eTp2aXNpYmxlfS52dWUtc2xpZGVyLWRvdC10b29sdGlwLXNob3d7dmlzaWJpbGl0eTp2aXNpYmxlfS52dWUtc2xpZGVyLWRvdC10b29sdGlwLXRvcHt0b3A6LTEwcHg7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTEwMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtMTAwJSl9LnZ1ZS1zbGlkZXItZG90LXRvb2x0aXAtYm90dG9te2JvdHRvbTotMTBweDtsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwxMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsMTAwJSl9LnZ1ZS1zbGlkZXItZG90LXRvb2x0aXAtbGVmdHtsZWZ0Oi0xMHB4O3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC0xMDAlLC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTEwMCUsLTUwJSl9LnZ1ZS1zbGlkZXItZG90LXRvb2x0aXAtcmlnaHR7cmlnaHQ6LTEwcHg7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMTAwJSwtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDEwMCUsLTUwJSl9XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIyNGZiXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjI2MzhcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBfZXh0ZW5kcygpe3JldHVybiBfZXh0ZW5kcz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihhKXtmb3IodmFyIGIsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspZm9yKHZhciBkIGluIGI9YXJndW1lbnRzW2NdLGIpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsZCkmJihhW2RdPWJbZF0pO3JldHVybiBhfSxfZXh0ZW5kcy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIG5vcm1hbE1lcmdlPVtcImF0dHJzXCIsXCJwcm9wc1wiLFwiZG9tUHJvcHNcIl0sdG9BcnJheU1lcmdlPVtcImNsYXNzXCIsXCJzdHlsZVwiLFwiZGlyZWN0aXZlc1wiXSxmdW5jdGlvbmFsTWVyZ2U9W1wib25cIixcIm5hdGl2ZU9uXCJdLG1lcmdlSnN4UHJvcHM9ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVkdWNlKGZ1bmN0aW9uKGMsYSl7Zm9yKHZhciBiIGluIGEpaWYoIWNbYl0pY1tiXT1hW2JdO2Vsc2UgaWYoLTEhPT1ub3JtYWxNZXJnZS5pbmRleE9mKGIpKWNbYl09X2V4dGVuZHMoe30sY1tiXSxhW2JdKTtlbHNlIGlmKC0xIT09dG9BcnJheU1lcmdlLmluZGV4T2YoYikpe3ZhciBkPWNbYl1pbnN0YW5jZW9mIEFycmF5P2NbYl06W2NbYl1dLGU9YVtiXWluc3RhbmNlb2YgQXJyYXk/YVtiXTpbYVtiXV07Y1tiXT1kLmNvbmNhdChlKX1lbHNlIGlmKC0xIT09ZnVuY3Rpb25hbE1lcmdlLmluZGV4T2YoYikpe2Zvcih2YXIgZiBpbiBhW2JdKWlmKGNbYl1bZl0pe3ZhciBnPWNbYl1bZl1pbnN0YW5jZW9mIEFycmF5P2NbYl1bZl06W2NbYl1bZl1dLGg9YVtiXVtmXWluc3RhbmNlb2YgQXJyYXk/YVtiXVtmXTpbYVtiXVtmXV07Y1tiXVtmXT1nLmNvbmNhdChoKX1lbHNlIGNbYl1bZl09YVtiXVtmXTt9ZWxzZSBpZihcImhvb2tcIj09Yilmb3IodmFyIGkgaW4gYVtiXSljW2JdW2ldPWNbYl1baV0/bWVyZ2VGbihjW2JdW2ldLGFbYl1baV0pOmFbYl1baV07ZWxzZSBjW2JdPWFbYl07cmV0dXJuIGN9LHt9KX0sbWVyZ2VGbj1mdW5jdGlvbihhLGIpe3JldHVybiBmdW5jdGlvbigpe2EmJmEuYXBwbHkodGhpcyxhcmd1bWVudHMpLGImJmIuYXBwbHkodGhpcyxhcmd1bWVudHMpfX07bW9kdWxlLmV4cG9ydHM9bWVyZ2VKc3hQcm9wcztcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCI0OTllXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLy8gRVNNIENPTVBBVCBGTEFHXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5cbi8vIEVYUE9SVFNcbl9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiAvKiBiaW5kaW5nICovIGFkZFN0eWxlc0NsaWVudDsgfSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cblxuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxuZnVuY3Rpb24gYWRkU3R5bGVzQ2xpZW50IChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjRhYmJcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI3YTU3XCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaSwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI0OTllXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJiMmFmNzU3MlwiLCBjb250ZW50LCB0cnVlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCI0ZWQ4XCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMDkxYlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmksIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNDk5ZVwiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMmY2YmVlMWFcIiwgY29udGVudCwgdHJ1ZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiNTU2Y1wiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImVlZjJcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjQ5OWVcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjEyMDlmZDQ3XCIsIGNvbnRlbnQsIHRydWUsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjY1ZDlcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAgKiB2dWUtY2xhc3MtY29tcG9uZW50IHY3LjAuMVxuICAqIChjKSAyMDE1LXByZXNlbnQgRXZhbiBZb3VcbiAgKiBAbGljZW5zZSBNSVRcbiAgKi9cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIFZ1ZSA9IF9pbnRlcm9wRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiOGJiZlwiKSk7XG5cbi8vIFRoZSByYXRpb25hbCBiZWhpbmQgdGhlIHZlcmJvc2UgUmVmbGVjdC1mZWF0dXJlIGNoZWNrIGJlbG93IGlzIHRoZSBmYWN0IHRoYXQgdGhlcmUgYXJlIHBvbHlmaWxsc1xuLy8gd2hpY2ggYWRkIGFuIGltcGxlbWVudGF0aW9uIGZvciBSZWZsZWN0LmRlZmluZU1ldGFkYXRhIGJ1dCBub3QgZm9yIFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzLlxuLy8gV2l0aG91dCB0aGlzIGNoZWNrIGNvbnN1bWVycyB3aWxsIGVuY291bnRlciBoYXJkIHRvIHRyYWNrIGRvd24gcnVudGltZSBlcnJvcnMuXG52YXIgcmVmbGVjdGlvbklzU3VwcG9ydGVkID0gdHlwZW9mIFJlZmxlY3QgIT09ICd1bmRlZmluZWQnICYmIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEgJiYgUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXM7XG5mdW5jdGlvbiBjb3B5UmVmbGVjdGlvbk1ldGFkYXRhKHRvLCBmcm9tKSB7XG4gICAgZm9yd2FyZE1ldGFkYXRhKHRvLCBmcm9tKTtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhmcm9tLnByb3RvdHlwZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGZvcndhcmRNZXRhZGF0YSh0by5wcm90b3R5cGUsIGZyb20ucHJvdG90eXBlLCBrZXkpO1xuICAgIH0pO1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGZyb20pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBmb3J3YXJkTWV0YWRhdGEodG8sIGZyb20sIGtleSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmb3J3YXJkTWV0YWRhdGEodG8sIGZyb20sIHByb3BlcnR5S2V5KSB7XG4gICAgdmFyIG1ldGFLZXlzID0gcHJvcGVydHlLZXlcbiAgICAgICAgPyBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhmcm9tLCBwcm9wZXJ0eUtleSlcbiAgICAgICAgOiBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhmcm9tKTtcbiAgICBtZXRhS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChtZXRhS2V5KSB7XG4gICAgICAgIHZhciBtZXRhZGF0YSA9IHByb3BlcnR5S2V5XG4gICAgICAgICAgICA/IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEobWV0YUtleSwgZnJvbSwgcHJvcGVydHlLZXkpXG4gICAgICAgICAgICA6IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEobWV0YUtleSwgZnJvbSk7XG4gICAgICAgIGlmIChwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShtZXRhS2V5LCBtZXRhZGF0YSwgdG8sIHByb3BlcnR5S2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEobWV0YUtleSwgbWV0YWRhdGEsIHRvKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG52YXIgZmFrZUFycmF5ID0geyBfX3Byb3RvX186IFtdIH07XG52YXIgaGFzUHJvdG8gPSBmYWtlQXJyYXkgaW5zdGFuY2VvZiBBcnJheTtcbmZ1bmN0aW9uIGNyZWF0ZURlY29yYXRvcihmYWN0b3J5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIEN0b3IgPSB0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IHRhcmdldFxuICAgICAgICAgICAgOiB0YXJnZXQuY29uc3RydWN0b3I7XG4gICAgICAgIGlmICghQ3Rvci5fX2RlY29yYXRvcnNfXykge1xuICAgICAgICAgICAgQ3Rvci5fX2RlY29yYXRvcnNfXyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpbmRleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBDdG9yLl9fZGVjb3JhdG9yc19fLnB1c2goZnVuY3Rpb24gKG9wdGlvbnMpIHsgcmV0dXJuIGZhY3Rvcnkob3B0aW9ucywga2V5LCBpbmRleCk7IH0pO1xuICAgIH07XG59XG5mdW5jdGlvbiBtaXhpbnMoKSB7XG4gICAgdmFyIEN0b3JzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgQ3RvcnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIFZ1ZS5leHRlbmQoeyBtaXhpbnM6IEN0b3JzIH0pO1xufVxuZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCB8fCAodHlwZSAhPT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gJ2Z1bmN0aW9uJyk7XG59XG5mdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW3Z1ZS1jbGFzcy1jb21wb25lbnRdICcgKyBtZXNzYWdlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3REYXRhRnJvbUNvbnN0cnVjdG9yKHZtLCBDb21wb25lbnQpIHtcbiAgICAvLyBvdmVycmlkZSBfaW5pdCB0byBwcmV2ZW50IHRvIGluaXQgYXMgVnVlIGluc3RhbmNlXG4gICAgdmFyIG9yaWdpbmFsSW5pdCA9IENvbXBvbmVudC5wcm90b3R5cGUuX2luaXQ7XG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gcHJveHkgdG8gYWN0dWFsIHZtXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModm0pO1xuICAgICAgICAvLyAyLjIuMCBjb21wYXQgKHByb3BzIGFyZSBubyBsb25nZXIgZXhwb3NlZCBhcyBzZWxmIHByb3BlcnRpZXMpXG4gICAgICAgIGlmICh2bS4kb3B0aW9ucy5wcm9wcykge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHZtLiRvcHRpb25zLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2bS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKGtleS5jaGFyQXQoMCkgIT09ICdfJykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfdGhpcywga2V5LCB7XG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdm1ba2V5XTsgfSxcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgdm1ba2V5XSA9IHZhbHVlOyB9LFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBzaG91bGQgYmUgYWNxdWlyZWQgY2xhc3MgcHJvcGVydHkgdmFsdWVzXG4gICAgdmFyIGRhdGEgPSBuZXcgQ29tcG9uZW50KCk7XG4gICAgLy8gcmVzdG9yZSBvcmlnaW5hbCBfaW5pdCB0byBhdm9pZCBtZW1vcnkgbGVhayAoIzIwOSlcbiAgICBDb21wb25lbnQucHJvdG90eXBlLl9pbml0ID0gb3JpZ2luYWxJbml0O1xuICAgIC8vIGNyZWF0ZSBwbGFpbiBkYXRhIG9iamVjdFxuICAgIHZhciBwbGFpbkRhdGEgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwbGFpbkRhdGFba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChmYWxzZSkge31cbiAgICByZXR1cm4gcGxhaW5EYXRhO1xufVxuXG52YXIgJGludGVybmFsSG9va3MgPSBbXG4gICAgJ2RhdGEnLFxuICAgICdiZWZvcmVDcmVhdGUnLFxuICAgICdjcmVhdGVkJyxcbiAgICAnYmVmb3JlTW91bnQnLFxuICAgICdtb3VudGVkJyxcbiAgICAnYmVmb3JlRGVzdHJveScsXG4gICAgJ2Rlc3Ryb3llZCcsXG4gICAgJ2JlZm9yZVVwZGF0ZScsXG4gICAgJ3VwZGF0ZWQnLFxuICAgICdhY3RpdmF0ZWQnLFxuICAgICdkZWFjdGl2YXRlZCcsXG4gICAgJ3JlbmRlcicsXG4gICAgJ2Vycm9yQ2FwdHVyZWQnLFxuICAgICdzZXJ2ZXJQcmVmZXRjaCcgLy8gMi42XG5dO1xuZnVuY3Rpb24gY29tcG9uZW50RmFjdG9yeShDb21wb25lbnQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIG9wdGlvbnMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCBDb21wb25lbnQuX2NvbXBvbmVudFRhZyB8fCBDb21wb25lbnQubmFtZTtcbiAgICAvLyBwcm90b3R5cGUgcHJvcHMuXG4gICAgdmFyIHByb3RvID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm90bykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBob29rc1xuICAgICAgICBpZiAoJGludGVybmFsSG9va3MuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgIG9wdGlvbnNba2V5XSA9IHByb3RvW2tleV07XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBrZXkpO1xuICAgICAgICBpZiAoZGVzY3JpcHRvci52YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAvLyBtZXRob2RzXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAob3B0aW9ucy5tZXRob2RzIHx8IChvcHRpb25zLm1ldGhvZHMgPSB7fSkpW2tleV0gPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdHlwZXNjcmlwdCBkZWNvcmF0ZWQgZGF0YVxuICAgICAgICAgICAgICAgIChvcHRpb25zLm1peGlucyB8fCAob3B0aW9ucy5taXhpbnMgPSBbXSkpLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2EgPSB7fSwgX2Fba2V5XSA9IGRlc2NyaXB0b3IudmFsdWUsIF9hO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVzY3JpcHRvci5nZXQgfHwgZGVzY3JpcHRvci5zZXQpIHtcbiAgICAgICAgICAgIC8vIGNvbXB1dGVkIHByb3BlcnRpZXNcbiAgICAgICAgICAgIChvcHRpb25zLmNvbXB1dGVkIHx8IChvcHRpb25zLmNvbXB1dGVkID0ge30pKVtrZXldID0ge1xuICAgICAgICAgICAgICAgIGdldDogZGVzY3JpcHRvci5nZXQsXG4gICAgICAgICAgICAgICAgc2V0OiBkZXNjcmlwdG9yLnNldFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIChvcHRpb25zLm1peGlucyB8fCAob3B0aW9ucy5taXhpbnMgPSBbXSkpLnB1c2goe1xuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdERhdGFGcm9tQ29uc3RydWN0b3IodGhpcywgQ29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGRlY29yYXRlIG9wdGlvbnNcbiAgICB2YXIgZGVjb3JhdG9ycyA9IENvbXBvbmVudC5fX2RlY29yYXRvcnNfXztcbiAgICBpZiAoZGVjb3JhdG9ycykge1xuICAgICAgICBkZWNvcmF0b3JzLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7IHJldHVybiBmbihvcHRpb25zKTsgfSk7XG4gICAgICAgIGRlbGV0ZSBDb21wb25lbnQuX19kZWNvcmF0b3JzX187XG4gICAgfVxuICAgIC8vIGZpbmQgc3VwZXJcbiAgICB2YXIgc3VwZXJQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb21wb25lbnQucHJvdG90eXBlKTtcbiAgICB2YXIgU3VwZXIgPSBzdXBlclByb3RvIGluc3RhbmNlb2YgVnVlXG4gICAgICAgID8gc3VwZXJQcm90by5jb25zdHJ1Y3RvclxuICAgICAgICA6IFZ1ZTtcbiAgICB2YXIgRXh0ZW5kZWQgPSBTdXBlci5leHRlbmQob3B0aW9ucyk7XG4gICAgZm9yd2FyZFN0YXRpY01lbWJlcnMoRXh0ZW5kZWQsIENvbXBvbmVudCwgU3VwZXIpO1xuICAgIGlmIChyZWZsZWN0aW9uSXNTdXBwb3J0ZWQpIHtcbiAgICAgICAgY29weVJlZmxlY3Rpb25NZXRhZGF0YShFeHRlbmRlZCwgQ29tcG9uZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIEV4dGVuZGVkO1xufVxudmFyIHJlc2VydmVkUHJvcGVydHlOYW1lcyA9IFtcbiAgICAvLyBVbmlxdWUgaWRcbiAgICAnY2lkJyxcbiAgICAvLyBTdXBlciBWdWUgY29uc3RydWN0b3JcbiAgICAnc3VwZXInLFxuICAgIC8vIENvbXBvbmVudCBvcHRpb25zIHRoYXQgd2lsbCBiZSB1c2VkIGJ5IHRoZSBjb21wb25lbnRcbiAgICAnb3B0aW9ucycsXG4gICAgJ3N1cGVyT3B0aW9ucycsXG4gICAgJ2V4dGVuZE9wdGlvbnMnLFxuICAgICdzZWFsZWRPcHRpb25zJyxcbiAgICAvLyBQcml2YXRlIGFzc2V0c1xuICAgICdjb21wb25lbnQnLFxuICAgICdkaXJlY3RpdmUnLFxuICAgICdmaWx0ZXInXG5dO1xuZnVuY3Rpb24gZm9yd2FyZFN0YXRpY01lbWJlcnMoRXh0ZW5kZWQsIE9yaWdpbmFsLCBTdXBlcikge1xuICAgIC8vIFdlIGhhdmUgdG8gdXNlIGdldE93blByb3BlcnR5TmFtZXMgc2luY2UgQmFiZWwgcmVnaXN0ZXJzIG1ldGhvZHMgYXMgbm9uLWVudW1lcmFibGVcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPcmlnaW5hbCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIC8vIGBwcm90b3R5cGVgIHNob3VsZCBub3QgYmUgb3ZlcndyaXR0ZW5cbiAgICAgICAgaWYgKGtleSA9PT0gJ3Byb3RvdHlwZScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBTb21lIGJyb3dzZXJzIGRvZXMgbm90IGFsbG93IHJlY29uZmlndXJlIGJ1aWx0LWluIHByb3BlcnRpZXNcbiAgICAgICAgdmFyIGV4dGVuZGVkRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRXh0ZW5kZWQsIGtleSk7XG4gICAgICAgIGlmIChleHRlbmRlZERlc2NyaXB0b3IgJiYgIWV4dGVuZGVkRGVzY3JpcHRvci5jb25maWd1cmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT3JpZ2luYWwsIGtleSk7XG4gICAgICAgIC8vIElmIHRoZSB1c2VyIGFnZW50IGRvZXMgbm90IHN1cHBvcnQgYF9fcHJvdG9fX2Agb3IgaXRzIGZhbWlseSAoSUUgPD0gMTApLFxuICAgICAgICAvLyB0aGUgc3ViIGNsYXNzIHByb3BlcnRpZXMgbWF5IGJlIGluaGVyaXRlZCBwcm9wZXJ0aWVzIGZyb20gdGhlIHN1cGVyIGNsYXNzIGluIFR5cGVTY3JpcHQuXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gZXhjbHVkZSBzdWNoIHByb3BlcnRpZXMgdG8gcHJldmVudCB0byBvdmVyd3JpdGVcbiAgICAgICAgLy8gdGhlIGNvbXBvbmVudCBvcHRpb25zIG9iamVjdCB3aGljaCBzdG9yZWQgb24gdGhlIGV4dGVuZGVkIGNvbnN0cnVjdG9yIChTZWUgIzE5MikuXG4gICAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBhIHJlZmVyZW5jZWQgdmFsdWUgKG9iamVjdCBvciBmdW5jdGlvbiksXG4gICAgICAgIC8vIHdlIGNhbiBjaGVjayBlcXVhbGl0eSBvZiB0aGVtIGFuZCBleGNsdWRlIGl0IGlmIHRoZXkgaGF2ZSB0aGUgc2FtZSByZWZlcmVuY2UuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgcHJpbWl0aXZlIHZhbHVlLCBpdCB3aWxsIGJlIGZvcndhcmRlZCBmb3Igc2FmZXR5LlxuICAgICAgICBpZiAoIWhhc1Byb3RvKSB7XG4gICAgICAgICAgICAvLyBPbmx5IGBjaWRgIGlzIGV4cGxpY2l0bHkgZXhsdWRlZCBmcm9tIHByb3BlcnR5IGZvcndhcmRpbmdcbiAgICAgICAgICAgIC8vIGJlY2F1c2Ugd2UgY2Fubm90IGRldGVjdCB3aGV0aGVyIGl0IGlzIGEgaW5oZXJpdGVkIHByb3BlcnR5IG9yIG5vdFxuICAgICAgICAgICAgLy8gb24gdGhlIG5vIGBfX3Byb3RvX19gIGVudmlyb25tZW50IGV2ZW4gdGhvdWdoIHRoZSBwcm9wZXJ0eSBpcyByZXNlcnZlZC5cbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdjaWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN1cGVyRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoU3VwZXIsIGtleSk7XG4gICAgICAgICAgICBpZiAoIWlzUHJpbWl0aXZlKGRlc2NyaXB0b3IudmFsdWUpICYmXG4gICAgICAgICAgICAgICAgc3VwZXJEZXNjcmlwdG9yICYmXG4gICAgICAgICAgICAgICAgc3VwZXJEZXNjcmlwdG9yLnZhbHVlID09PSBkZXNjcmlwdG9yLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFdhcm4gaWYgdGhlIHVzZXJzIG1hbnVhbGx5IGRlY2xhcmUgcmVzZXJ2ZWQgcHJvcGVydGllc1xuICAgICAgICBpZiAoZmFsc2UpIHt9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFeHRlbmRlZCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50KG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudEZhY3Rvcnkob3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRGYWN0b3J5KENvbXBvbmVudCwgb3B0aW9ucyk7XG4gICAgfTtcbn1cbkNvbXBvbmVudC5yZWdpc3Rlckhvb2tzID0gZnVuY3Rpb24gcmVnaXN0ZXJIb29rcyhrZXlzKSB7XG4gICAgJGludGVybmFsSG9va3MucHVzaC5hcHBseSgkaW50ZXJuYWxIb29rcywga2V5cyk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDb21wb25lbnQ7XG5leHBvcnRzLmNyZWF0ZURlY29yYXRvciA9IGNyZWF0ZURlY29yYXRvcjtcbmV4cG9ydHMubWl4aW5zID0gbWl4aW5zO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjdhNTdcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIyNGZiXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmksIFwiLnZ1ZS1zbGlkZXJ7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3g7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2Rpc3BsYXk6YmxvY2s7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnJnYmEoMCwwLDAsMCl9LnZ1ZS1zbGlkZXItcmFpbHtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlOy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTp3aWR0aCxoZWlnaHQsbGVmdCxyaWdodCx0b3AsYm90dG9tO3RyYW5zaXRpb24tcHJvcGVydHk6d2lkdGgsaGVpZ2h0LGxlZnQscmlnaHQsdG9wLGJvdHRvbX0udnVlLXNsaWRlci1wcm9jZXNze3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MX1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjg4NzVcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187Ly8gYWRkYXB0ZWQgZnJvbSB0aGUgZG9jdW1lbnQuY3VycmVudFNjcmlwdCBwb2x5ZmlsbCBieSBBZGFtIE1pbGxlclxuLy8gTUlUIGxpY2Vuc2Vcbi8vIHNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2FtaWxsZXItZ2gvY3VycmVudFNjcmlwdC1wb2x5ZmlsbFxuXG4vLyBhZGRlZCBzdXBwb3J0IGZvciBGaXJlZm94IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE2MjA1MDVcblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW10sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICB9IGVsc2Uge31cbn0odHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdCAoKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRvY3VtZW50LCAnY3VycmVudFNjcmlwdCcpXG4gICAgLy8gZm9yIGNocm9tZVxuICAgIGlmICghZGVzY3JpcHRvciAmJiAnY3VycmVudFNjcmlwdCcgaW4gZG9jdW1lbnQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmN1cnJlbnRTY3JpcHRcbiAgICB9XG5cbiAgICAvLyBmb3Igb3RoZXIgYnJvd3NlcnMgd2l0aCBuYXRpdmUgc3VwcG9ydCBmb3IgY3VycmVudFNjcmlwdFxuICAgIGlmIChkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZ2V0ICE9PSBnZXRDdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5jdXJyZW50U2NyaXB0XG4gICAgfVxuICBcbiAgICAvLyBJRSA4LTEwIHN1cHBvcnQgc2NyaXB0IHJlYWR5U3RhdGVcbiAgICAvLyBJRSAxMSsgJiBGaXJlZm94IHN1cHBvcnQgc3RhY2sgdHJhY2VcbiAgICB0cnkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIEZpbmQgdGhlIHNlY29uZCBtYXRjaCBmb3IgdGhlIFwiYXRcIiBzdHJpbmcgdG8gZ2V0IGZpbGUgc3JjIHVybCBmcm9tIHN0YWNrLlxuICAgICAgdmFyIGllU3RhY2tSZWdFeHAgPSAvLiphdCBbXihdKlxcKCguKik6KC4rKTooLispXFwpJC9pZyxcbiAgICAgICAgZmZTdGFja1JlZ0V4cCA9IC9AKFteQF0qKTooXFxkKyk6KFxcZCspXFxzKiQvaWcsXG4gICAgICAgIHN0YWNrRGV0YWlscyA9IGllU3RhY2tSZWdFeHAuZXhlYyhlcnIuc3RhY2spIHx8IGZmU3RhY2tSZWdFeHAuZXhlYyhlcnIuc3RhY2spLFxuICAgICAgICBzY3JpcHRMb2NhdGlvbiA9IChzdGFja0RldGFpbHMgJiYgc3RhY2tEZXRhaWxzWzFdKSB8fCBmYWxzZSxcbiAgICAgICAgbGluZSA9IChzdGFja0RldGFpbHMgJiYgc3RhY2tEZXRhaWxzWzJdKSB8fCBmYWxzZSxcbiAgICAgICAgY3VycmVudExvY2F0aW9uID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZi5yZXBsYWNlKGRvY3VtZW50LmxvY2F0aW9uLmhhc2gsICcnKSxcbiAgICAgICAgcGFnZVNvdXJjZSxcbiAgICAgICAgaW5saW5lU2NyaXB0U291cmNlUmVnRXhwLFxuICAgICAgICBpbmxpbmVTY3JpcHRTb3VyY2UsXG4gICAgICAgIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7IC8vIExpdmUgTm9kZUxpc3QgY29sbGVjdGlvblxuICBcbiAgICAgIGlmIChzY3JpcHRMb2NhdGlvbiA9PT0gY3VycmVudExvY2F0aW9uKSB7XG4gICAgICAgIHBhZ2VTb3VyY2UgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub3V0ZXJIVE1MO1xuICAgICAgICBpbmxpbmVTY3JpcHRTb3VyY2VSZWdFeHAgPSBuZXcgUmVnRXhwKCcoPzpbXlxcXFxuXSs/XFxcXG4pezAsJyArIChsaW5lIC0gMikgKyAnfVtePF0qPHNjcmlwdD4oW1xcXFxkXFxcXERdKj8pPFxcXFwvc2NyaXB0PltcXFxcZFxcXFxEXSonLCAnaScpO1xuICAgICAgICBpbmxpbmVTY3JpcHRTb3VyY2UgPSBwYWdlU291cmNlLnJlcGxhY2UoaW5saW5lU2NyaXB0U291cmNlUmVnRXhwLCAnJDEnKS50cmltKCk7XG4gICAgICB9XG4gIFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIElmIHJlYWR5IHN0YXRlIGlzIGludGVyYWN0aXZlLCByZXR1cm4gdGhlIHNjcmlwdCB0YWdcbiAgICAgICAgaWYgKHNjcmlwdHNbaV0ucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xuICAgICAgICAgIHJldHVybiBzY3JpcHRzW2ldO1xuICAgICAgICB9XG4gIFxuICAgICAgICAvLyBJZiBzcmMgbWF0Y2hlcywgcmV0dXJuIHRoZSBzY3JpcHQgdGFnXG4gICAgICAgIGlmIChzY3JpcHRzW2ldLnNyYyA9PT0gc2NyaXB0TG9jYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gc2NyaXB0c1tpXTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gSWYgaW5saW5lIHNvdXJjZSBtYXRjaGVzLCByZXR1cm4gdGhlIHNjcmlwdCB0YWdcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHNjcmlwdExvY2F0aW9uID09PSBjdXJyZW50TG9jYXRpb24gJiZcbiAgICAgICAgICBzY3JpcHRzW2ldLmlubmVySFRNTCAmJlxuICAgICAgICAgIHNjcmlwdHNbaV0uaW5uZXJIVE1MLnRyaW0oKSA9PT0gaW5saW5lU2NyaXB0U291cmNlXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBzY3JpcHRzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLy8gSWYgbm8gbWF0Y2gsIHJldHVybiBudWxsXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGdldEN1cnJlbnRTY3JpcHRcbn0pKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCI4YmJmXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fOGJiZl9fO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJlZWYyXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMjRmYlwiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pLCBcIi52dWUtc2xpZGVyLW1hcmtze3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LnZ1ZS1zbGlkZXItbWFya3twb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjF9LnZ1ZS1zbGlkZXItbHRyIC52dWUtc2xpZGVyLW1hcmssLnZ1ZS1zbGlkZXItcnRsIC52dWUtc2xpZGVyLW1hcmt7d2lkdGg6MDtoZWlnaHQ6MTAwJTt0b3A6NTAlfS52dWUtc2xpZGVyLWx0ciAudnVlLXNsaWRlci1tYXJrLXN0ZXAsLnZ1ZS1zbGlkZXItcnRsIC52dWUtc2xpZGVyLW1hcmstc3RlcHt0b3A6MH0udnVlLXNsaWRlci1sdHIgLnZ1ZS1zbGlkZXItbWFyay1sYWJlbCwudnVlLXNsaWRlci1ydGwgLnZ1ZS1zbGlkZXItbWFyay1sYWJlbHt0b3A6MTAwJTttYXJnaW4tdG9wOjEwcHh9LnZ1ZS1zbGlkZXItbHRyIC52dWUtc2xpZGVyLW1hcmt7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpfS52dWUtc2xpZGVyLWx0ciAudnVlLXNsaWRlci1tYXJrLXN0ZXB7bGVmdDowfS52dWUtc2xpZGVyLWx0ciAudnVlLXNsaWRlci1tYXJrLWxhYmVse2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9LnZ1ZS1zbGlkZXItcnRsIC52dWUtc2xpZGVyLW1hcmt7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDUwJSwtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDUwJSwtNTAlKX0udnVlLXNsaWRlci1ydGwgLnZ1ZS1zbGlkZXItbWFyay1zdGVwe3JpZ2h0OjB9LnZ1ZS1zbGlkZXItcnRsIC52dWUtc2xpZGVyLW1hcmstbGFiZWx7cmlnaHQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCg1MCUpfS52dWUtc2xpZGVyLWJ0dCAudnVlLXNsaWRlci1tYXJrLC52dWUtc2xpZGVyLXR0YiAudnVlLXNsaWRlci1tYXJre3dpZHRoOjEwMCU7aGVpZ2h0OjA7bGVmdDo1MCV9LnZ1ZS1zbGlkZXItYnR0IC52dWUtc2xpZGVyLW1hcmstc3RlcCwudnVlLXNsaWRlci10dGIgLnZ1ZS1zbGlkZXItbWFyay1zdGVwe2xlZnQ6MH0udnVlLXNsaWRlci1idHQgLnZ1ZS1zbGlkZXItbWFyay1sYWJlbCwudnVlLXNsaWRlci10dGIgLnZ1ZS1zbGlkZXItbWFyay1sYWJlbHtsZWZ0OjEwMCU7bWFyZ2luLWxlZnQ6MTBweH0udnVlLXNsaWRlci1idHQgLnZ1ZS1zbGlkZXItbWFya3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSw1MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSw1MCUpfS52dWUtc2xpZGVyLWJ0dCAudnVlLXNsaWRlci1tYXJrLXN0ZXB7dG9wOjB9LnZ1ZS1zbGlkZXItYnR0IC52dWUtc2xpZGVyLW1hcmstbGFiZWx7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfS52dWUtc2xpZGVyLXR0YiAudnVlLXNsaWRlci1tYXJrey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKX0udnVlLXNsaWRlci10dGIgLnZ1ZS1zbGlkZXItbWFyay1zdGVwe2JvdHRvbTowfS52dWUtc2xpZGVyLXR0YiAudnVlLXNsaWRlci1tYXJrLWxhYmVse2JvdHRvbTo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSg1MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDUwJSl9LnZ1ZS1zbGlkZXItbWFyay1sYWJlbCwudnVlLXNsaWRlci1tYXJrLXN0ZXB7cG9zaXRpb246YWJzb2x1dGV9XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJmYjE1XCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLy8gRVNNIENPTVBBVCBGTEFHXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5cbi8vIEVYUE9SVFNcbl9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkVSUk9SX1RZUEVcIiwgZnVuY3Rpb24oKSB7IHJldHVybiAvKiByZWV4cG9ydCAqLyBFUlJPUl9UWVBFOyB9KTtcbl9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlZ1ZVNsaWRlck1hcmtcIiwgZnVuY3Rpb24oKSB7IHJldHVybiAvKiByZWV4cG9ydCAqLyB2dWVfc2xpZGVyX21hcms7IH0pO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiVnVlU2xpZGVyRG90XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gLyogcmVleHBvcnQgKi8gdnVlX3NsaWRlcl9kb3Q7IH0pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9AdnVlL2NsaS1zZXJ2aWNlL2xpYi9jb21tYW5kcy9idWlsZC9zZXRQdWJsaWNQYXRoLmpzXG4vLyBUaGlzIGZpbGUgaXMgaW1wb3J0ZWQgaW50byBsaWIvd2MgY2xpZW50IGJ1bmRsZXMuXG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgY3VycmVudFNjcmlwdCA9IHdpbmRvdy5kb2N1bWVudC5jdXJyZW50U2NyaXB0XG4gIGlmICh0cnVlKSB7XG4gICAgdmFyIGdldEN1cnJlbnRTY3JpcHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiODg3NVwiKVxuICAgIGN1cnJlbnRTY3JpcHQgPSBnZXRDdXJyZW50U2NyaXB0KClcblxuICAgIC8vIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBiZWNhdXNlIHByZXZpb3VzbHkgd2UgZGlyZWN0bHkgaW5jbHVkZWQgdGhlIHBvbHlmaWxsXG4gICAgaWYgKCEoJ2N1cnJlbnRTY3JpcHQnIGluIGRvY3VtZW50KSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRvY3VtZW50LCAnY3VycmVudFNjcmlwdCcsIHsgZ2V0OiBnZXRDdXJyZW50U2NyaXB0IH0pXG4gICAgfVxuICB9XG5cbiAgdmFyIHNyYyA9IGN1cnJlbnRTY3JpcHQgJiYgY3VycmVudFNjcmlwdC5zcmMubWF0Y2goLyguK1xcLylbXi9dK1xcLmpzKFxcPy4qKT8kLylcbiAgaWYgKHNyYykge1xuICAgIF9fd2VicGFja19yZXF1aXJlX18ucCA9IHNyY1sxXSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIH1cbn1cblxuLy8gSW5kaWNhdGUgdG8gd2VicGFjayB0aGF0IHRoaXMgZmlsZSBjYW4gYmUgY29uY2F0ZW5hdGVkXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBzZXRQdWJsaWNQYXRoID0gKG51bGwpO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL0B2dWUvYmFiZWwtaGVscGVyLXZ1ZS1qc3gtbWVyZ2UtcHJvcHMvZGlzdC9oZWxwZXIuanNcbnZhciBoZWxwZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMjYzOFwiKTtcbnZhciBoZWxwZXJfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oaGVscGVyKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG52YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJ2dWVcIixcImNvbW1vbmpzMlwiOlwidnVlXCIsXCJyb290XCI6XCJWdWVcIixcImFtZFwiOlwidnVlXCJ9XG52YXIgZXh0ZXJuYWxfY29tbW9uanNfdnVlX2NvbW1vbmpzMl92dWVfcm9vdF9WdWVfYW1kX3Z1ZV8gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiOGJiZlwiKTtcbnZhciBleHRlcm5hbF9jb21tb25qc192dWVfY29tbW9uanMyX3Z1ZV9yb290X1Z1ZV9hbWRfdnVlX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGV4dGVybmFsX2NvbW1vbmpzX3Z1ZV9jb21tb25qczJfdnVlX3Jvb3RfVnVlX2FtZF92dWVfKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy92dWUtY2xhc3MtY29tcG9uZW50L2Rpc3QvdnVlLWNsYXNzLWNvbXBvbmVudC5jb21tb24uanNcbnZhciB2dWVfY2xhc3NfY29tcG9uZW50X2NvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oXCI2NWQ5XCIpO1xudmFyIHZ1ZV9jbGFzc19jb21wb25lbnRfY29tbW9uX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKHZ1ZV9jbGFzc19jb21wb25lbnRfY29tbW9uKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdnVlLXByb3BlcnR5LWRlY29yYXRvci9saWIvdnVlLXByb3BlcnR5LWRlY29yYXRvci5qc1xuLyoqIHZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3IgdmVyc29uIDguMS4wIE1JVCBMSUNFTlNFIGNvcHlyaWdodCAyMDE4IGthb3J1bjM0MyAqL1xuLy8vIDxyZWZlcmVuY2UgdHlwZXM9J3JlZmxlY3QtbWV0YWRhdGEnLz5cblxuXG5cblxuLyoqXG4gKiBkZWNvcmF0b3Igb2YgYW4gaW5qZWN0XG4gKiBAcGFyYW0gZnJvbSBrZXlcbiAqIEByZXR1cm4gUHJvcGVydHlEZWNvcmF0b3JcbiAqL1xuZnVuY3Rpb24gSW5qZWN0KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gT2JqZWN0KHZ1ZV9jbGFzc19jb21wb25lbnRfY29tbW9uW1wiY3JlYXRlRGVjb3JhdG9yXCJdKShmdW5jdGlvbiAoY29tcG9uZW50T3B0aW9ucywga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50T3B0aW9ucy5pbmplY3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb21wb25lbnRPcHRpb25zLmluamVjdCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjb21wb25lbnRPcHRpb25zLmluamVjdCkpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudE9wdGlvbnMuaW5qZWN0W2tleV0gPSBvcHRpb25zIHx8IGtleTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLyoqXG4gKiBkZWNvcmF0b3Igb2YgYSBwcm92aWRlXG4gKiBAcGFyYW0ga2V5IGtleVxuICogQHJldHVybiBQcm9wZXJ0eURlY29yYXRvciB8IHZvaWRcbiAqL1xuZnVuY3Rpb24gUHJvdmlkZShrZXkpIHtcbiAgICByZXR1cm4gT2JqZWN0KHZ1ZV9jbGFzc19jb21wb25lbnRfY29tbW9uW1wiY3JlYXRlRGVjb3JhdG9yXCJdKShmdW5jdGlvbiAoY29tcG9uZW50T3B0aW9ucywgaykge1xuICAgICAgICB2YXIgcHJvdmlkZSA9IGNvbXBvbmVudE9wdGlvbnMucHJvdmlkZTtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm92aWRlICE9PSAnZnVuY3Rpb24nIHx8ICFwcm92aWRlLm1hbmFnZWQpIHtcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbF8xID0gY29tcG9uZW50T3B0aW9ucy5wcm92aWRlO1xuICAgICAgICAgICAgcHJvdmlkZSA9IGNvbXBvbmVudE9wdGlvbnMucHJvdmlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcnYgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2Ygb3JpZ2luYWxfMSA9PT0gJ2Z1bmN0aW9uJyA/IG9yaWdpbmFsXzEuY2FsbCh0aGlzKSA6IG9yaWdpbmFsXzEpIHx8IG51bGwpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gcHJvdmlkZS5tYW5hZ2VkKVxuICAgICAgICAgICAgICAgICAgICBydltwcm92aWRlLm1hbmFnZWRbaV1dID0gdGhpc1tpXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcnY7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcHJvdmlkZS5tYW5hZ2VkID0ge307XG4gICAgICAgIH1cbiAgICAgICAgcHJvdmlkZS5tYW5hZ2VkW2tdID0ga2V5IHx8IGs7XG4gICAgfSk7XG59XG4vKiogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZS1jbGFzcy1jb21wb25lbnQvYmxvYi9tYXN0ZXIvc3JjL3JlZmxlY3QudHN9ICovXG52YXIgcmVmbGVjdE1ldGFkYXRhSXNTdXBwb3J0ZWQgPSB0eXBlb2YgUmVmbGVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFJlZmxlY3QuZ2V0TWV0YWRhdGEgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gYXBwbHlNZXRhZGF0YShvcHRpb25zLCB0YXJnZXQsIGtleSkge1xuICAgIGlmIChyZWZsZWN0TWV0YWRhdGFJc1N1cHBvcnRlZCkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob3B0aW9ucykgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9wdGlvbnMudHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9wdGlvbnMudHlwZSA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgdGFyZ2V0LCBrZXkpO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBkZWNvcmF0b3Igb2YgbW9kZWxcbiAqIEBwYXJhbSAgZXZlbnQgZXZlbnQgbmFtZVxuICogQHBhcmFtIG9wdGlvbnMgb3B0aW9uc1xuICogQHJldHVybiBQcm9wZXJ0eURlY29yYXRvclxuICovXG5mdW5jdGlvbiBNb2RlbChldmVudCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xuICAgICAgICBhcHBseU1ldGFkYXRhKG9wdGlvbnMsIHRhcmdldCwga2V5KTtcbiAgICAgICAgT2JqZWN0KHZ1ZV9jbGFzc19jb21wb25lbnRfY29tbW9uW1wiY3JlYXRlRGVjb3JhdG9yXCJdKShmdW5jdGlvbiAoY29tcG9uZW50T3B0aW9ucywgaykge1xuICAgICAgICAgICAgKGNvbXBvbmVudE9wdGlvbnMucHJvcHMgfHwgKGNvbXBvbmVudE9wdGlvbnMucHJvcHMgPSB7fSkpW2tdID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbXBvbmVudE9wdGlvbnMubW9kZWwgPSB7IHByb3A6IGssIGV2ZW50OiBldmVudCB8fCBrIH07XG4gICAgICAgIH0pKHRhcmdldCwga2V5KTtcbiAgICB9O1xufVxuLyoqXG4gKiBkZWNvcmF0b3Igb2YgYSBwcm9wXG4gKiBAcGFyYW0gIG9wdGlvbnMgdGhlIG9wdGlvbnMgZm9yIHRoZSBwcm9wXG4gKiBAcmV0dXJuIFByb3BlcnR5RGVjb3JhdG9yIHwgdm9pZFxuICovXG5mdW5jdGlvbiBQcm9wKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgYXBwbHlNZXRhZGF0YShvcHRpb25zLCB0YXJnZXQsIGtleSk7XG4gICAgICAgIE9iamVjdCh2dWVfY2xhc3NfY29tcG9uZW50X2NvbW1vbltcImNyZWF0ZURlY29yYXRvclwiXSkoZnVuY3Rpb24gKGNvbXBvbmVudE9wdGlvbnMsIGspIHtcbiAgICAgICAgICAgIChjb21wb25lbnRPcHRpb25zLnByb3BzIHx8IChjb21wb25lbnRPcHRpb25zLnByb3BzID0ge30pKVtrXSA9IG9wdGlvbnM7XG4gICAgICAgIH0pKHRhcmdldCwga2V5KTtcbiAgICB9O1xufVxuLyoqXG4gKiBkZWNvcmF0b3Igb2YgYSB3YXRjaCBmdW5jdGlvblxuICogQHBhcmFtICBwYXRoIHRoZSBwYXRoIG9yIHRoZSBleHByZXNzaW9uIHRvIG9ic2VydmVcbiAqIEBwYXJhbSAgV2F0Y2hPcHRpb25cbiAqIEByZXR1cm4gTWV0aG9kRGVjb3JhdG9yXG4gKi9cbmZ1bmN0aW9uIFdhdGNoKHBhdGgsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVlcCwgZGVlcCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuaW1tZWRpYXRlLCBpbW1lZGlhdGUgPSBfYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYjtcbiAgICByZXR1cm4gT2JqZWN0KHZ1ZV9jbGFzc19jb21wb25lbnRfY29tbW9uW1wiY3JlYXRlRGVjb3JhdG9yXCJdKShmdW5jdGlvbiAoY29tcG9uZW50T3B0aW9ucywgaGFuZGxlcikge1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudE9wdGlvbnMud2F0Y2ggIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb21wb25lbnRPcHRpb25zLndhdGNoID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd2F0Y2ggPSBjb21wb25lbnRPcHRpb25zLndhdGNoO1xuICAgICAgICBpZiAodHlwZW9mIHdhdGNoW3BhdGhdID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh3YXRjaFtwYXRoXSkpIHtcbiAgICAgICAgICAgIHdhdGNoW3BhdGhdID0gW3dhdGNoW3BhdGhdXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygd2F0Y2hbcGF0aF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB3YXRjaFtwYXRoXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHdhdGNoW3BhdGhdLnB1c2goeyBoYW5kbGVyOiBoYW5kbGVyLCBkZWVwOiBkZWVwLCBpbW1lZGlhdGU6IGltbWVkaWF0ZSB9KTtcbiAgICB9KTtcbn1cbi8vIENvZGUgY29waWVkIGZyb20gVnVlL3NyYy9zaGFyZWQvdXRpbC5qc1xudmFyIGh5cGhlbmF0ZVJFID0gL1xcQihbQS1aXSkvZztcbnZhciBoeXBoZW5hdGUgPSBmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBzdHIucmVwbGFjZShoeXBoZW5hdGVSRSwgJy0kMScpLnRvTG93ZXJDYXNlKCk7IH07XG4vKipcbiAqIGRlY29yYXRvciBvZiBhbiBldmVudC1lbWl0dGVyIGZ1bmN0aW9uXG4gKiBAcGFyYW0gIGV2ZW50IFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICogQHJldHVybiBNZXRob2REZWNvcmF0b3JcbiAqL1xuZnVuY3Rpb24gRW1pdChldmVudCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoX3RhcmdldCwga2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgICAgIGtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgICB2YXIgb3JpZ2luYWwgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gZW1pdHRlcigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZW1pdCA9IGZ1bmN0aW9uIChyZXR1cm5WYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXR1cm5WYWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICBhcmdzLnVuc2hpZnQocmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgICAgIF90aGlzLiRlbWl0LmFwcGx5KF90aGlzLCBbZXZlbnQgfHwga2V5XS5jb25jYXQoYXJncykpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciByZXR1cm5WYWx1ZSA9IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShyZXR1cm5WYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZS50aGVuKGZ1bmN0aW9uIChyZXR1cm5WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBlbWl0KHJldHVyblZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVtaXQocmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG59XG5mdW5jdGlvbiBpc1Byb21pc2Uob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIFByb21pc2UgfHwgKG9iaiAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbicpO1xufVxuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbGliL3N0eWxlcy9kb3Quc2Nzc1xudmFyIGRvdCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI0ZWQ4XCIpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL2xpYi92dWUtc2xpZGVyLWRvdC50c3hcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuXG5cblxuXG52YXIgVnVlU2xpZGVyRG90ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfVnVlKSB7XG4gIF9pbmhlcml0cyhWdWVTbGlkZXJEb3QsIF9WdWUpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoVnVlU2xpZGVyRG90KTtcblxuICBmdW5jdGlvbiBWdWVTbGlkZXJEb3QoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZ1ZVNsaWRlckRvdCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVnVlU2xpZGVyRG90LCBbe1xuICAgIGtleTogXCJkcmFnU3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZHJhZ1N0YXJ0KGUpIHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy4kZW1pdCgnZHJhZy1zdGFydCcpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGggPSBhcmd1bWVudHNbMF07XG4gICAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICAgIFwicmVmXCI6IFwiZG90XCIsXG4gICAgICAgIFwiY2xhc3NcIjogdGhpcy5kb3RDbGFzc2VzLFxuICAgICAgICBcImF0dHJzXCI6IHtcbiAgICAgICAgICBcImFyaWEtdmFsdWV0ZXh0XCI6IHRoaXMudG9vbHRpcFZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIFwib25cIjoge1xuICAgICAgICAgIFwibW91c2Vkb3duXCI6IHRoaXMuZHJhZ1N0YXJ0LFxuICAgICAgICAgIFwidG91Y2hzdGFydFwiOiB0aGlzLmRyYWdTdGFydFxuICAgICAgICB9XG4gICAgICB9LCBbdGhpcy4kc2xvdHMuZG90IHx8IGgoXCJkaXZcIiwge1xuICAgICAgICBcImNsYXNzXCI6IHRoaXMuaGFuZGxlQ2xhc3NlcyxcbiAgICAgICAgXCJzdHlsZVwiOiB0aGlzLmRvdFN0eWxlXG4gICAgICB9KSwgdGhpcy50b29sdGlwICE9PSAnbm9uZScgPyBoKFwiZGl2XCIsIHtcbiAgICAgICAgXCJjbGFzc1wiOiB0aGlzLnRvb2x0aXBDbGFzc2VzXG4gICAgICB9LCBbdGhpcy4kc2xvdHMudG9vbHRpcCB8fCBoKFwiZGl2XCIsIHtcbiAgICAgICAgXCJjbGFzc1wiOiB0aGlzLnRvb2x0aXBJbm5lckNsYXNzZXMsXG4gICAgICAgIFwic3R5bGVcIjogdGhpcy50b29sdGlwU3R5bGVcbiAgICAgIH0sIFtoKFwic3BhblwiLCB7XG4gICAgICAgIFwiY2xhc3NcIjogJ3Z1ZS1zbGlkZXItZG90LXRvb2x0aXAtdGV4dCdcbiAgICAgIH0sIFt0aGlzLnRvb2x0aXBWYWx1ZV0pXSldKSA6IG51bGxdKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZG90Q2xhc3Nlc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFsndnVlLXNsaWRlci1kb3QnLCB7XG4gICAgICAgICd2dWUtc2xpZGVyLWRvdC1ob3Zlcic6IHRoaXMudG9vbHRpcCA9PT0gJ2hvdmVyJyB8fCB0aGlzLnRvb2x0aXAgPT09ICdhY3RpdmUnLFxuICAgICAgICAndnVlLXNsaWRlci1kb3QtZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAndnVlLXNsaWRlci1kb3QtZm9jdXMnOiB0aGlzLmZvY3VzXG4gICAgICB9XTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlQ2xhc3Nlc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFsndnVlLXNsaWRlci1kb3QtaGFuZGxlJywge1xuICAgICAgICAndnVlLXNsaWRlci1kb3QtaGFuZGxlLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgJ3Z1ZS1zbGlkZXItZG90LWhhbmRsZS1mb2N1cyc6IHRoaXMuZm9jdXNcbiAgICAgIH1dO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0b29sdGlwQ2xhc3Nlc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFsndnVlLXNsaWRlci1kb3QtdG9vbHRpcCcsIFtcInZ1ZS1zbGlkZXItZG90LXRvb2x0aXAtXCIuY29uY2F0KHRoaXMudG9vbHRpcFBsYWNlbWVudCldLCB7XG4gICAgICAgICd2dWUtc2xpZGVyLWRvdC10b29sdGlwLXNob3cnOiB0aGlzLnNob3dUb29sdGlwXG4gICAgICB9XTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidG9vbHRpcElubmVyQ2xhc3Nlc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFsndnVlLXNsaWRlci1kb3QtdG9vbHRpcC1pbm5lcicsIFtcInZ1ZS1zbGlkZXItZG90LXRvb2x0aXAtaW5uZXItXCIuY29uY2F0KHRoaXMudG9vbHRpcFBsYWNlbWVudCldLCB7XG4gICAgICAgICd2dWUtc2xpZGVyLWRvdC10b29sdGlwLWlubmVyLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgJ3Z1ZS1zbGlkZXItZG90LXRvb2x0aXAtaW5uZXItZm9jdXMnOiB0aGlzLmZvY3VzXG4gICAgICB9XTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2hvd1Rvb2x0aXBcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHN3aXRjaCAodGhpcy50b29sdGlwKSB7XG4gICAgICAgIGNhc2UgJ2Fsd2F5cyc6XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgY2FzZSAnbm9uZSc6XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGNhc2UgJ2ZvY3VzJzpcbiAgICAgICAgY2FzZSAnYWN0aXZlJzpcbiAgICAgICAgICByZXR1cm4gISF0aGlzLmZvY3VzO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0b29sdGlwVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICh0aGlzLnRvb2x0aXBGb3JtYXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLnRvb2x0aXBGb3JtYXR0ZXIgPT09ICdzdHJpbmcnID8gdGhpcy50b29sdGlwRm9ybWF0dGVyLnJlcGxhY2UoL1xce3ZhbHVlXFx9LywgU3RyaW5nKHRoaXMudmFsdWUpKSA6IHRoaXMudG9vbHRpcEZvcm1hdHRlcih0aGlzLnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBWdWVTbGlkZXJEb3Q7XG59KGV4dGVybmFsX2NvbW1vbmpzX3Z1ZV9jb21tb25qczJfdnVlX3Jvb3RfVnVlX2FtZF92dWVfZGVmYXVsdC5hKTtcblxuX19kZWNvcmF0ZShbUHJvcCh7XG4gIGRlZmF1bHQ6IDBcbn0pXSwgVnVlU2xpZGVyRG90LnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKCldLCBWdWVTbGlkZXJEb3QucHJvdG90eXBlLCBcInRvb2x0aXBcIiwgdm9pZCAwKTtcblxuX19kZWNvcmF0ZShbUHJvcCgpXSwgVnVlU2xpZGVyRG90LnByb3RvdHlwZSwgXCJkb3RTdHlsZVwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKCldLCBWdWVTbGlkZXJEb3QucHJvdG90eXBlLCBcInRvb2x0aXBTdHlsZVwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKHtcbiAgdHlwZTogU3RyaW5nLFxuICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRvcih2YWwpIHtcbiAgICByZXR1cm4gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5pbmRleE9mKHZhbCkgPiAtMTtcbiAgfSxcbiAgcmVxdWlyZWQ6IHRydWVcbn0pXSwgVnVlU2xpZGVyRG90LnByb3RvdHlwZSwgXCJ0b29sdGlwUGxhY2VtZW50XCIsIHZvaWQgMCk7XG5cbl9fZGVjb3JhdGUoW1Byb3Aoe1xuICB0eXBlOiBbU3RyaW5nLCBGdW5jdGlvbl1cbn0pXSwgVnVlU2xpZGVyRG90LnByb3RvdHlwZSwgXCJ0b29sdGlwRm9ybWF0dGVyXCIsIHZvaWQgMCk7XG5cbl9fZGVjb3JhdGUoW1Byb3Aoe1xuICB0eXBlOiBCb29sZWFuLFxuICBkZWZhdWx0OiBmYWxzZVxufSldLCBWdWVTbGlkZXJEb3QucHJvdG90eXBlLCBcImZvY3VzXCIsIHZvaWQgMCk7XG5cbl9fZGVjb3JhdGUoW1Byb3Aoe1xuICBkZWZhdWx0OiBmYWxzZVxufSldLCBWdWVTbGlkZXJEb3QucHJvdG90eXBlLCBcImRpc2FibGVkXCIsIHZvaWQgMCk7XG5cblZ1ZVNsaWRlckRvdCA9IF9fZGVjb3JhdGUoW3Z1ZV9jbGFzc19jb21wb25lbnRfY29tbW9uX2RlZmF1bHQoKSh7XG4gIG5hbWU6ICdWdWVTbGlkZXJEb3QnXG59KV0sIFZ1ZVNsaWRlckRvdCk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB2dWVfc2xpZGVyX2RvdCA9IChWdWVTbGlkZXJEb3QpO1xuLy8gRVhURVJOQUwgTU9EVUxFOiAuL2xpYi9zdHlsZXMvbWFyay5zY3NzXG52YXIgbWFyayA9IF9fd2VicGFja19yZXF1aXJlX18oXCI1NTZjXCIpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL2xpYi92dWUtc2xpZGVyLW1hcmsudHN4XG5mdW5jdGlvbiB2dWVfc2xpZGVyX21hcmtfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyB2dWVfc2xpZGVyX21hcmtfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IHZ1ZV9zbGlkZXJfbWFya190eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gdnVlX3NsaWRlcl9tYXJrX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIHZ1ZV9zbGlkZXJfbWFya19jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIHZ1ZV9zbGlkZXJfbWFya19kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gdnVlX3NsaWRlcl9tYXJrX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgdnVlX3NsaWRlcl9tYXJrX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSB2dWVfc2xpZGVyX21hcmtfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gdnVlX3NsaWRlcl9tYXJrX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHZ1ZV9zbGlkZXJfbWFya19zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gdnVlX3NsaWRlcl9tYXJrX3NldFByb3RvdHlwZU9mKG8sIHApIHsgdnVlX3NsaWRlcl9tYXJrX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiB2dWVfc2xpZGVyX21hcmtfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gdnVlX3NsaWRlcl9tYXJrX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSB2dWVfc2xpZGVyX21hcmtfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gdnVlX3NsaWRlcl9tYXJrX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSB2dWVfc2xpZGVyX21hcmtfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIHZ1ZV9zbGlkZXJfbWFya19wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gdnVlX3NsaWRlcl9tYXJrX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAodnVlX3NsaWRlcl9tYXJrX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gdnVlX3NsaWRlcl9tYXJrX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiB2dWVfc2xpZGVyX21hcmtfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gdnVlX3NsaWRlcl9tYXJrX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiB2dWVfc2xpZGVyX21hcmtfZ2V0UHJvdG90eXBlT2YobykgeyB2dWVfc2xpZGVyX21hcmtfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gdnVlX3NsaWRlcl9tYXJrX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cblxuXG5cblxudmFyIFZ1ZVNsaWRlTWFyayA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1Z1ZSkge1xuICB2dWVfc2xpZGVyX21hcmtfaW5oZXJpdHMoVnVlU2xpZGVNYXJrLCBfVnVlKTtcblxuICB2YXIgX3N1cGVyID0gdnVlX3NsaWRlcl9tYXJrX2NyZWF0ZVN1cGVyKFZ1ZVNsaWRlTWFyayk7XG5cbiAgZnVuY3Rpb24gVnVlU2xpZGVNYXJrKCkge1xuICAgIHZ1ZV9zbGlkZXJfbWFya19jbGFzc0NhbGxDaGVjayh0aGlzLCBWdWVTbGlkZU1hcmspO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgdnVlX3NsaWRlcl9tYXJrX2NyZWF0ZUNsYXNzKFZ1ZVNsaWRlTWFyaywgW3tcbiAgICBrZXk6IFwibGFiZWxDbGlja0hhbmRsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsYWJlbENsaWNrSGFuZGxlKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLiRlbWl0KCdwcmVzc0xhYmVsJywgdGhpcy5tYXJrLnBvcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgaCA9IGFyZ3VtZW50c1swXTtcbiAgICAgIHZhciBtYXJrID0gdGhpcy5tYXJrO1xuICAgICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgICBcImNsYXNzXCI6IHRoaXMubWFya3NDbGFzc2VzXG4gICAgICB9LCBbdGhpcy4kc2xvdHMuc3RlcCB8fCBoKFwiZGl2XCIsIHtcbiAgICAgICAgXCJjbGFzc1wiOiB0aGlzLnN0ZXBDbGFzc2VzLFxuICAgICAgICBcInN0eWxlXCI6IFt0aGlzLnN0ZXBTdHlsZSwgbWFyay5zdHlsZSwgbWFyay5hY3RpdmUgPyB0aGlzLnN0ZXBBY3RpdmVTdHlsZSA6IG51bGwsIG1hcmsuYWN0aXZlID8gbWFyay5hY3RpdmVTdHlsZSA6IG51bGxdXG4gICAgICB9KSwgIXRoaXMuaGlkZUxhYmVsID8gdGhpcy4kc2xvdHMubGFiZWwgfHwgaChcImRpdlwiLCB7XG4gICAgICAgIFwiY2xhc3NcIjogdGhpcy5sYWJlbENsYXNzZXMsXG4gICAgICAgIFwic3R5bGVcIjogW3RoaXMubGFiZWxTdHlsZSwgbWFyay5sYWJlbFN0eWxlLCBtYXJrLmFjdGl2ZSA/IHRoaXMubGFiZWxBY3RpdmVTdHlsZSA6IG51bGwsIG1hcmsuYWN0aXZlID8gbWFyay5sYWJlbEFjdGl2ZVN0eWxlIDogbnVsbF0sXG4gICAgICAgIFwib25cIjoge1xuICAgICAgICAgIFwiY2xpY2tcIjogdGhpcy5sYWJlbENsaWNrSGFuZGxlXG4gICAgICAgIH1cbiAgICAgIH0sIFttYXJrLmxhYmVsXSkgOiBudWxsXSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1hcmtzQ2xhc3Nlc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFsndnVlLXNsaWRlci1tYXJrJywge1xuICAgICAgICAndnVlLXNsaWRlci1tYXJrLWFjdGl2ZSc6IHRoaXMubWFyay5hY3RpdmVcbiAgICAgIH1dO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGVwQ2xhc3Nlc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFsndnVlLXNsaWRlci1tYXJrLXN0ZXAnLCB7XG4gICAgICAgICd2dWUtc2xpZGVyLW1hcmstc3RlcC1hY3RpdmUnOiB0aGlzLm1hcmsuYWN0aXZlXG4gICAgICB9XTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibGFiZWxDbGFzc2VzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gWyd2dWUtc2xpZGVyLW1hcmstbGFiZWwnLCB7XG4gICAgICAgICd2dWUtc2xpZGVyLW1hcmstbGFiZWwtYWN0aXZlJzogdGhpcy5tYXJrLmFjdGl2ZVxuICAgICAgfV07XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFZ1ZVNsaWRlTWFyaztcbn0oZXh0ZXJuYWxfY29tbW9uanNfdnVlX2NvbW1vbmpzMl92dWVfcm9vdF9WdWVfYW1kX3Z1ZV9kZWZhdWx0LmEpO1xuXG5fX2RlY29yYXRlKFtQcm9wKHtcbiAgcmVxdWlyZWQ6IHRydWVcbn0pXSwgVnVlU2xpZGVNYXJrLnByb3RvdHlwZSwgXCJtYXJrXCIsIHZvaWQgMCk7XG5cbl9fZGVjb3JhdGUoW1Byb3AoQm9vbGVhbildLCBWdWVTbGlkZU1hcmsucHJvdG90eXBlLCBcImhpZGVMYWJlbFwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKCldLCBWdWVTbGlkZU1hcmsucHJvdG90eXBlLCBcInN0ZXBTdHlsZVwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKCldLCBWdWVTbGlkZU1hcmsucHJvdG90eXBlLCBcInN0ZXBBY3RpdmVTdHlsZVwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKCldLCBWdWVTbGlkZU1hcmsucHJvdG90eXBlLCBcImxhYmVsU3R5bGVcIiwgdm9pZCAwKTtcblxuX19kZWNvcmF0ZShbUHJvcCgpXSwgVnVlU2xpZGVNYXJrLnByb3RvdHlwZSwgXCJsYWJlbEFjdGl2ZVN0eWxlXCIsIHZvaWQgMCk7XG5cblZ1ZVNsaWRlTWFyayA9IF9fZGVjb3JhdGUoW3Z1ZV9jbGFzc19jb21wb25lbnRfY29tbW9uX2RlZmF1bHQoKSh7XG4gIG5hbWU6ICdWdWVTbGlkZU1hcmsnXG59KV0sIFZ1ZVNsaWRlTWFyayk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB2dWVfc2xpZGVyX21hcmsgPSAoVnVlU2xpZGVNYXJrKTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbGliL3V0aWxzL2luZGV4LnRzXG52YXIgZ2V0U2l6ZSA9IGZ1bmN0aW9uIGdldFNpemUodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyBcIlwiLmNvbmNhdCh2YWx1ZSwgXCJweFwiKSA6IHZhbHVlO1xufTtcbi8qKiBHZXQgdGhlIGRpc3RhbmNlIG9mIHRoZSBlbGVtZW50IGZyb20gdGhlIHRvcC9sZWZ0IG9mIHRoZSBwYWdlICovXG5cbnZhciBnZXRPZmZzZXQgPSBmdW5jdGlvbiBnZXRPZmZzZXQoZWxlbSkge1xuICB2YXIgZG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIHZhciByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIG9mZnNldCA9IHtcbiAgICB5OiByZWN0LnRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jLnNjcm9sbFRvcCkgLSAoZG9jLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwKSxcbiAgICB4OiByZWN0LmxlZnQgKyAod2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvYy5zY3JvbGxMZWZ0KSAtIChkb2MuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMClcbiAgfTtcbiAgcmV0dXJuIG9mZnNldDtcbn07XG4vKipcbiAqIEdldCB0aGUgcG9zaXRpb24gb2YgdGhlIG1vdXNlL2ZpbmdlciBpbiB0aGUgZWxlbWVudFxuICogQHBhcmFtIGUgVHJpZ2dlciBldmVudFxuICogQHBhcmFtIGVsZW0gQ29udGFpbmVyIGVsZW1lbnRcbiAqIEBwYXJhbSBpc1JldmVyc2UgRnJvbSB0aGUgcmlnaHQvYm90dG9tXG4gKi9cblxudmFyIGdldFBvcyA9IGZ1bmN0aW9uIGdldFBvcyhlLCBlbGVtLCBpc1JldmVyc2UpIHtcbiAgdmFyIHpvb20gPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDE7XG4gIHZhciBldmVudCA9ICd0YXJnZXRUb3VjaGVzJyBpbiBlID8gZS50YXJnZXRUb3VjaGVzWzBdIDogZTtcbiAgdmFyIG9mZnNldCA9IGdldE9mZnNldChlbGVtKTtcbiAgdmFyIHBvc09iaiA9IHtcbiAgICB4OiBldmVudC5wYWdlWCAtIG9mZnNldC54LFxuICAgIHk6IGV2ZW50LnBhZ2VZIC0gb2Zmc2V0LnlcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICB4OiBpc1JldmVyc2UgPyBlbGVtLm9mZnNldFdpZHRoICogem9vbSAtIHBvc09iai54IDogcG9zT2JqLngsXG4gICAgeTogaXNSZXZlcnNlID8gZWxlbS5vZmZzZXRIZWlnaHQgKiB6b29tIC0gcG9zT2JqLnkgOiBwb3NPYmoueVxuICB9O1xufTtcbnZhciBLRVlfQ09ERTtcblxuKGZ1bmN0aW9uIChLRVlfQ09ERSkge1xuICBLRVlfQ09ERVtLRVlfQ09ERVtcIlBBR0VfVVBcIl0gPSAzM10gPSBcIlBBR0VfVVBcIjtcbiAgS0VZX0NPREVbS0VZX0NPREVbXCJQQUdFX0RPV05cIl0gPSAzNF0gPSBcIlBBR0VfRE9XTlwiO1xuICBLRVlfQ09ERVtLRVlfQ09ERVtcIkVORFwiXSA9IDM1XSA9IFwiRU5EXCI7XG4gIEtFWV9DT0RFW0tFWV9DT0RFW1wiSE9NRVwiXSA9IDM2XSA9IFwiSE9NRVwiO1xuICBLRVlfQ09ERVtLRVlfQ09ERVtcIkxFRlRcIl0gPSAzN10gPSBcIkxFRlRcIjtcbiAgS0VZX0NPREVbS0VZX0NPREVbXCJVUFwiXSA9IDM4XSA9IFwiVVBcIjtcbiAgS0VZX0NPREVbS0VZX0NPREVbXCJSSUdIVFwiXSA9IDM5XSA9IFwiUklHSFRcIjtcbiAgS0VZX0NPREVbS0VZX0NPREVbXCJET1dOXCJdID0gNDBdID0gXCJET1dOXCI7XG59KShLRVlfQ09ERSB8fCAoS0VZX0NPREUgPSB7fSkpO1xuXG52YXIgZ2V0S2V5Ym9hcmRIYW5kbGVGdW5jID0gZnVuY3Rpb24gZ2V0S2V5Ym9hcmRIYW5kbGVGdW5jKGUsIHBhcmFtcykge1xuICBpZiAocGFyYW1zLmhvb2spIHtcbiAgICB2YXIgcmVzdWx0ID0gcGFyYW1zLmhvb2soZSk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdmdW5jdGlvbicpIHJldHVybiByZXN1bHQ7XG4gICAgaWYgKCFyZXN1bHQpIHJldHVybiBudWxsO1xuICB9XG5cbiAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICBjYXNlIEtFWV9DT0RFLlVQOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMuZGlyZWN0aW9uID09PSAndHRiJyA/IGkgLSAxIDogaSArIDE7XG4gICAgICB9O1xuXG4gICAgY2FzZSBLRVlfQ09ERS5SSUdIVDpcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyBpIC0gMSA6IGkgKyAxO1xuICAgICAgfTtcblxuICAgIGNhc2UgS0VZX0NPREUuRE9XTjpcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLmRpcmVjdGlvbiA9PT0gJ3R0YicgPyBpICsgMSA6IGkgLSAxO1xuICAgICAgfTtcblxuICAgIGNhc2UgS0VZX0NPREUuTEVGVDpcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyBpICsgMSA6IGkgLSAxO1xuICAgICAgfTtcblxuICAgIGNhc2UgS0VZX0NPREUuRU5EOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5tYXg7XG4gICAgICB9O1xuXG4gICAgY2FzZSBLRVlfQ09ERS5IT01FOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5taW47XG4gICAgICB9O1xuXG4gICAgY2FzZSBLRVlfQ09ERS5QQUdFX1VQOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiBpICsgMTA7XG4gICAgICB9O1xuXG4gICAgY2FzZSBLRVlfQ09ERS5QQUdFX0RPV046XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIGkgLSAxMDtcbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL2xpYi91dGlscy9kZWNpbWFsLnRzXG5mdW5jdGlvbiBkZWNpbWFsX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gZGVjaW1hbF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gZGVjaW1hbF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlY2ltYWxfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlY2ltYWxfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuLyoqXG4gKiBGb3IgYW55IHByZWNpc2UgZmxvYXRpbmcgcG9pbnQgY2FsY3VsYXRpb25cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgRGVjaW1hbFxuICovXG52YXIgRGVjaW1hbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERlY2ltYWwobnVtKSB7XG4gICAgZGVjaW1hbF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEZWNpbWFsKTtcblxuICAgIHRoaXMubnVtID0gbnVtO1xuICB9XG5cbiAgZGVjaW1hbF9jcmVhdGVDbGFzcyhEZWNpbWFsLCBbe1xuICAgIGtleTogXCJkZWNpbWFsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlY2ltYWwobnVtMiwgb3BlcmF0b3IpIHtcbiAgICAgIHZhciBudW0xID0gdGhpcy5udW07XG4gICAgICB2YXIgbGVuMSA9IHRoaXMuZ2V0RGVjaW1hbExlbihudW0xKTtcbiAgICAgIHZhciBsZW4yID0gdGhpcy5nZXREZWNpbWFsTGVuKG51bTIpO1xuICAgICAgdmFyIGJhc2UgPSAwO1xuXG4gICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgIGJhc2UgPSB0aGlzLmdldEV4cG9uZW50KGxlbjEsIGxlbjIpO1xuICAgICAgICAgIHRoaXMubnVtID0gKHRoaXMuc2FmZVJvdW5kVXAobnVtMSwgYmFzZSkgKyB0aGlzLnNhZmVSb3VuZFVwKG51bTIsIGJhc2UpKSAvIGJhc2U7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgYmFzZSA9IHRoaXMuZ2V0RXhwb25lbnQobGVuMSwgbGVuMik7XG4gICAgICAgICAgdGhpcy5udW0gPSAodGhpcy5zYWZlUm91bmRVcChudW0xLCBiYXNlKSAtIHRoaXMuc2FmZVJvdW5kVXAobnVtMiwgYmFzZSkpIC8gYmFzZTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICB0aGlzLm51bSA9IHRoaXMuc2FmZVJvdW5kVXAodGhpcy5zYWZlUm91bmRVcChudW0xLCB0aGlzLmdldEV4cG9uZW50KGxlbjEpKSwgdGhpcy5zYWZlUm91bmRVcChudW0yLCB0aGlzLmdldEV4cG9uZW50KGxlbjIpKSkgLyB0aGlzLmdldEV4cG9uZW50KGxlbjEgKyBsZW4yKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICBiYXNlID0gdGhpcy5nZXRFeHBvbmVudChsZW4xLCBsZW4yKTtcbiAgICAgICAgICB0aGlzLm51bSA9IHRoaXMuc2FmZVJvdW5kVXAobnVtMSwgYmFzZSkgLyB0aGlzLnNhZmVSb3VuZFVwKG51bTIsIGJhc2UpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJyUnOlxuICAgICAgICAgIGJhc2UgPSB0aGlzLmdldEV4cG9uZW50KGxlbjEsIGxlbjIpO1xuICAgICAgICAgIHRoaXMubnVtID0gdGhpcy5zYWZlUm91bmRVcChudW0xLCBiYXNlKSAlIHRoaXMuc2FmZVJvdW5kVXAobnVtMiwgYmFzZSkgLyBiYXNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicGx1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwbHVzKG51bTIpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlY2ltYWwobnVtMiwgJysnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibWludXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWludXMobnVtMikge1xuICAgICAgcmV0dXJuIHRoaXMuZGVjaW1hbChudW0yLCAnLScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtdWx0aXBseVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtdWx0aXBseShudW0yKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWNpbWFsKG51bTIsICcqJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRpdmlkZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXZpZGUobnVtMikge1xuICAgICAgcmV0dXJuIHRoaXMuZGVjaW1hbChudW0yLCAnLycpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1haW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtYWluZGVyKG51bTIpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlY2ltYWwobnVtMiwgJyUnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidG9OdW1iZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9OdW1iZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5udW07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldERlY2ltYWxMZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVjaW1hbExlbihudW0pIHtcbiAgICAgIHZhciBzdHJBcnIgPSBcIlwiLmNvbmNhdChudW0pLnNwbGl0KCdlJyk7XG4gICAgICByZXR1cm4gKFwiXCIuY29uY2F0KHN0ckFyclswXSkuc3BsaXQoJy4nKVsxXSB8fCAnJykubGVuZ3RoIC0gKHN0ckFyclsxXSA/ICtzdHJBcnJbMV0gOiAwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RXhwb25lbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RXhwb25lbnQobnVtMSwgbnVtMikge1xuICAgICAgcmV0dXJuIE1hdGgucG93KDEwLCBudW0yICE9PSB2b2lkIDAgPyBNYXRoLm1heChudW0xLCBudW0yKSA6IG51bTEpO1xuICAgIH0gLy8gZml4OiA5OTk5OTk5Ljk5OTk1ICogMTAwMDAwID0gOTk5OTk5OTk5OTk0Ljk5OTlcblxuICB9LCB7XG4gICAga2V5OiBcInNhZmVSb3VuZFVwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNhZmVSb3VuZFVwKG51bSwgZXhwb25lbnQpIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIGV4cG9uZW50KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGVjaW1hbDtcbn0oKTtcblxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL2xpYi91dGlscy9jb250cm9sLnRzXG52YXIgX0VSUk9SX01TRztcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIGNvbnRyb2xfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBjb250cm9sX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBjb250cm9sX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgY29udHJvbF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgY29udHJvbF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5cbnZhciBFUlJPUl9UWVBFO1xuXG4oZnVuY3Rpb24gKEVSUk9SX1RZUEUpIHtcbiAgRVJST1JfVFlQRVtFUlJPUl9UWVBFW1wiVkFMVUVcIl0gPSAxXSA9IFwiVkFMVUVcIjtcbiAgRVJST1JfVFlQRVtFUlJPUl9UWVBFW1wiSU5URVJWQUxcIl0gPSAyXSA9IFwiSU5URVJWQUxcIjtcbiAgRVJST1JfVFlQRVtFUlJPUl9UWVBFW1wiTUlOXCJdID0gM10gPSBcIk1JTlwiO1xuICBFUlJPUl9UWVBFW0VSUk9SX1RZUEVbXCJNQVhcIl0gPSA0XSA9IFwiTUFYXCI7XG4gIEVSUk9SX1RZUEVbRVJST1JfVFlQRVtcIk9SREVSXCJdID0gNV0gPSBcIk9SREVSXCI7XG59KShFUlJPUl9UWVBFIHx8IChFUlJPUl9UWVBFID0ge30pKTtcblxudmFyIEVSUk9SX01TRyA9IChfRVJST1JfTVNHID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfRVJST1JfTVNHLCBFUlJPUl9UWVBFLlZBTFVFLCAnVGhlIHR5cGUgb2YgdGhlIFwidmFsdWVcIiBpcyBpbGxlZ2FsJyksIF9kZWZpbmVQcm9wZXJ0eShfRVJST1JfTVNHLCBFUlJPUl9UWVBFLklOVEVSVkFMLCAnVGhlIHByb3AgXCJpbnRlcnZhbFwiIGlzIGludmFsaWQsIFwiKG1heCAtIG1pbilcIiBtdXN0IGJlIGRpdmlzaWJsZSBieSBcImludGVydmFsXCInKSwgX2RlZmluZVByb3BlcnR5KF9FUlJPUl9NU0csIEVSUk9SX1RZUEUuTUlOLCAnVGhlIFwidmFsdWVcIiBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB0aGUgXCJtaW5cIi4nKSwgX2RlZmluZVByb3BlcnR5KF9FUlJPUl9NU0csIEVSUk9SX1RZUEUuTUFYLCAnVGhlIFwidmFsdWVcIiBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgXCJtYXhcIi4nKSwgX2RlZmluZVByb3BlcnR5KF9FUlJPUl9NU0csIEVSUk9SX1RZUEUuT1JERVIsICdXaGVuIFwib3JkZXJcIiBpcyBmYWxzZSwgdGhlIHBhcmFtZXRlcnMgXCJtaW5SYW5nZVwiLCBcIm1heFJhbmdlXCIsIFwiZml4ZWRcIiwgXCJlbmFibGVkXCIgYXJlIGludmFsaWQuJyksIF9FUlJPUl9NU0cpO1xuLyoqXG4gKiBTbGlkZXIgbG9naWMgY29udHJvbCBjZW50ZXJcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQ29udHJvbFxuICovXG5cbnZhciBjb250cm9sX0NvbnRyb2wgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb250cm9sKG9wdGlvbnMpIHtcbiAgICBjb250cm9sX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRyb2wpO1xuXG4gICAgdGhpcy5kb3RzUG9zID0gW107IC8vIFRoZSBwb3NpdGlvbiBvZiBlYWNoIHNsaWRlclxuXG4gICAgdGhpcy5kb3RzVmFsdWUgPSBbXTsgLy8gVGhlIHZhbHVlIG9mIGVhY2ggc2xpZGVyXG5cbiAgICB0aGlzLmNhY2hlUmFuZ2VEaXIgPSB7fTtcbiAgICB0aGlzLmRhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgdGhpcy5tYXggPSBvcHRpb25zLm1heDtcbiAgICB0aGlzLm1pbiA9IG9wdGlvbnMubWluO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBvcHRpb25zLmludGVydmFsO1xuICAgIHRoaXMub3JkZXIgPSBvcHRpb25zLm9yZGVyO1xuICAgIHRoaXMubWFya3MgPSBvcHRpb25zLm1hcmtzO1xuICAgIHRoaXMuaW5jbHVkZWQgPSBvcHRpb25zLmluY2x1ZGVkO1xuICAgIHRoaXMucHJvY2VzcyA9IG9wdGlvbnMucHJvY2VzcztcbiAgICB0aGlzLmFkc29yYiA9IG9wdGlvbnMuYWRzb3JiO1xuICAgIHRoaXMuZG90T3B0aW9ucyA9IG9wdGlvbnMuZG90T3B0aW9ucztcbiAgICB0aGlzLm9uRXJyb3IgPSBvcHRpb25zLm9uRXJyb3I7XG5cbiAgICBpZiAodGhpcy5vcmRlcikge1xuICAgICAgdGhpcy5taW5SYW5nZSA9IG9wdGlvbnMubWluUmFuZ2UgfHwgMDtcbiAgICAgIHRoaXMubWF4UmFuZ2UgPSBvcHRpb25zLm1heFJhbmdlIHx8IDA7XG4gICAgICB0aGlzLmVuYWJsZUNyb3NzID0gb3B0aW9ucy5lbmFibGVDcm9zcztcbiAgICAgIHRoaXMuZml4ZWQgPSBvcHRpb25zLmZpeGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5taW5SYW5nZSB8fCBvcHRpb25zLm1heFJhbmdlIHx8ICFvcHRpb25zLmVuYWJsZUNyb3NzIHx8IG9wdGlvbnMuZml4ZWQpIHtcbiAgICAgICAgdGhpcy5lbWl0RXJyb3IoRVJST1JfVFlQRS5PUkRFUik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubWluUmFuZ2UgPSAwO1xuICAgICAgdGhpcy5tYXhSYW5nZSA9IDA7XG4gICAgICB0aGlzLmVuYWJsZUNyb3NzID0gdHJ1ZTtcbiAgICAgIHRoaXMuZml4ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFZhbHVlKG9wdGlvbnMudmFsdWUpO1xuICB9XG5cbiAgY29udHJvbF9jcmVhdGVDbGFzcyhDb250cm9sLCBbe1xuICAgIGtleTogXCJzZXRWYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5zZXREb3RzVmFsdWUoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB0aGlzLm9yZGVyID8gX3RvQ29uc3VtYWJsZUFycmF5KHZhbHVlKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5nZXRJbmRleEJ5VmFsdWUoYSkgLSBfdGhpcy5nZXRJbmRleEJ5VmFsdWUoYik7XG4gICAgICB9KSA6IF90b0NvbnN1bWFibGVBcnJheSh2YWx1ZSkgOiBbdmFsdWVdLCB0cnVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0RG90c1ZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldERvdHNWYWx1ZSh2YWx1ZSwgc3luY1Bvcykge1xuICAgICAgdGhpcy5kb3RzVmFsdWUgPSB2YWx1ZTtcblxuICAgICAgaWYgKHN5bmNQb3MpIHtcbiAgICAgICAgdGhpcy5zeW5jRG90c1BvcygpO1xuICAgICAgfVxuICAgIH0gLy8gU2V0IHRoZSBzbGlkZXIgcG9zaXRpb25cblxuICB9LCB7XG4gICAga2V5OiBcInNldERvdHNQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RG90c1Bvcyhkb3RzUG9zKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGxpc3QgPSB0aGlzLm9yZGVyID8gX3RvQ29uc3VtYWJsZUFycmF5KGRvdHNQb3MpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgfSkgOiBkb3RzUG9zO1xuICAgICAgdGhpcy5kb3RzUG9zID0gbGlzdDtcbiAgICAgIHRoaXMuc2V0RG90c1ZhbHVlKGxpc3QubWFwKGZ1bmN0aW9uIChkb3RQb3MpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5nZXRWYWx1ZUJ5UG9zKGRvdFBvcyk7XG4gICAgICB9KSwgdGhpcy5hZHNvcmIpO1xuICAgIH0gLy8gR2V0IHZhbHVlIGJ5IHBvc2l0aW9uXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRWYWx1ZUJ5UG9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlQnlQb3MocG9zKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnBhcnNlUG9zKHBvcyk7IC8vIFdoZW4gaW5jbHVkZWQgaXMgdHJ1ZSwgdGhlIHJldHVybiB2YWx1ZSBpcyB0aGUgdmFsdWUgb2YgdGhlIG5lYXJlc3QgbWFya1xuXG4gICAgICBpZiAodGhpcy5pbmNsdWRlZCkge1xuICAgICAgICB2YXIgZGlyID0gMTAwO1xuICAgICAgICB0aGlzLm1hcmtMaXN0LmZvckVhY2goZnVuY3Rpb24gKG1hcmspIHtcbiAgICAgICAgICB2YXIgY3VyRGlyID0gTWF0aC5hYnMobWFyay5wb3MgLSBwb3MpO1xuXG4gICAgICAgICAgaWYgKGN1ckRpciA8IGRpcikge1xuICAgICAgICAgICAgZGlyID0gY3VyRGlyO1xuICAgICAgICAgICAgdmFsdWUgPSBtYXJrLnZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IC8vIFN5bmMgc2xpZGVyIHBvc2l0aW9uXG5cbiAgfSwge1xuICAgIGtleTogXCJzeW5jRG90c1Bvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzeW5jRG90c1BvcygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB0aGlzLmRvdHNQb3MgPSB0aGlzLmRvdHNWYWx1ZS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMy5wYXJzZVZhbHVlKHYpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgdGhlIG1hcmtzXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAdHlwZSB7TWFya1tdfVxuICAgICAqIEBtZW1iZXJvZiBDb250cm9sXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRSZWNlbnREb3RcIixcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbW9zdCByZWNlbnQgc2xpZGVyIGluZGV4IGJ5IHBvc2l0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcG9zXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQ29udHJvbFxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZWNlbnREb3QocG9zKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIGFyciA9IHRoaXMuZG90c1Bvcy5maWx0ZXIoZnVuY3Rpb24gKGRvdFBvcywgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuICEoX3RoaXM0LmdldERvdE9wdGlvbihpbmRleCkgJiYgX3RoaXM0LmdldERvdE9wdGlvbihpbmRleCkuZGlzYWJsZWQpO1xuICAgICAgfSkubWFwKGZ1bmN0aW9uIChkb3RQb3MpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKGRvdFBvcyAtIHBvcyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhcnIuaW5kZXhPZihNYXRoLm1pbi5hcHBseShNYXRoLCBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgaW5kZXggYnkgdmFsdWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmFsdWV9IHZhbHVlXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQ29udHJvbFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0SW5kZXhCeVZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluZGV4QnlWYWx1ZSh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmluZGV4T2YodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IERlY2ltYWwoK3ZhbHVlKS5taW51cyh0aGlzLm1pbikuZGl2aWRlKHRoaXMuaW50ZXJ2YWwpLnRvTnVtYmVyKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB2YWx1ZSBieSBpbmRleFxuICAgICAqXG4gICAgICogQHBhcmFtIHtpbmRleH0gbnVtYmVyXG4gICAgICogQHJldHVybnMge1ZhbHVlfVxuICAgICAqIEBtZW1iZXJvZiBDb250cm9sXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRWYWx1ZUJ5SW5kZXhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWVCeUluZGV4KGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgIGluZGV4ID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPiB0aGlzLnRvdGFsKSB7XG4gICAgICAgIGluZGV4ID0gdGhpcy50b3RhbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZGF0YSA/IHRoaXMuZGF0YVtpbmRleF0gOiBuZXcgRGVjaW1hbChpbmRleCkubXVsdGlwbHkodGhpcy5pbnRlcnZhbCkucGx1cyh0aGlzLm1pbikudG9OdW1iZXIoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBwb3NpdGlvbiBvZiBhIHNpbmdsZSBzbGlkZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldERvdFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXREb3RQb3MocG9zLCBpbmRleCkge1xuICAgICAgcG9zID0gdGhpcy5nZXRWYWxpZFBvcyhwb3MsIGluZGV4KS5wb3M7XG4gICAgICB2YXIgY2hhbmdlUG9zID0gcG9zIC0gdGhpcy5kb3RzUG9zW2luZGV4XTtcblxuICAgICAgaWYgKCFjaGFuZ2VQb3MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hhbmdlUG9zQXJyID0gbmV3IEFycmF5KHRoaXMuZG90c1Bvcy5sZW5ndGgpO1xuXG4gICAgICBpZiAodGhpcy5maXhlZCkge1xuICAgICAgICBjaGFuZ2VQb3NBcnIgPSB0aGlzLmdldEZpeGVkQ2hhbmdlUG9zQXJyKGNoYW5nZVBvcywgaW5kZXgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1pblJhbmdlIHx8IHRoaXMubWF4UmFuZ2UpIHtcbiAgICAgICAgY2hhbmdlUG9zQXJyID0gdGhpcy5nZXRMaW1pdFJhbmdlQ2hhbmdlUG9zQXJyKHBvcywgY2hhbmdlUG9zLCBpbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFuZ2VQb3NBcnJbaW5kZXhdID0gY2hhbmdlUG9zO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldERvdHNQb3ModGhpcy5kb3RzUG9zLm1hcChmdW5jdGlvbiAoY3VyUG9zLCBpKSB7XG4gICAgICAgIHJldHVybiBjdXJQb3MgKyAoY2hhbmdlUG9zQXJyW2ldIHx8IDApO1xuICAgICAgfSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbiBmaXhlZCBtb2RlLCBnZXQgdGhlIHBvc2l0aW9uIG9mIGFsbCBzbGlkZXIgY2hhbmdlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNoYW5nZVBvcyBDaGFuZ2UgZGlzdGFuY2Ugb2YgYSBzaW5nbGUgc2xpZGVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IHNsaWRlciBpbmRleFxuICAgICAqIEByZXR1cm5zIHtEb3RzUG9zQ2hhbmdlQXJyYXl9XG4gICAgICogQG1lbWJlcm9mIENvbnRyb2xcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldEZpeGVkQ2hhbmdlUG9zQXJyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZpeGVkQ2hhbmdlUG9zQXJyKGNoYW5nZVBvcywgaW5kZXgpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICB0aGlzLmRvdHNQb3MuZm9yRWFjaChmdW5jdGlvbiAob3JpZ2luUG9zLCBpKSB7XG4gICAgICAgIGlmIChpICE9PSBpbmRleCkge1xuICAgICAgICAgIHZhciBfdGhpczUkZ2V0VmFsaWRQb3MgPSBfdGhpczUuZ2V0VmFsaWRQb3Mob3JpZ2luUG9zICsgY2hhbmdlUG9zLCBpKSxcbiAgICAgICAgICAgICAgbGFzdFBvcyA9IF90aGlzNSRnZXRWYWxpZFBvcy5wb3MsXG4gICAgICAgICAgICAgIGluUmFuZ2UgPSBfdGhpczUkZ2V0VmFsaWRQb3MuaW5SYW5nZTtcblxuICAgICAgICAgIGlmICghaW5SYW5nZSkge1xuICAgICAgICAgICAgY2hhbmdlUG9zID0gTWF0aC5taW4oTWF0aC5hYnMobGFzdFBvcyAtIG9yaWdpblBvcyksIE1hdGguYWJzKGNoYW5nZVBvcykpICogKGNoYW5nZVBvcyA8IDAgPyAtMSA6IDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5kb3RzUG9zLm1hcChmdW5jdGlvbiAoXykge1xuICAgICAgICByZXR1cm4gY2hhbmdlUG9zO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluIG1pblJhbmdlL21heFJhbmdlIG1vZGUsIGdldCB0aGUgcG9zaXRpb24gb2YgYWxsIHNsaWRlciBjaGFuZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcG9zIHBvc2l0aW9uIG9mIGEgc2luZ2xlIHNsaWRlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjaGFuZ2VQb3MgQ2hhbmdlIGRpc3RhbmNlIG9mIGEgc2luZ2xlIHNsaWRlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBzbGlkZXIgaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7RG90c1Bvc0NoYW5nZUFycmF5fVxuICAgICAqIEBtZW1iZXJvZiBDb250cm9sXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRMaW1pdFJhbmdlQ2hhbmdlUG9zQXJyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExpbWl0UmFuZ2VDaGFuZ2VQb3NBcnIocG9zLCBjaGFuZ2VQb3MsIGluZGV4KSB7XG4gICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgICAgdmFyIGNoYW5nZURvdHMgPSBbe1xuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIGNoYW5nZVBvczogY2hhbmdlUG9zXG4gICAgICB9XTtcbiAgICAgIHZhciBuZXdDaGFuZ2VQb3MgPSBjaGFuZ2VQb3M7XG4gICAgICBbdGhpcy5taW5SYW5nZSwgdGhpcy5tYXhSYW5nZV0uZm9yRWFjaChmdW5jdGlvbiAoaXNMaW1pdFJhbmdlLCByYW5nZUluZGV4KSB7XG4gICAgICAgIGlmICghaXNMaW1pdFJhbmdlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGlzTWluUmFuZ2UgPSByYW5nZUluZGV4ID09PSAwO1xuICAgICAgICB2YXIgaXNGb3J3YXJkID0gY2hhbmdlUG9zID4gMDtcbiAgICAgICAgdmFyIG5leHQgPSAwO1xuXG4gICAgICAgIGlmIChpc01pblJhbmdlKSB7XG4gICAgICAgICAgbmV4dCA9IGlzRm9yd2FyZCA/IDEgOiAtMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0ID0gaXNGb3J3YXJkID8gLTEgOiAxO1xuICAgICAgICB9IC8vIERldGVybWluZSBpZiB0aGUgdHdvIHBvc2l0aW9ucyBhcmUgd2l0aGluIHRoZSBsZWdhbCBpbnRlcnZhbFxuXG5cbiAgICAgICAgdmFyIGluTGltaXRSYW5nZSA9IGZ1bmN0aW9uIGluTGltaXRSYW5nZShwb3MyLCBwb3MxKSB7XG4gICAgICAgICAgdmFyIGRpZmYgPSBNYXRoLmFicyhwb3MyIC0gcG9zMSk7XG4gICAgICAgICAgcmV0dXJuIGlzTWluUmFuZ2UgPyBkaWZmIDwgX3RoaXM2Lm1pblJhbmdlRGlyIDogZGlmZiA+IF90aGlzNi5tYXhSYW5nZURpcjtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgaSA9IGluZGV4ICsgbmV4dDtcbiAgICAgICAgdmFyIG5leHRQb3MgPSBfdGhpczYuZG90c1Bvc1tpXTtcbiAgICAgICAgdmFyIGN1clBvcyA9IHBvcztcblxuICAgICAgICB3aGlsZSAoX3RoaXM2LmlzUG9zKG5leHRQb3MpICYmIGluTGltaXRSYW5nZShuZXh0UG9zLCBjdXJQb3MpKSB7XG4gICAgICAgICAgdmFyIF90aGlzNiRnZXRWYWxpZFBvcyA9IF90aGlzNi5nZXRWYWxpZFBvcyhuZXh0UG9zICsgbmV3Q2hhbmdlUG9zLCBpKSxcbiAgICAgICAgICAgICAgbGFzdFBvcyA9IF90aGlzNiRnZXRWYWxpZFBvcy5wb3M7XG5cbiAgICAgICAgICBjaGFuZ2VEb3RzLnB1c2goe1xuICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgICBjaGFuZ2VQb3M6IGxhc3RQb3MgLSBuZXh0UG9zXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaSA9IGkgKyBuZXh0O1xuICAgICAgICAgIGN1clBvcyA9IGxhc3RQb3M7XG4gICAgICAgICAgbmV4dFBvcyA9IF90aGlzNi5kb3RzUG9zW2ldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLmRvdHNQb3MubWFwKGZ1bmN0aW9uIChfLCBpKSB7XG4gICAgICAgIHZhciBjaGFuZ2VEb3QgPSBjaGFuZ2VEb3RzLmZpbHRlcihmdW5jdGlvbiAoZG90KSB7XG4gICAgICAgICAgcmV0dXJuIGRvdC5pbmRleCA9PT0gaTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjaGFuZ2VEb3QubGVuZ3RoID8gY2hhbmdlRG90WzBdLmNoYW5nZVBvcyA6IDA7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNQb3MocG9zKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHBvcyA9PT0gJ251bWJlcic7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhIHZhbGlkIHBvc2l0aW9uIGJ5IHBvc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHt7IHBvczogbnVtYmVyLCBpblJhbmdlOiBib29sZWFuIH19XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRWYWxpZFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWxpZFBvcyhwb3MsIGluZGV4KSB7XG4gICAgICB2YXIgcmFuZ2UgPSB0aGlzLnZhbHVlUG9zUmFuZ2VbaW5kZXhdO1xuICAgICAgdmFyIGluUmFuZ2UgPSB0cnVlO1xuXG4gICAgICBpZiAocG9zIDwgcmFuZ2VbMF0pIHtcbiAgICAgICAgcG9zID0gcmFuZ2VbMF07XG4gICAgICAgIGluUmFuZ2UgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAocG9zID4gcmFuZ2VbMV0pIHtcbiAgICAgICAgcG9zID0gcmFuZ2VbMV07XG4gICAgICAgIGluUmFuZ2UgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgIGluUmFuZ2U6IGluUmFuZ2VcbiAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIHNsaWRlciBieSB2YWx1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtWYWx1ZX0gdmFsXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInBhcnNlVmFsdWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2VWYWx1ZSh2YWwpIHtcbiAgICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgICAgdmFsID0gdGhpcy5kYXRhLmluZGV4T2YodmFsKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFsID0gK3ZhbDtcblxuICAgICAgICBpZiAodmFsIDwgdGhpcy5taW4pIHtcbiAgICAgICAgICB0aGlzLmVtaXRFcnJvcihFUlJPUl9UWVBFLk1JTik7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsID4gdGhpcy5tYXgpIHtcbiAgICAgICAgICB0aGlzLmVtaXRFcnJvcihFUlJPUl9UWVBFLk1BWCk7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ251bWJlcicgfHwgdmFsICE9PSB2YWwpIHtcbiAgICAgICAgICB0aGlzLmVtaXRFcnJvcihFUlJPUl9UWVBFLlZBTFVFKTtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbCA9IG5ldyBEZWNpbWFsKHZhbCkubWludXModGhpcy5taW4pLmRpdmlkZSh0aGlzLmludGVydmFsKS50b051bWJlcigpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcG9zID0gbmV3IERlY2ltYWwodmFsKS5tdWx0aXBseSh0aGlzLmdhcCkudG9OdW1iZXIoKTtcbiAgICAgIHJldHVybiBwb3MgPCAwID8gMCA6IHBvcyA+IDEwMCA/IDEwMCA6IHBvcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHRoZSB2YWx1ZSBieSBwb3NpdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvc1xuICAgICAqIEByZXR1cm5zIHtWYWx1ZX1cbiAgICAgKiBAbWVtYmVyb2YgQ29udHJvbFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicGFyc2VQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2VQb3MocG9zKSB7XG4gICAgICB2YXIgaW5kZXggPSBNYXRoLnJvdW5kKHBvcyAvIHRoaXMuZ2FwKTtcbiAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlQnlJbmRleChpbmRleCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERldGVybWluZSBpZiB0aGUgbG9jYXRpb24gaXMgYWN0aXZlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcG9zXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIENvbnRyb2xcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzQWN0aXZlQnlQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNBY3RpdmVCeVBvcyhwb3MpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NBcnJheS5zb21lKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpLFxuICAgICAgICAgICAgc3RhcnQgPSBfcmVmMlswXSxcbiAgICAgICAgICAgIGVuZCA9IF9yZWYyWzFdO1xuXG4gICAgICAgIHJldHVybiBwb3MgPj0gc3RhcnQgJiYgcG9zIDw9IGVuZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgZWFjaCB2YWx1ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge1ZhbHVlW119XG4gICAgICogQG1lbWJlcm9mIENvbnRyb2xcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFZhbHVlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZXMoKSB7XG4gICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdmFsdWVzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gdGhpcy50b3RhbDsgaSsrKSB7XG4gICAgICAgICAgdmFsdWVzLnB1c2gobmV3IERlY2ltYWwoaSkubXVsdGlwbHkodGhpcy5pbnRlcnZhbCkucGx1cyh0aGlzLm1pbikudG9OdW1iZXIoKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIG9mIHRoZSByYW5nZVxuICAgICAqIEBwYXJhbSByYW5nZSBudW1iZXJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFJhbmdlRGlyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJhbmdlRGlyKHJhbmdlKSB7XG4gICAgICByZXR1cm4gcmFuZ2UgPyBuZXcgRGVjaW1hbChyYW5nZSkuZGl2aWRlKG5ldyBEZWNpbWFsKHRoaXMuZGF0YSA/IHRoaXMuZGF0YS5sZW5ndGggLSAxIDogdGhpcy5tYXgpLm1pbnVzKHRoaXMuZGF0YSA/IDAgOiB0aGlzLm1pbikudG9OdW1iZXIoKSkubXVsdGlwbHkoMTAwKS50b051bWJlcigpIDogMTAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlbWl0RXJyb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW1pdEVycm9yKHR5cGUpIHtcbiAgICAgIGlmICh0aGlzLm9uRXJyb3IpIHtcbiAgICAgICAgdGhpcy5vbkVycm9yKHR5cGUsIEVSUk9SX01TR1t0eXBlXSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldERvdE9wdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREb3RPcHRpb24oaW5kZXgpIHtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRoaXMuZG90T3B0aW9ucykgPyB0aGlzLmRvdE9wdGlvbnNbaW5kZXhdIDogdGhpcy5kb3RPcHRpb25zO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXREb3RSYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREb3RSYW5nZShpbmRleCwga2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgIGlmICghdGhpcy5kb3RPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBvcHRpb24gPSB0aGlzLmdldERvdE9wdGlvbihpbmRleCk7XG4gICAgICByZXR1cm4gb3B0aW9uICYmIG9wdGlvbltrZXldICE9PSB2b2lkIDAgPyB0aGlzLnBhcnNlVmFsdWUob3B0aW9uW2tleV0pIDogZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTbGlkaW5nIHJhbmdlIG9mIGVhY2ggc2xpZGVyXG4gICAgICpcbiAgICAgKiBAdHlwZSB7QXJyYXk8W251bWJlciwgbnVtYmVyXT59XG4gICAgICogQG1lbWJlcm9mIENvbnRyb2xcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1hcmtMaXN0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLm1hcmtzKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGdldE1hcmtCeVZhbHVlID0gZnVuY3Rpb24gZ2V0TWFya0J5VmFsdWUodmFsdWUsIG1hcmspIHtcbiAgICAgICAgdmFyIHBvcyA9IF90aGlzNy5wYXJzZVZhbHVlKHZhbHVlKTtcblxuICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGxhYmVsOiB2YWx1ZSxcbiAgICAgICAgICBhY3RpdmU6IF90aGlzNy5pc0FjdGl2ZUJ5UG9zKHBvcylcbiAgICAgICAgfSwgbWFyayk7XG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tYXJrcyA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZXMoKS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGdldE1hcmtCeVZhbHVlKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGlzLm1hcmtzKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMubWFya3MpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4gK2EgLSArYjtcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHZhciBpdGVtID0gX3RoaXM3Lm1hcmtzW3ZhbHVlXTtcbiAgICAgICAgICByZXR1cm4gZ2V0TWFya0J5VmFsdWUodmFsdWUsIHR5cGVvZiBpdGVtICE9PSAnc3RyaW5nJyA/IGl0ZW0gOiB7XG4gICAgICAgICAgICBsYWJlbDogaXRlbVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLm1hcmtzKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXJrcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGdldE1hcmtCeVZhbHVlKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLm1hcmtzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlcygpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgcmVzdWx0OiBfdGhpczcubWFya3ModmFsdWUpXG4gICAgICAgICAgfTtcbiAgICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICAgIHZhciByZXN1bHQgPSBfcmVmMy5yZXN1bHQ7XG4gICAgICAgICAgcmV0dXJuICEhcmVzdWx0O1xuICAgICAgICB9KS5tYXAoZnVuY3Rpb24gKF9yZWY0KSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gX3JlZjQudmFsdWUsXG4gICAgICAgICAgICAgIHJlc3VsdCA9IF9yZWY0LnJlc3VsdDtcbiAgICAgICAgICByZXR1cm4gZ2V0TWFya0J5VmFsdWUodmFsdWUsIHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwcm9jZXNzQXJyYXlcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICh0aGlzLnByb2Nlc3MpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzKHRoaXMuZG90c1Bvcyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kb3RzUG9zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHJldHVybiBbWzAsIHRoaXMuZG90c1Bvc1swXV1dO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZG90c1Bvcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcmV0dXJuIFtbTWF0aC5taW4uYXBwbHkoTWF0aCwgX3RvQ29uc3VtYWJsZUFycmF5KHRoaXMuZG90c1BvcykpLCBNYXRoLm1heC5hcHBseShNYXRoLCBfdG9Db25zdW1hYmxlQXJyYXkodGhpcy5kb3RzUG9zKSldXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSB0b3RhbCBudW1iZXIgb2YgdmFsdWVzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBDb250cm9sXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0b3RhbFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHRvdGFsID0gMDtcblxuICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICB0b3RhbCA9IHRoaXMuZGF0YS5sZW5ndGggLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG90YWwgPSBuZXcgRGVjaW1hbCh0aGlzLm1heCkubWludXModGhpcy5taW4pLmRpdmlkZSh0aGlzLmludGVydmFsKS50b051bWJlcigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodG90YWwgLSBNYXRoLmZsb29yKHRvdGFsKSAhPT0gMCkge1xuICAgICAgICB0aGlzLmVtaXRFcnJvcihFUlJPUl9UWVBFLklOVEVSVkFMKTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0b3RhbDtcbiAgICB9IC8vIERpc3RhbmNlIGJldHdlZW4gZWFjaCB2YWx1ZVxuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2FwXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gMTAwIC8gdGhpcy50b3RhbDtcbiAgICB9IC8vIFRoZSBtaW5pbXVtIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBzbGlkZXJzXG5cbiAgfSwge1xuICAgIGtleTogXCJtaW5SYW5nZURpclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHRoaXMuY2FjaGVSYW5nZURpclt0aGlzLm1pblJhbmdlXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVJhbmdlRGlyW3RoaXMubWluUmFuZ2VdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jYWNoZVJhbmdlRGlyW3RoaXMubWluUmFuZ2VdID0gdGhpcy5nZXRSYW5nZURpcih0aGlzLm1pblJhbmdlKTtcbiAgICB9IC8vIE1heGltdW0gZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHNsaWRlcnNcblxuICB9LCB7XG4gICAga2V5OiBcIm1heFJhbmdlRGlyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5jYWNoZVJhbmdlRGlyW3RoaXMubWF4UmFuZ2VdKSByZXR1cm4gdGhpcy5jYWNoZVJhbmdlRGlyW3RoaXMubWF4UmFuZ2VdO1xuICAgICAgcmV0dXJuIHRoaXMuY2FjaGVSYW5nZURpclt0aGlzLm1heFJhbmdlXSA9IHRoaXMuZ2V0UmFuZ2VEaXIodGhpcy5tYXhSYW5nZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlUG9zUmFuZ2VcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgICB2YXIgZG90c1BvcyA9IHRoaXMuZG90c1BvcztcbiAgICAgIHZhciB2YWx1ZVBvc1JhbmdlID0gW107XG4gICAgICBkb3RzUG9zLmZvckVhY2goZnVuY3Rpb24gKHBvcywgaSkge1xuICAgICAgICB2YWx1ZVBvc1JhbmdlLnB1c2goW01hdGgubWF4KF90aGlzOC5taW5SYW5nZSA/IF90aGlzOC5taW5SYW5nZURpciAqIGkgOiAwLCAhX3RoaXM4LmVuYWJsZUNyb3NzID8gZG90c1Bvc1tpIC0gMV0gfHwgMCA6IDAsIF90aGlzOC5nZXREb3RSYW5nZShpLCAnbWluJywgMCkpLCBNYXRoLm1pbihfdGhpczgubWluUmFuZ2UgPyAxMDAgLSBfdGhpczgubWluUmFuZ2VEaXIgKiAoZG90c1Bvcy5sZW5ndGggLSAxIC0gaSkgOiAxMDAsICFfdGhpczguZW5hYmxlQ3Jvc3MgPyBkb3RzUG9zW2kgKyAxXSB8fCAxMDAgOiAxMDAsIF90aGlzOC5nZXREb3RSYW5nZShpLCAnbWF4JywgMTAwKSldKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHZhbHVlUG9zUmFuZ2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRvdHNJbmRleFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIF90aGlzOSA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLmRvdHNWYWx1ZS5tYXAoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICByZXR1cm4gX3RoaXM5LmdldEluZGV4QnlWYWx1ZSh2YWwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbnRyb2w7XG59KCk7XG5cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9saWIvdXRpbHMvc3RhdGUudHNcbmZ1bmN0aW9uIHN0YXRlX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gc3RhdGVfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIHN0YXRlX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgc3RhdGVfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIHN0YXRlX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbnZhciBTdGF0ZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0YXRlKG1hcCkge1xuICAgIHN0YXRlX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXRlKTtcblxuICAgIHRoaXMuc3RhdGVzID0gMDtcbiAgICB0aGlzLm1hcCA9IG1hcDtcbiAgfVxuXG4gIHN0YXRlX2NyZWF0ZUNsYXNzKFN0YXRlLCBbe1xuICAgIGtleTogXCJhZGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKHN0YXRlKSB7XG4gICAgICB0aGlzLnN0YXRlcyB8PSBzdGF0ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVsZXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9kZWxldGUoc3RhdGUpIHtcbiAgICAgIHRoaXMuc3RhdGVzICY9IH5zdGF0ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidG9nZ2xlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZShzdGF0ZSkge1xuICAgICAgaWYgKHRoaXMuaGFzKHN0YXRlKSkge1xuICAgICAgICB0aGlzLmRlbGV0ZShzdGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZChzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXMoc3RhdGUpIHtcbiAgICAgIHJldHVybiAhISh0aGlzLnN0YXRlcyAmIHN0YXRlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3RhdGU7XG59KCk7XG5cblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL2xpYi9zdHlsZXMvc2xpZGVyLnNjc3NcbnZhciBzbGlkZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNGFiYlwiKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9saWIvdnVlLXNsaWRlci50c3hcblxuXG5mdW5jdGlvbiB2dWVfc2xpZGVyX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiB2dWVfc2xpZGVyX2FycmF5V2l0aEhvbGVzKGFycikgfHwgdnVlX3NsaWRlcl9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHZ1ZV9zbGlkZXJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCB2dWVfc2xpZGVyX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIHZ1ZV9zbGlkZXJfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIHZ1ZV9zbGlkZXJfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gdnVlX3NsaWRlcl9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5mdW5jdGlvbiB2dWVfc2xpZGVyX293bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIHZ1ZV9zbGlkZXJfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IHZ1ZV9zbGlkZXJfb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHZ1ZV9zbGlkZXJfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgdnVlX3NsaWRlcl9vd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiB2dWVfc2xpZGVyX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gdnVlX3NsaWRlcl90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIHZ1ZV9zbGlkZXJfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCB2dWVfc2xpZGVyX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHZ1ZV9zbGlkZXJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB2dWVfc2xpZGVyX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gdnVlX3NsaWRlcl9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gdnVlX3NsaWRlcl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHZ1ZV9zbGlkZXJfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIHZ1ZV9zbGlkZXJfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIHZ1ZV9zbGlkZXJfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gdnVlX3NsaWRlcl9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIHZ1ZV9zbGlkZXJfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIHZ1ZV9zbGlkZXJfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gdnVlX3NsaWRlcl90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IHZ1ZV9zbGlkZXJfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IHZ1ZV9zbGlkZXJfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIHZ1ZV9zbGlkZXJfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gdnVlX3NsaWRlcl9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIHZ1ZV9zbGlkZXJfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIHZ1ZV9zbGlkZXJfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSB2dWVfc2xpZGVyX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSB2dWVfc2xpZGVyX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIHZ1ZV9zbGlkZXJfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgdnVlX3NsaWRlcl9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gdnVlX3NsaWRlcl9zZXRQcm90b3R5cGVPZihvLCBwKSB7IHZ1ZV9zbGlkZXJfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIHZ1ZV9zbGlkZXJfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gdnVlX3NsaWRlcl9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gdnVlX3NsaWRlcl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSB2dWVfc2xpZGVyX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSB2dWVfc2xpZGVyX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiB2dWVfc2xpZGVyX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiB2dWVfc2xpZGVyX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAodnVlX3NsaWRlcl90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIHZ1ZV9zbGlkZXJfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIHZ1ZV9zbGlkZXJfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gdnVlX3NsaWRlcl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gdnVlX3NsaWRlcl9nZXRQcm90b3R5cGVPZihvKSB7IHZ1ZV9zbGlkZXJfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gdnVlX3NsaWRlcl9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgU2xpZGVyU3RhdGUgPSB7XG4gIE5vbmU6IDAsXG4gIERyYWc6IDEgPDwgMSxcbiAgRm9jdXM6IDEgPDwgMlxufTtcbnZhciBERUZBVUxUX1NMSURFUl9TSVpFID0gNDtcblxudmFyIHZ1ZV9zbGlkZXJfVnVlU2xpZGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfVnVlKSB7XG4gIHZ1ZV9zbGlkZXJfaW5oZXJpdHMoVnVlU2xpZGVyLCBfVnVlKTtcblxuICB2YXIgX3N1cGVyID0gdnVlX3NsaWRlcl9jcmVhdGVTdXBlcihWdWVTbGlkZXIpO1xuXG4gIGZ1bmN0aW9uIFZ1ZVNsaWRlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICB2dWVfc2xpZGVyX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZ1ZVNsaWRlcik7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIF90aGlzLnN0YXRlcyA9IG5ldyBTdGF0ZShTbGlkZXJTdGF0ZSk7IC8vIFRoZSB3aWR0aCBvZiB0aGUgY29tcG9uZW50IGlzIGRpdmlkZWQgaW50byBvbmUgaHVuZHJlZCwgdGhlIHdpZHRoIG9mIGVhY2ggb25lLlxuXG4gICAgX3RoaXMuc2NhbGUgPSAxOyAvLyBDdXJyZW50bHkgZHJhZ2dlZCBzbGlkZXIgaW5kZXhcblxuICAgIF90aGlzLmZvY3VzRG90SW5kZXggPSAwO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZ1ZV9zbGlkZXJfY3JlYXRlQ2xhc3MoVnVlU2xpZGVyLCBbe1xuICAgIGtleTogXCJpc09iamVjdERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNPYmplY3REYXRhKGRhdGEpIHtcbiAgICAgIHJldHVybiAhIWRhdGEgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGEpID09PSAnW29iamVjdCBPYmplY3RdJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNPYmplY3RBcnJheURhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNPYmplY3RBcnJheURhdGEoZGF0YSkge1xuICAgICAgcmV0dXJuICEhZGF0YSAmJiBBcnJheS5pc0FycmF5KGRhdGEpICYmIGRhdGEubGVuZ3RoID4gMCAmJiB2dWVfc2xpZGVyX3R5cGVvZihkYXRhWzBdKSA9PT0gJ29iamVjdCc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uVmFsdWVDaGFuZ2VkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uVmFsdWVDaGFuZ2VkKCkge1xuICAgICAgaWYgKHRoaXMuY29udHJvbCAmJiAhdGhpcy5zdGF0ZXMuaGFzKFNsaWRlclN0YXRlLkRyYWcpICYmIHRoaXMuaXNOb3RTeW5jKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5zeW5jVmFsdWVCeVBvcygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZWQoKSB7XG4gICAgICB0aGlzLmluaXRDb250cm9sKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1vdW50ZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICAgIHRoaXMuYmluZEV2ZW50KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJlZm9yZURlc3Ryb3lcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmVmb3JlRGVzdHJveSgpIHtcbiAgICAgIHRoaXMudW5iaW5kRXZlbnQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYmluZEV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRFdmVudCgpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZ01vdmUsIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmRyYWdFbmQsIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5ibHVySGFuZGxlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZ01vdmUsIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZHJhZ0VuZCk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5kcmFnRW5kKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleWRvd25IYW5kbGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bmJpbmRFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmRFdmVudCgpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZ01vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmRyYWdFbmQpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5ibHVySGFuZGxlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZ01vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZHJhZ0VuZCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5kcmFnRW5kKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleWRvd25IYW5kbGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRTY2FsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTY2FsZSgpIHtcbiAgICAgIHZhciBkZWNpbWFsID0gbmV3IERlY2ltYWwoTWF0aC5mbG9vcih0aGlzLmlzSG9yaXpvbnRhbCA/IHRoaXMuJHJlZnMucmFpbC5vZmZzZXRXaWR0aCA6IHRoaXMuJHJlZnMucmFpbC5vZmZzZXRIZWlnaHQpKTtcblxuICAgICAgaWYgKHRoaXMuem9vbSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGRlY2ltYWwubXVsdGlwbHkodGhpcy56b29tKTtcbiAgICAgIH1cblxuICAgICAgZGVjaW1hbC5kaXZpZGUoMTAwKTtcbiAgICAgIHRoaXMuc2NhbGUgPSBkZWNpbWFsLnRvTnVtYmVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImluaXRDb250cm9sXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRDb250cm9sKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuY29udHJvbCA9IG5ldyBjb250cm9sX0NvbnRyb2woe1xuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgZGF0YTogdGhpcy5zbGlkZXJEYXRhLFxuICAgICAgICBlbmFibGVDcm9zczogdGhpcy5lbmFibGVDcm9zcyxcbiAgICAgICAgZml4ZWQ6IHRoaXMuZml4ZWQsXG4gICAgICAgIG1heDogdGhpcy5tYXgsXG4gICAgICAgIG1pbjogdGhpcy5taW4sXG4gICAgICAgIGludGVydmFsOiB0aGlzLmludGVydmFsLFxuICAgICAgICBtaW5SYW5nZTogdGhpcy5taW5SYW5nZSxcbiAgICAgICAgbWF4UmFuZ2U6IHRoaXMubWF4UmFuZ2UsXG4gICAgICAgIG9yZGVyOiB0aGlzLm9yZGVyLFxuICAgICAgICBtYXJrczogdGhpcy5zbGlkZXJNYXJrcyxcbiAgICAgICAgaW5jbHVkZWQ6IHRoaXMuaW5jbHVkZWQsXG4gICAgICAgIHByb2Nlc3M6IHRoaXMucHJvY2VzcyxcbiAgICAgICAgYWRzb3JiOiB0aGlzLmFkc29yYixcbiAgICAgICAgZG90T3B0aW9uczogdGhpcy5kb3RPcHRpb25zLFxuICAgICAgICBvbkVycm9yOiB0aGlzLmVtaXRFcnJvclxuICAgICAgfSk7XG4gICAgICB0aGlzLnN5bmNWYWx1ZUJ5UG9zKCk7XG4gICAgICBbJ2RhdGEnLCAnZW5hYmxlQ3Jvc3MnLCAnZml4ZWQnLCAnbWF4JywgJ21pbicsICdpbnRlcnZhbCcsICdtaW5SYW5nZScsICdtYXhSYW5nZScsICdvcmRlcicsICdtYXJrcycsICdwcm9jZXNzJywgJ2Fkc29yYicsICdpbmNsdWRlZCcsICdkb3RPcHRpb25zJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBfdGhpczIuJHdhdGNoKG5hbWUsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICBpZiAobmFtZSA9PT0gJ2RhdGEnICYmIEFycmF5LmlzQXJyYXkoX3RoaXMyLmNvbnRyb2wuZGF0YSkgJiYgQXJyYXkuaXNBcnJheSh2YWwpICYmIF90aGlzMi5jb250cm9sLmRhdGEubGVuZ3RoID09PSB2YWwubGVuZ3RoICYmIHZhbC5ldmVyeShmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtID09PSBfdGhpczIuY29udHJvbC5kYXRhW2luZGV4XTtcbiAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnZGF0YSc6XG4gICAgICAgICAgICBjYXNlICdkYXRhTGFiZWwnOlxuICAgICAgICAgICAgY2FzZSAnZGF0YVZhbHVlJzpcbiAgICAgICAgICAgICAgX3RoaXMyLmNvbnRyb2wuZGF0YSA9IF90aGlzMi5zbGlkZXJEYXRhO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbWFyayc6XG4gICAgICAgICAgICAgIF90aGlzMi5jb250cm9sLm1hcmtzID0gX3RoaXMyLnNsaWRlck1hcmtzO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICBfdGhpczIuY29udHJvbFtuYW1lXSA9IHZhbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoWydkYXRhJywgJ21heCcsICdtaW4nLCAnaW50ZXJ2YWwnXS5pbmRleE9mKG5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgIF90aGlzMi5jb250cm9sLnN5bmNEb3RzUG9zKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzeW5jVmFsdWVCeVBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzeW5jVmFsdWVCeVBvcygpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLmNvbnRyb2wuZG90c1ZhbHVlO1xuXG4gICAgICBpZiAodGhpcy5pc0RpZmYodmFsdWVzLCBBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpID8gdGhpcy52YWx1ZSA6IFt0aGlzLnZhbHVlXSkpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdmFsdWVzLmxlbmd0aCA9PT0gMSA/IHZhbHVlc1swXSA6IHZ1ZV9zbGlkZXJfdG9Db25zdW1hYmxlQXJyYXkodmFsdWVzKSwgdGhpcy5mb2N1c0RvdEluZGV4KTtcbiAgICAgIH1cbiAgICB9IC8vIFNsaWRlciB2YWx1ZSBhbmQgY29tcG9uZW50IGludGVybmFsIHZhbHVlIGFyZSBpbmNvbnNpc3RlbnRcblxuICB9LCB7XG4gICAga2V5OiBcImlzRGlmZlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0RpZmYodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgIHJldHVybiB2YWx1ZTEubGVuZ3RoICE9PSB2YWx1ZTIubGVuZ3RoIHx8IHZhbHVlMS5zb21lKGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiB2YWwgIT09IHZhbHVlMltpbmRleF07XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZW1pdEVycm9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVtaXRFcnJvcih0eXBlLCBtZXNzYWdlKSB7XG4gICAgICBpZiAoIXRoaXMuc2lsZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbVnVlU2xpZGVyIGVycm9yXTogXCIuY29uY2F0KG1lc3NhZ2UpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy4kZW1pdCgnZXJyb3InLCB0eXBlLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkcmFnIHJhbmdlIG9mIHRoZSBzbGlkZXJcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IHNsaWRlciBpbmRleFxuICAgICAqIEByZXR1cm5zIHtbbnVtYmVyLCBudW1iZXJdfSByYW5nZSBbc3RhcnQsIGVuZF1cbiAgICAgKiBAbWVtYmVyb2YgVnVlU2xpZGVyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkcmFnU3RhcnRPblByb2Nlc3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZHJhZ1N0YXJ0T25Qcm9jZXNzKGUpIHtcbiAgICAgIGlmICh0aGlzLmRyYWdPbkNsaWNrKSB7XG4gICAgICAgIHRoaXMuc2V0U2NhbGUoKTtcbiAgICAgICAgdmFyIHBvcyA9IHRoaXMuZ2V0UG9zQnlFdmVudChlKTtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jb250cm9sLmdldFJlY2VudERvdChwb3MpO1xuXG4gICAgICAgIGlmICh0aGlzLmRvdHNbaW5kZXhdLmRpc2FibGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kcmFnU3RhcnQoaW5kZXgpO1xuICAgICAgICB0aGlzLmNvbnRyb2wuc2V0RG90UG9zKHBvcywgdGhpcy5mb2N1c0RvdEluZGV4KTtcblxuICAgICAgICBpZiAoIXRoaXMubGF6eSkge1xuICAgICAgICAgIHRoaXMuc3luY1ZhbHVlQnlQb3MoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkcmFnU3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZHJhZ1N0YXJ0KGluZGV4KSB7XG4gICAgICB0aGlzLmZvY3VzRG90SW5kZXggPSBpbmRleDtcbiAgICAgIHRoaXMuc2V0U2NhbGUoKTtcbiAgICAgIHRoaXMuc3RhdGVzLmFkZChTbGlkZXJTdGF0ZS5EcmFnKTtcbiAgICAgIHRoaXMuc3RhdGVzLmFkZChTbGlkZXJTdGF0ZS5Gb2N1cyk7XG4gICAgICB0aGlzLiRlbWl0KCdkcmFnLXN0YXJ0JywgdGhpcy5mb2N1c0RvdEluZGV4KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZHJhZ01vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZHJhZ01vdmUoZSkge1xuICAgICAgaWYgKCF0aGlzLnN0YXRlcy5oYXMoU2xpZGVyU3RhdGUuRHJhZykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgcG9zID0gdGhpcy5nZXRQb3NCeUV2ZW50KGUpO1xuICAgICAgdGhpcy5pc0Nyb3NzRG90KHBvcyk7XG4gICAgICB0aGlzLmNvbnRyb2wuc2V0RG90UG9zKHBvcywgdGhpcy5mb2N1c0RvdEluZGV4KTtcblxuICAgICAgaWYgKCF0aGlzLmxhenkpIHtcbiAgICAgICAgdGhpcy5zeW5jVmFsdWVCeVBvcygpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLmNvbnRyb2wuZG90c1ZhbHVlO1xuICAgICAgdGhpcy4kZW1pdCgnZHJhZ2dpbmcnLCB2YWx1ZS5sZW5ndGggPT09IDEgPyB2YWx1ZVswXSA6IHZ1ZV9zbGlkZXJfdG9Db25zdW1hYmxlQXJyYXkodmFsdWUpLCB0aGlzLmZvY3VzRG90SW5kZXgpO1xuICAgIH0gLy8gSWYgdGhlIGNvbXBvbmVudCBpcyBzb3J0ZWQsIHRoZW4gd2hlbiB0aGUgc2xpZGVyIGNyb3NzZXMsIHRvZ2dsZSB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHNsaWRlciBpbmRleFxuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNDcm9zc0RvdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0Nyb3NzRG90KHBvcykge1xuICAgICAgaWYgKHRoaXMuY2FuU29ydCkge1xuICAgICAgICB2YXIgY3VySW5kZXggPSB0aGlzLmZvY3VzRG90SW5kZXg7XG4gICAgICAgIHZhciBjdXJQb3MgPSBwb3M7XG5cbiAgICAgICAgaWYgKGN1clBvcyA+IHRoaXMuZHJhZ1JhbmdlWzFdKSB7XG4gICAgICAgICAgY3VyUG9zID0gdGhpcy5kcmFnUmFuZ2VbMV07XG4gICAgICAgICAgdGhpcy5mb2N1c0RvdEluZGV4Kys7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VyUG9zIDwgdGhpcy5kcmFnUmFuZ2VbMF0pIHtcbiAgICAgICAgICBjdXJQb3MgPSB0aGlzLmRyYWdSYW5nZVswXTtcbiAgICAgICAgICB0aGlzLmZvY3VzRG90SW5kZXgtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJJbmRleCAhPT0gdGhpcy5mb2N1c0RvdEluZGV4KSB7XG4gICAgICAgICAgdmFyIGRvdFZtID0gdGhpcy4kcmVmc1tcImRvdC1cIi5jb25jYXQodGhpcy5mb2N1c0RvdEluZGV4KV07XG5cbiAgICAgICAgICBpZiAoZG90Vm0gJiYgZG90Vm0uJGVsKSB7XG4gICAgICAgICAgICBkb3RWbS4kZWwuZm9jdXMoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0RG90UG9zKGN1clBvcywgY3VySW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRyYWdFbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZHJhZ0VuZChlKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLnN0YXRlcy5oYXMoU2xpZGVyU3RhdGUuRHJhZykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzMy5sYXp5KSB7XG4gICAgICAgICAgX3RoaXMzLnN5bmNWYWx1ZUJ5UG9zKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3RoaXMzLmluY2x1ZGVkICYmIF90aGlzMy5pc05vdFN5bmMpIHtcbiAgICAgICAgICBfdGhpczMuY29udHJvbC5zZXRWYWx1ZShfdGhpczMudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFN5bmMgc2xpZGVyIHBvc2l0aW9uXG4gICAgICAgICAgX3RoaXMzLmNvbnRyb2wuc3luY0RvdHNQb3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzMy5zdGF0ZXMuZGVsZXRlKFNsaWRlclN0YXRlLkRyYWcpOyAvLyBJZiB1c2VLZXlib2FyZCBpcyB0cnVlLCBrZWVwIGZvY3VzIHN0YXR1cyBhZnRlciBkcmFnZ2luZ1xuXG5cbiAgICAgICAgaWYgKCFfdGhpczMudXNlS2V5Ym9hcmQgfHwgJ3RhcmdldFRvdWNoZXMnIGluIGUpIHtcbiAgICAgICAgICBfdGhpczMuc3RhdGVzLmRlbGV0ZShTbGlkZXJTdGF0ZS5Gb2N1cyk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczMuJGVtaXQoJ2RyYWctZW5kJywgX3RoaXMzLmZvY3VzRG90SW5kZXgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJsdXJIYW5kbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmx1ckhhbmRsZShlKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGVzLmhhcyhTbGlkZXJTdGF0ZS5Gb2N1cykgfHwgIXRoaXMuJHJlZnMuY29udGFpbmVyIHx8IHRoaXMuJHJlZnMuY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGVzLmRlbGV0ZShTbGlkZXJTdGF0ZS5Gb2N1cyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsaWNrSGFuZGxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsaWNrSGFuZGxlKGUpIHtcbiAgICAgIGlmICghdGhpcy5jbGlja2FibGUgfHwgdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlcy5oYXMoU2xpZGVyU3RhdGUuRHJhZykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFNjYWxlKCk7XG4gICAgICB2YXIgcG9zID0gdGhpcy5nZXRQb3NCeUV2ZW50KGUpO1xuICAgICAgdGhpcy5zZXRWYWx1ZUJ5UG9zKHBvcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvY3VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgdmFyIGluZGV4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdGhpcy5zdGF0ZXMuYWRkKFNsaWRlclN0YXRlLkZvY3VzKTtcbiAgICAgIHRoaXMuZm9jdXNEb3RJbmRleCA9IGluZGV4O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJibHVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICB0aGlzLnN0YXRlcy5kZWxldGUoU2xpZGVyU3RhdGUuRm9jdXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRWYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLmNvbnRyb2wuZG90c1ZhbHVlO1xuICAgICAgcmV0dXJuIHZhbHVlcy5sZW5ndGggPT09IDEgPyB2YWx1ZXNbMF0gOiB2YWx1ZXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEluZGV4XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluZGV4KCkge1xuICAgICAgdmFyIGluZGV4ZXMgPSB0aGlzLmNvbnRyb2wuZG90c0luZGV4O1xuICAgICAgcmV0dXJuIGluZGV4ZXMubGVuZ3RoID09PSAxID8gaW5kZXhlc1swXSA6IGluZGV4ZXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2dWVfc2xpZGVyX3RvQ29uc3VtYWJsZUFycmF5KHZhbHVlKSA6IFt2YWx1ZV0pO1xuICAgICAgdGhpcy5zeW5jVmFsdWVCeVBvcygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRJbmRleFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRJbmRleChpbmRleCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoaW5kZXgpID8gaW5kZXgubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiBfdGhpczQuY29udHJvbC5nZXRWYWx1ZUJ5SW5kZXgobik7XG4gICAgICB9KSA6IHRoaXMuY29udHJvbC5nZXRWYWx1ZUJ5SW5kZXgoaW5kZXgpO1xuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFZhbHVlQnlQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWVCeVBvcyhwb3MpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmNvbnRyb2wuZ2V0UmVjZW50RG90KHBvcyk7XG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuZG90c1tpbmRleF0uZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmZvY3VzRG90SW5kZXggPSBpbmRleDtcbiAgICAgIHRoaXMuY29udHJvbC5zZXREb3RQb3MocG9zLCBpbmRleCk7XG4gICAgICB0aGlzLnN5bmNWYWx1ZUJ5UG9zKCk7XG5cbiAgICAgIGlmICh0aGlzLnVzZUtleWJvYXJkKSB7XG4gICAgICAgIHRoaXMuc3RhdGVzLmFkZChTbGlkZXJTdGF0ZS5Gb2N1cyk7XG4gICAgICB9XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXM1LmluY2x1ZGVkICYmIF90aGlzNS5pc05vdFN5bmMpIHtcbiAgICAgICAgICBfdGhpczUuY29udHJvbC5zZXRWYWx1ZShfdGhpczUudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzNS5jb250cm9sLnN5bmNEb3RzUG9zKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJrZXlkb3duSGFuZGxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGtleWRvd25IYW5kbGUoZSkge1xuICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy51c2VLZXlib2FyZCB8fCAhdGhpcy5zdGF0ZXMuaGFzKFNsaWRlclN0YXRlLkZvY3VzKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBpc0luY2x1ZGUgPSB0aGlzLmluY2x1ZGVkICYmIHRoaXMubWFya3M7XG4gICAgICB2YXIgaGFuZGxlRnVuYyA9IGdldEtleWJvYXJkSGFuZGxlRnVuYyhlLCB7XG4gICAgICAgIGRpcmVjdGlvbjogdGhpcy5kaXJlY3Rpb24sXG4gICAgICAgIG1heDogaXNJbmNsdWRlID8gdGhpcy5jb250cm9sLm1hcmtMaXN0Lmxlbmd0aCAtIDEgOiB0aGlzLmNvbnRyb2wudG90YWwsXG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgaG9vazogdGhpcy5rZXlkb3duSG9va1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChoYW5kbGVGdW5jKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIG5ld0luZGV4ID0gLTE7XG4gICAgICAgIHZhciBwb3MgPSAwO1xuXG4gICAgICAgIGlmIChpc0luY2x1ZGUpIHtcbiAgICAgICAgICB0aGlzLmNvbnRyb2wubWFya0xpc3Quc29tZShmdW5jdGlvbiAobWFyaywgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChtYXJrLnZhbHVlID09PSBfdGhpczYuY29udHJvbC5kb3RzVmFsdWVbX3RoaXM2LmZvY3VzRG90SW5kZXhdKSB7XG4gICAgICAgICAgICAgIG5ld0luZGV4ID0gaGFuZGxlRnVuYyhpbmRleCk7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAobmV3SW5kZXggPCAwKSB7XG4gICAgICAgICAgICBuZXdJbmRleCA9IDA7XG4gICAgICAgICAgfSBlbHNlIGlmIChuZXdJbmRleCA+IHRoaXMuY29udHJvbC5tYXJrTGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBuZXdJbmRleCA9IHRoaXMuY29udHJvbC5tYXJrTGlzdC5sZW5ndGggLSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBvcyA9IHRoaXMuY29udHJvbC5tYXJrTGlzdFtuZXdJbmRleF0ucG9zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0luZGV4ID0gaGFuZGxlRnVuYyh0aGlzLmNvbnRyb2wuZ2V0SW5kZXhCeVZhbHVlKHRoaXMuY29udHJvbC5kb3RzVmFsdWVbdGhpcy5mb2N1c0RvdEluZGV4XSkpO1xuICAgICAgICAgIHBvcyA9IHRoaXMuY29udHJvbC5wYXJzZVZhbHVlKHRoaXMuY29udHJvbC5nZXRWYWx1ZUJ5SW5kZXgobmV3SW5kZXgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNDcm9zc0RvdChwb3MpO1xuICAgICAgICB0aGlzLmNvbnRyb2wuc2V0RG90UG9zKHBvcywgdGhpcy5mb2N1c0RvdEluZGV4KTtcbiAgICAgICAgdGhpcy5zeW5jVmFsdWVCeVBvcygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRQb3NCeUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBvc0J5RXZlbnQoZSkge1xuICAgICAgcmV0dXJuIGdldFBvcyhlLCB0aGlzLiRyZWZzLnJhaWwsIHRoaXMuaXNSZXZlcnNlLCB0aGlzLnpvb20pW3RoaXMuaXNIb3Jpem9udGFsID8gJ3gnIDogJ3knXSAvIHRoaXMuc2NhbGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclNsb3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyU2xvdChuYW1lLCBkYXRhLCBkZWZhdWx0U2xvdCwgaXNEZWZhdWx0KSB7XG4gICAgICB2YXIgaCA9IHRoaXMuJGNyZWF0ZUVsZW1lbnQ7XG4gICAgICB2YXIgc2NvcGVkU2xvdCA9IHRoaXMuJHNjb3BlZFNsb3RzW25hbWVdO1xuICAgICAgcmV0dXJuIHNjb3BlZFNsb3QgPyBpc0RlZmF1bHQgPyBzY29wZWRTbG90KGRhdGEpIDogaChcInRlbXBsYXRlXCIsIHtcbiAgICAgICAgXCJzbG90XCI6IG5hbWVcbiAgICAgIH0sIFtzY29wZWRTbG90KGRhdGEpXSkgOiBkZWZhdWx0U2xvdDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgICB2YXIgaCA9IGFyZ3VtZW50c1swXTtcbiAgICAgIHJldHVybiBoKFwiZGl2XCIsIGhlbHBlcl9kZWZhdWx0KCkoW3tcbiAgICAgICAgXCJyZWZcIjogXCJjb250YWluZXJcIixcbiAgICAgICAgXCJjbGFzc1wiOiB0aGlzLmNvbnRhaW5lckNsYXNzZXMsXG4gICAgICAgIFwic3R5bGVcIjogdGhpcy5jb250YWluZXJTdHlsZXMsXG4gICAgICAgIFwib25cIjoge1xuICAgICAgICAgIFwiY2xpY2tcIjogdGhpcy5jbGlja0hhbmRsZSxcbiAgICAgICAgICBcInRvdWNoc3RhcnRcIjogdGhpcy5kcmFnU3RhcnRPblByb2Nlc3MsXG4gICAgICAgICAgXCJtb3VzZWRvd25cIjogdGhpcy5kcmFnU3RhcnRPblByb2Nlc3NcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy4kYXR0cnNdKSwgW2goXCJkaXZcIiwge1xuICAgICAgICBcInJlZlwiOiBcInJhaWxcIixcbiAgICAgICAgXCJjbGFzc1wiOiBcInZ1ZS1zbGlkZXItcmFpbFwiLFxuICAgICAgICBcInN0eWxlXCI6IHRoaXMucmFpbFN0eWxlXG4gICAgICB9LCBbdGhpcy5wcm9jZXNzQXJyYXkubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gX3RoaXM3LnJlbmRlclNsb3QoJ3Byb2Nlc3MnLCBpdGVtLCBoKFwiZGl2XCIsIHtcbiAgICAgICAgICBcImNsYXNzXCI6IFwidnVlLXNsaWRlci1wcm9jZXNzXCIsXG4gICAgICAgICAgXCJrZXlcIjogXCJwcm9jZXNzLVwiLmNvbmNhdChpbmRleCksXG4gICAgICAgICAgXCJzdHlsZVwiOiBpdGVtLnN0eWxlXG4gICAgICAgIH0pLCB0cnVlKTtcbiAgICAgIH0pLCB0aGlzLnNsaWRlck1hcmtzID8gaChcImRpdlwiLCB7XG4gICAgICAgIFwiY2xhc3NcIjogXCJ2dWUtc2xpZGVyLW1hcmtzXCJcbiAgICAgIH0sIFt0aGlzLmNvbnRyb2wubWFya0xpc3QubWFwKGZ1bmN0aW9uIChtYXJrLCBpbmRleCkge1xuICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICByZXR1cm4gX3RoaXM3LnJlbmRlclNsb3QoJ21hcmsnLCBtYXJrLCBoKFwidnVlLXNsaWRlci1tYXJrXCIsIHtcbiAgICAgICAgICBcImtleVwiOiBcIm1hcmstXCIuY29uY2F0KGluZGV4KSxcbiAgICAgICAgICBcImF0dHJzXCI6IHtcbiAgICAgICAgICAgIFwibWFya1wiOiBtYXJrLFxuICAgICAgICAgICAgXCJoaWRlTGFiZWxcIjogX3RoaXM3LmhpZGVMYWJlbCxcbiAgICAgICAgICAgIFwic3RlcFN0eWxlXCI6IF90aGlzNy5zdGVwU3R5bGUsXG4gICAgICAgICAgICBcInN0ZXBBY3RpdmVTdHlsZVwiOiBfdGhpczcuc3RlcEFjdGl2ZVN0eWxlLFxuICAgICAgICAgICAgXCJsYWJlbFN0eWxlXCI6IF90aGlzNy5sYWJlbFN0eWxlLFxuICAgICAgICAgICAgXCJsYWJlbEFjdGl2ZVN0eWxlXCI6IF90aGlzNy5sYWJlbEFjdGl2ZVN0eWxlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN0eWxlXCI6IChfcmVmID0ge30sIHZ1ZV9zbGlkZXJfZGVmaW5lUHJvcGVydHkoX3JlZiwgX3RoaXM3LmlzSG9yaXpvbnRhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJywgJzEwMCUnKSwgdnVlX3NsaWRlcl9kZWZpbmVQcm9wZXJ0eShfcmVmLCBfdGhpczcuaXNIb3Jpem9udGFsID8gJ3dpZHRoJyA6ICdoZWlnaHQnLCBfdGhpczcudGFpbFNpemUpLCB2dWVfc2xpZGVyX2RlZmluZVByb3BlcnR5KF9yZWYsIF90aGlzNy5tYWluRGlyZWN0aW9uLCBcIlwiLmNvbmNhdChtYXJrLnBvcywgXCIlXCIpKSwgX3JlZiksXG4gICAgICAgICAgXCJvblwiOiB7XG4gICAgICAgICAgICBcInByZXNzTGFiZWxcIjogZnVuY3Rpb24gcHJlc3NMYWJlbChwb3MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNy5jbGlja2FibGUgJiYgX3RoaXM3LnNldFZhbHVlQnlQb3MocG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIFtfdGhpczcucmVuZGVyU2xvdCgnc3RlcCcsIG1hcmssIG51bGwpLCBfdGhpczcucmVuZGVyU2xvdCgnbGFiZWwnLCBtYXJrLCBudWxsKV0pLCB0cnVlKTtcbiAgICAgIH0pXSkgOiBudWxsLCB0aGlzLmRvdHMubWFwKGZ1bmN0aW9uIChkb3QsIGluZGV4KSB7XG4gICAgICAgIHZhciBfcmVmMjtcblxuICAgICAgICByZXR1cm4gaChcInZ1ZS1zbGlkZXItZG90XCIsIHtcbiAgICAgICAgICBcInJlZlwiOiBcImRvdC1cIi5jb25jYXQoaW5kZXgpLFxuICAgICAgICAgIFwia2V5XCI6IFwiZG90LVwiLmNvbmNhdChpbmRleCksXG4gICAgICAgICAgXCJhdHRyc1wiOiB2dWVfc2xpZGVyX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGRvdC52YWx1ZSxcbiAgICAgICAgICAgIFwiZGlzYWJsZWRcIjogZG90LmRpc2FibGVkLFxuICAgICAgICAgICAgXCJmb2N1c1wiOiBkb3QuZm9jdXMsXG4gICAgICAgICAgICBcImRvdC1zdHlsZVwiOiBbZG90LnN0eWxlLCBkb3QuZGlzYWJsZWQgPyBkb3QuZGlzYWJsZWRTdHlsZSA6IG51bGwsIGRvdC5mb2N1cyA/IGRvdC5mb2N1c1N0eWxlIDogbnVsbF0sXG4gICAgICAgICAgICBcInRvb2x0aXBcIjogZG90LnRvb2x0aXAgfHwgX3RoaXM3LnRvb2x0aXAsXG4gICAgICAgICAgICBcInRvb2x0aXAtc3R5bGVcIjogW190aGlzNy50b29sdGlwU3R5bGUsIGRvdC50b29sdGlwU3R5bGUsIGRvdC5kaXNhYmxlZCA/IGRvdC50b29sdGlwRGlzYWJsZWRTdHlsZSA6IG51bGwsIGRvdC5mb2N1cyA/IGRvdC50b29sdGlwRm9jdXNTdHlsZSA6IG51bGxdLFxuICAgICAgICAgICAgXCJ0b29sdGlwLWZvcm1hdHRlclwiOiBBcnJheS5pc0FycmF5KF90aGlzNy5zbGlkZXJUb29sdGlwRm9ybWF0dGVyKSA/IF90aGlzNy5zbGlkZXJUb29sdGlwRm9ybWF0dGVyW2luZGV4XSA6IF90aGlzNy5zbGlkZXJUb29sdGlwRm9ybWF0dGVyLFxuICAgICAgICAgICAgXCJ0b29sdGlwLXBsYWNlbWVudFwiOiBfdGhpczcudG9vbHRpcERpcmVjdGlvbnNbaW5kZXhdLFxuICAgICAgICAgICAgXCJyb2xlXCI6IFwic2xpZGVyXCIsXG4gICAgICAgICAgICBcImFyaWEtdmFsdWVub3dcIjogZG90LnZhbHVlLFxuICAgICAgICAgICAgXCJhcmlhLXZhbHVlbWluXCI6IF90aGlzNy5taW4sXG4gICAgICAgICAgICBcImFyaWEtdmFsdWVtYXhcIjogX3RoaXM3Lm1heCxcbiAgICAgICAgICAgIFwiYXJpYS1vcmllbnRhdGlvblwiOiBfdGhpczcuaXNIb3Jpem9udGFsID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgIFwidGFiaW5kZXhcIjogXCIwXCJcbiAgICAgICAgICB9LCBfdGhpczcuZG90QXR0cnMpLFxuICAgICAgICAgIFwic3R5bGVcIjogW190aGlzNy5kb3RCYXNlU3R5bGUsIChfcmVmMiA9IHt9LCB2dWVfc2xpZGVyX2RlZmluZVByb3BlcnR5KF9yZWYyLCBfdGhpczcubWFpbkRpcmVjdGlvbiwgXCJcIi5jb25jYXQoZG90LnBvcywgXCIlXCIpKSwgdnVlX3NsaWRlcl9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgXCJ0cmFuc2l0aW9uXCIsIFwiXCIuY29uY2F0KF90aGlzNy5tYWluRGlyZWN0aW9uLCBcIiBcIikuY29uY2F0KF90aGlzNy5hbmltYXRlVGltZSwgXCJzXCIpKSwgX3JlZjIpXSxcbiAgICAgICAgICBcIm9uXCI6IHtcbiAgICAgICAgICAgIFwiZHJhZy1zdGFydFwiOiBmdW5jdGlvbiBkcmFnU3RhcnQoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczcuZHJhZ1N0YXJ0KGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibmF0aXZlT25cIjoge1xuICAgICAgICAgICAgXCJmb2N1c1wiOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICFkb3QuZGlzYWJsZWQgJiYgX3RoaXM3LmZvY3VzKGluZGV4KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImJsdXJcIjogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNy5ibHVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBbX3RoaXM3LnJlbmRlclNsb3QoJ2RvdCcsIGRvdCwgbnVsbCksIF90aGlzNy5yZW5kZXJTbG90KCd0b29sdGlwJywgZG90LCBudWxsKV0pO1xuICAgICAgfSksIHRoaXMucmVuZGVyU2xvdCgnZGVmYXVsdCcsIHtcbiAgICAgICAgdmFsdWU6IHRoaXMuZ2V0VmFsdWUoKVxuICAgICAgfSwgbnVsbCwgdHJ1ZSldKV0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0YWlsU2l6ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGdldFNpemUoKHRoaXMuaXNIb3Jpem9udGFsID8gdGhpcy5oZWlnaHQgOiB0aGlzLndpZHRoKSB8fCBERUZBVUxUX1NMSURFUl9TSVpFKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29udGFpbmVyQ2xhc3Nlc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFsndnVlLXNsaWRlcicsIFtcInZ1ZS1zbGlkZXItXCIuY29uY2F0KHRoaXMuZGlyZWN0aW9uKV0sIHtcbiAgICAgICAgJ3Z1ZS1zbGlkZXItZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkXG4gICAgICB9XTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29udGFpbmVyU3R5bGVzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgX3JlZjMgPSBBcnJheS5pc0FycmF5KHRoaXMuZG90U2l6ZSkgPyB0aGlzLmRvdFNpemUgOiBbdGhpcy5kb3RTaXplLCB0aGlzLmRvdFNpemVdLFxuICAgICAgICAgIF9yZWY0ID0gdnVlX3NsaWRlcl9zbGljZWRUb0FycmF5KF9yZWYzLCAyKSxcbiAgICAgICAgICBkb3RXaWR0aCA9IF9yZWY0WzBdLFxuICAgICAgICAgIGRvdEhlaWdodCA9IF9yZWY0WzFdO1xuXG4gICAgICB2YXIgY29udGFpbmVyV2lkdGggPSB0aGlzLndpZHRoID8gZ2V0U2l6ZSh0aGlzLndpZHRoKSA6IHRoaXMuaXNIb3Jpem9udGFsID8gJ2F1dG8nIDogZ2V0U2l6ZShERUZBVUxUX1NMSURFUl9TSVpFKTtcbiAgICAgIHZhciBjb250YWluZXJIZWlnaHQgPSB0aGlzLmhlaWdodCA/IGdldFNpemUodGhpcy5oZWlnaHQpIDogdGhpcy5pc0hvcml6b250YWwgPyBnZXRTaXplKERFRkFVTFRfU0xJREVSX1NJWkUpIDogJ2F1dG8nO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFkZGluZzogdGhpcy5jb250YWluZWQgPyBcIlwiLmNvbmNhdChkb3RIZWlnaHQgLyAyLCBcInB4IFwiKS5jb25jYXQoZG90V2lkdGggLyAyLCBcInB4XCIpIDogdGhpcy5pc0hvcml6b250YWwgPyBcIlwiLmNvbmNhdChkb3RIZWlnaHQgLyAyLCBcInB4IDBcIikgOiBcIjAgXCIuY29uY2F0KGRvdFdpZHRoIC8gMiwgXCJweFwiKSxcbiAgICAgICAgd2lkdGg6IGNvbnRhaW5lcldpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNvbnRhaW5lckhlaWdodFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicHJvY2Vzc0FycmF5XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgICAgcmV0dXJuIHRoaXMuY29udHJvbC5wcm9jZXNzQXJyYXkubWFwKGZ1bmN0aW9uIChfcmVmNSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIF9vYmplY3RTcHJlYWQyO1xuXG4gICAgICAgIHZhciBfcmVmNiA9IHZ1ZV9zbGlkZXJfc2xpY2VkVG9BcnJheShfcmVmNSwgMyksXG4gICAgICAgICAgICBzdGFydCA9IF9yZWY2WzBdLFxuICAgICAgICAgICAgZW5kID0gX3JlZjZbMV0sXG4gICAgICAgICAgICBzdHlsZSA9IF9yZWY2WzJdO1xuXG4gICAgICAgIGlmIChzdGFydCA+IGVuZCkge1xuICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlOnNlbWljb2xvbiAqL1xuICAgICAgICAgIDtcbiAgICAgICAgICB2YXIgX3JlZjcgPSBbZW5kLCBzdGFydF07XG4gICAgICAgICAgc3RhcnQgPSBfcmVmN1swXTtcbiAgICAgICAgICBlbmQgPSBfcmVmN1sxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzaXplU3R5bGVLZXkgPSBfdGhpczguaXNIb3Jpem9udGFsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgICAgICBlbmQ6IGVuZCxcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgc3R5bGU6IHZ1ZV9zbGlkZXJfb2JqZWN0U3ByZWFkKHZ1ZV9zbGlkZXJfb2JqZWN0U3ByZWFkKChfb2JqZWN0U3ByZWFkMiA9IHt9LCB2dWVfc2xpZGVyX2RlZmluZVByb3BlcnR5KF9vYmplY3RTcHJlYWQyLCBfdGhpczguaXNIb3Jpem9udGFsID8gJ2hlaWdodCcgOiAnd2lkdGgnLCAnMTAwJScpLCB2dWVfc2xpZGVyX2RlZmluZVByb3BlcnR5KF9vYmplY3RTcHJlYWQyLCBfdGhpczguaXNIb3Jpem9udGFsID8gJ3RvcCcgOiAnbGVmdCcsIDApLCB2dWVfc2xpZGVyX2RlZmluZVByb3BlcnR5KF9vYmplY3RTcHJlYWQyLCBfdGhpczgubWFpbkRpcmVjdGlvbiwgXCJcIi5jb25jYXQoc3RhcnQsIFwiJVwiKSksIHZ1ZV9zbGlkZXJfZGVmaW5lUHJvcGVydHkoX29iamVjdFNwcmVhZDIsIHNpemVTdHlsZUtleSwgXCJcIi5jb25jYXQoZW5kIC0gc3RhcnQsIFwiJVwiKSksIHZ1ZV9zbGlkZXJfZGVmaW5lUHJvcGVydHkoX29iamVjdFNwcmVhZDIsIFwidHJhbnNpdGlvblByb3BlcnR5XCIsIFwiXCIuY29uY2F0KHNpemVTdHlsZUtleSwgXCIsXCIpLmNvbmNhdChfdGhpczgubWFpbkRpcmVjdGlvbikpLCB2dWVfc2xpZGVyX2RlZmluZVByb3BlcnR5KF9vYmplY3RTcHJlYWQyLCBcInRyYW5zaXRpb25EdXJhdGlvblwiLCBcIlwiLmNvbmNhdChfdGhpczguYW5pbWF0ZVRpbWUsIFwic1wiKSksIF9vYmplY3RTcHJlYWQyKSwgX3RoaXM4LnByb2Nlc3NTdHlsZSksIHN0eWxlKVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRvdEJhc2VTdHlsZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIF9yZWY4ID0gQXJyYXkuaXNBcnJheSh0aGlzLmRvdFNpemUpID8gdGhpcy5kb3RTaXplIDogW3RoaXMuZG90U2l6ZSwgdGhpcy5kb3RTaXplXSxcbiAgICAgICAgICBfcmVmOSA9IHZ1ZV9zbGlkZXJfc2xpY2VkVG9BcnJheShfcmVmOCwgMiksXG4gICAgICAgICAgZG90V2lkdGggPSBfcmVmOVswXSxcbiAgICAgICAgICBkb3RIZWlnaHQgPSBfcmVmOVsxXTtcblxuICAgICAgdmFyIGRvdFBvcztcblxuICAgICAgaWYgKHRoaXMuaXNIb3Jpem9udGFsKSB7XG4gICAgICAgIGRvdFBvcyA9IHZ1ZV9zbGlkZXJfZGVmaW5lUHJvcGVydHkoe1xuICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIuY29uY2F0KHRoaXMuaXNSZXZlcnNlID8gJzUwJScgOiAnLTUwJScsIFwiLCAtNTAlKVwiKSxcbiAgICAgICAgICAnLVdlYmtpdFRyYW5zZm9ybSc6IFwidHJhbnNsYXRlKFwiLmNvbmNhdCh0aGlzLmlzUmV2ZXJzZSA/ICc1MCUnIDogJy01MCUnLCBcIiwgLTUwJSlcIiksXG4gICAgICAgICAgdG9wOiAnNTAlJ1xuICAgICAgICB9LCB0aGlzLmRpcmVjdGlvbiA9PT0gJ2x0cicgPyAnbGVmdCcgOiAncmlnaHQnLCAnMCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG90UG9zID0gdnVlX3NsaWRlcl9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCBcIi5jb25jYXQodGhpcy5pc1JldmVyc2UgPyAnNTAlJyA6ICctNTAlJywgXCIpXCIpLFxuICAgICAgICAgICctV2Via2l0VHJhbnNmb3JtJzogXCJ0cmFuc2xhdGUoLTUwJSwgXCIuY29uY2F0KHRoaXMuaXNSZXZlcnNlID8gJzUwJScgOiAnLTUwJScsIFwiKVwiKSxcbiAgICAgICAgICBsZWZ0OiAnNTAlJ1xuICAgICAgICB9LCB0aGlzLmRpcmVjdGlvbiA9PT0gJ2J0dCcgPyAnYm90dG9tJyA6ICd0b3AnLCAnMCcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdnVlX3NsaWRlcl9vYmplY3RTcHJlYWQoe1xuICAgICAgICB3aWR0aDogXCJcIi5jb25jYXQoZG90V2lkdGgsIFwicHhcIiksXG4gICAgICAgIGhlaWdodDogXCJcIi5jb25jYXQoZG90SGVpZ2h0LCBcInB4XCIpXG4gICAgICB9LCBkb3RQb3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtYWluRGlyZWN0aW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ2x0cic6XG4gICAgICAgICAgcmV0dXJuICdsZWZ0JztcblxuICAgICAgICBjYXNlICdydGwnOlxuICAgICAgICAgIHJldHVybiAncmlnaHQnO1xuXG4gICAgICAgIGNhc2UgJ2J0dCc6XG4gICAgICAgICAgcmV0dXJuICdib3R0b20nO1xuXG4gICAgICAgIGNhc2UgJ3R0Yic6XG4gICAgICAgICAgcmV0dXJuICd0b3AnO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0hvcml6b250YWxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiA9PT0gJ2x0cicgfHwgdGhpcy5kaXJlY3Rpb24gPT09ICdydGwnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1JldmVyc2VcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiA9PT0gJ3J0bCcgfHwgdGhpcy5kaXJlY3Rpb24gPT09ICdidHQnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0b29sdGlwRGlyZWN0aW9uc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIGRpciA9IHRoaXMudG9vbHRpcFBsYWNlbWVudCB8fCAodGhpcy5pc0hvcml6b250YWwgPyAndG9wJyA6ICdsZWZ0Jyk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRpcikpIHtcbiAgICAgICAgcmV0dXJuIGRpcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvdHMubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGlyO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZG90c1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIF90aGlzOSA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wuZG90c1Bvcy5tYXAoZnVuY3Rpb24gKHBvcywgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHZ1ZV9zbGlkZXJfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICBwb3M6IHBvcyxcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgdmFsdWU6IF90aGlzOS5jb250cm9sLmRvdHNWYWx1ZVtpbmRleF0sXG4gICAgICAgICAgZm9jdXM6IF90aGlzOS5zdGF0ZXMuaGFzKFNsaWRlclN0YXRlLkZvY3VzKSAmJiBfdGhpczkuZm9jdXNEb3RJbmRleCA9PT0gaW5kZXgsXG4gICAgICAgICAgZGlzYWJsZWQ6IF90aGlzOS5kaXNhYmxlZCxcbiAgICAgICAgICBzdHlsZTogX3RoaXM5LmRvdFN0eWxlXG4gICAgICAgIH0sIChBcnJheS5pc0FycmF5KF90aGlzOS5kb3RPcHRpb25zKSA/IF90aGlzOS5kb3RPcHRpb25zW2luZGV4XSA6IF90aGlzOS5kb3RPcHRpb25zKSB8fCB7fSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYW5pbWF0ZVRpbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlcy5oYXMoU2xpZGVyU3RhdGUuRHJhZykpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmR1cmF0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYW5Tb3J0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcmRlciAmJiAhdGhpcy5taW5SYW5nZSAmJiAhdGhpcy5tYXhSYW5nZSAmJiAhdGhpcy5maXhlZCAmJiB0aGlzLmVuYWJsZUNyb3NzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzbGlkZXJEYXRhXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgX3RoaXMxMCA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLmlzT2JqZWN0QXJyYXlEYXRhKHRoaXMuZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHJldHVybiBvYmpbX3RoaXMxMC5kYXRhVmFsdWVdO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc09iamVjdERhdGEodGhpcy5kYXRhKSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5kYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNsaWRlck1hcmtzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgX3RoaXMxMSA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLm1hcmtzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcmtzO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzT2JqZWN0QXJyYXlEYXRhKHRoaXMuZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICB2YXIgbWFyayA9IHtcbiAgICAgICAgICAgIGxhYmVsOiB2YWxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgX3RoaXMxMS5kYXRhLnNvbWUoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgaWYgKG9ialtfdGhpczExLmRhdGFWYWx1ZV0gPT09IHZhbCkge1xuICAgICAgICAgICAgICBtYXJrLmxhYmVsID0gb2JqW190aGlzMTEuZGF0YUxhYmVsXTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiBtYXJrO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzT2JqZWN0RGF0YSh0aGlzLmRhdGEpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNsaWRlclRvb2x0aXBGb3JtYXR0ZXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBfdGhpczEyID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMudG9vbHRpcEZvcm1hdHRlcikge1xuICAgICAgICByZXR1cm4gdGhpcy50b29sdGlwRm9ybWF0dGVyO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzT2JqZWN0QXJyYXlEYXRhKHRoaXMuZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICB2YXIgdG9vbHRpcFRleHQgPSAnJyArIHZhbDtcblxuICAgICAgICAgIF90aGlzMTIuZGF0YS5zb21lKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmpbX3RoaXMxMi5kYXRhVmFsdWVdID09PSB2YWwpIHtcbiAgICAgICAgICAgICAgdG9vbHRpcFRleHQgPSBvYmpbX3RoaXMxMi5kYXRhTGFiZWxdO1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHRvb2x0aXBUZXh0O1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzT2JqZWN0RGF0YSh0aGlzLmRhdGEpKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIHJldHVybiBkYXRhW3ZhbF07XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzTm90U3luY1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHZhbHVlcyA9IHRoaXMuY29udHJvbC5kb3RzVmFsdWU7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSA/IHRoaXMudmFsdWUubGVuZ3RoICE9PSB2YWx1ZXMubGVuZ3RoIHx8IHRoaXMudmFsdWUuc29tZShmdW5jdGlvbiAodmFsLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gdmFsICE9PSB2YWx1ZXNbaW5kZXhdO1xuICAgICAgfSkgOiB0aGlzLnZhbHVlICE9PSB2YWx1ZXNbMF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRyYWdSYW5nZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHByZXZEb3QgPSB0aGlzLmRvdHNbdGhpcy5mb2N1c0RvdEluZGV4IC0gMV07XG4gICAgICB2YXIgbmV4dERvdCA9IHRoaXMuZG90c1t0aGlzLmZvY3VzRG90SW5kZXggKyAxXTtcbiAgICAgIHJldHVybiBbcHJldkRvdCA/IHByZXZEb3QucG9zIDogLUluZmluaXR5LCBuZXh0RG90ID8gbmV4dERvdC5wb3MgOiBJbmZpbml0eV07XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFZ1ZVNsaWRlcjtcbn0oZXh0ZXJuYWxfY29tbW9uanNfdnVlX2NvbW1vbmpzMl92dWVfcm9vdF9WdWVfYW1kX3Z1ZV9kZWZhdWx0LmEpO1xuXG5fX2RlY29yYXRlKFtNb2RlbCgnY2hhbmdlJywge1xuICBkZWZhdWx0OiAwXG59KV0sIHZ1ZV9zbGlkZXJfVnVlU2xpZGVyLnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKHtcbiAgdHlwZTogQm9vbGVhbixcbiAgZGVmYXVsdDogZmFsc2Vcbn0pXSwgdnVlX3NsaWRlcl9WdWVTbGlkZXIucHJvdG90eXBlLCBcInNpbGVudFwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKHtcbiAgZGVmYXVsdDogJ2x0cicsXG4gIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdG9yKGRpcikge1xuICAgIHJldHVybiBbJ2x0cicsICdydGwnLCAndHRiJywgJ2J0dCddLmluZGV4T2YoZGlyKSA+IC0xO1xuICB9XG59KV0sIHZ1ZV9zbGlkZXJfVnVlU2xpZGVyLnByb3RvdHlwZSwgXCJkaXJlY3Rpb25cIiwgdm9pZCAwKTtcblxuX19kZWNvcmF0ZShbUHJvcCh7XG4gIHR5cGU6IFtOdW1iZXIsIFN0cmluZ11cbn0pXSwgdnVlX3NsaWRlcl9WdWVTbGlkZXIucHJvdG90eXBlLCBcIndpZHRoXCIsIHZvaWQgMCk7XG5cbl9fZGVjb3JhdGUoW1Byb3Aoe1xuICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddXG59KV0sIHZ1ZV9zbGlkZXJfVnVlU2xpZGVyLnByb3RvdHlwZSwgXCJoZWlnaHRcIiwgdm9pZCAwKTtcblxuX19kZWNvcmF0ZShbUHJvcCh7XG4gIGRlZmF1bHQ6IDE0XG59KV0sIHZ1ZV9zbGlkZXJfVnVlU2xpZGVyLnByb3RvdHlwZSwgXCJkb3RTaXplXCIsIHZvaWQgMCk7XG5cbl9fZGVjb3JhdGUoW1Byb3Aoe1xuICBkZWZhdWx0OiBmYWxzZVxufSldLCB2dWVfc2xpZGVyX1Z1ZVNsaWRlci5wcm90b3R5cGUsIFwiY29udGFpbmVkXCIsIHZvaWQgMCk7XG5cbl9fZGVjb3JhdGUoW1Byb3Aoe1xuICB0eXBlOiBOdW1iZXIsXG4gIGRlZmF1bHQ6IDBcbn0pXSwgdnVlX3NsaWRlcl9WdWVTbGlkZXIucHJvdG90eXBlLCBcIm1pblwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKHtcbiAgdHlwZTogTnVtYmVyLFxuICBkZWZhdWx0OiAxMDBcbn0pXSwgdnVlX3NsaWRlcl9WdWVTbGlkZXIucHJvdG90eXBlLCBcIm1heFwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKHtcbiAgdHlwZTogTnVtYmVyLFxuICBkZWZhdWx0OiAxXG59KV0sIHZ1ZV9zbGlkZXJfVnVlU2xpZGVyLnByb3RvdHlwZSwgXCJpbnRlcnZhbFwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKHtcbiAgdHlwZTogQm9vbGVhbixcbiAgZGVmYXVsdDogZmFsc2Vcbn0pXSwgdnVlX3NsaWRlcl9WdWVTbGlkZXIucHJvdG90eXBlLCBcImRpc2FibGVkXCIsIHZvaWQgMCk7XG5cbl9fZGVjb3JhdGUoW1Byb3Aoe1xuICB0eXBlOiBCb29sZWFuLFxuICBkZWZhdWx0OiB0cnVlXG59KV0sIHZ1ZV9zbGlkZXJfVnVlU2xpZGVyLnByb3RvdHlwZSwgXCJjbGlja2FibGVcIiwgdm9pZCAwKTtcblxuX19kZWNvcmF0ZShbUHJvcCh7XG4gIHR5cGU6IEJvb2xlYW4sXG4gIGRlZmF1bHQ6IGZhbHNlXG59KV0sIHZ1ZV9zbGlkZXJfVnVlU2xpZGVyLnByb3RvdHlwZSwgXCJkcmFnT25DbGlja1wiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKHtcbiAgdHlwZTogTnVtYmVyLFxuICBkZWZhdWx0OiAwLjVcbn0pXSwgdnVlX3NsaWRlcl9WdWVTbGlkZXIucHJvdG90eXBlLCBcImR1cmF0aW9uXCIsIHZvaWQgMCk7XG5cbl9fZGVjb3JhdGUoW1Byb3Aoe1xuICB0eXBlOiBbT2JqZWN0LCBBcnJheV1cbn0pXSwgdnVlX3NsaWRlcl9WdWVTbGlkZXIucHJvdG90eXBlLCBcImRhdGFcIiwgdm9pZCAwKTtcblxuX19kZWNvcmF0ZShbUHJvcCh7XG4gIHR5cGU6IFN0cmluZyxcbiAgZGVmYXVsdDogJ3ZhbHVlJ1xufSldLCB2dWVfc2xpZGVyX1Z1ZVNsaWRlci5wcm90b3R5cGUsIFwiZGF0YVZhbHVlXCIsIHZvaWQgMCk7XG5cbl9fZGVjb3JhdGUoW1Byb3Aoe1xuICB0eXBlOiBTdHJpbmcsXG4gIGRlZmF1bHQ6ICdsYWJlbCdcbn0pXSwgdnVlX3NsaWRlcl9WdWVTbGlkZXIucHJvdG90eXBlLCBcImRhdGFMYWJlbFwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKHtcbiAgdHlwZTogQm9vbGVhbixcbiAgZGVmYXVsdDogZmFsc2Vcbn0pXSwgdnVlX3NsaWRlcl9WdWVTbGlkZXIucHJvdG90eXBlLCBcImxhenlcIiwgdm9pZCAwKTtcblxuX19kZWNvcmF0ZShbUHJvcCh7XG4gIHR5cGU6IFN0cmluZyxcbiAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0b3IodmFsKSB7XG4gICAgcmV0dXJuIFsnbm9uZScsICdhbHdheXMnLCAnZm9jdXMnLCAnaG92ZXInLCAnYWN0aXZlJ10uaW5kZXhPZih2YWwpID4gLTE7XG4gIH0sXG4gIGRlZmF1bHQ6ICdhY3RpdmUnXG59KV0sIHZ1ZV9zbGlkZXJfVnVlU2xpZGVyLnByb3RvdHlwZSwgXCJ0b29sdGlwXCIsIHZvaWQgMCk7XG5cbl9fZGVjb3JhdGUoW1Byb3Aoe1xuICB0eXBlOiBbU3RyaW5nLCBBcnJheV0sXG4gIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdG9yKGRhdGEpIHtcbiAgICByZXR1cm4gKEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW2RhdGFdKS5ldmVyeShmdW5jdGlvbiAodmFsKSB7XG4gICAgICByZXR1cm4gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5pbmRleE9mKHZhbCkgPiAtMTtcbiAgICB9KTtcbiAgfVxufSldLCB2dWVfc2xpZGVyX1Z1ZVNsaWRlci5wcm90b3R5cGUsIFwidG9vbHRpcFBsYWNlbWVudFwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKHtcbiAgdHlwZTogW1N0cmluZywgQXJyYXksIEZ1bmN0aW9uXVxufSldLCB2dWVfc2xpZGVyX1Z1ZVNsaWRlci5wcm90b3R5cGUsIFwidG9vbHRpcEZvcm1hdHRlclwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKHtcbiAgdHlwZTogQm9vbGVhbixcbiAgZGVmYXVsdDogdHJ1ZVxufSldLCB2dWVfc2xpZGVyX1Z1ZVNsaWRlci5wcm90b3R5cGUsIFwidXNlS2V5Ym9hcmRcIiwgdm9pZCAwKTtcblxuX19kZWNvcmF0ZShbUHJvcChGdW5jdGlvbildLCB2dWVfc2xpZGVyX1Z1ZVNsaWRlci5wcm90b3R5cGUsIFwia2V5ZG93bkhvb2tcIiwgdm9pZCAwKTtcblxuX19kZWNvcmF0ZShbUHJvcCh7XG4gIHR5cGU6IEJvb2xlYW4sXG4gIGRlZmF1bHQ6IHRydWVcbn0pXSwgdnVlX3NsaWRlcl9WdWVTbGlkZXIucHJvdG90eXBlLCBcImVuYWJsZUNyb3NzXCIsIHZvaWQgMCk7XG5cbl9fZGVjb3JhdGUoW1Byb3Aoe1xuICB0eXBlOiBCb29sZWFuLFxuICBkZWZhdWx0OiBmYWxzZVxufSldLCB2dWVfc2xpZGVyX1Z1ZVNsaWRlci5wcm90b3R5cGUsIFwiZml4ZWRcIiwgdm9pZCAwKTtcblxuX19kZWNvcmF0ZShbUHJvcCh7XG4gIHR5cGU6IEJvb2xlYW4sXG4gIGRlZmF1bHQ6IHRydWVcbn0pXSwgdnVlX3NsaWRlcl9WdWVTbGlkZXIucHJvdG90eXBlLCBcIm9yZGVyXCIsIHZvaWQgMCk7XG5cbl9fZGVjb3JhdGUoW1Byb3AoTnVtYmVyKV0sIHZ1ZV9zbGlkZXJfVnVlU2xpZGVyLnByb3RvdHlwZSwgXCJtaW5SYW5nZVwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKE51bWJlcildLCB2dWVfc2xpZGVyX1Z1ZVNsaWRlci5wcm90b3R5cGUsIFwibWF4UmFuZ2VcIiwgdm9pZCAwKTtcblxuX19kZWNvcmF0ZShbUHJvcCh7XG4gIHR5cGU6IFtCb29sZWFuLCBPYmplY3QsIEFycmF5LCBGdW5jdGlvbl0sXG4gIGRlZmF1bHQ6IGZhbHNlXG59KV0sIHZ1ZV9zbGlkZXJfVnVlU2xpZGVyLnByb3RvdHlwZSwgXCJtYXJrc1wiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKHtcbiAgdHlwZTogW0Jvb2xlYW4sIEZ1bmN0aW9uXSxcbiAgZGVmYXVsdDogdHJ1ZVxufSldLCB2dWVfc2xpZGVyX1Z1ZVNsaWRlci5wcm90b3R5cGUsIFwicHJvY2Vzc1wiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKHtcbiAgdHlwZTogW051bWJlcl1cbn0pXSwgdnVlX3NsaWRlcl9WdWVTbGlkZXIucHJvdG90eXBlLCBcInpvb21cIiwgdm9pZCAwKTtcblxuX19kZWNvcmF0ZShbUHJvcChCb29sZWFuKV0sIHZ1ZV9zbGlkZXJfVnVlU2xpZGVyLnByb3RvdHlwZSwgXCJpbmNsdWRlZFwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKEJvb2xlYW4pXSwgdnVlX3NsaWRlcl9WdWVTbGlkZXIucHJvdG90eXBlLCBcImFkc29yYlwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKEJvb2xlYW4pXSwgdnVlX3NsaWRlcl9WdWVTbGlkZXIucHJvdG90eXBlLCBcImhpZGVMYWJlbFwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKCldLCB2dWVfc2xpZGVyX1Z1ZVNsaWRlci5wcm90b3R5cGUsIFwiZG90T3B0aW9uc1wiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKCldLCB2dWVfc2xpZGVyX1Z1ZVNsaWRlci5wcm90b3R5cGUsIFwiZG90QXR0cnNcIiwgdm9pZCAwKTtcblxuX19kZWNvcmF0ZShbUHJvcCgpXSwgdnVlX3NsaWRlcl9WdWVTbGlkZXIucHJvdG90eXBlLCBcInJhaWxTdHlsZVwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKCldLCB2dWVfc2xpZGVyX1Z1ZVNsaWRlci5wcm90b3R5cGUsIFwicHJvY2Vzc1N0eWxlXCIsIHZvaWQgMCk7XG5cbl9fZGVjb3JhdGUoW1Byb3AoKV0sIHZ1ZV9zbGlkZXJfVnVlU2xpZGVyLnByb3RvdHlwZSwgXCJkb3RTdHlsZVwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKCldLCB2dWVfc2xpZGVyX1Z1ZVNsaWRlci5wcm90b3R5cGUsIFwidG9vbHRpcFN0eWxlXCIsIHZvaWQgMCk7XG5cbl9fZGVjb3JhdGUoW1Byb3AoKV0sIHZ1ZV9zbGlkZXJfVnVlU2xpZGVyLnByb3RvdHlwZSwgXCJzdGVwU3R5bGVcIiwgdm9pZCAwKTtcblxuX19kZWNvcmF0ZShbUHJvcCgpXSwgdnVlX3NsaWRlcl9WdWVTbGlkZXIucHJvdG90eXBlLCBcInN0ZXBBY3RpdmVTdHlsZVwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKCldLCB2dWVfc2xpZGVyX1Z1ZVNsaWRlci5wcm90b3R5cGUsIFwibGFiZWxTdHlsZVwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtQcm9wKCldLCB2dWVfc2xpZGVyX1Z1ZVNsaWRlci5wcm90b3R5cGUsIFwibGFiZWxBY3RpdmVTdHlsZVwiLCB2b2lkIDApO1xuXG5fX2RlY29yYXRlKFtXYXRjaCgndmFsdWUnKV0sIHZ1ZV9zbGlkZXJfVnVlU2xpZGVyLnByb3RvdHlwZSwgXCJvblZhbHVlQ2hhbmdlZFwiLCBudWxsKTtcblxudnVlX3NsaWRlcl9WdWVTbGlkZXIgPSBfX2RlY29yYXRlKFt2dWVfY2xhc3NfY29tcG9uZW50X2NvbW1vbl9kZWZhdWx0KCkoe1xuICBuYW1lOiAnVnVlU2xpZGVyJyxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udHJvbDogbnVsbFxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBWdWVTbGlkZXJEb3Q6IHZ1ZV9zbGlkZXJfZG90LFxuICAgIFZ1ZVNsaWRlck1hcms6IHZ1ZV9zbGlkZXJfbWFya1xuICB9XG59KV0sIHZ1ZV9zbGlkZXJfVnVlU2xpZGVyKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHZ1ZV9zbGlkZXIgPSAodnVlX3NsaWRlcl9WdWVTbGlkZXIpO1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9saWIvaW5kZXgudHNcbi8qIHRzbGludDpkaXNhYmxlOmltcG9ydC1zcGFjaW5nICovXG5cblxuXG5cbnZ1ZV9zbGlkZXIuVnVlU2xpZGVyTWFyayA9IHZ1ZV9zbGlkZXJfbWFyaztcbnZ1ZV9zbGlkZXIuVnVlU2xpZGVyRG90ID0gdnVlX3NsaWRlcl9kb3Q7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBsaWIgPSAodnVlX3NsaWRlcik7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2UvbGliL2NvbW1hbmRzL2J1aWxkL2VudHJ5LWxpYi5qc1xuXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGVudHJ5X2xpYiA9IF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKGxpYik7XG5cblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KVtcImRlZmF1bHRcIl07XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZ1ZS1zbGlkZXItY29tcG9uZW50LnVtZC5qcy5tYXAiXSwibmFtZXMiOlsicmVxdWlyZSQkMCIsInRoaXMiLCJtb2R1bGUiLCJleHBvcnRzIiwia2V5IiwiYSIsIlZ1ZSIsIkNvbXBvbmVudCIsIl90eXBlb2YiLCJvYmoiLCJfc2V0UHJvdG90eXBlT2YiLCJvIiwicCIsInNlbGYiLCJfZ2V0UHJvdG90eXBlT2YiLCJWdWVTbGlkZXJEb3QiLCJWdWVTbGlkZU1hcmsiLCJnZXRTaXplIiwiZ2V0T2Zmc2V0IiwiZ2V0UG9zIiwiS0VZX0NPREUiLCJnZXRLZXlib2FyZEhhbmRsZUZ1bmMiLCJEZWNpbWFsIiwiRVJST1JfVFlQRSIsImluTGltaXRSYW5nZSIsImdldE1hcmtCeVZhbHVlIiwiU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsR0FBQyxTQUFTLGlDQUFpQyxNQUFNLFNBQVM7QUFFeEQsV0FBaUIsVUFBQSxRQUFRQSxHQUFjO0FBQUEsRUFPekMsR0FBSSxPQUFPLFNBQVMsY0FBYyxPQUFPQyxnQkFBTyxTQUFTLG1DQUFtQztBQUM1RixXQUFpQixTQUFTLFNBQVM7QUFFekIsVUFBSSxtQkFBbUIsQ0FBQTtBQUd2QixlQUFTLG9CQUFvQixVQUFVO0FBR3RDLFlBQUcsaUJBQWlCLFdBQVc7QUFDOUIsaUJBQU8saUJBQWlCLFVBQVU7QUFBQSxRQUNsQztBQUVELFlBQUlDLFVBQVMsaUJBQWlCLFlBQVk7QUFBQSxVQUN6QyxHQUFHO0FBQUEsVUFDSCxHQUFHO0FBQUEsVUFDSCxTQUFTLENBQUU7QUFBQSxRQUN2QjtBQUdXLGdCQUFRLFVBQVUsS0FBS0EsUUFBTyxTQUFTQSxTQUFRQSxRQUFPLFNBQVMsbUJBQW1CO0FBR2xGLFFBQUFBLFFBQU8sSUFBSTtBQUdYLGVBQU9BLFFBQU87QUFBQSxNQUNkO0FBSUQsMEJBQW9CLElBQUk7QUFHeEIsMEJBQW9CLElBQUk7QUFHeEIsMEJBQW9CLElBQUksU0FBU0MsVUFBUyxNQUFNLFFBQVE7QUFDdkQsWUFBRyxDQUFDLG9CQUFvQixFQUFFQSxVQUFTLElBQUksR0FBRztBQUN6QyxpQkFBTyxlQUFlQSxVQUFTLE1BQU0sRUFBRSxZQUFZLE1BQU0sS0FBSyxPQUFNLENBQUU7QUFBQSxRQUN0RTtBQUFBLE1BQ1o7QUFHVSwwQkFBb0IsSUFBSSxTQUFTQSxVQUFTO0FBQ3pDLFlBQUcsT0FBTyxXQUFXLGVBQWUsT0FBTyxhQUFhO0FBQ3ZELGlCQUFPLGVBQWVBLFVBQVMsT0FBTyxhQUFhLEVBQUUsT0FBTyxTQUFRLENB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
