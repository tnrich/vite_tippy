function AO(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var tE = { exports: {} }, hv = {}, nE = { exports: {} }, Ht = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K1;
function zO() {
  if (K1)
    return Ht;
  K1 = 1;
  var v = Symbol.for("react.element"), h = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), H = Symbol.for("react.provider"), E = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), Q = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), te = Symbol.iterator;
  function le(x) {
    return x === null || typeof x != "object" ? null : (x = te && x[te] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var J = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ve = Object.assign, xe = {};
  function Re(x, Z, he) {
    this.props = x, this.context = Z, this.refs = xe, this.updater = he || J;
  }
  Re.prototype.isReactComponent = {}, Re.prototype.setState = function(x, Z) {
    if (typeof x != "object" && typeof x != "function" && x != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, x, Z, "setState");
  }, Re.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function Ke() {
  }
  Ke.prototype = Re.prototype;
  function ze(x, Z, he) {
    this.props = x, this.context = Z, this.refs = xe, this.updater = he || J;
  }
  var Oe = ze.prototype = new Ke();
  Oe.constructor = ze, ve(Oe, Re.prototype), Oe.isPureReactComponent = !0;
  var M = Array.isArray, pe = Object.prototype.hasOwnProperty, ue = { current: null }, Te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function mt(x, Z, he) {
    var We, Pe = {}, pt = null, ut = null;
    if (Z != null)
      for (We in Z.ref !== void 0 && (ut = Z.ref), Z.key !== void 0 && (pt = "" + Z.key), Z)
        pe.call(Z, We) && !Te.hasOwnProperty(We) && (Pe[We] = Z[We]);
    var Ct = arguments.length - 2;
    if (Ct === 1)
      Pe.children = he;
    else if (1 < Ct) {
      for (var ot = Array(Ct), _t = 0; _t < Ct; _t++)
        ot[_t] = arguments[_t + 2];
      Pe.children = ot;
    }
    if (x && x.defaultProps)
      for (We in Ct = x.defaultProps, Ct)
        Pe[We] === void 0 && (Pe[We] = Ct[We]);
    return { $$typeof: v, type: x, key: pt, ref: ut, props: Pe, _owner: ue.current };
  }
  function Dt(x, Z) {
    return { $$typeof: v, type: x.type, key: Z, ref: x.ref, props: x.props, _owner: x._owner };
  }
  function at(x) {
    return typeof x == "object" && x !== null && x.$$typeof === v;
  }
  function tt(x) {
    var Z = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(he) {
      return Z[he];
    });
  }
  var yt = /\/+/g;
  function we(x, Z) {
    return typeof x == "object" && x !== null && x.key != null ? tt("" + x.key) : Z.toString(36);
  }
  function $e(x, Z, he, We, Pe) {
    var pt = typeof x;
    (pt === "undefined" || pt === "boolean") && (x = null);
    var ut = !1;
    if (x === null)
      ut = !0;
    else
      switch (pt) {
        case "string":
        case "number":
          ut = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case v:
            case h:
              ut = !0;
          }
      }
    if (ut)
      return ut = x, Pe = Pe(ut), x = We === "" ? "." + we(ut, 0) : We, M(Pe) ? (he = "", x != null && (he = x.replace(yt, "$&/") + "/"), $e(Pe, Z, he, "", function(_t) {
        return _t;
      })) : Pe != null && (at(Pe) && (Pe = Dt(Pe, he + (!Pe.key || ut && ut.key === Pe.key ? "" : ("" + Pe.key).replace(yt, "$&/") + "/") + x)), Z.push(Pe)), 1;
    if (ut = 0, We = We === "" ? "." : We + ":", M(x))
      for (var Ct = 0; Ct < x.length; Ct++) {
        pt = x[Ct];
        var ot = We + we(pt, Ct);
        ut += $e(pt, Z, he, ot, Pe);
      }
    else if (ot = le(x), typeof ot == "function")
      for (x = ot.call(x), Ct = 0; !(pt = x.next()).done; )
        pt = pt.value, ot = We + we(pt, Ct++), ut += $e(pt, Z, he, ot, Pe);
    else if (pt === "object")
      throw Z = String(x), Error("Objects are not valid as a React child (found: " + (Z === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : Z) + "). If you meant to render a collection of children, use an array instead.");
    return ut;
  }
  function Et(x, Z, he) {
    if (x == null)
      return x;
    var We = [], Pe = 0;
    return $e(x, We, "", "", function(pt) {
      return Z.call(he, pt, Pe++);
    }), We;
  }
  function it(x) {
    if (x._status === -1) {
      var Z = x._result;
      Z = Z(), Z.then(function(he) {
        (x._status === 0 || x._status === -1) && (x._status = 1, x._result = he);
      }, function(he) {
        (x._status === 0 || x._status === -1) && (x._status = 2, x._result = he);
      }), x._status === -1 && (x._status = 0, x._result = Z);
    }
    if (x._status === 1)
      return x._result.default;
    throw x._result;
  }
  var ye = { current: null }, ne = { transition: null }, Ne = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: ne, ReactCurrentOwner: ue };
  return Ht.Children = { map: Et, forEach: function(x, Z, he) {
    Et(x, function() {
      Z.apply(this, arguments);
    }, he);
  }, count: function(x) {
    var Z = 0;
    return Et(x, function() {
      Z++;
    }), Z;
  }, toArray: function(x) {
    return Et(x, function(Z) {
      return Z;
    }) || [];
  }, only: function(x) {
    if (!at(x))
      throw Error("React.Children.only expected to receive a single React element child.");
    return x;
  } }, Ht.Component = Re, Ht.Fragment = y, Ht.Profiler = A, Ht.PureComponent = ze, Ht.StrictMode = N, Ht.Suspense = L, Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ne, Ht.cloneElement = function(x, Z, he) {
    if (x == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
    var We = ve({}, x.props), Pe = x.key, pt = x.ref, ut = x._owner;
    if (Z != null) {
      if (Z.ref !== void 0 && (pt = Z.ref, ut = ue.current), Z.key !== void 0 && (Pe = "" + Z.key), x.type && x.type.defaultProps)
        var Ct = x.type.defaultProps;
      for (ot in Z)
        pe.call(Z, ot) && !Te.hasOwnProperty(ot) && (We[ot] = Z[ot] === void 0 && Ct !== void 0 ? Ct[ot] : Z[ot]);
    }
    var ot = arguments.length - 2;
    if (ot === 1)
      We.children = he;
    else if (1 < ot) {
      Ct = Array(ot);
      for (var _t = 0; _t < ot; _t++)
        Ct[_t] = arguments[_t + 2];
      We.children = Ct;
    }
    return { $$typeof: v, type: x.type, key: Pe, ref: pt, props: We, _owner: ut };
  }, Ht.createContext = function(x) {
    return x = { $$typeof: E, _currentValue: x, _currentValue2: x, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, x.Provider = { $$typeof: H, _context: x }, x.Consumer = x;
  }, Ht.createElement = mt, Ht.createFactory = function(x) {
    var Z = mt.bind(null, x);
    return Z.type = x, Z;
  }, Ht.createRef = function() {
    return { current: null };
  }, Ht.forwardRef = function(x) {
    return { $$typeof: X, render: x };
  }, Ht.isValidElement = at, Ht.lazy = function(x) {
    return { $$typeof: W, _payload: { _status: -1, _result: x }, _init: it };
  }, Ht.memo = function(x, Z) {
    return { $$typeof: Q, type: x, compare: Z === void 0 ? null : Z };
  }, Ht.startTransition = function(x) {
    var Z = ne.transition;
    ne.transition = {};
    try {
      x();
    } finally {
      ne.transition = Z;
    }
  }, Ht.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Ht.useCallback = function(x, Z) {
    return ye.current.useCallback(x, Z);
  }, Ht.useContext = function(x) {
    return ye.current.useContext(x);
  }, Ht.useDebugValue = function() {
  }, Ht.useDeferredValue = function(x) {
    return ye.current.useDeferredValue(x);
  }, Ht.useEffect = function(x, Z) {
    return ye.current.useEffect(x, Z);
  }, Ht.useId = function() {
    return ye.current.useId();
  }, Ht.useImperativeHandle = function(x, Z, he) {
    return ye.current.useImperativeHandle(x, Z, he);
  }, Ht.useInsertionEffect = function(x, Z) {
    return ye.current.useInsertionEffect(x, Z);
  }, Ht.useLayoutEffect = function(x, Z) {
    return ye.current.useLayoutEffect(x, Z);
  }, Ht.useMemo = function(x, Z) {
    return ye.current.useMemo(x, Z);
  }, Ht.useReducer = function(x, Z, he) {
    return ye.current.useReducer(x, Z, he);
  }, Ht.useRef = function(x) {
    return ye.current.useRef(x);
  }, Ht.useState = function(x) {
    return ye.current.useState(x);
  }, Ht.useSyncExternalStore = function(x, Z, he) {
    return ye.current.useSyncExternalStore(x, Z, he);
  }, Ht.useTransition = function() {
    return ye.current.useTransition();
  }, Ht.version = "18.2.0", Ht;
}
var Sv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Sv.exports;
var Z1;
function jO() {
  return Z1 || (Z1 = 1, function(v, h) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var y = "18.2.0", N = Symbol.for("react.element"), A = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), X = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), Q = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), le = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), ve = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), Re = Symbol.iterator, Ke = "@@iterator";
      function ze(g) {
        if (g === null || typeof g != "object")
          return null;
        var R = Re && g[Re] || g[Ke];
        return typeof R == "function" ? R : null;
      }
      var Oe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, M = {
        transition: null
      }, pe = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ue = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Te = {}, mt = null;
      function Dt(g) {
        mt = g;
      }
      Te.setExtraStackFrame = function(g) {
        mt = g;
      }, Te.getCurrentStack = null, Te.getStackAddendum = function() {
        var g = "";
        mt && (g += mt);
        var R = Te.getCurrentStack;
        return R && (g += R() || ""), g;
      };
      var at = !1, tt = !1, yt = !1, we = !1, $e = !1, Et = {
        ReactCurrentDispatcher: Oe,
        ReactCurrentBatchConfig: M,
        ReactCurrentOwner: ue
      };
      Et.ReactDebugCurrentFrame = Te, Et.ReactCurrentActQueue = pe;
      function it(g) {
        {
          for (var R = arguments.length, V = new Array(R > 1 ? R - 1 : 0), $ = 1; $ < R; $++)
            V[$ - 1] = arguments[$];
          ne("warn", g, V);
        }
      }
      function ye(g) {
        {
          for (var R = arguments.length, V = new Array(R > 1 ? R - 1 : 0), $ = 1; $ < R; $++)
            V[$ - 1] = arguments[$];
          ne("error", g, V);
        }
      }
      function ne(g, R, V) {
        {
          var $ = Et.ReactDebugCurrentFrame, fe = $.getStackAddendum();
          fe !== "" && (R += "%s", V = V.concat([fe]));
          var nt = V.map(function(Ce) {
            return String(Ce);
          });
          nt.unshift("Warning: " + R), Function.prototype.apply.call(console[g], console, nt);
        }
      }
      var Ne = {};
      function x(g, R) {
        {
          var V = g.constructor, $ = V && (V.displayName || V.name) || "ReactClass", fe = $ + "." + R;
          if (Ne[fe])
            return;
          ye("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", R, $), Ne[fe] = !0;
        }
      }
      var Z = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(g) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(g, R, V) {
          x(g, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(g, R, V, $) {
          x(g, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(g, R, V, $) {
          x(g, "setState");
        }
      }, he = Object.assign, We = {};
      Object.freeze(We);
      function Pe(g, R, V) {
        this.props = g, this.context = R, this.refs = We, this.updater = V || Z;
      }
      Pe.prototype.isReactComponent = {}, Pe.prototype.setState = function(g, R) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, g, R, "setState");
      }, Pe.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      {
        var pt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ut = function(g, R) {
          Object.defineProperty(Pe.prototype, g, {
            get: function() {
              it("%s(...) is deprecated in plain JavaScript React classes. %s", R[0], R[1]);
            }
          });
        };
        for (var Ct in pt)
          pt.hasOwnProperty(Ct) && ut(Ct, pt[Ct]);
      }
      function ot() {
      }
      ot.prototype = Pe.prototype;
      function _t(g, R, V) {
        this.props = g, this.context = R, this.refs = We, this.updater = V || Z;
      }
      var xn = _t.prototype = new ot();
      xn.constructor = _t, he(xn, Pe.prototype), xn.isPureReactComponent = !0;
      function Dn() {
        var g = {
          current: null
        };
        return Object.seal(g), g;
      }
      var qn = Array.isArray;
      function Jt(g) {
        return qn(g);
      }
      function Mn(g) {
        {
          var R = typeof Symbol == "function" && Symbol.toStringTag, V = R && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return V;
        }
      }
      function Tn(g) {
        try {
          return hn(g), !1;
        } catch {
          return !0;
        }
      }
      function hn(g) {
        return "" + g;
      }
      function on(g) {
        if (Tn(g))
          return ye("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Mn(g)), hn(g);
      }
      function Xn(g, R, V) {
        var $ = g.displayName;
        if ($)
          return $;
        var fe = R.displayName || R.name || "";
        return fe !== "" ? V + "(" + fe + ")" : V;
      }
      function Kn(g) {
        return g.displayName || "Context";
      }
      function tn(g) {
        if (g == null)
          return null;
        if (typeof g.tag == "number" && ye("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
          return g.displayName || g.name || null;
        if (typeof g == "string")
          return g;
        switch (g) {
          case H:
            return "Fragment";
          case A:
            return "Portal";
          case X:
            return "Profiler";
          case E:
            return "StrictMode";
          case te:
            return "Suspense";
          case le:
            return "SuspenseList";
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case Q:
              var R = g;
              return Kn(R) + ".Consumer";
            case L:
              var V = g;
              return Kn(V._context) + ".Provider";
            case W:
              return Xn(g, g.render, "ForwardRef");
            case J:
              var $ = g.displayName || null;
              return $ !== null ? $ : tn(g.type) || "Memo";
            case ve: {
              var fe = g, nt = fe._payload, Ce = fe._init;
              try {
                return tn(Ce(nt));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var mn = Object.prototype.hasOwnProperty, Vn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, wn, Zn, An;
      An = {};
      function Jn(g) {
        if (mn.call(g, "ref")) {
          var R = Object.getOwnPropertyDescriptor(g, "ref").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return g.ref !== void 0;
      }
      function nn(g) {
        if (mn.call(g, "key")) {
          var R = Object.getOwnPropertyDescriptor(g, "key").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return g.key !== void 0;
      }
      function Bn(g, R) {
        var V = function() {
          wn || (wn = !0, ye("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        V.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: V,
          configurable: !0
        });
      }
      function ka(g, R) {
        var V = function() {
          Zn || (Zn = !0, ye("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        V.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: V,
          configurable: !0
        });
      }
      function zr(g) {
        if (typeof g.ref == "string" && ue.current && g.__self && ue.current.stateNode !== g.__self) {
          var R = tn(ue.current.type);
          An[R] || (ye('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R, g.ref), An[R] = !0);
        }
      }
      var me = function(g, R, V, $, fe, nt, Ce) {
        var Je = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: N,
          // Built-in properties that belong on the element
          type: g,
          key: R,
          ref: V,
          props: Ce,
          // Record the component responsible for creating this element.
          _owner: nt
        };
        return Je._store = {}, Object.defineProperty(Je._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Je, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: $
        }), Object.defineProperty(Je, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: fe
        }), Object.freeze && (Object.freeze(Je.props), Object.freeze(Je)), Je;
      };
      function Be(g, R, V) {
        var $, fe = {}, nt = null, Ce = null, Je = null, Ot = null;
        if (R != null) {
          Jn(R) && (Ce = R.ref, zr(R)), nn(R) && (on(R.key), nt = "" + R.key), Je = R.__self === void 0 ? null : R.__self, Ot = R.__source === void 0 ? null : R.__source;
          for ($ in R)
            mn.call(R, $) && !Vn.hasOwnProperty($) && (fe[$] = R[$]);
        }
        var Bt = arguments.length - 2;
        if (Bt === 1)
          fe.children = V;
        else if (Bt > 1) {
          for (var ln = Array(Bt), en = 0; en < Bt; en++)
            ln[en] = arguments[en + 2];
          Object.freeze && Object.freeze(ln), fe.children = ln;
        }
        if (g && g.defaultProps) {
          var sn = g.defaultProps;
          for ($ in sn)
            fe[$] === void 0 && (fe[$] = sn[$]);
        }
        if (nt || Ce) {
          var vn = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          nt && Bn(fe, vn), Ce && ka(fe, vn);
        }
        return me(g, nt, Ce, Je, Ot, ue.current, fe);
      }
      function wt(g, R) {
        var V = me(g.type, R, g.ref, g._self, g._source, g._owner, g.props);
        return V;
      }
      function F(g, R, V) {
        if (g == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
        var $, fe = he({}, g.props), nt = g.key, Ce = g.ref, Je = g._self, Ot = g._source, Bt = g._owner;
        if (R != null) {
          Jn(R) && (Ce = R.ref, Bt = ue.current), nn(R) && (on(R.key), nt = "" + R.key);
          var ln;
          g.type && g.type.defaultProps && (ln = g.type.defaultProps);
          for ($ in R)
            mn.call(R, $) && !Vn.hasOwnProperty($) && (R[$] === void 0 && ln !== void 0 ? fe[$] = ln[$] : fe[$] = R[$]);
        }
        var en = arguments.length - 2;
        if (en === 1)
          fe.children = V;
        else if (en > 1) {
          for (var sn = Array(en), vn = 0; vn < en; vn++)
            sn[vn] = arguments[vn + 2];
          fe.children = sn;
        }
        return me(g.type, nt, Ce, Je, Ot, Bt, fe);
      }
      function ce(g) {
        return typeof g == "object" && g !== null && g.$$typeof === N;
      }
      var _e = ".", Ze = ":";
      function st(g) {
        var R = /[=:]/g, V = {
          "=": "=0",
          ":": "=2"
        }, $ = g.replace(R, function(fe) {
          return V[fe];
        });
        return "$" + $;
      }
      var gt = !1, rn = /\/+/g;
      function kt(g) {
        return g.replace(rn, "$&/");
      }
      function Yt(g, R) {
        return typeof g == "object" && g !== null && g.key != null ? (on(g.key), st("" + g.key)) : R.toString(36);
      }
      function er(g, R, V, $, fe) {
        var nt = typeof g;
        (nt === "undefined" || nt === "boolean") && (g = null);
        var Ce = !1;
        if (g === null)
          Ce = !0;
        else
          switch (nt) {
            case "string":
            case "number":
              Ce = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case N:
                case A:
                  Ce = !0;
              }
          }
        if (Ce) {
          var Je = g, Ot = fe(Je), Bt = $ === "" ? _e + Yt(Je, 0) : $;
          if (Jt(Ot)) {
            var ln = "";
            Bt != null && (ln = kt(Bt) + "/"), er(Ot, R, ln, "", function(sd) {
              return sd;
            });
          } else
            Ot != null && (ce(Ot) && (Ot.key && (!Je || Je.key !== Ot.key) && on(Ot.key), Ot = wt(
              Ot,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              V + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (Ot.key && (!Je || Je.key !== Ot.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                kt("" + Ot.key) + "/"
              ) : "") + Bt
            )), R.push(Ot));
          return 1;
        }
        var en, sn, vn = 0, zt = $ === "" ? _e : $ + Ze;
        if (Jt(g))
          for (var Vi = 0; Vi < g.length; Vi++)
            en = g[Vi], sn = zt + Yt(en, Vi), vn += er(en, R, V, sn, fe);
        else {
          var cl = ze(g);
          if (typeof cl == "function") {
            var ss = g;
            cl === ss.entries && (gt || it("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), gt = !0);
            for (var ld = cl.call(ss), ii, cs = 0; !(ii = ld.next()).done; )
              en = ii.value, sn = zt + Yt(en, cs++), vn += er(en, R, V, sn, fe);
          } else if (nt === "object") {
            var fs = String(g);
            throw new Error("Objects are not valid as a React child (found: " + (fs === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : fs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return vn;
      }
      function Dr(g, R, V) {
        if (g == null)
          return g;
        var $ = [], fe = 0;
        return er(g, $, "", "", function(nt) {
          return R.call(V, nt, fe++);
        }), $;
      }
      function va(g) {
        var R = 0;
        return Dr(g, function() {
          R++;
        }), R;
      }
      function Xr(g, R, V) {
        Dr(g, function() {
          R.apply(this, arguments);
        }, V);
      }
      function hu(g) {
        return Dr(g, function(R) {
          return R;
        }) || [];
      }
      function ha(g) {
        if (!ce(g))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return g;
      }
      function ma(g) {
        var R = {
          $$typeof: Q,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: g,
          _currentValue2: g,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        R.Provider = {
          $$typeof: L,
          _context: R
        };
        var V = !1, $ = !1, fe = !1;
        {
          var nt = {
            $$typeof: Q,
            _context: R
          };
          Object.defineProperties(nt, {
            Provider: {
              get: function() {
                return $ || ($ = !0, ye("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), R.Provider;
              },
              set: function(Ce) {
                R.Provider = Ce;
              }
            },
            _currentValue: {
              get: function() {
                return R._currentValue;
              },
              set: function(Ce) {
                R._currentValue = Ce;
              }
            },
            _currentValue2: {
              get: function() {
                return R._currentValue2;
              },
              set: function(Ce) {
                R._currentValue2 = Ce;
              }
            },
            _threadCount: {
              get: function() {
                return R._threadCount;
              },
              set: function(Ce) {
                R._threadCount = Ce;
              }
            },
            Consumer: {
              get: function() {
                return V || (V = !0, ye("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), R.Consumer;
              }
            },
            displayName: {
              get: function() {
                return R.displayName;
              },
              set: function(Ce) {
                fe || (it("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Ce), fe = !0);
              }
            }
          }), R.Consumer = nt;
        }
        return R._currentRenderer = null, R._currentRenderer2 = null, R;
      }
      var ya = -1, mi = 0, ga = 1, yi = 2;
      function jr(g) {
        if (g._status === ya) {
          var R = g._result, V = R();
          if (V.then(function(nt) {
            if (g._status === mi || g._status === ya) {
              var Ce = g;
              Ce._status = ga, Ce._result = nt;
            }
          }, function(nt) {
            if (g._status === mi || g._status === ya) {
              var Ce = g;
              Ce._status = yi, Ce._result = nt;
            }
          }), g._status === ya) {
            var $ = g;
            $._status = mi, $._result = V;
          }
        }
        if (g._status === ga) {
          var fe = g._result;
          return fe === void 0 && ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, fe), "default" in fe || ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, fe), fe.default;
        } else
          throw g._result;
      }
      function Sa(g) {
        var R = {
          // We use these fields to store the result.
          _status: ya,
          _result: g
        }, V = {
          $$typeof: ve,
          _payload: R,
          _init: jr
        };
        {
          var $, fe;
          Object.defineProperties(V, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return $;
              },
              set: function(nt) {
                ye("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), $ = nt, Object.defineProperty(V, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return fe;
              },
              set: function(nt) {
                ye("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), fe = nt, Object.defineProperty(V, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return V;
      }
      function gi(g) {
        g != null && g.$$typeof === J ? ye("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof g != "function" ? ye("forwardRef requires a render function but was given %s.", g === null ? "null" : typeof g) : g.length !== 0 && g.length !== 2 && ye("forwardRef render functions accept exactly two parameters: props and ref. %s", g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), g != null && (g.defaultProps != null || g.propTypes != null) && ye("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var R = {
          $$typeof: W,
          render: g
        };
        {
          var V;
          Object.defineProperty(R, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return V;
            },
            set: function($) {
              V = $, !g.name && !g.displayName && (g.displayName = $);
            }
          });
        }
        return R;
      }
      var b;
      b = Symbol.for("react.module.reference");
      function re(g) {
        return !!(typeof g == "string" || typeof g == "function" || g === H || g === X || $e || g === E || g === te || g === le || we || g === xe || at || tt || yt || typeof g == "object" && g !== null && (g.$$typeof === ve || g.$$typeof === J || g.$$typeof === L || g.$$typeof === Q || g.$$typeof === W || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        g.$$typeof === b || g.getModuleId !== void 0));
      }
      function ge(g, R) {
        re(g) || ye("memo: The first argument must be a component. Instead received: %s", g === null ? "null" : typeof g);
        var V = {
          $$typeof: J,
          type: g,
          compare: R === void 0 ? null : R
        };
        {
          var $;
          Object.defineProperty(V, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return $;
            },
            set: function(fe) {
              $ = fe, !g.name && !g.displayName && (g.displayName = fe);
            }
          });
        }
        return V;
      }
      function ke() {
        var g = Oe.current;
        return g === null && ye(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), g;
      }
      function Tt(g) {
        var R = ke();
        if (g._context !== void 0) {
          var V = g._context;
          V.Consumer === g ? ye("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : V.Provider === g && ye("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return R.useContext(g);
      }
      function jt(g) {
        var R = ke();
        return R.useState(g);
      }
      function Rt(g, R, V) {
        var $ = ke();
        return $.useReducer(g, R, V);
      }
      function qe(g) {
        var R = ke();
        return R.useRef(g);
      }
      function Yn(g, R) {
        var V = ke();
        return V.useEffect(g, R);
      }
      function dn(g, R) {
        var V = ke();
        return V.useInsertionEffect(g, R);
      }
      function pn(g, R) {
        var V = ke();
        return V.useLayoutEffect(g, R);
      }
      function hr(g, R) {
        var V = ke();
        return V.useCallback(g, R);
      }
      function Si(g, R) {
        var V = ke();
        return V.useMemo(g, R);
      }
      function Jo(g, R, V) {
        var $ = ke();
        return $.useImperativeHandle(g, R, V);
      }
      function Pt(g, R) {
        {
          var V = ke();
          return V.useDebugValue(g, R);
        }
      }
      function ud() {
        var g = ke();
        return g.useTransition();
      }
      function ni(g) {
        var R = ke();
        return R.useDeferredValue(g);
      }
      function Mt() {
        var g = ke();
        return g.useId();
      }
      function Ei(g, R, V) {
        var $ = ke();
        return $.useSyncExternalStore(g, R, V);
      }
      var mu = 0, el, yu, Kr, is, Ur, us, os;
      function dc() {
      }
      dc.__reactDisabledLog = !0;
      function tl() {
        {
          if (mu === 0) {
            el = console.log, yu = console.info, Kr = console.warn, is = console.error, Ur = console.group, us = console.groupCollapsed, os = console.groupEnd;
            var g = {
              configurable: !0,
              enumerable: !0,
              value: dc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: g,
              log: g,
              warn: g,
              error: g,
              group: g,
              groupCollapsed: g,
              groupEnd: g
            });
          }
          mu++;
        }
      }
      function gu() {
        {
          if (mu--, mu === 0) {
            var g = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: he({}, g, {
                value: el
              }),
              info: he({}, g, {
                value: yu
              }),
              warn: he({}, g, {
                value: Kr
              }),
              error: he({}, g, {
                value: is
              }),
              group: he({}, g, {
                value: Ur
              }),
              groupCollapsed: he({}, g, {
                value: us
              }),
              groupEnd: he({}, g, {
                value: os
              })
            });
          }
          mu < 0 && ye("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ri = Et.ReactCurrentDispatcher, Ir;
      function Su(g, R, V) {
        {
          if (Ir === void 0)
            try {
              throw Error();
            } catch (fe) {
              var $ = fe.stack.trim().match(/\n( *(at )?)/);
              Ir = $ && $[1] || "";
            }
          return `
` + Ir + g;
        }
      }
      var Eu = !1, Cu;
      {
        var nl = typeof WeakMap == "function" ? WeakMap : Map;
        Cu = new nl();
      }
      function rl(g, R) {
        if (!g || Eu)
          return "";
        {
          var V = Cu.get(g);
          if (V !== void 0)
            return V;
        }
        var $;
        Eu = !0;
        var fe = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var nt;
        nt = ri.current, ri.current = null, tl();
        try {
          if (R) {
            var Ce = function() {
              throw Error();
            };
            if (Object.defineProperty(Ce.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Ce, []);
              } catch (zt) {
                $ = zt;
              }
              Reflect.construct(g, [], Ce);
            } else {
              try {
                Ce.call();
              } catch (zt) {
                $ = zt;
              }
              g.call(Ce.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (zt) {
              $ = zt;
            }
            g();
          }
        } catch (zt) {
          if (zt && $ && typeof zt.stack == "string") {
            for (var Je = zt.stack.split(`
`), Ot = $.stack.split(`
`), Bt = Je.length - 1, ln = Ot.length - 1; Bt >= 1 && ln >= 0 && Je[Bt] !== Ot[ln]; )
              ln--;
            for (; Bt >= 1 && ln >= 0; Bt--, ln--)
              if (Je[Bt] !== Ot[ln]) {
                if (Bt !== 1 || ln !== 1)
                  do
                    if (Bt--, ln--, ln < 0 || Je[Bt] !== Ot[ln]) {
                      var en = `
` + Je[Bt].replace(" at new ", " at ");
                      return g.displayName && en.includes("<anonymous>") && (en = en.replace("<anonymous>", g.displayName)), typeof g == "function" && Cu.set(g, en), en;
                    }
                  while (Bt >= 1 && ln >= 0);
                break;
              }
          }
        } finally {
          Eu = !1, ri.current = nt, gu(), Error.prepareStackTrace = fe;
        }
        var sn = g ? g.displayName || g.name : "", vn = sn ? Su(sn) : "";
        return typeof g == "function" && Cu.set(g, vn), vn;
      }
      function Hi(g, R, V) {
        return rl(g, !1);
      }
      function od(g) {
        var R = g.prototype;
        return !!(R && R.isReactComponent);
      }
      function Ci(g, R, V) {
        if (g == null)
          return "";
        if (typeof g == "function")
          return rl(g, od(g));
        if (typeof g == "string")
          return Su(g);
        switch (g) {
          case te:
            return Su("Suspense");
          case le:
            return Su("SuspenseList");
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case W:
              return Hi(g.render);
            case J:
              return Ci(g.type, R, V);
            case ve: {
              var $ = g, fe = $._payload, nt = $._init;
              try {
                return Ci(nt(fe), R, V);
              } catch {
              }
            }
          }
        return "";
      }
      var Qt = {}, al = Et.ReactDebugCurrentFrame;
      function oo(g) {
        if (g) {
          var R = g._owner, V = Ci(g.type, g._source, R ? R.type : null);
          al.setExtraStackFrame(V);
        } else
          al.setExtraStackFrame(null);
      }
      function il(g, R, V, $, fe) {
        {
          var nt = Function.call.bind(mn);
          for (var Ce in g)
            if (nt(g, Ce)) {
              var Je = void 0;
              try {
                if (typeof g[Ce] != "function") {
                  var Ot = Error(($ || "React class") + ": " + V + " type `" + Ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[Ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ot.name = "Invariant Violation", Ot;
                }
                Je = g[Ce](R, Ce, $, V, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Bt) {
                Je = Bt;
              }
              Je && !(Je instanceof Error) && (oo(fe), ye("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", V, Ce, typeof Je), oo(null)), Je instanceof Error && !(Je.message in Qt) && (Qt[Je.message] = !0, oo(fe), ye("Failed %s type: %s", V, Je.message), oo(null));
            }
        }
      }
      function Vt(g) {
        if (g) {
          var R = g._owner, V = Ci(g.type, g._source, R ? R.type : null);
          Dt(V);
        } else
          Dt(null);
      }
      var ul;
      ul = !1;
      function ol() {
        if (ue.current) {
          var g = tn(ue.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
      function vt(g) {
        if (g !== void 0) {
          var R = g.fileName.replace(/^.*[\\\/]/, ""), V = g.lineNumber;
          return `

Check your code at ` + R + ":" + V + ".";
        }
        return "";
      }
      function lo(g) {
        return g != null ? vt(g.__source) : "";
      }
      var On = {};
      function Zr(g) {
        var R = ol();
        if (!R) {
          var V = typeof g == "string" ? g : g.displayName || g.name;
          V && (R = `

Check the top-level render call using <` + V + ">.");
        }
        return R;
      }
      function Fr(g, R) {
        if (!(!g._store || g._store.validated || g.key != null)) {
          g._store.validated = !0;
          var V = Zr(R);
          if (!On[V]) {
            On[V] = !0;
            var $ = "";
            g && g._owner && g._owner !== ue.current && ($ = " It was passed a child from " + tn(g._owner.type) + "."), Vt(g), ye('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', V, $), Vt(null);
          }
        }
      }
      function Tu(g, R) {
        if (typeof g == "object") {
          if (Jt(g))
            for (var V = 0; V < g.length; V++) {
              var $ = g[V];
              ce($) && Fr($, R);
            }
          else if (ce(g))
            g._store && (g._store.validated = !0);
          else if (g) {
            var fe = ze(g);
            if (typeof fe == "function" && fe !== g.entries)
              for (var nt = fe.call(g), Ce; !(Ce = nt.next()).done; )
                ce(Ce.value) && Fr(Ce.value, R);
          }
        }
      }
      function zn(g) {
        {
          var R = g.type;
          if (R == null || typeof R == "string")
            return;
          var V;
          if (typeof R == "function")
            V = R.propTypes;
          else if (typeof R == "object" && (R.$$typeof === W || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          R.$$typeof === J))
            V = R.propTypes;
          else
            return;
          if (V) {
            var $ = tn(R);
            il(V, g.props, "prop", $, g);
          } else if (R.PropTypes !== void 0 && !ul) {
            ul = !0;
            var fe = tn(R);
            ye("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", fe || "Unknown");
          }
          typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && ye("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Xt(g) {
        {
          for (var R = Object.keys(g.props), V = 0; V < R.length; V++) {
            var $ = R[V];
            if ($ !== "children" && $ !== "key") {
              Vt(g), ye("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), Vt(null);
              break;
            }
          }
          g.ref !== null && (Vt(g), ye("Invalid attribute `ref` supplied to `React.Fragment`."), Vt(null));
        }
      }
      function pc(g, R, V) {
        var $ = re(g);
        if (!$) {
          var fe = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var nt = lo(R);
          nt ? fe += nt : fe += ol();
          var Ce;
          g === null ? Ce = "null" : Jt(g) ? Ce = "array" : g !== void 0 && g.$$typeof === N ? (Ce = "<" + (tn(g.type) || "Unknown") + " />", fe = " Did you accidentally export a JSX literal instead of a component?") : Ce = typeof g, ye("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ce, fe);
        }
        var Je = Be.apply(this, arguments);
        if (Je == null)
          return Je;
        if ($)
          for (var Ot = 2; Ot < arguments.length; Ot++)
            Tu(arguments[Ot], g);
        return g === H ? Xt(Je) : zn(Je), Je;
      }
      var Jr = !1;
      function or(g) {
        var R = pc.bind(null, g);
        return R.type = g, Jr || (Jr = !0, it("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(R, "type", {
          enumerable: !1,
          get: function() {
            return it("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: g
            }), g;
          }
        }), R;
      }
      function Ti(g, R, V) {
        for (var $ = F.apply(this, arguments), fe = 2; fe < arguments.length; fe++)
          Tu(arguments[fe], $.type);
        return zn($), $;
      }
      function vc(g, R) {
        var V = M.transition;
        M.transition = {};
        var $ = M.transition;
        M.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          g();
        } finally {
          if (M.transition = V, V === null && $._updatedFibers) {
            var fe = $._updatedFibers.size;
            fe > 10 && it("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), $._updatedFibers.clear();
          }
        }
      }
      var Pi = !1, wu = null;
      function hc(g) {
        if (wu === null)
          try {
            var R = ("require" + Math.random()).slice(0, 7), V = v && v[R];
            wu = V.call(v, "timers").setImmediate;
          } catch {
            wu = function(fe) {
              Pi === !1 && (Pi = !0, typeof MessageChannel > "u" && ye("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var nt = new MessageChannel();
              nt.port1.onmessage = fe, nt.port2.postMessage(void 0);
            };
          }
        return wu(g);
      }
      var La = 0, Ru = !1;
      function bu(g) {
        {
          var R = La;
          La++, pe.current === null && (pe.current = []);
          var V = pe.isBatchingLegacy, $;
          try {
            if (pe.isBatchingLegacy = !0, $ = g(), !V && pe.didScheduleLegacyUpdate) {
              var fe = pe.current;
              fe !== null && (pe.didScheduleLegacyUpdate = !1, Du(fe));
            }
          } catch (sn) {
            throw Aa(R), sn;
          } finally {
            pe.isBatchingLegacy = V;
          }
          if ($ !== null && typeof $ == "object" && typeof $.then == "function") {
            var nt = $, Ce = !1, Je = {
              then: function(sn, vn) {
                Ce = !0, nt.then(function(zt) {
                  Aa(R), La === 0 ? ll(zt, sn, vn) : sn(zt);
                }, function(zt) {
                  Aa(R), vn(zt);
                });
              }
            };
            return !Ru && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Ce || (Ru = !0, ye("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Je;
          } else {
            var Ot = $;
            if (Aa(R), La === 0) {
              var Bt = pe.current;
              Bt !== null && (Du(Bt), pe.current = null);
              var ln = {
                then: function(sn, vn) {
                  pe.current === null ? (pe.current = [], ll(Ot, sn, vn)) : sn(Ot);
                }
              };
              return ln;
            } else {
              var en = {
                then: function(sn, vn) {
                  sn(Ot);
                }
              };
              return en;
            }
          }
        }
      }
      function Aa(g) {
        g !== La - 1 && ye("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), La = g;
      }
      function ll(g, R, V) {
        {
          var $ = pe.current;
          if ($ !== null)
            try {
              Du($), hc(function() {
                $.length === 0 ? (pe.current = null, R(g)) : ll(g, R, V);
              });
            } catch (fe) {
              V(fe);
            }
          else
            R(g);
        }
      }
      var xu = !1;
      function Du(g) {
        if (!xu) {
          xu = !0;
          var R = 0;
          try {
            for (; R < g.length; R++) {
              var V = g[R];
              do
                V = V(!0);
              while (V !== null);
            }
            g.length = 0;
          } catch ($) {
            throw g = g.slice(R + 1), $;
          } finally {
            xu = !1;
          }
        }
      }
      var so = pc, sl = Ti, ls = or, ai = {
        map: Dr,
        forEach: Xr,
        count: va,
        toArray: hu,
        only: ha
      };
      h.Children = ai, h.Component = Pe, h.Fragment = H, h.Profiler = X, h.PureComponent = _t, h.StrictMode = E, h.Suspense = te, h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Et, h.cloneElement = sl, h.createContext = ma, h.createElement = so, h.createFactory = ls, h.createRef = Dn, h.forwardRef = gi, h.isValidElement = ce, h.lazy = Sa, h.memo = ge, h.startTransition = vc, h.unstable_act = bu, h.useCallback = hr, h.useContext = Tt, h.useDebugValue = Pt, h.useDeferredValue = ni, h.useEffect = Yn, h.useId = Mt, h.useImperativeHandle = Jo, h.useInsertionEffect = dn, h.useLayoutEffect = pn, h.useMemo = Si, h.useReducer = Rt, h.useRef = qe, h.useState = jt, h.useSyncExternalStore = Ei, h.useTransition = ud, h.version = y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Sv, Sv.exports)), Sv.exports;
}
process.env.NODE_ENV === "production" ? nE.exports = zO() : nE.exports = jO();
var id = nE.exports;
const UO = /* @__PURE__ */ AO(id);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J1;
function IO() {
  if (J1)
    return hv;
  J1 = 1;
  var v = id, h = Symbol.for("react.element"), y = Symbol.for("react.fragment"), N = Object.prototype.hasOwnProperty, A = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, H = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(X, L, Q) {
    var W, te = {}, le = null, J = null;
    Q !== void 0 && (le = "" + Q), L.key !== void 0 && (le = "" + L.key), L.ref !== void 0 && (J = L.ref);
    for (W in L)
      N.call(L, W) && !H.hasOwnProperty(W) && (te[W] = L[W]);
    if (X && X.defaultProps)
      for (W in L = X.defaultProps, L)
        te[W] === void 0 && (te[W] = L[W]);
    return { $$typeof: h, type: X, key: le, ref: J, props: te, _owner: A.current };
  }
  return hv.Fragment = y, hv.jsx = E, hv.jsxs = E, hv;
}
var mv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ew;
function FO() {
  return ew || (ew = 1, process.env.NODE_ENV !== "production" && function() {
    var v = id, h = Symbol.for("react.element"), y = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), X = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), ve = Symbol.iterator, xe = "@@iterator";
    function Re(b) {
      if (b === null || typeof b != "object")
        return null;
      var re = ve && b[ve] || b[xe];
      return typeof re == "function" ? re : null;
    }
    var Ke = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ze(b) {
      {
        for (var re = arguments.length, ge = new Array(re > 1 ? re - 1 : 0), ke = 1; ke < re; ke++)
          ge[ke - 1] = arguments[ke];
        Oe("error", b, ge);
      }
    }
    function Oe(b, re, ge) {
      {
        var ke = Ke.ReactDebugCurrentFrame, Tt = ke.getStackAddendum();
        Tt !== "" && (re += "%s", ge = ge.concat([Tt]));
        var jt = ge.map(function(Rt) {
          return String(Rt);
        });
        jt.unshift("Warning: " + re), Function.prototype.apply.call(console[b], console, jt);
      }
    }
    var M = !1, pe = !1, ue = !1, Te = !1, mt = !1, Dt;
    Dt = Symbol.for("react.module.reference");
    function at(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === N || b === H || mt || b === A || b === Q || b === W || Te || b === J || M || pe || ue || typeof b == "object" && b !== null && (b.$$typeof === le || b.$$typeof === te || b.$$typeof === E || b.$$typeof === X || b.$$typeof === L || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === Dt || b.getModuleId !== void 0));
    }
    function tt(b, re, ge) {
      var ke = b.displayName;
      if (ke)
        return ke;
      var Tt = re.displayName || re.name || "";
      return Tt !== "" ? ge + "(" + Tt + ")" : ge;
    }
    function yt(b) {
      return b.displayName || "Context";
    }
    function we(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && ze("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case N:
          return "Fragment";
        case y:
          return "Portal";
        case H:
          return "Profiler";
        case A:
          return "StrictMode";
        case Q:
          return "Suspense";
        case W:
          return "SuspenseList";
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case X:
            var re = b;
            return yt(re) + ".Consumer";
          case E:
            var ge = b;
            return yt(ge._context) + ".Provider";
          case L:
            return tt(b, b.render, "ForwardRef");
          case te:
            var ke = b.displayName || null;
            return ke !== null ? ke : we(b.type) || "Memo";
          case le: {
            var Tt = b, jt = Tt._payload, Rt = Tt._init;
            try {
              return we(Rt(jt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $e = Object.assign, Et = 0, it, ye, ne, Ne, x, Z, he;
    function We() {
    }
    We.__reactDisabledLog = !0;
    function Pe() {
      {
        if (Et === 0) {
          it = console.log, ye = console.info, ne = console.warn, Ne = console.error, x = console.group, Z = console.groupCollapsed, he = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: We,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        Et++;
      }
    }
    function pt() {
      {
        if (Et--, Et === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $e({}, b, {
              value: it
            }),
            info: $e({}, b, {
              value: ye
            }),
            warn: $e({}, b, {
              value: ne
            }),
            error: $e({}, b, {
              value: Ne
            }),
            group: $e({}, b, {
              value: x
            }),
            groupCollapsed: $e({}, b, {
              value: Z
            }),
            groupEnd: $e({}, b, {
              value: he
            })
          });
        }
        Et < 0 && ze("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ut = Ke.ReactCurrentDispatcher, Ct;
    function ot(b, re, ge) {
      {
        if (Ct === void 0)
          try {
            throw Error();
          } catch (Tt) {
            var ke = Tt.stack.trim().match(/\n( *(at )?)/);
            Ct = ke && ke[1] || "";
          }
        return `
` + Ct + b;
      }
    }
    var _t = !1, xn;
    {
      var Dn = typeof WeakMap == "function" ? WeakMap : Map;
      xn = new Dn();
    }
    function qn(b, re) {
      if (!b || _t)
        return "";
      {
        var ge = xn.get(b);
        if (ge !== void 0)
          return ge;
      }
      var ke;
      _t = !0;
      var Tt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var jt;
      jt = ut.current, ut.current = null, Pe();
      try {
        if (re) {
          var Rt = function() {
            throw Error();
          };
          if (Object.defineProperty(Rt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Rt, []);
            } catch (Pt) {
              ke = Pt;
            }
            Reflect.construct(b, [], Rt);
          } else {
            try {
              Rt.call();
            } catch (Pt) {
              ke = Pt;
            }
            b.call(Rt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Pt) {
            ke = Pt;
          }
          b();
        }
      } catch (Pt) {
        if (Pt && ke && typeof Pt.stack == "string") {
          for (var qe = Pt.stack.split(`
`), Yn = ke.stack.split(`
`), dn = qe.length - 1, pn = Yn.length - 1; dn >= 1 && pn >= 0 && qe[dn] !== Yn[pn]; )
            pn--;
          for (; dn >= 1 && pn >= 0; dn--, pn--)
            if (qe[dn] !== Yn[pn]) {
              if (dn !== 1 || pn !== 1)
                do
                  if (dn--, pn--, pn < 0 || qe[dn] !== Yn[pn]) {
                    var hr = `
` + qe[dn].replace(" at new ", " at ");
                    return b.displayName && hr.includes("<anonymous>") && (hr = hr.replace("<anonymous>", b.displayName)), typeof b == "function" && xn.set(b, hr), hr;
                  }
                while (dn >= 1 && pn >= 0);
              break;
            }
        }
      } finally {
        _t = !1, ut.current = jt, pt(), Error.prepareStackTrace = Tt;
      }
      var Si = b ? b.displayName || b.name : "", Jo = Si ? ot(Si) : "";
      return typeof b == "function" && xn.set(b, Jo), Jo;
    }
    function Jt(b, re, ge) {
      return qn(b, !1);
    }
    function Mn(b) {
      var re = b.prototype;
      return !!(re && re.isReactComponent);
    }
    function Tn(b, re, ge) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return qn(b, Mn(b));
      if (typeof b == "string")
        return ot(b);
      switch (b) {
        case Q:
          return ot("Suspense");
        case W:
          return ot("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case L:
            return Jt(b.render);
          case te:
            return Tn(b.type, re, ge);
          case le: {
            var ke = b, Tt = ke._payload, jt = ke._init;
            try {
              return Tn(jt(Tt), re, ge);
            } catch {
            }
          }
        }
      return "";
    }
    var hn = Object.prototype.hasOwnProperty, on = {}, Xn = Ke.ReactDebugCurrentFrame;
    function Kn(b) {
      if (b) {
        var re = b._owner, ge = Tn(b.type, b._source, re ? re.type : null);
        Xn.setExtraStackFrame(ge);
      } else
        Xn.setExtraStackFrame(null);
    }
    function tn(b, re, ge, ke, Tt) {
      {
        var jt = Function.call.bind(hn);
        for (var Rt in b)
          if (jt(b, Rt)) {
            var qe = void 0;
            try {
              if (typeof b[Rt] != "function") {
                var Yn = Error((ke || "React class") + ": " + ge + " type `" + Rt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[Rt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Yn.name = "Invariant Violation", Yn;
              }
              qe = b[Rt](re, Rt, ke, ge, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (dn) {
              qe = dn;
            }
            qe && !(qe instanceof Error) && (Kn(Tt), ze("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ke || "React class", ge, Rt, typeof qe), Kn(null)), qe instanceof Error && !(qe.message in on) && (on[qe.message] = !0, Kn(Tt), ze("Failed %s type: %s", ge, qe.message), Kn(null));
          }
      }
    }
    var mn = Array.isArray;
    function Vn(b) {
      return mn(b);
    }
    function wn(b) {
      {
        var re = typeof Symbol == "function" && Symbol.toStringTag, ge = re && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return ge;
      }
    }
    function Zn(b) {
      try {
        return An(b), !1;
      } catch {
        return !0;
      }
    }
    function An(b) {
      return "" + b;
    }
    function Jn(b) {
      if (Zn(b))
        return ze("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wn(b)), An(b);
    }
    var nn = Ke.ReactCurrentOwner, Bn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ka, zr, me;
    me = {};
    function Be(b) {
      if (hn.call(b, "ref")) {
        var re = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function wt(b) {
      if (hn.call(b, "key")) {
        var re = Object.getOwnPropertyDescriptor(b, "key").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function F(b, re) {
      if (typeof b.ref == "string" && nn.current && re && nn.current.stateNode !== re) {
        var ge = we(nn.current.type);
        me[ge] || (ze('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', we(nn.current.type), b.ref), me[ge] = !0);
      }
    }
    function ce(b, re) {
      {
        var ge = function() {
          ka || (ka = !0, ze("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        ge.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: ge,
          configurable: !0
        });
      }
    }
    function _e(b, re) {
      {
        var ge = function() {
          zr || (zr = !0, ze("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        ge.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: ge,
          configurable: !0
        });
      }
    }
    var Ze = function(b, re, ge, ke, Tt, jt, Rt) {
      var qe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: h,
        // Built-in properties that belong on the element
        type: b,
        key: re,
        ref: ge,
        props: Rt,
        // Record the component responsible for creating this element.
        _owner: jt
      };
      return qe._store = {}, Object.defineProperty(qe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(qe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ke
      }), Object.defineProperty(qe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Tt
      }), Object.freeze && (Object.freeze(qe.props), Object.freeze(qe)), qe;
    };
    function st(b, re, ge, ke, Tt) {
      {
        var jt, Rt = {}, qe = null, Yn = null;
        ge !== void 0 && (Jn(ge), qe = "" + ge), wt(re) && (Jn(re.key), qe = "" + re.key), Be(re) && (Yn = re.ref, F(re, Tt));
        for (jt in re)
          hn.call(re, jt) && !Bn.hasOwnProperty(jt) && (Rt[jt] = re[jt]);
        if (b && b.defaultProps) {
          var dn = b.defaultProps;
          for (jt in dn)
            Rt[jt] === void 0 && (Rt[jt] = dn[jt]);
        }
        if (qe || Yn) {
          var pn = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          qe && ce(Rt, pn), Yn && _e(Rt, pn);
        }
        return Ze(b, qe, Yn, Tt, ke, nn.current, Rt);
      }
    }
    var gt = Ke.ReactCurrentOwner, rn = Ke.ReactDebugCurrentFrame;
    function kt(b) {
      if (b) {
        var re = b._owner, ge = Tn(b.type, b._source, re ? re.type : null);
        rn.setExtraStackFrame(ge);
      } else
        rn.setExtraStackFrame(null);
    }
    var Yt;
    Yt = !1;
    function er(b) {
      return typeof b == "object" && b !== null && b.$$typeof === h;
    }
    function Dr() {
      {
        if (gt.current) {
          var b = we(gt.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function va(b) {
      {
        if (b !== void 0) {
          var re = b.fileName.replace(/^.*[\\\/]/, ""), ge = b.lineNumber;
          return `

Check your code at ` + re + ":" + ge + ".";
        }
        return "";
      }
    }
    var Xr = {};
    function hu(b) {
      {
        var re = Dr();
        if (!re) {
          var ge = typeof b == "string" ? b : b.displayName || b.name;
          ge && (re = `

Check the top-level render call using <` + ge + ">.");
        }
        return re;
      }
    }
    function ha(b, re) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var ge = hu(re);
        if (Xr[ge])
          return;
        Xr[ge] = !0;
        var ke = "";
        b && b._owner && b._owner !== gt.current && (ke = " It was passed a child from " + we(b._owner.type) + "."), kt(b), ze('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ge, ke), kt(null);
      }
    }
    function ma(b, re) {
      {
        if (typeof b != "object")
          return;
        if (Vn(b))
          for (var ge = 0; ge < b.length; ge++) {
            var ke = b[ge];
            er(ke) && ha(ke, re);
          }
        else if (er(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var Tt = Re(b);
          if (typeof Tt == "function" && Tt !== b.entries)
            for (var jt = Tt.call(b), Rt; !(Rt = jt.next()).done; )
              er(Rt.value) && ha(Rt.value, re);
        }
      }
    }
    function ya(b) {
      {
        var re = b.type;
        if (re == null || typeof re == "string")
          return;
        var ge;
        if (typeof re == "function")
          ge = re.propTypes;
        else if (typeof re == "object" && (re.$$typeof === L || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        re.$$typeof === te))
          ge = re.propTypes;
        else
          return;
        if (ge) {
          var ke = we(re);
          tn(ge, b.props, "prop", ke, b);
        } else if (re.PropTypes !== void 0 && !Yt) {
          Yt = !0;
          var Tt = we(re);
          ze("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Tt || "Unknown");
        }
        typeof re.getDefaultProps == "function" && !re.getDefaultProps.isReactClassApproved && ze("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mi(b) {
      {
        for (var re = Object.keys(b.props), ge = 0; ge < re.length; ge++) {
          var ke = re[ge];
          if (ke !== "children" && ke !== "key") {
            kt(b), ze("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ke), kt(null);
            break;
          }
        }
        b.ref !== null && (kt(b), ze("Invalid attribute `ref` supplied to `React.Fragment`."), kt(null));
      }
    }
    function ga(b, re, ge, ke, Tt, jt) {
      {
        var Rt = at(b);
        if (!Rt) {
          var qe = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (qe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Yn = va(Tt);
          Yn ? qe += Yn : qe += Dr();
          var dn;
          b === null ? dn = "null" : Vn(b) ? dn = "array" : b !== void 0 && b.$$typeof === h ? (dn = "<" + (we(b.type) || "Unknown") + " />", qe = " Did you accidentally export a JSX literal instead of a component?") : dn = typeof b, ze("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", dn, qe);
        }
        var pn = st(b, re, ge, Tt, jt);
        if (pn == null)
          return pn;
        if (Rt) {
          var hr = re.children;
          if (hr !== void 0)
            if (ke)
              if (Vn(hr)) {
                for (var Si = 0; Si < hr.length; Si++)
                  ma(hr[Si], b);
                Object.freeze && Object.freeze(hr);
              } else
                ze("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ma(hr, b);
        }
        return b === N ? mi(pn) : ya(pn), pn;
      }
    }
    function yi(b, re, ge) {
      return ga(b, re, ge, !0);
    }
    function jr(b, re, ge) {
      return ga(b, re, ge, !1);
    }
    var Sa = jr, gi = yi;
    mv.Fragment = N, mv.jsx = Sa, mv.jsxs = gi;
  }()), mv;
}
process.env.NODE_ENV === "production" ? tE.exports = IO() : tE.exports = FO();
var _a = tE.exports, Ev = {}, rE = { exports: {} }, Za = {}, my = { exports: {} }, q0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tw;
function HO() {
  return tw || (tw = 1, function(v) {
    function h(ne, Ne) {
      var x = ne.length;
      ne.push(Ne);
      e:
        for (; 0 < x; ) {
          var Z = x - 1 >>> 1, he = ne[Z];
          if (0 < A(he, Ne))
            ne[Z] = Ne, ne[x] = he, x = Z;
          else
            break e;
        }
    }
    function y(ne) {
      return ne.length === 0 ? null : ne[0];
    }
    function N(ne) {
      if (ne.length === 0)
        return null;
      var Ne = ne[0], x = ne.pop();
      if (x !== Ne) {
        ne[0] = x;
        e:
          for (var Z = 0, he = ne.length, We = he >>> 1; Z < We; ) {
            var Pe = 2 * (Z + 1) - 1, pt = ne[Pe], ut = Pe + 1, Ct = ne[ut];
            if (0 > A(pt, x))
              ut < he && 0 > A(Ct, pt) ? (ne[Z] = Ct, ne[ut] = x, Z = ut) : (ne[Z] = pt, ne[Pe] = x, Z = Pe);
            else if (ut < he && 0 > A(Ct, x))
              ne[Z] = Ct, ne[ut] = x, Z = ut;
            else
              break e;
          }
      }
      return Ne;
    }
    function A(ne, Ne) {
      var x = ne.sortIndex - Ne.sortIndex;
      return x !== 0 ? x : ne.id - Ne.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var H = performance;
      v.unstable_now = function() {
        return H.now();
      };
    } else {
      var E = Date, X = E.now();
      v.unstable_now = function() {
        return E.now() - X;
      };
    }
    var L = [], Q = [], W = 1, te = null, le = 3, J = !1, ve = !1, xe = !1, Re = typeof setTimeout == "function" ? setTimeout : null, Ke = typeof clearTimeout == "function" ? clearTimeout : null, ze = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Oe(ne) {
      for (var Ne = y(Q); Ne !== null; ) {
        if (Ne.callback === null)
          N(Q);
        else if (Ne.startTime <= ne)
          N(Q), Ne.sortIndex = Ne.expirationTime, h(L, Ne);
        else
          break;
        Ne = y(Q);
      }
    }
    function M(ne) {
      if (xe = !1, Oe(ne), !ve)
        if (y(L) !== null)
          ve = !0, it(pe);
        else {
          var Ne = y(Q);
          Ne !== null && ye(M, Ne.startTime - ne);
        }
    }
    function pe(ne, Ne) {
      ve = !1, xe && (xe = !1, Ke(mt), mt = -1), J = !0;
      var x = le;
      try {
        for (Oe(Ne), te = y(L); te !== null && (!(te.expirationTime > Ne) || ne && !tt()); ) {
          var Z = te.callback;
          if (typeof Z == "function") {
            te.callback = null, le = te.priorityLevel;
            var he = Z(te.expirationTime <= Ne);
            Ne = v.unstable_now(), typeof he == "function" ? te.callback = he : te === y(L) && N(L), Oe(Ne);
          } else
            N(L);
          te = y(L);
        }
        if (te !== null)
          var We = !0;
        else {
          var Pe = y(Q);
          Pe !== null && ye(M, Pe.startTime - Ne), We = !1;
        }
        return We;
      } finally {
        te = null, le = x, J = !1;
      }
    }
    var ue = !1, Te = null, mt = -1, Dt = 5, at = -1;
    function tt() {
      return !(v.unstable_now() - at < Dt);
    }
    function yt() {
      if (Te !== null) {
        var ne = v.unstable_now();
        at = ne;
        var Ne = !0;
        try {
          Ne = Te(!0, ne);
        } finally {
          Ne ? we() : (ue = !1, Te = null);
        }
      } else
        ue = !1;
    }
    var we;
    if (typeof ze == "function")
      we = function() {
        ze(yt);
      };
    else if (typeof MessageChannel < "u") {
      var $e = new MessageChannel(), Et = $e.port2;
      $e.port1.onmessage = yt, we = function() {
        Et.postMessage(null);
      };
    } else
      we = function() {
        Re(yt, 0);
      };
    function it(ne) {
      Te = ne, ue || (ue = !0, we());
    }
    function ye(ne, Ne) {
      mt = Re(function() {
        ne(v.unstable_now());
      }, Ne);
    }
    v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(ne) {
      ne.callback = null;
    }, v.unstable_continueExecution = function() {
      ve || J || (ve = !0, it(pe));
    }, v.unstable_forceFrameRate = function(ne) {
      0 > ne || 125 < ne ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Dt = 0 < ne ? Math.floor(1e3 / ne) : 5;
    }, v.unstable_getCurrentPriorityLevel = function() {
      return le;
    }, v.unstable_getFirstCallbackNode = function() {
      return y(L);
    }, v.unstable_next = function(ne) {
      switch (le) {
        case 1:
        case 2:
        case 3:
          var Ne = 3;
          break;
        default:
          Ne = le;
      }
      var x = le;
      le = Ne;
      try {
        return ne();
      } finally {
        le = x;
      }
    }, v.unstable_pauseExecution = function() {
    }, v.unstable_requestPaint = function() {
    }, v.unstable_runWithPriority = function(ne, Ne) {
      switch (ne) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ne = 3;
      }
      var x = le;
      le = ne;
      try {
        return Ne();
      } finally {
        le = x;
      }
    }, v.unstable_scheduleCallback = function(ne, Ne, x) {
      var Z = v.unstable_now();
      switch (typeof x == "object" && x !== null ? (x = x.delay, x = typeof x == "number" && 0 < x ? Z + x : Z) : x = Z, ne) {
        case 1:
          var he = -1;
          break;
        case 2:
          he = 250;
          break;
        case 5:
          he = 1073741823;
          break;
        case 4:
          he = 1e4;
          break;
        default:
          he = 5e3;
      }
      return he = x + he, ne = { id: W++, callback: Ne, priorityLevel: ne, startTime: x, expirationTime: he, sortIndex: -1 }, x > Z ? (ne.sortIndex = x, h(Q, ne), y(L) === null && ne === y(Q) && (xe ? (Ke(mt), mt = -1) : xe = !0, ye(M, x - Z))) : (ne.sortIndex = he, h(L, ne), ve || J || (ve = !0, it(pe))), ne;
    }, v.unstable_shouldYield = tt, v.unstable_wrapCallback = function(ne) {
      var Ne = le;
      return function() {
        var x = le;
        le = Ne;
        try {
          return ne.apply(this, arguments);
        } finally {
          le = x;
        }
      };
    };
  }(q0)), q0;
}
var X0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nw;
function PO() {
  return nw || (nw = 1, function(v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var h = !1, y = !1, N = 5;
      function A(me, Be) {
        var wt = me.length;
        me.push(Be), X(me, Be, wt);
      }
      function H(me) {
        return me.length === 0 ? null : me[0];
      }
      function E(me) {
        if (me.length === 0)
          return null;
        var Be = me[0], wt = me.pop();
        return wt !== Be && (me[0] = wt, L(me, wt, 0)), Be;
      }
      function X(me, Be, wt) {
        for (var F = wt; F > 0; ) {
          var ce = F - 1 >>> 1, _e = me[ce];
          if (Q(_e, Be) > 0)
            me[ce] = Be, me[F] = _e, F = ce;
          else
            return;
        }
      }
      function L(me, Be, wt) {
        for (var F = wt, ce = me.length, _e = ce >>> 1; F < _e; ) {
          var Ze = (F + 1) * 2 - 1, st = me[Ze], gt = Ze + 1, rn = me[gt];
          if (Q(st, Be) < 0)
            gt < ce && Q(rn, st) < 0 ? (me[F] = rn, me[gt] = Be, F = gt) : (me[F] = st, me[Ze] = Be, F = Ze);
          else if (gt < ce && Q(rn, Be) < 0)
            me[F] = rn, me[gt] = Be, F = gt;
          else
            return;
        }
      }
      function Q(me, Be) {
        var wt = me.sortIndex - Be.sortIndex;
        return wt !== 0 ? wt : me.id - Be.id;
      }
      var W = 1, te = 2, le = 3, J = 4, ve = 5;
      function xe(me, Be) {
      }
      var Re = typeof performance == "object" && typeof performance.now == "function";
      if (Re) {
        var Ke = performance;
        v.unstable_now = function() {
          return Ke.now();
        };
      } else {
        var ze = Date, Oe = ze.now();
        v.unstable_now = function() {
          return ze.now() - Oe;
        };
      }
      var M = 1073741823, pe = -1, ue = 250, Te = 5e3, mt = 1e4, Dt = M, at = [], tt = [], yt = 1, we = null, $e = le, Et = !1, it = !1, ye = !1, ne = typeof setTimeout == "function" ? setTimeout : null, Ne = typeof clearTimeout == "function" ? clearTimeout : null, x = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Z(me) {
        for (var Be = H(tt); Be !== null; ) {
          if (Be.callback === null)
            E(tt);
          else if (Be.startTime <= me)
            E(tt), Be.sortIndex = Be.expirationTime, A(at, Be);
          else
            return;
          Be = H(tt);
        }
      }
      function he(me) {
        if (ye = !1, Z(me), !it)
          if (H(at) !== null)
            it = !0, Jn(We);
          else {
            var Be = H(tt);
            Be !== null && nn(he, Be.startTime - me);
          }
      }
      function We(me, Be) {
        it = !1, ye && (ye = !1, Bn()), Et = !0;
        var wt = $e;
        try {
          var F;
          if (!y)
            return Pe(me, Be);
        } finally {
          we = null, $e = wt, Et = !1;
        }
      }
      function Pe(me, Be) {
        var wt = Be;
        for (Z(wt), we = H(at); we !== null && !h && !(we.expirationTime > wt && (!me || Kn())); ) {
          var F = we.callback;
          if (typeof F == "function") {
            we.callback = null, $e = we.priorityLevel;
            var ce = we.expirationTime <= wt, _e = F(ce);
            wt = v.unstable_now(), typeof _e == "function" ? we.callback = _e : we === H(at) && E(at), Z(wt);
          } else
            E(at);
          we = H(at);
        }
        if (we !== null)
          return !0;
        var Ze = H(tt);
        return Ze !== null && nn(he, Ze.startTime - wt), !1;
      }
      function pt(me, Be) {
        switch (me) {
          case W:
          case te:
          case le:
          case J:
          case ve:
            break;
          default:
            me = le;
        }
        var wt = $e;
        $e = me;
        try {
          return Be();
        } finally {
          $e = wt;
        }
      }
      function ut(me) {
        var Be;
        switch ($e) {
          case W:
          case te:
          case le:
            Be = le;
            break;
          default:
            Be = $e;
            break;
        }
        var wt = $e;
        $e = Be;
        try {
          return me();
        } finally {
          $e = wt;
        }
      }
      function Ct(me) {
        var Be = $e;
        return function() {
          var wt = $e;
          $e = Be;
          try {
            return me.apply(this, arguments);
          } finally {
            $e = wt;
          }
        };
      }
      function ot(me, Be, wt) {
        var F = v.unstable_now(), ce;
        if (typeof wt == "object" && wt !== null) {
          var _e = wt.delay;
          typeof _e == "number" && _e > 0 ? ce = F + _e : ce = F;
        } else
          ce = F;
        var Ze;
        switch (me) {
          case W:
            Ze = pe;
            break;
          case te:
            Ze = ue;
            break;
          case ve:
            Ze = Dt;
            break;
          case J:
            Ze = mt;
            break;
          case le:
          default:
            Ze = Te;
            break;
        }
        var st = ce + Ze, gt = {
          id: yt++,
          callback: Be,
          priorityLevel: me,
          startTime: ce,
          expirationTime: st,
          sortIndex: -1
        };
        return ce > F ? (gt.sortIndex = ce, A(tt, gt), H(at) === null && gt === H(tt) && (ye ? Bn() : ye = !0, nn(he, ce - F))) : (gt.sortIndex = st, A(at, gt), !it && !Et && (it = !0, Jn(We))), gt;
      }
      function _t() {
      }
      function xn() {
        !it && !Et && (it = !0, Jn(We));
      }
      function Dn() {
        return H(at);
      }
      function qn(me) {
        me.callback = null;
      }
      function Jt() {
        return $e;
      }
      var Mn = !1, Tn = null, hn = -1, on = N, Xn = -1;
      function Kn() {
        var me = v.unstable_now() - Xn;
        return !(me < on);
      }
      function tn() {
      }
      function mn(me) {
        if (me < 0 || me > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        me > 0 ? on = Math.floor(1e3 / me) : on = N;
      }
      var Vn = function() {
        if (Tn !== null) {
          var me = v.unstable_now();
          Xn = me;
          var Be = !0, wt = !0;
          try {
            wt = Tn(Be, me);
          } finally {
            wt ? wn() : (Mn = !1, Tn = null);
          }
        } else
          Mn = !1;
      }, wn;
      if (typeof x == "function")
        wn = function() {
          x(Vn);
        };
      else if (typeof MessageChannel < "u") {
        var Zn = new MessageChannel(), An = Zn.port2;
        Zn.port1.onmessage = Vn, wn = function() {
          An.postMessage(null);
        };
      } else
        wn = function() {
          ne(Vn, 0);
        };
      function Jn(me) {
        Tn = me, Mn || (Mn = !0, wn());
      }
      function nn(me, Be) {
        hn = ne(function() {
          me(v.unstable_now());
        }, Be);
      }
      function Bn() {
        Ne(hn), hn = -1;
      }
      var ka = tn, zr = null;
      v.unstable_IdlePriority = ve, v.unstable_ImmediatePriority = W, v.unstable_LowPriority = J, v.unstable_NormalPriority = le, v.unstable_Profiling = zr, v.unstable_UserBlockingPriority = te, v.unstable_cancelCallback = qn, v.unstable_continueExecution = xn, v.unstable_forceFrameRate = mn, v.unstable_getCurrentPriorityLevel = Jt, v.unstable_getFirstCallbackNode = Dn, v.unstable_next = ut, v.unstable_pauseExecution = _t, v.unstable_requestPaint = ka, v.unstable_runWithPriority = pt, v.unstable_scheduleCallback = ot, v.unstable_shouldYield = Kn, v.unstable_wrapCallback = Ct, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(X0)), X0;
}
var rw;
function bw() {
  return rw || (rw = 1, process.env.NODE_ENV === "production" ? my.exports = HO() : my.exports = PO()), my.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aw;
function VO() {
  if (aw)
    return Za;
  aw = 1;
  var v = id, h = bw();
  function y(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, u = 1; u < arguments.length; u++)
      r += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var N = /* @__PURE__ */ new Set(), A = {};
  function H(n, r) {
    E(n, r), E(n + "Capture", r);
  }
  function E(n, r) {
    for (A[n] = r, n = 0; n < r.length; n++)
      N.add(r[n]);
  }
  var X = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), L = Object.prototype.hasOwnProperty, Q = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, W = {}, te = {};
  function le(n) {
    return L.call(te, n) ? !0 : L.call(W, n) ? !1 : Q.test(n) ? te[n] = !0 : (W[n] = !0, !1);
  }
  function J(n, r, u, l) {
    if (u !== null && u.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l ? !1 : u !== null ? !u.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ve(n, r, u, l) {
    if (r === null || typeof r > "u" || J(n, r, u, l))
      return !0;
    if (l)
      return !1;
    if (u !== null)
      switch (u.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function xe(n, r, u, l, c, d, S) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = l, this.attributeNamespace = c, this.mustUseProperty = u, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = S;
  }
  var Re = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Re[n] = new xe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Re[r] = new xe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Re[n] = new xe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Re[n] = new xe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Re[n] = new xe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Re[n] = new xe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Re[n] = new xe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Re[n] = new xe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Re[n] = new xe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Ke = /[\-:]([a-z])/g;
  function ze(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Ke,
      ze
    );
    Re[r] = new xe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Ke, ze);
    Re[r] = new xe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Ke, ze);
    Re[r] = new xe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Re[n] = new xe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Re.xlinkHref = new xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Re[n] = new xe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Oe(n, r, u, l) {
    var c = Re.hasOwnProperty(r) ? Re[r] : null;
    (c !== null ? c.type !== 0 : l || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ve(r, u, c, l) && (u = null), l || c === null ? le(r) && (u === null ? n.removeAttribute(r) : n.setAttribute(r, "" + u)) : c.mustUseProperty ? n[c.propertyName] = u === null ? c.type === 3 ? !1 : "" : u : (r = c.attributeName, l = c.attributeNamespace, u === null ? n.removeAttribute(r) : (c = c.type, u = c === 3 || c === 4 && u === !0 ? "" : "" + u, l ? n.setAttributeNS(l, r, u) : n.setAttribute(r, u))));
  }
  var M = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, pe = Symbol.for("react.element"), ue = Symbol.for("react.portal"), Te = Symbol.for("react.fragment"), mt = Symbol.for("react.strict_mode"), Dt = Symbol.for("react.profiler"), at = Symbol.for("react.provider"), tt = Symbol.for("react.context"), yt = Symbol.for("react.forward_ref"), we = Symbol.for("react.suspense"), $e = Symbol.for("react.suspense_list"), Et = Symbol.for("react.memo"), it = Symbol.for("react.lazy"), ye = Symbol.for("react.offscreen"), ne = Symbol.iterator;
  function Ne(n) {
    return n === null || typeof n != "object" ? null : (n = ne && n[ne] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var x = Object.assign, Z;
  function he(n) {
    if (Z === void 0)
      try {
        throw Error();
      } catch (u) {
        var r = u.stack.trim().match(/\n( *(at )?)/);
        Z = r && r[1] || "";
      }
    return `
` + Z + n;
  }
  var We = !1;
  function Pe(n, r) {
    if (!n || We)
      return "";
    We = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (Y) {
            var l = Y;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (Y) {
            l = Y;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (Y) {
          l = Y;
        }
        n();
      }
    } catch (Y) {
      if (Y && l && typeof Y.stack == "string") {
        for (var c = Y.stack.split(`
`), d = l.stack.split(`
`), S = c.length - 1, w = d.length - 1; 1 <= S && 0 <= w && c[S] !== d[w]; )
          w--;
        for (; 1 <= S && 0 <= w; S--, w--)
          if (c[S] !== d[w]) {
            if (S !== 1 || w !== 1)
              do
                if (S--, w--, 0 > w || c[S] !== d[w]) {
                  var D = `
` + c[S].replace(" at new ", " at ");
                  return n.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", n.displayName)), D;
                }
              while (1 <= S && 0 <= w);
            break;
          }
      }
    } finally {
      We = !1, Error.prepareStackTrace = u;
    }
    return (n = n ? n.displayName || n.name : "") ? he(n) : "";
  }
  function pt(n) {
    switch (n.tag) {
      case 5:
        return he(n.type);
      case 16:
        return he("Lazy");
      case 13:
        return he("Suspense");
      case 19:
        return he("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Pe(n.type, !1), n;
      case 11:
        return n = Pe(n.type.render, !1), n;
      case 1:
        return n = Pe(n.type, !0), n;
      default:
        return "";
    }
  }
  function ut(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Te:
        return "Fragment";
      case ue:
        return "Portal";
      case Dt:
        return "Profiler";
      case mt:
        return "StrictMode";
      case we:
        return "Suspense";
      case $e:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case tt:
          return (n.displayName || "Context") + ".Consumer";
        case at:
          return (n._context.displayName || "Context") + ".Provider";
        case yt:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Et:
          return r = n.displayName || null, r !== null ? r : ut(n.type) || "Memo";
        case it:
          r = n._payload, n = n._init;
          try {
            return ut(n(r));
          } catch {
          }
      }
    return null;
  }
  function Ct(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ut(r);
      case 8:
        return r === mt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function ot(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function _t(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function xn(n) {
    var r = _t(n) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), l = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var c = u.get, d = u.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(S) {
        l = "" + S, d.call(this, S);
      } }), Object.defineProperty(n, r, { enumerable: u.enumerable }), { getValue: function() {
        return l;
      }, setValue: function(S) {
        l = "" + S;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Dn(n) {
    n._valueTracker || (n._valueTracker = xn(n));
  }
  function qn(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var u = r.getValue(), l = "";
    return n && (l = _t(n) ? n.checked ? "true" : "false" : n.value), n = l, n !== u ? (r.setValue(n), !0) : !1;
  }
  function Jt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Mn(n, r) {
    var u = r.checked;
    return x({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: u ?? n._wrapperState.initialChecked });
  }
  function Tn(n, r) {
    var u = r.defaultValue == null ? "" : r.defaultValue, l = r.checked != null ? r.checked : r.defaultChecked;
    u = ot(r.value != null ? r.value : u), n._wrapperState = { initialChecked: l, initialValue: u, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function hn(n, r) {
    r = r.checked, r != null && Oe(n, "checked", r, !1);
  }
  function on(n, r) {
    hn(n, r);
    var u = ot(r.value), l = r.type;
    if (u != null)
      l === "number" ? (u === 0 && n.value === "" || n.value != u) && (n.value = "" + u) : n.value !== "" + u && (n.value = "" + u);
    else if (l === "submit" || l === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Kn(n, r.type, u) : r.hasOwnProperty("defaultValue") && Kn(n, r.type, ot(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Xn(n, r, u) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var l = r.type;
      if (!(l !== "submit" && l !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, u || r === n.value || (n.value = r), n.defaultValue = r;
    }
    u = n.name, u !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, u !== "" && (n.name = u);
  }
  function Kn(n, r, u) {
    (r !== "number" || Jt(n.ownerDocument) !== n) && (u == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + u && (n.defaultValue = "" + u));
  }
  var tn = Array.isArray;
  function mn(n, r, u, l) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < u.length; c++)
        r["$" + u[c]] = !0;
      for (u = 0; u < n.length; u++)
        c = r.hasOwnProperty("$" + n[u].value), n[u].selected !== c && (n[u].selected = c), c && l && (n[u].defaultSelected = !0);
    } else {
      for (u = "" + ot(u), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === u) {
          n[c].selected = !0, l && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Vn(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(y(91));
    return x({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function wn(n, r) {
    var u = r.value;
    if (u == null) {
      if (u = r.children, r = r.defaultValue, u != null) {
        if (r != null)
          throw Error(y(92));
        if (tn(u)) {
          if (1 < u.length)
            throw Error(y(93));
          u = u[0];
        }
        r = u;
      }
      r == null && (r = ""), u = r;
    }
    n._wrapperState = { initialValue: ot(u) };
  }
  function Zn(n, r) {
    var u = ot(r.value), l = ot(r.defaultValue);
    u != null && (u = "" + u, u !== n.value && (n.value = u), r.defaultValue == null && n.defaultValue !== u && (n.defaultValue = u)), l != null && (n.defaultValue = "" + l);
  }
  function An(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Jn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function nn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Jn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Bn, ka = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, u, l, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, u, l, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Bn = Bn || document.createElement("div"), Bn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Bn.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function zr(n, r) {
    if (r) {
      var u = n.firstChild;
      if (u && u === n.lastChild && u.nodeType === 3) {
        u.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var me = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Be = ["Webkit", "ms", "Moz", "O"];
  Object.keys(me).forEach(function(n) {
    Be.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), me[r] = me[n];
    });
  });
  function wt(n, r, u) {
    return r == null || typeof r == "boolean" || r === "" ? "" : u || typeof r != "number" || r === 0 || me.hasOwnProperty(n) && me[n] ? ("" + r).trim() : r + "px";
  }
  function F(n, r) {
    n = n.style;
    for (var u in r)
      if (r.hasOwnProperty(u)) {
        var l = u.indexOf("--") === 0, c = wt(u, r[u], l);
        u === "float" && (u = "cssFloat"), l ? n.setProperty(u, c) : n[u] = c;
      }
  }
  var ce = x({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function _e(n, r) {
    if (r) {
      if (ce[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(y(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(y(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(y(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(y(62));
    }
  }
  function Ze(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var st = null;
  function gt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var rn = null, kt = null, Yt = null;
  function er(n) {
    if (n = Ts(n)) {
      if (typeof rn != "function")
        throw Error(y(280));
      var r = n.stateNode;
      r && (r = Ge(r), rn(n.stateNode, n.type, r));
    }
  }
  function Dr(n) {
    kt ? Yt ? Yt.push(n) : Yt = [n] : kt = n;
  }
  function va() {
    if (kt) {
      var n = kt, r = Yt;
      if (Yt = kt = null, er(n), r)
        for (n = 0; n < r.length; n++)
          er(r[n]);
    }
  }
  function Xr(n, r) {
    return n(r);
  }
  function hu() {
  }
  var ha = !1;
  function ma(n, r, u) {
    if (ha)
      return n(r, u);
    ha = !0;
    try {
      return Xr(n, r, u);
    } finally {
      ha = !1, (kt !== null || Yt !== null) && (hu(), va());
    }
  }
  function ya(n, r) {
    var u = n.stateNode;
    if (u === null)
      return null;
    var l = Ge(u);
    if (l === null)
      return null;
    u = l[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (l = !l.disabled) || (n = n.type, l = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !l;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (u && typeof u != "function")
      throw Error(y(231, r, typeof u));
    return u;
  }
  var mi = !1;
  if (X)
    try {
      var ga = {};
      Object.defineProperty(ga, "passive", { get: function() {
        mi = !0;
      } }), window.addEventListener("test", ga, ga), window.removeEventListener("test", ga, ga);
    } catch {
      mi = !1;
    }
  function yi(n, r, u, l, c, d, S, w, D) {
    var Y = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(u, Y);
    } catch (ie) {
      this.onError(ie);
    }
  }
  var jr = !1, Sa = null, gi = !1, b = null, re = { onError: function(n) {
    jr = !0, Sa = n;
  } };
  function ge(n, r, u, l, c, d, S, w, D) {
    jr = !1, Sa = null, yi.apply(re, arguments);
  }
  function ke(n, r, u, l, c, d, S, w, D) {
    if (ge.apply(this, arguments), jr) {
      if (jr) {
        var Y = Sa;
        jr = !1, Sa = null;
      } else
        throw Error(y(198));
      gi || (gi = !0, b = Y);
    }
  }
  function Tt(n) {
    var r = n, u = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (u = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? u : null;
  }
  function jt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Rt(n) {
    if (Tt(n) !== n)
      throw Error(y(188));
  }
  function qe(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Tt(n), r === null)
        throw Error(y(188));
      return r !== n ? null : n;
    }
    for (var u = n, l = r; ; ) {
      var c = u.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (l = c.return, l !== null) {
          u = l;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === u)
            return Rt(c), n;
          if (d === l)
            return Rt(c), r;
          d = d.sibling;
        }
        throw Error(y(188));
      }
      if (u.return !== l.return)
        u = c, l = d;
      else {
        for (var S = !1, w = c.child; w; ) {
          if (w === u) {
            S = !0, u = c, l = d;
            break;
          }
          if (w === l) {
            S = !0, l = c, u = d;
            break;
          }
          w = w.sibling;
        }
        if (!S) {
          for (w = d.child; w; ) {
            if (w === u) {
              S = !0, u = d, l = c;
              break;
            }
            if (w === l) {
              S = !0, l = d, u = c;
              break;
            }
            w = w.sibling;
          }
          if (!S)
            throw Error(y(189));
        }
      }
      if (u.alternate !== l)
        throw Error(y(190));
    }
    if (u.tag !== 3)
      throw Error(y(188));
    return u.stateNode.current === u ? n : r;
  }
  function Yn(n) {
    return n = qe(n), n !== null ? dn(n) : null;
  }
  function dn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = dn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var pn = h.unstable_scheduleCallback, hr = h.unstable_cancelCallback, Si = h.unstable_shouldYield, Jo = h.unstable_requestPaint, Pt = h.unstable_now, ud = h.unstable_getCurrentPriorityLevel, ni = h.unstable_ImmediatePriority, Mt = h.unstable_UserBlockingPriority, Ei = h.unstable_NormalPriority, mu = h.unstable_LowPriority, el = h.unstable_IdlePriority, yu = null, Kr = null;
  function is(n) {
    if (Kr && typeof Kr.onCommitFiberRoot == "function")
      try {
        Kr.onCommitFiberRoot(yu, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Ur = Math.clz32 ? Math.clz32 : dc, us = Math.log, os = Math.LN2;
  function dc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (us(n) / os | 0) | 0;
  }
  var tl = 64, gu = 4194304;
  function ri(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ir(n, r) {
    var u = n.pendingLanes;
    if (u === 0)
      return 0;
    var l = 0, c = n.suspendedLanes, d = n.pingedLanes, S = u & 268435455;
    if (S !== 0) {
      var w = S & ~c;
      w !== 0 ? l = ri(w) : (d &= S, d !== 0 && (l = ri(d)));
    } else
      S = u & ~c, S !== 0 ? l = ri(S) : d !== 0 && (l = ri(d));
    if (l === 0)
      return 0;
    if (r !== 0 && r !== l && !(r & c) && (c = l & -l, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (l & 4 && (l |= u & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= l; 0 < r; )
        u = 31 - Ur(r), c = 1 << u, l |= n[u], r &= ~c;
    return l;
  }
  function Su(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Eu(n, r) {
    for (var u = n.suspendedLanes, l = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var S = 31 - Ur(d), w = 1 << S, D = c[S];
      D === -1 ? (!(w & u) || w & l) && (c[S] = Su(w, r)) : D <= r && (n.expiredLanes |= w), d &= ~w;
    }
  }
  function Cu(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function nl() {
    var n = tl;
    return tl <<= 1, !(tl & 4194240) && (tl = 64), n;
  }
  function rl(n) {
    for (var r = [], u = 0; 31 > u; u++)
      r.push(n);
    return r;
  }
  function Hi(n, r, u) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Ur(r), n[r] = u;
  }
  function od(n, r) {
    var u = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var l = n.eventTimes;
    for (n = n.expirationTimes; 0 < u; ) {
      var c = 31 - Ur(u), d = 1 << c;
      r[c] = 0, l[c] = -1, n[c] = -1, u &= ~d;
    }
  }
  function Ci(n, r) {
    var u = n.entangledLanes |= r;
    for (n = n.entanglements; u; ) {
      var l = 31 - Ur(u), c = 1 << l;
      c & r | n[l] & r && (n[l] |= r), u &= ~c;
    }
  }
  var Qt = 0;
  function al(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var oo, il, Vt, ul, ol, vt = !1, lo = [], On = null, Zr = null, Fr = null, Tu = /* @__PURE__ */ new Map(), zn = /* @__PURE__ */ new Map(), Xt = [], pc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Jr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        On = null;
        break;
      case "dragenter":
      case "dragleave":
        Zr = null;
        break;
      case "mouseover":
      case "mouseout":
        Fr = null;
        break;
      case "pointerover":
      case "pointerout":
        Tu.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zn.delete(r.pointerId);
    }
  }
  function or(n, r, u, l, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: u, eventSystemFlags: l, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Ts(r), r !== null && il(r)), n) : (n.eventSystemFlags |= l, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Ti(n, r, u, l, c) {
    switch (r) {
      case "focusin":
        return On = or(On, n, r, u, l, c), !0;
      case "dragenter":
        return Zr = or(Zr, n, r, u, l, c), !0;
      case "mouseover":
        return Fr = or(Fr, n, r, u, l, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Tu.set(d, or(Tu.get(d) || null, n, r, u, l, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, zn.set(d, or(zn.get(d) || null, n, r, u, l, c)), !0;
    }
    return !1;
  }
  function vc(n) {
    var r = ja(n.target);
    if (r !== null) {
      var u = Tt(r);
      if (u !== null) {
        if (r = u.tag, r === 13) {
          if (r = jt(u), r !== null) {
            n.blockedOn = r, ol(n.priority, function() {
              Vt(u);
            });
            return;
          }
        } else if (r === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Pi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var u = sl(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (u === null) {
        u = n.nativeEvent;
        var l = new u.constructor(u.type, u);
        st = l, u.target.dispatchEvent(l), st = null;
      } else
        return r = Ts(u), r !== null && il(r), n.blockedOn = u, !1;
      r.shift();
    }
    return !0;
  }
  function wu(n, r, u) {
    Pi(n) && u.delete(r);
  }
  function hc() {
    vt = !1, On !== null && Pi(On) && (On = null), Zr !== null && Pi(Zr) && (Zr = null), Fr !== null && Pi(Fr) && (Fr = null), Tu.forEach(wu), zn.forEach(wu);
  }
  function La(n, r) {
    n.blockedOn === r && (n.blockedOn = null, vt || (vt = !0, h.unstable_scheduleCallback(h.unstable_NormalPriority, hc)));
  }
  function Ru(n) {
    function r(c) {
      return La(c, n);
    }
    if (0 < lo.length) {
      La(lo[0], n);
      for (var u = 1; u < lo.length; u++) {
        var l = lo[u];
        l.blockedOn === n && (l.blockedOn = null);
      }
    }
    for (On !== null && La(On, n), Zr !== null && La(Zr, n), Fr !== null && La(Fr, n), Tu.forEach(r), zn.forEach(r), u = 0; u < Xt.length; u++)
      l = Xt[u], l.blockedOn === n && (l.blockedOn = null);
    for (; 0 < Xt.length && (u = Xt[0], u.blockedOn === null); )
      vc(u), u.blockedOn === null && Xt.shift();
  }
  var bu = M.ReactCurrentBatchConfig, Aa = !0;
  function ll(n, r, u, l) {
    var c = Qt, d = bu.transition;
    bu.transition = null;
    try {
      Qt = 1, Du(n, r, u, l);
    } finally {
      Qt = c, bu.transition = d;
    }
  }
  function xu(n, r, u, l) {
    var c = Qt, d = bu.transition;
    bu.transition = null;
    try {
      Qt = 4, Du(n, r, u, l);
    } finally {
      Qt = c, bu.transition = d;
    }
  }
  function Du(n, r, u, l) {
    if (Aa) {
      var c = sl(n, r, u, l);
      if (c === null)
        Rc(n, r, l, so, u), Jr(n, l);
      else if (Ti(c, n, r, u, l))
        l.stopPropagation();
      else if (Jr(n, l), r & 4 && -1 < pc.indexOf(n)) {
        for (; c !== null; ) {
          var d = Ts(c);
          if (d !== null && oo(d), d = sl(n, r, u, l), d === null && Rc(n, r, l, so, u), d === c)
            break;
          c = d;
        }
        c !== null && l.stopPropagation();
      } else
        Rc(n, r, l, null, u);
    }
  }
  var so = null;
  function sl(n, r, u, l) {
    if (so = null, n = gt(l), n = ja(n), n !== null)
      if (r = Tt(n), r === null)
        n = null;
      else if (u = r.tag, u === 13) {
        if (n = jt(r), n !== null)
          return n;
        n = null;
      } else if (u === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return so = n, null;
  }
  function ls(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ud()) {
          case ni:
            return 1;
          case Mt:
            return 4;
          case Ei:
          case mu:
            return 16;
          case el:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ai = null, g = null, R = null;
  function V() {
    if (R)
      return R;
    var n, r = g, u = r.length, l, c = "value" in ai ? ai.value : ai.textContent, d = c.length;
    for (n = 0; n < u && r[n] === c[n]; n++)
      ;
    var S = u - n;
    for (l = 1; l <= S && r[u - l] === c[d - l]; l++)
      ;
    return R = c.slice(n, 1 < l ? 1 - l : void 0);
  }
  function $(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function fe() {
    return !0;
  }
  function nt() {
    return !1;
  }
  function Ce(n) {
    function r(u, l, c, d, S) {
      this._reactName = u, this._targetInst = c, this.type = l, this.nativeEvent = d, this.target = S, this.currentTarget = null;
      for (var w in n)
        n.hasOwnProperty(w) && (u = n[w], this[w] = u ? u(d) : d[w]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? fe : nt, this.isPropagationStopped = nt, this;
    }
    return x(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = fe);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = fe);
    }, persist: function() {
    }, isPersistent: fe }), r;
  }
  var Je = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ot = Ce(Je), Bt = x({}, Je, { view: 0, detail: 0 }), ln = Ce(Bt), en, sn, vn, zt = x({}, Bt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: dd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== vn && (vn && n.type === "mousemove" ? (en = n.screenX - vn.screenX, sn = n.screenY - vn.screenY) : sn = en = 0, vn = n), en);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : sn;
  } }), Vi = Ce(zt), cl = x({}, zt, { dataTransfer: 0 }), ss = Ce(cl), ld = x({}, Bt, { relatedTarget: 0 }), ii = Ce(ld), cs = x({}, Je, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), fs = Ce(cs), sd = x({}, Je, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Ry = Ce(sd), by = x({}, Je, { data: 0 }), cd = Ce(by), fd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, _v = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, kv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Lv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = kv[n]) ? !!r[n] : !1;
  }
  function dd() {
    return Lv;
  }
  var Bi = x({}, Bt, { key: function(n) {
    if (n.key) {
      var r = fd[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = $(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? _v[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: dd, charCode: function(n) {
    return n.type === "keypress" ? $(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? $(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), xy = Ce(Bi), pd = x({}, zt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), mc = Ce(pd), vd = x({}, Bt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: dd }), Dy = Ce(vd), yc = x({}, Je, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Av = Ce(yc), ea = x({}, zt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yi = Ce(ea), $n = [9, 13, 27, 32], ui = X && "CompositionEvent" in window, co = null;
  X && "documentMode" in document && (co = document.documentMode);
  var gc = X && "TextEvent" in window && !co, zv = X && (!ui || co && 8 < co && 11 >= co), fl = String.fromCharCode(32), jv = !1;
  function Uv(n, r) {
    switch (n) {
      case "keyup":
        return $n.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Sc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var dl = !1;
  function My(n, r) {
    switch (n) {
      case "compositionend":
        return Sc(r);
      case "keypress":
        return r.which !== 32 ? null : (jv = !0, fl);
      case "textInput":
        return n = r.data, n === fl && jv ? null : n;
      default:
        return null;
    }
  }
  function Oy(n, r) {
    if (dl)
      return n === "compositionend" || !ui && Uv(n, r) ? (n = V(), R = g = ai = null, dl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return zv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Iv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Fv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Iv[n.type] : r === "textarea";
  }
  function Hv(n, r, u, l) {
    Dr(l), r = Ss(r, "onChange"), 0 < r.length && (u = new Ot("onChange", "change", null, u, l), n.push({ event: u, listeners: r }));
  }
  var ds = null, pl = null;
  function vl(n) {
    wc(n, 0);
  }
  function hl(n) {
    var r = yl(n);
    if (qn(r))
      return n;
  }
  function Pv(n, r) {
    if (n === "change")
      return r;
  }
  var hd = !1;
  if (X) {
    var md;
    if (X) {
      var yd = "oninput" in document;
      if (!yd) {
        var Vv = document.createElement("div");
        Vv.setAttribute("oninput", "return;"), yd = typeof Vv.oninput == "function";
      }
      md = yd;
    } else
      md = !1;
    hd = md && (!document.documentMode || 9 < document.documentMode);
  }
  function Bv() {
    ds && (ds.detachEvent("onpropertychange", Yv), pl = ds = null);
  }
  function Yv(n) {
    if (n.propertyName === "value" && hl(pl)) {
      var r = [];
      Hv(r, pl, n, gt(n)), ma(vl, r);
    }
  }
  function Ny(n, r, u) {
    n === "focusin" ? (Bv(), ds = r, pl = u, ds.attachEvent("onpropertychange", Yv)) : n === "focusout" && Bv();
  }
  function _y(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return hl(pl);
  }
  function ky(n, r) {
    if (n === "click")
      return hl(r);
  }
  function $v(n, r) {
    if (n === "input" || n === "change")
      return hl(r);
  }
  function Ly(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var za = typeof Object.is == "function" ? Object.is : Ly;
  function ps(n, r) {
    if (za(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var u = Object.keys(n), l = Object.keys(r);
    if (u.length !== l.length)
      return !1;
    for (l = 0; l < u.length; l++) {
      var c = u[l];
      if (!L.call(r, c) || !za(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function Qv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Wv(n, r) {
    var u = Qv(n);
    n = 0;
    for (var l; u; ) {
      if (u.nodeType === 3) {
        if (l = n + u.textContent.length, n <= r && l >= r)
          return { node: u, offset: r - n };
        n = l;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Qv(u);
    }
  }
  function Gv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Gv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ec() {
    for (var n = window, r = Jt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var u = typeof r.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u)
        n = r.contentWindow;
      else
        break;
      r = Jt(n.document);
    }
    return r;
  }
  function $i(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Cc(n) {
    var r = Ec(), u = n.focusedElem, l = n.selectionRange;
    if (r !== u && u && u.ownerDocument && Gv(u.ownerDocument.documentElement, u)) {
      if (l !== null && $i(u)) {
        if (r = l.start, n = l.end, n === void 0 && (n = r), "selectionStart" in u)
          u.selectionStart = r, u.selectionEnd = Math.min(n, u.value.length);
        else if (n = (r = u.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = u.textContent.length, d = Math.min(l.start, c);
          l = l.end === void 0 ? d : Math.min(l.end, c), !n.extend && d > l && (c = l, l = d, d = c), c = Wv(u, d);
          var S = Wv(
            u,
            l
          );
          c && S && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== S.node || n.focusOffset !== S.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > l ? (n.addRange(r), n.extend(S.node, S.offset)) : (r.setEnd(S.node, S.offset), n.addRange(r)));
        }
      }
      for (r = [], n = u; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof u.focus == "function" && u.focus(), u = 0; u < r.length; u++)
        n = r[u], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var qv = X && "documentMode" in document && 11 >= document.documentMode, oi = null, gd = null, vs = null, Sd = !1;
  function Xv(n, r, u) {
    var l = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Sd || oi == null || oi !== Jt(l) || (l = oi, "selectionStart" in l && $i(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), vs && ps(vs, l) || (vs = l, l = Ss(gd, "onSelect"), 0 < l.length && (r = new Ot("onSelect", "select", null, r, u), n.push({ event: r, listeners: l }), r.target = oi)));
  }
  function Tc(n, r) {
    var u = {};
    return u[n.toLowerCase()] = r.toLowerCase(), u["Webkit" + n] = "webkit" + r, u["Moz" + n] = "moz" + r, u;
  }
  var fo = { animationend: Tc("Animation", "AnimationEnd"), animationiteration: Tc("Animation", "AnimationIteration"), animationstart: Tc("Animation", "AnimationStart"), transitionend: Tc("Transition", "TransitionEnd") }, Ed = {}, Cd = {};
  X && (Cd = document.createElement("div").style, "AnimationEvent" in window || (delete fo.animationend.animation, delete fo.animationiteration.animation, delete fo.animationstart.animation), "TransitionEvent" in window || delete fo.transitionend.transition);
  function lr(n) {
    if (Ed[n])
      return Ed[n];
    if (!fo[n])
      return n;
    var r = fo[n], u;
    for (u in r)
      if (r.hasOwnProperty(u) && u in Cd)
        return Ed[n] = r[u];
    return n;
  }
  var Td = lr("animationend"), Kv = lr("animationiteration"), Zv = lr("animationstart"), Jv = lr("transitionend"), eh = /* @__PURE__ */ new Map(), th = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Qi(n, r) {
    eh.set(n, r), H(r, [n]);
  }
  for (var hs = 0; hs < th.length; hs++) {
    var po = th[hs], Ay = po.toLowerCase(), ms = po[0].toUpperCase() + po.slice(1);
    Qi(Ay, "on" + ms);
  }
  Qi(Td, "onAnimationEnd"), Qi(Kv, "onAnimationIteration"), Qi(Zv, "onAnimationStart"), Qi("dblclick", "onDoubleClick"), Qi("focusin", "onFocus"), Qi("focusout", "onBlur"), Qi(Jv, "onTransitionEnd"), E("onMouseEnter", ["mouseout", "mouseover"]), E("onMouseLeave", ["mouseout", "mouseover"]), E("onPointerEnter", ["pointerout", "pointerover"]), E("onPointerLeave", ["pointerout", "pointerover"]), H("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), H("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), H("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), H("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), H("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), H("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ys = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), zy = new Set("cancel close invalid load scroll toggle".split(" ").concat(ys));
  function nh(n, r, u) {
    var l = n.type || "unknown-event";
    n.currentTarget = u, ke(l, r, void 0, n), n.currentTarget = null;
  }
  function wc(n, r) {
    r = (r & 4) !== 0;
    for (var u = 0; u < n.length; u++) {
      var l = n[u], c = l.event;
      l = l.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var S = l.length - 1; 0 <= S; S--) {
            var w = l[S], D = w.instance, Y = w.currentTarget;
            if (w = w.listener, D !== d && c.isPropagationStopped())
              break e;
            nh(c, w, Y), d = D;
          }
        else
          for (S = 0; S < l.length; S++) {
            if (w = l[S], D = w.instance, Y = w.currentTarget, w = w.listener, D !== d && c.isPropagationStopped())
              break e;
            nh(c, w, Y), d = D;
          }
      }
    }
    if (gi)
      throw n = b, gi = !1, b = null, n;
  }
  function cn(n, r) {
    var u = r[Od];
    u === void 0 && (u = r[Od] = /* @__PURE__ */ new Set());
    var l = n + "__bubble";
    u.has(l) || (rh(r, n, 2, !1), u.add(l));
  }
  function Mu(n, r, u) {
    var l = 0;
    r && (l |= 4), rh(u, n, l, r);
  }
  var Wi = "_reactListening" + Math.random().toString(36).slice(2);
  function ml(n) {
    if (!n[Wi]) {
      n[Wi] = !0, N.forEach(function(u) {
        u !== "selectionchange" && (zy.has(u) || Mu(u, !1, n), Mu(u, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Wi] || (r[Wi] = !0, Mu("selectionchange", !1, r));
    }
  }
  function rh(n, r, u, l) {
    switch (ls(r)) {
      case 1:
        var c = ll;
        break;
      case 4:
        c = xu;
        break;
      default:
        c = Du;
    }
    u = c.bind(null, r, u, n), c = void 0, !mi || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), l ? c !== void 0 ? n.addEventListener(r, u, { capture: !0, passive: c }) : n.addEventListener(r, u, !0) : c !== void 0 ? n.addEventListener(r, u, { passive: c }) : n.addEventListener(r, u, !1);
  }
  function Rc(n, r, u, l, c) {
    var d = l;
    if (!(r & 1) && !(r & 2) && l !== null)
      e:
        for (; ; ) {
          if (l === null)
            return;
          var S = l.tag;
          if (S === 3 || S === 4) {
            var w = l.stateNode.containerInfo;
            if (w === c || w.nodeType === 8 && w.parentNode === c)
              break;
            if (S === 4)
              for (S = l.return; S !== null; ) {
                var D = S.tag;
                if ((D === 3 || D === 4) && (D = S.stateNode.containerInfo, D === c || D.nodeType === 8 && D.parentNode === c))
                  return;
                S = S.return;
              }
            for (; w !== null; ) {
              if (S = ja(w), S === null)
                return;
              if (D = S.tag, D === 5 || D === 6) {
                l = d = S;
                continue e;
              }
              w = w.parentNode;
            }
          }
          l = l.return;
        }
    ma(function() {
      var Y = d, ie = gt(u), oe = [];
      e: {
        var ae = eh.get(n);
        if (ae !== void 0) {
          var De = Ot, Ue = n;
          switch (n) {
            case "keypress":
              if ($(u) === 0)
                break e;
            case "keydown":
            case "keyup":
              De = xy;
              break;
            case "focusin":
              Ue = "focus", De = ii;
              break;
            case "focusout":
              Ue = "blur", De = ii;
              break;
            case "beforeblur":
            case "afterblur":
              De = ii;
              break;
            case "click":
              if (u.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              De = Vi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              De = ss;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              De = Dy;
              break;
            case Td:
            case Kv:
            case Zv:
              De = fs;
              break;
            case Jv:
              De = Av;
              break;
            case "scroll":
              De = ln;
              break;
            case "wheel":
              De = Yi;
              break;
            case "copy":
            case "cut":
            case "paste":
              De = Ry;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              De = mc;
          }
          var He = (r & 4) !== 0, Hn = !He && n === "scroll", z = He ? ae !== null ? ae + "Capture" : null : ae;
          He = [];
          for (var _ = Y, I; _ !== null; ) {
            I = _;
            var de = I.stateNode;
            if (I.tag === 5 && de !== null && (I = de, z !== null && (de = ya(_, z), de != null && He.push(gs(_, de, I)))), Hn)
              break;
            _ = _.return;
          }
          0 < He.length && (ae = new De(ae, Ue, null, u, ie), oe.push({ event: ae, listeners: He }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ae = n === "mouseover" || n === "pointerover", De = n === "mouseout" || n === "pointerout", ae && u !== st && (Ue = u.relatedTarget || u.fromElement) && (ja(Ue) || Ue[Gi]))
            break e;
          if ((De || ae) && (ae = ie.window === ie ? ie : (ae = ie.ownerDocument) ? ae.defaultView || ae.parentWindow : window, De ? (Ue = u.relatedTarget || u.toElement, De = Y, Ue = Ue ? ja(Ue) : null, Ue !== null && (Hn = Tt(Ue), Ue !== Hn || Ue.tag !== 5 && Ue.tag !== 6) && (Ue = null)) : (De = null, Ue = Y), De !== Ue)) {
            if (He = Vi, de = "onMouseLeave", z = "onMouseEnter", _ = "mouse", (n === "pointerout" || n === "pointerover") && (He = mc, de = "onPointerLeave", z = "onPointerEnter", _ = "pointer"), Hn = De == null ? ae : yl(De), I = Ue == null ? ae : yl(Ue), ae = new He(de, _ + "leave", De, u, ie), ae.target = Hn, ae.relatedTarget = I, de = null, ja(ie) === Y && (He = new He(z, _ + "enter", Ue, u, ie), He.target = I, He.relatedTarget = Hn, de = He), Hn = de, De && Ue)
              t: {
                for (He = De, z = Ue, _ = 0, I = He; I; I = vo(I))
                  _++;
                for (I = 0, de = z; de; de = vo(de))
                  I++;
                for (; 0 < _ - I; )
                  He = vo(He), _--;
                for (; 0 < I - _; )
                  z = vo(z), I--;
                for (; _--; ) {
                  if (He === z || z !== null && He === z.alternate)
                    break t;
                  He = vo(He), z = vo(z);
                }
                He = null;
              }
            else
              He = null;
            De !== null && wd(oe, ae, De, He, !1), Ue !== null && Hn !== null && wd(oe, Hn, Ue, He, !0);
          }
        }
        e: {
          if (ae = Y ? yl(Y) : window, De = ae.nodeName && ae.nodeName.toLowerCase(), De === "select" || De === "input" && ae.type === "file")
            var Ve = Pv;
          else if (Fv(ae))
            if (hd)
              Ve = $v;
            else {
              Ve = _y;
              var Ie = Ny;
            }
          else
            (De = ae.nodeName) && De.toLowerCase() === "input" && (ae.type === "checkbox" || ae.type === "radio") && (Ve = ky);
          if (Ve && (Ve = Ve(n, Y))) {
            Hv(oe, Ve, u, ie);
            break e;
          }
          Ie && Ie(n, ae, Y), n === "focusout" && (Ie = ae._wrapperState) && Ie.controlled && ae.type === "number" && Kn(ae, "number", ae.value);
        }
        switch (Ie = Y ? yl(Y) : window, n) {
          case "focusin":
            (Fv(Ie) || Ie.contentEditable === "true") && (oi = Ie, gd = Y, vs = null);
            break;
          case "focusout":
            vs = gd = oi = null;
            break;
          case "mousedown":
            Sd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Sd = !1, Xv(oe, u, ie);
            break;
          case "selectionchange":
            if (qv)
              break;
          case "keydown":
          case "keyup":
            Xv(oe, u, ie);
        }
        var Qe;
        if (ui)
          e: {
            switch (n) {
              case "compositionstart":
                var dt = "onCompositionStart";
                break e;
              case "compositionend":
                dt = "onCompositionEnd";
                break e;
              case "compositionupdate":
                dt = "onCompositionUpdate";
                break e;
            }
            dt = void 0;
          }
        else
          dl ? Uv(n, u) && (dt = "onCompositionEnd") : n === "keydown" && u.keyCode === 229 && (dt = "onCompositionStart");
        dt && (zv && u.locale !== "ko" && (dl || dt !== "onCompositionStart" ? dt === "onCompositionEnd" && dl && (Qe = V()) : (ai = ie, g = "value" in ai ? ai.value : ai.textContent, dl = !0)), Ie = Ss(Y, dt), 0 < Ie.length && (dt = new cd(dt, n, null, u, ie), oe.push({ event: dt, listeners: Ie }), Qe ? dt.data = Qe : (Qe = Sc(u), Qe !== null && (dt.data = Qe)))), (Qe = gc ? My(n, u) : Oy(n, u)) && (Y = Ss(Y, "onBeforeInput"), 0 < Y.length && (ie = new cd("onBeforeInput", "beforeinput", null, u, ie), oe.push({ event: ie, listeners: Y }), ie.data = Qe));
      }
      wc(oe, r);
    });
  }
  function gs(n, r, u) {
    return { instance: n, listener: r, currentTarget: u };
  }
  function Ss(n, r) {
    for (var u = r + "Capture", l = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = ya(n, u), d != null && l.unshift(gs(n, d, c)), d = ya(n, r), d != null && l.push(gs(n, d, c))), n = n.return;
    }
    return l;
  }
  function vo(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function wd(n, r, u, l, c) {
    for (var d = r._reactName, S = []; u !== null && u !== l; ) {
      var w = u, D = w.alternate, Y = w.stateNode;
      if (D !== null && D === l)
        break;
      w.tag === 5 && Y !== null && (w = Y, c ? (D = ya(u, d), D != null && S.unshift(gs(u, D, w))) : c || (D = ya(u, d), D != null && S.push(gs(u, D, w)))), u = u.return;
    }
    S.length !== 0 && n.push({ event: r, listeners: S });
  }
  var Rd = /\r\n?/g, jy = /\u0000|\uFFFD/g;
  function bd(n) {
    return (typeof n == "string" ? n : "" + n).replace(Rd, `
`).replace(jy, "");
  }
  function bc(n, r, u) {
    if (r = bd(r), bd(n) !== r && u)
      throw Error(y(425));
  }
  function xc() {
  }
  var xd = null, ho = null;
  function Es(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var mo = typeof setTimeout == "function" ? setTimeout : void 0, ah = typeof clearTimeout == "function" ? clearTimeout : void 0, Dd = typeof Promise == "function" ? Promise : void 0, Md = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dd < "u" ? function(n) {
    return Dd.resolve(null).then(n).catch(Uy);
  } : mo;
  function Uy(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Ou(n, r) {
    var u = r, l = 0;
    do {
      var c = u.nextSibling;
      if (n.removeChild(u), c && c.nodeType === 8)
        if (u = c.data, u === "/$") {
          if (l === 0) {
            n.removeChild(c), Ru(r);
            return;
          }
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$!" || l++;
      u = c;
    } while (u);
    Ru(r);
  }
  function li(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function Cs(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var u = n.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          u === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Nu = Math.random().toString(36).slice(2), wi = "__reactFiber$" + Nu, yo = "__reactProps$" + Nu, Gi = "__reactContainer$" + Nu, Od = "__reactEvents$" + Nu, Iy = "__reactListeners$" + Nu, Nd = "__reactHandles$" + Nu;
  function ja(n) {
    var r = n[wi];
    if (r)
      return r;
    for (var u = n.parentNode; u; ) {
      if (r = u[Gi] || u[wi]) {
        if (u = r.alternate, r.child !== null || u !== null && u.child !== null)
          for (n = Cs(n); n !== null; ) {
            if (u = n[wi])
              return u;
            n = Cs(n);
          }
        return r;
      }
      n = u, u = n.parentNode;
    }
    return null;
  }
  function Ts(n) {
    return n = n[wi] || n[Gi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function yl(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(y(33));
  }
  function Ge(n) {
    return n[yo] || null;
  }
  var _u = [], yn = -1;
  function bt(n) {
    return { current: n };
  }
  function qt(n) {
    0 > yn || (n.current = _u[yn], _u[yn] = null, yn--);
  }
  function Kt(n, r) {
    yn++, _u[yn] = n.current, n.current = r;
  }
  var Ri = {}, ft = bt(Ri), jn = bt(!1), ta = Ri;
  function Ua(n, r) {
    var u = n.type.contextTypes;
    if (!u)
      return Ri;
    var l = n.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === r)
      return l.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in u)
      c[d] = r[d];
    return l && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Rn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ia() {
    qt(jn), qt(ft);
  }
  function ku(n, r, u) {
    if (ft.current !== Ri)
      throw Error(y(168));
    Kt(ft, r), Kt(jn, u);
  }
  function ws(n, r, u) {
    var l = n.stateNode;
    if (r = r.childContextTypes, typeof l.getChildContext != "function")
      return u;
    l = l.getChildContext();
    for (var c in l)
      if (!(c in r))
        throw Error(y(108, Ct(n) || "Unknown", c));
    return x({}, u, l);
  }
  function Dc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ri, ta = ft.current, Kt(ft, n), Kt(jn, jn.current), !0;
  }
  function ih(n, r, u) {
    var l = n.stateNode;
    if (!l)
      throw Error(y(169));
    u ? (n = ws(n, r, ta), l.__reactInternalMemoizedMergedChildContext = n, qt(jn), qt(ft), Kt(ft, n)) : qt(jn), Kt(jn, u);
  }
  var Ea = null, sr = !1, Rs = !1;
  function _d(n) {
    Ea === null ? Ea = [n] : Ea.push(n);
  }
  function kd(n) {
    sr = !0, _d(n);
  }
  function na() {
    if (!Rs && Ea !== null) {
      Rs = !0;
      var n = 0, r = Qt;
      try {
        var u = Ea;
        for (Qt = 1; n < u.length; n++) {
          var l = u[n];
          do
            l = l(!0);
          while (l !== null);
        }
        Ea = null, sr = !1;
      } catch (c) {
        throw Ea !== null && (Ea = Ea.slice(n + 1)), pn(ni, na), c;
      } finally {
        Qt = r, Rs = !1;
      }
    }
    return null;
  }
  var Lu = [], ra = 0, go = null, gl = 0, aa = [], Mr = 0, Fa = null, mr = 1, qi = "";
  function Ca(n, r) {
    Lu[ra++] = gl, Lu[ra++] = go, go = n, gl = r;
  }
  function Ld(n, r, u) {
    aa[Mr++] = mr, aa[Mr++] = qi, aa[Mr++] = Fa, Fa = n;
    var l = mr;
    n = qi;
    var c = 32 - Ur(l) - 1;
    l &= ~(1 << c), u += 1;
    var d = 32 - Ur(r) + c;
    if (30 < d) {
      var S = c - c % 5;
      d = (l & (1 << S) - 1).toString(32), l >>= S, c -= S, mr = 1 << 32 - Ur(r) + c | u << c | l, qi = d + n;
    } else
      mr = 1 << d | u << c | l, qi = n;
  }
  function Mc(n) {
    n.return !== null && (Ca(n, 1), Ld(n, 1, 0));
  }
  function Ad(n) {
    for (; n === go; )
      go = Lu[--ra], Lu[ra] = null, gl = Lu[--ra], Lu[ra] = null;
    for (; n === Fa; )
      Fa = aa[--Mr], aa[Mr] = null, qi = aa[--Mr], aa[Mr] = null, mr = aa[--Mr], aa[Mr] = null;
  }
  var Ta = null, ia = null, gn = !1, Ha = null;
  function zd(n, r) {
    var u = Qa(5, null, null, 0);
    u.elementType = "DELETED", u.stateNode = r, u.return = n, r = n.deletions, r === null ? (n.deletions = [u], n.flags |= 16) : r.push(u);
  }
  function uh(n, r) {
    switch (n.tag) {
      case 5:
        var u = n.type;
        return r = r.nodeType !== 1 || u.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ta = n, ia = li(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ta = n, ia = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (u = Fa !== null ? { id: mr, overflow: qi } : null, n.memoizedState = { dehydrated: r, treeContext: u, retryLane: 1073741824 }, u = Qa(18, null, null, 0), u.stateNode = r, u.return = n, n.child = u, Ta = n, ia = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Oc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Nc(n) {
    if (gn) {
      var r = ia;
      if (r) {
        var u = r;
        if (!uh(n, r)) {
          if (Oc(n))
            throw Error(y(418));
          r = li(u.nextSibling);
          var l = Ta;
          r && uh(n, r) ? zd(l, u) : (n.flags = n.flags & -4097 | 2, gn = !1, Ta = n);
        }
      } else {
        if (Oc(n))
          throw Error(y(418));
        n.flags = n.flags & -4097 | 2, gn = !1, Ta = n;
      }
    }
  }
  function oh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Ta = n;
  }
  function _c(n) {
    if (n !== Ta)
      return !1;
    if (!gn)
      return oh(n), gn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Es(n.type, n.memoizedProps)), r && (r = ia)) {
      if (Oc(n))
        throw lh(), Error(y(418));
      for (; r; )
        zd(n, r), r = li(r.nextSibling);
    }
    if (oh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(y(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var u = n.data;
            if (u === "/$") {
              if (r === 0) {
                ia = li(n.nextSibling);
                break e;
              }
              r--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ia = null;
      }
    } else
      ia = Ta ? li(n.stateNode.nextSibling) : null;
    return !0;
  }
  function lh() {
    for (var n = ia; n; )
      n = li(n.nextSibling);
  }
  function Nn() {
    ia = Ta = null, gn = !1;
  }
  function jd(n) {
    Ha === null ? Ha = [n] : Ha.push(n);
  }
  var kc = M.ReactCurrentBatchConfig;
  function wa(n, r) {
    if (n && n.defaultProps) {
      r = x({}, r), n = n.defaultProps;
      for (var u in n)
        r[u] === void 0 && (r[u] = n[u]);
      return r;
    }
    return r;
  }
  var bi = bt(null), Lc = null, Au = null, Ud = null;
  function Id() {
    Ud = Au = Lc = null;
  }
  function zu(n) {
    var r = bi.current;
    qt(bi), n._currentValue = r;
  }
  function cr(n, r, u) {
    for (; n !== null; ) {
      var l = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, l !== null && (l.childLanes |= r)) : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r), n === u)
        break;
      n = n.return;
    }
  }
  function Se(n, r) {
    Lc = n, Ud = Au = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Qn = !0), n.firstContext = null);
  }
  function Fn(n) {
    var r = n._currentValue;
    if (Ud !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Au === null) {
        if (Lc === null)
          throw Error(y(308));
        Au = n, Lc.dependencies = { lanes: 0, firstContext: n };
      } else
        Au = Au.next = n;
    return r;
  }
  var yr = null;
  function Fd(n) {
    yr === null ? yr = [n] : yr.push(n);
  }
  function sh(n, r, u, l) {
    var c = r.interleaved;
    return c === null ? (u.next = u, Fd(r)) : (u.next = c.next, c.next = u), r.interleaved = u, Xi(n, l);
  }
  function Xi(n, r) {
    n.lanes |= r;
    var u = n.alternate;
    for (u !== null && (u.lanes |= r), u = n, n = n.return; n !== null; )
      n.childLanes |= r, u = n.alternate, u !== null && (u.childLanes |= r), u = n, n = n.return;
    return u.tag === 3 ? u.stateNode : null;
  }
  var ju = !1;
  function Hd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function tr(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ki(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Uu(n, r, u) {
    var l = n.updateQueue;
    if (l === null)
      return null;
    if (l = l.shared, Lt & 2) {
      var c = l.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), l.pending = r, Xi(n, u);
    }
    return c = l.interleaved, c === null ? (r.next = r, Fd(l)) : (r.next = c.next, c.next = r), l.interleaved = r, Xi(n, u);
  }
  function Ac(n, r, u) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (u & 4194240) !== 0)) {
      var l = r.lanes;
      l &= n.pendingLanes, u |= l, r.lanes = u, Ci(n, u);
    }
  }
  function Pd(n, r) {
    var u = n.updateQueue, l = n.alternate;
    if (l !== null && (l = l.updateQueue, u === l)) {
      var c = null, d = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var S = { eventTime: u.eventTime, lane: u.lane, tag: u.tag, payload: u.payload, callback: u.callback, next: null };
          d === null ? c = d = S : d = d.next = S, u = u.next;
        } while (u !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      u = { baseState: l.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: l.shared, effects: l.effects }, n.updateQueue = u;
      return;
    }
    n = u.lastBaseUpdate, n === null ? u.firstBaseUpdate = r : n.next = r, u.lastBaseUpdate = r;
  }
  function Iu(n, r, u, l) {
    var c = n.updateQueue;
    ju = !1;
    var d = c.firstBaseUpdate, S = c.lastBaseUpdate, w = c.shared.pending;
    if (w !== null) {
      c.shared.pending = null;
      var D = w, Y = D.next;
      D.next = null, S === null ? d = Y : S.next = Y, S = D;
      var ie = n.alternate;
      ie !== null && (ie = ie.updateQueue, w = ie.lastBaseUpdate, w !== S && (w === null ? ie.firstBaseUpdate = Y : w.next = Y, ie.lastBaseUpdate = D));
    }
    if (d !== null) {
      var oe = c.baseState;
      S = 0, ie = Y = D = null, w = d;
      do {
        var ae = w.lane, De = w.eventTime;
        if ((l & ae) === ae) {
          ie !== null && (ie = ie.next = {
            eventTime: De,
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          });
          e: {
            var Ue = n, He = w;
            switch (ae = r, De = u, He.tag) {
              case 1:
                if (Ue = He.payload, typeof Ue == "function") {
                  oe = Ue.call(De, oe, ae);
                  break e;
                }
                oe = Ue;
                break e;
              case 3:
                Ue.flags = Ue.flags & -65537 | 128;
              case 0:
                if (Ue = He.payload, ae = typeof Ue == "function" ? Ue.call(De, oe, ae) : Ue, ae == null)
                  break e;
                oe = x({}, oe, ae);
                break e;
              case 2:
                ju = !0;
            }
          }
          w.callback !== null && w.lane !== 0 && (n.flags |= 64, ae = c.effects, ae === null ? c.effects = [w] : ae.push(w));
        } else
          De = { eventTime: De, lane: ae, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, ie === null ? (Y = ie = De, D = oe) : ie = ie.next = De, S |= ae;
        if (w = w.next, w === null) {
          if (w = c.shared.pending, w === null)
            break;
          ae = w, w = ae.next, ae.next = null, c.lastBaseUpdate = ae, c.shared.pending = null;
        }
      } while (1);
      if (ie === null && (D = oe), c.baseState = D, c.firstBaseUpdate = Y, c.lastBaseUpdate = ie, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          S |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      tu |= S, n.lanes = S, n.memoizedState = oe;
    }
  }
  function So(n, r, u) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var l = n[r], c = l.callback;
        if (c !== null) {
          if (l.callback = null, l = u, typeof c != "function")
            throw Error(y(191, c));
          c.call(l);
        }
      }
  }
  var ch = new v.Component().refs;
  function Vd(n, r, u, l) {
    r = n.memoizedState, u = u(l, r), u = u == null ? r : x({}, r, u), n.memoizedState = u, n.lanes === 0 && (n.updateQueue.baseState = u);
  }
  var zc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Tt(n) === n : !1;
  }, enqueueSetState: function(n, r, u) {
    n = n._reactInternals;
    var l = kr(), c = Wn(n), d = Ki(l, c);
    d.payload = r, u != null && (d.callback = u), r = Uu(n, d, c), r !== null && (Lr(r, n, c, l), Ac(r, n, c));
  }, enqueueReplaceState: function(n, r, u) {
    n = n._reactInternals;
    var l = kr(), c = Wn(n), d = Ki(l, c);
    d.tag = 1, d.payload = r, u != null && (d.callback = u), r = Uu(n, d, c), r !== null && (Lr(r, n, c, l), Ac(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var u = kr(), l = Wn(n), c = Ki(u, l);
    c.tag = 2, r != null && (c.callback = r), r = Uu(n, c, l), r !== null && (Lr(r, n, l, u), Ac(r, n, l));
  } };
  function fh(n, r, u, l, c, d, S) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(l, d, S) : r.prototype && r.prototype.isPureReactComponent ? !ps(u, l) || !ps(c, d) : !0;
  }
  function dh(n, r, u) {
    var l = !1, c = Ri, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Fn(d) : (c = Rn(r) ? ta : ft.current, l = r.contextTypes, d = (l = l != null) ? Ua(n, c) : Ri), r = new r(u, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = zc, n.stateNode = r, r._reactInternals = n, l && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function ph(n, r, u, l) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(u, l), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(u, l), r.state !== n && zc.enqueueReplaceState(r, r.state, null);
  }
  function jc(n, r, u, l) {
    var c = n.stateNode;
    c.props = u, c.state = n.memoizedState, c.refs = ch, Hd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Fn(d) : (d = Rn(r) ? ta : ft.current, c.context = Ua(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Vd(n, r, d, u), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && zc.enqueueReplaceState(c, c.state, null), Iu(n, u, c, l), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Sl(n, r, u) {
    if (n = u.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (u._owner) {
        if (u = u._owner, u) {
          if (u.tag !== 1)
            throw Error(y(309));
          var l = u.stateNode;
        }
        if (!l)
          throw Error(y(147, n));
        var c = l, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(S) {
          var w = c.refs;
          w === ch && (w = c.refs = {}), S === null ? delete w[d] : w[d] = S;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(y(284));
      if (!u._owner)
        throw Error(y(290, n));
    }
    return n;
  }
  function Uc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(y(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function vh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function hh(n) {
    function r(z, _) {
      if (n) {
        var I = z.deletions;
        I === null ? (z.deletions = [_], z.flags |= 16) : I.push(_);
      }
    }
    function u(z, _) {
      if (!n)
        return null;
      for (; _ !== null; )
        r(z, _), _ = _.sibling;
      return null;
    }
    function l(z, _) {
      for (z = /* @__PURE__ */ new Map(); _ !== null; )
        _.key !== null ? z.set(_.key, _) : z.set(_.index, _), _ = _.sibling;
      return z;
    }
    function c(z, _) {
      return z = Qu(z, _), z.index = 0, z.sibling = null, z;
    }
    function d(z, _, I) {
      return z.index = I, n ? (I = z.alternate, I !== null ? (I = I.index, I < _ ? (z.flags |= 2, _) : I) : (z.flags |= 2, _)) : (z.flags |= 1048576, _);
    }
    function S(z) {
      return n && z.alternate === null && (z.flags |= 2), z;
    }
    function w(z, _, I, de) {
      return _ === null || _.tag !== 6 ? (_ = Bs(I, z.mode, de), _.return = z, _) : (_ = c(_, I), _.return = z, _);
    }
    function D(z, _, I, de) {
      var Ve = I.type;
      return Ve === Te ? ie(z, _, I.props.children, de, I.key) : _ !== null && (_.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === it && vh(Ve) === _.type) ? (de = c(_, I.props), de.ref = Sl(z, _, I), de.return = z, de) : (de = mf(I.type, I.key, I.props, null, z.mode, de), de.ref = Sl(z, _, I), de.return = z, de);
    }
    function Y(z, _, I, de) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== I.containerInfo || _.stateNode.implementation !== I.implementation ? (_ = Io(I, z.mode, de), _.return = z, _) : (_ = c(_, I.children || []), _.return = z, _);
    }
    function ie(z, _, I, de, Ve) {
      return _ === null || _.tag !== 7 ? (_ = Uo(I, z.mode, de, Ve), _.return = z, _) : (_ = c(_, I), _.return = z, _);
    }
    function oe(z, _, I) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number")
        return _ = Bs("" + _, z.mode, I), _.return = z, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case pe:
            return I = mf(_.type, _.key, _.props, null, z.mode, I), I.ref = Sl(z, null, _), I.return = z, I;
          case ue:
            return _ = Io(_, z.mode, I), _.return = z, _;
          case it:
            var de = _._init;
            return oe(z, de(_._payload), I);
        }
        if (tn(_) || Ne(_))
          return _ = Uo(_, z.mode, I, null), _.return = z, _;
        Uc(z, _);
      }
      return null;
    }
    function ae(z, _, I, de) {
      var Ve = _ !== null ? _.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number")
        return Ve !== null ? null : w(z, _, "" + I, de);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case pe:
            return I.key === Ve ? D(z, _, I, de) : null;
          case ue:
            return I.key === Ve ? Y(z, _, I, de) : null;
          case it:
            return Ve = I._init, ae(
              z,
              _,
              Ve(I._payload),
              de
            );
        }
        if (tn(I) || Ne(I))
          return Ve !== null ? null : ie(z, _, I, de, null);
        Uc(z, I);
      }
      return null;
    }
    function De(z, _, I, de, Ve) {
      if (typeof de == "string" && de !== "" || typeof de == "number")
        return z = z.get(I) || null, w(_, z, "" + de, Ve);
      if (typeof de == "object" && de !== null) {
        switch (de.$$typeof) {
          case pe:
            return z = z.get(de.key === null ? I : de.key) || null, D(_, z, de, Ve);
          case ue:
            return z = z.get(de.key === null ? I : de.key) || null, Y(_, z, de, Ve);
          case it:
            var Ie = de._init;
            return De(z, _, I, Ie(de._payload), Ve);
        }
        if (tn(de) || Ne(de))
          return z = z.get(I) || null, ie(_, z, de, Ve, null);
        Uc(_, de);
      }
      return null;
    }
    function Ue(z, _, I, de) {
      for (var Ve = null, Ie = null, Qe = _, dt = _ = 0, pr = null; Qe !== null && dt < I.length; dt++) {
        Qe.index > dt ? (pr = Qe, Qe = null) : pr = Qe.sibling;
        var $t = ae(z, Qe, I[dt], de);
        if ($t === null) {
          Qe === null && (Qe = pr);
          break;
        }
        n && Qe && $t.alternate === null && r(z, Qe), _ = d($t, _, dt), Ie === null ? Ve = $t : Ie.sibling = $t, Ie = $t, Qe = pr;
      }
      if (dt === I.length)
        return u(z, Qe), gn && Ca(z, dt), Ve;
      if (Qe === null) {
        for (; dt < I.length; dt++)
          Qe = oe(z, I[dt], de), Qe !== null && (_ = d(Qe, _, dt), Ie === null ? Ve = Qe : Ie.sibling = Qe, Ie = Qe);
        return gn && Ca(z, dt), Ve;
      }
      for (Qe = l(z, Qe); dt < I.length; dt++)
        pr = De(Qe, z, dt, I[dt], de), pr !== null && (n && pr.alternate !== null && Qe.delete(pr.key === null ? dt : pr.key), _ = d(pr, _, dt), Ie === null ? Ve = pr : Ie.sibling = pr, Ie = pr);
      return n && Qe.forEach(function(Wu) {
        return r(z, Wu);
      }), gn && Ca(z, dt), Ve;
    }
    function He(z, _, I, de) {
      var Ve = Ne(I);
      if (typeof Ve != "function")
        throw Error(y(150));
      if (I = Ve.call(I), I == null)
        throw Error(y(151));
      for (var Ie = Ve = null, Qe = _, dt = _ = 0, pr = null, $t = I.next(); Qe !== null && !$t.done; dt++, $t = I.next()) {
        Qe.index > dt ? (pr = Qe, Qe = null) : pr = Qe.sibling;
        var Wu = ae(z, Qe, $t.value, de);
        if (Wu === null) {
          Qe === null && (Qe = pr);
          break;
        }
        n && Qe && Wu.alternate === null && r(z, Qe), _ = d(Wu, _, dt), Ie === null ? Ve = Wu : Ie.sibling = Wu, Ie = Wu, Qe = pr;
      }
      if ($t.done)
        return u(
          z,
          Qe
        ), gn && Ca(z, dt), Ve;
      if (Qe === null) {
        for (; !$t.done; dt++, $t = I.next())
          $t = oe(z, $t.value, de), $t !== null && (_ = d($t, _, dt), Ie === null ? Ve = $t : Ie.sibling = $t, Ie = $t);
        return gn && Ca(z, dt), Ve;
      }
      for (Qe = l(z, Qe); !$t.done; dt++, $t = I.next())
        $t = De(Qe, z, dt, $t.value, de), $t !== null && (n && $t.alternate !== null && Qe.delete($t.key === null ? dt : $t.key), _ = d($t, _, dt), Ie === null ? Ve = $t : Ie.sibling = $t, Ie = $t);
      return n && Qe.forEach(function(ag) {
        return r(z, ag);
      }), gn && Ca(z, dt), Ve;
    }
    function Hn(z, _, I, de) {
      if (typeof I == "object" && I !== null && I.type === Te && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case pe:
            e: {
              for (var Ve = I.key, Ie = _; Ie !== null; ) {
                if (Ie.key === Ve) {
                  if (Ve = I.type, Ve === Te) {
                    if (Ie.tag === 7) {
                      u(z, Ie.sibling), _ = c(Ie, I.props.children), _.return = z, z = _;
                      break e;
                    }
                  } else if (Ie.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === it && vh(Ve) === Ie.type) {
                    u(z, Ie.sibling), _ = c(Ie, I.props), _.ref = Sl(z, Ie, I), _.return = z, z = _;
                    break e;
                  }
                  u(z, Ie);
                  break;
                } else
                  r(z, Ie);
                Ie = Ie.sibling;
              }
              I.type === Te ? (_ = Uo(I.props.children, z.mode, de, I.key), _.return = z, z = _) : (de = mf(I.type, I.key, I.props, null, z.mode, de), de.ref = Sl(z, _, I), de.return = z, z = de);
            }
            return S(z);
          case ue:
            e: {
              for (Ie = I.key; _ !== null; ) {
                if (_.key === Ie)
                  if (_.tag === 4 && _.stateNode.containerInfo === I.containerInfo && _.stateNode.implementation === I.implementation) {
                    u(z, _.sibling), _ = c(_, I.children || []), _.return = z, z = _;
                    break e;
                  } else {
                    u(z, _);
                    break;
                  }
                else
                  r(z, _);
                _ = _.sibling;
              }
              _ = Io(I, z.mode, de), _.return = z, z = _;
            }
            return S(z);
          case it:
            return Ie = I._init, Hn(z, _, Ie(I._payload), de);
        }
        if (tn(I))
          return Ue(z, _, I, de);
        if (Ne(I))
          return He(z, _, I, de);
        Uc(z, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I, _ !== null && _.tag === 6 ? (u(z, _.sibling), _ = c(_, I), _.return = z, z = _) : (u(z, _), _ = Bs(I, z.mode, de), _.return = z, z = _), S(z)) : u(z, _);
    }
    return Hn;
  }
  var El = hh(!0), mh = hh(!1), bs = {}, si = bt(bs), xs = bt(bs), Cl = bt(bs);
  function Eo(n) {
    if (n === bs)
      throw Error(y(174));
    return n;
  }
  function Bd(n, r) {
    switch (Kt(Cl, r), Kt(xs, n), Kt(si, bs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : nn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = nn(r, n);
    }
    qt(si), Kt(si, r);
  }
  function Fu() {
    qt(si), qt(xs), qt(Cl);
  }
  function et(n) {
    Eo(Cl.current);
    var r = Eo(si.current), u = nn(r, n.type);
    r !== u && (Kt(xs, n), Kt(si, u));
  }
  function Nt(n) {
    xs.current === n && (qt(si), qt(xs));
  }
  var rt = bt(0);
  function _n(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var u = r.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || u.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Pa = [];
  function Ic() {
    for (var n = 0; n < Pa.length; n++)
      Pa[n]._workInProgressVersionPrimary = null;
    Pa.length = 0;
  }
  var Fc = M.ReactCurrentDispatcher, Yd = M.ReactCurrentBatchConfig, Co = 0, Sn = null, K = null, Ut = null, lt = !1, xi = !1, Ra = 0, To = 0;
  function En() {
    throw Error(y(321));
  }
  function wo(n, r) {
    if (r === null)
      return !1;
    for (var u = 0; u < r.length && u < n.length; u++)
      if (!za(n[u], r[u]))
        return !1;
    return !0;
  }
  function Hu(n, r, u, l, c, d) {
    if (Co = d, Sn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Fc.current = n === null || n.memoizedState === null ? Hy : Py, n = u(l, c), xi) {
      d = 0;
      do {
        if (xi = !1, Ra = 0, 25 <= d)
          throw Error(y(301));
        d += 1, Ut = K = null, r.updateQueue = null, Fc.current = Qd, n = u(l, c);
      } while (xi);
    }
    if (Fc.current = tf, r = K !== null && K.next !== null, Co = 0, Ut = K = Sn = null, lt = !1, r)
      throw Error(y(300));
    return n;
  }
  function Ro() {
    var n = Ra !== 0;
    return Ra = 0, n;
  }
  function Va() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ut === null ? Sn.memoizedState = Ut = n : Ut = Ut.next = n, Ut;
  }
  function ua() {
    if (K === null) {
      var n = Sn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = K.next;
    var r = Ut === null ? Sn.memoizedState : Ut.next;
    if (r !== null)
      Ut = r, K = n;
    else {
      if (n === null)
        throw Error(y(310));
      K = n, n = { memoizedState: K.memoizedState, baseState: K.baseState, baseQueue: K.baseQueue, queue: K.queue, next: null }, Ut === null ? Sn.memoizedState = Ut = n : Ut = Ut.next = n;
    }
    return Ut;
  }
  function bo(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ds(n) {
    var r = ua(), u = r.queue;
    if (u === null)
      throw Error(y(311));
    u.lastRenderedReducer = n;
    var l = K, c = l.baseQueue, d = u.pending;
    if (d !== null) {
      if (c !== null) {
        var S = c.next;
        c.next = d.next, d.next = S;
      }
      l.baseQueue = c = d, u.pending = null;
    }
    if (c !== null) {
      d = c.next, l = l.baseState;
      var w = S = null, D = null, Y = d;
      do {
        var ie = Y.lane;
        if ((Co & ie) === ie)
          D !== null && (D = D.next = { lane: 0, action: Y.action, hasEagerState: Y.hasEagerState, eagerState: Y.eagerState, next: null }), l = Y.hasEagerState ? Y.eagerState : n(l, Y.action);
        else {
          var oe = {
            lane: ie,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null
          };
          D === null ? (w = D = oe, S = l) : D = D.next = oe, Sn.lanes |= ie, tu |= ie;
        }
        Y = Y.next;
      } while (Y !== null && Y !== d);
      D === null ? S = l : D.next = w, za(l, r.memoizedState) || (Qn = !0), r.memoizedState = l, r.baseState = S, r.baseQueue = D, u.lastRenderedState = l;
    }
    if (n = u.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Sn.lanes |= d, tu |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (u.lanes = 0);
    return [r.memoizedState, u.dispatch];
  }
  function Ms(n) {
    var r = ua(), u = r.queue;
    if (u === null)
      throw Error(y(311));
    u.lastRenderedReducer = n;
    var l = u.dispatch, c = u.pending, d = r.memoizedState;
    if (c !== null) {
      u.pending = null;
      var S = c = c.next;
      do
        d = n(d, S.action), S = S.next;
      while (S !== c);
      za(d, r.memoizedState) || (Qn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), u.lastRenderedState = d;
    }
    return [d, l];
  }
  function Hc() {
  }
  function Pc(n, r) {
    var u = Sn, l = ua(), c = r(), d = !za(l.memoizedState, c);
    if (d && (l.memoizedState = c, Qn = !0), l = l.queue, Os(Yc.bind(null, u, l, n), [n]), l.getSnapshot !== r || d || Ut !== null && Ut.memoizedState.tag & 1) {
      if (u.flags |= 2048, xo(9, Bc.bind(null, u, l, c, r), void 0, null), kn === null)
        throw Error(y(349));
      Co & 30 || Vc(u, r, c);
    }
    return c;
  }
  function Vc(n, r, u) {
    n.flags |= 16384, n = { getSnapshot: r, value: u }, r = Sn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Sn.updateQueue = r, r.stores = [n]) : (u = r.stores, u === null ? r.stores = [n] : u.push(n));
  }
  function Bc(n, r, u, l) {
    r.value = u, r.getSnapshot = l, $c(r) && Qc(n);
  }
  function Yc(n, r, u) {
    return u(function() {
      $c(r) && Qc(n);
    });
  }
  function $c(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var u = r();
      return !za(n, u);
    } catch {
      return !0;
    }
  }
  function Qc(n) {
    var r = Xi(n, 1);
    r !== null && Lr(r, n, 1, -1);
  }
  function Wc(n) {
    var r = Va();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: bo, lastRenderedState: n }, r.queue = n, n = n.dispatch = ef.bind(null, Sn, n), [r.memoizedState, n];
  }
  function xo(n, r, u, l) {
    return n = { tag: n, create: r, destroy: u, deps: l, next: null }, r = Sn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Sn.updateQueue = r, r.lastEffect = n.next = n) : (u = r.lastEffect, u === null ? r.lastEffect = n.next = n : (l = u.next, u.next = n, n.next = l, r.lastEffect = n)), n;
  }
  function Gc() {
    return ua().memoizedState;
  }
  function Do(n, r, u, l) {
    var c = Va();
    Sn.flags |= n, c.memoizedState = xo(1 | r, u, void 0, l === void 0 ? null : l);
  }
  function Zi(n, r, u, l) {
    var c = ua();
    l = l === void 0 ? null : l;
    var d = void 0;
    if (K !== null) {
      var S = K.memoizedState;
      if (d = S.destroy, l !== null && wo(l, S.deps)) {
        c.memoizedState = xo(r, u, d, l);
        return;
      }
    }
    Sn.flags |= n, c.memoizedState = xo(1 | r, u, d, l);
  }
  function qc(n, r) {
    return Do(8390656, 8, n, r);
  }
  function Os(n, r) {
    return Zi(2048, 8, n, r);
  }
  function Xc(n, r) {
    return Zi(4, 2, n, r);
  }
  function Kc(n, r) {
    return Zi(4, 4, n, r);
  }
  function $d(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Tl(n, r, u) {
    return u = u != null ? u.concat([n]) : null, Zi(4, 4, $d.bind(null, r, n), u);
  }
  function Zc() {
  }
  function wl(n, r) {
    var u = ua();
    r = r === void 0 ? null : r;
    var l = u.memoizedState;
    return l !== null && r !== null && wo(r, l[1]) ? l[0] : (u.memoizedState = [n, r], n);
  }
  function Pu(n, r) {
    var u = ua();
    r = r === void 0 ? null : r;
    var l = u.memoizedState;
    return l !== null && r !== null && wo(r, l[1]) ? l[0] : (n = n(), u.memoizedState = [n, r], n);
  }
  function oa(n, r, u) {
    return Co & 21 ? (za(u, r) || (u = nl(), Sn.lanes |= u, tu |= u, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Qn = !0), n.memoizedState = u);
  }
  function Fy(n, r) {
    var u = Qt;
    Qt = u !== 0 && 4 > u ? u : 4, n(!0);
    var l = Yd.transition;
    Yd.transition = {};
    try {
      n(!1), r();
    } finally {
      Qt = u, Yd.transition = l;
    }
  }
  function fn() {
    return ua().memoizedState;
  }
  function Jc(n, r, u) {
    var l = Wn(n);
    if (u = { lane: l, action: u, hasEagerState: !1, eagerState: null, next: null }, Rl(n))
      Ns(r, u);
    else if (u = sh(n, r, u, l), u !== null) {
      var c = kr();
      Lr(u, n, l, c), yh(u, r, l);
    }
  }
  function ef(n, r, u) {
    var l = Wn(n), c = { lane: l, action: u, hasEagerState: !1, eagerState: null, next: null };
    if (Rl(n))
      Ns(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var S = r.lastRenderedState, w = d(S, u);
          if (c.hasEagerState = !0, c.eagerState = w, za(w, S)) {
            var D = r.interleaved;
            D === null ? (c.next = c, Fd(r)) : (c.next = D.next, D.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      u = sh(n, r, c, l), u !== null && (c = kr(), Lr(u, n, l, c), yh(u, r, l));
    }
  }
  function Rl(n) {
    var r = n.alternate;
    return n === Sn || r !== null && r === Sn;
  }
  function Ns(n, r) {
    xi = lt = !0;
    var u = n.pending;
    u === null ? r.next = r : (r.next = u.next, u.next = r), n.pending = r;
  }
  function yh(n, r, u) {
    if (u & 4194240) {
      var l = r.lanes;
      l &= n.pendingLanes, u |= l, r.lanes = u, Ci(n, u);
    }
  }
  var tf = { readContext: Fn, useCallback: En, useContext: En, useEffect: En, useImperativeHandle: En, useInsertionEffect: En, useLayoutEffect: En, useMemo: En, useReducer: En, useRef: En, useState: En, useDebugValue: En, useDeferredValue: En, useTransition: En, useMutableSource: En, useSyncExternalStore: En, useId: En, unstable_isNewReconciler: !1 }, Hy = { readContext: Fn, useCallback: function(n, r) {
    return Va().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Fn, useEffect: qc, useImperativeHandle: function(n, r, u) {
    return u = u != null ? u.concat([n]) : null, Do(
      4194308,
      4,
      $d.bind(null, r, n),
      u
    );
  }, useLayoutEffect: function(n, r) {
    return Do(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Do(4, 2, n, r);
  }, useMemo: function(n, r) {
    var u = Va();
    return r = r === void 0 ? null : r, n = n(), u.memoizedState = [n, r], n;
  }, useReducer: function(n, r, u) {
    var l = Va();
    return r = u !== void 0 ? u(r) : r, l.memoizedState = l.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, l.queue = n, n = n.dispatch = Jc.bind(null, Sn, n), [l.memoizedState, n];
  }, useRef: function(n) {
    var r = Va();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Wc, useDebugValue: Zc, useDeferredValue: function(n) {
    return Va().memoizedState = n;
  }, useTransition: function() {
    var n = Wc(!1), r = n[0];
    return n = Fy.bind(null, n[1]), Va().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, u) {
    var l = Sn, c = Va();
    if (gn) {
      if (u === void 0)
        throw Error(y(407));
      u = u();
    } else {
      if (u = r(), kn === null)
        throw Error(y(349));
      Co & 30 || Vc(l, r, u);
    }
    c.memoizedState = u;
    var d = { value: u, getSnapshot: r };
    return c.queue = d, qc(Yc.bind(
      null,
      l,
      d,
      n
    ), [n]), l.flags |= 2048, xo(9, Bc.bind(null, l, d, u, r), void 0, null), u;
  }, useId: function() {
    var n = Va(), r = kn.identifierPrefix;
    if (gn) {
      var u = qi, l = mr;
      u = (l & ~(1 << 32 - Ur(l) - 1)).toString(32) + u, r = ":" + r + "R" + u, u = Ra++, 0 < u && (r += "H" + u.toString(32)), r += ":";
    } else
      u = To++, r = ":" + r + "r" + u.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Py = {
    readContext: Fn,
    useCallback: wl,
    useContext: Fn,
    useEffect: Os,
    useImperativeHandle: Tl,
    useInsertionEffect: Xc,
    useLayoutEffect: Kc,
    useMemo: Pu,
    useReducer: Ds,
    useRef: Gc,
    useState: function() {
      return Ds(bo);
    },
    useDebugValue: Zc,
    useDeferredValue: function(n) {
      var r = ua();
      return oa(r, K.memoizedState, n);
    },
    useTransition: function() {
      var n = Ds(bo)[0], r = ua().memoizedState;
      return [n, r];
    },
    useMutableSource: Hc,
    useSyncExternalStore: Pc,
    useId: fn,
    unstable_isNewReconciler: !1
  }, Qd = { readContext: Fn, useCallback: wl, useContext: Fn, useEffect: Os, useImperativeHandle: Tl, useInsertionEffect: Xc, useLayoutEffect: Kc, useMemo: Pu, useReducer: Ms, useRef: Gc, useState: function() {
    return Ms(bo);
  }, useDebugValue: Zc, useDeferredValue: function(n) {
    var r = ua();
    return K === null ? r.memoizedState = n : oa(r, K.memoizedState, n);
  }, useTransition: function() {
    var n = Ms(bo)[0], r = ua().memoizedState;
    return [n, r];
  }, useMutableSource: Hc, useSyncExternalStore: Pc, useId: fn, unstable_isNewReconciler: !1 };
  function bl(n, r) {
    try {
      var u = "", l = r;
      do
        u += pt(l), l = l.return;
      while (l);
      var c = u;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function _s(n, r, u) {
    return { value: n, source: null, stack: u ?? null, digest: r ?? null };
  }
  function nf(n, r) {
    try {
      console.error(r.value);
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  var Vy = typeof WeakMap == "function" ? WeakMap : Map;
  function gh(n, r, u) {
    u = Ki(-1, u), u.tag = 3, u.payload = { element: null };
    var l = r.value;
    return u.callback = function() {
      cf || (cf = !0, ko = l), nf(n, r);
    }, u;
  }
  function ks(n, r, u) {
    u = Ki(-1, u), u.tag = 3;
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var c = r.value;
      u.payload = function() {
        return l(c);
      }, u.callback = function() {
        nf(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (u.callback = function() {
      nf(n, r), typeof l != "function" && (Oi === null ? Oi = /* @__PURE__ */ new Set([this]) : Oi.add(this));
      var S = r.stack;
      this.componentDidCatch(r.value, { componentStack: S !== null ? S : "" });
    }), u;
  }
  function Sh(n, r, u) {
    var l = n.pingCache;
    if (l === null) {
      l = n.pingCache = new Vy();
      var c = /* @__PURE__ */ new Set();
      l.set(r, c);
    } else
      c = l.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(r, c));
    c.has(u) || (c.add(u), n = qy.bind(null, n, r, u), r.then(n, n));
  }
  function Wd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Gd(n, r, u, l, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, u.flags |= 131072, u.flags &= -52805, u.tag === 1 && (u.alternate === null ? u.tag = 17 : (r = Ki(-1, 1), r.tag = 2, Uu(u, r, 1))), u.lanes |= 1), n);
  }
  var By = M.ReactCurrentOwner, Qn = !1;
  function nr(n, r, u, l) {
    r.child = n === null ? mh(r, null, u, l) : El(r, n.child, u, l);
  }
  function Vu(n, r, u, l, c) {
    u = u.render;
    var d = r.ref;
    return Se(r, c), l = Hu(n, r, u, l, d, c), u = Ro(), n !== null && !Qn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, gr(n, r, c)) : (gn && u && Mc(r), r.flags |= 1, nr(n, r, l, c), r.child);
  }
  function rf(n, r, u, l, c) {
    if (n === null) {
      var d = u.type;
      return typeof d == "function" && !pp(d) && d.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (r.tag = 15, r.type = d, la(n, r, d, l, c)) : (n = mf(u.type, null, l, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var S = d.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ps, u(S, l) && n.ref === r.ref)
        return gr(n, r, c);
    }
    return r.flags |= 1, n = Qu(d, l), n.ref = r.ref, n.return = r, r.child = n;
  }
  function la(n, r, u, l, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ps(d, l) && n.ref === r.ref)
        if (Qn = !1, r.pendingProps = l = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (Qn = !0);
        else
          return r.lanes = n.lanes, gr(n, r, c);
    }
    return xl(n, r, u, l, c);
  }
  function Mo(n, r, u) {
    var l = r.pendingProps, c = l.children, d = n !== null ? n.memoizedState : null;
    if (l.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Kt(kl, ba), ba |= u;
      else {
        if (!(u & 1073741824))
          return n = d !== null ? d.baseLanes | u : u, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Kt(kl, ba), ba |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, l = d !== null ? d.baseLanes : u, Kt(kl, ba), ba |= l;
      }
    else
      d !== null ? (l = d.baseLanes | u, r.memoizedState = null) : l = u, Kt(kl, ba), ba |= l;
    return nr(n, r, c, u), r.child;
  }
  function xt(n, r) {
    var u = r.ref;
    (n === null && u !== null || n !== null && n.ref !== u) && (r.flags |= 512, r.flags |= 2097152);
  }
  function xl(n, r, u, l, c) {
    var d = Rn(u) ? ta : ft.current;
    return d = Ua(r, d), Se(r, c), u = Hu(n, r, u, l, d, c), l = Ro(), n !== null && !Qn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, gr(n, r, c)) : (gn && l && Mc(r), r.flags |= 1, nr(n, r, u, c), r.child);
  }
  function qd(n, r, u, l, c) {
    if (Rn(u)) {
      var d = !0;
      Dc(r);
    } else
      d = !1;
    if (Se(r, c), r.stateNode === null)
      Or(n, r), dh(r, u, l), jc(r, u, l, c), l = !0;
    else if (n === null) {
      var S = r.stateNode, w = r.memoizedProps;
      S.props = w;
      var D = S.context, Y = u.contextType;
      typeof Y == "object" && Y !== null ? Y = Fn(Y) : (Y = Rn(u) ? ta : ft.current, Y = Ua(r, Y));
      var ie = u.getDerivedStateFromProps, oe = typeof ie == "function" || typeof S.getSnapshotBeforeUpdate == "function";
      oe || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (w !== l || D !== Y) && ph(r, S, l, Y), ju = !1;
      var ae = r.memoizedState;
      S.state = ae, Iu(r, l, S, c), D = r.memoizedState, w !== l || ae !== D || jn.current || ju ? (typeof ie == "function" && (Vd(r, u, ie, l), D = r.memoizedState), (w = ju || fh(r, u, w, l, ae, D, Y)) ? (oe || typeof S.UNSAFE_componentWillMount != "function" && typeof S.componentWillMount != "function" || (typeof S.componentWillMount == "function" && S.componentWillMount(), typeof S.UNSAFE_componentWillMount == "function" && S.UNSAFE_componentWillMount()), typeof S.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = l, r.memoizedState = D), S.props = l, S.state = D, S.context = Y, l = w) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), l = !1);
    } else {
      S = r.stateNode, tr(n, r), w = r.memoizedProps, Y = r.type === r.elementType ? w : wa(r.type, w), S.props = Y, oe = r.pendingProps, ae = S.context, D = u.contextType, typeof D == "object" && D !== null ? D = Fn(D) : (D = Rn(u) ? ta : ft.current, D = Ua(r, D));
      var De = u.getDerivedStateFromProps;
      (ie = typeof De == "function" || typeof S.getSnapshotBeforeUpdate == "function") || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (w !== oe || ae !== D) && ph(r, S, l, D), ju = !1, ae = r.memoizedState, S.state = ae, Iu(r, l, S, c);
      var Ue = r.memoizedState;
      w !== oe || ae !== Ue || jn.current || ju ? (typeof De == "function" && (Vd(r, u, De, l), Ue = r.memoizedState), (Y = ju || fh(r, u, Y, l, ae, Ue, D) || !1) ? (ie || typeof S.UNSAFE_componentWillUpdate != "function" && typeof S.componentWillUpdate != "function" || (typeof S.componentWillUpdate == "function" && S.componentWillUpdate(l, Ue, D), typeof S.UNSAFE_componentWillUpdate == "function" && S.UNSAFE_componentWillUpdate(l, Ue, D)), typeof S.componentDidUpdate == "function" && (r.flags |= 4), typeof S.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof S.componentDidUpdate != "function" || w === n.memoizedProps && ae === n.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && ae === n.memoizedState || (r.flags |= 1024), r.memoizedProps = l, r.memoizedState = Ue), S.props = l, S.state = Ue, S.context = D, l = Y) : (typeof S.componentDidUpdate != "function" || w === n.memoizedProps && ae === n.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && ae === n.memoizedState || (r.flags |= 1024), l = !1);
    }
    return Eh(n, r, u, l, d, c);
  }
  function Eh(n, r, u, l, c, d) {
    xt(n, r);
    var S = (r.flags & 128) !== 0;
    if (!l && !S)
      return c && ih(r, u, !1), gr(n, r, d);
    l = r.stateNode, By.current = r;
    var w = S && typeof u.getDerivedStateFromError != "function" ? null : l.render();
    return r.flags |= 1, n !== null && S ? (r.child = El(r, n.child, null, d), r.child = El(r, null, w, d)) : nr(n, r, w, d), r.memoizedState = l.state, c && ih(r, u, !0), r.child;
  }
  function Ch(n) {
    var r = n.stateNode;
    r.pendingContext ? ku(n, r.pendingContext, r.pendingContext !== r.context) : r.context && ku(n, r.context, !1), Bd(n, r.containerInfo);
  }
  function af(n, r, u, l, c) {
    return Nn(), jd(c), r.flags |= 256, nr(n, r, u, l), r.child;
  }
  var Oo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Xd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Kd(n, r, u) {
    var l = r.pendingProps, c = rt.current, d = !1, S = (r.flags & 128) !== 0, w;
    if ((w = S) || (w = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), w ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Kt(rt, c & 1), n === null)
      return Nc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (S = l.children, n = l.fallback, d ? (l = r.mode, d = r.child, S = { mode: "hidden", children: S }, !(l & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = S) : d = Vs(S, l, 0, null), n = Uo(n, l, u, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Xd(u), r.memoizedState = Oo, n) : Zd(r, S));
    if (c = n.memoizedState, c !== null && (w = c.dehydrated, w !== null))
      return Yy(n, r, S, l, w, c, u);
    if (d) {
      d = l.fallback, S = r.mode, c = n.child, w = c.sibling;
      var D = { mode: "hidden", children: l.children };
      return !(S & 1) && r.child !== c ? (l = r.child, l.childLanes = 0, l.pendingProps = D, r.deletions = null) : (l = Qu(c, D), l.subtreeFlags = c.subtreeFlags & 14680064), w !== null ? d = Qu(w, d) : (d = Uo(d, S, u, null), d.flags |= 2), d.return = r, l.return = r, l.sibling = d, r.child = l, l = d, d = r.child, S = n.child.memoizedState, S = S === null ? Xd(u) : { baseLanes: S.baseLanes | u, cachePool: null, transitions: S.transitions }, d.memoizedState = S, d.childLanes = n.childLanes & ~u, r.memoizedState = Oo, l;
    }
    return d = n.child, n = d.sibling, l = Qu(d, { mode: "visible", children: l.children }), !(r.mode & 1) && (l.lanes = u), l.return = r, l.sibling = null, n !== null && (u = r.deletions, u === null ? (r.deletions = [n], r.flags |= 16) : u.push(n)), r.child = l, r.memoizedState = null, l;
  }
  function Zd(n, r) {
    return r = Vs({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Dl(n, r, u, l) {
    return l !== null && jd(l), El(r, n.child, null, u), n = Zd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Yy(n, r, u, l, c, d, S) {
    if (u)
      return r.flags & 256 ? (r.flags &= -257, l = _s(Error(y(422))), Dl(n, r, S, l)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = l.fallback, c = r.mode, l = Vs({ mode: "visible", children: l.children }, c, 0, null), d = Uo(d, c, S, null), d.flags |= 2, l.return = r, d.return = r, l.sibling = d, r.child = l, r.mode & 1 && El(r, n.child, null, S), r.child.memoizedState = Xd(S), r.memoizedState = Oo, d);
    if (!(r.mode & 1))
      return Dl(n, r, S, null);
    if (c.data === "$!") {
      if (l = c.nextSibling && c.nextSibling.dataset, l)
        var w = l.dgst;
      return l = w, d = Error(y(419)), l = _s(d, l, void 0), Dl(n, r, S, l);
    }
    if (w = (S & n.childLanes) !== 0, Qn || w) {
      if (l = kn, l !== null) {
        switch (S & -S) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (l.suspendedLanes | S) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Xi(n, c), Lr(l, n, c, -1));
      }
      return cp(), l = _s(Error(y(421))), Dl(n, r, S, l);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Xy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ia = li(c.nextSibling), Ta = r, gn = !0, Ha = null, n !== null && (aa[Mr++] = mr, aa[Mr++] = qi, aa[Mr++] = Fa, mr = n.id, qi = n.overflow, Fa = r), r = Zd(r, l.children), r.flags |= 4096, r);
  }
  function Jd(n, r, u) {
    n.lanes |= r;
    var l = n.alternate;
    l !== null && (l.lanes |= r), cr(n.return, r, u);
  }
  function uf(n, r, u, l, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: l, tail: u, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = l, d.tail = u, d.tailMode = c);
  }
  function ep(n, r, u) {
    var l = r.pendingProps, c = l.revealOrder, d = l.tail;
    if (nr(n, r, l.children, u), l = rt.current, l & 2)
      l = l & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Jd(n, u, r);
            else if (n.tag === 19)
              Jd(n, u, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      l &= 1;
    }
    if (Kt(rt, l), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (u = r.child, c = null; u !== null; )
            n = u.alternate, n !== null && _n(n) === null && (c = u), u = u.sibling;
          u = c, u === null ? (c = r.child, r.child = null) : (c = u.sibling, u.sibling = null), uf(r, !1, c, u, d);
          break;
        case "backwards":
          for (u = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && _n(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = u, u = c, c = n;
          }
          uf(r, !0, u, null, d);
          break;
        case "together":
          uf(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Or(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function gr(n, r, u) {
    if (n !== null && (r.dependencies = n.dependencies), tu |= r.lanes, !(u & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(y(153));
    if (r.child !== null) {
      for (n = r.child, u = Qu(n, n.pendingProps), r.child = u, u.return = r; n.sibling !== null; )
        n = n.sibling, u = u.sibling = Qu(n, n.pendingProps), u.return = r;
      u.sibling = null;
    }
    return r.child;
  }
  function Ji(n, r, u) {
    switch (r.tag) {
      case 3:
        Ch(r), Nn();
        break;
      case 5:
        et(r);
        break;
      case 1:
        Rn(r.type) && Dc(r);
        break;
      case 4:
        Bd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var l = r.type._context, c = r.memoizedProps.value;
        Kt(bi, l._currentValue), l._currentValue = c;
        break;
      case 13:
        if (l = r.memoizedState, l !== null)
          return l.dehydrated !== null ? (Kt(rt, rt.current & 1), r.flags |= 128, null) : u & r.child.childLanes ? Kd(n, r, u) : (Kt(rt, rt.current & 1), n = gr(n, r, u), n !== null ? n.sibling : null);
        Kt(rt, rt.current & 1);
        break;
      case 19:
        if (l = (u & r.childLanes) !== 0, n.flags & 128) {
          if (l)
            return ep(n, r, u);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Kt(rt, rt.current), l)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Mo(n, r, u);
    }
    return gr(n, r, u);
  }
  var Ls, No, Ba, rr;
  Ls = function(n, r) {
    for (var u = r.child; u !== null; ) {
      if (u.tag === 5 || u.tag === 6)
        n.appendChild(u.stateNode);
      else if (u.tag !== 4 && u.child !== null) {
        u.child.return = u, u = u.child;
        continue;
      }
      if (u === r)
        break;
      for (; u.sibling === null; ) {
        if (u.return === null || u.return === r)
          return;
        u = u.return;
      }
      u.sibling.return = u.return, u = u.sibling;
    }
  }, No = function() {
  }, Ba = function(n, r, u, l) {
    var c = n.memoizedProps;
    if (c !== l) {
      n = r.stateNode, Eo(si.current);
      var d = null;
      switch (u) {
        case "input":
          c = Mn(n, c), l = Mn(n, l), d = [];
          break;
        case "select":
          c = x({}, c, { value: void 0 }), l = x({}, l, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Vn(n, c), l = Vn(n, l), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof l.onClick == "function" && (n.onclick = xc);
      }
      _e(u, l);
      var S;
      u = null;
      for (Y in c)
        if (!l.hasOwnProperty(Y) && c.hasOwnProperty(Y) && c[Y] != null)
          if (Y === "style") {
            var w = c[Y];
            for (S in w)
              w.hasOwnProperty(S) && (u || (u = {}), u[S] = "");
          } else
            Y !== "dangerouslySetInnerHTML" && Y !== "children" && Y !== "suppressContentEditableWarning" && Y !== "suppressHydrationWarning" && Y !== "autoFocus" && (A.hasOwnProperty(Y) ? d || (d = []) : (d = d || []).push(Y, null));
      for (Y in l) {
        var D = l[Y];
        if (w = c != null ? c[Y] : void 0, l.hasOwnProperty(Y) && D !== w && (D != null || w != null))
          if (Y === "style")
            if (w) {
              for (S in w)
                !w.hasOwnProperty(S) || D && D.hasOwnProperty(S) || (u || (u = {}), u[S] = "");
              for (S in D)
                D.hasOwnProperty(S) && w[S] !== D[S] && (u || (u = {}), u[S] = D[S]);
            } else
              u || (d || (d = []), d.push(
                Y,
                u
              )), u = D;
          else
            Y === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, w = w ? w.__html : void 0, D != null && w !== D && (d = d || []).push(Y, D)) : Y === "children" ? typeof D != "string" && typeof D != "number" || (d = d || []).push(Y, "" + D) : Y !== "suppressContentEditableWarning" && Y !== "suppressHydrationWarning" && (A.hasOwnProperty(Y) ? (D != null && Y === "onScroll" && cn("scroll", n), d || w === D || (d = [])) : (d = d || []).push(Y, D));
      }
      u && (d = d || []).push("style", u);
      var Y = d;
      (r.updateQueue = Y) && (r.flags |= 4);
    }
  }, rr = function(n, r, u, l) {
    u !== l && (r.flags |= 4);
  };
  function As(n, r) {
    if (!gn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var u = null; r !== null; )
            r.alternate !== null && (u = r), r = r.sibling;
          u === null ? n.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = n.tail;
          for (var l = null; u !== null; )
            u.alternate !== null && (l = u), u = u.sibling;
          l === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : l.sibling = null;
      }
  }
  function Nr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, u = 0, l = 0;
    if (r)
      for (var c = n.child; c !== null; )
        u |= c.lanes | c.childLanes, l |= c.subtreeFlags & 14680064, l |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        u |= c.lanes | c.childLanes, l |= c.subtreeFlags, l |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= l, n.childLanes = u, r;
  }
  function $y(n, r, u) {
    var l = r.pendingProps;
    switch (Ad(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Nr(r), null;
      case 1:
        return Rn(r.type) && Ia(), Nr(r), null;
      case 3:
        return l = r.stateNode, Fu(), qt(jn), qt(ft), Ic(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (n === null || n.child === null) && (_c(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ha !== null && (Ps(Ha), Ha = null))), No(n, r), Nr(r), null;
      case 5:
        Nt(r);
        var c = Eo(Cl.current);
        if (u = r.type, n !== null && r.stateNode != null)
          Ba(n, r, u, l, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!l) {
            if (r.stateNode === null)
              throw Error(y(166));
            return Nr(r), null;
          }
          if (n = Eo(si.current), _c(r)) {
            l = r.stateNode, u = r.type;
            var d = r.memoizedProps;
            switch (l[wi] = r, l[yo] = d, n = (r.mode & 1) !== 0, u) {
              case "dialog":
                cn("cancel", l), cn("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                cn("load", l);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ys.length; c++)
                  cn(ys[c], l);
                break;
              case "source":
                cn("error", l);
                break;
              case "img":
              case "image":
              case "link":
                cn(
                  "error",
                  l
                ), cn("load", l);
                break;
              case "details":
                cn("toggle", l);
                break;
              case "input":
                Tn(l, d), cn("invalid", l);
                break;
              case "select":
                l._wrapperState = { wasMultiple: !!d.multiple }, cn("invalid", l);
                break;
              case "textarea":
                wn(l, d), cn("invalid", l);
            }
            _e(u, d), c = null;
            for (var S in d)
              if (d.hasOwnProperty(S)) {
                var w = d[S];
                S === "children" ? typeof w == "string" ? l.textContent !== w && (d.suppressHydrationWarning !== !0 && bc(l.textContent, w, n), c = ["children", w]) : typeof w == "number" && l.textContent !== "" + w && (d.suppressHydrationWarning !== !0 && bc(
                  l.textContent,
                  w,
                  n
                ), c = ["children", "" + w]) : A.hasOwnProperty(S) && w != null && S === "onScroll" && cn("scroll", l);
              }
            switch (u) {
              case "input":
                Dn(l), Xn(l, d, !0);
                break;
              case "textarea":
                Dn(l), An(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (l.onclick = xc);
            }
            l = c, r.updateQueue = l, l !== null && (r.flags |= 4);
          } else {
            S = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Jn(u)), n === "http://www.w3.org/1999/xhtml" ? u === "script" ? (n = S.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof l.is == "string" ? n = S.createElement(u, { is: l.is }) : (n = S.createElement(u), u === "select" && (S = n, l.multiple ? S.multiple = !0 : l.size && (S.size = l.size))) : n = S.createElementNS(n, u), n[wi] = r, n[yo] = l, Ls(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (S = Ze(u, l), u) {
                case "dialog":
                  cn("cancel", n), cn("close", n), c = l;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  cn("load", n), c = l;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ys.length; c++)
                    cn(ys[c], n);
                  c = l;
                  break;
                case "source":
                  cn("error", n), c = l;
                  break;
                case "img":
                case "image":
                case "link":
                  cn(
                    "error",
                    n
                  ), cn("load", n), c = l;
                  break;
                case "details":
                  cn("toggle", n), c = l;
                  break;
                case "input":
                  Tn(n, l), c = Mn(n, l), cn("invalid", n);
                  break;
                case "option":
                  c = l;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!l.multiple }, c = x({}, l, { value: void 0 }), cn("invalid", n);
                  break;
                case "textarea":
                  wn(n, l), c = Vn(n, l), cn("invalid", n);
                  break;
                default:
                  c = l;
              }
              _e(u, c), w = c;
              for (d in w)
                if (w.hasOwnProperty(d)) {
                  var D = w[d];
                  d === "style" ? F(n, D) : d === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, D != null && ka(n, D)) : d === "children" ? typeof D == "string" ? (u !== "textarea" || D !== "") && zr(n, D) : typeof D == "number" && zr(n, "" + D) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (A.hasOwnProperty(d) ? D != null && d === "onScroll" && cn("scroll", n) : D != null && Oe(n, d, D, S));
                }
              switch (u) {
                case "input":
                  Dn(n), Xn(n, l, !1);
                  break;
                case "textarea":
                  Dn(n), An(n);
                  break;
                case "option":
                  l.value != null && n.setAttribute("value", "" + ot(l.value));
                  break;
                case "select":
                  n.multiple = !!l.multiple, d = l.value, d != null ? mn(n, !!l.multiple, d, !1) : l.defaultValue != null && mn(
                    n,
                    !!l.multiple,
                    l.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = xc);
              }
              switch (u) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Nr(r), null;
      case 6:
        if (n && r.stateNode != null)
          rr(n, r, n.memoizedProps, l);
        else {
          if (typeof l != "string" && r.stateNode === null)
            throw Error(y(166));
          if (u = Eo(Cl.current), Eo(si.current), _c(r)) {
            if (l = r.stateNode, u = r.memoizedProps, l[wi] = r, (d = l.nodeValue !== u) && (n = Ta, n !== null))
              switch (n.tag) {
                case 3:
                  bc(l.nodeValue, u, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && bc(l.nodeValue, u, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            l = (u.nodeType === 9 ? u : u.ownerDocument).createTextNode(l), l[wi] = r, r.stateNode = l;
        }
        return Nr(r), null;
      case 13:
        if (qt(rt), l = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (gn && ia !== null && r.mode & 1 && !(r.flags & 128))
            lh(), Nn(), r.flags |= 98560, d = !1;
          else if (d = _c(r), l !== null && l.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(y(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(y(317));
              d[wi] = r;
            } else
              Nn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Nr(r), d = !1;
          } else
            Ha !== null && (Ps(Ha), Ha = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = u, r) : (l = l !== null, l !== (n !== null && n.memoizedState !== null) && l && (r.child.flags |= 8192, r.mode & 1 && (n === null || rt.current & 1 ? ir === 0 && (ir = 3) : cp())), r.updateQueue !== null && (r.flags |= 4), Nr(r), null);
      case 4:
        return Fu(), No(n, r), n === null && ml(r.stateNode.containerInfo), Nr(r), null;
      case 10:
        return zu(r.type._context), Nr(r), null;
      case 17:
        return Rn(r.type) && Ia(), Nr(r), null;
      case 19:
        if (qt(rt), d = r.memoizedState, d === null)
          return Nr(r), null;
        if (l = (r.flags & 128) !== 0, S = d.rendering, S === null)
          if (l)
            As(d, !1);
          else {
            if (ir !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (S = _n(n), S !== null) {
                  for (r.flags |= 128, As(d, !1), l = S.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), r.subtreeFlags = 0, l = u, u = r.child; u !== null; )
                    d = u, n = l, d.flags &= 14680066, S = d.alternate, S === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = S.childLanes, d.lanes = S.lanes, d.child = S.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = S.memoizedProps, d.memoizedState = S.memoizedState, d.updateQueue = S.updateQueue, d.type = S.type, n = S.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), u = u.sibling;
                  return Kt(rt, rt.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && Pt() > Al && (r.flags |= 128, l = !0, As(d, !1), r.lanes = 4194304);
          }
        else {
          if (!l)
            if (n = _n(S), n !== null) {
              if (r.flags |= 128, l = !0, u = n.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), As(d, !0), d.tail === null && d.tailMode === "hidden" && !S.alternate && !gn)
                return Nr(r), null;
            } else
              2 * Pt() - d.renderingStartTime > Al && u !== 1073741824 && (r.flags |= 128, l = !0, As(d, !1), r.lanes = 4194304);
          d.isBackwards ? (S.sibling = r.child, r.child = S) : (u = d.last, u !== null ? u.sibling = S : r.child = S, d.last = S);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Pt(), r.sibling = null, u = rt.current, Kt(rt, l ? u & 1 | 2 : u & 1), r) : (Nr(r), null);
      case 22:
      case 23:
        return sp(), l = r.memoizedState !== null, n !== null && n.memoizedState !== null !== l && (r.flags |= 8192), l && r.mode & 1 ? ba & 1073741824 && (Nr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Nr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(y(156, r.tag));
  }
  function tp(n, r) {
    switch (Ad(r), r.tag) {
      case 1:
        return Rn(r.type) && Ia(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Fu(), qt(jn), qt(ft), Ic(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Nt(r), null;
      case 13:
        if (qt(rt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(y(340));
          Nn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return qt(rt), null;
      case 4:
        return Fu(), null;
      case 10:
        return zu(r.type._context), null;
      case 22:
      case 23:
        return sp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var zs = !1, ar = !1, Th = typeof WeakSet == "function" ? WeakSet : Set, je = null;
  function Ml(n, r) {
    var u = n.ref;
    if (u !== null)
      if (typeof u == "function")
        try {
          u(null);
        } catch (l) {
          In(n, r, l);
        }
      else
        u.current = null;
  }
  function js(n, r, u) {
    try {
      u();
    } catch (l) {
      In(n, r, l);
    }
  }
  var wh = !1;
  function Rh(n, r) {
    if (xd = Aa, n = Ec(), $i(n)) {
      if ("selectionStart" in n)
        var u = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          u = (u = n.ownerDocument) && u.defaultView || window;
          var l = u.getSelection && u.getSelection();
          if (l && l.rangeCount !== 0) {
            u = l.anchorNode;
            var c = l.anchorOffset, d = l.focusNode;
            l = l.focusOffset;
            try {
              u.nodeType, d.nodeType;
            } catch {
              u = null;
              break e;
            }
            var S = 0, w = -1, D = -1, Y = 0, ie = 0, oe = n, ae = null;
            t:
              for (; ; ) {
                for (var De; oe !== u || c !== 0 && oe.nodeType !== 3 || (w = S + c), oe !== d || l !== 0 && oe.nodeType !== 3 || (D = S + l), oe.nodeType === 3 && (S += oe.nodeValue.length), (De = oe.firstChild) !== null; )
                  ae = oe, oe = De;
                for (; ; ) {
                  if (oe === n)
                    break t;
                  if (ae === u && ++Y === c && (w = S), ae === d && ++ie === l && (D = S), (De = oe.nextSibling) !== null)
                    break;
                  oe = ae, ae = oe.parentNode;
                }
                oe = De;
              }
            u = w === -1 || D === -1 ? null : { start: w, end: D };
          } else
            u = null;
        }
      u = u || { start: 0, end: 0 };
    } else
      u = null;
    for (ho = { focusedElem: n, selectionRange: u }, Aa = !1, je = r; je !== null; )
      if (r = je, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, je = n;
      else
        for (; je !== null; ) {
          r = je;
          try {
            var Ue = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Ue !== null) {
                    var He = Ue.memoizedProps, Hn = Ue.memoizedState, z = r.stateNode, _ = z.getSnapshotBeforeUpdate(r.elementType === r.type ? He : wa(r.type, He), Hn);
                    z.__reactInternalSnapshotBeforeUpdate = _;
                  }
                  break;
                case 3:
                  var I = r.stateNode.containerInfo;
                  I.nodeType === 1 ? I.textContent = "" : I.nodeType === 9 && I.documentElement && I.removeChild(I.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(y(163));
              }
          } catch (de) {
            In(r, r.return, de);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, je = n;
            break;
          }
          je = r.return;
        }
    return Ue = wh, wh = !1, Ue;
  }
  function Us(n, r, u) {
    var l = r.updateQueue;
    if (l = l !== null ? l.lastEffect : null, l !== null) {
      var c = l = l.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && js(r, u, d);
        }
        c = c.next;
      } while (c !== l);
    }
  }
  function Is(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var u = r = r.next;
      do {
        if ((u.tag & n) === n) {
          var l = u.create;
          u.destroy = l();
        }
        u = u.next;
      } while (u !== r);
    }
  }
  function np(n) {
    var r = n.ref;
    if (r !== null) {
      var u = n.stateNode;
      switch (n.tag) {
        case 5:
          n = u;
          break;
        default:
          n = u;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function rp(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, rp(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[wi], delete r[yo], delete r[Od], delete r[Iy], delete r[Nd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function bh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function of(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || bh(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function Ol(n, r, u) {
    var l = n.tag;
    if (l === 5 || l === 6)
      n = n.stateNode, r ? u.nodeType === 8 ? u.parentNode.insertBefore(n, r) : u.insertBefore(n, r) : (u.nodeType === 8 ? (r = u.parentNode, r.insertBefore(n, u)) : (r = u, r.appendChild(n)), u = u._reactRootContainer, u != null || r.onclick !== null || (r.onclick = xc));
    else if (l !== 4 && (n = n.child, n !== null))
      for (Ol(n, r, u), n = n.sibling; n !== null; )
        Ol(n, r, u), n = n.sibling;
  }
  function Di(n, r, u) {
    var l = n.tag;
    if (l === 5 || l === 6)
      n = n.stateNode, r ? u.insertBefore(n, r) : u.appendChild(n);
    else if (l !== 4 && (n = n.child, n !== null))
      for (Di(n, r, u), n = n.sibling; n !== null; )
        Di(n, r, u), n = n.sibling;
  }
  var bn = null, fr = !1;
  function Ya(n, r, u) {
    for (u = u.child; u !== null; )
      Nl(n, r, u), u = u.sibling;
  }
  function Nl(n, r, u) {
    if (Kr && typeof Kr.onCommitFiberUnmount == "function")
      try {
        Kr.onCommitFiberUnmount(yu, u);
      } catch {
      }
    switch (u.tag) {
      case 5:
        ar || Ml(u, r);
      case 6:
        var l = bn, c = fr;
        bn = null, Ya(n, r, u), bn = l, fr = c, bn !== null && (fr ? (n = bn, u = u.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(u) : n.removeChild(u)) : bn.removeChild(u.stateNode));
        break;
      case 18:
        bn !== null && (fr ? (n = bn, u = u.stateNode, n.nodeType === 8 ? Ou(n.parentNode, u) : n.nodeType === 1 && Ou(n, u), Ru(n)) : Ou(bn, u.stateNode));
        break;
      case 4:
        l = bn, c = fr, bn = u.stateNode.containerInfo, fr = !0, Ya(n, r, u), bn = l, fr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ar && (l = u.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
          c = l = l.next;
          do {
            var d = c, S = d.destroy;
            d = d.tag, S !== void 0 && (d & 2 || d & 4) && js(u, r, S), c = c.next;
          } while (c !== l);
        }
        Ya(n, r, u);
        break;
      case 1:
        if (!ar && (Ml(u, r), l = u.stateNode, typeof l.componentWillUnmount == "function"))
          try {
            l.props = u.memoizedProps, l.state = u.memoizedState, l.componentWillUnmount();
          } catch (w) {
            In(u, r, w);
          }
        Ya(n, r, u);
        break;
      case 21:
        Ya(n, r, u);
        break;
      case 22:
        u.mode & 1 ? (ar = (l = ar) || u.memoizedState !== null, Ya(n, r, u), ar = l) : Ya(n, r, u);
        break;
      default:
        Ya(n, r, u);
    }
  }
  function eu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var u = n.stateNode;
      u === null && (u = n.stateNode = new Th()), r.forEach(function(l) {
        var c = Ky.bind(null, n, l);
        u.has(l) || (u.add(l), l.then(c, c));
      });
    }
  }
  function ci(n, r) {
    var u = r.deletions;
    if (u !== null)
      for (var l = 0; l < u.length; l++) {
        var c = u[l];
        try {
          var d = n, S = r, w = S;
          e:
            for (; w !== null; ) {
              switch (w.tag) {
                case 5:
                  bn = w.stateNode, fr = !1;
                  break e;
                case 3:
                  bn = w.stateNode.containerInfo, fr = !0;
                  break e;
                case 4:
                  bn = w.stateNode.containerInfo, fr = !0;
                  break e;
              }
              w = w.return;
            }
          if (bn === null)
            throw Error(y(160));
          Nl(d, S, c), bn = null, fr = !1;
          var D = c.alternate;
          D !== null && (D.return = null), c.return = null;
        } catch (Y) {
          In(c, r, Y);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        xh(r, n), r = r.sibling;
  }
  function xh(n, r) {
    var u = n.alternate, l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ci(r, n), Mi(n), l & 4) {
          try {
            Us(3, n, n.return), Is(3, n);
          } catch (He) {
            In(n, n.return, He);
          }
          try {
            Us(5, n, n.return);
          } catch (He) {
            In(n, n.return, He);
          }
        }
        break;
      case 1:
        ci(r, n), Mi(n), l & 512 && u !== null && Ml(u, u.return);
        break;
      case 5:
        if (ci(r, n), Mi(n), l & 512 && u !== null && Ml(u, u.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            zr(c, "");
          } catch (He) {
            In(n, n.return, He);
          }
        }
        if (l & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, S = u !== null ? u.memoizedProps : d, w = n.type, D = n.updateQueue;
          if (n.updateQueue = null, D !== null)
            try {
              w === "input" && d.type === "radio" && d.name != null && hn(c, d), Ze(w, S);
              var Y = Ze(w, d);
              for (S = 0; S < D.length; S += 2) {
                var ie = D[S], oe = D[S + 1];
                ie === "style" ? F(c, oe) : ie === "dangerouslySetInnerHTML" ? ka(c, oe) : ie === "children" ? zr(c, oe) : Oe(c, ie, oe, Y);
              }
              switch (w) {
                case "input":
                  on(c, d);
                  break;
                case "textarea":
                  Zn(c, d);
                  break;
                case "select":
                  var ae = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var De = d.value;
                  De != null ? mn(c, !!d.multiple, De, !1) : ae !== !!d.multiple && (d.defaultValue != null ? mn(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : mn(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[yo] = d;
            } catch (He) {
              In(n, n.return, He);
            }
        }
        break;
      case 6:
        if (ci(r, n), Mi(n), l & 4) {
          if (n.stateNode === null)
            throw Error(y(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (He) {
            In(n, n.return, He);
          }
        }
        break;
      case 3:
        if (ci(r, n), Mi(n), l & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Ru(r.containerInfo);
          } catch (He) {
            In(n, n.return, He);
          }
        break;
      case 4:
        ci(r, n), Mi(n);
        break;
      case 13:
        ci(r, n), Mi(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (up = Pt())), l & 4 && eu(n);
        break;
      case 22:
        if (ie = u !== null && u.memoizedState !== null, n.mode & 1 ? (ar = (Y = ar) || ie, ci(r, n), ar = Y) : ci(r, n), Mi(n), l & 8192) {
          if (Y = n.memoizedState !== null, (n.stateNode.isHidden = Y) && !ie && n.mode & 1)
            for (je = n, ie = n.child; ie !== null; ) {
              for (oe = je = ie; je !== null; ) {
                switch (ae = je, De = ae.child, ae.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Us(4, ae, ae.return);
                    break;
                  case 1:
                    Ml(ae, ae.return);
                    var Ue = ae.stateNode;
                    if (typeof Ue.componentWillUnmount == "function") {
                      l = ae, u = ae.return;
                      try {
                        r = l, Ue.props = r.memoizedProps, Ue.state = r.memoizedState, Ue.componentWillUnmount();
                      } catch (He) {
                        In(l, u, He);
                      }
                    }
                    break;
                  case 5:
                    Ml(ae, ae.return);
                    break;
                  case 22:
                    if (ae.memoizedState !== null) {
                      ap(oe);
                      continue;
                    }
                }
                De !== null ? (De.return = ae, je = De) : ap(oe);
              }
              ie = ie.sibling;
            }
          e:
            for (ie = null, oe = n; ; ) {
              if (oe.tag === 5) {
                if (ie === null) {
                  ie = oe;
                  try {
                    c = oe.stateNode, Y ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (w = oe.stateNode, D = oe.memoizedProps.style, S = D != null && D.hasOwnProperty("display") ? D.display : null, w.style.display = wt("display", S));
                  } catch (He) {
                    In(n, n.return, He);
                  }
                }
              } else if (oe.tag === 6) {
                if (ie === null)
                  try {
                    oe.stateNode.nodeValue = Y ? "" : oe.memoizedProps;
                  } catch (He) {
                    In(n, n.return, He);
                  }
              } else if ((oe.tag !== 22 && oe.tag !== 23 || oe.memoizedState === null || oe === n) && oe.child !== null) {
                oe.child.return = oe, oe = oe.child;
                continue;
              }
              if (oe === n)
                break e;
              for (; oe.sibling === null; ) {
                if (oe.return === null || oe.return === n)
                  break e;
                ie === oe && (ie = null), oe = oe.return;
              }
              ie === oe && (ie = null), oe.sibling.return = oe.return, oe = oe.sibling;
            }
        }
        break;
      case 19:
        ci(r, n), Mi(n), l & 4 && eu(n);
        break;
      case 21:
        break;
      default:
        ci(
          r,
          n
        ), Mi(n);
    }
  }
  function Mi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var u = n.return; u !== null; ) {
            if (bh(u)) {
              var l = u;
              break e;
            }
            u = u.return;
          }
          throw Error(y(160));
        }
        switch (l.tag) {
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (zr(c, ""), l.flags &= -33);
            var d = of(n);
            Di(n, d, c);
            break;
          case 3:
          case 4:
            var S = l.stateNode.containerInfo, w = of(n);
            Ol(n, w, S);
            break;
          default:
            throw Error(y(161));
        }
      } catch (D) {
        In(n, n.return, D);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Dh(n, r, u) {
    je = n, _l(n);
  }
  function _l(n, r, u) {
    for (var l = (n.mode & 1) !== 0; je !== null; ) {
      var c = je, d = c.child;
      if (c.tag === 22 && l) {
        var S = c.memoizedState !== null || zs;
        if (!S) {
          var w = c.alternate, D = w !== null && w.memoizedState !== null || ar;
          w = zs;
          var Y = ar;
          if (zs = S, (ar = D) && !Y)
            for (je = c; je !== null; )
              S = je, D = S.child, S.tag === 22 && S.memoizedState !== null ? Oh(c) : D !== null ? (D.return = S, je = D) : Oh(c);
          for (; d !== null; )
            je = d, _l(d), d = d.sibling;
          je = c, zs = w, ar = Y;
        }
        Mh(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, je = d) : Mh(n);
    }
  }
  function Mh(n) {
    for (; je !== null; ) {
      var r = je;
      if (r.flags & 8772) {
        var u = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                ar || Is(5, r);
                break;
              case 1:
                var l = r.stateNode;
                if (r.flags & 4 && !ar)
                  if (u === null)
                    l.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? u.memoizedProps : wa(r.type, u.memoizedProps);
                    l.componentDidUpdate(c, u.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && So(r, d, l);
                break;
              case 3:
                var S = r.updateQueue;
                if (S !== null) {
                  if (u = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        u = r.child.stateNode;
                        break;
                      case 1:
                        u = r.child.stateNode;
                    }
                  So(r, S, u);
                }
                break;
              case 5:
                var w = r.stateNode;
                if (u === null && r.flags & 4) {
                  u = w;
                  var D = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      D.autoFocus && u.focus();
                      break;
                    case "img":
                      D.src && (u.src = D.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var Y = r.alternate;
                  if (Y !== null) {
                    var ie = Y.memoizedState;
                    if (ie !== null) {
                      var oe = ie.dehydrated;
                      oe !== null && Ru(oe);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(y(163));
            }
          ar || r.flags & 512 && np(r);
        } catch (ae) {
          In(r, r.return, ae);
        }
      }
      if (r === n) {
        je = null;
        break;
      }
      if (u = r.sibling, u !== null) {
        u.return = r.return, je = u;
        break;
      }
      je = r.return;
    }
  }
  function ap(n) {
    for (; je !== null; ) {
      var r = je;
      if (r === n) {
        je = null;
        break;
      }
      var u = r.sibling;
      if (u !== null) {
        u.return = r.return, je = u;
        break;
      }
      je = r.return;
    }
  }
  function Oh(n) {
    for (; je !== null; ) {
      var r = je;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var u = r.return;
            try {
              Is(4, r);
            } catch (D) {
              In(r, u, D);
            }
            break;
          case 1:
            var l = r.stateNode;
            if (typeof l.componentDidMount == "function") {
              var c = r.return;
              try {
                l.componentDidMount();
              } catch (D) {
                In(r, c, D);
              }
            }
            var d = r.return;
            try {
              np(r);
            } catch (D) {
              In(r, d, D);
            }
            break;
          case 5:
            var S = r.return;
            try {
              np(r);
            } catch (D) {
              In(r, S, D);
            }
        }
      } catch (D) {
        In(r, r.return, D);
      }
      if (r === n) {
        je = null;
        break;
      }
      var w = r.sibling;
      if (w !== null) {
        w.return = r.return, je = w;
        break;
      }
      je = r.return;
    }
  }
  var lf = Math.ceil, Fs = M.ReactCurrentDispatcher, ip = M.ReactCurrentOwner, _r = M.ReactCurrentBatchConfig, Lt = 0, kn = null, Un = null, dr = 0, ba = 0, kl = bt(0), ir = 0, Hs = null, tu = 0, sf = 0, Ll = 0, _o = null, Hr = null, up = 0, Al = 1 / 0, nu = null, cf = !1, ko = null, Oi = null, Bu = !1, Yu = null, ff = 0, zl = 0, df = null, Lo = -1, Ao = 0;
  function kr() {
    return Lt & 6 ? Pt() : Lo !== -1 ? Lo : Lo = Pt();
  }
  function Wn(n) {
    return n.mode & 1 ? Lt & 2 && dr !== 0 ? dr & -dr : kc.transition !== null ? (Ao === 0 && (Ao = nl()), Ao) : (n = Qt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ls(n.type)), n) : 1;
  }
  function Lr(n, r, u, l) {
    if (50 < zl)
      throw zl = 0, df = null, Error(y(185));
    Hi(n, u, l), (!(Lt & 2) || n !== kn) && (n === kn && (!(Lt & 2) && (sf |= u), ir === 4 && $a(n, dr)), Ar(n, l), u === 1 && Lt === 0 && !(r.mode & 1) && (Al = Pt() + 500, sr && na()));
  }
  function Ar(n, r) {
    var u = n.callbackNode;
    Eu(n, r);
    var l = Ir(n, n === kn ? dr : 0);
    if (l === 0)
      u !== null && hr(u), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = l & -l, n.callbackPriority !== r) {
      if (u != null && hr(u), r === 1)
        n.tag === 0 ? kd(Nh.bind(null, n)) : _d(Nh.bind(null, n)), Md(function() {
          !(Lt & 6) && na();
        }), u = null;
      else {
        switch (al(l)) {
          case 1:
            u = ni;
            break;
          case 4:
            u = Mt;
            break;
          case 16:
            u = Ei;
            break;
          case 536870912:
            u = el;
            break;
          default:
            u = Ei;
        }
        u = dp(u, jl.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = u;
    }
  }
  function jl(n, r) {
    if (Lo = -1, Ao = 0, Lt & 6)
      throw Error(y(327));
    var u = n.callbackNode;
    if (Il() && n.callbackNode !== u)
      return null;
    var l = Ir(n, n === kn ? dr : 0);
    if (l === 0)
      return null;
    if (l & 30 || l & n.expiredLanes || r)
      r = vf(n, l);
    else {
      r = l;
      var c = Lt;
      Lt |= 2;
      var d = pf();
      (kn !== n || dr !== r) && (nu = null, Al = Pt() + 500, zo(n, r));
      do
        try {
          Wy();
          break;
        } catch (w) {
          _h(n, w);
        }
      while (1);
      Id(), Fs.current = d, Lt = c, Un !== null ? r = 0 : (kn = null, dr = 0, r = ir);
    }
    if (r !== 0) {
      if (r === 2 && (c = Cu(n), c !== 0 && (l = c, r = op(n, c))), r === 1)
        throw u = Hs, zo(n, 0), $a(n, l), Ar(n, Pt()), u;
      if (r === 6)
        $a(n, l);
      else {
        if (c = n.current.alternate, !(l & 30) && !lp(c) && (r = vf(n, l), r === 2 && (d = Cu(n), d !== 0 && (l = d, r = op(n, d))), r === 1))
          throw u = Hs, zo(n, 0), $a(n, l), Ar(n, Pt()), u;
        switch (n.finishedWork = c, n.finishedLanes = l, r) {
          case 0:
          case 1:
            throw Error(y(345));
          case 2:
            jo(n, Hr, nu);
            break;
          case 3:
            if ($a(n, l), (l & 130023424) === l && (r = up + 500 - Pt(), 10 < r)) {
              if (Ir(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & l) !== l) {
                kr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = mo(jo.bind(null, n, Hr, nu), r);
              break;
            }
            jo(n, Hr, nu);
            break;
          case 4:
            if ($a(n, l), (l & 4194240) === l)
              break;
            for (r = n.eventTimes, c = -1; 0 < l; ) {
              var S = 31 - Ur(l);
              d = 1 << S, S = r[S], S > c && (c = S), l &= ~d;
            }
            if (l = c, l = Pt() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * lf(l / 1960)) - l, 10 < l) {
              n.timeoutHandle = mo(jo.bind(null, n, Hr, nu), l);
              break;
            }
            jo(n, Hr, nu);
            break;
          case 5:
            jo(n, Hr, nu);
            break;
          default:
            throw Error(y(329));
        }
      }
    }
    return Ar(n, Pt()), n.callbackNode === u ? jl.bind(null, n) : null;
  }
  function op(n, r) {
    var u = _o;
    return n.current.memoizedState.isDehydrated && (zo(n, r).flags |= 256), n = vf(n, r), n !== 2 && (r = Hr, Hr = u, r !== null && Ps(r)), n;
  }
  function Ps(n) {
    Hr === null ? Hr = n : Hr.push.apply(Hr, n);
  }
  function lp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var u = r.updateQueue;
        if (u !== null && (u = u.stores, u !== null))
          for (var l = 0; l < u.length; l++) {
            var c = u[l], d = c.getSnapshot;
            c = c.value;
            try {
              if (!za(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (u = r.child, r.subtreeFlags & 16384 && u !== null)
        u.return = r, r = u;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function $a(n, r) {
    for (r &= ~Ll, r &= ~sf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var u = 31 - Ur(r), l = 1 << u;
      n[u] = -1, r &= ~l;
    }
  }
  function Nh(n) {
    if (Lt & 6)
      throw Error(y(327));
    Il();
    var r = Ir(n, 0);
    if (!(r & 1))
      return Ar(n, Pt()), null;
    var u = vf(n, r);
    if (n.tag !== 0 && u === 2) {
      var l = Cu(n);
      l !== 0 && (r = l, u = op(n, l));
    }
    if (u === 1)
      throw u = Hs, zo(n, 0), $a(n, r), Ar(n, Pt()), u;
    if (u === 6)
      throw Error(y(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, jo(n, Hr, nu), Ar(n, Pt()), null;
  }
  function Ul(n, r) {
    var u = Lt;
    Lt |= 1;
    try {
      return n(r);
    } finally {
      Lt = u, Lt === 0 && (Al = Pt() + 500, sr && na());
    }
  }
  function $u(n) {
    Yu !== null && Yu.tag === 0 && !(Lt & 6) && Il();
    var r = Lt;
    Lt |= 1;
    var u = _r.transition, l = Qt;
    try {
      if (_r.transition = null, Qt = 1, n)
        return n();
    } finally {
      Qt = l, _r.transition = u, Lt = r, !(Lt & 6) && na();
    }
  }
  function sp() {
    ba = kl.current, qt(kl);
  }
  function zo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var u = n.timeoutHandle;
    if (u !== -1 && (n.timeoutHandle = -1, ah(u)), Un !== null)
      for (u = Un.return; u !== null; ) {
        var l = u;
        switch (Ad(l), l.tag) {
          case 1:
            l = l.type.childContextTypes, l != null && Ia();
            break;
          case 3:
            Fu(), qt(jn), qt(ft), Ic();
            break;
          case 5:
            Nt(l);
            break;
          case 4:
            Fu();
            break;
          case 13:
            qt(rt);
            break;
          case 19:
            qt(rt);
            break;
          case 10:
            zu(l.type._context);
            break;
          case 22:
          case 23:
            sp();
        }
        u = u.return;
      }
    if (kn = n, Un = n = Qu(n.current, null), dr = ba = r, ir = 0, Hs = null, Ll = sf = tu = 0, Hr = _o = null, yr !== null) {
      for (r = 0; r < yr.length; r++)
        if (u = yr[r], l = u.interleaved, l !== null) {
          u.interleaved = null;
          var c = l.next, d = u.pending;
          if (d !== null) {
            var S = d.next;
            d.next = c, l.next = S;
          }
          u.pending = l;
        }
      yr = null;
    }
    return n;
  }
  function _h(n, r) {
    do {
      var u = Un;
      try {
        if (Id(), Fc.current = tf, lt) {
          for (var l = Sn.memoizedState; l !== null; ) {
            var c = l.queue;
            c !== null && (c.pending = null), l = l.next;
          }
          lt = !1;
        }
        if (Co = 0, Ut = K = Sn = null, xi = !1, Ra = 0, ip.current = null, u === null || u.return === null) {
          ir = 1, Hs = r, Un = null;
          break;
        }
        e: {
          var d = n, S = u.return, w = u, D = r;
          if (r = dr, w.flags |= 32768, D !== null && typeof D == "object" && typeof D.then == "function") {
            var Y = D, ie = w, oe = ie.tag;
            if (!(ie.mode & 1) && (oe === 0 || oe === 11 || oe === 15)) {
              var ae = ie.alternate;
              ae ? (ie.updateQueue = ae.updateQueue, ie.memoizedState = ae.memoizedState, ie.lanes = ae.lanes) : (ie.updateQueue = null, ie.memoizedState = null);
            }
            var De = Wd(S);
            if (De !== null) {
              De.flags &= -257, Gd(De, S, w, d, r), De.mode & 1 && Sh(d, Y, r), r = De, D = Y;
              var Ue = r.updateQueue;
              if (Ue === null) {
                var He = /* @__PURE__ */ new Set();
                He.add(D), r.updateQueue = He;
              } else
                Ue.add(D);
              break e;
            } else {
              if (!(r & 1)) {
                Sh(d, Y, r), cp();
                break e;
              }
              D = Error(y(426));
            }
          } else if (gn && w.mode & 1) {
            var Hn = Wd(S);
            if (Hn !== null) {
              !(Hn.flags & 65536) && (Hn.flags |= 256), Gd(Hn, S, w, d, r), jd(bl(D, w));
              break e;
            }
          }
          d = D = bl(D, w), ir !== 4 && (ir = 2), _o === null ? _o = [d] : _o.push(d), d = S;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var z = gh(d, D, r);
                Pd(d, z);
                break e;
              case 1:
                w = D;
                var _ = d.type, I = d.stateNode;
                if (!(d.flags & 128) && (typeof _.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (Oi === null || !Oi.has(I)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var de = ks(d, w, r);
                  Pd(d, de);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        fp(u);
      } catch (Ve) {
        r = Ve, Un === u && u !== null && (Un = u = u.return);
        continue;
      }
      break;
    } while (1);
  }
  function pf() {
    var n = Fs.current;
    return Fs.current = tf, n === null ? tf : n;
  }
  function cp() {
    (ir === 0 || ir === 3 || ir === 2) && (ir = 4), kn === null || !(tu & 268435455) && !(sf & 268435455) || $a(kn, dr);
  }
  function vf(n, r) {
    var u = Lt;
    Lt |= 2;
    var l = pf();
    (kn !== n || dr !== r) && (nu = null, zo(n, r));
    do
      try {
        Qy();
        break;
      } catch (c) {
        _h(n, c);
      }
    while (1);
    if (Id(), Lt = u, Fs.current = l, Un !== null)
      throw Error(y(261));
    return kn = null, dr = 0, ir;
  }
  function Qy() {
    for (; Un !== null; )
      kh(Un);
  }
  function Wy() {
    for (; Un !== null && !Si(); )
      kh(Un);
  }
  function kh(n) {
    var r = Ah(n.alternate, n, ba);
    n.memoizedProps = n.pendingProps, r === null ? fp(n) : Un = r, ip.current = null;
  }
  function fp(n) {
    var r = n;
    do {
      var u = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (u = tp(u, r), u !== null) {
          u.flags &= 32767, Un = u;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          ir = 6, Un = null;
          return;
        }
      } else if (u = $y(u, r, ba), u !== null) {
        Un = u;
        return;
      }
      if (r = r.sibling, r !== null) {
        Un = r;
        return;
      }
      Un = r = n;
    } while (r !== null);
    ir === 0 && (ir = 5);
  }
  function jo(n, r, u) {
    var l = Qt, c = _r.transition;
    try {
      _r.transition = null, Qt = 1, Gy(n, r, u, l);
    } finally {
      _r.transition = c, Qt = l;
    }
    return null;
  }
  function Gy(n, r, u, l) {
    do
      Il();
    while (Yu !== null);
    if (Lt & 6)
      throw Error(y(327));
    u = n.finishedWork;
    var c = n.finishedLanes;
    if (u === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, u === n.current)
      throw Error(y(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = u.lanes | u.childLanes;
    if (od(n, d), n === kn && (Un = kn = null, dr = 0), !(u.subtreeFlags & 2064) && !(u.flags & 2064) || Bu || (Bu = !0, dp(Ei, function() {
      return Il(), null;
    })), d = (u.flags & 15990) !== 0, u.subtreeFlags & 15990 || d) {
      d = _r.transition, _r.transition = null;
      var S = Qt;
      Qt = 1;
      var w = Lt;
      Lt |= 4, ip.current = null, Rh(n, u), xh(u, n), Cc(ho), Aa = !!xd, ho = xd = null, n.current = u, Dh(u), Jo(), Lt = w, Qt = S, _r.transition = d;
    } else
      n.current = u;
    if (Bu && (Bu = !1, Yu = n, ff = c), d = n.pendingLanes, d === 0 && (Oi = null), is(u.stateNode), Ar(n, Pt()), r !== null)
      for (l = n.onRecoverableError, u = 0; u < r.length; u++)
        c = r[u], l(c.value, { componentStack: c.stack, digest: c.digest });
    if (cf)
      throw cf = !1, n = ko, ko = null, n;
    return ff & 1 && n.tag !== 0 && Il(), d = n.pendingLanes, d & 1 ? n === df ? zl++ : (zl = 0, df = n) : zl = 0, na(), null;
  }
  function Il() {
    if (Yu !== null) {
      var n = al(ff), r = _r.transition, u = Qt;
      try {
        if (_r.transition = null, Qt = 16 > n ? 16 : n, Yu === null)
          var l = !1;
        else {
          if (n = Yu, Yu = null, ff = 0, Lt & 6)
            throw Error(y(331));
          var c = Lt;
          for (Lt |= 4, je = n.current; je !== null; ) {
            var d = je, S = d.child;
            if (je.flags & 16) {
              var w = d.deletions;
              if (w !== null) {
                for (var D = 0; D < w.length; D++) {
                  var Y = w[D];
                  for (je = Y; je !== null; ) {
                    var ie = je;
                    switch (ie.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Us(8, ie, d);
                    }
                    var oe = ie.child;
                    if (oe !== null)
                      oe.return = ie, je = oe;
                    else
                      for (; je !== null; ) {
                        ie = je;
                        var ae = ie.sibling, De = ie.return;
                        if (rp(ie), ie === Y) {
                          je = null;
                          break;
                        }
                        if (ae !== null) {
                          ae.return = De, je = ae;
                          break;
                        }
                        je = De;
                      }
                  }
                }
                var Ue = d.alternate;
                if (Ue !== null) {
                  var He = Ue.child;
                  if (He !== null) {
                    Ue.child = null;
                    do {
                      var Hn = He.sibling;
                      He.sibling = null, He = Hn;
                    } while (He !== null);
                  }
                }
                je = d;
              }
            }
            if (d.subtreeFlags & 2064 && S !== null)
              S.return = d, je = S;
            else
              e:
                for (; je !== null; ) {
                  if (d = je, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Us(9, d, d.return);
                    }
                  var z = d.sibling;
                  if (z !== null) {
                    z.return = d.return, je = z;
                    break e;
                  }
                  je = d.return;
                }
          }
          var _ = n.current;
          for (je = _; je !== null; ) {
            S = je;
            var I = S.child;
            if (S.subtreeFlags & 2064 && I !== null)
              I.return = S, je = I;
            else
              e:
                for (S = _; je !== null; ) {
                  if (w = je, w.flags & 2048)
                    try {
                      switch (w.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Is(9, w);
                      }
                    } catch (Ve) {
                      In(w, w.return, Ve);
                    }
                  if (w === S) {
                    je = null;
                    break e;
                  }
                  var de = w.sibling;
                  if (de !== null) {
                    de.return = w.return, je = de;
                    break e;
                  }
                  je = w.return;
                }
          }
          if (Lt = c, na(), Kr && typeof Kr.onPostCommitFiberRoot == "function")
            try {
              Kr.onPostCommitFiberRoot(yu, n);
            } catch {
            }
          l = !0;
        }
        return l;
      } finally {
        Qt = u, _r.transition = r;
      }
    }
    return !1;
  }
  function Lh(n, r, u) {
    r = bl(u, r), r = gh(n, r, 1), n = Uu(n, r, 1), r = kr(), n !== null && (Hi(n, 1, r), Ar(n, r));
  }
  function In(n, r, u) {
    if (n.tag === 3)
      Lh(n, n, u);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Lh(r, n, u);
          break;
        } else if (r.tag === 1) {
          var l = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Oi === null || !Oi.has(l))) {
            n = bl(u, n), n = ks(r, n, 1), r = Uu(r, n, 1), n = kr(), r !== null && (Hi(r, 1, n), Ar(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function qy(n, r, u) {
    var l = n.pingCache;
    l !== null && l.delete(r), r = kr(), n.pingedLanes |= n.suspendedLanes & u, kn === n && (dr & u) === u && (ir === 4 || ir === 3 && (dr & 130023424) === dr && 500 > Pt() - up ? zo(n, 0) : Ll |= u), Ar(n, r);
  }
  function hf(n, r) {
    r === 0 && (n.mode & 1 ? (r = gu, gu <<= 1, !(gu & 130023424) && (gu = 4194304)) : r = 1);
    var u = kr();
    n = Xi(n, r), n !== null && (Hi(n, r, u), Ar(n, u));
  }
  function Xy(n) {
    var r = n.memoizedState, u = 0;
    r !== null && (u = r.retryLane), hf(n, u);
  }
  function Ky(n, r) {
    var u = 0;
    switch (n.tag) {
      case 13:
        var l = n.stateNode, c = n.memoizedState;
        c !== null && (u = c.retryLane);
        break;
      case 19:
        l = n.stateNode;
        break;
      default:
        throw Error(y(314));
    }
    l !== null && l.delete(r), hf(n, u);
  }
  var Ah;
  Ah = function(n, r, u) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || jn.current)
        Qn = !0;
      else {
        if (!(n.lanes & u) && !(r.flags & 128))
          return Qn = !1, Ji(n, r, u);
        Qn = !!(n.flags & 131072);
      }
    else
      Qn = !1, gn && r.flags & 1048576 && Ld(r, gl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var l = r.type;
        Or(n, r), n = r.pendingProps;
        var c = Ua(r, ft.current);
        Se(r, u), c = Hu(null, r, l, n, c, u);
        var d = Ro();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Rn(l) ? (d = !0, Dc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Hd(r), c.updater = zc, r.stateNode = c, c._reactInternals = r, jc(r, l, n, u), r = Eh(null, r, l, !0, d, u)) : (r.tag = 0, gn && d && Mc(r), nr(null, r, c, u), r = r.child), r;
      case 16:
        l = r.elementType;
        e: {
          switch (Or(n, r), n = r.pendingProps, c = l._init, l = c(l._payload), r.type = l, c = r.tag = Jy(l), n = wa(l, n), c) {
            case 0:
              r = xl(null, r, l, n, u);
              break e;
            case 1:
              r = qd(null, r, l, n, u);
              break e;
            case 11:
              r = Vu(null, r, l, n, u);
              break e;
            case 14:
              r = rf(null, r, l, wa(l.type, n), u);
              break e;
          }
          throw Error(y(
            306,
            l,
            ""
          ));
        }
        return r;
      case 0:
        return l = r.type, c = r.pendingProps, c = r.elementType === l ? c : wa(l, c), xl(n, r, l, c, u);
      case 1:
        return l = r.type, c = r.pendingProps, c = r.elementType === l ? c : wa(l, c), qd(n, r, l, c, u);
      case 3:
        e: {
          if (Ch(r), n === null)
            throw Error(y(387));
          l = r.pendingProps, d = r.memoizedState, c = d.element, tr(n, r), Iu(r, l, null, u);
          var S = r.memoizedState;
          if (l = S.element, d.isDehydrated)
            if (d = { element: l, isDehydrated: !1, cache: S.cache, pendingSuspenseBoundaries: S.pendingSuspenseBoundaries, transitions: S.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = bl(Error(y(423)), r), r = af(n, r, l, u, c);
              break e;
            } else if (l !== c) {
              c = bl(Error(y(424)), r), r = af(n, r, l, u, c);
              break e;
            } else
              for (ia = li(r.stateNode.containerInfo.firstChild), Ta = r, gn = !0, Ha = null, u = mh(r, null, l, u), r.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Nn(), l === c) {
              r = gr(n, r, u);
              break e;
            }
            nr(n, r, l, u);
          }
          r = r.child;
        }
        return r;
      case 5:
        return et(r), n === null && Nc(r), l = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, S = c.children, Es(l, c) ? S = null : d !== null && Es(l, d) && (r.flags |= 32), xt(n, r), nr(n, r, S, u), r.child;
      case 6:
        return n === null && Nc(r), null;
      case 13:
        return Kd(n, r, u);
      case 4:
        return Bd(r, r.stateNode.containerInfo), l = r.pendingProps, n === null ? r.child = El(r, null, l, u) : nr(n, r, l, u), r.child;
      case 11:
        return l = r.type, c = r.pendingProps, c = r.elementType === l ? c : wa(l, c), Vu(n, r, l, c, u);
      case 7:
        return nr(n, r, r.pendingProps, u), r.child;
      case 8:
        return nr(n, r, r.pendingProps.children, u), r.child;
      case 12:
        return nr(n, r, r.pendingProps.children, u), r.child;
      case 10:
        e: {
          if (l = r.type._context, c = r.pendingProps, d = r.memoizedProps, S = c.value, Kt(bi, l._currentValue), l._currentValue = S, d !== null)
            if (za(d.value, S)) {
              if (d.children === c.children && !jn.current) {
                r = gr(n, r, u);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var w = d.dependencies;
                if (w !== null) {
                  S = d.child;
                  for (var D = w.firstContext; D !== null; ) {
                    if (D.context === l) {
                      if (d.tag === 1) {
                        D = Ki(-1, u & -u), D.tag = 2;
                        var Y = d.updateQueue;
                        if (Y !== null) {
                          Y = Y.shared;
                          var ie = Y.pending;
                          ie === null ? D.next = D : (D.next = ie.next, ie.next = D), Y.pending = D;
                        }
                      }
                      d.lanes |= u, D = d.alternate, D !== null && (D.lanes |= u), cr(
                        d.return,
                        u,
                        r
                      ), w.lanes |= u;
                      break;
                    }
                    D = D.next;
                  }
                } else if (d.tag === 10)
                  S = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (S = d.return, S === null)
                    throw Error(y(341));
                  S.lanes |= u, w = S.alternate, w !== null && (w.lanes |= u), cr(S, u, r), S = d.sibling;
                } else
                  S = d.child;
                if (S !== null)
                  S.return = d;
                else
                  for (S = d; S !== null; ) {
                    if (S === r) {
                      S = null;
                      break;
                    }
                    if (d = S.sibling, d !== null) {
                      d.return = S.return, S = d;
                      break;
                    }
                    S = S.return;
                  }
                d = S;
              }
          nr(n, r, c.children, u), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, l = r.pendingProps.children, Se(r, u), c = Fn(c), l = l(c), r.flags |= 1, nr(n, r, l, u), r.child;
      case 14:
        return l = r.type, c = wa(l, r.pendingProps), c = wa(l.type, c), rf(n, r, l, c, u);
      case 15:
        return la(n, r, r.type, r.pendingProps, u);
      case 17:
        return l = r.type, c = r.pendingProps, c = r.elementType === l ? c : wa(l, c), Or(n, r), r.tag = 1, Rn(l) ? (n = !0, Dc(r)) : n = !1, Se(r, u), dh(r, l, c), jc(r, l, c, u), Eh(null, r, l, !0, n, u);
      case 19:
        return ep(n, r, u);
      case 22:
        return Mo(n, r, u);
    }
    throw Error(y(156, r.tag));
  };
  function dp(n, r) {
    return pn(n, r);
  }
  function Zy(n, r, u, l) {
    this.tag = n, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Qa(n, r, u, l) {
    return new Zy(n, r, u, l);
  }
  function pp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Jy(n) {
    if (typeof n == "function")
      return pp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === yt)
        return 11;
      if (n === Et)
        return 14;
    }
    return 2;
  }
  function Qu(n, r) {
    var u = n.alternate;
    return u === null ? (u = Qa(n.tag, r, n.key, n.mode), u.elementType = n.elementType, u.type = n.type, u.stateNode = n.stateNode, u.alternate = n, n.alternate = u) : (u.pendingProps = r, u.type = n.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = n.flags & 14680064, u.childLanes = n.childLanes, u.lanes = n.lanes, u.child = n.child, u.memoizedProps = n.memoizedProps, u.memoizedState = n.memoizedState, u.updateQueue = n.updateQueue, r = n.dependencies, u.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, u.sibling = n.sibling, u.index = n.index, u.ref = n.ref, u;
  }
  function mf(n, r, u, l, c, d) {
    var S = 2;
    if (l = n, typeof n == "function")
      pp(n) && (S = 1);
    else if (typeof n == "string")
      S = 5;
    else
      e:
        switch (n) {
          case Te:
            return Uo(u.children, c, d, r);
          case mt:
            S = 8, c |= 8;
            break;
          case Dt:
            return n = Qa(12, u, r, c | 2), n.elementType = Dt, n.lanes = d, n;
          case we:
            return n = Qa(13, u, r, c), n.elementType = we, n.lanes = d, n;
          case $e:
            return n = Qa(19, u, r, c), n.elementType = $e, n.lanes = d, n;
          case ye:
            return Vs(u, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case at:
                  S = 10;
                  break e;
                case tt:
                  S = 9;
                  break e;
                case yt:
                  S = 11;
                  break e;
                case Et:
                  S = 14;
                  break e;
                case it:
                  S = 16, l = null;
                  break e;
              }
            throw Error(y(130, n == null ? n : typeof n, ""));
        }
    return r = Qa(S, u, r, c), r.elementType = n, r.type = l, r.lanes = d, r;
  }
  function Uo(n, r, u, l) {
    return n = Qa(7, n, l, r), n.lanes = u, n;
  }
  function Vs(n, r, u, l) {
    return n = Qa(22, n, l, r), n.elementType = ye, n.lanes = u, n.stateNode = { isHidden: !1 }, n;
  }
  function Bs(n, r, u) {
    return n = Qa(6, n, null, r), n.lanes = u, n;
  }
  function Io(n, r, u) {
    return r = Qa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = u, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function eg(n, r, u, l, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = rl(0), this.expirationTimes = rl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = rl(0), this.identifierPrefix = l, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function yf(n, r, u, l, c, d, S, w, D) {
    return n = new eg(n, r, u, w, D), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Qa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: l, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Hd(d), n;
  }
  function zh(n, r, u) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ue, key: l == null ? null : "" + l, children: n, containerInfo: r, implementation: u };
  }
  function vp(n) {
    if (!n)
      return Ri;
    n = n._reactInternals;
    e: {
      if (Tt(n) !== n || n.tag !== 1)
        throw Error(y(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Rn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(y(171));
    }
    if (n.tag === 1) {
      var u = n.type;
      if (Rn(u))
        return ws(n, u, r);
    }
    return r;
  }
  function jh(n, r, u, l, c, d, S, w, D) {
    return n = yf(u, l, !0, n, c, d, S, w, D), n.context = vp(null), u = n.current, l = kr(), c = Wn(u), d = Ki(l, c), d.callback = r ?? null, Uu(u, d, c), n.current.lanes = c, Hi(n, c, l), Ar(n, l), n;
  }
  function Ys(n, r, u, l) {
    var c = r.current, d = kr(), S = Wn(c);
    return u = vp(u), r.context === null ? r.context = u : r.pendingContext = u, r = Ki(d, S), r.payload = { element: n }, l = l === void 0 ? null : l, l !== null && (r.callback = l), n = Uu(c, r, S), n !== null && (Lr(n, c, S, d), Ac(n, c, S)), S;
  }
  function gf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Uh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var u = n.retryLane;
      n.retryLane = u !== 0 && u < r ? u : r;
    }
  }
  function hp(n, r) {
    Uh(n, r), (n = n.alternate) && Uh(n, r);
  }
  function Ih() {
    return null;
  }
  var mp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Sf(n) {
    this._internalRoot = n;
  }
  ru.prototype.render = Sf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(y(409));
    Ys(n, r, null, null);
  }, ru.prototype.unmount = Sf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      $u(function() {
        Ys(null, n, null, null);
      }), r[Gi] = null;
    }
  };
  function ru(n) {
    this._internalRoot = n;
  }
  ru.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = ul();
      n = { blockedOn: null, target: n, priority: r };
      for (var u = 0; u < Xt.length && r !== 0 && r < Xt[u].priority; u++)
        ;
      Xt.splice(u, 0, n), u === 0 && vc(n);
    }
  };
  function yp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Ef(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Fh() {
  }
  function tg(n, r, u, l, c) {
    if (c) {
      if (typeof l == "function") {
        var d = l;
        l = function() {
          var Y = gf(S);
          d.call(Y);
        };
      }
      var S = jh(r, l, n, 0, null, !1, !1, "", Fh);
      return n._reactRootContainer = S, n[Gi] = S.current, ml(n.nodeType === 8 ? n.parentNode : n), $u(), S;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof l == "function") {
      var w = l;
      l = function() {
        var Y = gf(D);
        w.call(Y);
      };
    }
    var D = yf(n, 0, !1, null, null, !1, !1, "", Fh);
    return n._reactRootContainer = D, n[Gi] = D.current, ml(n.nodeType === 8 ? n.parentNode : n), $u(function() {
      Ys(r, D, u, l);
    }), D;
  }
  function Cf(n, r, u, l, c) {
    var d = u._reactRootContainer;
    if (d) {
      var S = d;
      if (typeof c == "function") {
        var w = c;
        c = function() {
          var D = gf(S);
          w.call(D);
        };
      }
      Ys(r, S, n, c);
    } else
      S = tg(u, r, n, c, l);
    return gf(S);
  }
  oo = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var u = ri(r.pendingLanes);
          u !== 0 && (Ci(r, u | 1), Ar(r, Pt()), !(Lt & 6) && (Al = Pt() + 500, na()));
        }
        break;
      case 13:
        $u(function() {
          var l = Xi(n, 1);
          if (l !== null) {
            var c = kr();
            Lr(l, n, 1, c);
          }
        }), hp(n, 1);
    }
  }, il = function(n) {
    if (n.tag === 13) {
      var r = Xi(n, 134217728);
      if (r !== null) {
        var u = kr();
        Lr(r, n, 134217728, u);
      }
      hp(n, 134217728);
    }
  }, Vt = function(n) {
    if (n.tag === 13) {
      var r = Wn(n), u = Xi(n, r);
      if (u !== null) {
        var l = kr();
        Lr(u, n, r, l);
      }
      hp(n, r);
    }
  }, ul = function() {
    return Qt;
  }, ol = function(n, r) {
    var u = Qt;
    try {
      return Qt = n, r();
    } finally {
      Qt = u;
    }
  }, rn = function(n, r, u) {
    switch (r) {
      case "input":
        if (on(n, u), r = u.name, u.type === "radio" && r != null) {
          for (u = n; u.parentNode; )
            u = u.parentNode;
          for (u = u.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < u.length; r++) {
            var l = u[r];
            if (l !== n && l.form === n.form) {
              var c = Ge(l);
              if (!c)
                throw Error(y(90));
              qn(l), on(l, c);
            }
          }
        }
        break;
      case "textarea":
        Zn(n, u);
        break;
      case "select":
        r = u.value, r != null && mn(n, !!u.multiple, r, !1);
    }
  }, Xr = Ul, hu = $u;
  var ng = { usingClientEntryPoint: !1, Events: [Ts, yl, Ge, Dr, va, Ul] }, Fl = { findFiberByHostInstance: ja, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, rg = { bundleType: Fl.bundleType, version: Fl.version, rendererPackageName: Fl.rendererPackageName, rendererConfig: Fl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: M.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Yn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Fl.findFiberByHostInstance || Ih, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tf.isDisabled && Tf.supportsFiber)
      try {
        yu = Tf.inject(rg), Kr = Tf;
      } catch {
      }
  }
  return Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ng, Za.createPortal = function(n, r) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!yp(r))
      throw Error(y(200));
    return zh(n, r, null, u);
  }, Za.createRoot = function(n, r) {
    if (!yp(n))
      throw Error(y(299));
    var u = !1, l = "", c = mp;
    return r != null && (r.unstable_strictMode === !0 && (u = !0), r.identifierPrefix !== void 0 && (l = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = yf(n, 1, !1, null, null, u, !1, l, c), n[Gi] = r.current, ml(n.nodeType === 8 ? n.parentNode : n), new Sf(r);
  }, Za.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(y(188)) : (n = Object.keys(n).join(","), Error(y(268, n)));
    return n = Yn(r), n = n === null ? null : n.stateNode, n;
  }, Za.flushSync = function(n) {
    return $u(n);
  }, Za.hydrate = function(n, r, u) {
    if (!Ef(r))
      throw Error(y(200));
    return Cf(null, n, r, !0, u);
  }, Za.hydrateRoot = function(n, r, u) {
    if (!yp(n))
      throw Error(y(405));
    var l = u != null && u.hydratedSources || null, c = !1, d = "", S = mp;
    if (u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (d = u.identifierPrefix), u.onRecoverableError !== void 0 && (S = u.onRecoverableError)), r = jh(r, null, n, 1, u ?? null, c, !1, d, S), n[Gi] = r.current, ml(n), l)
      for (n = 0; n < l.length; n++)
        u = l[n], c = u._getVersion, c = c(u._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [u, c] : r.mutableSourceEagerHydrationData.push(
          u,
          c
        );
    return new ru(r);
  }, Za.render = function(n, r, u) {
    if (!Ef(r))
      throw Error(y(200));
    return Cf(null, n, r, !1, u);
  }, Za.unmountComponentAtNode = function(n) {
    if (!Ef(n))
      throw Error(y(40));
    return n._reactRootContainer ? ($u(function() {
      Cf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Gi] = null;
      });
    }), !0) : !1;
  }, Za.unstable_batchedUpdates = Ul, Za.unstable_renderSubtreeIntoContainer = function(n, r, u, l) {
    if (!Ef(u))
      throw Error(y(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(y(38));
    return Cf(n, r, u, !1, l);
  }, Za.version = "18.2.0-next-9e3b772b8-20220608", Za;
}
var Ja = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iw;
function BO() {
  return iw || (iw = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var v = id, h = bw(), y = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, N = !1;
    function A(e) {
      N = e;
    }
    function H(e) {
      if (!N) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        X("warn", e, a);
      }
    }
    function E(e) {
      if (!N) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        X("error", e, a);
      }
    }
    function X(e, t, a) {
      {
        var i = y.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var L = 0, Q = 1, W = 2, te = 3, le = 4, J = 5, ve = 6, xe = 7, Re = 8, Ke = 9, ze = 10, Oe = 11, M = 12, pe = 13, ue = 14, Te = 15, mt = 16, Dt = 17, at = 18, tt = 19, yt = 21, we = 22, $e = 23, Et = 24, it = 25, ye = !0, ne = !1, Ne = !1, x = !1, Z = !1, he = !0, We = !1, Pe = !1, pt = !0, ut = !0, Ct = !0, ot = /* @__PURE__ */ new Set(), _t = {}, xn = {};
    function Dn(e, t) {
      qn(e, t), qn(e + "Capture", t);
    }
    function qn(e, t) {
      _t[e] && E("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), _t[e] = t;
      {
        var a = e.toLowerCase();
        xn[a] = e, e === "onDoubleClick" && (xn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ot.add(t[i]);
    }
    var Jt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Mn = Object.prototype.hasOwnProperty;
    function Tn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function hn(e) {
      try {
        return on(e), !1;
      } catch {
        return !0;
      }
    }
    function on(e) {
      return "" + e;
    }
    function Xn(e, t) {
      if (hn(e))
        return E("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tn(e)), on(e);
    }
    function Kn(e) {
      if (hn(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tn(e)), on(e);
    }
    function tn(e, t) {
      if (hn(e))
        return E("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tn(e)), on(e);
    }
    function mn(e, t) {
      if (hn(e))
        return E("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tn(e)), on(e);
    }
    function Vn(e) {
      if (hn(e))
        return E("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Tn(e)), on(e);
    }
    function wn(e) {
      if (hn(e))
        return E("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Tn(e)), on(e);
    }
    var Zn = 0, An = 1, Jn = 2, nn = 3, Bn = 4, ka = 5, zr = 6, me = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Be = me + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", wt = new RegExp("^[" + me + "][" + Be + "]*$"), F = {}, ce = {};
    function _e(e) {
      return Mn.call(ce, e) ? !0 : Mn.call(F, e) ? !1 : wt.test(e) ? (ce[e] = !0, !0) : (F[e] = !0, E("Invalid attribute name: `%s`", e), !1);
    }
    function Ze(e, t, a) {
      return t !== null ? t.type === Zn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function st(e, t, a, i) {
      if (a !== null && a.type === Zn)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var o = e.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function gt(e, t, a, i) {
      if (t === null || typeof t > "u" || st(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case nn:
            return !t;
          case Bn:
            return t === !1;
          case ka:
            return isNaN(t);
          case zr:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function rn(e) {
      return Yt.hasOwnProperty(e) ? Yt[e] : null;
    }
    function kt(e, t, a, i, o, s, f) {
      this.acceptsBooleans = t === Jn || t === nn || t === Bn, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Yt = {}, er = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    er.forEach(function(e) {
      Yt[e] = new kt(
        e,
        Zn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Yt[t] = new kt(
        t,
        An,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Yt[e] = new kt(
        e,
        Jn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Yt[e] = new kt(
        e,
        Jn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Yt[e] = new kt(
        e,
        nn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new kt(
        e,
        nn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new kt(
        e,
        Bn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new kt(
        e,
        zr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Yt[e] = new kt(
        e,
        ka,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Dr = /[\-\:]([a-z])/g, va = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Dr, va);
      Yt[t] = new kt(
        t,
        An,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Dr, va);
      Yt[t] = new kt(
        t,
        An,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Dr, va);
      Yt[t] = new kt(
        t,
        An,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Yt[e] = new kt(
        e,
        An,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Xr = "xlinkHref";
    Yt[Xr] = new kt(
      "xlinkHref",
      An,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Yt[e] = new kt(
        e,
        An,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var hu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ha = !1;
    function ma(e) {
      !ha && hu.test(e) && (ha = !0, E("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ya(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        Xn(a, t), i.sanitizeURL && ma("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Bn) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : gt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (gt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === nn)
            return a;
          f = e.getAttribute(s);
        }
        return gt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function mi(e, t, a, i) {
      {
        if (!_e(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return Xn(a, t), o === "" + a ? a : o;
      }
    }
    function ga(e, t, a, i) {
      var o = rn(t);
      if (!Ze(t, o, i)) {
        if (gt(t, a, o, i) && (a = null), i || o === null) {
          if (_e(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Xn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = o.mustUseProperty;
        if (f) {
          var p = o.propertyName;
          if (a === null) {
            var m = o.type;
            e[p] = m === nn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var C = o.attributeName, T = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(C);
        else {
          var k = o.type, O;
          k === nn || k === Bn && a === !0 ? O = "" : (Xn(a, C), O = "" + a, o.sanitizeURL && ma(O.toString())), T ? e.setAttributeNS(T, C, O) : e.setAttribute(C, O);
        }
      }
    }
    var yi = Symbol.for("react.element"), jr = Symbol.for("react.portal"), Sa = Symbol.for("react.fragment"), gi = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), ge = Symbol.for("react.context"), ke = Symbol.for("react.forward_ref"), Tt = Symbol.for("react.suspense"), jt = Symbol.for("react.suspense_list"), Rt = Symbol.for("react.memo"), qe = Symbol.for("react.lazy"), Yn = Symbol.for("react.scope"), dn = Symbol.for("react.debug_trace_mode"), pn = Symbol.for("react.offscreen"), hr = Symbol.for("react.legacy_hidden"), Si = Symbol.for("react.cache"), Jo = Symbol.for("react.tracing_marker"), Pt = Symbol.iterator, ud = "@@iterator";
    function ni(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Pt && e[Pt] || e[ud];
      return typeof t == "function" ? t : null;
    }
    var Mt = Object.assign, Ei = 0, mu, el, yu, Kr, is, Ur, us;
    function os() {
    }
    os.__reactDisabledLog = !0;
    function dc() {
      {
        if (Ei === 0) {
          mu = console.log, el = console.info, yu = console.warn, Kr = console.error, is = console.group, Ur = console.groupCollapsed, us = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: os,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Ei++;
      }
    }
    function tl() {
      {
        if (Ei--, Ei === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Mt({}, e, {
              value: mu
            }),
            info: Mt({}, e, {
              value: el
            }),
            warn: Mt({}, e, {
              value: yu
            }),
            error: Mt({}, e, {
              value: Kr
            }),
            group: Mt({}, e, {
              value: is
            }),
            groupCollapsed: Mt({}, e, {
              value: Ur
            }),
            groupEnd: Mt({}, e, {
              value: us
            })
          });
        }
        Ei < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var gu = y.ReactCurrentDispatcher, ri;
    function Ir(e, t, a) {
      {
        if (ri === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            ri = i && i[1] || "";
          }
        return `
` + ri + e;
      }
    }
    var Su = !1, Eu;
    {
      var Cu = typeof WeakMap == "function" ? WeakMap : Map;
      Eu = new Cu();
    }
    function nl(e, t) {
      if (!e || Su)
        return "";
      {
        var a = Eu.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Su = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = gu.current, gu.current = null, dc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (B) {
              i = B;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (B) {
              i = B;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (B) {
            i = B;
          }
          e();
        }
      } catch (B) {
        if (B && i && typeof B.stack == "string") {
          for (var p = B.stack.split(`
`), m = i.stack.split(`
`), C = p.length - 1, T = m.length - 1; C >= 1 && T >= 0 && p[C] !== m[T]; )
            T--;
          for (; C >= 1 && T >= 0; C--, T--)
            if (p[C] !== m[T]) {
              if (C !== 1 || T !== 1)
                do
                  if (C--, T--, T < 0 || p[C] !== m[T]) {
                    var k = `
` + p[C].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && Eu.set(e, k), k;
                  }
                while (C >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        Su = !1, gu.current = s, tl(), Error.prepareStackTrace = o;
      }
      var O = e ? e.displayName || e.name : "", P = O ? Ir(O) : "";
      return typeof e == "function" && Eu.set(e, P), P;
    }
    function rl(e, t, a) {
      return nl(e, !0);
    }
    function Hi(e, t, a) {
      return nl(e, !1);
    }
    function od(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ci(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return nl(e, od(e));
      if (typeof e == "string")
        return Ir(e);
      switch (e) {
        case Tt:
          return Ir("Suspense");
        case jt:
          return Ir("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ke:
            return Hi(e.render);
          case Rt:
            return Ci(e.type, t, a);
          case qe: {
            var i = e, o = i._payload, s = i._init;
            try {
              return Ci(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Qt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case J:
          return Ir(e.type);
        case mt:
          return Ir("Lazy");
        case pe:
          return Ir("Suspense");
        case tt:
          return Ir("SuspenseList");
        case L:
        case W:
        case Te:
          return Hi(e.type);
        case Oe:
          return Hi(e.type.render);
        case Q:
          return rl(e.type);
        default:
          return "";
      }
    }
    function al(e) {
      try {
        var t = "", a = e;
        do
          t += Qt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function oo(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function il(e) {
      return e.displayName || "Context";
    }
    function Vt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Sa:
          return "Fragment";
        case jr:
          return "Portal";
        case b:
          return "Profiler";
        case gi:
          return "StrictMode";
        case Tt:
          return "Suspense";
        case jt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ge:
            var t = e;
            return il(t) + ".Consumer";
          case re:
            var a = e;
            return il(a._context) + ".Provider";
          case ke:
            return oo(e, e.render, "ForwardRef");
          case Rt:
            var i = e.displayName || null;
            return i !== null ? i : Vt(e.type) || "Memo";
          case qe: {
            var o = e, s = o._payload, f = o._init;
            try {
              return Vt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function ul(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function ol(e) {
      return e.displayName || "Context";
    }
    function vt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Et:
          return "Cache";
        case Ke:
          var i = a;
          return ol(i) + ".Consumer";
        case ze:
          var o = a;
          return ol(o._context) + ".Provider";
        case at:
          return "DehydratedFragment";
        case Oe:
          return ul(a, a.render, "ForwardRef");
        case xe:
          return "Fragment";
        case J:
          return a;
        case le:
          return "Portal";
        case te:
          return "Root";
        case ve:
          return "Text";
        case mt:
          return Vt(a);
        case Re:
          return a === gi ? "StrictMode" : "Mode";
        case we:
          return "Offscreen";
        case M:
          return "Profiler";
        case yt:
          return "Scope";
        case pe:
          return "Suspense";
        case tt:
          return "SuspenseList";
        case it:
          return "TracingMarker";
        case Q:
        case L:
        case Dt:
        case W:
        case ue:
        case Te:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var lo = y.ReactDebugCurrentFrame, On = null, Zr = !1;
    function Fr() {
      {
        if (On === null)
          return null;
        var e = On._debugOwner;
        if (e !== null && typeof e < "u")
          return vt(e);
      }
      return null;
    }
    function Tu() {
      return On === null ? "" : al(On);
    }
    function zn() {
      lo.getCurrentStack = null, On = null, Zr = !1;
    }
    function Xt(e) {
      lo.getCurrentStack = e === null ? null : Tu, On = e, Zr = !1;
    }
    function pc() {
      return On;
    }
    function Jr(e) {
      Zr = e;
    }
    function or(e) {
      return "" + e;
    }
    function Ti(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return wn(e), e;
        default:
          return "";
      }
    }
    var vc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Pi(e, t) {
      vc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || E("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || E("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function wu(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function hc(e) {
      return e._valueTracker;
    }
    function La(e) {
      e._valueTracker = null;
    }
    function Ru(e) {
      var t = "";
      return e && (wu(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function bu(e) {
      var t = wu(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      wn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(p) {
            wn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            wn(p), i = "" + p;
          },
          stopTracking: function() {
            La(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Aa(e) {
      hc(e) || (e._valueTracker = bu(e));
    }
    function ll(e) {
      if (!e)
        return !1;
      var t = hc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Ru(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function xu(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Du = !1, so = !1, sl = !1, ls = !1;
    function ai(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function g(e, t) {
      var a = e, i = t.checked, o = Mt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function R(e, t) {
      Pi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !so && (E("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Fr() || "A component", t.type), so = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Du && (E("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Fr() || "A component", t.type), Du = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ti(t.value != null ? t.value : i),
        controlled: ai(t)
      };
    }
    function V(e, t) {
      var a = e, i = t.checked;
      i != null && ga(a, "checked", i, !1);
    }
    function $(e, t) {
      var a = e;
      {
        var i = ai(t);
        !a._wrapperState.controlled && i && !ls && (E("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ls = !0), a._wrapperState.controlled && !i && !sl && (E("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), sl = !0);
      }
      V(e, t);
      var o = Ti(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = or(o)) : a.value !== or(o) && (a.value = or(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Je(a, t.type, o) : t.hasOwnProperty("defaultValue") && Je(a, t.type, Ti(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function fe(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = or(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function nt(e, t) {
      var a = e;
      $(a, t), Ce(a, t);
    }
    function Ce(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Xn(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var f = o[s];
          if (!(f === e || f.form !== e.form)) {
            var p = nm(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            ll(f), $(f, p);
          }
        }
      }
    }
    function Je(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || xu(e.ownerDocument) !== e) && (a == null ? e.defaultValue = or(e._wrapperState.initialValue) : e.defaultValue !== or(a) && (e.defaultValue = or(a)));
    }
    var Ot = !1, Bt = !1, ln = !1;
    function en(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? v.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Bt || (Bt = !0, E("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (ln || (ln = !0, E("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ot && (E("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ot = !0);
    }
    function sn(e, t) {
      t.value != null && e.setAttribute("value", or(Ti(t.value)));
    }
    var vn = Array.isArray;
    function zt(e) {
      return vn(e);
    }
    var Vi;
    Vi = !1;
    function cl() {
      var e = Fr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var ss = ["value", "defaultValue"];
    function ld(e) {
      {
        Pi("select", e);
        for (var t = 0; t < ss.length; t++) {
          var a = ss[t];
          if (e[a] != null) {
            var i = zt(e[a]);
            e.multiple && !i ? E("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, cl()) : !e.multiple && i && E("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, cl());
          }
        }
      }
    }
    function ii(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var m = 0; m < o.length; m++) {
          var C = f.hasOwnProperty("$" + o[m].value);
          o[m].selected !== C && (o[m].selected = C), C && i && (o[m].defaultSelected = !0);
        }
      } else {
        for (var T = or(Ti(a)), k = null, O = 0; O < o.length; O++) {
          if (o[O].value === T) {
            o[O].selected = !0, i && (o[O].defaultSelected = !0);
            return;
          }
          k === null && !o[O].disabled && (k = o[O]);
        }
        k !== null && (k.selected = !0);
      }
    }
    function cs(e, t) {
      return Mt({}, t, {
        value: void 0
      });
    }
    function fs(e, t) {
      var a = e;
      ld(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Vi && (E("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Vi = !0);
    }
    function sd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ii(a, !!t.multiple, i, !1) : t.defaultValue != null && ii(a, !!t.multiple, t.defaultValue, !0);
    }
    function Ry(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? ii(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? ii(a, !!t.multiple, t.defaultValue, !0) : ii(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function by(e, t) {
      var a = e, i = t.value;
      i != null && ii(a, !!t.multiple, i, !1);
    }
    var cd = !1;
    function fd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Mt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: or(a._wrapperState.initialValue)
      });
      return i;
    }
    function _v(e, t) {
      var a = e;
      Pi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !cd && (E("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Fr() || "A component"), cd = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          E("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (zt(o)) {
              if (o.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              o = o[0];
            }
            s = o;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Ti(i)
      };
    }
    function kv(e, t) {
      var a = e, i = Ti(t.value), o = Ti(t.defaultValue);
      if (i != null) {
        var s = or(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = or(o));
    }
    function Lv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function dd(e, t) {
      kv(e, t);
    }
    var Bi = "http://www.w3.org/1999/xhtml", xy = "http://www.w3.org/1998/Math/MathML", pd = "http://www.w3.org/2000/svg";
    function mc(e) {
      switch (e) {
        case "svg":
          return pd;
        case "math":
          return xy;
        default:
          return Bi;
      }
    }
    function vd(e, t) {
      return e == null || e === Bi ? mc(t) : e === pd && t === "foreignObject" ? Bi : e;
    }
    var Dy = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, yc, Av = Dy(function(e, t) {
      if (e.namespaceURI === pd && !("innerHTML" in e)) {
        yc = yc || document.createElement("div"), yc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = yc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ea = 1, Yi = 3, $n = 8, ui = 9, co = 11, gc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Yi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, zv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, fl = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function jv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Uv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(fl).forEach(function(e) {
      Uv.forEach(function(t) {
        fl[jv(t, e)] = fl[e];
      });
    });
    function Sc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(fl.hasOwnProperty(e) && fl[e]) ? t + "px" : (mn(t, e), ("" + t).trim());
    }
    var dl = /([A-Z])/g, My = /^ms-/;
    function Oy(e) {
      return e.replace(dl, "-$1").toLowerCase().replace(My, "-ms-");
    }
    var Iv = function() {
    };
    {
      var Fv = /^(?:webkit|moz|o)[A-Z]/, Hv = /^-ms-/, ds = /-(.)/g, pl = /;\s*$/, vl = {}, hl = {}, Pv = !1, hd = !1, md = function(e) {
        return e.replace(ds, function(t, a) {
          return a.toUpperCase();
        });
      }, yd = function(e) {
        vl.hasOwnProperty(e) && vl[e] || (vl[e] = !0, E(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          md(e.replace(Hv, "ms-"))
        ));
      }, Vv = function(e) {
        vl.hasOwnProperty(e) && vl[e] || (vl[e] = !0, E("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Bv = function(e, t) {
        hl.hasOwnProperty(t) && hl[t] || (hl[t] = !0, E(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(pl, "")));
      }, Yv = function(e, t) {
        Pv || (Pv = !0, E("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Ny = function(e, t) {
        hd || (hd = !0, E("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Iv = function(e, t) {
        e.indexOf("-") > -1 ? yd(e) : Fv.test(e) ? Vv(e) : pl.test(t) && Bv(e, t), typeof t == "number" && (isNaN(t) ? Yv(e, t) : isFinite(t) || Ny(e, t));
      };
    }
    var _y = Iv;
    function ky(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Oy(i)) + ":", t += Sc(i, o, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function $v(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = i.indexOf("--") === 0;
          o || _y(i, t[i]);
          var s = Sc(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Ly(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function za(e) {
      var t = {};
      for (var a in e)
        for (var i = zv[a] || [a], o = 0; o < i.length; o++)
          t[i[o]] = a;
      return t;
    }
    function ps(e, t) {
      {
        if (!t)
          return;
        var a = za(e), i = za(t), o = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var m = f + "," + p;
            if (o[m])
              continue;
            o[m] = !0, E("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Ly(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var Qv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Wv = Mt({
      menuitem: !0
    }, Qv), Gv = "__html";
    function Ec(e, t) {
      if (t) {
        if (Wv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Gv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && E("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function $i(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Cc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, qv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, oi = {}, gd = new RegExp("^(aria)-[" + Be + "]*$"), vs = new RegExp("^(aria)[A-Z][" + Be + "]*$");
    function Sd(e, t) {
      {
        if (Mn.call(oi, t) && oi[t])
          return !0;
        if (vs.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = qv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return E("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), oi[t] = !0, !0;
          if (t !== i)
            return E("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), oi[t] = !0, !0;
        }
        if (gd.test(t)) {
          var o = t.toLowerCase(), s = qv.hasOwnProperty(o) ? o : null;
          if (s == null)
            return oi[t] = !0, !1;
          if (t !== s)
            return E("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), oi[t] = !0, !0;
        }
      }
      return !0;
    }
    function Xv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = Sd(e, i);
          o || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? E("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && E("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Tc(e, t) {
      $i(e, t) || Xv(e, t);
    }
    var fo = !1;
    function Ed(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !fo && (fo = !0, e === "select" && t.multiple ? E("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : E("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Cd = function() {
    };
    {
      var lr = {}, Td = /^on./, Kv = /^on[^A-Z]/, Zv = new RegExp("^(aria)-[" + Be + "]*$"), Jv = new RegExp("^(aria)[A-Z][" + Be + "]*$");
      Cd = function(e, t, a, i) {
        if (Mn.call(lr, t) && lr[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return E("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), lr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(o) ? f[o] : null;
          if (p != null)
            return E("Invalid event handler property `%s`. Did you mean `%s`?", t, p), lr[t] = !0, !0;
          if (Td.test(t))
            return E("Unknown event handler property `%s`. It will be ignored.", t), lr[t] = !0, !0;
        } else if (Td.test(t))
          return Kv.test(t) && E("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), lr[t] = !0, !0;
        if (Zv.test(t) || Jv.test(t))
          return !0;
        if (o === "innerhtml")
          return E("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), lr[t] = !0, !0;
        if (o === "aria")
          return E("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), lr[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return E("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), lr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return E("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), lr[t] = !0, !0;
        var m = rn(t), C = m !== null && m.type === Zn;
        if (Cc.hasOwnProperty(o)) {
          var T = Cc[o];
          if (T !== t)
            return E("Invalid DOM property `%s`. Did you mean `%s`?", t, T), lr[t] = !0, !0;
        } else if (!C && t !== o)
          return E("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), lr[t] = !0, !0;
        return typeof a == "boolean" && st(t, a, m, !1) ? (a ? E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), lr[t] = !0, !0) : C ? !0 : st(t, a, m, !1) ? (lr[t] = !0, !1) : ((a === "false" || a === "true") && m !== null && m.type === nn && (E("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), lr[t] = !0), !0);
      };
    }
    var eh = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var s = Cd(e, o, t[o], a);
          s || i.push(o);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? E("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && E("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function th(e, t, a) {
      $i(e, t) || eh(e, t, a);
    }
    var Qi = 1, hs = 2, po = 4, Ay = Qi | hs | po, ms = null;
    function ys(e) {
      ms !== null && E("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ms = e;
    }
    function zy() {
      ms === null && E("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ms = null;
    }
    function nh(e) {
      return e === ms;
    }
    function wc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Yi ? t.parentNode : t;
    }
    var cn = null, Mu = null, Wi = null;
    function ml(e) {
      var t = Vl(e);
      if (t) {
        if (typeof cn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = nm(a);
          cn(t.stateNode, t.type, i);
        }
      }
    }
    function rh(e) {
      cn = e;
    }
    function Rc(e) {
      Mu ? Wi ? Wi.push(e) : Wi = [e] : Mu = e;
    }
    function gs() {
      return Mu !== null || Wi !== null;
    }
    function Ss() {
      if (Mu) {
        var e = Mu, t = Wi;
        if (Mu = null, Wi = null, ml(e), t)
          for (var a = 0; a < t.length; a++)
            ml(t[a]);
      }
    }
    var vo = function(e, t) {
      return e(t);
    }, wd = function() {
    }, Rd = !1;
    function jy() {
      var e = gs();
      e && (wd(), Ss());
    }
    function bd(e, t, a) {
      if (Rd)
        return e(t, a);
      Rd = !0;
      try {
        return vo(e, t, a);
      } finally {
        Rd = !1, jy();
      }
    }
    function bc(e, t, a) {
      vo = e, wd = a;
    }
    function xc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function xd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && xc(t));
        default:
          return !1;
      }
    }
    function ho(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = nm(a);
      if (i === null)
        return null;
      var o = i[t];
      if (xd(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var Es = !1;
    if (Jt)
      try {
        var mo = {};
        Object.defineProperty(mo, "passive", {
          get: function() {
            Es = !0;
          }
        }), window.addEventListener("test", mo, mo), window.removeEventListener("test", mo, mo);
      } catch {
        Es = !1;
      }
    function ah(e, t, a, i, o, s, f, p, m) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, C);
      } catch (T) {
        this.onError(T);
      }
    }
    var Dd = ah;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Md = document.createElement("react");
      Dd = function(t, a, i, o, s, f, p, m, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), k = !1, O = !0, P = window.event, B = Object.getOwnPropertyDescriptor(window, "event");
        function G() {
          Md.removeEventListener(q, Xe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = P);
        }
        var Le = Array.prototype.slice.call(arguments, 3);
        function Xe() {
          k = !0, G(), a.apply(i, Le), O = !1;
        }
        var Ye, Ft = !1, At = !1;
        function j(U) {
          if (Ye = U.error, Ft = !0, Ye === null && U.colno === 0 && U.lineno === 0 && (At = !0), U.defaultPrevented && Ye != null && typeof Ye == "object")
            try {
              Ye._suppressLogging = !0;
            } catch {
            }
        }
        var q = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", j), Md.addEventListener(q, Xe, !1), T.initEvent(q, !1, !1), Md.dispatchEvent(T), B && Object.defineProperty(window, "event", B), k && O && (Ft ? At && (Ye = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ye = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ye)), window.removeEventListener("error", j), !k)
          return G(), ah.apply(this, arguments);
      };
    }
    var Uy = Dd, Ou = !1, li = null, Cs = !1, Nu = null, wi = {
      onError: function(e) {
        Ou = !0, li = e;
      }
    };
    function yo(e, t, a, i, o, s, f, p, m) {
      Ou = !1, li = null, Uy.apply(wi, arguments);
    }
    function Gi(e, t, a, i, o, s, f, p, m) {
      if (yo.apply(this, arguments), Ou) {
        var C = Nd();
        Cs || (Cs = !0, Nu = C);
      }
    }
    function Od() {
      if (Cs) {
        var e = Nu;
        throw Cs = !1, Nu = null, e;
      }
    }
    function Iy() {
      return Ou;
    }
    function Nd() {
      if (Ou) {
        var e = li;
        return Ou = !1, li = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ja(e) {
      return e._reactInternals;
    }
    function Ts(e) {
      return e._reactInternals !== void 0;
    }
    function yl(e, t) {
      e._reactInternals = t;
    }
    var Ge = (
      /*                      */
      0
    ), _u = (
      /*                */
      1
    ), yn = (
      /*                    */
      2
    ), bt = (
      /*                       */
      4
    ), qt = (
      /*                */
      16
    ), Kt = (
      /*                 */
      32
    ), Ri = (
      /*                     */
      64
    ), ft = (
      /*                   */
      128
    ), jn = (
      /*            */
      256
    ), ta = (
      /*                          */
      512
    ), Ua = (
      /*                     */
      1024
    ), Rn = (
      /*                      */
      2048
    ), Ia = (
      /*                    */
      4096
    ), ku = (
      /*                   */
      8192
    ), ws = (
      /*             */
      16384
    ), Dc = Rn | bt | Ri | ta | Ua | ws, ih = (
      /*               */
      32767
    ), Ea = (
      /*                   */
      32768
    ), sr = (
      /*                */
      65536
    ), Rs = (
      /* */
      131072
    ), _d = (
      /*                       */
      1048576
    ), kd = (
      /*                    */
      2097152
    ), na = (
      /*                 */
      4194304
    ), Lu = (
      /*                */
      8388608
    ), ra = (
      /*               */
      16777216
    ), go = (
      /*              */
      33554432
    ), gl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      bt | Ua | 0
    ), aa = yn | bt | qt | Kt | ta | Ia | ku, Mr = bt | Ri | ta | ku, Fa = Rn | qt, mr = na | Lu | kd, qi = y.ReactCurrentOwner;
    function Ca(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (yn | Ia)) !== Ge && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === te ? a : null;
    }
    function Ld(e) {
      if (e.tag === pe) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Mc(e) {
      return e.tag === te ? e.stateNode.containerInfo : null;
    }
    function Ad(e) {
      return Ca(e) === e;
    }
    function Ta(e) {
      {
        var t = qi.current;
        if (t !== null && t.tag === Q) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || E("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", vt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = ja(e);
      return o ? Ca(o) === o : !1;
    }
    function ia(e) {
      if (Ca(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function gn(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ca(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, o = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = o = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var m = s.child; m; ) {
            if (m === i)
              return ia(s), e;
            if (m === o)
              return ia(s), t;
            m = m.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = s, o = f;
        else {
          for (var C = !1, T = s.child; T; ) {
            if (T === i) {
              C = !0, i = s, o = f;
              break;
            }
            if (T === o) {
              C = !0, o = s, i = f;
              break;
            }
            T = T.sibling;
          }
          if (!C) {
            for (T = f.child; T; ) {
              if (T === i) {
                C = !0, i = f, o = s;
                break;
              }
              if (T === o) {
                C = !0, o = f, i = s;
                break;
              }
              T = T.sibling;
            }
            if (!C)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== te)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Ha(e) {
      var t = gn(e);
      return t !== null ? zd(t) : null;
    }
    function zd(e) {
      if (e.tag === J || e.tag === ve)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = zd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function uh(e) {
      var t = gn(e);
      return t !== null ? Oc(t) : null;
    }
    function Oc(e) {
      if (e.tag === J || e.tag === ve)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== le) {
          var a = Oc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Nc = h.unstable_scheduleCallback, oh = h.unstable_cancelCallback, _c = h.unstable_shouldYield, lh = h.unstable_requestPaint, Nn = h.unstable_now, jd = h.unstable_getCurrentPriorityLevel, kc = h.unstable_ImmediatePriority, wa = h.unstable_UserBlockingPriority, bi = h.unstable_NormalPriority, Lc = h.unstable_LowPriority, Au = h.unstable_IdlePriority, Ud = h.unstable_yieldValue, Id = h.unstable_setDisableYieldValue, zu = null, cr = null, Se = null, Fn = !1, yr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Fd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return E("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        pt && (e = Mt({}, e, {
          getLaneLabelMap: Uu,
          injectProfilingHooks: Ki
        })), zu = t.inject(e), cr = t;
      } catch (a) {
        E("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function sh(e, t) {
      if (cr && typeof cr.onScheduleFiberRoot == "function")
        try {
          cr.onScheduleFiberRoot(zu, e, t);
        } catch (a) {
          Fn || (Fn = !0, E("React instrumentation encountered an error: %s", a));
        }
    }
    function Xi(e, t) {
      if (cr && typeof cr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & ft) === ft;
          if (ut) {
            var i;
            switch (t) {
              case Or:
                i = kc;
                break;
              case gr:
                i = wa;
                break;
              case Ji:
                i = bi;
                break;
              case Ls:
                i = Au;
                break;
              default:
                i = bi;
                break;
            }
            cr.onCommitFiberRoot(zu, e, i, a);
          }
        } catch (o) {
          Fn || (Fn = !0, E("React instrumentation encountered an error: %s", o));
        }
    }
    function ju(e) {
      if (cr && typeof cr.onPostCommitFiberRoot == "function")
        try {
          cr.onPostCommitFiberRoot(zu, e);
        } catch (t) {
          Fn || (Fn = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function Hd(e) {
      if (cr && typeof cr.onCommitFiberUnmount == "function")
        try {
          cr.onCommitFiberUnmount(zu, e);
        } catch (t) {
          Fn || (Fn = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function tr(e) {
      if (typeof Ud == "function" && (Id(e), A(e)), cr && typeof cr.setStrictMode == "function")
        try {
          cr.setStrictMode(zu, e);
        } catch (t) {
          Fn || (Fn = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function Ki(e) {
      Se = e;
    }
    function Uu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Sn; a++) {
          var i = Fy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Ac(e) {
      Se !== null && typeof Se.markCommitStarted == "function" && Se.markCommitStarted(e);
    }
    function Pd() {
      Se !== null && typeof Se.markCommitStopped == "function" && Se.markCommitStopped();
    }
    function Iu(e) {
      Se !== null && typeof Se.markComponentRenderStarted == "function" && Se.markComponentRenderStarted(e);
    }
    function So() {
      Se !== null && typeof Se.markComponentRenderStopped == "function" && Se.markComponentRenderStopped();
    }
    function ch(e) {
      Se !== null && typeof Se.markComponentPassiveEffectMountStarted == "function" && Se.markComponentPassiveEffectMountStarted(e);
    }
    function Vd() {
      Se !== null && typeof Se.markComponentPassiveEffectMountStopped == "function" && Se.markComponentPassiveEffectMountStopped();
    }
    function zc(e) {
      Se !== null && typeof Se.markComponentPassiveEffectUnmountStarted == "function" && Se.markComponentPassiveEffectUnmountStarted(e);
    }
    function fh() {
      Se !== null && typeof Se.markComponentPassiveEffectUnmountStopped == "function" && Se.markComponentPassiveEffectUnmountStopped();
    }
    function dh(e) {
      Se !== null && typeof Se.markComponentLayoutEffectMountStarted == "function" && Se.markComponentLayoutEffectMountStarted(e);
    }
    function ph() {
      Se !== null && typeof Se.markComponentLayoutEffectMountStopped == "function" && Se.markComponentLayoutEffectMountStopped();
    }
    function jc(e) {
      Se !== null && typeof Se.markComponentLayoutEffectUnmountStarted == "function" && Se.markComponentLayoutEffectUnmountStarted(e);
    }
    function Sl() {
      Se !== null && typeof Se.markComponentLayoutEffectUnmountStopped == "function" && Se.markComponentLayoutEffectUnmountStopped();
    }
    function Uc(e, t, a) {
      Se !== null && typeof Se.markComponentErrored == "function" && Se.markComponentErrored(e, t, a);
    }
    function vh(e, t, a) {
      Se !== null && typeof Se.markComponentSuspended == "function" && Se.markComponentSuspended(e, t, a);
    }
    function hh(e) {
      Se !== null && typeof Se.markLayoutEffectsStarted == "function" && Se.markLayoutEffectsStarted(e);
    }
    function El() {
      Se !== null && typeof Se.markLayoutEffectsStopped == "function" && Se.markLayoutEffectsStopped();
    }
    function mh(e) {
      Se !== null && typeof Se.markPassiveEffectsStarted == "function" && Se.markPassiveEffectsStarted(e);
    }
    function bs() {
      Se !== null && typeof Se.markPassiveEffectsStopped == "function" && Se.markPassiveEffectsStopped();
    }
    function si(e) {
      Se !== null && typeof Se.markRenderStarted == "function" && Se.markRenderStarted(e);
    }
    function xs() {
      Se !== null && typeof Se.markRenderYielded == "function" && Se.markRenderYielded();
    }
    function Cl() {
      Se !== null && typeof Se.markRenderStopped == "function" && Se.markRenderStopped();
    }
    function Eo(e) {
      Se !== null && typeof Se.markRenderScheduled == "function" && Se.markRenderScheduled(e);
    }
    function Bd(e, t) {
      Se !== null && typeof Se.markForceUpdateScheduled == "function" && Se.markForceUpdateScheduled(e, t);
    }
    function Fu(e, t) {
      Se !== null && typeof Se.markStateUpdateScheduled == "function" && Se.markStateUpdateScheduled(e, t);
    }
    var et = (
      /*                         */
      0
    ), Nt = (
      /*                 */
      1
    ), rt = (
      /*                    */
      2
    ), _n = (
      /*               */
      8
    ), Pa = (
      /*              */
      16
    ), Ic = Math.clz32 ? Math.clz32 : Co, Fc = Math.log, Yd = Math.LN2;
    function Co(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Fc(t) / Yd | 0) | 0;
    }
    var Sn = 31, K = (
      /*                        */
      0
    ), Ut = (
      /*                          */
      0
    ), lt = (
      /*                        */
      1
    ), xi = (
      /*    */
      2
    ), Ra = (
      /*             */
      4
    ), To = (
      /*            */
      8
    ), En = (
      /*                     */
      16
    ), wo = (
      /*                */
      32
    ), Hu = (
      /*                       */
      4194240
    ), Ro = (
      /*                        */
      64
    ), Va = (
      /*                        */
      128
    ), ua = (
      /*                        */
      256
    ), bo = (
      /*                        */
      512
    ), Ds = (
      /*                        */
      1024
    ), Ms = (
      /*                        */
      2048
    ), Hc = (
      /*                        */
      4096
    ), Pc = (
      /*                        */
      8192
    ), Vc = (
      /*                        */
      16384
    ), Bc = (
      /*                       */
      32768
    ), Yc = (
      /*                       */
      65536
    ), $c = (
      /*                       */
      131072
    ), Qc = (
      /*                       */
      262144
    ), Wc = (
      /*                       */
      524288
    ), xo = (
      /*                       */
      1048576
    ), Gc = (
      /*                       */
      2097152
    ), Do = (
      /*                            */
      130023424
    ), Zi = (
      /*                             */
      4194304
    ), qc = (
      /*                             */
      8388608
    ), Os = (
      /*                             */
      16777216
    ), Xc = (
      /*                             */
      33554432
    ), Kc = (
      /*                             */
      67108864
    ), $d = Zi, Tl = (
      /*          */
      134217728
    ), Zc = (
      /*                          */
      268435455
    ), wl = (
      /*               */
      268435456
    ), Pu = (
      /*                        */
      536870912
    ), oa = (
      /*                   */
      1073741824
    );
    function Fy(e) {
      {
        if (e & lt)
          return "Sync";
        if (e & xi)
          return "InputContinuousHydration";
        if (e & Ra)
          return "InputContinuous";
        if (e & To)
          return "DefaultHydration";
        if (e & En)
          return "Default";
        if (e & wo)
          return "TransitionHydration";
        if (e & Hu)
          return "Transition";
        if (e & Do)
          return "Retry";
        if (e & Tl)
          return "SelectiveHydration";
        if (e & wl)
          return "IdleHydration";
        if (e & Pu)
          return "Idle";
        if (e & oa)
          return "Offscreen";
      }
    }
    var fn = -1, Jc = Ro, ef = Zi;
    function Rl(e) {
      switch (Qn(e)) {
        case lt:
          return lt;
        case xi:
          return xi;
        case Ra:
          return Ra;
        case To:
          return To;
        case En:
          return En;
        case wo:
          return wo;
        case Ro:
        case Va:
        case ua:
        case bo:
        case Ds:
        case Ms:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case Yc:
        case $c:
        case Qc:
        case Wc:
        case xo:
        case Gc:
          return e & Hu;
        case Zi:
        case qc:
        case Os:
        case Xc:
        case Kc:
          return e & Do;
        case Tl:
          return Tl;
        case wl:
          return wl;
        case Pu:
          return Pu;
        case oa:
          return oa;
        default:
          return E("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ns(e, t) {
      var a = e.pendingLanes;
      if (a === K)
        return K;
      var i = K, o = e.suspendedLanes, s = e.pingedLanes, f = a & Zc;
      if (f !== K) {
        var p = f & ~o;
        if (p !== K)
          i = Rl(p);
        else {
          var m = f & s;
          m !== K && (i = Rl(m));
        }
      } else {
        var C = a & ~o;
        C !== K ? i = Rl(C) : s !== K && (i = Rl(s));
      }
      if (i === K)
        return K;
      if (t !== K && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === K) {
        var T = Qn(i), k = Qn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= k || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === En && (k & Hu) !== K
        )
          return t;
      }
      (i & Ra) !== K && (i |= a & En);
      var O = e.entangledLanes;
      if (O !== K)
        for (var P = e.entanglements, B = i & O; B > 0; ) {
          var G = Vu(B), Le = 1 << G;
          i |= P[G], B &= ~Le;
        }
      return i;
    }
    function yh(e, t) {
      for (var a = e.eventTimes, i = fn; t > 0; ) {
        var o = Vu(t), s = 1 << o, f = a[o];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function tf(e, t) {
      switch (e) {
        case lt:
        case xi:
        case Ra:
          return t + 250;
        case To:
        case En:
        case wo:
        case Ro:
        case Va:
        case ua:
        case bo:
        case Ds:
        case Ms:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case Yc:
        case $c:
        case Qc:
        case Wc:
        case xo:
        case Gc:
          return t + 5e3;
        case Zi:
        case qc:
        case Os:
        case Xc:
        case Kc:
          return fn;
        case Tl:
        case wl:
        case Pu:
        case oa:
          return fn;
        default:
          return E("Should have found matching lanes. This is a bug in React."), fn;
      }
    }
    function Hy(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Vu(f), m = 1 << p, C = s[p];
        C === fn ? ((m & i) === K || (m & o) !== K) && (s[p] = tf(m, t)) : C <= t && (e.expiredLanes |= m), f &= ~m;
      }
    }
    function Py(e) {
      return Rl(e.pendingLanes);
    }
    function Qd(e) {
      var t = e.pendingLanes & ~oa;
      return t !== K ? t : t & oa ? oa : K;
    }
    function bl(e) {
      return (e & lt) !== K;
    }
    function _s(e) {
      return (e & Zc) !== K;
    }
    function nf(e) {
      return (e & Do) === e;
    }
    function Vy(e) {
      var t = lt | Ra | En;
      return (e & t) === K;
    }
    function gh(e) {
      return (e & Hu) === e;
    }
    function ks(e, t) {
      var a = xi | Ra | To | En;
      return (t & a) !== K;
    }
    function Sh(e, t) {
      return (t & e.expiredLanes) !== K;
    }
    function Wd(e) {
      return (e & Hu) !== K;
    }
    function Gd() {
      var e = Jc;
      return Jc <<= 1, (Jc & Hu) === K && (Jc = Ro), e;
    }
    function By() {
      var e = ef;
      return ef <<= 1, (ef & Do) === K && (ef = Zi), e;
    }
    function Qn(e) {
      return e & -e;
    }
    function nr(e) {
      return Qn(e);
    }
    function Vu(e) {
      return 31 - Ic(e);
    }
    function rf(e) {
      return Vu(e);
    }
    function la(e, t) {
      return (e & t) !== K;
    }
    function Mo(e, t) {
      return (e & t) === t;
    }
    function xt(e, t) {
      return e | t;
    }
    function xl(e, t) {
      return e & ~t;
    }
    function qd(e, t) {
      return e & t;
    }
    function Eh(e) {
      return e;
    }
    function Ch(e, t) {
      return e !== Ut && e < t ? e : t;
    }
    function af(e) {
      for (var t = [], a = 0; a < Sn; a++)
        t.push(e);
      return t;
    }
    function Oo(e, t, a) {
      e.pendingLanes |= t, t !== Pu && (e.suspendedLanes = K, e.pingedLanes = K);
      var i = e.eventTimes, o = rf(t);
      i[o] = a;
    }
    function Xd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = Vu(i), s = 1 << o;
        a[o] = fn, i &= ~s;
      }
    }
    function Kd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Zd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = K, e.pingedLanes = K, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Vu(f), m = 1 << p;
        i[p] = K, o[p] = fn, s[p] = fn, f &= ~m;
      }
    }
    function Dl(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = Vu(o), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~f;
      }
    }
    function Yy(e, t) {
      var a = Qn(t), i;
      switch (a) {
        case Ra:
          i = xi;
          break;
        case En:
          i = To;
          break;
        case Ro:
        case Va:
        case ua:
        case bo:
        case Ds:
        case Ms:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case Yc:
        case $c:
        case Qc:
        case Wc:
        case xo:
        case Gc:
        case Zi:
        case qc:
        case Os:
        case Xc:
        case Kc:
          i = wo;
          break;
        case Pu:
          i = wl;
          break;
        default:
          i = Ut;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Ut ? Ut : i;
    }
    function Jd(e, t, a) {
      if (yr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = rf(a), s = 1 << o, f = i[o];
          f.add(t), a &= ~s;
        }
    }
    function uf(e, t) {
      if (yr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = rf(t), s = 1 << o, f = a[o];
          f.size > 0 && (f.forEach(function(p) {
            var m = p.alternate;
            (m === null || !i.has(m)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function ep(e, t) {
      return null;
    }
    var Or = lt, gr = Ra, Ji = En, Ls = Pu, No = Ut;
    function Ba() {
      return No;
    }
    function rr(e) {
      No = e;
    }
    function As(e, t) {
      var a = No;
      try {
        return No = e, t();
      } finally {
        No = a;
      }
    }
    function Nr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function $y(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function tp(e, t) {
      return e !== 0 && e < t;
    }
    function zs(e) {
      var t = Qn(e);
      return tp(Or, t) ? tp(gr, t) ? _s(t) ? Ji : Ls : gr : Or;
    }
    function ar(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Th;
    function je(e) {
      Th = e;
    }
    function Ml(e) {
      Th(e);
    }
    var js;
    function wh(e) {
      js = e;
    }
    var Rh;
    function Us(e) {
      Rh = e;
    }
    var Is;
    function np(e) {
      Is = e;
    }
    var rp;
    function bh(e) {
      rp = e;
    }
    var of = !1, Ol = [], Di = null, bn = null, fr = null, Ya = /* @__PURE__ */ new Map(), Nl = /* @__PURE__ */ new Map(), eu = [], ci = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function xh(e) {
      return ci.indexOf(e) > -1;
    }
    function Mi(e, t, a, i, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [i]
      };
    }
    function Dh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Di = null;
          break;
        case "dragenter":
        case "dragleave":
          bn = null;
          break;
        case "mouseover":
        case "mouseout":
          fr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ya.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Nl.delete(i);
          break;
        }
      }
    }
    function _l(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Mi(t, a, i, o, s);
        if (t !== null) {
          var p = Vl(t);
          p !== null && js(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var m = e.targetContainers;
      return o !== null && m.indexOf(o) === -1 && m.push(o), e;
    }
    function Mh(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var s = o;
          return Di = _l(Di, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = o;
          return bn = _l(bn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = o;
          return fr = _l(fr, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var m = o, C = m.pointerId;
          return Ya.set(C, _l(Ya.get(C) || null, e, t, a, i, m)), !0;
        }
        case "gotpointercapture": {
          var T = o, k = T.pointerId;
          return Nl.set(k, _l(Nl.get(k) || null, e, t, a, i, T)), !0;
        }
      }
      return !1;
    }
    function ap(e) {
      var t = Ws(e.target);
      if (t !== null) {
        var a = Ca(t);
        if (a !== null) {
          var i = a.tag;
          if (i === pe) {
            var o = Ld(a);
            if (o !== null) {
              e.blockedOn = o, rp(e.priority, function() {
                Rh(a);
              });
              return;
            }
          } else if (i === te) {
            var s = a.stateNode;
            if (ar(s)) {
              e.blockedOn = Mc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Oh(e) {
      for (var t = Is(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < eu.length && tp(t, eu[i].priority); i++)
        ;
      eu.splice(i, 0, a), i === 0 && ap(a);
    }
    function lf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = _o(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          ys(s), o.target.dispatchEvent(s), zy();
        } else {
          var f = Vl(i);
          return f !== null && js(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Fs(e, t, a) {
      lf(e) && a.delete(t);
    }
    function ip() {
      of = !1, Di !== null && lf(Di) && (Di = null), bn !== null && lf(bn) && (bn = null), fr !== null && lf(fr) && (fr = null), Ya.forEach(Fs), Nl.forEach(Fs);
    }
    function _r(e, t) {
      e.blockedOn === t && (e.blockedOn = null, of || (of = !0, h.unstable_scheduleCallback(h.unstable_NormalPriority, ip)));
    }
    function Lt(e) {
      if (Ol.length > 0) {
        _r(Ol[0], e);
        for (var t = 1; t < Ol.length; t++) {
          var a = Ol[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Di !== null && _r(Di, e), bn !== null && _r(bn, e), fr !== null && _r(fr, e);
      var i = function(p) {
        return _r(p, e);
      };
      Ya.forEach(i), Nl.forEach(i);
      for (var o = 0; o < eu.length; o++) {
        var s = eu[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; eu.length > 0; ) {
        var f = eu[0];
        if (f.blockedOn !== null)
          break;
        ap(f), f.blockedOn === null && eu.shift();
      }
    }
    var kn = y.ReactCurrentBatchConfig, Un = !0;
    function dr(e) {
      Un = !!e;
    }
    function ba() {
      return Un;
    }
    function kl(e, t, a) {
      var i = Hr(t), o;
      switch (i) {
        case Or:
          o = ir;
          break;
        case gr:
          o = Hs;
          break;
        case Ji:
        default:
          o = tu;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function ir(e, t, a, i) {
      var o = Ba(), s = kn.transition;
      kn.transition = null;
      try {
        rr(Or), tu(e, t, a, i);
      } finally {
        rr(o), kn.transition = s;
      }
    }
    function Hs(e, t, a, i) {
      var o = Ba(), s = kn.transition;
      kn.transition = null;
      try {
        rr(gr), tu(e, t, a, i);
      } finally {
        rr(o), kn.transition = s;
      }
    }
    function tu(e, t, a, i) {
      Un && sf(e, t, a, i);
    }
    function sf(e, t, a, i) {
      var o = _o(e, t, a, i);
      if (o === null) {
        fg(e, t, i, Ll, a), Dh(e, i);
        return;
      }
      if (Mh(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Dh(e, i), t & po && xh(e)) {
        for (; o !== null; ) {
          var s = Vl(o);
          s !== null && Ml(s);
          var f = _o(e, t, a, i);
          if (f === null && fg(e, t, i, Ll, a), f === o)
            break;
          o = f;
        }
        o !== null && i.stopPropagation();
        return;
      }
      fg(e, t, i, null, a);
    }
    var Ll = null;
    function _o(e, t, a, i) {
      Ll = null;
      var o = wc(i), s = Ws(o);
      if (s !== null) {
        var f = Ca(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === pe) {
            var m = Ld(f);
            if (m !== null)
              return m;
            s = null;
          } else if (p === te) {
            var C = f.stateNode;
            if (ar(C))
              return Mc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Ll = s, null;
    }
    function Hr(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Or;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return gr;
        case "message": {
          var t = jd();
          switch (t) {
            case kc:
              return Or;
            case wa:
              return gr;
            case bi:
            case Lc:
              return Ji;
            case Au:
              return Ls;
            default:
              return Ji;
          }
        }
        default:
          return Ji;
      }
    }
    function up(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Al(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function nu(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function cf(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ko = null, Oi = null, Bu = null;
    function Yu(e) {
      return ko = e, Oi = df(), !0;
    }
    function ff() {
      ko = null, Oi = null, Bu = null;
    }
    function zl() {
      if (Bu)
        return Bu;
      var e, t = Oi, a = t.length, i, o = df(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === o[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Bu = o.slice(e, p), Bu;
    }
    function df() {
      return "value" in ko ? ko.value : ko.textContent;
    }
    function Lo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Ao() {
      return !0;
    }
    function kr() {
      return !1;
    }
    function Wn(e) {
      function t(a, i, o, s, f) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var m = e[p];
            m ? this[p] = m(s) : this[p] = s[p];
          }
        var C = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return C ? this.isDefaultPrevented = Ao : this.isDefaultPrevented = kr, this.isPropagationStopped = kr, this;
      }
      return Mt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ao);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ao);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Ao
      }), t;
    }
    var Lr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ar = Wn(Lr), jl = Mt({}, Lr, {
      view: 0,
      detail: 0
    }), op = Wn(jl), Ps, lp, $a;
    function Nh(e) {
      e !== $a && ($a && e.type === "mousemove" ? (Ps = e.screenX - $a.screenX, lp = e.screenY - $a.screenY) : (Ps = 0, lp = 0), $a = e);
    }
    var Ul = Mt({}, jl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: hf,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Nh(e), Ps);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : lp;
      }
    }), $u = Wn(Ul), sp = Mt({}, Ul, {
      dataTransfer: 0
    }), zo = Wn(sp), _h = Mt({}, jl, {
      relatedTarget: 0
    }), pf = Wn(_h), cp = Mt({}, Lr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), vf = Wn(cp), Qy = Mt({}, Lr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Wy = Wn(Qy), kh = Mt({}, Lr, {
      data: 0
    }), fp = Wn(kh), jo = fp, Gy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Il = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Lh(e) {
      if (e.key) {
        var t = Gy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Lo(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Il[e.keyCode] || "Unidentified" : "";
    }
    var In = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function qy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = In[e];
      return i ? !!a[i] : !1;
    }
    function hf(e) {
      return qy;
    }
    var Xy = Mt({}, jl, {
      key: Lh,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: hf,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Lo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Lo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Ky = Wn(Xy), Ah = Mt({}, Ul, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), dp = Wn(Ah), Zy = Mt({}, jl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: hf
    }), Qa = Wn(Zy), pp = Mt({}, Lr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Jy = Wn(pp), Qu = Mt({}, Ul, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), mf = Wn(Qu), Uo = [9, 13, 27, 32], Vs = 229, Bs = Jt && "CompositionEvent" in window, Io = null;
    Jt && "documentMode" in document && (Io = document.documentMode);
    var eg = Jt && "TextEvent" in window && !Io, yf = Jt && (!Bs || Io && Io > 8 && Io <= 11), zh = 32, vp = String.fromCharCode(zh);
    function jh() {
      Dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Dn("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Dn("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Dn("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ys = !1;
    function gf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Uh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function hp(e, t) {
      return e === "keydown" && t.keyCode === Vs;
    }
    function Ih(e, t) {
      switch (e) {
        case "keyup":
          return Uo.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Vs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function mp(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Sf(e) {
      return e.locale === "ko";
    }
    var ru = !1;
    function yp(e, t, a, i, o) {
      var s, f;
      if (Bs ? s = Uh(t) : ru ? Ih(t, i) && (s = "onCompositionEnd") : hp(t, i) && (s = "onCompositionStart"), !s)
        return null;
      yf && !Sf(i) && (!ru && s === "onCompositionStart" ? ru = Yu(o) : s === "onCompositionEnd" && ru && (f = zl()));
      var p = Bh(a, s);
      if (p.length > 0) {
        var m = new fp(s, t, null, i, o);
        if (e.push({
          event: m,
          listeners: p
        }), f)
          m.data = f;
        else {
          var C = mp(i);
          C !== null && (m.data = C);
        }
      }
    }
    function Ef(e, t) {
      switch (e) {
        case "compositionend":
          return mp(t);
        case "keypress":
          var a = t.which;
          return a !== zh ? null : (Ys = !0, vp);
        case "textInput":
          var i = t.data;
          return i === vp && Ys ? null : i;
        default:
          return null;
      }
    }
    function Fh(e, t) {
      if (ru) {
        if (e === "compositionend" || !Bs && Ih(e, t)) {
          var a = zl();
          return ff(), ru = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!gf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return yf && !Sf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function tg(e, t, a, i, o) {
      var s;
      if (eg ? s = Ef(t, i) : s = Fh(t, i), !s)
        return null;
      var f = Bh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new jo("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Cf(e, t, a, i, o, s, f) {
      yp(e, t, a, i, o), tg(e, t, a, i, o);
    }
    var ng = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Fl(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!ng[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function rg(e) {
      if (!Jt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Tf() {
      Dn("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      Rc(i);
      var o = Bh(t, "onChange");
      if (o.length > 0) {
        var s = new Ar("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: o
        });
      }
    }
    var r = null, u = null;
    function l(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, u, e, wc(e)), bd(d, t);
    }
    function d(e) {
      OE(e, 0);
    }
    function S(e) {
      var t = Mf(e);
      if (ll(t))
        return e;
    }
    function w(e, t) {
      if (e === "change")
        return t;
    }
    var D = !1;
    Jt && (D = rg("input") && (!document.documentMode || document.documentMode > 9));
    function Y(e, t) {
      r = e, u = t, r.attachEvent("onpropertychange", oe);
    }
    function ie() {
      r && (r.detachEvent("onpropertychange", oe), r = null, u = null);
    }
    function oe(e) {
      e.propertyName === "value" && S(u) && c(e);
    }
    function ae(e, t, a) {
      e === "focusin" ? (ie(), Y(t, a)) : e === "focusout" && ie();
    }
    function De(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return S(u);
    }
    function Ue(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function He(e, t) {
      if (e === "click")
        return S(t);
    }
    function Hn(e, t) {
      if (e === "input" || e === "change")
        return S(t);
    }
    function z(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Je(e, "number", e.value);
    }
    function _(e, t, a, i, o, s, f) {
      var p = a ? Mf(a) : window, m, C;
      if (l(p) ? m = w : Fl(p) ? D ? m = Hn : (m = De, C = ae) : Ue(p) && (m = He), m) {
        var T = m(t, a);
        if (T) {
          n(e, T, i, o);
          return;
        }
      }
      C && C(t, p, a), t === "focusout" && z(p);
    }
    function I() {
      qn("onMouseEnter", ["mouseout", "mouseover"]), qn("onMouseLeave", ["mouseout", "mouseover"]), qn("onPointerEnter", ["pointerout", "pointerover"]), qn("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function de(e, t, a, i, o, s, f) {
      var p = t === "mouseover" || t === "pointerover", m = t === "mouseout" || t === "pointerout";
      if (p && !nh(i)) {
        var C = i.relatedTarget || i.fromElement;
        if (C && (Ws(C) || _p(C)))
          return;
      }
      if (!(!m && !p)) {
        var T;
        if (o.window === o)
          T = o;
        else {
          var k = o.ownerDocument;
          k ? T = k.defaultView || k.parentWindow : T = window;
        }
        var O, P;
        if (m) {
          var B = i.relatedTarget || i.toElement;
          if (O = a, P = B ? Ws(B) : null, P !== null) {
            var G = Ca(P);
            (P !== G || P.tag !== J && P.tag !== ve) && (P = null);
          }
        } else
          O = null, P = a;
        if (O !== P) {
          var Le = $u, Xe = "onMouseLeave", Ye = "onMouseEnter", Ft = "mouse";
          (t === "pointerout" || t === "pointerover") && (Le = dp, Xe = "onPointerLeave", Ye = "onPointerEnter", Ft = "pointer");
          var At = O == null ? T : Mf(O), j = P == null ? T : Mf(P), q = new Le(Xe, Ft + "leave", O, i, o);
          q.target = At, q.relatedTarget = j;
          var U = null, se = Ws(o);
          if (se === a) {
            var Ae = new Le(Ye, Ft + "enter", P, i, o);
            Ae.target = j, Ae.relatedTarget = At, U = Ae;
          }
          pR(e, q, U, O, P);
        }
      }
    }
    function Ve(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ie = typeof Object.is == "function" ? Object.is : Ve;
    function Qe(e, t) {
      if (Ie(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!Mn.call(t, s) || !Ie(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function dt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function pr(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function $t(e, t) {
      for (var a = dt(e), i = 0, o = 0; a; ) {
        if (a.nodeType === Yi) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = dt(pr(a));
      }
    }
    function Wu(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        o.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return ag(e, o, s, f, p);
    }
    function ag(e, t, a, i, o) {
      var s = 0, f = -1, p = -1, m = 0, C = 0, T = e, k = null;
      e:
        for (; ; ) {
          for (var O = null; T === t && (a === 0 || T.nodeType === Yi) && (f = s + a), T === i && (o === 0 || T.nodeType === Yi) && (p = s + o), T.nodeType === Yi && (s += T.nodeValue.length), (O = T.firstChild) !== null; )
            k = T, T = O;
          for (; ; ) {
            if (T === e)
              break e;
            if (k === t && ++m === a && (f = s), k === i && ++C === o && (p = s), (O = T.nextSibling) !== null)
              break;
            T = k, k = T.parentNode;
          }
          T = O;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Gw(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!o.extend && f > p) {
          var m = p;
          p = f, f = m;
        }
        var C = $t(e, f), T = $t(e, p);
        if (C && T) {
          if (o.rangeCount === 1 && o.anchorNode === C.node && o.anchorOffset === C.offset && o.focusNode === T.node && o.focusOffset === T.offset)
            return;
          var k = a.createRange();
          k.setStart(C.node, C.offset), o.removeAllRanges(), f > p ? (o.addRange(k), o.extend(T.node, T.offset)) : (k.setEnd(T.node, T.offset), o.addRange(k));
        }
      }
    }
    function yE(e) {
      return e && e.nodeType === Yi;
    }
    function gE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : yE(e) ? !1 : yE(t) ? gE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function qw(e) {
      return e && e.ownerDocument && gE(e.ownerDocument.documentElement, e);
    }
    function Xw(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function SE() {
      for (var e = window, t = xu(); t instanceof e.HTMLIFrameElement; ) {
        if (Xw(t))
          e = t.contentWindow;
        else
          return t;
        t = xu(e.document);
      }
      return t;
    }
    function ig(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Kw() {
      var e = SE();
      return {
        focusedElem: e,
        selectionRange: ig(e) ? Jw(e) : null
      };
    }
    function Zw(e) {
      var t = SE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && qw(a)) {
        i !== null && ig(a) && eR(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === ea && o.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < o.length; f++) {
          var p = o[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function Jw(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Wu(e), t || {
        start: 0,
        end: 0
      };
    }
    function eR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Gw(e, t);
    }
    var tR = Jt && "documentMode" in document && document.documentMode <= 11;
    function nR() {
      Dn("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var wf = null, ug = null, gp = null, og = !1;
    function rR(e) {
      if ("selectionStart" in e && ig(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function aR(e) {
      return e.window === e ? e.document : e.nodeType === ui ? e : e.ownerDocument;
    }
    function EE(e, t, a) {
      var i = aR(a);
      if (!(og || wf == null || wf !== xu(i))) {
        var o = rR(wf);
        if (!gp || !Qe(gp, o)) {
          gp = o;
          var s = Bh(ug, "onSelect");
          if (s.length > 0) {
            var f = new Ar("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = wf;
          }
        }
      }
    }
    function iR(e, t, a, i, o, s, f) {
      var p = a ? Mf(a) : window;
      switch (t) {
        case "focusin":
          (Fl(p) || p.contentEditable === "true") && (wf = p, ug = a, gp = null);
          break;
        case "focusout":
          wf = null, ug = null, gp = null;
          break;
        case "mousedown":
          og = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          og = !1, EE(e, i, o);
          break;
        case "selectionchange":
          if (tR)
            break;
        case "keydown":
        case "keyup":
          EE(e, i, o);
      }
    }
    function Hh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Rf = {
      animationend: Hh("Animation", "AnimationEnd"),
      animationiteration: Hh("Animation", "AnimationIteration"),
      animationstart: Hh("Animation", "AnimationStart"),
      transitionend: Hh("Transition", "TransitionEnd")
    }, lg = {}, CE = {};
    Jt && (CE = document.createElement("div").style, "AnimationEvent" in window || (delete Rf.animationend.animation, delete Rf.animationiteration.animation, delete Rf.animationstart.animation), "TransitionEvent" in window || delete Rf.transitionend.transition);
    function Ph(e) {
      if (lg[e])
        return lg[e];
      if (!Rf[e])
        return e;
      var t = Rf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in CE)
          return lg[e] = t[a];
      return e;
    }
    var TE = Ph("animationend"), wE = Ph("animationiteration"), RE = Ph("animationstart"), bE = Ph("transitionend"), xE = /* @__PURE__ */ new Map(), DE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Hl(e, t) {
      xE.set(e, t), Dn(t, [e]);
    }
    function uR() {
      for (var e = 0; e < DE.length; e++) {
        var t = DE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Hl(a, "on" + i);
      }
      Hl(TE, "onAnimationEnd"), Hl(wE, "onAnimationIteration"), Hl(RE, "onAnimationStart"), Hl("dblclick", "onDoubleClick"), Hl("focusin", "onFocus"), Hl("focusout", "onBlur"), Hl(bE, "onTransitionEnd");
    }
    function oR(e, t, a, i, o, s, f) {
      var p = xE.get(t);
      if (p !== void 0) {
        var m = Ar, C = t;
        switch (t) {
          case "keypress":
            if (Lo(i) === 0)
              return;
          case "keydown":
          case "keyup":
            m = Ky;
            break;
          case "focusin":
            C = "focus", m = pf;
            break;
          case "focusout":
            C = "blur", m = pf;
            break;
          case "beforeblur":
          case "afterblur":
            m = pf;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = $u;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = zo;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = Qa;
            break;
          case TE:
          case wE:
          case RE:
            m = vf;
            break;
          case bE:
            m = Jy;
            break;
          case "scroll":
            m = op;
            break;
          case "wheel":
            m = mf;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Wy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = dp;
            break;
        }
        var T = (s & po) !== 0;
        {
          var k = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", O = fR(a, p, i.type, T, k);
          if (O.length > 0) {
            var P = new m(p, C, null, i, o);
            e.push({
              event: P,
              listeners: O
            });
          }
        }
      }
    }
    uR(), I(), Tf(), nR(), jh();
    function lR(e, t, a, i, o, s, f) {
      oR(e, t, a, i, o, s);
      var p = (s & Ay) === 0;
      p && (de(e, t, a, i, o), _(e, t, a, i, o), iR(e, t, a, i, o), Cf(e, t, a, i, o));
    }
    var Sp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], sg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Sp));
    function ME(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Gi(i, t, void 0, e), e.currentTarget = null;
    }
    function sR(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], f = s.instance, p = s.currentTarget, m = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          ME(e, m, p), i = f;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var T = t[C], k = T.instance, O = T.currentTarget, P = T.listener;
          if (k !== i && e.isPropagationStopped())
            return;
          ME(e, P, O), i = k;
        }
    }
    function OE(e, t) {
      for (var a = (t & po) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, f = o.listeners;
        sR(s, f, a);
      }
      Od();
    }
    function cR(e, t, a, i, o) {
      var s = wc(a), f = [];
      lR(f, e, i, a, s, t), OE(f, t);
    }
    function Ln(e, t) {
      sg.has(e) || E('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Hb(t), o = vR(e, a);
      i.has(o) || (NE(t, e, hs, a), i.add(o));
    }
    function cg(e, t, a) {
      sg.has(e) && !t && E('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= po), NE(a, e, i, t);
    }
    var Vh = "_reactListening" + Math.random().toString(36).slice(2);
    function Ep(e) {
      if (!e[Vh]) {
        e[Vh] = !0, ot.forEach(function(a) {
          a !== "selectionchange" && (sg.has(a) || cg(a, !1, e), cg(a, !0, e));
        });
        var t = e.nodeType === ui ? e : e.ownerDocument;
        t !== null && (t[Vh] || (t[Vh] = !0, cg("selectionchange", !1, t)));
      }
    }
    function NE(e, t, a, i, o) {
      var s = kl(e, t, a), f = void 0;
      Es && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? nu(e, t, s, f) : Al(e, t, s) : f !== void 0 ? cf(e, t, s, f) : up(e, t, s);
    }
    function _E(e, t) {
      return e === t || e.nodeType === $n && e.parentNode === t;
    }
    function fg(e, t, a, i, o) {
      var s = i;
      if (!(t & Qi) && !(t & hs)) {
        var f = o;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var m = p.tag;
              if (m === te || m === le) {
                var C = p.stateNode.containerInfo;
                if (_E(C, f))
                  break;
                if (m === le)
                  for (var T = p.return; T !== null; ) {
                    var k = T.tag;
                    if (k === te || k === le) {
                      var O = T.stateNode.containerInfo;
                      if (_E(O, f))
                        return;
                    }
                    T = T.return;
                  }
                for (; C !== null; ) {
                  var P = Ws(C);
                  if (P === null)
                    return;
                  var B = P.tag;
                  if (B === J || B === ve) {
                    p = s = P;
                    continue e;
                  }
                  C = C.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      bd(function() {
        return cR(e, t, a, s);
      });
    }
    function Cp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function fR(e, t, a, i, o, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, m = [], C = e, T = null; C !== null; ) {
        var k = C, O = k.stateNode, P = k.tag;
        if (P === J && O !== null && (T = O, p !== null)) {
          var B = ho(C, p);
          B != null && m.push(Cp(C, B, T));
        }
        if (o)
          break;
        C = C.return;
      }
      return m;
    }
    function Bh(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, f = s.stateNode, p = s.tag;
        if (p === J && f !== null) {
          var m = f, C = ho(o, a);
          C != null && i.unshift(Cp(o, C, m));
          var T = ho(o, t);
          T != null && i.push(Cp(o, T, m));
        }
        o = o.return;
      }
      return i;
    }
    function bf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== J);
      return e || null;
    }
    function dR(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = bf(s))
        o++;
      for (var f = 0, p = i; p; p = bf(p))
        f++;
      for (; o - f > 0; )
        a = bf(a), o--;
      for (; f - o > 0; )
        i = bf(i), f--;
      for (var m = o; m--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = bf(a), i = bf(i);
      }
      return null;
    }
    function kE(e, t, a, i, o) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var m = p, C = m.alternate, T = m.stateNode, k = m.tag;
        if (C !== null && C === i)
          break;
        if (k === J && T !== null) {
          var O = T;
          if (o) {
            var P = ho(p, s);
            P != null && f.unshift(Cp(p, P, O));
          } else if (!o) {
            var B = ho(p, s);
            B != null && f.push(Cp(p, B, O));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function pR(e, t, a, i, o) {
      var s = i && o ? dR(i, o) : null;
      i !== null && kE(e, t, i, s, !1), o !== null && a !== null && kE(e, a, o, s, !0);
    }
    function vR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Wa = !1, Tp = "dangerouslySetInnerHTML", Yh = "suppressContentEditableWarning", Pl = "suppressHydrationWarning", LE = "autoFocus", $s = "children", Qs = "style", $h = "__html", dg, Qh, wp, AE, Wh, zE, jE;
    dg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Qh = function(e, t) {
      Tc(e, t), Ed(e, t), th(e, t, {
        registrationNameDependencies: _t,
        possibleRegistrationNames: xn
      });
    }, zE = Jt && !document.documentMode, wp = function(e, t, a) {
      if (!Wa) {
        var i = Gh(a), o = Gh(t);
        o !== i && (Wa = !0, E("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, AE = function(e) {
      if (!Wa) {
        Wa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), E("Extra attributes from the server: %s", t);
      }
    }, Wh = function(e, t) {
      t === !1 ? E("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : E("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, jE = function(e, t) {
      var a = e.namespaceURI === Bi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var hR = /\r\n?/g, mR = /\u0000|\uFFFD/g;
    function Gh(e) {
      Vn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(hR, `
`).replace(mR, "");
    }
    function qh(e, t, a, i) {
      var o = Gh(t), s = Gh(e);
      if (s !== o && (i && (Wa || (Wa = !0, E('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && ye))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function UE(e) {
      return e.nodeType === ui ? e : e.ownerDocument;
    }
    function yR() {
    }
    function Xh(e) {
      e.onclick = yR;
    }
    function gR(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Qs)
            f && Object.freeze(f), $v(t, f);
          else if (s === Tp) {
            var p = f ? f[$h] : void 0;
            p != null && Av(t, p);
          } else if (s === $s)
            if (typeof f == "string") {
              var m = e !== "textarea" || f !== "";
              m && gc(t, f);
            } else
              typeof f == "number" && gc(t, "" + f);
          else
            s === Yh || s === Pl || s === LE || (_t.hasOwnProperty(s) ? f != null && (typeof f != "function" && Wh(s, f), s === "onScroll" && Ln("scroll", t)) : f != null && ga(t, s, f, o));
        }
    }
    function SR(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], f = t[o + 1];
        s === Qs ? $v(e, f) : s === Tp ? Av(e, f) : s === $s ? gc(e, f) : ga(e, s, f, i);
      }
    }
    function ER(e, t, a, i) {
      var o, s = UE(a), f, p = i;
      if (p === Bi && (p = mc(e)), p === Bi) {
        if (o = $i(e, t), !o && e !== e.toLowerCase() && E("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var m = s.createElement("div");
          m.innerHTML = "<script><\/script>";
          var C = m.firstChild;
          f = m.removeChild(C);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var T = f;
          t.multiple ? T.multiple = !0 : t.size && (T.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Bi && !o && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Mn.call(dg, e) && (dg[e] = !0, E("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function CR(e, t) {
      return UE(t).createTextNode(e);
    }
    function TR(e, t, a, i) {
      var o = $i(t, a);
      Qh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Ln("cancel", e), Ln("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Ln("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Sp.length; f++)
            Ln(Sp[f], e);
          s = a;
          break;
        case "source":
          Ln("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Ln("error", e), Ln("load", e), s = a;
          break;
        case "details":
          Ln("toggle", e), s = a;
          break;
        case "input":
          R(e, a), s = g(e, a), Ln("invalid", e);
          break;
        case "option":
          en(e, a), s = a;
          break;
        case "select":
          fs(e, a), s = cs(e, a), Ln("invalid", e);
          break;
        case "textarea":
          _v(e, a), s = fd(e, a), Ln("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Ec(t, s), gR(t, e, i, s, o), t) {
        case "input":
          Aa(e), fe(e, a, !1);
          break;
        case "textarea":
          Aa(e), Lv(e);
          break;
        case "option":
          sn(e, a);
          break;
        case "select":
          sd(e, a);
          break;
        default:
          typeof s.onClick == "function" && Xh(e);
          break;
      }
    }
    function wR(e, t, a, i, o) {
      Qh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = g(e, a), p = g(e, i), s = [];
          break;
        case "select":
          f = cs(e, a), p = cs(e, i), s = [];
          break;
        case "textarea":
          f = fd(e, a), p = fd(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Xh(e);
          break;
      }
      Ec(t, p);
      var m, C, T = null;
      for (m in f)
        if (!(p.hasOwnProperty(m) || !f.hasOwnProperty(m) || f[m] == null))
          if (m === Qs) {
            var k = f[m];
            for (C in k)
              k.hasOwnProperty(C) && (T || (T = {}), T[C] = "");
          } else
            m === Tp || m === $s || m === Yh || m === Pl || m === LE || (_t.hasOwnProperty(m) ? s || (s = []) : (s = s || []).push(m, null));
      for (m in p) {
        var O = p[m], P = f != null ? f[m] : void 0;
        if (!(!p.hasOwnProperty(m) || O === P || O == null && P == null))
          if (m === Qs)
            if (O && Object.freeze(O), P) {
              for (C in P)
                P.hasOwnProperty(C) && (!O || !O.hasOwnProperty(C)) && (T || (T = {}), T[C] = "");
              for (C in O)
                O.hasOwnProperty(C) && P[C] !== O[C] && (T || (T = {}), T[C] = O[C]);
            } else
              T || (s || (s = []), s.push(m, T)), T = O;
          else if (m === Tp) {
            var B = O ? O[$h] : void 0, G = P ? P[$h] : void 0;
            B != null && G !== B && (s = s || []).push(m, B);
          } else
            m === $s ? (typeof O == "string" || typeof O == "number") && (s = s || []).push(m, "" + O) : m === Yh || m === Pl || (_t.hasOwnProperty(m) ? (O != null && (typeof O != "function" && Wh(m, O), m === "onScroll" && Ln("scroll", e)), !s && P !== O && (s = [])) : (s = s || []).push(m, O));
      }
      return T && (ps(T, p[Qs]), (s = s || []).push(Qs, T)), s;
    }
    function RR(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && V(e, o);
      var s = $i(a, i), f = $i(a, o);
      switch (SR(e, t, s, f), a) {
        case "input":
          $(e, o);
          break;
        case "textarea":
          kv(e, o);
          break;
        case "select":
          Ry(e, o);
          break;
      }
    }
    function bR(e) {
      {
        var t = e.toLowerCase();
        return Cc.hasOwnProperty(t) && Cc[t] || null;
      }
    }
    function xR(e, t, a, i, o, s, f) {
      var p, m;
      switch (p = $i(t, a), Qh(t, a), t) {
        case "dialog":
          Ln("cancel", e), Ln("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Ln("load", e);
          break;
        case "video":
        case "audio":
          for (var C = 0; C < Sp.length; C++)
            Ln(Sp[C], e);
          break;
        case "source":
          Ln("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Ln("error", e), Ln("load", e);
          break;
        case "details":
          Ln("toggle", e);
          break;
        case "input":
          R(e, a), Ln("invalid", e);
          break;
        case "option":
          en(e, a);
          break;
        case "select":
          fs(e, a), Ln("invalid", e);
          break;
        case "textarea":
          _v(e, a), Ln("invalid", e);
          break;
      }
      Ec(t, a);
      {
        m = /* @__PURE__ */ new Set();
        for (var T = e.attributes, k = 0; k < T.length; k++) {
          var O = T[k].name.toLowerCase();
          switch (O) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              m.add(T[k].name);
          }
        }
      }
      var P = null;
      for (var B in a)
        if (a.hasOwnProperty(B)) {
          var G = a[B];
          if (B === $s)
            typeof G == "string" ? e.textContent !== G && (a[Pl] !== !0 && qh(e.textContent, G, s, f), P = [$s, G]) : typeof G == "number" && e.textContent !== "" + G && (a[Pl] !== !0 && qh(e.textContent, G, s, f), P = [$s, "" + G]);
          else if (_t.hasOwnProperty(B))
            G != null && (typeof G != "function" && Wh(B, G), B === "onScroll" && Ln("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var Le = void 0, Xe = p && We ? null : rn(B);
            if (a[Pl] !== !0) {
              if (!(B === Yh || B === Pl || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              B === "value" || B === "checked" || B === "selected")) {
                if (B === Tp) {
                  var Ye = e.innerHTML, Ft = G ? G[$h] : void 0;
                  if (Ft != null) {
                    var At = jE(e, Ft);
                    At !== Ye && wp(B, Ye, At);
                  }
                } else if (B === Qs) {
                  if (m.delete(B), zE) {
                    var j = ky(G);
                    Le = e.getAttribute("style"), j !== Le && wp(B, Le, j);
                  }
                } else if (p && !We)
                  m.delete(B.toLowerCase()), Le = mi(e, B, G), G !== Le && wp(B, Le, G);
                else if (!Ze(B, Xe, p) && !gt(B, G, Xe, p)) {
                  var q = !1;
                  if (Xe !== null)
                    m.delete(Xe.attributeName), Le = ya(e, B, G, Xe);
                  else {
                    var U = i;
                    if (U === Bi && (U = mc(t)), U === Bi)
                      m.delete(B.toLowerCase());
                    else {
                      var se = bR(B);
                      se !== null && se !== B && (q = !0, m.delete(se)), m.delete(B);
                    }
                    Le = mi(e, B, G);
                  }
                  var Ae = We;
                  !Ae && G !== Le && !q && wp(B, Le, G);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      m.size > 0 && a[Pl] !== !0 && AE(m), t) {
        case "input":
          Aa(e), fe(e, a, !0);
          break;
        case "textarea":
          Aa(e), Lv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Xh(e);
          break;
      }
      return P;
    }
    function DR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function pg(e, t) {
      {
        if (Wa)
          return;
        Wa = !0, E("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function vg(e, t) {
      {
        if (Wa)
          return;
        Wa = !0, E('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function hg(e, t, a) {
      {
        if (Wa)
          return;
        Wa = !0, E("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function mg(e, t) {
      {
        if (t === "" || Wa)
          return;
        Wa = !0, E('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function MR(e, t, a) {
      switch (t) {
        case "input":
          nt(e, a);
          return;
        case "textarea":
          dd(e, a);
          return;
        case "select":
          by(e, a);
          return;
      }
    }
    var Rp = function() {
    }, bp = function() {
    };
    {
      var OR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], IE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], NR = IE.concat(["button"]), _R = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], FE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      bp = function(e, t) {
        var a = Mt({}, e || FE), i = {
          tag: t
        };
        return IE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), NR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), OR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var kR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return _R.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, LR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, HE = {};
      Rp = function(e, t, a) {
        a = a || FE;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && E("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = kR(e, o) ? null : i, f = s ? null : LR(e, a), p = s || f;
        if (p) {
          var m = p.tag, C = !!s + "|" + e + "|" + m;
          if (!HE[C]) {
            HE[C] = !0;
            var T = e, k = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", k = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", s) {
              var O = "";
              m === "table" && e === "tr" && (O += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), E("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, m, k, O);
            } else
              E("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, m);
          }
        }
      };
    }
    var Kh = "suppressHydrationWarning", Zh = "$", Jh = "/$", xp = "$?", Dp = "$!", AR = "style", yg = null, gg = null;
    function zR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ui:
        case co: {
          t = i === ui ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : vd(null, "");
          break;
        }
        default: {
          var s = i === $n ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = vd(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), m = bp(null, p);
        return {
          namespace: a,
          ancestorInfo: m
        };
      }
    }
    function jR(e, t, a) {
      {
        var i = e, o = vd(i.namespace, t), s = bp(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function D_(e) {
      return e;
    }
    function UR(e) {
      yg = ba(), gg = Kw();
      var t = null;
      return dr(!1), t;
    }
    function IR(e) {
      Zw(gg), dr(yg), yg = null, gg = null;
    }
    function FR(e, t, a, i, o) {
      var s;
      {
        var f = i;
        if (Rp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, m = bp(f.ancestorInfo, e);
          Rp(null, p, m);
        }
        s = f.namespace;
      }
      var C = ER(e, t, a, s);
      return Np(o, C), xg(C, t), C;
    }
    function HR(e, t) {
      e.appendChild(t);
    }
    function PR(e, t, a, i, o) {
      switch (TR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function VR(e, t, a, i, o, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, m = bp(f.ancestorInfo, t);
          Rp(null, p, m);
        }
      }
      return wR(e, t, a, i);
    }
    function Sg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function BR(e, t, a, i) {
      {
        var o = a;
        Rp(null, e, o.ancestorInfo);
      }
      var s = CR(e, t);
      return Np(i, s), s;
    }
    function YR() {
      var e = window.event;
      return e === void 0 ? Ji : Hr(e.type);
    }
    var Eg = typeof setTimeout == "function" ? setTimeout : void 0, $R = typeof clearTimeout == "function" ? clearTimeout : void 0, Cg = -1, PE = typeof Promise == "function" ? Promise : void 0, QR = typeof queueMicrotask == "function" ? queueMicrotask : typeof PE < "u" ? function(e) {
      return PE.resolve(null).then(e).catch(WR);
    } : Eg;
    function WR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function GR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function qR(e, t, a, i, o, s) {
      RR(e, t, a, i, o), xg(e, o);
    }
    function VE(e) {
      gc(e, "");
    }
    function XR(e, t, a) {
      e.nodeValue = a;
    }
    function KR(e, t) {
      e.appendChild(t);
    }
    function ZR(e, t) {
      var a;
      e.nodeType === $n ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Xh(a);
    }
    function JR(e, t, a) {
      e.insertBefore(t, a);
    }
    function eb(e, t, a) {
      e.nodeType === $n ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function tb(e, t) {
      e.removeChild(t);
    }
    function nb(e, t) {
      e.nodeType === $n ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Tg(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === $n) {
          var s = o.data;
          if (s === Jh)
            if (i === 0) {
              e.removeChild(o), Lt(t);
              return;
            } else
              i--;
          else
            (s === Zh || s === xp || s === Dp) && i++;
        }
        a = o;
      } while (a);
      Lt(t);
    }
    function rb(e, t) {
      e.nodeType === $n ? Tg(e.parentNode, t) : e.nodeType === ea && Tg(e, t), Lt(e);
    }
    function ab(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function ib(e) {
      e.nodeValue = "";
    }
    function ub(e, t) {
      e = e;
      var a = t[AR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Sc("display", i);
    }
    function ob(e, t) {
      e.nodeValue = t;
    }
    function lb(e) {
      e.nodeType === ea ? e.textContent = "" : e.nodeType === ui && e.documentElement && e.removeChild(e.documentElement);
    }
    function sb(e, t, a) {
      return e.nodeType !== ea || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function cb(e, t) {
      return t === "" || e.nodeType !== Yi ? null : e;
    }
    function fb(e) {
      return e.nodeType !== $n ? null : e;
    }
    function BE(e) {
      return e.data === xp;
    }
    function wg(e) {
      return e.data === Dp;
    }
    function db(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function pb(e, t) {
      e._reactRetry = t;
    }
    function em(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ea || t === Yi)
          break;
        if (t === $n) {
          var a = e.data;
          if (a === Zh || a === Dp || a === xp)
            break;
          if (a === Jh)
            return null;
        }
      }
      return e;
    }
    function Mp(e) {
      return em(e.nextSibling);
    }
    function vb(e) {
      return em(e.firstChild);
    }
    function hb(e) {
      return em(e.firstChild);
    }
    function mb(e) {
      return em(e.nextSibling);
    }
    function yb(e, t, a, i, o, s, f) {
      Np(s, e), xg(e, a);
      var p;
      {
        var m = o;
        p = m.namespace;
      }
      var C = (s.mode & Nt) !== et;
      return xR(e, t, a, p, i, C, f);
    }
    function gb(e, t, a, i) {
      return Np(a, e), a.mode & Nt, DR(e, t);
    }
    function Sb(e, t) {
      Np(t, e);
    }
    function Eb(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === $n) {
          var i = t.data;
          if (i === Jh) {
            if (a === 0)
              return Mp(t);
            a--;
          } else
            (i === Zh || i === Dp || i === xp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function YE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === $n) {
          var i = t.data;
          if (i === Zh || i === Dp || i === xp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Jh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Cb(e) {
      Lt(e);
    }
    function Tb(e) {
      Lt(e);
    }
    function wb(e) {
      return e !== "head" && e !== "body";
    }
    function Rb(e, t, a, i) {
      var o = !0;
      qh(t.nodeValue, a, i, o);
    }
    function bb(e, t, a, i, o, s) {
      if (t[Kh] !== !0) {
        var f = !0;
        qh(i.nodeValue, o, s, f);
      }
    }
    function xb(e, t) {
      t.nodeType === ea ? pg(e, t) : t.nodeType === $n || vg(e, t);
    }
    function Db(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ea ? pg(a, t) : t.nodeType === $n || vg(a, t));
      }
    }
    function Mb(e, t, a, i, o) {
      (o || t[Kh] !== !0) && (i.nodeType === ea ? pg(a, i) : i.nodeType === $n || vg(a, i));
    }
    function Ob(e, t, a) {
      hg(e, t);
    }
    function Nb(e, t) {
      mg(e, t);
    }
    function _b(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && hg(i, t);
      }
    }
    function kb(e, t) {
      {
        var a = e.parentNode;
        a !== null && mg(a, t);
      }
    }
    function Lb(e, t, a, i, o, s) {
      (s || t[Kh] !== !0) && hg(a, i);
    }
    function Ab(e, t, a, i, o) {
      (o || t[Kh] !== !0) && mg(a, i);
    }
    function zb(e) {
      E("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function jb(e) {
      Ep(e);
    }
    var xf = Math.random().toString(36).slice(2), Df = "__reactFiber$" + xf, Rg = "__reactProps$" + xf, Op = "__reactContainer$" + xf, bg = "__reactEvents$" + xf, Ub = "__reactListeners$" + xf, Ib = "__reactHandles$" + xf;
    function Fb(e) {
      delete e[Df], delete e[Rg], delete e[bg], delete e[Ub], delete e[Ib];
    }
    function Np(e, t) {
      t[Df] = e;
    }
    function tm(e, t) {
      t[Op] = e;
    }
    function $E(e) {
      e[Op] = null;
    }
    function _p(e) {
      return !!e[Op];
    }
    function Ws(e) {
      var t = e[Df];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Op] || a[Df], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = YE(e); o !== null; ) {
              var s = o[Df];
              if (s)
                return s;
              o = YE(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Vl(e) {
      var t = e[Df] || e[Op];
      return t && (t.tag === J || t.tag === ve || t.tag === pe || t.tag === te) ? t : null;
    }
    function Mf(e) {
      if (e.tag === J || e.tag === ve)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function nm(e) {
      return e[Rg] || null;
    }
    function xg(e, t) {
      e[Rg] = t;
    }
    function Hb(e) {
      var t = e[bg];
      return t === void 0 && (t = e[bg] = /* @__PURE__ */ new Set()), t;
    }
    var QE = {}, WE = y.ReactDebugCurrentFrame;
    function rm(e) {
      if (e) {
        var t = e._owner, a = Ci(e.type, e._source, t ? t.type : null);
        WE.setExtraStackFrame(a);
      } else
        WE.setExtraStackFrame(null);
    }
    function au(e, t, a, i, o) {
      {
        var s = Function.call.bind(Mn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var m = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              p = C;
            }
            p && !(p instanceof Error) && (rm(o), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), rm(null)), p instanceof Error && !(p.message in QE) && (QE[p.message] = !0, rm(o), E("Failed %s type: %s", a, p.message), rm(null));
          }
      }
    }
    var Dg = [], am;
    am = [];
    var Fo = -1;
    function Bl(e) {
      return {
        current: e
      };
    }
    function sa(e, t) {
      if (Fo < 0) {
        E("Unexpected pop.");
        return;
      }
      t !== am[Fo] && E("Unexpected Fiber popped."), e.current = Dg[Fo], Dg[Fo] = null, am[Fo] = null, Fo--;
    }
    function ca(e, t, a) {
      Fo++, Dg[Fo] = e.current, am[Fo] = a, e.current = t;
    }
    var Mg;
    Mg = {};
    var fi = {};
    Object.freeze(fi);
    var Ho = Bl(fi), Gu = Bl(!1), Og = fi;
    function Of(e, t, a) {
      return a && qu(t) ? Og : Ho.current;
    }
    function GE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Nf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return fi;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = vt(e) || "Unknown";
          au(i, s, "context", p);
        }
        return o && GE(e, t, s), s;
      }
    }
    function im() {
      return Gu.current;
    }
    function qu(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function um(e) {
      sa(Gu, e), sa(Ho, e);
    }
    function Ng(e) {
      sa(Gu, e), sa(Ho, e);
    }
    function qE(e, t, a) {
      {
        if (Ho.current !== fi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ca(Ho, t, e), ca(Gu, a, e);
      }
    }
    function XE(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = vt(e) || "Unknown";
            Mg[s] || (Mg[s] = !0, E("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in o))
            throw new Error((vt(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var m = vt(e) || "Unknown";
          au(o, f, "child context", m);
        }
        return Mt({}, a, f);
      }
    }
    function om(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || fi;
        return Og = Ho.current, ca(Ho, a, e), ca(Gu, Gu.current, e), !0;
      }
    }
    function KE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = XE(e, t, Og);
          i.__reactInternalMemoizedMergedChildContext = o, sa(Gu, e), sa(Ho, e), ca(Ho, o, e), ca(Gu, a, e);
        } else
          sa(Gu, e), ca(Gu, a, e);
      }
    }
    function Pb(e) {
      {
        if (!Ad(e) || e.tag !== Q)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case te:
              return t.stateNode.context;
            case Q: {
              var a = t.type;
              if (qu(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Yl = 0, lm = 1, Po = null, _g = !1, kg = !1;
    function ZE(e) {
      Po === null ? Po = [e] : Po.push(e);
    }
    function Vb(e) {
      _g = !0, ZE(e);
    }
    function JE() {
      _g && $l();
    }
    function $l() {
      if (!kg && Po !== null) {
        kg = !0;
        var e = 0, t = Ba();
        try {
          var a = !0, i = Po;
          for (rr(Or); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          Po = null, _g = !1;
        } catch (s) {
          throw Po !== null && (Po = Po.slice(e + 1)), Nc(kc, $l), s;
        } finally {
          rr(t), kg = !1;
        }
      }
      return null;
    }
    var _f = [], kf = 0, sm = null, cm = 0, Ni = [], _i = 0, Gs = null, Vo = 1, Bo = "";
    function Bb(e) {
      return Xs(), (e.flags & _d) !== Ge;
    }
    function Yb(e) {
      return Xs(), cm;
    }
    function $b() {
      var e = Bo, t = Vo, a = t & ~Qb(t);
      return a.toString(32) + e;
    }
    function qs(e, t) {
      Xs(), _f[kf++] = cm, _f[kf++] = sm, sm = e, cm = t;
    }
    function eC(e, t, a) {
      Xs(), Ni[_i++] = Vo, Ni[_i++] = Bo, Ni[_i++] = Gs, Gs = e;
      var i = Vo, o = Bo, s = fm(i) - 1, f = i & ~(1 << s), p = a + 1, m = fm(t) + s;
      if (m > 30) {
        var C = s - s % 5, T = (1 << C) - 1, k = (f & T).toString(32), O = f >> C, P = s - C, B = fm(t) + P, G = p << P, Le = G | O, Xe = k + o;
        Vo = 1 << B | Le, Bo = Xe;
      } else {
        var Ye = p << s, Ft = Ye | f, At = o;
        Vo = 1 << m | Ft, Bo = At;
      }
    }
    function Lg(e) {
      Xs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        qs(e, a), eC(e, a, i);
      }
    }
    function fm(e) {
      return 32 - Ic(e);
    }
    function Qb(e) {
      return 1 << fm(e) - 1;
    }
    function Ag(e) {
      for (; e === sm; )
        sm = _f[--kf], _f[kf] = null, cm = _f[--kf], _f[kf] = null;
      for (; e === Gs; )
        Gs = Ni[--_i], Ni[_i] = null, Bo = Ni[--_i], Ni[_i] = null, Vo = Ni[--_i], Ni[_i] = null;
    }
    function Wb() {
      return Xs(), Gs !== null ? {
        id: Vo,
        overflow: Bo
      } : null;
    }
    function Gb(e, t) {
      Xs(), Ni[_i++] = Vo, Ni[_i++] = Bo, Ni[_i++] = Gs, Vo = t.id, Bo = t.overflow, Gs = e;
    }
    function Xs() {
      Vr() || E("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Pr = null, ki = null, iu = !1, Ks = !1, Ql = null;
    function qb() {
      iu && E("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function tC() {
      Ks = !0;
    }
    function Xb() {
      return Ks;
    }
    function Kb(e) {
      var t = e.stateNode.containerInfo;
      return ki = hb(t), Pr = e, iu = !0, Ql = null, Ks = !1, !0;
    }
    function Zb(e, t, a) {
      return ki = mb(t), Pr = e, iu = !0, Ql = null, Ks = !1, a !== null && Gb(e, a), !0;
    }
    function nC(e, t) {
      switch (e.tag) {
        case te: {
          xb(e.stateNode.containerInfo, t);
          break;
        }
        case J: {
          var a = (e.mode & Nt) !== et;
          Mb(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case pe: {
          var i = e.memoizedState;
          i.dehydrated !== null && Db(i.dehydrated, t);
          break;
        }
      }
    }
    function rC(e, t) {
      nC(e, t);
      var a = tO();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= qt) : i.push(a);
    }
    function zg(e, t) {
      {
        if (Ks)
          return;
        switch (e.tag) {
          case te: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case J:
                var i = t.type;
                t.pendingProps, Ob(a, i);
                break;
              case ve:
                var o = t.pendingProps;
                Nb(a, o);
                break;
            }
            break;
          }
          case J: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case J: {
                var m = t.type, C = t.pendingProps, T = (e.mode & Nt) !== et;
                Lb(
                  s,
                  f,
                  p,
                  m,
                  C,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case ve: {
                var k = t.pendingProps, O = (e.mode & Nt) !== et;
                Ab(
                  s,
                  f,
                  p,
                  k,
                  // TODO: Delete this argument when we remove the legacy root API.
                  O
                );
                break;
              }
            }
            break;
          }
          case pe: {
            var P = e.memoizedState, B = P.dehydrated;
            if (B !== null)
              switch (t.tag) {
                case J:
                  var G = t.type;
                  t.pendingProps, _b(B, G);
                  break;
                case ve:
                  var Le = t.pendingProps;
                  kb(B, Le);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function aC(e, t) {
      t.flags = t.flags & ~Ia | yn, zg(e, t);
    }
    function iC(e, t) {
      switch (e.tag) {
        case J: {
          var a = e.type;
          e.pendingProps;
          var i = sb(t, a);
          return i !== null ? (e.stateNode = i, Pr = e, ki = vb(i), !0) : !1;
        }
        case ve: {
          var o = e.pendingProps, s = cb(t, o);
          return s !== null ? (e.stateNode = s, Pr = e, ki = null, !0) : !1;
        }
        case pe: {
          var f = fb(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: Wb(),
              retryLane: oa
            };
            e.memoizedState = p;
            var m = nO(f);
            return m.return = e, e.child = m, Pr = e, ki = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function jg(e) {
      return (e.mode & Nt) !== et && (e.flags & ft) === Ge;
    }
    function Ug(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Ig(e) {
      if (iu) {
        var t = ki;
        if (!t) {
          jg(e) && (zg(Pr, e), Ug()), aC(Pr, e), iu = !1, Pr = e;
          return;
        }
        var a = t;
        if (!iC(e, t)) {
          jg(e) && (zg(Pr, e), Ug()), t = Mp(a);
          var i = Pr;
          if (!t || !iC(e, t)) {
            aC(Pr, e), iu = !1, Pr = e;
            return;
          }
          rC(i, a);
        }
      }
    }
    function Jb(e, t, a) {
      var i = e.stateNode, o = !Ks, s = yb(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function ex(e) {
      var t = e.stateNode, a = e.memoizedProps, i = gb(t, a, e);
      if (i) {
        var o = Pr;
        if (o !== null)
          switch (o.tag) {
            case te: {
              var s = o.stateNode.containerInfo, f = (o.mode & Nt) !== et;
              Rb(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case J: {
              var p = o.type, m = o.memoizedProps, C = o.stateNode, T = (o.mode & Nt) !== et;
              bb(
                p,
                m,
                C,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                T
              );
              break;
            }
          }
      }
      return i;
    }
    function tx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Sb(a, e);
    }
    function nx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Eb(a);
    }
    function uC(e) {
      for (var t = e.return; t !== null && t.tag !== J && t.tag !== te && t.tag !== pe; )
        t = t.return;
      Pr = t;
    }
    function dm(e) {
      if (e !== Pr)
        return !1;
      if (!iu)
        return uC(e), iu = !0, !1;
      if (e.tag !== te && (e.tag !== J || wb(e.type) && !Sg(e.type, e.memoizedProps))) {
        var t = ki;
        if (t)
          if (jg(e))
            oC(e), Ug();
          else
            for (; t; )
              rC(e, t), t = Mp(t);
      }
      return uC(e), e.tag === pe ? ki = nx(e) : ki = Pr ? Mp(e.stateNode) : null, !0;
    }
    function rx() {
      return iu && ki !== null;
    }
    function oC(e) {
      for (var t = ki; t; )
        nC(e, t), t = Mp(t);
    }
    function Lf() {
      Pr = null, ki = null, iu = !1, Ks = !1;
    }
    function lC() {
      Ql !== null && (n1(Ql), Ql = null);
    }
    function Vr() {
      return iu;
    }
    function Fg(e) {
      Ql === null ? Ql = [e] : Ql.push(e);
    }
    var ax = y.ReactCurrentBatchConfig, ix = null;
    function ux() {
      return ax.transition;
    }
    var uu = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var ox = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & _n && (t = a), a = a.return;
        return t;
      }, Zs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, kp = [], Lp = [], Ap = [], zp = [], jp = [], Up = [], Js = /* @__PURE__ */ new Set();
      uu.recordUnsafeLifecycleWarnings = function(e, t) {
        Js.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && kp.push(e), e.mode & _n && typeof t.UNSAFE_componentWillMount == "function" && Lp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ap.push(e), e.mode & _n && typeof t.UNSAFE_componentWillReceiveProps == "function" && zp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && jp.push(e), e.mode & _n && typeof t.UNSAFE_componentWillUpdate == "function" && Up.push(e));
      }, uu.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        kp.length > 0 && (kp.forEach(function(O) {
          e.add(vt(O) || "Component"), Js.add(O.type);
        }), kp = []);
        var t = /* @__PURE__ */ new Set();
        Lp.length > 0 && (Lp.forEach(function(O) {
          t.add(vt(O) || "Component"), Js.add(O.type);
        }), Lp = []);
        var a = /* @__PURE__ */ new Set();
        Ap.length > 0 && (Ap.forEach(function(O) {
          a.add(vt(O) || "Component"), Js.add(O.type);
        }), Ap = []);
        var i = /* @__PURE__ */ new Set();
        zp.length > 0 && (zp.forEach(function(O) {
          i.add(vt(O) || "Component"), Js.add(O.type);
        }), zp = []);
        var o = /* @__PURE__ */ new Set();
        jp.length > 0 && (jp.forEach(function(O) {
          o.add(vt(O) || "Component"), Js.add(O.type);
        }), jp = []);
        var s = /* @__PURE__ */ new Set();
        if (Up.length > 0 && (Up.forEach(function(O) {
          s.add(vt(O) || "Component"), Js.add(O.type);
        }), Up = []), t.size > 0) {
          var f = Zs(t);
          E(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Zs(i);
          E(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var m = Zs(s);
          E(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, m);
        }
        if (e.size > 0) {
          var C = Zs(e);
          H(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (a.size > 0) {
          var T = Zs(a);
          H(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (o.size > 0) {
          var k = Zs(o);
          H(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, k);
        }
      };
      var pm = /* @__PURE__ */ new Map(), sC = /* @__PURE__ */ new Set();
      uu.recordLegacyContextWarning = function(e, t) {
        var a = ox(e);
        if (a === null) {
          E("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!sC.has(e.type)) {
          var i = pm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], pm.set(a, i)), i.push(e));
        }
      }, uu.flushLegacyContextWarning = function() {
        pm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(vt(s) || "Component"), sC.add(s.type);
            });
            var o = Zs(i);
            try {
              Xt(a), E(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              zn();
            }
          }
        });
      }, uu.discardPendingWarnings = function() {
        kp = [], Lp = [], Ap = [], zp = [], jp = [], Up = [], pm = /* @__PURE__ */ new Map();
      };
    }
    function ou(e, t) {
      if (e && e.defaultProps) {
        var a = Mt({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var Hg = Bl(null), Pg;
    Pg = {};
    var vm = null, Af = null, Vg = null, hm = !1;
    function mm() {
      vm = null, Af = null, Vg = null, hm = !1;
    }
    function cC() {
      hm = !0;
    }
    function fC() {
      hm = !1;
    }
    function dC(e, t, a) {
      ca(Hg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Pg && E("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Pg;
    }
    function Bg(e, t) {
      var a = Hg.current;
      sa(Hg, t), e._currentValue = a;
    }
    function Yg(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (Mo(i.childLanes, t) ? o !== null && !Mo(o.childLanes, t) && (o.childLanes = xt(o.childLanes, t)) : (i.childLanes = xt(i.childLanes, t), o !== null && (o.childLanes = xt(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && E("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function lx(e, t, a) {
      sx(e, t, a);
    }
    function sx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === Q) {
                var p = nr(a), m = Yo(fn, p);
                m.tag = gm;
                var C = i.updateQueue;
                if (C !== null) {
                  var T = C.shared, k = T.pending;
                  k === null ? m.next = m : (m.next = k.next, k.next = m), T.pending = m;
                }
              }
              i.lanes = xt(i.lanes, a);
              var O = i.alternate;
              O !== null && (O.lanes = xt(O.lanes, a)), Yg(i.return, a, e), s.lanes = xt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ze)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === at) {
          var P = i.return;
          if (P === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          P.lanes = xt(P.lanes, a);
          var B = P.alternate;
          B !== null && (B.lanes = xt(B.lanes, a)), Yg(P, a, e), o = i.sibling;
        } else
          o = i.child;
        if (o !== null)
          o.return = i;
        else
          for (o = i; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            var G = o.sibling;
            if (G !== null) {
              G.return = o.return, o = G;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function zf(e, t) {
      vm = e, Af = null, Vg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (la(a.lanes, t) && Kp(), a.firstContext = null);
      }
    }
    function vr(e) {
      hm && E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Vg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Af === null) {
          if (vm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Af = a, vm.dependencies = {
            lanes: K,
            firstContext: a
          };
        } else
          Af = Af.next = a;
      }
      return t;
    }
    var ec = null;
    function $g(e) {
      ec === null ? ec = [e] : ec.push(e);
    }
    function cx() {
      if (ec !== null) {
        for (var e = 0; e < ec.length; e++) {
          var t = ec[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, o = t.pending;
            if (o !== null) {
              var s = o.next;
              o.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        ec = null;
      }
    }
    function pC(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, $g(t)) : (a.next = o.next, o.next = a), t.interleaved = a, ym(e, i);
    }
    function fx(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, $g(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function dx(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, $g(t)) : (a.next = o.next, o.next = a), t.interleaved = a, ym(e, i);
    }
    function Ga(e, t) {
      return ym(e, t);
    }
    var px = ym;
    function ym(e, t) {
      e.lanes = xt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = xt(a.lanes, t)), a === null && (e.flags & (yn | Ia)) !== Ge && v1(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = xt(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = xt(a.childLanes, t) : (o.flags & (yn | Ia)) !== Ge && v1(e), i = o, o = o.return;
      if (i.tag === te) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var vC = 0, hC = 1, gm = 2, Qg = 3, Sm = !1, Wg, Em;
    Wg = !1, Em = null;
    function Gg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: K
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function mC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var o = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = o;
      }
    }
    function Yo(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: vC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Wl(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (Em === o && !Wg && (E("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Wg = !0), pM()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, px(e, a);
      } else
        return dx(e, o, t, a);
    }
    function Cm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (Wd(a)) {
          var s = o.lanes;
          s = qd(s, e.pendingLanes);
          var f = xt(s, a);
          o.lanes = f, Dl(e, f);
        }
      }
    }
    function qg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var m = p;
            do {
              var C = {
                eventTime: m.eventTime,
                lane: m.lane,
                tag: m.tag,
                payload: m.payload,
                callback: m.callback,
                next: null
              };
              f === null ? s = f = C : (f.next = C, f = C), m = m.next;
            } while (m !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: o.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: o.shared,
            effects: o.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var T = a.lastBaseUpdate;
      T === null ? a.firstBaseUpdate = t : T.next = t, a.lastBaseUpdate = t;
    }
    function vx(e, t, a, i, o, s) {
      switch (a.tag) {
        case hC: {
          var f = a.payload;
          if (typeof f == "function") {
            cC();
            var p = f.call(s, i, o);
            {
              if (e.mode & _n) {
                tr(!0);
                try {
                  f.call(s, i, o);
                } finally {
                  tr(!1);
                }
              }
              fC();
            }
            return p;
          }
          return f;
        }
        case Qg:
          e.flags = e.flags & ~sr | ft;
        case vC: {
          var m = a.payload, C;
          if (typeof m == "function") {
            cC(), C = m.call(s, i, o);
            {
              if (e.mode & _n) {
                tr(!0);
                try {
                  m.call(s, i, o);
                } finally {
                  tr(!1);
                }
              }
              fC();
            }
          } else
            C = m;
          return C == null ? i : Mt({}, i, C);
        }
        case gm:
          return Sm = !0, i;
      }
      return i;
    }
    function Tm(e, t, a, i) {
      var o = e.updateQueue;
      Sm = !1, Em = o.shared;
      var s = o.firstBaseUpdate, f = o.lastBaseUpdate, p = o.shared.pending;
      if (p !== null) {
        o.shared.pending = null;
        var m = p, C = m.next;
        m.next = null, f === null ? s = C : f.next = C, f = m;
        var T = e.alternate;
        if (T !== null) {
          var k = T.updateQueue, O = k.lastBaseUpdate;
          O !== f && (O === null ? k.firstBaseUpdate = C : O.next = C, k.lastBaseUpdate = m);
        }
      }
      if (s !== null) {
        var P = o.baseState, B = K, G = null, Le = null, Xe = null, Ye = s;
        do {
          var Ft = Ye.lane, At = Ye.eventTime;
          if (Mo(i, Ft)) {
            if (Xe !== null) {
              var q = {
                eventTime: At,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ut,
                tag: Ye.tag,
                payload: Ye.payload,
                callback: Ye.callback,
                next: null
              };
              Xe = Xe.next = q;
            }
            P = vx(e, o, Ye, P, t, a);
            var U = Ye.callback;
            if (U !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ye.lane !== Ut) {
              e.flags |= Ri;
              var se = o.effects;
              se === null ? o.effects = [Ye] : se.push(Ye);
            }
          } else {
            var j = {
              eventTime: At,
              lane: Ft,
              tag: Ye.tag,
              payload: Ye.payload,
              callback: Ye.callback,
              next: null
            };
            Xe === null ? (Le = Xe = j, G = P) : Xe = Xe.next = j, B = xt(B, Ft);
          }
          if (Ye = Ye.next, Ye === null) {
            if (p = o.shared.pending, p === null)
              break;
            var Ae = p, be = Ae.next;
            Ae.next = null, Ye = be, o.lastBaseUpdate = Ae, o.shared.pending = null;
          }
        } while (!0);
        Xe === null && (G = P), o.baseState = G, o.firstBaseUpdate = Le, o.lastBaseUpdate = Xe;
        var ct = o.shared.interleaved;
        if (ct !== null) {
          var St = ct;
          do
            B = xt(B, St.lane), St = St.next;
          while (St !== ct);
        } else
          s === null && (o.shared.lanes = K);
        sv(B), e.lanes = B, e.memoizedState = P;
      }
      Em = null;
    }
    function hx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function yC() {
      Sm = !1;
    }
    function wm() {
      return Sm;
    }
    function gC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], f = s.callback;
          f !== null && (s.callback = null, hx(f, a));
        }
    }
    var Xg = {}, SC = new v.Component().refs, Kg, Zg, Jg, eS, tS, EC, Rm, nS, rS, aS;
    {
      Kg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set();
      var CC = /* @__PURE__ */ new Set();
      Rm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          CC.has(a) || (CC.add(a), E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, EC = function(e, t) {
        if (t === void 0) {
          var a = Vt(e) || "Component";
          tS.has(a) || (tS.add(a), E("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Xg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Xg);
    }
    function iS(e, t, a, i) {
      var o = e.memoizedState, s = a(i, o);
      {
        if (e.mode & _n) {
          tr(!0);
          try {
            s = a(i, o);
          } finally {
            tr(!1);
          }
        }
        EC(t, s);
      }
      var f = s == null ? o : Mt({}, o, s);
      if (e.memoizedState = f, e.lanes === K) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var uS = {
      isMounted: Ta,
      enqueueSetState: function(e, t, a) {
        var i = ja(e), o = Ma(), s = ts(i), f = Yo(o, s);
        f.payload = t, a != null && (Rm(a, "setState"), f.callback = a);
        var p = Wl(i, f, s);
        p !== null && (xr(p, i, s, o), Cm(p, i, s)), Fu(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ja(e), o = Ma(), s = ts(i), f = Yo(o, s);
        f.tag = hC, f.payload = t, a != null && (Rm(a, "replaceState"), f.callback = a);
        var p = Wl(i, f, s);
        p !== null && (xr(p, i, s, o), Cm(p, i, s)), Fu(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ja(e), i = Ma(), o = ts(a), s = Yo(i, o);
        s.tag = gm, t != null && (Rm(t, "forceUpdate"), s.callback = t);
        var f = Wl(a, s, o);
        f !== null && (xr(f, a, o, i), Cm(f, a, o)), Bd(a, o);
      }
    };
    function TC(e, t, a, i, o, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var m = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & _n) {
            tr(!0);
            try {
              m = p.shouldComponentUpdate(i, s, f);
            } finally {
              tr(!1);
            }
          }
          m === void 0 && E("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Vt(t) || "Component");
        }
        return m;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Qe(a, i) || !Qe(o, s) : !0;
    }
    function mx(e, t, a) {
      var i = e.stateNode;
      {
        var o = Vt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? E("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : E("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && E("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && E("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && E("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && E("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), i.contextTypes && E("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !rS.has(t) && (rS.add(t), E("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && E("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && E("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Vt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && E("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && E("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && E("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && E("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var f = i.props !== a;
        i.props !== void 0 && f && E("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && E("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Jg.has(t) && (Jg.add(t), E("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Vt(t))), typeof i.getDerivedStateFromProps == "function" && E("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && E("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && E("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var p = i.state;
        p && (typeof p != "object" || zt(p)) && E("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && E("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function wC(e, t) {
      t.updater = uS, e.stateNode = t, yl(t, e), t._reactInternalInstance = Xg;
    }
    function RC(e, t, a) {
      var i = !1, o = fi, s = fi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === ge && f._context === void 0
        );
        if (!p && !aS.has(t)) {
          aS.add(t);
          var m = "";
          f === void 0 ? m = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? m = " However, it is set to a " + typeof f + "." : f.$$typeof === re ? m = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? m = " Did you accidentally pass the Context.Consumer instead?" : m = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", E("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Vt(t) || "Component", m);
        }
      }
      if (typeof f == "object" && f !== null)
        s = vr(f);
      else {
        o = Of(e, t, !0);
        var C = t.contextTypes;
        i = C != null, s = i ? Nf(e, o) : fi;
      }
      var T = new t(a, s);
      if (e.mode & _n) {
        tr(!0);
        try {
          T = new t(a, s);
        } finally {
          tr(!1);
        }
      }
      var k = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      wC(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && k === null) {
          var O = Vt(t) || "Component";
          Zg.has(O) || (Zg.add(O), E("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", O, T.state === null ? "null" : "undefined", O));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var P = null, B = null, G = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? P = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (P = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? B = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (B = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? G = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (G = "UNSAFE_componentWillUpdate"), P !== null || B !== null || G !== null) {
            var Le = Vt(t) || "Component", Xe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            eS.has(Le) || (eS.add(Le), E(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Le, Xe, P !== null ? `
  ` + P : "", B !== null ? `
  ` + B : "", G !== null ? `
  ` + G : ""));
          }
        }
      }
      return i && GE(e, o, s), T;
    }
    function yx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (E("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", vt(e) || "Component"), uS.enqueueReplaceState(t, t.state, null));
    }
    function bC(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = vt(e) || "Component";
          Kg.has(s) || (Kg.add(s), E("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        uS.enqueueReplaceState(t, t.state, null);
      }
    }
    function oS(e, t, a, i) {
      mx(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = SC, Gg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = vr(s);
      else {
        var f = Of(e, t, !0);
        o.context = Nf(e, f);
      }
      {
        if (o.state === a) {
          var p = Vt(t) || "Component";
          nS.has(p) || (nS.add(p), E("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & _n && uu.recordLegacyContextWarning(e, o), uu.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var m = t.getDerivedStateFromProps;
      if (typeof m == "function" && (iS(e, t, m, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (yx(e, o), Tm(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var C = bt;
        C |= na, (e.mode & Pa) !== et && (C |= ra), e.flags |= C;
      }
    }
    function gx(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var f = o.context, p = t.contextType, m = fi;
      if (typeof p == "object" && p !== null)
        m = vr(p);
      else {
        var C = Of(e, t, !0);
        m = Nf(e, C);
      }
      var T = t.getDerivedStateFromProps, k = typeof T == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !k && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || f !== m) && bC(e, o, a, m), yC();
      var O = e.memoizedState, P = o.state = O;
      if (Tm(e, a, o, i), P = e.memoizedState, s === a && O === P && !im() && !wm()) {
        if (typeof o.componentDidMount == "function") {
          var B = bt;
          B |= na, (e.mode & Pa) !== et && (B |= ra), e.flags |= B;
        }
        return !1;
      }
      typeof T == "function" && (iS(e, t, T, a), P = e.memoizedState);
      var G = wm() || TC(e, t, s, a, O, P, m);
      if (G) {
        if (!k && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var Le = bt;
          Le |= na, (e.mode & Pa) !== et && (Le |= ra), e.flags |= Le;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var Xe = bt;
          Xe |= na, (e.mode & Pa) !== et && (Xe |= ra), e.flags |= Xe;
        }
        e.memoizedProps = a, e.memoizedState = P;
      }
      return o.props = a, o.state = P, o.context = m, G;
    }
    function Sx(e, t, a, i, o) {
      var s = t.stateNode;
      mC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ou(t.type, f);
      s.props = p;
      var m = t.pendingProps, C = s.context, T = a.contextType, k = fi;
      if (typeof T == "object" && T !== null)
        k = vr(T);
      else {
        var O = Of(t, a, !0);
        k = Nf(t, O);
      }
      var P = a.getDerivedStateFromProps, B = typeof P == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !B && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== m || C !== k) && bC(t, s, i, k), yC();
      var G = t.memoizedState, Le = s.state = G;
      if (Tm(t, i, s, o), Le = t.memoizedState, f === m && G === Le && !im() && !wm() && !Ne)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= bt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= Ua), !1;
      typeof P == "function" && (iS(t, a, P, i), Le = t.memoizedState);
      var Xe = wm() || TC(t, a, p, i, G, Le, k) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ne;
      return Xe ? (!B && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Le, k), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Le, k)), typeof s.componentDidUpdate == "function" && (t.flags |= bt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Ua)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= bt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= Ua), t.memoizedProps = i, t.memoizedState = Le), s.props = i, s.state = Le, s.context = k, Xe;
    }
    var lS, sS, cS, fS, dS, xC = function(e, t) {
    };
    lS = !1, sS = !1, cS = {}, fS = {}, dS = {}, xC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = vt(t) || "Component";
        fS[a] || (fS[a] = !0, E('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Ip(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & _n || Pe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var o = vt(e) || "Component";
          cS[o] || (E('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), cS[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== Q)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var m = f;
          tn(i, "ref");
          var C = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
            return t.ref;
          var T = function(k) {
            var O = m.refs;
            O === SC && (O = m.refs = {}), k === null ? delete O[C] : O[C] = k;
          };
          return T._stringRef = C, T;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function bm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function xm(e) {
      {
        var t = vt(e) || "Component";
        if (dS[t])
          return;
        dS[t] = !0, E("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function DC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function MC(e) {
      function t(j, q) {
        if (e) {
          var U = j.deletions;
          U === null ? (j.deletions = [q], j.flags |= qt) : U.push(q);
        }
      }
      function a(j, q) {
        if (!e)
          return null;
        for (var U = q; U !== null; )
          t(j, U), U = U.sibling;
        return null;
      }
      function i(j, q) {
        for (var U = /* @__PURE__ */ new Map(), se = q; se !== null; )
          se.key !== null ? U.set(se.key, se) : U.set(se.index, se), se = se.sibling;
        return U;
      }
      function o(j, q) {
        var U = lc(j, q);
        return U.index = 0, U.sibling = null, U;
      }
      function s(j, q, U) {
        if (j.index = U, !e)
          return j.flags |= _d, q;
        var se = j.alternate;
        if (se !== null) {
          var Ae = se.index;
          return Ae < q ? (j.flags |= yn, q) : Ae;
        } else
          return j.flags |= yn, q;
      }
      function f(j) {
        return e && j.alternate === null && (j.flags |= yn), j;
      }
      function p(j, q, U, se) {
        if (q === null || q.tag !== ve) {
          var Ae = F0(U, j.mode, se);
          return Ae.return = j, Ae;
        } else {
          var be = o(q, U);
          return be.return = j, be;
        }
      }
      function m(j, q, U, se) {
        var Ae = U.type;
        if (Ae === Sa)
          return T(j, q, U.props.children, se, U.key);
        if (q !== null && (q.elementType === Ae || // Keep this check inline so it only runs on the false path:
        g1(q, U) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ae == "object" && Ae !== null && Ae.$$typeof === qe && DC(Ae) === q.type)) {
          var be = o(q, U.props);
          return be.ref = Ip(j, q, U), be.return = j, be._debugSource = U._source, be._debugOwner = U._owner, be;
        }
        var ct = I0(U, j.mode, se);
        return ct.ref = Ip(j, q, U), ct.return = j, ct;
      }
      function C(j, q, U, se) {
        if (q === null || q.tag !== le || q.stateNode.containerInfo !== U.containerInfo || q.stateNode.implementation !== U.implementation) {
          var Ae = H0(U, j.mode, se);
          return Ae.return = j, Ae;
        } else {
          var be = o(q, U.children || []);
          return be.return = j, be;
        }
      }
      function T(j, q, U, se, Ae) {
        if (q === null || q.tag !== xe) {
          var be = rs(U, j.mode, se, Ae);
          return be.return = j, be;
        } else {
          var ct = o(q, U);
          return ct.return = j, ct;
        }
      }
      function k(j, q, U) {
        if (typeof q == "string" && q !== "" || typeof q == "number") {
          var se = F0("" + q, j.mode, U);
          return se.return = j, se;
        }
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case yi: {
              var Ae = I0(q, j.mode, U);
              return Ae.ref = Ip(j, null, q), Ae.return = j, Ae;
            }
            case jr: {
              var be = H0(q, j.mode, U);
              return be.return = j, be;
            }
            case qe: {
              var ct = q._payload, St = q._init;
              return k(j, St(ct), U);
            }
          }
          if (zt(q) || ni(q)) {
            var un = rs(q, j.mode, U, null);
            return un.return = j, un;
          }
          bm(j, q);
        }
        return typeof q == "function" && xm(j), null;
      }
      function O(j, q, U, se) {
        var Ae = q !== null ? q.key : null;
        if (typeof U == "string" && U !== "" || typeof U == "number")
          return Ae !== null ? null : p(j, q, "" + U, se);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case yi:
              return U.key === Ae ? m(j, q, U, se) : null;
            case jr:
              return U.key === Ae ? C(j, q, U, se) : null;
            case qe: {
              var be = U._payload, ct = U._init;
              return O(j, q, ct(be), se);
            }
          }
          if (zt(U) || ni(U))
            return Ae !== null ? null : T(j, q, U, se, null);
          bm(j, U);
        }
        return typeof U == "function" && xm(j), null;
      }
      function P(j, q, U, se, Ae) {
        if (typeof se == "string" && se !== "" || typeof se == "number") {
          var be = j.get(U) || null;
          return p(q, be, "" + se, Ae);
        }
        if (typeof se == "object" && se !== null) {
          switch (se.$$typeof) {
            case yi: {
              var ct = j.get(se.key === null ? U : se.key) || null;
              return m(q, ct, se, Ae);
            }
            case jr: {
              var St = j.get(se.key === null ? U : se.key) || null;
              return C(q, St, se, Ae);
            }
            case qe:
              var un = se._payload, Wt = se._init;
              return P(j, q, U, Wt(un), Ae);
          }
          if (zt(se) || ni(se)) {
            var ur = j.get(U) || null;
            return T(q, ur, se, Ae, null);
          }
          bm(q, se);
        }
        return typeof se == "function" && xm(q), null;
      }
      function B(j, q, U) {
        {
          if (typeof j != "object" || j === null)
            return q;
          switch (j.$$typeof) {
            case yi:
            case jr:
              xC(j, U);
              var se = j.key;
              if (typeof se != "string")
                break;
              if (q === null) {
                q = /* @__PURE__ */ new Set(), q.add(se);
                break;
              }
              if (!q.has(se)) {
                q.add(se);
                break;
              }
              E("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", se);
              break;
            case qe:
              var Ae = j._payload, be = j._init;
              B(be(Ae), q, U);
              break;
          }
        }
        return q;
      }
      function G(j, q, U, se) {
        for (var Ae = null, be = 0; be < U.length; be++) {
          var ct = U[be];
          Ae = B(ct, Ae, j);
        }
        for (var St = null, un = null, Wt = q, ur = 0, Gt = 0, Gn = null; Wt !== null && Gt < U.length; Gt++) {
          Wt.index > Gt ? (Gn = Wt, Wt = null) : Gn = Wt.sibling;
          var da = O(j, Wt, U[Gt], se);
          if (da === null) {
            Wt === null && (Wt = Gn);
            break;
          }
          e && Wt && da.alternate === null && t(j, Wt), ur = s(da, ur, Gt), un === null ? St = da : un.sibling = da, un = da, Wt = Gn;
        }
        if (Gt === U.length) {
          if (a(j, Wt), Vr()) {
            var qr = Gt;
            qs(j, qr);
          }
          return St;
        }
        if (Wt === null) {
          for (; Gt < U.length; Gt++) {
            var pi = k(j, U[Gt], se);
            pi !== null && (ur = s(pi, ur, Gt), un === null ? St = pi : un.sibling = pi, un = pi);
          }
          if (Vr()) {
            var Oa = Gt;
            qs(j, Oa);
          }
          return St;
        }
        for (var Na = i(j, Wt); Gt < U.length; Gt++) {
          var pa = P(Na, j, Gt, U[Gt], se);
          pa !== null && (e && pa.alternate !== null && Na.delete(pa.key === null ? Gt : pa.key), ur = s(pa, ur, Gt), un === null ? St = pa : un.sibling = pa, un = pa);
        }
        if (e && Na.forEach(function(Zf) {
          return t(j, Zf);
        }), Vr()) {
          var Xo = Gt;
          qs(j, Xo);
        }
        return St;
      }
      function Le(j, q, U, se) {
        var Ae = ni(U);
        if (typeof Ae != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          U[Symbol.toStringTag] === "Generator" && (sS || E("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), sS = !0), U.entries === Ae && (lS || E("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), lS = !0);
          var be = Ae.call(U);
          if (be)
            for (var ct = null, St = be.next(); !St.done; St = be.next()) {
              var un = St.value;
              ct = B(un, ct, j);
            }
        }
        var Wt = Ae.call(U);
        if (Wt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var ur = null, Gt = null, Gn = q, da = 0, qr = 0, pi = null, Oa = Wt.next(); Gn !== null && !Oa.done; qr++, Oa = Wt.next()) {
          Gn.index > qr ? (pi = Gn, Gn = null) : pi = Gn.sibling;
          var Na = O(j, Gn, Oa.value, se);
          if (Na === null) {
            Gn === null && (Gn = pi);
            break;
          }
          e && Gn && Na.alternate === null && t(j, Gn), da = s(Na, da, qr), Gt === null ? ur = Na : Gt.sibling = Na, Gt = Na, Gn = pi;
        }
        if (Oa.done) {
          if (a(j, Gn), Vr()) {
            var pa = qr;
            qs(j, pa);
          }
          return ur;
        }
        if (Gn === null) {
          for (; !Oa.done; qr++, Oa = Wt.next()) {
            var Xo = k(j, Oa.value, se);
            Xo !== null && (da = s(Xo, da, qr), Gt === null ? ur = Xo : Gt.sibling = Xo, Gt = Xo);
          }
          if (Vr()) {
            var Zf = qr;
            qs(j, Zf);
          }
          return ur;
        }
        for (var vv = i(j, Gn); !Oa.done; qr++, Oa = Wt.next()) {
          var ro = P(vv, j, qr, Oa.value, se);
          ro !== null && (e && ro.alternate !== null && vv.delete(ro.key === null ? qr : ro.key), da = s(ro, da, qr), Gt === null ? ur = ro : Gt.sibling = ro, Gt = ro);
        }
        if (e && vv.forEach(function(LO) {
          return t(j, LO);
        }), Vr()) {
          var kO = qr;
          qs(j, kO);
        }
        return ur;
      }
      function Xe(j, q, U, se) {
        if (q !== null && q.tag === ve) {
          a(j, q.sibling);
          var Ae = o(q, U);
          return Ae.return = j, Ae;
        }
        a(j, q);
        var be = F0(U, j.mode, se);
        return be.return = j, be;
      }
      function Ye(j, q, U, se) {
        for (var Ae = U.key, be = q; be !== null; ) {
          if (be.key === Ae) {
            var ct = U.type;
            if (ct === Sa) {
              if (be.tag === xe) {
                a(j, be.sibling);
                var St = o(be, U.props.children);
                return St.return = j, St._debugSource = U._source, St._debugOwner = U._owner, St;
              }
            } else if (be.elementType === ct || // Keep this check inline so it only runs on the false path:
            g1(be, U) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ct == "object" && ct !== null && ct.$$typeof === qe && DC(ct) === be.type) {
              a(j, be.sibling);
              var un = o(be, U.props);
              return un.ref = Ip(j, be, U), un.return = j, un._debugSource = U._source, un._debugOwner = U._owner, un;
            }
            a(j, be);
            break;
          } else
            t(j, be);
          be = be.sibling;
        }
        if (U.type === Sa) {
          var Wt = rs(U.props.children, j.mode, se, U.key);
          return Wt.return = j, Wt;
        } else {
          var ur = I0(U, j.mode, se);
          return ur.ref = Ip(j, q, U), ur.return = j, ur;
        }
      }
      function Ft(j, q, U, se) {
        for (var Ae = U.key, be = q; be !== null; ) {
          if (be.key === Ae)
            if (be.tag === le && be.stateNode.containerInfo === U.containerInfo && be.stateNode.implementation === U.implementation) {
              a(j, be.sibling);
              var ct = o(be, U.children || []);
              return ct.return = j, ct;
            } else {
              a(j, be);
              break;
            }
          else
            t(j, be);
          be = be.sibling;
        }
        var St = H0(U, j.mode, se);
        return St.return = j, St;
      }
      function At(j, q, U, se) {
        var Ae = typeof U == "object" && U !== null && U.type === Sa && U.key === null;
        if (Ae && (U = U.props.children), typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case yi:
              return f(Ye(j, q, U, se));
            case jr:
              return f(Ft(j, q, U, se));
            case qe:
              var be = U._payload, ct = U._init;
              return At(j, q, ct(be), se);
          }
          if (zt(U))
            return G(j, q, U, se);
          if (ni(U))
            return Le(j, q, U, se);
          bm(j, U);
        }
        return typeof U == "string" && U !== "" || typeof U == "number" ? f(Xe(j, q, "" + U, se)) : (typeof U == "function" && xm(j), a(j, q));
      }
      return At;
    }
    var jf = MC(!0), OC = MC(!1);
    function Ex(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = lc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = lc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Cx(e, t) {
      for (var a = e.child; a !== null; )
        XM(a, t), a = a.sibling;
    }
    var Fp = {}, Gl = Bl(Fp), Hp = Bl(Fp), Dm = Bl(Fp);
    function Mm(e) {
      if (e === Fp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function NC() {
      var e = Mm(Dm.current);
      return e;
    }
    function pS(e, t) {
      ca(Dm, t, e), ca(Hp, e, e), ca(Gl, Fp, e);
      var a = zR(t);
      sa(Gl, e), ca(Gl, a, e);
    }
    function Uf(e) {
      sa(Gl, e), sa(Hp, e), sa(Dm, e);
    }
    function vS() {
      var e = Mm(Gl.current);
      return e;
    }
    function _C(e) {
      Mm(Dm.current);
      var t = Mm(Gl.current), a = jR(t, e.type);
      t !== a && (ca(Hp, e, e), ca(Gl, a, e));
    }
    function hS(e) {
      Hp.current === e && (sa(Gl, e), sa(Hp, e));
    }
    var Tx = 0, kC = 1, LC = 1, Pp = 2, lu = Bl(Tx);
    function mS(e, t) {
      return (e & t) !== 0;
    }
    function If(e) {
      return e & kC;
    }
    function yS(e, t) {
      return e & kC | t;
    }
    function wx(e, t) {
      return e | t;
    }
    function ql(e, t) {
      ca(lu, t, e);
    }
    function Ff(e) {
      sa(lu, e);
    }
    function Rx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Om(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === pe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || BE(i) || wg(i))
              return t;
          }
        } else if (t.tag === tt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & ft) !== Ge;
          if (o)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var qa = (
      /*   */
      0
    ), Sr = (
      /* */
      1
    ), Xu = (
      /*  */
      2
    ), Er = (
      /*    */
      4
    ), Br = (
      /*   */
      8
    ), gS = [];
    function SS() {
      for (var e = 0; e < gS.length; e++) {
        var t = gS[e];
        t._workInProgressVersionPrimary = null;
      }
      gS.length = 0;
    }
    function bx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Me = y.ReactCurrentDispatcher, Vp = y.ReactCurrentBatchConfig, ES, Hf;
    ES = /* @__PURE__ */ new Set();
    var tc = K, an = null, Cr = null, Tr = null, Nm = !1, Bp = !1, Yp = 0, xx = 0, Dx = 25, ee = null, Li = null, Xl = -1, CS = !1;
    function Zt() {
      {
        var e = ee;
        Li === null ? Li = [e] : Li.push(e);
      }
    }
    function Ee() {
      {
        var e = ee;
        Li !== null && (Xl++, Li[Xl] !== e && Mx(e));
      }
    }
    function Pf(e) {
      e != null && !zt(e) && E("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ee, typeof e);
    }
    function Mx(e) {
      {
        var t = vt(an);
        if (!ES.has(t) && (ES.add(t), Li !== null)) {
          for (var a = "", i = 30, o = 0; o <= Xl; o++) {
            for (var s = Li[o], f = o === Xl ? e : s, p = o + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          E(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function fa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function TS(e, t) {
      if (CS)
        return !1;
      if (t === null)
        return E("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ee), !1;
      e.length !== t.length && E(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ee, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ie(e[a], t[a]))
          return !1;
      return !0;
    }
    function Vf(e, t, a, i, o, s) {
      tc = s, an = t, Li = e !== null ? e._debugHookTypes : null, Xl = -1, CS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = K, e !== null && e.memoizedState !== null ? Me.current = tT : Li !== null ? Me.current = eT : Me.current = JC;
      var f = a(i, o);
      if (Bp) {
        var p = 0;
        do {
          if (Bp = !1, Yp = 0, p >= Dx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, CS = !1, Cr = null, Tr = null, t.updateQueue = null, Xl = -1, Me.current = nT, f = a(i, o);
        } while (Bp);
      }
      Me.current = Bm, t._debugHookTypes = Li;
      var m = Cr !== null && Cr.next !== null;
      if (tc = K, an = null, Cr = null, Tr = null, ee = null, Li = null, Xl = -1, e !== null && (e.flags & mr) !== (t.flags & mr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Nt) !== et && E("Internal React error: Expected static flag was missing. Please notify the React team."), Nm = !1, m)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Bf() {
      var e = Yp !== 0;
      return Yp = 0, e;
    }
    function AC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Pa) !== et ? t.flags &= ~(go | ra | Rn | bt) : t.flags &= ~(Rn | bt), e.lanes = xl(e.lanes, a);
    }
    function zC() {
      if (Me.current = Bm, Nm) {
        for (var e = an.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Nm = !1;
      }
      tc = K, an = null, Cr = null, Tr = null, Li = null, Xl = -1, ee = null, GC = !1, Bp = !1, Yp = 0;
    }
    function Ku() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Tr === null ? an.memoizedState = Tr = e : Tr = Tr.next = e, Tr;
    }
    function Ai() {
      var e;
      if (Cr === null) {
        var t = an.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Cr.next;
      var a;
      if (Tr === null ? a = an.memoizedState : a = Tr.next, a !== null)
        Tr = a, a = Tr.next, Cr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Cr = e;
        var i = {
          memoizedState: Cr.memoizedState,
          baseState: Cr.baseState,
          baseQueue: Cr.baseQueue,
          queue: Cr.queue,
          next: null
        };
        Tr === null ? an.memoizedState = Tr = i : Tr = Tr.next = i;
      }
      return Tr;
    }
    function jC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function wS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function RS(e, t, a) {
      var i = Ku(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var s = {
        pending: null,
        interleaved: null,
        lanes: K,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = s;
      var f = s.dispatch = kx.bind(null, an, s);
      return [i.memoizedState, f];
    }
    function bS(e, t, a) {
      var i = Ai(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = Cr, f = s.baseQueue, p = o.pending;
      if (p !== null) {
        if (f !== null) {
          var m = f.next, C = p.next;
          f.next = C, p.next = m;
        }
        s.baseQueue !== f && E("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, o.pending = null;
      }
      if (f !== null) {
        var T = f.next, k = s.baseState, O = null, P = null, B = null, G = T;
        do {
          var Le = G.lane;
          if (Mo(tc, Le)) {
            if (B !== null) {
              var Ye = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ut,
                action: G.action,
                hasEagerState: G.hasEagerState,
                eagerState: G.eagerState,
                next: null
              };
              B = B.next = Ye;
            }
            if (G.hasEagerState)
              k = G.eagerState;
            else {
              var Ft = G.action;
              k = e(k, Ft);
            }
          } else {
            var Xe = {
              lane: Le,
              action: G.action,
              hasEagerState: G.hasEagerState,
              eagerState: G.eagerState,
              next: null
            };
            B === null ? (P = B = Xe, O = k) : B = B.next = Xe, an.lanes = xt(an.lanes, Le), sv(Le);
          }
          G = G.next;
        } while (G !== null && G !== T);
        B === null ? O = k : B.next = P, Ie(k, i.memoizedState) || Kp(), i.memoizedState = k, i.baseState = O, i.baseQueue = B, o.lastRenderedState = k;
      }
      var At = o.interleaved;
      if (At !== null) {
        var j = At;
        do {
          var q = j.lane;
          an.lanes = xt(an.lanes, q), sv(q), j = j.next;
        } while (j !== At);
      } else
        f === null && (o.lanes = K);
      var U = o.dispatch;
      return [i.memoizedState, U];
    }
    function xS(e, t, a) {
      var i = Ai(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = o.dispatch, f = o.pending, p = i.memoizedState;
      if (f !== null) {
        o.pending = null;
        var m = f.next, C = m;
        do {
          var T = C.action;
          p = e(p, T), C = C.next;
        } while (C !== m);
        Ie(p, i.memoizedState) || Kp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), o.lastRenderedState = p;
      }
      return [p, s];
    }
    function M_(e, t, a) {
    }
    function O_(e, t, a) {
    }
    function DS(e, t, a) {
      var i = an, o = Ku(), s, f = Vr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Hf || s !== a() && (E("The result of getServerSnapshot should be cached to avoid an infinite loop"), Hf = !0);
      } else {
        if (s = t(), !Hf) {
          var p = t();
          Ie(s, p) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Hf = !0);
        }
        var m = oy();
        if (m === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ks(m, tc) || UC(i, t, s);
      }
      o.memoizedState = s;
      var C = {
        value: s,
        getSnapshot: t
      };
      return o.queue = C, zm(FC.bind(null, i, C, e), [e]), i.flags |= Rn, $p(Sr | Br, IC.bind(null, i, C, s, t), void 0, null), s;
    }
    function _m(e, t, a) {
      var i = an, o = Ai(), s = t();
      if (!Hf) {
        var f = t();
        Ie(s, f) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Hf = !0);
      }
      var p = o.memoizedState, m = !Ie(p, s);
      m && (o.memoizedState = s, Kp());
      var C = o.queue;
      if (Wp(FC.bind(null, i, C, e), [e]), C.getSnapshot !== t || m || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Tr !== null && Tr.memoizedState.tag & Sr) {
        i.flags |= Rn, $p(Sr | Br, IC.bind(null, i, C, s, t), void 0, null);
        var T = oy();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ks(T, tc) || UC(i, t, s);
      }
      return s;
    }
    function UC(e, t, a) {
      e.flags |= ws;
      var i = {
        getSnapshot: t,
        value: a
      }, o = an.updateQueue;
      if (o === null)
        o = jC(), an.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function IC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, HC(t) && PC(e);
    }
    function FC(e, t, a) {
      var i = function() {
        HC(t) && PC(e);
      };
      return a(i);
    }
    function HC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Ie(a, i);
      } catch {
        return !0;
      }
    }
    function PC(e) {
      var t = Ga(e, lt);
      t !== null && xr(t, e, lt, fn);
    }
    function km(e) {
      var t = Ku();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: K,
        dispatch: null,
        lastRenderedReducer: wS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Lx.bind(null, an, a);
      return [t.memoizedState, i];
    }
    function MS(e) {
      return bS(wS);
    }
    function OS(e) {
      return xS(wS);
    }
    function $p(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = an.updateQueue;
      if (s === null)
        s = jC(), an.updateQueue = s, s.lastEffect = o.next = o;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = o.next = o;
        else {
          var p = f.next;
          f.next = o, o.next = p, s.lastEffect = o;
        }
      }
      return o;
    }
    function NS(e) {
      var t = Ku();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Lm(e) {
      var t = Ai();
      return t.memoizedState;
    }
    function Qp(e, t, a, i) {
      var o = Ku(), s = i === void 0 ? null : i;
      an.flags |= e, o.memoizedState = $p(Sr | t, a, void 0, s);
    }
    function Am(e, t, a, i) {
      var o = Ai(), s = i === void 0 ? null : i, f = void 0;
      if (Cr !== null) {
        var p = Cr.memoizedState;
        if (f = p.destroy, s !== null) {
          var m = p.deps;
          if (TS(s, m)) {
            o.memoizedState = $p(t, a, f, s);
            return;
          }
        }
      }
      an.flags |= e, o.memoizedState = $p(Sr | t, a, f, s);
    }
    function zm(e, t) {
      return (an.mode & Pa) !== et ? Qp(go | Rn | Lu, Br, e, t) : Qp(Rn | Lu, Br, e, t);
    }
    function Wp(e, t) {
      return Am(Rn, Br, e, t);
    }
    function _S(e, t) {
      return Qp(bt, Xu, e, t);
    }
    function jm(e, t) {
      return Am(bt, Xu, e, t);
    }
    function kS(e, t) {
      var a = bt;
      return a |= na, (an.mode & Pa) !== et && (a |= ra), Qp(a, Er, e, t);
    }
    function Um(e, t) {
      return Am(bt, Er, e, t);
    }
    function VC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var o = t;
        o.hasOwnProperty("current") || E("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
        var s = e();
        return o.current = s, function() {
          o.current = null;
        };
      }
    }
    function LS(e, t, a) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = bt;
      return o |= na, (an.mode & Pa) !== et && (o |= ra), Qp(o, Er, VC.bind(null, t, e), i);
    }
    function Im(e, t, a) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Am(bt, Er, VC.bind(null, t, e), i);
    }
    function Ox(e, t) {
    }
    var Fm = Ox;
    function AS(e, t) {
      var a = Ku(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Hm(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (TS(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function zS(e, t) {
      var a = Ku(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function Pm(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (TS(i, s))
          return o[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function jS(e) {
      var t = Ku();
      return t.memoizedState = e, e;
    }
    function BC(e) {
      var t = Ai(), a = Cr, i = a.memoizedState;
      return $C(t, i, e);
    }
    function YC(e) {
      var t = Ai();
      if (Cr === null)
        return t.memoizedState = e, e;
      var a = Cr.memoizedState;
      return $C(t, a, e);
    }
    function $C(e, t, a) {
      var i = !Vy(tc);
      if (i) {
        if (!Ie(a, t)) {
          var o = Gd();
          an.lanes = xt(an.lanes, o), sv(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Kp()), e.memoizedState = a, a;
    }
    function Nx(e, t, a) {
      var i = Ba();
      rr(Nr(i, gr)), e(!0);
      var o = Vp.transition;
      Vp.transition = {};
      var s = Vp.transition;
      Vp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (rr(i), Vp.transition = o, o === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && H("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function US() {
      var e = km(!1), t = e[0], a = e[1], i = Nx.bind(null, a), o = Ku();
      return o.memoizedState = i, [t, i];
    }
    function QC() {
      var e = MS(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    function WC() {
      var e = OS(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    var GC = !1;
    function _x() {
      return GC;
    }
    function IS() {
      var e = Ku(), t = oy(), a = t.identifierPrefix, i;
      if (Vr()) {
        var o = $b();
        i = ":" + a + "R" + o;
        var s = Yp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = xx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Vm() {
      var e = Ai(), t = e.memoizedState;
      return t;
    }
    function kx(e, t, a) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ts(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (qC(e))
        XC(t, o);
      else {
        var s = pC(e, t, o, i);
        if (s !== null) {
          var f = Ma();
          xr(s, e, i, f), KC(s, t, i);
        }
      }
      ZC(e, i);
    }
    function Lx(e, t, a) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ts(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (qC(e))
        XC(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === K && (s === null || s.lanes === K)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Me.current, Me.current = su;
            try {
              var m = t.lastRenderedState, C = f(m, a);
              if (o.hasEagerState = !0, o.eagerState = C, Ie(C, m)) {
                fx(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              Me.current = p;
            }
          }
        }
        var T = pC(e, t, o, i);
        if (T !== null) {
          var k = Ma();
          xr(T, e, i, k), KC(T, t, i);
        }
      }
      ZC(e, i);
    }
    function qC(e) {
      var t = e.alternate;
      return e === an || t !== null && t === an;
    }
    function XC(e, t) {
      Bp = Nm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function KC(e, t, a) {
      if (Wd(a)) {
        var i = t.lanes;
        i = qd(i, e.pendingLanes);
        var o = xt(i, a);
        t.lanes = o, Dl(e, o);
      }
    }
    function ZC(e, t, a) {
      Fu(e, t);
    }
    var Bm = {
      readContext: vr,
      useCallback: fa,
      useContext: fa,
      useEffect: fa,
      useImperativeHandle: fa,
      useInsertionEffect: fa,
      useLayoutEffect: fa,
      useMemo: fa,
      useReducer: fa,
      useRef: fa,
      useState: fa,
      useDebugValue: fa,
      useDeferredValue: fa,
      useTransition: fa,
      useMutableSource: fa,
      useSyncExternalStore: fa,
      useId: fa,
      unstable_isNewReconciler: ne
    }, JC = null, eT = null, tT = null, nT = null, Zu = null, su = null, Ym = null;
    {
      var FS = function() {
        E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ht = function() {
        E("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      JC = {
        readContext: function(e) {
          return vr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", Zt(), Pf(t), AS(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", Zt(), vr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", Zt(), Pf(t), zm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ee = "useImperativeHandle", Zt(), Pf(a), LS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", Zt(), Pf(t), _S(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", Zt(), Pf(t), kS(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", Zt(), Pf(t);
          var a = Me.current;
          Me.current = Zu;
          try {
            return zS(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ee = "useReducer", Zt();
          var i = Me.current;
          Me.current = Zu;
          try {
            return RS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ee = "useRef", Zt(), NS(e);
        },
        useState: function(e) {
          ee = "useState", Zt();
          var t = Me.current;
          Me.current = Zu;
          try {
            return km(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", Zt(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", Zt(), jS(e);
        },
        useTransition: function() {
          return ee = "useTransition", Zt(), US();
        },
        useMutableSource: function(e, t, a) {
          return ee = "useMutableSource", Zt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ee = "useSyncExternalStore", Zt(), DS(e, t, a);
        },
        useId: function() {
          return ee = "useId", Zt(), IS();
        },
        unstable_isNewReconciler: ne
      }, eT = {
        readContext: function(e) {
          return vr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", Ee(), AS(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", Ee(), vr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", Ee(), zm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ee = "useImperativeHandle", Ee(), LS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", Ee(), _S(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", Ee(), kS(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", Ee();
          var a = Me.current;
          Me.current = Zu;
          try {
            return zS(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ee = "useReducer", Ee();
          var i = Me.current;
          Me.current = Zu;
          try {
            return RS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ee = "useRef", Ee(), NS(e);
        },
        useState: function(e) {
          ee = "useState", Ee();
          var t = Me.current;
          Me.current = Zu;
          try {
            return km(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", Ee(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", Ee(), jS(e);
        },
        useTransition: function() {
          return ee = "useTransition", Ee(), US();
        },
        useMutableSource: function(e, t, a) {
          return ee = "useMutableSource", Ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ee = "useSyncExternalStore", Ee(), DS(e, t, a);
        },
        useId: function() {
          return ee = "useId", Ee(), IS();
        },
        unstable_isNewReconciler: ne
      }, tT = {
        readContext: function(e) {
          return vr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", Ee(), Hm(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", Ee(), vr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", Ee(), Wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ee = "useImperativeHandle", Ee(), Im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", Ee(), jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", Ee(), Um(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", Ee();
          var a = Me.current;
          Me.current = su;
          try {
            return Pm(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ee = "useReducer", Ee();
          var i = Me.current;
          Me.current = su;
          try {
            return bS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ee = "useRef", Ee(), Lm();
        },
        useState: function(e) {
          ee = "useState", Ee();
          var t = Me.current;
          Me.current = su;
          try {
            return MS(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", Ee(), Fm();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", Ee(), BC(e);
        },
        useTransition: function() {
          return ee = "useTransition", Ee(), QC();
        },
        useMutableSource: function(e, t, a) {
          return ee = "useMutableSource", Ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ee = "useSyncExternalStore", Ee(), _m(e, t);
        },
        useId: function() {
          return ee = "useId", Ee(), Vm();
        },
        unstable_isNewReconciler: ne
      }, nT = {
        readContext: function(e) {
          return vr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", Ee(), Hm(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", Ee(), vr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", Ee(), Wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ee = "useImperativeHandle", Ee(), Im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", Ee(), jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", Ee(), Um(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", Ee();
          var a = Me.current;
          Me.current = Ym;
          try {
            return Pm(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ee = "useReducer", Ee();
          var i = Me.current;
          Me.current = Ym;
          try {
            return xS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ee = "useRef", Ee(), Lm();
        },
        useState: function(e) {
          ee = "useState", Ee();
          var t = Me.current;
          Me.current = Ym;
          try {
            return OS(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", Ee(), Fm();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", Ee(), YC(e);
        },
        useTransition: function() {
          return ee = "useTransition", Ee(), WC();
        },
        useMutableSource: function(e, t, a) {
          return ee = "useMutableSource", Ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ee = "useSyncExternalStore", Ee(), _m(e, t);
        },
        useId: function() {
          return ee = "useId", Ee(), Vm();
        },
        unstable_isNewReconciler: ne
      }, Zu = {
        readContext: function(e) {
          return FS(), vr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", ht(), Zt(), AS(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", ht(), Zt(), vr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", ht(), Zt(), zm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ee = "useImperativeHandle", ht(), Zt(), LS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", ht(), Zt(), _S(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", ht(), Zt(), kS(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", ht(), Zt();
          var a = Me.current;
          Me.current = Zu;
          try {
            return zS(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ee = "useReducer", ht(), Zt();
          var i = Me.current;
          Me.current = Zu;
          try {
            return RS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ee = "useRef", ht(), Zt(), NS(e);
        },
        useState: function(e) {
          ee = "useState", ht(), Zt();
          var t = Me.current;
          Me.current = Zu;
          try {
            return km(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", ht(), Zt(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", ht(), Zt(), jS(e);
        },
        useTransition: function() {
          return ee = "useTransition", ht(), Zt(), US();
        },
        useMutableSource: function(e, t, a) {
          return ee = "useMutableSource", ht(), Zt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ee = "useSyncExternalStore", ht(), Zt(), DS(e, t, a);
        },
        useId: function() {
          return ee = "useId", ht(), Zt(), IS();
        },
        unstable_isNewReconciler: ne
      }, su = {
        readContext: function(e) {
          return FS(), vr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", ht(), Ee(), Hm(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", ht(), Ee(), vr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", ht(), Ee(), Wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ee = "useImperativeHandle", ht(), Ee(), Im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", ht(), Ee(), jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", ht(), Ee(), Um(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", ht(), Ee();
          var a = Me.current;
          Me.current = su;
          try {
            return Pm(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ee = "useReducer", ht(), Ee();
          var i = Me.current;
          Me.current = su;
          try {
            return bS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ee = "useRef", ht(), Ee(), Lm();
        },
        useState: function(e) {
          ee = "useState", ht(), Ee();
          var t = Me.current;
          Me.current = su;
          try {
            return MS(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", ht(), Ee(), Fm();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", ht(), Ee(), BC(e);
        },
        useTransition: function() {
          return ee = "useTransition", ht(), Ee(), QC();
        },
        useMutableSource: function(e, t, a) {
          return ee = "useMutableSource", ht(), Ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ee = "useSyncExternalStore", ht(), Ee(), _m(e, t);
        },
        useId: function() {
          return ee = "useId", ht(), Ee(), Vm();
        },
        unstable_isNewReconciler: ne
      }, Ym = {
        readContext: function(e) {
          return FS(), vr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", ht(), Ee(), Hm(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", ht(), Ee(), vr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", ht(), Ee(), Wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ee = "useImperativeHandle", ht(), Ee(), Im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", ht(), Ee(), jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", ht(), Ee(), Um(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", ht(), Ee();
          var a = Me.current;
          Me.current = su;
          try {
            return Pm(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ee = "useReducer", ht(), Ee();
          var i = Me.current;
          Me.current = su;
          try {
            return xS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ee = "useRef", ht(), Ee(), Lm();
        },
        useState: function(e) {
          ee = "useState", ht(), Ee();
          var t = Me.current;
          Me.current = su;
          try {
            return OS(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", ht(), Ee(), Fm();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", ht(), Ee(), YC(e);
        },
        useTransition: function() {
          return ee = "useTransition", ht(), Ee(), WC();
        },
        useMutableSource: function(e, t, a) {
          return ee = "useMutableSource", ht(), Ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ee = "useSyncExternalStore", ht(), Ee(), _m(e, t);
        },
        useId: function() {
          return ee = "useId", ht(), Ee(), Vm();
        },
        unstable_isNewReconciler: ne
      };
    }
    var Kl = h.unstable_now, rT = 0, $m = -1, Gp = -1, Qm = -1, HS = !1, Wm = !1;
    function aT() {
      return HS;
    }
    function Ax() {
      Wm = !0;
    }
    function zx() {
      HS = !1, Wm = !1;
    }
    function jx() {
      HS = Wm, Wm = !1;
    }
    function iT() {
      return rT;
    }
    function uT() {
      rT = Kl();
    }
    function PS(e) {
      Gp = Kl(), e.actualStartTime < 0 && (e.actualStartTime = Kl());
    }
    function oT(e) {
      Gp = -1;
    }
    function Gm(e, t) {
      if (Gp >= 0) {
        var a = Kl() - Gp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Gp = -1;
      }
    }
    function Ju(e) {
      if ($m >= 0) {
        var t = Kl() - $m;
        $m = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case M:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function VS(e) {
      if (Qm >= 0) {
        var t = Kl() - Qm;
        Qm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case M:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function eo() {
      $m = Kl();
    }
    function BS() {
      Qm = Kl();
    }
    function YS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function nc(e, t) {
      return {
        value: e,
        source: t,
        stack: al(t),
        digest: null
      };
    }
    function $S(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Ux(e, t) {
      return !0;
    }
    function QS(e, t) {
      try {
        var a = Ux(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === Q)
            return;
          console.error(i);
        }
        var p = o ? vt(o) : null, m = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === te)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = vt(e) || "Anonymous";
          C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var k = m + `
` + f + `

` + ("" + C);
        console.error(k);
      } catch (O) {
        setTimeout(function() {
          throw O;
        });
      }
    }
    var Ix = typeof WeakMap == "function" ? WeakMap : Map;
    function lT(e, t, a) {
      var i = Yo(fn, a);
      i.tag = Qg, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        NM(o), QS(e, t);
      }, i;
    }
    function WS(e, t, a) {
      var i = Yo(fn, a);
      i.tag = Qg;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          S1(e), QS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        S1(e), QS(e, t), typeof o != "function" && MM(this);
        var m = t.value, C = t.stack;
        this.componentDidCatch(m, {
          componentStack: C !== null ? C : ""
        }), typeof o != "function" && (la(e.lanes, lt) || E("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", vt(e) || "Unknown"));
      }), i;
    }
    function sT(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new Ix(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = _M.bind(null, e, t, a);
        yr && cv(e, a), t.then(s, s);
      }
    }
    function Fx(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function Hx(e, t) {
      var a = e.tag;
      if ((e.mode & Nt) === et && (a === L || a === Oe || a === Te)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function cT(e) {
      var t = e;
      do {
        if (t.tag === pe && Rx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function fT(e, t, a, i, o) {
      if ((e.mode & Nt) === et) {
        if (e === t)
          e.flags |= sr;
        else {
          if (e.flags |= ft, a.flags |= Rs, a.flags &= ~(Dc | Ea), a.tag === Q) {
            var s = a.alternate;
            if (s === null)
              a.tag = Dt;
            else {
              var f = Yo(fn, lt);
              f.tag = gm, Wl(a, f, lt);
            }
          }
          a.lanes = xt(a.lanes, lt);
        }
        return e;
      }
      return e.flags |= sr, e.lanes = o, e;
    }
    function Px(e, t, a, i, o) {
      if (a.flags |= Ea, yr && cv(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Hx(a), Vr() && a.mode & Nt && tC();
        var f = cT(t);
        if (f !== null) {
          f.flags &= ~jn, fT(f, t, a, e, o), f.mode & Nt && sT(e, s, o), Fx(f, e, s);
          return;
        } else {
          if (!bl(o)) {
            sT(e, s, o), x0();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Vr() && a.mode & Nt) {
        tC();
        var m = cT(t);
        if (m !== null) {
          (m.flags & sr) === Ge && (m.flags |= jn), fT(m, t, a, e, o), Fg(nc(i, a));
          return;
        }
      }
      i = nc(i, a), EM(i);
      var C = t;
      do {
        switch (C.tag) {
          case te: {
            var T = i;
            C.flags |= sr;
            var k = nr(o);
            C.lanes = xt(C.lanes, k);
            var O = lT(C, T, k);
            qg(C, O);
            return;
          }
          case Q:
            var P = i, B = C.type, G = C.stateNode;
            if ((C.flags & ft) === Ge && (typeof B.getDerivedStateFromError == "function" || G !== null && typeof G.componentDidCatch == "function" && !c1(G))) {
              C.flags |= sr;
              var Le = nr(o);
              C.lanes = xt(C.lanes, Le);
              var Xe = WS(C, P, Le);
              qg(C, Xe);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function Vx() {
      return null;
    }
    var qp = y.ReactCurrentOwner, cu = !1, GS, Xp, qS, XS, KS, rc, ZS, qm;
    GS = {}, Xp = {}, qS = {}, XS = {}, KS = {}, rc = !1, ZS = {}, qm = {};
    function xa(e, t, a, i) {
      e === null ? t.child = OC(t, null, a, i) : t.child = jf(t, e.child, a, i);
    }
    function Bx(e, t, a, i) {
      t.child = jf(t, e.child, null, i), t.child = jf(t, null, a, i);
    }
    function dT(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && au(
          s,
          i,
          // Resolved props
          "prop",
          Vt(a)
        );
      }
      var f = a.render, p = t.ref, m, C;
      zf(t, o), Iu(t);
      {
        if (qp.current = t, Jr(!0), m = Vf(e, t, f, i, p, o), C = Bf(), t.mode & _n) {
          tr(!0);
          try {
            m = Vf(e, t, f, i, p, o), C = Bf();
          } finally {
            tr(!1);
          }
        }
        Jr(!1);
      }
      return So(), e !== null && !cu ? (AC(e, t, o), $o(e, t, o)) : (Vr() && C && Lg(t), t.flags |= _u, xa(e, t, m, o), t.child);
    }
    function pT(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (GM(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Kf(s), t.tag = Te, t.type = f, t0(t, s), vT(e, t, f, i, o);
        }
        {
          var p = s.propTypes;
          p && au(
            p,
            i,
            // Resolved props
            "prop",
            Vt(s)
          );
        }
        var m = U0(a.type, null, i, t, t.mode, o);
        return m.ref = t.ref, m.return = t, t.child = m, m;
      }
      {
        var C = a.type, T = C.propTypes;
        T && au(
          T,
          i,
          // Resolved props
          "prop",
          Vt(C)
        );
      }
      var k = e.child, O = o0(e, o);
      if (!O) {
        var P = k.memoizedProps, B = a.compare;
        if (B = B !== null ? B : Qe, B(P, i) && e.ref === t.ref)
          return $o(e, t, o);
      }
      t.flags |= _u;
      var G = lc(k, i);
      return G.ref = t.ref, G.return = t, t.child = G, G;
    }
    function vT(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === qe) {
          var f = s, p = f._payload, m = f._init;
          try {
            s = m(p);
          } catch {
            s = null;
          }
          var C = s && s.propTypes;
          C && au(
            C,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Vt(s)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (Qe(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (cu = !1, t.pendingProps = i = T, o0(e, o))
            (e.flags & Rs) !== Ge && (cu = !0);
          else
            return t.lanes = e.lanes, $o(e, t, o);
      }
      return JS(e, t, a, i, o);
    }
    function hT(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || x)
        if ((t.mode & Nt) === et) {
          var f = {
            baseLanes: K,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, ly(t, a);
        } else if (la(a, oa)) {
          var k = {
            baseLanes: K,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = k;
          var O = s !== null ? s.baseLanes : a;
          ly(t, O);
        } else {
          var p = null, m;
          if (s !== null) {
            var C = s.baseLanes;
            m = xt(C, a);
          } else
            m = a;
          t.lanes = t.childLanes = oa;
          var T = {
            baseLanes: m,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, ly(t, m), null;
        }
      else {
        var P;
        s !== null ? (P = xt(s.baseLanes, a), t.memoizedState = null) : P = a, ly(t, P);
      }
      return xa(e, t, o, a), t.child;
    }
    function Yx(e, t, a) {
      var i = t.pendingProps;
      return xa(e, t, i, a), t.child;
    }
    function $x(e, t, a) {
      var i = t.pendingProps.children;
      return xa(e, t, i, a), t.child;
    }
    function Qx(e, t, a) {
      {
        t.flags |= bt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return xa(e, t, s, a), t.child;
    }
    function mT(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= ta, t.flags |= kd);
    }
    function JS(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && au(
          s,
          i,
          // Resolved props
          "prop",
          Vt(a)
        );
      }
      var f;
      {
        var p = Of(t, a, !0);
        f = Nf(t, p);
      }
      var m, C;
      zf(t, o), Iu(t);
      {
        if (qp.current = t, Jr(!0), m = Vf(e, t, a, i, f, o), C = Bf(), t.mode & _n) {
          tr(!0);
          try {
            m = Vf(e, t, a, i, f, o), C = Bf();
          } finally {
            tr(!1);
          }
        }
        Jr(!1);
      }
      return So(), e !== null && !cu ? (AC(e, t, o), $o(e, t, o)) : (Vr() && C && Lg(t), t.flags |= _u, xa(e, t, m, o), t.child);
    }
    function yT(e, t, a, i, o) {
      {
        switch (sO(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), m = p.state;
            s.updater.enqueueSetState(s, m, null);
            break;
          }
          case !0: {
            t.flags |= ft, t.flags |= sr;
            var C = new Error("Simulated error coming from DevTools"), T = nr(o);
            t.lanes = xt(t.lanes, T);
            var k = WS(t, nc(C, t), T);
            qg(t, k);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var O = a.propTypes;
          O && au(
            O,
            i,
            // Resolved props
            "prop",
            Vt(a)
          );
        }
      }
      var P;
      qu(a) ? (P = !0, om(t)) : P = !1, zf(t, o);
      var B = t.stateNode, G;
      B === null ? (Km(e, t), RC(t, a, i), oS(t, a, i, o), G = !0) : e === null ? G = gx(t, a, i, o) : G = Sx(e, t, a, i, o);
      var Le = e0(e, t, a, G, P, o);
      {
        var Xe = t.stateNode;
        G && Xe.props !== i && (rc || E("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", vt(t) || "a component"), rc = !0);
      }
      return Le;
    }
    function e0(e, t, a, i, o, s) {
      mT(e, t);
      var f = (t.flags & ft) !== Ge;
      if (!i && !f)
        return o && KE(t, a, !1), $o(e, t, s);
      var p = t.stateNode;
      qp.current = t;
      var m;
      if (f && typeof a.getDerivedStateFromError != "function")
        m = null, oT();
      else {
        Iu(t);
        {
          if (Jr(!0), m = p.render(), t.mode & _n) {
            tr(!0);
            try {
              p.render();
            } finally {
              tr(!1);
            }
          }
          Jr(!1);
        }
        So();
      }
      return t.flags |= _u, e !== null && f ? Bx(e, t, m, s) : xa(e, t, m, s), t.memoizedState = p.state, o && KE(t, a, !0), t.child;
    }
    function gT(e) {
      var t = e.stateNode;
      t.pendingContext ? qE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qE(e, t.context, !1), pS(e, t.containerInfo);
    }
    function Wx(e, t, a) {
      if (gT(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      mC(e, t), Tm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (o.isDehydrated) {
        var m = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, C = t.updateQueue;
        if (C.baseState = m, t.memoizedState = m, t.flags & jn) {
          var T = nc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return ST(e, t, p, a, T);
        } else if (p !== s) {
          var k = nc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return ST(e, t, p, a, k);
        } else {
          Kb(t);
          var O = OC(t, null, p, a);
          t.child = O;
          for (var P = O; P; )
            P.flags = P.flags & ~yn | Ia, P = P.sibling;
        }
      } else {
        if (Lf(), p === s)
          return $o(e, t, a);
        xa(e, t, p, a);
      }
      return t.child;
    }
    function ST(e, t, a, i, o) {
      return Lf(), Fg(o), t.flags |= jn, xa(e, t, a, i), t.child;
    }
    function Gx(e, t, a) {
      _C(t), e === null && Ig(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = o.children, p = Sg(i, o);
      return p ? f = null : s !== null && Sg(i, s) && (t.flags |= Kt), mT(e, t), xa(e, t, f, a), t.child;
    }
    function qx(e, t) {
      return e === null && Ig(t), null;
    }
    function Xx(e, t, a, i) {
      Km(e, t);
      var o = t.pendingProps, s = a, f = s._payload, p = s._init, m = p(f);
      t.type = m;
      var C = t.tag = qM(m), T = ou(m, o), k;
      switch (C) {
        case L:
          return t0(t, m), t.type = m = Kf(m), k = JS(null, t, m, T, i), k;
        case Q:
          return t.type = m = _0(m), k = yT(null, t, m, T, i), k;
        case Oe:
          return t.type = m = k0(m), k = dT(null, t, m, T, i), k;
        case ue: {
          if (t.type !== t.elementType) {
            var O = m.propTypes;
            O && au(
              O,
              T,
              // Resolved for outer only
              "prop",
              Vt(m)
            );
          }
          return k = pT(
            null,
            t,
            m,
            ou(m.type, T),
            // The inner type can have defaults too
            i
          ), k;
        }
      }
      var P = "";
      throw m !== null && typeof m == "object" && m.$$typeof === qe && (P = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + m + ". " + ("Lazy element type must resolve to a class or function." + P));
    }
    function Kx(e, t, a, i, o) {
      Km(e, t), t.tag = Q;
      var s;
      return qu(a) ? (s = !0, om(t)) : s = !1, zf(t, o), RC(t, a, i), oS(t, a, i, o), e0(null, t, a, !0, s, o);
    }
    function Zx(e, t, a, i) {
      Km(e, t);
      var o = t.pendingProps, s;
      {
        var f = Of(t, a, !1);
        s = Nf(t, f);
      }
      zf(t, i);
      var p, m;
      Iu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var C = Vt(a) || "Unknown";
          GS[C] || (E("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), GS[C] = !0);
        }
        t.mode & _n && uu.recordLegacyContextWarning(t, null), Jr(!0), qp.current = t, p = Vf(null, t, a, o, s, i), m = Bf(), Jr(!1);
      }
      if (So(), t.flags |= _u, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var T = Vt(a) || "Unknown";
        Xp[T] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), Xp[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var k = Vt(a) || "Unknown";
          Xp[k] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", k, k, k), Xp[k] = !0);
        }
        t.tag = Q, t.memoizedState = null, t.updateQueue = null;
        var O = !1;
        return qu(a) ? (O = !0, om(t)) : O = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Gg(t), wC(t, p), oS(t, a, o, i), e0(null, t, a, !0, O, i);
      } else {
        if (t.tag = L, t.mode & _n) {
          tr(!0);
          try {
            p = Vf(null, t, a, o, s, i), m = Bf();
          } finally {
            tr(!1);
          }
        }
        return Vr() && m && Lg(t), xa(null, t, p, i), t0(t, a), t.child;
      }
    }
    function t0(e, t) {
      {
        if (t && t.childContextTypes && E("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Fr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", s = e._debugSource;
          s && (o = s.fileName + ":" + s.lineNumber), KS[o] || (KS[o] = !0, E("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = Vt(t) || "Unknown";
          XS[f] || (E("%s: Function components do not support getDerivedStateFromProps.", f), XS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = Vt(t) || "Unknown";
          qS[p] || (E("%s: Function components do not support contextType.", p), qS[p] = !0);
        }
      }
    }
    var n0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Ut
    };
    function r0(e) {
      return {
        baseLanes: e,
        cachePool: Vx(),
        transitions: null
      };
    }
    function Jx(e, t) {
      var a = null;
      return {
        baseLanes: xt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function eD(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return mS(e, Pp);
    }
    function tD(e, t) {
      return xl(e.childLanes, t);
    }
    function ET(e, t, a) {
      var i = t.pendingProps;
      cO(t) && (t.flags |= ft);
      var o = lu.current, s = !1, f = (t.flags & ft) !== Ge;
      if (f || eD(o, e) ? (s = !0, t.flags &= ~ft) : (e === null || e.memoizedState !== null) && (o = wx(o, LC)), o = If(o), ql(t, o), e === null) {
        Ig(t);
        var p = t.memoizedState;
        if (p !== null) {
          var m = p.dehydrated;
          if (m !== null)
            return uD(t, m);
        }
        var C = i.children, T = i.fallback;
        if (s) {
          var k = nD(t, C, T, a), O = t.child;
          return O.memoizedState = r0(a), t.memoizedState = n0, k;
        } else
          return a0(t, C);
      } else {
        var P = e.memoizedState;
        if (P !== null) {
          var B = P.dehydrated;
          if (B !== null)
            return oD(e, t, f, i, B, P, a);
        }
        if (s) {
          var G = i.fallback, Le = i.children, Xe = aD(e, t, Le, G, a), Ye = t.child, Ft = e.child.memoizedState;
          return Ye.memoizedState = Ft === null ? r0(a) : Jx(Ft, a), Ye.childLanes = tD(e, a), t.memoizedState = n0, Xe;
        } else {
          var At = i.children, j = rD(e, t, At, a);
          return t.memoizedState = null, j;
        }
      }
    }
    function a0(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, s = i0(o, i);
      return s.return = e, e.child = s, s;
    }
    function nD(e, t, a, i) {
      var o = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, m;
      return (o & Nt) === et && s !== null ? (p = s, p.childLanes = K, p.pendingProps = f, e.mode & rt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), m = rs(a, o, i, null)) : (p = i0(f, o), m = rs(a, o, i, null)), p.return = e, m.return = e, p.sibling = m, e.child = p, m;
    }
    function i0(e, t, a) {
      return C1(e, t, K, null);
    }
    function CT(e, t) {
      return lc(e, t);
    }
    function rD(e, t, a, i) {
      var o = e.child, s = o.sibling, f = CT(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Nt) === et && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= qt) : p.push(s);
      }
      return t.child = f, f;
    }
    function aD(e, t, a, i, o) {
      var s = t.mode, f = e.child, p = f.sibling, m = {
        mode: "hidden",
        children: a
      }, C;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Nt) === et && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var T = t.child;
        C = T, C.childLanes = K, C.pendingProps = m, t.mode & rt && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = f.selfBaseDuration, C.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        C = CT(f, m), C.subtreeFlags = f.subtreeFlags & mr;
      var k;
      return p !== null ? k = lc(p, i) : (k = rs(i, s, o, null), k.flags |= yn), k.return = t, C.return = t, C.sibling = k, t.child = C, k;
    }
    function Xm(e, t, a, i) {
      i !== null && Fg(i), jf(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, f = a0(t, s);
      return f.flags |= yn, t.memoizedState = null, f;
    }
    function iD(e, t, a, i, o) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = i0(f, s), m = rs(i, s, o, null);
      return m.flags |= yn, p.return = t, m.return = t, p.sibling = m, t.child = p, (t.mode & Nt) !== et && jf(t, e.child, null, o), m;
    }
    function uD(e, t, a) {
      return (e.mode & Nt) === et ? (E("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = lt) : wg(t) ? e.lanes = To : e.lanes = oa, null;
    }
    function oD(e, t, a, i, o, s, f) {
      if (a)
        if (t.flags & jn) {
          t.flags &= ~jn;
          var j = $S(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Xm(e, t, f, j);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ft, null;
          var q = i.children, U = i.fallback, se = iD(e, t, q, U, f), Ae = t.child;
          return Ae.memoizedState = r0(f), t.memoizedState = n0, se;
        }
      else {
        if (qb(), (t.mode & Nt) === et)
          return Xm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (wg(o)) {
          var p, m, C;
          {
            var T = db(o);
            p = T.digest, m = T.message, C = T.stack;
          }
          var k;
          m ? k = new Error(m) : k = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var O = $S(k, p, C);
          return Xm(e, t, f, O);
        }
        var P = la(f, e.childLanes);
        if (cu || P) {
          var B = oy();
          if (B !== null) {
            var G = Yy(B, f);
            if (G !== Ut && G !== s.retryLane) {
              s.retryLane = G;
              var Le = fn;
              Ga(e, G), xr(B, e, G, Le);
            }
          }
          x0();
          var Xe = $S(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Xm(e, t, f, Xe);
        } else if (BE(o)) {
          t.flags |= ft, t.child = e.child;
          var Ye = kM.bind(null, e);
          return pb(o, Ye), null;
        } else {
          Zb(t, o, s.treeContext);
          var Ft = i.children, At = a0(t, Ft);
          return At.flags |= Ia, At;
        }
      }
    }
    function TT(e, t, a) {
      e.lanes = xt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = xt(i.lanes, t)), Yg(e.return, t, a);
    }
    function lD(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === pe) {
          var o = i.memoizedState;
          o !== null && TT(i, a, e);
        } else if (i.tag === tt)
          TT(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function sD(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Om(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function cD(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !ZS[e])
        if (ZS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              E('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              E('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              E('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          E('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function fD(e, t) {
      e !== void 0 && !qm[e] && (e !== "collapsed" && e !== "hidden" ? (qm[e] = !0, E('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (qm[e] = !0, E('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function wT(e, t) {
      {
        var a = zt(e), i = !a && typeof ni(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return E("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function dD(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (zt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!wT(e[a], a))
              return;
        } else {
          var i = ni(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), f = 0; !s.done; s = o.next()) {
                if (!wT(s.value, f))
                  return;
                f++;
              }
          } else
            E('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function u0(e, t, a, i, o) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = o);
    }
    function RT(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, f = i.children;
      cD(o), fD(s, o), dD(f, o), xa(e, t, f, a);
      var p = lu.current, m = mS(p, Pp);
      if (m)
        p = yS(p, Pp), t.flags |= ft;
      else {
        var C = e !== null && (e.flags & ft) !== Ge;
        C && lD(t, t.child, a), p = If(p);
      }
      if (ql(t, p), (t.mode & Nt) === et)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var T = sD(t.child), k;
            T === null ? (k = t.child, t.child = null) : (k = T.sibling, T.sibling = null), u0(
              t,
              !1,
              // isBackwards
              k,
              T,
              s
            );
            break;
          }
          case "backwards": {
            var O = null, P = t.child;
            for (t.child = null; P !== null; ) {
              var B = P.alternate;
              if (B !== null && Om(B) === null) {
                t.child = P;
                break;
              }
              var G = P.sibling;
              P.sibling = O, O = P, P = G;
            }
            u0(
              t,
              !0,
              // isBackwards
              O,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            u0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function pD(e, t, a) {
      pS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = jf(t, null, i, a) : xa(e, t, i, a), t.child;
    }
    var bT = !1;
    function vD(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || bT || (bT = !0, E("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var m = t.type.propTypes;
        m && au(m, s, "prop", "Context.Provider");
      }
      if (dC(t, o, p), f !== null) {
        var C = f.value;
        if (Ie(C, p)) {
          if (f.children === s.children && !im())
            return $o(e, t, a);
        } else
          lx(t, o, a);
      }
      var T = s.children;
      return xa(e, t, T, a), t.child;
    }
    var xT = !1;
    function hD(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (xT || (xT = !0, E("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && E("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), zf(t, a);
      var f = vr(i);
      Iu(t);
      var p;
      return qp.current = t, Jr(!0), p = s(f), Jr(!1), So(), t.flags |= _u, xa(e, t, p, a), t.child;
    }
    function Kp() {
      cu = !0;
    }
    function Km(e, t) {
      (t.mode & Nt) === et && e !== null && (e.alternate = null, t.alternate = null, t.flags |= yn);
    }
    function $o(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), oT(), sv(t.lanes), la(a, t.childLanes) ? (Ex(e, t), t.child) : null;
    }
    function mD(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw new Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw new Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= qt) : s.push(e), a.flags |= yn, a;
      }
    }
    function o0(e, t) {
      var a = e.lanes;
      return !!la(a, t);
    }
    function yD(e, t, a) {
      switch (t.tag) {
        case te:
          gT(t), t.stateNode, Lf();
          break;
        case J:
          _C(t);
          break;
        case Q: {
          var i = t.type;
          qu(i) && om(t);
          break;
        }
        case le:
          pS(t, t.stateNode.containerInfo);
          break;
        case ze: {
          var o = t.memoizedProps.value, s = t.type._context;
          dC(t, s, o);
          break;
        }
        case M:
          {
            var f = la(a, t.childLanes);
            f && (t.flags |= bt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case pe: {
          var m = t.memoizedState;
          if (m !== null) {
            if (m.dehydrated !== null)
              return ql(t, If(lu.current)), t.flags |= ft, null;
            var C = t.child, T = C.childLanes;
            if (la(a, T))
              return ET(e, t, a);
            ql(t, If(lu.current));
            var k = $o(e, t, a);
            return k !== null ? k.sibling : null;
          } else
            ql(t, If(lu.current));
          break;
        }
        case tt: {
          var O = (e.flags & ft) !== Ge, P = la(a, t.childLanes);
          if (O) {
            if (P)
              return RT(e, t, a);
            t.flags |= ft;
          }
          var B = t.memoizedState;
          if (B !== null && (B.rendering = null, B.tail = null, B.lastEffect = null), ql(t, lu.current), P)
            break;
          return null;
        }
        case we:
        case $e:
          return t.lanes = K, hT(e, t, a);
      }
      return $o(e, t, a);
    }
    function DT(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return mD(e, t, U0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || im() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          cu = !0;
        else {
          var s = o0(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ft) === Ge)
            return cu = !1, yD(e, t, a);
          (e.flags & Rs) !== Ge ? cu = !0 : cu = !1;
        }
      } else if (cu = !1, Vr() && Bb(t)) {
        var f = t.index, p = Yb();
        eC(t, p, f);
      }
      switch (t.lanes = K, t.tag) {
        case W:
          return Zx(e, t, t.type, a);
        case mt: {
          var m = t.elementType;
          return Xx(e, t, m, a);
        }
        case L: {
          var C = t.type, T = t.pendingProps, k = t.elementType === C ? T : ou(C, T);
          return JS(e, t, C, k, a);
        }
        case Q: {
          var O = t.type, P = t.pendingProps, B = t.elementType === O ? P : ou(O, P);
          return yT(e, t, O, B, a);
        }
        case te:
          return Wx(e, t, a);
        case J:
          return Gx(e, t, a);
        case ve:
          return qx(e, t);
        case pe:
          return ET(e, t, a);
        case le:
          return pD(e, t, a);
        case Oe: {
          var G = t.type, Le = t.pendingProps, Xe = t.elementType === G ? Le : ou(G, Le);
          return dT(e, t, G, Xe, a);
        }
        case xe:
          return Yx(e, t, a);
        case Re:
          return $x(e, t, a);
        case M:
          return Qx(e, t, a);
        case ze:
          return vD(e, t, a);
        case Ke:
          return hD(e, t, a);
        case ue: {
          var Ye = t.type, Ft = t.pendingProps, At = ou(Ye, Ft);
          if (t.type !== t.elementType) {
            var j = Ye.propTypes;
            j && au(
              j,
              At,
              // Resolved for outer only
              "prop",
              Vt(Ye)
            );
          }
          return At = ou(Ye.type, At), pT(e, t, Ye, At, a);
        }
        case Te:
          return vT(e, t, t.type, t.pendingProps, a);
        case Dt: {
          var q = t.type, U = t.pendingProps, se = t.elementType === q ? U : ou(q, U);
          return Kx(e, t, q, se, a);
        }
        case tt:
          return RT(e, t, a);
        case yt:
          break;
        case we:
          return hT(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Yf(e) {
      e.flags |= bt;
    }
    function MT(e) {
      e.flags |= ta, e.flags |= kd;
    }
    var OT, l0, NT, _T;
    OT = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === J || o.tag === ve)
          HR(e, o.stateNode);
        else if (o.tag !== le) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === t)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, l0 = function(e, t) {
    }, NT = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = vS(), m = VR(f, a, s, i, o, p);
        t.updateQueue = m, m && Yf(t);
      }
    }, _T = function(e, t, a, i) {
      a !== i && Yf(t);
    };
    function Zp(e, t) {
      if (!Vr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var o = e.tail, s = null; o !== null; )
              o.alternate !== null && (s = o), o = o.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Yr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = K, i = Ge;
      if (t) {
        if ((e.mode & rt) !== et) {
          for (var m = e.selfBaseDuration, C = e.child; C !== null; )
            a = xt(a, xt(C.lanes, C.childLanes)), i |= C.subtreeFlags & mr, i |= C.flags & mr, m += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = m;
        } else
          for (var T = e.child; T !== null; )
            a = xt(a, xt(T.lanes, T.childLanes)), i |= T.subtreeFlags & mr, i |= T.flags & mr, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & rt) !== et) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = xt(a, xt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, o += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = xt(a, xt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function gD(e, t, a) {
      if (rx() && (t.mode & Nt) !== et && (t.flags & ft) === Ge)
        return oC(t), Lf(), t.flags |= jn | Ea | sr, !1;
      var i = dm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (tx(t), Yr(t), (t.mode & rt) !== et) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Lf(), (t.flags & ft) === Ge && (t.memoizedState = null), t.flags |= bt, Yr(t), (t.mode & rt) !== et) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return lC(), !0;
    }
    function kT(e, t, a) {
      var i = t.pendingProps;
      switch (Ag(t), t.tag) {
        case W:
        case mt:
        case Te:
        case L:
        case Oe:
        case xe:
        case Re:
        case M:
        case Ke:
        case ue:
          return Yr(t), null;
        case Q: {
          var o = t.type;
          return qu(o) && um(t), Yr(t), null;
        }
        case te: {
          var s = t.stateNode;
          if (Uf(t), Ng(t), SS(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = dm(t);
            if (f)
              Yf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & jn) !== Ge) && (t.flags |= Ua, lC());
            }
          }
          return l0(e, t), Yr(t), null;
        }
        case J: {
          hS(t);
          var m = NC(), C = t.type;
          if (e !== null && t.stateNode != null)
            NT(e, t, C, i, m), e.ref !== t.ref && MT(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Yr(t), null;
            }
            var T = vS(), k = dm(t);
            if (k)
              Jb(t, m, T) && Yf(t);
            else {
              var O = FR(C, i, m, T, t);
              OT(O, t, !1, !1), t.stateNode = O, PR(O, C, i, m) && Yf(t);
            }
            t.ref !== null && MT(t);
          }
          return Yr(t), null;
        }
        case ve: {
          var P = i;
          if (e && t.stateNode != null) {
            var B = e.memoizedProps;
            _T(e, t, B, P);
          } else {
            if (typeof P != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var G = NC(), Le = vS(), Xe = dm(t);
            Xe ? ex(t) && Yf(t) : t.stateNode = BR(P, G, Le, t);
          }
          return Yr(t), null;
        }
        case pe: {
          Ff(t);
          var Ye = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ft = gD(e, t, Ye);
            if (!Ft)
              return t.flags & sr ? t : null;
          }
          if ((t.flags & ft) !== Ge)
            return t.lanes = a, (t.mode & rt) !== et && YS(t), t;
          var At = Ye !== null, j = e !== null && e.memoizedState !== null;
          if (At !== j && At) {
            var q = t.child;
            if (q.flags |= ku, (t.mode & Nt) !== et) {
              var U = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Z);
              U || mS(lu.current, LC) ? SM() : x0();
            }
          }
          var se = t.updateQueue;
          if (se !== null && (t.flags |= bt), Yr(t), (t.mode & rt) !== et && At) {
            var Ae = t.child;
            Ae !== null && (t.treeBaseDuration -= Ae.treeBaseDuration);
          }
          return null;
        }
        case le:
          return Uf(t), l0(e, t), e === null && jb(t.stateNode.containerInfo), Yr(t), null;
        case ze:
          var be = t.type._context;
          return Bg(be, t), Yr(t), null;
        case Dt: {
          var ct = t.type;
          return qu(ct) && um(t), Yr(t), null;
        }
        case tt: {
          Ff(t);
          var St = t.memoizedState;
          if (St === null)
            return Yr(t), null;
          var un = (t.flags & ft) !== Ge, Wt = St.rendering;
          if (Wt === null)
            if (un)
              Zp(St, !1);
            else {
              var ur = CM() && (e === null || (e.flags & ft) === Ge);
              if (!ur)
                for (var Gt = t.child; Gt !== null; ) {
                  var Gn = Om(Gt);
                  if (Gn !== null) {
                    un = !0, t.flags |= ft, Zp(St, !1);
                    var da = Gn.updateQueue;
                    return da !== null && (t.updateQueue = da, t.flags |= bt), t.subtreeFlags = Ge, Cx(t, a), ql(t, yS(lu.current, Pp)), t.child;
                  }
                  Gt = Gt.sibling;
                }
              St.tail !== null && Nn() > JT() && (t.flags |= ft, un = !0, Zp(St, !1), t.lanes = $d);
            }
          else {
            if (!un) {
              var qr = Om(Wt);
              if (qr !== null) {
                t.flags |= ft, un = !0;
                var pi = qr.updateQueue;
                if (pi !== null && (t.updateQueue = pi, t.flags |= bt), Zp(St, !0), St.tail === null && St.tailMode === "hidden" && !Wt.alternate && !Vr())
                  return Yr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Nn() * 2 - St.renderingStartTime > JT() && a !== oa && (t.flags |= ft, un = !0, Zp(St, !1), t.lanes = $d);
            }
            if (St.isBackwards)
              Wt.sibling = t.child, t.child = Wt;
            else {
              var Oa = St.last;
              Oa !== null ? Oa.sibling = Wt : t.child = Wt, St.last = Wt;
            }
          }
          if (St.tail !== null) {
            var Na = St.tail;
            St.rendering = Na, St.tail = Na.sibling, St.renderingStartTime = Nn(), Na.sibling = null;
            var pa = lu.current;
            return un ? pa = yS(pa, Pp) : pa = If(pa), ql(t, pa), Na;
          }
          return Yr(t), null;
        }
        case yt:
          break;
        case we:
        case $e: {
          b0(t);
          var Xo = t.memoizedState, Zf = Xo !== null;
          if (e !== null) {
            var vv = e.memoizedState, ro = vv !== null;
            ro !== Zf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !x && (t.flags |= ku);
          }
          return !Zf || (t.mode & Nt) === et ? Yr(t) : la(no, oa) && (Yr(t), t.subtreeFlags & (yn | bt) && (t.flags |= ku)), null;
        }
        case Et:
          return null;
        case it:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function SD(e, t, a) {
      switch (Ag(t), t.tag) {
        case Q: {
          var i = t.type;
          qu(i) && um(t);
          var o = t.flags;
          return o & sr ? (t.flags = o & ~sr | ft, (t.mode & rt) !== et && YS(t), t) : null;
        }
        case te: {
          t.stateNode, Uf(t), Ng(t), SS();
          var s = t.flags;
          return (s & sr) !== Ge && (s & ft) === Ge ? (t.flags = s & ~sr | ft, t) : null;
        }
        case J:
          return hS(t), null;
        case pe: {
          Ff(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Lf();
          }
          var p = t.flags;
          return p & sr ? (t.flags = p & ~sr | ft, (t.mode & rt) !== et && YS(t), t) : null;
        }
        case tt:
          return Ff(t), null;
        case le:
          return Uf(t), null;
        case ze:
          var m = t.type._context;
          return Bg(m, t), null;
        case we:
        case $e:
          return b0(t), null;
        case Et:
          return null;
        default:
          return null;
      }
    }
    function LT(e, t, a) {
      switch (Ag(t), t.tag) {
        case Q: {
          var i = t.type.childContextTypes;
          i != null && um(t);
          break;
        }
        case te: {
          t.stateNode, Uf(t), Ng(t), SS();
          break;
        }
        case J: {
          hS(t);
          break;
        }
        case le:
          Uf(t);
          break;
        case pe:
          Ff(t);
          break;
        case tt:
          Ff(t);
          break;
        case ze:
          var o = t.type._context;
          Bg(o, t);
          break;
        case we:
        case $e:
          b0(t);
          break;
      }
    }
    var AT = null;
    AT = /* @__PURE__ */ new Set();
    var Zm = !1, $r = !1, ED = typeof WeakSet == "function" ? WeakSet : Set, Fe = null, $f = null, Qf = null;
    function CD(e) {
      yo(null, function() {
        throw e;
      }), Nd();
    }
    var TD = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & rt)
        try {
          eo(), t.componentWillUnmount();
        } finally {
          Ju(e);
        }
      else
        t.componentWillUnmount();
    };
    function zT(e, t) {
      try {
        Zl(Er, e);
      } catch (a) {
        Cn(e, t, a);
      }
    }
    function s0(e, t, a) {
      try {
        TD(e, a);
      } catch (i) {
        Cn(e, t, i);
      }
    }
    function wD(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Cn(e, t, i);
      }
    }
    function jT(e, t) {
      try {
        IT(e);
      } catch (a) {
        Cn(e, t, a);
      }
    }
    function Wf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (ut && Ct && e.mode & rt)
              try {
                eo(), i = a(null);
              } finally {
                Ju(e);
              }
            else
              i = a(null);
          } catch (o) {
            Cn(e, t, o);
          }
          typeof i == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", vt(e));
        } else
          a.current = null;
    }
    function Jm(e, t, a) {
      try {
        a();
      } catch (i) {
        Cn(e, t, i);
      }
    }
    var UT = !1;
    function RD(e, t) {
      UR(e.containerInfo), Fe = t, bD();
      var a = UT;
      return UT = !1, a;
    }
    function bD() {
      for (; Fe !== null; ) {
        var e = Fe, t = e.child;
        (e.subtreeFlags & gl) !== Ge && t !== null ? (t.return = e, Fe = t) : xD();
      }
    }
    function xD() {
      for (; Fe !== null; ) {
        var e = Fe;
        Xt(e);
        try {
          DD(e);
        } catch (a) {
          Cn(e, e.return, a);
        }
        zn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Fe = t;
          return;
        }
        Fe = e.return;
      }
    }
    function DD(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Ua) !== Ge) {
        switch (Xt(e), e.tag) {
          case L:
          case Oe:
          case Te:
            break;
          case Q: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !rc && (s.props !== e.memoizedProps && E("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", vt(e) || "instance"), s.state !== e.memoizedState && E("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", vt(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ou(e.type, i), o);
              {
                var p = AT;
                f === void 0 && !p.has(e.type) && (p.add(e.type), E("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", vt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case te: {
            {
              var m = e.stateNode;
              lb(m.containerInfo);
            }
            break;
          }
          case J:
          case ve:
          case le:
          case Dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        zn();
      }
    }
    function fu(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Br) !== qa ? zc(t) : (e & Er) !== qa && jc(t), (e & Xu) !== qa && fv(!0), Jm(t, a, p), (e & Xu) !== qa && fv(!1), (e & Br) !== qa ? fh() : (e & Er) !== qa && Sl());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Zl(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & Br) !== qa ? ch(t) : (e & Er) !== qa && dh(t);
            var f = s.create;
            (e & Xu) !== qa && fv(!0), s.destroy = f(), (e & Xu) !== qa && fv(!1), (e & Br) !== qa ? Vd() : (e & Er) !== qa && ph();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var m = void 0;
                (s.tag & Er) !== Ge ? m = "useLayoutEffect" : (s.tag & Xu) !== Ge ? m = "useInsertionEffect" : m = "useEffect";
                var C = void 0;
                p === null ? C = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? C = `

It looks like you wrote ` + m + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + m + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + p, E("%s must not return anything besides a function, which is used for clean-up.%s", m, C);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function MD(e, t) {
      if ((t.flags & bt) !== Ge)
        switch (t.tag) {
          case M: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, f = iT(), p = t.alternate === null ? "mount" : "update";
            aT() && (p = "nested-update"), typeof s == "function" && s(o, p, a, f);
            var m = t.return;
            e:
              for (; m !== null; ) {
                switch (m.tag) {
                  case te:
                    var C = m.stateNode;
                    C.passiveEffectDuration += a;
                    break e;
                  case M:
                    var T = m.stateNode;
                    T.passiveEffectDuration += a;
                    break e;
                }
                m = m.return;
              }
            break;
          }
        }
    }
    function OD(e, t, a, i) {
      if ((a.flags & Mr) !== Ge)
        switch (a.tag) {
          case L:
          case Oe:
          case Te: {
            if (!$r)
              if (a.mode & rt)
                try {
                  eo(), Zl(Er | Sr, a);
                } finally {
                  Ju(a);
                }
              else
                Zl(Er | Sr, a);
            break;
          }
          case Q: {
            var o = a.stateNode;
            if (a.flags & bt && !$r)
              if (t === null)
                if (a.type === a.elementType && !rc && (o.props !== a.memoizedProps && E("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", vt(a) || "instance"), o.state !== a.memoizedState && E("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", vt(a) || "instance")), a.mode & rt)
                  try {
                    eo(), o.componentDidMount();
                  } finally {
                    Ju(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ou(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !rc && (o.props !== a.memoizedProps && E("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", vt(a) || "instance"), o.state !== a.memoizedState && E("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", vt(a) || "instance")), a.mode & rt)
                  try {
                    eo(), o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Ju(a);
                  }
                else
                  o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !rc && (o.props !== a.memoizedProps && E("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", vt(a) || "instance"), o.state !== a.memoizedState && E("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", vt(a) || "instance")), gC(a, p, o));
            break;
          }
          case te: {
            var m = a.updateQueue;
            if (m !== null) {
              var C = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case J:
                    C = a.child.stateNode;
                    break;
                  case Q:
                    C = a.child.stateNode;
                    break;
                }
              gC(a, m, C);
            }
            break;
          }
          case J: {
            var T = a.stateNode;
            if (t === null && a.flags & bt) {
              var k = a.type, O = a.memoizedProps;
              GR(T, k, O);
            }
            break;
          }
          case ve:
            break;
          case le:
            break;
          case M: {
            {
              var P = a.memoizedProps, B = P.onCommit, G = P.onRender, Le = a.stateNode.effectDuration, Xe = iT(), Ye = t === null ? "mount" : "update";
              aT() && (Ye = "nested-update"), typeof G == "function" && G(a.memoizedProps.id, Ye, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Xe);
              {
                typeof B == "function" && B(a.memoizedProps.id, Ye, Le, Xe), xM(a);
                var Ft = a.return;
                e:
                  for (; Ft !== null; ) {
                    switch (Ft.tag) {
                      case te:
                        var At = Ft.stateNode;
                        At.effectDuration += Le;
                        break e;
                      case M:
                        var j = Ft.stateNode;
                        j.effectDuration += Le;
                        break e;
                    }
                    Ft = Ft.return;
                  }
              }
            }
            break;
          }
          case pe: {
            UD(e, a);
            break;
          }
          case tt:
          case Dt:
          case yt:
          case we:
          case $e:
          case it:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      $r || a.flags & ta && IT(a);
    }
    function ND(e) {
      switch (e.tag) {
        case L:
        case Oe:
        case Te: {
          if (e.mode & rt)
            try {
              eo(), zT(e, e.return);
            } finally {
              Ju(e);
            }
          else
            zT(e, e.return);
          break;
        }
        case Q: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && wD(e, e.return, t), jT(e, e.return);
          break;
        }
        case J: {
          jT(e, e.return);
          break;
        }
      }
    }
    function _D(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === J) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? ab(o) : ub(i.stateNode, i.memoizedProps);
            } catch (f) {
              Cn(e, e.return, f);
            }
          }
        } else if (i.tag === ve) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? ib(s) : ob(s, i.memoizedProps);
            } catch (f) {
              Cn(e, e.return, f);
            }
        } else if (!((i.tag === we || i.tag === $e) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function IT(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case J:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & rt)
            try {
              eo(), o = t(i);
            } finally {
              Ju(e);
            }
          else
            o = t(i);
          typeof o == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", vt(e));
        } else
          t.hasOwnProperty("current") || E("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", vt(e)), t.current = i;
      }
    }
    function kD(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function FT(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, FT(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === J) {
          var a = e.stateNode;
          a !== null && Fb(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function LD(e) {
      for (var t = e.return; t !== null; ) {
        if (HT(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function HT(e) {
      return e.tag === J || e.tag === te || e.tag === le;
    }
    function PT(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || HT(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== J && t.tag !== ve && t.tag !== at; ) {
            if (t.flags & yn || t.child === null || t.tag === le)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & yn))
            return t.stateNode;
        }
    }
    function AD(e) {
      var t = LD(e);
      switch (t.tag) {
        case J: {
          var a = t.stateNode;
          t.flags & Kt && (VE(a), t.flags &= ~Kt);
          var i = PT(e);
          f0(e, i, a);
          break;
        }
        case te:
        case le: {
          var o = t.stateNode.containerInfo, s = PT(e);
          c0(e, s, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function c0(e, t, a) {
      var i = e.tag, o = i === J || i === ve;
      if (o) {
        var s = e.stateNode;
        t ? eb(a, s, t) : ZR(a, s);
      } else if (i !== le) {
        var f = e.child;
        if (f !== null) {
          c0(f, t, a);
          for (var p = f.sibling; p !== null; )
            c0(p, t, a), p = p.sibling;
        }
      }
    }
    function f0(e, t, a) {
      var i = e.tag, o = i === J || i === ve;
      if (o) {
        var s = e.stateNode;
        t ? JR(a, s, t) : KR(a, s);
      } else if (i !== le) {
        var f = e.child;
        if (f !== null) {
          f0(f, t, a);
          for (var p = f.sibling; p !== null; )
            f0(p, t, a), p = p.sibling;
        }
      }
    }
    var Qr = null, du = !1;
    function zD(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case J: {
                Qr = i.stateNode, du = !1;
                break e;
              }
              case te: {
                Qr = i.stateNode.containerInfo, du = !0;
                break e;
              }
              case le: {
                Qr = i.stateNode.containerInfo, du = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Qr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        VT(e, t, a), Qr = null, du = !1;
      }
      kD(a);
    }
    function Jl(e, t, a) {
      for (var i = a.child; i !== null; )
        VT(e, t, i), i = i.sibling;
    }
    function VT(e, t, a) {
      switch (Hd(a), a.tag) {
        case J:
          $r || Wf(a, t);
        case ve: {
          {
            var i = Qr, o = du;
            Qr = null, Jl(e, t, a), Qr = i, du = o, Qr !== null && (du ? nb(Qr, a.stateNode) : tb(Qr, a.stateNode));
          }
          return;
        }
        case at: {
          Qr !== null && (du ? rb(Qr, a.stateNode) : Tg(Qr, a.stateNode));
          return;
        }
        case le: {
          {
            var s = Qr, f = du;
            Qr = a.stateNode.containerInfo, du = !0, Jl(e, t, a), Qr = s, du = f;
          }
          return;
        }
        case L:
        case Oe:
        case ue:
        case Te: {
          if (!$r) {
            var p = a.updateQueue;
            if (p !== null) {
              var m = p.lastEffect;
              if (m !== null) {
                var C = m.next, T = C;
                do {
                  var k = T, O = k.destroy, P = k.tag;
                  O !== void 0 && ((P & Xu) !== qa ? Jm(a, t, O) : (P & Er) !== qa && (jc(a), a.mode & rt ? (eo(), Jm(a, t, O), Ju(a)) : Jm(a, t, O), Sl())), T = T.next;
                } while (T !== C);
              }
            }
          }
          Jl(e, t, a);
          return;
        }
        case Q: {
          if (!$r) {
            Wf(a, t);
            var B = a.stateNode;
            typeof B.componentWillUnmount == "function" && s0(a, t, B);
          }
          Jl(e, t, a);
          return;
        }
        case yt: {
          Jl(e, t, a);
          return;
        }
        case we: {
          if (
            // TODO: Remove this dead flag
            a.mode & Nt
          ) {
            var G = $r;
            $r = G || a.memoizedState !== null, Jl(e, t, a), $r = G;
          } else
            Jl(e, t, a);
          break;
        }
        default: {
          Jl(e, t, a);
          return;
        }
      }
    }
    function jD(e) {
      e.memoizedState;
    }
    function UD(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && Tb(s);
          }
        }
      }
    }
    function BT(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new ED()), t.forEach(function(i) {
          var o = LM.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), yr)
              if ($f !== null && Qf !== null)
                cv(Qf, $f);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function ID(e, t, a) {
      $f = a, Qf = e, Xt(t), YT(t, e), Xt(t), $f = null, Qf = null;
    }
    function pu(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            zD(e, t, s);
          } catch (m) {
            Cn(s, t, m);
          }
        }
      var f = pc();
      if (t.subtreeFlags & aa)
        for (var p = t.child; p !== null; )
          Xt(p), YT(p, e), p = p.sibling;
      Xt(f);
    }
    function YT(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case L:
        case Oe:
        case ue:
        case Te: {
          if (pu(t, e), to(e), o & bt) {
            try {
              fu(Xu | Sr, e, e.return), Zl(Xu | Sr, e);
            } catch (ct) {
              Cn(e, e.return, ct);
            }
            if (e.mode & rt) {
              try {
                eo(), fu(Er | Sr, e, e.return);
              } catch (ct) {
                Cn(e, e.return, ct);
              }
              Ju(e);
            } else
              try {
                fu(Er | Sr, e, e.return);
              } catch (ct) {
                Cn(e, e.return, ct);
              }
          }
          return;
        }
        case Q: {
          pu(t, e), to(e), o & ta && i !== null && Wf(i, i.return);
          return;
        }
        case J: {
          pu(t, e), to(e), o & ta && i !== null && Wf(i, i.return);
          {
            if (e.flags & Kt) {
              var s = e.stateNode;
              try {
                VE(s);
              } catch (ct) {
                Cn(e, e.return, ct);
              }
            }
            if (o & bt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, m = i !== null ? i.memoizedProps : p, C = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    qR(f, T, C, m, p, e);
                  } catch (ct) {
                    Cn(e, e.return, ct);
                  }
              }
            }
          }
          return;
        }
        case ve: {
          if (pu(t, e), to(e), o & bt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var k = e.stateNode, O = e.memoizedProps, P = i !== null ? i.memoizedProps : O;
            try {
              XR(k, P, O);
            } catch (ct) {
              Cn(e, e.return, ct);
            }
          }
          return;
        }
        case te: {
          if (pu(t, e), to(e), o & bt && i !== null) {
            var B = i.memoizedState;
            if (B.isDehydrated)
              try {
                Cb(t.containerInfo);
              } catch (ct) {
                Cn(e, e.return, ct);
              }
          }
          return;
        }
        case le: {
          pu(t, e), to(e);
          return;
        }
        case pe: {
          pu(t, e), to(e);
          var G = e.child;
          if (G.flags & ku) {
            var Le = G.stateNode, Xe = G.memoizedState, Ye = Xe !== null;
            if (Le.isHidden = Ye, Ye) {
              var Ft = G.alternate !== null && G.alternate.memoizedState !== null;
              Ft || gM();
            }
          }
          if (o & bt) {
            try {
              jD(e);
            } catch (ct) {
              Cn(e, e.return, ct);
            }
            BT(e);
          }
          return;
        }
        case we: {
          var At = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Nt
          ) {
            var j = $r;
            $r = j || At, pu(t, e), $r = j;
          } else
            pu(t, e);
          if (to(e), o & ku) {
            var q = e.stateNode, U = e.memoizedState, se = U !== null, Ae = e;
            if (q.isHidden = se, se && !At && (Ae.mode & Nt) !== et) {
              Fe = Ae;
              for (var be = Ae.child; be !== null; )
                Fe = be, HD(be), be = be.sibling;
            }
            _D(Ae, se);
          }
          return;
        }
        case tt: {
          pu(t, e), to(e), o & bt && BT(e);
          return;
        }
        case yt:
          return;
        default: {
          pu(t, e), to(e);
          return;
        }
      }
    }
    function to(e) {
      var t = e.flags;
      if (t & yn) {
        try {
          AD(e);
        } catch (a) {
          Cn(e, e.return, a);
        }
        e.flags &= ~yn;
      }
      t & Ia && (e.flags &= ~Ia);
    }
    function FD(e, t, a) {
      $f = a, Qf = t, Fe = e, $T(e, t, a), $f = null, Qf = null;
    }
    function $T(e, t, a) {
      for (var i = (e.mode & Nt) !== et; Fe !== null; ) {
        var o = Fe, s = o.child;
        if (o.tag === we && i) {
          var f = o.memoizedState !== null, p = f || Zm;
          if (p) {
            d0(e, t, a);
            continue;
          } else {
            var m = o.alternate, C = m !== null && m.memoizedState !== null, T = C || $r, k = Zm, O = $r;
            Zm = p, $r = T, $r && !O && (Fe = o, PD(o));
            for (var P = s; P !== null; )
              Fe = P, $T(
                P,
                // New root; bubble back up to here and stop.
                t,
                a
              ), P = P.sibling;
            Fe = o, Zm = k, $r = O, d0(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & Mr) !== Ge && s !== null ? (s.return = o, Fe = s) : d0(e, t, a);
      }
    }
    function d0(e, t, a) {
      for (; Fe !== null; ) {
        var i = Fe;
        if ((i.flags & Mr) !== Ge) {
          var o = i.alternate;
          Xt(i);
          try {
            OD(t, o, i, a);
          } catch (f) {
            Cn(i, i.return, f);
          }
          zn();
        }
        if (i === e) {
          Fe = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Fe = s;
          return;
        }
        Fe = i.return;
      }
    }
    function HD(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.child;
        switch (t.tag) {
          case L:
          case Oe:
          case ue:
          case Te: {
            if (t.mode & rt)
              try {
                eo(), fu(Er, t, t.return);
              } finally {
                Ju(t);
              }
            else
              fu(Er, t, t.return);
            break;
          }
          case Q: {
            Wf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && s0(t, t.return, i);
            break;
          }
          case J: {
            Wf(t, t.return);
            break;
          }
          case we: {
            var o = t.memoizedState !== null;
            if (o) {
              QT(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Fe = a) : QT(e);
      }
    }
    function QT(e) {
      for (; Fe !== null; ) {
        var t = Fe;
        if (t === e) {
          Fe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Fe = a;
          return;
        }
        Fe = t.return;
      }
    }
    function PD(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.child;
        if (t.tag === we) {
          var i = t.memoizedState !== null;
          if (i) {
            WT(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Fe = a) : WT(e);
      }
    }
    function WT(e) {
      for (; Fe !== null; ) {
        var t = Fe;
        Xt(t);
        try {
          ND(t);
        } catch (i) {
          Cn(t, t.return, i);
        }
        if (zn(), t === e) {
          Fe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Fe = a;
          return;
        }
        Fe = t.return;
      }
    }
    function VD(e, t, a, i) {
      Fe = t, BD(t, e, a, i);
    }
    function BD(e, t, a, i) {
      for (; Fe !== null; ) {
        var o = Fe, s = o.child;
        (o.subtreeFlags & Fa) !== Ge && s !== null ? (s.return = o, Fe = s) : YD(e, t, a, i);
      }
    }
    function YD(e, t, a, i) {
      for (; Fe !== null; ) {
        var o = Fe;
        if ((o.flags & Rn) !== Ge) {
          Xt(o);
          try {
            $D(t, o, a, i);
          } catch (f) {
            Cn(o, o.return, f);
          }
          zn();
        }
        if (o === e) {
          Fe = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, Fe = s;
          return;
        }
        Fe = o.return;
      }
    }
    function $D(e, t, a, i) {
      switch (t.tag) {
        case L:
        case Oe:
        case Te: {
          if (t.mode & rt) {
            BS();
            try {
              Zl(Br | Sr, t);
            } finally {
              VS(t);
            }
          } else
            Zl(Br | Sr, t);
          break;
        }
      }
    }
    function QD(e) {
      Fe = e, WD();
    }
    function WD() {
      for (; Fe !== null; ) {
        var e = Fe, t = e.child;
        if ((Fe.flags & qt) !== Ge) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              Fe = o, XD(o, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Fe = e;
          }
        }
        (e.subtreeFlags & Fa) !== Ge && t !== null ? (t.return = e, Fe = t) : GD();
      }
    }
    function GD() {
      for (; Fe !== null; ) {
        var e = Fe;
        (e.flags & Rn) !== Ge && (Xt(e), qD(e), zn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Fe = t;
          return;
        }
        Fe = e.return;
      }
    }
    function qD(e) {
      switch (e.tag) {
        case L:
        case Oe:
        case Te: {
          e.mode & rt ? (BS(), fu(Br | Sr, e, e.return), VS(e)) : fu(Br | Sr, e, e.return);
          break;
        }
      }
    }
    function XD(e, t) {
      for (; Fe !== null; ) {
        var a = Fe;
        Xt(a), ZD(a, t), zn();
        var i = a.child;
        i !== null ? (i.return = a, Fe = i) : KD(e);
      }
    }
    function KD(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.sibling, i = t.return;
        if (FT(t), t === e) {
          Fe = null;
          return;
        }
        if (a !== null) {
          a.return = i, Fe = a;
          return;
        }
        Fe = i;
      }
    }
    function ZD(e, t) {
      switch (e.tag) {
        case L:
        case Oe:
        case Te: {
          e.mode & rt ? (BS(), fu(Br, e, t), VS(e)) : fu(Br, e, t);
          break;
        }
      }
    }
    function JD(e) {
      switch (e.tag) {
        case L:
        case Oe:
        case Te: {
          try {
            Zl(Er | Sr, e);
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
        case Q: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function eM(e) {
      switch (e.tag) {
        case L:
        case Oe:
        case Te: {
          try {
            Zl(Br | Sr, e);
          } catch (t) {
            Cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function tM(e) {
      switch (e.tag) {
        case L:
        case Oe:
        case Te: {
          try {
            fu(Er | Sr, e, e.return);
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
        case Q: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && s0(e, e.return, t);
          break;
        }
      }
    }
    function nM(e) {
      switch (e.tag) {
        case L:
        case Oe:
        case Te:
          try {
            fu(Br | Sr, e, e.return);
          } catch (t) {
            Cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Jp = Symbol.for;
      Jp("selector.component"), Jp("selector.has_pseudo_class"), Jp("selector.role"), Jp("selector.test_id"), Jp("selector.text");
    }
    var rM = [];
    function aM() {
      rM.forEach(function(e) {
        return e();
      });
    }
    var iM = y.ReactCurrentActQueue;
    function uM(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function GT() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && iM.current !== null && E("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var oM = Math.ceil, p0 = y.ReactCurrentDispatcher, v0 = y.ReactCurrentOwner, Wr = y.ReactCurrentBatchConfig, vu = y.ReactCurrentActQueue, wr = (
      /*             */
      0
    ), qT = (
      /*               */
      1
    ), Gr = (
      /*                */
      2
    ), zi = (
      /*                */
      4
    ), Qo = 0, ev = 1, ac = 2, ey = 3, tv = 4, XT = 5, h0 = 6, It = wr, Da = null, Pn = null, Rr = K, no = K, m0 = Bl(K), br = Qo, nv = null, ty = K, rv = K, ny = K, av = null, Xa = null, y0 = 0, KT = 500, ZT = 1 / 0, lM = 500, Wo = null;
    function iv() {
      ZT = Nn() + lM;
    }
    function JT() {
      return ZT;
    }
    var ry = !1, g0 = null, Gf = null, ic = !1, es = null, uv = K, S0 = [], E0 = null, sM = 50, ov = 0, C0 = null, T0 = !1, ay = !1, cM = 50, qf = 0, iy = null, lv = fn, uy = K, e1 = !1;
    function oy() {
      return Da;
    }
    function Ma() {
      return (It & (Gr | zi)) !== wr ? Nn() : (lv !== fn || (lv = Nn()), lv);
    }
    function ts(e) {
      var t = e.mode;
      if ((t & Nt) === et)
        return lt;
      if ((It & Gr) !== wr && Rr !== K)
        return nr(Rr);
      var a = ux() !== ix;
      if (a) {
        if (Wr.transition !== null) {
          var i = Wr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return uy === Ut && (uy = Gd()), uy;
      }
      var o = Ba();
      if (o !== Ut)
        return o;
      var s = YR();
      return s;
    }
    function fM(e) {
      var t = e.mode;
      return (t & Nt) === et ? lt : By();
    }
    function xr(e, t, a, i) {
      zM(), e1 && E("useInsertionEffect must not schedule updates."), T0 && (ay = !0), Oo(e, a, i), (It & Gr) !== K && e === Da ? IM(t) : (yr && Jd(e, t, a), FM(t), e === Da && ((It & Gr) === wr && (rv = xt(rv, a)), br === tv && ns(e, Rr)), Ka(e, i), a === lt && It === wr && (t.mode & Nt) === et && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !vu.isBatchingLegacy && (iv(), JE()));
    }
    function dM(e, t, a) {
      var i = e.current;
      i.lanes = t, Oo(e, t, a), Ka(e, a);
    }
    function pM(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (It & Gr) !== wr
      );
    }
    function Ka(e, t) {
      var a = e.callbackNode;
      Hy(e, t);
      var i = Ns(e, e === Da ? Rr : K);
      if (i === K) {
        a !== null && m1(a), e.callbackNode = null, e.callbackPriority = Ut;
        return;
      }
      var o = Qn(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(vu.current !== null && a !== O0)) {
        a == null && s !== lt && E("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && m1(a);
      var f;
      if (o === lt)
        e.tag === Yl ? (vu.isBatchingLegacy !== null && (vu.didScheduleLegacyUpdate = !0), Vb(r1.bind(null, e))) : ZE(r1.bind(null, e)), vu.current !== null ? vu.current.push($l) : QR(function() {
          (It & (Gr | zi)) === wr && $l();
        }), f = null;
      else {
        var p;
        switch (zs(i)) {
          case Or:
            p = kc;
            break;
          case gr:
            p = wa;
            break;
          case Ji:
            p = bi;
            break;
          case Ls:
            p = Au;
            break;
          default:
            p = bi;
            break;
        }
        f = N0(p, t1.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = f;
    }
    function t1(e, t) {
      if (zx(), lv = fn, uy = K, (It & (Gr | zi)) !== wr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = qo();
      if (i && e.callbackNode !== a)
        return null;
      var o = Ns(e, e === Da ? Rr : K);
      if (o === K)
        return null;
      var s = !ks(e, o) && !Sh(e, o) && !t, f = s ? wM(e, o) : sy(e, o);
      if (f !== Qo) {
        if (f === ac) {
          var p = Qd(e);
          p !== K && (o = p, f = w0(e, p));
        }
        if (f === ev) {
          var m = nv;
          throw uc(e, K), ns(e, o), Ka(e, Nn()), m;
        }
        if (f === h0)
          ns(e, o);
        else {
          var C = !ks(e, o), T = e.current.alternate;
          if (C && !hM(T)) {
            if (f = sy(e, o), f === ac) {
              var k = Qd(e);
              k !== K && (o = k, f = w0(e, k));
            }
            if (f === ev) {
              var O = nv;
              throw uc(e, K), ns(e, o), Ka(e, Nn()), O;
            }
          }
          e.finishedWork = T, e.finishedLanes = o, vM(e, f, o);
        }
      }
      return Ka(e, Nn()), e.callbackNode === a ? t1.bind(null, e) : null;
    }
    function w0(e, t) {
      var a = av;
      if (ar(e)) {
        var i = uc(e, t);
        i.flags |= jn, zb(e.containerInfo);
      }
      var o = sy(e, t);
      if (o !== ac) {
        var s = Xa;
        Xa = a, s !== null && n1(s);
      }
      return o;
    }
    function n1(e) {
      Xa === null ? Xa = e : Xa.push.apply(Xa, e);
    }
    function vM(e, t, a) {
      switch (t) {
        case Qo:
        case ev:
          throw new Error("Root did not complete. This is a bug in React.");
        case ac: {
          oc(e, Xa, Wo);
          break;
        }
        case ey: {
          if (ns(e, a), nf(a) && // do not delay if we're inside an act() scope
          !y1()) {
            var i = y0 + KT - Nn();
            if (i > 10) {
              var o = Ns(e, K);
              if (o !== K)
                break;
              var s = e.suspendedLanes;
              if (!Mo(s, a)) {
                Ma(), Kd(e, s);
                break;
              }
              e.timeoutHandle = Eg(oc.bind(null, e, Xa, Wo), i);
              break;
            }
          }
          oc(e, Xa, Wo);
          break;
        }
        case tv: {
          if (ns(e, a), gh(a))
            break;
          if (!y1()) {
            var f = yh(e, a), p = f, m = Nn() - p, C = AM(m) - m;
            if (C > 10) {
              e.timeoutHandle = Eg(oc.bind(null, e, Xa, Wo), C);
              break;
            }
          }
          oc(e, Xa, Wo);
          break;
        }
        case XT: {
          oc(e, Xa, Wo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function hM(e) {
      for (var t = e; ; ) {
        if (t.flags & ws) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], f = s.getSnapshot, p = s.value;
                try {
                  if (!Ie(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var m = t.child;
        if (t.subtreeFlags & ws && m !== null) {
          m.return = t, t = m;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function ns(e, t) {
      t = xl(t, ny), t = xl(t, rv), Xd(e, t);
    }
    function r1(e) {
      if (jx(), (It & (Gr | zi)) !== wr)
        throw new Error("Should not already be working.");
      qo();
      var t = Ns(e, K);
      if (!la(t, lt))
        return Ka(e, Nn()), null;
      var a = sy(e, t);
      if (e.tag !== Yl && a === ac) {
        var i = Qd(e);
        i !== K && (t = i, a = w0(e, i));
      }
      if (a === ev) {
        var o = nv;
        throw uc(e, K), ns(e, t), Ka(e, Nn()), o;
      }
      if (a === h0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, oc(e, Xa, Wo), Ka(e, Nn()), null;
    }
    function mM(e, t) {
      t !== K && (Dl(e, xt(t, lt)), Ka(e, Nn()), (It & (Gr | zi)) === wr && (iv(), $l()));
    }
    function R0(e, t) {
      var a = It;
      It |= qT;
      try {
        return e(t);
      } finally {
        It = a, It === wr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !vu.isBatchingLegacy && (iv(), JE());
      }
    }
    function yM(e, t, a, i, o) {
      var s = Ba(), f = Wr.transition;
      try {
        return Wr.transition = null, rr(Or), e(t, a, i, o);
      } finally {
        rr(s), Wr.transition = f, It === wr && iv();
      }
    }
    function Go(e) {
      es !== null && es.tag === Yl && (It & (Gr | zi)) === wr && qo();
      var t = It;
      It |= qT;
      var a = Wr.transition, i = Ba();
      try {
        return Wr.transition = null, rr(Or), e ? e() : void 0;
      } finally {
        rr(i), Wr.transition = a, It = t, (It & (Gr | zi)) === wr && $l();
      }
    }
    function a1() {
      return (It & (Gr | zi)) !== wr;
    }
    function ly(e, t) {
      ca(m0, no, e), no = xt(no, t);
    }
    function b0(e) {
      no = m0.current, sa(m0, e);
    }
    function uc(e, t) {
      e.finishedWork = null, e.finishedLanes = K;
      var a = e.timeoutHandle;
      if (a !== Cg && (e.timeoutHandle = Cg, $R(a)), Pn !== null)
        for (var i = Pn.return; i !== null; ) {
          var o = i.alternate;
          LT(o, i), i = i.return;
        }
      Da = e;
      var s = lc(e.current, null);
      return Pn = s, Rr = no = t, br = Qo, nv = null, ty = K, rv = K, ny = K, av = null, Xa = null, cx(), uu.discardPendingWarnings(), s;
    }
    function i1(e, t) {
      do {
        var a = Pn;
        try {
          if (mm(), zC(), zn(), v0.current = null, a === null || a.return === null) {
            br = ev, nv = t, Pn = null;
            return;
          }
          if (ut && a.mode & rt && Gm(a, !0), pt)
            if (So(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              vh(a, i, Rr);
            } else
              Uc(a, t, Rr);
          Px(e, a.return, a, t, Rr), s1(a);
        } catch (o) {
          t = o, Pn === a && a !== null ? (a = a.return, Pn = a) : a = Pn;
          continue;
        }
        return;
      } while (!0);
    }
    function u1() {
      var e = p0.current;
      return p0.current = Bm, e === null ? Bm : e;
    }
    function o1(e) {
      p0.current = e;
    }
    function gM() {
      y0 = Nn();
    }
    function sv(e) {
      ty = xt(e, ty);
    }
    function SM() {
      br === Qo && (br = ey);
    }
    function x0() {
      (br === Qo || br === ey || br === ac) && (br = tv), Da !== null && (_s(ty) || _s(rv)) && ns(Da, Rr);
    }
    function EM(e) {
      br !== tv && (br = ac), av === null ? av = [e] : av.push(e);
    }
    function CM() {
      return br === Qo;
    }
    function sy(e, t) {
      var a = It;
      It |= Gr;
      var i = u1();
      if (Da !== e || Rr !== t) {
        if (yr) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (cv(e, Rr), o.clear()), uf(e, t);
        }
        Wo = ep(), uc(e, t);
      }
      si(t);
      do
        try {
          TM();
          break;
        } catch (s) {
          i1(e, s);
        }
      while (!0);
      if (mm(), It = a, o1(i), Pn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Cl(), Da = null, Rr = K, br;
    }
    function TM() {
      for (; Pn !== null; )
        l1(Pn);
    }
    function wM(e, t) {
      var a = It;
      It |= Gr;
      var i = u1();
      if (Da !== e || Rr !== t) {
        if (yr) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (cv(e, Rr), o.clear()), uf(e, t);
        }
        Wo = ep(), iv(), uc(e, t);
      }
      si(t);
      do
        try {
          RM();
          break;
        } catch (s) {
          i1(e, s);
        }
      while (!0);
      return mm(), o1(i), It = a, Pn !== null ? (xs(), Qo) : (Cl(), Da = null, Rr = K, br);
    }
    function RM() {
      for (; Pn !== null && !_c(); )
        l1(Pn);
    }
    function l1(e) {
      var t = e.alternate;
      Xt(e);
      var a;
      (e.mode & rt) !== et ? (PS(e), a = D0(t, e, no), Gm(e, !0)) : a = D0(t, e, no), zn(), e.memoizedProps = e.pendingProps, a === null ? s1(e) : Pn = a, v0.current = null;
    }
    function s1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ea) === Ge) {
          Xt(t);
          var o = void 0;
          if ((t.mode & rt) === et ? o = kT(a, t, no) : (PS(t), o = kT(a, t, no), Gm(t, !1)), zn(), o !== null) {
            Pn = o;
            return;
          }
        } else {
          var s = SD(a, t);
          if (s !== null) {
            s.flags &= ih, Pn = s;
            return;
          }
          if ((t.mode & rt) !== et) {
            Gm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Ea, i.subtreeFlags = Ge, i.deletions = null;
          else {
            br = h0, Pn = null;
            return;
          }
        }
        var m = t.sibling;
        if (m !== null) {
          Pn = m;
          return;
        }
        t = i, Pn = t;
      } while (t !== null);
      br === Qo && (br = XT);
    }
    function oc(e, t, a) {
      var i = Ba(), o = Wr.transition;
      try {
        Wr.transition = null, rr(Or), bM(e, t, a, i);
      } finally {
        Wr.transition = o, rr(i);
      }
      return null;
    }
    function bM(e, t, a, i) {
      do
        qo();
      while (es !== null);
      if (jM(), (It & (Gr | zi)) !== wr)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (Ac(s), o === null)
        return Pd(), null;
      if (s === K && E("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = K, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ut;
      var f = xt(o.lanes, o.childLanes);
      Zd(e, f), e === Da && (Da = null, Pn = null, Rr = K), ((o.subtreeFlags & Fa) !== Ge || (o.flags & Fa) !== Ge) && (ic || (ic = !0, E0 = a, N0(bi, function() {
        return qo(), null;
      })));
      var p = (o.subtreeFlags & (gl | aa | Mr | Fa)) !== Ge, m = (o.flags & (gl | aa | Mr | Fa)) !== Ge;
      if (p || m) {
        var C = Wr.transition;
        Wr.transition = null;
        var T = Ba();
        rr(Or);
        var k = It;
        It |= zi, v0.current = null, RD(e, o), uT(), ID(e, o, s), IR(e.containerInfo), e.current = o, hh(s), FD(o, e, s), El(), lh(), It = k, rr(T), Wr.transition = C;
      } else
        e.current = o, uT();
      var O = ic;
      if (ic ? (ic = !1, es = e, uv = s) : (qf = 0, iy = null), f = e.pendingLanes, f === K && (Gf = null), O || p1(e.current, !1), Xi(o.stateNode, i), yr && e.memoizedUpdaters.clear(), aM(), Ka(e, Nn()), t !== null)
        for (var P = e.onRecoverableError, B = 0; B < t.length; B++) {
          var G = t[B], Le = G.stack, Xe = G.digest;
          P(G.value, {
            componentStack: Le,
            digest: Xe
          });
        }
      if (ry) {
        ry = !1;
        var Ye = g0;
        throw g0 = null, Ye;
      }
      return la(uv, lt) && e.tag !== Yl && qo(), f = e.pendingLanes, la(f, lt) ? (Ax(), e === C0 ? ov++ : (ov = 0, C0 = e)) : ov = 0, $l(), Pd(), null;
    }
    function qo() {
      if (es !== null) {
        var e = zs(uv), t = $y(Ji, e), a = Wr.transition, i = Ba();
        try {
          return Wr.transition = null, rr(t), DM();
        } finally {
          rr(i), Wr.transition = a;
        }
      }
      return !1;
    }
    function xM(e) {
      S0.push(e), ic || (ic = !0, N0(bi, function() {
        return qo(), null;
      }));
    }
    function DM() {
      if (es === null)
        return !1;
      var e = E0;
      E0 = null;
      var t = es, a = uv;
      if (es = null, uv = K, (It & (Gr | zi)) !== wr)
        throw new Error("Cannot flush passive effects while already rendering.");
      T0 = !0, ay = !1, mh(a);
      var i = It;
      It |= zi, QD(t.current), VD(t, t.current, a, e);
      {
        var o = S0;
        S0 = [];
        for (var s = 0; s < o.length; s++) {
          var f = o[s];
          MD(t, f);
        }
      }
      bs(), p1(t.current, !0), It = i, $l(), ay ? t === iy ? qf++ : (qf = 0, iy = t) : qf = 0, T0 = !1, ay = !1, ju(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function c1(e) {
      return Gf !== null && Gf.has(e);
    }
    function MM(e) {
      Gf === null ? Gf = /* @__PURE__ */ new Set([e]) : Gf.add(e);
    }
    function OM(e) {
      ry || (ry = !0, g0 = e);
    }
    var NM = OM;
    function f1(e, t, a) {
      var i = nc(a, t), o = lT(e, i, lt), s = Wl(e, o, lt), f = Ma();
      s !== null && (Oo(s, lt, f), Ka(s, f));
    }
    function Cn(e, t, a) {
      if (CD(a), fv(!1), e.tag === te) {
        f1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === te) {
          f1(i, e, a);
          return;
        } else if (i.tag === Q) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !c1(s)) {
            var f = nc(a, e), p = WS(i, f, lt), m = Wl(i, p, lt), C = Ma();
            m !== null && (Oo(m, lt, C), Ka(m, C));
            return;
          }
        }
        i = i.return;
      }
      E(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function _M(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = Ma();
      Kd(e, a), HM(e), Da === e && Mo(Rr, a) && (br === tv || br === ey && nf(Rr) && Nn() - y0 < KT ? uc(e, K) : ny = xt(ny, a)), Ka(e, o);
    }
    function d1(e, t) {
      t === Ut && (t = fM(e));
      var a = Ma(), i = Ga(e, t);
      i !== null && (Oo(i, t, a), Ka(i, a));
    }
    function kM(e) {
      var t = e.memoizedState, a = Ut;
      t !== null && (a = t.retryLane), d1(e, a);
    }
    function LM(e, t) {
      var a = Ut, i;
      switch (e.tag) {
        case pe:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case tt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), d1(e, a);
    }
    function AM(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : oM(e / 1960) * 1960;
    }
    function zM() {
      if (ov > sM)
        throw ov = 0, C0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      qf > cM && (qf = 0, iy = null, E("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function jM() {
      uu.flushLegacyContextWarning(), uu.flushPendingUnsafeLifecycleWarnings();
    }
    function p1(e, t) {
      Xt(e), cy(e, ra, tM), t && cy(e, go, nM), cy(e, ra, JD), t && cy(e, go, eM), zn();
    }
    function cy(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== Ge ? i = i.child : ((i.flags & t) !== Ge && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var fy = null;
    function v1(e) {
      {
        if ((It & Gr) !== wr || !(e.mode & Nt))
          return;
        var t = e.tag;
        if (t !== W && t !== te && t !== Q && t !== L && t !== Oe && t !== ue && t !== Te)
          return;
        var a = vt(e) || "ReactComponent";
        if (fy !== null) {
          if (fy.has(a))
            return;
          fy.add(a);
        } else
          fy = /* @__PURE__ */ new Set([a]);
        var i = On;
        try {
          Xt(e), E("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Xt(e) : zn();
        }
      }
    }
    var D0;
    {
      var UM = null;
      D0 = function(e, t, a) {
        var i = T1(UM, t);
        try {
          return DT(e, t, a);
        } catch (s) {
          if (Xb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (mm(), zC(), LT(e, t), T1(t, i), t.mode & rt && PS(t), yo(null, DT, null, e, t, a), Iy()) {
            var o = Nd();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var h1 = !1, M0;
    M0 = /* @__PURE__ */ new Set();
    function IM(e) {
      if (Zr && !_x())
        switch (e.tag) {
          case L:
          case Oe:
          case Te: {
            var t = Pn && vt(Pn) || "Unknown", a = t;
            if (!M0.has(a)) {
              M0.add(a);
              var i = vt(e) || "Unknown";
              E("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case Q: {
            h1 || (E("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), h1 = !0);
            break;
          }
        }
    }
    function cv(e, t) {
      if (yr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Jd(e, i, t);
        });
      }
    }
    var O0 = {};
    function N0(e, t) {
      {
        var a = vu.current;
        return a !== null ? (a.push(t), O0) : Nc(e, t);
      }
    }
    function m1(e) {
      if (e !== O0)
        return oh(e);
    }
    function y1() {
      return vu.current !== null;
    }
    function FM(e) {
      {
        if (e.mode & Nt) {
          if (!GT())
            return;
        } else if (!uM() || It !== wr || e.tag !== L && e.tag !== Oe && e.tag !== Te)
          return;
        if (vu.current === null) {
          var t = On;
          try {
            Xt(e), E(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, vt(e));
          } finally {
            t ? Xt(e) : zn();
          }
        }
      }
    }
    function HM(e) {
      e.tag !== Yl && GT() && vu.current === null && E(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function fv(e) {
      e1 = e;
    }
    var ji = null, Xf = null, PM = function(e) {
      ji = e;
    };
    function Kf(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        return t === void 0 ? e : t.current;
      }
    }
    function _0(e) {
      return Kf(e);
    }
    function k0(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Kf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ke,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function g1(e, t) {
      {
        if (ji === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case Q: {
            typeof i == "function" && (o = !0);
            break;
          }
          case L: {
            (typeof i == "function" || s === qe) && (o = !0);
            break;
          }
          case Oe: {
            (s === ke || s === qe) && (o = !0);
            break;
          }
          case ue:
          case Te: {
            (s === Rt || s === qe) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var f = ji(a);
          if (f !== void 0 && f === ji(i))
            return !0;
        }
        return !1;
      }
    }
    function S1(e) {
      {
        if (ji === null || typeof WeakSet != "function")
          return;
        Xf === null && (Xf = /* @__PURE__ */ new WeakSet()), Xf.add(e);
      }
    }
    var VM = function(e, t) {
      {
        if (ji === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        qo(), Go(function() {
          L0(e.current, i, a);
        });
      }
    }, BM = function(e, t) {
      {
        if (e.context !== fi)
          return;
        qo(), Go(function() {
          dv(t, e, null, null);
        });
      }
    };
    function L0(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, f = e.tag, p = e.type, m = null;
        switch (f) {
          case L:
          case Te:
          case Q:
            m = p;
            break;
          case Oe:
            m = p.render;
            break;
        }
        if (ji === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, T = !1;
        if (m !== null) {
          var k = ji(m);
          k !== void 0 && (a.has(k) ? T = !0 : t.has(k) && (f === Q ? T = !0 : C = !0));
        }
        if (Xf !== null && (Xf.has(e) || i !== null && Xf.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || C) {
          var O = Ga(e, lt);
          O !== null && xr(O, e, lt, fn);
        }
        o !== null && !T && L0(o, t, a), s !== null && L0(s, t, a);
      }
    }
    var YM = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return A0(e.current, i, a), a;
      }
    };
    function A0(e, t, a) {
      {
        var i = e.child, o = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case L:
          case Te:
          case Q:
            p = f;
            break;
          case Oe:
            p = f.render;
            break;
        }
        var m = !1;
        p !== null && t.has(p) && (m = !0), m ? $M(e, a) : i !== null && A0(i, t, a), o !== null && A0(o, t, a);
      }
    }
    function $M(e, t) {
      {
        var a = QM(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case J:
              t.add(i.stateNode);
              return;
            case le:
              t.add(i.stateNode.containerInfo);
              return;
            case te:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function QM(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === J)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var z0;
    {
      z0 = !1;
      try {
        var E1 = Object.preventExtensions({});
      } catch {
        z0 = !0;
      }
    }
    function WM(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ge, this.subtreeFlags = Ge, this.deletions = null, this.lanes = K, this.childLanes = K, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !z0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var di = function(e, t, a, i) {
      return new WM(e, t, a, i);
    };
    function j0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function GM(e) {
      return typeof e == "function" && !j0(e) && e.defaultProps === void 0;
    }
    function qM(e) {
      if (typeof e == "function")
        return j0(e) ? Q : L;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ke)
          return Oe;
        if (t === Rt)
          return ue;
      }
      return W;
    }
    function lc(e, t) {
      var a = e.alternate;
      a === null ? (a = di(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ge, a.subtreeFlags = Ge, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & mr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case W:
        case L:
        case Te:
          a.type = Kf(e.type);
          break;
        case Q:
          a.type = _0(e.type);
          break;
        case Oe:
          a.type = k0(e.type);
          break;
      }
      return a;
    }
    function XM(e, t) {
      e.flags &= mr | yn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = K, e.lanes = t, e.child = null, e.subtreeFlags = Ge, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ge, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function KM(e, t, a) {
      var i;
      return e === lm ? (i = Nt, t === !0 && (i |= _n, i |= Pa)) : i = et, yr && (i |= rt), di(te, null, null, i);
    }
    function U0(e, t, a, i, o, s) {
      var f = W, p = e;
      if (typeof e == "function")
        j0(e) ? (f = Q, p = _0(p)) : p = Kf(p);
      else if (typeof e == "string")
        f = J;
      else
        e:
          switch (e) {
            case Sa:
              return rs(a.children, o, s, t);
            case gi:
              f = Re, o |= _n, (o & Nt) !== et && (o |= Pa);
              break;
            case b:
              return ZM(a, o, s, t);
            case Tt:
              return JM(a, o, s, t);
            case jt:
              return eO(a, o, s, t);
            case pn:
              return C1(a, o, s, t);
            case hr:
            case Yn:
            case Si:
            case Jo:
            case dn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case re:
                    f = ze;
                    break e;
                  case ge:
                    f = Ke;
                    break e;
                  case ke:
                    f = Oe, p = k0(p);
                    break e;
                  case Rt:
                    f = ue;
                    break e;
                  case qe:
                    f = mt, p = null;
                    break e;
                }
              var m = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var C = i ? vt(i) : null;
                C && (m += `

Check the render method of \`` + C + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + m));
            }
          }
      var T = di(f, a, t, o);
      return T.elementType = e, T.type = p, T.lanes = s, T._debugOwner = i, T;
    }
    function I0(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, f = e.props, p = U0(o, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function rs(e, t, a, i) {
      var o = di(xe, e, i, t);
      return o.lanes = a, o;
    }
    function ZM(e, t, a, i) {
      typeof e.id != "string" && E('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = di(M, e, i, t | rt);
      return o.elementType = b, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function JM(e, t, a, i) {
      var o = di(pe, e, i, t);
      return o.elementType = Tt, o.lanes = a, o;
    }
    function eO(e, t, a, i) {
      var o = di(tt, e, i, t);
      return o.elementType = jt, o.lanes = a, o;
    }
    function C1(e, t, a, i) {
      var o = di(we, e, i, t);
      o.elementType = pn, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function F0(e, t, a) {
      var i = di(ve, e, null, t);
      return i.lanes = a, i;
    }
    function tO() {
      var e = di(J, null, null, et);
      return e.elementType = "DELETED", e;
    }
    function nO(e) {
      var t = di(at, null, null, et);
      return t.stateNode = e, t;
    }
    function H0(e, t, a) {
      var i = e.children !== null ? e.children : [], o = di(le, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function T1(e, t) {
      return e === null && (e = di(W, null, null, et)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function rO(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Cg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ut, this.eventTimes = af(K), this.expirationTimes = af(fn), this.pendingLanes = K, this.suspendedLanes = K, this.pingedLanes = K, this.expiredLanes = K, this.mutableReadLanes = K, this.finishedLanes = K, this.entangledLanes = K, this.entanglements = af(K), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Sn; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case lm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Yl:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function w1(e, t, a, i, o, s, f, p, m, C) {
      var T = new rO(e, t, a, p, m), k = KM(t, s);
      T.current = k, k.stateNode = T;
      {
        var O = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        k.memoizedState = O;
      }
      return Gg(k), T;
    }
    var P0 = "18.2.0";
    function aO(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Kn(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: jr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var V0, B0;
    V0 = !1, B0 = {};
    function R1(e) {
      if (!e)
        return fi;
      var t = ja(e), a = Pb(t);
      if (t.tag === Q) {
        var i = t.type;
        if (qu(i))
          return XE(t, i, a);
      }
      return a;
    }
    function iO(e, t) {
      {
        var a = ja(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = Ha(a);
        if (o === null)
          return null;
        if (o.mode & _n) {
          var s = vt(a) || "Component";
          if (!B0[s]) {
            B0[s] = !0;
            var f = On;
            try {
              Xt(o), a.mode & _n ? E("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : E("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Xt(f) : zn();
            }
          }
        }
        return o.stateNode;
      }
    }
    function b1(e, t, a, i, o, s, f, p) {
      var m = !1, C = null;
      return w1(e, t, m, C, a, i, o, s, f);
    }
    function x1(e, t, a, i, o, s, f, p, m, C) {
      var T = !0, k = w1(a, i, T, e, o, s, f, p, m);
      k.context = R1(null);
      var O = k.current, P = Ma(), B = ts(O), G = Yo(P, B);
      return G.callback = t ?? null, Wl(O, G, B), dM(k, B, P), k;
    }
    function dv(e, t, a, i) {
      sh(t, e);
      var o = t.current, s = Ma(), f = ts(o);
      Eo(f);
      var p = R1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Zr && On !== null && !V0 && (V0 = !0, E(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, vt(On) || "Unknown"));
      var m = Yo(s, f);
      m.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && E("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), m.callback = i);
      var C = Wl(o, m, f);
      return C !== null && (xr(C, o, f, s), Cm(C, o, f)), f;
    }
    function dy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case J:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function uO(e) {
      switch (e.tag) {
        case te: {
          var t = e.stateNode;
          if (ar(t)) {
            var a = Py(t);
            mM(t, a);
          }
          break;
        }
        case pe: {
          Go(function() {
            var o = Ga(e, lt);
            if (o !== null) {
              var s = Ma();
              xr(o, e, lt, s);
            }
          });
          var i = lt;
          Y0(e, i);
          break;
        }
      }
    }
    function D1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Ch(a.retryLane, t));
    }
    function Y0(e, t) {
      D1(e, t);
      var a = e.alternate;
      a && D1(a, t);
    }
    function oO(e) {
      if (e.tag === pe) {
        var t = Tl, a = Ga(e, t);
        if (a !== null) {
          var i = Ma();
          xr(a, e, t, i);
        }
        Y0(e, t);
      }
    }
    function lO(e) {
      if (e.tag === pe) {
        var t = ts(e), a = Ga(e, t);
        if (a !== null) {
          var i = Ma();
          xr(a, e, t, i);
        }
        Y0(e, t);
      }
    }
    function M1(e) {
      var t = uh(e);
      return t === null ? null : t.stateNode;
    }
    var O1 = function(e) {
      return null;
    };
    function sO(e) {
      return O1(e);
    }
    var N1 = function(e) {
      return !1;
    };
    function cO(e) {
      return N1(e);
    }
    var _1 = null, k1 = null, L1 = null, A1 = null, z1 = null, j1 = null, U1 = null, I1 = null, F1 = null;
    {
      var H1 = function(e, t, a) {
        var i = t[a], o = zt(e) ? e.slice() : Mt({}, e);
        return a + 1 === t.length ? (zt(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = H1(e[i], t, a + 1), o);
      }, P1 = function(e, t) {
        return H1(e, t, 0);
      }, V1 = function(e, t, a, i) {
        var o = t[i], s = zt(e) ? e.slice() : Mt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[o], zt(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = V1(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, B1 = function(e, t, a) {
        if (t.length !== a.length) {
          H("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              H("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return V1(e, t, a, 0);
      }, Y1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = zt(e) ? e.slice() : Mt({}, e);
        return s[o] = Y1(e[o], t, a + 1, i), s;
      }, $1 = function(e, t, a) {
        return Y1(e, t, 0, a);
      }, $0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      _1 = function(e, t, a, i) {
        var o = $0(e, t);
        if (o !== null) {
          var s = $1(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = Mt({}, e.memoizedProps);
          var f = Ga(e, lt);
          f !== null && xr(f, e, lt, fn);
        }
      }, k1 = function(e, t, a) {
        var i = $0(e, t);
        if (i !== null) {
          var o = P1(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = Mt({}, e.memoizedProps);
          var s = Ga(e, lt);
          s !== null && xr(s, e, lt, fn);
        }
      }, L1 = function(e, t, a, i) {
        var o = $0(e, t);
        if (o !== null) {
          var s = B1(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = Mt({}, e.memoizedProps);
          var f = Ga(e, lt);
          f !== null && xr(f, e, lt, fn);
        }
      }, A1 = function(e, t, a) {
        e.pendingProps = $1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ga(e, lt);
        i !== null && xr(i, e, lt, fn);
      }, z1 = function(e, t) {
        e.pendingProps = P1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ga(e, lt);
        a !== null && xr(a, e, lt, fn);
      }, j1 = function(e, t, a) {
        e.pendingProps = B1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ga(e, lt);
        i !== null && xr(i, e, lt, fn);
      }, U1 = function(e) {
        var t = Ga(e, lt);
        t !== null && xr(t, e, lt, fn);
      }, I1 = function(e) {
        O1 = e;
      }, F1 = function(e) {
        N1 = e;
      };
    }
    function fO(e) {
      var t = Ha(e);
      return t === null ? null : t.stateNode;
    }
    function dO(e) {
      return null;
    }
    function pO() {
      return On;
    }
    function vO(e) {
      var t = e.findFiberByHostInstance, a = y.ReactCurrentDispatcher;
      return Fd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: _1,
        overrideHookStateDeletePath: k1,
        overrideHookStateRenamePath: L1,
        overrideProps: A1,
        overridePropsDeletePath: z1,
        overridePropsRenamePath: j1,
        setErrorHandler: I1,
        setSuspenseHandler: F1,
        scheduleUpdate: U1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: fO,
        findFiberByHostInstance: t || dO,
        // React Refresh
        findHostInstancesForRefresh: YM,
        scheduleRefresh: VM,
        scheduleRoot: BM,
        setRefreshHandler: PM,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: pO,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: P0
      });
    }
    var Q1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function Q0(e) {
      this._internalRoot = e;
    }
    py.prototype.render = Q0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? E("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : vy(arguments[1]) ? E("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && E("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== $n) {
          var i = M1(t.current);
          i && i.parentNode !== a && E("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      dv(e, t, null, null);
    }, py.prototype.unmount = Q0.prototype.unmount = function() {
      typeof arguments[0] == "function" && E("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        a1() && E("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Go(function() {
          dv(null, e, null, null);
        }), $E(t);
      }
    };
    function hO(e, t) {
      if (!vy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      W1(e);
      var a = !1, i = !1, o = "", s = Q1;
      t != null && (t.hydrate ? H("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === yi && E(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = b1(e, lm, null, a, i, o, s);
      tm(f.current, e);
      var p = e.nodeType === $n ? e.parentNode : e;
      return Ep(p), new Q0(f);
    }
    function py(e) {
      this._internalRoot = e;
    }
    function mO(e) {
      e && Oh(e);
    }
    py.prototype.unstable_scheduleHydration = mO;
    function yO(e, t, a) {
      if (!vy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      W1(e), t === void 0 && E("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", m = Q1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (m = a.onRecoverableError));
      var C = x1(t, null, e, lm, i, s, f, p, m);
      if (tm(C.current, e), Ep(e), o)
        for (var T = 0; T < o.length; T++) {
          var k = o[T];
          bx(C, k);
        }
      return new py(C);
    }
    function vy(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === ui || e.nodeType === co || !he));
    }
    function pv(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === ui || e.nodeType === co || e.nodeType === $n && e.nodeValue === " react-mount-point-unstable "));
    }
    function W1(e) {
      e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && E("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), _p(e) && (e._reactRootContainer ? E("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : E("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var gO = y.ReactCurrentOwner, G1;
    G1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== $n) {
        var t = M1(e._reactRootContainer.current);
        t && t.parentNode !== e && E("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = W0(e), o = !!(i && Vl(i));
      o && !a && E("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && E("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function W0(e) {
      return e ? e.nodeType === ui ? e.documentElement : e.firstChild : null;
    }
    function q1() {
    }
    function SO(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var O = dy(f);
            s.call(O);
          };
        }
        var f = x1(
          t,
          i,
          e,
          Yl,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          q1
        );
        e._reactRootContainer = f, tm(f.current, e);
        var p = e.nodeType === $n ? e.parentNode : e;
        return Ep(p), Go(), f;
      } else {
        for (var m; m = e.lastChild; )
          e.removeChild(m);
        if (typeof i == "function") {
          var C = i;
          i = function() {
            var O = dy(T);
            C.call(O);
          };
        }
        var T = b1(
          e,
          Yl,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          q1
        );
        e._reactRootContainer = T, tm(T.current, e);
        var k = e.nodeType === $n ? e.parentNode : e;
        return Ep(k), Go(function() {
          dv(t, T, a, i);
        }), T;
      }
    }
    function EO(e, t) {
      e !== null && typeof e != "function" && E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function hy(e, t, a, i, o) {
      G1(a), EO(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = SO(a, t, e, o, i);
      else {
        if (f = s, typeof o == "function") {
          var p = o;
          o = function() {
            var m = dy(f);
            p.call(m);
          };
        }
        dv(t, f, e, o);
      }
      return dy(f);
    }
    function CO(e) {
      {
        var t = gO.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || E("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Vt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ea ? e : iO(e, "findDOMNode");
    }
    function TO(e, t, a) {
      if (E("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !pv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = _p(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return hy(null, e, t, !0, a);
    }
    function wO(e, t, a) {
      if (E("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !pv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = _p(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return hy(null, e, t, !1, a);
    }
    function RO(e, t, a, i) {
      if (E("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !pv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Ts(e))
        throw new Error("parentComponent must be a valid React Component");
      return hy(e, t, a, !1, i);
    }
    function bO(e) {
      if (!pv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = _p(e) && e._reactRootContainer === void 0;
        t && E("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = W0(e), i = a && !Vl(a);
          i && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Go(function() {
          hy(null, null, e, !1, function() {
            e._reactRootContainer = null, $E(e);
          });
        }), !0;
      } else {
        {
          var o = W0(e), s = !!(o && Vl(o)), f = e.nodeType === ea && pv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    je(uO), wh(oO), Us(lO), np(Ba), bh(As), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && E("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), rh(MR), bc(R0, yM, Go);
    function xO(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!vy(t))
        throw new Error("Target container is not a DOM element.");
      return aO(e, t, null, a);
    }
    function DO(e, t, a, i) {
      return RO(e, t, a, i);
    }
    var G0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Vl, Mf, nm, Rc, Ss, R0]
    };
    function MO(e, t) {
      return G0.usingClientEntryPoint || E('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), hO(e, t);
    }
    function OO(e, t, a) {
      return G0.usingClientEntryPoint || E('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), yO(e, t, a);
    }
    function NO(e) {
      return a1() && E("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Go(e);
    }
    var _O = vO({
      findFiberByHostInstance: Ws,
      bundleType: 1,
      version: P0,
      rendererPackageName: "react-dom"
    });
    if (!_O && Jt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var X1 = window.location.protocol;
      /^(https?|file):$/.test(X1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (X1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ja.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G0, Ja.createPortal = xO, Ja.createRoot = MO, Ja.findDOMNode = CO, Ja.flushSync = NO, Ja.hydrate = TO, Ja.hydrateRoot = OO, Ja.render = wO, Ja.unmountComponentAtNode = bO, Ja.unstable_batchedUpdates = R0, Ja.unstable_renderSubtreeIntoContainer = DO, Ja.version = P0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ja;
}
function xw() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xw);
    } catch (v) {
      console.error(v);
    }
  }
}
process.env.NODE_ENV === "production" ? (xw(), rE.exports = VO()) : rE.exports = BO();
var YO = rE.exports, yv = YO;
if (process.env.NODE_ENV === "production")
  Ev.createRoot = yv.createRoot, Ev.hydrateRoot = yv.hydrateRoot;
else {
  var yy = yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Ev.createRoot = function(v, h) {
    yy.usingClientEntryPoint = !0;
    try {
      return yv.createRoot(v, h);
    } finally {
      yy.usingClientEntryPoint = !1;
    }
  }, Ev.hydrateRoot = function(v, h, y) {
    yy.usingClientEntryPoint = !0;
    try {
      return yv.hydrateRoot(v, h, y);
    } finally {
      yy.usingClientEntryPoint = !1;
    }
  };
}
var ei = "top", Ii = "bottom", Fi = "right", ti = "left", sE = "auto", Mv = [ei, Ii, Fi, ti], td = "start", Rv = "end", $O = "clippingParents", Dw = "viewport", gv = "popper", QO = "reference", uw = /* @__PURE__ */ Mv.reduce(function(v, h) {
  return v.concat([h + "-" + td, h + "-" + Rv]);
}, []), Mw = /* @__PURE__ */ [].concat(Mv, [sE]).reduce(function(v, h) {
  return v.concat([h, h + "-" + td, h + "-" + Rv]);
}, []), WO = "beforeRead", GO = "read", qO = "afterRead", XO = "beforeMain", KO = "main", ZO = "afterMain", JO = "beforeWrite", eN = "write", tN = "afterWrite", nN = [WO, GO, qO, XO, KO, ZO, JO, eN, tN];
function uo(v) {
  return v ? (v.nodeName || "").toLowerCase() : null;
}
function hi(v) {
  if (v == null)
    return window;
  if (v.toString() !== "[object Window]") {
    var h = v.ownerDocument;
    return h && h.defaultView || window;
  }
  return v;
}
function fc(v) {
  var h = hi(v).Element;
  return v instanceof h || v instanceof Element;
}
function Ui(v) {
  var h = hi(v).HTMLElement;
  return v instanceof h || v instanceof HTMLElement;
}
function cE(v) {
  if (typeof ShadowRoot > "u")
    return !1;
  var h = hi(v).ShadowRoot;
  return v instanceof h || v instanceof ShadowRoot;
}
function rN(v) {
  var h = v.state;
  Object.keys(h.elements).forEach(function(y) {
    var N = h.styles[y] || {}, A = h.attributes[y] || {}, H = h.elements[y];
    !Ui(H) || !uo(H) || (Object.assign(H.style, N), Object.keys(A).forEach(function(E) {
      var X = A[E];
      X === !1 ? H.removeAttribute(E) : H.setAttribute(E, X === !0 ? "" : X);
    }));
  });
}
function aN(v) {
  var h = v.state, y = {
    popper: {
      position: h.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(h.elements.popper.style, y.popper), h.styles = y, h.elements.arrow && Object.assign(h.elements.arrow.style, y.arrow), function() {
    Object.keys(h.elements).forEach(function(N) {
      var A = h.elements[N], H = h.attributes[N] || {}, E = Object.keys(h.styles.hasOwnProperty(N) ? h.styles[N] : y[N]), X = E.reduce(function(L, Q) {
        return L[Q] = "", L;
      }, {});
      !Ui(A) || !uo(A) || (Object.assign(A.style, X), Object.keys(H).forEach(function(L) {
        A.removeAttribute(L);
      }));
    });
  };
}
const Ow = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: rN,
  effect: aN,
  requires: ["computeStyles"]
};
function io(v) {
  return v.split("-")[0];
}
var cc = Math.max, Cy = Math.min, nd = Math.round;
function aE() {
  var v = navigator.userAgentData;
  return v != null && v.brands && Array.isArray(v.brands) ? v.brands.map(function(h) {
    return h.brand + "/" + h.version;
  }).join(" ") : navigator.userAgent;
}
function Nw() {
  return !/^((?!chrome|android).)*safari/i.test(aE());
}
function rd(v, h, y) {
  h === void 0 && (h = !1), y === void 0 && (y = !1);
  var N = v.getBoundingClientRect(), A = 1, H = 1;
  h && Ui(v) && (A = v.offsetWidth > 0 && nd(N.width) / v.offsetWidth || 1, H = v.offsetHeight > 0 && nd(N.height) / v.offsetHeight || 1);
  var E = fc(v) ? hi(v) : window, X = E.visualViewport, L = !Nw() && y, Q = (N.left + (L && X ? X.offsetLeft : 0)) / A, W = (N.top + (L && X ? X.offsetTop : 0)) / H, te = N.width / A, le = N.height / H;
  return {
    width: te,
    height: le,
    top: W,
    right: Q + te,
    bottom: W + le,
    left: Q,
    x: Q,
    y: W
  };
}
function fE(v) {
  var h = rd(v), y = v.offsetWidth, N = v.offsetHeight;
  return Math.abs(h.width - y) <= 1 && (y = h.width), Math.abs(h.height - N) <= 1 && (N = h.height), {
    x: v.offsetLeft,
    y: v.offsetTop,
    width: y,
    height: N
  };
}
function _w(v, h) {
  var y = h.getRootNode && h.getRootNode();
  if (v.contains(h))
    return !0;
  if (y && cE(y)) {
    var N = h;
    do {
      if (N && v.isSameNode(N))
        return !0;
      N = N.parentNode || N.host;
    } while (N);
  }
  return !1;
}
function Zo(v) {
  return hi(v).getComputedStyle(v);
}
function iN(v) {
  return ["table", "td", "th"].indexOf(uo(v)) >= 0;
}
function as(v) {
  return ((fc(v) ? v.ownerDocument : (
    // $FlowFixMe[prop-missing]
    v.document
  )) || window.document).documentElement;
}
function wy(v) {
  return uo(v) === "html" ? v : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    v.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    v.parentNode || // DOM Element detected
    (cE(v) ? v.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    as(v)
  );
}
function ow(v) {
  return !Ui(v) || // https://github.com/popperjs/popper-core/issues/837
  Zo(v).position === "fixed" ? null : v.offsetParent;
}
function uN(v) {
  var h = /firefox/i.test(aE()), y = /Trident/i.test(aE());
  if (y && Ui(v)) {
    var N = Zo(v);
    if (N.position === "fixed")
      return null;
  }
  var A = wy(v);
  for (cE(A) && (A = A.host); Ui(A) && ["html", "body"].indexOf(uo(A)) < 0; ) {
    var H = Zo(A);
    if (H.transform !== "none" || H.perspective !== "none" || H.contain === "paint" || ["transform", "perspective"].indexOf(H.willChange) !== -1 || h && H.willChange === "filter" || h && H.filter && H.filter !== "none")
      return A;
    A = A.parentNode;
  }
  return null;
}
function Ov(v) {
  for (var h = hi(v), y = ow(v); y && iN(y) && Zo(y).position === "static"; )
    y = ow(y);
  return y && (uo(y) === "html" || uo(y) === "body" && Zo(y).position === "static") ? h : y || uN(v) || h;
}
function dE(v) {
  return ["top", "bottom"].indexOf(v) >= 0 ? "x" : "y";
}
function Cv(v, h, y) {
  return cc(v, Cy(h, y));
}
function oN(v, h, y) {
  var N = Cv(v, h, y);
  return N > y ? y : N;
}
function kw() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Lw(v) {
  return Object.assign({}, kw(), v);
}
function Aw(v, h) {
  return h.reduce(function(y, N) {
    return y[N] = v, y;
  }, {});
}
var lN = function(h, y) {
  return h = typeof h == "function" ? h(Object.assign({}, y.rects, {
    placement: y.placement
  })) : h, Lw(typeof h != "number" ? h : Aw(h, Mv));
};
function sN(v) {
  var h, y = v.state, N = v.name, A = v.options, H = y.elements.arrow, E = y.modifiersData.popperOffsets, X = io(y.placement), L = dE(X), Q = [ti, Fi].indexOf(X) >= 0, W = Q ? "height" : "width";
  if (!(!H || !E)) {
    var te = lN(A.padding, y), le = fE(H), J = L === "y" ? ei : ti, ve = L === "y" ? Ii : Fi, xe = y.rects.reference[W] + y.rects.reference[L] - E[L] - y.rects.popper[W], Re = E[L] - y.rects.reference[L], Ke = Ov(H), ze = Ke ? L === "y" ? Ke.clientHeight || 0 : Ke.clientWidth || 0 : 0, Oe = xe / 2 - Re / 2, M = te[J], pe = ze - le[W] - te[ve], ue = ze / 2 - le[W] / 2 + Oe, Te = Cv(M, ue, pe), mt = L;
    y.modifiersData[N] = (h = {}, h[mt] = Te, h.centerOffset = Te - ue, h);
  }
}
function cN(v) {
  var h = v.state, y = v.options, N = y.element, A = N === void 0 ? "[data-popper-arrow]" : N;
  A != null && (typeof A == "string" && (A = h.elements.popper.querySelector(A), !A) || _w(h.elements.popper, A) && (h.elements.arrow = A));
}
const fN = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: sN,
  effect: cN,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ad(v) {
  return v.split("-")[1];
}
var dN = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function pN(v, h) {
  var y = v.x, N = v.y, A = h.devicePixelRatio || 1;
  return {
    x: nd(y * A) / A || 0,
    y: nd(N * A) / A || 0
  };
}
function lw(v) {
  var h, y = v.popper, N = v.popperRect, A = v.placement, H = v.variation, E = v.offsets, X = v.position, L = v.gpuAcceleration, Q = v.adaptive, W = v.roundOffsets, te = v.isFixed, le = E.x, J = le === void 0 ? 0 : le, ve = E.y, xe = ve === void 0 ? 0 : ve, Re = typeof W == "function" ? W({
    x: J,
    y: xe
  }) : {
    x: J,
    y: xe
  };
  J = Re.x, xe = Re.y;
  var Ke = E.hasOwnProperty("x"), ze = E.hasOwnProperty("y"), Oe = ti, M = ei, pe = window;
  if (Q) {
    var ue = Ov(y), Te = "clientHeight", mt = "clientWidth";
    if (ue === hi(y) && (ue = as(y), Zo(ue).position !== "static" && X === "absolute" && (Te = "scrollHeight", mt = "scrollWidth")), ue = ue, A === ei || (A === ti || A === Fi) && H === Rv) {
      M = Ii;
      var Dt = te && ue === pe && pe.visualViewport ? pe.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        ue[Te]
      );
      xe -= Dt - N.height, xe *= L ? 1 : -1;
    }
    if (A === ti || (A === ei || A === Ii) && H === Rv) {
      Oe = Fi;
      var at = te && ue === pe && pe.visualViewport ? pe.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        ue[mt]
      );
      J -= at - N.width, J *= L ? 1 : -1;
    }
  }
  var tt = Object.assign({
    position: X
  }, Q && dN), yt = W === !0 ? pN({
    x: J,
    y: xe
  }, hi(y)) : {
    x: J,
    y: xe
  };
  if (J = yt.x, xe = yt.y, L) {
    var we;
    return Object.assign({}, tt, (we = {}, we[M] = ze ? "0" : "", we[Oe] = Ke ? "0" : "", we.transform = (pe.devicePixelRatio || 1) <= 1 ? "translate(" + J + "px, " + xe + "px)" : "translate3d(" + J + "px, " + xe + "px, 0)", we));
  }
  return Object.assign({}, tt, (h = {}, h[M] = ze ? xe + "px" : "", h[Oe] = Ke ? J + "px" : "", h.transform = "", h));
}
function vN(v) {
  var h = v.state, y = v.options, N = y.gpuAcceleration, A = N === void 0 ? !0 : N, H = y.adaptive, E = H === void 0 ? !0 : H, X = y.roundOffsets, L = X === void 0 ? !0 : X, Q = {
    placement: io(h.placement),
    variation: ad(h.placement),
    popper: h.elements.popper,
    popperRect: h.rects.popper,
    gpuAcceleration: A,
    isFixed: h.options.strategy === "fixed"
  };
  h.modifiersData.popperOffsets != null && (h.styles.popper = Object.assign({}, h.styles.popper, lw(Object.assign({}, Q, {
    offsets: h.modifiersData.popperOffsets,
    position: h.options.strategy,
    adaptive: E,
    roundOffsets: L
  })))), h.modifiersData.arrow != null && (h.styles.arrow = Object.assign({}, h.styles.arrow, lw(Object.assign({}, Q, {
    offsets: h.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: L
  })))), h.attributes.popper = Object.assign({}, h.attributes.popper, {
    "data-popper-placement": h.placement
  });
}
const hN = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: vN,
  data: {}
};
var gy = {
  passive: !0
};
function mN(v) {
  var h = v.state, y = v.instance, N = v.options, A = N.scroll, H = A === void 0 ? !0 : A, E = N.resize, X = E === void 0 ? !0 : E, L = hi(h.elements.popper), Q = [].concat(h.scrollParents.reference, h.scrollParents.popper);
  return H && Q.forEach(function(W) {
    W.addEventListener("scroll", y.update, gy);
  }), X && L.addEventListener("resize", y.update, gy), function() {
    H && Q.forEach(function(W) {
      W.removeEventListener("scroll", y.update, gy);
    }), X && L.removeEventListener("resize", y.update, gy);
  };
}
const yN = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: mN,
  data: {}
};
var gN = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ey(v) {
  return v.replace(/left|right|bottom|top/g, function(h) {
    return gN[h];
  });
}
var SN = {
  start: "end",
  end: "start"
};
function sw(v) {
  return v.replace(/start|end/g, function(h) {
    return SN[h];
  });
}
function pE(v) {
  var h = hi(v), y = h.pageXOffset, N = h.pageYOffset;
  return {
    scrollLeft: y,
    scrollTop: N
  };
}
function vE(v) {
  return rd(as(v)).left + pE(v).scrollLeft;
}
function EN(v, h) {
  var y = hi(v), N = as(v), A = y.visualViewport, H = N.clientWidth, E = N.clientHeight, X = 0, L = 0;
  if (A) {
    H = A.width, E = A.height;
    var Q = Nw();
    (Q || !Q && h === "fixed") && (X = A.offsetLeft, L = A.offsetTop);
  }
  return {
    width: H,
    height: E,
    x: X + vE(v),
    y: L
  };
}
function CN(v) {
  var h, y = as(v), N = pE(v), A = (h = v.ownerDocument) == null ? void 0 : h.body, H = cc(y.scrollWidth, y.clientWidth, A ? A.scrollWidth : 0, A ? A.clientWidth : 0), E = cc(y.scrollHeight, y.clientHeight, A ? A.scrollHeight : 0, A ? A.clientHeight : 0), X = -N.scrollLeft + vE(v), L = -N.scrollTop;
  return Zo(A || y).direction === "rtl" && (X += cc(y.clientWidth, A ? A.clientWidth : 0) - H), {
    width: H,
    height: E,
    x: X,
    y: L
  };
}
function hE(v) {
  var h = Zo(v), y = h.overflow, N = h.overflowX, A = h.overflowY;
  return /auto|scroll|overlay|hidden/.test(y + A + N);
}
function zw(v) {
  return ["html", "body", "#document"].indexOf(uo(v)) >= 0 ? v.ownerDocument.body : Ui(v) && hE(v) ? v : zw(wy(v));
}
function Tv(v, h) {
  var y;
  h === void 0 && (h = []);
  var N = zw(v), A = N === ((y = v.ownerDocument) == null ? void 0 : y.body), H = hi(N), E = A ? [H].concat(H.visualViewport || [], hE(N) ? N : []) : N, X = h.concat(E);
  return A ? X : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    X.concat(Tv(wy(E)))
  );
}
function iE(v) {
  return Object.assign({}, v, {
    left: v.x,
    top: v.y,
    right: v.x + v.width,
    bottom: v.y + v.height
  });
}
function TN(v, h) {
  var y = rd(v, !1, h === "fixed");
  return y.top = y.top + v.clientTop, y.left = y.left + v.clientLeft, y.bottom = y.top + v.clientHeight, y.right = y.left + v.clientWidth, y.width = v.clientWidth, y.height = v.clientHeight, y.x = y.left, y.y = y.top, y;
}
function cw(v, h, y) {
  return h === Dw ? iE(EN(v, y)) : fc(h) ? TN(h, y) : iE(CN(as(v)));
}
function wN(v) {
  var h = Tv(wy(v)), y = ["absolute", "fixed"].indexOf(Zo(v).position) >= 0, N = y && Ui(v) ? Ov(v) : v;
  return fc(N) ? h.filter(function(A) {
    return fc(A) && _w(A, N) && uo(A) !== "body";
  }) : [];
}
function RN(v, h, y, N) {
  var A = h === "clippingParents" ? wN(v) : [].concat(h), H = [].concat(A, [y]), E = H[0], X = H.reduce(function(L, Q) {
    var W = cw(v, Q, N);
    return L.top = cc(W.top, L.top), L.right = Cy(W.right, L.right), L.bottom = Cy(W.bottom, L.bottom), L.left = cc(W.left, L.left), L;
  }, cw(v, E, N));
  return X.width = X.right - X.left, X.height = X.bottom - X.top, X.x = X.left, X.y = X.top, X;
}
function jw(v) {
  var h = v.reference, y = v.element, N = v.placement, A = N ? io(N) : null, H = N ? ad(N) : null, E = h.x + h.width / 2 - y.width / 2, X = h.y + h.height / 2 - y.height / 2, L;
  switch (A) {
    case ei:
      L = {
        x: E,
        y: h.y - y.height
      };
      break;
    case Ii:
      L = {
        x: E,
        y: h.y + h.height
      };
      break;
    case Fi:
      L = {
        x: h.x + h.width,
        y: X
      };
      break;
    case ti:
      L = {
        x: h.x - y.width,
        y: X
      };
      break;
    default:
      L = {
        x: h.x,
        y: h.y
      };
  }
  var Q = A ? dE(A) : null;
  if (Q != null) {
    var W = Q === "y" ? "height" : "width";
    switch (H) {
      case td:
        L[Q] = L[Q] - (h[W] / 2 - y[W] / 2);
        break;
      case Rv:
        L[Q] = L[Q] + (h[W] / 2 - y[W] / 2);
        break;
    }
  }
  return L;
}
function bv(v, h) {
  h === void 0 && (h = {});
  var y = h, N = y.placement, A = N === void 0 ? v.placement : N, H = y.strategy, E = H === void 0 ? v.strategy : H, X = y.boundary, L = X === void 0 ? $O : X, Q = y.rootBoundary, W = Q === void 0 ? Dw : Q, te = y.elementContext, le = te === void 0 ? gv : te, J = y.altBoundary, ve = J === void 0 ? !1 : J, xe = y.padding, Re = xe === void 0 ? 0 : xe, Ke = Lw(typeof Re != "number" ? Re : Aw(Re, Mv)), ze = le === gv ? QO : gv, Oe = v.rects.popper, M = v.elements[ve ? ze : le], pe = RN(fc(M) ? M : M.contextElement || as(v.elements.popper), L, W, E), ue = rd(v.elements.reference), Te = jw({
    reference: ue,
    element: Oe,
    strategy: "absolute",
    placement: A
  }), mt = iE(Object.assign({}, Oe, Te)), Dt = le === gv ? mt : ue, at = {
    top: pe.top - Dt.top + Ke.top,
    bottom: Dt.bottom - pe.bottom + Ke.bottom,
    left: pe.left - Dt.left + Ke.left,
    right: Dt.right - pe.right + Ke.right
  }, tt = v.modifiersData.offset;
  if (le === gv && tt) {
    var yt = tt[A];
    Object.keys(at).forEach(function(we) {
      var $e = [Fi, Ii].indexOf(we) >= 0 ? 1 : -1, Et = [ei, Ii].indexOf(we) >= 0 ? "y" : "x";
      at[we] += yt[Et] * $e;
    });
  }
  return at;
}
function bN(v, h) {
  h === void 0 && (h = {});
  var y = h, N = y.placement, A = y.boundary, H = y.rootBoundary, E = y.padding, X = y.flipVariations, L = y.allowedAutoPlacements, Q = L === void 0 ? Mw : L, W = ad(N), te = W ? X ? uw : uw.filter(function(ve) {
    return ad(ve) === W;
  }) : Mv, le = te.filter(function(ve) {
    return Q.indexOf(ve) >= 0;
  });
  le.length === 0 && (le = te);
  var J = le.reduce(function(ve, xe) {
    return ve[xe] = bv(v, {
      placement: xe,
      boundary: A,
      rootBoundary: H,
      padding: E
    })[io(xe)], ve;
  }, {});
  return Object.keys(J).sort(function(ve, xe) {
    return J[ve] - J[xe];
  });
}
function xN(v) {
  if (io(v) === sE)
    return [];
  var h = Ey(v);
  return [sw(v), h, sw(h)];
}
function DN(v) {
  var h = v.state, y = v.options, N = v.name;
  if (!h.modifiersData[N]._skip) {
    for (var A = y.mainAxis, H = A === void 0 ? !0 : A, E = y.altAxis, X = E === void 0 ? !0 : E, L = y.fallbackPlacements, Q = y.padding, W = y.boundary, te = y.rootBoundary, le = y.altBoundary, J = y.flipVariations, ve = J === void 0 ? !0 : J, xe = y.allowedAutoPlacements, Re = h.options.placement, Ke = io(Re), ze = Ke === Re, Oe = L || (ze || !ve ? [Ey(Re)] : xN(Re)), M = [Re].concat(Oe).reduce(function(Pe, pt) {
      return Pe.concat(io(pt) === sE ? bN(h, {
        placement: pt,
        boundary: W,
        rootBoundary: te,
        padding: Q,
        flipVariations: ve,
        allowedAutoPlacements: xe
      }) : pt);
    }, []), pe = h.rects.reference, ue = h.rects.popper, Te = /* @__PURE__ */ new Map(), mt = !0, Dt = M[0], at = 0; at < M.length; at++) {
      var tt = M[at], yt = io(tt), we = ad(tt) === td, $e = [ei, Ii].indexOf(yt) >= 0, Et = $e ? "width" : "height", it = bv(h, {
        placement: tt,
        boundary: W,
        rootBoundary: te,
        altBoundary: le,
        padding: Q
      }), ye = $e ? we ? Fi : ti : we ? Ii : ei;
      pe[Et] > ue[Et] && (ye = Ey(ye));
      var ne = Ey(ye), Ne = [];
      if (H && Ne.push(it[yt] <= 0), X && Ne.push(it[ye] <= 0, it[ne] <= 0), Ne.every(function(Pe) {
        return Pe;
      })) {
        Dt = tt, mt = !1;
        break;
      }
      Te.set(tt, Ne);
    }
    if (mt)
      for (var x = ve ? 3 : 1, Z = function(pt) {
        var ut = M.find(function(Ct) {
          var ot = Te.get(Ct);
          if (ot)
            return ot.slice(0, pt).every(function(_t) {
              return _t;
            });
        });
        if (ut)
          return Dt = ut, "break";
      }, he = x; he > 0; he--) {
        var We = Z(he);
        if (We === "break")
          break;
      }
    h.placement !== Dt && (h.modifiersData[N]._skip = !0, h.placement = Dt, h.reset = !0);
  }
}
const MN = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: DN,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function fw(v, h, y) {
  return y === void 0 && (y = {
    x: 0,
    y: 0
  }), {
    top: v.top - h.height - y.y,
    right: v.right - h.width + y.x,
    bottom: v.bottom - h.height + y.y,
    left: v.left - h.width - y.x
  };
}
function dw(v) {
  return [ei, Fi, Ii, ti].some(function(h) {
    return v[h] >= 0;
  });
}
function ON(v) {
  var h = v.state, y = v.name, N = h.rects.reference, A = h.rects.popper, H = h.modifiersData.preventOverflow, E = bv(h, {
    elementContext: "reference"
  }), X = bv(h, {
    altBoundary: !0
  }), L = fw(E, N), Q = fw(X, A, H), W = dw(L), te = dw(Q);
  h.modifiersData[y] = {
    referenceClippingOffsets: L,
    popperEscapeOffsets: Q,
    isReferenceHidden: W,
    hasPopperEscaped: te
  }, h.attributes.popper = Object.assign({}, h.attributes.popper, {
    "data-popper-reference-hidden": W,
    "data-popper-escaped": te
  });
}
const NN = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: ON
};
function _N(v, h, y) {
  var N = io(v), A = [ti, ei].indexOf(N) >= 0 ? -1 : 1, H = typeof y == "function" ? y(Object.assign({}, h, {
    placement: v
  })) : y, E = H[0], X = H[1];
  return E = E || 0, X = (X || 0) * A, [ti, Fi].indexOf(N) >= 0 ? {
    x: X,
    y: E
  } : {
    x: E,
    y: X
  };
}
function kN(v) {
  var h = v.state, y = v.options, N = v.name, A = y.offset, H = A === void 0 ? [0, 0] : A, E = Mw.reduce(function(W, te) {
    return W[te] = _N(te, h.rects, H), W;
  }, {}), X = E[h.placement], L = X.x, Q = X.y;
  h.modifiersData.popperOffsets != null && (h.modifiersData.popperOffsets.x += L, h.modifiersData.popperOffsets.y += Q), h.modifiersData[N] = E;
}
const LN = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: kN
};
function AN(v) {
  var h = v.state, y = v.name;
  h.modifiersData[y] = jw({
    reference: h.rects.reference,
    element: h.rects.popper,
    strategy: "absolute",
    placement: h.placement
  });
}
const zN = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: AN,
  data: {}
};
function jN(v) {
  return v === "x" ? "y" : "x";
}
function UN(v) {
  var h = v.state, y = v.options, N = v.name, A = y.mainAxis, H = A === void 0 ? !0 : A, E = y.altAxis, X = E === void 0 ? !1 : E, L = y.boundary, Q = y.rootBoundary, W = y.altBoundary, te = y.padding, le = y.tether, J = le === void 0 ? !0 : le, ve = y.tetherOffset, xe = ve === void 0 ? 0 : ve, Re = bv(h, {
    boundary: L,
    rootBoundary: Q,
    padding: te,
    altBoundary: W
  }), Ke = io(h.placement), ze = ad(h.placement), Oe = !ze, M = dE(Ke), pe = jN(M), ue = h.modifiersData.popperOffsets, Te = h.rects.reference, mt = h.rects.popper, Dt = typeof xe == "function" ? xe(Object.assign({}, h.rects, {
    placement: h.placement
  })) : xe, at = typeof Dt == "number" ? {
    mainAxis: Dt,
    altAxis: Dt
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, Dt), tt = h.modifiersData.offset ? h.modifiersData.offset[h.placement] : null, yt = {
    x: 0,
    y: 0
  };
  if (ue) {
    if (H) {
      var we, $e = M === "y" ? ei : ti, Et = M === "y" ? Ii : Fi, it = M === "y" ? "height" : "width", ye = ue[M], ne = ye + Re[$e], Ne = ye - Re[Et], x = J ? -mt[it] / 2 : 0, Z = ze === td ? Te[it] : mt[it], he = ze === td ? -mt[it] : -Te[it], We = h.elements.arrow, Pe = J && We ? fE(We) : {
        width: 0,
        height: 0
      }, pt = h.modifiersData["arrow#persistent"] ? h.modifiersData["arrow#persistent"].padding : kw(), ut = pt[$e], Ct = pt[Et], ot = Cv(0, Te[it], Pe[it]), _t = Oe ? Te[it] / 2 - x - ot - ut - at.mainAxis : Z - ot - ut - at.mainAxis, xn = Oe ? -Te[it] / 2 + x + ot + Ct + at.mainAxis : he + ot + Ct + at.mainAxis, Dn = h.elements.arrow && Ov(h.elements.arrow), qn = Dn ? M === "y" ? Dn.clientTop || 0 : Dn.clientLeft || 0 : 0, Jt = (we = tt == null ? void 0 : tt[M]) != null ? we : 0, Mn = ye + _t - Jt - qn, Tn = ye + xn - Jt, hn = Cv(J ? Cy(ne, Mn) : ne, ye, J ? cc(Ne, Tn) : Ne);
      ue[M] = hn, yt[M] = hn - ye;
    }
    if (X) {
      var on, Xn = M === "x" ? ei : ti, Kn = M === "x" ? Ii : Fi, tn = ue[pe], mn = pe === "y" ? "height" : "width", Vn = tn + Re[Xn], wn = tn - Re[Kn], Zn = [ei, ti].indexOf(Ke) !== -1, An = (on = tt == null ? void 0 : tt[pe]) != null ? on : 0, Jn = Zn ? Vn : tn - Te[mn] - mt[mn] - An + at.altAxis, nn = Zn ? tn + Te[mn] + mt[mn] - An - at.altAxis : wn, Bn = J && Zn ? oN(Jn, tn, nn) : Cv(J ? Jn : Vn, tn, J ? nn : wn);
      ue[pe] = Bn, yt[pe] = Bn - tn;
    }
    h.modifiersData[N] = yt;
  }
}
const IN = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: UN,
  requiresIfExists: ["offset"]
};
function FN(v) {
  return {
    scrollLeft: v.scrollLeft,
    scrollTop: v.scrollTop
  };
}
function HN(v) {
  return v === hi(v) || !Ui(v) ? pE(v) : FN(v);
}
function PN(v) {
  var h = v.getBoundingClientRect(), y = nd(h.width) / v.offsetWidth || 1, N = nd(h.height) / v.offsetHeight || 1;
  return y !== 1 || N !== 1;
}
function VN(v, h, y) {
  y === void 0 && (y = !1);
  var N = Ui(h), A = Ui(h) && PN(h), H = as(h), E = rd(v, A, y), X = {
    scrollLeft: 0,
    scrollTop: 0
  }, L = {
    x: 0,
    y: 0
  };
  return (N || !N && !y) && ((uo(h) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  hE(H)) && (X = HN(h)), Ui(h) ? (L = rd(h, !0), L.x += h.clientLeft, L.y += h.clientTop) : H && (L.x = vE(H))), {
    x: E.left + X.scrollLeft - L.x,
    y: E.top + X.scrollTop - L.y,
    width: E.width,
    height: E.height
  };
}
function BN(v) {
  var h = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Set(), N = [];
  v.forEach(function(H) {
    h.set(H.name, H);
  });
  function A(H) {
    y.add(H.name);
    var E = [].concat(H.requires || [], H.requiresIfExists || []);
    E.forEach(function(X) {
      if (!y.has(X)) {
        var L = h.get(X);
        L && A(L);
      }
    }), N.push(H);
  }
  return v.forEach(function(H) {
    y.has(H.name) || A(H);
  }), N;
}
function YN(v) {
  var h = BN(v);
  return nN.reduce(function(y, N) {
    return y.concat(h.filter(function(A) {
      return A.phase === N;
    }));
  }, []);
}
function $N(v) {
  var h;
  return function() {
    return h || (h = new Promise(function(y) {
      Promise.resolve().then(function() {
        h = void 0, y(v());
      });
    })), h;
  };
}
function QN(v) {
  var h = v.reduce(function(y, N) {
    var A = y[N.name];
    return y[N.name] = A ? Object.assign({}, A, N, {
      options: Object.assign({}, A.options, N.options),
      data: Object.assign({}, A.data, N.data)
    }) : N, y;
  }, {});
  return Object.keys(h).map(function(y) {
    return h[y];
  });
}
var pw = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function vw() {
  for (var v = arguments.length, h = new Array(v), y = 0; y < v; y++)
    h[y] = arguments[y];
  return !h.some(function(N) {
    return !(N && typeof N.getBoundingClientRect == "function");
  });
}
function WN(v) {
  v === void 0 && (v = {});
  var h = v, y = h.defaultModifiers, N = y === void 0 ? [] : y, A = h.defaultOptions, H = A === void 0 ? pw : A;
  return function(X, L, Q) {
    Q === void 0 && (Q = H);
    var W = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, pw, H),
      modifiersData: {},
      elements: {
        reference: X,
        popper: L
      },
      attributes: {},
      styles: {}
    }, te = [], le = !1, J = {
      state: W,
      setOptions: function(Ke) {
        var ze = typeof Ke == "function" ? Ke(W.options) : Ke;
        xe(), W.options = Object.assign({}, H, W.options, ze), W.scrollParents = {
          reference: fc(X) ? Tv(X) : X.contextElement ? Tv(X.contextElement) : [],
          popper: Tv(L)
        };
        var Oe = YN(QN([].concat(N, W.options.modifiers)));
        return W.orderedModifiers = Oe.filter(function(M) {
          return M.enabled;
        }), ve(), J.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!le) {
          var Ke = W.elements, ze = Ke.reference, Oe = Ke.popper;
          if (vw(ze, Oe)) {
            W.rects = {
              reference: VN(ze, Ov(Oe), W.options.strategy === "fixed"),
              popper: fE(Oe)
            }, W.reset = !1, W.placement = W.options.placement, W.orderedModifiers.forEach(function(at) {
              return W.modifiersData[at.name] = Object.assign({}, at.data);
            });
            for (var M = 0; M < W.orderedModifiers.length; M++) {
              if (W.reset === !0) {
                W.reset = !1, M = -1;
                continue;
              }
              var pe = W.orderedModifiers[M], ue = pe.fn, Te = pe.options, mt = Te === void 0 ? {} : Te, Dt = pe.name;
              typeof ue == "function" && (W = ue({
                state: W,
                options: mt,
                name: Dt,
                instance: J
              }) || W);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: $N(function() {
        return new Promise(function(Re) {
          J.forceUpdate(), Re(W);
        });
      }),
      destroy: function() {
        xe(), le = !0;
      }
    };
    if (!vw(X, L))
      return J;
    J.setOptions(Q).then(function(Re) {
      !le && Q.onFirstUpdate && Q.onFirstUpdate(Re);
    });
    function ve() {
      W.orderedModifiers.forEach(function(Re) {
        var Ke = Re.name, ze = Re.options, Oe = ze === void 0 ? {} : ze, M = Re.effect;
        if (typeof M == "function") {
          var pe = M({
            state: W,
            name: Ke,
            instance: J,
            options: Oe
          }), ue = function() {
          };
          te.push(pe || ue);
        }
      });
    }
    function xe() {
      te.forEach(function(Re) {
        return Re();
      }), te = [];
    }
    return J;
  };
}
var GN = [yN, zN, hN, Ow, LN, MN, IN, fN, NN], qN = /* @__PURE__ */ WN({
  defaultModifiers: GN
}), XN = "tippy-box", Uw = "tippy-content", KN = "tippy-backdrop", Iw = "tippy-arrow", Fw = "tippy-svg-arrow", sc = {
  passive: !0,
  capture: !0
}, Hw = function() {
  return document.body;
};
function ZN(v, h) {
  return {}.hasOwnProperty.call(v, h);
}
function K0(v, h, y) {
  if (Array.isArray(v)) {
    var N = v[h];
    return N ?? (Array.isArray(y) ? y[h] : y);
  }
  return v;
}
function mE(v, h) {
  var y = {}.toString.call(v);
  return y.indexOf("[object") === 0 && y.indexOf(h + "]") > -1;
}
function Pw(v, h) {
  return typeof v == "function" ? v.apply(void 0, h) : v;
}
function hw(v, h) {
  if (h === 0)
    return v;
  var y;
  return function(N) {
    clearTimeout(y), y = setTimeout(function() {
      v(N);
    }, h);
  };
}
function JN(v, h) {
  var y = Object.assign({}, v);
  return h.forEach(function(N) {
    delete y[N];
  }), y;
}
function e_(v) {
  return v.split(/\s+/).filter(Boolean);
}
function ed(v) {
  return [].concat(v);
}
function mw(v, h) {
  v.indexOf(h) === -1 && v.push(h);
}
function t_(v) {
  return v.filter(function(h, y) {
    return v.indexOf(h) === y;
  });
}
function n_(v) {
  return v.split("-")[0];
}
function Ty(v) {
  return [].slice.call(v);
}
function yw(v) {
  return Object.keys(v).reduce(function(h, y) {
    return v[y] !== void 0 && (h[y] = v[y]), h;
  }, {});
}
function wv() {
  return document.createElement("div");
}
function xv(v) {
  return ["Element", "Fragment"].some(function(h) {
    return mE(v, h);
  });
}
function r_(v) {
  return mE(v, "NodeList");
}
function a_(v) {
  return mE(v, "MouseEvent");
}
function i_(v) {
  return !!(v && v._tippy && v._tippy.reference === v);
}
function u_(v) {
  return xv(v) ? [v] : r_(v) ? Ty(v) : Array.isArray(v) ? v : Ty(document.querySelectorAll(v));
}
function Z0(v, h) {
  v.forEach(function(y) {
    y && (y.style.transitionDuration = h + "ms");
  });
}
function gw(v, h) {
  v.forEach(function(y) {
    y && y.setAttribute("data-state", h);
  });
}
function o_(v) {
  var h, y = ed(v), N = y[0];
  return N != null && (h = N.ownerDocument) != null && h.body ? N.ownerDocument : document;
}
function l_(v, h) {
  var y = h.clientX, N = h.clientY;
  return v.every(function(A) {
    var H = A.popperRect, E = A.popperState, X = A.props, L = X.interactiveBorder, Q = n_(E.placement), W = E.modifiersData.offset;
    if (!W)
      return !0;
    var te = Q === "bottom" ? W.top.y : 0, le = Q === "top" ? W.bottom.y : 0, J = Q === "right" ? W.left.x : 0, ve = Q === "left" ? W.right.x : 0, xe = H.top - N + te > L, Re = N - H.bottom - le > L, Ke = H.left - y + J > L, ze = y - H.right - ve > L;
    return xe || Re || Ke || ze;
  });
}
function J0(v, h, y) {
  var N = h + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(A) {
    v[N](A, y);
  });
}
function Sw(v, h) {
  for (var y = h; y; ) {
    var N;
    if (v.contains(y))
      return !0;
    y = y.getRootNode == null || (N = y.getRootNode()) == null ? void 0 : N.host;
  }
  return !1;
}
var ao = {
  isTouch: !1
}, Ew = 0;
function s_() {
  ao.isTouch || (ao.isTouch = !0, window.performance && document.addEventListener("mousemove", Vw));
}
function Vw() {
  var v = performance.now();
  v - Ew < 20 && (ao.isTouch = !1, document.removeEventListener("mousemove", Vw)), Ew = v;
}
function c_() {
  var v = document.activeElement;
  if (i_(v)) {
    var h = v._tippy;
    v.blur && !h.state.isVisible && v.blur();
  }
}
function f_() {
  document.addEventListener("touchstart", s_, sc), window.addEventListener("blur", c_);
}
var d_ = typeof window < "u" && typeof document < "u", p_ = d_ ? (
  // @ts-ignore
  !!window.msCrypto
) : !1;
function Jf(v) {
  var h = v === "destroy" ? "n already-" : " ";
  return [v + "() was called on a" + h + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
function Cw(v) {
  var h = /[ \t]{2,}/g, y = /^[ \t]*/gm;
  return v.replace(h, " ").replace(y, "").trim();
}
function v_(v) {
  return Cw(`
  %ctippy.js

  %c` + Cw(v) + `

  %c👷‍ This is a development-only message. It will be removed in production.
  `);
}
function Bw(v) {
  return [
    v_(v),
    // title
    "color: #00C584; font-size: 1.3em; font-weight: bold;",
    // message
    "line-height: 1.5",
    // footer
    "color: #a6a095;"
  ];
}
var Dv;
process.env.NODE_ENV !== "production" && h_();
function h_() {
  Dv = /* @__PURE__ */ new Set();
}
function Ko(v, h) {
  if (v && !Dv.has(h)) {
    var y;
    Dv.add(h), (y = console).warn.apply(y, Bw(h));
  }
}
function uE(v, h) {
  if (v && !Dv.has(h)) {
    var y;
    Dv.add(h), (y = console).error.apply(y, Bw(h));
  }
}
function m_(v) {
  var h = !v, y = Object.prototype.toString.call(v) === "[object Object]" && !v.addEventListener;
  uE(h, ["tippy() was passed", "`" + String(v) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" ")), uE(y, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
var Yw = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, y_ = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, vi = Object.assign({
  appendTo: Hw,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: !0,
  ignoreAttributes: !1,
  interactive: !1,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function() {
  },
  onBeforeUpdate: function() {
  },
  onCreate: function() {
  },
  onDestroy: function() {
  },
  onHidden: function() {
  },
  onHide: function() {
  },
  onMount: function() {
  },
  onShow: function() {
  },
  onShown: function() {
  },
  onTrigger: function() {
  },
  onUntrigger: function() {
  },
  onClickOutside: function() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: !1,
  touch: !0,
  trigger: "mouseenter focus",
  triggerTarget: null
}, Yw, y_), g_ = Object.keys(vi), S_ = function(h) {
  process.env.NODE_ENV !== "production" && Qw(h, []);
  var y = Object.keys(h);
  y.forEach(function(N) {
    vi[N] = h[N];
  });
};
function $w(v) {
  var h = v.plugins || [], y = h.reduce(function(N, A) {
    var H = A.name, E = A.defaultValue;
    if (H) {
      var X;
      N[H] = v[H] !== void 0 ? v[H] : (X = vi[H]) != null ? X : E;
    }
    return N;
  }, {});
  return Object.assign({}, v, y);
}
function E_(v, h) {
  var y = h ? Object.keys($w(Object.assign({}, vi, {
    plugins: h
  }))) : g_, N = y.reduce(function(A, H) {
    var E = (v.getAttribute("data-tippy-" + H) || "").trim();
    if (!E)
      return A;
    if (H === "content")
      A[H] = E;
    else
      try {
        A[H] = JSON.parse(E);
      } catch {
        A[H] = E;
      }
    return A;
  }, {});
  return N;
}
function Tw(v, h) {
  var y = Object.assign({}, h, {
    content: Pw(h.content, [v])
  }, h.ignoreAttributes ? {} : E_(v, h.plugins));
  return y.aria = Object.assign({}, vi.aria, y.aria), y.aria = {
    expanded: y.aria.expanded === "auto" ? h.interactive : y.aria.expanded,
    content: y.aria.content === "auto" ? h.interactive ? null : "describedby" : y.aria.content
  }, y;
}
function Qw(v, h) {
  v === void 0 && (v = {}), h === void 0 && (h = []);
  var y = Object.keys(v);
  y.forEach(function(N) {
    var A = JN(vi, Object.keys(Yw)), H = !ZN(A, N);
    H && (H = h.filter(function(E) {
      return E.name === N;
    }).length === 0), Ko(H, ["`" + N + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", `

`, `All props: https://atomiks.github.io/tippyjs/v6/all-props/
`, "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
var C_ = function() {
  return "innerHTML";
};
function oE(v, h) {
  v[C_()] = h;
}
function ww(v) {
  var h = wv();
  return v === !0 ? h.className = Iw : (h.className = Fw, xv(v) ? h.appendChild(v) : oE(h, v)), h;
}
function Rw(v, h) {
  xv(h.content) ? (oE(v, ""), v.appendChild(h.content)) : typeof h.content != "function" && (h.allowHTML ? oE(v, h.content) : v.textContent = h.content);
}
function lE(v) {
  var h = v.firstElementChild, y = Ty(h.children);
  return {
    box: h,
    content: y.find(function(N) {
      return N.classList.contains(Uw);
    }),
    arrow: y.find(function(N) {
      return N.classList.contains(Iw) || N.classList.contains(Fw);
    }),
    backdrop: y.find(function(N) {
      return N.classList.contains(KN);
    })
  };
}
function Ww(v) {
  var h = wv(), y = wv();
  y.className = XN, y.setAttribute("data-state", "hidden"), y.setAttribute("tabindex", "-1");
  var N = wv();
  N.className = Uw, N.setAttribute("data-state", "hidden"), Rw(N, v.props), h.appendChild(y), y.appendChild(N), A(v.props, v.props);
  function A(H, E) {
    var X = lE(h), L = X.box, Q = X.content, W = X.arrow;
    E.theme ? L.setAttribute("data-theme", E.theme) : L.removeAttribute("data-theme"), typeof E.animation == "string" ? L.setAttribute("data-animation", E.animation) : L.removeAttribute("data-animation"), E.inertia ? L.setAttribute("data-inertia", "") : L.removeAttribute("data-inertia"), L.style.maxWidth = typeof E.maxWidth == "number" ? E.maxWidth + "px" : E.maxWidth, E.role ? L.setAttribute("role", E.role) : L.removeAttribute("role"), (H.content !== E.content || H.allowHTML !== E.allowHTML) && Rw(Q, v.props), E.arrow ? W ? H.arrow !== E.arrow && (L.removeChild(W), L.appendChild(ww(E.arrow))) : L.appendChild(ww(E.arrow)) : W && L.removeChild(W);
  }
  return {
    popper: h,
    onUpdate: A
  };
}
Ww.$$tippy = !0;
var T_ = 1, Sy = [], eE = [];
function w_(v, h) {
  var y = Tw(v, Object.assign({}, vi, $w(yw(h)))), N, A, H, E = !1, X = !1, L = !1, Q = !1, W, te, le, J = [], ve = hw(Mn, y.interactiveDebounce), xe, Re = T_++, Ke = null, ze = t_(y.plugins), Oe = {
    // Is the instance currently enabled?
    isEnabled: !0,
    // Is the tippy currently showing and not transitioning out?
    isVisible: !1,
    // Has the instance been destroyed?
    isDestroyed: !1,
    // Is the tippy currently mounted to the DOM?
    isMounted: !1,
    // Has the tippy finished transitioning in?
    isShown: !1
  }, M = {
    // properties
    id: Re,
    reference: v,
    popper: wv(),
    popperInstance: Ke,
    props: y,
    state: Oe,
    plugins: ze,
    // methods
    clearDelayTimeouts: Jn,
    setProps: nn,
    setContent: Bn,
    show: ka,
    hide: zr,
    hideWithInteractivity: me,
    enable: Zn,
    disable: An,
    unmount: Be,
    destroy: wt
  };
  if (!y.render)
    return process.env.NODE_ENV !== "production" && uE(!0, "render() function has not been supplied."), M;
  var pe = y.render(M), ue = pe.popper, Te = pe.onUpdate;
  ue.setAttribute("data-tippy-root", ""), ue.id = "tippy-" + M.id, M.popper = ue, v._tippy = M, ue._tippy = M;
  var mt = ze.map(function(F) {
    return F.fn(M);
  }), Dt = v.hasAttribute("aria-expanded");
  return Dn(), x(), ye(), ne("onCreate", [M]), y.showOnCreate && Vn(), ue.addEventListener("mouseenter", function() {
    M.props.interactive && M.state.isVisible && M.clearDelayTimeouts();
  }), ue.addEventListener("mouseleave", function() {
    M.props.interactive && M.props.trigger.indexOf("mouseenter") >= 0 && $e().addEventListener("mousemove", ve);
  }), M;
  function at() {
    var F = M.props.touch;
    return Array.isArray(F) ? F : [F, 0];
  }
  function tt() {
    return at()[0] === "hold";
  }
  function yt() {
    var F;
    return !!((F = M.props.render) != null && F.$$tippy);
  }
  function we() {
    return xe || v;
  }
  function $e() {
    var F = we().parentNode;
    return F ? o_(F) : document;
  }
  function Et() {
    return lE(ue);
  }
  function it(F) {
    return M.state.isMounted && !M.state.isVisible || ao.isTouch || W && W.type === "focus" ? 0 : K0(M.props.delay, F ? 0 : 1, vi.delay);
  }
  function ye(F) {
    F === void 0 && (F = !1), ue.style.pointerEvents = M.props.interactive && !F ? "" : "none", ue.style.zIndex = "" + M.props.zIndex;
  }
  function ne(F, ce, _e) {
    if (_e === void 0 && (_e = !0), mt.forEach(function(st) {
      st[F] && st[F].apply(st, ce);
    }), _e) {
      var Ze;
      (Ze = M.props)[F].apply(Ze, ce);
    }
  }
  function Ne() {
    var F = M.props.aria;
    if (F.content) {
      var ce = "aria-" + F.content, _e = ue.id, Ze = ed(M.props.triggerTarget || v);
      Ze.forEach(function(st) {
        var gt = st.getAttribute(ce);
        if (M.state.isVisible)
          st.setAttribute(ce, gt ? gt + " " + _e : _e);
        else {
          var rn = gt && gt.replace(_e, "").trim();
          rn ? st.setAttribute(ce, rn) : st.removeAttribute(ce);
        }
      });
    }
  }
  function x() {
    if (!(Dt || !M.props.aria.expanded)) {
      var F = ed(M.props.triggerTarget || v);
      F.forEach(function(ce) {
        M.props.interactive ? ce.setAttribute("aria-expanded", M.state.isVisible && ce === we() ? "true" : "false") : ce.removeAttribute("aria-expanded");
      });
    }
  }
  function Z() {
    $e().removeEventListener("mousemove", ve), Sy = Sy.filter(function(F) {
      return F !== ve;
    });
  }
  function he(F) {
    if (!(ao.isTouch && (L || F.type === "mousedown"))) {
      var ce = F.composedPath && F.composedPath()[0] || F.target;
      if (!(M.props.interactive && Sw(ue, ce))) {
        if (ed(M.props.triggerTarget || v).some(function(_e) {
          return Sw(_e, ce);
        })) {
          if (ao.isTouch || M.state.isVisible && M.props.trigger.indexOf("click") >= 0)
            return;
        } else
          ne("onClickOutside", [M, F]);
        M.props.hideOnClick === !0 && (M.clearDelayTimeouts(), M.hide(), X = !0, setTimeout(function() {
          X = !1;
        }), M.state.isMounted || ut());
      }
    }
  }
  function We() {
    L = !0;
  }
  function Pe() {
    L = !1;
  }
  function pt() {
    var F = $e();
    F.addEventListener("mousedown", he, !0), F.addEventListener("touchend", he, sc), F.addEventListener("touchstart", Pe, sc), F.addEventListener("touchmove", We, sc);
  }
  function ut() {
    var F = $e();
    F.removeEventListener("mousedown", he, !0), F.removeEventListener("touchend", he, sc), F.removeEventListener("touchstart", Pe, sc), F.removeEventListener("touchmove", We, sc);
  }
  function Ct(F, ce) {
    _t(F, function() {
      !M.state.isVisible && ue.parentNode && ue.parentNode.contains(ue) && ce();
    });
  }
  function ot(F, ce) {
    _t(F, ce);
  }
  function _t(F, ce) {
    var _e = Et().box;
    function Ze(st) {
      st.target === _e && (J0(_e, "remove", Ze), ce());
    }
    if (F === 0)
      return ce();
    J0(_e, "remove", te), J0(_e, "add", Ze), te = Ze;
  }
  function xn(F, ce, _e) {
    _e === void 0 && (_e = !1);
    var Ze = ed(M.props.triggerTarget || v);
    Ze.forEach(function(st) {
      st.addEventListener(F, ce, _e), J.push({
        node: st,
        eventType: F,
        handler: ce,
        options: _e
      });
    });
  }
  function Dn() {
    tt() && (xn("touchstart", Jt, {
      passive: !0
    }), xn("touchend", Tn, {
      passive: !0
    })), e_(M.props.trigger).forEach(function(F) {
      if (F !== "manual")
        switch (xn(F, Jt), F) {
          case "mouseenter":
            xn("mouseleave", Tn);
            break;
          case "focus":
            xn(p_ ? "focusout" : "blur", hn);
            break;
          case "focusin":
            xn("focusout", hn);
            break;
        }
    });
  }
  function qn() {
    J.forEach(function(F) {
      var ce = F.node, _e = F.eventType, Ze = F.handler, st = F.options;
      ce.removeEventListener(_e, Ze, st);
    }), J = [];
  }
  function Jt(F) {
    var ce, _e = !1;
    if (!(!M.state.isEnabled || on(F) || X)) {
      var Ze = ((ce = W) == null ? void 0 : ce.type) === "focus";
      W = F, xe = F.currentTarget, x(), !M.state.isVisible && a_(F) && Sy.forEach(function(st) {
        return st(F);
      }), F.type === "click" && (M.props.trigger.indexOf("mouseenter") < 0 || E) && M.props.hideOnClick !== !1 && M.state.isVisible ? _e = !0 : Vn(F), F.type === "click" && (E = !_e), _e && !Ze && wn(F);
    }
  }
  function Mn(F) {
    var ce = F.target, _e = we().contains(ce) || ue.contains(ce);
    if (!(F.type === "mousemove" && _e)) {
      var Ze = mn().concat(ue).map(function(st) {
        var gt, rn = st._tippy, kt = (gt = rn.popperInstance) == null ? void 0 : gt.state;
        return kt ? {
          popperRect: st.getBoundingClientRect(),
          popperState: kt,
          props: y
        } : null;
      }).filter(Boolean);
      l_(Ze, F) && (Z(), wn(F));
    }
  }
  function Tn(F) {
    var ce = on(F) || M.props.trigger.indexOf("click") >= 0 && E;
    if (!ce) {
      if (M.props.interactive) {
        M.hideWithInteractivity(F);
        return;
      }
      wn(F);
    }
  }
  function hn(F) {
    M.props.trigger.indexOf("focusin") < 0 && F.target !== we() || M.props.interactive && F.relatedTarget && ue.contains(F.relatedTarget) || wn(F);
  }
  function on(F) {
    return ao.isTouch ? tt() !== F.type.indexOf("touch") >= 0 : !1;
  }
  function Xn() {
    Kn();
    var F = M.props, ce = F.popperOptions, _e = F.placement, Ze = F.offset, st = F.getReferenceClientRect, gt = F.moveTransition, rn = yt() ? lE(ue).arrow : null, kt = st ? {
      getBoundingClientRect: st,
      contextElement: st.contextElement || we()
    } : v, Yt = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(va) {
        var Xr = va.state;
        if (yt()) {
          var hu = Et(), ha = hu.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(ma) {
            ma === "placement" ? ha.setAttribute("data-placement", Xr.placement) : Xr.attributes.popper["data-popper-" + ma] ? ha.setAttribute("data-" + ma, "") : ha.removeAttribute("data-" + ma);
          }), Xr.attributes.popper = {};
        }
      }
    }, er = [{
      name: "offset",
      options: {
        offset: Ze
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !gt
      }
    }, Yt];
    yt() && rn && er.push({
      name: "arrow",
      options: {
        element: rn,
        padding: 3
      }
    }), er.push.apply(er, (ce == null ? void 0 : ce.modifiers) || []), M.popperInstance = qN(kt, ue, Object.assign({}, ce, {
      placement: _e,
      onFirstUpdate: le,
      modifiers: er
    }));
  }
  function Kn() {
    M.popperInstance && (M.popperInstance.destroy(), M.popperInstance = null);
  }
  function tn() {
    var F = M.props.appendTo, ce, _e = we();
    M.props.interactive && F === Hw || F === "parent" ? ce = _e.parentNode : ce = Pw(F, [_e]), ce.contains(ue) || ce.appendChild(ue), M.state.isMounted = !0, Xn(), process.env.NODE_ENV !== "production" && Ko(M.props.interactive && F === vi.appendTo && _e.nextElementSibling !== ue, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", `

`, "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", `

`, "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", `

`, "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
  }
  function mn() {
    return Ty(ue.querySelectorAll("[data-tippy-root]"));
  }
  function Vn(F) {
    M.clearDelayTimeouts(), F && ne("onTrigger", [M, F]), pt();
    var ce = it(!0), _e = at(), Ze = _e[0], st = _e[1];
    ao.isTouch && Ze === "hold" && st && (ce = st), ce ? N = setTimeout(function() {
      M.show();
    }, ce) : M.show();
  }
  function wn(F) {
    if (M.clearDelayTimeouts(), ne("onUntrigger", [M, F]), !M.state.isVisible) {
      ut();
      return;
    }
    if (!(M.props.trigger.indexOf("mouseenter") >= 0 && M.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(F.type) >= 0 && E)) {
      var ce = it(!1);
      ce ? A = setTimeout(function() {
        M.state.isVisible && M.hide();
      }, ce) : H = requestAnimationFrame(function() {
        M.hide();
      });
    }
  }
  function Zn() {
    M.state.isEnabled = !0;
  }
  function An() {
    M.hide(), M.state.isEnabled = !1;
  }
  function Jn() {
    clearTimeout(N), clearTimeout(A), cancelAnimationFrame(H);
  }
  function nn(F) {
    if (process.env.NODE_ENV !== "production" && Ko(M.state.isDestroyed, Jf("setProps")), !M.state.isDestroyed) {
      ne("onBeforeUpdate", [M, F]), qn();
      var ce = M.props, _e = Tw(v, Object.assign({}, ce, yw(F), {
        ignoreAttributes: !0
      }));
      M.props = _e, Dn(), ce.interactiveDebounce !== _e.interactiveDebounce && (Z(), ve = hw(Mn, _e.interactiveDebounce)), ce.triggerTarget && !_e.triggerTarget ? ed(ce.triggerTarget).forEach(function(Ze) {
        Ze.removeAttribute("aria-expanded");
      }) : _e.triggerTarget && v.removeAttribute("aria-expanded"), x(), ye(), Te && Te(ce, _e), M.popperInstance && (Xn(), mn().forEach(function(Ze) {
        requestAnimationFrame(Ze._tippy.popperInstance.forceUpdate);
      })), ne("onAfterUpdate", [M, F]);
    }
  }
  function Bn(F) {
    M.setProps({
      content: F
    });
  }
  function ka() {
    process.env.NODE_ENV !== "production" && Ko(M.state.isDestroyed, Jf("show"));
    var F = M.state.isVisible, ce = M.state.isDestroyed, _e = !M.state.isEnabled, Ze = ao.isTouch && !M.props.touch, st = K0(M.props.duration, 0, vi.duration);
    if (!(F || ce || _e || Ze) && !we().hasAttribute("disabled") && (ne("onShow", [M], !1), M.props.onShow(M) !== !1)) {
      if (M.state.isVisible = !0, yt() && (ue.style.visibility = "visible"), ye(), pt(), M.state.isMounted || (ue.style.transition = "none"), yt()) {
        var gt = Et(), rn = gt.box, kt = gt.content;
        Z0([rn, kt], 0);
      }
      le = function() {
        var er;
        if (!(!M.state.isVisible || Q)) {
          if (Q = !0, ue.offsetHeight, ue.style.transition = M.props.moveTransition, yt() && M.props.animation) {
            var Dr = Et(), va = Dr.box, Xr = Dr.content;
            Z0([va, Xr], st), gw([va, Xr], "visible");
          }
          Ne(), x(), mw(eE, M), (er = M.popperInstance) == null || er.forceUpdate(), ne("onMount", [M]), M.props.animation && yt() && ot(st, function() {
            M.state.isShown = !0, ne("onShown", [M]);
          });
        }
      }, tn();
    }
  }
  function zr() {
    process.env.NODE_ENV !== "production" && Ko(M.state.isDestroyed, Jf("hide"));
    var F = !M.state.isVisible, ce = M.state.isDestroyed, _e = !M.state.isEnabled, Ze = K0(M.props.duration, 1, vi.duration);
    if (!(F || ce || _e) && (ne("onHide", [M], !1), M.props.onHide(M) !== !1)) {
      if (M.state.isVisible = !1, M.state.isShown = !1, Q = !1, E = !1, yt() && (ue.style.visibility = "hidden"), Z(), ut(), ye(!0), yt()) {
        var st = Et(), gt = st.box, rn = st.content;
        M.props.animation && (Z0([gt, rn], Ze), gw([gt, rn], "hidden"));
      }
      Ne(), x(), M.props.animation ? yt() && Ct(Ze, M.unmount) : M.unmount();
    }
  }
  function me(F) {
    process.env.NODE_ENV !== "production" && Ko(M.state.isDestroyed, Jf("hideWithInteractivity")), $e().addEventListener("mousemove", ve), mw(Sy, ve), ve(F);
  }
  function Be() {
    process.env.NODE_ENV !== "production" && Ko(M.state.isDestroyed, Jf("unmount")), M.state.isVisible && M.hide(), M.state.isMounted && (Kn(), mn().forEach(function(F) {
      F._tippy.unmount();
    }), ue.parentNode && ue.parentNode.removeChild(ue), eE = eE.filter(function(F) {
      return F !== M;
    }), M.state.isMounted = !1, ne("onHidden", [M]));
  }
  function wt() {
    process.env.NODE_ENV !== "production" && Ko(M.state.isDestroyed, Jf("destroy")), !M.state.isDestroyed && (M.clearDelayTimeouts(), M.unmount(), qn(), delete v._tippy, M.state.isDestroyed = !0, ne("onDestroy", [M]));
  }
}
function Nv(v, h) {
  h === void 0 && (h = {});
  var y = vi.plugins.concat(h.plugins || []);
  process.env.NODE_ENV !== "production" && (m_(v), Qw(h, y)), f_();
  var N = Object.assign({}, h, {
    plugins: y
  }), A = u_(v);
  if (process.env.NODE_ENV !== "production") {
    var H = xv(N.content), E = A.length > 1;
    Ko(H && E, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", `

`, "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", `

`, `1) content: element.innerHTML
`, "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var X = A.reduce(function(L, Q) {
    var W = Q && w_(Q, N);
    return W && L.push(W), L;
  }, []);
  return xv(v) ? X[0] : X;
}
Nv.defaultProps = vi;
Nv.setDefaultProps = S_;
Nv.currentInput = ao;
Object.assign({}, Ow, {
  effect: function(h) {
    var y = h.state, N = {
      popper: {
        position: y.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(y.elements.popper.style, N.popper), y.styles = N, y.elements.arrow && Object.assign(y.elements.arrow.style, N.arrow);
  }
});
Nv.setDefaultProps({
  render: Ww
});
const R_ = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjM1LjkzIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDIyOCI+PHBhdGggZmlsbD0iIzAwRDhGRiIgZD0iTTIxMC40ODMgNzMuODI0YTE3MS40OSAxNzEuNDkgMCAwIDAtOC4yNC0yLjU5N2MuNDY1LTEuOS44OTMtMy43NzcgMS4yNzMtNS42MjFjNi4yMzgtMzAuMjgxIDIuMTYtNTQuNjc2LTExLjc2OS02Mi43MDhjLTEzLjM1NS03LjctMzUuMTk2LjMyOS01Ny4yNTQgMTkuNTI2YTE3MS4yMyAxNzEuMjMgMCAwIDAtNi4zNzUgNS44NDhhMTU1Ljg2NiAxNTUuODY2IDAgMCAwLTQuMjQxLTMuOTE3QzEwMC43NTkgMy44MjkgNzcuNTg3LTQuODIyIDYzLjY3MyAzLjIzM0M1MC4zMyAxMC45NTcgNDYuMzc5IDMzLjg5IDUxLjk5NSA2Mi41ODhhMTcwLjk3NCAxNzAuOTc0IDAgMCAwIDEuODkyIDguNDhjLTMuMjguOTMyLTYuNDQ1IDEuOTI0LTkuNDc0IDIuOThDMTcuMzA5IDgzLjQ5OCAwIDk4LjMwNyAwIDExMy42NjhjMCAxNS44NjUgMTguNTgyIDMxLjc3OCA0Ni44MTIgNDEuNDI3YTE0NS41MiAxNDUuNTIgMCAwIDAgNi45MjEgMi4xNjVhMTY3LjQ2NyAxNjcuNDY3IDAgMCAwLTIuMDEgOS4xMzhjLTUuMzU0IDI4LjItMS4xNzMgNTAuNTkxIDEyLjEzNCA1OC4yNjZjMTMuNzQ0IDcuOTI2IDM2LjgxMi0uMjIgNTkuMjczLTE5Ljg1NWExNDUuNTY3IDE0NS41NjcgMCAwIDAgNS4zNDItNC45MjNhMTY4LjA2NCAxNjguMDY0IDAgMCAwIDYuOTIgNi4zMTRjMjEuNzU4IDE4LjcyMiA0My4yNDYgMjYuMjgyIDU2LjU0IDE4LjU4NmMxMy43MzEtNy45NDkgMTguMTk0LTMyLjAwMyAxMi40LTYxLjI2OGExNDUuMDE2IDE0NS4wMTYgMCAwIDAtMS41MzUtNi44NDJjMS42Mi0uNDggMy4yMS0uOTc0IDQuNzYtMS40ODhjMjkuMzQ4LTkuNzIzIDQ4LjQ0My0yNS40NDMgNDguNDQzLTQxLjUyYzAtMTUuNDE3LTE3Ljg2OC0zMC4zMjYtNDUuNTE3LTM5Ljg0NFptLTYuMzY1IDcwLjk4NGMtMS40LjQ2My0yLjgzNi45MS00LjMgMS4zNDVjLTMuMjQtMTAuMjU3LTcuNjEyLTIxLjE2My0xMi45NjMtMzIuNDMyYzUuMTA2LTExIDkuMzEtMjEuNzY3IDEyLjQ1OS0zMS45NTdjMi42MTkuNzU4IDUuMTYgMS41NTcgNy42MSAyLjRjMjMuNjkgOC4xNTYgMzguMTQgMjAuMjEzIDM4LjE0IDI5LjUwNGMwIDkuODk2LTE1LjYwNiAyMi43NDMtNDAuOTQ2IDMxLjE0Wm0tMTAuNTE0IDIwLjgzNGMyLjU2MiAxMi45NCAyLjkyNyAyNC42NCAxLjIzIDMzLjc4N2MtMS41MjQgOC4yMTktNC41OSAxMy42OTgtOC4zODIgMTUuODkzYy04LjA2NyA0LjY3LTI1LjMyLTEuNC00My45MjctMTcuNDEyYTE1Ni43MjYgMTU2LjcyNiAwIDAgMS02LjQzNy01Ljg3YzcuMjE0LTcuODg5IDE0LjQyMy0xNy4wNiAyMS40NTktMjcuMjQ2YzEyLjM3Ni0xLjA5OCAyNC4wNjgtMi44OTQgMzQuNjcxLTUuMzQ1YTEzNC4xNyAxMzQuMTcgMCAwIDEgMS4zODYgNi4xOTNaTTg3LjI3NiAyMTQuNTE1Yy03Ljg4MiAyLjc4My0xNC4xNiAyLjg2My0xNy45NTUuNjc1Yy04LjA3NS00LjY1Ny0xMS40MzItMjIuNjM2LTYuODUzLTQ2Ljc1MmExNTYuOTIzIDE1Ni45MjMgMCAwIDEgMS44NjktOC40OTljMTAuNDg2IDIuMzIgMjIuMDkzIDMuOTg4IDM0LjQ5OCA0Ljk5NGM3LjA4NCA5Ljk2NyAxNC41MDEgMTkuMTI4IDIxLjk3NiAyNy4xNWExMzQuNjY4IDEzNC42NjggMCAwIDEtNC44NzcgNC40OTJjLTkuOTMzIDguNjgyLTE5Ljg4NiAxNC44NDItMjguNjU4IDE3Ljk0Wk01MC4zNSAxNDQuNzQ3Yy0xMi40ODMtNC4yNjctMjIuNzkyLTkuODEyLTI5Ljg1OC0xNS44NjNjLTYuMzUtNS40MzctOS41NTUtMTAuODM2LTkuNTU1LTE1LjIxNmMwLTkuMzIyIDEzLjg5Ny0yMS4yMTIgMzcuMDc2LTI5LjI5M2MyLjgxMy0uOTggNS43NTctMS45MDUgOC44MTItMi43NzNjMy4yMDQgMTAuNDIgNy40MDYgMjEuMzE1IDEyLjQ3NyAzMi4zMzJjLTUuMTM3IDExLjE4LTkuMzk5IDIyLjI0OS0xMi42MzQgMzIuNzkyYTEzNC43MTggMTM0LjcxOCAwIDAgMS02LjMxOC0xLjk3OVptMTIuMzc4LTg0LjI2Yy00LjgxMS0yNC41ODctMS42MTYtNDMuMTM0IDYuNDI1LTQ3Ljc4OWM4LjU2NC00Ljk1OCAyNy41MDIgMi4xMTEgNDcuNDYzIDE5LjgzNWExNDQuMzE4IDE0NC4zMTggMCAwIDEgMy44NDEgMy41NDVjLTcuNDM4IDcuOTg3LTE0Ljc4NyAxNy4wOC0yMS44MDggMjYuOTg4Yy0xMi4wNCAxLjExNi0yMy41NjUgMi45MDgtMzQuMTYxIDUuMzA5YTE2MC4zNDIgMTYwLjM0MiAwIDAgMS0xLjc2LTcuODg3Wm0xMTAuNDI3IDI3LjI2OGEzNDcuOCAzNDcuOCAwIDAgMC03Ljc4NS0xMi44MDNjOC4xNjggMS4wMzMgMTUuOTk0IDIuNDA0IDIzLjM0MyA0LjA4Yy0yLjIwNiA3LjA3Mi00Ljk1NiAxNC40NjUtOC4xOTMgMjIuMDQ1YTM4MS4xNTEgMzgxLjE1MSAwIDAgMC03LjM2NS0xMy4zMjJabS00NS4wMzItNDMuODYxYzUuMDQ0IDUuNDY1IDEwLjA5NiAxMS41NjYgMTUuMDY1IDE4LjE4NmEzMjIuMDQgMzIyLjA0IDAgMCAwLTMwLjI1Ny0uMDA2YzQuOTc0LTYuNTU5IDEwLjA2OS0xMi42NTIgMTUuMTkyLTE4LjE4Wk04Mi44MDIgODcuODNhMzIzLjE2NyAzMjMuMTY3IDAgMCAwLTcuMjI3IDEzLjIzOGMtMy4xODQtNy41NTMtNS45MDktMTQuOTgtOC4xMzQtMjIuMTUyYzcuMzA0LTEuNjM0IDE1LjA5My0yLjk3IDIzLjIwOS0zLjk4NGEzMjEuNTI0IDMyMS41MjQgMCAwIDAtNy44NDggMTIuODk3Wm04LjA4MSA2NS4zNTJjLTguMzg1LS45MzYtMTYuMjkxLTIuMjAzLTIzLjU5My0zLjc5M2MyLjI2LTcuMyA1LjA0NS0xNC44ODUgOC4yOTgtMjIuNmEzMjEuMTg3IDMyMS4xODcgMCAwIDAgNy4yNTcgMTMuMjQ2YzIuNTk0IDQuNDggNS4yOCA4Ljg2OCA4LjAzOCAxMy4xNDdabTM3LjU0MiAzMS4wM2MtNS4xODQtNS41OTItMTAuMzU0LTExLjc3OS0xNS40MDMtMTguNDMzYzQuOTAyLjE5MiA5Ljg5OS4yOSAxNC45NzguMjljNS4yMTggMCAxMC4zNzYtLjExNyAxNS40NTMtLjM0M2MtNC45ODUgNi43NzQtMTAuMDE4IDEyLjk3LTE1LjAyOCAxOC40ODZabTUyLjE5OC01Ny44MTdjMy40MjIgNy44IDYuMzA2IDE1LjM0NSA4LjU5NiAyMi41MmMtNy40MjIgMS42OTQtMTUuNDM2IDMuMDU4LTIzLjg4IDQuMDcxYTM4Mi40MTcgMzgyLjQxNyAwIDAgMCA3Ljg1OS0xMy4wMjZhMzQ3LjQwMyAzNDcuNDAzIDAgMCAwIDcuNDI1LTEzLjU2NVptLTE2Ljg5OCA4LjEwMWEzNTguNTU3IDM1OC41NTcgMCAwIDEtMTIuMjgxIDE5LjgxNWEzMjkuNCAzMjkuNCAwIDAgMS0yMy40NDQuODIzYy03Ljk2NyAwLTE1LjcxNi0uMjQ4LTIzLjE3OC0uNzMyYTMxMC4yMDIgMzEwLjIwMiAwIDAgMS0xMi41MTMtMTkuODQ2aC4wMDFhMzA3LjQxIDMwNy40MSAwIDAgMS0xMC45MjMtMjAuNjI3YTMxMC4yNzggMzEwLjI3OCAwIDAgMSAxMC44OS0yMC42MzdsLS4wMDEuMDAxYTMwNy4zMTggMzA3LjMxOCAwIDAgMSAxMi40MTMtMTkuNzYxYzcuNjEzLS41NzYgMTUuNDItLjg3NiAyMy4zMS0uODc2SDEyOGM3LjkyNiAwIDE1Ljc0My4zMDMgMjMuMzU0Ljg4M2EzMjkuMzU3IDMyOS4zNTcgMCAwIDEgMTIuMzM1IDE5LjY5NWEzNTguNDg5IDM1OC40ODkgMCAwIDEgMTEuMDM2IDIwLjU0YTMyOS40NzIgMzI5LjQ3MiAwIDAgMS0xMSAyMC43MjJabTIyLjU2LTEyMi4xMjRjOC41NzIgNC45NDQgMTEuOTA2IDI0Ljg4MSA2LjUyIDUxLjAyNmMtLjM0NCAxLjY2OC0uNzMgMy4zNjctMS4xNSA1LjA5Yy0xMC42MjItMi40NTItMjIuMTU1LTQuMjc1LTM0LjIzLTUuNDA4Yy03LjAzNC0xMC4wMTctMTQuMzIzLTE5LjEyNC0yMS42NC0yNy4wMDhhMTYwLjc4OSAxNjAuNzg5IDAgMCAxIDUuODg4LTUuNGMxOC45LTE2LjQ0NyAzNi41NjQtMjIuOTQxIDQ0LjYxMi0xOC4zWk0xMjggOTAuODA4YzEyLjYyNSAwIDIyLjg2IDEwLjIzNSAyMi44NiAyMi44NnMtMTAuMjM1IDIyLjg2LTIyLjg2IDIyLjg2cy0yMi44Ni0xMC4yMzUtMjIuODYtMjIuODZzMTAuMjM1LTIyLjg2IDIyLjg2LTIyLjg2WiI+PC9wYXRoPjwvc3ZnPg==", b_ = "/vite.svg";
console.log("tippy", Nv);
function x_() {
  const [v, h] = id.useState(0);
  return window.helllllllo = "world", /* @__PURE__ */ _a.jsxs(_a.Fragment, { children: [
    /* @__PURE__ */ _a.jsxs("div", { children: [
      /* @__PURE__ */ _a.jsx("a", { href: "https://vitejs.dev", target: "_blank", children: /* @__PURE__ */ _a.jsx("img", { src: b_, className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ _a.jsx("a", { href: "https://react.dev", target: "_blank", children: /* @__PURE__ */ _a.jsx("img", { src: R_, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ _a.jsx("h1", { children: "Vite + React" }),
    /* @__PURE__ */ _a.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ _a.jsxs("button", { onClick: () => h((y) => y + 1), children: [
        "count is ",
        v
      ] }),
      /* @__PURE__ */ _a.jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ _a.jsx("code", { children: "src/App.jsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ _a.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
Ev.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ _a.jsx(UO.StrictMode, { children: /* @__PURE__ */ _a.jsx(x_, {}) })
);
