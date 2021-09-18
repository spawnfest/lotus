(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = typeof require !== "undefined" ? require : (x) => {
    throw new Error('Dynamic require of "' + x + '" is not supported');
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/uikit/dist/js/uikit.js
  var require_uikit = __commonJS({
    "node_modules/uikit/dist/js/uikit.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define("uikit", factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.UIkit = factory());
      })(exports, function() {
        "use strict";
        var objPrototype = Object.prototype;
        var hasOwnProperty = objPrototype.hasOwnProperty;
        function hasOwn(obj2, key2) {
          return hasOwnProperty.call(obj2, key2);
        }
        var hyphenateRe = /\B([A-Z])/g;
        var hyphenate = memoize(function(str) {
          return str.replace(hyphenateRe, "-$1").toLowerCase();
        });
        var camelizeRe = /-(\w)/g;
        var camelize = memoize(function(str) {
          return str.replace(camelizeRe, toUpper);
        });
        var ucfirst = memoize(function(str) {
          return str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : "";
        });
        function toUpper(_, c) {
          return c ? c.toUpperCase() : "";
        }
        var strPrototype = String.prototype;
        var startsWithFn = strPrototype.startsWith || function(search) {
          return this.lastIndexOf(search, 0) === 0;
        };
        function startsWith(str, search) {
          return startsWithFn.call(str, search);
        }
        var endsWithFn = strPrototype.endsWith || function(search) {
          return this.substr(-search.length) === search;
        };
        function endsWith(str, search) {
          return endsWithFn.call(str, search);
        }
        var arrPrototype = Array.prototype;
        var includesFn = function(search, i) {
          return !!~this.indexOf(search, i);
        };
        var includesStr = strPrototype.includes || includesFn;
        var includesArray = arrPrototype.includes || includesFn;
        function includes(obj2, search) {
          return obj2 && (isString(obj2) ? includesStr : includesArray).call(obj2, search);
        }
        var findIndexFn = arrPrototype.findIndex || function(predicate) {
          var arguments$1 = arguments;
          for (var i = 0; i < this.length; i++) {
            if (predicate.call(arguments$1[1], this[i], i, this)) {
              return i;
            }
          }
          return -1;
        };
        function findIndex(array, predicate) {
          return findIndexFn.call(array, predicate);
        }
        var isArray = Array.isArray;
        function isFunction(obj2) {
          return typeof obj2 === "function";
        }
        function isObject(obj2) {
          return obj2 !== null && typeof obj2 === "object";
        }
        var toString = objPrototype.toString;
        function isPlainObject(obj2) {
          return toString.call(obj2) === "[object Object]";
        }
        function isWindow(obj2) {
          return isObject(obj2) && obj2 === obj2.window;
        }
        function isDocument(obj2) {
          return nodeType(obj2) === 9;
        }
        function isNode(obj2) {
          return nodeType(obj2) >= 1;
        }
        function isElement(obj2) {
          return nodeType(obj2) === 1;
        }
        function nodeType(obj2) {
          return !isWindow(obj2) && isObject(obj2) && obj2.nodeType;
        }
        function isBoolean(value) {
          return typeof value === "boolean";
        }
        function isString(value) {
          return typeof value === "string";
        }
        function isNumber(value) {
          return typeof value === "number";
        }
        function isNumeric(value) {
          return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value));
        }
        function isEmpty(obj2) {
          return !(isArray(obj2) ? obj2.length : isObject(obj2) ? Object.keys(obj2).length : false);
        }
        function isUndefined(value) {
          return value === void 0;
        }
        function toBoolean(value) {
          return isBoolean(value) ? value : value === "true" || value === "1" || value === "" ? true : value === "false" || value === "0" ? false : value;
        }
        function toNumber(value) {
          var number = Number(value);
          return !isNaN(number) ? number : false;
        }
        function toFloat(value) {
          return parseFloat(value) || 0;
        }
        var toArray = Array.from || function(value) {
          return arrPrototype.slice.call(value);
        };
        function toNode(element) {
          return toNodes(element)[0];
        }
        function toNodes(element) {
          return element && (isNode(element) ? [element] : toArray(element).filter(isNode)) || [];
        }
        function toWindow(element) {
          if (isWindow(element)) {
            return element;
          }
          element = toNode(element);
          return element ? (isDocument(element) ? element : element.ownerDocument).defaultView : window;
        }
        function toMs(time) {
          return !time ? 0 : endsWith(time, "ms") ? toFloat(time) : toFloat(time) * 1e3;
        }
        function isEqual(value, other) {
          return value === other || isObject(value) && isObject(other) && Object.keys(value).length === Object.keys(other).length && each(value, function(val, key2) {
            return val === other[key2];
          });
        }
        function swap(value, a, b) {
          return value.replace(new RegExp(a + "|" + b, "g"), function(match2) {
            return match2 === a ? b : a;
          });
        }
        var assign = Object.assign || function(target) {
          var args = [], len = arguments.length - 1;
          while (len-- > 0)
            args[len] = arguments[len + 1];
          target = Object(target);
          for (var i = 0; i < args.length; i++) {
            var source = args[i];
            if (source !== null) {
              for (var key2 in source) {
                if (hasOwn(source, key2)) {
                  target[key2] = source[key2];
                }
              }
            }
          }
          return target;
        };
        function last(array) {
          return array[array.length - 1];
        }
        function each(obj2, cb) {
          for (var key2 in obj2) {
            if (cb(obj2[key2], key2) === false) {
              return false;
            }
          }
          return true;
        }
        function sortBy$1(array, prop) {
          return array.slice().sort(function(ref, ref$1) {
            var propA = ref[prop];
            if (propA === void 0)
              propA = 0;
            var propB = ref$1[prop];
            if (propB === void 0)
              propB = 0;
            return propA > propB ? 1 : propB > propA ? -1 : 0;
          });
        }
        function uniqueBy(array, prop) {
          var seen = new Set();
          return array.filter(function(ref) {
            var check = ref[prop];
            return seen.has(check) ? false : seen.add(check) || true;
          });
        }
        function clamp(number, min, max) {
          if (min === void 0)
            min = 0;
          if (max === void 0)
            max = 1;
          return Math.min(Math.max(toNumber(number) || 0, min), max);
        }
        function noop() {
        }
        function intersectRect() {
          var rects = [], len = arguments.length;
          while (len--)
            rects[len] = arguments[len];
          return [["bottom", "top"], ["right", "left"]].every(function(ref) {
            var minProp = ref[0];
            var maxProp = ref[1];
            return Math.min.apply(Math, rects.map(function(ref2) {
              var min = ref2[minProp];
              return min;
            })) - Math.max.apply(Math, rects.map(function(ref2) {
              var max = ref2[maxProp];
              return max;
            })) > 0;
          });
        }
        function pointInRect(point, rect) {
          return point.x <= rect.right && point.x >= rect.left && point.y <= rect.bottom && point.y >= rect.top;
        }
        var Dimensions = {
          ratio: function(dimensions2, prop, value) {
            var obj2;
            var aProp = prop === "width" ? "height" : "width";
            return obj2 = {}, obj2[aProp] = dimensions2[prop] ? Math.round(value * dimensions2[aProp] / dimensions2[prop]) : dimensions2[aProp], obj2[prop] = value, obj2;
          },
          contain: function(dimensions2, maxDimensions) {
            var this$1 = this;
            dimensions2 = assign({}, dimensions2);
            each(dimensions2, function(_, prop) {
              return dimensions2 = dimensions2[prop] > maxDimensions[prop] ? this$1.ratio(dimensions2, prop, maxDimensions[prop]) : dimensions2;
            });
            return dimensions2;
          },
          cover: function(dimensions2, maxDimensions) {
            var this$1 = this;
            dimensions2 = this.contain(dimensions2, maxDimensions);
            each(dimensions2, function(_, prop) {
              return dimensions2 = dimensions2[prop] < maxDimensions[prop] ? this$1.ratio(dimensions2, prop, maxDimensions[prop]) : dimensions2;
            });
            return dimensions2;
          }
        };
        function getIndex(i, elements, current, finite) {
          if (current === void 0)
            current = 0;
          if (finite === void 0)
            finite = false;
          elements = toNodes(elements);
          var length = elements.length;
          i = isNumeric(i) ? toNumber(i) : i === "next" ? current + 1 : i === "previous" ? current - 1 : elements.indexOf(toNode(i));
          if (finite) {
            return clamp(i, 0, length - 1);
          }
          i %= length;
          return i < 0 ? i + length : i;
        }
        function memoize(fn) {
          var cache = Object.create(null);
          return function(key2) {
            return cache[key2] || (cache[key2] = fn(key2));
          };
        }
        function attr(element, name, value) {
          if (isObject(name)) {
            for (var key2 in name) {
              attr(element, key2, name[key2]);
            }
            return;
          }
          if (isUndefined(value)) {
            element = toNode(element);
            return element && element.getAttribute(name);
          } else {
            toNodes(element).forEach(function(element2) {
              if (isFunction(value)) {
                value = value.call(element2, attr(element2, name));
              }
              if (value === null) {
                removeAttr(element2, name);
              } else {
                element2.setAttribute(name, value);
              }
            });
          }
        }
        function hasAttr(element, name) {
          return toNodes(element).some(function(element2) {
            return element2.hasAttribute(name);
          });
        }
        function removeAttr(element, name) {
          element = toNodes(element);
          name.split(" ").forEach(function(name2) {
            return element.forEach(function(element2) {
              return element2.hasAttribute(name2) && element2.removeAttribute(name2);
            });
          });
        }
        function data(element, attribute) {
          for (var i = 0, attrs = [attribute, "data-" + attribute]; i < attrs.length; i++) {
            if (hasAttr(element, attrs[i])) {
              return attr(element, attrs[i]);
            }
          }
        }
        var inBrowser = typeof window !== "undefined";
        var isIE = inBrowser && /msie|trident/i.test(window.navigator.userAgent);
        var isRtl = inBrowser && attr(document.documentElement, "dir") === "rtl";
        var hasTouchEvents = inBrowser && "ontouchstart" in window;
        var hasPointerEvents = inBrowser && window.PointerEvent;
        var hasTouch = inBrowser && (hasTouchEvents || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints);
        var pointerDown = hasPointerEvents ? "pointerdown" : hasTouchEvents ? "touchstart" : "mousedown";
        var pointerMove = hasPointerEvents ? "pointermove" : hasTouchEvents ? "touchmove" : "mousemove";
        var pointerUp = hasPointerEvents ? "pointerup" : hasTouchEvents ? "touchend" : "mouseup";
        var pointerEnter = hasPointerEvents ? "pointerenter" : hasTouchEvents ? "" : "mouseenter";
        var pointerLeave = hasPointerEvents ? "pointerleave" : hasTouchEvents ? "" : "mouseleave";
        var pointerCancel = hasPointerEvents ? "pointercancel" : "touchcancel";
        var voidElements = {
          area: true,
          base: true,
          br: true,
          col: true,
          embed: true,
          hr: true,
          img: true,
          input: true,
          keygen: true,
          link: true,
          menuitem: true,
          meta: true,
          param: true,
          source: true,
          track: true,
          wbr: true
        };
        function isVoidElement(element) {
          return toNodes(element).some(function(element2) {
            return voidElements[element2.tagName.toLowerCase()];
          });
        }
        function isVisible(element) {
          return toNodes(element).some(function(element2) {
            return element2.offsetWidth || element2.offsetHeight || element2.getClientRects().length;
          });
        }
        var selInput = "input,select,textarea,button";
        function isInput(element) {
          return toNodes(element).some(function(element2) {
            return matches(element2, selInput);
          });
        }
        function isFocusable(element) {
          return isInput(element) || matches(element, "a[href],button") || hasAttr(element, "tabindex");
        }
        function parent(element) {
          element = toNode(element);
          return element && isElement(element.parentNode) && element.parentNode;
        }
        function filter$1(element, selector) {
          return toNodes(element).filter(function(element2) {
            return matches(element2, selector);
          });
        }
        var elProto = inBrowser ? Element.prototype : {};
        var matchesFn = elProto.matches || elProto.webkitMatchesSelector || elProto.msMatchesSelector || noop;
        function matches(element, selector) {
          return toNodes(element).some(function(element2) {
            return matchesFn.call(element2, selector);
          });
        }
        var closestFn = elProto.closest || function(selector) {
          var ancestor = this;
          do {
            if (matches(ancestor, selector)) {
              return ancestor;
            }
          } while (ancestor = parent(ancestor));
        };
        function closest(element, selector) {
          if (startsWith(selector, ">")) {
            selector = selector.slice(1);
          }
          return isElement(element) ? closestFn.call(element, selector) : toNodes(element).map(function(element2) {
            return closest(element2, selector);
          }).filter(Boolean);
        }
        function within(element, selector) {
          return !isString(selector) ? element === selector || (isDocument(selector) ? selector.documentElement : toNode(selector)).contains(toNode(element)) : matches(element, selector) || !!closest(element, selector);
        }
        function parents(element, selector) {
          var elements = [];
          while (element = parent(element)) {
            if (!selector || matches(element, selector)) {
              elements.push(element);
            }
          }
          return elements;
        }
        function children(element, selector) {
          element = toNode(element);
          var children2 = element ? toNodes(element.children) : [];
          return selector ? filter$1(children2, selector) : children2;
        }
        function index(element, ref) {
          return ref ? toNodes(element).indexOf(toNode(ref)) : children(parent(element)).indexOf(element);
        }
        function query(selector, context) {
          return find(selector, getContext(selector, context));
        }
        function queryAll(selector, context) {
          return findAll(selector, getContext(selector, context));
        }
        function getContext(selector, context) {
          if (context === void 0)
            context = document;
          return isString(selector) && isContextSelector(selector) || isDocument(context) ? context : context.ownerDocument;
        }
        function find(selector, context) {
          return toNode(_query(selector, context, "querySelector"));
        }
        function findAll(selector, context) {
          return toNodes(_query(selector, context, "querySelectorAll"));
        }
        function _query(selector, context, queryFn) {
          if (context === void 0)
            context = document;
          if (!selector || !isString(selector)) {
            return selector;
          }
          selector = selector.replace(contextSanitizeRe, "$1 *");
          if (isContextSelector(selector)) {
            selector = splitSelector(selector).map(function(selector2) {
              var ctx = context;
              if (selector2[0] === "!") {
                var selectors = selector2.substr(1).trim().split(" ");
                ctx = closest(parent(context), selectors[0]);
                selector2 = selectors.slice(1).join(" ").trim();
              }
              if (selector2[0] === "-") {
                var selectors$1 = selector2.substr(1).trim().split(" ");
                var prev = (ctx || context).previousElementSibling;
                ctx = matches(prev, selector2.substr(1)) ? prev : null;
                selector2 = selectors$1.slice(1).join(" ");
              }
              if (!ctx) {
                return null;
              }
              return domPath(ctx) + " " + selector2;
            }).filter(Boolean).join(",");
            context = document;
          }
          try {
            return context[queryFn](selector);
          } catch (e) {
            return null;
          }
        }
        var contextSelectorRe = /(^|[^\\],)\s*[!>+~-]/;
        var contextSanitizeRe = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;
        var isContextSelector = memoize(function(selector) {
          return selector.match(contextSelectorRe);
        });
        var selectorRe = /.*?[^\\](?:,|$)/g;
        var splitSelector = memoize(function(selector) {
          return selector.match(selectorRe).map(function(selector2) {
            return selector2.replace(/,$/, "").trim();
          });
        });
        function domPath(element) {
          var names = [];
          while (element.parentNode) {
            if (element.id) {
              names.unshift("#" + escape(element.id));
              break;
            } else {
              var tagName = element.tagName;
              if (tagName !== "HTML") {
                tagName += ":nth-child(" + (index(element) + 1) + ")";
              }
              names.unshift(tagName);
              element = element.parentNode;
            }
          }
          return names.join(" > ");
        }
        var escapeFn = inBrowser && window.CSS && CSS.escape || function(css2) {
          return css2.replace(/([^\x7f-\uFFFF\w-])/g, function(match2) {
            return "\\" + match2;
          });
        };
        function escape(css2) {
          return isString(css2) ? escapeFn.call(null, css2) : "";
        }
        function on() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = getArgs(args);
          var targets = ref[0];
          var type = ref[1];
          var selector = ref[2];
          var listener = ref[3];
          var useCapture = ref[4];
          targets = toEventTargets(targets);
          if (listener.length > 1) {
            listener = detail(listener);
          }
          if (useCapture && useCapture.self) {
            listener = selfFilter(listener);
          }
          if (selector) {
            listener = delegate(selector, listener);
          }
          useCapture = useCaptureFilter(useCapture);
          type.split(" ").forEach(function(type2) {
            return targets.forEach(function(target) {
              return target.addEventListener(type2, listener, useCapture);
            });
          });
          return function() {
            return off(targets, type, listener, useCapture);
          };
        }
        function off(targets, type, listener, useCapture) {
          if (useCapture === void 0)
            useCapture = false;
          useCapture = useCaptureFilter(useCapture);
          targets = toEventTargets(targets);
          type.split(" ").forEach(function(type2) {
            return targets.forEach(function(target) {
              return target.removeEventListener(type2, listener, useCapture);
            });
          });
        }
        function once() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = getArgs(args);
          var element = ref[0];
          var type = ref[1];
          var selector = ref[2];
          var listener = ref[3];
          var useCapture = ref[4];
          var condition = ref[5];
          var off2 = on(element, type, selector, function(e) {
            var result = !condition || condition(e);
            if (result) {
              off2();
              listener(e, result);
            }
          }, useCapture);
          return off2;
        }
        function trigger(targets, event, detail2) {
          return toEventTargets(targets).reduce(function(notCanceled, target) {
            return notCanceled && target.dispatchEvent(createEvent(event, true, true, detail2));
          }, true);
        }
        function createEvent(e, bubbles, cancelable, detail2) {
          if (bubbles === void 0)
            bubbles = true;
          if (cancelable === void 0)
            cancelable = false;
          if (isString(e)) {
            var event = document.createEvent("CustomEvent");
            event.initCustomEvent(e, bubbles, cancelable, detail2);
            e = event;
          }
          return e;
        }
        function getArgs(args) {
          if (isFunction(args[2])) {
            args.splice(2, 0, false);
          }
          return args;
        }
        function delegate(selector, listener) {
          var this$1 = this;
          return function(e) {
            var current = selector[0] === ">" ? findAll(selector, e.currentTarget).reverse().filter(function(element) {
              return within(e.target, element);
            })[0] : closest(e.target, selector);
            if (current) {
              e.current = current;
              listener.call(this$1, e);
            }
          };
        }
        function detail(listener) {
          return function(e) {
            return isArray(e.detail) ? listener.apply(void 0, [e].concat(e.detail)) : listener(e);
          };
        }
        function selfFilter(listener) {
          return function(e) {
            if (e.target === e.currentTarget || e.target === e.current) {
              return listener.call(null, e);
            }
          };
        }
        function useCaptureFilter(options) {
          return options && isIE && !isBoolean(options) ? !!options.capture : options;
        }
        function isEventTarget(target) {
          return target && "addEventListener" in target;
        }
        function toEventTarget(target) {
          return isEventTarget(target) ? target : toNode(target);
        }
        function toEventTargets(target) {
          return isArray(target) ? target.map(toEventTarget).filter(Boolean) : isString(target) ? findAll(target) : isEventTarget(target) ? [target] : toNodes(target);
        }
        function isTouch(e) {
          return e.pointerType === "touch" || !!e.touches;
        }
        function getEventPos(e) {
          var touches = e.touches;
          var changedTouches = e.changedTouches;
          var ref = touches && touches[0] || changedTouches && changedTouches[0] || e;
          var x = ref.clientX;
          var y = ref.clientY;
          return { x, y };
        }
        var Promise$1 = inBrowser && window.Promise || PromiseFn;
        var Deferred = function() {
          var this$1 = this;
          this.promise = new Promise$1(function(resolve, reject) {
            this$1.reject = reject;
            this$1.resolve = resolve;
          });
        };
        var RESOLVED = 0;
        var REJECTED = 1;
        var PENDING = 2;
        var async = inBrowser && window.setImmediate || setTimeout;
        function PromiseFn(executor) {
          this.state = PENDING;
          this.value = void 0;
          this.deferred = [];
          var promise = this;
          try {
            executor(function(x) {
              promise.resolve(x);
            }, function(r) {
              promise.reject(r);
            });
          } catch (e) {
            promise.reject(e);
          }
        }
        PromiseFn.reject = function(r) {
          return new PromiseFn(function(resolve, reject) {
            reject(r);
          });
        };
        PromiseFn.resolve = function(x) {
          return new PromiseFn(function(resolve, reject) {
            resolve(x);
          });
        };
        PromiseFn.all = function all(iterable) {
          return new PromiseFn(function(resolve, reject) {
            var result = [];
            var count = 0;
            if (iterable.length === 0) {
              resolve(result);
            }
            function resolver(i2) {
              return function(x) {
                result[i2] = x;
                count += 1;
                if (count === iterable.length) {
                  resolve(result);
                }
              };
            }
            for (var i = 0; i < iterable.length; i += 1) {
              PromiseFn.resolve(iterable[i]).then(resolver(i), reject);
            }
          });
        };
        PromiseFn.race = function race(iterable) {
          return new PromiseFn(function(resolve, reject) {
            for (var i = 0; i < iterable.length; i += 1) {
              PromiseFn.resolve(iterable[i]).then(resolve, reject);
            }
          });
        };
        var p = PromiseFn.prototype;
        p.resolve = function resolve(x) {
          var promise = this;
          if (promise.state === PENDING) {
            if (x === promise) {
              throw new TypeError("Promise settled with itself.");
            }
            var called = false;
            try {
              var then = x && x.then;
              if (x !== null && isObject(x) && isFunction(then)) {
                then.call(x, function(x2) {
                  if (!called) {
                    promise.resolve(x2);
                  }
                  called = true;
                }, function(r) {
                  if (!called) {
                    promise.reject(r);
                  }
                  called = true;
                });
                return;
              }
            } catch (e) {
              if (!called) {
                promise.reject(e);
              }
              return;
            }
            promise.state = RESOLVED;
            promise.value = x;
            promise.notify();
          }
        };
        p.reject = function reject(reason) {
          var promise = this;
          if (promise.state === PENDING) {
            if (reason === promise) {
              throw new TypeError("Promise settled with itself.");
            }
            promise.state = REJECTED;
            promise.value = reason;
            promise.notify();
          }
        };
        p.notify = function notify() {
          var this$1 = this;
          async(function() {
            if (this$1.state !== PENDING) {
              while (this$1.deferred.length) {
                var ref = this$1.deferred.shift();
                var onResolved = ref[0];
                var onRejected = ref[1];
                var resolve = ref[2];
                var reject = ref[3];
                try {
                  if (this$1.state === RESOLVED) {
                    if (isFunction(onResolved)) {
                      resolve(onResolved.call(void 0, this$1.value));
                    } else {
                      resolve(this$1.value);
                    }
                  } else if (this$1.state === REJECTED) {
                    if (isFunction(onRejected)) {
                      resolve(onRejected.call(void 0, this$1.value));
                    } else {
                      reject(this$1.value);
                    }
                  }
                } catch (e) {
                  reject(e);
                }
              }
            }
          });
        };
        p.then = function then(onResolved, onRejected) {
          var this$1 = this;
          return new PromiseFn(function(resolve, reject) {
            this$1.deferred.push([onResolved, onRejected, resolve, reject]);
            this$1.notify();
          });
        };
        p.catch = function(onRejected) {
          return this.then(void 0, onRejected);
        };
        function ajax(url, options) {
          var env = assign({
            data: null,
            method: "GET",
            headers: {},
            xhr: new XMLHttpRequest(),
            beforeSend: noop,
            responseType: ""
          }, options);
          return Promise$1.resolve().then(function() {
            return env.beforeSend(env);
          }).then(function() {
            return send(url, env);
          });
        }
        function send(url, env) {
          return new Promise$1(function(resolve, reject) {
            var xhr = env.xhr;
            for (var prop in env) {
              if (prop in xhr) {
                try {
                  xhr[prop] = env[prop];
                } catch (e) {
                }
              }
            }
            xhr.open(env.method.toUpperCase(), url);
            for (var header in env.headers) {
              xhr.setRequestHeader(header, env.headers[header]);
            }
            on(xhr, "load", function() {
              if (xhr.status === 0 || xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                if (env.responseType === "json" && isString(xhr.response)) {
                  xhr = assign(copyXhr(xhr), { response: JSON.parse(xhr.response) });
                }
                resolve(xhr);
              } else {
                reject(assign(Error(xhr.statusText), {
                  xhr,
                  status: xhr.status
                }));
              }
            });
            on(xhr, "error", function() {
              return reject(assign(Error("Network Error"), { xhr }));
            });
            on(xhr, "timeout", function() {
              return reject(assign(Error("Network Timeout"), { xhr }));
            });
            xhr.send(env.data);
          });
        }
        function getImage(src, srcset, sizes) {
          return new Promise$1(function(resolve, reject) {
            var img2 = new Image();
            img2.onerror = function(e) {
              return reject(e);
            };
            img2.onload = function() {
              return resolve(img2);
            };
            sizes && (img2.sizes = sizes);
            srcset && (img2.srcset = srcset);
            img2.src = src;
          });
        }
        function copyXhr(source) {
          var target = {};
          for (var key2 in source) {
            target[key2] = source[key2];
          }
          return target;
        }
        function ready(fn) {
          if (document.readyState !== "loading") {
            fn();
            return;
          }
          var unbind = on(document, "DOMContentLoaded", function() {
            unbind();
            fn();
          });
        }
        function empty(element) {
          element = $(element);
          element.innerHTML = "";
          return element;
        }
        function html(parent2, html2) {
          parent2 = $(parent2);
          return isUndefined(html2) ? parent2.innerHTML : append(parent2.hasChildNodes() ? empty(parent2) : parent2, html2);
        }
        function prepend(parent2, element) {
          parent2 = $(parent2);
          if (!parent2.hasChildNodes()) {
            return append(parent2, element);
          } else {
            return insertNodes(element, function(element2) {
              return parent2.insertBefore(element2, parent2.firstChild);
            });
          }
        }
        function append(parent2, element) {
          parent2 = $(parent2);
          return insertNodes(element, function(element2) {
            return parent2.appendChild(element2);
          });
        }
        function before(ref, element) {
          ref = $(ref);
          return insertNodes(element, function(element2) {
            return ref.parentNode.insertBefore(element2, ref);
          });
        }
        function after(ref, element) {
          ref = $(ref);
          return insertNodes(element, function(element2) {
            return ref.nextSibling ? before(ref.nextSibling, element2) : append(ref.parentNode, element2);
          });
        }
        function insertNodes(element, fn) {
          element = isString(element) ? fragment(element) : element;
          return element ? "length" in element ? toNodes(element).map(fn) : fn(element) : null;
        }
        function remove$1(element) {
          toNodes(element).forEach(function(element2) {
            return element2.parentNode && element2.parentNode.removeChild(element2);
          });
        }
        function wrapAll(element, structure) {
          structure = toNode(before(element, structure));
          while (structure.firstChild) {
            structure = structure.firstChild;
          }
          append(structure, element);
          return structure;
        }
        function wrapInner(element, structure) {
          return toNodes(toNodes(element).map(function(element2) {
            return element2.hasChildNodes ? wrapAll(toNodes(element2.childNodes), structure) : append(element2, structure);
          }));
        }
        function unwrap(element) {
          toNodes(element).map(parent).filter(function(value, index2, self2) {
            return self2.indexOf(value) === index2;
          }).forEach(function(parent2) {
            before(parent2, parent2.childNodes);
            remove$1(parent2);
          });
        }
        var fragmentRe = /^\s*<(\w+|!)[^>]*>/;
        var singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
        function fragment(html2) {
          var matches2 = singleTagRe.exec(html2);
          if (matches2) {
            return document.createElement(matches2[1]);
          }
          var container = document.createElement("div");
          if (fragmentRe.test(html2)) {
            container.insertAdjacentHTML("beforeend", html2.trim());
          } else {
            container.textContent = html2;
          }
          return container.childNodes.length > 1 ? toNodes(container.childNodes) : container.firstChild;
        }
        function apply$1(node, fn) {
          if (!isElement(node)) {
            return;
          }
          fn(node);
          node = node.firstElementChild;
          while (node) {
            var next = node.nextElementSibling;
            apply$1(node, fn);
            node = next;
          }
        }
        function $(selector, context) {
          return isHtml(selector) ? toNode(fragment(selector)) : find(selector, context);
        }
        function $$(selector, context) {
          return isHtml(selector) ? toNodes(fragment(selector)) : findAll(selector, context);
        }
        function isHtml(str) {
          return isString(str) && (str[0] === "<" || str.match(/^\s*</));
        }
        function addClass(element) {
          var args = [], len = arguments.length - 1;
          while (len-- > 0)
            args[len] = arguments[len + 1];
          apply(element, args, "add");
        }
        function removeClass(element) {
          var args = [], len = arguments.length - 1;
          while (len-- > 0)
            args[len] = arguments[len + 1];
          apply(element, args, "remove");
        }
        function removeClasses(element, cls) {
          attr(element, "class", function(value) {
            return (value || "").replace(new RegExp("\\b" + cls + "\\b", "g"), "");
          });
        }
        function replaceClass(element) {
          var args = [], len = arguments.length - 1;
          while (len-- > 0)
            args[len] = arguments[len + 1];
          args[0] && removeClass(element, args[0]);
          args[1] && addClass(element, args[1]);
        }
        function hasClass(element, cls) {
          var assign2;
          assign2 = getClasses(cls), cls = assign2[0];
          var nodes = toNodes(element);
          for (var n = 0; n < nodes.length; n++) {
            if (cls && nodes[n].classList.contains(cls)) {
              return true;
            }
          }
          return false;
        }
        function toggleClass(element, cls, force) {
          cls = getClasses(cls);
          var nodes = toNodes(element);
          for (var n = 0; n < nodes.length; n++) {
            var list = nodes[n].classList;
            for (var i = 0; i < cls.length; i++) {
              if (isUndefined(force)) {
                list.toggle(cls[i]);
              } else if (supports.Force) {
                list.toggle(cls[i], !!force);
              } else {
                list[force ? "add" : "remove"](cls[i]);
              }
            }
          }
        }
        function apply(element, args, fn) {
          var ref;
          args = args.reduce(function(args2, arg) {
            return args2.concat(getClasses(arg));
          }, []);
          var nodes = toNodes(element);
          var loop = function(n2) {
            if (supports.Multiple) {
              (ref = nodes[n2].classList)[fn].apply(ref, args);
            } else {
              args.forEach(function(cls) {
                return nodes[n2].classList[fn](cls);
              });
            }
          };
          for (var n = 0; n < nodes.length; n++)
            loop(n);
        }
        function getClasses(str) {
          return String(str).split(/\s|,/).filter(Boolean);
        }
        var supports = {
          get Multiple() {
            return this.get("Multiple");
          },
          get Force() {
            return this.get("Force");
          },
          get: function(key2) {
            var ref = document.createElement("_");
            var classList = ref.classList;
            classList.add("a", "b");
            classList.toggle("c", false);
            supports = {
              Multiple: classList.contains("b"),
              Force: !classList.contains("c")
            };
            return supports[key2];
          }
        };
        var cssNumber = {
          "animation-iteration-count": true,
          "column-count": true,
          "fill-opacity": true,
          "flex-grow": true,
          "flex-shrink": true,
          "font-weight": true,
          "line-height": true,
          "opacity": true,
          "order": true,
          "orphans": true,
          "stroke-dasharray": true,
          "stroke-dashoffset": true,
          "widows": true,
          "z-index": true,
          "zoom": true
        };
        function css(element, property, value, priority) {
          if (priority === void 0)
            priority = "";
          return toNodes(element).map(function(element2) {
            if (isString(property)) {
              property = propName(property);
              if (isUndefined(value)) {
                return getStyle(element2, property);
              } else if (!value && !isNumber(value)) {
                element2.style.removeProperty(property);
              } else {
                element2.style.setProperty(property, isNumeric(value) && !cssNumber[property] ? value + "px" : value, priority);
              }
            } else if (isArray(property)) {
              var styles = getStyles(element2);
              return property.reduce(function(props2, property2) {
                props2[property2] = styles[propName(property2)];
                return props2;
              }, {});
            } else if (isObject(property)) {
              priority = value;
              each(property, function(value2, property2) {
                return css(element2, property2, value2, priority);
              });
            }
            return element2;
          })[0];
        }
        function getStyles(element, pseudoElt) {
          return toWindow(element).getComputedStyle(element, pseudoElt);
        }
        function getStyle(element, property, pseudoElt) {
          return getStyles(element, pseudoElt)[property];
        }
        var parseCssVar = memoize(function(name) {
          var element = append(document.documentElement, document.createElement("div"));
          addClass(element, "uk-" + name);
          name = getStyle(element, "content", ":before").replace(/^["'](.*)["']$/, "$1");
          remove$1(element);
          return name;
        });
        function getCssVar(name) {
          return !isIE ? getStyles(document.documentElement).getPropertyValue("--uk-" + name) : parseCssVar(name);
        }
        var propName = memoize(function(name) {
          return vendorPropName(name);
        });
        var cssPrefixes = ["webkit", "moz", "ms"];
        function vendorPropName(name) {
          name = hyphenate(name);
          var ref = document.documentElement;
          var style = ref.style;
          if (name in style) {
            return name;
          }
          var i = cssPrefixes.length, prefixedName;
          while (i--) {
            prefixedName = "-" + cssPrefixes[i] + "-" + name;
            if (prefixedName in style) {
              return prefixedName;
            }
          }
        }
        function transition(element, props2, duration, timing) {
          if (duration === void 0)
            duration = 400;
          if (timing === void 0)
            timing = "linear";
          return Promise$1.all(toNodes(element).map(function(element2) {
            return new Promise$1(function(resolve, reject) {
              for (var name in props2) {
                var value = css(element2, name);
                if (value === "") {
                  css(element2, name, value);
                }
              }
              var timer = setTimeout(function() {
                return trigger(element2, "transitionend");
              }, duration);
              once(element2, "transitionend transitioncanceled", function(ref) {
                var type = ref.type;
                clearTimeout(timer);
                removeClass(element2, "uk-transition");
                css(element2, {
                  transitionProperty: "",
                  transitionDuration: "",
                  transitionTimingFunction: ""
                });
                type === "transitioncanceled" ? reject() : resolve(element2);
              }, { self: true });
              addClass(element2, "uk-transition");
              css(element2, assign({
                transitionProperty: Object.keys(props2).map(propName).join(","),
                transitionDuration: duration + "ms",
                transitionTimingFunction: timing
              }, props2));
            });
          }));
        }
        var Transition = {
          start: transition,
          stop: function(element) {
            trigger(element, "transitionend");
            return Promise$1.resolve();
          },
          cancel: function(element) {
            trigger(element, "transitioncanceled");
          },
          inProgress: function(element) {
            return hasClass(element, "uk-transition");
          }
        };
        var animationPrefix = "uk-animation-";
        function animate$1(element, animation, duration, origin, out) {
          if (duration === void 0)
            duration = 200;
          return Promise$1.all(toNodes(element).map(function(element2) {
            return new Promise$1(function(resolve, reject) {
              trigger(element2, "animationcanceled");
              var timer = setTimeout(function() {
                return trigger(element2, "animationend");
              }, duration);
              once(element2, "animationend animationcanceled", function(ref) {
                var type = ref.type;
                clearTimeout(timer);
                type === "animationcanceled" ? reject() : resolve(element2);
                css(element2, "animationDuration", "");
                removeClasses(element2, animationPrefix + "\\S*");
              }, { self: true });
              css(element2, "animationDuration", duration + "ms");
              addClass(element2, animation, animationPrefix + (out ? "leave" : "enter"));
              if (startsWith(animation, animationPrefix)) {
                origin && addClass(element2, "uk-transform-origin-" + origin);
                out && addClass(element2, animationPrefix + "reverse");
              }
            });
          }));
        }
        var inProgress = new RegExp(animationPrefix + "(enter|leave)");
        var Animation = {
          in: animate$1,
          out: function(element, animation, duration, origin) {
            return animate$1(element, animation, duration, origin, true);
          },
          inProgress: function(element) {
            return inProgress.test(attr(element, "class"));
          },
          cancel: function(element) {
            trigger(element, "animationcanceled");
          }
        };
        var dirs$1 = {
          width: ["left", "right"],
          height: ["top", "bottom"]
        };
        function dimensions(element) {
          var rect = isElement(element) ? toNode(element).getBoundingClientRect() : { height: height(element), width: width(element), top: 0, left: 0 };
          return {
            height: rect.height,
            width: rect.width,
            top: rect.top,
            left: rect.left,
            bottom: rect.top + rect.height,
            right: rect.left + rect.width
          };
        }
        function offset(element, coordinates) {
          var currentOffset = dimensions(element);
          var ref = toWindow(element);
          var pageYOffset = ref.pageYOffset;
          var pageXOffset = ref.pageXOffset;
          var offsetBy = { height: pageYOffset, width: pageXOffset };
          for (var dir in dirs$1) {
            for (var i in dirs$1[dir]) {
              currentOffset[dirs$1[dir][i]] += offsetBy[dir];
            }
          }
          if (!coordinates) {
            return currentOffset;
          }
          var pos = css(element, "position");
          each(css(element, ["left", "top"]), function(value, prop) {
            return css(element, prop, coordinates[prop] - currentOffset[prop] + toFloat(pos === "absolute" && value === "auto" ? position(element)[prop] : value));
          });
        }
        function position(element) {
          var ref = offset(element);
          var top = ref.top;
          var left = ref.left;
          var ref$1 = toNode(element);
          var ref$1_ownerDocument = ref$1.ownerDocument;
          var body = ref$1_ownerDocument.body;
          var documentElement = ref$1_ownerDocument.documentElement;
          var offsetParent = ref$1.offsetParent;
          var parent2 = offsetParent || documentElement;
          while (parent2 && (parent2 === body || parent2 === documentElement) && css(parent2, "position") === "static") {
            parent2 = parent2.parentNode;
          }
          if (isElement(parent2)) {
            var parentOffset = offset(parent2);
            top -= parentOffset.top + toFloat(css(parent2, "borderTopWidth"));
            left -= parentOffset.left + toFloat(css(parent2, "borderLeftWidth"));
          }
          return {
            top: top - toFloat(css(element, "marginTop")),
            left: left - toFloat(css(element, "marginLeft"))
          };
        }
        function offsetPosition(element) {
          var offset2 = [0, 0];
          element = toNode(element);
          do {
            offset2[0] += element.offsetTop;
            offset2[1] += element.offsetLeft;
            if (css(element, "position") === "fixed") {
              var win = toWindow(element);
              offset2[0] += win.pageYOffset;
              offset2[1] += win.pageXOffset;
              return offset2;
            }
          } while (element = element.offsetParent);
          return offset2;
        }
        var height = dimension("height");
        var width = dimension("width");
        function dimension(prop) {
          var propName2 = ucfirst(prop);
          return function(element, value) {
            if (isUndefined(value)) {
              if (isWindow(element)) {
                return element["inner" + propName2];
              }
              if (isDocument(element)) {
                var doc = element.documentElement;
                return Math.max(doc["offset" + propName2], doc["scroll" + propName2]);
              }
              element = toNode(element);
              value = css(element, prop);
              value = value === "auto" ? element["offset" + propName2] : toFloat(value) || 0;
              return value - boxModelAdjust(element, prop);
            } else {
              return css(element, prop, !value && value !== 0 ? "" : +value + boxModelAdjust(element, prop) + "px");
            }
          };
        }
        function boxModelAdjust(element, prop, sizing) {
          if (sizing === void 0)
            sizing = "border-box";
          return css(element, "boxSizing") === sizing ? dirs$1[prop].map(ucfirst).reduce(function(value, prop2) {
            return value + toFloat(css(element, "padding" + prop2)) + toFloat(css(element, "border" + prop2 + "Width"));
          }, 0) : 0;
        }
        function flipPosition(pos) {
          for (var dir in dirs$1) {
            for (var i in dirs$1[dir]) {
              if (dirs$1[dir][i] === pos) {
                return dirs$1[dir][1 - i];
              }
            }
          }
          return pos;
        }
        function toPx(value, property, element) {
          if (property === void 0)
            property = "width";
          if (element === void 0)
            element = window;
          return isNumeric(value) ? +value : endsWith(value, "vh") ? percent(height(toWindow(element)), value) : endsWith(value, "vw") ? percent(width(toWindow(element)), value) : endsWith(value, "%") ? percent(dimensions(element)[property], value) : toFloat(value);
        }
        function percent(base, value) {
          return base * toFloat(value) / 100;
        }
        var fastdom = {
          reads: [],
          writes: [],
          read: function(task) {
            this.reads.push(task);
            scheduleFlush();
            return task;
          },
          write: function(task) {
            this.writes.push(task);
            scheduleFlush();
            return task;
          },
          clear: function(task) {
            remove(this.reads, task);
            remove(this.writes, task);
          },
          flush
        };
        function flush(recursion) {
          if (recursion === void 0)
            recursion = 1;
          runTasks(fastdom.reads);
          runTasks(fastdom.writes.splice(0));
          fastdom.scheduled = false;
          if (fastdom.reads.length || fastdom.writes.length) {
            scheduleFlush(recursion + 1);
          }
        }
        var RECURSION_LIMIT = 4;
        function scheduleFlush(recursion) {
          if (fastdom.scheduled) {
            return;
          }
          fastdom.scheduled = true;
          if (recursion && recursion < RECURSION_LIMIT) {
            Promise$1.resolve().then(function() {
              return flush(recursion);
            });
          } else {
            requestAnimationFrame(function() {
              return flush();
            });
          }
        }
        function runTasks(tasks) {
          var task;
          while (task = tasks.shift()) {
            try {
              task();
            } catch (e) {
              console.error(e);
            }
          }
        }
        function remove(array, item) {
          var index2 = array.indexOf(item);
          return ~index2 && array.splice(index2, 1);
        }
        function MouseTracker() {
        }
        MouseTracker.prototype = {
          positions: [],
          init: function() {
            var this$1 = this;
            this.positions = [];
            var position2;
            this.unbind = on(document, "mousemove", function(e) {
              return position2 = getEventPos(e);
            });
            this.interval = setInterval(function() {
              if (!position2) {
                return;
              }
              this$1.positions.push(position2);
              if (this$1.positions.length > 5) {
                this$1.positions.shift();
              }
            }, 50);
          },
          cancel: function() {
            this.unbind && this.unbind();
            this.interval && clearInterval(this.interval);
          },
          movesTo: function(target) {
            if (this.positions.length < 2) {
              return false;
            }
            var p2 = target.getBoundingClientRect();
            var left = p2.left;
            var right = p2.right;
            var top = p2.top;
            var bottom = p2.bottom;
            var ref = this.positions;
            var prevPosition = ref[0];
            var position2 = last(this.positions);
            var path = [prevPosition, position2];
            if (pointInRect(position2, p2)) {
              return false;
            }
            var diagonals = [[{ x: left, y: top }, { x: right, y: bottom }], [{ x: left, y: bottom }, { x: right, y: top }]];
            return diagonals.some(function(diagonal) {
              var intersection = intersect(path, diagonal);
              return intersection && pointInRect(intersection, p2);
            });
          }
        };
        function intersect(ref, ref$1) {
          var ref_0 = ref[0];
          var x1 = ref_0.x;
          var y1 = ref_0.y;
          var ref_1 = ref[1];
          var x2 = ref_1.x;
          var y2 = ref_1.y;
          var ref$1_0 = ref$1[0];
          var x3 = ref$1_0.x;
          var y3 = ref$1_0.y;
          var ref$1_1 = ref$1[1];
          var x4 = ref$1_1.x;
          var y4 = ref$1_1.y;
          var denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
          if (denominator === 0) {
            return false;
          }
          var ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
          if (ua < 0) {
            return false;
          }
          return { x: x1 + ua * (x2 - x1), y: y1 + ua * (y2 - y1) };
        }
        var strats = {};
        strats.events = strats.created = strats.beforeConnect = strats.connected = strats.beforeDisconnect = strats.disconnected = strats.destroy = concatStrat;
        strats.args = function(parentVal, childVal) {
          return childVal !== false && concatStrat(childVal || parentVal);
        };
        strats.update = function(parentVal, childVal) {
          return sortBy$1(concatStrat(parentVal, isFunction(childVal) ? { read: childVal } : childVal), "order");
        };
        strats.props = function(parentVal, childVal) {
          if (isArray(childVal)) {
            childVal = childVal.reduce(function(value, key2) {
              value[key2] = String;
              return value;
            }, {});
          }
          return strats.methods(parentVal, childVal);
        };
        strats.computed = strats.methods = function(parentVal, childVal) {
          return childVal ? parentVal ? assign({}, parentVal, childVal) : childVal : parentVal;
        };
        strats.data = function(parentVal, childVal, vm) {
          if (!vm) {
            if (!childVal) {
              return parentVal;
            }
            if (!parentVal) {
              return childVal;
            }
            return function(vm2) {
              return mergeFnData(parentVal, childVal, vm2);
            };
          }
          return mergeFnData(parentVal, childVal, vm);
        };
        function mergeFnData(parentVal, childVal, vm) {
          return strats.computed(isFunction(parentVal) ? parentVal.call(vm, vm) : parentVal, isFunction(childVal) ? childVal.call(vm, vm) : childVal);
        }
        function concatStrat(parentVal, childVal) {
          parentVal = parentVal && !isArray(parentVal) ? [parentVal] : parentVal;
          return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
        }
        function defaultStrat(parentVal, childVal) {
          return isUndefined(childVal) ? parentVal : childVal;
        }
        function mergeOptions(parent2, child, vm) {
          var options = {};
          if (isFunction(child)) {
            child = child.options;
          }
          if (child.extends) {
            parent2 = mergeOptions(parent2, child.extends, vm);
          }
          if (child.mixins) {
            for (var i = 0, l = child.mixins.length; i < l; i++) {
              parent2 = mergeOptions(parent2, child.mixins[i], vm);
            }
          }
          for (var key2 in parent2) {
            mergeKey(key2);
          }
          for (var key$1 in child) {
            if (!hasOwn(parent2, key$1)) {
              mergeKey(key$1);
            }
          }
          function mergeKey(key3) {
            options[key3] = (strats[key3] || defaultStrat)(parent2[key3], child[key3], vm);
          }
          return options;
        }
        function parseOptions(options, args) {
          var obj2;
          if (args === void 0)
            args = [];
          try {
            return !options ? {} : startsWith(options, "{") ? JSON.parse(options) : args.length && !includes(options, ":") ? (obj2 = {}, obj2[args[0]] = options, obj2) : options.split(";").reduce(function(options2, option) {
              var ref = option.split(/:(.*)/);
              var key2 = ref[0];
              var value = ref[1];
              if (key2 && !isUndefined(value)) {
                options2[key2.trim()] = value.trim();
              }
              return options2;
            }, {});
          } catch (e) {
            return {};
          }
        }
        function play(el) {
          if (isIFrame(el)) {
            call(el, { func: "playVideo", method: "play" });
          }
          if (isHTML5(el)) {
            try {
              el.play().catch(noop);
            } catch (e) {
            }
          }
        }
        function pause(el) {
          if (isIFrame(el)) {
            call(el, { func: "pauseVideo", method: "pause" });
          }
          if (isHTML5(el)) {
            el.pause();
          }
        }
        function mute(el) {
          if (isIFrame(el)) {
            call(el, { func: "mute", method: "setVolume", value: 0 });
          }
          if (isHTML5(el)) {
            el.muted = true;
          }
        }
        function isHTML5(el) {
          return el && el.tagName === "VIDEO";
        }
        function isIFrame(el) {
          return el && el.tagName === "IFRAME" && (isYoutube(el) || isVimeo(el));
        }
        function isYoutube(el) {
          return !!el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
        }
        function isVimeo(el) {
          return !!el.src.match(/vimeo\.com\/video\/.*/);
        }
        function call(el, cmd) {
          enableApi(el).then(function() {
            return post(el, cmd);
          });
        }
        function post(el, cmd) {
          try {
            el.contentWindow.postMessage(JSON.stringify(assign({ event: "command" }, cmd)), "*");
          } catch (e) {
          }
        }
        var stateKey$1 = "_ukPlayer";
        var counter = 0;
        function enableApi(el) {
          if (el[stateKey$1]) {
            return el[stateKey$1];
          }
          var youtube = isYoutube(el);
          var vimeo = isVimeo(el);
          var id = ++counter;
          var poller;
          return el[stateKey$1] = new Promise$1(function(resolve) {
            youtube && once(el, "load", function() {
              var listener = function() {
                return post(el, { event: "listening", id });
              };
              poller = setInterval(listener, 100);
              listener();
            });
            once(window, "message", resolve, false, function(ref) {
              var data2 = ref.data;
              try {
                data2 = JSON.parse(data2);
                return data2 && (youtube && data2.id === id && data2.event === "onReady" || vimeo && Number(data2.player_id) === id);
              } catch (e) {
              }
            });
            el.src = "" + el.src + (includes(el.src, "?") ? "&" : "?") + (youtube ? "enablejsapi=1" : "api=1&player_id=" + id);
          }).then(function() {
            return clearInterval(poller);
          });
        }
        function isInView(element, offsetTop, offsetLeft) {
          if (offsetTop === void 0)
            offsetTop = 0;
          if (offsetLeft === void 0)
            offsetLeft = 0;
          if (!isVisible(element)) {
            return false;
          }
          return intersectRect.apply(void 0, scrollParents(element).map(function(parent2) {
            var ref = offset(getViewport$1(parent2));
            var top = ref.top;
            var left = ref.left;
            var bottom = ref.bottom;
            var right = ref.right;
            return {
              top: top - offsetTop,
              left: left - offsetLeft,
              bottom: bottom + offsetTop,
              right: right + offsetLeft
            };
          }).concat(offset(element)));
        }
        function scrollTop(element, top) {
          if (isWindow(element) || isDocument(element)) {
            element = getScrollingElement(element);
          } else {
            element = toNode(element);
          }
          element.scrollTop = top;
        }
        function scrollIntoView(element, ref) {
          if (ref === void 0)
            ref = {};
          var offsetBy = ref.offset;
          if (offsetBy === void 0)
            offsetBy = 0;
          var parents2 = isVisible(element) ? scrollParents(element) : [];
          var diff = 0;
          return parents2.reduce(function(fn, scrollElement, i) {
            var scrollTop2 = scrollElement.scrollTop;
            var scrollHeight = scrollElement.scrollHeight;
            var maxScroll = scrollHeight - getViewportClientHeight(scrollElement);
            var top = Math.ceil(offset(parents2[i - 1] || element).top - offset(getViewport$1(scrollElement)).top - offsetBy + diff + scrollTop2);
            if (top > maxScroll) {
              diff = top - maxScroll;
              top = maxScroll;
            } else {
              diff = 0;
            }
            return function() {
              return scrollTo(scrollElement, top - scrollTop2).then(fn);
            };
          }, function() {
            return Promise$1.resolve();
          })();
          function scrollTo(element2, top) {
            return new Promise$1(function(resolve) {
              var scroll2 = element2.scrollTop;
              var duration = getDuration(Math.abs(top));
              var start = Date.now();
              (function step() {
                var percent2 = ease2(clamp((Date.now() - start) / duration));
                scrollTop(element2, scroll2 + top * percent2);
                if (percent2 !== 1) {
                  requestAnimationFrame(step);
                } else {
                  resolve();
                }
              })();
            });
          }
          function getDuration(dist) {
            return 40 * Math.pow(dist, 0.375);
          }
          function ease2(k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
          }
        }
        function scrolledOver(element, heightOffset) {
          if (heightOffset === void 0)
            heightOffset = 0;
          if (!isVisible(element)) {
            return 0;
          }
          var ref = scrollParents(element, /auto|scroll/, true);
          var scrollElement = ref[0];
          var scrollHeight = scrollElement.scrollHeight;
          var scrollTop2 = scrollElement.scrollTop;
          var clientHeight = getViewportClientHeight(scrollElement);
          var viewportTop = offsetPosition(element)[0] - scrollTop2 - offsetPosition(scrollElement)[0];
          var viewportDist = Math.min(clientHeight, viewportTop + scrollTop2);
          var top = viewportTop - viewportDist;
          var dist = Math.min(element.offsetHeight + heightOffset + viewportDist, scrollHeight - (viewportTop + scrollTop2), scrollHeight - clientHeight);
          return clamp(-1 * top / dist);
        }
        function scrollParents(element, overflowRe, scrollable) {
          if (overflowRe === void 0)
            overflowRe = /auto|scroll|hidden/;
          if (scrollable === void 0)
            scrollable = false;
          var scrollEl = getScrollingElement(element);
          var ancestors = parents(element).reverse();
          ancestors = ancestors.slice(ancestors.indexOf(scrollEl) + 1);
          var fixedIndex = findIndex(ancestors, function(el) {
            return css(el, "position") === "fixed";
          });
          if (~fixedIndex) {
            ancestors = ancestors.slice(fixedIndex);
          }
          return [scrollEl].concat(ancestors.filter(function(parent2) {
            return overflowRe.test(css(parent2, "overflow")) && (!scrollable || parent2.scrollHeight > getViewportClientHeight(parent2));
          })).reverse();
        }
        function getViewport$1(scrollElement) {
          return scrollElement === getScrollingElement(scrollElement) ? window : scrollElement;
        }
        function getViewportClientHeight(scrollElement) {
          return (scrollElement === getScrollingElement(scrollElement) ? document.documentElement : scrollElement).clientHeight;
        }
        function getScrollingElement(element) {
          var ref = toWindow(element);
          var document2 = ref.document;
          return document2.scrollingElement || document2.documentElement;
        }
        var dirs = {
          width: ["x", "left", "right"],
          height: ["y", "top", "bottom"]
        };
        function positionAt(element, target, elAttach, targetAttach, elOffset, targetOffset, flip, boundary) {
          elAttach = getPos(elAttach);
          targetAttach = getPos(targetAttach);
          var flipped = { element: elAttach, target: targetAttach };
          if (!element || !target) {
            return flipped;
          }
          var dim = offset(element);
          var targetDim = offset(target);
          var position2 = targetDim;
          moveTo(position2, elAttach, dim, -1);
          moveTo(position2, targetAttach, targetDim, 1);
          elOffset = getOffsets(elOffset, dim.width, dim.height);
          targetOffset = getOffsets(targetOffset, targetDim.width, targetDim.height);
          elOffset["x"] += targetOffset["x"];
          elOffset["y"] += targetOffset["y"];
          position2.left += elOffset["x"];
          position2.top += elOffset["y"];
          if (flip) {
            var boundaries = scrollParents(element).map(getViewport$1);
            if (boundary && !includes(boundaries, boundary)) {
              boundaries.unshift(boundary);
            }
            boundaries = boundaries.map(function(el) {
              return offset(el);
            });
            each(dirs, function(ref, prop) {
              var dir = ref[0];
              var align = ref[1];
              var alignFlip = ref[2];
              if (!(flip === true || includes(flip, dir))) {
                return;
              }
              boundaries.some(function(boundary2) {
                var elemOffset = elAttach[dir] === align ? -dim[prop] : elAttach[dir] === alignFlip ? dim[prop] : 0;
                var targetOffset2 = targetAttach[dir] === align ? targetDim[prop] : targetAttach[dir] === alignFlip ? -targetDim[prop] : 0;
                if (position2[align] < boundary2[align] || position2[align] + dim[prop] > boundary2[alignFlip]) {
                  var centerOffset = dim[prop] / 2;
                  var centerTargetOffset = targetAttach[dir] === "center" ? -targetDim[prop] / 2 : 0;
                  return elAttach[dir] === "center" && (apply2(centerOffset, centerTargetOffset) || apply2(-centerOffset, -centerTargetOffset)) || apply2(elemOffset, targetOffset2);
                }
                function apply2(elemOffset2, targetOffset3) {
                  var newVal = toFloat((position2[align] + elemOffset2 + targetOffset3 - elOffset[dir] * 2).toFixed(4));
                  if (newVal >= boundary2[align] && newVal + dim[prop] <= boundary2[alignFlip]) {
                    position2[align] = newVal;
                    ["element", "target"].forEach(function(el) {
                      flipped[el][dir] = !elemOffset2 ? flipped[el][dir] : flipped[el][dir] === dirs[prop][1] ? dirs[prop][2] : dirs[prop][1];
                    });
                    return true;
                  }
                }
              });
            });
          }
          offset(element, position2);
          return flipped;
        }
        function moveTo(position2, attach, dim, factor) {
          each(dirs, function(ref, prop) {
            var dir = ref[0];
            var align = ref[1];
            var alignFlip = ref[2];
            if (attach[dir] === alignFlip) {
              position2[align] += dim[prop] * factor;
            } else if (attach[dir] === "center") {
              position2[align] += dim[prop] * factor / 2;
            }
          });
        }
        function getPos(pos) {
          var x = /left|center|right/;
          var y = /top|center|bottom/;
          pos = (pos || "").split(" ");
          if (pos.length === 1) {
            pos = x.test(pos[0]) ? pos.concat("center") : y.test(pos[0]) ? ["center"].concat(pos) : ["center", "center"];
          }
          return {
            x: x.test(pos[0]) ? pos[0] : "center",
            y: y.test(pos[1]) ? pos[1] : "center"
          };
        }
        function getOffsets(offsets, width2, height2) {
          var ref = (offsets || "").split(" ");
          var x = ref[0];
          var y = ref[1];
          return {
            x: x ? toFloat(x) * (endsWith(x, "%") ? width2 / 100 : 1) : 0,
            y: y ? toFloat(y) * (endsWith(y, "%") ? height2 / 100 : 1) : 0
          };
        }
        var util = /* @__PURE__ */ Object.freeze({
          __proto__: null,
          ajax,
          getImage,
          transition,
          Transition,
          animate: animate$1,
          Animation,
          attr,
          hasAttr,
          removeAttr,
          data,
          addClass,
          removeClass,
          removeClasses,
          replaceClass,
          hasClass,
          toggleClass,
          dimensions,
          offset,
          position,
          offsetPosition,
          height,
          width,
          boxModelAdjust,
          flipPosition,
          toPx,
          ready,
          empty,
          html,
          prepend,
          append,
          before,
          after,
          remove: remove$1,
          wrapAll,
          wrapInner,
          unwrap,
          fragment,
          apply: apply$1,
          $,
          $$,
          inBrowser,
          isIE,
          isRtl,
          hasTouch,
          pointerDown,
          pointerMove,
          pointerUp,
          pointerEnter,
          pointerLeave,
          pointerCancel,
          on,
          off,
          once,
          trigger,
          createEvent,
          toEventTargets,
          isTouch,
          getEventPos,
          fastdom,
          isVoidElement,
          isVisible,
          selInput,
          isInput,
          isFocusable,
          parent,
          filter: filter$1,
          matches,
          closest,
          within,
          parents,
          children,
          index,
          hasOwn,
          hyphenate,
          camelize,
          ucfirst,
          startsWith,
          endsWith,
          includes,
          findIndex,
          isArray,
          isFunction,
          isObject,
          isPlainObject,
          isWindow,
          isDocument,
          isNode,
          isElement,
          isBoolean,
          isString,
          isNumber,
          isNumeric,
          isEmpty,
          isUndefined,
          toBoolean,
          toNumber,
          toFloat,
          toArray,
          toNode,
          toNodes,
          toWindow,
          toMs,
          isEqual,
          swap,
          assign,
          last,
          each,
          sortBy: sortBy$1,
          uniqueBy,
          clamp,
          noop,
          intersectRect,
          pointInRect,
          Dimensions,
          getIndex,
          memoize,
          MouseTracker,
          mergeOptions,
          parseOptions,
          play,
          pause,
          mute,
          positionAt,
          Promise: Promise$1,
          Deferred,
          query,
          queryAll,
          find,
          findAll,
          escape,
          css,
          getCssVar,
          propName,
          isInView,
          scrollTop,
          scrollIntoView,
          scrolledOver,
          scrollParents,
          getViewport: getViewport$1,
          getViewportClientHeight
        });
        function globalAPI(UIkit2) {
          var DATA = UIkit2.data;
          UIkit2.use = function(plugin) {
            if (plugin.installed) {
              return;
            }
            plugin.call(null, this);
            plugin.installed = true;
            return this;
          };
          UIkit2.mixin = function(mixin, component) {
            component = (isString(component) ? UIkit2.component(component) : component) || this;
            component.options = mergeOptions(component.options, mixin);
          };
          UIkit2.extend = function(options) {
            options = options || {};
            var Super = this;
            var Sub = function UIkitComponent(options2) {
              this._init(options2);
            };
            Sub.prototype = Object.create(Super.prototype);
            Sub.prototype.constructor = Sub;
            Sub.options = mergeOptions(Super.options, options);
            Sub.super = Super;
            Sub.extend = Super.extend;
            return Sub;
          };
          UIkit2.update = function(element, e) {
            element = element ? toNode(element) : document.body;
            parents(element).reverse().forEach(function(element2) {
              return update(element2[DATA], e);
            });
            apply$1(element, function(element2) {
              return update(element2[DATA], e);
            });
          };
          var container;
          Object.defineProperty(UIkit2, "container", {
            get: function() {
              return container || document.body;
            },
            set: function(element) {
              container = $(element);
            }
          });
          function update(data2, e) {
            if (!data2) {
              return;
            }
            for (var name in data2) {
              if (data2[name]._connected) {
                data2[name]._callUpdate(e);
              }
            }
          }
        }
        function hooksAPI(UIkit2) {
          UIkit2.prototype._callHook = function(hook) {
            var this$1 = this;
            var handlers = this.$options[hook];
            if (handlers) {
              handlers.forEach(function(handler) {
                return handler.call(this$1);
              });
            }
          };
          UIkit2.prototype._callConnected = function() {
            if (this._connected) {
              return;
            }
            this._data = {};
            this._computeds = {};
            this._initProps();
            this._callHook("beforeConnect");
            this._connected = true;
            this._initEvents();
            this._initObservers();
            this._callHook("connected");
            this._callUpdate();
          };
          UIkit2.prototype._callDisconnected = function() {
            if (!this._connected) {
              return;
            }
            this._callHook("beforeDisconnect");
            this._disconnectObservers();
            this._unbindEvents();
            this._callHook("disconnected");
            this._connected = false;
            delete this._watch;
          };
          UIkit2.prototype._callUpdate = function(e) {
            var this$1 = this;
            if (e === void 0)
              e = "update";
            if (!this._connected) {
              return;
            }
            if (e === "update" || e === "resize") {
              this._callWatches();
            }
            if (!this.$options.update) {
              return;
            }
            if (!this._updates) {
              this._updates = new Set();
              fastdom.read(function() {
                if (this$1._connected) {
                  runUpdates.call(this$1, this$1._updates);
                }
                delete this$1._updates;
              });
            }
            this._updates.add(e.type || e);
          };
          UIkit2.prototype._callWatches = function() {
            var this$1 = this;
            if (this._watch) {
              return;
            }
            var initial = !hasOwn(this, "_watch");
            this._watch = fastdom.read(function() {
              if (this$1._connected) {
                runWatches.call(this$1, initial);
              }
              this$1._watch = null;
            });
          };
          function runUpdates(types) {
            var this$1 = this;
            var updates = this.$options.update;
            var loop = function(i2) {
              var ref = updates[i2];
              var read = ref.read;
              var write = ref.write;
              var events = ref.events;
              if (!types.has("update") && (!events || !events.some(function(type) {
                return types.has(type);
              }))) {
                return;
              }
              var result = void 0;
              if (read) {
                result = read.call(this$1, this$1._data, types);
                if (result && isPlainObject(result)) {
                  assign(this$1._data, result);
                }
              }
              if (write && result !== false) {
                fastdom.write(function() {
                  return write.call(this$1, this$1._data, types);
                });
              }
            };
            for (var i = 0; i < updates.length; i++)
              loop(i);
          }
          function runWatches(initial) {
            var ref = this;
            var computed = ref.$options.computed;
            var _computeds = ref._computeds;
            for (var key2 in computed) {
              var hasPrev = hasOwn(_computeds, key2);
              var prev = _computeds[key2];
              delete _computeds[key2];
              var ref$1 = computed[key2];
              var watch = ref$1.watch;
              var immediate = ref$1.immediate;
              if (watch && (initial && immediate || hasPrev && !isEqual(prev, this[key2]))) {
                watch.call(this, this[key2], prev);
              }
            }
          }
        }
        function stateAPI(UIkit2) {
          var uid = 0;
          UIkit2.prototype._init = function(options) {
            options = options || {};
            options.data = normalizeData(options, this.constructor.options);
            this.$options = mergeOptions(this.constructor.options, options, this);
            this.$el = null;
            this.$props = {};
            this._uid = uid++;
            this._initData();
            this._initMethods();
            this._initComputeds();
            this._callHook("created");
            if (options.el) {
              this.$mount(options.el);
            }
          };
          UIkit2.prototype._initData = function() {
            var ref = this.$options;
            var data2 = ref.data;
            if (data2 === void 0)
              data2 = {};
            for (var key2 in data2) {
              this.$props[key2] = this[key2] = data2[key2];
            }
          };
          UIkit2.prototype._initMethods = function() {
            var ref = this.$options;
            var methods = ref.methods;
            if (methods) {
              for (var key2 in methods) {
                this[key2] = methods[key2].bind(this);
              }
            }
          };
          UIkit2.prototype._initComputeds = function() {
            var ref = this.$options;
            var computed = ref.computed;
            this._computeds = {};
            if (computed) {
              for (var key2 in computed) {
                registerComputed(this, key2, computed[key2]);
              }
            }
          };
          UIkit2.prototype._initProps = function(props2) {
            var key2;
            props2 = props2 || getProps2(this.$options, this.$name);
            for (key2 in props2) {
              if (!isUndefined(props2[key2])) {
                this.$props[key2] = props2[key2];
              }
            }
            var exclude = [this.$options.computed, this.$options.methods];
            for (key2 in this.$props) {
              if (key2 in props2 && notIn(exclude, key2)) {
                this[key2] = this.$props[key2];
              }
            }
          };
          UIkit2.prototype._initEvents = function() {
            var this$1 = this;
            this._events = [];
            var ref = this.$options;
            var events = ref.events;
            if (events) {
              events.forEach(function(event) {
                if (!hasOwn(event, "handler")) {
                  for (var key2 in event) {
                    registerEvent(this$1, event[key2], key2);
                  }
                } else {
                  registerEvent(this$1, event);
                }
              });
            }
          };
          UIkit2.prototype._unbindEvents = function() {
            this._events.forEach(function(unbind) {
              return unbind();
            });
            delete this._events;
          };
          UIkit2.prototype._initObservers = function() {
            this._observers = [
              initChildListObserver(this),
              initPropsObserver(this)
            ];
          };
          UIkit2.prototype._disconnectObservers = function() {
            this._observers.forEach(function(observer) {
              return observer && observer.disconnect();
            });
          };
          function getProps2(opts, name) {
            var data$1 = {};
            var args = opts.args;
            if (args === void 0)
              args = [];
            var props2 = opts.props;
            if (props2 === void 0)
              props2 = {};
            var el = opts.el;
            if (!props2) {
              return data$1;
            }
            for (var key2 in props2) {
              var prop = hyphenate(key2);
              var value = data(el, prop);
              if (isUndefined(value)) {
                continue;
              }
              value = props2[key2] === Boolean && value === "" ? true : coerce(props2[key2], value);
              if (prop === "target" && (!value || startsWith(value, "_"))) {
                continue;
              }
              data$1[key2] = value;
            }
            var options = parseOptions(data(el, name), args);
            for (var key$1 in options) {
              var prop$1 = camelize(key$1);
              if (props2[prop$1] !== void 0) {
                data$1[prop$1] = coerce(props2[prop$1], options[key$1]);
              }
            }
            return data$1;
          }
          function registerComputed(component, key2, cb) {
            Object.defineProperty(component, key2, {
              enumerable: true,
              get: function() {
                var _computeds = component._computeds;
                var $props = component.$props;
                var $el = component.$el;
                if (!hasOwn(_computeds, key2)) {
                  _computeds[key2] = (cb.get || cb).call(component, $props, $el);
                }
                return _computeds[key2];
              },
              set: function(value) {
                var _computeds = component._computeds;
                _computeds[key2] = cb.set ? cb.set.call(component, value) : value;
                if (isUndefined(_computeds[key2])) {
                  delete _computeds[key2];
                }
              }
            });
          }
          function registerEvent(component, event, key2) {
            if (!isPlainObject(event)) {
              event = { name: key2, handler: event };
            }
            var name = event.name;
            var el = event.el;
            var handler = event.handler;
            var capture = event.capture;
            var passive = event.passive;
            var delegate2 = event.delegate;
            var filter2 = event.filter;
            var self2 = event.self;
            el = isFunction(el) ? el.call(component) : el || component.$el;
            if (isArray(el)) {
              el.forEach(function(el2) {
                return registerEvent(component, assign({}, event, { el: el2 }), key2);
              });
              return;
            }
            if (!el || filter2 && !filter2.call(component)) {
              return;
            }
            component._events.push(on(el, name, !delegate2 ? null : isString(delegate2) ? delegate2 : delegate2.call(component), isString(handler) ? component[handler] : handler.bind(component), { passive, capture, self: self2 }));
          }
          function notIn(options, key2) {
            return options.every(function(arr) {
              return !arr || !hasOwn(arr, key2);
            });
          }
          function coerce(type, value) {
            if (type === Boolean) {
              return toBoolean(value);
            } else if (type === Number) {
              return toNumber(value);
            } else if (type === "list") {
              return toList(value);
            }
            return type ? type(value) : value;
          }
          function toList(value) {
            return isArray(value) ? value : isString(value) ? value.split(/,(?![^(]*\))/).map(function(value2) {
              return isNumeric(value2) ? toNumber(value2) : toBoolean(value2.trim());
            }) : [value];
          }
          function normalizeData(ref, ref$1) {
            var data2 = ref.data;
            var args = ref$1.args;
            var props2 = ref$1.props;
            if (props2 === void 0)
              props2 = {};
            data2 = isArray(data2) ? !isEmpty(args) ? data2.slice(0, args.length).reduce(function(data3, value, index2) {
              if (isPlainObject(value)) {
                assign(data3, value);
              } else {
                data3[args[index2]] = value;
              }
              return data3;
            }, {}) : void 0 : data2;
            if (data2) {
              for (var key2 in data2) {
                if (isUndefined(data2[key2])) {
                  delete data2[key2];
                } else {
                  data2[key2] = props2[key2] ? coerce(props2[key2], data2[key2]) : data2[key2];
                }
              }
            }
            return data2;
          }
          function initChildListObserver(component) {
            var ref = component.$options;
            var el = ref.el;
            var observer = new MutationObserver(function() {
              return component.$emit();
            });
            observer.observe(el, {
              childList: true,
              subtree: true
            });
            return observer;
          }
          function initPropsObserver(component) {
            var $name = component.$name;
            var $options = component.$options;
            var $props = component.$props;
            var attrs = $options.attrs;
            var props2 = $options.props;
            var el = $options.el;
            if (!props2 || attrs === false) {
              return;
            }
            var attributes = isArray(attrs) ? attrs : Object.keys(props2);
            var filter2 = attributes.map(function(key2) {
              return hyphenate(key2);
            }).concat($name);
            var observer = new MutationObserver(function(records) {
              var data2 = getProps2($options, $name);
              if (records.some(function(ref) {
                var attributeName = ref.attributeName;
                var prop = attributeName.replace("data-", "");
                return (prop === $name ? attributes : [camelize(prop), camelize(attributeName)]).some(function(prop2) {
                  return !isUndefined(data2[prop2]) && data2[prop2] !== $props[prop2];
                });
              })) {
                component.$reset();
              }
            });
            observer.observe(el, {
              attributes: true,
              attributeFilter: filter2.concat(filter2.map(function(key2) {
                return "data-" + key2;
              }))
            });
            return observer;
          }
        }
        function instanceAPI(UIkit2) {
          var DATA = UIkit2.data;
          UIkit2.prototype.$create = function(component, element, data2) {
            return UIkit2[component](element, data2);
          };
          UIkit2.prototype.$mount = function(el) {
            var ref = this.$options;
            var name = ref.name;
            if (!el[DATA]) {
              el[DATA] = {};
            }
            if (el[DATA][name]) {
              return;
            }
            el[DATA][name] = this;
            this.$el = this.$options.el = this.$options.el || el;
            if (within(el, document)) {
              this._callConnected();
            }
          };
          UIkit2.prototype.$reset = function() {
            this._callDisconnected();
            this._callConnected();
          };
          UIkit2.prototype.$destroy = function(removeEl) {
            if (removeEl === void 0)
              removeEl = false;
            var ref = this.$options;
            var el = ref.el;
            var name = ref.name;
            if (el) {
              this._callDisconnected();
            }
            this._callHook("destroy");
            if (!el || !el[DATA]) {
              return;
            }
            delete el[DATA][name];
            if (!isEmpty(el[DATA])) {
              delete el[DATA];
            }
            if (removeEl) {
              remove$1(this.$el);
            }
          };
          UIkit2.prototype.$emit = function(e) {
            this._callUpdate(e);
          };
          UIkit2.prototype.$update = function(element, e) {
            if (element === void 0)
              element = this.$el;
            UIkit2.update(element, e);
          };
          UIkit2.prototype.$getComponent = UIkit2.getComponent;
          var componentName = memoize(function(name) {
            return UIkit2.prefix + hyphenate(name);
          });
          Object.defineProperties(UIkit2.prototype, {
            $container: Object.getOwnPropertyDescriptor(UIkit2, "container"),
            $name: {
              get: function() {
                return componentName(this.$options.name);
              }
            }
          });
        }
        function componentAPI(UIkit2) {
          var DATA = UIkit2.data;
          var components2 = {};
          UIkit2.component = function(name, options) {
            var id = hyphenate(name);
            name = camelize(id);
            if (!options) {
              if (isPlainObject(components2[name])) {
                components2[name] = UIkit2.extend(components2[name]);
              }
              return components2[name];
            }
            UIkit2[name] = function(element, data2) {
              var i = arguments.length, argsArray = Array(i);
              while (i--)
                argsArray[i] = arguments[i];
              var component = UIkit2.component(name);
              return component.options.functional ? new component({ data: isPlainObject(element) ? element : [].concat(argsArray) }) : !element ? init(element) : $$(element).map(init)[0];
              function init(element2) {
                var instance = UIkit2.getComponent(element2, name);
                if (instance) {
                  if (!data2) {
                    return instance;
                  } else {
                    instance.$destroy();
                  }
                }
                return new component({ el: element2, data: data2 });
              }
            };
            var opt = isPlainObject(options) ? assign({}, options) : options.options;
            opt.name = name;
            if (opt.install) {
              opt.install(UIkit2, opt, name);
            }
            if (UIkit2._initialized && !opt.functional) {
              fastdom.read(function() {
                return UIkit2[name]("[uk-" + id + "],[data-uk-" + id + "]");
              });
            }
            return components2[name] = isPlainObject(options) ? opt : options;
          };
          UIkit2.getComponents = function(element) {
            return element && element[DATA] || {};
          };
          UIkit2.getComponent = function(element, name) {
            return UIkit2.getComponents(element)[name];
          };
          UIkit2.connect = function(node) {
            if (node[DATA]) {
              for (var name in node[DATA]) {
                node[DATA][name]._callConnected();
              }
            }
            for (var i = 0; i < node.attributes.length; i++) {
              var name$1 = getComponentName(node.attributes[i].name);
              if (name$1 && name$1 in components2) {
                UIkit2[name$1](node);
              }
            }
          };
          UIkit2.disconnect = function(node) {
            for (var name in node[DATA]) {
              node[DATA][name]._callDisconnected();
            }
          };
        }
        var getComponentName = memoize(function(attribute) {
          return startsWith(attribute, "uk-") || startsWith(attribute, "data-uk-") ? camelize(attribute.replace("data-uk-", "").replace("uk-", "")) : false;
        });
        var UIkit = function(options) {
          this._init(options);
        };
        UIkit.util = util;
        UIkit.data = "__uikit__";
        UIkit.prefix = "uk-";
        UIkit.options = {};
        UIkit.version = "3.7.3";
        globalAPI(UIkit);
        hooksAPI(UIkit);
        stateAPI(UIkit);
        componentAPI(UIkit);
        instanceAPI(UIkit);
        function Core(UIkit2) {
          if (!inBrowser) {
            return;
          }
          var pendingResize;
          var handleResize = function() {
            if (pendingResize) {
              return;
            }
            pendingResize = true;
            fastdom.write(function() {
              return pendingResize = false;
            });
            UIkit2.update(null, "resize");
          };
          on(window, "load resize", handleResize);
          on(document, "loadedmetadata load", handleResize, true);
          if ("ResizeObserver" in window) {
            new ResizeObserver(handleResize).observe(document.documentElement);
          }
          var pending;
          on(window, "scroll", function(e) {
            if (pending) {
              return;
            }
            pending = true;
            fastdom.write(function() {
              return pending = false;
            });
            UIkit2.update(null, e.type);
          }, { passive: true, capture: true });
          var started = 0;
          on(document, "animationstart", function(ref) {
            var target = ref.target;
            if ((css(target, "animationName") || "").match(/^uk-.*(left|right)/)) {
              started++;
              css(document.documentElement, "overflowX", "hidden");
              setTimeout(function() {
                if (!--started) {
                  css(document.documentElement, "overflowX", "");
                }
              }, toMs(css(target, "animationDuration")) + 100);
            }
          }, true);
          on(document, pointerDown, function(e) {
            if (!isTouch(e)) {
              return;
            }
            var pos = getEventPos(e);
            var target = "tagName" in e.target ? e.target : parent(e.target);
            once(document, pointerUp + " " + pointerCancel + " scroll", function(e2) {
              var ref = getEventPos(e2);
              var x = ref.x;
              var y = ref.y;
              if (e2.type !== "scroll" && target && x && Math.abs(pos.x - x) > 100 || y && Math.abs(pos.y - y) > 100) {
                setTimeout(function() {
                  trigger(target, "swipe");
                  trigger(target, "swipe" + swipeDirection(pos.x, pos.y, x, y));
                });
              }
            });
          }, { passive: true });
        }
        function swipeDirection(x1, y1, x2, y2) {
          return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? "Left" : "Right" : y1 - y2 > 0 ? "Up" : "Down";
        }
        function boot(UIkit2) {
          var connect = UIkit2.connect;
          var disconnect = UIkit2.disconnect;
          if (!inBrowser || !window.MutationObserver) {
            return;
          }
          fastdom.read(function() {
            if (document.body) {
              apply$1(document.body, connect);
            }
            new MutationObserver(function(records) {
              return records.forEach(applyChildListMutation);
            }).observe(document, {
              childList: true,
              subtree: true
            });
            new MutationObserver(function(records) {
              return records.forEach(applyAttributeMutation);
            }).observe(document, {
              attributes: true,
              subtree: true
            });
            UIkit2._initialized = true;
          });
          function applyChildListMutation(ref) {
            var addedNodes = ref.addedNodes;
            var removedNodes = ref.removedNodes;
            for (var i = 0; i < addedNodes.length; i++) {
              apply$1(addedNodes[i], connect);
            }
            for (var i$1 = 0; i$1 < removedNodes.length; i$1++) {
              apply$1(removedNodes[i$1], disconnect);
            }
          }
          function applyAttributeMutation(ref) {
            var target = ref.target;
            var attributeName = ref.attributeName;
            var name = getComponentName(attributeName);
            if (!name || !(name in UIkit2)) {
              return;
            }
            if (hasAttr(target, attributeName)) {
              UIkit2[name](target);
              return;
            }
            var component = UIkit2.getComponent(target, name);
            if (component) {
              component.$destroy();
            }
          }
        }
        var Class = {
          connected: function() {
            !hasClass(this.$el, this.$name) && addClass(this.$el, this.$name);
          }
        };
        var Togglable = {
          props: {
            cls: Boolean,
            animation: "list",
            duration: Number,
            origin: String,
            transition: String
          },
          data: {
            cls: false,
            animation: [false],
            duration: 200,
            origin: false,
            transition: "linear",
            clsEnter: "uk-togglabe-enter",
            clsLeave: "uk-togglabe-leave",
            initProps: {
              overflow: "",
              height: "",
              paddingTop: "",
              paddingBottom: "",
              marginTop: "",
              marginBottom: ""
            },
            hideProps: {
              overflow: "hidden",
              height: 0,
              paddingTop: 0,
              paddingBottom: 0,
              marginTop: 0,
              marginBottom: 0
            }
          },
          computed: {
            hasAnimation: function(ref) {
              var animation = ref.animation;
              return !!animation[0];
            },
            hasTransition: function(ref) {
              var animation = ref.animation;
              return this.hasAnimation && animation[0] === true;
            }
          },
          methods: {
            toggleElement: function(targets, toggle2, animate2) {
              var this$1 = this;
              return new Promise$1(function(resolve) {
                return Promise$1.all(toNodes(targets).map(function(el) {
                  var show = isBoolean(toggle2) ? toggle2 : !this$1.isToggled(el);
                  if (!trigger(el, "before" + (show ? "show" : "hide"), [this$1])) {
                    return Promise$1.reject();
                  }
                  var promise = (isFunction(animate2) ? animate2 : animate2 === false || !this$1.hasAnimation ? this$1._toggle : this$1.hasTransition ? toggleHeight(this$1) : toggleAnimation(this$1))(el, show);
                  var cls = show ? this$1.clsEnter : this$1.clsLeave;
                  addClass(el, cls);
                  trigger(el, show ? "show" : "hide", [this$1]);
                  var done = function() {
                    removeClass(el, cls);
                    trigger(el, show ? "shown" : "hidden", [this$1]);
                    this$1.$update(el);
                  };
                  return promise ? promise.then(done, function() {
                    removeClass(el, cls);
                    return Promise$1.reject();
                  }) : done();
                })).then(resolve, noop);
              });
            },
            isToggled: function(el) {
              if (el === void 0)
                el = this.$el;
              return hasClass(el, this.clsEnter) ? true : hasClass(el, this.clsLeave) ? false : this.cls ? hasClass(el, this.cls.split(" ")[0]) : !hasAttr(el, "hidden");
            },
            _toggle: function(el, toggled) {
              if (!el) {
                return;
              }
              toggled = Boolean(toggled);
              var changed;
              if (this.cls) {
                changed = includes(this.cls, " ") || toggled !== hasClass(el, this.cls);
                changed && toggleClass(el, this.cls, includes(this.cls, " ") ? void 0 : toggled);
              } else {
                changed = toggled === el.hidden;
                changed && (el.hidden = !toggled);
              }
              $$("[autofocus]", el).some(function(el2) {
                return isVisible(el2) ? el2.focus() || true : el2.blur();
              });
              if (changed) {
                trigger(el, "toggled", [toggled, this]);
                this.$update(el);
              }
            }
          }
        };
        function toggleHeight(ref) {
          var isToggled = ref.isToggled;
          var duration = ref.duration;
          var initProps = ref.initProps;
          var hideProps = ref.hideProps;
          var transition2 = ref.transition;
          var _toggle = ref._toggle;
          return function(el, show) {
            var inProgress2 = Transition.inProgress(el);
            var inner = el.hasChildNodes ? toFloat(css(el.firstElementChild, "marginTop")) + toFloat(css(el.lastElementChild, "marginBottom")) : 0;
            var currentHeight = isVisible(el) ? height(el) + (inProgress2 ? 0 : inner) : 0;
            Transition.cancel(el);
            if (!isToggled(el)) {
              _toggle(el, true);
            }
            height(el, "");
            fastdom.flush();
            var endHeight = height(el) + (inProgress2 ? 0 : inner);
            height(el, currentHeight);
            return (show ? Transition.start(el, assign({}, initProps, { overflow: "hidden", height: endHeight }), Math.round(duration * (1 - currentHeight / endHeight)), transition2) : Transition.start(el, hideProps, Math.round(duration * (currentHeight / endHeight)), transition2).then(function() {
              return _toggle(el, false);
            })).then(function() {
              return css(el, initProps);
            });
          };
        }
        function toggleAnimation(cmp) {
          return function(el, show) {
            Animation.cancel(el);
            var animation = cmp.animation;
            var duration = cmp.duration;
            var _toggle = cmp._toggle;
            if (show) {
              _toggle(el, true);
              return Animation.in(el, animation[0], duration, cmp.origin);
            }
            return Animation.out(el, animation[1] || animation[0], duration, cmp.origin).then(function() {
              return _toggle(el, false);
            });
          };
        }
        var Accordion = {
          mixins: [Class, Togglable],
          props: {
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            transition: String,
            offset: Number
          },
          data: {
            targets: "> *",
            active: false,
            animation: [true],
            collapsible: true,
            multiple: false,
            clsOpen: "uk-open",
            toggle: "> .uk-accordion-title",
            content: "> .uk-accordion-content",
            transition: "ease",
            offset: 0
          },
          computed: {
            items: {
              get: function(ref, $el) {
                var targets = ref.targets;
                return $$(targets, $el);
              },
              watch: function(items, prev) {
                var this$1 = this;
                items.forEach(function(el) {
                  return hide($(this$1.content, el), !hasClass(el, this$1.clsOpen));
                });
                if (prev || hasClass(items, this.clsOpen)) {
                  return;
                }
                var active2 = this.active !== false && items[Number(this.active)] || !this.collapsible && items[0];
                if (active2) {
                  this.toggle(active2, false);
                }
              },
              immediate: true
            },
            toggles: function(ref) {
              var toggle2 = ref.toggle;
              return this.items.map(function(item) {
                return $(toggle2, item);
              });
            }
          },
          events: [
            {
              name: "click",
              delegate: function() {
                return this.targets + " " + this.$props.toggle;
              },
              handler: function(e) {
                e.preventDefault();
                this.toggle(index(this.toggles, e.current));
              }
            }
          ],
          methods: {
            toggle: function(item, animate2) {
              var this$1 = this;
              var items = [this.items[getIndex(item, this.items)]];
              var activeItems = filter$1(this.items, "." + this.clsOpen);
              if (!this.multiple && !includes(activeItems, items[0])) {
                items = items.concat(activeItems);
              }
              if (!this.collapsible && activeItems.length < 2 && !filter$1(items, ":not(." + this.clsOpen + ")").length) {
                return;
              }
              items.forEach(function(el) {
                return this$1.toggleElement(el, !hasClass(el, this$1.clsOpen), function(el2, show) {
                  toggleClass(el2, this$1.clsOpen, show);
                  attr($(this$1.$props.toggle, el2), "aria-expanded", show);
                  var content = $("" + (el2._wrapper ? "> * " : "") + this$1.content, el2);
                  if (animate2 === false || !this$1.hasTransition) {
                    hide(content, !show);
                    return;
                  }
                  if (!el2._wrapper) {
                    el2._wrapper = wrapAll(content, "<div" + (show ? " hidden" : "") + ">");
                  }
                  hide(content, false);
                  return toggleHeight(this$1)(el2._wrapper, show).then(function() {
                    hide(content, !show);
                    delete el2._wrapper;
                    unwrap(content);
                    if (show) {
                      var toggle2 = $(this$1.$props.toggle, el2);
                      if (!isInView(toggle2)) {
                        scrollIntoView(toggle2, { offset: this$1.offset });
                      }
                    }
                  });
                });
              });
            }
          }
        };
        function hide(el, hide2) {
          el && (el.hidden = hide2);
        }
        var alert = {
          mixins: [Class, Togglable],
          args: "animation",
          props: {
            close: String
          },
          data: {
            animation: [true],
            selClose: ".uk-alert-close",
            duration: 150,
            hideProps: assign({ opacity: 0 }, Togglable.data.hideProps)
          },
          events: [
            {
              name: "click",
              delegate: function() {
                return this.selClose;
              },
              handler: function(e) {
                e.preventDefault();
                this.close();
              }
            }
          ],
          methods: {
            close: function() {
              var this$1 = this;
              this.toggleElement(this.$el).then(function() {
                return this$1.$destroy(true);
              });
            }
          }
        };
        var Video = {
          args: "autoplay",
          props: {
            automute: Boolean,
            autoplay: Boolean
          },
          data: {
            automute: false,
            autoplay: true
          },
          computed: {
            inView: function(ref) {
              var autoplay = ref.autoplay;
              return autoplay === "inview";
            }
          },
          connected: function() {
            if (this.inView && !hasAttr(this.$el, "preload")) {
              this.$el.preload = "none";
            }
            if (this.automute) {
              mute(this.$el);
            }
          },
          update: {
            read: function() {
              return {
                visible: isVisible(this.$el) && css(this.$el, "visibility") !== "hidden",
                inView: this.inView && isInView(this.$el)
              };
            },
            write: function(ref) {
              var visible = ref.visible;
              var inView2 = ref.inView;
              if (!visible || this.inView && !inView2) {
                pause(this.$el);
              } else if (this.autoplay === true || this.inView && inView2) {
                play(this.$el);
              }
            },
            events: ["resize", "scroll"]
          }
        };
        var cover = {
          mixins: [Class, Video],
          props: {
            width: Number,
            height: Number
          },
          data: {
            automute: true
          },
          update: {
            read: function() {
              var el = this.$el;
              var ref = getPositionedParent(el) || parent(el);
              var height2 = ref.offsetHeight;
              var width2 = ref.offsetWidth;
              var dim = Dimensions.cover({
                width: this.width || el.naturalWidth || el.videoWidth || el.clientWidth,
                height: this.height || el.naturalHeight || el.videoHeight || el.clientHeight
              }, {
                width: width2 + (width2 % 2 ? 1 : 0),
                height: height2 + (height2 % 2 ? 1 : 0)
              });
              if (!dim.width || !dim.height) {
                return false;
              }
              return dim;
            },
            write: function(ref) {
              var height2 = ref.height;
              var width2 = ref.width;
              css(this.$el, { height: height2, width: width2 });
            },
            events: ["resize"]
          }
        };
        function getPositionedParent(el) {
          while (el = parent(el)) {
            if (css(el, "position") !== "static") {
              return el;
            }
          }
        }
        var Container = {
          props: {
            container: Boolean
          },
          data: {
            container: true
          },
          computed: {
            container: function(ref) {
              var container = ref.container;
              return container === true && this.$container || container && $(container);
            }
          }
        };
        var Position = {
          props: {
            pos: String,
            offset: null,
            flip: Boolean,
            clsPos: String
          },
          data: {
            pos: "bottom-" + (!isRtl ? "left" : "right"),
            flip: true,
            offset: false,
            clsPos: ""
          },
          computed: {
            pos: function(ref) {
              var pos = ref.pos;
              return (pos + (!includes(pos, "-") ? "-center" : "")).split("-");
            },
            dir: function() {
              return this.pos[0];
            },
            align: function() {
              return this.pos[1];
            }
          },
          methods: {
            positionAt: function(element, target, boundary) {
              removeClasses(element, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?");
              var ref = this;
              var offset$1 = ref.offset;
              var axis = this.getAxis();
              if (!isNumeric(offset$1)) {
                var node = $(offset$1);
                offset$1 = node ? offset(node)[axis === "x" ? "left" : "top"] - offset(target)[axis === "x" ? "right" : "bottom"] : 0;
              }
              var ref$1 = positionAt(element, target, axis === "x" ? flipPosition(this.dir) + " " + this.align : this.align + " " + flipPosition(this.dir), axis === "x" ? this.dir + " " + this.align : this.align + " " + this.dir, axis === "x" ? "" + (this.dir === "left" ? -offset$1 : offset$1) : " " + (this.dir === "top" ? -offset$1 : offset$1), null, this.flip, boundary).target;
              var x = ref$1.x;
              var y = ref$1.y;
              this.dir = axis === "x" ? x : y;
              this.align = axis === "x" ? y : x;
              toggleClass(element, this.clsPos + "-" + this.dir + "-" + this.align, this.offset === false);
            },
            getAxis: function() {
              return this.dir === "top" || this.dir === "bottom" ? "y" : "x";
            }
          }
        };
        var active$1;
        var drop = {
          mixins: [Container, Position, Togglable],
          args: "pos",
          props: {
            mode: "list",
            toggle: Boolean,
            boundary: Boolean,
            boundaryAlign: Boolean,
            delayShow: Number,
            delayHide: Number,
            clsDrop: String
          },
          data: {
            mode: ["click", "hover"],
            toggle: "- *",
            boundary: true,
            boundaryAlign: false,
            delayShow: 0,
            delayHide: 800,
            clsDrop: false,
            animation: ["uk-animation-fade"],
            cls: "uk-open",
            container: false
          },
          computed: {
            boundary: function(ref, $el) {
              var boundary = ref.boundary;
              return boundary === true ? window : query(boundary, $el);
            },
            clsDrop: function(ref) {
              var clsDrop = ref.clsDrop;
              return clsDrop || "uk-" + this.$options.name;
            },
            clsPos: function() {
              return this.clsDrop;
            }
          },
          created: function() {
            this.tracker = new MouseTracker();
          },
          connected: function() {
            addClass(this.$el, this.clsDrop);
            if (this.toggle && !this.target) {
              this.target = this.$create("toggle", query(this.toggle, this.$el), {
                target: this.$el,
                mode: this.mode
              });
            }
          },
          disconnected: function() {
            if (this.isActive()) {
              active$1 = null;
            }
          },
          events: [
            {
              name: "click",
              delegate: function() {
                return "." + this.clsDrop + "-close";
              },
              handler: function(e) {
                e.preventDefault();
                this.hide(false);
              }
            },
            {
              name: "click",
              delegate: function() {
                return 'a[href^="#"]';
              },
              handler: function(ref) {
                var defaultPrevented = ref.defaultPrevented;
                var hash = ref.current.hash;
                if (!defaultPrevented && hash && !within(hash, this.$el)) {
                  this.hide(false);
                }
              }
            },
            {
              name: "beforescroll",
              handler: function() {
                this.hide(false);
              }
            },
            {
              name: "toggle",
              self: true,
              handler: function(e, toggle2) {
                e.preventDefault();
                if (this.isToggled()) {
                  this.hide(false);
                } else {
                  this.show(toggle2.$el, false);
                }
              }
            },
            {
              name: "toggleshow",
              self: true,
              handler: function(e, toggle2) {
                e.preventDefault();
                this.show(toggle2.$el);
              }
            },
            {
              name: "togglehide",
              self: true,
              handler: function(e) {
                e.preventDefault();
                this.hide();
              }
            },
            {
              name: pointerEnter + " focusin",
              filter: function() {
                return includes(this.mode, "hover");
              },
              handler: function(e) {
                if (!isTouch(e)) {
                  this.clearTimers();
                }
              }
            },
            {
              name: pointerLeave + " focusout",
              filter: function() {
                return includes(this.mode, "hover");
              },
              handler: function(e) {
                if (!isTouch(e) && e.relatedTarget) {
                  this.hide();
                }
              }
            },
            {
              name: "toggled",
              self: true,
              handler: function(e, toggled) {
                if (!toggled) {
                  return;
                }
                this.clearTimers();
                this.position();
              }
            },
            {
              name: "show",
              self: true,
              handler: function() {
                var this$1 = this;
                active$1 = this;
                this.tracker.init();
                once(this.$el, "hide", on(document, pointerDown, function(ref) {
                  var target = ref.target;
                  return !within(target, this$1.$el) && once(document, pointerUp + " " + pointerCancel + " scroll", function(ref2) {
                    var defaultPrevented = ref2.defaultPrevented;
                    var type = ref2.type;
                    var newTarget = ref2.target;
                    if (!defaultPrevented && type === pointerUp && target === newTarget && !(this$1.target && within(target, this$1.target))) {
                      this$1.hide(false);
                    }
                  }, true);
                }), { self: true });
                once(this.$el, "hide", on(document, "keydown", function(e) {
                  if (e.keyCode === 27) {
                    this$1.hide(false);
                  }
                }), { self: true });
              }
            },
            {
              name: "beforehide",
              self: true,
              handler: function() {
                this.clearTimers();
              }
            },
            {
              name: "hide",
              handler: function(ref) {
                var target = ref.target;
                if (this.$el !== target) {
                  active$1 = active$1 === null && within(target, this.$el) && this.isToggled() ? this : active$1;
                  return;
                }
                active$1 = this.isActive() ? null : active$1;
                this.tracker.cancel();
              }
            }
          ],
          update: {
            write: function() {
              if (this.isToggled() && !hasClass(this.$el, this.clsEnter)) {
                this.position();
              }
            },
            events: ["resize"]
          },
          methods: {
            show: function(target, delay) {
              var this$1 = this;
              if (target === void 0)
                target = this.target;
              if (delay === void 0)
                delay = true;
              if (this.isToggled() && target && this.target && target !== this.target) {
                this.hide(false);
              }
              this.target = target;
              this.clearTimers();
              if (this.isActive()) {
                return;
              }
              if (active$1) {
                if (delay && active$1.isDelaying) {
                  this.showTimer = setTimeout(this.show, 10);
                  return;
                }
                var prev;
                while (active$1 && prev !== active$1 && !within(this.$el, active$1.$el)) {
                  prev = active$1;
                  active$1.hide(false);
                }
              }
              if (this.container && parent(this.$el) !== this.container) {
                append(this.container, this.$el);
              }
              this.showTimer = setTimeout(function() {
                return this$1.toggleElement(this$1.$el, true);
              }, delay && this.delayShow || 0);
            },
            hide: function(delay) {
              var this$1 = this;
              if (delay === void 0)
                delay = true;
              var hide2 = function() {
                return this$1.toggleElement(this$1.$el, false, false);
              };
              this.clearTimers();
              this.isDelaying = getPositionedElements(this.$el).some(function(el) {
                return this$1.tracker.movesTo(el);
              });
              if (delay && this.isDelaying) {
                this.hideTimer = setTimeout(this.hide, 50);
              } else if (delay && this.delayHide) {
                this.hideTimer = setTimeout(hide2, this.delayHide);
              } else {
                hide2();
              }
            },
            clearTimers: function() {
              clearTimeout(this.showTimer);
              clearTimeout(this.hideTimer);
              this.showTimer = null;
              this.hideTimer = null;
              this.isDelaying = false;
            },
            isActive: function() {
              return active$1 === this;
            },
            position: function() {
              removeClass(this.$el, this.clsDrop + "-stack");
              toggleClass(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
              var boundary = offset(this.boundary);
              var alignTo = this.boundaryAlign ? boundary : offset(this.target);
              if (this.align === "justify") {
                var prop = this.getAxis() === "y" ? "width" : "height";
                css(this.$el, prop, alignTo[prop]);
              } else if (this.boundary && this.$el.offsetWidth > Math.max(boundary.right - alignTo.left, alignTo.right - boundary.left)) {
                addClass(this.$el, this.clsDrop + "-stack");
              }
              this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.target, this.boundary);
            }
          }
        };
        function getPositionedElements(el) {
          var result = [];
          apply$1(el, function(el2) {
            return css(el2, "position") !== "static" && result.push(el2);
          });
          return result;
        }
        var formCustom = {
          mixins: [Class],
          args: "target",
          props: {
            target: Boolean
          },
          data: {
            target: false
          },
          computed: {
            input: function(_, $el) {
              return $(selInput, $el);
            },
            state: function() {
              return this.input.nextElementSibling;
            },
            target: function(ref, $el) {
              var target = ref.target;
              return target && (target === true && parent(this.input) === $el && this.input.nextElementSibling || query(target, $el));
            }
          },
          update: function() {
            var ref = this;
            var target = ref.target;
            var input = ref.input;
            if (!target) {
              return;
            }
            var option;
            var prop = isInput(target) ? "value" : "textContent";
            var prev = target[prop];
            var value = input.files && input.files[0] ? input.files[0].name : matches(input, "select") && (option = $$("option", input).filter(function(el) {
              return el.selected;
            })[0]) ? option.textContent : input.value;
            if (prev !== value) {
              target[prop] = value;
            }
          },
          events: [
            {
              name: "change",
              handler: function() {
                this.$update();
              }
            },
            {
              name: "reset",
              el: function() {
                return closest(this.$el, "form");
              },
              handler: function() {
                this.$update();
              }
            }
          ]
        };
        var gif = {
          update: {
            read: function(data2) {
              var inview = isInView(this.$el);
              if (!inview || data2.isInView === inview) {
                return false;
              }
              data2.isInView = inview;
            },
            write: function() {
              this.$el.src = "" + this.$el.src;
            },
            events: ["scroll", "resize"]
          }
        };
        var Margin = {
          props: {
            margin: String,
            firstColumn: Boolean
          },
          data: {
            margin: "uk-margin-small-top",
            firstColumn: "uk-first-column"
          },
          update: {
            read: function() {
              var rows = getRows(this.$el.children);
              return {
                rows,
                columns: getColumns(rows)
              };
            },
            write: function(ref) {
              var columns = ref.columns;
              var rows = ref.rows;
              for (var i = 0; i < rows.length; i++) {
                for (var j = 0; j < rows[i].length; j++) {
                  toggleClass(rows[i][j], this.margin, i !== 0);
                  toggleClass(rows[i][j], this.firstColumn, !!~columns[0].indexOf(rows[i][j]));
                }
              }
            },
            events: ["resize"]
          }
        };
        function getRows(items) {
          return sortBy(items, "top", "bottom");
        }
        function getColumns(rows) {
          var columns = [];
          for (var i = 0; i < rows.length; i++) {
            var sorted = sortBy(rows[i], "left", "right");
            for (var j = 0; j < sorted.length; j++) {
              columns[j] = !columns[j] ? sorted[j] : columns[j].concat(sorted[j]);
            }
          }
          return isRtl ? columns.reverse() : columns;
        }
        function sortBy(items, startProp, endProp) {
          var sorted = [[]];
          for (var i = 0; i < items.length; i++) {
            var el = items[i];
            if (!isVisible(el)) {
              continue;
            }
            var dim = getOffset(el);
            for (var j = sorted.length - 1; j >= 0; j--) {
              var current = sorted[j];
              if (!current[0]) {
                current.push(el);
                break;
              }
              var startDim = void 0;
              if (current[0].offsetParent === el.offsetParent) {
                startDim = getOffset(current[0]);
              } else {
                dim = getOffset(el, true);
                startDim = getOffset(current[0], true);
              }
              if (dim[startProp] >= startDim[endProp] - 1 && dim[startProp] !== startDim[startProp]) {
                sorted.push([el]);
                break;
              }
              if (dim[endProp] - 1 > startDim[startProp] || dim[startProp] === startDim[startProp]) {
                current.push(el);
                break;
              }
              if (j === 0) {
                sorted.unshift([el]);
                break;
              }
            }
          }
          return sorted;
        }
        function getOffset(element, offset2) {
          var assign2;
          if (offset2 === void 0)
            offset2 = false;
          var offsetTop = element.offsetTop;
          var offsetLeft = element.offsetLeft;
          var offsetHeight = element.offsetHeight;
          var offsetWidth = element.offsetWidth;
          if (offset2) {
            assign2 = offsetPosition(element), offsetTop = assign2[0], offsetLeft = assign2[1];
          }
          return {
            top: offsetTop,
            left: offsetLeft,
            bottom: offsetTop + offsetHeight,
            right: offsetLeft + offsetWidth
          };
        }
        var grid = {
          extends: Margin,
          mixins: [Class],
          name: "grid",
          props: {
            masonry: Boolean,
            parallax: Number
          },
          data: {
            margin: "uk-grid-margin",
            clsStack: "uk-grid-stack",
            masonry: false,
            parallax: 0
          },
          connected: function() {
            this.masonry && addClass(this.$el, "uk-flex-top uk-flex-wrap-top");
          },
          update: [
            {
              write: function(ref) {
                var columns = ref.columns;
                toggleClass(this.$el, this.clsStack, columns.length < 2);
              },
              events: ["resize"]
            },
            {
              read: function(data2) {
                var columns = data2.columns;
                var rows = data2.rows;
                if (!columns.length || !this.masonry && !this.parallax || positionedAbsolute(this.$el)) {
                  data2.translates = false;
                  return false;
                }
                var translates = false;
                var nodes = children(this.$el);
                var columnHeights = getColumnHeights(columns);
                var margin = getMarginTop(nodes, this.margin) * (rows.length - 1);
                var elHeight = Math.max.apply(Math, columnHeights) + margin;
                if (this.masonry) {
                  columns = columns.map(function(column) {
                    return sortBy$1(column, "offsetTop");
                  });
                  translates = getTranslates(rows, columns);
                }
                var padding = Math.abs(this.parallax);
                if (padding) {
                  padding = columnHeights.reduce(function(newPadding, hgt, i) {
                    return Math.max(newPadding, hgt + margin + (i % 2 ? padding : padding / 8) - elHeight);
                  }, 0);
                }
                return { padding, columns, translates, height: translates ? elHeight : "" };
              },
              write: function(ref) {
                var height2 = ref.height;
                var padding = ref.padding;
                css(this.$el, "paddingBottom", padding || "");
                height2 !== false && css(this.$el, "height", height2);
              },
              events: ["resize"]
            },
            {
              read: function(ref) {
                var height$1 = ref.height;
                if (positionedAbsolute(this.$el)) {
                  return false;
                }
                return {
                  scrolled: this.parallax ? scrolledOver(this.$el, height$1 ? height$1 - height(this.$el) : 0) * Math.abs(this.parallax) : false
                };
              },
              write: function(ref) {
                var columns = ref.columns;
                var scrolled = ref.scrolled;
                var translates = ref.translates;
                if (scrolled === false && !translates) {
                  return;
                }
                columns.forEach(function(column, i) {
                  return column.forEach(function(el, j) {
                    return css(el, "transform", !scrolled && !translates ? "" : "translateY(" + ((translates && -translates[i][j]) + (scrolled ? i % 2 ? scrolled : scrolled / 8 : 0)) + "px)");
                  });
                });
              },
              events: ["scroll", "resize"]
            }
          ]
        };
        function positionedAbsolute(el) {
          return children(el).some(function(el2) {
            return css(el2, "position") === "absolute";
          });
        }
        function getTranslates(rows, columns) {
          var rowHeights = rows.map(function(row) {
            return Math.max.apply(Math, row.map(function(el) {
              return el.offsetHeight;
            }));
          });
          return columns.map(function(elements) {
            var prev = 0;
            return elements.map(function(element, row) {
              return prev += row ? rowHeights[row - 1] - elements[row - 1].offsetHeight : 0;
            });
          });
        }
        function getMarginTop(nodes, cls) {
          var ref = nodes.filter(function(el) {
            return hasClass(el, cls);
          });
          var node = ref[0];
          return toFloat(node ? css(node, "marginTop") : css(nodes[0], "paddingLeft"));
        }
        function getColumnHeights(columns) {
          return columns.map(function(column) {
            return column.reduce(function(sum, el) {
              return sum + el.offsetHeight;
            }, 0);
          });
        }
        var FlexBug = isIE ? {
          props: {
            selMinHeight: String
          },
          data: {
            selMinHeight: false,
            forceHeight: false
          },
          computed: {
            elements: function(ref, $el) {
              var selMinHeight = ref.selMinHeight;
              return selMinHeight ? $$(selMinHeight, $el) : [$el];
            }
          },
          update: [
            {
              read: function() {
                css(this.elements, "height", "");
              },
              order: -5,
              events: ["resize"]
            },
            {
              write: function() {
                var this$1 = this;
                this.elements.forEach(function(el) {
                  var height2 = toFloat(css(el, "minHeight"));
                  if (height2 && (this$1.forceHeight || Math.round(height2 + boxModelAdjust(el, "height", "content-box")) >= el.offsetHeight)) {
                    css(el, "height", height2);
                  }
                });
              },
              order: 5,
              events: ["resize"]
            }
          ]
        } : {};
        var heightMatch = {
          mixins: [FlexBug],
          args: "target",
          props: {
            target: String,
            row: Boolean
          },
          data: {
            target: "> *",
            row: true,
            forceHeight: true
          },
          computed: {
            elements: function(ref, $el) {
              var target = ref.target;
              return $$(target, $el);
            }
          },
          update: {
            read: function() {
              return {
                rows: (this.row ? getRows(this.elements) : [this.elements]).map(match$1)
              };
            },
            write: function(ref) {
              var rows = ref.rows;
              rows.forEach(function(ref2) {
                var heights = ref2.heights;
                var elements = ref2.elements;
                return elements.forEach(function(el, i) {
                  return css(el, "minHeight", heights[i]);
                });
              });
            },
            events: ["resize"]
          }
        };
        function match$1(elements) {
          if (elements.length < 2) {
            return { heights: [""], elements };
          }
          var heights = elements.map(getHeight);
          var max = Math.max.apply(Math, heights);
          var hasMinHeight = elements.some(function(el) {
            return el.style.minHeight;
          });
          var hasShrunk = elements.some(function(el, i) {
            return !el.style.minHeight && heights[i] < max;
          });
          if (hasMinHeight && hasShrunk) {
            css(elements, "minHeight", "");
            heights = elements.map(getHeight);
            max = Math.max.apply(Math, heights);
          }
          heights = elements.map(function(el, i) {
            return heights[i] === max && toFloat(el.style.minHeight).toFixed(2) !== max.toFixed(2) ? "" : max;
          });
          return { heights, elements };
        }
        function getHeight(element) {
          var style = false;
          if (!isVisible(element)) {
            style = element.style.display;
            css(element, "display", "block", "important");
          }
          var height2 = dimensions(element).height - boxModelAdjust(element, "height", "content-box");
          if (style !== false) {
            css(element, "display", style);
          }
          return height2;
        }
        var heightViewport = {
          mixins: [FlexBug],
          props: {
            expand: Boolean,
            offsetTop: Boolean,
            offsetBottom: Boolean,
            minHeight: Number
          },
          data: {
            expand: false,
            offsetTop: false,
            offsetBottom: false,
            minHeight: 0
          },
          update: {
            read: function(ref) {
              var prev = ref.minHeight;
              if (!isVisible(this.$el)) {
                return false;
              }
              var minHeight = "";
              var box = boxModelAdjust(this.$el, "height", "content-box");
              if (this.expand) {
                minHeight = height(window) - (dimensions(document.documentElement).height - dimensions(this.$el).height) - box || "";
              } else {
                minHeight = "calc(100vh";
                if (this.offsetTop) {
                  var ref$1 = offset(this.$el);
                  var top = ref$1.top;
                  minHeight += top > 0 && top < height(window) / 2 ? " - " + top + "px" : "";
                }
                if (this.offsetBottom === true) {
                  minHeight += " - " + dimensions(this.$el.nextElementSibling).height + "px";
                } else if (isNumeric(this.offsetBottom)) {
                  minHeight += " - " + this.offsetBottom + "vh";
                } else if (this.offsetBottom && endsWith(this.offsetBottom, "px")) {
                  minHeight += " - " + toFloat(this.offsetBottom) + "px";
                } else if (isString(this.offsetBottom)) {
                  minHeight += " - " + dimensions(query(this.offsetBottom, this.$el)).height + "px";
                }
                minHeight += (box ? " - " + box + "px" : "") + ")";
              }
              return { minHeight, prev };
            },
            write: function(ref) {
              var minHeight = ref.minHeight;
              var prev = ref.prev;
              css(this.$el, { minHeight });
              if (minHeight !== prev) {
                this.$update(this.$el, "resize");
              }
              if (this.minHeight && toFloat(css(this.$el, "minHeight")) < this.minHeight) {
                css(this.$el, "minHeight", this.minHeight);
              }
            },
            events: ["resize"]
          }
        };
        var SVG = {
          args: "src",
          props: {
            id: Boolean,
            icon: String,
            src: String,
            style: String,
            width: Number,
            height: Number,
            ratio: Number,
            class: String,
            strokeAnimation: Boolean,
            focusable: Boolean,
            attributes: "list"
          },
          data: {
            ratio: 1,
            include: ["style", "class", "focusable"],
            class: "",
            strokeAnimation: false
          },
          beforeConnect: function() {
            this.class += " uk-svg";
          },
          connected: function() {
            var this$1 = this;
            var assign2;
            if (!this.icon && includes(this.src, "#")) {
              assign2 = this.src.split("#"), this.src = assign2[0], this.icon = assign2[1];
            }
            this.svg = this.getSvg().then(function(el) {
              if (this$1._connected) {
                var svg = insertSVG(el, this$1.$el);
                if (this$1.svgEl && svg !== this$1.svgEl) {
                  remove$1(this$1.svgEl);
                }
                this$1.applyAttributes(svg, el);
                this$1.$emit();
                return this$1.svgEl = svg;
              }
            }, noop);
          },
          disconnected: function() {
            var this$1 = this;
            this.svg.then(function(svg) {
              if (!this$1._connected) {
                if (isVoidElement(this$1.$el)) {
                  this$1.$el.hidden = false;
                }
                remove$1(svg);
                this$1.svgEl = null;
              }
            });
            this.svg = null;
          },
          update: {
            read: function() {
              return !!(this.strokeAnimation && this.svgEl && isVisible(this.svgEl));
            },
            write: function() {
              applyAnimation(this.svgEl);
            },
            type: ["resize"]
          },
          methods: {
            getSvg: function() {
              var this$1 = this;
              return loadSVG(this.src).then(function(svg) {
                return parseSVG(svg, this$1.icon) || Promise$1.reject("SVG not found.");
              });
            },
            applyAttributes: function(el, ref) {
              var this$1 = this;
              for (var prop in this.$options.props) {
                if (includes(this.include, prop) && prop in this) {
                  attr(el, prop, this[prop]);
                }
              }
              for (var attribute in this.attributes) {
                var ref$1 = this.attributes[attribute].split(":", 2);
                var prop$1 = ref$1[0];
                var value = ref$1[1];
                attr(el, prop$1, value);
              }
              if (!this.id) {
                removeAttr(el, "id");
              }
              var props2 = ["width", "height"];
              var dimensions2 = props2.map(function(prop2) {
                return this$1[prop2];
              });
              if (!dimensions2.some(function(val) {
                return val;
              })) {
                dimensions2 = props2.map(function(prop2) {
                  return attr(ref, prop2);
                });
              }
              var viewBox = attr(ref, "viewBox");
              if (viewBox && !dimensions2.some(function(val) {
                return val;
              })) {
                dimensions2 = viewBox.split(" ").slice(2);
              }
              dimensions2.forEach(function(val, i) {
                return attr(el, props2[i], toFloat(val) * this$1.ratio || null);
              });
            }
          }
        };
        var loadSVG = memoize(function(src) {
          return new Promise$1(function(resolve, reject) {
            if (!src) {
              reject();
              return;
            }
            if (startsWith(src, "data:")) {
              resolve(decodeURIComponent(src.split(",")[1]));
            } else {
              ajax(src).then(function(xhr) {
                return resolve(xhr.response);
              }, function() {
                return reject("SVG not found.");
              });
            }
          });
        });
        function parseSVG(svg, icon) {
          if (icon && includes(svg, "<symbol")) {
            svg = parseSymbols(svg, icon) || svg;
          }
          svg = $(svg.substr(svg.indexOf("<svg")));
          return svg && svg.hasChildNodes() && svg;
        }
        var symbolRe = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g;
        var symbols = {};
        function parseSymbols(svg, icon) {
          if (!symbols[svg]) {
            symbols[svg] = {};
            symbolRe.lastIndex = 0;
            var match2;
            while (match2 = symbolRe.exec(svg)) {
              symbols[svg][match2[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + match2[1] + "svg>";
            }
          }
          return symbols[svg][icon];
        }
        function applyAnimation(el) {
          var length = getMaxPathLength(el);
          if (length) {
            el.style.setProperty("--uk-animation-stroke", length);
          }
        }
        function getMaxPathLength(el) {
          return Math.ceil(Math.max.apply(Math, [0].concat($$("[stroke]", el).map(function(stroke) {
            try {
              return stroke.getTotalLength();
            } catch (e) {
              return 0;
            }
          }))));
        }
        function insertSVG(el, root) {
          if (isVoidElement(root) || root.tagName === "CANVAS") {
            root.hidden = true;
            var next = root.nextElementSibling;
            return equals(el, next) ? next : after(root, el);
          }
          var last2 = root.lastElementChild;
          return equals(el, last2) ? last2 : append(root, el);
        }
        function equals(el, other) {
          return isSVG(el) && isSVG(other) && innerHTML(el) === innerHTML(other);
        }
        function isSVG(el) {
          return el && el.tagName === "svg";
        }
        function innerHTML(el) {
          return (el.innerHTML || new XMLSerializer().serializeToString(el).replace(/<svg.*?>(.*?)<\/svg>/g, "$1")).replace(/\s/g, "");
        }
        var closeIcon = '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>';
        var closeLarge = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>';
        var marker = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>';
        var navbarToggleIcon = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>';
        var overlayIcon = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>';
        var paginationNext = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>';
        var paginationPrevious = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>';
        var searchIcon = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>';
        var searchLarge = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>';
        var searchNavbar = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>';
        var slidenavNext = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>';
        var slidenavNextLarge = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>';
        var slidenavPrevious = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>';
        var slidenavPreviousLarge = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>';
        var spinner = '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>';
        var totop = '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>';
        var icons = {
          spinner,
          totop,
          marker,
          "close-icon": closeIcon,
          "close-large": closeLarge,
          "navbar-toggle-icon": navbarToggleIcon,
          "overlay-icon": overlayIcon,
          "pagination-next": paginationNext,
          "pagination-previous": paginationPrevious,
          "search-icon": searchIcon,
          "search-large": searchLarge,
          "search-navbar": searchNavbar,
          "slidenav-next": slidenavNext,
          "slidenav-next-large": slidenavNextLarge,
          "slidenav-previous": slidenavPrevious,
          "slidenav-previous-large": slidenavPreviousLarge
        };
        var Icon = {
          install: install$3,
          extends: SVG,
          args: "icon",
          props: ["icon"],
          data: {
            include: ["focusable"]
          },
          isIcon: true,
          beforeConnect: function() {
            addClass(this.$el, "uk-icon");
          },
          methods: {
            getSvg: function() {
              var icon = getIcon(this.icon);
              if (!icon) {
                return Promise$1.reject("Icon not found.");
              }
              return Promise$1.resolve(icon);
            }
          }
        };
        var IconComponent = {
          args: false,
          extends: Icon,
          data: function(vm) {
            return {
              icon: hyphenate(vm.constructor.options.name)
            };
          },
          beforeConnect: function() {
            addClass(this.$el, this.$name);
          }
        };
        var Slidenav = {
          extends: IconComponent,
          beforeConnect: function() {
            addClass(this.$el, "uk-slidenav");
          },
          computed: {
            icon: function(ref, $el) {
              var icon = ref.icon;
              return hasClass($el, "uk-slidenav-large") ? icon + "-large" : icon;
            }
          }
        };
        var Search = {
          extends: IconComponent,
          computed: {
            icon: function(ref, $el) {
              var icon = ref.icon;
              return hasClass($el, "uk-search-icon") && parents($el, ".uk-search-large").length ? "search-large" : parents($el, ".uk-search-navbar").length ? "search-navbar" : icon;
            }
          }
        };
        var Close = {
          extends: IconComponent,
          computed: {
            icon: function() {
              return "close-" + (hasClass(this.$el, "uk-close-large") ? "large" : "icon");
            }
          }
        };
        var Spinner = {
          extends: IconComponent,
          connected: function() {
            var this$1 = this;
            this.svg.then(function(svg) {
              return svg && this$1.ratio !== 1 && css($("circle", svg), "strokeWidth", 1 / this$1.ratio);
            });
          }
        };
        var parsed = {};
        function install$3(UIkit2) {
          UIkit2.icon.add = function(name, svg) {
            var obj2;
            var added = isString(name) ? (obj2 = {}, obj2[name] = svg, obj2) : name;
            each(added, function(svg2, name2) {
              icons[name2] = svg2;
              delete parsed[name2];
            });
            if (UIkit2._initialized) {
              apply$1(document.body, function(el) {
                return each(UIkit2.getComponents(el), function(cmp) {
                  cmp.$options.isIcon && cmp.icon in added && cmp.$reset();
                });
              });
            }
          };
        }
        function getIcon(icon) {
          if (!icons[icon]) {
            return null;
          }
          if (!parsed[icon]) {
            parsed[icon] = $((icons[applyRtl(icon)] || icons[icon]).trim());
          }
          return parsed[icon].cloneNode(true);
        }
        function applyRtl(icon) {
          return isRtl ? swap(swap(icon, "left", "right"), "previous", "next") : icon;
        }
        var img = {
          args: "dataSrc",
          props: {
            dataSrc: String,
            dataSrcset: Boolean,
            sizes: String,
            width: Number,
            height: Number,
            offsetTop: String,
            offsetLeft: String,
            target: String
          },
          data: {
            dataSrc: "",
            dataSrcset: false,
            sizes: false,
            width: false,
            height: false,
            offsetTop: "50vh",
            offsetLeft: "50vw",
            target: false
          },
          computed: {
            cacheKey: function(ref) {
              var dataSrc = ref.dataSrc;
              return this.$name + "." + dataSrc;
            },
            width: function(ref) {
              var width2 = ref.width;
              var dataWidth = ref.dataWidth;
              return width2 || dataWidth;
            },
            height: function(ref) {
              var height2 = ref.height;
              var dataHeight = ref.dataHeight;
              return height2 || dataHeight;
            },
            sizes: function(ref) {
              var sizes = ref.sizes;
              var dataSizes = ref.dataSizes;
              return sizes || dataSizes;
            },
            isImg: function(_, $el) {
              return isImg($el);
            },
            target: {
              get: function(ref) {
                var target = ref.target;
                return [this.$el].concat(queryAll(target, this.$el));
              },
              watch: function() {
                this.observe();
              }
            },
            offsetTop: function(ref) {
              var offsetTop = ref.offsetTop;
              return toPx(offsetTop, "height");
            },
            offsetLeft: function(ref) {
              var offsetLeft = ref.offsetLeft;
              return toPx(offsetLeft, "width");
            }
          },
          connected: function() {
            if (!window.IntersectionObserver) {
              setSrcAttrs(this.$el, this.dataSrc, this.dataSrcset, this.sizes);
              return;
            }
            if (storage[this.cacheKey]) {
              setSrcAttrs(this.$el, storage[this.cacheKey], this.dataSrcset, this.sizes);
            } else if (this.isImg && this.width && this.height) {
              setSrcAttrs(this.$el, getPlaceholderImage(this.width, this.height, this.sizes));
            }
            this.observer = new IntersectionObserver(this.load, {
              rootMargin: this.offsetTop + "px " + this.offsetLeft + "px"
            });
            requestAnimationFrame(this.observe);
          },
          disconnected: function() {
            this.observer && this.observer.disconnect();
          },
          update: {
            read: function(ref) {
              var this$1 = this;
              var image = ref.image;
              if (!this.observer) {
                return false;
              }
              if (!image && document.readyState === "complete") {
                this.load(this.observer.takeRecords());
              }
              if (this.isImg) {
                return false;
              }
              image && image.then(function(img2) {
                return img2 && img2.currentSrc !== "" && setSrcAttrs(this$1.$el, currentSrc(img2));
              });
            },
            write: function(data2) {
              if (this.dataSrcset && window.devicePixelRatio !== 1) {
                var bgSize = css(this.$el, "backgroundSize");
                if (bgSize.match(/^(auto\s?)+$/) || toFloat(bgSize) === data2.bgSize) {
                  data2.bgSize = getSourceSize(this.dataSrcset, this.sizes);
                  css(this.$el, "backgroundSize", data2.bgSize + "px");
                }
              }
            },
            events: ["resize"]
          },
          methods: {
            load: function(entries) {
              var this$1 = this;
              if (!entries.some(function(entry) {
                return isUndefined(entry.isIntersecting) || entry.isIntersecting;
              })) {
                return;
              }
              this._data.image = getImage(this.dataSrc, this.dataSrcset, this.sizes).then(function(img2) {
                setSrcAttrs(this$1.$el, currentSrc(img2), img2.srcset, img2.sizes);
                storage[this$1.cacheKey] = currentSrc(img2);
                return img2;
              }, function(e) {
                return trigger(this$1.$el, new e.constructor(e.type, e));
              });
              this.observer.disconnect();
            },
            observe: function() {
              var this$1 = this;
              if (this._connected && !this._data.image) {
                this.target.forEach(function(el) {
                  return this$1.observer.observe(el);
                });
              }
            }
          }
        };
        function setSrcAttrs(el, src, srcset, sizes) {
          if (isImg(el)) {
            var set = function(prop, val) {
              return val && val !== el[prop] && (el[prop] = val);
            };
            set("sizes", sizes);
            set("srcset", srcset);
            set("src", src);
          } else if (src) {
            var change = !includes(el.style.backgroundImage, src);
            if (change) {
              css(el, "backgroundImage", "url(" + escape(src) + ")");
              trigger(el, createEvent("load", false));
            }
          }
        }
        function getPlaceholderImage(width2, height2, sizes) {
          var assign2;
          if (sizes) {
            assign2 = Dimensions.ratio({ width: width2, height: height2 }, "width", toPx(sizesToPixel(sizes))), width2 = assign2.width, height2 = assign2.height;
          }
          return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' + width2 + '" height="' + height2 + '"></svg>';
        }
        var sizesRe = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;
        function sizesToPixel(sizes) {
          var matches2;
          sizesRe.lastIndex = 0;
          while (matches2 = sizesRe.exec(sizes)) {
            if (!matches2[1] || window.matchMedia(matches2[1]).matches) {
              matches2 = evaluateSize(matches2[2]);
              break;
            }
          }
          return matches2 || "100vw";
        }
        var sizeRe = /\d+(?:\w+|%)/g;
        var additionRe = /[+-]?(\d+)/g;
        function evaluateSize(size) {
          return startsWith(size, "calc") ? size.slice(5, -1).replace(sizeRe, function(size2) {
            return toPx(size2);
          }).replace(/ /g, "").match(additionRe).reduce(function(a, b) {
            return a + +b;
          }, 0) : size;
        }
        var srcSetRe = /\s+\d+w\s*(?:,|$)/g;
        function getSourceSize(srcset, sizes) {
          var srcSize = toPx(sizesToPixel(sizes));
          var descriptors = (srcset.match(srcSetRe) || []).map(toFloat).sort(function(a, b) {
            return a - b;
          });
          return descriptors.filter(function(size) {
            return size >= srcSize;
          })[0] || descriptors.pop() || "";
        }
        function isImg(el) {
          return el.tagName === "IMG";
        }
        function currentSrc(el) {
          return el.currentSrc || el.src;
        }
        var key = "__test__";
        var storage;
        try {
          storage = window.sessionStorage || {};
          storage[key] = 1;
          delete storage[key];
        } catch (e) {
          storage = {};
        }
        var Media = {
          props: {
            media: Boolean
          },
          data: {
            media: false
          },
          computed: {
            matchMedia: function() {
              var media = toMedia(this.media);
              return !media || window.matchMedia(media).matches;
            }
          }
        };
        function toMedia(value) {
          if (isString(value)) {
            if (value[0] === "@") {
              var name = "breakpoint-" + value.substr(1);
              value = toFloat(getCssVar(name));
            } else if (isNaN(value)) {
              return value;
            }
          }
          return value && !isNaN(value) ? "(min-width: " + value + "px)" : false;
        }
        var leader = {
          mixins: [Class, Media],
          props: {
            fill: String
          },
          data: {
            fill: "",
            clsWrapper: "uk-leader-fill",
            clsHide: "uk-leader-hide",
            attrFill: "data-fill"
          },
          computed: {
            fill: function(ref) {
              var fill = ref.fill;
              return fill || getCssVar("leader-fill-content");
            }
          },
          connected: function() {
            var assign2;
            assign2 = wrapInner(this.$el, '<span class="' + this.clsWrapper + '">'), this.wrapper = assign2[0];
          },
          disconnected: function() {
            unwrap(this.wrapper.childNodes);
          },
          update: {
            read: function(ref) {
              var changed = ref.changed;
              var width2 = ref.width;
              var prev = width2;
              width2 = Math.floor(this.$el.offsetWidth / 2);
              return {
                width: width2,
                fill: this.fill,
                changed: changed || prev !== width2,
                hide: !this.matchMedia
              };
            },
            write: function(data2) {
              toggleClass(this.wrapper, this.clsHide, data2.hide);
              if (data2.changed) {
                data2.changed = false;
                attr(this.wrapper, this.attrFill, new Array(data2.width).join(data2.fill));
              }
            },
            events: ["resize"]
          }
        };
        var active = [];
        var Modal = {
          mixins: [Class, Container, Togglable],
          props: {
            selPanel: String,
            selClose: String,
            escClose: Boolean,
            bgClose: Boolean,
            stack: Boolean
          },
          data: {
            cls: "uk-open",
            escClose: true,
            bgClose: true,
            overlay: true,
            stack: false
          },
          computed: {
            panel: function(ref, $el) {
              var selPanel = ref.selPanel;
              return $(selPanel, $el);
            },
            transitionElement: function() {
              return this.panel;
            },
            bgClose: function(ref) {
              var bgClose = ref.bgClose;
              return bgClose && this.panel;
            }
          },
          beforeDisconnect: function() {
            if (this.isToggled()) {
              this.toggleElement(this.$el, false, false);
            }
          },
          events: [
            {
              name: "click",
              delegate: function() {
                return this.selClose;
              },
              handler: function(e) {
                e.preventDefault();
                this.hide();
              }
            },
            {
              name: "toggle",
              self: true,
              handler: function(e) {
                if (e.defaultPrevented) {
                  return;
                }
                e.preventDefault();
                if (this.isToggled() === includes(active, this)) {
                  this.toggle();
                }
              }
            },
            {
              name: "beforeshow",
              self: true,
              handler: function(e) {
                if (includes(active, this)) {
                  return false;
                }
                if (!this.stack && active.length) {
                  Promise$1.all(active.map(function(modal2) {
                    return modal2.hide();
                  })).then(this.show);
                  e.preventDefault();
                } else {
                  active.push(this);
                }
              }
            },
            {
              name: "show",
              self: true,
              handler: function() {
                var this$1 = this;
                var docEl = document.documentElement;
                if (width(window) > docEl.clientWidth && this.overlay) {
                  css(document.body, "overflowY", "scroll");
                }
                if (this.stack) {
                  css(this.$el, "zIndex", toFloat(css(this.$el, "zIndex")) + active.length);
                }
                addClass(docEl, this.clsPage);
                if (this.bgClose) {
                  once(this.$el, "hide", on(document, pointerDown, function(ref) {
                    var target = ref.target;
                    if (last(active) !== this$1 || this$1.overlay && !within(target, this$1.$el) || within(target, this$1.panel)) {
                      return;
                    }
                    once(document, pointerUp + " " + pointerCancel + " scroll", function(ref2) {
                      var defaultPrevented = ref2.defaultPrevented;
                      var type = ref2.type;
                      var newTarget = ref2.target;
                      if (!defaultPrevented && type === pointerUp && target === newTarget) {
                        this$1.hide();
                      }
                    }, true);
                  }), { self: true });
                }
                if (this.escClose) {
                  once(this.$el, "hide", on(document, "keydown", function(e) {
                    if (e.keyCode === 27 && last(active) === this$1) {
                      this$1.hide();
                    }
                  }), { self: true });
                }
              }
            },
            {
              name: "hidden",
              self: true,
              handler: function() {
                var this$1 = this;
                if (includes(active, this)) {
                  active.splice(active.indexOf(this), 1);
                }
                if (!active.length) {
                  css(document.body, "overflowY", "");
                }
                css(this.$el, "zIndex", "");
                if (!active.some(function(modal2) {
                  return modal2.clsPage === this$1.clsPage;
                })) {
                  removeClass(document.documentElement, this.clsPage);
                }
              }
            }
          ],
          methods: {
            toggle: function() {
              return this.isToggled() ? this.hide() : this.show();
            },
            show: function() {
              var this$1 = this;
              if (this.container && parent(this.$el) !== this.container) {
                append(this.container, this.$el);
                return new Promise$1(function(resolve) {
                  return requestAnimationFrame(function() {
                    return this$1.show().then(resolve);
                  });
                });
              }
              return this.toggleElement(this.$el, true, animate(this));
            },
            hide: function() {
              return this.toggleElement(this.$el, false, animate(this));
            }
          }
        };
        function animate(ref) {
          var transitionElement = ref.transitionElement;
          var _toggle = ref._toggle;
          return function(el, show) {
            return new Promise$1(function(resolve, reject) {
              return once(el, "show hide", function() {
                el._reject && el._reject();
                el._reject = reject;
                _toggle(el, show);
                var off2 = once(transitionElement, "transitionstart", function() {
                  once(transitionElement, "transitionend transitioncancel", resolve, { self: true });
                  clearTimeout(timer);
                }, { self: true });
                var timer = setTimeout(function() {
                  off2();
                  resolve();
                }, toMs(css(transitionElement, "transitionDuration")));
              });
            }).then(function() {
              return delete el._reject;
            });
          };
        }
        var modal = {
          install: install$2,
          mixins: [Modal],
          data: {
            clsPage: "uk-modal-page",
            selPanel: ".uk-modal-dialog",
            selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
          },
          events: [
            {
              name: "show",
              self: true,
              handler: function() {
                if (hasClass(this.panel, "uk-margin-auto-vertical")) {
                  addClass(this.$el, "uk-flex");
                } else {
                  css(this.$el, "display", "block");
                }
                height(this.$el);
              }
            },
            {
              name: "hidden",
              self: true,
              handler: function() {
                css(this.$el, "display", "");
                removeClass(this.$el, "uk-flex");
              }
            }
          ]
        };
        function install$2(ref) {
          var modal2 = ref.modal;
          modal2.dialog = function(content, options) {
            var dialog = modal2('<div class="uk-modal"> <div class="uk-modal-dialog">' + content + "</div> </div>", options);
            dialog.show();
            on(dialog.$el, "hidden", function() {
              return Promise$1.resolve().then(function() {
                return dialog.$destroy(true);
              });
            }, { self: true });
            return dialog;
          };
          modal2.alert = function(message, options) {
            return openDialog(function(ref2) {
              var labels = ref2.labels;
              return '<div class="uk-modal-body">' + (isString(message) ? message : html(message)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + labels.ok + "</button> </div>";
            }, options, function(deferred) {
              return deferred.resolve();
            });
          };
          modal2.confirm = function(message, options) {
            return openDialog(function(ref2) {
              var labels = ref2.labels;
              return '<form> <div class="uk-modal-body">' + (isString(message) ? message : html(message)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + labels.cancel + '</button> <button class="uk-button uk-button-primary" autofocus>' + labels.ok + "</button> </div> </form>";
            }, options, function(deferred) {
              return deferred.reject();
            });
          };
          modal2.prompt = function(message, value, options) {
            return openDialog(function(ref2) {
              var labels = ref2.labels;
              return '<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' + (isString(message) ? message : html(message)) + '</label> <input class="uk-input" value="' + (value || "") + '" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + labels.cancel + '</button> <button class="uk-button uk-button-primary">' + labels.ok + "</button> </div> </form>";
            }, options, function(deferred) {
              return deferred.resolve(null);
            }, function(dialog) {
              return $("input", dialog.$el).value;
            });
          };
          modal2.labels = {
            ok: "Ok",
            cancel: "Cancel"
          };
          function openDialog(tmpl, options, hideFn, submitFn) {
            options = assign({ bgClose: false, escClose: true, labels: modal2.labels }, options);
            var dialog = modal2.dialog(tmpl(options), options);
            var deferred = new Deferred();
            var resolved = false;
            on(dialog.$el, "submit", "form", function(e) {
              e.preventDefault();
              deferred.resolve(submitFn && submitFn(dialog));
              resolved = true;
              dialog.hide();
            });
            on(dialog.$el, "hide", function() {
              return !resolved && hideFn(deferred);
            });
            deferred.promise.dialog = dialog;
            return deferred.promise;
          }
        }
        var nav = {
          extends: Accordion,
          data: {
            targets: "> .uk-parent",
            toggle: "> a",
            content: "> ul"
          }
        };
        var navItem = ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle";
        var navbar = {
          mixins: [Class, Container, FlexBug],
          props: {
            dropdown: String,
            mode: "list",
            align: String,
            offset: Number,
            boundary: Boolean,
            boundaryAlign: Boolean,
            clsDrop: String,
            delayShow: Number,
            delayHide: Number,
            dropbar: Boolean,
            dropbarMode: String,
            dropbarAnchor: Boolean,
            duration: Number
          },
          data: {
            dropdown: navItem,
            align: !isRtl ? "left" : "right",
            clsDrop: "uk-navbar-dropdown",
            mode: void 0,
            offset: void 0,
            delayShow: void 0,
            delayHide: void 0,
            boundaryAlign: void 0,
            flip: "x",
            boundary: true,
            dropbar: false,
            dropbarMode: "slide",
            dropbarAnchor: false,
            duration: 200,
            forceHeight: true,
            selMinHeight: navItem,
            container: false
          },
          computed: {
            boundary: function(ref, $el) {
              var boundary = ref.boundary;
              var boundaryAlign = ref.boundaryAlign;
              return boundary === true || boundaryAlign ? $el : boundary;
            },
            dropbarAnchor: function(ref, $el) {
              var dropbarAnchor = ref.dropbarAnchor;
              return query(dropbarAnchor, $el);
            },
            pos: function(ref) {
              var align = ref.align;
              return "bottom-" + align;
            },
            dropbar: {
              get: function(ref) {
                var dropbar = ref.dropbar;
                if (!dropbar) {
                  return null;
                }
                dropbar = this._dropbar || query(dropbar, this.$el) || $("+ .uk-navbar-dropbar", this.$el);
                return dropbar ? dropbar : this._dropbar = $("<div></div>");
              },
              watch: function(dropbar) {
                addClass(dropbar, "uk-navbar-dropbar");
              },
              immediate: true
            },
            dropContainer: function(_, $el) {
              return this.container || $el;
            },
            dropdowns: {
              get: function(ref, $el) {
                var clsDrop = ref.clsDrop;
                var dropdowns = $$("." + clsDrop, $el);
                if (this.container !== $el) {
                  $$("." + clsDrop, this.container).forEach(function(el) {
                    return !includes(dropdowns, el) && dropdowns.push(el);
                  });
                }
                return dropdowns;
              },
              watch: function(dropdowns) {
                var this$1 = this;
                this.$create("drop", dropdowns.filter(function(el) {
                  return !this$1.getDropdown(el);
                }), assign({}, this.$props, { boundary: this.boundary, pos: this.pos, offset: this.dropbar || this.offset }));
              },
              immediate: true
            }
          },
          disconnected: function() {
            this.dropbar && remove$1(this.dropbar);
            delete this._dropbar;
          },
          events: [
            {
              name: "mouseover",
              delegate: function() {
                return this.dropdown;
              },
              handler: function(ref) {
                var current = ref.current;
                var active2 = this.getActive();
                if (active2 && active2.target && !within(active2.target, current) && !active2.tracker.movesTo(active2.$el)) {
                  active2.hide(false);
                }
              }
            },
            {
              name: "mouseleave",
              el: function() {
                return this.dropbar;
              },
              handler: function() {
                var active2 = this.getActive();
                if (active2 && !this.dropdowns.some(function(el) {
                  return matches(el, ":hover");
                })) {
                  active2.hide();
                }
              }
            },
            {
              name: "beforeshow",
              el: function() {
                return this.dropContainer;
              },
              filter: function() {
                return this.dropbar;
              },
              handler: function() {
                if (!parent(this.dropbar)) {
                  after(this.dropbarAnchor || this.$el, this.dropbar);
                }
              }
            },
            {
              name: "show",
              el: function() {
                return this.dropContainer;
              },
              filter: function() {
                return this.dropbar;
              },
              handler: function(_, ref) {
                var $el = ref.$el;
                var dir = ref.dir;
                if (!hasClass($el, this.clsDrop)) {
                  return;
                }
                if (this.dropbarMode === "slide") {
                  addClass(this.dropbar, "uk-navbar-dropbar-slide");
                }
                this.clsDrop && addClass($el, this.clsDrop + "-dropbar");
                if (dir === "bottom") {
                  this.transitionTo($el.offsetHeight + toFloat(css($el, "marginTop")) + toFloat(css($el, "marginBottom")), $el);
                }
              }
            },
            {
              name: "beforehide",
              el: function() {
                return this.dropContainer;
              },
              filter: function() {
                return this.dropbar;
              },
              handler: function(e, ref) {
                var $el = ref.$el;
                var active2 = this.getActive();
                if (matches(this.dropbar, ":hover") && active2 && active2.$el === $el) {
                  e.preventDefault();
                }
              }
            },
            {
              name: "hide",
              el: function() {
                return this.dropContainer;
              },
              filter: function() {
                return this.dropbar;
              },
              handler: function(_, ref) {
                var $el = ref.$el;
                if (!hasClass($el, this.clsDrop)) {
                  return;
                }
                var active2 = this.getActive();
                if (!active2 || active2 && active2.$el === $el) {
                  this.transitionTo(0);
                }
              }
            }
          ],
          methods: {
            getActive: function() {
              return active$1 && includes(active$1.mode, "hover") && within(active$1.target, this.$el) && active$1;
            },
            transitionTo: function(newHeight, el) {
              var this$1 = this;
              var ref = this;
              var dropbar = ref.dropbar;
              var oldHeight = isVisible(dropbar) ? height(dropbar) : 0;
              el = oldHeight < newHeight && el;
              css(el, "clip", "rect(0," + el.offsetWidth + "px," + oldHeight + "px,0)");
              height(dropbar, oldHeight);
              Transition.cancel([el, dropbar]);
              return Promise$1.all([
                Transition.start(dropbar, { height: newHeight }, this.duration),
                Transition.start(el, { clip: "rect(0," + el.offsetWidth + "px," + newHeight + "px,0)" }, this.duration)
              ]).catch(noop).then(function() {
                css(el, { clip: "" });
                this$1.$update(dropbar);
              });
            },
            getDropdown: function(el) {
              return this.$getComponent(el, "drop") || this.$getComponent(el, "dropdown");
            }
          }
        };
        var offcanvas = {
          mixins: [Modal],
          args: "mode",
          props: {
            mode: String,
            flip: Boolean,
            overlay: Boolean
          },
          data: {
            mode: "slide",
            flip: false,
            overlay: false,
            clsPage: "uk-offcanvas-page",
            clsContainer: "uk-offcanvas-container",
            selPanel: ".uk-offcanvas-bar",
            clsFlip: "uk-offcanvas-flip",
            clsContainerAnimation: "uk-offcanvas-container-animation",
            clsSidebarAnimation: "uk-offcanvas-bar-animation",
            clsMode: "uk-offcanvas",
            clsOverlay: "uk-offcanvas-overlay",
            selClose: ".uk-offcanvas-close",
            container: false
          },
          computed: {
            clsFlip: function(ref) {
              var flip = ref.flip;
              var clsFlip = ref.clsFlip;
              return flip ? clsFlip : "";
            },
            clsOverlay: function(ref) {
              var overlay = ref.overlay;
              var clsOverlay = ref.clsOverlay;
              return overlay ? clsOverlay : "";
            },
            clsMode: function(ref) {
              var mode = ref.mode;
              var clsMode = ref.clsMode;
              return clsMode + "-" + mode;
            },
            clsSidebarAnimation: function(ref) {
              var mode = ref.mode;
              var clsSidebarAnimation = ref.clsSidebarAnimation;
              return mode === "none" || mode === "reveal" ? "" : clsSidebarAnimation;
            },
            clsContainerAnimation: function(ref) {
              var mode = ref.mode;
              var clsContainerAnimation = ref.clsContainerAnimation;
              return mode !== "push" && mode !== "reveal" ? "" : clsContainerAnimation;
            },
            transitionElement: function(ref) {
              var mode = ref.mode;
              return mode === "reveal" ? parent(this.panel) : this.panel;
            }
          },
          update: {
            read: function() {
              if (this.isToggled() && !isVisible(this.$el)) {
                this.hide();
              }
            },
            events: ["resize"]
          },
          events: [
            {
              name: "click",
              delegate: function() {
                return 'a[href^="#"]';
              },
              handler: function(ref) {
                var hash = ref.current.hash;
                var defaultPrevented = ref.defaultPrevented;
                if (!defaultPrevented && hash && $(hash, document.body)) {
                  this.hide();
                }
              }
            },
            {
              name: "touchstart",
              passive: true,
              el: function() {
                return this.panel;
              },
              handler: function(ref) {
                var targetTouches = ref.targetTouches;
                if (targetTouches.length === 1) {
                  this.clientY = targetTouches[0].clientY;
                }
              }
            },
            {
              name: "touchmove",
              self: true,
              passive: false,
              filter: function() {
                return this.overlay;
              },
              handler: function(e) {
                e.cancelable && e.preventDefault();
              }
            },
            {
              name: "touchmove",
              passive: false,
              el: function() {
                return this.panel;
              },
              handler: function(e) {
                if (e.targetTouches.length !== 1) {
                  return;
                }
                var clientY = e.targetTouches[0].clientY - this.clientY;
                var ref = this.panel;
                var scrollTop2 = ref.scrollTop;
                var scrollHeight = ref.scrollHeight;
                var clientHeight = ref.clientHeight;
                if (clientHeight >= scrollHeight || scrollTop2 === 0 && clientY > 0 || scrollHeight - scrollTop2 <= clientHeight && clientY < 0) {
                  e.cancelable && e.preventDefault();
                }
              }
            },
            {
              name: "show",
              self: true,
              handler: function() {
                if (this.mode === "reveal" && !hasClass(parent(this.panel), this.clsMode)) {
                  wrapAll(this.panel, "<div>");
                  addClass(parent(this.panel), this.clsMode);
                }
                css(document.documentElement, "overflowY", this.overlay ? "hidden" : "");
                addClass(document.body, this.clsContainer, this.clsFlip);
                css(document.body, "touch-action", "pan-y pinch-zoom");
                css(this.$el, "display", "block");
                addClass(this.$el, this.clsOverlay);
                addClass(this.panel, this.clsSidebarAnimation, this.mode !== "reveal" ? this.clsMode : "");
                height(document.body);
                addClass(document.body, this.clsContainerAnimation);
                this.clsContainerAnimation && suppressUserScale();
              }
            },
            {
              name: "hide",
              self: true,
              handler: function() {
                removeClass(document.body, this.clsContainerAnimation);
                css(document.body, "touch-action", "");
              }
            },
            {
              name: "hidden",
              self: true,
              handler: function() {
                this.clsContainerAnimation && resumeUserScale();
                if (this.mode === "reveal") {
                  unwrap(this.panel);
                }
                removeClass(this.panel, this.clsSidebarAnimation, this.clsMode);
                removeClass(this.$el, this.clsOverlay);
                css(this.$el, "display", "");
                removeClass(document.body, this.clsContainer, this.clsFlip);
                css(document.documentElement, "overflowY", "");
              }
            },
            {
              name: "swipeLeft swipeRight",
              handler: function(e) {
                if (this.isToggled() && endsWith(e.type, "Left") ^ this.flip) {
                  this.hide();
                }
              }
            }
          ]
        };
        function suppressUserScale() {
          getViewport().content += ",user-scalable=0";
        }
        function resumeUserScale() {
          var viewport = getViewport();
          viewport.content = viewport.content.replace(/,user-scalable=0$/, "");
        }
        function getViewport() {
          return $('meta[name="viewport"]', document.head) || append(document.head, '<meta name="viewport">');
        }
        var overflowAuto = {
          mixins: [Class],
          props: {
            selContainer: String,
            selContent: String,
            minHeight: Number
          },
          data: {
            selContainer: ".uk-modal",
            selContent: ".uk-modal-dialog",
            minHeight: 150
          },
          computed: {
            container: function(ref, $el) {
              var selContainer = ref.selContainer;
              return closest($el, selContainer);
            },
            content: function(ref, $el) {
              var selContent = ref.selContent;
              return closest($el, selContent);
            }
          },
          connected: function() {
            css(this.$el, "minHeight", this.minHeight);
          },
          update: {
            read: function() {
              if (!this.content || !this.container || !isVisible(this.$el)) {
                return false;
              }
              return {
                current: toFloat(css(this.$el, "maxHeight")),
                max: Math.max(this.minHeight, height(this.container) - (dimensions(this.content).height - height(this.$el)))
              };
            },
            write: function(ref) {
              var current = ref.current;
              var max = ref.max;
              css(this.$el, "maxHeight", max);
              if (Math.round(current) !== Math.round(max)) {
                trigger(this.$el, "resize");
              }
            },
            events: ["resize"]
          }
        };
        var responsive = {
          props: ["width", "height"],
          connected: function() {
            addClass(this.$el, "uk-responsive-width");
          },
          update: {
            read: function() {
              return isVisible(this.$el) && this.width && this.height ? { width: width(parent(this.$el)), height: this.height } : false;
            },
            write: function(dim) {
              height(this.$el, Dimensions.contain({
                height: this.height,
                width: this.width
              }, dim).height);
            },
            events: ["resize"]
          }
        };
        var scroll = {
          props: {
            offset: Number
          },
          data: {
            offset: 0
          },
          methods: {
            scrollTo: function(el) {
              var this$1 = this;
              el = el && $(el) || document.body;
              if (trigger(this.$el, "beforescroll", [this, el])) {
                scrollIntoView(el, { offset: this.offset }).then(function() {
                  return trigger(this$1.$el, "scrolled", [this$1, el]);
                });
              }
            }
          },
          events: {
            click: function(e) {
              if (e.defaultPrevented) {
                return;
              }
              e.preventDefault();
              this.scrollTo("#" + escape(decodeURIComponent((this.$el.hash || "").substr(1))));
            }
          }
        };
        var stateKey = "_ukScrollspy";
        var scrollspy = {
          args: "cls",
          props: {
            cls: String,
            target: String,
            hidden: Boolean,
            offsetTop: Number,
            offsetLeft: Number,
            repeat: Boolean,
            delay: Number
          },
          data: function() {
            return {
              cls: false,
              target: false,
              hidden: true,
              offsetTop: 0,
              offsetLeft: 0,
              repeat: false,
              delay: 0,
              inViewClass: "uk-scrollspy-inview"
            };
          },
          computed: {
            elements: {
              get: function(ref, $el) {
                var target = ref.target;
                return target ? $$(target, $el) : [$el];
              },
              watch: function(elements) {
                if (this.hidden) {
                  css(filter$1(elements, ":not(." + this.inViewClass + ")"), "visibility", "hidden");
                }
              },
              immediate: true
            }
          },
          disconnected: function() {
            var this$1 = this;
            this.elements.forEach(function(el) {
              removeClass(el, this$1.inViewClass, el[stateKey] ? el[stateKey].cls : "");
              delete el[stateKey];
            });
          },
          update: [
            {
              read: function(data$1) {
                var this$1 = this;
                if (!data$1.update) {
                  Promise$1.resolve().then(function() {
                    this$1.$emit();
                    data$1.update = true;
                  });
                  return false;
                }
                this.elements.forEach(function(el) {
                  if (!el[stateKey]) {
                    el[stateKey] = { cls: data(el, "uk-scrollspy-class") || this$1.cls };
                  }
                  el[stateKey].show = isInView(el, this$1.offsetTop, this$1.offsetLeft);
                });
              },
              write: function(data2) {
                var this$1 = this;
                this.elements.forEach(function(el) {
                  var state = el[stateKey];
                  if (state.show && !state.inview && !state.queued) {
                    state.queued = true;
                    data2.promise = (data2.promise || Promise$1.resolve()).then(function() {
                      return new Promise$1(function(resolve) {
                        return setTimeout(resolve, this$1.delay);
                      });
                    }).then(function() {
                      this$1.toggle(el, true);
                      setTimeout(function() {
                        state.queued = false;
                        this$1.$emit();
                      }, 300);
                    });
                  } else if (!state.show && state.inview && !state.queued && this$1.repeat) {
                    this$1.toggle(el, false);
                  }
                });
              },
              events: ["scroll", "resize"]
            }
          ],
          methods: {
            toggle: function(el, inview) {
              var state = el[stateKey];
              state.off && state.off();
              css(el, "visibility", !inview && this.hidden ? "hidden" : "");
              toggleClass(el, this.inViewClass, inview);
              toggleClass(el, state.cls);
              if (/\buk-animation-/.test(state.cls)) {
                state.off = once(el, "animationcancel animationend", function() {
                  return removeClasses(el, "uk-animation-[\\w-]+");
                });
              }
              trigger(el, inview ? "inview" : "outview");
              state.inview = inview;
              this.$update(el);
            }
          }
        };
        var scrollspyNav = {
          props: {
            cls: String,
            closest: String,
            scroll: Boolean,
            overflow: Boolean,
            offset: Number
          },
          data: {
            cls: "uk-active",
            closest: false,
            scroll: false,
            overflow: true,
            offset: 0
          },
          computed: {
            links: {
              get: function(_, $el) {
                return $$('a[href^="#"]', $el).filter(function(el) {
                  return el.hash;
                });
              },
              watch: function(links) {
                if (this.scroll) {
                  this.$create("scroll", links, { offset: this.offset || 0 });
                }
              },
              immediate: true
            },
            targets: function() {
              return $$(this.links.map(function(el) {
                return escape(el.hash).substr(1);
              }).join(","));
            },
            elements: function(ref) {
              var selector = ref.closest;
              return closest(this.links, selector || "*");
            }
          },
          update: [
            {
              read: function() {
                var this$1 = this;
                var ref = this.targets;
                var length = ref.length;
                if (!length || !isVisible(this.$el)) {
                  return false;
                }
                var ref$1 = scrollParents(this.targets, /auto|scroll/, true);
                var scrollElement = ref$1[0];
                var scrollTop2 = scrollElement.scrollTop;
                var scrollHeight = scrollElement.scrollHeight;
                var max = scrollHeight - getViewportClientHeight(scrollElement);
                var active2 = false;
                if (scrollTop2 === max) {
                  active2 = length - 1;
                } else {
                  this.targets.every(function(el, i) {
                    if (offset(el).top - offset(getViewport$1(scrollElement)).top - this$1.offset <= 0) {
                      active2 = i;
                      return true;
                    }
                  });
                  if (active2 === false && this.overflow) {
                    active2 = 0;
                  }
                }
                return { active: active2 };
              },
              write: function(ref) {
                var active2 = ref.active;
                var changed = active2 !== false && !hasClass(this.elements[active2], this.cls);
                this.links.forEach(function(el) {
                  return el.blur();
                });
                removeClass(this.elements, this.cls);
                addClass(this.elements[active2], this.cls);
                if (changed) {
                  trigger(this.$el, "active", [active2, this.elements[active2]]);
                }
              },
              events: ["scroll", "resize"]
            }
          ]
        };
        var sticky = {
          mixins: [Class, Media],
          props: {
            top: null,
            bottom: Boolean,
            offset: String,
            animation: String,
            clsActive: String,
            clsInactive: String,
            clsFixed: String,
            clsBelow: String,
            selTarget: String,
            widthElement: Boolean,
            showOnUp: Boolean,
            targetOffset: Number
          },
          data: {
            top: 0,
            bottom: false,
            offset: 0,
            animation: "",
            clsActive: "uk-active",
            clsInactive: "",
            clsFixed: "uk-sticky-fixed",
            clsBelow: "uk-sticky-below",
            selTarget: "",
            widthElement: false,
            showOnUp: false,
            targetOffset: false
          },
          computed: {
            offset: function(ref) {
              var offset2 = ref.offset;
              return toPx(offset2);
            },
            selTarget: function(ref, $el) {
              var selTarget = ref.selTarget;
              return selTarget && $(selTarget, $el) || $el;
            },
            widthElement: function(ref, $el) {
              var widthElement = ref.widthElement;
              return query(widthElement, $el) || this.placeholder;
            },
            isActive: {
              get: function() {
                return hasClass(this.selTarget, this.clsActive);
              },
              set: function(value) {
                if (value && !this.isActive) {
                  replaceClass(this.selTarget, this.clsInactive, this.clsActive);
                  trigger(this.$el, "active");
                } else if (!value && !hasClass(this.selTarget, this.clsInactive)) {
                  replaceClass(this.selTarget, this.clsActive, this.clsInactive);
                  trigger(this.$el, "inactive");
                }
              }
            }
          },
          connected: function() {
            this.placeholder = $("+ .uk-sticky-placeholder", this.$el) || $('<div class="uk-sticky-placeholder"></div>');
            this.isFixed = false;
            this.isActive = false;
          },
          disconnected: function() {
            if (this.isFixed) {
              this.hide();
              removeClass(this.selTarget, this.clsInactive);
            }
            remove$1(this.placeholder);
            this.placeholder = null;
            this.widthElement = null;
          },
          events: [
            {
              name: "load hashchange popstate",
              el: function() {
                return window;
              },
              handler: function() {
                var this$1 = this;
                if (!(this.targetOffset !== false && location.hash && window.pageYOffset > 0)) {
                  return;
                }
                var target = $(location.hash);
                if (target) {
                  fastdom.read(function() {
                    var ref = offset(target);
                    var top = ref.top;
                    var elTop = offset(this$1.$el).top;
                    var elHeight = this$1.$el.offsetHeight;
                    if (this$1.isFixed && elTop + elHeight >= top && elTop <= top + target.offsetHeight) {
                      scrollTop(window, top - elHeight - (isNumeric(this$1.targetOffset) ? this$1.targetOffset : 0) - this$1.offset);
                    }
                  });
                }
              }
            }
          ],
          update: [
            {
              read: function(ref, types) {
                var height2 = ref.height;
                this.inactive = !this.matchMedia || !isVisible(this.$el);
                if (this.inactive) {
                  return false;
                }
                if (this.isActive && types.has("resize")) {
                  this.hide();
                  height2 = this.$el.offsetHeight;
                  this.show();
                }
                height2 = !this.isActive ? this.$el.offsetHeight : height2;
                this.topOffset = offset(this.isFixed ? this.placeholder : this.$el).top;
                this.bottomOffset = this.topOffset + height2;
                var bottom = parseProp("bottom", this);
                this.top = Math.max(toFloat(parseProp("top", this)), this.topOffset) - this.offset;
                this.bottom = bottom && bottom - this.$el.offsetHeight;
                this.width = dimensions(isVisible(this.widthElement) ? this.widthElement : this.$el).width;
                return {
                  height: height2,
                  top: offsetPosition(this.placeholder)[0],
                  margins: css(this.$el, ["marginTop", "marginBottom", "marginLeft", "marginRight"])
                };
              },
              write: function(ref) {
                var height2 = ref.height;
                var margins = ref.margins;
                var ref$1 = this;
                var placeholder = ref$1.placeholder;
                css(placeholder, assign({ height: height2 }, margins));
                if (!within(placeholder, document)) {
                  after(this.$el, placeholder);
                  placeholder.hidden = true;
                }
                this.isActive = !!this.isActive;
              },
              events: ["resize"]
            },
            {
              read: function(ref) {
                var scroll2 = ref.scroll;
                if (scroll2 === void 0)
                  scroll2 = 0;
                this.scroll = window.pageYOffset;
                return {
                  dir: scroll2 <= this.scroll ? "down" : "up",
                  scroll: this.scroll
                };
              },
              write: function(data2, types) {
                var this$1 = this;
                var now = Date.now();
                var isScrollUpdate = types.has("scroll");
                var initTimestamp = data2.initTimestamp;
                if (initTimestamp === void 0)
                  initTimestamp = 0;
                var dir = data2.dir;
                var lastDir = data2.lastDir;
                var lastScroll = data2.lastScroll;
                var scroll2 = data2.scroll;
                var top = data2.top;
                data2.lastScroll = scroll2;
                if (scroll2 < 0 || scroll2 === lastScroll && isScrollUpdate || this.showOnUp && !isScrollUpdate && !this.isFixed) {
                  return;
                }
                if (now - initTimestamp > 300 || dir !== lastDir) {
                  data2.initScroll = scroll2;
                  data2.initTimestamp = now;
                }
                data2.lastDir = dir;
                if (this.showOnUp && !this.isFixed && Math.abs(data2.initScroll - scroll2) <= 30 && Math.abs(lastScroll - scroll2) <= 10) {
                  return;
                }
                if (this.inactive || scroll2 < this.top || this.showOnUp && (scroll2 <= this.top || dir === "down" && isScrollUpdate || dir === "up" && !this.isFixed && scroll2 <= this.bottomOffset)) {
                  if (!this.isFixed) {
                    if (Animation.inProgress(this.$el) && top > scroll2) {
                      Animation.cancel(this.$el);
                      this.hide();
                    }
                    return;
                  }
                  this.isFixed = false;
                  if (this.animation && scroll2 > this.topOffset) {
                    Animation.cancel(this.$el);
                    Animation.out(this.$el, this.animation).then(function() {
                      return this$1.hide();
                    }, noop);
                  } else {
                    this.hide();
                  }
                } else if (this.isFixed) {
                  this.update();
                } else if (this.animation) {
                  Animation.cancel(this.$el);
                  this.show();
                  Animation.in(this.$el, this.animation).catch(noop);
                } else {
                  this.show();
                }
              },
              events: ["resize", "scroll"]
            }
          ],
          methods: {
            show: function() {
              this.isFixed = true;
              this.update();
              this.placeholder.hidden = false;
            },
            hide: function() {
              this.isActive = false;
              removeClass(this.$el, this.clsFixed, this.clsBelow);
              css(this.$el, { position: "", top: "", width: "" });
              this.placeholder.hidden = true;
            },
            update: function() {
              var active2 = this.top !== 0 || this.scroll > this.top;
              var top = Math.max(0, this.offset);
              if (isNumeric(this.bottom) && this.scroll > this.bottom - this.offset) {
                top = this.bottom - this.scroll;
              }
              css(this.$el, {
                position: "fixed",
                top: top + "px",
                width: this.width
              });
              this.isActive = active2;
              toggleClass(this.$el, this.clsBelow, this.scroll > this.bottomOffset);
              addClass(this.$el, this.clsFixed);
            }
          }
        };
        function parseProp(prop, ref) {
          var $props = ref.$props;
          var $el = ref.$el;
          var propOffset = ref[prop + "Offset"];
          var value = $props[prop];
          if (!value) {
            return;
          }
          if (isString(value) && value.match(/^-?\d/)) {
            return propOffset + toPx(value);
          } else {
            return offset(value === true ? parent($el) : query(value, $el)).bottom;
          }
        }
        var Switcher = {
          mixins: [Togglable],
          args: "connect",
          props: {
            connect: String,
            toggle: String,
            active: Number,
            swiping: Boolean
          },
          data: {
            connect: "~.uk-switcher",
            toggle: "> * > :first-child",
            active: 0,
            swiping: true,
            cls: "uk-active",
            attrItem: "uk-switcher-item"
          },
          computed: {
            connects: {
              get: function(ref, $el) {
                var connect = ref.connect;
                return queryAll(connect, $el);
              },
              watch: function(connects) {
                var this$1 = this;
                if (this.swiping) {
                  css(connects, "touch-action", "pan-y pinch-zoom");
                }
                var index2 = this.index();
                this.connects.forEach(function(el) {
                  return children(el).forEach(function(child, i) {
                    return toggleClass(child, this$1.cls, i === index2);
                  });
                });
              },
              immediate: true
            },
            toggles: {
              get: function(ref, $el) {
                var toggle2 = ref.toggle;
                return $$(toggle2, $el).filter(function(el) {
                  return !matches(el, ".uk-disabled *, .uk-disabled, [disabled]");
                });
              },
              watch: function(toggles) {
                var active2 = this.index();
                this.show(~active2 ? active2 : toggles[this.active] || toggles[0]);
              },
              immediate: true
            },
            children: function() {
              var this$1 = this;
              return children(this.$el).filter(function(child) {
                return this$1.toggles.some(function(toggle2) {
                  return within(toggle2, child);
                });
              });
            }
          },
          events: [
            {
              name: "click",
              delegate: function() {
                return this.toggle;
              },
              handler: function(e) {
                e.preventDefault();
                this.show(e.current);
              }
            },
            {
              name: "click",
              el: function() {
                return this.connects;
              },
              delegate: function() {
                return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
              },
              handler: function(e) {
                e.preventDefault();
                this.show(data(e.current, this.attrItem));
              }
            },
            {
              name: "swipeRight swipeLeft",
              filter: function() {
                return this.swiping;
              },
              el: function() {
                return this.connects;
              },
              handler: function(ref) {
                var type = ref.type;
                this.show(endsWith(type, "Left") ? "next" : "previous");
              }
            }
          ],
          methods: {
            index: function() {
              var this$1 = this;
              return findIndex(this.children, function(el) {
                return hasClass(el, this$1.cls);
              });
            },
            show: function(item) {
              var this$1 = this;
              var prev = this.index();
              var next = getIndex(this.children[getIndex(item, this.toggles, prev)], children(this.$el));
              if (prev === next) {
                return;
              }
              this.children.forEach(function(child, i) {
                toggleClass(child, this$1.cls, next === i);
                attr(this$1.toggles[i], "aria-expanded", next === i);
              });
              this.connects.forEach(function(ref) {
                var children2 = ref.children;
                return this$1.toggleElement(toNodes(children2).filter(function(child) {
                  return hasClass(child, this$1.cls);
                }), false, prev >= 0).then(function() {
                  return this$1.toggleElement(children2[next], true, prev >= 0);
                });
              });
            }
          }
        };
        var tab = {
          mixins: [Class],
          extends: Switcher,
          props: {
            media: Boolean
          },
          data: {
            media: 960,
            attrItem: "uk-tab-item"
          },
          connected: function() {
            var cls = hasClass(this.$el, "uk-tab-left") ? "uk-tab-left" : hasClass(this.$el, "uk-tab-right") ? "uk-tab-right" : false;
            if (cls) {
              this.$create("toggle", this.$el, { cls, mode: "media", media: this.media });
            }
          }
        };
        var toggle = {
          mixins: [Media, Togglable],
          args: "target",
          props: {
            href: String,
            target: null,
            mode: "list",
            queued: Boolean
          },
          data: {
            href: false,
            target: false,
            mode: "click",
            queued: true
          },
          connected: function() {
            if (!isFocusable(this.$el)) {
              attr(this.$el, "tabindex", "0");
            }
          },
          computed: {
            target: {
              get: function(ref, $el) {
                var href = ref.href;
                var target = ref.target;
                target = queryAll(target || href, $el);
                return target.length && target || [$el];
              },
              watch: function() {
                this.updateAria();
              },
              immediate: true
            }
          },
          events: [
            {
              name: pointerDown + " " + pointerUp + " " + pointerCancel,
              filter: function() {
                return includes(this.mode, "hover");
              },
              handler: function(e) {
                this._isTouch = isTouch(e) && e.type === pointerDown;
              }
            },
            {
              name: pointerEnter + " " + pointerLeave + " focus blur",
              filter: function() {
                return includes(this.mode, "hover");
              },
              handler: function(e) {
                if (!isTouch(e) && !this._isTouch) {
                  var isPointerEvent = includes(["pointerleave", "pointerenter"], e.type);
                  if (!isPointerEvent && matches(this.$el, ":hover") || isPointerEvent && matches(this.$el, ":focus")) {
                    return;
                  }
                  this.toggle("toggle" + (includes([pointerEnter, "focus"], e.type) ? "show" : "hide"));
                }
              }
            },
            {
              name: "click",
              filter: function() {
                return includes(this.mode, "click") || hasTouch && includes(this.mode, "hover");
              },
              handler: function(e) {
                var link;
                if (closest(e.target, 'a[href="#"], a[href=""]') || (link = closest(e.target, "a[href]")) && (!attr(this.$el, "aria-expanded") || link.hash && matches(this.target, link.hash))) {
                  e.preventDefault();
                }
                this.toggle();
              }
            },
            {
              name: "toggled",
              self: true,
              el: function() {
                return this.target;
              },
              handler: function(e, toggled) {
                this.updateAria(toggled);
              }
            }
          ],
          update: {
            read: function() {
              return includes(this.mode, "media") && this.media ? { match: this.matchMedia } : false;
            },
            write: function(ref) {
              var match2 = ref.match;
              var toggled = this.isToggled(this.target);
              if (match2 ? !toggled : toggled) {
                this.toggle();
              }
            },
            events: ["resize"]
          },
          methods: {
            toggle: function(type) {
              var this$1 = this;
              if (!trigger(this.target, type || "toggle", [this])) {
                return;
              }
              if (!this.queued) {
                return this.toggleElement(this.target);
              }
              var leaving = this.target.filter(function(el) {
                return hasClass(el, this$1.clsLeave);
              });
              if (leaving.length) {
                this.target.forEach(function(el) {
                  var isLeaving = includes(leaving, el);
                  this$1.toggleElement(el, isLeaving, isLeaving);
                });
                return;
              }
              var toggled = this.target.filter(this.isToggled);
              this.toggleElement(toggled, false).then(function() {
                return this$1.toggleElement(this$1.target.filter(function(el) {
                  return !includes(toggled, el);
                }), true);
              });
            },
            updateAria: function(toggled) {
              attr(this.$el, "aria-expanded", isBoolean(toggled) ? toggled : this.cls ? hasClass(this.target[0], this.cls.split(" ")[0]) : isVisible(this.target[0]));
            }
          }
        };
        var components$1 = /* @__PURE__ */ Object.freeze({
          __proto__: null,
          Accordion,
          Alert: alert,
          Cover: cover,
          Drop: drop,
          Dropdown: drop,
          FormCustom: formCustom,
          Gif: gif,
          Grid: grid,
          HeightMatch: heightMatch,
          HeightViewport: heightViewport,
          Icon,
          Img: img,
          Leader: leader,
          Margin,
          Modal: modal,
          Nav: nav,
          Navbar: navbar,
          Offcanvas: offcanvas,
          OverflowAuto: overflowAuto,
          Responsive: responsive,
          Scroll: scroll,
          Scrollspy: scrollspy,
          ScrollspyNav: scrollspyNav,
          Sticky: sticky,
          Svg: SVG,
          Switcher,
          Tab: tab,
          Toggle: toggle,
          Video,
          Close,
          Spinner,
          SlidenavNext: Slidenav,
          SlidenavPrevious: Slidenav,
          SearchIcon: Search,
          Marker: IconComponent,
          NavbarToggleIcon: IconComponent,
          OverlayIcon: IconComponent,
          PaginationNext: IconComponent,
          PaginationPrevious: IconComponent,
          Totop: IconComponent
        });
        each(components$1, function(component, name) {
          return UIkit.component(name, component);
        });
        UIkit.use(Core);
        boot(UIkit);
        var countdown = {
          mixins: [Class],
          props: {
            date: String,
            clsWrapper: String
          },
          data: {
            date: "",
            clsWrapper: ".uk-countdown-%unit%"
          },
          computed: {
            date: function(ref) {
              var date = ref.date;
              return Date.parse(date);
            },
            days: function(ref, $el) {
              var clsWrapper = ref.clsWrapper;
              return $(clsWrapper.replace("%unit%", "days"), $el);
            },
            hours: function(ref, $el) {
              var clsWrapper = ref.clsWrapper;
              return $(clsWrapper.replace("%unit%", "hours"), $el);
            },
            minutes: function(ref, $el) {
              var clsWrapper = ref.clsWrapper;
              return $(clsWrapper.replace("%unit%", "minutes"), $el);
            },
            seconds: function(ref, $el) {
              var clsWrapper = ref.clsWrapper;
              return $(clsWrapper.replace("%unit%", "seconds"), $el);
            },
            units: function() {
              var this$1 = this;
              return ["days", "hours", "minutes", "seconds"].filter(function(unit) {
                return this$1[unit];
              });
            }
          },
          connected: function() {
            this.start();
          },
          disconnected: function() {
            var this$1 = this;
            this.stop();
            this.units.forEach(function(unit) {
              return empty(this$1[unit]);
            });
          },
          events: [
            {
              name: "visibilitychange",
              el: function() {
                return document;
              },
              handler: function() {
                if (document.hidden) {
                  this.stop();
                } else {
                  this.start();
                }
              }
            }
          ],
          update: {
            write: function() {
              var this$1 = this;
              var timespan = getTimeSpan(this.date);
              if (timespan.total <= 0) {
                this.stop();
                timespan.days = timespan.hours = timespan.minutes = timespan.seconds = 0;
              }
              this.units.forEach(function(unit) {
                var digits = String(Math.floor(timespan[unit]));
                digits = digits.length < 2 ? "0" + digits : digits;
                var el = this$1[unit];
                if (el.textContent !== digits) {
                  digits = digits.split("");
                  if (digits.length !== el.children.length) {
                    html(el, digits.map(function() {
                      return "<span></span>";
                    }).join(""));
                  }
                  digits.forEach(function(digit, i) {
                    return el.children[i].textContent = digit;
                  });
                }
              });
            }
          },
          methods: {
            start: function() {
              this.stop();
              if (this.date && this.units.length) {
                this.$update();
                this.timer = setInterval(this.$update, 1e3);
              }
            },
            stop: function() {
              if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
              }
            }
          }
        };
        function getTimeSpan(date) {
          var total = date - Date.now();
          return {
            total,
            seconds: total / 1e3 % 60,
            minutes: total / 1e3 / 60 % 60,
            hours: total / 1e3 / 60 / 60 % 24,
            days: total / 1e3 / 60 / 60 / 24
          };
        }
        var clsLeave = "uk-transition-leave";
        var clsEnter = "uk-transition-enter";
        function fade(action, target, duration, stagger) {
          if (stagger === void 0)
            stagger = 0;
          var index2 = transitionIndex(target, true);
          var propsIn = { opacity: 1 };
          var propsOut = { opacity: 0 };
          var wrapIndexFn = function(fn) {
            return function() {
              return index2 === transitionIndex(target) ? fn() : Promise$1.reject();
            };
          };
          var leaveFn = wrapIndexFn(function() {
            addClass(target, clsLeave);
            return Promise$1.all(getTransitionNodes(target).map(function(child, i) {
              return new Promise$1(function(resolve) {
                return setTimeout(function() {
                  return Transition.start(child, propsOut, duration / 2, "ease").then(resolve);
                }, i * stagger);
              });
            })).then(function() {
              return removeClass(target, clsLeave);
            });
          });
          var enterFn = wrapIndexFn(function() {
            var oldHeight = height(target);
            addClass(target, clsEnter);
            action();
            css(children(target), { opacity: 0 });
            return new Promise$1(function(resolve) {
              return requestAnimationFrame(function() {
                var nodes = children(target);
                var newHeight = height(target);
                css(target, "alignContent", "flex-start");
                height(target, oldHeight);
                var transitionNodes = getTransitionNodes(target);
                css(nodes, propsOut);
                var transitions = transitionNodes.map(function(child, i) {
                  return new Promise$1(function(resolve2) {
                    return setTimeout(function() {
                      return Transition.start(child, propsIn, duration / 2, "ease").then(resolve2);
                    }, i * stagger);
                  });
                });
                if (oldHeight !== newHeight) {
                  transitions.push(Transition.start(target, { height: newHeight }, duration / 2 + transitionNodes.length * stagger, "ease"));
                }
                Promise$1.all(transitions).then(function() {
                  removeClass(target, clsEnter);
                  if (index2 === transitionIndex(target)) {
                    css(target, { height: "", alignContent: "" });
                    css(nodes, { opacity: "" });
                    delete target.dataset.transition;
                  }
                  resolve();
                });
              });
            });
          });
          return hasClass(target, clsLeave) ? waitTransitionend(target).then(enterFn) : hasClass(target, clsEnter) ? waitTransitionend(target).then(leaveFn).then(enterFn) : leaveFn().then(enterFn);
        }
        function transitionIndex(target, next) {
          if (next) {
            target.dataset.transition = 1 + transitionIndex(target);
          }
          return toNumber(target.dataset.transition) || 0;
        }
        function waitTransitionend(target) {
          return Promise$1.all(children(target).filter(Transition.inProgress).map(function(el) {
            return new Promise$1(function(resolve) {
              return once(el, "transitionend transitioncanceled", resolve);
            });
          }));
        }
        function getTransitionNodes(target) {
          return getRows(children(target)).reduce(function(nodes, row) {
            return nodes.concat(sortBy$1(row.filter(function(el) {
              return isInView(el);
            }), "offsetLeft"));
          }, []);
        }
        function slide(action, target, duration) {
          return new Promise$1(function(resolve) {
            return requestAnimationFrame(function() {
              var nodes = children(target);
              var currentProps = nodes.map(function(el) {
                return getProps(el, true);
              });
              var targetProps = css(target, ["height", "padding"]);
              Transition.cancel(target);
              nodes.forEach(Transition.cancel);
              reset(target);
              action();
              nodes = nodes.concat(children(target).filter(function(el) {
                return !includes(nodes, el);
              }));
              Promise$1.resolve().then(function() {
                fastdom.flush();
                var targetPropsTo = css(target, ["height", "padding"]);
                var ref = getTransitionProps(target, nodes, currentProps);
                var propsTo = ref[0];
                var propsFrom = ref[1];
                nodes.forEach(function(el, i) {
                  return propsFrom[i] && css(el, propsFrom[i]);
                });
                css(target, assign({ display: "block" }, targetProps));
                requestAnimationFrame(function() {
                  var transitions = nodes.map(function(el, i) {
                    return parent(el) === target && Transition.start(el, propsTo[i], duration, "ease");
                  }).concat(Transition.start(target, targetPropsTo, duration, "ease"));
                  Promise$1.all(transitions).then(function() {
                    nodes.forEach(function(el, i) {
                      return parent(el) === target && css(el, "display", propsTo[i].opacity === 0 ? "none" : "");
                    });
                    reset(target);
                  }, noop).then(resolve);
                });
              });
            });
          });
        }
        function getProps(el, opacity) {
          var zIndex = css(el, "zIndex");
          return isVisible(el) ? assign({
            display: "",
            opacity: opacity ? css(el, "opacity") : "0",
            pointerEvents: "none",
            position: "absolute",
            zIndex: zIndex === "auto" ? index(el) : zIndex
          }, getPositionWithMargin(el)) : false;
        }
        function getTransitionProps(target, nodes, currentProps) {
          var propsTo = nodes.map(function(el, i) {
            return parent(el) && i in currentProps ? currentProps[i] ? isVisible(el) ? getPositionWithMargin(el) : { opacity: 0 } : { opacity: isVisible(el) ? 1 : 0 } : false;
          });
          var propsFrom = propsTo.map(function(props2, i) {
            var from = parent(nodes[i]) === target && (currentProps[i] || getProps(nodes[i]));
            if (!from) {
              return false;
            }
            if (!props2) {
              delete from.opacity;
            } else if (!("opacity" in props2)) {
              var opacity = from.opacity;
              if (opacity % 1) {
                props2.opacity = 1;
              } else {
                delete from.opacity;
              }
            }
            return from;
          });
          return [propsTo, propsFrom];
        }
        function reset(el) {
          css(el.children, {
            height: "",
            left: "",
            opacity: "",
            pointerEvents: "",
            position: "",
            top: "",
            marginTop: "",
            marginLeft: "",
            transform: "",
            width: "",
            zIndex: ""
          });
          css(el, { height: "", display: "", padding: "" });
        }
        function getPositionWithMargin(el) {
          var ref = offset(el);
          var height2 = ref.height;
          var width2 = ref.width;
          var ref$1 = position(el);
          var top = ref$1.top;
          var left = ref$1.left;
          var ref$2 = css(el, ["marginTop", "marginLeft"]);
          var marginLeft = ref$2.marginLeft;
          var marginTop = ref$2.marginTop;
          return { top, left, height: height2, width: width2, marginLeft, marginTop, transform: "" };
        }
        var Animate = {
          props: {
            duration: Number,
            animation: Boolean
          },
          data: {
            duration: 150,
            animation: "slide"
          },
          methods: {
            animate: function(action, target) {
              var this$1 = this;
              if (target === void 0)
                target = this.$el;
              var name = this.animation;
              var animationFn = name === "fade" ? fade : name === "delayed-fade" ? function() {
                var args = [], len = arguments.length;
                while (len--)
                  args[len] = arguments[len];
                return fade.apply(void 0, args.concat([40]));
              } : !name ? function() {
                action();
                return Promise$1.resolve();
              } : slide;
              return animationFn(action, target, this.duration).then(function() {
                return this$1.$update(target, "resize");
              }, noop);
            }
          }
        };
        var filter = {
          mixins: [Animate],
          args: "target",
          props: {
            target: Boolean,
            selActive: Boolean
          },
          data: {
            target: null,
            selActive: false,
            attrItem: "uk-filter-control",
            cls: "uk-active",
            duration: 250
          },
          computed: {
            toggles: {
              get: function(ref, $el) {
                var attrItem = ref.attrItem;
                return $$("[" + attrItem + "],[data-" + attrItem + "]", $el);
              },
              watch: function() {
                var this$1 = this;
                this.updateState();
                if (this.selActive !== false) {
                  var actives = $$(this.selActive, this.$el);
                  this.toggles.forEach(function(el) {
                    return toggleClass(el, this$1.cls, includes(actives, el));
                  });
                }
              },
              immediate: true
            },
            children: {
              get: function(ref, $el) {
                var target = ref.target;
                return $$(target + " > *", $el);
              },
              watch: function(list, old) {
                if (old && !isEqualList(list, old)) {
                  this.updateState();
                }
              },
              immediate: true
            }
          },
          events: [
            {
              name: "click",
              delegate: function() {
                return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
              },
              handler: function(e) {
                e.preventDefault();
                this.apply(e.current);
              }
            }
          ],
          methods: {
            apply: function(el) {
              var prevState = this.getState();
              var newState = mergeState(el, this.attrItem, this.getState());
              if (!isEqualState(prevState, newState)) {
                this.setState(newState);
              }
            },
            getState: function() {
              var this$1 = this;
              return this.toggles.filter(function(item) {
                return hasClass(item, this$1.cls);
              }).reduce(function(state, el) {
                return mergeState(el, this$1.attrItem, state);
              }, { filter: { "": "" }, sort: [] });
            },
            setState: function(state, animate2) {
              var this$1 = this;
              if (animate2 === void 0)
                animate2 = true;
              state = assign({ filter: { "": "" }, sort: [] }, state);
              trigger(this.$el, "beforeFilter", [this, state]);
              this.toggles.forEach(function(el) {
                return toggleClass(el, this$1.cls, !!matchFilter(el, this$1.attrItem, state));
              });
              Promise$1.all($$(this.target, this.$el).map(function(target) {
                var filterFn = function() {
                  applyState(state, target, children(target));
                  this$1.$update(this$1.$el);
                };
                return animate2 ? this$1.animate(filterFn, target) : filterFn();
              })).then(function() {
                return trigger(this$1.$el, "afterFilter", [this$1]);
              });
            },
            updateState: function() {
              var this$1 = this;
              fastdom.write(function() {
                return this$1.setState(this$1.getState(), false);
              });
            }
          }
        };
        function getFilter(el, attr2) {
          return parseOptions(data(el, attr2), ["filter"]);
        }
        function isEqualState(stateA, stateB) {
          return ["filter", "sort"].every(function(prop) {
            return isEqual(stateA[prop], stateB[prop]);
          });
        }
        function applyState(state, target, children2) {
          var selector = getSelector(state);
          children2.forEach(function(el) {
            return css(el, "display", selector && !matches(el, selector) ? "none" : "");
          });
          var ref = state.sort;
          var sort = ref[0];
          var order = ref[1];
          if (sort) {
            var sorted = sortItems(children2, sort, order);
            if (!isEqual(sorted, children2)) {
              append(target, sorted);
            }
          }
        }
        function mergeState(el, attr2, state) {
          var filterBy = getFilter(el, attr2);
          var filter2 = filterBy.filter;
          var group = filterBy.group;
          var sort = filterBy.sort;
          var order = filterBy.order;
          if (order === void 0)
            order = "asc";
          if (filter2 || isUndefined(sort)) {
            if (group) {
              if (filter2) {
                delete state.filter[""];
                state.filter[group] = filter2;
              } else {
                delete state.filter[group];
                if (isEmpty(state.filter) || "" in state.filter) {
                  state.filter = { "": filter2 || "" };
                }
              }
            } else {
              state.filter = { "": filter2 || "" };
            }
          }
          if (!isUndefined(sort)) {
            state.sort = [sort, order];
          }
          return state;
        }
        function matchFilter(el, attr2, ref) {
          var stateFilter = ref.filter;
          if (stateFilter === void 0)
            stateFilter = { "": "" };
          var ref_sort = ref.sort;
          var stateSort = ref_sort[0];
          var stateOrder = ref_sort[1];
          var ref$1 = getFilter(el, attr2);
          var filter2 = ref$1.filter;
          if (filter2 === void 0)
            filter2 = "";
          var group = ref$1.group;
          if (group === void 0)
            group = "";
          var sort = ref$1.sort;
          var order = ref$1.order;
          if (order === void 0)
            order = "asc";
          return isUndefined(sort) ? group in stateFilter && filter2 === stateFilter[group] || !filter2 && group && !(group in stateFilter) && !stateFilter[""] : stateSort === sort && stateOrder === order;
        }
        function isEqualList(listA, listB) {
          return listA.length === listB.length && listA.every(function(el) {
            return ~listB.indexOf(el);
          });
        }
        function getSelector(ref) {
          var filter2 = ref.filter;
          var selector = "";
          each(filter2, function(value) {
            return selector += value || "";
          });
          return selector;
        }
        function sortItems(nodes, sort, order) {
          return assign([], nodes).sort(function(a, b) {
            return data(a, sort).localeCompare(data(b, sort), void 0, { numeric: true }) * (order === "asc" || -1);
          });
        }
        var Animations$2 = {
          slide: {
            show: function(dir) {
              return [
                { transform: translate(dir * -100) },
                { transform: translate() }
              ];
            },
            percent: function(current) {
              return translated(current);
            },
            translate: function(percent2, dir) {
              return [
                { transform: translate(dir * -100 * percent2) },
                { transform: translate(dir * 100 * (1 - percent2)) }
              ];
            }
          }
        };
        function translated(el) {
          return Math.abs(css(el, "transform").split(",")[4] / el.offsetWidth) || 0;
        }
        function translate(value, unit) {
          if (value === void 0)
            value = 0;
          if (unit === void 0)
            unit = "%";
          value += value ? unit : "";
          return isIE ? "translateX(" + value + ")" : "translate3d(" + value + ", 0, 0)";
        }
        function scale3d(value) {
          return "scale3d(" + value + ", " + value + ", 1)";
        }
        var Animations$1 = assign({}, Animations$2, {
          fade: {
            show: function() {
              return [
                { opacity: 0 },
                { opacity: 1 }
              ];
            },
            percent: function(current) {
              return 1 - css(current, "opacity");
            },
            translate: function(percent2) {
              return [
                { opacity: 1 - percent2 },
                { opacity: percent2 }
              ];
            }
          },
          scale: {
            show: function() {
              return [
                { opacity: 0, transform: scale3d(1 - 0.2) },
                { opacity: 1, transform: scale3d(1) }
              ];
            },
            percent: function(current) {
              return 1 - css(current, "opacity");
            },
            translate: function(percent2) {
              return [
                { opacity: 1 - percent2, transform: scale3d(1 - 0.2 * percent2) },
                { opacity: percent2, transform: scale3d(1 - 0.2 + 0.2 * percent2) }
              ];
            }
          }
        });
        function Transitioner$1(prev, next, dir, ref) {
          var animation = ref.animation;
          var easing = ref.easing;
          var percent2 = animation.percent;
          var translate2 = animation.translate;
          var show = animation.show;
          if (show === void 0)
            show = noop;
          var props2 = show(dir);
          var deferred = new Deferred();
          return {
            dir,
            show: function(duration, percent3, linear) {
              var this$1 = this;
              if (percent3 === void 0)
                percent3 = 0;
              var timing = linear ? "linear" : easing;
              duration -= Math.round(duration * clamp(percent3, -1, 1));
              this.translate(percent3);
              triggerUpdate$1(next, "itemin", { percent: percent3, duration, timing, dir });
              triggerUpdate$1(prev, "itemout", { percent: 1 - percent3, duration, timing, dir });
              Promise$1.all([
                Transition.start(next, props2[1], duration, timing),
                Transition.start(prev, props2[0], duration, timing)
              ]).then(function() {
                this$1.reset();
                deferred.resolve();
              }, noop);
              return deferred.promise;
            },
            cancel: function() {
              Transition.cancel([next, prev]);
            },
            reset: function() {
              for (var prop in props2[0]) {
                css([next, prev], prop, "");
              }
            },
            forward: function(duration, percent3) {
              if (percent3 === void 0)
                percent3 = this.percent();
              Transition.cancel([next, prev]);
              return this.show(duration, percent3, true);
            },
            translate: function(percent3) {
              this.reset();
              var props3 = translate2(percent3, dir);
              css(next, props3[1]);
              css(prev, props3[0]);
              triggerUpdate$1(next, "itemtranslatein", { percent: percent3, dir });
              triggerUpdate$1(prev, "itemtranslateout", { percent: 1 - percent3, dir });
            },
            percent: function() {
              return percent2(prev || next, next, dir);
            },
            getDistance: function() {
              return prev && prev.offsetWidth;
            }
          };
        }
        function triggerUpdate$1(el, type, data2) {
          trigger(el, createEvent(type, false, false, data2));
        }
        var SliderAutoplay = {
          props: {
            autoplay: Boolean,
            autoplayInterval: Number,
            pauseOnHover: Boolean
          },
          data: {
            autoplay: false,
            autoplayInterval: 7e3,
            pauseOnHover: true
          },
          connected: function() {
            this.autoplay && this.startAutoplay();
          },
          disconnected: function() {
            this.stopAutoplay();
          },
          update: function() {
            attr(this.slides, "tabindex", "-1");
          },
          events: [
            {
              name: "visibilitychange",
              el: function() {
                return document;
              },
              filter: function() {
                return this.autoplay;
              },
              handler: function() {
                if (document.hidden) {
                  this.stopAutoplay();
                } else {
                  this.startAutoplay();
                }
              }
            }
          ],
          methods: {
            startAutoplay: function() {
              var this$1 = this;
              this.stopAutoplay();
              this.interval = setInterval(function() {
                return (!this$1.draggable || !$(":focus", this$1.$el)) && (!this$1.pauseOnHover || !matches(this$1.$el, ":hover")) && !this$1.stack.length && this$1.show("next");
              }, this.autoplayInterval);
            },
            stopAutoplay: function() {
              this.interval && clearInterval(this.interval);
            }
          }
        };
        var SliderDrag = {
          props: {
            draggable: Boolean
          },
          data: {
            draggable: true,
            threshold: 10
          },
          created: function() {
            var this$1 = this;
            ["start", "move", "end"].forEach(function(key2) {
              var fn = this$1[key2];
              this$1[key2] = function(e) {
                var pos = getEventPos(e).x * (isRtl ? -1 : 1);
                this$1.prevPos = pos !== this$1.pos ? this$1.pos : this$1.prevPos;
                this$1.pos = pos;
                fn(e);
              };
            });
          },
          events: [
            {
              name: pointerDown,
              delegate: function() {
                return this.selSlides;
              },
              handler: function(e) {
                if (!this.draggable || !isTouch(e) && hasTextNodesOnly(e.target) || closest(e.target, selInput) || e.button > 0 || this.length < 2) {
                  return;
                }
                this.start(e);
              }
            },
            {
              name: "dragstart",
              handler: function(e) {
                e.preventDefault();
              }
            }
          ],
          methods: {
            start: function() {
              this.drag = this.pos;
              if (this._transitioner) {
                this.percent = this._transitioner.percent();
                this.drag += this._transitioner.getDistance() * this.percent * this.dir;
                this._transitioner.cancel();
                this._transitioner.translate(this.percent);
                this.dragging = true;
                this.stack = [];
              } else {
                this.prevIndex = this.index;
              }
              on(document, pointerMove, this.move, { passive: false });
              on(document, pointerUp + " " + pointerCancel + " input", this.end, true);
              css(this.list, "userSelect", "none");
            },
            move: function(e) {
              var this$1 = this;
              var distance = this.pos - this.drag;
              if (distance === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(distance) < this.threshold) {
                return;
              }
              css(this.list, "pointerEvents", "none");
              e.cancelable && e.preventDefault();
              this.dragging = true;
              this.dir = distance < 0 ? 1 : -1;
              var ref = this;
              var slides = ref.slides;
              var ref$1 = this;
              var prevIndex = ref$1.prevIndex;
              var dis = Math.abs(distance);
              var nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
              var width2 = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;
              while (nextIndex !== prevIndex && dis > width2) {
                this.drag -= width2 * this.dir;
                prevIndex = nextIndex;
                dis -= width2;
                nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
                width2 = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;
              }
              this.percent = dis / width2;
              var prev = slides[prevIndex];
              var next = slides[nextIndex];
              var changed = this.index !== nextIndex;
              var edge = prevIndex === nextIndex;
              var itemShown;
              [this.index, this.prevIndex].filter(function(i) {
                return !includes([nextIndex, prevIndex], i);
              }).forEach(function(i) {
                trigger(slides[i], "itemhidden", [this$1]);
                if (edge) {
                  itemShown = true;
                  this$1.prevIndex = prevIndex;
                }
              });
              if (this.index === prevIndex && this.prevIndex !== prevIndex || itemShown) {
                trigger(slides[this.index], "itemshown", [this]);
              }
              if (changed) {
                this.prevIndex = prevIndex;
                this.index = nextIndex;
                !edge && trigger(prev, "beforeitemhide", [this]);
                trigger(next, "beforeitemshow", [this]);
              }
              this._transitioner = this._translate(Math.abs(this.percent), prev, !edge && next);
              if (changed) {
                !edge && trigger(prev, "itemhide", [this]);
                trigger(next, "itemshow", [this]);
              }
            },
            end: function() {
              off(document, pointerMove, this.move, { passive: false });
              off(document, pointerUp + " " + pointerCancel + " input", this.end, true);
              if (this.dragging) {
                this.dragging = null;
                if (this.index === this.prevIndex) {
                  this.percent = 1 - this.percent;
                  this.dir *= -1;
                  this._show(false, this.index, true);
                  this._transitioner = null;
                } else {
                  var dirChange = (isRtl ? this.dir * (isRtl ? 1 : -1) : this.dir) < 0 === this.prevPos > this.pos;
                  this.index = dirChange ? this.index : this.prevIndex;
                  if (dirChange) {
                    this.percent = 1 - this.percent;
                  }
                  this.show(this.dir > 0 && !dirChange || this.dir < 0 && dirChange ? "next" : "previous", true);
                }
              }
              css(this.list, { userSelect: "", pointerEvents: "" });
              this.drag = this.percent = null;
            }
          }
        };
        function hasTextNodesOnly(el) {
          return !el.children.length && el.childNodes.length;
        }
        var SliderNav = {
          data: {
            selNav: false
          },
          computed: {
            nav: function(ref, $el) {
              var selNav = ref.selNav;
              return $(selNav, $el);
            },
            selNavItem: function(ref) {
              var attrItem = ref.attrItem;
              return "[" + attrItem + "],[data-" + attrItem + "]";
            },
            navItems: function(_, $el) {
              return $$(this.selNavItem, $el);
            }
          },
          update: {
            write: function() {
              var this$1 = this;
              if (this.nav && this.length !== this.nav.children.length) {
                html(this.nav, this.slides.map(function(_, i) {
                  return "<li " + this$1.attrItem + '="' + i + '"><a href></a></li>';
                }).join(""));
              }
              this.navItems.concat(this.nav).forEach(function(el) {
                return el && (el.hidden = !this$1.maxIndex);
              });
              this.updateNav();
            },
            events: ["resize"]
          },
          events: [
            {
              name: "click",
              delegate: function() {
                return this.selNavItem;
              },
              handler: function(e) {
                e.preventDefault();
                this.show(data(e.current, this.attrItem));
              }
            },
            {
              name: "itemshow",
              handler: "updateNav"
            }
          ],
          methods: {
            updateNav: function() {
              var this$1 = this;
              var i = this.getValidIndex();
              this.navItems.forEach(function(el) {
                var cmd = data(el, this$1.attrItem);
                toggleClass(el, this$1.clsActive, toNumber(cmd) === i);
                toggleClass(el, "uk-invisible", this$1.finite && (cmd === "previous" && i === 0 || cmd === "next" && i >= this$1.maxIndex));
              });
            }
          }
        };
        var Slider = {
          mixins: [SliderAutoplay, SliderDrag, SliderNav],
          props: {
            clsActivated: Boolean,
            easing: String,
            index: Number,
            finite: Boolean,
            velocity: Number,
            selSlides: String
          },
          data: function() {
            return {
              easing: "ease",
              finite: false,
              velocity: 1,
              index: 0,
              prevIndex: -1,
              stack: [],
              percent: 0,
              clsActive: "uk-active",
              clsActivated: false,
              Transitioner: false,
              transitionOptions: {}
            };
          },
          connected: function() {
            this.prevIndex = -1;
            this.index = this.getValidIndex(this.$props.index);
            this.stack = [];
          },
          disconnected: function() {
            removeClass(this.slides, this.clsActive);
          },
          computed: {
            duration: function(ref, $el) {
              var velocity = ref.velocity;
              return speedUp($el.offsetWidth / velocity);
            },
            list: function(ref, $el) {
              var selList = ref.selList;
              return $(selList, $el);
            },
            maxIndex: function() {
              return this.length - 1;
            },
            selSlides: function(ref) {
              var selList = ref.selList;
              var selSlides = ref.selSlides;
              return selList + " " + (selSlides || "> *");
            },
            slides: {
              get: function() {
                return $$(this.selSlides, this.$el);
              },
              watch: function() {
                this.$reset();
              }
            },
            length: function() {
              return this.slides.length;
            }
          },
          events: {
            itemshown: function() {
              this.$update(this.list);
            }
          },
          methods: {
            show: function(index2, force) {
              var this$1 = this;
              if (force === void 0)
                force = false;
              if (this.dragging || !this.length) {
                return;
              }
              var ref = this;
              var stack = ref.stack;
              var queueIndex = force ? 0 : stack.length;
              var reset2 = function() {
                stack.splice(queueIndex, 1);
                if (stack.length) {
                  this$1.show(stack.shift(), true);
                }
              };
              stack[force ? "unshift" : "push"](index2);
              if (!force && stack.length > 1) {
                if (stack.length === 2) {
                  this._transitioner.forward(Math.min(this.duration, 200));
                }
                return;
              }
              var prevIndex = this.getIndex(this.index);
              var prev = hasClass(this.slides, this.clsActive) && this.slides[prevIndex];
              var nextIndex = this.getIndex(index2, this.index);
              var next = this.slides[nextIndex];
              if (prev === next) {
                reset2();
                return;
              }
              this.dir = getDirection(index2, prevIndex);
              this.prevIndex = prevIndex;
              this.index = nextIndex;
              if (prev && !trigger(prev, "beforeitemhide", [this]) || !trigger(next, "beforeitemshow", [this, prev])) {
                this.index = this.prevIndex;
                reset2();
                return;
              }
              var promise = this._show(prev, next, force).then(function() {
                prev && trigger(prev, "itemhidden", [this$1]);
                trigger(next, "itemshown", [this$1]);
                return new Promise$1(function(resolve) {
                  fastdom.write(function() {
                    stack.shift();
                    if (stack.length) {
                      this$1.show(stack.shift(), true);
                    } else {
                      this$1._transitioner = null;
                    }
                    resolve();
                  });
                });
              });
              prev && trigger(prev, "itemhide", [this]);
              trigger(next, "itemshow", [this]);
              return promise;
            },
            getIndex: function(index2, prev) {
              if (index2 === void 0)
                index2 = this.index;
              if (prev === void 0)
                prev = this.index;
              return clamp(getIndex(index2, this.slides, prev, this.finite), 0, this.maxIndex);
            },
            getValidIndex: function(index2, prevIndex) {
              if (index2 === void 0)
                index2 = this.index;
              if (prevIndex === void 0)
                prevIndex = this.prevIndex;
              return this.getIndex(index2, prevIndex);
            },
            _show: function(prev, next, force) {
              this._transitioner = this._getTransitioner(prev, next, this.dir, assign({
                easing: force ? next.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing
              }, this.transitionOptions));
              if (!force && !prev) {
                this._translate(1);
                return Promise$1.resolve();
              }
              var ref = this.stack;
              var length = ref.length;
              return this._transitioner[length > 1 ? "forward" : "show"](length > 1 ? Math.min(this.duration, 75 + 75 / (length - 1)) : this.duration, this.percent);
            },
            _getDistance: function(prev, next) {
              return this._getTransitioner(prev, prev !== next && next).getDistance();
            },
            _translate: function(percent2, prev, next) {
              if (prev === void 0)
                prev = this.prevIndex;
              if (next === void 0)
                next = this.index;
              var transitioner = this._getTransitioner(prev !== next ? prev : false, next);
              transitioner.translate(percent2);
              return transitioner;
            },
            _getTransitioner: function(prev, next, dir, options) {
              if (prev === void 0)
                prev = this.prevIndex;
              if (next === void 0)
                next = this.index;
              if (dir === void 0)
                dir = this.dir || 1;
              if (options === void 0)
                options = this.transitionOptions;
              return new this.Transitioner(isNumber(prev) ? this.slides[prev] : prev, isNumber(next) ? this.slides[next] : next, dir * (isRtl ? -1 : 1), options);
            }
          }
        };
        function getDirection(index2, prevIndex) {
          return index2 === "next" ? 1 : index2 === "previous" ? -1 : index2 < prevIndex ? -1 : 1;
        }
        function speedUp(x) {
          return 0.5 * x + 300;
        }
        var Slideshow = {
          mixins: [Slider],
          props: {
            animation: String
          },
          data: {
            animation: "slide",
            clsActivated: "uk-transition-active",
            Animations: Animations$2,
            Transitioner: Transitioner$1
          },
          computed: {
            animation: function(ref) {
              var animation = ref.animation;
              var Animations2 = ref.Animations;
              return assign(Animations2[animation] || Animations2.slide, { name: animation });
            },
            transitionOptions: function() {
              return { animation: this.animation };
            }
          },
          events: {
            "itemshow itemhide itemshown itemhidden": function(ref) {
              var target = ref.target;
              this.$update(target);
            },
            beforeitemshow: function(ref) {
              var target = ref.target;
              addClass(target, this.clsActive);
            },
            itemshown: function(ref) {
              var target = ref.target;
              addClass(target, this.clsActivated);
            },
            itemhidden: function(ref) {
              var target = ref.target;
              removeClass(target, this.clsActive, this.clsActivated);
            }
          }
        };
        var LightboxPanel = {
          mixins: [Container, Modal, Togglable, Slideshow],
          functional: true,
          props: {
            delayControls: Number,
            preload: Number,
            videoAutoplay: Boolean,
            template: String
          },
          data: function() {
            return {
              preload: 1,
              videoAutoplay: false,
              delayControls: 3e3,
              items: [],
              cls: "uk-open",
              clsPage: "uk-lightbox-page",
              selList: ".uk-lightbox-items",
              attrItem: "uk-lightbox-item",
              selClose: ".uk-close-large",
              selCaption: ".uk-lightbox-caption",
              pauseOnHover: false,
              velocity: 2,
              Animations: Animations$1,
              template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
            };
          },
          created: function() {
            var $el = $(this.template);
            var list = $(this.selList, $el);
            this.items.forEach(function() {
              return append(list, "<li>");
            });
            this.$mount(append(this.container, $el));
          },
          computed: {
            caption: function(ref, $el) {
              var selCaption = ref.selCaption;
              return $(selCaption, $el);
            }
          },
          events: [
            {
              name: pointerMove + " " + pointerDown + " keydown",
              handler: "showControls"
            },
            {
              name: "click",
              self: true,
              delegate: function() {
                return this.selSlides;
              },
              handler: function(e) {
                if (e.defaultPrevented) {
                  return;
                }
                this.hide();
              }
            },
            {
              name: "shown",
              self: true,
              handler: function() {
                this.showControls();
              }
            },
            {
              name: "hide",
              self: true,
              handler: function() {
                this.hideControls();
                removeClass(this.slides, this.clsActive);
                Transition.stop(this.slides);
              }
            },
            {
              name: "hidden",
              self: true,
              handler: function() {
                this.$destroy(true);
              }
            },
            {
              name: "keyup",
              el: function() {
                return document;
              },
              handler: function(e) {
                if (!this.isToggled(this.$el) || !this.draggable) {
                  return;
                }
                switch (e.keyCode) {
                  case 37:
                    this.show("previous");
                    break;
                  case 39:
                    this.show("next");
                    break;
                }
              }
            },
            {
              name: "beforeitemshow",
              handler: function(e) {
                if (this.isToggled()) {
                  return;
                }
                this.draggable = false;
                e.preventDefault();
                this.toggleElement(this.$el, true, false);
                this.animation = Animations$1["scale"];
                removeClass(e.target, this.clsActive);
                this.stack.splice(1, 0, this.index);
              }
            },
            {
              name: "itemshow",
              handler: function() {
                html(this.caption, this.getItem().caption || "");
                for (var j = -this.preload; j <= this.preload; j++) {
                  this.loadItem(this.index + j);
                }
              }
            },
            {
              name: "itemshown",
              handler: function() {
                this.draggable = this.$props.draggable;
              }
            },
            {
              name: "itemload",
              handler: function(_, item) {
                var this$1 = this;
                var src = item.source;
                var type = item.type;
                var alt = item.alt;
                if (alt === void 0)
                  alt = "";
                var poster = item.poster;
                var attrs = item.attrs;
                if (attrs === void 0)
                  attrs = {};
                this.setItem(item, "<span uk-spinner></span>");
                if (!src) {
                  return;
                }
                var matches2;
                var iframeAttrs = {
                  frameborder: "0",
                  allow: "autoplay",
                  allowfullscreen: "",
                  style: "max-width: 100%; box-sizing: border-box;",
                  "uk-responsive": "",
                  "uk-video": "" + this.videoAutoplay
                };
                if (type === "image" || src.match(/\.(avif|jpe?g|a?png|gif|svg|webp)($|\?)/i)) {
                  getImage(src, attrs.srcset, attrs.size).then(function(ref) {
                    var width2 = ref.width;
                    var height2 = ref.height;
                    return this$1.setItem(item, createEl("img", assign({ src, width: width2, height: height2, alt }, attrs)));
                  }, function() {
                    return this$1.setError(item);
                  });
                } else if (type === "video" || src.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                  var video = createEl("video", assign({
                    src,
                    poster,
                    controls: "",
                    playsinline: "",
                    "uk-video": "" + this.videoAutoplay
                  }, attrs));
                  on(video, "loadedmetadata", function() {
                    attr(video, { width: video.videoWidth, height: video.videoHeight });
                    this$1.setItem(item, video);
                  });
                  on(video, "error", function() {
                    return this$1.setError(item);
                  });
                } else if (type === "iframe" || src.match(/\.(html|php)($|\?)/i)) {
                  this.setItem(item, createEl("iframe", assign({
                    src,
                    frameborder: "0",
                    allowfullscreen: "",
                    class: "uk-lightbox-iframe"
                  }, attrs)));
                } else if (matches2 = src.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/)) {
                  this.setItem(item, createEl("iframe", assign({
                    src: "https://www.youtube" + (matches2[1] || "") + ".com/embed/" + matches2[2] + (matches2[3] ? "?" + matches2[3] : ""),
                    width: 1920,
                    height: 1080
                  }, iframeAttrs, attrs)));
                } else if (matches2 = src.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) {
                  ajax("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(src), {
                    responseType: "json",
                    withCredentials: false
                  }).then(function(ref) {
                    var ref_response = ref.response;
                    var height2 = ref_response.height;
                    var width2 = ref_response.width;
                    return this$1.setItem(item, createEl("iframe", assign({
                      src: "https://player.vimeo.com/video/" + matches2[1] + (matches2[2] ? "?" + matches2[2] : ""),
                      width: width2,
                      height: height2
                    }, iframeAttrs, attrs)));
                  }, function() {
                    return this$1.setError(item);
                  });
                }
              }
            }
          ],
          methods: {
            loadItem: function(index2) {
              if (index2 === void 0)
                index2 = this.index;
              var item = this.getItem(index2);
              if (!this.getSlide(item).childElementCount) {
                trigger(this.$el, "itemload", [item]);
              }
            },
            getItem: function(index2) {
              if (index2 === void 0)
                index2 = this.index;
              return this.items[getIndex(index2, this.slides)];
            },
            setItem: function(item, content) {
              trigger(this.$el, "itemloaded", [this, html(this.getSlide(item), content)]);
            },
            getSlide: function(item) {
              return this.slides[this.items.indexOf(item)];
            },
            setError: function(item) {
              this.setItem(item, '<span uk-icon="icon: bolt; ratio: 2"></span>');
            },
            showControls: function() {
              clearTimeout(this.controlsTimer);
              this.controlsTimer = setTimeout(this.hideControls, this.delayControls);
              addClass(this.$el, "uk-active", "uk-transition-active");
            },
            hideControls: function() {
              removeClass(this.$el, "uk-active", "uk-transition-active");
            }
          }
        };
        function createEl(tag, attrs) {
          var el = fragment("<" + tag + ">");
          attr(el, attrs);
          return el;
        }
        var lightbox = {
          install: install$1,
          props: { toggle: String },
          data: { toggle: "a" },
          computed: {
            toggles: {
              get: function(ref, $el) {
                var toggle2 = ref.toggle;
                return $$(toggle2, $el);
              },
              watch: function() {
                this.hide();
              }
            }
          },
          disconnected: function() {
            this.hide();
          },
          events: [
            {
              name: "click",
              delegate: function() {
                return this.toggle + ":not(.uk-disabled)";
              },
              handler: function(e) {
                e.preventDefault();
                this.show(e.current);
              }
            }
          ],
          methods: {
            show: function(index2) {
              var this$1 = this;
              var items = uniqueBy(this.toggles.map(toItem), "source");
              if (isElement(index2)) {
                var ref = toItem(index2);
                var source = ref.source;
                index2 = findIndex(items, function(ref2) {
                  var src = ref2.source;
                  return source === src;
                });
              }
              this.panel = this.panel || this.$create("lightboxPanel", assign({}, this.$props, { items }));
              on(this.panel.$el, "hidden", function() {
                return this$1.panel = false;
              });
              return this.panel.show(index2);
            },
            hide: function() {
              return this.panel && this.panel.hide();
            }
          }
        };
        function install$1(UIkit2, Lightbox) {
          if (!UIkit2.lightboxPanel) {
            UIkit2.component("lightboxPanel", LightboxPanel);
          }
          assign(Lightbox.props, UIkit2.component("lightboxPanel").options.props);
        }
        function toItem(el) {
          var item = {};
          ["href", "caption", "type", "poster", "alt", "attrs"].forEach(function(attr2) {
            item[attr2 === "href" ? "source" : attr2] = data(el, attr2);
          });
          item.attrs = parseOptions(item.attrs);
          return item;
        }
        var obj$1;
        var notification = {
          mixins: [Container],
          functional: true,
          args: ["message", "status"],
          data: {
            message: "",
            status: "",
            timeout: 5e3,
            group: null,
            pos: "top-center",
            clsContainer: "uk-notification",
            clsClose: "uk-notification-close",
            clsMsg: "uk-notification-message"
          },
          install,
          computed: {
            marginProp: function(ref) {
              var pos = ref.pos;
              return "margin" + (startsWith(pos, "top") ? "Top" : "Bottom");
            },
            startProps: function() {
              var obj2;
              return obj2 = { opacity: 0 }, obj2[this.marginProp] = -this.$el.offsetHeight, obj2;
            }
          },
          created: function() {
            var container = $("." + this.clsContainer + "-" + this.pos, this.container) || append(this.container, '<div class="' + this.clsContainer + " " + this.clsContainer + "-" + this.pos + '" style="display: block"></div>');
            this.$mount(append(container, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '"> <a href class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>"));
          },
          connected: function() {
            var this$1 = this;
            var obj2;
            var margin = toFloat(css(this.$el, this.marginProp));
            Transition.start(css(this.$el, this.startProps), (obj2 = { opacity: 1 }, obj2[this.marginProp] = margin, obj2)).then(function() {
              if (this$1.timeout) {
                this$1.timer = setTimeout(this$1.close, this$1.timeout);
              }
            });
          },
          events: (obj$1 = {
            click: function(e) {
              if (closest(e.target, 'a[href="#"],a[href=""]')) {
                e.preventDefault();
              }
              this.close();
            }
          }, obj$1[pointerEnter] = function() {
            if (this.timer) {
              clearTimeout(this.timer);
            }
          }, obj$1[pointerLeave] = function() {
            if (this.timeout) {
              this.timer = setTimeout(this.close, this.timeout);
            }
          }, obj$1),
          methods: {
            close: function(immediate) {
              var this$1 = this;
              var removeFn = function(el) {
                var container = parent(el);
                trigger(el, "close", [this$1]);
                remove$1(el);
                if (container && !container.hasChildNodes()) {
                  remove$1(container);
                }
              };
              if (this.timer) {
                clearTimeout(this.timer);
              }
              if (immediate) {
                removeFn(this.$el);
              } else {
                Transition.start(this.$el, this.startProps).then(removeFn);
              }
            }
          }
        };
        function install(UIkit2) {
          UIkit2.notification.closeAll = function(group, immediate) {
            apply$1(document.body, function(el) {
              var notification2 = UIkit2.getComponent(el, "notification");
              if (notification2 && (!group || group === notification2.group)) {
                notification2.close(immediate);
              }
            });
          };
        }
        var props = ["x", "y", "bgx", "bgy", "rotate", "scale", "color", "backgroundColor", "borderColor", "opacity", "blur", "hue", "grayscale", "invert", "saturate", "sepia", "fopacity", "stroke"];
        var Parallax = {
          mixins: [Media],
          props: props.reduce(function(props2, prop) {
            props2[prop] = "list";
            return props2;
          }, {}),
          data: props.reduce(function(data2, prop) {
            data2[prop] = void 0;
            return data2;
          }, {}),
          computed: {
            props: function(properties, $el) {
              var this$1 = this;
              return props.reduce(function(props2, prop) {
                if (isUndefined(properties[prop])) {
                  return props2;
                }
                var isColor = prop.match(/color/i);
                var isCssProp = isColor || prop === "opacity";
                var pos, bgPos, diff;
                var steps = properties[prop].slice();
                if (isCssProp) {
                  css($el, prop, "");
                }
                if (steps.length < 2) {
                  steps.unshift((prop === "scale" ? 1 : isCssProp ? css($el, prop) : 0) || 0);
                }
                var unit = getUnit(steps);
                if (isColor) {
                  var ref = $el.style;
                  var color = ref.color;
                  steps = steps.map(function(step) {
                    return parseColor($el, step);
                  });
                  $el.style.color = color;
                } else if (startsWith(prop, "bg")) {
                  var attr2 = prop === "bgy" ? "height" : "width";
                  steps = steps.map(function(step) {
                    return toPx(step, attr2, this$1.$el);
                  });
                  css($el, "background-position-" + prop[2], "");
                  bgPos = css($el, "backgroundPosition").split(" ")[prop[2] === "x" ? 0 : 1];
                  if (this$1.covers) {
                    var min = Math.min.apply(Math, steps);
                    var max = Math.max.apply(Math, steps);
                    var down = steps.indexOf(min) < steps.indexOf(max);
                    diff = max - min;
                    steps = steps.map(function(step) {
                      return step - (down ? min : max);
                    });
                    pos = (down ? -diff : 0) + "px";
                  } else {
                    pos = bgPos;
                  }
                } else {
                  steps = steps.map(toFloat);
                }
                if (prop === "stroke") {
                  if (!steps.some(function(step) {
                    return step;
                  })) {
                    return props2;
                  }
                  var length = getMaxPathLength(this$1.$el);
                  css($el, "strokeDasharray", length);
                  if (unit === "%") {
                    steps = steps.map(function(step) {
                      return step * length / 100;
                    });
                  }
                  steps = steps.reverse();
                  prop = "strokeDashoffset";
                }
                props2[prop] = { steps, unit, pos, bgPos, diff };
                return props2;
              }, {});
            },
            bgProps: function() {
              var this$1 = this;
              return ["bgx", "bgy"].filter(function(bg) {
                return bg in this$1.props;
              });
            },
            covers: function(_, $el) {
              return covers($el);
            }
          },
          disconnected: function() {
            delete this._image;
          },
          update: {
            read: function(data2) {
              var this$1 = this;
              if (!this.matchMedia) {
                return;
              }
              if (!data2.image && this.covers && this.bgProps.length) {
                var src = css(this.$el, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
                if (src) {
                  var img2 = new Image();
                  img2.src = src;
                  data2.image = img2;
                  if (!img2.naturalWidth) {
                    img2.onload = function() {
                      return this$1.$update();
                    };
                  }
                }
              }
              var image = data2.image;
              if (!image || !image.naturalWidth) {
                return;
              }
              var dimEl = {
                width: this.$el.offsetWidth,
                height: this.$el.offsetHeight
              };
              var dimImage = {
                width: image.naturalWidth,
                height: image.naturalHeight
              };
              var dim = Dimensions.cover(dimImage, dimEl);
              this.bgProps.forEach(function(prop) {
                var ref = this$1.props[prop];
                var diff = ref.diff;
                var bgPos = ref.bgPos;
                var steps = ref.steps;
                var attr2 = prop === "bgy" ? "height" : "width";
                var span = dim[attr2] - dimEl[attr2];
                if (span < diff) {
                  dimEl[attr2] = dim[attr2] + diff - span;
                } else if (span > diff) {
                  var posPercentage = dimEl[attr2] / toPx(bgPos, attr2, this$1.$el);
                  if (posPercentage) {
                    this$1.props[prop].steps = steps.map(function(step) {
                      return step - (span - diff) / posPercentage;
                    });
                  }
                }
                dim = Dimensions.cover(dimImage, dimEl);
              });
              data2.dim = dim;
            },
            write: function(ref) {
              var dim = ref.dim;
              if (!this.matchMedia) {
                css(this.$el, { backgroundSize: "", backgroundRepeat: "" });
                return;
              }
              dim && css(this.$el, {
                backgroundSize: dim.width + "px " + dim.height + "px",
                backgroundRepeat: "no-repeat"
              });
            },
            events: ["resize"]
          },
          methods: {
            reset: function() {
              var this$1 = this;
              each(this.getCss(0), function(_, prop) {
                return css(this$1.$el, prop, "");
              });
            },
            getCss: function(percent2) {
              var ref = this;
              var props2 = ref.props;
              return Object.keys(props2).reduce(function(css2, prop) {
                var ref2 = props2[prop];
                var steps = ref2.steps;
                var unit = ref2.unit;
                var pos = ref2.pos;
                var value = getValue(steps, percent2);
                switch (prop) {
                  case "x":
                  case "y": {
                    unit = unit || "px";
                    css2.transform += " translate" + ucfirst(prop) + "(" + toFloat(value).toFixed(unit === "px" ? 0 : 2) + unit + ")";
                    break;
                  }
                  case "rotate":
                    unit = unit || "deg";
                    css2.transform += " rotate(" + (value + unit) + ")";
                    break;
                  case "scale":
                    css2.transform += " scale(" + value + ")";
                    break;
                  case "bgy":
                  case "bgx":
                    css2["background-position-" + prop[2]] = "calc(" + pos + " + " + value + "px)";
                    break;
                  case "color":
                  case "backgroundColor":
                  case "borderColor": {
                    var ref$1 = getStep(steps, percent2);
                    var start = ref$1[0];
                    var end = ref$1[1];
                    var p2 = ref$1[2];
                    css2[prop] = "rgba(" + start.map(function(value2, i) {
                      value2 = value2 + p2 * (end[i] - value2);
                      return i === 3 ? toFloat(value2) : parseInt(value2, 10);
                    }).join(",") + ")";
                    break;
                  }
                  case "blur":
                    unit = unit || "px";
                    css2.filter += " blur(" + (value + unit) + ")";
                    break;
                  case "hue":
                    unit = unit || "deg";
                    css2.filter += " hue-rotate(" + (value + unit) + ")";
                    break;
                  case "fopacity":
                    unit = unit || "%";
                    css2.filter += " opacity(" + (value + unit) + ")";
                    break;
                  case "grayscale":
                  case "invert":
                  case "saturate":
                  case "sepia":
                    unit = unit || "%";
                    css2.filter += " " + prop + "(" + (value + unit) + ")";
                    break;
                  default:
                    css2[prop] = value;
                }
                return css2;
              }, { transform: "", filter: "" });
            }
          }
        };
        function parseColor(el, color) {
          return css(css(el, "color", color), "color").split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(toFloat);
        }
        function getStep(steps, percent2) {
          var count = steps.length - 1;
          var index2 = Math.min(Math.floor(count * percent2), count - 1);
          var step = steps.slice(index2, index2 + 2);
          step.push(percent2 === 1 ? 1 : percent2 % (1 / count) * count);
          return step;
        }
        function getValue(steps, percent2, digits) {
          if (digits === void 0)
            digits = 2;
          var ref = getStep(steps, percent2);
          var start = ref[0];
          var end = ref[1];
          var p2 = ref[2];
          return (isNumber(start) ? start + Math.abs(start - end) * p2 * (start < end ? 1 : -1) : +end).toFixed(digits);
        }
        function getUnit(steps) {
          return steps.reduce(function(unit, step) {
            return isString(step) && step.replace(/-|\d/g, "").trim() || unit;
          }, "");
        }
        function covers(el) {
          var ref = el.style;
          var backgroundSize = ref.backgroundSize;
          var covers2 = css(css(el, "backgroundSize", ""), "backgroundSize") === "cover";
          el.style.backgroundSize = backgroundSize;
          return covers2;
        }
        var parallax = {
          mixins: [Parallax],
          props: {
            target: String,
            viewport: Number,
            easing: Number
          },
          data: {
            target: false,
            viewport: 1,
            easing: 1
          },
          computed: {
            target: function(ref, $el) {
              var target = ref.target;
              return getOffsetElement(target && query(target, $el) || $el);
            }
          },
          update: {
            read: function(ref, types) {
              var percent2 = ref.percent;
              if (!types.has("scroll")) {
                percent2 = false;
              }
              if (!this.matchMedia) {
                return;
              }
              var prev = percent2;
              percent2 = ease(scrolledOver(this.target) / (this.viewport || 1), this.easing);
              return {
                percent: percent2,
                style: prev !== percent2 ? this.getCss(percent2) : false
              };
            },
            write: function(ref) {
              var style = ref.style;
              if (!this.matchMedia) {
                this.reset();
                return;
              }
              style && css(this.$el, style);
            },
            events: ["scroll", "resize"]
          }
        };
        function ease(percent2, easing) {
          return clamp(percent2 * (1 - (easing - easing * percent2)));
        }
        function getOffsetElement(el) {
          return el ? "offsetTop" in el ? el : getOffsetElement(parent(el)) : document.body;
        }
        var SliderReactive = {
          update: {
            write: function() {
              if (this.stack.length || this.dragging) {
                return;
              }
              var index2 = this.getValidIndex(this.index);
              if (!~this.prevIndex || this.index !== index2) {
                this.show(index2);
              }
            },
            events: ["resize"]
          }
        };
        function Transitioner(prev, next, dir, ref) {
          var center = ref.center;
          var easing = ref.easing;
          var list = ref.list;
          var deferred = new Deferred();
          var from = prev ? getLeft(prev, list, center) : getLeft(next, list, center) + dimensions(next).width * dir;
          var to = next ? getLeft(next, list, center) : from + dimensions(prev).width * dir * (isRtl ? -1 : 1);
          return {
            dir,
            show: function(duration, percent2, linear) {
              if (percent2 === void 0)
                percent2 = 0;
              var timing = linear ? "linear" : easing;
              duration -= Math.round(duration * clamp(percent2, -1, 1));
              this.translate(percent2);
              percent2 = prev ? percent2 : clamp(percent2, 0, 1);
              triggerUpdate(this.getItemIn(), "itemin", { percent: percent2, duration, timing, dir });
              prev && triggerUpdate(this.getItemIn(true), "itemout", { percent: 1 - percent2, duration, timing, dir });
              Transition.start(list, { transform: translate(-to * (isRtl ? -1 : 1), "px") }, duration, timing).then(deferred.resolve, noop);
              return deferred.promise;
            },
            cancel: function() {
              Transition.cancel(list);
            },
            reset: function() {
              css(list, "transform", "");
            },
            forward: function(duration, percent2) {
              if (percent2 === void 0)
                percent2 = this.percent();
              Transition.cancel(list);
              return this.show(duration, percent2, true);
            },
            translate: function(percent2) {
              var distance = this.getDistance() * dir * (isRtl ? -1 : 1);
              css(list, "transform", translate(clamp(-to + (distance - distance * percent2), -getWidth(list), dimensions(list).width) * (isRtl ? -1 : 1), "px"));
              var actives = this.getActives();
              var itemIn = this.getItemIn();
              var itemOut = this.getItemIn(true);
              percent2 = prev ? clamp(percent2, -1, 1) : 0;
              children(list).forEach(function(slide2) {
                var isActive = includes(actives, slide2);
                var isIn2 = slide2 === itemIn;
                var isOut = slide2 === itemOut;
                var translateIn = isIn2 || !isOut && (isActive || dir * (isRtl ? -1 : 1) === -1 ^ getElLeft(slide2, list) > getElLeft(prev || next));
                triggerUpdate(slide2, "itemtranslate" + (translateIn ? "in" : "out"), {
                  dir,
                  percent: isOut ? 1 - percent2 : isIn2 ? percent2 : isActive ? 1 : 0
                });
              });
            },
            percent: function() {
              return Math.abs((css(list, "transform").split(",")[4] * (isRtl ? -1 : 1) + from) / (to - from));
            },
            getDistance: function() {
              return Math.abs(to - from);
            },
            getItemIn: function(out) {
              if (out === void 0)
                out = false;
              var actives = this.getActives();
              var nextActives = inView(list, getLeft(next || prev, list, center));
              if (out) {
                var temp = actives;
                actives = nextActives;
                nextActives = temp;
              }
              return nextActives[findIndex(nextActives, function(el) {
                return !includes(actives, el);
              })];
            },
            getActives: function() {
              return inView(list, getLeft(prev || next, list, center));
            }
          };
        }
        function getLeft(el, list, center) {
          var left = getElLeft(el, list);
          return center ? left - centerEl(el, list) : Math.min(left, getMax(list));
        }
        function getMax(list) {
          return Math.max(0, getWidth(list) - dimensions(list).width);
        }
        function getWidth(list) {
          return children(list).reduce(function(right, el) {
            return dimensions(el).width + right;
          }, 0);
        }
        function centerEl(el, list) {
          return dimensions(list).width / 2 - dimensions(el).width / 2;
        }
        function getElLeft(el, list) {
          return el && (position(el).left + (isRtl ? dimensions(el).width - dimensions(list).width : 0)) * (isRtl ? -1 : 1) || 0;
        }
        function inView(list, listLeft) {
          listLeft -= 1;
          var listRight = listLeft + dimensions(list).width + 2;
          return children(list).filter(function(slide2) {
            var slideLeft = getElLeft(slide2, list);
            var slideRight = slideLeft + dimensions(slide2).width;
            return slideLeft >= listLeft && slideRight <= listRight;
          });
        }
        function triggerUpdate(el, type, data2) {
          trigger(el, createEvent(type, false, false, data2));
        }
        var slider = {
          mixins: [Class, Slider, SliderReactive],
          props: {
            center: Boolean,
            sets: Boolean
          },
          data: {
            center: false,
            sets: false,
            attrItem: "uk-slider-item",
            selList: ".uk-slider-items",
            selNav: ".uk-slider-nav",
            clsContainer: "uk-slider-container",
            Transitioner
          },
          computed: {
            avgWidth: function() {
              return getWidth(this.list) / this.length;
            },
            finite: function(ref) {
              var finite = ref.finite;
              return finite || Math.ceil(getWidth(this.list)) < dimensions(this.list).width + getMaxElWidth(this.list) + this.center;
            },
            maxIndex: function() {
              if (!this.finite || this.center && !this.sets) {
                return this.length - 1;
              }
              if (this.center) {
                return last(this.sets);
              }
              var lft = 0;
              var max = getMax(this.list);
              var index2 = findIndex(this.slides, function(el) {
                if (lft >= max) {
                  return true;
                }
                lft += dimensions(el).width;
              });
              return ~index2 ? index2 : this.length - 1;
            },
            sets: function(ref) {
              var this$1 = this;
              var sets = ref.sets;
              if (!sets) {
                return;
              }
              var width2 = dimensions(this.list).width / (this.center ? 2 : 1);
              var left = 0;
              var leftCenter = width2;
              var slideLeft = 0;
              sets = sortBy$1(this.slides, "offsetLeft").reduce(function(sets2, slide2, i) {
                var slideWidth = dimensions(slide2).width;
                var slideRight = slideLeft + slideWidth;
                if (slideRight > left) {
                  if (!this$1.center && i > this$1.maxIndex) {
                    i = this$1.maxIndex;
                  }
                  if (!includes(sets2, i)) {
                    var cmp = this$1.slides[i + 1];
                    if (this$1.center && cmp && slideWidth < leftCenter - dimensions(cmp).width / 2) {
                      leftCenter -= slideWidth;
                    } else {
                      leftCenter = width2;
                      sets2.push(i);
                      left = slideLeft + width2 + (this$1.center ? slideWidth / 2 : 0);
                    }
                  }
                }
                slideLeft += slideWidth;
                return sets2;
              }, []);
              return !isEmpty(sets) && sets;
            },
            transitionOptions: function() {
              return {
                center: this.center,
                list: this.list
              };
            }
          },
          connected: function() {
            toggleClass(this.$el, this.clsContainer, !$("." + this.clsContainer, this.$el));
          },
          update: {
            write: function() {
              var this$1 = this;
              this.navItems.forEach(function(el) {
                var index2 = toNumber(data(el, this$1.attrItem));
                if (index2 !== false) {
                  el.hidden = !this$1.maxIndex || index2 > this$1.maxIndex || this$1.sets && !includes(this$1.sets, index2);
                }
              });
              if (this.length && !this.dragging && !this.stack.length) {
                this.reorder();
                this._translate(1);
              }
              var actives = this._getTransitioner(this.index).getActives();
              this.slides.forEach(function(slide2) {
                return toggleClass(slide2, this$1.clsActive, includes(actives, slide2));
              });
              if (this.clsActivated && (!this.sets || includes(this.sets, toFloat(this.index)))) {
                this.slides.forEach(function(slide2) {
                  return toggleClass(slide2, this$1.clsActivated || "", includes(actives, slide2));
                });
              }
            },
            events: ["resize"]
          },
          events: {
            beforeitemshow: function(e) {
              if (!this.dragging && this.sets && this.stack.length < 2 && !includes(this.sets, this.index)) {
                this.index = this.getValidIndex();
              }
              var diff = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
              if (!this.dragging && diff > 1) {
                for (var i = 0; i < diff; i++) {
                  this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
                }
                e.preventDefault();
                return;
              }
              var index2 = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
              this.duration = speedUp(this.avgWidth / this.velocity) * (dimensions(this.slides[index2]).width / this.avgWidth);
              this.reorder();
            },
            itemshow: function() {
              if (~this.prevIndex) {
                addClass(this._getTransitioner().getItemIn(), this.clsActive);
              }
            }
          },
          methods: {
            reorder: function() {
              var this$1 = this;
              if (this.finite) {
                css(this.slides, "order", "");
                return;
              }
              var index2 = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
              this.slides.forEach(function(slide3, i) {
                return css(slide3, "order", this$1.dir > 0 && i < index2 ? 1 : this$1.dir < 0 && i >= this$1.index ? -1 : "");
              });
              if (!this.center) {
                return;
              }
              var next = this.slides[index2];
              var width2 = dimensions(this.list).width / 2 - dimensions(next).width / 2;
              var j = 0;
              while (width2 > 0) {
                var slideIndex = this.getIndex(--j + index2, index2);
                var slide2 = this.slides[slideIndex];
                css(slide2, "order", slideIndex > index2 ? -2 : -1);
                width2 -= dimensions(slide2).width;
              }
            },
            getValidIndex: function(index2, prevIndex) {
              if (index2 === void 0)
                index2 = this.index;
              if (prevIndex === void 0)
                prevIndex = this.prevIndex;
              index2 = this.getIndex(index2, prevIndex);
              if (!this.sets) {
                return index2;
              }
              var prev;
              do {
                if (includes(this.sets, index2)) {
                  return index2;
                }
                prev = index2;
                index2 = this.getIndex(index2 + this.dir, prevIndex);
              } while (index2 !== prev);
              return index2;
            }
          }
        };
        function getMaxElWidth(list) {
          return Math.max.apply(Math, [0].concat(children(list).map(function(el) {
            return dimensions(el).width;
          })));
        }
        var sliderParallax = {
          mixins: [Parallax],
          data: {
            selItem: "!li"
          },
          computed: {
            item: function(ref, $el) {
              var selItem = ref.selItem;
              return query(selItem, $el);
            }
          },
          events: [
            {
              name: "itemin itemout",
              self: true,
              el: function() {
                return this.item;
              },
              handler: function(ref) {
                var this$1 = this;
                var type = ref.type;
                var ref_detail = ref.detail;
                var percent2 = ref_detail.percent;
                var duration = ref_detail.duration;
                var timing = ref_detail.timing;
                var dir = ref_detail.dir;
                fastdom.read(function() {
                  var propsFrom = this$1.getCss(getCurrentPercent(type, dir, percent2));
                  var propsTo = this$1.getCss(isIn(type) ? 0.5 : dir > 0 ? 1 : 0);
                  fastdom.write(function() {
                    css(this$1.$el, propsFrom);
                    Transition.start(this$1.$el, propsTo, duration, timing).catch(noop);
                  });
                });
              }
            },
            {
              name: "transitioncanceled transitionend",
              self: true,
              el: function() {
                return this.item;
              },
              handler: function() {
                Transition.cancel(this.$el);
              }
            },
            {
              name: "itemtranslatein itemtranslateout",
              self: true,
              el: function() {
                return this.item;
              },
              handler: function(ref) {
                var this$1 = this;
                var type = ref.type;
                var ref_detail = ref.detail;
                var percent2 = ref_detail.percent;
                var dir = ref_detail.dir;
                fastdom.read(function() {
                  var props2 = this$1.getCss(getCurrentPercent(type, dir, percent2));
                  fastdom.write(function() {
                    return css(this$1.$el, props2);
                  });
                });
              }
            }
          ]
        };
        function isIn(type) {
          return endsWith(type, "in");
        }
        function getCurrentPercent(type, dir, percent2) {
          percent2 /= 2;
          return !isIn(type) ? dir < 0 ? percent2 : 1 - percent2 : dir < 0 ? 1 - percent2 : percent2;
        }
        var Animations = assign({}, Animations$2, {
          fade: {
            show: function() {
              return [
                { opacity: 0, zIndex: 0 },
                { zIndex: -1 }
              ];
            },
            percent: function(current) {
              return 1 - css(current, "opacity");
            },
            translate: function(percent2) {
              return [
                { opacity: 1 - percent2, zIndex: 0 },
                { zIndex: -1 }
              ];
            }
          },
          scale: {
            show: function() {
              return [
                { opacity: 0, transform: scale3d(1 + 0.5), zIndex: 0 },
                { zIndex: -1 }
              ];
            },
            percent: function(current) {
              return 1 - css(current, "opacity");
            },
            translate: function(percent2) {
              return [
                { opacity: 1 - percent2, transform: scale3d(1 + 0.5 * percent2), zIndex: 0 },
                { zIndex: -1 }
              ];
            }
          },
          pull: {
            show: function(dir) {
              return dir < 0 ? [
                { transform: translate(30), zIndex: -1 },
                { transform: translate(), zIndex: 0 }
              ] : [
                { transform: translate(-100), zIndex: 0 },
                { transform: translate(), zIndex: -1 }
              ];
            },
            percent: function(current, next, dir) {
              return dir < 0 ? 1 - translated(next) : translated(current);
            },
            translate: function(percent2, dir) {
              return dir < 0 ? [
                { transform: translate(30 * percent2), zIndex: -1 },
                { transform: translate(-100 * (1 - percent2)), zIndex: 0 }
              ] : [
                { transform: translate(-percent2 * 100), zIndex: 0 },
                { transform: translate(30 * (1 - percent2)), zIndex: -1 }
              ];
            }
          },
          push: {
            show: function(dir) {
              return dir < 0 ? [
                { transform: translate(100), zIndex: 0 },
                { transform: translate(), zIndex: -1 }
              ] : [
                { transform: translate(-30), zIndex: -1 },
                { transform: translate(), zIndex: 0 }
              ];
            },
            percent: function(current, next, dir) {
              return dir > 0 ? 1 - translated(next) : translated(current);
            },
            translate: function(percent2, dir) {
              return dir < 0 ? [
                { transform: translate(percent2 * 100), zIndex: 0 },
                { transform: translate(-30 * (1 - percent2)), zIndex: -1 }
              ] : [
                { transform: translate(-30 * percent2), zIndex: -1 },
                { transform: translate(100 * (1 - percent2)), zIndex: 0 }
              ];
            }
          }
        });
        var slideshow = {
          mixins: [Class, Slideshow, SliderReactive],
          props: {
            ratio: String,
            minHeight: Number,
            maxHeight: Number
          },
          data: {
            ratio: "16:9",
            minHeight: false,
            maxHeight: false,
            selList: ".uk-slideshow-items",
            attrItem: "uk-slideshow-item",
            selNav: ".uk-slideshow-nav",
            Animations
          },
          update: {
            read: function() {
              var ref = this.ratio.split(":").map(Number);
              var width2 = ref[0];
              var height2 = ref[1];
              height2 = height2 * this.list.offsetWidth / width2 || 0;
              if (this.minHeight) {
                height2 = Math.max(this.minHeight, height2);
              }
              if (this.maxHeight) {
                height2 = Math.min(this.maxHeight, height2);
              }
              return { height: height2 - boxModelAdjust(this.list, "height", "content-box") };
            },
            write: function(ref) {
              var height2 = ref.height;
              height2 > 0 && css(this.list, "minHeight", height2);
            },
            events: ["resize"]
          }
        };
        var sortable = {
          mixins: [Class, Animate],
          props: {
            group: String,
            threshold: Number,
            clsItem: String,
            clsPlaceholder: String,
            clsDrag: String,
            clsDragState: String,
            clsBase: String,
            clsNoDrag: String,
            clsEmpty: String,
            clsCustom: String,
            handle: String
          },
          data: {
            group: false,
            threshold: 5,
            clsItem: "uk-sortable-item",
            clsPlaceholder: "uk-sortable-placeholder",
            clsDrag: "uk-sortable-drag",
            clsDragState: "uk-drag",
            clsBase: "uk-sortable",
            clsNoDrag: "uk-sortable-nodrag",
            clsEmpty: "uk-sortable-empty",
            clsCustom: "",
            handle: false,
            pos: {}
          },
          created: function() {
            var this$1 = this;
            ["init", "start", "move", "end"].forEach(function(key2) {
              var fn = this$1[key2];
              this$1[key2] = function(e) {
                assign(this$1.pos, getEventPos(e));
                fn(e);
              };
            });
          },
          events: {
            name: pointerDown,
            passive: false,
            handler: "init"
          },
          computed: {
            target: function() {
              return (this.$el.tBodies || [this.$el])[0];
            },
            items: function() {
              return children(this.target);
            },
            isEmpty: {
              get: function() {
                return isEmpty(this.items);
              },
              watch: function(empty2) {
                toggleClass(this.target, this.clsEmpty, empty2);
              },
              immediate: true
            },
            handles: {
              get: function(ref, el) {
                var handle = ref.handle;
                return handle ? $$(handle, el) : this.items;
              },
              watch: function(handles, prev) {
                css(prev, { touchAction: "", userSelect: "" });
                css(handles, { touchAction: hasTouch ? "none" : "", userSelect: "none" });
              },
              immediate: true
            }
          },
          update: {
            write: function(data2) {
              if (!this.drag || !parent(this.placeholder)) {
                return;
              }
              var ref = this;
              var ref_pos = ref.pos;
              var x = ref_pos.x;
              var y = ref_pos.y;
              var ref_origin = ref.origin;
              var offsetTop = ref_origin.offsetTop;
              var offsetLeft = ref_origin.offsetLeft;
              var placeholder = ref.placeholder;
              css(this.drag, {
                top: y - offsetTop,
                left: x - offsetLeft
              });
              var sortable2 = this.getSortable(document.elementFromPoint(x, y));
              if (!sortable2) {
                return;
              }
              var items = sortable2.items;
              if (items.some(Transition.inProgress)) {
                return;
              }
              var target = findTarget(items, { x, y });
              if (items.length && (!target || target === placeholder)) {
                return;
              }
              var previous = this.getSortable(placeholder);
              var insertTarget = findInsertTarget(sortable2.target, target, placeholder, x, y, sortable2 === previous && data2.moved !== target);
              if (insertTarget === false) {
                return;
              }
              if (insertTarget && placeholder === insertTarget) {
                return;
              }
              if (sortable2 !== previous) {
                previous.remove(placeholder);
                data2.moved = target;
              } else {
                delete data2.moved;
              }
              sortable2.insert(placeholder, insertTarget);
              this.touched.add(sortable2);
            },
            events: ["move"]
          },
          methods: {
            init: function(e) {
              var target = e.target;
              var button = e.button;
              var defaultPrevented = e.defaultPrevented;
              var ref = this.items.filter(function(el) {
                return within(target, el);
              });
              var placeholder = ref[0];
              if (!placeholder || defaultPrevented || button > 0 || isInput(target) || within(target, "." + this.clsNoDrag) || this.handle && !within(target, this.handle)) {
                return;
              }
              e.preventDefault();
              this.touched = new Set([this]);
              this.placeholder = placeholder;
              this.origin = assign({ target, index: index(placeholder) }, this.pos);
              on(document, pointerMove, this.move);
              on(document, pointerUp, this.end);
              if (!this.threshold) {
                this.start(e);
              }
            },
            start: function(e) {
              this.drag = appendDrag(this.$container, this.placeholder);
              var ref = this.placeholder.getBoundingClientRect();
              var left = ref.left;
              var top = ref.top;
              assign(this.origin, { offsetLeft: this.pos.x - left, offsetTop: this.pos.y - top });
              addClass(this.drag, this.clsDrag, this.clsCustom);
              addClass(this.placeholder, this.clsPlaceholder);
              addClass(this.items, this.clsItem);
              addClass(document.documentElement, this.clsDragState);
              trigger(this.$el, "start", [this, this.placeholder]);
              trackScroll(this.pos);
              this.move(e);
            },
            move: function(e) {
              if (this.drag) {
                this.$emit("move");
              } else if (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) {
                this.start(e);
              }
            },
            end: function() {
              var this$1 = this;
              off(document, pointerMove, this.move);
              off(document, pointerUp, this.end);
              off(window, "scroll", this.scroll);
              if (!this.drag) {
                return;
              }
              untrackScroll();
              var sortable2 = this.getSortable(this.placeholder);
              if (this === sortable2) {
                if (this.origin.index !== index(this.placeholder)) {
                  trigger(this.$el, "moved", [this, this.placeholder]);
                }
              } else {
                trigger(sortable2.$el, "added", [sortable2, this.placeholder]);
                trigger(this.$el, "removed", [this, this.placeholder]);
              }
              trigger(this.$el, "stop", [this, this.placeholder]);
              remove$1(this.drag);
              this.drag = null;
              this.touched.forEach(function(ref) {
                var clsPlaceholder = ref.clsPlaceholder;
                var clsItem = ref.clsItem;
                return this$1.touched.forEach(function(sortable3) {
                  return removeClass(sortable3.items, clsPlaceholder, clsItem);
                });
              });
              this.touched = null;
              removeClass(document.documentElement, this.clsDragState);
            },
            insert: function(element, target) {
              var this$1 = this;
              addClass(this.items, this.clsItem);
              var insert = function() {
                return target ? before(target, element) : append(this$1.target, element);
              };
              this.animate(insert);
            },
            remove: function(element) {
              if (!within(element, this.target)) {
                return;
              }
              this.animate(function() {
                return remove$1(element);
              });
            },
            getSortable: function(element) {
              do {
                var sortable2 = this.$getComponent(element, "sortable");
                if (sortable2 && (sortable2 === this || this.group !== false && sortable2.group === this.group)) {
                  return sortable2;
                }
              } while (element = parent(element));
            }
          }
        };
        var trackTimer;
        function trackScroll(pos) {
          var last2 = Date.now();
          trackTimer = setInterval(function() {
            var x = pos.x;
            var y = pos.y;
            y += window.pageYOffset;
            var dist = (Date.now() - last2) * 0.3;
            last2 = Date.now();
            scrollParents(document.elementFromPoint(x, pos.y)).reverse().some(function(scrollEl) {
              var scroll2 = scrollEl.scrollTop;
              var scrollHeight = scrollEl.scrollHeight;
              var ref = offset(getViewport$1(scrollEl));
              var top = ref.top;
              var bottom = ref.bottom;
              var height2 = ref.height;
              if (top < y && top + 35 > y) {
                scroll2 -= dist;
              } else if (bottom > y && bottom - 35 < y) {
                scroll2 += dist;
              } else {
                return;
              }
              if (scroll2 > 0 && scroll2 < scrollHeight - height2) {
                scrollTop(scrollEl, scroll2);
                return true;
              }
            });
          }, 15);
        }
        function untrackScroll() {
          clearInterval(trackTimer);
        }
        function appendDrag(container, element) {
          var clone = append(container, element.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, "$1div$2"));
          css(clone, "margin", "0", "important");
          css(clone, assign({
            boxSizing: "border-box",
            width: element.offsetWidth,
            height: element.offsetHeight
          }, css(element, ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"])));
          height(clone.firstElementChild, height(element.firstElementChild));
          return clone;
        }
        function findTarget(items, point) {
          return items[findIndex(items, function(item) {
            return pointInRect(point, item.getBoundingClientRect());
          })];
        }
        function findInsertTarget(list, target, placeholder, x, y, sameList) {
          if (!children(list).length) {
            return;
          }
          var rect = target.getBoundingClientRect();
          if (!sameList) {
            if (!isHorizontal(list, placeholder)) {
              return y < rect.top + rect.height / 2 ? target : target.nextElementSibling;
            }
            return target;
          }
          var placeholderRect = placeholder.getBoundingClientRect();
          var sameRow = linesIntersect([rect.top, rect.bottom], [placeholderRect.top, placeholderRect.bottom]);
          var pointerPos = sameRow ? x : y;
          var lengthProp = sameRow ? "width" : "height";
          var startProp = sameRow ? "left" : "top";
          var endProp = sameRow ? "right" : "bottom";
          var diff = placeholderRect[lengthProp] < rect[lengthProp] ? rect[lengthProp] - placeholderRect[lengthProp] : 0;
          if (placeholderRect[startProp] < rect[startProp]) {
            if (diff && pointerPos < rect[startProp] + diff) {
              return false;
            }
            return target.nextElementSibling;
          }
          if (diff && pointerPos > rect[endProp] - diff) {
            return false;
          }
          return target;
        }
        function isHorizontal(list, placeholder) {
          var single = children(list).length === 1;
          if (single) {
            append(list, placeholder);
          }
          var items = children(list);
          var isHorizontal2 = items.some(function(el, i) {
            var rectA = el.getBoundingClientRect();
            return items.slice(i + 1).some(function(el2) {
              var rectB = el2.getBoundingClientRect();
              return !linesIntersect([rectA.left, rectA.right], [rectB.left, rectB.right]);
            });
          });
          if (single) {
            remove$1(placeholder);
          }
          return isHorizontal2;
        }
        function linesIntersect(lineA, lineB) {
          return lineA[1] > lineB[0] && lineB[1] > lineA[0];
        }
        var obj;
        var tooltip = {
          mixins: [Container, Togglable, Position],
          args: "title",
          props: {
            delay: Number,
            title: String
          },
          data: {
            pos: "top",
            title: "",
            delay: 0,
            animation: ["uk-animation-scale-up"],
            duration: 100,
            cls: "uk-active",
            clsPos: "uk-tooltip"
          },
          beforeConnect: function() {
            this._hasTitle = hasAttr(this.$el, "title");
            attr(this.$el, "title", "");
            this.updateAria(false);
            makeFocusable(this.$el);
          },
          disconnected: function() {
            this.hide();
            attr(this.$el, "title", this._hasTitle ? this.title : null);
          },
          methods: {
            show: function() {
              var this$1 = this;
              if (this.isToggled(this.tooltip || null) || !this.title) {
                return;
              }
              this._unbind = once(document, "show keydown " + pointerDown, this.hide, false, function(e) {
                return e.type === pointerDown && !within(e.target, this$1.$el) || e.type === "keydown" && e.keyCode === 27 || e.type === "show" && e.detail[0] !== this$1 && e.detail[0].$name === this$1.$name;
              });
              clearTimeout(this.showTimer);
              this.showTimer = setTimeout(this._show, this.delay);
            },
            hide: function() {
              var this$1 = this;
              if (matches(this.$el, "input:focus")) {
                return;
              }
              clearTimeout(this.showTimer);
              if (!this.isToggled(this.tooltip || null)) {
                return;
              }
              this.toggleElement(this.tooltip, false, false).then(function() {
                this$1.tooltip = remove$1(this$1.tooltip);
                this$1._unbind();
              });
            },
            _show: function() {
              var this$1 = this;
              this.tooltip = append(this.container, '<div class="' + this.clsPos + '"> <div class="' + this.clsPos + '-inner">' + this.title + "</div> </div>");
              on(this.tooltip, "toggled", function(e, toggled) {
                this$1.updateAria(toggled);
                if (!toggled) {
                  return;
                }
                this$1.positionAt(this$1.tooltip, this$1.$el);
                this$1.origin = this$1.getAxis() === "y" ? flipPosition(this$1.dir) + "-" + this$1.align : this$1.align + "-" + flipPosition(this$1.dir);
              });
              this.toggleElement(this.tooltip, true);
            },
            updateAria: function(toggled) {
              attr(this.$el, "aria-expanded", toggled);
            }
          },
          events: (obj = {
            focus: "show",
            blur: "hide"
          }, obj[pointerEnter + " " + pointerLeave] = function(e) {
            if (!isTouch(e)) {
              this[e.type === pointerEnter ? "show" : "hide"]();
            }
          }, obj[pointerDown] = function(e) {
            if (isTouch(e)) {
              this.show();
            }
          }, obj)
        };
        function makeFocusable(el) {
          if (!isFocusable(el)) {
            attr(el, "tabindex", "0");
          }
        }
        var upload = {
          props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            maxSize: Number,
            method: String,
            mime: String,
            msgInvalidMime: String,
            msgInvalidName: String,
            msgInvalidSize: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String
          },
          data: {
            allow: false,
            clsDragover: "uk-dragover",
            concurrent: 1,
            maxSize: 0,
            method: "POST",
            mime: false,
            msgInvalidMime: "Invalid File Type: %s",
            msgInvalidName: "Invalid File Name: %s",
            msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
            multiple: false,
            name: "files[]",
            params: {},
            type: "",
            url: "",
            abort: noop,
            beforeAll: noop,
            beforeSend: noop,
            complete: noop,
            completeAll: noop,
            error: noop,
            fail: noop,
            load: noop,
            loadEnd: noop,
            loadStart: noop,
            progress: noop
          },
          events: {
            change: function(e) {
              if (!matches(e.target, 'input[type="file"]')) {
                return;
              }
              e.preventDefault();
              if (e.target.files) {
                this.upload(e.target.files);
              }
              e.target.value = "";
            },
            drop: function(e) {
              stop(e);
              var transfer = e.dataTransfer;
              if (!transfer || !transfer.files) {
                return;
              }
              removeClass(this.$el, this.clsDragover);
              this.upload(transfer.files);
            },
            dragenter: function(e) {
              stop(e);
            },
            dragover: function(e) {
              stop(e);
              addClass(this.$el, this.clsDragover);
            },
            dragleave: function(e) {
              stop(e);
              removeClass(this.$el, this.clsDragover);
            }
          },
          methods: {
            upload: function(files) {
              var this$1 = this;
              if (!files.length) {
                return;
              }
              trigger(this.$el, "upload", [files]);
              for (var i = 0; i < files.length; i++) {
                if (this.maxSize && this.maxSize * 1e3 < files[i].size) {
                  this.fail(this.msgInvalidSize.replace("%s", this.maxSize));
                  return;
                }
                if (this.allow && !match(this.allow, files[i].name)) {
                  this.fail(this.msgInvalidName.replace("%s", this.allow));
                  return;
                }
                if (this.mime && !match(this.mime, files[i].type)) {
                  this.fail(this.msgInvalidMime.replace("%s", this.mime));
                  return;
                }
              }
              if (!this.multiple) {
                files = [files[0]];
              }
              this.beforeAll(this, files);
              var chunks = chunk(files, this.concurrent);
              var upload2 = function(files2) {
                var data2 = new FormData();
                files2.forEach(function(file) {
                  return data2.append(this$1.name, file);
                });
                for (var key2 in this$1.params) {
                  data2.append(key2, this$1.params[key2]);
                }
                ajax(this$1.url, {
                  data: data2,
                  method: this$1.method,
                  responseType: this$1.type,
                  beforeSend: function(env) {
                    var xhr = env.xhr;
                    xhr.upload && on(xhr.upload, "progress", this$1.progress);
                    ["loadStart", "load", "loadEnd", "abort"].forEach(function(type) {
                      return on(xhr, type.toLowerCase(), this$1[type]);
                    });
                    return this$1.beforeSend(env);
                  }
                }).then(function(xhr) {
                  this$1.complete(xhr);
                  if (chunks.length) {
                    upload2(chunks.shift());
                  } else {
                    this$1.completeAll(xhr);
                  }
                }, function(e) {
                  return this$1.error(e);
                });
              };
              upload2(chunks.shift());
            }
          }
        };
        function match(pattern, path) {
          return path.match(new RegExp("^" + pattern.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i"));
        }
        function chunk(files, size) {
          var chunks = [];
          for (var i = 0; i < files.length; i += size) {
            var chunk2 = [];
            for (var j = 0; j < size; j++) {
              chunk2.push(files[i + j]);
            }
            chunks.push(chunk2);
          }
          return chunks;
        }
        function stop(e) {
          e.preventDefault();
          e.stopPropagation();
        }
        var components = /* @__PURE__ */ Object.freeze({
          __proto__: null,
          Countdown: countdown,
          Filter: filter,
          Lightbox: lightbox,
          LightboxPanel,
          Notification: notification,
          Parallax: parallax,
          Slider: slider,
          SliderParallax: sliderParallax,
          Slideshow: slideshow,
          SlideshowParallax: sliderParallax,
          Sortable: sortable,
          Tooltip: tooltip,
          Upload: upload
        });
        each(components, function(component, name) {
          return UIkit.component(name, component);
        });
        return UIkit;
      });
    }
  });

  // ../deps/phoenix/priv/static/phoenix.js
  var require_phoenix = __commonJS({
    "../deps/phoenix/priv/static/phoenix.js"(exports, module) {
      !function(e, t) {
        typeof exports == "object" && typeof module == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? exports.Phoenix = t() : e.Phoenix = t();
      }(exports, function() {
        return function(e) {
          var t = {};
          function n(i) {
            if (t[i])
              return t[i].exports;
            var o = t[i] = { i, l: false, exports: {} };
            return e[i].call(o.exports, o, o.exports, n), o.l = true, o.exports;
          }
          return n.m = e, n.c = t, n.d = function(e2, t2, i) {
            n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: i });
          }, n.r = function(e2) {
            typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
          }, n.t = function(e2, t2) {
            if (1 & t2 && (e2 = n(e2)), 8 & t2)
              return e2;
            if (4 & t2 && typeof e2 == "object" && e2 && e2.__esModule)
              return e2;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", { enumerable: true, value: e2 }), 2 & t2 && typeof e2 != "string")
              for (var o in e2)
                n.d(i, o, function(t3) {
                  return e2[t3];
                }.bind(null, o));
            return i;
          }, n.n = function(e2) {
            var t2 = e2 && e2.__esModule ? function() {
              return e2.default;
            } : function() {
              return e2;
            };
            return n.d(t2, "a", t2), t2;
          }, n.o = function(e2, t2) {
            return Object.prototype.hasOwnProperty.call(e2, t2);
          }, n.p = "", n(n.s = 0);
        }([function(e, t, n) {
          (function(t2) {
            e.exports = t2.Phoenix = n(2);
          }).call(this, n(1));
        }, function(e, t) {
          var n;
          n = function() {
            return this;
          }();
          try {
            n = n || new Function("return this")();
          } catch (e2) {
            typeof window == "object" && (n = window);
          }
          e.exports = n;
        }, function(e, t, n) {
          "use strict";
          function i(e2) {
            return function(e3) {
              if (Array.isArray(e3))
                return a(e3);
            }(e2) || function(e3) {
              if (typeof Symbol != "undefined" && Symbol.iterator in Object(e3))
                return Array.from(e3);
            }(e2) || s(e2) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function o(e2) {
            return (o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
              return typeof e3;
            } : function(e3) {
              return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
            })(e2);
          }
          function r(e2, t2) {
            return function(e3) {
              if (Array.isArray(e3))
                return e3;
            }(e2) || function(e3, t3) {
              if (typeof Symbol == "undefined" || !(Symbol.iterator in Object(e3)))
                return;
              var n2 = [], i2 = true, o2 = false, r2 = void 0;
              try {
                for (var s2, a2 = e3[Symbol.iterator](); !(i2 = (s2 = a2.next()).done) && (n2.push(s2.value), !t3 || n2.length !== t3); i2 = true)
                  ;
              } catch (e4) {
                o2 = true, r2 = e4;
              } finally {
                try {
                  i2 || a2.return == null || a2.return();
                } finally {
                  if (o2)
                    throw r2;
                }
              }
              return n2;
            }(e2, t2) || s(e2, t2) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function s(e2, t2) {
            if (e2) {
              if (typeof e2 == "string")
                return a(e2, t2);
              var n2 = Object.prototype.toString.call(e2).slice(8, -1);
              return n2 === "Object" && e2.constructor && (n2 = e2.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(n2) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? a(e2, t2) : void 0;
            }
          }
          function a(e2, t2) {
            (t2 == null || t2 > e2.length) && (t2 = e2.length);
            for (var n2 = 0, i2 = new Array(t2); n2 < t2; n2++)
              i2[n2] = e2[n2];
            return i2;
          }
          function c(e2, t2) {
            if (!(e2 instanceof t2))
              throw new TypeError("Cannot call a class as a function");
          }
          function u(e2, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var i2 = t2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e2, i2.key, i2);
            }
          }
          function h(e2, t2, n2) {
            return t2 && u(e2.prototype, t2), n2 && u(e2, n2), e2;
          }
          n.r(t), n.d(t, "Channel", function() {
            return _;
          }), n.d(t, "Serializer", function() {
            return H;
          }), n.d(t, "Socket", function() {
            return U;
          }), n.d(t, "LongPoll", function() {
            return D;
          }), n.d(t, "Ajax", function() {
            return M;
          }), n.d(t, "Presence", function() {
            return N;
          });
          var l = typeof self != "undefined" ? self : null, f = typeof window != "undefined" ? window : null, d = l || f || void 0, p = 0, v = 1, y = 2, m = 3, g = "closed", k = "errored", b = "joined", j = "joining", C = "leaving", E = "phx_close", R = "phx_error", T = "phx_join", S = "phx_reply", w = "phx_leave", A = [E, R, T, S, w], L = "longpoll", x = "websocket", O = function(e2) {
            if (typeof e2 == "function")
              return e2;
            return function() {
              return e2;
            };
          }, P = function() {
            function e2(t2, n2, i2, o2) {
              c(this, e2), this.channel = t2, this.event = n2, this.payload = i2 || function() {
                return {};
              }, this.receivedResp = null, this.timeout = o2, this.timeoutTimer = null, this.recHooks = [], this.sent = false;
            }
            return h(e2, [{ key: "resend", value: function(e3) {
              this.timeout = e3, this.reset(), this.send();
            } }, { key: "send", value: function() {
              this.hasReceived("timeout") || (this.startTimeout(), this.sent = true, this.channel.socket.push({ topic: this.channel.topic, event: this.event, payload: this.payload(), ref: this.ref, join_ref: this.channel.joinRef() }));
            } }, { key: "receive", value: function(e3, t2) {
              return this.hasReceived(e3) && t2(this.receivedResp.response), this.recHooks.push({ status: e3, callback: t2 }), this;
            } }, { key: "reset", value: function() {
              this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = false;
            } }, { key: "matchReceive", value: function(e3) {
              var t2 = e3.status, n2 = e3.response;
              e3.ref;
              this.recHooks.filter(function(e4) {
                return e4.status === t2;
              }).forEach(function(e4) {
                return e4.callback(n2);
              });
            } }, { key: "cancelRefEvent", value: function() {
              this.refEvent && this.channel.off(this.refEvent);
            } }, { key: "cancelTimeout", value: function() {
              clearTimeout(this.timeoutTimer), this.timeoutTimer = null;
            } }, { key: "startTimeout", value: function() {
              var e3 = this;
              this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, function(t2) {
                e3.cancelRefEvent(), e3.cancelTimeout(), e3.receivedResp = t2, e3.matchReceive(t2);
              }), this.timeoutTimer = setTimeout(function() {
                e3.trigger("timeout", {});
              }, this.timeout);
            } }, { key: "hasReceived", value: function(e3) {
              return this.receivedResp && this.receivedResp.status === e3;
            } }, { key: "trigger", value: function(e3, t2) {
              this.channel.trigger(this.refEvent, { status: e3, response: t2 });
            } }]), e2;
          }(), _ = function() {
            function e2(t2, n2, i2) {
              var o2 = this;
              c(this, e2), this.state = g, this.topic = t2, this.params = O(n2 || {}), this.socket = i2, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = false, this.joinPush = new P(this, T, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new J(function() {
                o2.socket.isConnected() && o2.rejoin();
              }, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(function() {
                return o2.rejoinTimer.reset();
              })), this.stateChangeRefs.push(this.socket.onOpen(function() {
                o2.rejoinTimer.reset(), o2.isErrored() && o2.rejoin();
              })), this.joinPush.receive("ok", function() {
                o2.state = b, o2.rejoinTimer.reset(), o2.pushBuffer.forEach(function(e3) {
                  return e3.send();
                }), o2.pushBuffer = [];
              }), this.joinPush.receive("error", function() {
                o2.state = k, o2.socket.isConnected() && o2.rejoinTimer.scheduleTimeout();
              }), this.onClose(function() {
                o2.rejoinTimer.reset(), o2.socket.hasLogger() && o2.socket.log("channel", "close ".concat(o2.topic, " ").concat(o2.joinRef())), o2.state = g, o2.socket.remove(o2);
              }), this.onError(function(e3) {
                o2.socket.hasLogger() && o2.socket.log("channel", "error ".concat(o2.topic), e3), o2.isJoining() && o2.joinPush.reset(), o2.state = k, o2.socket.isConnected() && o2.rejoinTimer.scheduleTimeout();
              }), this.joinPush.receive("timeout", function() {
                o2.socket.hasLogger() && o2.socket.log("channel", "timeout ".concat(o2.topic, " (").concat(o2.joinRef(), ")"), o2.joinPush.timeout), new P(o2, w, O({}), o2.timeout).send(), o2.state = k, o2.joinPush.reset(), o2.socket.isConnected() && o2.rejoinTimer.scheduleTimeout();
              }), this.on(S, function(e3, t3) {
                o2.trigger(o2.replyEventName(t3), e3);
              });
            }
            return h(e2, [{ key: "join", value: function() {
              var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.timeout;
              if (this.joinedOnce)
                throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
              return this.timeout = e3, this.joinedOnce = true, this.rejoin(), this.joinPush;
            } }, { key: "onClose", value: function(e3) {
              this.on(E, e3);
            } }, { key: "onError", value: function(e3) {
              return this.on(R, function(t2) {
                return e3(t2);
              });
            } }, { key: "on", value: function(e3, t2) {
              var n2 = this.bindingRef++;
              return this.bindings.push({ event: e3, ref: n2, callback: t2 }), n2;
            } }, { key: "off", value: function(e3, t2) {
              this.bindings = this.bindings.filter(function(n2) {
                return !(n2.event === e3 && (t2 === void 0 || t2 === n2.ref));
              });
            } }, { key: "canPush", value: function() {
              return this.socket.isConnected() && this.isJoined();
            } }, { key: "push", value: function(e3, t2) {
              var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.timeout;
              if (!this.joinedOnce)
                throw new Error("tried to push '".concat(e3, "' to '").concat(this.topic, "' before joining. Use channel.join() before pushing events"));
              var i2 = new P(this, e3, function() {
                return t2;
              }, n2);
              return this.canPush() ? i2.send() : (i2.startTimeout(), this.pushBuffer.push(i2)), i2;
            } }, { key: "leave", value: function() {
              var e3 = this, t2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.timeout;
              this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = C;
              var n2 = function() {
                e3.socket.hasLogger() && e3.socket.log("channel", "leave ".concat(e3.topic)), e3.trigger(E, "leave");
              }, i2 = new P(this, w, O({}), t2);
              return i2.receive("ok", function() {
                return n2();
              }).receive("timeout", function() {
                return n2();
              }), i2.send(), this.canPush() || i2.trigger("ok", {}), i2;
            } }, { key: "onMessage", value: function(e3, t2, n2) {
              return t2;
            } }, { key: "isLifecycleEvent", value: function(e3) {
              return A.indexOf(e3) >= 0;
            } }, { key: "isMember", value: function(e3, t2, n2, i2) {
              return this.topic === e3 && (!i2 || i2 === this.joinRef() || !this.isLifecycleEvent(t2) || (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", { topic: e3, event: t2, payload: n2, joinRef: i2 }), false));
            } }, { key: "joinRef", value: function() {
              return this.joinPush.ref;
            } }, { key: "rejoin", value: function() {
              var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.timeout;
              this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = j, this.joinPush.resend(e3));
            } }, { key: "trigger", value: function(e3, t2, n2, i2) {
              var o2 = this.onMessage(e3, t2, n2, i2);
              if (t2 && !o2)
                throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
              for (var r2 = this.bindings.filter(function(t3) {
                return t3.event === e3;
              }), s2 = 0; s2 < r2.length; s2++) {
                r2[s2].callback(o2, n2, i2 || this.joinRef());
              }
            } }, { key: "replyEventName", value: function(e3) {
              return "chan_reply_".concat(e3);
            } }, { key: "isClosed", value: function() {
              return this.state === g;
            } }, { key: "isErrored", value: function() {
              return this.state === k;
            } }, { key: "isJoined", value: function() {
              return this.state === b;
            } }, { key: "isJoining", value: function() {
              return this.state === j;
            } }, { key: "isLeaving", value: function() {
              return this.state === C;
            } }]), e2;
          }(), H = { HEADER_LENGTH: 1, META_LENGTH: 4, KINDS: { push: 0, reply: 1, broadcast: 2 }, encode: function(e2, t2) {
            if (e2.payload.constructor === ArrayBuffer)
              return t2(this.binaryEncode(e2));
            var n2 = [e2.join_ref, e2.ref, e2.topic, e2.event, e2.payload];
            return t2(JSON.stringify(n2));
          }, decode: function(e2, t2) {
            if (e2.constructor === ArrayBuffer)
              return t2(this.binaryDecode(e2));
            var n2 = r(JSON.parse(e2), 5);
            return t2({ join_ref: n2[0], ref: n2[1], topic: n2[2], event: n2[3], payload: n2[4] });
          }, binaryEncode: function(e2) {
            var t2 = e2.join_ref, n2 = e2.ref, i2 = e2.event, o2 = e2.topic, r2 = e2.payload, s2 = this.META_LENGTH + t2.length + n2.length + o2.length + i2.length, a2 = new ArrayBuffer(this.HEADER_LENGTH + s2), c2 = new DataView(a2), u2 = 0;
            c2.setUint8(u2++, this.KINDS.push), c2.setUint8(u2++, t2.length), c2.setUint8(u2++, n2.length), c2.setUint8(u2++, o2.length), c2.setUint8(u2++, i2.length), Array.from(t2, function(e3) {
              return c2.setUint8(u2++, e3.charCodeAt(0));
            }), Array.from(n2, function(e3) {
              return c2.setUint8(u2++, e3.charCodeAt(0));
            }), Array.from(o2, function(e3) {
              return c2.setUint8(u2++, e3.charCodeAt(0));
            }), Array.from(i2, function(e3) {
              return c2.setUint8(u2++, e3.charCodeAt(0));
            });
            var h2 = new Uint8Array(a2.byteLength + r2.byteLength);
            return h2.set(new Uint8Array(a2), 0), h2.set(new Uint8Array(r2), a2.byteLength), h2.buffer;
          }, binaryDecode: function(e2) {
            var t2 = new DataView(e2), n2 = t2.getUint8(0), i2 = new TextDecoder();
            switch (n2) {
              case this.KINDS.push:
                return this.decodePush(e2, t2, i2);
              case this.KINDS.reply:
                return this.decodeReply(e2, t2, i2);
              case this.KINDS.broadcast:
                return this.decodeBroadcast(e2, t2, i2);
            }
          }, decodePush: function(e2, t2, n2) {
            var i2 = t2.getUint8(1), o2 = t2.getUint8(2), r2 = t2.getUint8(3), s2 = this.HEADER_LENGTH + this.META_LENGTH - 1, a2 = n2.decode(e2.slice(s2, s2 + i2));
            s2 += i2;
            var c2 = n2.decode(e2.slice(s2, s2 + o2));
            s2 += o2;
            var u2 = n2.decode(e2.slice(s2, s2 + r2));
            return s2 += r2, { join_ref: a2, ref: null, topic: c2, event: u2, payload: e2.slice(s2, e2.byteLength) };
          }, decodeReply: function(e2, t2, n2) {
            var i2 = t2.getUint8(1), o2 = t2.getUint8(2), r2 = t2.getUint8(3), s2 = t2.getUint8(4), a2 = this.HEADER_LENGTH + this.META_LENGTH, c2 = n2.decode(e2.slice(a2, a2 + i2));
            a2 += i2;
            var u2 = n2.decode(e2.slice(a2, a2 + o2));
            a2 += o2;
            var h2 = n2.decode(e2.slice(a2, a2 + r2));
            a2 += r2;
            var l2 = n2.decode(e2.slice(a2, a2 + s2));
            a2 += s2;
            var f2 = e2.slice(a2, e2.byteLength);
            return { join_ref: c2, ref: u2, topic: h2, event: S, payload: { status: l2, response: f2 } };
          }, decodeBroadcast: function(e2, t2, n2) {
            var i2 = t2.getUint8(1), o2 = t2.getUint8(2), r2 = this.HEADER_LENGTH + 2, s2 = n2.decode(e2.slice(r2, r2 + i2));
            r2 += i2;
            var a2 = n2.decode(e2.slice(r2, r2 + o2));
            return r2 += o2, { join_ref: null, ref: null, topic: s2, event: a2, payload: e2.slice(r2, e2.byteLength) };
          } }, U = function() {
            function e2(t2) {
              var n2 = this, i2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              c(this, e2), this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.timeout = i2.timeout || 1e4, this.transport = i2.transport || d.WebSocket || D, this.defaultEncoder = H.encode.bind(H), this.defaultDecoder = H.decode.bind(H), this.closeWasClean = false, this.unloaded = false, this.binaryType = i2.binaryType || "arraybuffer", this.transport !== D ? (this.encode = i2.encode || this.defaultEncoder, this.decode = i2.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder), f && f.addEventListener && f.addEventListener("unload", function(e3) {
                n2.conn && (n2.unloaded = true, n2.abnormalClose("unloaded"));
              }), this.heartbeatIntervalMs = i2.heartbeatIntervalMs || 3e4, this.rejoinAfterMs = function(e3) {
                return i2.rejoinAfterMs ? i2.rejoinAfterMs(e3) : [1e3, 2e3, 5e3][e3 - 1] || 1e4;
              }, this.reconnectAfterMs = function(e3) {
                return n2.unloaded ? 100 : i2.reconnectAfterMs ? i2.reconnectAfterMs(e3) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][e3 - 1] || 5e3;
              }, this.logger = i2.logger || null, this.longpollerTimeout = i2.longpollerTimeout || 2e4, this.params = O(i2.params || {}), this.endPoint = "".concat(t2, "/").concat(x), this.vsn = i2.vsn || "2.0.0", this.heartbeatTimer = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new J(function() {
                n2.teardown(function() {
                  return n2.connect();
                });
              }, this.reconnectAfterMs);
            }
            return h(e2, [{ key: "protocol", value: function() {
              return location.protocol.match(/^https/) ? "wss" : "ws";
            } }, { key: "endPointURL", value: function() {
              var e3 = M.appendParams(M.appendParams(this.endPoint, this.params()), { vsn: this.vsn });
              return e3.charAt(0) !== "/" ? e3 : e3.charAt(1) === "/" ? "".concat(this.protocol(), ":").concat(e3) : "".concat(this.protocol(), "://").concat(location.host).concat(e3);
            } }, { key: "disconnect", value: function(e3, t2, n2) {
              this.closeWasClean = true, this.reconnectTimer.reset(), this.teardown(e3, t2, n2);
            } }, { key: "connect", value: function(e3) {
              var t2 = this;
              e3 && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = O(e3)), this.conn || (this.closeWasClean = false, this.conn = new this.transport(this.endPointURL()), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = function() {
                return t2.onConnOpen();
              }, this.conn.onerror = function(e4) {
                return t2.onConnError(e4);
              }, this.conn.onmessage = function(e4) {
                return t2.onConnMessage(e4);
              }, this.conn.onclose = function(e4) {
                return t2.onConnClose(e4);
              });
            } }, { key: "log", value: function(e3, t2, n2) {
              this.logger(e3, t2, n2);
            } }, { key: "hasLogger", value: function() {
              return this.logger !== null;
            } }, { key: "onOpen", value: function(e3) {
              var t2 = this.makeRef();
              return this.stateChangeCallbacks.open.push([t2, e3]), t2;
            } }, { key: "onClose", value: function(e3) {
              var t2 = this.makeRef();
              return this.stateChangeCallbacks.close.push([t2, e3]), t2;
            } }, { key: "onError", value: function(e3) {
              var t2 = this.makeRef();
              return this.stateChangeCallbacks.error.push([t2, e3]), t2;
            } }, { key: "onMessage", value: function(e3) {
              var t2 = this.makeRef();
              return this.stateChangeCallbacks.message.push([t2, e3]), t2;
            } }, { key: "onConnOpen", value: function() {
              this.hasLogger() && this.log("transport", "connected to ".concat(this.endPointURL())), this.unloaded = false, this.closeWasClean = false, this.flushSendBuffer(), this.reconnectTimer.reset(), this.resetHeartbeat(), this.stateChangeCallbacks.open.forEach(function(e3) {
                return (0, r(e3, 2)[1])();
              });
            } }, { key: "resetHeartbeat", value: function() {
              var e3 = this;
              this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(function() {
                return e3.sendHeartbeat();
              }, this.heartbeatIntervalMs));
            } }, { key: "teardown", value: function(e3, t2, n2) {
              var i2 = this;
              if (!this.conn)
                return e3 && e3();
              this.waitForBufferDone(function() {
                i2.conn && (t2 ? i2.conn.close(t2, n2 || "") : i2.conn.close()), i2.waitForSocketClosed(function() {
                  i2.conn && (i2.conn.onclose = function() {
                  }, i2.conn = null), e3 && e3();
                });
              });
            } }, { key: "waitForBufferDone", value: function(e3) {
              var t2 = this, n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
              n2 !== 5 && this.conn && this.conn.bufferedAmount ? setTimeout(function() {
                t2.waitForBufferDone(e3, n2 + 1);
              }, 150 * n2) : e3();
            } }, { key: "waitForSocketClosed", value: function(e3) {
              var t2 = this, n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
              n2 !== 5 && this.conn && this.conn.readyState !== m ? setTimeout(function() {
                t2.waitForSocketClosed(e3, n2 + 1);
              }, 150 * n2) : e3();
            } }, { key: "onConnClose", value: function(e3) {
              this.hasLogger() && this.log("transport", "close", e3), this.triggerChanError(), clearInterval(this.heartbeatTimer), this.closeWasClean || this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach(function(t2) {
                return (0, r(t2, 2)[1])(e3);
              });
            } }, { key: "onConnError", value: function(e3) {
              this.hasLogger() && this.log("transport", e3), this.triggerChanError(), this.stateChangeCallbacks.error.forEach(function(t2) {
                return (0, r(t2, 2)[1])(e3);
              });
            } }, { key: "triggerChanError", value: function() {
              this.channels.forEach(function(e3) {
                e3.isErrored() || e3.isLeaving() || e3.isClosed() || e3.trigger(R);
              });
            } }, { key: "connectionState", value: function() {
              switch (this.conn && this.conn.readyState) {
                case p:
                  return "connecting";
                case v:
                  return "open";
                case y:
                  return "closing";
                default:
                  return "closed";
              }
            } }, { key: "isConnected", value: function() {
              return this.connectionState() === "open";
            } }, { key: "remove", value: function(e3) {
              this.off(e3.stateChangeRefs), this.channels = this.channels.filter(function(t2) {
                return t2.joinRef() !== e3.joinRef();
              });
            } }, { key: "off", value: function(e3) {
              for (var t2 in this.stateChangeCallbacks)
                this.stateChangeCallbacks[t2] = this.stateChangeCallbacks[t2].filter(function(t3) {
                  var n2 = r(t3, 1)[0];
                  return e3.indexOf(n2) === -1;
                });
            } }, { key: "channel", value: function(e3) {
              var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = new _(e3, t2, this);
              return this.channels.push(n2), n2;
            } }, { key: "push", value: function(e3) {
              var t2 = this;
              if (this.hasLogger()) {
                var n2 = e3.topic, i2 = e3.event, o2 = e3.payload, r2 = e3.ref, s2 = e3.join_ref;
                this.log("push", "".concat(n2, " ").concat(i2, " (").concat(s2, ", ").concat(r2, ")"), o2);
              }
              this.isConnected() ? this.encode(e3, function(e4) {
                return t2.conn.send(e4);
              }) : this.sendBuffer.push(function() {
                return t2.encode(e3, function(e4) {
                  return t2.conn.send(e4);
                });
              });
            } }, { key: "makeRef", value: function() {
              var e3 = this.ref + 1;
              return e3 === this.ref ? this.ref = 0 : this.ref = e3, this.ref.toString();
            } }, { key: "sendHeartbeat", value: function() {
              if (this.isConnected()) {
                if (this.pendingHeartbeatRef)
                  return this.pendingHeartbeatRef = null, this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), void this.abnormalClose("heartbeat timeout");
                this.pendingHeartbeatRef = this.makeRef(), this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef });
              }
            } }, { key: "abnormalClose", value: function(e3) {
              this.closeWasClean = false, this.conn.readyState === v && this.conn.close(1e3, e3);
            } }, { key: "flushSendBuffer", value: function() {
              this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(function(e3) {
                return e3();
              }), this.sendBuffer = []);
            } }, { key: "onConnMessage", value: function(e3) {
              var t2 = this;
              this.decode(e3.data, function(e4) {
                var n2 = e4.topic, i2 = e4.event, o2 = e4.payload, s2 = e4.ref, a2 = e4.join_ref;
                s2 && s2 === t2.pendingHeartbeatRef && (t2.pendingHeartbeatRef = null), t2.hasLogger() && t2.log("receive", "".concat(o2.status || "", " ").concat(n2, " ").concat(i2, " ").concat(s2 && "(" + s2 + ")" || ""), o2);
                for (var c2 = 0; c2 < t2.channels.length; c2++) {
                  var u2 = t2.channels[c2];
                  u2.isMember(n2, i2, o2, a2) && u2.trigger(i2, o2, s2, a2);
                }
                for (var h2 = 0; h2 < t2.stateChangeCallbacks.message.length; h2++) {
                  (0, r(t2.stateChangeCallbacks.message[h2], 2)[1])(e4);
                }
              });
            } }, { key: "leaveOpenTopic", value: function(e3) {
              var t2 = this.channels.find(function(t3) {
                return t3.topic === e3 && (t3.isJoined() || t3.isJoining());
              });
              t2 && (this.hasLogger() && this.log("transport", 'leaving duplicate topic "'.concat(e3, '"')), t2.leave());
            } }]), e2;
          }(), D = function() {
            function e2(t2) {
              c(this, e2), this.endPoint = null, this.token = null, this.skipHeartbeat = true, this.onopen = function() {
              }, this.onerror = function() {
              }, this.onmessage = function() {
              }, this.onclose = function() {
              }, this.pollEndpoint = this.normalizeEndpoint(t2), this.readyState = p, this.poll();
            }
            return h(e2, [{ key: "normalizeEndpoint", value: function(e3) {
              return e3.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + x), "$1/" + L);
            } }, { key: "endpointURL", value: function() {
              return M.appendParams(this.pollEndpoint, { token: this.token });
            } }, { key: "closeAndRetry", value: function() {
              this.close(), this.readyState = p;
            } }, { key: "ontimeout", value: function() {
              this.onerror("timeout"), this.closeAndRetry();
            } }, { key: "poll", value: function() {
              var e3 = this;
              this.readyState !== v && this.readyState !== p || M.request("GET", this.endpointURL(), "application/json", null, this.timeout, this.ontimeout.bind(this), function(t2) {
                if (t2) {
                  var n2 = t2.status, i2 = t2.token, o2 = t2.messages;
                  e3.token = i2;
                } else
                  n2 = 0;
                switch (n2) {
                  case 200:
                    o2.forEach(function(t3) {
                      return e3.onmessage({ data: t3 });
                    }), e3.poll();
                    break;
                  case 204:
                    e3.poll();
                    break;
                  case 410:
                    e3.readyState = v, e3.onopen(), e3.poll();
                    break;
                  case 403:
                    e3.onerror(), e3.close();
                    break;
                  case 0:
                  case 500:
                    e3.onerror(), e3.closeAndRetry();
                    break;
                  default:
                    throw new Error("unhandled poll status ".concat(n2));
                }
              });
            } }, { key: "send", value: function(e3) {
              var t2 = this;
              M.request("POST", this.endpointURL(), "application/json", e3, this.timeout, this.onerror.bind(this, "timeout"), function(e4) {
                e4 && e4.status === 200 || (t2.onerror(e4 && e4.status), t2.closeAndRetry());
              });
            } }, { key: "close", value: function(e3, t2) {
              this.readyState = m, this.onclose();
            } }]), e2;
          }(), M = function() {
            function e2() {
              c(this, e2);
            }
            return h(e2, null, [{ key: "request", value: function(e3, t2, n2, i2, o2, r2, s2) {
              if (d.XDomainRequest) {
                var a2 = new XDomainRequest();
                this.xdomainRequest(a2, e3, t2, i2, o2, r2, s2);
              } else {
                var c2 = new d.XMLHttpRequest();
                this.xhrRequest(c2, e3, t2, n2, i2, o2, r2, s2);
              }
            } }, { key: "xdomainRequest", value: function(e3, t2, n2, i2, o2, r2, s2) {
              var a2 = this;
              e3.timeout = o2, e3.open(t2, n2), e3.onload = function() {
                var t3 = a2.parseJSON(e3.responseText);
                s2 && s2(t3);
              }, r2 && (e3.ontimeout = r2), e3.onprogress = function() {
              }, e3.send(i2);
            } }, { key: "xhrRequest", value: function(e3, t2, n2, i2, o2, r2, s2, a2) {
              var c2 = this;
              e3.open(t2, n2, true), e3.timeout = r2, e3.setRequestHeader("Content-Type", i2), e3.onerror = function() {
                a2 && a2(null);
              }, e3.onreadystatechange = function() {
                if (e3.readyState === c2.states.complete && a2) {
                  var t3 = c2.parseJSON(e3.responseText);
                  a2(t3);
                }
              }, s2 && (e3.ontimeout = s2), e3.send(o2);
            } }, { key: "parseJSON", value: function(e3) {
              if (!e3 || e3 === "")
                return null;
              try {
                return JSON.parse(e3);
              } catch (t2) {
                return console && console.log("failed to parse JSON response", e3), null;
              }
            } }, { key: "serialize", value: function(e3, t2) {
              var n2 = [];
              for (var i2 in e3)
                if (e3.hasOwnProperty(i2)) {
                  var r2 = t2 ? "".concat(t2, "[").concat(i2, "]") : i2, s2 = e3[i2];
                  o(s2) === "object" ? n2.push(this.serialize(s2, r2)) : n2.push(encodeURIComponent(r2) + "=" + encodeURIComponent(s2));
                }
              return n2.join("&");
            } }, { key: "appendParams", value: function(e3, t2) {
              if (Object.keys(t2).length === 0)
                return e3;
              var n2 = e3.match(/\?/) ? "&" : "?";
              return "".concat(e3).concat(n2).concat(this.serialize(t2));
            } }]), e2;
          }();
          M.states = { complete: 4 };
          var N = function() {
            function e2(t2) {
              var n2 = this, i2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              c(this, e2);
              var o2 = i2.events || { state: "presence_state", diff: "presence_diff" };
              this.state = {}, this.pendingDiffs = [], this.channel = t2, this.joinRef = null, this.caller = { onJoin: function() {
              }, onLeave: function() {
              }, onSync: function() {
              } }, this.channel.on(o2.state, function(t3) {
                var i3 = n2.caller, o3 = i3.onJoin, r2 = i3.onLeave, s2 = i3.onSync;
                n2.joinRef = n2.channel.joinRef(), n2.state = e2.syncState(n2.state, t3, o3, r2), n2.pendingDiffs.forEach(function(t4) {
                  n2.state = e2.syncDiff(n2.state, t4, o3, r2);
                }), n2.pendingDiffs = [], s2();
              }), this.channel.on(o2.diff, function(t3) {
                var i3 = n2.caller, o3 = i3.onJoin, r2 = i3.onLeave, s2 = i3.onSync;
                n2.inPendingSyncState() ? n2.pendingDiffs.push(t3) : (n2.state = e2.syncDiff(n2.state, t3, o3, r2), s2());
              });
            }
            return h(e2, [{ key: "onJoin", value: function(e3) {
              this.caller.onJoin = e3;
            } }, { key: "onLeave", value: function(e3) {
              this.caller.onLeave = e3;
            } }, { key: "onSync", value: function(e3) {
              this.caller.onSync = e3;
            } }, { key: "list", value: function(t2) {
              return e2.list(this.state, t2);
            } }, { key: "inPendingSyncState", value: function() {
              return !this.joinRef || this.joinRef !== this.channel.joinRef();
            } }], [{ key: "syncState", value: function(e3, t2, n2, i2) {
              var o2 = this, r2 = this.clone(e3), s2 = {}, a2 = {};
              return this.map(r2, function(e4, n3) {
                t2[e4] || (a2[e4] = n3);
              }), this.map(t2, function(e4, t3) {
                var n3 = r2[e4];
                if (n3) {
                  var i3 = t3.metas.map(function(e5) {
                    return e5.phx_ref;
                  }), c2 = n3.metas.map(function(e5) {
                    return e5.phx_ref;
                  }), u2 = t3.metas.filter(function(e5) {
                    return c2.indexOf(e5.phx_ref) < 0;
                  }), h2 = n3.metas.filter(function(e5) {
                    return i3.indexOf(e5.phx_ref) < 0;
                  });
                  u2.length > 0 && (s2[e4] = t3, s2[e4].metas = u2), h2.length > 0 && (a2[e4] = o2.clone(n3), a2[e4].metas = h2);
                } else
                  s2[e4] = t3;
              }), this.syncDiff(r2, { joins: s2, leaves: a2 }, n2, i2);
            } }, { key: "syncDiff", value: function(e3, t2, n2, o2) {
              var r2 = t2.joins, s2 = t2.leaves, a2 = this.clone(e3);
              return n2 || (n2 = function() {
              }), o2 || (o2 = function() {
              }), this.map(r2, function(e4, t3) {
                var o3 = a2[e4];
                if (a2[e4] = t3, o3) {
                  var r3, s3 = a2[e4].metas.map(function(e5) {
                    return e5.phx_ref;
                  }), c2 = o3.metas.filter(function(e5) {
                    return s3.indexOf(e5.phx_ref) < 0;
                  });
                  (r3 = a2[e4].metas).unshift.apply(r3, i(c2));
                }
                n2(e4, o3, t3);
              }), this.map(s2, function(e4, t3) {
                var n3 = a2[e4];
                if (n3) {
                  var i2 = t3.metas.map(function(e5) {
                    return e5.phx_ref;
                  });
                  n3.metas = n3.metas.filter(function(e5) {
                    return i2.indexOf(e5.phx_ref) < 0;
                  }), o2(e4, n3, t3), n3.metas.length === 0 && delete a2[e4];
                }
              }), a2;
            } }, { key: "list", value: function(e3, t2) {
              return t2 || (t2 = function(e4, t3) {
                return t3;
              }), this.map(e3, function(e4, n2) {
                return t2(e4, n2);
              });
            } }, { key: "map", value: function(e3, t2) {
              return Object.getOwnPropertyNames(e3).map(function(n2) {
                return t2(n2, e3[n2]);
              });
            } }, { key: "clone", value: function(e3) {
              return JSON.parse(JSON.stringify(e3));
            } }]), e2;
          }(), J = function() {
            function e2(t2, n2) {
              c(this, e2), this.callback = t2, this.timerCalc = n2, this.timer = null, this.tries = 0;
            }
            return h(e2, [{ key: "reset", value: function() {
              this.tries = 0, clearTimeout(this.timer);
            } }, { key: "scheduleTimeout", value: function() {
              var e3 = this;
              clearTimeout(this.timer), this.timer = setTimeout(function() {
                e3.tries = e3.tries + 1, e3.callback();
              }, this.timerCalc(this.tries + 1));
            } }]), e2;
          }();
        }]);
      });
    }
  });

  // ../deps/phoenix_live_view/priv/static/phoenix_live_view.js
  var require_phoenix_live_view = __commonJS({
    "../deps/phoenix_live_view/priv/static/phoenix_live_view.js"(exports, module) {
      !function(e, t) {
        typeof exports == "object" && typeof module == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? exports.phoenix_live_view = t() : e.phoenix_live_view = t();
      }(exports, function() {
        return function(e) {
          var t = {};
          function n(i) {
            if (t[i])
              return t[i].exports;
            var r = t[i] = { i, l: false, exports: {} };
            return e[i].call(r.exports, r, r.exports, n), r.l = true, r.exports;
          }
          return n.m = e, n.c = t, n.d = function(e2, t2, i) {
            n.o(e2, t2) || Object.defineProperty(e2, t2, { configurable: false, enumerable: true, get: i });
          }, n.r = function(e2) {
            Object.defineProperty(e2, "__esModule", { value: true });
          }, n.n = function(e2) {
            var t2 = e2 && e2.__esModule ? function() {
              return e2.default;
            } : function() {
              return e2;
            };
            return n.d(t2, "a", t2), t2;
          }, n.o = function(e2, t2) {
            return Object.prototype.hasOwnProperty.call(e2, t2);
          }, n.p = "", n(n.s = 2);
        }([function(e, t, n) {
          "use strict";
          n.r(t);
          var i, r = 11;
          var o = "http://www.w3.org/1999/xhtml", a = typeof document == "undefined" ? void 0 : document, u = !!a && "content" in a.createElement("template"), s = !!a && a.createRange && "createContextualFragment" in a.createRange();
          function c(e2) {
            return e2 = e2.trim(), u ? function(e3) {
              var t2 = a.createElement("template");
              return t2.innerHTML = e3, t2.content.childNodes[0];
            }(e2) : s ? function(e3) {
              return i || (i = a.createRange()).selectNode(a.body), i.createContextualFragment(e3).childNodes[0];
            }(e2) : function(e3) {
              var t2 = a.createElement("body");
              return t2.innerHTML = e3, t2.childNodes[0];
            }(e2);
          }
          function l(e2, t2) {
            var n2, i2, r2 = e2.nodeName, o2 = t2.nodeName;
            return r2 === o2 || (n2 = r2.charCodeAt(0), i2 = o2.charCodeAt(0), n2 <= 90 && i2 >= 97 ? r2 === o2.toUpperCase() : i2 <= 90 && n2 >= 97 && o2 === r2.toUpperCase());
          }
          function d(e2, t2, n2) {
            e2[n2] !== t2[n2] && (e2[n2] = t2[n2], e2[n2] ? e2.setAttribute(n2, "") : e2.removeAttribute(n2));
          }
          var h = { OPTION: function(e2, t2) {
            var n2 = e2.parentNode;
            if (n2) {
              var i2 = n2.nodeName.toUpperCase();
              i2 === "OPTGROUP" && (i2 = (n2 = n2.parentNode) && n2.nodeName.toUpperCase()), i2 !== "SELECT" || n2.hasAttribute("multiple") || (e2.hasAttribute("selected") && !t2.selected && (e2.setAttribute("selected", "selected"), e2.removeAttribute("selected")), n2.selectedIndex = -1);
            }
            d(e2, t2, "selected");
          }, INPUT: function(e2, t2) {
            d(e2, t2, "checked"), d(e2, t2, "disabled"), e2.value !== t2.value && (e2.value = t2.value), t2.hasAttribute("value") || e2.removeAttribute("value");
          }, TEXTAREA: function(e2, t2) {
            var n2 = t2.value;
            e2.value !== n2 && (e2.value = n2);
            var i2 = e2.firstChild;
            if (i2) {
              var r2 = i2.nodeValue;
              if (r2 == n2 || !n2 && r2 == e2.placeholder)
                return;
              i2.nodeValue = n2;
            }
          }, SELECT: function(e2, t2) {
            if (!t2.hasAttribute("multiple")) {
              for (var n2, i2, r2 = -1, o2 = 0, a2 = e2.firstChild; a2; )
                if ((i2 = a2.nodeName && a2.nodeName.toUpperCase()) === "OPTGROUP")
                  a2 = (n2 = a2).firstChild;
                else {
                  if (i2 === "OPTION") {
                    if (a2.hasAttribute("selected")) {
                      r2 = o2;
                      break;
                    }
                    o2++;
                  }
                  !(a2 = a2.nextSibling) && n2 && (a2 = n2.nextSibling, n2 = null);
                }
              e2.selectedIndex = r2;
            }
          } }, f = 1, v = 11, p = 3, g = 8;
          function m() {
          }
          function y(e2) {
            if (e2)
              return e2.getAttribute && e2.getAttribute("id") || e2.id;
          }
          var b = function(e2) {
            return function(t2, n2, i2) {
              if (i2 || (i2 = {}), typeof n2 == "string")
                if (t2.nodeName === "#document" || t2.nodeName === "HTML" || t2.nodeName === "BODY") {
                  var r2 = n2;
                  (n2 = a.createElement("html")).innerHTML = r2;
                } else
                  n2 = c(n2);
              var u2 = i2.getNodeKey || y, s2 = i2.onBeforeNodeAdded || m, d2 = i2.onNodeAdded || m, b2 = i2.onBeforeElUpdated || m, k2 = i2.onElUpdated || m, w2 = i2.onBeforeNodeDiscarded || m, A2 = i2.onNodeDiscarded || m, E2 = i2.onBeforeElChildrenUpdated || m, S2 = i2.childrenOnly === true, x2 = Object.create(null), C2 = [];
              function P2(e3) {
                C2.push(e3);
              }
              function L2(e3, t3, n3) {
                w2(e3) !== false && (t3 && t3.removeChild(e3), A2(e3), function e4(t4, n4) {
                  if (t4.nodeType === f)
                    for (var i3 = t4.firstChild; i3; ) {
                      var r3 = void 0;
                      n4 && (r3 = u2(i3)) ? P2(r3) : (A2(i3), i3.firstChild && e4(i3, n4)), i3 = i3.nextSibling;
                    }
                }(e3, n3));
              }
              function I2(e3) {
                d2(e3);
                for (var t3 = e3.firstChild; t3; ) {
                  var n3 = t3.nextSibling, i3 = u2(t3);
                  if (i3) {
                    var r3 = x2[i3];
                    r3 && l(t3, r3) ? (t3.parentNode.replaceChild(r3, t3), T2(r3, t3)) : I2(t3);
                  } else
                    I2(t3);
                  t3 = n3;
                }
              }
              function T2(t3, n3, i3) {
                var r3 = u2(n3);
                if (r3 && delete x2[r3], !i3) {
                  if (b2(t3, n3) === false)
                    return;
                  if (e2(t3, n3), k2(t3), E2(t3, n3) === false)
                    return;
                }
                t3.nodeName !== "TEXTAREA" ? function(e3, t4) {
                  var n4, i4, r4, o2, c2, d3 = t4.firstChild, v2 = e3.firstChild;
                  e:
                    for (; d3; ) {
                      for (o2 = d3.nextSibling, n4 = u2(d3); v2; ) {
                        if (r4 = v2.nextSibling, d3.isSameNode && d3.isSameNode(v2)) {
                          d3 = o2, v2 = r4;
                          continue e;
                        }
                        i4 = u2(v2);
                        var m2 = v2.nodeType, y2 = void 0;
                        if (m2 === d3.nodeType && (m2 === f ? (n4 ? n4 !== i4 && ((c2 = x2[n4]) ? r4 === c2 ? y2 = false : (e3.insertBefore(c2, v2), i4 ? P2(i4) : L2(v2, e3, true), v2 = c2) : y2 = false) : i4 && (y2 = false), (y2 = y2 !== false && l(v2, d3)) && T2(v2, d3)) : m2 !== p && m2 != g || (y2 = true, v2.nodeValue !== d3.nodeValue && (v2.nodeValue = d3.nodeValue))), y2) {
                          d3 = o2, v2 = r4;
                          continue e;
                        }
                        i4 ? P2(i4) : L2(v2, e3, true), v2 = r4;
                      }
                      if (n4 && (c2 = x2[n4]) && l(c2, d3))
                        e3.appendChild(c2), T2(c2, d3);
                      else {
                        var b3 = s2(d3);
                        b3 !== false && (b3 && (d3 = b3), d3.actualize && (d3 = d3.actualize(e3.ownerDocument || a)), e3.appendChild(d3), I2(d3));
                      }
                      d3 = o2, v2 = r4;
                    }
                  !function(e4, t5, n5) {
                    for (; t5; ) {
                      var i5 = t5.nextSibling;
                      (n5 = u2(t5)) ? P2(n5) : L2(t5, e4, true), t5 = i5;
                    }
                  }(e3, v2, i4);
                  var k3 = h[e3.nodeName];
                  k3 && k3(e3, t4);
                }(t3, n3) : h.TEXTAREA(t3, n3);
              }
              !function e3(t3) {
                if (t3.nodeType === f || t3.nodeType === v)
                  for (var n3 = t3.firstChild; n3; ) {
                    var i3 = u2(n3);
                    i3 && (x2[i3] = n3), e3(n3), n3 = n3.nextSibling;
                  }
              }(t2);
              var _2 = t2, D2 = _2.nodeType, R2 = n2.nodeType;
              if (!S2) {
                if (D2 === f)
                  R2 === f ? l(t2, n2) || (A2(t2), _2 = function(e3, t3) {
                    for (var n3 = e3.firstChild; n3; ) {
                      var i3 = n3.nextSibling;
                      t3.appendChild(n3), n3 = i3;
                    }
                    return t3;
                  }(t2, function(e3, t3) {
                    return t3 && t3 !== o ? a.createElementNS(t3, e3) : a.createElement(e3);
                  }(n2.nodeName, n2.namespaceURI))) : _2 = n2;
                else if (D2 === p || D2 === g) {
                  if (R2 === D2)
                    return _2.nodeValue !== n2.nodeValue && (_2.nodeValue = n2.nodeValue), _2;
                  _2 = n2;
                }
              }
              if (_2 === n2)
                A2(t2);
              else {
                if (n2.isSameNode && n2.isSameNode(_2))
                  return;
                if (T2(_2, n2, S2), C2)
                  for (var N2 = 0, O2 = C2.length; N2 < O2; N2++) {
                    var H2 = x2[C2[N2]];
                    H2 && L2(H2, H2.parentNode, false);
                  }
              }
              return !S2 && _2 !== t2 && t2.parentNode && (_2.actualize && (_2 = _2.actualize(t2.ownerDocument || a)), t2.parentNode.replaceChild(_2, t2)), _2;
            };
          }(function(e2, t2) {
            var n2, i2, o2, a2, u2 = t2.attributes;
            if (t2.nodeType !== r && e2.nodeType !== r) {
              for (var s2 = u2.length - 1; s2 >= 0; s2--)
                i2 = (n2 = u2[s2]).name, o2 = n2.namespaceURI, a2 = n2.value, o2 ? (i2 = n2.localName || i2, e2.getAttributeNS(o2, i2) !== a2 && (n2.prefix === "xmlns" && (i2 = n2.name), e2.setAttributeNS(o2, i2, a2))) : e2.getAttribute(i2) !== a2 && e2.setAttribute(i2, a2);
              for (var c2 = e2.attributes, l2 = c2.length - 1; l2 >= 0; l2--)
                i2 = (n2 = c2[l2]).name, (o2 = n2.namespaceURI) ? (i2 = n2.localName || i2, t2.hasAttributeNS(o2, i2) || e2.removeAttributeNS(o2, i2)) : t2.hasAttribute(i2) || e2.removeAttribute(i2);
            }
          });
          function k(e2) {
            return P(e2) || S(e2) || L(e2) || C();
          }
          function w(e2, t2) {
            var n2 = Object.keys(e2);
            if (Object.getOwnPropertySymbols) {
              var i2 = Object.getOwnPropertySymbols(e2);
              t2 && (i2 = i2.filter(function(t3) {
                return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
              })), n2.push.apply(n2, i2);
            }
            return n2;
          }
          function A(e2, t2, n2) {
            return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
          }
          function E(e2) {
            return function(e3) {
              if (Array.isArray(e3))
                return I(e3);
            }(e2) || S(e2) || L(e2) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function S(e2) {
            if (typeof Symbol != "undefined" && Symbol.iterator in Object(e2))
              return Array.from(e2);
          }
          function x(e2, t2) {
            return P(e2) || function(e3, t3) {
              if (typeof Symbol == "undefined" || !(Symbol.iterator in Object(e3)))
                return;
              var n2 = [], i2 = true, r2 = false, o2 = void 0;
              try {
                for (var a2, u2 = e3[Symbol.iterator](); !(i2 = (a2 = u2.next()).done) && (n2.push(a2.value), !t3 || n2.length !== t3); i2 = true)
                  ;
              } catch (e4) {
                r2 = true, o2 = e4;
              } finally {
                try {
                  i2 || u2.return == null || u2.return();
                } finally {
                  if (r2)
                    throw o2;
                }
              }
              return n2;
            }(e2, t2) || L(e2, t2) || C();
          }
          function C() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          function P(e2) {
            if (Array.isArray(e2))
              return e2;
          }
          function L(e2, t2) {
            if (e2) {
              if (typeof e2 == "string")
                return I(e2, t2);
              var n2 = Object.prototype.toString.call(e2).slice(8, -1);
              return n2 === "Object" && e2.constructor && (n2 = e2.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(e2) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? I(e2, t2) : void 0;
            }
          }
          function I(e2, t2) {
            (t2 == null || t2 > e2.length) && (t2 = e2.length);
            for (var n2 = 0, i2 = new Array(t2); n2 < t2; n2++)
              i2[n2] = e2[n2];
            return i2;
          }
          function T(e2, t2) {
            if (!(e2 instanceof t2))
              throw new TypeError("Cannot call a class as a function");
          }
          function _(e2, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var i2 = t2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e2, i2.key, i2);
            }
          }
          function D(e2, t2, n2) {
            return t2 && _(e2.prototype, t2), n2 && _(e2, n2), e2;
          }
          function R(e2) {
            "@babel/helpers - typeof";
            return (R = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
              return typeof e3;
            } : function(e3) {
              return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
            })(e2);
          }
          n.d(t, "debug", function() {
            return K;
          }), n.d(t, "Rendered", function() {
            return ue;
          }), n.d(t, "LiveSocket", function() {
            return se;
          }), n.d(t, "Browser", function() {
            return ce;
          }), n.d(t, "DOM", function() {
            return le;
          }), n.d(t, "View", function() {
            return fe;
          });
          var N = [1e3, 3e3], O = "data-phx-view", H = ["phx-click-loading", "phx-change-loading", "phx-submit-loading", "phx-keydown-loading", "phx-keyup-loading", "phx-blur-loading", "phx-focus-loading"], j = "data-phx-component", F = "data-phx-ref", M = "[".concat(O, "]"), B = ["text", "textarea", "number", "email", "password", "search", "tel", "url", "date", "time"], U = ["checkbox", "radio"], J = "data-phx-static", V = 1, W = "phx-", q = { debounce: 300, throttle: 300 }, z = function(e2, t2) {
            return console.error && console.error(e2, t2);
          };
          var K = function(e2, t2, n2, i2) {
            e2.liveSocket.isDebugEnabled() && console.log("".concat(e2.id, " ").concat(t2, ": ").concat(n2, " - "), i2);
          }, $ = function(e2) {
            return typeof e2 == "function" ? e2 : function() {
              return e2;
            };
          }, X = function(e2) {
            return JSON.parse(JSON.stringify(e2));
          }, G = function(e2, t2, n2) {
            do {
              if (e2.matches("[".concat(t2, "]")))
                return e2;
              e2 = e2.parentElement || e2.parentNode;
            } while (e2 !== null && e2.nodeType === 1 && !(n2 && n2.isSameNode(e2) || e2.matches(M)));
            return null;
          }, Y = function(e2) {
            return e2 !== null && R(e2) === "object" && !(e2 instanceof Array);
          }, Q = function(e2) {
            for (var t2 in e2)
              return false;
            return true;
          }, Z = function(e2, t2) {
            return e2 && t2(e2);
          }, ee = function() {
            function e2(t2, n2, i2) {
              T(this, e2), this.ref = ie.genFileRef(n2), this.fileEl = t2, this.file = n2, this.view = i2, this.meta = null, this._isCancelled = false, this._isDone = false, this._progress = 0, this._onDone = function() {
              };
            }
            return D(e2, null, [{ key: "isActive", value: function(e3, t2) {
              var n2 = t2._phxRef === void 0, i2 = e3.getAttribute("data-phx-active-refs").split(",").indexOf(ie.genFileRef(t2)) >= 0;
              return t2.size > 0 && (n2 || i2);
            } }, { key: "isPreflighted", value: function(e3, t2) {
              var n2 = e3.getAttribute("data-phx-preflighted-refs").split(",").indexOf(ie.genFileRef(t2)) >= 0;
              return n2 && this.isActive(e3, t2);
            } }]), D(e2, [{ key: "metadata", value: function() {
              return this.meta;
            } }, { key: "progress", value: function(e3) {
              var t2 = this;
              this._progress = Math.floor(e3), this._progress >= 100 ? (this._progress = 100, this._isDone = true, this.view.pushFileProgress(this.fileEl, this.ref, 100, function() {
                ie.untrackFile(t2.fileEl, t2.file), t2._onDone();
              })) : this.view.pushFileProgress(this.fileEl, this.ref, this._progress);
            } }, { key: "cancel", value: function() {
              this._isCancelled = true, this._isDone = true, this._onDone();
            } }, { key: "isDone", value: function() {
              return this._isDone;
            } }, { key: "error", value: function() {
              var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "failed";
              this.view.pushFileProgress(this.fileEl, this.ref, { error: e3 });
            } }, { key: "onDone", value: function(e3) {
              this._onDone = e3;
            } }, { key: "toPreflightPayload", value: function() {
              return { last_modified: this.file.lastModified, name: this.file.name, size: this.file.size, type: this.file.type, ref: this.ref };
            } }, { key: "uploader", value: function(e3) {
              if (this.meta.uploader) {
                var t2 = e3[this.meta.uploader] || z("no uploader configured for ".concat(this.meta.uploader));
                return { name: this.meta.uploader, callback: t2 };
              }
              return { name: "channel", callback: re };
            } }, { key: "zipPostFlight", value: function(e3) {
              this.meta = e3.entries[this.ref], this.meta || z("no preflight upload response returned with ref ".concat(this.ref), { input: this.fileEl, response: e3 });
            } }]), e2;
          }(), te = { LiveFileUpload: { preflightedRefs: function() {
            return this.el.getAttribute("data-phx-preflighted-refs");
          }, mounted: function() {
            this.preflightedWas = this.preflightedRefs();
          }, updated: function() {
            var e2 = this.preflightedRefs();
            this.preflightedWas !== e2 && (this.preflightedWas = e2, e2 === "" && this.__view.cancelSubmit(this.el.form));
          } } };
          te.LiveImgPreview = { mounted: function() {
            var e2 = this;
            this.ref = this.el.getAttribute("data-phx-entry-ref"), this.inputEl = document.getElementById(this.el.getAttribute("data-phx-upload-ref")), ie.getEntryDataURL(this.inputEl, this.ref, function(t2) {
              return e2.el.src = t2;
            });
          } };
          var ne = 0, ie = function() {
            function e2(t2, n2, i2) {
              T(this, e2), this.view = n2, this.onComplete = i2, this._entries = Array.from(e2.filesAwaitingPreflight(t2) || []).map(function(e3) {
                return new ee(t2, e3, n2);
              }), this.numEntriesInProgress = this._entries.length;
            }
            return D(e2, null, [{ key: "genFileRef", value: function(e3) {
              var t2 = e3._phxRef;
              return t2 !== void 0 ? t2 : (e3._phxRef = (ne++).toString(), e3._phxRef);
            } }, { key: "getEntryDataURL", value: function(e3, t2, n2) {
              var i2 = this, r2 = this.activeFiles(e3).find(function(e4) {
                return i2.genFileRef(e4) === t2;
              }), o2 = new FileReader();
              o2.onload = function(e4) {
                return n2(e4.target.result);
              }, o2.readAsDataURL(r2);
            } }, { key: "hasUploadsInProgress", value: function(e3) {
              var t2 = 0;
              return le.all(e3, 'input[type="file"]', function(e4) {
                e4.getAttribute("data-phx-preflighted-refs") !== e4.getAttribute("data-phx-done-refs") && t2++;
              }), t2 > 0;
            } }, { key: "serializeUploads", value: function(e3) {
              var t2 = this, n2 = {};
              return this.activeFiles(e3, "serialize").forEach(function(i2) {
                var r2 = { path: e3.name }, o2 = e3.getAttribute("data-phx-upload-ref");
                n2[o2] = n2[o2] || [], r2.ref = t2.genFileRef(i2), r2.name = i2.name, r2.type = i2.type, r2.size = i2.size, n2[o2].push(r2);
              }), n2;
            } }, { key: "clearFiles", value: function(e3) {
              e3.value = null, le.putPrivate(e3, "files", []);
            } }, { key: "untrackFile", value: function(e3, t2) {
              le.putPrivate(e3, "files", le.private(e3, "files").filter(function(e4) {
                return !Object.is(e4, t2);
              }));
            } }, { key: "trackFiles", value: function(e3, t2) {
              var n2 = this;
              if (e3.getAttribute("multiple") !== null) {
                var i2 = t2.filter(function(t3) {
                  return !n2.activeFiles(e3).find(function(e4) {
                    return Object.is(e4, t3);
                  });
                });
                le.putPrivate(e3, "files", this.activeFiles(e3).concat(i2)), e3.value = null;
              } else
                le.putPrivate(e3, "files", t2);
            } }, { key: "activeFileInputs", value: function(e3) {
              var t2 = this, n2 = e3.querySelectorAll('input[type="file"]');
              return Array.from(n2).filter(function(e4) {
                return e4.files && t2.activeFiles(e4).length > 0;
              });
            } }, { key: "activeFiles", value: function(e3) {
              return (le.private(e3, "files") || []).filter(function(t2) {
                return ee.isActive(e3, t2);
              });
            } }, { key: "inputsAwaitingPreflight", value: function(e3) {
              var t2 = this, n2 = e3.querySelectorAll('input[type="file"]');
              return Array.from(n2).filter(function(e4) {
                return t2.filesAwaitingPreflight(e4).length > 0;
              });
            } }, { key: "filesAwaitingPreflight", value: function(e3) {
              return this.activeFiles(e3).filter(function(t2) {
                return !ee.isPreflighted(e3, t2);
              });
            } }]), D(e2, [{ key: "entries", value: function() {
              return this._entries;
            } }, { key: "initAdapterUpload", value: function(e3, t2, n2) {
              var i2 = this;
              this._entries = this._entries.map(function(t3) {
                return t3.zipPostFlight(e3), t3.onDone(function() {
                  i2.numEntriesInProgress--, i2.numEntriesInProgress === 0 && i2.onComplete();
                }), t3;
              });
              var r2 = this._entries.reduce(function(e4, t3) {
                var i3 = t3.uploader(n2.uploaders), r3 = i3.name, o3 = i3.callback;
                return e4[r3] = e4[r3] || { callback: o3, entries: [] }, e4[r3].entries.push(t3), e4;
              }, {});
              for (var o2 in r2) {
                var a2 = r2[o2];
                (0, a2.callback)(a2.entries, t2, e3, n2);
              }
            } }]), e2;
          }(), re = function(e2, t2, n2, i2) {
            e2.forEach(function(e3) {
              new oe(e3, n2.config.chunk_size, i2).upload();
            });
          }, oe = function() {
            function e2(t2, n2, i2) {
              T(this, e2), this.liveSocket = i2, this.entry = t2, this.offset = 0, this.chunkSize = n2, this.uploadChannel = i2.channel("lvu:".concat(t2.ref), { token: t2.metadata() });
            }
            return D(e2, [{ key: "upload", value: function() {
              var e3 = this;
              this.uploadChannel.join().receive("ok", function(t2) {
                return e3.readNextChunk();
              }).receive("error", function(t2) {
                e3.uploadChannel.leave(), e3.entry.error();
              });
            } }, { key: "isDone", value: function() {
              return this.offset >= this.entry.file.size;
            } }, { key: "readNextChunk", value: function() {
              var e3 = this, t2 = new window.FileReader(), n2 = this.entry.file.slice(this.offset, this.chunkSize + this.offset);
              t2.onload = function(t3) {
                if (t3.target.error !== null)
                  return z("Read error: " + t3.target.error);
                e3.offset += t3.target.result.byteLength, e3.pushChunk(t3.target.result);
              }, t2.readAsArrayBuffer(n2);
            } }, { key: "pushChunk", value: function(e3) {
              var t2 = this;
              this.uploadChannel.isJoined() && this.uploadChannel.push("chunk", e3).receive("ok", function() {
                t2.entry.progress(t2.offset / t2.entry.file.size * 100), t2.isDone() || setTimeout(function() {
                  return t2.readNextChunk();
                }, t2.liveSocket.getLatencySim() || 0);
              });
            } }]), e2;
          }(), ae = function(e2) {
            var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = new FormData(e2), i2 = [];
            n2.forEach(function(e3, t3, n3) {
              e3 instanceof File && i2.push(t3);
            }), i2.forEach(function(e3) {
              return n2.delete(e3);
            });
            var r2, o2 = new URLSearchParams(), a2 = function(e3) {
              if (typeof Symbol == "undefined" || e3[Symbol.iterator] == null) {
                if (Array.isArray(e3) || (e3 = L(e3))) {
                  var t3 = 0, n3 = function() {
                  };
                  return { s: n3, n: function() {
                    return t3 >= e3.length ? { done: true } : { done: false, value: e3[t3++] };
                  }, e: function(e4) {
                    throw e4;
                  }, f: n3 };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var i3, r3, o3 = true, a3 = false;
              return { s: function() {
                i3 = e3[Symbol.iterator]();
              }, n: function() {
                var e4 = i3.next();
                return o3 = e4.done, e4;
              }, e: function(e4) {
                a3 = true, r3 = e4;
              }, f: function() {
                try {
                  o3 || i3.return == null || i3.return();
                } finally {
                  if (a3)
                    throw r3;
                }
              } };
            }(n2.entries());
            try {
              for (a2.s(); !(r2 = a2.n()).done; ) {
                var u2 = x(r2.value, 2), s2 = u2[0], c2 = u2[1];
                o2.append(s2, c2);
              }
            } catch (e3) {
              a2.e(e3);
            } finally {
              a2.f();
            }
            for (var l2 in t2)
              o2.append(l2, t2[l2]);
            return o2.toString();
          }, ue = function() {
            function e2(t2, n2) {
              T(this, e2), this.viewId = t2, this.rendered = {}, this.mergeDiff(n2);
            }
            return D(e2, null, [{ key: "extract", value: function(e3) {
              var t2 = e3.r, n2 = e3.e, i2 = e3.t;
              return delete e3.r, delete e3.e, delete e3.t, { diff: e3, title: i2, reply: t2 || null, events: n2 || [] };
            } }]), D(e2, [{ key: "parentViewId", value: function() {
              return this.viewId;
            } }, { key: "toString", value: function(e3) {
              return this.recursiveToString(this.rendered, this.rendered.c, e3);
            } }, { key: "recursiveToString", value: function(e3) {
              var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e3.c, n2 = arguments.length > 2 ? arguments[2] : void 0, i2 = { buffer: "", components: t2, onlyCids: n2 = n2 ? new Set(n2) : null };
              return this.toOutputBuffer(e3, i2), i2.buffer;
            } }, { key: "componentCIDs", value: function(e3) {
              return Object.keys(e3.c || {}).map(function(e4) {
                return parseInt(e4);
              });
            } }, { key: "isComponentOnlyDiff", value: function(e3) {
              return !!e3.c && Object.keys(e3).length === 1;
            } }, { key: "getComponent", value: function(e3, t2) {
              return e3.c[t2];
            } }, { key: "mergeDiff", value: function(e3) {
              var t2 = e3.c;
              if (delete e3.c, this.rendered = this.recursiveMerge(this.rendered, e3), this.rendered.c = this.rendered.c || {}, t2) {
                var n2 = this.rendered.c;
                for (var i2 in t2) {
                  var r2 = t2[i2], o2 = r2, a2 = o2.s;
                  if (typeof a2 == "number") {
                    for (; typeof a2 == "number"; )
                      a2 = (o2 = a2 > 0 ? t2[a2] : n2[-a2]).s;
                    o2 = X(o2), this.doRecursiveMerge(o2, r2), o2.s = a2;
                  } else
                    o2 = n2[i2] || {}, o2 = this.recursiveMerge(o2, r2);
                  t2[i2] = o2;
                }
                for (var u2 in t2)
                  n2[u2] = t2[u2];
                e3.c = t2;
              }
            } }, { key: "recursiveMerge", value: function(e3, t2) {
              return t2.s !== void 0 ? t2 : (this.doRecursiveMerge(e3, t2), e3);
            } }, { key: "doRecursiveMerge", value: function(e3, t2) {
              for (var n2 in t2) {
                var i2 = t2[n2], r2 = e3[n2];
                Y(i2) && i2.s === void 0 && Y(r2) ? this.doRecursiveMerge(r2, i2) : e3[n2] = i2;
              }
            } }, { key: "componentToString", value: function(e3) {
              return this.recursiveCIDToString(this.rendered.c, e3);
            } }, { key: "pruneCIDs", value: function(e3) {
              var t2 = this;
              e3.forEach(function(e4) {
                return delete t2.rendered.c[e4];
              });
            } }, { key: "get", value: function() {
              return this.rendered;
            } }, { key: "isNewFingerprint", value: function() {
              return !!(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).s;
            } }, { key: "toOutputBuffer", value: function(e3, t2) {
              if (e3.d)
                return this.comprehensionToBuffer(e3, t2);
              var n2 = e3.s;
              t2.buffer += n2[0];
              for (var i2 = 1; i2 < n2.length; i2++)
                this.dynamicToBuffer(e3[i2 - 1], t2), t2.buffer += n2[i2];
            } }, { key: "comprehensionToBuffer", value: function(e3, t2) {
              for (var n2 = e3.d, i2 = e3.s, r2 = 0; r2 < n2.length; r2++) {
                var o2 = n2[r2];
                t2.buffer += i2[0];
                for (var a2 = 1; a2 < i2.length; a2++)
                  this.dynamicToBuffer(o2[a2 - 1], t2), t2.buffer += i2[a2];
              }
            } }, { key: "dynamicToBuffer", value: function(e3, t2) {
              typeof e3 == "number" ? t2.buffer += this.recursiveCIDToString(t2.components, e3, t2.onlyCids) : Y(e3) ? this.toOutputBuffer(e3, t2) : t2.buffer += e3;
            } }, { key: "recursiveCIDToString", value: function(e3, t2, n2) {
              var i2 = this, r2 = e3[t2] || z("no component for CID ".concat(t2), e3), o2 = document.createElement("template");
              o2.innerHTML = this.recursiveToString(r2, e3, n2);
              var a2 = o2.content, u2 = n2 && !n2.has(t2), s2 = x(Array.from(a2.childNodes).reduce(function(e4, n3, r3) {
                var a3 = x(e4, 2), s3 = a3[0], c3 = a3[1];
                return n3.nodeType === Node.ELEMENT_NODE ? n3.getAttribute(j) ? [s3, true] : (n3.setAttribute(j, t2), n3.id || (n3.id = "".concat(i2.parentViewId(), "-").concat(t2, "-").concat(r3)), u2 && (n3.setAttribute("data-phx-skip", ""), n3.innerHTML = ""), [true, c3]) : n3.nodeValue.trim() !== "" ? (z("only HTML element tags are allowed at the root of components.\n\n" + 'got: "'.concat(n3.nodeValue.trim(), '"\n\n') + "within:\n", o2.innerHTML.trim()), n3.replaceWith(i2.createSpan(n3.nodeValue, t2)), [true, c3]) : (n3.remove(), [s3, c3]);
              }, [false, false]), 2), c2 = s2[0], l2 = s2[1];
              return c2 || l2 ? !c2 && l2 ? (z("expected at least one HTML element tag directly inside a component, but only subcomponents were found. A component must render at least one HTML tag directly inside itself.", o2.innerHTML.trim()), o2.innerHTML) : o2.innerHTML : (z("expected at least one HTML element tag inside a component, but the component is empty:\n", o2.innerHTML.trim()), this.createSpan("", t2).outerHTML);
            } }, { key: "createSpan", value: function(e3, t2) {
              var n2 = document.createElement("span");
              return n2.innerText = e3, n2.setAttribute(j, t2), n2;
            } }]), e2;
          }(), se = function() {
            function e2(t2, n2) {
              var i2 = this, r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              if (T(this, e2), this.unloaded = false, !n2 || n2.constructor.name === "Object")
                throw new Error('\n      a phoenix Socket must be provided as the second argument to the LiveSocket constructor. For example:\n\n          import {Socket} from "phoenix"\n          import {LiveSocket} from "phoenix_live_view"\n          let liveSocket = new LiveSocket("/live", Socket, {...})\n      ');
              this.socket = new n2(t2, r2), this.bindingPrefix = r2.bindingPrefix || W, this.opts = r2, this.params = $(r2.params || {}), this.viewLogger = r2.viewLogger, this.metadataCallbacks = r2.metadata || {}, this.defaults = Object.assign(X(q), r2.defaults || {}), this.activeElement = null, this.prevActive = null, this.silenced = false, this.main = null, this.linkRef = 0, this.roots = {}, this.href = window.location.href, this.pendingLink = null, this.currentLocation = X(window.location), this.hooks = r2.hooks || {}, this.uploaders = r2.uploaders || {}, this.loaderTimeout = r2.loaderTimeout || V, this.boundTopLevelEvents = false, this.domCallbacks = Object.assign({ onNodeAdded: $(), onBeforeElUpdated: $() }, r2.dom || {}), window.addEventListener("unload", function(e3) {
                i2.unloaded = true;
              }), this.socket.onOpen(function() {
                i2.isUnloaded() && window.location.reload();
              });
            }
            return D(e2, [{ key: "isProfileEnabled", value: function() {
              return sessionStorage.getItem("phx:live-socket:profiling") === "true";
            } }, { key: "isDebugEnabled", value: function() {
              return sessionStorage.getItem("phx:live-socket:debug") === "true";
            } }, { key: "enableDebug", value: function() {
              sessionStorage.setItem("phx:live-socket:debug", "true");
            } }, { key: "enableProfiling", value: function() {
              sessionStorage.setItem("phx:live-socket:profiling", "true");
            } }, { key: "disableDebug", value: function() {
              sessionStorage.removeItem("phx:live-socket:debug");
            } }, { key: "disableProfiling", value: function() {
              sessionStorage.removeItem("phx:live-socket:profiling");
            } }, { key: "enableLatencySim", value: function(e3) {
              this.enableDebug(), console.log("latency simulator enabled for the duration of this browser session. Call disableLatencySim() to disable"), sessionStorage.setItem("phx:live-socket:latency-sim", e3);
            } }, { key: "disableLatencySim", value: function() {
              sessionStorage.removeItem("phx:live-socket:latency-sim");
            } }, { key: "getLatencySim", value: function() {
              var e3 = sessionStorage.getItem("phx:live-socket:latency-sim");
              return e3 ? parseInt(e3) : null;
            } }, { key: "getSocket", value: function() {
              return this.socket;
            } }, { key: "connect", value: function() {
              var e3 = this, t2 = function() {
                e3.joinRootViews() && (e3.bindTopLevelEvents(), e3.socket.connect());
              };
              ["complete", "loaded", "interactive"].indexOf(document.readyState) >= 0 ? t2() : document.addEventListener("DOMContentLoaded", function() {
                return t2();
              });
            } }, { key: "disconnect", value: function(e3) {
              this.socket.disconnect(e3);
            } }, { key: "triggerDOM", value: function(e3, t2) {
              var n2;
              (n2 = this.domCallbacks)[e3].apply(n2, E(t2));
            } }, { key: "time", value: function(e3, t2) {
              if (!this.isProfileEnabled() || !console.time)
                return t2();
              console.time(e3);
              var n2 = t2();
              return console.timeEnd(e3), n2;
            } }, { key: "log", value: function(e3, t2, n2) {
              if (this.viewLogger) {
                var i2 = x(n2(), 2), r2 = i2[0], o2 = i2[1];
                this.viewLogger(e3, t2, r2, o2);
              } else if (this.isDebugEnabled()) {
                var a2 = x(n2(), 2), u2 = a2[0], s2 = a2[1];
                K(e3, t2, u2, s2);
              }
            } }, { key: "onChannel", value: function(e3, t2, n2) {
              var i2 = this;
              e3.on(t2, function(e4) {
                var t3 = i2.getLatencySim();
                t3 ? (console.log("simulating ".concat(t3, "ms of latency from server to client")), setTimeout(function() {
                  return n2(e4);
                }, t3)) : n2(e4);
              });
            } }, { key: "wrapPush", value: function(e3, t2, n2) {
              var i2 = this, r2 = this.getLatencySim();
              if (!r2)
                return t2.timeout ? n2().receive("timeout", function() {
                  e3.isDestroyed() || i2.reloadWithJitter(e3, function() {
                    i2.log(e3, "timeout", function() {
                      return ["received timeout while communicating with server. Falling back to hard refresh for recovery"];
                    });
                  });
                }) : n2();
              console.log("simulating ".concat(r2, "ms of latency from client to server"));
              var o2 = { receives: [], receive: function(e4, t3) {
                this.receives.push([e4, t3]);
              } };
              return setTimeout(function() {
                o2.receives.reduce(function(e4, t3) {
                  var n3 = x(t3, 2), i3 = n3[0], r3 = n3[1];
                  return e4.receive(i3, r3);
                }, n2());
              }, r2), o2;
            } }, { key: "reloadWithJitter", value: function(e3, t2) {
              var n2 = this;
              e3.destroy(), this.disconnect();
              var i2 = N[0], r2 = N[1], o2 = Math.floor(Math.random() * (r2 - i2 + 1)) + i2, a2 = ce.updateLocal(e3.name(), "consecutive-reloads", 0, function(e4) {
                return e4 + 1;
              });
              t2 ? t2() : this.log(e3, "join", function() {
                return ["encountered ".concat(a2, " consecutive reloads")];
              }), a2 > 10 && (this.log(e3, "join", function() {
                return ["exceeded ".concat(10, " consecutive reloads. Entering failsafe mode")];
              }), o2 = 3e4), setTimeout(function() {
                n2.hasPendingLink() ? window.location = n2.pendingLink : window.location.reload();
              }, o2);
            } }, { key: "getHookCallbacks", value: function(e3) {
              return e3 && e3.startsWith("Phoenix.") ? te[e3.split(".")[1]] : this.hooks[e3];
            } }, { key: "isUnloaded", value: function() {
              return this.unloaded;
            } }, { key: "isConnected", value: function() {
              return this.socket.isConnected();
            } }, { key: "getBindingPrefix", value: function() {
              return this.bindingPrefix;
            } }, { key: "binding", value: function(e3) {
              return "".concat(this.getBindingPrefix()).concat(e3);
            } }, { key: "channel", value: function(e3, t2) {
              return this.socket.channel(e3, t2);
            } }, { key: "joinRootViews", value: function() {
              var e3 = this, t2 = false;
              return le.all(document, "".concat(M, ":not([").concat("data-phx-parent-id", "])"), function(n2) {
                if (!e3.getRootById(n2.id)) {
                  var i2 = e3.joinRootView(n2, e3.getHref());
                  e3.root = e3.root || i2, n2.getAttribute("data-phx-main") && (e3.main = i2);
                }
                t2 = true;
              }), t2;
            } }, { key: "redirect", value: function(e3, t2) {
              this.disconnect(), ce.redirect(e3, t2);
            } }, { key: "replaceMain", value: function(e3, t2) {
              var n2 = this, i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : this.setPendingLink(e3), o2 = this.main.el;
              this.main.showLoader(this.loaderTimeout), this.main.destroy(), ce.fetchPage(e3, function(a2, u2) {
                if (a2 !== 200)
                  return n2.redirect(e3);
                var s2 = document.createElement("template");
                s2.innerHTML = u2;
                var c2 = s2.content.childNodes[0];
                if (!c2 || !n2.isPhxView(c2))
                  return n2.redirect(e3);
                n2.joinRootView(c2, e3, t2, function(e4, t3) {
                  t3 === 1 && (n2.commitPendingLink(r2) ? (o2.replaceWith(e4.el), n2.main = e4, i2 && i2()) : e4.destroy());
                });
              });
            } }, { key: "isPhxView", value: function(e3) {
              return e3.getAttribute && e3.getAttribute(O) !== null;
            } }, { key: "joinRootView", value: function(e3, t2, n2, i2) {
              var r2 = new fe(e3, this, null, t2, n2);
              return this.roots[r2.id] = r2, r2.join(i2), r2;
            } }, { key: "owner", value: function(e3, t2) {
              var n2 = this, i2 = Z(e3.closest(M), function(e4) {
                return n2.getViewByEl(e4);
              });
              i2 && t2(i2);
            } }, { key: "withinOwners", value: function(e3, t2) {
              var n2 = this;
              this.owner(e3, function(i2) {
                var r2 = e3.getAttribute(n2.binding("target"));
                r2 === null ? t2(i2, e3) : i2.withinTargets(r2, t2);
              });
            } }, { key: "getViewByEl", value: function(e3) {
              var t2 = e3.getAttribute("data-phx-root-id");
              return Z(this.getRootById(t2), function(t3) {
                return t3.getDescendentByEl(e3);
              });
            } }, { key: "getRootById", value: function(e3) {
              return this.roots[e3];
            } }, { key: "destroyAllViews", value: function() {
              for (var e3 in this.roots)
                this.roots[e3].destroy(), delete this.roots[e3];
            } }, { key: "destroyViewByEl", value: function(e3) {
              var t2 = this.getRootById(e3.getAttribute("data-phx-root-id"));
              t2 && t2.destroyDescendent(e3.id);
            } }, { key: "setActiveElement", value: function(e3) {
              var t2 = this;
              if (this.activeElement !== e3) {
                this.activeElement = e3;
                var n2 = function() {
                  e3 === t2.activeElement && (t2.activeElement = null), e3.removeEventListener("mouseup", t2), e3.removeEventListener("touchend", t2);
                };
                e3.addEventListener("mouseup", n2), e3.addEventListener("touchend", n2);
              }
            } }, { key: "getActiveElement", value: function() {
              return document.activeElement === document.body ? this.activeElement || document.activeElement : document.activeElement || document.body;
            } }, { key: "dropActiveElement", value: function(e3) {
              this.prevActive && e3.ownsElement(this.prevActive) && (this.prevActive = null);
            } }, { key: "restorePreviouslyActiveFocus", value: function() {
              this.prevActive && this.prevActive !== document.body && this.prevActive.focus();
            } }, { key: "blurActiveElement", value: function() {
              this.prevActive = this.getActiveElement(), this.prevActive !== document.body && this.prevActive.blur();
            } }, { key: "bindTopLevelEvents", value: function() {
              var e3 = this;
              this.boundTopLevelEvents || (this.boundTopLevelEvents = true, window.addEventListener("pageshow", function(t2) {
                t2.persisted && (e3.withPageLoading({ to: window.location.href, kind: "redirect" }), window.location.reload());
              }), this.bindClicks(), this.bindNav(), this.bindForms(), this.bind({ keyup: "keyup", keydown: "keydown" }, function(t2, n2, i2, r2, o2, a2, u2) {
                var s2 = r2.getAttribute(e3.binding("key")), c2 = t2.key && t2.key.toLowerCase();
                s2 && s2.toLowerCase() !== c2 || i2.pushKey(r2, o2, n2, a2, function(e4) {
                  for (var t3 = 1; t3 < arguments.length; t3++) {
                    var n3 = arguments[t3] != null ? arguments[t3] : {};
                    t3 % 2 ? w(Object(n3), true).forEach(function(t4) {
                      A(e4, t4, n3[t4]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(n3)) : w(Object(n3)).forEach(function(t4) {
                      Object.defineProperty(e4, t4, Object.getOwnPropertyDescriptor(n3, t4));
                    });
                  }
                  return e4;
                }({ key: t2.key }, e3.eventMeta(n2, t2, r2)));
              }), this.bind({ blur: "focusout", focus: "focusin" }, function(t2, n2, i2, r2, o2, a2, u2) {
                u2 || i2.pushEvent(n2, r2, o2, a2, e3.eventMeta(n2, t2, r2));
              }), this.bind({ blur: "blur", focus: "focus" }, function(t2, n2, i2, r2, o2, a2, u2) {
                u2 && !u2 !== "window" && i2.pushEvent(n2, r2, o2, a2, e3.eventMeta(n2, t2, r2));
              }), window.addEventListener("dragover", function(e4) {
                return e4.preventDefault();
              }), window.addEventListener("drop", function(t2) {
                t2.preventDefault();
                var n2 = Z(G(t2.target, e3.binding("drop-target")), function(t3) {
                  return t3.getAttribute(e3.binding("drop-target"));
                }), i2 = n2 && document.getElementById(n2), r2 = Array.from(t2.dataTransfer.files || []);
                i2 && !i2.disabled && r2.length !== 0 && i2.files instanceof FileList && (ie.trackFiles(i2, r2), i2.dispatchEvent(new Event("input", { bubbles: true })));
              }));
            } }, { key: "eventMeta", value: function(e3, t2, n2) {
              var i2 = this.metadataCallbacks[e3];
              return i2 ? i2(t2, n2) : {};
            } }, { key: "setPendingLink", value: function(e3) {
              return this.linkRef++, this.pendingLink = e3, this.linkRef;
            } }, { key: "commitPendingLink", value: function(e3) {
              return this.linkRef === e3 && (this.href = this.pendingLink, this.pendingLink = null, true);
            } }, { key: "getHref", value: function() {
              return this.href;
            } }, { key: "hasPendingLink", value: function() {
              return !!this.pendingLink;
            } }, { key: "bind", value: function(e3, t2) {
              var n2 = this, i2 = function(i3) {
                var r3 = e3[i3];
                n2.on(r3, function(e4) {
                  var r4 = n2.binding(i3), o2 = n2.binding("window-".concat(i3)), a2 = e4.target.getAttribute && e4.target.getAttribute(r4);
                  a2 ? n2.debounce(e4.target, e4, function() {
                    n2.withinOwners(e4.target, function(n3, r5) {
                      t2(e4, i3, n3, e4.target, r5, a2, null);
                    });
                  }) : le.all(document, "[".concat(o2, "]"), function(r5) {
                    var a3 = r5.getAttribute(o2);
                    n2.debounce(r5, e4, function() {
                      n2.withinOwners(r5, function(n3, o3) {
                        t2(e4, i3, n3, r5, o3, a3, "window");
                      });
                    });
                  });
                });
              };
              for (var r2 in e3)
                i2(r2);
            } }, { key: "bindClicks", value: function() {
              var e3 = this;
              [true, false].forEach(function(t2) {
                var n2 = t2 ? e3.binding("capture-click") : e3.binding("click");
                window.addEventListener("click", function(i2) {
                  var r2 = null, o2 = (r2 = t2 ? i2.target.matches("[".concat(n2, "]")) ? i2.target : i2.target.querySelector("[".concat(n2, "]")) : G(i2.target, n2)) && r2.getAttribute(n2);
                  o2 && (r2.getAttribute("href") === "#" && i2.preventDefault(), e3.debounce(r2, i2, function() {
                    e3.withinOwners(r2, function(t3, n3) {
                      t3.pushEvent("click", r2, n3, o2, e3.eventMeta("click", i2, r2));
                    });
                  }));
                }, t2);
              });
            } }, { key: "bindNav", value: function() {
              var e3 = this;
              if (ce.canPushState()) {
                history.scrollRestoration && (history.scrollRestoration = "manual");
                var t2 = null;
                window.addEventListener("scroll", function(e4) {
                  clearTimeout(t2), t2 = setTimeout(function() {
                    ce.updateCurrentState(function(e5) {
                      return Object.assign(e5, { scroll: window.scrollY });
                    });
                  }, 100);
                }), window.addEventListener("popstate", function(t3) {
                  if (e3.registerNewLocation(window.location)) {
                    var n2 = t3.state || {}, i2 = n2.type, r2 = n2.id, o2 = n2.root, a2 = n2.scroll, u2 = window.location.href;
                    e3.main.isConnected() && i2 === "patch" && r2 === e3.main.id ? e3.main.pushLinkPatch(u2, null) : e3.replaceMain(u2, null, function() {
                      o2 && e3.replaceRootHistory(), typeof a2 == "number" && setTimeout(function() {
                        window.scrollTo(0, a2);
                      }, 0);
                    });
                  }
                }, false), window.addEventListener("click", function(t3) {
                  var n2 = G(t3.target, "data-phx-link"), i2 = n2 && n2.getAttribute("data-phx-link"), r2 = t3.metaKey || t3.ctrlKey || t3.button === 1;
                  if (i2 && e3.isConnected() && e3.main && !r2) {
                    var o2 = n2.href, a2 = n2.getAttribute("data-phx-link-state");
                    if (t3.preventDefault(), e3.pendingLink !== o2)
                      if (i2 === "patch")
                        e3.pushHistoryPatch(o2, a2, n2);
                      else {
                        if (i2 !== "redirect")
                          throw new Error("expected ".concat("data-phx-link", ' to be "patch" or "redirect", got: ').concat(i2));
                        e3.historyRedirect(o2, a2);
                      }
                  }
                }, false);
              }
            } }, { key: "withPageLoading", value: function(e3, t2) {
              le.dispatchEvent(window, "phx:page-loading-start", e3);
              var n2 = function() {
                return le.dispatchEvent(window, "phx:page-loading-stop", e3);
              };
              return t2 ? t2(n2) : n2;
            } }, { key: "pushHistoryPatch", value: function(e3, t2, n2) {
              var i2 = this;
              this.withPageLoading({ to: e3, kind: "patch" }, function(r2) {
                i2.main.pushLinkPatch(e3, n2, function() {
                  i2.historyPatch(e3, t2), r2();
                });
              });
            } }, { key: "historyPatch", value: function(e3, t2) {
              ce.pushState(t2, { type: "patch", id: this.main.id }, e3), this.registerNewLocation(window.location);
            } }, { key: "historyRedirect", value: function(e3, t2, n2) {
              var i2 = this, r2 = window.scrollY;
              this.withPageLoading({ to: e3, kind: "redirect" }, function(o2) {
                i2.replaceMain(e3, n2, function() {
                  ce.pushState(t2, { type: "redirect", id: i2.main.id, scroll: r2 }, e3), i2.registerNewLocation(window.location), o2();
                });
              });
            } }, { key: "replaceRootHistory", value: function() {
              ce.pushState("replace", { root: true, type: "patch", id: this.main.id });
            } }, { key: "registerNewLocation", value: function(e3) {
              var t2 = this.currentLocation;
              return t2.pathname + t2.search !== e3.pathname + e3.search && (this.currentLocation = X(e3), true);
            } }, { key: "bindForms", value: function() {
              var e3 = this, t2 = 0;
              this.on("submit", function(t3) {
                var n3 = t3.target.getAttribute(e3.binding("submit"));
                n3 && (t3.preventDefault(), t3.target.disabled = true, e3.withinOwners(t3.target, function(e4, i3) {
                  return e4.submitForm(t3.target, i3, n3);
                }));
              }, false);
              for (var n2 = function() {
                var n3 = r2[i2];
                e3.on(n3, function(i3) {
                  var r3 = i3.target, o2 = r3.form && r3.form.getAttribute(e3.binding("change"));
                  if (o2 && (r3.type !== "number" || !r3.validity || !r3.validity.badInput)) {
                    var a2 = t2;
                    t2++;
                    var u2 = le.private(r3, "prev-iteration") || {}, s2 = u2.at, c2 = u2.type;
                    s2 === a2 - 1 && n3 !== c2 || (le.putPrivate(r3, "prev-iteration", { at: a2, type: n3 }), e3.debounce(r3, i3, function() {
                      e3.withinOwners(r3.form, function(t3, n4) {
                        le.putPrivate(r3, "phx-has-focused", true), le.isTextualInput(r3) || e3.setActiveElement(r3), t3.pushInput(r3, n4, o2, i3.target);
                      });
                    }));
                  }
                }, false);
              }, i2 = 0, r2 = ["change", "input"]; i2 < r2.length; i2++)
                n2();
            } }, { key: "debounce", value: function(e3, t2, n2) {
              var i2 = this.binding("debounce"), r2 = this.binding("throttle"), o2 = this.defaults.debounce.toString(), a2 = this.defaults.throttle.toString();
              le.debounce(e3, t2, i2, o2, r2, a2, n2);
            } }, { key: "silenceEvents", value: function(e3) {
              this.silenced = true, e3(), this.silenced = false;
            } }, { key: "on", value: function(e3, t2) {
              var n2 = this;
              window.addEventListener(e3, function(e4) {
                n2.silenced || t2(e4);
              });
            } }]), e2;
          }(), ce = { canPushState: function() {
            return history.pushState !== void 0;
          }, dropLocal: function(e2, t2) {
            return window.localStorage.removeItem(this.localKey(e2, t2));
          }, updateLocal: function(e2, t2, n2, i2) {
            var r2 = this.getLocal(e2, t2), o2 = this.localKey(e2, t2), a2 = r2 === null ? n2 : i2(r2);
            return window.localStorage.setItem(o2, JSON.stringify(a2)), a2;
          }, getLocal: function(e2, t2) {
            return JSON.parse(window.localStorage.getItem(this.localKey(e2, t2)));
          }, fetchPage: function(e2, t2) {
            var n2 = new XMLHttpRequest();
            n2.open("GET", e2, true), n2.timeout = 3e4, n2.setRequestHeader("content-type", "text/html"), n2.setRequestHeader("cache-control", "max-age=0, no-cache, no-store, must-revalidate, post-check=0, pre-check=0"), n2.setRequestHeader("x-requested-with", "live-link"), n2.onerror = function() {
              return t2(400);
            }, n2.ontimeout = function() {
              return t2(504);
            }, n2.onreadystatechange = function() {
              if (n2.readyState === 4) {
                var i2 = new URL(e2), r2 = i2.pathname + i2.search, o2 = Z(n2.getResponseHeader("x-response-url") || n2.responseURL, function(e3) {
                  return new URL(e3);
                }), a2 = o2 ? o2.pathname + o2.search : null;
                return n2.getResponseHeader("x-requested-with") !== "live-link" ? t2(400) : o2 === null || a2 != r2 ? t2(302) : n2.status !== 200 ? t2(n2.status) : void t2(200, n2.responseText);
              }
            }, n2.send();
          }, updateCurrentState: function(e2) {
            this.canPushState() && history.replaceState(e2(history.state || {}), "", window.location.href);
          }, pushState: function(e2, t2, n2) {
            if (this.canPushState()) {
              if (n2 !== window.location.href) {
                if (t2.type == "redirect" && t2.scroll) {
                  var i2 = history.state || {};
                  i2.scroll = t2.scroll, history.replaceState(i2, "", window.location.href);
                }
                delete t2.scroll, history[e2 + "State"](t2, "", n2 || null);
                var r2 = this.getHashTargetEl(window.location.hash);
                r2 ? r2.scrollIntoView() : t2.type === "redirect" && window.scroll(0, 0);
              }
            } else
              this.redirect(n2);
          }, setCookie: function(e2, t2) {
            document.cookie = "".concat(e2, "=").concat(t2);
          }, getCookie: function(e2) {
            return document.cookie.replace(new RegExp("(?:(?:^|.*;s*)".concat(e2, "s*=s*([^;]*).*$)|^.*$")), "$1");
          }, redirect: function(e2, t2) {
            t2 && ce.setCookie("__phoenix_flash__", t2 + "; max-age=60000; path=/"), window.location = e2;
          }, localKey: function(e2, t2) {
            return "".concat(e2, "-").concat(t2);
          }, getHashTargetEl: function(e2) {
            var t2 = e2.toString().substring(1);
            if (t2 !== "")
              return document.getElementById(t2) || document.querySelector('a[name="'.concat(t2, '"]'));
          } }, le = { byId: function(e2) {
            return document.getElementById(e2) || z("no id found for ".concat(e2));
          }, removeClass: function(e2, t2) {
            e2.classList.remove(t2), e2.classList.length === 0 && e2.removeAttribute("class");
          }, all: function(e2, t2, n2) {
            var i2 = Array.from(e2.querySelectorAll(t2));
            return n2 ? i2.forEach(n2) : i2;
          }, findComponentNodeList: function(e2, t2) {
            return this.filterWithinSameLiveView(this.all(e2, "[".concat(j, '="').concat(t2, '"]')), e2);
          }, findPhxChildrenInFragment: function(e2, t2) {
            var n2 = document.createElement("template");
            return n2.innerHTML = e2, this.findPhxChildren(n2.content, t2);
          }, isIgnored: function(e2, t2) {
            return (e2.getAttribute(t2) || e2.getAttribute("data-phx-update")) === "ignore";
          }, isPhxUpdate: function(e2, t2, n2) {
            return e2.getAttribute && n2.indexOf(e2.getAttribute(t2)) >= 0;
          }, findPhxChildren: function(e2, t2) {
            return this.all(e2, "".concat(M, "[").concat("data-phx-parent-id", '="').concat(t2, '"]'));
          }, findParentCIDs: function(e2, t2) {
            var n2 = this, i2 = new Set(t2);
            return t2.reduce(function(t3, i3) {
              var r2 = "[".concat(j, '="').concat(i3, '"] [').concat(j, "]");
              return n2.filterWithinSameLiveView(n2.all(e2, r2), e2).map(function(e3) {
                return parseInt(e3.getAttribute(j));
              }).forEach(function(e3) {
                return t3.delete(e3);
              }), t3;
            }, i2);
          }, filterWithinSameLiveView: function(e2, t2) {
            var n2 = this;
            return t2.querySelector(M) ? e2.filter(function(e3) {
              return n2.withinSameLiveView(e3, t2);
            }) : e2;
          }, withinSameLiveView: function(e2, t2) {
            for (; e2 = e2.parentNode; ) {
              if (e2.isSameNode(t2))
                return true;
              if (e2.getAttribute(O))
                return false;
            }
          }, private: function(e2, t2) {
            return e2.phxPrivate && e2.phxPrivate[t2];
          }, deletePrivate: function(e2, t2) {
            e2.phxPrivate && delete e2.phxPrivate[t2];
          }, putPrivate: function(e2, t2, n2) {
            e2.phxPrivate || (e2.phxPrivate = {}), e2.phxPrivate[t2] = n2;
          }, copyPrivates: function(e2, t2) {
            t2.phxPrivate && (e2.phxPrivate = X(t2.phxPrivate));
          }, putTitle: function(e2) {
            var t2 = document.querySelector("title").dataset, n2 = t2.prefix, i2 = t2.suffix;
            document.title = "".concat(n2 || "").concat(e2).concat(i2 || "");
          }, debounce: function(e2, t2, n2, i2, r2, o2, a2) {
            var u2 = this, s2 = e2.getAttribute(n2), c2 = e2.getAttribute(r2);
            s2 === "" && (s2 = i2), c2 === "" && (c2 = o2);
            var l2 = s2 || c2;
            switch (l2) {
              case null:
                return a2();
              case "blur":
                return void (this.once(e2, "debounce-blur") && e2.addEventListener("blur", function() {
                  return a2();
                }));
              default:
                var d2 = parseInt(l2), h2 = this.incCycle(e2, "debounce-trigger", function() {
                  return c2 ? u2.deletePrivate(e2, "throttled") : a2();
                });
                if (isNaN(d2))
                  return z("invalid throttle/debounce value: ".concat(l2));
                if (c2) {
                  var f2 = false;
                  if (t2.type === "keydown") {
                    var v2 = this.private(e2, "debounce-prev-key");
                    this.putPrivate(e2, "debounce-prev-key", t2.key), f2 = v2 !== t2.key;
                  }
                  if (!f2 && this.private(e2, "throttled"))
                    return false;
                  a2(), this.putPrivate(e2, "throttled", true), setTimeout(function() {
                    return u2.triggerCycle(e2, "debounce-trigger");
                  }, d2);
                } else
                  setTimeout(function() {
                    return u2.triggerCycle(e2, "debounce-trigger", h2);
                  }, d2);
                e2.form && this.once(e2.form, "bind-debounce") && e2.form.addEventListener("submit", function(t3) {
                  Array.from(new FormData(e2.form).entries(), function(t4) {
                    var n3 = x(t4, 2), i3 = n3[0], r3 = (n3[1], e2.form.querySelector('[name="'.concat(i3, '"]')));
                    u2.incCycle(r3, "debounce-trigger"), u2.deletePrivate(r3, "throttled");
                  });
                }), this.once(e2, "bind-debounce") && e2.addEventListener("blur", function(t3) {
                  return u2.triggerCycle(e2, "debounce-trigger");
                });
            }
          }, triggerCycle: function(e2, t2, n2) {
            var i2 = x(this.private(e2, t2), 2), r2 = i2[0], o2 = i2[1];
            n2 || (n2 = r2), n2 === r2 && (this.incCycle(e2, t2), o2());
          }, once: function(e2, t2) {
            return this.private(e2, t2) !== true && (this.putPrivate(e2, t2, true), true);
          }, incCycle: function(e2, t2) {
            var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
            }, i2 = x(this.private(e2, t2) || [0, n2], 2), r2 = i2[0];
            i2[1];
            return r2++, this.putPrivate(e2, t2, [r2, n2]), r2;
          }, discardError: function(e2, t2, n2) {
            var i2 = t2.getAttribute && t2.getAttribute(n2), r2 = i2 && e2.querySelector("#".concat(i2));
            r2 && (this.private(r2, "phx-has-focused") || this.private(r2.form, "phx-has-submitted") || t2.classList.add("phx-no-feedback"));
          }, isPhxChild: function(e2) {
            return e2.getAttribute && e2.getAttribute("data-phx-parent-id");
          }, dispatchEvent: function(e2, t2) {
            var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i2 = new CustomEvent(t2, { bubbles: true, cancelable: true, detail: n2 });
            e2.dispatchEvent(i2);
          }, cloneNode: function(e2, t2) {
            if (t2 === void 0)
              return e2.cloneNode(true);
            var n2 = e2.cloneNode(false);
            return n2.innerHTML = t2, n2;
          }, mergeAttrs: function(e2, t2) {
            for (var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i2 = n2.exclude || [], r2 = n2.isIgnored, o2 = t2.attributes, a2 = o2.length - 1; a2 >= 0; a2--) {
              var u2 = o2[a2].name;
              i2.indexOf(u2) < 0 && e2.setAttribute(u2, t2.getAttribute(u2));
            }
            for (var s2 = e2.attributes, c2 = s2.length - 1; c2 >= 0; c2--) {
              var l2 = s2[c2].name;
              r2 ? l2.startsWith("data-") && !t2.hasAttribute(l2) && e2.removeAttribute(l2) : t2.hasAttribute(l2) || e2.removeAttribute(l2);
            }
          }, mergeFocusedInput: function(e2, t2) {
            e2 instanceof HTMLSelectElement || le.mergeAttrs(e2, t2, { except: ["value"] }), t2.readOnly ? e2.setAttribute("readonly", true) : e2.removeAttribute("readonly");
          }, hasSelectionRange: function(e2) {
            return e2.setSelectionRange && (e2.type === "text" || e2.type === "textarea");
          }, restoreFocus: function(e2, t2, n2) {
            if (le.isTextualInput(e2)) {
              var i2 = e2.matches(":focus");
              e2.readOnly && e2.blur(), i2 || e2.focus(), this.hasSelectionRange(e2) && e2.setSelectionRange(t2, n2);
            }
          }, isFormInput: function(e2) {
            return /^(?:input|select|textarea)$/i.test(e2.tagName) && e2.type !== "button";
          }, syncAttrsToProps: function(e2) {
            e2 instanceof HTMLInputElement && U.indexOf(e2.type.toLocaleLowerCase()) >= 0 && (e2.checked = e2.getAttribute("checked") !== null);
          }, isTextualInput: function(e2) {
            return B.indexOf(e2.type) >= 0;
          }, isNowTriggerFormExternal: function(e2, t2) {
            return e2.getAttribute && e2.getAttribute(t2) !== null;
          }, syncPendingRef: function(e2, t2, n2) {
            var i2 = e2.getAttribute(F);
            return i2 === null || (le.isFormInput(e2) || e2.getAttribute(n2) !== null ? (e2.type === "file" && le.mergeAttrs(e2, t2, { isIgnored: true }), le.putPrivate(e2, F, t2), false) : (H.forEach(function(n3) {
              e2.classList.contains(n3) && t2.classList.add(n3);
            }), t2.setAttribute(F, i2), true));
          }, cleanChildNodes: function(e2, t2) {
            if (le.isPhxUpdate(e2, t2, ["append", "prepend"])) {
              var n2 = [];
              e2.childNodes.forEach(function(e3) {
                e3.id || (e3.nodeType === Node.TEXT_NODE && e3.nodeValue.trim() === "" || z("only HTML element tags with an id are allowed inside containers with phx-update.\n\n" + 'removing illegal node: "'.concat((e3.outerHTML || e3.nodeValue).trim(), '"\n\n')), n2.push(e3));
              }), n2.forEach(function(e3) {
                return e3.remove();
              });
            }
          } }, de = function() {
            function e2(t2, n2, i2) {
              T(this, e2);
              var r2 = new Set(), o2 = new Set(E(n2.children).map(function(e3) {
                return e3.id;
              })), a2 = [];
              Array.from(t2.children).forEach(function(e3) {
                if (e3.id && (r2.add(e3.id), o2.has(e3.id))) {
                  var t3 = e3.previousElementSibling && e3.previousElementSibling.id;
                  a2.push({ elementId: e3.id, previousElementId: t3 });
                }
              }), this.containerId = n2.id, this.updateType = i2, this.elementsToModify = a2, this.elementIdsToAdd = E(o2).filter(function(e3) {
                return !r2.has(e3);
              });
            }
            return D(e2, [{ key: "perform", value: function() {
              var e3 = le.byId(this.containerId);
              this.elementsToModify.forEach(function(t2) {
                t2.previousElementId ? Z(document.getElementById(t2.previousElementId), function(e4) {
                  Z(document.getElementById(t2.elementId), function(t3) {
                    t3.previousElementSibling && t3.previousElementSibling.id == e4.id || e4.insertAdjacentElement("afterend", t3);
                  });
                }) : Z(document.getElementById(t2.elementId), function(t3) {
                  t3.previousElementSibling == null || e3.insertAdjacentElement("afterbegin", t3);
                });
              }), this.updateType == "prepend" && this.elementIdsToAdd.reverse().forEach(function(t2) {
                Z(document.getElementById(t2), function(t3) {
                  return e3.insertAdjacentElement("afterbegin", t3);
                });
              });
            } }]), e2;
          }(), he = function() {
            function e2(t2, n2, i2, r2, o2) {
              T(this, e2), this.view = t2, this.liveSocket = t2.liveSocket, this.container = n2, this.id = i2, this.rootID = t2.root.id, this.html = r2, this.targetCID = o2, this.cidPatch = typeof this.targetCID == "number", this.callbacks = { beforeadded: [], beforeupdated: [], beforediscarded: [], beforephxChildAdded: [], afteradded: [], afterupdated: [], afterdiscarded: [], afterphxChildAdded: [] };
            }
            return D(e2, null, [{ key: "patchEl", value: function(e3, t2, n2) {
              b(e3, t2, { childrenOnly: false, onBeforeElUpdated: function(e4, t3) {
                if (n2 && n2.isSameNode(e4) && le.isFormInput(e4))
                  return le.mergeFocusedInput(e4, t3), false;
              } });
            } }]), D(e2, [{ key: "before", value: function(e3, t2) {
              this.callbacks["before".concat(e3)].push(t2);
            } }, { key: "after", value: function(e3, t2) {
              this.callbacks["after".concat(e3)].push(t2);
            } }, { key: "trackBefore", value: function(e3) {
              for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), i2 = 1; i2 < t2; i2++)
                n2[i2 - 1] = arguments[i2];
              this.callbacks["before".concat(e3)].forEach(function(e4) {
                return e4.apply(void 0, n2);
              });
            } }, { key: "trackAfter", value: function(e3) {
              for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), i2 = 1; i2 < t2; i2++)
                n2[i2 - 1] = arguments[i2];
              this.callbacks["after".concat(e3)].forEach(function(e4) {
                return e4.apply(void 0, n2);
              });
            } }, { key: "markPrunableContentForRemoval", value: function() {
              le.all(this.container, "[phx-update=append] > *, [phx-update=prepend] > *", function(e3) {
                e3.setAttribute("data-phx-remove", "");
              });
            } }, { key: "perform", value: function() {
              var e3 = this, t2 = this.view, n2 = this.liveSocket, i2 = this.container, r2 = this.html, o2 = this.isCIDPatch() ? this.targetCIDContainer() : i2;
              if (!this.isCIDPatch() || o2) {
                var a2 = n2.getActiveElement(), u2 = a2 && le.hasSelectionRange(a2) ? a2 : {}, s2 = u2.selectionStart, c2 = u2.selectionEnd, l2 = n2.binding("update"), d2 = n2.binding("feedback-for"), h2 = n2.binding("disable-with"), f2 = n2.binding("trigger-action"), v2 = [], p2 = [], g2 = [], m2 = null, y2 = n2.time("premorph container prep", function() {
                  return e3.buildDiffHTML(i2, r2, l2, o2);
                });
                return this.trackBefore("added", i2), this.trackBefore("updated", i2, i2), n2.time("morphdom", function() {
                  b(o2, y2, { childrenOnly: o2.getAttribute(j) === null, onBeforeNodeAdded: function(t3) {
                    return le.discardError(o2, t3, d2), e3.trackBefore("added", t3), t3;
                  }, onNodeAdded: function(n3) {
                    le.isNowTriggerFormExternal(n3, f2) && (m2 = n3), le.isPhxChild(n3) && t2.ownsElement(n3) && e3.trackAfter("phxChildAdded", n3), v2.push(n3);
                  }, onNodeDiscarded: function(t3) {
                    le.isPhxChild(t3) && n2.destroyViewByEl(t3), e3.trackAfter("discarded", t3);
                  }, onBeforeNodeDiscarded: function(t3) {
                    return !(!t3.getAttribute || t3.getAttribute("data-phx-remove") === null) || (t3.parentNode === null || !le.isPhxUpdate(t3.parentNode, l2, ["append", "prepend"]) || !t3.id) && (!e3.skipCIDSibling(t3) && (e3.trackBefore("discarded", t3), true));
                  }, onElUpdated: function(e4) {
                    le.isNowTriggerFormExternal(e4, f2) && (m2 = e4), p2.push(e4);
                  }, onBeforeElUpdated: function(t3, n3) {
                    if (le.cleanChildNodes(n3, l2), e3.skipCIDSibling(n3))
                      return false;
                    if (le.isIgnored(t3, l2))
                      return e3.trackBefore("updated", t3, n3), le.mergeAttrs(t3, n3, { isIgnored: true }), p2.push(t3), false;
                    if (t3.type === "number" && t3.validity && t3.validity.badInput)
                      return false;
                    if (!le.syncPendingRef(t3, n3, h2))
                      return t3.type === "file" && (e3.trackBefore("updated", t3, n3), p2.push(t3)), false;
                    if (le.isPhxChild(n3)) {
                      var i3 = t3.getAttribute(J);
                      return le.mergeAttrs(t3, n3), t3.setAttribute(J, i3), t3.setAttribute("data-phx-root-id", e3.rootID), false;
                    }
                    return le.copyPrivates(n3, t3), le.discardError(o2, n3, d2), a2 && t3.isSameNode(a2) && le.isFormInput(t3) && !e3.forceFocusedSelectUpdate(t3, n3) ? (e3.trackBefore("updated", t3, n3), le.mergeFocusedInput(t3, n3), le.syncAttrsToProps(t3), p2.push(t3), false) : (le.isPhxUpdate(n3, l2, ["append", "prepend"]) && g2.push(new de(t3, n3, n3.getAttribute(l2))), le.syncAttrsToProps(n3), e3.trackBefore("updated", t3, n3), true);
                  } });
                }), n2.isDebugEnabled() && function() {
                  for (var e4 = new Set(), t3 = document.querySelectorAll("*[id]"), n3 = 0, i3 = t3.length; n3 < i3; n3++)
                    e4.has(t3[n3].id) ? console.error("Multiple IDs detected: ".concat(t3[n3].id, ". Ensure unique element ids.")) : e4.add(t3[n3].id);
                }(), g2.length > 0 && n2.time("post-morph append/prepend restoration", function() {
                  g2.forEach(function(e4) {
                    return e4.perform();
                  });
                }), n2.silenceEvents(function() {
                  return le.restoreFocus(a2, s2, c2);
                }), le.dispatchEvent(document, "phx:update"), v2.forEach(function(t3) {
                  return e3.trackAfter("added", t3);
                }), p2.forEach(function(t3) {
                  return e3.trackAfter("updated", t3);
                }), m2 && (n2.disconnect(), m2.submit()), true;
              }
            } }, { key: "forceFocusedSelectUpdate", value: function(e3, t2) {
              return e3.multiple === true || e3.innerHTML != t2.innerHTML;
            } }, { key: "isCIDPatch", value: function() {
              return this.cidPatch;
            } }, { key: "skipCIDSibling", value: function(e3) {
              return e3.nodeType === Node.ELEMENT_NODE && e3.getAttribute("data-phx-skip") !== null;
            } }, { key: "targetCIDContainer", value: function() {
              if (this.isCIDPatch()) {
                var e3 = k(le.findComponentNodeList(this.container, this.targetCID)), t2 = e3[0];
                return e3.slice(1).length === 0 ? t2 : t2 && t2.parentNode;
              }
            } }, { key: "buildDiffHTML", value: function(e3, t2, n2, i2) {
              var r2 = this, o2 = this.isCIDPatch(), a2 = o2 && i2.getAttribute(j) === this.targetCID.toString();
              if (!o2 || a2)
                return t2;
              var u2 = null, s2 = document.createElement("template");
              u2 = le.cloneNode(i2);
              var c2 = k(le.findComponentNodeList(u2, this.targetCID)), l2 = c2[0], d2 = c2.slice(1);
              return s2.innerHTML = t2, d2.forEach(function(e4) {
                return e4.remove();
              }), Array.from(u2.childNodes).forEach(function(e4) {
                e4.id && e4.nodeType === Node.ELEMENT_NODE && e4.getAttribute(j) !== r2.targetCID.toString() && (e4.setAttribute("data-phx-skip", ""), e4.innerHTML = "");
              }), Array.from(s2.content.childNodes).forEach(function(e4) {
                return u2.insertBefore(e4, l2);
              }), l2.remove(), u2.outerHTML;
            } }]), e2;
          }(), fe = function() {
            function e2(t2, n2, i2, r2, o2) {
              var a2 = this;
              T(this, e2), this.liveSocket = n2, this.flash = o2, this.parent = i2, this.root = i2 ? i2.root : this, this.el = t2, this.id = this.el.id, this.view = this.el.getAttribute(O), this.ref = 0, this.childJoins = 0, this.loaderTimer = null, this.pendingDiffs = [], this.pruningCIDs = [], this.href = r2, this.joinCount = this.parent ? this.parent.joinCount - 1 : 0, this.joinPending = true, this.destroyed = false, this.joinCallback = function() {
              }, this.stopCallback = function() {
              }, this.pendingJoinOps = this.parent ? null : [], this.viewHooks = {}, this.uploaders = {}, this.formSubmits = [], this.children = this.parent ? null : {}, this.root.children[this.id] = {}, this.channel = this.liveSocket.channel("lv:".concat(this.id), function() {
                return { url: a2.href, params: a2.connectParams(), session: a2.getSession(), static: a2.getStatic(), flash: a2.flash };
              }), this.showLoader(this.liveSocket.loaderTimeout), this.bindChannel();
            }
            return D(e2, [{ key: "isMain", value: function() {
              return this.liveSocket.main === this;
            } }, { key: "connectParams", value: function() {
              var e3 = this.liveSocket.params(this.view), t2 = le.all(document, "[".concat(this.binding("track-static"), "]")).map(function(e4) {
                return e4.src || e4.href;
              }).filter(function(e4) {
                return typeof e4 == "string";
              });
              return t2.length > 0 && (e3._track_static = t2), e3._mounts = this.joinCount, e3;
            } }, { key: "name", value: function() {
              return this.view;
            } }, { key: "isConnected", value: function() {
              return this.channel.canPush();
            } }, { key: "getSession", value: function() {
              return this.el.getAttribute("data-phx-session");
            } }, { key: "getStatic", value: function() {
              var e3 = this.el.getAttribute(J);
              return e3 === "" ? null : e3;
            } }, { key: "destroy", value: function() {
              var e3 = this, t2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
              };
              this.destroyAllChildren(), this.destroyed = true, delete this.root.children[this.id], this.parent && delete this.root.children[this.parent.id][this.id], clearTimeout(this.loaderTimer);
              var n2 = function() {
                for (var n3 in t2(), e3.viewHooks)
                  e3.viewHooks[n3].__trigger__("beforeDestroy"), e3.destroyHook(e3.viewHooks[n3]);
              };
              this.log("destroyed", function() {
                return ["the child has been removed from the parent"];
              }), this.channel.leave().receive("ok", n2).receive("error", n2).receive("timeout", n2);
            } }, { key: "setContainerClasses", value: function() {
              var e3;
              this.el.classList.remove("phx-connected", "phx-disconnected", "phx-error"), (e3 = this.el.classList).add.apply(e3, arguments);
            } }, { key: "isLoading", value: function() {
              return this.el.classList.contains("phx-disconnected");
            } }, { key: "showLoader", value: function(e3) {
              var t2 = this;
              if (clearTimeout(this.loaderTimer), e3)
                this.loaderTimer = setTimeout(function() {
                  return t2.showLoader();
                }, e3);
              else {
                for (var n2 in this.viewHooks)
                  this.viewHooks[n2].__trigger__("disconnected");
                this.setContainerClasses("phx-disconnected");
              }
            } }, { key: "hideLoader", value: function() {
              clearTimeout(this.loaderTimer), this.setContainerClasses("phx-connected");
            } }, { key: "triggerReconnected", value: function() {
              for (var e3 in this.viewHooks)
                this.viewHooks[e3].__trigger__("reconnected");
            } }, { key: "log", value: function(e3, t2) {
              this.liveSocket.log(this, e3, t2);
            } }, { key: "withinTargets", value: function(e3, t2) {
              var n2 = this;
              if (/^(0|[1-9]\d*)$/.test(e3)) {
                var i2 = le.findComponentNodeList(this.el, e3);
                i2.length === 0 ? z("no component found matching phx-target of ".concat(e3)) : t2(this, i2[0]);
              } else {
                var r2 = Array.from(document.querySelectorAll(e3));
                r2.length === 0 && z('nothing found matching the phx-target selector "'.concat(e3, '"')), r2.forEach(function(e4) {
                  return n2.liveSocket.owner(e4, function(n3) {
                    return t2(n3, e4);
                  });
                });
              }
            } }, { key: "applyDiff", value: function(e3, t2, n2) {
              this.log(e3, function() {
                return ["", X(t2)];
              });
              var i2 = ue.extract(t2), r2 = i2.diff, o2 = i2.reply, a2 = i2.events, u2 = i2.title;
              return u2 && le.putTitle(u2), n2({ diff: r2, reply: o2, events: a2 }), o2;
            } }, { key: "onJoin", value: function(e3) {
              var t2 = this, n2 = e3.rendered;
              this.childJoins = 0, this.joinPending = true, this.flash = null, ce.dropLocal(this.name(), "consecutive-reloads"), this.applyDiff("mount", n2, function(n3) {
                var i2 = n3.diff, r2 = n3.events;
                t2.rendered = new ue(t2.id, i2);
                var o2 = t2.renderContainer(null, "join");
                t2.dropPendingRefs();
                var a2 = t2.formsForRecovery(o2);
                t2.joinCount++, a2.length > 0 ? a2.forEach(function(e4, n4) {
                  t2.pushFormRecovery(e4, function(e5) {
                    n4 === a2.length - 1 && t2.onJoinComplete(e5, o2, r2);
                  });
                }) : t2.onJoinComplete(e3, o2, r2);
              });
            } }, { key: "dropPendingRefs", value: function() {
              le.all(this.el, "[".concat(F, "]"), function(e3) {
                return e3.removeAttribute(F);
              });
            } }, { key: "onJoinComplete", value: function(e3, t2, n2) {
              var i2 = this, r2 = e3.live_patch;
              if (this.joinCount > 1 || this.parent && !this.parent.isJoinPending())
                return this.applyJoinPatch(r2, t2, n2);
              le.findPhxChildrenInFragment(t2, this.id).filter(function(e4) {
                var t3 = e4.id && i2.el.querySelector("#".concat(e4.id)), n3 = t3 && t3.getAttribute(J);
                return n3 && e4.setAttribute(J, n3), i2.joinChild(e4);
              }).length === 0 ? this.parent ? (this.root.pendingJoinOps.push([this, function() {
                return i2.applyJoinPatch(r2, t2, n2);
              }]), this.parent.ackJoin(this)) : (this.onAllChildJoinsComplete(), this.applyJoinPatch(r2, t2, n2)) : this.root.pendingJoinOps.push([this, function() {
                return i2.applyJoinPatch(r2, t2, n2);
              }]);
            } }, { key: "attachTrueDocEl", value: function() {
              this.el = le.byId(this.id), this.el.setAttribute("data-phx-root-id", this.root.id);
            } }, { key: "dispatchEvents", value: function(e3) {
              e3.forEach(function(e4) {
                var t2 = x(e4, 2), n2 = t2[0], i2 = t2[1];
                window.dispatchEvent(new CustomEvent("phx:hook:".concat(n2), { detail: i2 }));
              });
            } }, { key: "applyJoinPatch", value: function(e3, t2, n2) {
              var i2 = this;
              this.attachTrueDocEl();
              var r2 = new he(this, this.el, this.id, t2, null);
              if (r2.markPrunableContentForRemoval(), this.performPatch(r2, false), this.joinNewChildren(), le.all(this.el, "[".concat(this.binding("hook"), "], [data-phx-").concat("hook", "]"), function(e4) {
                var t3 = i2.addHook(e4);
                t3 && t3.__trigger__("mounted");
              }), this.joinPending = false, this.dispatchEvents(n2), this.applyPendingUpdates(), e3) {
                var o2 = e3.kind, a2 = e3.to;
                this.liveSocket.historyPatch(a2, o2);
              }
              this.hideLoader(), this.joinCount > 1 && this.triggerReconnected(), this.stopCallback();
            } }, { key: "triggerBeforeUpdateHook", value: function(e3, t2) {
              this.liveSocket.triggerDOM("onBeforeElUpdated", [e3, t2]);
              var n2 = this.getHook(e3), i2 = n2 && le.isIgnored(e3, this.binding("update"));
              if (n2 && !e3.isEqualNode(t2) && (!i2 || !function(e4, t3) {
                return JSON.stringify(e4) === JSON.stringify(t3);
              }(e3.dataset, t2.dataset)))
                return n2.__trigger__("beforeUpdate"), n2;
            } }, { key: "triggerUpdatedHook", value: function(e3) {
              e3.__trigger__("updated");
            } }, { key: "performPatch", value: function(e3, t2) {
              var n2 = this, i2 = [], r2 = false, o2 = new Set();
              return e3.after("added", function(e4) {
                n2.liveSocket.triggerDOM("onNodeAdded", [e4]);
                var t3 = n2.addHook(e4);
                t3 && t3.__trigger__("mounted");
              }), e3.after("phxChildAdded", function(e4) {
                return r2 = true;
              }), e3.before("updated", function(e4, t3) {
                n2.triggerBeforeUpdateHook(e4, t3) && o2.add(e4.id);
              }), e3.after("updated", function(e4) {
                o2.has(e4.id) && n2.triggerUpdatedHook(n2.getHook(e4));
              }), e3.before("discarded", function(e4) {
                var t3 = n2.getHook(e4);
                t3 && t3.__trigger__("beforeDestroy");
              }), e3.after("discarded", function(e4) {
                var t3 = n2.componentID(e4);
                typeof t3 == "number" && i2.indexOf(t3) === -1 && i2.push(t3);
                var r3 = n2.getHook(e4);
                r3 && n2.destroyHook(r3);
              }), e3.perform(), t2 && this.maybePushComponentsDestroyed(i2), r2;
            } }, { key: "joinNewChildren", value: function() {
              var e3 = this;
              le.findPhxChildren(this.el, this.id).forEach(function(t2) {
                return e3.joinChild(t2);
              });
            } }, { key: "getChildById", value: function(e3) {
              return this.root.children[this.id][e3];
            } }, { key: "getDescendentByEl", value: function(e3) {
              return e3.id === this.id ? this : this.children[e3.getAttribute("data-phx-parent-id")][e3.id];
            } }, { key: "destroyDescendent", value: function(e3) {
              for (var t2 in this.root.children)
                for (var n2 in this.root.children[t2])
                  if (n2 === e3)
                    return this.root.children[t2][n2].destroy();
            } }, { key: "joinChild", value: function(t2) {
              if (!this.getChildById(t2.id)) {
                var n2 = new e2(t2, this.liveSocket, this);
                return this.root.children[this.id][n2.id] = n2, n2.join(), this.childJoins++, true;
              }
            } }, { key: "isJoinPending", value: function() {
              return this.joinPending;
            } }, { key: "ackJoin", value: function(e3) {
              this.childJoins--, this.childJoins === 0 && (this.parent ? this.parent.ackJoin(this) : this.onAllChildJoinsComplete());
            } }, { key: "onAllChildJoinsComplete", value: function() {
              this.joinCallback(), this.pendingJoinOps.forEach(function(e3) {
                var t2 = x(e3, 2), n2 = t2[0], i2 = t2[1];
                n2.isDestroyed() || i2();
              }), this.pendingJoinOps = [];
            } }, { key: "update", value: function(e3, t2) {
              var n2 = this;
              if (this.isJoinPending() || this.liveSocket.hasPendingLink())
                return this.pendingDiffs.push({ diff: e3, events: t2 });
              this.rendered.mergeDiff(e3);
              var i2 = false;
              this.rendered.isComponentOnlyDiff(e3) ? this.liveSocket.time("component patch complete", function() {
                le.findParentCIDs(n2.el, n2.rendered.componentCIDs(e3)).forEach(function(t3) {
                  n2.componentPatch(n2.rendered.getComponent(e3, t3), t3) && (i2 = true);
                });
              }) : Q(e3) || this.liveSocket.time("full patch complete", function() {
                var t3 = n2.renderContainer(e3, "update"), r2 = new he(n2, n2.el, n2.id, t3, null);
                i2 = n2.performPatch(r2, true);
              }), this.dispatchEvents(t2), i2 && this.joinNewChildren();
            } }, { key: "renderContainer", value: function(e3, t2) {
              var n2 = this;
              return this.liveSocket.time("toString diff (".concat(t2, ")"), function() {
                var t3 = n2.el.tagName, i2 = e3 ? n2.rendered.componentCIDs(e3).concat(n2.pruningCIDs) : null, r2 = n2.rendered.toString(i2);
                return "<".concat(t3, ">").concat(r2, "</").concat(t3, ">");
              });
            } }, { key: "componentPatch", value: function(e3, t2) {
              if (Q(e3))
                return false;
              var n2 = this.rendered.componentToString(t2), i2 = new he(this, this.el, this.id, n2, t2);
              return this.performPatch(i2, true);
            } }, { key: "getHook", value: function(e3) {
              return this.viewHooks[pe.elementID(e3)];
            } }, { key: "addHook", value: function(e3) {
              if (!pe.elementID(e3) && e3.getAttribute) {
                var t2 = e3.getAttribute("data-phx-".concat("hook")) || e3.getAttribute(this.binding("hook"));
                if (!t2 || this.ownsElement(e3)) {
                  var n2 = this.liveSocket.getHookCallbacks(t2);
                  if (n2) {
                    e3.id || z('no DOM ID for hook "'.concat(t2, '". Hooks require a unique ID on each element.'), e3);
                    var i2 = new pe(this, e3, n2);
                    return this.viewHooks[pe.elementID(i2.el)] = i2, i2;
                  }
                  t2 !== null && z('unknown hook found for "'.concat(t2, '"'), e3);
                }
              }
            } }, { key: "destroyHook", value: function(e3) {
              e3.__trigger__("destroyed"), e3.__cleanup__(), delete this.viewHooks[pe.elementID(e3.el)];
            } }, { key: "applyPendingUpdates", value: function() {
              var e3 = this;
              this.pendingDiffs.forEach(function(t2) {
                var n2 = t2.diff, i2 = t2.events;
                return e3.update(n2, i2);
              }), this.pendingDiffs = [];
            } }, { key: "onChannel", value: function(e3, t2) {
              var n2 = this;
              this.liveSocket.onChannel(this.channel, e3, function(e4) {
                n2.isJoinPending() ? n2.root.pendingJoinOps.push([n2, function() {
                  return t2(e4);
                }]) : t2(e4);
              });
            } }, { key: "bindChannel", value: function() {
              var e3 = this;
              this.liveSocket.onChannel(this.channel, "diff", function(t2) {
                e3.applyDiff("update", t2, function(t3) {
                  var n2 = t3.diff, i2 = t3.events;
                  return e3.update(n2, i2);
                });
              }), this.onChannel("redirect", function(t2) {
                var n2 = t2.to, i2 = t2.flash;
                return e3.onRedirect({ to: n2, flash: i2 });
              }), this.onChannel("live_patch", function(t2) {
                return e3.onLivePatch(t2);
              }), this.onChannel("live_redirect", function(t2) {
                return e3.onLiveRedirect(t2);
              }), this.channel.onError(function(t2) {
                return e3.onError(t2);
              }), this.channel.onClose(function(t2) {
                return e3.onClose(t2);
              });
            } }, { key: "destroyAllChildren", value: function() {
              for (var e3 in this.root.children[this.id])
                this.getChildById(e3).destroy();
            } }, { key: "onLiveRedirect", value: function(e3) {
              var t2 = e3.to, n2 = e3.kind, i2 = e3.flash, r2 = this.expandURL(t2);
              this.liveSocket.historyRedirect(r2, n2, i2);
            } }, { key: "onLivePatch", value: function(e3) {
              var t2 = e3.to, n2 = e3.kind;
              this.href = this.expandURL(t2), this.liveSocket.historyPatch(t2, n2);
            } }, { key: "expandURL", value: function(e3) {
              return e3.startsWith("/") ? "".concat(window.location.protocol, "//").concat(window.location.host).concat(e3) : e3;
            } }, { key: "onRedirect", value: function(e3) {
              var t2 = e3.to, n2 = e3.flash;
              this.liveSocket.redirect(t2, n2);
            } }, { key: "isDestroyed", value: function() {
              return this.destroyed;
            } }, { key: "join", value: function(e3) {
              var t2 = this;
              this.parent || (this.stopCallback = this.liveSocket.withPageLoading({ to: this.href, kind: "initial" })), this.joinCallback = function() {
                return e3 && e3(t2, t2.joinCount);
              }, this.liveSocket.wrapPush(this, { timeout: false }, function() {
                return t2.channel.join().receive("ok", function(e4) {
                  return t2.onJoin(e4);
                }).receive("error", function(e4) {
                  return t2.onJoinError(e4);
                }).receive("timeout", function() {
                  return t2.onJoinError({ reason: "timeout" });
                });
              });
            } }, { key: "onJoinError", value: function(e3) {
              return (e3.redirect || e3.live_redirect) && (this.joinPending = false, this.channel.leave()), e3.redirect ? this.onRedirect(e3.redirect) : e3.live_redirect ? this.onLiveRedirect(e3.live_redirect) : (this.log("error", function() {
                return ["unable to join", e3];
              }), this.liveSocket.reloadWithJitter(this));
            } }, { key: "onClose", value: function(e3) {
              if (!this.isDestroyed()) {
                if (this.isJoinPending() || this.liveSocket.hasPendingLink() && e3 !== "leave")
                  return this.liveSocket.reloadWithJitter(this);
                this.destroyAllChildren(), this.liveSocket.dropActiveElement(this), document.activeElement && document.activeElement.blur(), this.liveSocket.isUnloaded() && this.showLoader(200);
              }
            } }, { key: "onError", value: function(e3) {
              this.onClose(e3), this.log("error", function() {
                return ["view crashed", e3];
              }), this.liveSocket.isUnloaded() || this.displayError();
            } }, { key: "displayError", value: function() {
              this.isMain() && le.dispatchEvent(window, "phx:page-loading-start", { to: this.href, kind: "error" }), this.showLoader(), this.setContainerClasses("phx-disconnected", "phx-error");
            } }, { key: "pushWithReply", value: function(e3, t2, n2) {
              var i2 = this, r2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function() {
              }, o2 = x(e3 ? e3() : [null, []], 2), a2 = o2[0], u2 = x(o2[1], 1)[0], s2 = function() {
              };
              return u2 && u2.getAttribute(this.binding("page-loading")) !== null && (s2 = this.liveSocket.withPageLoading({ kind: "element", target: u2 })), typeof n2.cid != "number" && delete n2.cid, this.liveSocket.wrapPush(this, { timeout: true }, function() {
                return i2.channel.push(t2, n2, 3e4).receive("ok", function(e4) {
                  var t3 = null;
                  a2 !== null && i2.undoRefs(a2), e4.diff && (t3 = i2.applyDiff("update", e4.diff, function(e5) {
                    var t4 = e5.diff, n3 = e5.events;
                    i2.update(t4, n3);
                  })), e4.redirect && i2.onRedirect(e4.redirect), e4.live_patch && i2.onLivePatch(e4.live_patch), e4.live_redirect && i2.onLiveRedirect(e4.live_redirect), s2(), r2(e4, t3);
                });
              });
            } }, { key: "undoRefs", value: function(e3) {
              var t2 = this;
              le.all(this.el, "[".concat(F, '="').concat(e3, '"]'), function(e4) {
                e4.removeAttribute(F), e4.getAttribute("data-phx-readonly") !== null && (e4.readOnly = false, e4.removeAttribute("data-phx-readonly")), e4.getAttribute("data-phx-disabled") !== null && (e4.disabled = false, e4.removeAttribute("data-phx-disabled")), H.forEach(function(t3) {
                  return le.removeClass(e4, t3);
                });
                var n2 = e4.getAttribute("data-phx-disable-with-restore");
                n2 !== null && (e4.innerText = n2, e4.removeAttribute("data-phx-disable-with-restore"));
                var i2 = le.private(e4, F);
                if (i2) {
                  var r2 = t2.triggerBeforeUpdateHook(e4, i2);
                  he.patchEl(e4, i2, t2.liveSocket.getActiveElement()), r2 && t2.triggerUpdatedHook(r2), le.deletePrivate(e4, F);
                }
              });
            } }, { key: "putRef", value: function(e3, t2) {
              var n2 = this.ref++, i2 = this.binding("disable-with");
              return e3.forEach(function(e4) {
                e4.classList.add("phx-".concat(t2, "-loading")), e4.setAttribute(F, n2);
                var r2 = e4.getAttribute(i2);
                r2 !== null && (e4.getAttribute("data-phx-disable-with-restore") || e4.setAttribute("data-phx-disable-with-restore", e4.innerText), e4.innerText = r2);
              }), [n2, e3];
            } }, { key: "componentID", value: function(e3) {
              var t2 = e3.getAttribute && e3.getAttribute(j);
              return t2 ? parseInt(t2) : null;
            } }, { key: "targetComponentID", value: function(e3, t2) {
              return e3.getAttribute(this.binding("target")) ? this.closestComponentID(t2) : null;
            } }, { key: "closestComponentID", value: function(e3) {
              var t2 = this;
              return e3 ? Z(e3.closest("[".concat(j, "]")), function(e4) {
                return t2.ownsElement(e4) && t2.componentID(e4);
              }) : null;
            } }, { key: "pushHookEvent", value: function(e3, t2, n2, i2) {
              var r2 = x(this.putRef([], "hook"), 2), o2 = r2[0], a2 = r2[1];
              return this.pushWithReply(function() {
                return [o2, a2];
              }, "event", { type: "hook", event: t2, value: n2, cid: this.closestComponentID(e3) }, function(e4, t3) {
                return i2(t3, o2);
              }), o2;
            } }, { key: "extractMeta", value: function(e3, t2) {
              for (var n2 = this.binding("value-"), i2 = 0; i2 < e3.attributes.length; i2++) {
                var r2 = e3.attributes[i2].name;
                r2.startsWith(n2) && (t2[r2.replace(n2, "")] = e3.getAttribute(r2));
              }
              return e3.value !== void 0 && (t2.value = e3.value, e3.tagName === "INPUT" && U.indexOf(e3.type) >= 0 && !e3.checked && delete t2.value), t2;
            } }, { key: "pushEvent", value: function(e3, t2, n2, i2, r2) {
              var o2 = this;
              this.pushWithReply(function() {
                return o2.putRef([t2], e3);
              }, "event", { type: e3, event: i2, value: this.extractMeta(t2, r2), cid: this.targetComponentID(t2, n2) });
            } }, { key: "pushKey", value: function(e3, t2, n2, i2, r2) {
              var o2 = this;
              this.pushWithReply(function() {
                return o2.putRef([e3], n2);
              }, "event", { type: n2, event: i2, value: this.extractMeta(e3, r2), cid: this.targetComponentID(e3, t2) });
            } }, { key: "pushFileProgress", value: function(e3, t2, n2) {
              var i2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function() {
              };
              this.liveSocket.withinOwners(e3.form, function(r2, o2) {
                r2.pushWithReply(null, "progress", { event: e3.getAttribute(r2.binding("progress")), ref: e3.getAttribute("data-phx-upload-ref"), entry_ref: t2, progress: n2, cid: r2.targetComponentID(e3.form, o2) }, i2);
              });
            } }, { key: "pushInput", value: function(e3, t2, n2, i2, r2) {
              var o2 = this, a2 = this.targetComponentID(e3.form, t2), u2 = function() {
                return o2.putRef([e3, e3.form], "change");
              }, s2 = ae(e3.form, { _target: i2.name });
              e3.files && e3.files.length > 0 && ie.trackFiles(e3, Array.from(e3.files));
              var c2 = { type: "form", event: n2, value: s2, uploads: ie.serializeUploads(e3), cid: a2 };
              this.pushWithReply(u2, "event", c2, function(n3) {
                if (e3.type === "file" && e3.getAttribute("data-phx-auto-upload") !== null) {
                  if (ie.filesAwaitingPreflight(e3).length > 0) {
                    var i3 = x(u2(), 2), s3 = i3[0];
                    i3[1];
                    o2.uploadFiles(e3.form, t2, s3, a2, function(t3) {
                      r2 && r2(n3), o2.triggerAwaitingSubmit(e3.form);
                    });
                  }
                } else
                  r2 && r2(n3);
              });
            } }, { key: "triggerAwaitingSubmit", value: function(e3) {
              var t2 = this.getScheduledSubmit(e3);
              if (t2) {
                var n2 = x(t2, 3), i2 = (n2[0], n2[1], n2[2]);
                this.cancelSubmit(e3), i2();
              }
            } }, { key: "getScheduledSubmit", value: function(e3) {
              return this.formSubmits.find(function(t2) {
                var n2 = x(t2, 2), i2 = n2[0];
                n2[1];
                return i2.isSameNode(e3);
              });
            } }, { key: "scheduleSubmit", value: function(e3, t2, n2) {
              if (this.getScheduledSubmit(e3))
                return true;
              this.formSubmits.push([e3, t2, n2]);
            } }, { key: "cancelSubmit", value: function(e3) {
              var t2 = this;
              this.formSubmits = this.formSubmits.filter(function(n2) {
                var i2 = x(n2, 3), r2 = i2[0], o2 = i2[1];
                i2[2];
                return !r2.isSameNode(e3) || (t2.undoRefs(o2), false);
              });
            } }, { key: "pushFormSubmit", value: function(e3, t2, n2, i2) {
              var r2 = this, o2 = function(e4) {
                return !(G(e4, "".concat(r2.binding("update"), "=ignore"), e4.form) || G(e4, "data-phx-update=ignore", e4.form));
              }, a2 = function() {
                var t3 = le.all(e3, "[".concat(r2.binding("disable-with"), "]")), n3 = le.all(e3, "button").filter(o2), i3 = le.all(e3, "input,textarea,select").filter(o2);
                return n3.forEach(function(e4) {
                  e4.setAttribute("data-phx-disabled", e4.disabled), e4.disabled = true;
                }), i3.forEach(function(e4) {
                  e4.setAttribute("data-phx-readonly", e4.readOnly), e4.readOnly = true, e4.files && (e4.setAttribute("data-phx-disabled", e4.disabled), e4.disabled = true);
                }), e3.setAttribute(r2.binding("page-loading"), ""), r2.putRef([e3].concat(t3).concat(n3).concat(i3), "submit");
              }, u2 = this.targetComponentID(e3, t2);
              if (ie.hasUploadsInProgress(e3)) {
                var s2 = x(a2(), 2), c2 = s2[0];
                s2[1];
                return this.scheduleSubmit(e3, c2, function() {
                  return r2.pushFormSubmit(e3, t2, n2, i2);
                });
              }
              if (ie.inputsAwaitingPreflight(e3).length > 0) {
                var l2 = x(a2(), 2), d2 = l2[0], h2 = l2[1], f2 = function() {
                  return [d2, h2];
                };
                this.uploadFiles(e3, t2, d2, u2, function(t3) {
                  var o3 = ae(e3, {});
                  r2.pushWithReply(f2, "event", { type: "form", event: n2, value: o3, cid: u2 }, i2);
                });
              } else {
                var v2 = ae(e3);
                this.pushWithReply(a2, "event", { type: "form", event: n2, value: v2, cid: u2 }, i2);
              }
            } }, { key: "uploadFiles", value: function(e3, t2, n2, i2, r2) {
              var o2 = this, a2 = this.joinCount;
              ie.activeFileInputs(e3).forEach(function(e4) {
                var i3 = new ie(e4, o2, r2);
                o2.uploaders[e4] = i3;
                var u2 = i3.entries().map(function(e5) {
                  return e5.toPreflightPayload();
                }), s2 = { ref: e4.getAttribute("data-phx-upload-ref"), entries: u2, cid: o2.targetComponentID(e4.form, t2) };
                o2.log("upload", function() {
                  return ["sending preflight request", s2];
                }), o2.pushWithReply(null, "allow_upload", s2, function(e5) {
                  if (o2.log("upload", function() {
                    return ["got preflight response", e5];
                  }), e5.error) {
                    o2.undoRefs(n2);
                    var t3 = x(e5.error, 2), r3 = t3[0], u3 = t3[1];
                    o2.log("upload", function() {
                      return ["error for entry ".concat(r3), u3];
                    });
                  } else {
                    i3.initAdapterUpload(e5, function(e6) {
                      o2.channel.onError(function() {
                        o2.joinCount === a2 && e6();
                      });
                    }, o2.liveSocket);
                  }
                });
              });
            } }, { key: "pushFormRecovery", value: function(e3, t2) {
              var n2 = this;
              this.liveSocket.withinOwners(e3, function(i2, r2) {
                var o2 = e3.elements[0], a2 = e3.getAttribute(n2.binding("auto-recover")) || e3.getAttribute(n2.binding("change"));
                i2.pushInput(o2, r2, a2, o2, t2);
              });
            } }, { key: "pushLinkPatch", value: function(e3, t2, n2) {
              var i2 = this, r2 = this.liveSocket.setPendingLink(e3), o2 = t2 ? function() {
                return i2.putRef([t2], "click");
              } : null;
              this.pushWithReply(o2, "link", { url: e3 }, function(t3) {
                t3.link_redirect ? i2.liveSocket.replaceMain(e3, null, n2, r2) : i2.liveSocket.commitPendingLink(r2) && (i2.href = e3, i2.applyPendingUpdates(), n2 && n2());
              }).receive("timeout", function() {
                return i2.liveSocket.redirect(window.location.href);
              });
            } }, { key: "formsForRecovery", value: function(e3) {
              var t2 = this;
              if (this.joinCount <= 1)
                return [];
              var n2 = this.binding("change"), i2 = document.createElement("template");
              return i2.innerHTML = e3, le.all(this.el, "form[".concat(n2, "]")).filter(function(e4) {
                return t2.ownsElement(e4);
              }).filter(function(e4) {
                return e4.elements.length > 0;
              }).filter(function(e4) {
                return e4.getAttribute(t2.binding("auto-recover")) !== "ignore";
              }).filter(function(e4) {
                return i2.content.querySelector("form[".concat(n2, '="').concat(e4.getAttribute(n2), '"]'));
              });
            } }, { key: "maybePushComponentsDestroyed", value: function(e3) {
              var t2, n2 = this, i2 = e3.filter(function(e4) {
                return le.findComponentNodeList(n2.el, e4).length === 0;
              });
              i2.length > 0 && ((t2 = this.pruningCIDs).push.apply(t2, E(i2)), this.pushWithReply(null, "cids_will_destroy", { cids: i2 }, function() {
                n2.pruningCIDs = n2.pruningCIDs.filter(function(e5) {
                  return i2.indexOf(e5) !== -1;
                });
                var e4 = i2.filter(function(e5) {
                  return le.findComponentNodeList(n2.el, e5).length === 0;
                });
                e4.length > 0 && n2.pushWithReply(null, "cids_destroyed", { cids: e4 }, function(e5) {
                  n2.rendered.pruneCIDs(e5.cids);
                });
              }));
            } }, { key: "ownsElement", value: function(e3) {
              return e3.getAttribute("data-phx-parent-id") === this.id || Z(e3.closest(M), function(e4) {
                return e4.id;
              }) === this.id;
            } }, { key: "submitForm", value: function(e3, t2, n2) {
              var i2 = this;
              le.putPrivate(e3, "phx-has-submitted", true), this.liveSocket.blurActiveElement(this), this.pushFormSubmit(e3, t2, n2, function() {
                i2.liveSocket.restorePreviouslyActiveFocus();
              });
            } }, { key: "binding", value: function(e3) {
              return this.liveSocket.binding(e3);
            } }]), e2;
          }(), ve = 1, pe = function() {
            function e2(t2, n2, i2) {
              for (var r2 in T(this, e2), this.__view = t2, this.__liveSocket = t2.liveSocket, this.__callbacks = i2, this.__listeners = new Set(), this.el = n2, this.viewName = t2.name(), this.el.phxHookId = this.constructor.makeID(), this.__callbacks)
                this[r2] = this.__callbacks[r2];
            }
            return D(e2, null, [{ key: "makeID", value: function() {
              return ve++;
            } }, { key: "elementID", value: function(e3) {
              return e3.phxHookId;
            } }]), D(e2, [{ key: "pushEvent", value: function(e3) {
              var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
              };
              return this.__view.pushHookEvent(null, e3, t2, n2);
            } }, { key: "pushEventTo", value: function(e3, t2) {
              var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function() {
              };
              return this.__view.withinTargets(e3, function(e4, r2) {
                return e4.pushHookEvent(r2, t2, n2, i2);
              });
            } }, { key: "handleEvent", value: function(e3, t2) {
              var n2 = function(n3, i2) {
                return i2 ? e3 : t2(n3.detail);
              };
              return window.addEventListener("phx:hook:".concat(e3), n2), this.__listeners.add(n2), n2;
            } }, { key: "removeHandleEvent", value: function(e3) {
              var t2 = e3(null, true);
              window.removeEventListener("phx:hook:".concat(t2), e3), this.__listeners.delete(e3);
            } }, { key: "__cleanup__", value: function() {
              var e3 = this;
              this.__listeners.forEach(function(t2) {
                return e3.removeHandleEvent(t2);
              });
            } }, { key: "__trigger__", value: function(e3) {
              var t2 = this.__callbacks[e3];
              t2 && t2.call(this);
            } }]), e2;
          }();
          t.default = se;
        }, function(e, t) {
          var n;
          n = function() {
            return this;
          }();
          try {
            n = n || Function("return this")() || (0, eval)("this");
          } catch (e2) {
            typeof window == "object" && (n = window);
          }
          e.exports = n;
        }, function(e, t, n) {
          (function(t2) {
            t2.Phoenix || (t2.Phoenix = {}), e.exports = t2.Phoenix.LiveView = n(0);
          }).call(this, n(1));
        }]);
      });
    }
  });

  // node_modules/topbar/topbar.min.js
  var require_topbar_min = __commonJS({
    "node_modules/topbar/topbar.min.js"(exports, module) {
      (function(window2, document2) {
        "use strict";
        !function() {
          for (var lastTime = 0, vendors = ["ms", "moz", "webkit", "o"], x = 0; x < vendors.length && !window2.requestAnimationFrame; ++x)
            window2.requestAnimationFrame = window2[vendors[x] + "RequestAnimationFrame"], window2.cancelAnimationFrame = window2[vendors[x] + "CancelAnimationFrame"] || window2[vendors[x] + "CancelRequestAnimationFrame"];
          window2.requestAnimationFrame || (window2.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime(), timeToCall = Math.max(0, 16 - (currTime - lastTime)), id = window2.setTimeout(function() {
              callback(currTime + timeToCall);
            }, timeToCall);
            return lastTime = currTime + timeToCall, id;
          }), window2.cancelAnimationFrame || (window2.cancelAnimationFrame = function(id) {
            clearTimeout(id);
          });
        }();
        function repaint() {
          canvas.width = window2.innerWidth, canvas.height = 5 * options.barThickness;
          var ctx = canvas.getContext("2d");
          ctx.shadowBlur = options.shadowBlur, ctx.shadowColor = options.shadowColor;
          var stop, lineGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
          for (stop in options.barColors)
            lineGradient.addColorStop(stop, options.barColors[stop]);
          ctx.lineWidth = options.barThickness, ctx.beginPath(), ctx.moveTo(0, options.barThickness / 2), ctx.lineTo(Math.ceil(currentProgress * canvas.width), options.barThickness / 2), ctx.strokeStyle = lineGradient, ctx.stroke();
        }
        var canvas, progressTimerId, fadeTimerId, currentProgress, showing, options = { autoRun: true, barThickness: 3, barColors: { 0: "rgba(26,  188, 156, .9)", ".25": "rgba(52,  152, 219, .9)", ".50": "rgba(241, 196, 15,  .9)", ".75": "rgba(230, 126, 34,  .9)", "1.0": "rgba(211, 84,  0,   .9)" }, shadowBlur: 10, shadowColor: "rgba(0,   0,   0,   .6)", className: null }, topbar2 = { config: function(opts) {
          for (var key in opts)
            options.hasOwnProperty(key) && (options[key] = opts[key]);
        }, show: function() {
          var type, handler, elem;
          showing || (showing = true, fadeTimerId !== null && window2.cancelAnimationFrame(fadeTimerId), canvas || ((elem = (canvas = document2.createElement("canvas")).style).position = "fixed", elem.top = elem.left = elem.right = elem.margin = elem.padding = 0, elem.zIndex = 100001, elem.display = "none", options.className && canvas.classList.add(options.className), document2.body.appendChild(canvas), type = "resize", handler = repaint, (elem = window2).addEventListener ? elem.addEventListener(type, handler, false) : elem.attachEvent ? elem.attachEvent("on" + type, handler) : elem["on" + type] = handler), canvas.style.opacity = 1, canvas.style.display = "block", topbar2.progress(0), options.autoRun && function loop() {
            progressTimerId = window2.requestAnimationFrame(loop), topbar2.progress("+" + 0.05 * Math.pow(1 - Math.sqrt(currentProgress), 2));
          }());
        }, progress: function(to) {
          return to === void 0 || (typeof to == "string" && (to = (0 <= to.indexOf("+") || 0 <= to.indexOf("-") ? currentProgress : 0) + parseFloat(to)), currentProgress = 1 < to ? 1 : to, repaint()), currentProgress;
        }, hide: function() {
          showing && (showing = false, progressTimerId != null && (window2.cancelAnimationFrame(progressTimerId), progressTimerId = null), function loop() {
            return 1 <= topbar2.progress("+.1") && (canvas.style.opacity -= 0.05, canvas.style.opacity <= 0.05) ? (canvas.style.display = "none", void (fadeTimerId = null)) : void (fadeTimerId = window2.requestAnimationFrame(loop));
          }());
        } };
        typeof module == "object" && typeof module.exports == "object" ? module.exports = topbar2 : typeof define == "function" && define.amd ? define(function() {
          return topbar2;
        }) : this.topbar = topbar2;
      }).call(exports, window, document);
    }
  });

  // js/app.js
  var import_uikit = __toModule(require_uikit());

  // ../deps/phoenix_html/priv/static/phoenix_html.js
  "use strict";
  (function() {
    var PolyfillEvent = eventConstructor();
    function eventConstructor() {
      if (typeof window.CustomEvent === "function")
        return window.CustomEvent;
      function CustomEvent2(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: void 0 };
        var evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
      }
      CustomEvent2.prototype = window.Event.prototype;
      return CustomEvent2;
    }
    function buildHiddenInput(name, value) {
      var input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      return input;
    }
    function handleClick(element) {
      var to = element.getAttribute("data-to"), method = buildHiddenInput("_method", element.getAttribute("data-method")), csrf = buildHiddenInput("_csrf_token", element.getAttribute("data-csrf")), form = document.createElement("form"), target = element.getAttribute("target");
      form.method = element.getAttribute("data-method") === "get" ? "get" : "post";
      form.action = to;
      form.style.display = "hidden";
      if (target)
        form.target = target;
      form.appendChild(csrf);
      form.appendChild(method);
      document.body.appendChild(form);
      form.submit();
    }
    window.addEventListener("click", function(e) {
      var element = e.target;
      while (element && element.getAttribute) {
        var phoenixLinkEvent = new PolyfillEvent("phoenix.link.click", {
          "bubbles": true,
          "cancelable": true
        });
        if (!element.dispatchEvent(phoenixLinkEvent)) {
          e.preventDefault();
          e.stopImmediatePropagation();
          return false;
        }
        if (element.getAttribute("data-method")) {
          handleClick(element);
          e.preventDefault();
          return false;
        } else {
          element = element.parentNode;
        }
      }
    }, false);
    window.addEventListener("phoenix.link.click", function(e) {
      var message = e.target.getAttribute("data-confirm");
      if (message && !window.confirm(message)) {
        e.preventDefault();
      }
    }, false);
  })();

  // js/app.js
  var import_phoenix = __toModule(require_phoenix());
  var import_phoenix_live_view = __toModule(require_phoenix_live_view());
  var import_topbar = __toModule(require_topbar_min());

  // js/_hooks/index.js
  var hooks_default = {};

  // js/app.js
  var csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
  var liveSocket = new import_phoenix_live_view.LiveSocket("/live", import_phoenix.Socket, {
    params: { _csrf_token: csrfToken },
    hooks: hooks_default
  });
  import_topbar.default.config({ barColors: { 0: "#29d" }, shadowColor: "rgba(0, 0, 0, .3)" });
  window.addEventListener("phx:page-loading-start", (info) => import_topbar.default.show());
  window.addEventListener("phx:page-loading-stop", (info) => import_topbar.default.hide());
  liveSocket.connect();
  window.liveSocket = liveSocket;
})();
/*! UIkit 3.7.3 | https://www.getuikit.com | (c) 2014 - 2021 YOOtheme | MIT License */
/**
 * @license MIT
 * topbar 1.0.0, 2021-01-06
 * http://buunguyen.github.io/topbar
 * Copyright (c) 2021 Buu Nguyen
 */
