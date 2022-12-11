var Wr = function(P, p) {
  return Wr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(O, a) {
    O.__proto__ = a;
  } || function(O, a) {
    for (var v in a)
      Object.prototype.hasOwnProperty.call(a, v) && (O[v] = a[v]);
  }, Wr(P, p);
};
function Vt(P, p) {
  if (typeof p != "function" && p !== null)
    throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
  Wr(P, p);
  function O() {
    this.constructor = P;
  }
  P.prototype = p === null ? Object.create(p) : (O.prototype = p.prototype, new O());
}
var Ve = function() {
  return Ve = Object.assign || function(p) {
    for (var O, a = 1, v = arguments.length; a < v; a++) {
      O = arguments[a];
      for (var y in O)
        Object.prototype.hasOwnProperty.call(O, y) && (p[y] = O[y]);
    }
    return p;
  }, Ve.apply(this, arguments);
};
function Bt(P) {
  return P && P.__esModule && Object.prototype.hasOwnProperty.call(P, "default") ? P.default : P;
}
var Ur = { exports: {} }, Ke = {}, mr = { exports: {} }, C = {};
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
function Ht() {
  if (ft)
    return C;
  ft = 1;
  var P = Symbol.for("react.element"), p = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), k = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), L = Symbol.iterator;
  function z(n) {
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
  function U(n, c, E) {
    this.props = n, this.context = c, this.refs = ge, this.updater = E || J;
  }
  var ce = U.prototype = new ue();
  ce.constructor = U, ie(ce, ne.prototype), ce.isPureReactComponent = !0;
  var se = Array.isArray, G = Object.prototype.hasOwnProperty, re = { current: null }, pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function he(n, c, E) {
    var D, T = {}, M = null, N = null;
    if (c != null)
      for (D in c.ref !== void 0 && (N = c.ref), c.key !== void 0 && (M = "" + c.key), c)
        G.call(c, D) && !pe.hasOwnProperty(D) && (T[D] = c[D]);
    var F = arguments.length - 2;
    if (F === 1)
      T.children = E;
    else if (1 < F) {
      for (var A = Array(F), X = 0; X < F; X++)
        A[X] = arguments[X + 2];
      T.children = A;
    }
    if (n && n.defaultProps)
      for (D in F = n.defaultProps, F)
        T[D] === void 0 && (T[D] = F[D]);
    return { $$typeof: P, type: n, key: M, ref: N, props: T, _owner: re.current };
  }
  function Ce(n, c) {
    return { $$typeof: P, type: n.type, key: c, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Oe(n) {
    return typeof n == "object" && n !== null && n.$$typeof === P;
  }
  function Be(n) {
    var c = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(E) {
      return c[E];
    });
  }
  var Te = /\/+/g;
  function te(n, c) {
    return typeof n == "object" && n !== null && n.key != null ? Be("" + n.key) : c.toString(36);
  }
  function ae(n, c, E, D, T) {
    var M = typeof n;
    (M === "undefined" || M === "boolean") && (n = null);
    var N = !1;
    if (n === null)
      N = !0;
    else
      switch (M) {
        case "string":
        case "number":
          N = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case P:
            case p:
              N = !0;
          }
      }
    if (N)
      return N = n, T = T(N), n = D === "" ? "." + te(N, 0) : D, se(T) ? (E = "", n != null && (E = n.replace(Te, "$&/") + "/"), ae(T, c, E, "", function(X) {
        return X;
      })) : T != null && (Oe(T) && (T = Ce(T, E + (!T.key || N && N.key === T.key ? "" : ("" + T.key).replace(Te, "$&/") + "/") + n)), c.push(T)), 1;
    if (N = 0, D = D === "" ? "." : D + ":", se(n))
      for (var F = 0; F < n.length; F++) {
        M = n[F];
        var A = D + te(M, F);
        N += ae(M, c, E, A, T);
      }
    else if (A = z(n), typeof A == "function")
      for (n = A.call(n), F = 0; !(M = n.next()).done; )
        M = M.value, A = D + te(M, F++), N += ae(M, c, E, A, T);
    else if (M === "object")
      throw c = String(n), Error("Objects are not valid as a React child (found: " + (c === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : c) + "). If you meant to render a collection of children, use an array instead.");
    return N;
  }
  function Q(n, c, E) {
    if (n == null)
      return n;
    var D = [], T = 0;
    return ae(n, D, "", "", function(M) {
      return c.call(E, M, T++);
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
  var m = { current: null }, ve = { transition: null }, Se = { ReactCurrentDispatcher: m, ReactCurrentBatchConfig: ve, ReactCurrentOwner: re };
  return C.Children = { map: Q, forEach: function(n, c, E) {
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
    if (!Oe(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, C.Component = ne, C.Fragment = O, C.Profiler = v, C.PureComponent = U, C.StrictMode = a, C.Suspense = _, C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Se, C.cloneElement = function(n, c, E) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var D = ie({}, n.props), T = n.key, M = n.ref, N = n._owner;
    if (c != null) {
      if (c.ref !== void 0 && (M = c.ref, N = re.current), c.key !== void 0 && (T = "" + c.key), n.type && n.type.defaultProps)
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
    return { $$typeof: P, type: n.type, key: T, ref: M, props: D, _owner: N };
  }, C.createContext = function(n) {
    return n = { $$typeof: k, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: y, _context: n }, n.Consumer = n;
  }, C.createElement = he, C.createFactory = function(n) {
    var c = he.bind(null, n);
    return c.type = n, c;
  }, C.createRef = function() {
    return { current: null };
  }, C.forwardRef = function(n) {
    return { $$typeof: R, render: n };
  }, C.isValidElement = Oe, C.lazy = function(n) {
    return { $$typeof: W, _payload: { _status: -1, _result: n }, _init: le };
  }, C.memo = function(n, c) {
    return { $$typeof: h, type: n, compare: c === void 0 ? null : c };
  }, C.startTransition = function(n) {
    var c = ve.transition;
    ve.transition = {};
    try {
      n();
    } finally {
      ve.transition = c;
    }
  }, C.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, C.useCallback = function(n, c) {
    return m.current.useCallback(n, c);
  }, C.useContext = function(n) {
    return m.current.useContext(n);
  }, C.useDebugValue = function() {
  }, C.useDeferredValue = function(n) {
    return m.current.useDeferredValue(n);
  }, C.useEffect = function(n, c) {
    return m.current.useEffect(n, c);
  }, C.useId = function() {
    return m.current.useId();
  }, C.useImperativeHandle = function(n, c, E) {
    return m.current.useImperativeHandle(n, c, E);
  }, C.useInsertionEffect = function(n, c) {
    return m.current.useInsertionEffect(n, c);
  }, C.useLayoutEffect = function(n, c) {
    return m.current.useLayoutEffect(n, c);
  }, C.useMemo = function(n, c) {
    return m.current.useMemo(n, c);
  }, C.useReducer = function(n, c, E) {
    return m.current.useReducer(n, c, E);
  }, C.useRef = function(n) {
    return m.current.useRef(n);
  }, C.useState = function(n) {
    return m.current.useState(n);
  }, C.useSyncExternalStore = function(n, c, E) {
    return m.current.useSyncExternalStore(n, c, E);
  }, C.useTransition = function() {
    return m.current.useTransition();
  }, C.version = "18.2.0", C;
}
var hr = { exports: {} };
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
function zt() {
  return dt || (dt = 1, function(P, p) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var O = "18.2.0", a = Symbol.for("react.element"), v = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), h = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), ge = Symbol.for("react.offscreen"), ne = Symbol.iterator, ue = "@@iterator";
      function U(e) {
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
      }, pe = {}, he = null;
      function Ce(e) {
        he = e;
      }
      pe.setExtraStackFrame = function(e) {
        he = e;
      }, pe.getCurrentStack = null, pe.getStackAddendum = function() {
        var e = "";
        he && (e += he);
        var r = pe.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Oe = !1, Be = !1, Te = !1, te = !1, ae = !1, Q = {
        ReactCurrentDispatcher: ce,
        ReactCurrentBatchConfig: se,
        ReactCurrentOwner: re
      };
      Q.ReactDebugCurrentFrame = pe, Q.ReactCurrentActQueue = G;
      function le(e) {
        {
          for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
            o[i - 1] = arguments[i];
          ve("warn", e, o);
        }
      }
      function m(e) {
        {
          for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
            o[i - 1] = arguments[i];
          ve("error", e, o);
        }
      }
      function ve(e, r, o) {
        {
          var i = Q.ReactDebugCurrentFrame, s = i.getStackAddendum();
          s !== "" && (r += "%s", o = o.concat([s]));
          var g = o.map(function(d) {
            return String(d);
          });
          g.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, g);
        }
      }
      var Se = {};
      function n(e, r) {
        {
          var o = e.constructor, i = o && (o.displayName || o.name) || "ReactClass", s = i + "." + r;
          if (Se[s])
            return;
          m("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, i), Se[s] = !0;
        }
      }
      var c = {
        isMounted: function(e) {
          return !1;
        },
        enqueueForceUpdate: function(e, r, o) {
          n(e, "forceUpdate");
        },
        enqueueReplaceState: function(e, r, o, i) {
          n(e, "replaceState");
        },
        enqueueSetState: function(e, r, o, i) {
          n(e, "setState");
        }
      }, E = Object.assign, D = {};
      Object.freeze(D);
      function T(e, r, o) {
        this.props = e, this.context = r, this.refs = D, this.updater = o || c;
      }
      T.prototype.isReactComponent = {}, T.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, T.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var M = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, N = function(e, r) {
          Object.defineProperty(T.prototype, e, {
            get: function() {
              le("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var F in M)
          M.hasOwnProperty(F) && N(F, M[F]);
      }
      function A() {
      }
      A.prototype = T.prototype;
      function X(e, r, o) {
        this.props = e, this.context = r, this.refs = D, this.updater = o || c;
      }
      var be = X.prototype = new A();
      be.constructor = X, E(be, T.prototype), be.isPureReactComponent = !0;
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
          var r = typeof Symbol == "function" && Symbol.toStringTag, o = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return o;
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
          return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", br(e)), Pe(e);
      }
      function Qe(e, r, o) {
        var i = e.displayName;
        if (i)
          return i;
        var s = r.displayName || r.name || "";
        return s !== "" ? o + "(" + s + ")" : o;
      }
      function je(e) {
        return e.displayName || "Context";
      }
      function ye(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case y:
            return "Fragment";
          case v:
            return "Portal";
          case R:
            return "Profiler";
          case k:
            return "StrictMode";
          case L:
            return "Suspense";
          case z:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case h:
              var r = e;
              return je(r) + ".Consumer";
            case _:
              var o = e;
              return je(o._context) + ".Provider";
            case W:
              return Qe(e, e.render, "ForwardRef");
            case J:
              var i = e.displayName || null;
              return i !== null ? i : ye(e.type) || "Memo";
            case ie: {
              var s = e, g = s._payload, d = s._init;
              try {
                return ye(d(g));
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
      }, Ze, er, Ne;
      Ne = {};
      function He(e) {
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
        var o = function() {
          Ze || (Ze = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
      function rr(e, r) {
        var o = function() {
          er || (er = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
      function tr(e) {
        if (typeof e.ref == "string" && re.current && e.__self && re.current.stateNode !== e.__self) {
          var r = ye(re.current.type);
          Ne[r] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Ne[r] = !0);
        }
      }
      var De = function(e, r, o, i, s, g, d) {
        var b = {
          $$typeof: a,
          type: e,
          key: r,
          ref: o,
          props: d,
          _owner: g
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
          value: i
        }), Object.defineProperty(b, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: s
        }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
      };
      function Er(e, r, o) {
        var i, s = {}, g = null, d = null, b = null, j = null;
        if (r != null) {
          He(r) && (d = r.ref, tr(r)), _e(r) && (ke(r.key), g = "" + r.key), b = r.__self === void 0 ? null : r.__self, j = r.__source === void 0 ? null : r.__source;
          for (i in r)
            xe.call(r, i) && !Me.hasOwnProperty(i) && (s[i] = r[i]);
        }
        var $ = arguments.length - 2;
        if ($ === 1)
          s.children = o;
        else if ($ > 1) {
          for (var Y = Array($), V = 0; V < $; V++)
            Y[V] = arguments[V + 2];
          Object.freeze && Object.freeze(Y), s.children = Y;
        }
        if (e && e.defaultProps) {
          var H = e.defaultProps;
          for (i in H)
            s[i] === void 0 && (s[i] = H[i]);
        }
        if (g || d) {
          var K = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          g && _r(s, K), d && rr(s, K);
        }
        return De(e, g, d, b, j, re.current, s);
      }
      function Rr(e, r) {
        var o = De(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return o;
      }
      function wr(e, r, o) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var i, s = E({}, e.props), g = e.key, d = e.ref, b = e._self, j = e._source, $ = e._owner;
        if (r != null) {
          He(r) && (d = r.ref, $ = re.current), _e(r) && (ke(r.key), g = "" + r.key);
          var Y;
          e.type && e.type.defaultProps && (Y = e.type.defaultProps);
          for (i in r)
            xe.call(r, i) && !Me.hasOwnProperty(i) && (r[i] === void 0 && Y !== void 0 ? s[i] = Y[i] : s[i] = r[i]);
        }
        var V = arguments.length - 2;
        if (V === 1)
          s.children = o;
        else if (V > 1) {
          for (var H = Array(V), K = 0; K < V; K++)
            H[K] = arguments[K + 2];
          s.children = H;
        }
        return De(e.type, g, d, b, j, $, s);
      }
      function Ee(e) {
        return typeof e == "object" && e !== null && e.$$typeof === a;
      }
      var nr = ".", Cr = ":";
      function Or(e) {
        var r = /[=:]/g, o = {
          "=": "=0",
          ":": "=2"
        }, i = e.replace(r, function(s) {
          return o[s];
        });
        return "$" + i;
      }
      var We = !1, ar = /\/+/g;
      function me(e) {
        return e.replace(ar, "$&/");
      }
      function Ae(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (ke(e.key), Or("" + e.key)) : r.toString(36);
      }
      function Re(e, r, o, i, s) {
        var g = typeof e;
        (g === "undefined" || g === "boolean") && (e = null);
        var d = !1;
        if (e === null)
          d = !0;
        else
          switch (g) {
            case "string":
            case "number":
              d = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case a:
                case v:
                  d = !0;
              }
          }
        if (d) {
          var b = e, j = s(b), $ = i === "" ? nr + Ae(b, 0) : i;
          if ($e(j)) {
            var Y = "";
            $ != null && (Y = me($) + "/"), Re(j, r, Y, "", function(Yt) {
              return Yt;
            });
          } else
            j != null && (Ee(j) && (j.key && (!b || b.key !== j.key) && ke(j.key), j = Rr(
              j,
              o + (j.key && (!b || b.key !== j.key) ? me("" + j.key) + "/" : "") + $
            )), r.push(j));
          return 1;
        }
        var V, H, K = 0, ee = i === "" ? nr : i + Cr;
        if ($e(e))
          for (var yr = 0; yr < e.length; yr++)
            V = e[yr], H = ee + Ae(V, yr), K += Re(V, r, o, H, s);
        else {
          var Nr = U(e);
          if (typeof Nr == "function") {
            var st = e;
            Nr === st.entries && (We || le("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), We = !0);
            for (var Wt = Nr.call(st), ct, Ut = 0; !(ct = Wt.next()).done; )
              V = ct.value, H = ee + Ae(V, Ut++), K += Re(V, r, o, H, s);
          } else if (g === "object") {
            var lt = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (lt === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : lt) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return K;
      }
      function Ie(e, r, o) {
        if (e == null)
          return e;
        var i = [], s = 0;
        return Re(e, i, "", "", function(g) {
          return r.call(o, g, s++);
        }), i;
      }
      function Tr(e) {
        var r = 0;
        return Ie(e, function() {
          r++;
        }), r;
      }
      function or(e, r, o) {
        Ie(e, function() {
          r.apply(this, arguments);
        }, o);
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
          $$typeof: h,
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
        var o = !1, i = !1, s = !1;
        {
          var g = {
            $$typeof: h,
            _context: r
          };
          Object.defineProperties(g, {
            Provider: {
              get: function() {
                return i || (i = !0, m("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(d) {
                r.Provider = d;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(d) {
                r._currentValue = d;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(d) {
                r._currentValue2 = d;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(d) {
                r._threadCount = d;
              }
            },
            Consumer: {
              get: function() {
                return o || (o = !0, m("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(d) {
                s || (le("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", d), s = !0);
              }
            }
          }), r.Consumer = g;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Fe = -1, ze = 0, qe = 1, Pr = 2;
      function kr(e) {
        if (e._status === Fe) {
          var r = e._result, o = r();
          if (o.then(function(g) {
            if (e._status === ze || e._status === Fe) {
              var d = e;
              d._status = qe, d._result = g;
            }
          }, function(g) {
            if (e._status === ze || e._status === Fe) {
              var d = e;
              d._status = Pr, d._result = g;
            }
          }), e._status === Fe) {
            var i = e;
            i._status = ze, i._result = o;
          }
        }
        if (e._status === qe) {
          var s = e._result;
          return s === void 0 && m(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, s), "default" in s || m(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, s), s.default;
        } else
          throw e._result;
      }
      function jr(e) {
        var r = {
          _status: Fe,
          _result: e
        }, o = {
          $$typeof: ie,
          _payload: r,
          _init: kr
        };
        {
          var i, s;
          Object.defineProperties(o, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return i;
              },
              set: function(g) {
                m("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), i = g, Object.defineProperty(o, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return s;
              },
              set: function(g) {
                m("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), s = g, Object.defineProperty(o, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return o;
      }
      function xr(e) {
        e != null && e.$$typeof === J ? m("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? m("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && m("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && m("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: W,
          render: e
        };
        {
          var o;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(i) {
              o = i, !e.name && !e.displayName && (e.displayName = i);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function u(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === y || e === R || ae || e === k || e === L || e === z || te || e === ge || Oe || Be || Te || typeof e == "object" && e !== null && (e.$$typeof === ie || e.$$typeof === J || e.$$typeof === _ || e.$$typeof === h || e.$$typeof === W || e.$$typeof === t || e.getModuleId !== void 0));
      }
      function l(e, r) {
        u(e) || m("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var o = {
          $$typeof: J,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var i;
          Object.defineProperty(o, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return i;
            },
            set: function(s) {
              i = s, !e.name && !e.displayName && (e.displayName = s);
            }
          });
        }
        return o;
      }
      function f() {
        var e = ce.current;
        return e === null && m(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function x(e) {
        var r = f();
        if (e._context !== void 0) {
          var o = e._context;
          o.Consumer === e ? m("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : o.Provider === e && m("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function I(e) {
        var r = f();
        return r.useState(e);
      }
      function S(e, r, o) {
        var i = f();
        return i.useReducer(e, r, o);
      }
      function w(e) {
        var r = f();
        return r.useRef(e);
      }
      function Z(e, r) {
        var o = f();
        return o.useEffect(e, r);
      }
      function B(e, r) {
        var o = f();
        return o.useInsertionEffect(e, r);
      }
      function q(e, r) {
        var o = f();
        return o.useLayoutEffect(e, r);
      }
      function oe(e, r) {
        var o = f();
        return o.useCallback(e, r);
      }
      function we(e, r) {
        var o = f();
        return o.useMemo(e, r);
      }
      function sr(e, r, o) {
        var i = f();
        return i.useImperativeHandle(e, r, o);
      }
      function fe(e, r) {
        {
          var o = f();
          return o.useDebugValue(e, r);
        }
      }
      function mt() {
        var e = f();
        return e.useTransition();
      }
      function gt(e) {
        var r = f();
        return r.useDeferredValue(e);
      }
      function bt() {
        var e = f();
        return e.useId();
      }
      function _t(e, r, o) {
        var i = f();
        return i.useSyncExternalStore(e, r, o);
      }
      var Ge = 0, Yr, Vr, Br, Hr, zr, qr, Gr;
      function Kr() {
      }
      Kr.__reactDisabledLog = !0;
      function Et() {
        {
          if (Ge === 0) {
            Yr = console.log, Vr = console.info, Br = console.warn, Hr = console.error, zr = console.group, qr = console.groupCollapsed, Gr = console.groupEnd;
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
                value: Yr
              }),
              info: E({}, e, {
                value: Vr
              }),
              warn: E({}, e, {
                value: Br
              }),
              error: E({}, e, {
                value: Hr
              }),
              group: E({}, e, {
                value: zr
              }),
              groupCollapsed: E({}, e, {
                value: qr
              }),
              groupEnd: E({}, e, {
                value: Gr
              })
            });
          }
          Ge < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Dr = Q.ReactCurrentDispatcher, Ar;
      function cr(e, r, o) {
        {
          if (Ar === void 0)
            try {
              throw Error();
            } catch (s) {
              var i = s.stack.trim().match(/\n( *(at )?)/);
              Ar = i && i[1] || "";
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
          var o = lr.get(e);
          if (o !== void 0)
            return o;
        }
        var i;
        Ir = !0;
        var s = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var g;
        g = Dr.current, Dr.current = null, Et();
        try {
          if (r) {
            var d = function() {
              throw Error();
            };
            if (Object.defineProperty(d.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(d, []);
              } catch (ee) {
                i = ee;
              }
              Reflect.construct(e, [], d);
            } else {
              try {
                d.call();
              } catch (ee) {
                i = ee;
              }
              e.call(d.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ee) {
              i = ee;
            }
            e();
          }
        } catch (ee) {
          if (ee && i && typeof ee.stack == "string") {
            for (var b = ee.stack.split(`
`), j = i.stack.split(`
`), $ = b.length - 1, Y = j.length - 1; $ >= 1 && Y >= 0 && b[$] !== j[Y]; )
              Y--;
            for (; $ >= 1 && Y >= 0; $--, Y--)
              if (b[$] !== j[Y]) {
                if ($ !== 1 || Y !== 1)
                  do
                    if ($--, Y--, Y < 0 || b[$] !== j[Y]) {
                      var V = `
` + b[$].replace(" at new ", " at ");
                      return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), typeof e == "function" && lr.set(e, V), V;
                    }
                  while ($ >= 1 && Y >= 0);
                break;
              }
          }
        } finally {
          Ir = !1, Dr.current = g, Rt(), Error.prepareStackTrace = s;
        }
        var H = e ? e.displayName || e.name : "", K = H ? cr(H) : "";
        return typeof e == "function" && lr.set(e, K), K;
      }
      function Ct(e, r, o) {
        return Xr(e, !1);
      }
      function Ot(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function fr(e, r, o) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Xr(e, Ot(e));
        if (typeof e == "string")
          return cr(e);
        switch (e) {
          case L:
            return cr("Suspense");
          case z:
            return cr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case W:
              return Ct(e.render);
            case J:
              return fr(e.type, r, o);
            case ie: {
              var i = e, s = i._payload, g = i._init;
              try {
                return fr(g(s), r, o);
              } catch {
              }
            }
          }
        return "";
      }
      var Jr = {}, Qr = Q.ReactDebugCurrentFrame;
      function dr(e) {
        if (e) {
          var r = e._owner, o = fr(e.type, e._source, r ? r.type : null);
          Qr.setExtraStackFrame(o);
        } else
          Qr.setExtraStackFrame(null);
      }
      function Tt(e, r, o, i, s) {
        {
          var g = Function.call.bind(xe);
          for (var d in e)
            if (g(e, d)) {
              var b = void 0;
              try {
                if (typeof e[d] != "function") {
                  var j = Error((i || "React class") + ": " + o + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw j.name = "Invariant Violation", j;
                }
                b = e[d](r, d, i, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch ($) {
                b = $;
              }
              b && !(b instanceof Error) && (dr(s), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", o, d, typeof b), dr(null)), b instanceof Error && !(b.message in Jr) && (Jr[b.message] = !0, dr(s), m("Failed %s type: %s", o, b.message), dr(null));
            }
        }
      }
      function Ue(e) {
        if (e) {
          var r = e._owner, o = fr(e.type, e._source, r ? r.type : null);
          Ce(o);
        } else
          Ce(null);
      }
      var Fr;
      Fr = !1;
      function Zr() {
        if (re.current) {
          var e = ye(re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function St(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), o = e.lineNumber;
          return `

Check your code at ` + r + ":" + o + ".";
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
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (r = `

Check the top-level render call using <` + o + ">.");
        }
        return r;
      }
      function rt(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var o = kt(r);
          if (!et[o]) {
            et[o] = !0;
            var i = "";
            e && e._owner && e._owner !== re.current && (i = " It was passed a child from " + ye(e._owner.type) + "."), Ue(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, i), Ue(null);
          }
        }
      }
      function tt(e, r) {
        if (typeof e == "object") {
          if ($e(e))
            for (var o = 0; o < e.length; o++) {
              var i = e[o];
              Ee(i) && rt(i, r);
            }
          else if (Ee(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var s = U(e);
            if (typeof s == "function" && s !== e.entries)
              for (var g = s.call(e), d; !(d = g.next()).done; )
                Ee(d.value) && rt(d.value, r);
          }
        }
      }
      function nt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var o;
          if (typeof r == "function")
            o = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === W || r.$$typeof === J))
            o = r.propTypes;
          else
            return;
          if (o) {
            var i = ye(r);
            Tt(o, e.props, "prop", i, e);
          } else if (r.PropTypes !== void 0 && !Fr) {
            Fr = !0;
            var s = ye(r);
            m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function jt(e) {
        {
          for (var r = Object.keys(e.props), o = 0; o < r.length; o++) {
            var i = r[o];
            if (i !== "children" && i !== "key") {
              Ue(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), Ue(null);
              break;
            }
          }
          e.ref !== null && (Ue(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), Ue(null));
        }
      }
      function at(e, r, o) {
        var i = u(e);
        if (!i) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = Pt(r);
          g ? s += g : s += Zr();
          var d;
          e === null ? d = "null" : $e(e) ? d = "array" : e !== void 0 && e.$$typeof === a ? (d = "<" + (ye(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, m("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, s);
        }
        var b = Er.apply(this, arguments);
        if (b == null)
          return b;
        if (i)
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
      function Dt(e, r, o) {
        for (var i = wr.apply(this, arguments), s = 2; s < arguments.length; s++)
          tt(arguments[s], i.type);
        return nt(i), i;
      }
      function At(e, r) {
        var o = se.transition;
        se.transition = {};
        var i = se.transition;
        se.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (se.transition = o, o === null && i._updatedFibers) {
            var s = i._updatedFibers.size;
            s > 10 && le("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), i._updatedFibers.clear();
          }
        }
      }
      var it = !1, pr = null;
      function It(e) {
        if (pr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), o = P && P[r];
            pr = o.call(P, "timers").setImmediate;
          } catch {
            pr = function(s) {
              it === !1 && (it = !0, typeof MessageChannel > "u" && m("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var g = new MessageChannel();
              g.port1.onmessage = s, g.port2.postMessage(void 0);
            };
          }
        return pr(e);
      }
      var Ye = 0, ut = !1;
      function Ft(e) {
        {
          var r = Ye;
          Ye++, G.current === null && (G.current = []);
          var o = G.isBatchingLegacy, i;
          try {
            if (G.isBatchingLegacy = !0, i = e(), !o && G.didScheduleLegacyUpdate) {
              var s = G.current;
              s !== null && (G.didScheduleLegacyUpdate = !1, Mr(s));
            }
          } catch (H) {
            throw vr(r), H;
          } finally {
            G.isBatchingLegacy = o;
          }
          if (i !== null && typeof i == "object" && typeof i.then == "function") {
            var g = i, d = !1, b = {
              then: function(H, K) {
                d = !0, g.then(function(ee) {
                  vr(r), Ye === 0 ? $r(ee, H, K) : H(ee);
                }, function(ee) {
                  vr(r), K(ee);
                });
              }
            };
            return !ut && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              d || (ut = !0, m("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), b;
          } else {
            var j = i;
            if (vr(r), Ye === 0) {
              var $ = G.current;
              $ !== null && (Mr($), G.current = null);
              var Y = {
                then: function(H, K) {
                  G.current === null ? (G.current = [], $r(j, H, K)) : H(j);
                }
              };
              return Y;
            } else {
              var V = {
                then: function(H, K) {
                  H(j);
                }
              };
              return V;
            }
          }
        }
      }
      function vr(e) {
        e !== Ye - 1 && m("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ye = e;
      }
      function $r(e, r, o) {
        {
          var i = G.current;
          if (i !== null)
            try {
              Mr(i), It(function() {
                i.length === 0 ? (G.current = null, r(e)) : $r(e, r, o);
              });
            } catch (s) {
              o(s);
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
              var o = e[r];
              do
                o = o(!0);
              while (o !== null);
            }
            e.length = 0;
          } catch (i) {
            throw e = e.slice(r + 1), i;
          } finally {
            Lr = !1;
          }
        }
      }
      var $t = at, Lt = Dt, Mt = xt, Nt = {
        map: Ie,
        forEach: or,
        count: Tr,
        toArray: Sr,
        only: ir
      };
      p.Children = Nt, p.Component = T, p.Fragment = y, p.Profiler = R, p.PureComponent = X, p.StrictMode = k, p.Suspense = L, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q, p.cloneElement = Lt, p.createContext = ur, p.createElement = $t, p.createFactory = Mt, p.createRef = gr, p.forwardRef = xr, p.isValidElement = Ee, p.lazy = jr, p.memo = l, p.startTransition = At, p.unstable_act = Ft, p.useCallback = oe, p.useContext = x, p.useDebugValue = fe, p.useDeferredValue = gt, p.useEffect = Z, p.useId = bt, p.useImperativeHandle = sr, p.useInsertionEffect = B, p.useLayoutEffect = q, p.useMemo = we, p.useReducer = S, p.useRef = w, p.useState = I, p.useSyncExternalStore = _t, p.useTransition = mt, p.version = O, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(hr, hr.exports)), hr.exports;
}
(function(P) {
  process.env.NODE_ENV === "production" ? P.exports = Ht() : P.exports = zt();
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
  var P = mr.exports, p = Symbol.for("react.element"), O = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, v = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(R, _, h) {
    var W, L = {}, z = null, J = null;
    h !== void 0 && (z = "" + h), _.key !== void 0 && (z = "" + _.key), _.ref !== void 0 && (J = _.ref);
    for (W in _)
      a.call(_, W) && !y.hasOwnProperty(W) && (L[W] = _[W]);
    if (R && R.defaultProps)
      for (W in _ = R.defaultProps, _)
        L[W] === void 0 && (L[W] = _[W]);
    return { $$typeof: p, type: R, key: z, ref: J, props: L, _owner: v.current };
  }
  return Ke.Fragment = O, Ke.jsx = k, Ke.jsxs = k, Ke;
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
    var P = mr.exports, p = Symbol.for("react.element"), O = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), R = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), ie = Symbol.iterator, ge = "@@iterator";
    function ne(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = ie && t[ie] || t[ge];
      return typeof u == "function" ? u : null;
    }
    var ue = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function U(t) {
      {
        for (var u = arguments.length, l = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
          l[f - 1] = arguments[f];
        ce("error", t, l);
      }
    }
    function ce(t, u, l) {
      {
        var f = ue.ReactDebugCurrentFrame, x = f.getStackAddendum();
        x !== "" && (u += "%s", l = l.concat([x]));
        var I = l.map(function(S) {
          return String(S);
        });
        I.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, I);
      }
    }
    var se = !1, G = !1, re = !1, pe = !1, he = !1, Ce;
    Ce = Symbol.for("react.module.reference");
    function Oe(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === a || t === y || he || t === v || t === h || t === W || pe || t === J || se || G || re || typeof t == "object" && t !== null && (t.$$typeof === z || t.$$typeof === L || t.$$typeof === k || t.$$typeof === R || t.$$typeof === _ || t.$$typeof === Ce || t.getModuleId !== void 0));
    }
    function Be(t, u, l) {
      var f = t.displayName;
      if (f)
        return f;
      var x = u.displayName || u.name || "";
      return x !== "" ? l + "(" + x + ")" : l;
    }
    function Te(t) {
      return t.displayName || "Context";
    }
    function te(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && U("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case a:
          return "Fragment";
        case O:
          return "Portal";
        case y:
          return "Profiler";
        case v:
          return "StrictMode";
        case h:
          return "Suspense";
        case W:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case R:
            var u = t;
            return Te(u) + ".Consumer";
          case k:
            var l = t;
            return Te(l._context) + ".Provider";
          case _:
            return Be(t, t.render, "ForwardRef");
          case L:
            var f = t.displayName || null;
            return f !== null ? f : te(t.type) || "Memo";
          case z: {
            var x = t, I = x._payload, S = x._init;
            try {
              return te(S(I));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ae = Object.assign, Q = 0, le, m, ve, Se, n, c, E;
    function D() {
    }
    D.__reactDisabledLog = !0;
    function T() {
      {
        if (Q === 0) {
          le = console.log, m = console.info, ve = console.warn, Se = console.error, n = console.group, c = console.groupCollapsed, E = console.groupEnd;
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
              value: m
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
        Q < 0 && U("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = ue.ReactCurrentDispatcher, F;
    function A(t, u, l) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (x) {
            var f = x.stack.trim().match(/\n( *(at )?)/);
            F = f && f[1] || "";
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
        var l = be.get(t);
        if (l !== void 0)
          return l;
      }
      var f;
      X = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var I;
      I = N.current, N.current = null, T();
      try {
        if (u) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (fe) {
              f = fe;
            }
            Reflect.construct(t, [], S);
          } else {
            try {
              S.call();
            } catch (fe) {
              f = fe;
            }
            t.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (fe) {
            f = fe;
          }
          t();
        }
      } catch (fe) {
        if (fe && f && typeof fe.stack == "string") {
          for (var w = fe.stack.split(`
`), Z = f.stack.split(`
`), B = w.length - 1, q = Z.length - 1; B >= 1 && q >= 0 && w[B] !== Z[q]; )
            q--;
          for (; B >= 1 && q >= 0; B--, q--)
            if (w[B] !== Z[q]) {
              if (B !== 1 || q !== 1)
                do
                  if (B--, q--, q < 0 || w[B] !== Z[q]) {
                    var oe = `
` + w[B].replace(" at new ", " at ");
                    return t.displayName && oe.includes("<anonymous>") && (oe = oe.replace("<anonymous>", t.displayName)), typeof t == "function" && be.set(t, oe), oe;
                  }
                while (B >= 1 && q >= 0);
              break;
            }
        }
      } finally {
        X = !1, N.current = I, M(), Error.prepareStackTrace = x;
      }
      var we = t ? t.displayName || t.name : "", sr = we ? A(we) : "";
      return typeof t == "function" && be.set(t, sr), sr;
    }
    function $e(t, u, l) {
      return Je(t, !1);
    }
    function br(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function Le(t, u, l) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Je(t, br(t));
      if (typeof t == "string")
        return A(t);
      switch (t) {
        case h:
          return A("Suspense");
        case W:
          return A("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case _:
            return $e(t.render);
          case L:
            return Le(t.type, u, l);
          case z: {
            var f = t, x = f._payload, I = f._init;
            try {
              return Le(I(x), u, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Pe = Object.prototype.hasOwnProperty, ke = {}, Qe = ue.ReactDebugCurrentFrame;
    function je(t) {
      if (t) {
        var u = t._owner, l = Le(t.type, t._source, u ? u.type : null);
        Qe.setExtraStackFrame(l);
      } else
        Qe.setExtraStackFrame(null);
    }
    function ye(t, u, l, f, x) {
      {
        var I = Function.call.bind(Pe);
        for (var S in t)
          if (I(t, S)) {
            var w = void 0;
            try {
              if (typeof t[S] != "function") {
                var Z = Error((f || "React class") + ": " + l + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Z.name = "Invariant Violation", Z;
              }
              w = t[S](u, S, f, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (B) {
              w = B;
            }
            w && !(w instanceof Error) && (je(x), U("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", l, S, typeof w), je(null)), w instanceof Error && !(w.message in ke) && (ke[w.message] = !0, je(x), U("Failed %s type: %s", l, w.message), je(null));
          }
      }
    }
    var xe = Array.isArray;
    function Me(t) {
      return xe(t);
    }
    function Ze(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, l = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l;
      }
    }
    function er(t) {
      try {
        return Ne(t), !1;
      } catch {
        return !0;
      }
    }
    function Ne(t) {
      return "" + t;
    }
    function He(t) {
      if (er(t))
        return U("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(t)), Ne(t);
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
        var l = te(_e.current.type);
        De[l] || (U('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', te(_e.current.type), t.ref), De[l] = !0);
      }
    }
    function Ee(t, u) {
      {
        var l = function() {
          rr || (rr = !0, U("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function nr(t, u) {
      {
        var l = function() {
          tr || (tr = !0, U("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var Cr = function(t, u, l, f, x, I, S) {
      var w = {
        $$typeof: p,
        type: t,
        key: u,
        ref: l,
        props: S,
        _owner: I
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function Or(t, u, l, f, x) {
      {
        var I, S = {}, w = null, Z = null;
        l !== void 0 && (He(l), w = "" + l), Rr(u) && (He(u.key), w = "" + u.key), Er(u) && (Z = u.ref, wr(u, x));
        for (I in u)
          Pe.call(u, I) && !_r.hasOwnProperty(I) && (S[I] = u[I]);
        if (t && t.defaultProps) {
          var B = t.defaultProps;
          for (I in B)
            S[I] === void 0 && (S[I] = B[I]);
        }
        if (w || Z) {
          var q = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          w && Ee(S, q), Z && nr(S, q);
        }
        return Cr(t, w, Z, x, f, _e.current, S);
      }
    }
    var We = ue.ReactCurrentOwner, ar = ue.ReactDebugCurrentFrame;
    function me(t) {
      if (t) {
        var u = t._owner, l = Le(t.type, t._source, u ? u.type : null);
        ar.setExtraStackFrame(l);
      } else
        ar.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function Re(t) {
      return typeof t == "object" && t !== null && t.$$typeof === p;
    }
    function Ie() {
      {
        if (We.current) {
          var t = te(We.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Tr(t) {
      {
        if (t !== void 0) {
          var u = t.fileName.replace(/^.*[\\\/]/, ""), l = t.lineNumber;
          return `

Check your code at ` + u + ":" + l + ".";
        }
        return "";
      }
    }
    var or = {};
    function Sr(t) {
      {
        var u = Ie();
        if (!u) {
          var l = typeof t == "string" ? t : t.displayName || t.name;
          l && (u = `

Check the top-level render call using <` + l + ">.");
        }
        return u;
      }
    }
    function ir(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var l = Sr(u);
        if (or[l])
          return;
        or[l] = !0;
        var f = "";
        t && t._owner && t._owner !== We.current && (f = " It was passed a child from " + te(t._owner.type) + "."), me(t), U('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, f), me(null);
      }
    }
    function ur(t, u) {
      {
        if (typeof t != "object")
          return;
        if (Me(t))
          for (var l = 0; l < t.length; l++) {
            var f = t[l];
            Re(f) && ir(f, u);
          }
        else if (Re(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var x = ne(t);
          if (typeof x == "function" && x !== t.entries)
            for (var I = x.call(t), S; !(S = I.next()).done; )
              Re(S.value) && ir(S.value, u);
        }
      }
    }
    function Fe(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var l;
        if (typeof u == "function")
          l = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === _ || u.$$typeof === L))
          l = u.propTypes;
        else
          return;
        if (l) {
          var f = te(u);
          ye(l, t.props, "prop", f, t);
        } else if (u.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var x = te(u);
          U("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && U("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ze(t) {
      {
        for (var u = Object.keys(t.props), l = 0; l < u.length; l++) {
          var f = u[l];
          if (f !== "children" && f !== "key") {
            me(t), U("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), me(null);
            break;
          }
        }
        t.ref !== null && (me(t), U("Invalid attribute `ref` supplied to `React.Fragment`."), me(null));
      }
    }
    function qe(t, u, l, f, x, I) {
      {
        var S = Oe(t);
        if (!S) {
          var w = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Z = Tr(x);
          Z ? w += Z : w += Ie();
          var B;
          t === null ? B = "null" : Me(t) ? B = "array" : t !== void 0 && t.$$typeof === p ? (B = "<" + (te(t.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : B = typeof t, U("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, w);
        }
        var q = Or(t, u, l, x, I);
        if (q == null)
          return q;
        if (S) {
          var oe = u.children;
          if (oe !== void 0)
            if (f)
              if (Me(oe)) {
                for (var we = 0; we < oe.length; we++)
                  ur(oe[we], t);
                Object.freeze && Object.freeze(oe);
              } else
                U("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ur(oe, t);
        }
        return t === a ? ze(q) : Fe(q), q;
      }
    }
    function Pr(t, u, l) {
      return qe(t, u, l, !0);
    }
    function kr(t, u, l) {
      return qe(t, u, l, !1);
    }
    var jr = kr, xr = Pr;
    Xe.Fragment = a, Xe.jsx = jr, Xe.jsxs = xr;
  }()), Xe;
}
(function(P) {
  process.env.NODE_ENV === "production" ? P.exports = Gt() : P.exports = Kt();
})(Ur);
const de = Ur.exports.jsx, Xt = Ur.exports.jsxs;
var Jt = ["u", "d", "l", "r", "lu", "ru", "rd", "ld"], yt = 50, ht = 50, Qt = function(P) {
  Vt(p, P);
  function p(O) {
    var a = P.call(this, O) || this;
    return Object.defineProperty(a, "isMouseDown", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(a, "startX", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(a, "startY", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(a, "width", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(a, "height", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(a, "currentX", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(a, "currentY", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(a, "dragDirection", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(a, "element", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(a, "mouseDownHandler", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: function(v) {
        v.preventDefault(), a.startX = v.clientX, a.startY = v.clientY;
        var y = v.target.dataset.key;
        y && Jt.includes(y) ? a.isMouseDownOnDrag(v.target) && (a.isMouseDown = !0, a.dragDirection = y) : a.isMouseDownOnDrag(v.target) && (a.isMouseDown = !0, a.element && (a.currentX = a.element.parentElement.offsetLeft, a.currentY = a.element.parentElement.offsetTop));
      }
    }), Object.defineProperty(a, "mouseMoveHandler", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: function(v) {
        v.preventDefault();
        var y = v.clientX - a.startX, k = v.clientY - a.startY;
        if (a.isMouseDown) {
          if (a.dragDirection)
            a.transform(y, k);
          else if (a.element) {
            var R = a.currentX + y, _ = a.currentY + k, h = document.getElementById(a.props.container);
            R < 0 && (R = 0), _ < 0 && (_ = 0), h && (R > h.clientWidth - a.width && (R = h.clientWidth - a.width), _ > h.clientHeight - a.height && (_ = h.clientHeight - a.height)), a.element.parentElement.style.left = "".concat(R, "px"), a.element.parentElement.style.top = "".concat(_, "px");
          }
          a.props.onChange && a.props.onChange({
            x: a.element.parentElement.offsetLeft,
            y: a.element.parentElement.offsetTop,
            width: a.width,
            height: a.height
          });
        }
      }
    }), Object.defineProperty(a, "mouseUpHandler", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: function(v) {
        v.preventDefault(), a.isMouseDown = !1, a.element && (a.currentX = a.element.parentElement.offsetLeft, a.currentY = a.element.parentElement.offsetTop, a.width = a.element.parentElement.clientWidth, a.height = a.element.parentElement.clientHeight), a.dragDirection = "";
      }
    }), Object.defineProperty(a, "transform", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: function(v, y) {
        switch (a.dragDirection) {
          case "l":
            a.extendToLeft(v);
            break;
          case "r":
            a.extendToRight(v);
            break;
          case "u":
            a.extendToUp(y);
            break;
          case "d":
            a.extendToDown(y);
            break;
          case "lu":
            a.extendToLeft(v), a.extendToUp(y);
            break;
          case "ru":
            a.extendToRight(v), a.extendToUp(y);
            break;
          case "ld":
            a.extendToLeft(v), a.extendToDown(y);
            break;
          case "rd":
            a.extendToRight(v), a.extendToDown(y);
        }
        var k = {
          x: a.element.parentElement.offsetLeft,
          y: a.element.parentElement.offsetTop,
          width: a.element.parentElement.clientWidth,
          height: a.element.parentElement.clientHeight
        };
        a.props.onChange && a.props.onChange(k);
      }
    }), Object.defineProperty(a, "extendToLeft", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: function(v) {
        if (a.element) {
          var y = a.currentX + v;
          if (y < 0)
            y = 0, a.element.parentElement.style.left = "".concat(y, "px");
          else {
            var k = a.props.minWidth, R = k === void 0 ? yt : k, _ = a.width - v;
            _ < R ? _ = R : a.element.parentElement.style.left = "".concat(y, "px"), a.element.parentElement.style.width = "".concat(_, "px");
          }
        }
      }
    }), Object.defineProperty(a, "extendToRight", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: function(v) {
        if (a.element) {
          var y = a.width + v, k = document.getElementById(a.props.container);
          k && a.currentX + y >= k.clientWidth && (y = k.clientWidth - a.currentX);
          var R = a.props.minWidth, _ = R === void 0 ? yt : R;
          y < _ && (y = _), a.element.parentElement.style.width = "".concat(y, "px");
        }
      }
    }), Object.defineProperty(a, "extendToUp", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: function(v) {
        if (a.element) {
          var y = a.currentY + v;
          if (y <= 0)
            y = 0, a.element.parentElement.style.top = "".concat(y, "px");
          else {
            var k = a.height - v, R = a.props.minHeight, _ = R === void 0 ? ht : R;
            k < _ ? k = _ : a.element.parentElement.style.top = "".concat(y, "px"), a.element.parentElement.style.height = "".concat(k, "px");
          }
        }
      }
    }), Object.defineProperty(a, "extendToDown", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: function(v) {
        if (a.element) {
          var y = a.height + v, k = document.getElementById(a.props.container);
          k && y + a.currentY > k.clientHeight && (y = k.clientHeight - a.currentY);
          var R = a.props.minHeight, _ = R === void 0 ? ht : R;
          y < _ && (y = _), a.element.parentElement.style.height = "".concat(y, "px");
        }
      }
    }), Object.defineProperty(a, "isMouseDownOnDrag", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: function(v) {
        return !v || !v.parentElement ? !1 : v.parentElement == a.element ? !0 : a.isMouseDownOnDrag(v.parentElement);
      }
    }), a.currentX = O.x || 0, a.currentY = O.y || 0, a.width = O.width || 100, a.height = O.height || 100, a;
  }
  return Object.defineProperty(p.prototype, "componentDidMount", {
    enumerable: !1,
    configurable: !0,
    writable: !0,
    value: function() {
      window.addEventListener("mousedown", this.mouseDownHandler), window.addEventListener("mousemove", this.mouseMoveHandler), window.addEventListener("mouseup", this.mouseUpHandler);
    }
  }), Object.defineProperty(p.prototype, "render", {
    enumerable: !1,
    configurable: !0,
    writable: !0,
    value: function() {
      var O = this, a = this.props, v = a.anchorBorderColor, y = v === void 0 ? "#666666" : v, k = a.anchorBorderWidth, R = k === void 0 ? 1 : k, _ = a.anchorSize, h = _ === void 0 ? 6 : _, W = a.anchorColor, L = W === void 0 ? "#ffffff" : W, z = "solid ".concat(R, "px ").concat(y), J = this.props, ie = J.background, ge = ie === void 0 ? "rgba(243,255,226,.8)" : ie, ne = J.containerStyle, ue = ne === void 0 ? {} : ne, U = {
        background: ge,
        border: "solid 1px #000000"
      }, ce = Object.assign({}, U, ue);
      return ce.position = "absolute", de("div", Ve({
        style: ce
      }, {
        children: Xt("div", Ve({
          className: "simple-rc-drag-container",
          ref: function(se) {
            O.element = se, O.element && (O.element.parentElement.style.left = "".concat(O.currentX, "px"), O.element.parentElement.style.top = "".concat(O.currentY, "px"), O.element.parentElement.style.width = "".concat(O.width, "px"), O.element.parentElement.style.height = "".concat(O.height, "px"));
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
            className: "lu",
            style: {
              border: z,
              position: "absolute",
              backgroundColor: L,
              width: h,
              height: h,
              left: -h / 2 - R,
              top: -h / 2 - R
            }
          }), de("div", {
            "data-key": "u",
            className: "u",
            style: {
              border: z,
              position: "absolute",
              backgroundColor: L,
              width: h,
              height: h,
              left: "calc(50% - ".concat(h / 2, "px)"),
              top: -h / 2 - R
            }
          }), de("div", {
            "data-key": "ru",
            className: "ru",
            style: {
              border: z,
              position: "absolute",
              backgroundColor: L,
              width: h,
              height: h,
              left: "calc(100% - ".concat(h / 2, "px)"),
              top: -h / 2 - R
            }
          }), de("div", {
            "data-key": "ld",
            className: "ld",
            style: {
              border: z,
              position: "absolute",
              backgroundColor: L,
              width: h,
              height: h,
              left: -h / 2 - R,
              top: "calc(100% - ".concat(h / 2, "px)")
            }
          }), de("div", {
            "data-key": "d",
            className: "d",
            style: {
              border: z,
              position: "absolute",
              backgroundColor: L,
              width: h,
              height: h,
              left: "calc(50% - ".concat(h / 2, "px)"),
              top: "calc(100% - ".concat(h / 2, "px)")
            }
          }), de("div", {
            "data-key": "rd",
            className: "rd",
            style: {
              border: z,
              position: "absolute",
              backgroundColor: L,
              width: h,
              height: h,
              left: "calc(100% - ".concat(h / 2, "px)"),
              top: "calc(100% - ".concat(h / 2, "px)")
            }
          }), de("div", {
            "data-key": "l",
            className: "l",
            style: {
              border: z,
              position: "absolute",
              backgroundColor: L,
              width: h,
              height: h,
              left: -h / 2 - R,
              top: "calc(50% - ".concat(h / 2, "px)")
            }
          }), de("div", {
            "data-key": "r",
            className: "r",
            style: {
              border: z,
              position: "absolute",
              backgroundColor: L,
              width: h,
              height: h,
              left: "calc(100% - ".concat(h / 2, "px)"),
              top: "calc(50% - ".concat(h / 2, "px)")
            }
          })]
        }))
      }));
    }
  }), p;
}(qt.Component);
export {
  Qt as default
};
