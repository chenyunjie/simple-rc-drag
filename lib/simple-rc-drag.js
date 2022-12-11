var Nr = function(k, v) {
  return Nr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, i) {
    l.__proto__ = i;
  } || function(l, i) {
    for (var R in i)
      Object.prototype.hasOwnProperty.call(i, R) && (l[R] = i[R]);
  }, Nr(k, v);
};
function Vt(k, v) {
  if (typeof v != "function" && v !== null)
    throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
  Nr(k, v);
  function l() {
    this.constructor = k;
  }
  k.prototype = v === null ? Object.create(v) : (l.prototype = v.prototype, new l());
}
var Ve = function() {
  return Ve = Object.assign || function(v) {
    for (var l, i = 1, R = arguments.length; i < R; i++) {
      l = arguments[i];
      for (var y in l)
        Object.prototype.hasOwnProperty.call(l, y) && (v[y] = l[y]);
    }
    return v;
  }, Ve.apply(this, arguments);
};
function Bt(k) {
  return k && k.__esModule && Object.prototype.hasOwnProperty.call(k, "default") ? k.default : k;
}
var Yr = { exports: {} }, Ke = {}, mr = { exports: {} }, O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ft;
function zt() {
  if (ft)
    return O;
  ft = 1;
  var k = Symbol.for("react.element"), v = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), T = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), L = Symbol.iterator;
  function H(n) {
    return n === null || typeof n != "object" ? null : (n = L && n[L] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var J = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ie = Object.assign, ge = {};
  function ne(n, c, E) {
    this.props = n, this.context = c, this.refs = ge, this.updater = E || J;
  }
  ne.prototype.isReactComponent = {}, ne.prototype.setState = function(n, c) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, c, "setState");
  }, ne.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ue() {
  }
  ue.prototype = ne.prototype;
  function Y(n, c, E) {
    this.props = n, this.context = c, this.refs = ge, this.updater = E || J;
  }
  var ce = Y.prototype = new ue();
  ce.constructor = Y, ie(ce, ne.prototype), ce.isPureReactComponent = !0;
  var se = Array.isArray, G = Object.prototype.hasOwnProperty, re = { current: null }, pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ye(n, c, E) {
    var D, S = {}, M = null, W = null;
    if (c != null)
      for (D in c.ref !== void 0 && (W = c.ref), c.key !== void 0 && (M = "" + c.key), c)
        G.call(c, D) && !pe.hasOwnProperty(D) && (S[D] = c[D]);
    var F = arguments.length - 2;
    if (F === 1)
      S.children = E;
    else if (1 < F) {
      for (var A = Array(F), X = 0; X < F; X++)
        A[X] = arguments[X + 2];
      S.children = A;
    }
    if (n && n.defaultProps)
      for (D in F = n.defaultProps, F)
        S[D] === void 0 && (S[D] = F[D]);
    return { $$typeof: k, type: n, key: M, ref: W, props: S, _owner: re.current };
  }
  function Ce(n, c) {
    return { $$typeof: k, type: n.type, key: c, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Te(n) {
    return typeof n == "object" && n !== null && n.$$typeof === k;
  }
  function Be(n) {
    var c = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(E) {
      return c[E];
    });
  }
  var Oe = /\/+/g;
  function te(n, c) {
    return typeof n == "object" && n !== null && n.key != null ? Be("" + n.key) : c.toString(36);
  }
  function ae(n, c, E, D, S) {
    var M = typeof n;
    (M === "undefined" || M === "boolean") && (n = null);
    var W = !1;
    if (n === null)
      W = !0;
    else
      switch (M) {
        case "string":
        case "number":
          W = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case k:
            case v:
              W = !0;
          }
      }
    if (W)
      return W = n, S = S(W), n = D === "" ? "." + te(W, 0) : D, se(S) ? (E = "", n != null && (E = n.replace(Oe, "$&/") + "/"), ae(S, c, E, "", function(X) {
        return X;
      })) : S != null && (Te(S) && (S = Ce(S, E + (!S.key || W && W.key === S.key ? "" : ("" + S.key).replace(Oe, "$&/") + "/") + n)), c.push(S)), 1;
    if (W = 0, D = D === "" ? "." : D + ":", se(n))
      for (var F = 0; F < n.length; F++) {
        M = n[F];
        var A = D + te(M, F);
        W += ae(M, c, E, A, S);
      }
    else if (A = H(n), typeof A == "function")
      for (n = A.call(n), F = 0; !(M = n.next()).done; )
        M = M.value, A = D + te(M, F++), W += ae(M, c, E, A, S);
    else if (M === "object")
      throw c = String(n), Error("Objects are not valid as a React child (found: " + (c === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : c) + "). If you meant to render a collection of children, use an array instead.");
    return W;
  }
  function Q(n, c, E) {
    if (n == null)
      return n;
    var D = [], S = 0;
    return ae(n, D, "", "", function(M) {
      return c.call(E, M, S++);
    }), D;
  }
  function le(n) {
    if (n._status === -1) {
      var c = n._result;
      c = c(), c.then(function(E) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = E);
      }, function(E) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = E);
      }), n._status === -1 && (n._status = 0, n._result = c);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var h = { current: null }, ve = { transition: null }, Se = { ReactCurrentDispatcher: h, ReactCurrentBatchConfig: ve, ReactCurrentOwner: re };
  return O.Children = { map: Q, forEach: function(n, c, E) {
    Q(n, function() {
      c.apply(this, arguments);
    }, E);
  }, count: function(n) {
    var c = 0;
    return Q(n, function() {
      c++;
    }), c;
  }, toArray: function(n) {
    return Q(n, function(c) {
      return c;
    }) || [];
  }, only: function(n) {
    if (!Te(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, O.Component = ne, O.Fragment = l, O.Profiler = R, O.PureComponent = Y, O.StrictMode = i, O.Suspense = _, O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Se, O.cloneElement = function(n, c, E) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var D = ie({}, n.props), S = n.key, M = n.ref, W = n._owner;
    if (c != null) {
      if (c.ref !== void 0 && (M = c.ref, W = re.current), c.key !== void 0 && (S = "" + c.key), n.type && n.type.defaultProps)
        var F = n.type.defaultProps;
      for (A in c)
        G.call(c, A) && !pe.hasOwnProperty(A) && (D[A] = c[A] === void 0 && F !== void 0 ? F[A] : c[A]);
    }
    var A = arguments.length - 2;
    if (A === 1)
      D.children = E;
    else if (1 < A) {
      F = Array(A);
      for (var X = 0; X < A; X++)
        F[X] = arguments[X + 2];
      D.children = F;
    }
    return { $$typeof: k, type: n.type, key: S, ref: M, props: D, _owner: W };
  }, O.createContext = function(n) {
    return n = { $$typeof: T, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: y, _context: n }, n.Consumer = n;
  }, O.createElement = ye, O.createFactory = function(n) {
    var c = ye.bind(null, n);
    return c.type = n, c;
  }, O.createRef = function() {
    return { current: null };
  }, O.forwardRef = function(n) {
    return { $$typeof: w, render: n };
  }, O.isValidElement = Te, O.lazy = function(n) {
    return { $$typeof: N, _payload: { _status: -1, _result: n }, _init: le };
  }, O.memo = function(n, c) {
    return { $$typeof: g, type: n, compare: c === void 0 ? null : c };
  }, O.startTransition = function(n) {
    var c = ve.transition;
    ve.transition = {};
    try {
      n();
    } finally {
      ve.transition = c;
    }
  }, O.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, O.useCallback = function(n, c) {
    return h.current.useCallback(n, c);
  }, O.useContext = function(n) {
    return h.current.useContext(n);
  }, O.useDebugValue = function() {
  }, O.useDeferredValue = function(n) {
    return h.current.useDeferredValue(n);
  }, O.useEffect = function(n, c) {
    return h.current.useEffect(n, c);
  }, O.useId = function() {
    return h.current.useId();
  }, O.useImperativeHandle = function(n, c, E) {
    return h.current.useImperativeHandle(n, c, E);
  }, O.useInsertionEffect = function(n, c) {
    return h.current.useInsertionEffect(n, c);
  }, O.useLayoutEffect = function(n, c) {
    return h.current.useLayoutEffect(n, c);
  }, O.useMemo = function(n, c) {
    return h.current.useMemo(n, c);
  }, O.useReducer = function(n, c, E) {
    return h.current.useReducer(n, c, E);
  }, O.useRef = function(n) {
    return h.current.useRef(n);
  }, O.useState = function(n) {
    return h.current.useState(n);
  }, O.useSyncExternalStore = function(n, c, E) {
    return h.current.useSyncExternalStore(n, c, E);
  }, O.useTransition = function() {
    return h.current.useTransition();
  }, O.version = "18.2.0", O;
}
var yr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function Ht() {
  return dt || (dt = 1, function(k, v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var l = "18.2.0", i = Symbol.for("react.element"), R = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), g = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), ge = Symbol.for("react.offscreen"), ne = Symbol.iterator, ue = "@@iterator";
      function Y(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ne && e[ne] || e[ue];
        return typeof r == "function" ? r : null;
      }
      var ce = {
        current: null
      }, se = {
        transition: null
      }, G = {
        current: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, re = {
        current: null
      }, pe = {}, ye = null;
      function Ce(e) {
        ye = e;
      }
      pe.setExtraStackFrame = function(e) {
        ye = e;
      }, pe.getCurrentStack = null, pe.getStackAddendum = function() {
        var e = "";
        ye && (e += ye);
        var r = pe.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Te = !1, Be = !1, Oe = !1, te = !1, ae = !1, Q = {
        ReactCurrentDispatcher: ce,
        ReactCurrentBatchConfig: se,
        ReactCurrentOwner: re
      };
      Q.ReactDebugCurrentFrame = pe, Q.ReactCurrentActQueue = G;
      function le(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          ve("warn", e, a);
        }
      }
      function h(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          ve("error", e, a);
        }
      }
      function ve(e, r, a) {
        {
          var o = Q.ReactDebugCurrentFrame, s = o.getStackAddendum();
          s !== "" && (r += "%s", a = a.concat([s]));
          var m = a.map(function(p) {
            return String(p);
          });
          m.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, m);
        }
      }
      var Se = {};
      function n(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", s = o + "." + r;
          if (Se[s])
            return;
          h("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Se[s] = !0;
        }
      }
      var c = {
        isMounted: function(e) {
          return !1;
        },
        enqueueForceUpdate: function(e, r, a) {
          n(e, "forceUpdate");
        },
        enqueueReplaceState: function(e, r, a, o) {
          n(e, "replaceState");
        },
        enqueueSetState: function(e, r, a, o) {
          n(e, "setState");
        }
      }, E = Object.assign, D = {};
      Object.freeze(D);
      function S(e, r, a) {
        this.props = e, this.context = r, this.refs = D, this.updater = a || c;
      }
      S.prototype.isReactComponent = {}, S.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, S.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var M = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, W = function(e, r) {
          Object.defineProperty(S.prototype, e, {
            get: function() {
              le("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var F in M)
          M.hasOwnProperty(F) && W(F, M[F]);
      }
      function A() {
      }
      A.prototype = S.prototype;
      function X(e, r, a) {
        this.props = e, this.context = r, this.refs = D, this.updater = a || c;
      }
      var be = X.prototype = new A();
      be.constructor = X, E(be, S.prototype), be.isPureReactComponent = !0;
      function gr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Je = Array.isArray;
      function $e(e) {
        return Je(e);
      }
      function br(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Le(e) {
        try {
          return Pe(e), !1;
        } catch {
          return !0;
        }
      }
      function Pe(e) {
        return "" + e;
      }
      function ke(e) {
        if (Le(e))
          return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", br(e)), Pe(e);
      }
      function Qe(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var s = r.displayName || r.name || "";
        return s !== "" ? a + "(" + s + ")" : a;
      }
      function je(e) {
        return e.displayName || "Context";
      }
      function he(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case y:
            return "Fragment";
          case R:
            return "Portal";
          case w:
            return "Profiler";
          case T:
            return "StrictMode";
          case L:
            return "Suspense";
          case H:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case g:
              var r = e;
              return je(r) + ".Consumer";
            case _:
              var a = e;
              return je(a._context) + ".Provider";
            case N:
              return Qe(e, e.render, "ForwardRef");
            case J:
              var o = e.displayName || null;
              return o !== null ? o : he(e.type) || "Memo";
            case ie: {
              var s = e, m = s._payload, p = s._init;
              try {
                return he(p(m));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var xe = Object.prototype.hasOwnProperty, Me = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ze, er, We;
      We = {};
      function ze(e) {
        if (xe.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function _e(e) {
        if (xe.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function _r(e, r) {
        var a = function() {
          Ze || (Ze = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function rr(e, r) {
        var a = function() {
          er || (er = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function tr(e) {
        if (typeof e.ref == "string" && re.current && e.__self && re.current.stateNode !== e.__self) {
          var r = he(re.current.type);
          We[r] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), We[r] = !0);
        }
      }
      var De = function(e, r, a, o, s, m, p) {
        var b = {
          $$typeof: i,
          type: e,
          key: r,
          ref: a,
          props: p,
          _owner: m
        };
        return b._store = {}, Object.defineProperty(b._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(b, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(b, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: s
        }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
      };
      function Er(e, r, a) {
        var o, s = {}, m = null, p = null, b = null, j = null;
        if (r != null) {
          ze(r) && (p = r.ref, tr(r)), _e(r) && (ke(r.key), m = "" + r.key), b = r.__self === void 0 ? null : r.__self, j = r.__source === void 0 ? null : r.__source;
          for (o in r)
            xe.call(r, o) && !Me.hasOwnProperty(o) && (s[o] = r[o]);
        }
        var $ = arguments.length - 2;
        if ($ === 1)
          s.children = a;
        else if ($ > 1) {
          for (var U = Array($), V = 0; V < $; V++)
            U[V] = arguments[V + 2];
          Object.freeze && Object.freeze(U), s.children = U;
        }
        if (e && e.defaultProps) {
          var z = e.defaultProps;
          for (o in z)
            s[o] === void 0 && (s[o] = z[o]);
        }
        if (m || p) {
          var K = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && _r(s, K), p && rr(s, K);
        }
        return De(e, m, p, b, j, re.current, s);
      }
      function Rr(e, r) {
        var a = De(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function wr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, s = E({}, e.props), m = e.key, p = e.ref, b = e._self, j = e._source, $ = e._owner;
        if (r != null) {
          ze(r) && (p = r.ref, $ = re.current), _e(r) && (ke(r.key), m = "" + r.key);
          var U;
          e.type && e.type.defaultProps && (U = e.type.defaultProps);
          for (o in r)
            xe.call(r, o) && !Me.hasOwnProperty(o) && (r[o] === void 0 && U !== void 0 ? s[o] = U[o] : s[o] = r[o]);
        }
        var V = arguments.length - 2;
        if (V === 1)
          s.children = a;
        else if (V > 1) {
          for (var z = Array(V), K = 0; K < V; K++)
            z[K] = arguments[K + 2];
          s.children = z;
        }
        return De(e.type, m, p, b, j, $, s);
      }
      function Ee(e) {
        return typeof e == "object" && e !== null && e.$$typeof === i;
      }
      var nr = ".", Cr = ":";
      function Tr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(s) {
          return a[s];
        });
        return "$" + o;
      }
      var Ne = !1, ar = /\/+/g;
      function me(e) {
        return e.replace(ar, "$&/");
      }
      function Ae(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (ke(e.key), Tr("" + e.key)) : r.toString(36);
      }
      function Re(e, r, a, o, s) {
        var m = typeof e;
        (m === "undefined" || m === "boolean") && (e = null);
        var p = !1;
        if (e === null)
          p = !0;
        else
          switch (m) {
            case "string":
            case "number":
              p = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case i:
                case R:
                  p = !0;
              }
          }
        if (p) {
          var b = e, j = s(b), $ = o === "" ? nr + Ae(b, 0) : o;
          if ($e(j)) {
            var U = "";
            $ != null && (U = me($) + "/"), Re(j, r, U, "", function(Ut) {
              return Ut;
            });
          } else
            j != null && (Ee(j) && (j.key && (!b || b.key !== j.key) && ke(j.key), j = Rr(
              j,
              a + (j.key && (!b || b.key !== j.key) ? me("" + j.key) + "/" : "") + $
            )), r.push(j));
          return 1;
        }
        var V, z, K = 0, ee = o === "" ? nr : o + Cr;
        if ($e(e))
          for (var hr = 0; hr < e.length; hr++)
            V = e[hr], z = ee + Ae(V, hr), K += Re(V, r, a, z, s);
        else {
          var Wr = Y(e);
          if (typeof Wr == "function") {
            var st = e;
            Wr === st.entries && (Ne || le("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ne = !0);
            for (var Nt = Wr.call(st), ct, Yt = 0; !(ct = Nt.next()).done; )
              V = ct.value, z = ee + Ae(V, Yt++), K += Re(V, r, a, z, s);
          } else if (m === "object") {
            var lt = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (lt === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : lt) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return K;
      }
      function Ie(e, r, a) {
        if (e == null)
          return e;
        var o = [], s = 0;
        return Re(e, o, "", "", function(m) {
          return r.call(a, m, s++);
        }), o;
      }
      function Or(e) {
        var r = 0;
        return Ie(e, function() {
          r++;
        }), r;
      }
      function or(e, r, a) {
        Ie(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function Sr(e) {
        return Ie(e, function(r) {
          return r;
        }) || [];
      }
      function ir(e) {
        if (!Ee(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function ur(e) {
        var r = {
          $$typeof: g,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: _,
          _context: r
        };
        var a = !1, o = !1, s = !1;
        {
          var m = {
            $$typeof: g,
            _context: r
          };
          Object.defineProperties(m, {
            Provider: {
              get: function() {
                return o || (o = !0, h("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(p) {
                r.Provider = p;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(p) {
                r._currentValue = p;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(p) {
                r._currentValue2 = p;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(p) {
                r._threadCount = p;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, h("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(p) {
                s || (le("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", p), s = !0);
              }
            }
          }), r.Consumer = m;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Fe = -1, He = 0, qe = 1, Pr = 2;
      function kr(e) {
        if (e._status === Fe) {
          var r = e._result, a = r();
          if (a.then(function(m) {
            if (e._status === He || e._status === Fe) {
              var p = e;
              p._status = qe, p._result = m;
            }
          }, function(m) {
            if (e._status === He || e._status === Fe) {
              var p = e;
              p._status = Pr, p._result = m;
            }
          }), e._status === Fe) {
            var o = e;
            o._status = He, o._result = a;
          }
        }
        if (e._status === qe) {
          var s = e._result;
          return s === void 0 && h(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, s), "default" in s || h(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, s), s.default;
        } else
          throw e._result;
      }
      function jr(e) {
        var r = {
          _status: Fe,
          _result: e
        }, a = {
          $$typeof: ie,
          _payload: r,
          _init: kr
        };
        {
          var o, s;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(m) {
                h("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = m, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return s;
              },
              set: function(m) {
                h("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), s = m, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function xr(e) {
        e != null && e.$$typeof === J ? h("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? h("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && h("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && h("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: N,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function u(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === y || e === w || ae || e === T || e === L || e === H || te || e === ge || Te || Be || Oe || typeof e == "object" && e !== null && (e.$$typeof === ie || e.$$typeof === J || e.$$typeof === _ || e.$$typeof === g || e.$$typeof === N || e.$$typeof === t || e.getModuleId !== void 0));
      }
      function f(e, r) {
        u(e) || h("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: J,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(s) {
              o = s, !e.name && !e.displayName && (e.displayName = s);
            }
          });
        }
        return a;
      }
      function d() {
        var e = ce.current;
        return e === null && h(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function x(e) {
        var r = d();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? h("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && h("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function I(e) {
        var r = d();
        return r.useState(e);
      }
      function P(e, r, a) {
        var o = d();
        return o.useReducer(e, r, a);
      }
      function C(e) {
        var r = d();
        return r.useRef(e);
      }
      function Z(e, r) {
        var a = d();
        return a.useEffect(e, r);
      }
      function B(e, r) {
        var a = d();
        return a.useInsertionEffect(e, r);
      }
      function q(e, r) {
        var a = d();
        return a.useLayoutEffect(e, r);
      }
      function oe(e, r) {
        var a = d();
        return a.useCallback(e, r);
      }
      function we(e, r) {
        var a = d();
        return a.useMemo(e, r);
      }
      function sr(e, r, a) {
        var o = d();
        return o.useImperativeHandle(e, r, a);
      }
      function fe(e, r) {
        {
          var a = d();
          return a.useDebugValue(e, r);
        }
      }
      function mt() {
        var e = d();
        return e.useTransition();
      }
      function gt(e) {
        var r = d();
        return r.useDeferredValue(e);
      }
      function bt() {
        var e = d();
        return e.useId();
      }
      function _t(e, r, a) {
        var o = d();
        return o.useSyncExternalStore(e, r, a);
      }
      var Ge = 0, Ur, Vr, Br, zr, Hr, qr, Gr;
      function Kr() {
      }
      Kr.__reactDisabledLog = !0;
      function Et() {
        {
          if (Ge === 0) {
            Ur = console.log, Vr = console.info, Br = console.warn, zr = console.error, Hr = console.group, qr = console.groupCollapsed, Gr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Kr,
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
          Ge++;
        }
      }
      function Rt() {
        {
          if (Ge--, Ge === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: E({}, e, {
                value: Ur
              }),
              info: E({}, e, {
                value: Vr
              }),
              warn: E({}, e, {
                value: Br
              }),
              error: E({}, e, {
                value: zr
              }),
              group: E({}, e, {
                value: Hr
              }),
              groupCollapsed: E({}, e, {
                value: qr
              }),
              groupEnd: E({}, e, {
                value: Gr
              })
            });
          }
          Ge < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Dr = Q.ReactCurrentDispatcher, Ar;
      function cr(e, r, a) {
        {
          if (Ar === void 0)
            try {
              throw Error();
            } catch (s) {
              var o = s.stack.trim().match(/\n( *(at )?)/);
              Ar = o && o[1] || "";
            }
          return `
` + Ar + e;
        }
      }
      var Ir = !1, lr;
      {
        var wt = typeof WeakMap == "function" ? WeakMap : Map;
        lr = new wt();
      }
      function Xr(e, r) {
        if (!e || Ir)
          return "";
        {
          var a = lr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Ir = !0;
        var s = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var m;
        m = Dr.current, Dr.current = null, Et();
        try {
          if (r) {
            var p = function() {
              throw Error();
            };
            if (Object.defineProperty(p.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(p, []);
              } catch (ee) {
                o = ee;
              }
              Reflect.construct(e, [], p);
            } else {
              try {
                p.call();
              } catch (ee) {
                o = ee;
              }
              e.call(p.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ee) {
              o = ee;
            }
            e();
          }
        } catch (ee) {
          if (ee && o && typeof ee.stack == "string") {
            for (var b = ee.stack.split(`
`), j = o.stack.split(`
`), $ = b.length - 1, U = j.length - 1; $ >= 1 && U >= 0 && b[$] !== j[U]; )
              U--;
            for (; $ >= 1 && U >= 0; $--, U--)
              if (b[$] !== j[U]) {
                if ($ !== 1 || U !== 1)
                  do
                    if ($--, U--, U < 0 || b[$] !== j[U]) {
                      var V = `
` + b[$].replace(" at new ", " at ");
                      return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), typeof e == "function" && lr.set(e, V), V;
                    }
                  while ($ >= 1 && U >= 0);
                break;
              }
          }
        } finally {
          Ir = !1, Dr.current = m, Rt(), Error.prepareStackTrace = s;
        }
        var z = e ? e.displayName || e.name : "", K = z ? cr(z) : "";
        return typeof e == "function" && lr.set(e, K), K;
      }
      function Ct(e, r, a) {
        return Xr(e, !1);
      }
      function Tt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function fr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Xr(e, Tt(e));
        if (typeof e == "string")
          return cr(e);
        switch (e) {
          case L:
            return cr("Suspense");
          case H:
            return cr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case N:
              return Ct(e.render);
            case J:
              return fr(e.type, r, a);
            case ie: {
              var o = e, s = o._payload, m = o._init;
              try {
                return fr(m(s), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Jr = {}, Qr = Q.ReactDebugCurrentFrame;
      function dr(e) {
        if (e) {
          var r = e._owner, a = fr(e.type, e._source, r ? r.type : null);
          Qr.setExtraStackFrame(a);
        } else
          Qr.setExtraStackFrame(null);
      }
      function Ot(e, r, a, o, s) {
        {
          var m = Function.call.bind(xe);
          for (var p in e)
            if (m(e, p)) {
              var b = void 0;
              try {
                if (typeof e[p] != "function") {
                  var j = Error((o || "React class") + ": " + a + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw j.name = "Invariant Violation", j;
                }
                b = e[p](r, p, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch ($) {
                b = $;
              }
              b && !(b instanceof Error) && (dr(s), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, p, typeof b), dr(null)), b instanceof Error && !(b.message in Jr) && (Jr[b.message] = !0, dr(s), h("Failed %s type: %s", a, b.message), dr(null));
            }
        }
      }
      function Ye(e) {
        if (e) {
          var r = e._owner, a = fr(e.type, e._source, r ? r.type : null);
          Ce(a);
        } else
          Ce(null);
      }
      var Fr;
      Fr = !1;
      function Zr() {
        if (re.current) {
          var e = he(re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function St(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function Pt(e) {
        return e != null ? St(e.__source) : "";
      }
      var et = {};
      function kt(e) {
        var r = Zr();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function rt(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = kt(r);
          if (!et[a]) {
            et[a] = !0;
            var o = "";
            e && e._owner && e._owner !== re.current && (o = " It was passed a child from " + he(e._owner.type) + "."), Ye(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ye(null);
          }
        }
      }
      function tt(e, r) {
        if (typeof e == "object") {
          if ($e(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              Ee(o) && rt(o, r);
            }
          else if (Ee(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var s = Y(e);
            if (typeof s == "function" && s !== e.entries)
              for (var m = s.call(e), p; !(p = m.next()).done; )
                Ee(p.value) && rt(p.value, r);
          }
        }
      }
      function nt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === N || r.$$typeof === J))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = he(r);
            Ot(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Fr) {
            Fr = !0;
            var s = he(r);
            h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function jt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              Ye(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ye(null);
              break;
            }
          }
          e.ref !== null && (Ye(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), Ye(null));
        }
      }
      function at(e, r, a) {
        var o = u(e);
        if (!o) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = Pt(r);
          m ? s += m : s += Zr();
          var p;
          e === null ? p = "null" : $e(e) ? p = "array" : e !== void 0 && e.$$typeof === i ? (p = "<" + (he(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, h("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, s);
        }
        var b = Er.apply(this, arguments);
        if (b == null)
          return b;
        if (o)
          for (var j = 2; j < arguments.length; j++)
            tt(arguments[j], e);
        return e === y ? jt(b) : nt(b), b;
      }
      var ot = !1;
      function xt(e) {
        var r = at.bind(null, e);
        return r.type = e, ot || (ot = !0, le("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return le("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function Dt(e, r, a) {
        for (var o = wr.apply(this, arguments), s = 2; s < arguments.length; s++)
          tt(arguments[s], o.type);
        return nt(o), o;
      }
      function At(e, r) {
        var a = se.transition;
        se.transition = {};
        var o = se.transition;
        se.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (se.transition = a, a === null && o._updatedFibers) {
            var s = o._updatedFibers.size;
            s > 10 && le("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var it = !1, pr = null;
      function It(e) {
        if (pr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = k && k[r];
            pr = a.call(k, "timers").setImmediate;
          } catch {
            pr = function(s) {
              it === !1 && (it = !0, typeof MessageChannel > "u" && h("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var m = new MessageChannel();
              m.port1.onmessage = s, m.port2.postMessage(void 0);
            };
          }
        return pr(e);
      }
      var Ue = 0, ut = !1;
      function Ft(e) {
        {
          var r = Ue;
          Ue++, G.current === null && (G.current = []);
          var a = G.isBatchingLegacy, o;
          try {
            if (G.isBatchingLegacy = !0, o = e(), !a && G.didScheduleLegacyUpdate) {
              var s = G.current;
              s !== null && (G.didScheduleLegacyUpdate = !1, Mr(s));
            }
          } catch (z) {
            throw vr(r), z;
          } finally {
            G.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var m = o, p = !1, b = {
              then: function(z, K) {
                p = !0, m.then(function(ee) {
                  vr(r), Ue === 0 ? $r(ee, z, K) : z(ee);
                }, function(ee) {
                  vr(r), K(ee);
                });
              }
            };
            return !ut && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              p || (ut = !0, h("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), b;
          } else {
            var j = o;
            if (vr(r), Ue === 0) {
              var $ = G.current;
              $ !== null && (Mr($), G.current = null);
              var U = {
                then: function(z, K) {
                  G.current === null ? (G.current = [], $r(j, z, K)) : z(j);
                }
              };
              return U;
            } else {
              var V = {
                then: function(z, K) {
                  z(j);
                }
              };
              return V;
            }
          }
        }
      }
      function vr(e) {
        e !== Ue - 1 && h("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ue = e;
      }
      function $r(e, r, a) {
        {
          var o = G.current;
          if (o !== null)
            try {
              Mr(o), It(function() {
                o.length === 0 ? (G.current = null, r(e)) : $r(e, r, a);
              });
            } catch (s) {
              a(s);
            }
          else
            r(e);
        }
      }
      var Lr = !1;
      function Mr(e) {
        if (!Lr) {
          Lr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Lr = !1;
          }
        }
      }
      var $t = at, Lt = Dt, Mt = xt, Wt = {
        map: Ie,
        forEach: or,
        count: Or,
        toArray: Sr,
        only: ir
      };
      v.Children = Wt, v.Component = S, v.Fragment = y, v.Profiler = w, v.PureComponent = X, v.StrictMode = T, v.Suspense = L, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q, v.cloneElement = Lt, v.createContext = ur, v.createElement = $t, v.createFactory = Mt, v.createRef = gr, v.forwardRef = xr, v.isValidElement = Ee, v.lazy = jr, v.memo = f, v.startTransition = At, v.unstable_act = Ft, v.useCallback = oe, v.useContext = x, v.useDebugValue = fe, v.useDeferredValue = gt, v.useEffect = Z, v.useId = bt, v.useImperativeHandle = sr, v.useInsertionEffect = B, v.useLayoutEffect = q, v.useMemo = we, v.useReducer = P, v.useRef = C, v.useState = I, v.useSyncExternalStore = _t, v.useTransition = mt, v.version = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(yr, yr.exports)), yr.exports;
}
(function(k) {
  process.env.NODE_ENV === "production" ? k.exports = zt() : k.exports = Ht();
})(mr);
const qt = /* @__PURE__ */ Bt(mr.exports);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pt;
function Gt() {
  if (pt)
    return Ke;
  pt = 1;
  var k = mr.exports, v = Symbol.for("react.element"), l = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, R = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(w, _, g) {
    var N, L = {}, H = null, J = null;
    g !== void 0 && (H = "" + g), _.key !== void 0 && (H = "" + _.key), _.ref !== void 0 && (J = _.ref);
    for (N in _)
      i.call(_, N) && !y.hasOwnProperty(N) && (L[N] = _[N]);
    if (w && w.defaultProps)
      for (N in _ = w.defaultProps, _)
        L[N] === void 0 && (L[N] = _[N]);
    return { $$typeof: v, type: w, key: H, ref: J, props: L, _owner: R.current };
  }
  return Ke.Fragment = l, Ke.jsx = T, Ke.jsxs = T, Ke;
}
var Xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function Kt() {
  return vt || (vt = 1, process.env.NODE_ENV !== "production" && function() {
    var k = mr.exports, v = Symbol.for("react.element"), l = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), w = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), ie = Symbol.iterator, ge = "@@iterator";
    function ne(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = ie && t[ie] || t[ge];
      return typeof u == "function" ? u : null;
    }
    var ue = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Y(t) {
      {
        for (var u = arguments.length, f = new Array(u > 1 ? u - 1 : 0), d = 1; d < u; d++)
          f[d - 1] = arguments[d];
        ce("error", t, f);
      }
    }
    function ce(t, u, f) {
      {
        var d = ue.ReactDebugCurrentFrame, x = d.getStackAddendum();
        x !== "" && (u += "%s", f = f.concat([x]));
        var I = f.map(function(P) {
          return String(P);
        });
        I.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, I);
      }
    }
    var se = !1, G = !1, re = !1, pe = !1, ye = !1, Ce;
    Ce = Symbol.for("react.module.reference");
    function Te(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === y || ye || t === R || t === g || t === N || pe || t === J || se || G || re || typeof t == "object" && t !== null && (t.$$typeof === H || t.$$typeof === L || t.$$typeof === T || t.$$typeof === w || t.$$typeof === _ || t.$$typeof === Ce || t.getModuleId !== void 0));
    }
    function Be(t, u, f) {
      var d = t.displayName;
      if (d)
        return d;
      var x = u.displayName || u.name || "";
      return x !== "" ? f + "(" + x + ")" : f;
    }
    function Oe(t) {
      return t.displayName || "Context";
    }
    function te(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case i:
          return "Fragment";
        case l:
          return "Portal";
        case y:
          return "Profiler";
        case R:
          return "StrictMode";
        case g:
          return "Suspense";
        case N:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case w:
            var u = t;
            return Oe(u) + ".Consumer";
          case T:
            var f = t;
            return Oe(f._context) + ".Provider";
          case _:
            return Be(t, t.render, "ForwardRef");
          case L:
            var d = t.displayName || null;
            return d !== null ? d : te(t.type) || "Memo";
          case H: {
            var x = t, I = x._payload, P = x._init;
            try {
              return te(P(I));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ae = Object.assign, Q = 0, le, h, ve, Se, n, c, E;
    function D() {
    }
    D.__reactDisabledLog = !0;
    function S() {
      {
        if (Q === 0) {
          le = console.log, h = console.info, ve = console.warn, Se = console.error, n = console.group, c = console.groupCollapsed, E = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: D,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        Q++;
      }
    }
    function M() {
      {
        if (Q--, Q === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ae({}, t, {
              value: le
            }),
            info: ae({}, t, {
              value: h
            }),
            warn: ae({}, t, {
              value: ve
            }),
            error: ae({}, t, {
              value: Se
            }),
            group: ae({}, t, {
              value: n
            }),
            groupCollapsed: ae({}, t, {
              value: c
            }),
            groupEnd: ae({}, t, {
              value: E
            })
          });
        }
        Q < 0 && Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var W = ue.ReactCurrentDispatcher, F;
    function A(t, u, f) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (x) {
            var d = x.stack.trim().match(/\n( *(at )?)/);
            F = d && d[1] || "";
          }
        return `
` + F + t;
      }
    }
    var X = !1, be;
    {
      var gr = typeof WeakMap == "function" ? WeakMap : Map;
      be = new gr();
    }
    function Je(t, u) {
      if (!t || X)
        return "";
      {
        var f = be.get(t);
        if (f !== void 0)
          return f;
      }
      var d;
      X = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var I;
      I = W.current, W.current = null, S();
      try {
        if (u) {
          var P = function() {
            throw Error();
          };
          if (Object.defineProperty(P.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(P, []);
            } catch (fe) {
              d = fe;
            }
            Reflect.construct(t, [], P);
          } else {
            try {
              P.call();
            } catch (fe) {
              d = fe;
            }
            t.call(P.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (fe) {
            d = fe;
          }
          t();
        }
      } catch (fe) {
        if (fe && d && typeof fe.stack == "string") {
          for (var C = fe.stack.split(`
`), Z = d.stack.split(`
`), B = C.length - 1, q = Z.length - 1; B >= 1 && q >= 0 && C[B] !== Z[q]; )
            q--;
          for (; B >= 1 && q >= 0; B--, q--)
            if (C[B] !== Z[q]) {
              if (B !== 1 || q !== 1)
                do
                  if (B--, q--, q < 0 || C[B] !== Z[q]) {
                    var oe = `
` + C[B].replace(" at new ", " at ");
                    return t.displayName && oe.includes("<anonymous>") && (oe = oe.replace("<anonymous>", t.displayName)), typeof t == "function" && be.set(t, oe), oe;
                  }
                while (B >= 1 && q >= 0);
              break;
            }
        }
      } finally {
        X = !1, W.current = I, M(), Error.prepareStackTrace = x;
      }
      var we = t ? t.displayName || t.name : "", sr = we ? A(we) : "";
      return typeof t == "function" && be.set(t, sr), sr;
    }
    function $e(t, u, f) {
      return Je(t, !1);
    }
    function br(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function Le(t, u, f) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Je(t, br(t));
      if (typeof t == "string")
        return A(t);
      switch (t) {
        case g:
          return A("Suspense");
        case N:
          return A("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case _:
            return $e(t.render);
          case L:
            return Le(t.type, u, f);
          case H: {
            var d = t, x = d._payload, I = d._init;
            try {
              return Le(I(x), u, f);
            } catch {
            }
          }
        }
      return "";
    }
    var Pe = Object.prototype.hasOwnProperty, ke = {}, Qe = ue.ReactDebugCurrentFrame;
    function je(t) {
      if (t) {
        var u = t._owner, f = Le(t.type, t._source, u ? u.type : null);
        Qe.setExtraStackFrame(f);
      } else
        Qe.setExtraStackFrame(null);
    }
    function he(t, u, f, d, x) {
      {
        var I = Function.call.bind(Pe);
        for (var P in t)
          if (I(t, P)) {
            var C = void 0;
            try {
              if (typeof t[P] != "function") {
                var Z = Error((d || "React class") + ": " + f + " type `" + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[P] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Z.name = "Invariant Violation", Z;
              }
              C = t[P](u, P, d, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (B) {
              C = B;
            }
            C && !(C instanceof Error) && (je(x), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", f, P, typeof C), je(null)), C instanceof Error && !(C.message in ke) && (ke[C.message] = !0, je(x), Y("Failed %s type: %s", f, C.message), je(null));
          }
      }
    }
    var xe = Array.isArray;
    function Me(t) {
      return xe(t);
    }
    function Ze(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, f = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return f;
      }
    }
    function er(t) {
      try {
        return We(t), !1;
      } catch {
        return !0;
      }
    }
    function We(t) {
      return "" + t;
    }
    function ze(t) {
      if (er(t))
        return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(t)), We(t);
    }
    var _e = ue.ReactCurrentOwner, _r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, tr, De;
    De = {};
    function Er(t) {
      if (Pe.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Rr(t) {
      if (Pe.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function wr(t, u) {
      if (typeof t.ref == "string" && _e.current && u && _e.current.stateNode !== u) {
        var f = te(_e.current.type);
        De[f] || (Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', te(_e.current.type), t.ref), De[f] = !0);
      }
    }
    function Ee(t, u) {
      {
        var f = function() {
          rr || (rr = !0, Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function nr(t, u) {
      {
        var f = function() {
          tr || (tr = !0, Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var Cr = function(t, u, f, d, x, I, P) {
      var C = {
        $$typeof: v,
        type: t,
        key: u,
        ref: f,
        props: P,
        _owner: I
      };
      return C._store = {}, Object.defineProperty(C._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(C, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(C, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(C.props), Object.freeze(C)), C;
    };
    function Tr(t, u, f, d, x) {
      {
        var I, P = {}, C = null, Z = null;
        f !== void 0 && (ze(f), C = "" + f), Rr(u) && (ze(u.key), C = "" + u.key), Er(u) && (Z = u.ref, wr(u, x));
        for (I in u)
          Pe.call(u, I) && !_r.hasOwnProperty(I) && (P[I] = u[I]);
        if (t && t.defaultProps) {
          var B = t.defaultProps;
          for (I in B)
            P[I] === void 0 && (P[I] = B[I]);
        }
        if (C || Z) {
          var q = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          C && Ee(P, q), Z && nr(P, q);
        }
        return Cr(t, C, Z, x, d, _e.current, P);
      }
    }
    var Ne = ue.ReactCurrentOwner, ar = ue.ReactDebugCurrentFrame;
    function me(t) {
      if (t) {
        var u = t._owner, f = Le(t.type, t._source, u ? u.type : null);
        ar.setExtraStackFrame(f);
      } else
        ar.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function Re(t) {
      return typeof t == "object" && t !== null && t.$$typeof === v;
    }
    function Ie() {
      {
        if (Ne.current) {
          var t = te(Ne.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Or(t) {
      {
        if (t !== void 0) {
          var u = t.fileName.replace(/^.*[\\\/]/, ""), f = t.lineNumber;
          return `

Check your code at ` + u + ":" + f + ".";
        }
        return "";
      }
    }
    var or = {};
    function Sr(t) {
      {
        var u = Ie();
        if (!u) {
          var f = typeof t == "string" ? t : t.displayName || t.name;
          f && (u = `

Check the top-level render call using <` + f + ">.");
        }
        return u;
      }
    }
    function ir(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var f = Sr(u);
        if (or[f])
          return;
        or[f] = !0;
        var d = "";
        t && t._owner && t._owner !== Ne.current && (d = " It was passed a child from " + te(t._owner.type) + "."), me(t), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, d), me(null);
      }
    }
    function ur(t, u) {
      {
        if (typeof t != "object")
          return;
        if (Me(t))
          for (var f = 0; f < t.length; f++) {
            var d = t[f];
            Re(d) && ir(d, u);
          }
        else if (Re(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var x = ne(t);
          if (typeof x == "function" && x !== t.entries)
            for (var I = x.call(t), P; !(P = I.next()).done; )
              Re(P.value) && ir(P.value, u);
        }
      }
    }
    function Fe(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var f;
        if (typeof u == "function")
          f = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === _ || u.$$typeof === L))
          f = u.propTypes;
        else
          return;
        if (f) {
          var d = te(u);
          he(f, t.props, "prop", d, t);
        } else if (u.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var x = te(u);
          Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function He(t) {
      {
        for (var u = Object.keys(t.props), f = 0; f < u.length; f++) {
          var d = u[f];
          if (d !== "children" && d !== "key") {
            me(t), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), me(null);
            break;
          }
        }
        t.ref !== null && (me(t), Y("Invalid attribute `ref` supplied to `React.Fragment`."), me(null));
      }
    }
    function qe(t, u, f, d, x, I) {
      {
        var P = Te(t);
        if (!P) {
          var C = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Z = Or(x);
          Z ? C += Z : C += Ie();
          var B;
          t === null ? B = "null" : Me(t) ? B = "array" : t !== void 0 && t.$$typeof === v ? (B = "<" + (te(t.type) || "Unknown") + " />", C = " Did you accidentally export a JSX literal instead of a component?") : B = typeof t, Y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, C);
        }
        var q = Tr(t, u, f, x, I);
        if (q == null)
          return q;
        if (P) {
          var oe = u.children;
          if (oe !== void 0)
            if (d)
              if (Me(oe)) {
                for (var we = 0; we < oe.length; we++)
                  ur(oe[we], t);
                Object.freeze && Object.freeze(oe);
              } else
                Y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ur(oe, t);
        }
        return t === i ? He(q) : Fe(q), q;
      }
    }
    function Pr(t, u, f) {
      return qe(t, u, f, !0);
    }
    function kr(t, u, f) {
      return qe(t, u, f, !1);
    }
    var jr = kr, xr = Pr;
    Xe.Fragment = i, Xe.jsx = jr, Xe.jsxs = xr;
  }()), Xe;
}
(function(k) {
  process.env.NODE_ENV === "production" ? k.exports = Gt() : k.exports = Kt();
})(Yr);
const de = Yr.exports.jsx, Xt = Yr.exports.jsxs;
var Jt = ["u", "d", "l", "r", "lu", "ru", "rd", "ld"], ht = 50, yt = 50, Qt = function(k) {
  Vt(v, k);
  function v(l) {
    var i = k.call(this, l) || this;
    return Object.defineProperty(i, "isMouseDown", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(i, "startX", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(i, "startY", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(i, "width", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(i, "height", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(i, "currentX", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(i, "currentY", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(i, "dragDirection", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(i, "element", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(i, "transform", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: function(R, y) {
        switch (i.dragDirection) {
          case "l":
            i.extendToLeft(R);
            break;
          case "r":
            i.extendToRight(R);
            break;
          case "u":
            i.extendToUp(y);
            break;
          case "d":
            i.extendToDown(y);
            break;
          case "lu":
            i.extendToLeft(R), i.extendToUp(y);
            break;
          case "ru":
            i.extendToRight(R), i.extendToUp(y);
            break;
          case "ld":
            i.extendToLeft(R), i.extendToDown(y);
            break;
          case "rd":
            i.extendToRight(R), i.extendToDown(y);
        }
        var T = {
          x: i.element.parentElement.offsetLeft,
          y: i.element.parentElement.offsetTop,
          width: i.element.parentElement.clientWidth,
          height: i.element.parentElement.clientHeight
        };
        i.props.onChange && i.props.onChange(T);
      }
    }), Object.defineProperty(i, "extendToLeft", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: function(R) {
        if (i.element) {
          var y = i.currentX + R;
          if (y < 0)
            y = 0, i.element.parentElement.style.left = "".concat(y, "px");
          else {
            var T = i.props.minWidth, w = T === void 0 ? ht : T, _ = i.width - R;
            _ < w ? _ = w : i.element.parentElement.style.left = "".concat(y, "px"), i.element.parentElement.style.width = "".concat(_, "px");
          }
        }
      }
    }), Object.defineProperty(i, "extendToRight", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: function(R) {
        if (i.element) {
          var y = i.width + R, T = document.getElementById(i.props.container);
          T && i.currentX + y >= T.clientWidth && (y = T.clientWidth - i.currentX);
          var w = i.props.minWidth, _ = w === void 0 ? ht : w;
          y < _ && (y = _), i.element.parentElement.style.width = "".concat(y, "px");
        }
      }
    }), Object.defineProperty(i, "extendToUp", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: function(R) {
        if (i.element) {
          var y = i.currentY + R;
          if (y <= 0)
            y = 0, i.element.parentElement.style.top = "".concat(y, "px");
          else {
            var T = i.height - R, w = i.props.minHeight, _ = w === void 0 ? yt : w;
            T < _ ? T = _ : i.element.parentElement.style.top = "".concat(y, "px"), i.element.parentElement.style.height = "".concat(T, "px");
          }
        }
      }
    }), Object.defineProperty(i, "extendToDown", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: function(R) {
        if (i.element) {
          var y = i.height + R, T = document.getElementById(i.props.container);
          T && y + i.currentY > T.clientHeight && (y = T.clientHeight - i.currentY);
          var w = i.props.minHeight, _ = w === void 0 ? yt : w;
          y < _ && (y = _), i.element.parentElement.style.height = "".concat(y, "px");
        }
      }
    }), i.currentX = l.x || 0, i.currentY = l.y || 0, i.width = l.width || 100, i.height = l.height || 100, i;
  }
  return Object.defineProperty(v.prototype, "componentDidMount", {
    enumerable: !1,
    configurable: !0,
    writable: !0,
    value: function() {
      var l = this;
      window.addEventListener("mousedown", function(i) {
        if (l.startX = i.clientX, l.startY = i.clientY, i.target == l.element)
          l.isMouseDown = !0, l.element && (l.currentX = l.element.parentElement.offsetLeft, l.currentY = l.element.parentElement.offsetTop);
        else if (i.target && i.target.parentElement === l.element) {
          var R = i.target.dataset.key;
          Jt.includes(R) && (l.isMouseDown = !0, l.dragDirection = R);
        }
      }), window.addEventListener("mousemove", function(i) {
        var R = i.clientX - l.startX, y = i.clientY - l.startY;
        if (l.isMouseDown) {
          if (l.dragDirection)
            l.transform(R, y);
          else if (l.element) {
            var T = l.currentX + R, w = l.currentY + y, _ = document.getElementById(l.props.container);
            T < 0 && (T = 0), w < 0 && (w = 0), _ && (T > _.clientWidth - l.width && (T = _.clientWidth - l.width), w > _.clientHeight - l.height && (w = _.clientHeight - l.height)), l.element.parentElement.style.left = "".concat(T, "px"), l.element.parentElement.style.top = "".concat(w, "px");
          }
          l.props.onChange && l.props.onChange({
            x: l.element.parentElement.offsetLeft,
            y: l.element.parentElement.offsetTop,
            width: l.width,
            height: l.height
          });
        }
      }), window.addEventListener("mouseup", function(i) {
        l.isMouseDown = !1, l.element && (l.currentX = l.element.parentElement.offsetLeft, l.currentY = l.element.parentElement.offsetTop, l.width = l.element.parentElement.clientWidth, l.height = l.element.parentElement.clientHeight), l.dragDirection = "";
      });
    }
  }), Object.defineProperty(v.prototype, "render", {
    enumerable: !1,
    configurable: !0,
    writable: !0,
    value: function() {
      var l = this, i = this.props, R = i.anchorBorderColor, y = R === void 0 ? "#666666" : R, T = i.anchorBorderWidth, w = T === void 0 ? 1 : T, _ = i.anchorSize, g = _ === void 0 ? 6 : _, N = i.anchorColor, L = N === void 0 ? "#ffffff" : N, H = "solid ".concat(w, "px ").concat(y), J = this.props, ie = J.background, ge = ie === void 0 ? "rgba(243,255,226,.8)" : ie, ne = J.containerStyle, ue = ne === void 0 ? {} : ne, Y = {
        background: ge,
        border: "solid 1px #000000"
      }, ce = Object.assign({}, Y, ue);
      return ce.position = "absolute", de("div", Ve({
        style: ce
      }, {
        children: Xt("div", Ve({
          style: {
            position: "relative",
            width: "100%",
            height: "100%"
          },
          ref: function(se) {
            l.element = se, l.element && (l.element.parentElement.style.left = "".concat(l.currentX, "px"), l.element.parentElement.style.top = "".concat(l.currentY, "px"), l.element.parentElement.style.width = "".concat(l.width, "px"), l.element.parentElement.style.height = "".concat(l.height, "px"));
          }
        }, {
          children: [de("div", Ve({
            style: {
              width: "100%",
              height: "100%",
              position: "absolute"
            }
          }, {
            children: de("div", Ve({
              style: {
                width: "100%",
                height: "100%",
                position: "relative"
              }
            }, {
              children: this.props.children
            }))
          })), de("div", {
            "data-key": "lu",
            style: {
              border: H,
              position: "absolute",
              backgroundColor: L,
              width: g,
              height: g,
              left: -g / 2 - w,
              top: -g / 2 - w
            }
          }), de("div", {
            "data-key": "u",
            style: {
              border: H,
              position: "absolute",
              backgroundColor: L,
              width: g,
              height: g,
              left: "calc(50% - ".concat(g / 2, "px)"),
              top: -g / 2 - w
            }
          }), de("div", {
            "data-key": "ru",
            style: {
              border: H,
              position: "absolute",
              backgroundColor: L,
              width: g,
              height: g,
              left: "calc(100% - ".concat(g / 2, "px)"),
              top: -g / 2 - w
            }
          }), de("div", {
            "data-key": "ld",
            style: {
              border: H,
              position: "absolute",
              backgroundColor: L,
              width: g,
              height: g,
              left: -g / 2 - w,
              top: "calc(100% - ".concat(g / 2, "px)")
            }
          }), de("div", {
            "data-key": "d",
            style: {
              border: H,
              position: "absolute",
              backgroundColor: L,
              width: g,
              height: g,
              left: "calc(50% - ".concat(g / 2, "px)"),
              top: "calc(100% - ".concat(g / 2, "px)")
            }
          }), de("div", {
            "data-key": "rd",
            style: {
              border: H,
              position: "absolute",
              backgroundColor: L,
              width: g,
              height: g,
              left: "calc(100% - ".concat(g / 2, "px)"),
              top: "calc(100% - ".concat(g / 2, "px)")
            }
          }), de("div", {
            "data-key": "l",
            style: {
              border: H,
              position: "absolute",
              backgroundColor: L,
              width: g,
              height: g,
              left: -g / 2 - w,
              top: "calc(50% - ".concat(g / 2, "px)")
            }
          }), de("div", {
            "data-key": "r",
            style: {
              border: H,
              position: "absolute",
              backgroundColor: L,
              width: g,
              height: g,
              left: "calc(100% - ".concat(g / 2, "px)"),
              top: "calc(50% - ".concat(g / 2, "px)")
            }
          })]
        }))
      }));
    }
  }), v;
}(qt.Component);
export {
  Qt as default
};
